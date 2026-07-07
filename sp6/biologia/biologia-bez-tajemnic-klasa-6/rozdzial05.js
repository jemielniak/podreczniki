// Skróty sekcji:
//   PTA = Ptaki
//   ROP = Rozmnażanie ptaków
//   ZPT = Ptaki: znaczenie i ochrona
//   SSA = Ssaki
//   RSS = Różnorodność ssaków
//   ZSS = Ssaki: znaczenie i ochrona
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R05_PTA_01",
    "section": "Ptaki",
    "type": "single_choice",
    "prompt": "Co oznacza stałocieplność u ptaków?",
    "options": [
      "utrzymywanie względnie stałej temperatury ciała",
      "zależność temperatury ciała od temperatury otoczenia",
      "życie wyłącznie w ciepłym klimacie",
      "brak potrzeby pobierania pokarmu",
      "zmiana temperatury ciała tylko podczas lotu",
      "wytwarzanie ciepła wyłącznie przez pióra"
    ],
    "answer": 0,
    "explanation": "Ptaki są stałocieplne, czyli ich temperatura ciała jest względnie stała i w dużym stopniu niezależna od temperatury otoczenia."
  },
  {
    "id": "R05_PTA_02",
    "section": "Ptaki",
    "type": "single_choice",
    "prompt": "Z jaką grupą wymarłych zwierząt wiąże się pochodzenie ptaków opisane w rozdziale?",
    "options": [
      "z jedną z grup dinozaurów",
      "z rybami chrzęstnoszkieletowymi",
      "z płazami beznogimi",
      "z pierścienicami",
      "z małżami",
      "z owadami społecznymi"
    ],
    "answer": 0,
    "image": "/img/r05_archeopteryks.jpg",
    "explanation": "W rozdziale podano, że ptaki najprawdopodobniej wywodzą się od jednej z grup dinozaurów."
  },
  {
    "id": "R05_PTA_03",
    "section": "Ptaki",
    "type": "multi_select",
    "prompt": "Zaznacz cechy archeopteryksa podane w rozdziale.",
    "options": [
      "miał skrzydła i pióra",
      "miał ogon, zęby i pazury",
      "żył około 150 milionów lat temu",
      "dostarczył dowodów na ewolucję ptaków",
      "był współczesnym ssakiem morskim",
      "nie miał żadnych cech gadów"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r05_archeopteryks.jpg",
    "explanation": "Archeopteryks miał cechy ptaków i gadów, żył około 150 mln lat temu i jest ważnym dowodem ewolucji ptaków."
  },
  {
    "id": "R05_PTA_04",
    "section": "Ptaki",
    "type": "true_false",
    "prompt": "Pierwotną funkcją piór mogła być ochrona przed utratą ciepła.",
    "options": null,
    "answer": true,
    "image": "/img/r05_piora_typy.jpg",
    "explanation": "Zdaniem naukowców pierwotną funkcją piór była ochrona przed utratą ciepła."
  },
  {
    "id": "R05_PTA_05",
    "section": "Ptaki",
    "type": "multi_select",
    "prompt": "Zaznacz wspólne cechy ptaków opisane w rozdziale.",
    "options": [
      "są stałocieplne",
      "mają ciało pokryte piórami",
      "większość gatunków jest zdolna do lotu",
      "są jajorodne",
      "karmią młode mlekiem",
      "mają pęcherz pławny"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r05_ptak_budowa_lot.jpg",
    "explanation": "Ptaki są stałocieplne, mają pióra, większość potrafi latać i rozmnażają się przez składanie jaj."
  },
  {
    "id": "R05_PTA_06",
    "section": "Ptaki",
    "type": "single_choice",
    "prompt": "Który element ciała ptaka jest lekki, ponieważ nie zawiera zębów?",
    "options": [
      "rogowy dziób",
      "grzebień na mostku",
      "worek powietrzny",
      "sterówka",
      "pióro puchowe",
      "komora powietrzna"
    ],
    "answer": 0,
    "image": "/img/r05_ptak_budowa_lot.jpg",
    "explanation": "Rogowy dziób bez zębów zmniejsza masę ciała ptaka."
  },
  {
    "id": "R05_PTA_07",
    "section": "Ptaki",
    "type": "match",
    "prompt": "Połącz typ pióra z jego funkcją.",
    "options": null,
    "left": [
      "lotki",
      "sterówki",
      "pióra pokrywowe",
      "pióra puchowe"
    ],
    "right": [
      "umożliwiają lot i manewrowanie",
      "pomagają sterować i utrzymywać równowagę",
      "nadają ciału opływowy kształt",
      "chronią przed utratą ciepła"
    ],
    "answer": {
      "lotki": "umożliwiają lot i manewrowanie",
      "sterówki": "pomagają sterować i utrzymywać równowagę",
      "pióra pokrywowe": "nadają ciału opływowy kształt",
      "pióra puchowe": "chronią przed utratą ciepła"
    },
    "image": "/img/r05_piora_typy.jpg",
    "explanation": "Różne typy piór pełnią różne funkcje: lot, sterowanie, nadawanie kształtu i izolację cieplną."
  },
  {
    "id": "R05_PTA_08",
    "section": "Ptaki",
    "type": "fill_in",
    "prompt": "Kości ptaków zawierające puste przestrzenie nazywamy kośćmi __________.",
    "options": null,
    "answer": [
      "pneumatycznymi"
    ],
    "altAnswers": [
      [
        "pneumatycznymi",
        "pneumatyczne"
      ]
    ],
    "image": "/img/r05_ptak_budowa_lot.jpg",
    "explanation": "Kości pneumatyczne są lekkie, ale wytrzymałe, co ułatwia lot."
  },
  {
    "id": "R05_PTA_09",
    "section": "Ptaki",
    "type": "single_choice",
    "prompt": "Do czego służy grzebień na mostku ptaka?",
    "options": [
      "jest miejscem przyczepu silnych mięśni poruszających skrzydłami",
      "umożliwia filtrowanie pokarmu z wody",
      "wytwarza mleko dla piskląt",
      "przechowuje powietrze potrzebne do wymiany gazowej",
      "zastępuje zęby",
      "tworzy błony płodowe"
    ],
    "answer": 0,
    "image": "/img/r05_ptak_budowa_lot.jpg",
    "explanation": "Grzebień na mostku jest miejscem przyczepu silnie rozwiniętych mięśni poruszających skrzydłami."
  },
  {
    "id": "R05_PTA_10",
    "section": "Ptaki",
    "type": "single_choice",
    "prompt": "Dlaczego worki powietrzne są ważne dla ptaków?",
    "options": [
      "umożliwiają bardzo wydajną wymianę gazową",
      "zastępują dziób",
      "służą do karmienia młodych mlekiem",
      "chronią jajo przed uszkodzeniem",
      "tworzą skorupkę jaja",
      "służą do żucia pokarmu"
    ],
    "answer": 0,
    "image": "/img/r05_uklad_oddechowy_ptaka.jpg",
    "explanation": "Płuca połączone z workami powietrznymi zapewniają ciągły przepływ powietrza i wydajne pobieranie tlenu."
  },
  {
    "id": "R05_PTA_11",
    "section": "Ptaki",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: lotki, sterówki, pióra puchowe, pióra pokrywowe, gruczoły mlekowe.",
    "options": null,
    "answer": "gruczoły mlekowe",
    "explanation": "Gruczoły mlekowe są cechą ssaków, a pozostałe elementy dotyczą piór ptaków."
  },
  {
    "id": "R05_PTA_12",
    "section": "Ptaki",
    "type": "riddle",
    "prompt": "Najwcześniejszy znany ptak wymieniony w rozdziale to...",
    "options": null,
    "answer": "archeopteryks",
    "altAnswers": [
      "archeopteryks",
      "Archeopteryks"
    ],
    "image": "/img/r05_archeopteryks.jpg",
    "explanation": "Archeopteryks to najwcześniejszy znany ptak opisany w rozdziale."
  },
  {
    "id": "R05_ROP_01",
    "section": "Rozmnażanie ptaków",
    "type": "single_choice",
    "prompt": "Jaki typ zapłodnienia występuje u ptaków?",
    "options": [
      "wewnętrzne",
      "zewnętrzne w wodzie",
      "zewnętrzne na skrzeku",
      "bez udziału komórek rozrodczych",
      "wyłącznie w jajach bez skorupki",
      "takie jak u ryb podczas tarła"
    ],
    "answer": 0,
    "image": "/img/r05_jajo_ptaka_budowa.jpg",
    "explanation": "U ptaków zapłodnienie jest wewnętrzne."
  },
  {
    "id": "R05_ROP_02",
    "section": "Rozmnażanie ptaków",
    "type": "true_false",
    "prompt": "Wszystkie ptaki są jajorodne.",
    "options": null,
    "answer": true,
    "image": "/img/r05_jajo_ptaka_budowa.jpg",
    "explanation": "W rozdziale podano, że wszystkie ptaki składają jaja."
  },
  {
    "id": "R05_ROP_03",
    "section": "Rozmnażanie ptaków",
    "type": "match",
    "prompt": "Połącz część jaja ptaka z jej funkcją.",
    "options": null,
    "left": [
      "żółtko",
      "białko",
      "skorupka",
      "komora powietrzna",
      "tarczka zarodkowa"
    ],
    "right": [
      "zawiera substancje odżywcze dla zarodka",
      "chroni zarodek przed uszkodzeniami",
      "pełni funkcję ochronną i umożliwia wymianę gazową",
      "zawiera powietrze potrzebne do wymiany gazowej",
      "z niej rozwinie się pisklę"
    ],
    "answer": {
      "żółtko": "zawiera substancje odżywcze dla zarodka",
      "białko": "chroni zarodek przed uszkodzeniami",
      "skorupka": "pełni funkcję ochronną i umożliwia wymianę gazową",
      "komora powietrzna": "zawiera powietrze potrzebne do wymiany gazowej",
      "tarczka zarodkowa": "z niej rozwinie się pisklę"
    },
    "image": "/img/r05_jajo_ptaka_budowa.jpg",
    "explanation": "Elementy jaja chronią zarodek, dostarczają mu składników odżywczych i umożliwiają wymianę gazową."
  },
  {
    "id": "R05_ROP_04",
    "section": "Rozmnażanie ptaków",
    "type": "single_choice",
    "prompt": "Po co większość ptaków wysiaduje jaja?",
    "options": [
      "aby zapewnić im odpowiednią temperaturę",
      "aby przekształcić skorupkę w pióra",
      "aby nauczyć pisklęta lotu przed wykluciem",
      "aby zmienić zapłodnienie zewnętrzne w wewnętrzne",
      "aby wytworzyć mleko",
      "aby pozbyć się komory powietrznej"
    ],
    "answer": 0,
    "image": "/img/r05_gniazdo_jaja_ptakow.jpg",
    "explanation": "Wysiadywanie jaj zapewnia rozwijającym się zarodkom odpowiednią temperaturę."
  },
  {
    "id": "R05_ROP_05",
    "section": "Rozmnażanie ptaków",
    "type": "single_choice",
    "prompt": "Jaki typ rozwoju występuje u ptaków?",
    "options": [
      "rozwój prosty",
      "rozwój złożony z kijanką",
      "rozwój z poczwarką",
      "rozwój bez jaj",
      "rozwój wyłącznie w wodzie",
      "rozwój z larwą podobną do ryby"
    ],
    "answer": 0,
    "image": "/img/r05_gniazdo_jaja_ptakow.jpg",
    "explanation": "U ptaków zachodzi rozwój prosty, ponieważ pisklę przypomina osobnika dorosłego."
  },
  {
    "id": "R05_ROP_06",
    "section": "Rozmnażanie ptaków",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do grup piskląt.",
    "options": null,
    "items": [
      "często są ślepe i nieopierzone",
      "są całkowicie bezradne",
      "w kilka godzin po wykluciu mogą opuścić gniazdo",
      "potrafią samodzielnie zdobywać pokarm",
      "wymagają długiej opieki rodziców",
      "rodzice opiekują się nimi krótko albo wcale"
    ],
    "categories": [
      "gniazdowniki",
      "zagniazdowniki"
    ],
    "answer": {
      "gniazdowniki": [
        "często są ślepe i nieopierzone",
        "są całkowicie bezradne",
        "wymagają długiej opieki rodziców"
      ],
      "zagniazdowniki": [
        "w kilka godzin po wykluciu mogą opuścić gniazdo",
        "potrafią samodzielnie zdobywać pokarm",
        "rodzice opiekują się nimi krótko albo wcale"
      ]
    },
    "image": "/img/r05_gniazdowniki_zagniazdowniki.jpg",
    "explanation": "Gniazdowniki są bezradne po wykluciu, a zagniazdowniki szybko opuszczają gniazdo i są bardziej samodzielne."
  },
  {
    "id": "R05_ROP_07",
    "section": "Rozmnażanie ptaków",
    "type": "single_choice",
    "prompt": "Który przykład należy do zagniazdowników według rozdziału?",
    "options": [
      "kaczki",
      "sokoły",
      "orły",
      "dzięcioły",
      "gołębie",
      "jastrzębie"
    ],
    "answer": 0,
    "image": "/img/r05_gniazdowniki_zagniazdowniki.jpg",
    "explanation": "Do zagniazdowników należą m.in. kaczki, kury i łabędzie."
  },
  {
    "id": "R05_ROP_08",
    "section": "Rozmnażanie ptaków",
    "type": "single_choice",
    "prompt": "Który przykład należy do gniazdowników według rozdziału?",
    "options": [
      "dzięcioły",
      "kaczki",
      "kury",
      "łabędzie",
      "struś",
      "kangur"
    ],
    "answer": 0,
    "image": "/img/r05_gniazdowniki_zagniazdowniki.jpg",
    "explanation": "Do gniazdowników należą m.in. sokoły, orły, jastrzębie, dzięcioły i gołębie."
  },
  {
    "id": "R05_ROP_09",
    "section": "Rozmnażanie ptaków",
    "type": "sequence",
    "prompt": "Ułóż etapy rozmnażania i rozwoju ptaków w poprawnej kolejności.",
    "options": null,
    "items": [
      "wykluwa się pisklę",
      "ptaki odbywają toki",
      "samica składa jaja",
      "rodzice wysiadują jaja"
    ],
    "answer": [
      "ptaki odbywają toki",
      "samica składa jaja",
      "rodzice wysiadują jaja",
      "wykluwa się pisklę"
    ],
    "image": "/img/r05_gniazdo_jaja_ptakow.jpg",
    "explanation": "Najpierw odbywają się zachowania godowe, potem samica składa jaja, które są wysiadywane, a następnie wykluwa się pisklę."
  },
  {
    "id": "R05_ROP_10",
    "section": "Rozmnażanie ptaków",
    "type": "riddle",
    "prompt": "Zachowania godowe ptaków, np. tańce, śpiew lub prezentowanie upierzenia, to...",
    "options": null,
    "answer": "toki",
    "altAnswers": [
      "toki"
    ],
    "explanation": "Zaloty godowe ptaków nazywa się tokami."
  },
  {
    "id": "R05_ROP_11",
    "section": "Rozmnażanie ptaków",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: żółtko, białko, skorupka, komora powietrzna, łożysko.",
    "options": null,
    "answer": "łożysko",
    "explanation": "Łożysko występuje u ssaków łożyskowych, a pozostałe elementy są częściami jaja ptaka."
  },
  {
    "id": "R05_ROP_12",
    "section": "Rozmnażanie ptaków",
    "type": "multi_select",
    "prompt": "Zaznacz informacje poprawnie opisujące rozmnażanie ptaków.",
    "options": [
      "są jajorodne",
      "mają zapłodnienie wewnętrzne",
      "jaja zawierają błony płodowe",
      "większość składa jaja w gnieździe",
      "ich młode zawsze są kijankami",
      "zapłodnienie zachodzi poza ciałem samicy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r05_jajo_ptaka_budowa.jpg",
    "explanation": "Ptaki są jajorodne, mają zapłodnienie wewnętrzne, składają jaja z błonami płodowymi, często w gnieździe."
  },
  {
    "id": "R05_ZPT_01",
    "section": "Ptaki: znaczenie i ochrona",
    "type": "single_choice",
    "prompt": "Dzięki jakiej cesze ptaki mogą występować na wszystkich kontynentach i w różnych środowiskach?",
    "options": [
      "stałocieplności",
      "zmiennocieplności",
      "obecności gruczołów mlekowych",
      "brakowi piór",
      "żyworodności",
      "pęcherzykowatym płucom ssaków"
    ],
    "answer": 0,
    "explanation": "Stałocieplność pozwala ptakom funkcjonować w bardzo różnych warunkach środowiska."
  },
  {
    "id": "R05_ZPT_02",
    "section": "Ptaki: znaczenie i ochrona",
    "type": "match",
    "prompt": "Połącz ptaka z cechą skrzydeł lub sposobem poruszania się opisanym w rozdziale.",
    "options": null,
    "left": [
      "albatros wędrowny",
      "koliber",
      "struś"
    ],
    "right": [
      "ma wąskie i długie skrzydła oraz długo szybuje",
      "potrafi zawisać w powietrzu i latać do tyłu",
      "nie potrafi latać, ale szybko biega"
    ],
    "answer": {
      "albatros wędrowny": "ma wąskie i długie skrzydła oraz długo szybuje",
      "koliber": "potrafi zawisać w powietrzu i latać do tyłu",
      "struś": "nie potrafi latać, ale szybko biega"
    },
    "image": "/img/r05_skrzydla_ptakow.jpg",
    "explanation": "Budowa skrzydeł i kończyn jest związana ze sposobem poruszania się i trybem życia ptaków."
  },
  {
    "id": "R05_ZPT_03",
    "section": "Ptaki: znaczenie i ochrona",
    "type": "match",
    "prompt": "Połącz dziób z funkcją wynikającą z opisu w rozdziale.",
    "options": null,
    "left": [
      "krótki, mocny dziób bogatki",
      "długi, wąski dziób czapli",
      "silny, zakrzywiony dziób sokoła",
      "szeroki dziób krzyżówki",
      "silny, ostry dziób dzięcioła"
    ],
    "right": [
      "ułatwia zjadanie owadów i nasion",
      "służy do chwytania zdobyczy podczas brodzenia w wodzie",
      "służy do rozrywania mięsa",
      "umożliwia odfiltrowywanie pokarmu z wody",
      "służy do kucia drewna"
    ],
    "answer": {
      "krótki, mocny dziób bogatki": "ułatwia zjadanie owadów i nasion",
      "długi, wąski dziób czapli": "służy do chwytania zdobyczy podczas brodzenia w wodzie",
      "silny, zakrzywiony dziób sokoła": "służy do rozrywania mięsa",
      "szeroki dziób krzyżówki": "umożliwia odfiltrowywanie pokarmu z wody",
      "silny, ostry dziób dzięcioła": "służy do kucia drewna"
    },
    "image": "/img/r05_dzioby_ptakow.jpg",
    "explanation": "Kształt dzioba ptaka jest dostosowany do rodzaju zdobywanego i pobieranego pokarmu."
  },
  {
    "id": "R05_ZPT_04",
    "section": "Ptaki: znaczenie i ochrona",
    "type": "multi_select",
    "prompt": "Zaznacz znaczenie ptaków w przyrodzie opisane w rozdziale.",
    "options": [
      "regulują liczebność organizmów",
      "rozsiewają nasiona",
      "padlinożercy oczyszczają środowisko z martwych zwierząt",
      "niektóre zapylają kwiaty",
      "wszystkie niszczą uprawy",
      "nie są elementem łańcuchów pokarmowych"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r05_znaczenie_ptakow.jpg",
    "explanation": "Ptaki regulują liczebność organizmów, rozsiewają nasiona, oczyszczają środowisko i mogą zapylać kwiaty."
  },
  {
    "id": "R05_ZPT_05",
    "section": "Ptaki: znaczenie i ochrona",
    "type": "multi_select",
    "prompt": "Zaznacz pozytywne znaczenie ptaków dla człowieka.",
    "options": [
      "gatunki hodowlane dostarczają mięsa i jaj",
      "pióra są wykorzystywane jako materiał",
      "śpiew ptaków bywa używany w technikach relaksacyjnych",
      "ptaki drapieżne pomagają w walce ze szkodnikami",
      "wszystkie przenoszą ptasią grypę",
      "wszystkie powodują straty w sadach"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r05_znaczenie_ptakow.jpg",
    "explanation": "Ptaki mogą dostarczać pokarmu i piór, pomagać w walce ze szkodnikami oraz mieć znaczenie rekreacyjne."
  },
  {
    "id": "R05_ZPT_06",
    "section": "Ptaki: znaczenie i ochrona",
    "type": "multi_select",
    "prompt": "Zaznacz zagrożenia dla ptaków powodowane przez człowieka.",
    "options": [
      "niszczenie miejsc zdobywania pokarmu",
      "niszczenie miejsc do gniazdowania",
      "usuwanie gniazd podczas remontów budynków",
      "wprowadzanie zanieczyszczeń do środowiska",
      "tworzenie budek lęgowych",
      "udostępnianie poidełek"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r05_zagrozenia_ptakow.jpg",
    "explanation": "Zagrożenia dla ptaków obejmują niszczenie miejsc żerowania i gniazdowania, usuwanie gniazd oraz zanieczyszczenia."
  },
  {
    "id": "R05_ZPT_07",
    "section": "Ptaki: znaczenie i ochrona",
    "type": "multi_select",
    "prompt": "Zaznacz działania korzystne dla ptaków.",
    "options": [
      "tworzenie zastępczych budek lęgowych",
      "niewypuszczanie kotów domowych na dwór",
      "udostępnianie poidełek w upalne dni",
      "niedotykanie młodych ptaków — podlotów",
      "wycinanie drzew z gniazdami",
      "usuwanie gniazd podczas remontów"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r05_ochrona_ptakow.jpg",
    "explanation": "Ptakom pomagają budki lęgowe, ograniczanie polowania kotów, poidełka oraz pozostawianie podlotów bez dotykania."
  },
  {
    "id": "R05_ZPT_08",
    "section": "Ptaki: znaczenie i ochrona",
    "type": "scenario",
    "prompt": "W ogrodzie znaleziono młodego ptaka, który opuścił gniazdo, ale rodzice są w pobliżu. Co najlepiej zrobić?",
    "options": [
      "nie dotykać go i zostawić w spokoju",
      "zabrać go do domu jako zwierzę domowe",
      "przenieść go daleko od ogrodu",
      "wypuścić kota, żeby go odnalazł",
      "usunąć pobliskie gniazdo",
      "polać go zimną wodą"
    ],
    "answer": 0,
    "image": "/img/r05_ochrona_ptakow.jpg",
    "explanation": "Jednym ze sposobów ochrony ptaków jest niedotykanie młodych ptaków, czyli podlotów."
  },
  {
    "id": "R05_ZPT_09",
    "section": "Ptaki: znaczenie i ochrona",
    "type": "single_choice",
    "prompt": "Który ptak opisany w rozdziale odfiltrowuje pokarm z wody szerokim dziobem?",
    "options": [
      "krzyżówka",
      "sokół wędrowny",
      "dzięcioł",
      "czapla siwa",
      "bogatka",
      "albatros wędrowny"
    ],
    "answer": 0,
    "image": "/img/r05_dzioby_ptakow.jpg",
    "explanation": "Krzyżówka ma szeroki dziób, który pozwala odfiltrowywać pokarm z wody."
  },
  {
    "id": "R05_ZPT_10",
    "section": "Ptaki: znaczenie i ochrona",
    "type": "true_false",
    "prompt": "Wychodzące koty domowe mogą zagrażać ptakom.",
    "options": null,
    "answer": true,
    "image": "/img/r05_ochrona_ptakow.jpg",
    "explanation": "W rozdziale podano, że niewypuszczanie kotów domowych na dwór ogranicza ich polowanie na ptaki i wyjadanie piskląt."
  },
  {
    "id": "R05_ZPT_11",
    "section": "Ptaki: znaczenie i ochrona",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: budka lęgowa, poidełko, niedotykanie podlotów, ochrona rzadkich gatunków, usuwanie gniazd podczas remontu.",
    "options": null,
    "answer": "usuwanie gniazd podczas remontu",
    "explanation": "Usuwanie gniazd jest zagrożeniem dla ptaków, a pozostałe przykłady to działania ochronne."
  },
  {
    "id": "R05_ZPT_12",
    "section": "Ptaki: znaczenie i ochrona",
    "type": "riddle",
    "prompt": "Ptaki żywiące się martwymi zwierzętami i „czyszczące” środowisko to ptaki...",
    "options": null,
    "answer": "padlinożerne",
    "altAnswers": [
      "padlinożerne",
      "padlinozerne"
    ],
    "image": "/img/r05_znaczenie_ptakow.jpg",
    "explanation": "Ptaki padlinożerne, np. sępy, żywią się martwymi zwierzętami i pomagają oczyszczać środowisko."
  },
  {
    "id": "R05_SSA_01",
    "section": "Ssaki",
    "type": "single_choice",
    "prompt": "Od czego pochodzi nazwa „ssaki”?",
    "options": [
      "od ssania mleka matki przez młode",
      "od posiadania piór",
      "od zdolności do lotu",
      "od składania jaj w gnieździe",
      "od posiadania pęcherza pławnego",
      "od oddychania przez skrzela"
    ],
    "answer": 0,
    "image": "/img/r05_ssak_cechy.jpg",
    "explanation": "Nazwa ssaki pochodzi od czynności ssania mleka matki przez młode."
  },
  {
    "id": "R05_SSA_02",
    "section": "Ssaki",
    "type": "multi_select",
    "prompt": "Zaznacz cechy wspólne ssaków opisane w rozdziale.",
    "options": [
      "gruczoły mlekowe",
      "skóra pokryta włosami u większości gatunków",
      "zróżnicowane uzębienie",
      "rozwinięty mózg",
      "pióra lotne",
      "skrzela u dorosłych"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r05_ssak_cechy.jpg",
    "explanation": "Ssaki mają m.in. gruczoły mlekowe, zwykle włosy, zróżnicowane uzębienie i rozwinięty mózg."
  },
  {
    "id": "R05_SSA_03",
    "section": "Ssaki",
    "type": "true_false",
    "prompt": "Ssaki, podobnie jak ptaki, są stałocieplne.",
    "options": null,
    "answer": true,
    "explanation": "Temperatura ciała ssaków jest względnie stała i nie zależy bezpośrednio od temperatury otoczenia."
  },
  {
    "id": "R05_SSA_04",
    "section": "Ssaki",
    "type": "single_choice",
    "prompt": "Które gruczoły produkują mleko stanowiące pokarm dla potomstwa?",
    "options": [
      "gruczoły mlekowe",
      "gruczoły potowe",
      "gruczoły łojowe",
      "worki powietrzne",
      "pęcherzyki płucne",
      "błony płodowe"
    ],
    "answer": 0,
    "image": "/img/r05_lis_budowa.jpg",
    "explanation": "Gruczoły mlekowe produkują mleko, którym samice karmią potomstwo."
  },
  {
    "id": "R05_SSA_05",
    "section": "Ssaki",
    "type": "match",
    "prompt": "Połącz element budowy ssaka z funkcją.",
    "options": null,
    "left": [
      "małżowiny uszne",
      "gruczoły potowe",
      "gruczoły łojowe",
      "pęcherzyki płucne",
      "przepona"
    ],
    "right": [
      "pomagają odbierać dźwięki",
      "produkują pot chłodzący ciało",
      "natłuszczają skórę i włosy",
      "umożliwiają wydajną wymianę gazową",
      "usprawnia wentylację płuc"
    ],
    "answer": {
      "małżowiny uszne": "pomagają odbierać dźwięki",
      "gruczoły potowe": "produkują pot chłodzący ciało",
      "gruczoły łojowe": "natłuszczają skórę i włosy",
      "pęcherzyki płucne": "umożliwiają wydajną wymianę gazową",
      "przepona": "usprawnia wentylację płuc"
    },
    "image": "/img/r05_lis_budowa.jpg",
    "explanation": "Cechy budowy ssaka pomagają w odbieraniu bodźców, termoregulacji, oddychaniu i opiece nad młodymi."
  },
  {
    "id": "R05_SSA_06",
    "section": "Ssaki",
    "type": "single_choice",
    "prompt": "Co u większości ssaków pomaga utrzymać stałą temperaturę ciała?",
    "options": [
      "futro",
      "skorupka jaja",
      "pióra sterówki",
      "linia boczna",
      "błona pławna",
      "pancerz kostny"
    ],
    "answer": 0,
    "image": "/img/r05_lis_budowa.jpg",
    "explanation": "Futro ułatwia zachowanie stałej temperatury ciała i może mieć ubarwienie maskujące."
  },
  {
    "id": "R05_SSA_07",
    "section": "Ssaki",
    "type": "single_choice",
    "prompt": "Które zęby ssaków służą do odcinania kęsów pokarmu?",
    "options": [
      "siekacze",
      "kły",
      "zęby przedtrzonowe",
      "zęby trzonowe",
      "pazury",
      "rogi"
    ],
    "answer": 0,
    "image": "/img/r05_uzebienie_ssakow.jpg",
    "explanation": "Siekacze służą do odcinania kęsów pokarmu."
  },
  {
    "id": "R05_SSA_08",
    "section": "Ssaki",
    "type": "match",
    "prompt": "Połącz rodzaj zęba ssaka z funkcją.",
    "options": null,
    "left": [
      "siekacze",
      "kły",
      "zęby przedtrzonowe i trzonowe"
    ],
    "right": [
      "odcinają kęsy pokarmu",
      "przytrzymują i zabijają ofiarę",
      "rozcierają i miażdżą pokarm"
    ],
    "answer": {
      "siekacze": "odcinają kęsy pokarmu",
      "kły": "przytrzymują i zabijają ofiarę",
      "zęby przedtrzonowe i trzonowe": "rozcierają i miażdżą pokarm"
    },
    "image": "/img/r05_uzebienie_ssakow.jpg",
    "explanation": "Uzębienie ssaków jest zróżnicowane, a poszczególne rodzaje zębów pełnią różne funkcje."
  },
  {
    "id": "R05_SSA_09",
    "section": "Ssaki",
    "type": "single_choice",
    "prompt": "Które zdanie najlepiej opisuje uzębienie mięsożerców?",
    "options": [
      "kły są długie i ostre, a zęby trzonowe mają ostre krawędzie",
      "kły są zawsze nieobecne, a trzonowce bardzo szerokie",
      "wszystkie zęby są płaskie i służą tylko do rozcierania roślin",
      "nie mają zębów, tylko dziób",
      "mają wyłącznie siekacze",
      "ich uzębienie jest takie samo jak u ptaków"
    ],
    "answer": 0,
    "image": "/img/r05_uzebienie_ssakow.jpg",
    "explanation": "U mięsożerców kły są długie i ostre, a zęby przedtrzonowe i trzonowe mają ostre krawędzie."
  },
  {
    "id": "R05_SSA_10",
    "section": "Ssaki",
    "type": "multi_select",
    "prompt": "Zaznacz cechy rozmnażania ssaków łożyskowych.",
    "options": [
      "zapłodnienie wewnętrzne",
      "rozwój zarodka w ciele samicy",
      "obecność łożyska",
      "żyworodność",
      "składanie jaj z twardą skorupką u wszystkich gatunków",
      "rozwój złożony z larwą"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r05_ssak_lozysko.jpg",
    "explanation": "Ssaki łożyskowe mają zapłodnienie wewnętrzne, zarodek rozwija się w ciele samicy, występuje łożysko i zwykle żyworodność."
  },
  {
    "id": "R05_SSA_11",
    "section": "Ssaki",
    "type": "riddle",
    "prompt": "Narząd ssaków łożyskowych dostarczający zarodkowi pokarm i tlen to...",
    "options": null,
    "answer": "łożysko",
    "altAnswers": [
      "łożysko",
      "lozysko"
    ],
    "image": "/img/r05_ssak_lozysko.jpg",
    "explanation": "Łożysko dostarcza zarodkowi pokarm i tlen oraz usuwa zbędne substancje."
  },
  {
    "id": "R05_SSA_12",
    "section": "Ssaki",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: gruczoły mlekowe, futro, zróżnicowane uzębienie, łożysko, lotki.",
    "options": null,
    "answer": "lotki",
    "explanation": "Lotki są piórami ptaków, a pozostałe elementy dotyczą ssaków."
  },
  {
    "id": "R05_RSS_01",
    "section": "Różnorodność ssaków",
    "type": "multi_select",
    "prompt": "Zaznacz środowiska życia ssaków wymienione w rozdziale.",
    "options": [
      "ląd",
      "siedliska słodkowodne",
      "środowisko morskie",
      "strefy polarne",
      "pustynie",
      "wyłącznie powietrze bez kontaktu z lądem"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "/img/r05_srodowiska_ssakow.jpg",
    "explanation": "Ssaki zasiedlają lądy, wody słodkie i morza, a także skrajne środowiska, takie jak strefy polarne i pustynie."
  },
  {
    "id": "R05_RSS_02",
    "section": "Różnorodność ssaków",
    "type": "single_choice",
    "prompt": "Które ssaki są jedynymi ssakami zdolnymi do aktywnego lotu?",
    "options": [
      "nietoperze",
      "foki",
      "delfiny",
      "kangury",
      "wydry",
      "myszy"
    ],
    "answer": 0,
    "image": "/img/r05_konczyny_ssakow.jpg",
    "explanation": "Nietoperze to jedyne ssaki zdolne do aktywnego lotu."
  },
  {
    "id": "R05_RSS_03",
    "section": "Różnorodność ssaków",
    "type": "match",
    "prompt": "Połącz ssaka z przystosowaniem kończyn.",
    "options": null,
    "left": [
      "konik polski",
      "morświn zwyczajny",
      "kret europejski",
      "borowiec wielki",
      "łasica pospolita"
    ],
    "right": [
      "kopyta chronią i amortyzują ruch",
      "kończyny przekształcone w płetwy",
      "szerokie przednie kończyny z długimi pazurami drążą tunele",
      "przednie kończyny przekształcone w skrzydła",
      "ostre pazury ułatwiają wspinaczkę"
    ],
    "answer": {
      "konik polski": "kopyta chronią i amortyzują ruch",
      "morświn zwyczajny": "kończyny przekształcone w płetwy",
      "kret europejski": "szerokie przednie kończyny z długimi pazurami drążą tunele",
      "borowiec wielki": "przednie kończyny przekształcone w skrzydła",
      "łasica pospolita": "ostre pazury ułatwiają wspinaczkę"
    },
    "image": "/img/r05_konczyny_ssakow.jpg",
    "explanation": "Kończyny ssaków są przystosowane do biegania, pływania, kopania, wspinaczki lub lotu."
  },
  {
    "id": "R05_RSS_04",
    "section": "Różnorodność ssaków",
    "type": "single_choice",
    "prompt": "Który ssak zamieszkuje suche i półsuche obszary Australii i może długo przetrwać bez wody?",
    "options": [
      "kangur rudy",
      "tygrys syberyjski",
      "morświn zwyczajny",
      "kret europejski",
      "foka szara",
      "dziobak australijski"
    ],
    "answer": 0,
    "image": "/img/r05_srodowiska_ssakow.jpg",
    "explanation": "Kangur rudy zamieszkuje suche i półsuche obszary Australii oraz może czerpać wilgoć z pożywienia."
  },
  {
    "id": "R05_RSS_05",
    "section": "Różnorodność ssaków",
    "type": "single_choice",
    "prompt": "Który ssak wymieniony w rozdziale żyje w zimnych rejonach Azji i znosi silny mróz?",
    "options": [
      "tygrys syberyjski",
      "kangur rudy",
      "borowiec wielki",
      "łasica pospolita",
      "morświn zwyczajny",
      "kret europejski"
    ],
    "answer": 0,
    "image": "/img/r05_srodowiska_ssakow.jpg",
    "explanation": "Tygrys syberyjski jest przykładem ssaka przystosowanego do zimnych rejonów Azji."
  },
  {
    "id": "R05_RSS_06",
    "section": "Różnorodność ssaków",
    "type": "sort",
    "prompt": "Przyporządkuj ssaki do środowiska lub sposobu życia.",
    "options": null,
    "items": [
      "wydra",
      "foka",
      "delfin",
      "nietoperz",
      "kangur rudy",
      "tygrys syberyjski"
    ],
    "categories": [
      "wody słodkie",
      "morza",
      "aktywny lot",
      "pustynie i suche obszary",
      "zimne strefy"
    ],
    "answer": {
      "wody słodkie": [
        "wydra"
      ],
      "morza": [
        "foka",
        "delfin"
      ],
      "aktywny lot": [
        "nietoperz"
      ],
      "pustynie i suche obszary": [
        "kangur rudy"
      ],
      "zimne strefy": [
        "tygrys syberyjski"
      ]
    },
    "image": "/img/r05_srodowiska_ssakow.jpg",
    "explanation": "Ssaki zajmują bardzo różne środowiska, a poszczególne gatunki mają odpowiednie przystosowania."
  },
  {
    "id": "R05_RSS_07",
    "section": "Różnorodność ssaków",
    "type": "single_choice",
    "prompt": "Który opis najlepiej pasuje do roślinożerców według rozdziału?",
    "options": [
      "mają duże i szerokie zęby przedtrzonowe i trzonowe",
      "mają wyłącznie długie ostre kły",
      "nie mają żadnych zębów",
      "mają dziób bez zębów",
      "ich kończyny są zawsze płetwami",
      "zawsze są jajorodne"
    ],
    "answer": 0,
    "image": "/img/r05_uzebienie_ssakow.jpg",
    "explanation": "U roślinożerców zęby przedtrzonowe i trzonowe są duże i szerokie, co ułatwia rozcieranie pokarmu roślinnego."
  },
  {
    "id": "R05_RSS_08",
    "section": "Różnorodność ssaków",
    "type": "scenario",
    "prompt": "Uczeń widzi ssaka o szerokich przednich kończynach z długimi pazurami, który drąży tunele w ziemi. Który to najprawdopodobniej ssak?",
    "options": [
      "kret europejski",
      "konik polski",
      "morświn zwyczajny",
      "borowiec wielki",
      "łasica pospolita",
      "kangur rudy"
    ],
    "answer": 0,
    "image": "/img/r05_konczyny_ssakow.jpg",
    "explanation": "Kret europejski ma szerokie przednie kończyny z długimi pazurami, którymi drąży tunele."
  },
  {
    "id": "R05_RSS_09",
    "section": "Różnorodność ssaków",
    "type": "scenario",
    "prompt": "Uczeń obserwuje ssaka, którego kończyny są przekształcone w płetwy i który pływa w morzu. Do którego przykładu z rozdziału najbardziej pasuje ten opis?",
    "options": [
      "morświn zwyczajny",
      "kret europejski",
      "borowiec wielki",
      "konik polski",
      "łasica pospolita",
      "dzik"
    ],
    "answer": 0,
    "image": "/img/r05_konczyny_ssakow.jpg",
    "explanation": "Morświn zwyczajny ma kończyny przekształcone w płetwy i żyje m.in. w Morzu Bałtyckim."
  },
  {
    "id": "R05_RSS_10",
    "section": "Różnorodność ssaków",
    "type": "true_false",
    "prompt": "Uzębienie wszystkożerców łączy cechy uzębienia roślinożerców i mięsożerców.",
    "options": null,
    "answer": true,
    "image": "/img/r05_uzebienie_ssakow.jpg",
    "explanation": "W rozdziale podano, że uzębienie wszystkożerców łączy cechy uzębienia roślinożerców i mięsożerców."
  },
  {
    "id": "R05_RSS_11",
    "section": "Różnorodność ssaków",
    "type": "riddle",
    "prompt": "Ssaki jajorodne, takie jak dziobak i kolczatka, należą do grupy zwanej...",
    "options": null,
    "answer": "stekowce",
    "altAnswers": [
      "stekowce",
      "stekowców",
      "stekowce"
    ],
    "image": "/img/r05_stekowce.jpg",
    "explanation": "Dziobak i kolczatka należą do stekowców, czyli prymitywnych ssaków jajorodnych."
  },
  {
    "id": "R05_RSS_12",
    "section": "Różnorodność ssaków",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: kopyta, płetwy, skrzydła nietoperza, pazury kreta, sterówki.",
    "options": null,
    "answer": "sterówki",
    "explanation": "Sterówki są piórami ogonowymi ptaków, a pozostałe elementy dotyczą kończyn ssaków."
  },
  {
    "id": "R05_ZSS_01",
    "section": "Ssaki: znaczenie i ochrona",
    "type": "multi_select",
    "prompt": "Zaznacz znaczenie ssaków w przyrodzie opisane w rozdziale.",
    "options": [
      "regulują liczebność organizmów",
      "rozprzestrzeniają nasiona",
      "bobry przekształcają środowisko, budując tamy",
      "nietoperze odżywiające się nektarem zapylają kwiaty",
      "wszystkie są wyłącznie szkodnikami",
      "nie są pokarmem dla innych organizmów"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r05_znaczenie_ssakow.jpg",
    "explanation": "Ssaki regulują liczebność organizmów, roznoszą nasiona, bobry budują tamy, a niektóre nietoperze zapylają kwiaty."
  },
  {
    "id": "R05_ZSS_02",
    "section": "Ssaki: znaczenie i ochrona",
    "type": "multi_select",
    "prompt": "Zaznacz pozytywne znaczenie ssaków dla człowieka.",
    "options": [
      "gatunki hodowane są źródłem mięsa, mleka, wełny i skóry",
      "konie są wykorzystywane w sporcie i hipoterapii",
      "wyszkolone psy pomagają ludziom i służbom",
      "niektóre ssaki są zwierzętami domowymi",
      "wszystkie przenoszą wściekliznę",
      "wszystkie niszczą plony"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r05_znaczenie_ssakow.jpg",
    "explanation": "Ssaki mogą dostarczać surowców i pokarmu, pomagać w pracy człowieka, rekreacji, terapii oraz być zwierzętami domowymi."
  },
  {
    "id": "R05_ZSS_03",
    "section": "Ssaki: znaczenie i ochrona",
    "type": "multi_select",
    "prompt": "Zaznacz negatywne znaczenie niektórych ssaków dla człowieka.",
    "options": [
      "mogą wyrządzać straty gospodarcze",
      "mogą polować na zwierzęta gospodarcze",
      "mogą zjadać plony",
      "mogą przenosić choroby, np. wściekliznę",
      "zawsze zapylają kwiaty",
      "zawsze budują tamy korzystne dla człowieka"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r05_znaczenie_ssakow.jpg",
    "explanation": "Niektóre ssaki mogą powodować szkody gospodarcze, zjadać plony, polować na zwierzęta gospodarcze i przenosić choroby."
  },
  {
    "id": "R05_ZSS_04",
    "section": "Ssaki: znaczenie i ochrona",
    "type": "match",
    "prompt": "Połącz przykład ssaka lub grupy ssaków z ich znaczeniem.",
    "options": null,
    "left": [
      "bobry",
      "nietoperze nektarożerne",
      "wiewiórki",
      "wyszkolone psy",
      "świnie"
    ],
    "right": [
      "przekształcają środowisko, budując tamy",
      "zapylają kwiaty",
      "ukrywają nasiona w kryjówkach",
      "mogą pracować jako przewodnicy lub w służbach",
      "mogą pomagać w znajdowaniu trufli"
    ],
    "answer": {
      "bobry": "przekształcają środowisko, budując tamy",
      "nietoperze nektarożerne": "zapylają kwiaty",
      "wiewiórki": "ukrywają nasiona w kryjówkach",
      "wyszkolone psy": "mogą pracować jako przewodnicy lub w służbach",
      "świnie": "mogą pomagać w znajdowaniu trufli"
    },
    "image": "/img/r05_znaczenie_ssakow.jpg",
    "explanation": "Różne ssaki pełnią odmienne role w przyrodzie i życiu człowieka."
  },
  {
    "id": "R05_ZSS_05",
    "section": "Ssaki: znaczenie i ochrona",
    "type": "multi_select",
    "prompt": "Zaznacz zagrożenia dla ssaków spowodowane działalnością człowieka.",
    "options": [
      "niszczenie miejsc życia",
      "rozbudowa miast i dróg szybkiego ruchu",
      "wprowadzanie zanieczyszczeń do środowiska",
      "wprowadzanie gatunków inwazyjnych",
      "ochrona siedlisk",
      "ograniczanie zanieczyszczeń"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r05_zagrozenia_ssakow.jpg",
    "explanation": "Ssakom zagraża niszczenie siedlisk, rozbudowa infrastruktury, zanieczyszczenia i gatunki inwazyjne."
  },
  {
    "id": "R05_ZSS_06",
    "section": "Ssaki: znaczenie i ochrona",
    "type": "multi_select",
    "prompt": "Zaznacz działania korzystne dla ssaków.",
    "options": [
      "zapobieganie rozprzestrzenianiu się gatunków inwazyjnych",
      "objęcie rzadkich gatunków ochroną",
      "ograniczenie zanieczyszczenia środowiska",
      "ochrona miejsc występowania ssaków",
      "wycinanie lasów",
      "likwidacja łąk i pastwisk"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r05_ochrona_ssakow.jpg",
    "explanation": "Ochrona ssaków obejmuje ochronę gatunków i siedlisk, ograniczanie zanieczyszczeń oraz kontrolę gatunków inwazyjnych."
  },
  {
    "id": "R05_ZSS_07",
    "section": "Ssaki: znaczenie i ochrona",
    "type": "single_choice",
    "prompt": "Który gatunek inwazyjny wymieniono jako przykład zagrożenia dla rodzimych ssaków?",
    "options": [
      "szop pracz",
      "jeż zachodni",
      "wiewiórka pospolita",
      "kret europejski",
      "konik polski",
      "sarna"
    ],
    "answer": 0,
    "image": "/img/r05_zagrozenia_ssakow.jpg",
    "explanation": "W rozdziale jako przykład gatunku inwazyjnego podano m.in. szopa pracza."
  },
  {
    "id": "R05_ZSS_08",
    "section": "Ssaki: znaczenie i ochrona",
    "type": "single_choice",
    "prompt": "Które ssaki wymieniono jako zwierzęta mogące pracować w policji, wojsku, ratownictwie i służbach celnych?",
    "options": [
      "psy",
      "koty",
      "wiewiórki",
      "bobry",
      "nietoperze",
      "myszy"
    ],
    "answer": 0,
    "image": "/img/r05_znaczenie_ssakow.jpg",
    "explanation": "Odpowiednio wyszkolone psy mogą pracować w policji, wojsku, służbach ratunkowych i celnych."
  },
  {
    "id": "R05_ZSS_09",
    "section": "Ssaki: znaczenie i ochrona",
    "type": "scenario",
    "prompt": "W okolicy wycina się lasy, osusza bagna i likwiduje łąki. Jaki skutek dla ssaków najlepiej opisuje ta sytuacja?",
    "options": [
      "niszczenie miejsc życia ssaków",
      "tworzenie nowych siedlisk dla wszystkich gatunków",
      "zwiększenie liczby błon płodowych",
      "poprawa pracy gruczołów mlekowych",
      "zmiana ssaków w ptaki",
      "zwiększenie ilości piór"
    ],
    "answer": 0,
    "image": "/img/r05_zagrozenia_ssakow.jpg",
    "explanation": "Wycinanie lasów, osuszanie bagien oraz likwidacja łąk i pastwisk niszczą miejsca życia ssaków."
  },
  {
    "id": "R05_ZSS_10",
    "section": "Ssaki: znaczenie i ochrona",
    "type": "scenario",
    "prompt": "W parku umieszczono tablice informacyjne i prowadzi się lekcje o ochronie siedlisk ssaków. Jak nazywa się taki typ działania?",
    "options": [
      "edukacja społeczeństwa",
      "zanieczyszczanie środowiska",
      "wprowadzanie gatunków inwazyjnych",
      "rozbudowa dróg szybkiego ruchu",
      "likwidacja pastwisk",
      "polowanie na rodzime gatunki"
    ],
    "answer": 0,
    "image": "/img/r05_ochrona_ssakow.jpg",
    "explanation": "Apele, spoty edukacyjne i tablice informacyjne są formami edukacji społeczeństwa."
  },
  {
    "id": "R05_ZSS_11",
    "section": "Ssaki: znaczenie i ochrona",
    "type": "true_false",
    "prompt": "Ssaki mogą rozprzestrzeniać nasiona na różne sposoby, np. z kałem, w kryjówkach lub na sierści.",
    "options": null,
    "answer": true,
    "image": "/img/r05_znaczenie_ssakow.jpg",
    "explanation": "Sarny i dziki mogą rozsiewać nasiona z kałem, wiewiórki ukrywają je w kryjówkach, a lisy przenoszą na sierści."
  },
  {
    "id": "R05_ZSS_12",
    "section": "Ssaki: znaczenie i ochrona",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: ochrona siedlisk, edukacja społeczeństwa, objęcie rzadkich gatunków ochroną, ograniczanie zanieczyszczeń, wprowadzanie gatunków inwazyjnych.",
    "options": null,
    "answer": "wprowadzanie gatunków inwazyjnych",
    "explanation": "Wprowadzanie gatunków inwazyjnych jest zagrożeniem, a pozostałe działania służą ochronie ssaków."
  },
  {
    "id": "R05_HARD_01",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz cechę z grupą kręgowców, której najlepiej dotyczy w tym rozdziale.",
    "options": null,
    "left": [
      "pióra",
      "gruczoły mlekowe",
      "worki powietrzne",
      "łożysko",
      "zróżnicowane uzębienie"
    ],
    "right": [
      "ptaki",
      "ssaki",
      "ptaki",
      "ssaki łożyskowe",
      "ssaki"
    ],
    "answer": {
      "pióra": "ptaki",
      "gruczoły mlekowe": "ssaki",
      "worki powietrzne": "ptaki",
      "łożysko": "ssaki łożyskowe",
      "zróżnicowane uzębienie": "ssaki"
    },
    "image": "/img/r05_porownanie_ptaki_ssaki.jpg",
    "explanation": "Ptaki wyróżniają się piórami i workami powietrznymi, a ssaki gruczołami mlekowymi, łożyskiem u większości gatunków i zróżnicowanym uzębieniem."
  },
  {
    "id": "R05_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które cechy zmniejszają masę ciała ptaka i ułatwiają lot?",
    "options": [
      "kości pneumatyczne",
      "lekki dziób bez zębów",
      "lekkie pióra",
      "jajorodność",
      "duże łożysko",
      "grube, ciężkie zęby"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r05_ptak_budowa_lot.jpg",
    "explanation": "Lot ułatwiają m.in. kości pneumatyczne, lekki dziób bez zębów, lekkie pióra i jajorodność, która przenosi rozwój zarodka poza ciało samicy."
  },
  {
    "id": "R05_HARD_03",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Na ilustracji widać pisklę ślepe, nieopierzone i całkowicie zależne od rodziców. Do której grupy należy?",
    "options": [
      "gniazdowniki",
      "zagniazdowniki",
      "stekowce",
      "ssaki łożyskowe",
      "drapieżniki padlinożerne",
      "ptaki wodne"
    ],
    "answer": 0,
    "image": "/img/r05_gniazdowniki_zagniazdowniki.jpg",
    "explanation": "Pisklęta gniazdowników są bezradne, często ślepe i nieopierzone, dlatego wymagają długiej opieki rodziców."
  },
  {
    "id": "R05_HARD_04",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "U zwierzęcia zarodek rozwija się w ciele samicy, a łożysko dostarcza mu pokarm i tlen. Do której grupy najlepiej pasuje opis?",
    "options": [
      "ssaki łożyskowe",
      "ptaki",
      "stekowce",
      "płazy",
      "ryby",
      "bezkręgowce"
    ],
    "answer": 0,
    "image": "/img/r05_ssak_lozysko.jpg",
    "explanation": "Łożysko jest charakterystyczne dla ssaków łożyskowych i odpowiada za wymianę substancji między matką a zarodkiem."
  },
  {
    "id": "R05_HARD_05",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj pojęcia do grup.",
    "options": null,
    "items": [
      "żółtko",
      "komora powietrzna",
      "łożysko",
      "gruczoły mlekowe",
      "worki powietrzne",
      "pęcherzyki płucne"
    ],
    "categories": [
      "ptaki",
      "ssaki"
    ],
    "answer": {
      "ptaki": [
        "żółtko",
        "komora powietrzna",
        "worki powietrzne"
      ],
      "ssaki": [
        "łożysko",
        "gruczoły mlekowe",
        "pęcherzyki płucne"
      ]
    },
    "image": "/img/r05_porownanie_ptaki_ssaki.jpg",
    "explanation": "Części jaja i worki powietrzne wiążą się z ptakami, a łożysko, gruczoły mlekowe i płuca pęcherzykowate z ssakami."
  },
  {
    "id": "R05_HARD_06",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który zestaw zawiera wyłącznie działania ochronne wobec ptaków lub ssaków?",
    "options": [
      "budki lęgowe, ochrona siedlisk, edukacja społeczeństwa",
      "wycinka drzew z gniazdami, osuszanie bagien, zanieczyszczanie środowiska",
      "usuwanie gniazd, wprowadzanie gatunków inwazyjnych, niszczenie łąk",
      "wypuszczanie kotów, likwidacja pastwisk, rozbudowa dróg",
      "niszczenie miejsc życia, niszczenie gniazd, brak poidełek",
      "polowanie na rodzime gatunki, wycinanie lasów, usuwanie podlotów"
    ],
    "answer": 0,
    "image": "/img/r05_ochrona_ptakow.jpg",
    "explanation": "Budki lęgowe, ochrona siedlisk i edukacja społeczeństwa to przykłady działań ochronnych."
  },
  {
    "id": "R05_HARD_07",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Co najlepiej wyjaśnia związek między kształtem dzioba ptaka a jego trybem życia?",
    "options": [
      "kształt dzioba jest dostosowany do rodzaju pobieranego pokarmu",
      "każdy dziób ma identyczną funkcję niezależnie od gatunku",
      "dziób służy wyłącznie do śpiewu",
      "dziób jest odpowiednikiem gruczołu mlekowego",
      "kształt dzioba zależy tylko od temperatury powietrza",
      "dziób zastępuje ptakom płuca"
    ],
    "answer": 0,
    "image": "/img/r05_dzioby_ptakow.jpg",
    "explanation": "Budowa dzioba ptaka wiąże się z rodzajem zdobywanego i pobieranego pokarmu."
  },
  {
    "id": "R05_HARD_08",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż porównanie rozwoju od zapłodnienia do młodego osobnika u ptaka w logicznej kolejności.",
    "options": null,
    "items": [
      "pisklę rozwija się w jaju",
      "dochodzi do zapłodnienia wewnętrznego",
      "samica składa jajo",
      "wykluwa się młody osobnik podobny do dorosłego"
    ],
    "answer": [
      "dochodzi do zapłodnienia wewnętrznego",
      "samica składa jajo",
      "pisklę rozwija się w jaju",
      "wykluwa się młody osobnik podobny do dorosłego"
    ],
    "image": "/img/r05_gniazdo_jaja_ptakow.jpg",
    "explanation": "U ptaków po zapłodnieniu wewnętrznym samica składa jajo, w którym rozwija się zarodek, a następnie wykluwa się pisklę."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r05",
  number: 5,
  title: "Kręgowce, część 2",
  icon: "🕊️",
  sectionOrder: [
    "Ptaki",
    "Rozmnażanie ptaków",
    "Ptaki: znaczenie i ochrona",
    "Ssaki",
    "Różnorodność ssaków",
    "Ssaki: znaczenie i ochrona",
    "Super trudne"
  ],
  sectionIcons: {
    "Ptaki": "🕊️",
    "Rozmnażanie ptaków": "🥚",
    "Ptaki: znaczenie i ochrona": "🌳",
    "Ssaki": "🦊",
    "Różnorodność ssaków": "🐾",
    "Ssaki: znaczenie i ochrona": "🌿",
    "Super trudne": "🔥"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
