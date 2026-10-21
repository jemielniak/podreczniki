// Skróty sekcji (do identyfikatorów ćwiczeń):
//   PZR  = Położenie, rzeźba i surowce
//   KWP  = Klimat, wody i przyroda
//   LMM  = Ludność, migracje i miasta
//   RPE  = Rolnictwo, przemysł i energia
//   UTT  = Usługi, transport i turystyka
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_PZR_01",
    "section": "Położenie, rzeźba i surowce",
    "type": "single_choice",
    "prompt": "Które państwo sąsiaduje z Polską od zachodu?",
    "options": [
      "Niemcy",
      "Litwa",
      "Ukraina",
      "Słowacja",
      "Białoruś",
      "Czechy"
    ],
    "answer": 0,
    "explanation": "Zachodnim sąsiadem Polski są Niemcy; na znacznym odcinku granica przebiega wzdłuż Odry i Nysy Łużyckiej."
  },
  {
    "id": "R04_PZR_02",
    "section": "Położenie, rzeźba i surowce",
    "type": "multi_select",
    "prompt": "Zaznacz konsekwencje rozciągłości południkowej Polski.",
    "options": [
      "Różnice wysokości górowania Słońca",
      "Różnice czasu słonecznego między wschodem a zachodem",
      "Różnice długości dnia i nocy",
      "Występowanie granicy na Odrze",
      "Położenie nad Bałtykiem"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": "Rozciągłość północ–południe wpływa na wysokość górowania Słońca oraz długość dnia i nocy; różnica czasu słonecznego zależy od rozciągłości wschód–zachód."
  },
  {
    "id": "R04_PZR_03",
    "section": "Położenie, rzeźba i surowce",
    "type": "true_false",
    "prompt": "Znaczna część zachodniej granicy Polski biegnie wzdłuż Odry i Nysy Łużyckiej.",
    "options": null,
    "answer": true,
    "explanation": "Odra i Nysa Łużycka są naturalnymi przeszkodami, wzdłuż których biegnie zachodnia granica państwa."
  },
  {
    "id": "R04_PZR_04",
    "section": "Położenie, rzeźba i surowce",
    "type": "fill_in",
    "prompt": "Geometryczny środek Polski znajduje się w miejscowości __________, niedaleko Łodzi.",
    "options": null,
    "answer": [
      "Piątek"
    ],
    "explanation": "Geometryczny środek Polski jest tradycyjnie lokalizowany w miejscowości Piątek, niedaleko Łodzi.",
    "altAnswers": [
      [
        "Piątek",
        "Piatek",
        "Piątku"
      ]
    ]
  },
  {
    "id": "R04_PZR_05",
    "section": "Położenie, rzeźba i surowce",
    "type": "riddle",
    "prompt": "Jak nazywa się orogeneza, której zawdzięczamy powstanie Karpat?",
    "options": null,
    "answer": "orogeneza alpejska",
    "explanation": "Karpaty zostały wypiętrzone podczas ruchów górotwórczych orogenezy alpejskiej.",
    "altAnswers": [
      "orogeneza alpejska",
      "alpejska",
      "ruchy alpejskie"
    ]
  },
  {
    "id": "R04_PZR_06",
    "section": "Położenie, rzeźba i surowce",
    "type": "odd_one_out",
    "prompt": "Wskaż formę rzeźby niezwiązaną z działalnością lądolodu: morena czołowa, sandr, oz, stożek wulkaniczny.",
    "options": null,
    "answer": "stożek wulkaniczny",
    "explanation": "Morena czołowa, sandr i oz to formy polodowcowe; stożek wulkaniczny powstaje w wyniku wulkanizmu.",
    "image": "r04_morena_i_glaz_narzutowy.jpg"
  },
  {
    "id": "R04_PZR_07",
    "section": "Położenie, rzeźba i surowce",
    "type": "scenario",
    "prompt": "W Tatrach turysta obserwuje dolinę o szerokim, dość płaskim dnie i stromych zboczach, przemodelowaną przez dawny lodowiec górski. Jaki ma ona przekrój?",
    "options": [
      "V-kształtny",
      "U-kształtny",
      "Lejkowaty",
      "Stożkowaty",
      "Trójkątny",
      "Płaski bez zboczy"
    ],
    "answer": 1,
    "explanation": "Lodowiec górski poszerza dawną dolinę rzeczną i przekształca ją z V-kształtnej w U-kształtną.",
    "image": "r04_tatry_dolina_lodowcowa.jpg"
  },
  {
    "id": "R04_PZR_08",
    "section": "Położenie, rzeźba i surowce",
    "type": "match",
    "prompt": "Połącz surowiec mineralny z rejonem jego występowania lub wydobycia.",
    "options": null,
    "answer": {
      "Węgiel brunatny": "Bełchatów",
      "Rudy miedzi": "Lubin i Głogów",
      "Sól kamienna": "Kłodawa i Inowrocław",
      "Siarka": "Tarnobrzeg"
    },
    "explanation": "Węgiel brunatny wydobywa się w rejonie Bełchatowa, rudy miedzi w rejonie Lubina i Głogowa, sól kamienną m.in. na Kujawach, a złoża siarki występują w rejonie Tarnobrzega.",
    "image": "r04_kopalnia_odkrywkowa.jpg",
    "left": [
      "Węgiel brunatny",
      "Rudy miedzi",
      "Sól kamienna",
      "Siarka"
    ],
    "right": [
      "Tarnobrzeg",
      "Kłodawa i Inowrocław",
      "Bełchatów",
      "Lubin i Głogów"
    ]
  },
  {
    "id": "R04_PZR_09",
    "section": "Położenie, rzeźba i surowce",
    "type": "sort",
    "prompt": "Przyporządkuj surowce mineralne do właściwych grup.",
    "options": null,
    "answer": {
      "energetyczne": [
        "Węgiel kamienny",
        "Ropa naftowa"
      ],
      "metaliczne": [
        "Rudy miedzi",
        "Rudy cynku i ołowiu"
      ],
      "chemiczne": [
        "Sól kamienna",
        "Siarka"
      ]
    },
    "explanation": "Węgiel i ropa należą do surowców energetycznych, rudy metali do metalicznych, a sól i siarka do chemicznych.",
    "items": [
      "Siarka",
      "Węgiel kamienny",
      "Rudy miedzi",
      "Sól kamienna",
      "Ropa naftowa",
      "Rudy cynku i ołowiu"
    ],
    "categories": [
      "energetyczne",
      "metaliczne",
      "chemiczne"
    ]
  },
  {
    "id": "R04_PZR_10",
    "section": "Położenie, rzeźba i surowce",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najstarszego do najmłodszego.",
    "options": null,
    "answer": [
      "Orogeneza kaledońska",
      "Orogeneza hercyńska",
      "Orogeneza alpejska",
      "Zlodowacenie Wisły"
    ],
    "explanation": "Orogeneza kaledońska jest starsza od hercyńskiej, następnie nastąpiły ruchy alpejskie, a w plejstocenie zlodowacenie Wisły.",
    "items": [
      "Zlodowacenie Wisły",
      "Orogeneza hercyńska",
      "Orogeneza kaledońska",
      "Orogeneza alpejska"
    ]
  },
  {
    "id": "R04_PZR_11",
    "section": "Położenie, rzeźba i surowce",
    "type": "single_choice",
    "prompt": "Ile wynosi wysokość najwyższego szczytu Polski, Rysów?",
    "options": [
      "1602 m n.p.m.",
      "1895 m n.p.m.",
      "2503 m n.p.m.",
      "2499 m n.p.m.",
      "2291 m n.p.m.",
      "1725 m n.p.m."
    ],
    "answer": 3,
    "explanation": "Rysy w Tatrach osiągają po polskiej stronie 2499 m n.p.m.",
    "image": "r04_tatry_dolina_lodowcowa.jpg"
  },
  {
    "id": "R04_PZR_12",
    "section": "Położenie, rzeźba i surowce",
    "type": "true_false",
    "prompt": "Sudety są młodym pasmem górskim, wypiętrzonym po raz pierwszy dopiero podczas orogenezy alpejskiej.",
    "options": null,
    "answer": false,
    "explanation": "Sudety mają starsze, paleozoiczne pochodzenie i były później odmładzane ruchami tektonicznymi."
  },
  {
    "id": "R04_KWP_01",
    "section": "Klimat, wody i przyroda",
    "type": "single_choice",
    "prompt": "Jaki typ klimatu panuje w Polsce?",
    "options": [
      "Podzwrotnikowy wilgotny",
      "Umiarkowany chłodny morski",
      "Umiarkowany ciepły przejściowy",
      "Okołobiegunowy",
      "Zwrotnikowy suchy",
      "Równikowy wybitnie wilgotny"
    ],
    "answer": 2,
    "explanation": "Klimat Polski jest umiarkowany ciepły przejściowy, kształtowany przez wpływy morskie i kontynentalne."
  },
  {
    "id": "R04_KWP_02",
    "section": "Klimat, wody i przyroda",
    "type": "multi_select",
    "prompt": "Które stwierdzenia o masach powietrza napływających do Polski są prawdziwe?",
    "options": [
      "Powietrze polarne morskie bywa chłodne latem i ciepłe zimą",
      "Powietrze polarne kontynentalne bywa ciepłe latem i chłodne zimą",
      "Powietrze arktyczne zawsze zwiększa temperaturę",
      "Powietrze arktyczne przynosi silne ochłodzenie",
      "Do Polski napływa wyłącznie powietrze oceaniczne"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Powietrze polarne morskie łagodzi zimę i ochładza lato, kontynentalne daje ciepłe lato i zimną zimę, a arktyczne powoduje ochłodzenie."
  },
  {
    "id": "R04_KWP_03",
    "section": "Klimat, wody i przyroda",
    "type": "true_false",
    "prompt": "W dzień bryza morska wieje znad Bałtyku w kierunku nagrzanego lądu.",
    "options": null,
    "answer": true,
    "explanation": "W dzień ląd nagrzewa się szybciej od morza i pojawia się bryza morska, kierująca powietrze od morza ku lądowi.",
    "image": "r04_wybrzeze_baltyku.jpg"
  },
  {
    "id": "R04_KWP_04",
    "section": "Klimat, wody i przyroda",
    "type": "fill_in",
    "prompt": "Przeciętna długość okresu wegetacyjnego w Polsce wynosi około __________ dni.",
    "options": null,
    "answer": [
      "210"
    ],
    "explanation": "Okres wegetacyjny trwa średnio około 210 dni, jest dłuższy na zachodzie i południu, a krótszy w górach i na północnym wschodzie.",
    "altAnswers": [
      [
        "210",
        "210 dni"
      ]
    ]
  },
  {
    "id": "R04_KWP_05",
    "section": "Klimat, wody i przyroda",
    "type": "riddle",
    "prompt": "Jak nazywa się typ wybrzeża o wysokich ścianach skalnych niszczonych przez fale morskie?",
    "options": null,
    "answer": "wybrzeże klifowe",
    "explanation": "Wybrzeże klifowe jest kształtowane przez niszczącą działalność falowania.",
    "altAnswers": [
      "wybrzeże klifowe",
      "klifowe",
      "klif"
    ]
  },
  {
    "id": "R04_KWP_06",
    "section": "Klimat, wody i przyroda",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest formą ochrony przyrody: park narodowy, rezerwat przyrody, pomnik przyrody, kopalnia odkrywkowa.",
    "options": null,
    "answer": "kopalnia odkrywkowa",
    "explanation": "Parki narodowe, rezerwaty i pomniki przyrody są formami prawnej ochrony przyrody; kopalnia służy wydobywaniu surowców."
  },
  {
    "id": "R04_KWP_07",
    "section": "Klimat, wody i przyroda",
    "type": "scenario",
    "prompt": "Po intensywnym nawożeniu pól składniki pokarmowe spływają rzekami do Bałtyku. W wodzie gwałtownie rozwijają się glony, w tym gatunki wydzielające toksyny. Jak nazywa się ten proces?",
    "options": [
      "Abrazja",
      "Deflacja",
      "Subdukcja",
      "Wietrzenie mrozowe",
      "Eutrofizacja",
      "Erozja lodowcowa"
    ],
    "answer": 4,
    "explanation": "Nadmierny dopływ składników odżywczych prowadzi do eutrofizacji i zakwitów glonów w wodach Bałtyku.",
    "image": "r04_zakwit_baltyku.jpg"
  },
  {
    "id": "R04_KWP_08",
    "section": "Klimat, wody i przyroda",
    "type": "match",
    "prompt": "Połącz oznaczenie poziomu glebowego z jego nazwą.",
    "options": null,
    "answer": {
      "O": "poziom organiczny",
      "A": "poziom próchniczny",
      "E": "poziom wymywania",
      "B": "poziom wmywania"
    },
    "explanation": "Profil gleby zawiera poziom ściółki O, próchniczny A, jasny poziom wymywania E i wzbogacony w składniki poziom wmywania B.",
    "image": "r04_profil_glebowy.jpg",
    "left": [
      "O",
      "A",
      "E",
      "B"
    ],
    "right": [
      "poziom wmywania",
      "poziom organiczny",
      "poziom wymywania",
      "poziom próchniczny"
    ]
  },
  {
    "id": "R04_KWP_09",
    "section": "Klimat, wody i przyroda",
    "type": "sort",
    "prompt": "Rozdziel przykłady na czynniki naturalne i skutki działalności człowieka.",
    "options": null,
    "answer": {
      "naturalne": [
        "Bryza morska",
        "Wiosenne topnienie śniegu",
        "Wietrzenie skał"
      ],
      "antropogeniczne": [
        "Spływ nawozów z pól",
        "Wyciek ropy z tankowca",
        "Budowa kopalni odkrywkowej"
      ]
    },
    "explanation": "Bryzy, topnienie śniegu i wietrzenie zachodzą naturalnie; nawozy, tankowce i melioracja są związane z działalnością człowieka.",
    "items": [
      "Wyciek ropy z tankowca",
      "Bryza morska",
      "Spływ nawozów z pól",
      "Wiosenne topnienie śniegu",
      "Budowa kopalni odkrywkowej",
      "Wietrzenie skał"
    ],
    "categories": [
      "naturalne",
      "antropogeniczne"
    ]
  },
  {
    "id": "R04_KWP_10",
    "section": "Klimat, wody i przyroda",
    "type": "sequence",
    "prompt": "Ułóż główne poziomy profilu gleby od powierzchni ku skale macierzystej.",
    "options": null,
    "answer": [
      "O",
      "A",
      "E",
      "B",
      "C"
    ],
    "explanation": "W typowym profilu glebowym pod ściółką O leży poziom próchniczny A, następnie poziomy wymywania E, wmywania B i skała macierzysta C.",
    "image": "r04_profil_glebowy.jpg",
    "items": [
      "E",
      "C",
      "A",
      "O",
      "B"
    ]
  },
  {
    "id": "R04_KWP_11",
    "section": "Klimat, wody i przyroda",
    "type": "single_choice",
    "prompt": "Która rzeka jest najdłuższa w Polsce?",
    "options": [
      "Wisła",
      "Odra",
      "Warta",
      "Bug",
      "Narew",
      "San"
    ],
    "answer": 0,
    "explanation": "Wisła ma 1047 km długości i jest najdłuższą polską rzeką.",
    "image": "r04_rzeka_rozlewiska.jpg"
  },
  {
    "id": "R04_KWP_12",
    "section": "Klimat, wody i przyroda",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje lasów w środowisku przyrodniczym.",
    "options": [
      "Ograniczanie erozji gleby",
      "Zwiększanie erozji wodnej",
      "Gromadzenie wody",
      "Pochłanianie dwutlenku węgla",
      "Trwałe wyjaławianie wszystkich gleb",
      "Zapewnianie siedlisk zwierzętom"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Lasy ograniczają erozję, magazynują wodę, pochłaniają dwutlenek węgla i są siedliskami organizmów.",
    "image": "r04_las_legowy.jpg"
  },
  {
    "id": "R04_LMM_01",
    "section": "Ludność, migracje i miasta",
    "type": "single_choice",
    "prompt": "Które województwo ma największą gęstość zaludnienia w Polsce?",
    "options": [
      "Podlaskie",
      "Śląskie",
      "Warmińsko-mazurskie",
      "Lubuskie",
      "Lubelskie",
      "Zachodniopomorskie"
    ],
    "answer": 1,
    "explanation": "Województwo śląskie wyróżnia się dużą gęstością zaludnienia, urbanizacją i uprzemysłowieniem."
  },
  {
    "id": "R04_LMM_02",
    "section": "Ludność, migracje i miasta",
    "type": "multi_select",
    "prompt": "Które czynniki wpływają na rozmieszczenie ludności w Polsce?",
    "options": [
      "Ukształtowanie terenu i warunki klimatyczne",
      "Dostępność miejsc pracy i usług",
      "Powojenne zmiany granic",
      "Jednakowa gęstość sieci osadniczej",
      "Wyłącznie liczba parków narodowych"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Rozmieszczenie ludności zależy od czynników przyrodniczych, społeczno-ekonomicznych i historycznych."
  },
  {
    "id": "R04_LMM_03",
    "section": "Ludność, migracje i miasta",
    "type": "true_false",
    "prompt": "Po rekordowym poziomie liczby mieszkańców osiągniętym w 2012 roku liczba ludności Polski zaczęła maleć.",
    "options": null,
    "answer": true,
    "explanation": "W analizowanym okresie liczba ludności Polski osiągnęła około 38,5 mln w 2012 roku, po czym zaczęła spadać."
  },
  {
    "id": "R04_LMM_04",
    "section": "Ludność, migracje i miasta",
    "type": "fill_in",
    "prompt": "Przyrost rzeczywisty to suma przyrostu __________ i salda __________.",
    "options": null,
    "answer": [
      "naturalnego",
      "migracji"
    ],
    "explanation": "Zmiana liczby ludności zależy zarówno od urodzeń i zgonów, jak i od bilansu przyjazdów oraz wyjazdów.",
    "altAnswers": [
      [
        "naturalnego",
        "naturalny"
      ],
      [
        "migracji",
        "migracyjnego"
      ]
    ]
  },
  {
    "id": "R04_LMM_05",
    "section": "Ludność, migracje i miasta",
    "type": "riddle",
    "prompt": "Jak nazywa się wyjazd mieszkańca Polski na dłuższy pobyt do innego kraju?",
    "options": null,
    "answer": "emigracja",
    "explanation": "Emigracja oznacza wyjazd z kraju, a imigracja — przyjazd do kraju.",
    "altAnswers": [
      "emigracja",
      "emigracją"
    ]
  },
  {
    "id": "R04_LMM_06",
    "section": "Ludność, migracje i miasta",
    "type": "odd_one_out",
    "prompt": "Wskaż mniejszość narodową, a nie etniczną: Romowie, Karaimi, Łemkowie, Niemcy.",
    "options": null,
    "answer": "Niemcy",
    "explanation": "Niemcy są wymienieni jako mniejszość narodowa; Romowie, Karaimi i Łemkowie jako mniejszości etniczne."
  },
  {
    "id": "R04_LMM_07",
    "section": "Ludność, migracje i miasta",
    "type": "scenario",
    "prompt": "Rodzina przeprowadza się z centrum Krakowa do domu z ogrodem w pobliskiej gminie. Rodzice nadal pracują w Krakowie, a okolica zyskuje nowych mieszkańców. Jaki proces opisuje ta sytuacja?",
    "options": [
      "Reurbanizacja centrum",
      "Emigracja zagraniczna",
      "Suburbanizacja",
      "Depopulacja państwa",
      "Wyludnianie przedmieść",
      "Industrializacja przemysłu"
    ],
    "answer": 2,
    "explanation": "Suburbanizacja oznacza rozwój i zaludnianie stref podmiejskich kosztem części mieszkańców miast.",
    "image": "r04_zabudowa_podmiejska.jpg"
  },
  {
    "id": "R04_LMM_08",
    "section": "Ludność, migracje i miasta",
    "type": "match",
    "prompt": "Dopasuj pojęcie demograficzne do definicji.",
    "options": null,
    "answer": {
      "imigracja": "przyjazd do kraju",
      "emigracja": "wyjazd z kraju",
      "saldo migracji": "liczba przyjeżdżających minus liczba wyjeżdżających",
      "wskaźnik urbanizacji": "procent ludności mieszkającej w miastach"
    },
    "explanation": "Saldo migracji opisuje różnicę między napływem a odpływem ludności, a wskaźnik urbanizacji — odsetek mieszkańców miast.",
    "left": [
      "imigracja",
      "emigracja",
      "saldo migracji",
      "wskaźnik urbanizacji"
    ],
    "right": [
      "procent ludności mieszkającej w miastach",
      "wyjazd z kraju",
      "przyjazd do kraju",
      "liczba przyjeżdżających minus liczba wyjeżdżających"
    ]
  },
  {
    "id": "R04_LMM_09",
    "section": "Ludność, migracje i miasta",
    "type": "sort",
    "prompt": "Przyporządkuj społeczności do mniejszości narodowych lub etnicznych.",
    "options": null,
    "answer": {
      "mniejszości narodowe": [
        "Niemcy",
        "Litwini",
        "Ukraińcy"
      ],
      "mniejszości etniczne": [
        "Romowie",
        "Karaimi",
        "Tatarzy"
      ]
    },
    "explanation": "Mniejszość narodowa utożsamia się z narodem mającym własne państwo; mniejszości etniczne nie mają takiego odniesienia.",
    "items": [
      "Karaimi",
      "Litwini",
      "Romowie",
      "Niemcy",
      "Tatarzy",
      "Ukraińcy"
    ],
    "categories": [
      "mniejszości narodowe",
      "mniejszości etniczne"
    ]
  },
  {
    "id": "R04_LMM_10",
    "section": "Ludność, migracje i miasta",
    "type": "sequence",
    "prompt": "Ułóż etapy obliczania przyrostu rzeczywistego na podstawie danych demograficznych.",
    "options": null,
    "answer": [
      "Oblicz urodzenia minus zgony",
      "Oblicz liczbę imigrantów minus emigrantów",
      "Dodaj przyrost naturalny i saldo migracji",
      "Ustal znak i wartość przyrostu rzeczywistego"
    ],
    "explanation": "Przyrost rzeczywisty jest sumą przyrostu naturalnego i salda migracji. Najpierw należy obliczyć oba składniki.",
    "items": [
      "Dodaj przyrost naturalny i saldo migracji",
      "Oblicz urodzenia minus zgony",
      "Ustal znak i wartość przyrostu rzeczywistego",
      "Oblicz liczbę imigrantów minus emigrantów"
    ]
  },
  {
    "id": "R04_LMM_11",
    "section": "Ludność, migracje i miasta",
    "type": "true_false",
    "prompt": "Wskaźnik urbanizacji oznacza procentowy udział mieszkańców miast w całkowitej liczbie ludności państwa.",
    "options": null,
    "answer": true,
    "explanation": "Wskaźnik urbanizacji oznacza procentowy udział ludności mieszkającej w miastach w ogólnej liczbie mieszkańców.",
    "image": "r04_zabudowa_podmiejska.jpg"
  },
  {
    "id": "R04_LMM_12",
    "section": "Ludność, migracje i miasta",
    "type": "single_choice",
    "prompt": "Ile kobiet przypadało na 100 mężczyzn w Polsce?",
    "options": [
      "98",
      "100",
      "103",
      "105",
      "107",
      "115"
    ],
    "answer": 4,
    "explanation": "Współczynnik feminizacji równy 107 oznacza 107 kobiet na 100 mężczyzn.",
    "image": "r04_piramida_ludnosci.jpg"
  },
  {
    "id": "R04_RPE_01",
    "section": "Rolnictwo, przemysł i energia",
    "type": "single_choice",
    "prompt": "Które zboże dobrze rośnie na słabych glebach Podlasia i Mazowsza?",
    "options": [
      "Żyto",
      "Pszenica",
      "Jęczmień",
      "Kukurydza",
      "Owies",
      "Pszenżyto"
    ],
    "answer": 0,
    "explanation": "Żyto jest mało wymagającym zbożem i dobrze nadaje się do uprawy na glebach słabej jakości.",
    "image": "r04_pole_zboza_kombajn.jpg"
  },
  {
    "id": "R04_RPE_02",
    "section": "Rolnictwo, przemysł i energia",
    "type": "multi_select",
    "prompt": "Wskaż pozaprzyrodnicze warunki rozwoju rolnictwa.",
    "options": [
      "Rodzaj i żyzność gleb",
      "Wielkość gospodarstw",
      "Wykształcenie rolników",
      "Poziom mechanizacji",
      "Roczne sumy opadów",
      "Dopłaty w ramach polityki rolnej"
    ],
    "answer": [
      1,
      2,
      3,
      5
    ],
    "explanation": "Do warunków pozaprzyrodniczych należą wielkość gospodarstw, kwalifikacje rolników, mechanizacja i polityka rolna; rodzaj gleby i opady są przyrodnicze."
  },
  {
    "id": "R04_RPE_03",
    "section": "Rolnictwo, przemysł i energia",
    "type": "true_false",
    "prompt": "Około trzy czwarte polskich gospodarstw rolnych miało powierzchnię nie większą niż 10 ha.",
    "options": null,
    "answer": true,
    "explanation": "Gospodarstwa rolne o powierzchni do 10 ha stanowiły około 75% wszystkich gospodarstw w analizowanym okresie."
  },
  {
    "id": "R04_RPE_04",
    "section": "Rolnictwo, przemysł i energia",
    "type": "fill_in",
    "prompt": "Buraki cukrowe są uprawiane przede wszystkim w celu produkcji __________.",
    "options": null,
    "answer": [
      "cukru"
    ],
    "explanation": "Burak cukrowy jest rośliną przemysłową, z której otrzymuje się cukier.",
    "altAnswers": [
      [
        "cukru",
        "cukier"
      ]
    ]
  },
  {
    "id": "R04_RPE_05",
    "section": "Rolnictwo, przemysł i energia",
    "type": "riddle",
    "prompt": "Jak nazywa się proces modernizacji organizacji pracy i struktury produkcji przemysłowej po 1989 roku?",
    "options": null,
    "answer": "restrukturyzacja przemysłu",
    "explanation": "Restrukturyzacja obejmowała m.in. unowocześnienie zakładów, zmianę własności i dostosowanie produkcji do rynku.",
    "altAnswers": [
      "restrukturyzacja przemysłu",
      "restrukturyzacja",
      "restrukturyzację przemysłu"
    ]
  },
  {
    "id": "R04_RPE_06",
    "section": "Rolnictwo, przemysł i energia",
    "type": "odd_one_out",
    "prompt": "Wskaż źródło energii, które nie należy do odnawialnych: energia wiatru, energia słońca, energia wody, węgiel brunatny.",
    "options": null,
    "answer": "węgiel brunatny",
    "explanation": "Wiatr, Słońce i woda to odnawialne źródła energii; węgiel brunatny jest paliwem kopalnym.",
    "image": "r04_farma_wiatrowa.jpg"
  },
  {
    "id": "R04_RPE_07",
    "section": "Rolnictwo, przemysł i energia",
    "type": "scenario",
    "prompt": "Samorząd planuje farmę wiatrową. Szuka otwartej przestrzeni, gdzie często wieje silny wiatr, w znacznej odległości od zabudowy. Która lokalizacja najlepiej spełnia te warunki?",
    "options": [
      "Dno głębokiej jaskini",
      "Środek zwartego lasu",
      "Wąska ulica śródmieścia",
      "Otwarty teren w pobliżu wybrzeża Bałtyku",
      "Wnętrze centrum handlowego",
      "Gęsta zabudowa staromiejska"
    ],
    "answer": 3,
    "explanation": "Korzystne warunki wiatrowe występują zwłaszcza na pobrzeżu Bałtyku i otwartych obszarach nizinnych.",
    "image": "r04_farma_wiatrowa.jpg"
  },
  {
    "id": "R04_RPE_08",
    "section": "Rolnictwo, przemysł i energia",
    "type": "match",
    "prompt": "Połącz produkt rolny z jego zastosowaniem.",
    "options": null,
    "answer": {
      "Rzepak": "olej i biopaliwa",
      "Buraki cukrowe": "cukier",
      "Pszenica": "mąka",
      "Ziemniaki": "frytki i chipsy"
    },
    "explanation": "Rzepak służy do produkcji oleju, buraki cukrowe do produkcji cukru, pszenica m.in. do wyrobu mąki, a ziemniaki m.in. do produkcji frytek.",
    "image": "r04_pole_zboza_kombajn.jpg",
    "left": [
      "Rzepak",
      "Buraki cukrowe",
      "Pszenica",
      "Ziemniaki"
    ],
    "right": [
      "mąka",
      "frytki i chipsy",
      "olej i biopaliwa",
      "cukier"
    ]
  },
  {
    "id": "R04_RPE_09",
    "section": "Rolnictwo, przemysł i energia",
    "type": "sort",
    "prompt": "Rozdziel przykłady na produkcję roślinną i zwierzęcą.",
    "options": null,
    "answer": {
      "produkcja roślinna": [
        "Uprawa pszenicy",
        "Uprawa rzepaku",
        "Sadownictwo"
      ],
      "produkcja zwierzęca": [
        "Chów bydła",
        "Chów trzody chlewnej",
        "Chów drobiu"
      ]
    },
    "explanation": "Zboża, rośliny oleiste i owoce są produkcją roślinną; bydło, trzoda chlewna i drób należą do produkcji zwierzęcej.",
    "items": [
      "Chów drobiu",
      "Sadownictwo",
      "Uprawa pszenicy",
      "Chów bydła",
      "Uprawa rzepaku",
      "Chów trzody chlewnej"
    ],
    "categories": [
      "produkcja roślinna",
      "produkcja zwierzęca"
    ]
  },
  {
    "id": "R04_RPE_10",
    "section": "Rolnictwo, przemysł i energia",
    "type": "sequence",
    "prompt": "Ułóż etapy przemian przemysłu w Polsce po 1989 roku w logicznej kolejności.",
    "options": null,
    "answer": [
      "Otwarcie rynku na zagraniczną konkurencję",
      "Problemy nierentownych zakładów",
      "Restrukturyzacja i modernizacja przedsiębiorstw",
      "Wzrost znaczenia nowoczesnych gałęzi przemysłu"
    ],
    "explanation": "Po otwarciu gospodarki ujawniła się słaba konkurencyjność wielu zakładów; restrukturyzacja umożliwiła modernizację i rozwój nowych gałęzi.",
    "items": [
      "Restrukturyzacja i modernizacja przedsiębiorstw",
      "Otwarcie rynku na zagraniczną konkurencję",
      "Wzrost znaczenia nowoczesnych gałęzi przemysłu",
      "Problemy nierentownych zakładów"
    ]
  },
  {
    "id": "R04_RPE_11",
    "section": "Rolnictwo, przemysł i energia",
    "type": "single_choice",
    "prompt": "Jakim paliwem zasilana jest elektrownia Bełchatów?",
    "options": [
      "Gaz ziemny",
      "Węgiel kamienny",
      "Ropa naftowa",
      "Torf",
      "Węgiel brunatny",
      "Biogaz"
    ],
    "answer": 4,
    "explanation": "Bełchatów to duża elektrownia cieplna położona w rejonie złóż węgla brunatnego.",
    "image": "r04_kopalnia_odkrywkowa.jpg"
  },
  {
    "id": "R04_RPE_12",
    "section": "Rolnictwo, przemysł i energia",
    "type": "true_false",
    "prompt": "Polskie instalacje geotermalne służą głównie dostarczaniu ciepła.",
    "options": null,
    "answer": true,
    "explanation": "Instalacje geotermalne, m.in. w Zakopanem i Uniejowie, wykorzystują energię wnętrza Ziemi na potrzeby cieplne."
  },
  {
    "id": "R04_UTT_01",
    "section": "Usługi, transport i turystyka",
    "type": "single_choice",
    "prompt": "W którym polskim porcie morskim znajduje się Port Północny przyjmujący m.in. ropę naftową?",
    "options": [
      "Gdynia",
      "Szczecin",
      "Kołobrzeg",
      "Gdańsk",
      "Świnoujście",
      "Ustka"
    ],
    "answer": 3,
    "explanation": "Port Północny w Gdańsku obsługuje dostawy surowców, w tym ropy naftowej.",
    "image": "r04_terminal_kontenerowy.jpg"
  },
  {
    "id": "R04_UTT_02",
    "section": "Usługi, transport i turystyka",
    "type": "multi_select",
    "prompt": "Które elementy należą do infrastruktury transportowej?",
    "options": [
      "Linie kolejowe",
      "Lotniska",
      "Uprawy zbóż",
      "Porty morskie",
      "Parkingi",
      "Rezerwaty przyrody"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Infrastruktura transportowa obejmuje sieć szlaków oraz punkty transportowe i pomocnicze, np. lotniska, porty i parkingi."
  },
  {
    "id": "R04_UTT_03",
    "section": "Usługi, transport i turystyka",
    "type": "true_false",
    "prompt": "Odra jest jedną z najważniejszych śródlądowych dróg wodnych w Polsce.",
    "options": null,
    "answer": true,
    "explanation": "Transport śródlądowy ma w Polsce ograniczone znaczenie; najważniejszą drogą wodną jest Odra.",
    "image": "r04_rzeka_rozlewiska.jpg"
  },
  {
    "id": "R04_UTT_04",
    "section": "Usługi, transport i turystyka",
    "type": "fill_in",
    "prompt": "Rurociąg __________ transportuje ropę naftową z Rosji przez Polskę, m.in. do rafinerii w Płocku.",
    "options": null,
    "answer": [
      "Przyjaźń"
    ],
    "explanation": "Rurociąg Przyjaźń jest ważnym szlakiem przesyłowym ropy naftowej.",
    "altAnswers": [
      [
        "Przyjaźń",
        "Przyjazn",
        "Przyjaźni"
      ]
    ]
  },
  {
    "id": "R04_UTT_05",
    "section": "Usługi, transport i turystyka",
    "type": "riddle",
    "prompt": "Jak nazywają się usługi polegające na organizowaniu przewozu ładunków na zlecenie innych przedsiębiorstw?",
    "options": null,
    "answer": "spedycja",
    "explanation": "Firmy spedycyjne odgrywają ważną rolę w obsłudze transportowej dużych portów morskich.",
    "altAnswers": [
      "spedycja",
      "usługi spedycyjne",
      "spedycją"
    ]
  },
  {
    "id": "R04_UTT_06",
    "section": "Usługi, transport i turystyka",
    "type": "odd_one_out",
    "prompt": "Wskaż miasto, które nie jest ważnym polskim portem morskim: Gdynia, Gdańsk, Szczecin, Kraków.",
    "options": null,
    "answer": "Kraków",
    "explanation": "Gdańsk, Gdynia i Szczecin to ważne porty morskie; Kraków nie leży nad morzem."
  },
  {
    "id": "R04_UTT_07",
    "section": "Usługi, transport i turystyka",
    "type": "scenario",
    "prompt": "Firma logistyczna szuka miejsca z dostępem do autostrad A4 i A8 oraz dróg ekspresowych S5 i S8. W którym mieście takie połączenia sprzyjają rozwojowi centrów logistycznych i zakładów produkcyjnych?",
    "options": [
      "Na Podhalu",
      "W okolicach Suwałk",
      "W obszarze metropolitalnym Wrocławia",
      "Na półwyspie Helskim",
      "W Kotlinie Kłodzkiej",
      "W Bieszczadach"
    ],
    "answer": 2,
    "explanation": "Położenie Wrocławia na skrzyżowaniu ważnych tras sprzyja rozwojowi centrów logistycznych, handlowych i przemysłowych."
  },
  {
    "id": "R04_UTT_08",
    "section": "Usługi, transport i turystyka",
    "type": "match",
    "prompt": "Połącz element infrastruktury przesyłowej z przesyłanym dobrem.",
    "options": null,
    "answer": {
      "Ropociąg": "ropa naftowa",
      "Gazociąg": "gaz ziemny",
      "Wodociąg": "woda",
      "Sieć energetyczna": "energia elektryczna"
    },
    "explanation": "Paliwa płynne, gaz, wodę oraz energię elektryczną przesyła się odpowiednimi sieciami infrastruktury.",
    "left": [
      "Ropociąg",
      "Gazociąg",
      "Wodociąg",
      "Sieć energetyczna"
    ],
    "right": [
      "woda",
      "energia elektryczna",
      "ropa naftowa",
      "gaz ziemny"
    ]
  },
  {
    "id": "R04_UTT_09",
    "section": "Usługi, transport i turystyka",
    "type": "sort",
    "prompt": "Przyporządkuj walory turystyczne do dwóch kategorii.",
    "options": null,
    "answer": {
      "przyrodnicze": [
        "Wydmy Słowińskiego Parku Narodowego",
        "Szczyty Tatr",
        "Jeziora polodowcowe"
      ],
      "kulturowe": [
        "Zamek krzyżacki w Malborku",
        "Zabytkowy rynek Krakowa",
        "Kopalnia soli w Wieliczce"
      ]
    },
    "explanation": "Krajobrazy i formy terenu to walory przyrodnicze; zabytki historyczne i obiekty kultury to walory kulturowe.",
    "image": "r04_zabytki_malopolski.jpg",
    "items": [
      "Kopalnia soli w Wieliczce",
      "Szczyty Tatr",
      "Zamek krzyżacki w Malborku",
      "Jeziora polodowcowe",
      "Wydmy Słowińskiego Parku Narodowego",
      "Zabytkowy rynek Krakowa"
    ],
    "categories": [
      "przyrodnicze",
      "kulturowe"
    ]
  },
  {
    "id": "R04_UTT_10",
    "section": "Usługi, transport i turystyka",
    "type": "sequence",
    "prompt": "Ułóż pojęcia od najszerszego działu gospodarki do najbardziej szczegółowej gałęzi.",
    "options": null,
    "answer": [
      "Usługi",
      "Transport",
      "Transport wodny",
      "Transport morski"
    ],
    "explanation": "Transport należy do usług, transport wodny jest jego rodzajem, a transport morski jest częścią transportu wodnego.",
    "items": [
      "Transport morski",
      "Transport",
      "Usługi",
      "Transport wodny"
    ]
  },
  {
    "id": "R04_UTT_11",
    "section": "Usługi, transport i turystyka",
    "type": "true_false",
    "prompt": "Puszcza Białowieska znajduje się na Liście światowego dziedzictwa UNESCO.",
    "options": null,
    "answer": true,
    "explanation": "Puszcza Białowieska jest jednym z polskich obiektów wpisanych na Listę światowego dziedzictwa UNESCO."
  },
  {
    "id": "R04_UTT_12",
    "section": "Usługi, transport i turystyka",
    "type": "single_choice",
    "prompt": "W którym mieście znajduje się polski gazoport do odbioru skroplonego gazu ziemnego?",
    "options": [
      "Gdynia",
      "Ustka",
      "Sopot",
      "Kołobrzeg",
      "Świnoujście",
      "Elbląg"
    ],
    "answer": 4,
    "explanation": "W Świnoujściu działa terminal do odbioru gazu ziemnego w postaci skroplonej.",
    "image": "r04_terminal_gazu_skroplonego.jpg"
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W którym roku Szymon Sobiekrajski wyznaczył geometryczny środek Europy w Suchowoli?",
    "options": [
      "1764",
      "1795",
      "1775",
      "1815",
      "1807",
      "1788"
    ],
    "answer": 2,
    "explanation": "Szymon Sobiekrajski przedstawił w 1775 roku obliczenia dotyczące położenia geometrycznego środka Europy."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Rozciągłość równoleżnikowa Polski wynosi około __________ km, a południkowa około __________ km.",
    "options": null,
    "answer": [
      "689",
      "649"
    ],
    "explanation": "Odległość między krańcami zachodnim i wschodnim Polski wynosi około 689 km, a między północnym i południowym około 649 km.",
    "altAnswers": [
      [
        "689",
        "689 km"
      ],
      [
        "649",
        "649 km"
      ]
    ]
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Dopasuj zlodowacenie do przybliżonego czasu jego występowania.",
    "options": null,
    "answer": {
      "Sanu": "około 500 tys. lat temu",
      "Odry": "około 200 tys. lat temu",
      "Wisły": "około 50 tys. lat temu"
    },
    "explanation": "Zlodowacenia Sanu, Odry i Wisły datuje się orientacyjnie na około 500, 200 i 50 tys. lat temu.",
    "image": "r04_morena_i_glaz_narzutowy.jpg",
    "left": [
      "Sanu",
      "Odry",
      "Wisły"
    ],
    "right": [
      "około 50 tys. lat temu",
      "około 500 tys. lat temu",
      "około 200 tys. lat temu"
    ]
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe informacje o polskich obszarach morskich.",
    "options": [
      "Morze terytorialne ma szerokość 12 mil morskich",
      "Morze terytorialne ma szerokość 100 mil morskich",
      "Wyłączna strefa ekonomiczna obejmuje prawa do bogactw naturalnych",
      "Obce statki nigdy nie mogą przepływać przez strefę ekonomiczną",
      "Morskie wody wewnętrzne obejmują m.in. Zalew Wiślany"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Morze terytorialne ma szerokość 12 mil morskich, a wyłączna strefa ekonomiczna daje Polsce prawa do zasobów, lecz nie zakazuje obcym statkom samego przepływu."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania polodowcowego jeziora cyrkowego w logicznym porządku.",
    "options": null,
    "answer": [
      "Powstaje rzeczna dolina górska",
      "Lodowiec górski żłobi zagłębienie otoczone stromymi stokami",
      "Lodowiec ustępuje",
      "W zagłębieniu pozostaje jezioro górskie"
    ],
    "explanation": "Lodowiec przekształca rzeźbę górską i tworzy cyrk, którego zagłębienie po ustąpieniu lodu może wypełnić się wodą.",
    "image": "r04_tatry_dolina_lodowcowa.jpg",
    "items": [
      "Lodowiec ustępuje",
      "Powstaje rzeczna dolina górska",
      "W zagłębieniu pozostaje jezioro górskie",
      "Lodowiec górski żłobi zagłębienie otoczone stromymi stokami"
    ]
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się miejscowość uznana za geometryczny środek Europy w obliczeniach z 1775 roku?",
    "options": null,
    "answer": "Suchowola",
    "explanation": "Szymon Sobiekrajski obliczył położenie geometrycznego środka Europy w Suchowoli.",
    "altAnswers": [
      "Suchowola",
      "Suchowoli"
    ]
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż miasto położone poza rejonem eksploatacji rud miedzi w południowo-zachodniej Polsce: Legnica, Lubin, Głogów, Olkusz.",
    "options": null,
    "answer": "Olkusz",
    "explanation": "Legnica, Lubin i Głogów to rejon eksploatacji rud miedzi, natomiast Olkusz jest związany z rudami cynku i ołowiu."
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Latem nad Bałtykiem zapada noc. Ląd wychładza się szybciej niż morze, a wiatr zaczyna wiać z lądu w stronę wody. Jak nazywa się to zjawisko?",
    "options": [
      "Bryza morska",
      "Bryza lądowa",
      "Halny",
      "Monsun letni",
      "Wiatr fenowy",
      "Pasat"
    ],
    "answer": 1,
    "explanation": "Nocą występuje bryza lądowa, skierowana z chłodniejszego lądu nad cieplejszą powierzchnię morza.",
    "image": "r04_wybrzeze_baltyku.jpg"
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaka jest przeciętna głębokość Morza Bałtyckiego?",
    "options": [
      "Około 5 m",
      "Około 15 m",
      "Około 150 m",
      "Nieco ponad 50 m",
      "Około 500 m",
      "Ponad 1000 m"
    ],
    "answer": 3,
    "explanation": "Bałtyk jest stosunkowo płytkim morzem; jego średnia głębokość wynosi nieco ponad 50 metrów."
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Podziel regiony na obszary o stosunkowo wysokich opadach oraz obszary o niskich opadach w cieniu opadowym.",
    "options": null,
    "answer": {
      "stosunkowo wysokie opady": [
        "Tatry",
        "Wyżej położone części Pojezierza Pomorskiego"
      ],
      "niskie opady w cieniu opadowym": [
        "Kujawy",
        "Wielkopolska",
        "Mazowsze"
      ]
    },
    "explanation": "Największe sumy opadów występują w górach; Pojezierze Pomorskie bywa dość wilgotne, natomiast Kujawy, Wielkopolska i Mazowsze należą do obszarów z cieniem opadowym.",
    "items": [
      "Kujawy",
      "Tatry",
      "Mazowsze",
      "Wyżej położone części Pojezierza Pomorskiego",
      "Wielkopolska"
    ],
    "categories": [
      "stosunkowo wysokie opady",
      "niskie opady w cieniu opadowym"
    ]
  },
  {
    "id": "R04_HARD_11",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz obiekt światowego dziedzictwa UNESCO z miejscem, w którym się znajduje.",
    "options": null,
    "answer": {
      "Hala Stulecia": "Wrocław",
      "Zamek krzyżacki": "Malbork",
      "Średniowieczny zespół miejski": "Toruń",
      "Królewskie kopalnie soli": "Wieliczka i Bochnia"
    },
    "explanation": "Do polskich obiektów UNESCO należą Hala Stulecia we Wrocławiu, zamek w Malborku, średniowieczny Toruń oraz kopalnie soli w Wieliczce i Bochni.",
    "image": "r04_zabytki_malopolski.jpg",
    "left": [
      "Hala Stulecia",
      "Zamek krzyżacki",
      "Średniowieczny zespół miejski",
      "Królewskie kopalnie soli"
    ],
    "right": [
      "Malbork",
      "Wieliczka i Bochnia",
      "Wrocław",
      "Toruń"
    ]
  },
  {
    "id": "R04_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które zdania o Wiśle i Odrze są prawdziwe?",
    "options": [
      "Wisła ma długość 1047 km",
      "Odra ma źródła na Baraniej Górze",
      "Źródła Odry znajdują się w Czechach",
      "Dorzecza Wisły i Odry są wyraźnie asymetryczne",
      "Lewobrzeżne części dorzeczy obu rzek są większe niż prawobrzeżne"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "Wisła ma 1047 km długości, źródła Odry leżą w Czechach, a w dorzeczach obu rzek większe są części prawobrzeżne."
  },
  {
    "id": "R04_HARD_13",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "W 2021 roku na Liście światowego dziedzictwa UNESCO znajdowało się 16 obiektów położonych w Polsce.",
    "options": null,
    "answer": true,
    "explanation": "Według stanu na 2021 rok Polska miała 16 obiektów wpisanych na Listę światowego dziedzictwa UNESCO."
  },
  {
    "id": "R04_HARD_14",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W hipotetycznym roku w pewnym regionie urodziło się 1200 osób, zmarło 1400, przyjechało 350, a wyjechało 200. Ile wyniósł przyrost rzeczywisty ludności tego regionu?",
    "options": [
      "+150 osób",
      "−200 osób",
      "−50 osób",
      "+50 osób",
      "+200 osób",
      "−350 osób"
    ],
    "answer": 2,
    "explanation": "Przyrost naturalny = 1200 − 1400 = −200, a saldo migracji = 350 − 200 = +150; razem −50 osób.",
    "image": "r04_piramida_ludnosci.jpg"
  },
  {
    "id": "R04_HARD_15",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Dwa zabytkowe ośrodki wydobycia soli wpisane na Listę UNESCO to __________ i __________.",
    "options": null,
    "answer": [
      "Wieliczka",
      "Bochnia"
    ],
    "explanation": "Królewskie kopalnie soli w Wieliczce i Bochni tworzą wspólny wpis na Listę światowego dziedzictwa UNESCO.",
    "altAnswers": [
      [
        "Wieliczka",
        "Wieliczce"
      ],
      [
        "Bochnia",
        "Bochni"
      ]
    ]
  }
];

const KID_PROMPTS = {
  "R04_PZR_02": "Zaznacz, co zmienia się między północą a południem Polski.",
  "R04_PZR_09": "Do jakiej grupy zaliczamy każdy surowiec?",
  "R04_KWP_02": "Które zdania o powietrzu napływającym do Polski są prawdziwe?",
  "R04_KWP_09": "Co zachodzi naturalnie, a co wynika z działań ludzi?",
  "R04_LMM_04": "Z czego składa się przyrost rzeczywisty ludności?",
  "R04_LMM_10": "Ułóż po kolei czynności potrzebne do obliczenia przyrostu rzeczywistego.",
  "R04_RPE_02": "Które rzeczy zależą od ludzi, a nie od pogody i przyrody?",
  "R04_RPE_10": "W jakiej kolejności zmieniał się polski przemysł po 1989 roku?",
  "R04_UTT_02": "Które rzeczy są potrzebne do przewozu osób lub towarów?",
  "R04_HARD_04": "Które zdania o wodach morskich Polski są prawdziwe?"
};

const chapter = {
  id: "r04",
  number: 4,
  title: "Środowisko, społeczeństwo i gospodarka Polski",
  icon: "🇵🇱",
  sectionOrder: ["Położenie, rzeźba i surowce", "Klimat, wody i przyroda", "Ludność, migracje i miasta", "Rolnictwo, przemysł i energia", "Usługi, transport i turystyka"] ,
  sectionIcons: {
  "Położenie, rzeźba i surowce": "⛰️",
  "Klimat, wody i przyroda": "🌿",
  "Ludność, migracje i miasta": "🏙️",
  "Rolnictwo, przemysł i energia": "⚙️",
  "Usługi, transport i turystyka": "🚢"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
