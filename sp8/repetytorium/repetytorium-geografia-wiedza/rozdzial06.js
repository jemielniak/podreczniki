// Skróty sekcji (do identyfikatorów ćwiczeń):
//   KRAJ = Krajobrazy i klimat Ameryk
//   PROB = Zagrożenia i problemy Ameryk
//   USA = Stany Zjednoczone i ich gospodarka
//   AUST = Australia i Oceania
//   POLA = Arktyka i Antarktyka
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R06_KRAJ_01",
    "section": "Krajobrazy i klimat Ameryk",
    "type": "single_choice",
    "prompt": "Jaki łańcuch górski ciągnie się wzdłuż zachodniej części Ameryki Północnej?",
    "explanation": "Wzdłuż zachodniej części Ameryki Północnej ciągną się Kordyliery, obejmujące m.in. Góry Skaliste.",
    "options": [
      "Appalachy",
      "Kordyliery",
      "Andy",
      "Góry Transantarktyczne",
      "Wielkie Góry Wododziałowe",
      "Alpy Południowe"
    ],
    "image": "r06_pasma_gorskie.jpg",
    "answer": 1
  },
  {
    "id": "R06_KRAJ_02",
    "section": "Krajobrazy i klimat Ameryk",
    "type": "single_choice",
    "prompt": "Który szczyt jest najwyższy w Andach?",
    "explanation": "Najwyższym szczytem Andów jest Aconcagua.",
    "options": [
      "Denali",
      "Góra Kościuszki",
      "Aconcagua",
      "Masyw Vinsona",
      "Puncak Jaya",
      "Mont Blanc"
    ],
    "answer": 2
  },
  {
    "id": "R06_KRAJ_03",
    "section": "Krajobrazy i klimat Ameryk",
    "type": "single_choice",
    "prompt": "Który zimny prąd morski sprzyja suchości zachodniego wybrzeża Ameryki Południowej i występowaniu Atakamy?",
    "explanation": "Zimny Prąd Peruwiański ogranicza opady na zachodnim wybrzeżu Ameryki Południowej; w tym regionie leży pustynia Atakama.",
    "options": [
      "Prąd Alaski",
      "Prąd Brazylijski",
      "Prąd Zatokowy",
      "Prąd Peruwiański",
      "Prąd Labradorski",
      "Prąd Karaibski"
    ],
    "image": "r06_wybrzeze_suche_i_wilgotne.jpg",
    "answer": 3
  },
  {
    "id": "R06_KRAJ_04",
    "section": "Krajobrazy i klimat Ameryk",
    "type": "multi_select",
    "prompt": "Zaznacz formy rzeźby położone w Ameryce Południowej.",
    "explanation": "Andy, Nizina Amazonki i Wyżyna Brazylijska leżą w Ameryce Południowej; pozostałe formy leżą w Ameryce Północnej.",
    "options": [
      "Andy",
      "Nizina Amazonki",
      "Wyżyna Brazylijska",
      "Appalachy",
      "Wielkie Równiny",
      "Nizina Hudsońska"
    ],
    "answer": [
      0,
      1,
      2
    ]
  },
  {
    "id": "R06_KRAJ_05",
    "section": "Krajobrazy i klimat Ameryk",
    "type": "true_false",
    "prompt": "Główne pasma górskie obu Ameryk mają przeważnie układ południkowy.",
    "explanation": "Kordyliery i Andy ciągną się w przybliżeniu z północy na południe, wpływając na cyrkulację powietrza.",
    "options": null,
    "answer": true
  },
  {
    "id": "R06_KRAJ_06",
    "section": "Krajobrazy i klimat Ameryk",
    "type": "fill_in",
    "prompt": "Ciepły prąd morski opływający północno-zachodnią część Ameryki Północnej to Prąd __________.",
    "explanation": "Ciepły Prąd Alaski łagodzi zimy i zwiększa opady w północno-zachodniej części kontynentu.",
    "options": null,
    "altAnswers": [
      [
        "Alaski"
      ]
    ],
    "answer": [
      "Alaski"
    ]
  },
  {
    "id": "R06_KRAJ_07",
    "section": "Krajobrazy i klimat Ameryk",
    "type": "riddle",
    "prompt": "Jak nazywa się trawiasta roślinność charakterystyczna dla Wielkich Równin w Ameryce Północnej?",
    "explanation": "Wielkie Równiny porasta formacja trawiasta nazywana prerią.",
    "options": null,
    "altAnswers": [
      "preria",
      "prerie"
    ],
    "answer": "preria"
  },
  {
    "id": "R06_KRAJ_08",
    "section": "Krajobrazy i klimat Ameryk",
    "type": "odd_one_out",
    "prompt": "Wskaż formę terenu, która nie leży w Ameryce Północnej: Nizina Hudsońska, Appalachy, Wielkie Równiny, Wyżyna Brazylijska.",
    "explanation": "Wyżyna Brazylijska leży w Ameryce Południowej; trzy pozostałe formy należą do Ameryki Północnej.",
    "options": null,
    "answer": "Wyżyna Brazylijska"
  },
  {
    "id": "R06_KRAJ_09",
    "section": "Krajobrazy i klimat Ameryk",
    "type": "scenario",
    "prompt": "Dwie części Kanady leżą na podobnych szerokościach geograficznych. Na zachodzie lasy sięgają dalej na północ niż nad Labradorem. Który czynnik najlepiej wyjaśnia tę różnicę?",
    "explanation": "Prąd Alaski ociepla zachodnie wybrzeża, a Prąd Labradorski ochładza wschodnie, przesuwając granicę występowania lasów.",
    "options": [
      "Wpływ ciepłego Prądu Alaski i zimnego Prądu Labradorskiego",
      "Wyłącznie odmienna długość dnia polarnego",
      "Brak jakichkolwiek prądów morskich",
      "Jednakowe temperatury przez cały rok",
      "Położenie obu wybrzeży przy równiku",
      "Występowanie sawann w całej Kanadzie"
    ],
    "answer": 0
  },
  {
    "id": "R06_KRAJ_10",
    "section": "Krajobrazy i klimat Ameryk",
    "type": "match",
    "prompt": "Połącz prąd morski z jego wpływem na klimat wybrzeży.",
    "explanation": "Ciepłe prądy Alaski i Brazylijski sprzyjają ociepleniu wybrzeży, a zimne Labradorski i Kalifornijski ochładzają otoczenie.",
    "options": null,
    "left": [
      "Prąd Alaski",
      "Prąd Labradorski",
      "Prąd Kalifornijski",
      "Prąd Brazylijski"
    ],
    "right": [
      "Ciepły wpływ na wschodnie wybrzeże Ameryki Południowej",
      "Ograniczanie opadów przy zachodnim wybrzeżu Ameryki Północnej",
      "Oziębienie północno-wschodniego wybrzeża Ameryki",
      "Łagodniejsze zimy na północnym zachodzie Ameryki"
    ],
    "answer": {
      "Prąd Alaski": "Łagodniejsze zimy na północnym zachodzie Ameryki",
      "Prąd Labradorski": "Oziębienie północno-wschodniego wybrzeża Ameryki",
      "Prąd Kalifornijski": "Ograniczanie opadów przy zachodnim wybrzeżu Ameryki Północnej",
      "Prąd Brazylijski": "Ciepły wpływ na wschodnie wybrzeże Ameryki Południowej"
    }
  },
  {
    "id": "R06_KRAJ_11",
    "section": "Krajobrazy i klimat Ameryk",
    "type": "sort",
    "prompt": "Przyporządkuj formy rzeźby do właściwego kontynentu.",
    "explanation": "Kordyliery, Appalachy i Nizina Hudsońska są w Ameryce Północnej; Andy, Nizina La Platy i Wyżyna Gujańska — w Południowej.",
    "options": null,
    "categories": [
      "Ameryka Północna",
      "Ameryka Południowa"
    ],
    "items": [
      "Andy",
      "Nizina La Platy",
      "Wyżyna Gujańska",
      "Kordyliery",
      "Appalachy",
      "Nizina Hudsońska"
    ],
    "answer": {
      "Ameryka Północna": [
        "Kordyliery",
        "Appalachy",
        "Nizina Hudsońska"
      ],
      "Ameryka Południowa": [
        "Andy",
        "Nizina La Platy",
        "Wyżyna Gujańska"
      ]
    }
  },
  {
    "id": "R06_KRAJ_12",
    "section": "Krajobrazy i klimat Ameryk",
    "type": "sequence",
    "prompt": "Ułóż główne formy rzeźby USA w kolejności od zachodu na wschód.",
    "explanation": "Na zachodzie USA leżą Kordyliery, dalej na wschodzie Wielkie Równiny, Appalachy i przy Atlantyku Nizina Atlantycka.",
    "options": null,
    "items": [
      "Appalachy",
      "Nizina Atlantycka",
      "Kordyliery",
      "Wielkie Równiny"
    ],
    "image": "r06_pasma_gorskie.jpg",
    "answer": [
      "Kordyliery",
      "Wielkie Równiny",
      "Appalachy",
      "Nizina Atlantycka"
    ]
  },
  {
    "id": "R06_PROB_01",
    "section": "Zagrożenia i problemy Ameryk",
    "type": "single_choice",
    "prompt": "Jak nazywa się obszar USA, na którym szczególnie często pojawiają się tornada?",
    "explanation": "Aleja Tornad to region ścierania się mas powietrza o bardzo różnych temperaturach i wilgotności.",
    "options": [
      "Aleja Tornad",
      "Pampa",
      "Kraina Wielkich Jezior",
      "Nizina Amazonki",
      "Dolina Krzemowa",
      "Nizina Hudsońska"
    ],
    "image": "r06_tornado_na_prerii.jpg",
    "answer": 0
  },
  {
    "id": "R06_PROB_02",
    "section": "Zagrożenia i problemy Ameryk",
    "type": "single_choice",
    "prompt": "Nad jakim podłożem powstają cyklony tropikalne?",
    "explanation": "Cyklony tropikalne rozwijają się nad ciepłymi wodami oceanu i mogą przynieść silny wiatr oraz intensywne opady.",
    "options": [
      "Nad mocno ogrzanymi wodami oceanicznymi",
      "Nad zamarzniętą tundrą",
      "Nad suchymi wnętrzami kontynentów",
      "Nad wysokimi pasmami górskimi",
      "Nad lądolodem Antarktydy",
      "Nad polami uprawnymi prerii"
    ],
    "image": "r06_huragan_z_kosmosu.jpg",
    "answer": 0
  },
  {
    "id": "R06_PROB_03",
    "section": "Zagrożenia i problemy Ameryk",
    "type": "single_choice",
    "prompt": "Jak w Brazylii nazywa się dzielnice nędzy powstające w wielkich miastach?",
    "explanation": "Fawele to brazylijska nazwa dzielnic nędzy, w których często brakuje podstawowej infrastruktury.",
    "options": [
      "Osiedla robotnicze",
      "Fawele",
      "Rezerwaty",
      "Przedmieścia willowe",
      "Megalopolis",
      "Osiedla podmiejskie"
    ],
    "image": "r06_fawele_zabudowa.jpg",
    "answer": 1
  },
  {
    "id": "R06_PROB_04",
    "section": "Zagrożenia i problemy Ameryk",
    "type": "multi_select",
    "prompt": "Wybierz przyczyny wylesiania Amazonii.",
    "explanation": "Lasy Amazonii są wycinane m.in. dla drewna, eksploatacji surowców mineralnych i rozwoju rolnictwa.",
    "options": [
      "Pozyskiwanie cennego drewna",
      "Budowa kopalń i dróg",
      "Zakładanie pastwisk dla bydła",
      "Tworzenie rezerwatów bez wycinki",
      "Ochrona zagrożonych gatunków",
      "Zmniejszanie powierzchni gruntów rolnych"
    ],
    "image": "r06_wylesianie_amazonii.jpg",
    "answer": [
      0,
      1,
      2
    ]
  },
  {
    "id": "R06_PROB_05",
    "section": "Zagrożenia i problemy Ameryk",
    "type": "true_false",
    "prompt": "Jedną z przyczyn powstawania slumsów w miastach Ameryki Południowej jest napływ ludności poszukującej pracy ze wsi.",
    "explanation": "Migranci przyjeżdżają do miast w poszukiwaniu lepszych perspektyw, ale wielu nie znajduje dobrze płatnego zatrudnienia.",
    "options": null,
    "answer": true
  },
  {
    "id": "R06_PROB_06",
    "section": "Zagrożenia i problemy Ameryk",
    "type": "fill_in",
    "prompt": "Największy na Ziemi obszar wilgotnych lasów równikowych znajduje się w regionie zwanym __________.",
    "explanation": "Amazonia jest największym kompleksem wilgotnych lasów równikowych na Ziemi.",
    "options": null,
    "altAnswers": [
      [
        "Amazonią",
        "Amazonia",
        "Amazonii"
      ]
    ],
    "answer": [
      "Amazonią"
    ]
  },
  {
    "id": "R06_PROB_07",
    "section": "Zagrożenia i problemy Ameryk",
    "type": "riddle",
    "prompt": "Jak nazywa się rozległy zespół sąsiadujących ze sobą i powiązanych aglomeracji miejskich?",
    "explanation": "Megalopolis powstaje, gdy rozwijające się aglomeracje miejskie zbliżają się do siebie i tworzą powiązany obszar.",
    "options": null,
    "altAnswers": [
      "megalopolis"
    ],
    "image": "r06_megalopolis_panorama.jpg",
    "answer": "megalopolis"
  },
  {
    "id": "R06_PROB_08",
    "section": "Zagrożenia i problemy Ameryk",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest skutkiem wylesiania Amazonii: erozja wodna gleby, zanikanie siedlisk, zaburzenie obiegu wody, zwiększenie powierzchni lasu.",
    "explanation": "Wylesianie zmniejsza powierzchnię lasu, nasila erozję i zagraża siedliskom oraz obiegowi wody.",
    "options": null,
    "answer": "zwiększenie powierzchni lasu"
  },
  {
    "id": "R06_PROB_09",
    "section": "Zagrożenia i problemy Ameryk",
    "type": "scenario",
    "prompt": "W środkowej części USA spotykają się ciepłe i wilgotne masy powietrza znad Zatoki Meksykańskiej oraz chłodne i suche masy z Kanady. Jakie groźne zjawisko może powstać w takich warunkach?",
    "explanation": "Silne kontrasty między masami powietrza sprzyjają powstawaniu tornad na obszarze Alei Tornad.",
    "options": [
      "Trąba powietrzna (tornado)",
      "Huragan tropikalny",
      "Burza śnieżna",
      "Front atmosferyczny",
      "Burza pyłowa",
      "Trąba wodna"
    ],
    "answer": 0
  },
  {
    "id": "R06_PROB_10",
    "section": "Zagrożenia i problemy Ameryk",
    "type": "match",
    "prompt": "Połącz pojęcie z jego znaczeniem.",
    "explanation": "Tornada i huragany to odmienne zjawiska atmosferyczne; fawele i megalopolis opisują różne formy osadnictwa.",
    "options": null,
    "left": [
      "Tornado",
      "Huragan",
      "Fawela",
      "Megalopolis"
    ],
    "right": [
      "Zespół połączonych aglomeracji miejskich",
      "Brazylijska dzielnica nędzy",
      "Rozległy cyklon tropikalny nad ciepłym oceanem",
      "Wąski wir powietrza sięgający od chmury burzowej do ziemi"
    ],
    "answer": {
      "Tornado": "Wąski wir powietrza sięgający od chmury burzowej do ziemi",
      "Huragan": "Rozległy cyklon tropikalny nad ciepłym oceanem",
      "Fawela": "Brazylijska dzielnica nędzy",
      "Megalopolis": "Zespół połączonych aglomeracji miejskich"
    }
  },
  {
    "id": "R06_PROB_11",
    "section": "Zagrożenia i problemy Ameryk",
    "type": "sort",
    "prompt": "Rozdziel działania gospodarcze w Amazonii od ekologicznych skutków wycinki.",
    "explanation": "Kopalnie, drewno i pastwiska wiążą się z działalnością gospodarczą; erozja, niszczenie siedlisk i zaburzenia obiegu wody są następstwami wylesiania.",
    "options": null,
    "categories": [
      "Wykorzystanie gospodarcze",
      "Skutki ekologiczne"
    ],
    "items": [
      "erozja wodna",
      "utrata siedlisk zwierząt",
      "zaburzenie obiegu wody",
      "wydobywanie złota",
      "pozyskiwanie mahoniu",
      "zakładanie pastwisk"
    ],
    "image": "r06_wylesianie_amazonii.jpg",
    "answer": {
      "Wykorzystanie gospodarcze": [
        "wydobywanie złota",
        "pozyskiwanie mahoniu",
        "zakładanie pastwisk"
      ],
      "Skutki ekologiczne": [
        "erozja wodna",
        "utrata siedlisk zwierząt",
        "zaburzenie obiegu wody"
      ]
    }
  },
  {
    "id": "R06_PROB_12",
    "section": "Zagrożenia i problemy Ameryk",
    "type": "sequence",
    "prompt": "Ułóż etapy migracji ze wsi do miasta prowadzącej do powstawania dzielnic nędzy.",
    "explanation": "Brak perspektyw na wsi skłania do migracji; gdy w mieście również trudno o dochody, część nowych mieszkańców osiedla się w slumsach.",
    "options": null,
    "items": [
      "Trudności ze znalezieniem dobrze płatnej pracy",
      "Zamieszkanie w dzielnicy nędzy",
      "Brak pracy i perspektyw na wsi",
      "Przeprowadzka do dużego miasta"
    ],
    "image": "r06_fawele_zabudowa.jpg",
    "answer": [
      "Brak pracy i perspektyw na wsi",
      "Przeprowadzka do dużego miasta",
      "Trudności ze znalezieniem dobrze płatnej pracy",
      "Zamieszkanie w dzielnicy nędzy"
    ]
  },
  {
    "id": "R06_USA_01",
    "section": "Stany Zjednoczone i ich gospodarka",
    "type": "single_choice",
    "prompt": "Jak nazywa się megalopolis północno-wschodniego wybrzeża USA, obejmujące m.in. Boston i Waszyngton?",
    "explanation": "BosWash rozciąga się od okolic Bostonu do Waszyngtonu i obejmuje m.in. Nowy Jork oraz Filadelfię.",
    "options": [
      "ChiPitts",
      "SanSan",
      "BosWash",
      "Dolina Krzemowa"
    ],
    "image": "r06_megalopolis_panorama.jpg",
    "answer": 2
  },
  {
    "id": "R06_USA_02",
    "section": "Stany Zjednoczone i ich gospodarka",
    "type": "single_choice",
    "prompt": "Jak nazywa się technopolia rozwinięta w rejonie zatoki San Francisco?",
    "explanation": "Dolina Krzemowa skupia przedsiębiorstwa zaawansowanych technologii, uczelnie i instytucje badawcze.",
    "options": [
      "Dolina Krzemowa",
      "Wielki Basen Artezyjski",
      "Kraina Wielkich Jezior",
      "BosWash",
      "Aleja Tornad",
      "Wyżyna Gujańska"
    ],
    "image": "r06_laboratorium_technopolia.jpg",
    "answer": 0
  },
  {
    "id": "R06_USA_03",
    "section": "Stany Zjednoczone i ich gospodarka",
    "type": "single_choice",
    "prompt": "Który z działów gospodarki ma szczególne znaczenie dla współczesnego rozwoju USA?",
    "explanation": "Sektor wysokich technologii jest ważnym elementem gospodarki USA, wspieranym przez naukę i badania.",
    "options": [
      "Przemysł zaawansowanych technologii",
      "Tradycyjne hutnictwo",
      "Górnictwo rud żelaza",
      "Przemysł włókienniczy",
      "Rolnictwo ekstensywne",
      "Przemysł spożywczy"
    ],
    "answer": 0
  },
  {
    "id": "R06_USA_04",
    "section": "Stany Zjednoczone i ich gospodarka",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki sprzyjające rozwojowi Doliny Krzemowej.",
    "explanation": "Technopolia rozwijała się dzięki zapleczu naukowemu, finansowaniu oraz korzystnemu położeniu i klimatowi.",
    "options": [
      "Bliskość uniwersytetów i wykwalifikowanych pracowników",
      "Dostęp do finansowania kosztownych innowacji",
      "Dogodny klimat okolic San Francisco",
      "Trwała pokrywa lądolodowa",
      "Całkowity brak instytucji badawczych",
      "Izolacja od wszystkich ośrodków akademickich"
    ],
    "image": "r06_laboratorium_technopolia.jpg",
    "answer": [
      0,
      1,
      2
    ]
  },
  {
    "id": "R06_USA_05",
    "section": "Stany Zjednoczone i ich gospodarka",
    "type": "true_false",
    "prompt": "Rozwój gospodarki USA opiera się wyłącznie na wydobyciu surowców, bez udziału nowoczesnych technologii.",
    "explanation": "Wydobycie surowców miało znaczenie historyczne i nadal jest ważne, lecz tekst akcentuje też nowoczesny przemysł i usługi.",
    "options": null,
    "answer": false
  },
  {
    "id": "R06_USA_06",
    "section": "Stany Zjednoczone i ich gospodarka",
    "type": "fill_in",
    "prompt": "Amerykański ośrodek wysokich technologii pod San Francisco to Dolina __________.",
    "explanation": "Nazwa Dolina Krzemowa nawiązuje do krzemu wykorzystywanego w procesorach komputerowych.",
    "options": null,
    "altAnswers": [
      [
        "Krzemowa",
        "Krzemowej"
      ]
    ],
    "answer": [
      "Krzemowa"
    ]
  },
  {
    "id": "R06_USA_07",
    "section": "Stany Zjednoczone i ich gospodarka",
    "type": "riddle",
    "prompt": "Jak nazywa się duże prywatne gospodarstwo rolne charakterystyczne dla nowoczesnego rolnictwa USA?",
    "explanation": "W Stanach Zjednoczonych rolnictwo jest mocno zmechanizowane i oparte na dużych gospodarstwach — farmach.",
    "options": null,
    "altAnswers": [
      "farma",
      "farmy"
    ],
    "answer": "farma"
  },
  {
    "id": "R06_USA_08",
    "section": "Stany Zjednoczone i ich gospodarka",
    "type": "odd_one_out",
    "prompt": "Wskaż roślinę, która nie należy do typowych upraw USA: kukurydza, pszenica, soja, kauczuk.",
    "explanation": "Tekst wymienia kukurydzę, pszenicę i soję wśród upraw USA, a kauczuk omawia w kontekście gospodarczego wykorzystania Amazonii.",
    "options": null,
    "answer": "kauczuk"
  },
  {
    "id": "R06_USA_09",
    "section": "Stany Zjednoczone i ich gospodarka",
    "type": "scenario",
    "prompt": "W supermarkecie wyrzuca się dużą ilość niezjedzonego jedzenia, choć część produktów nadal nadaje się do spożycia. Jaki problem społeczno-gospodarczy ilustruje ta sytuacja?",
    "explanation": "Marnowanie żywności wiąże się m.in. z konsumpcjonizmem i łatwym dostępem do pożywienia.",
    "options": [
      "Marnowanie żywności",
      "Kontrola jakości żywności",
      "Recykling opakowań",
      "Eksport nadwyżek żywności",
      "Gospodarowanie odpadami organicznymi",
      "Produkcja żywności ekologicznej"
    ],
    "answer": 0
  },
  {
    "id": "R06_USA_10",
    "section": "Stany Zjednoczone i ich gospodarka",
    "type": "match",
    "prompt": "Połącz dział gospodarki USA z odpowiednią działalnością.",
    "explanation": "Gospodarkę USA tworzą m.in. rolnictwo, usługi, nowoczesne technologie i tradycyjne hutnictwo.",
    "options": null,
    "left": [
      "Rolnictwo",
      "Przemysł wysokich technologii",
      "Usługi finansowe",
      "Hutnictwo"
    ],
    "right": [
      "Wytwarzanie stali z rud żelaza",
      "Giełda papierów wartościowych w Nowym Jorku",
      "Produkcja procesorów i urządzeń elektronicznych",
      "Wielkie zmechanizowane farmy"
    ],
    "answer": {
      "Rolnictwo": "Wielkie zmechanizowane farmy",
      "Przemysł wysokich technologii": "Produkcja procesorów i urządzeń elektronicznych",
      "Usługi finansowe": "Giełda papierów wartościowych w Nowym Jorku",
      "Hutnictwo": "Wytwarzanie stali z rud żelaza"
    }
  },
  {
    "id": "R06_USA_11",
    "section": "Stany Zjednoczone i ich gospodarka",
    "type": "sort",
    "prompt": "Przyporządkuj działalności gospodarcze USA do dwóch sektorów.",
    "explanation": "Farmy zajmują się produkcją roślinną i zwierzęcą, a telekomunikacja, edukacja i finanse należą do usług.",
    "options": null,
    "categories": [
      "Rolnictwo",
      "Usługi"
    ],
    "items": [
      "telekomunikacja",
      "edukacja",
      "bankowość i finanse",
      "uprawa pszenicy",
      "hodowla bydła",
      "uprawa kukurydzy"
    ],
    "answer": {
      "Rolnictwo": [
        "uprawa pszenicy",
        "hodowla bydła",
        "uprawa kukurydzy"
      ],
      "Usługi": [
        "telekomunikacja",
        "edukacja",
        "bankowość i finanse"
      ]
    }
  },
  {
    "id": "R06_USA_12",
    "section": "Stany Zjednoczone i ich gospodarka",
    "type": "sequence",
    "prompt": "Ułóż formy rzeźby w kolejności od wschodu do zachodu na obszarze USA.",
    "explanation": "Tekst prowadzi od wybrzeża Atlantyku przez Appalachy, Niziny Wewnętrzne i Wielkie Równiny aż po Kordyliery na zachodzie.",
    "options": null,
    "items": [
      "Niziny Wewnętrzne",
      "Wielkie Równiny",
      "Kordyliery",
      "Nizina Atlantycka",
      "Appalachy"
    ],
    "answer": [
      "Nizina Atlantycka",
      "Appalachy",
      "Niziny Wewnętrzne",
      "Wielkie Równiny",
      "Kordyliery"
    ]
  },
  {
    "id": "R06_AUST_01",
    "section": "Australia i Oceania",
    "type": "single_choice",
    "prompt": "Która część Australii i Oceanii zajmuje zdecydowanie największą powierzchnię lądową?",
    "explanation": "Australia stanowi około 7,7 mln km² z około 8,5 mln km² powierzchni lądowej całego regionu.",
    "options": [
      "Nowa Zelandia",
      "Hawaje",
      "Australia",
      "Mikronezja",
      "Polinezja",
      "Melanezja"
    ],
    "answer": 2
  },
  {
    "id": "R06_AUST_02",
    "section": "Australia i Oceania",
    "type": "single_choice",
    "prompt": "Jak nazywa się główne pasmo górskie położone we wschodniej części Australii?",
    "explanation": "We wschodniej Australii leżą Wielkie Góry Wododziałowe z Górą Kościuszki.",
    "options": [
      "Góry Transantarktyczne",
      "Wielkie Góry Wododziałowe",
      "Appalachy",
      "Kordyliery",
      "Andy",
      "Alpy Południowe"
    ],
    "answer": 1
  },
  {
    "id": "R06_AUST_03",
    "section": "Australia i Oceania",
    "type": "single_choice",
    "prompt": "Jakie miasto jest stolicą Australii?",
    "explanation": "Stolicą Związku Australijskiego jest Canberra, a nie większe od niej Sydney lub Melbourne.",
    "options": [
      "Sydney",
      "Melbourne",
      "Perth",
      "Canberra",
      "Brisbane",
      "Adelaide"
    ],
    "answer": 3
  },
  {
    "id": "R06_AUST_04",
    "section": "Australia i Oceania",
    "type": "multi_select",
    "prompt": "Wskaż zwierzęta charakterystyczne dla Australii.",
    "explanation": "Koale, dziobaki i emu należą do charakterystycznych zwierząt Australii, natomiast pozostałe zwierzęta żyją w regionach polarnych.",
    "options": [
      "Koala",
      "Dziobak",
      "Emu",
      "Niedźwiedź polarny",
      "Renifer",
      "Pingwin cesarski"
    ],
    "answer": [
      0,
      1,
      2
    ]
  },
  {
    "id": "R06_AUST_05",
    "section": "Australia i Oceania",
    "type": "true_false",
    "prompt": "Większość ludności Australii mieszka w miastach.",
    "explanation": "Około 90% mieszkańców Australii żyje w miastach.",
    "options": null,
    "answer": true
  },
  {
    "id": "R06_AUST_06",
    "section": "Australia i Oceania",
    "type": "fill_in",
    "prompt": "Największą rozległą niziną w Australii jest Wielki Basen __________.",
    "explanation": "Wielki Basen Artezyjski to rozległy region Australii, w którym występują wody artezyjskie.",
    "options": null,
    "altAnswers": [
      [
        "Artezyjski",
        "Artezyjskiego"
      ]
    ],
    "image": "r06_studnia_artezyjska_przekroj.jpg",
    "answer": [
      "Artezyjski"
    ]
  },
  {
    "id": "R06_AUST_07",
    "section": "Australia i Oceania",
    "type": "riddle",
    "prompt": "Jak nazywa się grupa organizmów występujących naturalnie tylko na ograniczonym obszarze, np. w Australii?",
    "explanation": "Organizmy o naturalnym zasięgu ograniczonym do wybranego obszaru to endemity.",
    "options": null,
    "altAnswers": [
      "endemity",
      "endemit"
    ],
    "image": "r06_koala_w_eukaliptusach.jpg",
    "answer": "endemity"
  },
  {
    "id": "R06_AUST_08",
    "section": "Australia i Oceania",
    "type": "odd_one_out",
    "prompt": "Wskaż zwierzę, które nie jest charakterystyczne dla Australii: koala, dziobak, emu, renifer.",
    "explanation": "Renifery żyją m.in. w Arktyce, podczas gdy koale, dziobaki i emu są zwierzętami charakterystycznymi dla Australii.",
    "options": null,
    "answer": "renifer"
  },
  {
    "id": "R06_AUST_09",
    "section": "Australia i Oceania",
    "type": "scenario",
    "prompt": "Rodzina planuje zamieszkać w Australii. Woli łagodniejszy klimat i łatwiejszy dostęp do wody niż w suchym wnętrzu kontynentu. Który obszar najbardziej odpowiada tym warunkom?",
    "explanation": "Najgęściej zaludnione są południowo-wschodnie obszary przybrzeżne, gdzie warunki klimatyczne i dostęp do wody są korzystniejsze.",
    "options": [
      "Południowo-wschodnie wybrzeże Australii",
      "Centralna część Wielkiej Pustyni Wiktorii",
      "Środek Pustyni Gibsona",
      "Środek Pustyni Simpsona",
      "Wnętrze Pustyni Tanami",
      "Suchy interior zachodni"
    ],
    "image": "r06_australijski_krajobraz_suchy.jpg",
    "answer": 0
  },
  {
    "id": "R06_AUST_10",
    "section": "Australia i Oceania",
    "type": "match",
    "prompt": "Dopasuj nazwę obiektu do jego charakterystyki.",
    "explanation": "W Australii znajdują się Wielkie Góry Wododziałowe, Wielki Basen Artezyjski, Wielka Rafa Koralowa i Uluru.",
    "options": null,
    "left": [
      "Wielkie Góry Wododziałowe",
      "Wielki Basen Artezyjski",
      "Wielka Rafa Koralowa",
      "Uluru"
    ],
    "right": [
      "Formacja skalna będąca świętym miejscem Aborygenów",
      "Atrakcja przy wschodnim wybrzeżu Australii",
      "Rozległa nizina Australii",
      "Góry we wschodniej Australii"
    ],
    "answer": {
      "Wielkie Góry Wododziałowe": "Góry we wschodniej Australii",
      "Wielki Basen Artezyjski": "Rozległa nizina Australii",
      "Wielka Rafa Koralowa": "Atrakcja przy wschodnim wybrzeżu Australii",
      "Uluru": "Formacja skalna będąca świętym miejscem Aborygenów"
    }
  },
  {
    "id": "R06_AUST_11",
    "section": "Australia i Oceania",
    "type": "sort",
    "prompt": "Podziel produkty australijskiej gospodarki na rolnicze i wydobywane surowce mineralne.",
    "explanation": "Australia uprawia zboża i winorośl oraz hoduje owce; wydobywa m.in. boksyty, rudy żelaza i węgiel kamienny.",
    "options": null,
    "categories": [
      "Rolnictwo i hodowla",
      "Górnictwo"
    ],
    "items": [
      "boksyty",
      "rudy żelaza",
      "węgiel kamienny",
      "pszenica",
      "wełna owcza",
      "winogrona"
    ],
    "answer": {
      "Rolnictwo i hodowla": [
        "pszenica",
        "wełna owcza",
        "winogrona"
      ],
      "Górnictwo": [
        "boksyty",
        "rudy żelaza",
        "węgiel kamienny"
      ]
    }
  },
  {
    "id": "R06_AUST_12",
    "section": "Australia i Oceania",
    "type": "sequence",
    "prompt": "Uszereguj miasta Australii od największej do najmniejszej liczby mieszkańców w 2021 roku.",
    "explanation": "W 2021 roku liczba ludności Sydney wynosiła 5,3 mln, Melbourne 5,1 mln, Brisbane 2,5 mln, Perth 2,1 mln, a Adelaide 1,4 mln.",
    "options": null,
    "items": [
      "Brisbane",
      "Perth",
      "Adelaide",
      "Sydney",
      "Melbourne"
    ],
    "answer": [
      "Sydney",
      "Melbourne",
      "Brisbane",
      "Perth",
      "Adelaide"
    ]
  },
  {
    "id": "R06_POLA_01",
    "section": "Arktyka i Antarktyka",
    "type": "single_choice",
    "prompt": "Który z wymienionych obszarów należy do Arktyki?",
    "explanation": "Arktyka obejmuje Ocean Arktyczny z wyspami oraz północne fragmenty Europy, Azji i Ameryki Północnej.",
    "options": [
      "Ocean Arktyczny wraz z otaczającymi go wyspami",
      "Antarktyda",
      "Ocean Południowy",
      "Góry Transantarktyczne",
      "Masyw Vinsona",
      "Lądolód antarktyczny"
    ],
    "answer": 0
  },
  {
    "id": "R06_POLA_02",
    "section": "Arktyka i Antarktyka",
    "type": "single_choice",
    "prompt": "Jak nazywa się kontynent przykryty rozległym lądolodem w rejonie bieguna południowego?",
    "explanation": "Antarktydę w większości pokrywa lądolód antarktyczny.",
    "options": [
      "Grenlandia",
      "Antarktyda",
      "Australia",
      "Ameryka Północna",
      "Azja",
      "Europa"
    ],
    "answer": 1
  },
  {
    "id": "R06_POLA_03",
    "section": "Arktyka i Antarktyka",
    "type": "single_choice",
    "prompt": "Jak nazywa się najwyższy szczyt Antarktydy?",
    "explanation": "Najwyższy szczyt Antarktydy to Masyw Vinsona, położony w Antarktydzie Zachodniej.",
    "options": [
      "Góra Kościuszki",
      "Denali",
      "Puncak Jaya",
      "Aconcagua",
      "Masyw Vinsona"
    ],
    "answer": 4
  },
  {
    "id": "R06_POLA_04",
    "section": "Arktyka i Antarktyka",
    "type": "multi_select",
    "prompt": "Zaznacz rośliny i formy roślinności typowe dla tundry Arktyki.",
    "explanation": "W tundrze występują m.in. mchy, porosty i niskie krzewy przystosowane do silnego wiatru.",
    "options": [
      "Mchy",
      "Porosty",
      "Niskie krzewy",
      "Wielopiętrowe lasy deszczowe",
      "Gaje eukaliptusowe",
      "Roślinność makii śródziemnomorskiej"
    ],
    "image": "r06_tundra_arktyczna.jpg",
    "answer": [
      0,
      1,
      2
    ]
  },
  {
    "id": "R06_POLA_05",
    "section": "Arktyka i Antarktyka",
    "type": "true_false",
    "prompt": "Arktyka i Antarktyka to obszary o bardzo niskiej gęstości zaludnienia.",
    "explanation": "Surowy klimat i wyjątkowo niskie temperatury powodują, że wiele terenów okołobiegunowych pozostaje niezamieszkanych.",
    "options": null,
    "answer": true
  },
  {
    "id": "R06_POLA_06",
    "section": "Arktyka i Antarktyka",
    "type": "fill_in",
    "prompt": "Wzniesienia górskie wystające ponad powierzchnię lądolodu na Antarktydzie nazywa się __________.",
    "explanation": "Nunataki to wzniesienia skalne wystające ponad powierzchnię lądolodu, spotykane m.in. na Antarktydzie.",
    "options": null,
    "altAnswers": [
      [
        "nunatakami",
        "nunatak",
        "nunataki"
      ]
    ],
    "image": "r06_nunatak_w_ladolodzie.jpg",
    "answer": [
      "nunatakami"
    ]
  },
  {
    "id": "R06_POLA_07",
    "section": "Arktyka i Antarktyka",
    "type": "riddle",
    "prompt": "Jak nazywa się wielka bryła lodu oderwana od lodowca, która dryfuje po oceanie?",
    "explanation": "Oderwane fragmenty lodowców mogą dryfować po morzu jako góry lodowe, z których znaczna część znajduje się pod wodą.",
    "options": null,
    "altAnswers": [
      "góra lodowa",
      "gory lodowe",
      "góry lodowe"
    ],
    "answer": "góra lodowa"
  },
  {
    "id": "R06_POLA_08",
    "section": "Arktyka i Antarktyka",
    "type": "odd_one_out",
    "prompt": "Wskaż społeczność, która nie jest rdzenną ludnością Arktyki: Inuici, Nieńcy, Lapończycy, Aborygeni.",
    "explanation": "Inuici, Nieńcy i Lapończycy to rdzenne społeczności Arktyki; Aborygeni są rdzennymi mieszkańcami Australii.",
    "options": null,
    "answer": "Aborygeni"
  },
  {
    "id": "R06_POLA_09",
    "section": "Arktyka i Antarktyka",
    "type": "scenario",
    "prompt": "Naukowcy pracują na całorocznej stacji w obszarze polarnym. Zbierają pomiary pogody, obserwują lodowce i badają miejscowe organizmy. Jaki jest główny cel takich działań?",
    "explanation": "Stacje polarne badają klimat, florę i faunę, zasoby wodne oraz lądolody i lodowce.",
    "options": [
      "Poznanie środowiska polarnego i jego zmian",
      "Zakładanie farm trzciny cukrowej",
      "Budowanie megalopolis",
      "Powiększanie plantacji soi",
      "Produkcja samochodów",
      "Zamiana tundry w pustynię"
    ],
    "image": "r06_stacja_polarnych_badaczy.jpg",
    "answer": 0
  },
  {
    "id": "R06_POLA_10",
    "section": "Arktyka i Antarktyka",
    "type": "match",
    "prompt": "Połącz rdzenną społeczność Arktyki z regionem jej zamieszkiwania.",
    "explanation": "Tekst umiejscawia Inuitów na północy Ameryki Północnej i Syberii, Nieńców w Rosji, a Lapończyków w Skandynawii.",
    "options": null,
    "left": [
      "Inuici",
      "Nieńcy",
      "Lapończycy"
    ],
    "right": [
      "Północ Skandynawii",
      "Północne obszary Rosji",
      "Północ Ameryki Północnej oraz Syberia"
    ],
    "answer": {
      "Inuici": "Północ Ameryki Północnej oraz Syberia",
      "Nieńcy": "Północne obszary Rosji",
      "Lapończycy": "Północ Skandynawii"
    }
  },
  {
    "id": "R06_POLA_11",
    "section": "Arktyka i Antarktyka",
    "type": "sort",
    "prompt": "Przyporządkuj zjawiska i obiekty do Arktyki albo Antarktydy.",
    "explanation": "Na północy występują niedźwiedzie polarne i renifery oraz żyją Inuici; na Antarktydzie występują pingwiny, Góry Transantarktyczne i Masyw Vinsona.",
    "options": null,
    "categories": [
      "Arktyka",
      "Antarktyda"
    ],
    "items": [
      "pingwiny cesarskie",
      "Góry Transantarktyczne",
      "Masyw Vinsona",
      "niedźwiedzie polarne",
      "renifery",
      "Inuici"
    ],
    "image": "r06_tundra_arktyczna.jpg",
    "answer": {
      "Arktyka": [
        "niedźwiedzie polarne",
        "renifery",
        "Inuici"
      ],
      "Antarktyda": [
        "pingwiny cesarskie",
        "Góry Transantarktyczne",
        "Masyw Vinsona"
      ]
    }
  },
  {
    "id": "R06_POLA_12",
    "section": "Arktyka i Antarktyka",
    "type": "sequence",
    "prompt": "Ułóż w kolejności łańcuch zmian prowadzących do podnoszenia się poziomu oceanów.",
    "explanation": "Ocieplenie przyspiesza topnienie lądolodów, a woda z lodu lądowego zwiększa objętość wody oceanicznej.",
    "options": null,
    "items": [
      "Dopływ wody z lądolodów do oceanów",
      "Podnoszenie się poziomu wszechoceanu",
      "Globalne ocieplenie klimatu",
      "Przyspieszenie topnienia lądolodów"
    ],
    "answer": [
      "Globalne ocieplenie klimatu",
      "Przyspieszenie topnienia lądolodów",
      "Dopływ wody z lądolodów do oceanów",
      "Podnoszenie się poziomu wszechoceanu"
    ]
  },
  {
    "id": "R06_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Do jakiej szerokości geograficznej północnej sięgają lasy na wschodzie Kanady, ochładzanym przez Prąd Labradorski?",
    "explanation": "Na wschodzie Kanady granica występowania lasów sięga około 52°N, a na zachodzie przekracza koło podbiegunowe.",
    "options": [
      "Około 40°N",
      "Około 46°N",
      "Około 52°N",
      "Około 60°N",
      "Około 66°N",
      "Około 75°N"
    ],
    "answer": 2
  },
  {
    "id": "R06_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W którym roku utworzono Polską Stację Antarktyczną im. Henryka Arctowskiego?",
    "explanation": "Polska Stacja Antarktyczna im. Henryka Arctowskiego powstała w 1977 roku.",
    "options": [
      "1898",
      "1957",
      "1971",
      "1975",
      "1977",
      "2021"
    ],
    "image": "r06_stacja_polarnych_badaczy.jpg",
    "answer": 4
  },
  {
    "id": "R06_HARD_03",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jak nazywa się megalopolis wokół Wielkich Jezior, łączące ośrodki USA i Kanady?",
    "explanation": "ChiPitts to megalopolis w regionie Wielkich Jezior, skupiające m.in. Chicago, Detroit, Cleveland i Toronto.",
    "options": [
      "BosWash",
      "SanSan",
      "ChiPitts",
      "Dolina Krzemowa",
      "Silicon Valley",
      "Aleja Tornad"
    ],
    "answer": 2
  },
  {
    "id": "R06_HARD_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Wskaż ważne surowce mineralne wydobywane i eksportowane przez Australię.",
    "explanation": "Boksyty, rudy żelaza i złoto są surowcami wydobywanymi w Australii; pozostałe produkty pochodzą z upraw.",
    "options": [
      "Boksyty",
      "Rudy żelaza",
      "Złoto",
      "Pszenica",
      "Bawełna",
      "Winogrona"
    ],
    "answer": [
      0,
      1,
      2
    ]
  },
  {
    "id": "R06_HARD_05",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz prawidłowe zestawienia prądu morskiego i jego wpływu na klimat.",
    "explanation": "Ciepły Prąd Alaski łagodzi klimat, zimny Kalifornijski zmniejsza opady, a Peruwiański sprzyja suchości wybrzeży Andów.",
    "options": [
      "Prąd Alaski — łagodniejsze zimy",
      "Prąd Kalifornijski — mniejsze opady",
      "Prąd Peruwiański — suchość przy Atakamie",
      "Prąd Labradorski — silne ocieplenie północno-wschodniej Kanady",
      "Prąd Zatokowy — ochłodzenie wybrzeża Florydy",
      "Prąd Brazylijski — rozwój zlodowaceń przy wybrzeżu"
    ],
    "answer": [
      0,
      1,
      2
    ]
  },
  {
    "id": "R06_HARD_06",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Zimny Prąd Labradorski pozwala lasom Kanady sięgać dalej na północ niż ciepły Prąd Alaski.",
    "explanation": "Na zachodzie Kanady, pod wpływem ciepłego Prądu Alaski, lasy sięgają dalej na północ niż na wschodzie.",
    "options": null,
    "answer": false
  },
  {
    "id": "R06_HARD_07",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Najwyższym szczytem Australii i Oceanii w ujęciu obejmującym Nową Gwineę jest __________.",
    "explanation": "Puncak Jaya (4884 m n.p.m.) na Nowej Gwinei jest najwyższym szczytem Australii i Oceanii w ujęciu obejmującym Nową Gwineę.",
    "options": null,
    "altAnswers": [
      [
        "Puncak Jaya",
        "Puncak Jaya (4884 m)"
      ]
    ],
    "answer": [
      "Puncak Jaya"
    ]
  },
  {
    "id": "R06_HARD_08",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Podaj krótką nazwę megalopolis kalifornijskiego obejmującego powiązane zespoły San Francisco i Los Angeles.",
    "explanation": "Megalopolis SanSan jest nazywane również San-La-San.",
    "options": null,
    "altAnswers": [
      "SanSan",
      "San-La-San",
      "Sansan"
    ],
    "answer": "SanSan"
  },
  {
    "id": "R06_HARD_09",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Badacz porównuje dwa kanadyjskie wybrzeża. Na północnym zachodzie jest więcej opadów i zimy są łagodniejsze, podczas gdy okolice Labradoru są zimniejsze. Jaka para prądów najlepiej tłumaczy tę różnicę?",
    "explanation": "Ciepły Prąd Alaski wpływa na klimat północno-zachodniego wybrzeża, a zimny Labradorski ochładza północno-wschodnie wybrzeże Kanady.",
    "options": [
      "Prąd Alaski i Prąd Labradorski",
      "Prąd Kalifornijski i Prąd Brazylijski",
      "Prąd Peruwiański i Prąd Karaibski",
      "Prąd Zatokowy i Prąd Brazylijski",
      "Prąd Karaibski i Prąd Peruwiański",
      "Prąd Północnorównikowy i Prąd Kalifornijski"
    ],
    "image": "r06_wybrzeze_suche_i_wilgotne.jpg",
    "answer": 0
  },
  {
    "id": "R06_HARD_10",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz polskie stacje badawcze z rokiem powstania i miejscem ich lokalizacji.",
    "explanation": "Polska Stacja Antarktyczna im. H. Arctowskiego powstała w 1977 roku na Antarktydzie, Hornsund w 1957 roku na Spitsbergenie, a stacja im. S. Baranowskiego w 1971 roku na Spitsbergenie.",
    "options": null,
    "left": [
      "Polska Stacja Antarktyczna im. Henryka Arctowskiego",
      "Polska Stacja Polarna Hornsund",
      "Stacja Polarna im. Stanisława Baranowskiego"
    ],
    "right": [
      "Spitsbergen — 1971",
      "Spitsbergen — 1957",
      "Antarktyda — 1977"
    ],
    "answer": {
      "Polska Stacja Antarktyczna im. Henryka Arctowskiego": "Antarktyda — 1977",
      "Polska Stacja Polarna Hornsund": "Spitsbergen — 1957",
      "Stacja Polarna im. Stanisława Baranowskiego": "Spitsbergen — 1971"
    }
  },
  {
    "id": "R06_HARD_11",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj szczegółowe informacje o rozmieszczeniu ludności do USA lub Australii.",
    "explanation": "W USA w rejonie Wielkich Jezior rozwinęły się duże miasta i hutnictwo; w Australii ludność koncentruje się na południowym wschodzie, a interior jest słabo zaludniony.",
    "options": null,
    "categories": [
      "USA",
      "Australia"
    ],
    "items": [
      "duża koncentracja mieszkańców na południowym wschodzie",
      "dodatnie saldo migracji",
      "słabo zaludnione pustynne wnętrze kontynentu",
      "duże skupiska przy Wielkich Jeziorach",
      "megalopolis BosWash",
      "historyczne hutnictwo oparte na węglu i rudzie żelaza"
    ],
    "answer": {
      "USA": [
        "duże skupiska przy Wielkich Jeziorach",
        "megalopolis BosWash",
        "historyczne hutnictwo oparte na węglu i rudzie żelaza"
      ],
      "Australia": [
        "duża koncentracja mieszkańców na południowym wschodzie",
        "dodatnie saldo migracji",
        "słabo zaludnione pustynne wnętrze kontynentu"
      ]
    }
  },
  {
    "id": "R06_HARD_12",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy przemian gospodarki USA od najstarszych do najnowszych.",
    "explanation": "Przemiany gospodarki USA obejmowały kolejno rozwój eksploatacji surowców i hutnictwa w XIX wieku, późniejszy wzrost przetwórstwa oraz współczesne znaczenie zaawansowanych technologii.",
    "options": null,
    "items": [
      "Rozbudowa różnorodnego przemysłu przetwórczego",
      "Wzrost znaczenia zaawansowanych technologii",
      "Rozpoczęcie wydobycia węgla i rud żelaza na północnym wschodzie",
      "Rozwój hut dostarczających stal"
    ],
    "answer": [
      "Rozpoczęcie wydobycia węgla i rud żelaza na północnym wschodzie",
      "Rozwój hut dostarczających stal",
      "Rozbudowa różnorodnego przemysłu przetwórczego",
      "Wzrost znaczenia zaawansowanych technologii"
    ]
  }
];

