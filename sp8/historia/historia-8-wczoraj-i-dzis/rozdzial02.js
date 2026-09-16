// Skróty sekcji (do identyfikatorów ćwiczeń):
//   OKU = Dwie okupacje
//   UCH = Władze na uchodźstwie i Polacy na frontach
//   POD = Polskie Państwo Podziemne
//   SPO = Społeczeństwo pod okupacją
//   BUR = Od akcji "Burza" do końca wojny
//   HARD = Super trudne
const ALL_EXERCISES = [
  {
    "id": "R02_OKU_01",
    "section": "Dwie okupacje",
    "type": "single_choice",
    "prompt": "Na jaką rzekę przesunięto we wrześniu 1939 r. linię graniczną między niemiecką i sowiecką strefą okupacyjną?",
    "options": [
      "Wisłę",
      "Bug",
      "Narew",
      "San",
      "Niemen",
      "Odrę"
    ],
    "answer": 1,
    "image": "r02_mapa_dwoch_okupacji.jpg",
    "explanation": "Traktat niemiecko-sowiecki z 28 września 1939 r. przesunął linię podziału ziem polskich z Wisły na Bug."
  },
  {
    "id": "R02_OKU_02",
    "section": "Dwie okupacje",
    "type": "multi_select",
    "prompt": "Zaznacz ziemie włączone bezpośrednio do III Rzeszy po klęsce Polski w 1939 r.",
    "options": [
      "Pomorze Gdańskie",
      "Suwalszczyzna",
      "ziemia łódzka",
      "Małopolska",
      "część Wielkopolski",
      "Polesie Lubelskie"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Do III Rzeszy wcielono m.in. Pomorze Gdańskie, Suwalszczyznę, ziemię łódzką oraz część Wielkopolski, Mazowsza i Górnego Śląska."
  },
  {
    "id": "R02_OKU_03",
    "section": "Dwie okupacje",
    "type": "true_false",
    "prompt": "Hans Frank był gubernatorem Generalnego Gubernatorstwa i urzędował na Wawelu w Krakowie.",
    "options": null,
    "answer": true,
    "explanation": "Generalnym Gubernatorstwem kierował Hans Frank, którego siedziba znajdowała się na Wawelu w Krakowie."
  },
  {
    "id": "R02_OKU_04",
    "section": "Dwie okupacje",
    "type": "fill_in",
    "prompt": "Na ziemiach wcielonych do III Rzeszy około __________ tys. Polaków pozbawiono majątku i wysiedlono do Generalnego Gubernatorstwa lub wywieziono na przymusowe prace do Niemiec.",
    "options": null,
    "answer": [
      "900"
    ],
    "altAnswers": [
      [
        "900",
        "900 tys."
      ]
    ],
    "image": "r02_wysiedlenie_polakow.jpg",
    "explanation": "Wysiedlenia objęły około 900 tys. Polaków z ziem wcielonych do III Rzeszy."
  },
  {
    "id": "R02_OKU_05",
    "section": "Dwie okupacje",
    "type": "sort",
    "prompt": "Przyporządkuj działania do okupacji niemieckiej albo sowieckiej.",
    "options": null,
    "items": [
      "akcja AB",
      "łapanki",
      "germanizacja",
      "paszportyzacja",
      "kolektywizacja",
      "deportacje do Kazachstanu i na Syberię"
    ],
    "categories": [
      "okupacja niemiecka",
      "okupacja sowiecka"
    ],
    "answer": {
      "okupacja niemiecka": [
        "akcja AB",
        "łapanki",
        "germanizacja"
      ],
      "okupacja sowiecka": [
        "paszportyzacja",
        "kolektywizacja",
        "deportacje do Kazachstanu i na Syberię"
      ]
    },
    "explanation": "Okupacja niemiecka obejmowała m.in. akcję \"AB\", łapanki i germanizację, a sowiecka - paszportyzację, kolektywizację i deportacje w głąb ZSRS."
  },
  {
    "id": "R02_OKU_06",
    "section": "Dwie okupacje",
    "type": "single_choice",
    "prompt": "Jaki był główny cel niemieckiej akcji \"AB\" rozpoczętej wiosną 1940 r.?",
    "options": [
      "zniszczenie polskich elit",
      "utworzenie polskiej administracji",
      "zwiększenie liczby szkół polskich",
      "uwolnienie jeńców wojennych",
      "przeniesienie rządu do Krakowa",
      "odbudowa polskiego przemysłu"
    ],
    "answer": 0,
    "explanation": "Akcja \"AB\" była wymierzona w polskie elity. Niemcy mordowali i wysyłali do obozów koncentracyjnych przedstawicieli inteligencji oraz duchowieństwa."
  },
  {
    "id": "R02_OKU_07",
    "section": "Dwie okupacje",
    "type": "match",
    "prompt": "Połącz pojęcie dotyczące okupacji sowieckiej z jego znaczeniem.",
    "options": null,
    "left": [
      "sowietyzacja",
      "nacjonalizacja",
      "kolektywizacja",
      "łagier"
    ],
    "right": [
      "narzucanie ideologii komunistycznej",
      "przejęcie prywatnego majątku przez państwo",
      "przekazywanie własności do wspólnego zarządzania",
      "ciężki obóz pracy przymusowej w ZSRS"
    ],
    "answer": {
      "sowietyzacja": "narzucanie ideologii komunistycznej",
      "nacjonalizacja": "przejęcie prywatnego majątku przez państwo",
      "kolektywizacja": "przekazywanie własności do wspólnego zarządzania",
      "łagier": "ciężki obóz pracy przymusowej w ZSRS"
    },
    "explanation": "Sowietyzacja oznaczała narzucanie ideologii komunistycznej; nacjonalizacja przejęcie prywatnego majątku przez państwo; kolektywizacja przekazywanie własności do wspólnego zarządzania; łagier był ciężkim obozem pracy przymusowej w ZSRS."
  },
  {
    "id": "R02_OKU_08",
    "section": "Dwie okupacje",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "zbrodnia katyńska",
      "agresja Niemiec na ZSRS",
      "traktat niemiecko-sowiecki o granicach i przyjaźni",
      "początek masowych deportacji w głąb ZSRS"
    ],
    "answer": [
      "traktat niemiecko-sowiecki o granicach i przyjaźni",
      "początek masowych deportacji w głąb ZSRS",
      "zbrodnia katyńska",
      "agresja Niemiec na ZSRS"
    ],
    "explanation": "Najpierw podpisano traktat o granicach i przyjaźni, potem rozpoczęły się masowe deportacje, następnie dokonano zbrodni katyńskiej, a w 1941 r. Niemcy zaatakowały ZSRS."
  },
  {
    "id": "R02_OKU_09",
    "section": "Dwie okupacje",
    "type": "riddle",
    "prompt": "Ciężki obóz pracy przymusowej w ZSRS, w którym więźniowie pracowali m.in. w kopalniach i przy wyrębie lasu, to...",
    "options": null,
    "answer": "łagier",
    "altAnswers": [
      "łagier",
      "lagier"
    ],
    "explanation": "Łagry były obozami pracy przymusowej w ZSRS; panowały w nich bardzo trudne warunki bytowe i klimatyczne."
  },
  {
    "id": "R02_OKU_10",
    "section": "Dwie okupacje",
    "type": "odd_one_out",
    "prompt": "Wskaż miejsce, które nie było miejscem kaźni Polaków na terenach okupowanych przez Niemcy: Stutthof, Piaśnica, Fort VII w Poznaniu, Kozielsk.",
    "options": null,
    "answer": "Kozielsk",
    "explanation": "Stutthof, Piaśnica i Fort VII były miejscami niemieckiego terroru. Kozielsk był sowieckim obozem, w którym przetrzymywano polskich jeńców."
  },
  {
    "id": "R02_OKU_11",
    "section": "Dwie okupacje",
    "type": "scenario",
    "prompt": "Nad ranem do mieszkania wkracza NKWD. Rodzina dostaje godzinę na spakowanie najpotrzebniejszych rzeczy, a następnie zostaje przewieziona pociągiem w głąb ZSRS. O jakie działanie władz sowieckich chodzi?",
    "options": [
      "masową deportację",
      "kolektywizację",
      "akcję AB",
      "łapankę uliczną",
      "germanizację",
      "akcję dywersyjną"
    ],
    "answer": 0,
    "image": "r02_deportacja_na_wschod.jpg",
    "explanation": "Sowieci przeprowadzali masowe deportacje całych rodzin, kierując je głównie do Kazachstanu i na Syberię."
  },
  {
    "id": "R02_UCH_01",
    "section": "Władze na uchodźstwie i Polacy na frontach",
    "type": "single_choice",
    "prompt": "Kto został prezydentem Rzeczypospolitej Polskiej na uchodźstwie 30 września 1939 r.?",
    "options": [
      "Władysław Raczkiewicz",
      "Władysław Sikorski",
      "Stanisław Mikołajczyk",
      "Kazimierz Sosnkowski",
      "Władysław Anders",
      "Edward Osóbka-Morawski"
    ],
    "answer": 0,
    "image": "r02_rzad_na_uchodzstwie.jpg",
    "explanation": "Ignacy Mościcki wyznaczył na swojego następcę Władysława Raczkiewicza, który złożył przysięgę 30 września 1939 r."
  },
  {
    "id": "R02_UCH_02",
    "section": "Władze na uchodźstwie i Polacy na frontach",
    "type": "match",
    "prompt": "Połącz postać z funkcją lub rolą pełnioną w czasie wojny.",
    "options": null,
    "left": [
      "Władysław Raczkiewicz",
      "Władysław Sikorski",
      "Władysław Anders",
      "Zygmunt Berling"
    ],
    "right": [
      "prezydent RP na uchodźstwie",
      "premier i Naczelny Wódz",
      "dowódca Armii Polskiej w ZSRS",
      "dowódca 1. Dywizji Piechoty im. Tadeusza Kościuszki"
    ],
    "answer": {
      "Władysław Raczkiewicz": "prezydent RP na uchodźstwie",
      "Władysław Sikorski": "premier i Naczelny Wódz",
      "Władysław Anders": "dowódca Armii Polskiej w ZSRS",
      "Zygmunt Berling": "dowódca 1. Dywizji Piechoty im. Tadeusza Kościuszki"
    },
    "explanation": "Raczkiewicz został prezydentem RP, Sikorski premierem i Naczelnym Wodzem, Anders dowodził armią utworzoną w ZSRS, a Berling 1. Dywizją Piechoty im. Tadeusza Kościuszki."
  },
  {
    "id": "R02_UCH_03",
    "section": "Władze na uchodźstwie i Polacy na frontach",
    "type": "single_choice",
    "prompt": "Gdzie przeniesiono siedzibę polskiego rządu na uchodźstwie po zajęciu Francji przez Niemców?",
    "options": [
      "Londyn",
      "Angers",
      "Moskwa",
      "Gibraltar",
      "Gdynia",
      "Aleksandria"
    ],
    "answer": 0,
    "image": "r02_rzad_na_uchodzstwie.jpg",
    "explanation": "Po upadku Francji siedzibą polskich władz emigracyjnych został Londyn."
  },
  {
    "id": "R02_UCH_04",
    "section": "Władze na uchodźstwie i Polacy na frontach",
    "type": "true_false",
    "prompt": "W ciągu kilku miesięcy Władysław Sikorski stworzył we Francji armię liczącą około 85 tys. żołnierzy.",
    "options": null,
    "answer": true,
    "explanation": "Armia Polska we Francji liczyła około 85 tys. żołnierzy i wzięła udział w obronie Francji w 1940 r."
  },
  {
    "id": "R02_UCH_05",
    "section": "Władze na uchodźstwie i Polacy na frontach",
    "type": "match",
    "prompt": "Połącz polską jednostkę z miejscem lub bitwą, z którą jest szczególnie związana.",
    "options": null,
    "left": [
      "Dywizjon 303",
      "1. Dywizja Pancerna",
      "2. Korpus Polskich Sił Zbrojnych",
      "1. Samodzielna Brygada Spadochronowa",
      "Samodzielna Brygada Strzelców Karpackich"
    ],
    "right": [
      "bitwa o Anglię",
      "Falaise",
      "Monte Cassino",
      "Arnhem",
      "Tobruk"
    ],
    "answer": {
      "Dywizjon 303": "bitwa o Anglię",
      "1. Dywizja Pancerna": "Falaise",
      "2. Korpus Polskich Sił Zbrojnych": "Monte Cassino",
      "1. Samodzielna Brygada Spadochronowa": "Arnhem",
      "Samodzielna Brygada Strzelców Karpackich": "Tobruk"
    },
    "image": "r02_dywizjon_303.jpg",
    "explanation": "Polskie formacje walczyły na wielu frontach: Dywizjon 303 w bitwie o Anglię, 1. Dywizja Pancerna pod Falaise, 2. Korpus pod Monte Cassino, spadochroniarze pod Arnhem, a Strzelcy Karpaccy pod Tobrukiem."
  },
  {
    "id": "R02_UCH_06",
    "section": "Władze na uchodźstwie i Polacy na frontach",
    "type": "multi_select",
    "prompt": "Zaznacz postanowienia układu Sikorski-Majski z 30 lipca 1941 r.",
    "options": [
      "przywrócenie stosunków dyplomatycznych",
      "wzajemna pomoc w walce z Niemcami",
      "utworzenie polskiej armii w ZSRS",
      "ogłoszenie amnestii dla więzionych Polaków",
      "gwarancja granicy z 1921 r.",
      "oficjalne przeprosiny ZSRS za agresję z 1939 r."
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Układ przywrócił stosunki dyplomatyczne, przewidywał wzajemną pomoc w walce z Niemcami, zgodę na tworzenie polskiej armii w ZSRS, anulowanie sowiecko-niemieckich ustaleń dotyczących Polski i zwolnienie Polaków z łagrów oraz więzień."
  },
  {
    "id": "R02_UCH_07",
    "section": "Władze na uchodźstwie i Polacy na frontach",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia dotyczące stosunków polsko-sowieckich w kolejności chronologicznej.",
    "options": null,
    "items": [
      "ewakuacja armii Andersa z ZSRS",
      "śmierć Władysława Sikorskiego",
      "podpisanie układu Sikorski-Majski",
      "agresja Niemiec na ZSRS",
      "ujawnienie grobów katyńskich przez Niemców"
    ],
    "answer": [
      "agresja Niemiec na ZSRS",
      "podpisanie układu Sikorski-Majski",
      "ewakuacja armii Andersa z ZSRS",
      "ujawnienie grobów katyńskich przez Niemców",
      "śmierć Władysława Sikorskiego"
    ],
    "explanation": "Agresja Niemiec na ZSRS otworzyła drogę do układu Sikorski-Majski; później ewakuowano armię Andersa, następnie ujawniono groby katyńskie, a 4 lipca 1943 r. zginął Sikorski."
  },
  {
    "id": "R02_UCH_08",
    "section": "Władze na uchodźstwie i Polacy na frontach",
    "type": "fill_in",
    "prompt": "Do sierpnia __________ r. cała armia Andersa została ewakuowana z ZSRS na Bliski Wschód.",
    "options": null,
    "answer": [
      "1942"
    ],
    "altAnswers": [
      [
        "1942",
        "1942 r."
      ]
    ],
    "explanation": "Armia Andersa opuściła ZSRS do sierpnia 1942 r. i została przeniesiona na Bliski Wschód."
  },
  {
    "id": "R02_UCH_09",
    "section": "Władze na uchodźstwie i Polacy na frontach",
    "type": "riddle",
    "prompt": "Polski niszczyciel zachowany do dziś jako statek muzeum i zacumowany w Gdyni to ORP...",
    "options": null,
    "answer": "Błyskawica",
    "altAnswers": [
      "Błyskawica",
      "ORP Błyskawica",
      "Blyskawica",
      "ORP Blyskawica"
    ],
    "image": "r02_blyskawica.jpg",
    "explanation": "ORP \"Błyskawica\" przetrwał wojnę i pełni funkcję statku muzeum w Gdyni."
  },
  {
    "id": "R02_UCH_10",
    "section": "Władze na uchodźstwie i Polacy na frontach",
    "type": "scenario",
    "prompt": "Maj 1944 r. Polscy żołnierze zdobywają silnie broniony klasztor na wzgórzu, otwierając aliantom drogę do Rzymu. Która formacja dokonała tego czynu?",
    "options": [
      "2. Korpus Polskich Sił Zbrojnych",
      "1. Dywizja Pancerna",
      "Dywizjon 303",
      "1. Samodzielna Brygada Spadochronowa",
      "1. Dywizja Piechoty im. Tadeusza Kościuszki",
      "Samodzielna Brygada Strzelców Karpackich"
    ],
    "answer": 0,
    "image": "r02_monte_cassino.jpg",
    "explanation": "Klasztor na Monte Cassino zdobył 2. Korpus Polskich Sił Zbrojnych dowodzony przez generała Władysława Andersa."
  },
  {
    "id": "R02_UCH_11",
    "section": "Władze na uchodźstwie i Polacy na frontach",
    "type": "odd_one_out",
    "prompt": "Wskaż osobę, która nie była związana z dowodzeniem polską formacją wojskową po stronie aliantów: Stanisław Maczek, Władysław Anders, Stanisław Sosabowski, Franz Kutschera.",
    "options": null,
    "answer": "Franz Kutschera",
    "explanation": "Maczek, Anders i Sosabowski dowodzili polskimi jednostkami wojskowymi. Franz Kutschera był niemieckim dowódcą SS i policji w dystrykcie warszawskim."
  },
  {
    "id": "R02_POD_01",
    "section": "Polskie Państwo Podziemne",
    "type": "sequence",
    "prompt": "Ułóż nazwy głównych organizacji wojskowych polskiego podziemia w kolejności ich powstawania.",
    "options": null,
    "items": [
      "Armia Krajowa",
      "Służba Zwycięstwu Polski",
      "Związek Walki Zbrojnej"
    ],
    "answer": [
      "Służba Zwycięstwu Polski",
      "Związek Walki Zbrojnej",
      "Armia Krajowa"
    ],
    "image": "r02_polska_walczaca.jpg",
    "explanation": "We wrześniu 1939 r. powstała Służba Zwycięstwu Polski, w listopadzie 1939 r. zastąpił ją Związek Walki Zbrojnej, a w lutym 1942 r. ZWZ przekształcono w Armię Krajową."
  },
  {
    "id": "R02_POD_02",
    "section": "Polskie Państwo Podziemne",
    "type": "single_choice",
    "prompt": "Kto w czerwcu 1940 r. został Komendantem Głównym Związku Walki Zbrojnej?",
    "options": [
      "Stefan Rowecki \"Grot\"",
      "Tadeusz Komorowski \"Bór\"",
      "Leopold Okulicki",
      "August Emil Fieldorf \"Nil\"",
      "Henryk Dobrzański \"Hubal\"",
      "Władysław Anders"
    ],
    "answer": 0,
    "explanation": "Komendantem Głównym ZWZ został generał Stefan Rowecki \"Grot\", późniejszy dowódca Armii Krajowej."
  },
  {
    "id": "R02_POD_03",
    "section": "Polskie Państwo Podziemne",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady walki cywilnej prowadzonej przez polskie podziemie.",
    "options": [
      "rozrzucanie ulotek",
      "nadawanie audycji radiowych",
      "malowanie antyniemieckich haseł",
      "uszkadzanie maszyn",
      "zbrojny atak na pociąg",
      "zamach na Franza Kutscherę"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r02_polska_walczaca.jpg",
    "explanation": "Do walki cywilnej należały akcje propagandowe i sabotaż, np. ulotki, audycje radiowe, antyniemieckie hasła oraz uszkadzanie maszyn i narzędzi."
  },
  {
    "id": "R02_POD_04",
    "section": "Polskie Państwo Podziemne",
    "type": "true_false",
    "prompt": "Kedyw był Kierownictwem Dywersji Komendy Głównej Armii Krajowej.",
    "options": null,
    "answer": true,
    "explanation": "Kedyw koordynował działania dywersyjne i podlegały mu wyspecjalizowane oddziały szturmowe oraz oddziały partyzanckie."
  },
  {
    "id": "R02_POD_05",
    "section": "Polskie Państwo Podziemne",
    "type": "match",
    "prompt": "Połącz grupę wiekową Szarych Szeregów z typowym zadaniem.",
    "options": null,
    "left": [
      "Zawiszacy",
      "Bojowe Szkoły",
      "Grupy Szturmowe"
    ],
    "right": [
      "służba pomocnicza",
      "mały sabotaż",
      "akcje dywersyjne"
    ],
    "answer": {
      "Zawiszacy": "służba pomocnicza",
      "Bojowe Szkoły": "mały sabotaż",
      "Grupy Szturmowe": "akcje dywersyjne"
    },
    "explanation": "Zawiszacy przygotowywali się do służby pomocniczej, Bojowe Szkoły prowadziły mały sabotaż, a Grupy Szturmowe brały udział w dywersji."
  },
  {
    "id": "R02_POD_06",
    "section": "Polskie Państwo Podziemne",
    "type": "single_choice",
    "prompt": "Dlaczego rząd na uchodźstwie wysyłał do kraju cichociemnych?",
    "options": [
      "aby uzupełnić braki oficerów i specjalistów",
      "aby organizować niemiecką administrację",
      "aby prowadzić legalne szkoły średnie",
      "aby przejąć dowództwo nad Armią Czerwoną",
      "aby tworzyć getta",
      "aby nadzorować wysiedlenia"
    ],
    "answer": 0,
    "explanation": "Polskiemu Państwu Podziemnemu brakowało oficerów i specjalistów. Cichociemni szkolili żołnierzy AK i brali udział w akcjach dywersyjnych."
  },
  {
    "id": "R02_POD_07",
    "section": "Polskie Państwo Podziemne",
    "type": "fill_in",
    "prompt": "Cywilne struktury Polskiego Państwa Podziemnego tworzyła przede wszystkim powołana w grudniu 1940 r. __________.",
    "options": null,
    "answer": [
      "Delegatura Rządu RP na Kraj"
    ],
    "altAnswers": [
      [
        "Delegatura Rządu RP na Kraj",
        "Delegatura Rządu Rzeczypospolitej Polskiej na Kraj"
      ]
    ],
    "explanation": "Delegatura Rządu RP na Kraj kierowała konspiracyjną administracją, a jej departamenty pełniły rolę ministerstw."
  },
  {
    "id": "R02_POD_08",
    "section": "Polskie Państwo Podziemne",
    "type": "scenario",
    "prompt": "W okupowanej Polsce uczysz się przedmiotów zakazanych przez Niemców w prywatnym mieszkaniu, a zajęcia prowadzi nauczyciel działający w konspiracji. Jak nazywano taki system nauczania?",
    "options": [
      "tajne komplety",
      "gadzinówka",
      "paszportyzacja",
      "kolektywizacja",
      "volkslista",
      "akcja Burza"
    ],
    "answer": 0,
    "explanation": "Tajne komplety obejmowały konspiracyjne szkolnictwo średnie i wyższe, prowadzone m.in. w prywatnych domach i mieszkaniach."
  },
  {
    "id": "R02_POD_09",
    "section": "Polskie Państwo Podziemne",
    "type": "odd_one_out",
    "prompt": "Wskaż działanie niezwiązane z akcjami polskiego podziemia: akcja pod Arsenałem, zamach na Franza Kutscherę, wysadzanie linii kolejowych, deportacja do Kazachstanu.",
    "options": null,
    "answer": "deportacja do Kazachstanu",
    "image": "r02_akcja_arsenal.jpg",
    "explanation": "Akcja pod Arsenałem, zamach na Kutscherę i dywersja kolejowa należały do działalności polskiego podziemia. Deportacje do Kazachstanu przeprowadzały władze sowieckie."
  },
  {
    "id": "R02_POD_10",
    "section": "Polskie Państwo Podziemne",
    "type": "match",
    "prompt": "Połącz działanie podziemia z jego celem lub skutkiem.",
    "options": null,
    "left": [
      "akcja pod Arsenałem",
      "akcja Główki",
      "wywiad dotyczący V-2",
      "sabotaż w fabrykach"
    ],
    "right": [
      "odbicie Jana Bytnara i innych więźniów",
      "zamachy na ważnych hitlerowców",
      "przekazanie aliantom informacji o nowej broni",
      "obniżanie wydajności i uszkadzanie maszyn"
    ],
    "answer": {
      "akcja pod Arsenałem": "odbicie Jana Bytnara i innych więźniów",
      "akcja Główki": "zamachy na ważnych hitlerowców",
      "wywiad dotyczący V-2": "przekazanie aliantom informacji o nowej broni",
      "sabotaż w fabrykach": "obniżanie wydajności i uszkadzanie maszyn"
    },
    "image": "r02_akcja_arsenal.jpg",
    "explanation": "Podziemie odbiło Jana Bytnara pod Arsenałem, wykonywało wyroki na zbrodniarzach w akcji \"Główki\", prowadziło wywiad nad V-2 i sabotowało niemiecką produkcję."
  },
  {
    "id": "R02_POD_11",
    "section": "Polskie Państwo Podziemne",
    "type": "single_choice",
    "prompt": "Który departament Delegatury Rządu RP na Kraj stworzył system tajnego szkolnictwa średniego i wyższego?",
    "options": [
      "Departament Oświaty i Kultury",
      "Departament Informacji",
      "Kedyw",
      "Związek Patriotów Polskich",
      "Rada Pomocy Żydom",
      "Polski Komitet Wyzwolenia Narodowego"
    ],
    "answer": 0,
    "explanation": "System tajnego nauczania organizował Departament Oświaty i Kultury."
  },
  {
    "id": "R02_SPO_01",
    "section": "Społeczeństwo pod okupacją",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady codziennego oporu Polaków wobec niemieckiego okupanta.",
    "options": [
      "wystawianie fałszywych zaświadczeń o niezdolności do pracy",
      "wystawianie świadectw chrztu ukrywającym się Żydom",
      "nielegalne słuchanie zachodnich audycji radiowych",
      "przekazywanie ulotek",
      "bojkotowanie kin z niemiecką propagandą",
      "wstępowanie do niemieckiej policji"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Opór przybierał także formy niezbrojne: fałszywe zaświadczenia lekarskie, świadectwa chrztu dla ukrywających się Żydów, słuchanie zachodnich audycji, kolportaż ulotek i bojkot kin."
  },
  {
    "id": "R02_SPO_02",
    "section": "Społeczeństwo pod okupacją",
    "type": "single_choice",
    "prompt": "W którym roku Niemcy rozpoczęli deportowanie ludności żydowskiej z gett do obozów zagłady?",
    "options": [
      "1942",
      "1939",
      "1940",
      "1941",
      "1943",
      "1944"
    ],
    "answer": 0,
    "explanation": "W 1942 r. hitlerowcy przystąpili do realizacji Holokaustu i rozpoczęli masowe deportacje Żydów do obozów zagłady."
  },
  {
    "id": "R02_SPO_03",
    "section": "Społeczeństwo pod okupacją",
    "type": "true_false",
    "prompt": "Powstanie w getcie warszawskim rozpoczęło się 19 kwietnia 1943 r.",
    "options": null,
    "answer": true,
    "image": "r02_getto_warszawskie.jpg",
    "explanation": "19 kwietnia 1943 r. oddziały SS wkroczyły do getta, a Żydowska Organizacja Bojowa podjęła walkę."
  },
  {
    "id": "R02_SPO_04",
    "section": "Społeczeństwo pod okupacją",
    "type": "fill_in",
    "prompt": "Na czele Żydowskiej Organizacji Bojowej podczas wybuchu powstania w getcie warszawskim stał __________.",
    "options": null,
    "answer": [
      "Mordechaj Anielewicz"
    ],
    "altAnswers": [
      [
        "Mordechaj Anielewicz",
        "Anielewicz"
      ]
    ],
    "image": "r02_getto_warszawskie.jpg",
    "explanation": "Żydowską Organizacją Bojową kierował Mordechaj Anielewicz; jednym z ocalałych i ostatnim dowódcą powstania był Marek Edelman."
  },
  {
    "id": "R02_SPO_05",
    "section": "Społeczeństwo pod okupacją",
    "type": "match",
    "prompt": "Połącz postać z działaniem na rzecz ludności żydowskiej lub informowaniem świata o zbrodniach.",
    "options": null,
    "left": [
      "Irena Sendlerowa",
      "Witold Pilecki",
      "Jan Karski",
      "Józef i Wiktoria Ulmowie"
    ],
    "right": [
      "ratowanie około 2500 dzieci z getta",
      "organizowanie siatki konspiracyjnej w Auschwitz i raporty",
      "przekazanie aliantom informacji o sytuacji Żydów",
      "ukrywanie ośmiorga Żydów mimo groźby kary śmierci"
    ],
    "answer": {
      "Irena Sendlerowa": "ratowanie około 2500 dzieci z getta",
      "Witold Pilecki": "organizowanie siatki konspiracyjnej w Auschwitz i raporty",
      "Jan Karski": "przekazanie aliantom informacji o sytuacji Żydów",
      "Józef i Wiktoria Ulmowie": "ukrywanie ośmiorga Żydów mimo groźby kary śmierci"
    },
    "explanation": "Sendlerowa ratowała dzieci z getta, Pilecki zorganizował konspirację i raportował z Auschwitz, Karski informował władze Wielkiej Brytanii i USA, a Ulmowie ukrywali Żydów i zostali za to zamordowani."
  },
  {
    "id": "R02_SPO_06",
    "section": "Społeczeństwo pod okupacją",
    "type": "riddle",
    "prompt": "Rada Pomocy Żydom działająca w okupowanej Polsce nosiła kryptonim...",
    "options": null,
    "answer": "Żegota",
    "altAnswers": [
      "Żegota",
      "Zegota",
      "Rada Pomocy Żydom Żegota"
    ],
    "image": "r02_zegota_pomoc.jpg",
    "explanation": "Rada Pomocy Żydom \"Żegota\" dostarczała żywność, ubrania i lekarstwa, organizowała ucieczki oraz przygotowywała kryjówki i fałszywe dokumenty."
  },
  {
    "id": "R02_SPO_07",
    "section": "Społeczeństwo pod okupacją",
    "type": "scenario",
    "prompt": "Pracujesz jako pielęgniarka i potajemnie wyprowadzasz żydowskie dzieci z getta, a potem umieszczasz je w sierocińcach lub polskich rodzinach. Którą postać opisuje ta sytuacja?",
    "options": [
      "Irena Sendlerowa",
      "Wanda Wasilewska",
      "Katarzyna Banaszek",
      "Maria Dickin",
      "Wiktoria Ulma",
      "Marek Edelman"
    ],
    "answer": 0,
    "image": "r02_zegota_pomoc.jpg",
    "explanation": "Tak działała Irena Sendlerowa, która wraz ze współpracownikami uratowała około 2500 dzieci żydowskich."
  },
  {
    "id": "R02_SPO_08",
    "section": "Społeczeństwo pod okupacją",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie był formą prześladowania Żydów przez Niemców: nakaz noszenia gwiazdy Dawida, zakaz korzystania z komunikacji miejskiej, konfiskata majątków, działalność Kedywu.",
    "options": null,
    "answer": "działalność Kedywu",
    "explanation": "Nakaz oznakowania, zakaz korzystania z komunikacji miejskiej i konfiskata majątków były elementami represji wobec Żydów. Kedyw był częścią Armii Krajowej."
  },
  {
    "id": "R02_SPO_09",
    "section": "Społeczeństwo pod okupacją",
    "type": "sort",
    "prompt": "Przyporządkuj działania do pomocy bezpośredniej albo do informowania świata o zbrodniach.",
    "options": null,
    "items": [
      "dostarczanie żywności do getta",
      "organizowanie ucieczek",
      "przygotowywanie fałszywych dokumentów",
      "raporty Witolda Pileckiego z Auschwitz",
      "misja Jana Karskiego do władz Wielkiej Brytanii i USA"
    ],
    "categories": [
      "pomoc bezpośrednia",
      "informowanie świata"
    ],
    "answer": {
      "pomoc bezpośrednia": [
        "dostarczanie żywności do getta",
        "organizowanie ucieczek",
        "przygotowywanie fałszywych dokumentów"
      ],
      "informowanie świata": [
        "raporty Witolda Pileckiego z Auschwitz",
        "misja Jana Karskiego do władz Wielkiej Brytanii i USA"
      ]
    },
    "explanation": "Żegota i osoby prywatne organizowały bezpośrednią pomoc, natomiast Pilecki i Karski przekazywali informacje o niemieckich zbrodniach poza okupowany kraj."
  },
  {
    "id": "R02_SPO_10",
    "section": "Społeczeństwo pod okupacją",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z prześladowaniem polskich Żydów w kolejności chronologicznej.",
    "options": null,
    "items": [
      "wybuch powstania w getcie warszawskim",
      "początek deportacji do obozów zagłady",
      "początek niemieckich prześladowań Żydów",
      "tworzenie gett"
    ],
    "answer": [
      "początek niemieckich prześladowań Żydów",
      "tworzenie gett",
      "początek deportacji do obozów zagłady",
      "wybuch powstania w getcie warszawskim"
    ],
    "explanation": "Represje zaczęły się we wrześniu 1939 r., następnie tworzono getta, w 1942 r. rozpoczęto deportacje do obozów zagłady, a w kwietniu 1943 r. wybuchło powstanie w getcie warszawskim."
  },
  {
    "id": "R02_SPO_11",
    "section": "Społeczeństwo pod okupacją",
    "type": "single_choice",
    "prompt": "Kiedy nastąpiła kulminacja ataków UPA na Polaków na Wołyniu, określana jako \"krwawa niedziela\"?",
    "options": [
      "11 lipca 1943 r.",
      "19 kwietnia 1943 r.",
      "1 sierpnia 1944 r.",
      "2 października 1944 r.",
      "30 lipca 1941 r.",
      "22 lipca 1944 r."
    ],
    "answer": 0,
    "explanation": "Krwawa niedziela przypadła na 11 lipca 1943 r.; zaatakowano wówczas ludność około 100 polskich wsi."
  },
  {
    "id": "R02_BUR_01",
    "section": "Od akcji \"Burza\" do końca wojny",
    "type": "multi_select",
    "prompt": "Zaznacz założenia planu \"Burza\".",
    "options": [
      "włączenie oddziałów AK do walki z Niemcami",
      "współpraca z Armią Czerwoną",
      "ujawnienie polskich władz cywilnych",
      "likwidacja rządu na uchodźstwie",
      "podporządkowanie AK PKWN",
      "opuszczenie kraju przez wszystkie oddziały AK"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Plan \"Burza\" przewidywał walkę AK z Niemcami, współdziałanie z nadciągającą Armią Czerwoną oraz ujawnienie polskich władz cywilnych jako gospodarzy wyzwolonych ziem."
  },
  {
    "id": "R02_BUR_02",
    "section": "Od akcji \"Burza\" do końca wojny",
    "type": "single_choice",
    "prompt": "Jaki kryptonim nosiła operacja Armii Krajowej przeprowadzona w lipcu 1944 r. w Wilnie?",
    "options": [
      "Ostra Brama",
      "Meksyk II",
      "Główki",
      "AB",
      "NIE",
      "Burza"
    ],
    "answer": 0,
    "explanation": "Operacja \"Ostra Brama\" doprowadziła przy współudziale Armii Czerwonej do zdobycia Wilna, po czym Sowieci aresztowali polskich oficerów i rozbroili żołnierzy."
  },
  {
    "id": "R02_BUR_03",
    "section": "Od akcji \"Burza\" do końca wojny",
    "type": "true_false",
    "prompt": "Latem 1944 r. w Warszawie broń palną miało tylko około 10% spośród około 50 tys. żołnierzy Armii Krajowej.",
    "options": null,
    "answer": true,
    "explanation": "Armia Krajowa miała w Warszawie około 50 tys. żołnierzy, lecz tylko około 10% z nich dysponowało bronią palną."
  },
  {
    "id": "R02_BUR_04",
    "section": "Od akcji \"Burza\" do końca wojny",
    "type": "fill_in",
    "prompt": "Powstanie warszawskie rozpoczęło się 1 sierpnia 1944 r. o godzinie __________, nazywanej godziną \"W\".",
    "options": null,
    "answer": [
      "17.00"
    ],
    "altAnswers": [
      [
        "17.00",
        "17:00",
        "17"
      ]
    ],
    "image": "r02_powstanie_warszawskie.jpg",
    "explanation": "Generał Tadeusz Komorowski \"Bór\" rozkazał rozpocząć powstanie o 17.00."
  },
  {
    "id": "R02_BUR_05",
    "section": "Od akcji \"Burza\" do końca wojny",
    "type": "scenario",
    "prompt": "Jest sierpień 1944 r. Walczący w stolicy mają niewiele broni, nie posiadają artylerii, czołgów ani lotnictwa, a Niemcy używają ciężkiego uzbrojenia i podpalają całe dzielnice. O jakie wydarzenie chodzi?",
    "options": [
      "powstanie warszawskie",
      "powstanie w getcie warszawskim",
      "bitwa o Monte Cassino",
      "akcja pod Arsenałem",
      "operacja Ostra Brama",
      "obrona Tobruku"
    ],
    "answer": 0,
    "image": "r02_powstanie_warszawskie.jpg",
    "explanation": "To obraz walk podczas powstania warszawskiego, które rozpoczęło się 1 sierpnia 1944 r. i trwało 63 dni."
  },
  {
    "id": "R02_BUR_06",
    "section": "Od akcji \"Burza\" do końca wojny",
    "type": "match",
    "prompt": "Połącz element życia w powstańczej Warszawie z jego opisem.",
    "options": null,
    "left": [
      "poczta powstańcza",
      "radio Błyskawica",
      "Biuletyn Informacyjny",
      "młodzi harcerze"
    ],
    "right": [
      "wydawała własne znaczki i dostarczyła ponad 100 tys. przesyłek",
      "powstańcza rozgłośnia radiowa",
      "podczas powstania ukazywał się jako dziennik",
      "roznosili listy w stolicy"
    ],
    "answer": {
      "poczta powstańcza": "wydawała własne znaczki i dostarczyła ponad 100 tys. przesyłek",
      "radio Błyskawica": "powstańcza rozgłośnia radiowa",
      "Biuletyn Informacyjny": "podczas powstania ukazywał się jako dziennik",
      "młodzi harcerze": "roznosili listy w stolicy"
    },
    "explanation": "W czasie powstania działały polskie instytucje, poczta, prasa, rozgłośnia radiowa i życie kulturalne."
  },
  {
    "id": "R02_BUR_07",
    "section": "Od akcji \"Burza\" do końca wojny",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od początku akcji \"Burza\" do rozwiązania Armii Krajowej.",
    "options": null,
    "items": [
      "kapitulacja powstania warszawskiego",
      "rozwiązanie Armii Krajowej",
      "operacja Ostra Brama",
      "początek akcji Burza",
      "wybuch powstania warszawskiego"
    ],
    "answer": [
      "początek akcji Burza",
      "operacja Ostra Brama",
      "wybuch powstania warszawskiego",
      "kapitulacja powstania warszawskiego",
      "rozwiązanie Armii Krajowej"
    ],
    "explanation": "Akcja \"Burza\" ruszyła w styczniu 1944 r., w lipcu przeprowadzono operację \"Ostra Brama\", 1 sierpnia wybuchło powstanie warszawskie, 2 października skapitulowało, a 19 stycznia 1945 r. rozwiązano AK."
  },
  {
    "id": "R02_BUR_08",
    "section": "Od akcji \"Burza\" do końca wojny",
    "type": "multi_select",
    "prompt": "Zaznacz skutki powstania warszawskiego.",
    "options": [
      "około 18 tys. zabitych powstańców",
      "około 150 tys. zabitych cywilów",
      "zniszczenie 80% zabudowy Warszawy",
      "około 16 tys. zabitych po stronie niemieckiej",
      "natychmiastowe uznanie rządu emigracyjnego przez Stalina",
      "wyzwolenie Warszawy przez AK"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W walkach zginęło około 18 tys. powstańców i 150 tys. cywilów, a 80% zabudowy Warszawy zostało zniszczone. Po stronie niemieckiej zginęło około 16 tys. ludzi."
  },
  {
    "id": "R02_BUR_09",
    "section": "Od akcji \"Burza\" do końca wojny",
    "type": "single_choice",
    "prompt": "Kiedy ogłoszono Manifest Polskiego Komitetu Wyzwolenia Narodowego?",
    "options": [
      "22 lipca 1944 r.",
      "1 stycznia 1944 r.",
      "1 sierpnia 1944 r.",
      "19 stycznia 1945 r.",
      "4 lutego 1945 r.",
      "1 lipca 1945 r."
    ],
    "answer": 0,
    "explanation": "Manifest PKWN ogłoszono 22 lipca 1944 r.; Komitet przedstawił się w nim jako jedyny legalny ośrodek władzy w Polsce."
  },
  {
    "id": "R02_BUR_10",
    "section": "Od akcji \"Burza\" do końca wojny",
    "type": "match",
    "prompt": "Połącz wydarzenie z datą.",
    "options": null,
    "left": [
      "powstanie Krajowej Rady Narodowej",
      "ogłoszenie Manifestu PKWN",
      "rozwiązanie Armii Krajowej",
      "konferencja w Jałcie",
      "powstanie Tymczasowego Rządu Jedności Narodowej"
    ],
    "right": [
      "1 stycznia 1944 r.",
      "22 lipca 1944 r.",
      "19 stycznia 1945 r.",
      "4-11 lutego 1945 r.",
      "czerwiec 1945 r."
    ],
    "answer": {
      "powstanie Krajowej Rady Narodowej": "1 stycznia 1944 r.",
      "ogłoszenie Manifestu PKWN": "22 lipca 1944 r.",
      "rozwiązanie Armii Krajowej": "19 stycznia 1945 r.",
      "konferencja w Jałcie": "4-11 lutego 1945 r.",
      "powstanie Tymczasowego Rządu Jedności Narodowej": "czerwiec 1945 r."
    },
    "image": "r02_konferencja_wielkiej_trojki.jpg",
    "explanation": "KRN powstała 1 stycznia 1944 r., Manifest PKWN ogłoszono 22 lipca 1944 r., AK rozwiązano 19 stycznia 1945 r., konferencja w Jałcie odbyła się 4-11 lutego 1945 r., a TRJN powstał w czerwcu 1945 r."
  },
  {
    "id": "R02_BUR_11",
    "section": "Od akcji \"Burza\" do końca wojny",
    "type": "single_choice",
    "prompt": "Jak nazywał się pokazowy proces przywódców Polskiego Państwa Podziemnego przeprowadzony w Moskwie w czerwcu 1945 r.?",
    "options": [
      "proces szesnastu",
      "proces brzeski",
      "akcja AB",
      "proces norymberski",
      "operacja Ostra Brama",
      "akcja Główki"
    ],
    "answer": 0,
    "explanation": "Sowieci aresztowali 16 przywódców polskiego podziemia i postawili ich przed sądem w tzw. procesie szesnastu."
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz obszar z formą okupacyjnego podporządkowania po 1939 r. lub po zmianach z 1941 r.",
    "options": null,
    "left": [
      "Pomorze Gdańskie",
      "większość Mazowsza z Warszawą",
      "ziemie zajęte przez Sowietów w 1939 r.",
      "Dystrykt Galicja ze Lwowem po 1941 r."
    ],
    "right": [
      "bezpośrednio III Rzesza",
      "Generalne Gubernatorstwo",
      "ZSRS",
      "Generalne Gubernatorstwo po agresji Niemiec na ZSRS"
    ],
    "answer": {
      "Pomorze Gdańskie": "bezpośrednio III Rzesza",
      "większość Mazowsza z Warszawą": "Generalne Gubernatorstwo",
      "ziemie zajęte przez Sowietów w 1939 r.": "ZSRS",
      "Dystrykt Galicja ze Lwowem po 1941 r.": "Generalne Gubernatorstwo po agresji Niemiec na ZSRS"
    },
    "image": "r02_mapa_dwoch_okupacji.jpg",
    "explanation": "Po podziale Polski część ziem wcielono bezpośrednio do III Rzeszy, część weszła do Generalnego Gubernatorstwa, a ziemie zajęte przez Sowietów wcielono do ZSRS. Po 1941 r. Dystrykt Galicja ze Lwowem włączono do Generalnego Gubernatorstwa."
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Około ilu osób Niemcy zamordowali w podwarszawskich Palmirach w ramach akcji \"AB\"?",
    "options": [
      "2 tys.",
      "22 tys.",
      "80 tys.",
      "110 tys.",
      "150 tys.",
      "900 tys."
    ],
    "answer": 0,
    "explanation": "W Palmirach Niemcy zabili około 2 tys. osób, w tym Macieja Rataja i Janusza Kusocińskiego."
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz cechy okupacji sowieckiej.",
    "options": [
      "paszportyzacja",
      "kolektywizacja",
      "język polski jako jeden z języków urzędowych",
      "istnienie Uniwersytetu i Politechniki Lwowskiej",
      "likwidacja całego polskiego szkolnictwa",
      "niemiecka lista narodowościowa"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Sowiecka polityka obejmowała paszportyzację, kolektywizację i nacjonalizację, a jednocześnie język polski pozostawał jednym z języków urzędowych i działały polskie szkoły wyższe we Lwowie."
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od zbrodni katyńskiej do zerwania stosunków polsko-sowieckich.",
    "options": null,
    "items": [
      "zerwanie stosunków dyplomatycznych Polski z ZSRS",
      "podpisanie układu Sikorski-Majski",
      "zbrodnia katyńska",
      "ewakuacja armii Andersa z ZSRS",
      "agresja Niemiec na ZSRS"
    ],
    "answer": [
      "zbrodnia katyńska",
      "agresja Niemiec na ZSRS",
      "podpisanie układu Sikorski-Majski",
      "ewakuacja armii Andersa z ZSRS",
      "zerwanie stosunków dyplomatycznych Polski z ZSRS"
    ],
    "explanation": "Egzekucje katyńskie odbyły się wiosną 1940 r.; po niemieckiej agresji na ZSRS w czerwcu 1941 r. podpisano układ Sikorski-Majski, w 1942 r. ewakuowano armię Andersa, a po ujawnieniu grobów w 1943 r. Stalin zerwał stosunki z polskim rządem."
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż miejsce, które nie było miejscem egzekucji polskich jeńców w zbrodni katyńskiej: Katyń, Charków, Miednoje, Palmiry.",
    "options": null,
    "answer": "Palmiry",
    "image": "r02_katyn_las.jpg",
    "explanation": "Egzekucje zbrodni katyńskiej przeprowadzono m.in. w Katyniu, Charkowie i Miednoje. Palmiry były miejscem niemieckich egzekucji polskich elit."
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Konspiratorzy ustalają położenie niemieckiego ośrodka badań nad V-1 i V-2 w Peenemünde, zdobywają niewybuch rakiety V-2, a wyniki badań przekazują do Wielkiej Brytanii. O jaki rodzaj działalności podziemia chodzi?",
    "options": [
      "działalność wywiadowczą",
      "kolektywizację",
      "mały sabotaż szkolny",
      "deportację",
      "akcję wysiedleńczą",
      "legalną działalność parlamentarną"
    ],
    "answer": 0,
    "explanation": "Była to działalność wywiadowcza Armii Krajowej, której wyniki przekazywano aliantom."
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która grupa Szarych Szeregów skupiała harcerzy w wieku 15-17 lat i zajmowała się małym sabotażem?",
    "options": [
      "Bojowe Szkoły",
      "Zawiszacy",
      "Grupy Szturmowe",
      "Cichociemni",
      "Kedyw",
      "Bataliony Chłopskie"
    ],
    "answer": 0,
    "explanation": "Harcerze w wieku 15-17 lat należeli do \"Bojowych Szkół\" i prowadzili akcje propagandowe oraz mały sabotaż."
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Akcję pod Arsenałem przeprowadzono __________, a zamach na Franza Kutscherę - __________.",
    "options": null,
    "answer": [
      "26 marca 1943 r.",
      "1 lutego 1944 r."
    ],
    "altAnswers": [
      [
        "26 marca 1943 r.",
        "26 III 1943 r.",
        "26.03.1943"
      ],
      [
        "1 lutego 1944 r.",
        "1 II 1944 r.",
        "01.02.1944"
      ]
    ],
    "image": "r02_akcja_arsenal.jpg",
    "explanation": "Akcja pod Arsenałem odbyła się 26 marca 1943 r., a udany zamach na Franza Kutscherę 1 lutego 1944 r."
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz działania prowadzone przez Radę Pomocy Żydom \"Żegota\".",
    "options": [
      "dostarczanie żywności i lekarstw",
      "organizowanie ucieczek z getta",
      "przygotowywanie kryjówek",
      "wyrabianie fałszywych dokumentów",
      "dowodzenie Żydowską Organizacją Bojową",
      "prowadzenie niemieckich transportów do obozów"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r02_zegota_pomoc.jpg",
    "explanation": "Żegota dostarczała żywność, ubrania i lekarstwa, organizowała ucieczki, przygotowywała kryjówki oraz fałszywe dokumenty."
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz dowódcę lub działacza podziemia z działaniem.",
    "options": null,
    "left": [
      "August Emil Fieldorf \"Nil\"",
      "Stefan Rowecki \"Grot\"",
      "Tadeusz Komorowski \"Bór\"",
      "Leopold Okulicki"
    ],
    "right": [
      "dowódca Kedywu i organizator NIE",
      "komendant ZWZ i później AK",
      "wydał rozkaz rozpoczęcia powstania warszawskiego",
      "rozwiązał Armię Krajową 19 stycznia 1945 r."
    ],
    "answer": {
      "August Emil Fieldorf \"Nil\"": "dowódca Kedywu i organizator NIE",
      "Stefan Rowecki \"Grot\"": "komendant ZWZ i później AK",
      "Tadeusz Komorowski \"Bór\"": "wydał rozkaz rozpoczęcia powstania warszawskiego",
      "Leopold Okulicki": "rozwiązał Armię Krajową 19 stycznia 1945 r."
    },
    "explanation": "Fieldorf dowodził Kedywem i tworzył organizację \"NIE\"; Rowecki dowodził ZWZ i AK; Komorowski wydał rozkaz rozpoczęcia powstania warszawskiego; Okulicki rozwiązał AK w styczniu 1945 r."
  },
  {
    "id": "R02_HARD_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która informacja, wpływająca na bezpośrednią decyzję o wybuchu powstania warszawskiego, okazała się fałszywa?",
    "options": [
      "pojawienie się sowieckich czołgów w prawobrzeżnej Warszawie",
      "ewakuacja niemieckiej administracji",
      "nakaz stawienia się 100 tys. mężczyzn do prac fortyfikacyjnych",
      "zbliżanie się frontu do Warszawy",
      "niepowodzenie akcji Burza",
      "utworzenie ośrodka władzy komunistycznej w Lublinie"
    ],
    "answer": 0,
    "explanation": "Dowództwo AK otrzymało fałszywą informację o pojawieniu się sowieckich czołgów w prawobrzeżnej Warszawie."
  },
  {
    "id": "R02_HARD_12",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Od początku lotniczych zrzutów dla powstańczej Warszawy ZSRS zezwalał samolotom RAF na lądowanie na zajętych przez siebie lotniskach.",
    "options": null,
    "answer": false,
    "explanation": "Początkowo Sowieci nie zezwalali samolotom RAF lądować na swoich lotniskach, co zwiększało straty wśród lotników."
  },
  {
    "id": "R02_HARD_13",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj ustalenia dotyczące Polski do konferencji w Teheranie albo w Jałcie.",
    "options": null,
    "items": [
      "przesunięcie przyszłych granic Polski na zachód",
      "Polska w sowieckiej strefie wpływów",
      "utworzenie Tymczasowego Rządu Jedności Narodowej",
      "demokratyczne wybory bez międzynarodowej kontroli",
      "wschodnia granica Polski na linii Curzona"
    ],
    "categories": [
      "Teheran 1943",
      "Jałta 1945"
    ],
    "answer": {
      "Teheran 1943": [
        "przesunięcie przyszłych granic Polski na zachód",
        "Polska w sowieckiej strefie wpływów"
      ],
      "Jałta 1945": [
        "utworzenie Tymczasowego Rządu Jedności Narodowej",
        "demokratyczne wybory bez międzynarodowej kontroli",
        "wschodnia granica Polski na linii Curzona"
      ]
    },
    "image": "r02_konferencja_wielkiej_trojki.jpg",
    "explanation": "W Teheranie uzgodniono przesunięcie Polski na zachód i jej miejsce w sowieckiej strefie wpływów. W Jałcie ustalono m.in. utworzenie TRJN, wybory bez międzynarodowej kontroli oraz oparcie granicy wschodniej na linii Curzona."
  },
  {
    "id": "R02_HARD_14",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy przejmowania władzy i likwidowania podziemia w latach 1944-1945.",
    "options": null,
    "items": [
      "powstanie TRJN",
      "rozwiązanie Armii Krajowej",
      "ogłoszenie Manifestu PKWN",
      "konferencja w Jałcie",
      "powstanie Krajowej Rady Narodowej"
    ],
    "answer": [
      "powstanie Krajowej Rady Narodowej",
      "ogłoszenie Manifestu PKWN",
      "rozwiązanie Armii Krajowej",
      "konferencja w Jałcie",
      "powstanie TRJN"
    ],
    "explanation": "KRN powstała 1 stycznia 1944 r., Manifest PKWN ogłoszono 22 lipca 1944 r., AK rozwiązano 19 stycznia 1945 r., w lutym obradowała konferencja jałtańska, a w czerwcu powstał TRJN."
  },
  {
    "id": "R02_HARD_15",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Sowiecki pokazowy proces 16 przywódców Polskiego Państwa Podziemnego w Moskwie w czerwcu 1945 r. to...",
    "options": null,
    "answer": "proces szesnastu",
    "altAnswers": [
      "proces szesnastu",
      "Proces Szesnastu"
    ],
    "explanation": "Aresztowanych przywódców polskiego podziemia postawiono przed sowieckim sądem wojskowym w tzw. procesie szesnastu."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r02",
  number: 2,
  title: "Polacy podczas II wojny światowej",
  icon: "🪖",
  sectionOrder: [
    "Dwie okupacje",
    "Władze na uchodźstwie i Polacy na frontach",
    "Polskie Państwo Podziemne",
    "Społeczeństwo pod okupacją",
    "Od akcji \"Burza\" do końca wojny"
  ],
  sectionIcons: {
    "Dwie okupacje": "🗺️",
    "Władze na uchodźstwie i Polacy na frontach": "🌍",
    "Polskie Państwo Podziemne": "🕵️",
    "Społeczeństwo pod okupacją": "🕯️",
    "Od akcji \"Burza\" do końca wojny": "🏙️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
