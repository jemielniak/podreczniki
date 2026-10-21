// Skróty sekcji (do identyfikatorów ćwiczeń):
//   AZJ  = Środowisko przyrodnicze Azji
//   GOS  = Monsuny i gospodarka Azji
//   SPO  = Ludność i konflikty Azji
//   AFR  = Środowisko przyrodnicze Afryki
//   ROL  = Rolnictwo i gospodarka Afryki
//   PRO  = Problemy społeczne i turystyka Afryki
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R05_AZJ_01",
    "section": "Środowisko przyrodnicze Azji",
    "type": "single_choice",
    "prompt": "Który szczyt jest najwyższy na Ziemi?",
    "options": [
      "Kibo",
      "Mount Everest",
      "Batian",
      "Ras Daszan",
      "Fudżi",
      "Elgon"
    ],
    "answer": 1,
    "explanation": "Mount Everest w Himalajach osiąga wysokość około 8848 m n.p.m."
  },
  {
    "id": "R05_AZJ_02",
    "section": "Środowisko przyrodnicze Azji",
    "type": "multi_select",
    "prompt": "Które z podanych elementów środowiska przyrodniczego leżą w Azji?",
    "options": [
      "Wyżyna Tybetańska",
      "Himalaje",
      "Nizina Zachodniosyberyjska",
      "Góry Smocze",
      "Pustynia Gobi",
      "Kotlina Konga"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Wyżyna Tybetańska, Himalaje, Nizina Zachodniosyberyjska i pustynia Gobi leżą w Azji; Góry Smocze oraz Kotlina Konga leżą w Afryce.",
    "image": "r05_himalaje_szczyty.jpg"
  },
  {
    "id": "R05_AZJ_03",
    "section": "Środowisko przyrodnicze Azji",
    "type": "true_false",
    "prompt": "Na wybrzeżach Azji suma opadów jest na ogół mniejsza niż w suchym wnętrzu kontynentu.",
    "options": null,
    "answer": false,
    "explanation": "Wnętrze Azji ma często suchy klimat kontynentalny, a wybrzeża otrzymują zwykle więcej opadów."
  },
  {
    "id": "R05_AZJ_04",
    "section": "Środowisko przyrodnicze Azji",
    "type": "fill_in",
    "prompt": "Najdłuższą rzeką Azji jest __________.",
    "options": null,
    "altAnswers": [
      [
        "Jangcy",
        "Jangcy (Jangcy Jiang)"
      ]
    ],
    "answer": [
      "Jangcy"
    ],
    "explanation": "Jangcy jest najdłuższą rzeką Azji."
  },
  {
    "id": "R05_AZJ_05",
    "section": "Środowisko przyrodnicze Azji",
    "type": "riddle",
    "prompt": "Jak nazywa się najgłębsze jezioro świata, położone w Azji?",
    "options": null,
    "altAnswers": [
      "Bajkał",
      "Jezioro Bajkał"
    ],
    "answer": "Bajkał",
    "explanation": "Bajkał jest najgłębszym jeziorem świata; Morze Kaspijskie to największe jezioro pod względem powierzchni."
  },
  {
    "id": "R05_AZJ_06",
    "section": "Środowisko przyrodnicze Azji",
    "type": "odd_one_out",
    "prompt": "Wskaż formę rzeźby niebędącą pasmem górskim Azji: Himalaje, Karakorum, Hindukusz, Kotlina Kaszgarska.",
    "options": null,
    "answer": "Kotlina Kaszgarska",
    "explanation": "Kotlina Kaszgarska jest śródgórskim obniżeniem, a pozostałe to azjatyckie pasma górskie."
  },
  {
    "id": "R05_AZJ_07",
    "section": "Środowisko przyrodnicze Azji",
    "type": "scenario",
    "prompt": "Latem wilgotne masy powietrza znad Oceanu Indyjskiego napływają nad południową Azję. U podnóża gór pojawiają się obfite deszcze, a za ich barierą jest znacznie sucho. Które góry tworzą tę barierę?",
    "options": [
      "Himalaje",
      "Atlas",
      "Góry Smocze",
      "Kaukaz",
      "Ałtaj",
      "Taurus"
    ],
    "answer": 0,
    "explanation": "Himalaje ograniczają przemieszczanie się wilgotnych mas powietrza na północ.",
    "image": "r05_himalaje_szczyty.jpg"
  },
  {
    "id": "R05_AZJ_08",
    "section": "Środowisko przyrodnicze Azji",
    "type": "match",
    "prompt": "Połącz rzeki Azji z oceanem, do którego odprowadzają wody.",
    "options": null,
    "left": [
      "Indus",
      "Jangcy",
      "Lena"
    ],
    "right": [
      "Ocean Spokojny",
      "Ocean Arktyczny",
      "Ocean Indyjski"
    ],
    "answer": {
      "Indus": "Ocean Indyjski",
      "Jangcy": "Ocean Spokojny",
      "Lena": "Ocean Arktyczny"
    },
    "explanation": "Indus uchodzi ku Oceanowi Indyjskiemu, Jangcy ku Spokojnemu, a Lena ku Arktycznemu."
  },
  {
    "id": "R05_AZJ_09",
    "section": "Środowisko przyrodnicze Azji",
    "type": "sort",
    "prompt": "Przyporządkuj zjawiska do środowiska, w którym są charakterystyczne.",
    "options": null,
    "items": [
      "klimat kontynentalny",
      "wulkany czynne",
      "pustynie",
      "trzęsienia ziemi",
      "niewielkie opady",
      "rowy oceaniczne"
    ],
    "categories": [
      "Strefy aktywności tektonicznej",
      "Suchy interior Azji"
    ],
    "answer": {
      "Strefy aktywności tektonicznej": [
        "trzęsienia ziemi",
        "wulkany czynne",
        "rowy oceaniczne"
      ],
      "Suchy interior Azji": [
        "niewielkie opady",
        "klimat kontynentalny",
        "pustynie"
      ]
    },
    "explanation": "Granice płyt wiążą się ze wstrząsami, wulkanami i rowami, a wnętrze Azji odznacza się suchością i kontynentalizmem klimatu.",
    "image": "r05_erupcja_wulkanu.jpg"
  },
  {
    "id": "R05_AZJ_10",
    "section": "Środowisko przyrodnicze Azji",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania deszczów monsunu letniego w prawidłowej kolejności.",
    "options": null,
    "items": [
      "Tworzą się chmury",
      "Wilgotne powietrze napływa znad oceanu",
      "Następują obfite opady",
      "Powietrze unosi się i ochładza"
    ],
    "answer": [
      "Wilgotne powietrze napływa znad oceanu",
      "Powietrze unosi się i ochładza",
      "Tworzą się chmury",
      "Następują obfite opady"
    ],
    "explanation": "Monsun letni przynosi znad Oceanu Indyjskiego wilgotne powietrze, którego ochładzanie prowadzi do powstawania chmur i opadów."
  },
  {
    "id": "R05_GOS_01",
    "section": "Monsuny i gospodarka Azji",
    "type": "single_choice",
    "prompt": "W których miesiącach występuje monsun letni w Azji Południowej?",
    "options": [
      "Od maja do października",
      "Od listopada do kwietnia",
      "Tylko w styczniu",
      "Od grudnia do lutego",
      "Tylko w marcu",
      "Od stycznia do marca"
    ],
    "answer": 0,
    "explanation": "Monsun letni występuje od maja do października i sprzyja uprawie ryżu.",
    "image": "r05_tarasy_ryzowe.jpg"
  },
  {
    "id": "R05_GOS_02",
    "section": "Monsuny i gospodarka Azji",
    "type": "multi_select",
    "prompt": "Jakie czynniki ułatwiają uprawę ryżu na obszarach monsunowych?",
    "options": [
      "Wysokie temperatury w okresie wzrostu",
      "Obfite opady letnie",
      "Żyzne i wilgotne mady",
      "Stała wieloletnia zmarzlina",
      "Duża dostępność pracy ludzkiej",
      "Brak jakichkolwiek opadów"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Ryż wymaga ciepła, wody i nakładów pracy, a żyzne mady w dolinach rzek pomagają utrzymywać wilgoć."
  },
  {
    "id": "R05_GOS_03",
    "section": "Monsuny i gospodarka Azji",
    "type": "true_false",
    "prompt": "Grunty orne zajmują w Japonii około 11% powierzchni kraju.",
    "options": null,
    "answer": true,
    "explanation": "Pomimo niewielkiego udziału gruntów ornych Japonia osiąga wysokie plony dzięki nowoczesnemu rolnictwu."
  },
  {
    "id": "R05_GOS_04",
    "section": "Monsuny i gospodarka Azji",
    "type": "fill_in",
    "prompt": "Stolicą Japonii jest __________, a jej walutą jest __________.",
    "options": null,
    "altAnswers": [
      [
        "Tokio"
      ],
      [
        "jen",
        "JPY",
        "jen japoński"
      ]
    ],
    "answer": [
      "Tokio",
      "jen"
    ],
    "explanation": "Tokio jest stolicą Japonii, a jej walutą jest jen (JPY)."
  },
  {
    "id": "R05_GOS_05",
    "section": "Monsuny i gospodarka Azji",
    "type": "riddle",
    "prompt": "Jak nazywa się słynny wulkan Japonii?",
    "options": null,
    "altAnswers": [
      "Fudżi",
      "Fuji",
      "Góra Fudżi"
    ],
    "answer": "Fudżi",
    "explanation": "Fudżi to charakterystyczny wulkan Japonii."
  },
  {
    "id": "R05_GOS_06",
    "section": "Monsuny i gospodarka Azji",
    "type": "odd_one_out",
    "prompt": "Wskaż markę, która nie produkuje samochodów: Toyota, Nissan, Honda, Sony.",
    "options": null,
    "answer": "Sony",
    "explanation": "Toyota, Nissan i Honda to producenci samochodów, a Sony jest marką elektroniki."
  },
  {
    "id": "R05_GOS_07",
    "section": "Monsuny i gospodarka Azji",
    "type": "scenario",
    "prompt": "Japońskie przedsiębiorstwo produkuje zaawansowaną elektronikę, chociaż kraj musi sprowadzać większość surowców mineralnych. W jaki obszar rozwoju Japonia szczególnie inwestuje, aby zwiększać swoją konkurencyjność?",
    "options": [
      "Badania naukowe i edukację",
      "Rozbudowę kopalń węgla",
      "Powierzchnię pastwisk",
      "Powiększanie gruntów ornych",
      "Zmniejszanie nakładów na szkolnictwo",
      "Dalsze zwiększanie wydobycia rud"
    ],
    "answer": 0,
    "explanation": "Podstawą rozwoju Japonii są badania, edukacja oraz przemysł zaawansowanych technologii.",
    "image": "r05_roboty_montaz_samochodow.jpg"
  },
  {
    "id": "R05_GOS_08",
    "section": "Monsuny i gospodarka Azji",
    "type": "match",
    "prompt": "Dopasuj japońskie przedsiębiorstwa do ich dziedzin działalności.",
    "options": null,
    "left": [
      "Sony",
      "Toyota",
      "Nikon"
    ],
    "right": [
      "samochody",
      "sprzęt fotograficzny",
      "elektronika"
    ],
    "answer": {
      "Sony": "elektronika",
      "Toyota": "samochody",
      "Nikon": "sprzęt fotograficzny"
    },
    "explanation": "Sony specjalizuje się w elektronice, Toyota w motoryzacji, a Nikon m.in. w sprzęcie fotograficznym."
  },
  {
    "id": "R05_GOS_09",
    "section": "Monsuny i gospodarka Azji",
    "type": "sort",
    "prompt": "Rozdziel informacje na bariery oraz czynniki sprzyjające rozwojowi Japonii.",
    "options": null,
    "items": [
      "badania naukowe",
      "górzyste ukształtowanie",
      "częste trzęsienia ziemi",
      "nowoczesny przemysł",
      "niedobór surowców mineralnych",
      "wysoki poziom edukacji"
    ],
    "categories": [
      "Bariery przyrodnicze",
      "Czynniki sprzyjające rozwojowi"
    ],
    "answer": {
      "Bariery przyrodnicze": [
        "niedobór surowców mineralnych",
        "górzyste ukształtowanie",
        "częste trzęsienia ziemi"
      ],
      "Czynniki sprzyjające rozwojowi": [
        "wysoki poziom edukacji",
        "badania naukowe",
        "nowoczesny przemysł"
      ]
    },
    "explanation": "Japonia ogranicza niekorzystne warunki naturalne dzięki wiedzy, inwestycjom i technologiom."
  },
  {
    "id": "R05_GOS_10",
    "section": "Monsuny i gospodarka Azji",
    "type": "single_choice",
    "prompt": "Dlaczego Nizina Chińska wyróżnia się bardzo dużą gęstością zaludnienia?",
    "options": [
      "Ma łagodny klimat i żyzne gleby",
      "Leży na największej pustyni Chin",
      "Jest w całości pokryta lodowcami",
      "Ma klimat okołobiegunowy",
      "Brakuje w niej możliwości uprawy roślin",
      "Leży w najwyższych górach świata"
    ],
    "answer": 0,
    "explanation": "Nizina Chińska ma korzystne warunki dla rolnictwa i osadnictwa; na dużych wysokościach gęstość zaludnienia jest znacznie niższa."
  },
  {
    "id": "R05_SPO_01",
    "section": "Ludność i konflikty Azji",
    "type": "single_choice",
    "prompt": "W pobliżu którego indyjskiego miasta rozwinęła się Indyjska Dolina Krzemowa?",
    "options": [
      "Nowe Delhi",
      "Bengalur",
      "Varanasi",
      "Tokio",
      "Pekin",
      "Nairobi"
    ],
    "answer": 1,
    "explanation": "W rejonie Bengaluru rozwinęły się między innymi przemysły elektroniczny, biotechnologiczny i kosmiczny."
  },
  {
    "id": "R05_SPO_02",
    "section": "Ludność i konflikty Azji",
    "type": "multi_select",
    "prompt": "Wskaż problemy społeczne występujące w Indiach.",
    "options": [
      "Duże rozmiary slamsów",
      "Analfabetyzm",
      "Niedożywienie",
      "Nierówności związane z systemem kastowym",
      "Brak miast",
      "Powszechny brak szkolnictwa prywatnego"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do problemów społecznych Indii należą kontrasty warunków życia, utrudniony dostęp do edukacji, niedożywienie i utrzymujące się podziały społeczne.",
    "image": "r05_kontrast_dzielnic_indii.jpg"
  },
  {
    "id": "R05_SPO_03",
    "section": "Ludność i konflikty Azji",
    "type": "true_false",
    "prompt": "Polityka jednego dziecka w Chinach obowiązywała do 2015 roku.",
    "options": null,
    "answer": true,
    "explanation": "Program kontroli urodzeń wprowadzono w latach 70. XX wieku, a polityka jednego dziecka obowiązywała do 2015 roku."
  },
  {
    "id": "R05_SPO_04",
    "section": "Ludność i konflikty Azji",
    "type": "fill_in",
    "prompt": "Stolicą Indii jest __________, a ich walutą jest __________.",
    "options": null,
    "altAnswers": [
      [
        "Nowe Delhi"
      ],
      [
        "rupia indyjska",
        "rupia",
        "INR"
      ]
    ],
    "answer": [
      "Nowe Delhi",
      "rupia indyjska"
    ],
    "explanation": "Stolicą Indii jest Nowe Delhi, a walutą rupia indyjska (INR)."
  },
  {
    "id": "R05_SPO_05",
    "section": "Ludność i konflikty Azji",
    "type": "riddle",
    "prompt": "Jak nazywa się organizacja zrzeszająca państwa produkujące i eksportujące ropę naftową?",
    "options": null,
    "altAnswers": [
      "OPEC"
    ],
    "answer": "OPEC",
    "explanation": "Wiele państw należących do OPEC znajduje się na Bliskim Wschodzie.",
    "image": "r05_wydobycie_ropy_pustynia.jpg"
  },
  {
    "id": "R05_SPO_06",
    "section": "Ludność i konflikty Azji",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo położone poza Bliskim Wschodem: Iran, Jordania, Oman, Japonia.",
    "options": null,
    "answer": "Japonia",
    "explanation": "Iran, Jordania i Oman leżą na Bliskim Wschodzie, a Japonia w Azji Wschodniej."
  },
  {
    "id": "R05_SPO_07",
    "section": "Ludność i konflikty Azji",
    "type": "scenario",
    "prompt": "W indyjskim mieście na sąsiadujących ulicach wznoszą się luksusowe biurowce i dzielnice z domami z prowizorycznych materiałów, z utrudnionym dostępem do wody. Jak nazywają się takie dzielnice nędzy?",
    "options": [
      "Slamsy",
      "Luksusowe osiedla",
      "Dzielnice finansowe",
      "Osiedla willowe",
      "Dzielnice biurowe",
      "Dzielnice przemysłowe"
    ],
    "answer": 0,
    "explanation": "Slamsy w miastach Indii wiążą się z przeludnieniem, migracją ze wsi i trudnymi warunkami mieszkaniowymi.",
    "image": "r05_kontrast_dzielnic_indii.jpg"
  },
  {
    "id": "R05_SPO_08",
    "section": "Ludność i konflikty Azji",
    "type": "match",
    "prompt": "Połącz konflikty Bliskiego Wschodu z właściwymi wydarzeniami.",
    "options": null,
    "left": [
      "Wojna w Zatoce Perskiej",
      "Wiosna arabska",
      "Wojna domowa w Syrii"
    ],
    "right": [
      "walki i wielka fala migracji",
      "zajęcie Kuwejtu przez Irak",
      "protesty i dążenia do zmiany władzy"
    ],
    "answer": {
      "Wojna w Zatoce Perskiej": "zajęcie Kuwejtu przez Irak",
      "Wiosna arabska": "protesty i dążenia do zmiany władzy",
      "Wojna domowa w Syrii": "walki i wielka fala migracji"
    },
    "explanation": "Konflikty na Bliskim Wschodzie mają różne przyczyny i konsekwencje, m.in. przemoc, migracje oraz zniszczenia."
  },
  {
    "id": "R05_SPO_09",
    "section": "Ludność i konflikty Azji",
    "type": "sort",
    "prompt": "Przyporządkuj cechy gospodarcze do właściwych krajów.",
    "options": null,
    "items": [
      "zielona rewolucja w rolnictwie",
      "duży import surowców mineralnych",
      "Nizina Chińska jako obszar intensywnego rolnictwa",
      "silny przemysł precyzyjny",
      "Indyjska Dolina Krzemowa w Bengalurze",
      "światowy lider wartości eksportu towarów"
    ],
    "categories": [
      "Japonia",
      "Chiny",
      "Indie"
    ],
    "answer": {
      "Japonia": [
        "silny przemysł precyzyjny",
        "duży import surowców mineralnych"
      ],
      "Chiny": [
        "światowy lider wartości eksportu towarów",
        "Nizina Chińska jako obszar intensywnego rolnictwa"
      ],
      "Indie": [
        "Indyjska Dolina Krzemowa w Bengalurze",
        "zielona rewolucja w rolnictwie"
      ]
    },
    "explanation": "Rozwój gospodarczy Japonii, Chin i Indii opiera się w różnym stopniu na innowacjach, przemyśle i rolnictwie."
  },
  {
    "id": "R05_SPO_10",
    "section": "Ludność i konflikty Azji",
    "type": "single_choice",
    "prompt": "Jak nazywa się święta księga islamu?",
    "options": [
      "Koran",
      "Biblia",
      "Tora",
      "Wedy",
      "Tipitaka",
      "Bhagawadgita"
    ],
    "answer": 0,
    "explanation": "Koran wpływa na praktyki religijne i część zasad życia społecznego w krajach muzułmańskich."
  },
  {
    "id": "R05_AFR_01",
    "section": "Środowisko przyrodnicze Afryki",
    "type": "single_choice",
    "prompt": "Jaka jest powierzchnia Afryki?",
    "options": [
      "30,4 mln km²",
      "44,4 mln km²",
      "17,1 mln km²",
      "3,3 mln km²",
      "1,1 mln km²",
      "9,6 mln km²"
    ],
    "answer": 0,
    "explanation": "Afryka ma powierzchnię około 30,4 mln km² i jest drugim co do wielkości kontynentem."
  },
  {
    "id": "R05_AFR_02",
    "section": "Środowisko przyrodnicze Afryki",
    "type": "multi_select",
    "prompt": "Które z wymienionych form rzeźby leżą w Afryce?",
    "options": [
      "Wyżyna Abisyńska",
      "Góry Smocze",
      "Atlas",
      "Kotlina Konga",
      "Karakorum",
      "Nizina Zachodniosyberyjska"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Atlas, Góry Smocze, Wyżyna Abisyńska i Kotlina Konga znajdują się w Afryce; Karakorum i Nizina Zachodniosyberyjska leżą w Azji."
  },
  {
    "id": "R05_AFR_03",
    "section": "Środowisko przyrodnicze Afryki",
    "type": "true_false",
    "prompt": "W rejonie Wielkich Rowów Afrykańskich fragmenty płyty afrykańskiej oddalają się od siebie.",
    "options": null,
    "answer": true,
    "explanation": "Wielkie Rowy Afrykańskie są obszarem rozrywania płyty i powstawania wydłużonych obniżeń, często zajętych przez jeziora."
  },
  {
    "id": "R05_AFR_04",
    "section": "Środowisko przyrodnicze Afryki",
    "type": "fill_in",
    "prompt": "Najwyższy szczyt Afryki to __________ w masywie Kilimandżaro.",
    "options": null,
    "altAnswers": [
      [
        "Kibo"
      ]
    ],
    "answer": [
      "Kibo"
    ],
    "explanation": "Szczyt Kibo osiąga wysokość 5895 m n.p.m."
  },
  {
    "id": "R05_AFR_05",
    "section": "Środowisko przyrodnicze Afryki",
    "type": "riddle",
    "prompt": "Jak nazywa się sucha dolina rzeczna na obszarze pustynnym, którą po deszczu może popłynąć woda?",
    "options": null,
    "altAnswers": [
      "wadi"
    ],
    "answer": "wadi",
    "explanation": "Wadi są dolinami związanymi z rzekami epizodycznymi, pojawiającymi się po rzadkich ulewach.",
    "image": "r05_wyschniete_wadi.jpg"
  },
  {
    "id": "R05_AFR_06",
    "section": "Środowisko przyrodnicze Afryki",
    "type": "odd_one_out",
    "prompt": "Wskaż element niebędący rzeką Afryki: Nil, Kongo, Sahara, Tana.",
    "options": null,
    "answer": "Sahara",
    "explanation": "Nil, Kongo i Tana są rzekami Afryki, a Sahara jest pustynią."
  },
  {
    "id": "R05_AFR_07",
    "section": "Środowisko przyrodnicze Afryki",
    "type": "scenario",
    "prompt": "Na obszarze blisko równika silnie ogrzane i wilgotne powietrze unosi się, ochładza, a para wodna skrapla się w chmury. Jakie zjawisko jest typowym skutkiem tego procesu?",
    "options": [
      "Deszcze zenitalne",
      "Opady związane z monsunem letnim",
      "Opady zimowe",
      "Opady związane z tajfunami",
      "Opady orograficzne",
      "Mżawki nadmorskie"
    ],
    "answer": 0,
    "explanation": "Niskie ciśnienie i unoszenie się wilgotnego powietrza nad równikiem sprzyjają obfitym opadom zenitalnym.",
    "image": "r05_las_rownikowy_deszcz.jpg"
  },
  {
    "id": "R05_AFR_08",
    "section": "Środowisko przyrodnicze Afryki",
    "type": "match",
    "prompt": "Połącz strefy klimatyczne Afryki z typową roślinnością.",
    "options": null,
    "left": [
      "równikowy wilgotny",
      "podrównikowy",
      "zwrotnikowy suchy",
      "podzwrotnikowy morski"
    ],
    "right": [
      "pustynia",
      "roślinność śródziemnomorska",
      "wilgotny las równikowy",
      "sawanna"
    ],
    "answer": {
      "równikowy wilgotny": "wilgotny las równikowy",
      "podrównikowy": "sawanna",
      "zwrotnikowy suchy": "pustynia",
      "podzwrotnikowy morski": "roślinność śródziemnomorska"
    },
    "explanation": "W Afryce roślinność układa się strefowo zgodnie ze zmianami temperatur i opadów.",
    "image": "r05_sawanna_drzwostan.jpg"
  },
  {
    "id": "R05_AFR_09",
    "section": "Środowisko przyrodnicze Afryki",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do obszarów równikowych i zwrotnikowych Afryki.",
    "options": null,
    "items": [
      "małe sumy opadów",
      "niż baryczny",
      "rzeki epizodyczne",
      "gęsta sieć rzeczna",
      "wyż baryczny",
      "częste obfite opady"
    ],
    "categories": [
      "W pobliżu równika",
      "W pobliżu zwrotników"
    ],
    "answer": {
      "W pobliżu równika": [
        "niż baryczny",
        "częste obfite opady",
        "gęsta sieć rzeczna"
      ],
      "W pobliżu zwrotników": [
        "wyż baryczny",
        "małe sumy opadów",
        "rzeki epizodyczne"
      ]
    },
    "explanation": "W pobliżu równika dominuje wilgotne powietrze unoszące się w niżu; przy zwrotnikach suche powietrze wyżowe."
  },
  {
    "id": "R05_AFR_10",
    "section": "Środowisko przyrodnicze Afryki",
    "type": "sequence",
    "prompt": "Ułóż kolejne etapy powstawania deszczu zenitalnego.",
    "options": null,
    "items": [
      "Ochładzanie wznoszącego się powietrza",
      "Obfity deszcz",
      "Silne ogrzewanie wilgotnego powietrza",
      "Skraplanie pary wodnej"
    ],
    "answer": [
      "Silne ogrzewanie wilgotnego powietrza",
      "Ochładzanie wznoszącego się powietrza",
      "Skraplanie pary wodnej",
      "Obfity deszcz"
    ],
    "explanation": "W wyniku nagrzewania powietrze unosi się i ochładza, co powoduje kondensację pary wodnej i deszcz."
  },
  {
    "id": "R05_ROL_01",
    "section": "Rolnictwo i gospodarka Afryki",
    "type": "single_choice",
    "prompt": "Gdzie leży Sahel?",
    "options": [
      "Na południowych obrzeżach Sahary",
      "W centrum wilgotnych lasów równikowych",
      "Na północ od Morza Śródziemnego",
      "Na wyspach Japonii",
      "Na Półwyspie Indyjskim",
      "Na wybrzeżach Oceanu Arktycznego"
    ],
    "answer": 0,
    "explanation": "Sahel jest pasem gorącego i suchego klimatu na południe od Sahary."
  },
  {
    "id": "R05_ROL_02",
    "section": "Rolnictwo i gospodarka Afryki",
    "type": "multi_select",
    "prompt": "Które procesy sprzyjają pustynnieniu Sahelu?",
    "options": [
      "Długotrwałe susze",
      "Usuwanie osłony trawiastej",
      "Erozja wietrzna i wodna",
      "Nadmierne wykorzystanie ziemi uprawnej",
      "Regularne wielomiesięczne opady przez cały rok",
      "Trwała pokrywa lodowa"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Pustynnienie nasila się, gdy susze i nadmierne użytkowanie gruntów powodują utratę roślinności i degradację gleby.",
    "image": "r05_sucha_ziemia_sahel.jpg"
  },
  {
    "id": "R05_ROL_03",
    "section": "Rolnictwo i gospodarka Afryki",
    "type": "true_false",
    "prompt": "Pasterstwo koczownicze w Sahelu wiąże się z sezonową dostępnością pastwisk.",
    "options": null,
    "answer": true,
    "explanation": "Pasterze wędrują w poszukiwaniu traw odrastających podczas krótkiej pory deszczowej.",
    "image": "r05_wedrowka_pasterzy.jpg"
  },
  {
    "id": "R05_ROL_04",
    "section": "Rolnictwo i gospodarka Afryki",
    "type": "fill_in",
    "prompt": "Pasterstwo koczownicze nosi także nazwę __________.",
    "options": null,
    "altAnswers": [
      [
        "nomadyzm",
        "nomadyzmu"
      ]
    ],
    "answer": [
      "nomadyzm"
    ],
    "explanation": "Nomadyzm jest inną nazwą pasterstwa koczowniczego."
  },
  {
    "id": "R05_ROL_05",
    "section": "Rolnictwo i gospodarka Afryki",
    "type": "riddle",
    "prompt": "Jak nazywa się wieloletnia uprawa jednego gatunku rośliny na tym samym obszarze?",
    "options": null,
    "altAnswers": [
      "monokultura",
      "monokultury"
    ],
    "answer": "monokultura",
    "explanation": "Uprawy monokulturowe na plantacjach mogą z czasem obniżać żyzność gleby."
  },
  {
    "id": "R05_ROL_06",
    "section": "Rolnictwo i gospodarka Afryki",
    "type": "odd_one_out",
    "prompt": "Wskaż surowiec mineralny, który nie jest produktem plantacji: kawa, kakao, bawełna, węgiel kamienny.",
    "options": null,
    "answer": "węgiel kamienny",
    "explanation": "Kawa, kakao i bawełna są uprawiane na plantacjach; węgiel kamienny to surowiec mineralny.",
    "image": "r05_plantacja_kakao.jpg"
  },
  {
    "id": "R05_ROL_07",
    "section": "Rolnictwo i gospodarka Afryki",
    "type": "scenario",
    "prompt": "Rolnik wypala fragment lasu, uprawia go kilka lat, a gdy ziemia traci żyzność, porzuca pole na dłuższy czas i przechodzi na kolejny fragment. Jaki system gospodarowania stosuje?",
    "options": [
      "Rolnictwo żarowo-odłogowe",
      "Rolnictwo plantacyjne",
      "Uprawę ryżu na polach zalewowych",
      "Rolnictwo wielkoobszarowe",
      "Rolnictwo silnie zmechanizowane",
      "Rolnictwo stale nawadniane"
    ],
    "answer": 0,
    "explanation": "W gospodarce żarowo-odłogowej nowy teren pozyskuje się przez wypalanie, a wyjałowiony fragment pozostawia odłogiem.",
    "image": "r05_pole_wypalane_odlog.jpg"
  },
  {
    "id": "R05_ROL_08",
    "section": "Rolnictwo i gospodarka Afryki",
    "type": "match",
    "prompt": "Połącz formy gospodarowania w Afryce z ich charakterystycznymi cechami.",
    "options": null,
    "left": [
      "rolnictwo żarowo-odłogowe",
      "rolnictwo plantacyjne",
      "pasterstwo koczownicze"
    ],
    "right": [
      "przemieszczanie stad między pastwiskami",
      "duże nakłady finansowe i produkcja na eksport",
      "wypalanie i okresowy odłóg"
    ],
    "answer": {
      "rolnictwo żarowo-odłogowe": "wypalanie i okresowy odłóg",
      "rolnictwo plantacyjne": "duże nakłady finansowe i produkcja na eksport",
      "pasterstwo koczownicze": "przemieszczanie stad między pastwiskami"
    },
    "explanation": "Systemy gospodarowania różnią się przeznaczeniem produkcji i sposobem użytkowania ziemi."
  },
  {
    "id": "R05_ROL_09",
    "section": "Rolnictwo i gospodarka Afryki",
    "type": "sort",
    "prompt": "Rozdziel cechy dwóch typów rolnictwa w Afryce Zachodniej.",
    "options": null,
    "items": [
      "odłogowanie po utracie żyzności",
      "duże inwestycje i nawożenie",
      "produkcja głównie na własne potrzeby",
      "wielkoobszarowe monokultury",
      "niewielkie nakłady środków",
      "produkcja przede wszystkim na eksport"
    ],
    "categories": [
      "Rolnictwo żarowo-odłogowe",
      "Rolnictwo plantacyjne"
    ],
    "answer": {
      "Rolnictwo żarowo-odłogowe": [
        "produkcja głównie na własne potrzeby",
        "odłogowanie po utracie żyzności",
        "niewielkie nakłady środków"
      ],
      "Rolnictwo plantacyjne": [
        "produkcja przede wszystkim na eksport",
        "duże inwestycje i nawożenie",
        "wielkoobszarowe monokultury"
      ]
    },
    "explanation": "Rolnictwo żarowo-odłogowe jest ekstensywne, a plantacyjne intensywne i nastawione głównie na eksport."
  },
  {
    "id": "R05_ROL_10",
    "section": "Rolnictwo i gospodarka Afryki",
    "type": "sequence",
    "prompt": "Ułóż typowy przebieg rolnictwa żarowo-odłogowego.",
    "options": null,
    "items": [
      "Pozostawienie wyjałowionej ziemi odłogiem",
      "Wypalenie fragmentu lasu",
      "Uprawa pola przez kilka lat",
      "Założenie upraw na nowym fragmencie lasu"
    ],
    "answer": [
      "Wypalenie fragmentu lasu",
      "Uprawa pola przez kilka lat",
      "Pozostawienie wyjałowionej ziemi odłogiem",
      "Założenie upraw na nowym fragmencie lasu"
    ],
    "explanation": "Rolnicy najpierw przygotowują pole ogniem, wykorzystują je do wyjałowienia, a następnie przenoszą uprawę w inne miejsce."
  },
  {
    "id": "R05_PRO_01",
    "section": "Problemy społeczne i turystyka Afryki",
    "type": "single_choice",
    "prompt": "Jakie miasto jest stolicą Etiopii?",
    "options": [
      "Nairobi",
      "Addis Abeba",
      "Kair",
      "Mombasa",
      "Pekin",
      "Nowe Delhi"
    ],
    "answer": 1,
    "explanation": "Addis Abeba jest stolicą Etiopii."
  },
  {
    "id": "R05_PRO_02",
    "section": "Problemy społeczne i turystyka Afryki",
    "type": "multi_select",
    "prompt": "Wskaż przyczyny głodu i niedożywienia w Etiopii.",
    "options": [
      "Powtarzające się susze",
      "Niskie nakłady na rolnictwo",
      "Konflikty zbrojne",
      "Plagi szarańczy",
      "Nadmierne opady przez cały rok",
      "Brak potrzeby używania wody w rolnictwie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Przyczyny niedożywienia mają charakter zarówno naturalny, jak i społeczno-gospodarczy.",
    "image": "r05_susza_spekana_ziemia.jpg"
  },
  {
    "id": "R05_PRO_03",
    "section": "Problemy społeczne i turystyka Afryki",
    "type": "true_false",
    "prompt": "Niedożywienie może obniżać zdolność uczenia się.",
    "options": null,
    "answer": true,
    "explanation": "Niedobory składników odżywczych osłabiają sprawność fizyczną i umysłową oraz zwiększają ryzyko chorób."
  },
  {
    "id": "R05_PRO_04",
    "section": "Problemy społeczne i turystyka Afryki",
    "type": "fill_in",
    "prompt": "Stolicą Kenii jest __________, a jednym z jej języków urzędowych jest __________.",
    "options": null,
    "altAnswers": [
      [
        "Nairobi"
      ],
      [
        "suahili",
        "swahili"
      ]
    ],
    "answer": [
      "Nairobi",
      "suahili"
    ],
    "explanation": "Nairobi jest stolicą Kenii, a suahili i angielski to języki urzędowe tego kraju."
  },
  {
    "id": "R05_PRO_05",
    "section": "Problemy społeczne i turystyka Afryki",
    "type": "riddle",
    "prompt": "Jak nazywa się forma turystyki w Kenii polegająca na obserwowaniu dzikich zwierząt w ich środowisku?",
    "options": null,
    "altAnswers": [
      "safari"
    ],
    "answer": "safari",
    "explanation": "W parkach i rezerwatach Kenii można podczas safari oglądać np. lwy, żyrafy, zebry i słonie."
  },
  {
    "id": "R05_PRO_06",
    "section": "Problemy społeczne i turystyka Afryki",
    "type": "odd_one_out",
    "prompt": "Wskaż grupę, która nie należy do społeczności etnicznych Kenii: Masajowie, Isukha, Idakho, Japończycy.",
    "options": null,
    "answer": "Japończycy",
    "explanation": "Masajowie, Isukha i Idakho zostali przedstawieni jako ludy Kenii; Japończycy to naród związany z Japonią."
  },
  {
    "id": "R05_PRO_07",
    "section": "Problemy społeczne i turystyka Afryki",
    "type": "scenario",
    "prompt": "Turyści odwiedzają sawannę i chcą obserwować lwy, słonie, zebry i żyrafy w chronionym obszarze. Który walor Kenii wykorzystują przede wszystkim?",
    "options": [
      "Przyrodniczy",
      "Historyczny",
      "Architektoniczny",
      "Kulturowy",
      "Religijny",
      "Techniczny"
    ],
    "answer": 0,
    "explanation": "Parki narodowe, rezerwaty i bogata fauna są ważnymi walorami przyrodniczymi Kenii.",
    "image": "r05_safari_na_sawannie.jpg"
  },
  {
    "id": "R05_PRO_08",
    "section": "Problemy społeczne i turystyka Afryki",
    "type": "match",
    "prompt": "Połącz obiekty i społeczności Kenii z odpowiednimi charakterystykami.",
    "options": null,
    "left": [
      "Fort Jesus",
      "Masajowie",
      "Masai Mara"
    ],
    "right": [
      "rezerwat znany z dzikich zwierząt",
      "zabytek w Mombasie",
      "społeczność związana z półkoczowniczym pasterstwem"
    ],
    "answer": {
      "Fort Jesus": "zabytek w Mombasie",
      "Masajowie": "społeczność związana z półkoczowniczym pasterstwem",
      "Masai Mara": "rezerwat znany z dzikich zwierząt"
    },
    "explanation": "Dziedzictwo kulturowe i przyrodnicze Kenii stanowi podstawę jej atrakcyjności turystycznej."
  },
  {
    "id": "R05_PRO_09",
    "section": "Problemy społeczne i turystyka Afryki",
    "type": "sort",
    "prompt": "Przyporządkuj wskazane walory turystyczne Kenii do przyrodniczych i kulturowych.",
    "options": null,
    "items": [
      "tradycyjne tańce Isukha i Idakho",
      "rafy koralowe",
      "Fort Jesus w Mombasie",
      "zwierzęta sawanny",
      "dawne miasto Lamu",
      "góry wulkaniczne"
    ],
    "categories": [
      "Walory przyrodnicze",
      "Walory kulturowe"
    ],
    "answer": {
      "Walory przyrodnicze": [
        "rafy koralowe",
        "zwierzęta sawanny",
        "góry wulkaniczne"
      ],
      "Walory kulturowe": [
        "Fort Jesus w Mombasie",
        "tradycyjne tańce Isukha i Idakho",
        "dawne miasto Lamu"
      ]
    },
    "explanation": "Rzeźba terenu, przyroda i fauna to walory naturalne; zabytki i tradycje to walory kulturowe."
  },
  {
    "id": "R05_PRO_10",
    "section": "Problemy społeczne i turystyka Afryki",
    "type": "single_choice",
    "prompt": "Który skutek głodu i niedożywienia może występować w Etiopii?",
    "options": [
      "Osłabienie organizmu i wzrost ryzyka chorób",
      "Poprawa wzroku",
      "Lepsza zdolność koncentracji",
      "Wyższa sprawność fizyczna",
      "Zmniejszenie ryzyka anemii",
      "Wzmocnienie odporności"
    ],
    "answer": 0,
    "explanation": "Niedożywienie wywołuje osłabienie, problemy z nauką i liczne dolegliwości zdrowotne."
  },
  {
    "id": "R05_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaką głębokość ma Rów Mariański?",
    "options": [
      "8848 m",
      "10 916 m",
      "5895 m",
      "4450 m",
      "5139 m",
      "430 m"
    ],
    "answer": 1,
    "explanation": "Głębokość Rowu Mariańskiego wynosi około 10 916 m poniżej poziomu morza."
  },
  {
    "id": "R05_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które dane liczbowe dotyczące produkcji ryżu w 2018 roku są poprawne?",
    "options": [
      "Chiny – 27% produkcji światowej",
      "Indie – 22% produkcji światowej",
      "Indonezja – 11% produkcji światowej",
      "Bangladesz – 7% produkcji światowej",
      "Wietnam – 22% produkcji światowej",
      "Tajlandia – 27% produkcji światowej"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W 2018 roku udział w światowej produkcji ryżu wynosił: Chiny 27%, Indie 22%, Indonezja 11%, Bangladesz 7%."
  },
  {
    "id": "R05_HARD_03",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "W rejonie Zatoki Perskiej znajduje się około 48% światowych złóż ropy naftowej i 40% złóż gazu ziemnego.",
    "options": null,
    "answer": true,
    "explanation": "W rejonie Zatoki Perskiej znajduje się około 48% światowych złóż ropy naftowej i 40% złóż gazu ziemnego."
  },
  {
    "id": "R05_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Roczna suma opadów w Sahelu wynosi około __________–__________ mm.",
    "options": null,
    "altAnswers": [
      [
        "200",
        "200 mm"
      ],
      [
        "500",
        "500 mm"
      ]
    ],
    "answer": [
      "200",
      "500"
    ],
    "explanation": "Roczna suma opadów w Sahelu wynosi około 200–500 mm."
  },
  {
    "id": "R05_HARD_05",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się najwyższy szczyt Wyżyny Abisyńskiej o wysokości 4450 m n.p.m.?",
    "options": null,
    "altAnswers": [
      "Ras Daszan",
      "Ras Dashen"
    ],
    "answer": "Ras Daszan",
    "explanation": "Ras Daszan jest najwyższym szczytem Wyżyny Abisyńskiej."
  },
  {
    "id": "R05_HARD_06",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż rzekę, której wody odpływają do innego oceanu niż pozostałe: Jangcy, Mekong, Amur, Indygirka.",
    "options": null,
    "answer": "Indygirka",
    "explanation": "Jangcy, Mekong i Amur należą do zlewiska Oceanu Spokojnego, a Indygirka do Oceanu Arktycznego."
  },
  {
    "id": "R05_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Badacz zauważa, że obszar we wnętrzu Azji, położony za Himalajami, otrzymuje mniej niż 50 mm opadów rocznie. Która kotlina słynie z tak wyjątkowo suchego klimatu?",
    "options": [
      "Kotlina Turfańska",
      "Kotlina Konga",
      "Kotlina Czadu",
      "Kotlina Dżungarska",
      "Kotlina Kaszgarska"
    ],
    "answer": 0,
    "explanation": "Kotlina Turfańska charakteryzuje się roczną sumą opadów często nieprzekraczającą 50 mm."
  },
  {
    "id": "R05_HARD_08",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz wartości liczbowe z właściwymi obiektami lub państwami.",
    "options": null,
    "left": [
      "Kibo (wysokość)",
      "Batian (wysokość)",
      "Rów Mariański (głębokość)",
      "Ras Daszan (wysokość)"
    ],
    "right": [
      "10 916 m",
      "4450 m",
      "5895 m",
      "5139 m"
    ],
    "answer": {
      "Kibo (wysokość)": "5895 m",
      "Batian (wysokość)": "5139 m",
      "Rów Mariański (głębokość)": "10 916 m",
      "Ras Daszan (wysokość)": "4450 m"
    },
    "explanation": "Kibo to najwyższy szczyt Afryki, Batian leży w masywie Kenia, a Ras Daszan w Etiopii; Rów Mariański jest najgłębszym rowem oceanicznym."
  },
  {
    "id": "R05_HARD_09",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj rzeki Azji do trzech oceanów.",
    "options": null,
    "items": [
      "Huang He",
      "Ob",
      "Brahmaputra",
      "Jenisej",
      "Irawadi",
      "Mekong"
    ],
    "categories": [
      "Ocean Indyjski",
      "Ocean Spokojny",
      "Ocean Arktyczny"
    ],
    "answer": {
      "Ocean Indyjski": [
        "Brahmaputra",
        "Irawadi"
      ],
      "Ocean Spokojny": [
        "Huang He",
        "Mekong"
      ],
      "Ocean Arktyczny": [
        "Ob",
        "Jenisej"
      ]
    },
    "explanation": "Rzeki Azji odprowadzają wody m.in. do Oceanów Indyjskiego, Spokojnego i Arktycznego."
  },
  {
    "id": "R05_HARD_10",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Koniec polityki jednego dziecka w Chinach (2015)",
      "Wojna iracko-irańska (lata 80. XX wieku)",
      "Katastrofa w Fukushimie po tsunami (2011)",
      "Wprowadzenie polityki jednego dziecka w Chinach (lata 70. XX wieku)"
    ],
    "answer": [
      "Wprowadzenie polityki jednego dziecka w Chinach (lata 70. XX wieku)",
      "Wojna iracko-irańska (lata 80. XX wieku)",
      "Katastrofa w Fukushimie po tsunami (2011)",
      "Koniec polityki jednego dziecka w Chinach (2015)"
    ],
    "explanation": "W porządku chronologicznym występują: wydarzenia z lat 70. XX wieku, konflikt z lat 80. XX wieku, tsunami w 2011 roku i koniec polityki jednego dziecka w 2015 roku."
  },
  {
    "id": "R05_HARD_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który szczyt o wysokości 5139 m n.p.m. jest drugim co do wysokości szczytem Afryki?",
    "options": [
      "Batian",
      "Kibo",
      "Fudżi",
      "Ras Daszan",
      "Elgon",
      "Mount Everest"
    ],
    "answer": 0,
    "explanation": "Batian w masywie Kenia jest drugim pod względem wysokości szczytem Afryki."
  },
  {
    "id": "R05_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które informacje o Etiopii są poprawne?",
    "options": [
      "Stolica – Addis Abeba",
      "Waluta – birr",
      "PKB na osobę w 2021 r. – 974 USD",
      "Ludność w 2021 r. – 118,3 mln",
      "Stolica – Nairobi",
      "Waluta – jen"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Stolicą Etiopii jest Addis Abeba, walutą birr, a w 2021 roku liczba ludności wynosiła około 118,3 mln, przy PKB na osobę około 974 USD."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r05",
  number: 5,
  title: "Azja i Afryka — wybrane problemy i regiony geograficzne",
  icon: "🌍",
  sectionOrder: [
  "Środowisko przyrodnicze Azji",
  "Monsuny i gospodarka Azji",
  "Ludność i konflikty Azji",
  "Środowisko przyrodnicze Afryki",
  "Rolnictwo i gospodarka Afryki",
  "Problemy społeczne i turystyka Afryki"
],
  sectionIcons: {
  "Środowisko przyrodnicze Azji": "🏔️",
  "Monsuny i gospodarka Azji": "🌾",
  "Ludność i konflikty Azji": "🏙️",
  "Środowisko przyrodnicze Afryki": "🌍",
  "Rolnictwo i gospodarka Afryki": "🌱",
  "Problemy społeczne i turystyka Afryki": "🦁"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
