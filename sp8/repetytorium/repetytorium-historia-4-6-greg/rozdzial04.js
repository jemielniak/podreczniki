// Skróty sekcji (do identyfikatorów ćwiczeń):
//   FRA  = Monarchia absolutna we Francji
//   ANG  = Angielska monarchia parlamentarna
//   OSW  = Kultura i myśl oświecenia
//   REF  = Absolutyzm oświecony i reformy
//   USA  = Powstanie Stanów Zjednoczonych
//   POL  = Rzeczpospolita w XVIII wieku
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_FRA_01",
    "section": "Monarchia absolutna we Francji",
    "type": "single_choice",
    "prompt": "Kto zwołał Stany Generalne we Francji w 1302 roku?",
    "options": [
      "Filip IV Piękny",
      "Henryk IV Burbon",
      "Ludwik XIII",
      "Ludwik XIV",
      "Karol I Stuart",
      "Filip V"
    ],
    "answer": 0,
    "explanation": "Filip IV Piękny zwołał Stany Generalne, aby zyskać poparcie dla swojej polityki i nowych podatków.",
    "image": "r04_stany_generalne.jpg"
  },
  {
    "id": "R04_FRA_02",
    "section": "Monarchia absolutna we Francji",
    "type": "single_choice",
    "prompt": "Kto był pierwszym ministrem Francji za panowania Ludwika XIII?",
    "options": [
      "kardynał Armand Richelieu",
      "Giulio Mazzarini",
      "Jean-Baptiste Colbert",
      "John Locke",
      "Fryderyk II",
      "Stanisław Konarski"
    ],
    "answer": 0,
    "explanation": "Kardynał Armand Richelieu kierował polityką Ludwika XIII jako pierwszy minister."
  },
  {
    "id": "R04_FRA_03",
    "section": "Monarchia absolutna we Francji",
    "type": "multi_select",
    "prompt": "Zaznacz działania podejmowane przez Ludwika XIV.",
    "options": [
      "Zniesienie edyktu nantejskiego",
      "Rozbudowa aparatu policyjnego",
      "Mecenat nad sztuką Moliera",
      "Uchwalenie Habeas Corpus Act",
      "Utworzenie Komisji Edukacji Narodowej"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Ludwik XIV zniósł edykt nantejski, rozbudował aparat policyjny i wspierał kulturę, m.in. twórczość Moliera."
  },
  {
    "id": "R04_FRA_04",
    "section": "Monarchia absolutna we Francji",
    "type": "true_false",
    "prompt": "Zniesienie edyktu nantejskiego w 1685 roku przyczyniło się do emigracji hugenotów z Francji.",
    "options": null,
    "answer": true,
    "explanation": "Prześladowania hugenotów spowodowały ich emigrację, co osłabiło francuską gospodarkę."
  },
  {
    "id": "R04_FRA_05",
    "section": "Monarchia absolutna we Francji",
    "type": "fill_in",
    "prompt": "Ludwik XIV był nazywany __________.",
    "options": null,
    "altAnswers": [
      [
        "Królem Słońce",
        "Król Słońce"
      ]
    ],
    "answer": [
      "Królem Słońce"
    ],
    "explanation": "Ludwik XIV nosił przydomek \"Król Słońce\".",
    "image": "r04_wersal_palac.jpg"
  },
  {
    "id": "R04_FRA_06",
    "section": "Monarchia absolutna we Francji",
    "type": "riddle",
    "prompt": "Jak nazywa się forma rządów, w której król posiada nieograniczoną władzę i nie podlega kontroli?",
    "options": null,
    "altAnswers": [
      "monarchia absolutna",
      "absolutyzm",
      "monarchią absolutną"
    ],
    "answer": "monarchia absolutna",
    "explanation": "Monarchia absolutna, czyli absolutyzm, dawała monarsze nieograniczoną władzę."
  },
  {
    "id": "R04_FRA_07",
    "section": "Monarchia absolutna we Francji",
    "type": "odd_one_out",
    "prompt": "Wskaż grupę nienależącą do trzech stanów reprezentowanych w Stanach Generalnych: duchowieństwo, szlachta, mieszczaństwo, wojsko.",
    "options": null,
    "answer": "wojsko",
    "explanation": "Stany Generalne reprezentowały duchowieństwo, szlachtę i stan trzeci, czyli przede wszystkim mieszczaństwo."
  },
  {
    "id": "R04_FRA_08",
    "section": "Monarchia absolutna we Francji",
    "type": "scenario",
    "prompt": "Jesteś francuskim kupcem w czasach Ludwika XIII. Władze wspierają eksport, a ograniczają import. Jak nazywa się opisana polityka gospodarcza?",
    "options": [
      "merkantylizm",
      "liberalizm ekonomiczny",
      "gospodarka naturalna",
      "swobodny handel bez ceł"
    ],
    "answer": 0,
    "explanation": "Merkantylizm polegał na popieraniu eksportu przy ograniczaniu importu."
  },
  {
    "id": "R04_FRA_09",
    "section": "Monarchia absolutna we Francji",
    "type": "match",
    "prompt": "Połącz władcę Francji z charakterystycznym wydarzeniem jego rządów.",
    "options": null,
    "left": [
      "Henryk IV",
      "Ludwik XIII",
      "Ludwik XIV"
    ],
    "right": [
      "Rozwój królewskiej rezydencji w Wersalu",
      "Wydanie edyktu nantejskiego",
      "Richelieu jako pierwszy minister"
    ],
    "answer": {
      "Henryk IV": "Wydanie edyktu nantejskiego",
      "Ludwik XIII": "Richelieu jako pierwszy minister",
      "Ludwik XIV": "Rozwój królewskiej rezydencji w Wersalu"
    },
    "explanation": "Henryk IV wydał edykt nantejski, Ludwik XIII korzystał z pomocy Richelieu, a Ludwik XIV uczynił Wersal centrum dworu."
  },
  {
    "id": "R04_FRA_10",
    "section": "Monarchia absolutna we Francji",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z historii Francji w kolejności od najwcześniejszego.",
    "options": null,
    "items": [
      "Zniesienie edyktu nantejskiego",
      "Przystąpienie Francji do wojny trzydziestoletniej",
      "Zwołanie Stanów Generalnych przez Filipa IV",
      "Wydanie edyktu nantejskiego"
    ],
    "answer": [
      "Zwołanie Stanów Generalnych przez Filipa IV",
      "Wydanie edyktu nantejskiego",
      "Przystąpienie Francji do wojny trzydziestoletniej",
      "Zniesienie edyktu nantejskiego"
    ],
    "explanation": "Stany Generalne zwołano w 1302 roku, edykt nantejski wydano w 1598 roku, Francja przystąpiła do wojny w 1635 roku, a edykt zniesiono w 1685 roku."
  },
  {
    "id": "R04_ANG_01",
    "section": "Angielska monarchia parlamentarna",
    "type": "single_choice",
    "prompt": "Który dokument wydano w Anglii w 1215 roku?",
    "options": [
      "Wielka Karta Swobód",
      "Habeas Corpus Act",
      "Deklaracja praw narodu angielskiego",
      "Akty nawigacyjne",
      "Edykt nantejski",
      "Konstytucja Stanów Zjednoczonych"
    ],
    "answer": 0,
    "explanation": "Wielka Karta Swobód z 1215 roku ograniczyła możliwość nakładania podatków przez króla bez zgody szlachty."
  },
  {
    "id": "R04_ANG_02",
    "section": "Angielska monarchia parlamentarna",
    "type": "single_choice",
    "prompt": "Kto przyjął tytuł lorda protektora i sprawował dyktatorską władzę w Anglii w latach 1653–1658?",
    "options": [
      "Oliver Cromwell",
      "Karol I Stuart",
      "Karol II Stuart",
      "Jakub II Stuart",
      "Wilhelm III Orański",
      "Giulio Mazzarini"
    ],
    "answer": 0,
    "explanation": "Oliver Cromwell przejął pełnię władzy w republice jako lord protektor.",
    "image": "r04_cromwell_portret.jpg"
  },
  {
    "id": "R04_ANG_03",
    "section": "Angielska monarchia parlamentarna",
    "type": "multi_select",
    "prompt": "Wybierz grupy reprezentowane w angielskim parlamencie.",
    "options": [
      "duchowieństwo",
      "szlachta",
      "przedstawiciele miast",
      "właściciele ziemscy",
      "wyłącznie urzędnicy królewscy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Izba Lordów skupiała duchowieństwo i szlachtę, a Izba Gmin przedstawicieli miast i właścicieli ziemskich.",
    "image": "r04_westminster_parlament.jpg"
  },
  {
    "id": "R04_ANG_04",
    "section": "Angielska monarchia parlamentarna",
    "type": "true_false",
    "prompt": "W 1649 roku parlament skazał Karola I Stuarta na śmierć, a Anglia stała się republiką.",
    "options": null,
    "answer": true,
    "explanation": "Po wojnie domowej Karol I został ścięty, a w 1649 roku ogłoszono republikę."
  },
  {
    "id": "R04_ANG_05",
    "section": "Angielska monarchia parlamentarna",
    "type": "fill_in",
    "prompt": "W 1649 roku Anglia stała się __________.",
    "options": null,
    "altAnswers": [
      [
        "republiką",
        "republika"
      ]
    ],
    "answer": [
      "republiką"
    ],
    "explanation": "Po egzekucji Karola I Anglia przestała być monarchią i została ogłoszona republiką."
  },
  {
    "id": "R04_ANG_06",
    "section": "Angielska monarchia parlamentarna",
    "type": "riddle",
    "prompt": "Jak nazywał się angielski akt z 1679 roku zakazujący aresztowania bez wyroku sądu?",
    "options": null,
    "altAnswers": [
      "Habeas Corpus Act",
      "Habeas Corpus"
    ],
    "answer": "Habeas Corpus Act",
    "explanation": "Habeas Corpus Act uchwalono za Karola II w 1679 roku; dokument chronił przed bezprawnym aresztowaniem."
  },
  {
    "id": "R04_ANG_07",
    "section": "Angielska monarchia parlamentarna",
    "type": "odd_one_out",
    "prompt": "Wskaż władcę, który nie należał do dynastii Stuartów: Karol I Stuart, Karol II Stuart, Jakub II Stuart, Wilhelm III Orański.",
    "options": null,
    "answer": "Wilhelm III Orański",
    "explanation": "Wilhelm III pochodził z dynastii Orańskiej, a pozostali władcy należeli do Stuartów."
  },
  {
    "id": "R04_ANG_08",
    "section": "Angielska monarchia parlamentarna",
    "type": "scenario",
    "prompt": "Jesteś kupcem w połowie XVII wieku. Nowe angielskie przepisy zabraniają sprowadzania towarów kolonialnych na obcych statkach. O jakie przepisy chodzi?",
    "options": [
      "akty nawigacyjne",
      "Wielka Karta Swobód",
      "Habeas Corpus Act",
      "Deklaracja praw narodu angielskiego"
    ],
    "answer": 0,
    "explanation": "Akty nawigacyjne z lat 1650–1651 ograniczyły udział obcych statków w angielskim handlu kolonialnym."
  },
  {
    "id": "R04_ANG_09",
    "section": "Angielska monarchia parlamentarna",
    "type": "match",
    "prompt": "Połącz wydarzenia z dziejów Anglii z właściwymi datami.",
    "options": null,
    "left": [
      "Wydanie Wielkiej Karty Swobód",
      "Powstanie parlamentu angielskiego",
      "Ogłoszenie Anglii republiką",
      "Restauracja Stuartów"
    ],
    "right": [
      "1660",
      "1649",
      "1215",
      "1265"
    ],
    "answer": {
      "Wydanie Wielkiej Karty Swobód": "1215",
      "Powstanie parlamentu angielskiego": "1265",
      "Ogłoszenie Anglii republiką": "1649",
      "Restauracja Stuartów": "1660"
    },
    "explanation": "Wielką Kartę wydano w 1215 roku, parlament powstał w 1265, republikę ogłoszono w 1649, a Stuartowie wrócili na tron w 1660 roku."
  },
  {
    "id": "R04_ANG_10",
    "section": "Angielska monarchia parlamentarna",
    "type": "sort",
    "prompt": "Przyporządkuj przedstawicieli społeczeństwa do izby parlamentu angielskiego.",
    "options": null,
    "items": [
      "właściciele ziemscy",
      "duchowieństwo",
      "przedstawiciele miast",
      "szlachta"
    ],
    "categories": [
      "Izba Lordów",
      "Izba Gmin"
    ],
    "answer": {
      "Izba Lordów": [
        "duchowieństwo",
        "szlachta"
      ],
      "Izba Gmin": [
        "przedstawiciele miast",
        "właściciele ziemscy"
      ]
    },
    "explanation": "W Izbie Lordów zasiadało duchowieństwo i szlachta, a w Izbie Gmin reprezentanci miast oraz właściciele ziemscy."
  },
  {
    "id": "R04_OSW_01",
    "section": "Kultura i myśl oświecenia",
    "type": "single_choice",
    "prompt": "Jaką inną nazwą określano epokę oświecenia?",
    "options": [
      "wiek rozumu",
      "wiek rycerstwa",
      "wiek odkryć geograficznych",
      "wiek pary i elektryczności",
      "wiek krucjat",
      "wiek żelaza"
    ],
    "answer": 0,
    "explanation": "Ze względu na rozwój nauki i kult rozumu oświecenie nazywano \"wiekiem rozumu\" lub \"wiekiem światła\"."
  },
  {
    "id": "R04_OSW_02",
    "section": "Kultura i myśl oświecenia",
    "type": "single_choice",
    "prompt": "Który utwór został napisany przez Woltera?",
    "options": [
      "Listy o Anglikach",
      "O duchu praw",
      "Umowa społeczna",
      "Dwa traktaty o rządzie",
      "Podróże Guliwera",
      "Robinson Crusoe"
    ],
    "answer": 0,
    "explanation": "Wolter napisał \"Listy o Anglikach, czyli listy filozoficzne\"."
  },
  {
    "id": "R04_OSW_03",
    "section": "Kultura i myśl oświecenia",
    "type": "multi_select",
    "prompt": "Zaznacz cechy architektury klasycystycznej.",
    "options": [
      "nawiązania do sztuki antycznej",
      "kolumnady",
      "kopuły",
      "dekoracje z muszli",
      "obicia z chińskiego jedwabiu"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Klasycyzm nawiązywał do antyku i chętnie stosował kolumnady oraz kopuły.",
    "image": "r04_klasycyzm_kolumny.jpg"
  },
  {
    "id": "R04_OSW_04",
    "section": "Kultura i myśl oświecenia",
    "type": "true_false",
    "prompt": "Rokoko charakteryzowało się m.in. jasnymi kolorami, złoceniami i motywami muszli.",
    "options": null,
    "answer": true,
    "explanation": "Muszle, motywy kwiatowe, jasne barwy i złocenia były charakterystyczne dla dekoracji rokokowych."
  },
  {
    "id": "R04_OSW_05",
    "section": "Kultura i myśl oświecenia",
    "type": "fill_in",
    "prompt": "Autorem obrazu \"Przysięga Horacjuszy\" był __________.",
    "options": null,
    "altAnswers": [
      [
        "Jacques-Louis David",
        "Jacques Louis David",
        "David"
      ]
    ],
    "answer": [
      "Jacques-Louis David"
    ],
    "explanation": "Jacques-Louis David, malarz klasycyzmu, stworzył obraz \"Przysięga Horacjuszy\"."
  },
  {
    "id": "R04_OSW_06",
    "section": "Kultura i myśl oświecenia",
    "type": "riddle",
    "prompt": "Który filozof oświecenia uważał, że państwo powstało w wyniku umowy społecznej, i stawiał za wzór ustrój Anglii?",
    "options": null,
    "altAnswers": [
      "John Locke",
      "Locke",
      "Jan Locke"
    ],
    "answer": "John Locke",
    "explanation": "John Locke opowiadał się przeciw absolutyzmowi i wywodził powstanie państwa z umowy społecznej."
  },
  {
    "id": "R04_OSW_07",
    "section": "Kultura i myśl oświecenia",
    "type": "odd_one_out",
    "prompt": "Wskaż dzieło, które nie jest utworem literackim: Robinson Crusoe, Podróże Guliwera, Powrót posła, Sonata Księżycowa.",
    "options": null,
    "answer": "Sonata Księżycowa",
    "explanation": "\"Sonata Księżycowa\" jest utworem muzycznym Beethovena, a pozostałe tytuły to dzieła literackie."
  },
  {
    "id": "R04_OSW_08",
    "section": "Kultura i myśl oświecenia",
    "type": "scenario",
    "prompt": "Odwiedzasz XVIII-wieczny pałac. Wnętrza zdobią jasne złocenia, muszle, lustra i delikatne ornamenty. Z jakim stylem łączysz te cechy?",
    "options": [
      "rokoko",
      "klasycyzm",
      "barok",
      "empire"
    ],
    "answer": 0,
    "explanation": "Muszle, lustra, jasne kolory i złocenia były typowymi elementami rokoka.",
    "image": "r04_rokoko_wnetrze.jpg"
  },
  {
    "id": "R04_OSW_09",
    "section": "Kultura i myśl oświecenia",
    "type": "match",
    "prompt": "Połącz uczonych i wynalazców z ich osiągnięciami.",
    "options": null,
    "left": [
      "Isaac Newton",
      "Edward Jenner",
      "Benjamin Franklin",
      "James Watt"
    ],
    "right": [
      "Szczepionka przeciw ospie",
      "Maszyna parowa",
      "Prawo powszechnego ciążenia",
      "Piorunochron"
    ],
    "answer": {
      "Isaac Newton": "Prawo powszechnego ciążenia",
      "Edward Jenner": "Szczepionka przeciw ospie",
      "Benjamin Franklin": "Piorunochron",
      "James Watt": "Maszyna parowa"
    },
    "explanation": "Newton sformułował prawo ciążenia, Jenner opracował szczepionkę przeciw ospie, Franklin wynalazł piorunochron, a Watt jest kojarzony z maszyną parową."
  },
  {
    "id": "R04_OSW_10",
    "section": "Kultura i myśl oświecenia",
    "type": "sort",
    "prompt": "Przyporządkuj elementy zdobnicze do stylu architektonicznego.",
    "options": null,
    "items": [
      "motywy muszli",
      "kolumnady",
      "lustra we wnętrzach",
      "nawiązania do antyku",
      "jasne barwy i złocenia",
      "kopuły"
    ],
    "categories": [
      "klasycyzm",
      "rokoko"
    ],
    "answer": {
      "klasycyzm": [
        "kolumnady",
        "kopuły",
        "nawiązania do antyku"
      ],
      "rokoko": [
        "motywy muszli",
        "jasne barwy i złocenia",
        "lustra we wnętrzach"
      ]
    },
    "explanation": "Klasycyzm wykorzystywał formy antyczne, podczas gdy rokoko preferowało lekkie i bogate dekoracje wnętrz."
  },
  {
    "id": "R04_REF_01",
    "section": "Absolutyzm oświecony i reformy",
    "type": "single_choice",
    "prompt": "W którym państwie rządzili Fryderyk Wilhelm I i Fryderyk II?",
    "options": [
      "Prusy",
      "Rosja",
      "Austria",
      "Francja",
      "Anglia",
      "Hiszpania"
    ],
    "answer": 0,
    "explanation": "Obaj władcy przeprowadzali reformy w Prusach."
  },
  {
    "id": "R04_REF_02",
    "section": "Absolutyzm oświecony i reformy",
    "type": "single_choice",
    "prompt": "Który władca rozpoczął budowę Petersburga w 1703 roku?",
    "options": [
      "Piotr I Wielki",
      "Katarzyna II",
      "Fryderyk II",
      "Józef II",
      "Maria Teresa",
      "Ludwik XIV"
    ],
    "answer": 0,
    "explanation": "Piotr I Wielki rozpoczął budowę Petersburga na zdobytych terenach nadbałtyckich w 1703 roku.",
    "image": "r04_petersburg_budowa.jpg"
  },
  {
    "id": "R04_REF_03",
    "section": "Absolutyzm oświecony i reformy",
    "type": "multi_select",
    "prompt": "Które reformy przeprowadził Piotr I Wielki?",
    "options": [
      "Podział Rosji na gubernie i prowincje",
      "Tabela rang dla urzędników",
      "Rozwój przemysłu na Uralu",
      "Zniesienie poddaństwa chłopów w Austrii w 1781 roku",
      "Założenie Collegium Nobilium"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Piotr I wprowadził podział na gubernie i prowincje, tabelę rang i rozwijał przemysł Uralu."
  },
  {
    "id": "R04_REF_04",
    "section": "Absolutyzm oświecony i reformy",
    "type": "true_false",
    "prompt": "W 1721 roku Piotr I Wielki przyjął tytuł cesarza i zmienił nazwę państwa na Cesarstwo Rosyjskie.",
    "options": null,
    "answer": true,
    "explanation": "Po zwycięstwach i reformach Piotr I w 1721 roku przyjął tytuł cesarski."
  },
  {
    "id": "R04_REF_05",
    "section": "Absolutyzm oświecony i reformy",
    "type": "fill_in",
    "prompt": "Józef II zniósł poddaństwo chłopów w Austrii w __________ roku.",
    "options": null,
    "altAnswers": [
      [
        "1781",
        "1781 r."
      ]
    ],
    "answer": [
      "1781"
    ],
    "explanation": "Józef II zniósł poddaństwo chłopów w Austrii w 1781 roku."
  },
  {
    "id": "R04_REF_06",
    "section": "Absolutyzm oświecony i reformy",
    "type": "riddle",
    "prompt": "Jak nazywano surową dyscyplinę wojskową wprowadzoną w armii pruskiej?",
    "options": null,
    "altAnswers": [
      "pruski dryl",
      "dryl pruski"
    ],
    "answer": "pruski dryl",
    "explanation": "Określenie \"pruski dryl\" oznaczało rygorystyczną dyscyplinę w wojsku pruskim.",
    "image": "r04_pruska_armia.jpg"
  },
  {
    "id": "R04_REF_07",
    "section": "Absolutyzm oświecony i reformy",
    "type": "odd_one_out",
    "prompt": "Wskaż postać niezwiązaną z absolutyzmem oświeconym w Prusach, Rosji lub Austrii: Fryderyk II, Katarzyna II, Józef II, Oliver Cromwell.",
    "options": null,
    "answer": "Oliver Cromwell",
    "explanation": "Cromwell był dyktatorem republiki angielskiej, a pozostali byli władcami reformującymi Prusy, Rosję lub Austrię."
  },
  {
    "id": "R04_REF_08",
    "section": "Absolutyzm oświecony i reformy",
    "type": "scenario",
    "prompt": "Jesteś urzędnikiem rosyjskim na początku XVIII wieku. O awansie decyduje tabela rang wprowadzona podczas reorganizacji administracji. Który władca zapoczątkował tę reformę?",
    "options": [
      "Piotr I Wielki",
      "Katarzyna II",
      "Fryderyk II",
      "Józef II"
    ],
    "answer": 0,
    "explanation": "Tabela rang była jednym z rozwiązań administracyjnych Piotra I Wielkiego."
  },
  {
    "id": "R04_REF_09",
    "section": "Absolutyzm oświecony i reformy",
    "type": "match",
    "prompt": "Połącz władcę z państwem, w którym prowadził reformy.",
    "options": null,
    "left": [
      "Fryderyk Wilhelm I",
      "Katarzyna II",
      "Maria Teresa",
      "Ludwik XIV"
    ],
    "right": [
      "Austria",
      "Francja",
      "Rosja",
      "Prusy"
    ],
    "answer": {
      "Fryderyk Wilhelm I": "Prusy",
      "Katarzyna II": "Rosja",
      "Maria Teresa": "Austria",
      "Ludwik XIV": "Francja"
    },
    "explanation": "Fryderyk Wilhelm I rządził Prusami, Katarzyna II Rosją, Maria Teresa Austrią, a Ludwik XIV Francją."
  },
  {
    "id": "R04_REF_10",
    "section": "Absolutyzm oświecony i reformy",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z reformami monarchii w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Początek panowania Katarzyny II",
      "Zniesienie poddaństwa chłopów przez Józefa II",
      "Rozpoczęcie budowy Petersburga",
      "Przyjęcie przez Piotra I tytułu cesarza"
    ],
    "answer": [
      "Rozpoczęcie budowy Petersburga",
      "Przyjęcie przez Piotra I tytułu cesarza",
      "Początek panowania Katarzyny II",
      "Zniesienie poddaństwa chłopów przez Józefa II"
    ],
    "explanation": "Petersburg zaczęto budować w 1703 roku, Piotr I przyjął tytuł cesarza w 1721, Katarzyna II objęła tron w 1762, a Józef II zniósł poddaństwo w 1781."
  },
  {
    "id": "R04_USA_01",
    "section": "Powstanie Stanów Zjednoczonych",
    "type": "single_choice",
    "prompt": "Ile angielskich kolonii w Ameryce Północnej rozpoczęło walkę o niepodległość?",
    "options": [
      "13",
      "10",
      "12",
      "14",
      "15",
      "50"
    ],
    "answer": 0,
    "explanation": "Wojna o niepodległość dotyczyła trzynastu kolonii brytyjskich."
  },
  {
    "id": "R04_USA_02",
    "section": "Powstanie Stanów Zjednoczonych",
    "type": "single_choice",
    "prompt": "Która bitwa z 1777 roku była punktem zwrotnym wojny o niepodległość USA?",
    "options": [
      "bitwa pod Saratogą",
      "bitwa pod Yorktown",
      "bitwa pod Savannah",
      "bitwa pod Naseby"
    ],
    "answer": 0,
    "explanation": "Pod Saratogą wojska brytyjskie skapitulowały; po tym zwycięstwie Amerykanów wsparli Francuzi."
  },
  {
    "id": "R04_USA_03",
    "section": "Powstanie Stanów Zjednoczonych",
    "type": "multi_select",
    "prompt": "Wybierz przyczyny wojny o niepodległość kolonii amerykańskich.",
    "options": [
      "Nakładanie nowych podatków i ceł",
      "Utrudnianie handlu",
      "Ograniczanie samorządu kolonii",
      "Przyznanie koloniom pełnej niezależności",
      "Zniesienie wszystkich ograniczeń produkcji"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Koloniści sprzeciwiali się nowym podatkom, utrudnieniom w handlu i ograniczaniu samorządu."
  },
  {
    "id": "R04_USA_04",
    "section": "Powstanie Stanów Zjednoczonych",
    "type": "true_false",
    "prompt": "Konstytucję Stanów Zjednoczonych podpisano w 1787 roku.",
    "options": null,
    "answer": true,
    "explanation": "Konstytucję Stanów Zjednoczonych podpisano w 1787 roku."
  },
  {
    "id": "R04_USA_05",
    "section": "Powstanie Stanów Zjednoczonych",
    "type": "fill_in",
    "prompt": "Zwycięska dla Amerykanów bitwa z 1781 roku rozegrała się pod __________.",
    "options": null,
    "altAnswers": [
      [
        "Yorktown"
      ]
    ],
    "answer": [
      "Yorktown"
    ],
    "explanation": "Zwycięstwo pod Yorktown w 1781 roku praktycznie przesądziło wynik wojny o niepodległość."
  },
  {
    "id": "R04_USA_06",
    "section": "Powstanie Stanów Zjednoczonych",
    "type": "riddle",
    "prompt": "Który polski generał zmarł od ran odniesionych w bitwie pod Savannah w 1779 roku?",
    "options": null,
    "altAnswers": [
      "Kazimierz Pułaski",
      "Pułaski",
      "Kazimierz Pulaski"
    ],
    "answer": "Kazimierz Pułaski",
    "explanation": "Kazimierz Pułaski był bohaterem polskim i amerykańskim; zmarł po bitwie pod Savannah."
  },
  {
    "id": "R04_USA_07",
    "section": "Powstanie Stanów Zjednoczonych",
    "type": "odd_one_out",
    "prompt": "Wskaż bitwę niezwiązaną z amerykańską wojną o niepodległość: bitwa pod Saratogą, bitwa pod Yorktown, bitwa pod Savannah, bitwa pod Naseby.",
    "options": null,
    "answer": "bitwa pod Naseby",
    "explanation": "Naseby było miejscem bitwy angielskiej wojny domowej, a pozostałe bitwy stoczono podczas walk o niepodległość USA."
  },
  {
    "id": "R04_USA_08",
    "section": "Powstanie Stanów Zjednoczonych",
    "type": "scenario",
    "prompt": "W 1773 roku mieszkańcy kolonii brytyjskich zatapiają w porcie Boston ładunki herbaty na znak protestu przeciw polityce metropolii. Jak nazywa się to wydarzenie?",
    "options": [
      "bostońskie picie herbaty",
      "bitwa pod Saratogą",
      "bitwa pod Yorktown",
      "powstanie Pugaczowa"
    ],
    "answer": 0,
    "explanation": "Protest kolonistów przeciw brytyjskim podatkom na herbatę w Bostonie w 1773 roku nazywa się „bostońskim piciem herbaty”.",
    "image": "r04_boston_herbata.jpg"
  },
  {
    "id": "R04_USA_09",
    "section": "Powstanie Stanów Zjednoczonych",
    "type": "match",
    "prompt": "Połącz wydarzenia z wojny o niepodległość USA i początków państwa z datami.",
    "options": null,
    "left": [
      "Bostońskie picie herbaty",
      "Bitwa pod Saratogą",
      "Bitwa pod Yorktown",
      "Podpisanie Konstytucji USA"
    ],
    "right": [
      "1787",
      "1773",
      "1781",
      "1777"
    ],
    "answer": {
      "Bostońskie picie herbaty": "1773",
      "Bitwa pod Saratogą": "1777",
      "Bitwa pod Yorktown": "1781",
      "Podpisanie Konstytucji USA": "1787"
    },
    "explanation": "Kolejno: protest bostoński w 1773 roku, Saratoga w 1777, Yorktown w 1781 i konstytucja w 1787.",
    "image": "r04_konstytucja_usa_rekopis.jpg"
  },
  {
    "id": "R04_USA_10",
    "section": "Powstanie Stanów Zjednoczonych",
    "type": "sort",
    "prompt": "Przyporządkuj instytucje do trzech rodzajów władzy określonych przez Konstytucję USA.",
    "options": null,
    "items": [
      "Sąd Najwyższy",
      "Senat",
      "sekretarze powoływani przez prezydenta",
      "Izba Reprezentantów",
      "prezydent"
    ],
    "categories": [
      "władza ustawodawcza",
      "władza wykonawcza",
      "władza sądownicza"
    ],
    "answer": {
      "władza ustawodawcza": [
        "Senat",
        "Izba Reprezentantów"
      ],
      "władza wykonawcza": [
        "prezydent",
        "sekretarze powoływani przez prezydenta"
      ],
      "władza sądownicza": [
        "Sąd Najwyższy"
      ]
    },
    "explanation": "Konstytucja USA przewidywała Kongres z Senatem i Izbą Reprezentantów, prezydenta z podległymi sekretarzami oraz Sąd Najwyższy."
  },
  {
    "id": "R04_POL_01",
    "section": "Rzeczpospolita w XVIII wieku",
    "type": "single_choice",
    "prompt": "Który król Polski ustanowił Order Orła Białego?",
    "options": [
      "August II Mocny",
      "August III Sas",
      "Stanisław Leszczyński",
      "Stanisław August Poniatowski",
      "Jan III Sobieski",
      "Zygmunt III Waza"
    ],
    "answer": 0,
    "explanation": "Order Orła Białego ustanowił August II Mocny."
  },
  {
    "id": "R04_POL_02",
    "section": "Rzeczpospolita w XVIII wieku",
    "type": "single_choice",
    "prompt": "Kto założył Collegium Nobilium w 1740 roku?",
    "options": [
      "Stanisław Konarski",
      "Stanisław Leszczyński",
      "Hugo Kołłątaj",
      "Ignacy Krasicki",
      "Adam Kazimierz Czartoryski",
      "Stanisław Staszic"
    ],
    "answer": 0,
    "explanation": "Stanisław Konarski założył w 1740 roku Collegium Nobilium i reformował szkoły pijarskie.",
    "image": "r04_collegium_nobilium.jpg"
  },
  {
    "id": "R04_POL_03",
    "section": "Rzeczpospolita w XVIII wieku",
    "type": "multi_select",
    "prompt": "Zaznacz objawy kryzysu Rzeczypospolitej w epoce saskiej.",
    "options": [
      "Częste zrywanie sejmów",
      "Ingerencje państw ościennych",
      "Wzrost samowoli szlacheckiej",
      "Stabilna władza centralna",
      "Brak sporów magnackich"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "W epoce saskiej powszechnie zrywano sejmy, nasilała się ingerencja sąsiadów i rosła samowola szlachecka."
  },
  {
    "id": "R04_POL_04",
    "section": "Rzeczpospolita w XVIII wieku",
    "type": "true_false",
    "prompt": "Komisja Edukacji Narodowej była pierwszym ministerstwem oświaty w Europie.",
    "options": null,
    "answer": true,
    "explanation": "Komisję Edukacji Narodowej utworzono w 1773 roku. Uznaje się ją za pierwsze w Europie ministerstwo oświaty.",
    "image": "r04_ken_szkola.jpg"
  },
  {
    "id": "R04_POL_05",
    "section": "Rzeczpospolita w XVIII wieku",
    "type": "fill_in",
    "prompt": "Szkołę Rycerską w Warszawie założono w roku __________.",
    "options": null,
    "altAnswers": [
      [
        "1765",
        "1765 r."
      ]
    ],
    "answer": [
      "1765"
    ],
    "explanation": "Stanisław August Poniatowski założył Szkołę Rycerską, zwaną też Korpusem Kadetów, w 1765 roku."
  },
  {
    "id": "R04_POL_06",
    "section": "Rzeczpospolita w XVIII wieku",
    "type": "riddle",
    "prompt": "Jak nazywało się czasopismo polskiego oświecenia, które propagowało reformy i krytykowało zacofanie sarmackie?",
    "options": null,
    "altAnswers": [
      "Monitor",
      "\"Monitor\""
    ],
    "answer": "Monitor",
    "explanation": "\"Monitor\" publikował teksty w obronie reform, tolerancji i edukacji świeckiej."
  },
  {
    "id": "R04_POL_07",
    "section": "Rzeczpospolita w XVIII wieku",
    "type": "odd_one_out",
    "prompt": "Wskaż instytucję lub reformę niezwiązaną z działalnością Stanisława Augusta Poniatowskiego: Szkoła Rycerska, Komisja Edukacji Narodowej, Teatr Narodowy, akty nawigacyjne.",
    "options": null,
    "answer": "akty nawigacyjne",
    "explanation": "Akty nawigacyjne wprowadził w Anglii Oliver Cromwell, a pozostałe instytucje rozwinęły się w Polsce w okresie panowania Stanisława Augusta."
  },
  {
    "id": "R04_POL_08",
    "section": "Rzeczpospolita w XVIII wieku",
    "type": "scenario",
    "prompt": "W 1773 roku polskie władze powołują instytucję, która ma reformować nauczanie, promować język polski i przygotować nowoczesne programy szkolne. Jaka to instytucja?",
    "options": [
      "Komisja Edukacji Narodowej",
      "Towarzystwo do Ksiąg Elementarnych",
      "Szkoła Rycerska",
      "Nadworna Komisja Edukacyjna"
    ],
    "answer": 0,
    "explanation": "Komisja Edukacji Narodowej powstała w 1773 roku jako organ reformujący szkolnictwo."
  },
  {
    "id": "R04_POL_09",
    "section": "Rzeczpospolita w XVIII wieku",
    "type": "match",
    "prompt": "Połącz postać lub grupę osób z jej przedsięwzięciem.",
    "options": null,
    "left": [
      "August II Mocny",
      "Stanisław Konarski",
      "Stanisław August Poniatowski",
      "Bracia Załuscy"
    ],
    "right": [
      "Założenie Szkoły Rycerskiej",
      "Założenie Biblioteki Załuskich",
      "Ustanowienie Orderu Orła Białego",
      "Założenie Collegium Nobilium"
    ],
    "answer": {
      "August II Mocny": "Ustanowienie Orderu Orła Białego",
      "Stanisław Konarski": "Założenie Collegium Nobilium",
      "Stanisław August Poniatowski": "Założenie Szkoły Rycerskiej",
      "Bracia Załuscy": "Założenie Biblioteki Załuskich"
    },
    "explanation": "August II ustanowił Order Orła Białego, Konarski utworzył Collegium Nobilium, Poniatowski Szkołę Rycerską, a bracia Załuscy otworzyli bibliotekę."
  },
  {
    "id": "R04_POL_10",
    "section": "Rzeczpospolita w XVIII wieku",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z historii Rzeczypospolitej w porządku chronologicznym.",
    "options": null,
    "items": [
      "Założenie Szkoły Rycerskiej",
      "Powołanie Komisji Edukacji Narodowej",
      "Koronacja Augusta II Mocnego",
      "Otwarcie Collegium Nobilium",
      "Sejm niemy"
    ],
    "answer": [
      "Koronacja Augusta II Mocnego",
      "Sejm niemy",
      "Otwarcie Collegium Nobilium",
      "Założenie Szkoły Rycerskiej",
      "Powołanie Komisji Edukacji Narodowej"
    ],
    "explanation": "August II został koronowany w 1697 roku, sejm niemy odbył się w 1717, Collegium Nobilium otwarto w 1740, Szkołę Rycerską w 1765, a KEN powstała w 1773 roku."
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W którym roku Francja za rządów Ludwika XIII przystąpiła do wojny trzydziestoletniej przeciw Habsburgom?",
    "options": [
      "1635",
      "1610",
      "1649",
      "1653",
      "1660",
      "1685"
    ],
    "answer": 0,
    "explanation": "Francja przystąpiła do wojny trzydziestoletniej w 1635 roku."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który pierwszy minister Ludwika XIV tłumił frondę w latach 1648–1653?",
    "options": [
      "Giulio Mazzarini",
      "kardynał Armand Richelieu",
      "Jean-Baptiste Colbert",
      "Fryderyk Wilhelm I",
      "Piotr I Wielki",
      "John Locke"
    ],
    "answer": 0,
    "explanation": "Podczas małoletniości Ludwika XIV pierwszym ministrem był Giulio Mazzarini; za jego czasów stłumiono frondę."
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które instytucje naukowe lub szkoły powstały w wyniku reform Piotra I Wielkiego?",
    "options": [
      "Akademia Morska w Petersburgu",
      "Akademia Nauk w Petersburgu",
      "Szkoła nawigacyjna w Moskwie",
      "Collegium Nobilium w Warszawie",
      "Szkoła Rycerska w Warszawie"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Piotr I wspierał Akademię Morską, Akademię Nauk w Petersburgu i szkołę nawigacyjną w Moskwie."
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Wybierz wydarzenia przypadające na lata 1770–1779.",
    "options": [
      "Bostońskie picie herbaty",
      "Powołanie Komisji Edukacji Narodowej",
      "Bitwa pod Saratogą",
      "Bitwa pod Naseby",
      "Restauracja Stuartów",
      "Podpisanie Konstytucji USA"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "W 1773 roku doszło do bostońskiego protestu herbacianego i powstania KEN, a w 1777 do bitwy pod Saratogą."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Komisja Edukacji Narodowej powstała w 1773 roku, a Towarzystwo do Ksiąg Elementarnych w 1775 roku.",
    "options": null,
    "answer": true,
    "explanation": "Komisję Edukacji Narodowej utworzono w 1773 roku, a Towarzystwo do Ksiąg Elementarnych w 1775 roku."
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Układ zawarty w 1732 roku przez Austrię, Rosję i Prusy nosił nazwę traktatu trzech __________.",
    "options": null,
    "altAnswers": [
      [
        "czarnych orłów",
        "czarnych orlow"
      ]
    ],
    "answer": [
      "czarnych orłów"
    ],
    "explanation": "Traktat trzech czarnych orłów z 1732 roku dotyczył ingerencji Austrii, Rosji i Prus w sprawy polskiej elekcji."
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W 1645 roku wojska Karola I zostały pokonane w bitwie pod __________.",
    "options": null,
    "altAnswers": [
      [
        "Naseby"
      ]
    ],
    "answer": [
      "Naseby"
    ],
    "explanation": "Bitwa pod Naseby w 1645 roku była decydująca dla przebiegu angielskiej wojny domowej."
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jakie nazwisko nosił przywódca wielkiego powstania chłopskiego, które wybuchło w Rosji w 1773 roku?",
    "options": null,
    "altAnswers": [
      "Pugaczow",
      "Pugaczowa",
      "Jemielian Pugaczow"
    ],
    "answer": "Pugaczow",
    "explanation": "Powstanie Pugaczowa wybuchło w Rosji w 1773 roku, za panowania Katarzyny II."
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Która budowla jest przykładem rokoka, a nie klasycyzmu: Panteon w Paryżu, Brama Brandenburska w Berlinie, Teatr Wielki w Warszawie, pałac Sanssouci.",
    "options": null,
    "answer": "pałac Sanssouci",
    "explanation": "Pałac Sanssouci w Poczdamie reprezentuje rokoko, natomiast pozostałe budowle są przykładami klasycyzmu."
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Jest rok 1717. W Rzeczypospolitej odbywa się sejm związany z ingerencją obcych państw i próbą opanowania konfliktu między królem a szlachtą. Pod jaką nazwą zapamiętano ten sejm?",
    "options": [
      "sejm niemy",
      "Sejm Wielki",
      "Stany Generalne",
      "parlament kadłubowy"
    ],
    "answer": 0,
    "explanation": "Sejm niemy z 1717 roku był przejawem ingerencji państw sąsiednich w sprawy Rzeczypospolitej."
  },
  {
    "id": "R04_HARD_11",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Cesarzowa dzieli swoje państwo na 50 guberni, umacnia prawa szlachty i ingeruje w sprawy Polski, popierając wybór Stanisława Augusta. Kim jest ta władczyni?",
    "options": [
      "Katarzyna II",
      "Maria Teresa",
      "Elżbieta I",
      "Anna Stuart"
    ],
    "answer": 0,
    "explanation": "Katarzyna II wprowadziła podział Rosji na 50 guberni oraz doprowadziła do elekcji Stanisława Augusta Poniatowskiego."
  },
  {
    "id": "R04_HARD_12",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Dopasuj drobne daty reform i wydarzeń do ich opisów.",
    "options": null,
    "left": [
      "Początek budowy Petersburga",
      "Utworzenie Cesarstwa Rosyjskiego",
      "Austriacki kodeks karny",
      "Zniesienie poddaństwa chłopów przez Józefa II"
    ],
    "right": [
      "1768",
      "1781",
      "1703",
      "1721"
    ],
    "answer": {
      "Początek budowy Petersburga": "1703",
      "Utworzenie Cesarstwa Rosyjskiego": "1721",
      "Austriacki kodeks karny": "1768",
      "Zniesienie poddaństwa chłopów przez Józefa II": "1781"
    },
    "explanation": "Piotr I rozpoczął budowę Petersburga w 1703, przyjął tytuł cesarski w 1721; austriacki kodeks karny pochodzi z 1768, a reforma Józefa II z 1781 roku."
  },
  {
    "id": "R04_HARD_13",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj charakterystyczne rozwiązania do państw, z których dziejami są związane.",
    "options": null,
    "items": [
      "Tabela rang",
      "Akty nawigacyjne",
      "Cła ochronne i manufaktury",
      "Wersal jako siedziba dworu królewskiego",
      "Habeas Corpus Act",
      "Zniesienie edyktu nantejskiego",
      "Podział na gubernie i prowincje",
      "Pruski dryl"
    ],
    "categories": [
      "Francja",
      "Anglia",
      "Prusy",
      "Rosja"
    ],
    "answer": {
      "Francja": [
        "Wersal jako siedziba dworu królewskiego",
        "Zniesienie edyktu nantejskiego"
      ],
      "Anglia": [
        "Akty nawigacyjne",
        "Habeas Corpus Act"
      ],
      "Prusy": [
        "Pruski dryl",
        "Cła ochronne i manufaktury"
      ],
      "Rosja": [
        "Tabela rang",
        "Podział na gubernie i prowincje"
      ]
    },
    "explanation": "Wersal i edykt nantejski dotyczą Francji, akty nawigacyjne i Habeas Corpus Anglii, dryl i cła Prus, a tabela rang i gubernie Rosji."
  },
  {
    "id": "R04_HARD_14",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z różnych państw europejskich i USA od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Rozpoczęcie budowy Petersburga",
      "Ogłoszenie republiki w Anglii",
      "Podpisanie Konstytucji USA",
      "Wejście Francji do wojny trzydziestoletniej",
      "Zniesienie edyktu nantejskiego"
    ],
    "answer": [
      "Wejście Francji do wojny trzydziestoletniej",
      "Ogłoszenie republiki w Anglii",
      "Zniesienie edyktu nantejskiego",
      "Rozpoczęcie budowy Petersburga",
      "Podpisanie Konstytucji USA"
    ],
    "explanation": "Kolejne daty to 1635, 1649, 1685, 1703 i 1787."
  },
  {
    "id": "R04_HARD_15",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż przekrojowe wydarzenia XVIII wieku w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Bitwa pod Yorktown",
      "Podpisanie Konstytucji USA",
      "Założenie Szkoły Rycerskiej",
      "Początek panowania Katarzyny II",
      "Wybuch amerykańskiej wojny o niepodległość"
    ],
    "answer": [
      "Początek panowania Katarzyny II",
      "Założenie Szkoły Rycerskiej",
      "Wybuch amerykańskiej wojny o niepodległość",
      "Bitwa pod Yorktown",
      "Podpisanie Konstytucji USA"
    ],
    "explanation": "Katarzyna II objęła tron w 1762 roku; Szkoła Rycerska powstała w 1765, wojna o niepodległość zaczęła się w 1775, Yorktown nastąpiło w 1781, a konstytucja USA w 1787."
  }
];

const KID_PROMPTS = {
  "R04_FRA_01": "Który król zwołał Stany Generalne w 1302 roku?",
  "R04_FRA_06": "Jak nazywały się rządy króla, który miał całą władzę?",
  "R04_ANG_02": "Kto rządził Anglią jako lord protektor?",
  "R04_ANG_06": "Jak nazywało się prawo z 1679 roku chroniące przed bezprawnym aresztowaniem?",
  "R04_OSW_02": "Którą książkę napisał Wolter?",
  "R04_OSW_08": "Jaki styl ma pałac ozdobiony muszlami, lustrami i złoceniami?",
  "R04_REF_06": "Jak nazywano ostrą dyscyplinę w wojsku pruskim?",
  "R04_USA_02": "Która bitwa z 1777 roku odmieniła przebieg wojny Amerykanów?",
  "R04_POL_02": "Kto założył szkołę Collegium Nobilium?",
  "R04_POL_08": "Jaka instytucja od 1773 roku reformowała polskie szkoły?"
};

const chapter = {
  "id": "r04",
  "number": 4,
  "title": "Europa w XVII i XVIII w.",
  "icon": "🌍",
  "sectionOrder": [
    "Monarchia absolutna we Francji",
    "Angielska monarchia parlamentarna",
    "Kultura i myśl oświecenia",
    "Absolutyzm oświecony i reformy",
    "Powstanie Stanów Zjednoczonych",
    "Rzeczpospolita w XVIII wieku"
  ],
  "sectionIcons": {
    "Monarchia absolutna we Francji": "👑",
    "Angielska monarchia parlamentarna": "🏛️",
    "Kultura i myśl oświecenia": "💡",
    "Absolutyzm oświecony i reformy": "⚙️",
    "Powstanie Stanów Zjednoczonych": "🇺🇸",
    "Rzeczpospolita w XVIII wieku": "🇵🇱"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
