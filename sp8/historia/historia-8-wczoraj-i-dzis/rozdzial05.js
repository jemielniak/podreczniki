// Skróty sekcji (do identyfikatorów ćwiczeń):
//   OPO  = Początki opozycji demokratycznej w Polsce
//   SOL  = Powstanie Solidarności
//   WOJ  = Stan wojenny w Polsce
//   BLO  = Rozpad bloku wschodniego
//   RP3  = Początek III Rzeczypospolitej
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R05_OPO_01",
    "section": "Początki opozycji demokratycznej w Polsce",
    "type": "single_choice",
    "prompt": "Co bezpośrednio wywołało protesty robotnicze 25 czerwca 1976 r.?",
    "options": [
      "Ogłoszenie drastycznych podwyżek cen żywności",
      "Rozwiązanie KOR",
      "Wprowadzenie stanu wojennego",
      "Zamknięcie Stoczni Gdańskiej",
      "Wybór Karola Wojtyły na papieża",
      "Rozwiązanie PZPR"
    ],
    "answer": 0,
    "explanation": "Dzień wcześniej ogłoszono drastyczne podwyżki cen żywności. Już 25 czerwca rozpoczęły się strajki i demonstracje.",
    "image": "r05_radom_1976.jpg"
  },
  {
    "id": "R05_OPO_02",
    "section": "Początki opozycji demokratycznej w Polsce",
    "type": "multi_select",
    "prompt": "W których miastach odbyły się największe protesty w czerwcu 1976 r.?",
    "options": [
      "Radom",
      "Gdańsk",
      "Ursus",
      "Katowice",
      "Płock",
      "Lublin"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Największe wystąpienia robotnicze odbyły się w Radomiu, Ursusie i Płocku.",
    "image": "r05_radom_1976.jpg"
  },
  {
    "id": "R05_OPO_03",
    "section": "Początki opozycji demokratycznej w Polsce",
    "type": "true_false",
    "prompt": "Edward Gierek zezwolił siłom porządkowym na użycie broni palnej podczas tłumienia protestów w czerwcu 1976 r.",
    "options": null,
    "answer": false,
    "explanation": "Edward Gierek zakazał użycia broni palnej, choć wobec protestujących stosowano aresztowania, pobicia i zwolnienia z pracy."
  },
  {
    "id": "R05_OPO_04",
    "section": "Początki opozycji demokratycznej w Polsce",
    "type": "match",
    "prompt": "Połącz działacza KOR z właściwym opisem.",
    "options": null,
    "left": [
      "Jerzy Andrzejewski",
      "Stanisław Barańczak",
      "ks. Jan Zieja",
      "Jan Józef Lipski"
    ],
    "right": [
      "inicjator Listu 34",
      "poeta",
      "były kapelan AK",
      "pisarz"
    ],
    "answer": {
      "Jerzy Andrzejewski": "pisarz",
      "Stanisław Barańczak": "poeta",
      "ks. Jan Zieja": "były kapelan AK",
      "Jan Józef Lipski": "inicjator Listu 34"
    },
    "explanation": "W gronie założycieli KOR byli ludzie kultury oraz działacze demokratyczni i niepodległościowi.",
    "image": "r05_kor_zebranie.jpg"
  },
  {
    "id": "R05_OPO_05",
    "section": "Początki opozycji demokratycznej w Polsce",
    "type": "sort",
    "prompt": "Przyporządkuj organizacje opozycyjne do roku ich powstania.",
    "options": null,
    "items": [
      "Wolne Związki Zawodowe",
      "Konfederacja Polski Niepodległej",
      "Komitet Samoobrony Społecznej KOR",
      "Ruch Obrony Praw Człowieka i Obywatela"
    ],
    "categories": [
      "1977",
      "1978",
      "1979"
    ],
    "answer": {
      "1977": [
        "Komitet Samoobrony Społecznej KOR",
        "Ruch Obrony Praw Człowieka i Obywatela"
      ],
      "1978": [
        "Wolne Związki Zawodowe"
      ],
      "1979": [
        "Konfederacja Polski Niepodległej"
      ]
    },
    "explanation": "KSS KOR i ROPCiO powstały w 1977 r., WZZ w 1978 r., a KPN w 1979 r.",
    "image": "r05_kor_zebranie.jpg"
  },
  {
    "id": "R05_OPO_06",
    "section": "Początki opozycji demokratycznej w Polsce",
    "type": "fill_in",
    "prompt": "Komitet Obrony Robotników powstał we __________ 1976 r., a jego współpracownik Stanisław Pyjas został zamordowany w __________ 1977 r.",
    "options": null,
    "altAnswers": [
      [
        "wrześniu",
        "wrzesniu",
        "IX"
      ],
      [
        "maju",
        "maj",
        "V"
      ]
    ],
    "answer": [
      "wrześniu",
      "maju"
    ],
    "explanation": "KOR powstał we wrześniu 1976 r. W maju 1977 r. zginął współpracujący z nim student Stanisław Pyjas."
  },
  {
    "id": "R05_OPO_07",
    "section": "Początki opozycji demokratycznej w Polsce",
    "type": "riddle",
    "prompt": "Jak nazywano niezależny od komunistycznej cenzury ruch wydawniczy, w którym nielegalnie drukowano i rozpowszechniano książki oraz ulotki?",
    "options": null,
    "altAnswers": [
      "drugi obieg",
      "II obieg"
    ],
    "answer": "drugi obieg",
    "explanation": "Niezależny ruch wydawniczy działający poza oficjalną cenzurą nazywano drugim obiegiem."
  },
  {
    "id": "R05_OPO_08",
    "section": "Początki opozycji demokratycznej w Polsce",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: KSS KOR, ROPCiO, WZZ, PZPR.",
    "options": null,
    "answer": "PZPR",
    "explanation": "KSS KOR, ROPCiO i WZZ były organizacjami opozycyjnymi. PZPR była partią rządzącą w PRL."
  },
  {
    "id": "R05_OPO_09",
    "section": "Początki opozycji demokratycznej w Polsce",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "Wybór Karola Wojtyły na papieża",
      "Protesty robotnicze w czerwcu 1976 r.",
      "Pierwsza pielgrzymka Jana Pawła II do Polski",
      "Powstanie KOR"
    ],
    "answer": [
      "Protesty robotnicze w czerwcu 1976 r.",
      "Powstanie KOR",
      "Wybór Karola Wojtyły na papieża",
      "Pierwsza pielgrzymka Jana Pawła II do Polski"
    ],
    "explanation": "Kolejność wyznaczają daty: czerwiec 1976 r., wrzesień 1976 r., 16 października 1978 r. i czerwiec 1979 r.",
    "image": "r05_pielgrzymka_1979.jpg"
  },
  {
    "id": "R05_OPO_10",
    "section": "Początki opozycji demokratycznej w Polsce",
    "type": "scenario",
    "prompt": "Podczas transmisji z pielgrzymki Jana Pawła II telewizja unikała pokazywania wielkich tłumów. Jaki cel miało takie działanie władz?",
    "options": [
      "Zachęcić do udziału w spotkaniach",
      "Studzić entuzjazm i pomniejszać skalę zgromadzeń",
      "Ułatwić organizację pielgrzymki",
      "Promować działalność KOR",
      "Przygotować wolne wybory",
      "Zachęcić do wstępowania do PZPR"
    ],
    "answer": 1,
    "explanation": "Władze próbowały studzić entuzjazm społeczny i pomniejszać widoczną skalę poparcia dla wydarzenia.",
    "image": "r05_pielgrzymka_1979.jpg"
  },
  {
    "id": "R05_OPO_11",
    "section": "Początki opozycji demokratycznej w Polsce",
    "type": "single_choice",
    "prompt": "Która organizacja była pierwszą antykomunistyczną partią polityczną w bloku wschodnim?",
    "options": [
      "Wolne Związki Zawodowe",
      "Komitet Obrony Robotników",
      "Ruch Obrony Praw Człowieka i Obywatela",
      "Konfederacja Polski Niepodległej",
      "Komitet Samoobrony Społecznej KOR",
      "Obywatelski Klub Parlamentarny"
    ],
    "answer": 3,
    "explanation": "Konfederacja Polski Niepodległej, założona w 1979 r. i kierowana przez Leszka Moczulskiego, była pierwszą taką partią w bloku wschodnim."
  },
  {
    "id": "R05_SOL_01",
    "section": "Powstanie Solidarności",
    "type": "single_choice",
    "prompt": "Co było bezpośrednią przyczyną strajku w Stoczni Gdańskiej, rozpoczętego 14 sierpnia 1980 r.?",
    "options": [
      "Podwyżka ceny cukru o 100%",
      "Aresztowanie Lecha Wałęsy",
      "Zwolnienie z pracy Anny Walentynowicz",
      "Rozwiązanie KOR",
      "Zamach na Jana Pawła II",
      "Zniesienie cenzury"
    ],
    "answer": 2,
    "explanation": "Bezpośrednim impulsem było zwolnienie z pracy Anny Walentynowicz, działaczki Wolnych Związków Zawodowych.",
    "image": "r05_stocznia_sierpien_1980.jpg"
  },
  {
    "id": "R05_SOL_02",
    "section": "Powstanie Solidarności",
    "type": "match",
    "prompt": "Połącz osobę z rolą podczas strajków sierpniowych 1980 r.",
    "options": null,
    "left": [
      "Bogdan Borusewicz",
      "Lech Wałęsa",
      "Anna Walentynowicz",
      "Tadeusz Mazowiecki"
    ],
    "right": [
      "doradzał strajkującym jako intelektualista związany z opozycją",
      "jej zwolnienie stało się bezpośrednią przyczyną strajku",
      "opracował plan strajku",
      "stanął na czele protestu i MKS"
    ],
    "answer": {
      "Bogdan Borusewicz": "opracował plan strajku",
      "Lech Wałęsa": "stanął na czele protestu i MKS",
      "Anna Walentynowicz": "jej zwolnienie stało się bezpośrednią przyczyną strajku",
      "Tadeusz Mazowiecki": "doradzał strajkującym jako intelektualista związany z opozycją"
    },
    "explanation": "Strajk był przygotowany przez działaczy opozycyjnych, a protestujących wspierali także intelektualiści."
  },
  {
    "id": "R05_SOL_03",
    "section": "Powstanie Solidarności",
    "type": "multi_select",
    "prompt": "Które żądania znalazły się wśród 21 postulatów MKS?",
    "options": [
      "Poprawa sytuacji ekonomicznej pracujących",
      "Legalne niezależne związki zawodowe",
      "Likwidacja senatu",
      "Wolność słowa",
      "Rozwiązanie wszystkich związków zawodowych",
      "Uwolnienie więźniów politycznych"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "explanation": "Strajkujący domagali się m.in. poprawy sytuacji ekonomicznej, legalnych niezależnych związków zawodowych, wolności słowa i uwolnienia więźniów politycznych.",
    "image": "r05_21_postulatow.jpg"
  },
  {
    "id": "R05_SOL_04",
    "section": "Powstanie Solidarności",
    "type": "true_false",
    "prompt": "Strajk okupacyjny polega na opuszczeniu zakładu pracy przez protestujących i prowadzeniu protestu poza jego terenem.",
    "options": null,
    "answer": false,
    "explanation": "W strajku okupacyjnym protestujący zajmują teren przedsiębiorstwa i blokują jego funkcjonowanie.",
    "image": "r05_stocznia_sierpien_1980.jpg"
  },
  {
    "id": "R05_SOL_05",
    "section": "Powstanie Solidarności",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia Sierpnia 1980 i narodzin Solidarności w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Powstanie NSZZ Solidarność",
      "Utworzenie Międzyzakładowego Komitetu Strajkowego",
      "Rozpoczęcie strajku w Stoczni Gdańskiej",
      "Podpisanie porozumień w Gdańsku"
    ],
    "answer": [
      "Rozpoczęcie strajku w Stoczni Gdańskiej",
      "Utworzenie Międzyzakładowego Komitetu Strajkowego",
      "Podpisanie porozumień w Gdańsku",
      "Powstanie NSZZ Solidarność"
    ],
    "explanation": "Strajk rozpoczął się 14 sierpnia, następnie powstał MKS, 31 sierpnia podpisano porozumienia, a 17 września utworzono ogólnokrajowy związek.",
    "image": "r05_21_postulatow.jpg"
  },
  {
    "id": "R05_SOL_06",
    "section": "Powstanie Solidarności",
    "type": "single_choice",
    "prompt": "Kto podpisał porozumienie gdańskie 31 sierpnia 1980 r.?",
    "options": [
      "Lech Wałęsa i Mieczysław Jagielski",
      "Anna Walentynowicz i Edward Gierek",
      "Bogdan Borusewicz i Stanisław Kania",
      "Tadeusz Mazowiecki i Wojciech Jaruzelski",
      "Bronisław Geremek i Czesław Kiszczak",
      "Andrzej Gwiazda i Stefan Wyszyński"
    ],
    "answer": 0,
    "explanation": "Porozumienie w Gdańsku podpisali Lech Wałęsa i wicepremier Mieczysław Jagielski."
  },
  {
    "id": "R05_SOL_07",
    "section": "Powstanie Solidarności",
    "type": "riddle",
    "prompt": "Jak brzmiał skrót nazwy komitetu, który reprezentował wiele strajkujących zakładów i ogłosił 21 postulatów?",
    "options": null,
    "altAnswers": [
      "MKS",
      "Międzyzakładowy Komitet Strajkowy",
      "Miedzyzakladowy Komitet Strajkowy"
    ],
    "answer": "MKS",
    "explanation": "Międzyzakładowy Komitet Strajkowy, czyli MKS, powstał po poparciu stoczniowców przez pracowników innych zakładów."
  },
  {
    "id": "R05_SOL_08",
    "section": "Powstanie Solidarności",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Gdańsk, Szczecin, Jastrzębie-Zdrój, Warszawa.",
    "options": null,
    "answer": "Warszawa",
    "explanation": "Porozumienia kończące falę strajków podpisano w Gdańsku, Szczecinie i Jastrzębiu-Zdroju. Warszawa nie należy do tej grupy."
  },
  {
    "id": "R05_SOL_09",
    "section": "Powstanie Solidarności",
    "type": "scenario",
    "prompt": "17 września 1980 r. delegaci z całej Polski spotkali się w Gdańsku, aby powołać jedną ogólnokrajową organizację związkową. Co wtedy utworzono?",
    "options": [
      "KOR",
      "WRON",
      "ROPCiO",
      "KPN",
      "NSZZ Solidarność",
      "OKP"
    ],
    "answer": 4,
    "explanation": "Na tym spotkaniu utworzono Niezależny Samorządny Związek Zawodowy Solidarność.",
    "image": "r05_zjazd_solidarnosci.jpg"
  },
  {
    "id": "R05_SOL_10",
    "section": "Powstanie Solidarności",
    "type": "match",
    "prompt": "Połącz datę lub okres z wydarzeniem dotyczącym Solidarności.",
    "options": null,
    "left": [
      "31 sierpnia 1980 r.",
      "17 września 1980 r.",
      "listopad 1980 r.",
      "jesień 1981 r."
    ],
    "right": [
      "I Zjazd Delegatów NSZZ Solidarność",
      "oficjalna rejestracja związku",
      "podpisanie porozumienia w Gdańsku",
      "powstanie NSZZ Solidarność"
    ],
    "answer": {
      "31 sierpnia 1980 r.": "podpisanie porozumienia w Gdańsku",
      "17 września 1980 r.": "powstanie NSZZ Solidarność",
      "listopad 1980 r.": "oficjalna rejestracja związku",
      "jesień 1981 r.": "I Zjazd Delegatów NSZZ Solidarność"
    },
    "explanation": "Porozumienia sierpniowe otworzyły drogę do utworzenia i rejestracji Solidarności, a jesienią 1981 r. odbył się jej I Zjazd Delegatów.",
    "image": "r05_zjazd_solidarnosci.jpg"
  },
  {
    "id": "R05_SOL_11",
    "section": "Powstanie Solidarności",
    "type": "multi_select",
    "prompt": "Które zjawiska charakteryzowały karnawał Solidarności?",
    "options": [
      "Większa swoboda publicznego wyrażania opinii",
      "Wydawanie Tygodnika Solidarność",
      "Zakaz wszelkich niezależnych publikacji",
      "Rozwój drugiego obiegu",
      "Likwidacja Solidarności",
      "Wznoszenie pomników ofiar protestów z 1956 i 1970 r."
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "explanation": "W okresie legalnego działania Solidarności wzrosła swoboda wypowiedzi, ukazywały się niezależne i podziemne pisma oraz wznoszono pomniki upamiętniające wcześniejsze protesty."
  },
  {
    "id": "R05_WOJ_01",
    "section": "Stan wojenny w Polsce",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane ze stanem wojennym i opozycją w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Zniesienie stanu wojennego",
      "Pacyfikacja kopalni Wujek",
      "Zamordowanie ks. Jerzego Popiełuszki",
      "Wojciech Jaruzelski obejmuje funkcję I sekretarza KC PZPR",
      "Wprowadzenie stanu wojennego"
    ],
    "answer": [
      "Wojciech Jaruzelski obejmuje funkcję I sekretarza KC PZPR",
      "Wprowadzenie stanu wojennego",
      "Pacyfikacja kopalni Wujek",
      "Zniesienie stanu wojennego",
      "Zamordowanie ks. Jerzego Popiełuszki"
    ],
    "explanation": "Kolejność wyznaczają: październik 1981 r., 13 grudnia 1981 r., 16 grudnia 1981 r., 22 lipca 1983 r. i 19 października 1984 r.",
    "image": "r05_stan_wojenny_ulica.jpg"
  },
  {
    "id": "R05_WOJ_02",
    "section": "Stan wojenny w Polsce",
    "type": "multi_select",
    "prompt": "Które działania wprowadzono w ramach stanu wojennego?",
    "options": [
      "Zawieszenie działalności związków zawodowych",
      "Zakaz organizowania strajków",
      "Internowanie liderów opozycji",
      "Przeprowadzenie wolnych wyborów do senatu",
      "Posterunki wojskowe w całym kraju",
      "Pełne zniesienie cenzury"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Władze zawiesiły działalność związków zawodowych, zakazały strajków, rozstawiły posterunki wojskowe i internowały działaczy opozycji."
  },
  {
    "id": "R05_WOJ_03",
    "section": "Stan wojenny w Polsce",
    "type": "true_false",
    "prompt": "Wojskowej Radzie Ocalenia Narodowego przewodniczył generał Wojciech Jaruzelski.",
    "options": null,
    "answer": true,
    "explanation": "Po wprowadzeniu stanu wojennego władzę przejęła WRON, której przewodniczył Wojciech Jaruzelski.",
    "image": "r05_stan_wojenny_ulica.jpg"
  },
  {
    "id": "R05_WOJ_04",
    "section": "Stan wojenny w Polsce",
    "type": "riddle",
    "prompt": "Jak nazywano aresztowanie i umieszczanie działaczy opozycji w ośrodkach odosobnienia bez zwykłego trybu sądowego?",
    "options": null,
    "altAnswers": [
      "internowanie",
      "internacja"
    ],
    "answer": "internowanie",
    "explanation": "Internowanie było jednym z podstawowych narzędzi represji po 13 grudnia 1981 r."
  },
  {
    "id": "R05_WOJ_05",
    "section": "Stan wojenny w Polsce",
    "type": "single_choice",
    "prompt": "Ilu górników zginęło od kul podczas pacyfikacji kopalni Wujek?",
    "options": [
      "3",
      "6",
      "9",
      "12",
      "23",
      "56"
    ],
    "answer": 2,
    "explanation": "Oddziały ZOMO użyły broni palnej. Zginęło 9 górników, a 23 zostało rannych.",
    "image": "r05_kopalnia_wujek.jpg"
  },
  {
    "id": "R05_WOJ_06",
    "section": "Stan wojenny w Polsce",
    "type": "sort",
    "prompt": "Przyporządkuj działania do kategorii: opór społeczny albo represje władz.",
    "options": null,
    "items": [
      "cenzura korespondencji",
      "demonstracje uliczne",
      "internowanie opozycjonistów",
      "bojkot Dziennika Telewizyjnego",
      "posterunki wojskowe",
      "tworzenie niezależnych instytucji społecznych"
    ],
    "categories": [
      "opór społeczny",
      "represje władz"
    ],
    "answer": {
      "opór społeczny": [
        "demonstracje uliczne",
        "bojkot Dziennika Telewizyjnego",
        "tworzenie niezależnych instytucji społecznych"
      ],
      "represje władz": [
        "internowanie opozycjonistów",
        "cenzura korespondencji",
        "posterunki wojskowe"
      ]
    },
    "explanation": "Podziemie zachęcało do oporu cywilnego, natomiast władze stosowały internowania, cenzurę i obecność wojska."
  },
  {
    "id": "R05_WOJ_07",
    "section": "Stan wojenny w Polsce",
    "type": "scenario",
    "prompt": "W czasie stanu wojennego obywatel nie mógł bez zezwolenia wychodzić z domu między 22:00 a 6:00. Jak nazywano to ograniczenie?",
    "options": [
      "Strajk okupacyjny",
      "Internowanie",
      "Drugi obieg",
      "Godzina milicyjna",
      "Pierestrojka",
      "Głasnost"
    ],
    "answer": 3,
    "explanation": "Zakaz opuszczania domów w określonych godzinach nazywano godziną milicyjną.",
    "image": "r05_stan_wojenny_ulica.jpg"
  },
  {
    "id": "R05_WOJ_08",
    "section": "Stan wojenny w Polsce",
    "type": "match",
    "prompt": "Połącz datę z wydarzeniem.",
    "options": null,
    "left": [
      "13 grudnia 1981 r.",
      "16 grudnia 1981 r.",
      "22 lipca 1983 r.",
      "19 października 1984 r."
    ],
    "right": [
      "zniesienie stanu wojennego",
      "porwanie i zamordowanie ks. Jerzego Popiełuszki",
      "wprowadzenie stanu wojennego",
      "pacyfikacja kopalni Wujek"
    ],
    "answer": {
      "13 grudnia 1981 r.": "wprowadzenie stanu wojennego",
      "16 grudnia 1981 r.": "pacyfikacja kopalni Wujek",
      "22 lipca 1983 r.": "zniesienie stanu wojennego",
      "19 października 1984 r.": "porwanie i zamordowanie ks. Jerzego Popiełuszki"
    },
    "explanation": "Daty te wyznaczają kluczowe wydarzenia stanu wojennego i późniejszych represji wobec opozycji.",
    "image": "r05_kopalnia_wujek.jpg"
  },
  {
    "id": "R05_WOJ_09",
    "section": "Stan wojenny w Polsce",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Trybuna Ludu, Żołnierz Wolności, Tygodnik Solidarność.",
    "options": null,
    "answer": "Tygodnik Solidarność",
    "explanation": "Podczas stanu wojennego zezwolono na wydawanie Trybuny Ludu i Żołnierza Wolności. Tygodnik Solidarność był pismem niezależnego związku."
  },
  {
    "id": "R05_WOJ_10",
    "section": "Stan wojenny w Polsce",
    "type": "fill_in",
    "prompt": "Stan wojenny zniesiono __________ 1983 r., a ksiądz Jerzy Popiełuszko został zamordowany __________ 1984 r.",
    "options": null,
    "altAnswers": [
      [
        "22 lipca",
        "22 VII",
        "22.07"
      ],
      [
        "19 października",
        "19 pazdziernika",
        "19 X",
        "19.10"
      ]
    ],
    "answer": [
      "22 lipca",
      "19 października"
    ],
    "explanation": "Stan wojenny zakończono 22 lipca 1983 r. Ksiądz Jerzy Popiełuszko został porwany i zamordowany przez funkcjonariuszy SB 19 października 1984 r."
  },
  {
    "id": "R05_WOJ_11",
    "section": "Stan wojenny w Polsce",
    "type": "single_choice",
    "prompt": "Jaką formę pokojowego protestu szczególnie kojarzono z Pomarańczową Alternatywą?",
    "options": [
      "Zbrojne oddziały partyzanckie",
      "Strajki głodowe w kopalniach",
      "Sabotaż przemysłowy",
      "Bojkot wyborów do senatu",
      "Humorystyczne happeningi i krasnoludki",
      "Tworzenie wojskowych patroli"
    ],
    "answer": 4,
    "explanation": "Pomarańczowa Alternatywa wykorzystywała humorystyczne happeningi i malowanie krasnoludków, aby ośmieszać absurdy systemu.",
    "image": "r05_pomaranczowa_alternatywa.jpg"
  },
  {
    "id": "R05_BLO_01",
    "section": "Rozpad bloku wschodniego",
    "type": "sort",
    "prompt": "Przyporządkuj zjawiska do źródeł osłabienia ZSRS.",
    "options": null,
    "items": [
      "wojna w Afganistanie",
      "korupcja",
      "spadek cen ropy",
      "narastające dążenia narodowościowe",
      "wyścig zbrojeń z USA",
      "zła organizacja pracy",
      "marnotrawstwo surowców i energii"
    ],
    "categories": [
      "problemy wewnętrzne",
      "presja zewnętrzna"
    ],
    "answer": {
      "problemy wewnętrzne": [
        "zła organizacja pracy",
        "korupcja",
        "marnotrawstwo surowców i energii",
        "narastające dążenia narodowościowe"
      ],
      "presja zewnętrzna": [
        "wyścig zbrojeń z USA",
        "spadek cen ropy",
        "wojna w Afganistanie"
      ]
    },
    "explanation": "ZSRS osłabiały zarówno problemy własnej gospodarki i struktury państwa, jak i kosztowna rywalizacja międzynarodowa."
  },
  {
    "id": "R05_BLO_02",
    "section": "Rozpad bloku wschodniego",
    "type": "single_choice",
    "prompt": "W którym roku Ronald Reagan został prezydentem Stanów Zjednoczonych?",
    "options": [
      "1979",
      "1981",
      "1983",
      "1985",
      "1987",
      "1989"
    ],
    "answer": 1,
    "explanation": "Ronald Reagan objął urząd prezydenta USA w 1981 r. i pełnił go przez dwie kadencje."
  },
  {
    "id": "R05_BLO_03",
    "section": "Rozpad bloku wschodniego",
    "type": "match",
    "prompt": "Połącz hasło reform Gorbaczowa z jego znaczeniem.",
    "options": null,
    "left": [
      "pierestrojka",
      "głasnost",
      "ograniczenie cenzury",
      "wprowadzenie elementów kapitalizmu"
    ],
    "right": [
      "element pierestrojki",
      "jawność",
      "przebudowa",
      "element głasnosti"
    ],
    "answer": {
      "pierestrojka": "przebudowa",
      "głasnost": "jawność",
      "ograniczenie cenzury": "element głasnosti",
      "wprowadzenie elementów kapitalizmu": "element pierestrojki"
    },
    "explanation": "Pierestrojka oznaczała przebudowę, a głasnost jawność. Pierwsza dotyczyła m.in. zmian gospodarczych, druga większej swobody informacji i życia publicznego.",
    "image": "r05_gorbaczow_reagan.jpg"
  },
  {
    "id": "R05_BLO_04",
    "section": "Rozpad bloku wschodniego",
    "type": "true_false",
    "prompt": "Michaił Gorbaczow został I sekretarzem KPZS w 1985 r.",
    "options": null,
    "answer": true,
    "explanation": "Gorbaczow objął kierownictwo KPZS w 1985 r. i podjął próbę reform ZSRS.",
    "image": "r05_gorbaczow_reagan.jpg"
  },
  {
    "id": "R05_BLO_05",
    "section": "Rozpad bloku wschodniego",
    "type": "multi_select",
    "prompt": "Które działania USA za prezydentury Ronalda Reagana miały zwiększać presję na ZSRS?",
    "options": [
      "Rozbudowa i unowocześnianie armii",
      "Rozmieszczanie nowoczesnych pocisków w Europie Zachodniej",
      "Wycofanie się z rywalizacji zbrojeniowej",
      "Nakłonienie Arabii Saudyjskiej do zwiększenia wydobycia ropy",
      "Wspieranie gospodarki centralnie sterowanej w ZSRS",
      "Wsparcie ruchów antykomunistycznych"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "explanation": "USA rozbudowywały armię, rozmieszczały nowoczesne rakiety w Europie Zachodniej, wspierały ruchy antykomunistyczne i doprowadziły do spadku cen ropy przez zwiększenie wydobycia w Arabii Saudyjskiej."
  },
  {
    "id": "R05_BLO_06",
    "section": "Rozpad bloku wschodniego",
    "type": "riddle",
    "prompt": "Jak nazywa się fala przemian politycznych z 1989 r., która doprowadziła do upadku rządów komunistycznych w wielu państwach Europy Środkowo-Wschodniej?",
    "options": null,
    "altAnswers": [
      "Jesień Ludów",
      "Jesien Ludow"
    ],
    "answer": "Jesień Ludów",
    "explanation": "Jesienią Ludów nazwano przemiany 1989 r. prowadzące do odzyskiwania suwerenności i demokratyzacji państw bloku wschodniego."
  },
  {
    "id": "R05_BLO_07",
    "section": "Rozpad bloku wschodniego",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo, które nie należało do państw objętych przemianami Jesieni Ludów: Polska, Czechosłowacja, NRD, Rumunia, Hiszpania.",
    "options": null,
    "answer": "Hiszpania",
    "explanation": "Polska, Czechosłowacja, NRD i Rumunia należały do państw bloku wschodniego objętych przemianami 1989 r. Hiszpania nie należy do tej grupy."
  },
  {
    "id": "R05_BLO_08",
    "section": "Rozpad bloku wschodniego",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "Zjednoczenie Niemiec",
      "Aksamitna rewolucja w Czechosłowacji",
      "Decyzja o rozwiązaniu ZSRS",
      "Częściowo wolne wybory w Polsce",
      "Otwarcie granicy NRD z RFN i początek burzenia muru berlińskiego"
    ],
    "answer": [
      "Częściowo wolne wybory w Polsce",
      "Otwarcie granicy NRD z RFN i początek burzenia muru berlińskiego",
      "Aksamitna rewolucja w Czechosłowacji",
      "Zjednoczenie Niemiec",
      "Decyzja o rozwiązaniu ZSRS"
    ],
    "explanation": "Wydarzenia następowały od czerwca 1989 r. przez listopad 1989 r. i październik 1990 r. do grudnia 1991 r.",
    "image": "r05_mur_berlinski.jpg"
  },
  {
    "id": "R05_BLO_09",
    "section": "Rozpad bloku wschodniego",
    "type": "scenario",
    "prompt": "9 listopada 1989 r. władze jednego z państw otworzyły granice z RFN, a tłumy zaczęły rozbierać mur dzielący Berlin. O jakie państwo chodzi?",
    "options": [
      "Węgry",
      "Czechosłowacja",
      "NRD",
      "Rumunia",
      "Bułgaria",
      "Polska"
    ],
    "answer": 2,
    "explanation": "Była to Niemiecka Republika Demokratyczna. Otwarcie granic uruchomiło spontaniczne burzenie muru berlińskiego.",
    "image": "r05_mur_berlinski.jpg"
  },
  {
    "id": "R05_BLO_10",
    "section": "Rozpad bloku wschodniego",
    "type": "match",
    "prompt": "Połącz państwo z charakterystycznym przebiegiem przemian.",
    "options": null,
    "left": [
      "Czechosłowacja",
      "Rumunia",
      "Węgry",
      "NRD"
    ],
    "right": [
      "otwarcie granicy z RFN i droga do zjednoczenia Niemiec",
      "demonstracje przerodziły się w walki i obalenie Nicolae Ceaușescu",
      "pokojowa aksamitna rewolucja i prezydentura Vaclava Havla",
      "kompromis komunistów z opozycją i późniejsze wolne wybory"
    ],
    "answer": {
      "Czechosłowacja": "pokojowa aksamitna rewolucja i prezydentura Vaclava Havla",
      "Rumunia": "demonstracje przerodziły się w walki i obalenie Nicolae Ceaușescu",
      "Węgry": "kompromis komunistów z opozycją i późniejsze wolne wybory",
      "NRD": "otwarcie granicy z RFN i droga do zjednoczenia Niemiec"
    },
    "explanation": "Przemiany 1989 r. miały różny przebieg: od negocjacji i pokojowych protestów po gwałtowne walki w Rumunii."
  },
  {
    "id": "R05_BLO_11",
    "section": "Rozpad bloku wschodniego",
    "type": "fill_in",
    "prompt": "Decyzję o rozwiązaniu ZSRS podjęto __________ 1991 r. podczas spotkania w __________.",
    "options": null,
    "altAnswers": [
      [
        "8 grudnia",
        "8 XII",
        "08.12"
      ],
      [
        "Puszczy Białowieskiej",
        "Puszcza Białowieska",
        "Puszczy Bialowieskiej",
        "Puszcza Bialowieska"
      ]
    ],
    "answer": [
      "8 grudnia",
      "Puszczy Białowieskiej"
    ],
    "explanation": "8 grudnia 1991 r. Borys Jelcyn oraz przedstawiciele Ukrainy i Białorusi podjęli w Puszczy Białowieskiej decyzję o rozwiązaniu ZSRS."
  },
  {
    "id": "R05_RP3_01",
    "section": "Początek III Rzeczypospolitej",
    "type": "single_choice",
    "prompt": "Kto pełnił rolę mediatora między władzami a opozycją przed obradami Okrągłego Stołu?",
    "options": [
      "Wojsko Polskie",
      "Senat",
      "NSZZ Solidarność",
      "Kościół katolicki",
      "Rada Państwa",
      "Układ Warszawski"
    ],
    "answer": 3,
    "explanation": "W rozmowach poprzedzających Okrągły Stół rolę mediatora odgrywał Kościół katolicki.",
    "image": "r05_okragly_stol.jpg"
  },
  {
    "id": "R05_RP3_02",
    "section": "Początek III Rzeczypospolitej",
    "type": "multi_select",
    "prompt": "Które ustalenia przyjęto podczas rozmów Okrągłego Stołu?",
    "options": [
      "Przywrócenie urzędu prezydenta Polski",
      "Częściowo wolne wybory do sejmu",
      "Całkowite zniesienie urzędu prezydenta",
      "Wolne wybory do senatu",
      "Ponowna legalizacja NSZZ Solidarność",
      "Natychmiastowe rozwiązanie ZSRS"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Ustalono przywrócenie urzędu prezydenta, częściowo wolne wybory do sejmu, wolne wybory do senatu, 65% miejsc sejmowych dla strony rządowej oraz ponowną legalizację Solidarności.",
    "image": "r05_okragly_stol.jpg"
  },
  {
    "id": "R05_RP3_03",
    "section": "Początek III Rzeczypospolitej",
    "type": "true_false",
    "prompt": "Wybory do senatu w czerwcu 1989 r. były częściowo wolne i obejmowały jedynie 35% mandatów.",
    "options": null,
    "answer": false,
    "explanation": "Ograniczenie dotyczyło sejmu. Wybory do przywróconego senatu były całkowicie wolne."
  },
  {
    "id": "R05_RP3_04",
    "section": "Początek III Rzeczypospolitej",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia 1989 r. w Polsce w porządku chronologicznym.",
    "options": null,
    "items": [
      "Zatwierdzenie rządu Tadeusza Mazowieckiego",
      "Przyjęcie nazwy Rzeczpospolita Polska",
      "Wybory 4 czerwca",
      "Obrady Okrągłego Stołu",
      "Wybór Wojciecha Jaruzelskiego na prezydenta PRL"
    ],
    "answer": [
      "Obrady Okrągłego Stołu",
      "Wybory 4 czerwca",
      "Wybór Wojciecha Jaruzelskiego na prezydenta PRL",
      "Zatwierdzenie rządu Tadeusza Mazowieckiego",
      "Przyjęcie nazwy Rzeczpospolita Polska"
    ],
    "explanation": "Obrady trwały od lutego do kwietnia, wybory odbyły się 4 czerwca, Jaruzelskiego wybrano 19 lipca, rząd Mazowieckiego zatwierdzono 12 września, a nazwę państwa zmieniono 29 grudnia 1989 r.",
    "image": "r05_wybory_1989.jpg"
  },
  {
    "id": "R05_RP3_05",
    "section": "Początek III Rzeczypospolitej",
    "type": "single_choice",
    "prompt": "Ile miejsc w senacie zdobyli kandydaci Komitetu Obywatelskiego Solidarność w wyborach 4 czerwca 1989 r.?",
    "options": [
      "35",
      "65",
      "89",
      "98",
      "99",
      "100"
    ],
    "answer": 4,
    "explanation": "Kandydaci Solidarności zdobyli 99 ze 100 miejsc w senacie.",
    "image": "r05_wybory_1989.jpg"
  },
  {
    "id": "R05_RP3_06",
    "section": "Początek III Rzeczypospolitej",
    "type": "riddle",
    "prompt": "Jak nazywał się klub parlamentarny utworzony przez posłów i senatorów wybranych z listy Komitetu Obywatelskiego Solidarność?",
    "options": null,
    "altAnswers": [
      "Obywatelski Klub Parlamentarny",
      "OKP"
    ],
    "answer": "Obywatelski Klub Parlamentarny",
    "explanation": "Posłowie i senatorowie strony solidarnościowej utworzyli Obywatelski Klub Parlamentarny, któremu przewodniczył Bronisław Geremek."
  },
  {
    "id": "R05_RP3_07",
    "section": "Początek III Rzeczypospolitej",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: ZSL, SD, OKP, WRON.",
    "options": null,
    "answer": "WRON",
    "explanation": "ZSL, SD i OKP uczestniczyły w układzie parlamentarnym związanym z powstaniem rządu Tadeusza Mazowieckiego. WRON była organem stanu wojennego z 1981 r."
  },
  {
    "id": "R05_RP3_08",
    "section": "Początek III Rzeczypospolitej",
    "type": "scenario",
    "prompt": "Czesław Kiszczak nie uzyskał większości potrzebnej do utworzenia rządu. Lech Wałęsa wysunął kandydaturę polityka związanego z opozycją, a sejm zatwierdził nowy gabinet 12 września 1989 r. Kto został premierem?",
    "options": [
      "Bronisław Geremek",
      "Tadeusz Mazowiecki",
      "Leszek Balcerowicz",
      "Wojciech Jaruzelski",
      "Czesław Kiszczak",
      "Krzysztof Skubiszewski"
    ],
    "answer": 1,
    "explanation": "Premierem został Tadeusz Mazowiecki, związany z opozycją solidarnościową.",
    "image": "r05_mazowiecki_expose.jpg"
  },
  {
    "id": "R05_RP3_09",
    "section": "Początek III Rzeczypospolitej",
    "type": "match",
    "prompt": "Połącz polityka z funkcją lub rolą w przemianach 1989 r.",
    "options": null,
    "left": [
      "Leszek Balcerowicz",
      "Krzysztof Skubiszewski",
      "Bronisław Geremek",
      "Tadeusz Mazowiecki"
    ],
    "right": [
      "premier",
      "minister spraw zagranicznych",
      "przewodniczący Obywatelskiego Klubu Parlamentarnego",
      "minister finansów"
    ],
    "answer": {
      "Leszek Balcerowicz": "minister finansów",
      "Krzysztof Skubiszewski": "minister spraw zagranicznych",
      "Bronisław Geremek": "przewodniczący Obywatelskiego Klubu Parlamentarnego",
      "Tadeusz Mazowiecki": "premier"
    },
    "explanation": "W rządzie Mazowieckiego Balcerowicz odpowiadał za finanse, Skubiszewski za sprawy zagraniczne, a Geremek kierował OKP."
  },
  {
    "id": "R05_RP3_10",
    "section": "Początek III Rzeczypospolitej",
    "type": "fill_in",
    "prompt": "Dnia 29 grudnia 1989 r. przyjęto historyczną nazwę państwa: __________, a w godle przywrócono __________.",
    "options": null,
    "altAnswers": [
      [
        "Rzeczpospolita Polska",
        "RP"
      ],
      [
        "orła w koronie",
        "orzel w koronie",
        "orzeł w koronie"
      ]
    ],
    "answer": [
      "Rzeczpospolita Polska",
      "orła w koronie"
    ],
    "explanation": "Pod koniec 1989 r. nazwę państwa zmieniono na Rzeczpospolita Polska i przywrócono orła w koronie.",
    "image": "r05_mazowiecki_expose.jpg"
  },
  {
    "id": "R05_RP3_11",
    "section": "Początek III Rzeczypospolitej",
    "type": "multi_select",
    "prompt": "Które zmiany wprowadzano podczas budowy III Rzeczypospolitej?",
    "options": [
      "Przyjęcie nazwy Rzeczpospolita Polska",
      "Przywrócenie orła w koronie",
      "Zmiana Milicji Obywatelskiej na policję",
      "Likwidacja cenzury",
      "Utrzymanie święta 22 lipca jako tradycyjnego święta państwowego",
      "Przywrócenie świąt 3 maja i 15 sierpnia"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      5
    ],
    "explanation": "Wprowadzono nazwę Rzeczpospolita Polska, przywrócono orła w koronie, przemianowano Milicję Obywatelską na policję, zlikwidowano cenzurę i przywrócono święta 3 maja oraz 15 sierpnia."
  },
  {
    "id": "R05_HARD_01",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz założyciela KOR z informacją, która go charakteryzuje.",
    "options": null,
    "left": [
      "Jerzy Andrzejewski",
      "Stanisław Barańczak",
      "ks. Jan Zieja",
      "Jan Józef Lipski",
      "Antoni Macierewicz"
    ],
    "right": [
      "poeta",
      "inicjator Listu 34",
      "działacz demokratyczny i niepodległościowy",
      "pisarz",
      "były kapelan AK"
    ],
    "answer": {
      "Jerzy Andrzejewski": "pisarz",
      "Stanisław Barańczak": "poeta",
      "ks. Jan Zieja": "były kapelan AK",
      "Jan Józef Lipski": "inicjator Listu 34",
      "Antoni Macierewicz": "działacz demokratyczny i niepodległościowy"
    },
    "explanation": "Założyciele KOR tworzyli 14-osobową grupę ludzi kultury oraz działaczy demokratycznych i niepodległościowych.",
    "image": "r05_kor_zebranie.jpg"
  },
  {
    "id": "R05_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jakie podwyżki cen zapowiedziano w czerwcu 1976 r. dla cukru i mięsa?",
    "options": [
      "Cukier o 69%, mięso o 100%",
      "Cukier o 100%, mięso o 69%",
      "Cukier o 50%, mięso o 25%",
      "Cukier o 25%, mięso o 50%",
      "Cukier o 80%, mięso o 40%",
      "Cukier o 120%, mięso o 90%"
    ],
    "answer": 1,
    "explanation": "Cukier miał zdrożeć o 100%, a mięso o 69%.",
    "image": "r05_radom_1976.jpg"
  },
  {
    "id": "R05_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W spotkaniach podczas pierwszej pielgrzymki Jana Pawła II do Polski w czerwcu 1979 r. uczestniczyło około __________ osób.",
    "options": null,
    "altAnswers": [
      [
        "6 mln",
        "6 milionów",
        "6 milionow",
        "6000000"
      ]
    ],
    "answer": [
      "6 mln"
    ],
    "explanation": "W spotkaniach z papieżem uczestniczyło około 6 milionów osób, co miało duże znaczenie społeczne.",
    "image": "r05_pielgrzymka_1979.jpg"
  },
  {
    "id": "R05_HARD_04",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz działacza z właściwą organizacją opozycyjną.",
    "options": null,
    "left": [
      "Zbigniew i Zofia Romaszewscy",
      "Anna Walentynowicz",
      "Leszek Moczulski",
      "Andrzej Czuma"
    ],
    "right": [
      "Konfederacja Polski Niepodległej",
      "Ruch Obrony Praw Człowieka i Obywatela",
      "Wolne Związki Zawodowe",
      "Komitet Samoobrony Społecznej KOR"
    ],
    "answer": {
      "Zbigniew i Zofia Romaszewscy": "Komitet Samoobrony Społecznej KOR",
      "Anna Walentynowicz": "Wolne Związki Zawodowe",
      "Leszek Moczulski": "Konfederacja Polski Niepodległej",
      "Andrzej Czuma": "Ruch Obrony Praw Człowieka i Obywatela"
    },
    "explanation": "Romaszewscy działali w KSS KOR, Walentynowicz w WZZ, Moczulski kierował KPN, a Czuma współtworzył ROPCiO."
  },
  {
    "id": "R05_HARD_05",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia rozwoju opozycji w latach 1976-1979 w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Powstanie Wolnych Związków Zawodowych",
      "Powstanie KOR",
      "Powstanie Konfederacji Polski Niepodległej",
      "Powstanie KSS KOR i ROPCiO"
    ],
    "answer": [
      "Powstanie KOR",
      "Powstanie KSS KOR i ROPCiO",
      "Powstanie Wolnych Związków Zawodowych",
      "Powstanie Konfederacji Polski Niepodległej"
    ],
    "explanation": "KOR powstał w 1976 r., KSS KOR i ROPCiO w 1977 r., WZZ w 1978 r., a KPN w 1979 r."
  },
  {
    "id": "R05_HARD_06",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W którym roku tablice z 21 postulatami MKS wpisano na listę programu UNESCO Pamięć świata?",
    "options": [
      "1980",
      "1989",
      "1991",
      "2003",
      "2010",
      "2014"
    ],
    "answer": 3,
    "explanation": "Drewniane tablice z 21 postulatami zostały wpisane na listę programu UNESCO Pamięć świata w 2003 r.",
    "image": "r05_21_postulatow.jpg"
  },
  {
    "id": "R05_HARD_07",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Do NSZZ Solidarność wstąpiło prawie __________ Polaków, a okres legalnego działania związku trwał ponad __________ miesięcy.",
    "options": null,
    "altAnswers": [
      [
        "10 mln",
        "10 milionów",
        "10 milionow",
        "10000000"
      ],
      [
        "15",
        "piętnaście",
        "pietnascie"
      ]
    ],
    "answer": [
      "10 mln",
      "15"
    ],
    "explanation": "Solidarność szybko stała się masową organizacją liczącą prawie 10 milionów członków. Legalnie działała ponad 15 miesięcy.",
    "image": "r05_zjazd_solidarnosci.jpg"
  },
  {
    "id": "R05_HARD_08",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które informacje dotyczą I Zjazdu Delegatów NSZZ Solidarność jesienią 1981 r.?",
    "options": [
      "Odbył się w Gdańsku",
      "Rozwiązał NSZZ Solidarność",
      "Domagał się reform gospodarczych i demokratyzacji",
      "Wybrał Lecha Wałęsę na przewodniczącego",
      "Powołał WRON",
      "Skierował posłanie do ludzi pracy Europy Wschodniej"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Zjazd odbył się w Gdańsku. Uchwalono program reform gospodarczych i demokratyzacji państwa, wybrano Lecha Wałęsę na przewodniczącego oraz skierowano posłanie do ludzi pracy Europy Wschodniej."
  },
  {
    "id": "R05_HARD_09",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile ośrodków odosobnienia działało w 1982 r., gdy internowano blisko 10 tys. osób?",
    "options": [
      "23",
      "40",
      "52",
      "56",
      "70",
      "100"
    ],
    "answer": 2,
    "explanation": "W 1982 r. internowanych przetrzymywano w 52 ośrodkach odosobnienia."
  },
  {
    "id": "R05_HARD_10",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W czasie stanu wojennego użyto około __________ żołnierzy oraz __________ milicjantów.",
    "options": null,
    "altAnswers": [
      [
        "70 tys.",
        "70 tys",
        "70000",
        "70 tysięcy",
        "70 tysiecy"
      ],
      [
        "30 tys.",
        "30 tys",
        "30000",
        "30 tysięcy",
        "30 tysiecy"
      ]
    ],
    "answer": [
      "70 tys.",
      "30 tys."
    ],
    "explanation": "Infografika podaje około 70 tysięcy żołnierzy i 30 tysięcy milicjantów użytych podczas stanu wojennego.",
    "image": "r05_stan_wojenny_ulica.jpg"
  },
  {
    "id": "R05_HARD_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jak nazywała się najliczniejsza akcja Pomarańczowej Alternatywy, przeprowadzona 1 czerwca 1988 r. we Wrocławiu?",
    "options": [
      "Bicie piany",
      "Pomóż milicji",
      "Galopująca inflacja",
      "Precz z pałami",
      "Rewolucja krasnali",
      "Wiążemy nić porozumienia"
    ],
    "answer": 4,
    "explanation": "Najliczniejszą akcją był marsz krasnoludków nazywany Rewolucją krasnali.",
    "image": "r05_pomaranczowa_alternatywa.jpg"
  },
  {
    "id": "R05_HARD_12",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz państwo z wydarzeniem Jesieni Ludów lub jej następstwem.",
    "options": null,
    "left": [
      "Czechosłowacja",
      "Rumunia",
      "NRD",
      "Bułgaria"
    ],
    "right": [
      "otwarcie granicy z RFN 9 listopada 1989 r.",
      "pierwsze wolne wybory wygrała partia byłych działaczy komunistycznych",
      "aksamitna rewolucja",
      "obalenie i rozstrzelanie Nicolae Ceaușescu"
    ],
    "answer": {
      "Czechosłowacja": "aksamitna rewolucja",
      "Rumunia": "obalenie i rozstrzelanie Nicolae Ceaușescu",
      "NRD": "otwarcie granicy z RFN 9 listopada 1989 r.",
      "Bułgaria": "pierwsze wolne wybory wygrała partia byłych działaczy komunistycznych"
    },
    "explanation": "W państwach bloku wschodniego przemiany przebiegały odmiennie: pokojowo, negocjacyjnie lub gwałtownie."
  },
  {
    "id": "R05_HARD_13",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia prowadzące do końca bloku wschodniego i ZSRS w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Pucz Janajewa",
      "Katastrofa w Czarnobylu",
      "Decyzja o rozwiązaniu ZSRS",
      "Litwa ogłasza niepodległość",
      "Jesień Ludów"
    ],
    "answer": [
      "Katastrofa w Czarnobylu",
      "Jesień Ludów",
      "Litwa ogłasza niepodległość",
      "Pucz Janajewa",
      "Decyzja o rozwiązaniu ZSRS"
    ],
    "explanation": "Kolejność to: 26 kwietnia 1986 r., 1989 r., 11 marca 1990 r., sierpień 1991 r. i 8 grudnia 1991 r."
  },
  {
    "id": "R05_HARD_14",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które liczby i ustalenia poprawnie opisują wybory oraz porozumienia z 1989 r.?",
    "options": [
      "65% miejsc w sejmie zagwarantowano stronie rządowej",
      "65% miejsc w senacie zagwarantowano stronie rządowej",
      "Solidarność mogła zdobyć maksymalnie 35% miejsc w sejmie",
      "Solidarność zdobyła 99 ze 100 miejsc w senacie",
      "Frekwencja wyniosła 35%",
      "Frekwencja wyniosła 62%"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Strona rządowa miała zagwarantowane 65% miejsc w sejmie, Solidarność mogła zdobyć maksymalnie 35% mandatów sejmowych, zdobyła 99 ze 100 miejsc w senacie, a frekwencja wyniosła 62%.",
    "image": "r05_wybory_1989.jpg"
  },
  {
    "id": "R05_HARD_15",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz określenie z opisem jego znaczenia lub interpretacji w sporze wokół exposé Tadeusza Mazowieckiego.",
    "options": null,
    "left": [
      "gruba linia",
      "gruba kreska"
    ],
    "right": [
      "określenie używane przez krytyków jako symbol braku woli rozliczenia wykroczeń i zbrodni władz komunistycznych",
      "sformułowanie Mazowieckiego o odpowiedzialności nowego rządu za własne działania, a nie za odziedziczony stan gospodarki"
    ],
    "answer": {
      "gruba linia": "sformułowanie Mazowieckiego o odpowiedzialności nowego rządu za własne działania, a nie za odziedziczony stan gospodarki",
      "gruba kreska": "określenie używane przez krytyków jako symbol braku woli rozliczenia wykroczeń i zbrodni władz komunistycznych"
    },
    "explanation": "Oryginalne sformułowanie gruba linia i późniejsze określenie gruba kreska odnoszą się do dwóch odmiennych sposobów rozumienia wypowiedzi Tadeusza Mazowieckiego.",
    "image": "r05_mazowiecki_expose.jpg"
  }
];

const KID_PROMPTS = {};

const chapter = {
  "id": "r05",
  "number": 5,
  "title": "Upadek komunizmu",
  "icon": "🕊️",
  "sectionOrder": [
    "Początki opozycji demokratycznej w Polsce",
    "Powstanie Solidarności",
    "Stan wojenny w Polsce",
    "Rozpad bloku wschodniego",
    "Początek III Rzeczypospolitej"
  ],
  "sectionIcons": {
    "Początki opozycji demokratycznej w Polsce": "🗞️",
    "Powstanie Solidarności": "✊",
    "Stan wojenny w Polsce": "🚧",
    "Rozpad bloku wschodniego": "🌍",
    "Początek III Rzeczypospolitej": "🗳️"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
