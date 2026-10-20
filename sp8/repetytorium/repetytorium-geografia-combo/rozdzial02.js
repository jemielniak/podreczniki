// Skróty sekcji (do identyfikatorów ćwiczeń):
//   LAS  = Krajobraz wilgotnego lasu równikowego
//   SAW  = Krajobraz sawanny
//   PUS  = Krajobraz gorącej pustyni
//   STE  = Krajobraz stepu
//   TAJ  = Krajobraz tajgi
//   TUN  = Krajobraz tundry
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_LAS_01",
    "section": "Krajobraz wilgotnego lasu równikowego",
    "type": "single_choice",
    "prompt": "Jaka jest typowa temperatura powietrza w każdym miesiącu klimatu równikowego wybitnie wilgotnego?",
    "options": [
      "Poniżej 0°C",
      "Powyżej 20°C",
      "Około 5°C",
      "Najwyżej 10°C",
      "Poniżej -10°C",
      "Zawsze poniżej 15°C"
    ],
    "answer": 1,
    "explanation": "W wilgotnym lesie równikowym średnia temperatura każdego miesiąca przekracza 20°C."
  },
  {
    "id": "R02_LAS_02",
    "section": "Krajobraz wilgotnego lasu równikowego",
    "type": "multi_select",
    "prompt": "Zaznacz części świata, w których występują wilgotne lasy równikowe.",
    "options": [
      "Afryka",
      "Azja",
      "Europa",
      "Australia",
      "Antarktyda",
      "Ameryka Południowa"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "explanation": "Lasy te występują w obu Amerykach, Afryce, Azji i Australii, ale nie w Europie ani na Antarktydzie."
  },
  {
    "id": "R02_LAS_03",
    "section": "Krajobraz wilgotnego lasu równikowego",
    "type": "true_false",
    "prompt": "W wilgotnym lesie równikowym intensywny rozwój roślin możliwy jest przez cały rok.",
    "options": null,
    "answer": true,
    "explanation": "Wysokie temperatury i obfite opady umożliwiają równoczesne kwitnienie, owocowanie i rozwój nowych liści."
  },
  {
    "id": "R02_LAS_04",
    "section": "Krajobraz wilgotnego lasu równikowego",
    "type": "fill_in",
    "prompt": "Popołudniowe ulewy związane z wysokim położeniem Słońca to deszcze __________.",
    "options": null,
    "altAnswers": [
      [
        "zenitalne",
        "zenitalnymi"
      ]
    ],
    "answer": [
      "zenitalne"
    ],
    "explanation": "Deszcze zenitalne występują zwykle wczesnym popołudniem, po najgorętszym momencie dnia."
  },
  {
    "id": "R02_LAS_05",
    "section": "Krajobraz wilgotnego lasu równikowego",
    "type": "riddle",
    "prompt": "Jak nazywają się czerwone gleby lasu równikowego, z których ulewy wymywają substancje próchniczne?",
    "options": null,
    "altAnswers": [
      "czerwonoziemy",
      "gleby ferralitowe",
      "czerwonoziem"
    ],
    "answer": "czerwonoziemy",
    "explanation": "Czerwonoziemy, nazywane też glebami ferralitowymi, są ubogie w próchnicę; barwę nadają im związki żelaza."
  },
  {
    "id": "R02_LAS_06",
    "section": "Krajobraz wilgotnego lasu równikowego",
    "type": "odd_one_out",
    "prompt": "Wskaż drzewo niepasujące do gatunków cennego drewna pozyskiwanych z lasów równikowych: mahoń, heban, drzewo palisandrowe, świerk.",
    "options": null,
    "answer": "świerk",
    "explanation": "Mahoń, heban i drzewo palisandrowe dostarczają cennego drewna z lasów równikowych; świerk jest drzewem tajgi."
  },
  {
    "id": "R02_LAS_07",
    "section": "Krajobraz wilgotnego lasu równikowego",
    "type": "scenario",
    "prompt": "Firma wycina drzewa w lesie równikowym, a na miejscu wyrębu zakłada pola i buduje drogi. Jaki proces zachodzi na tym obszarze?",
    "options": [
      "Deforestacja",
      "Pustynnienie",
      "Pasterstwo nomadyczne",
      "Powstawanie zmarzliny"
    ],
    "answer": 0,
    "image": "r02_las_warstwy.jpg",
    "explanation": "Rabunkowy wyrąb i przekształcanie lasu w inne tereny powodują wylesianie, czyli deforestację."
  },
  {
    "id": "R02_LAS_08",
    "section": "Krajobraz wilgotnego lasu równikowego",
    "type": "match",
    "prompt": "Połącz piętro lasu równikowego z jego opisem.",
    "options": null,
    "left": [
      "Piętro średnie",
      "Piętro najwyższych drzew",
      "Piętro zarośli",
      "Piętro koron drzew"
    ],
    "right": [
      "Zwarte sklepienie koron splątanych lianami",
      "Rośliny rosnące najbliżej podłoża",
      "Pojedyncze drzewa sięgające 60–80 m",
      "Nagie pnie, liany i konary"
    ],
    "answer": {
      "Piętro najwyższych drzew": "Pojedyncze drzewa sięgające 60–80 m",
      "Piętro koron drzew": "Zwarte sklepienie koron splątanych lianami",
      "Piętro średnie": "Nagie pnie, liany i konary",
      "Piętro zarośli": "Rośliny rosnące najbliżej podłoża"
    },
    "image": "r02_las_warstwy.jpg",
    "explanation": "Las równikowy jest piętrowy: od zarośli i niższych drzew po zwarty dach koron i najwyższe pojedyncze drzewa."
  },
  {
    "id": "R02_LAS_09",
    "section": "Krajobraz wilgotnego lasu równikowego",
    "type": "sort",
    "prompt": "Przyporządkuj rośliny do upraw strefy okołorównikowej albo do cennych gatunków drewna.",
    "options": null,
    "items": [
      "heban",
      "proso",
      "drzewo palisandrowe",
      "maniok",
      "mahoń",
      "drzewo kauczukowe"
    ],
    "categories": [
      "Rośliny uprawne",
      "Cenne drewno"
    ],
    "answer": {
      "Rośliny uprawne": [
        "proso",
        "maniok",
        "drzewo kauczukowe"
      ],
      "Cenne drewno": [
        "mahoń",
        "heban",
        "drzewo palisandrowe"
      ]
    },
    "explanation": "Proso, maniok i drzewo kauczukowe to rośliny uprawne; mahoń, heban i palisander dostarczają cennego drewna."
  },
  {
    "id": "R02_LAS_10",
    "section": "Krajobraz wilgotnego lasu równikowego",
    "type": "sequence",
    "prompt": "Uporządkuj piętra wilgotnego lasu równikowego od najniższego do najwyższego.",
    "options": null,
    "items": [
      "Piętro koron drzew",
      "Piętro zarośli",
      "Piętro najwyższych drzew",
      "Piętro średnie"
    ],
    "answer": [
      "Piętro zarośli",
      "Piętro średnie",
      "Piętro koron drzew",
      "Piętro najwyższych drzew"
    ],
    "image": "r02_las_warstwy.jpg",
    "explanation": "Warstwowy układ lasu tworzą kolejno: zarośla, warstwa średnia, zwarty dach koron i najwyższe pojedyncze drzewa."
  },
  {
    "id": "R02_SAW_01",
    "section": "Krajobraz sawanny",
    "type": "single_choice",
    "prompt": "W jakiej strefie klimatycznej rozwijają się typowe sawanny?",
    "options": [
      "Okołobiegunowej",
      "Umiarkowanej chłodnej",
      "Podrównikowej",
      "Równikowej wybitnie wilgotnej",
      "Subpolarnej",
      "Umiarkowanej morskiej"
    ],
    "answer": 2,
    "explanation": "Sawanny są charakterystyczne dla strefy podrównikowej, z porą deszczową i suchą."
  },
  {
    "id": "R02_SAW_02",
    "section": "Krajobraz sawanny",
    "type": "multi_select",
    "prompt": "Które cechy są charakterystyczne dla klimatu sawanny?",
    "options": [
      "Pora deszczowa",
      "Całoroczne mrozy",
      "Pora sucha",
      "Całkowity brak opadów",
      "Wysokie temperatury przez cały rok",
      "Lodowiec przez cały rok"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "image": "r02_sawanna_sucha.jpg",
    "explanation": "Na sawannie występują wysokie temperatury przez cały rok oraz dwie pory: deszczowa i sucha."
  },
  {
    "id": "R02_SAW_03",
    "section": "Krajobraz sawanny",
    "type": "true_false",
    "prompt": "Podczas pory suchej na sawannie drzewa mogą tracić liście, a zwierzęta wędrują w poszukiwaniu wody.",
    "options": null,
    "answer": true,
    "image": "r02_sawanna_sucha.jpg",
    "explanation": "Niedostatek wody prowadzi do wysychania traw, zrzucania liści i dalekich wędrówek zwierząt."
  },
  {
    "id": "R02_SAW_04",
    "section": "Krajobraz sawanny",
    "type": "fill_in",
    "prompt": "Wędrowna hodowla stad, połączona ze zmianą miejsca wypasu i zamieszkania, to pasterstwo __________.",
    "options": null,
    "altAnswers": [
      [
        "nomadyczne",
        "koczownicze"
      ]
    ],
    "answer": [
      "nomadyczne"
    ],
    "explanation": "Pasterze nomadyczni przenoszą stada i rodziny na kolejne pastwiska."
  },
  {
    "id": "R02_SAW_05",
    "section": "Krajobraz sawanny",
    "type": "riddle",
    "prompt": "Jak nazywa się charakterystyczne drzewo sawanny wymieniane obok akacji i eukaliptusa?",
    "options": null,
    "altAnswers": [
      "baobab",
      "baobaby"
    ],
    "answer": "baobab",
    "image": "r02_sawanna_wilgotna.jpg",
    "explanation": "Typowe drzewa sawanny to m.in. baobaby, akacje i eukaliptusy."
  },
  {
    "id": "R02_SAW_06",
    "section": "Krajobraz sawanny",
    "type": "odd_one_out",
    "prompt": "Wskaż drzewo nietypowe dla sawanny: akacja, baobab, eukaliptus, jodła.",
    "options": null,
    "answer": "jodła",
    "explanation": "Jodła jest drzewem iglastym charakterystycznym dla chłodniejszych lasów; akacje, baobaby i eukaliptusy spotyka się na sawannie."
  },
  {
    "id": "R02_SAW_07",
    "section": "Krajobraz sawanny",
    "type": "scenario",
    "prompt": "Na danym obszarze pora deszczowa trwa tylko cztery miesiące. Rosną tam niskie suche trawy i kolczaste krzewy. Jaki rodzaj sawanny opisano?",
    "options": [
      "Sawanna wilgotna",
      "Las równikowy",
      "Sawanna sucha",
      "Sawanna kolczasta"
    ],
    "answer": 3,
    "image": "r02_sawanna_sucha.jpg",
    "explanation": "Przy porze deszczowej krótszej niż pięć miesięcy tworzy się sawanna kolczasta."
  },
  {
    "id": "R02_SAW_08",
    "section": "Krajobraz sawanny",
    "type": "match",
    "prompt": "Połącz typ sawanny z długością pory deszczowej.",
    "options": null,
    "left": [
      "Sawanna sucha",
      "Sawanna kolczasta",
      "Sawanna wilgotna"
    ],
    "right": [
      "Mniej niż 5 miesięcy",
      "Ponad 7 miesięcy",
      "Od 5 do 7 miesięcy"
    ],
    "answer": {
      "Sawanna wilgotna": "Ponad 7 miesięcy",
      "Sawanna sucha": "Od 5 do 7 miesięcy",
      "Sawanna kolczasta": "Mniej niż 5 miesięcy"
    },
    "image": "r02_sawanna_wilgotna.jpg",
    "explanation": "Typy sawanny można rozróżniać na podstawie czasu trwania pory deszczowej."
  },
  {
    "id": "R02_SAW_09",
    "section": "Krajobraz sawanny",
    "type": "sort",
    "prompt": "Podziel przykłady gospodarki na sawannie na rośliny uprawne i zwierzęta hodowlane.",
    "options": null,
    "items": [
      "owce",
      "proso",
      "kozy",
      "kukurydza",
      "bydło",
      "sorgo",
      "maniok"
    ],
    "categories": [
      "Rośliny uprawne",
      "Zwierzęta hodowlane"
    ],
    "answer": {
      "Rośliny uprawne": [
        "sorgo",
        "kukurydza",
        "maniok",
        "proso"
      ],
      "Zwierzęta hodowlane": [
        "bydło",
        "kozy",
        "owce"
      ]
    },
    "explanation": "Na sawannie uprawia się między innymi sorgo, kukurydzę, maniok i proso oraz hoduje bydło, kozy i owce."
  },
  {
    "id": "R02_SAW_10",
    "section": "Krajobraz sawanny",
    "type": "sequence",
    "prompt": "Ułóż zmiany przyrodnicze na sawannie, zaczynając od nadejścia pory deszczowej.",
    "options": null,
    "items": [
      "Wędrówki zwierząt za wodą",
      "Nadejście pory suchej",
      "Nadejście pory deszczowej",
      "Bujniejszy rozwój roślinności"
    ],
    "answer": [
      "Nadejście pory deszczowej",
      "Bujniejszy rozwój roślinności",
      "Nadejście pory suchej",
      "Wędrówki zwierząt za wodą"
    ],
    "explanation": "Pora deszczowa pobudza wzrost roślin, a późniejsza pora sucha skłania zwierzęta do migracji."
  },
  {
    "id": "R02_PUS_01",
    "section": "Krajobraz gorącej pustyni",
    "type": "single_choice",
    "prompt": "Jaka roczna suma opadów jest charakterystyczna dla gorącej pustyni?",
    "options": [
      "Powyżej 2000 mm",
      "Poniżej 250 mm",
      "Od 1000 do 1500 mm",
      "Powyżej 5000 mm",
      "Około 1500 mm",
      "Zawsze dokładnie 500 mm"
    ],
    "answer": 1,
    "explanation": "Brak zwartej roślinności na gorących pustyniach wiąże się z opadami poniżej 250 mm rocznie."
  },
  {
    "id": "R02_PUS_02",
    "section": "Krajobraz gorącej pustyni",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki sprzyjające powstawaniu pustyń.",
    "options": [
      "Stałe wyże zwrotnikowe",
      "Duża odległość od zbiorników wodnych",
      "Stały dopływ wilgotnego powietrza",
      "Góry blokujące wilgotne masy powietrza",
      "Zimny prąd morski",
      "Codzienne obfite deszcze"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Pustynie mogą powstawać wskutek wyżów, oddalenia od wody, barier górskich i zimnych prądów morskich."
  },
  {
    "id": "R02_PUS_03",
    "section": "Krajobraz gorącej pustyni",
    "type": "true_false",
    "prompt": "Na gorącej pustyni w dzień może panować upał, a nocą temperatura może spaść poniżej 0°C.",
    "options": null,
    "answer": true,
    "explanation": "Niewielkie zachmurzenie umożliwia szybkie nagrzewanie się podłoża za dnia i oddawanie ciepła nocą."
  },
  {
    "id": "R02_PUS_04",
    "section": "Krajobraz gorącej pustyni",
    "type": "fill_in",
    "prompt": "Dolina pozostająca po krótkotrwałej rzece na pustyni nosi nazwę __________.",
    "options": null,
    "altAnswers": [
      [
        "wadi"
      ]
    ],
    "answer": [
      "wadi"
    ],
    "image": "r02_pustynia_wadi.jpg",
    "explanation": "Gwałtowne, rzadkie ulewy tworzą rzeki epizodyczne, po których pozostają doliny wadi."
  },
  {
    "id": "R02_PUS_05",
    "section": "Krajobraz gorącej pustyni",
    "type": "riddle",
    "prompt": "Jaka pustynia nadbrzeżna w Ameryce Południowej powstała przy wpływie zimnego prądu morskiego?",
    "options": null,
    "altAnswers": [
      "Atakama",
      "Atacama"
    ],
    "answer": "Atakama",
    "explanation": "Atakama i afrykański Namib są przykładami pustyń nadbrzeżnych związanych z zimnymi prądami morskimi."
  },
  {
    "id": "R02_PUS_06",
    "section": "Krajobraz gorącej pustyni",
    "type": "odd_one_out",
    "prompt": "Wskaż pojęcie, które nie określa rodzaju pustyni według podłoża: serir, erg, hamada, czarnoziem.",
    "options": null,
    "answer": "czarnoziem",
    "image": "r02_pustynia_powierzchnie.jpg",
    "explanation": "Serir to pustynia żwirowa, erg piaszczysta, a hamada kamienista; czarnoziem jest glebą stepu."
  },
  {
    "id": "R02_PUS_07",
    "section": "Krajobraz gorącej pustyni",
    "type": "scenario",
    "prompt": "Wilgotne powietrze z wybrzeża zatrzymuje wysokie pasmo górskie. Po jego drugiej stronie powstaje pustynia, podobnie jak Mojave. Jaka jest główna przyczyna suchości?",
    "options": [
      "Występowanie nocy polarnej",
      "Stałe opady zenitalne",
      "Bariera górska",
      "Wysoka żyzność gleb"
    ],
    "answer": 2,
    "explanation": "Góry mogą zablokować dopływ wilgotnego powietrza w głąb lądu."
  },
  {
    "id": "R02_PUS_08",
    "section": "Krajobraz gorącej pustyni",
    "type": "match",
    "prompt": "Połącz przyczynę powstania pustyni z odpowiednim przykładem.",
    "options": null,
    "left": [
      "Zimny prąd morski",
      "Bariera gór",
      "Wyże zwrotnikowe",
      "Oddalenie od wód"
    ],
    "right": [
      "Mojave",
      "Namib",
      "Pustynia Gibsona",
      "Sahara"
    ],
    "answer": {
      "Wyże zwrotnikowe": "Sahara",
      "Oddalenie od wód": "Pustynia Gibsona",
      "Bariera gór": "Mojave",
      "Zimny prąd morski": "Namib"
    },
    "explanation": "Sahara to przykład pustyni zwrotnikowej, Gibsona kontynentalnej, Mojave związanej z górami, a Namib nadbrzeżnej."
  },
  {
    "id": "R02_PUS_09",
    "section": "Krajobraz gorącej pustyni",
    "type": "sort",
    "prompt": "Przyporządkuj opis powierzchni do rodzaju pustyni.",
    "options": null,
    "items": [
      "Odsłonięte głazy i skały",
      "Powierzchnia z iłu",
      "Wydmy piaskowe",
      "Rozległa warstwa żwiru"
    ],
    "categories": [
      "Pustynia piaszczysta",
      "Pustynia żwirowa",
      "Pustynia kamienista",
      "Pustynia ilasta"
    ],
    "answer": {
      "Pustynia piaszczysta": [
        "Wydmy piaskowe"
      ],
      "Pustynia żwirowa": [
        "Rozległa warstwa żwiru"
      ],
      "Pustynia kamienista": [
        "Odsłonięte głazy i skały"
      ],
      "Pustynia ilasta": [
        "Powierzchnia z iłu"
      ]
    },
    "image": "r02_pustynia_powierzchnie.jpg",
    "explanation": "Pustynie dzieli się według dominującego materiału podłoża: piasku, żwiru, skał lub iłu."
  },
  {
    "id": "R02_PUS_10",
    "section": "Krajobraz gorącej pustyni",
    "type": "sequence",
    "prompt": "Ułóż zjawiska w typowym cyklu dobowym temperatury na bezchmurnej pustyni, zaczynając od poranka.",
    "options": null,
    "items": [
      "Silne wychłodzenie nocą",
      "Wzrost temperatury za dnia",
      "Poranne nagrzewanie powierzchni",
      "Wypromieniowanie ciepła po zachodzie Słońca"
    ],
    "answer": [
      "Poranne nagrzewanie powierzchni",
      "Wzrost temperatury za dnia",
      "Wypromieniowanie ciepła po zachodzie Słońca",
      "Silne wychłodzenie nocą"
    ],
    "explanation": "Małe zachmurzenie sprawia, że pustynia szybko nagrzewa się w dzień i szybko traci ciepło nocą."
  },
  {
    "id": "R02_STE_01",
    "section": "Krajobraz stepu",
    "type": "single_choice",
    "prompt": "Gdzie najczęściej powstaje step?",
    "options": [
      "W głębi kontynentu w strefie umiarkowanej",
      "Przy równiku w najwilgotniejszych lasach",
      "W strefie subpolarnej za kołem podbiegunowym",
      "Na dnie oceanów",
      "Na wszystkich obszarach nadbrzeżnych",
      "Wyłącznie na lodowcach"
    ],
    "answer": 0,
    "image": "r02_step_trawiasty.jpg",
    "explanation": "Step rozwija się w strefie umiarkowanej w głębi kontynentów, gdzie opady są zbyt małe dla drzew."
  },
  {
    "id": "R02_STE_02",
    "section": "Krajobraz stepu",
    "type": "multi_select",
    "prompt": "Wybierz nazwy trawiastych formacji stepowych używane w różnych częściach świata.",
    "options": [
      "preria",
      "pampa",
      "puszta",
      "tajga",
      "step",
      "tundra"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Step, preria, pampa i puszta to regionalne nazwy krajobrazów trawiastych."
  },
  {
    "id": "R02_STE_03",
    "section": "Krajobraz stepu",
    "type": "true_false",
    "prompt": "Czarnoziemy stepowe mają zwykle grubą warstwę próchnicy i należą do bardzo żyznych gleb.",
    "options": null,
    "answer": true,
    "image": "r02_step_czarnoziem.jpg",
    "explanation": "Dwa okresy dostawy resztek organicznych sprzyjają tworzeniu żyznego poziomu próchnicznego."
  },
  {
    "id": "R02_STE_04",
    "section": "Krajobraz stepu",
    "type": "fill_in",
    "prompt": "Skałą macierzystą czarnoziemów jest najczęściej __________.",
    "options": null,
    "altAnswers": [
      [
        "less",
        "lessy"
      ]
    ],
    "answer": [
      "less"
    ],
    "explanation": "Less jest skałą osadową związaną z działalnością wiatru i często stanowi skałę macierzystą czarnoziemu."
  },
  {
    "id": "R02_STE_05",
    "section": "Krajobraz stepu",
    "type": "riddle",
    "prompt": "Jak nazywa się odpowiednik stepu występujący w Ameryce Południowej na Nizinie La Platy?",
    "options": null,
    "altAnswers": [
      "pampa",
      "pampas"
    ],
    "answer": "pampa",
    "explanation": "W Ameryce Południowej używa się nazwy pampa; w Ameryce Północnej – preria."
  },
  {
    "id": "R02_STE_06",
    "section": "Krajobraz stepu",
    "type": "odd_one_out",
    "prompt": "Wskaż formację, która nie jest regionalną nazwą stepu: preria, pampa, puszta, tajga.",
    "options": null,
    "answer": "tajga",
    "explanation": "Preria, pampa i puszta są odpowiednikami stepu, natomiast tajga jest lasem iglastym."
  },
  {
    "id": "R02_STE_07",
    "section": "Krajobraz stepu",
    "type": "scenario",
    "prompt": "Rolnik szuka najbardziej wilgotnej odmiany stepu o najżyźniejszych glebach, zwykle użytkowanej jako pola uprawne. Którą wybierze?",
    "options": [
      "Step piołunowy",
      "Step łąkowy",
      "Step ostnicowy",
      "Chłodną pustynię"
    ],
    "answer": 1,
    "image": "r02_step_trawiasty.jpg",
    "explanation": "Step łąkowy jest najwilgotniejszy, najbardziej różnorodny i często przekształcany w pola."
  },
  {
    "id": "R02_STE_08",
    "section": "Krajobraz stepu",
    "type": "match",
    "prompt": "Połącz nazwę regionalną stepu z właściwym obszarem.",
    "options": null,
    "left": [
      "Puszta",
      "Preria",
      "Step",
      "Pampa"
    ],
    "right": [
      "Ameryka Południowa",
      "Europa Wschodnia i Azja",
      "Wielka Nizina Węgierska",
      "Ameryka Północna"
    ],
    "answer": {
      "Preria": "Ameryka Północna",
      "Pampa": "Ameryka Południowa",
      "Puszta": "Wielka Nizina Węgierska",
      "Step": "Europa Wschodnia i Azja"
    },
    "explanation": "Regionalne nazwy stepu wskazują obszary ich występowania: prerię, pampę, pusztę i step właściwy."
  },
  {
    "id": "R02_STE_09",
    "section": "Krajobraz stepu",
    "type": "sort",
    "prompt": "Dopasuj właściwości i użytkowanie do typów stepu.",
    "options": null,
    "items": [
      "Najmniej zasobny w wodę",
      "Częsty w Azji Środkowej",
      "Najżyźniejsze gleby",
      "Zwykle niewykorzystywany gospodarczo",
      "Użytkowany głównie jako pastwiska",
      "Często wykorzystywany pod uprawy"
    ],
    "categories": [
      "Step łąkowy",
      "Step ostnicowy",
      "Step piołunowy"
    ],
    "answer": {
      "Step łąkowy": [
        "Najżyźniejsze gleby",
        "Często wykorzystywany pod uprawy"
      ],
      "Step ostnicowy": [
        "Użytkowany głównie jako pastwiska",
        "Częsty w Azji Środkowej"
      ],
      "Step piołunowy": [
        "Najmniej zasobny w wodę",
        "Zwykle niewykorzystywany gospodarczo"
      ]
    },
    "explanation": "Łąkowy jest najwilgotniejszy, ostnicowy suchszy i pastwiskowy, a piołunowy najsuchszy."
  },
  {
    "id": "R02_STE_10",
    "section": "Krajobraz stepu",
    "type": "sequence",
    "prompt": "Ułóż etapy rocznego rytmu roślinności stepu, zaczynając od wiosny.",
    "options": null,
    "items": [
      "Ponowny wzrost późnym latem",
      "Wiosenny rozwój traw",
      "Zimowy spoczynek roślin",
      "Letnie zahamowanie wzrostu wskutek suszy"
    ],
    "answer": [
      "Wiosenny rozwój traw",
      "Letnie zahamowanie wzrostu wskutek suszy",
      "Ponowny wzrost późnym latem",
      "Zimowy spoczynek roślin"
    ],
    "explanation": "Na stepie wegetacja występuje wiosną i ponownie późnym latem, z przerwą podczas suchego lata."
  },
  {
    "id": "R02_TAJ_01",
    "section": "Krajobraz tajgi",
    "type": "single_choice",
    "prompt": "Na której półkuli występuje tajga?",
    "options": [
      "Tylko południowej",
      "Na obu półkulach w równym stopniu",
      "Wyłącznie równikowej",
      "Tylko w strefie zwrotnikowej",
      "Tylko północnej",
      "Wyłącznie na Antarktydzie"
    ],
    "answer": 4,
    "image": "r02_tajga_iglasta.jpg",
    "explanation": "Tajga występuje wyłącznie na półkuli północnej; na analogicznych szerokościach południowych dominują oceany."
  },
  {
    "id": "R02_TAJ_02",
    "section": "Krajobraz tajgi",
    "type": "multi_select",
    "prompt": "Zaznacz drzewa iglaste charakterystyczne dla tajgi.",
    "options": [
      "sosna",
      "świerk",
      "brzoza",
      "jodła",
      "olcha",
      "modrzew"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "image": "r02_tajga_iglasta.jpg",
    "explanation": "W tajdze dominują sosny, świerki, jodły i modrzewie; olchy oraz brzozy spotyka się m.in. w dolinach rzek."
  },
  {
    "id": "R02_TAJ_03",
    "section": "Krajobraz tajgi",
    "type": "true_false",
    "prompt": "Tajga jasna jest związana między innymi z modrzewiami, które zrzucają igły na zimę.",
    "options": null,
    "answer": true,
    "explanation": "W tajdze jasnej dominują niższe drzewa tracące igły na zimę, a runo bywa ubogie."
  },
  {
    "id": "R02_TAJ_04",
    "section": "Krajobraz tajgi",
    "type": "fill_in",
    "prompt": "Grunt pozostający zamarznięty przez cały rok to wieloletnia __________.",
    "options": null,
    "altAnswers": [
      [
        "zmarzlina",
        "zmarzliną"
      ]
    ],
    "answer": [
      "zmarzlina"
    ],
    "explanation": "Wieloletnia zmarzlina utrudnia wsiąkanie wody i sprzyja wiosennym wezbraniom rzek tajgi."
  },
  {
    "id": "R02_TAJ_05",
    "section": "Krajobraz tajgi",
    "type": "riddle",
    "prompt": "Jaka gleba z wyraźnym poziomem wymywania tworzy się pod lasami iglastymi tajgi?",
    "options": null,
    "altAnswers": [
      "bielicowa",
      "gleba bielicowa",
      "gleby bielicowe"
    ],
    "answer": "bielicowa",
    "image": "r02_tajga_bielica.jpg",
    "explanation": "Gleby bielicowe mają niewielką warstwę próchnicy oraz poziom wymywania oznaczany literą E."
  },
  {
    "id": "R02_TAJ_06",
    "section": "Krajobraz tajgi",
    "type": "odd_one_out",
    "prompt": "Wskaż drzewo, które nie należy do typowych iglastych drzew tajgi: świerk, sosna, modrzew, baobab.",
    "options": null,
    "answer": "baobab",
    "explanation": "Baobab jest rośliną sawanny, a sosna, świerk i modrzew należą do drzew tajgi."
  },
  {
    "id": "R02_TAJ_07",
    "section": "Krajobraz tajgi",
    "type": "scenario",
    "prompt": "Pod koniec długiej zimy szybko topnieje śnieg, ale ziemia rozmarza tylko płytko. Woda nie może wsiąkać. Co najczęściej grozi rzekom tajgi?",
    "options": [
      "Całkowite wyschnięcie rzek",
      "Powstanie wydm",
      "Zniknięcie dopływów",
      "Wiosenne powodzie"
    ],
    "answer": 3,
    "explanation": "Szybkie roztopy przy płytko rozmarzniętym podłożu powodują największe powodzie późną wiosną."
  },
  {
    "id": "R02_TAJ_08",
    "section": "Krajobraz tajgi",
    "type": "match",
    "prompt": "Połącz poziom gleby bielicowej z jego funkcją lub zawartością.",
    "options": null,
    "left": [
      "E",
      "O",
      "C",
      "B",
      "A"
    ],
    "right": [
      "Cienka warstwa próchnicy",
      "Gromadzenie wypłukanych substancji",
      "Ściółka z opadłych igieł",
      "Skała macierzysta",
      "Wymywanie substancji"
    ],
    "answer": {
      "O": "Ściółka z opadłych igieł",
      "A": "Cienka warstwa próchnicy",
      "E": "Wymywanie substancji",
      "B": "Gromadzenie wypłukanych substancji",
      "C": "Skała macierzysta"
    },
    "image": "r02_tajga_bielica.jpg",
    "explanation": "Profil gleby bielicowej obejmuje ściółkę O, próchnicę A, poziom wymywania E, wzbogacania B i skałę C."
  },
  {
    "id": "R02_TAJ_09",
    "section": "Krajobraz tajgi",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do tajgi ciemnej i jasnej.",
    "options": null,
    "items": [
      "Ubogie runo",
      "Drzewa zachowują igły zimą",
      "Częste sąsiedztwo bagien",
      "Bogatsze runo leśne",
      "Drzewa zrzucają igły zimą"
    ],
    "categories": [
      "Tajga ciemna",
      "Tajga jasna"
    ],
    "answer": {
      "Tajga ciemna": [
        "Drzewa zachowują igły zimą",
        "Bogatsze runo leśne"
      ],
      "Tajga jasna": [
        "Drzewa zrzucają igły zimą",
        "Ubogie runo",
        "Częste sąsiedztwo bagien"
      ]
    },
    "image": "r02_tajga_iglasta.jpg",
    "explanation": "Tajga ciemna ma drzewa z igłami przez zimę i bogatsze runo, a jasna często jest modrzewiowa i podmokła."
  },
  {
    "id": "R02_TAJ_10",
    "section": "Krajobraz tajgi",
    "type": "sequence",
    "prompt": "Ułóż ciąg zjawisk prowadzących do wiosennej powodzi w tajdze.",
    "options": null,
    "items": [
      "Nagromadzenie wody i wezbranie rzek",
      "Płytkie rozmarzanie podłoża",
      "Długa mroźna zima",
      "Szybkie topnienie śniegu wiosną"
    ],
    "answer": [
      "Długa mroźna zima",
      "Szybkie topnienie śniegu wiosną",
      "Płytkie rozmarzanie podłoża",
      "Nagromadzenie wody i wezbranie rzek"
    ],
    "explanation": "Zamarznięty grunt utrudnia wsiąkanie wody z roztopów, co sprzyja wezbraniom rzek."
  },
  {
    "id": "R02_TUN_01",
    "section": "Krajobraz tundry",
    "type": "single_choice",
    "prompt": "Jaki klimat odpowiada powstaniu tundry?",
    "options": [
      "Równikowy wybitnie wilgotny",
      "Podrównikowy",
      "Subpolarny",
      "Zwrotnikowy suchy",
      "Umiarkowany ciepły morski",
      "Śródziemnomorski"
    ],
    "answer": 2,
    "image": "r02_tundra_mszysta.jpg",
    "explanation": "Tundra występuje w surowym klimacie subpolarnym, z długą zimą i krótkim latem."
  },
  {
    "id": "R02_TUN_02",
    "section": "Krajobraz tundry",
    "type": "multi_select",
    "prompt": "Zaznacz rośliny charakterystyczne dla tundry.",
    "options": [
      "mchy",
      "porosty",
      "wysokie sosny",
      "niskie krzewy",
      "palmy",
      "karłowate wierzby"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "image": "r02_tundra_mszysta.jpg",
    "explanation": "W tundrze występują mchy, porosty, niskie krzewy, a w wilgotniejszej tundrze krzewinkowej także karłowate wierzby."
  },
  {
    "id": "R02_TUN_03",
    "section": "Krajobraz tundry",
    "type": "true_false",
    "prompt": "Tundra występuje wyłącznie na półkuli północnej.",
    "options": null,
    "answer": false,
    "explanation": "Główne obszary tundry znajdują się na półkuli północnej; podobna roślinność występuje również na wyspach wokół Antarktydy."
  },
  {
    "id": "R02_TUN_04",
    "section": "Krajobraz tundry",
    "type": "fill_in",
    "prompt": "Stale zamarznięte podłoże, które utrudnia wsiąkanie wody, to wieloletnia __________.",
    "options": null,
    "altAnswers": [
      [
        "zmarzlina",
        "zmarzliną"
      ]
    ],
    "answer": [
      "zmarzlina"
    ],
    "image": "r02_tundra_zmarzlina.jpg",
    "explanation": "Latem rozmarza tylko górna część podłoża, a niższa zmarznięta warstwa zatrzymuje wodę."
  },
  {
    "id": "R02_TUN_05",
    "section": "Krajobraz tundry",
    "type": "riddle",
    "prompt": "Jak nazywa się okres, w którym za kołem podbiegunowym przez kilka miesięcy brakuje światła słonecznego?",
    "options": null,
    "altAnswers": [
      "noc polarna",
      "nocy polarnej"
    ],
    "answer": "noc polarna",
    "explanation": "Noc polarna ogranicza dopływ światła, a wraz z surowym klimatem skraca wegetację."
  },
  {
    "id": "R02_TUN_06",
    "section": "Krajobraz tundry",
    "type": "odd_one_out",
    "prompt": "Wskaż roślinę nietypową dla bezleśnej tundry: mchy, porosty, karłowate wierzby, wysokie sosny.",
    "options": null,
    "answer": "wysokie sosny",
    "explanation": "W tundrze dominują mchy, porosty i niskie krzewy; nie tworzą jej wysokie lasy sosnowe."
  },
  {
    "id": "R02_TUN_07",
    "section": "Krajobraz tundry",
    "type": "scenario",
    "prompt": "Latem tundrowe podłoże rozmarza tylko z wierzchu. Pod nim nadal zalega lód, przez który woda nie może odpłynąć. Co powstaje na powierzchni?",
    "options": [
      "Bagna",
      "Piaszczyste wydmy",
      "Zwarty las dębowy",
      "Suchy step"
    ],
    "answer": 0,
    "image": "r02_tundra_zmarzlina.jpg",
    "explanation": "Woda zatrzymywana przez wieloletnią zmarzlinę sprzyja latem tworzeniu rozległych bagien."
  },
  {
    "id": "R02_TUN_08",
    "section": "Krajobraz tundry",
    "type": "match",
    "prompt": "Połącz element środowiska tundry z właściwą cechą.",
    "options": null,
    "left": [
      "Dzień polarny",
      "Tundra mszysta",
      "Wieloletnia zmarzlina",
      "Tundra krzewinkowa"
    ],
    "right": [
      "Zatrzymuje odpływ wody w głąb podłoża",
      "Wilgotniejsze obszary osłonięte śniegiem",
      "Słońce widoczne przez długi czas",
      "Suchszy klimat i dominacja porostów"
    ],
    "answer": {
      "Tundra krzewinkowa": "Wilgotniejsze obszary osłonięte śniegiem",
      "Tundra mszysta": "Suchszy klimat i dominacja porostów",
      "Wieloletnia zmarzlina": "Zatrzymuje odpływ wody w głąb podłoża",
      "Dzień polarny": "Słońce widoczne przez długi czas"
    },
    "explanation": "Różnice między tundrą mszystą i krzewinkową wynikają z wilgotności i pokrywy śnieżnej; na środowisko wpływają też zmarzlina i nasłonecznienie."
  },
  {
    "id": "R02_TUN_09",
    "section": "Krajobraz tundry",
    "type": "sort",
    "prompt": "Podziel zwierzęta tundry na częściej pojawiające się latem oraz zdolne pozostawać również zimą.",
    "options": null,
    "items": [
      "piżmowoły",
      "renifery",
      "gronostaje",
      "karibu",
      "liczne ptaki",
      "lemingi"
    ],
    "categories": [
      "Pojawiają się latem",
      "Pozostają zimą"
    ],
    "answer": {
      "Pojawiają się latem": [
        "renifery",
        "karibu",
        "liczne ptaki"
      ],
      "Pozostają zimą": [
        "piżmowoły",
        "lemingi",
        "gronostaje"
      ]
    },
    "explanation": "Latem do tundry przybywają m.in. renifery, karibu i ptaki; zimą zostają zwierzęta najlepiej przystosowane."
  },
  {
    "id": "R02_TUN_10",
    "section": "Krajobraz tundry",
    "type": "sequence",
    "prompt": "Ułóż letni ciąg zjawisk prowadzących do powstania bagien tundrowych.",
    "options": null,
    "items": [
      "Powstawanie mokradeł i bagien",
      "Rozmarzanie górnej warstwy podłoża",
      "Nadejście krótkiego lata",
      "Zatrzymywanie wody nad zamarzniętą warstwą"
    ],
    "answer": [
      "Nadejście krótkiego lata",
      "Rozmarzanie górnej warstwy podłoża",
      "Zatrzymywanie wody nad zamarzniętą warstwą",
      "Powstawanie mokradeł i bagien"
    ],
    "image": "r02_tundra_zmarzlina.jpg",
    "explanation": "Podłoże rozmarza tylko z wierzchu; pozostała zmarzlina nie przepuszcza wody."
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz poprawne połączenia krajobrazów z typami gleb.",
    "options": [
      "Las równikowy – czerwonoziemy",
      "Step – czarnoziemy",
      "Tajga – gleby bielicowe",
      "Gorąca pustynia – buroziemy",
      "Tundra – czarnoziemy",
      "Sawanna – gleby bielicowe"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Lasy równikowe mają czerwonoziemy, stepy czarnoziemy, tajga gleby bielicowe, a gorące pustynie buroziemy."
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz pięć krajobrazów z charakterystycznymi dla nich warunkami klimatycznymi.",
    "options": null,
    "left": [
      "Tundra",
      "Sawanna",
      "Las równikowy",
      "Tajga",
      "Step"
    ],
    "right": [
      "Klimat umiarkowany chłodny",
      "Klimat podrównikowy z dwiema porami",
      "Klimat subpolarny",
      "Umiarkowany klimat wnętrza kontynentu",
      "Klimat równikowy wybitnie wilgotny"
    ],
    "answer": {
      "Las równikowy": "Klimat równikowy wybitnie wilgotny",
      "Sawanna": "Klimat podrównikowy z dwiema porami",
      "Step": "Umiarkowany klimat wnętrza kontynentu",
      "Tajga": "Klimat umiarkowany chłodny",
      "Tundra": "Klimat subpolarny"
    },
    "explanation": "Strefowość roślinności wynika ze zmian temperatury, opadów i długości okresu wegetacyjnego."
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W którym krajobrazie trawy mają dwa odrębne okresy wegetacji w ciągu roku?",
    "options": [
      "Tundra",
      "Gorąca pustynia",
      "Tajga",
      "Step",
      "Wilgotny las równikowy",
      "Sawanna"
    ],
    "answer": 3,
    "explanation": "Step ma okres wegetacyjny wiosną oraz kolejny późnym latem; ten rytm sprzyja powstawaniu czarnoziemów."
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj dokładne cechy profilu lub żyzności gleb do czterech krajobrazów.",
    "options": null,
    "items": [
      "Poziom wymywania E",
      "Silne wymywanie przez ulewy",
      "Możliwe silne zasolenie po odparowaniu jezior",
      "Skałą macierzystą często jest less",
      "Czerwonawa barwa od związków żelaza",
      "Cienka warstwa próchnicy",
      "Gruba warstwa próchnicy"
    ],
    "categories": [
      "Czerwonoziem lasu równikowego",
      "Czarnoziem stepu",
      "Bielica tajgi",
      "Buroziem gorącej pustyni"
    ],
    "answer": {
      "Czerwonoziem lasu równikowego": [
        "Silne wymywanie przez ulewy",
        "Czerwonawa barwa od związków żelaza"
      ],
      "Czarnoziem stepu": [
        "Gruba warstwa próchnicy",
        "Skałą macierzystą często jest less"
      ],
      "Bielica tajgi": [
        "Cienka warstwa próchnicy",
        "Poziom wymywania E"
      ],
      "Buroziem gorącej pustyni": [
        "Możliwe silne zasolenie po odparowaniu jezior"
      ]
    },
    "image": "r02_step_czarnoziem.jpg",
    "explanation": "Na żyzność i budowę gleb wpływają warunki klimatyczne: wymywanie, zasolenie i akumulacja materii organicznej."
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Badacz widzi niskie trawy i pojedyncze drzewa. Pora deszczowa trwa w tym miejscu sześć miesięcy. Jaki to typ sawanny?",
    "options": [
      "sawanna kolczasta",
      "sawanna wilgotna",
      "sawanna sucha",
      "step ostnicowy"
    ],
    "answer": 2,
    "image": "r02_sawanna_sucha.jpg",
    "explanation": "Pięć do siedmiu miesięcy pory deszczowej odpowiada sawannie suchej, nie kolczastej ani wilgotnej."
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Sawanna o porze deszczowej krótszej niż pięć miesięcy jest __________, a przy porze deszczowej dłuższej niż siedem miesięcy jest __________.",
    "options": null,
    "altAnswers": [
      [
        "kolczasta",
        "kolczastą"
      ],
      [
        "wilgotna",
        "wilgotną"
      ]
    ],
    "answer": [
      "kolczasta",
      "wilgotna"
    ],
    "explanation": "Sawanna kolczasta ma porę deszczową krótszą niż pięć miesięcy, a sawanna wilgotna dłuższą niż siedem miesięcy."
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż pojęcie, które nie jest typem pustyni wyróżnionym według czynnika jej powstania: zwrotnikowa, kontynentalna, nadbrzeżna, ostnicowa.",
    "options": null,
    "answer": "ostnicowa",
    "explanation": "Zwrotnikowe, kontynentalne i nadbrzeżne to typy pustyń ze względu na czynnik suchości; ostnicowy to typ stepu."
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Wieloletnia zmarzlina występuje zarówno w tajdze, jak i w tundrze, ale jej skutki dla przyrody mogą być różne.",
    "options": null,
    "answer": true,
    "image": "r02_tundra_zmarzlina.jpg",
    "explanation": "W tajdze utrudnia wsiąkanie wód roztopowych i sprzyja powodziom; w tundrze prowadzi latem do podmokłości."
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz obszar pustynny z mechanizmem powstawania pustyni.",
    "options": null,
    "left": [
      "Mojave",
      "Atakama",
      "Wielki Nefud",
      "Takla Makan"
    ],
    "right": [
      "Duża odległość od wilgotnych obszarów",
      "Zimny prąd morski",
      "Opadające powietrze w wyżu zwrotnikowym",
      "Góry blokujące wilgotne powietrze"
    ],
    "answer": {
      "Wielki Nefud": "Opadające powietrze w wyżu zwrotnikowym",
      "Takla Makan": "Duża odległość od wilgotnych obszarów",
      "Mojave": "Góry blokujące wilgotne powietrze",
      "Atakama": "Zimny prąd morski"
    },
    "explanation": "Wielki Nefud zaliczono do pustyń zwrotnikowych, Takla Makan do kontynentalnych, Mojave do obszarów za górami, a Atakamę do nadbrzeżnych."
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż sześć krajobrazów w kolejności od obszarów równikowych ku podbiegunowym.",
    "options": null,
    "items": [
      "Tajga",
      "Gorąca pustynia",
      "Tundra",
      "Wilgotny las równikowy",
      "Step",
      "Sawanna"
    ],
    "answer": [
      "Wilgotny las równikowy",
      "Sawanna",
      "Gorąca pustynia",
      "Step",
      "Tajga",
      "Tundra"
    ],
    "explanation": "Krajobrazy układają się od lasu równikowego przez sawannę, pustynię, step i tajgę po tundrę."
  },
  {
    "id": "R02_HARD_11",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się poziom gleby bielicowej, oznaczany literą B, w którym osadzają się substancje wymyte z warstw wyższych?",
    "options": null,
    "altAnswers": [
      "poziom wzbogacenia",
      "wzbogacenia",
      "poziom B",
      "B"
    ],
    "answer": "poziom wzbogacenia",
    "image": "r02_tajga_bielica.jpg",
    "explanation": "W glebie bielicowej poziom E odpowiada wymywaniu, a B wzbogacaniu w substancje przemieszczone z góry."
  },
  {
    "id": "R02_HARD_12",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Uczeń porównuje tundrę i tajgę. W pierwszej latem tworzą się bagna, w drugiej późną wiosną rosną zagrożenia powodziowe. Jaki wspólny warunek podłoża pomaga wyjaśnić obie sytuacje?",
    "options": [
      "Całoroczny opad zenitalny",
      "Wieloletnia zmarzlina",
      "Grube pokłady czarnoziemu",
      "Wydmy piaskowe"
    ],
    "answer": 1,
    "image": "r02_tundra_zmarzlina.jpg",
    "explanation": "W obu krajobrazach zamarznięte głębsze warstwy podłoża ograniczają odpływ wody w głąb gruntu."
  }
];

const KID_PROMPTS = {
  "R02_LAS_01": "Jaka temperatura panuje przez cały rok w lesie równikowym?",
  "R02_LAS_07": "Co się dzieje, gdy ludzie wycinają las pod pola i drogi?",
  "R02_SAW_04": "Jak nazywa się hodowla zwierząt, gdy pasterze stale się przenoszą?",
  "R02_SAW_07": "Jaka sawanna powstaje, gdy deszcze trwają tylko cztery miesiące?",
  "R02_PUS_01": "Ile deszczu spada w ciągu roku na gorącej pustyni?",
  "R02_PUS_04": "Jak nazywa się sucha dolina po pustynnej rzece?",
  "R02_STE_03": "Czy czarnoziemy stepu są bardzo żyzne?",
  "R02_STE_07": "Jaki rodzaj stepu ma najżyźniejszą glebę?",
  "R02_TAJ_01": "Na której półkuli rośnie tajga?",
  "R02_TAJ_07": "Co może się stać z rzekami tajgi, gdy śnieg szybko topnieje?",
  "R02_TUN_04": "Co w tundrze jest stale zamarznięte?",
  "R02_TUN_07": "Co powstaje, gdy latem woda nie może wsiąknąć w zamarzniętą ziemię?"
};

const chapter = {
  "id": "r02",
  "number": 2,
  "title": "Krajobrazy świata – od lasów równikowych po tundrę (tematy 10–15)",
  "icon": "🌍",
  "sectionOrder": [
    "Krajobraz wilgotnego lasu równikowego",
    "Krajobraz sawanny",
    "Krajobraz gorącej pustyni",
    "Krajobraz stepu",
    "Krajobraz tajgi",
    "Krajobraz tundry"
  ],
  "sectionIcons": {
    "Krajobraz wilgotnego lasu równikowego": "🌴",
    "Krajobraz sawanny": "🦒",
    "Krajobraz gorącej pustyni": "🏜️",
    "Krajobraz stepu": "🌾",
    "Krajobraz tajgi": "🌲",
    "Krajobraz tundry": "❄️"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
