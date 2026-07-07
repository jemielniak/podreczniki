// Skróty sekcji:
//   PLA = Płazińce
//   NIC = Nicienie
//   PIE = Pierścienice
//   PRO = Profilaktyka pasożytów
//   POR = Porównanie bezkręgowców
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_PLA_01",
    "section": "Płazińce",
    "type": "single_choice",
    "prompt": "Gdzie można spotkać wolno żyjące płazińce?",
    "options": [
      "W wodach słodkich, słonych i w wilgotnej glebie",
      "Wyłącznie w gorących źródłach",
      "Tylko w jelicie cienkim człowieka",
      "Wyłącznie w powietrzu",
      "Tylko w suchej glebie pustynnej",
      "Wyłącznie w ciele owadów"
    ],
    "answer": 0,
    "explanation": "Wolno żyjące płazińce występują w wodach słodkich i słonych oraz w wilgotnej glebie."
  },
  {
    "id": "R02_PLA_02",
    "section": "Płazińce",
    "type": "true_false",
    "prompt": "Większość płazińców to pasożyty żyjące wewnątrz innych organizmów.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik wskazuje, że większość płazińców prowadzi pasożytniczy tryb życia wewnątrz żywicieli."
  },
  {
    "id": "R02_PLA_03",
    "section": "Płazińce",
    "type": "single_choice",
    "prompt": "Jaki kształt ma najczęściej ciało płazińców?",
    "options": [
      "Podłużne i spłaszczone",
      "Kuliste i twarde",
      "Promieniste i kolczaste",
      "Krótkie i podzielone na pierścienie",
      "Nitkowate i zwężone na końcach",
      "Skręcone w muszlę"
    ],
    "answer": 0,
    "explanation": "Ciało płazińców jest zwykle podłużne, spłaszczone i słabo zróżnicowane na części."
  },
  {
    "id": "R02_PLA_04",
    "section": "Płazińce",
    "type": "multi_select",
    "prompt": "Zaznacz cechy budowy ciała płazińców opisane w podręczniku.",
    "options": [
      "ciało podłużne",
      "ciało spłaszczone",
      "ciało słabo zróżnicowane na części",
      "ciało złożone z wielu odnóży",
      "ciało pokryte pancerzem",
      "ciało zawsze kuliste"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Płazińce mają ciało podłużne, spłaszczone i zwykle słabo zróżnicowane na części."
  },
  {
    "id": "R02_PLA_05",
    "section": "Płazińce",
    "type": "fill_in",
    "prompt": "Wypławek biały żyje w zbiornikach __________ i prowadzi tryb życia __________.",
    "options": null,
    "answer": [
      "słodkowodnych",
      "drapieżny"
    ],
    "altAnswers": [
      [
        "słodkowodnych",
        "słodkowodny"
      ],
      [
        "drapieżny",
        "drapieżniczy"
      ]
    ],
    "explanation": "Wypławek biały jest przykładem wolno żyjącego płazińca drapieżnego ze słodkowodnych zbiorników."
  },
  {
    "id": "R02_PLA_06",
    "section": "Płazińce",
    "type": "riddle",
    "prompt": "Płaziniec pasożytujący w jelicie cienkim człowieka, zbudowany z główki, szyjki i członów, to...",
    "image": "/img/r02_tasiemiec_budowa.jpg",
    "options": null,
    "answer": "tasiemiec",
    "altAnswers": [
      "tasiemiec",
      "tasiemiec uzbrojony",
      "tasiemiec nieuzbrojony"
    ],
    "explanation": "Tasiemiec jest płazińcem pasożytniczym, który może żyć w jelicie cienkim człowieka."
  },
  {
    "id": "R02_PLA_07",
    "section": "Płazińce",
    "type": "match",
    "prompt": "Połącz element budowy tasiemca z funkcją.",
    "image": "/img/r02_tasiemiec_budowa.jpg",
    "options": null,
    "left": [
      "główka",
      "cienka szyjka",
      "nabłonek z warstwą ochronną",
      "człon"
    ],
    "right": [
      "przytwierdzenie do ściany jelita",
      "wytwarzanie nowych członów",
      "ochrona przed strawieniem",
      "zawiera narządy rozrodcze"
    ],
    "answer": {
      "główka": "przytwierdzenie do ściany jelita",
      "cienka szyjka": "wytwarzanie nowych członów",
      "nabłonek z warstwą ochronną": "ochrona przed strawieniem",
      "człon": "zawiera narządy rozrodcze"
    },
    "explanation": "Główka służy do przytwierdzenia, szyjka wytwarza nowe człony, a ochronna warstwa nabłonka zabezpiecza przed strawieniem."
  },
  {
    "id": "R02_PLA_08",
    "section": "Płazińce",
    "type": "single_choice",
    "prompt": "Czym tasiemiec uzbrojony różni się od tasiemca nieuzbrojonego według schematu z podręcznika?",
    "image": "/img/r02_tasiemiec_budowa.jpg",
    "options": [
      "Ma haczyki i przyssawki na główce",
      "Ma ciało pokryte rzęskami",
      "Nie ma żadnych członów",
      "Żyje wyłącznie w glebie",
      "Ma siodełko na ciele",
      "Ma szczecinki na pierścieniach"
    ],
    "answer": 0,
    "explanation": "Tasiemiec uzbrojony ma na główce haczyki i przyssawki, a nieuzbrojony tylko przyssawki."
  },
  {
    "id": "R02_PLA_09",
    "section": "Płazińce",
    "type": "true_false",
    "prompt": "Gardziel wypławka białego służy do chwytania zdobyczy.",
    "options": null,
    "answer": true,
    "explanation": "W schemacie wypławka gardziel jest wskazana jako narząd służący do chwytania zdobyczy."
  },
  {
    "id": "R02_PLA_10",
    "section": "Płazińce",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: główka, cienka szyjka, człon, siodełko.",
    "options": null,
    "answer": "siodełko",
    "explanation": "Siodełko jest elementem budowy dżdżownicy, a pozostałe elementy dotyczą budowy tasiemca."
  },
  {
    "id": "R02_PLA_11",
    "section": "Płazińce",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do płazińców wolno żyjących i pasożytniczych.",
    "options": null,
    "items": [
      "rzęski i śluz na ciele",
      "proste oczy reagujące na światło",
      "gardziel do chwytania zdobyczy",
      "główka do przytwierdzenia",
      "nabłonek z warstwą ochronną",
      "liczne człony"
    ],
    "categories": [
      "płazińce wolno żyjące",
      "płazińce pasożytnicze"
    ],
    "answer": {
      "płazińce wolno żyjące": [
        "rzęski i śluz na ciele",
        "proste oczy reagujące na światło",
        "gardziel do chwytania zdobyczy"
      ],
      "płazińce pasożytnicze": [
        "główka do przytwierdzenia",
        "nabłonek z warstwą ochronną",
        "liczne człony"
      ]
    },
    "explanation": "Wypławek ma rzęski, śluz, oczy i gardziel, a tasiemiec ma główkę przytwierdzającą, ochronną warstwę nabłonka oraz liczne człony."
  },
  {
    "id": "R02_PLA_12",
    "section": "Płazińce",
    "type": "scenario",
    "prompt": "Uczeń ogląda pod mikroskopem płazińca, który ma ciało pokryte śluzem i rzęskami, proste oczy oraz gardziel do chwytania pokarmu. Który tryb życia najlepiej pasuje do tego opisu?",
    "options": [
      "wolno żyjący drapieżnik",
      "pasożyt wewnętrzny jelita",
      "pasożyt zewnętrzny pijący krew",
      "organizm wyłącznie osiadły"
    ],
    "answer": 0,
    "explanation": "Śluz, rzęski, proste oczy i gardziel opisują wolno żyjącego wypławka, który może prowadzić drapieżny tryb życia."
  },
  {
    "id": "R02_PLA_13",
    "section": "Płazińce",
    "type": "multi_select",
    "prompt": "Wybierz przystosowania tasiemca do pasożytniczego trybu życia.",
    "image": "/img/r02_tasiemiec_budowa.jpg",
    "options": [
      "przyssawki na główce",
      "haczyki u tasiemca uzbrojonego",
      "nabłonek z warstwą ochronną",
      "kształt dopasowany do jelita",
      "rzęski ułatwiające pływanie",
      "siodełko rozrodcze"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do przystosowań tasiemca należą kształt dopasowany do jelita, narządy czepne i ochronna warstwa nabłonka."
  },
  {
    "id": "R02_NIC_01",
    "section": "Nicienie",
    "type": "single_choice",
    "prompt": "W których środowiskach żyją nicienie?",
    "options": [
      "W glebie, mule, wodzie, gorących źródłach i organizmach",
      "Wyłącznie w wodach słonych",
      "Tylko w jelicie cienkim człowieka",
      "Wyłącznie w powietrzu",
      "Tylko na skórze ryb",
      "Wyłącznie na suchych skałach"
    ],
    "answer": 0,
    "explanation": "Nicienie zamieszkują m.in. glebę, muł, szczątki organizmów, zbiorniki wodne, gorące źródła i wnętrza organizmów."
  },
  {
    "id": "R02_NIC_02",
    "section": "Nicienie",
    "type": "true_false",
    "prompt": "Ciało nicieni jest podzielone na pierścienie.",
    "options": null,
    "answer": false,
    "explanation": "Nicienie mają ciało niepodzielone na części; podział na pierścienie jest cechą pierścienic."
  },
  {
    "id": "R02_NIC_03",
    "section": "Nicienie",
    "type": "multi_select",
    "prompt": "Zaznacz cechy budowy ciała nicieni.",
    "image": "/img/r02_owsik_budowa.jpg",
    "options": [
      "nitkowato wydłużone ciało",
      "zwężenie na obu końcach",
      "brak podziału na części",
      "gruba warstwa ochronna",
      "ciało spłaszczone jak taśma",
      "liczne pierścienie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Ciało nicieni jest nitkowato wydłużone, zwężone na obu końcach, niepodzielone na części i pokryte ochronną warstwą."
  },
  {
    "id": "R02_NIC_04",
    "section": "Nicienie",
    "type": "fill_in",
    "prompt": "Większość nicieni to pasożyty __________ roślin i zwierząt, również __________.",
    "options": null,
    "answer": [
      "wewnętrzne",
      "człowieka"
    ],
    "altAnswers": [
      [
        "wewnętrzne",
        "wewnetrzne"
      ],
      [
        "człowieka",
        "czlowieka"
      ]
    ],
    "explanation": "Podręcznik podkreśla, że większość nicieni to pasożyty wewnętrzne roślin i zwierząt, także człowieka."
  },
  {
    "id": "R02_NIC_05",
    "section": "Nicienie",
    "type": "single_choice",
    "prompt": "Który nicień został podany w podręczniku jako pasożyt człowieka?",
    "image": "/img/r02_owsik_budowa.jpg",
    "options": [
      "owsik ludzki",
      "wypławek biały",
      "pijawka",
      "dżdżownica",
      "rurówka",
      "Pseudoceros bimarginatus"
    ],
    "answer": 0,
    "explanation": "Owsik ludzki występuje w jelicie grubym człowieka i wywołuje owsicę."
  },
  {
    "id": "R02_NIC_06",
    "section": "Nicienie",
    "type": "true_false",
    "prompt": "Owsik ludzki występuje w jelicie grubym człowieka, głównie u dzieci.",
    "options": null,
    "answer": true,
    "explanation": "W podręczniku owsik ludzki opisano jako pasożyta jelita grubego, częstego szczególnie u dzieci."
  },
  {
    "id": "R02_NIC_07",
    "section": "Nicienie",
    "type": "riddle",
    "prompt": "Choroba układu pokarmowego wywoływana przez owsika ludzkiego to...",
    "options": null,
    "answer": "owsica",
    "altAnswers": [
      "owsica",
      "owsicę",
      "owsica człowieka"
    ],
    "explanation": "Owsik ludzki wywołuje chorobę nazywaną owsicą."
  },
  {
    "id": "R02_NIC_08",
    "section": "Nicienie",
    "type": "single_choice",
    "prompt": "Jak człowiek zakaża się owsikami?",
    "options": [
      "Po połknięciu jaj owsika",
      "Po ukąszeniu komara",
      "Po zjedzeniu przebadanego mięsa",
      "Przez dotknięcie mokrej gleby czystymi rękami",
      "Przez wdychanie pyłku kwiatowego",
      "Po wejściu do czystej wody"
    ],
    "answer": 0,
    "explanation": "Do zakażenia dochodzi drogą pokarmową, gdy jaja owsika z brudnych rąk, warzyw lub owoców trafią do ust."
  },
  {
    "id": "R02_NIC_09",
    "section": "Nicienie",
    "type": "multi_select",
    "prompt": "Wybierz objawy lub skutki obecności owsików opisane w podręczniku.",
    "options": [
      "zaczerwienienie skóry w okolicach odbytu",
      "swędzenie skóry, szczególnie nocą",
      "przenoszenie jaj na ręce podczas drapania",
      "wyrastanie pierścieni na ciele",
      "tworzenie haczyków na głowie",
      "życie wyłącznie w wodzie"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Owsik składa jaja w okolicach odbytu, co powoduje zaczerwienienie i swędzenie skóry, szczególnie nocą."
  },
  {
    "id": "R02_NIC_10",
    "section": "Nicienie",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: gleba, muł, gorące źródła, przestrzeń kosmiczna.",
    "options": null,
    "answer": "przestrzeń kosmiczna",
    "explanation": "Gleba, muł i gorące źródła są wymienione jako środowiska nicieni, a przestrzeń kosmiczna nie."
  },
  {
    "id": "R02_NIC_11",
    "section": "Nicienie",
    "type": "match",
    "prompt": "Połącz pojęcie z opisem dotyczącym nicieni.",
    "options": null,
    "left": [
      "owsik ludzki",
      "warstwa ochronna",
      "nicienie glebowe",
      "jaja owsików"
    ],
    "right": [
      "pasożyt jelita grubego",
      "chroni pasożyta przed substancjami trawiennymi",
      "przyczyniają się do rozkładu szczątków",
      "mogą trafić do ust z brudnych rąk"
    ],
    "answer": {
      "owsik ludzki": "pasożyt jelita grubego",
      "warstwa ochronna": "chroni pasożyta przed substancjami trawiennymi",
      "nicienie glebowe": "przyczyniają się do rozkładu szczątków",
      "jaja owsików": "mogą trafić do ust z brudnych rąk"
    },
    "explanation": "Nicienie mają określone środowiska życia, ciało o charakterystycznym kształcie oraz pasożytniczego przedstawiciela — owsika."
  },
  {
    "id": "R02_NIC_12",
    "section": "Nicienie",
    "type": "scenario",
    "prompt": "Dziecko po zabawie zjada kanapkę bez mycia rąk. Na rękach mogą znajdować się jaja pasożyta, które po połknięciu wywołują chorobę. O jakim pasożycie mowa?",
    "options": [
      "owsik ludzki",
      "tasiemiec nieuzbrojony",
      "pijawka",
      "dżdżownica"
    ],
    "answer": 0,
    "explanation": "Opis pasuje do owsika ludzkiego, którego jaja mogą zostać połknięte z brudnych rąk."
  },
  {
    "id": "R02_NIC_13",
    "section": "Nicienie",
    "type": "single_choice",
    "prompt": "Dlaczego warstwa ochronna ciała jest ważna dla pasożytniczych nicieni?",
    "image": "/img/r02_owsik_budowa.jpg",
    "options": [
      "Chroni przed substancjami trawiennymi żywiciela",
      "Pozwala im oddychać płucami",
      "Tworzy pierścienie na ciele",
      "Służy do przecinania skóry żywiciela",
      "Umożliwia wytwarzanie członów",
      "Zastępuje oczy"
    ],
    "answer": 0,
    "explanation": "Ochronna warstwa zabezpiecza pasożyty przed działaniem substancji trawiennych żywiciela."
  },
  {
    "id": "R02_PIE_01",
    "section": "Pierścienice",
    "type": "single_choice",
    "prompt": "Skąd pochodzi nazwa „pierścienice”?",
    "image": "/img/r02_dzdzownica_budowa.jpg",
    "options": [
      "Od podziału ciała na pierścienie",
      "Od życia wyłącznie w pierścieniach drzew",
      "Od haczyków na główce",
      "Od nitkowatego ciała bez części",
      "Od kolistego pancerza",
      "Od braku otworu gębowego"
    ],
    "answer": 0,
    "explanation": "Nazwa tej grupy pochodzi od pierścieni, czyli części, na które podzielone jest ich wydłużone ciało."
  },
  {
    "id": "R02_PIE_02",
    "section": "Pierścienice",
    "type": "multi_select",
    "prompt": "Wybierz środowiska zamieszkiwane przez pierścienice.",
    "options": [
      "wody słone",
      "wody słodkie",
      "osady na dnie zbiorników",
      "gleba i ściółka",
      "przestrzeń kosmiczna",
      "wyłącznie wnętrze człowieka"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Pierścienice żyją w wodach słonych i słodkich, w osadach na dnie zbiorników, a także w glebie i ściółce."
  },
  {
    "id": "R02_PIE_03",
    "section": "Pierścienice",
    "type": "true_false",
    "prompt": "Dżdżownica żyje w glebie i odżywia się szczątkami organizmów zawartymi w ziemi.",
    "options": null,
    "answer": true,
    "explanation": "Dżdżownica żyje w glebie, a jej pokarmem są szczątki organizmów obecne w ziemi."
  },
  {
    "id": "R02_PIE_04",
    "section": "Pierścienice",
    "type": "single_choice",
    "prompt": "Ile mniej więcej pierścieni ma ciało dżdżownicy według podręcznika?",
    "image": "/img/r02_dzdzownica_budowa.jpg",
    "options": [
      "około 100",
      "około 10",
      "około 30",
      "około 1000",
      "dokładnie 2",
      "około 5"
    ],
    "answer": 0,
    "explanation": "Podręcznik podaje, że ciało dżdżownicy składa się z około 100 pierścieni."
  },
  {
    "id": "R02_PIE_05",
    "section": "Pierścienice",
    "type": "match",
    "prompt": "Połącz element budowy dżdżownicy z jego znaczeniem.",
    "image": "/img/r02_dzdzownica_budowa.jpg",
    "options": null,
    "left": [
      "spiczasty przód ciała",
      "szczecinki",
      "oskórek pokryty śluzem",
      "siodełko"
    ],
    "right": [
      "ułatwia drążenie w glebie",
      "ułatwiają poruszanie się",
      "chroni i ułatwia przemieszczanie",
      "uczestniczy w rozmnażaniu"
    ],
    "answer": {
      "spiczasty przód ciała": "ułatwia drążenie w glebie",
      "szczecinki": "ułatwiają poruszanie się",
      "oskórek pokryty śluzem": "chroni i ułatwia przemieszczanie",
      "siodełko": "uczestniczy w rozmnażaniu"
    },
    "explanation": "Spiczasty przód ułatwia drążenie w glebie, szczecinki ułatwiają ruch, a śluz chroni ciało i pomaga w przemieszczaniu."
  },
  {
    "id": "R02_PIE_06",
    "section": "Pierścienice",
    "type": "single_choice",
    "prompt": "Czym są pijawki w większości?",
    "image": "/img/r02_pijawka_budowa.jpg",
    "options": [
      "pasożytami zewnętrznymi",
      "pasożytami wewnętrznymi jelita cienkiego",
      "wyłącznie roślinożercami",
      "wyłącznie organizmami kopiącymi glebę",
      "wolno żyjącymi grzybami",
      "nicieniami glebowymi"
    ],
    "answer": 0,
    "explanation": "Pijawki są w większości pasożytami zewnętrznymi żywiącymi się krwią niektórych zwierząt."
  },
  {
    "id": "R02_PIE_07",
    "section": "Pierścienice",
    "type": "fill_in",
    "prompt": "Ciało pijawki składa się z około __________ pierścieni i ma przyssawki na __________ oraz ostatnim segmencie.",
    "image": "/img/r02_pijawka_budowa.jpg",
    "options": null,
    "answer": [
      "30",
      "pierwszym"
    ],
    "altAnswers": [
      [
        "30",
        "trzydziestu",
        "około 30"
      ],
      [
        "pierwszym",
        "1",
        "pierwszym segmencie"
      ]
    ],
    "explanation": "Pijawka ma około 30 pierścieni oraz przyssawki na pierwszym i ostatnim segmencie."
  },
  {
    "id": "R02_PIE_08",
    "section": "Pierścienice",
    "type": "true_false",
    "prompt": "Pijawka ma szczecinki na pierścieniach, tak jak dżdżownica.",
    "options": null,
    "answer": false,
    "explanation": "Schemat pijawki wskazuje brak szczecinek na pierścieniach."
  },
  {
    "id": "R02_PIE_09",
    "section": "Pierścienice",
    "type": "multi_select",
    "prompt": "Zaznacz cechy pijawki opisane w podręczniku.",
    "image": "/img/r02_pijawka_budowa.jpg",
    "options": [
      "przyssawki na pierwszym i ostatnim segmencie",
      "szczęki z ząbkami",
      "substancja znieczulająca",
      "substancja hamująca krzepnięcie krwi",
      "haczyki na główce",
      "siodełko używane do kopania"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Pijawka ma przyssawki, szczęki z ząbkami i może wpuszczać substancję znieczulającą oraz hamującą krzepnięcie krwi."
  },
  {
    "id": "R02_PIE_10",
    "section": "Pierścienice",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: dżdżownica, pijawka, rurówka, owsik.",
    "options": null,
    "answer": "owsik",
    "explanation": "Owsik jest nicieniem, a dżdżownica, pijawka i rurówka należą do pierścienic."
  },
  {
    "id": "R02_PIE_11",
    "section": "Pierścienice",
    "type": "riddle",
    "prompt": "Pierścienica żyjąca w glebie, spulchniająca ją i użyźniająca, to...",
    "options": null,
    "answer": "dżdżownica",
    "altAnswers": [
      "dżdżownica",
      "dzdzownica",
      "dżdżownica ziemna"
    ],
    "explanation": "Dżdżownica drąży tunele w glebie, ułatwiając dostęp powietrza i wody oraz poprawiając warunki wzrostu roślin."
  },
  {
    "id": "R02_PIE_12",
    "section": "Pierścienice",
    "type": "scenario",
    "prompt": "W ogrodzie widać zwierzę, które drąży tunele, zjada ziemię ze szczątkami organizmów i ułatwia dopływ powietrza oraz wody do korzeni. Które to zwierzę?",
    "options": [
      "dżdżownica",
      "tasiemiec uzbrojony",
      "owsik ludzki",
      "wypławek biały"
    ],
    "answer": 0,
    "explanation": "Opis dotyczy dżdżownicy, pożytecznej pierścienicy glebowej."
  },
  {
    "id": "R02_PIE_13",
    "section": "Pierścienice",
    "type": "single_choice",
    "prompt": "Jaką rolę pełni siodełko u dżdżownicy?",
    "image": "/img/r02_dzdzownica_budowa.jpg",
    "options": [
      "uczestniczy w rozmnażaniu",
      "służy do chwytania zdobyczy",
      "przecina skórę żywiciela",
      "chroni przed strawieniem",
      "reaguje na światło",
      "wytwarza nowe człony"
    ],
    "answer": 0,
    "explanation": "Siodełko jest narządem uczestniczącym w procesie rozmnażania dżdżownicy."
  },
  {
    "id": "R02_PRO_01",
    "section": "Profilaktyka pasożytów",
    "type": "single_choice",
    "prompt": "Jak najczęściej dochodzi do zakażenia tasiemcem według podręcznika?",
    "options": [
      "Po zjedzeniu surowego zakażonego mięsa",
      "Po wejściu do czystej rzeki",
      "Po dotknięciu dżdżownicy",
      "Po wdychaniu kurzu",
      "Po ukąszeniu pijawki",
      "Po zjedzeniu umytych owoców"
    ],
    "answer": 0,
    "explanation": "Do zakażenia tasiemcem dochodzi drogą pokarmową po zjedzeniu surowego mięsa wieprzowego lub wołowego zakażonego larwami."
  },
  {
    "id": "R02_PRO_02",
    "section": "Profilaktyka pasożytów",
    "type": "multi_select",
    "prompt": "Wybierz sposoby unikania zakażenia tasiemcem.",
    "image": "/img/r02_profilaktyka_pasozytow.jpg",
    "options": [
      "jedzenie mięsa przebadanego przez lekarza weterynarii",
      "unikanie surowych potraw mięsnych",
      "unikanie niedogotowanego mięsa",
      "poddawanie mięsa obróbce cieplnej",
      "jedzenie mięsa wyłącznie na surowo",
      "niemycie rąk po toalecie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Podręcznik zaleca jedzenie mięsa ze znanego, przebadanego źródła oraz unikanie mięsa surowego i niedogotowanego."
  },
  {
    "id": "R02_PRO_03",
    "section": "Profilaktyka pasożytów",
    "type": "fill_in",
    "prompt": "Mięso chroniące przed zakażeniem tasiemcem powinno być gotowane, __________ albo __________.",
    "options": null,
    "answer": [
      "pieczone",
      "smażone"
    ],
    "altAnswers": [
      [
        "pieczone",
        "upieczone",
        "pieczenie"
      ],
      [
        "smażone",
        "usmażone",
        "smażenie"
      ]
    ],
    "explanation": "Obróbka cieplna mięsa obejmuje gotowanie, pieczenie i smażenie."
  },
  {
    "id": "R02_PRO_04",
    "section": "Profilaktyka pasożytów",
    "type": "true_false",
    "prompt": "Jedzenie surowego lub niedogotowanego mięsa może zwiększać ryzyko zakażenia tasiemcem.",
    "options": null,
    "answer": true,
    "explanation": "Surowe lub niedogotowane mięso może zawierać larwy tasiemca, dlatego należy go unikać."
  },
  {
    "id": "R02_PRO_05",
    "section": "Profilaktyka pasożytów",
    "type": "single_choice",
    "prompt": "Która choroba jest skutkiem zakażenia owsikiem ludzkim?",
    "options": [
      "owsica",
      "tasiemczyca",
      "grypa",
      "próchnica",
      "ospa",
      "malaria"
    ],
    "answer": 0,
    "explanation": "Owsik ludzki wywołuje owsicę, czyli chorobę układu pokarmowego."
  },
  {
    "id": "R02_PRO_06",
    "section": "Profilaktyka pasożytów",
    "type": "multi_select",
    "prompt": "Zaznacz zachowania pomagające uniknąć zakażenia owsikami.",
    "image": "/img/r02_profilaktyka_pasozytow.jpg",
    "options": [
      "mycie rąk po skorzystaniu z toalety",
      "mycie rąk przed posiłkiem",
      "częsta zmiana bielizny i pościeli",
      "mycie owoców i warzyw",
      "obgryzanie paznokci",
      "wkładanie brudnych przedmiotów do ust"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Owsicy pomaga zapobiegać higiena: mycie rąk, mycie warzyw i owoców oraz częsta zmiana bielizny i pościeli."
  },
  {
    "id": "R02_PRO_07",
    "section": "Profilaktyka pasożytów",
    "type": "scenario",
    "prompt": "Po powrocie z placu zabaw dziecko chce od razu zjeść kanapkę. Która czynność najlepiej zmniejszy ryzyko zakażenia owsikami?",
    "options": [
      "dokładne umycie rąk",
      "zjedzenie kanapki jak najszybciej",
      "schowanie kanapki do kieszeni",
      "napicie się zimnej wody"
    ],
    "answer": 0,
    "explanation": "Jaja owsików mogą znajdować się na brudnych rękach, dlatego po powrocie do domu trzeba umyć ręce."
  },
  {
    "id": "R02_PRO_08",
    "section": "Profilaktyka pasożytów",
    "type": "match",
    "prompt": "Połącz pasożyta z drogą zakażenia.",
    "options": null,
    "left": [
      "tasiemiec",
      "owsik ludzki"
    ],
    "right": [
      "surowe lub niedogotowane zakażone mięso",
      "połknięcie jaj z brudnych rąk, warzyw lub owoców"
    ],
    "answer": {
      "tasiemiec": "surowe lub niedogotowane zakażone mięso",
      "owsik ludzki": "połknięcie jaj z brudnych rąk, warzyw lub owoców"
    },
    "explanation": "Tasiemcem można zakazić się przez surowe zakażone mięso, a owsikiem przez połknięcie jaj z brudnych rąk, warzyw lub owoców."
  },
  {
    "id": "R02_PRO_09",
    "section": "Profilaktyka pasożytów",
    "type": "sort",
    "prompt": "Przyporządkuj działania do choroby, której pomagają zapobiegać.",
    "options": null,
    "items": [
      "jedzenie przebadanego mięsa",
      "gotowanie, pieczenie lub smażenie mięsa",
      "częste mycie rąk",
      "mycie owoców i warzyw",
      "częsta zmiana bielizny i pościeli"
    ],
    "categories": [
      "tasiemczyca",
      "owsica"
    ],
    "answer": {
      "tasiemczyca": [
        "jedzenie przebadanego mięsa",
        "gotowanie, pieczenie lub smażenie mięsa"
      ],
      "owsica": [
        "częste mycie rąk",
        "mycie owoców i warzyw",
        "częsta zmiana bielizny i pościeli"
      ]
    },
    "explanation": "Profilaktyka tasiemczycy dotyczy głównie mięsa, a profilaktyka owsicy — higieny rąk, bielizny, pościeli oraz mycia warzyw i owoców."
  },
  {
    "id": "R02_PRO_10",
    "section": "Profilaktyka pasożytów",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: gotowanie mięsa, pieczenie mięsa, smażenie mięsa, obgryzanie paznokci.",
    "options": null,
    "answer": "obgryzanie paznokci",
    "explanation": "Gotowanie, pieczenie i smażenie to obróbka cieplna mięsa, a obgryzanie paznokci sprzyja przenoszeniu zanieczyszczeń do ust."
  },
  {
    "id": "R02_PRO_11",
    "section": "Profilaktyka pasożytów",
    "type": "true_false",
    "prompt": "Utrzymywanie toalety w czystości należy do sposobów zapobiegania zakażeniu owsikami.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik wymienia czystość toalety jako jedną z zasad higieny pomagających uniknąć owsicy."
  },
  {
    "id": "R02_PRO_12",
    "section": "Profilaktyka pasożytów",
    "type": "single_choice",
    "prompt": "Dlaczego częste mycie rąk pomaga chronić przed owsicą?",
    "options": [
      "usuwa jaja owsika z rąk, zanim trafią do ust",
      "zabija larwy tasiemca w mięsie",
      "powoduje znikanie pierścieni u pijawki",
      "zastępuje zmianę pościeli",
      "tworzy warstwę ochronną na nicieniu",
      "leczy ukąszenie pijawki"
    ],
    "answer": 0,
    "explanation": "Jaja owsika mogą znajdować się na brudnych rękach i trafić do ust, dlatego mycie rąk zmniejsza ryzyko zakażenia."
  },
  {
    "id": "R02_POR_01",
    "section": "Porównanie bezkręgowców",
    "type": "match",
    "prompt": "Połącz grupę bezkręgowców z charakterystyczną cechą budowy ciała.",
    "image": "/img/r02_porownanie_bezkregowcow.jpg",
    "options": null,
    "left": [
      "płazińce",
      "nicienie",
      "pierścienice"
    ],
    "right": [
      "ciało podłużne i spłaszczone",
      "ciało nitkowate, zwężone na końcach",
      "ciało podzielone na pierścienie"
    ],
    "answer": {
      "płazińce": "ciało podłużne i spłaszczone",
      "nicienie": "ciało nitkowate, zwężone na końcach",
      "pierścienice": "ciało podzielone na pierścienie"
    },
    "explanation": "Płazińce są spłaszczone, nicienie nitkowate i niepodzielone na części, a pierścienice mają ciało podzielone na pierścienie."
  },
  {
    "id": "R02_POR_02",
    "section": "Porównanie bezkręgowców",
    "type": "sort",
    "prompt": "Przyporządkuj przedstawicieli do grup bezkręgowców.",
    "options": null,
    "items": [
      "wypławek biały",
      "tasiemiec uzbrojony",
      "owsik ludzki",
      "dżdżownica",
      "pijawka"
    ],
    "categories": [
      "płazińce",
      "nicienie",
      "pierścienice"
    ],
    "answer": {
      "płazińce": [
        "wypławek biały",
        "tasiemiec uzbrojony"
      ],
      "nicienie": [
        "owsik ludzki"
      ],
      "pierścienice": [
        "dżdżownica",
        "pijawka"
      ]
    },
    "explanation": "Wypławek i tasiemiec to płazińce, owsik to nicień, a dżdżownica i pijawka to pierścienice."
  },
  {
    "id": "R02_POR_03",
    "section": "Porównanie bezkręgowców",
    "type": "single_choice",
    "prompt": "Które dwie grupy obejmują pasożyty wewnętrzne opisane w podręczniku?",
    "options": [
      "płazińce i nicienie",
      "płazińce i pierścienice",
      "nicienie i pierścienice",
      "tylko pierścienice",
      "tylko płazińce",
      "tylko nicienie"
    ],
    "answer": 0,
    "explanation": "Pasożytami wewnętrznymi są m.in. tasiemce wśród płazińców oraz owsiki wśród nicieni."
  },
  {
    "id": "R02_POR_04",
    "section": "Porównanie bezkręgowców",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady zwierząt wolno żyjących opisanych w rozdziale.",
    "options": [
      "wypławek biały",
      "nicienie glebowe",
      "dżdżownica",
      "tasiemiec uzbrojony",
      "owsik ludzki",
      "tasiemiec nieuzbrojony"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "W rozdziale jako wolno żyjące opisano m.in. wypławka, niektóre nicienie glebowe i dżdżownice; pijawki też należą do pierścienic, choć wiele z nich jest pasożytami zewnętrznymi."
  },
  {
    "id": "R02_POR_05",
    "section": "Porównanie bezkręgowców",
    "type": "true_false",
    "prompt": "Płazińce, nicienie i pierścienice należą do bezkręgowców.",
    "options": null,
    "answer": true,
    "explanation": "Cały rozdział omawia te trzy grupy jako zwierzęta bezkręgowe."
  },
  {
    "id": "R02_POR_06",
    "section": "Porównanie bezkręgowców",
    "type": "single_choice",
    "prompt": "Która grupa ma ciało niepodzielone na części i zwężone na obu końcach?",
    "image": "/img/r02_porownanie_bezkregowcow.jpg",
    "options": [
      "nicienie",
      "płazińce",
      "pierścienice",
      "ryby",
      "płazy",
      "owady"
    ],
    "answer": 0,
    "explanation": "Taką budowę mają nicienie."
  },
  {
    "id": "R02_POR_07",
    "section": "Porównanie bezkręgowców",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: wypławek biały, tasiemiec uzbrojony, tasiemiec nieuzbrojony, dżdżownica.",
    "options": null,
    "answer": "dżdżownica",
    "explanation": "Dżdżownica jest pierścienicą, a pozostałe organizmy to płazińce."
  },
  {
    "id": "R02_POR_08",
    "section": "Porównanie bezkręgowców",
    "type": "fill_in",
    "prompt": "Płazińce mają ciało __________, nicienie ciało __________, a pierścienice ciało podzielone na __________.",
    "options": null,
    "answer": [
      "spłaszczone",
      "nitkowate",
      "pierścienie"
    ],
    "altAnswers": [
      [
        "spłaszczone",
        "splaszczone",
        "podłużne i spłaszczone"
      ],
      [
        "nitkowate",
        "nitkowato wydłużone"
      ],
      [
        "pierścienie",
        "pierscienie"
      ]
    ],
    "explanation": "Te trzy grupy można odróżnić po kształcie i podziale ciała."
  },
  {
    "id": "R02_POR_09",
    "section": "Porównanie bezkręgowców",
    "type": "sort",
    "prompt": "Przyporządkuj tryb życia do grup, w których go opisano.",
    "options": null,
    "items": [
      "pasożyty wewnętrzne",
      "wolno żyjące w wodzie lub glebie",
      "pasożyty zewnętrzne",
      "rozluźnianie i użyźnianie gleby"
    ],
    "categories": [
      "płazińce",
      "nicienie",
      "pierścienice"
    ],
    "answer": {
      "płazińce": [
        "pasożyty wewnętrzne"
      ],
      "nicienie": [
        "wolno żyjące w wodzie lub glebie"
      ],
      "pierścienice": [
        "pasożyty zewnętrzne",
        "rozluźnianie i użyźnianie gleby"
      ]
    },
    "explanation": "Płazińce to głównie pasożyty wewnętrzne (tasiemce, przywry). Wśród nicieni jest wiele form wolno żyjących w wodzie i glebie. Pierścienice bywają pasożytami zewnętrznymi (pijawki), a dżdżownice rozluźniają i użyźniają glebę."
  },
  {
    "id": "R02_POR_10",
    "section": "Porównanie bezkręgowców",
    "type": "scenario",
    "prompt": "Uczeń ma rozpoznać grupę zwierzęcia. Zwierzę ma bardzo wydłużone ciało złożone z wielu pierścieni. Którą grupę powinien wskazać?",
    "image": "/img/r02_porownanie_bezkregowcow.jpg",
    "options": [
      "pierścienice",
      "płazińce",
      "nicienie",
      "parzydełkowce"
    ],
    "answer": 0,
    "explanation": "Ciało podzielone na pierścienie jest cechą pierścienic."
  },
  {
    "id": "R02_POR_11",
    "section": "Porównanie bezkręgowców",
    "type": "sequence",
    "prompt": "Ułóż od najbardziej spłaszczonego opisu ciała do opisu ciała z wyraźnymi pierścieniami.",
    "options": null,
    "items": [
      "ciało nitkowate, zwężone na końcach",
      "ciało podzielone na pierścienie",
      "ciało podłużne i spłaszczone"
    ],
    "answer": [
      "ciało podłużne i spłaszczone",
      "ciało nitkowate, zwężone na końcach",
      "ciało podzielone na pierścienie"
    ],
    "explanation": "Najpierw pasują płazińce o ciele spłaszczonym, potem nicienie o ciele nitkowatym, a na końcu pierścienice z ciałem podzielonym na pierścienie."
  },
  {
    "id": "R02_POR_12",
    "section": "Porównanie bezkręgowców",
    "type": "riddle",
    "prompt": "Grupa bezkręgowców, do której należą dżdżownica i pijawka, to...",
    "options": null,
    "answer": "pierścienice",
    "altAnswers": [
      "pierścienice",
      "pierscienice"
    ],
    "explanation": "Dżdżownica i pijawka są przedstawicielami pierścienic."
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który płaziniec opisany w rozdziale może osiągać do 10 m długości?",
    "options": [
      "tasiemiec nieuzbrojony",
      "tasiemiec uzbrojony",
      "wypławek biały",
      "Pseudoceros bimarginatus",
      "owsik ludzki",
      "pijawka"
    ],
    "answer": 0,
    "explanation": "W rozdziale podano, że tasiemiec nieuzbrojony może osiągać do 10 m długości."
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który płaziniec opisany w rozdziale osiąga zwykle 2–4 m długości?",
    "options": [
      "tasiemiec uzbrojony",
      "tasiemiec nieuzbrojony",
      "wypławek biały",
      "dżdżownica",
      "pijawka",
      "rurówka"
    ],
    "answer": 0,
    "explanation": "W rozdziale wskazano, że tasiemiec uzbrojony osiąga 2–4 m długości."
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Dojrzałe człony tasiemca wypełnione jajami odrywają się i są usuwane z kałem żywiciela.",
    "image": "/img/r02_tasiemiec_budowa.jpg",
    "options": null,
    "answer": true,
    "explanation": "Schemat tasiemca opisuje odrywanie się dojrzałych członów wypełnionych jajami i ich usuwanie z kałem."
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Niewielki nicień żyjący w glebie, pierwszy organizm wielokomórkowy, u którego poznano wszystkie geny, to...",
    "options": null,
    "answer": "Caenorhabditis elegans",
    "altAnswers": [
      "Caenorhabditis elegans",
      "cenorhabditis elegans",
      "C. elegans",
      "c elegans"
    ],
    "explanation": "Podręcznik podaje jako ciekawostkę gatunek Caenorhabditis elegans."
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Do czego mogą być wykorzystywane pożyteczne nicienie w rolnictwie według rozdziału?",
    "options": [
      "do zwalczania szkodników upraw",
      "do zapylania kwiatów",
      "do produkcji mleka",
      "do budowania kompostownika",
      "do przecinania skóry żywiciela",
      "do badania mięsa przez weterynarza"
    ],
    "answer": 0,
    "explanation": "W rozdziale podano, że nicienie mogą być używane do zwalczania szkodników upraw, głównie owadów."
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy przygotowania hodowli nicieni zgodnie z opisem w rozdziale.",
    "options": null,
    "items": [
      "dodaj drożdże, rozgniecionego banana i porcję startową nicieni",
      "zamknij pojemnik i odstaw go w ciepłe miejsce",
      "wsyp płatki i zalej gorącą wodą, aby powstała wilgotna masa",
      "wymieszaj i delikatnie spryskaj masę wodą"
    ],
    "answer": [
      "wsyp płatki i zalej gorącą wodą, aby powstała wilgotna masa",
      "dodaj drożdże, rozgniecionego banana i porcję startową nicieni",
      "wymieszaj i delikatnie spryskaj masę wodą",
      "zamknij pojemnik i odstaw go w ciepłe miejsce"
    ],
    "explanation": "Najpierw przygotowuje się wilgotną masę z płatków, potem dodaje składniki i porcję startową, miesza i spryskuje wodą, a następnie odstawia pojemnik w ciepłe miejsce."
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz korzyści wynikające z działalności pierścienic wymienione w rozdziale.",
    "options": [
      "spulchnianie i użyźnianie gleby",
      "oczyszczanie środowiska",
      "rozkładanie odpadów i osadów ze ścieków",
      "pokarm dla wielu zwierząt",
      "wywoływanie owsicy",
      "tworzenie larw w surowym mięsie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Pierścienice pomagają tworzyć i spulchniać glebę, oczyszczać środowisko, rozkładać odpady i osady oraz stanowią pokarm dla wielu zwierząt."
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Pijawki mogą przenosić choroby bakteryjne, wirusowe i pasożytnicze.",
    "image": "/img/r02_pijawka_budowa.jpg",
    "options": null,
    "answer": true,
    "explanation": "W znaczeniu pierścienic wymieniono, że pijawki mogą przenosić choroby bakteryjne, wirusowe i pasożytnicze."
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jak długie mogą być wapienne rurki rurek według ciekawostki o rurówkach?",
    "image": "/img/r02_rurowka_w_rurce.jpg",
    "options": [
      "20–30 cm",
      "2–3 cm",
      "2–4 m",
      "do 10 m",
      "około 100 cm",
      "około 9 m"
    ],
    "answer": 0,
    "explanation": "W ciekawostce podano, że wapienne rurki rurek mogą mieć 20–30 cm długości."
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Podczas porządkowania ogrodu uczeń chce wrzucić do kompostu kości, mięso i nabiał. Co powinien zrobić zgodnie z instrukcją z rozdziału?",
    "options": [
      "nie wrzucać tych produktów do kompostu",
      "wrzucić je jako odpadki zielone",
      "zalać je gorącą wodą i dodać do kompostu",
      "zakopać je jako porcję startową nicieni"
    ],
    "answer": 0,
    "explanation": "Instrukcja kompostowania ostrzega, aby nie wrzucać do kompostu m.in. kości, mięsa ani nabiału."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r02",
  number: 2,
  title: "Zwierzęta bezkręgowe: płazińce, nicienie, pierścienice",
  icon: "🪱",
  sectionOrder: [
  "Płazińce",
  "Nicienie",
  "Pierścienice",
  "Profilaktyka pasożytów",
  "Porównanie bezkręgowców",
  "Super trudne"
],
  sectionIcons: {
  "Płazińce": "🪱",
  "Nicienie": "🔬",
  "Pierścienice": "🌱",
  "Profilaktyka pasożytów": "🧼",
  "Porównanie bezkręgowców": "🔎",
  "Super trudne": "🔥"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
