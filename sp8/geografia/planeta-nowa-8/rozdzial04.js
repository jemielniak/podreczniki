// Skróty sekcji (do identyfikatorów ćwiczeń):
//   POZ  = Położenie i rzeźba Australii
//   KLI  = Klimat, wody i przyroda
//   OCE  = Oceania i Nowa Zelandia
//   LUD  = Ludność Australii
//   GOS  = Gospodarka Australii
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_POZ_01",
    "section": "Położenie i rzeźba Australii",
    "type": "single_choice",
    "prompt": "Jaka jest powierzchnia Australii?",
    "options": [
      "7,7 mln km²",
      "5,2 mln km²",
      "9,4 mln km²",
      "12,1 mln km²",
      "3,8 mln km²",
      "15,6 mln km²"
    ],
    "answer": 0,
    "explanation": "Australia ma powierzchnię około 7,7 mln km² i jest najmniejszym kontynentem na Ziemi."
  },
  {
    "id": "R04_POZ_02",
    "section": "Położenie i rzeźba Australii",
    "type": "true_false",
    "prompt": "Australia należy do najniżej położonych kontynentów, a ponad połowa jej powierzchni leży poniżej 300 m n.p.m.",
    "options": null,
    "answer": true,
    "explanation": "Ponad połowę powierzchni Australii stanowią obszary nieprzekraczające 300 m n.p.m."
  },
  {
    "id": "R04_POZ_03",
    "section": "Położenie i rzeźba Australii",
    "type": "riddle",
    "prompt": "Najwyższy szczyt kontynentu australijskiego, położony w Alpach Australijskich, to...",
    "options": null,
    "answer": "Góra Kościuszki",
    "altAnswers": [
      "Góra Kościuszki",
      "Kościuszki",
      "Gora Kosciuszki"
    ],
    "explanation": "Góra Kościuszki ma 2228 m n.p.m. i leży w południowej części Wielkich Gór Wododziałowych.",
    "image": "r04_gora_kosciuszki.jpg"
  },
  {
    "id": "R04_POZ_04",
    "section": "Położenie i rzeźba Australii",
    "type": "single_choice",
    "prompt": "Który obiekt znajduje się w najniżej położonym punkcie Australii?",
    "options": [
      "Jezioro Eyre",
      "Góra Kościuszki",
      "Wielki Basen Artezyjski",
      "Góry MacDonnella",
      "Wielka Pustynia Piaszczysta",
      "Alpy Australijskie"
    ],
    "answer": 0,
    "explanation": "Najniżej położonym punktem Australii jest słone jezioro Eyre, leżące 15 m p.p.m.",
    "image": "r04_jezioro_eyre.jpg"
  },
  {
    "id": "R04_POZ_05",
    "section": "Położenie i rzeźba Australii",
    "type": "match",
    "prompt": "Połącz formę ukształtowania powierzchni z jej położeniem lub cechą.",
    "options": null,
    "left": [
      "Wyżyna Zachodnioaustralijska",
      "Góry Musgrave i MacDonnella",
      "Wielki Basen Artezyjski",
      "Wielkie Góry Wododziałowe"
    ],
    "right": [
      "zachodnia część kontynentu",
      "środkowa część kontynentu",
      "pas nizin na wschód od gór środkowej Australii",
      "wzdłuż wschodniego wybrzeża"
    ],
    "answer": {
      "Wyżyna Zachodnioaustralijska": "zachodnia część kontynentu",
      "Góry Musgrave i MacDonnella": "środkowa część kontynentu",
      "Wielki Basen Artezyjski": "pas nizin na wschód od gór środkowej Australii",
      "Wielkie Góry Wododziałowe": "wzdłuż wschodniego wybrzeża"
    },
    "explanation": "Wyżyna Zachodnioaustralijska zajmuje znaczną część zachodu, niewysokie góry Musgrave i MacDonnella leżą w centrum, na wschód od nich rozciąga się pas nizin z Wielkim Basenem Artezyjskim, a Wielkie Góry Wododziałowe biegną przy wschodnim wybrzeżu."
  },
  {
    "id": "R04_POZ_06",
    "section": "Położenie i rzeźba Australii",
    "type": "odd_one_out",
    "prompt": "Wskaż obiekt, który nie jest pustynią: Wielka Pustynia Piaszczysta, Pustynia Gibsona, Wielka Pustynia Wiktorii, Wielkie Góry Wododziałowe.",
    "options": null,
    "answer": "Wielkie Góry Wododziałowe",
    "explanation": "Wielkie Góry Wododziałowe są pasmem górskim. Pozostałe trzy nazwy oznaczają pustynie Australii."
  },
  {
    "id": "R04_POZ_07",
    "section": "Położenie i rzeźba Australii",
    "type": "fill_in",
    "prompt": "Góra Kościuszki wznosi się na __________ m n.p.m., a jezioro Eyre leży __________ m p.p.m.",
    "options": null,
    "answer": [
      "2228",
      "15"
    ],
    "altAnswers": [
      [
        "2228",
        "2228 m",
        "2228 m n.p.m."
      ],
      [
        "15",
        "15 m",
        "15 m p.p.m."
      ]
    ],
    "explanation": "Najwyższy szczyt Australii ma 2228 m n.p.m., a najniżej położony punkt kontynentu znajduje się 15 m poniżej poziomu morza."
  },
  {
    "id": "R04_POZ_08",
    "section": "Położenie i rzeźba Australii",
    "type": "multi_select",
    "prompt": "Zaznacz pustynie leżące na obszarze Wyżyny Zachodnioaustralijskiej.",
    "options": [
      "Wielka Pustynia Piaszczysta",
      "Pustynia Gibsona",
      "Wielka Pustynia Wiktorii",
      "Wielki Basen Artezyjski",
      "Alpy Australijskie"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Na obszarze Wyżyny Zachodnioaustralijskiej występują m.in. Wielka Pustynia Piaszczysta, Pustynia Gibsona i Wielka Pustynia Wiktorii."
  },
  {
    "id": "R04_POZ_09",
    "section": "Położenie i rzeźba Australii",
    "type": "scenario",
    "prompt": "Podróżnik przemierza zachodnią część Australii. Widzi rozległe równiny i wielkie obszary pustynne. Na jakiej jednostce ukształtowania powierzchni najprawdopodobniej się znajduje?",
    "options": [
      "Wyżyna Zachodnioaustralijska",
      "Alpy Australijskie",
      "Wielkie Góry Wododziałowe",
      "Wielki Basen Artezyjski",
      "Góry MacDonnella",
      "Tasmania"
    ],
    "answer": 0,
    "explanation": "Znaczną część zachodniej Australii zajmuje Wyżyna Zachodnioaustralijska z rozległymi równinami i pustyniami."
  },
  {
    "id": "R04_POZ_10",
    "section": "Położenie i rzeźba Australii",
    "type": "sequence",
    "prompt": "Ułóż obiekty od zachodu ku wschodowi Australii.",
    "options": null,
    "items": [
      "Wielkie Góry Wododziałowe",
      "Góry Musgrave i MacDonnella",
      "Wyżyna Zachodnioaustralijska",
      "pas nizin z Wielkim Basenem Artezyjskim"
    ],
    "answer": [
      "Wyżyna Zachodnioaustralijska",
      "Góry Musgrave i MacDonnella",
      "pas nizin z Wielkim Basenem Artezyjskim",
      "Wielkie Góry Wododziałowe"
    ],
    "explanation": "Od zachodu ku wschodowi występują kolejno rozległa wyżyna, niewysokie góry środkowej Australii, pas nizin i Wielkie Góry Wododziałowe."
  },
  {
    "id": "R04_POZ_11",
    "section": "Położenie i rzeźba Australii",
    "type": "single_choice",
    "prompt": "Poniżej jakiej wysokości leży ponad połowa powierzchni Australii?",
    "options": [
      "300 m n.p.m.",
      "100 m n.p.m.",
      "600 m n.p.m.",
      "1000 m n.p.m.",
      "1500 m n.p.m.",
      "2000 m n.p.m."
    ],
    "answer": 0,
    "explanation": "Ponad połowa powierzchni Australii nie przekracza 300 m n.p.m., dlatego kontynent należy do najniższych na świecie."
  },
  {
    "id": "R04_POZ_12",
    "section": "Położenie i rzeźba Australii",
    "type": "sort",
    "prompt": "Przyporządkuj obiekty do części Australii, w której są położone.",
    "options": null,
    "items": [
      "Góry Musgrave",
      "Góry MacDonnella",
      "Wielkie Góry Wododziałowe",
      "Alpy Australijskie"
    ],
    "categories": [
      "środkowa Australia",
      "wschodnia i południowo-wschodnia Australia"
    ],
    "answer": {
      "środkowa Australia": [
        "Góry Musgrave",
        "Góry MacDonnella"
      ],
      "wschodnia i południowo-wschodnia Australia": [
        "Wielkie Góry Wododziałowe",
        "Alpy Australijskie"
      ]
    },
    "explanation": "Góry Musgrave i MacDonnella leżą w środkowej Australii, natomiast Wielkie Góry Wododziałowe ciągną się wzdłuż wschodniego wybrzeża, a ich południową częścią są Alpy Australijskie."
  },
  {
    "id": "R04_KLI_01",
    "section": "Klimat, wody i przyroda",
    "type": "single_choice",
    "prompt": "Jaki typ klimatu dominuje w centralnej części Australii?",
    "options": [
      "zwrotnikowy suchy i skrajnie suchy",
      "równikowy wilgotny",
      "umiarkowany chłodny",
      "podzwrotnikowy morski wilgotny",
      "okołobiegunowy",
      "górski na całym obszarze"
    ],
    "answer": 0,
    "explanation": "Centralna część Australii leży w strefie klimatów zwrotnikowych, a niemal na całym tym obszarze występuje klimat suchy i skrajnie suchy."
  },
  {
    "id": "R04_KLI_02",
    "section": "Klimat, wody i przyroda",
    "type": "true_false",
    "prompt": "W centralnej Australii roczna suma opadów rzadko osiąga 250 mm.",
    "options": null,
    "answer": true,
    "explanation": "Wnętrze kontynentu jest bardzo suche; roczna suma opadów rzadko dochodzi tam do 250 mm."
  },
  {
    "id": "R04_KLI_03",
    "section": "Klimat, wody i przyroda",
    "type": "multi_select",
    "prompt": "Zaznacz strefy klimatyczne, w których leży Australia.",
    "options": [
      "równikowa",
      "zwrotnikowa",
      "podzwrotnikowa",
      "umiarkowana ciepła",
      "okołobiegunowa",
      "umiarkowana chłodna"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Rozciągłość południkowa Australii sprawia, że kontynent leży w czterech strefach: równikowej, zwrotnikowej, podzwrotnikowej i umiarkowanej ciepłej."
  },
  {
    "id": "R04_KLI_04",
    "section": "Klimat, wody i przyroda",
    "type": "fill_in",
    "prompt": "Na północy Australii roczne sumy opadów przekraczają __________ mm, a w centrum rzadko osiągają __________ mm.",
    "options": null,
    "answer": [
      "1000",
      "250"
    ],
    "altAnswers": [
      [
        "1000",
        "1000 mm",
        "ponad 1000"
      ],
      [
        "250",
        "250 mm"
      ]
    ],
    "explanation": "Północ jest znacznie wilgotniejsza i znajduje się pod wpływem cyrkulacji monsunowej, natomiast wnętrze kontynentu jest bardzo suche."
  },
  {
    "id": "R04_KLI_05",
    "section": "Klimat, wody i przyroda",
    "type": "riddle",
    "prompt": "Grubolistne, kolczaste zarośla z przewagą eukaliptusów i akacji, typowe dla klimatu podrównikowego suchego, to...",
    "options": null,
    "answer": "skrub",
    "altAnswers": [
      "skrub",
      "scrub"
    ],
    "explanation": "Skrub tworzą kolczaste, grubolistne zarośla, w których dominują eukaliptusy i akacje.",
    "image": "r04_skrub.jpg"
  },
  {
    "id": "R04_KLI_06",
    "section": "Klimat, wody i przyroda",
    "type": "match",
    "prompt": "Połącz typ klimatu z charakterystyczną formacją roślinną lub krajobrazem.",
    "options": null,
    "left": [
      "podzwrotnikowy śródziemnomorski",
      "podrównikowy suchy",
      "podrównikowy wilgotny",
      "zwrotnikowy suchy"
    ],
    "right": [
      "makia",
      "skrub",
      "lasy namorzynowe",
      "pustynie i półpustynie"
    ],
    "answer": {
      "podzwrotnikowy śródziemnomorski": "makia",
      "podrównikowy suchy": "skrub",
      "podrównikowy wilgotny": "lasy namorzynowe",
      "zwrotnikowy suchy": "pustynie i półpustynie"
    },
    "explanation": "Makia występuje w klimacie śródziemnomorskim, skrub w podrównikowym suchym, namorzyny na wybrzeżach w klimacie podrównikowym wilgotnym, a pustynie i półpustynie w klimacie zwrotnikowym suchym."
  },
  {
    "id": "R04_KLI_07",
    "section": "Klimat, wody i przyroda",
    "type": "single_choice",
    "prompt": "Co sprawia, że wody podziemne w basenach artezyjskich znajdują się pod ciśnieniem?",
    "options": [
      "nieckowate ułożenie warstw skalnych",
      "stałe zamarzanie gruntu",
      "działalność wulkaniczna",
      "wysokie pływy morskie",
      "obecność lodowców",
      "bardzo strome doliny rzeczne"
    ],
    "answer": 0,
    "explanation": "Nieckowate ułożenie warstw skalnych powoduje, że wody podziemne są pod ciśnieniem i po przewierceniu warstwy nieprzepuszczalnej mogą samoczynnie wypływać.",
    "image": "r04_basen_artezyjski.jpg"
  },
  {
    "id": "R04_KLI_08",
    "section": "Klimat, wody i przyroda",
    "type": "true_false",
    "prompt": "Rzeki epizodyczne występujące we wnętrzu Australii są nazywane creeks.",
    "options": null,
    "answer": true,
    "explanation": "W suchym wnętrzu Australii występują rzeki okresowe i epizodyczne, nazywane creeks."
  },
  {
    "id": "R04_KLI_09",
    "section": "Klimat, wody i przyroda",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie należy do wód Australii: Murray, Darling, Eyre, Wielka Pustynia Wiktorii.",
    "options": null,
    "answer": "Wielka Pustynia Wiktorii",
    "explanation": "Murray i Darling to rzeki, a Eyre jest jeziorem. Wielka Pustynia Wiktorii jest formą pustynną, a nie wodą.",
    "image": "r04_jezioro_eyre.jpg"
  },
  {
    "id": "R04_KLI_10",
    "section": "Klimat, wody i przyroda",
    "type": "scenario",
    "prompt": "Wiercenie przebija warstwę nieprzepuszczalną, a woda podziemna sama wypływa na powierzchnię. Z jakim zjawiskiem mamy do czynienia?",
    "options": [
      "wypływem artezyjskim",
      "przypływem morskim",
      "powodzią lodowcową",
      "erupcją gejzeru",
      "monsunem",
      "erozją rzeczną"
    ],
    "answer": 0,
    "explanation": "W basenie artezyjskim woda znajduje się pod ciśnieniem, dlatego po przewierceniu warstwy nieprzepuszczalnej może samoczynnie wypłynąć.",
    "image": "r04_basen_artezyjski.jpg"
  },
  {
    "id": "R04_KLI_11",
    "section": "Klimat, wody i przyroda",
    "type": "sort",
    "prompt": "Przyporządkuj obiekty do rodzaju zasobów wodnych.",
    "options": null,
    "items": [
      "Murray",
      "Darling",
      "Eyre",
      "Wielki Basen Artezyjski"
    ],
    "categories": [
      "rzeki",
      "jeziora",
      "wody podziemne"
    ],
    "answer": {
      "rzeki": [
        "Murray",
        "Darling"
      ],
      "jeziora": [
        "Eyre"
      ],
      "wody podziemne": [
        "Wielki Basen Artezyjski"
      ]
    },
    "explanation": "Murray i Darling tworzą największy system rzeczny Australii, Eyre jest największym słonym jeziorem, a Wielki Basen Artezyjski jest ogromnym zbiornikiem wód podziemnych."
  },
  {
    "id": "R04_KLI_12",
    "section": "Klimat, wody i przyroda",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania samoczynnego wypływu wody ze studni artezyjskiej.",
    "options": null,
    "items": [
      "przewiercenie warstwy nieprzepuszczalnej",
      "samoczynny wypływ wody na powierzchnię",
      "zgromadzenie wody w nieckowato ułożonych warstwach",
      "powstanie ciśnienia w wodach podziemnych"
    ],
    "answer": [
      "zgromadzenie wody w nieckowato ułożonych warstwach",
      "powstanie ciśnienia w wodach podziemnych",
      "przewiercenie warstwy nieprzepuszczalnej",
      "samoczynny wypływ wody na powierzchnię"
    ],
    "explanation": "Nieckowate ułożenie warstw sprzyja gromadzeniu wody pod ciśnieniem; po przewierceniu warstwy nieprzepuszczalnej woda samoczynnie wypływa.",
    "image": "r04_basen_artezyjski.jpg"
  },
  {
    "id": "R04_OCE_01",
    "section": "Oceania i Nowa Zelandia",
    "type": "single_choice",
    "prompt": "Który zestaw zawiera cztery regiony geograficzne Oceanii?",
    "options": [
      "Melanezja, Mikronezja, Polinezja, Nowa Zelandia",
      "Melanezja, Tasmania, Polinezja, Australia",
      "Mikronezja, Azja, Melanezja, Nowa Gwinea",
      "Polinezja, Antarktyda, Nowa Zelandia, Tasmania",
      "Melanezja, Australia, Hawaje, Nowa Zelandia",
      "Mikronezja, Europa, Polinezja, Nowa Zelandia"
    ],
    "answer": 0,
    "explanation": "W obrębie Oceanii wyróżnia się Melanezję, Mikronezję, Polinezję oraz Nową Zelandię."
  },
  {
    "id": "R04_OCE_02",
    "section": "Oceania i Nowa Zelandia",
    "type": "match",
    "prompt": "Połącz wyspę lub terytorium z regionem Oceanii.",
    "options": null,
    "left": [
      "Papua-Nowa Gwinea",
      "Guam",
      "Hawaje",
      "Nowa Zelandia"
    ],
    "right": [
      "Melanezja",
      "Mikronezja",
      "Polinezja",
      "Nowa Zelandia"
    ],
    "answer": {
      "Papua-Nowa Gwinea": "Melanezja",
      "Guam": "Mikronezja",
      "Hawaje": "Polinezja",
      "Nowa Zelandia": "Nowa Zelandia"
    },
    "explanation": "Papua-Nowa Gwinea leży w Melanezji, Guam w Mikronezji, Hawaje w Polinezji, a Nowa Zelandia tworzy odrębny region geograficzny Oceanii."
  },
  {
    "id": "R04_OCE_03",
    "section": "Oceania i Nowa Zelandia",
    "type": "true_false",
    "prompt": "Niemal przez środek Oceanii przebiega południk 180°, związany z międzynarodową linią zmiany daty.",
    "options": null,
    "answer": true,
    "explanation": "Południk 180° przebiega niemal przez środek Oceanii i wyznacza międzynarodową linię zmiany daty."
  },
  {
    "id": "R04_OCE_04",
    "section": "Oceania i Nowa Zelandia",
    "type": "fill_in",
    "prompt": "Cztery regiony Oceanii to __________, __________, __________ oraz __________.",
    "options": null,
    "answer": [
      "Melanezja",
      "Mikronezja",
      "Polinezja",
      "Nowa Zelandia"
    ],
    "altAnswers": [
      [
        "Melanezja",
        "Melanezję"
      ],
      [
        "Mikronezja",
        "Mikronezję"
      ],
      [
        "Polinezja",
        "Polinezję"
      ],
      [
        "Nowa Zelandia",
        "Nową Zelandię"
      ]
    ],
    "explanation": "Podział geograficzny Oceanii obejmuje Melanezję, Mikronezję, Polinezję i Nową Zelandię."
  },
  {
    "id": "R04_OCE_05",
    "section": "Oceania i Nowa Zelandia",
    "type": "riddle",
    "prompt": "Wyspa koralowa w kształcie pierścienia albo ciąg takich wysp to...",
    "options": null,
    "answer": "atol",
    "altAnswers": [
      "atol",
      "atol koralowy"
    ],
    "explanation": "Atol jest wyspą koralową w kształcie pierścienia lub ciągiem takich wysp; takie formy są charakterystyczne dla Oceanii.",
    "image": "r04_atol_koralowy.jpg"
  },
  {
    "id": "R04_OCE_06",
    "section": "Oceania i Nowa Zelandia",
    "type": "single_choice",
    "prompt": "Jakie warunki wód Oceanii sprzyjają rozwojowi koralowców?",
    "options": [
      "wysoka temperatura i znaczne zasolenie",
      "niska temperatura i małe zasolenie",
      "stała pokrywa lodowa",
      "bardzo niska temperatura i duża głębokość",
      "częste zamarzanie powierzchni",
      "silne ochładzanie przez lodowce"
    ],
    "answer": 0,
    "explanation": "Wysoka temperatura wody morskiej i znaczne zasolenie tworzą dobre warunki dla koralowców i rozwoju raf.",
    "image": "r04_atol_koralowy.jpg"
  },
  {
    "id": "R04_OCE_07",
    "section": "Oceania i Nowa Zelandia",
    "type": "sort",
    "prompt": "Przyporządkuj wyspy lub terytoria do regionów Oceanii.",
    "options": null,
    "items": [
      "Fidżi",
      "Papua-Nowa Gwinea",
      "Guam",
      "Wyspy Marshalla",
      "Hawaje",
      "Samoa"
    ],
    "categories": [
      "Melanezja",
      "Mikronezja",
      "Polinezja"
    ],
    "answer": {
      "Melanezja": [
        "Fidżi",
        "Papua-Nowa Gwinea"
      ],
      "Mikronezja": [
        "Guam",
        "Wyspy Marshalla"
      ],
      "Polinezja": [
        "Hawaje",
        "Samoa"
      ]
    },
    "explanation": "Fidżi i Papua-Nowa Gwinea należą do Melanezji, Guam i Wyspy Marshalla do Mikronezji, a Hawaje i Samoa do Polinezji."
  },
  {
    "id": "R04_OCE_08",
    "section": "Oceania i Nowa Zelandia",
    "type": "multi_select",
    "prompt": "Zaznacz cechy środowiska Oceanii.",
    "options": [
      "tysiące wysp na Oceanie Spokojnym",
      "liczne wyspy pochodzenia wulkanicznego",
      "rafy i atole koralowe",
      "przewaga klimatów równikowych i zwrotnikowych",
      "rozległe lądolody na większości wysp",
      "brak aktywnych wulkanów"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Oceanię tworzą tysiące wysp na Pacyfiku; wiele z nich ma pochodzenie wulkaniczne, występują tam rafy i atole, a większość obszaru leży pod wpływem klimatów równikowych i zwrotnikowych."
  },
  {
    "id": "R04_OCE_09",
    "section": "Oceania i Nowa Zelandia",
    "type": "scenario",
    "prompt": "Na których wyspach Oceanii część wulkanów pozostaje aktywna do dziś?",
    "options": [
      "Hawaje",
      "Tasmania",
      "Wyspa Południowa",
      "Wyspa Północna",
      "Bora-Bora",
      "Guam"
    ],
    "answer": 0,
    "explanation": "Na Hawajach część wulkanów pozostaje aktywna do dziś."
  },
  {
    "id": "R04_OCE_10",
    "section": "Oceania i Nowa Zelandia",
    "type": "match",
    "prompt": "Połącz element krajobrazu Nowej Zelandii z właściwą informacją.",
    "options": null,
    "left": [
      "Wyspa Południowa",
      "Góra Cooka",
      "Nowa Zelandia",
      "Alpy Południowe"
    ],
    "right": [
      "zajmowana w znacznej części przez góry",
      "3754 m n.p.m.",
      "miejsce zdjęć do trylogii Władca Pierścieni",
      "pasmo górskie na Wyspie Południowej"
    ],
    "answer": {
      "Wyspa Południowa": "zajmowana w znacznej części przez góry",
      "Góra Cooka": "3754 m n.p.m.",
      "Nowa Zelandia": "miejsce zdjęć do trylogii Władca Pierścieni",
      "Alpy Południowe": "pasmo górskie na Wyspie Południowej"
    },
    "explanation": "Znaczną część Wyspy Południowej zajmują Alpy Południowe, których najwyższym szczytem jest Góra Cooka o wysokości 3754 m n.p.m.; Nowa Zelandia była też plenerem filmowym.",
    "image": "r04_alpy_poludniowe.jpg"
  },
  {
    "id": "R04_OCE_11",
    "section": "Oceania i Nowa Zelandia",
    "type": "single_choice",
    "prompt": "W którym kraju powstały liczne plenerowe ujęcia do filmowej trylogii Władca Pierścieni?",
    "options": [
      "Nowa Zelandia",
      "Australia",
      "Papua-Nowa Gwinea",
      "Fidżi",
      "Samoa",
      "Tonga"
    ],
    "answer": 0,
    "explanation": "Różnorodne krajobrazy Nowej Zelandii wykorzystano jako plenery przy realizacji filmowej trylogii Władca Pierścieni."
  },
  {
    "id": "R04_OCE_12",
    "section": "Oceania i Nowa Zelandia",
    "type": "odd_one_out",
    "prompt": "Wskaż nazwę, która nie jest regionem geograficznym Oceanii: Melanezja, Mikronezja, Polinezja, Tasmania.",
    "options": null,
    "answer": "Tasmania",
    "explanation": "Melanezja, Mikronezja i Polinezja są regionami Oceanii. Tasmania jest wyspą u południowo-wschodnich wybrzeży Australii."
  },
  {
    "id": "R04_LUD_01",
    "section": "Ludność Australii",
    "type": "single_choice",
    "prompt": "Jaka jest przeciętna gęstość zaludnienia Australii?",
    "options": [
      "nieco ponad 3 os./km²",
      "około 15 os./km²",
      "około 30 os./km²",
      "około 60 os./km²",
      "ponad 100 os./km²",
      "około 250 os./km²"
    ],
    "answer": 0,
    "explanation": "Australia ma najmniejszą gęstość zaludnienia wśród zamieszkanych kontynentów — nieco ponad 3 osoby na km²."
  },
  {
    "id": "R04_LUD_02",
    "section": "Ludność Australii",
    "type": "true_false",
    "prompt": "Wnętrze Australii jest niemal bezludne przede wszystkim z powodu suchego i gorącego klimatu pustynnego.",
    "options": null,
    "answer": true,
    "explanation": "Warunki we wnętrzu kontynentu, zwłaszcza gorący i suchy klimat, są niesprzyjające osadnictwu."
  },
  {
    "id": "R04_LUD_03",
    "section": "Ludność Australii",
    "type": "fill_in",
    "prompt": "Ponad __________% Australijczyków mieszka w miastach, a Sydney liczy ponad __________ mln mieszkańców.",
    "options": null,
    "answer": [
      "85",
      "5,3"
    ],
    "altAnswers": [
      [
        "85",
        "85%"
      ],
      [
        "5,3",
        "5,3 mln",
        "5.3",
        "5.3 mln"
      ]
    ],
    "explanation": "Australia jest silnie zurbanizowana: ponad 85% mieszkańców żyje w miastach, a Sydney ma ponad 5,3 mln mieszkańców.",
    "image": "r04_opera_sydney.jpg"
  },
  {
    "id": "R04_LUD_04",
    "section": "Ludność Australii",
    "type": "single_choice",
    "prompt": "Które miasto jest stolicą Związku Australijskiego?",
    "options": [
      "Canberra",
      "Sydney",
      "Melbourne",
      "Brisbane",
      "Perth",
      "Adelaide"
    ],
    "answer": 0,
    "explanation": "Stolicą Związku Australijskiego jest Canberra, położona w Australijskim Terytorium Stołecznym."
  },
  {
    "id": "R04_LUD_05",
    "section": "Ludność Australii",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki sprzyjające osadnictwu na południowo-wschodnim wybrzeżu Australii.",
    "options": [
      "dostępność słodkiej wody",
      "łagodny klimat",
      "bardzo suchy klimat pustynny",
      "brak rzek",
      "stała pokrywa lodowa"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Południowo-wschodnie wybrzeże ma korzystne warunki osadnicze dzięki dostępności słodkiej wody i łagodniejszemu klimatowi."
  },
  {
    "id": "R04_LUD_06",
    "section": "Ludność Australii",
    "type": "match",
    "prompt": "Połącz obszar z informacją o ludności.",
    "options": null,
    "left": [
      "Tasmania",
      "Terytorium Północne",
      "Wiktoria i Nowa Południowa Walia wraz z ACT",
      "Sydney"
    ],
    "right": [
      "ponad 20% mieszkańców ma ponad 65 lat",
      "około 8% mieszkańców ma ponad 65 lat",
      "blisko 60% ludności kraju",
      "ponad 5,3 mln mieszkańców"
    ],
    "answer": {
      "Tasmania": "ponad 20% mieszkańców ma ponad 65 lat",
      "Terytorium Północne": "około 8% mieszkańców ma ponad 65 lat",
      "Wiktoria i Nowa Południowa Walia wraz z ACT": "blisko 60% ludności kraju",
      "Sydney": "ponad 5,3 mln mieszkańców"
    },
    "explanation": "Najwyższy odsetek osób starszych występuje na Tasmanii, najniższy w Terytorium Północnym; blisko 60% ludności mieszka w Wiktorii, Nowej Południowej Walii i ACT, a Sydney ma ponad 5,3 mln mieszkańców."
  },
  {
    "id": "R04_LUD_07",
    "section": "Ludność Australii",
    "type": "riddle",
    "prompt": "Rdzenni mieszkańcy Australii to...",
    "options": null,
    "answer": "Aborygeni",
    "altAnswers": [
      "Aborygeni",
      "Aborygenowie",
      "aborygeni"
    ],
    "explanation": "Aborygeni są rdzennymi mieszkańcami Australii i stanowią około 3% społeczeństwa.",
    "image": "r04_aborygeni.jpg"
  },
  {
    "id": "R04_LUD_08",
    "section": "Ludność Australii",
    "type": "true_false",
    "prompt": "Współcześnie w Australii żyje ponad 700 tys. Aborygenów, czyli około 3% mieszkańców kraju.",
    "options": null,
    "answer": true,
    "explanation": "Liczba Aborygenów przekracza 700 tys., co odpowiada w przybliżeniu 3% ludności Australii.",
    "image": "r04_aborygeni.jpg"
  },
  {
    "id": "R04_LUD_09",
    "section": "Ludność Australii",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia i zjawiska związane z ludnością Australii w kolejności od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "populacja Aborygenów spada do około 60 tys. w 1900 roku",
      "współcześnie populacja Aborygenów przekracza 700 tys.",
      "od XVIII wieku Australia jest wykorzystywana przez Brytyjczyków jako kolonia karna",
      "w drugiej połowie XIX i na początku XX wieku nasila się dobrowolny napływ imigrantów z Europy"
    ],
    "answer": [
      "od XVIII wieku Australia jest wykorzystywana przez Brytyjczyków jako kolonia karna",
      "w drugiej połowie XIX i na początku XX wieku nasila się dobrowolny napływ imigrantów z Europy",
      "populacja Aborygenów spada do około 60 tys. w 1900 roku",
      "współcześnie populacja Aborygenów przekracza 700 tys."
    ],
    "explanation": "Kolonia karna funkcjonowała od XVIII wieku, dobrowolna imigracja silnie wzrosła w drugiej połowie XIX i na początku XX wieku, w 1900 roku liczba Aborygenów wynosiła około 60 tys., a współcześnie przekracza 700 tys."
  },
  {
    "id": "R04_LUD_10",
    "section": "Ludność Australii",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo z innego regionu pochodzenia współczesnych imigrantów do Australii: Chiny, Indie, Wietnam, Nowa Zelandia.",
    "options": null,
    "answer": "Nowa Zelandia",
    "explanation": "Chiny, Indie i Wietnam to przykłady azjatyckich kierunków pochodzenia imigrantów, a Nowa Zelandia leży w Oceanii."
  },
  {
    "id": "R04_LUD_11",
    "section": "Ludność Australii",
    "type": "scenario",
    "prompt": "Rodzina wybiera miejsce osiedlenia w Australii. Zależy jej na łagodniejszym klimacie i łatwym dostępie do słodkiej wody. Która część kraju najlepiej odpowiada tym warunkom?",
    "options": [
      "południowo-wschodnie wybrzeże",
      "suche wnętrze kontynentu",
      "Wielka Pustynia Piaszczysta",
      "Pustynia Gibsona",
      "środkowa część Wyżyny Zachodnioaustralijskiej",
      "okolice jeziora Eyre"
    ],
    "answer": 0,
    "explanation": "Najkorzystniejsze warunki osadnicze występują na południowo-wschodnim wybrzeżu, gdzie dostępna jest słodka woda i panuje łagodniejszy klimat."
  },
  {
    "id": "R04_LUD_12",
    "section": "Ludność Australii",
    "type": "sort",
    "prompt": "Przyporządkuj informacje do działań kolonizatorów albo ich skutków dla Aborygenów.",
    "options": null,
    "items": [
      "wypieranie na nieurodzajne tereny",
      "zmuszanie do ciężkiej pracy",
      "spadek liczebności rdzennej ludności",
      "duża śmiertelność z powodu chorób przywiezionych z Europy"
    ],
    "categories": [
      "działania kolonizatorów",
      "skutki dla Aborygenów"
    ],
    "answer": {
      "działania kolonizatorów": [
        "wypieranie na nieurodzajne tereny",
        "zmuszanie do ciężkiej pracy"
      ],
      "skutki dla Aborygenów": [
        "spadek liczebności rdzennej ludności",
        "duża śmiertelność z powodu chorób przywiezionych z Europy"
      ]
    },
    "explanation": "Kolonizatorzy wypierali Aborygenów i zmuszali ich do ciężkiej pracy; wraz z chorobami przywiezionymi z Europy prowadziło to do dużej śmiertelności i spadku liczebności rdzennej ludności."
  },
  {
    "id": "R04_GOS_01",
    "section": "Gospodarka Australii",
    "type": "single_choice",
    "prompt": "Co stanowi podstawę australijskiego rolnictwa?",
    "options": [
      "chów zwierząt",
      "uprawa ryżu",
      "sadownictwo tropikalne",
      "leśnictwo",
      "rybołówstwo",
      "uprawa kawy"
    ],
    "answer": 0,
    "explanation": "Podstawą rolnictwa Australii jest chów zwierząt, czemu sprzyja bardzo duży udział łąk i pastwisk.",
    "image": "r04_merynosy.jpg"
  },
  {
    "id": "R04_GOS_02",
    "section": "Gospodarka Australii",
    "type": "true_false",
    "prompt": "Łąki i pastwiska zajmują ponad 40% powierzchni Australii.",
    "options": null,
    "answer": true,
    "explanation": "Pastwiska zajmują ponad 40% powierzchni kraju, dlatego chów zwierząt odgrywa w rolnictwie bardzo dużą rolę."
  },
  {
    "id": "R04_GOS_03",
    "section": "Gospodarka Australii",
    "type": "fill_in",
    "prompt": "Grunty orne zajmują __________% powierzchni Australii, usługi wytwarzają ponad __________% PKB, a zatrudnienie w usługach wynosi około __________% pracujących.",
    "options": null,
    "answer": [
      "4,1",
      "70",
      "75"
    ],
    "altAnswers": [
      [
        "4,1",
        "4,1%",
        "4.1"
      ],
      [
        "70",
        "70%",
        "ponad 70"
      ],
      [
        "75",
        "75%",
        "około 75"
      ]
    ],
    "explanation": "Grunty orne stanowią zaledwie 4,1% powierzchni kraju. Usługi wytwarzają ponad 70% PKB i zatrudniają około 75% pracujących."
  },
  {
    "id": "R04_GOS_04",
    "section": "Gospodarka Australii",
    "type": "multi_select",
    "prompt": "Zaznacz rośliny uprawiane na gruntach ornych Australii.",
    "options": [
      "pszenica",
      "bawełna",
      "winorośl",
      "owoce cytrusowe",
      "herbata",
      "żyto"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Na australijskich gruntach ornych uprawia się przede wszystkim pszenicę, bawełnę, winorośl i owoce cytrusowe."
  },
  {
    "id": "R04_GOS_05",
    "section": "Gospodarka Australii",
    "type": "match",
    "prompt": "Połącz element gospodarki z właściwą informacją.",
    "options": null,
    "left": [
      "merynosy",
      "bydło",
      "rudy żelaza",
      "boksyty i węgiel kamienny"
    ],
    "right": [
      "odmiany owiec cenione za wełnę",
      "chów w wielkoobszarowych gospodarstwach",
      "pierwsze miejsce Australii w światowym eksporcie",
      "drugie miejsce Australii w światowym eksporcie"
    ],
    "answer": {
      "merynosy": "odmiany owiec cenione za wełnę",
      "bydło": "chów w wielkoobszarowych gospodarstwach",
      "rudy żelaza": "pierwsze miejsce Australii w światowym eksporcie",
      "boksyty i węgiel kamienny": "drugie miejsce Australii w światowym eksporcie"
    },
    "explanation": "Australia słynie z merynosów i chowu bydła; zajmuje pierwsze miejsce w eksporcie rud żelaza oraz drugie w eksporcie boksytów i węgla kamiennego.",
    "image": "r04_merynosy.jpg"
  },
  {
    "id": "R04_GOS_06",
    "section": "Gospodarka Australii",
    "type": "single_choice",
    "prompt": "W eksporcie którego surowca Australia zajmuje pierwsze miejsce na świecie?",
    "options": [
      "rud żelaza",
      "boksytów",
      "węgla kamiennego",
      "rud miedzi",
      "uranu",
      "srebra"
    ],
    "answer": 0,
    "explanation": "Australia zajmuje pierwsze miejsce na świecie pod względem eksportu rud żelaza.",
    "image": "r04_kopalnia_rudy_zelaza.jpg"
  },
  {
    "id": "R04_GOS_07",
    "section": "Gospodarka Australii",
    "type": "true_false",
    "prompt": "Chiny i Indie należą do czołowych odbiorców surowców wydobywanych w Australii.",
    "options": null,
    "answer": true,
    "explanation": "Chiny i Indie są czołowymi partnerami gospodarczymi Australii i ważnymi odbiorcami wydobywanych surowców."
  },
  {
    "id": "R04_GOS_08",
    "section": "Gospodarka Australii",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest surowcem mineralnym ważnym dla australijskiego przemysłu wydobywczego: rudy żelaza, boksyty, węgiel kamienny, pszenica.",
    "options": null,
    "answer": "pszenica",
    "explanation": "Pszenica jest rośliną uprawną. Rudy żelaza, boksyty i węgiel kamienny są ważnymi surowcami mineralnymi Australii."
  },
  {
    "id": "R04_GOS_09",
    "section": "Gospodarka Australii",
    "type": "scenario",
    "prompt": "Firma usługowa chce ulokować nowe centrum w części Australii, gdzie skupiają się główne ośrodki usługowe i wielkie miasta. Który region będzie najbardziej typowym wyborem?",
    "options": [
      "południowo-wschodnia Australia",
      "środek kontynentu",
      "Wielka Pustynia Piaszczysta",
      "Pustynia Gibsona",
      "okolice jeziora Eyre",
      "najbardziej sucha część Wyżyny Zachodnioaustralijskiej"
    ],
    "answer": 0,
    "explanation": "Główne centra usługowe są zlokalizowane w pobliżu wielkich miast na południowym wschodzie kraju."
  },
  {
    "id": "R04_GOS_10",
    "section": "Gospodarka Australii",
    "type": "sort",
    "prompt": "Przyporządkuj surowce do grup.",
    "options": null,
    "items": [
      "węgiel kamienny",
      "węgiel brunatny",
      "ropa naftowa",
      "gaz ziemny",
      "rudy żelaza",
      "rudy miedzi",
      "rudy niklu",
      "boksyty"
    ],
    "categories": [
      "surowce energetyczne",
      "surowce metaliczne"
    ],
    "answer": {
      "surowce energetyczne": [
        "węgiel kamienny",
        "węgiel brunatny",
        "ropa naftowa",
        "gaz ziemny"
      ],
      "surowce metaliczne": [
        "rudy żelaza",
        "rudy miedzi",
        "rudy niklu",
        "boksyty"
      ]
    },
    "explanation": "Do surowców energetycznych zalicza się m.in. węgle, ropę naftową i gaz ziemny, natomiast rudy żelaza, miedzi, niklu i boksyty są surowcami metalicznymi."
  },
  {
    "id": "R04_GOS_11",
    "section": "Gospodarka Australii",
    "type": "match",
    "prompt": "Połącz sektor gospodarki z charakterystyczną cechą.",
    "options": null,
    "left": [
      "usługi",
      "przemysł wydobywczy",
      "rolnictwo",
      "przetwórstwo przemysłowe"
    ],
    "right": [
      "ponad 70% PKB",
      "wykorzystuje bogate złoża surowców",
      "opiera się przede wszystkim na chowie zwierząt",
      "obejmuje m.in. produkcję stali chemikaliów żywności i zaawansowanych technologii"
    ],
    "answer": {
      "usługi": "ponad 70% PKB",
      "przemysł wydobywczy": "wykorzystuje bogate złoża surowców",
      "rolnictwo": "opiera się przede wszystkim na chowie zwierząt",
      "przetwórstwo przemysłowe": "obejmuje m.in. produkcję stali chemikaliów żywności i zaawansowanych technologii"
    },
    "explanation": "Usługi dominują w PKB, górnictwo korzysta z bogatej bazy surowcowej, rolnictwo opiera się na chowie zwierząt, a nowoczesne przetwórstwo obejmuje zarówno tradycyjne, jak i zaawansowane gałęzie."
  },
  {
    "id": "R04_GOS_12",
    "section": "Gospodarka Australii",
    "type": "single_choice",
    "prompt": "Która część Australii jest szczególnie atrakcyjna turystycznie?",
    "options": [
      "wybrzeża Pacyfiku",
      "środek Wielkiej Pustyni Wiktorii",
      "najbardziej suche wnętrze kontynentu",
      "okolice bezodpływowych słonych jezior jako jedyny obszar turystyczny",
      "wyłącznie północne pustynie",
      "wyłącznie obszary górnicze zachodu"
    ],
    "answer": 0,
    "explanation": "Australijska gospodarka czerpie znaczne dochody z turystyki, a szczególnie atrakcyjne są wybrzeża Pacyfiku."
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaką powierzchnię zajmuje największa australijska pustynia, Wielka Pustynia Wiktorii?",
    "options": [
      "ponad 420 tys. km²",
      "około 42 tys. km²",
      "ponad 900 tys. km²",
      "około 120 tys. km²",
      "około 250 tys. km²",
      "ponad 1 mln km²"
    ],
    "answer": 0,
    "explanation": "Wielka Pustynia Wiktorii leży w południowej części kraju i zajmuje ponad 420 tys. km²."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Na obszarze Wielkiego Basenu Artezyjskiego istnieje około __________ tys. studni artezyjskich, a powierzchnia jeziora Eyre może zmieniać się od około __________ tys. km² do __________ tys. km².",
    "options": null,
    "answer": [
      "20",
      "6",
      "9,5"
    ],
    "altAnswers": [
      [
        "20",
        "20 tys.",
        "20 tysięcy"
      ],
      [
        "6",
        "6 tys.",
        "6 tysięcy"
      ],
      [
        "9,5",
        "9,5 tys.",
        "9.5",
        "9,5 tys. km²"
      ]
    ],
    "explanation": "Wielki Basen Artezyjski ma około 20 tys. studni, a powierzchnia jeziora Eyre zmienia się mniej więcej od 6 tys. do 9,5 tys. km²."
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz informację o gatunkach introdukowanych lub ich zwalczaniu z właściwym opisem.",
    "options": null,
    "left": [
      "króliki",
      "koty",
      "dingo",
      "ogrodzenia przeciw szkodnikom"
    ],
    "right": [
      "24 osobniki wypuszczone w XIX wieku rozrosły się do setek milionów",
      "miały pomagać w walce z królikami lecz zdziczały",
      "był początkowo udomowionym towarzyszem Aborygenów",
      "miały łącznie ponad 3200 km długości"
    ],
    "answer": {
      "króliki": "24 osobniki wypuszczone w XIX wieku rozrosły się do setek milionów",
      "koty": "miały pomagać w walce z królikami lecz zdziczały",
      "dingo": "był początkowo udomowionym towarzyszem Aborygenów",
      "ogrodzenia przeciw szkodnikom": "miały łącznie ponad 3200 km długości"
    },
    "explanation": "Introdukowane zwierzęta mogły masowo się rozmnażać z powodu dostatku pożywienia i braku naturalnych wrogów; próbowano ograniczać ich liczebność m.in. ogrodzeniami."
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia geologiczne i zmiany poziomu morza od najstarszego do najmłodszego.",
    "options": null,
    "items": [
      "Nowa Gwinea staje się wyspą około 9 tys. lat temu",
      "Australia i Antarktyda ostatecznie rozdzielają się około 50 mln lat temu",
      "Australia wraz z Antarktydą odłącza się od Gondwany około 200 mln lat temu",
      "Tasmania staje się wyspą około 13 tys. lat temu",
      "około 20-25 tys. lat temu poziom morza jest ponad 130 m niższy niż obecnie i istnieje Sahul"
    ],
    "answer": [
      "Australia wraz z Antarktydą odłącza się od Gondwany około 200 mln lat temu",
      "Australia i Antarktyda ostatecznie rozdzielają się około 50 mln lat temu",
      "około 20-25 tys. lat temu poziom morza jest ponad 130 m niższy niż obecnie i istnieje Sahul",
      "Tasmania staje się wyspą około 13 tys. lat temu",
      "Nowa Gwinea staje się wyspą około 9 tys. lat temu"
    ],
    "explanation": "Po odłączeniu Australii i Antarktydy od Gondwany doszło do ich ostatecznego rozdzielenia. Pod koniec epoki lodowcowej niższy poziom morza łączył Australię, Tasmanię i Nową Gwineę w Sahul; późniejszy wzrost poziomu oceanu oddzielił Tasmanię i Nową Gwineę."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Badacz ogląda samotną formację z piaskowca o obwodzie ponad 9 km i wysokości około 350 m, uznawaną za święte miejsce Aborygenów. Jak nazywają ją rdzenni mieszkańcy?",
    "options": [
      "Uluru",
      "Eyre",
      "Kościuszki",
      "Bora-Bora",
      "Sahul",
      "Cook"
    ],
    "answer": 0,
    "explanation": "Ayers Rock jest świętym miejscem Aborygenów, którzy nazywają tę piaskowcową formację Uluru.",
    "image": "r04_uluru.jpg"
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Około 900 kamiennych posągów na Rapa Nui nosi nazwę...",
    "options": null,
    "answer": "moai",
    "altAnswers": [
      "moai",
      "posągi moai"
    ],
    "explanation": "Wyspa Wielkanocna, czyli Rapa Nui, słynie z około 900 kamiennych posągów zwanych moai.",
    "image": "r04_moai.jpg"
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Wielka Rafa Koralowa ciągnie się na odcinku około __________ km, tworzy ją około __________ gatunków koralowców, a zamieszkuje ją około __________ gatunków ryb.",
    "options": null,
    "answer": [
      "2000",
      "400",
      "1500"
    ],
    "altAnswers": [
      [
        "2000",
        "2000 km",
        "2 tys. km"
      ],
      [
        "400",
        "400 gatunków"
      ],
      [
        "1500",
        "1500 gatunków"
      ]
    ],
    "explanation": "Wielka Rafa Koralowa ma około 2000 km długości, tworzy ją około 400 gatunków koralowców i żyje tam około 1500 gatunków ryb.",
    "image": "r04_wielka_rafa_koralowa.jpg"
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Aborygeni posługiwali się bumerangiem już około 10 tys. lat temu, a nazwa narzędzia wywodzi się z określenia oznaczającego powracający kij.",
    "options": null,
    "answer": true,
    "explanation": "Bumerang był używany przez Aborygenów około 10 tys. lat temu; określenie Bou-mar-ang w języku plemienia Tharaval oznacza powracający kij."
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz głównych odbiorców australijskiego eksportu w 2018 roku z ich udziałem.",
    "options": null,
    "left": [
      "Chiny",
      "Japonia",
      "Korea Południowa",
      "Indie"
    ],
    "right": [
      "34,7%",
      "16,4%",
      "7,0%",
      "4,9%"
    ],
    "answer": {
      "Chiny": "34,7%",
      "Japonia": "16,4%",
      "Korea Południowa": "7,0%",
      "Indie": "4,9%"
    },
    "explanation": "W 2018 roku największy udział w australijskim eksporcie miały Chiny, następnie Japonia, Korea Południowa i Indie."
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz towary należące do głównych pozycji australijskiego eksportu.",
    "options": [
      "węgiel kamienny",
      "rudy żelaza",
      "wełna",
      "pszenica",
      "maszyny jako główna pozycja",
      "samochody jako główna pozycja"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Wśród głównych towarów eksportowych Australii znajdują się m.in. węgiel kamienny, rudy żelaza, złoto, aluminium, mięso, wełna i pszenica; struktura eksportu różni się od krajów opartych głównie na eksporcie maszyn."
  },
  {
    "id": "R04_HARD_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które stwierdzenie najlepiej opisuje Wielką Rafę Koralową?",
    "options": [
      "największa bariera koralowa na Ziemi przy północno-wschodnim wybrzeżu Australii",
      "największe słone jezioro Australii",
      "pasmo górskie na Wyspie Południowej",
      "największy basen wód podziemnych Australii",
      "pustynia w południowej części kraju",
      "wyspa koralowa w kształcie pierścienia"
    ],
    "answer": 0,
    "explanation": "Wielka Rafa Koralowa biegnie wzdłuż północno-wschodniego wybrzeża Australii i jest największą barierą koralową na Ziemi.",
    "image": "r04_wielka_rafa_koralowa.jpg"
  },
  {
    "id": "R04_HARD_12",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Na wschodnim wybrzeżu Australii notuje się większe sumy opadów niż na zachodnim. Który czynnik najlepiej wyjaśnia tę różnicę?",
    "options": [
      "ciepły Prąd Wschodnioaustralijski zwiększa ilość opadów, a zimny prąd przy zachodzie ją zmniejsza",
      "na zachodzie występują lodowce, które blokują opady",
      "wschód leży w strefie okołobiegunowej",
      "zachód jest wyżej położony niż wszystkie góry wschodu",
      "na wschodzie nie ma mórz ani oceanów",
      "cała Australia ma jednakowy klimat"
    ],
    "answer": 0,
    "explanation": "Ciepły Prąd Wschodnioaustralijski sprzyja większym opadom i łagodzi klimat wschodnich wybrzeży, podczas gdy zimny prąd przy wybrzeżu zachodnim ogranicza opady."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r04",
  number: 4,
  title: "Australia i Oceania",
  icon: "🌏",
  sectionOrder: [
    "Położenie i rzeźba Australii",
    "Klimat, wody i przyroda",
    "Oceania i Nowa Zelandia",
    "Ludność Australii",
    "Gospodarka Australii"
  ],
  sectionIcons: {
    "Położenie i rzeźba Australii": "🗺️",
    "Klimat, wody i przyroda": "🌿",
    "Oceania i Nowa Zelandia": "🏝️",
    "Ludność Australii": "👥",
    "Gospodarka Australii": "⛏️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
