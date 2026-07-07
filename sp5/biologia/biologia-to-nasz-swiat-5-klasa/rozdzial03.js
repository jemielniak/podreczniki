// Rozdział 3 - To nasz świat, klasa 5
// Wygenerowane ćwiczenia: 50 podstawowych + 20 "Super trudne"
// Ilustracje: 15 do puli podstawowej + 7 do puli "Super trudne"

const ALL_EXERCISES = [
  {
    "id": "R03_CHR_01",
    "section": "Czym charakteryzują się rośliny?",
    "type": "single_choice",
    "prompt": "Który zestaw najlepiej opisuje większość roślin?",
    "options": [
      "Mają chlorofil i same robią pokarm",
      "Zjadają inne organizmy",
      "Nie potrzebują światła",
      "Zawsze żyją tylko w wodzie"
    ],
    "answer": 0,
    "explanation": "Większość roślin ma chlorofil i dzięki światłu wytwarza pokarm w fotosyntezie."
  },
  {
    "id": "R03_CHR_02",
    "section": "Czym charakteryzują się rośliny?",
    "type": "sort",
    "image": "/img/tns_r03_podzial_roslin.jpg",
    "prompt": "Posortuj grupy roślin do dobrych kategorii.",
    "options": null,
    "items": [
      "mchy",
      "paprociowe",
      "nagonasienne",
      "okrytonasienne"
    ],
    "categories": [
      "zarodnikowe",
      "nasienne"
    ],
    "answer": {
      "zarodnikowe": [
        "mchy",
        "paprociowe"
      ],
      "nasienne": [
        "nagonasienne",
        "okrytonasienne"
      ]
    },
    "explanation": "Mchy i paprociowe rozmnażają się za pomocą zarodników. Nagonasienne i okrytonasienne tworzą nasiona."
  },
  {
    "id": "R03_CHR_03",
    "section": "Czym charakteryzują się rośliny?",
    "type": "true_false",
    "prompt": "Rośliny naczyniowe mają tkankę przewodzącą.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Tkanka przewodząca rozprowadza wodę, sole mineralne i substancje pokarmowe."
  },
  {
    "id": "R03_CHR_04",
    "section": "Czym charakteryzują się rośliny?",
    "type": "fill_in",
    "prompt": "Rośliny wytwarzają pokarm dzięki dostępowi do __________ i obecności __________.",
    "options": null,
    "answer": [
      "światła",
      "chlorofilu"
    ],
    "altAnswers": [
      [
        "światła",
        "światlu",
        "swiatła",
        "swiatlu"
      ],
      [
        "chlorofilu",
        "chlorofil",
        "chlorofilem"
      ]
    ],
    "explanation": "Do fotosyntezy potrzebne są światło i chlorofil - zielony barwnik obecny w komórkach roślin."
  },
  {
    "id": "R03_CHR_05",
    "section": "Czym charakteryzują się rośliny?",
    "type": "scenario",
    "image": "/img/tns_r03_roslina_slonce_chlorofil.jpg",
    "prompt": "Kuba postawił jedną roślinę w jasnym miejscu, a drugą zamknął w ciemnej szafce. Która będzie miała lepsze warunki do wytwarzania pokarmu?",
    "options": [
      "Ta w jasnym miejscu",
      "Ta w szafce",
      "Obie takie same",
      "Żadna z nich"
    ],
    "answer": 0,
    "explanation": "Rośliny potrzebują światła, aby przeprowadzać fotosyntezę i wytwarzać pokarm."
  },
  {
    "id": "R03_CHR_06",
    "section": "Czym charakteryzują się rośliny?",
    "type": "multi_select",
    "prompt": "Zaznacz miejsca, w których mogą żyć rośliny.",
    "options": [
      "Na lądzie",
      "W wodach słodkich",
      "W wodach słonych",
      "Tylko w lesie"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Rośliny żyją w bardzo różnych środowiskach - na lądzie oraz w wodach słodkich i słonych. Nie tylko w lesie."
  },
  {
    "id": "R03_CHR_07",
    "section": "Czym charakteryzują się rośliny?",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: mchy, paprociowe, nagonasienne, widłakowe.",
    "options": null,
    "answer": "nagonasienne",
    "explanation": "Nagonasienne są roślinami nasiennymi, a mchy, paprociowe i widłakowe należą do roślin zarodnikowych."
  },
  {
    "id": "R03_CHR_08",
    "section": "Czym charakteryzują się rośliny?",
    "type": "match",
    "prompt": "Połącz pojęcie z krótkim wyjaśnieniem.",
    "options": null,
    "left": [
      "zarodnik",
      "nasiono",
      "roślina naczyniowa",
      "roślina nienaczyniowa"
    ],
    "right": [
      "pojedyncza komórka do rozmnażania",
      "ma tkankę przewodzącą",
      "nie ma tkanki przewodzącej",
      "zawiera zarodek i łupinę nasienną"
    ],
    "answer": {
      "zarodnik": "pojedyncza komórka do rozmnażania",
      "nasiono": "zawiera zarodek i łupinę nasienną",
      "roślina naczyniowa": "ma tkankę przewodzącą",
      "roślina nienaczyniowa": "nie ma tkanki przewodzącej"
    },
    "explanation": "Zarodnik to pojedyncza komórka służąca do rozmnażania, a nasiono jest lepiej chronione i zawiera zarodek. Rośliny dzielimy też według obecności tkanki przewodzącej."
  },
  {
    "id": "R03_CHR_09",
    "section": "Czym charakteryzują się rośliny?",
    "type": "single_choice",
    "image": "/img/tns_r03_trzy_grupy_zarodnikowe.jpg",
    "prompt": "Do której grupy należą mchy?",
    "options": [
      "Do nasiennych naczyniowych",
      "Do zarodnikowych nienaczyniowych",
      "Do okrytonasiennych",
      "Do nagonasiennych"
    ],
    "answer": 1,
    "explanation": "Mchy rozmnażają się przez zarodniki i nie mają tkanki przewodzącej."
  },
  {
    "id": "R03_CHR_10",
    "section": "Czym charakteryzują się rośliny?",
    "type": "riddle",
    "prompt": "Jestem zielonym barwnikiem, dzięki mnie roślina może robić pokarm. Kim jestem?",
    "options": null,
    "answer": "chlorofil",
    "altAnswers": [
      "chlorofil",
      "chlorofilu",
      "chlorofilem"
    ],
    "explanation": "Chlorofil nadaje roślinom zielony kolor i uczestniczy w fotosyntezie."
  },
  {
    "id": "R03_CHR_11",
    "section": "Czym charakteryzują się rośliny?",
    "type": "single_choice",
    "prompt": "Dlaczego łuskiewnik różowy jest wyjątkiem wśród roślin opisanych w rozdziale?",
    "options": [
      "Bo nie ma korzeni",
      "Bo jest pasożytem i pobiera pokarm od żywiciela",
      "Bo rośnie tylko zimą",
      "Bo nie jest rośliną"
    ],
    "answer": 1,
    "explanation": "Łuskiewnik różowy to roślina pasożytnicza. Pobiera wodę i substancje pokarmowe od innej rośliny."
  },
  {
    "id": "R03_CHR_12",
    "section": "Czym charakteryzują się rośliny?",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania pokarmu przez roślinę w prostej kolejności.",
    "options": null,
    "items": [
      "powstaje pokarm",
      "dociera światło",
      "roślina ma chlorofil",
      "zachodzi fotosynteza"
    ],
    "answer": [
      "roślina ma chlorofil",
      "dociera światło",
      "zachodzi fotosynteza",
      "powstaje pokarm"
    ],
    "explanation": "Gdy roślina ma chlorofil i ma dostęp do światła, może przeprowadzić fotosyntezę i wytworzyć pokarm."
  },
  {
    "id": "R03_CHR_13",
    "section": "Czym charakteryzują się rośliny?",
    "type": "scenario",
    "prompt": "Ola porządkuje zdjęcia roślin. Chce oddzielić rośliny nasienne od zarodnikowych. Gdzie powinna włożyć sosnę?",
    "options": [
      "Do zarodnikowych",
      "Do nasiennych",
      "Do mchów",
      "Do paprociowych"
    ],
    "answer": 1,
    "explanation": "Sosna należy do roślin nasiennych - wytwarza nasiona."
  },
  {
    "id": "R03_TKR_01",
    "section": "Jaka jest rola tkanek roślinnych?",
    "type": "single_choice",
    "image": "/img/tns_r03_tkanki_podzial.jpg",
    "prompt": "Na jakie dwa wielkie rodzaje dzielimy tkanki roślinne?",
    "options": [
      "Na zielone i brązowe",
      "Na twórcze i stałe",
      "Na wodne i lądowe",
      "Na duże i małe"
    ],
    "answer": 1,
    "explanation": "Tkanki roślinne dzielimy na twórcze oraz stałe."
  },
  {
    "id": "R03_TKR_02",
    "section": "Jaka jest rola tkanek roślinnych?",
    "type": "true_false",
    "prompt": "Tkanki twórcze odpowiadają za wzrost rośliny.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Komórki tkanek twórczych dzielą się, dlatego roślina może rosnąć."
  },
  {
    "id": "R03_TKR_03",
    "section": "Jaka jest rola tkanek roślinnych?",
    "type": "multi_select",
    "prompt": "Zaznacz tkanki stałe.",
    "options": [
      "okrywająca",
      "miękiszowa",
      "przewodząca",
      "wierzchołkowa"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Tkanki stałe to między innymi okrywająca, miękiszowa i przewodząca. Wierzchołkowa jest tkanką twórczą."
  },
  {
    "id": "R03_TKR_04",
    "section": "Jaka jest rola tkanek roślinnych?",
    "type": "match",
    "image": "/img/tns_r03_tkanka_wierzcholkowa_boczna.jpg",
    "prompt": "Połącz tkankę twórczą z jej rolą.",
    "options": null,
    "left": [
      "wierzchołkowa",
      "boczna"
    ],
    "right": [
      "zwiększa długość rośliny",
      "zwiększa grubość rośliny"
    ],
    "answer": {
      "wierzchołkowa": "zwiększa długość rośliny",
      "boczna": "zwiększa grubość rośliny"
    },
    "explanation": "Tkanka wierzchołkowa powoduje wzrost na długość, a boczna - na grubość."
  },
  {
    "id": "R03_TKR_05",
    "section": "Jaka jest rola tkanek roślinnych?",
    "type": "fill_in",
    "prompt": "Tkanka __________ przewozi wodę i sole mineralne, a tkanka __________ przewozi substancje pokarmowe.",
    "options": null,
    "answer": [
      "drewno",
      "łyko"
    ],
    "altAnswers": [
      [
        "drewno",
        "drewna",
        "drewnie",
        "drewnem"
      ],
      [
        "łyko",
        "lyko",
        "łyka",
        "lyka",
        "łykiem",
        "lykiem"
      ]
    ],
    "explanation": "Drewno transportuje wodę i sole mineralne, a łyko - substancje pokarmowe."
  },
  {
    "id": "R03_TKR_06",
    "section": "Jaka jest rola tkanek roślinnych?",
    "type": "single_choice",
    "prompt": "Która tkanka chroni wnętrze rośliny przed czynnikami zewnętrznymi?",
    "options": [
      "miękiszowa",
      "okrywająca",
      "wzmacniająca",
      "boczna"
    ],
    "answer": 1,
    "explanation": "Tkanka okrywająca osłania roślinę i reguluje wymianę substancji z otoczeniem."
  },
  {
    "id": "R03_TKR_07",
    "section": "Jaka jest rola tkanek roślinnych?",
    "type": "multi_select",
    "image": "/img/tns_r03_aparaty_szparkowe_wlosniki.jpg",
    "prompt": "Co jest związane z tkanką okrywającą?",
    "options": [
      "aparaty szparkowe",
      "włośniki",
      "kłosy zarodniowe",
      "kolce"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Tkanka okrywająca może tworzyć aparaty szparkowe, włośniki oraz kolce. Kłosy zarodniowe nie są jej elementem."
  },
  {
    "id": "R03_TKR_08",
    "section": "Jaka jest rola tkanek roślinnych?",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: okrywająca, miękiszowa, przewodząca, nasienna.",
    "options": null,
    "answer": "nasienna",
    "explanation": "Okrywająca, miękiszowa i przewodząca to rodzaje tkanek. Nasienna nie jest tkanką."
  },
  {
    "id": "R03_TKR_09",
    "section": "Jaka jest rola tkanek roślinnych?",
    "type": "scenario",
    "prompt": "Bartek zauważył, że starsze drzewo jest coraz grubsze. Która tkanka najbardziej się z tym wiąże?",
    "options": [
      "boczna",
      "wierzchołkowa",
      "miękiszowa",
      "okrywająca"
    ],
    "answer": 0,
    "explanation": "Tkanka twórcza boczna zwiększa obwód, czyli grubość łodyg i korzeni."
  },
  {
    "id": "R03_TKR_10",
    "section": "Jaka jest rola tkanek roślinnych?",
    "type": "sort",
    "image": "/img/tns_r03_drewno_lyko_transport.jpg",
    "prompt": "Przyporządkuj zadania do drewna i łyka.",
    "options": null,
    "items": [
      "przenosi wodę z korzeni",
      "przenosi sole mineralne",
      "przenosi pokarm z liści",
      "rozprowadza substancje odżywcze do innych części rośliny"
    ],
    "categories": [
      "drewno",
      "łyko"
    ],
    "answer": {
      "drewno": [
        "przenosi wodę z korzeni",
        "przenosi sole mineralne"
      ],
      "łyko": [
        "przenosi pokarm z liści",
        "rozprowadza substancje odżywcze do innych części rośliny"
      ]
    },
    "explanation": "Drewno niesie wodę i sole mineralne z korzeni, a łyko rozprowadza substancje pokarmowe z liści i zielonych łodyg."
  },
  {
    "id": "R03_TKR_11",
    "section": "Jaka jest rola tkanek roślinnych?",
    "type": "riddle",
    "prompt": "Jestem tkanką, która nadaje roślinie sztywność i elastyczność. Kim jestem?",
    "options": null,
    "answer": "tkanka wzmacniająca",
    "altAnswers": [
      "tkanka wzmacniająca",
      "wzmacniająca",
      "tkanki wzmacniającej",
      "tkanką wzmacniającą"
    ],
    "explanation": "Tkanka wzmacniająca pomaga roślinie nie łamać się i osiągać większe rozmiary."
  },
  {
    "id": "R03_TKR_12",
    "section": "Jaka jest rola tkanek roślinnych?",
    "type": "true_false",
    "prompt": "Aparaty szparkowe najczęściej znajdują się na spodniej stronie liścia.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Tak najczęściej pokazuje budowa liścia opisana w rozdziale."
  },
  {
    "id": "R03_TKR_13",
    "section": "Jaka jest rola tkanek roślinnych?",
    "type": "match",
    "prompt": "Połącz nazwę tkanki z jej główną rolą.",
    "options": null,
    "left": [
      "okrywająca",
      "miękiszowa",
      "przewodząca",
      "wzmacniająca"
    ],
    "right": [
      "chroni",
      "wypełnia i magazynuje",
      "transportuje",
      "usztywnia i uelastycznia"
    ],
    "answer": {
      "okrywająca": "chroni",
      "miękiszowa": "wypełnia i magazynuje",
      "przewodząca": "transportuje",
      "wzmacniająca": "usztywnia i uelastycznia"
    },
    "explanation": "Każda tkanka ma własną pracę: okrywająca chroni, miękiszowa wypełnia i może magazynować, przewodząca transportuje, a wzmacniająca usztywnia."
  },
  {
    "id": "R03_TKR_14",
    "section": "Jaka jest rola tkanek roślinnych?",
    "type": "scenario",
    "prompt": "Maja ogląda przekrój liścia i widzi komórki z zielonym barwnikiem. Z jaką tkanką to kojarzymy najbardziej?",
    "options": [
      "z tkanką miękiszową",
      "z tkanką wzmacniającą",
      "z tkanką boczną",
      "z kłączem"
    ],
    "answer": 0,
    "explanation": "W komórkach tkanki miękiszowej może znajdować się chlorofil, potrzebny do fotosyntezy."
  },
  {
    "id": "R03_MCH_01",
    "section": "Jakie są cechy mchów?",
    "type": "match",
    "image": "/img/tns_r03_mech_budowa.jpg",
    "prompt": "Połącz element budowy mchu z nazwą.",
    "options": null,
    "left": [
      "część przytwierdzająca do podłoża",
      "puszka, w której dojrzewają zarodniki",
      "ochrona młodej zarodni",
      "bezlistna część wyrastająca wiosną"
    ],
    "right": [
      "zarodnia",
      "trzonek",
      "czepek",
      "chwytniki"
    ],
    "answer": {
      "część przytwierdzająca do podłoża": "chwytniki",
      "puszka, w której dojrzewają zarodniki": "zarodnia",
      "ochrona młodej zarodni": "czepek",
      "bezlistna część wyrastająca wiosną": "trzonek"
    },
    "explanation": "Chwytniki przytwierdzają mech, zarodnia zawiera zarodniki, czepek chroni, a trzonek unosi zarodnię."
  },
  {
    "id": "R03_MCH_02",
    "section": "Jakie są cechy mchów?",
    "type": "single_choice",
    "prompt": "Dlaczego mchy zwykle są niskie?",
    "options": [
      "Bo mają za mało zieleni",
      "Bo nie mają tkanek przewodzących",
      "Bo zawsze rosną w cieniu",
      "Bo nie tworzą łodyżek"
    ],
    "answer": 1,
    "explanation": "Mchy nie mają tkanek przewodzących, więc słabo rozprowadzają wodę i substancje pokarmowe po całym organizmie."
  },
  {
    "id": "R03_MCH_03",
    "section": "Jakie są cechy mchów?",
    "type": "fill_in",
    "prompt": "Mchy są przymocowane do podłoża przez __________, a rozmnażają się za pomocą __________.",
    "options": null,
    "answer": [
      "chwytniki",
      "zarodników"
    ],
    "altAnswers": [
      [
        "chwytniki",
        "chwytników",
        "chwytnikami",
        "chwytnik"
      ],
      [
        "zarodników",
        "zarodniki",
        "zarodnikow",
        "zarodnikami",
        "zarodnik"
      ]
    ],
    "explanation": "Mchy trzymają się podłoża dzięki chwytnikom, a nowe rośliny powstają z zarodników."
  },
  {
    "id": "R03_MCH_04",
    "section": "Jakie są cechy mchów?",
    "type": "single_choice",
    "image": "/img/tns_r03_mchy_poduszki.jpg",
    "prompt": "Jak najczęściej wyglądają skupiska mchów?",
    "options": [
      "Jak wysokie drzewa",
      "Jak zielone poduszki",
      "Jak suche patyki",
      "Jak kolczaste krzewy"
    ],
    "answer": 1,
    "explanation": "Mchy często rosną w skupiskach przypominających miękkie zielone poduszki."
  },
  {
    "id": "R03_MCH_05",
    "section": "Jakie są cechy mchów?",
    "type": "true_false",
    "prompt": "Listki mchów mogą chłonąć wodę całą swoją powierzchnią.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Woda pobierana przez chwytniki nie zaspokaja wszystkich potrzeb mchu, więc listki też ją chłoną."
  },
  {
    "id": "R03_MCH_06",
    "section": "Jakie są cechy mchów?",
    "type": "multi_select",
    "prompt": "Zaznacz miejsca, w których mogą rosnąć mchy.",
    "options": [
      "na skałach",
      "na dachach",
      "w wodach słodkich",
      "tylko na pustyni"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Mchy zwykle rosną w miejscach wilgotnych i cienistych, ale spotyka się je także na skałach, dachach i w wodach słodkich."
  },
  {
    "id": "R03_MCH_07",
    "section": "Jakie są cechy mchów?",
    "type": "sort",
    "image": "/img/tns_r03_mchy_siedliska.jpg",
    "prompt": "Posortuj przykłady do odpowiedniego miejsca życia mchu.",
    "options": null,
    "items": [
      "cień w lesie",
      "wilgotny pień",
      "skała",
      "dach",
      "strumień",
      "bagno"
    ],
    "categories": [
      "ląd",
      "woda słodka"
    ],
    "answer": {
      "ląd": [
        "cień w lesie",
        "wilgotny pień",
        "skała",
        "dach"
      ],
      "woda słodka": [
        "strumień",
        "bagno"
      ]
    },
    "explanation": "Większość mchów rośnie na lądzie, ale niektóre są przystosowane do życia w wodach słodkich."
  },
  {
    "id": "R03_MCH_08",
    "section": "Jakie są cechy mchów?",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: chwytniki, zarodnia, czepek, szyszka.",
    "options": null,
    "answer": "szyszka",
    "explanation": "Chwytniki, zarodnia i czepek to elementy związane z mchem. Szyszka nie należy do budowy mchów."
  },
  {
    "id": "R03_MCH_09",
    "section": "Jakie są cechy mchów?",
    "type": "scenario",
    "prompt": "Po kilku suchych dniach listki mchu mocno przylgnęły do łodyżki. Po co mech to robi?",
    "options": [
      "Żeby przyciągnąć owady",
      "Żeby zmniejszyć utratę wody",
      "Żeby szybciej urosnąć",
      "Żeby wypuścić nasiona"
    ],
    "answer": 1,
    "explanation": "Ściśle przylegające listki zmniejszają powierzchnię parowania, więc mech traci mniej wody."
  },
  {
    "id": "R03_MCH_10",
    "section": "Jakie są cechy mchów?",
    "type": "riddle",
    "prompt": "Jestem rośliną zarodnikową bez tkanek przewodzących. Często tworzę zielone poduszki. Kim jestem?",
    "options": null,
    "answer": "mech",
    "altAnswers": [
      "mech",
      "mch",
      "mchem",
      "mchy"
    ],
    "explanation": "To opis mchu - niskiej rośliny zarodnikowej bez tkanek przewodzących."
  },
  {
    "id": "R03_MCH_11",
    "section": "Jakie są cechy mchów?",
    "type": "scenario",
    "image": "/img/tns_r03_mchy_na_stoku_woda.jpg",
    "prompt": "W górach długo pada deszcz. Dlaczego obecność mchów na stoku może pomóc przyrodzie?",
    "options": [
      "Bo mchy przyspieszają spływanie wody",
      "Bo mchy zatrzymują dużo wody",
      "Bo mchy zamieniają wodę w kamienie",
      "Bo mchy zasłaniają słońce"
    ],
    "answer": 1,
    "explanation": "Mchy zatrzymują ogromne ilości wody, dzięki czemu woda nie spływa tak gwałtownie po stoku i ryzyko powodzi jest mniejsze."
  },
  {
    "id": "R03_MCH_12",
    "section": "Jakie są cechy mchów?",
    "type": "multi_select",
    "prompt": "Dlaczego mchy są ważne w przyrodzie? Zaznacz dobre odpowiedzi.",
    "options": [
      "zatrzymują wodę",
      "są wskaźnikami zmian środowiska",
      "zapewniają schronienie zwierzętom",
      "tworzą prąd elektryczny"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Mchy zatrzymują wodę, pomagają oceniać stan środowiska i dają schronienie wielu zwierzętom."
  },
  {
    "id": "R03_MCH_13",
    "section": "Jakie są cechy mchów?",
    "type": "single_choice",
    "image": "/img/tns_r03_torfowisko.jpg",
    "prompt": "Co powstaje z obumarłych części mchów na podtopionym terenie w warunkach beztlenowych?",
    "options": [
      "marmur",
      "torf",
      "węgiel kamienny",
      "piasek"
    ],
    "answer": 1,
    "explanation": "Z obumarłych części mchów i innych organizmów na takich terenach powstaje torf."
  },
  {
    "id": "R03_PWS_01",
    "section": "Jak rozróżnić paprociowe, widłakowe i skrzypowe?",
    "type": "multi_select",
    "image": "/img/tns_r03_trzy_grupy_zarodnikowe.jpg",
    "prompt": "Jakie cechy są wspólne dla paprociowych, widłakowych i skrzypowych?",
    "options": [
      "rozmnażają się przez zarodniki",
      "mają tkankę przewodzącą",
      "są roślinami naczyniowymi",
      "zawsze mają kwiaty"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Te trzy grupy to rośliny zarodnikowe naczyniowe. Nie tworzą kwiatów opisanych jak u roślin nasiennych."
  },
  {
    "id": "R03_PWS_02",
    "section": "Jak rozróżnić paprociowe, widłakowe i skrzypowe?",
    "type": "true_false",
    "prompt": "Paprociowe, widłakowe i skrzypowe zwykle są większe od mchów, bo mają tkankę przewodzącą.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Tkanka przewodząca pozwala im lepiej transportować substancje i osiągać większe rozmiary."
  },
  {
    "id": "R03_PWS_03",
    "section": "Jak rozróżnić paprociowe, widłakowe i skrzypowe?",
    "type": "single_choice",
    "image": "/img/tns_r03_paproc_zarodnie.jpg",
    "prompt": "Co najlepiej rozpoznaje paproć?",
    "options": [
      "duże liście na ogonkach",
      "członowane pędy",
      "płożąca łodyga",
      "szyszki"
    ],
    "answer": 0,
    "explanation": "Paprociowe mają duże liście na ogonkach. U niektórych od spodu liści są skupiska zarodni."
  },
  {
    "id": "R03_PWS_04",
    "section": "Jak rozróżnić paprociowe, widłakowe i skrzypowe?",
    "type": "match",
    "prompt": "Połącz grupę roślin z cechą rozpoznawczą.",
    "options": null,
    "left": [
      "paprociowe",
      "widłakowe",
      "skrzypowe"
    ],
    "right": [
      "duże liście na ogonkach",
      "płożąca łodyga i widlaste pędy",
      "członowane pędy i liście z węzłów"
    ],
    "answer": {
      "paprociowe": "duże liście na ogonkach",
      "widłakowe": "płożąca łodyga i widlaste pędy",
      "skrzypowe": "członowane pędy i liście z węzłów"
    },
    "explanation": "Każdą z tych grup rozpoznasz po innej budowie pędów lub liści."
  },
  {
    "id": "R03_PWS_05",
    "section": "Jak rozróżnić paprociowe, widłakowe i skrzypowe?",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: paprociowe, widłakowe, skrzypowe, okrytonasienne.",
    "options": null,
    "answer": "okrytonasienne",
    "explanation": "Paprociowe, widłakowe i skrzypowe są roślinami zarodnikowymi naczyniowymi. Okrytonasienne należą do roślin nasiennych."
  },
  {
    "id": "R03_PWS_06",
    "section": "Jak rozróżnić paprociowe, widłakowe i skrzypowe?",
    "type": "single_choice",
    "image": "/img/tns_r03_widlak_plozaca_lodyga.jpg",
    "prompt": "Która cecha najbardziej pasuje do widłakowych?",
    "options": [
      "drobne liście i widlaste rozgałęzienia",
      "duże liście na ogonkach",
      "wiosenny i letni pęd",
      "brak tkanki przewodzącej"
    ],
    "answer": 0,
    "explanation": "Widłakowe rozpoznajemy po płożącej łodydze, widlasto rozgałęzionych pędach i drobnych liściach."
  },
  {
    "id": "R03_PWS_07",
    "section": "Jak rozróżnić paprociowe, widłakowe i skrzypowe?",
    "type": "scenario",
    "prompt": "Nina widzi roślinę z członowanym pędem. Z węzłów wyrastają liście i boczne odgałęzienia. Co to najpewniej jest?",
    "options": [
      "mech",
      "skrzyp",
      "paproć",
      "sosna"
    ],
    "answer": 1,
    "explanation": "Tak wygląda skrzyp - ma członowane pędy i liście wyrastające z węzłów."
  },
  {
    "id": "R03_PWS_08",
    "section": "Jak rozróżnić paprociowe, widłakowe i skrzypowe?",
    "type": "fill_in",
    "prompt": "Paprociowe, widłakowe i skrzypowe tworzą w lasach __________ leśne i rozmnażają się za pomocą __________.",
    "options": null,
    "answer": [
      "runo",
      "zarodników"
    ],
    "altAnswers": [
      [
        "runo",
        "runo leśne",
        "runa",
        "runem"
      ],
      [
        "zarodników",
        "zarodniki",
        "zarodnikow",
        "zarodnikami",
        "zarodnik"
      ]
    ],
    "explanation": "Te grupy są składnikami runa leśnego, a nowe rośliny powstają z zarodników."
  },
  {
    "id": "R03_PWS_09",
    "section": "Jak rozróżnić paprociowe, widłakowe i skrzypowe?",
    "type": "single_choice",
    "prompt": "Dlaczego paprociowe, widłakowe i skrzypowe są ważne dla przyrody?",
    "options": [
      "Bo są częścią runa leśnego i dają schronienie małym zwierzętom",
      "Bo produkują śnieg",
      "Bo zawsze rosną tylko w parkach",
      "Bo nie mają żadnego znaczenia"
    ],
    "answer": 0,
    "explanation": "W lesie tworzą runo, są pokarmem roślinożerców i miejscem schronienia wielu małych zwierząt."
  },
  {
    "id": "R03_PWS_10",
    "section": "Jak rozróżnić paprociowe, widłakowe i skrzypowe?",
    "type": "true_false",
    "prompt": "Wszystkie widłaki występujące w Polsce są objęte ochroną.",
    "options": null,
    "answer": true,
    "explanation": "Tak podaje rozdział - wszystkie gatunki widłaków w Polsce są pod ochroną."
  },
  {
    "id": "R03_SUP_01",
    "section": "Super trudne",
    "type": "sort",
    "image": "/img/tns_r03_podzial_roslin.jpg",
    "prompt": "Posortuj grupy roślin według dwóch kategorii naraz. Najpierw wybierz kategorię, do której pasuje każda grupa.",
    "options": null,
    "items": [
      "mchy",
      "paprociowe",
      "widłakowe",
      "skrzypowe",
      "nagonasienne",
      "okrytonasienne"
    ],
    "categories": [
      "zarodnikowe",
      "nasienne"
    ],
    "answer": {
      "zarodnikowe": [
        "mchy",
        "paprociowe",
        "widłakowe",
        "skrzypowe"
      ],
      "nasienne": [
        "nagonasienne",
        "okrytonasienne"
      ]
    },
    "explanation": "Rośliny zarodnikowe tworzą zarodniki, a nasienne - nasiona."
  },
  {
    "id": "R03_SUP_02",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Posortuj grupy roślin do kategorii naczyniowe i nienaczyniowe.",
    "options": null,
    "items": [
      "mchy",
      "paprociowe",
      "widłakowe",
      "skrzypowe",
      "nagonasienne",
      "okrytonasienne"
    ],
    "categories": [
      "naczyniowe",
      "nienaczyniowe"
    ],
    "answer": {
      "naczyniowe": [
        "paprociowe",
        "widłakowe",
        "skrzypowe",
        "nagonasienne",
        "okrytonasienne"
      ],
      "nienaczyniowe": [
        "mchy"
      ]
    },
    "explanation": "Mchy nie mają tkanki przewodzącej, więc są nienaczyniowe. Pozostałe grupy z tego zadania są naczyniowe."
  },
  {
    "id": "R03_SUP_03",
    "section": "Super trudne",
    "type": "scenario",
    "image": "/img/tns_r03_tkanka_wierzcholkowa_boczna.jpg",
    "prompt": "Drzewko po roku jest wyższe i ma grubszy pień. Które tkanki twórcze pracowały w tym czasie?",
    "options": [
      "tylko wierzchołkowa",
      "tylko boczna",
      "wierzchołkowa i boczna",
      "miękiszowa i okrywająca"
    ],
    "answer": 2,
    "explanation": "Wzrost na długość powoduje tkanka wierzchołkowa, a wzrost na grubość - tkanka boczna."
  },
  {
    "id": "R03_SUP_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które stwierdzenia o tkankach są poprawne?",
    "options": [
      "komórki tkanek twórczych dzielą się",
      "tkanka miękiszowa może zawierać chlorofil",
      "drewno przenosi pokarm z liści",
      "tkanka wzmacniająca nadaje sztywność"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Komórki tkanek twórczych się dzielą, miękisz może zawierać chlorofil, a tkanka wzmacniająca usztywnia roślinę. Pokarm z liści przenosi łyko, nie drewno."
  },
  {
    "id": "R03_SUP_05",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż prosty ciąg zdarzeń związany z powstawaniem nowych mchów.",
    "options": null,
    "items": [
      "zarodniki wysypują się",
      "wyrastają nowe rośliny",
      "zarodniki dojrzewają w zarodni",
      "zarodniki trafiają w odpowiednie miejsce"
    ],
    "answer": [
      "zarodniki dojrzewają w zarodni",
      "zarodniki wysypują się",
      "zarodniki trafiają w odpowiednie miejsce",
      "wyrastają nowe rośliny"
    ],
    "explanation": "Najpierw zarodniki dojrzewają, potem się wysypują, trafiają na odpowiednie podłoże i wyrastają z nich nowe rośliny."
  },
  {
    "id": "R03_SUP_06",
    "section": "Super trudne",
    "type": "scenario",
    "image": "/img/tns_r03_mech_budowa.jpg",
    "prompt": "Uczeń ogląda roślinę z chwytnikami, łodyżką, drobnymi listkami i zarodnią na trzonku. Jak powinien ją zaklasyfikować?",
    "options": [
      "roślina nasienna naczyniowa",
      "roślina zarodnikowa nienaczyniowa",
      "roślina nasienna nienaczyniowa",
      "roślina wodna bez chlorofilu"
    ],
    "answer": 1,
    "explanation": "To typowy opis mchu - rośliny zarodnikowej, która nie ma tkanki przewodzącej."
  },
  {
    "id": "R03_SUP_07",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Mchy pomagają ograniczać ryzyko __________, bo zatrzymują dużo __________.",
    "options": null,
    "answer": [
      "powodzi",
      "wody"
    ],
    "altAnswers": [
      [
        "powodzi",
        "powódź",
        "powodz",
        "powodzie"
      ],
      [
        "wody",
        "wodę",
        "wode"
      ]
    ],
    "explanation": "Mchy zatrzymują ogromne ilości wody, dlatego podczas opadów mniej jej gwałtownie spływa po stoku."
  },
  {
    "id": "R03_SUP_08",
    "section": "Super trudne",
    "type": "single_choice",
    "image": "/img/tns_r03_torfowisko.jpg",
    "prompt": "Które wyjaśnienie najlepiej tłumaczy, jak torfowce pomagają w powstawaniu torfowisk?",
    "options": [
      "rosną w górę, a dolne części obumierają i gromadzą się",
      "zamieniają skały w piasek",
      "wytwarzają nasiona w wodzie",
      "spalają stare rośliny"
    ],
    "answer": 0,
    "explanation": "Torfowce stale rosną w górę, a ich dolne części obumierają. W podmokłych warunkach z takich szczątków powstaje torf."
  },
  {
    "id": "R03_SUP_09",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: drewno, łyko, miękiszowa, przewodząca.",
    "options": null,
    "answer": "miękiszowa",
    "explanation": "Drewno i łyko są częściami tkanki przewodzącej. Miękiszowa to inny rodzaj tkanki stałej."
  },
  {
    "id": "R03_SUP_10",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz sytuację z tkanką, która najbardziej pomaga roślinie.",
    "options": null,
    "left": [
      "roślina rośnie w górę",
      "korzeń pobiera wodę",
      "liść wymienia gazy z powietrzem",
      "pień się nie łamie"
    ],
    "right": [
      "wzmacniająca",
      "okrywająca",
      "wierzchołkowa",
      "okrywająca z włośnikami"
    ],
    "answer": {
      "roślina rośnie w górę": "wierzchołkowa",
      "korzeń pobiera wodę": "okrywająca z włośnikami",
      "liść wymienia gazy z powietrzem": "okrywająca",
      "pień się nie łamie": "wzmacniająca"
    },
    "explanation": "Wzrost na długość daje tkanka wierzchołkowa, włośniki pomagają pobierać wodę, aparaty szparkowe wymieniają gazy, a tkanka wzmacniająca chroni przed złamaniem."
  },
  {
    "id": "R03_SUP_11",
    "section": "Super trudne",
    "type": "scenario",
    "image": "/img/tns_r03_paproc_zarodnie.jpg",
    "prompt": "Na spodzie dużego liścia widać skupiska zarodni. Jaka to grupa roślin?",
    "options": [
      "paprociowe",
      "mchy",
      "nagonasienne",
      "okrytonasienne"
    ],
    "answer": 0,
    "explanation": "Tak rozpoznasz paprociowe - u niektórych na spodzie liści znajdują się skupiska zarodni."
  },
  {
    "id": "R03_SUP_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Co pomaga odróżnić mchy od paprociowych, widłakowych i skrzypowych?",
    "options": [
      "brak tkanki przewodzącej",
      "małe rozmiary",
      "rozmnażanie przez zarodniki",
      "chwytniki zamiast korzeni"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Mchy odróżnia brak tkanki przewodzącej, małe rozmiary i obecność chwytników. Rozmnażanie przez zarodniki mają także paprociowe, widłakowe i skrzypowe."
  },
  {
    "id": "R03_SUP_13",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Jeśli roślina ma drewno i łyko, to jest rośliną naczyniową.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Drewno i łyko tworzą tkankę przewodzącą, która występuje u roślin naczyniowych."
  },
  {
    "id": "R03_SUP_14",
    "section": "Super trudne",
    "type": "single_choice",
    "image": "/img/tns_r03_widlak_plozaca_lodyga.jpg",
    "prompt": "Który opis najlepiej pasuje do widłakowych?",
    "options": [
      "duże liście na ogonkach i zarodnie pod spodem",
      "płożąca łodyga, drobne liście i widlaste pędy",
      "wysoka łodyga z kwiatami",
      "miękkie poduszki bez tkanki przewodzącej"
    ],
    "answer": 1,
    "explanation": "Widłakowe rozpoznasz po płożącej łodydze, drobnych liściach i widlastych rozgałęzieniach."
  },
  {
    "id": "R03_SUP_15",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Skrzypowe mają pędy zbudowane z __________, a paprociowe mają duże liście na __________.",
    "options": null,
    "answer": [
      "członów",
      "ogonkach"
    ],
    "altAnswers": [
      [
        "członów",
        "czlonow",
        "człony",
        "czlony"
      ],
      [
        "ogonkach",
        "ogonkach liściowych",
        "ogonkach lisciowych",
        "ogonkach"
      ]
    ],
    "explanation": "Skrzypy mają członowaną budowę pędów, a paprocie - duże liście osadzone na ogonkach."
  },
  {
    "id": "R03_SUP_16",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do właściwej grupy roślin zarodnikowych.",
    "options": null,
    "items": [
      "duże liście na ogonkach",
      "widlaste rozgałęzienia pędów",
      "członowane pędy",
      "skupiska zarodni na spodzie liści",
      "płożąca łodyga",
      "liście wyrastające z węzłów"
    ],
    "categories": [
      "paprociowe",
      "widłakowe",
      "skrzypowe"
    ],
    "answer": {
      "paprociowe": [
        "duże liście na ogonkach",
        "skupiska zarodni na spodzie liści"
      ],
      "widłakowe": [
        "widlaste rozgałęzienia pędów",
        "płożąca łodyga"
      ],
      "skrzypowe": [
        "członowane pędy",
        "liście wyrastające z węzłów"
      ]
    },
    "explanation": "Każda z tych grup ma własne cechy rozpoznawcze: paprocie - duże liście, widłaki - płożącą łodygę i widlaste pędy, skrzypy - członowane łodygi i węzły."
  },
  {
    "id": "R03_SUP_17",
    "section": "Super trudne",
    "type": "scenario",
    "image": "/img/tns_r03_skrzyp_pedy.jpg",
    "prompt": "Na wiosnę uczeń widzi brązowawy pęd z zarodniami, a latem zielony pęd tej samej rośliny. O jakiej grupie mowa?",
    "options": [
      "o mchach",
      "o skrzypowych",
      "o nagonasiennych",
      "o porostach"
    ],
    "answer": 1,
    "explanation": "Niektóre skrzypy wytwarzają dwa rodzaje pędów: wiosenne z zarodniami i letnie zielone."
  },
  {
    "id": "R03_SUP_18",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jestem pierwsza na skale lub nieużytku i pomagam tworzyć glebę. Kim jestem jako grupa organizmów?",
    "options": null,
    "answer": "organizm pionierski",
    "altAnswers": [
      "organizm pionierski",
      "organizmami pionierskimi",
      "organizm pionierska",
      "pionier",
      "pionierski organizm"
    ],
    "explanation": "Mchy są organizmami pionierskimi - pojawiają się wcześnie i pomagają w powstawaniu gleby."
  },
  {
    "id": "R03_SUP_19",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która odpowiedź najlepiej łączy budowę i miejsce życia widłaków?",
    "options": [
      "niskie rośliny z płożącą łodygą, spotykane m.in. na skałach i torfowiskach",
      "wysokie drzewa tylko na pustyni",
      "rośliny wodne bez liści",
      "mchy żyjące jedynie w słonej wodzie"
    ],
    "answer": 0,
    "explanation": "Rozdział opisuje widłaki jako niskie rośliny z płożącą łodygą, rosnące m.in. w lasach, na skałach i torfowiskach."
  },
  {
    "id": "R03_SUP_20",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz grupę roślin z tym, co najbardziej zyskują dzięki tkance przewodzącej albo innym cechom.",
    "options": null,
    "left": [
      "paprociowe, widłakowe i skrzypowe",
      "mchy"
    ],
    "right": [
      "mogą osiągać większe rozmiary",
      "łatwo gromadzą wodę w skupiskach"
    ],
    "answer": {
      "paprociowe, widłakowe i skrzypowe": "mogą osiągać większe rozmiary",
      "mchy": "łatwo gromadzą wodę w skupiskach"
    },
    "explanation": "Rośliny zarodnikowe naczyniowe są zwykle większe dzięki tkance przewodzącej, a mchy dobrze magazynują wodę, gdy rosną w zwartych grupach."
  }
];

const KID_PROMPTS = {
  "R03_CHR_05": "Która roślina ma lepsze warunki do robienia pokarmu?",
  "R03_CHR_13": "Do której grupy wrzucić sosnę?",
  "R03_TKR_09": "Która tkanka pogrubia pień?",
  "R03_TKR_14": "Z jaką tkanką kojarzy się zielony barwnik w liściu?",
  "R03_MCH_09": "Po co mech przyciska listki podczas suszy?",
  "R03_MCH_11": "Jak mchy pomagają na deszczowym stoku?",
  "R03_PWS_07": "Jaka roślina ma członowany pęd?",
  "R03_SUP_03": "Które tkanki zrobiły drzewko wyższe i grubsze?",
  "R03_SUP_06": "Jak zaklasyfikować roślinę z chwytnikami i zarodnią?",
  "R03_SUP_11": "Co to za grupa, gdy zarodnie są pod spodem liścia?",
  "R03_SUP_17": "Jaka grupa ma pęd wiosenny i letni?"
};

const chapter = {
  "id": "r03",
  "number": 3,
  "title": "Rośliny zarodnikowe",
  "icon": "🌿",
  "sectionOrder": [
    "Czym charakteryzują się rośliny?",
    "Jaka jest rola tkanek roślinnych?",
    "Jakie są cechy mchów?",
    "Jak rozróżnić paprociowe, widłakowe i skrzypowe?"
  ],
  "sectionIcons": {
    "Czym charakteryzują się rośliny?": "🌞",
    "Jaka jest rola tkanek roślinnych?": "🔬",
    "Jakie są cechy mchów?": "🍀",
    "Jak rozróżnić paprociowe, widłakowe i skrzypowe?": "🌿"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
