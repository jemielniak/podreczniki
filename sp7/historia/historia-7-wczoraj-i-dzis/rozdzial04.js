// Skróty sekcji (do identyfikatorów ćwiczeń):
//   POW  = Powstanie styczniowe
//   REP  = Represje i polityka zaborców
//   GOS  = Przemiany społeczno-gospodarcze
//   POL  = Działalność polityczna
//   KUL  = Kultura polska przełomu XIX i XX wieku
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_POW_01",
    "section": "Powstanie styczniowe",
    "type": "single_choice",
    "prompt": "Która idea zakładała traktowanie narodu jak jednego organizmu i wspólną pracę obywateli dla dobra ogółu?",
    "explanation": "Praca organiczna polegała na systematycznym wzmacnianiu społeczeństwa, gospodarki, kultury i oświaty.",
    "image": "r04_bazar_poznanski.jpg",
    "options": [
      "Praca organiczna",
      "Kulturkampf",
      "Trójlojalizm",
      "Rusyfikacja",
      "Syjonizm",
      "Branka"
    ],
    "answer": 0
  },
  {
    "id": "R04_POW_02",
    "section": "Powstanie styczniowe",
    "type": "match",
    "prompt": "Połącz działacza pracy organicznej z jego działaniem.",
    "explanation": "W podręczniku te trzy osoby pokazują wielkopolskie początki pracy organicznej.",
    "options": null,
    "left": [
      "Dezydery Chłapowski",
      "Karol Marcinkowski",
      "Hipolit Cegielski"
    ],
    "right": [
      "przyczynił się do powstania Bazaru",
      "otworzył fabrykę maszyn rolniczych",
      "upowszechniał nowoczesne sposoby uprawy roli"
    ],
    "answer": {
      "Dezydery Chłapowski": "upowszechniał nowoczesne sposoby uprawy roli",
      "Karol Marcinkowski": "przyczynił się do powstania Bazaru",
      "Hipolit Cegielski": "otworzył fabrykę maszyn rolniczych"
    }
  },
  {
    "id": "R04_POW_03",
    "section": "Powstanie styczniowe",
    "type": "true_false",
    "prompt": "Odwilż posewastopolska w Rosji przyczyniła się do złagodzenia polityki wobec Królestwa Polskiego.",
    "explanation": "Po klęsce Rosji w wojnie krymskiej rozpoczął się okres reform, który przyniósł m.in. zniesienie stanu wojennego i złagodzenie represji.",
    "options": null,
    "answer": true
  },
  {
    "id": "R04_POW_04",
    "section": "Powstanie styczniowe",
    "type": "multi_select",
    "prompt": "Zaznacz instytucje lub działania, które pojawiły się w Królestwie Polskim w okresie odwilży posewastopolskiej.",
    "explanation": "W okresie odwilży w Warszawie otwarto Akademię Medyko-Chirurgiczną, utworzono Towarzystwo Rolnicze i wzrosła aktywność gospodarcza.",
    "options": [
      "Akademia Medyko-Chirurgiczna",
      "Towarzystwo Rolnicze",
      "Duma Państwowa",
      "Komisja Kolonizacyjna",
      "większa aktywność gospodarcza społeczeństwa"
    ],
    "answer": [
      0,
      1,
      4
    ]
  },
  {
    "id": "R04_POW_05",
    "section": "Powstanie styczniowe",
    "type": "single_choice",
    "prompt": "Jak nazywano ugrupowanie głoszące radykalny program społeczny i szybkie przygotowanie powstania narodowego?",
    "explanation": "Czerwoni od 1861 r. tworzyli organizacje spiskowe i uważali za konieczne uwłaszczenie chłopów.",
    "options": [
      "Czerwoni",
      "Biali",
      "Stańczycy",
      "Endecy",
      "Ludowcy",
      "Pozytywiści"
    ],
    "answer": 0
  },
  {
    "id": "R04_POW_06",
    "section": "Powstanie styczniowe",
    "type": "single_choice",
    "prompt": "Co odróżniało program Białych od programu Czerwonych w sprawie powstania?",
    "explanation": "Biali mieli program umiarkowany i uzależniali wybuch walk od przygotowań oraz wsparcia zachodnich mocarstw.",
    "options": [
      "Biali chcieli przygotowań i poparcia Wielkiej Brytanii oraz Francji",
      "Biali odrzucali uwłaszczenie chłopów w każdej formie",
      "Biali planowali natychmiastowe wystąpienie bez przygotowań",
      "Biali domagali się likwidacji Towarzystwa Rolniczego",
      "Biali chcieli współpracy z Organizacją Bojową PPS",
      "Biali kierowali ruchem ludowym w Galicji"
    ],
    "answer": 0
  },
  {
    "id": "R04_POW_07",
    "section": "Powstanie styczniowe",
    "type": "fill_in",
    "prompt": "Pierwsza manifestacja patriotyczna w ramach rewolucji moralnej odbyła się w roku __________ podczas pogrzebu wdowy po generale __________.",
    "explanation": "Podręcznik wskazuje pogrzeb wdowy po generale Józefie Sowińskim jako pierwszą manifestację patriotyczną rewolucji moralnej.",
    "image": "r04_bizuteria_patriotyczna.jpg",
    "options": null,
    "answer": [
      "1860",
      "Józefie Sowińskim"
    ],
    "altAnswers": [
      [
        "1860",
        "1860 r."
      ],
      [
        "Józefie Sowińskim",
        "Józefa Sowińskiego",
        "Sowińskim"
      ]
    ]
  },
  {
    "id": "R04_POW_08",
    "section": "Powstanie styczniowe",
    "type": "single_choice",
    "prompt": "Jaka decyzja władz carskich z kwietnia 1861 r. doprowadziła do manifestacji na placu Zamkowym?",
    "explanation": "Z inicjatywy Aleksandra Wielopolskiego rozwiązano Towarzystwo Rolnicze, co doprowadziło do manifestacji zakończonej śmiercią ponad 100 osób.",
    "options": [
      "Rozwiązanie Towarzystwa Rolniczego",
      "Wprowadzenie ustawy kagańcowej",
      "Utworzenie Komisji Kolonizacyjnej",
      "Otwarcie Szkoły Głównej Warszawskiej",
      "Powstanie Dumy Państwowej",
      "Założenie Wielkiego Proletariatu"
    ],
    "answer": 0
  },
  {
    "id": "R04_POW_09",
    "section": "Powstanie styczniowe",
    "type": "riddle",
    "prompt": "Nadzwyczajny pobór polskich rekrutów do armii rosyjskiej, zarządzony z inicjatywy Aleksandra Wielopolskiego, to...",
    "explanation": "Branka objęła głównie patriotyczną młodzież i stała się bezpośrednim impulsem przyspieszenia powstania.",
    "image": "r04_branka_1863.jpg",
    "options": null,
    "answer": "branka",
    "altAnswers": [
      "branka",
      "Branka"
    ]
  },
  {
    "id": "R04_POW_10",
    "section": "Powstanie styczniowe",
    "type": "scenario",
    "prompt": "Jest styczeń 1863 r. Młodzi konspiratorzy dowiadują się, że władze carskie chcą wcielić ich do armii rosyjskiej. Jaką decyzję podejmują Czerwoni?",
    "explanation": "Informacja o brance dotarła do spiskowców wcześniej, dlatego Czerwoni postanowili rozpocząć walkę mimo niesprzyjających warunków.",
    "options": [
      "Przyspieszają wybuch powstania",
      "Rozwiązują Towarzystwo Rolnicze",
      "Zakładają Komisję Kolonizacyjną",
      "Przenoszą centrum działań do Galicji",
      "Ogłaszają trójlojalizm",
      "Tworzą Polską Macierz Szkolną"
    ],
    "answer": 0
  },
  {
    "id": "R04_POW_11",
    "section": "Powstanie styczniowe",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w kolejności chronologicznej.",
    "explanation": "Branka poprzedziła wybuch powstania 22 stycznia 1863 r.; Traugutt kierował powstaniem przed ukazem carskim z 2 marca 1864 r.",
    "options": null,
    "items": [
      "Wybuch powstania styczniowego",
      "Dyktatura Romualda Traugutta",
      "Branka",
      "Ukaz carski o uwłaszczeniu chłopów"
    ],
    "answer": [
      "Branka",
      "Wybuch powstania styczniowego",
      "Dyktatura Romualda Traugutta",
      "Ukaz carski o uwłaszczeniu chłopów"
    ]
  },
  {
    "id": "R04_POW_12",
    "section": "Powstanie styczniowe",
    "type": "single_choice",
    "prompt": "Jaki charakter miały walki podczas powstania styczniowego?",
    "explanation": "Polacy walczyli w niewielkich oddziałach, odnosili sukcesy w potyczkach, ale nie opanowali dużych miast ani ważnych obszarów.",
    "image": "r04_patrol_powstanczy.jpg",
    "options": [
      "Partyzancki",
      "Regularna wojna frontowa",
      "Wyłącznie morski",
      "Oblężniczy",
      "Dyplomatyczny",
      "Kolonialny"
    ],
    "answer": 0
  },
  {
    "id": "R04_REP_01",
    "section": "Represje i polityka zaborców",
    "type": "single_choice",
    "prompt": "Jaką nazwę nadano Królestwu Polskiemu po likwidacji jego odrębności ustrojowej i prawnej?",
    "explanation": "Jedną z represji było włączenie Królestwa Polskiego bezpośrednio do Rosji i zmiana jego nazwy na Kraj Przywiślański.",
    "options": [
      "Kraj Przywiślański",
      "Galicja",
      "Wielkopolska",
      "Ziemie Zabrane",
      "Prowincja Poznańska",
      "Królestwo Galicji"
    ],
    "answer": 0
  },
  {
    "id": "R04_REP_02",
    "section": "Represje i polityka zaborców",
    "type": "multi_select",
    "prompt": "Zaznacz represje stosowane wobec powstańców i osób wspierających powstanie.",
    "explanation": "Wobec uczestników i zwolenników powstania stosowano egzekucje, kary więzienia, zsyłki, służbę w karnych oddziałach i konfiskaty majątków.",
    "image": "r04_zeslancy_syberia.jpg",
    "options": [
      "publiczne egzekucje",
      "konfiskaty majątków",
      "zesłanie na katorgę",
      "powołanie Sejmu Krajowego",
      "rugi pruskie"
    ],
    "answer": [
      0,
      1,
      2
    ]
  },
  {
    "id": "R04_REP_03",
    "section": "Represje i polityka zaborców",
    "type": "riddle",
    "prompt": "Rodzaj kary polegającej na ciężkiej pracy, np. przy wyrębie drzew w tajdze lub w kopalniach, to...",
    "explanation": "Podręcznik definiuje katorgę jako ciężką pracę, na którą zsyłano m.in. uczestników powstania.",
    "options": null,
    "answer": "katorga",
    "altAnswers": [
      "katorga",
      "Katorga"
    ]
  },
  {
    "id": "R04_REP_04",
    "section": "Represje i polityka zaborców",
    "type": "fill_in",
    "prompt": "Czterokołowy wóz konny używany przez Rosjan do przewożenia więźniów nazywał się __________.",
    "explanation": "Kibitki służyły m.in. do przewożenia zesłańców w głąb państwa rosyjskiego.",
    "options": null,
    "answer": [
      "kibitka"
    ],
    "altAnswers": [
      [
        "kibitka",
        "kibitką",
        "kibitki"
      ]
    ]
  },
  {
    "id": "R04_REP_05",
    "section": "Represje i polityka zaborców",
    "type": "single_choice",
    "prompt": "Na czym polegała rusyfikacja po powstaniu styczniowym?",
    "explanation": "Rusyfikacja oznaczała niszczenie świadomości narodowej przez narzucanie kultury rosyjskiej i języka rosyjskiego.",
    "options": [
      "Na narzucaniu Polakom kultury i języka rosyjskiego",
      "Na tworzeniu polskich szkół prywatnych",
      "Na wspieraniu osadnictwa niemieckiego",
      "Na przyznaniu Galicji autonomii",
      "Na organizowaniu strajków szkolnych",
      "Na rozwoju ruchu ludowego"
    ],
    "answer": 0
  },
  {
    "id": "R04_REP_06",
    "section": "Represje i polityka zaborców",
    "type": "sort",
    "prompt": "Przyporządkuj działania do polityki zaborczej.",
    "explanation": "Rusyfikacja dotyczyła zaboru rosyjskiego, germanizacja zaboru pruskiego i działań państwa niemieckiego.",
    "options": null,
    "items": [
      "język rosyjski jako wykładowy w szkołach",
      "zmiana polskich nazw geograficznych",
      "Komisja Kolonizacyjna",
      "zamykanie polskich instytucji kulturalnych"
    ],
    "categories": [
      "rusyfikacja",
      "germanizacja"
    ],
    "answer": {
      "rusyfikacja": [
        "język rosyjski jako wykładowy w szkołach",
        "zamykanie polskich instytucji kulturalnych"
      ],
      "germanizacja": [
        "zmiana polskich nazw geograficznych",
        "Komisja Kolonizacyjna"
      ]
    }
  },
  {
    "id": "R04_REP_07",
    "section": "Represje i polityka zaborców",
    "type": "single_choice",
    "prompt": "Czego dotyczył kulturkampf prowadzony przez Ottona von Bismarcka?",
    "explanation": "Kulturkampf, czyli 'walka o kulturę', miał podporządkować Kościół katolicki państwu niemieckiemu.",
    "options": [
      "Ograniczenia roli Kościoła katolickiego",
      "Zwiększenia autonomii Galicji",
      "Budowy linii kolejowych",
      "Tworzenia polskich szkół prywatnych",
      "Założenia PPS",
      "Uwłaszczenia chłopów w Królestwie"
    ],
    "answer": 0
  },
  {
    "id": "R04_REP_08",
    "section": "Represje i polityka zaborców",
    "type": "true_false",
    "prompt": "Rugi pruskie rozpoczęte w 1885 r. polegały na wysiedlaniu Polaków przebywających nielegalnie w państwie niemieckim.",
    "explanation": "W ciągu dwóch lat z Rzeszy usunięto prawie 26 tys. osób, głównie robotników rolnych z Galicji i Królestwa Polskiego.",
    "options": null,
    "answer": true
  },
  {
    "id": "R04_REP_09",
    "section": "Represje i polityka zaborców",
    "type": "scenario",
    "prompt": "Polski chłop w Wielkopolsce nie może uzyskać zgody na budowę domu. Zamieszkuje więc w wozie cyrkowym i codziennie przesuwa go na niewielką odległość. Kogo dotyczy ta historia?",
    "explanation": "Michał Drzymała stał się symbolem oporu wobec antypolskiej polityki władz pruskich i przepisów osadniczych.",
    "image": "r04_woz_drzymaly.jpg",
    "options": [
      "Michała Drzymały",
      "Hipolita Cegielskiego",
      "Piotra Wawrzyniaka",
      "Mieczysława Ledóchowskiego",
      "Franciszka Stefczyka",
      "Romualda Traugutta"
    ],
    "answer": 0
  },
  {
    "id": "R04_REP_10",
    "section": "Represje i polityka zaborców",
    "type": "single_choice",
    "prompt": "Która instytucja była najważniejszą instytucją autonomiczną Galicji?",
    "explanation": "W autonomicznej Galicji najważniejszą instytucją był Sejm Krajowy z siedzibą we Lwowie.",
    "options": [
      "Sejm Krajowy we Lwowie",
      "Komisja Kolonizacyjna",
      "Kolegium Duchowne w Petersburgu",
      "Towarzystwo Rolnicze",
      "Duma Państwowa",
      "Organizacja Bojowa PPS"
    ],
    "answer": 0
  },
  {
    "id": "R04_REP_11",
    "section": "Represje i polityka zaborców",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Sejm Krajowy, Wydział Krajowy, Rada Szkolna Krajowa, Komisja Kolonizacyjna.",
    "explanation": "Sejm Krajowy, Wydział Krajowy i Rada Szkolna Krajowa należały do autonomii galicyjskiej, a Komisja Kolonizacyjna działała w polityce pruskiej.",
    "options": null,
    "answer": "Komisja Kolonizacyjna"
  },
  {
    "id": "R04_REP_12",
    "section": "Represje i polityka zaborców",
    "type": "riddle",
    "prompt": "Program ugody z zaborcami, zakładający współpracę z władzą we wszystkich trzech zaborach, to...",
    "explanation": "Trójlojalizm zapoczątkowano w Galicji, ale w zaborze rosyjskim odnoszono się do niego wrogo.",
    "options": null,
    "answer": "trójlojalizm",
    "altAnswers": [
      "trójlojalizm",
      "Trojlojalizm",
      "trójlojalizmem"
    ]
  },
  {
    "id": "R04_GOS_01",
    "section": "Przemiany społeczno-gospodarcze",
    "type": "single_choice",
    "prompt": "Który zabór rozwijał się gospodarczo najszybciej w drugiej połowie XIX wieku?",
    "explanation": "Królestwo Polskie w zaborze rosyjskim rozwijało się najszybciej, m.in. dzięki zniesieniu granicy celnej z Rosją w 1851 r.",
    "options": [
      "Zabór rosyjski",
      "Zabór austriacki",
      "Zabór pruski",
      "Galicja Wschodnia",
      "Ziemie zabrane",
      "Pomorze"
    ],
    "answer": 0
  },
  {
    "id": "R04_GOS_02",
    "section": "Przemiany społeczno-gospodarcze",
    "type": "fill_in",
    "prompt": "Zniesienie granicy celnej z Rosją w roku __________ ożywiło handel i przemysł w Królestwie Polskim.",
    "explanation": "Zniesienie granicy celnej ułatwiło wymianę z rynkiem rosyjskim i wsparło rozwój przemysłu.",
    "options": null,
    "answer": [
      "1851"
    ],
    "altAnswers": [
      [
        "1851",
        "1851 r."
      ]
    ]
  },
  {
    "id": "R04_GOS_03",
    "section": "Przemiany społeczno-gospodarcze",
    "type": "match",
    "prompt": "Połącz okręg przemysłowy Królestwa Polskiego z dominującą produkcją.",
    "explanation": "Podręcznik wskazuje trzy główne okręgi rozwoju przemysłu w Królestwie Polskim.",
    "image": "r04_lodz_przemyslowa.jpg",
    "options": null,
    "left": [
      "warszawski",
      "łódzki",
      "częstochowsko-sosnowiecki"
    ],
    "right": [
      "zakłady włókiennicze",
      "produkcja maszynowa i metalowa",
      "stalownia, huty i kopalnie węgla"
    ],
    "answer": {
      "warszawski": "produkcja maszynowa i metalowa",
      "łódzki": "zakłady włókiennicze",
      "częstochowsko-sosnowiecki": "stalownia, huty i kopalnie węgla"
    }
  },
  {
    "id": "R04_GOS_04",
    "section": "Przemiany społeczno-gospodarcze",
    "type": "true_false",
    "prompt": "Uwłaszczenie chłopów w Królestwie Polskim w 1864 r. sprzyjało napływowi taniej siły roboczej do fabryk.",
    "explanation": "Część ludności chłopskiej po uwłaszczeniu przeniosła się do miast i zasiliła nowo otwierane fabryki.",
    "options": null,
    "answer": true
  },
  {
    "id": "R04_GOS_05",
    "section": "Przemiany społeczno-gospodarcze",
    "type": "single_choice",
    "prompt": "W którym mieście działały najważniejsze zakłady Hipolita Cegielskiego?",
    "explanation": "Hipolit Cegielski przekształcił warsztat w dużą fabrykę maszyn rolniczych w Poznaniu.",
    "options": [
      "Poznań",
      "Łódź",
      "Warszawa",
      "Kraków",
      "Lwów",
      "Borysław"
    ],
    "answer": 0
  },
  {
    "id": "R04_GOS_06",
    "section": "Przemiany społeczno-gospodarcze",
    "type": "multi_select",
    "prompt": "Zaznacz organizacje gospodarcze wspierające Polaków w zaborze pruskim.",
    "explanation": "Centralne Towarzystwo Gospodarcze zrzeszało kółka rolnicze, a Związek Spółek Zarobkowych i Gospodarczych skupiał spółdzielnie oszczędnościowo-pożyczkowe.",
    "options": [
      "Centralne Towarzystwo Gospodarcze",
      "Związek Spółek Zarobkowych i Gospodarczych",
      "Polska Macierz Szkolna",
      "Komisja Kolonizacyjna",
      "Towarzystwo Czytelni Ludowych"
    ],
    "answer": [
      0,
      1
    ]
  },
  {
    "id": "R04_GOS_07",
    "section": "Przemiany społeczno-gospodarcze",
    "type": "single_choice",
    "prompt": "Dlaczego Galicja była opisywana jako najbardziej zacofany gospodarczo region dawnej Rzeczypospolitej?",
    "explanation": "W Galicji brakowało ośrodków przemysłowych, wieś była przeludniona, a gospodarstwa ulegały rozdrobnieniu.",
    "options": [
      "Przemiany gospodarcze Austro-Węgier w niewielkim stopniu objęły Galicję",
      "Nie przeprowadzono tam żadnego uwłaszczenia chłopów",
      "Rozwijał się tam największy okręg włókienniczy",
      "Zlikwidowano tam wszystkie spółdzielnie",
      "Zakazano tam emigracji zarobkowej",
      "Nie istniały tam miasta kulturalne"
    ],
    "answer": 0
  },
  {
    "id": "R04_GOS_08",
    "section": "Przemiany społeczno-gospodarcze",
    "type": "riddle",
    "prompt": "Lwowski aptekarz, którego wynalazek pozwolił wykorzystywać naftę do oświetlania domów, to...",
    "explanation": "Podręcznik łączy galicyjską ropę naftową z lampą naftową wynalezioną przez Ignacego Łukasiewicza.",
    "image": "r04_szyby_naftowe_boryslaw.jpg",
    "options": null,
    "answer": "Ignacy Łukasiewicz",
    "altAnswers": [
      "Ignacy Łukasiewicz",
      "Łukasiewicz",
      "Ignacy Lukasiewicz"
    ]
  },
  {
    "id": "R04_GOS_09",
    "section": "Przemiany społeczno-gospodarcze",
    "type": "sort",
    "prompt": "Przyporządkuj grupy do struktury społecznej po przemianach XIX wieku.",
    "explanation": "Uwłaszczenie i industrializacja zmieniły dawny układ stanowy, tworząc nowe warstwy społeczne.",
    "options": null,
    "items": [
      "ziemiaństwo",
      "robotnicy",
      "burżuazja",
      "inteligencja"
    ],
    "categories": [
      "właściciele ziemscy",
      "pracownicy przemysłu",
      "zamożne mieszczaństwo",
      "wykształceni specjaliści"
    ],
    "answer": {
      "właściciele ziemscy": [
        "ziemiaństwo"
      ],
      "pracownicy przemysłu": [
        "robotnicy"
      ],
      "zamożne mieszczaństwo": [
        "burżuazja"
      ],
      "wykształceni specjaliści": [
        "inteligencja"
      ]
    }
  },
  {
    "id": "R04_GOS_10",
    "section": "Przemiany społeczno-gospodarcze",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: robotnicy, burżuazja, inteligencja, Czerwoni.",
    "explanation": "Robotnicy, burżuazja i inteligencja to warstwy społeczne, a Czerwoni byli ugrupowaniem politycznym z czasu powstania styczniowego.",
    "options": null,
    "answer": "Czerwoni"
  },
  {
    "id": "R04_GOS_11",
    "section": "Przemiany społeczno-gospodarcze",
    "type": "sequence",
    "prompt": "Ułóż środki transportu i wydarzenia cywilizacyjne w kolejności chronologicznej.",
    "explanation": "Kolej warszawsko-wiedeńską ukończono w 1848 r., połączenia z Berlinem i Petersburgiem pojawiły się w latach 60., tramwaje konne w Warszawie w 1866 r., a lot samolotem w Krakowie w 1910 r.",
    "options": null,
    "items": [
      "pierwszy lot samolotem w Krakowie",
      "budowa kolei warszawsko-wiedeńskiej",
      "tramwaje konne w Warszawie",
      "połączenia Warszawy z Berlinem i Petersburgiem"
    ],
    "answer": [
      "budowa kolei warszawsko-wiedeńskiej",
      "połączenia Warszawy z Berlinem i Petersburgiem",
      "tramwaje konne w Warszawie",
      "pierwszy lot samolotem w Krakowie"
    ]
  },
  {
    "id": "R04_GOS_12",
    "section": "Przemiany społeczno-gospodarcze",
    "type": "single_choice",
    "prompt": "Które miasto jako pierwsze na ziemiach polskich wprowadziło tramwaje?",
    "explanation": "Podręcznik wskazuje Lwów jako pierwsze miasto z tramwajami, najpierw konnymi, a potem elektrycznymi.",
    "options": [
      "Lwów",
      "Warszawa",
      "Poznań",
      "Kraków",
      "Łódź",
      "Wilno"
    ],
    "answer": 0
  },
  {
    "id": "R04_POL_01",
    "section": "Działalność polityczna",
    "type": "sequence",
    "prompt": "Ułóż partie i ruchy w kolejności powstawania.",
    "explanation": "Wielki Proletariat powstał w 1882 r., PPS w 1892 r., SDKP w 1893 r., a Stronnictwo Ludowe w 1895 r.",
    "options": null,
    "items": [
      "Socjaldemokracja Królestwa Polskiego",
      "Wielki Proletariat",
      "Polska Partia Socjalistyczna",
      "Stronnictwo Ludowe"
    ],
    "answer": [
      "Wielki Proletariat",
      "Polska Partia Socjalistyczna",
      "Socjaldemokracja Królestwa Polskiego",
      "Stronnictwo Ludowe"
    ]
  },
  {
    "id": "R04_POL_02",
    "section": "Działalność polityczna",
    "type": "single_choice",
    "prompt": "Kto zainicjował powstanie Wielkiego Proletariatu w 1882 r.?",
    "explanation": "Międzynarodowa Socjalno-Rewolucyjna Partia Proletariat, zwana Wielkim Proletariatem, powstała w Warszawie z inicjatywy Ludwika Waryńskiego.",
    "options": [
      "Ludwik Waryński",
      "Józef Piłsudski",
      "Roman Dmowski",
      "Wincenty Witos",
      "Ignacy Daszyński",
      "Kazimierz Sosnkowski"
    ],
    "answer": 0
  },
  {
    "id": "R04_POL_03",
    "section": "Działalność polityczna",
    "type": "match",
    "prompt": "Połącz ugrupowanie z odpowiednimi osobami.",
    "explanation": "Rozdział zestawia najważniejsze partie z ich liderami lub ideologami.",
    "options": null,
    "left": [
      "PPS",
      "SDKP i SDKPiL",
      "PPSD",
      "Narodowa Demokracja"
    ],
    "right": [
      "Roman Dmowski",
      "Józef Piłsudski i Stanisław Wojciechowski",
      "Ignacy Daszyński",
      "Róża Luksemburg i Julian Marchlewski"
    ],
    "answer": {
      "PPS": "Józef Piłsudski i Stanisław Wojciechowski",
      "SDKP i SDKPiL": "Róża Luksemburg i Julian Marchlewski",
      "PPSD": "Ignacy Daszyński",
      "Narodowa Demokracja": "Roman Dmowski"
    }
  },
  {
    "id": "R04_POL_04",
    "section": "Działalność polityczna",
    "type": "single_choice",
    "prompt": "Jaki był główny cel PPS według tabeli o polskim ruchu socjalistycznym?",
    "explanation": "PPS łączyła postulaty społeczne z celem odzyskania niepodległości w formie republiki demokratycznej.",
    "options": [
      "Niepodległa Polska jako republika demokratyczna",
      "Ogólnoświatowa republika socjalistyczna bez walki o Polskę",
      "Pełna ugoda z władzami pruskimi",
      "Wyłącznie autonomia Galicji",
      "Budowa Komisji Kolonizacyjnej",
      "Likwidacja ruchu strzeleckiego"
    ],
    "answer": 0
  },
  {
    "id": "R04_POL_05",
    "section": "Działalność polityczna",
    "type": "true_false",
    "prompt": "SDKPiL odrzucała walkę o niepodległość Polski i stawiała cele społeczne ponad narodowymi.",
    "explanation": "Podręcznik wskazuje, że SDKPiL chciała współpracy rewolucjonistów z różnych państw i obalenia caratu, a nie osobnej walki o niepodległość Polski.",
    "options": null,
    "answer": true
  },
  {
    "id": "R04_POL_06",
    "section": "Działalność polityczna",
    "type": "riddle",
    "prompt": "Potoczna nazwa Narodowej Demokracji to...",
    "explanation": "Polski ruch narodowy nazywano Narodową Demokracją, ND, endecją lub ruchem wszechpolskim.",
    "options": null,
    "answer": "endecja",
    "altAnswers": [
      "endecja",
      "Endecja"
    ]
  },
  {
    "id": "R04_POL_07",
    "section": "Działalność polityczna",
    "type": "single_choice",
    "prompt": "Które państwo endecja uznawała za największe zagrożenie dla polskości?",
    "explanation": "Endecja największe niebezpieczeństwo widziała w germanizacji, dlatego była otwarta na współpracę z Rosją.",
    "options": [
      "Niemcy",
      "Rosję",
      "Austro-Węgry",
      "Francję",
      "Wielką Brytanię",
      "Włochy"
    ],
    "answer": 0
  },
  {
    "id": "R04_POL_08",
    "section": "Działalność polityczna",
    "type": "multi_select",
    "prompt": "Zaznacz osoby związane z początkami ruchu ludowego w Galicji.",
    "explanation": "Rozdział wymienia Stefczyka, księdza Stojałowskiego oraz Marię i Bolesława Wysłouchów jako działaczy związanych z ruchem ludowym.",
    "options": [
      "Franciszek Stefczyk",
      "Stanisław Stojałowski",
      "Maria i Bolesław Wysłouchowie",
      "Otto von Bismarck",
      "Ludwik Waryński"
    ],
    "answer": [
      0,
      1,
      2
    ]
  },
  {
    "id": "R04_POL_09",
    "section": "Działalność polityczna",
    "type": "fill_in",
    "prompt": "Pierwszą polską partią chłopską było __________, utworzone w roku __________.",
    "explanation": "Stronnictwo Ludowe powstało w 1895 r. i wkrótce zmieniło nazwę na Polskie Stronnictwo Ludowe.",
    "options": null,
    "answer": [
      "Stronnictwo Ludowe",
      "1895"
    ],
    "altAnswers": [
      [
        "Stronnictwo Ludowe",
        "SL"
      ],
      [
        "1895",
        "1895 r."
      ]
    ]
  },
  {
    "id": "R04_POL_10",
    "section": "Działalność polityczna",
    "type": "scenario",
    "prompt": "Robotnicy protestują po wydarzeniach w Petersburgu z 22 stycznia 1905 r. W Królestwie Polskim wystąpienia obejmują m.in. Warszawę, Łódź, Białystok i Zagłębie Dąbrowskie. Jak nazwano wydarzenie, które uruchomiło falę protestów w Rosji?",
    "explanation": "Pokojową demonstrację przed Pałacem Zimowym zaatakowało wojsko, a wydarzenie nazwano krwawą niedzielą.",
    "image": "r04_barykada_lodz_1905.jpg",
    "options": [
      "krwawa niedziela",
      "krwawa środa",
      "branka",
      "rugi pruskie",
      "kulturkampf",
      "odwilż posewastopolska"
    ],
    "answer": 0
  },
  {
    "id": "R04_POL_11",
    "section": "Działalność polityczna",
    "type": "multi_select",
    "prompt": "Zaznacz skutki rewolucji 1905-1907 dla Polaków w Królestwie Polskim.",
    "explanation": "Po rewolucji władze carskie poczyniły ograniczone ustępstwa, ale nie zalegalizowały Kościoła unickiego i nie spolonizowały uczelni wyższych.",
    "options": [
      "polscy posłowie w Dumie Państwowej",
      "zgoda na legalne stowarzyszenia",
      "możliwość zakładania polskich szkół prywatnych",
      "pełna legalizacja Kościoła unickiego",
      "polonizacja wszystkich uczelni wyższych"
    ],
    "answer": [
      0,
      1,
      2
    ]
  },
  {
    "id": "R04_POL_12",
    "section": "Działalność polityczna",
    "type": "sort",
    "prompt": "Przyporządkuj orientacje polityczne do ich przedstawicieli i kierunków współpracy.",
    "explanation": "PPS-Frakcja Rewolucyjna z Piłsudskim wiązała nadzieje z Austro-Węgrami, a endecja Dmowskiego z Rosją i jej sojusznikami.",
    "options": null,
    "items": [
      "Józef Piłsudski",
      "Roman Dmowski",
      "Austro-Węgry i Niemcy",
      "Rosja i jej sojusznicy"
    ],
    "categories": [
      "orientacja proaustriacka",
      "orientacja prorosyjska"
    ],
    "answer": {
      "orientacja proaustriacka": [
        "Józef Piłsudski",
        "Austro-Węgry i Niemcy"
      ],
      "orientacja prorosyjska": [
        "Roman Dmowski",
        "Rosja i jej sojusznicy"
      ]
    }
  },
  {
    "id": "R04_KUL_01",
    "section": "Kultura polska przełomu XIX i XX wieku",
    "type": "single_choice",
    "prompt": "W którym zaborze na przełomie XIX i XX w. polska nauka i kultura rozwijały się głównie dzięki autonomii?",
    "explanation": "Autonomia Galicji pozwoliła działać polskiemu szkolnictwu, uczelniom, teatrom oraz instytucjom naukowym i kulturalnym.",
    "image": "r04_collegium_novum.jpg",
    "options": [
      "Austriackim",
      "Rosyjskim",
      "Pruskim",
      "W Królestwie Polskim bezpośrednio po powstaniu",
      "Na ziemiach zabranych",
      "W zaborze niemieckim"
    ],
    "answer": 0
  },
  {
    "id": "R04_KUL_02",
    "section": "Kultura polska przełomu XIX i XX wieku",
    "type": "fill_in",
    "prompt": "Akademię Umiejętności otwarto w Krakowie w roku __________.",
    "explanation": "Akademia Umiejętności skupiała wybitnych polskich naukowców i działała w autonomicznej Galicji.",
    "options": null,
    "answer": [
      "1873"
    ],
    "altAnswers": [
      [
        "1873",
        "1873 r."
      ]
    ]
  },
  {
    "id": "R04_KUL_03",
    "section": "Kultura polska przełomu XIX i XX wieku",
    "type": "multi_select",
    "prompt": "Zaznacz hasła i działania charakterystyczne dla polskiego pozytywizmu.",
    "explanation": "Pozytywiści krytykowali romantyczne powstania i stawiali na rozwój społeczno-gospodarczy poprzez pracę organiczną oraz pracę u podstaw.",
    "options": [
      "praca organiczna",
      "praca u podstaw",
      "krytyka idei romantycznych po klęsce powstania",
      "sztuka dla sztuki",
      "cyganeria artystyczna"
    ],
    "answer": [
      0,
      1,
      2
    ]
  },
  {
    "id": "R04_KUL_04",
    "section": "Kultura polska przełomu XIX i XX wieku",
    "type": "single_choice",
    "prompt": "Który pisarz stworzył Trylogię: Ogniem i mieczem, Potop i Pan Wołodyjowski?",
    "explanation": "Henryk Sienkiewicz pisał powieści historyczne ku pokrzepieniu serc, w tym Trylogię.",
    "options": [
      "Henryk Sienkiewicz",
      "Bolesław Prus",
      "Stanisław Wyspiański",
      "Władysław Reymont",
      "Jan Kasprowicz",
      "Stefan Żeromski"
    ],
    "answer": 0
  },
  {
    "id": "R04_KUL_05",
    "section": "Kultura polska przełomu XIX i XX wieku",
    "type": "match",
    "prompt": "Połącz twórcę z właściwym dziełem lub dziedziną.",
    "explanation": "Rozdział pokazuje literaturę, pieśń patriotyczną, dramat i malarstwo jako elementy kultury narodowej.",
    "image": "r04_hold_pruski_matejko.jpg",
    "options": null,
    "left": [
      "Bolesław Prus",
      "Maria Konopnicka",
      "Stanisław Wyspiański",
      "Jan Matejko"
    ],
    "right": [
      "malarstwo historyczne",
      "Lalka",
      "Rota",
      "Wesele"
    ],
    "answer": {
      "Bolesław Prus": "Lalka",
      "Maria Konopnicka": "Rota",
      "Stanisław Wyspiański": "Wesele",
      "Jan Matejko": "malarstwo historyczne"
    }
  },
  {
    "id": "R04_KUL_06",
    "section": "Kultura polska przełomu XIX i XX wieku",
    "type": "true_false",
    "prompt": "Modernizm głosił hasło 'sztuka dla sztuki' i zrywał z użytkowym charakterem twórczości typowym dla pozytywizmu.",
    "explanation": "Moderniści podkreślali pomysł i indywidualność artysty, a nie podporządkowanie sztuki celom społecznym czy politycznym.",
    "options": null,
    "answer": true
  },
  {
    "id": "R04_KUL_07",
    "section": "Kultura polska przełomu XIX i XX wieku",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Stanisław Przybyszewski, Jan Kasprowicz, Władysław Reymont, Otto von Bismarck.",
    "explanation": "Przybyszewski, Kasprowicz i Reymont są wymienieni jako twórcy Młodej Polski, a Bismarck był kanclerzem Niemiec.",
    "options": null,
    "answer": "Otto von Bismarck"
  },
  {
    "id": "R04_KUL_08",
    "section": "Kultura polska przełomu XIX i XX wieku",
    "type": "single_choice",
    "prompt": "Które miejsca stały się głównymi ośrodkami rozwoju sztuki młodopolskiej?",
    "explanation": "Podręcznik wskazuje Kraków i popularne Zakopane jako najważniejsze ośrodki sztuki Młodej Polski.",
    "options": [
      "Kraków i Zakopane",
      "Warszawa i Łódź",
      "Poznań i Toruń",
      "Wilno i Grodno",
      "Borysław i Lwów",
      "Petersburg i Berlin"
    ],
    "answer": 0
  },
  {
    "id": "R04_KUL_09",
    "section": "Kultura polska przełomu XIX i XX wieku",
    "type": "riddle",
    "prompt": "Polski wynalazca, który udoskonalił kinematograf, to...",
    "explanation": "Kinematografy cieszyły się dużym zainteresowaniem w początkach kultury masowej, a udoskonalił je Kazimierz Prószyński.",
    "options": null,
    "answer": "Kazimierz Prószyński",
    "altAnswers": [
      "Kazimierz Prószyński",
      "Prószyński",
      "Kazimierz Proszynski"
    ]
  },
  {
    "id": "R04_KUL_10",
    "section": "Kultura polska przełomu XIX i XX wieku",
    "type": "single_choice",
    "prompt": "Kto był twórcą polskiego ruchu harcerskiego, rozwijając idee skautingu o wątki patriotyczne?",
    "explanation": "Andrzej Małkowski zapoczątkował polski ruch harcerski, łącząc skauting z patriotyzmem.",
    "options": [
      "Andrzej Małkowski",
      "Henryk Jordan",
      "Kazimierz Prószyński",
      "Jan Matejko",
      "Stanisław Wyspiański",
      "Wojciech Gerson"
    ],
    "answer": 0
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Kto w 1849 r. został namiestnikiem Galicji i zapoczątkował proces polonizacji urzędów?",
    "explanation": "Agenor Gołuchowski był konserwatywnym polskim arystokratą, którego nominacja rozpoczęła polonizację urzędów w Galicji.",
    "options": [
      "Agenor Gołuchowski",
      "Franciszek Józef I",
      "Aleksander Wielopolski",
      "Mieczysław Ledóchowski",
      "Andrzej Zamoyski",
      "Leopold Kronenberg"
    ],
    "answer": 0
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Aleksander Wielopolski założył Szkołę Główną Warszawską z wykładowym językiem polskim.",
    "explanation": "W biogramie Wielopolskiego wymieniono reformy, m.in. usprawnienie oświaty i założenie Szkoły Głównej Warszawskiej.",
    "options": null,
    "answer": true
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który działacz należał do najważniejszych Czerwonych?",
    "explanation": "Tabela programów wskazuje Jarosława Dąbrowskiego jako jednego z najważniejszych działaczy Czerwonych.",
    "options": [
      "Jarosław Dąbrowski",
      "Leopold Kronenberg",
      "Andrzej Zamoyski",
      "Marian Langiewicz",
      "Roman Dmowski",
      "Wincenty Witos"
    ],
    "answer": 0
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Kto stanął na czele Białych razem z warszawskim bankierem Leopoldem Kronenbergiem?",
    "explanation": "Na czele Białych stali Andrzej Zamoyski i Leopold Kronenberg.",
    "options": [
      "Andrzej Zamoyski",
      "Ludwik Waryński",
      "Kazimierz Sosnkowski",
      "Piotr Wawrzyniak",
      "Władysław Sikorski",
      "Franciszek Stefczyk"
    ],
    "answer": 0
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Romuald Traugutt ukrywał się w Warszawie pod pseudonimem __________.",
    "explanation": "Aby uniknąć aresztowania, Traugutt przyjął pseudonim Michał Czarnecki i podawał się za kupca z Małopolski.",
    "options": null,
    "answer": [
      "Michał Czarnecki"
    ],
    "altAnswers": [
      [
        "Michał Czarnecki",
        "Michal Czarnecki"
      ]
    ]
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który oddział walczył najdłużej po upadku powstania, aż do wiosny 1865 r.?",
    "explanation": "Najdłużej walczył na Podlasiu oddział księdza Stanisława Brzóski.",
    "options": [
      "oddział księdza Stanisława Brzóski",
      "oddział Mariana Langiewicza",
      "oddział Jarosława Dąbrowskiego",
      "oddział Ludwika Mierosławskiego",
      "oddział Jana Gorzechowskiego",
      "oddział Władysława Sikorskiego"
    ],
    "answer": 0
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Mieczysław Ledóchowski podczas kulturkampfu stanął na czele walki o niezależność Kościoła katolickiego w Wielkopolsce.",
    "explanation": "Biogram Ledóchowskiego opisuje jego opór wobec kulturkampfu i zarządzanie diecezjami z Rzymu przez tajnych wysłanników.",
    "options": null,
    "answer": true
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaką instytucję założono w 1886 r., aby wspierać osadnictwo niemieckie na polskich ziemiach?",
    "explanation": "Komisja Kolonizacyjna miała wspierać niemieckie osadnictwo na ziemiach polskich.",
    "options": [
      "Komisję Kolonizacyjną",
      "Radę Szkolną Krajową",
      "Polską Macierz Szkolną",
      "Towarzystwo Rolnicze",
      "Dumę Państwową",
      "Związek Walki Czynnej"
    ],
    "answer": 0
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Ksiądz związany ze Związkiem Spółek Zarobkowych i walką gospodarczą Polaków w Wielkopolsce to...",
    "explanation": "Podręcznik wskazuje księdza Piotra Wawrzyniaka jako działacza zaangażowanego w pracę Związku Spółek Zarobkowych.",
    "options": null,
    "answer": "Piotr Wawrzyniak",
    "altAnswers": [
      "Piotr Wawrzyniak",
      "Wawrzyniak",
      "ksiądz Piotr Wawrzyniak"
    ]
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W której miejscowości Franciszek Stefczyk założył w 1889 r. spółdzielnię oszczędnościowo-pożyczkową?",
    "explanation": "Podpis w materiale o ruchu spółdzielczym podaje Czernichów pod Krakowem jako miejsce założenia spółdzielni Stefczyka.",
    "options": [
      "Czernichów pod Krakowem",
      "Chłopy koło Lwowa",
      "Borysław",
      "Łódź",
      "Września",
      "Zakopane"
    ],
    "answer": 0
  },
  {
    "id": "R04_HARD_11",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Józef Piłsudski, Walery Sławek, Aleksander Prystor, Roman Dmowski.",
    "explanation": "Piłsudski, Sławek i Prystor uczestniczyli w napadzie pod Bezdanami i zostali później premierami; Dmowski nie należy do tej grupy.",
    "options": null,
    "answer": "Roman Dmowski"
  },
  {
    "id": "R04_HARD_12",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Jest 1908 r. We Lwowie powstaje tajna organizacja, która ma wyszkolić polską kadrę dowódczą i przygotować powstanie w zaborze rosyjskim. Jak się nazywa?",
    "explanation": "Związek Walki Czynnej powstał z inicjatywy Józefa Piłsudskiego, a na jego czele stanął Kazimierz Sosnkowski.",
    "options": [
      "Związek Walki Czynnej",
      "Związek Strzelecki",
      "Towarzystwo Strzelec",
      "Polska Macierz Szkolna",
      "Wielki Proletariat",
      "Komisja Kolonizacyjna"
    ],
    "answer": 0
  },
  {
    "id": "R04_HARD_13",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz legalne organizacje sportowe tworzone przez działaczy ZWC w zaborze austriackim.",
    "explanation": "We Lwowie powstał Związek Strzelecki, a w Krakowie Towarzystwo 'Strzelec'.",
    "options": [
      "Związek Strzelecki",
      "Towarzystwo Strzelec",
      "Polska Macierz Szkolna",
      "Organizacja Bojowa PPS",
      "Centralne Towarzystwo Gospodarcze"
    ],
    "answer": [
      0,
      1
    ]
  },
  {
    "id": "R04_HARD_14",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Największe nasilenie akcji zbrojnych Organizacji Bojowej PPS nazwano __________; doszło do niego 15 sierpnia 1906 r.",
    "explanation": "Krwawa środa była serią jednoczesnych zamachów w różnych miastach Królestwa Polskiego.",
    "image": "r04_organizacja_bojowa_pps.jpg",
    "options": null,
    "answer": [
      "krwawą środą"
    ],
    "altAnswers": [
      [
        "krwawą środą",
        "krwawa środa",
        "Krwawa środa"
      ]
    ]
  },
  {
    "id": "R04_HARD_15",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ilu więźniów politycznych skazanych na śmierć uwolniła grupa Organizacji Bojowej PPS dowodzona przez Jana Gorzechowskiego?",
    "explanation": "Grupa Jana Gorzechowskiego uwolniła 10 więźniów politycznych skazanych na śmierć.",
    "options": [
      "10",
      "6",
      "80",
      "500",
      "6500",
      "200000"
    ],
    "answer": 0
  }
];

const KID_PROMPTS = {
  "R04_POW_01": "Jak nazywano wspólną pracę Polaków dla dobra społeczeństwa?"
};

const chapter = {
  id: "r04",
  number: 4,
  title: "Ziemie polskie po Wiośnie Ludów",
  icon: "🇵🇱",
  sectionOrder: [
  "Powstanie styczniowe",
  "Represje i polityka zaborców",
  "Przemiany społeczno-gospodarcze",
  "Działalność polityczna",
  "Kultura polska przełomu XIX i XX wieku"
],
  sectionIcons: {
  "Powstanie styczniowe": "⚔️",
  "Represje i polityka zaborców": "🛡️",
  "Przemiany społeczno-gospodarcze": "🏭",
  "Działalność polityczna": "🗳️",
  "Kultura polska przełomu XIX i XX wieku": "🎭"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
