// Skróty sekcji:
//   BIZ = Bizancjum
//   ARA = Arabowie i początki islamu
//   KAR = Państwo karolińskie
//   ZAC = Nowe państwa w Europie
//   SLO = Słowiańszczyzna
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_BIZ_01",
    "section": "Bizancjum",
    "type": "single_choice",
    "prompt": "Jak nazywała się stolica cesarstwa bizantyjskiego?",
    "options": [
      "Rzym",
      "Konstantynopol",
      "Ateny",
      "Aleksandria",
      "Antiochia",
      "Rawenna"
    ],
    "answer": 1,
    "image": "/img/r04_konstantynopol_rekonstrukcja.jpg",
    "explanation": "Stolicą cesarstwa wschodniorzymskiego był Konstantynopol, zbudowany na miejscu dawnej greckiej kolonii Bizancjum."
  },
  {
    "id": "R04_BIZ_02",
    "section": "Bizancjum",
    "type": "true_false",
    "prompt": "Cesarstwo wschodniorzymskie przetrwało po upadku zachodniej części Imperium Rzymskiego.",
    "options": null,
    "answer": true,
    "explanation": "Wschodnia część imperium obroniła się przed najazdami barbarzyńskimi i istniała jako Bizancjum aż do końca średniowiecza."
  },
  {
    "id": "R04_BIZ_03",
    "section": "Bizancjum",
    "type": "multi_select",
    "prompt": "Zaznacz ziemie, które armie Justyniana Wielkiego zdobyły w VI wieku.",
    "options": [
      "Italia",
      "Skandynawia",
      "część Półwyspu Iberyjskiego",
      "Arabia",
      "Afryka Północna",
      "Irlandia"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "image": "/img/r04_mapa_bizancjum.jpg",
    "explanation": "Justynian odzyskał dla Bizancjum Italię, część Hiszpanii i Afrykę Północną, lecz po jego śmierci państwo stopniowo traciło terytoria."
  },
  {
    "id": "R04_BIZ_04",
    "section": "Bizancjum",
    "type": "riddle",
    "prompt": "Zbiór prawa rzymskiego spisany z inicjatywy cesarza Justyniana to...",
    "options": null,
    "answer": "Kodeks Justyniana",
    "altAnswers": [
      "Kodeks Justyniana",
      "kodeks Justyniana",
      "Codex Iustinianus"
    ],
    "image": "/img/r04_justynian_mozaika.jpg",
    "explanation": "Kodeks Justyniana uporządkował dziedzictwo prawa rzymskiego i stał się trwałym osiągnięciem kultury bizantyjskiej."
  },
  {
    "id": "R04_BIZ_05",
    "section": "Bizancjum",
    "type": "fill_in",
    "prompt": "Na Wschodzie łacinę wyparła __________, a w Kościele zachodnim językiem kościelnym była __________.",
    "options": null,
    "answer": [
      "greka",
      "łacina"
    ],
    "altAnswers": [
      [
        "greka",
        "język grecki"
      ],
      [
        "łacina",
        "język łaciński"
      ]
    ],
    "explanation": "Różnica językowa między greckim Wschodem i łacińskim Zachodem była jedną z przyczyn narastania podziałów w chrześcijaństwie."
  },
  {
    "id": "R04_BIZ_06",
    "section": "Bizancjum",
    "type": "single_choice",
    "prompt": "Czym były mozaiki zdobiące wnętrza bizantyjskich kościołów?",
    "options": [
      "Obrazami układanymi z małych barwnych kawałków szkła i ceramiki",
      "Księgami z przepisami prawa",
      "Drewnianymi wieżami obronnymi",
      "Mapami szlaków handlowych",
      "Pieśniami śpiewanymi w świątyni",
      "Urzędowymi pieczęciami cesarza"
    ],
    "answer": 0,
    "explanation": "Mozaiki były obrazami tworzonymi z drobnych barwnych elementów i należały do ważnych form sztuki bizantyjskiej."
  },
  {
    "id": "R04_BIZ_07",
    "section": "Bizancjum",
    "type": "scenario",
    "prompt": "Uczeń ogląda model wielkiej świątyni w Konstantynopolu z potężną kopułą i wewnętrznym dziedzińcem. Wie, że zbudowano ją na polecenie Justyniana Wielkiego i że stała się wzorem dla późniejszych kościołów bizantyjskich. Która to budowla?",
    "options": [
      "Hagia Sophia",
      "Kaplica pałacowa w Akwizgranie",
      "Meczet w Kordobie",
      "Bazylika św. Piotra w Rzymie",
      "Katedra w Reims",
      "Gród w Kijowie"
    ],
    "answer": 0,
    "image": "/img/r04_hagia_sophia_przekroj.jpg",
    "explanation": "Świątynia Mądrości Bożej, czyli Hagia Sophia, była najważniejszym przykładem architektury bizantyjskiej w Konstantynopolu."
  },
  {
    "id": "R04_BIZ_08",
    "section": "Bizancjum",
    "type": "match",
    "prompt": "Połącz postać lub pojęcie z opisem.",
    "options": null,
    "left": [
      "Justynian Wielki",
      "Konstantynopol",
      "patriarcha",
      "papież"
    ],
    "right": [
      "cesarz związany z podbojami i kodyfikacją prawa",
      "stolica Bizancjum",
      "najwyższy dostojnik Kościoła wschodniego",
      "biskup Rzymu"
    ],
    "answer": {
      "Justynian Wielki": "cesarz związany z podbojami i kodyfikacją prawa",
      "Konstantynopol": "stolica Bizancjum",
      "patriarcha": "najwyższy dostojnik Kościoła wschodniego",
      "papież": "biskup Rzymu"
    },
    "explanation": "Te osoby i pojęcia pokazują najważniejsze elementy polityki, religii i kultury Bizancjum."
  },
  {
    "id": "R04_BIZ_09",
    "section": "Bizancjum",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "Rozłam chrześcijaństwa w 1054 roku",
      "Upadek cesarstwa zachodniorzymskiego",
      "Konstantyn Wielki buduje nową stolicę",
      "Podboje Justyniana Wielkiego"
    ],
    "answer": [
      "Konstantyn Wielki buduje nową stolicę",
      "Upadek cesarstwa zachodniorzymskiego",
      "Podboje Justyniana Wielkiego",
      "Rozłam chrześcijaństwa w 1054 roku"
    ],
    "explanation": "Nowa stolica powstała w IV wieku, Zachód upadł w V wieku, Justynian rządził w VI wieku, a wielka schizma nastąpiła w 1054 roku."
  },
  {
    "id": "R04_BIZ_10",
    "section": "Bizancjum",
    "type": "true_false",
    "prompt": "W 1054 roku chrześcijaństwo rozdzieliło się na Kościół katolicki i Kościół prawosławny.",
    "options": null,
    "answer": true,
    "explanation": "Rozłam był skutkiem narastających sporów między łacińskim Zachodem i greckim Wschodem."
  },
  {
    "id": "R04_BIZ_11",
    "section": "Bizancjum",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: ikona, mozaika, Hagia Sophia, Koran.",
    "options": null,
    "answer": "Koran",
    "explanation": "Koran jest świętą księgą islamu, a pozostałe elementy wiążą się z kulturą bizantyjską."
  },
  {
    "id": "R04_BIZ_12",
    "section": "Bizancjum",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do chrześcijańskiego Zachodu albo Wschodu.",
    "options": null,
    "items": [
      "język łaciński",
      "papież",
      "Kościół katolicki",
      "język grecki",
      "patriarchowie",
      "Kościół prawosławny"
    ],
    "categories": [
      "Zachód",
      "Wschód"
    ],
    "answer": {
      "Zachód": [
        "język łaciński",
        "papież",
        "Kościół katolicki"
      ],
      "Wschód": [
        "język grecki",
        "patriarchowie",
        "Kościół prawosławny"
      ]
    },
    "explanation": "Po rozłamie Zachód utożsamiano z łaciną, papieżem i katolicyzmem, a Wschód z greką, patriarchami i prawosławiem."
  },
  {
    "id": "R04_ARA_01",
    "section": "Arabowie i początki islamu",
    "type": "single_choice",
    "prompt": "W którym mieście urodził się Mahomet?",
    "options": [
      "Mekka",
      "Medyna",
      "Damaszek",
      "Bagdad",
      "Jerozolima",
      "Aleksandria"
    ],
    "answer": 0,
    "explanation": "Mahomet urodził się w Mekce, jednym z najważniejszych miast Półwyspu Arabskiego."
  },
  {
    "id": "R04_ARA_02",
    "section": "Arabowie i początki islamu",
    "type": "fill_in",
    "prompt": "Nazwa islam oznacza __________, a wyznawców islamu nazywamy __________.",
    "options": null,
    "answer": [
      "poddanie się",
      "muzułmanami"
    ],
    "altAnswers": [
      [
        "poddanie się",
        "poddanie"
      ],
      [
        "muzułmanami",
        "muzułmanie"
      ]
    ],
    "explanation": "Islam oznacza poddanie się woli Boga, a jego wyznawcy to muzułmanie."
  },
  {
    "id": "R04_ARA_03",
    "section": "Arabowie i początki islamu",
    "type": "multi_select",
    "prompt": "Zaznacz obowiązki należące do pięciu filarów islamu.",
    "options": [
      "Wyznanie wiary",
      "Modlitwa pięć razy dziennie",
      "Post w ramadanie",
      "Jałmużna",
      "Pielgrzymka do Mekki",
      "Chrzest"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "/img/r04_karawana_do_mekki.jpg",
    "explanation": "Pięć filarów islamu to wyznanie wiary, modlitwa, post, jałmużna i pielgrzymka do Mekki."
  },
  {
    "id": "R04_ARA_04",
    "section": "Arabowie i początki islamu",
    "type": "true_false",
    "prompt": "Ucieczka Mahometa z Mekki do Medyny w 622 roku jest początkiem ery muzułmańskiej.",
    "options": null,
    "answer": true,
    "explanation": "Muzułmanie rozpoczęli rachubę czasu od hidżry, czyli ucieczki Mahometa do Medyny."
  },
  {
    "id": "R04_ARA_05",
    "section": "Arabowie i początki islamu",
    "type": "riddle",
    "prompt": "Święta księga muzułmanów, w której spisano nauki Mahometa, to...",
    "options": null,
    "answer": "Koran",
    "altAnswers": [
      "Koran",
      "koran"
    ],
    "image": "/img/r04_koran_arabeski.jpg",
    "explanation": "Koran powstał z nauk przekazanych przez Mahometa jego uczniom."
  },
  {
    "id": "R04_ARA_06",
    "section": "Arabowie i początki islamu",
    "type": "single_choice",
    "prompt": "Jak nazywano następców Mahometa, którzy byli przywódcami religijnymi i politycznymi muzułmanów?",
    "options": [
      "kalifowie",
      "patriarchowie",
      "margrabiowie",
      "hrabiowie",
      "biskupi",
      "beduini"
    ],
    "answer": 0,
    "explanation": "Po śmierci Mahometa rządy obejmowali kalifowie, czyli jego następcy."
  },
  {
    "id": "R04_ARA_07",
    "section": "Arabowie i początki islamu",
    "type": "multi_select",
    "prompt": "Zaznacz obszary zdobyte przez Arabów według rozdziału.",
    "options": [
      "Palestyna",
      "Egipt",
      "Afryka Północna",
      "Półwysep Iberyjski",
      "Skandynawia",
      "Irlandia"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r04_mapa_podboje_arabskie.jpg",
    "explanation": "Arabowie odebrali Bizancjum Palestynę, Egipt i Afrykę Północną, a później podbili niemal cały Półwysep Iberyjski."
  },
  {
    "id": "R04_ARA_08",
    "section": "Arabowie i początki islamu",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Mekka, Medyna, Koran, Akwizgran.",
    "options": null,
    "answer": "Akwizgran",
    "explanation": "Akwizgran był stolicą Karola Wielkiego, a pozostałe pojęcia dotyczą początków islamu."
  },
  {
    "id": "R04_ARA_09",
    "section": "Arabowie i początki islamu",
    "type": "match",
    "prompt": "Połącz pojęcie z jego znaczeniem.",
    "options": null,
    "left": [
      "Allah",
      "islam",
      "muzułmanin",
      "kalif"
    ],
    "right": [
      "Bóg w języku arabskim",
      "poddanie się woli Boga",
      "wyznawca islamu",
      "następca Mahometa"
    ],
    "answer": {
      "Allah": "Bóg w języku arabskim",
      "islam": "poddanie się woli Boga",
      "muzułmanin": "wyznawca islamu",
      "kalif": "następca Mahometa"
    },
    "explanation": "Pojęcia te tworzą podstawowy słownik dotyczący religii i państwa muzułmańskiego."
  },
  {
    "id": "R04_ARA_10",
    "section": "Arabowie i początki islamu",
    "type": "scenario",
    "prompt": "Spotykasz mieszkańca pustynnych obszarów Półwyspu Arabskiego, który prowadzi koczowniczy tryb życia i hoduje wielbłądy, konie, owce oraz kozy. Jak nazywano takich Arabów?",
    "options": [
      "beduini",
      "kalifowie",
      "patriarchowie",
      "Frankowie",
      "Waregowie",
      "Longobardowie"
    ],
    "answer": 0,
    "image": "/img/r04_karawana_do_mekki.jpg",
    "explanation": "Beduini byli koczownikami żyjącymi m.in. z hodowli zwierząt na Półwyspie Arabskim."
  },
  {
    "id": "R04_ARA_11",
    "section": "Arabowie i początki islamu",
    "type": "true_false",
    "prompt": "Żydzi i chrześcijanie na ziemiach podbitych przez Arabów mogli pozostać przy swojej religii, jeśli płacili specjalny podatek.",
    "options": null,
    "answer": true,
    "explanation": "Arabowie zmuszali do przyjęcia islamu pogan, natomiast wyznawcy monoteizmu mogli zachować wiarę za opłatą podatku."
  },
  {
    "id": "R04_ARA_12",
    "section": "Arabowie i początki islamu",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do filarów islamu albo zakazów prawa islamskiego.",
    "options": null,
    "items": [
      "modlitwa",
      "jałmużna",
      "pielgrzymka do Mekki",
      "spożywanie wieprzowiny",
      "picie alkoholu"
    ],
    "categories": [
      "filary islamu",
      "zakazy prawa islamskiego"
    ],
    "answer": {
      "filary islamu": [
        "modlitwa",
        "jałmużna",
        "pielgrzymka do Mekki"
      ],
      "zakazy prawa islamskiego": [
        "spożywanie wieprzowiny",
        "picie alkoholu"
      ]
    },
    "explanation": "Islam regulował zarówno obowiązki religijne, jak i inne sfery życia wiernych, w tym zakazy żywieniowe."
  },
  {
    "id": "R04_KAR_01",
    "section": "Państwo karolińskie",
    "type": "single_choice",
    "prompt": "Którą dawną rzymską prowincję podbili Frankowie w drugiej połowie V wieku?",
    "options": [
      "Galię",
      "Egipt",
      "Syrię",
      "Brytanię",
      "Mezopotamię",
      "Skandynawię"
    ],
    "answer": 0,
    "explanation": "Frankowie zajęli prawie całą rzymską Galię i założyli tam swoje państwo."
  },
  {
    "id": "R04_KAR_02",
    "section": "Państwo karolińskie",
    "type": "true_false",
    "prompt": "Frankijski król Chlodwig przyjął chrzest w 496 roku.",
    "options": null,
    "answer": true,
    "explanation": "Chrzest Chlodwiga zbliżył Franków do rzymskich mieszkańców Galii i wzmocnił rolę Kościoła w państwie."
  },
  {
    "id": "R04_KAR_03",
    "section": "Państwo karolińskie",
    "type": "fill_in",
    "prompt": "Chlodwig pochodził z dynastii __________, a w VIII wieku władzę we Frankonii przejęli __________.",
    "options": null,
    "answer": [
      "Merowingów",
      "Karolingowie"
    ],
    "altAnswers": [
      [
        "Merowingów",
        "Merowingowie"
      ],
      [
        "Karolingowie",
        "dynastia Karolingów"
      ]
    ],
    "explanation": "Po osłabieniu Merowingów rządy przejęli Karolingowie, z których najwybitniejszy był Karol Wielki."
  },
  {
    "id": "R04_KAR_04",
    "section": "Państwo karolińskie",
    "type": "riddle",
    "prompt": "Ustrój, w którym państwo uznawano za dziedziczną własność władcy i jego dynastii, to...",
    "options": null,
    "answer": "monarchia patrymonialna",
    "altAnswers": [
      "monarchia patrymonialna",
      "Monarchia patrymonialna"
    ],
    "explanation": "W monarchii patrymonialnej władca mógł dzielić kraj między synów lub krewnych."
  },
  {
    "id": "R04_KAR_05",
    "section": "Państwo karolińskie",
    "type": "multi_select",
    "prompt": "Zaznacz dokonania Karola Wielkiego opisane w rozdziale.",
    "options": [
      "Pokonał Longobardów w północnej Italii",
      "Wyparł Arabów z części zachodniej Hiszpanii",
      "Podbił plemiona germańskie aż po Łabę",
      "Usprawnił administrację przez hrabstwa i marchie",
      "Przeprowadził reformę szkolnictwa",
      "Założył islam"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "/img/r04_mapa_panstwo_karola.jpg",
    "explanation": "Karol Wielki był zarówno zdobywcą, jak i organizatorem administracji oraz opiekunem edukacji i kultury."
  },
  {
    "id": "R04_KAR_06",
    "section": "Państwo karolińskie",
    "type": "single_choice",
    "prompt": "W którym roku papież koronował Karola Wielkiego na cesarza?",
    "options": [
      "496",
      "622",
      "732",
      "800",
      "843",
      "962"
    ],
    "answer": 3,
    "explanation": "Koronacja Karola Wielkiego odbyła się w 800 roku w Rzymie i oznaczała odnowienie cesarstwa na Zachodzie."
  },
  {
    "id": "R04_KAR_07",
    "section": "Państwo karolińskie",
    "type": "match",
    "prompt": "Połącz pojęcie z opisem.",
    "options": null,
    "left": [
      "hrabstwo",
      "marchia",
      "minuskuła karolińska",
      "Akwizgran"
    ],
    "right": [
      "jednostka administracyjna w państwie Karola",
      "okręg pograniczny",
      "czytelna forma pisma łacińskiego",
      "stolica Karola Wielkiego"
    ],
    "answer": {
      "hrabstwo": "jednostka administracyjna w państwie Karola",
      "marchia": "okręg pograniczny",
      "minuskuła karolińska": "czytelna forma pisma łacińskiego",
      "Akwizgran": "stolica Karola Wielkiego"
    },
    "image": "/img/r04_karol_wielki_akwizgran.jpg",
    "explanation": "Administracja, pismo i stolica w Akwizgranie należały do najważniejszych elementów państwa Karola Wielkiego."
  },
  {
    "id": "R04_KAR_08",
    "section": "Państwo karolińskie",
    "type": "scenario",
    "prompt": "Mnich w klasztorze przepisuje Biblię i dzieła starożytnych autorów bardzo starannym, czytelnym pismem łacińskim wprowadzonym w czasach Karola Wielkiego. Jak nazywa się to pismo?",
    "options": [
      "minuskuła karolińska",
      "głagolica",
      "cyrylica",
      "arabeska",
      "runy",
      "pismo klinowe"
    ],
    "answer": 0,
    "image": "/img/r04_minuscula_karolinska.jpg",
    "explanation": "Minuskuła karolińska ułatwiała przepisywanie i czytanie ksiąg w zachodniej Europie."
  },
  {
    "id": "R04_KAR_09",
    "section": "Państwo karolińskie",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z państwem Franków w porządku chronologicznym.",
    "options": null,
    "items": [
      "Podział monarchii karolińskiej",
      "Koronacja Karola Wielkiego",
      "Chrzest Chlodwiga",
      "Początek panowania Karola Wielkiego"
    ],
    "answer": [
      "Chrzest Chlodwiga",
      "Początek panowania Karola Wielkiego",
      "Koronacja Karola Wielkiego",
      "Podział monarchii karolińskiej"
    ],
    "explanation": "Chlodwig przyjął chrzest w 496 roku, Karol panował od 768 roku, został cesarzem w 800 roku, a monarchię podzielono w 843 roku."
  },
  {
    "id": "R04_KAR_10",
    "section": "Państwo karolińskie",
    "type": "true_false",
    "prompt": "Karol Wielki nakazał, aby przy siedzibach biskupów i w klasztorach działały szkoły dla przyszłych duchownych.",
    "options": null,
    "answer": true,
    "explanation": "Reforma szkolnictwa Karola Wielkiego stała się podstawą edukacji w zachodniej Europie w średniowieczu."
  },
  {
    "id": "R04_KAR_11",
    "section": "Państwo karolińskie",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: hrabia, margrabia, biskup, kalif.",
    "options": null,
    "answer": "kalif",
    "explanation": "Kalif był przywódcą muzułmanów, a pozostałe osoby mogły pełnić funkcje w chrześcijańskiej Europie łacińskiej."
  },
  {
    "id": "R04_KAR_12",
    "section": "Państwo karolińskie",
    "type": "sort",
    "prompt": "Przyporządkuj działania Karola Wielkiego do kategorii.",
    "options": null,
    "items": [
      "pokonanie Longobardów",
      "wyparcie Arabów z części Hiszpanii",
      "szkoły przy klasztorach",
      "przepisywanie ksiąg",
      "minuskuła karolińska",
      "podział kraju na hrabstwa i marchie"
    ],
    "categories": [
      "wojny i podboje",
      "kultura i administracja"
    ],
    "answer": {
      "wojny i podboje": [
        "pokonanie Longobardów",
        "wyparcie Arabów z części Hiszpanii"
      ],
      "kultura i administracja": [
        "szkoły przy klasztorach",
        "przepisywanie ksiąg",
        "minuskuła karolińska",
        "podział kraju na hrabstwa i marchie"
      ]
    },
    "explanation": "Karol Wielki wzmacniał państwo zarówno zbrojnie, jak i przez administrację oraz odrodzenie nauki."
  },
  {
    "id": "R04_ZAC_01",
    "section": "Nowe państwa w Europie",
    "type": "single_choice",
    "prompt": "Jakie państwo wykształciło się z królestwa zachodniofrankijskiego?",
    "options": [
      "Francja",
      "Niemcy",
      "Bułgaria",
      "Ruś Kijowska",
      "Dania",
      "Państwo Kościelne"
    ],
    "answer": 0,
    "explanation": "Z królestwa zachodniofrankijskiego wyrosła średniowieczna Francja."
  },
  {
    "id": "R04_ZAC_02",
    "section": "Nowe państwa w Europie",
    "type": "single_choice",
    "prompt": "Jakie państwo wyrosło z królestwa wschodniofrankijskiego?",
    "options": [
      "Niemcy",
      "Francja",
      "Italia",
      "Egipt",
      "Polska",
      "Anglia"
    ],
    "answer": 0,
    "explanation": "Z królestwa wschodniofrankijskiego wykształciły się Niemcy, których ludność mówiła językami germańskimi."
  },
  {
    "id": "R04_ZAC_03",
    "section": "Nowe państwa w Europie",
    "type": "true_false",
    "prompt": "Środkowa część monarchii karolińskiej utworzyła trwałe, jednolite państwo Lotara.",
    "options": null,
    "answer": false,
    "explanation": "Państwo Lotara okazało się nietrwałe i rozpadło się na kilka odrębnych terytoriów."
  },
  {
    "id": "R04_ZAC_04",
    "section": "Nowe państwa w Europie",
    "type": "fill_in",
    "prompt": "W roku __________ wnukowie Karola Wielkiego podzielili monarchię karolińską, a w roku __________ Otton I został cesarzem.",
    "options": null,
    "answer": [
      "843",
      "962"
    ],
    "altAnswers": [
      [
        "843",
        "843 r."
      ],
      [
        "962",
        "962 r."
      ]
    ],
    "explanation": "Podział z 843 roku przyczynił się do powstania nowych królestw, a koronacja Ottona I w 962 roku odnowiła ideę cesarstwa na Zachodzie."
  },
  {
    "id": "R04_ZAC_05",
    "section": "Nowe państwa w Europie",
    "type": "riddle",
    "prompt": "Hrabia Paryża wybrany w 987 roku na króla Francji, założyciel dynastii Kapetyngów, to...",
    "options": null,
    "answer": "Hugo Kapet",
    "altAnswers": [
      "Hugo Kapet",
      "Kapet",
      "Hugo Capet"
    ],
    "explanation": "Po śmierci ostatniego zachodniofrankijskiego Karolinga królem Francji został Hugo Kapet."
  },
  {
    "id": "R04_ZAC_06",
    "section": "Nowe państwa w Europie",
    "type": "multi_select",
    "prompt": "Zaznacz zjawiska, które osłabiały władzę królewską po rozpadzie monarchii karolińskiej.",
    "options": [
      "walki o tron",
      "najazdy sąsiednich ludów",
      "wygasanie linii Karolingów",
      "przejmowanie władzy przez lokalnych książąt i hrabiów",
      "coraz silniejsza kontrola króla nad wszystkimi ziemiami",
      "brak jakichkolwiek konfliktów"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Władza królewska słabła przez walki, najazdy, zmiany dynastyczne oraz samodzielność możnych lokalnych."
  },
  {
    "id": "R04_ZAC_07",
    "section": "Nowe państwa w Europie",
    "type": "scenario",
    "prompt": "Król niemiecki organizuje wyprawę do Italii, ponieważ koronacja cesarska może odbyć się tylko w Rzymie i z udziałem papieża. W 962 roku zostaje cesarzem. O kim mowa?",
    "options": [
      "Otton I",
      "Karol Łysy",
      "Lotar",
      "Hugo Kapet",
      "Wilhelm Zdobywca",
      "Ruryk"
    ],
    "answer": 0,
    "image": "/img/r04_korona_ottona.jpg",
    "explanation": "Otton I został koronowany w Rzymie przez papieża, a jego monarchię zaczęto traktować jako kontynuację Cesarstwa Rzymskiego."
  },
  {
    "id": "R04_ZAC_08",
    "section": "Nowe państwa w Europie",
    "type": "true_false",
    "prompt": "Święte Cesarstwo Rzymskie obejmowało wyłącznie kraje niemieckojęzyczne.",
    "options": null,
    "answer": false,
    "explanation": "Oprócz ziem niemieckojęzycznych obejmowało m.in. obszary współczesnej Holandii, Belgii i skrawki północnych Włoch."
  },
  {
    "id": "R04_ZAC_09",
    "section": "Nowe państwa w Europie",
    "type": "match",
    "prompt": "Połącz nazwę z właściwym opisem.",
    "options": null,
    "left": [
      "wikingowie",
      "Normanowie",
      "Waregowie",
      "Normandia"
    ],
    "right": [
      "żeglarze, wojownicy i kupcy ze Skandynawii",
      "zachodnioeuropejska nazwa wikingów",
      "wschodnioeuropejska nazwa wikingów",
      "księstwo założone przez wikingów w północnej Francji"
    ],
    "answer": {
      "wikingowie": "żeglarze, wojownicy i kupcy ze Skandynawii",
      "Normanowie": "zachodnioeuropejska nazwa wikingów",
      "Waregowie": "wschodnioeuropejska nazwa wikingów",
      "Normandia": "księstwo założone przez wikingów w północnej Francji"
    },
    "image": "/img/r04_wiking_statek.jpg",
    "explanation": "Wikingowie byli znani pod różnymi nazwami i zakładali własne ośrodki w podbitych krajach."
  },
  {
    "id": "R04_ZAC_10",
    "section": "Nowe państwa w Europie",
    "type": "single_choice",
    "prompt": "Który książę normandzki podbił Anglię w 1066 roku?",
    "options": [
      "Wilhelm Zdobywca",
      "Hugo Kapet",
      "Otton I",
      "Karol Wielki",
      "Chlodwig",
      "Ruryk"
    ],
    "answer": 0,
    "image": "/img/r04_wiking_statek.jpg",
    "explanation": "Wilhelm Zdobywca, książę Normandii, podbił Anglię i został jej królem."
  },
  {
    "id": "R04_ZAC_11",
    "section": "Nowe państwa w Europie",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Dania, Norwegia, Szwecja, Arabia.",
    "options": null,
    "answer": "Arabia",
    "explanation": "Dania, Norwegia i Szwecja to skandynawskie kraje wikingów, a Arabia należy do dziejów islamu."
  },
  {
    "id": "R04_ZAC_12",
    "section": "Nowe państwa w Europie",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do Francji albo Niemiec i odnowionego cesarstwa.",
    "options": null,
    "items": [
      "Hugo Kapet",
      "Kapetyngowie",
      "hrabia Paryża",
      "Otton I",
      "koronacja w 962 roku",
      "Święte Cesarstwo Rzymskie"
    ],
    "categories": [
      "Francja",
      "Niemcy i cesarstwo"
    ],
    "answer": {
      "Francja": [
        "Hugo Kapet",
        "Kapetyngowie",
        "hrabia Paryża"
      ],
      "Niemcy i cesarstwo": [
        "Otton I",
        "koronacja w 962 roku",
        "Święte Cesarstwo Rzymskie"
      ]
    },
    "explanation": "Hugo Kapet zapoczątkował dynastię francuską, a Otton I odnowił cesarstwo związane z monarchią niemiecką."
  },
  {
    "id": "R04_SLO_01",
    "section": "Słowiańszczyzna",
    "type": "single_choice",
    "prompt": "Gdzie prawdopodobnie znajdowały się najdawniejsze siedziby Słowian?",
    "options": [
      "na terytorium dzisiejszej Ukrainy",
      "na Półwyspie Arabskim",
      "w północnej Afryce",
      "w Skandynawii",
      "w Italii",
      "w Irlandii"
    ],
    "answer": 0,
    "image": "/img/r04_mapa_slowianie.jpg",
    "explanation": "Podręcznik wskazuje, że najdawniejsze siedziby Słowian leżały prawdopodobnie na obszarze dzisiejszej Ukrainy."
  },
  {
    "id": "R04_SLO_02",
    "section": "Słowiańszczyzna",
    "type": "true_false",
    "prompt": "W VI i VII wieku plemiona słowiańskie zasiedliły prawie całą środkową i wschodnią część Europy.",
    "options": null,
    "answer": true,
    "explanation": "Wędrówki Słowian doprowadziły do zasiedlenia znacznej części Europy Środkowej i Wschodniej."
  },
  {
    "id": "R04_SLO_03",
    "section": "Słowiańszczyzna",
    "type": "multi_select",
    "prompt": "Zaznacz informacje zgodne z opisem życia dawnych Słowian.",
    "options": [
      "Zakładali skromne osady nad rzekami",
      "Posługiwali się prostymi narzędziami",
      "Uprawiali zboża",
      "Hodowali krowy, woły, świnie i drób",
      "Wyznawali wielobóstwo",
      "Budowali wielkie kamienne metropolie"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Dawni Słowianie żyli głównie w niewielkich osadach, zajmowali się rolnictwem i hodowlą oraz byli poganami."
  },
  {
    "id": "R04_SLO_04",
    "section": "Słowiańszczyzna",
    "type": "riddle",
    "prompt": "Najstarsze państwo zachodniosłowiańskie, które powstało w IX wieku, to...",
    "options": null,
    "answer": "Wielkie Morawy",
    "altAnswers": [
      "Wielkie Morawy",
      "Państwo Wielkomorawskie",
      "państwo wielkomorawskie"
    ],
    "explanation": "Wielkie Morawy powstały w sąsiedztwie państwa frankijskiego i zostały rozbite w X wieku przez Węgrów."
  },
  {
    "id": "R04_SLO_05",
    "section": "Słowiańszczyzna",
    "type": "match",
    "prompt": "Połącz państwo lub lud z dynastią wymienioną w rozdziale.",
    "options": null,
    "left": [
      "Czechy",
      "Polska",
      "Węgry",
      "Ruś Kijowska"
    ],
    "right": [
      "Przemyślidzi",
      "Piastowie",
      "Arpadowie",
      "Rurykowicze"
    ],
    "answer": {
      "Czechy": "Przemyślidzi",
      "Polska": "Piastowie",
      "Węgry": "Arpadowie",
      "Ruś Kijowska": "Rurykowicze"
    },
    "image": "/img/r04_mapa_slowianie.jpg",
    "explanation": "W rozdziale wskazano najważniejsze dynastie państw Europy Środkowej i Wschodniej."
  },
  {
    "id": "R04_SLO_06",
    "section": "Słowiańszczyzna",
    "type": "single_choice",
    "prompt": "Który lud rozbił Wielkie Morawy na początku X wieku?",
    "options": [
      "Węgrzy",
      "Arabowie",
      "Frankowie",
      "Ostrogoci",
      "Bułgarzy",
      "Waregowie"
    ],
    "answer": 0,
    "explanation": "Wielkie Morawy zostały rozbite wskutek najazdu Węgrów."
  },
  {
    "id": "R04_SLO_07",
    "section": "Słowiańszczyzna",
    "type": "fill_in",
    "prompt": "Polska i Czechy przyjęły chrześcijaństwo za pośrednictwem Kościoła __________, a Ruś i Bułgaria za pośrednictwem Kościoła __________.",
    "options": null,
    "answer": [
      "łacińskiego",
      "bizantyjskiego"
    ],
    "altAnswers": [
      [
        "łacińskiego",
        "zachodniego",
        "rzymskiego"
      ],
      [
        "bizantyjskiego",
        "wschodniego",
        "greckiego"
      ]
    ],
    "explanation": "Droga przyjęcia chrześcijaństwa zdecydowała o przynależności do zachodniego albo wschodniego kręgu kultury."
  },
  {
    "id": "R04_SLO_08",
    "section": "Słowiańszczyzna",
    "type": "scenario",
    "prompt": "Dwaj duchowni z Bizancjum przybywają w IX wieku na Wielkie Morawy. Uczą się języka słowiańskiego, prowadzą w nim nabożeństwa i są nazywani apostołami Słowian. Kto to był?",
    "options": [
      "Cyryl i Metody",
      "Chlodwig i Pepin",
      "Karol i Lotar",
      "Otton i Hugo",
      "Ruryk i Włodzimierz",
      "Justynian i Konstantyn"
    ],
    "answer": 0,
    "image": "/img/r04_cyryl_metody_alfabety.jpg",
    "explanation": "Cyryl i Metody szerzyli chrześcijaństwo wśród Słowian i związali je z językiem słowiańskim."
  },
  {
    "id": "R04_SLO_09",
    "section": "Słowiańszczyzna",
    "type": "true_false",
    "prompt": "Głagolica była pierwszym alfabetem słowiańskim opracowanym przez św. Cyryla.",
    "options": null,
    "answer": true,
    "image": "/img/r04_cyryl_metody_alfabety.jpg",
    "explanation": "Św. Cyryl opracował głagolicę, którą później zastąpiła prostsza cyrylica."
  },
  {
    "id": "R04_SLO_10",
    "section": "Słowiańszczyzna",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Polska, Czechy, Bułgaria, Półwysep Arabski.",
    "options": null,
    "answer": "Półwysep Arabski",
    "explanation": "Polska, Czechy i Bułgaria były państwami słowiańskimi, a Półwysep Arabski wiąże się z początkami islamu."
  },
  {
    "id": "R04_SLO_11",
    "section": "Słowiańszczyzna",
    "type": "sort",
    "prompt": "Przyporządkuj państwa do kręgu chrześcijaństwa, przez który przyjęły nową religię.",
    "options": null,
    "items": [
      "Polska",
      "Czechy",
      "Węgry",
      "Ruś Kijowska",
      "Bułgaria"
    ],
    "categories": [
      "Kościół zachodni",
      "Kościół wschodni"
    ],
    "answer": {
      "Kościół zachodni": [
        "Polska",
        "Czechy",
        "Węgry"
      ],
      "Kościół wschodni": [
        "Ruś Kijowska",
        "Bułgaria"
      ]
    },
    "image": "/img/r04_mapa_slowianie.jpg",
    "explanation": "Polska, Czechy i Węgry weszły w krąg łaciński, natomiast Ruś i Bułgaria w krąg bizantyjski."
  },
  {
    "id": "R04_SLO_12",
    "section": "Słowiańszczyzna",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia dotyczące Słowian i Europy Środkowo-Wschodniej w porządku chronologicznym.",
    "options": null,
    "items": [
      "Powstanie Polski i Czech",
      "Zasiedlenie Europy Środkowej i Wschodniej przez Słowian",
      "Powstanie Wielkich Moraw",
      "Wędrówki Słowian u schyłku V wieku"
    ],
    "answer": [
      "Wędrówki Słowian u schyłku V wieku",
      "Zasiedlenie Europy Środkowej i Wschodniej przez Słowian",
      "Powstanie Wielkich Moraw",
      "Powstanie Polski i Czech"
    ],
    "explanation": "Słowianie rozpoczęli wędrówki pod koniec V wieku, w VI-VII wieku zasiedlili duże obszary, w IX wieku powstały Wielkie Morawy, a w X wieku Polska i Czechy."
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz trwałe dziedzictwa wczesnego średniowiecza wymienione w podsumowaniu rozdziału.",
    "options": [
      "Nazwa Francji pochodzi od Franków",
      "Nazwa Bułgarii pochodzi od Bułgarów",
      "Nazwa Polski pochodzi od plemienia Polan",
      "Cyrylica jest podstawą alfabetów używanych w części państw słowiańskich",
      "Cyfry arabskie zostały zapożyczone z Indii i uzupełnione o zero",
      "Nazwa Norwegii pochodzi od Normanów według rozdziału"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Podsumowanie wskazuje m.in. pochodzenie nazw państw, trwałość cyrylicy oraz znaczenie cyfr arabskich."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz datę lub okres z wydarzeniem.",
    "options": null,
    "left": [
      "V wiek",
      "VI wiek",
      "622 rok",
      "800 rok",
      "843 rok",
      "962 rok",
      "1054 rok"
    ],
    "right": [
      "powstanie królestw germańskich na Zachodzie",
      "panowanie Justyniana Wielkiego w Bizancjum",
      "ucieczka Mahometa do Medyny",
      "koronacja cesarska Karola Wielkiego",
      "podział monarchii karolińskiej",
      "koronacja cesarska Ottona I",
      "rozłam chrześcijaństwa"
    ],
    "answer": {
      "V wiek": "powstanie królestw germańskich na Zachodzie",
      "VI wiek": "panowanie Justyniana Wielkiego w Bizancjum",
      "622 rok": "ucieczka Mahometa do Medyny",
      "800 rok": "koronacja cesarska Karola Wielkiego",
      "843 rok": "podział monarchii karolińskiej",
      "962 rok": "koronacja cesarska Ottona I",
      "1054 rok": "rozłam chrześcijaństwa"
    },
    "explanation": "Daty te są osią chronologiczną całego działu o początkach średniowiecza."
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Rozłam chrześcijaństwa",
      "Podboje arabskie",
      "Koronacja Ottona I",
      "Ucieczka Mahometa do Medyny",
      "Koronacja Karola Wielkiego",
      "Powstanie królestw germańskich na Zachodzie",
      "Podział monarchii karolińskiej"
    ],
    "answer": [
      "Powstanie królestw germańskich na Zachodzie",
      "Ucieczka Mahometa do Medyny",
      "Podboje arabskie",
      "Koronacja Karola Wielkiego",
      "Podział monarchii karolińskiej",
      "Koronacja Ottona I",
      "Rozłam chrześcijaństwa"
    ],
    "explanation": "Kolejność wynika z dat: V wiek, 622 rok, VII-IX wiek, 800 rok, 843 rok, 962 rok i 1054 rok."
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Z połączenia jakich dwóch elementów rozwinęła się oryginalna kultura bizantyjska?",
    "options": [
      "grecko-rzymskiego dziedzictwa i chrześcijaństwa",
      "islamu i kultury skandynawskiej",
      "wielobóstwa arabskiego i prawa frankijskiego",
      "pisma runicznego i buddyzmu",
      "kultury wikingów i judaizmu",
      "prawa słowiańskiego i sztuki chińskiej"
    ],
    "answer": 0,
    "explanation": "Bizancjum łączyło starożytne dziedzictwo grecko-rzymskie, szczególnie greckie, z chrześcijaństwem."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "W Bizancjum instytucje kościelne były ściśle podporządkowane cesarzowi, a na Zachodzie po upadku cesarstwa większe znaczenie zyskał papież.",
    "options": null,
    "answer": true,
    "explanation": "Władca bizantyjski był opiekunem i zwierzchnikiem Kościoła, natomiast na Zachodzie papież był uznawany za najwyższy autorytet religijny."
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Olbrzymie państwo muzułmańskie powstałe dzięki podbojom kalifów, rozciągające się od Indusu do Półwyspu Iberyjskiego, to...",
    "options": null,
    "answer": "imperium arabskie",
    "altAnswers": [
      "imperium arabskie",
      "arabskie imperium",
      "imperium kalifów",
      "państwo kalifów"
    ],
    "explanation": "Po śmierci Mahometa kalifowie stworzyli wielkie imperium, które z czasem rozpadło się na kilka państw muzułmańskich."
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Historyk porównuje dwa kalendarze. Wyjaśnia, że w kalendarzu muzułmańskim pierwszy rok ery zaczyna się od wydarzenia z 622 roku, podobnie jak chrześcijanie liczą lata od narodzin Chrystusa. O jakie wydarzenie chodzi?",
    "options": [
      "ucieczka Mahometa z Mekki do Medyny",
      "zdobycie Półwyspu Iberyjskiego przez Arabów",
      "śmierć Karola Wielkiego",
      "koronacja Ottona I",
      "rozłam chrześcijaństwa",
      "powstanie Wielkich Moraw"
    ],
    "answer": 0,
    "explanation": "Początkiem ery muzułmańskiej jest hidżra, czyli ucieczka Mahometa z Mekki do Medyny."
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo, które nie pasuje ze względu na drogę przyjęcia chrześcijaństwa: Polska, Czechy, Węgry, Bułgaria.",
    "options": null,
    "answer": "Bułgaria",
    "explanation": "Polska, Czechy i Węgry przyjęły chrześcijaństwo za pośrednictwem Kościoła łacińskiego, a Bułgaria za pośrednictwem Kościoła bizantyjskiego."
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz pojęcie z precyzyjnym opisem.",
    "options": null,
    "left": [
      "mihrab",
      "arabeska",
      "minuskuła karolińska",
      "cyrylica"
    ],
    "right": [
      "wnęka w meczecie wskazująca kierunek Mekki",
      "ornament z motywów roślinnych i geometrycznych",
      "czytelna odmiana pisma łacińskiego",
      "alfabet słowiański oparty na piśmie greckim"
    ],
    "answer": {
      "mihrab": "wnęka w meczecie wskazująca kierunek Mekki",
      "arabeska": "ornament z motywów roślinnych i geometrycznych",
      "minuskuła karolińska": "czytelna odmiana pisma łacińskiego",
      "cyrylica": "alfabet słowiański oparty na piśmie greckim"
    },
    "image": "/img/r04_meczet_schemat.jpg",
    "explanation": "Pojęcia pochodzą z różnych kręgów kulturowych wczesnego średniowiecza: islamu, Zachodu łacińskiego i Słowiańszczyzny."
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Największym chrześcijańskim miastem średniowiecza był __________, do którego trafiały towary m.in. z Bliskiego Wschodu, Indii i __________.",
    "options": null,
    "answer": [
      "Konstantynopol",
      "Chin"
    ],
    "altAnswers": [
      [
        "Konstantynopol",
        "Konstantynopola"
      ],
      [
        "Chin",
        "Chiny"
      ]
    ],
    "explanation": "Konstantynopol dzięki korzystnemu położeniu długo był centrum światowego handlu."
  },
  {
    "id": "R04_HARD_11",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj osiągnięcia lub pojęcia do kręgu kulturowego.",
    "options": null,
    "items": [
      "Hagia Sophia",
      "Kodeks Justyniana",
      "arabeski",
      "Koran",
      "minuskuła karolińska",
      "Akwizgran",
      "głagolica",
      "Wielkie Morawy"
    ],
    "categories": [
      "Bizancjum",
      "islam",
      "Frankowie",
      "Słowianie"
    ],
    "answer": {
      "Bizancjum": [
        "Hagia Sophia",
        "Kodeks Justyniana"
      ],
      "islam": [
        "arabeski",
        "Koran"
      ],
      "Frankowie": [
        "minuskuła karolińska",
        "Akwizgran"
      ],
      "Słowianie": [
        "głagolica",
        "Wielkie Morawy"
      ]
    },
    "explanation": "Ćwiczenie łączy najważniejsze pojęcia z czterema kręgami kulturowymi omawianymi w rozdziale."
  },
  {
    "id": "R04_HARD_12",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Wikingowie atakowali wyłącznie od strony pełnego morza i nigdy nie osiedlali się w obcych krajach.",
    "options": null,
    "answer": false,
    "image": "/img/r04_wiking_statek.jpg",
    "explanation": "Wikingowie dzięki łodziom wpływali też rzekami w głąb lądu, a z czasem osiedlali się i zakładali własne państwa, m.in. Normandię."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r04",
  number: 4,
  title: "Początki średniowiecza",
  icon: "🏰",
  sectionOrder: [
  "Bizancjum",
  "Arabowie i początki islamu",
  "Państwo karolińskie",
  "Nowe państwa w Europie",
  "Słowiańszczyzna",
  "Super trudne"
],
  sectionIcons: {
  "Bizancjum": "🏛️",
  "Arabowie i początki islamu": "🌙",
  "Państwo karolińskie": "👑",
  "Nowe państwa w Europie": "🛡️",
  "Słowiańszczyzna": "🌾",
  "Super trudne": "🔥"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
