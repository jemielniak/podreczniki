// Skróty sekcji (do identyfikatorów ćwiczeń):
//   ADM = Podział administracyjny i sąsiedzi Polski
//   ROZ = Rozmieszczenie ludności w Polsce
//   ZMI = Zmiany liczby ludności Polski
//   STR = Struktura płci i wieku ludności
//   MIG = Przyczyny i skutki migracji zagranicznych
//   KUL = Kulturowe zróżnicowanie mieszkańców
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R03_ADM_01",
    "section": "Podział administracyjny i sąsiedzi Polski",
    "type": "single_choice",
    "prompt": "Od którego roku obowiązuje w Polsce obecny trójstopniowy podział administracyjny?",
    "options": [
      "1975",
      "1989",
      "1999",
      "2004",
      "2010",
      "2022"
    ],
    "answer": 2,
    "explanation": "Obecny podział administracyjny obowiązuje od 1 stycznia 1999 roku."
  },
  {
    "id": "R03_ADM_02",
    "section": "Podział administracyjny i sąsiedzi Polski",
    "type": "multi_select",
    "prompt": "Zaznacz jednostki tworzące trójstopniowy podział administracyjny Polski.",
    "options": [
      "województwa",
      "powiaty",
      "gminy",
      "okręgi",
      "departamenty",
      "kantony"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Trzy szczeble podziału administracyjnego to województwa, powiaty i gminy."
  },
  {
    "id": "R03_ADM_03",
    "section": "Podział administracyjny i sąsiedzi Polski",
    "type": "match",
    "prompt": "Połącz szczebel samorządu z przykładowym zadaniem publicznym.",
    "options": null,
    "left": [
      "województwo",
      "powiat",
      "gmina"
    ],
    "right": [
      "organizacja transportu w regionie",
      "prowadzenie szkół ponadpodstawowych",
      "prowadzenie szkół podstawowych"
    ],
    "answer": {
      "województwo": "organizacja transportu w regionie",
      "powiat": "prowadzenie szkół ponadpodstawowych",
      "gmina": "prowadzenie szkół podstawowych"
    },
    "explanation": "Województwa odpowiadają m.in. za transport regionalny, powiaty za szkoły ponadpodstawowe, a gminy za szkoły podstawowe."
  },
  {
    "id": "R03_ADM_04",
    "section": "Podział administracyjny i sąsiedzi Polski",
    "type": "fill_in",
    "prompt": "Polska jest podzielona na __________ województw, a obecny podział obowiązuje od roku __________.",
    "options": null,
    "answer": [
      "16",
      "1999"
    ],
    "explanation": "Polska ma 16 województw, a obecny podział administracyjny wszedł w życie w 1999 roku."
  },
  {
    "id": "R03_ADM_05",
    "section": "Podział administracyjny i sąsiedzi Polski",
    "type": "riddle",
    "prompt": "Jak nazywa się miejsce, w którym spotykają się granice trzech różnych państw?",
    "options": null,
    "answer": "trójstyk granic",
    "altAnswers": [
      "trójstyk granic",
      "trójstyk"
    ],
    "image": "r03_trojstyk_granic.jpg",
    "explanation": "Takie miejsce nazywa się trójstykiem granic. Przykładem jest trójstyk Polski, Czech i Niemiec."
  },
  {
    "id": "R03_ADM_06",
    "section": "Podział administracyjny i sąsiedzi Polski",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo, które nie graniczy z Polską: Niemcy, Czechy, Litwa, Węgry.",
    "options": null,
    "answer": "Węgry",
    "explanation": "Polska graniczy z Niemcami, Czechami i Litwą, ale nie z Węgrami."
  },
  {
    "id": "R03_ADM_07",
    "section": "Podział administracyjny i sąsiedzi Polski",
    "type": "scenario",
    "prompt": "Widzisz odcinek granicy biegnący wzdłuż rzeki na zachodzie Polski. Rzeka ta na około 200 km oddziela Polskę od Niemiec. Która to rzeka?",
    "options": [
      "Nysa Łużycka",
      "Bug",
      "Wisła",
      "Warta",
      "San",
      "Narew"
    ],
    "answer": 0,
    "image": "r03_nysa_luzycka_granica.jpg",
    "explanation": "Nysa Łużycka na odcinku około 200 km stanowi naturalną granicę Polski z Niemcami."
  },
  {
    "id": "R03_ADM_08",
    "section": "Podział administracyjny i sąsiedzi Polski",
    "type": "sort",
    "prompt": "Przyporządkuj zadania do właściwego szczebla samorządu.",
    "options": null,
    "items": [
      "wydawanie paszportów",
      "prowadzenie szpitali",
      "utrzymanie zieleni",
      "nadzór służb weterynaryjnych",
      "uchwalanie planów zagospodarowania przestrzennego",
      "rozdzielanie regionalnych funduszy europejskich"
    ],
    "categories": [
      "województwo",
      "powiat",
      "gmina"
    ],
    "answer": {
      "województwo": [
        "wydawanie paszportów",
        "rozdzielanie regionalnych funduszy europejskich"
      ],
      "powiat": [
        "prowadzenie szpitali",
        "nadzór służb weterynaryjnych"
      ],
      "gmina": [
        "utrzymanie zieleni",
        "uchwalanie planów zagospodarowania przestrzennego"
      ]
    },
    "explanation": "Przykłady zadań różnią się zależnie od szczebla: województwa realizują zadania regionalne, powiaty ponadlokalne, a gminy lokalne."
  },
  {
    "id": "R03_ADM_09",
    "section": "Podział administracyjny i sąsiedzi Polski",
    "type": "true_false",
    "prompt": "Najdłuższą granicę lądową Polska ma z Czechami, a najkrótszą z Litwą.",
    "options": null,
    "answer": true,
    "explanation": "Granica z Czechami ma 796 km, a z Litwą 104 km."
  },
  {
    "id": "R03_ROZ_01",
    "section": "Rozmieszczenie ludności w Polsce",
    "type": "single_choice",
    "prompt": "Ile wynosi średnia gęstość zaludnienia Polski?",
    "options": [
      "25 os./km²",
      "59 os./km²",
      "95 os./km²",
      "122 os./km²",
      "238 os./km²",
      "368 os./km²"
    ],
    "answer": 3,
    "explanation": "Średnia gęstość zaludnienia Polski wynosi 122 osoby na kilometr kwadratowy."
  },
  {
    "id": "R03_ROZ_02",
    "section": "Rozmieszczenie ludności w Polsce",
    "type": "scenario",
    "prompt": "Stoisz przed ogromnym wielopiętrowym blokiem w Katowicach. W 762 mieszkaniach może tu mieszkać około 3 tys. osób. Jak nazywa się ten budynek?",
    "options": [
      "Superjednostka",
      "Spodek",
      "Rotunda",
      "Falowiec",
      "Pałac Kultury",
      "Hala Stulecia"
    ],
    "answer": 0,
    "image": "r03_superjednostka_katowice.jpg",
    "explanation": "Katowicka Superjednostka jest jednym z największych bloków mieszkalnych w Polsce."
  },
  {
    "id": "R03_ROZ_03",
    "section": "Rozmieszczenie ludności w Polsce",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki sprzyjające stosunkowo dużej gęstości zaludnienia Polski.",
    "options": [
      "umiarkowany klimat",
      "przewaga nizin",
      "dostępność wody",
      "strome stoki wysokich gór",
      "duże kompleksy leśne",
      "występowanie surowców mineralnych"
    ],
    "answer": [
      0,
      1,
      2,
      5
    ],
    "explanation": "Osadnictwu sprzyjają m.in. umiarkowany klimat, przewaga nizin, dostępność wody, centralne położenie i występowanie surowców mineralnych."
  },
  {
    "id": "R03_ROZ_04",
    "section": "Rozmieszczenie ludności w Polsce",
    "type": "true_false",
    "prompt": "Najwyższą gęstością zaludnienia wśród województw wyróżnia się województwo śląskie.",
    "options": null,
    "answer": true,
    "explanation": "Województwo śląskie ma 368 os./km² i jest najgęściej zaludnionym województwem."
  },
  {
    "id": "R03_ROZ_05",
    "section": "Rozmieszczenie ludności w Polsce",
    "type": "fill_in",
    "prompt": "Najmniejsza gęstość zaludnienia wśród województw występuje w województwie __________ i wynosi __________ os./km².",
    "options": null,
    "answer": [
      "podlaskim",
      "59"
    ],
    "altAnswers": [
      [
        "podlaskim",
        "podlaskie"
      ],
      [
        "59",
        "59 os./km²"
      ]
    ],
    "explanation": "Województwo podlaskie ma najniższą gęstość zaludnienia: 59 os./km²."
  },
  {
    "id": "R03_ROZ_06",
    "section": "Rozmieszczenie ludności w Polsce",
    "type": "scenario",
    "prompt": "Na obszarze wysokich gór występują strome stoki, trudniejsze warunki budowy dróg i osiedli oraz ograniczenia ochrony przyrody. Jak wpływa to na gęstość zaludnienia?",
    "options": [
      "zwiększa ją bardzo silnie",
      "zwykle ją obniża",
      "nie ma żadnego wpływu",
      "powoduje wyłącznie rozwój wielkich miast",
      "zawsze podwaja liczbę mieszkańców",
      "prowadzi do zaniku lasów"
    ],
    "answer": 1,
    "image": "r03_karkonosze_strome_stoki.jpg",
    "explanation": "Strome stoki utrudniają budownictwo, transport i działalność gospodarczą, dlatego wysokie góry cechują się małą gęstością zaludnienia."
  },
  {
    "id": "R03_ROZ_07",
    "section": "Rozmieszczenie ludności w Polsce",
    "type": "match",
    "prompt": "Połącz czynnik z jego typowym wpływem na gęstość zaludnienia.",
    "options": null,
    "left": [
      "dobre gleby",
      "złoża surowców mineralnych",
      "duże kompleksy leśne",
      "strome stoki"
    ],
    "right": [
      "sprzyjają rozwojowi licznych wsi",
      "sprzyjają rozwojowi ośrodków przemysłowych",
      "ograniczają liczbę osiedli",
      "utrudniają budowę i przemieszczanie się"
    ],
    "answer": {
      "dobre gleby": "sprzyjają rozwojowi licznych wsi",
      "złoża surowców mineralnych": "sprzyjają rozwojowi ośrodków przemysłowych",
      "duże kompleksy leśne": "ograniczają liczbę osiedli",
      "strome stoki": "utrudniają budowę i przemieszczanie się"
    },
    "explanation": "Dobre gleby i rozwój przemysłu sprzyjają większemu zaludnieniu, natomiast rozległe lasy i strome stoki zwykle je ograniczają."
  },
  {
    "id": "R03_ROZ_08",
    "section": "Rozmieszczenie ludności w Polsce",
    "type": "sort",
    "prompt": "Podziel czynniki na sprzyjające wyższej i niższej gęstości zaludnienia.",
    "options": null,
    "items": [
      "rozwój przemysłu",
      "duże miasta",
      "dobre gleby",
      "wysoka lesistość",
      "strome stoki",
      "duża odległość od ośrodków miejskich"
    ],
    "categories": [
      "wyższa gęstość",
      "niższa gęstość"
    ],
    "answer": {
      "wyższa gęstość": [
        "rozwój przemysłu",
        "duże miasta",
        "dobre gleby"
      ],
      "niższa gęstość": [
        "wysoka lesistość",
        "strome stoki",
        "duża odległość od ośrodków miejskich"
      ]
    },
    "image": "r03_gorny_slask_przemysl.jpg",
    "explanation": "Rozwój przemysłu, duże miasta i dobre gleby sprzyjają koncentracji ludności, a wysoka lesistość, strome stoki i duża odległość od miast ją ograniczają."
  },
  {
    "id": "R03_ROZ_09",
    "section": "Rozmieszczenie ludności w Polsce",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie sprzyja wysokiej gęstości zaludnienia: dobre gleby, rozwój przemysłu, duże miasta, strome stoki.",
    "options": null,
    "answer": "strome stoki",
    "explanation": "Strome stoki utrudniają budownictwo, transport i działalność gospodarczą, więc zwykle obniżają gęstość zaludnienia."
  },
  {
    "id": "R03_ZMI_01",
    "section": "Zmiany liczby ludności Polski",
    "type": "riddle",
    "prompt": "Jak nazywa się różnica między liczbą urodzeń a liczbą zgonów na danym obszarze?",
    "options": null,
    "answer": "przyrost naturalny",
    "altAnswers": [
      "przyrost naturalny",
      "PN"
    ],
    "explanation": "Różnica między liczbą urodzeń i zgonów to przyrost naturalny."
  },
  {
    "id": "R03_ZMI_02",
    "section": "Zmiany liczby ludności Polski",
    "type": "match",
    "prompt": "Połącz wskaźnik z jego sposobem obliczania.",
    "options": null,
    "left": [
      "przyrost naturalny",
      "saldo migracji",
      "przyrost rzeczywisty"
    ],
    "right": [
      "urodzenia - zgony",
      "imigracja - emigracja",
      "przyrost naturalny + saldo migracji"
    ],
    "answer": {
      "przyrost naturalny": "urodzenia - zgony",
      "saldo migracji": "imigracja - emigracja",
      "przyrost rzeczywisty": "przyrost naturalny + saldo migracji"
    },
    "explanation": "Przyrost naturalny to urodzenia minus zgony, saldo migracji to imigracja minus emigracja, a przyrost rzeczywisty to suma przyrostu naturalnego i salda migracji."
  },
  {
    "id": "R03_ZMI_03",
    "section": "Zmiany liczby ludności Polski",
    "type": "fill_in",
    "prompt": "Gdy liczba urodzeń jest mniejsza od liczby zgonów, przyrost naturalny jest __________. Gdy imigracja przewyższa emigrację, saldo migracji jest __________.",
    "options": null,
    "answer": [
      "ujemny",
      "dodatnie"
    ],
    "altAnswers": [
      [
        "ujemny",
        "ujemny przyrost naturalny"
      ],
      [
        "dodatnie",
        "dodatnie saldo migracji"
      ]
    ],
    "explanation": "Mniej urodzeń niż zgonów oznacza ujemny przyrost naturalny, a przewaga imigracji nad emigracją daje dodatnie saldo migracji."
  },
  {
    "id": "R03_ZMI_04",
    "section": "Zmiany liczby ludności Polski",
    "type": "single_choice",
    "prompt": "Ile wyniósł przyrost naturalny Polski w 2020 roku przy 355 tys. urodzeń i 477 tys. zgonów?",
    "options": [
      "+122 tys.",
      "-122 tys.",
      "+832 tys.",
      "-3,2 tys.",
      "0",
      "+355 tys."
    ],
    "answer": 1,
    "explanation": "355 000 - 477 000 = -122 000, więc przyrost naturalny wyniósł -122 tys. osób."
  },
  {
    "id": "R03_ZMI_05",
    "section": "Zmiany liczby ludności Polski",
    "type": "multi_select",
    "prompt": "Zaznacz społeczno-kulturowe przyczyny niskiej dzietności.",
    "options": [
      "skupienie na karierze",
      "wysokie koszty wychowania dzieci",
      "trudności w łączeniu pracy z rodzicielstwem",
      "odkładanie rodzicielstwa na później",
      "gwałtowny wzrost liczby urodzeń",
      "obowiązek posiadania wielu dzieci"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do przyczyn należą m.in. skupienie na karierze, koszty wychowania dzieci, trudności w łączeniu rodzicielstwa z pracą oraz odkładanie decyzji o dzieciach."
  },
  {
    "id": "R03_ZMI_06",
    "section": "Zmiany liczby ludności Polski",
    "type": "true_false",
    "prompt": "W ostatnich latach saldo migracji Polski stało się dodatnie, choć wcześniej przez wiele lat emigracja przeważała nad imigracją.",
    "options": null,
    "answer": true,
    "explanation": "Przez wiele lat Polska miała ujemne saldo migracji, natomiast w ostatnich latach imigracja zaczęła przeważać."
  },
  {
    "id": "R03_ZMI_07",
    "section": "Zmiany liczby ludności Polski",
    "type": "sort",
    "prompt": "Przyporządkuj zjawiska do składników zmian liczby ludności.",
    "options": null,
    "items": [
      "urodzenia",
      "zgony",
      "imigracja",
      "emigracja"
    ],
    "categories": [
      "przyrost naturalny",
      "saldo migracji"
    ],
    "answer": {
      "przyrost naturalny": [
        "urodzenia",
        "zgony"
      ],
      "saldo migracji": [
        "imigracja",
        "emigracja"
      ]
    },
    "explanation": "Urodzenia i zgony tworzą przyrost naturalny, a przyjazdy i wyjazdy tworzą saldo migracji."
  },
  {
    "id": "R03_ZMI_08",
    "section": "Zmiany liczby ludności Polski",
    "type": "sequence",
    "prompt": "Ułóż zdarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "wzrost emigracji po wejściu Polski do UE",
      "II wojna światowa",
      "liczba ludności Europy przekracza 750 mln",
      "powojenny wyż kompensacyjny"
    ],
    "answer": [
      "II wojna światowa",
      "powojenny wyż kompensacyjny",
      "wzrost emigracji po wejściu Polski do UE",
      "liczba ludności Europy przekracza 750 mln"
    ],
    "explanation": "Po II wojnie światowej wystąpił wyż kompensacyjny, w 2004 roku Polska weszła do Unii Europejskiej, po czym nasiliła się emigracja, a w 2022 roku liczba ludności Europy przekroczyła 750 mln."
  },
  {
    "id": "R03_ZMI_09",
    "section": "Zmiany liczby ludności Polski",
    "type": "scenario",
    "prompt": "W kraju w ciągu roku urodziło się mniej osób, niż zmarło, ale liczba ludności mimo to wzrosła. Które zjawisko może to wyjaśnić?",
    "options": [
      "duże dodatnie saldo migracji",
      "spadek imigracji",
      "wzrost emigracji",
      "ujemne saldo migracji",
      "brak migracji",
      "wyłącznie wzrost liczby zgonów"
    ],
    "answer": 0,
    "explanation": "Dodatnie saldo migracji może być większe od ujemnego przyrostu naturalnego, co daje dodatni przyrost rzeczywisty."
  },
  {
    "id": "R03_STR_01",
    "section": "Struktura płci i wieku ludności",
    "type": "single_choice",
    "prompt": "Do czego służy piramida płci i wieku?",
    "options": [
      "do przedstawiania struktury płci i wieku",
      "do obliczania powierzchni kraju",
      "do wyznaczania granic województw",
      "do pomiaru opadów",
      "do klasyfikacji gleb",
      "do obliczania długości dróg"
    ],
    "answer": 0,
    "image": "r03_seniorzy_i_mlodzi.jpg",
    "explanation": "Piramida płci i wieku pokazuje liczebność kobiet i mężczyzn w poszczególnych grupach wiekowych."
  },
  {
    "id": "R03_STR_02",
    "section": "Struktura płci i wieku ludności",
    "type": "fill_in",
    "prompt": "W Polsce wiek produkcyjny to od 18 do __________ lat dla kobiet i od 18 do __________ lat dla mężczyzn.",
    "options": null,
    "answer": [
      "60",
      "65"
    ],
    "explanation": "Wiek produkcyjny w Polsce kończy się w wieku 60 lat dla kobiet i 65 lat dla mężczyzn."
  },
  {
    "id": "R03_STR_03",
    "section": "Struktura płci i wieku ludności",
    "type": "riddle",
    "prompt": "Jak nazywa się okresowy wzrost liczby urodzeń?",
    "options": null,
    "answer": "wyż demograficzny",
    "altAnswers": [
      "wyż demograficzny",
      "wyż"
    ],
    "explanation": "Okresowy wzrost liczby urodzeń to wyż demograficzny."
  },
  {
    "id": "R03_STR_04",
    "section": "Struktura płci i wieku ludności",
    "type": "true_false",
    "prompt": "W Polsce rodzi się około 105 chłopców na 100 dziewczynek.",
    "options": null,
    "answer": true,
    "explanation": "W najmłodszych grupach wiekowych występuje przewaga chłopców: około 105 chłopców na 100 dziewczynek."
  },
  {
    "id": "R03_STR_05",
    "section": "Struktura płci i wieku ludności",
    "type": "match",
    "prompt": "Połącz pojęcie z właściwym opisem.",
    "options": null,
    "left": [
      "wyż demograficzny",
      "niż demograficzny",
      "współczynnik feminizacji"
    ],
    "right": [
      "okresowy wzrost liczby urodzeń",
      "okresowy spadek liczby urodzeń",
      "liczba kobiet przypadająca na 100 mężczyzn"
    ],
    "answer": {
      "wyż demograficzny": "okresowy wzrost liczby urodzeń",
      "niż demograficzny": "okresowy spadek liczby urodzeń",
      "współczynnik feminizacji": "liczba kobiet przypadająca na 100 mężczyzn"
    },
    "explanation": "Wyż oznacza wzrost liczby urodzeń, niż - jej spadek, a współczynnik feminizacji podaje liczbę kobiet na 100 mężczyzn."
  },
  {
    "id": "R03_STR_06",
    "section": "Struktura płci i wieku ludności",
    "type": "multi_select",
    "prompt": "Zaznacz skutki starzenia się społeczeństwa.",
    "options": [
      "brak pracowników",
      "malejące wpływy do budżetu",
      "rosnące wydatki na emerytury",
      "rosnące wydatki na opiekę zdrowotną",
      "gwałtowny wzrost liczby dzieci",
      "stałe odmładzanie społeczeństwa"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Starzenie się ludności może oznaczać niedobór pracowników, mniejsze wpływy do budżetu oraz większe wydatki na emerytury i ochronę zdrowia."
  },
  {
    "id": "R03_STR_07",
    "section": "Struktura płci i wieku ludności",
    "type": "scenario",
    "prompt": "Państwo przyjmuje wielu młodych migrantów, którzy podejmują pracę i zakładają rodziny. Jaki może być skutek dla struktury wieku ludności?",
    "options": [
      "wolniejsze starzenie się społeczeństwa",
      "natychmiastowe zniknięcie osób starszych",
      "całkowity brak dzieci",
      "spadek liczby osób w wieku produkcyjnym",
      "zanik migracji",
      "wzrost średniego wieku wyłącznie do 100 lat"
    ],
    "answer": 0,
    "image": "r03_mlodzi_imigranci_rodzina.jpg",
    "explanation": "Duża imigracja młodych ludzi może spowalniać proces starzenia się społeczeństwa i wypełniać lukę demograficzną, jak w Zjednoczonym Królestwie."
  },
  {
    "id": "R03_STR_08",
    "section": "Struktura płci i wieku ludności",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do młodszych i starszych grup wieku w Polsce.",
    "options": null,
    "items": [
      "przewaga chłopców",
      "przewaga kobiet",
      "około 105 chłopców na 100 dziewczynek",
      "wyższa śmiertelność mężczyzn zwiększa przewagę kobiet"
    ],
    "categories": [
      "młodsze grupy",
      "starsze grupy"
    ],
    "answer": {
      "młodsze grupy": [
        "przewaga chłopców",
        "około 105 chłopców na 100 dziewczynek"
      ],
      "starsze grupy": [
        "przewaga kobiet",
        "wyższa śmiertelność mężczyzn zwiększa przewagę kobiet"
      ]
    },
    "explanation": "W młodszych grupach przeważają chłopcy, a w starszych coraz wyraźniej przeważają kobiety, ponieważ mężczyźni przeciętnie żyją krócej."
  },
  {
    "id": "R03_STR_09",
    "section": "Struktura płci i wieku ludności",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest skutkiem starzenia się społeczeństwa: większe wydatki na emerytury, większe wydatki na ochronę zdrowia, niedobór pracowników, wzrost odsetka dzieci.",
    "options": null,
    "answer": "wzrost odsetka dzieci",
    "explanation": "Starzenie się społeczeństwa wiąże się ze spadkiem udziału dzieci, a nie jego wzrostem."
  },
  {
    "id": "R03_MIG_01",
    "section": "Przyczyny i skutki migracji zagranicznych",
    "type": "single_choice",
    "prompt": "Jaka jest najczęstsza przyczyna współczesnych migracji wewnątrz Europy?",
    "options": [
      "ekonomiczna",
      "astronomiczna",
      "geologiczna",
      "sportowa",
      "językowa",
      "turystyczna"
    ],
    "answer": 0,
    "explanation": "Większość migracji wewnątrz Europy ma podłoże ekonomiczne: ludzie szukają lepiej płatnej pracy i wyższej jakości życia."
  },
  {
    "id": "R03_MIG_02",
    "section": "Przyczyny i skutki migracji zagranicznych",
    "type": "riddle",
    "prompt": "Jak nazywa się rozproszona po świecie zbiorowość osób polskiego pochodzenia powstała wskutek migracji?",
    "options": null,
    "answer": "diaspora",
    "altAnswers": [
      "diaspora",
      "polska diaspora"
    ],
    "image": "r03_polski_sklep_londyn.jpg",
    "explanation": "Rozproszona po świecie zbiorowość osób polskiego pochodzenia tworzy polską diasporę."
  },
  {
    "id": "R03_MIG_03",
    "section": "Przyczyny i skutki migracji zagranicznych",
    "type": "sort",
    "prompt": "Przyporządkuj przykładowe przyczyny migracji do kategorii.",
    "options": null,
    "items": [
      "susza",
      "wojna",
      "prześladowania obywateli",
      "wysokie bezrobocie",
      "wyższe płace",
      "lepsza jakość życia"
    ],
    "categories": [
      "przyrodnicze",
      "społeczne i polityczne",
      "gospodarcze"
    ],
    "answer": {
      "przyrodnicze": [
        "susza"
      ],
      "społeczne i polityczne": [
        "wojna",
        "prześladowania obywateli"
      ],
      "gospodarcze": [
        "wysokie bezrobocie",
        "wyższe płace",
        "lepsza jakość życia"
      ]
    },
    "explanation": "Migracje mogą mieć przyczyny przyrodnicze, społeczne i polityczne oraz gospodarcze."
  },
  {
    "id": "R03_MIG_04",
    "section": "Przyczyny i skutki migracji zagranicznych",
    "type": "multi_select",
    "prompt": "Zaznacz pozytywne skutki imigracji ekonomicznej dla kraju przyjmującego.",
    "options": [
      "wypełnienie luki na rynku pracy",
      "poprawa sytuacji demograficznej",
      "większe wpływy z podatków",
      "automatyczny brak kosztów usług publicznych",
      "całkowite zniknięcie konfliktów kulturowych",
      "spadek popytu na towary i usługi"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Imigranci mogą wypełniać luki na rynku pracy, poprawiać sytuację demograficzną i zwiększać wpływy z podatków."
  },
  {
    "id": "R03_MIG_05",
    "section": "Przyczyny i skutki migracji zagranicznych",
    "type": "scenario",
    "prompt": "Osoba ucieka ze swojego kraju przed wojną i przekracza granicę, szukając bezpieczeństwa. Jak nazywa się taka osoba?",
    "options": [
      "uchodźca",
      "turysta",
      "dojeżdżający",
      "pielgrzym",
      "kurier",
      "przewodnik"
    ],
    "answer": 0,
    "image": "r03_uchodzcy_przejscie_graniczne.jpg",
    "explanation": "Uchodźca to osoba uciekająca przed wojną lub prześladowaniami m.in. politycznymi, religijnymi, rasowymi czy narodowościowymi."
  },
  {
    "id": "R03_MIG_06",
    "section": "Przyczyny i skutki migracji zagranicznych",
    "type": "true_false",
    "prompt": "Współczesna emigracja z Polski ma głównie podłoże finansowe.",
    "options": null,
    "answer": true,
    "explanation": "Polacy wyjeżdżają przede wszystkim w poszukiwaniu atrakcyjniejszych zarobków i wyższego standardu życia."
  },
  {
    "id": "R03_MIG_07",
    "section": "Przyczyny i skutki migracji zagranicznych",
    "type": "match",
    "prompt": "Połącz zjawisko z jego skutkiem.",
    "options": null,
    "left": [
      "napływ młodych imigrantów",
      "wyjazd wysoko wykwalifikowanych pracowników",
      "wzrost liczby konsumentów",
      "napływ pracowników do brakujących zawodów"
    ],
    "right": [
      "poprawa sytuacji demograficznej",
      "utrata specjalistów",
      "wzrost popytu na towary i usługi",
      "wypełnienie luk na rynku pracy"
    ],
    "answer": {
      "napływ młodych imigrantów": "poprawa sytuacji demograficznej",
      "wyjazd wysoko wykwalifikowanych pracowników": "utrata specjalistów",
      "wzrost liczby konsumentów": "wzrost popytu na towary i usługi",
      "napływ pracowników do brakujących zawodów": "wypełnienie luk na rynku pracy"
    },
    "explanation": "Imigracja wpływa na rynek pracy i popyt, a emigracja wysoko wykwalifikowanych osób może powodować niedobór specjalistów."
  },
  {
    "id": "R03_MIG_08",
    "section": "Przyczyny i skutki migracji zagranicznych",
    "type": "fill_in",
    "prompt": "W 2022 roku w ciągu około trzech miesięcy do Polski trafiło ponad __________ miliony uchodźców z Ukrainy.",
    "options": null,
    "answer": [
      "3"
    ],
    "altAnswers": [
      [
        "3",
        "3 miliony",
        "trzy"
      ]
    ],
    "explanation": "Po rozpoczęciu wojny przez Rosję w 2022 roku w ciągu około trzech miesięcy do Polski trafiło ponad 3 miliony uchodźców."
  },
  {
    "id": "R03_MIG_09",
    "section": "Przyczyny i skutki migracji zagranicznych",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest typową przyczyną migracji: wojna, wysokie bezrobocie, susza, długość granicy morskiej Polski.",
    "options": null,
    "answer": "długość granicy morskiej Polski",
    "explanation": "Wojna, bezrobocie i susza mogą skłaniać ludzi do migracji. Długość granicy morskiej Polski nie jest typową przyczyną migracji."
  },
  {
    "id": "R03_KUL_01",
    "section": "Kulturowe zróżnicowanie mieszkańców",
    "type": "fill_in",
    "prompt": "Narodowość to cecha indywidualna człowieka, a __________ to stan prawny określający relację między człowiekiem a państwem.",
    "options": null,
    "answer": [
      "obywatelstwo"
    ],
    "explanation": "Obywatelstwo jest stanem prawnym określającym relację między człowiekiem a państwem."
  },
  {
    "id": "R03_KUL_02",
    "section": "Kulturowe zróżnicowanie mieszkańców",
    "type": "single_choice",
    "prompt": "Jaki odsetek mieszkańców Polski stanowią Polacy?",
    "options": [
      "68,9%",
      "76,4%",
      "86%",
      "90%",
      "97%",
      "100%"
    ],
    "answer": 4,
    "explanation": "Polacy stanowią około 97% mieszkańców kraju, dlatego struktura narodowościowa Polski jest bardzo jednorodna."
  },
  {
    "id": "R03_KUL_03",
    "section": "Kulturowe zróżnicowanie mieszkańców",
    "type": "multi_select",
    "prompt": "Zaznacz mniejszości etniczne wyróżnione w Polsce.",
    "options": [
      "Łemkowie",
      "Karaimi",
      "Tatarzy",
      "Romowie",
      "Niemcy",
      "Litwini"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do mniejszości etnicznych zaliczono Łemków, Karaimów, Tatarów i Romów."
  },
  {
    "id": "R03_KUL_04",
    "section": "Kulturowe zróżnicowanie mieszkańców",
    "type": "true_false",
    "prompt": "Najliczniejszą mniejszością narodową w Polsce są Niemcy.",
    "options": null,
    "answer": true,
    "explanation": "Najliczniejszą mniejszość narodową w Polsce stanowią Niemcy."
  },
  {
    "id": "R03_KUL_05",
    "section": "Kulturowe zróżnicowanie mieszkańców",
    "type": "sort",
    "prompt": "Przyporządkuj grupy do mniejszości narodowych i etnicznych.",
    "options": null,
    "items": [
      "Niemcy",
      "Ukraińcy",
      "Białorusini",
      "Łemkowie",
      "Tatarzy",
      "Romowie"
    ],
    "categories": [
      "mniejszości narodowe",
      "mniejszości etniczne"
    ],
    "answer": {
      "mniejszości narodowe": [
        "Niemcy",
        "Ukraińcy",
        "Białorusini"
      ],
      "mniejszości etniczne": [
        "Łemkowie",
        "Tatarzy",
        "Romowie"
      ]
    },
    "explanation": "Mniejszości narodowe utożsamiają się z narodami posiadającymi własne państwo, natomiast mniejszości etniczne nie posiadają i nie posiadały własnego państwa."
  },
  {
    "id": "R03_KUL_06",
    "section": "Kulturowe zróżnicowanie mieszkańców",
    "type": "match",
    "prompt": "Połącz świątynię z religią lub wyznaniem, z którym jest związana.",
    "options": null,
    "left": [
      "bazylika",
      "cerkiew",
      "meczet",
      "synagoga"
    ],
    "right": [
      "katolicyzm",
      "prawosławie",
      "islam",
      "judaizm"
    ],
    "answer": {
      "bazylika": "katolicyzm",
      "cerkiew": "prawosławie",
      "meczet": "islam",
      "synagoga": "judaizm"
    },
    "image": "r03_swiatynie_w_polsce.jpg",
    "explanation": "Bazylika jest świątynią katolicką, cerkiew prawosławną, meczet muzułmańską, a synagoga żydowską."
  },
  {
    "id": "R03_KUL_07",
    "section": "Kulturowe zróżnicowanie mieszkańców",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w kolejności od wcześniejszego do późniejszego.",
    "options": null,
    "items": [
      "współczesny wzrost imigracji do Polski",
      "przymusowe przesiedlenia po II wojnie światowej",
      "wielonarodowa Polska przed II wojną światową",
      "II wojna światowa"
    ],
    "answer": [
      "wielonarodowa Polska przed II wojną światową",
      "II wojna światowa",
      "przymusowe przesiedlenia po II wojnie światowej",
      "współczesny wzrost imigracji do Polski"
    ],
    "explanation": "Przed II wojną światową Polska była krajem wielonarodowym. II wojna światowa i jej następstwa przyniosły przymusowe przesiedlenia, a współcześnie rośnie imigracja do Polski."
  },
  {
    "id": "R03_KUL_08",
    "section": "Kulturowe zróżnicowanie mieszkańców",
    "type": "scenario",
    "prompt": "Osoba ma polskie obywatelstwo, ale emocjonalnie i kulturowo utożsamia się z innym narodem. Które pojęcie opisuje to utożsamienie?",
    "options": [
      "narodowość",
      "gęstość zaludnienia",
      "saldo migracji",
      "współczynnik feminizacji",
      "urbanizacja",
      "przyrost naturalny"
    ],
    "answer": 0,
    "explanation": "Narodowość opisuje emocjonalny, kulturowy lub genealogiczny związek człowieka z narodem lub grupą etniczną; obywatelstwo jest stanem prawnym."
  },
  {
    "id": "R03_KUL_09",
    "section": "Kulturowe zróżnicowanie mieszkańców",
    "type": "odd_one_out",
    "prompt": "Wskaż grupę, która nie jest mniejszością etniczną w Polsce: Łemkowie, Tatarzy, Romowie, Niemcy.",
    "options": null,
    "answer": "Niemcy",
    "explanation": "Niemcy są mniejszością narodową. Łemkowie, Tatarzy i Romowie należą do mniejszości etnicznych."
  },
  {
    "id": "R03_HARD_01",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W 2022 roku było 302 gmin miejskich, 662 miejsko-wiejskie i 1513 wiejskich. Łącznie daje to __________ gmin.",
    "options": null,
    "answer": [
      "2477"
    ],
    "explanation": "302 + 662 + 1513 = 2477 gmin."
  },
  {
    "id": "R03_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "O ile kilometrów granice lądowe Polski są dłuższe od granicy morskiej?",
    "options": [
      "210 km",
      "501 km",
      "2104 km",
      "2570 km",
      "3071 km",
      "3572 km"
    ],
    "answer": 3,
    "explanation": "Granice lądowe mają 3071 km, a morska 501 km. Różnica wynosi 2570 km."
  },
  {
    "id": "R03_HARD_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz miasto z funkcją w województwie o dwóch stolicach.",
    "options": null,
    "left": [
      "Gorzów Wielkopolski",
      "Zielona Góra",
      "Bydgoszcz",
      "Toruń"
    ],
    "right": [
      "siedziba wojewody lubuskiego",
      "siedziba sejmiku lubuskiego",
      "siedziba wojewody kujawsko-pomorskiego",
      "siedziba sejmiku kujawsko-pomorskiego"
    ],
    "answer": {
      "Gorzów Wielkopolski": "siedziba wojewody lubuskiego",
      "Zielona Góra": "siedziba sejmiku lubuskiego",
      "Bydgoszcz": "siedziba wojewody kujawsko-pomorskiego",
      "Toruń": "siedziba sejmiku kujawsko-pomorskiego"
    },
    "explanation": "W lubuskim Gorzów Wielkopolski jest siedzibą wojewody, a Zielona Góra sejmiku. W kujawsko-pomorskim Bydgoszcz jest siedzibą wojewody, a Toruń sejmiku."
  },
  {
    "id": "R03_HARD_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Wybierz wszystkie poprawne pary państwo - gęstość zaludnienia.",
    "options": [
      "Niderlandy - 518 os./km²",
      "Niemcy - 238 os./km²",
      "Polska - 122 os./km²",
      "Szwecja - 25 os./km²",
      "Litwa - 95 os./km²",
      "Hiszpania - 44 os./km²"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Gęstość zaludnienia wynosi: Niderlandy 518, Niemcy 238, Czechy 138, Polska 122, Francja 106, Hiszpania 95, Litwa 44 i Szwecja 25 os./km²."
  },
  {
    "id": "R03_HARD_05",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W 2020 roku Polska miała 355 000 urodzeń, 477 000 zgonów i około 38,38 mln mieszkańców. Jaki był współczynnik przyrostu naturalnego?",
    "options": [
      "+3,2‰",
      "-3,2‰",
      "+12,2‰",
      "-12,2‰",
      "+32‰",
      "0‰"
    ],
    "answer": 1,
    "explanation": "Przyrost naturalny wyniósł -122 000, a po przeliczeniu na 1000 mieszkańców współczynnik wyniósł około -3,2‰."
  },
  {
    "id": "R03_HARD_06",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż kolejne etapy wpływu powojennego wyżu na strukturę wieku ludności Polski.",
    "options": null,
    "items": [
      "echo wyżu demograficznego",
      "powojenny wyż demograficzny",
      "niż związany z mało licznymi rocznikami wojennymi",
      "II wojna światowa i mała liczba urodzeń"
    ],
    "answer": [
      "II wojna światowa i mała liczba urodzeń",
      "powojenny wyż demograficzny",
      "niż związany z mało licznymi rocznikami wojennymi",
      "echo wyżu demograficznego"
    ],
    "explanation": "Po wojnie wystąpił wyż demograficzny. Mało liczne roczniki wojenne zostały rodzicami w latach 60., co sprzyjało niżowi, a dzieci licznego pokolenia powojennego wyżu utworzyły później echo wyżu."
  },
  {
    "id": "R03_HARD_07",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaka była średnia wieku ludności Włoch i do jakiej wartości miała wzrosnąć w 2029 roku?",
    "options": [
      "42,0 i 45 lat",
      "45,0 i 47 lat",
      "47,3 i 50 lat",
      "50,0 i 55 lat",
      "38,0 i 40 lat",
      "52,0 i 60 lat"
    ],
    "answer": 2,
    "explanation": "Średnia wieku we Włoszech wynosiła 47,3 roku, a prognoza na 2029 rok wskazywała 50 lat."
  },
  {
    "id": "R03_HARD_08",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz państwo UE z właściwym współczynnikiem feminizacji.",
    "options": null,
    "left": [
      "Łotwa",
      "Malta",
      "średnia UE"
    ],
    "right": [
      "116,5",
      "93,6",
      "niespełna 105"
    ],
    "answer": {
      "Łotwa": "116,5",
      "Malta": "93,6",
      "średnia UE": "niespełna 105"
    },
    "explanation": "W 2020 roku najwyższy współczynnik feminizacji w UE miała Łotwa - 116,5, a najniższy Malta - 93,6. Średnia unijna wynosiła niespełna 105."
  },
  {
    "id": "R03_HARD_09",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "W 2022 roku w ciągu około trzech miesięcy do Polski trafiło ponad 3 miliony uchodźców z Ukrainy.",
    "options": null,
    "answer": true,
    "image": "r03_uchodzcy_przejscie_graniczne.jpg",
    "explanation": "Masowy napływ uchodźców nastąpił po rozpoczęciu przez Rosję wojny w 2022 roku."
  },
  {
    "id": "R03_HARD_10",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W którym kraju mieszka największa diaspora osób polskiego pochodzenia, licząca około 10 mln?",
    "options": [
      "Stany Zjednoczone",
      "Niemcy",
      "Francja",
      "Wielka Brytania",
      "Kanada",
      "Brazylia"
    ],
    "answer": 0,
    "image": "r03_polski_sklep_londyn.jpg",
    "explanation": "Najwięcej osób polskiego pochodzenia mieszka w Stanach Zjednoczonych - około 10 mln."
  },
  {
    "id": "R03_HARD_11",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które dwie grupy były po Polakach najliczniejsze w strukturze narodowościowej Polski według spisu z 1931 roku?",
    "options": [
      "Ukraińcy",
      "Żydzi",
      "Białorusini",
      "Niemcy",
      "Litwini",
      "Czesi"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "W 1931 roku Polacy stanowili 68,9%, Ukraińcy 13,9%, a Żydzi 8,6% ludności. To dwie największe grupy po Polakach."
  },
  {
    "id": "R03_HARD_12",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz wyznanie lub religię z liczbą wyznawców w Polsce.",
    "options": null,
    "left": [
      "katolicyzm",
      "prawosławie",
      "protestantyzm",
      "Świadkowie Jehowy",
      "judaizm"
    ],
    "right": [
      "około 86% społeczeństwa",
      "około 506 tys. osób",
      "około 150 tys. osób",
      "około 125 tys. osób",
      "około 1,5 tys. osób"
    ],
    "answer": {
      "katolicyzm": "około 86% społeczeństwa",
      "prawosławie": "około 506 tys. osób",
      "protestantyzm": "około 150 tys. osób",
      "Świadkowie Jehowy": "około 125 tys. osób",
      "judaizm": "około 1,5 tys. osób"
    },
    "image": "r03_swiatynie_w_polsce.jpg",
    "explanation": "Przybliżone wartości to: katolicy 86% społeczeństwa, prawosławni 506 tys., protestanci 150 tys., Świadkowie Jehowy 125 tys., judaizm 1,5 tys. osób."
  },
  {
    "id": "R03_HARD_13",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż województwo, które nie pasuje do grupy o najwyższym przyroście naturalnym: pomorskie, mazowieckie, wielkopolskie, łódzkie.",
    "options": null,
    "answer": "łódzkie",
    "explanation": "Województwa pomorskie, mazowieckie, wielkopolskie i małopolskie należały do obszarów o najwyższym przyroście naturalnym. Łódzkie należało do województw o najniższym przyroście."
  },
  {
    "id": "R03_HARD_14",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Region traci młodych, dobrze wykształconych lekarzy, informatyków i inżynierów, którzy wyjeżdżają do pracy za granicę. Jaki skutek dla kraju pochodzenia jest najbardziej bezpośredni?",
    "options": [
      "niedobór wykwalifikowanych pracowników",
      "natychmiastowy wzrost liczby specjalistów",
      "spadek znaczenia edukacji do zera",
      "automatyczne obniżenie wieku emerytalnego",
      "zanik migracji",
      "wzrost liczby dzieci bez innych zmian"
    ],
    "answer": 0,
    "explanation": "Wyjazd młodych i wykwalifikowanych pracowników oznacza utratę specjalistów, może spowalniać rozwój gospodarczy i oznacza stratę części nakładów poniesionych na ich kształcenie."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r03",
  number: 3,
  title: "Podział administracyjny i ludność Polski na tle Europy",
  icon: "🇵🇱",
  sectionOrder: [
    "Podział administracyjny i sąsiedzi Polski",
    "Rozmieszczenie ludności w Polsce",
    "Zmiany liczby ludności Polski",
    "Struktura płci i wieku ludności",
    "Przyczyny i skutki migracji zagranicznych",
    "Kulturowe zróżnicowanie mieszkańców"
  ],
  sectionIcons: {
    "Podział administracyjny i sąsiedzi Polski": "🏛️",
    "Rozmieszczenie ludności w Polsce": "👥",
    "Zmiany liczby ludności Polski": "📈",
    "Struktura płci i wieku ludności": "🧓",
    "Przyczyny i skutki migracji zagranicznych": "✈️",
    "Kulturowe zróżnicowanie mieszkańców": "🌍"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
