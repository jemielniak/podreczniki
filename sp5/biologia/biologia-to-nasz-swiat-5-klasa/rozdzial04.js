const ALL_EXERCISES = [
  {
    "id": "R04_NG_01",
    "section": "Cechy roślin nagonasiennych",
    "type": "single_choice",
    "prompt": "Gdzie u roślin nagonasiennych leżą nasiona?",
    "options": [
      "na korzeniach",
      "na łuskach nasiennych szyszki",
      "w kielichu kwiatu",
      "w mchu"
    ],
    "answer": 1,
    "explanation": "U roślin nagonasiennych nasiona nie są ukryte w owocu. Leżą na łuskach nasiennych szyszki."
  },
  {
    "id": "R04_NG_02",
    "section": "Cechy roślin nagonasiennych",
    "type": "true_false",
    "prompt": "Większość roślin nagonasiennych to drzewa i krzewy iglaste.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. W tym rozdziale rośliny nagonasienne to głównie drzewa i krzewy iglaste."
  },
  {
    "id": "R04_NG_03",
    "section": "Cechy roślin nagonasiennych",
    "type": "fill_in",
    "prompt": "Rośliny nagonasienne mają nasiona, które nie są __________, tylko leżą na __________.",
    "options": null,
    "answer": [
      "osłonięte",
      "łuskach nasiennych szyszki"
    ],
    "altAnswers": [
      [
        "osłonięte",
        "ukryte",
        "schowane"
      ],
      [
        "łuskach nasiennych szyszki",
        "łuskach szyszki",
        "łuskach nasiennych",
        "łuskach"
      ]
    ],
    "explanation": "Nagonasienne mają 'nagie' nasiona, czyli takie, które nie są zamknięte w owocu."
  },
  {
    "id": "R04_NG_04",
    "section": "Cechy roślin nagonasiennych",
    "type": "multi_select",
    "prompt": "Zaznacz cechy sosny zwyczajnej opisane w rozdziale.",
    "options": [
      "zdrewniały pień",
      "luźna korona",
      "szerokie liście",
      "szyszki",
      "płatki korony"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Sosna zwyczajna ma zdrewniały pień, luźną koronę, igły i szyszki. Nie ma szerokich liści ani płatków korony."
  },
  {
    "id": "R04_NG_05",
    "section": "Cechy roślin nagonasiennych",
    "type": "match",
    "prompt": "Połącz element sosny z jego opisem.",
    "options": null,
    "left": [
      "igły",
      "pień",
      "szyszka",
      "nasiono"
    ],
    "right": [
      "zielone, kłujące liście",
      "utrzymuje roślinę i ją unosi",
      "na jej łuskach leżą nasiona",
      "może wyrosnąć z niego nowa roślina"
    ],
    "answer": {
      "igły": "zielone, kłujące liście",
      "pień": "utrzymuje roślinę i ją unosi",
      "szyszka": "na jej łuskach leżą nasiona",
      "nasiono": "może wyrosnąć z niego nowa roślina"
    },
    "explanation": "Igły są liśćmi, pień dźwiga roślinę, szyszka nosi nasiona, a z nasiona może wyrosnąć nowa roślina."
  },
  {
    "id": "R04_NG_06",
    "section": "Cechy roślin nagonasiennych",
    "type": "single_choice",
    "prompt": "Na ilustracji widać roślinę z pniem, igłami i szyszkami. Do której grupy należy?",
    "image": "/img/tns_r04_nago_sosna_budowa.jpg",
    "options": [
      "mchy",
      "paprociowe",
      "nagonasienne",
      "okrytonasienne"
    ],
    "answer": 2,
    "explanation": "Pień, igły i szyszki to cechy roślin nagonasiennych, takich jak sosna."
  },
  {
    "id": "R04_NG_07",
    "section": "Cechy roślin nagonasiennych",
    "type": "scenario",
    "prompt": "Ola porównuje dwie gałązki z ilustracji. Na jednej są igły i szyszka, a na drugiej owoce. Które zdanie jest poprawne?",
    "image": "/img/tns_r04_nago_galazka_vs_owoc.jpg",
    "options": [
      "Gałązka z owocami należy do nagonasiennych.",
      "Gałązka z igłami i szyszką należy do mchu.",
      "Gałązka z igłami i szyszką należy do nagonasiennych.",
      "Obie gałązki pokazują tę samą grupę roślin."
    ],
    "answer": 2,
    "explanation": "Rośliny z igłami i szyszkami to nagonasienne. Owoce są cechą roślin okrytonasiennych."
  },
  {
    "id": "R04_NG_08",
    "section": "Cechy roślin nagonasiennych",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: szyszka, igły, pień, jabłko.",
    "options": null,
    "answer": "jabłko",
    "explanation": "Jabłko jest owocem rośliny okrytonasiennej. Pozostałe elementy kojarzą się z sosną i innymi nagonasiennymi."
  },
  {
    "id": "R04_NG_09",
    "section": "Cechy roślin nagonasiennych",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do właściwej grupy roślin.",
    "options": null,
    "items": [
      "igły",
      "kwiaty",
      "szyszki",
      "nasiona w owocu",
      "łuski nasienne"
    ],
    "categories": [
      "nagonasienne",
      "okrytonasienne"
    ],
    "answer": {
      "nagonasienne": [
        "igły",
        "szyszki",
        "łuski nasienne"
      ],
      "okrytonasienne": [
        "kwiaty",
        "nasiona w owocu"
      ]
    },
    "explanation": "Nagonasienne mają szyszki i łuski nasienne, a okrytonasienne mają kwiaty i nasiona ukryte w owocach."
  },
  {
    "id": "R04_NG_10",
    "section": "Cechy roślin nagonasiennych",
    "type": "riddle",
    "prompt": "Jestem drewnianym domkiem dla nagich nasion sosny. Kim jestem?",
    "options": null,
    "answer": "szyszka",
    "altAnswers": [
      "szyszka",
      "szyszki",
      "szyszką"
    ],
    "explanation": "Szyszka chroni łuski nasienne, na których leżą nasiona roślin nagonasiennych."
  },
  {
    "id": "R04_PL_11",
    "section": "Rośliny nagonasienne w Polsce",
    "type": "match",
    "prompt": "Połącz roślinę nagonasienną z cechą, po której łatwo ją rozpoznać.",
    "options": null,
    "left": [
      "jodła pospolita",
      "cis pospolity",
      "modrzew europejski",
      "jałowiec pospolity",
      "świerk pospolity",
      "sosna limba"
    ],
    "right": [
      "szyszki rosną pionowo",
      "nasiona mają czerwone osłonki",
      "zrzuca igły na zimę",
      "kłujące igły rosną po trzy",
      "szyszki zwisają z gałęzi",
      "jest drzewem górskim"
    ],
    "answer": {
      "jodła pospolita": "szyszki rosną pionowo",
      "cis pospolity": "nasiona mają czerwone osłonki",
      "modrzew europejski": "zrzuca igły na zimę",
      "jałowiec pospolity": "kłujące igły rosną po trzy",
      "świerk pospolity": "szyszki zwisają z gałęzi",
      "sosna limba": "jest drzewem górskim"
    },
    "explanation": "Każdy z tych gatunków ma cechę, która bardzo pomaga w rozpoznawaniu."
  },
  {
    "id": "R04_PL_12",
    "section": "Rośliny nagonasienne w Polsce",
    "type": "single_choice",
    "prompt": "Który gatunek poznasz po szyszkach stojących pionowo?",
    "image": "/img/tns_r04_nago_jodla.jpg",
    "options": [
      "świerk pospolity",
      "jodła pospolita",
      "cis pospolity",
      "jałowiec pospolity"
    ],
    "answer": 1,
    "explanation": "Szyszki jodły rosną pionowo w górę. To jedna z jej najłatwiejszych do zauważenia cech."
  },
  {
    "id": "R04_PL_13",
    "section": "Rośliny nagonasienne w Polsce",
    "type": "single_choice",
    "prompt": "Która roślina ma czerwone osłonki wokół nasion?",
    "image": "/img/tns_r04_nago_cis.jpg",
    "options": [
      "sosna limba",
      "modrzew europejski",
      "cis pospolity",
      "jodła pospolita"
    ],
    "answer": 2,
    "explanation": "Cis pospolity ma czerwone osłonki otaczające nasiona częściowo."
  },
  {
    "id": "R04_PL_14",
    "section": "Rośliny nagonasienne w Polsce",
    "type": "true_false",
    "prompt": "Modrzew europejski jesienią żółknie i gubi igły.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Modrzew jest nagonasienny, ale na zimę zrzuca igły."
  },
  {
    "id": "R04_PL_15",
    "section": "Rośliny nagonasienne w Polsce",
    "type": "fill_in",
    "prompt": "Modrzew ma igły zebrane w __________. Jesienią jego igły __________.",
    "image": "/img/tns_r04_nago_modrzew.jpg",
    "options": null,
    "answer": [
      "pęczkach",
      "opadają"
    ],
    "altAnswers": [
      [
        "pęczkach",
        "pęczki"
      ],
      [
        "opadają",
        "spadają",
        "odpadają"
      ]
    ],
    "explanation": "Modrzew ma igły w pęczkach. Jesienią żółkną i opadają."
  },
  {
    "id": "R04_PL_16",
    "section": "Rośliny nagonasienne w Polsce",
    "type": "single_choice",
    "prompt": "Który gatunek jest krzewem o kłujących igłach rosnących po trzy?",
    "image": "/img/tns_r04_nago_jalowiec.jpg",
    "options": [
      "jałowiec pospolity",
      "świerk pospolity",
      "jodła pospolita",
      "brzoza brodawkowata"
    ],
    "answer": 0,
    "explanation": "Jałowiec pospolity jest krzewem iglastym, a jego kłujące igły wyrastają po trzy."
  },
  {
    "id": "R04_PL_17",
    "section": "Rośliny nagonasienne w Polsce",
    "type": "multi_select",
    "prompt": "Zaznacz rośliny nagonasienne poznane w tym rozdziale.",
    "options": [
      "jodła pospolita",
      "brzoza brodawkowata",
      "cis pospolity",
      "świerk pospolity",
      "lipa drobnolistna"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "Jodła, cis i świerk to rośliny nagonasienne. Brzoza i lipa są okrytonasienne."
  },
  {
    "id": "R04_PL_18",
    "section": "Rośliny nagonasienne w Polsce",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: jodła pospolita, świerk pospolity, modrzew europejski, brzoza brodawkowata.",
    "options": null,
    "answer": "brzoza brodawkowata",
    "explanation": "Brzoza jest drzewem liściastym, czyli okrytonasiennym. Pozostałe trzy rośliny są nagonasienne."
  },
  {
    "id": "R04_PL_19",
    "section": "Rośliny nagonasienne w Polsce",
    "type": "scenario",
    "prompt": "Bartek widzi w lesie drzewo z luźną koroną, sztywnymi igłami i czerwonawą korą w górnej części pnia. Jaki to najpewniej gatunek?",
    "options": [
      "sosna zwyczajna",
      "cis pospolity",
      "brzoza brodawkowata",
      "lipa drobnolistna"
    ],
    "answer": 0,
    "explanation": "Tak w rozdziale opisano sosnę zwyczajną - najczęściej spotykaną roślinę nagonasienną w polskich lasach."
  },
  {
    "id": "R04_PL_20",
    "section": "Rośliny nagonasienne w Polsce",
    "type": "single_choice",
    "prompt": "Który z poznanych gatunków jest drzewem górskim?",
    "options": [
      "sosna limba",
      "świerk pospolity",
      "jałowiec pospolity",
      "cis pospolity"
    ],
    "answer": 0,
    "explanation": "W rozdziale sosna limba została opisana jako drzewo - gatunek górski."
  },
  {
    "id": "R04_OK_21",
    "section": "Cechy roślin okrytonasiennych",
    "type": "single_choice",
    "prompt": "Skąd wzięła się nazwa roślin okrytonasiennych?",
    "options": [
      "mają bardzo twarde korzenie",
      "ich nasiona są ukryte w owocach",
      "zawsze mają czerwone kwiaty",
      "rosną tylko w sadach"
    ],
    "answer": 1,
    "explanation": "Rośliny okrytonasienne mają nasiona okryte, czyli ukryte w owocach."
  },
  {
    "id": "R04_OK_22",
    "section": "Cechy roślin okrytonasiennych",
    "type": "single_choice",
    "prompt": "Która litera na ilustracji pokazuje krzewinkę?",
    "image": "/img/tns_r04_okry_formy.jpg",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "Krzewinka jest mała i zdrewniała tylko częściowo. Na ilustracji tak wygląda litera C."
  },
  {
    "id": "R04_OK_23",
    "section": "Cechy roślin okrytonasiennych",
    "type": "true_false",
    "prompt": "Jabłoń z owocami to roślina okrytonasienna.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. U jabłoni nasiona są ukryte w owocu."
  },
  {
    "id": "R04_OK_24",
    "section": "Cechy roślin okrytonasiennych",
    "type": "match",
    "prompt": "Połącz organ rośliny z jego główną funkcją.",
    "options": null,
    "left": [
      "kwiat",
      "liść",
      "łodyga",
      "korzeń"
    ],
    "right": [
      "służy do rozmnażania płciowego",
      "tu przebiega fotosynteza",
      "podtrzymuje liście, kwiaty i owoce",
      "pobiera wodę i sole mineralne"
    ],
    "answer": {
      "kwiat": "służy do rozmnażania płciowego",
      "liść": "tu przebiega fotosynteza",
      "łodyga": "podtrzymuje liście, kwiaty i owoce",
      "korzeń": "pobiera wodę i sole mineralne"
    },
    "explanation": "Każdy organ rośliny ma własne zadanie. Dzięki temu roślina może żyć, rosnąć i się rozmnażać."
  },
  {
    "id": "R04_OK_25",
    "section": "Cechy roślin okrytonasiennych",
    "type": "single_choice",
    "prompt": "Na której literze widać organ, w którym zachodzi fotosynteza i wymiana gazowa?",
    "image": "/img/tns_r04_okry_organy.jpg",
    "options": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "answer": 2,
    "explanation": "Fotosynteza i wymiana gazowa zachodzą głównie w liściu. Na ilustracji to litera C."
  },
  {
    "id": "R04_OK_26",
    "section": "Cechy roślin okrytonasiennych",
    "type": "multi_select",
    "prompt": "Zaznacz organy rośliny.",
    "options": [
      "korzeń",
      "łodyga",
      "liść",
      "kwiat",
      "chmura"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Korzeń, łodyga, liść i kwiat to organy rośliny. Chmura nie jest częścią rośliny."
  },
  {
    "id": "R04_OK_27",
    "section": "Cechy roślin okrytonasiennych",
    "type": "fill_in",
    "prompt": "Korzeń pobiera z gleby __________ i __________.",
    "options": null,
    "answer": [
      "wodę",
      "sole mineralne"
    ],
    "altAnswers": [
      [
        "wodę",
        "woda"
      ],
      [
        "sole mineralne",
        "soli mineralnych",
        "minerały"
      ]
    ],
    "explanation": "Korzeń zaopatruje roślinę w wodę i sole mineralne pobrane z gleby."
  },
  {
    "id": "R04_OK_28",
    "section": "Cechy roślin okrytonasiennych",
    "type": "true_false",
    "prompt": "Łodyga podtrzymuje liście, kwiaty i owoce.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Łodyga utrzymuje nadziemne części rośliny."
  },
  {
    "id": "R04_OK_29",
    "section": "Cechy roślin okrytonasiennych",
    "type": "sort",
    "prompt": "Przyporządkuj modyfikacje do organu, z którego powstały.",
    "image": "/img/tns_r04_okry_modyfikacje.jpg",
    "options": null,
    "items": [
      "korzenie czepne bluszczu",
      "kłącze imbiru",
      "liście pułapkowe rosiczki",
      "liście spichrzowe cebuli"
    ],
    "categories": [
      "korzeń",
      "łodyga",
      "liść"
    ],
    "answer": {
      "korzeń": [
        "korzenie czepne bluszczu"
      ],
      "łodyga": [
        "kłącze imbiru"
      ],
      "liść": [
        "liście pułapkowe rosiczki",
        "liście spichrzowe cebuli"
      ]
    },
    "explanation": "Niektóre organy roślin zmieniają swój kształt i funkcję. Tak powstają modyfikacje."
  },
  {
    "id": "R04_OK_30",
    "section": "Cechy roślin okrytonasiennych",
    "type": "riddle",
    "prompt": "Jestem ukrytą częścią rośliny. Pobieram wodę i sole mineralne. Kim jestem?",
    "options": null,
    "answer": "korzeń",
    "altAnswers": [
      "korzeń",
      "korzenie",
      "korzeniem"
    ],
    "explanation": "Korzeń zwykle znajduje się w glebie i pobiera z niej wodę oraz sole mineralne."
  },
  {
    "id": "R04_KN_31",
    "section": "Kwiaty, owoce i nasiona",
    "type": "single_choice",
    "prompt": "Który element kwiatu znajduje się w samym środku i kończy się zalążnią?",
    "image": "/img/tns_r04_kwiat_budowa.jpg",
    "options": [
      "pręciki",
      "słupek",
      "płatki korony",
      "działki kielicha"
    ],
    "answer": 1,
    "explanation": "W środku kwiatu znajduje się słupek. Jego dolna część to zalążnia."
  },
  {
    "id": "R04_KN_32",
    "section": "Kwiaty, owoce i nasiona",
    "type": "single_choice",
    "prompt": "Który organ rośliny służy do rozmnażania płciowego?",
    "options": [
      "korzeń",
      "kwiat",
      "łodyga",
      "liść"
    ],
    "answer": 1,
    "explanation": "Kwiat bierze udział w rozmnażaniu płciowym rośliny."
  },
  {
    "id": "R04_KN_33",
    "section": "Kwiaty, owoce i nasiona",
    "type": "true_false",
    "prompt": "Pręciki i słupek są częściami kwiatu.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Pręciki i słupek należą do budowy kwiatu."
  },
  {
    "id": "R04_KN_34",
    "section": "Kwiaty, owoce i nasiona",
    "type": "fill_in",
    "prompt": "W nasionie __________ chroni zarodek, a __________ przechowuje pokarm.",
    "image": "/img/tns_r04_nasiono_budowa.jpg",
    "options": null,
    "answer": [
      "łupina nasienna",
      "tkanka zapasowa"
    ],
    "altAnswers": [
      [
        "łupina nasienna",
        "łupina",
        "łupiną nasienną"
      ],
      [
        "tkanka zapasowa",
        "bielmo",
        "zapas pokarmu",
        "substancje odżywcze"
      ]
    ],
    "explanation": "Łupina nasienna chroni wnętrze nasiona, a tkanka zapasowa dostarcza pokarm rozwijającemu się zarodkowi."
  },
  {
    "id": "R04_KN_35",
    "section": "Kwiaty, owoce i nasiona",
    "type": "true_false",
    "prompt": "Owoce mniszka lekarskiego najczęściej roznosi wiatr.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Lekkie owoce mniszka mogą być łatwo unoszone przez wiatr."
  },
  {
    "id": "R04_KN_36",
    "section": "Kwiaty, owoce i nasiona",
    "type": "single_choice",
    "prompt": "Na ilustracji owoc mniszka unosi się w powietrzu. Co go przenosi?",
    "image": "/img/tns_r04_rozsiewanie_nasion.jpg",
    "options": [
      "wiatr",
      "woda",
      "kamienie",
      "śnieg"
    ],
    "answer": 0,
    "explanation": "Owoc mniszka jest lekki i ma aparat lotny, więc przenosi go wiatr."
  },
  {
    "id": "R04_KN_37",
    "section": "Kwiaty, owoce i nasiona",
    "type": "single_choice",
    "prompt": "Niecierpek drobnokwiatowy rozprzestrzenia nasiona, bo...",
    "options": [
      "jego owoce wystrzeliwują nasiona",
      "nasiona leżą na szyszce",
      "nasiona nosi mech",
      "nasiona dojrzewają pod ziemią"
    ],
    "answer": 0,
    "explanation": "Owoc niecierpka pęka gwałtownie i wyrzuca nasiona na pewną odległość."
  },
  {
    "id": "R04_KN_38",
    "section": "Kwiaty, owoce i nasiona",
    "type": "sequence",
    "prompt": "Ułóż etapy kiełkowania od najwcześniejszego do najpóźniejszego.",
    "image": "/img/tns_r04_kielkowanie.jpg",
    "options": null,
    "items": [
      "liścienie zaczynają odżywiać roślinę dzięki fotosyntezie",
      "łupina pęka i pokazuje się korzeń zarodkowy",
      "nasiono nasiąka wodą i pęcznieje",
      "liścienie zostają wyniesione nad glebę",
      "z zarodka rozwijają się pęd i pierwsze liście"
    ],
    "answer": [
      "nasiono nasiąka wodą i pęcznieje",
      "łupina pęka i pokazuje się korzeń zarodkowy",
      "z zarodka rozwijają się pęd i pierwsze liście",
      "liścienie zostają wyniesione nad glebę",
      "liścienie zaczynają odżywiać roślinę dzięki fotosyntezie"
    ],
    "explanation": "Najpierw nasiono pobiera wodę, potem pęka, wyrasta korzeń i pęd, a na końcu liścienie zaczynają pracować."
  },
  {
    "id": "R04_KN_39",
    "section": "Kwiaty, owoce i nasiona",
    "type": "sort",
    "prompt": "Przyporządkuj sposoby rozmnażania do odpowiedniej grupy.",
    "options": null,
    "items": [
      "za pomocą nasion",
      "przez rozłogi",
      "przez bulwy korzeniowe"
    ],
    "categories": [
      "płciowe",
      "wegetatywne"
    ],
    "answer": {
      "płciowe": [
        "za pomocą nasion"
      ],
      "wegetatywne": [
        "przez rozłogi",
        "przez bulwy korzeniowe"
      ]
    },
    "explanation": "Rozmnażanie za pomocą nasion jest płciowe, a przez rozłogi i bulwy korzeniowe - wegetatywne."
  },
  {
    "id": "R04_KN_40",
    "section": "Kwiaty, owoce i nasiona",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: płatki korony, pręciki, zalążnia, szyszka.",
    "options": null,
    "answer": "szyszka",
    "explanation": "Szyszka nie jest częścią kwiatu roślin okrytonasiennych."
  },
  {
    "id": "R04_DL_41",
    "section": "Drzewa liściaste w Polsce",
    "type": "single_choice",
    "prompt": "Które drzewo ma liść z żołędziami?",
    "image": "/img/tns_r04_liscie_lisciaste.jpg",
    "options": [
      "dąb szypułkowy",
      "brzoza brodawkowata",
      "lipa drobnolistna",
      "jesion wyniosły"
    ],
    "answer": 0,
    "explanation": "Żołędzie rosną na dębie. To bardzo charakterystyczna wskazówka."
  },
  {
    "id": "R04_DL_42",
    "section": "Drzewa liściaste w Polsce",
    "type": "multi_select",
    "prompt": "Zaznacz drzewa liściaste rosnące w Polsce.",
    "options": [
      "dąb szypułkowy",
      "brzoza brodawkowata",
      "lipa drobnolistna",
      "jesion wyniosły",
      "jodła pospolita"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Dąb, brzoza, lipa i jesion są liściaste. Jodła należy do drzew iglastych."
  },
  {
    "id": "R04_DL_43",
    "section": "Drzewa liściaste w Polsce",
    "type": "match",
    "prompt": "Połącz drzewo liściaste z cechą, po której łatwo je rozpoznać.",
    "options": null,
    "left": [
      "dąb szypułkowy",
      "brzoza brodawkowata",
      "lipa drobnolistna",
      "jesion wyniosły"
    ],
    "right": [
      "ma żołędzie",
      "ma białą korę",
      "ma liść w kształcie serca",
      "ma liść z wielu listków"
    ],
    "answer": {
      "dąb szypułkowy": "ma żołędzie",
      "brzoza brodawkowata": "ma białą korę",
      "lipa drobnolistna": "ma liść w kształcie serca",
      "jesion wyniosły": "ma liść z wielu listków"
    },
    "explanation": "Takie cechy bardzo pomagają rozpoznać drzewa liściaste."
  },
  {
    "id": "R04_DL_44",
    "section": "Drzewa liściaste w Polsce",
    "type": "true_false",
    "prompt": "Dąb, brzoza i lipa to rośliny okrytonasienne.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Drzewa liściaste z tego rozdziału należą do roślin okrytonasiennych."
  },
  {
    "id": "R04_DL_45",
    "section": "Drzewa liściaste w Polsce",
    "type": "riddle",
    "prompt": "Mam białą korę i delikatne liście. Jestem...",
    "options": null,
    "answer": "brzoza brodawkowata",
    "altAnswers": [
      "brzoza brodawkowata",
      "brzoza",
      "brzozy"
    ],
    "explanation": "Biała kora to jedna z najbardziej znanych cech brzozy."
  },
  {
    "id": "R04_DL_46",
    "section": "Drzewa liściaste w Polsce",
    "type": "fill_in",
    "prompt": "Dąb, brzoza, lipa i jesion to drzewa __________, a sosna i świerk to drzewa __________.",
    "options": null,
    "answer": [
      "liściaste",
      "iglaste"
    ],
    "altAnswers": [
      [
        "liściaste",
        "liściastymi"
      ],
      [
        "iglaste",
        "iglastymi"
      ]
    ],
    "explanation": "Liściaste mają szerokie liście, a iglaste - igły."
  },
  {
    "id": "R04_DL_47",
    "section": "Drzewa liściaste w Polsce",
    "type": "scenario",
    "prompt": "Maja podniosła liść w kształcie serca. Z jakiego drzewa mógł spaść?",
    "options": [
      "lipa drobnolistna",
      "świerk pospolity",
      "modrzew europejski",
      "jodła pospolita"
    ],
    "answer": 0,
    "explanation": "Liść w kształcie serca to dobra wskazówka, że chodzi o lipę."
  },
  {
    "id": "R04_DL_48",
    "section": "Drzewa liściaste w Polsce",
    "type": "sort",
    "prompt": "Przyporządkuj drzewa do właściwej grupy.",
    "options": null,
    "items": [
      "dąb szypułkowy",
      "jodła zwyczajna",
      "jesion wyniosły",
      "modrzew europejski",
      "lipa drobnolistna"
    ],
    "categories": [
      "liściaste",
      "nagonasienne"
    ],
    "answer": {
      "liściaste": [
        "dąb szypułkowy",
        "jesion wyniosły",
        "lipa drobnolistna"
      ],
      "nagonasienne": [
        "jodła zwyczajna",
        "modrzew europejski"
      ]
    },
    "explanation": "Nie wszystkie drzewa są liściaste. Jodła i modrzew należą do nagonasiennych."
  },
  {
    "id": "R04_DL_49",
    "section": "Drzewa liściaste w Polsce",
    "type": "true_false",
    "prompt": "Rośliny okrytonasienne mogą być źródłem pokarmu i miejscem życia dla innych organizmów.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Dają pokarm, tlen i schronienie wielu organizmom."
  },
  {
    "id": "R04_DL_50",
    "section": "Drzewa liściaste w Polsce",
    "type": "match",
    "prompt": "Patrz na ilustrację i połącz rolę roślin okrytonasiennych z właściwą literą.",
    "image": "/img/tns_r04_role_w_przyrodzie.jpg",
    "options": null,
    "left": [
      "produkcja tlenu i pochłanianie dwutlenku węgla",
      "źródło pokarmu",
      "środowisko do życia dla innych organizmów"
    ],
    "right": [
      "A",
      "B",
      "C"
    ],
    "answer": {
      "produkcja tlenu i pochłanianie dwutlenku węgla": "B",
      "źródło pokarmu": "C",
      "środowisko do życia dla innych organizmów": "A"
    },
    "explanation": "Las pomaga w wymianie gazowej, rośliny bywają pokarmem, a drzewa są też domem dla zwierząt."
  },
  {
    "id": "R04_ST_51",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która litera pokazuje jodłę pospolitą?",
    "image": "/img/tns_r04_hard_nagonasienne_litery.jpg",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "explanation": "Jodłę rozpoznasz po pionowo stojącej szyszce."
  },
  {
    "id": "R04_ST_52",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady modyfikacji do organu, z którego powstały.",
    "image": "/img/tns_r04_hard_modyfikacje_litery.jpg",
    "options": null,
    "items": [
      "korzenie czepne bluszczu",
      "kłącze imbiru",
      "liście pułapkowe rosiczki",
      "liście spichrzowe cebuli",
      "wąsy czepne"
    ],
    "categories": [
      "korzeń",
      "łodyga",
      "liść"
    ],
    "answer": {
      "korzeń": [
        "korzenie czepne bluszczu"
      ],
      "łodyga": [
        "kłącze imbiru"
      ],
      "liść": [
        "liście pułapkowe rosiczki",
        "liście spichrzowe cebuli",
        "wąsy czepne"
      ]
    },
    "explanation": "Modyfikacje mogą powstawać z różnych organów. Trzeba patrzeć nie tylko na wygląd, ale też na pochodzenie."
  },
  {
    "id": "R04_ST_53",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Rośliny nagonasienne mają nasiona na __________, a rośliny okrytonasienne ukrywają nasiona w __________.",
    "options": null,
    "answer": [
      "łuskach nasiennych szyszki",
      "owocach"
    ],
    "altAnswers": [
      [
        "łuskach nasiennych szyszki",
        "łuskach szyszki",
        "łuskach"
      ],
      [
        "owocach",
        "owocu",
        "w owocach"
      ]
    ],
    "explanation": "To najważniejsza różnica między nagonasiennymi a okrytonasiennymi."
  },
  {
    "id": "R04_ST_54",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz literę z nazwą części kwiatu.",
    "image": "/img/tns_r04_hard_kwiat_litery.jpg",
    "options": null,
    "left": [
      "A",
      "B",
      "C",
      "D"
    ],
    "right": [
      "płatek korony",
      "pręciki",
      "słupek",
      "działki kielicha"
    ],
    "answer": {
      "A": "płatek korony",
      "B": "pręciki",
      "C": "słupek",
      "D": "działki kielicha"
    },
    "explanation": "W kwiecie trzeba odróżnić duże płatki, pręciki z pylnikami, słupek i zielone działki kielicha."
  },
  {
    "id": "R04_ST_55",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który sposób rozsiewania nasion pokazuje litera C?",
    "image": "/img/tns_r04_hard_rozsiewanie_litery.jpg",
    "options": [
      "wiatr",
      "siła własnego owocu",
      "zwierzęta",
      "woda"
    ],
    "answer": 2,
    "explanation": "Litera C pokazuje ptaka. To przykład rozsiewania nasion przez zwierzęta."
  },
  {
    "id": "R04_ST_56",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Na ilustracji zaznacz litery, które pokazują drzewa liściaste.",
    "image": "/img/tns_r04_hard_liscie_mieszane.jpg",
    "options": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "A to dąb, C to lipa, a E to jesion. B i D pokazują rośliny nagonasienne."
  },
  {
    "id": "R04_ST_57",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Patrz na ilustrację i ułóż etapy kiełkowania od najwcześniejszego do najpóźniejszego.",
    "image": "/img/tns_r04_hard_kielkowanie_litery.jpg",
    "options": null,
    "items": [
      "E",
      "B",
      "D",
      "A",
      "C"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "explanation": "Najpierw nasiono pęcznieje, potem pęka, wyrastają korzeń i pęd, a na końcu roślina rozwija liścienie i liście."
  },
  {
    "id": "R04_ST_58",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Modrzew europejski jest rośliną nagonasienną, chociaż zrzuca igły na zimę.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Zrzucanie igieł nie zmienia tego, że modrzew należy do nagonasiennych."
  },
  {
    "id": "R04_ST_59",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: jodła pospolita, jałowiec pospolity, sosna limba, jesion wyniosły.",
    "options": null,
    "answer": "jesion wyniosły",
    "explanation": "Jesion jest drzewem liściastym, czyli okrytonasiennym. Pozostałe rośliny są nagonasienne."
  },
  {
    "id": "R04_ST_60",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz gatunek z najważniejszą wskazówką rozpoznawczą.",
    "options": null,
    "left": [
      "jodła pospolita",
      "cis pospolity",
      "modrzew europejski",
      "jałowiec pospolity",
      "świerk pospolity"
    ],
    "right": [
      "szyszki pionowo do góry",
      "czerwone osłonki nasion",
      "zrzuca igły na zimę",
      "igły po trzy",
      "zwisające szyszki"
    ],
    "answer": {
      "jodła pospolita": "szyszki pionowo do góry",
      "cis pospolity": "czerwone osłonki nasion",
      "modrzew europejski": "zrzuca igły na zimę",
      "jałowiec pospolity": "igły po trzy",
      "świerk pospolity": "zwisające szyszki"
    },
    "explanation": "To zestaw cech, które pozwalają szybko odróżnić gatunki nagonasienne opisane w rozdziale."
  },
  {
    "id": "R04_ST_61",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które przekształcenia są modyfikacjami liści?",
    "options": [
      "kolce",
      "wąsy czepne",
      "liście pułapkowe",
      "kłącze",
      "rozłogi"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Kolce, wąsy czepne i liście pułapkowe mogą być modyfikacjami liści. Kłącze i rozłogi to modyfikacje łodygi."
  },
  {
    "id": "R04_ST_62",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz organ z przykładem jego modyfikacji.",
    "options": null,
    "left": [
      "korzeń",
      "łodyga",
      "liść"
    ],
    "right": [
      "korzenie czepne bluszczu",
      "kłącze imbiru",
      "liście pułapkowe rosiczki"
    ],
    "answer": {
      "korzeń": "korzenie czepne bluszczu",
      "łodyga": "kłącze imbiru",
      "liść": "liście pułapkowe rosiczki"
    },
    "explanation": "Modyfikacje mogą dotyczyć korzenia, łodygi albo liścia."
  },
  {
    "id": "R04_ST_63",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Kasia widzi roślinę z owocem, a w środku nasiona. Co to mówi o tej roślinie?",
    "options": [
      "jest nagonasienna",
      "jest okrytonasienna",
      "jest mchem",
      "nie ma organów"
    ],
    "answer": 1,
    "explanation": "Nasiona ukryte w owocu to cecha roślin okrytonasiennych."
  },
  {
    "id": "R04_ST_64",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która litera pokazuje roślinę, która zrzuca igły na zimę?",
    "image": "/img/tns_r04_hard_iglaki_zima.jpg",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "Litera B pokazuje modrzew. To nagonasienna roślina, która zrzuca igły na zimę."
  },
  {
    "id": "R04_ST_65",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W kwiacie __________ i __________ biorą udział w rozmnażaniu płciowym.",
    "options": null,
    "answer": [
      "pręciki",
      "słupek"
    ],
    "altAnswers": [
      [
        "pręciki",
        "pręcik"
      ],
      [
        "słupek",
        "słupki",
        "słupkiem"
      ]
    ],
    "explanation": "W kwiatach w rozmnażaniu płciowym uczestniczą pręciki i słupek."
  },
  {
    "id": "R04_ST_66",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj sposoby rozmnażania do odpowiedniej grupy.",
    "options": null,
    "items": [
      "za pomocą nasion",
      "przez rozłogi",
      "przez bulwy korzeniowe",
      "przez cebulę"
    ],
    "categories": [
      "płciowe",
      "wegetatywne"
    ],
    "answer": {
      "płciowe": [
        "za pomocą nasion"
      ],
      "wegetatywne": [
        "przez rozłogi",
        "przez bulwy korzeniowe",
        "przez cebulę"
      ]
    },
    "explanation": "Rozmnażanie płciowe daje nasiona. Rozłogi, bulwy korzeniowe i cebula pozwalają rozmnażać się wegetatywnie."
  },
  {
    "id": "R04_ST_67",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które zdanie o korze sosny zwyczajnej jest prawdziwe?",
    "options": [
      "cały pień jest biały",
      "w dolnej części pnia kora jest brunatnoszara, a wyżej czerwonawa",
      "kora sosny jest zawsze zielona",
      "pień sosny nie jest zdrewniały"
    ],
    "answer": 1,
    "explanation": "Tak opisano sosnę zwyczajną w tekście z rozdziału."
  },
  {
    "id": "R04_ST_68",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady wykorzystania roślin okrytonasiennych przez człowieka.",
    "options": [
      "warzywa",
      "owoce",
      "len",
      "drewno",
      "kamienie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Rośliny okrytonasienne dają nam między innymi warzywa, owoce, len i drewno."
  },
  {
    "id": "R04_ST_69",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jestem drzewem iglastym, ale jesienią żółknę i gubię igły. Kim jestem?",
    "options": null,
    "answer": "modrzew europejski",
    "altAnswers": [
      "modrzew europejski",
      "modrzew",
      "modrzewia"
    ],
    "explanation": "To wyjątkowa cecha modrzewia - jest iglasty, a jednak zrzuca igły na zimę."
  },
  {
    "id": "R04_ST_70",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj gatunki do właściwej grupy roślin.",
    "options": null,
    "items": [
      "cis pospolity",
      "dąb szypułkowy",
      "modrzew europejski",
      "lipa drobnolistna",
      "jodła zwyczajna"
    ],
    "categories": [
      "nagonasienne",
      "okrytonasienne"
    ],
    "answer": {
      "nagonasienne": [
        "cis pospolity",
        "modrzew europejski",
        "jodła zwyczajna"
      ],
      "okrytonasienne": [
        "dąb szypułkowy",
        "lipa drobnolistna"
      ]
    },
    "explanation": "Cis, modrzew i jodła to nagonasienne, a dąb i lipa - okrytonasienne."
  }
];

const KID_PROMPTS = {
  "R04_NG_07": "Która gałązka jest nagonasienna?",
  "R04_OK_22": "Gdzie jest krzewinka?",
  "R04_OK_25": "W której części rośliny zachodzi fotosynteza?",
  "R04_KN_38": "Ułóż kiełkowanie po kolei.",
  "R04_DL_50": "Połącz role roślin z literami.",
  "R04_ST_54": "Połącz litery z częściami kwiatu.",
  "R04_ST_57": "Ułóż litery od pierwszego etapu kiełkowania."
};

const chapter = {
  id: "r04",
  number: 4,
  title: "Rośliny nasienne",
  icon: "🌿",
  sectionOrder: [
  "Cechy roślin nagonasiennych",
  "Rośliny nagonasienne w Polsce",
  "Cechy roślin okrytonasiennych",
  "Kwiaty, owoce i nasiona",
  "Drzewa liściaste w Polsce"
],
  sectionIcons: {
  "Cechy roślin nagonasiennych": "🌲",
  "Rośliny nagonasienne w Polsce": "🧭",
  "Cechy roślin okrytonasiennych": "🌸",
  "Kwiaty, owoce i nasiona": "🌱",
  "Drzewa liściaste w Polsce": "🍃"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
