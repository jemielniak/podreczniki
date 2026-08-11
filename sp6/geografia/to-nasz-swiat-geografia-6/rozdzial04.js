// Skróty sekcji (do identyfikatorów ćwiczeń):
//   ISL  = Wulkany i trzęsienia ziemi na Islandii
//   FRA  = Nowoczesna gospodarka Francji
//   MET  = Londyn i Paryż — europejskie metropolie
//   TUR  = Turystyka w południowej Europie
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_ISL_01",
    "section": "Wulkany i trzęsienia ziemi na Islandii",
    "type": "single_choice",
    "prompt": "Gdzie położona jest Islandia?",
    "image": "r04_mapa_islandii.jpg",
    "options": [
      "W północno-zachodniej Europie",
      "W południowej Europie",
      "W centrum Azji",
      "Na Morzu Śródziemnym",
      "Na półwyspie Iberyjskim",
      "W Afryce Północnej"
    ],
    "answer": 0,
    "explanation": "Islandia to wyspa w północno-zachodniej Europie, oblewana przez Ocean Atlantycki i Ocean Arktyczny."
  },
  {
    "id": "R04_ISL_02",
    "section": "Wulkany i trzęsienia ziemi na Islandii",
    "type": "match",
    "prompt": "Połącz warstwę Ziemi z jej opisem.",
    "image": "r04_wnetrze_ziemi.jpg",
    "options": null,
    "left": [
      "skorupa ziemska",
      "płaszcz górny",
      "jądro zewnętrzne",
      "jądro wewnętrzne"
    ],
    "right": [
      "zewnętrzna warstwa skalna",
      "warstwa współtworząca litosferę",
      "warstwa położona wokół jądra wewnętrznego",
      "najgłębsza część Ziemi"
    ],
    "answer": {
      "skorupa ziemska": "zewnętrzna warstwa skalna",
      "płaszcz górny": "warstwa współtworząca litosferę",
      "jądro zewnętrzne": "warstwa położona wokół jądra wewnętrznego",
      "jądro wewnętrzne": "najgłębsza część Ziemi"
    },
    "explanation": "Warstwy Ziemi układają się od skorupy na zewnątrz przez płaszcz ku jądru zewnętrznemu i wewnętrznemu."
  },
  {
    "id": "R04_ISL_03",
    "section": "Wulkany i trzęsienia ziemi na Islandii",
    "type": "multi_select",
    "prompt": "Zaznacz typy ruchu płyt litosfery.",
    "image": "r04_ruchy_plyt_litosfery.jpg",
    "options": [
      "rozsuwanie się",
      "zderzanie się",
      "przesuwanie równoległe",
      "krążenie po orbicie",
      "parowanie",
      "topnienie w oceanie"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Płyty litosfery mogą się rozsuwać, zderzać lub przemieszczać równolegle względem siebie."
  },
  {
    "id": "R04_ISL_04",
    "section": "Wulkany i trzęsienia ziemi na Islandii",
    "type": "true_false",
    "prompt": "Litosfera składa się z fragmentów różnej wielkości nazywanych płytami litosfery lub płytami tektonicznymi.",
    "options": null,
    "answer": true,
    "explanation": "Litosfera nie jest jednolita, lecz składa się z płyt litosfery."
  },
  {
    "id": "R04_ISL_05",
    "section": "Wulkany i trzęsienia ziemi na Islandii",
    "type": "scenario",
    "prompt": "Po wybuchu wulkanu w powietrzu unosi się dużo pyłu. Który skutek może wystąpić nawet poza najbliższą okolicą wulkanu?",
    "image": "r04_erupcja_wulkanu.jpg",
    "options": [
      "Utrudnienia w ruchu lotniczym",
      "Zmniejszenie liczby płyt litosfery",
      "Zanik oceanów",
      "Powstanie pustyni lodowej",
      "Zatrzymanie obrotu Ziemi",
      "Zmiana języka urzędowego Islandii"
    ],
    "answer": 0,
    "explanation": "Pył wulkaniczny wyrzucony do atmosfery może powodować utrudnienia w ruchu lotniczym albo nawet go uniemożliwiać."
  },
  {
    "id": "R04_ISL_06",
    "section": "Wulkany i trzęsienia ziemi na Islandii",
    "type": "riddle",
    "prompt": "Jak nazywa się gorące źródło wyrzucające w górę strumień wody pod wysokim ciśnieniem?",
    "image": "r04_gejzer_na_islandii.jpg",
    "options": null,
    "answer": "gejzer",
    "altAnswers": [
      "gejzer",
      "gejzerem",
      "gejzery"
    ],
    "explanation": "Takie gorące źródła nazywa się gejzerami. Nazwa pochodzi od islandzkiego gejzeru Geysir."
  },
  {
    "id": "R04_ISL_07",
    "section": "Wulkany i trzęsienia ziemi na Islandii",
    "type": "fill_in",
    "prompt": "Islandia leży na styku płyty __________ i płyty __________.",
    "image": "r04_mapa_islandii.jpg",
    "options": null,
    "answer": [
      "północnoamerykańskiej",
      "eurazjatyckiej"
    ],
    "altAnswers": [
      [
        "północnoamerykańskiej",
        "północnoamerykańska"
      ],
      [
        "eurazjatyckiej",
        "eurazjatycka"
      ]
    ],
    "explanation": "Islandia jest położona na styku dwóch rozsuwających się płyt: północnoamerykańskiej i eurazjatyckiej."
  },
  {
    "id": "R04_ISL_08",
    "section": "Wulkany i trzęsienia ziemi na Islandii",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do skutków lub produktów erupcji wulkanu: lawa, popiół, gazy, grad.",
    "options": null,
    "answer": "grad",
    "explanation": "Z wybuchającego wulkanu wydobywają się lawa, popiół i gazy. Grad to opad atmosferyczny - bryłki lodu powstające w chmurze burzowej."
  },
  {
    "id": "R04_ISL_09",
    "section": "Wulkany i trzęsienia ziemi na Islandii",
    "type": "sort",
    "prompt": "Przyporządkuj zjawiska do miejsca ich występowania.",
    "image": "r04_wnetrze_ziemi.jpg",
    "options": null,
    "items": [
      "magma",
      "lawa",
      "płyty litosfery",
      "zastygła lawa"
    ],
    "categories": [
      "pod ziemią",
      "na powierzchni"
    ],
    "answer": {
      "pod ziemią": [
        "magma",
        "płyty litosfery"
      ],
      "na powierzchni": [
        "lawa",
        "zastygła lawa"
      ]
    },
    "explanation": "Magma znajduje się pod ziemią, a lawa to magma, która wydostała się na powierzchnię."
  },
  {
    "id": "R04_ISL_10",
    "section": "Wulkany i trzęsienia ziemi na Islandii",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w logicznej kolejności prowadzącej do powstania wulkanicznego lądu Islandii.",
    "image": "r04_ruchy_plyt_litosfery.jpg",
    "options": null,
    "items": [
      "Zastygła lawa buduje ląd wyspy",
      "Płyty litosfery rozsuwają się",
      "Magma zbliża się do powierzchni",
      "Lawa wydostaje się na powierzchnię"
    ],
    "answer": [
      "Płyty litosfery rozsuwają się",
      "Magma zbliża się do powierzchni",
      "Lawa wydostaje się na powierzchnię",
      "Zastygła lawa buduje ląd wyspy"
    ],
    "explanation": "Wyspa powstała dzięki działalności wulkanów: przy rozsuwaniu płyt magma wydostawała się na powierzchnię jako lawa, a zastygła lawa budowała ląd."
  },
  {
    "id": "R04_ISL_11",
    "section": "Wulkany i trzęsienia ziemi na Islandii",
    "type": "single_choice",
    "prompt": "Która cecha wulkanów może sprzyjać rolnictwu?",
    "image": "r04_erupcja_wulkanu.jpg",
    "options": [
      "Bardzo żyzne gleby wulkaniczne",
      "Brak wody podziemnej",
      "Stały zanik roślin",
      "Całkowity brak skał",
      "Zmniejszanie powierzchni litosfery",
      "Brak opadów przez cały rok"
    ],
    "answer": 0,
    "explanation": "Gleby wulkaniczne są bardzo żyzne, dlatego mogą sprzyjać rolnictwu."
  },
  {
    "id": "R04_ISL_12",
    "section": "Wulkany i trzęsienia ziemi na Islandii",
    "type": "true_false",
    "prompt": "Trzęsienia ziemi mogą występować także podczas erupcji wulkanicznych.",
    "options": null,
    "answer": true,
    "explanation": "Trzęsienia ziemi występują także podczas erupcji wulkanicznych."
  },
  {
    "id": "R04_ISL_13",
    "section": "Wulkany i trzęsienia ziemi na Islandii",
    "type": "multi_select",
    "prompt": "Zaznacz niebezpieczeństwa związane z silnymi trzęsieniami ziemi.",
    "options": [
      "zawalenia budynków",
      "pękanie ulic",
      "osuwanie się ziemi",
      "tsunami",
      "powstawanie marek samochodów",
      "otwieranie nowych muzeów"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Silne trzęsienia ziemi mogą powodować zawalenia budynków, pękanie ulic, osuwanie się ziemi i tsunami."
  },
  {
    "id": "R04_FRA_01",
    "section": "Nowoczesna gospodarka Francji",
    "type": "single_choice",
    "prompt": "Jakie miasto jest stolicą Francji?",
    "image": "r04_mapa_francji.jpg",
    "options": [
      "Paryż",
      "Londyn",
      "Reykjavik",
      "Rzym",
      "Marsylia",
      "Barcelona"
    ],
    "answer": 0,
    "explanation": "Stolicą Francji jest Paryż."
  },
  {
    "id": "R04_FRA_02",
    "section": "Nowoczesna gospodarka Francji",
    "type": "true_false",
    "prompt": "Francja leży w zachodniej Europie i należy do Unii Europejskiej oraz NATO.",
    "options": null,
    "answer": true,
    "explanation": "Francja jest państwem zachodniej Europy oraz członkiem Unii Europejskiej i NATO."
  },
  {
    "id": "R04_FRA_03",
    "section": "Nowoczesna gospodarka Francji",
    "type": "fill_in",
    "prompt": "Najwyższy szczyt Europy to __________, leżący przy granicy Francji z Włochami.",
    "image": "r04_mapa_francji.jpg",
    "options": null,
    "answer": [
      "Mont Blanc"
    ],
    "altAnswers": [
      [
        "Mont Blanc",
        "mont blanc"
      ]
    ],
    "explanation": "W południowo-wschodniej części Francji, przy granicy z Włochami, leży Mont Blanc."
  },
  {
    "id": "R04_FRA_04",
    "section": "Nowoczesna gospodarka Francji",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady francuskich firm lub marek.",
    "image": "r04_marki_francuskie.jpg",
    "options": [
      "Carrefour",
      "Renault",
      "Airbus",
      "Danone",
      "Geysir",
      "Tower Bridge"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Wśród francuskich firm i marek wymieniono m.in. Carrefour, Auchan, Renault, Airbus i Danone."
  },
  {
    "id": "R04_FRA_05",
    "section": "Nowoczesna gospodarka Francji",
    "type": "riddle",
    "prompt": "Który sektor gospodarki ma we Francji największe znaczenie i wytwarza większość PKB?",
    "options": null,
    "answer": "sektor usług",
    "altAnswers": [
      "sektor usług",
      "usługi",
      "sektor uslug"
    ],
    "explanation": "We francuskiej gospodarce najważniejszy jest sektor usług, ponieważ wytwarza większość PKB i zatrudnia największą część mieszkańców kraju."
  },
  {
    "id": "R04_FRA_06",
    "section": "Nowoczesna gospodarka Francji",
    "type": "match",
    "prompt": "Połącz francuską firmę lub markę z branżą.",
    "image": "r04_marki_francuskie.jpg",
    "options": null,
    "left": [
      "Airbus",
      "Michelin",
      "Orange",
      "Chanel"
    ],
    "right": [
      "samoloty",
      "opony",
      "telekomunikacja",
      "odzież i perfumy"
    ],
    "answer": {
      "Airbus": "samoloty",
      "Michelin": "opony",
      "Orange": "telekomunikacja",
      "Chanel": "odzież i perfumy"
    },
    "explanation": "Pokazuje się przykłady znanych francuskich marek z różnych branż, m.in. samolotów, opon, telekomunikacji oraz odzieży i perfum."
  },
  {
    "id": "R04_FRA_07",
    "section": "Nowoczesna gospodarka Francji",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady działalności do kategorii.",
    "options": null,
    "items": [
      "produkcja samolotów",
      "produkcja leków",
      "sieci handlowe",
      "usługi turystyczne",
      "transport"
    ],
    "categories": [
      "przemysł high-tech",
      "usługi"
    ],
    "answer": {
      "przemysł high-tech": [
        "produkcja samolotów",
        "produkcja leków"
      ],
      "usługi": [
        "sieci handlowe",
        "usługi turystyczne",
        "transport"
      ]
    },
    "explanation": "Do przemysłu high-tech zalicza się m.in. produkcję urządzeń elektronicznych, samolotów, leków i robotów, a handel oraz turystyka należą do usług."
  },
  {
    "id": "R04_FRA_08",
    "section": "Nowoczesna gospodarka Francji",
    "type": "scenario",
    "prompt": "Podróżujesz po Francji pociągiem dużych prędkości, który osiąga ponad 300 km/h. Jak nazywa się ten rodzaj kolei?",
    "image": "r04_pociag_tgv.jpg",
    "options": [
      "TGV",
      "Geysir",
      "Airbus",
      "Luwr",
      "La Defense",
      "Korsyka"
    ],
    "answer": 0,
    "explanation": "Francuskie koleje dużych prędkości to TGV, a pociągi TGV jeżdżą z prędkością ponad 300 km/h."
  },
  {
    "id": "R04_FRA_09",
    "section": "Nowoczesna gospodarka Francji",
    "type": "multi_select",
    "prompt": "Zaznacz cechy przemysłu high-tech.",
    "options": [
      "zatrudnia świetnie wykształconych specjalistów",
      "inwestuje dużo w badania i testy",
      "wykorzystuje maszyny sterowane komputerowo",
      "powoduje poważne szkody w przyrodzie",
      "opiera się wyłącznie na pracy mięśni",
      "przynosi bardzo duże zyski"
    ],
    "answer": [
      0,
      1,
      2,
      5
    ],
    "explanation": "Przemysł high-tech zatrudnia świetnie wykształconych specjalistów, inwestuje w badania i automatyzację, przynosi duże zyski oraz nie powoduje poważnych szkód w przyrodzie."
  },
  {
    "id": "R04_FRA_10",
    "section": "Nowoczesna gospodarka Francji",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do francuskich firm i marek: Carrefour, Auchan, Decathlon, IKEA.",
    "image": "r04_marki_francuskie.jpg",
    "options": null,
    "answer": "IKEA",
    "explanation": "Carrefour, Auchan i Decathlon to francuskie sieci handlowe. IKEA także jest wielką siecią sklepów, ale pochodzi ze Szwecji."
  },
  {
    "id": "R04_FRA_11",
    "section": "Nowoczesna gospodarka Francji",
    "type": "single_choice",
    "prompt": "Czym jest technopolia?",
    "options": [
      "Obszarem wielu firm high-tech oraz współpracujących uczelni i instytucji",
      "Tylko pojedynczą farmą rolną",
      "Portem morskim wyłącznie dla turystów",
      "Gorącym źródłem na Islandii",
      "Zespołem wysp na Atlantyku",
      "Siedzibą brytyjskiego parlamentu"
    ],
    "answer": 0,
    "explanation": "Technopolia to obszar, na którym działa wiele firm przemysłu high-tech oraz współpracujących z nimi uczelni i instytucji."
  },
  {
    "id": "R04_FRA_12",
    "section": "Nowoczesna gospodarka Francji",
    "type": "true_false",
    "prompt": "Sophia Antipolis to największa technopolia we Francji i w Europie.",
    "options": null,
    "answer": true,
    "explanation": "Największą technopolią we Francji i Europie jest Sophia Antipolis w południowej części kraju."
  },
  {
    "id": "R04_FRA_13",
    "section": "Nowoczesna gospodarka Francji",
    "type": "scenario",
    "prompt": "Ktoś mówi: \"Francja ma silną gospodarkę, bo większość PKB wytwarza rolnictwo\". Co należy poprawić w tej wypowiedzi?",
    "options": [
      "Większość PKB wytwarza sektor usług",
      "Większość PKB wytwarza wyłącznie górnictwo",
      "Francja nie ma własnych firm",
      "Francja nie należy do Unii Europejskiej",
      "Transport TGV nie istnieje",
      "Paryż nie jest stolicą Francji"
    ],
    "answer": 0,
    "explanation": "We francuskiej gospodarce zdecydowanie dominują usługi, a nie rolnictwo."
  },
  {
    "id": "R04_MET_01",
    "section": "Londyn i Paryż — europejskie metropolie",
    "type": "single_choice",
    "prompt": "Jak nazywa się duże i znaczące miasto, wokół którego rozwinęło się wiele mniejszych miejscowości?",
    "image": "r04_metropolie_londyn_paryz.jpg",
    "options": [
      "metropolia",
      "wulkan",
      "technopolia",
      "gejzer",
      "półwysep",
      "litosfera"
    ],
    "answer": 0,
    "explanation": "Tak duże i znaczące miasta nazywa się metropoliami, a wraz z otaczającymi miejscowościami tworzą aglomerację."
  },
  {
    "id": "R04_MET_02",
    "section": "Londyn i Paryż — europejskie metropolie",
    "type": "fill_in",
    "prompt": "Londyn leży nad rzeką __________, a Paryż nad rzeką __________.",
    "options": null,
    "answer": [
      "Tamizą",
      "Sekwaną"
    ],
    "altAnswers": [
      [
        "Tamizą",
        "Tamiza",
        "tamizą",
        "tamiza"
      ],
      [
        "Sekwaną",
        "Sekwana",
        "sekwaną",
        "sekwana"
      ]
    ],
    "explanation": "Londyn leży nad Tamizą, a Paryż nad Sekwaną."
  },
  {
    "id": "R04_MET_03",
    "section": "Londyn i Paryż — europejskie metropolie",
    "type": "match",
    "prompt": "Połącz miasto z państwem, którego jest stolicą.",
    "image": "r04_metropolie_londyn_paryz.jpg",
    "options": null,
    "left": [
      "Londyn",
      "Paryż"
    ],
    "right": [
      "Wielka Brytania",
      "Francja"
    ],
    "answer": {
      "Londyn": "Wielka Brytania",
      "Paryż": "Francja"
    },
    "explanation": "Londyn jest stolicą Wielkiej Brytanii, a Paryż jest stolicą Francji."
  },
  {
    "id": "R04_MET_04",
    "section": "Londyn i Paryż — europejskie metropolie",
    "type": "true_false",
    "prompt": "Londyn jest największym miastem Wielkiej Brytanii.",
    "options": null,
    "answer": true,
    "explanation": "Londyn jest stolicą i zarazem największym miastem Wielkiej Brytanii."
  },
  {
    "id": "R04_MET_05",
    "section": "Londyn i Paryż — europejskie metropolie",
    "type": "multi_select",
    "prompt": "Zaznacz cechy metropolii globalnych opisane przy Londynie i Paryżu.",
    "options": [
      "siedziby i oddziały wielkich międzynarodowych firm",
      "uczelnie przyciągające studentów z całego świata",
      "międzynarodowe znaczenie i wpływy",
      "całkowity brak turystów",
      "wyłącznie rolniczy charakter",
      "zakaz organizowania dużych wydarzeń"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Metropolie globalne mają międzynarodowe znaczenie i wpływy: działają w nich wielkie firmy i organizacje, uczelnie przyciągają studentów z całego świata, a miasta odgrywają ważną rolę w biznesie i kulturze."
  },
  {
    "id": "R04_MET_06",
    "section": "Londyn i Paryż — europejskie metropolie",
    "type": "sort",
    "prompt": "Przyporządkuj obiekty i cechy do Londynu, Paryża albo obu metropolii.",
    "options": null,
    "items": [
      "Big Ben",
      "Tower Bridge",
      "Luwr",
      "Wieża Eiffla",
      "wielokulturowość",
      "duże lotniska"
    ],
    "categories": [
      "Londyn",
      "Paryż",
      "oba miasta"
    ],
    "answer": {
      "Londyn": [
        "Big Ben",
        "Tower Bridge"
      ],
      "Paryż": [
        "Luwr",
        "Wieża Eiffla"
      ],
      "oba miasta": [
        "wielokulturowość",
        "duże lotniska"
      ]
    },
    "explanation": "Big Ben i Tower Bridge są symbolami Londynu, Luwr i Wieża Eiffla znajdują się w Paryżu, a wielokulturowość oraz duże lotniska dotyczą obu metropolii."
  },
  {
    "id": "R04_MET_07",
    "section": "Londyn i Paryż — europejskie metropolie",
    "type": "riddle",
    "prompt": "Jaki słynny londyński most łączy brzegi Tamizy?",
    "image": "r04_atrakcje_londynu.jpg",
    "options": null,
    "answer": "Tower Bridge",
    "altAnswers": [
      "Tower Bridge",
      "tower bridge",
      "most Tower Bridge"
    ],
    "explanation": "Brzegi Tamizy łączy wiele mostów, a najsłynniejszym jest Tower Bridge."
  },
  {
    "id": "R04_MET_08",
    "section": "Londyn i Paryż — europejskie metropolie",
    "type": "riddle",
    "prompt": "Jak nazywa się ogromne paryskie muzeum, w którym można zobaczyć m.in. Mona Lisę i Wenus z Milo?",
    "image": "r04_atrakcje_paryza.jpg",
    "options": null,
    "answer": "Luwr",
    "altAnswers": [
      "Luwr",
      "luwr"
    ],
    "explanation": "Luwr to ogromne muzeum w Paryżu, gdzie znajdują się słynne dzieła sztuki, m.in. Mona Lisa i Wenus z Milo."
  },
  {
    "id": "R04_MET_09",
    "section": "Londyn i Paryż — europejskie metropolie",
    "type": "scenario",
    "prompt": "Miasto ma siedziby międzynarodowych firm, przyciąga studentów z całego świata i odgrywa ważną rolę w biznesie. Jakiego określenia używa się dla takich miast?",
    "options": [
      "metropolia globalna",
      "wyspa wulkaniczna",
      "gorące źródło",
      "półwysep",
      "park narodowy",
      "technopolia rolnicza"
    ],
    "answer": 0,
    "explanation": "Miasta o międzynarodowym znaczeniu i wpływach nazywa się metropoliami globalnymi."
  },
  {
    "id": "R04_MET_10",
    "section": "Londyn i Paryż — europejskie metropolie",
    "type": "sequence",
    "prompt": "Ułóż letnie igrzyska olimpijskie w Londynie i Paryżu w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Londyn 1948",
      "Paryż 1900",
      "Paryż 1924",
      "Londyn 1908"
    ],
    "answer": [
      "Paryż 1900",
      "Londyn 1908",
      "Paryż 1924",
      "Londyn 1948"
    ],
    "explanation": "Wymienia się igrzyska w Paryżu w 1900, Londynie w 1908, Paryżu w 1924 oraz Londynie w 1948 roku."
  },
  {
    "id": "R04_MET_11",
    "section": "Londyn i Paryż — europejskie metropolie",
    "type": "single_choice",
    "prompt": "Które zdanie opisuje Paryż?",
    "options": [
      "Leży nad Sekwaną i jest stolicą Francji",
      "Leży nad Tamizą i jest stolicą Wielkiej Brytanii",
      "Jest wyspą wulkaniczną",
      "Znajduje się na Islandii",
      "Jest największą technopolią Europy",
      "Nie jest odwiedzany przez turystów"
    ],
    "answer": 0,
    "explanation": "Paryż jest stolicą Francji, leży nad Sekwaną i ma duże znaczenie dla światowej kultury, zwłaszcza mody."
  },
  {
    "id": "R04_MET_12",
    "section": "Londyn i Paryż — europejskie metropolie",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do londyńskich obiektów: Pałac Westminsterski, Big Ben, Tower Bridge, Luwr.",
    "image": "r04_atrakcje_londynu.jpg",
    "options": null,
    "answer": "Luwr",
    "explanation": "Luwr znajduje się w Paryżu, a pozostałe obiekty są związane z Londynem."
  },
  {
    "id": "R04_MET_13",
    "section": "Londyn i Paryż — europejskie metropolie",
    "type": "true_false",
    "prompt": "Paryż odgrywa ważną rolę w światowej kulturze i jest nazywany stolicą mody.",
    "image": "r04_atrakcje_paryza.jpg",
    "options": null,
    "answer": true,
    "explanation": "Podkreśla się znaczenie Paryża dla światowej kultury, zwłaszcza mody."
  },
  {
    "id": "R04_TUR_01",
    "section": "Turystyka w południowej Europie",
    "type": "single_choice",
    "prompt": "Czym jest turystyka?",
    "options": [
      "podróżowaniem krótszym niż rok w celach innych niż zarobkowe",
      "stałą pracą zarobkową za granicą",
      "wyłącznie produkcją samolotów",
      "ruchami płyt litosfery",
      "działalnością tylko w rolnictwie",
      "wyłącznie handlem w supermarketach"
    ],
    "answer": 0,
    "explanation": "Turystyka to podróżowanie trwające krócej niż rok, odbywające się w celach innych niż zarobkowe."
  },
  {
    "id": "R04_TUR_02",
    "section": "Turystyka w południowej Europie",
    "type": "multi_select",
    "prompt": "Zaznacz częste powody wyjazdów turystycznych.",
    "options": [
      "wypoczynek",
      "zwiedzanie",
      "rekreacja",
      "stała praca zarobkowa",
      "tworzenie płyt litosfery",
      "produkcja leków"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Do najczęstszych powodów wyjazdów należą wypoczynek, zwiedzanie i rekreacja."
  },
  {
    "id": "R04_TUR_03",
    "section": "Turystyka w południowej Europie",
    "type": "sort",
    "prompt": "Przyporządkuj walory turystyczne do odpowiednich grup.",
    "image": "r04_walory_turystyczne.jpg",
    "options": null,
    "items": [
      "klimat",
      "morze",
      "plaże",
      "zabytki",
      "muzea",
      "kuchnia"
    ],
    "categories": [
      "przyrodnicze",
      "kulturowe"
    ],
    "answer": {
      "przyrodnicze": [
        "klimat",
        "morze",
        "plaże"
      ],
      "kulturowe": [
        "zabytki",
        "muzea",
        "kuchnia"
      ]
    },
    "explanation": "Walory przyrodnicze obejmują m.in. klimat, morze i plaże, a kulturowe m.in. zabytki, muzea i kuchnię."
  },
  {
    "id": "R04_TUR_04",
    "section": "Turystyka w południowej Europie",
    "type": "match",
    "prompt": "Połącz półwysep południowej Europy z przykładowym państwem.",
    "image": "r04_mapa_poludniowej_europy.jpg",
    "options": null,
    "left": [
      "Półwysep Iberyjski",
      "Półwysep Apeniński",
      "Półwysep Bałkański"
    ],
    "right": [
      "Hiszpania",
      "Włochy",
      "Grecja"
    ],
    "answer": {
      "Półwysep Iberyjski": "Hiszpania",
      "Półwysep Apeniński": "Włochy",
      "Półwysep Bałkański": "Grecja"
    },
    "explanation": "Do popularnych turystycznie regionów należą półwyspy Iberyjski, Apeniński i Bałkański; w ćwiczeniach działu łączono je m.in. z Hiszpanią, Włochami i Grecją."
  },
  {
    "id": "R04_TUR_05",
    "section": "Turystyka w południowej Europie",
    "type": "fill_in",
    "prompt": "Obiekty służące obsłudze przyjezdnych nazywamy __________ turystyczną.",
    "options": null,
    "answer": [
      "infrastrukturą"
    ],
    "altAnswers": [
      [
        "infrastrukturą",
        "infrastruktura"
      ]
    ],
    "explanation": "Infrastruktura turystyczna to obiekty służące obsłudze przyjezdnych, np. hotele, restauracje i szlaki turystyczne."
  },
  {
    "id": "R04_TUR_06",
    "section": "Turystyka w południowej Europie",
    "type": "true_false",
    "prompt": "Turystyka jest częścią sektora usług.",
    "image": "r04_walory_turystyczne.jpg",
    "options": null,
    "answer": true,
    "explanation": "Turystyka odgrywa ważną rolę w gospodarce i jest częścią sektora usług."
  },
  {
    "id": "R04_TUR_07",
    "section": "Turystyka w południowej Europie",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady infrastruktury turystycznej.",
    "options": [
      "hotele",
      "restauracje",
      "punkty informacyjne",
      "szlaki turystyczne",
      "jądro wewnętrzne Ziemi",
      "płyta eurazjatycka"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do infrastruktury turystycznej należą obiekty służące obsłudze gości, takie jak hotele, restauracje, punkty informacyjne i szlaki turystyczne."
  },
  {
    "id": "R04_TUR_08",
    "section": "Turystyka w południowej Europie",
    "type": "match",
    "prompt": "Połącz miejsce z atrakcją.",
    "image": "r04_atrakcje_poludniowej_europy.jpg",
    "options": null,
    "left": [
      "Wenecja",
      "Rzym",
      "Barcelona",
      "Ateny"
    ],
    "right": [
      "Canale Grande",
      "Koloseum",
      "Sagrada Familia",
      "Akropol"
    ],
    "answer": {
      "Wenecja": "Canale Grande",
      "Rzym": "Koloseum",
      "Barcelona": "Sagrada Familia",
      "Ateny": "Akropol"
    },
    "explanation": "Wymienia się m.in. Wenecję z kanałami, Rzym z Koloseum i Forum Romanum, Barcelonę z Sagradą Familią oraz Ateny z Akropolem."
  },
  {
    "id": "R04_TUR_09",
    "section": "Turystyka w południowej Europie",
    "type": "riddle",
    "prompt": "Jak nazywa się kompleks połączonych jezior, skał wapiennych i wodospadów w Chorwacji?",
    "image": "r04_atrakcje_poludniowej_europy.jpg",
    "options": null,
    "answer": "Jeziora Plitwickie",
    "altAnswers": [
      "Jeziora Plitwickie",
      "jeziora plitwickie",
      "Plitwickie"
    ],
    "explanation": "Jeziora Plitwickie są jednym z przyrodniczych symboli południowej Europy."
  },
  {
    "id": "R04_TUR_10",
    "section": "Turystyka w południowej Europie",
    "type": "scenario",
    "prompt": "Turysta wybiera miejsce, gdzie ciepła i czysta woda sprzyja sportom wodnym, np. nurkowaniu. Który akwen opisuje się w tym kontekście?",
    "image": "r04_atrakcje_poludniowej_europy.jpg",
    "options": [
      "Morze Śródziemne",
      "Ocean Arktyczny",
      "Tamiza",
      "Sekwana",
      "Geysir",
      "Kanał La Manche"
    ],
    "answer": 0,
    "explanation": "Ciepła i czysta woda Morza Śródziemnego sprzyja sportom wodnym, np. nurkowaniu."
  },
  {
    "id": "R04_TUR_11",
    "section": "Turystyka w południowej Europie",
    "type": "single_choice",
    "prompt": "Który zestaw obejmuje trzy wielkie półwyspy południowej Europy?",
    "image": "r04_mapa_poludniowej_europy.jpg",
    "options": [
      "Iberyjski, Apeniński i Bałkański",
      "Skandynawski, Jutlandzki i Krymski",
      "Labrador, Arabski i Koreański",
      "Apeniński, Islandzki i Londyński",
      "Bałkański, Tamiza i Sekwana",
      "Iberyjski, Geysir i Akropol"
    ],
    "answer": 0,
    "explanation": "Wymieniono półwyspy Iberyjski, Apeniński i Bałkański."
  },
  {
    "id": "R04_TUR_12",
    "section": "Turystyka w południowej Europie",
    "type": "sort",
    "prompt": "Przyporządkuj skutki dużej liczby turystów do właściwych kategorii.",
    "options": null,
    "items": [
      "miejsca pracy",
      "przychody z wydatków turystów",
      "hałas",
      "zatłoczenie",
      "wzrost cen",
      "zanieczyszczenie"
    ],
    "categories": [
      "pozytywne",
      "negatywne"
    ],
    "answer": {
      "pozytywne": [
        "miejsca pracy",
        "przychody z wydatków turystów"
      ],
      "negatywne": [
        "hałas",
        "zatłoczenie",
        "wzrost cen",
        "zanieczyszczenie"
      ]
    },
    "explanation": "Turystyka daje miejsca pracy i przychody, ale może powodować hałas, zatłoczenie, wzrost cen i zanieczyszczenie popularnych miejsc."
  },
  {
    "id": "R04_TUR_13",
    "section": "Turystyka w południowej Europie",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do infrastruktury turystycznej: hotel, restauracja, punkt informacyjny, kopalnia odkrywkowa.",
    "options": null,
    "answer": "kopalnia odkrywkowa",
    "explanation": "Hotel, restauracja i punkt informacyjny obsługują turystów. Kopalnia odkrywkowa jest obiektem przemysłowym - służy wydobyciu surowców."
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż w logicznej kolejności ciąg zdarzeń wyjaśniający cechy środowiska Islandii.",
    "image": "r04_ruchy_plyt_litosfery.jpg",
    "options": null,
    "items": [
      "Na Islandii występują wulkany, gorące źródła i trzęsienia ziemi",
      "Płyty litosfery rozsuwają się",
      "Islandia leży na granicy płyt litosfery",
      "W szczelinę między płytami wpływa magma"
    ],
    "answer": [
      "Islandia leży na granicy płyt litosfery",
      "Płyty litosfery rozsuwają się",
      "W szczelinę między płytami wpływa magma",
      "Na Islandii występują wulkany, gorące źródła i trzęsienia ziemi"
    ],
    "explanation": "Islandia leży na granicy płyt, które się rozsuwają. W szczelinę wpływa magma, dlatego na wyspie występują wulkany, gorące źródła i trzęsienia ziemi."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz tylko korzyści wynikające z występowania zjawisk wulkanicznych na Islandii.",
    "image": "r04_gejzer_na_islandii.jpg",
    "options": [
      "wykorzystanie gorących źródeł do ogrzewania domów",
      "produkcja energii geotermalnej",
      "żyzne gleby wulkaniczne",
      "niszczenie zabudowań przez lawę",
      "utrudnienia w ruchu lotniczym",
      "zagrożenie dla ludzi i zwierząt"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Zjawiska wulkaniczne są groźne, ale dają też korzyści: gorące źródła można wykorzystywać do ogrzewania domów i produkcji energii, a gleby wulkaniczne są żyzne."
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Gorące źródła wyrzucające wodę pod wysokim ciśnieniem nazywamy __________, a nazwa pochodzi od islandzkiego __________.",
    "image": "r04_gejzer_na_islandii.jpg",
    "options": null,
    "answer": [
      "gejzerami",
      "Geysir"
    ],
    "altAnswers": [
      [
        "gejzerami",
        "gejzery",
        "gejzer"
      ],
      [
        "Geysir",
        "geysir"
      ]
    ],
    "explanation": "Gejzery biorą nazwę od położonego na Islandii gejzeru Geysir."
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które stwierdzenie najpełniej wyjaśnia, dlaczego Islandia ma ponad 20 czynnych wulkanów?",
    "image": "r04_mapa_islandii.jpg",
    "options": [
      "Leży na styku rozsuwających się płyt północnoamerykańskiej i eurazjatyckiej",
      "Leży w centrum jednej nieruchomej płyty litosfery",
      "Jest położona wyłącznie na pustyni",
      "Nie ma dostępu do oceanów",
      "Leży nad Sekwaną i Tamizą",
      "Jest częścią półwyspu Iberyjskiego"
    ],
    "answer": 0,
    "explanation": "Islandia leży na styku dwóch rozsuwających się płyt litosfery: północnoamerykańskiej i eurazjatyckiej."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz element gospodarki Francji z właściwym przykładem.",
    "image": "r04_pociag_tgv.jpg",
    "options": null,
    "left": [
      "koleje dużych prędkości",
      "sieci handlowe",
      "przemysł lotniczy",
      "usługi turystyczne"
    ],
    "right": [
      "TGV",
      "Carrefour i Auchan",
      "Airbus",
      "jeden z najliczniej odwiedzanych krajów świata"
    ],
    "answer": {
      "koleje dużych prędkości": "TGV",
      "sieci handlowe": "Carrefour i Auchan",
      "przemysł lotniczy": "Airbus",
      "usługi turystyczne": "jeden z najliczniej odwiedzanych krajów świata"
    },
    "explanation": "Francuska gospodarka jest nowoczesna: obejmuje usługi, transport, turystykę i przemysł high-tech."
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz wszystkie zdania zgodne z opisem francuskiego przemysłu high-tech.",
    "options": [
      "pracują w nim świetnie wykształceni specjaliści",
      "duże środki przeznacza się na badania i testy",
      "wykorzystuje maszyny sterowane komputerowo",
      "obejmuje m.in. produkcję leków i robotów",
      "jego główną cechą jest brak badań",
      "opiera się na ręcznej pracy mięśni"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "High-tech zatrudnia dobrze wykształconych specjalistów, inwestuje w badania, stosuje automatyzację, przynosi duże zyski i nie powoduje poważnych szkód w przyrodzie."
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Londyn ma prawie __________ mieszkańców, a jego aglomeracja około __________.",
    "image": "r04_metropolie_londyn_paryz.jpg",
    "options": null,
    "answer": [
      "10 mln",
      "15 mln"
    ],
    "altAnswers": [
      [
        "10 mln",
        "10 milionów",
        "prawie 10 mln"
      ],
      [
        "15 mln",
        "15 milionów",
        "około 15 mln"
      ]
    ],
    "explanation": "Londyn ma prawie 10 mln mieszkańców, a aglomeracja około 15 mln."
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Jesteś w biznesowej części Paryża położonej już poza granicami miasta, na przedmieściach. Jak nazywa się ta część?",
    "image": "r04_atrakcje_paryza.jpg",
    "options": [
      "La Defense",
      "City of London",
      "Hyde Park",
      "Canale Grande",
      "Geysir",
      "Sophia Antipolis"
    ],
    "answer": 0,
    "explanation": "Biznesowa część Paryża La Defense znajduje się poza granicami miasta, na jego przedmieściach."
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj lata letnich igrzysk olimpijskich do miasta.",
    "options": null,
    "items": [
      "1900",
      "1908",
      "1924",
      "1948",
      "2012",
      "2024"
    ],
    "categories": [
      "Londyn",
      "Paryż"
    ],
    "answer": {
      "Londyn": [
        "1908",
        "1948",
        "2012"
      ],
      "Paryż": [
        "1900",
        "1924",
        "2024"
      ]
    },
    "explanation": "W Londynie igrzyska odbyły się w latach 1908, 1948 i 2012, a w Paryżu w 1900, 1924 i 2024."
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do atrakcji południowej Europy: Canale Grande, Sagrada Familia, Akropol, Big Ben.",
    "image": "r04_atrakcje_poludniowej_europy.jpg",
    "options": null,
    "answer": "Big Ben",
    "explanation": "Big Ben jest symbolem Londynu, a pozostałe obiekty opisano w części o atrakcjach południowej Europy."
  },
  {
    "id": "R04_HARD_11",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz atrakcję z miejscem, z którym została.",
    "image": "r04_atrakcje_poludniowej_europy.jpg",
    "options": null,
    "left": [
      "Canale Grande",
      "Forum Romanum",
      "Sagrada Familia",
      "Akropol",
      "Jeziora Plitwickie"
    ],
    "right": [
      "Wenecja",
      "Rzym",
      "Barcelona",
      "Ateny",
      "Chorwacja"
    ],
    "answer": {
      "Canale Grande": "Wenecja",
      "Forum Romanum": "Rzym",
      "Sagrada Familia": "Barcelona",
      "Akropol": "Ateny",
      "Jeziora Plitwickie": "Chorwacja"
    },
    "explanation": "Przypisuje się Canale Grande Wenecji, Forum Romanum Rzymowi, Sagradę Familię Barcelonie, Akropol Atenom i Jeziora Plitwickie Chorwacji."
  },
  {
    "id": "R04_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz negatywne skutki tłumnej obecności turystów w popularnych miejscach.",
    "options": [
      "hałas",
      "zatłoczenie",
      "wzrost cen",
      "zanieczyszczenie",
      "nowe miejsca pracy",
      "przychody z wydatków turystów"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Duża liczba turystów może być uciążliwa dla mieszkańców przez hałas, zatłoczenie, wzrost cen i zanieczyszczenie."
  },
  {
    "id": "R04_HARD_13",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Do najpopularniejszych turystycznie regionów południowej Europy należą półwyspy: __________, __________ i __________.",
    "image": "r04_mapa_poludniowej_europy.jpg",
    "options": null,
    "answer": [
      "Iberyjski",
      "Apeniński",
      "Bałkański"
    ],
    "altAnswers": [
      [
        "Iberyjski",
        "iberyjski"
      ],
      [
        "Apeniński",
        "apeniński"
      ],
      [
        "Bałkański",
        "bałkański"
      ]
    ],
    "explanation": "Wymienia się trzy wielkie półwyspy: Iberyjski, Apeniński i Bałkański."
  },
  {
    "id": "R04_HARD_14",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Zwiedzasz starożytne miasto u podnóża czynnego wulkanu, zasypane popiołem po erupcji, którego ruiny odkryto dopiero w XVIII wieku. Co to za miejsce?",
    "image": "r04_atrakcje_poludniowej_europy.jpg",
    "options": [
      "Pompeje",
      "Wenecja",
      "Luwr",
      "Heathrow",
      "Sophia Antipolis",
      "Geysir"
    ],
    "answer": 0,
    "explanation": "Pompeje to starożytne miasto u podnóża czynnego wulkanu; zostało zniszczone przez erupcję i zasypane popiołem."
  },
  {
    "id": "R04_HARD_15",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Walory kulturowe południowej Europy obejmują m.in. liczne zabytki, zabudowę miast, kuchnię, muzykę i taniec.",
    "options": null,
    "answer": true,
    "explanation": "Walory kulturowe południowej Europy obejmują m.in. zabytki z różnych epok, zabudowę miast, kuchnię, muzykę i taniec."
  },
  {
    "id": "R04_HARD_16",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do elementów środowiska i gospodarki omawianych w dziale.",
    "options": null,
    "items": [
      "płyty litosfery",
      "gejzery",
      "sektor usług",
      "TGV",
      "metropolia globalna",
      "walory turystyczne"
    ],
    "categories": [
      "Islandia",
      "Francja",
      "metropolie i turystyka"
    ],
    "answer": {
      "Islandia": [
        "płyty litosfery",
        "gejzery"
      ],
      "Francja": [
        "sektor usług",
        "TGV"
      ],
      "metropolie i turystyka": [
        "metropolia globalna",
        "walory turystyczne"
      ]
    },
    "explanation": "Dział łączy treści o środowisku Islandii, gospodarce Francji, metropoliach i turystyce południowej Europy."
  }
];

const KID_PROMPTS = {};

const chapter = {
  "id": "r04",
  "number": 4,
  "title": "Wybrane elementy środowiska i gospodarki Europy",
  "icon": "🌍",
  "sectionOrder": [
    "Wulkany i trzęsienia ziemi na Islandii",
    "Nowoczesna gospodarka Francji",
    "Londyn i Paryż — europejskie metropolie",
    "Turystyka w południowej Europie"
  ],
  "sectionIcons": {
    "Wulkany i trzęsienia ziemi na Islandii": "🌋",
    "Nowoczesna gospodarka Francji": "🏭",
    "Londyn i Paryż — europejskie metropolie": "🏙️",
    "Turystyka w południowej Europie": "🏖️"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
