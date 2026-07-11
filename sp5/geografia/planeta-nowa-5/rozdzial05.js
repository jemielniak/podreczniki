// Skróty sekcji:
//   PUS = Pustynie gorące i lodowe
//   TAJ = Tajga i tundra
//   SRO = Krajobraz śródziemnomorski
//   HIM = Himalaje i ich mieszkańcy
//   POW = Powtórka mieszana
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R05_PUS_01",
    "section": "Pustynie gorące i lodowe",
    "type": "single_choice",
    "prompt": "Gdzie na świecie są zwykle położone pustynie gorące?",
    "options": [
      "w pobliżu zwrotników",
      "wyłącznie przy równiku",
      "za kołami podbiegunowymi",
      "tylko na wyspach oceanicznych",
      "w najwyższych partiach gór",
      "zawsze na wybrzeżach mórz"
    ],
    "answer": 0,
    "explanation": "Pustynie gorące leżą najczęściej w niewielkiej odległości od zwrotników, np. Sahara przy zwrotniku Raka."
  },
  {
    "id": "R05_PUS_02",
    "section": "Pustynie gorące i lodowe",
    "type": "true_false",
    "prompt": "Zwrotnik Raka przecina Saharę, największą pustynię gorącą świata.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik wskazuje Saharę jako największą pustynię gorącą i podaje, że przecina ją zwrotnik Raka."
  },
  {
    "id": "R05_PUS_03",
    "section": "Pustynie gorące i lodowe",
    "type": "multi_select",
    "prompt": "Zaznacz cechy pustyń lodowych opisane w rozdziale.",
    "options": [
      "leżą za kołami podbiegunowymi",
      "panuje tam skrajnie niska temperatura powietrza",
      "obejmują między innymi Antarktydę i Grenlandię",
      "są zwykle położone przy zwrotnikach",
      "ich typowym ograniczeniem jest wysoka temperatura powietrza",
      "na Antarktydzie nie ma stałych osad"
    ],
    "answer": [
      0,
      1,
      2,
      5
    ],
    "explanation": "Pustynie lodowe leżą w obszarach okołobiegunowych, mają bardzo niską temperaturę, obejmują Antarktydę i Grenlandię, a Antarktyda nie ma stałych osad.",
    "image": "/img/r05_pustynia_goraca_lodowa_kontrast.jpg"
  },
  {
    "id": "R05_PUS_04",
    "section": "Pustynie gorące i lodowe",
    "type": "fill_in",
    "prompt": "Pustynie gorące wyróżniają się skrajnie __________, a pustynie lodowe skrajnie __________; w obu przypadkach opady są bardzo niskie.",
    "options": null,
    "answer": [
      "wysoką temperaturą",
      "niską temperaturą"
    ],
    "altAnswers": [
      [
        "wysoką temperaturą",
        "wysokimi temperaturami",
        "wysoka temperatura"
      ],
      [
        "niską temperaturą",
        "niskimi temperaturami",
        "niska temperatura"
      ]
    ],
    "explanation": "Na pustyniach gorących problemem jest upał i brak wody, a na pustyniach lodowych - bardzo niska temperatura."
  },
  {
    "id": "R05_PUS_05",
    "section": "Pustynie gorące i lodowe",
    "type": "riddle",
    "prompt": "Obszar na pustyni, w którym znajduje się źródło słodkiej wody i mogą rosnąć rośliny, to...",
    "options": null,
    "answer": "oaza",
    "altAnswers": [
      "oaza",
      "Oaza"
    ],
    "explanation": "Oaza to miejsce na pustyni z dostępem do słodkiej wody, dlatego może stać się miejscem osadnictwa."
  },
  {
    "id": "R05_PUS_06",
    "section": "Pustynie gorące i lodowe",
    "type": "match",
    "prompt": "Połącz zwierzę z jego przystosowaniem do warunków pustynnych.",
    "options": null,
    "left": [
      "fenek",
      "wielbłąd",
      "moloch straszliwy",
      "pingwin"
    ],
    "right": [
      "duże uszy pomagające w termoregulacji",
      "tłuszcz zgromadzony w garbie i duże stopy",
      "kolce i kanaliki kierujące rosę do pyska",
      "wodoszczelne pióra chroniące przed chłodem"
    ],
    "answer": {
      "fenek": "duże uszy pomagające w termoregulacji",
      "wielbłąd": "tłuszcz zgromadzony w garbie i duże stopy",
      "moloch straszliwy": "kolce i kanaliki kierujące rosę do pyska",
      "pingwin": "wodoszczelne pióra chroniące przed chłodem"
    },
    "explanation": "Każde z tych zwierząt ma cechy ułatwiające życie w skrajnych warunkach pustyni gorącej albo lodowej.",
    "image": "/img/r05_przystosowania_wielblada_fenka.jpg"
  },
  {
    "id": "R05_PUS_07",
    "section": "Pustynie gorące i lodowe",
    "type": "scenario",
    "prompt": "Na gorącej pustyni widzisz małego lisa o piaskowym ubarwieniu i bardzo dużych małżowinach usznych, które pomagają mu oddawać nadmiar ciepła. Jakie zwierzę opisano?",
    "options": [
      "fenek",
      "leming",
      "puszczyk mszarny",
      "orłosęp",
      "pingwin",
      "renifer"
    ],
    "answer": 0,
    "explanation": "Fenek ma duże uszy służące termoregulacji i ubarwienie ułatwiające kamuflaż wśród pustynnych skał i piasku.",
    "image": "/img/r05_przystosowania_wielblada_fenka.jpg"
  },
  {
    "id": "R05_PUS_08",
    "section": "Pustynie gorące i lodowe",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Sahara, Namib, Mojave, Antarktyda.",
    "options": null,
    "answer": "Antarktyda",
    "explanation": "Sahara, Namib i Mojave to przykłady pustyń gorących, a Antarktyda jest pustynią lodową."
  },
  {
    "id": "R05_PUS_09",
    "section": "Pustynie gorące i lodowe",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do typu pustyni.",
    "options": null,
    "items": [
      "Sahara",
      "położenie w pobliżu zwrotników",
      "skrajnie wysoka temperatura",
      "Antarktyda",
      "położenie za kołami podbiegunowymi",
      "lądolód"
    ],
    "categories": [
      "pustynia gorąca",
      "pustynia lodowa"
    ],
    "answer": {
      "pustynia gorąca": [
        "Sahara",
        "położenie w pobliżu zwrotników",
        "skrajnie wysoka temperatura"
      ],
      "pustynia lodowa": [
        "Antarktyda",
        "położenie za kołami podbiegunowymi",
        "lądolód"
      ]
    },
    "explanation": "Pustynie gorące wiążą się ze zwrotnikami i wysoką temperaturą, a pustynie lodowe z obszarami okołobiegunowymi i lodem.",
    "image": "/img/r05_pustynia_goraca_lodowa_kontrast.jpg"
  },
  {
    "id": "R05_PUS_10",
    "section": "Pustynie gorące i lodowe",
    "type": "single_choice",
    "prompt": "Co jest największym ograniczeniem dla życia i działalności człowieka na pustyni gorącej?",
    "options": [
      "brak wody",
      "zbyt żyzne gleby",
      "nadmiar lasów",
      "stały lądolód",
      "zbyt duże opady śniegu",
      "brak światła słonecznego"
    ],
    "answer": 0,
    "explanation": "Podręcznik podkreśla, że mimo współczesnych sposobów pozyskiwania wody jej brak pozostaje największym ograniczeniem na pustyni gorącej."
  },
  {
    "id": "R05_PUS_11",
    "section": "Pustynie gorące i lodowe",
    "type": "multi_select",
    "prompt": "Zaznacz współczesne sposoby pozyskiwania lub dostarczania wody na obszarach pustynnych.",
    "options": [
      "odsalanie wody morskiej",
      "pozyskiwanie wody z dużych głębokości spod ziemi",
      "transportowanie wody na znaczne odległości",
      "budowa systemów nawadniających",
      "wytwarzanie lądolodu",
      "wypalanie makii"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Na pustyniach wykorzystuje się m.in. odsalanie, wodę podziemną, transport wody i systemy nawadniające."
  },
  {
    "id": "R05_PUS_12",
    "section": "Pustynie gorące i lodowe",
    "type": "true_false",
    "prompt": "Na Antarktydzie, ze względu na ochronę środowiska, nie buduje się miast i wsi; dopuszcza się głównie obecność naukowców i obsługi stacji badawczych.",
    "options": null,
    "answer": true,
    "explanation": "Antarktyda nie ma stałych osad, a działalność człowieka ogranicza się tam przede wszystkim do stacji badawczych."
  },
  {
    "id": "R05_TAJ_01",
    "section": "Tajga i tundra",
    "type": "single_choice",
    "prompt": "Czym jest tajga?",
    "options": [
      "lasem z przewagą drzew iglastych w klimacie umiarkowanym chłodnym",
      "bezleśną formacją roślinną strefy okołobiegunowej",
      "wtórną roślinnością śródziemnomorską",
      "obszarem pustynnym pozbawionym opadów",
      "piętrem lodowców w Himalajach",
      "suchą sawanną zwrotnikową"
    ],
    "answer": 0,
    "explanation": "Tajga to rozległy las, w którym dominują drzewa iglaste, np. świerki, modrzewie, jodły i sosny.",
    "image": "/img/r05_tajga_tundra_przekroj.jpg"
  },
  {
    "id": "R05_TAJ_02",
    "section": "Tajga i tundra",
    "type": "true_false",
    "prompt": "Tundra jest formacją bezleśną, w której dominują trawy, mchy i porosty.",
    "options": null,
    "answer": true,
    "explanation": "W tundrze jest zbyt zimno dla dużych drzew, dlatego dominują tam niskie rośliny."
  },
  {
    "id": "R05_TAJ_03",
    "section": "Tajga i tundra",
    "type": "multi_select",
    "prompt": "Wskaż rośliny typowe dla tajgi wymienione w rozdziale.",
    "options": [
      "świerk",
      "modrzew",
      "jodła",
      "sosna",
      "oleander",
      "welwiczia"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Tajgę tworzą głównie drzewa iglaste, w tym świerki, modrzewie, jodły i sosny."
  },
  {
    "id": "R05_TAJ_04",
    "section": "Tajga i tundra",
    "type": "fill_in",
    "prompt": "Strefę przejściową między tajgą a tundrą, w której drzewa rosną rzadziej i są niższe, nazywamy __________.",
    "options": null,
    "answer": [
      "lasotundrą"
    ],
    "altAnswers": [
      [
        "lasotundrą",
        "lasotundra",
        "laso-tundrą",
        "laso-tundra"
      ]
    ],
    "explanation": "Lasotundra to obszar stopniowego przejścia od zwartej tajgi do bezleśnej tundry.",
    "image": "/img/r05_tajga_tundra_przekroj.jpg"
  },
  {
    "id": "R05_TAJ_05",
    "section": "Tajga i tundra",
    "type": "match",
    "prompt": "Połącz zwierzę z informacją z rozdziału.",
    "options": null,
    "left": [
      "niedźwiedź grizzly",
      "łoś",
      "renifer",
      "leming"
    ],
    "right": [
      "niebezpieczny drapieżnik tajgi",
      "mieszkaniec tajgi",
      "zwierzę hodowane przez mieszkańców dalekiej północy",
      "mały gryzoń spokrewniony z chomikami"
    ],
    "answer": {
      "niedźwiedź grizzly": "niebezpieczny drapieżnik tajgi",
      "łoś": "mieszkaniec tajgi",
      "renifer": "zwierzę hodowane przez mieszkańców dalekiej północy",
      "leming": "mały gryzoń spokrewniony z chomikami"
    },
    "explanation": "Rozdział pokazuje zwierzęta tajgi i tundry oraz ich znaczenie dla mieszkańców północy."
  },
  {
    "id": "R05_TAJ_06",
    "section": "Tajga i tundra",
    "type": "scenario",
    "prompt": "Ekipa budowlana pracuje na obszarze wieloletniej zmarzliny. Zamiast stawiać blok bezpośrednio na gruncie, osadza go na palach sięgających głęboko w zamarzniętą warstwę. Dlaczego?",
    "options": [
      "bo rozmarznięta powierzchnia gruntu staje się błotnista i niestabilna",
      "bo w tajdze nie wolno używać drewna",
      "bo pale chronią przed brakiem światła słonecznego",
      "bo budynki muszą pływać po jeziorach",
      "bo podłoże jest zbyt gorące od wulkanów",
      "bo palowanie służy wyłącznie ozdobie"
    ],
    "answer": 0,
    "explanation": "Po rozmarznięciu wierzchniej warstwy gruntu podłoże staje się grząskie, a budynki mogą się wykrzywiać i pękać.",
    "image": "/img/r05_wieloletnia_zmarzlina_budynek.jpg"
  },
  {
    "id": "R05_TAJ_07",
    "section": "Tajga i tundra",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: świerk, sosna, jodła, opuncja.",
    "options": null,
    "answer": "opuncja",
    "explanation": "Świerk, sosna i jodła są drzewami typowymi dla tajgi, a opuncja jest kaktusem pustynnym."
  },
  {
    "id": "R05_TAJ_08",
    "section": "Tajga i tundra",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do tajgi albo tundry.",
    "options": null,
    "items": [
      "las iglasty",
      "drzewa iglaste",
      "bardzo rozległe obszary w Azji, Europie i Ameryce Północnej",
      "formacja bezleśna",
      "trawy, mchy i porosty",
      "najdalej na północ wysunięte fragmenty lądów"
    ],
    "categories": [
      "tajga",
      "tundra"
    ],
    "answer": {
      "tajga": [
        "las iglasty",
        "drzewa iglaste",
        "bardzo rozległe obszary w Azji, Europie i Ameryce Północnej"
      ],
      "tundra": [
        "formacja bezleśna",
        "trawy, mchy i porosty",
        "najdalej na północ wysunięte fragmenty lądów"
      ]
    },
    "explanation": "Tajga jest lasem iglastym, natomiast tundra to bezleśna strefa okołobiegunowa."
  },
  {
    "id": "R05_TAJ_09",
    "section": "Tajga i tundra",
    "type": "single_choice",
    "prompt": "Co oznacza pojęcie „wieloletnia zmarzlina”?",
    "options": [
      "warstwę gruntu, w której przez cały czas utrzymuje się ujemna temperatura",
      "śnieg leżący na pustyni tylko zimą",
      "las iglasty z przewagą świerków",
      "górski lodowiec powstały w dolinie",
      "mgłę osadzającą się na roślinach",
      "zimną porę roku w klimacie śródziemnomorskim"
    ],
    "answer": 0,
    "explanation": "Wieloletnia zmarzlina to stale zamarznięta warstwa gruntu, która utrudnia budowę i osadnictwo.",
    "image": "/img/r05_wieloletnia_zmarzlina_budynek.jpg"
  },
  {
    "id": "R05_TAJ_10",
    "section": "Tajga i tundra",
    "type": "true_false",
    "prompt": "Zamarznięte rzeki na Syberii i Alasce bywają wykorzystywane jako zimowe drogi.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział podaje, że zamarznięte rzeki mogą pełnić funkcję szlaków transportowych, choć jazda po nich jest trudna i niebezpieczna."
  },
  {
    "id": "R05_TAJ_11",
    "section": "Tajga i tundra",
    "type": "multi_select",
    "prompt": "Zaznacz zajęcia ludności tajgi i tundry wymienione w rozdziale.",
    "options": [
      "łowiectwo",
      "chów zwierząt, np. reniferów",
      "wycinka i obróbka drewna",
      "wydobywanie surowców mineralnych",
      "uprawa winorośli na wielką skalę",
      "produkcja korka z dębu korkowego"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Mieszkańcy tajgi i tundry zajmują się m.in. łowiectwem, chowem reniferów, pracą przy drewnie i wydobyciem surowców."
  },
  {
    "id": "R05_TAJ_12",
    "section": "Tajga i tundra",
    "type": "riddle",
    "prompt": "Największy las świata, większy powierzchniowo nawet od równikowych lasów deszczowych, to...",
    "options": null,
    "answer": "tajga",
    "altAnswers": [
      "tajga",
      "Tajga"
    ],
    "explanation": "Podręcznik podkreśla, że łączna powierzchnia tajgi na wszystkich kontynentach czyni ją największym lasem świata."
  },
  {
    "id": "R05_SRO_01",
    "section": "Krajobraz śródziemnomorski",
    "type": "single_choice",
    "prompt": "Gdzie występuje klimat śródziemnomorski według rozdziału?",
    "options": [
      "na południu Europy oraz na niewielkich nadmorskich obszarach Afryki, Ameryki Północnej, Azji i Australii",
      "wyłącznie w Polsce i Skandynawii",
      "tylko w głębi Antarktydy",
      "tylko w najwyższych partiach Himalajów",
      "wyłącznie na pustyniach gorących",
      "tylko w strefie tundry"
    ],
    "answer": 0,
    "explanation": "Klimat śródziemnomorski obejmuje przede wszystkim okolice Morza Śródziemnego, ale występuje też w innych nadmorskich regionach kilku kontynentów."
  },
  {
    "id": "R05_SRO_02",
    "section": "Krajobraz śródziemnomorski",
    "type": "true_false",
    "prompt": "W klimacie śródziemnomorskim nie występuje termiczna zima, ponieważ w chłodnej porze roku średnia miesięczna temperatura powietrza jest wyższa niż 0°C.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział opisuje łagodną, deszczową zimę i brak termicznej zimy w tym klimacie."
  },
  {
    "id": "R05_SRO_03",
    "section": "Krajobraz śródziemnomorski",
    "type": "fill_in",
    "prompt": "Klimat śródziemnomorski cechuje __________ lato oraz łagodna, __________ zima.",
    "options": null,
    "answer": [
      "gorące i suche",
      "deszczowa"
    ],
    "altAnswers": [
      [
        "gorące i suche",
        "suche i gorące",
        "gorące, suche"
      ],
      [
        "deszczowa",
        "wilgotna"
      ]
    ],
    "explanation": "Najważniejszy układ pór roku w klimacie śródziemnomorskim to gorące i suche lato oraz łagodna, deszczowa zima."
  },
  {
    "id": "R05_SRO_04",
    "section": "Krajobraz śródziemnomorski",
    "type": "multi_select",
    "prompt": "Zaznacz cechy roślin śródziemnomorskich przystosowanych do suszy.",
    "options": [
      "liście pokryte twardą skórką i woskiem",
      "rozbudowane systemy korzeniowe sięgające głęboko w podłoże",
      "wydzielanie olejków eterycznych",
      "zimozieloność i odporność na przymrozki",
      "brak jakichkolwiek korzeni",
      "całoroczne zrzucanie liści przed każdym deszczem"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Rośliny śródziemnomorskie ograniczają utratę wody i wykorzystują głębokie korzenie, a wiele z nich jest zimozielonych.",
    "image": "/img/r05_makia_roslinnosc_srodziemnomorska.jpg"
  },
  {
    "id": "R05_SRO_05",
    "section": "Krajobraz śródziemnomorski",
    "type": "riddle",
    "prompt": "Wtórna formacja roślinna złożona głównie z krzewów i kolczastych zarośli w regionie Morza Śródziemnego to...",
    "options": null,
    "answer": "makia",
    "altAnswers": [
      "makia",
      "Makia"
    ],
    "explanation": "Makia powstała po zniszczeniu pierwotnych lasów dębowych, cyprysowych i piniowych.",
    "image": "/img/r05_makia_roslinnosc_srodziemnomorska.jpg"
  },
  {
    "id": "R05_SRO_06",
    "section": "Krajobraz śródziemnomorski",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: mirt, oleander, wawrzyn, renifer.",
    "options": null,
    "answer": "renifer",
    "explanation": "Mirt, oleander i wawrzyn są roślinami śródziemnomorskimi, a renifer jest zwierzęciem tajgi i tundry."
  },
  {
    "id": "R05_SRO_07",
    "section": "Krajobraz śródziemnomorski",
    "type": "match",
    "prompt": "Połącz roślinę uprawianą w regionie Morza Śródziemnego z informacją z rozdziału.",
    "options": null,
    "left": [
      "winogrona",
      "dąb korkowy",
      "cytryny i mandarynki",
      "drzewo oliwne"
    ],
    "right": [
      "są związane z produkcją wina",
      "dostarcza kory wykorzystywanej do produkcji korka",
      "należą do uprawianych cytrusów",
      "może żyć bardzo długo"
    ],
    "answer": {
      "winogrona": "są związane z produkcją wina",
      "dąb korkowy": "dostarcza kory wykorzystywanej do produkcji korka",
      "cytryny i mandarynki": "należą do uprawianych cytrusów",
      "drzewo oliwne": "może żyć bardzo długo"
    },
    "explanation": "W regionie śródziemnomorskim uprawia się m.in. winorośl, dęby korkowe, cytrusy i oliwki."
  },
  {
    "id": "R05_SRO_08",
    "section": "Krajobraz śródziemnomorski",
    "type": "scenario",
    "prompt": "Rodzina buduje dom nad Morzem Śródziemnym. Maluje ściany na biało, robi zacieniony dziedziniec i zakłada okiennice. Jaki problem pomagają ograniczyć te rozwiązania?",
    "options": [
      "nadmierne nagrzewanie wnętrza domu",
      "powstawanie lodowców górskich",
      "brak termicznego lata",
      "zapadanie się gruntu w zmarzlinie",
      "niedobór tlenu na dużej wysokości",
      "ataki lemingów"
    ],
    "answer": 0,
    "explanation": "Białe ściany odbijają światło, a cień i okiennice pomagają utrzymać niższą temperaturę wewnątrz budynku.",
    "image": "/img/r05_dom_srodziemnomorski_bialy.jpg"
  },
  {
    "id": "R05_SRO_09",
    "section": "Krajobraz śródziemnomorski",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do roślinności śródziemnomorskiej naturalnej/wtórnej albo do upraw.",
    "options": null,
    "items": [
      "mirt",
      "oleander",
      "wawrzyn",
      "ostrokrzew kolczasty",
      "cytrusy",
      "oliwki",
      "winorośl",
      "dąb korkowy"
    ],
    "categories": [
      "makia i roślinność naturalna",
      "uprawy regionu śródziemnomorskiego"
    ],
    "answer": {
      "makia i roślinność naturalna": [
        "mirt",
        "oleander",
        "wawrzyn",
        "ostrokrzew kolczasty"
      ],
      "uprawy regionu śródziemnomorskiego": [
        "cytrusy",
        "oliwki",
        "winorośl",
        "dąb korkowy"
      ]
    },
    "explanation": "Makia składa się z krzewów i kolczastych zarośli, natomiast na terenach rolniczych dominują cytrusy, oliwki, winorośl i dęby korkowe."
  },
  {
    "id": "R05_SRO_10",
    "section": "Krajobraz śródziemnomorski",
    "type": "single_choice",
    "prompt": "Kiedy na półkuli północnej w klimacie śródziemnomorskim występują najwyższe opady?",
    "options": [
      "od listopada do marca",
      "wyłącznie w lipcu i sierpniu",
      "przez cały rok jednakowo obficie",
      "tylko w maju i czerwcu",
      "od czerwca do września",
      "tylko podczas termicznej zimy poniżej 0°C"
    ],
    "answer": 0,
    "explanation": "W strefie śródziemnomorskiej na półkuli północnej najwyższe opady przypadają na chłodną porę roku, od listopada do marca."
  },
  {
    "id": "R05_SRO_11",
    "section": "Krajobraz śródziemnomorski",
    "type": "multi_select",
    "prompt": "Zaznacz walory turystyczne regionu Morza Śródziemnego wymienione w rozdziale.",
    "options": [
      "słoneczna pogoda",
      "ciepłe morze",
      "zabytki",
      "kuchnia śródziemnomorska",
      "wieloletnia zmarzlina",
      "lądolód zajmujący cały kontynent"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Turyści doceniają słoneczną pogodę, ciepłe morze, zabytki, krajobrazy, kulturę i kuchnię regionu."
  },
  {
    "id": "R05_SRO_12",
    "section": "Krajobraz śródziemnomorski",
    "type": "true_false",
    "prompt": "Makia zajęła miejsce wielu pierwotnych lasów w regionie Morza Śródziemnego po działalności człowieka, między innymi po tworzeniu pastwisk.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział wyjaśnia, że pierwotne lasy zostały w znacznej części zniszczone, a ich miejsce zajęła makia."
  },
  {
    "id": "R05_HIM_01",
    "section": "Himalaje i ich mieszkańcy",
    "type": "single_choice",
    "prompt": "Jak nazywa się najwyższy szczyt świata położony w Himalajach?",
    "options": [
      "Mount Everest",
      "Annapurna",
      "Wyżyna Tybetańska",
      "Tatry",
      "Korsyka",
      "Sahara"
    ],
    "answer": 0,
    "explanation": "Najwyższym szczytem świata jest Mount Everest, którego wysokość podana w rozdziale wynosi 8849 m n.p.m."
  },
  {
    "id": "R05_HIM_02",
    "section": "Himalaje i ich mieszkańcy",
    "type": "fill_in",
    "prompt": "Mount Everest ma wysokość __________ m n.p.m., a Himalaje zaczęły powstawać około __________ milionów lat temu.",
    "options": null,
    "answer": [
      "8849",
      "50"
    ],
    "altAnswers": [
      [
        "8849",
        "8 849",
        "8849 m",
        "8849 m n.p.m."
      ],
      [
        "50",
        "50 mln",
        "50 milionów"
      ]
    ],
    "explanation": "Rozdział podaje wysokość Mount Everestu 8849 m n.p.m. oraz informację, że Himalaje zaczęły powstawać około 50 milionów lat temu."
  },
  {
    "id": "R05_HIM_03",
    "section": "Himalaje i ich mieszkańcy",
    "type": "true_false",
    "prompt": "Himalaje są jednymi z najmłodszych gór świata, a proces ich wypiętrzania nadal trwa.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik opisuje Himalaje jako młode góry, które nadal rosną."
  },
  {
    "id": "R05_HIM_04",
    "section": "Himalaje i ich mieszkańcy",
    "type": "multi_select",
    "prompt": "Zaznacz informacje zgodne z opisem położenia i cech Himalajów.",
    "options": [
      "leżą w Azji",
      "mają około 2500 km długości",
      "na północ od nich leży Wyżyna Tybetańska",
      "oddzielają wilgotniejszą Azję Południową od chłodniejszej i bardziej suchej Azji Środkowej",
      "leżą za kołem podbiegunowym południowym",
      "są częścią pustyni lodowej Antarktydy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Himalaje leżą w Azji, ciągną się na około 2500 km, a na północ od nich rozciąga się Wyżyna Tybetańska."
  },
  {
    "id": "R05_HIM_05",
    "section": "Himalaje i ich mieszkańcy",
    "type": "sequence",
    "prompt": "Ułóż piętra klimatyczno-roślinne Himalajów od najniższego do najwyższego.",
    "options": null,
    "items": [
      "trawy",
      "las mieszany",
      "lodowce i wieczne śniegi",
      "kosodrzewina",
      "wilgotne lasy monsunowe",
      "skały i turnie",
      "las iglasty"
    ],
    "answer": [
      "wilgotne lasy monsunowe",
      "las mieszany",
      "las iglasty",
      "kosodrzewina",
      "trawy",
      "skały i turnie",
      "lodowce i wieczne śniegi"
    ],
    "explanation": "Wraz z wysokością spada temperatura, dlatego od podnóża ku szczytom zmieniają się kolejne piętra roślinności i krajobrazu.",
    "image": "/img/r05_pietra_roslinnosci_himalajow.jpg"
  },
  {
    "id": "R05_HIM_06",
    "section": "Himalaje i ich mieszkańcy",
    "type": "match",
    "prompt": "Połącz element himalajskiej przyrody z informacją z rozdziału.",
    "options": null,
    "left": [
      "jak",
      "pantera śnieżna",
      "orłosęp",
      "lodowiec górski"
    ],
    "right": [
      "zwierzę używane między innymi do transportu ciężkich ładunków",
      "drapieżnik żyjący w Himalajach",
      "ptak drapieżny żyjący w Himalajach",
      "masa lodu powstała z wieloletniego nagromadzenia śniegu"
    ],
    "answer": {
      "jak": "zwierzę używane między innymi do transportu ciężkich ładunków",
      "pantera śnieżna": "drapieżnik żyjący w Himalajach",
      "orłosęp": "ptak drapieżny żyjący w Himalajach",
      "lodowiec górski": "masa lodu powstała z wieloletniego nagromadzenia śniegu"
    },
    "explanation": "Himalaje mają bogatą wysokogórską przyrodę, a typowym elementem krajobrazu są również lodowce.",
    "image": "/img/r05_jak_i_szerpa_himalaje.jpg"
  },
  {
    "id": "R05_HIM_07",
    "section": "Himalaje i ich mieszkańcy",
    "type": "scenario",
    "prompt": "Rolnik w środkowym Nepalu chce uprawiać rośliny na stromym stoku. Buduje poziome stopnie, które pomagają zatrzymać wodę i ułatwiają pielęgnację roślin. Jak nazywa się takie rozwiązanie?",
    "options": [
      "terasy uprawne",
      "lądolód",
      "makia",
      "lasotundra",
      "oaza",
      "zmarzlina"
    ],
    "answer": 0,
    "explanation": "W Himalajach na stokach tworzy się terasy, które umożliwiają uprawę roślin, np. górskiej odmiany ryżu."
  },
  {
    "id": "R05_HIM_08",
    "section": "Himalaje i ich mieszkańcy",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: jak, pantera śnieżna, orłosęp, fenek.",
    "options": null,
    "answer": "fenek",
    "explanation": "Jak, pantera śnieżna i orłosęp są związane z Himalajami, a fenek jest zwierzęciem pustyni gorącej."
  },
  {
    "id": "R05_HIM_09",
    "section": "Himalaje i ich mieszkańcy",
    "type": "riddle",
    "prompt": "Rdzenna grupa mieszkańców Himalajów, znana z pracy przewodników i tragarzy podczas wypraw wysokogórskich, to...",
    "options": null,
    "answer": "Szerpowie",
    "altAnswers": [
      "Szerpowie",
      "szerpowie",
      "Szerpa",
      "szerpa"
    ],
    "explanation": "Szerpowie bardzo dobrze znają góry i odgrywają ważną rolę w turystyce wysokogórskiej.",
    "image": "/img/r05_jak_i_szerpa_himalaje.jpg"
  },
  {
    "id": "R05_HIM_10",
    "section": "Himalaje i ich mieszkańcy",
    "type": "multi_select",
    "prompt": "Zaznacz trudności, które napotykają himalaiści w najwyższych partiach Himalajów.",
    "options": [
      "huraganowe wiatry",
      "bardzo niska temperatura",
      "rozrzedzone powietrze i niedobór tlenu",
      "choroba wysokościowa",
      "szczeliny w lodowcach",
      "letnie upały typowe dla pustyni gorącej"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Wysokogórskie warunki obejmują mróz, silny wiatr, rozrzedzone powietrze, ryzyko choroby wysokościowej i niebezpieczne lodowce.",
    "image": "/img/r05_lodowiec_gorski_szczeliny.jpg"
  },
  {
    "id": "R05_HIM_11",
    "section": "Himalaje i ich mieszkańcy",
    "type": "true_false",
    "prompt": "Lodowce górskie powstają ze śniegu nagromadzonego przez wiele lat w zagłębieniach i dolinach.",
    "options": null,
    "answer": true,
    "explanation": "Tak powstałe masy lodu są typowym elementem wysokogórskiego krajobrazu Himalajów.",
    "image": "/img/r05_lodowiec_gorski_szczeliny.jpg"
  },
  {
    "id": "R05_HIM_12",
    "section": "Himalaje i ich mieszkańcy",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do cech krajobrazu Himalajów albo do życia ich mieszkańców.",
    "options": null,
    "items": [
      "ośmiotysięczniki",
      "lodowce górskie",
      "piętrowość klimatyczno-roślinna",
      "terasy uprawne",
      "chów jaków",
      "buddyjskie klasztory",
      "Szerpowie jako przewodnicy"
    ],
    "categories": [
      "krajobraz i przyroda",
      "życie ludzi i kultura"
    ],
    "answer": {
      "krajobraz i przyroda": [
        "ośmiotysięczniki",
        "lodowce górskie",
        "piętrowość klimatyczno-roślinna"
      ],
      "życie ludzi i kultura": [
        "terasy uprawne",
        "chów jaków",
        "buddyjskie klasztory",
        "Szerpowie jako przewodnicy"
      ]
    },
    "explanation": "Himalaje wyróżniają się wysokogórską przyrodą, a ich mieszkańcy dostosowują rolnictwo, hodowlę i kulturę do górskich warunków."
  },
  {
    "id": "R05_POW_01",
    "section": "Powtórka mieszana",
    "type": "match",
    "prompt": "Połącz pojęcie z definicją.",
    "options": null,
    "left": [
      "oaza",
      "makia",
      "wieloletnia zmarzlina",
      "lodowiec górski"
    ],
    "right": [
      "miejsce na pustyni ze źródłem słodkiej wody",
      "wtórna formacja roślinna klimatu śródziemnomorskiego",
      "warstwa gruntu stale utrzymująca ujemną temperaturę",
      "przemieszczająca się masa lodu w górach"
    ],
    "answer": {
      "oaza": "miejsce na pustyni ze źródłem słodkiej wody",
      "makia": "wtórna formacja roślinna klimatu śródziemnomorskiego",
      "wieloletnia zmarzlina": "warstwa gruntu stale utrzymująca ujemną temperaturę",
      "lodowiec górski": "przemieszczająca się masa lodu w górach"
    },
    "explanation": "Pojęcia te pochodzą ze słowniczka i podsumowania działu V."
  },
  {
    "id": "R05_POW_02",
    "section": "Powtórka mieszana",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do właściwej strefy lub krajobrazu.",
    "options": null,
    "items": [
      "opuncja",
      "fenek",
      "świerk",
      "niedźwiedź grizzly",
      "mirt",
      "oleander",
      "jak",
      "Szerpowie"
    ],
    "categories": [
      "pustynia gorąca",
      "tajga",
      "krajobraz śródziemnomorski",
      "Himalaje"
    ],
    "answer": {
      "pustynia gorąca": [
        "opuncja",
        "fenek"
      ],
      "tajga": [
        "świerk",
        "niedźwiedź grizzly"
      ],
      "krajobraz śródziemnomorski": [
        "mirt",
        "oleander"
      ],
      "Himalaje": [
        "jak",
        "Szerpowie"
      ]
    },
    "explanation": "Każdy zestaw łączy roślinę, zwierzę lub grupę ludzi z krajobrazem opisanym w dziale."
  },
  {
    "id": "R05_POW_03",
    "section": "Powtórka mieszana",
    "type": "sequence",
    "prompt": "Ułóż formacje i krajobrazy od położonych najbliżej bieguna północnego do leżących najdalej od niego.",
    "options": null,
    "items": [
      "makia",
      "tajga",
      "pustynie lodowe",
      "pustynie gorące",
      "tundra"
    ],
    "answer": [
      "pustynie lodowe",
      "tundra",
      "tajga",
      "makia",
      "pustynie gorące"
    ],
    "explanation": "Najbliżej bieguna leżą pustynie lodowe, dalej tundra i tajga, a znacznie dalej strefa śródziemnomorska i pustynie gorące.",
    "image": "/img/r05_mapa_stref_krajobrazowych.jpg"
  },
  {
    "id": "R05_POW_04",
    "section": "Powtórka mieszana",
    "type": "single_choice",
    "prompt": "Który zestaw prawidłowo łączy krajobraz z głównym ograniczeniem dla życia i gospodarowania?",
    "options": [
      "pustynia gorąca - brak wody",
      "tundra - nadmiar drzew liściastych",
      "Himalaje - brak różnic wysokości",
      "krajobraz śródziemnomorski - całoroczny lądolód",
      "tajga - gorące i suche lato",
      "pustynia lodowa - nadmiar upraw cytrusów"
    ],
    "answer": 0,
    "explanation": "Na pustyniach gorących najważniejszym ograniczeniem jest niedobór wody."
  },
  {
    "id": "R05_POW_05",
    "section": "Powtórka mieszana",
    "type": "multi_select",
    "prompt": "W których krajobrazach niska temperatura jest ważnym ograniczeniem dla życia ludzi lub rozwoju gospodarczego?",
    "options": [
      "pustynia lodowa",
      "tundra",
      "tajga",
      "najwyższe partie Himalajów",
      "krajobraz śródziemnomorski",
      "oaza na pustyni gorącej"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Niska temperatura ogranicza życie na pustyniach lodowych, w tundrze, w tajdze oraz wysoko w Himalajach."
  },
  {
    "id": "R05_POW_06",
    "section": "Powtórka mieszana",
    "type": "true_false",
    "prompt": "Koczownicze plemiona Sahary budują schronienia z lekkich materiałów, które można łatwo przenosić.",
    "options": null,
    "answer": true,
    "explanation": "Koczownicy przemieszczają się ze stadami, dlatego używają lekkich materiałów, np. skór i tkanin."
  },
  {
    "id": "R05_POW_07",
    "section": "Powtórka mieszana",
    "type": "riddle",
    "prompt": "Warstwa gruntu, w której przez cały czas utrzymuje się ujemna temperatura, to wieloletnia...",
    "options": null,
    "answer": "zmarzlina",
    "altAnswers": [
      "zmarzlina",
      "zmarzliną",
      "wieloletnia zmarzlina",
      "zmarzlina wieloletnia"
    ],
    "explanation": "Wieloletnia zmarzlina utrudnia budowę i sprzyja powstawaniu terenów podmokłych po rozmarznięciu powierzchni."
  },
  {
    "id": "R05_POW_08",
    "section": "Powtórka mieszana",
    "type": "fill_in",
    "prompt": "Drzewo oliwne, winorośl i cytrusy to uprawy klimatu __________.",
    "options": null,
    "answer": [
      "śródziemnomorskiego"
    ],
    "altAnswers": [
      [
        "śródziemnomorskiego",
        "podzwrotnikowego",
        "klimatu śródziemnomorskiego",
        "klimatu podzwrotnikowego"
      ]
    ],
    "explanation": "Na terenach rolniczych regionu śródziemnomorskiego dominują m.in. cytrusy, oliwki i winorośl."
  },
  {
    "id": "R05_POW_09",
    "section": "Powtórka mieszana",
    "type": "scenario",
    "prompt": "Uczeń analizuje klimatogram: lato jest gorące i suche, a zima łagodna i deszczowa. W jakim krajobrazie wykonano pomiary?",
    "options": [
      "śródziemnomorskim",
      "tundry",
      "pustyni lodowej",
      "tajgi",
      "najwyższych partii Himalajów",
      "lądolodu Antarktydy"
    ],
    "answer": 0,
    "explanation": "Gorące, suche lato i łagodna, deszczowa zima są cechami klimatu śródziemnomorskiego."
  },
  {
    "id": "R05_POW_10",
    "section": "Powtórka mieszana",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: welwiczia, opuncja, biegacz pustynny, oleander.",
    "options": null,
    "answer": "oleander",
    "explanation": "Welwiczia, opuncja i biegacz pustynny są roślinami pustyń gorących, a oleander jest rośliną śródziemnomorską."
  },
  {
    "id": "R05_POW_11",
    "section": "Powtórka mieszana",
    "type": "multi_select",
    "prompt": "Zaznacz zwierzęta, których chów lub hodowla są opisane jako ważne dla mieszkańców omawianych krajobrazów.",
    "options": [
      "renifery",
      "jaki",
      "owce i kozy w Himalajach",
      "wielbłądy wśród stad koczowników pustynnych",
      "niedźwiedzie grizzly",
      "lemingi"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Rozdział wspomina chów reniferów, hodowlę jaków oraz owiec i kóz w Himalajach, a także stada koczowników na pustyniach."
  },
  {
    "id": "R05_POW_12",
    "section": "Powtórka mieszana",
    "type": "scenario",
    "prompt": "Podróżnik widzi białe domy z okiennicami, gaje oliwne, winnice i ciepłe morze przyciągające turystów. Jaki krajobraz rozpoznaje?",
    "options": [
      "krajobraz śródziemnomorski",
      "pustynię lodową",
      "tajgę",
      "tundrę",
      "najwyższe piętro Himalajów",
      "lądolód Grenlandii"
    ],
    "answer": 0,
    "explanation": "Białe domy, oliwki, winorośl, ciepłe morze i turystyka są charakterystyczne dla regionu Morza Śródziemnego.",
    "image": "/img/r05_dom_srodziemnomorski_bialy.jpg"
  },
  {
    "id": "R05_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile szczytów w Himalajach przekracza wysokość 8000 m n.p.m.?",
    "options": [
      "10",
      "4",
      "8",
      "14",
      "25",
      "50"
    ],
    "answer": 0,
    "explanation": "W Himalajach znajduje się 10 z 14 szczytów świata przekraczających 8000 m n.p.m."
  },
  {
    "id": "R05_HARD_02",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Według rozdziału Mount Everest podnosi się o około 4 mm rocznie.",
    "options": null,
    "answer": true,
    "explanation": "Ta informacja pokazuje, że proces wypiętrzania Himalajów nadal trwa."
  },
  {
    "id": "R05_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Himalaje rozciągają się na długości około __________ km i oddzielają Azję Południową od chłodniejszej oraz bardziej suchej Azji __________.",
    "options": null,
    "answer": [
      "2500",
      "Środkowej"
    ],
    "altAnswers": [
      [
        "2500",
        "2 500",
        "2500 km",
        "2 500 km"
      ],
      [
        "Środkowej",
        "środkowej",
        "Azji Środkowej",
        "Azji środkowej"
      ]
    ],
    "explanation": "Rozdział podaje długość łańcucha himalajskiego oraz jego rolę jako bariery między Azją Południową a Środkową."
  },
  {
    "id": "R05_HARD_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz poprawne pary obszar - położenie opisane w dziale.",
    "options": [
      "Sahara - przecina ją zwrotnik Raka",
      "Wielka Pustynia Piaszczysta - przecina ją zwrotnik Koziorożca",
      "Grenlandia - największy obszar pustyni lodowej na półkuli północnej",
      "Antarktyda - pustynia lodowa na półkuli południowej",
      "Mojave - leży za kołem podbiegunowym południowym",
      "Himalaje - leżą na Antarktydzie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Dział porównuje położenie pustyń gorących przy zwrotnikach i pustyń lodowych w obszarach okołobiegunowych."
  },
  {
    "id": "R05_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz zwierzę pustyni gorącej z dokładniejszą strategią przetrwania.",
    "options": null,
    "left": [
      "oryks",
      "fenek",
      "skorpion",
      "moloch straszliwy"
    ],
    "right": [
      "podczas największych upałów przestaje wydzielać pot",
      "wykorzystuje duże uszy do termoregulacji",
      "jest aktywny głównie nocą i korzysta z wody zawartej w ofiarach",
      "zbiera krople rosy na kolcach i kieruje je kanalikami do pyska"
    ],
    "answer": {
      "oryks": "podczas największych upałów przestaje wydzielać pot",
      "fenek": "wykorzystuje duże uszy do termoregulacji",
      "skorpion": "jest aktywny głównie nocą i korzysta z wody zawartej w ofiarach",
      "moloch straszliwy": "zbiera krople rosy na kolcach i kieruje je kanalikami do pyska"
    },
    "explanation": "Te przykłady pokazują różne sposoby ograniczania przegrzania i zdobywania wody na pustyni gorącej."
  },
  {
    "id": "R05_HARD_06",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania problemów z podłożem na obszarze wieloletniej zmarzliny.",
    "options": null,
    "items": [
      "powstają rozlewiska i mnożą się owady",
      "w najcieplejszych miesiącach rozmarza wierzchnia warstwa gruntu",
      "podłoże staje się błotniste i grząskie",
      "przez cały rok głębiej zalega zamarznięta warstwa gruntu"
    ],
    "answer": [
      "przez cały rok głębiej zalega zamarznięta warstwa gruntu",
      "w najcieplejszych miesiącach rozmarza wierzchnia warstwa gruntu",
      "podłoże staje się błotniste i grząskie",
      "powstają rozlewiska i mnożą się owady"
    ],
    "explanation": "Wieloletnia zmarzlina utrudnia osadnictwo, bo rozmarzająca powierzchnia traci stabilność i tworzy podmokłe tereny.",
    "image": "/img/r05_wieloletnia_zmarzlina_budynek.jpg"
  },
  {
    "id": "R05_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Grupa osadników chce zbudować stałą wieś na Antarktydzie, argumentując, że ułatwiłoby to życie pracownikom stacji badawczej. Co wynika z treści rozdziału?",
    "options": [
      "budowa miast i wsi na Antarktydzie jest zabroniona, aby chronić środowisko przyrodnicze",
      "Antarktyda ma wiele stałych osad rybackich",
      "wieś można założyć tylko w oazie",
      "na Antarktydzie mieszkają głównie koczownicy ze stadami",
      "budowę ogranicza wyłącznie brak drewna oliwnego",
      "osadnictwo jest tam łatwiejsze niż w regionie Morza Śródziemnego"
    ],
    "answer": 0,
    "explanation": "Na Antarktydzie dopuszcza się głównie obecność naukowców i obsługi stacji, a zakaz budowy miast i wsi służy ochronie środowiska."
  },
  {
    "id": "R05_HARD_08",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: mirt, oleander, wawrzyn, olcha.",
    "options": null,
    "answer": "olcha",
    "explanation": "Mirt, oleander i wawrzyn są składnikami makii, a olcha jest drzewem liściastym spotykanym w tajdze, zwłaszcza na terenach podmokłych."
  },
  {
    "id": "R05_HARD_09",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Bezleśna formacja roślinna w strefie okołobiegunowej, z trawami, mchami, porostami i karłowatymi drzewami, to...",
    "options": null,
    "answer": "tundra",
    "altAnswers": [
      "tundra",
      "Tundra"
    ],
    "explanation": "Tundra występuje najdalej na północ na lądach i jest zbyt zimna dla dużych drzew."
  },
  {
    "id": "R05_HARD_10",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj warunek klimatyczny do właściwego krajobrazu.",
    "options": null,
    "items": [
      "gorące i suche lato, łagodna deszczowa zima",
      "bardzo niska temperatura przez cały rok",
      "mroźna zima i krótkie niezbyt ciepłe lato",
      "rozrzedzone powietrze i spadek temperatury z wysokością",
      "brak wody i bardzo wysoka temperatura"
    ],
    "categories": [
      "klimat śródziemnomorski",
      "pustynia lodowa",
      "tajga",
      "Himalaje",
      "pustynia gorąca"
    ],
    "answer": {
      "klimat śródziemnomorski": [
        "gorące i suche lato, łagodna deszczowa zima"
      ],
      "pustynia lodowa": [
        "bardzo niska temperatura przez cały rok"
      ],
      "tajga": [
        "mroźna zima i krótkie niezbyt ciepłe lato"
      ],
      "Himalaje": [
        "rozrzedzone powietrze i spadek temperatury z wysokością"
      ],
      "pustynia gorąca": [
        "brak wody i bardzo wysoka temperatura"
      ]
    },
    "explanation": "Każdy krajobraz ma własny zestaw barier klimatycznych, od suszy po mróz i warunki wysokogórskie."
  },
  {
    "id": "R05_HARD_11",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz informacje dotyczące tajgi, ale nie tundry.",
    "options": [
      "jest formacją leśną",
      "dominują w niej drzewa iglaste",
      "zajmuje większą powierzchnię niż tundra",
      "wiąże się z pozyskiwaniem drewna",
      "jest całkowicie pozbawiona dużych drzew",
      "dominują w niej mchy, porosty i karłowate odmiany drzew"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Tajga jest ogromnym lasem iglastym, natomiast tundra jest bezleśna i zdominowana przez niską roślinność."
  },
  {
    "id": "R05_HARD_12",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz miejsce lub region z opisanym w dziale sposobem dostosowania ludzi do warunków środowiska.",
    "options": null,
    "left": [
      "Dubaj",
      "Grenlandia",
      "obszary wieloletniej zmarzliny",
      "Himalaje"
    ],
    "right": [
      "wykorzystywanie instalacji odsalających wodę morską",
      "drewniane, ocieplone domy ze stromymi dachami",
      "stawianie budynków na palach oraz korzystanie z zamarzniętych rzek jako dróg",
      "tworzenie teras uprawnych i wykorzystywanie jaków"
    ],
    "answer": {
      "Dubaj": "wykorzystywanie instalacji odsalających wodę morską",
      "Grenlandia": "drewniane, ocieplone domy ze stromymi dachami",
      "obszary wieloletniej zmarzliny": "stawianie budynków na palach oraz korzystanie z zamarzniętych rzek jako dróg",
      "Himalaje": "tworzenie teras uprawnych i wykorzystywanie jaków"
    },
    "explanation": "Ludzie dostosowują budownictwo, rolnictwo, transport i pozyskiwanie wody do warunków każdego krajobrazu."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r05",
  number: 5,
  title: "Krajobrazy świata, część 2",
  icon: "🌍",
  sectionOrder: [
    "Pustynie gorące i lodowe",
    "Tajga i tundra",
    "Krajobraz śródziemnomorski",
    "Himalaje i ich mieszkańcy",
    "Powtórka mieszana",
    "Super trudne"
  ],
  sectionIcons: {
    "Pustynie gorące i lodowe": "🏜️",
    "Tajga i tundra": "🌲",
    "Krajobraz śródziemnomorski": "🫒",
    "Himalaje i ich mieszkańcy": "🏔️",
    "Powtórka mieszana": "🧭",
    "Super trudne": "🔥"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
