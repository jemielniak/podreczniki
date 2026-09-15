// Skróty sekcji (do identyfikatorów ćwiczeń):
//   REV  = Rewolucja francuska
//   REP  = Republika Francuska
//   NAP  = Epoka Napoleona Bonapartego
//   UPA  = Upadek Napoleona
//   LEG  = Legiony Polskie we Włoszech
//   KSI  = Księstwo Warszawskie
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R06_REV_01",
    "section": "Rewolucja francuska",
    "type": "single_choice",
    "prompt": "Która dynastia sprawowała we Francji rządy absolutne w XVIII wieku?",
    "options": [
      "Burbonowie",
      "Wettinowie",
      "Habsburgowie",
      "Romanowowie",
      "Hohenzollernowie",
      "Bonapartowie"
    ],
    "answer": 0,
    "explanation": "W XVIII wieku Francją rządzili Burbonowie. Za panowania Ludwika XVI kryzys finansów państwa przyczynił się do zwołania Stanów Generalnych w 1789 roku."
  },
  {
    "id": "R06_REV_02",
    "section": "Rewolucja francuska",
    "type": "match",
    "prompt": "Połącz stan społeczeństwa francuskiego z jego charakterystyką.",
    "options": null,
    "left": [
      "stan pierwszy",
      "stan drugi",
      "stan trzeci"
    ],
    "right": [
      "duchowieństwo",
      "szlachta",
      "mieszczanie i chłopi"
    ],
    "answer": {
      "stan pierwszy": "duchowieństwo",
      "stan drugi": "szlachta",
      "stan trzeci": "mieszczanie i chłopi"
    },
    "explanation": "Stan pierwszy tworzyło duchowieństwo, drugi szlachta, a do stanu trzeciego zaliczali się między innymi mieszczanie i chłopi.",
    "image": "r06_trzy_stany.jpg"
  },
  {
    "id": "R06_REV_03",
    "section": "Rewolucja francuska",
    "type": "true_false",
    "prompt": "Stan trzeci stanowił około 98 procent społeczeństwa Francji.",
    "options": null,
    "answer": true,
    "explanation": "Stan trzeci był zdecydowanie najliczniejszy i obejmował około 98 procent społeczeństwa, mimo że to on ponosił ciężar podatków."
  },
  {
    "id": "R06_REV_04",
    "section": "Rewolucja francuska",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Uchwalenie konstytucji Francji",
      "Zdobycie Bastylii",
      "Zwołanie Stanów Generalnych",
      "Uchwalenie Deklaracji praw człowieka i obywatela",
      "Powstanie Zgromadzenia Narodowego"
    ],
    "answer": [
      "Zwołanie Stanów Generalnych",
      "Powstanie Zgromadzenia Narodowego",
      "Zdobycie Bastylii",
      "Uchwalenie Deklaracji praw człowieka i obywatela",
      "Uchwalenie konstytucji Francji"
    ],
    "explanation": "Stany Generalne zwołano w 1789 roku, następnie stan trzeci utworzył Zgromadzenie Narodowe, 14 lipca zdobyto Bastylię, w sierpniu uchwalono deklarację praw, a konstytucję przyjęto we wrześniu 1791 roku."
  },
  {
    "id": "R06_REV_05",
    "section": "Rewolucja francuska",
    "type": "multi_select",
    "prompt": "Zaznacz naturalne i nieprzedawnione prawa człowieka określone w Deklaracji praw człowieka i obywatela.",
    "options": [
      "wolność",
      "własność",
      "bezpieczeństwo",
      "opór przeciw uciskowi",
      "dziedziczny dostęp do urzędów",
      "zwolnienie z podatków"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Deklaracja wymieniała wolność, własność, bezpieczeństwo i opór przeciw uciskowi. Odrzucała przywileje stanowe i podkreślała równość wobec prawa.",
    "image": "r06_deklaracja_praw.jpg"
  },
  {
    "id": "R06_REV_06",
    "section": "Rewolucja francuska",
    "type": "fill_in",
    "prompt": "Lud Paryża zdobył Bastylię __________, a wydarzenie to stało się symbolicznym początkiem Wielkiej Rewolucji Francuskiej.",
    "options": null,
    "answer": [
      "14 lipca 1789 roku"
    ],
    "altAnswers": [
      [
        "14 lipca 1789 roku",
        "14 lipca 1789",
        "14.07.1789",
        "14 VII 1789"
      ]
    ],
    "explanation": "14 lipca 1789 roku paryżanie zaatakowali i zdobyli Bastylię. Rocznica tego wydarzenia jest francuskim świętem narodowym.",
    "image": "r06_bastylia.jpg"
  },
  {
    "id": "R06_REV_07",
    "section": "Rewolucja francuska",
    "type": "odd_one_out",
    "prompt": "Wskaż grupę, która należała do stanu trzeciego: duchowieństwo, szlachta, burżuazja, arystokracja.",
    "options": null,
    "answer": "burżuazja",
    "explanation": "Burżuazja, czyli zamożni i wykształceni mieszczanie, należała do stanu trzeciego. Duchowieństwo tworzyło stan pierwszy, a szlachta i arystokracja należały do stanu drugiego."
  },
  {
    "id": "R06_REV_08",
    "section": "Rewolucja francuska",
    "type": "scenario",
    "prompt": "Jest wrzesień 1791 roku. Nowa konstytucja wprowadza we Francji trójpodział władzy. Która instytucja ma sprawować władzę ustawodawczą?",
    "options": [
      "Zgromadzenie Prawodawcze",
      "Rada Ministrów",
      "Trybunał Rewolucyjny",
      "Dyrektoriat",
      "Stany Generalne",
      "konsulat"
    ],
    "answer": 0,
    "explanation": "Konstytucja z 1791 roku powierzała władzę ustawodawczą Zgromadzeniu Prawodawczemu, wykonawczą królowi, a sądy miały być niezależne."
  },
  {
    "id": "R06_REV_09",
    "section": "Rewolucja francuska",
    "type": "riddle",
    "prompt": "Francuska pisarka, która w 1791 roku napisała Deklarację praw kobiety i obywatelki, to...",
    "options": null,
    "answer": "Olimpia de Gouges",
    "altAnswers": [
      "Olimpia de Gouges",
      "Olympe de Gouges",
      "de Gouges"
    ],
    "explanation": "Olimpia de Gouges zaprotestowała przeciw wyłączeniu kobiet z pełni praw obywatelskich i w 1791 roku ogłosiła Deklarację praw kobiety i obywatelki."
  },
  {
    "id": "R06_REP_01",
    "section": "Republika Francuska",
    "type": "single_choice",
    "prompt": "Jaki ustrój ogłoszono we Francji we wrześniu 1792 roku po zniesieniu monarchii?",
    "options": [
      "republikę",
      "monarchię konstytucyjną",
      "cesarstwo",
      "monarchię absolutną",
      "księstwo",
      "konsulat"
    ],
    "answer": 0,
    "explanation": "We wrześniu 1792 roku parlament zniósł monarchię i ogłosił republikę. Pełnia władzy miała należeć do parlamentu wybieranego przez naród."
  },
  {
    "id": "R06_REP_02",
    "section": "Republika Francuska",
    "type": "true_false",
    "prompt": "Ludwik XVI został stracony w Paryżu w styczniu 1793 roku na gilotynie.",
    "options": null,
    "answer": true,
    "explanation": "Po uznaniu Ludwika XVI za winnego zdrady narodu wykonano na nim wyrok śmierci przez ścięcie na gilotynie w styczniu 1793 roku.",
    "image": "r06_gilotyna.jpg"
  },
  {
    "id": "R06_REP_03",
    "section": "Republika Francuska",
    "type": "multi_select",
    "prompt": "Zaznacz państwa należące do koalicji walczącej z Republiką Francuską po egzekucji Ludwika XVI.",
    "options": [
      "Wielka Brytania",
      "Holandia",
      "Hiszpania",
      "Portugalia",
      "Saksonia",
      "Dania"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Po egzekucji króla do Austrii i Prus dołączyły między innymi Wielka Brytania, Holandia, Hiszpania i Portugalia."
  },
  {
    "id": "R06_REP_04",
    "section": "Republika Francuska",
    "type": "fill_in",
    "prompt": "W 1793 roku władzę przejęli radykalni __________, a ich przywódcą był Maksymilian __________.",
    "options": null,
    "answer": [
      "jakobini",
      "Robespierre"
    ],
    "altAnswers": [
      [
        "jakobini",
        "jakobinowie"
      ],
      [
        "Robespierre",
        "Maksymilian Robespierre",
        "Maximilien Robespierre"
      ]
    ],
    "explanation": "W kryzysie 1793 roku władzę przejęło stronnictwo jakobinów pod przywództwem Maksymiliana Robespierre'a.",
    "image": "r06_robespierre.jpg"
  },
  {
    "id": "R06_REP_05",
    "section": "Republika Francuska",
    "type": "match",
    "prompt": "Połącz element rządów jakobinów z właściwym opisem.",
    "options": null,
    "left": [
      "Trybunał Rewolucyjny",
      "Wielki Terror",
      "gilotyna",
      "donos lub podejrzenie nielojalności"
    ],
    "right": [
      "specjalny sąd",
      "nasilenie egzekucji w czerwcu i lipcu 1794 roku",
      "narzędzie wykonywania wyroków śmierci",
      "mogły wystarczyć do wszczęcia represji"
    ],
    "answer": {
      "Trybunał Rewolucyjny": "specjalny sąd",
      "Wielki Terror": "nasilenie egzekucji w czerwcu i lipcu 1794 roku",
      "gilotyna": "narzędzie wykonywania wyroków śmierci",
      "donos lub podejrzenie nielojalności": "mogły wystarczyć do wszczęcia represji"
    },
    "explanation": "Jakobini oparli władzę na terrorze. Trybunał Rewolucyjny sądził podejrzanych, a najwięcej egzekucji przypadło na czerwiec i lipiec 1794 roku."
  },
  {
    "id": "R06_REP_06",
    "section": "Republika Francuska",
    "type": "scenario",
    "prompt": "W 1793 roku obywatel zostaje oskarżony o niechęć wobec nowego porządku. Przed jakim organem może zostać postawiony?",
    "options": [
      "Trybunałem Rewolucyjnym",
      "Zgromadzeniem Prawodawczym",
      "Radą Pięciuset",
      "Stanami Generalnymi",
      "Radą Ministrów",
      "Sądem Księstwa Warszawskiego"
    ],
    "answer": 0,
    "explanation": "Jakobini powołali Trybunał Rewolucyjny, specjalny sąd dla osób oskarżanych o wrogość wobec nowego ustroju."
  },
  {
    "id": "R06_REP_07",
    "section": "Republika Francuska",
    "type": "odd_one_out",
    "prompt": "Wskaż element niezwiązany bezpośrednio z terrorem jakobinów: gilotyna, Trybunał Rewolucyjny, Maksymilian Robespierre, Zgromadzenie Prawodawcze.",
    "options": null,
    "answer": "Zgromadzenie Prawodawcze",
    "explanation": "Zgromadzenie Prawodawcze było organem ustawodawczym monarchii konstytucyjnej z 1791 roku. Pozostałe elementy są związane z rządami jakobinów i terrorem."
  },
  {
    "id": "R06_REP_08",
    "section": "Republika Francuska",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do rządów jakobinów albo dyrektoriatu.",
    "options": null,
    "items": [
      "Trybunał Rewolucyjny",
      "rządy oparte na terrorze",
      "pięcioosobowa władza wykonawcza",
      "prawa wyborcze dla obywateli płacących podatki",
      "kandydowanie na urzędy tylko dla ludzi o dużym majątku",
      "przywództwo Robespierre'a"
    ],
    "categories": [
      "rządy jakobinów",
      "dyrektoriat"
    ],
    "answer": {
      "rządy jakobinów": [
        "Trybunał Rewolucyjny",
        "rządy oparte na terrorze",
        "przywództwo Robespierre'a"
      ],
      "dyrektoriat": [
        "pięcioosobowa władza wykonawcza",
        "prawa wyborcze dla obywateli płacących podatki",
        "kandydowanie na urzędy tylko dla ludzi o dużym majątku"
      ]
    },
    "explanation": "Jakobini stosowali terror pod przywództwem Robespierre'a. Po ich upadku nowa konstytucja ustanowiła pięcioosobowy dyrektoriat; prawa wyborcze mieli podatnicy, a kandydować na urzędy mogli ludzie o dużym majątku."
  },
  {
    "id": "R06_REP_09",
    "section": "Republika Francuska",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Ustanowienie dyrektoriatu",
      "Egzekucja Ludwika XVI",
      "Wybuch wojny z Austrią i Prusami",
      "Upadek rządów jakobinów",
      "Ogłoszenie republiki"
    ],
    "answer": [
      "Wybuch wojny z Austrią i Prusami",
      "Ogłoszenie republiki",
      "Egzekucja Ludwika XVI",
      "Upadek rządów jakobinów",
      "Ustanowienie dyrektoriatu"
    ],
    "explanation": "Wojna wybuchła w 1792 roku, republikę ogłoszono we wrześniu 1792 roku, Ludwika XVI stracono na początku 1793 roku, jakobinów obalono w lipcu 1794 roku, a nową konstytucję z dyrektoriatem uchwalono w 1795 roku."
  },
  {
    "id": "R06_NAP_01",
    "section": "Epoka Napoleona Bonapartego",
    "type": "single_choice",
    "prompt": "W którym roku Napoleon Bonaparte dokonał zamachu stanu i przejął władzę we Francji?",
    "options": [
      "1799",
      "1789",
      "1792",
      "1795",
      "1804",
      "1807"
    ],
    "answer": 0,
    "explanation": "Napoleon wykorzystał popularność zdobytą dzięki sukcesom wojskowym i w 1799 roku obalił dyrektoriat w wyniku zamachu stanu."
  },
  {
    "id": "R06_NAP_02",
    "section": "Epoka Napoleona Bonapartego",
    "type": "true_false",
    "prompt": "Po obaleniu dyrektoriatu powołano trzyosobowy konsulat, a Napoleon został dożywotnim pierwszym konsulem.",
    "options": null,
    "answer": true,
    "explanation": "Po zamachu stanu dyrektoriat zastąpił trzyosobowy konsulat. Napoleon jako dożywotni pierwszy konsul otrzymał szerokie uprawnienia."
  },
  {
    "id": "R06_NAP_03",
    "section": "Epoka Napoleona Bonapartego",
    "type": "multi_select",
    "prompt": "Zaznacz zasady i prawa gwarantowane przez Kodeks Napoleona.",
    "options": [
      "równość wobec prawa",
      "wolność osobista",
      "wolność religijna",
      "ochrona własności prywatnej",
      "przywileje stanowe",
      "zakaz działalności gospodarczej"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Kodeks Napoleona utrwalał równość wobec prawa, wolność osobistą i religijną, chronił własność prywatną oraz swobodę działalności gospodarczej."
  },
  {
    "id": "R06_NAP_04",
    "section": "Epoka Napoleona Bonapartego",
    "type": "fill_in",
    "prompt": "W __________ roku uchwalono Kodeks Napoleona, a pod koniec tego samego roku Napoleon został koronowany na __________.",
    "options": null,
    "answer": [
      "1804",
      "cesarza Francuzów"
    ],
    "altAnswers": [
      [
        "1804",
        "1804 r.",
        "1804 roku"
      ],
      [
        "cesarza Francuzów",
        "cesarza",
        "cesarz Francuzów"
      ]
    ],
    "explanation": "Rok 1804 przyniósł zarówno uchwalenie Kodeksu Napoleona, jak i koronację Bonapartego na cesarza Francuzów."
  },
  {
    "id": "R06_NAP_05",
    "section": "Epoka Napoleona Bonapartego",
    "type": "scenario",
    "prompt": "Pod koniec 1804 roku w paryskiej katedrze Notre Dame odbywa się koronacja Napoleona. Kto siedzi za jego plecami, a jego rola w ceremonii została celowo ograniczona?",
    "options": [
      "papież Pius VII",
      "car Aleksander I",
      "król Fryderyk August",
      "Maksymilian Robespierre",
      "Ludwik XVI",
      "Jan Henryk Dąbrowski"
    ],
    "answer": 0,
    "explanation": "W ceremonii uczestniczył papież Pius VII, lecz Napoleon sam nałożył sobie koronę, chcąc podkreślić niezależność swojej władzy.",
    "image": "r06_koronacja_napoleona.jpg"
  },
  {
    "id": "R06_NAP_06",
    "section": "Epoka Napoleona Bonapartego",
    "type": "match",
    "prompt": "Połącz wydarzenie z rokiem.",
    "options": null,
    "left": [
      "zamach stanu Napoleona",
      "bitwa pod Austerlitz",
      "wprowadzenie blokady kontynentalnej",
      "pokój w Tylży"
    ],
    "right": [
      "1799",
      "1805",
      "1806",
      "1807"
    ],
    "answer": {
      "zamach stanu Napoleona": "1799",
      "bitwa pod Austerlitz": "1805",
      "wprowadzenie blokady kontynentalnej": "1806",
      "pokój w Tylży": "1807"
    },
    "explanation": "Napoleon przejął władzę w 1799 roku, zwyciężył pod Austerlitz w 1805 roku, rok później wprowadził blokadę kontynentalną, a pokój w Tylży zawarto w 1807 roku.",
    "image": "r06_bitwa_austerlitz.jpg"
  },
  {
    "id": "R06_NAP_07",
    "section": "Epoka Napoleona Bonapartego",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie był rodzajem wojsk w armii Napoleona: piechota, kawaleria, artyleria, dyrektoriat.",
    "options": null,
    "answer": "dyrektoriat",
    "explanation": "Armia Napoleona składała się głównie z piechoty, a także kawalerii i artylerii. Dyrektoriat był formą władzy wykonawczej we Francji."
  },
  {
    "id": "R06_NAP_08",
    "section": "Epoka Napoleona Bonapartego",
    "type": "sort",
    "prompt": "Przyporządkuj działania Napoleona do polityki wewnętrznej albo zagranicznej.",
    "options": null,
    "items": [
      "rozwój rolnictwa i przemysłu",
      "cła na zagraniczne towary",
      "Kodeks Napoleona",
      "bitwa pod Austerlitz",
      "utworzenie Związku Reńskiego",
      "blokada kontynentalna"
    ],
    "categories": [
      "polityka wewnętrzna",
      "polityka zagraniczna"
    ],
    "answer": {
      "polityka wewnętrzna": [
        "rozwój rolnictwa i przemysłu",
        "cła na zagraniczne towary",
        "Kodeks Napoleona"
      ],
      "polityka zagraniczna": [
        "bitwa pod Austerlitz",
        "utworzenie Związku Reńskiego",
        "blokada kontynentalna"
      ]
    },
    "explanation": "Napoleon reformował gospodarkę i prawo we Francji, a jednocześnie prowadził wojny, tworzył zależne państwa i próbował osłabić Wielką Brytanię blokadą kontynentalną."
  },
  {
    "id": "R06_NAP_09",
    "section": "Epoka Napoleona Bonapartego",
    "type": "single_choice",
    "prompt": "Na czym polegała blokada kontynentalna wprowadzona przez Napoleona w 1806 roku?",
    "options": [
      "na zakazie handlu z Wielką Brytanią",
      "na zamknięciu portów Francji dla wszystkich statków",
      "na zakazie handlu z Rosją",
      "na pobieraniu ceł tylko od towarów brytyjskich we Francji",
      "na blokadzie lądowej Austrii",
      "na zamknięciu granic Związku Reńskiego"
    ],
    "answer": 0,
    "explanation": "Francja, jej sojusznicy i państwa pokonane przez Napoleona nie mogły handlować z Wielką Brytanią. Cesarz chciał w ten sposób uderzyć w brytyjską gospodarkę."
  },
  {
    "id": "R06_UPA_01",
    "section": "Upadek Napoleona",
    "type": "single_choice",
    "prompt": "Co było jedną z bezpośrednich przyczyn wyprawy Napoleona na Rosję w 1812 roku?",
    "options": [
      "łamanie przez Rosję blokady kontynentalnej",
      "atak Rosji na Paryż",
      "spór o tron francuski",
      "powstanie w Wielkopolsce",
      "egzekucja Ludwika XVI",
      "utworzenie Legionów Polskich"
    ],
    "answer": 0,
    "explanation": "Rosja łamała blokadę kontynentalną, ponieważ zakaz handlu z Wielką Brytanią przynosił straty. Napoleon chciał zmusić cara do przestrzegania blokady."
  },
  {
    "id": "R06_UPA_02",
    "section": "Upadek Napoleona",
    "type": "multi_select",
    "prompt": "Zaznacz narodowości żołnierzy służących w Wielkiej Armii podczas wyprawy na Rosję.",
    "options": [
      "Francuzi",
      "Polacy",
      "Włosi",
      "Austriacy",
      "Niemcy",
      "Brytyjczycy"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "W Wielkiej Armii służyli nie tylko Francuzi, lecz także między innymi Polacy, Włosi, Austriacy i Niemcy."
  },
  {
    "id": "R06_UPA_03",
    "section": "Upadek Napoleona",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia wyprawy na Rosję w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Wkroczenie Wielkiej Armii do Moskwy",
      "Zdobycie Smoleńska",
      "Bitwa pod Borodino",
      "Wkroczenie Wielkiej Armii na terytorium Rosji",
      "Rozpoczęcie odwrotu z Moskwy"
    ],
    "answer": [
      "Wkroczenie Wielkiej Armii na terytorium Rosji",
      "Zdobycie Smoleńska",
      "Bitwa pod Borodino",
      "Wkroczenie Wielkiej Armii do Moskwy",
      "Rozpoczęcie odwrotu z Moskwy"
    ],
    "explanation": "Wielka Armia weszła do Rosji w czerwcu 1812 roku, zdobyła Smoleńsk w połowie sierpnia, walczyła pod Borodino we wrześniu, potem wkroczyła do Moskwy i rozpoczęła odwrót."
  },
  {
    "id": "R06_UPA_04",
    "section": "Upadek Napoleona",
    "type": "true_false",
    "prompt": "W bitwie pod Borodino Napoleon całkowicie rozbił armię rosyjską.",
    "options": null,
    "answer": false,
    "explanation": "Francuzom nie udało się ostatecznie rozbić armii rosyjskiej. Odwrót Rosjan otworzył jednak Napoleonowi drogę do Moskwy."
  },
  {
    "id": "R06_UPA_05",
    "section": "Upadek Napoleona",
    "type": "scenario",
    "prompt": "W połowie września 1812 roku armia Napoleona wchodzi do Moskwy. Nie ma tam cara ani większości mieszkańców, zapasy żywności wywieziono, a miasto płonie. Jaką decyzję podejmuje Napoleon wobec zbliżającej się zimy?",
    "options": [
      "zarządza odwrót",
      "ogłasza Rosję częścią Francji",
      "rozwiązuje Wielką Armię",
      "zawiera pokój w Tylży",
      "wysyła wojska do Hiszpanii",
      "przenosi stolicę Francji do Moskwy"
    ],
    "answer": 0,
    "explanation": "Brak zapasów i nadchodząca surowa zima postawiły Wielką Armię w pułapce. Napoleon zarządził odwrót z Moskwy."
  },
  {
    "id": "R06_UPA_06",
    "section": "Upadek Napoleona",
    "type": "sort",
    "prompt": "Przyporządkuj czynniki osłabiające Wielką Armię podczas odwrotu do odpowiedniej kategorii.",
    "options": null,
    "items": [
      "mróz",
      "głód",
      "choroby",
      "taktyka spalonej ziemi",
      "wojna podjazdowa"
    ],
    "categories": [
      "warunki odwrotu",
      "działania Rosjan"
    ],
    "answer": {
      "warunki odwrotu": [
        "mróz",
        "głód",
        "choroby"
      ],
      "działania Rosjan": [
        "taktyka spalonej ziemi",
        "wojna podjazdowa"
      ]
    },
    "explanation": "Żołnierzy wyniszczały mróz, głód i choroby, a Rosjanie dodatkowo stosowali taktykę spalonej ziemi i wojnę podjazdową.",
    "image": "r06_odwrot_wielkiej_armii.jpg"
  },
  {
    "id": "R06_UPA_07",
    "section": "Upadek Napoleona",
    "type": "fill_in",
    "prompt": "Z wyprawy na Rosję wróciło niecałe __________ żołnierzy Napoleona, a w 1813 roku cesarz poniósł decydującą klęskę pod __________.",
    "options": null,
    "answer": [
      "30 tysięcy",
      "Lipskiem"
    ],
    "altAnswers": [
      [
        "30 tysięcy",
        "30 tys.",
        "30000",
        "30 000"
      ],
      [
        "Lipskiem",
        "Lipsk"
      ]
    ],
    "explanation": "Z ponad 400-tysięcznej Wielkiej Armii wróciło z Rosji niecałe 30 tysięcy żołnierzy. Rok później Napoleon przegrał pod Lipskiem tak zwaną bitwę narodów."
  },
  {
    "id": "R06_UPA_08",
    "section": "Upadek Napoleona",
    "type": "match",
    "prompt": "Połącz wydarzenie z rokiem.",
    "options": null,
    "left": [
      "wyprawa na Rosję",
      "bitwa pod Lipskiem",
      "zesłanie na Elbę",
      "bitwa pod Waterloo"
    ],
    "right": [
      "1812",
      "1813",
      "1814",
      "1815"
    ],
    "answer": {
      "wyprawa na Rosję": "1812",
      "bitwa pod Lipskiem": "1813",
      "zesłanie na Elbę": "1814",
      "bitwa pod Waterloo": "1815"
    },
    "explanation": "Wyprawa na Rosję rozpoczęła się w 1812 roku, bitwa pod Lipskiem odbyła się w 1813 roku, po abdykacji w 1814 roku Napoleon trafił na Elbę, a w 1815 roku przegrał pod Waterloo."
  },
  {
    "id": "R06_UPA_09",
    "section": "Upadek Napoleona",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo, które nie należało do koalicji utworzonej po klęsce Napoleona w Rosji: Rosja, Prusy, Austria, Wielka Brytania, Hiszpania.",
    "options": null,
    "answer": "Hiszpania",
    "explanation": "Po klęsce wyprawy rosyjskiej do nowej koalicji przystąpiły Rosja, Prusy, Austria, Wielka Brytania i Szwecja. Spośród podanych państw właściwą odpowiedzią jest Hiszpania."
  },
  {
    "id": "R06_LEG_01",
    "section": "Legiony Polskie we Włoszech",
    "type": "single_choice",
    "prompt": "W którym roku utworzono Legiony Polskie we Włoszech?",
    "options": [
      "1797",
      "1795",
      "1799",
      "1801",
      "1804",
      "1807"
    ],
    "answer": 0,
    "explanation": "Rząd francuski zgodził się na utworzenie Legionów Polskich w 1797 roku. Zaczęto je formować w Republice Lombardzkiej w północnych Włoszech."
  },
  {
    "id": "R06_LEG_02",
    "section": "Legiony Polskie we Włoszech",
    "type": "riddle",
    "prompt": "Generał, który stanął na czele Legionów Polskich we Włoszech, to...",
    "options": null,
    "answer": "Jan Henryk Dąbrowski",
    "altAnswers": [
      "Jan Henryk Dąbrowski",
      "Dąbrowski",
      "gen. Jan Henryk Dąbrowski"
    ],
    "explanation": "Dowódcą Legionów został generał Jan Henryk Dąbrowski, jeden z najważniejszych polskich dowódców tego okresu."
  },
  {
    "id": "R06_LEG_03",
    "section": "Legiony Polskie we Włoszech",
    "type": "multi_select",
    "prompt": "Zaznacz grupy, z których rekrutowali się pierwsi ochotnicy do Legionów Polskich.",
    "options": [
      "polscy emigranci",
      "Polacy wcieleni do armii austriackiej i wzięci do niewoli",
      "Polacy, którzy przeszli z armii austriackiej na stronę Francji",
      "żołnierze brytyjscy",
      "rosyjscy urzędnicy",
      "francuscy marynarze"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Do Legionów wstępowali polscy emigranci oraz Polacy służący wcześniej w armii austriackiej, którzy trafili do niewoli albo przeszli na stronę Francji."
  },
  {
    "id": "R06_LEG_04",
    "section": "Legiony Polskie we Włoszech",
    "type": "match",
    "prompt": "Połącz cechę Legionów z jej znaczeniem.",
    "options": null,
    "left": [
      "trójkolorowa kokarda",
      "polskie stopnie wojskowe",
      "nauka czytania i pisania",
      "zniesienie kary chłosty"
    ],
    "right": [
      "przywiązanie do idei rewolucji francuskiej",
      "podtrzymywanie polskiej tradycji wojskowej",
      "dokształcanie żołnierzy",
      "poszanowanie godności żołnierzy"
    ],
    "answer": {
      "trójkolorowa kokarda": "przywiązanie do idei rewolucji francuskiej",
      "polskie stopnie wojskowe": "podtrzymywanie polskiej tradycji wojskowej",
      "nauka czytania i pisania": "dokształcanie żołnierzy",
      "zniesienie kary chłosty": "poszanowanie godności żołnierzy"
    },
    "explanation": "Legiony łączyły polskie tradycje wojskowe z ideałami rewolucyjnymi. Żołnierzy uczono, dbano o ich godność i nagradzano awansem za odwagę.",
    "image": "r06_legiony_we_wloszech.jpg"
  },
  {
    "id": "R06_LEG_05",
    "section": "Legiony Polskie we Włoszech",
    "type": "true_false",
    "prompt": "W Legionach Polskich stopień oficerski mógł otrzymać także żołnierz spoza stanu szlacheckiego.",
    "options": null,
    "answer": true,
    "explanation": "Awanse nie były zastrzeżone wyłącznie dla szlachty. Możliwość uzyskania stopnia oficerskiego mieli także legioniści wywodzący się z innych stanów."
  },
  {
    "id": "R06_LEG_06",
    "section": "Legiony Polskie we Włoszech",
    "type": "scenario",
    "prompt": "Jest rok 1797. Józef Wybicki, pod wrażeniem atmosfery w Legionach, pisze tekst pieśni, która później będzie nazywana Mazurkiem Dąbrowskiego. Jaki był jej pierwotny tytuł?",
    "options": [
      "Pieśń Legionów Polskich we Włoszech",
      "Marsylianka",
      "Bogurodzica",
      "Rota",
      "Warszawianka",
      "Hymn do wolności"
    ],
    "answer": 0,
    "explanation": "Józef Wybicki napisał w 1797 roku Pieśń Legionów Polskich we Włoszech. Utwór zdobył popularność wśród legionistów i Polaków pod zaborami.",
    "image": "r06_sztandar_legionow.jpg"
  },
  {
    "id": "R06_LEG_07",
    "section": "Legiony Polskie we Włoszech",
    "type": "fill_in",
    "prompt": "Legioniści walczyli we Włoszech w latach __________, a po pokoju z państwami zaborczymi część oddziałów skierowano na wyspę __________.",
    "options": null,
    "answer": [
      "1797-1801",
      "San Domingo"
    ],
    "altAnswers": [
      [
        "1797-1801",
        "1797–1801",
        "od 1797 do 1801"
      ],
      [
        "San Domingo",
        "Santo Domingo",
        "Haiti"
      ]
    ],
    "explanation": "Legiony walczyły we Włoszech w latach 1797-1801. Po zawarciu pokoju część polskich oddziałów wysłano na San Domingo, aby tłumić antyfrancuskie powstanie."
  },
  {
    "id": "R06_LEG_08",
    "section": "Legiony Polskie we Włoszech",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie należał do programu dokształcania szeregowych legionistów: czytanie, pisanie, historia Polski, kara chłosty.",
    "options": null,
    "answer": "kara chłosty",
    "explanation": "Szeregowi legioniści uczyli się czytania, pisania i historii Polski. Kara chłosty została w Legionach zniesiona."
  },
  {
    "id": "R06_LEG_09",
    "section": "Legiony Polskie we Włoszech",
    "type": "sort",
    "prompt": "Przyporządkuj informacje do walk we Włoszech albo do wyprawy na San Domingo.",
    "options": null,
    "items": [
      "lata 1797-1801",
      "walki u boku armii francuskiej",
      "spadek liczby legionistów do około 800",
      "tłumienie antyfrancuskiego powstania",
      "choroby tropikalne",
      "powrót do Europy zaledwie kilkuset legionistów"
    ],
    "categories": [
      "Włochy",
      "San Domingo"
    ],
    "answer": {
      "Włochy": [
        "lata 1797-1801",
        "walki u boku armii francuskiej",
        "spadek liczby legionistów do około 800"
      ],
      "San Domingo": [
        "tłumienie antyfrancuskiego powstania",
        "choroby tropikalne",
        "powrót do Europy zaledwie kilkuset legionistów"
      ]
    },
    "explanation": "We Włoszech legioniści walczyli w latach 1797-1801, ponosząc duże straty. Część oddziałów wysłano potem na San Domingo, gdzie walczono z powstaniem i zmagano się z chorobami tropikalnymi."
  },
  {
    "id": "R06_KSI_01",
    "section": "Księstwo Warszawskie",
    "type": "single_choice",
    "prompt": "Na mocy jakiego porozumienia w 1807 roku utworzono Księstwo Warszawskie?",
    "options": [
      "pokoju w Tylży",
      "traktatu z Austerlitz",
      "konstytucji francuskiej",
      "dekretu o podejrzanych",
      "pokoju w Wiedniu",
      "aktu abdykacji Napoleona"
    ],
    "answer": 0,
    "explanation": "Jednym z postanowień pokoju zawartego przez Napoleona z Rosją i Prusami w Tylży w 1807 roku było utworzenie Księstwa Warszawskiego.",
    "image": "r06_tylza_spotkanie.jpg"
  },
  {
    "id": "R06_KSI_02",
    "section": "Księstwo Warszawskie",
    "type": "multi_select",
    "prompt": "Zaznacz ziemie należące do Księstwa Warszawskiego od 1807 roku.",
    "options": [
      "Wielkopolska",
      "część Mazowsza",
      "Suwalszczyzna",
      "Śląsk",
      "Pomorze Zachodnie",
      "Litwa"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Pierwotne Księstwo obejmowało ziemie zabrane wcześniej przez Prusy: Wielkopolskę, część Mazowsza i Suwalszczyznę. Gdańsk został wolnym miastem pod kontrolą Francji."
  },
  {
    "id": "R06_KSI_03",
    "section": "Księstwo Warszawskie",
    "type": "fill_in",
    "prompt": "Księciem warszawskim został __________ z dynastii __________, będący jednocześnie władcą __________.",
    "options": null,
    "answer": [
      "Fryderyk August",
      "Wettinów",
      "Saksonii"
    ],
    "altAnswers": [
      [
        "Fryderyk August"
      ],
      [
        "Wettinów",
        "Wettinowie"
      ],
      [
        "Saksonii",
        "Saksonia"
      ]
    ],
    "explanation": "Fryderyk August z dynastii Wettinów był władcą Saksonii. Księstwo Warszawskie i Saksonia tworzyły unię personalną."
  },
  {
    "id": "R06_KSI_04",
    "section": "Księstwo Warszawskie",
    "type": "match",
    "prompt": "Połącz rodzaj władzy w Księstwie Warszawskim z organem, który ją sprawował.",
    "options": null,
    "left": [
      "władza wykonawcza",
      "władza ustawodawcza",
      "władza sądownicza"
    ],
    "right": [
      "książę wraz z Radą Ministrów",
      "dwuizbowy sejm",
      "niezależne sądy"
    ],
    "answer": {
      "władza wykonawcza": "książę wraz z Radą Ministrów",
      "władza ustawodawcza": "dwuizbowy sejm",
      "władza sądownicza": "niezależne sądy"
    },
    "explanation": "Konstytucja Księstwa wprowadzała trójpodział władzy: wykonawczą sprawował książę z rządem, ustawodawczą sejm, a sądowniczą niezależne sądy."
  },
  {
    "id": "R06_KSI_05",
    "section": "Księstwo Warszawskie",
    "type": "true_false",
    "prompt": "Zniesienie poddaństwa w Księstwie Warszawskim dawało chłopom wolność osobistą i możliwość swobodnego wyboru miejsca zamieszkania.",
    "options": null,
    "answer": true,
    "explanation": "Konstytucja i późniejszy Kodeks Napoleona zniosły poddaństwo. Chłopi uzyskali wolność osobistą, w tym możliwość wyboru miejsca zamieszkania."
  },
  {
    "id": "R06_KSI_06",
    "section": "Księstwo Warszawskie",
    "type": "scenario",
    "prompt": "Jest rok 1808. Polscy kawalerzyści atakują wąwóz w Hiszpanii i po zwycięstwie otwierają Napoleonowi drogę do Madrytu. Jak nazywano tę formację?",
    "options": [
      "szwoleżerowie",
      "grenadierzy",
      "jakobini",
      "artylerzyści",
      "dyrektorzy",
      "legioniści rzymscy"
    ],
    "answer": 0,
    "explanation": "Szarża polskich szwoleżerów pod Somosierrą w 1808 roku otworzyła Napoleonowi drogę do Madrytu.",
    "image": "r06_szarza_somosierra.jpg"
  },
  {
    "id": "R06_KSI_07",
    "section": "Księstwo Warszawskie",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z Księstwem Warszawskim w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Bitwa pod Raszynem",
      "Likwidacja Księstwa Warszawskiego",
      "Utworzenie Księstwa Warszawskiego",
      "Wyprawa Wielkiej Armii na Rosję",
      "Szarża pod Somosierrą",
      "Śmierć Józefa Poniatowskiego pod Lipskiem"
    ],
    "answer": [
      "Utworzenie Księstwa Warszawskiego",
      "Szarża pod Somosierrą",
      "Bitwa pod Raszynem",
      "Wyprawa Wielkiej Armii na Rosję",
      "Śmierć Józefa Poniatowskiego pod Lipskiem",
      "Likwidacja Księstwa Warszawskiego"
    ],
    "explanation": "Księstwo utworzono w 1807 roku, Somosierra miała miejsce w 1808, Raszyn w 1809, wyprawa na Rosję w 1812, Poniatowski zginął w 1813, a Księstwo zlikwidowano w 1815 roku."
  },
  {
    "id": "R06_KSI_08",
    "section": "Księstwo Warszawskie",
    "type": "sort",
    "prompt": "Przyporządkuj reformy i uprawnienia do grup, których przede wszystkim dotyczyły.",
    "options": null,
    "items": [
      "wolność osobista",
      "swobodny wybór miejsca zamieszkania",
      "dostęp do urzędów państwowych",
      "prawo nabywania ziemi",
      "prawo wyborcze dla bogatych przedstawicieli tej grupy"
    ],
    "categories": [
      "chłopi",
      "mieszczanie"
    ],
    "answer": {
      "chłopi": [
        "wolność osobista",
        "swobodny wybór miejsca zamieszkania"
      ],
      "mieszczanie": [
        "dostęp do urzędów państwowych",
        "prawo nabywania ziemi",
        "prawo wyborcze dla bogatych przedstawicieli tej grupy"
      ]
    },
    "explanation": "Chłopi uzyskali wolność osobistą i możliwość zmiany miejsca zamieszkania. Mieszczanie zyskali dostęp do urzędów i ziemi, a bogaci mieszczanie także prawo wyborcze do sejmu."
  },
  {
    "id": "R06_KSI_09",
    "section": "Księstwo Warszawskie",
    "type": "riddle",
    "prompt": "Książę, który był głównym dowódcą armii Księstwa Warszawskiego i zginął w 1813 roku pod Lipskiem, to...",
    "options": null,
    "answer": "Józef Poniatowski",
    "altAnswers": [
      "Józef Poniatowski",
      "książę Józef Poniatowski",
      "Poniatowski"
    ],
    "explanation": "Józef Poniatowski, bratanek ostatniego króla Polski, dowodził armią Księstwa i pozostał wierny Napoleonowi aż do śmierci pod Lipskiem w 1813 roku.",
    "image": "r06_poniatowski_lipsk.jpg"
  },
  {
    "id": "R06_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Po ilu latach przerwy Ludwik XVI zwołał w 1789 roku Stany Generalne?",
    "options": [
      "175 latach",
      "100 latach",
      "125 latach",
      "150 latach",
      "200 latach",
      "225 latach"
    ],
    "answer": 0,
    "explanation": "Posiedzenie Stanów Generalnych z 1789 roku było pierwszym od 175 lat."
  },
  {
    "id": "R06_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz wszystkie naturalne i nieprzedawnione prawa człowieka ujęte w artykule 2 Deklaracji praw człowieka i obywatela.",
    "options": [
      "wolność",
      "własność",
      "bezpieczeństwo",
      "opór przeciw uciskowi",
      "prawo do dziedzicznego urzędu",
      "zwolnienie z podatków"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Artykuł 2 wskazywał wolność, własność, bezpieczeństwo i opór przeciw uciskowi jako naturalne i nieprzedawnione prawa człowieka."
  },
  {
    "id": "R06_HARD_03",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Francuski chirurg, od którego nazwiska pochodzi nazwa urządzenia do ścinania skazańców, to...",
    "options": null,
    "answer": "Joseph Guillotin",
    "altAnswers": [
      "Joseph Guillotin",
      "Guillotin"
    ],
    "explanation": "Gilotyna była urządzeniem skonstruowanym przez francuskiego chirurga Josepha Guillotina."
  },
  {
    "id": "R06_HARD_04",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile osób zginęło w przybliżeniu w czerwcu i lipcu 1794 roku, w okresie największego nasilenia Wielkiego Terroru?",
    "options": [
      "około 14 tysięcy",
      "około 4 tysiące",
      "około 40 tysięcy",
      "około 140 tysięcy",
      "około 800",
      "około 30 tysięcy"
    ],
    "answer": 0,
    "explanation": "W czerwcu i lipcu 1794 roku zapadło najwięcej wyroków śmierci; zginęło wówczas około 14 tysięcy osób."
  },
  {
    "id": "R06_HARD_05",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W rewolucyjnym kalendarzu zamiast siedmiodniowych tygodni wprowadzono __________, a ich ostatni dzień był __________.",
    "options": null,
    "answer": [
      "dziesięciodniowe dekady",
      "wolny od pracy"
    ],
    "altAnswers": [
      [
        "dziesięciodniowe dekady",
        "dekady dziesięciodniowe",
        "10-dniowe dekady"
      ],
      [
        "wolny od pracy",
        "dniem wolnym od pracy"
      ]
    ],
    "explanation": "Rewolucjoniści zastąpili siedmiodniowe tygodnie dziesięciodniowymi dekadami. Ostatni dzień każdej dekady był wolny od pracy."
  },
  {
    "id": "R06_HARD_06",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz pojęcie z jego skutkiem lub znaczeniem w epoce Napoleona.",
    "options": null,
    "left": [
      "Austerlitz",
      "Franciszek II",
      "Związek Reński",
      "Frydland"
    ],
    "right": [
      "zwycięstwo nad wojskami austriackimi i rosyjskimi",
      "zrzeczenie się tytułu cesarza rzymskiego",
      "zależny od Francji związek państw niemieckich",
      "porażka Rosjan poprzedzająca pokój w Tylży"
    ],
    "answer": {
      "Austerlitz": "zwycięstwo nad wojskami austriackimi i rosyjskimi",
      "Franciszek II": "zrzeczenie się tytułu cesarza rzymskiego",
      "Związek Reński": "zależny od Francji związek państw niemieckich",
      "Frydland": "porażka Rosjan poprzedzająca pokój w Tylży"
    },
    "explanation": "Zwycięstwo pod Austerlitz zmieniło układ sił w Europie, przyczyniło się do końca Rzeszy Niemieckiej i powstania Związku Reńskiego. Po klęsce pod Frydlandem Rosja podpisała pokój w Tylży.",
    "image": "r06_bitwa_austerlitz.jpg"
  },
  {
    "id": "R06_HARD_07",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Kiedy rozegrała się bitwa pod Austerlitz?",
    "options": [
      "2 grudnia 1805 roku",
      "14 lipca 1789 roku",
      "9 listopada 1799 roku",
      "1 stycznia 1804 roku",
      "7 lipca 1807 roku",
      "18 czerwca 1815 roku"
    ],
    "answer": 0,
    "explanation": "Bitwa pod Austerlitz rozegrała się 2 grudnia 1805 roku i była nazywana bitwą trzech cesarzy."
  },
  {
    "id": "R06_HARD_08",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Wielka Armia w 1812 roku liczyła ponad __________ żołnierzy, a z wyprawy na Rosję wróciło niecałe __________.",
    "options": null,
    "answer": [
      "400 tysięcy",
      "30 tysięcy"
    ],
    "altAnswers": [
      [
        "400 tysięcy",
        "400 tys.",
        "400000",
        "400 000"
      ],
      [
        "30 tysięcy",
        "30 tys.",
        "30000",
        "30 000"
      ]
    ],
    "explanation": "Napoleon zgromadził ponad 400 tysięcy żołnierzy. Katastrofalny odwrót sprawił, że wróciło niecałe 30 tysięcy."
  },
  {
    "id": "R06_HARD_09",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz rozwiązania świadczące o demokratycznym i edukacyjnym charakterze Legionów Polskich.",
    "options": [
      "wybory na stanowiska dowódcze w gronie kadry oficerskiej",
      "możliwość awansu oficerskiego dla osób spoza szlachty",
      "nauka czytania i pisania",
      "zniesienie kary chłosty",
      "dziedziczenie stopni oficerskich",
      "zakaz nauki historii Polski"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W Legionach wybierano część dowódców, dopuszczano awans poza stanem szlacheckim, prowadzono naukę i zniesiono chłostę, podkreślając godność żołnierza."
  },
  {
    "id": "R06_HARD_10",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jakie pokrewieństwo łączyło Fryderyka Augusta, księcia warszawskiego, z Augustem III?",
    "options": [
      "był jego wnukiem",
      "był jego synem",
      "był jego bratem",
      "był jego ojcem",
      "był jego kuzynem",
      "nie byli spokrewnieni"
    ],
    "answer": 0,
    "explanation": "Fryderyk August z dynastii Wettinów, władca Saksonii i książę warszawski, był wnukiem króla Augusta III."
  },
  {
    "id": "R06_HARD_11",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W końcowej fazie bitwy pod Lipskiem w 1813 roku polski dowódca osłania odwrót armii. Po przedwczesnym wysadzeniu mostu na Elsterze próbuje przeprawić się konno przez rzekę i ginie. Kto to był?",
    "options": [
      "Józef Poniatowski",
      "Jan Henryk Dąbrowski",
      "Józef Wybicki",
      "Fryderyk August",
      "Stanisław Małachowski",
      "Karol Kniaziewicz"
    ],
    "answer": 0,
    "explanation": "Józef Poniatowski zginął pod Lipskiem w 1813 roku, próbując przeprawić się przez Elsterę po wysadzeniu mostu. Był jedynym cudzoziemcem mianowanym przez Napoleona marszałkiem Francji.",
    "image": "r06_poniatowski_lipsk.jpg"
  },
  {
    "id": "R06_HARD_12",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z końca życia Napoleona w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Umieszczenie sarkofagu Napoleona w kościele Inwalidów",
      "Śmierć Napoleona na Wyspie Świętej Heleny",
      "Zesłanie Napoleona na Wyspę Świętej Heleny",
      "Klęska pod Waterloo",
      "Zesłanie Napoleona na Elbę"
    ],
    "answer": [
      "Zesłanie Napoleona na Elbę",
      "Klęska pod Waterloo",
      "Zesłanie Napoleona na Wyspę Świętej Heleny",
      "Śmierć Napoleona na Wyspie Świętej Heleny",
      "Umieszczenie sarkofagu Napoleona w kościele Inwalidów"
    ],
    "explanation": "Po abdykacji Napoleon trafił na Elbę, wrócił do Francji i w 1815 roku przegrał pod Waterloo. Następnie został zesłany na Wyspę Świętej Heleny, gdzie zmarł w 1821 roku; jego sarkofag umieszczono w kościele Inwalidów w 1840 roku.",
    "image": "r06_napoleon_na_swietej_helenie.jpg"
  }
];

const KID_PROMPTS = {};

const chapter = {
  "id": "r06",
  "number": 6,
  "title": "Rewolucja francuska i okres napoleoński",
  "icon": "📜",
  "sectionOrder": [
    "Rewolucja francuska",
    "Republika Francuska",
    "Epoka Napoleona Bonapartego",
    "Upadek Napoleona",
    "Legiony Polskie we Włoszech",
    "Księstwo Warszawskie"
  ],
  "sectionIcons": {
    "Rewolucja francuska": "🔥",
    "Republika Francuska": "🗳",
    "Epoka Napoleona Bonapartego": "👑",
    "Upadek Napoleona": "🥶",
    "Legiony Polskie we Włoszech": "🦅",
    "Księstwo Warszawskie": "🏰"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
