// Skróty sekcji (do identyfikatorów ćwiczeń):
//   FRA  = Francja absolutna
//   ANG  = Anglia parlamentarna
//   OSW  = Oświecenie i nowe potęgi
//   USA  = Narodziny Stanów Zjednoczonych
//   REW  = Rewolucja francuska
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_FRA_01",
    "section": "Francja absolutna",
    "type": "single_choice",
    "prompt": "W którym roku Ludwik XIV rozpoczął samodzielne rządy we Francji?",
    "options": [
      "1598",
      "1624",
      "1649",
      "1661",
      "1685",
      "1715"
    ],
    "answer": 3,
    "explanation": "Ludwik XIV objął samodzielne rządy w 1661 r. i sprawował je do śmierci w 1715 r.",
    "image": "r04_ludwik_xiv_portret.jpg"
  },
  {
    "id": "R04_FRA_02",
    "section": "Francja absolutna",
    "type": "multi_select",
    "prompt": "Zaznacz uprawnienia, które w monarchii absolutnej Ludwika XIV należały do króla.",
    "options": [
      "Ustanawianie praw",
      "Decydowanie o wojnie i pokoju",
      "Ustalanie podatków",
      "Decydowanie o religii poddanych",
      "Pełnienie funkcji najwyższego sędziego",
      "Obowiązek uzyskania zgody parlamentu na każdą decyzję"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "W absolutyzmie Ludwik XIV sam ustanawiał prawa, decydował o wojnie, pokoju, podatkach i religii oraz był najwyższym sędzią. Nie podlegał bieżącej kontroli parlamentu."
  },
  {
    "id": "R04_FRA_03",
    "section": "Francja absolutna",
    "type": "true_false",
    "prompt": "Edykt nantejski został wydany przez Henryka IV w 1598 r. i zapewniał hugenotom ograniczoną wolność wyznania.",
    "options": null,
    "answer": true,
    "explanation": "Henryk IV wydał edykt nantejski w 1598 r. Dokument kończył okres wojen religijnych i dawał hugenotom ograniczoną wolność wyznania."
  },
  {
    "id": "R04_FRA_04",
    "section": "Francja absolutna",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia dotyczące Francji w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Początek rządów kardynała Richelieu",
      "Odwołanie edyktu nantejskiego",
      "Noc św. Bartłomieja",
      "Początek samodzielnych rządów Ludwika XIV",
      "Edykt nantejski",
      "Początek wojen religijnych we Francji"
    ],
    "answer": [
      "Początek wojen religijnych we Francji",
      "Noc św. Bartłomieja",
      "Edykt nantejski",
      "Początek rządów kardynała Richelieu",
      "Początek samodzielnych rządów Ludwika XIV",
      "Odwołanie edyktu nantejskiego"
    ],
    "explanation": "Kolejne daty to 1562, 1572, 1598, 1624, 1661 i 1685."
  },
  {
    "id": "R04_FRA_05",
    "section": "Francja absolutna",
    "type": "match",
    "prompt": "Połącz postać lub miejsce z właściwym skojarzeniem.",
    "options": null,
    "left": [
      "Kardynał Richelieu",
      "Jean Baptiste Colbert",
      "Molier",
      "Wersal"
    ],
    "right": [
      "wzmacnianie władzy królewskiej",
      "reformy gospodarcze",
      "komedie",
      "dwór Ludwika XIV"
    ],
    "answer": {
      "Kardynał Richelieu": "wzmacnianie władzy królewskiej",
      "Jean Baptiste Colbert": "reformy gospodarcze",
      "Molier": "komedie",
      "Wersal": "dwór Ludwika XIV"
    },
    "explanation": "Richelieu wzmacniał władzę monarchy, Colbert reformował gospodarkę, Molier był dramatopisarzem, a Wersal stał się centrum dworu Ludwika XIV."
  },
  {
    "id": "R04_FRA_06",
    "section": "Francja absolutna",
    "type": "fill_in",
    "prompt": "Kardynał __________ został pierwszym ministrem w 1624 r., a Ludwik XIV rozpoczął samodzielne rządy w roku __________.",
    "options": null,
    "answer": [
      "Richelieu",
      "1661"
    ],
    "explanation": "Richelieu faktycznie kierował polityką Francji od 1624 do 1642 r., a Ludwik XIV rozpoczął samodzielne rządy w 1661 r."
  },
  {
    "id": "R04_FRA_07",
    "section": "Francja absolutna",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do polityki gospodarczej Colberta: wspieranie eksportu, wysokie cła na import, dbanie o jakość francuskich wyrobów, swobodny napływ zagranicznych towarów.",
    "options": null,
    "answer": "swobodny napływ zagranicznych towarów",
    "explanation": "Colbert ograniczał import wysokimi cłami, a wspierał eksport i jakość francuskich wyrobów."
  },
  {
    "id": "R04_FRA_08",
    "section": "Francja absolutna",
    "type": "scenario",
    "prompt": "Jesteś arystokratą za panowania Ludwika XIV. Król oczekuje, że będziesz często przebywać na jego pełnym rozrywek dworze pod Paryżem. Po co władca gromadzi tam możnych?",
    "options": [
      "Aby łatwiej ich kontrolować",
      "Aby oddać im władzę nad podatkami",
      "Aby przygotować ich do emigracji",
      "Aby stworzyć niezależny parlament",
      "Aby przekazać im dowództwo nad flotą",
      "Aby zlikwidować urząd królewski"
    ],
    "answer": 0,
    "explanation": "Ludwik XIV zgromadził arystokrację na dworze w Wersalu, ponieważ tam łatwiej było mu ją kontrolować i ograniczać skłonność możnych do buntów.",
    "image": "r04_palac_w_wersalu.jpg"
  },
  {
    "id": "R04_FRA_09",
    "section": "Francja absolutna",
    "type": "riddle",
    "prompt": "Jak nazywano francuskich kalwinistów?",
    "options": null,
    "answer": "hugenoci",
    "altAnswers": [
      "hugenoci",
      "Hugenoci"
    ],
    "explanation": "Francuskich zwolenników kalwinizmu nazywano hugenotami."
  },
  {
    "id": "R04_FRA_10",
    "section": "Francja absolutna",
    "type": "single_choice",
    "prompt": "Co wydarzyło się we Francji w 1685 r.?",
    "options": [
      "Wydano edykt nantejski",
      "Rozpoczęły się wojny religijne",
      "Odwołano edykt nantejski",
      "Richelieu został pierwszym ministrem",
      "Henryk IV objął tron",
      "Ludwik XIV zmarł"
    ],
    "answer": 2,
    "explanation": "W 1685 r. Ludwik XIV odwołał edykt nantejski, kończąc przyznaną wcześniej hugenotom ograniczoną tolerancję."
  },
  {
    "id": "R04_FRA_11",
    "section": "Francja absolutna",
    "type": "sort",
    "prompt": "Przyporządkuj elementy potęgi Francji Ludwika XIV do właściwych dziedzin.",
    "options": null,
    "items": [
      "reformy Colberta",
      "wysokie cła na import",
      "stała armia",
      "prawie 300 twierdz",
      "komedie Moliera",
      "kultura dworska Wersalu"
    ],
    "categories": [
      "gospodarka",
      "wojskowość",
      "kultura"
    ],
    "answer": {
      "gospodarka": [
        "reformy Colberta",
        "wysokie cła na import"
      ],
      "wojskowość": [
        "stała armia",
        "prawie 300 twierdz"
      ],
      "kultura": [
        "komedie Moliera",
        "kultura dworska Wersalu"
      ]
    },
    "explanation": "Colbert wzmacniał gospodarkę, armia i system twierdz budowały siłę militarną, a Wersal i twórczość Moliera należały do rozkwitu kultury.",
    "image": "r04_palac_w_wersalu.jpg"
  },
  {
    "id": "R04_ANG_01",
    "section": "Anglia parlamentarna",
    "type": "single_choice",
    "prompt": "Która flota poniosła klęskę u wybrzeży Anglii w 1588 r.?",
    "options": [
      "Wielka Armada",
      "Armia Nowego Wzoru",
      "flota holenderska",
      "flota francuska",
      "flota pruska",
      "flota rosyjska"
    ],
    "answer": 0,
    "explanation": "W 1588 r. angielska flota pokonała hiszpańską Wielką Armadę, która miała dokonać inwazji na Anglię.",
    "image": "r04_wielka_armada.jpg"
  },
  {
    "id": "R04_ANG_02",
    "section": "Anglia parlamentarna",
    "type": "true_false",
    "prompt": "Karol I Stuart dążył do rządów absolutnych, ale potrzebował zgody parlamentu na nowe podatki.",
    "options": null,
    "answer": true,
    "explanation": "Konflikt Karola I z parlamentem wynikał m.in. z absolutystycznych dążeń króla i sporu o podatki."
  },
  {
    "id": "R04_ANG_03",
    "section": "Anglia parlamentarna",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z dziejów XVII-wiecznej Anglii w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Chwalebna rewolucja",
      "Ścięcie Karola I",
      "Wybuch wojny domowej",
      "Deklaracja praw",
      "Początek długiego parlamentu",
      "Przywrócenie monarchii"
    ],
    "answer": [
      "Początek długiego parlamentu",
      "Wybuch wojny domowej",
      "Ścięcie Karola I",
      "Przywrócenie monarchii",
      "Chwalebna rewolucja",
      "Deklaracja praw"
    ],
    "explanation": "Daty tych wydarzeń to kolejno 1640, 1642, 1649, 1660, 1688 i 1689."
  },
  {
    "id": "R04_ANG_04",
    "section": "Anglia parlamentarna",
    "type": "match",
    "prompt": "Połącz postać z właściwym wydarzeniem lub rolą.",
    "options": null,
    "left": [
      "Elżbieta I",
      "Karol I",
      "Oliver Cromwell",
      "Wilhelm III Orański"
    ],
    "right": [
      "czasy elżbietańskie",
      "ścięcie po zwycięstwie parlamentu",
      "Armia Nowego Wzoru",
      "zaprzysiężenie Deklaracji praw"
    ],
    "answer": {
      "Elżbieta I": "czasy elżbietańskie",
      "Karol I": "ścięcie po zwycięstwie parlamentu",
      "Oliver Cromwell": "Armia Nowego Wzoru",
      "Wilhelm III Orański": "zaprzysiężenie Deklaracji praw"
    },
    "explanation": "Elżbieta I dała nazwę epoce rozwoju Anglii, Karol I został stracony, Cromwell zorganizował Armię Nowego Wzoru, a Wilhelm III zaprzysiągł Deklarację praw."
  },
  {
    "id": "R04_ANG_05",
    "section": "Anglia parlamentarna",
    "type": "multi_select",
    "prompt": "Zaznacz postanowienia Deklaracji praw z 1689 r. opisane w materiale.",
    "options": [
      "Król nie może wykonywać praw bez zgody parlamentu",
      "Król nie może ściągać pieniędzy bez zgody parlamentu",
      "Wybory do parlamentu powinny być wolne",
      "Parlament powinien być często zwoływany",
      "Król może samowolnie nakładać podatki",
      "Parlament zostaje rozwiązany na stałe"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Deklaracja praw ograniczała samowolę monarchy, chroniła podatkowe uprawnienia parlamentu, wolność wyborów i regularne zwoływanie parlamentu.",
    "image": "r04_parlament_angielski.jpg"
  },
  {
    "id": "R04_ANG_06",
    "section": "Anglia parlamentarna",
    "type": "fill_in",
    "prompt": "Armię Nowego Wzoru zorganizował Oliver __________, a król Karol I został ścięty w roku __________.",
    "options": null,
    "answer": [
      "Cromwell",
      "1649"
    ],
    "explanation": "Oliver Cromwell stworzył skuteczną Armię Nowego Wzoru. Po zwycięstwie parlamentarzystów Karol I został stracony w 1649 r."
  },
  {
    "id": "R04_ANG_07",
    "section": "Anglia parlamentarna",
    "type": "odd_one_out",
    "prompt": "Wskaż postać niezwiązaną z angielską monarchią XVII wieku: Karol I, Karol II, Jakub II, Ludwik XIV.",
    "options": null,
    "answer": "Ludwik XIV",
    "explanation": "Ludwik XIV był królem Francji. Pozostałe trzy postacie były władcami Anglii z dynastii Stuartów."
  },
  {
    "id": "R04_ANG_08",
    "section": "Anglia parlamentarna",
    "type": "scenario",
    "prompt": "Jest rok 1640. Król potrzebuje nowych podatków, więc zwołuje parlament, który sprzeciwia się jego absolutystycznym dążeniom. Który monarcha znajduje się w tej sytuacji?",
    "options": [
      "Karol I",
      "Karol II",
      "Jakub II",
      "Wilhelm III Orański",
      "Ludwik XIV",
      "Fryderyk II"
    ],
    "answer": 0,
    "explanation": "W 1640 r. konflikt Karola I z długim parlamentem otworzył drogę do rewolucji angielskiej."
  },
  {
    "id": "R04_ANG_09",
    "section": "Anglia parlamentarna",
    "type": "riddle",
    "prompt": "Jak nazywa się ustrój, w którym władza króla jest ograniczona przez parlament?",
    "options": null,
    "answer": "monarchia parlamentarna",
    "altAnswers": [
      "monarchia parlamentarna",
      "Monarchia parlamentarna"
    ],
    "explanation": "Po chwalebnej rewolucji i Deklaracji praw Anglia stała się monarchią parlamentarną."
  },
  {
    "id": "R04_ANG_10",
    "section": "Anglia parlamentarna",
    "type": "single_choice",
    "prompt": "W którym roku rozpoczął obrady tak zwany długi parlament?",
    "options": [
      "1588",
      "1603",
      "1640",
      "1649",
      "1660",
      "1689"
    ],
    "answer": 2,
    "explanation": "Długi parlament rozpoczął obrady w 1640 r. i ograniczył możliwość samowolnego nakładania podatków przez króla."
  },
  {
    "id": "R04_ANG_11",
    "section": "Anglia parlamentarna",
    "type": "scenario",
    "prompt": "W 1688 r. dotychczasowy król ucieka z kraju, a koronę otrzymuje protestancki władca Holandii. Jak nazywa się ta zmiana władcy?",
    "options": [
      "Chwalebna rewolucja",
      "Wielka trwoga",
      "Noc św. Bartłomieja",
      "Bostońska herbatka",
      "Wojna siedmioletnia",
      "Wielki terror"
    ],
    "answer": 0,
    "explanation": "Objęcie władzy przez Wilhelma Orańskiego w latach 1688-1689 nazwano chwalebną rewolucją. Jej następstwem było umocnienie monarchii parlamentarnej.",
    "image": "r04_parlament_angielski.jpg"
  },
  {
    "id": "R04_OSW_01",
    "section": "Oświecenie i nowe potęgi",
    "type": "single_choice",
    "prompt": "Który element NIE należał do trzech filarów starego ładu?",
    "options": [
      "Monarchia absolutna",
      "Poparcie władcy przez Kościół",
      "Uprzywilejowanie duchowieństwa i szlachty",
      "Równe prawa wszystkich ludzi",
      "Silna pozycja stanów uprzywilejowanych",
      "Ograniczony wpływ chłopów na rządy"
    ],
    "answer": 3,
    "explanation": "Stary ład opierał się na monarchii absolutnej, wsparciu władcy przez Kościół oraz uprzywilejowanej pozycji duchowieństwa i szlachty. Równość praw była ideą oświecenia."
  },
  {
    "id": "R04_OSW_02",
    "section": "Oświecenie i nowe potęgi",
    "type": "multi_select",
    "prompt": "Zaznacz idee głoszone przez filozofów oświecenia.",
    "options": [
      "Równe prawa dla wszystkich ludzi",
      "Wolność słowa",
      "Wolność wyznania",
      "Sprawiedliwe rządy",
      "Powszechna oświata",
      "Dziedziczne przywileje stanowe jako podstawa państwa"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Filozofowie oświecenia krytykowali stary ład i domagali się równych praw, wolności słowa i wyznania, sprawiedliwych rządów oraz powszechnej oświaty."
  },
  {
    "id": "R04_OSW_03",
    "section": "Oświecenie i nowe potęgi",
    "type": "match",
    "prompt": "Połącz postać z ideą lub osiągnięciem.",
    "options": null,
    "left": [
      "Jean-Jacques Rousseau",
      "Monteskiusz",
      "Beniamin Franklin",
      "bracia Montgolfier"
    ],
    "right": [
      "umowa społeczna",
      "trójpodział władzy",
      "piorunochron",
      "balon"
    ],
    "answer": {
      "Jean-Jacques Rousseau": "umowa społeczna",
      "Monteskiusz": "trójpodział władzy",
      "Beniamin Franklin": "piorunochron",
      "bracia Montgolfier": "balon"
    },
    "explanation": "Rousseau pisał o umowie społecznej, Monteskiusz o trójpodziale władzy, Franklin skonstruował piorunochron, a bracia Montgolfier zasłynęli balonem.",
    "image": "r04_monteskiusz_portret.jpg"
  },
  {
    "id": "R04_OSW_04",
    "section": "Oświecenie i nowe potęgi",
    "type": "fill_in",
    "prompt": "Pierwszy tom Wielkiej encyklopedii francuskiej wydano w roku __________, a pionierami lotów balonowych byli bracia __________.",
    "options": null,
    "answer": [
      "1751",
      "Montgolfier"
    ],
    "explanation": "Pierwszy tom Wielkiej encyklopedii francuskiej ukazał się w 1751 r., a bracia Montgolfier zapisali się w dziejach techniki dzięki balonom.",
    "image": "r04_balony_montgolfier.jpg"
  },
  {
    "id": "R04_OSW_05",
    "section": "Oświecenie i nowe potęgi",
    "type": "true_false",
    "prompt": "Oświecenie zaczęło się w Anglii i Francji pod koniec XVII w., a trwało do pierwszych lat XIX w.",
    "options": null,
    "answer": true,
    "explanation": "Taką chronologię oświecenia podaje materiał: początki pod koniec XVII w. w Anglii i Francji, a koniec w pierwszych latach XIX w."
  },
  {
    "id": "R04_OSW_06",
    "section": "Oświecenie i nowe potęgi",
    "type": "odd_one_out",
    "prompt": "Wskaż element niepasujący do starego ładu: monarchia absolutna, poparcie władcy przez Kościół, uprzywilejowanie szlachty i duchowieństwa, powszechna równość praw.",
    "options": null,
    "answer": "powszechna równość praw",
    "explanation": "Powszechna równość praw była postulatem oświecenia, a nie filarem starego ładu."
  },
  {
    "id": "R04_OSW_07",
    "section": "Oświecenie i nowe potęgi",
    "type": "scenario",
    "prompt": "Monarcha zachowuje pełnię władzy, ale pod wpływem nowych idei rozwija szkolnictwo, tolerancję i gospodarkę, chcąc poprawić dobrobyt poddanych. Jak określa się taki ustrój?",
    "options": [
      "Absolutyzm oświecony",
      "Monarchia parlamentarna",
      "Republika",
      "Monarchia stanowa",
      "Demokracja bezpośrednia",
      "Dyktatura wojskowa"
    ],
    "answer": 0,
    "explanation": "Absolutyzm oświecony łączył absolutną władzę monarchy z wybranymi reformami inspirowanymi oświeceniem."
  },
  {
    "id": "R04_OSW_08",
    "section": "Oświecenie i nowe potęgi",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z nowymi potęgami Europy w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Początek samodzielnych rządów Katarzyny II",
      "Prusy stają się królestwem",
      "Początek samodzielnych rządów Piotra I",
      "I rozbiór Polski",
      "Początek rządów Fryderyka II",
      "Uniezależnienie Prus Książęcych od Polski"
    ],
    "answer": [
      "Uniezależnienie Prus Książęcych od Polski",
      "Początek samodzielnych rządów Piotra I",
      "Prusy stają się królestwem",
      "Początek rządów Fryderyka II",
      "Początek samodzielnych rządów Katarzyny II",
      "I rozbiór Polski"
    ],
    "explanation": "Kolejne daty to 1657, 1689, 1701, 1740, 1762 i 1772."
  },
  {
    "id": "R04_OSW_09",
    "section": "Oświecenie i nowe potęgi",
    "type": "single_choice",
    "prompt": "Co Piotr I Wielki osiągnął dzięki wojnie ze Szwecją?",
    "options": [
      "Dostęp Rosji do Bałtyku",
      "Przejęcie Śląska",
      "Niepodległość trzynastu kolonii",
      "Koronę Anglii",
      "Likwidację monarchii w Rosji",
      "Unię z Francją"
    ],
    "answer": 0,
    "explanation": "Piotr I wywalczył dla Rosji dostęp do Bałtyku i założył Sankt Petersburg, co wzmacniało kontakty z Zachodem.",
    "image": "r04_piotr_wielki_portret.jpg"
  },
  {
    "id": "R04_OSW_10",
    "section": "Oświecenie i nowe potęgi",
    "type": "sort",
    "prompt": "Przyporządkuj władców do państw, którymi rządzili.",
    "options": null,
    "items": [
      "Piotr I",
      "Katarzyna II",
      "Fryderyk II",
      "Maria Teresa",
      "Józef II"
    ],
    "categories": [
      "Rosja",
      "Prusy",
      "Austria"
    ],
    "answer": {
      "Rosja": [
        "Piotr I",
        "Katarzyna II"
      ],
      "Prusy": [
        "Fryderyk II"
      ],
      "Austria": [
        "Maria Teresa",
        "Józef II"
      ]
    },
    "explanation": "Piotr I i Katarzyna II rządzili Rosją, Fryderyk II Prusami, a Maria Teresa i Józef II monarchią Habsburgów.",
    "image": "r04_fryderyk_ii_portret.jpg"
  },
  {
    "id": "R04_OSW_11",
    "section": "Oświecenie i nowe potęgi",
    "type": "riddle",
    "prompt": "Jak nazywano cechę państwa pruskiego polegającą na wyjątkowo dużym znaczeniu armii i dyscypliny wojskowej?",
    "options": null,
    "answer": "militaryzm",
    "altAnswers": [
      "militaryzm",
      "Militaryzm"
    ],
    "explanation": "Państwo pruskie cechował militaryzm, a jego armia uchodziła za jedną z najlepiej wyszkolonych w Europie."
  },
  {
    "id": "R04_USA_01",
    "section": "Narodziny Stanów Zjednoczonych",
    "type": "single_choice",
    "prompt": "Ile kolonii brytyjskich powstało na wschodnim wybrzeżu Ameryki Północnej?",
    "options": [
      "7",
      "10",
      "12",
      "13",
      "15",
      "18"
    ],
    "answer": 3,
    "explanation": "Angielscy osadnicy utworzyli trzynaście kolonii brytyjskich na wschodnim wybrzeżu Ameryki Północnej."
  },
  {
    "id": "R04_USA_02",
    "section": "Narodziny Stanów Zjednoczonych",
    "type": "multi_select",
    "prompt": "Zaznacz przyczyny narastania konfliktu między koloniami a Wielką Brytanią.",
    "options": [
      "Ograniczanie rozwoju rzemiosła w koloniach",
      "Nakaz prowadzenia handlu za pośrednictwem brytyjskich okrętów",
      "Cła na towary sprowadzane do kolonii",
      "Próba zdobycia przez kolonie Śląska",
      "Zniesienie wszystkich podatków przez Londyn",
      "Dążenie Karola I do absolutyzmu"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Kolonistów oburzały ograniczenia gospodarcze i handlowe oraz cła nakładane przez Londyn."
  },
  {
    "id": "R04_USA_03",
    "section": "Narodziny Stanów Zjednoczonych",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia prowadzące do powstania Stanów Zjednoczonych w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Kapitulacja Anglików pod Yorktown",
      "Konstytucja Stanów Zjednoczonych",
      "Bostońska herbatka",
      "Deklaracja niepodległości",
      "Początek wojny o niepodległość",
      "Uznanie niepodległości USA przez Wielką Brytanię"
    ],
    "answer": [
      "Bostońska herbatka",
      "Początek wojny o niepodległość",
      "Deklaracja niepodległości",
      "Kapitulacja Anglików pod Yorktown",
      "Uznanie niepodległości USA przez Wielką Brytanię",
      "Konstytucja Stanów Zjednoczonych"
    ],
    "explanation": "Wydarzenia przypadają kolejno na lata 1773, 1775, 1776, 1781, 1783 i 1787.",
    "image": "r04_deklaracja_niepodleglosci.jpg"
  },
  {
    "id": "R04_USA_04",
    "section": "Narodziny Stanów Zjednoczonych",
    "type": "match",
    "prompt": "Połącz datę z wydarzeniem dotyczącym walki kolonii o niepodległość.",
    "options": null,
    "left": [
      "1773",
      "1776",
      "1781",
      "1783"
    ],
    "right": [
      "bostońska herbatka",
      "Deklaracja niepodległości",
      "kapitulacja pod Yorktown",
      "uznanie niepodległości USA"
    ],
    "answer": {
      "1773": "bostońska herbatka",
      "1776": "Deklaracja niepodległości",
      "1781": "kapitulacja pod Yorktown",
      "1783": "uznanie niepodległości USA"
    },
    "explanation": "Bostońska herbatka miała miejsce w 1773 r., Deklarację ogłoszono w 1776 r., Anglicy skapitulowali pod Yorktown w 1781 r., a w 1783 r. uznali niepodległość USA."
  },
  {
    "id": "R04_USA_05",
    "section": "Narodziny Stanów Zjednoczonych",
    "type": "true_false",
    "prompt": "Konstytucja Stanów Zjednoczonych z 1787 r. wprowadziła trójpodział władzy.",
    "options": null,
    "answer": true,
    "explanation": "Konstytucja z 1787 r. dzieliła władzę na ustawodawczą, wykonawczą i sądowniczą, zgodnie z ideą Monteskiusza."
  },
  {
    "id": "R04_USA_06",
    "section": "Narodziny Stanów Zjednoczonych",
    "type": "fill_in",
    "prompt": "Dwaj Polacy, którzy odznaczyli się w wojnie o niepodległość Stanów Zjednoczonych, to Tadeusz __________ i Kazimierz __________.",
    "options": null,
    "answer": [
      "Kościuszko",
      "Pułaski"
    ],
    "explanation": "W wojnie po stronie kolonistów zasłużyli się Tadeusz Kościuszko i Kazimierz Pułaski."
  },
  {
    "id": "R04_USA_07",
    "section": "Narodziny Stanów Zjednoczonych",
    "type": "odd_one_out",
    "prompt": "Wskaż miejsce niezwiązane z wojną o niepodległość Stanów Zjednoczonych: Lexington, Concord, Yorktown, Wersal.",
    "options": null,
    "answer": "Wersal",
    "explanation": "Lexington, Concord i Yorktown wiążą się z wojną o niepodległość. Wersal był rezydencją francuskich monarchów."
  },
  {
    "id": "R04_USA_08",
    "section": "Narodziny Stanów Zjednoczonych",
    "type": "scenario",
    "prompt": "Jest rok 1773. Mieszkańcy brytyjskich kolonii protestują przeciw cłom i zatapiają w porcie ładunek herbaty. Jak nazwano to wydarzenie?",
    "options": [
      "Bostońska herbatka",
      "Chwalebna rewolucja",
      "Wielka trwoga",
      "Noc św. Bartłomieja",
      "Wielki terror",
      "Bitwa pod Yorktown"
    ],
    "answer": 0,
    "explanation": "Protest kolonistów z 1773 r., polegający na zatopieniu ładunku herbaty, przeszedł do historii jako bostońska herbatka.",
    "image": "r04_bostonska_herbatka.jpg"
  },
  {
    "id": "R04_USA_09",
    "section": "Narodziny Stanów Zjednoczonych",
    "type": "riddle",
    "prompt": "Jak nazywa się dokument ogłoszony 4 lipca 1776 r. przez przedstawicieli trzynastu kolonii?",
    "options": null,
    "answer": "Deklaracja niepodległości",
    "altAnswers": [
      "Deklaracja niepodległości",
      "deklaracja niepodległości"
    ],
    "explanation": "4 lipca 1776 r. przedstawiciele trzynastu kolonii ogłosili Deklarację niepodległości."
  },
  {
    "id": "R04_USA_10",
    "section": "Narodziny Stanów Zjednoczonych",
    "type": "sort",
    "prompt": "Przyporządkuj wydarzenia do okresu przed wojną lub do czasu wojny o niepodległość.",
    "options": null,
    "items": [
      "cła brytyjskie",
      "bostońska herbatka",
      "bitwa pod Lexington i Concord",
      "Deklaracja niepodległości",
      "kapitulacja pod Yorktown",
      "pokój z 1783 r."
    ],
    "categories": [
      "przed wybuchem wojny",
      "wojna o niepodległość"
    ],
    "answer": {
      "przed wybuchem wojny": [
        "cła brytyjskie",
        "bostońska herbatka"
      ],
      "wojna o niepodległość": [
        "bitwa pod Lexington i Concord",
        "Deklaracja niepodległości",
        "kapitulacja pod Yorktown",
        "pokój z 1783 r."
      ]
    },
    "explanation": "Cła i bostońska herbatka poprzedzały wybuch wojny w 1775 r.; pozostałe wydarzenia nastąpiły już w czasie konfliktu."
  },
  {
    "id": "R04_USA_11",
    "section": "Narodziny Stanów Zjednoczonych",
    "type": "scenario",
    "prompt": "Twórcy nowej konstytucji chcą zapobiec skupieniu całej władzy w jednych rękach. Którą koncepcję oświeceniową wykorzystują?",
    "options": [
      "Trójpodział władzy",
      "Rację stanu",
      "Absolutyzm",
      "Militaryzm",
      "Przywileje stanowe",
      "Monarchię dziedziczną"
    ],
    "answer": 0,
    "explanation": "Konstytucja USA z 1787 r. wprowadziła trójpodział władzy na ustawodawczą, wykonawczą i sądowniczą."
  },
  {
    "id": "R04_REW_01",
    "section": "Rewolucja francuska",
    "type": "single_choice",
    "prompt": "Który stan we Francji starego ładu płacił wysokie podatki i obejmował mieszczan oraz chłopów?",
    "options": [
      "Stan pierwszy",
      "Stan drugi",
      "Stan trzeci",
      "Duchowieństwo",
      "Arystokracja dworska",
      "Parlament"
    ],
    "answer": 2,
    "explanation": "Stan trzeci obejmował mieszczan i chłopów. Był bardzo zróżnicowany majątkowo, ale ponosił ciężar wysokich podatków.",
    "image": "r04_spoleczenstwo_stanowe_francji.jpg"
  },
  {
    "id": "R04_REW_02",
    "section": "Rewolucja francuska",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki, które sprzyjały wybuchowi rewolucji francuskiej.",
    "options": [
      "Nierówności stanowe",
      "Wysokie obciążenia stanu trzeciego",
      "Ogromne długi państwa",
      "Sprzeciw duchowieństwa i szlachty wobec nowych podatków",
      "Krytyka starego ładu przez myślicieli oświecenia",
      "Pełna równość podatkowa wszystkich stanów"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Rewolucji sprzyjały nierówności starego ładu, ciężary stanu trzeciego, kryzys finansowy państwa, opór stanów uprzywilejowanych przed podatkami i krytyka oświeceniowa.",
    "image": "r04_spoleczenstwo_stanowe_francji.jpg"
  },
  {
    "id": "R04_REW_03",
    "section": "Rewolucja francuska",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia rewolucji francuskiej w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Uchwalenie konstytucji",
      "Zburzenie Bastylii",
      "Ustawa o duchowieństwie",
      "Ogłoszenie Zgromadzenia Narodowego",
      "Deklaracja praw człowieka i obywatela",
      "Zniesienie przywilejów stanowych"
    ],
    "answer": [
      "Ogłoszenie Zgromadzenia Narodowego",
      "Zburzenie Bastylii",
      "Zniesienie przywilejów stanowych",
      "Deklaracja praw człowieka i obywatela",
      "Ustawa o duchowieństwie",
      "Uchwalenie konstytucji"
    ],
    "explanation": "W 1789 r. powstało Zgromadzenie Narodowe, zdobyto Bastylię, zniesiono przywileje i uchwalono Deklarację; Ustawa o duchowieństwie pochodzi z 1790 r., a konstytucja z 1791 r."
  },
  {
    "id": "R04_REW_04",
    "section": "Rewolucja francuska",
    "type": "match",
    "prompt": "Połącz element społeczeństwa Francji z właściwym opisem.",
    "options": null,
    "left": [
      "stan pierwszy",
      "stan drugi",
      "stan trzeci",
      "burżuazja"
    ],
    "right": [
      "duchowieństwo",
      "szlachta",
      "mieszczanie i chłopi",
      "najbogatsi mieszkańcy miast"
    ],
    "answer": {
      "stan pierwszy": "duchowieństwo",
      "stan drugi": "szlachta",
      "stan trzeci": "mieszczanie i chłopi",
      "burżuazja": "najbogatsi mieszkańcy miast"
    },
    "explanation": "Pierwszym stanem było duchowieństwo, drugim szlachta, trzecim reszta społeczeństwa; burżuazja należała do najbogatszej części mieszkańców miast."
  },
  {
    "id": "R04_REW_05",
    "section": "Rewolucja francuska",
    "type": "true_false",
    "prompt": "Deklaracja praw człowieka i obywatela uznała naród za źródło władzy.",
    "options": null,
    "answer": true,
    "explanation": "Deklaracja z 1789 r. uznawała ludzi za wolnych i równych, przyznawała m.in. wolność słowa i wyznania oraz wskazywała naród jako źródło władzy."
  },
  {
    "id": "R04_REW_06",
    "section": "Rewolucja francuska",
    "type": "fill_in",
    "prompt": "Bastylia została zdobyta przez lud Paryża 14 lipca roku __________, a Francja stała się monarchią konstytucyjną w roku __________.",
    "options": null,
    "answer": [
      "1789",
      "1791"
    ],
    "explanation": "Zdobycie Bastylii 14 lipca 1789 r. stało się jednym z symboli rewolucji. Konstytucja z 1791 r. przekształciła Francję w monarchię konstytucyjną.",
    "image": "r04_bastylia.jpg"
  },
  {
    "id": "R04_REW_07",
    "section": "Rewolucja francuska",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie był stanem społecznym Francji starego ładu: duchowieństwo, szlachta, stan trzeci, armia.",
    "options": null,
    "answer": "armia",
    "explanation": "Społeczeństwo dzieliło się na trzy stany: duchowieństwo, szlachtę i stan trzeci. Armia nie była osobnym stanem."
  },
  {
    "id": "R04_REW_08",
    "section": "Rewolucja francuska",
    "type": "scenario",
    "prompt": "Jesteś delegatem stanu trzeciego w 1789 r. Domagasz się wspólnych obrad wszystkich stanów i jednego głosu dla każdego delegata. Po odrzuceniu tej propozycji twoja grupa ogłasza się nowym przedstawicielstwem narodu. Jak się ono nazywa?",
    "options": [
      "Zgromadzenie Narodowe",
      "Komitet Ocalenia Publicznego",
      "Długi parlament",
      "Stany Generalne",
      "Rada Pięciuset",
      "Kongres Kontynentalny"
    ],
    "answer": 0,
    "explanation": "Przedstawiciele stanu trzeciego ogłosili się w czerwcu 1789 r. Zgromadzeniem Narodowym, co zapoczątkowało rewolucję francuską."
  },
  {
    "id": "R04_REW_09",
    "section": "Rewolucja francuska",
    "type": "single_choice",
    "prompt": "W którym roku parlament ogłosił Francję republiką?",
    "options": [
      "1789",
      "1790",
      "1791",
      "1792",
      "1793",
      "1794"
    ],
    "answer": 3,
    "explanation": "We wrześniu 1792 r. parlament ogłosił Francję republiką, kończąc okres monarchii konstytucyjnej."
  },
  {
    "id": "R04_REW_10",
    "section": "Rewolucja francuska",
    "type": "sort",
    "prompt": "Przyporządkuj wydarzenia do okresu monarchii konstytucyjnej lub republiki.",
    "options": null,
    "items": [
      "konstytucja z 1791 r.",
      "wojna z Austrią",
      "ogłoszenie republiki",
      "egzekucja Ludwika XVI",
      "wielki terror",
      "powstanie w Wandei"
    ],
    "categories": [
      "monarchia konstytucyjna",
      "republika"
    ],
    "answer": {
      "monarchia konstytucyjna": [
        "konstytucja z 1791 r.",
        "wojna z Austrią"
      ],
      "republika": [
        "ogłoszenie republiki",
        "egzekucja Ludwika XVI",
        "wielki terror",
        "powstanie w Wandei"
      ]
    },
    "explanation": "Monarchia konstytucyjna trwała od 1791 do ogłoszenia republiki w 1792 r.; egzekucja króla, Wandea i wielki terror przypadły już na okres republiki."
  },
  {
    "id": "R04_REW_11",
    "section": "Rewolucja francuska",
    "type": "riddle",
    "prompt": "Jak nazywał się organ, który w 1793 r. stał się faktycznym rządem Francji i na którego czele stanął Robespierre?",
    "options": null,
    "answer": "Komitet Ocalenia Publicznego",
    "altAnswers": [
      "Komitet Ocalenia Publicznego",
      "komitet ocalenia publicznego"
    ],
    "explanation": "Komitet Ocalenia Publicznego został utworzony w 1793 r., a pod przewodnictwem Robespierre'a stał się faktycznym rządem republiki."
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Około ilu ludzi zginęło w całej Francji podczas masakr związanych z nocą św. Bartłomieja?",
    "options": [
      "około 3 tysięcy",
      "około 10 tysięcy",
      "około 20 tysięcy",
      "około 30 tysięcy",
      "około 60 tysięcy",
      "około 100 tysięcy"
    ],
    "answer": 3,
    "explanation": "Materiał podaje około 3 tysięcy ofiar w samym Paryżu i około 30 tysięcy w całej Francji."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Istnieją pewne dowody, że Ludwik XIV naprawdę wypowiedział słowa: Państwo to ja.",
    "options": null,
    "answer": false,
    "explanation": "Materiał zaznacza, że nie ma dowodów na wypowiedzenie przez Ludwika XIV słów przypisywanych mu jako Państwo to ja.",
    "image": "r04_ludwik_xiv_portret.jpg"
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Po zmianach podatkowych Colberta do króla trafiało około __________ procent wpłacanych pieniędzy zamiast wcześniejszych około __________ procent.",
    "options": null,
    "answer": [
      "65",
      "37"
    ],
    "explanation": "Colbert ograniczył straty wynikające z poboru podatków przez pośredników: udział pieniędzy trafiających do króla wzrósł z około 37% do 65%."
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz postać z okresem jej rządów podanym w materiale.",
    "options": null,
    "left": [
      "Kardynał Richelieu",
      "Ludwik XIV",
      "Fryderyk II",
      "Katarzyna II"
    ],
    "right": [
      "1624-1642",
      "1661-1715",
      "1740-1786",
      "1762-1796"
    ],
    "answer": {
      "Kardynał Richelieu": "1624-1642",
      "Ludwik XIV": "1661-1715",
      "Fryderyk II": "1740-1786",
      "Katarzyna II": "1762-1796"
    },
    "explanation": "Richelieu faktycznie rządził Francją w latach 1624-1642, Ludwik XIV samodzielnie w latach 1661-1715, Fryderyk II Prusami w latach 1740-1786, a Katarzyna II Rosją w latach 1762-1796."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z różnych części rozdziału od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Deklaracja niepodległości Stanów Zjednoczonych",
      "Ścięcie Karola I",
      "Początek rewolucji francuskiej",
      "Klęska Wielkiej Armady",
      "Prusy stają się królestwem",
      "Deklaracja praw w Anglii"
    ],
    "answer": [
      "Klęska Wielkiej Armady",
      "Ścięcie Karola I",
      "Deklaracja praw w Anglii",
      "Prusy stają się królestwem",
      "Deklaracja niepodległości Stanów Zjednoczonych",
      "Początek rewolucji francuskiej"
    ],
    "explanation": "Daty to odpowiednio 1588, 1649, 1689, 1701, 1776 i 1789."
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Władca zachowuje władzę absolutną, utrzymuje tolerancję religijną, zakazuje tortur, buduje szkoły, odbiera Austrii Śląsk i w 1772 r. uczestniczy w I rozbiorze Polski. Kto to?",
    "options": [
      "Fryderyk II",
      "Piotr I",
      "Józef II",
      "Ludwik XIV",
      "Wilhelm III Orański",
      "Karol I"
    ],
    "answer": 0,
    "explanation": "Opis dotyczy Fryderyka II, twórcy potęgi Prus i przedstawiciela absolutyzmu oświeconego.",
    "image": "r04_fryderyk_ii_portret.jpg"
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz reformy Józefa II wymienione w materiale.",
    "options": [
      "Wprowadzenie wolności osobistej chłopów",
      "Wprowadzenie tolerancji religijnej",
      "Zniesienie tortur i kary śmierci",
      "Rozbudowa armii",
      "Podporządkowanie sobie Kościoła Katolickiego",
      "Odebranie Austrii Śląska"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Józef II wprowadził wolność osobistą chłopów i tolerancję religijną, zniósł tortury i karę śmierci, rozbudował armię oraz podporządkował państwu Kościół. Śląsk odebrał Austrii Fryderyk II."
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Co było bezpośrednią przyczyną wybuchu amerykańskiej wojny o niepodległość według podsumowania rozdziału?",
    "options": [
      "Bitwa pod Lexington i Concord",
      "Bostońska herbatka",
      "Uchwalenie Konstytucji USA",
      "Kapitulacja pod Yorktown",
      "Ogłoszenie Karty praw",
      "Przybycie purytanów do Massachusetts"
    ],
    "answer": 0,
    "explanation": "Bezpośrednią przyczyną wybuchu wojny była bitwa pod Lexington i Concord w 1775 r.; bostońska herbatka była wcześniejszym etapem konfliktu."
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Wielki terror trwał aż do zakończenia rewolucji francuskiej w 1799 r.",
    "options": null,
    "answer": false,
    "explanation": "Wielki terror zakończył się w lipcu 1794 r. po zgilotynowaniu Robespierre'a, natomiast rewolucja francuska trwała do 1799 r.",
    "image": "r04_gilotyna.jpg"
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Podaj nazwę organu republikańskiej Francji, który w 1793 r. miał ratować państwo i pod kierownictwem Robespierre'a stał się faktycznym rządem.",
    "options": null,
    "answer": "Komitet Ocalenia Publicznego",
    "altAnswers": [
      "Komitet Ocalenia Publicznego",
      "komitet ocalenia publicznego"
    ],
    "explanation": "Komitet Ocalenia Publicznego powołano w 1793 r.; latem na jego czele stanął Robespierre."
  },
  {
    "id": "R04_HARD_11",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż postać, która nie została stracona w wyniku opisywanych konfliktów politycznych: Karol I, Ludwik XVI, Maksymilian Robespierre, Wilhelm III Orański.",
    "options": null,
    "answer": "Wilhelm III Orański",
    "explanation": "Karol I został ścięty, Ludwik XVI i Robespierre zostali zgilotynowani. Wilhelm III Orański objął tron Anglii po chwalebnej rewolucji i nie został stracony."
  },
  {
    "id": "R04_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz dokumenty, które powstały w latach 1689-1791 włącznie.",
    "options": [
      "Deklaracja praw w Anglii",
      "Deklaracja niepodległości Stanów Zjednoczonych",
      "Konstytucja Stanów Zjednoczonych",
      "Deklaracja praw człowieka i obywatela",
      "Karta praw w USA",
      "Edykt nantejski"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Deklaracja praw pochodzi z 1689 r., Deklaracja niepodległości z 1776 r., Konstytucja USA z 1787 r., Deklaracja praw człowieka i obywatela z 1789 r., a Karta praw z 1791 r. Edykt nantejski wydano w 1598 r."
  },
  {
    "id": "R04_HARD_13",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W roku __________ Prusy Książęce przestały być lennem Polski, a w roku __________ elektor brandenburski koronował się na króla w Prusach.",
    "options": null,
    "answer": [
      "1657",
      "1701"
    ],
    "explanation": "Jan Kazimierz zwolnił elektora z zależności lennej w 1657 r., a w 1701 r. elektor koronował się na króla w Prusach."
  },
  {
    "id": "R04_HARD_14",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jakich mężczyzn objął pierwszy w dziejach masowy pobór przeprowadzony przez rewolucyjną Francję?",
    "options": [
      "Wszystkich żonatych w wieku 18-25 lat",
      "Wszystkich nieżonatych w wieku 18-25 lat",
      "Wszystkich mężczyzn w wieku 30-40 lat",
      "Wyłącznie członków burżuazji",
      "Wyłącznie chłopów powyżej 25 lat",
      "Tylko ochotników poniżej 18 lat"
    ],
    "answer": 1,
    "explanation": "Francuski parlament powołał do wojska wszystkich nieżonatych mężczyzn w wieku 18-25 lat, tworząc armię liczącą około miliona żołnierzy."
  },
  {
    "id": "R04_HARD_15",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które z wymienionych państw miało pod koniec XVIII w. najliczniejszą armię według porównania w materiale?",
    "options": [
      "Prusy",
      "Austria",
      "Rosja",
      "Rzeczpospolita",
      "Francja",
      "Anglia"
    ],
    "answer": 2,
    "explanation": "W porównaniu podanym przy reformach Józefa II armia rosyjska liczyła około 400 tysięcy żołnierzy, austriacka około 280 tysięcy, a pruska 186 tysięcy."
  }
];

const KID_PROMPTS = {
  "R04_FRA_02": "Co mógł sam decydować Ludwik XIV jako król absolutny?",
  "R04_ANG_05": "Co Deklaracja praw zabraniała królowi robić bez parlamentu?",
  "R04_OSW_02": "Jakich praw i wolności chcieli filozofowie oświecenia?",
  "R04_USA_02": "Dlaczego kolonie kłóciły się z Wielką Brytanią?",
  "R04_REW_02": "Dlaczego we Francji wybuchła rewolucja?",
  "R04_REW_08": "Jak nazwali się przedstawiciele stanu trzeciego w 1789 r.?"
};

const chapter = {
  "id": "r04",
  "number": 4,
  "title": "Europa i Ameryka w XVII i XVIII wieku",
  "icon": "🌍",
  "sectionOrder": [
    "Francja absolutna",
    "Anglia parlamentarna",
    "Oświecenie i nowe potęgi",
    "Narodziny Stanów Zjednoczonych",
    "Rewolucja francuska"
  ],
  "sectionIcons": {
    "Francja absolutna": "👑",
    "Anglia parlamentarna": "🏛️",
    "Oświecenie i nowe potęgi": "💡",
    "Narodziny Stanów Zjednoczonych": "🗽",
    "Rewolucja francuska": "⚔️"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
