// Skróty sekcji (do identyfikatorów ćwiczeń):
//   GEO  = Europa: przyroda i integracja
//   LUD  = Ludność, migracje i religie
//   PZA  = Europa Północna i Zachodnia
//   ALP  = Alpy, turystyka i energia
//   SAS  = Sąsiedzi Polski i ich gospodarki
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R03_GEO_01",
    "section": "Europa: przyroda i integracja",
    "type": "single_choice",
    "prompt": "Który ocean oblewa Europę od zachodu?",
    "options": [
      "Ocean Arktyczny",
      "Ocean Atlantycki",
      "Ocean Spokojny",
      "Ocean Indyjski",
      "Ocean Południowy"
    ],
    "answer": 1,
    "explanation": "Od zachodu Europę oblewa Ocean Atlantycki, natomiast od północy Ocean Arktyczny.",
    "image": "r03_wybrzeza_europy.jpg"
  },
  {
    "id": "R03_GEO_02",
    "section": "Europa: przyroda i integracja",
    "type": "multi_select",
    "prompt": "Zaznacz naturalne granice Europy.",
    "options": [
      "Morze Śródziemne",
      "Góry Ural",
      "Cieśnina Gibraltarska",
      "Himalaje",
      "Ocean Arktyczny",
      "Morze Czerwone"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Na południu Europę oddziela od Afryki Morze Śródziemne i Cieśnina Gibraltarska; na wschodzie granica przebiega m.in. u podnóża Uralu. Północ kontynentu oblewa Ocean Arktyczny.",
    "image": "r03_wybrzeza_europy.jpg"
  },
  {
    "id": "R03_GEO_03",
    "section": "Europa: przyroda i integracja",
    "type": "true_false",
    "prompt": "Cały obszar Europy leży na półkuli północnej.",
    "options": null,
    "answer": true,
    "explanation": "Europa leży w całości na półkuli północnej, ale po obu stronach południka zerowego."
  },
  {
    "id": "R03_GEO_04",
    "section": "Europa: przyroda i integracja",
    "type": "fill_in",
    "prompt": "Najdłuższą rzeką Europy jest __________, a największym archipelagiem są __________.",
    "options": null,
    "answer": [
      "Wołga",
      "Wyspy Brytyjskie"
    ],
    "explanation": "Wołga jest najdłuższą rzeką Europy, a Wyspy Brytyjskie — jej największym archipelagiem.",
    "image": "r03_wybrzeza_europy.jpg",
    "altAnswers": [
      [
        "Wołga",
        "rzeka Wołga"
      ],
      [
        "Wyspy Brytyjskie",
        "Wyspy Brytyjskie"
      ]
    ]
  },
  {
    "id": "R03_GEO_05",
    "section": "Europa: przyroda i integracja",
    "type": "odd_one_out",
    "prompt": "Wskaż obiekt niebędący pasmem górskim Europy: Alpy, Karpaty, Pireneje, Nizina Nadkaspijska.",
    "options": null,
    "answer": "Nizina Nadkaspijska",
    "explanation": "Nizina Nadkaspijska jest niziną położoną na wschodzie Europy, podczas gdy pozostałe obiekty to pasma górskie."
  },
  {
    "id": "R03_GEO_06",
    "section": "Europa: przyroda i integracja",
    "type": "single_choice",
    "prompt": "Jaki klimat przeważa na zachodzie Europy blisko Atlantyku?",
    "options": [
      "Morski z łagodną zimą",
      "Kontynentalny z mroźną zimą",
      "Zwrotnikowy suchy",
      "Równikowy wilgotny",
      "Polarny lodowy",
      "Pustynny"
    ],
    "answer": 0,
    "explanation": "Atlantyk łagodzi temperatury: na zachodzie Europy zimy są łagodniejsze, a lata niezbyt gorące."
  },
  {
    "id": "R03_GEO_07",
    "section": "Europa: przyroda i integracja",
    "type": "match",
    "prompt": "Połącz pojęcie z właściwym opisem.",
    "options": null,
    "answer": {
      "Prąd Północnoatlantycki": "Ociepla zachodnie wybrzeża Europy",
      "Alpy": "Wysokie góry fałdowe",
      "Nizina Nadkaspijska": "Obszar poniżej poziomu morza",
      "Wyspy Brytyjskie": "Największy archipelag Europy"
    },
    "explanation": "Prąd Północnoatlantycki łagodzi klimat Europy, Alpy są wysokimi górami fałdowymi, Nizina Nadkaspijska obejmuje obszary depresyjne, a Wyspy Brytyjskie są największym archipelagiem Europy.",
    "left": [
      "Prąd Północnoatlantycki",
      "Alpy",
      "Nizina Nadkaspijska",
      "Wyspy Brytyjskie"
    ],
    "right": [
      "Największy archipelag Europy",
      "Obszar poniżej poziomu morza",
      "Wysokie góry fałdowe",
      "Ociepla zachodnie wybrzeża Europy"
    ]
  },
  {
    "id": "R03_GEO_08",
    "section": "Europa: przyroda i integracja",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia integracji europejskiej od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "answer": [
      "Powstanie EWWiS w 1951 r.",
      "Powstanie Unii Europejskiej w 1993 r.",
      "Przystąpienie Polski do UE w 2004 r.",
      "Wyjście Wielkiej Brytanii z UE w 2020 r."
    ],
    "explanation": "EWWiS utworzono w 1951 r.; UE powstała w 1993 r.; Polska wstąpiła w 2004 r., a Brexit nastąpił w 2020 r.",
    "items": [
      "Przystąpienie Polski do UE w 2004 r.",
      "Powstanie EWWiS w 1951 r.",
      "Wyjście Wielkiej Brytanii z UE w 2020 r.",
      "Powstanie Unii Europejskiej w 1993 r."
    ]
  },
  {
    "id": "R03_GEO_09",
    "section": "Europa: przyroda i integracja",
    "type": "single_choice",
    "prompt": "Które państwo jest najmniejsze pod względem powierzchni na świecie?",
    "options": [
      "Monako",
      "Liechtenstein",
      "Watykan",
      "San Marino",
      "Andora",
      "Malta"
    ],
    "answer": 2,
    "explanation": "Watykan ma powierzchnię około 0,44 km² (44 hektary) i jest najmniejszym państwem świata."
  },
  {
    "id": "R03_GEO_10",
    "section": "Europa: przyroda i integracja",
    "type": "multi_select",
    "prompt": "Które z wymienionych państw należały do założycieli Europejskiej Wspólnoty Węgla i Stali w 1951 roku?",
    "options": [
      "Francja",
      "Niemcy",
      "Włochy",
      "Belgia",
      "Holandia",
      "Hiszpania"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Do sześciu założycieli EWWiS należały Francja, Niemcy, Włochy, Belgia, Holandia i Luksemburg; Hiszpania nie należała do tej szóstki."
  },
  {
    "id": "R03_GEO_11",
    "section": "Europa: przyroda i integracja",
    "type": "single_choice",
    "prompt": "Jaką walutę wprowadzono jako wspólną dla wielu państw Unii Europejskiej?",
    "options": [
      "Korona",
      "Frank",
      "Euro",
      "Funt",
      "Forint",
      "Rubel"
    ],
    "answer": 2,
    "explanation": "Euro jest wspólną walutą wielu państw UE, lecz nie wszystkich jej członków."
  },
  {
    "id": "R03_GEO_12",
    "section": "Europa: przyroda i integracja",
    "type": "scenario",
    "prompt": "Uczeń czyta mapę Europy. Zauważa, że Polska bywa zaliczana do Europy Środkowej albo Wschodniej. Z czego wynika ta różnica?",
    "options": [
      "Z umownego charakteru podziału i różnych kryteriów",
      "Z corocznych zmian granic Polski",
      "Z położenia na dwóch kontynentach",
      "Z braku ustalonych granic państwowych"
    ],
    "answer": 0,
    "explanation": "Podziały Europy na regiony są umowne; bierze się pod uwagę geografię, kulturę, historię oraz podobieństwa językowe i religijne."
  },
  {
    "id": "R03_LUD_01",
    "section": "Ludność, migracje i religie",
    "type": "single_choice",
    "prompt": "Jak nazywa się iloraz liczby mieszkańców i powierzchni danego obszaru?",
    "options": [
      "Saldo migracji",
      "Przyrost naturalny",
      "Gęstość zaludnienia",
      "Dzietność",
      "Współczynnik feminizacji",
      "Urbanizacja"
    ],
    "answer": 2,
    "explanation": "Gęstość zaludnienia oznacza liczbę osób przypadającą zwykle na 1 km² powierzchni.",
    "image": "r03_zaludnienie_europy.jpg"
  },
  {
    "id": "R03_LUD_02",
    "section": "Ludność, migracje i religie",
    "type": "fill_in",
    "prompt": "Przyrost naturalny oblicza się jako liczbę __________ pomniejszoną o liczbę __________.",
    "options": null,
    "answer": [
      "urodzeń",
      "zgonów"
    ],
    "explanation": "Przyrost naturalny oblicza się według wzoru Pn = U − Z, czyli liczba urodzeń minus liczba zgonów.",
    "image": "r03_zaludnienie_europy.jpg",
    "altAnswers": [
      [
        "urodzeń",
        "urodzenia"
      ],
      [
        "zgonów",
        "zgony"
      ]
    ]
  },
  {
    "id": "R03_LUD_03",
    "section": "Ludność, migracje i religie",
    "type": "true_false",
    "prompt": "Szeroka podstawa piramidy wieku jest typową cechą społeczeństwa starego.",
    "options": null,
    "answer": false,
    "explanation": "Szeroka podstawa oznacza duży udział dzieci i ludzi młodych. W starym społeczeństwie podstawa piramidy jest wąska.",
    "image": "r03_piramida_wieku.jpg"
  },
  {
    "id": "R03_LUD_04",
    "section": "Ludność, migracje i religie",
    "type": "single_choice",
    "prompt": "Jak nazywa się liczba kobiet przypadająca na 100 mężczyzn?",
    "options": [
      "Współczynnik urodzeń",
      "Wskaźnik feminizacji",
      "Saldo migracji",
      "PKB per capita",
      "Przyrost rzeczywisty",
      "Gęstość zaludnienia"
    ],
    "answer": 1,
    "explanation": "Wskaźnik feminizacji podaje liczbę kobiet na 100 mężczyzn."
  },
  {
    "id": "R03_LUD_05",
    "section": "Ludność, migracje i religie",
    "type": "multi_select",
    "prompt": "Wybierz przyrodnicze czynniki wpływające na rozmieszczenie ludności.",
    "options": [
      "Dostęp do wody",
      "Ukształtowanie terenu",
      "Klimat",
      "Odległość od morza",
      "Możliwość znalezienia pracy",
      "Warunki socjalne"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Dostęp do wody, rzeźba terenu, klimat i odległość od morza są czynnikami przyrodniczymi; praca i warunki socjalne to czynniki pozaprzyrodnicze.",
    "image": "r03_zaludnienie_europy.jpg"
  },
  {
    "id": "R03_LUD_06",
    "section": "Ludność, migracje i religie",
    "type": "riddle",
    "prompt": "Jak nazywa się przyjazd do obcego państwa w celu osiedlenia się w nim?",
    "options": null,
    "answer": "imigracja",
    "explanation": "Imigracja to przyjazd do danego państwa, a emigracja to wyjazd z niego.",
    "image": "r03_migracje_ludnosci.jpg",
    "altAnswers": [
      "imigracja",
      "imigracja ludności"
    ]
  },
  {
    "id": "R03_LUD_07",
    "section": "Ludność, migracje i religie",
    "type": "scenario",
    "prompt": "W danym roku do pewnego kraju przyjechało na stałe 12 tys. osób, a wyjechało 8 tys. osób. Jakie jest saldo migracji?",
    "options": [
      "−4 tys.",
      "+4 tys.",
      "+20 tys.",
      "0"
    ],
    "answer": 1,
    "explanation": "Saldo migracji to napływ minus odpływ: 12 tys. − 8 tys. = +4 tys. osób.",
    "image": "r03_migracje_ludnosci.jpg"
  },
  {
    "id": "R03_LUD_08",
    "section": "Ludność, migracje i religie",
    "type": "sort",
    "prompt": "Przyporządkuj pojęcia do rodzaju migracji.",
    "options": null,
    "answer": {
      "Migracje wewnętrzne": [
        "ze wsi do miasta w obrębie jednego kraju",
        "z miasta na wieś w obrębie jednego kraju"
      ],
      "Migracje zewnętrzne": [
        "wyjazd z Polski do innego kraju",
        "przyjazd z innego kraju do Polski"
      ]
    },
    "explanation": "Migracje wewnętrzne zachodzą bez przekroczenia granic państwa, a zewnętrzne wymagają przekroczenia granicy.",
    "image": "r03_migracje_ludnosci.jpg",
    "items": [
      "ze wsi do miasta w obrębie jednego kraju",
      "wyjazd z Polski do innego kraju",
      "z miasta na wieś w obrębie jednego kraju",
      "przyjazd z innego kraju do Polski"
    ],
    "categories": [
      "Migracje wewnętrzne",
      "Migracje zewnętrzne"
    ]
  },
  {
    "id": "R03_LUD_09",
    "section": "Ludność, migracje i religie",
    "type": "match",
    "prompt": "Połącz religię z jej świętą księgą.",
    "options": null,
    "answer": {
      "chrześcijaństwo": "Biblia",
      "islam": "Koran",
      "judaizm": "Tora",
      "buddyzm": "Tipitaka"
    },
    "explanation": "Chrześcijaństwo łączy się z Biblią, islam z Koranem, judaizm z Torą, a buddyzm z Tipitaką.",
    "image": "r03_swiatynie_europy.jpg",
    "left": [
      "chrześcijaństwo",
      "islam",
      "judaizm",
      "buddyzm"
    ],
    "right": [
      "Tipitaka",
      "Tora",
      "Koran",
      "Biblia"
    ]
  },
  {
    "id": "R03_LUD_10",
    "section": "Ludność, migracje i religie",
    "type": "odd_one_out",
    "prompt": "Wskaż obiekt, który nie jest świątynią: meczet, synagoga, cerkiew czy port morski.",
    "options": null,
    "answer": "port morski",
    "explanation": "Meczet to świątynia muzułmańska, synagoga żydowska, a cerkiew prawosławna. Port morski nie jest świątynią.",
    "image": "r03_swiatynie_europy.jpg"
  },
  {
    "id": "R03_LUD_11",
    "section": "Ludność, migracje i religie",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady migracji przymusowych.",
    "options": [
      "Uchodźstwo",
      "Deportacja",
      "Dobrowolny wyjazd na studia",
      "Wysiedlenie nakazane urzędowo",
      "Urlop turystyczny"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Do przymusowych przemieszczeń należą uchodźstwo, deportacja i urzędowo nakazane wysiedlenie.",
    "image": "r03_migracje_ludnosci.jpg"
  },
  {
    "id": "R03_LUD_12",
    "section": "Ludność, migracje i religie",
    "type": "single_choice",
    "prompt": "Jak nazywa się różnica między imigracją i emigracją?",
    "options": [
      "Przyrost naturalny",
      "Saldo migracji",
      "Wskaźnik urodzeń",
      "PKB per capita",
      "Gęstość zaludnienia",
      "Dzietność"
    ],
    "answer": 1,
    "explanation": "Saldo migracji jest dodatnie, kiedy więcej osób przyjechało, niż wyjechało, i ujemne w sytuacji odwrotnej."
  },
  {
    "id": "R03_PZA_01",
    "section": "Europa Północna i Zachodnia",
    "type": "single_choice",
    "prompt": "Jak nazywa się wybrzeże powstałe przez zalanie przez morze głębokich dolin polodowcowych?",
    "options": [
      "Riasowe",
      "Dalmatyńskie",
      "Fiordowe",
      "Szkierowe",
      "Mierzejowo-zalewowe",
      "Lagunowe"
    ],
    "answer": 2,
    "explanation": "Fiordy to zalane przez morze głębokie, długie, U-kształtne doliny polodowcowe; szczególnie liczne są w Norwegii.",
    "image": "r03_fiord_norwegia.jpg"
  },
  {
    "id": "R03_PZA_02",
    "section": "Europa Północna i Zachodnia",
    "type": "match",
    "prompt": "Dopasuj typ wybrzeża do sposobu jego powstania.",
    "options": null,
    "answer": {
      "fiordowe": "Zalanie głębokich dolin polodowcowych",
      "szkierowe": "Zalanie terenu zaokrąglonych wzgórz polodowcowych",
      "riasowe": "Zalanie dolin rzecznych",
      "dalmatyńskie": "Zalanie gór ułożonych równolegle do brzegu"
    },
    "explanation": "Wybrzeża różnią się pochodzeniem rzeźby: doliny polodowcowe tworzą fiordy, rzeczne riasy, niewielkie wzgórza szkiery, a pasma równoległe do brzegu wybrzeże dalmatyńskie.",
    "image": "r03_fiord_norwegia.jpg",
    "left": [
      "fiordowe",
      "szkierowe",
      "riasowe",
      "dalmatyńskie"
    ],
    "right": [
      "Zalanie gór ułożonych równolegle do brzegu",
      "Zalanie dolin rzecznych",
      "Zalanie terenu zaokrąglonych wzgórz polodowcowych",
      "Zalanie głębokich dolin polodowcowych"
    ]
  },
  {
    "id": "R03_PZA_03",
    "section": "Europa Północna i Zachodnia",
    "type": "single_choice",
    "prompt": "Które miasto jest stolicą Islandii?",
    "options": [
      "Oslo",
      "Helsinki",
      "Kopenhaga",
      "Reykjavik",
      "Sztokholm",
      "Tromsø"
    ],
    "answer": 3,
    "explanation": "Stolicą Islandii jest Reykjavik; pozostałe miasta to ośrodki innych państw Europy Północnej.",
    "image": "r03_islandia_wulkany.jpg"
  },
  {
    "id": "R03_PZA_04",
    "section": "Europa Północna i Zachodnia",
    "type": "true_false",
    "prompt": "Islandia leży na granicy płyty północnoamerykańskiej i euroazjatyckiej.",
    "options": null,
    "answer": true,
    "explanation": "Przez Islandię przebiega strefa rozsuwania się płyt litosferycznych, co wiąże się z aktywnością wulkaniczną.",
    "image": "r03_islandia_wulkany.jpg"
  },
  {
    "id": "R03_PZA_05",
    "section": "Europa Północna i Zachodnia",
    "type": "multi_select",
    "prompt": "Które zasoby i warunki wspierają gospodarkę Norwegii?",
    "options": [
      "Ropa naftowa na morzu",
      "Gaz ziemny na morzu",
      "Rzeki o dużym spadku",
      "Zimne wody zasobne w ryby",
      "Rozległe plantacje kawy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Norwegia wykorzystuje surowce na szelfie, duże zasoby ryb i energię płynącej wody.",
    "image": "r03_fiord_norwegia.jpg"
  },
  {
    "id": "R03_PZA_06",
    "section": "Europa Północna i Zachodnia",
    "type": "riddle",
    "prompt": "Jak nazywa się stolica Finlandii?",
    "options": null,
    "answer": "Helsinki",
    "explanation": "Stolicą Finlandii są Helsinki.",
    "altAnswers": [
      "Helsinki",
      "Helsinki (Finlandia)"
    ]
  },
  {
    "id": "R03_PZA_07",
    "section": "Europa Północna i Zachodnia",
    "type": "single_choice",
    "prompt": "Z jakiej działalności rolniczej szczególnie słynie Dania?",
    "options": [
      "Uprawy kawy",
      "Hodowli bydła",
      "Uprawy ryżu",
      "Hodowli wielbłądów",
      "Uprawy oliwek",
      "Plantacji bawełny"
    ],
    "answer": 1,
    "explanation": "W Danii ważną rolę odgrywa hodowla bydła oraz eksport mleka, masła, serów i bekonu."
  },
  {
    "id": "R03_PZA_08",
    "section": "Europa Północna i Zachodnia",
    "type": "scenario",
    "prompt": "Gospodarstwo z Europy Zachodniej osiąga duże nadwyżki produkcji, które sprzedaje na rynku. Jak nazywa się taki rodzaj rolnictwa?",
    "options": [
      "Samozaopatrzeniowe",
      "Towarowe",
      "Żarowo-odłogowe",
      "Koczownicze"
    ],
    "answer": 1,
    "explanation": "Rolnictwo towarowe kieruje znaczną część produkcji na sprzedaż, w odróżnieniu od rolnictwa samozaopatrzeniowego.",
    "image": "r03_rolnictwo_francja.jpg"
  },
  {
    "id": "R03_PZA_09",
    "section": "Europa Północna i Zachodnia",
    "type": "multi_select",
    "prompt": "Zaznacz ważne uprawy we francuskim rolnictwie.",
    "options": [
      "Pszenica",
      "Winorośl",
      "Buraki cukrowe",
      "Oliwki na południu",
      "Kauczukowiec",
      "Kawa na plantacjach w Alpach"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "We Francji uprawia się m.in. pszenicę, winorośl, buraki cukrowe, a w południowej strefie śródziemnomorskiej także oliwki.",
    "image": "r03_rolnictwo_francja.jpg"
  },
  {
    "id": "R03_PZA_10",
    "section": "Europa Północna i Zachodnia",
    "type": "single_choice",
    "prompt": "Która rzeka stanowi oś przestrzenną Paryża?",
    "options": [
      "Tamiza",
      "Sekwana",
      "Ren",
      "Loara",
      "Rodan",
      "Dunaj"
    ],
    "answer": 1,
    "explanation": "Osią przestrzenną Paryża jest Sekwana; Londyn leży nad Tamizą.",
    "image": "r03_paryz_londyn.jpg"
  },
  {
    "id": "R03_PZA_11",
    "section": "Europa Północna i Zachodnia",
    "type": "odd_one_out",
    "prompt": "Wskaż miasto niebędące stolicą kraju Europy Północnej: Oslo, Kopenhaga, Helsinki, Paryż.",
    "options": null,
    "answer": "Paryż",
    "explanation": "Oslo, Kopenhaga i Helsinki są stolicami Norwegii, Danii i Finlandii. Paryż jest stolicą Francji."
  },
  {
    "id": "R03_PZA_12",
    "section": "Europa Północna i Zachodnia",
    "type": "scenario",
    "prompt": "Mieszkaniec wielkiego miasta przenosi się na odległe przedmieścia z powodu korków, hałasu i wysokich cen nieruchomości. Jak nazywa się taki proces?",
    "options": [
      "Dezurbanizacja",
      "Kolektywizacja",
      "Repatriacja",
      "Intensyfikacja rolnictwa"
    ],
    "answer": 0,
    "explanation": "Dezurbanizacja to proces przenoszenia się mieszkańców z miasta, zwłaszcza centrum, na tereny podmiejskie lub dalej poza miasto.",
    "image": "r03_paryz_londyn.jpg"
  },
  {
    "id": "R03_ALP_01",
    "section": "Alpy, turystyka i energia",
    "type": "single_choice",
    "prompt": "Jaki typ gór reprezentują Alpy?",
    "options": [
      "Góry fałdowe",
      "Góry wulkaniczne",
      "Góry zrębowe",
      "Wzgórza morenowe",
      "Płaskowyż",
      "Góry ostańcowe"
    ],
    "answer": 0,
    "explanation": "Alpy zostały wypiętrzone w wyniku ruchów górotwórczych i fałdowania warstw skalnych.",
    "image": "r03_pietra_alp.jpg"
  },
  {
    "id": "R03_ALP_02",
    "section": "Alpy, turystyka i energia",
    "type": "multi_select",
    "prompt": "Które kraje są zaliczane do trzech państw położonych niemal w całości w Alpach?",
    "options": [
      "Austria",
      "Szwajcaria",
      "Liechtenstein",
      "Islandia",
      "Dania",
      "Litwa"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Austria, Szwajcaria i Liechtenstein leżą prawie w całości w Alpach; pozostałe wymienione kraje znajdują się poza tym pasmem.",
    "image": "r03_pietra_alp.jpg"
  },
  {
    "id": "R03_ALP_03",
    "section": "Alpy, turystyka i energia",
    "type": "fill_in",
    "prompt": "W Alpach temperatura powietrza spada wraz z wysokością średnio o około __________°C na 100 metrów.",
    "options": null,
    "answer": [
      "0,6"
    ],
    "explanation": "Temperatura powietrza spada przeciętnie o około 0,6°C na każde 100 m wzrostu wysokości.",
    "image": "r03_pietra_alp.jpg",
    "altAnswers": [
      [
        "0,6",
        "0.6"
      ]
    ]
  },
  {
    "id": "R03_ALP_04",
    "section": "Alpy, turystyka i energia",
    "type": "sequence",
    "prompt": "Ułóż piętra roślinno-klimatyczne w Alpach od najniższego do najwyższego.",
    "options": null,
    "answer": [
      "pogórze",
      "regiel",
      "piętro subalpejskie",
      "piętro alpejskie",
      "piętro subniwalne",
      "piętro niwalne"
    ],
    "explanation": "Od podnóża występują kolejno: pogórze, regiel, piętro subalpejskie, alpejskie, subniwalne i niwalne.",
    "image": "r03_pietra_alp.jpg",
    "items": [
      "piętro subalpejskie",
      "piętro niwalne",
      "pogórze",
      "piętro alpejskie",
      "regiel",
      "piętro subniwalne"
    ]
  },
  {
    "id": "R03_ALP_05",
    "section": "Alpy, turystyka i energia",
    "type": "scenario",
    "prompt": "Alpejski rolnik ma do dyspozycji strome zbocza, łąki i pastwiska oraz krótki okres wegetacji. Jaki kierunek produkcji będzie szczególnie odpowiedni?",
    "options": [
      "Uprawa bawełny",
      "Wypas bydła i owiec",
      "Uprawa ryżu na rozlewiskach",
      "Plantacja palm olejowych"
    ],
    "answer": 1,
    "explanation": "Naturalne łąki i pastwiska w Alpach sprzyjają hodowli bydła i owiec, mimo ograniczonych możliwości uprawy roli.",
    "image": "r03_pietra_alp.jpg"
  },
  {
    "id": "R03_ALP_06",
    "section": "Alpy, turystyka i energia",
    "type": "single_choice",
    "prompt": "Z jakiego przemysłu jest szczególnie znana Szwajcaria?",
    "options": [
      "Zegarmistrzowskiego i precyzyjnego",
      "Wydobycia węgla brunatnego",
      "Budowy wielkich tankowców",
      "Plantacyjnego przetwórstwa kawy",
      "Hutnictwa ołowiu",
      "Produkcji bawełny"
    ],
    "answer": 0,
    "explanation": "Szwajcaria jest znana z produkcji wysokiej jakości zegarków, a region alpejski rozwija przemysł precyzyjny i farmaceutyczny."
  },
  {
    "id": "R03_ALP_07",
    "section": "Alpy, turystyka i energia",
    "type": "match",
    "prompt": "Połącz obiekty turystyczne z właściwymi lokalizacjami.",
    "options": null,
    "answer": {
      "Akropol": "Ateny",
      "Wersal": "okolice Paryża",
      "Alhambra": "Grenada",
      "Jeziora Plitwickie": "Chorwacja"
    },
    "explanation": "Akropol znajduje się w Atenach, kompleks Wersal pod Paryżem, Alhambra w Grenadzie, a Jeziora Plitwickie w Chorwacji.",
    "image": "r03_zabytki_poludnia.jpg",
    "left": [
      "Akropol",
      "Wersal",
      "Alhambra",
      "Jeziora Plitwickie"
    ],
    "right": [
      "Chorwacja",
      "Grenada",
      "okolice Paryża",
      "Ateny"
    ]
  },
  {
    "id": "R03_ALP_08",
    "section": "Alpy, turystyka i energia",
    "type": "odd_one_out",
    "prompt": "Wskaż element niebędący walorem przyrodniczym Europy Południowej: ciepłe morze, piaszczyste plaże, czynne wulkany, zabytkowe pałace.",
    "options": null,
    "answer": "zabytkowe pałace",
    "explanation": "Pałace są walorem kulturowym. Morze, plaże i wulkany to walory przyrodnicze.",
    "image": "r03_zabytki_poludnia.jpg"
  },
  {
    "id": "R03_ALP_09",
    "section": "Alpy, turystyka i energia",
    "type": "sort",
    "prompt": "Podziel źródła energii na odnawialne i nieodnawialne.",
    "options": null,
    "answer": {
      "Odnawialne": [
        "energia wody",
        "energia wiatru",
        "energia słoneczna",
        "biomasa"
      ],
      "Nieodnawialne": [
        "węgiel kamienny",
        "gaz ziemny",
        "ropa naftowa",
        "energia jądrowa"
      ]
    },
    "explanation": "Energia wody, wiatru, słońca i biomasy pochodzi ze źródeł odnawialnych, a paliwa kopalne i paliwo jądrowe — ze źródeł nieodnawialnych.",
    "image": "r03_elektrownie_europy.jpg",
    "items": [
      "energia wody",
      "energia słoneczna",
      "węgiel kamienny",
      "ropa naftowa",
      "energia wiatru",
      "biomasa",
      "gaz ziemny",
      "energia jądrowa"
    ],
    "categories": [
      "Odnawialne",
      "Nieodnawialne"
    ]
  },
  {
    "id": "R03_ALP_10",
    "section": "Alpy, turystyka i energia",
    "type": "true_false",
    "prompt": "W Norwegii i Islandii dominują elektrownie wodne.",
    "options": null,
    "answer": true,
    "explanation": "Na obszarach o znacznym spadku rzek, między innymi w Norwegii i Islandii, dużą rolę odgrywają elektrownie wodne.",
    "image": "r03_elektrownie_europy.jpg"
  },
  {
    "id": "R03_ALP_11",
    "section": "Alpy, turystyka i energia",
    "type": "multi_select",
    "prompt": "Zaznacz korzyści wynikające z rozwoju turystyki.",
    "options": [
      "Nowe miejsca pracy",
      "Dochody dla regionów",
      "Rozbudowa infrastruktury turystycznej",
      "Całkowite wyeliminowanie szkód dla środowiska",
      "Możliwość rozwoju usług"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Turystyka zapewnia dochody, tworzy miejsca pracy i sprzyja rozwojowi usług oraz infrastruktury. Może też jednak szkodzić środowisku.",
    "image": "r03_zabytki_poludnia.jpg"
  },
  {
    "id": "R03_ALP_12",
    "section": "Alpy, turystyka i energia",
    "type": "single_choice",
    "prompt": "Które z poniższych jezior zaliczono do znanych jezior alpejskich?",
    "options": [
      "Jezioro Como",
      "Jezioro Wiktorii",
      "Jezioro Bajkał",
      "Jezioro Tanganika",
      "Jezioro Czad",
      "Jezioro Titicaca"
    ],
    "answer": 0,
    "explanation": "Do znanych jezior alpejskich należą Como, Garda, Maggiore, Jezioro Genewskie i Jezioro Bodeńskie.",
    "image": "r03_pietra_alp.jpg"
  },
  {
    "id": "R03_SAS_01",
    "section": "Sąsiedzi Polski i ich gospodarki",
    "type": "single_choice",
    "prompt": "Z iloma państwami lądowo sąsiaduje Polska?",
    "options": [
      "5",
      "6",
      "7",
      "8",
      "9",
      "10"
    ],
    "answer": 2,
    "explanation": "Polska graniczy lądowo z siedmioma państwami: Niemcami, Czechami, Słowacją, Ukrainą, Białorusią, Litwą i Rosją."
  },
  {
    "id": "R03_SAS_02",
    "section": "Sąsiedzi Polski i ich gospodarki",
    "type": "multi_select",
    "prompt": "Wskaż spośród podanych państwa, które mają granicę lądową z Polską.",
    "options": [
      "Czechy",
      "Słowacja",
      "Litwa",
      "Węgry",
      "Białoruś",
      "Rumunia"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Polska graniczy z Czechami, Słowacją, Litwą i Białorusią, ale nie bezpośrednio z Węgrami ani Rumunią."
  },
  {
    "id": "R03_SAS_03",
    "section": "Sąsiedzi Polski i ich gospodarki",
    "type": "match",
    "prompt": "Połącz sąsiadujące z Polską państwa z ich stolicami.",
    "options": null,
    "answer": {
      "Czechy": "Praga",
      "Słowacja": "Bratysława",
      "Litwa": "Wilno",
      "Białoruś": "Mińsk"
    },
    "explanation": "Praga to stolica Czech, Bratysława – Słowacji, Wilno – Litwy, a Mińsk – Białorusi.",
    "left": [
      "Czechy",
      "Słowacja",
      "Litwa",
      "Białoruś"
    ],
    "right": [
      "Mińsk",
      "Wilno",
      "Bratysława",
      "Praga"
    ]
  },
  {
    "id": "R03_SAS_04",
    "section": "Sąsiedzi Polski i ich gospodarki",
    "type": "single_choice",
    "prompt": "W którym roku Czechy i Słowacja stały się odrębnymi państwami po rozpadzie Czechosłowacji?",
    "options": [
      "1985",
      "1989",
      "1991",
      "1993",
      "2004",
      "2020"
    ],
    "answer": 3,
    "explanation": "Czechy i Słowacja tworzyły Czechosłowację do 1993 r.; potem funkcjonują jako dwa państwa."
  },
  {
    "id": "R03_SAS_05",
    "section": "Sąsiedzi Polski i ich gospodarki",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo nienależące do Grupy Wyszehradzkiej: Polska, Czechy, Słowacja, Litwa.",
    "options": null,
    "answer": "Litwa",
    "explanation": "Grupę Wyszehradzką tworzą Polska, Czechy, Słowacja i Węgry; Litwa do niej nie należy."
  },
  {
    "id": "R03_SAS_06",
    "section": "Sąsiedzi Polski i ich gospodarki",
    "type": "single_choice",
    "prompt": "Na terenie którego państwa znajduje się Mierzeja Kurońska?",
    "options": [
      "Słowacja",
      "Czechy",
      "Litwa",
      "Austria",
      "Szwajcaria",
      "Białoruś"
    ],
    "answer": 2,
    "explanation": "Mierzeja Kurońska położona jest nad Bałtykiem na Litwie; znana jest z wydm opadających ku Zalewowi Kurońskiemu.",
    "image": "r03_mierzeja_kuronska.jpg"
  },
  {
    "id": "R03_SAS_07",
    "section": "Sąsiedzi Polski i ich gospodarki",
    "type": "scenario",
    "prompt": "W Zagłębiu Ruhry zamknięto nierentowną kopalnię, a jej budynki zamieniono w muzeum i przestrzeń kultury. Jaki proces gospodarczy opisuje ta zmiana?",
    "options": [
      "Kolektywizacja",
      "Restrukturyzacja",
      "Urbanizacja pierwotna",
      "Intensyfikacja wydobycia"
    ],
    "answer": 1,
    "explanation": "Restrukturyzacja Zagłębia Ruhry obejmowała zmiany profilu przemysłu oraz nowe wykorzystanie dawnych terenów przemysłowych.",
    "image": "r03_zaglebie_ruhry.jpg"
  },
  {
    "id": "R03_SAS_08",
    "section": "Sąsiedzi Polski i ich gospodarki",
    "type": "multi_select",
    "prompt": "Które gałęzie przemysłu rozwinęły się współcześnie w Zagłębiu Ruhry?",
    "options": [
      "Elektroniczny",
      "Chemiczny",
      "Farmaceutyczny",
      "Samochodowy",
      "Plantacyjny",
      "Wielorybniczy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Po restrukturyzacji Zagłębie Ruhry rozwija m.in. przemysł elektroniczny, chemiczny, farmaceutyczny i samochodowy.",
    "image": "r03_zaglebie_ruhry.jpg"
  },
  {
    "id": "R03_SAS_09",
    "section": "Sąsiedzi Polski i ich gospodarki",
    "type": "riddle",
    "prompt": "W którym roku powstała współczesna niepodległa Ukraina?",
    "options": null,
    "answer": "1991",
    "explanation": "Współczesne niepodległe państwo ukraińskie powstało w 1991 r. po rozpadzie ZSRR.",
    "altAnswers": [
      "1991",
      "1991 r."
    ]
  },
  {
    "id": "R03_SAS_10",
    "section": "Sąsiedzi Polski i ich gospodarki",
    "type": "single_choice",
    "prompt": "Jak nazywało się przymusowe tworzenie państwowych i spółdzielczych gospodarstw rolnych kosztem gospodarstw chłopskich na Ukrainie?",
    "options": [
      "Kolektywizacja",
      "Dezurbanizacja",
      "Reemigracja",
      "Denacjonalizacja",
      "Melioracja",
      "Repatriacja"
    ],
    "answer": 0,
    "explanation": "Kolektywizacja polegała na przymusowym odbieraniu ziemi chłopom i tworzeniu gospodarstw państwowych lub spółdzielczych."
  },
  {
    "id": "R03_SAS_11",
    "section": "Sąsiedzi Polski i ich gospodarki",
    "type": "single_choice",
    "prompt": "Jakie góry tworzą umowną granicę między europejską a azjatycką częścią Rosji?",
    "options": [
      "Alpy",
      "Karpaty",
      "Ural",
      "Pireneje",
      "Góry Skandynawskie",
      "Apeniny"
    ],
    "answer": 2,
    "explanation": "Umowna granica między Europą i Azją przebiega m.in. wzdłuż Uralu.",
    "image": "r03_tajga_syberia.jpg"
  },
  {
    "id": "R03_SAS_12",
    "section": "Sąsiedzi Polski i ich gospodarki",
    "type": "true_false",
    "prompt": "Około jednej czwartej terytorium Rosji leży w Europie.",
    "options": null,
    "answer": true,
    "explanation": "Około 1/4 powierzchni Rosji zalicza się do Europy; pozostałą część stanowi Azja.",
    "image": "r03_tajga_syberia.jpg"
  },
  {
    "id": "R03_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który przylądek jest zachodnim skrajnym punktem kontynentalnej Europy?",
    "options": [
      "Nordkyn",
      "Roca",
      "Matapan",
      "Marroqui",
      "Przylądek Dobrej Nadziei",
      "Przylądek Północny"
    ],
    "answer": 1,
    "explanation": "Skrajnym zachodnim punktem Europy kontynentalnej jest Przylądek Roca; Nordkyn jest skrajnym punktem północnym, a Marroqui południowym."
  },
  {
    "id": "R03_HARD_02",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "W którym roku podpisano Układ z Schengen?",
    "options": null,
    "answer": "1985",
    "explanation": "Układ z Schengen podpisano w 1985 r. w Luksemburgu.",
    "altAnswers": [
      "1985",
      "1985 r."
    ]
  },
  {
    "id": "R03_HARD_03",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jak nazywa się najdłuższy fiord Europy, mający około 204 km długości?",
    "options": [
      "Geirangerfjord",
      "Sognefjord",
      "Scoresby Sund",
      "Oslofjord",
      "Hardangerfjord",
      "Lysefjord"
    ],
    "answer": 1,
    "explanation": "Najdłuższym fiordem Europy jest norweski Sognefjord (około 204 km). Scoresby Sund leży na Grenlandii.",
    "image": "r03_fiord_norwegia.jpg"
  },
  {
    "id": "R03_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W 1951 roku Europejską Wspólnotę Węgla i Stali utworzyło __________ państw.",
    "options": null,
    "answer": [
      "6"
    ],
    "explanation": "EWWiS utworzyło sześć państw: Francja, Niemcy, Włochy, Belgia, Holandia i Luksemburg.",
    "altAnswers": [
      [
        "6",
        "sześć"
      ]
    ]
  },
  {
    "id": "R03_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz cztery typy wybrzeży z właściwymi krajami lub regionami.",
    "options": null,
    "answer": {
      "riasowe": "Bretania i Normandia",
      "dalmatyńskie": "Dalmacja w Chorwacji",
      "szkierowe": "Południowa Szwecja i Finlandia",
      "fiordowe": "Norwegia"
    },
    "explanation": "Wybrzeża riasowe występują m.in. we Francji, dalmatyńskie w Dalmacji, szkierowe w Szwecji i Finlandii, a fiordowe w Norwegii.",
    "image": "r03_fiord_norwegia.jpg",
    "left": [
      "riasowe",
      "dalmatyńskie",
      "szkierowe",
      "fiordowe"
    ],
    "right": [
      "Norwegia",
      "Południowa Szwecja i Finlandia",
      "Dalmacja w Chorwacji",
      "Bretania i Normandia"
    ]
  },
  {
    "id": "R03_HARD_06",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która gałąź przemysłu odpowiadała za około 17% eksportu Finlandii?",
    "options": [
      "Drzewna",
      "Stoczniowa",
      "Samochodowa",
      "Lotnicza",
      "Rafineryjna",
      "Farmaceutyczna"
    ],
    "answer": 0,
    "explanation": "Produkty przemysłu drzewnego stanowiły około 17% fińskiego eksportu."
  },
  {
    "id": "R03_HARD_07",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaką część powierzchni Francji zajmują użytki rolne?",
    "options": [
      "27%",
      "38%",
      "54%",
      "70%",
      "81%",
      "19%"
    ],
    "answer": 2,
    "explanation": "Użytki rolne zajmują około 54% powierzchni Francji, lasy 27%, a pozostałe grunty około 19%.",
    "image": "r03_rolnictwo_francja.jpg"
  },
  {
    "id": "R03_HARD_08",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż w kolejności od podnóża do szczytów cztery wybrane piętra Alp.",
    "options": null,
    "answer": [
      "regiel dolny",
      "regiel górny",
      "piętro subalpejskie",
      "piętro alpejskie"
    ],
    "explanation": "Lasy mieszane regla dolnego położone są poniżej borów regla górnego, nad nimi rosną kosodrzewiny, a wyżej znajdują się hale.",
    "image": "r03_pietra_alp.jpg",
    "items": [
      "piętro subalpejskie",
      "regiel dolny",
      "piętro alpejskie",
      "regiel górny"
    ]
  },
  {
    "id": "R03_HARD_09",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który Polak założył słynną firmę produkującą zegarki w Szwajcarii?",
    "options": [
      "Antoni Patek",
      "Ignacy Łukasiewicz",
      "Jan Czochralski",
      "Ernest Malinowski",
      "Paweł Edmund Strzelecki",
      "Mikołaj Kopernik"
    ],
    "answer": 0,
    "explanation": "Antoni Patek po emigracji do Szwajcarii założył firmę zegarmistrzowską związaną później z marką Patek Philippe."
  },
  {
    "id": "R03_HARD_10",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Wskaż trzy włoskie wulkany będące atrakcjami przyrodniczymi Europy Południowej.",
    "options": [
      "Etna",
      "Wezuwiusz",
      "Stromboli",
      "Hekla",
      "Katla",
      "Teide"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Etna leży na Sycylii, Wezuwiusz koło Neapolu, a Stromboli na Wyspach Liparyjskich.",
    "image": "r03_zabytki_poludnia.jpg"
  },
  {
    "id": "R03_HARD_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile obiektów UNESCO znajdowało się we Włoszech w 2024 roku?",
    "options": [
      "17",
      "50",
      "53",
      "60",
      "203",
      "523"
    ],
    "answer": 3,
    "explanation": "W 2024 roku Włochy miały 60 obiektów na Liście Światowego Dziedzictwa UNESCO, Francja 53, a Hiszpania 50."
  },
  {
    "id": "R03_HARD_12",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Restrukturyzacja Zagłębia Ruhry rozpoczęła się w roku __________.",
    "options": null,
    "answer": [
      "1956"
    ],
    "explanation": "Restrukturyzację przemysłu Zagłębia Ruhry rozpoczęto w 1956 r.",
    "image": "r03_zaglebie_ruhry.jpg",
    "altAnswers": [
      [
        "1956",
        "1956 r."
      ]
    ]
  },
  {
    "id": "R03_HARD_13",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W Essen dawną kopalnię i koksownię zamknięto, a teren przekształcono w muzeum. W 2001 roku cały kompleks wpisano na Listę UNESCO. O który obiekt chodzi?",
    "options": [
      "Kopalnię Zollverein",
      "Hutę Duisburg-Meiderich",
      "Centrum CentrO",
      "Pałac Zimowy"
    ],
    "answer": 0,
    "explanation": "W 2001 roku na Listę UNESCO wpisano kompleks kopalni i koksowni Zollverein w Essen.",
    "image": "r03_zaglebie_ruhry.jpg"
  },
  {
    "id": "R03_HARD_14",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W której miejscowości na Syberii odnotowano temperaturę około −68°C w 1964 roku?",
    "options": [
      "Ojmiakon",
      "Moskwa",
      "Irkuck",
      "Władywostok",
      "Nowosybirsk",
      "Soczi"
    ],
    "answer": 0,
    "explanation": "W Ojmiakonie odnotowano temperaturę około −68°C w 1964 roku.",
    "image": "r03_tajga_syberia.jpg"
  },
  {
    "id": "R03_HARD_15",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj szczegółowe fakty krajom, których dotyczą.",
    "options": null,
    "answer": {
      "Norwegia": [
        "Sognefjord",
        "port Narwik"
      ],
      "Szwajcaria": [
        "firma Patek Philippe",
        "jezioro Genewskie"
      ],
      "Niemcy": [
        "kompleks Zollverein",
        "Zagłębie Ruhry"
      ],
      "Litwa": [
        "Mierzeja Kurońska",
        "miasto Wilno"
      ]
    },
    "explanation": "Sognefjord i Narwik znajdują się w Norwegii, Patek Philippe oraz Jezioro Genewskie łączą się ze Szwajcarią, Zollverein i Zagłębie Ruhry z Niemcami, a Mierzeja Kurońska i Wilno z Litwą.",
    "image": "r03_mierzeja_kuronska.jpg",
    "items": [
      "Sognefjord",
      "firma Patek Philippe",
      "kompleks Zollverein",
      "Mierzeja Kurońska",
      "port Narwik",
      "jezioro Genewskie",
      "Zagłębie Ruhry",
      "miasto Wilno"
    ],
    "categories": [
      "Norwegia",
      "Szwajcaria",
      "Niemcy",
      "Litwa"
    ]
  }
];

const KID_PROMPTS = {
  "R03_GEO_02": "Wskaż naturalne granice Europy.",
  "R03_GEO_12": "Dlaczego Polska bywa zaliczana do różnych części Europy?",
  "R03_LUD_05": "Co w przyrodzie wpływa na to, gdzie mieszkają ludzie?",
  "R03_LUD_07": "Przyjechało 12 tys. osób, wyjechało 8 tys. Jakie jest saldo migracji?",
  "R03_PZA_08": "Rolnik sprzedaje większość produkcji. Jaki to rodzaj rolnictwa?",
  "R03_PZA_12": "Jak nazywa się wyprowadzanie z centrum miasta na przedmieścia?",
  "R03_ALP_05": "Jaką hodowlę warto prowadzić na alpejskich łąkach?",
  "R03_SAS_07": "Kopalnia stała się muzeum. Jak nazywa się taka zmiana gospodarki?",
  "R03_HARD_13": "Jak nazywa się dawna kopalnia w Essen wpisana na listę UNESCO w 2001 roku?"
};

const chapter = {
  id: "r03",
  number: 3,
  title: "Kraje Europy",
  icon: "🌍",
  sectionOrder: [
    "Europa: przyroda i integracja",
    "Ludność, migracje i religie",
    "Europa Północna i Zachodnia",
    "Alpy, turystyka i energia",
    "Sąsiedzi Polski i ich gospodarki"
  ],
  sectionIcons: {
    "Europa: przyroda i integracja": "🌍",
    "Ludność, migracje i religie": "👥",
    "Europa Północna i Zachodnia": "🧭",
    "Alpy, turystyka i energia": "🏔️",
    "Sąsiedzi Polski i ich gospodarki": "🤝"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
