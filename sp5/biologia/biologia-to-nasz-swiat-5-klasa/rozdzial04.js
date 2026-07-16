// Skróty sekcji (do identyfikatorów ćwiczeń):
//   NAG  = Rośliny nagonasienne
//   POL  = Nagonasienne w Polsce
//   OKR  = Rośliny okrytonasienne
//   ORG  = Organy, nasiona i rozmnażanie
//   LIS  = Drzewa liściaste i znaczenie roślin
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_NAG_01",
    "section": "Rośliny nagonasienne",
    "type": "single_choice",
    "prompt": "Która cecha najlepiej wyjaśnia nazwę rośliny nagonasienne?",
    "image": "r04_szyszka_i_nasiona.jpg",
    "options": [
      "Nasiona są ukryte w owocach",
      "Nasiona są nieosłonięte i leżą na łuskach szyszek",
      "Rośliny nie wytwarzają nasion",
      "Rozmnażają się wyłącznie przez zarodniki",
      "Zawsze mają miękkie zielone łodygi",
      "Ich liście zawsze opadają na zimę"
    ],
    "answer": 1,
    "explanation": "U roślin nagonasiennych nasiona nie są ukryte w owocach. Znajdują się na łuskach nasiennych szyszek."
  },
  {
    "id": "R04_NAG_02",
    "section": "Rośliny nagonasienne",
    "type": "true_false",
    "prompt": "Rośliny nagonasienne wytwarzają owoce, w których ukryte są nasiona.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz. U nagonasiennych nasiona nie są osłonięte owocem."
  },
  {
    "id": "R04_NAG_03",
    "section": "Rośliny nagonasienne",
    "type": "fill_in",
    "prompt": "Rośliny nagonasienne wytwarzają __________, które nie są osłonięte owocem.",
    "options": null,
    "answer": [
      "nasiona"
    ],
    "altAnswers": [
      [
        "nasiona",
        "nasion"
      ]
    ],
    "explanation": "Najważniejszą cechą nagonasiennych jest obecność nasion nieukrytych w owocach."
  },
  {
    "id": "R04_NAG_04",
    "section": "Rośliny nagonasienne",
    "type": "match",
    "prompt": "Połącz element budowy sosny z opisem.",
    "image": "r04_sosna_zwyczajna.jpg",
    "options": null,
    "left": [
      "igły",
      "pień",
      "kwiatostan",
      "szyszka"
    ],
    "right": [
      "liście sosny",
      "zdrewniała oś drzewa",
      "skupienie kwiatów",
      "organ z łuskami nasiennymi"
    ],
    "answer": {
      "igły": "liście sosny",
      "pień": "zdrewniała oś drzewa",
      "kwiatostan": "skupienie kwiatów",
      "szyszka": "organ z łuskami nasiennymi"
    },
    "explanation": "Sosna ma pień, igły, kwiatostany i szyszki. Szyszka wiąże się z obecnością nasion na łuskach nasiennych."
  },
  {
    "id": "R04_NAG_05",
    "section": "Rośliny nagonasienne",
    "type": "multi_select",
    "prompt": "Zaznacz cechy roślin nagonasiennych.",
    "options": [
      "Wytwarzają nasiona",
      "Nasiona nie są osłonięte owocem",
      "Większość to drzewa i krzewy iglaste",
      "Mają owoce z nasionami",
      "Rozmnażają się wyłącznie przez zarodniki",
      "Nie mają tkanek przewodzących"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Rośliny nagonasienne są roślinami nasiennymi. W większości są to drzewa i krzewy iglaste, a ich nasiona nie są osłonięte owocem."
  },
  {
    "id": "R04_NAG_06",
    "section": "Rośliny nagonasienne",
    "type": "single_choice",
    "prompt": "Z których kwiatostanów sosny powstają szyszki?",
    "options": [
      "z kwiatostanów męskich",
      "z kwiatostanów żeńskich",
      "z liści spichrzowych",
      "z korzeni czepnych",
      "z igieł jednorocznych",
      "z pnia"
    ],
    "answer": 1,
    "explanation": "Szyszki sosny powstają z kwiatostanów żeńskich."
  },
  {
    "id": "R04_NAG_07",
    "section": "Rośliny nagonasienne",
    "type": "true_false",
    "prompt": "Sosna zwyczajna ma sztywne, kłujące igły.",
    "options": null,
    "answer": true,
    "explanation": "Opis sosny w rozdziale wskazuje, że jej igły są sztywne i kłujące."
  },
  {
    "id": "R04_NAG_08",
    "section": "Rośliny nagonasienne",
    "type": "riddle",
    "prompt": "Jak nazywa się organ z łuskami nasiennymi, na których znajdują się nasiona wielu roślin nagonasiennych?",
    "options": null,
    "answer": "szyszka",
    "altAnswers": [
      "szyszka",
      "szyszka nasienna"
    ],
    "explanation": "Szyszka składa się z łusek, na których mogą znajdować się nasiona roślin nagonasiennych."
  },
  {
    "id": "R04_NAG_09",
    "section": "Rośliny nagonasienne",
    "type": "odd_one_out",
    "prompt": "Wskaż element niepasujący do budowy sosny zwyczajnej: igły, pień, szyszka, owoc.",
    "options": null,
    "answer": "owoc",
    "explanation": "Sosna jest rośliną nagonasienną, więc nie tworzy owoców."
  },
  {
    "id": "R04_NAG_10",
    "section": "Rośliny nagonasienne",
    "type": "scenario",
    "prompt": "Uczeń ogląda gałązkę rośliny z igłami i szyszką. Widzi nasiona położone na łuskach, a nie zamknięte w owocu. Do jakiej grupy należy ta roślina?",
    "image": "r04_szyszka_i_nasiona.jpg",
    "options": [
      "do roślin okrytonasiennych",
      "do roślin nagonasiennych",
      "do mchów",
      "do paprociowych",
      "do roślin zarodnikowych bez tkanek przewodzących",
      "do roślin zielnych"
    ],
    "answer": 1,
    "explanation": "Nasiona nieukryte w owocu i obecność szyszki wskazują na roślinę nagonasienną."
  },
  {
    "id": "R04_NAG_11",
    "section": "Rośliny nagonasienne",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do właściwej grupy roślin nasiennych.",
    "options": null,
    "items": [
      "nasiona na łuskach szyszek",
      "nasiona ukryte w owocach",
      "większość to drzewa i krzewy iglaste",
      "wytwarzają owoce"
    ],
    "categories": [
      "nagonasienne",
      "okrytonasienne"
    ],
    "answer": {
      "nagonasienne": [
        "nasiona na łuskach szyszek",
        "większość to drzewa i krzewy iglaste"
      ],
      "okrytonasienne": [
        "nasiona ukryte w owocach",
        "wytwarzają owoce"
      ]
    },
    "explanation": "Nagonasienne mają nieosłonięte nasiona na łuskach szyszek, a okrytonasienne mają nasiona ukryte w owocach."
  },
  {
    "id": "R04_NAG_12",
    "section": "Rośliny nagonasienne",
    "type": "true_false",
    "prompt": "Rośliny nasienne należą do roślin naczyniowych.",
    "options": null,
    "answer": true,
    "explanation": "Rośliny nasienne mają tkanki przewodzące, dlatego zalicza się je do roślin naczyniowych."
  },
  {
    "id": "R04_POL_01",
    "section": "Nagonasienne w Polsce",
    "type": "match",
    "prompt": "Połącz roślinę nagonasienną z jej cechą.",
    "image": "r04_igly_szyszki_nagonasiennych.jpg",
    "options": null,
    "left": [
      "jodła pospolita",
      "cis pospolity",
      "modrzew europejski",
      "świerk pospolity"
    ],
    "right": [
      "szyszki rosną pionowo i rozpadają się na gałęzi",
      "nasiona mają czerwone osłonki",
      "igły jesienią żółkną i opadają",
      "szyszki zwisają z gałęzi"
    ],
    "answer": {
      "jodła pospolita": "szyszki rosną pionowo i rozpadają się na gałęzi",
      "cis pospolity": "nasiona mają czerwone osłonki",
      "modrzew europejski": "igły jesienią żółkną i opadają",
      "świerk pospolity": "szyszki zwisają z gałęzi"
    },
    "explanation": "Różne nagonasienne można rozpoznać po ustawieniu szyszek, wyglądzie nasion albo ułożeniu igieł."
  },
  {
    "id": "R04_POL_02",
    "section": "Nagonasienne w Polsce",
    "type": "single_choice",
    "prompt": "Która roślina nagonasienna ma nasiona częściowo otoczone czerwonymi osłonkami?",
    "options": [
      "cis pospolity",
      "jodła pospolita",
      "świerk pospolity",
      "modrzew europejski",
      "sosna limba",
      "jałowiec pospolity"
    ],
    "answer": 0,
    "explanation": "Cis pospolity wyróżnia się nasionami z czerwonymi osłonkami."
  },
  {
    "id": "R04_POL_03",
    "section": "Nagonasienne w Polsce",
    "type": "true_false",
    "prompt": "Modrzew europejski zrzuca igły na zimę.",
    "options": null,
    "answer": true,
    "explanation": "Modrzew jesienią żółknie i zrzuca igły, co odróżnia go od wielu innych drzew iglastych."
  },
  {
    "id": "R04_POL_04",
    "section": "Nagonasienne w Polsce",
    "type": "fill_in",
    "prompt": "U modrzewia igły rosną w pęczkach po __________, a jesienią __________.",
    "options": null,
    "answer": [
      "20-40",
      "żółkną i opadają"
    ],
    "altAnswers": [
      [
        "20-40",
        "20–40",
        "od 20 do 40"
      ],
      [
        "żółkną i opadają",
        "żółkną i opadają na zimę",
        "zolkną i opadają"
      ]
    ],
    "explanation": "Rozdział podaje, że igły modrzewia rosną po 20-40, jesienią żółkną i opadają na zimę."
  },
  {
    "id": "R04_POL_05",
    "section": "Nagonasienne w Polsce",
    "type": "multi_select",
    "prompt": "Zaznacz rośliny nagonasienne występujące w Polsce wymienione w rozdziale.",
    "options": [
      "cis pospolity",
      "jodła pospolita",
      "modrzew europejski",
      "świerk pospolity",
      "dąb szypułkowy",
      "lipa drobnolistna"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W rozdziale jako nagonasienne występują między innymi cis, jodła, modrzew i świerk. Dąb i lipa są drzewami liściastymi, czyli okrytonasiennymi."
  },
  {
    "id": "R04_POL_06",
    "section": "Nagonasienne w Polsce",
    "type": "odd_one_out",
    "prompt": "Wskaż roślinę niepasującą do pozostałych: jodła pospolita, świerk pospolity, modrzew europejski, brzoza brodawkowata.",
    "options": null,
    "answer": "brzoza brodawkowata",
    "explanation": "Brzoza brodawkowata jest drzewem liściastym i okrytonasiennym, a pozostałe rośliny są nagonasienne."
  },
  {
    "id": "R04_POL_07",
    "section": "Nagonasienne w Polsce",
    "type": "riddle",
    "prompt": "Jaki krzew iglasty ma kłujące igły wyrastające w grupach po trzy?",
    "options": null,
    "answer": "jałowiec pospolity",
    "altAnswers": [
      "jałowiec pospolity",
      "jałowiec"
    ],
    "explanation": "Taką cechę w rozdziale przypisano jałowcowi pospolitemu."
  },
  {
    "id": "R04_POL_08",
    "section": "Nagonasienne w Polsce",
    "type": "sort",
    "prompt": "Przyporządkuj rośliny do grup.",
    "options": null,
    "items": [
      "cis pospolity",
      "modrzew europejski",
      "jodła pospolita",
      "dąb szypułkowy",
      "lipa drobnolistna"
    ],
    "categories": [
      "nagonasienne",
      "okrytonasienne"
    ],
    "answer": {
      "nagonasienne": [
        "cis pospolity",
        "modrzew europejski",
        "jodła pospolita"
      ],
      "okrytonasienne": [
        "dąb szypułkowy",
        "lipa drobnolistna"
      ]
    },
    "explanation": "Cis, modrzew i jodła są nagonasienne. Dąb i lipa to rośliny okrytonasienne."
  },
  {
    "id": "R04_POL_09",
    "section": "Nagonasienne w Polsce",
    "type": "true_false",
    "prompt": "Jodła pospolita ma szyszki zwisające z gałęzi.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz. Szyszki jodły rosną pionowo w górę, a zwisające szyszki są cechą świerka."
  },
  {
    "id": "R04_POL_10",
    "section": "Nagonasienne w Polsce",
    "type": "single_choice",
    "prompt": "Który gatunek nagonasienny wymieniono jako drzewo górskie?",
    "options": [
      "sosna limba",
      "cis pospolity",
      "jałowiec pospolity",
      "modrzew europejski",
      "świerk pospolity",
      "jodła pospolita"
    ],
    "answer": 0,
    "explanation": "Wśród przedstawionych nagonasiennych drzewem górskim jest sosna limba."
  },
  {
    "id": "R04_OKR_01",
    "section": "Rośliny okrytonasienne",
    "type": "single_choice",
    "prompt": "Skąd pochodzi nazwa rośliny okrytonasienne?",
    "image": "r04_owoc_z_nasionami.jpg",
    "options": [
      "od okrywania gleby liśćmi",
      "od nasion ukrytych w owocach",
      "od braku kwiatów",
      "od nasion leżących na łuskach szyszek",
      "od igieł przykrytych żywicą",
      "od rozmnażania przez zarodniki"
    ],
    "answer": 1,
    "explanation": "U okrytonasiennych nasiona są okryte, czyli ukryte w owocach."
  },
  {
    "id": "R04_OKR_02",
    "section": "Rośliny okrytonasienne",
    "type": "true_false",
    "prompt": "Rośliny okrytonasienne mają kwiaty, owoce i nasiona.",
    "options": null,
    "answer": true,
    "explanation": "Cechami okrytonasiennych są kwiaty, owoce oraz nasiona ukryte w owocach."
  },
  {
    "id": "R04_OKR_03",
    "section": "Rośliny okrytonasienne",
    "type": "multi_select",
    "prompt": "Zaznacz cechy roślin okrytonasiennych.",
    "options": [
      "mają kwiaty",
      "wytwarzają owoce",
      "nasiona są ukryte w owocach",
      "nasiona leżą nagie na łuskach szyszek",
      "nie mają organów roślinnych",
      "są wyłącznie drzewami iglastymi"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Okrytonasienne mają kwiaty i owoce, a ich nasiona są ukryte w owocach. W tej grupie występują różne formy roślin."
  },
  {
    "id": "R04_OKR_04",
    "section": "Rośliny okrytonasienne",
    "type": "fill_in",
    "prompt": "Rośliny okrytonasienne mają __________, __________ i nasiona ukryte w __________.",
    "options": null,
    "answer": [
      "kwiaty",
      "owoce",
      "owocach"
    ],
    "altAnswers": [
      [
        "kwiaty"
      ],
      [
        "owoce"
      ],
      [
        "owocach",
        "owocu"
      ]
    ],
    "explanation": "Nasiona okrytonasiennych znajdują się w owocach, a kwiaty biorą udział w rozmnażaniu płciowym."
  },
  {
    "id": "R04_OKR_05",
    "section": "Rośliny okrytonasienne",
    "type": "match",
    "prompt": "Połącz formę rośliny okrytonasiennej z opisem.",
    "image": "r04_formy_okrytonasiennych.jpg",
    "options": null,
    "left": [
      "drzewa",
      "krzewy",
      "krzewinki",
      "rośliny zielne"
    ],
    "right": [
      "wysokie rośliny z wyraźnym pniem",
      "rośliny o wielu zdrewniałych pędach",
      "niskie rośliny krzewiaste",
      "rośliny o miękkich zielonych pędach"
    ],
    "answer": {
      "drzewa": "wysokie rośliny z wyraźnym pniem",
      "krzewy": "rośliny o wielu zdrewniałych pędach",
      "krzewinki": "niskie rośliny krzewiaste",
      "rośliny zielne": "rośliny o miękkich zielonych pędach"
    },
    "explanation": "W rozdziale wskazano cztery formy okrytonasiennych: drzewa, krzewy, krzewinki i rośliny zielne."
  },
  {
    "id": "R04_OKR_06",
    "section": "Rośliny okrytonasienne",
    "type": "odd_one_out",
    "prompt": "Wskaż element niepasujący do form roślin okrytonasiennych: rośliny zielne, krzewinki, drzewa, szyszki.",
    "options": null,
    "answer": "szyszki",
    "explanation": "Szyszki nie są formą rośliny okrytonasiennej. Formami są między innymi drzewa, krzewy, krzewinki i rośliny zielne."
  },
  {
    "id": "R04_OKR_07",
    "section": "Rośliny okrytonasienne",
    "type": "scenario",
    "prompt": "Na zdjęciu widać czerwony owoc z nasionami w środku. Uczeń ma określić grupę tej rośliny. Która odpowiedź jest poprawna?",
    "image": "r04_owoc_z_nasionami.jpg",
    "options": [
      "roślina nagonasienna",
      "roślina okrytonasienna",
      "mech",
      "skrzyp",
      "widłak",
      "paproć"
    ],
    "answer": 1,
    "explanation": "Owoc z nasionami jest cechą roślin okrytonasiennych."
  },
  {
    "id": "R04_OKR_08",
    "section": "Rośliny okrytonasienne",
    "type": "riddle",
    "prompt": "Jak nazywa się organ roślin okrytonasiennych, w którym ukryte są nasiona?",
    "options": null,
    "answer": "owoc",
    "altAnswers": [
      "owoc"
    ],
    "explanation": "Owoc zawiera i osłania nasiona roślin okrytonasiennych."
  },
  {
    "id": "R04_OKR_09",
    "section": "Rośliny okrytonasienne",
    "type": "true_false",
    "prompt": "Nasiona roślin okrytonasiennych leżą nagie na łuskach szyszek.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz. Taki opis dotyczy nagonasiennych, a u okrytonasiennych nasiona są w owocach."
  },
  {
    "id": "R04_OKR_10",
    "section": "Rośliny okrytonasienne",
    "type": "sort",
    "prompt": "Rozdziel cechy roślin nasiennych.",
    "options": null,
    "items": [
      "nasiona ukryte w owocach",
      "nasiona nie są osłonięte",
      "mają owoce",
      "większość to drzewa i krzewy iglaste"
    ],
    "categories": [
      "okrytonasienne",
      "nagonasienne"
    ],
    "answer": {
      "okrytonasienne": [
        "nasiona ukryte w owocach",
        "mają owoce"
      ],
      "nagonasienne": [
        "nasiona nie są osłonięte",
        "większość to drzewa i krzewy iglaste"
      ]
    },
    "explanation": "Cechy nagonasiennych i okrytonasiennych różnią się przede wszystkim sposobem osłonięcia nasion."
  },
  {
    "id": "R04_OKR_11",
    "section": "Rośliny okrytonasienne",
    "type": "single_choice",
    "prompt": "Które określenie nie jest formą roślin okrytonasiennych wymienioną w rozdziale?",
    "options": [
      "drzewa",
      "krzewy",
      "krzewinki",
      "rośliny zielne",
      "owoce",
      "krzewy liściaste"
    ],
    "answer": 4,
    "explanation": "Owoc jest organem rośliny, a nie formą roślin okrytonasiennych. Formami są drzewa, krzewy, krzewinki i rośliny zielne."
  },
  {
    "id": "R04_OKR_12",
    "section": "Rośliny okrytonasienne",
    "type": "match",
    "prompt": "Połącz grupę z właściwym przykładem cechy.",
    "options": null,
    "left": [
      "okrytonasienne",
      "nagonasienne",
      "rośliny zielne",
      "drzewa liściaste"
    ],
    "right": [
      "nasiona w owocach",
      "nasiona na łuskach szyszek",
      "miękkie zielone pędy",
      "przykład formy okrytonasiennych"
    ],
    "answer": {
      "okrytonasienne": "nasiona w owocach",
      "nagonasienne": "nasiona na łuskach szyszek",
      "rośliny zielne": "miękkie zielone pędy",
      "drzewa liściaste": "przykład formy okrytonasiennych"
    },
    "explanation": "Okrytonasienne tworzą owoce, a nagonasienne nie osłaniają nasion owocami."
  },
  {
    "id": "R04_OKR_13",
    "section": "Rośliny okrytonasienne",
    "type": "fill_in",
    "prompt": "Wśród roślin okrytonasiennych występują drzewa, krzewy, __________ i __________.",
    "options": null,
    "answer": [
      "krzewinki",
      "rośliny zielne"
    ],
    "altAnswers": [
      [
        "krzewinki"
      ],
      [
        "rośliny zielne",
        "rosliny zielne"
      ]
    ],
    "explanation": "Rozdział wymienia cztery formy roślin okrytonasiennych: drzewa, krzewy, krzewinki i rośliny zielne."
  },
  {
    "id": "R04_ORG_01",
    "section": "Organy, nasiona i rozmnażanie",
    "type": "match",
    "prompt": "Połącz organ rośliny z jego funkcją.",
    "image": "r04_organy_rosliny.jpg",
    "options": null,
    "left": [
      "kwiat",
      "liść",
      "łodyga",
      "korzeń"
    ],
    "right": [
      "uczestniczy w rozmnażaniu płciowym",
      "przebiega w nim fotosynteza",
      "podtrzymuje liście, kwiaty i owoce",
      "zaopatruje roślinę w wodę i sole mineralne"
    ],
    "answer": {
      "kwiat": "uczestniczy w rozmnażaniu płciowym",
      "liść": "przebiega w nim fotosynteza",
      "łodyga": "podtrzymuje liście, kwiaty i owoce",
      "korzeń": "zaopatruje roślinę w wodę i sole mineralne"
    },
    "explanation": "Korzeń pobiera wodę i sole mineralne, łodyga podtrzymuje organy, liść odpowiada między innymi za fotosyntezę, a kwiat uczestniczy w rozmnażaniu płciowym."
  },
  {
    "id": "R04_ORG_02",
    "section": "Organy, nasiona i rozmnażanie",
    "type": "single_choice",
    "prompt": "W którym organie rośliny przebiega fotosynteza i wymiana gazowa?",
    "options": [
      "w liściu",
      "w korzeniu",
      "w nasieniu",
      "w łupinie nasiennej",
      "w szyszce",
      "w pniu martwym"
    ],
    "answer": 0,
    "explanation": "Fotosynteza i wymiana gazowa zachodzą przede wszystkim w liściach."
  },
  {
    "id": "R04_ORG_03",
    "section": "Organy, nasiona i rozmnażanie",
    "type": "true_false",
    "prompt": "Korzeń zaopatruje roślinę w wodę i sole mineralne.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Korzeń pobiera z podłoża wodę oraz sole mineralne."
  },
  {
    "id": "R04_ORG_04",
    "section": "Organy, nasiona i rozmnażanie",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje liścia wymienione w rozdziale.",
    "options": [
      "fotosynteza",
      "wymiana gazowa",
      "pobieranie wody z gleby",
      "wytwarzanie szyszek",
      "ochrona zarodka w nasieniu",
      "podtrzymywanie pnia"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Liść jest miejscem fotosyntezy i wymiany gazowej."
  },
  {
    "id": "R04_ORG_05",
    "section": "Organy, nasiona i rozmnażanie",
    "type": "fill_in",
    "prompt": "Kwiat uczestniczy w __________ płciowym, a owoc zawiera __________.",
    "image": "r04_budowa_kwiatu.jpg",
    "options": null,
    "answer": [
      "rozmnażaniu",
      "nasiona"
    ],
    "altAnswers": [
      [
        "rozmnażaniu",
        "rozmnażaniu płciowym"
      ],
      [
        "nasiona"
      ]
    ],
    "explanation": "Kwiat służy rozmnażaniu płciowemu, a owoc zawiera nasiona."
  },
  {
    "id": "R04_ORG_06",
    "section": "Organy, nasiona i rozmnażanie",
    "type": "match",
    "prompt": "Połącz element nasiona z funkcją.",
    "image": "r04_budowa_nasiona.jpg",
    "options": null,
    "left": [
      "łupina nasienna",
      "zarodek",
      "tkanka zapasowa"
    ],
    "right": [
      "chroni przed uszkodzeniami i chorobami",
      "zawiera zawiązki przyszłych organów",
      "zawiera substancje odżywcze"
    ],
    "answer": {
      "łupina nasienna": "chroni przed uszkodzeniami i chorobami",
      "zarodek": "zawiera zawiązki przyszłych organów",
      "tkanka zapasowa": "zawiera substancje odżywcze"
    },
    "explanation": "Łupina nasienna chroni zarodek, zarodek zawiera zawiązki przyszłych organów, a tkanka zapasowa dostarcza substancji odżywczych."
  },
  {
    "id": "R04_ORG_07",
    "section": "Organy, nasiona i rozmnażanie",
    "type": "riddle",
    "prompt": "Jak nazywa się część nasiona, która zawiera zawiązki przyszłych organów rośliny?",
    "options": null,
    "answer": "zarodek",
    "altAnswers": [
      "zarodek"
    ],
    "explanation": "Zarodkiem nazywamy część nasiona, z której rozwija się nowa roślina."
  },
  {
    "id": "R04_ORG_08",
    "section": "Organy, nasiona i rozmnażanie",
    "type": "true_false",
    "prompt": "Łupina nasienna chroni zarodek przed uszkodzeniami.",
    "options": null,
    "answer": true,
    "explanation": "Łupina nasienna pełni funkcję ochronną."
  },
  {
    "id": "R04_ORG_09",
    "section": "Organy, nasiona i rozmnażanie",
    "type": "sort",
    "prompt": "Przyporządkuj sposoby rozmnażania do rodzaju.",
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
    "explanation": "Rozmnażanie za pomocą nasion jest płciowe, a przez rozłogi lub bulwy korzeniowe - wegetatywne."
  },
  {
    "id": "R04_ORG_10",
    "section": "Organy, nasiona i rozmnażanie",
    "type": "sequence",
    "prompt": "Ułóż etapy kiełkowania nasiona w poprawnej kolejności.",
    "image": "r04_kielkowanie_nasiona.jpg",
    "options": null,
    "items": [
      "liścienie zaczynają wytwarzać substancje odżywcze",
      "łupina pęka i pojawia się korzeń zarodkowy",
      "nasiono nasiąka wodą i pęcznieje",
      "z zarodka rozwijają się pęd i liścienie",
      "liścienie zostają wyniesione nad powierzchnię gleby"
    ],
    "answer": [
      "nasiono nasiąka wodą i pęcznieje",
      "łupina pęka i pojawia się korzeń zarodkowy",
      "z zarodka rozwijają się pęd i liścienie",
      "liścienie zostają wyniesione nad powierzchnię gleby",
      "liścienie zaczynają wytwarzać substancje odżywcze"
    ],
    "explanation": "Kiełkowanie zaczyna się od nasiąkania wodą. Potem pęka łupina, pojawia się korzeń, rozwijają się pęd i liścienie, a następnie liścienie zaczynają fotosyntezę."
  },
  {
    "id": "R04_ORG_11",
    "section": "Organy, nasiona i rozmnażanie",
    "type": "single_choice",
    "prompt": "Niecierpek drobnokwiatowy wystrzeliwuje nasiona z owocu. Jaki to sposób rozsiewania?",
    "image": "r04_sposoby_rozsiewania.jpg",
    "options": [
      "samorzutne rozsiewanie",
      "przenoszenie przez wiatr",
      "przenoszenie przez wodę",
      "przenoszenie przez zwierzęta",
      "kiełkowanie w glebie",
      "zapylanie przez owady"
    ],
    "answer": 0,
    "explanation": "Niecierpek sam wyrzuca nasiona z owocu, dlatego jest to samorzutne rozsiewanie nasion."
  },
  {
    "id": "R04_ORG_12",
    "section": "Organy, nasiona i rozmnażanie",
    "type": "multi_select",
    "prompt": "Zaznacz sposoby rozsiewania owoców lub nasion pokazane w rozdziale.",
    "image": "r04_sposoby_rozsiewania.jpg",
    "options": [
      "przez wiatr",
      "przez zwierzęta",
      "przez wodę",
      "przez samorzutne wyrzucanie z owocu",
      "przez tkankę przewodzącą",
      "przez wytwarzanie szyszek"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Rozdział pokazuje rozsiewanie przez wiatr, zwierzęta, wodę oraz samorzutne wyrzucanie nasion z owocu."
  },
  {
    "id": "R04_ORG_13",
    "section": "Organy, nasiona i rozmnażanie",
    "type": "true_false",
    "prompt": "Kłącze imbiru lekarskiego to korzeń.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz. Kłącze jest przekształconą łodygą, a nie korzeniem."
  },
  {
    "id": "R04_LIS_01",
    "section": "Drzewa liściaste i znaczenie roślin",
    "type": "multi_select",
    "prompt": "Zaznacz drzewa liściaste wymienione w rozdziale.",
    "image": "r04_liscie_drzew_lisciastych.jpg",
    "options": [
      "dąb szypułkowy",
      "brzoza brodawkowata",
      "lipa drobnolistna",
      "jesion wyniosły",
      "modrzew europejski",
      "jodła pospolita"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Wśród drzew liściastych wymieniono dąb szypułkowy, brzozę brodawkowatą, lipę drobnolistną i jesion wyniosły."
  },
  {
    "id": "R04_LIS_02",
    "section": "Drzewa liściaste i znaczenie roślin",
    "type": "single_choice",
    "prompt": "Które z wymienionych drzew jest drzewem liściastym i okrytonasiennym?",
    "options": [
      "dąb szypułkowy",
      "jodła pospolita",
      "świerk pospolity",
      "sosna limba",
      "cis pospolity",
      "jałowiec pospolity"
    ],
    "answer": 0,
    "explanation": "Dąb szypułkowy jest drzewem liściastym, a więc należy do okrytonasiennych."
  },
  {
    "id": "R04_LIS_03",
    "section": "Drzewa liściaste i znaczenie roślin",
    "type": "true_false",
    "prompt": "Dąb szypułkowy jest rośliną okrytonasienną.",
    "options": null,
    "answer": true,
    "explanation": "Dąb jest drzewem liściastym, a drzewa liściaste należą do roślin okrytonasiennych."
  },
  {
    "id": "R04_LIS_04",
    "section": "Drzewa liściaste i znaczenie roślin",
    "type": "match",
    "prompt": "Połącz roślinę z grupą.",
    "options": null,
    "left": [
      "cis pospolity",
      "dąb szypułkowy",
      "jodła pospolita",
      "lipa drobnolistna"
    ],
    "right": [
      "nagonasienne z czerwonymi osłonkami nasion",
      "okrytonasienne drzewo liściaste",
      "nagonasienne z pionowymi szyszkami",
      "okrytonasienne drzewo liściaste o drobnych liściach"
    ],
    "answer": {
      "cis pospolity": "nagonasienne z czerwonymi osłonkami nasion",
      "dąb szypułkowy": "okrytonasienne drzewo liściaste",
      "jodła pospolita": "nagonasienne z pionowymi szyszkami",
      "lipa drobnolistna": "okrytonasienne drzewo liściaste o drobnych liściach"
    },
    "explanation": "Cis i jodła to nagonasienne, a dąb i lipa to drzewa liściaste, czyli okrytonasienne."
  },
  {
    "id": "R04_LIS_05",
    "section": "Drzewa liściaste i znaczenie roślin",
    "type": "fill_in",
    "prompt": "Rośliny okrytonasienne są źródłem __________ dla wielu organizmów i produkują __________.",
    "image": "r04_znaczenie_roslin.jpg",
    "options": null,
    "answer": [
      "pokarmu",
      "tlen"
    ],
    "altAnswers": [
      [
        "pokarmu"
      ],
      [
        "tlen",
        "tlenu"
      ]
    ],
    "explanation": "Rośliny okrytonasienne są ważne w przyrodzie, między innymi jako źródło pokarmu i producenci tlenu."
  },
  {
    "id": "R04_LIS_06",
    "section": "Drzewa liściaste i znaczenie roślin",
    "type": "single_choice",
    "prompt": "Który przykład opisuje rolę roślin okrytonasiennych w przyrodzie?",
    "image": "r04_znaczenie_roslin.jpg",
    "options": [
      "są miejscem życia dla innych organizmów",
      "zawsze tworzą szyszki",
      "nie produkują tlenu",
      "nie są pożywieniem dla zwierząt",
      "mają wyłącznie igły",
      "występują tylko w górach"
    ],
    "answer": 0,
    "explanation": "Rośliny okrytonasienne są źródłem pokarmu, miejscem życia innych organizmów i biorą udział w produkcji tlenu."
  },
  {
    "id": "R04_LIS_07",
    "section": "Drzewa liściaste i znaczenie roślin",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady znaczenia roślin okrytonasiennych dla człowieka lub przyrody.",
    "image": "r04_znaczenie_roslin.jpg",
    "options": [
      "dostarczają pokarmu",
      "produkują tlen",
      "są miejscem życia dla organizmów",
      "dostarczają drewna i innych surowców",
      "zawsze są pasożytami",
      "nie mają żadnego znaczenia dla człowieka"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Rośliny okrytonasienne dostarczają pokarmu i surowców, produkują tlen oraz tworzą środowisko życia dla innych organizmów."
  },
  {
    "id": "R04_LIS_08",
    "section": "Drzewa liściaste i znaczenie roślin",
    "type": "odd_one_out",
    "prompt": "Wskaż roślinę niepasującą do drzew liściastych: dąb szypułkowy, brzoza brodawkowata, lipa drobnolistna, modrzew europejski.",
    "options": null,
    "answer": "modrzew europejski",
    "explanation": "Modrzew europejski jest drzewem iglastym i nagonasiennym, a pozostałe to drzewa liściaste."
  },
  {
    "id": "R04_LIS_09",
    "section": "Drzewa liściaste i znaczenie roślin",
    "type": "riddle",
    "prompt": "Jak nazywa się drzewo liściaste z rozdziału, którego nazwa gatunkowa brzmi drobnolistna?",
    "options": null,
    "answer": "lipa drobnolistna",
    "altAnswers": [
      "lipa drobnolistna",
      "lipa"
    ],
    "explanation": "Chodzi o lipę drobnolistną."
  },
  {
    "id": "R04_LIS_10",
    "section": "Drzewa liściaste i znaczenie roślin",
    "type": "sort",
    "prompt": "Przyporządkuj rośliny do grup: nagonasienne albo okrytonasienne.",
    "options": null,
    "items": [
      "cis pospolity",
      "modrzew europejski",
      "jodła pospolita",
      "dąb szypułkowy",
      "brzoza brodawkowata",
      "lipa drobnolistna"
    ],
    "categories": [
      "nagonasienne",
      "okrytonasienne"
    ],
    "answer": {
      "nagonasienne": [
        "cis pospolity",
        "modrzew europejski",
        "jodła pospolita"
      ],
      "okrytonasienne": [
        "dąb szypułkowy",
        "brzoza brodawkowata",
        "lipa drobnolistna"
      ]
    },
    "explanation": "Cis, modrzew i jodła to nagonasienne, a dąb, brzoza i lipa to okrytonasienne drzewa liściaste."
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz szczegółowe cechy sosny zwyczajnej podane w rozdziale.",
    "image": "r04_sosna_zwyczajna.jpg",
    "options": [
      "ma sztywne i kłujące igły",
      "górna część kory jest czerwonawożółta",
      "igły opadają po około trzech latach",
      "wytwarza owoce z nasionami",
      "jest rośliną zielną",
      "nie ma kwiatostanów"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Opis sosny podaje między innymi sztywne i kłujące igły, czerwonawożółtą górną część kory oraz opadanie igieł po około trzech latach."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "U sosny szyszki powstają z kwiatostanów __________, a nasiona leżą na __________ szyszek.",
    "image": "r04_szyszka_i_nasiona.jpg",
    "options": null,
    "answer": [
      "żeńskich",
      "łuskach nasiennych"
    ],
    "altAnswers": [
      [
        "żeńskich",
        "zenskich",
        "żeńskich kwiatostanów"
      ],
      [
        "łuskach nasiennych",
        "luskach nasiennych",
        "łuskach"
      ]
    ],
    "explanation": "Szyszki powstają z kwiatostanów żeńskich, a nasiona u nagonasiennych znajdują się na łuskach nasiennych."
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jak opisano dolną część kory sosny zwyczajnej?",
    "options": [
      "brunatnoszara",
      "czerwonawożółta",
      "zielona",
      "biała",
      "srebrzysta",
      "fioletowa"
    ],
    "answer": 0,
    "explanation": "W tekście o sośnie wskazano, że dolna część kory jest brunatnoszara."
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "U sosny zwyczajnej występują kwiatostany męskie i żeńskie.",
    "options": null,
    "answer": true,
    "explanation": "Sosna ma kwiaty zebrane w grupy, czyli kwiatostany męskie i żeńskie."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz gatunek nagonasienny z dokładną cechą rozpoznawczą.",
    "image": "r04_igly_szyszki_nagonasiennych.jpg",
    "options": null,
    "left": [
      "jodła pospolita",
      "świerk pospolity",
      "modrzew europejski",
      "cis pospolity",
      "jałowiec pospolity"
    ],
    "right": [
      "szyszki stoją pionowo i rozpadają się na gałęzi",
      "szyszki zwisają z gałęzi",
      "igły w pęczkach po 20-40",
      "nasiona z czerwonymi osłonkami",
      "kłujące igły po trzy"
    ],
    "answer": {
      "jodła pospolita": "szyszki stoją pionowo i rozpadają się na gałęzi",
      "świerk pospolity": "szyszki zwisają z gałęzi",
      "modrzew europejski": "igły w pęczkach po 20-40",
      "cis pospolity": "nasiona z czerwonymi osłonkami",
      "jałowiec pospolity": "kłujące igły po trzy"
    },
    "explanation": "Te cechy pozwalają rozróżnić polskie rośliny nagonasienne przedstawione w rozdziale."
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż dokładną kolejność etapów kiełkowania.",
    "image": "r04_kielkowanie_nasiona.jpg",
    "options": null,
    "items": [
      "z zarodka rozwijają się pęd i pierwsze liście",
      "nasiono nasiąka wodą i pęcznieje",
      "liścienie zaczynają fotosyntezę",
      "łupina nasienna pęka i pojawia się korzeń zarodkowy",
      "liścienie zostają wyniesione na powierzchnię gleby"
    ],
    "answer": [
      "nasiono nasiąka wodą i pęcznieje",
      "łupina nasienna pęka i pojawia się korzeń zarodkowy",
      "z zarodka rozwijają się pęd i pierwsze liście",
      "liścienie zostają wyniesione na powierzchnię gleby",
      "liścienie zaczynają fotosyntezę"
    ],
    "explanation": "Najpierw nasiono nasiąka wodą, potem pęka łupina i pojawia się korzeń. Następnie rozwijają się pęd i liścienie, które po wyniesieniu nad glebę zaczynają fotosyntezę."
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj modyfikacje organów do organu, którego dotyczą.",
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
    "explanation": "Korzenie czepne są modyfikacją korzenia, kłącze imbiru jest przekształconą łodygą, a liście pułapkowe i liście spichrzowe są modyfikacjami liści."
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się rozmnażanie bez udziału nasion, na przykład przez rozłogi albo bulwy korzeniowe?",
    "options": null,
    "answer": "wegetatywne",
    "altAnswers": [
      "wegetatywne",
      "rozmnażanie wegetatywne"
    ],
    "explanation": "Rozmnażanie przez rozłogi lub bulwy korzeniowe to rozmnażanie wegetatywne."
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Owoc mniszka lekarskiego ma aparat lotny i może zostać przeniesiony daleko od rośliny macierzystej. Jaki czynnik najpewniej go przenosi?",
    "image": "r04_sposoby_rozsiewania.jpg",
    "options": [
      "wiatr",
      "woda morska",
      "korzeń",
      "łupina nasienna",
      "szyszka",
      "tkanka zapasowa"
    ],
    "answer": 0,
    "explanation": "Owoce mniszka lekarskiego są przystosowane do przenoszenia przez wiatr."
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które sposoby rozmnażania z listy są wegetatywne?",
    "options": [
      "przez rozłogi",
      "przez bulwy korzeniowe",
      "za pomocą nasion",
      "przez kwiaty i zapłodnienie",
      "przez owoce z nasionami"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Rozmnażanie przez rozłogi i bulwy korzeniowe jest wegetatywne, a rozmnażanie za pomocą nasion jest płciowe."
  },
  {
    "id": "R04_HARD_11",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Cebula ma liście spichrzowe oraz liście, w których zachodzi fotosynteza.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Cebula jest przykładem rośliny z liśćmi spichrzowymi, a jej zielone liście mogą przeprowadzać fotosyntezę."
  },
  {
    "id": "R04_HARD_12",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Liście pułapkowe rosiczki służą do __________ na owady, a korzenie czepne bluszczu do __________ się do podpór.",
    "options": null,
    "answer": [
      "polowania",
      "przyczepiania"
    ],
    "altAnswers": [
      [
        "polowania",
        "łapania",
        "chwytania"
      ],
      [
        "przyczepiania",
        "przytwierdzania"
      ]
    ],
    "explanation": "Liście pułapkowe rosiczki pomagają chwytać owady, a korzenie czepne bluszczu pomagają przyczepiać się do podpór."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r04",
  number: 4,
  title: "Rośliny nasienne",
  icon: "🌱",
  sectionOrder: [
    "Rośliny nagonasienne",
    "Nagonasienne w Polsce",
    "Rośliny okrytonasienne",
    "Organy, nasiona i rozmnażanie",
    "Drzewa liściaste i znaczenie roślin"
  ],
  sectionIcons: {
    "Rośliny nagonasienne": "🌲",
    "Nagonasienne w Polsce": "🌿",
    "Rośliny okrytonasienne": "🌸",
    "Organy, nasiona i rozmnażanie": "🌱",
    "Drzewa liściaste i znaczenie roślin": "🍃"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
