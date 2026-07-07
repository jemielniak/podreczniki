// Skróty sekcji (do identyfikatorów ćwiczeń):
//   CST  = Cechy stawonogów
//   SKO  = Skorupiaki
//   OWA  = Owady
//   PAJ  = Pajęczaki
//   MIE  = Mięczaki
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R03_CST_01",
    "section": "Cechy stawonogów",
    "type": "single_choice",
    "prompt": "Która grupa zwierząt jest najliczniejsza pod względem liczby gatunków na Ziemi?",
    "options": [
      "stawonogi",
      "mięczaki",
      "płazy",
      "ryby",
      "ptaki",
      "ssaki"
    ],
    "answer": 0,
    "explanation": "Stawonogi są najliczniejszą pod względem liczby gatunków grupą zwierząt na Ziemi."
  },
  {
    "id": "R03_CST_02",
    "section": "Cechy stawonogów",
    "type": "true_false",
    "prompt": "Nazwa stawonogi nawiązuje do odnóży zbudowanych z odcinków połączonych stawami.",
    "options": null,
    "answer": true,
    "explanation": "Odnóża stawonogów składają się z kilku części połączonych ruchomo za pomocą stawów."
  },
  {
    "id": "R03_CST_03",
    "section": "Cechy stawonogów",
    "type": "multi_select",
    "image": "r03_budowa_stawonoga.jpg",
    "prompt": "Zaznacz wspólne cechy stawonogów.",
    "options": [
      "ciało podzielone na segmenty",
      "wewnętrzny szkielet kostny",
      "odnóża z odcinków połączonych stawami",
      "chitynowy oskórek",
      "komórki parzydełkowe"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "Do wspólnych cech stawonogów należą segmentacja ciała, stawowe odnóża oraz chitynowy oskórek pełniący funkcję szkieletu zewnętrznego."
  },
  {
    "id": "R03_CST_04",
    "section": "Cechy stawonogów",
    "type": "fill_in",
    "prompt": "Ciało stawonogów pokrywa __________ oskórek zbudowany z __________.",
    "options": null,
    "answer": [
      "chitynowy",
      "chityny"
    ],
    "altAnswers": [
      [
        "chitynowy"
      ],
      [
        "chityny",
        "chityna"
      ]
    ],
    "explanation": "Oskórek stawonogów jest zbudowany z chityny i chroni ciało przed uszkodzeniem oraz utratą wody."
  },
  {
    "id": "R03_CST_05",
    "section": "Cechy stawonogów",
    "type": "riddle",
    "image": "r03_linienie_owada.jpg",
    "prompt": "Jak nazywa się proces wymiany starego oskórka na nowy u stawonogów?",
    "options": null,
    "answer": "linienie",
    "altAnswers": [
      "linienie",
      "linienia"
    ],
    "explanation": "Oskórek nie rośnie razem z ciałem zwierzęcia, dlatego stawonogi co pewien czas go zrzucają i wytwarzają nowy."
  },
  {
    "id": "R03_CST_06",
    "section": "Cechy stawonogów",
    "type": "match",
    "image": "r03_budowa_stawonoga.jpg",
    "prompt": "Połącz element budowy stawonoga z jego funkcją.",
    "options": null,
    "left": [
      "czułki",
      "odnóża gębowe",
      "odnóża kroczne",
      "chitynowy oskórek"
    ],
    "right": [
      "odbieranie informacji z otoczenia",
      "chwycenie i rozdrabnianie pokarmu",
      "poruszanie się",
      "ochrona ciała i szkielet zewnętrzny"
    ],
    "answer": {
      "czułki": "odbieranie informacji z otoczenia",
      "odnóża gębowe": "chwycenie i rozdrabnianie pokarmu",
      "odnóża kroczne": "poruszanie się",
      "chitynowy oskórek": "ochrona ciała i szkielet zewnętrzny"
    },
    "explanation": "Odnóża stawonogów mogą pełnić różne funkcje, a oskórek chroni ciało i stanowi miejsce przyczepu mięśni."
  },
  {
    "id": "R03_CST_07",
    "section": "Cechy stawonogów",
    "type": "odd_one_out",
    "image": "r03_porownanie_grup_stawonogow.jpg",
    "prompt": "Wskaż, co nie jest grupą stawonogów: skorupiaki, owady, pajęczaki, mięczaki.",
    "options": null,
    "answer": "mięczaki",
    "explanation": "Do stawonogów należą skorupiaki, owady i pajęczaki. Mięczaki tworzą osobną grupę zwierząt."
  },
  {
    "id": "R03_CST_08",
    "section": "Cechy stawonogów",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady zwierząt do grup.",
    "options": null,
    "items": [
      "mucha",
      "pająk",
      "krab",
      "pszczoła",
      "ślimak",
      "małż"
    ],
    "categories": [
      "stawonogi",
      "mięczaki"
    ],
    "answer": {
      "stawonogi": [
        "mucha",
        "pająk",
        "krab",
        "pszczoła"
      ],
      "mięczaki": [
        "ślimak",
        "małż"
      ]
    },
    "explanation": "Muchy, pająki, kraby i pszczoły są stawonogami. Ślimaki i małże należą do mięczaków."
  },
  {
    "id": "R03_CST_09",
    "section": "Cechy stawonogów",
    "type": "scenario",
    "prompt": "Podczas obserwacji uczeń widzi na głowie stawonoga narząd zbudowany z tysięcy małych oczek. Jaki to typ oka?",
    "options": [
      "oko złożone",
      "oko proste",
      "soczewka",
      "czułek",
      "kądziołek",
      "syfon"
    ],
    "answer": 0,
    "explanation": "Oko złożone składa się z tysięcy drobnych oczek, a obraz powstaje z kolorowych punktów i plamek."
  },
  {
    "id": "R03_CST_10",
    "section": "Cechy stawonogów",
    "type": "true_false",
    "prompt": "Chitynowy oskórek stawonoga powiększa się stale razem z ciałem zwierzęcia.",
    "options": null,
    "answer": false,
    "explanation": "Oskórek nie powiększa się wraz ze wzrostem ciała, dlatego stawonogi muszą przechodzić linienie."
  },
  {
    "id": "R03_CST_11",
    "section": "Cechy stawonogów",
    "type": "sequence",
    "image": "r03_linienie_owada.jpg",
    "prompt": "Ułóż etapy linienia stawonoga we właściwej kolejności.",
    "options": null,
    "items": [
      "nowy oskórek twardnieje",
      "stary oskórek pęka",
      "zwierzę wysuwa się ze starego oskórka",
      "zwierzę ma miękki większy oskórek"
    ],
    "answer": [
      "stary oskórek pęka",
      "zwierzę wysuwa się ze starego oskórka",
      "zwierzę ma miękki większy oskórek",
      "nowy oskórek twardnieje"
    ],
    "explanation": "Najpierw pęka stary oskórek, potem zwierzę się z niego wysuwa, a nowy oskórek z czasem twardnieje."
  },
  {
    "id": "R03_CST_12",
    "section": "Cechy stawonogów",
    "type": "single_choice",
    "prompt": "Który przedstawiciel stawonogów jest w rozdziale podany jako największy na świecie?",
    "options": [
      "krab olbrzymi",
      "stonoga murowa",
      "motyl paź królowej",
      "pająk topik",
      "rak szlachetny",
      "homar europejski"
    ],
    "answer": 0,
    "explanation": "W rozdziale jako największy stawonóg opisany jest krab olbrzymi żyjący na dnie Oceanu Spokojnego."
  },
  {
    "id": "R03_SKO_01",
    "section": "Skorupiaki",
    "type": "single_choice",
    "prompt": "Gdzie żyje większość skorupiaków?",
    "options": [
      "w wodzie słonej lub słodkiej",
      "wyłącznie na suchych pustyniach",
      "wyłącznie w koronach drzew",
      "wyłącznie w glebie",
      "tylko w jaskiniach",
      "tylko na lodowcach"
    ],
    "answer": 0,
    "explanation": "Większość skorupiaków żyje w wodzie, zarówno słonej, jak i słodkiej. Tylko nieliczne żyją na lądzie."
  },
  {
    "id": "R03_SKO_02",
    "section": "Skorupiaki",
    "type": "true_false",
    "prompt": "Skorupiaki mają dwie pary czułków.",
    "options": null,
    "answer": true,
    "explanation": "Dwie pary czułków to jedna z cech budowy zewnętrznej skorupiaków."
  },
  {
    "id": "R03_SKO_03",
    "section": "Skorupiaki",
    "type": "fill_in",
    "image": "r03_rak_stawowy_budowa.jpg",
    "prompt": "Ciało większości skorupiaków jest podzielone na __________ i __________.",
    "options": null,
    "answer": [
      "głowotułów",
      "odwłok"
    ],
    "altAnswers": [
      [
        "głowotułów",
        "glowotulow"
      ],
      [
        "odwłok",
        "odwlok"
      ]
    ],
    "explanation": "U skorupiaków dwa pierwsze odcinki ciała są połączone w głowotułów, a drugą główną częścią jest odwłok."
  },
  {
    "id": "R03_SKO_04",
    "section": "Skorupiaki",
    "type": "multi_select",
    "prompt": "Zaznacz cechy typowe dla skorupiaków.",
    "options": [
      "twardy chitynowy pancerz u wielu gatunków",
      "dwie pary czułków",
      "brak czułków",
      "trzy pary odnóży krocznych",
      "najczęściej pięć par odnóży krocznych"
    ],
    "answer": [
      0,
      1,
      4
    ],
    "explanation": "Wiele skorupiaków ma twardy pancerz, dwie pary czułków i najczęściej pięć par odnóży krocznych."
  },
  {
    "id": "R03_SKO_05",
    "section": "Skorupiaki",
    "type": "match",
    "image": "r03_rak_stawowy_budowa.jpg",
    "prompt": "Połącz część ciała raka stawowego z jej funkcją.",
    "options": null,
    "left": [
      "płaski wachlarz",
      "szczypce",
      "czułki",
      "oczy na słupkach"
    ],
    "right": [
      "gwałtowne skoki do tyłu",
      "chwycenie pokarmu i obrona",
      "dotyk smak i węch",
      "duże pole widzenia"
    ],
    "answer": {
      "płaski wachlarz": "gwałtowne skoki do tyłu",
      "szczypce": "chwycenie pokarmu i obrona",
      "czułki": "dotyk smak i węch",
      "oczy na słupkach": "duże pole widzenia"
    },
    "explanation": "Budowa raka stawowego jest przystosowana do życia przy dnie, zdobywania pokarmu i szybkiej ucieczki przed zagrożeniem."
  },
  {
    "id": "R03_SKO_06",
    "section": "Skorupiaki",
    "type": "scenario",
    "prompt": "Uczeń znalazł w wilgotnej ściółce leśnej lądowego skorupiaka. Który przykład najlepiej pasuje do opisu?",
    "options": [
      "stonoga murowa",
      "kryl antarktyczny",
      "rozwielitka",
      "pąkla",
      "langusta",
      "homar"
    ],
    "answer": 0,
    "explanation": "Stonoga murowa to skorupiak żyjący na lądzie, między innymi w wilgotnej ściółce leśnej."
  },
  {
    "id": "R03_SKO_07",
    "section": "Skorupiaki",
    "type": "odd_one_out",
    "image": "r03_rozne_skorupiaki.jpg",
    "prompt": "Wskaż, co nie jest skorupiakiem: rak, homar, krewetka, pasikonik.",
    "options": null,
    "answer": "pasikonik",
    "explanation": "Rak, homar i krewetka są skorupiakami. Pasikonik jest owadem."
  },
  {
    "id": "R03_SKO_08",
    "section": "Skorupiaki",
    "type": "sort",
    "image": "r03_rozne_skorupiaki.jpg",
    "prompt": "Przyporządkuj skorupiaki do środowiska życia.",
    "options": null,
    "items": [
      "rak",
      "krewetka",
      "pąkle",
      "rozwielitka",
      "stonoga murowa"
    ],
    "categories": [
      "środowisko wodne",
      "wilgotne środowisko lądowe"
    ],
    "answer": {
      "środowisko wodne": [
        "rak",
        "krewetka",
        "pąkle",
        "rozwielitka"
      ],
      "wilgotne środowisko lądowe": [
        "stonoga murowa"
      ]
    },
    "explanation": "Większość skorupiaków żyje w wodzie, a nieliczne gatunki, takie jak stonoga murowa, zasiedlają wilgotne miejsca na lądzie."
  },
  {
    "id": "R03_SKO_09",
    "section": "Skorupiaki",
    "type": "single_choice",
    "image": "r03_rozne_skorupiaki.jpg",
    "prompt": "Która grupa drobnych skorupiaków tworzy plankton i jest ważnym pokarmem wielorybów, fok oraz pingwinów Antarktyki?",
    "options": [
      "kryl",
      "stonogi",
      "pustelniki",
      "pąkle",
      "homary",
      "langusty"
    ],
    "answer": 0,
    "explanation": "Kryl jest składnikiem planktonu mórz i oceanów oraz stanowi podstawę pożywienia wielu zwierząt antarktycznych."
  },
  {
    "id": "R03_SKO_10",
    "section": "Skorupiaki",
    "type": "true_false",
    "prompt": "Masowe występowanie pąkli na kadłubach statków może zwiększać opór wody i zużycie paliwa.",
    "options": null,
    "answer": true,
    "explanation": "Pąkle przytwierdzające się do kadłubów utrudniają ruch statków, co powoduje straty związane ze zwiększonym zużyciem paliwa."
  },
  {
    "id": "R03_SKO_11",
    "section": "Skorupiaki",
    "type": "riddle",
    "prompt": "Jaki skorupiak zamieszkuje puste muszle ślimaków i może umieszczać na nich ukwiały?",
    "options": null,
    "answer": "pustelnik",
    "altAnswers": [
      "pustelnik",
      "pustelniki"
    ],
    "explanation": "Pustelniki żyją w pustych muszlach ślimaków, a ukwiały na muszli pomagają im chronić się przed drapieżnikami."
  },
  {
    "id": "R03_SKO_12",
    "section": "Skorupiaki",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia opisujące zagrożenie polskich raków we właściwej kolejności.",
    "options": null,
    "items": [
      "rak pręgowany zaczął wypierać rodzime gatunki",
      "większość rodzimych raków wyginęła przez dżumę raczą",
      "sprowadzono raka pręgowanego z Ameryki Północnej",
      "okazało się że rak pręgowany przenosi dżumę raczą"
    ],
    "answer": [
      "większość rodzimych raków wyginęła przez dżumę raczą",
      "sprowadzono raka pręgowanego z Ameryki Północnej",
      "okazało się że rak pręgowany przenosi dżumę raczą",
      "rak pręgowany zaczął wypierać rodzime gatunki"
    ],
    "explanation": "Po dżumie raczej sprowadzono raka pręgowanego, lecz okazał się nosicielem choroby i skutecznie wypiera rodzime raki."
  },
  {
    "id": "R03_OWA_01",
    "section": "Owady",
    "type": "single_choice",
    "image": "r03_budowa_pasikonika.jpg",
    "prompt": "Na jakie trzy główne części jest podzielone ciało owada?",
    "options": [
      "głowa tułów i odwłok",
      "głowotułów i odwłok",
      "głowa noga i worek trzewiowy",
      "muszla noga i syfon",
      "tułów płaszcz i ramiona",
      "głowa stopa i skorupa"
    ],
    "answer": 0,
    "explanation": "Ciało owadów jest podzielone na głowę, tułów i odwłok."
  },
  {
    "id": "R03_OWA_02",
    "section": "Owady",
    "type": "true_false",
    "prompt": "Prawie wszystkie owady żyją na lądzie, a tylko nieliczne gatunki występują w środowisku wodnym.",
    "options": null,
    "answer": true,
    "explanation": "Owady są przede wszystkim zwierzętami lądowymi, choć część gatunków przystosowała się do życia w wodzie."
  },
  {
    "id": "R03_OWA_03",
    "section": "Owady",
    "type": "multi_select",
    "image": "r03_budowa_pasikonika.jpg",
    "prompt": "Zaznacz cechy budowy zewnętrznej owadów.",
    "options": [
      "jedna para czułków",
      "trzy pary odnóży",
      "ciało z głowy tułowia i odwłoka",
      "cztery pary odnóży krocznych",
      "u większości gatunków skrzydła",
      "dwie pary czułków"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Owady mają jedną parę czułków, trzy pary odnóży i ciało złożone z głowy, tułowia oraz odwłoka. Większość owadów ma skrzydła."
  },
  {
    "id": "R03_OWA_04",
    "section": "Owady",
    "type": "match",
    "image": "r03_aparaty_gebowe_owadow.jpg",
    "prompt": "Połącz typ aparatu gębowego owada z przykładem lub funkcją.",
    "options": null,
    "left": [
      "liżący",
      "gryzący",
      "ssący",
      "kłująco-ssący"
    ],
    "right": [
      "mucha zlizuje płynny pokarm",
      "pasikonik odcina i miażdży pokarm",
      "motyl wysysa nektar",
      "komar nakłuwa tkanki żywiciela"
    ],
    "answer": {
      "liżący": "mucha zlizuje płynny pokarm",
      "gryzący": "pasikonik odcina i miażdży pokarm",
      "ssący": "motyl wysysa nektar",
      "kłująco-ssący": "komar nakłuwa tkanki żywiciela"
    },
    "explanation": "Typ aparatu gębowego zależy od rodzaju pokarmu i sposobu jego pobierania."
  },
  {
    "id": "R03_OWA_05",
    "section": "Owady",
    "type": "fill_in",
    "image": "r03_budowa_pasikonika.jpg",
    "prompt": "Z tułowia owadów wyrastają __________ pary odnóży, a u większości gatunków także __________.",
    "options": null,
    "answer": [
      "trzy",
      "skrzydła"
    ],
    "altAnswers": [
      [
        "trzy",
        "3"
      ],
      [
        "skrzydła",
        "skrzydla"
      ]
    ],
    "explanation": "Owady mają trzy pary odnóży, a większość gatunków ma również skrzydła wyrastające z tułowia."
  },
  {
    "id": "R03_OWA_06",
    "section": "Owady",
    "type": "scenario",
    "image": "r03_aparaty_gebowe_owadow.jpg",
    "prompt": "Samica komara nakłuwa skórę ptaka lub ssaka i pobiera krew. Jaki aparat gębowy wykorzystuje?",
    "options": [
      "kłująco-ssący",
      "liżący",
      "gryzący",
      "ssący",
      "filtrujący",
      "parzydełkowy"
    ],
    "answer": 0,
    "explanation": "Kłująco-ssący aparat gębowy służy komarowi do nakłuwania tkanek żywiciela i pobierania pokarmu."
  },
  {
    "id": "R03_OWA_07",
    "section": "Owady",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie jest owadem: modliszka, ważka, biedronka, ośmiornica.",
    "options": null,
    "answer": "ośmiornica",
    "explanation": "Modliszka, ważka i biedronka są owadami. Ośmiornica jest głowonogiem, czyli mięczakiem."
  },
  {
    "id": "R03_OWA_08",
    "section": "Owady",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady znaczenia owadów dla człowieka.",
    "options": null,
    "items": [
      "pszczoła wytwarza miód",
      "jedwabnik daje nici jedwabne",
      "biedronka zjada mszyce",
      "mól niszczy ubrania",
      "stonka niszczy uprawy",
      "komar widliszek przenosi malarię"
    ],
    "categories": [
      "korzystne",
      "niekorzystne"
    ],
    "answer": {
      "korzystne": [
        "pszczoła wytwarza miód",
        "jedwabnik daje nici jedwabne",
        "biedronka zjada mszyce"
      ],
      "niekorzystne": [
        "mól niszczy ubrania",
        "stonka niszczy uprawy",
        "komar widliszek przenosi malarię"
      ]
    },
    "explanation": "Owady mogą być pożyteczne, bo zapylają rośliny i dają surowce, ale mogą też niszczyć plony, ubrania lub przenosić choroby."
  },
  {
    "id": "R03_OWA_09",
    "section": "Owady",
    "type": "riddle",
    "prompt": "Jaki udomowiony motyl w stadium gąsienicy wytwarza nici służące do produkcji jedwabiu?",
    "options": null,
    "answer": "jedwabnik morwowy",
    "altAnswers": [
      "jedwabnik morwowy",
      "jedwabnik"
    ],
    "explanation": "Gąsienice jedwabnika morwowego wytwarzają jedwabne nici, z których budują kokony."
  },
  {
    "id": "R03_OWA_10",
    "section": "Owady",
    "type": "true_false",
    "image": "r03_aparaty_gebowe_owadow.jpg",
    "prompt": "Ssący aparat gębowy motyla ma postać długiej rurki zwiniętej spiralnie.",
    "options": null,
    "answer": true,
    "explanation": "Motyl rozprostowuje spiralnie zwiniętą rurkę i wysysa nią nektar z głębi kwiatu."
  },
  {
    "id": "R03_OWA_11",
    "section": "Owady",
    "type": "sequence",
    "image": "r03_rozwoj_owada.jpg",
    "prompt": "Ułóż etapy przeobrażenia zupełnego motyla we właściwej kolejności.",
    "options": null,
    "items": [
      "poczwarka",
      "dorosły owad",
      "jajo",
      "larwa"
    ],
    "answer": [
      "jajo",
      "larwa",
      "poczwarka",
      "dorosły owad"
    ],
    "explanation": "W przeobrażeniu zupełnym po jaju występuje larwa, następnie poczwarka i dorosła postać owada."
  },
  {
    "id": "R03_OWA_12",
    "section": "Owady",
    "type": "single_choice",
    "prompt": "Która grupa jest jedyną wśród stawonogów zdolną do aktywnego lotu?",
    "options": [
      "owady",
      "skorupiaki",
      "pajęczaki",
      "małże",
      "ślimaki",
      "głowonogi"
    ],
    "answer": 0,
    "explanation": "Owady są jedynymi stawonogami, które potrafią latać."
  },
  {
    "id": "R03_PAJ_01",
    "section": "Pajęczaki",
    "type": "single_choice",
    "prompt": "Ile par odnóży krocznych mają pajęczaki?",
    "options": [
      "cztery pary",
      "trzy pary",
      "dwie pary",
      "pięć par",
      "jedną parę",
      "sześć par"
    ],
    "answer": 0,
    "explanation": "Pajęczaki rozpoznajemy między innymi po czterech parach odnóży krocznych."
  },
  {
    "id": "R03_PAJ_02",
    "section": "Pajęczaki",
    "type": "true_false",
    "prompt": "Pajęczaki nie mają czułków.",
    "options": null,
    "answer": true,
    "explanation": "Brak czułków jest jedną z charakterystycznych cech pajęczaków."
  },
  {
    "id": "R03_PAJ_03",
    "section": "Pajęczaki",
    "type": "multi_select",
    "prompt": "Zaznacz cechy pajęczaków.",
    "options": [
      "ciało z głowotułowia i odwłoka",
      "cztery pary odnóży krocznych",
      "brak czułków",
      "trzy pary odnóży",
      "jedna para czułków",
      "chitynowy oskórek"
    ],
    "answer": [
      0,
      1,
      2,
      5
    ],
    "explanation": "Pajęczaki mają głowotułów i odwłok, cztery pary odnóży krocznych, nie mają czułków, a ich ciało chroni chitynowy oskórek."
  },
  {
    "id": "R03_PAJ_04",
    "section": "Pajęczaki",
    "type": "fill_in",
    "image": "r03_pajak_siec_lowna.jpg",
    "prompt": "Na głowotułowiu pająka znajdują się oczy, dwie pary __________ oraz cztery pary __________.",
    "options": null,
    "answer": [
      "odnóży gębowych",
      "odnóży krocznych"
    ],
    "altAnswers": [
      [
        "odnóży gębowych",
        "odnóża gębowe",
        "odnózy gębowych"
      ],
      [
        "odnóży krocznych",
        "odnóża kroczne",
        "odnózy krocznych"
      ]
    ],
    "explanation": "Na głowotułowiu pająka znajdują się oczy, dwie pary odnóży gębowych i cztery pary odnóży krocznych."
  },
  {
    "id": "R03_PAJ_05",
    "section": "Pajęczaki",
    "type": "match",
    "prompt": "Połącz pajęczaka z cechą opisaną w rozdziale.",
    "options": null,
    "left": [
      "topik",
      "kosarz",
      "skorpion",
      "świerzbowiec"
    ],
    "right": [
      "buduje podwodny dzwon z powietrzem",
      "może odrzucać odnóża i nie przędzie pajęczyny",
      "ma odwłok zakończony kolcem jadowym",
      "drąży korytarze w skórze człowieka"
    ],
    "answer": {
      "topik": "buduje podwodny dzwon z powietrzem",
      "kosarz": "może odrzucać odnóża i nie przędzie pajęczyny",
      "skorpion": "ma odwłok zakończony kolcem jadowym",
      "świerzbowiec": "drąży korytarze w skórze człowieka"
    },
    "explanation": "Różne pajęczaki mają odmienne przystosowania: topik żyje pod wodą, kosarz może odrzucać odnóża, skorpion ma kolec jadowy, a świerzbowiec pasożytuje w skórze."
  },
  {
    "id": "R03_PAJ_06",
    "section": "Pajęczaki",
    "type": "scenario",
    "image": "r03_kleszcz_i_swierzbowiec.jpg",
    "prompt": "Na skórze człowieka pasożyt drąży korytarze, powodując zaczerwienienie i swędzenie. Który pajęczak to robi?",
    "options": [
      "świerzbowiec",
      "topik",
      "kosarz",
      "tygrzyk paskowany",
      "ptasznik",
      "skorpion"
    ],
    "answer": 0,
    "explanation": "Świerzbowiec pasożytuje na skórze człowieka i drąży w niej korytarze."
  },
  {
    "id": "R03_PAJ_07",
    "section": "Pajęczaki",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie jest pajęczakiem: pająk, skorpion, kleszcz, motyl.",
    "options": null,
    "answer": "motyl",
    "explanation": "Pająki, skorpiony i kleszcze są pajęczakami. Motyl jest owadem."
  },
  {
    "id": "R03_PAJ_08",
    "section": "Pajęczaki",
    "type": "sort",
    "prompt": "Przyporządkuj zwierzęta do grup stawonogów.",
    "options": null,
    "items": [
      "pająk",
      "kleszcz",
      "kosarz",
      "mucha",
      "pszczoła",
      "komar"
    ],
    "categories": [
      "pajęczaki",
      "owady"
    ],
    "answer": {
      "pajęczaki": [
        "pająk",
        "kleszcz",
        "kosarz"
      ],
      "owady": [
        "mucha",
        "pszczoła",
        "komar"
      ]
    },
    "explanation": "Pająki, kleszcze i kosarze mają cechy pajęczaków, natomiast muchy, pszczoły i komary są owadami."
  },
  {
    "id": "R03_PAJ_09",
    "section": "Pajęczaki",
    "type": "riddle",
    "image": "r03_pajak_siec_lowna.jpg",
    "prompt": "Jak nazywają się narządy na spodniej stronie odwłoka pająka, które produkują substancję tworzącą nici?",
    "options": null,
    "answer": "kądziołki przędne",
    "altAnswers": [
      "kądziołki przędne",
      "kadziołki przędne",
      "kądziołki",
      "kadziolki"
    ],
    "explanation": "Kądziołki przędne produkują płynną substancję, która na powietrzu krzepnie i tworzy nici pajęcze."
  },
  {
    "id": "R03_PAJ_10",
    "section": "Pajęczaki",
    "type": "true_false",
    "prompt": "U pająków wstępne trawienie pokarmu odbywa się na zewnątrz ciała.",
    "options": null,
    "answer": true,
    "explanation": "Pająki oblewają ofiarę substancją z enzymami trawiennymi, a potem zasysają upłynniony pokarm."
  },
  {
    "id": "R03_PAJ_11",
    "section": "Pajęczaki",
    "type": "single_choice",
    "prompt": "Jakie oczy mają pająki według opisu w rozdziale?",
    "options": [
      "od dwóch do ośmiu oczu prostych",
      "dwa oczy złożone",
      "jedno oko złożone",
      "tylko oczy na słupkach",
      "oczy ukryte w muszli",
      "brak jakichkolwiek oczu"
    ],
    "answer": 0,
    "explanation": "Pająki mają od dwóch do ośmiu oczu prostych."
  },
  {
    "id": "R03_PAJ_12",
    "section": "Pajęczaki",
    "type": "scenario",
    "image": "r03_kleszcz_i_swierzbowiec.jpg",
    "prompt": "Pasożyt żywi się krwią zwierząt i ludzi, a może przenosić boreliozę oraz kleszczowe zapalenie mózgu. O jakim pajęczaku mowa?",
    "options": [
      "kleszcz",
      "kosarz",
      "topik",
      "świerzbowiec",
      "tygrzyk paskowany",
      "ptasznik"
    ],
    "answer": 0,
    "explanation": "Kleszcze pasożytują na zwierzętach i człowieku, a mogą przenosić drobnoustroje wywołujące choroby."
  },
  {
    "id": "R03_MIE_01",
    "section": "Mięczaki",
    "type": "single_choice",
    "image": "r03_grupy_mieczakow.jpg",
    "prompt": "Który zestaw zawiera trzy grupy mięczaków opisane w rozdziale?",
    "options": [
      "ślimaki małże i głowonogi",
      "owady skorupiaki i pajęczaki",
      "raki kraby i krewetki",
      "pająki kleszcze i skorpiony",
      "ptaki ssaki i płazy",
      "dżdżownice meduzy i koralowce"
    ],
    "answer": 0,
    "explanation": "Do mięczaków należą ślimaki, małże i głowonogi."
  },
  {
    "id": "R03_MIE_02",
    "section": "Mięczaki",
    "type": "true_false",
    "prompt": "Mięczaki mają miękkie i niesegmentowane ciało.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział opisuje mięczaki jako zwierzęta o delikatnym, miękkim i niesegmentowanym ciele."
  },
  {
    "id": "R03_MIE_03",
    "section": "Mięczaki",
    "type": "multi_select",
    "prompt": "Zaznacz cechy mięczaków wymienione w rozdziale.",
    "options": [
      "miękkie ciało",
      "segmentowane ciało z odnóżami",
      "wytwarzanie śluzu",
      "u większości muszla",
      "cztery pary odnóży",
      "najczęściej życie w wodzie"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Mięczaki mają miękkie ciało, często muszlę, wytwarzają śluz i najczęściej żyją w środowisku wodnym."
  },
  {
    "id": "R03_MIE_04",
    "section": "Mięczaki",
    "type": "fill_in",
    "prompt": "Worek trzewiowy zawiera większość __________ wewnętrznych i zazwyczaj jest osłonięty __________.",
    "options": null,
    "answer": [
      "narządów",
      "muszlą"
    ],
    "altAnswers": [
      [
        "narządów",
        "narzadow"
      ],
      [
        "muszlą",
        "muszla",
        "muszlą zewnętrzną"
      ]
    ],
    "explanation": "Worek trzewiowy mieści większość narządów wewnętrznych, a u wielu mięczaków osłania go muszla."
  },
  {
    "id": "R03_MIE_05",
    "section": "Mięczaki",
    "type": "match",
    "image": "r03_grupy_mieczakow.jpg",
    "prompt": "Połącz grupę mięczaków z cechą budowy.",
    "options": null,
    "left": [
      "ślimaki",
      "małże",
      "głowonogi"
    ],
    "right": [
      "często mają jednoczęściową spiralnie zwiniętą muszlę",
      "mają muszlę z dwóch połówek i nie mają głowy",
      "mają ramiona a muszla zwykle nie występuje lub jest ukryta"
    ],
    "answer": {
      "ślimaki": "często mają jednoczęściową spiralnie zwiniętą muszlę",
      "małże": "mają muszlę z dwóch połówek i nie mają głowy",
      "głowonogi": "mają ramiona a muszla zwykle nie występuje lub jest ukryta"
    },
    "explanation": "Ślimaki, małże i głowonogi różnią się budową muszli oraz obecnością głowy i ramion."
  },
  {
    "id": "R03_MIE_06",
    "section": "Mięczaki",
    "type": "scenario",
    "image": "r03_grupy_mieczakow.jpg",
    "prompt": "Zwierzę żyje w wodzie, nie ma głowy, ma muszlę z dwóch połówek i filtruje drobne cząstki pokarmu. Do której grupy należy?",
    "options": [
      "małże",
      "ślimaki",
      "głowonogi",
      "owady",
      "pajęczaki",
      "skorupiaki"
    ],
    "answer": 0,
    "explanation": "Małże są wodnymi mięczakami bez głowy, mają dwuczęściową muszlę i najczęściej są filtratorami."
  },
  {
    "id": "R03_MIE_07",
    "section": "Mięczaki",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie należy do mięczaków: ślimak, małż, głowonóg, pajęczak.",
    "options": null,
    "answer": "pajęczak",
    "explanation": "Ślimaki, małże i głowonogi są mięczakami. Pajęczaki należą do stawonogów."
  },
  {
    "id": "R03_MIE_08",
    "section": "Mięczaki",
    "type": "sort",
    "image": "r03_grupy_mieczakow.jpg",
    "prompt": "Przyporządkuj przykłady do grup mięczaków.",
    "options": null,
    "items": [
      "winniczek",
      "pomrów",
      "ostryga",
      "omułek",
      "ośmiornica",
      "kałamarnica"
    ],
    "categories": [
      "ślimaki",
      "małże",
      "głowonogi"
    ],
    "answer": {
      "ślimaki": [
        "winniczek",
        "pomrów"
      ],
      "małże": [
        "ostryga",
        "omułek"
      ],
      "głowonogi": [
        "ośmiornica",
        "kałamarnica"
      ]
    },
    "explanation": "Winniczek i pomrów to ślimaki, ostryga i omułek to małże, a ośmiornica i kałamarnica to głowonogi."
  },
  {
    "id": "R03_MIE_09",
    "section": "Mięczaki",
    "type": "riddle",
    "prompt": "Jak nazywa się grupa mięczaków, która nie ma głowy i zwykle odcedza pokarm z wody?",
    "options": null,
    "answer": "małże",
    "altAnswers": [
      "małże",
      "malze",
      "małż",
      "malz"
    ],
    "explanation": "Małże nie mają głowy i najczęściej są filtratorami, czyli odcedzają z wody drobne cząstki pokarmu."
  },
  {
    "id": "R03_MIE_10",
    "section": "Mięczaki",
    "type": "true_false",
    "prompt": "Wszystkie głowonogi opisane w rozdziale są drapieżnikami.",
    "options": null,
    "answer": true,
    "explanation": "Głowonogi prowadzą aktywny tryb życia i polują na inne zwierzęta, między innymi ryby i skorupiaki."
  },
  {
    "id": "R03_MIE_11",
    "section": "Mięczaki",
    "type": "single_choice",
    "image": "r03_osmiornica_budowa.jpg",
    "prompt": "Ile ramion ma ośmiornica?",
    "options": [
      "osiem",
      "sześć",
      "dziesięć",
      "dwanaście",
      "cztery",
      "dwie"
    ],
    "answer": 0,
    "explanation": "Ośmiornice mają osiem ramion jednakowej długości."
  },
  {
    "id": "R03_MIE_12",
    "section": "Mięczaki",
    "type": "scenario",
    "image": "r03_osmiornica_budowa.jpg",
    "prompt": "Zagrożony głowonóg uwalnia ciemną substancję, która zmniejsza przejrzystość wody. Który przykład z rozdziału tak postępuje?",
    "options": [
      "mątwa",
      "winniczek",
      "omułek",
      "racicznica",
      "pomrów",
      "pąkla"
    ],
    "answer": 0,
    "explanation": "Mątwy, podobnie jak kałamarnice, mogą uwalniać ciemną substancję utrudniającą drapieżnikowi widzenie."
  },
  {
    "id": "R03_HARD_01",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz cechy, które pasują do większości skorupiaków i odróżniają je od owadów oraz pajęczaków.",
    "options": [
      "dwie pary czułków",
      "najczęściej pięć par odnóży krocznych",
      "ciało zwykle z głowotułowia i odwłoka",
      "trzy pary odnóży",
      "brak czułków",
      "głównie życie w wodzie"
    ],
    "answer": [
      0,
      1,
      2,
      5
    ],
    "explanation": "Skorupiaki zwykle mają głowotułów i odwłok, dwie pary czułków, najczęściej pięć par odnóży krocznych i żyją głównie w wodzie."
  },
  {
    "id": "R03_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który rak sprowadzony z Ameryki Północnej okazał się nosicielem dżumy raczej i wypiera rodzime raki w Polsce?",
    "options": [
      "rak pręgowany",
      "rak szlachetny",
      "rak stawowy",
      "rak pustelnik",
      "homar",
      "langusta"
    ],
    "answer": 0,
    "explanation": "Rak pręgowany jest odporny na dżumę raczą, ale może ją przenosić i skutecznie wypiera rodzime gatunki raków."
  },
  {
    "id": "R03_HARD_03",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Głównym zadaniem oczu prostych u stawonogów jest ocena intensywności oświetlenia.",
    "options": null,
    "answer": true,
    "explanation": "Oczy proste są małe i błyszczące, a ich główna funkcja to ocena natężenia światła."
  },
  {
    "id": "R03_HARD_04",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz organizm lub grupę z rolą w przyrodzie opisaną w rozdziale.",
    "options": null,
    "left": [
      "kryl",
      "pąkle i rozwielitki",
      "owady glebowe",
      "małże"
    ],
    "right": [
      "pokarm wielorybów fok i pingwinów",
      "przyspieszanie oczyszczania wód",
      "udział w tworzeniu próchnicy",
      "filtrowanie drobnych cząstek pokarmu z wody"
    ],
    "answer": {
      "kryl": "pokarm wielorybów fok i pingwinów",
      "pąkle i rozwielitki": "przyspieszanie oczyszczania wód",
      "owady glebowe": "udział w tworzeniu próchnicy",
      "małże": "filtrowanie drobnych cząstek pokarmu z wody"
    },
    "explanation": "W rozdziale podkreślono, że bezkręgowce te uczestniczą w sieciach pokarmowych i w oczyszczaniu środowiska."
  },
  {
    "id": "R03_HARD_05",
    "section": "Super trudne",
    "type": "fill_in",
    "image": "r03_linienie_owada.jpg",
    "prompt": "Oskórek stawonoga nie powiększa się wraz z ciałem, dlatego zwierzę przechodzi __________.",
    "options": null,
    "answer": [
      "linienie"
    ],
    "altAnswers": [
      [
        "linienie",
        "linienia"
      ]
    ],
    "explanation": "Linienie pozwala stawonogowi wymienić zbyt ciasny oskórek na nowy, większy i początkowo miękki."
  },
  {
    "id": "R03_HARD_06",
    "section": "Super trudne",
    "type": "scenario",
    "image": "r03_rak_stawowy_budowa.jpg",
    "prompt": "Zwierzę ma twardy pancerz z chityny i soli mineralnych, dwie pary czułków oraz najczęściej pięć par odnóży krocznych. Do której grupy należy?",
    "options": [
      "skorupiaki",
      "owady",
      "pajęczaki",
      "małże",
      "głowonogi",
      "ślimaki"
    ],
    "answer": 0,
    "explanation": "Zestaw cech: twardy pancerz, dwie pary czułków i zwykle pięć par odnóży krocznych wskazuje na skorupiaki."
  },
  {
    "id": "R03_HARD_07",
    "section": "Super trudne",
    "type": "sequence",
    "image": "r03_pajak_siec_lowna.jpg",
    "prompt": "Ułóż kolejne etapy odżywiania pająka.",
    "options": null,
    "items": [
      "pająk zasysa płynny pokarm",
      "enzymy rozkładają ciało ofiary",
      "pająk chwyta ofiarę",
      "pająk oblewa ofiarę substancją trawienną"
    ],
    "answer": [
      "pająk chwyta ofiarę",
      "pająk oblewa ofiarę substancją trawienną",
      "enzymy rozkładają ciało ofiary",
      "pająk zasysa płynny pokarm"
    ],
    "explanation": "U pająków trawienie wstępne zachodzi poza ciałem: enzymy upłynniają pokarm, który potem jest zasysany."
  },
  {
    "id": "R03_HARD_08",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: topik, ptasznik, tygrzyk paskowany, pąkle.",
    "options": null,
    "answer": "pąkle",
    "explanation": "Topik, ptasznik i tygrzyk paskowany to pająki, czyli pajęczaki. Pąkle są skorupiakami."
  },
  {
    "id": "R03_HARD_09",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj grupy zwierząt do typowego środowiska życia według podsumowania rozdziału.",
    "options": null,
    "items": [
      "skorupiaki",
      "owady",
      "pajęczaki",
      "małże",
      "głowonogi",
      "ślimaki"
    ],
    "categories": [
      "głównie wodne",
      "głównie lądowe",
      "wodne i lądowe"
    ],
    "answer": {
      "głównie wodne": [
        "skorupiaki",
        "małże",
        "głowonogi"
      ],
      "głównie lądowe": [
        "owady",
        "pajęczaki"
      ],
      "wodne i lądowe": [
        "ślimaki"
      ]
    },
    "explanation": "Skorupiaki, małże i głowonogi żyją głównie w wodzie, owady i pajęczaki głównie na lądzie, a ślimaki występują w wodzie i na lądzie."
  },
  {
    "id": "R03_HARD_10",
    "section": "Super trudne",
    "type": "riddle",
    "image": "r03_pajak_siec_lowna.jpg",
    "prompt": "Jak nazywają się odnóża gębowe pająka zakończone pazurem z ujściem gruczołów jadowych?",
    "options": null,
    "answer": "szczękoczułki",
    "altAnswers": [
      "szczękoczułki",
      "szczekoczulki"
    ],
    "explanation": "Szczękoczułki służą pająkom między innymi do ataku i obrony, a u wielu z nich łączą się z gruczołami jadowymi."
  },
  {
    "id": "R03_HARD_11",
    "section": "Super trudne",
    "type": "scenario",
    "image": "r03_osmiornica_budowa.jpg",
    "prompt": "Zwierzę ma dużą głowę, ramiona z przyssawkami i lejek, przez który może gwałtownie wyrzucać wodę. Do której grupy mięczaków należy?",
    "options": [
      "głowonogi",
      "małże",
      "ślimaki",
      "skorupiaki",
      "owady",
      "pajęczaki"
    ],
    "answer": 0,
    "explanation": "Duża głowa, ramiona z przyssawkami i lejek umożliwiający szybki ruch to cechy głowonogów."
  },
  {
    "id": "R03_HARD_12",
    "section": "Super trudne",
    "type": "match",
    "image": "r03_porownanie_grup_stawonogow.jpg",
    "prompt": "Połącz grupę zwierząt z wyróżniającym zestawem cech.",
    "options": null,
    "left": [
      "skorupiaki",
      "owady",
      "pajęczaki",
      "mięczaki"
    ],
    "right": [
      "dwie pary czułków i zwykle pięć par odnóży",
      "jedna para czułków i trzy pary odnóży",
      "brak czułków i cztery pary odnóży",
      "miękkie niesegmentowane ciało"
    ],
    "answer": {
      "skorupiaki": "dwie pary czułków i zwykle pięć par odnóży",
      "owady": "jedna para czułków i trzy pary odnóży",
      "pajęczaki": "brak czułków i cztery pary odnóży",
      "mięczaki": "miękkie niesegmentowane ciało"
    },
    "explanation": "Tabela podsumowująca rozdział porównuje stawonogi z mięczakami i wskazuje najważniejsze cechy rozpoznawcze każdej grupy."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r03",
  number: 3,
  title: "Stawonogi i mięczaki",
  icon: "🐞",
  sectionOrder: [
    "Cechy stawonogów",
    "Skorupiaki",
    "Owady",
    "Pajęczaki",
    "Mięczaki"
  ],
  sectionIcons: {
    "Cechy stawonogów": "🦀",
    "Skorupiaki": "🦞",
    "Owady": "🦋",
    "Pajęczaki": "🕷️",
    "Mięczaki": "🐚"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
