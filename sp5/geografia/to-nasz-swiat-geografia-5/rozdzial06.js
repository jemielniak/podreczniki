// Skróty sekcji (do identyfikatorów ćwiczeń):
//   WYS  = Występowanie i typy lasów
//   KLI  = Klimat i pory roku
//   ROS  = Roślinność lasów
//   ZWI  = Zwierzęta lasów
//   WYL  = Wylesianie i ochrona
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R06_WYS_01",
    "section": "Występowanie i typy lasów",
    "type": "single_choice",
    "prompt": "Jakie trzy typy lasów występują w strefie umiarkowanej według lekcji?",
    "options": [
      "liściaste, iglaste i mieszane",
      "równikowe, sawannowe i pustynne",
      "namorzynowe, palmowe i bambusowe",
      "tundrowe, stepowe i wysokogórskie",
      "bagienne, podzwrotnikowe i polarne",
      "górskie, równikowe i sawannowe"
    ],
    "answer": 0,
    "explanation": "W strefie umiarkowanej występują lasy liściaste, iglaste i mieszane; tu mowa o lasach liściastych i mieszanych."
  },
  {
    "id": "R06_WYS_02",
    "section": "Występowanie i typy lasów",
    "type": "true_false",
    "prompt": "Ta lekcja skupia się na lasach liściastych i mieszanych strefy umiarkowanej.",
    "options": null,
    "answer": true,
    "image": "r06_las_mieszany_panorama.jpg",
    "explanation": "W strefie umiarkowanej występują lasy liściaste, iglaste i mieszane, ale ta lekcja omawia przede wszystkim liściaste i mieszane."
  },
  {
    "id": "R06_WYS_03",
    "section": "Występowanie i typy lasów",
    "type": "multi_select",
    "prompt": "Zaznacz obszary, na których rosną lasy liściaste i mieszane strefy umiarkowanej.",
    "options": [
      "Europa",
      "Ameryka Północna",
      "część wschodniej Azji",
      "Antarktyda",
      "północna Afryka",
      "środek Australii"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Lasy liściaste i mieszane strefy umiarkowanej rosną w Europie, Ameryce Północnej i częściowo we wschodniej Azji."
  },
  {
    "id": "R06_WYS_04",
    "section": "Występowanie i typy lasów",
    "type": "fill_in",
    "prompt": "Lasy liściaste i mieszane rosną w Europie, __________ i częściowo we wschodniej __________.",
    "options": null,
    "answer": [
      "Ameryce Północnej",
      "Azji"
    ],
    "altAnswers": [
      [
        "Ameryce Północnej",
        "Ameryka Północna"
      ],
      [
        "Azji",
        "Azja"
      ]
    ],
    "explanation": "Występowanie tych lasów obejmuje Europę, Amerykę Północną i częściowo wschodnią Azję."
  },
  {
    "id": "R06_WYS_05",
    "section": "Występowanie i typy lasów",
    "type": "riddle",
    "prompt": "Jak nazywa się strefa klimatyczna, w której występują lasy liściaste, iglaste i mieszane?",
    "options": null,
    "answer": "strefa umiarkowana",
    "altAnswers": [
      "strefa umiarkowana",
      "umiarkowana",
      "strefa klimatyczna umiarkowana"
    ],
    "explanation": "Strefa umiarkowana to strefa klimatyczna zróżnicowana pod względem typów klimatu i krajobrazu."
  },
  {
    "id": "R06_WYS_06",
    "section": "Występowanie i typy lasów",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do lasów wymienionych w strefie umiarkowanej: liściaste, iglaste, mieszane, palmowe.",
    "options": null,
    "answer": "palmowe",
    "explanation": "Wymieniono lasy liściaste, iglaste i mieszane, a lasy palmowe nie są podane jako typ lasów strefy umiarkowanej."
  },
  {
    "id": "R06_WYS_07",
    "section": "Występowanie i typy lasów",
    "type": "match",
    "prompt": "Połącz obszar z informacją o występowaniu lasów liściastych i mieszanych.",
    "options": null,
    "left": [
      "Europa",
      "Ameryka Północna",
      "wschodnia Azja",
      "półkula południowa"
    ],
    "right": [
      "znaczne obszary w Europie",
      "znaczne obszary w Ameryce Północnej",
      "częściowe występowanie",
      "niewiele lasów przez dominację oceanu"
    ],
    "answer": {
      "Europa": "znaczne obszary w Europie",
      "Ameryka Północna": "znaczne obszary w Ameryce Północnej",
      "wschodnia Azja": "częściowe występowanie",
      "półkula południowa": "niewiele lasów przez dominację oceanu"
    },
    "explanation": "Wskazuje się znaczne obszary w Europie i Ameryce Północnej, częściowe występowanie we wschodniej Azji oraz niewiele takich lasów na półkuli południowej."
  },
  {
    "id": "R06_WYS_08",
    "section": "Występowanie i typy lasów",
    "type": "sort",
    "prompt": "Rozdziel typy lasów według tego, czy są głównym tematem tej lekcji.",
    "options": null,
    "items": [
      "lasy liściaste",
      "lasy mieszane",
      "lasy iglaste"
    ],
    "categories": [
      "główny temat lekcji",
      "występują w strefie umiarkowanej poza głównym tematem"
    ],
    "answer": {
      "główny temat lekcji": [
        "lasy liściaste",
        "lasy mieszane"
      ],
      "występują w strefie umiarkowanej poza głównym tematem": [
        "lasy iglaste"
      ]
    },
    "explanation": "Lekcja skupia się na lasach liściastych i mieszanych, choć w strefie umiarkowanej występują również lasy iglaste."
  },
  {
    "id": "R06_WYS_09",
    "section": "Występowanie i typy lasów",
    "type": "scenario",
    "prompt": "Na mapie świata uczeń zauważa, że lasów liściastych i mieszanych strefy umiarkowanej jest niewiele na półkuli południowej. Jak wyjaśnia się tę sytuację?",
    "options": [
      "dominuje tam ocean",
      "nie ma tam pór roku",
      "wszystkie obszary zajmuje pustynia",
      "rośnie tam wyłącznie tundra"
    ],
    "answer": 0,
    "image": "r06_mapa_lasy_umiarkowane.jpg",
    "explanation": "Na półkuli południowej jest ich niewiele, ponieważ w tamtejszej umiarkowanej strefie klimatycznej dominuje ocean."
  },
  {
    "id": "R06_WYS_10",
    "section": "Występowanie i typy lasów",
    "type": "single_choice",
    "prompt": "Który tytuł najlepiej pasuje do tej mapy?",
    "options": [
      "Lasy liściaste i mieszane strefy umiarkowanej",
      "Pustynie świata",
      "Tajga półkuli północnej",
      "Sawanny Afryki",
      "Obszary wiecznej zmarzliny",
      "Wilgotne lasy równikowe"
    ],
    "answer": 0,
    "explanation": "Mapa pokazuje zasięg lasów liściastych i mieszanych strefy umiarkowanej na świecie."
  },
  {
    "id": "R06_KLI_01",
    "section": "Klimat i pory roku",
    "type": "single_choice",
    "prompt": "W jakich klimatach rosną lasy strefy umiarkowanej?",
    "options": [
      "umiarkowanym ciepłym morskim i umiarkowanym ciepłym przejściowym",
      "równikowym wybitnie wilgotnym i podrównikowym",
      "zwrotnikowym suchym i polarnym",
      "umiarkowanym chłodnym i subpolarnym",
      "śródziemnomorskim i monsunowym",
      "górskim i pustynnym"
    ],
    "answer": 0,
    "explanation": "Lasy strefy umiarkowanej rosną w klimacie umiarkowanym ciepłym morskim i umiarkowanym ciepłym przejściowym."
  },
  {
    "id": "R06_KLI_02",
    "section": "Klimat i pory roku",
    "type": "true_false",
    "prompt": "W lasach strefy umiarkowanej występują cztery pory roku.",
    "options": null,
    "answer": true,
    "explanation": "Wymieniono wiosnę, lato, jesień i zimę jako cztery pory roku tej strefy."
  },
  {
    "id": "R06_KLI_03",
    "section": "Klimat i pory roku",
    "type": "multi_select",
    "prompt": "Zaznacz pory roku jako charakterystyczne dla tej strefy.",
    "options": [
      "wiosna",
      "lato",
      "jesień",
      "zima",
      "pora sucha",
      "pora deszczowa"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r06_cztery_pory_roku_las.jpg",
    "explanation": "Charakterystyczną cechą klimatu jest występowanie czterech pór roku: wiosny, lata, jesieni i zimy."
  },
  {
    "id": "R06_KLI_04",
    "section": "Klimat i pory roku",
    "type": "fill_in",
    "prompt": "W tej strefie lato jest __________, a zima jest __________.",
    "options": null,
    "answer": [
      "najcieplejsze",
      "najchłodniejsza"
    ],
    "altAnswers": [
      [
        "najcieplejsze",
        "najcieplejszą porą roku"
      ],
      [
        "najchłodniejsza",
        "najchłodniejszą porą roku"
      ]
    ],
    "explanation": "Lato jest najcieplejszą, a zima najchłodniejszą porą roku."
  },
  {
    "id": "R06_KLI_05",
    "section": "Klimat i pory roku",
    "type": "riddle",
    "prompt": "Jaki typ klimatu panuje w Polsce?",
    "options": null,
    "answer": "umiarkowany ciepły przejściowy",
    "altAnswers": [
      "umiarkowany ciepły przejściowy",
      "klimat umiarkowany ciepły przejściowy",
      "przejściowy"
    ],
    "image": "r06_klimatogram_krakow.jpg",
    "explanation": "W Polsce panuje klimat umiarkowany ciepły przejściowy."
  },
  {
    "id": "R06_KLI_06",
    "section": "Klimat i pory roku",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do pór roku: wiosna, lato, jesień, zima, pora deszczowa.",
    "options": null,
    "answer": "pora deszczowa",
    "explanation": "Pora deszczowa nie należy do czterech pór roku wymienionych dla klimatu umiarkowanego."
  },
  {
    "id": "R06_KLI_07",
    "section": "Klimat i pory roku",
    "type": "match",
    "prompt": "Połącz miejsce lub klimat z cechą opadów.",
    "options": null,
    "left": [
      "Polska",
      "zima w Polsce",
      "zachód Europy",
      "zima na zachodzie Europy"
    ],
    "right": [
      "więcej opadów latem",
      "mniejsze opady czasem jako śnieg",
      "większe i równomierne opady",
      "rzadszy śnieg i mróz"
    ],
    "answer": {
      "Polska": "więcej opadów latem",
      "zima w Polsce": "mniejsze opady czasem jako śnieg",
      "zachód Europy": "większe i równomierne opady",
      "zima na zachodzie Europy": "rzadszy śnieg i mróz"
    },
    "explanation": "W Polsce, w klimacie przejściowym, więcej pada latem, a zimą opady są mniejsze i mogą mieć postać śniegu; na zachodzie Europy w klimacie morskim opady są większe i równomierne."
  },
  {
    "id": "R06_KLI_08",
    "section": "Klimat i pory roku",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do typu klimatu.",
    "options": null,
    "items": [
      "więcej pada latem",
      "zimą opady są mniejsze",
      "opady są większe i równomierne",
      "śnieg i mróz zimą zdarzają się rzadziej"
    ],
    "categories": [
      "umiarkowany ciepły przejściowy",
      "umiarkowany ciepły morski"
    ],
    "answer": {
      "umiarkowany ciepły przejściowy": [
        "więcej pada latem",
        "zimą opady są mniejsze"
      ],
      "umiarkowany ciepły morski": [
        "opady są większe i równomierne",
        "śnieg i mróz zimą zdarzają się rzadziej"
      ]
    },
    "explanation": "Klimat umiarkowany ciepły przejściowy w Polsce ma więcej opadów latem i mniejsze zimą, a klimat umiarkowany ciepły morski ma opady większe i równomierne przez cały rok."
  },
  {
    "id": "R06_KLI_09",
    "section": "Klimat i pory roku",
    "type": "scenario",
    "prompt": "Uczeń opisuje obszar, gdzie opady są większe i równomierne przez cały rok, a zimą śnieg i mróz zdarzają się rzadziej. Który obszar pasuje do tego opisu?",
    "options": [
      "zachód Europy",
      "Polska",
      "półkula południowa",
      "wschodnia Azja"
    ],
    "answer": 0,
    "explanation": "Tak opisano zachód Europy, gdzie występuje klimat umiarkowany ciepły morski."
  },
  {
    "id": "R06_KLI_10",
    "section": "Klimat i pory roku",
    "type": "true_false",
    "prompt": "W klimacie umiarkowanym ciepłym morskim opady są mniejsze zimą i większe wyłącznie latem.",
    "options": null,
    "answer": false,
    "explanation": "To cecha klimatu umiarkowanego ciepłego przejściowego w Polsce; w morskim opady są większe i równomierne przez cały rok."
  },
  {
    "id": "R06_ROS_01",
    "section": "Roślinność lasów",
    "type": "single_choice",
    "prompt": "Który zestaw zawiera wyłącznie drzewa liściaste?",
    "options": [
      "dęby, buki, klony i lipy",
      "sosny, świerki, jodły i buki",
      "borowiki, maślaki, dęby i lipy",
      "muchomory, klony, jodły i świerki",
      "sosny, świerki, jodły i maślaki",
      "dęby, sosny, jodły i świerki"
    ],
    "answer": 0,
    "image": "r06_dab_i_buk.jpg",
    "explanation": "Jako drzewa liściaste podano dęby, buki, klony i lipy."
  },
  {
    "id": "R06_ROS_02",
    "section": "Roślinność lasów",
    "type": "multi_select",
    "prompt": "Zaznacz drzewa liściaste.",
    "options": [
      "dąb",
      "buk",
      "klon",
      "lipa",
      "sosna",
      "świerk"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r06_dab_i_buk.jpg",
    "explanation": "Wymieniono wśród drzew liściastych dęby, buki, klony i lipy."
  },
  {
    "id": "R06_ROS_03",
    "section": "Roślinność lasów",
    "type": "true_false",
    "prompt": "Sosny, świerki i jodły przez cały rok nie zrzucają igieł.",
    "options": null,
    "answer": true,
    "image": "r06_jodla_i_sosna.jpg",
    "explanation": "Drzewa iglaste, takie jak sosny, świerki i jodły, przez cały rok nie zrzucają igieł."
  },
  {
    "id": "R06_ROS_04",
    "section": "Roślinność lasów",
    "type": "fill_in",
    "prompt": "Jesienią liście drzew liściastych stają się __________, pomarańczowe i __________, a potem opadają.",
    "options": null,
    "answer": [
      "żółte",
      "czerwone"
    ],
    "altAnswers": [
      [
        "żółte",
        "żółtego koloru"
      ],
      [
        "czerwone",
        "czerwonego koloru"
      ]
    ],
    "image": "r06_las_jesienia.jpg",
    "explanation": "Jesienią liście zmieniają barwę na żółtą, pomarańczową i czerwoną, po czym opadają."
  },
  {
    "id": "R06_ROS_05",
    "section": "Roślinność lasów",
    "type": "sequence",
    "prompt": "Ułóż zmiany wyglądu lasu liściastego w kolejności od wiosny do zimy.",
    "options": null,
    "items": [
      "jesienią liście żółkną i opadają",
      "zimą drzewa nie mają liści",
      "latem korony drzew są zielone",
      "wiosną rośliny znów się zielenią"
    ],
    "answer": [
      "wiosną rośliny znów się zielenią",
      "latem korony drzew są zielone",
      "jesienią liście żółkną i opadają",
      "zimą drzewa nie mają liści"
    ],
    "image": "r06_cztery_pory_roku_las.jpg",
    "explanation": "Wiosną przyroda się odradza, latem korony drzew są zielone, jesienią liście zmieniają barwę i opadają, a zimą drzewa są pozbawione liści."
  },
  {
    "id": "R06_ROS_06",
    "section": "Roślinność lasów",
    "type": "riddle",
    "prompt": "Podaj nazwę jadalnego grzyba.",
    "options": null,
    "answer": "borowik",
    "altAnswers": [
      "borowik",
      "borowiki",
      "borowik szlachetny",
      "maślak",
      "maślaki"
    ],
    "image": "r06_grzyby_lesne.jpg",
    "explanation": "Jako jadalne grzyby podano między innymi borowiki i maślaki."
  },
  {
    "id": "R06_ROS_07",
    "section": "Roślinność lasów",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do drzew liściastych: dąb, buk, klon, lipa, jodła.",
    "options": null,
    "answer": "jodła",
    "explanation": "Jodła jest drzewem iglastym, a dąb, buk, klon i lipa są podane jako drzewa liściaste."
  },
  {
    "id": "R06_ROS_08",
    "section": "Roślinność lasów",
    "type": "match",
    "prompt": "Połącz przykład z grupą, do której należy.",
    "options": null,
    "left": [
      "dąb",
      "sosna",
      "borowik",
      "muchomor"
    ],
    "right": [
      "drzewo liściaste",
      "drzewo iglaste",
      "grzyb jadalny",
      "grzyb trujący"
    ],
    "answer": {
      "dąb": "drzewo liściaste",
      "sosna": "drzewo iglaste",
      "borowik": "grzyb jadalny",
      "muchomor": "grzyb trujący"
    },
    "image": "r06_grzyby_lesne.jpg",
    "explanation": "Dąb jest przykładem drzewa liściastego, sosna drzewa iglastego, borowik grzyba jadalnego, a muchomor grzyba trującego."
  },
  {
    "id": "R06_ROS_09",
    "section": "Roślinność lasów",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do grup.",
    "options": null,
    "items": [
      "dąb",
      "buk",
      "sosna",
      "świerk",
      "borowik",
      "muchomor"
    ],
    "categories": [
      "drzewa liściaste",
      "drzewa iglaste",
      "grzyby"
    ],
    "answer": {
      "drzewa liściaste": [
        "dąb",
        "buk"
      ],
      "drzewa iglaste": [
        "sosna",
        "świerk"
      ],
      "grzyby": [
        "borowik",
        "muchomor"
      ]
    },
    "explanation": "Występują przykłady drzew liściastych, iglastych oraz grzybów spotykanych w lasach."
  },
  {
    "id": "R06_ROS_10",
    "section": "Roślinność lasów",
    "type": "scenario",
    "prompt": "Jesienią obserwujesz drzewa, których liście stają się żółte, pomarańczowe i czerwone, a potem opadają. O jakich drzewach mówi się?",
    "options": [
      "o drzewach liściastych",
      "o drzewach iglastych",
      "o grzybach jadalnych",
      "o mchu leśnym"
    ],
    "answer": 0,
    "image": "r06_las_jesienia.jpg",
    "explanation": "Tak zmieniają się drzewa liściaste; zimą są zupełnie pozbawione liści."
  },
  {
    "id": "R06_ROS_11",
    "section": "Roślinność lasów",
    "type": "true_false",
    "prompt": "Wiosną przyroda się odradza i rośliny znów się zielenią.",
    "options": null,
    "answer": true,
    "explanation": "Po zimie wiosną przyroda się odradza i rośliny ponownie się zielenią."
  },
  {
    "id": "R06_ZWI_01",
    "section": "Zwierzęta lasów",
    "type": "single_choice",
    "prompt": "Jak opisuje się zwierzęta lasów strefy umiarkowanej?",
    "options": [
      "wiele różnych ptaków, mniej liczne ssaki i duże ilości owadów",
      "wyłącznie duże ssaki i brak ptaków",
      "tylko owady, bez ptaków i ssaków",
      "głównie ryby i płazy morskie",
      "same zwierzęta hodowlane",
      "tylko ptaki wędrowne"
    ],
    "answer": 0,
    "explanation": "Lasy te zamieszkuje wiele różnych ptaków, mniej liczne ssaki oraz duże ilości owadów."
  },
  {
    "id": "R06_ZWI_02",
    "section": "Zwierzęta lasów",
    "type": "multi_select",
    "prompt": "Zaznacz zwierzęta pokazane lub wymienione przy lasach strefy umiarkowanej.",
    "options": [
      "jeleń szlachetny",
      "dzik euroazjatycki",
      "borsuk europejski",
      "wiewiórka pospolita",
      "goryl",
      "tukan"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r06_zwierzeta_lesne.jpg",
    "explanation": "Na stronie o zwierzętach pokazano między innymi jelenia szlachetnego, dzika euroazjatyckiego, borsuka europejskiego i wiewiórkę pospolitą."
  },
  {
    "id": "R06_ZWI_03",
    "section": "Zwierzęta lasów",
    "type": "true_false",
    "prompt": "W lasach strefy umiarkowanej występują duże ilości owadów.",
    "options": null,
    "answer": true,
    "explanation": "Oprócz ptaków i ssaków występują tam duże ilości owadów."
  },
  {
    "id": "R06_ZWI_04",
    "section": "Zwierzęta lasów",
    "type": "fill_in",
    "prompt": "Lasy strefy umiarkowanej są zamieszkiwane przez wiele różnych __________ oraz mniej liczne __________.",
    "options": null,
    "answer": [
      "ptaków",
      "ssaki"
    ],
    "altAnswers": [
      [
        "ptaków",
        "ptaki"
      ],
      [
        "ssaki",
        "ssaków"
      ]
    ],
    "explanation": "Tekst mówi o wielu różnych ptakach oraz mniej licznych ssakach."
  },
  {
    "id": "R06_ZWI_05",
    "section": "Zwierzęta lasów",
    "type": "riddle",
    "prompt": "Jaki dzięcioł jest podpisany na ilustracji zwierząt?",
    "options": null,
    "answer": "dzięcioł duży",
    "altAnswers": [
      "dzięcioł duży",
      "dziecioł duży",
      "dzięcioł"
    ],
    "image": "r06_ptaki_lasow_umiarkowanych.jpg",
    "explanation": "Na ilustracji obok innych ptaków podpisano dzięcioła dużego."
  },
  {
    "id": "R06_ZWI_06",
    "section": "Zwierzęta lasów",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do wymienionych ssaków leśnych: jeleń szlachetny, dzik euroazjatycki, borsuk europejski, sikora bogatka.",
    "options": null,
    "answer": "sikora bogatka",
    "image": "r06_ptaki_lasow_umiarkowanych.jpg",
    "explanation": "Sikora bogatka jest ptakiem, a pozostałe przykłady to ssaki pokazane przy lesie strefy umiarkowanej."
  },
  {
    "id": "R06_ZWI_07",
    "section": "Zwierzęta lasów",
    "type": "match",
    "prompt": "Połącz zwierzę z opisem z ilustracji lub tekstu.",
    "options": null,
    "left": [
      "uszatka zwyczajna",
      "sikora bogatka",
      "jeż zachodni",
      "dzik euroazjatycki"
    ],
    "right": [
      "sowa",
      "ptak z gałęzi",
      "ssak kolczasty",
      "ssak leśny"
    ],
    "answer": {
      "uszatka zwyczajna": "sowa",
      "sikora bogatka": "ptak z gałęzi",
      "jeż zachodni": "ssak kolczasty",
      "dzik euroazjatycki": "ssak leśny"
    },
    "explanation": "Ilustracja przedstawia między innymi uszatkę zwyczajną jako sowę, sikorę bogatkę jako ptaka oraz ssaki takie jak jeż i dzik."
  },
  {
    "id": "R06_ZWI_08",
    "section": "Zwierzęta lasów",
    "type": "sort",
    "prompt": "Podziel przykłady zwierząt na ptaki i ssaki.",
    "options": null,
    "items": [
      "kos zwyczajny",
      "sikora bogatka",
      "uszatka zwyczajna",
      "jeleń szlachetny",
      "wiewiórka pospolita",
      "jeż zachodni"
    ],
    "categories": [
      "ptaki",
      "ssaki"
    ],
    "answer": {
      "ptaki": [
        "kos zwyczajny",
        "sikora bogatka",
        "uszatka zwyczajna"
      ],
      "ssaki": [
        "jeleń szlachetny",
        "wiewiórka pospolita",
        "jeż zachodni"
      ]
    },
    "explanation": "Kosy, sikory i uszatki to ptaki, a jelenie, wiewiórki i jeże są przykładami ssaków pokazanych przy lasach strefy umiarkowanej."
  },
  {
    "id": "R06_ZWI_09",
    "section": "Zwierzęta lasów",
    "type": "scenario",
    "prompt": "Podczas spaceru po lesie uczeń widzi wiewiórkę, jeża, dzika i kilka ptaków. Który krajobraz najlepiej pasuje do takiego zestawu zwierząt?",
    "options": [
      "lasy strefy umiarkowanej",
      "pustynia piaszczysta",
      "lodowiec",
      "wybrzeże morskie"
    ],
    "answer": 0,
    "image": "r06_zwierzeta_lesne.jpg",
    "explanation": "Takie zwierzęta są pokazane i wymienione przy lasach strefy umiarkowanej."
  },
  {
    "id": "R06_WYL_01",
    "section": "Wylesianie i ochrona",
    "type": "single_choice",
    "prompt": "Dlaczego lasy liściaste i mieszane zajmują dziś mniejsze przestrzenie niż przed wiekami?",
    "options": [
      "zostały wycięte w związku z działalnością człowieka",
      "zniknęły wyłącznie z powodu braku zimy",
      "zamieniły się naturalnie w ocean",
      "zostały całkowicie przykryte lodem",
      "przestały rosnąć przez brak zwierząt",
      "zniknęły przez brak grzybów"
    ],
    "answer": 0,
    "image": "r06_wylesianie_pole_uprawne.jpg",
    "explanation": "Wiele obszarów leśnych wycięto w związku z działalnością człowieka, a w ich miejscu utworzono pola uprawne."
  },
  {
    "id": "R06_WYL_02",
    "section": "Wylesianie i ochrona",
    "type": "multi_select",
    "prompt": "Zaznacz przyczyny wylesiania.",
    "options": [
      "tworzenie pól uprawnych",
      "tworzenie przestrzeni pod zabudowę",
      "pozyskiwanie drewna",
      "sadzenie nowych drzew",
      "zmiana barwy liści jesienią",
      "duże ilości owadów"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r06_wylesianie_pole_uprawne.jpg",
    "explanation": "Do przyczyn wylesiania zaliczono tworzenie pól uprawnych, przestrzeni pod zabudowę oraz pozyskiwanie drewna."
  },
  {
    "id": "R06_WYL_03",
    "section": "Wylesianie i ochrona",
    "type": "true_false",
    "prompt": "Wycinka lasów bardzo negatywnie wpływa na środowisko.",
    "options": null,
    "answer": true,
    "explanation": "Wycinka lasów bardzo negatywnie wpływa na środowisko."
  },
  {
    "id": "R06_WYL_04",
    "section": "Wylesianie i ochrona",
    "type": "fill_in",
    "prompt": "Ubywa roślinności, która pochłania __________ i produkuje __________.",
    "options": null,
    "answer": [
      "dwutlenek węgla",
      "tlen"
    ],
    "altAnswers": [
      [
        "dwutlenek węgla",
        "CO2",
        "dwutlenku węgla"
      ],
      [
        "tlen",
        "tlenu"
      ]
    ],
    "explanation": "Roślinność pochłania dwutlenek węgla i produkuje tlen, dlatego jej ubywanie jest szkodliwe."
  },
  {
    "id": "R06_WYL_05",
    "section": "Wylesianie i ochrona",
    "type": "riddle",
    "prompt": "Jak nazywa się wycinanie lasów przez człowieka?",
    "options": null,
    "answer": "wylesianie",
    "altAnswers": [
      "wylesianie",
      "wycinka lasów",
      "wycinanie lasów"
    ],
    "explanation": "Wycinanie lasów przez człowieka nazywa się wylesianiem."
  },
  {
    "id": "R06_WYL_06",
    "section": "Wylesianie i ochrona",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do przyczyn wylesiania: pola uprawne, zabudowa, pozyskiwanie drewna, cztery pory roku.",
    "options": null,
    "answer": "cztery pory roku",
    "explanation": "Cztery pory roku są cechą klimatu, a nie przyczyną wylesiania."
  },
  {
    "id": "R06_WYL_07",
    "section": "Wylesianie i ochrona",
    "type": "match",
    "prompt": "Połącz działanie lub skutek z wyjaśnieniem.",
    "options": null,
    "left": [
      "wycięcie lasu pod pola",
      "tworzenie miejsca pod zabudowę",
      "pozyskiwanie drewna",
      "ubytek roślinności"
    ],
    "right": [
      "powstają pola uprawne",
      "ubywa przestrzeni leśnej",
      "jedna z przyczyn wylesiania",
      "mniej pochłaniania dwutlenku węgla"
    ],
    "answer": {
      "wycięcie lasu pod pola": "powstają pola uprawne",
      "tworzenie miejsca pod zabudowę": "ubywa przestrzeni leśnej",
      "pozyskiwanie drewna": "jedna z przyczyn wylesiania",
      "ubytek roślinności": "mniej pochłaniania dwutlenku węgla"
    },
    "explanation": "Wycinka może prowadzić do tworzenia pól uprawnych i zabudowy, a skutkiem ubytku roślinności jest między innymi mniejsze pochłanianie dwutlenku węgla."
  },
  {
    "id": "R06_WYL_08",
    "section": "Wylesianie i ochrona",
    "type": "sort",
    "prompt": "Rozdziel elementy na przyczyny i skutki wylesiania.",
    "options": null,
    "items": [
      "tworzenie pól uprawnych",
      "zabudowa",
      "pozyskiwanie drewna",
      "zwierzęta tracą miejsce życia",
      "ubywa roślinności",
      "pogarsza się komfort życia ludzi"
    ],
    "categories": [
      "przyczyny wylesiania",
      "skutki wylesiania"
    ],
    "answer": {
      "przyczyny wylesiania": [
        "tworzenie pól uprawnych",
        "zabudowa",
        "pozyskiwanie drewna"
      ],
      "skutki wylesiania": [
        "zwierzęta tracą miejsce życia",
        "ubywa roślinności",
        "pogarsza się komfort życia ludzi"
      ]
    },
    "explanation": "Przyczynami są między innymi pola uprawne, zabudowa i pozyskiwanie drewna, a skutkami utrata miejsc życia zwierząt i ubywanie roślinności."
  },
  {
    "id": "R06_WYL_09",
    "section": "Wylesianie i ochrona",
    "type": "scenario",
    "prompt": "Po wycięciu fragmentu lasu zwierzęta muszą szukać innego schronienia. Który skutek wylesiania opisuje ta sytuacja?",
    "options": [
      "zwierzęta tracą miejsce życia",
      "liście zmieniają barwę",
      "opady są równomierne",
      "zima staje się najcieplejsza"
    ],
    "answer": 0,
    "image": "r06_sciete_pnie_las.jpg",
    "explanation": "Zwierzęta tracą miejsce życia, gdy wycina się lasy."
  },
  {
    "id": "R06_WYL_10",
    "section": "Wylesianie i ochrona",
    "type": "true_false",
    "prompt": "Wycinka lasów nie szkodzi ludziom ani środowisku, jeśli powstają pola uprawne.",
    "options": null,
    "answer": false,
    "image": "r06_sciete_pnie_las.jpg",
    "explanation": "To fałsz: wskazuje się negatywny wpływ na środowisko i pogorszenie komfortu życia ludzi."
  },
  {
    "id": "R06_HARD_01",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz zdania zgodne z mapą i opisem występowania lasów liściastych i mieszanych.",
    "options": [
      "Rosną na znacznych obszarach Europy.",
      "Rosną na znacznych obszarach Ameryki Północnej.",
      "Rosną częściowo we wschodniej Azji.",
      "Na półkuli południowej jest ich bardzo dużo.",
      "Występują wyłącznie w Australii."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Te lasy rosną na znacznych obszarach Europy i Ameryki Północnej oraz częściowo we wschodniej Azji; na półkuli południowej jest ich niewiele."
  },
  {
    "id": "R06_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które zdanie najdokładniej odróżnia klimat przejściowy w Polsce od klimatu morskiego na zachodzie Europy?",
    "options": [
      "W Polsce więcej pada latem, a na zachodzie Europy opady są większe i równomierne przez cały rok.",
      "W obu miejscach opady występują tylko zimą.",
      "W Polsce nie ma zimy, a na zachodzie Europy nie ma lata.",
      "W klimacie morskim zimą zawsze pada wyłącznie śnieg.",
      "W klimacie przejściowym nie występują opady.",
      "Na zachodzie Europy opady są zawsze mniejsze niż w Polsce."
    ],
    "answer": 0,
    "explanation": "W Polsce, w klimacie przejściowym, więcej pada latem, a zimą opady są mniejsze; na zachodzie Europy, w klimacie morskim, opady są większe i równomierne przez cały rok."
  },
  {
    "id": "R06_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Na zachodzie Europy występuje klimat umiarkowany ciepły __________, w którym opady są większe i __________ przez cały rok.",
    "options": null,
    "answer": [
      "morski",
      "równomierne"
    ],
    "altAnswers": [
      [
        "morski",
        "morskim"
      ],
      [
        "równomierne",
        "równomiernie rozłożone"
      ]
    ],
    "explanation": "Opis dotyczy klimatu umiarkowanego ciepłego morskiego: opady są tam większe i równomierne przez cały rok."
  },
  {
    "id": "R06_HARD_04",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz porę roku z opisem dotyczącym lasów liściastych i mieszanych.",
    "options": null,
    "left": [
      "wiosna",
      "lato",
      "jesień",
      "zima"
    ],
    "right": [
      "rośliny znów się zielenią",
      "najcieplejsza pora roku",
      "liście zmieniają barwę i opadają",
      "najchłodniejsza pora roku"
    ],
    "answer": {
      "wiosna": "rośliny znów się zielenią",
      "lato": "najcieplejsza pora roku",
      "jesień": "liście zmieniają barwę i opadają",
      "zima": "najchłodniejsza pora roku"
    },
    "explanation": "Opisuje się rytm roku: lato jest najcieplejsze, zima najchłodniejsza, jesienią liście zmieniają barwę i opadają, a wiosną rośliny znów się zielenią."
  },
  {
    "id": "R06_HARD_05",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do trzech grup.",
    "options": null,
    "items": [
      "dąb",
      "jodła",
      "borowik",
      "muchomor",
      "jeleń szlachetny",
      "sikora bogatka"
    ],
    "categories": [
      "drzewa",
      "grzyby",
      "zwierzęta"
    ],
    "answer": {
      "drzewa": [
        "dąb",
        "jodła"
      ],
      "grzyby": [
        "borowik",
        "muchomor"
      ],
      "zwierzęta": [
        "jeleń szlachetny",
        "sikora bogatka"
      ]
    },
    "explanation": "Dąb i jodła są drzewami, borowik i muchomor to grzyby, a jeleń i sikora to zwierzęta lasów strefy umiarkowanej."
  },
  {
    "id": "R06_HARD_06",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż roczny cykl wyglądu drzew liściastych od wiosny do zimy.",
    "options": null,
    "items": [
      "zimą drzewa są pozbawione liści",
      "latem korony są zielone",
      "wiosną rośliny się zielenią",
      "jesienią liście zmieniają barwę i opadają"
    ],
    "answer": [
      "wiosną rośliny się zielenią",
      "latem korony są zielone",
      "jesienią liście zmieniają barwę i opadają",
      "zimą drzewa są pozbawione liści"
    ],
    "image": "r06_las_jesienia.jpg",
    "explanation": "Wiosną rośliny się zielenią, latem korony są zielone, jesienią liście żółkną, pomarańczowieją i czerwienieją, a zimą drzewa są pozbawione liści."
  },
  {
    "id": "R06_HARD_07",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Na półkuli południowej lasów liściastych i mieszanych strefy umiarkowanej jest niewiele, bo w tamtejszej umiarkowanej strefie klimatycznej dominuje ocean.",
    "options": null,
    "answer": true,
    "explanation": "Dominacja oceanu ogranicza tam występowanie tych lasów."
  },
  {
    "id": "R06_HARD_08",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do funkcji roślinności wymienionych przy skutkach wylesiania: pochłanianie dwutlenku węgla, produkcja tlenu, magazynowanie wody, rzadkie mrozy.",
    "options": null,
    "answer": "rzadkie mrozy",
    "explanation": "Roślinność pochłania dwutlenek węgla, produkuje tlen i magazynuje wodę; rzadkie mrozy dotyczą opisu klimatu morskiego, nie funkcji roślinności."
  },
  {
    "id": "R06_HARD_09",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się typ lasu, w którym obok drzew liściastych mogą rosnąć drzewa iglaste?",
    "options": null,
    "answer": "las mieszany",
    "altAnswers": [
      "las mieszany",
      "lasy mieszane",
      "mieszany"
    ],
    "explanation": "Las mieszany łączy drzewa liściaste i iglaste, co pasuje do opisu lasów."
  },
  {
    "id": "R06_HARD_10",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Rozpoznajesz krajobraz po opisie: cztery pory roku, lato najcieplejsze, zima najchłodniejsza, drzewa liściaste gubią liście przed zimą, a iglaste nie zrzucają igieł. Który krajobraz to opisuje?",
    "options": [
      "krajobraz lasów strefy umiarkowanej",
      "krajobraz pustyni gorącej",
      "krajobraz lodowy",
      "krajobraz sawanny"
    ],
    "answer": 0,
    "explanation": "To opis krajobrazu lasów strefy umiarkowanej."
  },
  {
    "id": "R06_HARD_11",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz skutki wylesiania.",
    "options": [
      "ubywa roślinności",
      "zwierzęta tracą miejsce do życia",
      "pogarsza się komfort życia ludzi",
      "liście stają się zielone latem",
      "opady są równomierne przez cały rok"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Podsumowanie mówi, że przez wycinkę ubywa roślinności, zwierzęta tracą miejsce do życia i pogarsza się komfort życia ludzi."
  },
  {
    "id": "R06_HARD_12",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który ciąg najpełniej pokazuje związek między wylesianiem a środowiskiem?",
    "options": [
      "mniej roślinności, mniej pochłaniania dwutlenku węgla, mniej produkcji tlenu i mniej magazynowania wody",
      "więcej drzew, więcej miejsc życia zwierząt i więcej wody",
      "zmiana barwy liści, więcej igieł i więcej grzybów",
      "równomierne opady, rzadszy śnieg i więcej mrozu",
      "więcej oceanów, więcej pól lodowych i mniej lata",
      "więcej ptaków, mniej owadów i brak ssaków"
    ],
    "answer": 0,
    "explanation": "Wycinka zmniejsza ilość roślinności, a roślinność pochłania dwutlenek węgla, produkuje tlen i magazynuje wodę."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r06",
  number: 6,
  title: "Krajobraz lasów strefy umiarkowanej",
  icon: "🌳",
  sectionOrder: [
    "Występowanie i typy lasów",
    "Klimat i pory roku",
    "Roślinność lasów",
    "Zwierzęta lasów",
    "Wylesianie i ochrona"
  ],
  sectionIcons: {
    "Występowanie i typy lasów": "🗺️",
    "Klimat i pory roku": "🌦️",
    "Roślinność lasów": "🌿",
    "Zwierzęta lasów": "🦌",
    "Wylesianie i ochrona": "🪓"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
