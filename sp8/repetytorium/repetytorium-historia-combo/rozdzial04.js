// Skróty sekcji (do identyfikatorów ćwiczeń):
//   ODK = Odkrycia geograficzne
//   REF = Reformacja i kontrreformacja
//   RZE = Rzeczpospolita i demokracja szlachecka
//   WOJ = Wojny i kryzys Rzeczpospolitej
//   OSW = Monarchie absolutne i oświecenie
//   PRZ = Reformy, rewolucja i Legiony
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_ODK_01",
    "section": "Odkrycia geograficzne",
    "type": "single_choice",
    "prompt": "Jaka przeszkoda gospodarcza skłaniała Europejczyków do szukania morskiej drogi do Indii?",
    "options": [
      "Utrudnienia w handlu lądowym z Azją",
      "Zamknięcie wszystkich europejskich portów",
      "Brak statków zdolnych do żeglugi po Morzu Śródziemnym",
      "Zakaz handlu przyprawami w Europie",
      "Zanik handlu między miastami europejskimi",
      "Zniszczenie plantacji przypraw w Indiach"
    ],
    "answer": 0,
    "explanation": "Turcy kontrolowali znaczną część szlaków w Azji i utrudniali handel z Dalekim Wschodem. Poszukiwano więc nowych dróg morskich.",
    "image": "r04_karawela_na_oceanie.jpg"
  },
  {
    "id": "R04_ODK_02",
    "section": "Odkrycia geograficzne",
    "type": "multi_select",
    "prompt": "Które czynniki motywowały Europejczyków do podejmowania wielkich odkryć geograficznych? Zaznacz wszystkie poprawne odpowiedzi.",
    "options": [
      "Poszukiwanie nowych szlaków handlowych",
      "Chęć zniesienia pańszczyzny w Europie",
      "Ciekawość świata i chęć sprawdzania opowieści",
      "Pragnienie zdobycia bogactwa",
      "Dążenie do zlikwidowania sejmu walnego"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "Odkrywców motywowały m.in. potrzeba nowych szlaków handlowych, chęć wzbogacenia się i ciekawość świata."
  },
  {
    "id": "R04_ODK_03",
    "section": "Odkrycia geograficzne",
    "type": "true_false",
    "prompt": "Krzysztof Kolumb wybrał drogę na zachód, ponieważ zakładał, że na kulistej Ziemi można w ten sposób dopłynąć do Azji.",
    "options": null,
    "answer": true,
    "explanation": "Kolumb próbował dotrzeć do Indii drogą zachodnią, ale natknął się na nieznany Europejczykom ląd.",
    "image": "r04_karawela_na_oceanie.jpg"
  },
  {
    "id": "R04_ODK_04",
    "section": "Odkrycia geograficzne",
    "type": "match",
    "prompt": "Połącz podróżnika z jego osiągnięciem.",
    "options": null,
    "left": [
      "Bartłomiej Diaz",
      "Krzysztof Kolumb",
      "Vasco da Gama",
      "Ferdynand Magellan"
    ],
    "right": [
      "Odkrycie morskiego szlaku do Indii",
      "Dowodzenie wyprawą, która jako pierwsza opłynęła Ziemię",
      "Dotarcie w okolice południowego krańca Afryki",
      "Dotarcie do Ameryki w 1492 roku"
    ],
    "answer": {
      "Bartłomiej Diaz": "Dotarcie w okolice południowego krańca Afryki",
      "Krzysztof Kolumb": "Dotarcie do Ameryki w 1492 roku",
      "Vasco da Gama": "Odkrycie morskiego szlaku do Indii",
      "Ferdynand Magellan": "Dowodzenie wyprawą, która jako pierwsza opłynęła Ziemię"
    },
    "explanation": "Diaz badał drogę wokół Afryki, Kolumb dotarł do Ameryki, da Gama dopłynął do Indii, a wyprawę Magellana dokończył Juan Sebastián de Cano."
  },
  {
    "id": "R04_ODK_05",
    "section": "Odkrycia geograficzne",
    "type": "fill_in",
    "prompt": "Krzysztof Kolumb dotarł do Ameryki w roku __________.",
    "options": null,
    "answer": [
      "1492"
    ],
    "altAnswers": [
      [
        "1492",
        "1492 r.",
        "1492 roku"
      ]
    ],
    "explanation": "Rok 1492 jest również uznawany za umowną granicę między średniowieczem a nowożytnością."
  },
  {
    "id": "R04_ODK_06",
    "section": "Odkrycia geograficzne",
    "type": "odd_one_out",
    "prompt": "Wskaż produkt, którego Europejczycy nie przywozili z Nowego Świata: kakao, kukurydza, ziemniaki, koń.",
    "options": null,
    "answer": "koń",
    "explanation": "Kakao, kukurydzę i ziemniaki zaliczono do towarów przywożonych z Ameryki; konie znalazły się wśród zwierząt wywożonych przez Europejczyków."
  },
  {
    "id": "R04_ODK_07",
    "section": "Odkrycia geograficzne",
    "type": "riddle",
    "prompt": "Jak nazywano rdzennych mieszkańców Ameryki, których Kolumb błędnie uznał za mieszkańców Indii?",
    "options": null,
    "answer": "Indianie",
    "altAnswers": [
      "Indianie",
      "Indianin",
      "Indian"
    ],
    "explanation": "Określenie \"Indianie\" wynikało z przekonania Kolumba, że dopłynął do Indii."
  },
  {
    "id": "R04_ODK_08",
    "section": "Odkrycia geograficzne",
    "type": "scenario",
    "prompt": "Wyobraź sobie europejskiego kupca w XV wieku. Handel z Indiami przynosi duże zyski, ale szlaki lądowe przez Azję są utrudnione. Jakiej drogi powinien szukać?",
    "options": [
      "Wyłącznie drogi przez środek Azji",
      "Drogi przez północne góry Europy",
      "Nowej drogi morskiej do Indii",
      "Lądowego szlaku do Ameryki",
      "Przejścia przez pustynie Afryki bez udziału statków",
      "Szlaku omijającego wszystkie morza"
    ],
    "answer": 2,
    "explanation": "Właśnie potrzeba ominięcia przeszkód w handlu azjatyckim skłaniała Europejczyków do poszukiwania szlaku morskiego."
  },
  {
    "id": "R04_ODK_09",
    "section": "Odkrycia geograficzne",
    "type": "sequence",
    "prompt": "Ułóż wyprawy w kolejności od najwcześniejszej do najpóźniejszej.",
    "options": null,
    "items": [
      "Wyprawa Ferdynanda Magellana",
      "Podróż Vasco da Gamy do Indii",
      "Wyprawa Bartłomieja Diaza",
      "Wyprawa Krzysztofa Kolumba"
    ],
    "answer": [
      "Wyprawa Bartłomieja Diaza",
      "Wyprawa Krzysztofa Kolumba",
      "Podróż Vasco da Gamy do Indii",
      "Wyprawa Ferdynanda Magellana"
    ],
    "explanation": "Wyprawa Bartłomieja Diaza poprzedzała podróż Kolumba, później nastąpiły wyprawy Vasco da Gamy i Ferdynanda Magellana."
  },
  {
    "id": "R04_ODK_10",
    "section": "Odkrycia geograficzne",
    "type": "single_choice",
    "prompt": "Od nazwiska którego geografa pochodzi nazwa \"Ameryka\"?",
    "options": [
      "Krzysztofa Kolumba",
      "Vasco da Gamy",
      "Bartłomieja Diaza",
      "Ameriga Vespucciego",
      "Ferdynanda Magellana",
      "Juana Sebastiána de Cano"
    ],
    "answer": 3,
    "explanation": "Nowy Świat nazwano Ameryką na cześć Ameriga Vespucciego, który opisał ten ląd.",
    "image": "r04_kolonialny_port.jpg"
  },
  {
    "id": "R04_REF_01",
    "section": "Reformacja i kontrreformacja",
    "type": "single_choice",
    "prompt": "W którym roku Marcin Luter wystąpił z krytyką sytuacji w Kościele katolickim?",
    "options": [
      "1492",
      "1517",
      "1450",
      "1520",
      "1054",
      "1505"
    ],
    "answer": 1,
    "explanation": "W 1517 roku Marcin Luter przedstawił poglądy, które przyczyniły się do rozwoju reformacji."
  },
  {
    "id": "R04_REF_02",
    "section": "Reformacja i kontrreformacja",
    "type": "fill_in",
    "prompt": "Wynalazek __________ pozwolił szybko rozpowszechniać tezy Marcina Lutra.",
    "options": null,
    "answer": [
      "druku"
    ],
    "altAnswers": [
      [
        "druku",
        "druk"
      ]
    ],
    "explanation": "Wynalazek druku Jana Gutenberga ułatwił rozprzestrzenianie się poglądów Marcina Lutra.",
    "image": "r04_prasa_drukarska.jpg"
  },
  {
    "id": "R04_REF_03",
    "section": "Reformacja i kontrreformacja",
    "type": "multi_select",
    "prompt": "Które cechy są charakterystyczne dla protestantyzmu?",
    "options": [
      "Nabożeństwa w językach narodowych",
      "Papież jako głowa wszystkich wspólnot",
      "Samodzielne czytanie Biblii przez wiernych",
      "Obowiązkowy celibat wszystkich duchownych",
      "Możliwość posiadania rodzin przez duchownych"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Cechami protestantyzmu były między innymi nabożeństwa w językach narodowych, samodzielne czytanie Biblii i możliwość zawierania małżeństw przez duchownych."
  },
  {
    "id": "R04_REF_04",
    "section": "Reformacja i kontrreformacja",
    "type": "true_false",
    "prompt": "Luteranizm, kalwinizm i anglikanizm należą do wyznań protestanckich.",
    "options": null,
    "answer": true,
    "explanation": "Luteranizm, kalwinizm i anglikanizm to nurty protestantyzmu, które rozwinęły się w epoce reformacji."
  },
  {
    "id": "R04_REF_05",
    "section": "Reformacja i kontrreformacja",
    "type": "match",
    "prompt": "Połącz pojęcie z jego opisem.",
    "options": null,
    "left": [
      "reformacja",
      "kontrreformacja",
      "sobór trydencki",
      "jezuici"
    ],
    "right": [
      "Nauczanie młodzieży i działalność misyjna",
      "Reforma Kościoła katolickiego w XVI wieku",
      "Krytyka Kościoła i powstanie nowych wyznań",
      "Walka Kościoła katolickiego z jego przeciwnikami"
    ],
    "answer": {
      "reformacja": "Krytyka Kościoła i powstanie nowych wyznań",
      "kontrreformacja": "Walka Kościoła katolickiego z jego przeciwnikami",
      "sobór trydencki": "Reforma Kościoła katolickiego w XVI wieku",
      "jezuici": "Nauczanie młodzieży i działalność misyjna"
    },
    "explanation": "Reformacja przyniosła nowe wyznania, zaś działania Kościoła katolickiego obejmowały reformy trydenckie, działalność jezuitów i kontrreformację.",
    "image": "r04_sobor_w_trydencie.jpg"
  },
  {
    "id": "R04_REF_06",
    "section": "Reformacja i kontrreformacja",
    "type": "odd_one_out",
    "prompt": "Wskaż wyznanie, które nie należy do wyznań protestanckich: luteranizm, kalwinizm, anglikanizm, katolicyzm.",
    "options": null,
    "answer": "katolicyzm",
    "explanation": "Luteranizm, kalwinizm i anglikanizm to trzy wyznania protestanckie."
  },
  {
    "id": "R04_REF_07",
    "section": "Reformacja i kontrreformacja",
    "type": "scenario",
    "prompt": "Jest XVI wiek. Drukarz może przygotować wiele egzemplarzy tez krytykujących Kościół. Dlaczego jego praca pomaga zwolennikom reformacji?",
    "options": [
      "Ułatwia szybkie powielanie i rozpowszechnianie poglądów",
      "Zastępuje konieczność nauki czytania u wszystkich ludzi",
      "Automatycznie nadaje tekstom moc prawa państwowego",
      "Uniemożliwia duchownym poznawanie nowych idei",
      "Pozwala wyłącznie kopiować rękopisy w klasztorach",
      "Wymaga zatwierdzania każdej kartki przez papieża"
    ],
    "answer": 0,
    "explanation": "Dzięki drukowi poglądy Lutra szybko dotarły do szerokiego grona czytelników.",
    "image": "r04_prasa_drukarska.jpg"
  },
  {
    "id": "R04_REF_08",
    "section": "Reformacja i kontrreformacja",
    "type": "riddle",
    "prompt": "Jak nazywała się lista książek, których rozpowszechniania i czytania zakazywał Kościół katolicki?",
    "options": null,
    "answer": "Indeks Ksiąg Zakazanych",
    "altAnswers": [
      "Indeks Ksiąg Zakazanych",
      "indeks ksiag zakazanych"
    ],
    "explanation": "Indeks Ksiąg Zakazanych był jednym z narzędzi walki Kościoła z poglądami uznawanymi za heretyckie."
  },
  {
    "id": "R04_REF_09",
    "section": "Reformacja i kontrreformacja",
    "type": "single_choice",
    "prompt": "Jak nazwano świeckie, protestanckie państwo utworzone z Prus Zakonnych?",
    "options": [
      "Prusy Królewskie",
      "Księstwo Mazowieckie",
      "Królestwo Polskie",
      "Wielkie Księstwo Litewskie",
      "Prusy Książęce",
      "Państwo Zakonu Krzyżackiego"
    ],
    "answer": 4,
    "explanation": "Wielki mistrz krzyżacki porzucił katolicyzm, zlikwidował zakon i utworzył Prusy Książęce."
  },
  {
    "id": "R04_REF_10",
    "section": "Reformacja i kontrreformacja",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do katolicyzmu lub protestantyzmu.",
    "options": null,
    "items": [
      "Duchowni mogą zawierać małżeństwa",
      "Papież jest głową Kościoła",
      "Wierni samodzielnie czytają Biblię",
      "Liturgia po łacinie",
      "Nabożeństwa w językach narodowych",
      "Celibat duchownych"
    ],
    "categories": [
      "katolicyzm",
      "protestantyzm"
    ],
    "answer": {
      "katolicyzm": [
        "Papież jest głową Kościoła",
        "Liturgia po łacinie",
        "Celibat duchownych"
      ],
      "protestantyzm": [
        "Nabożeństwa w językach narodowych",
        "Wierni samodzielnie czytają Biblię",
        "Duchowni mogą zawierać małżeństwa"
      ]
    },
    "explanation": "Katolicyzm i protestantyzm różnią się między innymi organizacją Kościoła, językiem nabożeństw oraz rolą duchownych i wiernych."
  },
  {
    "id": "R04_RZE_01",
    "section": "Rzeczpospolita i demokracja szlachecka",
    "type": "single_choice",
    "prompt": "Czym był folwark szlachecki?",
    "options": [
      "Samorządnym gospodarstwem miejskim",
      "Zagraniczną kolonią kupiecką",
      "Gospodarstwem szlacheckim opartym na pracy chłopów pańszczyźnianych",
      "Wspólną własnością wszystkich chłopów",
      "Państwowym magazynem zboża",
      "Szkołą rolniczą dla mieszczan"
    ],
    "answer": 2,
    "explanation": "Folwark był gospodarstwem należącym do szlachty, w którym pracowali chłopi zobowiązani do pańszczyzny.",
    "image": "r04_folwark_szlachecki.jpg"
  },
  {
    "id": "R04_RZE_02",
    "section": "Rzeczpospolita i demokracja szlachecka",
    "type": "fill_in",
    "prompt": "System, w którym król współrządził z ogółem szlachty, nazywano demokracją __________.",
    "options": null,
    "answer": [
      "szlachecką"
    ],
    "altAnswers": [
      [
        "szlachecką",
        "szlachecka"
      ]
    ],
    "explanation": "Rządy króla i sejmu reprezentującego szlachtę określano demokracją szlachecką."
  },
  {
    "id": "R04_RZE_03",
    "section": "Rzeczpospolita i demokracja szlachecka",
    "type": "multi_select",
    "prompt": "O czym mógł decydować sejm walny w Rzeczpospolitej?",
    "options": [
      "Uchwalanie nowych praw",
      "Ustalanie podatków",
      "Wybór każdego chłopskiego gospodarza",
      "Zgoda na wyprawy wojenne",
      "Powoływanie wszystkich biskupów Europy",
      "Zatwierdzanie traktatów pokojowych"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "explanation": "Sejm stanowił prawo, rozstrzygał o podatkach, wyprawach wojennych i traktatach pokojowych.",
    "image": "r04_obrady_sejmu.jpg"
  },
  {
    "id": "R04_RZE_04",
    "section": "Rzeczpospolita i demokracja szlachecka",
    "type": "true_false",
    "prompt": "Po bezpotomnej śmierci Zygmunta Augusta królów Rzeczpospolitej wybierała szlachta w wolnej elekcji.",
    "options": null,
    "answer": true,
    "explanation": "Zygmunt August był ostatnim Jagiellonem, a po jego śmierci monarcha miał być wybierany, a nie dziedziczył tron automatycznie."
  },
  {
    "id": "R04_RZE_05",
    "section": "Rzeczpospolita i demokracja szlachecka",
    "type": "match",
    "prompt": "Połącz przywilej lub ustawę z datą nadania.",
    "options": null,
    "left": [
      "przywilej koszycki",
      "przywilej czerwiński",
      "konstytucja nihil novi",
      "przywilej bydgoski"
    ],
    "right": [
      "1505",
      "1520",
      "1374",
      "1422"
    ],
    "answer": {
      "przywilej koszycki": "1374",
      "przywilej czerwiński": "1422",
      "konstytucja nihil novi": "1505",
      "przywilej bydgoski": "1520"
    },
    "explanation": "Wśród przywilejów i ustaw istotnych dla szlachty były koszycki z 1374 roku, czerwiński z 1422, nihil novi z 1505 oraz bydgoski z 1520 roku."
  },
  {
    "id": "R04_RZE_06",
    "section": "Rzeczpospolita i demokracja szlachecka",
    "type": "riddle",
    "prompt": "Jak nazywały się lokalne zgromadzenia szlachty, na których podejmowano decyzje dotyczące danej ziemi?",
    "options": null,
    "answer": "sejmiki ziemskie",
    "altAnswers": [
      "sejmiki ziemskie",
      "sejmiki",
      "sejmik ziemski"
    ],
    "explanation": "Sejmiki ziemskie były zgromadzeniami szlachty z określonego terenu, m.in. wyrażały zgodę na podatki i pospolite ruszenie.",
    "image": "r04_obrady_sejmu.jpg"
  },
  {
    "id": "R04_RZE_07",
    "section": "Rzeczpospolita i demokracja szlachecka",
    "type": "odd_one_out",
    "prompt": "Wskaż lud, który nie był jedną z narodowości Rzeczypospolitej: Polacy, Rusini, Litwini, Inkowie.",
    "options": null,
    "answer": "Inkowie",
    "explanation": "W Rzeczypospolitej mieszkali między innymi Polacy, Rusini, Litwini, Niemcy i Żydzi; Inkowie nie należeli do tych narodowości."
  },
  {
    "id": "R04_RZE_08",
    "section": "Rzeczpospolita i demokracja szlachecka",
    "type": "scenario",
    "prompt": "Chłop ma własne niewielkie pole, ale przez część tygodnia musi bez zapłaty pracować na ziemi właściciela folwarku. Jak nazywano ten obowiązek?",
    "options": [
      "Cłem",
      "Pańszczyzną",
      "Wolną elekcją",
      "Pospolitym ruszeniem",
      "Przywilejem koszyckim",
      "Liberum veto"
    ],
    "answer": 1,
    "explanation": "Przymusowa, nieodpłatna praca chłopów w folwarku była pańszczyzną.",
    "image": "r04_folwark_szlachecki.jpg"
  },
  {
    "id": "R04_RZE_09",
    "section": "Rzeczpospolita i demokracja szlachecka",
    "type": "sequence",
    "prompt": "Ułóż akty zwiększające prawa szlachty w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Konstytucja nihil novi (1505)",
      "Przywilej koszycki (1374)",
      "Przywilej cerekwicko-nieszawski (1454)",
      "Przywilej czerwiński (1422)"
    ],
    "answer": [
      "Przywilej koszycki (1374)",
      "Przywilej czerwiński (1422)",
      "Przywilej cerekwicko-nieszawski (1454)",
      "Konstytucja nihil novi (1505)"
    ],
    "explanation": "Przywileje szlacheckie narastały etapami: 1374, 1422, 1454 i 1505."
  },
  {
    "id": "R04_RZE_10",
    "section": "Rzeczpospolita i demokracja szlachecka",
    "type": "single_choice",
    "prompt": "Do którego portu Wisłą spławiano większość zboża przeznaczonego na eksport?",
    "options": [
      "Gdańska",
      "Rygi",
      "Szczecina",
      "Królewca",
      "Elbląga",
      "Lubeki"
    ],
    "answer": 0,
    "explanation": "Zboże spławiano Wisłą oraz jej dopływami do Gdańska, skąd trafiało za granicę."
  },
  {
    "id": "R04_WOJ_01",
    "section": "Wojny i kryzys Rzeczpospolitej",
    "type": "single_choice",
    "prompt": "W jakich latach trwał potop szwedzki?",
    "options": [
      "1600-1611",
      "1620-1621",
      "1648-1658",
      "1655-1660",
      "1672-1673",
      "1683-1688"
    ],
    "answer": 3,
    "explanation": "Najazd Szwecji na Rzeczpospolitą w latach 1655-1660 nazywany jest potopem szwedzkim.",
    "image": "r04_potop_szwedzki.jpg"
  },
  {
    "id": "R04_WOJ_02",
    "section": "Wojny i kryzys Rzeczpospolitej",
    "type": "multi_select",
    "prompt": "Jakie skutki XVII-wiecznych wojen dotknęły Rzeczpospolitą?",
    "options": [
      "Zniszczenie miast i folwarków",
      "Zmniejszenie liczby mieszkańców",
      "Szybki wzrost eksportu zboża",
      "Straty terytorialne",
      "Osłabienie handlu i rzemiosła",
      "Całkowite zniesienie pańszczyzny"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Wojny przyniosły zniszczenia miast i gospodarstw, utratę ludności, spadek handlu oraz straty terytorialne."
  },
  {
    "id": "R04_WOJ_03",
    "section": "Wojny i kryzys Rzeczpospolitej",
    "type": "true_false",
    "prompt": "Pokój w Oliwie w 1660 roku zakończył wojnę Rzeczpospolitej ze Szwecją.",
    "options": null,
    "answer": true,
    "explanation": "Pokój w Oliwie, który kończył potop szwedzki, zawarto w 1660 roku.",
    "image": "r04_potop_szwedzki.jpg"
  },
  {
    "id": "R04_WOJ_04",
    "section": "Wojny i kryzys Rzeczpospolitej",
    "type": "match",
    "prompt": "Połącz konflikt z porozumieniem pokojowym lub jego następstwem.",
    "options": null,
    "left": [
      "wojna ze Szwecją",
      "wojny z Rosją",
      "powstanie Chmielnickiego"
    ],
    "right": [
      "pokój w Andruszowie (1667)",
      "ugoda w Hadziaczu (1658)",
      "pokój w Oliwie (1660)"
    ],
    "answer": {
      "wojna ze Szwecją": "pokój w Oliwie (1660)",
      "wojny z Rosją": "pokój w Andruszowie (1667)",
      "powstanie Chmielnickiego": "ugoda w Hadziaczu (1658)"
    },
    "explanation": "W następstwie wojen XVII wieku zawarto między innymi ugodę w Hadziaczu, pokój w Oliwie i rozejm w Andruszowie."
  },
  {
    "id": "R04_WOJ_05",
    "section": "Wojny i kryzys Rzeczpospolitej",
    "type": "fill_in",
    "prompt": "Odsieczą wiedeńską w roku 1683 dowodził król __________.",
    "options": null,
    "answer": [
      "Jan III Sobieski"
    ],
    "altAnswers": [
      [
        "Jan III Sobieski",
        "Jana III Sobieskiego",
        "Jan Sobieski",
        "Jana Sobieskiego"
      ]
    ],
    "explanation": "W 1683 roku Jan III Sobieski stanął na czele wojsk austriacko-niemiecko-polskich walczących pod Wiedniem.",
    "image": "r04_odsiecz_wiedenska.jpg"
  },
  {
    "id": "R04_WOJ_06",
    "section": "Wojny i kryzys Rzeczpospolitej",
    "type": "riddle",
    "prompt": "Jak nazywała się zasada sejmowa pozwalająca jednemu posłowi zerwać obrady i unieważnić decyzje?",
    "options": null,
    "answer": "liberum veto",
    "altAnswers": [
      "liberum veto",
      "Liberum veto"
    ],
    "explanation": "Liberum veto (\"nie pozwalam\") pozwalało jednemu posłowi przerwać obrady sejmu, co osłabiało państwo."
  },
  {
    "id": "R04_WOJ_07",
    "section": "Wojny i kryzys Rzeczpospolitej",
    "type": "odd_one_out",
    "prompt": "Które państwo nie było przeciwnikiem Rzeczypospolitej w wojnach XVII wieku: Szwecja, Rosja, Turcja, Portugalia.",
    "options": null,
    "answer": "Portugalia",
    "explanation": "Rzeczpospolita walczyła w XVII wieku między innymi z Rosją, Szwecją i Turcją oraz z Kozakami; nie prowadziła takich wojen z Portugalią."
  },
  {
    "id": "R04_WOJ_08",
    "section": "Wojny i kryzys Rzeczpospolitej",
    "type": "scenario",
    "prompt": "Po wieloletnich wojnach szlachcic stracił część pracowników i zysków z folwarku. Zamiast zmienić organizację pracy, każe pozostałym chłopom odrabiać więcej dni. Co zwiększa?",
    "options": [
      "Podaż ziemi",
      "Wolną elekcję",
      "Liczbę sejmików",
      "Eksport przypraw",
      "Wymiar pańszczyzny",
      "Liczbę województw"
    ],
    "answer": 4,
    "explanation": "W kryzysie folwarcznym szlachta podnosiła wymiar pańszczyzny, co nie przynosiło proporcjonalnego wzrostu wydajności."
  },
  {
    "id": "R04_WOJ_09",
    "section": "Wojny i kryzys Rzeczpospolitej",
    "type": "sort",
    "prompt": "Podziel nazwy bitew, miejsc i traktatów według przeciwnika Rzeczpospolitej.",
    "options": null,
    "items": [
      "Wiedeń",
      "Oliwa",
      "Cecora",
      "Andruszów",
      "Kircholm",
      "Chocim (1673)"
    ],
    "categories": [
      "Szwecja",
      "Rosja",
      "Turcja"
    ],
    "answer": {
      "Szwecja": [
        "Kircholm",
        "Oliwa"
      ],
      "Rosja": [
        "Andruszów"
      ],
      "Turcja": [
        "Cecora",
        "Chocim (1673)",
        "Wiedeń"
      ]
    },
    "explanation": "Kircholm i Oliwa wiążą się z wojną ze Szwecją, Andruszów z wojną z Rosją, zaś Cecora, Chocim i Wiedeń z konfliktami z Turcją."
  },
  {
    "id": "R04_WOJ_10",
    "section": "Wojny i kryzys Rzeczpospolitej",
    "type": "single_choice",
    "prompt": "Która grupa społeczna w XVIII wieku faktycznie dominowała w życiu politycznym słabej Rzeczpospolitej?",
    "options": [
      "Chłopi pańszczyźniani",
      "Magnateria",
      "Mieszczanie",
      "Wolni kupcy",
      "Duchowieństwo prawosławne",
      "Kozacy"
    ],
    "answer": 1,
    "explanation": "Najbogatsze rody magnackie wpływały na sejm i szlachtę, w tym przez system opłacanych klientów."
  },
  {
    "id": "R04_OSW_01",
    "section": "Monarchie absolutne i oświecenie",
    "type": "single_choice",
    "prompt": "Którego króla Francji nazywano \"Królem Słońce\"?",
    "options": [
      "Ludwika XVI",
      "Ludwika XIV",
      "Karola I Stuarta",
      "Karola II Stuarta",
      "Jana III Sobieskiego",
      "Augusta II Mocnego"
    ],
    "answer": 1,
    "explanation": "Ludwik XIV, panujący w latach 1643-1715, był wzorem monarchy absolutnego; jego przepych symbolizował pałac w Wersalu.",
    "image": "r04_palac_wersalski.jpg"
  },
  {
    "id": "R04_OSW_02",
    "section": "Monarchie absolutne i oświecenie",
    "type": "true_false",
    "prompt": "W 1649 roku stracono Karola I Stuarta, a Anglię ogłoszono republiką.",
    "options": null,
    "answer": true,
    "explanation": "Po wojnie domowej Karol I został stracony i w Anglii na pewien czas zastąpiono monarchię republiką."
  },
  {
    "id": "R04_OSW_03",
    "section": "Monarchie absolutne i oświecenie",
    "type": "fill_in",
    "prompt": "Zasadę podziału władzy na ustawodawczą, wykonawczą i sądowniczą sformułował __________.",
    "options": null,
    "answer": [
      "Monteskiusz"
    ],
    "altAnswers": [
      [
        "Monteskiusz",
        "Montesquieu"
      ]
    ],
    "explanation": "Monteskiusz wskazywał na potrzebę istnienia trzech niezależnych władz, które wzajemnie się równoważą."
  },
  {
    "id": "R04_OSW_04",
    "section": "Monarchie absolutne i oświecenie",
    "type": "multi_select",
    "prompt": "Jakie postulaty i podejście do świata przypisano myślicielom oświecenia?",
    "options": [
      "Posługiwanie się rozumem i doświadczeniem",
      "Bezwarunkowe uznawanie dawnych autorytetów",
      "Krytyka nietolerancji religijnej",
      "Głoszenie wolności i równości",
      "Rozszerzanie dziedzicznych przywilejów stanowych"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "Oświeceniowi myśliciele podkreślali rozum, krytycznie sprawdzali autorytety i głosili wolność oraz równość."
  },
  {
    "id": "R04_OSW_05",
    "section": "Monarchie absolutne i oświecenie",
    "type": "match",
    "prompt": "Połącz myśliciela z jego poglądem lub dziedziną działalności.",
    "options": null,
    "left": [
      "Kartezjusz",
      "Izaak Newton",
      "Monteskiusz",
      "Adam Smith"
    ],
    "right": [
      "Trójpodział władzy",
      "Wpływ popytu i podaży na ceny",
      "Główna rola rozumu w poznaniu",
      "Doświadczenie jako podstawa wiedzy"
    ],
    "answer": {
      "Kartezjusz": "Główna rola rozumu w poznaniu",
      "Izaak Newton": "Doświadczenie jako podstawa wiedzy",
      "Monteskiusz": "Trójpodział władzy",
      "Adam Smith": "Wpływ popytu i podaży na ceny"
    },
    "explanation": "Kartezjusz akcentował rozum, Newton doświadczenie, Monteskiusz niezależność trzech władz, a Smith rolę rynku."
  },
  {
    "id": "R04_OSW_06",
    "section": "Monarchie absolutne i oświecenie",
    "type": "scenario",
    "prompt": "Monarcha nie zwołuje reprezentacji stanów, skupia władzę w swoich rękach i sam podejmuje ostateczne decyzje. Jaki model rządów przypomina takie postępowanie?",
    "options": [
      "Monarchię absolutną",
      "Demokrację szlachecką",
      "Republikę parlamentarną",
      "Wolną elekcję",
      "Rządy dyrektoriatu",
      "Rządy sejmików ziemskich"
    ],
    "answer": 0,
    "explanation": "Tak organizował państwo Ludwik XIV: był monarchą absolutnym, a jego decyzje nie podlegały kontroli reprezentacji stanów.",
    "image": "r04_palac_wersalski.jpg"
  },
  {
    "id": "R04_OSW_07",
    "section": "Monarchie absolutne i oświecenie",
    "type": "odd_one_out",
    "prompt": "Wskaż pojęcie niezwiązane z głównymi ideami oświecenia: rozum, doświadczenie, trójpodział władzy, handel odpustami.",
    "options": null,
    "answer": "handel odpustami",
    "explanation": "Rozum, doświadczenie i trójpodział władzy to ważne idee oświecenia; handel odpustami był natomiast przedmiotem krytyki Kościoła podczas reformacji."
  },
  {
    "id": "R04_OSW_08",
    "section": "Monarchie absolutne i oświecenie",
    "type": "riddle",
    "prompt": "Któremu konstruktorowi przypisuje się wynalezienie maszyny parowej?",
    "options": null,
    "answer": "James Watt",
    "altAnswers": [
      "James Watt",
      "Jamesa Watta",
      "Watt",
      "Jamesowi Wattowi"
    ],
    "explanation": "Jamesa Watta uznaje się za twórcę maszyny parowej wykorzystywanej między innymi w górnictwie, hutnictwie i tkactwie.",
    "image": "r04_maszyna_parowa.jpg"
  },
  {
    "id": "R04_OSW_09",
    "section": "Monarchie absolutne i oświecenie",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z historii Anglii i Francji od najwcześniejszego.",
    "options": null,
    "items": [
      "Koniec panowania Ludwika XIV (1715)",
      "Przywrócenie monarchii w Anglii (1660)",
      "Anglia staje się republiką (1649)",
      "Ludwik XIV obejmuje samodzielne rządy absolutne (1661)"
    ],
    "answer": [
      "Anglia staje się republiką (1649)",
      "Przywrócenie monarchii w Anglii (1660)",
      "Ludwik XIV obejmuje samodzielne rządy absolutne (1661)",
      "Koniec panowania Ludwika XIV (1715)"
    ],
    "explanation": "W Anglii republikę ogłoszono w 1649 roku, restauracja nastąpiła w 1660 roku; w 1661 roku Ludwik XIV objął rządy absolutne, które sprawował do śmierci w 1715 roku."
  },
  {
    "id": "R04_OSW_10",
    "section": "Monarchie absolutne i oświecenie",
    "type": "single_choice",
    "prompt": "Jak nazywał się sposób uprawy, którym zaczęto zastępować trójpolówkę?",
    "options": [
      "Pańszczyzna",
      "Ugór stały",
      "Folwark",
      "Trójpodział",
      "Płodozmian",
      "Dziesięcina"
    ],
    "answer": 4,
    "explanation": "Płodozmian pozwalał racjonalniej wykorzystywać ziemię i zwiększać plony, między innymi dzięki uprawie koniczyny."
  },
  {
    "id": "R04_PRZ_01",
    "section": "Reformy, rewolucja i Legiony",
    "type": "single_choice",
    "prompt": "Jaką instytucję powołano w Rzeczpospolitej w 1773 roku do reformy szkolnictwa?",
    "options": [
      "Sejm Wielki",
      "Szkołę Rycerską",
      "Komisję Edukacji Narodowej",
      "Trybunał Rewolucyjny",
      "Radę Nieustającą",
      "Stany Generalne"
    ],
    "answer": 2,
    "explanation": "Komisja Edukacji Narodowej, powstała w 1773 roku, jest uznawana za pierwsze na świecie ministerstwo oświaty."
  },
  {
    "id": "R04_PRZ_02",
    "section": "Reformy, rewolucja i Legiony",
    "type": "fill_in",
    "prompt": "Sejm Czteroletni rozpoczął obrady w Warszawie w roku __________.",
    "options": null,
    "answer": [
      "1788"
    ],
    "altAnswers": [
      [
        "1788",
        "1788 r.",
        "1788 roku"
      ]
    ],
    "explanation": "Sejm Wielki (Czteroletni) obradował od 1788 do 1792 roku i przygotował reformy ustrojowe.",
    "image": "r04_sejm_wielki.jpg"
  },
  {
    "id": "R04_PRZ_03",
    "section": "Reformy, rewolucja i Legiony",
    "type": "multi_select",
    "prompt": "Które reformy znalazły się w programie Sejmu Wielkiego?",
    "options": [
      "Powiększenie armii do 100 tysięcy",
      "Podatek od dochodów szlachty i duchowieństwa",
      "Utrzymanie prawa zrywania sejmów przez jednego posła",
      "Rozszerzenie uprawnień mieszczan",
      "Zniesienie liberum veto",
      "Odebranie mieszczanom prawa do nabywania nieruchomości"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Reformy obejmowały zwiększenie armii, opodatkowanie duchowieństwa i szlachty, nadanie praw mieszczanom oraz zniesienie liberum veto.",
    "image": "r04_sejm_wielki.jpg"
  },
  {
    "id": "R04_PRZ_04",
    "section": "Reformy, rewolucja i Legiony",
    "type": "true_false",
    "prompt": "Konfederacja targowicka w 1792 roku wystąpiła w obronie reform Konstytucji 3 maja.",
    "options": null,
    "answer": false,
    "explanation": "Konfederaci targowiccy sprzeciwili się reformom i zwrócili się do Rosji o pomoc w ich obaleniu."
  },
  {
    "id": "R04_PRZ_05",
    "section": "Reformy, rewolucja i Legiony",
    "type": "match",
    "prompt": "Połącz wydarzenie z jego rokiem.",
    "options": null,
    "left": [
      "I rozbiór Rzeczpospolitej",
      "II rozbiór Rzeczpospolitej",
      "insurekcja kościuszkowska",
      "III rozbiór Rzeczpospolitej"
    ],
    "right": [
      "1795",
      "1794",
      "1772",
      "1793"
    ],
    "answer": {
      "I rozbiór Rzeczpospolitej": "1772",
      "II rozbiór Rzeczpospolitej": "1793",
      "insurekcja kościuszkowska": "1794",
      "III rozbiór Rzeczpospolitej": "1795"
    },
    "explanation": "Kolejne rozbiory miały miejsce w latach 1772, 1793 i 1795, a powstanie kościuszkowskie w 1794 roku."
  },
  {
    "id": "R04_PRZ_06",
    "section": "Reformy, rewolucja i Legiony",
    "type": "scenario",
    "prompt": "Paryż, 14 lipca 1789 roku. Tłum mieszkańców atakuje twierdzę i więzienie w poszukiwaniu broni. Początek jakiego wydarzenia symbolizuje ten dzień?",
    "options": [
      "Restauracji monarchii angielskiej",
      "Wielkiej Rewolucji Francuskiej",
      "Insurekcji kościuszkowskiej",
      "Konfederacji targowickiej",
      "Odsieczy wiedeńskiej",
      "Potopu szwedzkiego"
    ],
    "answer": 1,
    "explanation": "Atak na Bastylię uznaje się za początek Wielkiej Rewolucji Francuskiej.",
    "image": "r04_szturm_bastylii.jpg"
  },
  {
    "id": "R04_PRZ_07",
    "section": "Reformy, rewolucja i Legiony",
    "type": "riddle",
    "prompt": "Jak nazywało się powstanie z 1794 roku prowadzone przez Tadeusza Kościuszkę?",
    "options": null,
    "answer": "insurekcja kościuszkowska",
    "altAnswers": [
      "insurekcja kościuszkowska",
      "powstanie kościuszkowskie",
      "insurekcja",
      "powstanie Kościuszki"
    ],
    "explanation": "Powstanie w 1794 roku miało uratować niepodległość Rzeczpospolitej; zakończyło się klęską."
  },
  {
    "id": "R04_PRZ_08",
    "section": "Reformy, rewolucja i Legiony",
    "type": "odd_one_out",
    "prompt": "Które państwo nie brało udziału w rozbiorach Rzeczpospolitej: Rosja, Prusy, Austria, Francja.",
    "options": null,
    "answer": "Francja",
    "explanation": "Rozbiorów dokonały Rosja, Prusy i Austria; Francja nie należała do zaborców."
  },
  {
    "id": "R04_PRZ_09",
    "section": "Reformy, rewolucja i Legiony",
    "type": "sort",
    "prompt": "Rozdziel wydarzenia i instytucje związane z Rzeczpospolitą oraz z Francją.",
    "options": null,
    "items": [
      "Dyrektoriat",
      "Sejm Czteroletni",
      "Szturm na Bastylię",
      "Powstanie kościuszkowskie",
      "Deklaracja Praw Człowieka i Obywatela",
      "Konfederacja targowicka"
    ],
    "categories": [
      "Rzeczpospolita",
      "Francja"
    ],
    "answer": {
      "Rzeczpospolita": [
        "Sejm Czteroletni",
        "Konfederacja targowicka",
        "Powstanie kościuszkowskie"
      ],
      "Francja": [
        "Szturm na Bastylię",
        "Deklaracja Praw Człowieka i Obywatela",
        "Dyrektoriat"
      ]
    },
    "explanation": "Sejm Wielki, Targowica i insurekcja to wydarzenia polskie; Bastylia, Deklaracja i dyrektoriat dotyczą rewolucyjnej Francji."
  },
  {
    "id": "R04_PRZ_10",
    "section": "Reformy, rewolucja i Legiony",
    "type": "single_choice",
    "prompt": "Kto dowodził Legionami Polskimi utworzonymi we Włoszech w styczniu 1797 roku?",
    "options": [
      "Tadeusz Kościuszko",
      "Józef Wybicki",
      "Jan Karol Chodkiewicz",
      "Stefan Czarniecki",
      "Jan Henryk Dąbrowski",
      "Jan III Sobieski"
    ],
    "answer": 4,
    "explanation": "Legiony powstały w Republice Lombardzkiej pod dowództwem generała Jana Henryka Dąbrowskiego.",
    "image": "r04_legiony_we_wloszech.jpg"
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które z podanych zjawisk były następstwami wielkich odkryć geograficznych?",
    "options": [
      "Napływ złota i srebra do Europy",
      "Rozwój handlu niewolnikami",
      "Całkowite zaniechanie europejskiego osadnictwa",
      "Rozprzestrzenianie chrześcijaństwa w Nowym Świecie",
      "Zniesienie pracy przymusowej w koloniach",
      "Poznanie nieznanych wcześniej Europejczykom roślin"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "explanation": "Wyprawy przyniosły poznanie nowych lądów i roślin, pozyskiwanie metali szlachetnych, rozprzestrzenianie chrześcijaństwa i wzrost handlu niewolnikami.",
    "image": "r04_kolonialny_port.jpg"
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z przełomu średniowiecza i nowożytności we właściwym porządku.",
    "options": null,
    "items": [
      "Dotarcie Kolumba do Ameryki (1492)",
      "Wystąpienie Marcina Lutra (1517)",
      "Schizma wschodnia (1054)",
      "Wynalazek druku Gutenberga (około 1450)"
    ],
    "answer": [
      "Schizma wschodnia (1054)",
      "Wynalazek druku Gutenberga (około 1450)",
      "Dotarcie Kolumba do Ameryki (1492)",
      "Wystąpienie Marcina Lutra (1517)"
    ],
    "explanation": "Do ważnych wydarzeń należą schizma w 1054 roku, upowszechnienie druku około 1450 roku, wyprawa Kolumba w 1492 i początek reformacji w 1517 roku."
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która reforma po soborze trydenckim miała szczególnie poprawić przygotowanie duchownych?",
    "options": [
      "Zniesienie nauki teologii",
      "Przeniesienie wszystkich świątyń na wsie",
      "Tworzenie seminariów duchownych",
      "Likwidacja działalności jezuitów",
      "Rezygnacja z nauczania młodzieży",
      "Zastąpienie biskupów świeckimi urzędnikami"
    ],
    "answer": 2,
    "explanation": "Po soborze w Trydencie podkreślano znaczenie kształcenia księży i zakładano seminaria duchowne.",
    "image": "r04_sobor_w_trydencie.jpg"
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj działania lub grupy do reformacji albo do katolickiej odpowiedzi na reformację.",
    "options": null,
    "items": [
      "Indeks Ksiąg Zakazanych",
      "luteranie",
      "sobór trydencki",
      "kalwini",
      "jezuici",
      "anglikanie"
    ],
    "categories": [
      "reformacja",
      "katolicka odpowiedź"
    ],
    "answer": {
      "reformacja": [
        "luteranie",
        "kalwini",
        "anglikanie"
      ],
      "katolicka odpowiedź": [
        "jezuici",
        "Indeks Ksiąg Zakazanych",
        "sobór trydencki"
      ]
    },
    "explanation": "Luteranie, kalwini i anglikanie należeli do wyznań protestanckich; sobór, jezuici i Indeks były częścią działań Kościoła katolickiego."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz akt prawny z jego skutkiem dla szlachty lub chłopów.",
    "options": null,
    "left": [
      "przywilej koszycki",
      "przywilej warcki",
      "konstytucja nihil novi",
      "przywilej bydgoski"
    ],
    "right": [
      "Co najmniej dzień pańszczyzny w tygodniu",
      "Wymóg zgody sejmu na nowe prawa",
      "Obniżenie podatków szlachty",
      "Ograniczanie opuszczania majątku przez chłopów"
    ],
    "answer": {
      "przywilej koszycki": "Obniżenie podatków szlachty",
      "przywilej warcki": "Ograniczanie opuszczania majątku przez chłopów",
      "konstytucja nihil novi": "Wymóg zgody sejmu na nowe prawa",
      "przywilej bydgoski": "Co najmniej dzień pańszczyzny w tygodniu"
    },
    "explanation": "Kolejne przywileje stopniowo ograniczały władzę monarchy i zwiększały obowiązki chłopów."
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaki organ otrzymał decydujący głos w sprawach państwa na mocy przywileju mielnickiego z 1501 roku?",
    "options": [
      "Senat",
      "Izba poselska",
      "Sejmik ziemski",
      "Trybunał Rewolucyjny",
      "Stany Generalne",
      "Komisja Edukacji Narodowej"
    ],
    "answer": 0,
    "explanation": "Przywilej mielnicki umacniał pozycję senatu, czyli magnaterii, a król miał mu przewodniczyć."
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia wojen Rzeczpospolitej w XVII wieku chronologicznie.",
    "options": null,
    "items": [
      "Pokój w Andruszowie (1667)",
      "Przyłączenie się Rosji do konfliktu (1654)",
      "Pokój w Oliwie (1660)",
      "Początek powstania Chmielnickiego (1648)",
      "Początek potopu szwedzkiego (1655)"
    ],
    "answer": [
      "Początek powstania Chmielnickiego (1648)",
      "Przyłączenie się Rosji do konfliktu (1654)",
      "Początek potopu szwedzkiego (1655)",
      "Pokój w Oliwie (1660)",
      "Pokój w Andruszowie (1667)"
    ],
    "explanation": "Rok 1648 rozpoczął powstanie na Ukrainie, w 1654 do konfliktu weszła Rosja, w 1655 napadła Szwecja; dwa pokoje zawarto w 1660 i 1667."
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Podczas obrad sejmu jeden poseł wypowiada słowa „nie pozwalam”. Zgodnie z zasadą liberum veto obrady zostają przerwane. Co dzieje się z wcześniej podjętymi decyzjami?",
    "options": [
      "Pozostają bez zmian i natychmiast wchodzą w życie",
      "Decyduje o nich wyłącznie król",
      "Przechodzą automatycznie pod obrady sejmików",
      "Zostają unieważnione",
      "Zatwierdza je tylko senat",
      "Przekształcają się w rozporządzenia hetmana"
    ],
    "answer": 3,
    "explanation": "Liberum veto nie tylko zrywało sejm, ale także unieważniało jego decyzje."
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które informacje odnoszą się do odsieczy wiedeńskiej z 1683 roku?",
    "options": [
      "Dowodził Jan III Sobieski",
      "Zwyciężyła armia turecka",
      "Odsiecz niosła pomoc oblężonej stolicy Austrii",
      "Wojna zakończyła się pokojem w Oliwie",
      "Walczyły wojska austriacko-niemiecko-polskie"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Pod Wiedniem walczyły połączone wojska austriackie, niemieckie i polskie pod wodzą Jana III Sobieskiego, zatrzymując ofensywę turecką.",
    "image": "r04_odsiecz_wiedenska.jpg"
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywano opłacanych przez rody magnackie szlachciców, którzy głosowali zgodnie z wolą swoich patronów?",
    "options": null,
    "answer": "klienci",
    "altAnswers": [
      "klienci",
      "klientela",
      "klientów"
    ],
    "explanation": "Magnaci wykorzystywali system klientów do kierowania głosowaniami sejmowymi i realizowania własnych interesów."
  },
  {
    "id": "R04_HARD_11",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz wydarzenie z dziejów Anglii i Francji z rokiem.",
    "options": null,
    "left": [
      "Egzekucja Karola I Stuarta",
      "Restauracja monarchii angielskiej",
      "Początek osobistych rządów absolutnych Ludwika XIV",
      "Koniec panowania Ludwika XIV"
    ],
    "right": [
      "1661",
      "1715",
      "1649",
      "1660"
    ],
    "answer": {
      "Egzekucja Karola I Stuarta": "1649",
      "Restauracja monarchii angielskiej": "1660",
      "Początek osobistych rządów absolutnych Ludwika XIV": "1661",
      "Koniec panowania Ludwika XIV": "1715"
    },
    "explanation": "W Anglii po straceniu Karola I w 1649 roku przywrócono monarchię w 1660; we Francji Ludwik XIV rządził osobiście od 1661 do 1715 roku."
  },
  {
    "id": "R04_HARD_12",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia schyłku Rzeczpospolitej w porządku chronologicznym.",
    "options": null,
    "items": [
      "Insurekcja kościuszkowska (1794)",
      "Początek Sejmu Wielkiego (1788)",
      "III rozbiór Rzeczpospolitej (1795)",
      "I rozbiór Rzeczpospolitej (1772)",
      "II rozbiór Rzeczpospolitej (1793)",
      "Konfederacja targowicka (1792)"
    ],
    "answer": [
      "I rozbiór Rzeczpospolitej (1772)",
      "Początek Sejmu Wielkiego (1788)",
      "Konfederacja targowicka (1792)",
      "II rozbiór Rzeczpospolitej (1793)",
      "Insurekcja kościuszkowska (1794)",
      "III rozbiór Rzeczpospolitej (1795)"
    ],
    "explanation": "Między pierwszym i trzecim rozbiorem podjęto reformy Sejmu Wielkiego, a po Targowicy i drugim rozbiorze wybuchła insurekcja."
  },
  {
    "id": "R04_HARD_13",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które prawa wymieniono w artykule 2 Deklaracji Praw Człowieka i Obywatela z 1789 roku?",
    "options": [
      "Wolność",
      "Własność",
      "Dziedziczna władza króla",
      "Bezpieczeństwo",
      "Przywileje jedynie dla duchowieństwa",
      "Opór przeciwko uciskowi"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "explanation": "Deklaracja wymienia wolność, własność, bezpieczeństwo oraz opór przeciw uciskowi jako prawa naturalne."
  },
  {
    "id": "R04_HARD_14",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ilu spośród 6000 legionistów wysłanych na San Domingo powróciło?",
    "options": [
      "Około 6000",
      "Około 3000",
      "Mniej niż 300",
      "Około 4500",
      "Ponad 5000",
      "Około 1000"
    ],
    "answer": 2,
    "explanation": "Legiony wysłano do tłumienia buntu w kolonii francuskiej na San Domingo; z 6000 polskich żołnierzy wróciło niespełna 300.",
    "image": "r04_legiony_we_wloszech.jpg"
  }
];

const KID_PROMPTS = {
  "R04_ODK_01": "Dlaczego Europejczycy zaczęli szukać nowej drogi do Indii?",
  "R04_ODK_02": "Dlaczego ludzie wyruszali na dalekie wyprawy? Zaznacz wszystkie poprawne.",
  "R04_ODK_08": "Kupiec chce dotrzeć do Indii, ale droga lądowa jest trudna. Jakiej nowej drogi powinien szukać?",
  "R04_REF_03": "Co było charakterystyczne dla protestantyzmu? Zaznacz wszystkie poprawne.",
  "R04_RZE_01": "Czym był szlachecki folwark?",
  "R04_RZE_03": "O czym decydował sejm walny? Zaznacz wszystkie poprawne.",
  "R04_WOJ_02": "Co złego przyniosły Polsce wojny w XVII wieku?",
  "R04_WOJ_08": "Szlachcic każe chłopom pracować dłużej za darmo. Co zwiększa?",
  "R04_OSW_04": "Co głosili ludzie oświecenia? Zaznacz wszystkie poprawne.",
  "R04_PRZ_03": "Co zmienił Sejm Wielki? Zaznacz wszystkie poprawne.",
  "R04_PRZ_06": "Tłum zdobywa paryską twierdzę w lipcu 1789 roku. Początek czego to oznacza?",
  "R04_HARD_08": "Jeden poseł przerywa sejm słowami \"nie pozwalam\". Co dzieje się z decyzjami sejmu?"
};

const chapter = {
  id: "r04",
  number: 4,
  title: "Nowożytność",
  icon: "🌍",
  sectionOrder: [
    "Odkrycia geograficzne",
    "Reformacja i kontrreformacja",
    "Rzeczpospolita i demokracja szlachecka",
    "Wojny i kryzys Rzeczpospolitej",
    "Monarchie absolutne i oświecenie",
    "Reformy, rewolucja i Legiony"
  ],
  sectionIcons: {
    "Odkrycia geograficzne": "🌍",
    "Reformacja i kontrreformacja": "⛪",
    "Rzeczpospolita i demokracja szlachecka": "🏛️",
    "Wojny i kryzys Rzeczpospolitej": "⚔️",
    "Monarchie absolutne i oświecenie": "💡",
    "Reformy, rewolucja i Legiony": "🇵🇱"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
