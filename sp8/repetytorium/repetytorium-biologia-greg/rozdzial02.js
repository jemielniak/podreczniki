// Skróty sekcji (do identyfikatorów ćwiczeń):
//   WEGE = Organy wegetatywne i ich funkcje
//   MSZA = Mszaki i paprociowe
//   NAGO = Rośliny nagonasienne
//   OKRY = Rośliny okrytonasienne i rozmnażanie
//   KIEL = Kiełkowanie i znaczenie roślin
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_WEGE_01",
    "section": "Organy wegetatywne i ich funkcje",
    "type": "single_choice",
    "prompt": "Który zestaw zawiera wyłącznie organy wegetatywne rośliny?",
    "options": [
      "Korzeń, łodyga i liść",
      "Kwiat, łodyga i owoc",
      "Korzeń, kwiat i liść",
      "Łodyga, owoc i kwiat",
      "Liść, kwiat i owoc",
      "Korzeń, kwiat i owoc"
    ],
    "answer": 0,
    "image": "r02_budowa_rosliny.jpg",
    "explanation": "Organami wegetatywnymi są korzeń, łodyga i liść; kwiat i owoc należą do organów generatywnych."
  },
  {
    "id": "R02_WEGE_02",
    "section": "Organy wegetatywne i ich funkcje",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje korzenia.",
    "options": [
      "Utrzymywanie rośliny w podłożu",
      "Pobieranie wody",
      "Pobieranie soli mineralnych",
      "Wytwarzanie pyłku",
      "Wabienie zapylaczy",
      "Rozsiewanie owoców"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Korzeń umocowuje roślinę w podłożu oraz pobiera z niego wodę i sole mineralne."
  },
  {
    "id": "R02_WEGE_03",
    "section": "Organy wegetatywne i ich funkcje",
    "type": "sequence",
    "prompt": "Ułóż strefy korzenia od jego wierzchołka ku górze.",
    "options": null,
    "items": [
      "Strefa korzeni bocznych",
      "Stożek wzrostu osłonięty czapeczką",
      "Strefa włośnikowa",
      "Strefa wydłużania"
    ],
    "answer": [
      "Stożek wzrostu osłonięty czapeczką",
      "Strefa wydłużania",
      "Strefa włośnikowa",
      "Strefa korzeni bocznych"
    ],
    "image": "r02_strefy_korzenia.jpg",
    "explanation": "Przy wierzchołku znajduje się stożek wzrostu osłonięty czapeczką, wyżej strefa wydłużania, włośnikowa i strefa korzeni bocznych."
  },
  {
    "id": "R02_WEGE_04",
    "section": "Organy wegetatywne i ich funkcje",
    "type": "fill_in",
    "prompt": "W strefie włośnikowej komórki korzenia tworzą __________, które zwiększają powierzchnię pobierania wody.",
    "options": null,
    "answer": [
      "włośniki"
    ],
    "altAnswers": [
      [
        "włośniki",
        "wlosniki"
      ]
    ],
    "explanation": "Włośniki zwiększają powierzchnię wchłaniania wody i soli mineralnych z gleby."
  },
  {
    "id": "R02_WEGE_05",
    "section": "Organy wegetatywne i ich funkcje",
    "type": "single_choice",
    "prompt": "Który system korzeniowy ma jeden wyraźny korzeń główny?",
    "options": [
      "Palowy",
      "Wiązkowy",
      "Włośnikowy",
      "Boczny",
      "Pędowy",
      "Przybyszowy"
    ],
    "answer": 0,
    "image": "r02_systemy_korzeniowe.jpg",
    "explanation": "System palowy ma wyraźny korzeń główny, a system wiązkowy tworzy wiele podobnej grubości korzeni."
  },
  {
    "id": "R02_WEGE_06",
    "section": "Organy wegetatywne i ich funkcje",
    "type": "true_false",
    "prompt": "Łodyga może transportować zarówno wodę z solami mineralnymi, jak i produkty fotosyntezy.",
    "options": null,
    "answer": true,
    "explanation": "Łodyga przewodzi wodę z solami mineralnymi od korzenia oraz produkty fotosyntezy od liści."
  },
  {
    "id": "R02_WEGE_07",
    "section": "Organy wegetatywne i ich funkcje",
    "type": "match",
    "prompt": "Połącz część rośliny z jej funkcją.",
    "options": null,
    "left": [
      "Korzeń",
      "Łodyga",
      "Liść",
      "Owoc"
    ],
    "right": [
      "Ochrona nasion i pomoc w ich rozsiewaniu",
      "Pobieranie wody z podłoża",
      "Podtrzymywanie części pędu",
      "Wytwarzanie produktów fotosyntezy"
    ],
    "answer": {
      "Korzeń": "Pobieranie wody z podłoża",
      "Łodyga": "Podtrzymywanie części pędu",
      "Liść": "Wytwarzanie produktów fotosyntezy",
      "Owoc": "Ochrona nasion i pomoc w ich rozsiewaniu"
    },
    "image": "r02_budowa_lodygi.jpg",
    "explanation": "Korzeń pobiera wodę z podłoża, łodyga podtrzymuje pęd, liść wytwarza produkty fotosyntezy, a owoc chroni nasiona."
  },
  {
    "id": "R02_WEGE_08",
    "section": "Organy wegetatywne i ich funkcje",
    "type": "odd_one_out",
    "prompt": "Wskaż element niebędący częścią budowy łodygi: węzeł, międzywęźle, pąk boczny, zalążnia.",
    "options": null,
    "answer": "zalążnia",
    "explanation": "Węzły, międzywęźla i pąki są elementami budowy łodygi; zalążnia jest częścią słupka w kwiecie."
  },
  {
    "id": "R02_WEGE_09",
    "section": "Organy wegetatywne i ich funkcje",
    "type": "scenario",
    "prompt": "Na młodym pędzie badacz zauważył pąk znajdujący się na samym szczycie łodygi. Jak nazywa się ten pąk?",
    "options": [
      "Pąk wierzchołkowy",
      "Pąk boczny",
      "Pąk korzeniowy",
      "Pąk pachwinowy",
      "Pąk podziemny",
      "Pąk spoczynkowy"
    ],
    "answer": 0,
    "image": "r02_budowa_lodygi.jpg",
    "explanation": "Na szczycie łodygi znajduje się pąk wierzchołkowy, nazywany także szczytowym."
  },
  {
    "id": "R02_WEGE_10",
    "section": "Organy wegetatywne i ich funkcje",
    "type": "sort",
    "prompt": "Przyporządkuj organy rośliny do właściwych grup.",
    "options": null,
    "categories": [
      "Organy wegetatywne",
      "Organy generatywne"
    ],
    "items": [
      "Kwiat",
      "Korzeń",
      "Owoc",
      "Liść",
      "Łodyga"
    ],
    "answer": {
      "Organy wegetatywne": [
        "Korzeń",
        "Liść",
        "Łodyga"
      ],
      "Organy generatywne": [
        "Kwiat",
        "Owoc"
      ]
    },
    "image": "r02_budowa_rosliny.jpg",
    "explanation": "Do wegetatywnych organów należą korzeń, łodyga i liść, a do generatywnych kwiat i owoc."
  },
  {
    "id": "R02_WEGE_11",
    "section": "Organy wegetatywne i ich funkcje",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje liścia.",
    "options": [
      "Fotosynteza",
      "Wymiana gazowa",
      "Transpiracja",
      "Wytwarzanie zarodników w zarodni",
      "Pobieranie wody za pomocą włośników",
      "Wytwarzanie pyłku w pylnikach"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r02_lisc_pojedynczy_zlozony.jpg",
    "explanation": "Liść wytwarza związki organiczne w fotosyntezie, umożliwia wymianę gazową oraz transpirację."
  },
  {
    "id": "R02_WEGE_12",
    "section": "Organy wegetatywne i ich funkcje",
    "type": "riddle",
    "prompt": "Jak nazywa się parowanie wody z rośliny, któremu umożliwienie jest jedną z funkcji liścia?",
    "options": null,
    "answer": "transpiracja",
    "altAnswers": [
      "transpiracja",
      "transpirację"
    ],
    "explanation": "Transpiracja to parowanie wody z nadziemnych części rośliny."
  },
  {
    "id": "R02_MSZA_01",
    "section": "Mszaki i paprociowe",
    "type": "single_choice",
    "prompt": "Za pomocą jakich struktur mszaki przytwierdzają się do podłoża?",
    "options": [
      "Chwytników",
      "Włośników",
      "Kłączy",
      "Szyjek słupka",
      "Korzeni palowych",
      "Pędów letnich"
    ],
    "answer": 0,
    "image": "r02_mech_plonnik.jpg",
    "explanation": "Mszaki nie wytwarzają typowych korzeni; chwytniki pomagają im utrzymywać się w podłożu."
  },
  {
    "id": "R02_MSZA_02",
    "section": "Mszaki i paprociowe",
    "type": "multi_select",
    "prompt": "Wybierz elementy budowy mchu płonnika.",
    "options": [
      "Chwytniki",
      "Łodyżka ulistniona",
      "Zarodnia",
      "Owocnia",
      "Słupek",
      "Szyszka"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r02_mech_plonnik.jpg",
    "explanation": "Płonnik ma chwytniki, ulistnioną łodyżkę oraz sporofit z bezlistną setą i zarodnią wytwarzającą zarodniki."
  },
  {
    "id": "R02_MSZA_03",
    "section": "Mszaki i paprociowe",
    "type": "true_false",
    "prompt": "Mszaki nie mają typowych organów roślinnych.",
    "options": null,
    "answer": true,
    "explanation": "Mszaki mają m.in. chwytniki, łodyżki, listki i zarodnie, ale nie mają typowych organów roślinnych."
  },
  {
    "id": "R02_MSZA_04",
    "section": "Mszaki i paprociowe",
    "type": "single_choice",
    "prompt": "Jaką postać najczęściej mają podziemne łodygi paprociowych?",
    "options": [
      "Kłączy",
      "Rozłupni",
      "Strąków",
      "Szypułek",
      "Zalążni",
      "Liścieni"
    ],
    "answer": 0,
    "image": "r02_paproc_klacze.jpg",
    "explanation": "Kłącza to podziemne łodygi, które utrzymują paprotniki w podłożu i magazynują substancje odżywcze."
  },
  {
    "id": "R02_MSZA_05",
    "section": "Mszaki i paprociowe",
    "type": "fill_in",
    "prompt": "U paproci na dolnej stronie liści rozwijają się __________, które zawierają zarodniki.",
    "options": null,
    "answer": [
      "zarodnie"
    ],
    "altAnswers": [
      [
        "zarodnie"
      ]
    ],
    "image": "r02_paproc_klacze.jpg",
    "explanation": "Zarodnie są miejscem wytwarzania i dojrzewania zarodników u paproci."
  },
  {
    "id": "R02_MSZA_06",
    "section": "Mszaki i paprociowe",
    "type": "match",
    "prompt": "Dopasuj roślinę do grupy, do której należy.",
    "options": null,
    "left": [
      "Płonnik pospolity",
      "Nerecznica samcza",
      "Skrzyp polny",
      "Widłak goździsty"
    ],
    "right": [
      "Widłaki",
      "Mszaki",
      "Paprocie",
      "Skrzypy"
    ],
    "answer": {
      "Płonnik pospolity": "Mszaki",
      "Nerecznica samcza": "Paprocie",
      "Skrzyp polny": "Skrzypy",
      "Widłak goździsty": "Widłaki"
    },
    "image": "r02_skrzyp_pedy.jpg",
    "explanation": "Płonnik jest mchem, nerecznica paprocią, skrzyp polny skrzypem, a widłak goździsty widłakiem."
  },
  {
    "id": "R02_MSZA_07",
    "section": "Mszaki i paprociowe",
    "type": "odd_one_out",
    "prompt": "Wskaż roślinę nienależącą do paprociowych: skrzyp polny, widłak goździsty, nerecznica samcza, płonnik pospolity.",
    "options": null,
    "answer": "płonnik pospolity",
    "explanation": "Płonnik to przedstawiciel mszaków; pozostałe wymienione rośliny należą do paprociowych."
  },
  {
    "id": "R02_MSZA_08",
    "section": "Mszaki i paprociowe",
    "type": "scenario",
    "prompt": "W lesie uczeń ogląda paproć i dostrzega struktury na spodniej stronie jej liścia. Co zawierają rozwijające się tam zarodnie?",
    "options": [
      "Zarodniki",
      "Nasiona",
      "Pyłek",
      "Owoce",
      "Płatki korony",
      "Zalążki"
    ],
    "answer": 0,
    "image": "r02_paproc_klacze.jpg",
    "explanation": "Na spodzie liści paproci rozwijają się zarodnie zawierające zarodniki."
  },
  {
    "id": "R02_MSZA_09",
    "section": "Mszaki i paprociowe",
    "type": "sort",
    "prompt": "Rozdziel wymienione rośliny na mszaki i paprociowe.",
    "options": null,
    "categories": [
      "Mszaki",
      "Paprociowe"
    ],
    "items": [
      "Orlica pospolita",
      "Piórosz pierzasty",
      "Skrzyp polny",
      "Torfowiec błotny",
      "Długosz królewski",
      "Płonnik pospolity"
    ],
    "answer": {
      "Mszaki": [
        "Piórosz pierzasty",
        "Torfowiec błotny",
        "Płonnik pospolity"
      ],
      "Paprociowe": [
        "Orlica pospolita",
        "Skrzyp polny",
        "Długosz królewski"
      ]
    },
    "explanation": "Płonnik, torfowiec i piórosz to mszaki; orlica, długosz i skrzyp należą do paprociowych."
  },
  {
    "id": "R02_MSZA_10",
    "section": "Mszaki i paprociowe",
    "type": "riddle",
    "prompt": "Jak nazywa się podziemna łodyga paproci, z której wyrastają liście i korzenie?",
    "options": null,
    "answer": "kłącze",
    "altAnswers": [
      "kłącze",
      "klacze",
      "kłącza",
      "klacza"
    ],
    "explanation": "Paprocie mają kłącza; kłącza utrzymują roślinę w podłożu i magazynują substancje odżywcze."
  },
  {
    "id": "R02_MSZA_11",
    "section": "Mszaki i paprociowe",
    "type": "multi_select",
    "prompt": "Zaznacz znaczenie roślin paprociowych w przyrodzie i dla człowieka.",
    "options": [
      "Są częścią runa i podszytu leśnego",
      "Dają schronienie zwierzętom leśnym",
      "Przyczyniły się do powstania pokładów węgla kamiennego",
      "Wytwarzają owoce wykorzystywane do produkcji soków",
      "Tworzą większość szyszek w lesie",
      "Mają kwiaty wabiące owady"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Paprociowe są elementem runa i podszytu, dają schronienie zwierzętom i były źródłem pokładów węgla kamiennego w karbonie."
  },
  {
    "id": "R02_MSZA_12",
    "section": "Mszaki i paprociowe",
    "type": "sequence",
    "prompt": "Ułóż etapy rozprzestrzeniania zarodników paproci w logicznej kolejności.",
    "options": null,
    "items": [
      "Wiatr przenosi uwolnione zarodniki",
      "Zarodniki dojrzewają w zarodniach",
      "Na spodniej stronie liści tworzą się zarodnie",
      "Zarodniki są uwalniane"
    ],
    "answer": [
      "Na spodniej stronie liści tworzą się zarodnie",
      "Zarodniki dojrzewają w zarodniach",
      "Zarodniki są uwalniane",
      "Wiatr przenosi uwolnione zarodniki"
    ],
    "explanation": "Pod spodem liści powstają zarodnie; zawarte w nich zarodniki dojrzewają, następnie są uwalniane i roznoszone przez wiatr."
  },
  {
    "id": "R02_NAGO_01",
    "section": "Rośliny nagonasienne",
    "type": "single_choice",
    "prompt": "Gdzie znajdują się nasiona roślin nagonasiennych?",
    "options": [
      "Na łuskach nasiennych",
      "Wewnątrz owocni",
      "W zalążni dojrzałego owocu",
      "W zarodniach liścia paproci",
      "W płatkach korony",
      "W łodyżce bezlistnej mchu"
    ],
    "answer": 0,
    "image": "r02_iglaki_szyszki.jpg",
    "explanation": "Nasiona roślin nagonasiennych nie są okryte owocnią; powstają na łuskach nasiennych tworzących szyszkę."
  },
  {
    "id": "R02_NAGO_02",
    "section": "Rośliny nagonasienne",
    "type": "true_false",
    "prompt": "Rośliny nagonasienne wytwarzają owoce otaczające nasiona.",
    "options": null,
    "answer": false,
    "explanation": "Rośliny nagonasienne nie wytwarzają owoców; ich nasiona nie są okryte."
  },
  {
    "id": "R02_NAGO_03",
    "section": "Rośliny nagonasienne",
    "type": "multi_select",
    "prompt": "Zaznacz przystosowania roślin iglastych ograniczające utratę wody.",
    "options": [
      "Liście przekształcone w igły",
      "Pokrycie igieł woskiem",
      "Duże miękkie płatki korony",
      "Owoce z mięsistą owocnią",
      "Długie szypułki kwiatowe"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Wąskie liście w formie igieł oraz ich woskowa powierzchnia ograniczają parowanie wody."
  },
  {
    "id": "R02_NAGO_04",
    "section": "Rośliny nagonasienne",
    "type": "single_choice",
    "prompt": "Które drzewo iglaste zrzuca igły każdej jesieni?",
    "options": [
      "Modrzew europejski",
      "Świerk pospolity",
      "Jodła pospolita",
      "Sosna limba",
      "Cis pospolity",
      "Jałowiec pospolity"
    ],
    "answer": 0,
    "explanation": "Modrzew różni się od wielu innych drzew iglastych tym, że na jesień traci igły."
  },
  {
    "id": "R02_NAGO_05",
    "section": "Rośliny nagonasienne",
    "type": "fill_in",
    "prompt": "Rośliny nagonasienne nazywamy także roślinami __________, ponieważ wiele z nich zachowuje igły w ciągu roku.",
    "options": null,
    "answer": [
      "zimozielonymi"
    ],
    "altAnswers": [
      [
        "zimozielonymi",
        "wiecznie zielonymi"
      ]
    ],
    "explanation": "Większość roślin nagonasiennych jest zimozielona, czyli zachowuje zielone liście przez cały rok."
  },
  {
    "id": "R02_NAGO_06",
    "section": "Rośliny nagonasienne",
    "type": "match",
    "prompt": "Połącz opis z właściwą rośliną nagonasienną.",
    "options": null,
    "left": [
      "Roślina ze zdjęcia mająca czerwone struktury otaczające nasiona",
      "Iglak zrzucający igły jesienią",
      "Drzewo przedstawione z wydłużonymi zwisającymi szyszkami",
      "Drzewo przedstawione ze stojącymi szyszkami"
    ],
    "right": [
      "Jodła pospolita",
      "Modrzew europejski",
      "Cis pospolity",
      "Świerk pospolity"
    ],
    "answer": {
      "Roślina ze zdjęcia mająca czerwone struktury otaczające nasiona": "Cis pospolity",
      "Iglak zrzucający igły jesienią": "Modrzew europejski",
      "Drzewo przedstawione z wydłużonymi zwisającymi szyszkami": "Świerk pospolity",
      "Drzewo przedstawione ze stojącymi szyszkami": "Jodła pospolita"
    },
    "image": "r02_iglaki_szyszki.jpg",
    "explanation": "Świerk, jodła, modrzew i cis to rośliny nagonasienne; modrzew zrzuca igły jesienią, a cis wytwarza czerwone osnówki otaczające nasiona."
  },
  {
    "id": "R02_NAGO_07",
    "section": "Rośliny nagonasienne",
    "type": "odd_one_out",
    "prompt": "Która roślina nie należy do opisanych nagonasiennych: świerk pospolity, cis pospolity, jałowiec pospolity, dąb szypułkowy.",
    "options": null,
    "answer": "dąb szypułkowy",
    "explanation": "Dąb jest rośliną okrytonasienną, natomiast świerk, cis i jałowiec są nagonasienne."
  },
  {
    "id": "R02_NAGO_08",
    "section": "Rośliny nagonasienne",
    "type": "scenario",
    "prompt": "Leśniczy wyjaśnia, że pewna grupa drzew rozmnaża się bez konieczności występowania dużej wilgotności, w przeciwieństwie do mszaków i paprotników. Co umożliwia jej tę cechę?",
    "options": [
      "Wytwarzanie nasion",
      "Wytwarzanie zarodników w zarodniach",
      "Posiadanie chwytników",
      "Obecność ulistnionej łodyżki",
      "Tworzenie pędów wiosennych",
      "Posiadanie liści złożonych"
    ],
    "answer": 0,
    "explanation": "Wytwarzanie nasion umożliwia nagonasiennym rozmnażanie bez konieczności obecności wody podczas zapłodnienia."
  },
  {
    "id": "R02_NAGO_09",
    "section": "Rośliny nagonasienne",
    "type": "sort",
    "prompt": "Przyporządkuj organizmy do nagonasiennych i okrytonasiennych.",
    "options": null,
    "categories": [
      "Nagonasienne",
      "Okrytonasienne"
    ],
    "items": [
      "Klon zwyczajny",
      "Cis pospolity",
      "Grab zwyczajny",
      "Modrzew europejski",
      "Świerk pospolity",
      "Dąb szypułkowy"
    ],
    "answer": {
      "Nagonasienne": [
        "Cis pospolity",
        "Modrzew europejski",
        "Świerk pospolity"
      ],
      "Okrytonasienne": [
        "Klon zwyczajny",
        "Grab zwyczajny",
        "Dąb szypułkowy"
      ]
    },
    "explanation": "Świerk, cis i modrzew są nagonasienne; klon, dąb i grab należą do okrytonasiennych."
  },
  {
    "id": "R02_NAGO_10",
    "section": "Rośliny nagonasienne",
    "type": "multi_select",
    "prompt": "Zaznacz sposoby wykorzystania roślin nagonasiennych.",
    "options": [
      "Produkcja papieru z drewna",
      "Wytwarzanie mebli",
      "Produkcja smoły z żywicy",
      "Produkcja miodu przez same szyszki",
      "Wytwarzanie owocni do soków",
      "Tworzenie strąków z nasionami"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Ich drewno służy do budowy, wytwarzania mebli i papieru, a żywicę wykorzystuje się m.in. do produkcji smoły i smarów."
  },
  {
    "id": "R02_NAGO_11",
    "section": "Rośliny nagonasienne",
    "type": "riddle",
    "prompt": "Jak nazywa się struktura przypominająca wydłużony lub stożkowaty twór złożony z osi i łusek nasiennych?",
    "options": null,
    "answer": "szyszka",
    "altAnswers": [
      "szyszka",
      "szyszkę"
    ],
    "explanation": "Łuski nasienne roślin nagonasiennych są przytwierdzone do wspólnej osi i razem tworzą szyszkę."
  },
  {
    "id": "R02_NAGO_12",
    "section": "Rośliny nagonasienne",
    "type": "sequence",
    "prompt": "Ułóż podane skutki przystosowania iglaków w kolejności od budowy liścia do korzyści dla rośliny.",
    "options": null,
    "items": [
      "Łatwiejsze przetrwanie suszy i mroźnej zimy",
      "Ograniczenie parowania wody",
      "Liście mają postać igieł",
      "Powierzchnię igieł pokrywa wosk"
    ],
    "answer": [
      "Liście mają postać igieł",
      "Powierzchnię igieł pokrywa wosk",
      "Ograniczenie parowania wody",
      "Łatwiejsze przetrwanie suszy i mroźnej zimy"
    ],
    "explanation": "Igły oraz ich pokrycie woskiem ograniczają parowanie, co pomaga nagonasiennym przetrwać mrozy i suszę."
  },
  {
    "id": "R02_OKRY_01",
    "section": "Rośliny okrytonasienne i rozmnażanie",
    "type": "single_choice",
    "prompt": "Która cecha odróżnia okrytonasienne od nagonasiennych?",
    "options": [
      "Wytwarzanie owoców",
      "Występowanie korzenia",
      "Prowadzenie fotosyntezy",
      "Posiadanie łodygi",
      "Obecność liści",
      "Wytwarzanie nasion"
    ],
    "answer": 0,
    "explanation": "Rośliny okrytonasienne wytwarzają owoce, a ich nasiona są osłonięte; nagonasienne nie tworzą owoców."
  },
  {
    "id": "R02_OKRY_02",
    "section": "Rośliny okrytonasienne i rozmnażanie",
    "type": "match",
    "prompt": "Połącz część kwiatu z opisem.",
    "options": null,
    "left": [
      "Słupek",
      "Pręcik",
      "Okwiat",
      "Pylnik"
    ],
    "right": [
      "Miejsce występowania ziaren pyłku",
      "Osłona organów rozmnażania",
      "Żeński organ rozrodczy",
      "Męski organ rozrodczy"
    ],
    "answer": {
      "Słupek": "Żeński organ rozrodczy",
      "Pręcik": "Męski organ rozrodczy",
      "Okwiat": "Osłona organów rozmnażania",
      "Pylnik": "Miejsce występowania ziaren pyłku"
    },
    "image": "r02_kwiat_budowa.jpg",
    "explanation": "Słupek jest organem żeńskim, pręcik męskim, a okwiat osłania organy rozmnażania; pylnik wytwarza ziarna pyłku."
  },
  {
    "id": "R02_OKRY_03",
    "section": "Rośliny okrytonasienne i rozmnażanie",
    "type": "multi_select",
    "prompt": "Które części kwiatu należą do słupka?",
    "options": [
      "Zalążnia",
      "Szyjka słupka",
      "Znamię słupka",
      "Pylnik",
      "Nitka pręcika",
      "Płatek korony"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Słupek obejmuje zalążnię, szyjkę i znamię; pylnik oraz nitka są częściami pręcika."
  },
  {
    "id": "R02_OKRY_04",
    "section": "Rośliny okrytonasienne i rozmnażanie",
    "type": "fill_in",
    "prompt": "Męski organ rozrodczy kwiatu to __________, a żeński to __________.",
    "options": null,
    "answer": [
      "pręcik",
      "słupek"
    ],
    "altAnswers": [
      [
        "pręcik",
        "precik"
      ],
      [
        "słupek",
        "slupek"
      ]
    ],
    "image": "r02_kwiat_budowa.jpg",
    "explanation": "Pręciki są męskimi, a słupki żeńskimi organami rozmnażania płciowego u okrytonasiennych."
  },
  {
    "id": "R02_OKRY_05",
    "section": "Rośliny okrytonasienne i rozmnażanie",
    "type": "true_false",
    "prompt": "Zapylenie to połączenie komórki jajowej i plemnika.",
    "options": null,
    "answer": false,
    "explanation": "Zapylenie oznacza przeniesienie pyłku na znamię słupka; połączenie komórek rozrodczych to zapłodnienie."
  },
  {
    "id": "R02_OKRY_06",
    "section": "Rośliny okrytonasienne i rozmnażanie",
    "type": "single_choice",
    "prompt": "Na jaką część kwiatu musi trafić ziarno pyłku, aby doszło do zapylenia?",
    "options": [
      "Znamię słupka",
      "Działkę kielicha",
      "Płatek korony",
      "Dno kwiatowe",
      "Szypułkę",
      "Nitkę pręcika"
    ],
    "answer": 0,
    "image": "r02_zapylenie_kwiatu.jpg",
    "explanation": "Zapylenie jest przeniesieniem ziarna pyłku na znamię słupka."
  },
  {
    "id": "R02_OKRY_07",
    "section": "Rośliny okrytonasienne i rozmnażanie",
    "type": "sequence",
    "prompt": "Ułóż etapy cyklu rozwojowego rośliny okrytonasiennej z diagramu.",
    "options": null,
    "items": [
      "Zalążek przekształca się w nasienie",
      "Powstają kwiaty z pręcikami i słupkami",
      "Dojrzałe nasiono kiełkuje",
      "Ziarno pyłku wytwarza łagiewkę pyłkową",
      "Pyłek dociera na znamię słupka"
    ],
    "answer": [
      "Powstają kwiaty z pręcikami i słupkami",
      "Pyłek dociera na znamię słupka",
      "Ziarno pyłku wytwarza łagiewkę pyłkową",
      "Zalążek przekształca się w nasienie",
      "Dojrzałe nasiono kiełkuje"
    ],
    "image": "r02_zapylenie_kwiatu.jpg",
    "explanation": "Cykl rozwojowy roślin okrytonasiennych obejmuje kwitnienie, zapylenie, rozwój łagiewki pyłkowej, powstanie nasienia i owocu oraz kiełkowanie."
  },
  {
    "id": "R02_OKRY_08",
    "section": "Rośliny okrytonasienne i rozmnażanie",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki umożliwiające zapylanie.",
    "options": [
      "Wiatr",
      "Woda",
      "Zwierzęta",
      "Kłącza",
      "Włośniki",
      "Bielmo"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Pyłek kwiatowy może być przenoszony przez wiatr, wodę i zwierzęta."
  },
  {
    "id": "R02_OKRY_09",
    "section": "Rośliny okrytonasienne i rozmnażanie",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest częścią pręcika: nitka pręcika, pylnik, zalążnia.",
    "options": null,
    "answer": "zalążnia",
    "explanation": "Pręcik składa się z nitki i pylnika; zalążnia jest częścią słupka."
  },
  {
    "id": "R02_OKRY_10",
    "section": "Rośliny okrytonasienne i rozmnażanie",
    "type": "sort",
    "prompt": "Przyporządkuj sposoby rozsiewania nasion do czynników, które je przenoszą.",
    "options": null,
    "categories": [
      "Wiatr",
      "Zwierzęta",
      "Woda"
    ],
    "items": [
      "Nasiona z puchem",
      "Nasiona z haczykami przyczepione do futra",
      "Nasiona unoszące się na powierzchni jeziora",
      "Nasiona przenoszone po zjedzeniu owoców",
      "Nasiona ze skrzydełkami"
    ],
    "answer": {
      "Wiatr": [
        "Nasiona z puchem",
        "Nasiona ze skrzydełkami"
      ],
      "Zwierzęta": [
        "Nasiona z haczykami przyczepione do futra",
        "Nasiona przenoszone po zjedzeniu owoców"
      ],
      "Woda": [
        "Nasiona unoszące się na powierzchni jeziora"
      ]
    },
    "image": "r02_rozsiewanie_nasion.jpg",
    "explanation": "Wiatr unosi nasiona z puchem; zwierzęta przenoszą nasiona na futrze lub po zjedzeniu owoców; woda może unosić nasiona na swojej powierzchni."
  },
  {
    "id": "R02_OKRY_11",
    "section": "Rośliny okrytonasienne i rozmnażanie",
    "type": "scenario",
    "prompt": "Na łące obserwujesz nasiona z lekkim puchem, które odrywają się od rośliny i unoszą ponad trawą. Jaki czynnik uczestniczy w ich rozprzestrzenianiu?",
    "options": [
      "Wiatr",
      "Ruch zwierząt po futrze",
      "Pękanie strąków",
      "Transport na obuwiu człowieka",
      "Zjadanie owoców przez ptaki",
      "Pływanie po wodzie"
    ],
    "answer": 0,
    "image": "r02_rozsiewanie_nasion.jpg",
    "explanation": "Nasiona lekkie, wyposażone w skrzydełka lub puch, są roznoszone przez wiatr."
  },
  {
    "id": "R02_OKRY_12",
    "section": "Rośliny okrytonasienne i rozmnażanie",
    "type": "riddle",
    "prompt": "Jak nazywa się struktura wyrastająca z ziarna pyłku, która wnika do słupka i dociera do zalążka?",
    "options": null,
    "answer": "łagiewka pyłkowa",
    "altAnswers": [
      "łagiewka pyłkowa",
      "lagiewka pylkowa",
      "łagiewkę pyłkową"
    ],
    "explanation": "W schemacie cyklu rozwojowego ziarno pyłku wytwarza łagiewkę pyłkową."
  },
  {
    "id": "R02_KIEL_01",
    "section": "Kiełkowanie i znaczenie roślin",
    "type": "multi_select",
    "prompt": "Zaznacz trzy warunki niezbędne do kiełkowania nasion.",
    "options": [
      "Woda",
      "Tlen",
      "Odpowiednia temperatura",
      "Zapylające owady",
      "Silny wiatr",
      "Dojrzały owoc na gałęzi"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Woda, tlen oraz odpowiednia temperatura należą do warunków kiełkowania."
  },
  {
    "id": "R02_KIEL_02",
    "section": "Kiełkowanie i znaczenie roślin",
    "type": "match",
    "prompt": "Połącz element nasiona z jego rolą.",
    "options": null,
    "left": [
      "Łupina nasienna",
      "Bielmo",
      "Zarodek"
    ],
    "right": [
      "Zaczątek nowej rośliny",
      "Osłona zawartości nasiona",
      "Zapas substancji odżywczych"
    ],
    "answer": {
      "Łupina nasienna": "Osłona zawartości nasiona",
      "Bielmo": "Zapas substancji odżywczych",
      "Zarodek": "Zaczątek nowej rośliny"
    },
    "image": "r02_nasiono_budowa.jpg",
    "explanation": "Łupina nasienna chroni zarodek, bielmo dostarcza substancji odżywczych, a z zarodka rozwija się nowa roślina."
  },
  {
    "id": "R02_KIEL_03",
    "section": "Kiełkowanie i znaczenie roślin",
    "type": "single_choice",
    "prompt": "Jaki przedział temperatur może sprzyjać kiełkowaniu nasion wielu roślin?",
    "options": [
      "15–40°C",
      "0–5°C",
      "5–10°C",
      "45–60°C",
      "60–80°C",
      "Poniżej 0°C"
    ],
    "answer": 0,
    "explanation": "Optymalna temperatura kiełkowania zależy od gatunku rośliny; w tym zadaniu przyjęto zakres 15–40°C."
  },
  {
    "id": "R02_KIEL_04",
    "section": "Kiełkowanie i znaczenie roślin",
    "type": "fill_in",
    "prompt": "Tkanka odżywcza, z której młoda roślina korzysta przed rozpoczęciem fotosyntezy, to __________.",
    "options": null,
    "answer": [
      "bielmo"
    ],
    "altAnswers": [
      [
        "bielmo"
      ]
    ],
    "image": "r02_nasiono_budowa.jpg",
    "explanation": "Bielmo zawiera substancje zapasowe wykorzystywane przez zarodek, zanim młoda roślina zacznie prowadzić fotosyntezę."
  },
  {
    "id": "R02_KIEL_05",
    "section": "Kiełkowanie i znaczenie roślin",
    "type": "sequence",
    "prompt": "Ułóż etapy kiełkowania we właściwej kolejności.",
    "options": null,
    "items": [
      "Pojawia się łodyga",
      "Nasienie pochłania wodę",
      "Rozwijają się pierwsze liście",
      "Pęka łupina i wysuwa się młody korzeń"
    ],
    "answer": [
      "Nasienie pochłania wodę",
      "Pęka łupina i wysuwa się młody korzeń",
      "Pojawia się łodyga",
      "Rozwijają się pierwsze liście"
    ],
    "image": "r02_etapy_kielkowania.jpg",
    "explanation": "Najpierw nasiono pobiera wodę, następnie pęka łupina i pojawia się młody korzeń, później łodyga i liście."
  },
  {
    "id": "R02_KIEL_06",
    "section": "Kiełkowanie i znaczenie roślin",
    "type": "true_false",
    "prompt": "Młoda roślina korzysta początkowo z substancji odżywczych nasiona, zanim zacznie fotosyntetyzować dzięki liściom.",
    "options": null,
    "answer": true,
    "explanation": "Zanim rozwiną się liście umożliwiające fotosyntezę, roślina wykorzystuje pokarm z bielma."
  },
  {
    "id": "R02_KIEL_07",
    "section": "Kiełkowanie i znaczenie roślin",
    "type": "odd_one_out",
    "prompt": "Który z elementów nie jest niezbędnym warunkiem kiełkowania: woda, tlen, odpowiednia temperatura czy silny wiatr?",
    "options": null,
    "answer": "silny wiatr",
    "explanation": "Nasiona potrzebują do kiełkowania wody, tlenu i odpowiedniej temperatury; silny wiatr nie jest warunkiem kiełkowania."
  },
  {
    "id": "R02_KIEL_08",
    "section": "Kiełkowanie i znaczenie roślin",
    "type": "scenario",
    "prompt": "W doświadczeniu przygotowano trzy pojemniki z nasionami fasoli. Jeden ma suchą watę, drugi lekko wilgotną, a trzeci bardzo mokrą. W którym pojemniku nasiona powinny wykiełkować najszybciej?",
    "options": [
      "Z lekko wilgotną watą",
      "Z całkowicie suchą watą",
      "Z watą zalaną nadmiarem wody",
      "We wszystkich tak samo",
      "Tylko w pojemniku bez tlenu",
      "W żadnym pojemniku"
    ],
    "answer": 0,
    "image": "r02_doswiadczenie_woda.jpg",
    "explanation": "W przedstawionym doświadczeniu nasiona powinny najlepiej kiełkować w pojemniku z umiarkowaną ilością wody."
  },
  {
    "id": "R02_KIEL_09",
    "section": "Kiełkowanie i znaczenie roślin",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady wykorzystania roślin okrytonasiennych do kategorii.",
    "options": null,
    "categories": [
      "Pożywienie",
      "Przyprawy",
      "Używki i napoje",
      "Ozdoby"
    ],
    "items": [
      "Pszenica",
      "Marchew",
      "Bazylia",
      "Cynamon",
      "Kawa",
      "Herbata",
      "Kwiaty doniczkowe"
    ],
    "answer": {
      "Pożywienie": [
        "Pszenica",
        "Marchew"
      ],
      "Przyprawy": [
        "Bazylia",
        "Cynamon"
      ],
      "Używki i napoje": [
        "Kawa",
        "Herbata"
      ],
      "Ozdoby": [
        "Kwiaty doniczkowe"
      ]
    },
    "explanation": "Rośliny okrytonasienne są źródłem pożywienia, przypraw i napojów, a także pełnią funkcje ozdobne."
  },
  {
    "id": "R02_KIEL_10",
    "section": "Kiełkowanie i znaczenie roślin",
    "type": "riddle",
    "prompt": "Co w opisanym doświadczeniu zmieniano między trzema pojemnikami z nasionami fasoli?",
    "options": null,
    "answer": "ilość wody",
    "altAnswers": [
      "ilość wody",
      "ilosc wody",
      "ilość podlewanej wody",
      "ilość dodanej wody"
    ],
    "explanation": "Celem doświadczenia było sprawdzenie wpływu różnej ilości wody na kiełkowanie nasion."
  },
  {
    "id": "R02_KIEL_11",
    "section": "Kiełkowanie i znaczenie roślin",
    "type": "multi_select",
    "prompt": "Zaznacz sposoby wykorzystania roślin okrytonasiennych przez człowieka.",
    "options": [
      "Żywność",
      "Przyprawy",
      "Rośliny ozdobne",
      "Leki i kosmetyki",
      "Wyłącznie materiał na szyszki",
      "Wyłącznie źródło zarodników"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Okrytonasienne dostarczają żywności, przypraw, surowców, leków i roślin ozdobnych."
  },
  {
    "id": "R02_KIEL_12",
    "section": "Kiełkowanie i znaczenie roślin",
    "type": "scenario",
    "prompt": "W pojemniku z fasolą wata jest stale zalana dużą ilością wody. Nasiona mogą nie kiełkować, a nawet pleśnieć. Dlaczego nadmiar wody utrudnia kiełkowanie?",
    "options": [
      "Ograniczony dostęp powietrza",
      "Nadmierne nasłonecznienie",
      "Brak miejsca na liście",
      "Zbyt mocny wiatr",
      "Brak zwierząt zapylających",
      "Przenoszenie nasion przez ptaki"
    ],
    "answer": 0,
    "image": "r02_doswiadczenie_woda.jpg",
    "explanation": "Zbyt dużo wody ogranicza dopływ powietrza do nasion, dlatego nie muszą wykiełkować."
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz odcinek korzenia z jego funkcją lub cechą.",
    "options": null,
    "left": [
      "Stożek wzrostu z czapeczką",
      "Strefa wydłużania",
      "Strefa włośnikowa",
      "Strefa korzeni bocznych"
    ],
    "right": [
      "Powstawanie włośników i pobieranie wody",
      "Wzrost korzenia na długość",
      "Ochrona wierzchołka korzenia",
      "Silniejsze utrzymanie rośliny w podłożu"
    ],
    "answer": {
      "Stożek wzrostu z czapeczką": "Ochrona wierzchołka korzenia",
      "Strefa wydłużania": "Wzrost korzenia na długość",
      "Strefa włośnikowa": "Powstawanie włośników i pobieranie wody",
      "Strefa korzeni bocznych": "Silniejsze utrzymanie rośliny w podłożu"
    },
    "image": "r02_strefy_korzenia.jpg",
    "explanation": "Strefy korzenia mają różne zadania: czapeczka osłania stożek, strefa wydłużania zapewnia wzrost, włośnikowa pobieranie, a boczne korzenie umocowanie."
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż drogę wody pobieranej przez korzeń we właściwej kolejności.",
    "options": null,
    "items": [
      "Drewno korzenia",
      "Gleba",
      "Wyżej położone organy",
      "Kora pierwotna",
      "Włośniki"
    ],
    "answer": [
      "Gleba",
      "Włośniki",
      "Kora pierwotna",
      "Drewno korzenia",
      "Wyżej położone organy"
    ],
    "explanation": "Woda z gleby przechodzi przez włośniki do kory pierwotnej, a następnie do drewna, które transportuje ją ku górze."
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które rośliny mają liście złożone?",
    "options": [
      "Jesion",
      "Groch",
      "Koniczyna",
      "Kasztanowiec",
      "Dąb",
      "Brzoza"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r02_lisc_pojedynczy_zlozony.jpg",
    "explanation": "Liście złożone występują m.in. u jesionu, grochu, koniczyny i kasztanowca."
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj rośliny do kategorii według budowy ich liści.",
    "options": null,
    "categories": [
      "Liść pojedynczy",
      "Liść złożony"
    ],
    "items": [
      "Kasztanowiec",
      "Dąb",
      "Jesion",
      "Tulipan",
      "Brzoza",
      "Koniczyna"
    ],
    "answer": {
      "Liść pojedynczy": [
        "Dąb",
        "Tulipan",
        "Brzoza"
      ],
      "Liść złożony": [
        "Kasztanowiec",
        "Jesion",
        "Koniczyna"
      ]
    },
    "explanation": "Tulipan, dąb i brzoza mają liście pojedyncze, a jesion, koniczyna i kasztanowiec – złożone."
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który z mszaków należy do tej samej grupy co płonnik pospolity i torfowiec błotny?",
    "options": [
      "Piórosz pierzasty",
      "Pióropusznik strusi",
      "Długosz królewski",
      "Orlica pospolita",
      "Widłak goździsty",
      "Salwinia pływająca"
    ],
    "answer": 0,
    "explanation": "Do mszaków należą m.in. płonnik pospolity, torfowiec błotny i piórosz pierzasty."
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Botanik znajduje roślinę paprociową o płożącej się łodydze z pionowymi odgałęzieniami, delikatnych korzeniach i kłosach zarodnionośnych. Do której grupy należy?",
    "options": [
      "Widłaki",
      "Skrzypy",
      "Mszaki",
      "Rośliny nagonasienne",
      "Rośliny okrytonasienne",
      "Paprocie o kłączach"
    ],
    "answer": 0,
    "explanation": "Widłaki mają płożące się łodygi i kłosy zarodnionośne; przykładem jest widłak goździsty."
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz paprotnik z charakterystyczną dla niego cechą.",
    "options": null,
    "left": [
      "Skrzyp polny",
      "Widłak goździsty",
      "Nerecznica samcza",
      "Orlica pospolita"
    ],
    "right": [
      "Paproć wymieniona wśród gatunków prezentowanych na zdjęciach",
      "Paproć opisana jako tworząca kłącze i zarodnie",
      "Roślina z pędami wiosennymi i letnimi",
      "Roślina z płożącą łodygą i pionowymi odgałęzieniami"
    ],
    "answer": {
      "Skrzyp polny": "Roślina z pędami wiosennymi i letnimi",
      "Widłak goździsty": "Roślina z płożącą łodygą i pionowymi odgałęzieniami",
      "Nerecznica samcza": "Paproć opisana jako tworząca kłącze i zarodnie",
      "Orlica pospolita": "Paproć wymieniona wśród gatunków prezentowanych na zdjęciach"
    },
    "image": "r02_skrzyp_pedy.jpg",
    "explanation": "Skrzyp polny wytwarza pędy wiosenne i letnie; widłak goździsty ma płożącą łodygę, a nerecznica i orlica należą do paproci."
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Pokłady węgla kamiennego powstały m.in. ze szczątków dawnych roślin paprociowych w karbonie.",
    "options": null,
    "answer": true,
    "explanation": "Dawne rośliny paprociowe uczestniczyły w tworzeniu pokładów węgla kamiennego w okresie karbonu."
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Wybierz dokładnie dwa procesy składające się na podwójne zapłodnienie u okrytonasiennych.",
    "options": [
      "Połączenie pierwszego plemnika z komórką jajową",
      "Połączenie drugiego plemnika z jądrem komórki centralnej",
      "Przeniesienie zarodnika do zarodni",
      "Przeniesienie pyłku na płatek korony",
      "Zlanie się dwóch ziaren pyłku",
      "Wniknięcie włośnika do gleby"
    ],
    "answer": [
      0,
      1
    ],
    "image": "r02_kwiat_budowa.jpg",
    "explanation": "Podwójne zapłodnienie obejmuje połączenie jednego plemnika z komórką jajową oraz drugiego z jądrem komórki centralnej."
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Po zapyleniu zalążek przekształca się w __________, a zalążnia w __________.",
    "options": null,
    "answer": [
      "nasienie",
      "owocnię"
    ],
    "altAnswers": [
      [
        "nasienie"
      ],
      [
        "owocnię",
        "owocnia"
      ]
    ],
    "image": "r02_zapylenie_kwiatu.jpg",
    "explanation": "W schemacie cyklu okrytonasiennej zapisano, że z zalążka powstaje nasienie, a z zalążni rozwija się owocnia."
  },
  {
    "id": "R02_HARD_11",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj sposoby przenoszenia nasion do odpowiednich mechanizmów.",
    "options": null,
    "categories": [
      "Wiatr",
      "Zwierzęta",
      "Samoczynne rozsiewanie",
      "Człowiek"
    ],
    "items": [
      "Puch mniszka",
      "Haczyki czepiające się sierści",
      "Pękający strąk groszku",
      "Nasiona na podeszwie buta",
      "Skrzydełka nasion",
      "Zjedzenie owocu i wydalenie nasion"
    ],
    "answer": {
      "Wiatr": [
        "Puch mniszka",
        "Skrzydełka nasion"
      ],
      "Zwierzęta": [
        "Haczyki czepiające się sierści",
        "Zjedzenie owocu i wydalenie nasion"
      ],
      "Samoczynne rozsiewanie": [
        "Pękający strąk groszku"
      ],
      "Człowiek": [
        "Nasiona na podeszwie buta"
      ]
    },
    "image": "r02_rozsiewanie_nasion.jpg",
    "explanation": "Nasiona mogą rozprzestrzeniać się dzięki wiatrowi, zwierzętom, samoczynnemu wyrzucaniu ze strąków albo działalności człowieka."
  },
  {
    "id": "R02_HARD_12",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Dwie rośliny rosną w podobnych warunkach. Pierwsza ma duże barwne i pachnące płatki oraz ciężki lepki pyłek. Druga ma niepozorne kwiaty i długie giętkie pręciki. Jaki podział sposobów zapylania wynika z ich cech?",
    "options": [
      "Pierwsza przez zwierzęta, druga przez wiatr",
      "Pierwsza przez wiatr, druga przez zwierzęta",
      "Obie wyłącznie przez wodę",
      "Obie tylko przez samozapylenie",
      "Pierwsza przez pękanie strąków, druga przez wiatr",
      "Pierwsza przez chwytniki, druga przez kłącza"
    ],
    "answer": 0,
    "explanation": "Barwne i pachnące kwiaty oraz lepki pyłek sprzyjają zapylaniu przez zwierzęta, a niepozorne kwiaty i długie pręciki – przez wiatr."
  },
  {
    "id": "R02_HARD_13",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaką liczbę nasion fasoli proponowano umieścić na podłożu w każdym pojemniku doświadczenia?",
    "options": [
      "5",
      "2",
      "3",
      "10",
      "15",
      "20"
    ],
    "answer": 0,
    "image": "r02_doswiadczenie_woda.jpg",
    "explanation": "W tym doświadczeniu w każdym z trzech pojemników umieszczono po pięć nasion."
  },
  {
    "id": "R02_HARD_14",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy planowanego doświadczenia z fasolą w kolejności zgodnej z instrukcją.",
    "options": null,
    "items": [
      "Codzienna obserwacja i zapisywanie zmian",
      "Różne ilości wody w trzech pojemnikach",
      "Umieszczenie nasion na podłożu",
      "Wyłożenie trzech pojemników watą lub papierem"
    ],
    "answer": [
      "Wyłożenie trzech pojemników watą lub papierem",
      "Umieszczenie nasion na podłożu",
      "Różne ilości wody w trzech pojemnikach",
      "Codzienna obserwacja i zapisywanie zmian"
    ],
    "image": "r02_doswiadczenie_woda.jpg",
    "explanation": "Najpierw przygotowuje się trzy pojemniki z podłożem, rozkłada nasiona, różnicuje ilość wody i codziennie obserwuje oraz zapisuje wyniki."
  },
  {
    "id": "R02_HARD_15",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które wnioski wynikają z porównania trzech pojemników w doświadczeniu z kiełkowaniem fasoli?",
    "options": [
      "Woda jest potrzebna do kiełkowania",
      "Umiarkowana wilgotność daje najlepsze oczekiwane efekty",
      "Nadmiar wody może ograniczać dostęp powietrza",
      "Całkowity brak wody przyspiesza kiełkowanie",
      "Nasiona najlepiej kiełkują zatopione w wodzie",
      "W każdym pojemniku trzeba użyć innego gatunku"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Bez wody nasiona nie kiełkują, umiarkowana wilgotność sprzyja kiełkowaniu, a nadmiar wody może ograniczyć dostęp powietrza."
  }
];

const KID_PROMPTS = {
  "R02_WEGE_01": "Które trzy części rośliny pomagają jej rosnąć i się odżywiać?",
  "R02_WEGE_03": "Ułóż części korzenia od czubka ku górze.",
  "R02_WEGE_11": "Co robi liść? Zaznacz właściwe odpowiedzi.",
  "R02_MSZA_01": "Co przytrzymuje mech w ziemi?",
  "R02_MSZA_08": "Co znajduje się w zarodniach pod liśćmi paproci?",
  "R02_NAGO_01": "Gdzie u iglaków znajdują się nasiona?",
  "R02_NAGO_04": "Które drzewo iglaste gubi igły co jesień?",
  "R02_OKRY_05": "Czy zapylenie to połączenie komórki jajowej i plemnika?",
  "R02_OKRY_06": "Gdzie na kwiecie musi trafić pyłek?",
  "R02_KIEL_01": "Czego potrzebuje nasiono, by zacząć kiełkować?",
  "R02_KIEL_08": "W którym z trzech pojemników fasola wykiełkuje najszybciej?",
  "R02_KIEL_10": "Co zmieniano przy podlewaniu trzech pojemników?"
};

const chapter = {
  id: "r02",
  number: 2,
  title: "Organizm roślinny",
  icon: "🌿",
  sectionOrder: [
    "Organy wegetatywne i ich funkcje",
    "Mszaki i paprociowe",
    "Rośliny nagonasienne",
    "Rośliny okrytonasienne i rozmnażanie",
    "Kiełkowanie i znaczenie roślin"
  ],
  sectionIcons: {
    "Organy wegetatywne i ich funkcje": "🌿",
    "Mszaki i paprociowe": "🌱",
    "Rośliny nagonasienne": "🌲",
    "Rośliny okrytonasienne i rozmnażanie": "🌼",
    "Kiełkowanie i znaczenie roślin": "🌾"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
