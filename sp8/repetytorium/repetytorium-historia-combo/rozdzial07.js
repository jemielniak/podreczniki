// Skróty sekcji (do identyfikatorów ćwiczeń):
//   POW  = Polska po II wojnie światowej
//   PRL  = Życie w PRL i opór społeczny
//   TRZ  = Droga do III Rzeczypospolitej
//   BLO  = Podział Europy na bloki
//   EUR  = Integracja Europy i upadek ZSRR
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R07_POW_01",
    section: "Polska po II wojnie światowej",
    type: "single_choice",
    prompt: "Jak nazywano obszary na wschodzie utracone przez Polskę po II wojnie światowej?",
    image: "r07_mapa_przesuniec_granic.jpg",
    explanation: "Kresy Wschodnie znalazły się po wojnie w granicach ZSRR.",
    options: [
      "Kresy Wschodnie",
      "Pomorze Zachodnie",
      "Śląsk",
      "Warmia i Mazury",
      "Wielkopolska",
      "Mazowsze"
    ],
    answer: 0
  },
  {
    id: "R07_POW_02",
    section: "Polska po II wojnie światowej",
    type: "multi_select",
    prompt: "Wskaż obszary przyłączone do Polski po II wojnie światowej.",
    image: "r07_mapa_przesuniec_granic.jpg",
    explanation: "Po wojnie w granicach Polski znalazły się m.in. Pomorze Zachodnie, Śląsk oraz Warmia i Mazury; utracono Kresy Wschodnie.",
    options: [
      "Pomorze Zachodnie",
      "Śląsk",
      "Warmia i Mazury",
      "Kresy Wschodnie",
      "Wilno",
      "Lwów"
    ],
    answer: [
      0,
      1,
      2
    ]
  },
  {
    id: "R07_POW_03",
    section: "Polska po II wojnie światowej",
    type: "true_false",
    prompt: "Terytorium Polski po II wojnie światowej było mniejsze niż przed wojną.",
    explanation: "Po II wojnie światowej powierzchnia Polski zmniejszyła się o ponad 76 tys. km².",
    options: null,
    answer: true
  },
  {
    id: "R07_POW_04",
    section: "Polska po II wojnie światowej",
    type: "fill_in",
    prompt: "Powierzchnia Polski po II wojnie światowej wynosiła __________ km².",
    explanation: "Po II wojnie światowej powierzchnia Polski wynosiła 312 679 km².",
    options: null,
    answer: [
      "312 679"
    ],
    altAnswers: [
      [
        "312 679",
        "312679"
      ]
    ]
  },
  {
    id: "R07_POW_05",
    section: "Polska po II wojnie światowej",
    type: "riddle",
    prompt: "Jak nazywał się amerykański program pomocy gospodarczej, którego Polska nie przyjęła w 1947 roku?",
    explanation: "Odmowa udziału w planie Marshalla wydłużyła powojenną odbudowę Polski.",
    options: null,
    answer: "plan Marshalla",
    altAnswers: [
      "plan Marshalla",
      "Plan Marshalla"
    ]
  },
  {
    id: "R07_POW_06",
    section: "Polska po II wojnie światowej",
    type: "odd_one_out",
    prompt: "Wskaż teren, który nie należał do ziem przyłączonych do Polski po wojnie: Pomorze Zachodnie, Śląsk, Warmia, Kresy Wschodnie.",
    explanation: "Kresy Wschodnie Polska utraciła na rzecz ZSRR, w odróżnieniu od zachodnich i północnych ziem przyłączonych do państwa.",
    options: null,
    answer: "Kresy Wschodnie"
  },
  {
    id: "R07_POW_07",
    section: "Polska po II wojnie światowej",
    type: "scenario",
    prompt: "Pod koniec 1949 roku Polacy stanowili zdecydowaną większość mieszkańców kraju. Jaki odsetek ludności stanowili?",
    image: "r07_wykres_przesiedlen.jpg",
    explanation: "Pod koniec 1949 roku Polacy stanowili 97% ludności kraju.",
    options: [
      "97%",
      "82%",
      "64,7%",
      "35,3%",
      "18%"
    ],
    answer: 0
  },
  {
    id: "R07_POW_08",
    section: "Polska po II wojnie światowej",
    type: "match",
    prompt: "Połącz wydarzenia powojenne z ich opisami.",
    explanation: "Zmiana granic, odmowa pomocy i straty gospodarcze ukształtowały sytuację Polski po 1945 roku.",
    options: null,
    left: [
      "Utrata Kresów Wschodnich",
      "Przyłączenie Pomorza Zachodniego",
      "Odmowa udziału w planie Marshalla",
      "Zniszczenia wojenne"
    ],
    right: [
      "około 38% majątku narodowego",
      "1947 rok",
      "przejęcie części ziem niemieckich",
      "na rzecz ZSRR"
    ],
    answer: {
      "Utrata Kresów Wschodnich": "na rzecz ZSRR",
      "Przyłączenie Pomorza Zachodniego": "przejęcie części ziem niemieckich",
      "Odmowa udziału w planie Marshalla": "1947 rok",
      "Zniszczenia wojenne": "około 38% majątku narodowego"
    }
  },
  {
    id: "R07_POW_09",
    section: "Polska po II wojnie światowej",
    type: "sort",
    prompt: "Przyporządkuj nazwy obszarów do ich położenia po 1945 roku.",
    image: "r07_mapa_przesuniec_granic.jpg",
    explanation: "Pomorze Zachodnie, Śląsk oraz Warmia i Mazury znalazły się w Polsce, a Wilno i Lwów pozostały poza nią.",
    options: null,
    categories: [
      "W granicach Polski",
      "Poza granicami Polski"
    ],
    items: [
      "Lwów",
      "Wilno",
      "Warmia i Mazury",
      "Śląsk",
      "Pomorze Zachodnie"
    ],
    answer: {
      "W granicach Polski": [
        "Pomorze Zachodnie",
        "Śląsk",
        "Warmia i Mazury"
      ],
      "Poza granicami Polski": [
        "Wilno",
        "Lwów"
      ]
    }
  },
  {
    id: "R07_POW_10",
    section: "Polska po II wojnie światowej",
    type: "sequence",
    prompt: "Ułóż zdarzenia od najwcześniejszego do najpóźniejszego.",
    explanation: "Wojna rozpoczęła się w 1939 roku, odbudowę podjęto po wojnie, a odmowa planu Marshalla poprzedziła dane z końca 1949 roku.",
    options: null,
    items: [
      "Rozpoczęcie odbudowy Polski w 1945 roku",
      "Dane ludnościowe z końca 1949 roku",
      "Początek II wojny światowej w 1939 roku",
      "Odmowa przyjęcia planu Marshalla w 1947 roku"
    ],
    answer: [
      "Początek II wojny światowej w 1939 roku",
      "Rozpoczęcie odbudowy Polski w 1945 roku",
      "Odmowa przyjęcia planu Marshalla w 1947 roku",
      "Dane ludnościowe z końca 1949 roku"
    ]
  },
  {
    id: "R07_POW_11",
    section: "Polska po II wojnie światowej",
    type: "single_choice",
    prompt: "Kto ustalił podstawy powojennych granic Polski?",
    explanation: "Powojenne granice ustalono na mocy międzynarodowych postanowień Wielkiej Trójki.",
    options: [
      "Wielka Trójka",
      "Polska Zjednoczona Partia Robotnicza",
      "Rada Państwa PRL",
      "Wspólnota Niepodległych Państw",
      "Rada Wzajemnej Pomocy Gospodarczej"
    ],
    answer: 0
  },
  {
    id: "R07_POW_12",
    section: "Polska po II wojnie światowej",
    type: "true_false",
    prompt: "Nieprzyjęcie planu Marshalla spowolniło odbudowę polskiej gospodarki.",
    image: "r07_odbudowa_zniszczonego_miasta.jpg",
    explanation: "Odmowa przyjęcia pomocy amerykańskiej w 1947 roku wydłużyła odbudowę Polski.",
    options: null,
    answer: true
  },
  {
    id: "R07_PRL_01",
    section: "Życie w PRL i opór społeczny",
    type: "single_choice",
    prompt: "Jaka partia miała monopol władzy w Polsce Ludowej?",
    explanation: "W PRL najważniejsze decyzje podejmował pierwszy sekretarz PZPR.",
    options: [
      "Polska Zjednoczona Partia Robotnicza",
      "Niezależny Samorządny Związek Zawodowy Solidarność",
      "Armia Krajowa",
      "Służba Bezpieczeństwa",
      "Wspólnota Niepodległych Państw"
    ],
    answer: 0
  },
  {
    id: "R07_PRL_02",
    section: "Życie w PRL i opór społeczny",
    type: "multi_select",
    prompt: "Jakie działania władz PRL ograniczały swobody obywatelskie?",
    image: "r07_plakat_propagandy_prl.jpg",
    explanation: "Władze stosowały cenzurę i propagandę oraz ograniczały kontakty z Zachodem i działalność opozycji.",
    options: [
      "Stosowanie cenzury",
      "Prowadzenie propagandy",
      "Ograniczanie kontaktów z zagranicą",
      "Zapewnianie pełnej wolności słowa",
      "Swobodna działalność wszystkich partii"
    ],
    answer: [
      0,
      1,
      2
    ]
  },
  {
    id: "R07_PRL_03",
    section: "Życie w PRL i opór społeczny",
    type: "true_false",
    prompt: "W PRL najważniejszą osobą w państwie był premier, a nie pierwszy sekretarz PZPR.",
    explanation: "Rzeczywistym przywódcą politycznym PRL był pierwszy sekretarz PZPR.",
    options: null,
    answer: false
  },
  {
    id: "R07_PRL_04",
    section: "Życie w PRL i opór społeczny",
    type: "fill_in",
    prompt: "Kardynał __________ otrzymał przydomek Prymas Tysiąclecia.",
    explanation: "Kardynał Stefan Wyszyński kierował Kościołem katolickim w Polsce w latach 1948–1981 i sprzeciwiał się podporządkowaniu go władzy.",
    options: null,
    answer: [
      "Stefan Wyszyński"
    ],
    altAnswers: [
      [
        "Stefan Wyszyński",
        "Stefan Wyszynski"
      ]
    ]
  },
  {
    id: "R07_PRL_05",
    section: "Życie w PRL i opór społeczny",
    type: "riddle",
    prompt: "Jak brzmiał pseudonim Danuty Siedzikówny, sanitariuszki w oddziale Łupaszki?",
    image: "r07_partyzanci_powojenni.jpg",
    explanation: "Danuta Siedzikówna, znana jako Inka, działała w powojennym podziemiu niepodległościowym.",
    options: null,
    answer: "Inka",
    altAnswers: [
      "Inka"
    ]
  },
  {
    id: "R07_PRL_06",
    section: "Życie w PRL i opór społeczny",
    type: "odd_one_out",
    prompt: "Wskaż element, który nie był narzędziem ograniczania swobód w PRL: cenzura, propaganda, represje wobec opozycji, wolne wybory.",
    image: "r07_plakat_propagandy_prl.jpg",
    explanation: "Komunistyczna władza kontrolowała życie publiczne; rzeczywiście wolne wybory były sprzeczne z systemem PRL.",
    options: null,
    answer: "wolne wybory"
  },
  {
    id: "R07_PRL_07",
    section: "Życie w PRL i opór społeczny",
    type: "scenario",
    prompt: "Rodzina stoi w długiej kolejce przed sklepem. Gdy przychodzi jej kolej, oprócz pieniędzy musi przedstawić specjalne kartki. Dlaczego je wprowadzono?",
    image: "r07_zycie_w_kolejce.jpg",
    explanation: "Kartki ograniczały zakupy żywności i innych produktów w warunkach niedoborów gospodarki planowej.",
    options: [
      "Aby reglamentować trudno dostępne towary",
      "Aby umożliwić zakup bez ograniczeń",
      "Aby wprowadzić wolny handel zagraniczny",
      "Aby zlikwidować kolejki przez obniżenie cen"
    ],
    answer: 0
  },
  {
    id: "R07_PRL_08",
    section: "Życie w PRL i opór społeczny",
    type: "match",
    prompt: "Połącz postacie i instytucję z określeniami.",
    explanation: "Podziemie reprezentowali m.in. Łupaszka i Inka, Kościół prymas Wyszyński, a władzę sprawowała PZPR.",
    options: null,
    left: [
      "Zygmunt Szendzielarz",
      "Danuta Siedzikówna",
      "Stefan Wyszyński",
      "PZPR"
    ],
    right: [
      "partia rządząca w PRL",
      "Prymas Tysiąclecia",
      "Inka",
      "Łupaszka"
    ],
    answer: {
      "Zygmunt Szendzielarz": "Łupaszka",
      "Danuta Siedzikówna": "Inka",
      "Stefan Wyszyński": "Prymas Tysiąclecia",
      PZPR: "partia rządząca w PRL"
    }
  },
  {
    id: "R07_PRL_09",
    section: "Życie w PRL i opór społeczny",
    type: "sort",
    prompt: "Rozdziel elementy związane z gospodarką i represyjnym systemem politycznym PRL.",
    image: "r07_zycie_w_kolejce.jpg",
    explanation: "Gospodarka planowa i system kartek dotyczyły niedoborów, a cenzura i SB stanowiły elementy kontroli społeczeństwa.",
    options: null,
    categories: [
      "Gospodarka i zaopatrzenie",
      "Kontrola polityczna"
    ],
    items: [
      "ograniczanie wolności słowa",
      "Służba Bezpieczeństwa",
      "cenzura",
      "gospodarka planowa",
      "kartki na towary",
      "państwowe gospodarstwa rolne"
    ],
    answer: {
      "Gospodarka i zaopatrzenie": [
        "państwowe gospodarstwa rolne",
        "kartki na towary",
        "gospodarka planowa"
      ],
      "Kontrola polityczna": [
        "cenzura",
        "Służba Bezpieczeństwa",
        "ograniczanie wolności słowa"
      ]
    }
  },
  {
    id: "R07_PRL_10",
    section: "Życie w PRL i opór społeczny",
    type: "sequence",
    prompt: "Ułóż protesty społeczne w kolejności chronologicznej.",
    image: "r07_strajki_robotnicze.jpg",
    explanation: "Ważne protesty społeczne odbyły się między innymi w Poznaniu w 1956, Warszawie w 1968, Gdańsku w 1970, Radomiu w 1976 i Gdańsku w 1980 roku.",
    options: null,
    items: [
      "Warszawa 1968",
      "Radom 1976",
      "Poznań 1956",
      "Gdańsk 1970",
      "Gdańsk 1980"
    ],
    answer: [
      "Poznań 1956",
      "Warszawa 1968",
      "Gdańsk 1970",
      "Radom 1976",
      "Gdańsk 1980"
    ]
  },
  {
    id: "R07_PRL_11",
    section: "Życie w PRL i opór społeczny",
    type: "single_choice",
    prompt: "Jaka instytucja PRL zajmowała się zwalczaniem opozycji?",
    explanation: "Służba Bezpieczeństwa zwalczała osoby i środowiska sprzeciwiające się komunistycznej władzy.",
    options: [
      "Służba Bezpieczeństwa",
      "Senat",
      "Europejska Wspólnota Gospodarcza",
      "Rada Ministrów",
      "Zgromadzenie Narodowe"
    ],
    answer: 0
  },
  {
    id: "R07_PRL_12",
    section: "Życie w PRL i opór społeczny",
    type: "true_false",
    prompt: "Powojenne podziemie niepodległościowe działało wyłącznie we wschodniej Polsce.",
    image: "r07_partyzanci_powojenni.jpg",
    explanation: "Akcje powojennego podziemia niepodległościowego odbywały się również w centralnej i zachodniej Polsce, na przykład w okolicach Klonowa.",
    options: null,
    answer: false
  },
  {
    id: "R07_TRZ_01",
    section: "Droga do III Rzeczypospolitej",
    type: "single_choice",
    prompt: "Co bezpośrednio skłoniło komunistów do rozmów z opozycją w 1989 roku?",
    image: "r07_strajki_robotnicze.jpg",
    explanation: "Strajki z 1988 roku, obok przemian w ZSRR, skłoniły władze do rokowań z opozycją.",
    options: [
      "Ponowne strajki wiosną i latem 1988 roku",
      "Powstanie NATO w 1949 roku",
      "Wybuch II wojny światowej",
      "Wejście Polski do Unii Europejskiej",
      "Powstanie Europejskiej Wspólnoty Gospodarczej"
    ],
    answer: 0
  },
  {
    id: "R07_TRZ_02",
    section: "Droga do III Rzeczypospolitej",
    type: "multi_select",
    prompt: "Jakie zasady ustalono podczas obrad Okrągłego Stołu?",
    image: "r07_stol_negocjacyjny.jpg",
    explanation: "Porozumienie zapowiadało wolność zrzeszania się i słowa, demokratyczne wybory, niezawisłe sądy oraz samorząd.",
    options: [
      "Pluralizm polityczny",
      "Wolność słowa",
      "Niezawisłość sądów",
      "Swobodnie wybierany samorząd",
      "Monopol jednej partii",
      "Całkowity zakaz zrzeszania się"
    ],
    answer: [
      0,
      1,
      2,
      3
    ]
  },
  {
    id: "R07_TRZ_03",
    section: "Droga do III Rzeczypospolitej",
    type: "true_false",
    prompt: "W wyborach parlamentarnych z czerwca 1989 roku wszystkie mandaty w sejmie i senacie obsadzono w pełni wolnym głosowaniu.",
    image: "r07_urna_wyborcza_1989.jpg",
    explanation: "Wybory do sejmu były częściowo ograniczone ustaleniami z komunistami, natomiast wybory do senatu były w pełni wolne.",
    options: null,
    answer: false
  },
  {
    id: "R07_TRZ_04",
    section: "Droga do III Rzeczypospolitej",
    type: "fill_in",
    prompt: "Obrady Okrągłego Stołu trwały od __________ do __________ 1989 roku.",
    image: "r07_stol_negocjacyjny.jpg",
    explanation: "Negocjacje między władzami a opozycją odbyły się od 6 lutego do 5 kwietnia 1989 roku.",
    options: null,
    answer: [
      "6 lutego",
      "5 kwietnia"
    ],
    altAnswers: [
      [
        "6 lutego",
        "6.02",
        "6 lutego 1989"
      ],
      [
        "5 kwietnia",
        "5.04",
        "5 kwietnia 1989"
      ]
    ]
  },
  {
    id: "R07_TRZ_05",
    section: "Droga do III Rzeczypospolitej",
    type: "riddle",
    prompt: "Kto został pierwszym premierem wywodzącym się z opozycji po wyborach w 1989 roku?",
    explanation: "Tadeusz Mazowiecki stanął na czele rządu, choć część najważniejszych resortów objęli przedstawiciele komunistów.",
    options: null,
    answer: "Tadeusz Mazowiecki",
    altAnswers: [
      "Tadeusz Mazowiecki",
      "Mazowiecki"
    ]
  },
  {
    id: "R07_TRZ_06",
    section: "Droga do III Rzeczypospolitej",
    type: "odd_one_out",
    prompt: "Wskaż postać związaną przede wszystkim z powojennym podziemiem niepodległościowym, a nie z przemianami 1989–1990: Tadeusz Mazowiecki, Lech Wałęsa, Wojciech Jaruzelski, Zygmunt Szendzielarz.",
    explanation: "Zygmunt Szendzielarz dowodził oddziałem podziemia po wojnie; pozostali odegrali role w przemianach przełomu 1989 i 1990 roku.",
    options: null,
    answer: "Zygmunt Szendzielarz"
  },
  {
    id: "R07_TRZ_07",
    section: "Droga do III Rzeczypospolitej",
    type: "scenario",
    prompt: "Po czerwcowych wyborach w 1989 roku opozycja zdobyła 99 ze 100 miejsc w senacie, choć nie uzyskała większości zarezerwowanych mandatów w sejmie. Jak wyjaśnić tę różnicę?",
    image: "r07_urna_wyborcza_1989.jpg",
    explanation: "Ustalenia Okrągłego Stołu ograniczały podział mandatów sejmowych; do senatu wyborcy głosowali bez takich uzgodnień.",
    options: [
      "Wybory do senatu były w pełni wolne",
      "Wszystkie mandaty sejmowe były przydzielane losowo",
      "Opozycja nie mogła kandydować do senatu",
      "Senatorów wyznaczał pierwszy sekretarz PZPR"
    ],
    answer: 0
  },
  {
    id: "R07_TRZ_08",
    section: "Droga do III Rzeczypospolitej",
    type: "match",
    prompt: "Połącz postać z jej rolą w przemianach politycznych.",
    explanation: "W 1989 roku prezydentem został Jaruzelski, premierem Mazowiecki, a w 1990 roku prezydentem został Wałęsa; Kaczorowski przekazał mu symbole władzy.",
    options: null,
    left: [
      "Wojciech Jaruzelski",
      "Tadeusz Mazowiecki",
      "Lech Wałęsa",
      "Ryszard Kaczorowski"
    ],
    right: [
      "ostatni prezydent RP na emigracji",
      "prezydent wybrany w 1990 roku",
      "pierwszy premier z opozycji",
      "prezydent wybrany w 1989 roku"
    ],
    answer: {
      "Wojciech Jaruzelski": "prezydent wybrany w 1989 roku",
      "Tadeusz Mazowiecki": "pierwszy premier z opozycji",
      "Lech Wałęsa": "prezydent wybrany w 1990 roku",
      "Ryszard Kaczorowski": "ostatni prezydent RP na emigracji"
    }
  },
  {
    id: "R07_TRZ_09",
    section: "Droga do III Rzeczypospolitej",
    type: "sort",
    prompt: "Podziel postanowienia i skutki przemian na zasady demokratyczne oraz zmiany symboliczne.",
    explanation: "Okrągły Stół zapowiadał podstawowe swobody, a po 1989 roku zmieniono także nazwę państwa i godło.",
    options: null,
    categories: [
      "Zasady demokratyczne",
      "Zmiany symboliczne"
    ],
    items: [
      "korona na głowie orła w godle",
      "nazwa Rzeczpospolita Polska",
      "pluralizm polityczny",
      "niezawisłość sądów",
      "wolność słowa"
    ],
    answer: {
      "Zasady demokratyczne": [
        "wolność słowa",
        "niezawisłość sądów",
        "pluralizm polityczny"
      ],
      "Zmiany symboliczne": [
        "nazwa Rzeczpospolita Polska",
        "korona na głowie orła w godle"
      ]
    }
  },
  {
    id: "R07_TRZ_10",
    section: "Droga do III Rzeczypospolitej",
    type: "sequence",
    prompt: "Ustaw etapy przemian w Polsce od najwcześniejszego do najpóźniejszego.",
    image: "r07_urna_wyborcza_1989.jpg",
    explanation: "Okrągły Stół poprzedził czerwcowe wybory 1989 roku, a potem odbyły się wybory prezydenckie 1990 i wolne parlamentarne 1991.",
    options: null,
    items: [
      "Wybory do sejmu i senatu w czerwcu 1989 roku",
      "Pierwsze w pełni demokratyczne wybory parlamentarne w 1991 roku",
      "Obrady Okrągłego Stołu w 1989 roku",
      "Wybór Lecha Wałęsy na prezydenta w 1990 roku"
    ],
    answer: [
      "Obrady Okrągłego Stołu w 1989 roku",
      "Wybory do sejmu i senatu w czerwcu 1989 roku",
      "Wybór Lecha Wałęsy na prezydenta w 1990 roku",
      "Pierwsze w pełni demokratyczne wybory parlamentarne w 1991 roku"
    ]
  },
  {
    id: "R07_TRZ_11",
    section: "Droga do III Rzeczypospolitej",
    type: "single_choice",
    prompt: "W którym roku Polska wstąpiła do NATO?",
    explanation: "Polska przystąpiła do NATO w 1999 roku.",
    options: [
      "1999",
      "1989",
      "1991",
      "1993",
      "2004",
      "2007"
    ],
    answer: 0
  },
  {
    id: "R07_TRZ_12",
    section: "Droga do III Rzeczypospolitej",
    type: "true_false",
    prompt: "Po 1989 roku przywrócono koronę orłowi w godle Polski.",
    explanation: "Jedną z ważnych zmian symbolicznych było przywrócenie korony orłowi oraz nazwy Rzeczpospolita Polska.",
    options: null,
    answer: true
  },
  {
    id: "R07_BLO_01",
    section: "Podział Europy na bloki",
    type: "single_choice",
    prompt: "W którym roku utworzono Organizację Paktu Północnoatlantyckiego (NATO)?",
    explanation: "NATO zostało utworzone 4 kwietnia 1949 roku.",
    options: [
      "1949",
      "1945",
      "1952",
      "1955",
      "1958",
      "1993"
    ],
    answer: 0
  },
  {
    id: "R07_BLO_02",
    section: "Podział Europy na bloki",
    type: "multi_select",
    prompt: "Które państwa pozaeuropejskie należały do NATO od 1949 roku?",
    image: "r07_mapa_podzialu_europy.jpg",
    explanation: "Stany Zjednoczone i Kanada były pozaeuropejskimi państwami założycielskimi NATO.",
    options: [
      "Stany Zjednoczone",
      "Kanada",
      "Polska",
      "ZSRR",
      "Węgry"
    ],
    answer: [
      0,
      1
    ]
  },
  {
    id: "R07_BLO_03",
    section: "Podział Europy na bloki",
    type: "true_false",
    prompt: "Układ Warszawski utworzono w 1955 roku.",
    explanation: "Układ Warszawski powstał 14 maja 1955 roku.",
    options: null,
    answer: true
  },
  {
    id: "R07_BLO_04",
    section: "Podział Europy na bloki",
    type: "fill_in",
    prompt: "Skrót RWPG oznacza __________.",
    explanation: "RWPG była organizacją gospodarczą zrzeszającą kraje Bloku Wschodniego.",
    options: null,
    answer: [
      "Rada Wzajemnej Pomocy Gospodarczej"
    ],
    altAnswers: [
      [
        "Rada Wzajemnej Pomocy Gospodarczej",
        "Radę Wzajemnej Pomocy Gospodarczej"
      ]
    ]
  },
  {
    id: "R07_BLO_05",
    section: "Podział Europy na bloki",
    type: "riddle",
    prompt: "Jak nazywa się sojusz wojskowy, utworzony w 1949 roku przez państwa Zachodu?",
    explanation: "NATO zostało powołane 4 kwietnia 1949 roku jako organizacja wojskowa państw zachodnich.",
    options: null,
    answer: "NATO",
    altAnswers: [
      "NATO",
      "Organizacja Paktu Północnoatlantyckiego"
    ]
  },
  {
    id: "R07_BLO_06",
    section: "Podział Europy na bloki",
    type: "odd_one_out",
    prompt: "Wskaż państwo należące do Bloku Wschodniego, a nie do zachodniego NATO: Francja, Wielka Brytania, Belgia, Polska.",
    explanation: "Polska była częścią Bloku Wschodniego i należała do Układu Warszawskiego, podczas gdy pozostałe kraje były członkami NATO.",
    options: null,
    answer: "Polska"
  },
  {
    id: "R07_BLO_07",
    section: "Podział Europy na bloki",
    type: "scenario",
    prompt: "Jest rok 1955. Polska dołącza do organizacji wojskowej skupiającej państwa podporządkowane ZSRR. Jaka to organizacja?",
    image: "r07_mapa_podzialu_europy.jpg",
    explanation: "W 1955 roku powstał Układ Warszawski skupiający państwa Bloku Wschodniego.",
    options: [
      "Układ Warszawski",
      "NATO",
      "Europejska Wspólnota Gospodarcza",
      "Europejska Wspólnota Węgla i Stali"
    ],
    answer: 0
  },
  {
    id: "R07_BLO_08",
    section: "Podział Europy na bloki",
    type: "match",
    prompt: "Dopasuj organizację do roku jej utworzenia.",
    explanation: "NATO i RWPG powstały w 1949 roku, Europejska Wspólnota Węgla i Stali w 1952, a Układ Warszawski w 1955 roku.",
    options: null,
    left: [
      "NATO",
      "RWPG",
      "EWWiS",
      "Układ Warszawski"
    ],
    right: [
      "1955",
      "1952",
      "1949 (organizacja gospodarcza Wschodu)",
      "1949 (organizacja wojskowa Zachodu)"
    ],
    answer: {
      NATO: "1949 (organizacja wojskowa Zachodu)",
      RWPG: "1949 (organizacja gospodarcza Wschodu)",
      EWWiS: "1952",
      "Układ Warszawski": "1955"
    }
  },
  {
    id: "R07_BLO_09",
    section: "Podział Europy na bloki",
    type: "sort",
    prompt: "Przyporządkuj państwa do odpowiednich sojuszy wojskowych.",
    image: "r07_mapa_podzialu_europy.jpg",
    explanation: "Pierwsza grupa była związana z Zachodem, druga należała do sojuszu wojskowego państw Bloku Wschodniego.",
    options: null,
    categories: [
      "NATO w 1949 roku",
      "Układ Warszawski"
    ],
    items: [
      "Bułgaria",
      "Rumunia",
      "Węgry",
      "Polska",
      "Kanada",
      "Norwegia",
      "Belgia",
      "Francja"
    ],
    answer: {
      "NATO w 1949 roku": [
        "Francja",
        "Belgia",
        "Norwegia",
        "Kanada"
      ],
      "Układ Warszawski": [
        "Polska",
        "Węgry",
        "Rumunia",
        "Bułgaria"
      ]
    }
  },
  {
    id: "R07_BLO_10",
    section: "Podział Europy na bloki",
    type: "sequence",
    prompt: "Uszereguj wydarzenia według dat utworzenia organizacji.",
    explanation: "RWPG powstała w 1949 roku, EWWiS w 1952, Układ Warszawski w 1955, a EWG w 1958.",
    options: null,
    items: [
      "Powstanie EWWiS w 1952 roku",
      "Powstanie EWG w 1958 roku",
      "Utworzenie RWPG w 1949 roku",
      "Powstanie Układu Warszawskiego w 1955 roku"
    ],
    answer: [
      "Utworzenie RWPG w 1949 roku",
      "Powstanie EWWiS w 1952 roku",
      "Powstanie Układu Warszawskiego w 1955 roku",
      "Powstanie EWG w 1958 roku"
    ]
  },
  {
    id: "R07_BLO_11",
    section: "Podział Europy na bloki",
    type: "single_choice",
    prompt: "Które państwo było w 1952 roku współzałożycielem Europejskiej Wspólnoty Węgla i Stali?",
    image: "r07_wspolpraca_europejska.jpg",
    explanation: "Belgia należała do sześciu założycieli EWWiS; pozostałe wymienione państwa nie należały do tej szóstki.",
    options: [
      "Belgia",
      "Dania",
      "Grecja",
      "Hiszpania",
      "Wielka Brytania",
      "Austria"
    ],
    answer: 0
  },
  {
    id: "R07_BLO_12",
    section: "Podział Europy na bloki",
    type: "true_false",
    prompt: "Amerykańska pomoc w ramach planu Marshalla sprzyjała jednoczeniu się państw Europy Zachodniej.",
    explanation: "Pomoc amerykańska sprzyjała współpracy i integracji gospodarczej państw Europy Zachodniej.",
    options: null,
    answer: true
  },
  {
    id: "R07_EUR_01",
    section: "Integracja Europy i upadek ZSRR",
    type: "single_choice",
    prompt: "Co oznaczało hasło głasnost głoszone przez Michaiła Gorbaczowa?",
    explanation: "Głasnost oznacza jawność, a pierestrojka oznacza przebudowę.",
    options: [
      "jawność",
      "przebudowa",
      "wyścig zbrojeń",
      "cenzura",
      "reglamentacja towarów"
    ],
    answer: 0
  },
  {
    id: "R07_EUR_02",
    section: "Integracja Europy i upadek ZSRR",
    type: "multi_select",
    prompt: "Które z republik nadbałtyckich nie weszły początkowo do Wspólnoty Niepodległych Państw?",
    image: "r07_mapa_rozpadu_zsrr.jpg",
    explanation: "Po rozpadzie ZSRR państwa bałtyckie: Litwa, Łotwa i Estonia, nie weszły do WNP.",
    options: [
      "Litwa",
      "Łotwa",
      "Estonia",
      "Ukraina",
      "Białoruś"
    ],
    answer: [
      0,
      1,
      2
    ]
  },
  {
    id: "R07_EUR_03",
    section: "Integracja Europy i upadek ZSRR",
    type: "true_false",
    prompt: "ZSRR rozpadł się w 1991 roku.",
    image: "r07_mapa_rozpadu_zsrr.jpg",
    explanation: "Przemiany zainicjowane przez Gorbaczowa doprowadziły w 1991 roku do rozpadu ZSRR i powstania WNP.",
    options: null,
    answer: true
  },
  {
    id: "R07_EUR_04",
    section: "Integracja Europy i upadek ZSRR",
    type: "fill_in",
    prompt: "Unia Europejska powstała w roku __________.",
    image: "r07_wspolpraca_europejska.jpg",
    explanation: "Unia Europejska powstała w 1993 roku.",
    options: null,
    answer: [
      "1993"
    ],
    altAnswers: [
      [
        "1993",
        "1993 r."
      ]
    ]
  },
  {
    id: "R07_EUR_05",
    section: "Integracja Europy i upadek ZSRR",
    type: "riddle",
    prompt: "W jakim mieście zawarto w grudniu 1991 roku porozumienie poprzedzające powstanie Unii Europejskiej?",
    explanation: "Porozumienie dwunastu państw w Maastricht zawarto 10 grudnia 1991 roku.",
    options: null,
    answer: "Maastricht",
    altAnswers: [
      "Maastricht"
    ]
  },
  {
    id: "R07_EUR_06",
    section: "Integracja Europy i upadek ZSRR",
    type: "odd_one_out",
    prompt: "Wskaż państwo, które przystąpiło do UE w 2007 roku zamiast w 2004 roku: Polska, Słowacja, Estonia, Rumunia.",
    image: "r07_mapa_rozszerzenia_ue.jpg",
    explanation: "Rumunia i Bułgaria przystąpiły do Unii w 2007 roku, a Polska, Słowacja i Estonia w 2004 roku.",
    options: null,
    answer: "Rumunia"
  },
  {
    id: "R07_EUR_07",
    section: "Integracja Europy i upadek ZSRR",
    type: "scenario",
    prompt: "Przyglądasz się mapie rozszerzania Unii Europejskiej. Dwa państwa położone w południowo-wschodniej Europie zostały członkami UE w 2007 roku. Która to para?",
    image: "r07_mapa_rozszerzenia_ue.jpg",
    explanation: "Rumunia i Bułgaria przystąpiły do Unii Europejskiej w 2007 roku.",
    options: [
      "Rumunia i Bułgaria",
      "Polska i Czechy",
      "Litwa i Łotwa",
      "Austria i Szwecja",
      "Hiszpania i Portugalia"
    ],
    answer: 0
  },
  {
    id: "R07_EUR_08",
    section: "Integracja Europy i upadek ZSRR",
    type: "match",
    prompt: "Połącz państwo z rokiem przystąpienia do Unii Europejskiej.",
    image: "r07_mapa_rozszerzenia_ue.jpg",
    explanation: "Austria dołączyła do UE w 1995 roku, Polska w 2004, Rumunia w 2007, a Chorwacja w 2013 roku.",
    options: null,
    left: [
      "Austria",
      "Polska",
      "Rumunia",
      "Chorwacja"
    ],
    right: [
      "2013",
      "2007",
      "2004",
      "1995"
    ],
    answer: {
      Austria: "1995",
      Polska: "2004",
      Rumunia: "2007",
      Chorwacja: "2013"
    }
  },
  {
    id: "R07_EUR_09",
    section: "Integracja Europy i upadek ZSRR",
    type: "sort",
    prompt: "Rozdziel państwa według roku przystąpienia do Unii Europejskiej.",
    image: "r07_mapa_rozszerzenia_ue.jpg",
    explanation: "Państwa Europy przystępowały do Unii Europejskiej w kolejnych falach rozszerzenia, między innymi w latach 2004, 2007 i 2013.",
    options: null,
    categories: [
      "2004",
      "2007",
      "2013"
    ],
    items: [
      "Chorwacja",
      "Bułgaria",
      "Rumunia",
      "Słowacja",
      "Estonia",
      "Polska"
    ],
    answer: {
      "2004": [
        "Polska",
        "Estonia",
        "Słowacja"
      ],
      "2007": [
        "Rumunia",
        "Bułgaria"
      ],
      "2013": [
        "Chorwacja"
      ]
    }
  },
  {
    id: "R07_EUR_10",
    section: "Integracja Europy i upadek ZSRR",
    type: "sequence",
    prompt: "Ułóż etapy integracji zachodnioeuropejskiej i polskiej w kolejności.",
    explanation: "Integracja rozpoczęła się od EWWiS i EWG, później powstała UE, do której Polska dołączyła w 2004 roku.",
    options: null,
    items: [
      "Utworzenie EWG w 1958 roku",
      "Przystąpienie Polski do UE w 2004 roku",
      "Utworzenie EWWiS w 1952 roku",
      "Powstanie UE w 1993 roku"
    ],
    answer: [
      "Utworzenie EWWiS w 1952 roku",
      "Utworzenie EWG w 1958 roku",
      "Powstanie UE w 1993 roku",
      "Przystąpienie Polski do UE w 2004 roku"
    ]
  },
  {
    id: "R07_EUR_11",
    section: "Integracja Europy i upadek ZSRR",
    type: "single_choice",
    prompt: "Jak nazwano falę zmian politycznych, która ogarnęła państwa Bloku Wschodniego w 1989 roku?",
    explanation: "Przemiany ustrojowe w państwach Bloku Wschodniego określa się mianem jesieni narodów.",
    options: [
      "jesień narodów",
      "plan Marshalla",
      "pierestrojka",
      "demokracja ludowa",
      "wyścig zbrojeń"
    ],
    answer: 0
  },
  {
    id: "R07_EUR_12",
    section: "Integracja Europy i upadek ZSRR",
    type: "true_false",
    prompt: "Wielka Brytania wystąpiła z Unii Europejskiej.",
    explanation: "Wielka Brytania wystąpiła z Unii Europejskiej.",
    options: null,
    answer: true
  },
  {
    id: "R07_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "O ile w przybliżeniu zmniejszyła się powierzchnia Polski po II wojnie światowej względem 1939 roku?",
    explanation: "Po II wojnie światowej powierzchnia Polski zmniejszyła się o ponad 76 tys. km².",
    options: [
      "o ponad 76 tys. km²",
      "o około 10 tys. km²",
      "o około 38 tys. km²",
      "o ponad 200 tys. km²",
      "o około 150 tys. km²"
    ],
    answer: 0
  },
  {
    id: "R07_HARD_02",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Które z podanych dat odnoszą się do dwóch tur wyborów parlamentarnych w 1989 roku?",
    explanation: "Wybory parlamentarne odbyły się 4 i 18 czerwca 1989 roku; 6 lutego i 5 kwietnia to daty graniczne obrad Okrągłego Stołu.",
    options: [
      "4 czerwca",
      "18 czerwca",
      "6 lutego",
      "5 kwietnia",
      "10 grudnia"
    ],
    answer: [
      0,
      1
    ]
  },
  {
    id: "R07_HARD_03",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Ile mandatów w stumiejscowym senacie zdobyła opozycja w wyborach 1989 roku? __________.",
    explanation: "Opozycja zdobyła aż 99 na 100 miejsc w senacie, gdzie wybory były w pełni wolne.",
    options: null,
    answer: [
      "99"
    ],
    altAnswers: [
      [
        "99",
        "99 mandatów"
      ]
    ]
  },
  {
    id: "R07_HARD_04",
    section: "Super trudne",
    type: "riddle",
    prompt: "Podaj imię i nazwisko ostatniego prezydenta Rzeczypospolitej na emigracji, który przekazał Lechowi Wałęsie symbole władzy.",
    explanation: "Ryszard Kaczorowski podczas oficjalnej wizyty w Polsce przekazał nowemu prezydentowi symbole władzy.",
    options: null,
    answer: "Ryszard Kaczorowski",
    altAnswers: [
      "Ryszard Kaczorowski",
      "Kaczorowski"
    ]
  },
  {
    id: "R07_HARD_05",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Wskaż państwo, które nie przystąpiło do EWG w 1973 roku: Dania, Irlandia, Wielka Brytania, Grecja.",
    explanation: "Dania, Irlandia i Wielka Brytania przystąpiły do EWG w 1973 roku, a Grecja w 1981 roku.",
    options: null,
    answer: "Grecja"
  },
  {
    id: "R07_HARD_06",
    section: "Super trudne",
    type: "scenario",
    prompt: "W 1947 roku państwa Bloku Wschodniego, w tym Polska, rezygnują z pomocy amerykańskiej. W latach powojennych Zachód szybciej się odbudowuje. Co wpłynęło na tę różnicę?",
    image: "r07_odbudowa_zniszczonego_miasta.jpg",
    explanation: "ZSRR uniemożliwił państwom swojej strefy przyjęcie pomocy amerykańskiej, co spowolniło odbudowę Polski.",
    options: [
      "Odrzucenie pomocy w ramach planu Marshalla",
      "Przystąpienie Polski do UE w 2004 roku",
      "Powstanie Układu Warszawskiego w 1955 roku",
      "Pierwsze demokratyczne wybory w 1991 roku"
    ],
    answer: 0
  },
  {
    id: "R07_HARD_07",
    section: "Super trudne",
    type: "match",
    prompt: "Dopasuj państwa Europy Zachodniej do lat rozpoczęcia ich udziału w europejskiej integracji gospodarczej.",
    image: "r07_mapa_rozszerzenia_ue.jpg",
    explanation: "Dania dołączyła do EWG w 1973 roku, Grecja w 1981, Hiszpania w 1986, a Austria do UE w 1995 roku.",
    options: null,
    left: [
      "Dania",
      "Grecja",
      "Hiszpania",
      "Austria"
    ],
    right: [
      "1995",
      "1986",
      "1981",
      "1973"
    ],
    answer: {
      Dania: "1973",
      Grecja: "1981",
      Hiszpania: "1986",
      Austria: "1995"
    }
  },
  {
    id: "R07_HARD_08",
    section: "Super trudne",
    type: "sort",
    prompt: "Przyporządkuj państwa byłego Bloku Wschodniego do lat przystąpienia do NATO.",
    explanation: "Polska, Czechy i Węgry przystąpiły do NATO w 1999 roku, a Estonia, Litwa, Łotwa i Słowacja w 2004 roku.",
    options: null,
    categories: [
      "1999",
      "2004"
    ],
    items: [
      "Słowacja",
      "Łotwa",
      "Litwa",
      "Estonia",
      "Węgry",
      "Czechy",
      "Polska"
    ],
    answer: {
      "1999": [
        "Polska",
        "Czechy",
        "Węgry"
      ],
      "2004": [
        "Estonia",
        "Litwa",
        "Łotwa",
        "Słowacja"
      ]
    }
  },
  {
    id: "R07_HARD_09",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż sześć zdarzeń przemian i integracji Polski chronologicznie.",
    explanation: "Droga do demokratycznej Polski i jej wejścia w struktury Zachodu przebiegała od negocjacji w 1989 roku do akcesji do UE w 2004 roku.",
    options: null,
    items: [
      "Wybory parlamentarne w czerwcu 1989 roku",
      "Pierwsze w pełni demokratyczne wybory parlamentarne w 1991 roku",
      "Przystąpienie Polski do UE w 2004 roku",
      "Obrady Okrągłego Stołu w 1989 roku",
      "Wybór Lecha Wałęsy na prezydenta w 1990 roku",
      "Przystąpienie Polski do NATO w 1999 roku"
    ],
    answer: [
      "Obrady Okrągłego Stołu w 1989 roku",
      "Wybory parlamentarne w czerwcu 1989 roku",
      "Wybór Lecha Wałęsy na prezydenta w 1990 roku",
      "Pierwsze w pełni demokratyczne wybory parlamentarne w 1991 roku",
      "Przystąpienie Polski do NATO w 1999 roku",
      "Przystąpienie Polski do UE w 2004 roku"
    ]
  },
  {
    id: "R07_HARD_10",
    section: "Super trudne",
    type: "true_false",
    prompt: "W czerwcu 1989 roku wybory do senatu były w pełni wolne, choć wybory do sejmu nie były w pełni demokratyczne.",
    explanation: "Komuniści mieli zagwarantowaną większość miejsc w sejmie, lecz wybory do senatu były bez takich ograniczeń.",
    options: null,
    answer: true
  },
  {
    id: "R07_HARD_11",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Które trzy grupy narodowościowe liczyły po 200 tys. osób w Polsce pod koniec 1949 roku?",
    image: "r07_wykres_przesiedlen.jpg",
    explanation: "Pod koniec 1949 roku w Polsce mieszkało po 200 tys. Niemców, Ukraińców i Żydów oraz około 150 tys. Białorusinów.",
    options: [
      "Niemcy, Ukraińcy, Żydzi",
      "Polacy, Niemcy, Ukraińcy",
      "Ukraińcy, Białorusini, Litwini",
      "Niemcy, Białorusini, Żydzi",
      "Żydzi, Białorusini, Litwini"
    ],
    answer: 0
  },
  {
    id: "R07_HARD_12",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Które organizacje utworzono w 1949 roku?",
    image: "r07_mapa_podzialu_europy.jpg",
    explanation: "NATO utworzono w kwietniu 1949 roku, a RWPG w styczniu 1949 roku; pozostałe wymienione organizacje powstały później.",
    options: [
      "NATO",
      "RWPG",
      "EWWiS",
      "Układ Warszawski",
      "EWG"
    ],
    answer: [
      0,
      1
    ]
  },
  {
    id: "R07_HARD_13",
    section: "Super trudne",
    type: "riddle",
    prompt: "Jak nazywała się organizacja utworzona po rozpadzie ZSRR, do której początkowo nie weszły Litwa, Łotwa i Estonia?",
    image: "r07_mapa_rozpadu_zsrr.jpg",
    explanation: "WNP powstała po rozpadzie ZSRR w 1991 roku, a trzy państwa nadbałtyckie nie przystąpiły do niej.",
    options: null,
    answer: "Wspólnota Niepodległych Państw",
    altAnswers: [
      "Wspólnota Niepodległych Państw",
      "WNP"
    ]
  },
  {
    id: "R07_HARD_14",
    section: "Super trudne",
    type: "scenario",
    prompt: "Na pierwszej mapie widzisz państwo, którego członkostwo w RWPG trwało od 1949 do 1962 roku. Na drugiej jego przynależność do Układu Warszawskiego trwała od 1955 do 1968 roku. O które państwo chodzi?",
    explanation: "Dwie mapy wskazują Albanię jako członka RWPG w latach 1949–1962 i Układu Warszawskiego w latach 1955–1968.",
    options: [
      "Albania",
      "Bułgaria",
      "Polska",
      "Rumunia",
      "Węgry"
    ],
    answer: 0
  }
];

