// Rozdział 4 - Rośliny okrytonasienne

const ALL_EXERCISES = [
  {
    "id": "R04_CB_01",
    "section": "4.1 Cechy i budowa",
    "type": "single_choice",
    "prompt": "Co najbardziej wyróżnia rośliny okrytonasienne?",
    "options": [
      "To, że wytwarzają owoce okrywające nasiona",
      "To, że mają tylko igły",
      "To, że nie mają korzeni",
      "To, że żyją wyłącznie w wodzie"
    ],
    "answer": 0,
    "explanation": "Najbardziej charakterystyczna cecha roślin okrytonasiennych to owoce, wewnątrz których znajdują się nasiona."
  },
  {
    "id": "R04_CB_02",
    "section": "4.1 Cechy i budowa",
    "type": "multi_select",
    "prompt": "Zaznacz organy typowej rośliny okrytonasiennej.",
    "options": [
      "korzeń",
      "łodyga",
      "liść",
      "skrzele",
      "kwiat"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Typowa roślina okrytonasienna ma korzeń, łodygę, liście i kwiaty. Skrzela mają zwierzęta wodne, nie rośliny."
  },
  {
    "id": "R04_CB_03",
    "section": "4.1 Cechy i budowa",
    "type": "true_false",
    "prompt": "Liście biorą udział w wymianie gazowej i transpiracji.",
    "options": null,
    "answer": true,
    "explanation": "Na liściach znajdują się aparaty szparkowe, przez które zachodzi wymiana gazowa i parowanie wody."
  },
  {
    "id": "R04_CB_04",
    "section": "4.1 Cechy i budowa",
    "type": "match",
    "prompt": "Połącz organ rośliny z jego główną funkcją.",
    "options": null,
    "left": [
      "korzeń",
      "łodyga",
      "owoc",
      "liść"
    ],
    "right": [
      "pobiera wodę i sole mineralne",
      "podtrzymuje inne organy",
      "chroni nasiona",
      "prowadzi fotosyntezę"
    ],
    "answer": {
      "korzeń": "pobiera wodę i sole mineralne",
      "łodyga": "podtrzymuje inne organy",
      "owoc": "chroni nasiona",
      "liść": "prowadzi fotosyntezę"
    },
    "explanation": "Każdy organ ma inne zadanie: korzeń pobiera wodę, łodyga podtrzymuje, liść prowadzi fotosyntezę, a owoc osłania nasiona."
  },
  {
    "id": "R04_CB_05",
    "section": "4.1 Cechy i budowa",
    "type": "fill_in",
    "prompt": "Pęd rośliny składa się z __________ i organów, które na niej wyrastają.",
    "options": null,
    "answer": [
      "łodygi"
    ],
    "altAnswers": [
      [
        "łodygi",
        "łodyga",
        "łodygę",
        "łodydze"
      ]
    ],
    "explanation": "Pęd to nadziemna część rośliny zbudowana z łodygi oraz osadzonych na niej liści, kwiatów i owoców."
  },
  {
    "id": "R04_CB_06",
    "section": "4.1 Cechy i budowa",
    "type": "scenario",
    "prompt": "Kuba wykopał młodą roślinę i zauważył część, która trzyma ją w glebie oraz pobiera wodę. Co znalazł?",
    "options": [
      "owoc",
      "korzeń",
      "liść",
      "pąk"
    ],
    "answer": 1,
    "explanation": "Korzeń utrzymuje roślinę w podłożu i pobiera z gleby wodę z solami mineralnymi."
  },
  {
    "id": "R04_CB_07",
    "section": "4.1 Cechy i budowa",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: korzeń, łodyga, liść, skrzydło.",
    "options": null,
    "answer": "skrzydło",
    "explanation": "Korzeń, łodyga i liść to organy rośliny. Skrzydło nie jest organem roślinnym."
  },
  {
    "id": "R04_CB_08",
    "section": "4.1 Cechy i budowa",
    "type": "sort",
    "prompt": "Przyporządkuj organy do części podziemnej lub nadziemnej rośliny.",
    "options": null,
    "items": [
      "korzeń",
      "łodyga",
      "liść",
      "kwiat",
      "owoc"
    ],
    "categories": [
      "część podziemna",
      "część nadziemna"
    ],
    "answer": {
      "część podziemna": [
        "korzeń"
      ],
      "część nadziemna": [
        "łodyga",
        "liść",
        "kwiat",
        "owoc"
      ]
    },
    "explanation": "U typowej rośliny pod ziemią znajduje się korzeń, a nad ziemią - pęd z łodygą, liśćmi, kwiatami i owocami."
  },
  {
    "id": "R04_CB_09",
    "section": "4.1 Cechy i budowa",
    "type": "single_choice",
    "prompt": "Spójrz na ilustrację. Który podpis wskazuje organ, z którego powstają nasiona?",
    "image": "/img/bbt_r04_budowa_rosliny.jpg",
    "options": [
      "kwiat",
      "liść",
      "korzeń",
      "łodyga"
    ],
    "answer": 0,
    "explanation": "Nasiona powstają po zapłodnieniu w kwiacie."
  },
  {
    "id": "R04_CB_10",
    "section": "4.1 Cechy i budowa",
    "type": "riddle",
    "prompt": "Jestem zielony, zwykle płaski i pomagam roślinie wytwarzać pokarm. Kim jestem?",
    "options": null,
    "answer": "liść",
    "altAnswers": [
      "liść",
      "liścia",
      "liściem",
      "liściu",
      "listek"
    ],
    "explanation": "Liść jest ważnym miejscem fotosyntezy, czyli wytwarzania pokarmu przez roślinę."
  },
  {
    "id": "R04_MO_01",
    "section": "4.1 Modyfikacje organów",
    "type": "single_choice",
    "prompt": "Po co opuncji cienkie liście zostały zmienione w ciernie?",
    "options": [
      "Żeby szybciej pływać",
      "Żeby ograniczyć utratę wody",
      "Żeby łapać dźwięki",
      "Żeby robić cień ślimakom"
    ],
    "answer": 1,
    "explanation": "W suchym środowisku małe liście lub ciernie pomagają ograniczać parowanie wody."
  },
  {
    "id": "R04_MO_02",
    "section": "4.1 Modyfikacje organów",
    "type": "single_choice",
    "prompt": "Na ilustracji widać roślinę pustynną. W której części tej rośliny zachodzi fotosynteza?",
    "image": "/img/bbt_r04_opuncja.jpg",
    "options": [
      "w korzeniu",
      "w zielonej łodydze",
      "w cierniach",
      "w nasionach"
    ],
    "answer": 1,
    "explanation": "U opuncji liście są zmienione w ciernie, więc fotosynteza zachodzi głównie w zielonej łodydze."
  },
  {
    "id": "R04_MO_03",
    "section": "4.1 Modyfikacje organów",
    "type": "true_false",
    "prompt": "Korzenie podporowe pomagają roślinie utrzymać się w niestabilnym podłożu.",
    "options": null,
    "answer": true,
    "explanation": "Takie korzenie wzmacniają roślinę i pomagają jej stać prosto tam, gdzie zwykłe korzenie nie wystarczają."
  },
  {
    "id": "R04_MO_04",
    "section": "4.1 Modyfikacje organów",
    "type": "single_choice",
    "prompt": "Która roślina z ilustracji wspina się dzięki korzeniom czepnym?",
    "image": "/img/bbt_r04_bluszcz_korzenie_czepne.jpg",
    "options": [
      "bluszcz",
      "opuncja",
      "marchew",
      "tulipan"
    ],
    "answer": 0,
    "explanation": "Bluszcz tworzy korzenie czepne, które pomagają mu przylegać do podpór."
  },
  {
    "id": "R04_MO_05",
    "section": "4.1 Modyfikacje organów",
    "type": "scenario",
    "prompt": "Roślina rośnie na glebie ubogiej w azot. Która modyfikacja może jej pomóc zdobyć ten pierwiastek?",
    "options": [
      "liście pułapkowe chwytające owady",
      "grubsza kora",
      "krótsza łodyga",
      "większe nasiona"
    ],
    "answer": 0,
    "explanation": "Niektóre rośliny, np. rosiczka, uzupełniają brak azotu, trawiąc schwytane owady."
  },
  {
    "id": "R04_MO_06",
    "section": "4.1 Modyfikacje organów",
    "type": "single_choice",
    "prompt": "Spójrz na ilustrację. Co jest najważniejszą cechą pokazanej rośliny?",
    "image": "/img/bbt_r04_rosiczka.jpg",
    "options": [
      "ma liście pułapkowe z lepką cieczą",
      "żyje tylko pod wodą",
      "nie ma korzeni",
      "wytwarza szyszki"
    ],
    "answer": 0,
    "explanation": "Rosiczka ma liście pułapkowe pokryte lepką cieczą, która pomaga chwytać małe zwierzęta."
  },
  {
    "id": "R04_MO_07",
    "section": "4.1 Modyfikacje organów",
    "type": "multi_select",
    "prompt": "Które przykłady to organy spichrzowe albo ich rola?",
    "options": [
      "korzeń marchwi gromadzi zapasy",
      "bulwa ziemniaka gromadzi zapasy",
      "ciernie opuncji magazynują dużo wody i cukru zamiast bronić rośliny",
      "mięsiste liście cebuli przechowują substancje zapasowe"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Marchew, ziemniak i cebula mają organy spichrzowe. Ciernie opuncji przede wszystkim chronią roślinę i ograniczają utratę wody."
  },
  {
    "id": "R04_MO_08",
    "section": "4.1 Modyfikacje organów",
    "type": "single_choice",
    "prompt": "Na ilustracji widać trzy przykłady organów spichrzowych. Który z nich jest bulwą pędową?",
    "image": "/img/bbt_r04_organy_spichrzowe.jpg",
    "options": [
      "marchew",
      "ziemniak",
      "cebula",
      "żaden"
    ],
    "answer": 1,
    "explanation": "Ziemniak tworzy bulwy pędowe, czyli przekształcone części pędu."
  },
  {
    "id": "R04_MO_09",
    "section": "4.1 Modyfikacje organów",
    "type": "riddle",
    "prompt": "Jestem zmienionym liściem lub pędem. Oplatam podporę i pomagam roślinie piąć się do góry. Kim jestem?",
    "options": null,
    "answer": "wąs",
    "altAnswers": [
      "wąs",
      "wąsy",
      "wąsem",
      "wąs czepny",
      "wąsy czepne"
    ],
    "explanation": "Wąsy czepne pomagają roślinie wspinać się ku światłu."
  },
  {
    "id": "R04_KZ_01",
    "section": "4.2 Kwiat i zapylanie",
    "type": "single_choice",
    "prompt": "Jak nazywa się męski element kwiatu?",
    "options": [
      "słupek",
      "pręcik",
      "zalążnia",
      "płatki"
    ],
    "answer": 1,
    "explanation": "Pręciki są męskimi elementami kwiatu i wytwarzają pyłek."
  },
  {
    "id": "R04_KZ_02",
    "section": "4.2 Kwiat i zapylanie",
    "type": "single_choice",
    "prompt": "Na ilustracji wskaż część, na którą musi trafić pyłek, aby doszło do zapylenia.",
    "image": "/img/bbt_r04_budowa_kwiatu.jpg",
    "options": [
      "znamię słupka",
      "działki kielicha",
      "płatek korony",
      "szypułka"
    ],
    "answer": 0,
    "explanation": "Ziarna pyłku muszą trafić na znamię słupka."
  },
  {
    "id": "R04_KZ_03",
    "section": "4.2 Kwiat i zapylanie",
    "type": "fill_in",
    "prompt": "Pyłek powstaje w __________, a żeńska komórka rozrodcza znajduje się w __________.",
    "options": null,
    "answer": [
      "pręcikach",
      "zalążni"
    ],
    "altAnswers": [
      [
        "pręcikach",
        "pręciki",
        "pręcik"
      ],
      [
        "zalążni",
        "zalążnia",
        "zalążnię"
      ]
    ],
    "explanation": "Pręciki wytwarzają pyłek, a w zalążni słupka znajdują się żeńskie komórki rozrodcze."
  },
  {
    "id": "R04_KZ_04",
    "section": "4.2 Kwiat i zapylanie",
    "type": "true_false",
    "prompt": "Zapłodnienie to połączenie męskiej i żeńskiej komórki rozrodczej.",
    "options": null,
    "answer": true,
    "explanation": "Tak właśnie powstaje zygota, od której zaczyna się rozwój nasiona."
  },
  {
    "id": "R04_KZ_05",
    "section": "4.2 Kwiat i zapylanie",
    "type": "single_choice",
    "prompt": "Który zestaw najlepiej pasuje do kwiatu wiatropylnego?",
    "image": "/img/bbt_r04_wiatropylny_owadopylny.jpg",
    "options": [
      "duże, pachnące płatki i dużo nektaru",
      "niepozorne kwiaty i dużo lekkiego pyłku",
      "grube, mięsiste liście",
      "kolczasty owoc"
    ],
    "answer": 1,
    "explanation": "Rośliny wiatropylne zwykle mają niepozorne kwiaty i produkują dużo lekkiego pyłku."
  },
  {
    "id": "R04_KZ_06",
    "section": "4.2 Kwiat i zapylanie",
    "type": "single_choice",
    "prompt": "Po co kwiaty owadopylne wytwarzają nektar?",
    "options": [
      "Żeby odstraszać owady",
      "Żeby przywabiać zapylacze",
      "Żeby chłodzić słupek",
      "Żeby nasiona szybciej rosły"
    ],
    "answer": 1,
    "explanation": "Nektar przyciąga zapylacze, które przenoszą pyłek między kwiatami."
  },
  {
    "id": "R04_KZ_07",
    "section": "4.2 Kwiat i zapylanie",
    "type": "scenario",
    "prompt": "Pszczoła usiadła na jednym kwiecie, ubrudziła się pyłkiem, a potem poleciała na drugi kwiat tego samego gatunku. Co najprawdopodobniej się stało?",
    "options": [
      "doszło do zapylenia",
      "owoc od razu dojrzał",
      "liście zamieniły się w ciernie",
      "roślina przestała rosnąć"
    ],
    "answer": 0,
    "explanation": "Owady mogą przenosić pyłek na znamię słupka innego kwiatu, czyli doprowadzić do zapylenia."
  },
  {
    "id": "R04_KZ_08",
    "section": "4.2 Kwiat i zapylanie",
    "type": "single_choice",
    "prompt": "Na ilustracji widać zapylanie przez owada. Co owad przenosi między kwiatami?",
    "image": "/img/bbt_r04_owad_zapyla_kwiat.jpg",
    "options": [
      "wodę",
      "pyłek",
      "korzenie",
      "nasiona"
    ],
    "answer": 1,
    "explanation": "Zapylacze przenoszą pyłek z pręcików jednego kwiatu na słupek drugiego."
  },
  {
    "id": "R04_KZ_09",
    "section": "4.2 Kwiat i zapylanie",
    "type": "match",
    "prompt": "Połącz pojęcie z krótkim wyjaśnieniem.",
    "options": null,
    "left": [
      "zapylenie",
      "zapłodnienie",
      "miodnik"
    ],
    "right": [
      "trafienie pyłku na znamię słupka",
      "połączenie komórek rozrodczych",
      "miejsce wytwarzania nektaru"
    ],
    "answer": {
      "zapylenie": "trafienie pyłku na znamię słupka",
      "zapłodnienie": "połączenie komórek rozrodczych",
      "miodnik": "miejsce wytwarzania nektaru"
    },
    "explanation": "Te trzy pojęcia opisują różne elementy rozmnażania roślin okrytonasiennych."
  },
  {
    "id": "R04_KZ_10",
    "section": "4.2 Kwiat i zapylanie",
    "type": "riddle",
    "prompt": "Jestem słodką nagrodą w kwiacie. Dzięki mnie pszczoły i inne zwierzęta chętniej odwiedzają rośliny. Co to jest?",
    "options": null,
    "answer": "nektar",
    "altAnswers": [
      "nektar",
      "nektaru",
      "nektarem"
    ],
    "explanation": "Nektar przywabia zapylacze do kwiatów."
  },
  {
    "id": "R04_RW_01",
    "section": "4.2 Rozmnażanie wegetatywne",
    "type": "true_false",
    "prompt": "Rozmnażanie wegetatywne zachodzi bez udziału nasion.",
    "options": null,
    "answer": true,
    "explanation": "W rozmnażaniu wegetatywnym nowa roślina powstaje z części rośliny macierzystej, a nie z nasienia."
  },
  {
    "id": "R04_RW_02",
    "section": "4.2 Rozmnażanie wegetatywne",
    "type": "single_choice",
    "prompt": "Który przykład pokazuje rozmnażanie wegetatywne?",
    "options": [
      "ziemniak wyrasta z bulwy",
      "jabłoń wyrasta z nasiona",
      "sosna wytwarza pyłek",
      "pszczoła zbiera nektar"
    ],
    "answer": 0,
    "explanation": "Bulwa ziemniaka może dać początek nowej roślinie bez udziału nasion."
  },
  {
    "id": "R04_RW_03",
    "section": "4.2 Rozmnażanie wegetatywne",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady części roślin, które mogą brać udział w rozmnażaniu wegetatywnym.",
    "options": [
      "cebule",
      "bulwy",
      "rozłogi",
      "owoce"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "W rozmnażaniu wegetatywnym biorą udział różne części rośliny, np. cebule, bulwy i rozłogi."
  },
  {
    "id": "R04_RW_04",
    "section": "4.2 Rozmnażanie wegetatywne",
    "type": "single_choice",
    "prompt": "Na ilustracji widać kilka przykładów. Który podpis dotyczy truskawki?",
    "image": "/img/bbt_r04_rozmnazanie_wegetatywne.jpg",
    "options": [
      "cebula",
      "rozłogi",
      "bulwy",
      "liście pułapkowe"
    ],
    "answer": 1,
    "explanation": "Truskawka rozmnaża się wegetatywnie dzięki rozłogom."
  },
  {
    "id": "R04_RW_05",
    "section": "4.2 Rozmnażanie wegetatywne",
    "type": "fill_in",
    "prompt": "U truskawki nowa roślina może wyrosnąć z __________, a u ziemniaka z __________.",
    "options": null,
    "answer": [
      "rozłogu",
      "bulwy"
    ],
    "altAnswers": [
      [
        "rozłogu",
        "rozłóg",
        "rozłogi",
        "rozłogu"
      ],
      [
        "bulwy",
        "bulwa",
        "bulw"
      ]
    ],
    "explanation": "Truskawka wytwarza rozłogi, a ziemniak bulwy pędowe."
  },
  {
    "id": "R04_RW_06",
    "section": "4.2 Rozmnażanie wegetatywne",
    "type": "scenario",
    "prompt": "Ola wsadziła do ziemi cebulę kwiatu i po jakimś czasie pojawiła się nowa roślina. Jak nazywa się taki sposób rozmnażania?",
    "options": [
      "wegetatywne",
      "płciowe",
      "zarodnikowe",
      "przez zapylanie"
    ],
    "answer": 0,
    "explanation": "Nowa roślina powstała z cebuli, czyli z części rośliny, a to jest rozmnażanie wegetatywne."
  },
  {
    "id": "R04_RW_07",
    "section": "4.2 Rozmnażanie wegetatywne",
    "type": "riddle",
    "prompt": "Jestem długim pędem pełzającym po ziemi. Dzięki mnie truskawka tworzy nowe rośliny obok siebie. Kim jestem?",
    "options": null,
    "answer": "rozłóg",
    "altAnswers": [
      "rozłóg",
      "rozłogu",
      "rozłogiem",
      "rozłogi"
    ],
    "explanation": "Rozłogi umożliwiają truskawce rozmnażanie wegetatywne."
  },
  {
    "id": "R04_NO_01",
    "section": "4.3 Nasiona i owoce",
    "type": "single_choice",
    "prompt": "Po co roślinie owoc?",
    "options": [
      "chroni nasiona",
      "zamienia liście w korzenie",
      "wytwarza pyłek",
      "przyczepia roślinę do muru"
    ],
    "answer": 0,
    "explanation": "Owoc osłania nasiona, a często pomaga też w ich rozsiewaniu."
  },
  {
    "id": "R04_NO_02",
    "section": "4.3 Nasiona i owoce",
    "type": "single_choice",
    "prompt": "Która część nasiona może rozwinąć się w nową roślinę?",
    "image": "/img/bbt_r04_budowa_nasiona_fasoli.jpg",
    "options": [
      "zarodek",
      "łupina",
      "pestka",
      "nektar"
    ],
    "answer": 0,
    "explanation": "To zarodek rozwija się w młodą roślinę."
  },
  {
    "id": "R04_NO_03",
    "section": "4.3 Nasiona i owoce",
    "type": "multi_select",
    "prompt": "Co jest potrzebne nasionu do kiełkowania?",
    "options": [
      "woda",
      "odpowiednia temperatura",
      "powietrze",
      "lakier do drewna"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Do kiełkowania nasiono potrzebuje wody, tlenu i odpowiedniej temperatury."
  },
  {
    "id": "R04_NO_04",
    "section": "4.3 Nasiona i owoce",
    "type": "sequence",
    "prompt": "Ułóż etapy kiełkowania od początku do końca.",
    "options": null,
    "items": [
      "wyrasta korzeń",
      "nasiono pobiera wodę",
      "pojawia się młody pęd",
      "pęka łupina"
    ],
    "answer": [
      "nasiono pobiera wodę",
      "pęka łupina",
      "wyrasta korzeń",
      "pojawia się młody pęd"
    ],
    "explanation": "Najpierw nasiono pobiera wodę, potem pęka łupina, następnie wyrasta korzeń i pojawia się pęd."
  },
  {
    "id": "R04_NO_05",
    "section": "4.3 Nasiona i owoce",
    "type": "single_choice",
    "prompt": "Spójrz na ilustrację. Który etap pokazuje młodą roślinę z liśćmi nad ziemią?",
    "image": "/img/bbt_r04_kielkowanie_fasoli.jpg",
    "options": [
      "pierwszy",
      "drugi",
      "czwarty",
      "piąty"
    ],
    "answer": 3,
    "explanation": "Piąty etap pokazuje już młodą roślinę z liśćmi."
  },
  {
    "id": "R04_NO_06",
    "section": "4.3 Nasiona i owoce",
    "type": "single_choice",
    "prompt": "Jak najczęściej rozsiewane są lekkie nasiona z puchem, takie jak u mniszka?",
    "image": "/img/bbt_r04_rozsiewanie_nasion.jpg",
    "options": [
      "przez wiatr",
      "przez wodę morską tylko",
      "przez podziemne grzyby",
      "przez mróz"
    ],
    "answer": 0,
    "explanation": "Lekki puch działa jak spadochron i pomaga w rozsiewaniu przez wiatr."
  },
  {
    "id": "R04_NO_07",
    "section": "4.3 Nasiona i owoce",
    "type": "fill_in",
    "prompt": "Owoc, który chroni nasiona, a jednocześnie może pomagać w ich rozsiewaniu, powstaje z __________ kwiatu.",
    "options": null,
    "answer": [
      "zalążni"
    ],
    "altAnswers": [
      [
        "zalążni",
        "zalążnia",
        "zalążnię"
      ]
    ],
    "explanation": "Po zapłodnieniu zalążnia przekształca się w owoc."
  },
  {
    "id": "R04_NO_08",
    "section": "4.3 Nasiona i owoce",
    "type": "single_choice",
    "prompt": "Na ilustracji widać owoc tulipana. Jak nazywa się taki suchy owoc, który pęka i uwalnia nasiona?",
    "image": "/img/bbt_r04_torebka_tulipana.jpg",
    "options": [
      "torebka",
      "szyszka",
      "kłącze",
      "igła"
    ],
    "answer": 0,
    "explanation": "Owocem tulipana jest torebka, czyli suchy owoc pękający podczas dojrzewania."
  },
  {
    "id": "R04_DL_01",
    "section": "4.4 Drzewa liściaste w Polsce",
    "type": "single_choice",
    "prompt": "Które drzewo ma liść o wyraźnie klapowanym, dłoniastym kształcie?",
    "image": "/img/bbt_r04_liscie_dab_klon.jpg",
    "options": [
      "dąb",
      "klon",
      "brzoza",
      "lipa"
    ],
    "answer": 1,
    "explanation": "Taki charakterystyczny, dłoniasty liść ma klon."
  },
  {
    "id": "R04_DL_02",
    "section": "4.4 Drzewa liściaste w Polsce",
    "type": "single_choice",
    "prompt": "Spójrz na ilustrację. Które drzewo wytwarza kolczastą okrywę z kasztanem w środku?",
    "image": "/img/bbt_r04_kasztanowiec.jpg",
    "options": [
      "brzoza",
      "kasztanowiec",
      "olsza",
      "wierzba"
    ],
    "answer": 1,
    "explanation": "Kasztanowiec tworzy kolczaste owoce, w których znajdują się kasztany."
  },
  {
    "id": "R04_DL_03",
    "section": "4.4 Drzewa liściaste w Polsce",
    "type": "match",
    "prompt": "Połącz drzewo z tym, co dobrze je opisuje.",
    "options": null,
    "left": [
      "brzoza",
      "dąb",
      "lipa"
    ],
    "right": [
      "ma kotki",
      "ma żołędzie",
      "ma podsadkę i drobne owoce"
    ],
    "answer": {
      "brzoza": "ma kotki",
      "dąb": "ma żołędzie",
      "lipa": "ma podsadkę i drobne owoce"
    },
    "explanation": "Te cechy pomagają rozpoznawać popularne drzewa liściaste w Polsce."
  },
  {
    "id": "R04_DL_04",
    "section": "4.4 Drzewa liściaste w Polsce",
    "type": "single_choice",
    "prompt": "Który zestaw najlepiej pasuje do ilustracji po prawej?",
    "image": "/img/bbt_r04_owoce_brzoza_lipa.jpg",
    "options": [
      "brzoza - kotki, lipa - podsadka i orzeszki",
      "brzoza - kasztany, lipa - żołędzie",
      "brzoza - szyszki, lipa - igły",
      "brzoza - bulwy, lipa - cebule"
    ],
    "answer": 0,
    "explanation": "Brzozę można rozpoznać po kotkach, a lipę po podsadce i małych owocach."
  },
  {
    "id": "R04_PC_01",
    "section": "4.5 W przyrodzie i dla człowieka",
    "type": "multi_select",
    "prompt": "Dlaczego rośliny okrytonasienne są ważne dla ludzi i zwierząt?",
    "options": [
      "dają pokarm",
      "są schronieniem dla wielu organizmów",
      "wytwarzają tlen",
      "zamieniają wszystkie skały w piasek"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Rośliny okrytonasienne dostarczają pożywienia, tlenu i miejsc życia dla innych organizmów."
  },
  {
    "id": "R04_PC_02",
    "section": "4.5 W przyrodzie i dla człowieka",
    "type": "single_choice",
    "prompt": "Na ilustracji pokazano różne środowiska. W którym z nich także mogą żyć rośliny okrytonasienne?",
    "image": "/img/bbt_r04_siedliska.jpg",
    "options": [
      "tylko na łące",
      "tylko w lesie",
      "na łące, w lesie i w wodzie",
      "wyłącznie na pustyni"
    ],
    "answer": 2,
    "explanation": "Rośliny okrytonasienne żyją w bardzo różnych środowiskach, także w wodzie."
  },
  {
    "id": "R04_ST_01",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do roślin okrytonasiennych lub nagonasiennych.",
    "options": null,
    "items": [
      "wytwarzają owoce",
      "nasiona mogą leżeć w szyszkach",
      "mają kwiaty",
      "większość roślin uprawnych należy do tej grupy"
    ],
    "categories": [
      "okrytonasienne",
      "nagonasienne"
    ],
    "answer": {
      "okrytonasienne": [
        "wytwarzają owoce",
        "mają kwiaty",
        "większość roślin uprawnych należy do tej grupy"
      ],
      "nagonasienne": [
        "nasiona mogą leżeć w szyszkach"
      ]
    },
    "explanation": "Okrytonasienne mają kwiaty i owoce, a u nagonasiennych nasiona nie są zamknięte w owocach."
  },
  {
    "id": "R04_ST_02",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Dwie rośliny żyją w suchym miejscu. Pierwsza ma duże cienkie liście, druga - ciernie i zieloną łodygę. Która lepiej poradzi sobie z brakiem wody?",
    "options": [
      "pierwsza",
      "druga",
      "obie tak samo",
      "żadna"
    ],
    "answer": 1,
    "explanation": "Ciernie ograniczają parowanie, a zielona łodyga może przejąć rolę liści w fotosyntezie.",
    "image": "/img/bbt_r04_opuncja.jpg"
  },
  {
    "id": "R04_ST_03",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Na ilustracji są dwa typy kwiatów. Który z nich musi wytwarzać więcej lekkiego pyłku, aby zwiększyć szansę zapylenia?",
    "image": "/img/bbt_r04_wiatropylny_owadopylny.jpg",
    "options": [
      "kwiat owadopylny",
      "kwiat wiatropylny",
      "oba tak samo",
      "żaden"
    ],
    "answer": 1,
    "explanation": "Wiatr działa przypadkowo, więc rośliny wiatropylne produkują bardzo dużo lekkiego pyłku."
  },
  {
    "id": "R04_ST_04",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Jeśli owoc pomaga w rozsiewaniu nasion, to zawsze jest mięsisty i jadalny.",
    "options": null,
    "answer": false,
    "explanation": "Nie. Owoc może być też suchy i lekki, może mieć haczyki albo pękać samorzutnie."
  },
  {
    "id": "R04_ST_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz modyfikację z korzyścią dla rośliny.",
    "options": null,
    "left": [
      "ciernie opuncji",
      "korzenie podporowe",
      "liście pułapkowe",
      "korzenie czepne"
    ],
    "right": [
      "mniej utraconej wody",
      "lepsze utrzymanie w podłożu",
      "zdobywanie azotu",
      "wspinanie się po podporze"
    ],
    "answer": {
      "ciernie opuncji": "mniej utraconej wody",
      "korzenie podporowe": "lepsze utrzymanie w podłożu",
      "liście pułapkowe": "zdobywanie azotu",
      "korzenie czepne": "wspinanie się po podporze"
    },
    "explanation": "Każda z tych modyfikacji pomaga roślinie poradzić sobie z innym problemem środowiskowym."
  },
  {
    "id": "R04_ST_06",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Spójrz na ilustrację. Który organ spichrzowy należy do przekształconych liści, a nie korzenia ani pędu?",
    "image": "/img/bbt_r04_organy_spichrzowe.jpg",
    "options": [
      "marchew",
      "ziemniak",
      "cebula",
      "wszystkie trzy"
    ],
    "answer": 2,
    "explanation": "Cebula gromadzi zapasy w mięsistych liściach spichrzowych."
  },
  {
    "id": "R04_ST_07",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Po zapyleniu i zapłodnieniu z __________ rozwija się nasiono, a z __________ powstaje owoc.",
    "options": null,
    "answer": [
      "zalążka",
      "zalążni"
    ],
    "altAnswers": [
      [
        "zalążka",
        "zalążek",
        "zalążku"
      ],
      [
        "zalążni",
        "zalążnia",
        "zalążnię"
      ]
    ],
    "explanation": "Zalążek przekształca się w nasiono, a zalążnia w owoc."
  },
  {
    "id": "R04_ST_08",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia we właściwej kolejności.",
    "options": null,
    "items": [
      "powstaje owoc z nasionami",
      "pyłek trafia na znamię słupka",
      "dochodzi do zapłodnienia",
      "kwiat wytwarza pyłek"
    ],
    "answer": [
      "kwiat wytwarza pyłek",
      "pyłek trafia na znamię słupka",
      "dochodzi do zapłodnienia",
      "powstaje owoc z nasionami"
    ],
    "explanation": "Najpierw powstaje pyłek, potem następuje zapylenie, zapłodnienie, a na końcu rozwój owocu i nasion."
  },
  {
    "id": "R04_ST_09",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Na ilustracji kiełkowania widać kolejne etapy. Co pojawia się wcześniej niż liście?",
    "image": "/img/bbt_r04_kielkowanie_fasoli.jpg",
    "options": [
      "owoc",
      "korzeń",
      "kwiat",
      "szyszka"
    ],
    "answer": 1,
    "explanation": "Podczas kiełkowania najpierw wyrasta korzeń, a dopiero później pęd i liście."
  },
  {
    "id": "R04_ST_10",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: cebula, bulwa, rozłóg, nektar.",
    "options": null,
    "answer": "nektar",
    "explanation": "Cebula, bulwa i rozłóg mogą brać udział w rozmnażaniu wegetatywnym, a nektar służy przywabianiu zapylaczy."
  },
  {
    "id": "R04_ST_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Roślina rośnie na ubogiej glebie, ale nie ma liści pułapkowych. Które wyjaśnienie jest najlepsze?",
    "options": [
      "może zdobywać potrzebne substancje innym sposobem",
      "na pewno nie jest okrytonasienna",
      "nie potrzebuje azotu",
      "żyje tylko zimą"
    ],
    "answer": 0,
    "explanation": "Ta sama grupa roślin może radzić sobie na różne sposoby. Liście pułapkowe to tylko jedno z możliwych przystosowań."
  },
  {
    "id": "R04_ST_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które cechy zwiększają szansę rozsiewania nasion przez zwierzęta?",
    "options": [
      "haczyki czepiające się sierści",
      "soczysty owoc zjadany przez zwierzęta",
      "duży ciężki pień",
      "lekki puch"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Nasiona mogą być roznoszone po przyczepieniu do sierści albo po zjedzeniu owocu przez zwierzęta."
  },
  {
    "id": "R04_ST_13",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Na ilustracji porównano dąb i klon. Które zdanie jest trafne?",
    "image": "/img/bbt_r04_liscie_dab_klon.jpg",
    "options": [
      "oba mają identyczne liście",
      "liść klonu jest bardziej dłoniasty niż liść dębu",
      "dąb ma igły, a klon liście",
      "oba to rośliny wodne"
    ],
    "answer": 1,
    "explanation": "Liść klonu ma wyraźny, dłoniasty kształt. Liść dębu jest klapowany, ale inaczej ułożony."
  },
  {
    "id": "R04_ST_14",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jestem częścią słupka. To właśnie na mnie ląduje pyłek podczas zapylenia. Kim jestem?",
    "options": null,
    "answer": "znamię słupka",
    "altAnswers": [
      "znamię słupka",
      "znamię",
      "znamię słupka"
    ],
    "explanation": "Znamię słupka przyjmuje pyłek podczas zapylenia."
  },
  {
    "id": "R04_ST_15",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Na ilustracji z siedliskami wybierz wniosek, który najlepiej pasuje do rozdziału.",
    "image": "/img/bbt_r04_siedliska.jpg",
    "options": [
      "okrytonasienne żyją tylko na lądzie",
      "okrytonasienne mogą zasiedlać bardzo różne środowiska",
      "okrytonasienne nie potrzebują światła",
      "okrytonasienne to tylko drzewa"
    ],
    "answer": 1,
    "explanation": "Ta grupa roślin jest bardzo zróżnicowana i żyje w wielu środowiskach."
  },
  {
    "id": "R04_ST_16",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Dziecko mówi: \"Skoro cebula ma pod ziemią zapasy, to jest korzeniem\". Jak najlepiej to poprawić?",
    "options": [
      "To nie korzeń, tylko głównie mięsiste liście spichrzowe",
      "Tak, każda część pod ziemią jest korzeniem",
      "Cebula jest owocem",
      "Cebula to nasiono"
    ],
    "answer": 0,
    "explanation": "Nie wszystko, co rośnie pod ziemią, jest korzeniem. Cebula magazynuje zapasy głównie w liściach spichrzowych."
  },
  {
    "id": "R04_ST_17",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Roślina, która wspina się po murze dzięki drobnym korzeniom wyrastającym z pędu, używa __________ __________.",
    "options": null,
    "answer": [
      "korzeni",
      "czepnych"
    ],
    "altAnswers": [
      [
        "korzeni",
        "korzeń",
        "korzenie"
      ],
      [
        "czepnych",
        "czepne",
        "czepny"
      ]
    ],
    "explanation": "Taką funkcję pełnią korzenie czepne, np. u bluszczu."
  },
  {
    "id": "R04_ST_18",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Spójrz na ilustrację. Które zdanie najlepiej opisuje kasztanowiec?",
    "image": "/img/bbt_r04_kasztanowiec.jpg",
    "options": [
      "ma liście dłoniaste i kolczastą okrywę owocu",
      "ma igły i szyszki",
      "jest rośliną owadożerną",
      "rozmnaża się wyłącznie przez rozłogi"
    ],
    "answer": 0,
    "explanation": "Kasztanowiec ma charakterystyczne liście dłoniaste i kolczaste owoce z kasztanami."
  },
  {
    "id": "R04_ST_19",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz przykład z typem rozmnażania.",
    "options": null,
    "left": [
      "ziemniak z bulwy",
      "fasola z nasiona",
      "truskawka z rozłogu"
    ],
    "right": [
      "wegetatywne",
      "płciowe",
      "wegetatywne"
    ],
    "answer": {
      "ziemniak z bulwy": "wegetatywne",
      "fasola z nasiona": "płciowe",
      "truskawka z rozłogu": "wegetatywne"
    },
    "explanation": "Nowa roślina z nasiona powstaje w rozmnażaniu płciowym, a z bulwy lub rozłogu - wegetatywnie."
  },
  {
    "id": "R04_ST_20",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Im bardziej różnorodne sposoby rozsiewania, tym większa szansa, że nasiona trafią w miejsca odpowiednie do wzrostu.",
    "options": null,
    "answer": true,
    "explanation": "Różne sposoby rozsiewania zwiększają szanse roślin na rozprzestrzenienie się i zasiedlenie nowych miejsc."
  }
];

const KID_PROMPTS = {};

const chapter = {
  "id": "r04",
  "number": 4,
  "title": "Rośliny okrytonasienne",
  "icon": "🌸",
  "sectionOrder": [
    "4.1 Cechy i budowa",
    "4.1 Modyfikacje organów",
    "4.2 Kwiat i zapylanie",
    "4.2 Rozmnażanie wegetatywne",
    "4.3 Nasiona i owoce",
    "4.4 Drzewa liściaste w Polsce",
    "4.5 W przyrodzie i dla człowieka"
  ],
  "sectionIcons": {
    "4.1 Cechy i budowa": "🌿",
    "4.1 Modyfikacje organów": "🪴",
    "4.2 Kwiat i zapylanie": "🐝",
    "4.2 Rozmnażanie wegetatywne": "🌱",
    "4.3 Nasiona i owoce": "🌰",
    "4.4 Drzewa liściaste w Polsce": "🍃",
    "4.5 W przyrodzie i dla człowieka": "🌍"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};


export default chapter;
