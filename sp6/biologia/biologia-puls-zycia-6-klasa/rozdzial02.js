// Skróty sekcji (do identyfikatorów ćwiczeń):
//   PAR  = Parzydełkowce
//   PLA  = Płazińce
//   NIC  = Nicienie
//   PIE  = Pierścienice
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_PAR_01",
    "section": "Parzydełkowce",
    "type": "single_choice",
    "prompt": "Komórki parzydełkowe są parzydełkowcom potrzebne przede wszystkim do czego?",
    "options": [
      "Do polowania i obrony",
      "Do oddychania przez skrzela",
      "Do wytwarzania wapiennego szkieletu",
      "Do poruszania szczecinkami",
      "Do trawienia w jelicie",
      "Do składania jaj w glebie"
    ],
    "answer": 0,
    "explanation": "Komórki parzydełkowe zawierają paraliżujący płyn i służą do obezwładniania ofiar oraz obrony przed drapieżnikami.",
    "image": "r02_komorka_parzydelkowa.jpg"
  },
  {
    "id": "R02_PAR_02",
    "section": "Parzydełkowce",
    "type": "true_false",
    "prompt": "Parzydełkowce żyją wyłącznie w środowisku wodnym.",
    "options": null,
    "answer": true,
    "explanation": "W rozdziale podkreślono, że parzydełkowce żyją wyłącznie w wodzie, głównie w morzach i oceanach."
  },
  {
    "id": "R02_PAR_03",
    "section": "Parzydełkowce",
    "type": "multi_select",
    "prompt": "Zaznacz cechy budowy typowe dla parzydełkowców.",
    "options": [
      "Jama chłonąco-trawiąca",
      "Otwór gębowy otoczony czułkami lub ramionami",
      "Dwie warstwy komórek nabłonka",
      "Segmenty z pękami szczecinek",
      "Gruby oskórek odporny na enzymy"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Ciało parzydełkowców ma dwie warstwy nabłonka, jamę chłonąco-trawiącą i otwór gębowy otoczony czułkami lub ramionami."
  },
  {
    "id": "R02_PAR_04",
    "section": "Parzydełkowce",
    "type": "match",
    "prompt": "Połącz postać parzydełkowca z jej cechą.",
    "options": null,
    "left": [
      "polip",
      "meduza",
      "kolonia"
    ],
    "right": [
      "kształt worka i przytwierdzenie stopą do podłoża",
      "kształt dzwonu lub parasola i zdolność pływania",
      "skupienie połączonych organizmów jednego gatunku"
    ],
    "answer": {
      "polip": "kształt worka i przytwierdzenie stopą do podłoża",
      "meduza": "kształt dzwonu lub parasola i zdolność pływania",
      "kolonia": "skupienie połączonych organizmów jednego gatunku"
    },
    "explanation": "Polip jest osiadły, meduza swobodnie pływa, a kolonia to skupienie połączonych ze sobą organizmów jednego gatunku.",
    "image": "r02_polip_i_meduza.jpg"
  },
  {
    "id": "R02_PAR_05",
    "section": "Parzydełkowce",
    "type": "single_choice",
    "prompt": "Który parzydełkowiec jest wymieniony jako najbardziej znany przedstawiciel tej grupy w Polsce?",
    "options": [
      "Chełbia modra",
      "Pijawka lekarska",
      "Wypławek tygrysi",
      "Glista ludzka",
      "Nereida różnokolorowa",
      "Włosień spiralny"
    ],
    "answer": 0,
    "explanation": "W tekście podano, że w Polsce najbardziej znanym przedstawicielem parzydełkowców jest chełbia modra.",
    "image": "r02_chelbie_i_koralowce.jpg"
  },
  {
    "id": "R02_PAR_06",
    "section": "Parzydełkowce",
    "type": "fill_in",
    "prompt": "Wnętrze ciała polipa i meduzy zajmuje obszerna __________.",
    "options": null,
    "answer": [
      "jama chłonąco-trawiąca"
    ],
    "explanation": "Jama chłonąco-trawiąca zajmuje niemal całe wnętrze ciała parzydełkowców i prowadzi do niej otwór gębowy.",
    "altAnswers": [
      [
        "jama chłonąco-trawiąca",
        "jama chlonaco-trawiaca",
        "jama chłonąco trawiąca"
      ]
    ]
  },
  {
    "id": "R02_PAR_07",
    "section": "Parzydełkowce",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: stułbia płowa, chełbia modra, koral szlachetny, glista ludzka.",
    "options": null,
    "answer": "glista ludzka",
    "explanation": "Stułbia, chełbia i koral szlachetny to parzydełkowce, a glista ludzka należy do nicieni."
  },
  {
    "id": "R02_PAR_08",
    "section": "Parzydełkowce",
    "type": "scenario",
    "prompt": "Podczas spaceru po plaży uczeń znajduje zwierzę o galaretowatym ciele w kształcie parasola, które pływa dzięki skurczom ciała. Którą postać parzydełkowca obserwuje?",
    "options": [
      "Meduzę",
      "Polipa",
      "Wągra",
      "Segment",
      "Siodełko"
    ],
    "answer": 0,
    "explanation": "Meduza ma kształt dzwonu lub parasola i potrafi pływać dzięki rytmicznym skurczom ciała.",
    "image": "r02_chelbie_i_koralowce.jpg"
  },
  {
    "id": "R02_PAR_09",
    "section": "Parzydełkowce",
    "type": "riddle",
    "prompt": "Jak nazywa się parzydełkowiec żyjący w rzekach, jeziorach i stawach, przyczepiony do liści lub łodyg roślin?",
    "options": null,
    "answer": "Stułbia płowa",
    "explanation": "Stułbia płowa jest pospolitym w Polsce parzydełkowcem żyjącym w wodach słodkich.",
    "altAnswers": [
      "Stułbia płowa",
      "stulbia plowa",
      "stułbia"
    ]
  },
  {
    "id": "R02_PAR_10",
    "section": "Parzydełkowce",
    "type": "true_false",
    "prompt": "Koralowce żyją tylko w wodach słonych i występują wyłącznie w postaci polipów.",
    "options": null,
    "answer": true,
    "explanation": "W rozdziale zapisano, że koralowce żyją tylko w wodach słonych i występują wyłącznie jako polipy."
  },
  {
    "id": "R02_PAR_11",
    "section": "Parzydełkowce",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady znaczenia parzydełkowców podane w rozdziale.",
    "options": [
      "Koralowce budują rafy koralowe",
      "Meduzy są pożywieniem w niektórych krajach",
      "Niektóre koralowce wykorzystuje się do wyrobu biżuterii",
      "Pijawki dostarczają substancji przeciw krzepnięciu krwi",
      "Dżdżownice spulchniają glebę"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Rafy koralowe powstają z wapiennych szkieletów koralowców, meduzy bywają pożywieniem, a koralowce mogą służyć do wyrobu ozdób."
  },
  {
    "id": "R02_PAR_12",
    "section": "Parzydełkowce",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do postaci parzydełkowców.",
    "options": null,
    "items": [
      "przytwierdzony stopą",
      "kształt parasola",
      "tworzy kolonie",
      "swobodnie pływa"
    ],
    "categories": [
      "polip",
      "meduza"
    ],
    "answer": {
      "polip": [
        "przytwierdzony stopą",
        "tworzy kolonie"
      ],
      "meduza": [
        "kształt parasola",
        "swobodnie pływa"
      ]
    },
    "explanation": "Polip jest osiadły i może tworzyć kolonie, natomiast meduza ma kształt parasola lub dzwonu i pływa.",
    "image": "r02_polip_i_meduza.jpg"
  },
  {
    "id": "R02_PLA_01",
    "section": "Płazińce",
    "type": "single_choice",
    "prompt": "Jaką wspólną cechę ciała mają płazińce?",
    "options": [
      "Długie i płaskie ciało",
      "Ciało podzielone na pierścienie",
      "Nitkowate ciało zwężone na końcach",
      "Galaretowate ciało z ramionami",
      "Ciało z twardym wapiennym szkieletem",
      "Ciało pokryte piórami"
    ],
    "answer": 0,
    "explanation": "Płazińce mają ciało zazwyczaj długie i spłaszczone, dlatego nazywa się je robakami płaskimi.",
    "image": "r02_wyplawek_i_tasiemiec.jpg"
  },
  {
    "id": "R02_PLA_02",
    "section": "Płazińce",
    "type": "true_false",
    "prompt": "Zdecydowana większość płazińców to pasożyty żyjące w narządach wewnętrznych zwierząt kręgowych.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział podaje, że większość płazińców to pasożyty narządów wewnętrznych kręgowców, między innymi jelita cienkiego."
  },
  {
    "id": "R02_PLA_03",
    "section": "Płazińce",
    "type": "match",
    "prompt": "Połącz element budowy tasiemca z funkcją.",
    "options": null,
    "left": [
      "główka",
      "szyjka",
      "dojrzałe człony",
      "nabłonek"
    ],
    "right": [
      "zawiera narządy czepne",
      "wytwarza nowe człony",
      "mają męskie i żeńskie narządy rozrodcze",
      "chroni przed enzymami trawiennymi"
    ],
    "answer": {
      "główka": "zawiera narządy czepne",
      "szyjka": "wytwarza nowe człony",
      "dojrzałe człony": "mają męskie i żeńskie narządy rozrodcze",
      "nabłonek": "chroni przed enzymami trawiennymi"
    },
    "explanation": "Tasiemiec jest przystosowany do życia w jelicie dzięki narządom czepnym, szyjce tworzącej człony i nabłonkowi odpornemu na enzymy.",
    "image": "r02_tasiemiec_budowa.jpg"
  },
  {
    "id": "R02_PLA_04",
    "section": "Płazińce",
    "type": "multi_select",
    "prompt": "Zaznacz przystosowania tasiemców do pasożytniczego trybu życia.",
    "options": [
      "Narządy czepne",
      "Wytwarzanie dużej ilości jaj",
      "Nabłonek chroniący przed strawieniem",
      "Wchłanianie składników odżywczych całą powierzchnią ciała",
      "Szczecinki na każdym segmencie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Tasiemce mają narządy czepne, produkują wiele jaj, są chronione przez nabłonek i pobierają pokarm całą powierzchnią ciała."
  },
  {
    "id": "R02_PLA_05",
    "section": "Płazińce",
    "type": "fill_in",
    "prompt": "Organizm, w którym żyją dorosłe pasożyty, to żywiciel __________.",
    "options": null,
    "answer": [
      "ostateczny"
    ],
    "explanation": "Żywiciel ostateczny to organizm, w którym żyją dorosłe postacie pasożyta.",
    "altAnswers": [
      [
        "ostateczny"
      ]
    ]
  },
  {
    "id": "R02_PLA_06",
    "section": "Płazińce",
    "type": "riddle",
    "prompt": "Jak nazywa się larwa tasiemca mająca postać pęcherzyka z płynem i główką tasiemca?",
    "options": null,
    "answer": "Wągier",
    "explanation": "Wągier jest larwą tasiemca; występuje w mięśniach żywiciela pośredniego.",
    "altAnswers": [
      "Wągier",
      "wagier",
      "wągry"
    ]
  },
  {
    "id": "R02_PLA_07",
    "section": "Płazińce",
    "type": "sequence",
    "prompt": "Ułóż etapy rozwoju tasiemca uzbrojonego w poprawnej kolejności.",
    "options": null,
    "items": [
      "Człony z jajami trafiają do środowiska",
      "W jelicie człowieka rozwija się dorosły tasiemiec",
      "Świnia zjada człony z jajami",
      "Człowiek zjada mięso świni z wągrami",
      "W mięśniach świni rozwijają się wągry"
    ],
    "answer": [
      "Człony z jajami trafiają do środowiska",
      "Świnia zjada człony z jajami",
      "W mięśniach świni rozwijają się wągry",
      "Człowiek zjada mięso świni z wągrami",
      "W jelicie człowieka rozwija się dorosły tasiemiec"
    ],
    "explanation": "W cyklu tasiemca uzbrojonego jaja trafiają do środowiska, świnia jest żywicielem pośrednim, a człowiek zaraża się po zjedzeniu mięsa z wągrami.",
    "image": "r02_cykl_tasiemca.jpg"
  },
  {
    "id": "R02_PLA_08",
    "section": "Płazińce",
    "type": "single_choice",
    "prompt": "Które zwierzę jest żywicielem pośrednim tasiemca nieuzbrojonego?",
    "options": [
      "Krowa",
      "Świnia",
      "Człowiek",
      "Ryba",
      "Dżdżownica",
      "Owsik"
    ],
    "answer": 0,
    "explanation": "Dla tasiemca nieuzbrojonego żywicielem pośrednim jest krowa, a żywicielem ostatecznym człowiek."
  },
  {
    "id": "R02_PLA_09",
    "section": "Płazińce",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: wypławek, tasiemiec uzbrojony, tasiemiec nieuzbrojony, nereida.",
    "options": null,
    "answer": "nereida",
    "explanation": "Wypławek i oba tasiemce to płazińce, natomiast nereida jest pierścienicą."
  },
  {
    "id": "R02_PLA_10",
    "section": "Płazińce",
    "type": "true_false",
    "prompt": "Wypławki są drapieżnikami zasiedlającymi głównie środowiska wodne.",
    "options": null,
    "answer": true,
    "explanation": "Wypławki nie są pasożytami; żyją głównie w wodzie i polują na drobne zwierzęta."
  },
  {
    "id": "R02_PLA_11",
    "section": "Płazińce",
    "type": "scenario",
    "prompt": "Ktoś zjadł surowe lub niedogotowane mięso zawierające wągry. Jakiej choroby dotyczy to zagrożenie opisane w rozdziale?",
    "options": [
      "Tasiemczycy",
      "Owsicy",
      "Glistnicy",
      "Włośnicy",
      "Bielenia raf"
    ],
    "answer": 0,
    "explanation": "Tasiemczyca jest wywołana przez tasiemca żyjącego w jelicie cienkim człowieka, a do zarażenia dochodzi po zjedzeniu mięsa z wągrami.",
    "image": "r02_cykl_tasiemca.jpg"
  },
  {
    "id": "R02_PLA_12",
    "section": "Płazińce",
    "type": "single_choice",
    "prompt": "Czym tasiemiec uzbrojony różni się od tasiemca nieuzbrojonego według opisu główki?",
    "options": [
      "Ma przyssawki i wieniec haczyków",
      "Nie ma przyssawek",
      "Ma czułki i wąsy",
      "Ma siodełko",
      "Ma tylko jeden człon",
      "Ma segmenty ze szczecinkami"
    ],
    "answer": 0,
    "explanation": "Główka tasiemca uzbrojonego ma cztery przyssawki i wieniec haczyków, a główka tasiemca nieuzbrojonego ma przyssawki bez haczyków.",
    "image": "r02_tasiemiec_budowa.jpg"
  },
  {
    "id": "R02_NIC_01",
    "section": "Nicienie",
    "type": "single_choice",
    "prompt": "Jaki kształt ciała jest charakterystyczny dla nicieni?",
    "options": [
      "Wydłużony i nitkowaty",
      "Płaski i taśmowaty",
      "Dzwonowaty lub parasolowaty",
      "Segmentowany z pierścieniami",
      "Workowaty z otworem gębowym u góry",
      "Krótki i kulisty"
    ],
    "answer": 0,
    "explanation": "Nicienie mają długie, nitkowate ciało, zwykle zwężone na końcach.",
    "image": "r02_nicienie_porownanie.jpg"
  },
  {
    "id": "R02_NIC_02",
    "section": "Nicienie",
    "type": "multi_select",
    "prompt": "Zaznacz nicienie wymienione jako pasożyty wewnętrzne człowieka.",
    "options": [
      "Glista ludzka",
      "Owsik ludzki",
      "Włosień spiralny",
      "Wypławek tygrysi",
      "Pijawka lekarska"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "W rozdziale wymieniono glistę ludzką, owsika ludzkiego i włośnia spiralnego jako nicienie pasożytujące u człowieka."
  },
  {
    "id": "R02_NIC_03",
    "section": "Nicienie",
    "type": "true_false",
    "prompt": "Nicienie występują tylko w wodach słonych.",
    "options": null,
    "answer": false,
    "explanation": "Nicienie spotyka się we wszystkich środowiskach wodnych i lądowych, a wiele żyje w organizmach roślin i zwierząt."
  },
  {
    "id": "R02_NIC_04",
    "section": "Nicienie",
    "type": "fill_in",
    "prompt": "Ciało nicieni chroni gruby __________.",
    "options": null,
    "answer": [
      "oskórek"
    ],
    "explanation": "Gruby oskórek nicieni chroni je przed szkodliwymi substancjami, a u pasożytów także przed enzymami trawiennymi żywiciela.",
    "altAnswers": [
      [
        "oskórek",
        "oskorek"
      ]
    ]
  },
  {
    "id": "R02_NIC_05",
    "section": "Nicienie",
    "type": "sequence",
    "prompt": "Ułóż etapy rozwoju glisty ludzkiej zgodnie z opisem w rozdziale.",
    "options": null,
    "items": [
      "Larwy wędrują przez narządy ciała",
      "Człowiek połyka jaja glisty",
      "Dorosłe glisty składają jaja w jelicie",
      "Larwy kończą wędrówkę w jelicie cienkim",
      "Jaja z kałem dostają się do gleby"
    ],
    "answer": [
      "Człowiek połyka jaja glisty",
      "Larwy wędrują przez narządy ciała",
      "Larwy kończą wędrówkę w jelicie cienkim",
      "Dorosłe glisty składają jaja w jelicie",
      "Jaja z kałem dostają się do gleby"
    ],
    "explanation": "Po połknięciu jaj larwy glisty wędrują między innymi przez płuca, a następnie wracają do jelita cienkiego, gdzie dojrzewają.",
    "image": "r02_cykl_glisty.jpg"
  },
  {
    "id": "R02_NIC_06",
    "section": "Nicienie",
    "type": "match",
    "prompt": "Połącz chorobę z wywołującym ją nicieniem.",
    "options": null,
    "left": [
      "glistnica",
      "owsica",
      "włośnica"
    ],
    "right": [
      "glista ludzka",
      "owsik ludzki",
      "włosień spiralny"
    ],
    "answer": {
      "glistnica": "glista ludzka",
      "owsica": "owsik ludzki",
      "włośnica": "włosień spiralny"
    },
    "explanation": "Nazwy chorób pochodzą od nicieni, które je wywołują: glisty, owsika i włośnia."
  },
  {
    "id": "R02_NIC_07",
    "section": "Nicienie",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: glista ludzka, owsik ludzki, włosień spiralny, chełbia modra.",
    "options": null,
    "answer": "chełbia modra",
    "explanation": "Glista, owsik i włosień są nicieniami, natomiast chełbia modra jest parzydełkowcem."
  },
  {
    "id": "R02_NIC_08",
    "section": "Nicienie",
    "type": "single_choice",
    "prompt": "Która choroba może rozwinąć się po zjedzeniu surowego lub niedogotowanego mięsa świni albo dzika zawierającego larwy?",
    "options": [
      "Włośnica",
      "Glistnica",
      "Owsica",
      "Tasiemczyca",
      "Bielenie raf",
      "Pasożytowanie pijawek"
    ],
    "answer": 0,
    "explanation": "Włośnica jest wywoływana przez włośnia spiralnego; zarażenie następuje po zjedzeniu mięsa z larwami włośnia.",
    "image": "r02_owsiki_i_wlosnie.jpg"
  },
  {
    "id": "R02_NIC_09",
    "section": "Nicienie",
    "type": "scenario",
    "prompt": "Dziecko odczuwa silne swędzenie okolic odbytu nasilające się nocą, źle śpi i ma trudności z koncentracją. Która choroba pasuje do tego opisu z rozdziału?",
    "options": [
      "Owsica",
      "Glistnica",
      "Włośnica",
      "Tasiemczyca",
      "Parzydełkowanie"
    ],
    "answer": 0,
    "explanation": "Swędzenie okolic odbytu nasilające się w nocy jest opisane jako objaw owsicy wywołanej przez owsika ludzkiego.",
    "image": "r02_owsiki_i_wlosnie.jpg"
  },
  {
    "id": "R02_NIC_10",
    "section": "Nicienie",
    "type": "riddle",
    "prompt": "Jak nazywa się nicień pasożytujący w jelicie cienkim człowieka, którego samice osiągają długość 35 cm?",
    "options": null,
    "answer": "Glista ludzka",
    "explanation": "Glista ludzka pasożytuje w jelicie cienkim człowieka, a jej samice mogą osiągać 35 cm długości.",
    "altAnswers": [
      "Glista ludzka",
      "glista"
    ]
  },
  {
    "id": "R02_NIC_11",
    "section": "Nicienie",
    "type": "multi_select",
    "prompt": "Zaznacz sposoby zapobiegania chorobom wywoływanym przez nicienie podane w rozdziale.",
    "options": [
      "Mycie rąk po powrocie do domu i po toalecie",
      "Dokładne mycie owoców i warzyw",
      "Jedzenie mięsa przebadanego weterynaryjnie",
      "Jedzenie surowego mięsa z targowiska",
      "Picie nieprzegotowanej wody"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Higiena rąk, mycie owoców i warzyw oraz spożywanie mięsa przebadanego weterynaryjnie zmniejszają ryzyko zarażenia nicieniami."
  },
  {
    "id": "R02_NIC_12",
    "section": "Nicienie",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do skutków lub znaczenia nicieni.",
    "options": null,
    "items": [
      "wywołują glistnicę",
      "są pokarmem innych zwierząt",
      "żerują na burakach cukrowych",
      "zjadają bakterie i protisty"
    ],
    "categories": [
      "znaczenie negatywne",
      "znaczenie pozytywne"
    ],
    "answer": {
      "znaczenie negatywne": [
        "wywołują glistnicę",
        "żerują na burakach cukrowych"
      ],
      "znaczenie pozytywne": [
        "są pokarmem innych zwierząt",
        "zjadają bakterie i protisty"
      ]
    },
    "explanation": "Pasożytnicze nicienie szkodzą ludziom i uprawom, natomiast wolno żyjące mogą być pokarmem oraz uczestniczyć w obiegu materii.",
    "image": "r02_nicienie_porownanie.jpg"
  },
  {
    "id": "R02_PIE_01",
    "section": "Pierścienice",
    "type": "single_choice",
    "prompt": "Co jest charakterystyczną cechą ciała pierścienic?",
    "options": [
      "Podział na segmenty lub pierścienie",
      "Obecność komórek parzydełkowych",
      "Ciało nitkowate bez segmentów",
      "Ciało płaskie i taśmowate",
      "Wapienny szkielet rafowy",
      "Postać wyłącznie meduzy"
    ],
    "answer": 0,
    "explanation": "Pierścienice mają ciało podzielone na krótkie odcinki nazywane segmentami lub pierścieniami.",
    "image": "r02_dzdzownica_budowa.jpg"
  },
  {
    "id": "R02_PIE_02",
    "section": "Pierścienice",
    "type": "true_false",
    "prompt": "Pierścienice żyją wyłącznie w organizmach zwierząt i roślin.",
    "options": null,
    "answer": false,
    "explanation": "Pierścienice żyją w wodach słonych i słodkich oraz w wilgotnych środowiskach lądowych, zwłaszcza w glebie i ściółce."
  },
  {
    "id": "R02_PIE_03",
    "section": "Pierścienice",
    "type": "match",
    "prompt": "Połącz pierścienicę z opisem środowiska lub trybu życia.",
    "options": null,
    "left": [
      "dżdżownica ziemna",
      "nereida różnokolorowa",
      "pijawka lekarska"
    ],
    "right": [
      "żyje w glebie i odżywia się szczątkami organizmów",
      "żyje na dnie mórz i jest drapieżnikiem",
      "żyje w płytkich wodach stojących i odżywia się krwią"
    ],
    "answer": {
      "dżdżownica ziemna": "żyje w glebie i odżywia się szczątkami organizmów",
      "nereida różnokolorowa": "żyje na dnie mórz i jest drapieżnikiem",
      "pijawka lekarska": "żyje w płytkich wodach stojących i odżywia się krwią"
    },
    "explanation": "Dżdżownica jest lądowym destruentem, nereida morskim drapieżnikiem, a pijawka lekarska pasożytem zewnętrznym.",
    "image": "r02_nereida_i_pijawka.jpg"
  },
  {
    "id": "R02_PIE_04",
    "section": "Pierścienice",
    "type": "multi_select",
    "prompt": "Zaznacz elementy budowy dżdżownicy opisane w rozdziale.",
    "options": [
      "Pęki szczecinek ułatwiające poruszanie",
      "Warstwa śluzu chroniąca ciało",
      "Siodełko ważne w rozmnażaniu",
      "Czułki i wąsy na głowie",
      "Dwie przyssawki na końcach ciała"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Dżdżownica ma szczecinki, śluz i siodełko, ale nie ma głowy z czułkami ani przyssawek pijawek."
  },
  {
    "id": "R02_PIE_05",
    "section": "Pierścienice",
    "type": "fill_in",
    "prompt": "Oskórek pierścienic jest pokryty warstwą __________.",
    "options": null,
    "answer": [
      "śluzu"
    ],
    "explanation": "Warstwa śluzu chroni ciało pierścienic przed drobnymi uszkodzeniami i ułatwia poruszanie się.",
    "altAnswers": [
      [
        "śluzu",
        "sluzu",
        "śluz"
      ]
    ]
  },
  {
    "id": "R02_PIE_06",
    "section": "Pierścienice",
    "type": "riddle",
    "prompt": "Jak nazywa się część ciała dorosłych dżdżownic, która odgrywa ważną rolę podczas rozmnażania płciowego?",
    "options": null,
    "answer": "Siodełko",
    "explanation": "Siodełko to zgrubiała część ciała dżdżownicy związana z rozmnażaniem płciowym.",
    "altAnswers": [
      "Siodełko",
      "siodelko"
    ]
  },
  {
    "id": "R02_PIE_07",
    "section": "Pierścienice",
    "type": "scenario",
    "prompt": "W doświadczeniu w jednym słoju umieszczono dżdżownice, a drugi pozostawiono bez nich. Po kilku tygodniach rośliny w słoju z dżdżownicami były wyższe. Jaki wniosek najlepiej pasuje do doświadczenia?",
    "options": [
      "Dżdżownice przyczyniają się do zwiększania żyzności gleby",
      "Dżdżownice niszczą próchnicę",
      "Dżdżownice żyją tylko w wodzie słonej",
      "Dżdżownice nie wpływają na glebę",
      "Dżdżownice są pasożytami roślin"
    ],
    "answer": 0,
    "explanation": "Dżdżownice spulchniają glebę i uczestniczą w tworzeniu próchnicy, więc mogą poprawiać warunki wzrostu roślin.",
    "image": "r02_pierscienice_w_glebie.jpg"
  },
  {
    "id": "R02_PIE_08",
    "section": "Pierścienice",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: dżdżownica ziemna, nereida różnokolorowa, pijawka lekarska, stułbia płowa.",
    "options": null,
    "answer": "stułbia płowa",
    "explanation": "Dżdżownica, nereida i pijawka to pierścienice, a stułbia płowa jest parzydełkowcem."
  },
  {
    "id": "R02_PIE_09",
    "section": "Pierścienice",
    "type": "multi_select",
    "prompt": "Zaznacz cechy pijawki lekarskiej opisane w rozdziale.",
    "options": [
      "Ma dwie przyssawki",
      "Nie ma wyodrębnionej głowy",
      "Żywi się krwią zwierząt kręgowych",
      "Ma boczne wyrostki z licznymi szczecinkami",
      "Osiąga około 15 cm długości"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Pijawka ma przyssawki, nie ma głowy i żywi się krwią, a w rozdziale podano, że pijawka lekarska osiąga około 15 cm długości.",
    "image": "r02_nereida_i_pijawka.jpg"
  },
  {
    "id": "R02_PIE_10",
    "section": "Pierścienice",
    "type": "single_choice",
    "prompt": "Jaki organizm wymieniono jako pokarm dla ryb akwariowych hodowany przez człowieka?",
    "options": [
      "Rureczniki",
      "Koral szlachetny",
      "Włosień spiralny",
      "Stułbia płowa",
      "Wągry",
      "Owsiki"
    ],
    "answer": 0,
    "explanation": "Człowiek hoduje niektóre pierścienice, na przykład rureczniki, jako pokarm dla ryb akwariowych."
  },
  {
    "id": "R02_PIE_11",
    "section": "Pierścienice",
    "type": "true_false",
    "prompt": "Nereida różnokolorowa żyje na dnie mórz, także Morza Bałtyckiego.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział opisuje nereidę jako morską pierścienicę żyjącą na dnie mórz, również w Morzu Bałtyckim."
  },
  {
    "id": "R02_PIE_12",
    "section": "Pierścienice",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do pierścienic.",
    "options": null,
    "items": [
      "drąży korytarze w glebie",
      "ma dwie przyssawki",
      "ma czułki i wąsy na głowie",
      "jest pokarmem kreta"
    ],
    "categories": [
      "dżdżownica",
      "pijawka",
      "nereida"
    ],
    "answer": {
      "dżdżownica": [
        "drąży korytarze w glebie",
        "jest pokarmem kreta"
      ],
      "pijawka": [
        "ma dwie przyssawki"
      ],
      "nereida": [
        "ma czułki i wąsy na głowie"
      ]
    },
    "explanation": "Dżdżownice żyją w glebie i są pokarmem kretów, pijawki mają przyssawki, a nereidy mają narządy zmysłów na głowie.",
    "image": "r02_dzdzownica_budowa.jpg"
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która cecha z tabeli podsumowującej najlepiej odróżnia meduzę od polipa pod względem galaretowatej substancji?",
    "options": [
      "Meduza ma bardzo grubą warstwę tej substancji",
      "Meduza nie ma jej wcale",
      "Polip ma bardzo grubą warstwę tej substancji",
      "Obie postacie mają identyczną ilość tej substancji",
      "Substancja występuje tylko u koralowców"
    ],
    "answer": 0,
    "explanation": "W podsumowaniu porównano polipa i meduzę: u polipa warstwa galaretowatej substancji jest cienka, a u meduzy bardzo gruba.",
    "image": "r02_polip_i_meduza.jpg"
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz informacje zgodne z opisem raf koralowych i koralowców.",
    "options": [
      "Rafy należą do najbogatszych środowisk życia na Ziemi",
      "Rafy występują w ciepłych morzach",
      "Koralowce występują wyłącznie jako polipy",
      "Większość koralowców wytwarza wapienny szkielet",
      "Rafy najczęściej występują w głębinach poniżej 1000 m"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Rafy koralowe są bogatymi środowiskami ciepłych mórz, a tworzą je głównie koralowce-polipy wytwarzające wapienny szkielet."
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz gatunek tasiemca z właściwą cechą.",
    "options": null,
    "left": [
      "tasiemiec uzbrojony",
      "tasiemiec nieuzbrojony",
      "oba gatunki tasiemców"
    ],
    "right": [
      "ma główkę z przyssawkami i wieńcem haczyków",
      "ma główkę z przyssawkami bez haczyków",
      "żywicielem ostatecznym jest człowiek"
    ],
    "answer": {
      "tasiemiec uzbrojony": "ma główkę z przyssawkami i wieńcem haczyków",
      "tasiemiec nieuzbrojony": "ma główkę z przyssawkami bez haczyków",
      "oba gatunki tasiemców": "żywicielem ostatecznym jest człowiek"
    },
    "explanation": "Tasiemiec uzbrojony ma haczyki, nieuzbrojony ich nie ma, a dorosłe formy obu pasożytują u człowieka.",
    "image": "r02_tasiemiec_budowa.jpg"
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Tasiemiec uzbrojony ma około __________ długości, a jego ciało składa się z główki, szyjki i wielu członów.",
    "options": null,
    "answer": [
      "2 m"
    ],
    "explanation": "W rozdziale podano, że tasiemiec uzbrojony osiąga około 2 m długości.",
    "altAnswers": [
      [
        "2 m",
        "2 metry",
        "dwóch metrów",
        "dwa metry"
      ]
    ]
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się proces, w którym koralowce tracą glony ze swoich ciał i stają się białe?",
    "options": null,
    "answer": "Bielenie raf koralowych",
    "explanation": "Zbyt wysoka temperatura wody może powodować wyrzucanie glonów przez koralowce; utrata barw to bielenie raf koralowych.",
    "altAnswers": [
      "Bielenie raf koralowych",
      "bielenie raf",
      "bielenie koralowców"
    ]
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Uczeń porównuje choroby pasożytnicze. W jednej z nich dorosłe osobniki żyją w jelicie cienkim człowieka i innych ssaków, a larwy z krwią docierają do mięśni, gdzie zwijają się w spiralę. Która to choroba?",
    "options": [
      "Włośnica",
      "Owsica",
      "Glistnica",
      "Tasiemczyca",
      "Choroba raf"
    ],
    "answer": 0,
    "explanation": "Opis dotyczy włośnia spiralnego: dorosłe osobniki żyją w jelicie cienkim, a larwy trafiają do mięśni i otaczają się ochronną torebką.",
    "image": "r02_owsiki_i_wlosnie.jpg"
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: żywiciel pośredni, żywiciel ostateczny, wągier, siodełko.",
    "options": null,
    "answer": "siodełko",
    "explanation": "Żywiciel pośredni, żywiciel ostateczny i wągier dotyczą cyklu rozwojowego tasiemca, a siodełko jest częścią ciała dżdżownicy."
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaki wynik opisano w doświadczeniu dotyczącym wpływu dżdżownic na żyzność gleby?",
    "options": [
      "Rośliny w słoju z dżdżownicami były wyższe o około 0,5 cm",
      "Rośliny bez dżdżownic były wyższe o około 5 cm",
      "Dżdżownice zjadły wszystkie nasiona",
      "W obu słojach nie wykiełkowały żadne rośliny",
      "W słoju z dżdżownicami nie było piasku"
    ],
    "answer": 0,
    "explanation": "W doświadczeniu po dwóch tygodniach rośliny w słoju z dżdżownicami były wyższe o około 0,5 cm niż w słoju bez nich.",
    "image": "r02_pierscienice_w_glebie.jpg"
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Nereida różnokolorowa osiąga długość około __________ i żyje na dnie mórz.",
    "options": null,
    "answer": [
      "20 cm"
    ],
    "explanation": "Opis nereidy podaje, że osiąga ona około 20 cm długości i żyje na dnie mórz, także Morza Bałtyckiego.",
    "altAnswers": [
      [
        "20 cm",
        "20 centymetrów",
        "około 20 cm"
      ]
    ]
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz pierścienicę z cechą liczbową podaną w rozdziale.",
    "options": null,
    "left": [
      "dżdżownica ziemna",
      "pijawka lekarska",
      "robak palolo"
    ],
    "right": [
      "ciało zbudowane z około 100 segmentów",
      "osiąga 15 cm długości",
      "osiąga około 40 cm długości"
    ],
    "answer": {
      "dżdżownica ziemna": "ciało zbudowane z około 100 segmentów",
      "pijawka lekarska": "osiąga 15 cm długości",
      "robak palolo": "osiąga około 40 cm długości"
    },
    "explanation": "Rozdział podaje liczby dla kilku pierścienic: dżdżownica ma około 100 segmentów, pijawka lekarska 15 cm, a palolo około 40 cm.",
    "image": "r02_nereida_i_pijawka.jpg"
  },
  {
    "id": "R02_HARD_11",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Rozmnażanie się i rozwój pasożytniczych nicieni zachodzą w organizmie jednego żywiciela.",
    "options": null,
    "answer": true,
    "explanation": "W podsumowaniu zaznaczono, że rozwój pasożytniczych nicieni zachodzi w organizmie jednego żywiciela, w przeciwieństwie do tasiemców."
  },
  {
    "id": "R02_HARD_12",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Koralowce najlepiej rozwijają się w wodzie o temperaturze od __________ do __________.",
    "options": null,
    "answer": [
      "20°C",
      "26°C"
    ],
    "explanation": "W tekście o zagrożeniach raf podano, że koralowce najlepiej rozwijają się w wodzie o temperaturze od 20°C do 26°C.",
    "altAnswers": [
      [
        "20°C",
        "20 C",
        "20 stopni C",
        "20 stopni"
      ],
      [
        "26°C",
        "26 C",
        "26 stopni C",
        "26 stopni"
      ]
    ]
  },
  {
    "id": "R02_HARD_13",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które stwierdzenie najlepiej porównuje wypławka i tasiemca pod względem nabłonka?",
    "options": [
      "Wypławek ma nabłonek z rzęskami, a tasiemiec nabłonek bez rzęsek chroniący przed strawieniem",
      "Oba mają nabłonek z rzęskami do pływania w jelicie",
      "Tasiemiec ma szczecinki, a wypławek przyssawki",
      "Wypławek nie ma nabłonka, a tasiemiec ma wapienny szkielet",
      "Oba mają nabłonek z komórkami parzydełkowymi"
    ],
    "answer": 0,
    "explanation": "Niepasożytnicze płazińce, takie jak wypławki, mogą mieć rzęski ułatwiające ruch, a tasiemce mają nabłonek bez rzęsek chroniący przed enzymami żywiciela."
  },
  {
    "id": "R02_HARD_14",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy bielenia raf koralowych w poprawnej kolejności.",
    "options": null,
    "items": [
      "Koralowce stają się całkowicie białe",
      "Zbyt wysoka temperatura wody szkodzi koralowcom",
      "Koralowce wyrzucają glony ze swoich ciał",
      "Glony żyją w ciałach koralowców i dostarczają im pokarm",
      "Barwy koralowców stopniowo blakną"
    ],
    "answer": [
      "Glony żyją w ciałach koralowców i dostarczają im pokarm",
      "Zbyt wysoka temperatura wody szkodzi koralowcom",
      "Koralowce wyrzucają glony ze swoich ciał",
      "Barwy koralowców stopniowo blakną",
      "Koralowce stają się całkowicie białe"
    ],
    "explanation": "Bielenie raf zaczyna się od utraty glonów przez koralowce pod wpływem zbyt wysokiej temperatury wody; bez glonów koralowce tracą barwy.",
    "image": "r02_chelbie_i_koralowce.jpg"
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r02",
  number: 2,
  title: "Od parzydełkowców do pierścienic",
  icon: "🪼",
  sectionOrder: [
    "Parzydełkowce",
    "Płazińce",
    "Nicienie",
    "Pierścienice"
  ],
  sectionIcons: {
    "Parzydełkowce": "🪼",
    "Płazińce": "🪱",
    "Nicienie": "🧵",
    "Pierścienice": "🌱"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
