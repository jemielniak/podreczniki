// Skróty sekcji (do identyfikatorów ćwiczeń):
//   CRO  = Cechy roślin
//   TKA  = Tkanki roślinne
//   MCH  = Mchy
//   PWS  = Paprociowe, widłakowe i skrzypowe
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R03_CRO_01",
    "section": "Cechy roślin",
    "type": "single_choice",
    "prompt": "Co pozwala większości roślin wytwarzać pokarm w procesie fotosyntezy?",
    "image": "r03_roznorodnosc_roslin.jpg",
    "options": [
      "dostęp do światła i chlorofil",
      "brak wody i ciemność",
      "wyłącznie obecność korzeni",
      "tylko życie w lesie",
      "pobieranie pokarmu od zwierząt",
      "brak zielonego barwnika"
    ],
    "answer": 0,
    "explanation": "Większość roślin ma chlorofil i potrzebuje dostępu do światła. Dzięki temu produkuje pokarm w procesie fotosyntezy."
  },
  {
    "id": "R03_CRO_02",
    "section": "Cechy roślin",
    "type": "true_false",
    "prompt": "Większość roślin jest samożywna, ponieważ w procesie fotosyntezy produkuje pokarm.",
    "options": null,
    "answer": true,
    "explanation": "Rośliny samożywne same wytwarzają pokarm dzięki fotosyntezie. W rozdziale zaznaczono jednak, że istnieją nieliczne wyjątki, np. rośliny pasożytnicze."
  },
  {
    "id": "R03_CRO_03",
    "section": "Cechy roślin",
    "type": "multi_select",
    "prompt": "Zaznacz środowiska wymienione w rozdziale jako miejsca życia roślin.",
    "image": "r03_roznorodnosc_roslin.jpg",
    "options": [
      "arktyczna tundra",
      "lasy tropikalne",
      "wody słodkie i słone",
      "gołe skały",
      "wyłącznie pustynie bez światła"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Rośliny żyją w bardzo różnych środowiskach: od tundry po lasy tropikalne, na łąkach i bagnach, w wodach słodkich i słonych, a nawet na gołych skałach."
  },
  {
    "id": "R03_CRO_04",
    "section": "Cechy roślin",
    "type": "fill_in",
    "prompt": "Zarodnik to pojedyncza komórka służąca do __________, a nasiono zawiera zarodek, substancje zapasowe i __________.",
    "options": null,
    "answer": [
      "rozmnażania",
      "łupinę nasienną"
    ],
    "altAnswers": [
      [
        "rozmnażania",
        "rozmnażanie"
      ],
      [
        "łupinę nasienną",
        "łupina nasienna"
      ]
    ],
    "explanation": "Zarodnik jest pojedynczą komórką służącą rozmnażaniu. Nasiono ma zarodek, zapasy pokarmu oraz łupinę nasienną, która je chroni."
  },
  {
    "id": "R03_CRO_05",
    "section": "Cechy roślin",
    "type": "match",
    "prompt": "Połącz kryterium z podziałem roślin, który z niego wynika.",
    "options": null,
    "left": [
      "zarodniki lub nasiona",
      "obecność tkanki przewodzącej",
      "chlorofil i dostęp do światła"
    ],
    "right": [
      "podział na zarodnikowe i nasienne",
      "podział na naczyniowe i nienaczyniowe",
      "warunki fotosyntezy"
    ],
    "answer": {
      "zarodniki lub nasiona": "podział na zarodnikowe i nasienne",
      "obecność tkanki przewodzącej": "podział na naczyniowe i nienaczyniowe",
      "chlorofil i dostęp do światła": "warunki fotosyntezy"
    },
    "explanation": "Rośliny można dzielić m.in. według sposobu rozmnażania i według obecności tkanki przewodzącej."
  },
  {
    "id": "R03_CRO_06",
    "section": "Cechy roślin",
    "type": "sort",
    "prompt": "Przyporządkuj grupy roślin do sposobu rozmnażania.",
    "image": "r03_podzial_roslin.jpg",
    "options": null,
    "items": [
      "mchy",
      "paprociowe",
      "widłakowe",
      "skrzypowe",
      "nagonasienne",
      "okrytonasienne"
    ],
    "categories": [
      "zarodnikowe",
      "nasienne"
    ],
    "answer": {
      "zarodnikowe": [
        "mchy",
        "paprociowe",
        "widłakowe",
        "skrzypowe"
      ],
      "nasienne": [
        "nagonasienne",
        "okrytonasienne"
      ]
    },
    "explanation": "Mchy, paprociowe, widłakowe i skrzypowe są roślinami zarodnikowymi. Nagonasienne i okrytonasienne są roślinami nasiennymi."
  },
  {
    "id": "R03_CRO_07",
    "section": "Cechy roślin",
    "type": "odd_one_out",
    "prompt": "Wskaż grupę, która nie pasuje do roślin zarodnikowych: mchy, paprociowe, widłakowe, okrytonasienne.",
    "options": null,
    "answer": "okrytonasienne",
    "explanation": "Okrytonasienne należą do roślin nasiennych, a mchy, paprociowe i widłakowe rozmnażają się zarodnikami."
  },
  {
    "id": "R03_CRO_08",
    "section": "Cechy roślin",
    "type": "riddle",
    "prompt": "Zielony barwnik, który nadaje roślinom kolor i uczestniczy w fotosyntezie, to...",
    "options": null,
    "answer": "chlorofil",
    "altAnswers": [
      "chlorofil",
      "chlorofilu"
    ],
    "explanation": "Chlorofil to zielony barwnik obecny w większości roślin. Dzięki niemu roślina może wykorzystywać energię światła w fotosyntezie."
  },
  {
    "id": "R03_CRO_09",
    "section": "Cechy roślin",
    "type": "scenario",
    "prompt": "Na schemacie podziału roślin widzisz grupę bez tkanki przewodzącej. Do której kategorii należy taka grupa?",
    "image": "r03_podzial_roslin.jpg",
    "options": [
      "rośliny nienaczyniowe",
      "rośliny naczyniowe",
      "rośliny nasienne",
      "rośliny okrytonasienne",
      "rośliny nagonasienne"
    ],
    "answer": 0,
    "explanation": "Rośliny bez tkanki przewodzącej to rośliny nienaczyniowe. W rozdziale jako przykład pokazano mchy."
  },
  {
    "id": "R03_CRO_10",
    "section": "Cechy roślin",
    "type": "single_choice",
    "prompt": "Które zdanie opisuje wyjątek od samożywności roślin?",
    "options": [
      "Niektóre rośliny pobierają od żywiciela wodę i substancje pokarmowe.",
      "Każda roślina zawsze wytwarza cały pokarm w korzeniach.",
      "Rośliny mogą żyć tylko w wodach słodkich.",
      "Rośliny nie potrzebują światła do fotosyntezy.",
      "Każda roślina ma nasiona ukryte w owocach."
    ],
    "answer": 0,
    "explanation": "W rozdziale podano, że nieliczne rośliny nie są samożywne, lecz pobierają wodę i substancje pokarmowe od żywiciela. Takie rośliny są pasożytami."
  },
  {
    "id": "R03_TKA_01",
    "section": "Tkanki roślinne",
    "type": "single_choice",
    "prompt": "Czym są tkanki roślinne?",
    "options": [
      "grupami wyspecjalizowanych komórek",
      "pojedynczymi zarodnikami",
      "zawsze tylko martwymi częściami rośliny",
      "nasionami ukrytymi w owocach",
      "wyłącznie zielonym barwnikiem"
    ],
    "answer": 0,
    "explanation": "Tkanki tworzą grupy wyspecjalizowanych komórek. Dzięki nim roślina sprawnie wykonuje różne czynności życiowe."
  },
  {
    "id": "R03_TKA_02",
    "section": "Tkanki roślinne",
    "type": "fill_in",
    "prompt": "Tkanki twórcze umożliwiają roślinie __________, a tkanki stałe pełnią odmienne __________.",
    "options": null,
    "answer": [
      "wzrost",
      "funkcje"
    ],
    "altAnswers": [
      [
        "wzrost",
        "rośnięcie"
      ],
      [
        "funkcje",
        "zadania"
      ]
    ],
    "explanation": "Komórki tkanek twórczych regularnie się dzielą, co powoduje wzrost. Tkanki stałe specjalizują się w różnych funkcjach."
  },
  {
    "id": "R03_TKA_03",
    "section": "Tkanki roślinne",
    "type": "match",
    "prompt": "Połącz rodzaj tkanki z jej funkcją.",
    "image": "r03_tkanki_tworcze.jpg",
    "options": null,
    "left": [
      "tkanka twórcza wierzchołkowa",
      "tkanka twórcza boczna",
      "tkanka okrywająca",
      "tkanka przewodząca"
    ],
    "right": [
      "wzrost rośliny na długość",
      "zwiększanie obwodu rośliny",
      "ochrona i wymiana substancji z otoczeniem",
      "transport substancji w roślinie"
    ],
    "answer": {
      "tkanka twórcza wierzchołkowa": "wzrost rośliny na długość",
      "tkanka twórcza boczna": "zwiększanie obwodu rośliny",
      "tkanka okrywająca": "ochrona i wymiana substancji z otoczeniem",
      "tkanka przewodząca": "transport substancji w roślinie"
    },
    "explanation": "Tkanka wierzchołkowa odpowiada za wzrost na długość, boczna za wzrost na grubość, okrywająca chroni, a przewodząca transportuje substancje."
  },
  {
    "id": "R03_TKA_04",
    "section": "Tkanki roślinne",
    "type": "true_false",
    "prompt": "Tkanki twórcze boczne występują tylko wewnątrz zdrewniałych łodyg i korzeni.",
    "image": "r03_tkanki_tworcze.jpg",
    "options": null,
    "answer": true,
    "explanation": "W rozdziale podano, że tkanki twórcze boczne występują w zdrewniałych łodygach i korzeniach oraz zwiększają obwód rośliny."
  },
  {
    "id": "R03_TKA_05",
    "section": "Tkanki roślinne",
    "type": "single_choice",
    "prompt": "Która tkanka składa się z drewna i łyka?",
    "image": "r03_tkanki_stale.jpg",
    "options": [
      "tkanka przewodząca",
      "tkanka okrywająca",
      "tkanka wzmacniająca",
      "tkanka miękiszowa",
      "tkanka twórcza wierzchołkowa"
    ],
    "answer": 0,
    "explanation": "Drewno i łyko są elementami tkanki przewodzącej. Umożliwiają transport wody, soli mineralnych i substancji pokarmowych."
  },
  {
    "id": "R03_TKA_06",
    "section": "Tkanki roślinne",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje skórki części nadziemnych rośliny.",
    "image": "r03_tkanki_stale.jpg",
    "options": [
      "zabezpiecza przed utratą wody",
      "umożliwia wymianę gazową",
      "może wytwarzać włoski i kolce",
      "wytwarza włośniki do pobierania wody z gleby",
      "tworzy nasiona w zarodniach"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Skórka części nadziemnych chroni przed utratą wody, umożliwia wymianę gazową dzięki aparatom szparkowym oraz może wytwarzać włoski i kolce."
  },
  {
    "id": "R03_TKA_07",
    "section": "Tkanki roślinne",
    "type": "riddle",
    "prompt": "Cienkie wypustki skórki korzenia, które zwiększają powierzchnię wchłaniania wody i soli mineralnych, to...",
    "options": null,
    "answer": "włośniki",
    "altAnswers": [
      "włośniki",
      "wlosniki"
    ],
    "explanation": "Włośniki zwiększają powierzchnię, przez którą korzeń pobiera wodę z solami mineralnymi."
  },
  {
    "id": "R03_TKA_08",
    "section": "Tkanki roślinne",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do tkanek stałych: okrywająca, miękiszowa, przewodząca, wierzchołkowa.",
    "options": null,
    "answer": "wierzchołkowa",
    "explanation": "Tkanka wierzchołkowa jest tkanką twórczą, a okrywająca, miękiszowa i przewodząca należą do tkanek stałych."
  },
  {
    "id": "R03_TKA_09",
    "section": "Tkanki roślinne",
    "type": "sort",
    "prompt": "Podziel tkanki roślinne na twórcze i stałe.",
    "options": null,
    "items": [
      "wierzchołkowe",
      "boczne",
      "okrywające",
      "miękiszowe",
      "przewodzące",
      "wzmacniające"
    ],
    "categories": [
      "twórcze",
      "stałe"
    ],
    "answer": {
      "twórcze": [
        "wierzchołkowe",
        "boczne"
      ],
      "stałe": [
        "okrywające",
        "miękiszowe",
        "przewodzące",
        "wzmacniające"
      ]
    },
    "explanation": "Tkanki twórcze to wierzchołkowe i boczne. Tkanki stałe to okrywające, miękiszowe, przewodzące i wzmacniające."
  },
  {
    "id": "R03_TKA_10",
    "section": "Tkanki roślinne",
    "type": "scenario",
    "prompt": "W bulwie ziemniaka komórki gromadzą materiały zapasowe. Który typ tkanki wykonuje takie zadanie?",
    "options": [
      "tkanka miękiszowa",
      "tkanka twórcza boczna",
      "tkanka okrywająca",
      "drewno",
      "włośniki"
    ],
    "answer": 0,
    "explanation": "Tkanki miękiszowe mogą gromadzić materiały zapasowe, np. w bulwach ziemniaka."
  },
  {
    "id": "R03_TKA_11",
    "section": "Tkanki roślinne",
    "type": "true_false",
    "prompt": "Drewno transportuje wodę i sole mineralne z korzeni do pozostałych części roślin.",
    "options": null,
    "answer": true,
    "explanation": "Drewno przewodzi wodę i sole mineralne ku częściom nadziemnym rośliny. Łyko transportuje substancje pokarmowe."
  },
  {
    "id": "R03_TKA_12",
    "section": "Tkanki roślinne",
    "type": "fill_in",
    "prompt": "Łyko transportuje __________ z liści i zielonej łodygi, a drewno transportuje wodę i __________.",
    "image": "r03_tkanki_stale.jpg",
    "options": null,
    "answer": [
      "substancje pokarmowe",
      "sole mineralne"
    ],
    "altAnswers": [
      [
        "substancje pokarmowe",
        "pokarm"
      ],
      [
        "sole mineralne",
        "solami mineralnymi"
      ]
    ],
    "explanation": "Łyko rozprowadza substancje pokarmowe, natomiast drewno przewodzi wodę z solami mineralnymi."
  },
  {
    "id": "R03_TKA_13",
    "section": "Tkanki roślinne",
    "type": "match",
    "prompt": "Połącz element lub tkankę z opisem.",
    "options": null,
    "left": [
      "tkanka miękiszowa",
      "tkanka wzmacniająca",
      "drewno",
      "łyko"
    ],
    "right": [
      "wypełnia przestrzenie i gromadzi zapasy",
      "nadaje sztywność i elastyczność",
      "transportuje wodę i sole mineralne",
      "transportuje substancje pokarmowe"
    ],
    "answer": {
      "tkanka miękiszowa": "wypełnia przestrzenie i gromadzi zapasy",
      "tkanka wzmacniająca": "nadaje sztywność i elastyczność",
      "drewno": "transportuje wodę i sole mineralne",
      "łyko": "transportuje substancje pokarmowe"
    },
    "explanation": "Tkanki mają różne zadania: miękisz wypełnia i magazynuje, tkanka wzmacniająca nadaje sztywność, drewno przewodzi wodę, a łyko substancje pokarmowe."
  },
  {
    "id": "R03_MCH_01",
    "section": "Mchy",
    "type": "single_choice",
    "prompt": "Czym mech jest przymocowany do podłoża?",
    "image": "r03_budowa_mchu.jpg",
    "options": [
      "chwytnikami",
      "korzeniami palowymi",
      "owocami",
      "szyszkami",
      "włośnikami liści"
    ],
    "answer": 0,
    "explanation": "Mchy są przymocowane do podłoża chwytnikami. Chwytniki pobierają wodę z solami mineralnymi, ale nie są prawdziwymi korzeniami."
  },
  {
    "id": "R03_MCH_02",
    "section": "Mchy",
    "type": "true_false",
    "prompt": "Mchy są małe i niskie między innymi dlatego, że nie mają tkanek przewodzących.",
    "options": null,
    "answer": true,
    "explanation": "Brak tkanek przewodzących utrudnia mchom rozprowadzanie wody i substancji pokarmowych po całym organizmie, dlatego zwykle są niewysokie."
  },
  {
    "id": "R03_MCH_03",
    "section": "Mchy",
    "type": "multi_select",
    "prompt": "Zaznacz elementy budowy mchu opisane w rozdziale.",
    "image": "r03_budowa_mchu.jpg",
    "options": [
      "chwytniki",
      "łodyżka z listkami",
      "trzonek",
      "zarodnia",
      "kwiat",
      "owoc"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Mech ma chwytniki i ulistnioną łodyżkę, a w czasie rozmnażania także trzonek i zarodnię z zarodnikami."
  },
  {
    "id": "R03_MCH_04",
    "section": "Mchy",
    "type": "fill_in",
    "prompt": "Na szczycie ulistnionej łodyżki wyrasta bezlistna __________ zakończona __________.",
    "image": "r03_budowa_mchu.jpg",
    "options": null,
    "answer": [
      "trzonek",
      "zarodnią"
    ],
    "altAnswers": [
      [
        "trzonek",
        "łodyżka bezlistna"
      ],
      [
        "zarodnią",
        "zarodnia"
      ]
    ],
    "explanation": "U mchu podczas rozmnażania wyrasta trzonek, a na jego końcu znajduje się zarodnia, w której dojrzewają zarodniki."
  },
  {
    "id": "R03_MCH_05",
    "section": "Mchy",
    "type": "sequence",
    "prompt": "Ułóż etapy rozsiewania zarodników mchu w poprawnej kolejności.",
    "options": null,
    "items": [
      "zarodniki wysypują się z zarodni",
      "z zarodników wyrastają nowe rośliny",
      "zarodniki dojrzewają w zarodni",
      "z zarodni odpada czepek"
    ],
    "answer": [
      "zarodniki dojrzewają w zarodni",
      "z zarodni odpada czepek",
      "zarodniki wysypują się z zarodni",
      "z zarodników wyrastają nowe rośliny"
    ],
    "explanation": "Zarodniki dojrzewają w zarodni. Gdy dojrzeją, czepek odpada, zarodniki się wysypują, a z nich wyrastają nowe rośliny."
  },
  {
    "id": "R03_MCH_06",
    "section": "Mchy",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie pasuje do budowy mchu: chwytniki, łodyżka, listki, korzeń.",
    "image": "r03_budowa_mchu.jpg",
    "options": null,
    "answer": "korzeń",
    "explanation": "Mchy mają chwytniki oraz łodyżkę z listkami. Nie mają prawdziwych korzeni."
  },
  {
    "id": "R03_MCH_07",
    "section": "Mchy",
    "type": "match",
    "prompt": "Połącz element mchu z jego funkcją lub opisem.",
    "options": null,
    "left": [
      "chwytniki",
      "zarodnia",
      "czepek",
      "listki"
    ],
    "right": [
      "pobierają wodę z solami mineralnymi",
      "miejsce dojrzewania zarodników",
      "ochrania zarodnię",
      "chłoną wodę także powierzchnią"
    ],
    "answer": {
      "chwytniki": "pobierają wodę z solami mineralnymi",
      "zarodnia": "miejsce dojrzewania zarodników",
      "czepek": "ochrania zarodnię",
      "listki": "chłoną wodę także powierzchnią"
    },
    "explanation": "Poszczególne elementy mchu pełnią różne funkcje: chwytniki pobierają wodę, zarodnia wytwarza zarodniki, a czepek ją chroni."
  },
  {
    "id": "R03_MCH_08",
    "section": "Mchy",
    "type": "scenario",
    "prompt": "Po wycięciu lasu na stromym zboczu znika też warstwa mchów. Dlaczego może wzrosnąć ryzyko powodzi po intensywnym deszczu?",
    "image": "r03_mchy_woda_i_schronienie.jpg",
    "options": [
      "bo mchy zatrzymują dużo wody i spowalniają jej spływ",
      "bo mchy przyspieszają odpływ wody do rzek",
      "bo mchy zamieniają wodę w nasiona",
      "bo mchy rosną tylko w suchym piasku",
      "bo mchy niszczą glebę podczas deszczu"
    ],
    "answer": 0,
    "explanation": "Mchy zatrzymują ogromne ilości wody. Dzięki temu woda podczas opadów nie spływa gwałtownie po stoku."
  },
  {
    "id": "R03_MCH_09",
    "section": "Mchy",
    "type": "riddle",
    "prompt": "Organizmy, które pojawiają się jako jedne z pierwszych na skałach lub nieużytkach i przyczyniają się do powstawania gleby, to organizmy...",
    "options": null,
    "answer": "pionierskie",
    "altAnswers": [
      "pionierskie",
      "organizmy pionierskie"
    ],
    "explanation": "Mchy są organizmami pionierskimi, ponieważ zasiedlają trudne miejsca jako jedne z pierwszych i pomagają w tworzeniu gleby."
  },
  {
    "id": "R03_MCH_10",
    "section": "Mchy",
    "type": "single_choice",
    "prompt": "W jakich warunkach z obumarłych części mchów i szczątków innych organizmów powstaje torf?",
    "image": "r03_mchy_woda_i_schronienie.jpg",
    "options": [
      "na podtopionych terenach w warunkach beztlenowych",
      "wyłącznie na suchych skałach i w pełnym słońcu",
      "tylko w słonej wodzie morskiej",
      "w zarodniach paproci",
      "z samych nasion roślin nasiennych"
    ],
    "answer": 0,
    "explanation": "Torf powstaje na podtopionych terenach, w warunkach beztlenowych, z obumarłych części mchów oraz szczątków innych organizmów."
  },
  {
    "id": "R03_MCH_11",
    "section": "Mchy",
    "type": "true_false",
    "prompt": "W Polsce występuje około 500 gatunków mchów, a około 200 z nich objęto ochroną prawną.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział podaje, że w Polsce jest około 500 gatunków mchów, w tym około 200 objętych ochroną."
  },
  {
    "id": "R03_MCH_12",
    "section": "Mchy",
    "type": "fill_in",
    "prompt": "Mchy są zielone przez cały __________ i zwykle żyją w zwartych __________.",
    "options": null,
    "answer": [
      "rok",
      "grupach"
    ],
    "altAnswers": [
      [
        "rok",
        "cały rok"
      ],
      [
        "grupach",
        "skupiskach"
      ]
    ],
    "explanation": "Mchy są zielone cały rok i często rosną w zwartych grupach, dzięki czemu mogą gromadzić duże ilości wody."
  },
  {
    "id": "R03_MCH_13",
    "section": "Mchy",
    "type": "sort",
    "prompt": "Rozdziel przykłady na zagrożenia dla mchów i znaczenie mchów w przyrodzie.",
    "image": "r03_mchy_woda_i_schronienie.jpg",
    "options": null,
    "items": [
      "zanieczyszczenie powietrza",
      "osuszanie torfowisk",
      "masowa turystyka",
      "zatrzymywanie wody",
      "schronienie dla zwierząt",
      "powstawanie gleby"
    ],
    "categories": [
      "zagrożenia dla mchów",
      "znaczenie mchów"
    ],
    "answer": {
      "zagrożenia dla mchów": [
        "zanieczyszczenie powietrza",
        "osuszanie torfowisk",
        "masowa turystyka"
      ],
      "znaczenie mchów": [
        "zatrzymywanie wody",
        "schronienie dla zwierząt",
        "powstawanie gleby"
      ]
    },
    "explanation": "Mchom zagrażają m.in. zanieczyszczenia i osuszanie torfowisk. W przyrodzie zatrzymują wodę, dają schronienie i pomagają tworzyć glebę."
  },
  {
    "id": "R03_PWS_01",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "single_choice",
    "prompt": "Do jakiej wspólnej grupy należą paprociowe, widłakowe i skrzypowe?",
    "image": "r03_paproc_budowa.jpg",
    "options": [
      "zarodnikowe rośliny naczyniowe",
      "nasienne rośliny nienaczyniowe",
      "wyłącznie rośliny pasożytnicze",
      "rośliny okrytonasienne",
      "mchy bez tkanek przewodzących"
    ],
    "answer": 0,
    "explanation": "Paprociowe, widłakowe i skrzypowe są zarodnikowymi roślinami naczyniowymi: rozmnażają się przez zarodniki i mają tkankę przewodzącą."
  },
  {
    "id": "R03_PWS_02",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "true_false",
    "prompt": "Tkanka przewodząca pozwala paprociowym, widłakowym i skrzypowym osiągać większe rozmiary niż mchy.",
    "options": null,
    "answer": true,
    "explanation": "Drewno i łyko rozprowadzają substancje po roślinie. Dzięki temu te grupy mogą być większe niż mchy, które nie mają tkanek przewodzących."
  },
  {
    "id": "R03_PWS_03",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "multi_select",
    "prompt": "Zaznacz wspólne cechy paprociowych, widłakowych i skrzypowych wymienione w rozdziale.",
    "image": "r03_porownanie_zarodnikowych.jpg",
    "options": [
      "rozmnażają się za pomocą zarodników",
      "mają tkankę przewodzącą",
      "w lasach tworzą runo leśne",
      "są miejscem życia małych zwierząt",
      "wytwarzają owoce z nasionami"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Te trzy grupy rozmnażają się zarodnikami, mają tkankę przewodzącą, tworzą runo leśne i są miejscem życia małych zwierząt."
  },
  {
    "id": "R03_PWS_04",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "fill_in",
    "prompt": "Tkanka przewodząca składa się z __________ oraz __________.",
    "options": null,
    "answer": [
      "drewna",
      "łyka"
    ],
    "altAnswers": [
      [
        "drewna",
        "drewno"
      ],
      [
        "łyka",
        "łyko"
      ]
    ],
    "explanation": "W rozdziale podkreślono, że tkanka przewodząca obejmuje drewno i łyko."
  },
  {
    "id": "R03_PWS_05",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "match",
    "prompt": "Połącz grupę roślin z cechą rozpoznawczą.",
    "image": "r03_porownanie_zarodnikowych.jpg",
    "options": null,
    "left": [
      "paprociowe",
      "widłakowe",
      "skrzypowe"
    ],
    "right": [
      "duże liście na ogonkach",
      "płożąca łodyga i widlasto rozgałęzione pędy",
      "członowane pędy i liście wyrastające z węzłów"
    ],
    "answer": {
      "paprociowe": "duże liście na ogonkach",
      "widłakowe": "płożąca łodyga i widlasto rozgałęzione pędy",
      "skrzypowe": "członowane pędy i liście wyrastające z węzłów"
    },
    "explanation": "Paprociowe mają duże liście, widłakowe płożące łodygi i widlaste pędy, a skrzypowe członowaną budowę."
  },
  {
    "id": "R03_PWS_06",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "scenario",
    "prompt": "Podczas obserwacji rośliny widzisz duży liść na ogonku, a na jego spodzie skupiska zarodni. Do której grupy najpewniej należy ta roślina?",
    "image": "r03_paproc_budowa.jpg",
    "options": [
      "paprociowe",
      "mchy",
      "skrzypowe",
      "widłakowe",
      "nagonasienne"
    ],
    "answer": 0,
    "explanation": "Skupiska zarodni na spodniej stronie liści są cechą opisaną przy paprociowych."
  },
  {
    "id": "R03_PWS_07",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "odd_one_out",
    "prompt": "Wskaż roślinę, która nie pasuje do paprociowych: pióropusznik strusi, nerecznica samcza, salwinia pływająca, skrzyp polny.",
    "image": "r03_paproc_budowa.jpg",
    "options": null,
    "answer": "skrzyp polny",
    "explanation": "Skrzyp polny należy do skrzypowych. Pióropusznik, nerecznica i salwinia to przykłady paprociowych."
  },
  {
    "id": "R03_PWS_08",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "true_false",
    "prompt": "Wszystkie gatunki widłakowe występujące w Polsce są pod ochroną.",
    "options": null,
    "answer": true,
    "explanation": "W rozdziale podano, że wszystkie gatunki widłakowe w Polsce są chronione."
  },
  {
    "id": "R03_PWS_09",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "single_choice",
    "prompt": "Którą grupę wyróżniają pędy zbudowane z członów i liście wyrastające z węzłów?",
    "image": "r03_skrzyp_budowa.jpg",
    "options": [
      "skrzypowe",
      "paprociowe",
      "widłakowe",
      "mchy",
      "rośliny okrytonasienne"
    ],
    "answer": 0,
    "explanation": "Członowane pędy i liście wyrastające z węzłów to cechy skrzypowych."
  },
  {
    "id": "R03_PWS_10",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "riddle",
    "prompt": "Podziemna łodyga paproci, z której wyrastają korzenie i liście, to...",
    "options": null,
    "answer": "kłącze",
    "altAnswers": [
      "kłącze",
      "klacze"
    ],
    "explanation": "W budowie paproci pokazano kłącze, czyli podziemną łodygę."
  },
  {
    "id": "R03_PWS_11",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do grup roślin.",
    "image": "r03_widlak_budowa.jpg",
    "options": null,
    "items": [
      "duże liście na ogonkach",
      "widlaste rozgałęzienia pędów",
      "płożąca łodyga",
      "członowana budowa pędów",
      "pęd wiosenny z zarodniami"
    ],
    "categories": [
      "paprociowe",
      "widłakowe",
      "skrzypowe"
    ],
    "answer": {
      "paprociowe": [
        "duże liście na ogonkach"
      ],
      "widłakowe": [
        "widlaste rozgałęzienia pędów",
        "płożąca łodyga"
      ],
      "skrzypowe": [
        "członowana budowa pędów",
        "pęd wiosenny z zarodniami"
      ]
    },
    "explanation": "Cechy rozpoznawcze pomagają odróżnić paprociowe, widłakowe i skrzypowe."
  },
  {
    "id": "R03_PWS_12",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "match",
    "prompt": "Połącz przykład rośliny z właściwą grupą.",
    "options": null,
    "left": [
      "paprotka zwyczajna",
      "widłak goździsty",
      "skrzyp polny",
      "salwinia pływająca"
    ],
    "right": [
      "paprociowe lądowe",
      "widłakowe",
      "skrzypowe",
      "paprociowe wodne"
    ],
    "answer": {
      "paprotka zwyczajna": "paprociowe lądowe",
      "widłak goździsty": "widłakowe",
      "skrzyp polny": "skrzypowe",
      "salwinia pływająca": "paprociowe wodne"
    },
    "explanation": "Rozdział podaje liczne przykłady: paprotka jest paprocią, widłak goździsty należy do widłakowych, skrzyp polny do skrzypowych, a salwinia to paproć wodna."
  },
  {
    "id": "R03_PWS_13",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "sequence",
    "prompt": "Ułóż w kolejności uproszczony opis powstania pokładów węgla z dawnych roślin zarodnikowych.",
    "options": null,
    "items": [
      "ze szczątków powstawały pokłady węgla",
      "szczątki roślin gromadziły się przez bardzo długi czas",
      "w dawnych lasach rosły olbrzymie paprocie, widłaki i skrzypy",
      "rośliny obumierały"
    ],
    "answer": [
      "w dawnych lasach rosły olbrzymie paprocie, widłaki i skrzypy",
      "rośliny obumierały",
      "szczątki roślin gromadziły się przez bardzo długi czas",
      "ze szczątków powstawały pokłady węgla"
    ],
    "explanation": "Rozdział wyjaśnia, że wielkie dawne paprocie, widłaki i skrzypy odegrały rolę w powstawaniu pokładów węgla."
  },
  {
    "id": "R03_PWS_14",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "multi_select",
    "prompt": "Zaznacz znaczenie paprociowych, widłakowych i skrzypowych opisane w rozdziale.",
    "options": [
      "są składnikiem runa leśnego",
      "są pożywieniem roślinożerców",
      "dają schronienie małym zwierzętom",
      "odegrały rolę w powstawaniu węgla",
      "wytwarzają owoce z nasionami"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Te rośliny są składnikiem runa leśnego, pożywieniem roślinożerców i miejscem życia małych zwierząt. Dawne formy przyczyniły się też do powstania pokładów węgla."
  },
  {
    "id": "R03_HARD_01",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Nasiono różni się od zarodnika, bo ma zarodek, substancje zapasowe i __________, a zarodnik nie ma warstwy __________.",
    "options": null,
    "answer": [
      "łupinę nasienną",
      "ochronnej"
    ],
    "altAnswers": [
      [
        "łupinę nasienną",
        "łupina nasienna"
      ],
      [
        "ochronnej",
        "ochronna"
      ]
    ],
    "explanation": "Nasiono jest lepiej zabezpieczone, ponieważ ma łupinę nasienną. Zarodnik to pojedyncza komórka bez warstwy ochronnej."
  },
  {
    "id": "R03_HARD_02",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Kanianka polna owija się wokół innej rośliny, nie ma chlorofilu i ssawkami pobiera pokarm z wiązek przewodzących żywiciela. Dlaczego nie może przeprowadzać fotosyntezy?",
    "options": [
      "bo w jej komórkach nie ma chlorofilu",
      "bo ma zbyt wiele łodyg",
      "bo rośnie wyłącznie w wodzie",
      "bo nie ma żadnych komórek",
      "bo ma łupinę nasienną"
    ],
    "answer": 0,
    "explanation": "Do fotosyntezy potrzebny jest chlorofil. Skoro w komórkach kanianki nie ma chlorofilu, roślina nie może wytwarzać pokarmu w ten sposób."
  },
  {
    "id": "R03_HARD_03",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Tkanki okrywające należą do tkanek twórczych.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz. Tkanki okrywające należą do tkanek stałych, a nie twórczych."
  },
  {
    "id": "R03_HARD_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz cechy skrzypowych opisane w rozdziale.",
    "image": "r03_skrzyp_budowa.jpg",
    "options": [
      "pędy zbudowane z członów",
      "liście wyrastające z węzłów",
      "u niektórych pędy wiosenne z zarodniami i letnie zielone",
      "duże liście złożone z wielu listków",
      "płożąca łodyga z widlastymi pędami"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Skrzypowe mają członowane pędy i liście wyrastające z węzłów. Niektóre gatunki mają pędy wiosenne z zarodniami i letnie zielone."
  },
  {
    "id": "R03_HARD_05",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż czynności doświadczenia badającego zmianę masy mchu po namoczeniu.",
    "image": "r03_mchy_woda_i_schronienie.jpg",
    "options": null,
    "items": [
      "odsącz mech na sitku przez około 5 minut",
      "zanurz mech w wodzie na około 15 minut",
      "zważ wysuszoną kępkę mchu",
      "zważ odsączony mech i oblicz wzrost masy"
    ],
    "answer": [
      "zważ wysuszoną kępkę mchu",
      "zanurz mech w wodzie na około 15 minut",
      "odsącz mech na sitku przez około 5 minut",
      "zważ odsączony mech i oblicz wzrost masy"
    ],
    "explanation": "W doświadczeniu najpierw waży się suchy mech, potem moczy go w wodzie, odsącza, ponownie waży i oblicza zmianę masy."
  },
  {
    "id": "R03_HARD_06",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz zjawisko z jego wyjaśnieniem.",
    "image": "r03_porownanie_zarodnikowych.jpg",
    "options": null,
    "left": [
      "monitoring środowiska",
      "powstawanie torfu",
      "runo leśne",
      "większe rozmiary niż u mchów"
    ],
    "right": [
      "mchy są czułe na zanieczyszczenia",
      "torfowce rosną u góry i obumierają od dołu",
      "paprociowe, widłakowe i skrzypowe tworzą warstwę lasu",
      "tkanka przewodząca rozprowadza substancje"
    ],
    "answer": {
      "monitoring środowiska": "mchy są czułe na zanieczyszczenia",
      "powstawanie torfu": "torfowce rosną u góry i obumierają od dołu",
      "runo leśne": "paprociowe, widłakowe i skrzypowe tworzą warstwę lasu",
      "większe rozmiary niż u mchów": "tkanka przewodząca rozprowadza substancje"
    },
    "explanation": "Zależności między cechami roślin a ich znaczeniem pomagają zrozumieć materiał z kilku lekcji naraz."
  },
  {
    "id": "R03_HARD_07",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Dlaczego podczas suszy listki mchów ściśle przylegają do łodyżki?",
    "options": [
      "aby zmniejszyć powierzchnię parowania i utratę wody",
      "aby szybciej wypuścić nasiona",
      "aby zwiększyć działanie drewna i łyka",
      "aby wytworzyć kwiaty",
      "aby odrzucić chwytniki"
    ],
    "answer": 0,
    "explanation": "Podczas suszy listki przylegają do łodyżki, aby zmniejszyć powierzchnię parowania i ograniczyć utratę wody."
  },
  {
    "id": "R03_HARD_08",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj grupy roślin do kategorii naczyniowych i nienaczyniowych.",
    "image": "r03_podzial_roslin.jpg",
    "options": null,
    "items": [
      "mchy",
      "paprociowe",
      "widłakowe",
      "skrzypowe",
      "nagonasienne",
      "okrytonasienne"
    ],
    "categories": [
      "nienaczyniowe",
      "naczyniowe"
    ],
    "answer": {
      "nienaczyniowe": [
        "mchy"
      ],
      "naczyniowe": [
        "paprociowe",
        "widłakowe",
        "skrzypowe",
        "nagonasienne",
        "okrytonasienne"
      ]
    },
    "explanation": "Mchy są roślinami nienaczyniowymi. Paprociowe, widłakowe, skrzypowe oraz rośliny nasienne mają tkankę przewodzącą, więc są naczyniowe."
  },
  {
    "id": "R03_HARD_09",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Struktury najczęściej położone na spodniej stronie liścia, które umożliwiają wymianę gazową z atmosferą, to...",
    "options": null,
    "answer": "aparaty szparkowe",
    "altAnswers": [
      "aparaty szparkowe",
      "aparat szparkowy"
    ],
    "explanation": "Aparaty szparkowe umożliwiają wymianę gazową między rośliną a atmosferą."
  },
  {
    "id": "R03_HARD_10",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie pasuje do tkanki przewodzącej: drewno, łyko, aparaty szparkowe, wiązki przewodzące.",
    "image": "r03_tkanki_stale.jpg",
    "options": null,
    "answer": "aparaty szparkowe",
    "explanation": "Aparaty szparkowe należą do skórki i służą wymianie gazowej. Drewno, łyko i wiązki przewodzące wiążą się z transportem substancji."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r03",
  number: 3,
  title: "Rośliny zarodnikowe",
  icon: "🌿",
  sectionOrder: [
    "Cechy roślin",
    "Tkanki roślinne",
    "Mchy",
    "Paprociowe, widłakowe i skrzypowe"
  ],
  sectionIcons: {
    "Cechy roślin": "🌱",
    "Tkanki roślinne": "🔬",
    "Mchy": "💧",
    "Paprociowe, widłakowe i skrzypowe": "🌿"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