const KID_PROMPTS = {
  "R07_POW_04": "Ile kilometrów kwadratowych miała Polska po wojnie? Wpisz liczbę: __________ km².",
  "R07_POW_07": "Jaki procent ludzi w Polsce pod koniec 1949 roku stanowili Polacy?",
  "R07_PRL_03": "Czy w PRL premier był ważniejszy od szefa PZPR?",
  "R07_PRL_07": "Dlaczego w PRL trzeba było pokazywać kartki, aby kupić część towarów?",
  "R07_TRZ_04": "Kiedy zaczął się i kiedy skończył Okrągły Stół w 1989 roku? Od __________ do __________.",
  "R07_TRZ_07": "Dlaczego w 1989 roku opozycja wygrała prawie wszystkie miejsca w senacie?",
  "R07_BLO_04": "Rozwiń skrót RWPG: __________.",
  "R07_EUR_02": "Zaznacz trzy kraje nad Morzem Bałtyckim, które nie dołączyły do WNP.",
  "R07_EUR_09": "Ułóż państwa w grupach według roku dołączenia do UE.",
  "R07_HARD_03": "Ile ze 100 miejsc w senacie zdobyła opozycja w 1989 roku? __________."
};

const chapter = {
  id: "r07",
  number: 7,
  title: "Polska i świat po II wojnie światowej",
  icon: "🌍",
  sectionOrder: [
    "Polska po II wojnie światowej",
    "Życie w PRL i opór społeczny",
    "Droga do III Rzeczypospolitej",
    "Podział Europy na bloki",
    "Integracja Europy i upadek ZSRR"
  ],
  sectionIcons: {
    "Polska po II wojnie światowej": "🗺️",
    "Życie w PRL i opór społeczny": "✊",
    "Droga do III Rzeczypospolitej": "🗳️",
    "Podział Europy na bloki": "🛡️",
    "Integracja Europy i upadek ZSRR": "🇪🇺"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