const KID_PROMPTS = {
  "R06_KRAJ_01": "Jakie góry ciągną się wzdłuż zachodu Ameryki Północnej?",
  "R06_KRAJ_05": "Czy najważniejsze góry obu Ameryk biegną głównie z północy na południe?",
  "R06_KRAJ_09": "Dlaczego zachodnia Kanada ma łagodniejsze warunki dla lasów niż okolice Labradoru?",
  "R06_PROB_04": "Co powoduje wycinanie lasów Amazonii? Zaznacz wszystkie poprawne odpowiedzi.",
  "R06_PROB_07": "Jak nazywa się wielki obszar, w którym kilka miast i ich przedmieścia tworzą jedną całość?",
  "R06_PROB_09": "Jakie zjawisko może powstać, gdy nad USA spotykają się ciepłe i zimne masy powietrza?",
  "R06_USA_04": "Co pomogło rozwinąć Dolinę Krzemową?",
  "R06_USA_09": "Jak nazywa się wyrzucanie dużej ilości dobrego jedzenia?",
  "R06_AUST_04": "Które zwierzęta są charakterystyczne dla Australii?",
  "R06_AUST_09": "Gdzie w Australii łatwiej żyć dzięki łagodniejszemu klimatowi i wodzie?",
  "R06_POLA_04": "Jakie rośliny rosną na arktycznej tundrze?",
  "R06_POLA_09": "Po co naukowcy badają pogodę, zwierzęta i lód na stacjach polarnych?"
};

const chapter = {
  id: "r06",
  number: 6,
  title: "Ameryki, Australia i obszary okołobiegunowe",
  icon: "🌎",
  sectionOrder: [
    "Krajobrazy i klimat Ameryk",
    "Zagrożenia i problemy Ameryk",
    "Stany Zjednoczone i ich gospodarka",
    "Australia i Oceania",
    "Arktyka i Antarktyka"
  ],
  sectionIcons: {
    "Krajobrazy i klimat Ameryk": "🏔️",
    "Zagrożenia i problemy Ameryk": "🌪️",
    "Stany Zjednoczone i ich gospodarka": "🏙️",
    "Australia i Oceania": "🦘",
    "Arktyka i Antarktyka": "🧊"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
