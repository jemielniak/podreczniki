// Skróty sekcji (do identyfikatorów ćwiczeń):
//   CHEM = Pierwiastki, woda i sole mineralne
//   ORGA = Związki organiczne i metabolizm
//   KOMO = Komórka i transport przez błony
//   ODDY = Odżywianie i oddychanie
//   ROZR = Rozmnażanie, rozwój i ruch
//   KLAS = Klasyfikacja organizmów
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_CHEM_01",
    "section": "Pierwiastki, woda i sole mineralne",
    "type": "single_choice",
    "prompt": "Który pierwiastek należy do sześciu pierwiastków biogennych?",
    "options": [
      "Wapń",
      "Sód",
      "Fosfor",
      "Magnez",
      "Żelazo",
      "Fluor"
    ],
    "answer": 2,
    "explanation": "Pierwiastki biogenne to węgiel, wodór, tlen, azot, siarka i fosfor."
  },
  {
    "id": "R01_CHEM_02",
    "section": "Pierwiastki, woda i sole mineralne",
    "type": "multi_select",
    "prompt": "Zaznacz wszystkie mikroelementy.",
    "options": [
      "Żelazo",
      "Magnez",
      "Miedź",
      "Cynk",
      "Potas",
      "Fluor"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Do mikroelementów należą żelazo, miedź, cynk i fluor; magnez oraz potas są makroelementami."
  },
  {
    "id": "R01_CHEM_03",
    "section": "Pierwiastki, woda i sole mineralne",
    "type": "true_false",
    "prompt": "Żelazo jest składnikiem hemoglobiny i enzymów oddechowych.",
    "options": null,
    "answer": true,
    "explanation": "Żelazo (Fe) wchodzi w skład hemoglobiny oraz enzymów biorących udział w oddychaniu."
  },
  {
    "id": "R01_CHEM_04",
    "section": "Pierwiastki, woda i sole mineralne",
    "type": "match",
    "prompt": "Dopasuj pierwiastek do jego funkcji.",
    "options": null,
    "answer": {
      "Wapń": "Krzepnięcie krwi",
      "Magnez": "Składnik chlorofilu",
      "Chlor": "Składnik kwasu solnego w żołądku",
      "Fosfor": "Składnik ATP i ADP"
    },
    "explanation": "Wapń uczestniczy w krzepnięciu krwi, magnez buduje chlorofil, chlor wchodzi w skład kwasu solnego, a fosfor w skład nośników energii.",
    "left": [
      "Fosfor",
      "Chlor",
      "Wapń",
      "Magnez"
    ],
    "right": [
      "Składnik chlorofilu",
      "Składnik ATP i ADP",
      "Krzepnięcie krwi",
      "Składnik kwasu solnego w żołądku"
    ]
  },
  {
    "id": "R01_CHEM_05",
    "section": "Pierwiastki, woda i sole mineralne",
    "type": "fill_in",
    "prompt": "Cząsteczka wody zawiera __________ atomy wodoru i __________ atom tlenu.",
    "options": null,
    "answer": [
      "2",
      "1"
    ],
    "explanation": "Wzór H2O oznacza dwa atomy wodoru połączone z jednym atomem tlenu.",
    "altAnswers": [
      [
        "2",
        "dwa"
      ],
      [
        "1",
        "jeden"
      ]
    ]
  },
  {
    "id": "R01_CHEM_06",
    "section": "Pierwiastki, woda i sole mineralne",
    "type": "odd_one_out",
    "prompt": "Wskaż związek nieorganiczny: białka, tłuszcze, woda, węglowodany.",
    "options": null,
    "answer": "woda",
    "explanation": "Woda jest związkiem nieorganicznym, natomiast białka, tłuszcze i węglowodany są związkami organicznymi."
  },
  {
    "id": "R01_CHEM_07",
    "section": "Pierwiastki, woda i sole mineralne",
    "type": "scenario",
    "prompt": "Wewnątrz rośliny substancje rozpuszczone w wodzie przemieszczają się pomiędzy jej częściami. Którą funkcję wody ilustruje ta sytuacja?",
    "options": [
      "Udział w tworzeniu ścian z chityny",
      "Udział w transporcie substancji",
      "Magazynowanie informacji genetycznej",
      "Wytwarzanie enzymów trawiennych"
    ],
    "answer": 1,
    "explanation": "Woda umożliwia transport substancji pomiędzy częściami organizmu.",
    "image": "r01_woda_w_organizmach.jpg"
  },
  {
    "id": "R01_CHEM_08",
    "section": "Pierwiastki, woda i sole mineralne",
    "type": "sort",
    "prompt": "Przyporządkuj pierwiastki do grup.",
    "options": null,
    "answer": {
      "Makroelementy": [
        "Wapń",
        "Potas",
        "Sód",
        "Magnez"
      ],
      "Mikroelementy": [
        "Żelazo",
        "Miedź",
        "Cynk",
        "Fluor"
      ]
    },
    "explanation": "Wapń, potas, sód i magnez zaliczono do makroelementów, a żelazo, miedź, cynk i fluor do mikroelementów.",
    "items": [
      "Cynk",
      "Potas",
      "Wapń",
      "Miedź",
      "Magnez",
      "Fluor",
      "Sód",
      "Żelazo"
    ],
    "categories": [
      "Makroelementy",
      "Mikroelementy"
    ]
  },
  {
    "id": "R01_CHEM_09",
    "section": "Pierwiastki, woda i sole mineralne",
    "type": "riddle",
    "prompt": "Jaki pierwiastek wchodzi w skład chlorofilu i bierze udział w aktywacji wielu enzymów?",
    "options": null,
    "answer": "magnez",
    "explanation": "Magnez (Mg) jest składnikiem chlorofilu i bierze udział w aktywacji enzymów.",
    "altAnswers": [
      "magnez",
      "Mg"
    ]
  },
  {
    "id": "R01_CHEM_10",
    "section": "Pierwiastki, woda i sole mineralne",
    "type": "single_choice",
    "prompt": "W jakiej postaci sole mineralne najczęściej występują w organizmach?",
    "options": [
      "Rozpuszczone w płynach",
      "Wyłącznie jako kryształy",
      "Wyłącznie jako gazy",
      "Wyłącznie w jądrze komórkowym"
    ],
    "answer": 0,
    "explanation": "Sole mineralne często występują w postaci jonów rozpuszczonych w soku komórkowym lub płynach pozakomórkowych."
  },
  {
    "id": "R01_ORGA_01",
    "section": "Związki organiczne i metabolizm",
    "type": "single_choice",
    "prompt": "Z jakich jednostek połączonych w łańcuchy zbudowane są białka?",
    "options": [
      "Z nukleotydów",
      "Z cząsteczek skrobi",
      "Z cząsteczek glukozy",
      "Z aminokwasów",
      "Z cząsteczek wody",
      "Z soli mineralnych"
    ],
    "answer": 3,
    "explanation": "Białka są łańcuchami zbudowanymi z aminokwasów; ich kolejność wpływa na właściwości białka.",
    "image": "r01_lancuch_bialkowy.jpg"
  },
  {
    "id": "R01_ORGA_02",
    "section": "Związki organiczne i metabolizm",
    "type": "match",
    "prompt": "Połącz wielocukier z jego rolą lub miejscem występowania.",
    "options": null,
    "answer": {
      "Skrobia": "Materiał zapasowy roślin",
      "Glikogen": "Materiał zapasowy zwierząt",
      "Celuloza": "Składnik ściany komórkowej roślin",
      "Chityna": "Składnik ściany komórkowej grzybów"
    },
    "explanation": "Skrobia i glikogen mają funkcję zapasową, a celuloza i chityna są składnikami ścian komórkowych odpowiednio roślin i grzybów.",
    "left": [
      "Celuloza",
      "Skrobia",
      "Chityna",
      "Glikogen"
    ],
    "right": [
      "Materiał zapasowy zwierząt",
      "Składnik ściany komórkowej grzybów",
      "Materiał zapasowy roślin",
      "Składnik ściany komórkowej roślin"
    ]
  },
  {
    "id": "R01_ORGA_03",
    "section": "Związki organiczne i metabolizm",
    "type": "multi_select",
    "prompt": "Które funkcje pełnią tłuszcze?",
    "options": [
      "Magazynowanie energii",
      "Ochrona termiczna",
      "Przechowywanie kodu genetycznego",
      "Budowanie błon komórkowych",
      "Tworzenie gamet",
      "Ochrona liści przed utratą wody"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "explanation": "Lipidy pełnią funkcje zapasowe, energetyczne, budulcowe i ochronne, w tym termoizolacyjne."
  },
  {
    "id": "R01_ORGA_04",
    "section": "Związki organiczne i metabolizm",
    "type": "fill_in",
    "prompt": "Sacharoza składa się z dwóch cukrów prostych: __________ i __________.",
    "options": null,
    "answer": [
      "glukozy",
      "fruktozy"
    ],
    "explanation": "Sacharoza jest dwucukrem złożonym z glukozy i fruktozy.",
    "altAnswers": [
      [
        "glukozy",
        "glukoza"
      ],
      [
        "fruktozy",
        "fruktoza"
      ]
    ]
  },
  {
    "id": "R01_ORGA_05",
    "section": "Związki organiczne i metabolizm",
    "type": "true_false",
    "prompt": "DNA ma zwykle dwie skręcone nici, a RNA jedną nić.",
    "options": null,
    "answer": true,
    "explanation": "DNA jest zwykle dwuniciowe, a RNA zwykle jednoniciowe."
  },
  {
    "id": "R01_ORGA_06",
    "section": "Związki organiczne i metabolizm",
    "type": "odd_one_out",
    "prompt": "Wskaż cukier złożony spośród podanych: glukoza, fruktoza, ryboza, skrobia.",
    "options": null,
    "answer": "skrobia",
    "explanation": "Glukoza, fruktoza i ryboza to cukry proste; skrobia jest wielocukrem."
  },
  {
    "id": "R01_ORGA_07",
    "section": "Związki organiczne i metabolizm",
    "type": "scenario",
    "prompt": "Podczas silnego ogrzewania pokarmu białka tracą swoją pierwotną strukturę i właściwości. Jak nazywa się ten proces?",
    "options": [
      "Fotosynteza",
      "Osmoza",
      "Denaturacja",
      "Fermentacja",
      "Dyfuzja"
    ],
    "answer": 2,
    "explanation": "Wysoka temperatura może wywoływać denaturację białek."
  },
  {
    "id": "R01_ORGA_08",
    "section": "Związki organiczne i metabolizm",
    "type": "sort",
    "prompt": "Przyporządkuj podane związki do grup związków organicznych.",
    "options": null,
    "answer": {
      "Węglowodany": [
        "Skrobia",
        "Fruktoza",
        "Glikogen"
      ],
      "Lipidy": [
        "Fosfolipidy",
        "Tłuszcz roślinny"
      ],
      "Kwasy nukleinowe": [
        "DNA",
        "RNA"
      ]
    },
    "explanation": "Skrobia, fruktoza i glikogen to węglowodany; fosfolipidy i tłuszcz roślinny należą do lipidów; DNA i RNA to kwasy nukleinowe.",
    "image": "r01_helisa_dna.jpg",
    "items": [
      "RNA",
      "Fruktoza",
      "Fosfolipidy",
      "Skrobia",
      "DNA",
      "Tłuszcz roślinny",
      "Glikogen"
    ],
    "categories": [
      "Węglowodany",
      "Lipidy",
      "Kwasy nukleinowe"
    ]
  },
  {
    "id": "R01_ORGA_09",
    "section": "Związki organiczne i metabolizm",
    "type": "riddle",
    "prompt": "Jak nazywa się kierunek przemian metabolicznych, w którym z prostszych związków powstają złożone?",
    "options": null,
    "answer": "anabolizm",
    "explanation": "Anabolizm obejmuje reakcje syntezy złożonych związków z prostszych substratów.",
    "altAnswers": [
      "anabolizm",
      "reakcje anaboliczne"
    ]
  },
  {
    "id": "R01_ORGA_10",
    "section": "Związki organiczne i metabolizm",
    "type": "single_choice",
    "prompt": "Która przemiana jest przykładem katabolizmu?",
    "options": [
      "Synteza białek",
      "Oddychanie komórkowe",
      "Budowanie związków organicznych w fotosyntezie",
      "Łączenie aminokwasów w białko"
    ],
    "answer": 1,
    "explanation": "Oddychanie komórkowe to przykład katabolizmu, podczas którego związki złożone ulegają rozkładowi."
  },
  {
    "id": "R01_KOMO_01",
    "section": "Komórka i transport przez błony",
    "type": "single_choice",
    "prompt": "Która struktura komórki zawiera materiał genetyczny i kieruje jej czynnościami?",
    "options": [
      "Jądro komórkowe",
      "Cytoplazma",
      "Błona komórkowa",
      "Wakuola",
      "Aparat Golgiego",
      "Ściana komórkowa"
    ],
    "answer": 0,
    "explanation": "Jądro komórkowe zawiera materiał genetyczny oraz kieruje funkcjami komórki.",
    "image": "r01_komorka_roslinna.jpg"
  },
  {
    "id": "R01_KOMO_02",
    "section": "Komórka i transport przez błony",
    "type": "match",
    "prompt": "Połącz strukturę komórkową z jej funkcją.",
    "options": null,
    "answer": {
      "Mitochondria": "Oddychanie wewnątrzkomórkowe",
      "Chloroplasty": "Fotosynteza",
      "Aparat Golgiego": "Gromadzenie niektórych związków",
      "Wakuola roślinna": "Utrzymywanie jędrności komórki"
    },
    "explanation": "Mitochondria uczestniczą w oddychaniu, chloroplasty w fotosyntezie, aparat Golgiego gromadzi m.in. białka, a wakuola pomaga utrzymywać jędrność.",
    "left": [
      "Wakuola roślinna",
      "Aparat Golgiego",
      "Mitochondria",
      "Chloroplasty"
    ],
    "right": [
      "Fotosynteza",
      "Utrzymywanie jędrności komórki",
      "Oddychanie wewnątrzkomórkowe",
      "Gromadzenie niektórych związków"
    ]
  },
  {
    "id": "R01_KOMO_03",
    "section": "Komórka i transport przez błony",
    "type": "true_false",
    "prompt": "Komórki bakterii nie mają jądra komórkowego.",
    "options": null,
    "answer": true,
    "explanation": "Bakterie należą do organizmów bezjądrowych, a przedstawiciele pozostałych czterech królestw mają komórki z jądrem.",
    "image": "r01_komorka_bakteryjna.jpg"
  },
  {
    "id": "R01_KOMO_04",
    "section": "Komórka i transport przez błony",
    "type": "multi_select",
    "prompt": "Które organizmy mają ścianę komórkową?",
    "options": [
      "Bakterie",
      "Grzyby",
      "Zwierzęta",
      "Rośliny"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Ściana komórkowa występuje u bakterii, grzybów i roślin, a nie występuje u zwierząt."
  },
  {
    "id": "R01_KOMO_05",
    "section": "Komórka i transport przez błony",
    "type": "odd_one_out",
    "prompt": "Wskaż organizm bez jądra komórkowego: grzyb, roślina, bakteria, protist.",
    "options": null,
    "answer": "bakteria",
    "explanation": "Bakterie są bezjądrowe, a protisty, grzyby i rośliny mają jądro komórkowe."
  },
  {
    "id": "R01_KOMO_06",
    "section": "Komórka i transport przez błony",
    "type": "scenario",
    "prompt": "Komórkę roślinną umieszczono w roztworze o większym stężeniu niż jej sok komórkowy. Woda wypływa, a błona oddziela się od ściany. Jaki proces zachodzi?",
    "options": [
      "Deplazmoliza",
      "Plazmoliza",
      "Dyfuzja gazów",
      "Pączkowanie"
    ],
    "answer": 1,
    "explanation": "W roztworze o wyższym stężeniu komórka roślinna traci wodę, a jej protoplast się obkurcza. To zjawisko nazywa się plazmolizą.",
    "image": "r01_osmoza.jpg"
  },
  {
    "id": "R01_KOMO_07",
    "section": "Komórka i transport przez błony",
    "type": "fill_in",
    "prompt": "Ruch wody przez błonę półprzepuszczalną spowodowany różnicą stężeń to __________.",
    "options": null,
    "answer": [
      "osmoza"
    ],
    "explanation": "Osmoza to dyfuzja rozpuszczalnika, np. wody, przez błonę półprzepuszczalną.",
    "altAnswers": [
      [
        "osmoza"
      ]
    ]
  },
  {
    "id": "R01_KOMO_08",
    "section": "Komórka i transport przez błony",
    "type": "sort",
    "prompt": "Przyporządkuj struktury do komórek roślinnych, zwierzęcych lub obu ich rodzajów.",
    "options": null,
    "answer": {
      "Tylko w komórce roślinnej": [
        "Chloroplasty",
        "Ściana komórkowa"
      ],
      "Tylko w komórce zwierzęcej": [
        "Lizosomy"
      ],
      "W obu rodzajach komórek": [
        "Błona komórkowa",
        "Jądro komórkowe",
        "Mitochondria"
      ]
    },
    "explanation": "Chloroplasty i ściana komórkowa są charakterystyczne dla komórek roślinnych, lizosomy dla komórek zwierzęcych, a błona komórkowa, jądro i mitochondria występują w obu rodzajach komórek.",
    "items": [
      "Mitochondria",
      "Chloroplasty",
      "Lizosomy",
      "Błona komórkowa",
      "Ściana komórkowa",
      "Jądro komórkowe"
    ],
    "categories": [
      "Tylko w komórce roślinnej",
      "Tylko w komórce zwierzęcej",
      "W obu rodzajach komórek"
    ]
  },
  {
    "id": "R01_KOMO_09",
    "section": "Komórka i transport przez błony",
    "type": "riddle",
    "prompt": "Jak nazywa się transport przez błonę wymagający energii i wyspecjalizowanych nośników białkowych?",
    "options": null,
    "answer": "transport aktywny",
    "explanation": "Transport aktywny zużywa energię i korzysta z białek nośnikowych; może odbywać się wbrew różnicy stężeń.",
    "altAnswers": [
      "transport aktywny",
      "transport czynny"
    ]
  },
  {
    "id": "R01_KOMO_10",
    "section": "Komórka i transport przez błony",
    "type": "single_choice",
    "prompt": "W którą stronę przemieszczają się cząsteczki podczas dyfuzji?",
    "options": [
      "Zawsze wbrew różnicy stężeń",
      "Wyłącznie do jądra komórkowego",
      "Zawsze z użyciem ATP",
      "Z obszaru większego do mniejszego stężenia",
      "Tylko przez białkowy nośnik"
    ],
    "answer": 3,
    "explanation": "W dyfuzji następuje samorzutne przemieszczanie cząsteczek z miejsca, gdzie jest ich więcej, do miejsca, gdzie jest ich mniej."
  },
  {
    "id": "R01_ODDY_01",
    "section": "Odżywianie i oddychanie",
    "type": "single_choice",
    "prompt": "Czym charakteryzują się organizmy samożywne?",
    "options": [
      "Pobierają wyłącznie gotowe związki organiczne",
      "Żywią się tylko martwą materią",
      "Wytwarzają związki organiczne z nieorganicznych",
      "Pobierają pokarm wyłącznie z żywiciela",
      "Trawią zawsze poza organizmem"
    ],
    "answer": 2,
    "explanation": "Autotrofy wytwarzają związki organiczne z substancji nieorganicznych z wykorzystaniem energii."
  },
  {
    "id": "R01_ODDY_02",
    "section": "Odżywianie i oddychanie",
    "type": "multi_select",
    "prompt": "Które grupy zaliczono do organizmów cudzożywnych?",
    "options": [
      "Wszystkożercy",
      "Roślinożercy",
      "Saprobionty",
      "Autotrofy",
      "Mięsożercy",
      "Pasożyty"
    ],
    "answer": [
      0,
      1,
      2,
      4,
      5
    ],
    "explanation": "Wśród organizmów cudzożywnych wyróżnia się m.in. wszystkożerne, roślinożerne, mięsożerne, saprobionty i pasożyty."
  },
  {
    "id": "R01_ODDY_03",
    "section": "Odżywianie i oddychanie",
    "type": "true_false",
    "prompt": "U grzybów trawienie może przebiegać poza organizmem.",
    "options": null,
    "answer": true,
    "explanation": "Trawienie zewnętrzne zachodzi poza organizmem; występuje między innymi u grzybów."
  },
  {
    "id": "R01_ODDY_04",
    "section": "Odżywianie i oddychanie",
    "type": "match",
    "prompt": "Dopasuj termin do znaczenia w procesie odżywiania.",
    "options": null,
    "answer": {
      "Autotrof": "Sam tworzy związki organiczne",
      "Heterotrof": "Pobiera gotowe związki organiczne",
      "Saprobiont": "Żywi się martwą materią organiczną",
      "Pasożyt": "Pobiera pokarm z ciała żywiciela"
    },
    "explanation": "Autotrofy są samożywne, heterotrofy cudzożywne, saprobionty wykorzystują martwą materię, a pasożyty żerują na żywicielach.",
    "left": [
      "Pasożyt",
      "Autotrof",
      "Saprobiont",
      "Heterotrof"
    ],
    "right": [
      "Żywi się martwą materią organiczną",
      "Pobiera gotowe związki organiczne",
      "Pobiera pokarm z ciała żywiciela",
      "Sam tworzy związki organiczne"
    ]
  },
  {
    "id": "R01_ODDY_05",
    "section": "Odżywianie i oddychanie",
    "type": "fill_in",
    "prompt": "Substratami fotosyntezy są __________ i __________.",
    "options": null,
    "answer": [
      "woda",
      "dwutlenek węgla"
    ],
    "explanation": "W fotosyntezie woda i dwutlenek węgla pod wpływem energii świetlnej przekształcane są w glukozę i tlen.",
    "image": "r01_fotosynteza.jpg",
    "altAnswers": [
      [
        "woda",
        "H2O",
        "wody"
      ],
      [
        "dwutlenek węgla",
        "CO2",
        "dwutlenku węgla"
      ]
    ]
  },
  {
    "id": "R01_ODDY_06",
    "section": "Odżywianie i oddychanie",
    "type": "odd_one_out",
    "prompt": "Wskaż cechę niezwiązaną z szybkością fotosyntezy: ilość światła, temperatura, dostępność wody, liczba odnóży.",
    "options": null,
    "answer": "liczba odnóży",
    "explanation": "Na szybkość fotosyntezy wpływają m.in. natężenie światła, temperatura i dostępność wody. Liczba odnóży nie ma z tym związku."
  },
  {
    "id": "R01_ODDY_07",
    "section": "Odżywianie i oddychanie",
    "type": "scenario",
    "prompt": "W komórkach organizmu glukoza jest rozkładana w obecności tlenu. Powstają woda i dwutlenek węgla, a uwalnia się dużo energii. Jaki to proces?",
    "options": [
      "Oddychanie tlenowe",
      "Fermentacja mlekowa",
      "Fotosynteza",
      "Oddychanie beztlenowe"
    ],
    "answer": 0,
    "explanation": "Oddychanie tlenowe wykorzystuje glukozę i tlen, uwalnia dużo energii oraz prowadzi do powstania wody i dwutlenku węgla.",
    "image": "r01_oddychanie_komorkowe.jpg"
  },
  {
    "id": "R01_ODDY_08",
    "section": "Odżywianie i oddychanie",
    "type": "sort",
    "prompt": "Przyporządkuj substraty do fotosyntezy lub oddychania tlenowego.",
    "options": null,
    "answer": {
      "Fotosynteza": [
        "Woda",
        "Dwutlenek węgla"
      ],
      "Oddychanie tlenowe": [
        "Glukoza",
        "Tlen"
      ]
    },
    "explanation": "Fotosynteza wykorzystuje wodę i dwutlenek węgla, a oddychanie tlenowe glukozę i tlen.",
    "items": [
      "Tlen",
      "Woda",
      "Glukoza",
      "Dwutlenek węgla"
    ],
    "categories": [
      "Fotosynteza",
      "Oddychanie tlenowe"
    ]
  },
  {
    "id": "R01_ODDY_09",
    "section": "Odżywianie i oddychanie",
    "type": "riddle",
    "prompt": "Jak nazywa się zielony plastyd, w którym zachodzi fotosynteza?",
    "options": null,
    "answer": "chloroplast",
    "explanation": "Fotosynteza przebiega w chloroplastach zawierających chlorofil.",
    "altAnswers": [
      "chloroplast",
      "chloroplasty"
    ]
  },
  {
    "id": "R01_ODDY_10",
    "section": "Odżywianie i oddychanie",
    "type": "single_choice",
    "prompt": "W której części komórki zachodzi fermentacja?",
    "options": [
      "W jądrze komórkowym",
      "W cytoplazmie",
      "W ścianie komórkowej",
      "W wakuoli",
      "W chloroplaście"
    ],
    "answer": 1,
    "explanation": "Fermentacja zachodzi w cytoplazmie komórki."
  },
  {
    "id": "R01_ROZR_01",
    "section": "Rozmnażanie, rozwój i ruch",
    "type": "match",
    "prompt": "Dopasuj sposób rozmnażania bezpłciowego do przykładu organizmu.",
    "options": null,
    "answer": {
      "Pączkowanie": "Stułbia",
      "Rozmnażanie przez zarodniki": "Grzyby",
      "Rozmnażanie wegetatywne": "Truskawka",
      "Podział komórki": "Bakterie"
    },
    "explanation": "Stułbia rozmnaża się przez pączkowanie, grzyby mogą wytwarzać zarodniki, truskawka rozmnaża się wegetatywnie, a bakterie dzielą się.",
    "image": "r01_stulbia.jpg",
    "left": [
      "Rozmnażanie wegetatywne",
      "Pączkowanie",
      "Podział komórki",
      "Rozmnażanie przez zarodniki"
    ],
    "right": [
      "Grzyby",
      "Bakterie",
      "Stułbia",
      "Truskawka"
    ]
  },
  {
    "id": "R01_ROZR_02",
    "section": "Rozmnażanie, rozwój i ruch",
    "type": "true_false",
    "prompt": "Potomstwo powstałe w wyniku rozmnażania bezpłciowego jest według zestawienia genetycznie identyczne z rodzicem.",
    "options": null,
    "answer": true,
    "explanation": "W rozmnażaniu bezpłciowym potomstwo ma zasadniczo taki sam materiał genetyczny jak organizm rodzicielski."
  },
  {
    "id": "R01_ROZR_03",
    "section": "Rozmnażanie, rozwój i ruch",
    "type": "single_choice",
    "prompt": "Jak nazywa się komórka powstająca po połączeniu dwóch gamet?",
    "options": [
      "Zarodnik",
      "Zygota",
      "Poczwarka",
      "Larwa",
      "Komórka somatyczna"
    ],
    "answer": 1,
    "explanation": "W wyniku zapłodnienia, czyli połączenia gamet, powstaje zygota."
  },
  {
    "id": "R01_ROZR_04",
    "section": "Rozmnażanie, rozwój i ruch",
    "type": "multi_select",
    "prompt": "Zaznacz sposoby rozmnażania bezpłciowego.",
    "options": [
      "Pączkowanie",
      "Zapłodnienie",
      "Fragmentacja plechy",
      "Podział komórki",
      "Łączenie gamet",
      "Rozmnażanie wegetatywne"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Do rozmnażania bezpłciowego zaliczono pączkowanie, podział komórki, fragmentację plechy, zarodniki i rozmnażanie wegetatywne; zapłodnienie jest związane z rozmnażaniem płciowym."
  },
  {
    "id": "R01_ROZR_05",
    "section": "Rozmnażanie, rozwój i ruch",
    "type": "scenario",
    "prompt": "U motyla z jaja wychodzi gąsienica, później powstaje poczwarka, a następnie osobnik dorosły. Jak przebiega jego rozwój?",
    "options": [
      "Z przeobrażeniem zupełnym",
      "Prosty",
      "Z przeobrażeniem niezupełnym",
      "Wyłącznie przez podział komórki"
    ],
    "answer": 0,
    "explanation": "Przejście przez stadium larwy i poczwarki do postaci dorosłej jest przeobrażeniem zupełnym.",
    "image": "r01_przeobrazenie_motyla.jpg"
  },
  {
    "id": "R01_ROZR_06",
    "section": "Rozmnażanie, rozwój i ruch",
    "type": "fill_in",
    "prompt": "Wyginanie się łodygi ku źródłu światła jest przykładem __________.",
    "options": null,
    "answer": [
      "fototropizmu dodatniego"
    ],
    "explanation": "Łodygi wykazują fototropizm dodatni, czyli wzrost w kierunku światła.",
    "image": "r01_fototropizm.jpg",
    "altAnswers": [
      [
        "fototropizmu dodatniego",
        "dodatniego fototropizmu",
        "fototropizm dodatni"
      ]
    ]
  },
  {
    "id": "R01_ROZR_07",
    "section": "Rozmnażanie, rozwój i ruch",
    "type": "odd_one_out",
    "prompt": "Wskaż organizm poruszający się inaczej niż pozostałe: pantofelek, euglena, ameba, część bakterii.",
    "options": null,
    "answer": "ameba",
    "explanation": "Ameba porusza się za pomocą nibynóżek, a pozostałe organizmy wykorzystują inne struktury ruchu."
  },
  {
    "id": "R01_ROZR_08",
    "section": "Rozmnażanie, rozwój i ruch",
    "type": "sort",
    "prompt": "Przyporządkuj rodzaje ruchów roślin do tropizmów lub nastii.",
    "options": null,
    "answer": {
      "Tropizmy": [
        "Fototropizm",
        "Geotropizm",
        "Hydrotropizm",
        "Tigmotropizm"
      ],
      "Nastie": [
        "Sejsmonastia",
        "Termonastia",
        "Fotonastia"
      ]
    },
    "explanation": "Tropizmy zależą od kierunku bodźca, natomiast nastie nie zależą od kierunku jego działania.",
    "items": [
      "Termonastia",
      "Hydrotropizm",
      "Fototropizm",
      "Sejsmonastia",
      "Geotropizm",
      "Fotonastia",
      "Tigmotropizm"
    ],
    "categories": [
      "Tropizmy",
      "Nastie"
    ]
  },
  {
    "id": "R01_ROZR_09",
    "section": "Rozmnażanie, rozwój i ruch",
    "type": "sequence",
    "prompt": "Ułóż stadia przeobrażenia zupełnego motyla od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "answer": [
      "Jajo",
      "Gąsienica",
      "Poczwarka",
      "Dorosły motyl"
    ],
    "explanation": "Kolejne stadia przeobrażenia zupełnego motyla to jajo, gąsienica, poczwarka i postać dorosła.",
    "image": "r01_przeobrazenie_motyla.jpg",
    "items": [
      "Poczwarka",
      "Jajo",
      "Dorosły motyl",
      "Gąsienica"
    ]
  },
  {
    "id": "R01_ROZR_10",
    "section": "Rozmnażanie, rozwój i ruch",
    "type": "single_choice",
    "prompt": "W którym sposobie rozmnażania zwierząt zarodek pobiera substancje odżywcze z ciała samicy?",
    "options": [
      "Jajorodność",
      "Jajożyworodność",
      "Żyworodność",
      "Pączkowanie"
    ],
    "answer": 2,
    "explanation": "W żyworodności zarodek rozwija się w ciele matki i pobiera substancje odżywcze z jej organizmu."
  },
  {
    "id": "R01_KLAS_01",
    "section": "Klasyfikacja organizmów",
    "type": "single_choice",
    "prompt": "Czym zajmuje się systematyka?",
    "options": [
      "Klasyfikowaniem organizmów",
      "Wyłącznie budową komórki",
      "Tylko oddychaniem zwierząt",
      "Badaniem jedynie reakcji chemicznych",
      "Tylko obiegiem wody"
    ],
    "answer": 0,
    "explanation": "Systematyka bada, opisuje i klasyfikuje różnorodność organizmów."
  },
  {
    "id": "R01_KLAS_02",
    "section": "Klasyfikacja organizmów",
    "type": "multi_select",
    "prompt": "Zaznacz wszystkie królestwa organizmów.",
    "options": [
      "Bakterie",
      "Protisty",
      "Grzyby",
      "Rośliny",
      "Tkankowce",
      "Zwierzęta"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      5
    ],
    "explanation": "Pięć królestw organizmów to bakterie, protisty, grzyby, rośliny i zwierzęta."
  },
  {
    "id": "R01_KLAS_03",
    "section": "Klasyfikacja organizmów",
    "type": "match",
    "prompt": "Przyporządkuj królestwu zestaw cech.",
    "options": null,
    "answer": {
      "Bakterie": "Brak jądra komórkowego",
      "Grzyby": "Cudzożywność i obecność ściany komórkowej",
      "Rośliny": "Samożywność i obecność ściany komórkowej",
      "Zwierzęta": "Cudzożywność i brak ściany komórkowej"
    },
    "explanation": "Bakterie są bezjądrowe; grzyby cudzożywne ze ścianą, rośliny samożywne ze ścianą, a zwierzęta cudzożywne bez ściany komórkowej.",
    "left": [
      "Zwierzęta",
      "Rośliny",
      "Bakterie",
      "Grzyby"
    ],
    "right": [
      "Cudzożywność i obecność ściany komórkowej",
      "Cudzożywność i brak ściany komórkowej",
      "Brak jądra komórkowego",
      "Samożywność i obecność ściany komórkowej"
    ]
  },
  {
    "id": "R01_KLAS_04",
    "section": "Klasyfikacja organizmów",
    "type": "true_false",
    "prompt": "Klasyfikacja naturalna uwzględnia pokrewieństwo ewolucyjne organizmów.",
    "options": null,
    "answer": true,
    "explanation": "W odróżnieniu od klasyfikacji sztucznej klasyfikacja naturalna opiera się na pokrewieństwie ewolucyjnym.",
    "image": "r01_drzewo_rodowe.jpg"
  },
  {
    "id": "R01_KLAS_05",
    "section": "Klasyfikacja organizmów",
    "type": "fill_in",
    "prompt": "W dwuczłonowej nazwie gatunku pierwszy wyraz oznacza __________, a drugi oznacza __________.",
    "options": null,
    "answer": [
      "rodzaj",
      "gatunek"
    ],
    "explanation": "Zasada nazewnictwa dwuczłonowego opisana przez Karola Linneusza: pierwszy człon oznacza rodzaj, drugi odnosi się do gatunku.",
    "altAnswers": [
      [
        "rodzaj",
        "nazwę rodzaju"
      ],
      [
        "gatunek",
        "nazwę gatunku"
      ]
    ]
  },
  {
    "id": "R01_KLAS_06",
    "section": "Klasyfikacja organizmów",
    "type": "odd_one_out",
    "prompt": "Wskaż nazwę, która nie jest jednym z pięciu królestw: bakterie, rośliny, grzyby, tkankowce.",
    "options": null,
    "answer": "tkankowce",
    "explanation": "Tkankowce są grupą zwierząt, a nie jednym z pięciu królestw organizmów."
  },
  {
    "id": "R01_KLAS_07",
    "section": "Klasyfikacja organizmów",
    "type": "scenario",
    "prompt": "Uczeń oznacza nieznany organizm. W każdym kolejnym kroku wybiera jedną z dwóch wykluczających się cech budowy. Z jakiego narzędzia korzysta?",
    "options": [
      "Z tabeli metabolizmu",
      "Z bilansu energetycznego",
      "Z wykresu fotosyntezy",
      "Z klucza do oznaczania organizmów"
    ],
    "answer": 3,
    "explanation": "Klucz do oznaczania organizmów prowadzi przez kolejne przeciwstawne opisy cech.",
    "image": "r01_klucz_oznaczania.jpg"
  },
  {
    "id": "R01_KLAS_08",
    "section": "Klasyfikacja organizmów",
    "type": "sequence",
    "prompt": "Ułóż jednostki klasyfikacji organizmów od najwyższej do najniższej.",
    "options": null,
    "answer": [
      "Królestwo",
      "Typ",
      "Gromada",
      "Rząd",
      "Rodzina",
      "Rodzaj",
      "Gatunek"
    ],
    "explanation": "Kolejne kategorie systematyczne to królestwo, typ, gromada, rząd, rodzina, rodzaj i gatunek.",
    "items": [
      "Rodzaj",
      "Gromada",
      "Królestwo",
      "Gatunek",
      "Rząd",
      "Typ",
      "Rodzina"
    ]
  },
  {
    "id": "R01_KLAS_09",
    "section": "Klasyfikacja organizmów",
    "type": "riddle",
    "prompt": "Który uczony w XVIII wieku wprowadził dwuczłonowe nazwy gatunków?",
    "options": null,
    "answer": "Karol Linneusz",
    "explanation": "Karol Linneusz upowszechnił w XVIII wieku nazewnictwo dwuczłonowe gatunków.",
    "altAnswers": [
      "Karol Linneusz",
      "Linneusz"
    ]
  },
  {
    "id": "R01_KLAS_10",
    "section": "Klasyfikacja organizmów",
    "type": "sort",
    "prompt": "Rozdziel królestwa według obecności jądra komórkowego.",
    "options": null,
    "answer": {
      "Jądro obecne": [
        "Protisty",
        "Grzyby",
        "Rośliny",
        "Zwierzęta"
      ],
      "Brak jądra": [
        "Bakterie"
      ]
    },
    "explanation": "Spośród pięciu królestw tylko bakterie nie mają jądra komórkowego.",
    "items": [
      "Bakterie",
      "Rośliny",
      "Grzyby",
      "Zwierzęta",
      "Protisty"
    ],
    "categories": [
      "Jądro obecne",
      "Brak jądra"
    ]
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Dopasuj mikro- lub makroelement do szczegółowej roli przypisanej mu.",
    "options": null,
    "answer": {
      "Fluor": "Składnik szkliwa zębowego",
      "Miedź": "Składnik enzymów związanych z oddychaniem",
      "Potas": "Przewodzenie impulsów nerwowych",
      "Cynk": "Składnik insuliny"
    },
    "explanation": "Fluor występuje w szkliwie, miedź w enzymach oddechowych, potas bierze udział w przewodzeniu impulsów, a cynk jest składnikiem insuliny.",
    "left": [
      "Potas",
      "Cynk",
      "Fluor",
      "Miedź"
    ],
    "right": [
      "Składnik insuliny",
      "Składnik enzymów związanych z oddychaniem",
      "Składnik szkliwa zębowego",
      "Przewodzenie impulsów nerwowych"
    ]
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które zestawienia pierwiastków i ich funkcji są prawidłowe?",
    "options": [
      "Azot - aminokwasy i kwasy nukleinowe",
      "Fluor - chlorofil",
      "Fosfor - ATP i ADP",
      "Żelazo - składnik szkliwa zębowego",
      "Wapń - krzepnięcie krwi",
      "Miedź - składnik kwasu solnego w żołądku"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Azot jest składnikiem białek i kwasów nukleinowych, fosfor składnikiem ATP i ADP, a wapń uczestniczy w krzepnięciu krwi. Pozostałe powiązania są niepoprawne."
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Dwie komórki trafiają do roztworu o większym stężeniu niż wewnątrz nich. Jedna ma ścianę komórkową, druga jej nie ma. W której można obserwować oddzielanie błony od ściany?",
    "options": [
      "W obu jednakowo",
      "Tylko w komórce zwierzęcej",
      "W komórce roślinnej",
      "W żadnej z nich"
    ],
    "answer": 2,
    "explanation": "Plazmoliza dotyczy komórki ze ścianą komórkową: cytoplazma kurczy się i błona oddziela się od ściany. Komórka zwierzęca, pozbawiona ściany, obkurcza się inaczej.",
    "image": "r01_osmoza.jpg"
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj substancje do funkcji.",
    "options": null,
    "answer": {
      "Budulcowa": [
        "Celuloza",
        "Chityna"
      ],
      "Zapasowa": [
        "Skrobia",
        "Glikogen"
      ],
      "Przechowywanie informacji genetycznej": [
        "DNA"
      ],
      "Udział w wytwarzaniu białek": [
        "RNA"
      ]
    },
    "explanation": "Celuloza i chityna budują ściany komórkowe, skrobia i glikogen są zapasami, DNA przechowuje informację genetyczną, a RNA uczestniczy w syntezie białek.",
    "items": [
      "RNA",
      "Glikogen",
      "Chityna",
      "DNA",
      "Skrobia",
      "Celuloza"
    ],
    "categories": [
      "Budulcowa",
      "Zapasowa",
      "Przechowywanie informacji genetycznej",
      "Udział w wytwarzaniu białek"
    ]
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "U zwierząt jajorodnych zapłodnienie może nastąpić przed złożeniem jaj albo po nim.",
    "options": null,
    "answer": true,
    "explanation": "U zwierząt jajorodnych zapłodnienie może być zewnętrzne lub wewnętrzne."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż nazwę, która nie jest rodzajem RNA: mRNA, tRNA, DNA, rRNA.",
    "options": null,
    "answer": "DNA",
    "explanation": "Trzy główne rodzaje RNA to mRNA, tRNA i rRNA. DNA jest odrębnym kwasem nukleinowym."
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W nazwie Pinus sylvestris człon __________ oznacza rodzaj, a człon __________ oznacza gatunek.",
    "options": null,
    "answer": [
      "Pinus",
      "sylvestris"
    ],
    "explanation": "Pinus sylvestris to łacińska dwuczłonowa nazwa sosny zwyczajnej; pierwszy człon to rodzaj, drugi to epitet gatunkowy.",
    "altAnswers": [
      [
        "Pinus",
        "pinus"
      ],
      [
        "sylvestris"
      ]
    ]
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Wybierz poprawne zestawienia reakcji ruchowej rośliny i jej bodźca.",
    "options": [
      "Hydrotropizm - woda",
      "Fototropizm - temperatura",
      "Geotropizm - przyciąganie ziemskie",
      "Termonastia - temperatura",
      "Sejsmonastia - światło",
      "Sejsmonastia - dotyk"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Hydrotropizm to reakcja na wodę, geotropizm na przyciąganie ziemskie, termonastia na temperaturę, a sejsmonastia na dotyk.",
    "image": "r01_fototropizm.jpg"
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Dopasuj typ rozwoju zarodkowego zwierząt do sposobu zaopatrywania go w substancje odżywcze.",
    "options": null,
    "answer": {
      "Jajorodność": "Zasoby jaja, rozwój zarodka poza ciałem matki",
      "Jajożyworodność": "Zasoby jaja, jego czasowy pobyt w ciele matki",
      "Żyworodność": "Substancje odżywcze pobierane z organizmu samicy"
    },
    "explanation": "W jajorodności zarodek rozwija się poza matką, w jajożyworodności przebywa pewien czas w jej ciele, lecz odżywia się zasobami jaja; w żyworodności jest odżywiany przez matkę.",
    "left": [
      "Żyworodność",
      "Jajorodność",
      "Jajożyworodność"
    ],
    "right": [
      "Zasoby jaja, jego czasowy pobyt w ciele matki",
      "Substancje odżywcze pobierane z organizmu samicy",
      "Zasoby jaja, rozwój zarodka poza ciałem matki"
    ]
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Grzyb rozkłada martwe szczątki organizmu za pomocą enzymów działających poza jego ciałem, a następnie pobiera otrzymane związki. Jak opisać ten sposób zdobywania pokarmu?",
    "options": [
      "Saprobiont z trawieniem zewnętrznym",
      "Autotrof wykorzystujący fotosyntezę",
      "Drapieżnik z trawieniem wewnętrznym",
      "Roślina samożywna"
    ],
    "answer": 0,
    "explanation": "Grzyby są cudzożywne, a saprobionty żywią się martwą materią organiczną; rozkład poza organizmem to trawienie zewnętrzne."
  },
  {
    "id": "R01_HARD_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które zestawienie budowy ścian komórkowych jest prawidłowe?",
    "options": [
      "Rośliny - chityna; grzyby - celuloza",
      "Rośliny - celuloza; grzyby - chityna",
      "Rośliny - białko; zwierzęta - celuloza",
      "Zwierzęta - chityna; grzyby - skrobia"
    ],
    "answer": 1,
    "explanation": "Celuloza jest głównym budulcem ściany komórkowej roślin, a chityna buduje ścianę komórkową grzybów.",
    "image": "r01_komorka_roslinna.jpg"
  },
  {
    "id": "R01_HARD_12",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się typ klasyfikacji, który ma odzwierciedlać pokrewieństwo ewolucyjne zamiast dowolnie wybranej cechy?",
    "options": null,
    "answer": "klasyfikacja naturalna",
    "explanation": "Klasyfikacja naturalna uwzględnia pokrewieństwo ewolucyjne, natomiast sztuczna opiera się na wybranych cechach.",
    "image": "r01_drzewo_rodowe.jpg",
    "altAnswers": [
      "klasyfikacja naturalna",
      "naturalna"
    ]
  },
  {
    "id": "R01_HARD_13",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "W podziale pięciu królestw protisty mogą być zarówno jedno-, jak i wielokomórkowe.",
    "options": null,
    "answer": true,
    "explanation": "Wśród protistów występują zarówno formy jednokomórkowe, jak i wielokomórkowe."
  },
  {
    "id": "R01_HARD_14",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W fermentacji mlekowej produktem jest __________, a w fermentacji alkoholowej powstaje __________.",
    "options": null,
    "answer": [
      "kwas mlekowy",
      "alkohol"
    ],
    "explanation": "W fermentacji mlekowej powstaje kwas mlekowy, a w fermentacji alkoholowej – etanol.",
    "altAnswers": [
      [
        "kwas mlekowy",
        "kwasu mlekowego"
      ],
      [
        "alkohol",
        "alkoholu"
      ]
    ]
  }
];

const KID_PROMPTS = {
  "R01_CHEM_01": "Który pierwiastek jest biogenny?",
  "R01_CHEM_07": "Woda pomaga przenosić substancje w roślinie. Jaka to funkcja wody?",
  "R01_ORGA_01": "Z czego zbudowane są białka?",
  "R01_ORGA_07": "Jak nazywa się zmiana białek pod wpływem wysokiej temperatury?",
  "R01_KOMO_01": "Co zawiera materiał genetyczny i kieruje komórką?",
  "R01_KOMO_06": "Komórka roślinna traci wodę, a błona odrywa się od ściany. Co to za proces?",
  "R01_ODDY_01": "Co potrafią robić organizmy samożywne?",
  "R01_ODDY_07": "Komórka rozkłada glukozę z tlenem i uwalnia dużo energii. Jaki to proces?",
  "R01_ROZR_03": "Jak nazywa się komórka powstała z połączenia dwóch gamet?",
  "R01_ROZR_06": "Jak nazywa się wzrost łodygi w stronę światła?",
  "R01_KLAS_01": "Co bada i porządkuje systematyka?",
  "R01_KLAS_07": "Jak nazywa się narzędzie do rozpoznawania organizmów po ich cechach?"
};

const chapter = {
  id: "r01",
  number: 1,
  title: "Biochemia, komórka, czynności życiowe i klasyfikacja organizmów",
  icon: "🧬",
  sectionOrder: [
    "Pierwiastki, woda i sole mineralne",
    "Związki organiczne i metabolizm",
    "Komórka i transport przez błony",
    "Odżywianie i oddychanie",
    "Rozmnażanie, rozwój i ruch",
    "Klasyfikacja organizmów"
  ],
  sectionIcons: {
    "Pierwiastki, woda i sole mineralne": "⚗️",
    "Związki organiczne i metabolizm": "🧬",
    "Komórka i transport przez błony": "🔬",
    "Odżywianie i oddychanie": "🌿",
    "Rozmnażanie, rozwój i ruch": "🦋",
    "Klasyfikacja organizmów": "🌳"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
