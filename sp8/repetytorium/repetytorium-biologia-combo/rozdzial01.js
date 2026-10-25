// Skróty sekcji (do identyfikatorów ćwiczeń):
//   CHE  = Skład chemiczny komórek
//   BUD  = Rodzaje i budowa komórek
//   ORG  = Organella i ich funkcje
//   ODZ  = Sposoby odżywiania się organizmów
//   ODD  = Sposoby oddychania organizmów
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_CHE_01",
    "section": "Skład chemiczny komórek",
    "type": "single_choice",
    "prompt": "Który z podanych pierwiastków należy do pierwiastków biogennych?",
    "options": [
      "wapń",
      "potas",
      "fosfor",
      "magnez",
      "chlor",
      "żelazo"
    ],
    "answer": 2,
    "explanation": "Pierwiastki biogenne to węgiel, wodór, tlen, siarka, fosfor i azot.",
    "image": "r01_pierwiastki_w_organizmach.jpg"
  },
  {
    "id": "R01_CHE_02",
    "section": "Skład chemiczny komórek",
    "type": "multi_select",
    "prompt": "Które z podanych pierwiastków są mikroelementami?",
    "options": [
      "żelazo",
      "wapń",
      "jod",
      "potas",
      "fluor",
      "molibden"
    ],
    "answer": [
      0,
      2,
      4,
      5
    ],
    "explanation": "Żelazo, jod, fluor i molibden są mikroelementami; wapń i potas należą do makroelementów."
  },
  {
    "id": "R01_CHE_03",
    "section": "Skład chemiczny komórek",
    "type": "true_false",
    "prompt": "Woda i dwutlenek węgla są zaliczane do związków nieorganicznych.",
    "options": null,
    "answer": true,
    "explanation": "Woda, tlen, dwutlenek węgla, jony i sole należą do związków nieorganicznych."
  },
  {
    "id": "R01_CHE_04",
    "section": "Skład chemiczny komórek",
    "type": "fill_in",
    "prompt": "Żelazo jest składnikiem __________, a jod uczestniczy w produkcji __________.",
    "options": null,
    "altAnswers": [
      [
        "hemoglobiny",
        "hemoglobina"
      ],
      [
        "hormonów tarczycy",
        "hormony tarczycy"
      ]
    ],
    "answer": [
      "hemoglobiny",
      "hormonów tarczycy"
    ],
    "explanation": "Żelazo wchodzi w skład hemoglobiny, natomiast jod jest konieczny do produkcji hormonów tarczycy."
  },
  {
    "id": "R01_CHE_05",
    "section": "Skład chemiczny komórek",
    "type": "riddle",
    "prompt": "Jaki zielony barwnik roślin zawiera magnez?",
    "options": null,
    "altAnswers": [
      "chlorofil",
      "chlorofilu"
    ],
    "answer": "chlorofil",
    "explanation": "Magnez jest składnikiem chlorofilu, czyli zielonego barwnika roślin."
  },
  {
    "id": "R01_CHE_06",
    "section": "Skład chemiczny komórek",
    "type": "odd_one_out",
    "prompt": "Wskaż związek organiczny niepasujący do pozostałych: woda, tlen, glukoza, dwutlenek węgla.",
    "options": null,
    "answer": "glukoza",
    "explanation": "Glukoza jest cukrem, czyli związkiem organicznym. Pozostałe przykłady zaliczono do związków nieorganicznych."
  },
  {
    "id": "R01_CHE_07",
    "section": "Skład chemiczny komórek",
    "type": "scenario",
    "prompt": "Podczas ogrzewania próbki białka jego struktura ulega trwałej zmianie. Jak nazywa się to zjawisko?",
    "options": [
      "fermentacja",
      "denaturacja",
      "fotosynteza",
      "krzepnięcie krwi",
      "oddychanie komórkowe"
    ],
    "answer": 1,
    "explanation": "Denaturacja to nieodwracalna zmiana struktury białka pod wpływem m.in. wysokiej temperatury."
  },
  {
    "id": "R01_CHE_08",
    "section": "Skład chemiczny komórek",
    "type": "match",
    "prompt": "Połącz rodzaj kwasu nukleinowego z jego funkcją.",
    "options": null,
    "left": [
      "DNA",
      "mRNA",
      "tRNA",
      "rRNA"
    ],
    "right": [
      "transportuje aminokwasy do rybosomów",
      "wchodzi w skład rybosomów",
      "przechowuje i przekazuje informację genetyczną",
      "przenosi informację z DNA do rybosomów"
    ],
    "answer": {
      "DNA": "przechowuje i przekazuje informację genetyczną",
      "mRNA": "przenosi informację z DNA do rybosomów",
      "tRNA": "transportuje aminokwasy do rybosomów",
      "rRNA": "wchodzi w skład rybosomów"
    },
    "explanation": "DNA jest nośnikiem informacji dziedzicznej, a poszczególne rodzaje RNA uczestniczą w powstawaniu białek.",
    "image": "r01_struktura_dna_i_rna.jpg"
  },
  {
    "id": "R01_CHE_09",
    "section": "Skład chemiczny komórek",
    "type": "sort",
    "prompt": "Przyporządkuj substancje do związków organicznych i nieorganicznych.",
    "options": null,
    "items": [
      "tlen",
      "białka",
      "kwasy nukleinowe",
      "woda",
      "cukry",
      "sole mineralne",
      "tłuszcze",
      "dwutlenek węgla"
    ],
    "categories": [
      "organiczne",
      "nieorganiczne"
    ],
    "answer": {
      "organiczne": [
        "białka",
        "tłuszcze",
        "cukry",
        "kwasy nukleinowe"
      ],
      "nieorganiczne": [
        "woda",
        "tlen",
        "dwutlenek węgla",
        "sole mineralne"
      ]
    },
    "explanation": "Związki organiczne to m.in. białka, tłuszcze, cukry i kwasy nukleinowe, a nieorganiczne to m.in. woda, tlen, dwutlenek węgla i sole."
  },
  {
    "id": "R01_CHE_10",
    "section": "Skład chemiczny komórek",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania białka od elementów budulcowych do gotowej cząsteczki.",
    "options": null,
    "items": [
      "Powstaje białko",
      "Aminokwasy łączą się wiązaniami peptydowymi",
      "Pierwiastki tworzą składniki aminokwasów",
      "Powstają aminokwasy"
    ],
    "answer": [
      "Pierwiastki tworzą składniki aminokwasów",
      "Powstają aminokwasy",
      "Aminokwasy łączą się wiązaniami peptydowymi",
      "Powstaje białko"
    ],
    "explanation": "Białka powstają z aminokwasów, które łączą się za pomocą wiązań peptydowych."
  },
  {
    "id": "R01_CHE_11",
    "section": "Skład chemiczny komórek",
    "type": "single_choice",
    "prompt": "Jak zmienia się gęstość wody podczas zamarzania?",
    "options": [
      "zwiększa się",
      "zmniejsza się",
      "zawsze wynosi zero",
      "nie zmienia się"
    ],
    "answer": 1,
    "explanation": "Woda, zamarzając, zmniejsza swoją gęstość."
  },
  {
    "id": "R01_CHE_12",
    "section": "Skład chemiczny komórek",
    "type": "multi_select",
    "prompt": "Wskaż funkcje pełnione przez tłuszcze.",
    "options": [
      "funkcja zapasowa",
      "izolacja termiczna",
      "przenoszenie informacji przez mRNA",
      "funkcja budulcowa",
      "tworzenie rybosomów"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Tłuszcze pełnią m.in. funkcję zapasową i budulcową oraz zapewniają izolację termiczną."
  },
  {
    "id": "R01_BUD_01",
    "section": "Rodzaje i budowa komórek",
    "type": "single_choice",
    "prompt": "Który rodzaj komórki jest bezjądrowy?",
    "options": [
      "komórka roślinna",
      "komórka zwierzęca",
      "komórka grzyba",
      "komórka bakteryjna",
      "komórka protista"
    ],
    "answer": 3,
    "explanation": "Komórki bakteryjne są prokariotyczne i nie mają wydzielonego jądra komórkowego.",
    "image": "r01_porownanie_typow_komorek.jpg"
  },
  {
    "id": "R01_BUD_02",
    "section": "Rodzaje i budowa komórek",
    "type": "multi_select",
    "prompt": "Zaznacz struktury występujące zarówno w komórce bakteryjnej, jak i roślinnej.",
    "options": [
      "błona komórkowa",
      "cytoplazma",
      "jądro komórkowe",
      "rybosomy",
      "mitochondria",
      "ściana komórkowa"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "explanation": "Oba typy komórek mają błonę komórkową, cytoplazmę, rybosomy i ścianę komórkową, lecz bakterie nie mają jądra ani mitochondriów."
  },
  {
    "id": "R01_BUD_03",
    "section": "Rodzaje i budowa komórek",
    "type": "true_false",
    "prompt": "Komórka grzyba ma chloroplasty podobnie jak komórka roślinna.",
    "options": null,
    "answer": false,
    "explanation": "Chloroplasty występują w komórkach roślinnych, a nie w komórkach grzybów."
  },
  {
    "id": "R01_BUD_04",
    "section": "Rodzaje i budowa komórek",
    "type": "fill_in",
    "prompt": "Komórki prokariotyczne nie mają __________, a ich materiał genetyczny nie jest odseparowany błoną jądrową.",
    "options": null,
    "altAnswers": [
      [
        "jądra komórkowego",
        "jądra"
      ]
    ],
    "answer": [
      "jądra komórkowego"
    ],
    "explanation": "W komórkach bakterii DNA nie jest oddzielone błoną jądrową od pozostałej części komórki."
  },
  {
    "id": "R01_BUD_05",
    "section": "Rodzaje i budowa komórek",
    "type": "riddle",
    "prompt": "Jaka sztywna struktura otacza komórki roślin, grzybów i bakterii, ale nie komórki zwierzęce?",
    "options": null,
    "altAnswers": [
      "ściana komórkowa",
      "ściana komórki"
    ],
    "answer": "ściana komórkowa",
    "explanation": "Ściana komórkowa nadaje kształt i chroni komórkę; występuje u roślin, grzybów i bakterii."
  },
  {
    "id": "R01_BUD_06",
    "section": "Rodzaje i budowa komórek",
    "type": "odd_one_out",
    "prompt": "Wskaż rodzaj komórki bez jądra komórkowego: komórka roślinna, komórka grzyba, komórka zwierzęca, komórka bakteryjna.",
    "options": null,
    "answer": "komórka bakteryjna",
    "explanation": "Komórka bakteryjna jest prokariotyczna; pozostałe wymienione komórki są eukariotyczne."
  },
  {
    "id": "R01_BUD_07",
    "section": "Rodzaje i budowa komórek",
    "type": "scenario",
    "prompt": "Pod mikroskopem uczeń obserwuje komórkę z chloroplastami, ścianą komórkową i dużą wodniczką. Jaki to typ komórki?",
    "options": [
      "roślinna",
      "zwierzęca",
      "bakteryjna",
      "grzybowa"
    ],
    "answer": 0,
    "explanation": "Chloroplasty, ściana komórkowa i duża wakuola są charakterystyczne dla komórki roślinnej."
  },
  {
    "id": "R01_BUD_08",
    "section": "Rodzaje i budowa komórek",
    "type": "match",
    "prompt": "Połącz typ komórki z charakterystyczną cechą.",
    "options": null,
    "left": [
      "komórka roślinna",
      "komórka zwierzęca",
      "komórka grzyba",
      "komórka bakterii"
    ],
    "right": [
      "ma ścianę komórkową z chityny",
      "nie ma jądra komórkowego",
      "zawiera chloroplasty",
      "nie ma ściany komórkowej"
    ],
    "answer": {
      "komórka roślinna": "zawiera chloroplasty",
      "komórka zwierzęca": "nie ma ściany komórkowej",
      "komórka grzyba": "ma ścianę komórkową z chityny",
      "komórka bakterii": "nie ma jądra komórkowego"
    },
    "explanation": "Cztery rodzaje komórek można odróżnić na podstawie ich budowy i składu ścian komórkowych."
  },
  {
    "id": "R01_BUD_09",
    "section": "Rodzaje i budowa komórek",
    "type": "sort",
    "prompt": "Rozdziel struktury na występujące we wszystkich komórkach i występujące tylko w komórkach eukariotycznych.",
    "options": null,
    "items": [
      "mitochondria",
      "cytoplazma",
      "aparat Golgiego",
      "rybosomy",
      "jądro komórkowe",
      "błona komórkowa"
    ],
    "categories": [
      "wszystkie komórki",
      "tylko komórki eukariotyczne"
    ],
    "answer": {
      "wszystkie komórki": [
        "błona komórkowa",
        "cytoplazma",
        "rybosomy"
      ],
      "tylko komórki eukariotyczne": [
        "jądro komórkowe",
        "mitochondria",
        "aparat Golgiego"
      ]
    },
    "explanation": "Bakterie mają błonę, cytoplazmę i rybosomy, ale nie mają jądra, mitochondriów ani aparatu Golgiego."
  },
  {
    "id": "R01_BUD_10",
    "section": "Rodzaje i budowa komórek",
    "type": "sequence",
    "prompt": "Ułóż elementy komórki bakteryjnej od warstwy najbardziej zewnętrznej do wnętrza.",
    "options": null,
    "items": [
      "cytoplazma",
      "ściana komórkowa",
      "otoczka śluzowa",
      "błona komórkowa"
    ],
    "answer": [
      "otoczka śluzowa",
      "ściana komórkowa",
      "błona komórkowa",
      "cytoplazma"
    ],
    "explanation": "Na schemacie bakterii otoczka śluzowa leży na zewnątrz ściany komórkowej; pod ścianą znajduje się błona, a wewnątrz cytoplazma.",
    "image": "r01_bakteria_schemat.jpg"
  },
  {
    "id": "R01_BUD_11",
    "section": "Rodzaje i budowa komórek",
    "type": "single_choice",
    "prompt": "Z jakiej substancji zbudowana jest ściana komórkowa roślin?",
    "options": [
      "celuloza",
      "chityna",
      "mureina",
      "hemoglobina",
      "glikogen"
    ],
    "answer": 0,
    "explanation": "Ściana komórkowa roślin zawiera celulozę, grzybów — chitynę, a bakterii — mureinę."
  },
  {
    "id": "R01_BUD_12",
    "section": "Rodzaje i budowa komórek",
    "type": "scenario",
    "prompt": "Badacz znajduje komórkę o kolistej cząsteczce DNA, bez jądra i bez wydzielonych organelli. Do jakiej grupy zaliczy tę komórkę?",
    "options": [
      "rośliny",
      "zwierzęta",
      "bakterie",
      "grzyby",
      "protisty"
    ],
    "answer": 2,
    "explanation": "Komórki prokariotyczne, reprezentowane tu przez bakterie, mają niezabezpieczone błoną jądrową koliste DNA."
  },
  {
    "id": "R01_ORG_01",
    "section": "Organella i ich funkcje",
    "type": "single_choice",
    "prompt": "Która struktura komórkowa uwalnia energię zgromadzoną w cukrach podczas oddychania komórkowego?",
    "options": [
      "aparat Golgiego",
      "wakuola",
      "chloroplast",
      "mitochondrium",
      "jądro komórkowe",
      "rybosom"
    ],
    "answer": 3,
    "explanation": "Mitochondria odpowiadają za uwalnianie energii z cukrów podczas oddychania komórkowego.",
    "image": "r01_mitochondrium_budowa.jpg"
  },
  {
    "id": "R01_ORG_02",
    "section": "Organella i ich funkcje",
    "type": "multi_select",
    "prompt": "Jakie funkcje pełni wakuola?",
    "options": [
      "utrzymywanie jędrności komórki",
      "gromadzenie barwników",
      "stanowienie zapasu wody",
      "synteza białek",
      "gromadzenie zbędnych substancji",
      "przechowywanie chromosomów"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Wodniczka pomaga zachować turgor, magazynuje wodę oraz gromadzi barwniki i zbędne substancje."
  },
  {
    "id": "R01_ORG_03",
    "section": "Organella i ich funkcje",
    "type": "true_false",
    "prompt": "Rybosomy występują także w komórkach bakterii.",
    "options": null,
    "answer": true,
    "explanation": "Rybosomy występują także w komórkach bakteryjnych."
  },
  {
    "id": "R01_ORG_04",
    "section": "Organella i ich funkcje",
    "type": "fill_in",
    "prompt": "Chloroplasty przeprowadzają __________, a mitochondria uczestniczą w __________.",
    "options": null,
    "altAnswers": [
      [
        "fotosyntezę",
        "fotosynteza"
      ],
      [
        "oddychaniu komórkowym",
        "oddychanie komórkowe"
      ]
    ],
    "answer": [
      "fotosyntezę",
      "oddychaniu komórkowym"
    ],
    "explanation": "Chloroplasty wytwarzają cukry dzięki energii słonecznej, a mitochondria uwalniają energię zawartą w cukrach."
  },
  {
    "id": "R01_ORG_05",
    "section": "Organella i ich funkcje",
    "type": "riddle",
    "prompt": "Jaka organella w pobliżu jądra składa się z cystern i pęcherzyków oraz uczestniczy w syntezie i transporcie substancji?",
    "options": null,
    "altAnswers": [
      "aparat Golgiego",
      "Golgiego"
    ],
    "answer": "aparat Golgiego",
    "explanation": "Opis aparatu Golgiego podkreśla jego błoniastą budowę oraz rolę w syntezie i transporcie m.in. białek i tłuszczów."
  },
  {
    "id": "R01_ORG_06",
    "section": "Organella i ich funkcje",
    "type": "odd_one_out",
    "prompt": "Wskaż strukturę niewystępującą wśród organelli otoczonych podwójną błoną: jądro komórkowe, mitochondrium, rybosom, chloroplast.",
    "options": null,
    "answer": "rybosom",
    "explanation": "Jądro, mitochondrium i chloroplast mają dwie otaczające błony, natomiast rybosomy są zbudowane z rRNA i białek."
  },
  {
    "id": "R01_ORG_07",
    "section": "Organella i ich funkcje",
    "type": "scenario",
    "prompt": "W komórce trzeba wyodrębnić obszary reakcji biochemicznych i transportować substancje wewnątrz cytoplazmy. Która struktura pełni taką rolę?",
    "options": [
      "wakuola",
      "siateczka śródplazmatyczna",
      "chloroplast",
      "rybosom",
      "ściana komórkowa"
    ],
    "answer": 1,
    "explanation": "Siateczka śródplazmatyczna dzieli cytoplazmę na przestrzenie i bierze udział w transporcie substancji.",
    "image": "r01_siateczka_srodplazmatyczna.jpg"
  },
  {
    "id": "R01_ORG_08",
    "section": "Organella i ich funkcje",
    "type": "match",
    "prompt": "Przyporządkuj strukturę komórkową do jej głównej funkcji.",
    "options": null,
    "left": [
      "jądro komórkowe",
      "chloroplast",
      "rybosom",
      "mitochondrium",
      "wakuola"
    ],
    "right": [
      "biosynteza białek",
      "utrzymywanie turgoru",
      "przechowywanie informacji dziedzicznej",
      "uwalnianie energii z cukrów",
      "fotosynteza"
    ],
    "answer": {
      "jądro komórkowe": "przechowywanie informacji dziedzicznej",
      "chloroplast": "fotosynteza",
      "rybosom": "biosynteza białek",
      "mitochondrium": "uwalnianie energii z cukrów",
      "wakuola": "utrzymywanie turgoru"
    },
    "explanation": "Każda z tych struktur pełni inną funkcję komórkową."
  },
  {
    "id": "R01_ORG_09",
    "section": "Organella i ich funkcje",
    "type": "sort",
    "prompt": "Podziel struktury na obecne w komórce bakteryjnej i niewystępujące w niej.",
    "options": null,
    "items": [
      "aparat Golgiego",
      "rybosomy",
      "jądro komórkowe",
      "ściana komórkowa",
      "chloroplasty",
      "błona komórkowa"
    ],
    "categories": [
      "obecne w bakterii",
      "nieobecne w bakterii"
    ],
    "answer": {
      "obecne w bakterii": [
        "błona komórkowa",
        "rybosomy",
        "ściana komórkowa"
      ],
      "nieobecne w bakterii": [
        "jądro komórkowe",
        "chloroplasty",
        "aparat Golgiego"
      ]
    },
    "explanation": "Komórka bakteryjna ma m.in. błonę, ścianę i rybosomy, ale nie zawiera jądra, chloroplastów ani aparatu Golgiego."
  },
  {
    "id": "R01_ORG_10",
    "section": "Organella i ich funkcje",
    "type": "sequence",
    "prompt": "Ułóż opis przepływu informacji genetycznej podczas wytwarzania białka.",
    "options": null,
    "items": [
      "Rybosomy syntetyzują białko",
      "mRNA przekazuje informację do rybosomów",
      "DNA przechowuje informację genetyczną",
      "tRNA dostarcza aminokwasy do rybosomów"
    ],
    "answer": [
      "DNA przechowuje informację genetyczną",
      "mRNA przekazuje informację do rybosomów",
      "tRNA dostarcza aminokwasy do rybosomów",
      "Rybosomy syntetyzują białko"
    ],
    "explanation": "DNA, mRNA, tRNA i rybosomy uczestniczą w procesie prowadzącym od informacji genetycznej do powstania białka.",
    "image": "r01_rybosom_synteza_bialka.jpg"
  },
  {
    "id": "R01_ORG_11",
    "section": "Organella i ich funkcje",
    "type": "multi_select",
    "prompt": "Które struktury komórkowe są otoczone podwójną błoną?",
    "options": [
      "jądro komórkowe",
      "rybosom",
      "mitochondrium",
      "chloroplast",
      "wakuola"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "Podwójną błonę mają jądro komórkowe, mitochondria i chloroplasty; nie dotyczy to rybosomów ani wakuoli."
  },
  {
    "id": "R01_ORG_12",
    "section": "Organella i ich funkcje",
    "type": "single_choice",
    "prompt": "Który składnik buduje ścianę komórkową grzybów?",
    "options": [
      "celuloza",
      "chityna",
      "mureina",
      "kwas mlekowy",
      "glukoza"
    ],
    "answer": 1,
    "explanation": "Ściana komórkowa grzybów zawiera chitynę."
  },
  {
    "id": "R01_ODZ_01",
    "section": "Sposoby odżywiania się organizmów",
    "type": "single_choice",
    "prompt": "Na czym polega samożywność (autotrofizm)?",
    "options": [
      "na wytwarzaniu materii organicznej z nieorganicznej",
      "na chwytaniu innych organizmów",
      "na pobieraniu wyłącznie gotowego pokarmu",
      "na życiu kosztem żywiciela"
    ],
    "answer": 0,
    "explanation": "Autotrofy potrafią wytwarzać własną materię organiczną z substancji nieorganicznych."
  },
  {
    "id": "R01_ODZ_02",
    "section": "Sposoby odżywiania się organizmów",
    "type": "multi_select",
    "prompt": "Które elementy są potrzebne do fotosyntezy?",
    "options": [
      "woda",
      "dwutlenek węgla",
      "światło",
      "tlen jako substrat",
      "etanol",
      "kwas mlekowy"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "W fotosyntezie woda i dwutlenek węgla są przekształcane pod wpływem światła w substancje pokarmowe; tlen jest produktem.",
    "image": "r01_roslina_w_sloncu.jpg"
  },
  {
    "id": "R01_ODZ_03",
    "section": "Sposoby odżywiania się organizmów",
    "type": "true_false",
    "prompt": "Rośliny zielone pobierają gotowy pokarm wyłącznie z otoczenia.",
    "options": null,
    "answer": false,
    "explanation": "Zielone rośliny należą do organizmów samożywnych, które wytwarzają pokarm w fotosyntezie."
  },
  {
    "id": "R01_ODZ_04",
    "section": "Sposoby odżywiania się organizmów",
    "type": "fill_in",
    "prompt": "Fotoautotrofy wytwarzają pokarm dzięki __________, a chemoautotrofy wykorzystują energię __________.",
    "options": null,
    "altAnswers": [
      [
        "fotosyntezie",
        "fotosynteza"
      ],
      [
        "chemiczną",
        "chemiczna"
      ]
    ],
    "answer": [
      "fotosyntezie",
      "chemiczną"
    ],
    "explanation": "Fotoautotrofy czerpią energię ze światła, natomiast chemoautotrofy z utleniania związków nieorganicznych."
  },
  {
    "id": "R01_ODZ_05",
    "section": "Sposoby odżywiania się organizmów",
    "type": "riddle",
    "prompt": "Jak nazywają się samożywne organizmy wykorzystujące energię uwalnianą przy utlenianiu związków nieorganicznych?",
    "options": null,
    "altAnswers": [
      "chemoautotrofy",
      "chemoautotrof"
    ],
    "answer": "chemoautotrofy",
    "explanation": "Do chemoautotrofów należą m.in. bakterie siarkowe i nitryfikacyjne."
  },
  {
    "id": "R01_ODZ_06",
    "section": "Sposoby odżywiania się organizmów",
    "type": "odd_one_out",
    "prompt": "Wskaż organizm niebędący padlinożercą: sęp, hiena, jeleń, larwa muchówki.",
    "options": null,
    "answer": "jeleń",
    "explanation": "Sępy, hieny i larwy niektórych muchówek są padlinożercami. Jeleń jest roślinożercą."
  },
  {
    "id": "R01_ODZ_07",
    "section": "Sposoby odżywiania się organizmów",
    "type": "scenario",
    "prompt": "Na obumarłym drewnie rozwijają się grzyby, które rozkładają szczątki organiczne do prostych związków nieorganicznych. Do jakiej grupy je zaliczyć?",
    "options": [
      "drapieżniki",
      "roślinożercy",
      "saprofity",
      "padlinożercy",
      "fotoautotrofy"
    ],
    "answer": 2,
    "explanation": "Grzyby i bakterie rozkładające szczątki organiczne to saprofity.",
    "image": "r01_grzyby_na_martwym_drewnie.jpg"
  },
  {
    "id": "R01_ODZ_08",
    "section": "Sposoby odżywiania się organizmów",
    "type": "match",
    "prompt": "Połącz sposób zdobywania pokarmu z przykładowym organizmem.",
    "options": null,
    "left": [
      "drapieżnik",
      "pasożyt",
      "roślinożerca",
      "saprofag",
      "padlinożerca"
    ],
    "right": [
      "żyrafa",
      "dżdżownica",
      "wilk",
      "sęp",
      "kleszcz"
    ],
    "answer": {
      "drapieżnik": "wilk",
      "pasożyt": "kleszcz",
      "roślinożerca": "żyrafa",
      "saprofag": "dżdżownica",
      "padlinożerca": "sęp"
    },
    "explanation": "Wilk jest drapieżnikiem, kleszcz pasożytem, żyrafa roślinożercą, dżdżownica saprofagiem, a sęp padlinożercą."
  },
  {
    "id": "R01_ODZ_09",
    "section": "Sposoby odżywiania się organizmów",
    "type": "sort",
    "prompt": "Przyporządkuj organizmy do samożywnych lub cudzożywnych.",
    "options": null,
    "items": [
      "wilk",
      "bakteria siarkowa",
      "kleszcz",
      "zielona roślina",
      "grzyb saprofityczny",
      "bakteria nitryfikacyjna"
    ],
    "categories": [
      "samożywne",
      "cudzożywne"
    ],
    "answer": {
      "samożywne": [
        "zielona roślina",
        "bakteria siarkowa",
        "bakteria nitryfikacyjna"
      ],
      "cudzożywne": [
        "wilk",
        "kleszcz",
        "grzyb saprofityczny"
      ]
    },
    "explanation": "Fotoautotrofy i chemoautotrofy wytwarzają własną materię organiczną; drapieżniki, pasożyty i saprofity korzystają z gotowych związków organicznych."
  },
  {
    "id": "R01_ODZ_10",
    "section": "Sposoby odżywiania się organizmów",
    "type": "sequence",
    "prompt": "Ułóż uproszczony ciąg obiegu materii z udziałem organizmów rozkładających szczątki.",
    "options": null,
    "items": [
      "Saprofity rozkładają szczątki do prostych związków nieorganicznych",
      "Powstają obumarłe szczątki roślin i zwierząt",
      "Roślina wytwarza substancje organiczne",
      "Saprofagi rozdrabniają szczątki"
    ],
    "answer": [
      "Roślina wytwarza substancje organiczne",
      "Powstają obumarłe szczątki roślin i zwierząt",
      "Saprofagi rozdrabniają szczątki",
      "Saprofity rozkładają szczątki do prostych związków nieorganicznych"
    ],
    "explanation": "Saprofagi rozdrabniają martwą materię organiczną, a saprofity rozkładają szczątki do prostych związków nieorganicznych.",
    "image": "r01_dzdzownica_w_sciolce.jpg"
  },
  {
    "id": "R01_ODZ_11",
    "section": "Sposoby odżywiania się organizmów",
    "type": "single_choice",
    "prompt": "Jaki składnik niezbędny do życia pozyskują rośliny owadożerne z chwytanych owadów?",
    "options": [
      "wapń",
      "chlor",
      "siarkę",
      "sód",
      "azot",
      "fosfor"
    ],
    "answer": 4,
    "explanation": "Rośliny owadożerne występują na glebach ubogich w azot i pozyskują ten pierwiastek z owadów.",
    "image": "r01_rosiczka_owadozerna.jpg"
  },
  {
    "id": "R01_ODZ_12",
    "section": "Sposoby odżywiania się organizmów",
    "type": "multi_select",
    "prompt": "Które organizmy są saprofagami (szczątkojadami)?",
    "options": [
      "dżdżownice",
      "wilki",
      "nicienie",
      "kleszcze",
      "sępy",
      "wieloszczety"
    ],
    "answer": [
      0,
      2,
      5
    ],
    "explanation": "Saprofagami są m.in. dżdżownice, nicienie i wieloszczety, które odżywiają się obumarłymi szczątkami."
  },
  {
    "id": "R01_ODD_01",
    "section": "Sposoby oddychania organizmów",
    "type": "single_choice",
    "prompt": "Między czym a czym zachodzi wymiana gazowa zewnętrzna?",
    "options": [
      "między organizmem a otoczeniem",
      "między DNA a RNA",
      "między płynami ustrojowymi a komórkami",
      "między jądrem a rybosomami"
    ],
    "answer": 0,
    "explanation": "Zewnętrzna wymiana gazowa zachodzi między organizmem a jego otoczeniem."
  },
  {
    "id": "R01_ODD_02",
    "section": "Sposoby oddychania organizmów",
    "type": "multi_select",
    "prompt": "Zaznacz poprawne zestawienia organizmów z narządami wymiany gazowej.",
    "options": [
      "ryby — skrzela",
      "owady — tchawki",
      "ssaki — skrzela",
      "ptaki — płuca",
      "ptaki — tchawki",
      "ryby — płucotchawki"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Ryby oddychają skrzelami, owady tchawkami, a ptaki płucami."
  },
  {
    "id": "R01_ODD_03",
    "section": "Sposoby oddychania organizmów",
    "type": "true_false",
    "prompt": "Rośliny oddychają zarówno w dzień, jak i w nocy.",
    "options": null,
    "answer": true,
    "explanation": "Rośliny prowadzą oddychanie nieprzerwanie; fotosynteza ustaje nocą z braku światła."
  },
  {
    "id": "R01_ODD_04",
    "section": "Sposoby oddychania organizmów",
    "type": "fill_in",
    "prompt": "W oddychaniu tlenowym glukoza reaguje z __________, a jednymi z produktów są dwutlenek węgla i __________.",
    "options": null,
    "altAnswers": [
      [
        "tlenem",
        "tlen"
      ],
      [
        "woda",
        "wodą"
      ]
    ],
    "answer": [
      "tlenem",
      "woda"
    ],
    "explanation": "W oddychaniu tlenowym glukoza ulega rozkładowi z udziałem tlenu, a powstają dwutlenek węgla, woda i energia magazynowana w ATP."
  },
  {
    "id": "R01_ODD_05",
    "section": "Sposoby oddychania organizmów",
    "type": "riddle",
    "prompt": "Jak nazywa się cząsteczka, w której komórka magazynuje użyteczną energię biologiczną uwalnianą podczas oddychania?",
    "options": null,
    "altAnswers": [
      "ATP",
      "atp"
    ],
    "answer": "ATP",
    "explanation": "Energia uwolniona podczas oddychania komórkowego zostaje zmagazynowana w cząsteczkach ATP."
  },
  {
    "id": "R01_ODD_06",
    "section": "Sposoby oddychania organizmów",
    "type": "odd_one_out",
    "prompt": "Wskaż substancję będącą substratem zamiast produktem oddychania tlenowego: dwutlenek węgla, woda, ATP, tlen.",
    "options": null,
    "answer": "tlen",
    "explanation": "Tlen jest zużywany podczas oddychania tlenowego, a dwutlenek węgla, woda i energia w ATP są produktami."
  },
  {
    "id": "R01_ODD_07",
    "section": "Sposoby oddychania organizmów",
    "type": "scenario",
    "prompt": "Mięśnie sportowca pracują wyjątkowo intensywnie i uruchamiają beztlenowy rozkład glukozy. Jaki rodzaj fermentacji może wtedy zachodzić?",
    "options": [
      "fermentacja alkoholowa",
      "fermentacja mlekowa",
      "fotosynteza",
      "oddychanie tlenowe",
      "chemosynteza"
    ],
    "answer": 1,
    "explanation": "Fermentacja mlekowa zachodzi m.in. w komórkach mięśniowych i niektórych bakteriach.",
    "image": "r01_wysilek_miesniowy.jpg"
  },
  {
    "id": "R01_ODD_08",
    "section": "Sposoby oddychania organizmów",
    "type": "match",
    "prompt": "Połącz organizm z narządem lub strukturą umożliwiającą wymianę gazową.",
    "options": null,
    "left": [
      "ryba",
      "owad",
      "ssak",
      "roślina naczyniowa"
    ],
    "right": [
      "płuca",
      "aparaty szparkowe",
      "tchawki",
      "skrzela"
    ],
    "answer": {
      "ryba": "skrzela",
      "owad": "tchawki",
      "ssak": "płuca",
      "roślina naczyniowa": "aparaty szparkowe"
    },
    "explanation": "Ryby oddychają skrzelami, owady tchawkami, ssaki płucami, a rośliny naczyniowe wymieniają gazy m.in. przez aparaty szparkowe."
  },
  {
    "id": "R01_ODD_09",
    "section": "Sposoby oddychania organizmów",
    "type": "sort",
    "prompt": "Przydziel cechy do oddychania tlenowego albo beztlenowego.",
    "options": null,
    "items": [
      "mały zysk energii",
      "dwutlenek węgla i woda jako produkty",
      "glukoza bez tlenu jako substrat",
      "duży zysk energii",
      "etanol lub kwas mlekowy jako produkty",
      "glukoza i tlen jako substraty"
    ],
    "categories": [
      "oddychanie tlenowe",
      "oddychanie beztlenowe"
    ],
    "answer": {
      "oddychanie tlenowe": [
        "glukoza i tlen jako substraty",
        "dwutlenek węgla i woda jako produkty",
        "duży zysk energii"
      ],
      "oddychanie beztlenowe": [
        "glukoza bez tlenu jako substrat",
        "etanol lub kwas mlekowy jako produkty",
        "mały zysk energii"
      ]
    },
    "explanation": "Oddychanie tlenowe wymaga tlenu i daje dużo energii, a beztlenowy rozkład glukozy daje mniej energii oraz produkty fermentacji."
  },
  {
    "id": "R01_ODD_10",
    "section": "Sposoby oddychania organizmów",
    "type": "sequence",
    "prompt": "Ułóż uproszczony opis oddychania tlenowego od substratów do zmagazynowania energii.",
    "options": null,
    "items": [
      "Zmagazynowanie uwolnionej energii w ATP",
      "Rozkład glukozy z udziałem tlenu",
      "Dostarczenie glukozy i tlenu",
      "Powstanie dwutlenku węgla i wody"
    ],
    "answer": [
      "Dostarczenie glukozy i tlenu",
      "Rozkład glukozy z udziałem tlenu",
      "Powstanie dwutlenku węgla i wody",
      "Zmagazynowanie uwolnionej energii w ATP"
    ],
    "explanation": "Równanie oddychania tlenowego pokazuje, że z glukozy i tlenu powstają CO₂, woda i energia magazynowana w ATP."
  },
  {
    "id": "R01_ODD_11",
    "section": "Sposoby oddychania organizmów",
    "type": "single_choice",
    "prompt": "Co umożliwia ślimakowi Ampullarius oddychanie, gdy jest całkowicie zanurzony?",
    "options": [
      "wyłącznie pancerz",
      "aparat szparkowy",
      "syfon oddechowy",
      "tchawki",
      "skrzydła"
    ],
    "answer": 2,
    "explanation": "Syfon oddechowy pozwala temu ślimakowi oddychać mimo całkowitego zanurzenia."
  },
  {
    "id": "R01_ODD_12",
    "section": "Sposoby oddychania organizmów",
    "type": "multi_select",
    "prompt": "Które stwierdzenia dotyczące rośliny w nocy są prawdziwe?",
    "options": [
      "oddycha",
      "prowadzi fotosyntezę bez światła",
      "pobiera tlen",
      "wytwarza dwutlenek węgla",
      "przestaje przeprowadzać wszystkie procesy życiowe"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "Bez światła fotosynteza ustaje, ale oddychanie rośliny nadal trwa: pobiera ona tlen i wytwarza dwutlenek węgla.",
    "image": "r01_roslina_dzien_i_noc.jpg"
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Wybierz wyłącznie poprawne połączenia pierwiastków z ich funkcjami.",
    "options": [
      "jod — produkcja hormonów tarczycy",
      "cynk — gojenie się ran",
      "miedź — budowa mureiny",
      "magnez — składnik chlorofilu",
      "żelazo — składnik kwasu solnego",
      "fluor — szkliwo zębów"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "explanation": "Jod służy produkcji hormonów tarczycy, cynk wspiera gojenie ran, magnez buduje chlorofil, a fluor szkliwo. Miedź nie jest składnikiem mureiny, a żelazo nie tworzy kwasu solnego."
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz mniej oczywisty pierwiastek z jego rolą w organizmie.",
    "options": null,
    "left": [
      "molibden",
      "bor",
      "mangan",
      "chlor"
    ],
    "right": [
      "tworzenie kwasu solnego w soku żołądkowym",
      "utrzymywanie kości i mięśni w dobrym stanie",
      "udział w metabolizmie wapnia i fosforu",
      "udział w wytwarzaniu enzymów potrzebnych do przyswajania składników"
    ],
    "answer": {
      "molibden": "udział w wytwarzaniu enzymów potrzebnych do przyswajania składników",
      "bor": "udział w metabolizmie wapnia i fosforu",
      "mangan": "utrzymywanie kości i mięśni w dobrym stanie",
      "chlor": "tworzenie kwasu solnego w soku żołądkowym"
    },
    "explanation": "Każdy z czterech pierwiastków pełni inną wskazaną funkcję w organizmie."
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Podziel pierwiastki na biogenne, pozostałe makroelementy i mikroelementy.",
    "options": null,
    "items": [
      "jod",
      "wapń",
      "siarka",
      "miedź",
      "azot",
      "sód",
      "węgiel",
      "molibden",
      "magnez"
    ],
    "categories": [
      "biogenne",
      "pozostałe makroelementy",
      "mikroelementy"
    ],
    "answer": {
      "biogenne": [
        "węgiel",
        "siarka",
        "azot"
      ],
      "pozostałe makroelementy": [
        "wapń",
        "sód",
        "magnez"
      ],
      "mikroelementy": [
        "miedź",
        "jod",
        "molibden"
      ]
    },
    "explanation": "Biogenne to C, H, O, S, P, N; wapń, sód i magnez są pozostałymi makroelementami, a miedź, jod i molibden mikroelementami."
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "DNA ma __________ nici, a RNA ma __________ nić.",
    "options": null,
    "altAnswers": [
      [
        "dwie",
        "2",
        "dwie długie"
      ],
      [
        "jedną",
        "jedna",
        "1"
      ]
    ],
    "answer": [
      "dwie",
      "jedną"
    ],
    "explanation": "DNA tworzy podwójna helisa z dwóch nici, natomiast RNA jest zwykle jednoniciowe."
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż cykl łączący fotosyntezę i oddychanie komórkowe, zaczynając od pobrania substratów fotosyntezy.",
    "options": null,
    "items": [
      "Oddychanie dostarcza dwutlenku węgla i wody do kolejnej fotosyntezy",
      "Pokarm i tlen są wykorzystywane w oddychaniu",
      "Roślina pobiera wodę i dwutlenek węgla",
      "W świetle roślina wytwarza pokarm i tlen"
    ],
    "answer": [
      "Roślina pobiera wodę i dwutlenek węgla",
      "W świetle roślina wytwarza pokarm i tlen",
      "Pokarm i tlen są wykorzystywane w oddychaniu",
      "Oddychanie dostarcza dwutlenku węgla i wody do kolejnej fotosyntezy"
    ],
    "explanation": "Produkty fotosyntezy są substratami oddychania, a dwutlenek węgla i woda powstające w oddychaniu są wykorzystywane w fotosyntezie."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Który pierwiastek ma inną kategorię ilościową niż pozostałe: miedź, mangan, magnez, molibden.",
    "options": null,
    "answer": "magnez",
    "explanation": "Magnez jest makroelementem, natomiast miedź, mangan i molibden to mikroelementy."
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Komórka bakteryjna może mieć rybosomy i ścianę komórkową, mimo że nie ma jądra i mitochondriów.",
    "options": null,
    "answer": true,
    "explanation": "Z porównania komórek wynika, że bakterie mają rybosomy i ścianę, a nie mają jądra ani mitochondriów."
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Roślina stoi w całkowitej ciemności. Nie prowadzi fotosyntezy, ale zużywa tlen i uwalnia dwutlenek węgla. Co wyjaśnia obserwację?",
    "options": [
      "fotosynteza zastępuje oddychanie",
      "fotosynteza nocna uwalnia CO₂",
      "roślina przestaje korzystać z energii",
      "oddychanie komórkowe trwa także nocą",
      "fermentacja alkoholowa jest jedynym procesem rośliny"
    ],
    "answer": 3,
    "explanation": "Rośliny prowadzą oddychanie komórkowe bez przerwy, także wtedy, gdy brak światła zatrzymuje fotosyntezę."
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jaka struktura komórkowa jest zbudowana z rRNA i białek, występuje również u bakterii i odpowiada za biosyntezę białka?",
    "options": null,
    "altAnswers": [
      "rybosom",
      "rybosomy"
    ],
    "answer": "rybosom",
    "explanation": "Rybosomy są zbudowane z rRNA i białek; w przeciwieństwie do jądra komórkowego występują również u bakterii."
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który komplet struktur oddechowych ma ślimak Ampullarius?",
    "options": [
      "tylko skrzela i tchawki",
      "skrzela, płuca i syfon oddechowy",
      "tylko płucotchawki",
      "tchawki i aparaty szparkowe",
      "płuca i aparaty szparkowe"
    ],
    "answer": 1,
    "explanation": "Ślimak Ampullarius może korzystać ze skrzela oraz płuca."
  },
  {
    "id": "R01_HARD_11",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Wskaż stwierdzenia potwierdzone porównaniem oddychania tlenowego i beztlenowego.",
    "options": [
      "oddychanie tlenowe uwalnia więcej energii",
      "fermentacja wymaga dostarczenia tlenu",
      "oddychanie beztlenowe może przebiegać w cytoplazmie",
      "oddychanie tlenowe daje wyłącznie kwas mlekowy",
      "mitochondria uczestniczą w oddychaniu tlenowym"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Oddychanie tlenowe daje więcej energii i przebiega z udziałem mitochondriów oraz cytoplazmy; fermentacja ma mniejszy uzysk i zachodzi w cytoplazmie."
  },
  {
    "id": "R01_HARD_12",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz proces z zestawem jego produktów.",
    "options": null,
    "left": [
      "fotosynteza",
      "oddychanie tlenowe",
      "fermentacja alkoholowa",
      "fermentacja mlekowa"
    ],
    "right": [
      "kwas mlekowy i energia",
      "dwutlenek węgla, woda i ATP",
      "węglowodany i tlen",
      "etanol, dwutlenek węgla i energia"
    ],
    "answer": {
      "fotosynteza": "węglowodany i tlen",
      "oddychanie tlenowe": "dwutlenek węgla, woda i ATP",
      "fermentacja alkoholowa": "etanol, dwutlenek węgla i energia",
      "fermentacja mlekowa": "kwas mlekowy i energia"
    },
    "explanation": "Fotosynteza, oddychanie tlenowe i oba rodzaje fermentacji dają różne zestawy produktów."
  },
  {
    "id": "R01_HARD_13",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Rozdziel pojęcia według roli w oddychaniu tlenowym, nie myląc miejsca procesu z substratami i produktami.",
    "options": null,
    "items": [
      "ATP",
      "tlen",
      "cytoplazma",
      "woda",
      "glukoza",
      "mitochondrium",
      "dwutlenek węgla"
    ],
    "categories": [
      "miejsce przebiegu",
      "substraty",
      "produkty"
    ],
    "answer": {
      "miejsce przebiegu": [
        "cytoplazma",
        "mitochondrium"
      ],
      "substraty": [
        "glukoza",
        "tlen"
      ],
      "produkty": [
        "woda",
        "dwutlenek węgla",
        "ATP"
      ]
    },
    "explanation": "Oddychanie tlenowe zachodzi w cytoplazmie i mitochondrium; jego substratami są glukoza i tlen, a produktami woda, CO₂ i ATP."
  },
  {
    "id": "R01_HARD_14",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Rośliny oddychają __________ i __________, ale fotosynteza wymaga __________.",
    "options": null,
    "altAnswers": [
      [
        "w dzień",
        "za dnia",
        "dniem"
      ],
      [
        "w nocy",
        "nocą"
      ],
      [
        "światła",
        "energii słonecznej"
      ]
    ],
    "answer": [
      "w dzień",
      "w nocy",
      "światła"
    ],
    "explanation": "Rośliny oddychają nieprzerwanie, natomiast nocą fotosynteza ustaje z powodu braku światła."
  },
  {
    "id": "R01_HARD_15",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Która grupa kręgowców w stadium larwalnym oddycha skrzelami, a w stadium dorosłym płucami i przez skórę?",
    "options": [
      "płazy",
      "gady",
      "ptaki",
      "ssaki",
      "ryby"
    ],
    "answer": 0,
    "explanation": "Larwy płazów oddychają skrzelami, a osobniki dorosłe płucami i przez skórę."
  }
];

const KID_PROMPTS = {};

const chapter = {
  "id": "r01",
  "number": 1,
  "title": "Komórki, odżywianie się i oddychanie organizmów",
  "icon": "🧬",
  "sectionOrder": [
    "Skład chemiczny komórek",
    "Rodzaje i budowa komórek",
    "Organella i ich funkcje",
    "Sposoby odżywiania się organizmów",
    "Sposoby oddychania organizmów"
  ],
  "sectionIcons": {
    "Skład chemiczny komórek": "⚗️",
    "Rodzaje i budowa komórek": "🔬",
    "Organella i ich funkcje": "🧫",
    "Sposoby odżywiania się organizmów": "🌱",
    "Sposoby oddychania organizmów": "🫁"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
