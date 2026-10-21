// Skróty sekcji (do identyfikatorów ćwiczeń):
//   POLO = Europa: położenie i integracja
//   KLIM = Islandia i klimat Europy
//   LUD = Ludność, migracje i miasta
//   GOSP = Energetyka i gospodarka
//   TUR = Turystyka Europy
//   SAS = Sąsiedzi Polski
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R03_POLO_01",
    "section": "Europa: położenie i integracja",
    "type": "single_choice",
    "prompt": "Który ocean oblewa Europę od zachodu?",
    "explanation": "Od zachodu Europę oblewa Ocean Atlantycki, od północy Ocean Arktyczny.",
    "options": [
      "Ocean Atlantycki",
      "Ocean Arktyczny",
      "Ocean Indyjski",
      "Ocean Spokojny",
      "Ocean Południowy",
      "Morze Kaspijskie"
    ],
    "answer": 0,
    "image": "r03_wybrzeze_klify_i_zatoka.jpg"
  },
  {
    "id": "R03_POLO_02",
    "section": "Europa: położenie i integracja",
    "type": "multi_select",
    "prompt": "Wskaż półwyspy Europy.",
    "explanation": "Półwyspy Skandynawski, Iberyjski, Apeniński i Bałkański leżą w Europie. Islandia i Sycylia są wyspami.",
    "options": [
      "Półwysep Skandynawski",
      "Islandia",
      "Półwysep Iberyjski",
      "Półwysep Apeniński",
      "Sycylia",
      "Półwysep Bałkański"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "image": "r03_wybrzeze_klify_i_zatoka.jpg"
  },
  {
    "id": "R03_POLO_03",
    "section": "Europa: położenie i integracja",
    "type": "true_false",
    "prompt": "Największym jeziorem Europy jest Ładoga.",
    "explanation": "Największe jezioro Europy to Ładoga, położona w Rosji.",
    "options": null,
    "answer": true
  },
  {
    "id": "R03_POLO_04",
    "section": "Europa: położenie i integracja",
    "type": "match",
    "prompt": "Dopasuj akwen do jego położenia względem Europy.",
    "explanation": "Atlantyk oblewa Europę od zachodu, Ocean Arktyczny od północy, a Morze Śródziemne od południa.",
    "options": null,
    "answer": {
      "Ocean Atlantycki": "zachód",
      "Ocean Arktyczny": "północ",
      "Morze Śródziemne": "południe"
    },
    "left": [
      "Ocean Atlantycki",
      "Ocean Arktyczny",
      "Morze Śródziemne"
    ],
    "right": [
      "południe",
      "zachód",
      "północ"
    ]
  },
  {
    "id": "R03_POLO_05",
    "section": "Europa: położenie i integracja",
    "type": "odd_one_out",
    "prompt": "Wskaż obiekt o innym rodzaju ukształtowania linii brzegowej: Kreta, Sardynia, Korsyka, Półwysep Iberyjski.",
    "explanation": "Kreta, Sardynia i Korsyka są wyspami, a Półwysep Iberyjski jest półwyspem.",
    "options": null,
    "answer": "Półwysep Iberyjski"
  },
  {
    "id": "R03_POLO_06",
    "section": "Europa: położenie i integracja",
    "type": "fill_in",
    "prompt": "Polska przystąpiła do Unii Europejskiej 1 maja __________ roku.",
    "explanation": "Polska przystąpiła do Unii Europejskiej 1 maja 2004 roku.",
    "options": null,
    "answer": [
      "2004"
    ],
    "image": "r03_symbole_unii_europejskiej.jpg",
    "altAnswers": [
      [
        "2004",
        "2004 r."
      ]
    ]
  },
  {
    "id": "R03_POLO_07",
    "section": "Europa: położenie i integracja",
    "type": "scenario",
    "prompt": "Podróżnik odwiedza najmniejsze pod względem powierzchni i liczby ludności państwo Europy. Do jakiego państwa dotarł?",
    "explanation": "Najmniejszym powierzchniowo i ludnościowo państwem Europy jest Watykan.",
    "options": [
      "Monako",
      "San Marino",
      "Watykan",
      "Malta",
      "Andora",
      "Liechtenstein"
    ],
    "answer": 2
  },
  {
    "id": "R03_POLO_08",
    "section": "Europa: położenie i integracja",
    "type": "single_choice",
    "prompt": "Która instytucja Unii Europejskiej pełni funkcję organu wykonawczego odpowiedzialnego za prowadzenie bieżącej polityki UE?",
    "explanation": "Komisja Europejska pełni funkcję wykonawczą w Unii Europejskiej.",
    "options": [
      "Rada Unii Europejskiej",
      "Parlament Europejski",
      "Trybunał Sprawiedliwości UE",
      "Komisja Europejska",
      "Rada Europejska"
    ],
    "answer": 3,
    "image": "r03_symbole_unii_europejskiej.jpg"
  },
  {
    "id": "R03_POLO_09",
    "section": "Europa: położenie i integracja",
    "type": "sort",
    "prompt": "Przyporządkuj obiekty do wysp albo półwyspów.",
    "explanation": "Islandia, Kreta i Sycylia są wyspami, natomiast Półwyspy Skandynawski, Apeniński i Bałkański są półwyspami.",
    "options": null,
    "answer": {
      "wyspy": [
        "Islandia",
        "Kreta",
        "Sycylia"
      ],
      "półwyspy": [
        "Półwysep Skandynawski",
        "Półwysep Apeniński",
        "Półwysep Bałkański"
      ]
    },
    "items": [
      "Półwysep Apeniński",
      "Kreta",
      "Półwysep Skandynawski",
      "Islandia",
      "Półwysep Bałkański",
      "Sycylia"
    ],
    "categories": [
      "wyspy",
      "półwyspy"
    ]
  },
  {
    "id": "R03_POLO_10",
    "section": "Europa: położenie i integracja",
    "type": "riddle",
    "prompt": "Jak nazywa się szczyt Alp o wysokości około 4803 m n.p.m.?",
    "explanation": "Mont Blanc jest szczytem Alp o wysokości około 4803 m n.p.m.",
    "options": null,
    "answer": "Mont Blanc",
    "altAnswers": [
      "Mont Blanc",
      "mont blanc"
    ]
  },
  {
    "id": "R03_KLIM_01",
    "section": "Islandia i klimat Europy",
    "type": "single_choice",
    "prompt": "Na granicy których płyt litosfery leży Islandia?",
    "explanation": "Islandia leży między płytami Północnoamerykańską i Eurazjatycką.",
    "options": [
      "Afrykańskiej i Eurazjatyckiej",
      "Północnoamerykańskiej i Eurazjatyckiej",
      "Pacyficznej i Antarktycznej",
      "Indo-Australijskiej i Afrykańskiej",
      "Południowoamerykańskiej i Nazca"
    ],
    "answer": 1,
    "image": "r03_ryft_islandii.jpg"
  },
  {
    "id": "R03_KLIM_02",
    "section": "Islandia i klimat Europy",
    "type": "true_false",
    "prompt": "Na Islandii płyty litosfery oddalają się od siebie w strefie ryftowej.",
    "explanation": "Islandia leży na ryfcie Grzbietu Śródatlantyckiego, gdzie płyty się rozsuwają.",
    "options": null,
    "answer": true,
    "image": "r03_ryft_islandii.jpg"
  },
  {
    "id": "R03_KLIM_03",
    "section": "Islandia i klimat Europy",
    "type": "fill_in",
    "prompt": "Gorące źródło wyrzucające okresowo wodę i parę wodną to __________.",
    "explanation": "Gejzery występują na Islandii; gorąca woda podziemna może tam osiągać temperaturę ponad 100°C.",
    "options": null,
    "answer": [
      "gejzer"
    ],
    "image": "r03_gejzer_islandii.jpg",
    "altAnswers": [
      [
        "gejzer",
        "gejzer wodny"
      ]
    ]
  },
  {
    "id": "R03_KLIM_04",
    "section": "Islandia i klimat Europy",
    "type": "match",
    "prompt": "Dopasuj odmianę klimatu do jej typowej cechy.",
    "explanation": "Klimat morski ma małe amplitudy temperatury, kontynentalny duże, a przejściowy łączy wpływy obydwu.",
    "options": null,
    "answer": {
      "morski": "małe roczne amplitudy temperatury",
      "kontynentalny": "duże roczne amplitudy temperatury",
      "przejściowy": "nakładanie się wpływów lądu i oceanu"
    },
    "left": [
      "morski",
      "kontynentalny",
      "przejściowy"
    ],
    "right": [
      "nakładanie się wpływów lądu i oceanu",
      "duże roczne amplitudy temperatury",
      "małe roczne amplitudy temperatury"
    ]
  },
  {
    "id": "R03_KLIM_05",
    "section": "Islandia i klimat Europy",
    "type": "scenario",
    "prompt": "Mieszkaniec Europy Zachodniej zauważa, że zimy nad oceanem są łagodniejsze, a opadów jest więcej niż w głębi lądu. Jaki typ klimatu opisuje?",
    "explanation": "Klimat morski ma łagodniejsze zimy, chłodniejsze lata, większą wilgotność i małe amplitudy temperatury.",
    "options": [
      "morski",
      "kontynentalny",
      "biegunowy",
      "podzwrotnikowy suchy",
      "górski"
    ],
    "answer": 0
  },
  {
    "id": "R03_KLIM_06",
    "section": "Islandia i klimat Europy",
    "type": "multi_select",
    "prompt": "Które skutki wulkanizmu są negatywne?",
    "explanation": "Erupcje mogą niszczyć zabudowę, pył może utrudniać loty i ograniczać dopływ promieniowania słonecznego.",
    "options": [
      "niszczenie budynków i dróg",
      "powstawanie urodzajnych gleb",
      "zakłócenia ruchu lotniczego",
      "rozwój turystyki",
      "ochłodzenie spowodowane pyłami w atmosferze",
      "dostęp do gorących źródeł"
    ],
    "answer": [
      0,
      2,
      4
    ]
  },
  {
    "id": "R03_KLIM_07",
    "section": "Islandia i klimat Europy",
    "type": "odd_one_out",
    "prompt": "Wskaż materiał, który nie jest produktem erupcji wulkanicznej: lawa, gazy wulkaniczne, lapille, piasek polodowcowy.",
    "explanation": "Produkty erupcji to m.in. lawa, gazy, lapille oraz pył wulkaniczny. Piasek polodowcowy nie jest produktem erupcji.",
    "options": null,
    "answer": "piasek polodowcowy"
  },
  {
    "id": "R03_KLIM_08",
    "section": "Islandia i klimat Europy",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do klimatu morskiego lub kontynentalnego.",
    "explanation": "Wpływ oceanu ogranicza wahania temperatur i sprzyja opadom, a w głębi lądu wzrastają amplitudy temperatur.",
    "options": null,
    "answer": {
      "morski": [
        "łagodniejsze zimy",
        "większe zachmurzenie",
        "wyższe opady"
      ],
      "kontynentalny": [
        "duże amplitudy temperatur",
        "cieplejsze lata",
        "niższe opady"
      ]
    },
    "items": [
      "wyższe opady",
      "duże amplitudy temperatur",
      "łagodniejsze zimy",
      "cieplejsze lata",
      "większe zachmurzenie",
      "niższe opady"
    ],
    "categories": [
      "morski",
      "kontynentalny"
    ]
  },
  {
    "id": "R03_KLIM_09",
    "section": "Islandia i klimat Europy",
    "type": "riddle",
    "prompt": "Jak nazywa się wiecznie zielona roślinność krzewiasta typowa dla śródziemnomorskiej części Europy?",
    "explanation": "Makia to śródziemnomorska roślinność z niskimi drzewami i krzewami o twardych liściach.",
    "options": null,
    "answer": "makia",
    "image": "r03_roslinnosc_srodziemnomorska.jpg",
    "altAnswers": [
      "makia",
      "makia śródziemnomorska"
    ]
  },
  {
    "id": "R03_KLIM_10",
    "section": "Islandia i klimat Europy",
    "type": "single_choice",
    "prompt": "O ile średnio obniża się temperatura powietrza wraz ze wzrostem wysokości o 100 m?",
    "explanation": "Temperatura powietrza spada średnio o około 0,6°C na każde 100 m wzniesienia.",
    "options": [
      "0,1°C",
      "0,3°C",
      "0,6°C",
      "1,2°C",
      "2,0°C"
    ],
    "answer": 2
  },
  {
    "id": "R03_LUD_01",
    "section": "Ludność, migracje i miasta",
    "type": "single_choice",
    "prompt": "Co oznacza gęstość zaludnienia?",
    "explanation": "Gęstość zaludnienia to średnia liczba mieszkańców przypadająca na jednostkę powierzchni, zwykle 1 km².",
    "options": [
      "liczbę miast w kraju",
      "liczbę mieszkańców na 1 km²",
      "udział ludności mieszkającej w miastach",
      "średnią długość życia",
      "liczbę urodzeń rocznie"
    ],
    "answer": 1,
    "image": "r03_piramida_wieku.jpg"
  },
  {
    "id": "R03_LUD_02",
    "section": "Ludność, migracje i miasta",
    "type": "multi_select",
    "prompt": "Które czynniki sprzyjają wysokiej gęstości zaludnienia w wielu regionach Europy?",
    "explanation": "Sprzyjają jej łagodny klimat, żyzne gleby, dogodny dostęp do wybrzeży oraz rozwinięta gospodarka.",
    "options": [
      "dogodne warunki klimatyczne",
      "powszechne występowanie lodowców",
      "żyzne gleby",
      "rozwinięta gospodarka",
      "stałe zamarznięcie gruntu",
      "bliskość wybrzeży"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ]
  },
  {
    "id": "R03_LUD_03",
    "section": "Ludność, migracje i miasta",
    "type": "true_false",
    "prompt": "Starzenie się społeczeństw europejskich wynika między innymi ze spadku liczby urodzeń i wydłużania życia.",
    "explanation": "Starzenie się społeczeństw wynika m.in. z mniejszej liczby urodzeń oraz wydłużania życia dzięki poprawie opieki medycznej.",
    "options": null,
    "answer": true,
    "image": "r03_piramida_wieku.jpg"
  },
  {
    "id": "R03_LUD_04",
    "section": "Ludność, migracje i miasta",
    "type": "match",
    "prompt": "Połącz grupę językową z przykładowym narodem.",
    "explanation": "Polacy należą do ludów słowiańskich, Niemcy do germańskich, a Francuzi do romańskich.",
    "options": null,
    "answer": {
      "słowiańska": "Polacy",
      "germańska": "Niemcy",
      "romańska": "Francuzi"
    },
    "left": [
      "słowiańska",
      "germańska",
      "romańska"
    ],
    "right": [
      "Francuzi",
      "Polacy",
      "Niemcy"
    ]
  },
  {
    "id": "R03_LUD_05",
    "section": "Ludność, migracje i miasta",
    "type": "scenario",
    "prompt": "Rodzina opuszcza ojczyznę, ponieważ działania wojenne zagrażają jej życiu, i szuka schronienia za granicą. Jaki to rodzaj migracji?",
    "explanation": "Uchodźstwo wojenne jest formą migracji wymuszonej zagrożeniem życia i bezpieczeństwa.",
    "options": [
      "migracja turystyczna",
      "dojazdy do pracy",
      "migracja sezonowa",
      "migracja swobodna związana z nauką",
      "uchodźstwo wojenne"
    ],
    "answer": 4
  },
  {
    "id": "R03_LUD_06",
    "section": "Ludność, migracje i miasta",
    "type": "fill_in",
    "prompt": "Wyjazd z własnego kraju to __________, a przyjazd i osiedlenie się w innym kraju to __________.",
    "explanation": "Emigracja oznacza wyjazd z kraju, a imigracja przyjazd do kraju docelowego.",
    "options": null,
    "answer": [
      "emigracja",
      "imigracja"
    ],
    "altAnswers": [
      [
        "emigracja"
      ],
      [
        "imigracja"
      ]
    ]
  },
  {
    "id": "R03_LUD_07",
    "section": "Ludność, migracje i miasta",
    "type": "odd_one_out",
    "prompt": "Wskaż naród należący do innej grupy językowej niż pozostałe: Polacy, Ukraińcy, Rosjanie, Francuzi.",
    "explanation": "Francuzi należą do grupy romańskiej; Polacy, Ukraińcy i Rosjanie do słowiańskiej.",
    "options": null,
    "answer": "Francuzi"
  },
  {
    "id": "R03_LUD_08",
    "section": "Ludność, migracje i miasta",
    "type": "sort",
    "prompt": "Przyporządkuj przykładowe skutki migracji do kraju emigracyjnego lub imigracyjnego.",
    "explanation": "Migracje oznaczają odpływ ludności z kraju emigracji oraz napływ ludności do kraju imigracji, także osób młodych i wykwalifikowanych.",
    "options": null,
    "answer": {
      "kraj emigracyjny": [
        "zmniejszenie bezrobocia po wyjeździe",
        "utrata wykształconych pracowników"
      ],
      "kraj imigracyjny": [
        "napływ fachowców",
        "odmłodzenie struktury wieku"
      ]
    },
    "items": [
      "odmłodzenie struktury wieku",
      "zmniejszenie bezrobocia po wyjeździe",
      "napływ fachowców",
      "utrata wykształconych pracowników"
    ],
    "categories": [
      "kraj emigracyjny",
      "kraj imigracyjny"
    ]
  },
  {
    "id": "R03_LUD_09",
    "section": "Ludność, migracje i miasta",
    "type": "riddle",
    "prompt": "Jaki diagram przedstawia osobno kobiety i mężczyzn w kolejnych grupach wieku?",
    "explanation": "Piramida płci i wieku pokazuje strukturę społeczeństwa według wieku i płci.",
    "options": null,
    "answer": "piramida płci i wieku",
    "image": "r03_piramida_wieku.jpg",
    "altAnswers": [
      "piramida płci i wieku",
      "piramida wieku",
      "piramida ludności"
    ]
  },
  {
    "id": "R03_LUD_10",
    "section": "Ludność, migracje i miasta",
    "type": "single_choice",
    "prompt": "Nad którą rzeką leży Londyn?",
    "explanation": "Londyn leży nad Tamizą, a Paryż nad Sekwaną.",
    "options": [
      "Sekwaną",
      "Dunajem",
      "Łabą",
      "Tamizą",
      "Renem",
      "Loarą"
    ],
    "answer": 3
  },
  {
    "id": "R03_GOSP_01",
    "section": "Energetyka i gospodarka",
    "type": "multi_select",
    "prompt": "Które źródła energii są odnawialne?",
    "explanation": "Do odnawialnych należą m.in. energia wiatru, słońca, wód i geotermalna. Ropa i uran są nieodnawialne.",
    "options": [
      "energia wiatru",
      "ropa naftowa",
      "energia geotermalna",
      "uran",
      "energia słoneczna",
      "energia wód"
    ],
    "answer": [
      0,
      2,
      4,
      5
    ]
  },
  {
    "id": "R03_GOSP_02",
    "section": "Energetyka i gospodarka",
    "type": "single_choice",
    "prompt": "W którym państwie europejskim udział energii elektrycznej z elektrowni jądrowych przekraczał 75%?",
    "explanation": "We Francji udział energii elektrycznej z elektrowni jądrowych przekraczał 75%.",
    "options": [
      "Norwegia",
      "Dania",
      "Hiszpania",
      "Polska",
      "Francja",
      "Islandia"
    ],
    "answer": 4
  },
  {
    "id": "R03_GOSP_03",
    "section": "Energetyka i gospodarka",
    "type": "match",
    "prompt": "Połącz elektrownię z głównym źródłem wykorzystywanej energii.",
    "explanation": "Elektrownie różnią się źródłem energii: ruchem powietrza, uranem, gorącą wodą lub spalaniem węgla.",
    "options": null,
    "answer": {
      "wiatrowa": "wiatr",
      "jądrowa": "uran",
      "geotermalna": "gorące wody podziemne",
      "węglowa": "węgiel"
    },
    "left": [
      "wiatrowa",
      "jądrowa",
      "geotermalna",
      "węglowa"
    ],
    "right": [
      "gorące wody podziemne",
      "węgiel",
      "uran",
      "wiatr"
    ]
  },
  {
    "id": "R03_GOSP_04",
    "section": "Energetyka i gospodarka",
    "type": "true_false",
    "prompt": "Elektrownie wiatrowe wytwarzają energię elektryczną dzięki sile wiatru i nie emitują gazów cieplarnianych podczas pracy.",
    "explanation": "Elektrownie wiatrowe nie emitują gazów cieplarnianych podczas wytwarzania energii, ale mogą powodować hałas i stanowić zagrożenie dla ptaków.",
    "options": null,
    "answer": true,
    "image": "r03_turbiny_wiatrowe.jpg"
  },
  {
    "id": "R03_GOSP_05",
    "section": "Energetyka i gospodarka",
    "type": "scenario",
    "prompt": "Inwestor wybiera wybrzeże morskie z regularnymi, silnymi wiatrami. Planuje postawić turbiny wytwarzające energię elektryczną. Jaki typ elektrowni buduje?",
    "explanation": "Nadmorskie tereny często zapewniają dobre warunki do pracy elektrowni wiatrowych.",
    "options": [
      "wiatrową",
      "wodną",
      "jądrową",
      "geotermalną",
      "cieplną węglową",
      "słoneczną"
    ],
    "answer": 0,
    "image": "r03_turbiny_wiatrowe.jpg"
  },
  {
    "id": "R03_GOSP_06",
    "section": "Energetyka i gospodarka",
    "type": "odd_one_out",
    "prompt": "Wskaż nieodnawialne źródło energii: słońce, wiatr, geotermia, węgiel kamienny.",
    "explanation": "Węgiel kamienny jest paliwem kopalnym i nie odnawia się w krótkim czasie.",
    "options": null,
    "answer": "węgiel kamienny"
  },
  {
    "id": "R03_GOSP_07",
    "section": "Energetyka i gospodarka",
    "type": "sort",
    "prompt": "Przyporządkuj działalności do trzech sektorów gospodarki.",
    "explanation": "Sektor I obejmuje rolnictwo i rybołówstwo, sektor II przemysł, a sektor III usługi.",
    "options": null,
    "answer": {
      "sektor I": [
        "uprawa zbóż",
        "rybołówstwo"
      ],
      "sektor II": [
        "wydobycie węgla",
        "produkcja samochodów"
      ],
      "sektor III": [
        "usługi bankowe",
        "turystyka"
      ]
    },
    "items": [
      "turystyka",
      "produkcja samochodów",
      "uprawa zbóż",
      "wydobycie węgla",
      "usługi bankowe",
      "rybołówstwo"
    ],
    "categories": [
      "sektor I",
      "sektor II",
      "sektor III"
    ]
  },
  {
    "id": "R03_GOSP_08",
    "section": "Energetyka i gospodarka",
    "type": "riddle",
    "prompt": "Jak nazywa się wyspecjalizowany ośrodek we Francji, w którym koncentrują się nowoczesne firmy i instytucje badawcze przy uczelniach?",
    "explanation": "Technopolie skupiają przedsiębiorstwa zaawansowanych technologii i zaplecze naukowo-badawcze.",
    "options": null,
    "answer": "technopolia",
    "image": "r03_technopolia_francja.jpg",
    "altAnswers": [
      "technopolia",
      "technopol"
    ]
  },
  {
    "id": "R03_GOSP_09",
    "section": "Energetyka i gospodarka",
    "type": "fill_in",
    "prompt": "W Danii dominuje hodowla __________, a na Węgrzech uprawa __________.",
    "explanation": "W Danii dominują gospodarstwa hodowlane, m.in. trzody chlewnej i bydła, a na Węgrzech uprawy zbóż i innych roślin.",
    "options": null,
    "answer": [
      "zwierząt",
      "roślin"
    ],
    "image": "r03_gospodarstwa_dania_wegry.jpg",
    "altAnswers": [
      [
        "zwierząt",
        "zwierzat"
      ],
      [
        "roślin",
        "roslin"
      ]
    ]
  },
  {
    "id": "R03_GOSP_10",
    "section": "Energetyka i gospodarka",
    "type": "single_choice",
    "prompt": "Który rodzaj elektrowni wodnej ma dwa zbiorniki, między którymi przemieszcza się woda?",
    "explanation": "Elektrownia szczytowo-pompowa wykorzystuje przepływ wody między dwoma zbiornikami.",
    "options": [
      "przepływowa",
      "pływowa",
      "szczytowo-pompowa",
      "geotermalna",
      "wiatrowa"
    ],
    "answer": 2
  },
  {
    "id": "R03_TUR_01",
    "section": "Turystyka Europy",
    "type": "single_choice",
    "prompt": "Jaka cecha klimatu przyciąga latem turystów na wybrzeża Morza Śródziemnego?",
    "explanation": "Południowa Europa ma klimat podzwrotnikowy z upalnym i suchym latem.",
    "options": [
      "ciepłe i suche lato",
      "długa zima polarna",
      "całoroczne opady śniegu",
      "bardzo chłodne lato",
      "stałe zamarznięcie gruntu"
    ],
    "answer": 0,
    "image": "r03_plaza_i_zabytki_poludnia.jpg"
  },
  {
    "id": "R03_TUR_02",
    "section": "Turystyka Europy",
    "type": "multi_select",
    "prompt": "Wybierz zabytki znajdujące się w Grecji.",
    "explanation": "Do atrakcji greckich zaliczono ateński Akropol, świątynię Apollina w Delfach i miejsce igrzysk olimpijskich w Olimpii.",
    "options": [
      "Akropol w Atenach",
      "Koloseum w Rzymie",
      "świątynia Apollina w Delfach",
      "Alhambra w Grenadzie",
      "zabytki Olimpii",
      "pałac Dioklecjana w Splicie"
    ],
    "answer": [
      0,
      2,
      4
    ]
  },
  {
    "id": "R03_TUR_03",
    "section": "Turystyka Europy",
    "type": "match",
    "prompt": "Połącz zabytek z miastem, w którym się znajduje.",
    "explanation": "Alhambra to Grenada; Koloseum to Rzym; pałac Dioklecjana znajduje się w Splicie, a Akropol w Atenach.",
    "options": null,
    "answer": {
      "Alhambra": "Grenada",
      "Koloseum": "Rzym",
      "pałac Dioklecjana": "Split",
      "Akropol": "Ateny"
    },
    "left": [
      "Alhambra",
      "Koloseum",
      "pałac Dioklecjana",
      "Akropol"
    ],
    "right": [
      "Ateny",
      "Split",
      "Grenada",
      "Rzym"
    ]
  },
  {
    "id": "R03_TUR_04",
    "section": "Turystyka Europy",
    "type": "true_false",
    "prompt": "Sycylia jest największą wyspą Morza Śródziemnego, a jej atrakcją jest wulkan Etna.",
    "explanation": "Sycylia jest największą wyspą Morza Śródziemnego, a na jej obszarze znajduje się wulkan Etna.",
    "options": null,
    "answer": true
  },
  {
    "id": "R03_TUR_05",
    "section": "Turystyka Europy",
    "type": "fill_in",
    "prompt": "Atrakcyjność turystyczną tworzą __________ oraz infrastruktura turystyczna.",
    "explanation": "Walory turystyczne zachęcają do podróży, natomiast infrastruktura zapewnia dojazd i komfort pobytu.",
    "options": null,
    "answer": [
      "walory turystyczne"
    ],
    "altAnswers": [
      [
        "walory turystyczne",
        "walory"
      ]
    ]
  },
  {
    "id": "R03_TUR_06",
    "section": "Turystyka Europy",
    "type": "odd_one_out",
    "prompt": "Wskaż miejsce, które nie jest kurortem ani regionem wybrzeża Morza Śródziemnego: Costa Brava, Costa del Sol, Lazurowe Wybrzeże, Wyżyna Bawarska.",
    "explanation": "Costa Brava, Costa del Sol i Lazurowe Wybrzeże to obszary turystyki nadmorskiej; Wyżyna Bawarska jest wyżyną w Niemczech.",
    "options": null,
    "answer": "Wyżyna Bawarska"
  },
  {
    "id": "R03_TUR_07",
    "section": "Turystyka Europy",
    "type": "scenario",
    "prompt": "Turysta przebywa w Chorwacji i chce zwiedzić średniowieczne Stare Miasto otoczone murami. Które miasto powinien wybrać?",
    "explanation": "Dubrownik słynie ze średniowiecznego Starego Miasta otoczonego murami.",
    "options": [
      "Split",
      "Zagrzeb",
      "Dubrownik",
      "Rijeka",
      "Pula"
    ],
    "answer": 2,
    "image": "r03_plaza_i_zabytki_poludnia.jpg"
  },
  {
    "id": "R03_TUR_08",
    "section": "Turystyka Europy",
    "type": "riddle",
    "prompt": "Jak nazywa się około 50-kilometrowy tunel kolejowy pod kanałem La Manche, łączący Wielką Brytanię i Francję?",
    "explanation": "Eurotunel prowadzi pod kanałem La Manche i umożliwia przewóz koleją ludzi oraz samochodów.",
    "options": null,
    "answer": "Eurotunel",
    "altAnswers": [
      "Eurotunel",
      "eurotunel"
    ]
  },
  {
    "id": "R03_TUR_09",
    "section": "Turystyka Europy",
    "type": "sort",
    "prompt": "Podziel przykłady walorów turystycznych na przyrodnicze i kulturowe.",
    "explanation": "Walory przyrodnicze wynikają z elementów natury, a kulturowe z zabytków i dziedzictwa człowieka.",
    "options": null,
    "answer": {
      "przyrodnicze": [
        "klifowe wybrzeże",
        "górskie krajobrazy Alp",
        "plaże śródziemnomorskie"
      ],
      "kulturowe": [
        "Koloseum w Rzymie",
        "pałac Alhambra",
        "Akropol w Atenach"
      ]
    },
    "items": [
      "pałac Alhambra",
      "klifowe wybrzeże",
      "Akropol w Atenach",
      "górskie krajobrazy Alp",
      "Koloseum w Rzymie",
      "plaże śródziemnomorskie"
    ],
    "categories": [
      "przyrodnicze",
      "kulturowe"
    ]
  },
  {
    "id": "R03_TUR_10",
    "section": "Turystyka Europy",
    "type": "single_choice",
    "prompt": "Który zabytek Paryża słynie z witraży i rozet?",
    "explanation": "Katedra Notre Dame jest znana m.in. z witraży, rozet i dzwonów.",
    "options": [
      "Wersal",
      "Łuk Triumfalny",
      "Luwr",
      "Wieża Eiffla",
      "Katedra Notre Dame"
    ],
    "answer": 4
  },
  {
    "id": "R03_SAS_01",
    "section": "Sąsiedzi Polski",
    "type": "single_choice",
    "prompt": "W którym regionie Niemiec leży Zagłębie Ruhry?",
    "explanation": "Zagłębie Ruhry znajduje się w Nadrenii Północnej-Westfalii.",
    "options": [
      "Bawaria",
      "Nadrenia Północna-Westfalia",
      "Saksonia",
      "Brandenburgia",
      "Dolna Saksonia"
    ],
    "answer": 1,
    "image": "r03_zaglebie_ruhry_rewitalizacja.jpg"
  },
  {
    "id": "R03_SAS_02",
    "section": "Sąsiedzi Polski",
    "type": "multi_select",
    "prompt": "Jakie przemiany zachodziły w Zagłębiu Ruhry podczas restrukturyzacji przemysłu?",
    "explanation": "Zmniejszano wydobycie i tradycyjne hutnictwo, rozwijano przemysł nowoczesny, usługi badawcze i rewitalizowano obiekty.",
    "options": [
      "ograniczanie górnictwa",
      "rozwój nowoczesnego przemysłu",
      "masowe otwieranie nowych kopalń węgla kamiennego",
      "rekultywacja i zmiana funkcji dawnych fabryk",
      "całkowita rezygnacja z usług",
      "rozwój usług badawczo-rozwojowych"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "image": "r03_zaglebie_ruhry_rewitalizacja.jpg"
  },
  {
    "id": "R03_SAS_03",
    "section": "Sąsiedzi Polski",
    "type": "match",
    "prompt": "Dopasuj państwo sąsiadujące z Polską do jego stolicy.",
    "explanation": "Wilno jest stolicą Litwy, Mińsk Białorusi, Praga Czech, a Bratysława Słowacji.",
    "options": null,
    "answer": {
      "Litwa": "Wilno",
      "Białoruś": "Mińsk",
      "Czechy": "Praga",
      "Słowacja": "Bratysława"
    },
    "left": [
      "Litwa",
      "Białoruś",
      "Czechy",
      "Słowacja"
    ],
    "right": [
      "Praga",
      "Mińsk",
      "Bratysława",
      "Wilno"
    ]
  },
  {
    "id": "R03_SAS_04",
    "section": "Sąsiedzi Polski",
    "type": "true_false",
    "prompt": "Białoruś, podobnie jak Litwa, ma dostęp do Morza Bałtyckiego.",
    "explanation": "Litwa ma dostęp do Bałtyku, natomiast Białoruś jest państwem śródlądowym.",
    "options": null,
    "answer": false
  },
  {
    "id": "R03_SAS_05",
    "section": "Sąsiedzi Polski",
    "type": "scenario",
    "prompt": "Podczas wycieczki po Litwie uczniowie zwiedzają średniowieczny zamek położony na wyspie i oglądają tradycyjne domy karaimskie. Gdzie są?",
    "explanation": "Zamek na wyspie i domy karaimskie są charakterystycznymi atrakcjami Trok.",
    "options": [
      "Wilno",
      "Kowno",
      "Połąga",
      "Troki",
      "Druskienniki"
    ],
    "answer": 3,
    "image": "r03_zamek_w_trokach.jpg"
  },
  {
    "id": "R03_SAS_06",
    "section": "Sąsiedzi Polski",
    "type": "fill_in",
    "prompt": "Najwyższy szczyt Karpat, Gerlach na Słowacji, ma wysokość __________ m n.p.m.",
    "explanation": "Gerlach, najwyższy szczyt Karpat, ma wysokość 2654 m n.p.m.",
    "options": null,
    "answer": [
      "2654"
    ],
    "image": "r03_gory_tatry_slowacja.jpg",
    "altAnswers": [
      [
        "2654",
        "2 654"
      ]
    ]
  },
  {
    "id": "R03_SAS_07",
    "section": "Sąsiedzi Polski",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo nienależące do siedmiu lądowych sąsiadów Polski: Niemcy, Czechy, Słowacja, Węgry.",
    "explanation": "Polska graniczy z Niemcami, Czechami i Słowacją, ale nie z Węgrami.",
    "options": null,
    "answer": "Węgry"
  },
  {
    "id": "R03_SAS_08",
    "section": "Sąsiedzi Polski",
    "type": "sort",
    "prompt": "Przyporządkuj sąsiadów Polski do państw należących i nienależących do Unii Europejskiej.",
    "explanation": "Do UE należą Litwa, Niemcy, Czechy i Słowacja, natomiast Ukraina, Białoruś i Rosja nie są jej członkami.",
    "options": null,
    "answer": {
      "należy do UE": [
        "Litwa",
        "Niemcy",
        "Czechy",
        "Słowacja"
      ],
      "nie należy do UE": [
        "Ukraina",
        "Białoruś",
        "Rosja"
      ]
    },
    "items": [
      "Rosja",
      "Czechy",
      "Ukraina",
      "Litwa",
      "Białoruś",
      "Słowacja",
      "Niemcy"
    ],
    "categories": [
      "należy do UE",
      "nie należy do UE"
    ]
  },
  {
    "id": "R03_SAS_09",
    "section": "Sąsiedzi Polski",
    "type": "riddle",
    "prompt": "Jak nazywa się forma porozumienia samorządów obszarów przygranicznych, służąca współpracy m.in. gospodarczej, turystycznej i ekologicznej?",
    "explanation": "Euroregiony to porozumienia sprzyjające współpracy między obszarami sąsiednich państw.",
    "options": null,
    "answer": "euroregion",
    "altAnswers": [
      "euroregion",
      "euroregiony"
    ]
  },
  {
    "id": "R03_SAS_10",
    "section": "Sąsiedzi Polski",
    "type": "single_choice",
    "prompt": "Która rzeka jest najdłuższą rzeką Europy?",
    "explanation": "Wołga jest najdłuższą rzeką Europy.",
    "options": [
      "Dniepr",
      "Dunaj",
      "Wołga",
      "Niemen",
      "Tamiza",
      "Sekwana"
    ],
    "answer": 2
  },
  {
    "id": "R03_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile lat trwa kadencja Parlamentu Europejskiego?",
    "explanation": "Posłowie do Parlamentu Europejskiego są wybierani na pięcioletnią kadencję.",
    "options": [
      "2 lata",
      "3 lata",
      "4 lata",
      "5 lat",
      "6 lat"
    ],
    "answer": 3
  },
  {
    "id": "R03_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz poprawne powiązania dat i wydarzeń z historii integracji europejskiej.",
    "explanation": "W 1951 r. utworzono Europejską Wspólnotę Węgla i Stali, UE powstała w 1993 r., a Polska przystąpiła w 2004 r.",
    "options": [
      "1951 — Europejska Wspólnota Węgla i Stali",
      "1951 — przystąpienie Polski do UE",
      "1993 — powstanie Unii Europejskiej",
      "1993 — przystąpienie Polski do UE",
      "2004 — wejście Polski do UE",
      "2004 — utworzenie EWWiS"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "image": "r03_symbole_unii_europejskiej.jpg"
  },
  {
    "id": "R03_HARD_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz wydarzenie z właściwym rokiem.",
    "explanation": "Wieżę Eiffla zbudowano w 1889 roku, EWWiS powstała w 1951 roku, Unia Europejska w 1993 roku, a Polska przystąpiła do UE w 2004 roku.",
    "options": null,
    "answer": {
      "powstanie Europejskiej Wspólnoty Węgla i Stali": "1951",
      "powstanie Unii Europejskiej": "1993",
      "przystąpienie Polski do UE": "2004",
      "budowa wieży Eiffla": "1889"
    },
    "left": [
      "powstanie Europejskiej Wspólnoty Węgla i Stali",
      "powstanie Unii Europejskiej",
      "przystąpienie Polski do UE",
      "budowa wieży Eiffla"
    ],
    "right": [
      "2004",
      "1889",
      "1951",
      "1993"
    ]
  },
  {
    "id": "R03_HARD_04",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Statek zawija zimą do rosyjskiego portu położonego na dalekiej północy, który dzięki oddziaływaniu ciepłych prądów morskich nie zamarza. O jaki port chodzi?",
    "explanation": "Murmańsk jest portem, który nie zamarza dzięki oddziaływaniu ciepłych prądów morskich.",
    "options": [
      "Petersburg",
      "Murmańsk",
      "Odessa",
      "Kaliningrad",
      "Archangielsk"
    ],
    "answer": 1
  },
  {
    "id": "R03_HARD_05",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Na Islandii zachodnia część wyspy leży na płycie __________, a wschodnia na płycie __________.",
    "explanation": "W strefie ryftu spotykają się płyty Północnoamerykańska od zachodu i Eurazjatycka od wschodu.",
    "options": null,
    "answer": [
      "Północnoamerykańskiej",
      "Eurazjatyckiej"
    ],
    "image": "r03_ryft_islandii.jpg",
    "altAnswers": [
      [
        "Północnoamerykańskiej",
        "Północnoamerykańska"
      ],
      [
        "Eurazjatyckiej",
        "Eurazjatycka"
      ]
    ]
  },
  {
    "id": "R03_HARD_06",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Trzęsienia ziemi w strefach subdukcji lub kolizji bywają znacznie silniejsze niż typowe trzęsienia w islandzkiej strefie ryftowej.",
    "explanation": "Na Islandii trzęsienia są zwykle stosunkowo słabe, natomiast silniejsze występują tam, gdzie płyty się zbliżają.",
    "options": null,
    "answer": true
  },
  {
    "id": "R03_HARD_07",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Rozpoznaj skutki migracji odnoszące się do kraju, z którego ludzie wyjeżdżają, i do kraju, do którego przyjeżdżają.",
    "explanation": "Obydwa kraje mogą zyskać lub stracić: w jednym ubywają młodzi pracownicy, w drugim rośnie ich liczba.",
    "options": null,
    "answer": {
      "kraj emigracji": [
        "odpływ młodych osób",
        "pieniądze przesyłane rodzinom",
        "utrata dobrze wykształconych pracowników"
      ],
      "kraj imigracji": [
        "napływ dobrze wykształconej kadry",
        "większe zapotrzebowanie na mieszkania",
        "możliwe odmłodzenie społeczeństwa"
      ]
    },
    "items": [
      "utrata dobrze wykształconych pracowników",
      "większe zapotrzebowanie na mieszkania",
      "pieniądze przesyłane rodzinom",
      "napływ dobrze wykształconej kadry",
      "odpływ młodych osób",
      "możliwe odmłodzenie społeczeństwa"
    ],
    "categories": [
      "kraj emigracji",
      "kraj imigracji"
    ]
  },
  {
    "id": "R03_HARD_08",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż atrakcję położoną w innym państwie niż pozostałe: Słowacki Raj, Słowacki Kras, Dobszyńska Jaskinia Lodowa, Kras Morawski.",
    "explanation": "Kras Morawski leży w Czechach, natomiast trzy pozostałe atrakcje znajdują się na Słowacji.",
    "options": null,
    "answer": "Kras Morawski",
    "image": "r03_gory_tatry_slowacja.jpg"
  },
  {
    "id": "R03_HARD_09",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaka była przeciętna powierzchnia gospodarstwa rolnego w Danii?",
    "explanation": "Średnia powierzchnia gospodarstwa rolnego w Danii wynosiła około 65 ha, a na Węgrzech około 40 ha.",
    "options": [
      "20 ha",
      "30 ha",
      "40 ha",
      "50 ha",
      "65 ha",
      "80 ha"
    ],
    "answer": 4,
    "image": "r03_gospodarstwa_dania_wegry.jpg"
  },
  {
    "id": "R03_HARD_10",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz zabytek Litwy lub Białorusi z miejscowością.",
    "explanation": "Wilno słynie z Ostrej Bramy, Troki z zamku na wyspie, Grodno ze Starego Zamku, a Nieśwież z rezydencji Radziwiłłów.",
    "options": null,
    "answer": {
      "Ostra Brama": "Wilno",
      "zamek na wyspie": "Troki",
      "Stary Zamek": "Grodno",
      "rezydencja Radziwiłłów": "Nieśwież"
    },
    "image": "r03_zamek_w_trokach.jpg",
    "left": [
      "Ostra Brama",
      "zamek na wyspie",
      "Stary Zamek",
      "rezydencja Radziwiłłów"
    ],
    "right": [
      "Grodno",
      "Nieśwież",
      "Wilno",
      "Troki"
    ]
  },
  {
    "id": "R03_HARD_11",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy przemian Zagłębia Ruhry w logicznej kolejności historycznej.",
    "explanation": "Najpierw rozwijały się kopalnie i huty, później wystąpił kryzys i ograniczenia działalności, a następnie wzrosła rola nowych technologii i usług.",
    "options": null,
    "answer": [
      "Rozwój wydobycia i hutnictwa w Zagłębiu Ruhry",
      "Kryzys tradycyjnych gałęzi przemysłu",
      "Likwidacja lub ograniczanie części kopalń i hut",
      "Rozwój nowoczesnych gałęzi przemysłu i usług"
    ],
    "image": "r03_zaglebie_ruhry_rewitalizacja.jpg",
    "items": [
      "Rozwój nowoczesnych gałęzi przemysłu i usług",
      "Kryzys tradycyjnych gałęzi przemysłu",
      "Rozwój wydobycia i hutnictwa w Zagłębiu Ruhry",
      "Likwidacja lub ograniczanie części kopalń i hut"
    ]
  },
  {
    "id": "R03_HARD_12",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Uczeń porównuje PKB Ukrainy na mieszkańca: około 4 tys. USD w 2013 roku, 3,1 tys. USD w 2014 roku i 2,1 tys. USD w 2015 roku. W którym z tych trzech lat wartość była najniższa?",
    "explanation": "Najniższa wartość, około 2,1 tys. USD, dotyczy 2015 roku.",
    "options": [
      "2013",
      "2014",
      "2015",
      "2016",
      "2017"
    ],
    "answer": 2
  }
];

const KID_PROMPTS = {
  "R03_POLO_08": "Która instytucja wykonuje codzienne zadania Unii Europejskiej?",
  "R03_KLIM_04": "Połącz typ klimatu z jego cechą.",
  "R03_KLIM_06": "Zaznacz złe skutki wybuchu wulkanu.",
  "R03_LUD_02": "Co sprawia, że w jakimś miejscu mieszka dużo ludzi?",
  "R03_LUD_08": "Podziel skutki migracji według krajów, których dotyczą.",
  "R03_GOSP_07": "Podziel prace na rolnictwo, przemysł i usługi.",
  "R03_TUR_05": "Co oprócz infrastruktury decyduje, czy miejsce jest atrakcyjne dla turystów?",
  "R03_SAS_02": "Jak zmieniały się kopalnie, fabryki i usługi w Zagłębiu Ruhry?",
  "R03_HARD_07": "Podziel skutki wyjazdów i przyjazdów ludzi między krajami.",
  "R03_HARD_11": "Ułóż zmiany Zagłębia Ruhry od najstarszej do najnowszej."
};

const chapter = {
  "id": "r03",
  "number": 3,
  "title": "Europa – geografia i sąsiedzi Polski",
  "icon": "🌍",
  "sectionOrder": [
    "Europa: położenie i integracja",
    "Islandia i klimat Europy",
    "Ludność, migracje i miasta",
    "Energetyka i gospodarka",
    "Turystyka Europy",
    "Sąsiedzi Polski"
  ],
  "sectionIcons": {
    "Europa: położenie i integracja": "🌍",
    "Islandia i klimat Europy": "🌋",
    "Ludność, migracje i miasta": "👥",
    "Energetyka i gospodarka": "⚡",
    "Turystyka Europy": "🏖️",
    "Sąsiedzi Polski": "🤝"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
