// Skróty sekcji (do identyfikatorów ćwiczeń):
//   TKAN = Tkanki roślinne
//   MGPO = Mchy, glony i porosty
//   PAPR = Paprotniki
//   NAGO = Rośliny nagonasienne
//   WEGE = Korzenie, łodygi i liście
//   OKRY = Rośliny okrytonasienne
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R03_TKAN_01",
    "section": "Tkanki roślinne",
    "type": "single_choice",
    "prompt": "Która grupa tkanek roślinnych ma komórki zdolne do regularnych podziałów?",
    "options": [
      "Tkanki stałe",
      "Tkanki twórcze",
      "Tkanki okrywające",
      "Tkanki wzmacniające",
      "Tkanki przewodzące",
      "Tkanki miękiszowe"
    ],
    "answer": 1,
    "explanation": "Komórki tkanek twórczych szybko i regularnie się dzielą, umożliwiając roślinie wzrost."
  },
  {
    "id": "R03_TKAN_02",
    "section": "Tkanki roślinne",
    "type": "match",
    "prompt": "Połącz tkankę lub jej odmianę z główną funkcją.",
    "options": null,
    "answer": {
      "Miękisz asymilacyjny": "Przeprowadzanie fotosyntezy",
      "Drewno": "Transport wody i soli mineralnych",
      "Łyko": "Transport produktów fotosyntezy",
      "Tkanka wzmacniająca": "Nadawanie sztywności i elastyczności"
    },
    "explanation": "Miękisz asymilacyjny prowadzi fotosyntezę, drewno i łyko przewodzą różne substancje, a tkanka wzmacniająca usztywnia roślinę.",
    "image": "r03_tkanki_na_przekroju.jpg",
    "left": [
      "Miękisz asymilacyjny",
      "Drewno",
      "Łyko",
      "Tkanka wzmacniająca"
    ],
    "right": [
      "Nadawanie sztywności i elastyczności",
      "Transport produktów fotosyntezy",
      "Transport wody i soli mineralnych",
      "Przeprowadzanie fotosyntezy"
    ]
  },
  {
    "id": "R03_TKAN_03",
    "section": "Tkanki roślinne",
    "type": "multi_select",
    "prompt": "Wybierz cechy skórki roślinnej.",
    "options": [
      "Ściśle przylegające komórki",
      "Jedna warstwa komórek",
      "Pokrycie kutykulą",
      "Zbudowanie wyłącznie z martwych komórek",
      "Wytwarzanie drewna wtórnego"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Skórkę tworzy pojedyncza warstwa ściśle przylegających żywych komórek, zwykle pokryta warstwą woskową."
  },
  {
    "id": "R03_TKAN_04",
    "section": "Tkanki roślinne",
    "type": "true_false",
    "prompt": "Miazga umożliwia łodygom i korzeniom przyrost na grubość.",
    "options": null,
    "answer": true,
    "explanation": "Miazga należy do tkanek twórczych i uczestniczy w przyroście rośliny na grubość."
  },
  {
    "id": "R03_TKAN_05",
    "section": "Tkanki roślinne",
    "type": "fill_in",
    "prompt": "Wodę i sole mineralne przewodzi __________, a substancje pokarmowe wytwarzane w liściach przewodzi __________.",
    "options": null,
    "answer": [
      "drewno",
      "łyko"
    ],
    "explanation": "Drewno transportuje wodę z solami mineralnymi od korzenia, a łyko rozprowadza produkty fotosyntezy.",
    "altAnswers": [
      [
        "drewno"
      ],
      [
        "łyko"
      ]
    ]
  },
  {
    "id": "R03_TKAN_06",
    "section": "Tkanki roślinne",
    "type": "sort",
    "prompt": "Podziel przykłady na tkanki twórcze i stałe.",
    "options": null,
    "answer": {
      "Tkanki twórcze": [
        "stożek wzrostu korzenia",
        "miazga",
        "stożek wzrostu łodygi"
      ],
      "Tkanki stałe": [
        "skórka",
        "miękisz spichrzowy",
        "twardzica"
      ]
    },
    "explanation": "Stożki wzrostu i miazga mają komórki dzielące się; skórka, miękisz i twardzica są tkankami stałymi.",
    "image": "r03_tkanki_na_przekroju.jpg",
    "items": [
      "stożek wzrostu korzenia",
      "stożek wzrostu łodygi",
      "miękisz spichrzowy",
      "miazga",
      "skórka",
      "twardzica"
    ],
    "categories": [
      "Tkanki twórcze",
      "Tkanki stałe"
    ]
  },
  {
    "id": "R03_TKAN_07",
    "section": "Tkanki roślinne",
    "type": "riddle",
    "prompt": "Jak nazywa się woskowa warstwa na powierzchni skórki, która ogranicza utratę wody?",
    "options": null,
    "answer": "kutykula",
    "explanation": "Kutykula pokrywa zewnętrzne ściany komórek skórki i chroni roślinę przed nadmiernym parowaniem.",
    "altAnswers": [
      "kutykula",
      "kutykulą"
    ]
  },
  {
    "id": "R03_TKAN_08",
    "section": "Tkanki roślinne",
    "type": "odd_one_out",
    "prompt": "Wskaż jedyną tkankę należącą do grupy twórczych: tkanka okrywająca, tkanka miękiszowa, miazga, tkanka wzmacniająca.",
    "options": null,
    "answer": "miazga",
    "explanation": "Miazga jest tkanką twórczą; pozostałe elementy listy należą do tkanek stałych."
  },
  {
    "id": "R03_TKAN_09",
    "section": "Tkanki roślinne",
    "type": "scenario",
    "prompt": "Ogrodnik uszkodził stożek wzrostu na wierzchołku pędu głównego. Który skutek jest bezpośrednio związany z funkcją tej tkanki?",
    "options": [
      "Zahamowanie wydłużania uszkodzonego wierzchołka",
      "Przyspieszenie wzrostu na długość tego wierzchołka",
      "Przestawienie wierzchołka na przyrost na grubość",
      "Zwiększenie transportu przez łyko w tym wierzchołku"
    ],
    "answer": 0,
    "explanation": "Stożek wzrostu zawiera tkankę twórczą odpowiedzialną za wzrost pędu na długość.",
    "image": "r03_wierzcholek_pedu.jpg"
  },
  {
    "id": "R03_TKAN_10",
    "section": "Tkanki roślinne",
    "type": "sequence",
    "prompt": "Ułóż poziomy organizacji rośliny od najmniejszego do największego.",
    "options": null,
    "answer": [
      "komórka",
      "tkanka",
      "organ",
      "system organów",
      "organizm"
    ],
    "explanation": "Komórki tworzą tkanki, tkanki budują organy, organy systemy, a współpraca systemów tworzy organizm.",
    "items": [
      "organizm",
      "system organów",
      "organ",
      "komórka",
      "tkanka"
    ]
  },
  {
    "id": "R03_MGPO_01",
    "section": "Mchy, glony i porosty",
    "type": "single_choice",
    "prompt": "Co rozwija się na szczycie bezlistnej łodyżki pokolenia bezpłciowego mchu?",
    "options": [
      "Zarodnia",
      "Rodnia",
      "Plemnia",
      "Zarodnik",
      "Chwytnik",
      "Przedrośle"
    ],
    "answer": 0,
    "explanation": "Po zapłodnieniu u mchów pojawia się bezlistna łodyżka zakończona zarodnią.",
    "image": "r03_mch_plonnik.jpg"
  },
  {
    "id": "R03_MGPO_02",
    "section": "Mchy, glony i porosty",
    "type": "multi_select",
    "prompt": "Które funkcje pełnią mchy i jakie mają znaczenie w przyrodzie?",
    "options": [
      "Ograniczanie erozji gleby",
      "Gromadzenie wody w darniach",
      "Udział w tworzeniu pokładów torfu",
      "Produkcja szyszek",
      "Wytwarzanie owoców"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Mchy chronią glebę, zatrzymują wodę i mogą uczestniczyć w powstawaniu torfu."
  },
  {
    "id": "R03_MGPO_03",
    "section": "Mchy, glony i porosty",
    "type": "fill_in",
    "prompt": "Plemniki mchów mogą dotrzeć do komórki jajowej dzięki obecności __________.",
    "options": null,
    "answer": [
      "wody"
    ],
    "explanation": "Woda jest niezbędna do przenoszenia plemników podczas zapłodnienia u mchów.",
    "altAnswers": [
      [
        "wody",
        "woda"
      ]
    ]
  },
  {
    "id": "R03_MGPO_04",
    "section": "Mchy, glony i porosty",
    "type": "single_choice",
    "prompt": "Jak nazywa się ciało glonu wielokomórkowego bez podziału na typowe korzenie, łodygi i liście?",
    "options": [
      "Plecha",
      "Kłącze",
      "Korona",
      "Łodyżka",
      "Szyszka",
      "Nasiono"
    ],
    "answer": 0,
    "explanation": "Wielokomórkowe glony mają plechę, której nie różnicuje się na typowe organy roślin.",
    "image": "r03_morszczyn.jpg"
  },
  {
    "id": "R03_MGPO_05",
    "section": "Mchy, glony i porosty",
    "type": "match",
    "prompt": "Połącz pojęcie z właściwym opisem.",
    "options": null,
    "answer": {
      "Algologia": "Nauka badająca glony",
      "Lichenologia": "Nauka badająca porosty",
      "Plecha": "Ciało bez typowych organów roślinnych",
      "Bioindykator": "Organizm wskazujący stan zanieczyszczenia"
    },
    "explanation": "Algologia (fykologia) dotyczy glonów, lichenologia porostów, plecha jest niezróżnicowanym ciałem, a bioindykatory wskazują zanieczyszczenia.",
    "left": [
      "Algologia",
      "Lichenologia",
      "Plecha",
      "Bioindykator"
    ],
    "right": [
      "Organizm wskazujący stan zanieczyszczenia",
      "Ciało bez typowych organów roślinnych",
      "Nauka badająca porosty",
      "Nauka badająca glony"
    ]
  },
  {
    "id": "R03_MGPO_06",
    "section": "Mchy, glony i porosty",
    "type": "true_false",
    "prompt": "Wszystkie glony są organizmami wielokomórkowymi.",
    "options": null,
    "answer": false,
    "explanation": "Glony mogą być organizmami zarówno jednokomórkowymi, jak i wielokomórkowymi."
  },
  {
    "id": "R03_MGPO_07",
    "section": "Mchy, glony i porosty",
    "type": "sort",
    "prompt": "Przyporządkuj zadania składnikom porostu.",
    "options": null,
    "answer": {
      "Glon": [
        "przeprowadzanie fotosyntezy",
        "wytwarzanie substancji organicznych"
      ],
      "Grzyb": [
        "dostarczanie wody",
        "ochrona całego porostu"
      ]
    },
    "explanation": "W poroście komórki glonu wytwarzają substancje organiczne, a strzępki grzyba zapewniają ochronę i wodę.",
    "image": "r03_porosty_na_skalach.jpg",
    "items": [
      "przeprowadzanie fotosyntezy",
      "dostarczanie wody",
      "wytwarzanie substancji organicznych",
      "ochrona całego porostu"
    ],
    "categories": [
      "Glon",
      "Grzyb"
    ]
  },
  {
    "id": "R03_MGPO_08",
    "section": "Mchy, glony i porosty",
    "type": "odd_one_out",
    "prompt": "Wskaż określenie, które nie jest typem plechy porostu: krzaczkowata, listkowata, widlasto rozgałęziona, skorupiasta.",
    "options": null,
    "answer": "widlasto rozgałęziona",
    "explanation": "Porosty mogą mieć plechę krzaczkowatą, listkowatą lub skorupiastą; widlasto rozgałęzione mogą być łodygi widłaków."
  },
  {
    "id": "R03_MGPO_09",
    "section": "Mchy, glony i porosty",
    "type": "scenario",
    "prompt": "Na pniach drzew badacze obserwują organizmy bardzo wrażliwe na zanieczyszczenie powietrza. Wykorzystują je do oceny jakości środowiska. O jakich organizmach mowa?",
    "options": [
      "Porostach",
      "Mchach",
      "Paprociach",
      "Skrzypach"
    ],
    "answer": 0,
    "explanation": "Porosty są wrażliwe na zanieczyszczenie powietrza i służą jako bioindykatory.",
    "image": "r03_porosty_na_skalach.jpg"
  },
  {
    "id": "R03_MGPO_10",
    "section": "Mchy, glony i porosty",
    "type": "sequence",
    "prompt": "Ułóż etapy przemiany pokoleń mchu, zaczynając od pokolenia płciowego.",
    "options": null,
    "answer": [
      "zielona ulistniona łodyżka z organami płciowymi",
      "powstanie gamet",
      "zapłodnienie w obecności wody",
      "wzrost bezlistnej łodyżki z zarodnią",
      "uwolnienie zarodników"
    ],
    "explanation": "Ulistnione pokolenie płciowe wytwarza gamety; po zapłodnieniu wyrasta pokolenie bezpłciowe z zarodnią, uwalniające zarodniki.",
    "items": [
      "uwolnienie zarodników",
      "wzrost bezlistnej łodyżki z zarodnią",
      "zapłodnienie w obecności wody",
      "zielona ulistniona łodyżka z organami płciowymi",
      "powstanie gamet"
    ]
  },
  {
    "id": "R03_PAPR_01",
    "section": "Paprotniki",
    "type": "single_choice",
    "prompt": "Który zestaw obejmuje trzy grupy paprotników?",
    "options": [
      "Paprocie, skrzypy, widłaki",
      "Mchy, porosty, glony",
      "Sosny, jodły, świerki",
      "Buki, dęby, klony",
      "Glony, skrzypy, mchy",
      "Paprocie, sosny, mchy"
    ],
    "answer": 0,
    "explanation": "Paprotniki obejmują paprocie, skrzypy i widłaki."
  },
  {
    "id": "R03_PAPR_02",
    "section": "Paprotniki",
    "type": "true_false",
    "prompt": "Paprotniki wytwarzają nasiona zamknięte w owocach.",
    "options": null,
    "answer": false,
    "explanation": "Paprotniki nie wytwarzają kwiatów ani nasion; są roślinami zarodnikowymi."
  },
  {
    "id": "R03_PAPR_03",
    "section": "Paprotniki",
    "type": "single_choice",
    "prompt": "Który pęd skrzypu nosi na szczycie kłos zarodnionośny?",
    "options": [
      "Brązowy pęd wiosenny",
      "Zielony pęd letni",
      "Korzeń boczny",
      "Kłącze podziemne",
      "Pęd z owocami",
      "Pęd z igłami"
    ],
    "answer": 0,
    "explanation": "Brązowy pęd wiosenny skrzypu ma kłos zarodnionośny, a zielony pęd letni wytwarza substancje odżywcze.",
    "image": "r03_skrzyp_dwa_pedy.jpg"
  },
  {
    "id": "R03_PAPR_04",
    "section": "Paprotniki",
    "type": "multi_select",
    "prompt": "Wybierz cechy paproci.",
    "options": [
      "Młode liście są spiralnie zwinięte",
      "Zarodnie występują na spodniej stronie liści",
      "Często rosną w miejscach wilgotnych i zacienionych",
      "Tworzą szyszki z nasionami",
      "Wytwarzają owoce jagodowe"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Młode liście paproci przypominają pastorał, zarodnie są na spodzie liści, a typowe stanowiska są wilgotne i cieniste.",
    "image": "r03_paproc_spod_liscia.jpg"
  },
  {
    "id": "R03_PAPR_05",
    "section": "Paprotniki",
    "type": "fill_in",
    "prompt": "Zarodnik paproci kiełkuje, wytwarzając __________, w którym znajdują się plemnie i rodnie.",
    "options": null,
    "answer": [
      "przedrośle"
    ],
    "explanation": "Przedrośle jest pokoleniem płciowym paproci i zawiera plemnie oraz rodnie.",
    "altAnswers": [
      [
        "przedrośle",
        "przedrosle"
      ]
    ]
  },
  {
    "id": "R03_PAPR_06",
    "section": "Paprotniki",
    "type": "sort",
    "prompt": "Podziel paprocie na gatunki chronione i trujące.",
    "options": null,
    "answer": {
      "Gatunki chronione": [
        "długosz królewski",
        "pióropusznik strusi",
        "języcznik zwyczajny"
      ],
      "Gatunek trujący": [
        "orlica pospolita"
      ]
    },
    "explanation": "Długosz, pióropusznik i języcznik należą do paproci chronionych, a orlica pospolita jest trująca.",
    "items": [
      "długosz królewski",
      "języcznik zwyczajny",
      "pióropusznik strusi",
      "orlica pospolita"
    ],
    "categories": [
      "Gatunki chronione",
      "Gatunek trujący"
    ]
  },
  {
    "id": "R03_PAPR_07",
    "section": "Paprotniki",
    "type": "match",
    "prompt": "Połącz grupę paprotników z najbardziej charakterystyczną cechą.",
    "options": null,
    "answer": {
      "Skrzypy": "Ściany komórkowe wysycone krzemionką",
      "Widłaki": "Widlasto rozgałęzione płożące łodygi",
      "Paprocie": "Młode liście zwinięte spiralnie"
    },
    "explanation": "Krzemionka powoduje chropowatość skrzypów; widłaki rozgałęziają się widlasto, a młode liście paproci są spiralnie zwinięte.",
    "left": [
      "Skrzypy",
      "Widłaki",
      "Paprocie"
    ],
    "right": [
      "Młode liście zwinięte spiralnie",
      "Widlasto rozgałęzione płożące łodygi",
      "Ściany komórkowe wysycone krzemionką"
    ]
  },
  {
    "id": "R03_PAPR_08",
    "section": "Paprotniki",
    "type": "odd_one_out",
    "prompt": "Wskaż roślinę, która nie należy do paproci: orlica pospolita, pióropusznik strusi, widłak goździsty, długosz królewski.",
    "options": null,
    "answer": "widłak goździsty",
    "explanation": "Widłak goździsty należy do widłaków, a pozostałe wymienione rośliny to paprocie."
  },
  {
    "id": "R03_PAPR_09",
    "section": "Paprotniki",
    "type": "scenario",
    "prompt": "W lesie zarodnik paproci wykiełkował i utworzył przedrośle. Aby plemnik dotarł do komórki jajowej na przedroślu, konieczny jest udział którego czynnika?",
    "options": [
      "Wody",
      "Wiatru",
      "Owada",
      "Pyłku"
    ],
    "answer": 0,
    "explanation": "Do zapłodnienia u paproci potrzebna jest woda, która umożliwia przemieszczanie się plemników."
  },
  {
    "id": "R03_PAPR_10",
    "section": "Paprotniki",
    "type": "sequence",
    "prompt": "Ułóż etapy cyklu rozwojowego paproci od uwolnienia zarodników.",
    "options": null,
    "answer": [
      "uwolnienie zarodników z zarodni",
      "kiełkowanie zarodnika i powstanie przedrośla",
      "zapłodnienie w obecności wody",
      "rozwój młodej paproci z zygoty",
      "powstanie dojrzałych liści z zarodniami"
    ],
    "explanation": "Zarodnik daje przedrośle, na którym dochodzi do zapłodnienia; z zygoty wyrasta nowa paproć tworząca zarodnie.",
    "items": [
      "powstanie dojrzałych liści z zarodniami",
      "rozwój młodej paproci z zygoty",
      "zapłodnienie w obecności wody",
      "uwolnienie zarodników z zarodni",
      "kiełkowanie zarodnika i powstanie przedrośla"
    ]
  },
  {
    "id": "R03_NAGO_01",
    "section": "Rośliny nagonasienne",
    "type": "single_choice",
    "prompt": "Co odróżnia rośliny nagonasienne od okrytonasiennych w zakresie nasion?",
    "options": [
      "Nasiona nie są ukryte w owocu",
      "Wszystkie nasiona powstają w jagodach",
      "W ogóle nie wytwarzają nasion",
      "Wytwarzają nasiona tylko pod wodą",
      "Nasiona otaczają zawsze mięsiste owoce",
      "Nasiona wyrastają w korzeniach"
    ],
    "answer": 0,
    "explanation": "Rośliny nagonasienne mają nieosłonięte nasiona i nie wytwarzają owoców.",
    "image": "r03_szyszka_sosny.jpg"
  },
  {
    "id": "R03_NAGO_02",
    "section": "Rośliny nagonasienne",
    "type": "multi_select",
    "prompt": "Które przystosowania umożliwiają iglakom życie w środowisku lądowym?",
    "options": [
      "Woskowa powłoka igieł lub łusek",
      "Kora chroniąca pień",
      "Tkanki wzmacniające usztywniające pęd",
      "Brak tkanki przewodzącej",
      "Duże miękkie liście stale parujące wodę"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Wosk ogranicza parowanie, kora osłania pień, a tkanki mechaniczne stabilizują pędy iglaków."
  },
  {
    "id": "R03_NAGO_03",
    "section": "Rośliny nagonasienne",
    "type": "true_false",
    "prompt": "Modrzew europejski należy do iglaków, które zrzucają igły na zimę.",
    "options": null,
    "answer": true,
    "explanation": "Modrzew jest wyjątkiem wśród iglaków, ponieważ jego igły opadają na zimę."
  },
  {
    "id": "R03_NAGO_04",
    "section": "Rośliny nagonasienne",
    "type": "match",
    "prompt": "Połącz gatunek iglaka z cechą jego szyszek lub nasion.",
    "options": null,
    "answer": {
      "Świerk pospolity": "Szyszki wydłużone i zwisające",
      "Jodła pospolita": "Szyszki wyrastają pionowo ku górze",
      "Cis pospolity": "Nasiona z czerwoną osnówką",
      "Jałowiec pospolity": "Fioletowe szyszkojagody"
    },
    "explanation": "Świerk, jodłę, cis i jałowiec można rozróżnić m.in. na podstawie szyszek lub osłon nasiennych.",
    "left": [
      "Świerk pospolity",
      "Jodła pospolita",
      "Cis pospolity",
      "Jałowiec pospolity"
    ],
    "right": [
      "Fioletowe szyszkojagody",
      "Nasiona z czerwoną osnówką",
      "Szyszki wyrastają pionowo ku górze",
      "Szyszki wydłużone i zwisające"
    ]
  },
  {
    "id": "R03_NAGO_05",
    "section": "Rośliny nagonasienne",
    "type": "fill_in",
    "prompt": "Sosna jest rośliną wiatropylną: jej ziarna pyłku są przenoszone przez __________.",
    "options": null,
    "answer": [
      "wiatr"
    ],
    "explanation": "Sosna produkuje liczne lekkie ziarna pyłku roznoszone przez wiatr.",
    "altAnswers": [
      [
        "wiatr",
        "wiatry"
      ]
    ]
  },
  {
    "id": "R03_NAGO_06",
    "section": "Rośliny nagonasienne",
    "type": "single_choice",
    "prompt": "Który iglak ma płaskie igły z dwoma jasnymi paskami od spodu?",
    "options": [
      "Jodła pospolita",
      "Świerk pospolity",
      "Sosna pospolita",
      "Modrzew europejski",
      "Jałowiec pospolity",
      "Sosna limba"
    ],
    "answer": 0,
    "explanation": "Jodła ma krótkie płaskie igły z dwoma jasnymi paskami od spodu.",
    "image": "r03_igly_drzew.jpg"
  },
  {
    "id": "R03_NAGO_07",
    "section": "Rośliny nagonasienne",
    "type": "sort",
    "prompt": "Przyporządkuj iglaki do sposobu osadzenia ich igieł.",
    "options": null,
    "answer": {
      "Igły po dwie": [
        "sosna pospolita",
        "sosna górska"
      ],
      "Igły pojedyncze": [
        "świerk pospolity",
        "jodła pospolita"
      ],
      "Igły w pęczkach lub po pięć": [
        "modrzew europejski",
        "sosna limba"
      ]
    },
    "explanation": "Sosny pospolita i górska mają igły po dwie, świerk i jodła pojedyncze, modrzew w pęczkach, a limba po pięć.",
    "items": [
      "sosna pospolita",
      "świerk pospolity",
      "modrzew europejski",
      "sosna górska",
      "jodła pospolita",
      "sosna limba"
    ],
    "categories": [
      "Igły po dwie",
      "Igły pojedyncze",
      "Igły w pęczkach lub po pięć"
    ]
  },
  {
    "id": "R03_NAGO_08",
    "section": "Rośliny nagonasienne",
    "type": "odd_one_out",
    "prompt": "Wskaż roślinę, która nie jest iglakiem: sosna, świerk, jodła, kasztanowiec.",
    "options": null,
    "answer": "kasztanowiec",
    "explanation": "Sosna, świerk i jodła należą do iglaków, a kasztanowiec jest drzewem o liściach złożonych."
  },
  {
    "id": "R03_NAGO_09",
    "section": "Rośliny nagonasienne",
    "type": "scenario",
    "prompt": "Z drzewostanu unoszą się liczne lekkie ziarna pyłku. Mają niewielką masę, a u sosny także pęcherze powietrzne. Jaki to sposób zapylania?",
    "options": [
      "Wiatropylność",
      "Owadopylność",
      "Samozapylenie",
      "Zapylanie przez zwierzęta"
    ],
    "answer": 0,
    "explanation": "Małe i lekkie ziarna pyłku oraz pęcherze powietrzne ułatwiają transport przez wiatr."
  },
  {
    "id": "R03_NAGO_10",
    "section": "Rośliny nagonasienne",
    "type": "riddle",
    "prompt": "Jak nazywa się czerwona osłona otaczająca nasiono cisu pospolitego?",
    "options": null,
    "answer": "osnówka",
    "explanation": "Nasiona cisu otacza czerwona osnówka.",
    "altAnswers": [
      "osnówka",
      "osnówką"
    ]
  },
  {
    "id": "R03_WEGE_01",
    "section": "Korzenie, łodygi i liście",
    "type": "single_choice",
    "prompt": "Która struktura zwiększa powierzchnię chłonną młodego korzenia?",
    "options": [
      "Włośniki",
      "Szyszki",
      "Płatki korony",
      "Kolce",
      "Pylniki",
      "Łupina nasienna"
    ],
    "answer": 0,
    "explanation": "Włośniki występują w strefie włośnikowej i zwiększają powierzchnię pobierania wody.",
    "image": "r03_korzen_strefy.jpg"
  },
  {
    "id": "R03_WEGE_02",
    "section": "Korzenie, łodygi i liście",
    "type": "multi_select",
    "prompt": "Wybierz funkcje korzenia.",
    "options": [
      "Utrzymywanie rośliny w glebie",
      "Pobieranie wody i soli mineralnych",
      "Magazynowanie zapasów przez korzenie spichrzowe",
      "Wytwarzanie płatków kwiatowych",
      "Tworzenie pylników"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Korzenie zakotwiczają roślinę, pobierają wodę z solami, a niektóre przekształcone korzenie gromadzą zapasy."
  },
  {
    "id": "R03_WEGE_03",
    "section": "Korzenie, łodygi i liście",
    "type": "fill_in",
    "prompt": "System z korzeniem głównym i korzeniami bocznymi nazywa się __________, a system z pękiem podobnych korzeni przybyszowych — __________.",
    "options": null,
    "answer": [
      "palowy",
      "wiązkowy"
    ],
    "explanation": "System palowy ma wyraźny korzeń główny, a wiązkowy składa się z pęku korzeni przybyszowych.",
    "image": "r03_korzen_strefy.jpg",
    "altAnswers": [
      [
        "palowy",
        "system palowy"
      ],
      [
        "wiązkowy",
        "system wiązkowy"
      ]
    ]
  },
  {
    "id": "R03_WEGE_04",
    "section": "Korzenie, łodygi i liście",
    "type": "sort",
    "prompt": "Połącz przykład rośliny z typem przekształconych korzeni, przyporządkowując go do kategorii.",
    "options": null,
    "answer": {
      "Korzenie spichrzowe": [
        "marchew"
      ],
      "Korzenie powietrzne": [
        "storczyk"
      ],
      "Korzenie czepne": [
        "bluszcz"
      ],
      "Korzenie podporowe": [
        "kukurydza"
      ]
    },
    "explanation": "Marchew gromadzi zapasy w korzeniu, storczyk pobiera wodę korzeniami powietrznymi, bluszcz się przyczepia, a kukurydza podpiera łodygę.",
    "items": [
      "marchew",
      "bluszcz",
      "storczyk",
      "kukurydza"
    ],
    "categories": [
      "Korzenie spichrzowe",
      "Korzenie powietrzne",
      "Korzenie czepne",
      "Korzenie podporowe"
    ]
  },
  {
    "id": "R03_WEGE_05",
    "section": "Korzenie, łodygi i liście",
    "type": "true_false",
    "prompt": "Bulwa ziemniaka to przykład przekształconej łodygi podziemnej.",
    "options": null,
    "answer": true,
    "explanation": "Bulwy to zgrubiałe podziemne łodygi, np. bulwa ziemniaka."
  },
  {
    "id": "R03_WEGE_06",
    "section": "Korzenie, łodygi i liście",
    "type": "match",
    "prompt": "Połącz przekształcenie łodygi z przykładem rośliny.",
    "options": null,
    "answer": {
      "Kłącze": "Imbir",
      "Bulwa": "Ziemniak",
      "Rozłogi": "Poziomka",
      "Łodyga spichrzowa": "Kalarepa"
    },
    "explanation": "Imbir wytwarza kłącza, ziemniak bulwy, poziomka rozłogi, a kalarepa łodygę spichrzową.",
    "left": [
      "Kłącze",
      "Bulwa",
      "Rozłogi",
      "Łodyga spichrzowa"
    ],
    "right": [
      "Kalarepa",
      "Poziomka",
      "Ziemniak",
      "Imbir"
    ]
  },
  {
    "id": "R03_WEGE_07",
    "section": "Korzenie, łodygi i liście",
    "type": "single_choice",
    "prompt": "Którędy para wodna wydostaje się z liścia podczas transpiracji szparkowej?",
    "options": [
      "Przez aparaty szparkowe",
      "Przez zarodnie",
      "Przez szyszki",
      "Przez zalążki",
      "Przez kłącza",
      "Przez korzenie czepne"
    ],
    "answer": 0,
    "explanation": "Transpiracja szparkowa odbywa się przez aparaty szparkowe, a kutykularna przez kutykulę.",
    "image": "r03_lisc_przekroj.jpg"
  },
  {
    "id": "R03_WEGE_08",
    "section": "Korzenie, łodygi i liście",
    "type": "odd_one_out",
    "prompt": "Wskaż określenie, które nie dotyczy ułożenia liści na łodydze: skrętoległe, naprzeciwległe, okółkowe, dłoniaste.",
    "options": null,
    "answer": "dłoniaste",
    "explanation": "Skrętoległe, naprzeciwległe i okółkowe określają ułożenie liści, a dłoniaste odnosi się do ich kształtu lub nerwacji."
  },
  {
    "id": "R03_WEGE_09",
    "section": "Korzenie, łodygi i liście",
    "type": "scenario",
    "prompt": "W upalny dzień roślina oddaje parę wodną przez liście i dzięki temu chłodzi swoją powierzchnię. Jak nazywa się ten proces?",
    "options": [
      "Transpiracja",
      "Zapylenie",
      "Kiełkowanie",
      "Rozsiewanie",
      "Dojrzewanie owocu",
      "Zapłodnienie"
    ],
    "answer": 0,
    "explanation": "Woda parująca z liści ochładza roślinę, a transpiracja pomaga również zasysać wodę przez korzenie."
  },
  {
    "id": "R03_WEGE_10",
    "section": "Korzenie, łodygi i liście",
    "type": "sequence",
    "prompt": "Ułóż etapy drogi wody w roślinie w prawidłowej kolejności.",
    "options": null,
    "answer": [
      "pobieranie wody przez korzeń",
      "transport wody drewnem w łodydze",
      "dopływ wody do liści",
      "parowanie wody z powierzchni liści"
    ],
    "explanation": "Korzenie pobierają wodę, drewno transportuje ją do liści, a część wody odparowuje w procesie transpiracji.",
    "items": [
      "parowanie wody z powierzchni liści",
      "dopływ wody do liści",
      "pobieranie wody przez korzeń",
      "transport wody drewnem w łodydze"
    ]
  },
  {
    "id": "R03_OKRY_01",
    "section": "Rośliny okrytonasienne",
    "type": "single_choice",
    "prompt": "W czym znajdują się nasiona roślin okrytonasiennych?",
    "options": [
      "W owocu",
      "W niezapłodnionym pyłku",
      "W kłosie zarodnionośnym",
      "W przedroślu",
      "W korze pnia",
      "W zarodni mchu"
    ],
    "answer": 0,
    "explanation": "Rośliny okrytonasienne wytwarzają nasiona osłonięte przez owoc."
  },
  {
    "id": "R03_OKRY_02",
    "section": "Rośliny okrytonasienne",
    "type": "match",
    "prompt": "Połącz część kwiatu z jej rolą.",
    "options": null,
    "answer": {
      "Znamię słupka": "Przyjmuje ziarna pyłku",
      "Zalążnia": "Zawiera zalążki",
      "Pylnik": "Powstają w nim ziarna pyłku",
      "Płatki korony": "Wabią zwierzęta zapylające"
    },
    "explanation": "W słupku mieszczą się zalążki, znamię przyjmuje pyłek, pylniki go wytwarzają, a barwne płatki mogą wabić zapylacze.",
    "image": "r03_kwiat_budowa.jpg",
    "left": [
      "Znamię słupka",
      "Zalążnia",
      "Pylnik",
      "Płatki korony"
    ],
    "right": [
      "Wabią zwierzęta zapylające",
      "Powstają w nim ziarna pyłku",
      "Zawiera zalążki",
      "Przyjmuje ziarna pyłku"
    ]
  },
  {
    "id": "R03_OKRY_03",
    "section": "Rośliny okrytonasienne",
    "type": "multi_select",
    "prompt": "Wybierz cechy kwiatów owadopylnych.",
    "options": [
      "Wabienie kolorem",
      "Wabienie zapachem",
      "Wskazujące drogę do środka wzory na płatkach",
      "Brak nektaru u wszystkich gatunków",
      "Wyłącznie pierzaste znamiona"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Kwiaty owadopylne wabią zwierzęta kolorem, zapachem i wzorami na płatkach."
  },
  {
    "id": "R03_OKRY_04",
    "section": "Rośliny okrytonasienne",
    "type": "true_false",
    "prompt": "Owoc powstaje z zalążni, a nasiona rozwijają się z zalążków.",
    "options": null,
    "answer": true,
    "explanation": "Po zapłodnieniu zalążki przekształcają się w nasiona, a zalążnia w owoc."
  },
  {
    "id": "R03_OKRY_05",
    "section": "Rośliny okrytonasienne",
    "type": "fill_in",
    "prompt": "Zapylenie polega na przeniesieniu ziarna pyłku na __________ słupka.",
    "options": null,
    "answer": [
      "znamię"
    ],
    "explanation": "Zapylenie polega na przeniesieniu ziarna pyłku na znamię słupka.",
    "image": "r03_kwiat_budowa.jpg",
    "altAnswers": [
      [
        "znamię",
        "znamie"
      ]
    ]
  },
  {
    "id": "R03_OKRY_06",
    "section": "Rośliny okrytonasienne",
    "type": "sort",
    "prompt": "Przyporządkuj rośliny do kategorii długości ich życia.",
    "options": null,
    "answer": {
      "Jednoroczne": [
        "słonecznik"
      ],
      "Dwuletnie": [
        "pietruszka"
      ],
      "Wieloletnie drzewa i krzewy": [
        "drzewo"
      ],
      "Byliny": [
        "tulipan"
      ]
    },
    "explanation": "Słonecznik jest rośliną jednoroczną, pietruszka dwuletnią, drzewo wieloletnią, a tulipan byliną; byliny też są roślinami wieloletnimi, lecz są zielne.",
    "items": [
      "słonecznik",
      "drzewo",
      "pietruszka",
      "tulipan"
    ],
    "categories": [
      "Jednoroczne",
      "Dwuletnie",
      "Wieloletnie drzewa i krzewy",
      "Byliny"
    ]
  },
  {
    "id": "R03_OKRY_07",
    "section": "Rośliny okrytonasienne",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest częścią kwiatu: słupek, pręcik, płatek korony, korzeń.",
    "options": null,
    "answer": "korzeń",
    "explanation": "Słupek, pręcik i płatki korony należą do budowy kwiatu; korzeń jest organem wegetatywnym."
  },
  {
    "id": "R03_OKRY_08",
    "section": "Rośliny okrytonasienne",
    "type": "single_choice",
    "prompt": "Jakie przystosowanie ułatwia rozsiewanie nasion łopianu przez zwierzęta?",
    "options": [
      "Haczyki lub kolce przyczepiające się do sierści",
      "Lekkie puchate wyrostki niesione przez wiatr",
      "Pęcherze powietrzne zapewniające unoszenie na wodzie",
      "Soczysty miąższ owocu zjadany przez zwierzęta",
      "Skrzydełka owocu",
      "Samoczynne pękanie owocni"
    ],
    "answer": 0,
    "explanation": "Haczyki i kolce umożliwiają przyczepienie nasion do sierści lub piór zwierząt.",
    "image": "r03_rozsiewanie_nasion.jpg"
  },
  {
    "id": "R03_OKRY_09",
    "section": "Rośliny okrytonasienne",
    "type": "scenario",
    "prompt": "W ogrodzie kwiat ma barwne płatki i wyraźny zapach, które przyciągają odwiedzające go owady. Jaki sposób zapylania wspierają te cechy?",
    "options": [
      "Owadopylność",
      "Wiatropylność",
      "Rozsiewanie przez zwierzęta",
      "Rozsiewanie przez wiatr"
    ],
    "answer": 0,
    "explanation": "Barwa i zapach kwiatu są przystosowaniami do zapylania z udziałem owadów."
  },
  {
    "id": "R03_OKRY_10",
    "section": "Rośliny okrytonasienne",
    "type": "sequence",
    "prompt": "Ułóż fazy kiełkowania nasiona we właściwej kolejności.",
    "options": null,
    "answer": [
      "pęcznienie nasiona",
      "pęknięcie łupiny nasiennej",
      "pojawienie się korzenia zarodkowego",
      "rozwój łodygi z liścieniami",
      "przekształcenie zarodka w siewkę"
    ],
    "explanation": "Nasiono najpierw chłonie wodę i pęcznieje, potem pęka jego łupina, wyrasta korzeń, a następnie pęd z liścieniami.",
    "items": [
      "przekształcenie zarodka w siewkę",
      "rozwój łodygi z liścieniami",
      "pojawienie się korzenia zarodkowego",
      "pęcznienie nasiona",
      "pęknięcie łupiny nasiennej"
    ]
  },
  {
    "id": "R03_HARD_01",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które zestawienia odmian miękiszu z ich funkcjami są poprawne?",
    "options": [
      "Miękisz asymilacyjny — fotosynteza",
      "Miękisz spichrzowy — magazynowanie zapasów i wody",
      "Miękisz powietrzny — magazynowanie gazów",
      "Miękisz zasadniczy — wytwarzanie ziaren pyłku",
      "Miękisz powietrzny — wytwarzanie drewna wtórnego"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Cztery odmiany miękiszu pełnią różne funkcje: asymilacyjny fotosyntetyzuje, spichrzowy gromadzi zapasy, a powietrzny gazy."
  },
  {
    "id": "R03_HARD_02",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz rzadziej używane pojęcie z właściwym znaczeniem.",
    "options": null,
    "answer": {
      "Fykologia": "Nauka zajmująca się glonami",
      "Lichenologia": "Nauka zajmująca się porostami",
      "Kutykula": "Warstwa na skórce ograniczająca parowanie",
      "Osnówka": "Czerwona osłona nasiona cisu"
    },
    "explanation": "Fykologia to druga nazwa algologii, lichenologia bada porosty, kutykula pokrywa skórkę, a osnówka otacza nasiona cisu.",
    "left": [
      "Fykologia",
      "Lichenologia",
      "Kutykula",
      "Osnówka"
    ],
    "right": [
      "Czerwona osłona nasiona cisu",
      "Warstwa na skórce ograniczająca parowanie",
      "Nauka zajmująca się porostami",
      "Nauka zajmująca się glonami"
    ]
  },
  {
    "id": "R03_HARD_03",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Uczniowie porównują rozmnażanie mchu i paproci. W obu cyklach plemniki docierają do komórek jajowych przy udziale tego samego czynnika. Jakiego?",
    "options": [
      "Wody",
      "Wiatru",
      "Owadów",
      "Zwierząt"
    ],
    "answer": 0,
    "explanation": "Zapłodnienie zarówno u mchów, jak i u paproci wymaga obecności wody.",
    "image": "r03_paproc_spod_liscia.jpg"
  },
  {
    "id": "R03_HARD_04",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Rozpoznaj gatunek po zestawie cech: krótkie, płaskie igły z dwoma jasnymi paskami od spodu i szyszki rosnące pionowo do góry.",
    "options": [
      "Jodła pospolita",
      "Świerk pospolity",
      "Sosna limba",
      "Sosna pospolita",
      "Modrzew europejski",
      "Jałowiec pospolity"
    ],
    "answer": 0,
    "explanation": "Jodła ma płaskie igły z jasnymi paskami na spodzie i wzniesione pionowo szyszki.",
    "image": "r03_igly_drzew.jpg"
  },
  {
    "id": "R03_HARD_05",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Za chropowatość skrzypów odpowiada __________, a cykl rozwojowy widłaków może trwać nawet __________ lat.",
    "options": null,
    "answer": [
      "krzemionka",
      "25"
    ],
    "explanation": "Ściany komórkowe skrzypów są wysycone krzemionką; długi cykl rozwojowy widłaków może sięgać 25 lat.",
    "altAnswers": [
      [
        "krzemionka",
        "krzemionkę",
        "krzemionki"
      ],
      [
        "25",
        "25 lat"
      ]
    ]
  },
  {
    "id": "R03_HARD_06",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Wybierz cechy charakterystyczne dla kwiatów wiatropylnych, a nie owadopylnych.",
    "options": [
      "Duża ilość pyłku",
      "Rozbudowane pierzaste znamiona",
      "Niepozorny lub nieobecny okwiat",
      "Wabienie owadów kolorowym nektarnikiem",
      "Widoczne kreski wskazujące owadom drogę"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Kwiaty wiatropylne produkują dużo pyłku, mają pierzaste znamiona i zwykle niepozorny okwiat."
  },
  {
    "id": "R03_HARD_07",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj osiem przykładów do przekształceń organów wegetatywnych.",
    "options": null,
    "answer": {
      "Przekształcenia korzenia": [
        "korzeń spichrzowy marchwi",
        "korzenie powietrzne storczyka",
        "korzenie czepne bluszczu"
      ],
      "Przekształcenia łodygi": [
        "bulwa ziemniaka",
        "kłącze imbiru",
        "rozłogi poziomki"
      ],
      "Przekształcenia liścia": [
        "wąsy grochu",
        "liście pułapkowe rosiczki"
      ]
    },
    "explanation": "Marchew, storczyk i bluszcz to przykłady przekształceń korzeni; ziemniak, imbir i poziomka — łodyg; groch i rosiczka — liści.",
    "items": [
      "korzeń spichrzowy marchwi",
      "korzenie czepne bluszczu",
      "kłącze imbiru",
      "wąsy grochu",
      "korzenie powietrzne storczyka",
      "bulwa ziemniaka",
      "rozłogi poziomki",
      "liście pułapkowe rosiczki"
    ],
    "categories": [
      "Przekształcenia korzenia",
      "Przekształcenia łodygi",
      "Przekształcenia liścia"
    ]
  },
  {
    "id": "R03_HARD_08",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż strefy korzenia od jego wierzchołka ku starszej części.",
    "options": null,
    "answer": [
      "stożek wzrostu",
      "strefa wydłużania",
      "strefa włośnikowa",
      "strefa korzeni bocznych"
    ],
    "explanation": "Przy wierzchołku leży stożek wzrostu osłonięty czapeczką, dalej strefa wydłużania, strefa włośnikowa i strefa korzeni bocznych.",
    "image": "r03_korzen_strefy.jpg",
    "items": [
      "strefa korzeni bocznych",
      "strefa włośnikowa",
      "stożek wzrostu",
      "strefa wydłużania"
    ]
  },
  {
    "id": "R03_HARD_09",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz sposób rozsiewania nasion z odpowiednim przykładem rośliny.",
    "options": null,
    "answer": {
      "Samoczynne": "Suchy strąk fasoli",
      "Przez wiatr": "Dmuchawiec",
      "Przez wodę": "Orzech kokosowy",
      "Przez zwierzęta": "Łopian"
    },
    "explanation": "Strąki fasoli pękają samoczynnie, dmuchawiec wykorzystuje wiatr, kokos wodę, a łopian przyczepia się do zwierząt.",
    "image": "r03_rozsiewanie_nasion.jpg",
    "left": [
      "Samoczynne",
      "Przez wiatr",
      "Przez wodę",
      "Przez zwierzęta"
    ],
    "right": [
      "Łopian",
      "Orzech kokosowy",
      "Dmuchawiec",
      "Suchy strąk fasoli"
    ]
  },
  {
    "id": "R03_HARD_10",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż gatunek, który nie należy do paprotników: salwinia pływająca, marsylia czterolistna, orlica pospolita, jałowiec pospolity.",
    "options": null,
    "answer": "jałowiec pospolity",
    "explanation": "Salwinia, marsylia i orlica należą do paprotników, a jałowiec pospolity jest rośliną nagonasienną."
  },
  {
    "id": "R03_HARD_11",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Badacz obserwuje w łodydze dwa rodzaje dróg transportu: martwe puste komórki tworzące naczynia i żywe komórki tworzące rurki sitowe. Który transport odbywa się w rurkach sitowych?",
    "options": [
      "Rozprowadzanie substancji pokarmowych z liści",
      "Transport wody i soli mineralnych od korzeni",
      "Wymiana gazowa przez aparaty szparkowe",
      "Transport pyłku między kwiatami"
    ],
    "answer": 0,
    "explanation": "Rurki sitowe tworzą łyko przewodzące produkty fotosyntezy; wodę i sole mineralne prowadzą naczynia drewna."
  },
  {
    "id": "R03_HARD_12",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Z jakiego okresu pochodzą szczątki dawnych roślin, z których powstały złoża węgla kamiennego?",
    "options": [
      "Z czasów lasów karbońskich sprzed około 350 mln lat",
      "Z czasów lasów karbońskich sprzed około 25 mln lat",
      "Z czasów lasów karbońskich sprzed około 35 mln lat",
      "Z czasów lasów karbońskich sprzed około 3,5 mln lat",
      "Z czasów lasów karbońskich sprzed około 350 tys. lat",
      "Z czasów lasów karbońskich sprzed około 25 tys. lat"
    ],
    "answer": 0,
    "explanation": "Lasy karbońskie sprzed około 350 mln lat pozostawiły szczątki roślinne, z których powstały złoża węgla kamiennego."
  }
];

const KID_PROMPTS = {
  "R03_TKAN_01": "Które tkanki mają komórki, które stale się dzielą?",
  "R03_TKAN_09": "Złamano czubek głównego pędu. Co stanie się z jego wzrostem?",
  "R03_MGPO_04": "Jak nazywa się ciało glonu bez korzeni, łodygi i liści?",
  "R03_PAPR_03": "Na którym pędzie skrzypu jest kłos z zarodniami?",
  "R03_NAGO_01": "Co jest charakterystyczne dla nasion roślin nagonasiennych?",
  "R03_WEGE_01": "Co pomaga korzeniowi wchłaniać więcej wody?",
  "R03_WEGE_09": "Jak nazywa się parowanie wody z liści?",
  "R03_OKRY_05": "Gdzie na słupku trafia ziarno pyłku podczas zapylenia?",
  "R03_OKRY_08": "Co sprawia, że nasiona łopianu czepiają się futra zwierząt?",
  "R03_HARD_03": "Czego potrzebują plemniki mchów i paproci, aby dotrzeć do komórki jajowej?"
};

const chapter = {
  "id": "r03",
  "number": 3,
  "title": "Rośliny",
  "icon": "🌿",
  "sectionOrder": [
    "Tkanki roślinne",
    "Mchy, glony i porosty",
    "Paprotniki",
    "Rośliny nagonasienne",
    "Korzenie, łodygi i liście",
    "Rośliny okrytonasienne"
  ],
  "sectionIcons": {
    "Tkanki roślinne": "🧫",
    "Mchy, glony i porosty": "🌿",
    "Paprotniki": "🌱",
    "Rośliny nagonasienne": "🌲",
    "Korzenie, łodygi i liście": "🍃",
    "Rośliny okrytonasienne": "🌻"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
