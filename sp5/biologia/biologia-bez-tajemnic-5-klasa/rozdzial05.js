// Skróty sekcji (do identyfikatorów ćwiczeń):
//   MCH  = Mchy
//   PAP  = Paprociowe, widłakowe i skrzypowe
//   NAG  = Rośliny nagonasienne
//   OKR  = Rośliny okrytonasienne
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R05_MCH_01",
    "section": "Mchy",
    "type": "single_choice",
    "prompt": "Jakie miejsca najczęściej wybierają mchy?",
    "options": [
      "Zacienione i wilgotne",
      "Suche i silnie nasłonecznione",
      "Wyłącznie słone wody",
      "Gorące pustynie",
      "Tylko pola uprawne",
      "Wyłącznie korony wysokich drzew"
    ],
    "answer": 0,
    "explanation": "Mchy preferują miejsca zacienione i wilgotne. Można je spotkać między kamieniami, na powalonych drzewach, przy strumieniach, na wilgotnych łąkach i bagnach."
  },
  {
    "id": "R05_MCH_02",
    "section": "Mchy",
    "type": "match",
    "prompt": "Połącz element budowy mchu z jego funkcją.",
    "options": null,
    "left": [
      "chwytniki",
      "ulistniona łodyżka",
      "bezlistna łodyżka",
      "zarodnia"
    ],
    "right": [
      "umocowanie w podłożu i pobieranie wody",
      "prowadzenie fotosyntezy",
      "wynoszenie zarodni ku górze",
      "wytwarzanie zarodników"
    ],
    "answer": {
      "chwytniki": "umocowanie w podłożu i pobieranie wody",
      "ulistniona łodyżka": "prowadzenie fotosyntezy",
      "bezlistna łodyżka": "wynoszenie zarodni ku górze",
      "zarodnia": "wytwarzanie zarodników"
    },
    "explanation": "Chwytniki mocują mech i pobierają wodę z solami mineralnymi, listki na ulistnionej łodyżce prowadzą fotosyntezę, bezlistna łodyżka unosi zarodnię, a w zarodni powstają zarodniki.",
    "image": "r05_budowa_mchu.jpg"
  },
  {
    "id": "R05_MCH_03",
    "section": "Mchy",
    "type": "true_false",
    "prompt": "Mchy mają takie same organy jak typowe rośliny naczyniowe: korzenie, łodygi i liście.",
    "options": null,
    "answer": false,
    "explanation": "Mchy mają prostą budowę i nie wykształcają właściwych organów. W ich opisie używa się nazw chwytniki, łodyżka i listki, których budowa różni się od korzeni, łodyg i liści."
  },
  {
    "id": "R05_MCH_04",
    "section": "Mchy",
    "type": "fill_in",
    "prompt": "Mchy są przytwierdzane do podłoża przez __________, a zarodniki powstają w __________.",
    "options": null,
    "answer": [
      "chwytniki",
      "zarodni"
    ],
    "altAnswers": [
      [
        "chwytniki",
        "chwytniki mchu"
      ],
      [
        "zarodni",
        "zarodnia"
      ]
    ],
    "explanation": "Chwytniki przytwierdzają mech do podłoża, a zarodnia jest miejscem powstawania zarodników.",
    "image": "r05_budowa_mchu.jpg"
  },
  {
    "id": "R05_MCH_05",
    "section": "Mchy",
    "type": "riddle",
    "prompt": "Powstają w zarodni, służą do rozmnażania bezpłciowego i są rozsiewane przez wiatr. Co to?",
    "options": null,
    "answer": "zarodniki",
    "altAnswers": [
      "zarodniki",
      "zarodnik"
    ],
    "explanation": "Zarodniki mchów powstają w zarodniach i mogą być przenoszone przez wiatr."
  },
  {
    "id": "R05_MCH_06",
    "section": "Mchy",
    "type": "odd_one_out",
    "prompt": "Wskaż gatunek, który nie jest mchem: płonnik pospolity, widłoząb miotłasty, torfowiec błotny, zdrojek pospolity, sosna zwyczajna.",
    "options": null,
    "answer": "sosna zwyczajna",
    "explanation": "Płonnik, widłoząb, torfowiec i zdrojek są mchami. Sosna zwyczajna jest rośliną nagonasienną."
  },
  {
    "id": "R05_MCH_07",
    "section": "Mchy",
    "type": "scenario",
    "prompt": "Na nagiej skale, na której nie ma jeszcze innych roślin, pojawiają się pierwsze niewielkie skupiska. Która cecha mchów najlepiej wyjaśnia tę obserwację?",
    "options": [
      "Są organizmami pionierskimi",
      "Wytwarzają owoce",
      "Mają głębokie korzenie",
      "Są wyłącznie wodne",
      "Rozmnażają się nasionami",
      "Zawsze tworzą drzewa"
    ],
    "answer": 0,
    "explanation": "Mchy mają małe wymagania i mogą zasiedlać nieporośnięte obszary jako jedne z pierwszych organizmów, dlatego zalicza się je do organizmów pionierskich.",
    "image": "r05_mchy_na_skale.jpg"
  },
  {
    "id": "R05_MCH_08",
    "section": "Mchy",
    "type": "multi_select",
    "prompt": "Zaznacz znaczenie mchów opisane w rozdziale.",
    "options": [
      "Regulują wilgotność gleby",
      "Są organizmami pionierskimi",
      "Tworzą składnik torfowisk",
      "Ich szczątki mogą przekształcać się w torf",
      "Wytwarzają nasiona w owocach",
      "Są schronieniem dla zwierząt"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      5
    ],
    "explanation": "Mchy zatrzymują wodę, zasiedlają nowe obszary, budują torfowiska, uczestniczą w powstawaniu torfu i mogą stanowić schronienie dla zwierząt. Nie tworzą nasion ani owoców."
  },
  {
    "id": "R05_MCH_09",
    "section": "Mchy",
    "type": "sequence",
    "prompt": "Ułóż czynności doświadczenia badającego wchłanianie wody przez mchy.",
    "options": null,
    "items": [
      "Porównanie wyglądu i masy mchów",
      "Umieszczenie mchu w zestawie z wilgotną watą",
      "Przygotowanie zestawu kontrolnego bez wody",
      "Odczekanie około dwóch godzin"
    ],
    "answer": [
      "Umieszczenie mchu w zestawie z wilgotną watą",
      "Przygotowanie zestawu kontrolnego bez wody",
      "Odczekanie około dwóch godzin",
      "Porównanie wyglądu i masy mchów"
    ],
    "explanation": "W próbie badawczej mech ma kontakt z wilgotnym środowiskiem, a w kontrolnej nie. Po około dwóch godzinach porównuje się wygląd, elastyczność, barwę i ewentualnie masę okazów."
  },
  {
    "id": "R05_MCH_10",
    "section": "Mchy",
    "type": "sort",
    "prompt": "Przyporządkuj mchy do typowego środowiska podanego w rozdziale.",
    "options": null,
    "items": [
      "płonnik pospolity",
      "widłoząb miotłasty",
      "torfowiec błotny",
      "zdrojek pospolity"
    ],
    "categories": [
      "środowiska lądowe",
      "zbiorniki wodne"
    ],
    "answer": {
      "środowiska lądowe": [
        "płonnik pospolity",
        "widłoząb miotłasty",
        "torfowiec błotny"
      ],
      "zbiorniki wodne": [
        "zdrojek pospolity"
      ]
    },
    "explanation": "Płonnik, widłoząb i torfowiec występują na lądzie, między innymi w lasach, na łąkach i torfowiskach. Zdrojek pospolity rośnie w jeziorach, stawach i rzekach."
  },
  {
    "id": "R05_MCH_11",
    "section": "Mchy",
    "type": "single_choice",
    "prompt": "Który opis dotyczy dorosłego torfowca błotnego?",
    "options": [
      "Nie ma chwytników, a dolne części łodyżek zamierają",
      "Ma liście ułożone w trzech rzędach i żyje w rzekach",
      "Ma widlasto zakończone listki i zakrzywioną zarodnię",
      "Ma złotawą czapeczkę i zawsze osiąga 40 cm",
      "Wytwarza owoce z nasionami",
      "Ma korzenie wyrastające z kłącza"
    ],
    "answer": 0,
    "explanation": "Dorosłe torfowce błotne nie mają chwytników. Ich dolne części łodyżek zamierają, a szczątki mogą uczestniczyć w powstawaniu torfu.",
    "image": "r05_torfowiec_blotny.jpg"
  },
  {
    "id": "R05_MCH_12",
    "section": "Mchy",
    "type": "true_false",
    "prompt": "Zarodniki mchów mogą być rozsiewane przez wiatr.",
    "options": null,
    "answer": true,
    "explanation": "Zarodniki powstają w zarodni i służą do rozmnażania bezpłciowego; wiatr pomaga je rozprzestrzeniać."
  },
  {
    "id": "R05_MCH_13",
    "section": "Mchy",
    "type": "scenario",
    "prompt": "Wysuszony mech po pobycie w zamkniętym słoiku z wilgotną watą staje się bardziej elastyczny i intensywniej zielony niż mech w zestawie kontrolnym. Jaki wniosek najlepiej pasuje do obserwacji?",
    "options": [
      "Mchy wchłaniają wodę z otoczenia",
      "Mchy wytwarzają nasiona",
      "Mchy nie reagują na wilgoć",
      "Mchy pobierają wodę wyłącznie korzeniami",
      "Mchy rosną tylko w wodzie",
      "Wilgoć niszczy listki mchów"
    ],
    "answer": 0,
    "explanation": "Zmiana wyglądu i elastyczności mchu w wilgotnym zestawie potwierdza jego zdolność do wchłaniania wody z otoczenia."
  },
  {
    "id": "R05_PAP_01",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "single_choice",
    "prompt": "Dlaczego paprociowe, widłakowe i skrzypowe zalicza się do organowców?",
    "options": [
      "Mają korzenie, łodygi i liście",
      "Wytwarzają owoce",
      "Nie mają żadnych tkanek",
      "Mają tylko chwytniki",
      "Są zawsze drzewami",
      "Rozmnażają się wyłącznie nasionami"
    ],
    "answer": 0,
    "explanation": "W budowie tych roślin można wyróżnić organy: korzenie, łodygi i liście."
  },
  {
    "id": "R05_PAP_02",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "true_false",
    "prompt": "Paprociowe, widłakowe i skrzypowe są roślinami wieloletnimi rozmnażającymi się przez zarodniki.",
    "options": null,
    "answer": true,
    "explanation": "Rośliny z tych grup żyją wiele lat i wytwarzają zarodniki służące do rozmnażania bezpłciowego."
  },
  {
    "id": "R05_PAP_03",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "fill_in",
    "prompt": "Podziemna łodyga paproci to __________, a brązowe kupki na spodzie liści zawierają __________.",
    "options": null,
    "answer": [
      "kłącze",
      "zarodnie"
    ],
    "altAnswers": [
      [
        "kłącze",
        "klacze"
      ],
      [
        "zarodnie",
        "zarodnie paproci"
      ]
    ],
    "explanation": "Kłącze jest podziemną łodygą magazynującą substancje zapasowe. Na spodzie liści paproci znajdują się kupki zarodni, w których powstają zarodniki.",
    "image": "r05_paprocia_spod_liscia.jpg"
  },
  {
    "id": "R05_PAP_04",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "match",
    "prompt": "Połącz grupę roślin z charakterystyczną cechą budowy.",
    "options": null,
    "left": [
      "paprocie",
      "widłaki",
      "skrzypy"
    ],
    "right": [
      "brązowe kupki zarodni na spodzie liści",
      "długie płożące się łodygi z widlastymi odgałęzieniami",
      "pęd wiosenny i zielony pęd letni"
    ],
    "answer": {
      "paprocie": "brązowe kupki zarodni na spodzie liści",
      "widłaki": "długie płożące się łodygi z widlastymi odgałęzieniami",
      "skrzypy": "pęd wiosenny i zielony pęd letni"
    },
    "explanation": "Paprocie tworzą kupki zarodni pod liśćmi, widłaki mają płożące się i widlasto rozgałęzione łodygi, a skrzyp polny wytwarza dwa różne rodzaje pędów.",
    "image": "r05_paprocia_spod_liscia.jpg"
  },
  {
    "id": "R05_PAP_05",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "odd_one_out",
    "prompt": "Wskaż roślinę, która nie należy do paprociowych, widłakowych ani skrzypowych: nerecznica samcza, salwinia pływająca, pióropusznik strusi, widłak jałowcowaty, skrzyp olbrzymi, jodła pospolita.",
    "options": null,
    "answer": "jodła pospolita",
    "explanation": "Nerecznica, salwinia i pióropusznik są paprociami, widłak jałowcowaty jest widłakiem, a skrzyp olbrzymi skrzypem. Jodła jest rośliną nagonasienną."
  },
  {
    "id": "R05_PAP_06",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "sort",
    "prompt": "Przyporządkuj przedstawicieli do właściwej grupy.",
    "options": null,
    "items": [
      "nerecznica samcza",
      "salwinia pływająca",
      "pióropusznik strusi",
      "widłak jałowcowaty",
      "skrzyp olbrzymi"
    ],
    "categories": [
      "paprocie",
      "widłaki",
      "skrzypy"
    ],
    "answer": {
      "paprocie": [
        "nerecznica samcza",
        "salwinia pływająca",
        "pióropusznik strusi"
      ],
      "widłaki": [
        "widłak jałowcowaty"
      ],
      "skrzypy": [
        "skrzyp olbrzymi"
      ]
    },
    "explanation": "Pierwsze trzy gatunki są paprociami, widłak jałowcowaty należy do widłaków, a skrzyp olbrzymi do skrzypów."
  },
  {
    "id": "R05_PAP_07",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "scenario",
    "prompt": "Na łące widzisz dwa pędy tej samej rośliny: brunatny pęd z kłosem zarodni oraz zielony, rozgałęziony pęd prowadzący fotosyntezę. Co to za roślina?",
    "options": [
      "skrzyp polny",
      "paprotka zwyczajna",
      "widłak goździsty",
      "płonnik pospolity",
      "sosna zwyczajna",
      "łubin trwały"
    ],
    "answer": 0,
    "explanation": "Skrzyp polny ma brunatny pęd wiosenny zakończony kłosem zarodni oraz zielony pęd letni prowadzący fotosyntezę.",
    "image": "r05_skrzyp_polny_pedy.jpg"
  },
  {
    "id": "R05_PAP_08",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "sequence",
    "prompt": "Ułóż etapy prowadzące do powstania złóż węgla kamiennego z dawnych roślin.",
    "options": null,
    "items": [
      "Powstanie złóż węgla kamiennego",
      "Dominacja wielkich paprociowych, widłakowych i skrzypowych",
      "Obumieranie roślin",
      "Przekształcanie szczątków przez bardzo długi czas"
    ],
    "answer": [
      "Dominacja wielkich paprociowych, widłakowych i skrzypowych",
      "Obumieranie roślin",
      "Przekształcanie szczątków przez bardzo długi czas",
      "Powstanie złóż węgla kamiennego"
    ],
    "explanation": "W karbonie dominowały duże, nieraz drzewiaste paprociowe, widłakowe i skrzypowe. Ze szczątków tych roślin, przekształcanych przez bardzo długi czas, powstał węgiel kamienny.",
    "image": "r05_rosliny_karbonu.jpg"
  },
  {
    "id": "R05_PAP_09",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "multi_select",
    "prompt": "Zaznacz znaczenie paprociowych, widłakowych i skrzypowych w środowisku.",
    "options": [
      "Wchodzą w skład runa leśnego",
      "Są schronieniem dla zwierząt",
      "Są pokarmem dla zwierząt",
      "Wytwarzają owoce",
      "Tworzą wyłącznie pustynne zbiorowiska"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Rośliny te są składnikiem runa, a wiele z nich zapewnia zwierzętom pokarm i schronienie."
  },
  {
    "id": "R05_PAP_10",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "riddle",
    "prompt": "Jest wieloletnim podziemnym pędem, magazynuje substancje zapasowe i występuje między innymi u paproci oraz skrzypów. Co to?",
    "options": null,
    "answer": "kłącze",
    "altAnswers": [
      "kłącze",
      "klacze"
    ],
    "explanation": "Kłącze to podziemna łodyga. Umożliwia przetrwanie zimy i wyrastanie nowych części nadziemnych."
  },
  {
    "id": "R05_PAP_11",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "single_choice",
    "prompt": "Która paproć żyje w zbiornikach wodnych, a jej liście unoszą się na powierzchni wody?",
    "options": [
      "salwinia pływająca",
      "nerecznica samcza",
      "pióropusznik strusi",
      "paprotka zwyczajna",
      "widłak jałowcowaty",
      "skrzyp olbrzymi"
    ],
    "answer": 0,
    "explanation": "Salwinia pływająca występuje w zbiornikach wodnych i ma liście unoszące się na powierzchni."
  },
  {
    "id": "R05_PAP_12",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "true_false",
    "prompt": "U widłaka goździstego korzenie mogą wyrastać na całej długości płożącej się łodygi.",
    "options": null,
    "answer": true,
    "explanation": "Widłaki mają długie płożące się łodygi, a korzenie wyrastają wzdłuż ich długości."
  },
  {
    "id": "R05_PAP_13",
    "section": "Paprociowe, widłakowe i skrzypowe",
    "type": "match",
    "prompt": "Połącz gatunek z miejscem występowania opisanym w rozdziale.",
    "options": null,
    "left": [
      "nerecznica samcza",
      "salwinia pływająca",
      "pióropusznik strusi",
      "skrzyp olbrzymi"
    ],
    "right": [
      "cieniste lasy i okolice strumieni",
      "zbiorniki wodne",
      "leśne polany, łąki i okolice strumieni",
      "wilgotne lasy głównie na pogórzu"
    ],
    "answer": {
      "nerecznica samcza": "cieniste lasy i okolice strumieni",
      "salwinia pływająca": "zbiorniki wodne",
      "pióropusznik strusi": "leśne polany, łąki i okolice strumieni",
      "skrzyp olbrzymi": "wilgotne lasy głównie na pogórzu"
    },
    "explanation": "Gatunki te różnią się wymaganiami siedliskowymi: od zbiorników wodnych po wilgotne lasy i polany."
  },
  {
    "id": "R05_NAG_01",
    "section": "Rośliny nagonasienne",
    "type": "single_choice",
    "prompt": "Skąd pochodzi nazwa roślin nagonasiennych?",
    "options": [
      "Ich nasiona nie są osłonięte owocem",
      "Nie mają łodyg",
      "Nie wytwarzają kwiatów",
      "Rosną tylko na nagich skałach",
      "Mają wyłącznie nagie korzenie",
      "Ich nasiona zawsze są pod ziemią"
    ],
    "answer": 0,
    "explanation": "Nasiona roślin nagonasiennych nie są zamknięte w owocu, lecz leżą odsłonięte na łuskach szyszki lub są otoczone inną strukturą, jak osnówka cisa."
  },
  {
    "id": "R05_NAG_02",
    "section": "Rośliny nagonasienne",
    "type": "true_false",
    "prompt": "Rośliny nagonasienne są organowcami mającymi korzenie, łodygi, liście i kwiaty.",
    "options": null,
    "answer": true,
    "explanation": "W budowie roślin nagonasiennych wyróżnia się korzenie, łodygi, liście oraz kwiaty."
  },
  {
    "id": "R05_NAG_03",
    "section": "Rośliny nagonasienne",
    "type": "fill_in",
    "prompt": "Kwiatostan męski sosny produkuje __________, a kwiatostan żeński zawiera __________.",
    "options": null,
    "answer": [
      "pyłek",
      "komórki jajowe"
    ],
    "altAnswers": [
      [
        "pyłek",
        "pylek"
      ],
      [
        "komórki jajowe",
        "komorki jajowe"
      ]
    ],
    "explanation": "W pyłku znajdują się komórki plemnikowe, natomiast kwiatostan żeński zawiera komórki jajowe.",
    "image": "r05_budowa_sosny.jpg"
  },
  {
    "id": "R05_NAG_04",
    "section": "Rośliny nagonasienne",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania i rozsiewania nasion sosny.",
    "options": null,
    "items": [
      "Rozsiewanie nasion przez wiatr",
      "Zapłodnienie komórek jajowych",
      "Rozwój nasion",
      "Wzrost i drewnienie kwiatostanu żeńskiego"
    ],
    "answer": [
      "Zapłodnienie komórek jajowych",
      "Wzrost i drewnienie kwiatostanu żeńskiego",
      "Rozwój nasion",
      "Rozsiewanie nasion przez wiatr"
    ],
    "explanation": "Po zapłodnieniu kwiatostan żeński rośnie i drewnieje, rozwijają się w nim nasiona, a skrzydełka ułatwiają ich rozsiewanie przez wiatr.",
    "image": "r05_budowa_sosny.jpg"
  },
  {
    "id": "R05_NAG_05",
    "section": "Rośliny nagonasienne",
    "type": "match",
    "prompt": "Połącz gatunek nagonasienny z charakterystyczną cechą.",
    "options": null,
    "left": [
      "świerk pospolity",
      "jodła pospolita",
      "modrzew europejski",
      "cis pospolity"
    ],
    "right": [
      "zwisające szyszki opadające w całości",
      "pionowe szyszki rozpadające się na drzewie",
      "delikatne igły zrzucane na zimę",
      "brak szyszek i czerwona osnówka nasion"
    ],
    "answer": {
      "świerk pospolity": "zwisające szyszki opadające w całości",
      "jodła pospolita": "pionowe szyszki rozpadające się na drzewie",
      "modrzew europejski": "delikatne igły zrzucane na zimę",
      "cis pospolity": "brak szyszek i czerwona osnówka nasion"
    },
    "explanation": "Świerk ma szyszki zwisające, jodła pionowe i rozpadające się, modrzew zrzuca igły, a cis nie tworzy szyszek i ma nasiona otoczone czerwoną osnówką.",
    "image": "r05_przedstawiciele_nagonasiennych.jpg"
  },
  {
    "id": "R05_NAG_06",
    "section": "Rośliny nagonasienne",
    "type": "odd_one_out",
    "prompt": "Wskaż roślinę, która nie jest nagonasienna: sosna zwyczajna, świerk pospolity, jodła pospolita, modrzew europejski, cis pospolity, grusza pospolita.",
    "options": null,
    "answer": "grusza pospolita",
    "explanation": "Sosna, świerk, jodła, modrzew i cis są nagonasienne. Grusza jest rośliną okrytonasienną i wytwarza owoce."
  },
  {
    "id": "R05_NAG_07",
    "section": "Rośliny nagonasienne",
    "type": "scenario",
    "prompt": "Rozpoznajesz roślinę po miękkich, spłaszczonych, niekłujących igłach oraz nasionach otoczonych czerwoną osnówką. Roślina jest trująca i nie tworzy szyszek. Co to?",
    "options": [
      "cis pospolity",
      "świerk pospolity",
      "jodła pospolita",
      "modrzew europejski",
      "sosna zwyczajna",
      "miłorząb dwuklapowy"
    ],
    "answer": 0,
    "explanation": "Takie cechy ma cis pospolity: nie tworzy szyszek, jego nasiona otacza czerwona osnówka, a roślina jest trująca.",
    "image": "r05_przedstawiciele_nagonasiennych.jpg"
  },
  {
    "id": "R05_NAG_08",
    "section": "Rośliny nagonasienne",
    "type": "multi_select",
    "prompt": "Zaznacz znaczenie roślin nagonasiennych w przyrodzie.",
    "options": [
      "Tworzą lasy iglaste i mieszane",
      "Dają zwierzętom pokarm i schronienie",
      "Prowadzą fotosyntezę także zimą u większości gatunków",
      "Wpływają na gospodarkę wodną",
      "Zatrzymują wiatr",
      "Wytwarzają owoce"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Nagonasienne budują lasy, wspierają zwierzęta, produkują tlen, regulują obieg wody i ograniczają działanie wiatru. Nie tworzą owoców."
  },
  {
    "id": "R05_NAG_09",
    "section": "Rośliny nagonasienne",
    "type": "sort",
    "prompt": "Przyporządkuj znaczenie roślin nagonasiennych do właściwej kategorii.",
    "options": null,
    "items": [
      "schronienie dla zwierząt",
      "produkcja tlenu",
      "regulacja gospodarki wodnej",
      "surowiec do produkcji papieru",
      "produkcja leków",
      "architektura krajobrazu"
    ],
    "categories": [
      "w przyrodzie",
      "dla człowieka"
    ],
    "answer": {
      "w przyrodzie": [
        "schronienie dla zwierząt",
        "produkcja tlenu",
        "regulacja gospodarki wodnej"
      ],
      "dla człowieka": [
        "surowiec do produkcji papieru",
        "produkcja leków",
        "architektura krajobrazu"
      ]
    },
    "explanation": "W środowisku nagonasienne zapewniają schronienie, tlen i regulują wodę. Człowiek wykorzystuje ich drewno, właściwości lecznicze i walory ozdobne."
  },
  {
    "id": "R05_NAG_10",
    "section": "Rośliny nagonasienne",
    "type": "single_choice",
    "prompt": "Jak są ułożone igły sosny zwyczajnej opisanej w rozdziale?",
    "options": [
      "W pęczkach po dwie",
      "Pojedynczo po jednej",
      "W pęczkach po dziesięć",
      "W okółkach po trzy",
      "Wyłącznie parami na korzeniu",
      "Sosna nie ma igieł"
    ],
    "answer": 0,
    "explanation": "Igły sosny zwyczajnej wyrastają w pęczkach po dwie."
  },
  {
    "id": "R05_NAG_11",
    "section": "Rośliny nagonasienne",
    "type": "true_false",
    "prompt": "Modrzew europejski zrzuca igły na zimę.",
    "options": null,
    "answer": true,
    "explanation": "Modrzew ma delikatne, niekłujące igły osadzone w pęczkach i zrzuca je przed zimą."
  },
  {
    "id": "R05_NAG_12",
    "section": "Rośliny nagonasienne",
    "type": "riddle",
    "prompt": "Ta nagonasienna roślina pochodzi z południowo-wschodnich Chin, ma spłaszczone liście zamiast typowych igieł i zrzuca je na zimę. Co to?",
    "options": null,
    "answer": "miłorząb dwuklapowy",
    "altAnswers": [
      "miłorząb dwuklapowy",
      "milorzab dwuklapowy",
      "miłorząb",
      "milorzab"
    ],
    "explanation": "Miłorząb dwuklapowy jest nagonasienny, ale jego liście są spłaszczone i opadają na zimę. W Polsce sadzi się go jako drzewo ozdobne."
  },
  {
    "id": "R05_NAG_13",
    "section": "Rośliny nagonasienne",
    "type": "scenario",
    "prompt": "Dwie sosny rosną w różnych miejscach. Jedna stoi samotnie, druga w gęstym lesie. Które stwierdzenie jest zgodne z rozdziałem?",
    "options": [
      "Samotna sosna ma koronę rozwiniętą od niższej wysokości",
      "Sosna leśna ma koronę zaczynającą się przy ziemi",
      "Obie muszą mieć identyczny kształt korony",
      "Sosna samotna nie wytwarza gałęzi",
      "Sosna leśna nie ma pnia",
      "Kształt korony nie zależy od miejsca wzrostu"
    ],
    "answer": 0,
    "explanation": "Kształt korony sosny zależy od warunków. Drzewo rosnące samotnie ma rozłożystą koronę, a w lesie korony zaczynają się wyżej, ponieważ drzewa rosną blisko siebie."
  },
  {
    "id": "R05_OKR_01",
    "section": "Rośliny okrytonasienne",
    "type": "single_choice",
    "prompt": "Jaka cecha jest typowa dla roślin okrytonasiennych?",
    "options": [
      "Obecność owocu otaczającego nasiona",
      "Brak nasion",
      "Wyłącznie igłowe liście",
      "Rozmnażanie tylko przez zarodniki",
      "Brak kwiatów",
      "Występowanie tylko w wodzie"
    ],
    "answer": 0,
    "explanation": "Tkanki owocu otaczają nasiona, dlatego rośliny te nazywa się okrytonasiennymi."
  },
  {
    "id": "R05_OKR_02",
    "section": "Rośliny okrytonasienne",
    "type": "true_false",
    "prompt": "Rośliny okrytonasienne są najliczniejszą i najbardziej różnorodną grupą roślin.",
    "options": null,
    "answer": true,
    "explanation": "Okrytonasienne występują w większości środowisk na Ziemi i tworzą bardzo liczną, różnorodną grupę."
  },
  {
    "id": "R05_OKR_03",
    "section": "Rośliny okrytonasienne",
    "type": "match",
    "prompt": "Połącz formę morfologiczną z jej opisem.",
    "options": null,
    "left": [
      "drzewa",
      "krzewy",
      "krzewinki",
      "rośliny zielne"
    ],
    "right": [
      "mają pień i boczne gałęzie tworzące koronę",
      "mają zdrewniałe łodygi bez wyraźnego pędu głównego",
      "są niskimi krzewami do 60 cm",
      "mają zielone i wiotkie niezdrewniałe łodygi"
    ],
    "answer": {
      "drzewa": "mają pień i boczne gałęzie tworzące koronę",
      "krzewy": "mają zdrewniałe łodygi bez wyraźnego pędu głównego",
      "krzewinki": "są niskimi krzewami do 60 cm",
      "rośliny zielne": "mają zielone i wiotkie niezdrewniałe łodygi"
    },
    "explanation": "Formy morfologiczne różnią się budową i stopniem zdrewnienia łodyg oraz obecnością wyraźnego pnia.",
    "image": "r05_formy_okrytonasiennych.jpg"
  },
  {
    "id": "R05_OKR_04",
    "section": "Rośliny okrytonasienne",
    "type": "fill_in",
    "prompt": "Owoc gruszy zawiera wewnątrz __________, a suche owoce łubinu nazywają się __________.",
    "options": null,
    "answer": [
      "nasiona",
      "strąki"
    ],
    "altAnswers": [
      [
        "nasiona",
        "nasiono"
      ],
      [
        "strąki",
        "strak",
        "strąk"
      ]
    ],
    "explanation": "Nasiona gruszy są zamknięte w owocu, natomiast owoce łubinu to suche strąki zawierające nasiona."
  },
  {
    "id": "R05_OKR_05",
    "section": "Rośliny okrytonasienne",
    "type": "sort",
    "prompt": "Przyporządkuj przedstawicieli okrytonasiennych do form morfologicznych.",
    "options": null,
    "items": [
      "dąb szypułkowy",
      "lipa drobnolistna",
      "kalina koralowa",
      "berberys zwyczajny",
      "wrzos zwyczajny",
      "borówka brusznica",
      "pokrzywa zwyczajna",
      "łubin trwały"
    ],
    "categories": [
      "drzewa",
      "krzewy",
      "krzewinki",
      "rośliny zielne"
    ],
    "answer": {
      "drzewa": [
        "dąb szypułkowy",
        "lipa drobnolistna"
      ],
      "krzewy": [
        "kalina koralowa",
        "berberys zwyczajny"
      ],
      "krzewinki": [
        "wrzos zwyczajny",
        "borówka brusznica"
      ],
      "rośliny zielne": [
        "pokrzywa zwyczajna",
        "łubin trwały"
      ]
    },
    "explanation": "Dąb i lipa są drzewami, kalina i berberys krzewami, wrzos i borówka brusznica krzewinkami, a pokrzywa i łubin roślinami zielnymi."
  },
  {
    "id": "R05_OKR_06",
    "section": "Rośliny okrytonasienne",
    "type": "odd_one_out",
    "prompt": "Wskaż roślinę, która nie jest drzewem liściastym opisanym w części o okrytonasiennych: wierzba biała, buk zwyczajny, dąb szypułkowy, klon zwyczajny, lipa drobnolistna, świerk pospolity.",
    "options": null,
    "answer": "świerk pospolity",
    "explanation": "Wierzba, buk, dąb, klon i lipa są drzewami okrytonasiennymi. Świerk jest nagonasienny."
  },
  {
    "id": "R05_OKR_07",
    "section": "Rośliny okrytonasienne",
    "type": "single_choice",
    "prompt": "Które drzewo ma liście dłoniaste, jesienią przebarwiające się na żółto, oraz owoce ze skrzydełkami?",
    "options": [
      "klon zwyczajny",
      "buk zwyczajny",
      "wierzba biała",
      "dąb szypułkowy",
      "topola osika",
      "jarząb pospolity"
    ],
    "answer": 0,
    "explanation": "Klon zwyczajny ma dłoniaste liście i charakterystyczne skrzydlaki.",
    "image": "r05_liscie_i_owoce_drzew.jpg"
  },
  {
    "id": "R05_OKR_08",
    "section": "Rośliny okrytonasienne",
    "type": "multi_select",
    "prompt": "Zaznacz znaczenie roślin okrytonasiennych wymienione w rozdziale.",
    "options": [
      "Są składnikiem lasów liściastych i mieszanych",
      "Produkują tlen",
      "Regulują gospodarkę wodną",
      "Dostarczają pokarmu ludziom i zwierzętom",
      "Mogą poprawiać jakość powietrza w mieście",
      "Wszystkie zachowują liście zimą"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Okrytonasienne budują lasy, produkują tlen, wpływają na wodę, są pokarmem i ograniczają zanieczyszczenie powietrza. Wiele gatunków zrzuca liście na zimę."
  },
  {
    "id": "R05_OKR_09",
    "section": "Rośliny okrytonasienne",
    "type": "scenario",
    "prompt": "W doświadczeniu trzy nasiona fasoli leżą na gazie dotykającej wody, a trzy na suchej gazie. Po kilku dniach kiełkują tylko nasiona mające dostęp do wody. Jaki wniosek jest poprawny?",
    "options": [
      "Woda jest potrzebna do kiełkowania nasion fasoli",
      "Woda zatrzymuje kiełkowanie",
      "Nasiona kiełkują wyłącznie bez wody",
      "Światło jest jedynym badanym czynnikiem",
      "Fasola rozmnaża się przez zarodniki",
      "Sucha gaza dostarcza więcej wody"
    ],
    "answer": 0,
    "explanation": "Porównanie próby badawczej i kontrolnej pokazuje, że obecność wody jest konieczna do kiełkowania nasion fasoli.",
    "image": "r05_kielkowanie_fasoli.jpg"
  },
  {
    "id": "R05_OKR_10",
    "section": "Rośliny okrytonasienne",
    "type": "sequence",
    "prompt": "Ułóż czynności w doświadczeniu badającym wpływ wody na kiełkowanie fasoli.",
    "options": null,
    "items": [
      "Prowadzenie obserwacji przez siedem dni",
      "Umieszczenie nasion na suchej gazie w próbie kontrolnej",
      "Przymocowanie gazy do dwóch słoików",
      "Umieszczenie nasion na wilgotnej gazie w próbie badawczej"
    ],
    "answer": [
      "Przymocowanie gazy do dwóch słoików",
      "Umieszczenie nasion na wilgotnej gazie w próbie badawczej",
      "Umieszczenie nasion na suchej gazie w próbie kontrolnej",
      "Prowadzenie obserwacji przez siedem dni"
    ],
    "explanation": "Najpierw przygotowuje się dwa podobne zestawy, następnie różnicuje dostęp do wody i przez siedem dni porównuje kiełkowanie nasion.",
    "image": "r05_kielkowanie_fasoli.jpg"
  },
  {
    "id": "R05_OKR_11",
    "section": "Rośliny okrytonasienne",
    "type": "match",
    "prompt": "Połącz drzewo z cechą liści lub owoców.",
    "options": null,
    "left": [
      "lipa drobnolistna",
      "topola osika",
      "jarząb pospolity",
      "brzoza brodawkowata"
    ],
    "right": [
      "sercowate liście i małe orzeszki ze skrzydełkiem",
      "prawie okrągłe liście i owoce z puchem",
      "pierzasto złożone liście i czerwone owoce",
      "rombowe liście i drobne orzeszki ze skrzydełkami"
    ],
    "answer": {
      "lipa drobnolistna": "sercowate liście i małe orzeszki ze skrzydełkiem",
      "topola osika": "prawie okrągłe liście i owoce z puchem",
      "jarząb pospolity": "pierzasto złożone liście i czerwone owoce",
      "brzoza brodawkowata": "rombowe liście i drobne orzeszki ze skrzydełkami"
    },
    "explanation": "Opis kształtu liści i rodzaju owoców pozwala rozpoznawać pospolite polskie drzewa liściaste.",
    "image": "r05_liscie_i_owoce_drzew.jpg"
  },
  {
    "id": "R05_OKR_12",
    "section": "Rośliny okrytonasienne",
    "type": "riddle",
    "prompt": "Mam liście z wycięciami, a moje owoce są potocznie nazywane żołędziami. Jakim drzewem jestem?",
    "options": null,
    "answer": "dąb szypułkowy",
    "altAnswers": [
      "dąb szypułkowy",
      "dab szypulkowy",
      "dąb",
      "dab"
    ],
    "explanation": "Dąb szypułkowy ma liście z wycięciami i wytwarza owoce nazywane żołędziami."
  },
  {
    "id": "R05_OKR_13",
    "section": "Rośliny okrytonasienne",
    "type": "true_false",
    "prompt": "Drzewa i krzewy w mieście mogą zmniejszać zapylenie powietrza i obniżać temperaturę latem.",
    "options": null,
    "answer": true,
    "explanation": "Roślinność miejska zatrzymuje pyły, poprawia jakość powietrza i pomaga obniżać temperaturę podczas lata."
  },
  {
    "id": "R05_HARD_01",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz cechy, które według podsumowania odróżniają typowe okrytonasienne od typowych nagonasiennych.",
    "options": [
      "Nasiona okryte owocnią",
      "Obecność owoców",
      "Często barwny okwiat i owadopylność",
      "Wyłącznie igłowe liście",
      "Brak korzeni",
      "Występowanie również jako rośliny zielne"
    ],
    "answer": [
      0,
      1,
      2,
      5
    ],
    "explanation": "Okrytonasienne mają nasiona zamknięte w owocach, mogą być owadopylne i często mają barwny okwiat. Występują jako drzewa, krzewy, krzewinki i rośliny zielne."
  },
  {
    "id": "R05_HARD_02",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz strukturę z grupą roślin, dla której jest charakterystyczna w tym rozdziale.",
    "options": null,
    "left": [
      "chwytniki",
      "kłącze",
      "szyszka",
      "owoc"
    ],
    "right": [
      "mchy",
      "paprocie i skrzypy",
      "rośliny nagonasienne",
      "rośliny okrytonasienne"
    ],
    "answer": {
      "chwytniki": "mchy",
      "kłącze": "paprocie i skrzypy",
      "szyszka": "rośliny nagonasienne",
      "owoc": "rośliny okrytonasienne"
    },
    "explanation": "Mchy mają chwytniki, paprocie i skrzypy podziemne kłącza, u nagonasiennych występują szyszki, a owoc jest cechą okrytonasiennych."
  },
  {
    "id": "R05_HARD_03",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż grupy według podanych cech: od roślin bez właściwych organów i nasion do roślin mających nasiona zamknięte w owocach.",
    "options": null,
    "items": [
      "rośliny okrytonasienne",
      "mchy",
      "rośliny nagonasienne",
      "paprociowe, widłakowe i skrzypowe"
    ],
    "answer": [
      "mchy",
      "paprociowe, widłakowe i skrzypowe",
      "rośliny nagonasienne",
      "rośliny okrytonasienne"
    ],
    "explanation": "Mchy nie mają właściwych organów ani nasion. Paprotniki mają organy, lecz rozmnażają się przez zarodniki. Nagonasienne tworzą nieosłonięte nasiona, a okrytonasienne zamykają nasiona w owocach."
  },
  {
    "id": "R05_HARD_04",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który przedstawiciel nagonasiennych opisany w rozdziale osiąga wysokość do 45 m i zrzuca igły na zimę?",
    "options": [
      "modrzew europejski",
      "sosna zwyczajna",
      "świerk pospolity",
      "jodła pospolita",
      "cis pospolity",
      "miłorząb dwuklapowy"
    ],
    "answer": 0,
    "explanation": "Modrzew europejski osiąga do 45 m, ma delikatne igły w pęczkach i zrzuca je na zimę.",
    "image": "r05_przedstawiciele_nagonasiennych.jpg"
  },
  {
    "id": "R05_HARD_05",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Ponad __________ milionów lat temu, w okresie __________, ze szczątków wielkich paprociowych, widłakowych i skrzypowych zaczęły powstawać złoża węgla kamiennego.",
    "options": null,
    "answer": [
      "300",
      "karbonu"
    ],
    "altAnswers": [
      [
        "300",
        "ponad 300"
      ],
      [
        "karbonu",
        "karbon"
      ]
    ],
    "explanation": "W karbonie, ponad 300 milionów lat temu, dominowały duże rośliny zarodnikowe. Z ich szczątków powstały złoża węgla kamiennego.",
    "image": "r05_rosliny_karbonu.jpg"
  },
  {
    "id": "R05_HARD_06",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest związany z rozmnażaniem przez zarodniki: zarodnia, zarodnik, kupka zarodni, kłos zarodni, owoc.",
    "options": null,
    "answer": "owoc",
    "explanation": "Zarodnie, zarodniki, kupki zarodni i kłosy zarodni dotyczą rozmnażania mchów lub paprotników. Owoc otacza nasiona roślin okrytonasiennych."
  },
  {
    "id": "R05_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Badana roślina nie ma właściwych korzeni, łodyg ani liści. Przytwierdza się chwytnikami, wytwarza zarodniki i może jako pierwsza zasiedlić nagą skałę. Do której grupy należy?",
    "options": [
      "mchy",
      "paprocie",
      "widłaki",
      "skrzypy",
      "nagonasienne",
      "okrytonasienne"
    ],
    "answer": 0,
    "explanation": "Zestaw cech: chwytniki, brak właściwych organów, zarodniki i pionierski tryb życia wskazuje na mchy."
  },
  {
    "id": "R05_HARD_08",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj elementy rozmnażania do roślin zarodnikowych i nasiennych.",
    "options": null,
    "items": [
      "zarodnia mchu",
      "kupki zarodni paproci",
      "kłos zarodni skrzypu",
      "nasiona na łuskach szyszki",
      "nasiona w owocu",
      "pyłek sosny"
    ],
    "categories": [
      "rośliny zarodnikowe",
      "rośliny nasienne"
    ],
    "answer": {
      "rośliny zarodnikowe": [
        "zarodnia mchu",
        "kupki zarodni paproci",
        "kłos zarodni skrzypu"
      ],
      "rośliny nasienne": [
        "nasiona na łuskach szyszki",
        "nasiona w owocu",
        "pyłek sosny"
      ]
    },
    "explanation": "Mchy, paprocie i skrzypy wytwarzają zarodniki. Nagonasienne i okrytonasienne tworzą nasiona, a u sosny w rozmnażaniu uczestniczy pyłek."
  },
  {
    "id": "R05_HARD_09",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Listek i łodyżka mchu nie mają tkanek przewodzących.",
    "options": null,
    "answer": true,
    "explanation": "Zgodnie ze słowniczkiem pojęć listek i łodyżka mchu są odpowiednikami liścia i łodygi, ale nie zawierają tkanek przewodzących."
  },
  {
    "id": "R05_HARD_10",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz drzewo z dokładnym opisem owocu podanym w rozdziale.",
    "options": null,
    "left": [
      "buk zwyczajny",
      "dąb szypułkowy",
      "wierzba biała",
      "klon zwyczajny"
    ],
    "right": [
      "trójgraniaste orzeszki w kolczastej torebce",
      "żołędzie",
      "owoce z puchem rozsiewane przez wiatr",
      "owoce z charakterystycznymi skrzydełkami"
    ],
    "answer": {
      "buk zwyczajny": "trójgraniaste orzeszki w kolczastej torebce",
      "dąb szypułkowy": "żołędzie",
      "wierzba biała": "owoce z puchem rozsiewane przez wiatr",
      "klon zwyczajny": "owoce z charakterystycznymi skrzydełkami"
    },
    "explanation": "Różnice w budowie owoców są ważną cechą rozpoznawczą drzew liściastych.",
    "image": "r05_liscie_i_owoce_drzew.jpg"
  },
  {
    "id": "R05_HARD_11",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz rośliny, których nasiona lub owoce mają opisane w rozdziale przystosowania do rozsiewania przez wiatr.",
    "options": [
      "sosna zwyczajna",
      "wierzba biała",
      "klon zwyczajny",
      "topola osika",
      "brzoza brodawkowata",
      "jarząb pospolity"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Sosna ma nasiona ze skrzydełkiem; wierzba i topola owoce z puchem; klon i brzoza owoce ze skrzydełkami. Jarząb ma czerwone owoce, ale w tym rozdziale nie opisano ich jako wiatrosiewnych.",
    "image": "r05_liscie_i_owoce_drzew.jpg"
  },
  {
    "id": "R05_HARD_12",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Powstaję z obumarłych szczątków roślinnych, głównie mchów, a człowiek wykorzystuje mnie między innymi w kosmetyce i jako opał. Co to?",
    "options": null,
    "answer": "torf",
    "altAnswers": [
      "torf"
    ],
    "explanation": "Torf powstaje przede wszystkim ze szczątków mchów, zwłaszcza torfowców, na podmokłych terenach.",
    "image": "r05_torfowiec_blotny.jpg"
  },
  {
    "id": "R05_HARD_13",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Roślina ma podziemne kłącze. Wiosną wyrasta z niego brunatny pęd zakończony kłosem zarodni, a później zielony pęd prowadzący fotosyntezę. Jak nazywa się ta roślina?",
    "options": [
      "skrzyp polny",
      "widłak goździsty",
      "nerecznica samcza",
      "płonnik pospolity",
      "modrzew europejski",
      "łubin trwały"
    ],
    "answer": 0,
    "explanation": "Dwa rodzaje pędów i podziemne kłącze są charakterystyczne dla skrzypu polnego.",
    "image": "r05_skrzyp_polny_pedy.jpg"
  },
  {
    "id": "R05_HARD_14",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Po usunięciu dużej liczby drzew z obszaru zmniejsza się pobieranie wody z gleby i jej parowanie z liści lub igieł. Która funkcja roślin została bezpośrednio osłabiona?",
    "options": [
      "Regulacja gospodarki wodnej",
      "Wytwarzanie zarodników",
      "Tworzenie torfu",
      "Rozpad szyszek jodły",
      "Kiełkowanie fasoli",
      "Powstawanie chwytników"
    ],
    "answer": 0,
    "explanation": "Drzewa pobierają duże ilości wody, która następnie paruje z liści lub igieł. Proces ten pomaga regulować ilość wody w środowisku."
  }
];

const KID_PROMPTS = {
  "R05_MCH_02": "Połącz części mchu z tym, do czego służą.",
  "R05_MCH_09": "Ułóż po kolei doświadczenie z mchem i wodą.",
  "R05_PAP_04": "Połącz grupę roślin z jej wyglądem.",
  "R05_PAP_08": "Ułóż, jak z dawnych roślin powstał węgiel.",
  "R05_NAG_04": "Ułóż, jak u sosny powstają i rozsiewają się nasiona.",
  "R05_NAG_09": "Podziel znaczenie nagonasiennych na przyrodę i zastosowania człowieka.",
  "R05_OKR_03": "Połącz formę rośliny z opisem.",
  "R05_OKR_10": "Ułóż po kolei doświadczenie z fasolą i wodą.",
  "R05_HARD_03": "Ułóż grupy roślin od najprostszej budowy do nasion w owocu.",
  "R05_HARD_08": "Podziel elementy na związane z zarodnikami i z nasionami."
};

const chapter = {
  id: "r05",
  number: 5,
  title: "Mchy, paprotniki, nagonasienne, okrytonasienne",
  icon: "🌿",
  sectionOrder: [
    "Mchy",
    "Paprociowe, widłakowe i skrzypowe",
    "Rośliny nagonasienne",
    "Rośliny okrytonasienne"
  ],
  sectionIcons: {
    "Mchy": "🌿",
    "Paprociowe, widłakowe i skrzypowe": "🌱",
    "Rośliny nagonasienne": "🌲",
    "Rośliny okrytonasienne": "🌸"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
