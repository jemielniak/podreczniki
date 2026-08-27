// Skróty sekcji (do identyfikatorów ćwiczeń):
//   WYD  = Wydalanie i drogi wydalania
//   BUD  = Budowa układu wydalniczego
//   NEF  = Nefron i powstawanie moczu
//   HIG  = Higiena i profilaktyka
//   CHO  = Choroby, badania i dializa
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R06_WYD_01",
    "section": "Wydalanie i drogi wydalania",
    "type": "single_choice",
    "prompt": "Czym jest wydalanie?",
    "options": [
      "Usuwaniem z organizmu zbędnych i szkodliwych produktów przemiany materii",
      "Usuwaniem niestrawionych resztek pokarmu",
      "Odzyskiwaniem z moczu wody i potrzebnych związków",
      "Magazynowaniem moczu w pęcherzu moczowym",
      "Transportowaniem moczu z nerek do pęcherza moczowego",
      "Filtrowaniem krwi w kłębuszku nerkowym"
    ],
    "answer": 0,
    "explanation": "Wydalanie polega na usuwaniu z organizmu zbędnych i szkodliwych produktów przemiany materii powstających w komórkach."
  },
  {
    "id": "R06_WYD_02",
    "section": "Wydalanie i drogi wydalania",
    "type": "true_false",
    "prompt": "Usuwanie niestrawionych resztek pokarmu jest wydalaniem.",
    "options": null,
    "answer": false,
    "explanation": "Usuwanie niestrawionych resztek pokarmu to defekacja. Wydalanie dotyczy produktów przemian chemicznych zachodzących w komórkach."
  },
  {
    "id": "R06_WYD_03",
    "section": "Wydalanie i drogi wydalania",
    "type": "multi_select",
    "prompt": "Zaznacz pary narząd-substancja zgodne z procesem wydalania.",
    "options": [
      "Nerki - mocznik",
      "Płuca - dwutlenek węgla",
      "Gruczoły potowe - sole mineralne",
      "Płuca - mocznik",
      "Nerki - niestrawione resztki pokarmu",
      "Pęcherz moczowy - dwutlenek węgla"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Nerki usuwają między innymi mocznik, płuca wydalają dwutlenek węgla, a gruczoły potowe usuwają z potem wodę, sole mineralne i niewielkie ilości mocznika.",
    "image": "r06_drogi_wydalania.jpg"
  },
  {
    "id": "R06_WYD_04",
    "section": "Wydalanie i drogi wydalania",
    "type": "match",
    "prompt": "Połącz drogę wydalania z typowymi substancjami usuwanymi tą drogą.",
    "options": null,
    "left": [
      "Nerki",
      "Płuca",
      "Gruczoły potowe w skórze"
    ],
    "right": [
      "mocznik i nadmiar wody oraz soli mineralnych",
      "dwutlenek węgla i woda",
      "woda i sole mineralne oraz mocznik"
    ],
    "answer": {
      "Nerki": "mocznik i nadmiar wody oraz soli mineralnych",
      "Płuca": "dwutlenek węgla i woda",
      "Gruczoły potowe w skórze": "woda i sole mineralne oraz mocznik"
    },
    "explanation": "Różne narządy usuwają różne produkty przemiany materii: nerki głównie z moczem, płuca z wydychanym powietrzem, a gruczoły potowe z potem.",
    "image": "r06_drogi_wydalania.jpg"
  },
  {
    "id": "R06_WYD_05",
    "section": "Wydalanie i drogi wydalania",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do właściwej kategorii.",
    "options": null,
    "items": [
      "mocznik",
      "dwutlenek węgla",
      "nadmiar soli mineralnych",
      "niestrawione resztki pokarmu",
      "substancje trujące"
    ],
    "categories": [
      "produkty wydalania",
      "nie jest produktem wydalania"
    ],
    "answer": {
      "produkty wydalania": [
        "mocznik",
        "dwutlenek węgla",
        "nadmiar soli mineralnych",
        "substancje trujące"
      ],
      "nie jest produktem wydalania": [
        "niestrawione resztki pokarmu"
      ]
    },
    "explanation": "Wydalane są produkty przemian metabolicznych. Niestrawione resztki pokarmu są usuwane w procesie defekacji."
  },
  {
    "id": "R06_WYD_06",
    "section": "Wydalanie i drogi wydalania",
    "type": "fill_in",
    "prompt": "Dwutlenek węgla jest wydalany przez __________, a nadmiar soli mineralnych może być usuwany także przez __________ w skórze.",
    "options": null,
    "answer": [
      "płuca",
      "gruczoły potowe"
    ],
    "altAnswers": [
      [
        "płuca",
        "płuca człowieka"
      ],
      [
        "gruczoły potowe",
        "gruczoły potowe w skórze"
      ]
    ],
    "explanation": "Dwutlenek węgla opuszcza organizm z wydychanym powietrzem przez płuca, a część soli mineralnych jest usuwana wraz z potem przez gruczoły potowe."
  },
  {
    "id": "R06_WYD_07",
    "section": "Wydalanie i drogi wydalania",
    "type": "odd_one_out",
    "prompt": "Co nie należy do dróg wydalania produktów przemiany materii: nerki, płuca, gruczoły potowe w skórze, końcowy odcinek układu pokarmowego.",
    "options": null,
    "answer": "końcowy odcinek układu pokarmowego",
    "explanation": "Końcowy odcinek układu pokarmowego usuwa niestrawione resztki pokarmu w procesie defekacji, a nie produkty przemiany materii.",
    "image": "r06_drogi_wydalania.jpg"
  },
  {
    "id": "R06_WYD_08",
    "section": "Wydalanie i drogi wydalania",
    "type": "scenario",
    "prompt": "W komórkach powstaje dwutlenek węgla, który przechodzi do krwi. Którą drogą zostanie następnie usunięty z organizmu?",
    "options": [
      "Z wydychanym powietrzem przez płuca",
      "Z moczem przez nerki",
      "Z potem przez gruczoły potowe",
      "Przez pęcherz moczowy bez udziału płuc",
      "Przez miedniczkę nerkową",
      "W procesie defekacji"
    ],
    "answer": 0,
    "explanation": "Dwutlenek węgla jest transportowany z krwią do płuc i wydalany z organizmu w wydychanym powietrzu."
  },
  {
    "id": "R06_WYD_09",
    "section": "Wydalanie i drogi wydalania",
    "type": "riddle",
    "prompt": "Jak nazywa się proces usuwania z organizmu niestrawionych resztek pokarmu?",
    "options": null,
    "answer": "defekacja",
    "altAnswers": [
      "defekacja",
      "defekacją"
    ],
    "explanation": "Niestrawione resztki pokarmu nie są produktami przemian chemicznych w komórkach, dlatego ich usuwanie nazywa się defekacją."
  },
  {
    "id": "R06_WYD_10",
    "section": "Wydalanie i drogi wydalania",
    "type": "sequence",
    "prompt": "Ułóż etapy drogi zbędnego produktu przemiany materii od powstania do usunięcia z organizmu.",
    "options": null,
    "items": [
      "transport wraz z krwią do narządów wydalających",
      "wydalenie substancji z organizmu",
      "powstanie zbędnych i szkodliwych produktów przemiany materii w komórkach",
      "przejście produktów przemiany materii z komórek do krwi"
    ],
    "answer": [
      "powstanie zbędnych i szkodliwych produktów przemiany materii w komórkach",
      "przejście produktów przemiany materii z komórek do krwi",
      "transport wraz z krwią do narządów wydalających",
      "wydalenie substancji z organizmu"
    ],
    "explanation": "Produkty przemiany materii powstają w komórkach, trafiają do krwi, są transportowane do narządów uczestniczących w wydalaniu i usuwane poza organizm."
  },
  {
    "id": "R06_WYD_11",
    "section": "Wydalanie i drogi wydalania",
    "type": "single_choice",
    "prompt": "Czym jest mocz?",
    "options": [
      "Roztworem wody i rozpuszczonych w niej produktów przemiany materii",
      "Niestrawioną częścią pokarmu",
      "Wyłącznie wodą odzyskaną z krwi",
      "Płynem zawierającym tylko glukozę i aminokwasy",
      "Powietrzem usuwanym z płuc",
      "Płynem gromadzonym w kanalikach bez udziału nerek"
    ],
    "answer": 0,
    "explanation": "Mocz jest roztworem wody oraz rozpuszczonych w niej produktów przemiany materii, który powstaje dzięki pracy nerek."
  },
  {
    "id": "R06_BUD_01",
    "section": "Budowa układu wydalniczego",
    "type": "multi_select",
    "prompt": "Zaznacz elementy tworzące układ wydalniczy.",
    "options": [
      "dwie nerki",
      "dwa moczowody",
      "pęcherz moczowy",
      "cewka moczowa",
      "płuca",
      "gruczoły potowe"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Układ wydalniczy tworzą dwie nerki oraz drogi wyprowadzające mocz: dwa moczowody, pęcherz moczowy i cewka moczowa.",
    "image": "r06_uklad_wydalniczy.jpg"
  },
  {
    "id": "R06_BUD_02",
    "section": "Budowa układu wydalniczego",
    "type": "single_choice",
    "prompt": "Gdzie leżą nerki?",
    "options": [
      "W tylnej części jamy brzusznej, między piersiowym a lędźwiowym odcinkiem kręgosłupa",
      "W pęcherzu moczowym",
      "W przedniej części klatki piersiowej",
      "W miedniczce nerkowej",
      "W kanalikach nerkowych",
      "Wewnątrz cewki moczowej"
    ],
    "answer": 0,
    "explanation": "Nerki leżą w tylnej części jamy brzusznej, w sąsiedztwie przejścia między piersiowym a lędźwiowym odcinkiem kręgosłupa."
  },
  {
    "id": "R06_BUD_03",
    "section": "Budowa układu wydalniczego",
    "type": "fill_in",
    "prompt": "Warstwa zewnętrzna nerki to __________, a warstwa wewnętrzna to __________.",
    "options": null,
    "answer": [
      "kora",
      "rdzeń"
    ],
    "altAnswers": [
      [
        "kora",
        "kora nerki"
      ],
      [
        "rdzeń",
        "rdzeń nerki"
      ]
    ],
    "explanation": "W nerce wyróżnia się zewnętrzną korę i wewnętrzny rdzeń.",
    "image": "r06_przekroj_nerki.jpg"
  },
  {
    "id": "R06_BUD_04",
    "section": "Budowa układu wydalniczego",
    "type": "match",
    "prompt": "Połącz element układu wydalniczego z jego funkcją.",
    "options": null,
    "left": [
      "Nerka",
      "Moczowód",
      "Pęcherz moczowy",
      "Cewka moczowa"
    ],
    "right": [
      "oczyszcza krew i wytwarza mocz",
      "transportuje mocz z nerki do pęcherza",
      "magazynuje mocz",
      "usuwa mocz na zewnątrz organizmu"
    ],
    "answer": {
      "Nerka": "oczyszcza krew i wytwarza mocz",
      "Moczowód": "transportuje mocz z nerki do pęcherza",
      "Pęcherz moczowy": "magazynuje mocz",
      "Cewka moczowa": "usuwa mocz na zewnątrz organizmu"
    },
    "explanation": "Nerki wytwarzają mocz, moczowody prowadzą go do pęcherza, pęcherz go gromadzi, a cewka moczowa usuwa go na zewnątrz.",
    "image": "r06_uklad_wydalniczy.jpg"
  },
  {
    "id": "R06_BUD_05",
    "section": "Budowa układu wydalniczego",
    "type": "true_false",
    "prompt": "Miedniczka nerkowa bierze bezpośredni udział w oczyszczaniu krwi.",
    "options": null,
    "answer": false,
    "explanation": "Miedniczka nerkowa służy do odprowadzania moczu. Oczyszczanie krwi odbywa się w nefronach.",
    "image": "r06_przekroj_nerki.jpg"
  },
  {
    "id": "R06_BUD_06",
    "section": "Budowa układu wydalniczego",
    "type": "sequence",
    "prompt": "Ułóż kolejne odcinki drogi moczu po opuszczeniu cewek zbiorczych.",
    "options": null,
    "items": [
      "cewka moczowa",
      "moczowód",
      "miedniczka nerkowa",
      "pęcherz moczowy"
    ],
    "answer": [
      "miedniczka nerkowa",
      "moczowód",
      "pęcherz moczowy",
      "cewka moczowa"
    ],
    "explanation": "Mocz z cewek zbiorczych trafia do miedniczki nerkowej, następnie płynie moczowodem do pęcherza i jest usuwany przez cewkę moczową.",
    "image": "r06_drogi_moczu.jpg"
  },
  {
    "id": "R06_BUD_07",
    "section": "Budowa układu wydalniczego",
    "type": "riddle",
    "prompt": "Mam elastyczne ściany z grubą warstwą mięśni gładkich. Gdy się wypełniam, rozciąganie moich ścian wywołuje impulsy nerwowe. Co to za narząd?",
    "options": null,
    "answer": "pęcherz moczowy",
    "altAnswers": [
      "pęcherz moczowy",
      "pęcherz"
    ],
    "explanation": "Pęcherz moczowy magazynuje mocz. Jego wypełnianie rozciąga ściany, co prowadzi do powstawania impulsów nerwowych docierających do ośrodków w mózgowiu."
  },
  {
    "id": "R06_BUD_08",
    "section": "Budowa układu wydalniczego",
    "type": "scenario",
    "prompt": "Lekarz opisuje około 30-centymetrowy przewód, którego ściany zawierają mięśnie gładkie. Ich skurcze wspomagają przepływ moczu do pęcherza. O jakiej strukturze mówi?",
    "options": [
      "moczowodzie",
      "cewce moczowej",
      "miedniczce nerkowej",
      "kanaliku nerkowym",
      "cewce zbiorczej",
      "pęcherzu moczowym"
    ],
    "answer": 0,
    "explanation": "Moczowód ma około 30 cm długości i odprowadza mocz z miedniczki nerkowej do pęcherza. Skurcze mięśni gładkich jego ścian wspomagają przepływ moczu."
  },
  {
    "id": "R06_BUD_09",
    "section": "Budowa układu wydalniczego",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest częścią nerki: kora nerki, rdzeń nerki, miedniczka nerkowa, pęcherz moczowy.",
    "options": null,
    "answer": "pęcherz moczowy",
    "explanation": "Kora, rdzeń i miedniczka nerkowa są elementami nerki. Pęcherz moczowy jest osobnym narządem dróg moczowych.",
    "image": "r06_przekroj_nerki.jpg"
  },
  {
    "id": "R06_BUD_10",
    "section": "Budowa układu wydalniczego",
    "type": "single_choice",
    "prompt": "Który opis długości cewki moczowej jest poprawny?",
    "options": [
      "U kobiet około 5 cm, u mężczyzn około 18 cm",
      "U kobiet około 18 cm, u mężczyzn około 5 cm",
      "U kobiet i mężczyzn około 30 cm",
      "U kobiet około 30 cm, u mężczyzn około 18 cm",
      "U kobiet około 5 cm, u mężczyzn około 30 cm",
      "U kobiet i mężczyzn około 5 cm"
    ],
    "answer": 0,
    "explanation": "Cewka moczowa u kobiet jest znacznie krótsza, około 5 cm, natomiast u mężczyzn ma około 18 cm.",
    "image": "r06_cewka_kobieta_mezczyzna.jpg"
  },
  {
    "id": "R06_BUD_11",
    "section": "Budowa układu wydalniczego",
    "type": "match",
    "prompt": "Połącz część nerki z opisem.",
    "options": null,
    "left": [
      "Kora nerki",
      "Rdzeń nerki",
      "Miedniczka nerkowa"
    ],
    "right": [
      "zawiera liczne ciałka nerkowe",
      "zawiera kanaliki nerkowe i cewki zbiorcze",
      "odbiera mocz i kieruje go do moczowodu"
    ],
    "answer": {
      "Kora nerki": "zawiera liczne ciałka nerkowe",
      "Rdzeń nerki": "zawiera kanaliki nerkowe i cewki zbiorcze",
      "Miedniczka nerkowa": "odbiera mocz i kieruje go do moczowodu"
    },
    "explanation": "Kora jest związana przede wszystkim z ciałkami nerkowymi, rdzeń z kanalikami i cewkami zbiorczymi, a miedniczka służy odprowadzaniu moczu.",
    "image": "r06_przekroj_nerki.jpg"
  },
  {
    "id": "R06_NEF_01",
    "section": "Nefron i powstawanie moczu",
    "type": "single_choice",
    "prompt": "Jaki element jest podstawową jednostką budulcową i funkcjonalną nerki?",
    "options": [
      "nefron",
      "moczowód",
      "pęcherz moczowy",
      "miedniczka nerkowa",
      "cewka moczowa",
      "gruczoł potowy"
    ],
    "answer": 0,
    "explanation": "Podstawowym elementem budulcowym i funkcjonalnym nerki jest nefron."
  },
  {
    "id": "R06_NEF_02",
    "section": "Nefron i powstawanie moczu",
    "type": "match",
    "prompt": "Połącz element nefronu z jego opisem.",
    "options": null,
    "left": [
      "Kłębuszek nerkowy",
      "Torebka kłębuszka",
      "Kanalik nerkowy",
      "Cewka zbiorcza"
    ],
    "right": [
      "skupisko naczyń włosowatych",
      "miejsce do którego przenikają filtrowane składniki osocza",
      "odprowadza mocz z ciałka nerkowego i modyfikuje jego skład",
      "zbiera mocz ostateczny"
    ],
    "answer": {
      "Kłębuszek nerkowy": "skupisko naczyń włosowatych",
      "Torebka kłębuszka": "miejsce do którego przenikają filtrowane składniki osocza",
      "Kanalik nerkowy": "odprowadza mocz z ciałka nerkowego i modyfikuje jego skład",
      "Cewka zbiorcza": "zbiera mocz ostateczny"
    },
    "explanation": "Ciałko nerkowe obejmuje kłębuszek i torebkę, a kanalik nerkowy modyfikuje skład przesączu. Kanaliki uchodzą do cewek zbiorczych.",
    "image": "r06_nefron.jpg"
  },
  {
    "id": "R06_NEF_03",
    "section": "Nefron i powstawanie moczu",
    "type": "true_false",
    "prompt": "W jednej nerce znajduje się około miliona nefronów.",
    "options": null,
    "answer": true,
    "explanation": "Jedna nerka zawiera około miliona nefronów."
  },
  {
    "id": "R06_NEF_04",
    "section": "Nefron i powstawanie moczu",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania moczu w prawidłowej kolejności.",
    "options": null,
    "items": [
      "w cewce zbiorczej znajduje się mocz ostateczny",
      "wchłanianie do krwi wody oraz potrzebnych substancji",
      "filtracja składników osocza do torebki kłębuszka",
      "wydzielanie zbędnych i szkodliwych substancji do wnętrza kanalika"
    ],
    "answer": [
      "filtracja składników osocza do torebki kłębuszka",
      "wchłanianie do krwi wody oraz potrzebnych substancji",
      "wydzielanie zbędnych i szkodliwych substancji do wnętrza kanalika",
      "w cewce zbiorczej znajduje się mocz ostateczny"
    ],
    "explanation": "Najpierw zachodzi filtracja i powstaje mocz pierwotny, potem potrzebne substancje i część wody wracają do krwi, a zbędne związki są wydzielane do kanalika. Ostateczny mocz trafia do cewki zbiorczej.",
    "image": "r06_nefron.jpg"
  },
  {
    "id": "R06_NEF_05",
    "section": "Nefron i powstawanie moczu",
    "type": "fill_in",
    "prompt": "Ciałko nerkowe składa się z __________ oraz __________.",
    "options": null,
    "answer": [
      "kłębuszka nerkowego",
      "torebki kłębuszka"
    ],
    "altAnswers": [
      [
        "kłębuszka nerkowego",
        "kłębuszek nerkowy"
      ],
      [
        "torebki kłębuszka",
        "torebka kłębuszka"
      ]
    ],
    "explanation": "Ciałko nerkowe tworzą kłębuszek nerkowy, czyli skupisko naczyń włosowatych, oraz otaczająca go torebka kłębuszka."
  },
  {
    "id": "R06_NEF_06",
    "section": "Nefron i powstawanie moczu",
    "type": "multi_select",
    "prompt": "Zaznacz substancje odzyskiwane z powstającego moczu do krwi w kanaliku nerkowym.",
    "options": [
      "woda",
      "glukoza",
      "aminokwasy",
      "sole mineralne",
      "mocznik",
      "substancje trujące"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W kanalikach nerkowych do krwi wracają między innymi woda, glukoza, aminokwasy i potrzebne sole mineralne. Zbędne i szkodliwe związki pozostają w moczu lub są do niego wydzielane.",
    "image": "r06_powstawanie_moczu.jpg"
  },
  {
    "id": "R06_NEF_07",
    "section": "Nefron i powstawanie moczu",
    "type": "single_choice",
    "prompt": "Co zawiera mocz pierwotny bezpośrednio po filtracji?",
    "options": [
      "Zarówno substancje potrzebne organizmowi, jak i zbędne lub szkodliwe",
      "Wyłącznie mocznik",
      "Wyłącznie wodę i sole mineralne",
      "Tylko glukozę i aminokwasy",
      "Wyłącznie substancje trujące",
      "Tylko składniki moczu ostatecznego"
    ],
    "answer": 0,
    "explanation": "Mocz pierwotny powstaje w wyniku filtracji osocza i zawiera zarówno substancje potrzebne, jak i zbędne czy szkodliwe.",
    "image": "r06_nefron.jpg"
  },
  {
    "id": "R06_NEF_08",
    "section": "Nefron i powstawanie moczu",
    "type": "scenario",
    "prompt": "Badana próbka pochodzi z cewki zbiorczej zdrowej osoby, czyli zawiera mocz ostateczny. Której substancji potrzebnej organizmowi nie powinno w niej być?",
    "options": [
      "mocznika",
      "wody",
      "soli mineralnych",
      "glukozy",
      "substancji szkodliwych",
      "nadmiaru soli mineralnych"
    ],
    "answer": 3,
    "explanation": "Glukoza jest substancją potrzebną organizmowi i w kanaliku nerkowym zostaje odzyskana do krwi. W prawidłowym moczu ostatecznym nie powinna się znajdować.",
    "image": "r06_nefron.jpg"
  },
  {
    "id": "R06_NEF_09",
    "section": "Nefron i powstawanie moczu",
    "type": "sort",
    "prompt": "Przyporządkuj procesy do części nefronu, w której zachodzą.",
    "options": null,
    "items": [
      "filtracja krwi",
      "powstanie moczu pierwotnego",
      "odzyskiwanie wody",
      "odzyskiwanie glukozy",
      "wydzielanie zbędnych substancji do wnętrza kanalika",
      "modyfikowanie składu moczu"
    ],
    "categories": [
      "ciałko nerkowe",
      "kanalik nerkowy"
    ],
    "answer": {
      "ciałko nerkowe": [
        "filtracja krwi",
        "powstanie moczu pierwotnego"
      ],
      "kanalik nerkowy": [
        "odzyskiwanie wody",
        "odzyskiwanie glukozy",
        "wydzielanie zbędnych substancji do wnętrza kanalika",
        "modyfikowanie składu moczu"
      ]
    },
    "explanation": "W ciałku nerkowym zachodzi filtracja i powstaje mocz pierwotny. Kanalik nerkowy odzyskuje potrzebne składniki, wydziela zbędne związki i modyfikuje skład moczu.",
    "image": "r06_powstawanie_moczu.jpg"
  },
  {
    "id": "R06_NEF_10",
    "section": "Nefron i powstawanie moczu",
    "type": "riddle",
    "prompt": "Jestem skupiskiem naczyń włosowatych w ciałku nerkowym. Jak się nazywam?",
    "options": null,
    "answer": "kłębuszek nerkowy",
    "altAnswers": [
      "kłębuszek nerkowy",
      "kłębuszek"
    ],
    "explanation": "Kłębuszek nerkowy jest skupiskiem naczyń włosowatych i wraz z torebką kłębuszka tworzy ciałko nerkowe."
  },
  {
    "id": "R06_NEF_11",
    "section": "Nefron i powstawanie moczu",
    "type": "true_false",
    "prompt": "Nerki pomagają utrzymywać niemal stałą ilość wody i soli mineralnych w organizmie, odzyskując potrzebne ilości i usuwając nadmiar z moczem.",
    "options": null,
    "answer": true,
    "explanation": "Jest to funkcja regulacyjna nerek: odzyskują potrzebną wodę i sole mineralne, a ich nadmiar usuwają z moczem.",
    "image": "r06_powstawanie_moczu.jpg"
  },
  {
    "id": "R06_HIG_01",
    "section": "Higiena i profilaktyka",
    "type": "multi_select",
    "prompt": "Zaznacz zachowania sprzyjające prawidłowej pracy układu wydalniczego.",
    "options": [
      "częste mycie ciała i miejsc intymnych",
      "codzienna zmiana bielizny",
      "dostosowanie ubioru do pogody",
      "regularne opróżnianie pęcherza",
      "ograniczanie spożycia soli",
      "długie przetrzymywanie moczu"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Profilaktyka obejmuje higienę osobistą, właściwy ubiór, regularne opróżnianie pęcherza, odpowiednią dietę i unikanie nadmiaru soli. Przetrzymywanie moczu jest niekorzystne.",
    "image": "r06_nawyki_higieniczne.jpg"
  },
  {
    "id": "R06_HIG_02",
    "section": "Higiena i profilaktyka",
    "type": "sort",
    "prompt": "Podziel zachowania na korzystne i niekorzystne dla układu wydalniczego.",
    "options": null,
    "items": [
      "wypijanie około 2 l wody dziennie",
      "codzienna zmiana bielizny",
      "dostosowywanie ubioru do pogody",
      "spożywanie dużych ilości soli",
      "noszenie krótkich kurtek niezasłaniających całych pleców",
      "rzadkie opróżnianie pęcherza moczowego"
    ],
    "categories": [
      "pozytywny wpływ",
      "negatywny wpływ"
    ],
    "answer": {
      "pozytywny wpływ": [
        "wypijanie około 2 l wody dziennie",
        "codzienna zmiana bielizny",
        "dostosowywanie ubioru do pogody"
      ],
      "negatywny wpływ": [
        "spożywanie dużych ilości soli",
        "noszenie krótkich kurtek niezasłaniających całych pleców",
        "rzadkie opróżnianie pęcherza moczowego"
      ]
    },
    "explanation": "Odpowiednie nawodnienie, higiena i ubiór wspierają układ wydalniczy. Nadmiar soli, wychłodzenie i przetrzymywanie moczu zwiększają ryzyko problemów.",
    "image": "r06_nawyki_higieniczne.jpg"
  },
  {
    "id": "R06_HIG_03",
    "section": "Higiena i profilaktyka",
    "type": "true_false",
    "prompt": "Długie przetrzymywanie moczu zmniejsza ryzyko rozwoju bakterii w pęcherzu.",
    "options": null,
    "answer": false,
    "explanation": "Gdy mocz zbyt długo pozostaje w pęcherzu, ulega zagęszczeniu i mogą rozwijać się w nim chorobotwórcze bakterie."
  },
  {
    "id": "R06_HIG_04",
    "section": "Higiena i profilaktyka",
    "type": "single_choice",
    "prompt": "Ile wody dziennie zaleca się wypijać w codziennej profilaktyce układu wydalniczego?",
    "options": [
      "około 0,5 l",
      "około 1 l",
      "około 2 l",
      "około 2,5 l",
      "około 4 l",
      "około 5 l"
    ],
    "answer": 2,
    "explanation": "W codziennej profilaktyce zaleca się wypijanie około 2 l wody dziennie. Przy kamicy zalecenia dotyczące ilości płynów mogą być większe."
  },
  {
    "id": "R06_HIG_05",
    "section": "Higiena i profilaktyka",
    "type": "fill_in",
    "prompt": "Profilaktycznie badanie ogólne moczu zaleca się wykonywać przynajmniej __________.",
    "options": null,
    "answer": [
      "raz w roku"
    ],
    "altAnswers": [
      [
        "raz w roku",
        "1 raz w roku",
        "co najmniej raz w roku"
      ]
    ],
    "explanation": "Badanie ogólne moczu warto wykonywać profilaktycznie przynajmniej raz w roku, ponieważ zmiany składu moczu mogą wskazywać na choroby."
  },
  {
    "id": "R06_HIG_06",
    "section": "Higiena i profilaktyka",
    "type": "scenario",
    "prompt": "Uczeń pije bardzo mało płynów, lubi słone potrawy i często długo przetrzymuje mocz. Który z tych nawyków bezpośrednio sprzyja zagęszczaniu moczu z powodu niedoboru wody?",
    "options": [
      "picie bardzo małej ilości płynów",
      "codzienna zmiana bielizny",
      "dostosowanie ubioru do pogody",
      "regularne badanie moczu",
      "częste mycie ciała",
      "ograniczanie soli"
    ],
    "answer": 0,
    "explanation": "Przy niedoborze płynów organizm odzyskuje więcej wody z powstającego moczu, przez co mocz staje się bardziej zagęszczony."
  },
  {
    "id": "R06_HIG_07",
    "section": "Higiena i profilaktyka",
    "type": "odd_one_out",
    "prompt": "Wskaż zachowanie niepasujące do zasad profilaktyki: codzienna zmiana bielizny, ubieranie się stosownie do pogody, regularne opróżnianie pęcherza, spożywanie dużych ilości soli.",
    "options": null,
    "answer": "spożywanie dużych ilości soli",
    "explanation": "Duże spożycie soli jest niekorzystne dla układu wydalniczego. Pozostałe zachowania należą do zaleceń profilaktycznych.",
    "image": "r06_nawyki_higieniczne.jpg"
  },
  {
    "id": "R06_HIG_08",
    "section": "Higiena i profilaktyka",
    "type": "match",
    "prompt": "Połącz niekorzystny nawyk z jego skutkiem.",
    "options": null,
    "left": [
      "Nadmiar soli",
      "Zbyt mało płynów",
      "Długie przetrzymywanie moczu",
      "Wychłodzenie okolicy układu wydalniczego"
    ],
    "right": [
      "utrudnia wchłanianie wody w nefronach",
      "sprzyja zagęszczaniu moczu",
      "sprzyja zagęszczaniu moczu i rozwojowi bakterii w pęcherzu",
      "osłabia odporność narządów na choroby"
    ],
    "answer": {
      "Nadmiar soli": "utrudnia wchłanianie wody w nefronach",
      "Zbyt mało płynów": "sprzyja zagęszczaniu moczu",
      "Długie przetrzymywanie moczu": "sprzyja zagęszczaniu moczu i rozwojowi bakterii w pęcherzu",
      "Wychłodzenie okolicy układu wydalniczego": "osłabia odporność narządów na choroby"
    },
    "explanation": "Nawyki żywieniowe, nawodnienie, regularne oddawanie moczu i odpowiedni ubiór wpływają na stan układu wydalniczego."
  },
  {
    "id": "R06_HIG_09",
    "section": "Higiena i profilaktyka",
    "type": "riddle",
    "prompt": "Jak nazywa się podstawowe badanie, w którym ocenia się między innymi barwę, pH, ciężar właściwy, białko, glukozę i osad moczu?",
    "options": null,
    "answer": "badanie ogólne moczu",
    "altAnswers": [
      "badanie ogólne moczu",
      "analiza ogólna moczu",
      "ogólne badanie moczu"
    ],
    "explanation": "Badanie ogólne moczu pozwala ocenić wiele cech i składników moczu oraz może pomóc wykryć choroby układu wydalniczego.",
    "image": "r06_analiza_moczu.jpg"
  },
  {
    "id": "R06_HIG_10",
    "section": "Higiena i profilaktyka",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki, które mogą zmieniać cechy moczu oceniane w badaniu ogólnym.",
    "options": [
      "spożycie buraków",
      "sposób odżywiania",
      "stan zdrowia",
      "codzienna zmiana bielizny",
      "długość moczowodu",
      "liczba nefronów w nerce"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Barwa moczu może zmieniać się pod wpływem diety, na przykład po burakach, a pH zależy między innymi od sposobu odżywiania i stanu zdrowia.",
    "image": "r06_analiza_moczu.jpg"
  },
  {
    "id": "R06_HIG_11",
    "section": "Higiena i profilaktyka",
    "type": "single_choice",
    "prompt": "Dlaczego regularne opróżnianie pęcherza moczowego jest ważne?",
    "options": [
      "Ponieważ zbyt długo zalegający mocz zagęszcza się i mogą rozwijać się w nim bakterie",
      "Ponieważ wydłuża cewkę moczową",
      "Ponieważ zwiększa liczbę nefronów",
      "Ponieważ zatrzymuje filtrację w kłębuszkach",
      "Ponieważ całkowicie usuwa sole mineralne z organizmu",
      "Ponieważ zastępuje picie odpowiedniej ilości płynów"
    ],
    "answer": 0,
    "explanation": "Długie zaleganie moczu w pęcherzu sprzyja jego zagęszczaniu oraz rozwojowi chorobotwórczych bakterii.",
    "image": "r06_nawyki_higieniczne.jpg"
  },
  {
    "id": "R06_CHO_01",
    "section": "Choroby, badania i dializa",
    "type": "single_choice",
    "prompt": "Jakie bakterie są najczęstszą przyczyną zakażeń dróg moczowych?",
    "options": [
      "Escherichia coli",
      "bakterie z płynu dializacyjnego",
      "bakterie z kłębuszka nerkowego",
      "bakterie z cewki zbiorczej",
      "bakterie z miedniczki nerkowej",
      "bakterie z krwi zdrowej osoby"
    ],
    "answer": 0,
    "explanation": "Najczęstszą przyczyną zakażeń dróg moczowych są bakterie Escherichia coli.",
    "image": "r06_bakterie_e_coli.jpg"
  },
  {
    "id": "R06_CHO_02",
    "section": "Choroby, badania i dializa",
    "type": "multi_select",
    "prompt": "Zaznacz objawy typowe dla zakażenia dróg moczowych.",
    "options": [
      "ból pęcherza",
      "pieczenie przy oddawaniu moczu",
      "częste oddawanie niewielkich ilości moczu",
      "gorączka",
      "napady kolki nerkowej",
      "wymioty związane z kamicą"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Zakażeniu dróg moczowych mogą towarzyszyć ból pęcherza, pieczenie, częste oddawanie małych ilości moczu i gorączka. Kolka nerkowa i wymioty są typowe dla kamicy.",
    "image": "r06_bakterie_e_coli.jpg"
  },
  {
    "id": "R06_CHO_03",
    "section": "Choroby, badania i dializa",
    "type": "single_choice",
    "prompt": "Jak leczy się zakażenia dróg moczowych?",
    "options": [
      "Stosując antybiotyki i pijąc dużą ilość płynów",
      "Wyłącznie ograniczając ilość płynów",
      "Zawsze rozbijając kamienie ultradźwiękami",
      "Wyłącznie za pomocą dializy",
      "Przetrzymując mocz w pęcherzu",
      "Zwiększając spożycie soli"
    ],
    "answer": 0,
    "explanation": "W zakażeniach dróg moczowych stosuje się antybiotyki oraz zaleca picie dużej ilości płynów."
  },
  {
    "id": "R06_CHO_04",
    "section": "Choroby, badania i dializa",
    "type": "match",
    "prompt": "Połącz chorobę lub stan z charakterystycznym opisem.",
    "options": null,
    "left": [
      "Zakażenie dróg moczowych",
      "Kamica nerkowa",
      "Kłębuszkowe zapalenie nerek",
      "Niewydolność nerek"
    ],
    "right": [
      "pieczenie i częste oddawanie niewielkich ilości moczu",
      "napady ostrego bólu w okolicy nerek i możliwa krew w moczu",
      "zaburzona filtracja i mała ilość oddawanego moczu",
      "może wymagać oczyszczania krwi za pomocą dializatora"
    ],
    "answer": {
      "Zakażenie dróg moczowych": "pieczenie i częste oddawanie niewielkich ilości moczu",
      "Kamica nerkowa": "napady ostrego bólu w okolicy nerek i możliwa krew w moczu",
      "Kłębuszkowe zapalenie nerek": "zaburzona filtracja i mała ilość oddawanego moczu",
      "Niewydolność nerek": "może wymagać oczyszczania krwi za pomocą dializatora"
    },
    "explanation": "Każdy z tych problemów ma inne typowe objawy lub sposób postępowania. Niewydolność nerek może prowadzić do konieczności dializy."
  },
  {
    "id": "R06_CHO_05",
    "section": "Choroby, badania i dializa",
    "type": "true_false",
    "prompt": "Picie zbyt małej ilości płynów i przetrzymywanie moczu mogą sprzyjać powstawaniu kamieni nerkowych.",
    "options": null,
    "answer": true,
    "explanation": "Przy zbyt małej podaży płynów lub przetrzymywaniu moczu w nerkach mogą gromadzić się osady soli mineralnych, z których powstają kamienie.",
    "image": "r06_kamienie_nerkowe.jpg"
  },
  {
    "id": "R06_CHO_06",
    "section": "Choroby, badania i dializa",
    "type": "sequence",
    "prompt": "Ułóż etapy dializy w prawidłowej kolejności.",
    "options": null,
    "items": [
      "oczyszczona krew wraca do krwiobiegu żyłami",
      "szkodliwe produkty przemiany materii przenikają do płynu dializacyjnego",
      "krew chorego jest doprowadzana z tętnicy do dializatora",
      "krew zostaje oczyszczona ze zbędnych produktów"
    ],
    "answer": [
      "krew chorego jest doprowadzana z tętnicy do dializatora",
      "szkodliwe produkty przemiany materii przenikają do płynu dializacyjnego",
      "krew zostaje oczyszczona ze zbędnych produktów",
      "oczyszczona krew wraca do krwiobiegu żyłami"
    ],
    "explanation": "Podczas dializy krew płynie z tętnicy do dializatora, gdzie szkodliwe substancje przechodzą do płynu dializacyjnego, a oczyszczona krew wraca do organizmu żyłami.",
    "image": "r06_dializa.jpg"
  },
  {
    "id": "R06_CHO_07",
    "section": "Choroby, badania i dializa",
    "type": "multi_select",
    "prompt": "Zaznacz wyniki badania moczu, które mogą wskazywać na chorobę lub zakażenie.",
    "options": [
      "obecność białka",
      "obecność glukozy",
      "zbyt duża liczba leukocytów",
      "zbyt duża liczba erytrocytów",
      "obecność bakterii",
      "urobilinogen w normie"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Białko, glukoza, nadmiar leukocytów lub erytrocytów oraz bakterie mogą wskazywać na nieprawidłowości. Urobilinogen w normie nie jest takim sygnałem.",
    "image": "r06_analiza_moczu.jpg"
  },
  {
    "id": "R06_CHO_08",
    "section": "Choroby, badania i dializa",
    "type": "scenario",
    "prompt": "Osoba odczuwa pieczenie i często oddaje niewielkie ilości moczu. W badaniu stwierdzono bakterie i podwyższoną liczbę leukocytów. Jaki problem najbardziej pasuje do opisu?",
    "options": [
      "zakażenie dróg moczowych",
      "kamica nerkowa bez zakażenia",
      "prawidłowy wynik badania",
      "wyłącznie zbyt duże spożycie soli",
      "niewydolność płuc",
      "defekacja"
    ],
    "answer": 0,
    "explanation": "Pieczenie, częste oddawanie małych ilości moczu, bakterie i podwyższona liczba leukocytów są charakterystyczne dla zakażenia dróg moczowych.",
    "image": "r06_bakterie_e_coli.jpg"
  },
  {
    "id": "R06_CHO_09",
    "section": "Choroby, badania i dializa",
    "type": "riddle",
    "prompt": "Jak nazywa się metoda oczyszczania krwi ze szkodliwych produktów przemiany materii, stosowana gdy nerki przestają prawidłowo pracować?",
    "options": null,
    "answer": "dializa",
    "altAnswers": [
      "dializa",
      "dializą"
    ],
    "explanation": "Dializa zastępuje część funkcji niesprawnych nerek i odbywa się z użyciem urządzenia nazywanego dializatorem lub sztuczną nerką.",
    "image": "r06_dializa.jpg"
  },
  {
    "id": "R06_CHO_10",
    "section": "Choroby, badania i dializa",
    "type": "true_false",
    "prompt": "Podczas dializy zbędne produkty przemiany materii przenikają z krwi do płynu dializacyjnego, a oczyszczona krew wraca do krwiobiegu.",
    "options": null,
    "answer": true,
    "explanation": "W dializatorze szkodliwe substancje przechodzą przez błonę do płynu dializacyjnego, a oczyszczona krew wraca do organizmu.",
    "image": "r06_dializa.jpg"
  },
  {
    "id": "R06_CHO_11",
    "section": "Choroby, badania i dializa",
    "type": "single_choice",
    "prompt": "Około ile trwa jeden zabieg dializy?",
    "options": [
      "30 minut",
      "1 godz.",
      "2 godz.",
      "4 godz.",
      "8 godz.",
      "24 godz."
    ],
    "answer": 3,
    "explanation": "Jeden zabieg dializy trwa około 4 godzin.",
    "image": "r06_dializa.jpg"
  },
  {
    "id": "R06_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile krwi przepływa przez nerki w ciągu doby?",
    "options": [
      "około 120-140 l",
      "około 300 l",
      "około 500-700 l",
      "około 1200-1400 l",
      "około 2000 l",
      "około 30 l"
    ],
    "answer": 3,
    "explanation": "Nerki mają bardzo rozbudowaną sieć naczyń krwionośnych, a w ciągu doby przepływa przez nie około 1200-1400 l krwi."
  },
  {
    "id": "R06_HARD_02",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz wielkość z odpowiadającą jej wartością.",
    "options": null,
    "left": [
      "Długość moczowodu",
      "Długość cewki moczowej u mężczyzn",
      "Liczba nefronów w jednej nerce",
      "Czas zabiegu dializy"
    ],
    "right": [
      "około 30 cm",
      "około 18 cm",
      "około miliona",
      "około 4 godz."
    ],
    "answer": {
      "Długość moczowodu": "około 30 cm",
      "Długość cewki moczowej u mężczyzn": "około 18 cm",
      "Liczba nefronów w jednej nerce": "około miliona",
      "Czas zabiegu dializy": "około 4 godz."
    },
    "explanation": "Moczowód ma około 30 cm, męska cewka moczowa około 18 cm, jedna nerka około miliona nefronów, a zabieg dializy trwa około 4 godzin."
  },
  {
    "id": "R06_HARD_03",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W doświadczeniu po wypiciu płynu izotonicznego trzy osoby oddały mocz po 3,4; 2,9 i 3,2 godz., a po wypiciu takiej samej ilości czystej wody po 1,8; 1,9 i 2,1 godz. Jaki wniosek jest zgodny z wynikami?",
    "options": [
      "Płyn izotoniczny całkowicie zatrzymuje produkcję moczu",
      "U osób przyjmujących płyn izotoniczny mocz jest produkowany wolniej",
      "Rodzaj napoju nie wpływa na szybkość produkcji moczu",
      "Po płynie izotonicznym mocz jest produkowany szybciej niż po wodzie"
    ],
    "answer": 1,
    "explanation": "Po płynie izotonicznym czas do oddania moczu był w każdej obserwacji dłuższy niż po czystej wodzie, co wskazuje na wolniejsze wytwarzanie moczu."
  },
  {
    "id": "R06_HARD_04",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Dlaczego zakażenia dróg moczowych częściej dotyczą kobiet niż mężczyzn?",
    "options": [
      "Ponieważ cewka moczowa u kobiet jest znacznie krótsza",
      "Ponieważ moczowody odprowadzają mocz do pęcherza",
      "Ponieważ nerki oczyszczają krew",
      "Ponieważ pęcherz moczowy ma elastyczne ściany",
      "Ponieważ cewka moczowa u mężczyzn łączy się z nasieniowodem",
      "Ponieważ w jednej nerce znajduje się około miliona nefronów"
    ],
    "answer": 0,
    "explanation": "U kobiet cewka moczowa ma około 3-5 cm, a u mężczyzn około 18 cm. Zakażenia dróg moczowych częściej dotyczą kobiet właśnie w związku z tą różnicą anatomiczną.",
    "image": "r06_cewka_kobieta_mezczyzna.jpg"
  },
  {
    "id": "R06_HARD_05",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Nerka pobrana od żywego dawcy może prawidłowo funkcjonować 15-18 lat, a nerka pobrana od osoby zmarłej około 9-10 lat.",
    "options": null,
    "answer": true,
    "explanation": "Nerka pobrana od żywego dawcy może funkcjonować prawidłowo około 15-18 lat, a pobrana od osoby zmarłej około 9-10 lat."
  },
  {
    "id": "R06_HARD_06",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz informacje zgodne z opisem rodzinnego dawstwa nerki.",
    "options": [
      "Na 100 osób chcących oddać nerkę bliskiej osobie tylko 35 spełnia wymagania",
      "Nerkę można pobrać tylko od zupełnie zdrowego człowieka",
      "Statystyczne ryzyko zgonu przy pobieraniu nerki wynosi 3 promile",
      "Każdy członek rodziny może zostać dawcą bez badań",
      "W Polsce rodzinne przeszczepy stanowią około 45% wszystkich przeszczepień nerek"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Tylko 35 na 100 chętnych spełnia wymagania do rodzinnego dawstwa nerki, dawca musi być zdrowy, a ryzyko zgonu przy pobieraniu wynosi około 3 promile."
  },
  {
    "id": "R06_HARD_07",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz nieprawidłowy składnik moczu z możliwym znaczeniem.",
    "options": null,
    "left": [
      "Białko w moczu",
      "Glukoza w moczu",
      "Zbyt dużo leukocytów w moczu",
      "Bakterie w moczu"
    ],
    "right": [
      "może świadczyć o chorobie nerek",
      "może pojawić się przy zbyt wysokim stężeniu glukozy we krwi",
      "może świadczyć o stanie zapalnym narządów układu wydalniczego",
      "może świadczyć o zakażeniu układu wydalniczego"
    ],
    "answer": {
      "Białko w moczu": "może świadczyć o chorobie nerek",
      "Glukoza w moczu": "może pojawić się przy zbyt wysokim stężeniu glukozy we krwi",
      "Zbyt dużo leukocytów w moczu": "może świadczyć o stanie zapalnym narządów układu wydalniczego",
      "Bakterie w moczu": "może świadczyć o zakażeniu układu wydalniczego"
    },
    "explanation": "Badanie ogólne moczu pozwala łączyć określone odchylenia z możliwymi problemami zdrowotnymi.",
    "image": "r06_analiza_moczu.jpg"
  },
  {
    "id": "R06_HARD_08",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który zestaw wyników nie wskazuje na chorobę?",
    "options": [
      "białko brak, glukoza 2 mg/100 ml, erytrocyty brak, leukocyty brak",
      "białko 3 mg/100 ml, glukoza brak, erytrocyty 1, leukocyty 1",
      "białko brak, glukoza brak, erytrocyty brak, leukocyty 1",
      "białko brak, glukoza brak, erytrocyty 15, leukocyty brak"
    ],
    "answer": 2,
    "explanation": "W prawidłowym wyniku nie ma białka ani glukozy, a pojedyncze leukocyty mieszczą się w normie. Zestaw z jednym leukocytem i bez białka, glukozy oraz erytrocytów jest prawidłowy.",
    "image": "r06_analiza_moczu.jpg"
  },
  {
    "id": "R06_HARD_09",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż pełną drogę moczu od kanalika nerkowego do opuszczenia organizmu.",
    "options": null,
    "items": [
      "moczowód",
      "cewka moczowa",
      "cewka zbiorcza",
      "pęcherz moczowy",
      "kanalik nerkowy",
      "miedniczka nerkowa"
    ],
    "answer": [
      "kanalik nerkowy",
      "cewka zbiorcza",
      "miedniczka nerkowa",
      "moczowód",
      "pęcherz moczowy",
      "cewka moczowa"
    ],
    "explanation": "Kanaliki nerkowe uchodzą do cewek zbiorczych, z których mocz trafia do miedniczki nerkowej, następnie moczowodem do pęcherza i przez cewkę moczową na zewnątrz.",
    "image": "r06_drogi_moczu.jpg"
  },
  {
    "id": "R06_HARD_10",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Podziel wyniki badania moczu na zgodne z normą i wskazujące możliwą nieprawidłowość.",
    "options": null,
    "items": [
      "białko - brak",
      "glukoza - brak",
      "erytrocyty - 0-3",
      "leukocyty - 1-5",
      "bakterie - brak",
      "glukoza - obecna",
      "białko - obecne",
      "duża liczba erytrocytów"
    ],
    "categories": [
      "zgodne z normą badania moczu",
      "może wskazywać na nieprawidłowość"
    ],
    "answer": {
      "zgodne z normą badania moczu": [
        "białko - brak",
        "glukoza - brak",
        "erytrocyty - 0-3",
        "leukocyty - 1-5",
        "bakterie - brak"
      ],
      "może wskazywać na nieprawidłowość": [
        "glukoza - obecna",
        "białko - obecne",
        "duża liczba erytrocytów"
      ]
    },
    "explanation": "W prawidłowym badaniu nie ma białka, glukozy ani bakterii, a niewielka liczba erytrocytów i leukocytów mieści się w normie. Obecność glukozy lub białka oraz duża liczba erytrocytów wymaga wyjaśnienia.",
    "image": "r06_analiza_moczu.jpg"
  },
  {
    "id": "R06_HARD_11",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż wynik, który nie pasuje do pozostałych jako sygnał nieprawidłowości: obecne białko, obecna glukoza, obecne bakterie, urobilinogen w normie.",
    "options": null,
    "answer": "urobilinogen w normie",
    "explanation": "Obecność białka, glukozy lub bakterii może wskazywać na nieprawidłowość. Urobilinogen określony jako będący w normie nie jest takim sygnałem.",
    "image": "r06_analiza_moczu.jpg"
  },
  {
    "id": "R06_HARD_12",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Osobie z nadciśnieniem podano lek zwiększający produkcję moczu. W efekcie zmniejszyła się ilość wody we krwi. Jaki dalszy skutek jest najbardziej logiczny?",
    "options": [
      "Zwiększenie objętości krwi i wzrost ciśnienia",
      "Zmniejszenie objętości krwi i obniżenie ciśnienia",
      "Zmniejszenie objętości krwi i wzrost ciśnienia",
      "Zwiększenie objętości krwi i obniżenie ciśnienia"
    ],
    "answer": 1,
    "explanation": "Mniejsza ilość wody we krwi oznacza mniejszą objętość krwi, co prowadzi do obniżenia ciśnienia.",
    "image": "r06_leki_moczopedne.jpg"
  },
  {
    "id": "R06_HARD_13",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Kamienie nerkowe powstają z __________ gromadzących się w nerkach; większe kamienie najczęściej rozbija się za pomocą __________.",
    "options": null,
    "answer": [
      "osadów z soli mineralnych",
      "fali dźwiękowej"
    ],
    "altAnswers": [
      [
        "osadów z soli mineralnych",
        "osadów soli mineralnych"
      ],
      [
        "fali dźwiękowej",
        "fal dźwiękowych"
      ]
    ],
    "explanation": "Kamienie tworzą się z osadów soli mineralnych. Większe kamienie często rozbija się falą dźwiękową, a operację stosuje się, gdy kamień jest duży lub nie można go rozbić.",
    "image": "r06_kamienie_nerkowe.jpg"
  },
  {
    "id": "R06_HARD_14",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do czynników sprzyjających kamicy lub do działań profilaktycznych.",
    "options": null,
    "items": [
      "skłonności dziedziczne",
      "nadwaga",
      "niektóre leki",
      "przyjmowanie zbyt małej ilości płynów",
      "zakażenia układu moczowego",
      "picie odpowiedniej ilości płynów",
      "ograniczenie spożycia soli",
      "dieta bogata w błonnik"
    ],
    "categories": [
      "czynniki sprzyjające kamicy nerkowej",
      "działania profilaktyczne"
    ],
    "answer": {
      "czynniki sprzyjające kamicy nerkowej": [
        "skłonności dziedziczne",
        "nadwaga",
        "niektóre leki",
        "przyjmowanie zbyt małej ilości płynów",
        "zakażenia układu moczowego"
      ],
      "działania profilaktyczne": [
        "picie odpowiedniej ilości płynów",
        "ograniczenie spożycia soli",
        "dieta bogata w błonnik"
      ]
    },
    "explanation": "Kamicy mogą sprzyjać między innymi predyspozycje, nadwaga, niektóre leki, mała podaż płynów i zakażenia. Profilaktyka obejmuje odpowiednie nawodnienie, ograniczenie soli i właściwą dietę.",
    "image": "r06_kamienie_nerkowe.jpg"
  },
  {
    "id": "R06_HARD_15",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Chory oddaje mało moczu, woda gromadzi się w innych narządach, a w moczu pojawiają się aminokwasy i komórki krwi. Który proces jest zaburzony w kłębuszkowym zapaleniu nerek?",
    "options": [
      "filtracja krwi w kłębuszkach nerkowych",
      "transport moczu przez moczowody",
      "magazynowanie moczu w pęcherzu",
      "wydalanie dwutlenku węgla przez płuca",
      "skurcz zwieracza cewki moczowej",
      "wydzielanie potu przez gruczoły potowe"
    ],
    "answer": 0,
    "explanation": "W kłębuszkowym zapaleniu nerek zaburzona jest filtracja krwi w kłębuszkach nerkowych. Skutkiem może być mała ilość moczu i utrata potrzebnych składników z moczem."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r06",
  number: 6,
  title: "Układ wydalniczy",
  icon: "💧",
  sectionOrder: [
    "Wydalanie i drogi wydalania",
    "Budowa układu wydalniczego",
    "Nefron i powstawanie moczu",
    "Higiena i profilaktyka",
    "Choroby, badania i dializa"
  ],
  sectionIcons: {
    "Wydalanie i drogi wydalania": "💨",
    "Budowa układu wydalniczego": "💧",
    "Nefron i powstawanie moczu": "🔬",
    "Higiena i profilaktyka": "🧼",
    "Choroby, badania i dializa": "🩺"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
