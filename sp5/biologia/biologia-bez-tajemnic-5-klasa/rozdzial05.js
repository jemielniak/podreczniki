// Skróty sekcji (do identyfikatorów ćwiczeń):
//   MCH  = Mchy
//   PAP  = Paprociowe, widłakowe i skrzypowe
//   NAG  = Nagonasienne
//   OKR  = Okrytonasienne
//   POR  = Porównanie grup roślin
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R05_MCH_01",
    "section": "Mchy",
    "type": "single_choice",
    "prompt": "Gdzie najczęściej można spotkać mchy opisane w rozdziale?",
    "options": [
      "W zacienionych i wilgotnych miejscach",
      "Na suchych pustyniach bez cienia",
      "Wyłącznie w sadach owocowych",
      "Tylko na polach uprawnych",
      "W koronach wysokich drzew iglastych",
      "Wyłącznie w doniczkach domowych"
    ],
    "answer": 0,
    "explanation": "Mchy preferują miejsca zacienione i wilgotne, na przykład lasy, okolice strumieni, wilgotne łąki i bagna."
  },
  {
    "id": "R05_MCH_02",
    "section": "Mchy",
    "type": "multi_select",
    "prompt": "Zaznacz elementy budowy mchu płonnika wymienione w rozdziale.",
    "options": [
      "chwytniki",
      "łodyżka",
      "listki",
      "zarodnia",
      "czapeczka",
      "owoc"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "r05_budowa_mchu_plonnika.jpg",
    "explanation": "W budowie mchu wyróżniono chwytniki, łodyżkę, listki, zarodnię z zarodnikami oraz czapeczkę. Owoc nie jest elementem budowy mchu."
  },
  {
    "id": "R05_MCH_03",
    "section": "Mchy",
    "type": "true_false",
    "prompt": "Mchy są organizmami pionierskimi, ponieważ mają małe wymagania i mogą pojawiać się jako jedne z pierwszych organizmów na niezasiedlonym obszarze.",
    "options": null,
    "answer": true,
    "explanation": "W rozdziale podano, że mchy mogą zasiedlać na przykład skały jako jedne z pierwszych organizmów."
  },
  {
    "id": "R05_MCH_04",
    "section": "Mchy",
    "type": "fill_in",
    "prompt": "Zarodniki mchów powstają w __________ i służą do rozmnażania __________.",
    "options": null,
    "answer": [
      "zarodni",
      "bezpłciowego"
    ],
    "altAnswers": [
      [
        "zarodni",
        "zarodnia"
      ],
      [
        "bezpłciowego",
        "bezpłciowe"
      ]
    ],
    "explanation": "Zarodnia to struktura, w której powstają zarodniki. Zarodniki służą do rozmnażania bezpłciowego."
  },
  {
    "id": "R05_MCH_05",
    "section": "Mchy",
    "type": "riddle",
    "prompt": "Cienkie wyrostki, które umocowują mech w podłożu i pobierają z niego wodę z solami mineralnymi, to...",
    "options": null,
    "answer": "chwytniki",
    "altAnswers": [
      "chwytniki",
      "chwytnik"
    ],
    "explanation": "Chwytniki pełnią u mchów funkcje podobne do korzeni, ale nie są prawdziwymi korzeniami."
  },
  {
    "id": "R05_MCH_06",
    "section": "Mchy",
    "type": "match",
    "prompt": "Połącz element budowy mchu z jego funkcją.",
    "options": null,
    "left": [
      "czapeczka",
      "bezlistna łodyżka",
      "ulistniona łodyżka",
      "zarodnia"
    ],
    "right": [
      "chroni znajdującą się pod nią zarodnię",
      "wynosi zarodnię ku górze",
      "jest pokryta listkami prowadzącymi fotosyntezę",
      "wytwarza zarodniki"
    ],
    "answer": {
      "czapeczka": "chroni znajdującą się pod nią zarodnię",
      "bezlistna łodyżka": "wynosi zarodnię ku górze",
      "ulistniona łodyżka": "jest pokryta listkami prowadzącymi fotosyntezę",
      "zarodnia": "wytwarza zarodniki"
    },
    "image": "r05_budowa_mchu_plonnika.jpg",
    "explanation": "Schemat płonnika pokazuje, że różne części mchu pełnią różne funkcje: mocują, unoszą zarodnię, chronią ją albo prowadzą fotosyntezę."
  },
  {
    "id": "R05_MCH_07",
    "section": "Mchy",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: płonnik pospolity, widłoząb miotłasty, torfowiec błotny, sosna zwyczajna.",
    "options": null,
    "answer": "sosna zwyczajna",
    "explanation": "Płonnik, widłoząb i torfowiec to mchy, a sosna zwyczajna jest rośliną nagonasienną."
  },
  {
    "id": "R05_MCH_08",
    "section": "Mchy",
    "type": "single_choice",
    "prompt": "Czego nie mają dorosłe osobniki torfowca błotnego?",
    "options": [
      "chwytników",
      "rozgałęzionych łodyżek",
      "małych płaskich listków",
      "kulistych zarodni",
      "dolnych części łodyżek",
      "zdolności występowania na torfowiskach"
    ],
    "answer": 0,
    "image": "r05_torfowiec_torfowisko.jpg",
    "explanation": "W rozdziale podano, że dorosłe osobniki torfowca błotnego nie mają chwytników, ponieważ dolne części ich łodyżek zamierają."
  },
  {
    "id": "R05_MCH_09",
    "section": "Mchy",
    "type": "scenario",
    "prompt": "Uczeń sprawdza, czy wysuszony mech wchłania wodę z otoczenia. Który zestaw jest próbą badawczą w tym doświadczeniu?",
    "options": [
      "Słoik z mokrą watą lub bibułą i grupą mchów",
      "Słoik z suchą watą i grupą mchów",
      "Słoik z wodą bez mchów",
      "Słoik z nasionami fasoli na gazie",
      "Słoik z ziemią i szyszką",
      "Pusty słoik zamknięty korkiem"
    ],
    "answer": 0,
    "image": "r05_doswiadczenie_mchy_woda.jpg",
    "explanation": "W próbie badawczej mech umieszcza się w słoiku z wilgotną watą lub bibułą. Próba kontrolna nie zawiera wody."
  },
  {
    "id": "R05_MCH_10",
    "section": "Mchy",
    "type": "true_false",
    "prompt": "Gatunków chronionych mchów nie wolno zbierać, przechowywać ani sprzedawać.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział wyjaśnia, że pozyskiwanie chronionych gatunków ze środowiska naturalnego jest nielegalne."
  },
  {
    "id": "R05_MCH_11",
    "section": "Mchy",
    "type": "sort",
    "prompt": "Przyporządkuj przedstawicieli mchów do miejsca występowania podanego w rozdziale.",
    "options": null,
    "items": [
      "płonnik pospolity",
      "widłoząb miotłasty",
      "torfowiec błotny",
      "zdrojek pospolity"
    ],
    "categories": [
      "lasy i torfowiska",
      "zbiorniki słodkowodne"
    ],
    "answer": {
      "lasy i torfowiska": [
        "płonnik pospolity",
        "widłoząb miotłasty",
        "torfowiec błotny"
      ],
      "zbiorniki słodkowodne": [
        "zdrojek pospolity"
      ]
    },
    "explanation": "Płonnik, widłoząb i torfowiec opisano jako gatunki związane z lasami lub torfowiskami. Zdrojek pospolity występuje w jeziorach, stawach i rzekach."
  },
  {
    "id": "R05_MCH_12",
    "section": "Mchy",
    "type": "sequence",
    "prompt": "Ułóż etapy doświadczenia z wysuszonym mchem w poprawnej kolejności.",
    "options": null,
    "items": [
      "Po około dwóch godzinach porównaj wygląd mchów",
      "Włóż grupę wysuszonych mchów do słoika",
      "Wyłóż dno słoika watą lub bibułą",
      "Dodaj tyle wody, aby została wchłonięta przez watę lub bibułę"
    ],
    "answer": [
      "Wyłóż dno słoika watą lub bibułą",
      "Dodaj tyle wody, aby została wchłonięta przez watę lub bibułę",
      "Włóż grupę wysuszonych mchów do słoika",
      "Po około dwóch godzinach porównaj wygląd mchów"
    ],
    "image": "r05_doswiadczenie_mchy_woda.jpg",
    "explanation": "Najpierw przygotowuje się wilgotne podłoże, potem wkłada mech i po wyznaczonym czasie porównuje wyniki z próbą kontrolną."
  },
  {
    "id": "R05_PAP_01",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "single_choice",
    "prompt": "Jak zwyczajowo nazywa się rośliny paprociowe, widłakowe i skrzypowe?",
    "options": [
      "paprotnikami",
      "mszakami",
      "nagonasiennymi",
      "okrytonasiennymi",
      "krzewinkami",
      "roślinami iglastymi"
    ],
    "answer": 0,
    "explanation": "Rozdział podaje, że rośliny należące do tych trzech grup są zwyczajowo nazywane paprotnikami."
  },
  {
    "id": "R05_PAP_02",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "true_false",
    "prompt": "Paprociowe, widłakowe i skrzypowe rozmnażają się przez zarodniki.",
    "options": null,
    "answer": true,
    "image": "r05_lisc_paproci_kupki_zarodni.jpg",
    "explanation": "W rozdziale wskazano, że te rośliny są wieloletnie i rozmnażają się przez zarodniki."
  },
  {
    "id": "R05_PAP_03",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "fill_in",
    "prompt": "W budowie paproci łatwo wyróżnić korzenie, __________ i __________.",
    "options": null,
    "answer": [
      "łodygi",
      "liście"
    ],
    "altAnswers": [
      [
        "łodygi",
        "łodygę",
        "łodyga"
      ],
      [
        "liście",
        "liść"
      ]
    ],
    "explanation": "Paprocie są organowcami, więc mają korzenie, łodygi i liście."
  },
  {
    "id": "R05_PAP_04",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "riddle",
    "prompt": "Podziemna łodyga paproci lub skrzypu, która magazynuje substancje zapasowe, to...",
    "options": null,
    "answer": "kłącze",
    "altAnswers": [
      "kłącze",
      "klacze"
    ],
    "explanation": "Kłącze jest łodygą rosnącą pod ziemią i pozwala roślinie przetrwać okres, gdy części nadziemne zamierają."
  },
  {
    "id": "R05_PAP_05",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "match",
    "prompt": "Połącz element budowy paproci z opisem.",
    "options": null,
    "left": [
      "liście paproci",
      "młode liście",
      "kłącze",
      "kupki zarodni"
    ],
    "right": [
      "są duże i prowadzą fotosyntezę",
      "są charakterystycznie zwinięte",
      "jest podziemną łodygą",
      "rozwijają się na spodzie liści"
    ],
    "answer": {
      "liście paproci": "są duże i prowadzą fotosyntezę",
      "młode liście": "są charakterystycznie zwinięte",
      "kłącze": "jest podziemną łodygą",
      "kupki zarodni": "rozwijają się na spodzie liści"
    },
    "image": "r05_lisc_paproci_kupki_zarodni.jpg",
    "explanation": "Budowa paproci obejmuje podziemne kłącze, korzenie oraz duże liście, na których od spodu mogą rozwijać się kupki zarodni."
  },
  {
    "id": "R05_PAP_06",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "single_choice",
    "prompt": "Jaki jest pęd wiosenny skrzypu polnego opisany w rozdziale?",
    "options": [
      "brunatny i zakończony kłosem zarodnionośnym",
      "zielony i rozgałęziony jak choinka",
      "zdrewniały i tworzący pień",
      "płożący się i okryty igłami",
      "pokryty owocami",
      "zawsze podziemny"
    ],
    "answer": 0,
    "image": "r05_budowa_skrzypu_polnego.jpg",
    "explanation": "Skrzyp polny ma brunatny pęd wiosenny, na którego szczycie powstają zarodnie zebrane w kłos."
  },
  {
    "id": "R05_PAP_07",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "multi_select",
    "prompt": "Zaznacz przedstawicieli paprociowych, widłakowych i skrzypowych wymienionych w rozdziale.",
    "options": [
      "nerecznica samcza",
      "salwinia pływająca",
      "pióropusznik strusi",
      "widłak jałowcowaty",
      "skrzyp olbrzymi",
      "grusza pospolita"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "r05_przedstawiciele_paprotnikow.jpg",
    "explanation": "Wśród przedstawicieli wymieniono nerecznicę, salwinię, pióropusznika, widłaka jałowcowatego i skrzyp olbrzymi. Grusza należy do okrytonasiennych."
  },
  {
    "id": "R05_PAP_08",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: nerecznica samcza, salwinia pływająca, pióropusznik strusi, cis pospolity.",
    "options": null,
    "answer": "cis pospolity",
    "explanation": "Nerecznica, salwinia i pióropusznik to paprocie. Cis pospolity jest rośliną nagonasienną."
  },
  {
    "id": "R05_PAP_09",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "match",
    "prompt": "Połącz grupę roślin z cechą budowy podaną w rozdziale.",
    "options": null,
    "left": [
      "paprocie",
      "widłaki",
      "skrzypy"
    ],
    "right": [
      "mają duże liście i kłącze",
      "mają długie płożące się łodygi",
      "mają pęd wiosenny i pęd letni"
    ],
    "answer": {
      "paprocie": "mają duże liście i kłącze",
      "widłaki": "mają długie płożące się łodygi",
      "skrzypy": "mają pęd wiosenny i pęd letni"
    },
    "image": "r05_przedstawiciele_paprotnikow.jpg",
    "explanation": "Paprocie, widłaki i skrzypy mają różną budowę, choć wszystkie rozmnażają się przez zarodniki."
  },
  {
    "id": "R05_PAP_10",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do pędów skrzypu polnego.",
    "options": null,
    "items": [
      "brunatny",
      "na jego szczycie powstają zarodnie",
      "zielony",
      "prowadzi fotosyntezę"
    ],
    "categories": [
      "pęd wiosenny",
      "pęd letni"
    ],
    "answer": {
      "pęd wiosenny": [
        "brunatny",
        "na jego szczycie powstają zarodnie"
      ],
      "pęd letni": [
        "zielony",
        "prowadzi fotosyntezę"
      ]
    },
    "image": "r05_budowa_skrzypu_polnego.jpg",
    "explanation": "Pęd wiosenny służy rozmnażaniu, a pęd letni jest zielony i prowadzi fotosyntezę."
  },
  {
    "id": "R05_PAP_11",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "scenario",
    "prompt": "Na spacerze uczeń znajduje zielony, rozgałęziony pęd skrzypu polnego. Jaka jest główna rola tego pędu według rozdziału?",
    "options": [
      "prowadzenie fotosyntezy",
      "wytwarzanie owoców",
      "tworzenie szyszek",
      "ochrona zarodni czapeczką",
      "zrzucanie igieł na zimę",
      "powstawanie nasion w owocu"
    ],
    "answer": 0,
    "explanation": "Zielony pęd letni skrzypu prowadzi fotosyntezę."
  },
  {
    "id": "R05_PAP_12",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "true_false",
    "prompt": "Ze szczątków dawnych paprociowych, widłakowych i skrzypowych powstały złoża węgla kamiennego.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział opisuje, że ponad 300 mln lat temu te rośliny dominowały na lądzie, a ze szczątków dawnych form powstał węgiel kamienny."
  },
  {
    "id": "R05_NAG_01",
    "section": "Nagonasienne",
    "type": "single_choice",
    "prompt": "Który zestaw zawiera wyłącznie rośliny nagonasienne wymienione w rozdziale?",
    "options": [
      "sosna, świerk, jodła, cis",
      "grusza, łubin, klon, lipa",
      "płonnik, torfowiec, widłoząb, zdrojek",
      "nerecznica, salwinia, pióropusznik, skrzyp",
      "brzoza, jarząb, topola, buk",
      "pokrzywa, wrzos, borówka, berberys"
    ],
    "answer": 0,
    "explanation": "Sosna, świerk, jodła i cis zostały przedstawione jako rośliny nagonasienne."
  },
  {
    "id": "R05_NAG_02",
    "section": "Nagonasienne",
    "type": "fill_in",
    "prompt": "Nasiona roślin nagonasiennych nie są __________, dlatego tę grupę nazwano __________.",
    "options": null,
    "answer": [
      "osłonięte",
      "nagonasiennymi"
    ],
    "altAnswers": [
      [
        "osłonięte",
        "osloniete"
      ],
      [
        "nagonasiennymi",
        "nagonasienne"
      ]
    ],
    "image": "r05_sosna_szyszka_nasiona.jpg",
    "explanation": "Nasiona leżą na łuskach szyszki i nie są niczym osłonięte, stąd nazwa rośliny nagonasienne."
  },
  {
    "id": "R05_NAG_03",
    "section": "Nagonasienne",
    "type": "true_false",
    "prompt": "Szyszki to zdrewniałe kwiatostany roślin nagonasiennych.",
    "options": null,
    "answer": true,
    "explanation": "W rozdziale szyszki opisano jako zdrewniałe kwiatostany roślin nagonasiennych."
  },
  {
    "id": "R05_NAG_04",
    "section": "Nagonasienne",
    "type": "match",
    "prompt": "Połącz element sosny z opisem funkcji lub cechy.",
    "options": null,
    "left": [
      "kwiatostan męski",
      "kwiatostan żeński",
      "igły",
      "skrzydełko nasiona"
    ],
    "right": [
      "produkuje pyłek",
      "zawiera zalążki z komórkami jajowymi",
      "są liśćmi sosny",
      "ułatwia rozsiewanie przez wiatr"
    ],
    "answer": {
      "kwiatostan męski": "produkuje pyłek",
      "kwiatostan żeński": "zawiera zalążki z komórkami jajowymi",
      "igły": "są liśćmi sosny",
      "skrzydełko nasiona": "ułatwia rozsiewanie przez wiatr"
    },
    "image": "r05_sosna_szyszka_nasiona.jpg",
    "explanation": "Budowa sosny obejmuje kwiatostany męskie i żeńskie, igły oraz nasiona ze skrzydełkiem ułatwiającym rozsiewanie."
  },
  {
    "id": "R05_NAG_05",
    "section": "Nagonasienne",
    "type": "riddle",
    "prompt": "Przekształcone liście roślin iglastych to...",
    "options": null,
    "answer": "igły",
    "altAnswers": [
      "igły",
      "szpilki",
      "igla",
      "igły szpilki"
    ],
    "explanation": "Igły, nazywane też szpilkami, są liśćmi roślin iglastych."
  },
  {
    "id": "R05_NAG_06",
    "section": "Nagonasienne",
    "type": "multi_select",
    "prompt": "Zaznacz organy roślin nagonasiennych wymienione w ramce z rozdziału.",
    "options": [
      "korzenie",
      "łodygi",
      "liście",
      "kwiaty",
      "owoce",
      "zarodnie mchów"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Rośliny nagonasienne są organowcami. W ich budowie wyróżniono korzenie, łodygi, liście i kwiaty."
  },
  {
    "id": "R05_NAG_07",
    "section": "Nagonasienne",
    "type": "scenario",
    "prompt": "Wiosną na samochodach pojawia się żółty pył z drzew iglastych. Który element sosny jest źródłem tego pyłku?",
    "options": [
      "kwiatostan męski",
      "kwiatostan żeński",
      "skrzydełko nasiona",
      "czerwona osnówka",
      "kłącze",
      "owoc"
    ],
    "answer": 0,
    "explanation": "Kwiatostan męski sosny jest miejscem produkcji pyłku."
  },
  {
    "id": "R05_NAG_08",
    "section": "Nagonasienne",
    "type": "single_choice",
    "prompt": "Która roślina nagonasienna zrzuca igły na zimę?",
    "options": [
      "modrzew europejski",
      "sosna zwyczajna",
      "świerk pospolity",
      "jodła pospolita",
      "cis pospolity",
      "jałowiec"
    ],
    "answer": 0,
    "image": "r05_porownanie_iglastych.jpg",
    "explanation": "Modrzew europejski ma delikatne, niekłujące igły osadzone w pęczkach i zrzuca je na zimę."
  },
  {
    "id": "R05_NAG_09",
    "section": "Nagonasienne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: sosna zwyczajna, świerk pospolity, jodła pospolita, lipa drobnolistna.",
    "options": null,
    "answer": "lipa drobnolistna",
    "explanation": "Sosna, świerk i jodła są nagonasienne, a lipa drobnolistna jest okrytonasiennym drzewem liściastym."
  },
  {
    "id": "R05_NAG_10",
    "section": "Nagonasienne",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do roślin nagonasiennych.",
    "options": null,
    "items": [
      "zrzuca igły na zimę",
      "nie tworzy szyszek",
      "szyszki zwisają i opadają w całości",
      "szyszki stoją pionowo i rozpadają się na drzewie"
    ],
    "categories": [
      "modrzew europejski",
      "cis pospolity",
      "świerk pospolity",
      "jodła pospolita"
    ],
    "answer": {
      "modrzew europejski": [
        "zrzuca igły na zimę"
      ],
      "cis pospolity": [
        "nie tworzy szyszek"
      ],
      "świerk pospolity": [
        "szyszki zwisają i opadają w całości"
      ],
      "jodła pospolita": [
        "szyszki stoją pionowo i rozpadają się na drzewie"
      ]
    },
    "image": "r05_porownanie_iglastych.jpg",
    "explanation": "Rozdział porównuje przedstawicieli nagonasiennych między innymi po igłach i szyszkach."
  },
  {
    "id": "R05_NAG_11",
    "section": "Nagonasienne",
    "type": "true_false",
    "prompt": "Sosna, podobnie jak większość roślin iglastych, zachowuje igły podczas zimy i może wtedy prowadzić fotosyntezę.",
    "options": null,
    "answer": true,
    "explanation": "W rozdziale podkreślono, że zachowanie igieł zimą odróżnia większość iglastych od roślin liściastych."
  },
  {
    "id": "R05_NAG_12",
    "section": "Nagonasienne",
    "type": "multi_select",
    "prompt": "Zaznacz znaczenie roślin nagonasiennych opisane w rozdziale.",
    "options": [
      "są składnikiem lasów",
      "są źródłem tlenu",
      "regulują gospodarkę wodną",
      "zatrzymują wiatr",
      "drewno wykorzystuje się do produkcji papieru",
      "tworzą owoce z nasionami"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Rośliny nagonasienne są ważne w lasach, wytwarzają tlen, wpływają na wodę w środowisku, zatrzymują wiatr i dostarczają drewna. Nie tworzą owoców."
  },
  {
    "id": "R05_OKR_01",
    "section": "Okrytonasienne",
    "type": "single_choice",
    "prompt": "Jak rozdział opisuje rośliny okrytonasienne pod względem liczebności i różnorodności?",
    "options": [
      "jako najliczniejszą i najbardziej różnorodną grupę roślin",
      "jako najmniej liczną grupę roślin lądowych",
      "jako grupę występującą wyłącznie w wodzie",
      "jako rośliny pozbawione kwiatów",
      "jako rośliny rozmnażające się wyłącznie przez zarodniki",
      "jako rośliny bez owoców"
    ],
    "answer": 0,
    "explanation": "Okrytonasienne można spotkać w większości środowisk na Ziemi i są najliczniejszą oraz najbardziej różnorodną grupą roślin."
  },
  {
    "id": "R05_OKR_02",
    "section": "Okrytonasienne",
    "type": "fill_in",
    "prompt": "Cechą typową roślin okrytonasiennych jest obecność __________, którego tkanki otaczają __________.",
    "options": null,
    "answer": [
      "owocu",
      "nasiona"
    ],
    "altAnswers": [
      [
        "owocu",
        "owoc"
      ],
      [
        "nasiona",
        "nasiono"
      ]
    ],
    "image": "r05_grusza_lubin_okrytonasienne.jpg",
    "explanation": "U okrytonasiennych nasiona są osłonięte przez tkanki owocu."
  },
  {
    "id": "R05_OKR_03",
    "section": "Okrytonasienne",
    "type": "match",
    "prompt": "Połącz formę morfologiczną okrytonasiennych z opisem.",
    "options": null,
    "left": [
      "drzewa",
      "krzewy",
      "krzewinki",
      "rośliny zielne"
    ],
    "right": [
      "mają pień i koronę",
      "mają zdrewniałe łodygi bez wyraźnego pędu głównego",
      "są niskimi krzewami do 60 cm",
      "mają zielone i wiotkie łodygi"
    ],
    "answer": {
      "drzewa": "mają pień i koronę",
      "krzewy": "mają zdrewniałe łodygi bez wyraźnego pędu głównego",
      "krzewinki": "są niskimi krzewami do 60 cm",
      "rośliny zielne": "mają zielone i wiotkie łodygi"
    },
    "explanation": "Formy morfologiczne dotyczą kształtu i budowy roślin. W rozdziale wyróżniono drzewa, krzewy, krzewinki i rośliny zielne."
  },
  {
    "id": "R05_OKR_04",
    "section": "Okrytonasienne",
    "type": "true_false",
    "prompt": "Krzewinki to niskie krzewy o wysokości do 60 cm.",
    "options": null,
    "answer": true,
    "explanation": "Taka definicja krzewinek pojawia się w opisie form morfologicznych roślin okrytonasiennych."
  },
  {
    "id": "R05_OKR_05",
    "section": "Okrytonasienne",
    "type": "single_choice",
    "prompt": "Jakie owoce ma łubin trwały w przykładzie budowy roślin okrytonasiennych?",
    "options": [
      "suche strąki z nasionami",
      "szyszki z łuskami",
      "czerwone osnówki",
      "orzeszki ze skrzydełkiem",
      "owoce z puchem",
      "trójgraniaste orzeszki w kolczastej torebce"
    ],
    "answer": 0,
    "image": "r05_grusza_lubin_okrytonasienne.jpg",
    "explanation": "Na przykładzie łubinu pokazano suche strąki, wewnątrz których znajdują się nasiona."
  },
  {
    "id": "R05_OKR_06",
    "section": "Okrytonasienne",
    "type": "multi_select",
    "prompt": "Zaznacz organy roślin okrytonasiennych wymienione w podsumowaniu rozdziału.",
    "options": [
      "korzenie",
      "łodygi",
      "liście",
      "kwiaty",
      "owoce",
      "chwytniki"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Okrytonasienne są organowcami. W ich budowie można wyróżnić korzenie, łodygi, liście, kwiaty i owoce."
  },
  {
    "id": "R05_OKR_07",
    "section": "Okrytonasienne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: wierzba biała, buk zwyczajny, klon zwyczajny, świerk pospolity.",
    "options": null,
    "answer": "świerk pospolity",
    "explanation": "Wierzba, buk i klon to przedstawiciele polskich drzew liściastych, czyli okrytonasiennych. Świerk jest nagonasienny."
  },
  {
    "id": "R05_OKR_08",
    "section": "Okrytonasienne",
    "type": "match",
    "prompt": "Połącz drzewo liściaste z cechą podaną w rozdziale.",
    "options": null,
    "left": [
      "wierzba biała",
      "lipa drobnolistna",
      "jarząb pospolity",
      "brzoza brodawkowata"
    ],
    "right": [
      "ma długie wąskie owłosione liście",
      "ma sercowate liście",
      "ma czerwone owoce zwane jarzębiną",
      "ma liście w kształcie rombu"
    ],
    "answer": {
      "wierzba biała": "ma długie wąskie owłosione liście",
      "lipa drobnolistna": "ma sercowate liście",
      "jarząb pospolity": "ma czerwone owoce zwane jarzębiną",
      "brzoza brodawkowata": "ma liście w kształcie rombu"
    },
    "image": "r05_drzewa_lisciaste_liscie_owoce.jpg",
    "explanation": "Rozdział przedstawia polskie drzewa liściaste i ich rozpoznawalne liście lub owoce."
  },
  {
    "id": "R05_OKR_09",
    "section": "Okrytonasienne",
    "type": "scenario",
    "prompt": "Miasto sadzi drzewa i krzewy przy ulicy. Który opis najlepiej oddaje znaczenie takich roślin podane w rozdziale?",
    "options": [
      "zmniejszają zanieczyszczenie powietrza pyłami i obniżają temperaturę latem",
      "zawsze wytwarzają szyszki z nagimi nasionami",
      "powodują brak gleby przez zrzucanie liści",
      "nie mają znaczenia dla gospodarki wodnej",
      "nie prowadzą fotosyntezy",
      "służą tylko jako ozdoba"
    ],
    "answer": 0,
    "explanation": "W rozdziale wskazano, że miejskie drzewa i krzewy ograniczają pyły i wpływają na niższą temperaturę powietrza latem."
  },
  {
    "id": "R05_OKR_10",
    "section": "Okrytonasienne",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do drzew liściastych.",
    "options": null,
    "items": [
      "dłoniaste liście i owoce ze skrzydełkami",
      "sercowate liście i małe orzeszki ze skrzydełkiem",
      "liście złożone pierzasto i czerwone owoce",
      "liście w kształcie rombu i drobne orzeszki ze skrzydełkami"
    ],
    "categories": [
      "klon zwyczajny",
      "lipa drobnolistna",
      "jarząb pospolity",
      "brzoza brodawkowata"
    ],
    "answer": {
      "klon zwyczajny": [
        "dłoniaste liście i owoce ze skrzydełkami"
      ],
      "lipa drobnolistna": [
        "sercowate liście i małe orzeszki ze skrzydełkiem"
      ],
      "jarząb pospolity": [
        "liście złożone pierzasto i czerwone owoce"
      ],
      "brzoza brodawkowata": [
        "liście w kształcie rombu i drobne orzeszki ze skrzydełkami"
      ]
    },
    "image": "r05_drzewa_lisciaste_liscie_owoce.jpg",
    "explanation": "Cechy liści i owoców pomagają odróżniać przedstawicieli drzew liściastych."
  },
  {
    "id": "R05_OKR_11",
    "section": "Okrytonasienne",
    "type": "scenario",
    "prompt": "W doświadczeniu trzy nasiona fasoli leżą na gazie nad wodą, a trzy na takiej samej gazie bez dostępu do wody. Po 7 dniach kiełkują tylko nasiona z wodą. Jaki wniosek wynika z doświadczenia?",
    "options": [
      "woda jest konieczna do kiełkowania nasion fasoli",
      "światło jest jedynym warunkiem kiełkowania",
      "brak wody przyspiesza kiełkowanie",
      "fasola kiełkuje tylko w ziemi",
      "nasiona nie reagują na warunki otoczenia",
      "gaza uniemożliwia kiełkowanie"
    ],
    "answer": 0,
    "image": "r05_kielkowanie_fasoli.jpg",
    "explanation": "Hipoteza doświadczenia zakłada, że woda jest konieczna do procesu kiełkowania nasion fasoli."
  },
  {
    "id": "R05_OKR_12",
    "section": "Okrytonasienne",
    "type": "sequence",
    "prompt": "Ułóż etapy doświadczenia z kiełkowaniem nasion fasoli w poprawnej kolejności.",
    "options": null,
    "items": [
      "Umieść po trzy nasiona fasoli na gazie w każdym słoiku",
      "Przymocuj gazę do obu słoików",
      "Przez 7 dni obserwuj nasiona",
      "W jednym słoiku utrzymuj wodę sięgającą do gazy"
    ],
    "answer": [
      "Przymocuj gazę do obu słoików",
      "W jednym słoiku utrzymuj wodę sięgającą do gazy",
      "Umieść po trzy nasiona fasoli na gazie w każdym słoiku",
      "Przez 7 dni obserwuj nasiona"
    ],
    "image": "r05_kielkowanie_fasoli.jpg",
    "explanation": "Najpierw przygotowuje się słoiki z gazą, następnie tworzy próbę z wodą i próbę kontrolną, umieszcza nasiona i prowadzi obserwację przez 7 dni."
  },
  {
    "id": "R05_POR_01",
    "section": "Porównanie grup roślin",
    "type": "sort",
    "prompt": "Przyporządkuj grupy roślin do sposobu rozmnażania omawianego w rozdziale.",
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
      "rozmnażanie przez zarodniki",
      "rozmnażanie przez nasiona"
    ],
    "answer": {
      "rozmnażanie przez zarodniki": [
        "mchy",
        "paprociowe",
        "widłakowe",
        "skrzypowe"
      ],
      "rozmnażanie przez nasiona": [
        "nagonasienne",
        "okrytonasienne"
      ]
    },
    "explanation": "Mchy oraz paprociowe, widłakowe i skrzypowe rozmnażają się przez zarodniki. Nagonasienne i okrytonasienne są roślinami nasiennymi."
  },
  {
    "id": "R05_POR_02",
    "section": "Porównanie grup roślin",
    "type": "multi_select",
    "prompt": "Zaznacz grupy, które w rozdziale opisano jako organowce.",
    "options": [
      "mchy",
      "paprociowe",
      "widłakowe",
      "skrzypowe",
      "nagonasienne",
      "okrytonasienne"
    ],
    "answer": [
      1,
      2,
      3,
      4,
      5
    ],
    "explanation": "Mchy nie mają organów. Paprociowe, widłakowe, skrzypowe, nagonasienne i okrytonasienne mają organy."
  },
  {
    "id": "R05_POR_03",
    "section": "Porównanie grup roślin",
    "type": "true_false",
    "prompt": "Mchy nie są organowcami, ponieważ chwytniki, łodyżka i listki nie są prawdziwymi organami.",
    "options": null,
    "answer": true,
    "explanation": "W rozdziale zwrócono uwagę, że w przypadku mchów używa się określeń łodyżka i listki, bo ich budowa jest inna niż budowa łodyg i liści organowców."
  },
  {
    "id": "R05_POR_04",
    "section": "Porównanie grup roślin",
    "type": "match",
    "prompt": "Połącz pojęcie ze znaczeniem.",
    "options": null,
    "left": [
      "chwytniki",
      "kłącze",
      "szyszka",
      "owoc",
      "zarodnia"
    ],
    "right": [
      "mocują mchy w podłożu",
      "jest wieloletnim podziemnym pędem",
      "jest zdrewniałym kwiatostanem iglastych",
      "otacza nasiona u okrytonasiennych",
      "w niej powstają zarodniki"
    ],
    "answer": {
      "chwytniki": "mocują mchy w podłożu",
      "kłącze": "jest wieloletnim podziemnym pędem",
      "szyszka": "jest zdrewniałym kwiatostanem iglastych",
      "owoc": "otacza nasiona u okrytonasiennych",
      "zarodnia": "w niej powstają zarodniki"
    },
    "image": "r05_porownanie_nasion.jpg",
    "explanation": "Te pojęcia porządkują różnice między grupami roślin omawianymi w rozdziale."
  },
  {
    "id": "R05_POR_05",
    "section": "Porównanie grup roślin",
    "type": "fill_in",
    "prompt": "Nasiona nagonasiennych są __________, a nasiona okrytonasiennych są __________ owocnią.",
    "options": null,
    "answer": [
      "nieosłonięte",
      "okryte"
    ],
    "altAnswers": [
      [
        "nieosłonięte",
        "nieosloniete",
        "nagie"
      ],
      [
        "okryte",
        "osłonięte",
        "osloniete"
      ]
    ],
    "explanation": "Nagonasienne mają nasiona niczym nieosłonięte, a u okrytonasiennych nasiona znajdują się w owocu."
  },
  {
    "id": "R05_POR_06",
    "section": "Porównanie grup roślin",
    "type": "single_choice",
    "prompt": "Która cecha odróżnia rośliny nagonasienne od okrytonasiennych?",
    "options": [
      "obecność lub brak owocu osłaniającego nasiona",
      "obecność korzeni u wszystkich okazów",
      "prowadzenie fotosyntezy",
      "występowanie w środowisku lądowym",
      "pobieranie wody z podłoża",
      "obecność łodygi u każdej grupy roślin"
    ],
    "answer": 0,
    "image": "r05_porownanie_nasion.jpg",
    "explanation": "U nagonasiennych nasiona nie są osłonięte, a u okrytonasiennych znajdują się w owocu."
  },
  {
    "id": "R05_POR_07",
    "section": "Porównanie grup roślin",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: zarodnik, zarodnia, kupki zarodni, owoc.",
    "options": null,
    "answer": "owoc",
    "explanation": "Zarodnik, zarodnia i kupki zarodni wiążą się z rozmnażaniem przez zarodniki. Owoc jest cechą okrytonasiennych."
  },
  {
    "id": "R05_POR_08",
    "section": "Porównanie grup roślin",
    "type": "scenario",
    "prompt": "Uczennica widzi roślinę z kwiatami oraz owocem, w którego wnętrzu są nasiona. Do której grupy powinna ją zaliczyć?",
    "options": [
      "okrytonasiennych",
      "nagonasiennych",
      "mchów",
      "widłakowych",
      "skrzypowych",
      "paprociowych"
    ],
    "answer": 0,
    "explanation": "Obecność owocu z nasionami wewnątrz jest typową cechą roślin okrytonasiennych."
  },
  {
    "id": "R05_POR_09",
    "section": "Porównanie grup roślin",
    "type": "sort",
    "prompt": "Przyporządkuj elementy budowy do grup roślin.",
    "options": null,
    "items": [
      "chwytniki",
      "listki",
      "kłącze",
      "kupki zarodni",
      "igły",
      "szyszki",
      "owoce",
      "kwiaty łubinu"
    ],
    "categories": [
      "mchy",
      "paprocie",
      "nagonasienne",
      "okrytonasienne"
    ],
    "answer": {
      "mchy": [
        "chwytniki",
        "listki"
      ],
      "paprocie": [
        "kłącze",
        "kupki zarodni"
      ],
      "nagonasienne": [
        "igły",
        "szyszki"
      ],
      "okrytonasienne": [
        "owoce",
        "kwiaty łubinu"
      ]
    },
    "explanation": "Elementy budowy pozwalają rozpoznać, do której grupy należy roślina."
  },
  {
    "id": "R05_POR_10",
    "section": "Porównanie grup roślin",
    "type": "true_false",
    "prompt": "Rośliny nagonasienne tworzą owoce, w których znajdują się nasiona.",
    "options": null,
    "answer": false,
    "explanation": "Owoce są typowe dla okrytonasiennych. U nagonasiennych nasiona nie są okryte owocnią."
  },
  {
    "id": "R05_POR_11",
    "section": "Porównanie grup roślin",
    "type": "riddle",
    "prompt": "Struktura, w której powstają zarodniki u mchów, paproci, widłaków i skrzypów, to...",
    "options": null,
    "answer": "zarodnia",
    "altAnswers": [
      "zarodnia",
      "zarodni"
    ],
    "explanation": "Zarodnia występuje u roślin rozmnażających się przez zarodniki i jest miejscem ich powstawania."
  },
  {
    "id": "R05_POR_12",
    "section": "Porównanie grup roślin",
    "type": "multi_select",
    "prompt": "Zaznacz znaczenie wspólne lub podobne dla roślin nagonasiennych i okrytonasiennych opisane w rozdziale.",
    "options": [
      "są składnikami lasów",
      "są źródłem tlenu",
      "wpływają na gospodarkę wodną",
      "dostarczają drewna",
      "mogą mieć zastosowanie w ogrodnictwie",
      "rozmnażają się przez zarodniki"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Dla obu grup opisano znaczenie w lasach, produkcji tlenu, gospodarce wodnej oraz wykorzystanie przez człowieka. Rozmnażanie przez zarodniki dotyczy innych grup roślin."
  },
  {
    "id": "R05_HARD_01",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Bloger napisał o mchu: ma łodygę i liście. Zosia poprawia go po lekcji. Która odpowiedź najlepiej uzasadnia poprawkę?",
    "options": [
      "U mchów używa się określeń łodyżka i listki, bo nie są to prawdziwe organy",
      "Mchy nie mają żadnych części zielonych",
      "Mchy są zawsze roślinami nasiennymi",
      "Mchy mają owoce, ale nie mają listków",
      "Mchy mają tylko korzenie",
      "Mchy są grzybami"
    ],
    "answer": 0,
    "image": "r05_budowa_mchu_plonnika.jpg",
    "explanation": "Rozdział wyraźnie odróżnia łodyżkę i listki mchów od łodyg i liści organowców."
  },
  {
    "id": "R05_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "U dorosłego torfowca dolne części łodyżek __________, a ze szczątków mchów może powstawać __________.",
    "options": null,
    "answer": [
      "zamierają",
      "torf"
    ],
    "altAnswers": [
      [
        "zamierają",
        "obumierają"
      ],
      [
        "torf"
      ]
    ],
    "image": "r05_torfowiec_torfowisko.jpg",
    "explanation": "Torfowiec ma specyficzną budowę: dorosłe osobniki nie mają chwytników, dolne części łodyżek zamierają, a szczątki mchów przekształcają się w torf."
  },
  {
    "id": "R05_HARD_03",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który przedstawiciel mchów z rozdziału występuje w jeziorach, stawach i rzekach?",
    "options": [
      "zdrojek pospolity",
      "torfowiec błotny",
      "płonnik pospolity",
      "widłoząb miotłasty",
      "nerecznica samcza",
      "salwinia pływająca"
    ],
    "answer": 0,
    "explanation": "Zdrojek pospolity opisano jako mech słodkowodny występujący w jeziorach, stawach i rzekach."
  },
  {
    "id": "R05_HARD_04",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Brązowe skupiska na spodniej stronie liścia paproci, w których znajdują się zarodnie, to...",
    "options": null,
    "answer": "kupki zarodni",
    "altAnswers": [
      "kupki zarodni",
      "kupka zarodni"
    ],
    "image": "r05_lisc_paproci_kupki_zarodni.jpg",
    "explanation": "W obserwacji liścia paproci uczeń ogląda kupki zarodni znajdujące się po spodniej stronie liścia."
  },
  {
    "id": "R05_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz element skrzypu polnego z opisem.",
    "options": null,
    "left": [
      "pęd wiosenny",
      "pęd letni",
      "liście skrzypu",
      "korzenie skrzypu"
    ],
    "right": [
      "jest brunatny i wytwarza zarodnie",
      "jest zielony i prowadzi fotosyntezę",
      "są zredukowane i wyglądają jak małe łuski",
      "wyrastają z kłącza"
    ],
    "answer": {
      "pęd wiosenny": "jest brunatny i wytwarza zarodnie",
      "pęd letni": "jest zielony i prowadzi fotosyntezę",
      "liście skrzypu": "są zredukowane i wyglądają jak małe łuski",
      "korzenie skrzypu": "wyrastają z kłącza"
    },
    "image": "r05_budowa_skrzypu_polnego.jpg",
    "explanation": "Skrzyp polny ma dwa rodzaje pędów oraz kłącze, z którego wyrastają korzenie."
  },
  {
    "id": "R05_HARD_06",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W szyszce sosny po zapłodnieniu zachodzi zmiana. Co dzieje się z kwiatostanem żeńskim?",
    "options": [
      "rośnie i drewnieje, a w nim rozwijają się nasiona",
      "zanika i tworzy kupki zarodni",
      "zmienia się w zielny pęd letni",
      "wytwarza chwytniki",
      "tworzy owoc gruszy",
      "odpada przed powstaniem nasion"
    ],
    "answer": 0,
    "image": "r05_sosna_szyszka_nasiona.jpg",
    "explanation": "Po zapłodnieniu komórek jajowych kwiatostan żeński sosny rośnie i drewnieje, a w nim rozwijają się nasiona."
  },
  {
    "id": "R05_HARD_07",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Miłorząb dwuklapowy jest rośliną nagonasienną, mimo że jego liście nie mają kształtu igieł i opadają na zimę.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział przedstawia miłorząb jako niezwykłego przedstawiciela nagonasiennych, ponieważ ma spłaszczone liście opadające na zimę."
  },
  {
    "id": "R05_HARD_08",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: świerk pospolity, jodła pospolita, modrzew europejski, torfowiec błotny.",
    "options": null,
    "answer": "torfowiec błotny",
    "explanation": "Świerk, jodła i modrzew to rośliny nagonasienne. Torfowiec błotny jest mchem."
  },
  {
    "id": "R05_HARD_09",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe informacje z porównania gruszy i łubinu w rozdziale.",
    "options": [
      "grusza jest drzewem",
      "kwiaty gruszy są pojedyncze",
      "łubin jest rośliną zielną",
      "liście łubinu są złożone z wielu małych listków",
      "owoce łubinu to suche strąki",
      "grusza tworzy szyszki"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "r05_grusza_lubin_okrytonasienne.jpg",
    "explanation": "Schemat budowy okrytonasiennych pokazuje gruszę jako drzewo z pojedynczymi kwiatami oraz łubin jako roślinę zielną z liśćmi złożonymi i suchymi strąkami."
  },
  {
    "id": "R05_HARD_10",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj cechy nasion i owoców do grup roślin.",
    "options": null,
    "items": [
      "nasiona niczym nieosłonięte",
      "brak owoców",
      "nasiona okryte owocnią",
      "owoce obecne"
    ],
    "categories": [
      "nagonasienne",
      "okrytonasienne"
    ],
    "answer": {
      "nagonasienne": [
        "nasiona niczym nieosłonięte",
        "brak owoców"
      ],
      "okrytonasienne": [
        "nasiona okryte owocnią",
        "owoce obecne"
      ]
    },
    "image": "r05_porownanie_nasion.jpg",
    "explanation": "To podstawowa różnica między nagonasiennymi i okrytonasiennymi opisana w podsumowaniu działu."
  },
  {
    "id": "R05_HARD_11",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Dwie sosny tego samego gatunku mają różny pokrój: jedna rośnie samotnie, druga w gęstym lesie. Dlaczego sosna leśna ma koronę zaczynającą się wyżej i bardziej zwartą?",
    "options": [
      "konkuruje z innymi drzewami o dostęp do światła",
      "nie ma igieł w miesiącach zimowych",
      "wytwarza owoce z nasionami",
      "należy do roślin zielnych",
      "nie prowadzi fotosyntezy",
      "rośnie zawsze na torfowisku"
    ],
    "answer": 0,
    "explanation": "W lesie sosny rosną blisko siebie i konkurują o światło, dlatego ich korony zaczynają się na znacznej wysokości i mają zwarty pokrój."
  },
  {
    "id": "R05_HARD_12",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż zdarzenia prowadzące do powstania złóż węgla kamiennego według opisu z rozdziału.",
    "options": null,
    "items": [
      "ze szczątków roślin powstały złoża węgla kamiennego",
      "ponad 300 mln lat temu na lądzie dominowały paprociowe, widłakowe i skrzypowe",
      "niektóre dawne gatunki miały pokrój drzewiasty",
      "szczątki tych roślin gromadziły się w środowisku"
    ],
    "answer": [
      "ponad 300 mln lat temu na lądzie dominowały paprociowe, widłakowe i skrzypowe",
      "niektóre dawne gatunki miały pokrój drzewiasty",
      "szczątki tych roślin gromadziły się w środowisku",
      "ze szczątków roślin powstały złoża węgla kamiennego"
    ],
    "explanation": "Rozdział łączy dawne, często drzewiaste paprociowe, widłakowe i skrzypowe z powstaniem złóż węgla kamiennego."
  }
];

const KID_PROMPTS = {
  "R05_MCH_05": "Jak nazywają się wyrostki, które trzymają mech w podłożu?",
  "R05_PAP_04": "Jak nazywa się podziemna łodyga paproci?",
  "R05_NAG_08": "Które drzewo iglaste zrzuca igły na zimę?",
  "R05_OKR_02": "Co otacza nasiona u okrytonasiennych?",
  "R05_POR_06": "Czym różnią się nasiona nagonasiennych i okrytonasiennych?",
  "R05_HARD_04": "Jak nazywają się brązowe skupiska na spodzie liścia paproci?"
};

const chapter = {
  "id": "r05",
  "number": 5,
  "title": "Mchy, paprotniki, nagonasienne, okrytonasienne",
  "icon": "🌿",
  "sectionOrder": [
    "Mchy",
    "Paprociowe, widłakowe i skrzypowe",
    "Nagonasienne",
    "Okrytonasienne",
    "Porównanie grup roślin"
  ],
  "sectionIcons": {
    "Mchy": "🌿",
    "Paprociowe, widłakowe i skrzypowe": "🌱",
    "Nagonasienne": "🌲",
    "Okrytonasienne": "🌸",
    "Porównanie grup roślin": "🔍"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
