// Skróty sekcji:
//   ROZ = Rozbicie dzielnicowe
//   ZJE = Zjednoczenie Polski
//   KAZ = Czasy Kazimierza Wielkiego
//   UNI = Unia polsko-litewska
//   JAG = Czasy świetności dynastii Jagiellonów
//   MON = Monarchia stanowa w Polsce
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R07_ROZ_01",
    "section": "Rozbicie dzielnicowe",
    "type": "single_choice",
    "prompt": "Co rozpoczęło okres rozbicia dzielnicowego w Polsce?",
    "options": [
      "Testament Bolesława Krzywoustego",
      "Koronacja Przemysła II",
      "Unia w Krewie",
      "Pokój w Kaliszu",
      "Bitwa pod Grunwaldem",
      "Konstytucja Nihil novi"
    ],
    "answer": 0,
    "image": "/img/r07_podzial_polski_dzielnice.jpg",
    "explanation": "Po śmierci Bolesława Krzywoustego w 1138 roku jego synowie objęli wyznaczone im dzielnice, co zapoczątkowało długi podział kraju."
  },
  {
    "id": "R07_ROZ_02",
    "section": "Rozbicie dzielnicowe",
    "type": "match",
    "prompt": "Połącz synów Bolesława Krzywoustego z dzielnicami, które otrzymali po jego śmierci.",
    "options": null,
    "left": [
      "Władysław",
      "Bolesław",
      "Mieszko III",
      "Henryk"
    ],
    "right": [
      "Śląsk i dzielnica senioralna",
      "Mazowsze",
      "Wielkopolska",
      "Ziemia sandomierska"
    ],
    "answer": {
      "Władysław": "Śląsk i dzielnica senioralna",
      "Bolesław": "Mazowsze",
      "Mieszko III": "Wielkopolska",
      "Henryk": "Ziemia sandomierska"
    },
    "explanation": "Najstarszy Władysław otrzymał Śląsk i dzielnicę senioralną, Bolesław Mazowsze, Mieszko III Wielkopolskę, a Henryk ziemię sandomierską."
  },
  {
    "id": "R07_ROZ_03",
    "section": "Rozbicie dzielnicowe",
    "type": "true_false",
    "prompt": "Zasada senioratu zakładała, że władzę zwierzchnią ma sprawować najstarszy z żyjących Piastów.",
    "options": null,
    "answer": true,
    "explanation": "Senior miał rządzić dzielnicą senioralną z Krakowem i mieć zwierzchność nad pozostałymi Piastami."
  },
  {
    "id": "R07_ROZ_04",
    "section": "Rozbicie dzielnicowe",
    "type": "scenario",
    "prompt": "Książę Mazowsza i Kujaw chce chronić swoje ziemie przed najazdami Prusów. W 1226 roku przekazuje ziemię chełmińską zakonowi rycerskiemu. O którym księciu mowa?",
    "options": [
      "Konrad Mazowiecki",
      "Leszek Biały",
      "Kazimierz Sprawiedliwy",
      "Władysław Wygnaniec",
      "Henryk Pobożny",
      "Mieszko Stary"
    ],
    "answer": 0,
    "image": "/img/r07_krzyzacy_malbork.jpg",
    "explanation": "Konrad Mazowiecki sprowadził Krzyżaków, aby bronili Mazowsza i Kujaw przed Prusami oraz chrystianizowali ten lud."
  },
  {
    "id": "R07_ROZ_05",
    "section": "Rozbicie dzielnicowe",
    "type": "fill_in",
    "prompt": "W 1227 roku podczas zjazdu w __________ został zamordowany książę __________.",
    "options": null,
    "answer": [
      "Gąsawie",
      "Leszek Biały"
    ],
    "altAnswers": [
      [
        "Gąsawie",
        "Gasawie",
        "Gąsawa",
        "Gasawa"
      ],
      [
        "Leszek Biały",
        "Leszka Białego",
        "Leszek Bialy",
        "Leszka Bialego"
      ]
    ],
    "explanation": "Zjazd w Gąsawie miał zakończyć spory między Piastami, lecz zakończył się śmiercią Leszka Białego."
  },
  {
    "id": "R07_ROZ_06",
    "section": "Rozbicie dzielnicowe",
    "type": "single_choice",
    "prompt": "Kto dowodził polskim rycerstwem w bitwie z Mongołami pod Legnicą w 1241 roku?",
    "options": [
      "Henryk Pobożny",
      "Leszek Biały",
      "Przemysł II",
      "Kazimierz Wielki",
      "Wacław II",
      "Władysław Jagiełło"
    ],
    "answer": 0,
    "image": "/img/r07_mongol_wojownik.jpg",
    "explanation": "Pod Legnicą rycerstwem z kilku dzielnic dowodził książę Henryk Pobożny, który poległ w bitwie."
  },
  {
    "id": "R07_ROZ_07",
    "section": "Rozbicie dzielnicowe",
    "type": "multi_select",
    "prompt": "Zaznacz skutki rozbicia dzielnicowego wymienione w podręczniku.",
    "options": [
      "Osłabienie znaczenia Piastów na arenie międzynarodowej",
      "Utrata Pomorza Zachodniego i Gdańskiego",
      "Powstanie silnego państwa krzyżackiego",
      "Przyłączenie Litwy do Polski w 1138 roku",
      "Koronacja Kazimierza Wielkiego w Gnieźnie",
      "Łatwiejsze najazdy na podzielone ziemie"
    ],
    "answer": [
      0,
      1,
      2,
      5
    ],
    "explanation": "Rozbicie osłabiło władzę Piastów, sprzyjało utracie ziem, powstaniu państwa krzyżackiego i narażało dzielnice na najazdy."
  },
  {
    "id": "R07_ROZ_08",
    "section": "Rozbicie dzielnicowe",
    "type": "riddle",
    "prompt": "Przymusowa opłata nakładana przez władcę na towary przewożone przez granicę księstwa to...",
    "options": null,
    "answer": "cło",
    "altAnswers": [
      "cło",
      "clo"
    ],
    "explanation": "Kupcy w okresie rozbicia często przekraczali kilka granic i na każdej płacili cło, co podnosiło ceny towarów."
  },
  {
    "id": "R07_ROZ_09",
    "section": "Rozbicie dzielnicowe",
    "type": "sort",
    "prompt": "Przyporządkuj zjawiska do skutków rozbicia dzielnicowego: negatywnych i pozytywnych.",
    "options": null,
    "items": [
      "utrata Pomorza Gdańskiego",
      "lokacje miast",
      "najazdy Mongołów",
      "upowszechnienie trójpolówki",
      "powstanie państwa krzyżackiego",
      "kolonizacja wsi"
    ],
    "categories": [
      "skutki negatywne",
      "zjawiska rozwojowe"
    ],
    "answer": {
      "skutki negatywne": [
        "utrata Pomorza Gdańskiego",
        "najazdy Mongołów",
        "powstanie państwa krzyżackiego"
      ],
      "zjawiska rozwojowe": [
        "lokacje miast",
        "upowszechnienie trójpolówki",
        "kolonizacja wsi"
      ]
    },
    "image": "/img/r07_podzial_polski_dzielnice.jpg",
    "explanation": "Mimo politycznego osłabienia kraj rozwijał się gospodarczo dzięki kolonizacji, trójpolówce i lokacjom miast."
  },
  {
    "id": "R07_ROZ_10",
    "section": "Rozbicie dzielnicowe",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Plątonogi, Łysy, Garbaty, Wierzynek.",
    "options": null,
    "answer": "Wierzynek",
    "explanation": "Plątonogi, Łysy i Garbaty to przykłady przydomków książąt piastowskich, a Wierzynek był krakowskim mieszczaninem z czasów Kazimierza Wielkiego."
  },
  {
    "id": "R07_ZJE_01",
    "section": "Zjednoczenie Polski",
    "type": "single_choice",
    "prompt": "Który władca Wielkopolski koronował się na króla Polski w 1295 roku?",
    "options": [
      "Przemysł II",
      "Wacław II",
      "Władysław Łokietek",
      "Henryk Pobożny",
      "Kazimierz Sprawiedliwy",
      "Leszek Biały"
    ],
    "answer": 0,
    "explanation": "Przemysł II został koronowany w Gnieźnie w 1295 roku, lecz kilka miesięcy później zginął w tragicznych okolicznościach."
  },
  {
    "id": "R07_ZJE_02",
    "section": "Zjednoczenie Polski",
    "type": "multi_select",
    "prompt": "Którzy władcy podejmowali próby zjednoczenia ziem polskich przed koronacją Władysława Łokietka?",
    "options": [
      "Henryk Pobożny",
      "Przemysł II",
      "Wacław II",
      "Mikołaj Wierzynek",
      "Ulrich von Jungingen",
      "Jan Bażyński"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Podręcznik wymienia próby książąt śląskich, Przemysła II oraz rządy Wacława II, zanim dzieło zjednoczenia podjął Łokietek."
  },
  {
    "id": "R07_ZJE_03",
    "section": "Zjednoczenie Polski",
    "type": "true_false",
    "prompt": "Arcybiskup Jakub Świnka wspierał działania prowadzące do zjednoczenia Polski.",
    "options": null,
    "answer": true,
    "explanation": "Jakub Świnka koronował Przemysła II i po jego śmierci popierał kandydaturę Władysława Łokietka."
  },
  {
    "id": "R07_ZJE_04",
    "section": "Zjednoczenie Polski",
    "type": "scenario",
    "prompt": "Jesteś rycerzem w Krakowie w 1320 roku i obserwujesz koronację władcy, która symbolicznie kończy rozbicie dzielnicowe. Kto zostaje królem?",
    "options": [
      "Władysław Łokietek",
      "Wacław II",
      "Przemysł II",
      "Kazimierz Wielki",
      "Ludwik Węgierski",
      "Władysław Jagiełło"
    ],
    "answer": 0,
    "image": "/img/r07_koronacja_lokietka.jpg",
    "explanation": "Koronacja Władysława Łokietka w Krakowie w 1320 roku jest uznawana za symboliczny koniec rozbicia dzielnicowego."
  },
  {
    "id": "R07_ZJE_05",
    "section": "Zjednoczenie Polski",
    "type": "fill_in",
    "prompt": "W 1309 roku Krzyżacy zagarnęli __________, chociaż zostali wezwani na pomoc przeciw __________.",
    "options": null,
    "answer": [
      "Pomorze Gdańskie",
      "Brandenburczykom"
    ],
    "altAnswers": [
      [
        "Pomorze Gdańskie",
        "Pomorza Gdańskiego",
        "Pomorze Gdanskie",
        "Pomorza Gdanskiego"
      ],
      [
        "Brandenburczykom",
        "Brandenburczycy",
        "Brandenburgii"
      ]
    ],
    "explanation": "Łokietek wezwał Krzyżaków do obrony Gdańska przed Brandenburczykami, lecz zakon przejął całe Pomorze Gdańskie."
  },
  {
    "id": "R07_ZJE_06",
    "section": "Zjednoczenie Polski",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "Koronacja Władysława Łokietka",
      "Zagarnięcie Pomorza Gdańskiego przez Krzyżaków",
      "Koronacja Przemysła II",
      "Bitwa pod Płowcami"
    ],
    "answer": [
      "Koronacja Przemysła II",
      "Zagarnięcie Pomorza Gdańskiego przez Krzyżaków",
      "Koronacja Władysława Łokietka",
      "Bitwa pod Płowcami"
    ],
    "explanation": "Przemysł II koronował się w 1295 roku, Krzyżacy zajęli Pomorze w 1309 roku, Łokietek koronował się w 1320 roku, a bitwa pod Płowcami odbyła się w 1331 roku."
  },
  {
    "id": "R07_ZJE_07",
    "section": "Zjednoczenie Polski",
    "type": "match",
    "prompt": "Połącz wydarzenie z rokiem.",
    "options": null,
    "left": [
      "Koronacja Przemysła II",
      "Koronacja Wacława II",
      "Powrót Łokietka z Węgier",
      "Koronacja Władysława Łokietka"
    ],
    "right": [
      "1295",
      "1300",
      "1304",
      "1320"
    ],
    "answer": {
      "Koronacja Przemysła II": "1295",
      "Koronacja Wacława II": "1300",
      "Powrót Łokietka z Węgier": "1304",
      "Koronacja Władysława Łokietka": "1320"
    },
    "image": "/img/r07_koronacja_lokietka.jpg",
    "explanation": "Daty te pokazują drogę od pierwszych prób zjednoczenia do odrodzenia Królestwa Polskiego."
  },
  {
    "id": "R07_ZJE_08",
    "section": "Zjednoczenie Polski",
    "type": "single_choice",
    "prompt": "Jakie ziemie zjednoczył Władysław Łokietek przed koronacją królewską?",
    "options": [
      "Małopolskę, Wielkopolskę, Kujawy oraz ziemię sieradzko-łęczycką",
      "Śląsk, Mazowsze, Pomorze Gdańskie i Prusy",
      "Ruś Halicką, Czechy, Węgry i Litwę",
      "Pomorze Zachodnie, Brandenburgię, Żmudź i Warmię",
      "Kijów, Kalisz, Malbork i Gdańsk",
      "Mazowsze, Śląsk, Mołdawię i Wołoszczyznę"
    ],
    "answer": 0,
    "explanation": "Państwo Łokietka objęło dwie główne dzielnice, Małopolskę i Wielkopolskę, a także Kujawy oraz ziemię sieradzko-łęczycką."
  },
  {
    "id": "R07_ZJE_09",
    "section": "Zjednoczenie Polski",
    "type": "riddle",
    "prompt": "Urzędnicy powołani przez Wacława II do zarządzania dzielnicami Polski to...",
    "options": null,
    "answer": "starostowie",
    "altAnswers": [
      "starostowie",
      "starosta",
      "starostów"
    ],
    "explanation": "Wacław II powołał starostów, aby sprawniej zarządzać poszczególnymi dzielnicami."
  },
  {
    "id": "R07_ZJE_10",
    "section": "Zjednoczenie Polski",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Pomorze Gdańskie, Śląsk, Mazowsze, Małopolska.",
    "options": null,
    "answer": "Małopolska",
    "explanation": "Małopolska weszła w skład państwa Łokietka, a Pomorze Gdańskie, Śląsk i Mazowsze pozostały poza granicami zjednoczonego kraju."
  },
  {
    "id": "R07_KAZ_01",
    "section": "Czasy Kazimierza Wielkiego",
    "type": "single_choice",
    "prompt": "Który władca objął tron Polski po Władysławie Łokietku w 1333 roku?",
    "options": [
      "Kazimierz Wielki",
      "Władysław Jagiełło",
      "Ludwik Węgierski",
      "Przemysł II",
      "Jan Olbracht",
      "Kazimierz Jagiellończyk"
    ],
    "answer": 0,
    "explanation": "Po śmierci Władysława Łokietka królem został jego syn Kazimierz, nazwany później Wielkim."
  },
  {
    "id": "R07_KAZ_02",
    "section": "Czasy Kazimierza Wielkiego",
    "type": "multi_select",
    "prompt": "Zaznacz państwa lub siły polityczne, które zagrażały Polsce na początku panowania Kazimierza Wielkiego.",
    "options": [
      "Królestwo Czech",
      "Zakon krzyżacki",
      "Brandenburgia",
      "Węgry",
      "Związek Pruski",
      "Wielkie Księstwo Litewskie"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Kazimierz odziedziczył państwo zagrożone przez Czechy, Krzyżaków i Brandenburgię, a przyjazne stosunki utrzymywał z Węgrami."
  },
  {
    "id": "R07_KAZ_03",
    "section": "Czasy Kazimierza Wielkiego",
    "type": "true_false",
    "prompt": "Na mocy pokoju w Kaliszu w 1343 roku Krzyżacy zwrócili Polsce Kujawy i ziemię dobrzyńską, ale zatrzymali Pomorze Gdańskie.",
    "options": null,
    "answer": true,
    "explanation": "Pokój w Kaliszu poprawił sytuację Polski, choć nie przywrócił jej Pomorza Gdańskiego."
  },
  {
    "id": "R07_KAZ_04",
    "section": "Czasy Kazimierza Wielkiego",
    "type": "single_choice",
    "prompt": "Dlaczego zamki na pograniczu Małopolski i Śląska nazywano Orlimi Gniazdami?",
    "options": [
      "Wznoszono je w trudno dostępnych miejscach, często na wysokich skałach",
      "Budowano je wyłącznie dla hodowców orłów",
      "Stały tylko na wyspach rzecznych",
      "Nie miały murów obronnych",
      "Powstały wyłącznie w miastach portowych",
      "Zbudowali je Krzyżacy po 1466 roku"
    ],
    "answer": 0,
    "image": "/img/r07_orle_gniazdo.jpg",
    "explanation": "Orle Gniazda stawiano w miejscach trudno dostępnych, najczęściej na wysokich skałach."
  },
  {
    "id": "R07_KAZ_05",
    "section": "Czasy Kazimierza Wielkiego",
    "type": "fill_in",
    "prompt": "Akademia Krakowska została założona w roku __________ z inicjatywy króla __________.",
    "options": null,
    "answer": [
      "1364",
      "Kazimierza Wielkiego"
    ],
    "altAnswers": [
      [
        "1364",
        "1364 r.",
        "1364 roku"
      ],
      [
        "Kazimierza Wielkiego",
        "Kazimierz Wielki"
      ]
    ],
    "image": "/img/r07_akademia_krakowska.jpg",
    "explanation": "W 1364 roku Kazimierz Wielki powołał pierwszą szkołę wyższą na ziemiach polskich."
  },
  {
    "id": "R07_KAZ_06",
    "section": "Czasy Kazimierza Wielkiego",
    "type": "sort",
    "prompt": "Przyporządkuj działania Kazimierza Wielkiego do polityki zagranicznej lub reform wewnętrznych.",
    "options": null,
    "items": [
      "pokój w Kaliszu",
      "ujednolicenie prawa",
      "przyłączenie Rusi Halickiej",
      "uporządkowanie dochodów z soli",
      "budowa zamków",
      "układ z Janem Luksemburskim"
    ],
    "categories": [
      "polityka zagraniczna",
      "reformy i rozwój kraju"
    ],
    "answer": {
      "polityka zagraniczna": [
        "pokój w Kaliszu",
        "przyłączenie Rusi Halickiej",
        "układ z Janem Luksemburskim"
      ],
      "reformy i rozwój kraju": [
        "ujednolicenie prawa",
        "uporządkowanie dochodów z soli",
        "budowa zamków"
      ]
    },
    "explanation": "Kazimierz unikał wojen dzięki dyplomacji, a w kraju wzmacniał prawo, finanse i obronność."
  },
  {
    "id": "R07_KAZ_07",
    "section": "Czasy Kazimierza Wielkiego",
    "type": "riddle",
    "prompt": "Bogatym krakowskim mieszczaninem, który podczas zjazdu monarchów zorganizował słynną ucztę, był...",
    "options": null,
    "answer": "Mikołaj Wierzynek",
    "altAnswers": [
      "Mikołaj Wierzynek",
      "Mikolaj Wierzynek",
      "Wierzynek"
    ],
    "explanation": "Uczta u Mikołaja Wierzynka pokazywała zamożność krakowskich mieszczan i prestiż państwa Kazimierza Wielkiego."
  },
  {
    "id": "R07_KAZ_08",
    "section": "Czasy Kazimierza Wielkiego",
    "type": "match",
    "prompt": "Połącz pojęcie lub wydarzenie z jego znaczeniem.",
    "options": null,
    "left": [
      "Pokój w Kaliszu",
      "Akademia Krakowska",
      "Ruś Halicka",
      "Zjazd monarchów w Krakowie"
    ],
    "right": [
      "zawarcie porozumienia z Krzyżakami",
      "pierwsza szkoła wyższa na ziemiach polskich",
      "ziemia przyłączona do Polski",
      "spotkanie europejskich władców w 1364 roku"
    ],
    "answer": {
      "Pokój w Kaliszu": "zawarcie porozumienia z Krzyżakami",
      "Akademia Krakowska": "pierwsza szkoła wyższa na ziemiach polskich",
      "Ruś Halicka": "ziemia przyłączona do Polski",
      "Zjazd monarchów w Krakowie": "spotkanie europejskich władców w 1364 roku"
    },
    "image": "/img/r07_akademia_krakowska.jpg",
    "explanation": "Te wydarzenia pokazują zarówno dyplomację Kazimierza, jak i rozwój państwa oraz Krakowa."
  },
  {
    "id": "R07_KAZ_09",
    "section": "Czasy Kazimierza Wielkiego",
    "type": "scenario",
    "prompt": "Kupiec bezpieczniej podróżuje przez kraj, mija nowe miasta i zamki, a prawo jest bardziej jednolite. Do którego władcy pasuje taki opis przemian?",
    "options": [
      "Kazimierza Wielkiego",
      "Władysława Wygnańca",
      "Leszka Białego",
      "Władysława Warneńczyka",
      "Jana Bażyńskiego",
      "Ulryka von Jungingena"
    ],
    "answer": 0,
    "image": "/img/r07_orle_gniazdo.jpg",
    "explanation": "Kazimierz Wielki wzmacniał bezpieczeństwo, rozwijał handel, ujednolicał prawo i wspierał budowę zamków oraz miast."
  },
  {
    "id": "R07_KAZ_10",
    "section": "Czasy Kazimierza Wielkiego",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Kujawy, ziemia dobrzyńska, Pomorze Gdańskie, pokój w Kaliszu.",
    "options": null,
    "answer": "Pomorze Gdańskie",
    "explanation": "Po pokoju w Kaliszu Polska odzyskała Kujawy i ziemię dobrzyńską, ale Pomorze Gdańskie pozostało przy Krzyżakach."
  },
  {
    "id": "R07_UNI_01",
    "section": "Unia polsko-litewska",
    "type": "single_choice",
    "prompt": "Kto objął polski tron po śmierci Kazimierza Wielkiego w 1370 roku?",
    "options": [
      "Ludwik Węgierski",
      "Władysław Jagiełło",
      "Kazimierz Jagiellończyk",
      "Władysław Warneńczyk",
      "Aleksander Jagiellończyk",
      "Jan Luksemburski"
    ],
    "answer": 0,
    "explanation": "Ponieważ Kazimierz Wielki nie miał syna, władzę w Polsce przejął syn jego siostry, król Węgier Ludwik Andegaweński."
  },
  {
    "id": "R07_UNI_02",
    "section": "Unia polsko-litewska",
    "type": "riddle",
    "prompt": "Związek państw mających wspólnego władcę, ale pozostających odrębnymi państwami, to...",
    "options": null,
    "answer": "unia personalna",
    "altAnswers": [
      "unia personalna",
      "unia personalna państw"
    ],
    "explanation": "Polska i Węgry za panowania Ludwika były połączone unią personalną."
  },
  {
    "id": "R07_UNI_03",
    "section": "Unia polsko-litewska",
    "type": "multi_select",
    "prompt": "Zaznacz postanowienia unii w Krewie z 1385 roku.",
    "options": [
      "Jagiełło miał poślubić Jadwigę",
      "Jagiełło miał zostać królem Polski",
      "Jagiełło i cała Litwa mieli przyjąć chrzest",
      "Krzyżacy mieli otrzymać Pomorze Gdańskie",
      "Polska miała zrzec się Krakowa",
      "Litwa miała stać się krajem chrześcijańskim"
    ],
    "answer": [
      0,
      1,
      2,
      5
    ],
    "image": "/img/r07_unia_krewo.jpg",
    "explanation": "Unia przewidywała małżeństwo Jagiełły z Jadwigą, koronację Jagiełły oraz chrzest Litwy."
  },
  {
    "id": "R07_UNI_04",
    "section": "Unia polsko-litewska",
    "type": "fill_in",
    "prompt": "Po chrzcie w Krakowie Jagiełło przybrał imię __________, a unia z Litwą została zawarta w __________.",
    "options": null,
    "answer": [
      "Władysław",
      "Krewie"
    ],
    "altAnswers": [
      [
        "Władysław",
        "Wladyslaw"
      ],
      [
        "Krewie",
        "Krewo"
      ]
    ],
    "image": "/img/r07_unia_krewo.jpg",
    "explanation": "Jagiełło został ochrzczony jako Władysław, a porozumienie zawarto w Krewie na Litwie."
  },
  {
    "id": "R07_UNI_05",
    "section": "Unia polsko-litewska",
    "type": "true_false",
    "prompt": "Zawarcie unii polsko-litewskiej i chrzest Litwy odebrały Krzyżakom pretekst do najazdów na Litwę pod hasłem chrystianizacji.",
    "options": null,
    "answer": true,
    "explanation": "Po chrzcie Litwy wielkie księstwo stało się krajem chrześcijańskim, więc zakon tracił dotychczasowe uzasadnienie ataków."
  },
  {
    "id": "R07_UNI_06",
    "section": "Unia polsko-litewska",
    "type": "single_choice",
    "prompt": "Co było jedną z bezpośrednich przyczyn wielkiej wojny z zakonem krzyżackim w latach 1409-1411?",
    "options": [
      "Powstanie na Żmudzi i pomoc udzielona Żmudzinom przez Witolda",
      "Założenie Akademii Krakowskiej",
      "Śmierć Przemysła II",
      "Nadanie przywileju koszyckiego",
      "Bitwa pod Warną",
      "Zjazd w Gąsawie"
    ],
    "answer": 0,
    "explanation": "Wielki książę litewski Witold wsparł Żmudzinów przeciw Krzyżakom, a Polska opowiedziała się po stronie Litwy."
  },
  {
    "id": "R07_UNI_07",
    "section": "Unia polsko-litewska",
    "type": "scenario",
    "prompt": "Jest 15 lipca 1410 roku. Wojska polsko-litewskie walczą z armią zakonu krzyżackiego w jednej z największych bitew średniowiecznej Europy. Jak nazywa się to starcie?",
    "options": [
      "Bitwa pod Grunwaldem",
      "Bitwa pod Płowcami",
      "Bitwa pod Warną",
      "Bitwa pod Chojnicami",
      "Bitwa pod Legnicą",
      "Oblężenie Malborka"
    ],
    "answer": 0,
    "image": "/img/r07_bitwa_grunwald.jpg",
    "explanation": "Bitwa pod Grunwaldem odbyła się 15 lipca 1410 roku i zakończyła druzgocącą klęską Krzyżaków."
  },
  {
    "id": "R07_UNI_08",
    "section": "Unia polsko-litewska",
    "type": "match",
    "prompt": "Połącz postać z rolą w wydarzeniach unii polsko-litewskiej i wielkiej wojny.",
    "options": null,
    "left": [
      "Jadwiga",
      "Władysław Jagiełło",
      "Witold",
      "Ulrich von Jungingen"
    ],
    "right": [
      "król Polski i żona Jagiełły",
      "władca Polski po chrzcie i koronacji",
      "wielki książę litewski",
      "wielki mistrz zakonu poległy pod Grunwaldem"
    ],
    "answer": {
      "Jadwiga": "król Polski i żona Jagiełły",
      "Władysław Jagiełło": "władca Polski po chrzcie i koronacji",
      "Witold": "wielki książę litewski",
      "Ulrich von Jungingen": "wielki mistrz zakonu poległy pod Grunwaldem"
    },
    "image": "/img/r07_bitwa_grunwald.jpg",
    "explanation": "Postacie te odgrywały kluczowe role w zawarciu unii oraz w konflikcie z zakonem krzyżackim."
  },
  {
    "id": "R07_UNI_09",
    "section": "Unia polsko-litewska",
    "type": "single_choice",
    "prompt": "Co Polska odzyskała na mocy pokoju toruńskiego z 1411 roku?",
    "options": [
      "Ziemię dobrzyńską",
      "Pomorze Gdańskie",
      "Śląsk",
      "Mazowsze",
      "Ruś Halicką",
      "Prusy Królewskie"
    ],
    "answer": 0,
    "image": "/img/r07_bitwa_grunwald.jpg",
    "explanation": "Pierwszy pokój toruński przywrócił Polsce ziemię dobrzyńską, a Litwie Żmudź; Pomorze Gdańskie pozostało przy Krzyżakach."
  },
  {
    "id": "R07_UNI_10",
    "section": "Unia polsko-litewska",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Krewo, Horodło, Grunwald, Koszyce.",
    "options": null,
    "answer": "Koszyce",
    "explanation": "Krewo, Horodło i Grunwald wiążą się z unią polsko-litewską oraz wojną z Krzyżakami, a Koszyce z przywilejem Ludwika Węgierskiego dla szlachty."
  },
  {
    "id": "R07_JAG_01",
    "section": "Czasy świetności dynastii Jagiellonów",
    "type": "single_choice",
    "prompt": "Kto został królem Polski po śmierci Władysława Jagiełły w 1434 roku?",
    "options": [
      "Władysław III",
      "Kazimierz Wielki",
      "Jan Olbracht",
      "Aleksander Jagiellończyk",
      "Zygmunt Luksemburski",
      "Ludwik Węgierski"
    ],
    "answer": 0,
    "explanation": "Po śmierci Jagiełły na tronie zasiadł jego dziesięcioletni syn Władysław III."
  },
  {
    "id": "R07_JAG_02",
    "section": "Czasy świetności dynastii Jagiellonów",
    "type": "fill_in",
    "prompt": "Władysław III otrzymał przydomek __________, ponieważ zginął w 1444 roku w bitwie pod __________.",
    "options": null,
    "answer": [
      "Warneńczyk",
      "Warną"
    ],
    "altAnswers": [
      [
        "Warneńczyk",
        "Warnenczyk",
        "Władysław Warneńczyk",
        "Wladyslaw Warnenczyk"
      ],
      [
        "Warną",
        "Warna",
        "Warnie"
      ]
    ],
    "image": "/img/r07_bitwa_warna.jpg",
    "explanation": "Król Polski i Węgier poległ w bitwie z Turkami pod Warną, dlatego przeszedł do historii jako Władysław Warneńczyk."
  },
  {
    "id": "R07_JAG_03",
    "section": "Czasy świetności dynastii Jagiellonów",
    "type": "true_false",
    "prompt": "Po bitwie pod Warną ciało króla Władysława III zostało szybko odnalezione i uroczyście pochowane w Krakowie.",
    "options": null,
    "answer": false,
    "image": "/img/r07_bitwa_warna.jpg",
    "explanation": "Po bitwie ciała króla nie odnaleziono, co stało się źródłem późniejszych plotek o jego ocaleniu."
  },
  {
    "id": "R07_JAG_04",
    "section": "Czasy świetności dynastii Jagiellonów",
    "type": "multi_select",
    "prompt": "Zaznacz działania Kazimierza Jagiellończyka opisane w podręczniku.",
    "options": [
      "Ograniczył wpływy Zbigniewa Oleśnickiego",
      "Oparł rządy na średniozamożnym rycerstwie",
      "Zapewnił sobie wpływ na obsadę wyższych stanowisk kościelnych",
      "Oddał Pomorze Gdańskie Krzyżakom",
      "Zrezygnował z tytułu króla Polski",
      "Zakazał działalności Akademii Krakowskiej"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Kazimierz Jagiellończyk ograniczył znaczenie części możnowładców, korzystał ze wsparcia średniozamożnego rycerstwa i wpływał na nominacje biskupów."
  },
  {
    "id": "R07_JAG_05",
    "section": "Czasy świetności dynastii Jagiellonów",
    "type": "single_choice",
    "prompt": "Jak nazywała się organizacja rycerstwa i miast pruskich niezadowolonych z rządów Krzyżaków?",
    "options": [
      "Związek Pruski",
      "Związek Litewski",
      "Rada Opiekuńcza",
      "Sejm Walny",
      "Akademia Krakowska",
      "Grupa Wyszehradzka"
    ],
    "answer": 0,
    "image": "/img/r07_wojna_trzynastoletnia.jpg",
    "explanation": "Rycerze i mieszczanie pruscy założyli Związek Pruski, który szukał oparcia w Królestwie Polskim."
  },
  {
    "id": "R07_JAG_06",
    "section": "Czasy świetności dynastii Jagiellonów",
    "type": "true_false",
    "prompt": "W 1457 roku Polacy zdobyli zamek w Malborku szturmem po długiej bitwie.",
    "options": null,
    "answer": false,
    "image": "/img/r07_krzyzacy_malbork.jpg",
    "explanation": "Według podręcznika Malbork nie został zdobyty zbrojnie; Polacy wykupili go od wojsk najemnych, którym Krzyżacy zalegali z żołdem."
  },
  {
    "id": "R07_JAG_07",
    "section": "Czasy świetności dynastii Jagiellonów",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "II pokój toruński",
      "Wybuch wojny trzynastoletniej",
      "Śmierć Władysława Warneńczyka pod Warną",
      "Objęcie tronu Polski przez Kazimierza Jagiellończyka"
    ],
    "answer": [
      "Śmierć Władysława Warneńczyka pod Warną",
      "Objęcie tronu Polski przez Kazimierza Jagiellończyka",
      "Wybuch wojny trzynastoletniej",
      "II pokój toruński"
    ],
    "image": "/img/r07_wojna_trzynastoletnia.jpg",
    "explanation": "Władysław zginął w 1444 roku, Kazimierz objął tron w 1447 roku, wojna zaczęła się w 1454 roku, a II pokój toruński zawarto w 1466 roku."
  },
  {
    "id": "R07_JAG_08",
    "section": "Czasy świetności dynastii Jagiellonów",
    "type": "multi_select",
    "prompt": "Zaznacz postanowienia II pokoju toruńskiego z 1466 roku.",
    "options": [
      "Polska odzyskała Pomorze Gdańskie z Malborkiem",
      "Polska odzyskała ziemię chełmińską",
      "Polska otrzymała biskupstwo warmińskie",
      "Państwo zakonne stało się lennem Polski",
      "Polska oddała Krzyżakom Kujawy",
      "Litwa utraciła Żmudź"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "II pokój toruński przyniósł Polsce Prusy Królewskie, a pozostałe państwo zakonne stało się lennem Polski."
  },
  {
    "id": "R07_JAG_09",
    "section": "Czasy świetności dynastii Jagiellonów",
    "type": "sort",
    "prompt": "Przyporządkuj osoby do ich roli lub wydarzenia.",
    "options": null,
    "items": [
      "Zbigniew Oleśnicki",
      "Jan Bażyński",
      "Elżbieta Habsburżanka",
      "Władysław Jagiellończyk",
      "Ludwik",
      "Władysław Warneńczyk"
    ],
    "categories": [
      "polityka Polski i Prus",
      "dynastia Jagiellonów"
    ],
    "answer": {
      "polityka Polski i Prus": [
        "Zbigniew Oleśnicki",
        "Jan Bażyński"
      ],
      "dynastia Jagiellonów": [
        "Elżbieta Habsburżanka",
        "Władysław Jagiellończyk",
        "Ludwik",
        "Władysław Warneńczyk"
      ]
    },
    "explanation": "Oleśnicki i Bażyński wiążą się z polityką wewnętrzną oraz Związkiem Pruskim, a pozostałe postacie z dziejami dynastii Jagiellonów."
  },
  {
    "id": "R07_JAG_10",
    "section": "Czasy świetności dynastii Jagiellonów",
    "type": "single_choice",
    "prompt": "W których państwach na przełomie XV i XVI wieku panowali przedstawiciele dynastii Jagiellonów?",
    "options": [
      "W Polsce, Litwie, Czechach i na Węgrzech",
      "W Polsce, Danii, Szwecji i Norwegii",
      "W Czechach, Rusi, Bizancjum i Prusach",
      "Na Litwie, w Turcji, Mołdawii i Austrii",
      "W Polsce, Francji, Anglii i Hiszpanii",
      "W Prusach, Brandenburgii, Saksonii i Bawarii"
    ],
    "answer": 0,
    "explanation": "Pod koniec XV wieku Jagiellonowie osiągnęli szczyt świetności, panując w Polsce, Litwie, Czechach i na Węgrzech."
  },
  {
    "id": "R07_MON_01",
    "section": "Monarchia stanowa w Polsce",
    "type": "single_choice",
    "prompt": "Jak nazywamy ustrój, w którym państwo było uznawane za prywatną i dziedziczną własność władcy?",
    "options": [
      "monarchia patrymonialna",
      "monarchia stanowa",
      "unia personalna",
      "republika miejska",
      "państwo zakonne",
      "monarchia elekcyjna"
    ],
    "answer": 0,
    "explanation": "W monarchii patrymonialnej panujący traktował państwo jak ojcowiznę, czyli dziedziczny majątek."
  },
  {
    "id": "R07_MON_02",
    "section": "Monarchia stanowa w Polsce",
    "type": "multi_select",
    "prompt": "Zaznacz stany społeczne wymienione w podręczniku jako podstawowe grupy społeczeństwa w Polsce.",
    "options": [
      "duchowieństwo",
      "rycerstwo",
      "mieszczaństwo",
      "chłopstwo",
      "marynarze",
      "kalifowie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W Polsce wykształciły się cztery stany: duchowieństwo, rycerstwo, mieszczaństwo i chłopstwo."
  },
  {
    "id": "R07_MON_03",
    "section": "Monarchia stanowa w Polsce",
    "type": "true_false",
    "prompt": "Monarchia stanowa oznaczała wzmocnienie nieograniczonej władzy króla nad wszystkimi stanami.",
    "options": null,
    "answer": false,
    "explanation": "W monarchii stanowej władza monarchy była ograniczana przez prawa i przywileje stanów."
  },
  {
    "id": "R07_MON_04",
    "section": "Monarchia stanowa w Polsce",
    "type": "riddle",
    "prompt": "Przymusowa praca chłopa na polu właściciela gruntu w zamian za możliwość użytkowania ziemi to...",
    "options": null,
    "answer": "pańszczyzna",
    "altAnswers": [
      "pańszczyzna",
      "panszczyzna"
    ],
    "explanation": "Chłopi osiedlani w majątkach szlacheckich musieli za użytkowanie ziemi odrabiać pańszczyznę."
  },
  {
    "id": "R07_MON_05",
    "section": "Monarchia stanowa w Polsce",
    "type": "match",
    "prompt": "Połącz przywilej lub konstytucję z jego znaczeniem.",
    "options": null,
    "left": [
      "Przywilej koszycki",
      "Przywilej jedlneńsko-krakowski",
      "Przywilej piotrkowski",
      "Konstytucja Nihil novi"
    ],
    "right": [
      "obniżenie podatków dla szlachty",
      "zakaz uwięzienia szlachcica bez wyroku sądu",
      "zakaz obejmowania urzędów przez mieszczan",
      "brak nowych praw bez zgody senatu i posłów"
    ],
    "answer": {
      "Przywilej koszycki": "obniżenie podatków dla szlachty",
      "Przywilej jedlneńsko-krakowski": "zakaz uwięzienia szlachcica bez wyroku sądu",
      "Przywilej piotrkowski": "zakaz obejmowania urzędów przez mieszczan",
      "Konstytucja Nihil novi": "brak nowych praw bez zgody senatu i posłów"
    },
    "image": "/img/r07_przywilej_szlachecki.jpg",
    "explanation": "Kolejne przywileje wzmacniały szlachtę, a Nihil novi potwierdziła jej wpływ na stanowienie prawa."
  },
  {
    "id": "R07_MON_06",
    "section": "Monarchia stanowa w Polsce",
    "type": "fill_in",
    "prompt": "Pierwszy przywilej dotyczący całej szlachty polskiej nadał w 1374 roku w Koszycach król __________.",
    "options": null,
    "answer": [
      "Ludwik Węgierski"
    ],
    "altAnswers": [
      [
        "Ludwik Węgierski",
        "Ludwik Wegierski",
        "Ludwik",
        "Ludwik Andegaweński",
        "Ludwik Andegawenski"
      ]
    ],
    "image": "/img/r07_przywilej_szlachecki.jpg",
    "explanation": "Ludwik Węgierski obniżył podatki szlachty i uzyskał jej zgodę, aby po jego śmierci tron mogła odziedziczyć jedna z córek."
  },
  {
    "id": "R07_MON_07",
    "section": "Monarchia stanowa w Polsce",
    "type": "single_choice",
    "prompt": "Kiedy po raz pierwszy zwołano sejm walny?",
    "options": [
      "w 1493 roku",
      "w 1138 roku",
      "w 1320 roku",
      "w 1374 roku",
      "w 1410 roku",
      "w 1466 roku"
    ],
    "answer": 0,
    "image": "/img/r07_szlachta_sejm.jpg",
    "explanation": "Sejm walny po raz pierwszy zwołano w 1493 roku; uczestniczyli w nim władca, senatorowie i przedstawiciele szlachty."
  },
  {
    "id": "R07_MON_08",
    "section": "Monarchia stanowa w Polsce",
    "type": "scenario",
    "prompt": "Szlachcic chce zwiększyć dochody z majątku. Zamiast wypraw wojennych wybiera uprawę ziemi i sprzedaż zboża, a chłopi pracują w jego polu. Jakie zjawisko opisuje ta sytuacja?",
    "options": [
      "przekształcanie rycerstwa w szlachtę ziemiańską",
      "utworzenie państwa krzyżackiego",
      "chrzest Litwy",
      "zjazd monarchów w Krakowie",
      "koronację Wacława II",
      "powstanie Akademii Krakowskiej"
    ],
    "answer": 0,
    "explanation": "W XIV i XV wieku rycerstwo coraz częściej zarządzało majątkami ziemskimi, co sprzyjało powstaniu stanu szlacheckiego."
  },
  {
    "id": "R07_MON_09",
    "section": "Monarchia stanowa w Polsce",
    "type": "single_choice",
    "prompt": "Kto najczęściej przewodniczył obradom senatu w sejmie walnym?",
    "options": [
      "król",
      "marszałek sejmu",
      "wielki mistrz",
      "biskup krakowski",
      "komtur",
      "sołtys"
    ],
    "answer": 0,
    "image": "/img/r07_szlachta_sejm.jpg",
    "explanation": "Senat wywodził się z rady królewskiej, a jego obradom najczęściej przewodniczył król."
  },
  {
    "id": "R07_MON_10",
    "section": "Monarchia stanowa w Polsce",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: senat, izba poselska, marszałek sejmu, wielki mistrz.",
    "options": null,
    "answer": "wielki mistrz",
    "image": "/img/r07_szlachta_sejm.jpg",
    "explanation": "Senat, izba poselska i marszałek sejmu wiążą się z sejmem walnym, a wielki mistrz był zwierzchnikiem zakonu krzyżackiego."
  },
  {
    "id": "R07_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które wydarzenie podręcznik uznaje za ostateczny upadek zwierzchniej władzy seniora nad pozostałymi Piastami?",
    "options": [
      "zamordowanie Leszka Białego po zjeździe w Gąsawie",
      "koronację Wacława II w Gnieźnie",
      "bitwę pod Płowcami",
      "pokój w Kaliszu",
      "założenie Akademii Krakowskiej",
      "przywilej koszycki"
    ],
    "answer": 0,
    "image": "/img/r07_podzial_polski_dzielnice.jpg",
    "explanation": "Śmierć Leszka Białego w 1227 roku jest w podręczniku wskazana jako ostateczny upadek władzy zwierzchniej seniora."
  },
  {
    "id": "R07_HARD_02",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Kazimierz Sprawiedliwy objął władzę w Krakowie zgodnie z zasadą senioratu, ponieważ był najstarszym synem Bolesława Krzywoustego.",
    "options": null,
    "answer": false,
    "explanation": "Kazimierz Sprawiedliwy był najmłodszym synem Krzywoustego, a jego rządy w Krakowie oznaczały złamanie zasady senioratu."
  },
  {
    "id": "R07_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W 1321 roku sąd __________ nakazał Krzyżakom zwrócenie Polsce __________.",
    "options": null,
    "answer": [
      "papieski",
      "Pomorza Gdańskiego"
    ],
    "altAnswers": [
      [
        "papieski",
        "papieskiego"
      ],
      [
        "Pomorza Gdańskiego",
        "Pomorze Gdańskie",
        "Pomorza Gdanskiego",
        "Pomorze Gdanskie"
      ]
    ],
    "explanation": "Sąd papieski przyznał Polsce rację, ale zakon krzyżacki nie zastosował się do wyroku."
  },
  {
    "id": "R07_HARD_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz ziemie, które według podręcznika pozostały poza granicami państwa odbudowanego przez Władysława Łokietka.",
    "options": [
      "Pomorze Gdańskie",
      "księstwa śląskie",
      "Mazowsze",
      "Małopolska",
      "Wielkopolska",
      "ziemia sieradzko-łęczycka"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Poza państwem Łokietka pozostały Pomorze Gdańskie zajęte przez Krzyżaków, księstwa śląskie zależne od Czech oraz Mazowsze lokalnych książąt."
  },
  {
    "id": "R07_HARD_05",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który tytuł zachował Kazimierz Wielki po pokoju z Krzyżakami, aby w przyszłości móc ubiegać się o odzyskanie Pomorza?",
    "options": [
      "pana i dziedzica Pomorza",
      "wielkiego księcia Litwy",
      "seniora i króla Czech",
      "komtura ziemi chełmińskiej",
      "króla Węgier i Cypru",
      "obrońcy Żmudzi"
    ],
    "answer": 0,
    "explanation": "Chociaż Krzyżacy zatrzymali Pomorze Gdańskie, Kazimierz zachował tytuł pana i dziedzica Pomorza."
  },
  {
    "id": "R07_HARD_06",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: prawnicy, dyplomaci, lekarze, komturowie.",
    "options": null,
    "answer": "komturowie",
    "explanation": "Akademia Krakowska kształciła prawników, dyplomatów i lekarzy, a komturowie byli urzędnikami terytorialnymi w państwie krzyżackim."
  },
  {
    "id": "R07_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Uczestniczysz w soborze w Konstancji i słyszysz uczonego z Krakowa, który dowodzi, że nie wolno nawracać przemocą. Kto wygłasza takie poglądy w polskiej delegacji?",
    "options": [
      "Paweł Włodkowic",
      "Jakub Świnka",
      "Zawisza z Oleśnicy",
      "Mikołaj Wierzynek",
      "Jan Bażyński",
      "Zbigniew Oleśnicki"
    ],
    "answer": 0,
    "explanation": "Paweł Włodkowic występował w Konstancji przeciw przemocy Krzyżaków i bronił prawa każdego człowieka do własnej religii."
  },
  {
    "id": "R07_HARD_08",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Unia w Horodle zakładała, że Polska i Litwa zachowają odrębność, ale będą ściśle współpracować i uzgadniać wybór nowego władcy.",
    "options": null,
    "answer": true,
    "explanation": "W 1413 roku w Horodle doprecyzowano relacje między państwami, zachowując odrębność i wprowadzając ściślejszą współpracę."
  },
  {
    "id": "R07_HARD_09",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W 1454 roku prośbę o przyłączenie Prus do Polski w imieniu Związku Pruskiego przedstawił __________.",
    "options": null,
    "answer": [
      "Jan Bażyński"
    ],
    "altAnswers": [
      [
        "Jan Bażyński",
        "Jana Bażyńskiego",
        "Jan Bazynski",
        "Jana Bazynskiego"
      ]
    ],
    "explanation": "Jan Bażyński przemawiał do Kazimierza Jagiellończyka jako przedstawiciel Związku Pruskiego."
  },
  {
    "id": "R07_HARD_10",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który skutek II pokoju toruńskiego najlepiej pokazuje podporządkowanie pozostałego państwa zakonu Polsce?",
    "options": [
      "Wielki mistrz musiał złożyć hołd królowi Polski",
      "Polska oddała zakonowi Kraków",
      "Litwa utraciła Żmudź",
      "Władysław Warneńczyk został królem Węgier",
      "Kazimierz Wielki założył Akademię Krakowską",
      "Zakon odzyskał Pomorze Gdańskie"
    ],
    "answer": 0,
    "explanation": "Po II pokoju toruńskim Prusy Zakonne stały się lennem Polski, a wielki mistrz miał składać hołd polskiemu królowi."
  },
  {
    "id": "R07_HARD_11",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz uprawnienia szlachty wynikające z przywilejów pokazanych w infografice.",
    "options": [
      "brak nowych podatków bez zgody rycerstwa",
      "zakaz uwięzienia szlachcica bez wyroku sądu",
      "brak nowych praw bez zgody senatu i posłów",
      "obowiązek płacenia przez szlachtę wszystkich ceł",
      "prawo mieszczan do wszystkich urzędów",
      "zgoda sejmików na zwołanie wojska"
    ],
    "answer": [
      0,
      1,
      2,
      5
    ],
    "explanation": "Przywileje ograniczały samowolę monarchy w podatkach, sądownictwie, wojnie i prawodawstwie."
  },
  {
    "id": "R07_HARD_12",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż akty i wydarzenia ustrojowe w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Konstytucja Nihil novi",
      "Przywilej koszycki",
      "Pierwsze zwołanie sejmu walnego",
      "Przywilej piotrkowski"
    ],
    "answer": [
      "Przywilej koszycki",
      "Pierwsze zwołanie sejmu walnego",
      "Przywilej piotrkowski",
      "Konstytucja Nihil novi"
    ],
    "explanation": "Przywilej koszycki nadano w 1374 roku, sejm walny zwołano po raz pierwszy w 1493 roku, przywilej piotrkowski w 1496 roku, a Nihil novi uchwalono w 1505 roku."
  }
];

const KID_PROMPTS = {};

const chapter = {
  "id": "r07",
  "number": 7,
  "title": "Polska w XIII–XV wieku",
  "icon": "👑",
  "sectionOrder": [
    "Rozbicie dzielnicowe",
    "Zjednoczenie Polski",
    "Czasy Kazimierza Wielkiego",
    "Unia polsko-litewska",
    "Czasy świetności dynastii Jagiellonów",
    "Monarchia stanowa w Polsce",
    "Super trudne"
  ],
  "sectionIcons": {
    "Rozbicie dzielnicowe": "🧩",
    "Zjednoczenie Polski": "👑",
    "Czasy Kazimierza Wielkiego": "🏰",
    "Unia polsko-litewska": "🤝",
    "Czasy świetności dynastii Jagiellonów": "🦅",
    "Monarchia stanowa w Polsce": "📜",
    "Super trudne": "🔥"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
