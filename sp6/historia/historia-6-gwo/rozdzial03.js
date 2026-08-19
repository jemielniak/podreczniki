// Skróty sekcji (do identyfikatorów ćwiczeń):
//   WAZ = Wojny Wazów: Szwecja, Moskwa i Turcja
//   CHM = Powstanie Chmielnickiego
//   POT = Potop i wojny z Moskwą
//   KRY = Kryzys Rzeczpospolitej
//   TUR = Wojny z Turcją i Jan III Sobieski
//   BAR = Barok i sarmatyzm
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R03_WAZ_01",
    "section": "Wojny Wazów: Szwecja, Moskwa i Turcja",
    "type": "single_choice",
    "prompt": "Kto został królem Polski po podwójnej elekcji w 1587 r.?",
    "options": [
      "Zygmunt III Waza",
      "Maksymilian Habsburg",
      "Jan Zamoyski",
      "Władysław IV Waza",
      "Jan Karol Chodkiewicz",
      "Stanisław Żółkiewski"
    ],
    "answer": 0,
    "explanation": "Większość szlachty i magnatów poparła Zygmunta III Wazę. Jego rywal Maksymilian Habsburg został pokonany przez Jana Zamoyskiego pod Byczyną w 1588 r."
  },
  {
    "id": "R03_WAZ_02",
    "section": "Wojny Wazów: Szwecja, Moskwa i Turcja",
    "type": "multi_select",
    "prompt": "Zaznacz przyczyny konfliktu Rzeczpospolitej ze Szwecją na początku XVII w.",
    "options": [
      "Spór o Inflanty",
      "Dążenie Szwecji do opanowania wybrzeży Bałtyku",
      "Dążenie Zygmunta III do odzyskania korony szwedzkiej",
      "Spór o Podole",
      "Walczono o tron moskiewski Michała Romanowa",
      "Spór o Śląsk"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Szwecja dążyła do opanowania wybrzeży Bałtyku, oba państwa spierały się o Inflanty, a Zygmunt III chciał odzyskać koronę szwedzką."
  },
  {
    "id": "R03_WAZ_03",
    "section": "Wojny Wazów: Szwecja, Moskwa i Turcja",
    "type": "true_false",
    "prompt": "W bitwie pod Kircholmem w 1605 r. wojska polsko-litewskie dowodzone przez Jana Karola Chodkiewicza pokonały Szwedów.",
    "options": null,
    "answer": true,
    "explanation": "Kircholm był decydującym starciem wojny 1600-1611 i wielkim zwycięstwem armii polsko-litewskiej Jana Karola Chodkiewicza.",
    "image": "r03_kircholm_husaria.jpg"
  },
  {
    "id": "R03_WAZ_04",
    "section": "Wojny Wazów: Szwecja, Moskwa i Turcja",
    "type": "fill_in",
    "prompt": "Zygmunt III wypowiedział wojnę Moskwie w roku __________, a Stanisław Żółkiewski zwyciężył pod Kłuszynem w roku __________.",
    "options": null,
    "answer": [
      "1609",
      "1610"
    ],
    "altAnswers": [
      [
        "1609",
        "1609 r."
      ],
      [
        "1610",
        "1610 r."
      ]
    ],
    "explanation": "Wojna państwowa z Moskwą rozpoczęła się w 1609 r., a bitwa pod Kłuszynem zakończyła się zwycięstwem Żółkiewskiego w 1610 r.",
    "image": "r03_kluszyn_bitwa.jpg"
  },
  {
    "id": "R03_WAZ_05",
    "section": "Wojny Wazów: Szwecja, Moskwa i Turcja",
    "type": "match",
    "prompt": "Połącz wydarzenie z rokiem.",
    "options": null,
    "left": [
      "Bitwa pod Kircholmem",
      "Bitwa pod Kłuszynem",
      "Bitwa pod Cecorą",
      "Bitwa pod Chocimiem"
    ],
    "right": [
      "1620",
      "1605",
      "1621",
      "1610"
    ],
    "answer": {
      "Bitwa pod Kircholmem": "1605",
      "Bitwa pod Kłuszynem": "1610",
      "Bitwa pod Cecorą": "1620",
      "Bitwa pod Chocimiem": "1621"
    },
    "explanation": "Daty te porządkują najważniejsze starcia pierwszych dziesięcioleci XVII w."
  },
  {
    "id": "R03_WAZ_06",
    "section": "Wojny Wazów: Szwecja, Moskwa i Turcja",
    "type": "scenario",
    "prompt": "Jest rok 1610. Po zwycięstwie pod Kłuszynem bojarzy zgadzają się powołać na tron moskiewski syna Zygmunta III, ale stawiają warunek przyjęcia prawosławia. O którego królewicza chodzi?",
    "options": [
      "Władysław",
      "Jan Kazimierz",
      "Michał Korybut",
      "Karol Gustaw",
      "Maksymilian",
      "Dymitr Samozwaniec"
    ],
    "answer": 0,
    "explanation": "Bojarzy zgodzili się na wybór królewicza Władysława, syna Zygmunta III. Król sprzeciwił się jednak układowi i zażądał korony carskiej dla siebie."
  },
  {
    "id": "R03_WAZ_07",
    "section": "Wojny Wazów: Szwecja, Moskwa i Turcja",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Bitwa pod Kłuszynem",
      "Rozejm z Moskwą",
      "Wybuch wojny ze Szwecją",
      "Bitwa pod Kircholmem",
      "Wybuch wojny z Moskwą"
    ],
    "answer": [
      "Wybuch wojny ze Szwecją",
      "Bitwa pod Kircholmem",
      "Wybuch wojny z Moskwą",
      "Bitwa pod Kłuszynem",
      "Rozejm z Moskwą"
    ],
    "explanation": "Kolejność to: wybuch wojny ze Szwecją 1600, Kircholm 1605, wojna z Moskwą 1609, Kłuszyn 1610, rozejm z Moskwą 1618."
  },
  {
    "id": "R03_WAZ_08",
    "section": "Wojny Wazów: Szwecja, Moskwa i Turcja",
    "type": "sort",
    "prompt": "Przyporządkuj wydarzenia do właściwego konfliktu.",
    "options": null,
    "items": [
      "Kircholm 1605",
      "Rozejm 1611",
      "Kłuszyn 1610",
      "Rozejm 1618",
      "Cecora 1620",
      "Chocim 1621"
    ],
    "categories": [
      "Wojna ze Szwecją",
      "Wojna z Moskwą",
      "Wojna z Turcją"
    ],
    "answer": {
      "Wojna ze Szwecją": [
        "Kircholm 1605",
        "Rozejm 1611"
      ],
      "Wojna z Moskwą": [
        "Kłuszyn 1610",
        "Rozejm 1618"
      ],
      "Wojna z Turcją": [
        "Cecora 1620",
        "Chocim 1621"
      ]
    },
    "explanation": "Kircholm i rozejm z 1611 r. należą do wojny ze Szwecją; Kłuszyn i rozejm z 1618 r. do wojny z Moskwą; Cecora i Chocim do wojny z Turcją 1620-1621."
  },
  {
    "id": "R03_WAZ_09",
    "section": "Wojny Wazów: Szwecja, Moskwa i Turcja",
    "type": "single_choice",
    "prompt": "Który skutek rozejmu ze Szwecją z 1629 r. dotyczył polskiego handlu morskiego?",
    "options": [
      "Szwedzi mogli pobierać 3,5% cła",
      "Gdańsk został przyłączony do Szwecji",
      "Zniesiono wszystkie cła na Bałtyku",
      "Moskwa przejęła dochody z Gdańska",
      "Polska otrzymała port w Sztokholmie",
      "Turcja kontrolowała handel morski"
    ],
    "answer": 0,
    "explanation": "Szwedzi uzyskali prawo pobierania 3,5% cła od polskiego handlu morskiego. Rzeczpospolita utraciła też Inflanty i porty w Prusach z wyjątkiem Gdańska i dwóch mniejszych miast."
  },
  {
    "id": "R03_WAZ_10",
    "section": "Wojny Wazów: Szwecja, Moskwa i Turcja",
    "type": "riddle",
    "prompt": "W 1621 r. wojska polsko-kozackie zatrzymały atak Turków i Tatarów. Pod jaką miejscowością rozegrała się ta bitwa?",
    "options": null,
    "answer": "Chocim",
    "altAnswers": [
      "Chocim",
      "Chocimiem",
      "bitwa pod Chocimiem"
    ],
    "explanation": "Bitwa pod Chocimiem w 1621 r. zatrzymała armię turecko-tatarską, a pokój pozostawił granicę na Dniestrze.",
    "image": "r03_chocim_1621.jpg"
  },
  {
    "id": "R03_CHM_01",
    "section": "Powstanie Chmielnickiego",
    "type": "single_choice",
    "prompt": "Który król pokonał armię moskiewską oblegającą Smoleńsk w 1634 r.?",
    "options": [
      "Władysław IV Waza",
      "Zygmunt III Waza",
      "Jan Kazimierz",
      "Michał Korybut Wiśniowiecki",
      "Jan III Sobieski",
      "Stefan Batory"
    ],
    "answer": 0,
    "explanation": "Władysław IV Waza pokonał armię moskiewską w 1634 r., a rok później zawarł korzystny rozejm ze Szwecją."
  },
  {
    "id": "R03_CHM_02",
    "section": "Powstanie Chmielnickiego",
    "type": "multi_select",
    "prompt": "Zaznacz postanowienia korzystnego rozejmu ze Szwecją z 1635 r.",
    "options": [
      "Szwedzi wycofali się z Prus",
      "Szwedzi zrezygnowali z pobierania 3,5% cła",
      "Szwedzi zatrzymali Inflanty",
      "Rzeczpospolita oddała Gdańsk",
      "Moskwa otrzymała Smoleńsk",
      "Turcja przejęła Podole"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Szwedzi wycofali się z Prus i zrezygnowali z pobierania 3,5% cła od polskiego handlu morskiego, ale zatrzymali Inflanty."
  },
  {
    "id": "R03_CHM_03",
    "section": "Powstanie Chmielnickiego",
    "type": "true_false",
    "prompt": "W 1569 r. Zygmunt August przekazał Ukrainę z Wielkiego Księstwa Litewskiego do Korony.",
    "options": null,
    "answer": true,
    "explanation": "Po 1569 r. Ukraina znalazła się w Koronie, co przyspieszyło polskie osadnictwo i rozwój gospodarczy tej krainy."
  },
  {
    "id": "R03_CHM_04",
    "section": "Powstanie Chmielnickiego",
    "type": "sort",
    "prompt": "Przyporządkuj źródła napięć na Ukrainie do odpowiednich rodzajów konfliktu.",
    "options": null,
    "items": [
      "Polscy panowie i ruscy poddani",
      "Katolicy i prawosławni",
      "Pańszczyzna chłopów",
      "Żądanie własnych urzędów i armii"
    ],
    "categories": [
      "Narodowościowy",
      "Religijny",
      "Ekonomiczny",
      "Polityczny"
    ],
    "answer": {
      "Narodowościowy": [
        "Polscy panowie i ruscy poddani"
      ],
      "Religijny": [
        "Katolicy i prawosławni"
      ],
      "Ekonomiczny": [
        "Pańszczyzna chłopów"
      ],
      "Polityczny": [
        "Żądanie własnych urzędów i armii"
      ]
    },
    "explanation": "Na Ukrainie nakładały się konflikty narodowościowy, religijny, ekonomiczny i polityczny."
  },
  {
    "id": "R03_CHM_05",
    "section": "Powstanie Chmielnickiego",
    "type": "fill_in",
    "prompt": "Spis Kozaków otrzymujących żołd od państwa nazywano __________, a głównym ośrodkiem Kozaków zaporoskich było __________.",
    "options": null,
    "answer": [
      "rejestrem",
      "Zaporoże"
    ],
    "altAnswers": [
      [
        "rejestrem",
        "rejestr"
      ],
      [
        "Zaporoże",
        "Zaporożu"
      ]
    ],
    "explanation": "Rejestr obejmował Kozaków pozostających na żołdzie Rzeczpospolitej. Wielu chłopów uciekało na Zaporoże i dołączało do Kozaków.",
    "image": "r03_chmielnicki_kozacy.jpg"
  },
  {
    "id": "R03_CHM_06",
    "section": "Powstanie Chmielnickiego",
    "type": "scenario",
    "prompt": "Jest rok 1646. Sejm odrzuca plan wielkiej wojny Władysława IV przeciwko Turcji. Która grupa jest szczególnie rozczarowana, bo liczyła na zwiększenie rejestru i łupy wojenne?",
    "options": [
      "Kozacy",
      "Szwedzi",
      "Bojarzy moskiewscy",
      "Arianie",
      "Janczarzy",
      "Brandenburczycy"
    ],
    "answer": 0,
    "explanation": "Kozacy liczyli, że wojna z Turcją przyniesie im większy rejestr i łupy. Sprzeciw sejmu stał się bezpośrednim powodem wybuchu powstania Chmielnickiego w 1648 r."
  },
  {
    "id": "R03_CHM_07",
    "section": "Powstanie Chmielnickiego",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia powstania Chmielnickiego w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Ugoda w Perejasławiu",
      "Bitwa pod Beresteczkiem",
      "Bitwa pod Korsuniem",
      "Oblężenie Zbaraża i ugoda zborowska",
      "Bitwa nad Żółtymi Wodami",
      "Bitwa pod Piławcami"
    ],
    "answer": [
      "Bitwa nad Żółtymi Wodami",
      "Bitwa pod Korsuniem",
      "Bitwa pod Piławcami",
      "Oblężenie Zbaraża i ugoda zborowska",
      "Bitwa pod Beresteczkiem",
      "Ugoda w Perejasławiu"
    ],
    "explanation": "W 1648 r. były Żółte Wody, Korsuń i Piławce; w 1649 r. Zbaraż i ugoda zborowska; w 1651 r. Beresteczko; w 1654 r. Perejasław."
  },
  {
    "id": "R03_CHM_08",
    "section": "Powstanie Chmielnickiego",
    "type": "match",
    "prompt": "Połącz wydarzenie z rokiem.",
    "options": null,
    "left": [
      "Bitwa pod Piławcami",
      "Ugoda zborowska",
      "Bitwa pod Beresteczkiem",
      "Ugoda w Perejasławiu"
    ],
    "right": [
      "1651",
      "1648",
      "1654",
      "1649"
    ],
    "answer": {
      "Bitwa pod Piławcami": "1648",
      "Ugoda zborowska": "1649",
      "Bitwa pod Beresteczkiem": "1651",
      "Ugoda w Perejasławiu": "1654"
    },
    "explanation": "Najważniejsze daty powstania to 1648, 1649, 1651 i 1654."
  },
  {
    "id": "R03_CHM_09",
    "section": "Powstanie Chmielnickiego",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do pozostałych jako miejsce związane z powstaniem Chmielnickiego: Żółte Wody, Korsuń, Piławce, Oliwa.",
    "options": null,
    "answer": "Oliwa",
    "explanation": "Żółte Wody, Korsuń i Piławce to miejsca klęsk wojsk koronnych w 1648 r. Oliwa wiąże się z pokojem kończącym potop w 1660 r."
  },
  {
    "id": "R03_CHM_10",
    "section": "Powstanie Chmielnickiego",
    "type": "riddle",
    "prompt": "Magnat kresowy, który dowodził obroną Zbaraża w 1649 r., to...",
    "options": null,
    "answer": "Jeremi Wiśniowiecki",
    "altAnswers": [
      "Jeremi Wiśniowiecki",
      "Wiśniowiecki",
      "Jeremi Wisniowiecki"
    ],
    "explanation": "Obroną Zbaraża podczas sześciotygodniowego oblężenia dowodził Jeremi Wiśniowiecki.",
    "image": "r03_zbaraz_oblezenie.jpg"
  },
  {
    "id": "R03_POT_01",
    "section": "Potop i wojny z Moskwą",
    "type": "single_choice",
    "prompt": "Co stało się bezpośrednim pretekstem dla cara do ataku na Rzeczpospolitą w 1654 r.?",
    "options": [
      "Ugoda w Perejasławiu",
      "Pokój w Oliwie",
      "Rozejm w Żurawnie",
      "Ugoda zborowska",
      "Bitwa pod Wiedniem",
      "Wygnanie arian"
    ],
    "answer": 0,
    "explanation": "Po ugodzie w Perejasławiu car uznał Ukrainę za swoją własność i wystąpił jako obrońca Rusinów, rozpoczynając wojnę z Rzeczpospolitą."
  },
  {
    "id": "R03_POT_02",
    "section": "Potop i wojny z Moskwą",
    "type": "multi_select",
    "prompt": "Zaznacz cele państw rywalizujących o Bałtyk w połowie XVII w.",
    "options": [
      "Szwecja chciała opanować wybrzeża Bałtyku",
      "Rzeczpospolita chciała utrzymać Prusy Królewskie",
      "Rzeczpospolita chciała odzyskać Inflanty",
      "Moskwa chciała uzyskać dostęp do Bałtyku",
      "Turcja chciała zająć Gdańsk",
      "Kozacy chcieli przejąć Sztokholm"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Szwecja chciała opanować wybrzeża Bałtyku, Rzeczpospolita utrzymać Prusy Królewskie i odzyskać Inflanty, a Moskwa uzyskać dostęp do Bałtyku."
  },
  {
    "id": "R03_POT_03",
    "section": "Potop i wojny z Moskwą",
    "type": "true_false",
    "prompt": "Potop szwedzki nazywany jest także drugą wojną północną i trwał w latach 1655-1660.",
    "options": null,
    "answer": true,
    "explanation": "Najazd szwedzki rozpoczął się w 1655 r., a pokój w Oliwie zakończył drugą wojnę północną w 1660 r."
  },
  {
    "id": "R03_POT_04",
    "section": "Potop i wojny z Moskwą",
    "type": "scenario",
    "prompt": "Latem 1655 r. pospolite ruszenie pod Ujściem jest skłócone i otoczone przez świetnie wyszkoloną armię szwedzką. Co robią dowodzący nim wojewodowie?",
    "options": [
      "Poddają Wielkopolskę Karolowi X Gustawowi",
      "Rozbijają armię szwedzką",
      "Wycofują się do Moskwy",
      "Ogłaszają detronizację Karola X Gustawa",
      "Wzywają Turków na pomoc",
      "Zdobywają Inflanty"
    ],
    "answer": 0,
    "explanation": "Wojewodowie zdradzili Jana Kazimierza i poddali Wielkopolskę królowi Szwecji. Szybki upadek obrony otworzył Szwedom drogę w głąb kraju."
  },
  {
    "id": "R03_POT_05",
    "section": "Potop i wojny z Moskwą",
    "type": "riddle",
    "prompt": "Przeor klasztoru na Jasnej Górze i dowódca jego obrony przed Szwedami to ojciec...",
    "options": null,
    "answer": "Augustyn Kordecki",
    "altAnswers": [
      "Augustyn Kordecki",
      "Kordecki",
      "ojciec Augustyn Kordecki"
    ],
    "explanation": "Ojciec Augustyn Kordecki kierował obroną Jasnej Góry podczas niemal sześciotygodniowego oblężenia w 1655 r.",
    "image": "r03_jasna_gora_oblezenie.jpg"
  },
  {
    "id": "R03_POT_06",
    "section": "Potop i wojny z Moskwą",
    "type": "fill_in",
    "prompt": "Partyzancką walkę przeciwko Szwedom nazywano wojną __________, a jednym z jej głównych dowódców był Stefan __________.",
    "options": null,
    "answer": [
      "szarpaną",
      "Czarniecki"
    ],
    "altAnswers": [
      [
        "szarpaną",
        "szarpana"
      ],
      [
        "Czarniecki",
        "Stefan Czarniecki"
      ]
    ],
    "explanation": "Wojna szarpana polegała na atakach małych oddziałów z ukrycia i szybkim wycofywaniu się. Kierował nią Stefan Czarniecki.",
    "image": "r03_stefan_czarniecki.jpg"
  },
  {
    "id": "R03_POT_07",
    "section": "Potop i wojny z Moskwą",
    "type": "sort",
    "prompt": "Przyporządkuj postanowienia do właściwego porozumienia.",
    "options": null,
    "items": [
      "Polska Litwa i Ukraina jako równorzędne państwa",
      "Jan Kazimierz zrzeka się praw do korony szwedzkiej",
      "Podział Ukrainy wzdłuż Dniepru",
      "Prawosławni biskupi w senacie",
      "Rzeczpospolita traci większość Inflant",
      "Moskwa odzyskuje ziemie utracone w 1618 r."
    ],
    "categories": [
      "Ugoda hadziacka",
      "Pokój oliwski",
      "Rozejm andruszowski"
    ],
    "answer": {
      "Ugoda hadziacka": [
        "Polska Litwa i Ukraina jako równorzędne państwa",
        "Prawosławni biskupi w senacie"
      ],
      "Pokój oliwski": [
        "Jan Kazimierz zrzeka się praw do korony szwedzkiej",
        "Rzeczpospolita traci większość Inflant"
      ],
      "Rozejm andruszowski": [
        "Podział Ukrainy wzdłuż Dniepru",
        "Moskwa odzyskuje ziemie utracone w 1618 r."
      ]
    },
    "explanation": "Ugoda hadziacka tworzyła związek Polski, Litwy i Ukrainy; pokój oliwski kończył potop; rozejm andruszowski dzielił Ukrainę i oddawał Moskwie ziemie utracone w 1618 r."
  },
  {
    "id": "R03_POT_08",
    "section": "Potop i wojny z Moskwą",
    "type": "match",
    "prompt": "Połącz wydarzenie z rokiem.",
    "options": null,
    "left": [
      "Oblężenie Jasnej Góry",
      "Niezależność Prus Książęcych",
      "Ugoda hadziacka",
      "Pokój w Oliwie",
      "Rozejm w Andruszowie"
    ],
    "right": [
      "1667",
      "1658",
      "1655",
      "1660",
      "1657"
    ],
    "answer": {
      "Oblężenie Jasnej Góry": "1655",
      "Niezależność Prus Książęcych": "1657",
      "Ugoda hadziacka": "1658",
      "Pokój w Oliwie": "1660",
      "Rozejm w Andruszowie": "1667"
    },
    "explanation": "Daty 1655, 1657, 1658, 1660 i 1667 wyznaczają kolejne etapy wojen połowy XVII w."
  },
  {
    "id": "R03_POT_09",
    "section": "Potop i wojny z Moskwą",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia potopu od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Pokój w Oliwie",
      "Rozwój wojny szarpanej",
      "Przyznanie niezależności Prusom Książęcym",
      "Wkroczenie wojsk szwedzkich",
      "Oblężenie Jasnej Góry"
    ],
    "answer": [
      "Wkroczenie wojsk szwedzkich",
      "Oblężenie Jasnej Góry",
      "Rozwój wojny szarpanej",
      "Przyznanie niezależności Prusom Książęcym",
      "Pokój w Oliwie"
    ],
    "explanation": "Najazd i oblężenie Jasnej Góry miały miejsce w 1655 r., wojna szarpana rozwinęła się w 1656 r., niezależność Prus Książęcych przyznano w 1657 r., a pokój w Oliwie podpisano w 1660 r."
  },
  {
    "id": "R03_POT_10",
    "section": "Potop i wojny z Moskwą",
    "type": "single_choice",
    "prompt": "Które postanowienie należało do rozejmu w Andruszowie z 1667 r.?",
    "options": [
      "Podział Ukrainy wzdłuż Dniepru",
      "Przyłączenie całej Ukrainy do Korony",
      "Oddanie Gdańska Szwecji",
      "Przywrócenie zależności Prus Książęcych",
      "Wypłata haraczu Turcji",
      "Wybór Jana III Sobieskiego na króla"
    ],
    "answer": 0,
    "explanation": "Rzeczpospolita i Moskwa podzieliły Ukrainę wzdłuż Dniepru, Moskwa odzyskała ziemie utracone w 1618 r., a oba państwa miały wspólnie walczyć z Turcją i Tatarami."
  },
  {
    "id": "R03_KRY_01",
    "section": "Kryzys Rzeczpospolitej",
    "type": "single_choice",
    "prompt": "Jak zmieniła się liczba ludności Rzeczpospolitej w wyniku wojen z lat 1648-1667?",
    "options": [
      "Z około 11 mln do 6-7 mln",
      "Z około 6 mln do 11 mln",
      "Z około 20 mln do 18 mln",
      "Nie zmieniła się",
      "Spadła do 2 mln",
      "Wzrosła do 15 mln"
    ],
    "answer": 0,
    "explanation": "Liczba mieszkańców spadła z około 11 milionów do 6-7 milionów wskutek wojen, chorób, głodu i strat terytorialnych.",
    "image": "r03_zniszczenia_wojen.jpg"
  },
  {
    "id": "R03_KRY_02",
    "section": "Kryzys Rzeczpospolitej",
    "type": "multi_select",
    "prompt": "Zaznacz skutki wojen toczonych przez Rzeczpospolitą w latach 1648-1667.",
    "options": [
      "Utrata ponad jednej czwartej terytorium",
      "Spadek liczby ludności",
      "Zniszczenie miast i wsi",
      "Dewaluacja pieniądza",
      "Wzmocnienie tolerancji religijnej",
      "Stały wzrost produkcji rolnej"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Państwo utraciło ponad jedną czwartą terytorium, ludność gwałtownie spadła, miasta i wsie były zniszczone, gospodarka znajdowała się w katastrofalnym stanie, pieniądz uległ dewaluacji, a tolerancja religijna osłabła."
  },
  {
    "id": "R03_KRY_03",
    "section": "Kryzys Rzeczpospolitej",
    "type": "true_false",
    "prompt": "W 1658 r. sejm wygnał arian z Rzeczpospolitej.",
    "options": null,
    "answer": true,
    "explanation": "Wojny i narastająca nietolerancja doprowadziły do wygnania arian w 1658 r. W 1668 r. zakazano też odstępstwa od katolicyzmu."
  },
  {
    "id": "R03_KRY_04",
    "section": "Kryzys Rzeczpospolitej",
    "type": "fill_in",
    "prompt": "Pierwsze uznane liberum veto miało miejsce w roku __________, a łacińskie wyrażenie liberum veto oznaczało wolne __________.",
    "options": null,
    "answer": [
      "1652",
      "nie pozwalam"
    ],
    "altAnswers": [
      [
        "1652",
        "1652 r."
      ],
      [
        "nie pozwalam",
        "wolne nie pozwalam"
      ]
    ],
    "explanation": "W 1652 r. uznano prawo pojedynczego posła do zerwania sejmu. Liberum veto tłumaczono jako „wolne nie pozwalam”.",
    "image": "r03_sejm_liberum_veto.jpg"
  },
  {
    "id": "R03_KRY_05",
    "section": "Kryzys Rzeczpospolitej",
    "type": "scenario",
    "prompt": "Poseł sprzeciwia się przedłużeniu obrad sejmu, wychodzi z sali, a marszałek uznaje jego protest za ważny. Jaki skutek ma zastosowane w ten sposób liberum veto?",
    "options": [
      "Sejm zostaje zerwany i jego ustawy tracą moc",
      "Poseł automatycznie traci mandat",
      "Król sam uchwala wszystkie ustawy",
      "Obrady przechodzą na sejmik",
      "Senat wybiera nowego króla",
      "Sejm trwa bez żadnych zmian"
    ],
    "answer": 0,
    "explanation": "Liberum veto kończyło sejm przed czasem i unieważniało wszystkie ustawy przyjęte podczas jego obrad.",
    "image": "r03_sejm_liberum_veto.jpg"
  },
  {
    "id": "R03_KRY_06",
    "section": "Kryzys Rzeczpospolitej",
    "type": "match",
    "prompt": "Połącz pojęcie z właściwym znaczeniem.",
    "options": null,
    "left": [
      "Zasada jednomyślności",
      "Zasada jedności",
      "Liberum veto"
    ],
    "right": [
      "Wszystkie ustawy przyjmowano lub odrzucano razem",
      "Prawo jednego posła do zerwania sejmu",
      "Wszyscy posłowie i senatorowie musieli zgodzić się na ustawę"
    ],
    "answer": {
      "Zasada jednomyślności": "Wszyscy posłowie i senatorowie musieli zgodzić się na ustawę",
      "Zasada jedności": "Wszystkie ustawy przyjmowano lub odrzucano razem",
      "Liberum veto": "Prawo jednego posła do zerwania sejmu"
    },
    "explanation": "Jednomyślność wymagała zgody wszystkich, jedność łączyła ustawy sejmu w całość, a liberum veto pozwalało pojedynczemu posłowi zerwać sejm."
  },
  {
    "id": "R03_KRY_07",
    "section": "Kryzys Rzeczpospolitej",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do przyczyn wzrostu potęgi magnatów albo do projektu reform Jana Kazimierza.",
    "options": null,
    "items": [
      "Zubożała szlachta zależna od magnatów",
      "Urzędy powierzane magnatom przez króla",
      "Głosowanie większością",
      "Stałe podatki szlachty",
      "Monarchia dziedziczna",
      "Mniejsze straty majątkowe magnatów"
    ],
    "categories": [
      "Wzrost potęgi magnatów",
      "Projekt reform Jana Kazimierza"
    ],
    "answer": {
      "Wzrost potęgi magnatów": [
        "Zubożała szlachta zależna od magnatów",
        "Urzędy powierzane magnatom przez króla",
        "Mniejsze straty majątkowe magnatów"
      ],
      "Projekt reform Jana Kazimierza": [
        "Głosowanie większością",
        "Stałe podatki szlachty",
        "Monarchia dziedziczna"
      ]
    },
    "explanation": "Magnaci rośli w siłę dzięki mniejszym stratom, zależności uboższej szlachty i urzędom. Projekt Jana Kazimierza zakładał większościowe głosowanie, stałe podatki szlachty i monarchię dziedziczną."
  },
  {
    "id": "R03_KRY_08",
    "section": "Kryzys Rzeczpospolitej",
    "type": "odd_one_out",
    "prompt": "Co nie należało do projektu reform Jana Kazimierza: głosowanie większością, stałe podatki szlachty, monarchia dziedziczna, utrzymanie wolnej elekcji.",
    "options": null,
    "answer": "utrzymanie wolnej elekcji",
    "explanation": "Król chciał głosowania większością, stałych podatków i monarchii dziedzicznej. Wolną elekcję planowano zastąpić."
  },
  {
    "id": "R03_KRY_09",
    "section": "Kryzys Rzeczpospolitej",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia kryzysu państwa od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Bitwa pod Mątwami",
      "Wygnanie arian",
      "Abdykacja Jana Kazimierza",
      "Pierwsze liberum veto",
      "Upadek projektu reform",
      "Początek rokoszu Lubomirskiego"
    ],
    "answer": [
      "Pierwsze liberum veto",
      "Wygnanie arian",
      "Upadek projektu reform",
      "Początek rokoszu Lubomirskiego",
      "Bitwa pod Mątwami",
      "Abdykacja Jana Kazimierza"
    ],
    "explanation": "Pierwsze liberum veto uznano w 1652 r., arian wygnano w 1658 r., projekt reform upadł w 1661 r., rokosz wybuchł w 1665 r., Mątwy były w 1666 r., a Jan Kazimierz abdykował w 1668 r."
  },
  {
    "id": "R03_KRY_10",
    "section": "Kryzys Rzeczpospolitej",
    "type": "riddle",
    "prompt": "Magnat, który w 1665 r. wszczął zbrojny bunt przeciwko Janowi Kazimierzowi, to Jerzy...",
    "options": null,
    "answer": "Lubomirski",
    "altAnswers": [
      "Lubomirski",
      "Jerzy Lubomirski"
    ],
    "explanation": "Jerzy Lubomirski stanął na czele rokoszu. Jego wojska pokonały siły królewskie pod Mątwami w 1666 r."
  },
  {
    "id": "R03_TUR_01",
    "section": "Wojny z Turcją i Jan III Sobieski",
    "type": "single_choice",
    "prompt": "Kogo szlachta wybrała na króla Polski w 1669 r.?",
    "options": [
      "Michała Korybuta Wiśniowieckiego",
      "Jana III Sobieskiego",
      "Jana Kazimierza",
      "Władysława IV Wazę",
      "Karola X Gustawa",
      "Jerzego Lubomirskiego"
    ],
    "answer": 0,
    "explanation": "W 1669 r. szlachta wybrała Michała Korybuta Wiśniowieckiego, syna Jeremiego Wiśniowieckiego."
  },
  {
    "id": "R03_TUR_02",
    "section": "Wojny z Turcją i Jan III Sobieski",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki, które osłabiły obronę Rzeczpospolitej przed atakiem Turcji w 1672 r.",
    "options": [
      "Spory między zwolennikami i przeciwnikami króla",
      "Zerwanie dwóch sejmów",
      "Brak pieniędzy na powiększenie armii",
      "Lekceważenie zagrożenia po długim pokoju",
      "Ogromna stała armia gotowa do walki",
      "Sojusz wszystkich magnatów z królem"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Państwo było pogrążone w sporach wewnętrznych, dwa sejmy zerwano, brakowało pieniędzy na armię, a szlachta lekceważyła zagrożenie po ponad 50 latach pokoju z Turcją."
  },
  {
    "id": "R03_TUR_03",
    "section": "Wojny z Turcją i Jan III Sobieski",
    "type": "multi_select",
    "prompt": "Zaznacz postanowienia pokoju w Buczaczu z 1672 r.",
    "options": [
      "Oddanie Podola Turcji",
      "Oddanie części prawobrzeżnej Ukrainy Kozakom",
      "Obowiązek płacenia haraczu sułtanowi",
      "Odzyskanie całych Inflant",
      "Niezależność Prus Książęcych",
      "Przyłączenie Wiednia do Rzeczpospolitej"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Rzeczpospolita oddała Turcji Podole, część prawobrzeżnej Ukrainy przypadła sprzymierzonym z Turcją Kozakom, a państwo miało płacić sułtanowi coroczny haracz."
  },
  {
    "id": "R03_TUR_04",
    "section": "Wojny z Turcją i Jan III Sobieski",
    "type": "riddle",
    "prompt": "Hetman wielki koronny, który podczas wojny 1672 r. rozbijał oddziały tatarskie i uwolnił tysiące ludzi z jasyru, to...",
    "options": null,
    "answer": "Jan Sobieski",
    "altAnswers": [
      "Jan Sobieski",
      "Sobieski",
      "Jan III Sobieski"
    ],
    "explanation": "Jan Sobieski prowadził działania przeciw Tatarom, a w 1673 r. odniósł wielkie zwycięstwo nad Turkami pod Chocimiem."
  },
  {
    "id": "R03_TUR_05",
    "section": "Wojny z Turcją i Jan III Sobieski",
    "type": "fill_in",
    "prompt": "W listopadzie roku __________ Jan Sobieski niemal unicestwił główne siły tureckie pod __________.",
    "options": null,
    "answer": [
      "1673",
      "Chocimiem"
    ],
    "altAnswers": [
      [
        "1673",
        "1673 r."
      ],
      [
        "Chocimiem",
        "Chocim",
        "pod Chocimiem"
      ]
    ],
    "explanation": "Bitwa pod Chocimiem w listopadzie 1673 r. była wielkim zwycięstwem Sobieskiego nad armią turecką.",
    "image": "r03_chocim_1673.jpg"
  },
  {
    "id": "R03_TUR_06",
    "section": "Wojny z Turcją i Jan III Sobieski",
    "type": "true_false",
    "prompt": "Rozejm w Żurawnie z 1676 r. zakończył wojnę z Turcją i zwolnił Rzeczpospolitą z płacenia haraczu, choć Turcja zatrzymała Podole.",
    "options": null,
    "answer": true,
    "explanation": "Na mocy rozejmu w Żurawnie Turcja zatrzymała Podole, Rzeczpospolita odzyskała dwie twierdze na Ukrainie i nie musiała już płacić haraczu."
  },
  {
    "id": "R03_TUR_07",
    "section": "Wojny z Turcją i Jan III Sobieski",
    "type": "scenario",
    "prompt": "Latem 1683 r. niemal stutysięczna armia Kara Mustafy oblega Wiedeń. Jan III Sobieski prowadzi siły polskie, austriackie i niemieckie, by uwolnić miasto. Jak nazywa się taka pomoc wojskowa?",
    "options": [
      "Odsiecz",
      "Rokosz",
      "Pospolite ruszenie",
      "Dymitriada",
      "Protektorat",
      "Konfederacja"
    ],
    "answer": 0,
    "explanation": "Pomoc wojskowa dla oblężonego miasta to odsiecz. Jan III objął dowództwo prawie 70-tysięcznej odsieczy Wiednia.",
    "image": "r03_wieden_1683.jpg"
  },
  {
    "id": "R03_TUR_08",
    "section": "Wojny z Turcją i Jan III Sobieski",
    "type": "match",
    "prompt": "Połącz wydarzenie z rokiem.",
    "options": null,
    "left": [
      "Pokój w Buczaczu",
      "Bitwa pod Chocimiem",
      "Rozejm w Żurawnie",
      "Bitwa pod Wiedniem",
      "Pokój w Karłowicach"
    ],
    "right": [
      "1683",
      "1676",
      "1699",
      "1673",
      "1672"
    ],
    "answer": {
      "Pokój w Buczaczu": "1672",
      "Bitwa pod Chocimiem": "1673",
      "Rozejm w Żurawnie": "1676",
      "Bitwa pod Wiedniem": "1683",
      "Pokój w Karłowicach": "1699"
    },
    "explanation": "Wojny z Turcją i kariera Sobieskiego układają się w ciąg: Buczacz 1672, Chocim 1673, Żurawno 1676, Wiedeń 1683, Karłowice 1699."
  },
  {
    "id": "R03_TUR_09",
    "section": "Wojny z Turcją i Jan III Sobieski",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Bitwa pod Wiedniem",
      "Wybór Jana III Sobieskiego na króla",
      "Pokój w Karłowicach",
      "Pokój w Buczaczu",
      "Bitwa pod Chocimiem",
      "Rozejm w Żurawnie"
    ],
    "answer": [
      "Pokój w Buczaczu",
      "Bitwa pod Chocimiem",
      "Wybór Jana III Sobieskiego na króla",
      "Rozejm w Żurawnie",
      "Bitwa pod Wiedniem",
      "Pokój w Karłowicach"
    ],
    "explanation": "Atak Turcji i Buczacz były w 1672 r., Chocim w 1673 r., wybór Sobieskiego w 1674 r., Żurawno w 1676 r., Wiedeń w 1683 r., a Karłowice w 1699 r."
  },
  {
    "id": "R03_TUR_10",
    "section": "Wojny z Turcją i Jan III Sobieski",
    "type": "single_choice",
    "prompt": "Jaki długofalowy skutek miała bitwa pod Wiedniem dla Europy?",
    "options": [
      "Powstrzymała napór Turków na Europę",
      "Dała Szwecji kontrolę nad Bałtykiem",
      "Przywróciła wolną elekcję w Austrii",
      "Zakończyła potop szwedzki",
      "Oddała Podole Turcji",
      "Doprowadziła do ugody w Perejasławiu"
    ],
    "answer": 0,
    "explanation": "Zwycięstwo z 1683 r. nie zakończyło od razu wojny, ale na zawsze powstrzymało napór Turków na Europę. Rzeczpospolita nie uzyskała z samej wiktorii trwałych korzyści.",
    "image": "r03_wieden_1683.jpg"
  },
  {
    "id": "R03_BAR_01",
    "section": "Barok i sarmatyzm",
    "type": "single_choice",
    "prompt": "Budowę którego rzymskiego kościoła rozpoczęto w 1568 r., co wiąże się z początkami baroku?",
    "options": [
      "Il Gesu",
      "Panteon",
      "Bazylika Mariacka",
      "Notre-Dame",
      "Hagia Sophia",
      "Kościół Mariacki w Gdańsku"
    ],
    "answer": 0,
    "explanation": "Jezuicki Kościół Il Gesu w Rzymie stał się wzorem dla wielu barokowych świątyń w katolickiej Europie."
  },
  {
    "id": "R03_BAR_02",
    "section": "Barok i sarmatyzm",
    "type": "multi_select",
    "prompt": "Zaznacz cechy sztuki barokowej.",
    "options": [
      "Przepych i złoto",
      "Wymyślne dekoracje",
      "Lęk przed pustką",
      "Postacie w ruchu",
      "Światłocień",
      "Całkowita rezygnacja z ozdób"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Barok wyróżniały przepych, złoto, bogate dekoracje i lęk przed pustką; rzeźba ukazywała ruch i napięcie, a malarstwo chętnie stosowało światłocień.",
    "image": "r03_barok_bernini.jpg"
  },
  {
    "id": "R03_BAR_03",
    "section": "Barok i sarmatyzm",
    "type": "match",
    "prompt": "Połącz twórcę z dziełem lub przykładem twórczości.",
    "options": null,
    "left": [
      "Giovanni Lorenzo Bernini",
      "Rembrandt",
      "Jan Andrzej Morsztyn"
    ],
    "right": [
      "Wieczerza w Emaus",
      "Dawid",
      "Do trupa"
    ],
    "answer": {
      "Giovanni Lorenzo Bernini": "Dawid",
      "Rembrandt": "Wieczerza w Emaus",
      "Jan Andrzej Morsztyn": "Do trupa"
    },
    "explanation": "Bernini stworzył barokowego Dawida, Rembrandt namalował Wieczerzę w Emaus, a Jan Andrzej Morsztyn napisał sonet Do trupa."
  },
  {
    "id": "R03_BAR_04",
    "section": "Barok i sarmatyzm",
    "type": "riddle",
    "prompt": "Kontrast między jasnymi i ciemnymi fragmentami obrazu, chętnie stosowany przez malarzy barokowych, to...",
    "options": null,
    "answer": "światłocień",
    "altAnswers": [
      "światłocień",
      "swiatlocien"
    ],
    "explanation": "Światłocień pozwalał artyście skierować uwagę widza na najważniejsze elementy, a pozostałe pozostawić w mroku."
  },
  {
    "id": "R03_BAR_05",
    "section": "Barok i sarmatyzm",
    "type": "true_false",
    "prompt": "Literatura baroku skupiała się raczej na formie niż na treści i miała zachwycać, zadziwiać lub szokować czytelnika.",
    "options": null,
    "answer": true,
    "explanation": "Autorzy barokowi chętnie popisywali się formą i niezwykłymi zestawieniami, czego przykładem jest sonet Jana Andrzeja Morsztyna Do trupa."
  },
  {
    "id": "R03_BAR_06",
    "section": "Barok i sarmatyzm",
    "type": "sort",
    "prompt": "Przyporządkuj cechę do dziedziny sztuki barokowej.",
    "options": null,
    "items": [
      "Spiralne kolumny i bogate dekoracje",
      "Postacie w ruchu lub pełnej napięcia pozie",
      "Światłocień",
      "Zaskakująca i kunsztowna forma"
    ],
    "categories": [
      "Architektura",
      "Rzeźba",
      "Malarstwo",
      "Literatura"
    ],
    "answer": {
      "Architektura": [
        "Spiralne kolumny i bogate dekoracje"
      ],
      "Rzeźba": [
        "Postacie w ruchu lub pełnej napięcia pozie"
      ],
      "Malarstwo": [
        "Światłocień"
      ],
      "Literatura": [
        "Zaskakująca i kunsztowna forma"
      ]
    },
    "explanation": "Architektura tworzyła bogato dekorowane przestrzenie, rzeźba pokazywała ruch, malarstwo używało światłocienia, a literatura skupiała się na efektownej formie."
  },
  {
    "id": "R03_BAR_07",
    "section": "Barok i sarmatyzm",
    "type": "single_choice",
    "prompt": "Która budowla jest przykładem baroku w Polsce?",
    "options": [
      "Kościół Świętych Apostołów Piotra i Pawła w Krakowie",
      "Zamek w Malborku",
      "Katedra w Gnieźnie w stylu romańskim",
      "Biskupin",
      "Rotunda św. Prokopa w Strzelnie",
      "Brama Brandenburska"
    ],
    "answer": 0,
    "explanation": "Kościół Świętych Apostołów Piotra i Pawła w Krakowie należy do najważniejszych polskich przykładów architektury barokowej."
  },
  {
    "id": "R03_BAR_08",
    "section": "Barok i sarmatyzm",
    "type": "fill_in",
    "prompt": "W polskim malarstwie barokowym przeważały __________, a szczególnie typowe dla Polski były portrety __________.",
    "options": null,
    "answer": [
      "portrety",
      "trumienne"
    ],
    "altAnswers": [
      [
        "portrety"
      ],
      [
        "trumienne",
        "portrety trumienne"
      ]
    ],
    "explanation": "W Polsce dominowało malarstwo portretowe, a charakterystycznym rodzimym zjawiskiem były portrety trumienne.",
    "image": "r03_portret_trumienny.jpg"
  },
  {
    "id": "R03_BAR_09",
    "section": "Barok i sarmatyzm",
    "type": "multi_select",
    "prompt": "Zaznacz cechy przypisywane typowemu polskiemu Sarmacie.",
    "options": [
      "Przywiązanie do złotej wolności",
      "Poczucie wyższości wobec innych narodowości",
      "Nietolerancja",
      "Zamożność na pokaz",
      "Ideał szlachcica-ziemianina",
      "Entuzjazm dla gruntownej reformy ustroju"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Sarmata miał poczucie wyższości, był przywiązany do „złotej wolności”, często nietolerancyjny i zamożny na pokaz, a za ideał uważał szlachcica-ziemianina broniącego ojczyzny i wiary.",
    "image": "r03_sarmata.jpg"
  },
  {
    "id": "R03_BAR_10",
    "section": "Barok i sarmatyzm",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do sarmackiego ideału: szlachcic ziemianin, obrońca wiary katolickiej, strażnik złotej wolności, zwolennik gruntownej reformy ustroju.",
    "options": null,
    "answer": "zwolennik gruntownej reformy ustroju",
    "explanation": "Sarmaci bronili istniejącego ustroju i sprzeciwiali się jego zmianom. Pozostałe określenia należą do ideału Sarmaty.",
    "image": "r03_sarmata.jpg"
  },
  {
    "id": "R03_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Kto pokonał Maksymiliana Habsburga pod Byczyną w 1588 r.?",
    "options": [
      "Jan Zamoyski",
      "Jan Karol Chodkiewicz",
      "Stanisław Żółkiewski",
      "Stefan Czarniecki",
      "Jeremi Wiśniowiecki",
      "Jan Sobieski"
    ],
    "answer": 0,
    "explanation": "Jan Zamoyski pokonał rywala Zygmunta III Wazy po spornej elekcji z 1587 r."
  },
  {
    "id": "R03_HARD_02",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz dowódcę z wydarzeniem, z którym jest szczególnie związany.",
    "options": null,
    "left": [
      "Jan Karol Chodkiewicz",
      "Stanisław Żółkiewski",
      "Jeremi Wiśniowiecki",
      "Stefan Czarniecki",
      "Jan III Sobieski"
    ],
    "right": [
      "Obrona Zbaraża",
      "Bitwa pod Kłuszynem",
      "Odsiecz Wiednia",
      "Bitwa pod Kircholmem",
      "Wojna szarpana"
    ],
    "answer": {
      "Jan Karol Chodkiewicz": "Bitwa pod Kircholmem",
      "Stanisław Żółkiewski": "Bitwa pod Kłuszynem",
      "Jeremi Wiśniowiecki": "Obrona Zbaraża",
      "Stefan Czarniecki": "Wojna szarpana",
      "Jan III Sobieski": "Odsiecz Wiednia"
    },
    "explanation": "Chodkiewicz zwyciężył pod Kircholmem, Żółkiewski pod Kłuszynem, Wiśniowiecki bronił Zbaraża, Czarniecki kierował wojną szarpaną, a Sobieski dowodził odsieczą wiedeńską."
  },
  {
    "id": "R03_HARD_03",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wielkie zwycięstwa i bitwy Rzeczpospolitej w porządku chronologicznym.",
    "options": null,
    "items": [
      "Bitwa pod Beresteczkiem",
      "Bitwa pod Kircholmem",
      "Bitwa pod Wiedniem",
      "Bitwa pod Byczyną",
      "Bitwa pod Chocimiem 1621",
      "Bitwa pod Kłuszynem"
    ],
    "answer": [
      "Bitwa pod Byczyną",
      "Bitwa pod Kircholmem",
      "Bitwa pod Kłuszynem",
      "Bitwa pod Chocimiem 1621",
      "Bitwa pod Beresteczkiem",
      "Bitwa pod Wiedniem"
    ],
    "explanation": "Byczyna była w 1588 r., Kircholm w 1605 r., Kłuszyn w 1610 r., Chocim w 1621 r., Beresteczko w 1651 r., a Wiedeń w 1683 r."
  },
  {
    "id": "R03_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Na mocy rozejmu z Moskwą w roku __________ Rzeczpospolita uzyskała m.in. ziemię smoleńską, a w rozejmie andruszowskim z roku __________ Moskwa ją odzyskała.",
    "options": null,
    "answer": [
      "1618",
      "1667"
    ],
    "altAnswers": [
      [
        "1618",
        "1618 r."
      ],
      [
        "1667",
        "1667 r."
      ]
    ],
    "explanation": "Rozejm z 1618 r. przyniósł Rzeczpospolitej ziemię smoleńską. W 1667 r. Moskwa odzyskała ziemie utracone w 1618 r."
  },
  {
    "id": "R03_HARD_05",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Porozumienie przewiduje związek trzech równorzędnych państw: Polski, Litwy i Ukrainy, utworzenie Księstwa Ruskiego oraz dopuszczenie biskupów prawosławnych do senatu. Jak się nazywa?",
    "options": [
      "Ugoda hadziacka",
      "Ugoda zborowska",
      "Ugoda w Perejasławiu",
      "Pokój w Oliwie",
      "Rozejm w Andruszowie",
      "Rozejm w Żurawnie"
    ],
    "answer": 0,
    "explanation": "Takie rozwiązania zawierała ugoda hadziacka z 1658 r. Została odrzucona przez większość Kozaków."
  },
  {
    "id": "R03_HARD_06",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz postanowienia rozejmu andruszowskiego z 1667 r.",
    "options": [
      "Podział Ukrainy wzdłuż Dniepru",
      "Moskwa odzyskuje ziemie utracone w 1618 r.",
      "Wspólna walka przeciw Turkom i Tatarom",
      "Rzeczpospolita odzyskuje wszystkie Inflanty",
      "Prusy Książęce znów stają się lennem",
      "Turcja zrzeka się Podola"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Rozejm dzielił Ukrainę wzdłuż Dniepru, zwracał Moskwie ziemie utracone w 1618 r. i zobowiązywał oba państwa do wspólnej walki przeciw Turkom i Tatarom."
  },
  {
    "id": "R03_HARD_07",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Kto nie należał do dynastii Wazów na polskim tronie: Zygmunt III Waza, Władysław IV Waza, Jan Kazimierz, Michał Korybut Wiśniowiecki.",
    "options": null,
    "answer": "Michał Korybut Wiśniowiecki",
    "explanation": "Zygmunt III, Władysław IV i Jan Kazimierz należeli do dynastii Wazów. Michał Korybut Wiśniowiecki został wybrany po abdykacji Jana Kazimierza."
  },
  {
    "id": "R03_HARD_08",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jaką stawkę cła od polskiego handlu morskiego mogli pobierać Szwedzi po rozejmie z 1629 r.?",
    "options": null,
    "answer": "3,5%",
    "altAnswers": [
      "3,5%",
      "3,5 %",
      "3,5 procent",
      "3.5%"
    ],
    "explanation": "Rozejm z 1629 r. dawał Szwedom prawo pobierania 3,5% cła. Z tego prawa zrezygnowali w rozejmie z 1635 r."
  },
  {
    "id": "R03_HARD_09",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które wydarzenie nastąpiło w 1668 r.?",
    "options": [
      "Abdykacja Jana Kazimierza",
      "Wygnanie arian",
      "Pierwsze liberum veto",
      "Pokój w Oliwie",
      "Ugoda hadziacka",
      "Bitwa pod Beresteczkiem"
    ],
    "answer": 0,
    "explanation": "W 1668 r. sejm zakazał odstępstwa od katolicyzmu, a Jan Kazimierz abdykował. Wygnanie arian nastąpiło dziesięć lat wcześniej."
  },
  {
    "id": "R03_HARD_10",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz porozumienie z jego charakterystycznym skutkiem.",
    "options": null,
    "left": [
      "Pokój w Buczaczu",
      "Rozejm w Żurawnie",
      "Pokój w Karłowicach"
    ],
    "right": [
      "Odzyskanie Podola i części Ukrainy",
      "Obowiązek płacenia haraczu sułtanowi",
      "Zniesienie haraczu przy pozostawieniu Podola Turcji"
    ],
    "answer": {
      "Pokój w Buczaczu": "Obowiązek płacenia haraczu sułtanowi",
      "Rozejm w Żurawnie": "Zniesienie haraczu przy pozostawieniu Podola Turcji",
      "Pokój w Karłowicach": "Odzyskanie Podola i części Ukrainy"
    },
    "explanation": "Buczacz oznaczał haracz i utratę Podola, Żurawno znosiło haracz przy pozostawieniu Podola Turcji, a Karłowice przywracały Rzeczpospolitej Podole i część Ukrainy."
  },
  {
    "id": "R03_HARD_11",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "12 września 1683 r. dowódca turecki do ostatniej chwili próbuje zdobyć oblężone miasto i nie przygotowuje armii do obrony przed nadchodzącą odsieczą. O którego dowódcę chodzi?",
    "options": [
      "Kara Mustafa",
      "Tuhaj-bej",
      "Karol X Gustaw",
      "Dymitr Szujski",
      "Augustyn Kordecki",
      "Jerzy Lubomirski"
    ],
    "answer": 0,
    "explanation": "Wielki wezyr Kara Mustafa dowodził armią oblegającą Wiedeń i nie przygotował jej odpowiednio na atak wojsk Sobieskiego.",
    "image": "r03_wieden_1683.jpg"
  },
  {
    "id": "R03_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz informacje dotyczące baroku w Polsce.",
    "options": [
      "Kościół Piotra i Pawła w Krakowie był barokowy",
      "Portrety trumienne były szczególnie typowe dla Polski",
      "Władysław IV utrzymywał kapelę nadworną i zamawiał opery",
      "Około 30% książek miało charakter religijny",
      "Barok w Polsce zakończył się w XVI w.",
      "W polskim baroku nie powstawały budowle świeckie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W Polsce budowano świątynie wzorowane na Il Gesu, dominowały portrety trumienne, Władysław IV utrzymywał kapelę i zamawiał opery, a około 30% książek miało charakter religijny.",
    "image": "r03_portret_trumienny.jpg"
  },
  {
    "id": "R03_HARD_13",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Szlachta błędnie uważała, że wywodzi się od starożytnego plemienia __________, a sarmackim ideałem był szlachcic-__________.",
    "options": null,
    "answer": [
      "Sarmatów",
      "ziemianin"
    ],
    "altAnswers": [
      [
        "Sarmatów",
        "Sarmaci",
        "Sarmat"
      ],
      [
        "ziemianin",
        "szlachcic-ziemianin"
      ]
    ],
    "explanation": "Nazwa sarmatyzmu pochodzi od rzekomego pochodzenia od Sarmatów. Ideałem był szlachcic-ziemianin, który gospodarował i w razie potrzeby bronił ojczyzny.",
    "image": "r03_sarmata.jpg"
  },
  {
    "id": "R03_HARD_14",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do polskiego baroku: portret trumienny, pałac w Wilanowie, Kościół Piotra i Pawła w Krakowie, rotunda romańska.",
    "options": null,
    "answer": "rotunda romańska",
    "explanation": "Portrety trumienne, pałac w Wilanowie i Kościół Piotra i Pawła są związane z polskim barokiem. Rotunda romańska należy do innej epoki i stylu."
  },
  {
    "id": "R03_HARD_15",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W 1672 r. dwa sejmy mają uchwalić podatki na obronę przed Turcją, ale oba zostają zerwane. Który mechanizm ustrojowy bezpośrednio umożliwiał pojedynczemu posłowi sparaliżowanie obrad?",
    "options": [
      "Liberum veto",
      "Wolna elekcja",
      "Rokosz",
      "Rejestr kozacki",
      "Odsiecz",
      "Jasyr"
    ],
    "answer": 0,
    "explanation": "Liberum veto pozwalało pojedynczemu posłowi zerwać sejm i unieważnić wszystkie przyjęte ustawy, co mogło uniemożliwić przygotowanie państwa do wojny.",
    "image": "r03_sejm_liberum_veto.jpg"
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r03",
  number: 3,
  title: "Rzeczpospolita w XVII wieku",
  icon: "⚔️",
  sectionOrder: [
    "Wojny Wazów: Szwecja, Moskwa i Turcja",
    "Powstanie Chmielnickiego",
    "Potop i wojny z Moskwą",
    "Kryzys Rzeczpospolitej",
    "Wojny z Turcją i Jan III Sobieski",
    "Barok i sarmatyzm"
  ],
  sectionIcons: {
    "Wojny Wazów: Szwecja, Moskwa i Turcja": "⚔️",
    "Powstanie Chmielnickiego": "🔥",
    "Potop i wojny z Moskwą": "🌊",
    "Kryzys Rzeczpospolitej": "🏛️",
    "Wojny z Turcją i Jan III Sobieski": "🛡️",
    "Barok i sarmatyzm": "🎨"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
