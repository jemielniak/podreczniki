// Skróty sekcji:
//   ZYC = Życie pierwszych ludzi
//   MEZ = Miasta-państwa Mezopotamii
//   EGI = W Egipcie faraonów
//   IZR = W starożytnym Izraelu
//   IND = Cywilizacje Indii i Chin
//   PIS = Od hieroglifów do alfabetu
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_ZYC_01",
    "section": "Życie pierwszych ludzi",
    "type": "single_choice",
    "prompt": "Gdzie według podręcznika żyli najstarsi przodkowie człowieka współczesnego?",
    "options": [
      "w Afryce",
      "w Australii",
      "w Europie",
      "w Ameryce Południowej",
      "na Bliskim Wschodzie",
      "w Chinach"
    ],
    "answer": 0,
    "explanation": "Podręcznik podaje, że najdawniejsi przodkowie człowieka współczesnego żyli w Afryce około 4 milionów lat temu."
  },
  {
    "id": "R01_ZYC_02",
    "section": "Życie pierwszych ludzi",
    "type": "multi_select",
    "prompt": "Zaznacz korzyści, jakie pierwszym ludziom dawało wykorzystanie ognia.",
    "options": [
      "ogrzewanie się",
      "pieczenie mięsa",
      "ochrona przed dzikimi zwierzętami",
      "budowa kanałów nawadniających",
      "możliwość zamieszkania w chłodniejszych rejonach",
      "wynalezienie pisma"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Ogień dawał ciepło, pozwalał przygotowywać jedzenie, odstraszał zwierzęta i ułatwiał życie w chłodniejszych obszarach.",
    "image": "/img/r01_prehistoryczne_ognisko.jpg"
  },
  {
    "id": "R01_ZYC_03",
    "section": "Życie pierwszych ludzi",
    "type": "true_false",
    "prompt": "Rewolucja neolityczna polegała na przejściu ludzi z osiadłego trybu życia na koczowniczy.",
    "options": null,
    "answer": false,
    "explanation": "Było odwrotnie: dzięki rolnictwu i hodowli zwierząt ludzie zaczęli przechodzić z trybu koczowniczego na osiadły."
  },
  {
    "id": "R01_ZYC_04",
    "section": "Życie pierwszych ludzi",
    "type": "fill_in",
    "prompt": "Około __________ lat p.n.e. narodziło się __________.",
    "options": null,
    "answer": [
      "10 tysięcy",
      "rolnictwo"
    ],
    "explanation": "Około 10 tysięcy lat p.n.e. ludzie nauczyli się wysiewać zboża i zbierać plony.",
    "altAnswers": [
      [
        "10 tysięcy",
        "10 tys.",
        "10000",
        "10 000"
      ],
      [
        "rolnictwo",
        "rolnictwa"
      ]
    ],
    "image": "/img/r01_osada_neolityczna.jpg"
  },
  {
    "id": "R01_ZYC_05",
    "section": "Życie pierwszych ludzi",
    "type": "riddle",
    "prompt": "Jak nazywamy wędrowny tryb życia polegający na częstym przenoszeniu się w poszukiwaniu pożywienia?",
    "options": null,
    "answer": "koczowniczy",
    "explanation": "Dawni myśliwi i zbieracze nie budowali stałych domów, lecz prowadzili koczowniczy tryb życia.",
    "altAnswers": [
      "koczowniczy",
      "tryb koczowniczy",
      "koczownictwo"
    ]
  },
  {
    "id": "R01_ZYC_06",
    "section": "Życie pierwszych ludzi",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: zbieractwo, myślistwo, rolnictwo, jaskinia.",
    "options": null,
    "answer": "jaskinia",
    "explanation": "Zbieractwo, myślistwo i rolnictwo to sposoby zdobywania pożywienia, a jaskinia była schronieniem."
  },
  {
    "id": "R01_ZYC_07",
    "section": "Życie pierwszych ludzi",
    "type": "sequence",
    "prompt": "Ułóż epoki w kolejności chronologicznej.",
    "options": null,
    "items": [
      "epoka żelaza",
      "epoka kamienia",
      "epoka brązu"
    ],
    "answer": [
      "epoka kamienia",
      "epoka brązu",
      "epoka żelaza"
    ],
    "explanation": "Nazwy epok pochodzą od materiałów najczęściej używanych wtedy do wyrobu narzędzi i broni."
  },
  {
    "id": "R01_ZYC_08",
    "section": "Życie pierwszych ludzi",
    "type": "match",
    "prompt": "Połącz pojęcie z opisem.",
    "options": null,
    "left": [
      "pięściak",
      "dymarka",
      "brąz",
      "mowa"
    ],
    "right": [
      "piec do wytopu żelaza",
      "stop miedzi i cyny",
      "kamienne narzędzie dopasowane do dłoni",
      "sposób szybszego przekazywania informacji"
    ],
    "answer": {
      "pięściak": "kamienne narzędzie dopasowane do dłoni",
      "dymarka": "piec do wytopu żelaza",
      "brąz": "stop miedzi i cyny",
      "mowa": "sposób szybszego przekazywania informacji"
    },
    "explanation": "Pięściaki, dymarki, brąz i mowa odnoszą się do różnych umiejętności oraz wynalazków opisanych w temacie."
  },
  {
    "id": "R01_ZYC_09",
    "section": "Życie pierwszych ludzi",
    "type": "scenario",
    "prompt": "Wyobraź sobie, że żyjesz około 1200 roku p.n.e. i chcesz wykonać ostrze włóczni z materiału bardziej wytrzymałego niż brąz. Który materiał wybierasz?",
    "options": [
      "żelazo",
      "drewno",
      "miedź",
      "glinę",
      "kość",
      "skórę"
    ],
    "answer": 0,
    "explanation": "Około 1200 roku p.n.e. ludzie opanowali wytop żelaza, które było bardziej wytrzymałe niż brąz.",
    "image": "/img/r01_dymarka_zelazo.jpg"
  },
  {
    "id": "R01_ZYC_10",
    "section": "Życie pierwszych ludzi",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do trybu życia.",
    "options": null,
    "items": [
      "tymczasowe szałasy",
      "stałe osiedla",
      "częste wędrówki",
      "pola uprawne",
      "jaskinie jako schronienia",
      "chaty nad rzekami i jeziorami"
    ],
    "categories": [
      "tryb koczowniczy",
      "tryb osiadły"
    ],
    "answer": {
      "tryb koczowniczy": [
        "tymczasowe szałasy",
        "częste wędrówki",
        "jaskinie jako schronienia"
      ],
      "tryb osiadły": [
        "stałe osiedla",
        "pola uprawne",
        "chaty nad rzekami i jeziorami"
      ]
    },
    "explanation": "Koczownicy przenosili się za pożywieniem, a rolnicy osiadali w pobliżu pól i źródeł wody.",
    "image": "/img/r01_osada_neolityczna.jpg"
  },
  {
    "id": "R01_MEZ_01",
    "section": "Miasta-państwa Mezopotamii",
    "type": "single_choice",
    "prompt": "Między którymi rzekami leżała Mezopotamia?",
    "options": [
      "Eufratem i Tygrysem",
      "Nilem i Jordanem",
      "Indusem i Gangesem",
      "Huang He i Jangcy",
      "Renem i Dunajem",
      "Tygrysem i Nilem"
    ],
    "answer": 0,
    "explanation": "Mezopotamia była krainą na Bliskim Wschodzie położoną między Eufratem i Tygrysem."
  },
  {
    "id": "R01_MEZ_02",
    "section": "Miasta-państwa Mezopotamii",
    "type": "true_false",
    "prompt": "Pierwszą cywilizację na terenie Mezopotamii stworzyli Sumerowie.",
    "options": null,
    "answer": true,
    "explanation": "Sumerowie osiedlili się nad Eufratem i Tygrysem w połowie IV tysiąclecia p.n.e. i stworzyli tam pierwszą cywilizację."
  },
  {
    "id": "R01_MEZ_03",
    "section": "Miasta-państwa Mezopotamii",
    "type": "multi_select",
    "prompt": "Zaznacz dokonania przypisywane Sumerom w podręczniku.",
    "options": [
      "stworzenie pisma",
      "wynalezienie koła",
      "wynalezienie żagla",
      "wynalezienie koła garncarskiego",
      "budowa piramid w Gizie",
      "stworzenie alfabetu łacińskiego"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do osiągnięć Sumerów należały pismo, koło, żagiel i koło garncarskie.",
    "image": "/img/r01_tabliczka_klinowa.jpg"
  },
  {
    "id": "R01_MEZ_04",
    "section": "Miasta-państwa Mezopotamii",
    "type": "fill_in",
    "prompt": "W sumeryjskim mieście nad miastem górował __________, czyli kilkupiętrowa __________.",
    "options": null,
    "answer": [
      "zikkurat",
      "świątynia"
    ],
    "explanation": "Zikkurat był kilkupiętrową świątynią, a podczas wielkich wylewów mógł służyć mieszkańcom jako schronienie.",
    "altAnswers": [
      [
        "zikkurat",
        "ziggurat"
      ],
      [
        "świątynia",
        "swiatynia"
      ]
    ],
    "image": "/img/r01_zikkurat_ur.jpg"
  },
  {
    "id": "R01_MEZ_05",
    "section": "Miasta-państwa Mezopotamii",
    "type": "riddle",
    "prompt": "Jak nazywał się jeden z najstarszych znanych zbiorów praw spisany na polecenie króla Babilonii?",
    "options": null,
    "answer": "Kodeks Hammurabiego",
    "explanation": "Hammurabi kazał spisać surowy zbiór praw, aby usprawnić swoje państwo.",
    "altAnswers": [
      "Kodeks Hammurabiego",
      "kodeks Hammurabiego"
    ]
  },
  {
    "id": "R01_MEZ_06",
    "section": "Miasta-państwa Mezopotamii",
    "type": "scenario",
    "prompt": "Rolnik w Mezopotamii ma pole położone daleko od rzeki. Chce doprowadzić do niego wodę, aby zbiory były wyższe. Co powinien zbudować wraz z innymi mieszkańcami?",
    "options": [
      "kanał nawadniający",
      "piramidę",
      "sarkofag",
      "menorę",
      "dymarkę",
      "pismo alfabetyczne"
    ],
    "answer": 0,
    "explanation": "W Mezopotamii budowano kanały nawadniające, aby doprowadzać wodę do dalej położonych pól."
  },
  {
    "id": "R01_MEZ_07",
    "section": "Miasta-państwa Mezopotamii",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Sumerowie, Babilończycy, Egipcjanie, Hammurabi.",
    "options": null,
    "answer": "Hammurabi",
    "explanation": "Hammurabi był władcą, a pozostałe nazwy oznaczają ludy lub mieszkańców cywilizacji."
  },
  {
    "id": "R01_MEZ_08",
    "section": "Miasta-państwa Mezopotamii",
    "type": "match",
    "prompt": "Połącz pojęcie z właściwym opisem.",
    "options": null,
    "left": [
      "miasto-państwo",
      "podatek",
      "Babilon",
      "spichlerz"
    ],
    "right": [
      "obowiązkowa opłata na rzecz państwa",
      "magazyn zapasów zboża",
      "otoczone murami miasto z najbliższą okolicą",
      "stolica Babilonii"
    ],
    "answer": {
      "miasto-państwo": "otoczone murami miasto z najbliższą okolicą",
      "podatek": "obowiązkowa opłata na rzecz państwa",
      "Babilon": "stolica Babilonii",
      "spichlerz": "magazyn zapasów zboża"
    },
    "explanation": "W miastach-państwach działały urzędy, pobierano podatki, a zapasy zboża przechowywano w spichlerzach.",
    "image": "/img/r01_zikkurat_ur.jpg"
  },
  {
    "id": "R01_MEZ_09",
    "section": "Miasta-państwa Mezopotamii",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z Mezopotamią w kolejności chronologicznej.",
    "options": null,
    "items": [
      "największa potęga Babilonii za Hammurabiego",
      "osiedlenie się Sumerów nad Eufratem i Tygrysem",
      "szczyt potęgi miasta Ur",
      "założenie Bagdadu"
    ],
    "answer": [
      "osiedlenie się Sumerów nad Eufratem i Tygrysem",
      "szczyt potęgi miasta Ur",
      "największa potęga Babilonii za Hammurabiego",
      "założenie Bagdadu"
    ],
    "explanation": "Sumerowie pojawili się w IV tysiącleciu p.n.e., Ur osiągnęło potęgę w XXI wieku p.n.e., Babilonia w XVIII wieku p.n.e., a Bagdad założono w VIII wieku n.e."
  },
  {
    "id": "R01_MEZ_10",
    "section": "Miasta-państwa Mezopotamii",
    "type": "sort",
    "prompt": "Przyporządkuj zajęcia do grup mieszkańców sumeryjskiego miasta-państwa.",
    "options": null,
    "items": [
      "uprawa ziemi",
      "kopanie kanałów",
      "wyrób naczyń",
      "wyrób ozdób",
      "handel z innymi miastami",
      "pobieranie podatków"
    ],
    "categories": [
      "rolnicy",
      "rzemieślnicy",
      "kupcy",
      "urzędnicy"
    ],
    "answer": {
      "rolnicy": [
        "uprawa ziemi",
        "kopanie kanałów"
      ],
      "rzemieślnicy": [
        "wyrób naczyń",
        "wyrób ozdób"
      ],
      "kupcy": [
        "handel z innymi miastami"
      ],
      "urzędnicy": [
        "pobieranie podatków"
      ]
    },
    "explanation": "W sumeryjskich miastach różne grupy wykonywały odmienne zadania potrzebne do działania państwa."
  },
  {
    "id": "R01_EGI_01",
    "section": "W Egipcie faraonów",
    "type": "single_choice",
    "prompt": "Dlaczego starożytny Egipt nazywano darem Nilu?",
    "options": [
      "bo coroczne wylewy Nilu umożliwiały rozwój rolnictwa",
      "bo Nil chronił Egipt przed wszystkimi wojnami",
      "bo Egipcjanie nie znali kanałów",
      "bo Nil był jedyną rzeką świata",
      "bo Egipcjanie nie uprawiali ziemi",
      "bo nad Nilem nie było pustyni"
    ],
    "answer": 0,
    "explanation": "Nil nanosił żyzny muł i nawadniał pola, dlatego bez tej rzeki rozwój rolnictwa i silnego państwa byłby bardzo trudny."
  },
  {
    "id": "R01_EGI_02",
    "section": "W Egipcie faraonów",
    "type": "true_false",
    "prompt": "Faraon miał w Egipcie ograniczoną władzę i podlegał prawom ustanowionym przez urzędników.",
    "options": null,
    "answer": false,
    "explanation": "Faraon miał nieograniczoną władzę, sam ustanawiał prawa i im nie podlegał."
  },
  {
    "id": "R01_EGI_03",
    "section": "W Egipcie faraonów",
    "type": "multi_select",
    "prompt": "Zaznacz grupy należące do społeczeństwa egipskiego opisane w podręczniku.",
    "options": [
      "faraon",
      "kapłani",
      "urzędnicy",
      "chłopi",
      "samuraje",
      "niewolnicy"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      5
    ],
    "explanation": "Społeczeństwo Egiptu tworzyli między innymi faraon, kapłani, urzędnicy, żołnierze, rzemieślnicy, chłopi i niewolnicy."
  },
  {
    "id": "R01_EGI_04",
    "section": "W Egipcie faraonów",
    "type": "fill_in",
    "prompt": "Religię Egipcjan, którzy wierzyli w wielu bogów, nazywamy __________, a zabezpieczanie ciała zmarłego to __________.",
    "options": null,
    "answer": [
      "politeizmem",
      "mumifikacja"
    ],
    "explanation": "Egipcjanie byli politeistami i wierzyli, że zachowanie ciała ma znaczenie dla życia po śmierci.",
    "altAnswers": [
      [
        "politeizmem",
        "politeizm"
      ],
      [
        "mumifikacja",
        "mumifikacją"
      ]
    ],
    "image": "/img/r01_mumifikacja_sarkofag.jpg"
  },
  {
    "id": "R01_EGI_05",
    "section": "W Egipcie faraonów",
    "type": "riddle",
    "prompt": "Jak nazywała się bogato zdobiona trumna, w której składano mumię?",
    "options": null,
    "answer": "sarkofag",
    "explanation": "Mumię składano w bogato zdobionej trumnie zwanej sarkofagiem, a następnie umieszczano ją w grobowcu.",
    "altAnswers": [
      "sarkofag",
      "sarkofagu"
    ],
    "image": "/img/r01_mumifikacja_sarkofag.jpg"
  },
  {
    "id": "R01_EGI_06",
    "section": "W Egipcie faraonów",
    "type": "scenario",
    "prompt": "Jesteś mieszkańcem Egiptu należącym do najliczniejszej grupy ludności. Uprawiasz ziemię, oczyszczasz kanały i pracujesz przy wznoszeniu piramid. Do której grupy należysz?",
    "options": [
      "chłopów",
      "kapłanów",
      "faraonów",
      "urzędników",
      "kupców fenickich",
      "proroków"
    ],
    "answer": 0,
    "explanation": "Chłopi byli najliczniejszą grupą ludności Egiptu i wykonywali prace rolnicze oraz budowlane."
  },
  {
    "id": "R01_EGI_07",
    "section": "W Egipcie faraonów",
    "type": "match",
    "prompt": "Połącz postać lub bóstwo z opisem.",
    "options": null,
    "left": [
      "Ra",
      "Ozyrys",
      "Hatszepsut",
      "Howard Carter"
    ],
    "right": [
      "bóg-słońce",
      "bóg osądzający zmarłych",
      "kobieta-faraon",
      "odkrywca grobowca Tutenchamona"
    ],
    "answer": {
      "Ra": "bóg-słońce",
      "Ozyrys": "bóg osądzający zmarłych",
      "Hatszepsut": "kobieta-faraon",
      "Howard Carter": "odkrywca grobowca Tutenchamona"
    },
    "explanation": "Te postacie i bóstwa pojawiają się w opisach religii, władzy oraz odkryć dotyczących Egiptu."
  },
  {
    "id": "R01_EGI_08",
    "section": "W Egipcie faraonów",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: piramida, sfinks, sarkofag, zikkurat.",
    "options": null,
    "answer": "zikkurat",
    "explanation": "Zikkurat był świątynią mezopotamską, a pozostałe pojęcia są związane ze starożytnym Egiptem.",
    "image": "/img/r01_piramidy_giza.jpg"
  },
  {
    "id": "R01_EGI_09",
    "section": "W Egipcie faraonów",
    "type": "sequence",
    "prompt": "Ułóż etapy mumifikacji w poprawnej kolejności.",
    "options": null,
    "items": [
      "owijanie ciała bandażami",
      "usunięcie wnętrzności",
      "złożenie mumii w sarkofagu",
      "balsamowanie ciała"
    ],
    "answer": [
      "usunięcie wnętrzności",
      "balsamowanie ciała",
      "owijanie ciała bandażami",
      "złożenie mumii w sarkofagu"
    ],
    "explanation": "Mumifikacja zaczynała się od usunięcia wnętrzności, potem ciało balsamowano, owijano bandażami i składano w sarkofagu.",
    "image": "/img/r01_mumifikacja_sarkofag.jpg"
  },
  {
    "id": "R01_EGI_10",
    "section": "W Egipcie faraonów",
    "type": "single_choice",
    "prompt": "Ile dni liczył rok w kalendarzu opracowanym przez Egipcjan?",
    "options": [
      "365",
      "300",
      "360",
      "400",
      "100",
      "22"
    ],
    "answer": 0,
    "explanation": "Egipcjanie opracowali kalendarz, w którym rok liczył 365 dni."
  },
  {
    "id": "R01_IZR_01",
    "section": "W starożytnym Izraelu",
    "type": "single_choice",
    "prompt": "Jak nazywano krainę, do której Izraelici udali się pod wodzą Abrahama?",
    "options": [
      "Palestyna, czyli Ziemia Kanaan",
      "Mezopotamia",
      "Egipt Dolny",
      "Dolina Indusu",
      "Babilonia",
      "Daleki Wschód"
    ],
    "answer": 0,
    "explanation": "Podręcznik wyjaśnia, że Izraelici udali się do Palestyny, nazywanej w starożytności Ziemią Kanaan."
  },
  {
    "id": "R01_IZR_02",
    "section": "W starożytnym Izraelu",
    "type": "true_false",
    "prompt": "Judaizm był religią monoteistyczną, ponieważ Żydzi wierzyli w jednego Boga.",
    "options": null,
    "answer": true,
    "explanation": "Żydzi oddawali cześć jedynemu Bogu, którego nazywali Jahwe."
  },
  {
    "id": "R01_IZR_03",
    "section": "W starożytnym Izraelu",
    "type": "fill_in",
    "prompt": "Izraelici przybyli do Palestyny pod wodzą __________, a około XIII wieku p.n.e. opuścili Egipt pod wodzą __________.",
    "options": null,
    "answer": [
      "Abrahama",
      "Mojżesza"
    ],
    "explanation": "Według przekazu podręcznika Abraham poprowadził Izraelitów do Palestyny, a Mojżesz wyprowadził ich z Egiptu.",
    "altAnswers": [
      [
        "Abrahama",
        "Abraham"
      ],
      [
        "Mojżesza",
        "Mojżesz"
      ]
    ]
  },
  {
    "id": "R01_IZR_04",
    "section": "W starożytnym Izraelu",
    "type": "multi_select",
    "prompt": "Zaznacz pojęcia związane z judaizmem opisane w temacie.",
    "options": [
      "Jahwe",
      "Tora",
      "Dekalog",
      "Arka Przymierza",
      "zikkurat",
      "hinduizm"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Jahwe, Tora, Dekalog i Arka Przymierza są związane z religią Izraelitów.",
    "image": "/img/r01_swiatynia_jerozolimska.jpg"
  },
  {
    "id": "R01_IZR_05",
    "section": "W starożytnym Izraelu",
    "type": "riddle",
    "prompt": "Jak nazywa się siedmioramienny świecznik będący symbolem judaizmu i narodu żydowskiego?",
    "options": null,
    "answer": "menora",
    "explanation": "Menora była używana w Świątyni Jerozolimskiej i od ponad dwóch tysięcy lat jest symbolem judaizmu.",
    "altAnswers": [
      "menora",
      "menorą"
    ],
    "image": "/img/r01_swiatynia_jerozolimska.jpg"
  },
  {
    "id": "R01_IZR_06",
    "section": "W starożytnym Izraelu",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z dziejów Izraelitów w kolejności chronologicznej.",
    "options": null,
    "items": [
      "zjednoczenie plemion przez Dawida",
      "niewola egipska",
      "ucieczka z Egiptu pod wodzą Mojżesza",
      "przybycie do Palestyny pod wodzą Abrahama",
      "niewola babilońska",
      "podbicie Palestyny przez Rzymian"
    ],
    "answer": [
      "przybycie do Palestyny pod wodzą Abrahama",
      "niewola egipska",
      "ucieczka z Egiptu pod wodzą Mojżesza",
      "zjednoczenie plemion przez Dawida",
      "niewola babilońska",
      "podbicie Palestyny przez Rzymian"
    ],
    "explanation": "Najpierw Izraelici przybyli do Palestyny, później trafili do Egiptu, opuścili go pod wodzą Mojżesza, stworzyli państwo, a następnie doświadczyli niewoli babilońskiej i podboju rzymskiego."
  },
  {
    "id": "R01_IZR_07",
    "section": "W starożytnym Izraelu",
    "type": "match",
    "prompt": "Połącz postać z jej rolą w dziejach Izraelitów.",
    "options": null,
    "left": [
      "Abraham",
      "Mojżesz",
      "Dawid",
      "Salomon"
    ],
    "right": [
      "według Biblii otrzymał obietnicę Ziemi Kanaan",
      "wyprowadził Izraelitów z Egiptu",
      "zjednoczył plemiona i zdobył Jerozolimę",
      "słynął z mądrości i był synem Dawida"
    ],
    "answer": {
      "Abraham": "według Biblii otrzymał obietnicę Ziemi Kanaan",
      "Mojżesz": "wyprowadził Izraelitów z Egiptu",
      "Dawid": "zjednoczył plemiona i zdobył Jerozolimę",
      "Salomon": "słynął z mądrości i był synem Dawida"
    },
    "explanation": "Abraham, Mojżesz, Dawid i Salomon to najważniejsze postacie opisane w temacie o Izraelitach."
  },
  {
    "id": "R01_IZR_08",
    "section": "W starożytnym Izraelu",
    "type": "scenario",
    "prompt": "Turysta w Jerozolimie ogląda miejsce będące jedyną zachowaną do dziś pozostałością Drugiej Świątyni Jerozolimskiej. Jak nazywa się to miejsce?",
    "options": [
      "Ściana Płaczu",
      "Brama Isztar",
      "Wielki Sfinks",
      "Wielki Mur Chiński",
      "zikkurat",
      "Dolina Królów"
    ],
    "answer": 0,
    "explanation": "Ściana Płaczu jest świętym miejscem judaizmu i pozostałością Drugiej Świątyni Jerozolimskiej.",
    "image": "/img/r01_swiatynia_jerozolimska.jpg"
  },
  {
    "id": "R01_IZR_09",
    "section": "W starożytnym Izraelu",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: judaizm, Jahwe, Tora, politeizm.",
    "options": null,
    "answer": "politeizm",
    "explanation": "Judaizm, Jahwe i Tora są związane z monoteistyczną religią Żydów, a politeizm oznacza wiarę w wielu bogów."
  },
  {
    "id": "R01_IZR_10",
    "section": "W starożytnym Izraelu",
    "type": "single_choice",
    "prompt": "Czym jest Tora według podręcznika?",
    "options": [
      "pierwszymi pięcioma najważniejszymi księgami Biblii hebrajskiej",
      "zbiorem praw Hammurabiego",
      "świątynią o schodkowym kształcie",
      "egipskim pismem obrazkowym",
      "chińskim wynalazkiem",
      "nazwą rzeki w Palestynie"
    ],
    "answer": 0,
    "explanation": "Tora to pierwszych pięć najważniejszych ksiąg Biblii hebrajskiej, nazywane też Pięcioksięgiem."
  },
  {
    "id": "R01_IND_01",
    "section": "Cywilizacje Indii i Chin",
    "type": "single_choice",
    "prompt": "Gdzie narodziła się najstarsza cywilizacja Azji Środkowej opisana w temacie?",
    "options": [
      "w dolinie rzeki Indus",
      "nad Nilem",
      "między Eufratem i Tygrysem",
      "nad Jordanem",
      "w Gizie",
      "nad Morzem Śródziemnym"
    ],
    "answer": 0,
    "explanation": "Cywilizacja doliny Indusu powstała w III tysiącleciu p.n.e. na terenach dzisiejszych Indii i Pakistanu."
  },
  {
    "id": "R01_IND_02",
    "section": "Cywilizacje Indii i Chin",
    "type": "true_false",
    "prompt": "Miasta cywilizacji doliny Indusu miały wodociągi i kanalizację.",
    "options": null,
    "answer": true,
    "explanation": "W miastach doliny Indusu budowano wodociągi dostarczające wodę do domów oraz kanalizację odprowadzającą nieczystości."
  },
  {
    "id": "R01_IND_03",
    "section": "Cywilizacje Indii i Chin",
    "type": "fill_in",
    "prompt": "Ariowie podzielili społeczeństwo Indii na zamknięte grupy, czyli __________, a ich wierzenia połączyły się z miejscowymi i utworzyły __________.",
    "options": null,
    "answer": [
      "kasty",
      "hinduizm"
    ],
    "explanation": "Po podboju Indii Ariowie wprowadzili system kastowy, a połączenie wierzeń doprowadziło do powstania hinduizmu.",
    "altAnswers": [
      [
        "kasty",
        "kast"
      ],
      [
        "hinduizm",
        "hinduizmu"
      ]
    ]
  },
  {
    "id": "R01_IND_04",
    "section": "Cywilizacje Indii i Chin",
    "type": "multi_select",
    "prompt": "Zaznacz najważniejszych bogów hinduizmu wymienionych w podręczniku.",
    "options": [
      "Brahma",
      "Wisznu",
      "Sziwa",
      "Jahwe",
      "Ra",
      "Ozyrys"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "W podręczniku jako najważniejszych bogów hinduizmu wymieniono Brahmę, Wisznu i Sziwę."
  },
  {
    "id": "R01_IND_05",
    "section": "Cywilizacje Indii i Chin",
    "type": "single_choice",
    "prompt": "Nad którymi rzekami narodziła się cywilizacja chińska?",
    "options": [
      "Huang He i Jangcy",
      "Eufrat i Tygrys",
      "Nil i Jordan",
      "Indus i Nil",
      "Ren i Dunaj",
      "Jangcy i Eufrat"
    ],
    "answer": 0,
    "explanation": "Cywilizacja chińska narodziła się nad rzekami Huang He, czyli Żółtą Rzeką, i Jangcy, czyli Niebieską Rzeką."
  },
  {
    "id": "R01_IND_06",
    "section": "Cywilizacje Indii i Chin",
    "type": "riddle",
    "prompt": "W jakim celu budowano rozległe fortyfikacje wzdłuż północnej granicy Chin?",
    "options": null,
    "answer": "ochrona przed najazdami",
    "explanation": "Fortyfikacje miały chronić Chiny przed najazdami koczowniczych plemion z północy.",
    "altAnswers": [
      "ochrona przed najazdami",
      "ochrona przed koczownikami",
      "chronić przed najazdami",
      "chronić przed plemionami z północy"
    ],
    "image": "/img/r01_wielki_mur_chinski.jpg"
  },
  {
    "id": "R01_IND_07",
    "section": "Cywilizacje Indii i Chin",
    "type": "match",
    "prompt": "Połącz chińskie osiągnięcie z jego zastosowaniem lub opisem.",
    "options": null,
    "left": [
      "papier",
      "proch strzelniczy",
      "igła magnetyczna",
      "porcelana"
    ],
    "right": [
      "materiał do zapisywania tekstów",
      "mieszanina wykorzystana później jako materiał wybuchowy",
      "pomoc w orientowaniu kierunku",
      "delikatny i cenny wyrób ceramiczny"
    ],
    "answer": {
      "papier": "materiał do zapisywania tekstów",
      "proch strzelniczy": "mieszanina wykorzystana później jako materiał wybuchowy",
      "igła magnetyczna": "pomoc w orientowaniu kierunku",
      "porcelana": "delikatny i cenny wyrób ceramiczny"
    },
    "explanation": "Chińczycy dokonali wielu wynalazków, które miały ważne zastosowania w codziennym życiu i technice."
  },
  {
    "id": "R01_IND_08",
    "section": "Cywilizacje Indii i Chin",
    "type": "scenario",
    "prompt": "Kupiec przewozi z Chin do Europy drogocenną tkaninę, porcelanę i inne towary trasą liczącą ponad 10 tysięcy kilometrów. Jak nazywano tę drogę handlową?",
    "options": [
      "Jedwabny Szlak",
      "Droga Królewska",
      "Szlak Nilu",
      "Trasa Hammurabiego",
      "Droga Synajska",
      "Szlak Sfinksa"
    ],
    "answer": 0,
    "explanation": "Towary z Chin przewożono do Europy trasą nazywaną Jedwabnym Szlakiem.",
    "image": "/img/r01_jedwabny_szlak_karawana.jpg"
  },
  {
    "id": "R01_IND_09",
    "section": "Cywilizacje Indii i Chin",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: papier, porcelana, proch strzelniczy, piramida.",
    "options": null,
    "answer": "piramida",
    "explanation": "Papier, porcelana i proch strzelniczy to osiągnięcia cywilizacji chińskiej, a piramida jest związana z Egiptem."
  },
  {
    "id": "R01_IND_10",
    "section": "Cywilizacje Indii i Chin",
    "type": "sort",
    "prompt": "Przyporządkuj informacje do cywilizacji.",
    "options": null,
    "items": [
      "Mohendżo-Daro",
      "system kastowy",
      "Huang He",
      "Wielki Mur Chiński",
      "hinduizm",
      "terakotowa armia"
    ],
    "categories": [
      "Indie",
      "Chiny"
    ],
    "answer": {
      "Indie": [
        "Mohendżo-Daro",
        "system kastowy",
        "hinduizm"
      ],
      "Chiny": [
        "Huang He",
        "Wielki Mur Chiński",
        "terakotowa armia"
      ]
    },
    "explanation": "Mohendżo-Daro, kasty i hinduizm dotyczą Indii, a Huang He, Wielki Mur i terakotowa armia dotyczą Chin."
  },
  {
    "id": "R01_PIS_01",
    "section": "Od hieroglifów do alfabetu",
    "type": "single_choice",
    "prompt": "Który lud jako pierwszy zastosował pismo w IV tysiącleciu p.n.e.?",
    "options": [
      "Sumerowie",
      "Fenicjanie",
      "Rzymianie",
      "Ariowie",
      "Chińczycy",
      "Izraelici"
    ],
    "answer": 0,
    "explanation": "Podręcznik podaje, że pierwsi pismo zastosowali Sumerowie na Bliskim Wschodzie.",
    "image": "/img/r01_tabliczka_klinowa.jpg"
  },
  {
    "id": "R01_PIS_02",
    "section": "Od hieroglifów do alfabetu",
    "type": "true_false",
    "prompt": "Egipskie hieroglify były najprostszą wersją pisma egipskiego używaną głównie do szybkiego zapisu umów handlowych na papirusie.",
    "options": null,
    "answer": false,
    "explanation": "Do szybkiego zapisu na papirusie służyło pismo demotyczne, a hieroglify były bardziej uroczyste i skomplikowane."
  },
  {
    "id": "R01_PIS_03",
    "section": "Od hieroglifów do alfabetu",
    "type": "fill_in",
    "prompt": "Materiał pisarski wytwarzany z trzciny rosnącej nad Nilem to __________, a najprostsze pismo egipskie nazywano pismem __________.",
    "options": null,
    "answer": [
      "papirus",
      "demotycznym"
    ],
    "explanation": "Papirus służył do zapisywania tekstów, a pismo demotyczne było prostsze od hieroglifów.",
    "altAnswers": [
      [
        "papirus",
        "papirusem"
      ],
      [
        "demotycznym",
        "demotyczne"
      ]
    ],
    "image": "/img/r01_hieroglify_alfabety.jpg"
  },
  {
    "id": "R01_PIS_04",
    "section": "Od hieroglifów do alfabetu",
    "type": "multi_select",
    "prompt": "Zaznacz zastosowania pisma opisane w podręczniku.",
    "options": [
      "spisywanie praw",
      "zawieranie transakcji handlowych",
      "zapisywanie modlitw",
      "utrwalanie opowieści o władcach i bogach",
      "pieczenie mięsa",
      "budowa piramid"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Pismo pomagało władcom, kupcom i kapłanom oraz pozwalało utrwalać opowieści i informacje."
  },
  {
    "id": "R01_PIS_05",
    "section": "Od hieroglifów do alfabetu",
    "type": "riddle",
    "prompt": "Jak nazywa się pismo powstałe w Mezopotamii z uproszczonych znaków obrazkowych odciskanych na glinianych tabliczkach?",
    "options": null,
    "answer": "pismo klinowe",
    "explanation": "Znaki pisma klinowego przypominały kliny i były odciskane w glinie.",
    "altAnswers": [
      "pismo klinowe",
      "klinowe"
    ],
    "image": "/img/r01_tabliczka_klinowa.jpg"
  },
  {
    "id": "R01_PIS_06",
    "section": "Od hieroglifów do alfabetu",
    "type": "match",
    "prompt": "Połącz rodzaj pisma z opisem.",
    "options": null,
    "left": [
      "piktogramy",
      "hieroglify",
      "pismo demotyczne",
      "alfabet fenicki"
    ],
    "right": [
      "obrazki przedstawiające pojęcia",
      "ozdobne egipskie znaki do ważnych tekstów",
      "prostsze pismo egipskie do codziennego zapisu",
      "najstarsze pismo alfabetyczne"
    ],
    "answer": {
      "piktogramy": "obrazki przedstawiające pojęcia",
      "hieroglify": "ozdobne egipskie znaki do ważnych tekstów",
      "pismo demotyczne": "prostsze pismo egipskie do codziennego zapisu",
      "alfabet fenicki": "najstarsze pismo alfabetyczne"
    },
    "explanation": "Różne rodzaje pisma powstawały jako odpowiedź na potrzebę łatwiejszego zapisu informacji.",
    "image": "/img/r01_hieroglify_alfabety.jpg"
  },
  {
    "id": "R01_PIS_07",
    "section": "Od hieroglifów do alfabetu",
    "type": "sequence",
    "prompt": "Ułóż etapy rozwoju znaku pisma zgodnie z infografiką w podręczniku.",
    "options": null,
    "items": [
      "litera grecka",
      "hieroglif egipski",
      "pismo współczesne",
      "litera fenicka",
      "litera łacińska",
      "uproszczone pismo egipskie"
    ],
    "answer": [
      "hieroglif egipski",
      "uproszczone pismo egipskie",
      "litera fenicka",
      "litera grecka",
      "litera łacińska",
      "pismo współczesne"
    ],
    "explanation": "Infografika pokazuje przejście od hieroglifu przez pisma alfabetyczne do pisma współczesnego.",
    "image": "/img/r01_hieroglify_alfabety.jpg"
  },
  {
    "id": "R01_PIS_08",
    "section": "Od hieroglifów do alfabetu",
    "type": "scenario",
    "prompt": "Feniccy kupcy potrzebują prostego sposobu zapisywania umów, złożonego z niewielkiej liczby znaków. Który typ pisma najlepiej spełnia tę potrzebę?",
    "options": [
      "pismo alfabetyczne",
      "rozbudowane pismo obrazkowe",
      "malowidła naskalne",
      "znaki na sarkofagu",
      "rysunki zwierząt",
      "system kastowy"
    ],
    "answer": 0,
    "explanation": "Fenicjanie stworzyli pismo alfabetyczne, w którym znaki odpowiadały głoskom."
  },
  {
    "id": "R01_PIS_09",
    "section": "Od hieroglifów do alfabetu",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: alfabet fenicki, alfabet grecki, alfabet łaciński, pismo klinowe.",
    "options": null,
    "answer": "pismo klinowe",
    "explanation": "Alfabety fenicki, grecki i łaciński to pisma alfabetyczne, a pismo klinowe wywodzi się z uproszczonego pisma obrazkowego."
  },
  {
    "id": "R01_PIS_10",
    "section": "Od hieroglifów do alfabetu",
    "type": "single_choice",
    "prompt": "Na którym alfabecie opiera się alfabet używany w języku polskim?",
    "options": [
      "łacińskim",
      "fenickim",
      "greckim",
      "klinowym",
      "hieroglificznym",
      "demotycznym"
    ],
    "answer": 0,
    "explanation": "Alfabet polski jest oparty na alfabecie łacińskim, do którego dodano znaki potrzebne do zapisu języka polskiego."
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz datę lub okres z wydarzeniem.",
    "options": null,
    "left": [
      "około 4 milionów lat temu",
      "około 10 tysięcy lat p.n.e.",
      "około 1200 lat p.n.e.",
      "około 4000 lat p.n.e."
    ],
    "right": [
      "pojawienie się najdawniejszych przodków człowieka w Afryce",
      "narodziny rolnictwa",
      "opanowanie wytopu żelaza",
      "wynalezienie pisma w Mezopotamii"
    ],
    "answer": {
      "około 4 milionów lat temu": "pojawienie się najdawniejszych przodków człowieka w Afryce",
      "około 10 tysięcy lat p.n.e.": "narodziny rolnictwa",
      "około 1200 lat p.n.e.": "opanowanie wytopu żelaza",
      "około 4000 lat p.n.e.": "wynalezienie pisma w Mezopotamii"
    },
    "explanation": "Daty te wyznaczają ważne momenty od prehistorii po początki starożytności."
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najdawniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "powstanie alfabetu fenickiego",
      "narodziny rolnictwa",
      "podbój doliny Indusu przez Ariów",
      "powstanie państwa egipskiego",
      "opanowanie wytopu żelaza",
      "najdawniejsi przodkowie człowieka w Afryce"
    ],
    "answer": [
      "najdawniejsi przodkowie człowieka w Afryce",
      "narodziny rolnictwa",
      "powstanie państwa egipskiego",
      "podbój doliny Indusu przez Ariów",
      "opanowanie wytopu żelaza",
      "powstanie alfabetu fenickiego"
    ],
    "explanation": "Najpierw pojawili się przodkowie człowieka, potem rolnictwo, następnie państwo egipskie, podbój Ariów, epoka żelaza i alfabet fenicki."
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki, które sprzyjały powstawaniu cywilizacji nad wielkimi rzekami.",
    "options": [
      "żyzny muł po wylewach",
      "możliwość budowy kanałów nawadniających",
      "łatwiejszy transport i handel",
      "wysokie plony",
      "stały mróz przez cały rok",
      "brak potrzeby współpracy ludzi"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Wielkie rzeki nawadniały pola, ułatwiały transport i wymagały organizacji wspólnej pracy."
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Porównujesz Mezopotamię, Egipt, Indie i Chiny. W każdej z tych cywilizacji kluczowe znaczenie miały rzeki oraz rolnictwo. Jakim określeniem najtrafniej opiszesz te cywilizacje?",
    "options": [
      "cywilizacje wielkich rzek",
      "cywilizacje bezrolne",
      "państwa wyłącznie koczownicze",
      "krainy bez pisma",
      "osady epoki kamienia",
      "społeczeństwa bez władzy"
    ],
    "answer": 0,
    "explanation": "Mezopotamia, Egipt, dolina Indusu i Chiny to przykłady cywilizacji rozwijających się w dolinach wielkich rzek."
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Kobietą, która w XV wieku p.n.e. stanęła na czele Egiptu jako faraon, była __________.",
    "options": null,
    "answer": [
      "Hatszepsut"
    ],
    "explanation": "Podręcznik podaje, że faraonami zwykle zostawali mężczyźni, ale w XV wieku p.n.e. państwem rządziła królowa Hatszepsut.",
    "altAnswers": [
      [
        "Hatszepsut",
        "Hatshepsut"
      ]
    ]
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Alfabet fenicki nie miał znaków dla samogłosek, a Grecy dodali litery odpowiadające samogłoskom.",
    "options": null,
    "answer": true,
    "explanation": "Fenicjanie zapisywali tylko spółgłoski, natomiast Grecy rozwinęli alfabet, dodając samogłoski."
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jaka kamienna płyta z tekstem zapisanym trzema sposobami umożliwiła odczytanie egipskich hieroglifów?",
    "options": null,
    "answer": "Kamień z Rosetty",
    "explanation": "Kamień z Rosetty zawierał ten sam tekst zapisany hieroglifami, pismem demotycznym i po grecku, co pomogło uczonym odczytać hieroglify.",
    "altAnswers": [
      "Kamień z Rosetty",
      "kamień z Rosetty",
      "Rosetta"
    ],
    "image": "/img/r01_kamien_z_rosetty.png"
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Kto w 1922 roku odkrył w Dolinie Królów nienaruszony grobowiec Tutenchamona?",
    "options": [
      "Howard Carter",
      "Jean François Champollion",
      "Kazimierz Michałowski",
      "Herodot",
      "Hammurabi",
      "Salomon"
    ],
    "answer": 0,
    "explanation": "Nienaruszony grobowiec Tutenchamona odkrył brytyjski archeolog Howard Carter.",
    "image": "/img/r01_mumifikacja_sarkofag.jpg"
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj religie lub wierzenia do typu.",
    "options": null,
    "items": [
      "judaizm",
      "religia Egipcjan",
      "hinduizm",
      "wiara w Jahwe"
    ],
    "categories": [
      "monoteizm",
      "politeizm"
    ],
    "answer": {
      "monoteizm": [
        "judaizm",
        "wiara w Jahwe"
      ],
      "politeizm": [
        "religia Egipcjan",
        "hinduizm"
      ]
    },
    "explanation": "Judaizm był monoteistyczny, a religia Egipcjan i hinduizm były politeistyczne."
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz osiągnięcia cywilizacji chińskiej wymienione w podręczniku.",
    "options": [
      "papier",
      "porcelana",
      "proch strzelniczy",
      "jedwab",
      "metody druku",
      "piramidy w Gizie"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Do osiągnięć Chińczyków podręcznik zalicza papier, porcelanę, proch strzelniczy, jedwab oraz metody druku.",
    "image": "/img/r01_jedwabny_szlak_karawana.jpg"
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r01",
  number: 1,
  title: "Pierwsze cywilizacje",
  icon: "🏺",
  sectionOrder: [
    "Życie pierwszych ludzi",
    "Miasta-państwa Mezopotamii",
    "W Egipcie faraonów",
    "W starożytnym Izraelu",
    "Cywilizacje Indii i Chin",
    "Od hieroglifów do alfabetu",
    "Super trudne"
  ],
  sectionIcons: {
    "Życie pierwszych ludzi": "🪨",
    "Miasta-państwa Mezopotamii": "🏺",
    "W Egipcie faraonów": "🔺",
    "W starożytnym Izraelu": "🕎",
    "Cywilizacje Indii i Chin": "🐉",
    "Od hieroglifów do alfabetu": "✍️",
    "Super trudne": "🔥"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
