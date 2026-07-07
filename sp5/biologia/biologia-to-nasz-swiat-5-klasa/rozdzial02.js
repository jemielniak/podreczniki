const ALL_EXERCISES = [
  {
    "id": "TNS_R02_W_01",
    "section": "Wirusy",
    "type": "single_choice",
    "prompt": "Spójrz na rysunek. Jak nazywa się białkowa warstwa otaczająca materiał genetyczny wirusa?",
    "image": "/img/tns_r02_wirus_budowa.jpg",
    "options": [
      "otoczka białkowa",
      "cytozol",
      "ściana komórkowa",
      "jądro komórkowe"
    ],
    "answer": 0,
    "explanation": "Wirus nie ma komórki. Jego materiał genetyczny otacza otoczka białkowa, a nie jądro czy ściana komórkowa."
  },
  {
    "id": "TNS_R02_W_02",
    "section": "Wirusy",
    "type": "true_false",
    "prompt": "Wirusy są organizmami, bo potrafią same oddychać i rosnąć.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz. Wirusy nie oddychają, nie rosną i nie mają budowy komórkowej, więc nie uznaje się ich za organizmy."
  },
  {
    "id": "TNS_R02_W_03",
    "section": "Wirusy",
    "type": "multi_select",
    "prompt": "Zaznacz to, czego wirusy nie potrafią robić samodzielnie.",
    "options": [
      "oddychać",
      "rosnąć",
      "wykonywać fotosyntezę",
      "rozmnażać się poza komórką gospodarza",
      "kichać"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Wirusy nie oddychają, nie rosną i nie namnażają się samodzielnie. W podręczniku mowa właśnie o tych podstawowych czynnościach życiowych."
  },
  {
    "id": "TNS_R02_W_04",
    "section": "Wirusy",
    "type": "fill_in",
    "prompt": "Wirus składa się z kwasu __________ i otoczki __________.",
    "options": null,
    "answer": [
      "nukleinowego",
      "białkowej"
    ],
    "altAnswers": [
      [
        "nukleinowego",
        "nukleinowy",
        "kwasu nukleinowego"
      ],
      [
        "białkowej",
        "białkowa",
        "otoczki białkowej"
      ]
    ],
    "explanation": "Najprostszy opis wirusa to: kwas nukleinowy otoczony warstwą białek."
  },
  {
    "id": "TNS_R02_W_05",
    "section": "Wirusy",
    "type": "single_choice",
    "prompt": "Na ilustracji pokazano trzy kształty wirusów. Który z nich atakuje bakterie?",
    "image": "/img/tns_r02_wirus_ksztalty.jpg",
    "options": [
      "wirus mozaiki tytoniu",
      "wirus HIV",
      "bakteriofag",
      "żaden z nich"
    ],
    "answer": 2,
    "explanation": "Bakteriofag zakaża bakterie. Pozostałe wirusy atakują inne organizmy."
  },
  {
    "id": "TNS_R02_W_06",
    "section": "Wirusy",
    "type": "scenario",
    "prompt": "Olek ma gorączkę, kaszel i katar. Chce mimo tego iść do szkoły, bo nie chce opuścić kartkówki. Co najbardziej pomaga ograniczyć rozprzestrzenianie wirusów?",
    "options": [
      "pójście do szkoły, ale w czapce",
      "zostanie w domu i unikanie kontaktu z innymi",
      "pożyczenie koledze butelki z wodą",
      "podanie ręki wszystkim na wejściu"
    ],
    "answer": 1,
    "explanation": "Najlepiej unikać kontaktu z innymi osobami, gdy są objawy choroby. To ogranicza zakażenia."
  },
  {
    "id": "TNS_R02_W_07",
    "section": "Wirusy",
    "type": "sequence",
    "prompt": "Ułóż etapy tego sposobu opanowywania komórki przez wirusa w dobrej kolejności.",
    "image": "/img/tns_r02_wirus_zakazenie.jpg",
    "options": null,
    "items": [
      "kwas nukleinowy wirusa wnika do komórki",
      "wirus przytwierdza się do powierzchni komórki",
      "powstają liczne kopie wirusa",
      "nowe wirusy opuszczają komórkę"
    ],
    "answer": [
      "wirus przytwierdza się do powierzchni komórki",
      "kwas nukleinowy wirusa wnika do komórki",
      "powstają liczne kopie wirusa",
      "nowe wirusy opuszczają komórkę"
    ],
    "explanation": "Najpierw wirus przyczepia się do komórki, potem wprowadza materiał genetyczny, następnie powstają kopie wirusa i na końcu opuszczają one komórkę."
  },
  {
    "id": "TNS_R02_W_08",
    "section": "Wirusy",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: grypa, COVID-19, odra, angina.",
    "options": null,
    "answer": "angina",
    "explanation": "Angina jest zwykle wywoływana przez bakterie, a pozostałe choroby są wirusowe."
  },
  {
    "id": "TNS_R02_W_09",
    "section": "Wirusy",
    "type": "match",
    "prompt": "Połącz sposób zakażenia wirusem z przykładem.",
    "options": null,
    "left": [
      "droga kropelkowa",
      "kontakt z krwią lub śliną",
      "bezpośredni kontakt z chorym"
    ],
    "right": [
      "kichanie obok innych osób",
      "wspólny kontakt z zakażoną krwią",
      "dotykanie chorej osoby i przeniesienie wirusa z dłoni do nosa"
    ],
    "answer": {
      "droga kropelkowa": "kichanie obok innych osób",
      "kontakt z krwią lub śliną": "wspólny kontakt z zakażoną krwią",
      "bezpośredni kontakt z chorym": "dotykanie chorej osoby i przeniesienie wirusa z dłoni do nosa"
    },
    "explanation": "Wirusy mogą szerzyć się na kilka sposobów: przez kropelki, przez kontakt z wydzielinami oraz przez bliski kontakt z chorym."
  },
  {
    "id": "TNS_R02_W_10",
    "section": "Wirusy",
    "type": "sort",
    "prompt": "Przyporządkuj zachowania do właściwej grupy.",
    "options": null,
    "items": [
      "mycie rąk",
      "kichanie bez zasłaniania ust",
      "szczepienie ochronne",
      "trzymanie dystansu od chorego",
      "pójście na lekcje mimo gorączki"
    ],
    "categories": [
      "pomaga się chronić",
      "sprzyja zakażeniu"
    ],
    "answer": {
      "pomaga się chronić": [
        "mycie rąk",
        "szczepienie ochronne",
        "trzymanie dystansu od chorego"
      ],
      "sprzyja zakażeniu": [
        "kichanie bez zasłaniania ust",
        "pójście na lekcje mimo gorączki"
      ]
    },
    "explanation": "Higiena, dystans i szczepienia zmniejszają ryzyko zakażenia. Z kolei kaszel czy obecność chorej osoby w grupie zwiększają ryzyko."
  },
  {
    "id": "TNS_R02_W_11",
    "section": "Wirusy",
    "type": "riddle",
    "prompt": "Nie mam budowy komórkowej. Sam nie oddycham ani nie rosnę, ale potrafię namnażać się w cudzej komórce. Kim jestem?",
    "options": null,
    "answer": "wirus",
    "altAnswers": [
      "wirus",
      "wirusem",
      "wirusa",
      "wirusy"
    ],
    "explanation": "To opis wirusa: działa tylko w zakażonej komórce i nie ma własnej budowy komórkowej."
  },
  {
    "id": "TNS_R02_W_12",
    "section": "Wirusy",
    "type": "scenario",
    "prompt": "Mama mówi: „Nie podchodź blisko do chorego kuzyna, bo może cię zarazić kaszlem”. O jakiej drodze zakażenia mówi?",
    "options": [
      "drodze kropelkowej",
      "drodze pokarmowej",
      "przez ukąszenie owada",
      "przez korzenie roślin"
    ],
    "answer": 0,
    "explanation": "Kaszel i kichanie rozsiewają drobne kropelki. To właśnie droga kropelkowa."
  },
  {
    "id": "TNS_R02_B_01",
    "section": "Bakterie",
    "type": "single_choice",
    "prompt": "Spójrz na model komórki bakteryjnej. Jak nazywa się długi element pomagający bakterii się poruszać?",
    "image": "/img/tns_r02_bakteria_budowa.jpg",
    "options": [
      "rzęska",
      "witka",
      "jądro",
      "chloroplast"
    ],
    "answer": 1,
    "explanation": "U wielu bakterii ruch umożliwia witka. Bakterie nie mają jądra ani chloroplastów."
  },
  {
    "id": "TNS_R02_B_02",
    "section": "Bakterie",
    "type": "multi_select",
    "prompt": "Na ilustracji pokazano znaczenie bakterii. Zaznacz przykłady pożytecznej roli bakterii.",
    "image": "/img/tns_r02_znaczenie_bakterii.jpg",
    "options": [
      "produkcja jogurtu i kiszonek",
      "rozkład szczątków organizmów",
      "wywoływanie anginy",
      "pomoc organizmom w przewodzie pokarmowym",
      "psucie żywności"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Bakterie mogą pomagać w produkcji żywności, rozkładać szczątki i wspierać organizmy. Choroby i psucie żywności to przykłady ich szkodliwego działania."
  },
  {
    "id": "TNS_R02_B_03",
    "section": "Bakterie",
    "type": "true_false",
    "prompt": "Bakterie żyją tylko w ciepłej wodzie i w ciałach zwierząt.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz. Bakterie żyją prawie wszędzie: w wodzie, glebie, powietrzu, na organizmach i nawet w bardzo trudnych warunkach."
  },
  {
    "id": "TNS_R02_B_04",
    "section": "Bakterie",
    "type": "fill_in",
    "prompt": "Bakterie są organizmami __________, a ich komórki nie mają __________ komórkowego.",
    "options": null,
    "answer": [
      "jednokomórkowymi",
      "jądra"
    ],
    "altAnswers": [
      [
        "jednokomórkowymi",
        "jednokomórkowe",
        "jednokomórkowy",
        "jednokomórkowa"
      ],
      [
        "jądra",
        "jądro",
        "jądra komórkowego"
      ]
    ],
    "explanation": "Bakterie to organizmy jednokomórkowe. Ich komórki nie mają jądra komórkowego."
  },
  {
    "id": "TNS_R02_B_05",
    "section": "Bakterie",
    "type": "single_choice",
    "prompt": "Spójrz na rysunek kształtów bakterii. Która nazwa pasuje do długiej, spiralnie skręconej komórki?",
    "image": "/img/tns_r02_bakterie_ksztalty.jpg",
    "options": [
      "ziarenkowiec",
      "pałeczka",
      "krętek",
      "drożdżak"
    ],
    "answer": 2,
    "explanation": "Krętek ma wydłużony, skręcony kształt. Ziarenkowiec jest kulisty, a pałeczka podłużna i walcowata."
  },
  {
    "id": "TNS_R02_B_06",
    "section": "Bakterie",
    "type": "scenario",
    "prompt": "Ktoś zjadł niedogotowane jajko i potem bardzo rozbolał go brzuch. Jaką drogą mogło dojść do zakażenia bakteriami?",
    "options": [
      "pokarmową",
      "kropelkową",
      "przez skórę",
      "przez światło słoneczne"
    ],
    "answer": 0,
    "explanation": "Bakterie mogą dostać się do organizmu wraz z zakażonym jedzeniem lub wodą. To droga pokarmowa."
  },
  {
    "id": "TNS_R02_B_07",
    "section": "Bakterie",
    "type": "match",
    "prompt": "Połącz drogę rozprzestrzeniania bakterii z najlepszym przykładem ochrony.",
    "options": null,
    "left": [
      "droga kropelkowa",
      "droga pokarmowa",
      "przez krew",
      "kontakt płciowy"
    ],
    "right": [
      "częste mycie rąk i dobre przygotowanie posiłków",
      "szczepienia i odzież chroniąca przed kleszczami",
      "wietrzenie pomieszczeń i izolowanie chorych",
      "stosowanie zabezpieczeń"
    ],
    "answer": {
      "droga kropelkowa": "wietrzenie pomieszczeń i izolowanie chorych",
      "droga pokarmowa": "częste mycie rąk i dobre przygotowanie posiłków",
      "przez krew": "szczepienia i odzież chroniąca przed kleszczami",
      "kontakt płciowy": "stosowanie zabezpieczeń"
    },
    "explanation": "Różne drogi zakażenia wymagają różnych sposobów ochrony.",
    "image": "/img/tns_r02_bakterie_drogi_zakazen.jpg"
  },
  {
    "id": "TNS_R02_B_08",
    "section": "Bakterie",
    "type": "sort",
    "prompt": "Posortuj przykłady działania bakterii.",
    "options": null,
    "items": [
      "produkcja kefiru",
      "rozkład szczątków organizmów",
      "zapalenie płuc",
      "wspieranie pracy przewodu pokarmowego",
      "psucie żywności"
    ],
    "categories": [
      "pożyteczne",
      "szkodliwe"
    ],
    "answer": {
      "pożyteczne": [
        "produkcja kefiru",
        "rozkład szczątków organizmów",
        "wspieranie pracy przewodu pokarmowego"
      ],
      "szkodliwe": [
        "zapalenie płuc",
        "psucie żywności"
      ]
    },
    "explanation": "Niektóre bakterie są dla nas bardzo pożyteczne, ale inne wywołują choroby lub psują jedzenie."
  },
  {
    "id": "TNS_R02_B_09",
    "section": "Bakterie",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: gruźlica, borelioza, salmonelloza, odra.",
    "options": null,
    "answer": "odra",
    "explanation": "Odra jest chorobą wirusową. Pozostałe choroby wywołują bakterie."
  },
  {
    "id": "TNS_R02_B_10",
    "section": "Bakterie",
    "type": "true_false",
    "prompt": "Niektóre bakterie potrafią wytwarzać tlen w czasie fotosyntezy.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. W podręczniku podano, że samożywne bakterie, na przykład sinice, produkują tlen."
  },
  {
    "id": "TNS_R02_B_11",
    "section": "Bakterie",
    "type": "sequence",
    "prompt": "Ułóż prosty opis rozmnażania się bakterii przez podział komórki.",
    "options": null,
    "items": [
      "powstają dwie identyczne komórki",
      "komórka bakteryjna rośnie",
      "zawartość komórki rozdziela się na dwie części"
    ],
    "answer": [
      "komórka bakteryjna rośnie",
      "zawartość komórki rozdziela się na dwie części",
      "powstają dwie identyczne komórki"
    ],
    "explanation": "Najpierw komórka rośnie, potem się dzieli, a na końcu powstają dwie komórki potomne."
  },
  {
    "id": "TNS_R02_B_12",
    "section": "Bakterie",
    "type": "riddle",
    "prompt": "Jestem bakterią o długim, spiralnym kształcie. Jak mnie nazywają?",
    "options": null,
    "answer": "krętek",
    "altAnswers": [
      "krętek",
      "krętki",
      "krętkiem"
    ],
    "explanation": "Spiralnie skręcona bakteria to krętek."
  },
  {
    "id": "TNS_R02_B_13",
    "section": "Bakterie",
    "type": "scenario",
    "prompt": "Po spacerze w lesie tata mówi, żeby obejrzeć skórę i uważać na kleszcze, bo mogą przenosić bakterie. O jaką chorobę chodziło w podręczniku?",
    "options": [
      "malarię",
      "boreliozę",
      "świnkę",
      "grypę"
    ],
    "answer": 1,
    "explanation": "Borelioza może szerzyć się po ukąszeniu przez kleszcza będącego nosicielem bakterii."
  },
  {
    "id": "TNS_R02_P_01",
    "section": "Protisty",
    "type": "single_choice",
    "prompt": "Jaka wspólna cecha łączy wszystkie protisty?",
    "options": [
      "mają korzenie",
      "mają jądro w komórce",
      "wszystkie mają kapelusze",
      "wszystkie są zwierzętami"
    ],
    "answer": 1,
    "explanation": "Protisty są bardzo różne, ale wspólną cechą ich komórek jest obecność jądra komórkowego."
  },
  {
    "id": "TNS_R02_P_02",
    "section": "Protisty",
    "type": "true_false",
    "prompt": "Wszystkie protisty są jednokomórkowe.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz. Są wśród nich zarówno organizmy jednokomórkowe, jak i wielokomórkowe."
  },
  {
    "id": "TNS_R02_P_03",
    "section": "Protisty",
    "type": "multi_select",
    "prompt": "Na podstawie ilustracji wybierz miejsca, w których często spotyka się protisty.",
    "image": "/img/tns_r02_protisty_srodowiska.jpg",
    "options": [
      "woda",
      "wilgotne miejsca",
      "wnętrze organizmów",
      "rozgrzane żelazko",
      "księżyc"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Protisty żyją przede wszystkim w wodzie, wilgotnych miejscach i wewnątrz innych organizmów."
  },
  {
    "id": "TNS_R02_P_04",
    "section": "Protisty",
    "type": "single_choice",
    "prompt": "Spójrz na rysunki trzech protistów. Który z nich ma chloroplasty i porusza się za pomocą wici?",
    "image": "/img/tns_r02_euglena_pantofelek_morszczyn.jpg",
    "options": [
      "pantofelek",
      "morszczyn pęcherzykowaty",
      "euglena zielona",
      "żaden"
    ],
    "answer": 2,
    "explanation": "Euglena zielona ma chloroplasty i porusza się za pomocą wici."
  },
  {
    "id": "TNS_R02_P_05",
    "section": "Protisty",
    "type": "fill_in",
    "prompt": "Euglena zielona może odżywiać się __________ i __________.",
    "options": null,
    "answer": [
      "samożywnie",
      "cudzożywnie"
    ],
    "altAnswers": [
      [
        "samożywnie",
        "samożywny",
        "samożywna",
        "samożywne"
      ],
      [
        "cudzożywnie",
        "cudzożywny",
        "cudzożywna",
        "cudzożywne"
      ]
    ],
    "explanation": "Euglena jest wyjątkowa, bo może zdobywać pokarm na dwa sposoby: samożywnie i cudzożywnie."
  },
  {
    "id": "TNS_R02_P_06",
    "section": "Protisty",
    "type": "match",
    "prompt": "Połącz protista z pasującą cechą.",
    "options": null,
    "left": [
      "euglena zielona",
      "pantofelek",
      "morszczyn pęcherzykowaty"
    ],
    "right": [
      "żyje w morzu i tworzy podwodne zarośla",
      "porusza się dzięki rzęskom",
      "ma chloroplasty i wić"
    ],
    "answer": {
      "euglena zielona": "ma chloroplasty i wić",
      "pantofelek": "porusza się dzięki rzęskom",
      "morszczyn pęcherzykowaty": "żyje w morzu i tworzy podwodne zarośla"
    },
    "explanation": "Każdy z tych protistów wygląda i żyje inaczej, dlatego łatwo je odróżnić po ważnej cesze."
  },
  {
    "id": "TNS_R02_P_07",
    "section": "Protisty",
    "type": "scenario",
    "prompt": "W kropli wody z kałuży uczeń widzi zielony organizm z wicią. Co najpewniej obserwuje?",
    "options": [
      "euglenę zieloną",
      "borowika",
      "wirus HIV",
      "bakterię w kształcie pałeczki"
    ],
    "answer": 0,
    "explanation": "Zielony organizm z chloroplastami i wicią to euglena zielona."
  },
  {
    "id": "TNS_R02_P_08",
    "section": "Protisty",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: ameba, pantofelek, morszczyn pęcherzykowaty, borowik szlachetny.",
    "options": null,
    "answer": "borowik szlachetny",
    "explanation": "Borowik to grzyb, a pozostałe przykłady należą do protistów."
  },
  {
    "id": "TNS_R02_P_09",
    "section": "Protisty",
    "type": "sort",
    "prompt": "Posortuj organizmy do odpowiedniej grupy.",
    "options": null,
    "items": [
      "euglena zielona",
      "pantofelek",
      "morszczyn pęcherzykowaty",
      "ameba"
    ],
    "categories": [
      "jednokomórkowe",
      "wielokomórkowe"
    ],
    "answer": {
      "jednokomórkowe": [
        "euglena zielona",
        "pantofelek",
        "ameba"
      ],
      "wielokomórkowe": [
        "morszczyn pęcherzykowaty"
      ]
    },
    "explanation": "Większość przykładów z tej listy to protisty jednokomórkowe. Morszczyn jest wielokomórkowy."
  },
  {
    "id": "TNS_R02_P_10",
    "section": "Protisty",
    "type": "single_choice",
    "prompt": "Spójrz na ilustrację chorób protistycznych. Jak człowiek może zarazić się malarią?",
    "image": "/img/tns_r02_protisty_choroby.jpg",
    "options": [
      "po zjedzeniu kiszonego ogórka",
      "przez ukłucie samicy komara widliszka",
      "przez kichanie",
      "przez spacer po lesie bez czapki"
    ],
    "answer": 1,
    "explanation": "Malarię przenosi samica komara widliszka, która wprowadza pasożyta do krwi."
  },
  {
    "id": "TNS_R02_P_11",
    "section": "Protisty",
    "type": "scenario",
    "prompt": "Ciocia jest w ciąży i ma posprzątać kocią kuwetę. Jaka choroba opisana w podręczniku jest wtedy szczególnie niebezpieczna?",
    "options": [
      "angina",
      "borelioza",
      "toksoplazmoza",
      "odra"
    ],
    "answer": 2,
    "explanation": "Toksoplazmoza jest groźna zwłaszcza dla kobiet w ciąży."
  },
  {
    "id": "TNS_R02_P_12",
    "section": "Protisty",
    "type": "sequence",
    "prompt": "Ułóż kolejne czynności przy przygotowaniu prostego preparatu do obserwacji protistów.",
    "image": "/img/tns_r02_hodowla_protistow.jpg",
    "options": null,
    "items": [
      "położyć preparat na stoliku mikroskopu",
      "umieścić kroplę wody na szkiełku podstawowym",
      "nakryć kroplę szkiełkiem nakrywkowym",
      "wyregulować ostrość obrazu"
    ],
    "answer": [
      "umieścić kroplę wody na szkiełku podstawowym",
      "nakryć kroplę szkiełkiem nakrywkowym",
      "położyć preparat na stoliku mikroskopu",
      "wyregulować ostrość obrazu"
    ],
    "explanation": "Najpierw przygotowuje się kroplę na szkiełku, potem się ją przykrywa, ustawia preparat w mikroskopie i dopiero wtedy reguluje ostrość."
  },
  {
    "id": "TNS_R02_G_01",
    "section": "Grzyby",
    "type": "single_choice",
    "prompt": "Które zdanie o grzybach jest prawdziwe?",
    "options": [
      "wszystkie grzyby mają kapelusz",
      "każdy grzyb jest zielony",
      "wśród grzybów są także organizmy jednokomórkowe",
      "grzyby mają chloroplasty"
    ],
    "answer": 2,
    "explanation": "Do grzybów należą też organizmy jednokomórkowe, na przykład drożdże."
  },
  {
    "id": "TNS_R02_G_02",
    "section": "Grzyby",
    "type": "true_false",
    "prompt": "Grzyby mają chloroplasty, dlatego same produkują pokarm jak rośliny.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz. W komórkach grzybów nie ma chloroplastów, więc są one cudzożywne."
  },
  {
    "id": "TNS_R02_G_03",
    "section": "Grzyby",
    "type": "multi_select",
    "prompt": "Na ilustracji pokazano znaczenie grzybów. Zaznacz przykłady pożytecznej roli grzybów.",
    "image": "/img/tns_r02_znaczenie_grzybow.jpg",
    "options": [
      "produkcja pieczywa i serów",
      "rozkład szczątków organizmów",
      "wywoływanie grzybic i zatruć",
      "pomoc roślinom żyjącym z nimi w symbiozie",
      "niszczenie ścian budynków"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Grzyby mogą pomagać w produkcji żywności, rozkładzie martwej materii i wspierać rośliny. Grzybice i niszczenie budynków to działania szkodliwe."
  },
  {
    "id": "TNS_R02_G_04",
    "section": "Grzyby",
    "type": "single_choice",
    "prompt": "Spójrz na model komórki grzybowej. Z czego zbudowana jest ściana komórkowa grzyba?",
    "image": "/img/tns_r02_grzyb_komorka.jpg",
    "options": [
      "z celulozy",
      "z chityny",
      "z wapnia",
      "z chlorofilu"
    ],
    "answer": 1,
    "explanation": "Ściana komórkowa grzybów zawiera chitynę."
  },
  {
    "id": "TNS_R02_G_05",
    "section": "Grzyby",
    "type": "fill_in",
    "prompt": "Ciało grzyba wielokomórkowego jest zbudowane ze __________, a ich luźna sieć tworzy __________.",
    "options": null,
    "answer": [
      "strzępek",
      "grzybnię"
    ],
    "altAnswers": [
      [
        "strzępek",
        "strzępki",
        "strzępków",
        "strzępkami"
      ],
      [
        "grzybnię",
        "grzybnia",
        "grzybni"
      ]
    ],
    "explanation": "Ciało grzyba tworzą cienkie strzępki. Gdy tworzą luźną sieć, powstaje grzybnia."
  },
  {
    "id": "TNS_R02_G_06",
    "section": "Grzyby",
    "type": "match",
    "prompt": "Połącz przykład z właściwą grupą.",
    "options": null,
    "left": [
      "drożdże",
      "borowik szlachetny",
      "grzyby pleśniowe"
    ],
    "right": [
      "grzyb jednokomórkowy",
      "duży grzyb z owocnikiem",
      "często powodują psucie żywności"
    ],
    "answer": {
      "drożdże": "grzyb jednokomórkowy",
      "borowik szlachetny": "duży grzyb z owocnikiem",
      "grzyby pleśniowe": "często powodują psucie żywności"
    },
    "explanation": "Drożdże są jednokomórkowe, borowik ma owocnik, a pleśnie często pojawiają się na psującym się jedzeniu."
  },
  {
    "id": "TNS_R02_G_07",
    "section": "Grzyby",
    "type": "scenario",
    "prompt": "Na wilgotnej ścianie w piwnicy pojawił się ciemny nalot. Co najbardziej pasuje do tej sytuacji?",
    "options": [
      "to zwykłe nasiona roślin",
      "to mogą być grzyby pleśniowe",
      "to znak, że ściana produkuje tlen",
      "to bakterie z chloroplastami"
    ],
    "answer": 1,
    "explanation": "Wilgotne ściany mogą zostać zasiedlone przez grzyby pleśniowe."
  },
  {
    "id": "TNS_R02_G_08",
    "section": "Grzyby",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: drożdże, borowik, grzyb pleśniowy, bakteria.",
    "options": null,
    "answer": "bakteria",
    "explanation": "Drożdże, borowik i grzyb pleśniowy należą do królestwa grzybów. Bakteria nie."
  },
  {
    "id": "TNS_R02_G_09",
    "section": "Grzyby",
    "type": "sort",
    "prompt": "Posortuj nazwy grzybów do odpowiednich grup.",
    "options": null,
    "items": [
      "smardz jadalny",
      "piestrzenica kasztanowata",
      "gwiazdosz brodawkowy",
      "tęgoskór cytrynowy"
    ],
    "categories": [
      "jadalne",
      "trujące lub niejadalne",
      "chronione"
    ],
    "answer": {
      "jadalne": [
        "smardz jadalny"
      ],
      "trujące lub niejadalne": [
        "piestrzenica kasztanowata",
        "tęgoskór cytrynowy"
      ],
      "chronione": [
        "gwiazdosz brodawkowy"
      ]
    },
    "explanation": "Na ilustracji pokazano, że grzyby różnią się nie tylko wyglądem, ale też tym, czy są jadalne, szkodliwe lub chronione."
  },
  {
    "id": "TNS_R02_G_10",
    "section": "Grzyby",
    "type": "single_choice",
    "prompt": "Spójrz na rysunek porostu. Czym jest porost?",
    "image": "/img/tns_r02_porost_budowa.jpg",
    "options": [
      "samym grzybem",
      "symbiozą grzyba i organizmu samożywnego",
      "odmianą bakterii",
      "młodym owocnikiem"
    ],
    "answer": 1,
    "explanation": "Porost to wspólne życie dwóch organizmów: grzyba i organizmu samożywnego, na przykład glonu lub sinicy."
  },
  {
    "id": "TNS_R02_G_11",
    "section": "Grzyby",
    "type": "scenario",
    "prompt": "Na pniach drzew w centrum miasta prawie nie widać porostów. Co może to oznaczać?",
    "options": [
      "powietrze jest mocno zanieczyszczone",
      "drzewa są za młode",
      "jest za dużo deszczu",
      "w lesie nie ma grzybów"
    ],
    "answer": 0,
    "explanation": "Brak porostów na drzewach może wskazywać na duże zanieczyszczenie powietrza."
  },
  {
    "id": "TNS_R02_G_12",
    "section": "Grzyby",
    "type": "single_choice",
    "prompt": "Spójrz na budowę grzyba wielokomórkowego. Jak nazywa się część znajdująca się zwykle nad ziemią?",
    "image": "/img/tns_r02_grzyb_budowa.jpg",
    "options": [
      "grzybnia",
      "owocnik",
      "wodniczka",
      "otoczka śluzowa"
    ],
    "answer": 1,
    "explanation": "Widoczna część wielu grzybów to owocnik. Grzybnia zwykle znajduje się w podłożu."
  },
  {
    "id": "TNS_R02_G_13",
    "section": "Grzyby",
    "type": "true_false",
    "prompt": "Drożdże potrafią oddychać beztlenowo i przeprowadzać fermentację alkoholową.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Właśnie dlatego drożdże wykorzystuje się między innymi przy produkcji pieczywa i napojów."
  },
  {
    "id": "TNS_R02_S_01",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Spójrz na rysunek wirusa i wybierz wszystkie zdania, które dobrze go opisują.",
    "image": "/img/tns_r02_wirus_budowa.jpg",
    "options": [
      "ma materiał genetyczny",
      "ma jądro komórkowe",
      "może mieć osłonkę z wyrostkami",
      "jest zbudowany z wielu komórek",
      "nie ma budowy komórkowej"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Wirus zawiera materiał genetyczny, może mieć osłonkę z wyrostkami i nie ma budowy komórkowej. Nie ma jądra i nie jest wielokomórkowy."
  },
  {
    "id": "TNS_R02_S_02",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "U jednego chorego wirus po wniknięciu do komórki od razu zaczął tworzyć liczne kopie. U drugiego przez długi czas pozostawał utajony. Co było wspólne dla obu sytuacji?",
    "options": [
      "wirus rozmnażał się poza komórką",
      "w obu przypadkach wirus znalazł się w komórce gospodarza",
      "w obu przypadkach wirus miał chloroplasty",
      "w obu przypadkach wirus zamienił się w bakterię"
    ],
    "answer": 1,
    "explanation": "Niezależnie od tego, czy wirus od razu się namnaża, czy pozostaje utajony, działa dopiero po dostaniu się do komórki gospodarza."
  },
  {
    "id": "TNS_R02_S_03",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Posortuj cechy do właściwej grupy.",
    "options": null,
    "items": [
      "nie ma budowy komórkowej",
      "ma ścianę komórkową",
      "może rozmnażać się przez podział komórki",
      "namnaża się tylko w zakażonej komórce",
      "jest organizmem jednokomórkowym"
    ],
    "categories": [
      "wirus",
      "bakteria"
    ],
    "answer": {
      "wirus": [
        "nie ma budowy komórkowej",
        "namnaża się tylko w zakażonej komórce"
      ],
      "bakteria": [
        "ma ścianę komórkową",
        "może rozmnażać się przez podział komórki",
        "jest organizmem jednokomórkowym"
      ]
    },
    "explanation": "Wirusy i bakterie są bardzo różne. Bakteria jest komórką, a wirus nią nie jest."
  },
  {
    "id": "TNS_R02_S_04",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Na ilustracji pokazano pewien sposób zakażania komórki przez wirusa. Ułóż etapy od najwcześniejszego do najpóźniejszego.",
    "image": "/img/tns_r02_wirus_zakazenie.jpg",
    "options": null,
    "items": [
      "nowe cząstki wirusa zakażają kolejne komórki",
      "wirus przyczepia się do komórki",
      "materiał genetyczny wirusa dostaje się do wnętrza",
      "komórka zaczyna produkować elementy wirusa"
    ],
    "answer": [
      "wirus przyczepia się do komórki",
      "materiał genetyczny wirusa dostaje się do wnętrza",
      "komórka zaczyna produkować elementy wirusa",
      "nowe cząstki wirusa zakażają kolejne komórki"
    ],
    "explanation": "To pełniejszy opis etapów pokazanych na schemacie: przyczepienie, wniknięcie materiału genetycznego, powielanie i dalsze zakażanie."
  },
  {
    "id": "TNS_R02_S_05",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Na podstawie schematu dróg zakażenia bakteriami wybierz sytuacje, w których ryzyko zakażenia jest dobrze dopasowane do opisanej drogi.",
    "image": "/img/tns_r02_bakterie_drogi_zakazen.jpg",
    "options": [
      "ktoś zjada źle przechowywane mięso - droga pokarmowa",
      "kleszcz przenosi bakterie do krwi - zakażenie przez krew",
      "kaszel chorego - kontakt płciowy",
      "bliski kontakt seksualny - kontakt płciowy",
      "wypicie czystej wody - droga pokarmowa"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Źle przechowywana żywność to droga pokarmowa, kleszcz może doprowadzić do zakażenia przez krew, a kontakty seksualne to osobna droga rozprzestrzeniania bakterii."
  },
  {
    "id": "TNS_R02_S_06",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz rodzaj bakterii lub jej rolę z pasującym opisem.",
    "options": null,
    "left": [
      "ziarenkowiec",
      "krętek",
      "sinice",
      "bakterie gnilne"
    ],
    "right": [
      "bakterie rozkładające szczątki organizmów",
      "bakterie samożywne wytwarzające tlen",
      "kulista komórka",
      "spiralnie skręcona komórka"
    ],
    "answer": {
      "ziarenkowiec": "kulista komórka",
      "krętek": "spiralnie skręcona komórka",
      "sinice": "bakterie samożywne wytwarzające tlen",
      "bakterie gnilne": "bakterie rozkładające szczątki organizmów"
    },
    "explanation": "To pytanie łączy budowę bakterii z ich rolą w przyrodzie."
  },
  {
    "id": "TNS_R02_S_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Dwie bakterie trafiły do różnych miejsc. Jedna do jelita człowieka, gdzie pomaga mu funkcjonować. Druga do gardła, gdzie wywołuje chorobę. Jak najlepiej opisać tę różnicę?",
    "options": [
      "obie bakterie są zawsze szkodliwe",
      "pierwsza może żyć w symbiozie, a druga pasożytuje",
      "pierwsza jest wirusem, a druga bakterią",
      "pierwsza nie oddycha, a druga nie ma komórki"
    ],
    "answer": 1,
    "explanation": "Niektóre bakterie żyją z innymi organizmami w symbiozie, a inne pasożytują i wywołują choroby."
  },
  {
    "id": "TNS_R02_S_08",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Na ilustracji o znaczeniu bakterii wskaż przykład, który pokazuje jednocześnie korzyść dla człowieka i dla środowiska.",
    "image": "/img/tns_r02_znaczenie_bakterii.jpg",
    "options": [
      "produkcja jogurtu",
      "rozkład szczątków organizmów i odchodów",
      "angina",
      "psucie się żywności"
    ],
    "answer": 1,
    "explanation": "Rozkład szczątków wzbogaca środowisko, a pośrednio pomaga też człowiekowi, bo bez tego obieg materii byłby zaburzony."
  },
  {
    "id": "TNS_R02_S_09",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Na ilustracji pokazano bardzo różne protisty. Które stwierdzenie najlepiej wyjaśnia, dlaczego wszystkie nadal zalicza się do jednego królestwa?",
    "options": [
      "bo wszystkie są zwierzętami",
      "bo wszystkie mają jądro w komórce",
      "bo wszystkie są zielone",
      "bo wszystkie mają kapelusze"
    ],
    "answer": 1,
    "explanation": "Protisty bardzo się różnią, ale ich wspólną cechą jest obecność jądra komórkowego."
  },
  {
    "id": "TNS_R02_S_10",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: euglena zielona, pantofelek, morszczyn pęcherzykowaty, bakteriofag.",
    "options": null,
    "answer": "bakteriofag",
    "explanation": "Bakteriofag to wirus. Pozostałe przykłady należą do protistów."
  },
  {
    "id": "TNS_R02_S_11",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Protisty pasożytnicze mogą wywoływać choroby, na przykład __________ i __________.",
    "options": null,
    "answer": [
      "malarię",
      "toksoplazmozę"
    ],
    "altAnswers": [
      [
        "malarię",
        "malaria",
        "malarią"
      ],
      [
        "toksoplazmozę",
        "toksoplazmoza",
        "toksoplazmozę"
      ]
    ],
    "explanation": "W podręczniku jako przykłady chorób wywoływanych przez protisty pasożytnicze podano malarię i toksoplazmozę."
  },
  {
    "id": "TNS_R02_S_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Spójrz na ilustrację chorób protistycznych. Zaznacz działania, które pasują do ochrony przed tymi chorobami.",
    "image": "/img/tns_r02_protisty_choroby.jpg",
    "options": [
      "stosowanie moskitiery",
      "mycie rąk po kontakcie z kuwetą kota",
      "jedzenie surowego mięsa",
      "noszenie ubrań chroniących przed ukąszeniami",
      "celowe zbliżanie się do chorych zwierząt"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Moskitiera i odzież ochronna pomagają ograniczać ryzyko malarii, a higiena po kontakcie z kotem zmniejsza ryzyko toksoplazmozy."
  },
  {
    "id": "TNS_R02_S_13",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W probówce znaleziono organizm z chloroplastami, ale potrafiący też pobierać pokarm z otoczenia. Do którego przykładu z rozdziału jest najbardziej podobny?",
    "options": [
      "do eugleny zielonej",
      "do pantofelka",
      "do drożdży",
      "do bakteriofaga"
    ],
    "answer": 0,
    "explanation": "Taką mieszaną strategię odżywiania opisano u eugleny zielonej."
  },
  {
    "id": "TNS_R02_S_14",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Posortuj przykłady do odpowiedniej grupy odżywiania.",
    "options": null,
    "items": [
      "euglena zielona",
      "morszczyn pęcherzykowaty",
      "pantofelek",
      "toksoplazma"
    ],
    "categories": [
      "zawsze samożywne",
      "zawsze cudzożywne",
      "może odżywiać się na dwa sposoby"
    ],
    "answer": {
      "zawsze samożywne": [
        "morszczyn pęcherzykowaty"
      ],
      "zawsze cudzożywne": [
        "pantofelek",
        "toksoplazma"
      ],
      "może odżywiać się na dwa sposoby": [
        "euglena zielona"
      ]
    },
    "explanation": "Morszczyn jest samożywny, pantofelek i pasożytnicza toksoplazma są cudzożywne, a euglena może łączyć oba sposoby."
  },
  {
    "id": "TNS_R02_S_15",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz wszystkie cechy pasujące do grzybów.",
    "options": [
      "ściana komórkowa z chityny",
      "brak chloroplastów",
      "zawsze wielokomórkowe",
      "mogą być pasożytami",
      "wszystkie żyją tylko w lesie"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Grzyby mają ścianę komórkową z chityny, nie mają chloroplastów i część z nich pasożytuje. Nie wszystkie są wielokomórkowe i nie żyją wyłącznie w lesie."
  },
  {
    "id": "TNS_R02_S_16",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Spójrz na schemat porostu. Co otrzymuje grzyb od organizmu samożywnego żyjącego z nim w symbiozie?",
    "image": "/img/tns_r02_porost_budowa.jpg",
    "options": [
      "gotowe substancje pokarmowe powstałe w fotosyntezie",
      "jądro komórkowe",
      "witki do poruszania się",
      "ścianę komórkową z celulozy"
    ],
    "answer": 0,
    "explanation": "Organizm samożywny w poroście wytwarza pokarm w fotosyntezie, a grzyb z niego korzysta."
  },
  {
    "id": "TNS_R02_S_17",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz przykład z rodzajem zależności lub sposobem życia grzyba.",
    "options": null,
    "left": [
      "grzybnia przy korzeniach roślin",
      "buławinka czerwona na zbożach",
      "grzyb pleśniowy na chlebie",
      "porost"
    ],
    "right": [
      "symbioza z rośliną",
      "pasożyt",
      "cudzożywne pobieranie pokarmu z podłoża",
      "symbioza grzyba z organizmem samożywnym"
    ],
    "answer": {
      "grzybnia przy korzeniach roślin": "symbioza z rośliną",
      "buławinka czerwona na zbożach": "pasożyt",
      "grzyb pleśniowy na chlebie": "cudzożywne pobieranie pokarmu z podłoża",
      "porost": "symbioza grzyba z organizmem samożywnym"
    },
    "explanation": "To pytanie łączy kilka ważnych sposobów życia grzybów: pasożytnictwo, saprotrofię i dwa rodzaje symbiozy."
  },
  {
    "id": "TNS_R02_S_18",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Uczeń znalazł organizm, który jest jednokomórkowy, nie ma chloroplastów i ścianę komórkową z chityny. Do którego królestwa najlepiej go zaliczyć?",
    "options": [
      "wirusów",
      "bakterii",
      "protistów",
      "grzybów"
    ],
    "answer": 3,
    "explanation": "Taki opis pasuje do grzyba jednokomórkowego, na przykład drożdży."
  },
  {
    "id": "TNS_R02_S_19",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Na ilustracji różnorodności grzybów wskaż zdanie, które najlepiej podsumowuje pokazane przykłady.",
    "image": "/img/tns_r02_grzyby_roznorodnosc.jpg",
    "options": [
      "wszystkie grzyby są jadalne",
      "grzyby mogą być jadalne, niejadalne, trujące albo chronione",
      "grzyby zawsze rosną tylko na trawie",
      "wszystkie grzyby są pasożytami"
    ],
    "answer": 1,
    "explanation": "Schemat pokazuje, że świat grzybów jest bardzo różnorodny i nie wolno oceniać wszystkich tak samo."
  },
  {
    "id": "TNS_R02_S_20",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Posortuj przykłady znaczenia grzybów.",
    "options": null,
    "items": [
      "produkcja antybiotyków",
      "ciężkie zatrucia po zjedzeniu niektórych gatunków",
      "powstawanie gleby dzięki porostom",
      "grzybice",
      "pomoc roślinom w pobieraniu wody"
    ],
    "categories": [
      "pozytywne",
      "negatywne"
    ],
    "answer": {
      "pozytywne": [
        "produkcja antybiotyków",
        "powstawanie gleby dzięki porostom",
        "pomoc roślinom w pobieraniu wody"
      ],
      "negatywne": [
        "ciężkie zatrucia po zjedzeniu niektórych gatunków",
        "grzybice"
      ]
    },
    "explanation": "Grzyby potrafią jednocześnie pomagać ludziom i środowisku, ale część z nich stanowi też realne zagrożenie."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r02",
  number: 2,
  title: "Wirusy, bakterie, protisty i grzyby",
  icon: "🦠",
  sectionOrder: [
  "Wirusy",
  "Bakterie",
  "Protisty",
  "Grzyby"
],
  sectionIcons: {
  "Wirusy": "🧫",
  "Bakterie": "🔬",
  "Protisty": "💧",
  "Grzyby": "🍄"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS,
};

export default chapter;
