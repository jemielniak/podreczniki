// Skróty sekcji (do identyfikatorów ćwiczeń):
//   REG  = Region i środowisko przyrodnicze
//   KUL  = Mieszkańcy i walory kulturowe
//   GOS  = Gospodarka regionu
//   WYC  = Wycieczka krajoznawcza
//   WSP  = Współpraca zagraniczna
//   OJC  = Mała ojczyzna
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R07_REG_01",
    "section": "Region i środowisko przyrodnicze",
    "type": "single_choice",
    "prompt": "Które stwierdzenie najlepiej opisuje region?",
    "options": [
      "Obszar o określonych granicach, podobny wewnętrznie i wyraźnie różniący się od obszarów sąsiednich",
      "Dowolny obszar bez granic i wspólnych cech",
      "Wyłącznie teren jednego miasta",
      "Tylko obszar wydzielony przez władze państwowe",
      "Każdy obszar położony nad rzeką",
      "Wyłącznie kraina o wspólnej gwarze"
    ],
    "answer": 0,
    "explanation": "Region ma określone granice, charakteryzuje się dużym podobieństwem cech indywidualnych i odróżnia się od obszarów sąsiednich.",
    "image": "r07_typy_regionow.jpg"
  },
  {
    "id": "R07_REG_02",
    "section": "Region i środowisko przyrodnicze",
    "type": "multi_select",
    "prompt": "Zaznacz jednostki będące przykładami regionów administracyjnych.",
    "options": [
      "województwo",
      "powiat",
      "gmina",
      "Kaszuby",
      "Mazowsze",
      "Podhale"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Regiony administracyjne są tworzone przez władze państwowe. Należą do nich m.in. województwa, powiaty i gminy."
  },
  {
    "id": "R07_REG_03",
    "section": "Region i środowisko przyrodnicze",
    "type": "true_false",
    "prompt": "Regiony administracyjne mają dokładnie wyznaczone granice.",
    "options": null,
    "answer": true,
    "explanation": "Dokładnie wyznaczone granice odróżniają regiony administracyjne od wielu innych typów regionów."
  },
  {
    "id": "R07_REG_04",
    "section": "Region i środowisko przyrodnicze",
    "type": "fill_in",
    "prompt": "Na potrzeby badań własnego regionu można przyjąć region __________, czyli __________.",
    "options": null,
    "answer": [
      "administracyjny",
      "województwo"
    ],
    "altAnswers": [
      [
        "administracyjny"
      ],
      [
        "województwo",
        "wojewodztwo"
      ]
    ],
    "explanation": "Ze względu na dostępność danych za własny region można przyjąć region administracyjny, czyli województwo."
  },
  {
    "id": "R07_REG_05",
    "section": "Region i środowisko przyrodnicze",
    "type": "riddle",
    "prompt": "Gdy głównym kryterium wydzielania obszaru jest zasięg ziem historycznych, jest to region...",
    "options": null,
    "answer": "historyczny",
    "altAnswers": [
      "historyczny",
      "region historyczny"
    ],
    "explanation": "Region historyczny wyznacza się przede wszystkim na podstawie zasięgu ziem historycznych, np. Wielkopolski lub Mazowsza."
  },
  {
    "id": "R07_REG_06",
    "section": "Region i środowisko przyrodnicze",
    "type": "odd_one_out",
    "prompt": "Co nie jest przyrodniczym kryterium wydzielania krain fizycznogeograficznych: wysokość nad poziomem morza, rzeźba terenu, występowanie zbiorników wodnych, budowa fabryk.",
    "options": null,
    "answer": "budowa fabryk",
    "explanation": "Wysokość, rzeźba terenu i zbiorniki wodne są cechami przyrodniczymi. Budowa fabryk jest skutkiem działalności człowieka.",
    "image": "r07_krajobrazy_regionow.jpg"
  },
  {
    "id": "R07_REG_07",
    "section": "Region i środowisko przyrodnicze",
    "type": "match",
    "prompt": "Połącz typ regionu z głównym kryterium jego wydzielania.",
    "options": null,
    "left": [
      "region historyczny",
      "region etnograficzny",
      "region fizycznogeograficzny",
      "region społeczno-gospodarczy"
    ],
    "right": [
      "zasięg ziem historycznych",
      "folklor, gwara i tradycyjne obrzędy",
      "cechy przyrodnicze środowiska",
      "cechy związane z działalnością człowieka"
    ],
    "answer": {
      "region historyczny": "zasięg ziem historycznych",
      "region etnograficzny": "folklor, gwara i tradycyjne obrzędy",
      "region fizycznogeograficzny": "cechy przyrodnicze środowiska",
      "region społeczno-gospodarczy": "cechy związane z działalnością człowieka"
    },
    "explanation": "Różne typy regionów wyznacza się na podstawie różnych kryteriów: historycznych, etnograficznych, przyrodniczych lub społeczno-gospodarczych.",
    "image": "r07_typy_regionow.jpg"
  },
  {
    "id": "R07_REG_08",
    "section": "Region i środowisko przyrodnicze",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do odpowiedniej grupy.",
    "options": null,
    "items": [
      "wysokość nad poziomem morza",
      "rzeźba terenu",
      "zbiorniki wodne",
      "budowa fabryk",
      "zróżnicowane metody uprawy ziemi"
    ],
    "categories": [
      "cechy przyrodnicze",
      "cechy społeczno-gospodarcze"
    ],
    "answer": {
      "cechy przyrodnicze": [
        "wysokość nad poziomem morza",
        "rzeźba terenu",
        "zbiorniki wodne"
      ],
      "cechy społeczno-gospodarcze": [
        "budowa fabryk",
        "zróżnicowane metody uprawy ziemi"
      ]
    },
    "explanation": "Cechy przyrodnicze wynikają ze środowiska naturalnego, a społeczno-gospodarcze są związane z działalnością człowieka."
  },
  {
    "id": "R07_REG_09",
    "section": "Region i środowisko przyrodnicze",
    "type": "scenario",
    "prompt": "Badacz potrzebuje jednostki terytorialnej z granicami dokładnie wyznaczonymi przez władze państwowe. Jaki typ regionu powinien wybrać?",
    "options": [
      "administracyjny",
      "historyczny",
      "etnograficzny",
      "fizycznogeograficzny",
      "społeczno-gospodarczy",
      "językowy"
    ],
    "answer": 0,
    "explanation": "Region administracyjny jest tworzony przez władze państwowe i ma dokładnie wyznaczone granice."
  },
  {
    "id": "R07_KUL_01",
    "section": "Mieszkańcy i walory kulturowe",
    "type": "single_choice",
    "prompt": "Gdzie można szukać danych statystycznych dla jednostek mniejszych niż województwo, np. gminy lub powiatu?",
    "options": [
      "w Banku Danych Lokalnych",
      "wyłącznie w przewodniku turystycznym",
      "w rozkładzie jazdy",
      "w mapie hipsometrycznej",
      "w prognozie pogody",
      "w katalogu muzealnym"
    ],
    "answer": 0,
    "explanation": "Bank Danych Lokalnych udostępnia dane dla różnych jednostek terytorialnych, w tym powiatów i gmin."
  },
  {
    "id": "R07_KUL_02",
    "section": "Mieszkańcy i walory kulturowe",
    "type": "multi_select",
    "prompt": "Zaznacz zagadnienia należące do charakterystyki ludności regionu.",
    "options": [
      "liczba ludności i jej zmiany",
      "struktura płci i wieku",
      "migracje",
      "rzeźba terenu",
      "surowce mineralne",
      "największe zakłady przemysłowe"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Do podstawowych zagadnień demograficznych należą liczba ludności i jej zmiany, struktura płci i wieku oraz migracje."
  },
  {
    "id": "R07_KUL_03",
    "section": "Mieszkańcy i walory kulturowe",
    "type": "true_false",
    "prompt": "Szybko rozwijające się miasta mogą przyciągać nowych mieszkańców.",
    "options": null,
    "answer": true,
    "explanation": "Rozwijające się miasta mogą być atrakcyjne dla osób, które chcą się w nich osiedlić."
  },
  {
    "id": "R07_KUL_04",
    "section": "Mieszkańcy i walory kulturowe",
    "type": "riddle",
    "prompt": "Jaki skrót nosi europejskie Chronione Oznaczenie Geograficzne przyznawane regionalnym produktom o wyjątkowej jakości?",
    "options": null,
    "answer": "ChOG",
    "altAnswers": [
      "ChOG",
      "chog",
      "Chronione Oznaczenie Geograficzne"
    ],
    "explanation": "ChOG oznacza Chronione Oznaczenie Geograficzne. Nazwa produktu podkreśla jego związek z miejscem wytwarzania."
  },
  {
    "id": "R07_KUL_05",
    "section": "Mieszkańcy i walory kulturowe",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do obiektów kulturalnych regionu: teatr, filharmonia, muzeum, dom kultury, centrum logistyczne.",
    "options": null,
    "answer": "centrum logistyczne",
    "explanation": "Teatry, filharmonie, muzea i domy kultury są obiektami kulturalnymi. Centrum logistyczne pełni funkcję gospodarczą."
  },
  {
    "id": "R07_KUL_06",
    "section": "Mieszkańcy i walory kulturowe",
    "type": "match",
    "prompt": "Połącz przykład z właściwą kategorią ludności.",
    "options": null,
    "left": [
      "Niemcy",
      "Łemkowie",
      "Kaszubi"
    ],
    "right": [
      "mniejszość narodowa",
      "mniejszość etniczna",
      "grupa etnograficzna"
    ],
    "answer": {
      "Niemcy": "mniejszość narodowa",
      "Łemkowie": "mniejszość etniczna",
      "Kaszubi": "grupa etnograficzna"
    },
    "explanation": "Niemcy są mniejszością narodową, Łemkowie mniejszością etniczną, a Kaszubi grupą etnograficzną.",
    "image": "r07_mniejszosci_kulturowe.jpg"
  },
  {
    "id": "R07_KUL_07",
    "section": "Mieszkańcy i walory kulturowe",
    "type": "scenario",
    "prompt": "Chcesz ustalić, czy do regionu więcej osób przyjeżdża, czy z niego wyjeżdża. Które zjawisko trzeba zbadać?",
    "options": [
      "migracje",
      "rzeźbę terenu",
      "wydobycie surowców",
      "sieć rzeczną",
      "gleby",
      "zabytki"
    ],
    "answer": 0,
    "explanation": "Porównanie liczby osób przyjeżdżających i wyjeżdżających dotyczy migracji."
  },
  {
    "id": "R07_KUL_08",
    "section": "Mieszkańcy i walory kulturowe",
    "type": "fill_in",
    "prompt": "Ludność regionu bada się m.in. pod względem struktury __________ i __________.",
    "options": null,
    "answer": [
      "płci",
      "wieku"
    ],
    "altAnswers": [
      [
        "płci",
        "plci"
      ],
      [
        "wieku"
      ]
    ],
    "explanation": "Struktura płci i wieku jest jednym z podstawowych elementów charakterystyki demograficznej regionu."
  },
  {
    "id": "R07_KUL_09",
    "section": "Mieszkańcy i walory kulturowe",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do kultury regionu albo do demografii.",
    "options": null,
    "items": [
      "gwara",
      "tradycyjne potrawy",
      "zabytki",
      "zespoły artystyczne",
      "liczba ludności",
      "struktura płci i wieku",
      "migracje"
    ],
    "categories": [
      "kultura regionu",
      "demografia"
    ],
    "answer": {
      "kultura regionu": [
        "gwara",
        "tradycyjne potrawy",
        "zabytki",
        "zespoły artystyczne"
      ],
      "demografia": [
        "liczba ludności",
        "struktura płci i wieku",
        "migracje"
      ]
    },
    "explanation": "Kultura obejmuje m.in. gwarę, potrawy, zabytki i działalność artystyczną. Demografia opisuje ludność i jej zmiany."
  },
  {
    "id": "R07_GOS_01",
    "section": "Gospodarka regionu",
    "type": "single_choice",
    "prompt": "Który obszar województwa mazowieckiego szczególnie wyróżnia się dużą powierzchnią sadów?",
    "options": [
      "powiat grójecki",
      "Stryków",
      "Podhale",
      "Sandomierz",
      "Łódź",
      "Słubice"
    ],
    "answer": 0,
    "explanation": "Województwo mazowieckie ma największą powierzchnię sadów w Polsce, a szczególnie wyróżnia się powiat grójecki.",
    "image": "r07_sad_jabloniowy.jpg"
  },
  {
    "id": "R07_GOS_02",
    "section": "Gospodarka regionu",
    "type": "true_false",
    "prompt": "W Strykowie, w pobliżu skrzyżowania autostrad A1 i A2, rozwinęło się nowoczesne centrum logistyczne.",
    "options": null,
    "answer": true,
    "explanation": "Dogodne położenie komunikacyjne Strykowa przy A1 i A2 sprzyja rozwojowi usług logistycznych."
  },
  {
    "id": "R07_GOS_03",
    "section": "Gospodarka regionu",
    "type": "match",
    "prompt": "Połącz przykład produktu lub działalności z miejscem, z którym jest kojarzony.",
    "options": null,
    "left": [
      "biżuteria z krzemieniem pasiastym",
      "oscypek",
      "sady jabłoniowe",
      "centrum logistyczne"
    ],
    "right": [
      "Sandomierz",
      "Podhale",
      "powiat grójecki",
      "Stryków"
    ],
    "answer": {
      "biżuteria z krzemieniem pasiastym": "Sandomierz",
      "oscypek": "Podhale",
      "sady jabłoniowe": "powiat grójecki",
      "centrum logistyczne": "Stryków"
    },
    "explanation": "Sandomierz jest kojarzony z biżuterią z krzemieniem pasiastym, Podhale z oscypkiem, powiat grójecki z sadami, a Stryków z logistyką.",
    "image": "r07_produkty_regionalne.jpg"
  },
  {
    "id": "R07_GOS_04",
    "section": "Gospodarka regionu",
    "type": "multi_select",
    "prompt": "Zaznacz źródła i mapy przydatne przy badaniu warunków rozwoju rolnictwa w regionie.",
    "options": [
      "mapa gleb",
      "mapa temperatur powietrza",
      "mapa długości okresu wegetacyjnego",
      "Bank Danych Lokalnych",
      "rozkład repertuaru teatru",
      "mapa miast partnerskich"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Warunki rolnictwa można analizować m.in. za pomocą map gleb, temperatur, długości okresu wegetacyjnego oraz danych statystycznych."
  },
  {
    "id": "R07_GOS_05",
    "section": "Gospodarka regionu",
    "type": "riddle",
    "prompt": "Ser z mleka owczego, z którego produkcji słynie Podhale, to...",
    "options": null,
    "answer": "oscypek",
    "altAnswers": [
      "oscypek"
    ],
    "explanation": "Oscypek jest serem z mleka owczego i jednym z najbardziej rozpoznawalnych produktów Podhala.",
    "image": "r07_produkty_regionalne.jpg"
  },
  {
    "id": "R07_GOS_06",
    "section": "Gospodarka regionu",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do badania warunków rozwoju rolnictwa: gleby, rzeźba terenu, klimat lokalny, specjalne strefy ekonomiczne.",
    "options": null,
    "answer": "specjalne strefy ekonomiczne",
    "explanation": "Gleby, rzeźba terenu i klimat lokalny wpływają na rolnictwo. Specjalne strefy ekonomiczne są zagadnieniem związanym z przemysłem i inwestycjami."
  },
  {
    "id": "R07_GOS_07",
    "section": "Gospodarka regionu",
    "type": "sort",
    "prompt": "Przyporządkuj zagadnienia do właściwego sektora gospodarki regionu.",
    "options": null,
    "items": [
      "dominujące kierunki uprawy i hodowli",
      "warunki glebowe",
      "specjalne strefy ekonomiczne",
      "największe zakłady",
      "największe atrakcje turystyczne",
      "inwestycje usługowe"
    ],
    "categories": [
      "rolnictwo",
      "przemysł",
      "usługi"
    ],
    "answer": {
      "rolnictwo": [
        "dominujące kierunki uprawy i hodowli",
        "warunki glebowe"
      ],
      "przemysł": [
        "specjalne strefy ekonomiczne",
        "największe zakłady"
      ],
      "usługi": [
        "największe atrakcje turystyczne",
        "inwestycje usługowe"
      ]
    },
    "explanation": "Rolnictwo analizuje warunki i kierunki produkcji, przemysł - strefy i zakłady, a usługi - m.in. turystykę i inwestycje usługowe."
  },
  {
    "id": "R07_GOS_08",
    "section": "Gospodarka regionu",
    "type": "scenario",
    "prompt": "Miejscowość leży przy skrzyżowaniu autostrad A1 i A2, a obok działa nowoczesne centrum logistyczne. O jakiej miejscowości mowa?",
    "options": [
      "Stryków",
      "Sandomierz",
      "Zakopane",
      "Słubice",
      "Lyon",
      "Rogalin"
    ],
    "answer": 0,
    "explanation": "Stryków w województwie łódzkim jest przykładem rozwoju usług logistycznych przy ważnym węźle drogowym."
  },
  {
    "id": "R07_GOS_09",
    "section": "Gospodarka regionu",
    "type": "fill_in",
    "prompt": "Wyroby jubilerskie z krzemienia pasiastego są znane z województwa __________, a z produkcji oscypka słynie __________.",
    "options": null,
    "answer": [
      "świętokrzyskiego",
      "Podhale"
    ],
    "altAnswers": [
      [
        "świętokrzyskiego",
        "swietokrzyskiego"
      ],
      [
        "Podhale",
        "podhale"
      ]
    ],
    "explanation": "Biżuteria z krzemieniem pasiastym jest kojarzona z województwem świętokrzyskim i Sandomierzem, a oscypek z Podhalem."
  },
  {
    "id": "R07_WYC_01",
    "section": "Wycieczka krajoznawcza",
    "type": "single_choice",
    "prompt": "Co powinno być podstawą ekwipunku każdej wycieczki, ponieważ sprzęt elektroniczny bywa zawodny?",
    "options": [
      "mapa papierowa",
      "głośnik",
      "laptop",
      "walizka",
      "album fotograficzny",
      "przewodnik po innym kraju"
    ],
    "answer": 0,
    "explanation": "Mapa papierowa pozostaje niezależna od baterii i zasięgu, dlatego stanowi podstawę ekwipunku wycieczki.",
    "image": "r07_mapa_i_wycieczka.jpg"
  },
  {
    "id": "R07_WYC_02",
    "section": "Wycieczka krajoznawcza",
    "type": "multi_select",
    "prompt": "Zaznacz elementy zalecanego wyposażenia uczestnika wycieczki.",
    "options": [
      "buty trekkingowe",
      "kurtka przeciwdeszczowa",
      "zapas wody i prowiant",
      "latarka",
      "apteczka",
      "głośnik do głośnego odtwarzania muzyki na szlaku"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Ekwipunek powinien być dostosowany do trasy i pogody oraz obejmować m.in. odpowiedni ubiór, wodę, prowiant, latarkę i apteczkę.",
    "image": "r07_ekwipunek_wycieczki.jpg"
  },
  {
    "id": "R07_WYC_03",
    "section": "Wycieczka krajoznawcza",
    "type": "true_false",
    "prompt": "Poleganie wyłącznie na nawigacji satelitarnej podczas wycieczki nie jest dobrym pomysłem.",
    "options": null,
    "answer": true,
    "explanation": "Sprzęt elektroniczny może zawieść, dlatego warto mieć także mapę turystyczną w wersji papierowej."
  },
  {
    "id": "R07_WYC_04",
    "section": "Wycieczka krajoznawcza",
    "type": "fill_in",
    "prompt": "Wycieczka po regionie może być __________, __________ albo __________.",
    "options": null,
    "answer": [
      "piesza",
      "rowerowa",
      "autokarowa"
    ],
    "altAnswers": [
      [
        "piesza"
      ],
      [
        "rowerowa"
      ],
      [
        "autokarowa"
      ]
    ],
    "explanation": "Wycieczka po regionie może być piesza, rowerowa albo autokarowa."
  },
  {
    "id": "R07_WYC_05",
    "section": "Wycieczka krajoznawcza",
    "type": "odd_one_out",
    "prompt": "Co nie jest elementem kosztorysu wycieczki: bilety wstępu, wynajęcie autokaru, wyżywienie, ubezpieczenie, kolor plecaka.",
    "options": null,
    "answer": "kolor plecaka",
    "explanation": "Kosztorys obejmuje realne wydatki, takie jak bilety, transport, wyżywienie, noclegi czy ubezpieczenie. Kolor plecaka nie jest kosztem planowanej wycieczki."
  },
  {
    "id": "R07_WYC_06",
    "section": "Wycieczka krajoznawcza",
    "type": "match",
    "prompt": "Połącz potrzebną informację z polecanym źródłem.",
    "options": null,
    "left": [
      "koszt biletów wstępu",
      "koszt wynajęcia autokaru",
      "informacje o trasie i terenie",
      "lokalne informacje turystyczne"
    ],
    "right": [
      "strony internetowe wybranych obiektów",
      "przewoźnicy",
      "mapy i geoportale",
      "punkt informacji turystycznej"
    ],
    "answer": {
      "koszt biletów wstępu": "strony internetowe wybranych obiektów",
      "koszt wynajęcia autokaru": "przewoźnicy",
      "informacje o trasie i terenie": "mapy i geoportale",
      "lokalne informacje turystyczne": "punkt informacji turystycznej"
    },
    "explanation": "Planowanie wycieczki wymaga korzystania z różnych źródeł: stron obiektów, przewoźników, map, geoportali i informacji turystycznej."
  },
  {
    "id": "R07_WYC_07",
    "section": "Wycieczka krajoznawcza",
    "type": "scenario",
    "prompt": "W czasie pieszej wycieczki telefon się rozładował, a zasięg sieci jest słaby. Co najlepiej pozwoli kontynuować orientację w terenie?",
    "options": [
      "mapa papierowa",
      "wyłączony telefon",
      "aparat fotograficzny",
      "pusta butelka",
      "bilet wstępu",
      "notes"
    ],
    "answer": 0,
    "explanation": "Mapa papierowa nie wymaga zasilania ani zasięgu, dlatego jest ważnym zabezpieczeniem na wycieczce.",
    "image": "r07_mapa_i_wycieczka.jpg"
  },
  {
    "id": "R07_WYC_08",
    "section": "Wycieczka krajoznawcza",
    "type": "riddle",
    "prompt": "Jak nazywa się internetowa forma dokumentowania wycieczki w postaci filmu lub cyklu filmów?",
    "options": null,
    "answer": "vlog",
    "altAnswers": [
      "vlog",
      "wideoblog"
    ],
    "explanation": "Wspomnienia z wycieczki można utrwalić m.in. w formie bloga, vloga, reportażu lub wystawy fotograficznej."
  },
  {
    "id": "R07_WYC_09",
    "section": "Wycieczka krajoznawcza",
    "type": "sort",
    "prompt": "Przyporządkuj zasady świadomego turysty do nakazów i zakazów.",
    "options": null,
    "items": [
      "zabieraj śmieci ze sobą",
      "dbaj o zabytki",
      "nie hałasuj",
      "nie płosz zwierząt",
      "nie niszcz przyrody",
      "nie zostawiaj śmieci na szlaku"
    ],
    "categories": [
      "nakazy",
      "zakazy"
    ],
    "answer": {
      "nakazy": [
        "zabieraj śmieci ze sobą",
        "dbaj o zabytki"
      ],
      "zakazy": [
        "nie hałasuj",
        "nie płosz zwierząt",
        "nie niszcz przyrody",
        "nie zostawiaj śmieci na szlaku"
      ]
    },
    "explanation": "Kodeks świadomego turysty obejmuje zarówno nakazy, np. dbanie o zabytki, jak i zakazy chroniące przyrodę i spokój zwierząt."
  },
  {
    "id": "R07_WSP_01",
    "section": "Współpraca zagraniczna",
    "type": "single_choice",
    "prompt": "Ile euroregionów utworzono na obszarach przygranicznych Polski?",
    "options": [
      "17",
      "7",
      "12",
      "20",
      "25",
      "30"
    ],
    "answer": 0,
    "explanation": "Na obszarach przygranicznych Polski utworzono siedemnaście euroregionów.",
    "image": "r07_wspolpraca_przygraniczna.jpg"
  },
  {
    "id": "R07_WSP_02",
    "section": "Współpraca zagraniczna",
    "type": "true_false",
    "prompt": "Euroregion Nysa jest najstarszym euroregionem na granicach Polski i powstał w 1991 roku na pograniczu polsko-czesko-niemieckim.",
    "options": null,
    "answer": true,
    "explanation": "Euroregion Nysa powstał w 1991 roku na pograniczu Polski, Czech i Niemiec i jest najstarszym z polskich euroregionów.",
    "image": "r07_wspolpraca_przygraniczna.jpg"
  },
  {
    "id": "R07_WSP_03",
    "section": "Współpraca zagraniczna",
    "type": "fill_in",
    "prompt": "Najstarszy euroregion na granicach Polski to Euroregion __________, utworzony w roku __________.",
    "options": null,
    "answer": [
      "Nysa",
      "1991"
    ],
    "altAnswers": [
      [
        "Nysa",
        "nysa"
      ],
      [
        "1991"
      ]
    ],
    "explanation": "Euroregion Nysa powstał w 1991 roku."
  },
  {
    "id": "R07_WSP_04",
    "section": "Współpraca zagraniczna",
    "type": "match",
    "prompt": "Połącz euroregion z przykładem współpracy.",
    "options": null,
    "left": [
      "Pomerania",
      "Pro Europa Viadrina",
      "Tatry"
    ],
    "right": [
      "Transgraniczny weekend otwartych ogrodów",
      "współpraca akademicka Viadriny i Collegium Polonicum",
      "Historyczno-kulturowo-przyrodniczy szlak wokół Tatr"
    ],
    "answer": {
      "Pomerania": "Transgraniczny weekend otwartych ogrodów",
      "Pro Europa Viadrina": "współpraca akademicka Viadriny i Collegium Polonicum",
      "Tatry": "Historyczno-kulturowo-przyrodniczy szlak wokół Tatr"
    },
    "explanation": "Przykłady pokazują różne formy współpracy: lokalne wydarzenia, edukację oraz turystykę transgraniczną.",
    "image": "r07_szlak_wokol_tatr.jpg"
  },
  {
    "id": "R07_WSP_05",
    "section": "Współpraca zagraniczna",
    "type": "multi_select",
    "prompt": "Zaznacz cele i skutki współpracy w ramach euroregionów.",
    "options": [
      "rozwój społeczno-gospodarczy",
      "poprawa warunków życia",
      "ułatwianie wzajemnych kontaktów",
      "zacieśnianie współpracy władz i mieszkańców",
      "zastępowanie granic państwowych nowymi państwami",
      "likwidacja wszystkich gmin"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Euroregiony wspierają rozwój społeczno-gospodarczy, poprawę warunków życia, kontakty oraz współpracę władz i mieszkańców po obu stronach granicy."
  },
  {
    "id": "R07_WSP_06",
    "section": "Współpraca zagraniczna",
    "type": "odd_one_out",
    "prompt": "Co nie jest nazwą euroregionu: Nysa, Pomerania, Tatry, Lyon.",
    "options": null,
    "answer": "Lyon",
    "explanation": "Nysa, Pomerania i Tatry to euroregiony. Lyon jest miastem partnerskim Łodzi."
  },
  {
    "id": "R07_WSP_07",
    "section": "Współpraca zagraniczna",
    "type": "scenario",
    "prompt": "Powódź obejmuje tereny po obu stronach granicy państwowej. Jaka forma współpracy szczególnie ułatwia koordynację działań władz i mieszkańców po obu stronach granicy?",
    "options": [
      "współpraca w euroregionie",
      "podział regionu na nowe państwa",
      "rezygnacja z kontaktów",
      "wyłącznie współpraca jednego muzeum",
      "zamknięcie wszystkich dróg",
      "likwidacja samorządów"
    ],
    "answer": 0,
    "explanation": "Współpraca transgraniczna w euroregionach ułatwia wspólne reagowanie na problemy wykraczające poza granice jednej jednostki lub państwa."
  },
  {
    "id": "R07_WSP_08",
    "section": "Współpraca zagraniczna",
    "type": "single_choice",
    "prompt": "Które miasto jest partnerem Łodzi, powiązanym z nią tradycjami włókienniczymi i filmem?",
    "options": [
      "Lyon",
      "Blankensee",
      "Dobra",
      "Słubice",
      "Frankfurt nad Odrą",
      "Rogalin"
    ],
    "answer": 0,
    "explanation": "Łódź i Lyon łączą tradycje tkackie i przemysł włókienniczy oraz związki z filmem i kinem."
  },
  {
    "id": "R07_WSP_09",
    "section": "Współpraca zagraniczna",
    "type": "riddle",
    "prompt": "Jak nazywa się utworzona w 1998 roku w Słubicach wspólna jednostka Uniwersytetu Europejskiego Viadrina i Uniwersytetu im. Adama Mickiewicza w Poznaniu?",
    "options": null,
    "answer": "Collegium Polonicum",
    "altAnswers": [
      "Collegium Polonicum",
      "collegium polonicum"
    ],
    "explanation": "Collegium Polonicum w Słubicach powstało w 1998 roku jako wspólna jednostka uczelni z Frankfurtu nad Odrą i Poznania."
  },
  {
    "id": "R07_OJC_01",
    "section": "Mała ojczyzna",
    "type": "single_choice",
    "prompt": "Czym jest mała ojczyzna?",
    "options": [
      "Bliskim człowiekowi obszarem, który uznaje za własny",
      "Wyłącznie województwem",
      "Każdym państwem graniczącym z Polską",
      "Tylko miejscem urodzenia",
      "Wyłącznie historyczną krainą",
      "Tylko obszarem parku narodowego"
    ],
    "answer": 0,
    "explanation": "Mała ojczyzna to bliski, dobrze znany obszar, z którym człowieka łączą silne więzi.",
    "image": "r07_mala_ojczyzna.jpg"
  },
  {
    "id": "R07_OJC_02",
    "section": "Mała ojczyzna",
    "type": "true_false",
    "prompt": "Granice małej ojczyzny są dla wszystkich mieszkańców jednakowe i zawsze pokrywają się z granicami administracyjnymi.",
    "options": null,
    "answer": false,
    "explanation": "Każdy może inaczej wyznaczać swoją małą ojczyznę. Może nią być miejscowość, osiedle, kilka ulic, kilka wsi lub inny bliski obszar."
  },
  {
    "id": "R07_OJC_03",
    "section": "Mała ojczyzna",
    "type": "multi_select",
    "prompt": "Zaznacz obszary, które mogą być dla kogoś małą ojczyzną.",
    "options": [
      "miejscowość",
      "osiedle lub dzielnica",
      "kilkanaście ulic",
      "miasteczko z przyległymi miejscowościami",
      "kilka wsi",
      "cały kontynent jako obowiązkowa jednostka"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Wielkość małej ojczyzny jest indywidualna i może obejmować bardzo różne, bliskie człowiekowi obszary."
  },
  {
    "id": "R07_OJC_04",
    "section": "Mała ojczyzna",
    "type": "fill_in",
    "prompt": "Wraz z upływem czasu obszar uznawany za małą ojczyznę często __________, a zazwyczaj __________.",
    "options": null,
    "answer": [
      "się zmienia",
      "się rozszerza"
    ],
    "altAnswers": [
      [
        "się zmienia",
        "sie zmienia"
      ],
      [
        "się rozszerza",
        "sie rozszerza"
      ]
    ],
    "explanation": "W kolejnych etapach życia poznajemy większą przestrzeń, dlatego obszar małej ojczyzny często się zmienia i zwykle rozszerza."
  },
  {
    "id": "R07_OJC_05",
    "section": "Mała ojczyzna",
    "type": "scenario",
    "prompt": "Osoba przeprowadziła się do innej miejscowości, dobrze się tam czuje i z biegiem lat silnie związała się z nowym otoczeniem. Co może się z tym wiązać?",
    "options": [
      "zyskaniem kolejnej małej ojczyzny",
      "utratą wszystkich więzi z miejscami",
      "powstaniem nowego województwa",
      "automatyczną zmianą granic państwa",
      "utworzeniem euroregionu",
      "zanikiem kultury lokalnej"
    ],
    "answer": 0,
    "explanation": "Osoby, które zmieniają miejsce zamieszkania i dobrze czują się w nowym otoczeniu, mogą zyskać kolejną małą ojczyznę.",
    "image": "r07_mala_ojczyzna.jpg"
  },
  {
    "id": "R07_OJC_06",
    "section": "Mała ojczyzna",
    "type": "odd_one_out",
    "prompt": "Co nie należy do cech nadających małej ojczyźnie unikatowy charakter: kultura, zwyczaje, gwara, uwarunkowania przyrodnicze, zabudowania, kurs walut.",
    "options": null,
    "answer": "kurs walut",
    "explanation": "Unikatowy charakter małej ojczyzny tworzą m.in. kultura, zwyczaje, gwara, przyroda, zabudowa i lokalni twórcy."
  },
  {
    "id": "R07_OJC_07",
    "section": "Mała ojczyzna",
    "type": "match",
    "prompt": "Połącz przykład z tym, co można dzięki niemu poznać w małej ojczyźnie.",
    "options": null,
    "left": [
      "Rogaliński Park Krajobrazowy",
      "dawna fabryka Karola Scheiblera w Łodzi",
      "festiwale kultury ludowej"
    ],
    "right": [
      "wielowiekowe dęby i walory przyrodnicze",
      "zrewitalizowany zabytek pełniący funkcję mieszkalną i turystyczną",
      "twórców ludowych, zespoły i kuchnię regionalną"
    ],
    "answer": {
      "Rogaliński Park Krajobrazowy": "wielowiekowe dęby i walory przyrodnicze",
      "dawna fabryka Karola Scheiblera w Łodzi": "zrewitalizowany zabytek pełniący funkcję mieszkalną i turystyczną",
      "festiwale kultury ludowej": "twórców ludowych, zespoły i kuchnię regionalną"
    },
    "explanation": "Małą ojczyznę poznaje się przez jej przyrodę, zabytki oraz żywą kulturę lokalną.",
    "image": "r07_park_i_zabytek.jpg"
  },
  {
    "id": "R07_OJC_08",
    "section": "Mała ojczyzna",
    "type": "riddle",
    "prompt": "Bliski i dobrze znany obszar, z którym łączą człowieka silne więzi, to...",
    "options": null,
    "answer": "mała ojczyzna",
    "altAnswers": [
      "mała ojczyzna",
      "mala ojczyzna"
    ],
    "explanation": "Mała ojczyzna jest przestrzenią uznawaną za własną i ważną emocjonalnie.",
    "image": "r07_mala_ojczyzna.jpg"
  },
  {
    "id": "R07_OJC_09",
    "section": "Mała ojczyzna",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady walorów małej ojczyzny do przyrodniczych albo kulturowych.",
    "options": null,
    "items": [
      "park krajobrazowy",
      "las",
      "rezerwat przyrody",
      "pomnik przyrody",
      "zabytkowa fabryka",
      "twórcy ludowi",
      "festiwal kultury ludowej",
      "kuchnia regionalna"
    ],
    "categories": [
      "walory przyrodnicze",
      "walory kulturowe"
    ],
    "answer": {
      "walory przyrodnicze": [
        "park krajobrazowy",
        "las",
        "rezerwat przyrody",
        "pomnik przyrody"
      ],
      "walory kulturowe": [
        "zabytkowa fabryka",
        "twórcy ludowi",
        "festiwal kultury ludowej",
        "kuchnia regionalna"
      ]
    },
    "explanation": "Walory małej ojczyzny mogą wynikać zarówno z przyrody, jak i z dziedzictwa oraz działalności lokalnej społeczności."
  },
  {
    "id": "R07_HARD_01",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz informacje charakterystyczne dla regionu administracyjnego.",
    "options": [
      "jest tworzony przez władze państwowe",
      "ma dokładnie wyznaczone granice",
      "jego przykładami są województwo, powiat i gmina",
      "musi mieć wspólną gwarę",
      "jego granice zawsze zależą od rzeźby terenu",
      "jest wyznaczany wyłącznie zasięgiem ziem historycznych"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Region administracyjny tworzą władze państwowe, ma ścisłe granice, a jego przykładami są województwo, powiat i gmina."
  },
  {
    "id": "R07_HARD_02",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz typ regionu z pasującym przykładem lub sposobem wyróżnienia.",
    "options": null,
    "left": [
      "historyczny",
      "etnograficzny",
      "administracyjny",
      "społeczno-gospodarczy"
    ],
    "right": [
      "Wielkopolska",
      "Kaszuby",
      "województwo",
      "obszar wyróżniony m.in. budową fabryk"
    ],
    "answer": {
      "historyczny": "Wielkopolska",
      "etnograficzny": "Kaszuby",
      "administracyjny": "województwo",
      "społeczno-gospodarczy": "obszar wyróżniony m.in. budową fabryk"
    },
    "explanation": "Wielkopolska jest przykładem regionu historycznego, Kaszuby etnograficznego, województwo administracyjnego, a działalność człowieka służy do wyróżniania regionów społeczno-gospodarczych.",
    "image": "r07_typy_regionow.jpg"
  },
  {
    "id": "R07_HARD_03",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która klasyfikacja poprawnie opisuje kolejno Niemców, Łemków i Kaszubów?",
    "options": [
      "mniejszość narodowa - mniejszość etniczna - grupa etnograficzna",
      "mniejszość etniczna - mniejszość narodowa - grupa etnograficzna",
      "grupa etnograficzna - mniejszość etniczna - mniejszość narodowa",
      "mniejszość narodowa - grupa etnograficzna - mniejszość etniczna",
      "grupa etnograficzna - mniejszość narodowa - mniejszość etniczna",
      "mniejszość etniczna - grupa etnograficzna - mniejszość narodowa"
    ],
    "answer": 0,
    "explanation": "Niemcy są mniejszością narodową, Łemkowie mniejszością etniczną, a Kaszubi grupą etnograficzną.",
    "image": "r07_mniejszosci_kulturowe.jpg"
  },
  {
    "id": "R07_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W __________ roku utworzono w Słubicach Collegium Polonicum jako jednostkę wspólną z Uniwersytetem im. Adama Mickiewicza w __________.",
    "options": null,
    "answer": [
      "1998",
      "Poznaniu"
    ],
    "altAnswers": [
      [
        "1998"
      ],
      [
        "Poznaniu",
        "poznaniu"
      ]
    ],
    "explanation": "Collegium Polonicum powstało w Słubicach w 1998 roku jako wspólna jednostka Uniwersytetu Europejskiego Viadrina i UAM w Poznaniu."
  },
  {
    "id": "R07_HARD_05",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Historyczno-kulturowo-przyrodniczy szlak wokół Tatr ma ponad 250 km i wspiera rozwój zrównoważonej turystyki na pograniczu polsko-słowackim.",
    "options": null,
    "answer": true,
    "explanation": "Szlak liczy ponad 250 km tras dla rowerzystów, narciarzy i biegaczy po obu stronach granicy i służy zrównoważonej turystyce.",
    "image": "r07_szlak_wokol_tatr.jpg"
  },
  {
    "id": "R07_HARD_06",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do głównego tematu, którego dotyczą.",
    "options": null,
    "items": [
      "centrum logistyczne w Strykowie",
      "oscypek",
      "Euroregion Nysa",
      "Collegium Polonicum",
      "wielowiekowe dęby w Rogalinie",
      "Lofty u Scheiblera"
    ],
    "categories": [
      "gospodarka regionu",
      "współpraca zagraniczna",
      "mała ojczyzna i jej walory"
    ],
    "answer": {
      "gospodarka regionu": [
        "centrum logistyczne w Strykowie",
        "oscypek"
      ],
      "współpraca zagraniczna": [
        "Euroregion Nysa",
        "Collegium Polonicum"
      ],
      "mała ojczyzna i jej walory": [
        "wielowiekowe dęby w Rogalinie",
        "Lofty u Scheiblera"
      ]
    },
    "explanation": "Przykłady łączą trzy części tematu: gospodarkę, współpracę międzynarodową oraz lokalne walory przyrodnicze i kulturowe."
  },
  {
    "id": "R07_HARD_07",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż kolejne działania podczas poznawania własnego regionu - od jego odnalezienia na mapie do wskazania najcenniejszych elementów przyrodniczych.",
    "options": null,
    "items": [
      "wskaż najbardziej wartościowe i unikatowe elementy przyrodnicze",
      "określ położenie, zasięg i granice",
      "przeanalizuj elementy środowiska geograficznego",
      "umiejsców region na mapie Polski",
      "zwróć uwagę na cechy wyróżniające region"
    ],
    "answer": [
      "umiejsców region na mapie Polski",
      "określ położenie, zasięg i granice",
      "przeanalizuj elementy środowiska geograficznego",
      "zwróć uwagę na cechy wyróżniające region",
      "wskaż najbardziej wartościowe i unikatowe elementy przyrodnicze"
    ],
    "explanation": "Poznawanie regionu zaczyna się od lokalizacji i określenia granic, następnie przechodzi do analizy środowiska, cech wyróżniających oraz walorów szczególnie cennych."
  },
  {
    "id": "R07_HARD_08",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Klasa idzie pieszo przez cenny przyrodniczo teren. Telefon jednego z uczniów przestaje działać. Który zestaw zachowań najlepiej odpowiada zasadom bezpiecznej i świadomej wycieczki?",
    "options": [
      "korzystać z mapy papierowej, zabrać śmieci ze sobą i nie płoszyć zwierząt",
      "polegać tylko na telefonie, zostawić śmieci i hałasować",
      "zejść ze szlaku bez mapy i niszczyć roślinność",
      "zrezygnować z wody, ale zabrać głośnik",
      "ignorować pogodę i nie brać odpowiedniego ubioru",
      "zostawić apteczkę, a zabrać wyłącznie aparat"
    ],
    "answer": 0,
    "explanation": "Bezpieczeństwo i odpowiedzialna turystyka wymagają zapasowej mapy, właściwego zachowania wobec przyrody i zabierania odpadów.",
    "image": "r07_ekwipunek_wycieczki.jpg"
  },
  {
    "id": "R07_HARD_09",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do miejsc związanych ze współpracą euroregionalną: Dobra, Blankensee, Słubice, Lyon.",
    "options": null,
    "answer": "Lyon",
    "explanation": "Dobra i Blankensee są związane z Euroregionem Pomerania, a Słubice ze współpracą w Euroregionie Pro Europa Viadrina. Lyon występuje jako miasto partnerskie Łodzi.",
    "image": "r07_wspolpraca_przygraniczna.jpg"
  },
  {
    "id": "R07_HARD_10",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jakie dwie dziedziny szczególnie łączą Łódź z Lyonem?",
    "options": [
      "włókiennictwo oraz film i kino",
      "górnictwo oraz żegluga morska",
      "sadownictwo oraz hodowla owiec",
      "leśnictwo oraz hutnictwo",
      "rybołówstwo oraz przemysł stoczniowy",
      "wydobycie soli oraz narciarstwo"
    ],
    "answer": 0,
    "explanation": "Oba miasta łączy przeszłość związana z tkactwem i przemysłem włókienniczym oraz ważne związki z filmem i kinem."
  },
  {
    "id": "R07_HARD_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W jakim źródle można szukać pochodzenia wielu nazw geograficznych miejscowości, rzek, jezior i gór?",
    "options": [
      "Słownik geograficzny Królestwa Polskiego i innych krajów słowiańskich",
      "rozkład jazdy autobusów",
      "katalog cen biletów",
      "prognoza pogody",
      "mapa autostrad",
      "lista centrów logistycznych"
    ],
    "answer": 0,
    "explanation": "Pochodzenia wielu nazw można szukać w Słowniku geograficznym Królestwa Polskiego i innych krajów słowiańskich."
  },
  {
    "id": "R07_HARD_12",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz szczegół z właściwym przykładem regionalnym.",
    "options": null,
    "left": [
      "ChOG",
      "Stryków",
      "Rogaliński Park Krajobrazowy",
      "Łódź i Lyon"
    ],
    "right": [
      "oznaczenie regionalnych produktów o wyjątkowej jakości",
      "centrum logistyczne przy A1 i A2",
      "wielowiekowe dęby",
      "włókiennictwo oraz związki z filmem"
    ],
    "answer": {
      "ChOG": "oznaczenie regionalnych produktów o wyjątkowej jakości",
      "Stryków": "centrum logistyczne przy A1 i A2",
      "Rogaliński Park Krajobrazowy": "wielowiekowe dęby",
      "Łódź i Lyon": "włókiennictwo oraz związki z filmem"
    },
    "explanation": "Te szczegóły są charakterystycznymi przykładami łączącymi kulturę, gospodarkę, przyrodę i współpracę międzynarodową."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r07",
  number: 7,
  title: "Własny region i mała ojczyzna",
  icon: "🧭",
  sectionOrder: [
  "Region i środowisko przyrodnicze",
  "Mieszkańcy i walory kulturowe",
  "Gospodarka regionu",
  "Wycieczka krajoznawcza",
  "Współpraca zagraniczna",
  "Mała ojczyzna"
],
  sectionIcons: {
  "Region i środowisko przyrodnicze": "🌿",
  "Mieszkańcy i walory kulturowe": "🎭",
  "Gospodarka regionu": "🏭",
  "Wycieczka krajoznawcza": "🥾",
  "Współpraca zagraniczna": "🤝",
  "Mała ojczyzna": "🏡"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
