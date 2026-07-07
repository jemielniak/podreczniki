// Skróty sekcji:
//   PTL = Ptaki – budowa i lot
//   PTR = Rozmnażanie i znaczenie ptaków
//   SSB = Ssaki – środowisko i budowa
//   SSR = Rozmnażanie i różnorodność ssaków
//   MIE = Powtórka mieszana
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R05_PTL_01",
    "section": "Ptaki – budowa i lot",
    "type": "single_choice",
    "prompt": "Która cecha pozwala ptakom żyć w niemal każdych warunkach na Ziemi?",
    "options": [
      "stałocieplność",
      "zmiennocieplność",
      "skóra pokryta śluzem",
      "ciężkie zęby",
      "pancerz z łusek",
      "brak skrzydeł"
    ],
    "answer": 0,
    "explanation": "Ptaki są stałocieplne, więc mogą utrzymywać stałą temperaturę ciała niezależnie od temperatury otoczenia."
  },
  {
    "id": "R05_PTL_02",
    "section": "Ptaki – budowa i lot",
    "type": "multi_select",
    "prompt": "Zaznacz cechy budowy ptaków, które ułatwiają aktywny lot.",
    "options": [
      "opływowy kształt ciała",
      "ciało pokryte piórami",
      "ciężkie zęby",
      "kończyny przednie przekształcone w skrzydła",
      "lekki szkielet",
      "skóra pokryta śluzem"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "image": "/img/r05_ptak_przystosowania_do_lotu.jpg",
    "explanation": "Do lotu przystosowują ptaki między innymi skrzydła, opływowy kształt ciała, pióra i lekki szkielet."
  },
  {
    "id": "R05_PTL_03",
    "section": "Ptaki – budowa i lot",
    "type": "true_false",
    "prompt": "Kości pneumatyczne ptaków mają w środku puste przestrzenie.",
    "options": null,
    "answer": true,
    "explanation": "Wiele kości ptaków jest lekkich, bo zawiera puste przestrzenie nazywane kośćmi pneumatycznymi."
  },
  {
    "id": "R05_PTL_04",
    "section": "Ptaki – budowa i lot",
    "type": "fill_in",
    "prompt": "Pióra chronią ptaki przed __________ i __________ oraz ułatwiają latanie.",
    "options": null,
    "answer": [
      "wyziębieniem",
      "przegrzaniem"
    ],
    "altAnswers": [
      [
        "wyziębieniem",
        "ochłodzeniem"
      ],
      [
        "przegrzaniem"
      ]
    ],
    "explanation": "Pióra pełnią funkcję ochronną i izolacyjną, a także pomagają w locie."
  },
  {
    "id": "R05_PTL_05",
    "section": "Ptaki – budowa i lot",
    "type": "match",
    "prompt": "Połącz rodzaj pióra z miejscem lub funkcją.",
    "options": null,
    "left": [
      "lotka",
      "sterówka",
      "pióro puchowe",
      "pióro pokrywowe"
    ],
    "right": [
      "na skrzydłach",
      "na ogonie",
      "tworzy warstwę izolacyjną",
      "pokrywa pióra puchowe"
    ],
    "answer": {
      "lotka": "na skrzydłach",
      "sterówka": "na ogonie",
      "pióro puchowe": "tworzy warstwę izolacyjną",
      "pióro pokrywowe": "pokrywa pióra puchowe"
    },
    "image": "/img/r05_rodzaje_pior.jpg",
    "explanation": "Lotki znajdują się na skrzydłach, sterówki na ogonie, pióra puchowe izolują, a pokrywowe przykrywają puchowe."
  },
  {
    "id": "R05_PTL_06",
    "section": "Ptaki – budowa i lot",
    "type": "single_choice",
    "prompt": "Co u ptaków okrywa bezzębne szczęki?",
    "options": [
      "rogowy dziób",
      "małżowina uszna",
      "sierść",
      "łuska",
      "płetwa",
      "łożysko"
    ],
    "answer": 0,
    "explanation": "Ptaki mają rogowy dziób, który okrywa bezzębne szczęki i jest lżejszy niż zęby."
  },
  {
    "id": "R05_PTL_07",
    "section": "Ptaki – budowa i lot",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: pióra, skrzydła, płuca z workami powietrznymi, sierść.",
    "options": null,
    "answer": "sierść",
    "explanation": "Sierść jest charakterystyczna dla ssaków, a pozostałe elementy są związane z ptakami i ich przystosowaniem do lotu."
  },
  {
    "id": "R05_PTL_08",
    "section": "Ptaki – budowa i lot",
    "type": "scenario",
    "prompt": "Ptak podczas lotu potrzebuje dużo energii, a jego komórki muszą stale otrzymywać tlen. Która cecha pomaga w przepływie tlenu zarówno podczas wdechu, jak i wydechu?",
    "options": [
      "płuca z workami powietrznymi",
      "gruba sierść",
      "skóra pokryta śluzem",
      "ciężka czaszka z zębami"
    ],
    "answer": 0,
    "image": "/img/r05_ptak_przystosowania_do_lotu.jpg",
    "explanation": "Płuca z workami powietrznymi umożliwiają wydajny przepływ tlenu, dzięki czemu ptak uzyskuje więcej energii do lotu."
  },
  {
    "id": "R05_PTL_09",
    "section": "Ptaki – budowa i lot",
    "type": "true_false",
    "prompt": "Najwięcej gatunków ptaków żyje w okolicach równika.",
    "options": null,
    "answer": true,
    "explanation": "W podręczniku wskazano, że najwięcej gatunków ptaków występuje w okolicach równika, gdzie środowiska są bardzo różnorodne."
  },
  {
    "id": "R05_PTL_10",
    "section": "Ptaki – budowa i lot",
    "type": "riddle",
    "prompt": "Jak nazywają się lekkie kości ptaków, które mają w środku puste przestrzenie?",
    "options": null,
    "answer": "kości pneumatyczne",
    "altAnswers": [
      "kości pneumatyczne",
      "pneumatyczne kości"
    ],
    "explanation": "Takie kości zmniejszają masę ciała ptaka i są jednym z przystosowań do lotu."
  },
  {
    "id": "R05_PTL_11",
    "section": "Ptaki – budowa i lot",
    "type": "sort",
    "prompt": "Przyporządkuj cechy ptaka do tego, czy widać je z zewnątrz, czy są ukryte wewnątrz ciała.",
    "options": null,
    "items": [
      "skrzydła",
      "pióra",
      "opływowa sylwetka",
      "kości pneumatyczne",
      "worki powietrzne"
    ],
    "categories": [
      "widoczne z zewnątrz",
      "ukryte wewnątrz ciała"
    ],
    "answer": {
      "widoczne z zewnątrz": [
        "skrzydła",
        "pióra",
        "opływowa sylwetka"
      ],
      "ukryte wewnątrz ciała": [
        "kości pneumatyczne",
        "worki powietrzne"
      ]
    },
    "explanation": "Skrzydła, pióra i opływowa sylwetka są widoczne, a kości pneumatyczne oraz worki powietrzne znajdują się wewnątrz ciała."
  },
  {
    "id": "R05_PTL_12",
    "section": "Ptaki – budowa i lot",
    "type": "single_choice",
    "prompt": "Który opis dotyczy strusia czerwonoskórego?",
    "options": [
      "Nie potrafi latać, ale szybko biega.",
      "Ma skórny worek w dolnej części dzioba.",
      "Jest najmniejszym ptakiem Polski.",
      "Łowi kilka ryb naraz spłaszczonym dziobem.",
      "Jest ptakiem nocnym polującym na ssaki.",
      "Waży tyle co moneta 1 zł."
    ],
    "answer": 0,
    "explanation": "Struś czerwonoskóry nie potrafi latać, ale szybko biega, osiąga ponad 2 m wysokości i waży ponad 100 kg."
  },
  {
    "id": "R05_PTR_01",
    "section": "Rozmnażanie i znaczenie ptaków",
    "type": "sequence",
    "prompt": "Ułóż etapy rozmnażania ptaków od początku przygotowań do pojawienia się piskląt.",
    "options": null,
    "items": [
      "budowa gniazda",
      "odpowiednia ilość światła",
      "zaloty, czyli toki",
      "składanie i wysiadywanie jaj",
      "łączenie się w pary",
      "wyklucie się piskląt"
    ],
    "answer": [
      "odpowiednia ilość światła",
      "zaloty, czyli toki",
      "łączenie się w pary",
      "budowa gniazda",
      "składanie i wysiadywanie jaj",
      "wyklucie się piskląt"
    ],
    "image": "/img/r05_etapy_rozmnazania_ptakow.jpg",
    "explanation": "Rozmnażanie ptaków zaczyna się od warunków świetlnych i hormonów, następnie są toki, łączenie w pary, budowa gniazda oraz składanie i wysiadywanie jaj."
  },
  {
    "id": "R05_PTR_02",
    "section": "Rozmnażanie i znaczenie ptaków",
    "type": "single_choice",
    "prompt": "Czym są toki u ptaków?",
    "options": [
      "zalotami samców",
      "wysiadywaniem jaj",
      "rodzajem piór",
      "senem zimowym",
      "budową worków powietrznych",
      "miejscem zimowania"
    ],
    "answer": 0,
    "explanation": "Toki to zaloty, podczas których samce przywabiają samice i odstraszają rywali."
  },
  {
    "id": "R05_PTR_03",
    "section": "Rozmnażanie i znaczenie ptaków",
    "type": "true_false",
    "prompt": "Wszystkie ptaki są jajorodne i zachodzi u nich zapłodnienie wewnętrzne.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik podaje, że wszystkie ptaki są jajorodne, a do zapłodnienia dochodzi wewnątrz ciała samicy."
  },
  {
    "id": "R05_PTR_04",
    "section": "Rozmnażanie i znaczenie ptaków",
    "type": "fill_in",
    "prompt": "Pisklęta kur i kaczek to __________, a pisklęta sikory bogatki i bociana białego to __________.",
    "options": null,
    "answer": [
      "zagniazdowniki",
      "gniazdowniki"
    ],
    "altAnswers": [
      [
        "zagniazdowniki",
        "zagniazdownikami"
      ],
      [
        "gniazdowniki",
        "gniazdownikami"
      ]
    ],
    "explanation": "Zagniazdowniki szybko opuszczają gniazdo i pobierają pokarm, a gniazdowniki pozostają w gnieździe i są karmione przez rodziców."
  },
  {
    "id": "R05_PTR_05",
    "section": "Rozmnażanie i znaczenie ptaków",
    "type": "sort",
    "prompt": "Przyporządkuj przykładowe ptaki do środowisk pokazanych w podręczniku.",
    "options": null,
    "items": [
      "wróbel domowy",
      "kawka zwyczajna",
      "bocian biały",
      "szpak",
      "dzięcioł duży",
      "kowalik zwyczajny"
    ],
    "categories": [
      "miasto",
      "wieś",
      "las"
    ],
    "answer": {
      "miasto": [
        "wróbel domowy",
        "kawka zwyczajna"
      ],
      "wieś": [
        "bocian biały",
        "szpak"
      ],
      "las": [
        "dzięcioł duży",
        "kowalik zwyczajny"
      ]
    },
    "image": "/img/r05_ptaki_srodowiska_polski.jpg",
    "explanation": "W podręczniku podano przykłady ptaków żyjących w polskich miastach, na wsi i w lesie."
  },
  {
    "id": "R05_PTR_06",
    "section": "Rozmnażanie i znaczenie ptaków",
    "type": "scenario",
    "prompt": "W ogrodzie znajdujesz małego kosa siedzącego w trawie. Wygląda jak podlot, czyli pisklę, które opuściło gniazdo, zanim nauczyło się latać. Co należy zrobić?",
    "options": [
      "zostawić go w pobliżu, jeśli nie jest ranny",
      "zabrać go od razu do domu",
      "nakarmić go mlekiem",
      "zamknąć go w pudełku na kilka dni"
    ],
    "answer": 0,
    "explanation": "Podlotów znalezionych w pobliżu gniazd nie należy zabierać do domu, bo rodzice zwykle są w pobliżu, karmią je i ostrzegają przed niebezpieczeństwem."
  },
  {
    "id": "R05_PTR_07",
    "section": "Rozmnażanie i znaczenie ptaków",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady pozytywnego znaczenia ptaków w przyrodzie.",
    "options": [
      "rozsiewanie nasion",
      "zapylanie roślin",
      "oczyszczanie środowiska z padliny",
      "niszczenie zabytków odchodami",
      "udział w łańcuchach pokarmowych",
      "wyjadanie owoców w uprawach"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Ptaki rozsiewają nasiona, zapylają część roślin, oczyszczają środowisko z padliny i są elementem łańcuchów pokarmowych."
  },
  {
    "id": "R05_PTR_08",
    "section": "Rozmnażanie i znaczenie ptaków",
    "type": "single_choice",
    "prompt": "Co oznacza słowo birdwatching użyte w podręczniku?",
    "options": [
      "obserwowanie ptaków",
      "hodowanie ptaków na mięso",
      "badanie tropów ssaków",
      "zapadanie w sen zimowy",
      "lot pikujący",
      "budowanie gniazd"
    ],
    "answer": 0,
    "explanation": "Birdwatching to obserwowanie ptaków w ich naturalnym środowisku."
  },
  {
    "id": "R05_PTR_09",
    "section": "Rozmnażanie i znaczenie ptaków",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: gniazdownik, zagniazdownik, podlot, łożysko.",
    "options": null,
    "answer": "łożysko",
    "explanation": "Łożysko dotyczy rozwoju większości ssaków, a pozostałe pojęcia odnoszą się do rozwoju ptaków."
  },
  {
    "id": "R05_PTR_10",
    "section": "Rozmnażanie i znaczenie ptaków",
    "type": "match",
    "prompt": "Połącz przykład z opisanym znaczeniem ptaków.",
    "options": null,
    "left": [
      "sójka",
      "koliber",
      "sęp",
      "szpak"
    ],
    "right": [
      "rozsiewanie nasion",
      "zapylanie roślin",
      "oczyszczanie środowiska",
      "szkody w uprawach"
    ],
    "answer": {
      "sójka": "rozsiewanie nasion",
      "koliber": "zapylanie roślin",
      "sęp": "oczyszczanie środowiska",
      "szpak": "szkody w uprawach"
    },
    "explanation": "Sójki roznoszą nasiona, kolibry mogą zapylać rośliny, sępy usuwają padlinę, a szpaki mogą wyjadać owoce w uprawach."
  },
  {
    "id": "R05_PTR_11",
    "section": "Rozmnażanie i znaczenie ptaków",
    "type": "fill_in",
    "prompt": "Według podręcznika ptaki zjadają rocznie __________ mln ton __________, w tym wiele uznawanych za szkodniki.",
    "options": null,
    "answer": [
      "400-500",
      "owadów"
    ],
    "altAnswers": [
      [
        "400-500",
        "400–500",
        "400 do 500"
      ],
      [
        "owadów",
        "owady"
      ]
    ],
    "explanation": "Ptaki zjadają ogromne ilości owadów, dzięki czemu ograniczają liczebność wielu gatunków uznawanych za szkodniki."
  },
  {
    "id": "R05_PTR_12",
    "section": "Rozmnażanie i znaczenie ptaków",
    "type": "true_false",
    "prompt": "Po wykluciu się pisklęta przechodzą rozwój prosty.",
    "options": null,
    "answer": true,
    "explanation": "Rozwój prosty oznacza, że młody organizm jest podobny do postaci dorosłej."
  },
  {
    "id": "R05_SSB_01",
    "section": "Ssaki – środowisko i budowa",
    "type": "single_choice",
    "prompt": "Co najbardziej wyróżnia ssaki spośród kręgowców opisanych w rozdziale?",
    "options": [
      "karmienie młodych mlekiem",
      "składanie jaj z wapienną skorupką",
      "ciało pokryte piórami",
      "płuca z workami powietrznymi",
      "bezzębne szczęki",
      "skrzydła z lotkami"
    ],
    "answer": 0,
    "image": "/img/r05_ssaki_srodowiska.jpg",
    "explanation": "Ssaki wytwarzają mleko w gruczołach mlekowych samicy i karmią nim młode."
  },
  {
    "id": "R05_SSB_02",
    "section": "Ssaki – środowisko i budowa",
    "type": "multi_select",
    "prompt": "Zaznacz cechy typowe dla ssaków wymienione w podręczniku.",
    "options": [
      "stałocieplność",
      "włosy lub sierść",
      "zwykle dwie pary kończyn",
      "oczy z powiekami",
      "pióra",
      "płuca z workami powietrznymi"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r05_budowa_ssaka_niedzwiedz.jpg",
    "explanation": "Ssaki są stałocieplne, zwykle mają dwie pary kończyn, oczy z powiekami oraz skórę, z której wyrastają włosy tworzące sierść."
  },
  {
    "id": "R05_SSB_03",
    "section": "Ssaki – środowisko i budowa",
    "type": "true_false",
    "prompt": "Ssaki występują we wszystkich strefach klimatycznych, ponieważ są stałocieplne.",
    "options": null,
    "answer": true,
    "explanation": "Stałocieplność pozwala ssakom funkcjonować niezależnie od temperatury otoczenia."
  },
  {
    "id": "R05_SSB_04",
    "section": "Ssaki – środowisko i budowa",
    "type": "fill_in",
    "prompt": "Ssaki zamieszkują niemal wszystkie rodzaje środowisk na __________ i w __________.",
    "options": null,
    "answer": [
      "lądzie",
      "wodzie"
    ],
    "altAnswers": [
      [
        "lądzie",
        "lądzie i wodzie"
      ],
      [
        "wodzie"
      ]
    ],
    "explanation": "Ssaki żyją w środowiskach lądowych i wodnych, a niektóre latają lub żyją pod ziemią."
  },
  {
    "id": "R05_SSB_05",
    "section": "Ssaki – środowisko i budowa",
    "type": "sort",
    "prompt": "Przyporządkuj ssaki do trybu życia opisanego w podręczniku.",
    "options": null,
    "items": [
      "lis pospolity",
      "orangutan",
      "kret",
      "nietoperz",
      "wieloryb"
    ],
    "categories": [
      "naziemny lub nadrzewny",
      "pod ziemią",
      "w powietrzu",
      "w wodzie"
    ],
    "answer": {
      "naziemny lub nadrzewny": [
        "lis pospolity",
        "orangutan"
      ],
      "pod ziemią": [
        "kret"
      ],
      "w powietrzu": [
        "nietoperz"
      ],
      "w wodzie": [
        "wieloryb"
      ]
    },
    "explanation": "Ssaki mogą prowadzić tryb naziemny, nadrzewny, podziemny, wodny albo aktywnie latać."
  },
  {
    "id": "R05_SSB_06",
    "section": "Ssaki – środowisko i budowa",
    "type": "single_choice",
    "prompt": "Po co niektóre ssaki zapadają w sen zimowy?",
    "options": [
      "aby przetrwać okres małej dostępności pokarmu",
      "aby złożyć jaja w gnieździe",
      "aby zmienić pióra na sierść",
      "aby nauczyć młode latać",
      "aby zapylać rośliny",
      "aby wytworzyć worki powietrzne"
    ],
    "answer": 0,
    "explanation": "Sen zimowy pozwala przeczekać okres chłodu i małej dostępności pokarmu, gdy procesy życiowe zwierzęcia spowalniają."
  },
  {
    "id": "R05_SSB_07",
    "section": "Ssaki – środowisko i budowa",
    "type": "multi_select",
    "prompt": "Zaznacz ssaki, które w podręczniku podano jako przykłady zapadające w sen zimowy.",
    "options": [
      "niedźwiedzie",
      "borsuki",
      "nietoperze",
      "jeże",
      "świstaki",
      "zebry"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "W tekście wymieniono między innymi niedźwiedzie, borsuki, nietoperze, jeże i świstaki."
  },
  {
    "id": "R05_SSB_08",
    "section": "Ssaki – środowisko i budowa",
    "type": "match",
    "prompt": "Połącz element budowy ssaka z jego funkcją.",
    "options": null,
    "left": [
      "ucho zewnętrzne",
      "zęby",
      "włosy lub sierść",
      "kończyny",
      "ogon"
    ],
    "right": [
      "wychwytuje dźwięki",
      "rozdzielają i miażdżą pokarm",
      "chronią przed utratą ciepła",
      "służą do sprawnego poruszania się",
      "pomaga utrzymywać równowagę"
    ],
    "answer": {
      "ucho zewnętrzne": "wychwytuje dźwięki",
      "zęby": "rozdzielają i miażdżą pokarm",
      "włosy lub sierść": "chronią przed utratą ciepła",
      "kończyny": "służą do sprawnego poruszania się",
      "ogon": "pomaga utrzymywać równowagę"
    },
    "image": "/img/r05_budowa_ssaka_niedzwiedz.jpg",
    "explanation": "Budowa zewnętrzna ssaków obejmuje elementy ułatwiające odbiór bodźców, ruch, pobieranie pokarmu i ochronę ciała."
  },
  {
    "id": "R05_SSB_09",
    "section": "Ssaki – środowisko i budowa",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: włosy, sierść, mleko, pióra.",
    "options": null,
    "answer": "pióra",
    "explanation": "Pióra są cechą ptaków, a włosy, sierść i mleko są związane ze ssakami."
  },
  {
    "id": "R05_SSB_10",
    "section": "Ssaki – środowisko i budowa",
    "type": "riddle",
    "prompt": "Jak nazywają się odciski łap pozostawione przez zwierzę w podłożu?",
    "options": null,
    "answer": "tropy",
    "altAnswers": [
      "tropy",
      "trop"
    ],
    "image": "/img/r05_tropy_ssakow.jpg",
    "explanation": "Tropy to odciski łap, które można zauważyć na przykład na śniegu lub w błocie."
  },
  {
    "id": "R05_SSB_11",
    "section": "Ssaki – środowisko i budowa",
    "type": "true_false",
    "prompt": "Ślady zwierząt to oznaki ich aktywności, na przykład nory, odchody lub zgryzione drzewka.",
    "options": null,
    "answer": true,
    "image": "/img/r05_tropy_ssakow.jpg",
    "explanation": "Podręcznik odróżnia tropy, czyli odciski łap, od śladów będących oznakami aktywności zwierząt."
  },
  {
    "id": "R05_SSB_12",
    "section": "Ssaki – środowisko i budowa",
    "type": "scenario",
    "prompt": "Podczas zimowej wycieczki widzisz na śniegu rząd odciśniętych łap. Jak nazwać te znaki?",
    "options": [
      "tropy",
      "gniazda",
      "łuski",
      "pióra"
    ],
    "answer": 0,
    "image": "/img/r05_tropy_ssakow.jpg",
    "explanation": "Odciski łap pozostawione w podłożu nazywamy tropami."
  },
  {
    "id": "R05_SSR_01",
    "section": "Rozmnażanie i różnorodność ssaków",
    "type": "single_choice",
    "prompt": "Co oznacza, że ssaki są rozdzielnopłciowe?",
    "options": [
      "występują samce i samice",
      "wszystkie składają jaja",
      "nie karmią młodych",
      "nie mają łożyska",
      "żyją wyłącznie w wodzie",
      "są zmiennocieplne"
    ],
    "answer": 0,
    "image": "/img/r05_rozmnazanie_ssakow_lozysko.jpg",
    "explanation": "Rozdzielnopłciowość oznacza, że występują dwie płcie: samce i samice."
  },
  {
    "id": "R05_SSR_02",
    "section": "Rozmnażanie i różnorodność ssaków",
    "type": "true_false",
    "prompt": "Prawie wszystkie ssaki są żyworodne, czyli rodzą swoje potomstwo.",
    "options": null,
    "answer": true,
    "explanation": "W podręczniku podano, że prawie wszystkie ssaki są żyworodne; wyjątkami są między innymi dziobaki i kolczatki."
  },
  {
    "id": "R05_SSR_03",
    "section": "Rozmnażanie i różnorodność ssaków",
    "type": "fill_in",
    "prompt": "U większości ssaków w czasie ciąży powstaje __________, które umożliwia transport substancji odżywczych i wymianę gazów.",
    "options": null,
    "answer": [
      "łożysko"
    ],
    "altAnswers": [
      [
        "łożysko",
        "lozysko"
      ]
    ],
    "image": "/img/r05_rozmnazanie_ssakow_lozysko.jpg",
    "explanation": "Łożysko łączy rozwijający się organizm z matką i umożliwia wymianę potrzebnych oraz zbędnych substancji."
  },
  {
    "id": "R05_SSR_04",
    "section": "Rozmnażanie i różnorodność ssaków",
    "type": "match",
    "prompt": "Połącz pojęcie z właściwym wyjaśnieniem.",
    "options": null,
    "left": [
      "ciąża",
      "łożysko",
      "żyworodność",
      "zapłodnienie wewnętrzne"
    ],
    "right": [
      "czas rozwoju od zapłodnienia do porodu",
      "narząd łączący rozwijający się organizm z matką",
      "rodzenie potomstwa",
      "połączenie komórek rozrodczych w ciele samicy"
    ],
    "answer": {
      "ciąża": "czas rozwoju od zapłodnienia do porodu",
      "łożysko": "narząd łączący rozwijający się organizm z matką",
      "żyworodność": "rodzenie potomstwa",
      "zapłodnienie wewnętrzne": "połączenie komórek rozrodczych w ciele samicy"
    },
    "explanation": "Pojęcia te opisują rozmnażanie i rozwój ssaków."
  },
  {
    "id": "R05_SSR_05",
    "section": "Rozmnażanie i różnorodność ssaków",
    "type": "scenario",
    "prompt": "Młode ssaka po narodzinach jest bezradne i nie potrafi samodzielnie zdobywać pokarmu. Czego przede wszystkim potrzebuje od matki?",
    "options": [
      "karmienia mlekiem",
      "wysiadywania w skorupce",
      "lotek na skrzydłach",
      "pomocy w zapylaniu roślin"
    ],
    "answer": 0,
    "explanation": "Młode ssaki wymagają opieki, a przede wszystkim karmienia mlekiem przez samicę."
  },
  {
    "id": "R05_SSR_06",
    "section": "Rozmnażanie i różnorodność ssaków",
    "type": "sort",
    "prompt": "Przyporządkuj ssaki do grup według sposobu lub środowiska życia.",
    "options": null,
    "items": [
      "gacek brunatny",
      "rudawka wielka",
      "białucha arktyczna",
      "szarytka morska",
      "manat rzeczny",
      "lotopałanka karłowata"
    ],
    "categories": [
      "ssaki latające",
      "ssaki wodne",
      "ssak nadrzewny/szybujący"
    ],
    "answer": {
      "ssaki latające": [
        "gacek brunatny",
        "rudawka wielka"
      ],
      "ssaki wodne": [
        "białucha arktyczna",
        "szarytka morska",
        "manat rzeczny"
      ],
      "ssak nadrzewny/szybujący": [
        "lotopałanka karłowata"
      ]
    },
    "image": "/img/r05_ssaki_srodowiska.jpg",
    "explanation": "W rozdziale pokazano przykłady ssaków latających, wodnych i nadrzewnych lub szybujących."
  },
  {
    "id": "R05_SSR_07",
    "section": "Rozmnażanie i różnorodność ssaków",
    "type": "single_choice",
    "prompt": "Które ssaki zachowały cechę gadzią polegającą na jajorodności?",
    "options": [
      "dziobaki i kolczatki",
      "wieloryby i delfiny",
      "lisy i psy",
      "konie i woły",
      "gacki i rudawki",
      "białuchy i manaty"
    ],
    "answer": 0,
    "explanation": "Dziobaki i kolczatki składają jaja, a po wykluciu młode żywią się mlekiem matki."
  },
  {
    "id": "R05_SSR_08",
    "section": "Rozmnażanie i różnorodność ssaków",
    "type": "true_false",
    "prompt": "Dziobaki i kolczatki są endemitami występującymi tylko w Australii i Nowej Gwinei.",
    "options": null,
    "answer": true,
    "explanation": "W podręczniku wskazano, że dziobaki i kolczatki występują tylko w Australii i Nowej Gwinei."
  },
  {
    "id": "R05_SSR_09",
    "section": "Rozmnażanie i różnorodność ssaków",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady wykorzystania ssaków przez człowieka wymienione w rozdziale.",
    "options": [
      "źródło mleka, skór i sierści",
      "praca na polu i w transporcie",
      "pomoc w terapii",
      "zwierzęta domowe",
      "płuca z workami powietrznymi",
      "zapylanie przez kolibry"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Człowiek wykorzystuje ssaki między innymi jako źródło pokarmu i surowców, siłę roboczą, pomoc w terapii oraz zwierzęta towarzyszące."
  },
  {
    "id": "R05_SSR_10",
    "section": "Rozmnażanie i różnorodność ssaków",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: ciąża, łożysko, karmienie mlekiem, jajo z twardą wapienną skorupką.",
    "options": null,
    "answer": "jajo z twardą wapienną skorupką",
    "explanation": "Jajo z twardą wapienną skorupką jest typowe dla ptaków, a pozostałe pojęcia dotyczą ssaków."
  },
  {
    "id": "R05_SSR_11",
    "section": "Rozmnażanie i różnorodność ssaków",
    "type": "riddle",
    "prompt": "Jak nazywa się okres rozwoju organizmu ssaka od zapłodnienia do porodu?",
    "options": null,
    "answer": "ciąża",
    "altAnswers": [
      "ciąża",
      "ciaza"
    ],
    "explanation": "Okres od zapłodnienia do porodu u ssaków nazywa się ciążą."
  },
  {
    "id": "R05_SSR_12",
    "section": "Rozmnażanie i różnorodność ssaków",
    "type": "fill_in",
    "prompt": "U małych ssaków ciąża jest zwykle __________, a u większych ssaków __________.",
    "options": null,
    "answer": [
      "krótka",
      "dłuższa"
    ],
    "altAnswers": [
      [
        "krótka",
        "krotka"
      ],
      [
        "dłuższa",
        "dluzsza",
        "długa"
      ]
    ],
    "explanation": "W podręczniku porównano krótką ciążę u myszy z prawie dwuletnią ciążą u słonia."
  },
  {
    "id": "R05_MIE_01",
    "section": "Powtórka mieszana",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do ptaków albo ssaków.",
    "options": null,
    "items": [
      "pióra",
      "skrzydła",
      "płuca z workami powietrznymi",
      "jajorodność",
      "sierść",
      "karmienie młodych mlekiem",
      "żyworodność",
      "oczy z powiekami"
    ],
    "categories": [
      "ptaki",
      "ssaki"
    ],
    "answer": {
      "ptaki": [
        "pióra",
        "skrzydła",
        "płuca z workami powietrznymi",
        "jajorodność"
      ],
      "ssaki": [
        "sierść",
        "karmienie młodych mlekiem",
        "żyworodność",
        "oczy z powiekami"
      ]
    },
    "explanation": "Ptaki mają pióra, skrzydła i worki powietrzne oraz są jajorodne, a ssaki mają sierść, karmią młode mlekiem i zwykle są żyworodne."
  },
  {
    "id": "R05_MIE_02",
    "section": "Powtórka mieszana",
    "type": "match",
    "prompt": "Połącz cechę z grupą zwierząt, z którą w rozdziale jest najmocniej związana.",
    "options": null,
    "left": [
      "pióra",
      "mleko",
      "worki powietrzne",
      "sierść",
      "rogowy dziób"
    ],
    "right": [
      "pokrycie ciała ptaków",
      "pokarm dla młodych ssaków",
      "wspierają oddychanie podczas lotu",
      "pokrycie ciała większości ssaków",
      "okrywa bezzębne szczęki ptaka"
    ],
    "answer": {
      "pióra": "pokrycie ciała ptaków",
      "mleko": "pokarm dla młodych ssaków",
      "worki powietrzne": "wspierają oddychanie podczas lotu",
      "sierść": "pokrycie ciała większości ssaków",
      "rogowy dziób": "okrywa bezzębne szczęki ptaka"
    },
    "explanation": "Rozdział porównuje przystosowania ptaków i ssaków oraz pokazuje, czym się różnią."
  },
  {
    "id": "R05_MIE_03",
    "section": "Powtórka mieszana",
    "type": "sequence",
    "prompt": "Ułóż etapy od początku ptasich przygotowań rozrodczych do opieki nad pisklętami.",
    "options": null,
    "items": [
      "budowa gniazda",
      "opieka nad pisklętami",
      "toki",
      "jaja i ich wysiadywanie",
      "odpowiednia ilość światła i hormony",
      "łączenie się w pary"
    ],
    "answer": [
      "odpowiednia ilość światła i hormony",
      "toki",
      "łączenie się w pary",
      "budowa gniazda",
      "jaja i ich wysiadywanie",
      "opieka nad pisklętami"
    ],
    "image": "/img/r05_etapy_rozmnazania_ptakow.jpg",
    "explanation": "Po odpowiedniej ilości światła uaktywniają się hormony, potem następują toki, łączenie w pary, budowa gniazda, jaja i opieka nad pisklętami."
  },
  {
    "id": "R05_MIE_04",
    "section": "Powtórka mieszana",
    "type": "single_choice",
    "prompt": "Które dwie grupy kręgowców opisane w rozdziale są stałocieplne?",
    "options": [
      "ptaki i ssaki",
      "ryby i płazy",
      "gady i ryby",
      "płazy i owady",
      "ryby i ptaki",
      "ssaki i owady"
    ],
    "answer": 0,
    "explanation": "Zarówno ptaki, jak i ssaki utrzymują stałą temperaturę ciała."
  },
  {
    "id": "R05_MIE_05",
    "section": "Powtórka mieszana",
    "type": "multi_select",
    "prompt": "Zaznacz cechy wspólne ptaków i ssaków z podsumowania rozdziału.",
    "options": [
      "stałocieplność",
      "należą do kręgowców",
      "występowanie we wszystkich strefach klimatycznych",
      "ciało pokryte piórami",
      "karmienie mlekiem",
      "rozwój prosty"
    ],
    "answer": [
      0,
      1,
      2,
      5
    ],
    "explanation": "Ptaki i ssaki są kręgowcami, są stałocieplne, występują we wszystkich strefach klimatycznych i przechodzą rozwój prosty."
  },
  {
    "id": "R05_MIE_06",
    "section": "Powtórka mieszana",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: pióra, skrzydła, worki powietrzne, łożysko.",
    "options": null,
    "answer": "łożysko",
    "explanation": "Łożysko jest związane z rozwojem większości ssaków, a pozostałe elementy dotyczą ptaków."
  },
  {
    "id": "R05_MIE_07",
    "section": "Powtórka mieszana",
    "type": "true_false",
    "prompt": "Ptaki i ssaki mogą żyć w wielu środowiskach między innymi dzięki stałocieplności.",
    "options": null,
    "answer": true,
    "explanation": "Stałocieplność pozwala utrzymywać temperaturę ciała mimo zmian temperatury otoczenia."
  },
  {
    "id": "R05_MIE_08",
    "section": "Powtórka mieszana",
    "type": "fill_in",
    "prompt": "Skórę ptaków pokrywają __________, a skórę większości ssaków pokrywają __________ lub sierść.",
    "options": null,
    "answer": [
      "pióra",
      "włosy"
    ],
    "altAnswers": [
      [
        "pióra",
        "piora"
      ],
      [
        "włosy",
        "wlosy"
      ]
    ],
    "explanation": "Pióra są charakterystyczne dla ptaków, a włosy lub sierść dla większości ssaków."
  },
  {
    "id": "R05_MIE_09",
    "section": "Powtórka mieszana",
    "type": "scenario",
    "prompt": "Widzisz zwierzę, które aktywnie lata nocą, ma ciało pokryte włosami i karmi młode mlekiem. Do której grupy należy?",
    "options": [
      "ssaki",
      "ptaki",
      "gady",
      "płazy"
    ],
    "answer": 0,
    "explanation": "Nietoperze są ssakami latającymi, ponieważ mają cechy ssaków, między innymi włosy i karmienie młodych mlekiem."
  },
  {
    "id": "R05_MIE_10",
    "section": "Powtórka mieszana",
    "type": "match",
    "prompt": "Połącz znaczenie z grupą zwierząt, której przykład podano w rozdziale.",
    "options": null,
    "left": [
      "zapylanie roślin przez kolibry",
      "rozsiewanie nasion przez sójki",
      "praca w transporcie",
      "pomoc w terapii"
    ],
    "right": [
      "zapylanie roślin",
      "rozprzestrzenianie nasion",
      "wykorzystanie jako siła robocza",
      "pomoc ludziom w terapii"
    ],
    "answer": {
      "zapylanie roślin przez kolibry": "zapylanie roślin",
      "rozsiewanie nasion przez sójki": "rozprzestrzenianie nasion",
      "praca w transporcie": "wykorzystanie jako siła robocza",
      "pomoc w terapii": "pomoc ludziom w terapii"
    },
    "explanation": "Ptaki zapylają i rozsiewają nasiona, a ssaki mogą pracować dla człowieka oraz pomagać w terapii."
  },
  {
    "id": "R05_MIE_11",
    "section": "Powtórka mieszana",
    "type": "riddle",
    "prompt": "Jak nazywa się szereg organizmów ustawionych w kolejności pokazującej, kto kogo zjada?",
    "options": null,
    "answer": "łańcuch pokarmowy",
    "altAnswers": [
      "łańcuch pokarmowy",
      "lancuch pokarmowy"
    ],
    "explanation": "Łańcuch pokarmowy pokazuje zależności pokarmowe między organizmami."
  },
  {
    "id": "R05_MIE_12",
    "section": "Powtórka mieszana",
    "type": "true_false",
    "prompt": "Pierwsze pióra pojawiły się już u dinozaurów, ale nie przypominały piór ptasich i nie były związane z lataniem.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik wyjaśnia, że pierwotne pióra dinozaurów były inne niż pióra ptaków i nie służyły do latania."
  },
  {
    "id": "R05_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który ptak podano jako najmniejszego polskiego ptaka z około 160 mln neuronów w mózgu o masie 0,36 g?",
    "options": [
      "mysikrólik",
      "kruk",
      "sokół wędrowny",
      "sójka zwyczajna",
      "kszyk",
      "modraszka zwyczajna"
    ],
    "answer": 0,
    "explanation": "W tekście „Mały mózg...” jako przykład najmniejszego polskiego ptaka podano mysikrólika."
  },
  {
    "id": "R05_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który ptak został wskazany jako rekordzista z ponad 2 mld neuronów w mózgu o masie 10,2 g?",
    "options": [
      "kruk",
      "mysikrólik",
      "rudzik",
      "sowa",
      "bocian biały",
      "sęp"
    ],
    "answer": 0,
    "explanation": "Podręcznik wskazuje kruka jako rekordzistę pod względem liczby neuronów w małym mózgu."
  },
  {
    "id": "R05_HARD_03",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Wiele ptaków dostrzega promieniowanie UV, a niektóre potrafią dostrzegać pole magnetyczne Ziemi.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział podaje, że ptaki widzą inaczej niż ludzie i część z nich korzysta z informacji o polu magnetycznym Ziemi."
  },
  {
    "id": "R05_HARD_04",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jaka zdolność pozwala ptakom zapamiętać miejsca ukrycia zapasów i wrócić do nich po wielu miesiącach?",
    "options": null,
    "answer": "pamięć przestrzenna",
    "altAnswers": [
      "pamięć przestrzenna",
      "pamiec przestrzenna"
    ],
    "explanation": "Pamięć przestrzenna pomaga ptakom, na przykład sójkom, odnajdywać ukryte zapasy."
  },
  {
    "id": "R05_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz ptaka lub grupę ptaków ze zdolnością opisaną w ciekawostkach.",
    "options": null,
    "left": [
      "rudziki",
      "sowy",
      "modraszki",
      "kszyk",
      "burzyki i oceanniki"
    ],
    "right": [
      "dostrzeganie pola magnetycznego Ziemi",
      "bardzo dokładne lokalizowanie źródła dźwięku",
      "wyczuwanie zapachu uszkodzonych pędów sosen",
      "wykrywanie zdobyczy czułym dziobem",
      "wracanie do gniazd z morskich wędrówek dzięki zapachowi"
    ],
    "answer": {
      "rudziki": "dostrzeganie pola magnetycznego Ziemi",
      "sowy": "bardzo dokładne lokalizowanie źródła dźwięku",
      "modraszki": "wyczuwanie zapachu uszkodzonych pędów sosen",
      "kszyk": "wykrywanie zdobyczy czułym dziobem",
      "burzyki i oceanniki": "wracanie do gniazd z morskich wędrówek dzięki zapachowi"
    },
    "explanation": "Ciekawostki w rozdziale pokazują, że ptaki wykorzystują różne zmysły i zdolności do orientacji oraz zdobywania pokarmu."
  },
  {
    "id": "R05_HARD_06",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Sokół wędrowny w locie pikującym może osiągać prędkość do __________ kilometrów na godzinę.",
    "options": null,
    "answer": [
      "389"
    ],
    "altAnswers": [
      [
        "389",
        "389 km/h",
        "389 kilometrów na godzinę"
      ]
    ],
    "explanation": "W ciekawostce podano lot pikujący sokoła wędrownego jako przykład błyskawicznego podejmowania decyzji przy bardzo dużej prędkości."
  },
  {
    "id": "R05_HARD_07",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz zmysły lub zdolności ptaków opisane w ciekawostkach rozdziału.",
    "options": [
      "dostrzeganie promieni UV",
      "bardzo dobry słuch",
      "wykorzystywanie węchu",
      "czuły dotyk dzioba",
      "rozpoznawanie pięciu smaków",
      "echolokacja jak u nietoperzy"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Ciekawostki opisują między innymi świetny wzrok, słuch, węch, dotyk dzioba, smak oraz pamięć przestrzenną."
  },
  {
    "id": "R05_HARD_08",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Ptak rozpoznaje zapach uszkodzonych pędów sosen i dzięki temu znajduje owady żerujące w tych pędach. O którym ptaku mówi ciekawostka?",
    "options": [
      "modraszka zwyczajna",
      "kszyk",
      "rudzik zwyczajny",
      "sokół wędrowny"
    ],
    "answer": 0,
    "explanation": "W podręczniku podano, że modraszki wykorzystują zapach uszkodzonych pędów sosen do wyszukiwania owadów."
  },
  {
    "id": "R05_HARD_09",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: promienie UV, pole magnetyczne Ziemi, małżowina uszna, pamięć przestrzenna.",
    "options": null,
    "answer": "małżowina uszna",
    "explanation": "Małżowina uszna jest typowa dla ssaków, a pozostałe elementy pojawiły się w ciekawostkach o możliwościach ptaków."
  },
  {
    "id": "R05_HARD_10",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż zwierzęta od najmniejszego do największego według przykładów i opisów z rozdziału.",
    "options": null,
    "items": [
      "szarytka morska",
      "ryjówka etruska",
      "słoń afrykański",
      "kanczyl jawajski"
    ],
    "answer": [
      "ryjówka etruska",
      "kanczyl jawajski",
      "szarytka morska",
      "słoń afrykański"
    ],
    "explanation": "Rozdział podaje przykłady od bardzo małej ryjówki etruskiej, przez niewielkiego kanczyla i szarytkę, po najcięższego lądowego słonia afrykańskiego."
  }
];

const KID_PROMPTS = {
  "R05_PTL_01": "Co pomaga ptakom żyć w różnych miejscach na Ziemi?",
  "R05_PTR_06": "Co zrobić, gdy znajdziesz zdrowego podlota blisko gniazda?",
  "R05_SSB_01": "Po czym najłatwiej poznać ssaki?",
  "R05_SSR_05": "Czego potrzebuje mały ssak po urodzeniu?",
  "R05_MIE_04": "Które zwierzęta z rozdziału są stałocieplne?"
};

const chapter = {
  "id": "r05",
  "number": 5,
  "title": "Zwierzęta kręgowe: ptaki i ssaki",
  "icon": "🐦",
  "sectionOrder": [
    "Ptaki – budowa i lot",
    "Rozmnażanie i znaczenie ptaków",
    "Ssaki – środowisko i budowa",
    "Rozmnażanie i różnorodność ssaków",
    "Powtórka mieszana",
    "Super trudne"
  ],
  "sectionIcons": {
    "Ptaki – budowa i lot": "🪶",
    "Rozmnażanie i znaczenie ptaków": "🥚",
    "Ssaki – środowisko i budowa": "🐻",
    "Rozmnażanie i różnorodność ssaków": "🐬",
    "Powtórka mieszana": "🔁",
    "Super trudne": "🔥"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
