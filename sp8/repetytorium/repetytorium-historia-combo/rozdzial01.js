// Skróty sekcji (do identyfikatorów ćwiczeń):
//   CHRO = Chronologia i mierzenie czasu
//   ZROD = Historia i źródła historyczne
//   SYMB = Polska, naród i symbole
//   DAWN = Wybitni Polacy do XVII wieku
//   NIEP = Walka o niepodległość
//   NOWE = Wybitni Polacy XX i XXI wieku
//   HARD = Super trudne
const ALL_EXERCISES = [
  {
    "id": "R01_CHRO_01",
    "section": "Chronologia i mierzenie czasu",
    "type": "single_choice",
    "prompt": "Jak nazywa się nauka zajmująca się mierzeniem czasu i ustalaniem kolejności wydarzeń?",
    "options": [
      "Historiografia",
      "Chronologia",
      "Astronomia",
      "Geografia",
      "Genealogia",
      "Archeologia"
    ],
    "answer": 1,
    "image": "r01_os_czasu.jpg",
    "explanation": "Chronologia pozwala mierzyć upływ czasu i ustalać następstwo wydarzeń."
  },
  {
    "id": "R01_CHRO_02",
    "section": "Chronologia i mierzenie czasu",
    "type": "multi_select",
    "prompt": "Zaznacz wydarzenia uznawane za granice epok historycznych.",
    "options": [
      "Wynalezienie pisma około 3500 r. p.n.e.",
      "Upadek Rzymu w 476 r.",
      "Chrzest Polski w 966 r.",
      "Odkrycie Ameryki w 1492 r.",
      "Koronacja Bolesława Chrobrego w 1025 r.",
      "Zakończenie I wojny światowej w 1918 r."
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "explanation": "Wynalezienie pisma, upadek Rzymu, odkrycie Ameryki i zakończenie I wojny światowej to umowne granice epok historycznych."
  },
  {
    "id": "R01_CHRO_03",
    "section": "Chronologia i mierzenie czasu",
    "type": "true_false",
    "prompt": "Rok 2001 rozpoczął XXI wiek.",
    "options": null,
    "answer": true,
    "explanation": "XX wiek skończył się w 2000 roku, a XXI rozpoczął się w 2001 roku."
  },
  {
    "id": "R01_CHRO_04",
    "section": "Chronologia i mierzenie czasu",
    "type": "fill_in",
    "prompt": "Chrzest Polski odbył się w roku __________, czyli w wieku __________.",
    "options": null,
    "answer": [
      "966",
      "X"
    ],
    "altAnswers": [
      [
        "966",
        "966 r."
      ],
      [
        "X",
        "10",
        "X wiek",
        "10 wiek"
      ]
    ],
    "explanation": "Rok 966 należy do X wieku naszej ery."
  },
  {
    "id": "R01_CHRO_05",
    "section": "Chronologia i mierzenie czasu",
    "type": "riddle",
    "prompt": "Jak nazywa się okres obejmujący dokładnie 1000 lat?",
    "options": null,
    "answer": "tysiąclecie",
    "altAnswers": [
      "tysiąclecie",
      "tysiaclecie"
    ],
    "explanation": "Tysiąclecie liczy 1000 lat; wiek liczy 100 lat."
  },
  {
    "id": "R01_CHRO_06",
    "section": "Chronologia i mierzenie czasu",
    "type": "odd_one_out",
    "prompt": "Wskaż przedmiot służący do mierzenia czasu inaczej niż pozostałe: zegar słoneczny, klepsydra, zegar świecowy, kalendarz.",
    "options": null,
    "answer": "kalendarz",
    "explanation": "Kalendarz służy do odmierzania czasu w ciągu roku; wymienione zegary odmierzają czas w ciągu doby."
  },
  {
    "id": "R01_CHRO_07",
    "section": "Chronologia i mierzenie czasu",
    "type": "scenario",
    "prompt": "Na karcie muzealnej widzisz rok 1385, w którym podpisano unię krewską. Do którego wieku należy ta data?",
    "options": [
      "XIII wiek",
      "XIV wiek",
      "XV wiek",
      "XVI wiek",
      "XII wiek",
      "XVII wiek"
    ],
    "answer": 1,
    "explanation": "Lata 1301-1400 należą do XIV wieku, a więc rok 1385 również."
  },
  {
    "id": "R01_CHRO_08",
    "section": "Chronologia i mierzenie czasu",
    "type": "match",
    "prompt": "Połącz rok wydarzenia z odpowiednim wiekiem.",
    "options": null,
    "left": [
      "Chrzest Polski (966)",
      "Koronacja Bolesława Chrobrego (1025)",
      "Odkrycie Ameryki (1492)",
      "Śmierć Jana Pawła II (2005)"
    ],
    "right": [
      "XXI wiek",
      "XV wiek",
      "X wiek",
      "XI wiek"
    ],
    "answer": {
      "Chrzest Polski (966)": "X wiek",
      "Koronacja Bolesława Chrobrego (1025)": "XI wiek",
      "Odkrycie Ameryki (1492)": "XV wiek",
      "Śmierć Jana Pawła II (2005)": "XXI wiek"
    },
    "explanation": "966 rok należy do X wieku, 1025 do XI, 1492 do XV, a 2005 do XXI wieku."
  },
  {
    "id": "R01_CHRO_09",
    "section": "Chronologia i mierzenie czasu",
    "type": "sort",
    "prompt": "Przyporządkuj wydarzenia do ery, w której miały miejsce.",
    "options": null,
    "items": [
      "Odkrycie Ameryki",
      "Budowa pierwszej piramidy w Egipcie",
      "Chrzest Polski",
      "Założenie Rzymu"
    ],
    "categories": [
      "przed naszą erą",
      "nasza era"
    ],
    "answer": {
      "przed naszą erą": [
        "Założenie Rzymu",
        "Budowa pierwszej piramidy w Egipcie"
      ],
      "nasza era": [
        "Chrzest Polski",
        "Odkrycie Ameryki"
      ]
    },
    "explanation": "Rzym założono w 753 r. p.n.e., a pierwszą piramidę zbudowano około 2600 r. p.n.e.; chrzest Polski i odkrycie Ameryki nastąpiły w naszej erze."
  },
  {
    "id": "R01_CHRO_10",
    "section": "Chronologia i mierzenie czasu",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia wyznaczające granice epok od najstarszego do najnowszego.",
    "options": null,
    "items": [
      "Odkrycie Ameryki",
      "Zakończenie I wojny światowej",
      "Wynalezienie pisma",
      "Upadek Rzymu"
    ],
    "answer": [
      "Wynalezienie pisma",
      "Upadek Rzymu",
      "Odkrycie Ameryki",
      "Zakończenie I wojny światowej"
    ],
    "image": "r01_os_czasu.jpg",
    "explanation": "Wynalezienie pisma datuje się na około 3500 r. p.n.e., upadek Rzymu na 476 r., odkrycie Ameryki na 1492 r., a koniec I wojny światowej na 1918 r."
  },
  {
    "id": "R01_ZROD_01",
    "section": "Historia i źródła historyczne",
    "type": "single_choice",
    "prompt": "Kto jest uznawany za pierwszego polskiego historyka?",
    "options": [
      "Herodot",
      "Janusz Tazbir",
      "Jan Długosz",
      "Norman Davies",
      "Aleksander Gieysztor",
      "Jan Zamoyski"
    ],
    "answer": 2,
    "explanation": "Jan Długosz pisał kronikę dziejów Polski aż do swojej śmierci w 1480 roku."
  },
  {
    "id": "R01_ZROD_02",
    "section": "Historia i źródła historyczne",
    "type": "multi_select",
    "prompt": "Które z poniższych obiektów są źródłami pisanymi?",
    "options": [
      "List",
      "Moneta",
      "Kronika",
      "Mapa",
      "Mundurek szkolny",
      "Pamiętnik"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "image": "r01_zrodla_historyczne.jpg",
    "explanation": "Listy, kroniki, mapy i pamiętniki należą do źródeł pisanych; monety oraz stroje to źródła niepisane."
  },
  {
    "id": "R01_ZROD_03",
    "section": "Historia i źródła historyczne",
    "type": "true_false",
    "prompt": "Fotografie zalicza się do źródeł niepisanych.",
    "options": null,
    "answer": true,
    "explanation": "Fotografie, budowle, przedmioty i przekazy ustne zalicza się do źródeł niepisanych."
  },
  {
    "id": "R01_ZROD_04",
    "section": "Historia i źródła historyczne",
    "type": "fill_in",
    "prompt": "Opisy dziejów powstające w wyniku badań historyków to __________.",
    "options": null,
    "answer": [
      "historiografia"
    ],
    "altAnswers": [
      [
        "historiografia",
        "historiografię"
      ]
    ],
    "explanation": "Historiografia to piśmiennictwo historyczne powstające w wyniku badań nad przeszłością."
  },
  {
    "id": "R01_ZROD_05",
    "section": "Historia i źródła historyczne",
    "type": "odd_one_out",
    "prompt": "Wskaż przykład, który nie jest źródłem niepisanym: moneta, broń, fotografia, pamiętnik.",
    "options": null,
    "answer": "pamiętnik",
    "explanation": "Pamiętnik jest źródłem pisanym, a moneta, broń i fotografia należą do źródeł niepisanych."
  },
  {
    "id": "R01_ZROD_06",
    "section": "Historia i źródła historyczne",
    "type": "scenario",
    "prompt": "Historyk bada dawne szkolnictwo. Odnalazł dziennik lekcyjny oraz ławkę szkolną. Który z tych przedmiotów jest źródłem pisanym?",
    "options": [
      "Dziennik lekcyjny",
      "Ławka szkolna",
      "Szkolny mundurek",
      "Dawne liczydło",
      "Kałamarz",
      "Tarcza szkolna"
    ],
    "answer": 0,
    "image": "r01_zrodla_historyczne.jpg",
    "explanation": "Dziennik lekcyjny zawiera zapisy i należy do źródeł pisanych. Ławka szkolna to źródło niepisane."
  },
  {
    "id": "R01_ZROD_07",
    "section": "Historia i źródła historyczne",
    "type": "match",
    "prompt": "Połącz historyka z odpowiednią informacją o jego działalności.",
    "options": null,
    "left": [
      "Herodot",
      "Jan Długosz",
      "Janusz Tazbir",
      "Norman Davies"
    ],
    "right": [
      "Angielski badacz historii Polski",
      "Polski historyk zmarły w 2016 roku",
      "Uznawany za twórcę nauki historii",
      "Autor kroniki dziejów Polski"
    ],
    "answer": {
      "Herodot": "Uznawany za twórcę nauki historii",
      "Jan Długosz": "Autor kroniki dziejów Polski",
      "Janusz Tazbir": "Polski historyk zmarły w 2016 roku",
      "Norman Davies": "Angielski badacz historii Polski"
    },
    "explanation": "Herodot, Jan Długosz, Janusz Tazbir i Norman Davies zajmowali się badaniem i opisywaniem przeszłości."
  },
  {
    "id": "R01_ZROD_08",
    "section": "Historia i źródła historyczne",
    "type": "sort",
    "prompt": "Podziel przedmioty na źródła pisane oraz niepisane.",
    "options": null,
    "items": [
      "Mundurek",
      "Kronika",
      "Moneta",
      "Dziennik lekcyjny",
      "Naczynie",
      "List"
    ],
    "categories": [
      "źródła pisane",
      "źródła niepisane"
    ],
    "answer": {
      "źródła pisane": [
        "List",
        "Kronika",
        "Dziennik lekcyjny"
      ],
      "źródła niepisane": [
        "Moneta",
        "Mundurek",
        "Naczynie"
      ]
    },
    "explanation": "Listy, kroniki i dzienniki należą do źródeł pisanych; monety, stroje oraz naczynia do niepisanych."
  },
  {
    "id": "R01_SYMB_01",
    "section": "Polska, naród i symbole",
    "type": "single_choice",
    "prompt": "Jaka jest pełna oficjalna nazwa państwa polskiego?",
    "options": [
      "Rzeczpospolita Polska",
      "Królestwo Polskie",
      "Księstwo Polskie",
      "Rzeczpospolita Obojga Narodów",
      "Polskie Państwo Podziemne",
      "Polonia"
    ],
    "answer": 0,
    "explanation": "Polska nosi oficjalną nazwę Rzeczpospolita Polska."
  },
  {
    "id": "R01_SYMB_02",
    "section": "Polska, naród i symbole",
    "type": "multi_select",
    "prompt": "Które elementy łączą Polaków we wspólnotę narodową?",
    "options": [
      "Wspólna historia",
      "Język",
      "Kolor włosów",
      "Tradycja",
      "Kultura",
      "Wzrost"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Wspólna historia, język, tradycja i kultura tworzą więź narodową; kolor włosów ani wzrost nie są takimi cechami."
  },
  {
    "id": "R01_SYMB_03",
    "section": "Polska, naród i symbole",
    "type": "true_false",
    "prompt": "Osoba należąca do innego narodu może uzyskać polskie obywatelstwo po spełnieniu warunków określonych prawem.",
    "options": null,
    "answer": true,
    "explanation": "Narodowość i obywatelstwo to różne pojęcia; osoba innej narodowości może uzyskać polskie obywatelstwo."
  },
  {
    "id": "R01_SYMB_04",
    "section": "Polska, naród i symbole",
    "type": "fill_in",
    "prompt": "Polaków mieszkających na stałe poza granicami Polski nazywamy __________.",
    "options": null,
    "answer": [
      "Polonią"
    ],
    "altAnswers": [
      [
        "Polonią",
        "Polonia",
        "Polonię"
      ]
    ],
    "explanation": "Polonia to społeczność Polaków mieszkających na stałe poza granicami Polski."
  },
  {
    "id": "R01_SYMB_05",
    "section": "Polska, naród i symbole",
    "type": "riddle",
    "prompt": "Jak nazywa się polska pieśń patriotyczna z 1797 roku, która jest hymnem narodowym?",
    "options": null,
    "answer": "Mazurek Dąbrowskiego",
    "altAnswers": [
      "Mazurek Dąbrowskiego",
      "Mazurek Dabrowskiego"
    ],
    "explanation": "Mazurek Dąbrowskiego powstał w 1797 roku i jest hymnem Polski."
  },
  {
    "id": "R01_SYMB_06",
    "section": "Polska, naród i symbole",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest polskim symbolem narodowym: orzeł biały, biało-czerwone barwy, Mazurek Dąbrowskiego, klepsydra.",
    "options": null,
    "answer": "klepsydra",
    "explanation": "Polskimi symbolami narodowymi są godło z białym orłem, biało-czerwone barwy oraz hymn Mazurek Dąbrowskiego."
  },
  {
    "id": "R01_SYMB_07",
    "section": "Polska, naród i symbole",
    "type": "scenario",
    "prompt": "Mieszkaniec Polski wyjeżdża na stałe do Wielkiej Brytanii. Jak określa się osobę, która opuszcza ojczyznę, aby zamieszkać w innym kraju?",
    "options": [
      "Imigrant",
      "Emigrant",
      "Historyk",
      "Kronikarz",
      "Rodak",
      "Obywatel Polski"
    ],
    "answer": 1,
    "explanation": "Emigrant to człowiek wyjeżdżający na stałe lub na dłuższy czas ze swojej ojczyzny."
  },
  {
    "id": "R01_SYMB_08",
    "section": "Polska, naród i symbole",
    "type": "match",
    "prompt": "Połącz nazwę symbolu z jego opisem.",
    "options": null,
    "left": [
      "Godło",
      "Flaga",
      "Hymn"
    ],
    "right": [
      "Mazurek Dąbrowskiego",
      "Biały orzeł w koronie na czerwonej tarczy",
      "Dwa poziome pasy: biały i czerwony"
    ],
    "answer": {
      "Godło": "Biały orzeł w koronie na czerwonej tarczy",
      "Flaga": "Dwa poziome pasy: biały i czerwony",
      "Hymn": "Mazurek Dąbrowskiego"
    },
    "explanation": "Godłem jest biały orzeł w koronie, flaga ma barwy biało-czerwone, a hymn to Mazurek Dąbrowskiego."
  },
  {
    "id": "R01_SYMB_09",
    "section": "Polska, naród i symbole",
    "type": "sort",
    "prompt": "Rozpoznaj emigrację i imigrację z punktu widzenia Polski.",
    "options": null,
    "items": [
      "Osoba pochodzenia czeczeńskiego przeprowadza się do Polski",
      "Polska rodzina osiedla się w Wielkiej Brytanii",
      "Polak przenosi się na stałe do USA",
      "Rodzina ukraińska osiedla się w Polsce"
    ],
    "categories": [
      "emigracja z Polski",
      "imigracja do Polski"
    ],
    "answer": {
      "emigracja z Polski": [
        "Polak przenosi się na stałe do USA",
        "Polska rodzina osiedla się w Wielkiej Brytanii"
      ],
      "imigracja do Polski": [
        "Rodzina ukraińska osiedla się w Polsce",
        "Osoba pochodzenia czeczeńskiego przeprowadza się do Polski"
      ]
    },
    "explanation": "Emigracja oznacza wyjazd z ojczyzny, a imigracja przyjazd i osiedlenie się w innym kraju."
  },
  {
    "id": "R01_SYMB_10",
    "section": "Polska, naród i symbole",
    "type": "true_false",
    "prompt": "Obecny wygląd godła Polski ustanowiono w 1927 roku.",
    "options": null,
    "answer": true,
    "explanation": "Biały orzeł w złotej koronie na czerwonym tle w opisanym kształcie został ustanowiony w 1927 roku."
  },
  {
    "id": "R01_DAWN_01",
    "section": "Wybitni Polacy do XVII wieku",
    "type": "single_choice",
    "prompt": "Który władca przyjął chrzest w 966 roku i zapoczątkował rządy Piastów?",
    "options": [
      "Bolesław Chrobry",
      "Kazimierz Wielki",
      "Mieszko I",
      "Władysław Jagiełło",
      "Jan III Sobieski",
      "Stefan Batory"
    ],
    "answer": 2,
    "image": "r01_grod_piastowski.jpg",
    "explanation": "Mieszko I przyjął chrzest w 966 roku i był pierwszym historycznym władcą Polski."
  },
  {
    "id": "R01_DAWN_02",
    "section": "Wybitni Polacy do XVII wieku",
    "type": "multi_select",
    "prompt": "Zaznacz osiągnięcia i cechy Kazimierza Wielkiego.",
    "options": [
      "Budował warowne zamki",
      "Utworzył Legiony Polskie we Włoszech",
      "Założył Akademię Krakowską",
      "Był ostatnim królem z dynastii Piastów",
      "Dowodził pod Wiedniem",
      "Przyłączył do Polski wiele ziem"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Kazimierz Wielki budował zamki, w 1364 roku założył Akademię Krakowską, rozszerzał ziemie Polski i był ostatnim królem z dynastii Piastów."
  },
  {
    "id": "R01_DAWN_03",
    "section": "Wybitni Polacy do XVII wieku",
    "type": "true_false",
    "prompt": "Jadwigę Andegaweńską koronowano na króla Polski w 1384 roku.",
    "options": null,
    "answer": true,
    "explanation": "Jadwiga była pierwszą kobietą sprawującą władzę królewską w Polsce; w 1384 roku koronowano ją na króla."
  },
  {
    "id": "R01_DAWN_04",
    "section": "Wybitni Polacy do XVII wieku",
    "type": "fill_in",
    "prompt": "Bolesław Chrobry został koronowany na króla Polski w roku __________.",
    "options": null,
    "answer": [
      "1025"
    ],
    "altAnswers": [
      [
        "1025",
        "1025 r."
      ]
    ],
    "explanation": "Syn Mieszka I został pierwszym koronowanym królem Polski w 1025 roku."
  },
  {
    "id": "R01_DAWN_05",
    "section": "Wybitni Polacy do XVII wieku",
    "type": "riddle",
    "prompt": "Jak nazywała się dynastia władców Polski zapoczątkowana przez Mieszka I?",
    "options": null,
    "answer": "Piastów",
    "altAnswers": [
      "Piastów",
      "Piastowie",
      "Piastów dynastia"
    ],
    "explanation": "Mieszko I pochodził z rodu Piastów i zapoczątkował panowanie tej dynastii."
  },
  {
    "id": "R01_DAWN_06",
    "section": "Wybitni Polacy do XVII wieku",
    "type": "odd_one_out",
    "prompt": "Która z postaci nie była władcą Polski: Bolesław Chrobry, Kazimierz Wielki, Jadwiga Andegaweńska, Mikołaj Kopernik.",
    "options": null,
    "answer": "Mikołaj Kopernik",
    "explanation": "Kopernik był astronomem; pozostałe osoby sprawowały władzę w Polsce."
  },
  {
    "id": "R01_DAWN_07",
    "section": "Wybitni Polacy do XVII wieku",
    "type": "scenario",
    "prompt": "W 1364 roku w Krakowie powstaje pierwsza wyższa uczelnia na ziemiach polskich. Który polski władca ją założył?",
    "options": [
      "Kazimierz Wielki",
      "Mieszko I",
      "Bolesław Chrobry",
      "Władysław Jagiełło",
      "Stefan Batory",
      "Jan III Sobieski"
    ],
    "answer": 0,
    "image": "r01_sredniowieczny_uniwersytet.jpg",
    "explanation": "Akademia Krakowska została założona przez Kazimierza Wielkiego w 1364 roku."
  },
  {
    "id": "R01_DAWN_08",
    "section": "Wybitni Polacy do XVII wieku",
    "type": "match",
    "prompt": "Połącz postać z jej dokonaniem.",
    "options": null,
    "left": [
      "Mieszko I",
      "Bolesław Chrobry",
      "Jadwiga Andegaweńska",
      "Jan Zamoyski"
    ],
    "right": [
      "Małżeństwo z Władysławem Jagiełłą w 1386 roku",
      "Założenie Akademii Zamojskiej w 1595 roku",
      "Przyjęcie chrztu w 966 roku",
      "Pierwsza koronacja królewska w 1025 roku"
    ],
    "answer": {
      "Mieszko I": "Przyjęcie chrztu w 966 roku",
      "Bolesław Chrobry": "Pierwsza koronacja królewska w 1025 roku",
      "Jadwiga Andegaweńska": "Małżeństwo z Władysławem Jagiełłą w 1386 roku",
      "Jan Zamoyski": "Założenie Akademii Zamojskiej w 1595 roku"
    },
    "explanation": "Wydarzenia związane są kolejno z Mieszkiem I, Bolesławem Chrobrym, Jadwigą i Janem Zamoyskim."
  },
  {
    "id": "R01_DAWN_09",
    "section": "Wybitni Polacy do XVII wieku",
    "type": "sort",
    "prompt": "Przydziel postacie do ról, z których są znane.",
    "options": null,
    "items": [
      "Mikołaj Kopernik",
      "Stefan Czarniecki",
      "Jadwiga Andegaweńska",
      "Kazimierz Wielki",
      "Jan Zamoyski",
      "Bolesław Chrobry",
      "Mieszko I"
    ],
    "categories": [
      "władcy Polski",
      "astronomowie",
      "hetmani"
    ],
    "answer": {
      "władcy Polski": [
        "Mieszko I",
        "Bolesław Chrobry",
        "Kazimierz Wielki",
        "Jadwiga Andegaweńska"
      ],
      "astronomowie": [
        "Mikołaj Kopernik"
      ],
      "hetmani": [
        "Jan Zamoyski",
        "Stefan Czarniecki"
      ]
    },
    "explanation": "Mieszko, Bolesław, Kazimierz i Jadwiga byli władcami; Kopernik astronomem; Zamoyski i Czarniecki hetmanami."
  },
  {
    "id": "R01_DAWN_10",
    "section": "Wybitni Polacy do XVII wieku",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w kolejności od najstarszego.",
    "options": null,
    "items": [
      "Koronacja Jadwigi Andegaweńskiej",
      "Publikacja odkrycia Kopernika",
      "Chrzest Mieszka I",
      "Założenie Akademii Krakowskiej",
      "Koronacja Bolesława Chrobrego"
    ],
    "answer": [
      "Chrzest Mieszka I",
      "Koronacja Bolesława Chrobrego",
      "Założenie Akademii Krakowskiej",
      "Koronacja Jadwigi Andegaweńskiej",
      "Publikacja odkrycia Kopernika"
    ],
    "explanation": "Daty wydarzeń to odpowiednio 966, 1025, 1364, 1384 i 1543 rok."
  },
  {
    "id": "R01_DAWN_11",
    "section": "Wybitni Polacy do XVII wieku",
    "type": "single_choice",
    "prompt": "Jakie odkrycie astronomiczne przedstawił Mikołaj Kopernik?",
    "options": [
      "Wszystkie planety krążą wokół Ziemi",
      "Słońce krąży wokół nieruchomej Ziemi",
      "Księżyc jest jedynym ciałem niebieskim",
      "Ziemia i inne planety krążą wokół Słońca",
      "Wszystkie gwiazdy krążą wokół Księżyca",
      "Ziemia znajduje się poza Układem Słonecznym"
    ],
    "answer": 3,
    "image": "r01_pracownia_astronoma.jpg",
    "explanation": "Kopernik ustalił, że Ziemia i inne planety krążą wokół Słońca, a nie odwrotnie."
  },
  {
    "id": "R01_DAWN_12",
    "section": "Wybitni Polacy do XVII wieku",
    "type": "multi_select",
    "prompt": "Jakie zadania i funkcje pełnił Jan Zamoyski?",
    "options": [
      "Sekretarz Zygmunta Augusta",
      "Doradca Stefana Batorego",
      "Papież",
      "Hetman wielki koronny",
      "Założyciel Akademii Zamojskiej",
      "Król Polski"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Zamoyski był sekretarzem Zygmunta Augusta, doradcą Stefana Batorego, hetmanem wielkim koronnym i założycielem Akademii Zamojskiej."
  },
  {
    "id": "R01_DAWN_13",
    "section": "Wybitni Polacy do XVII wieku",
    "type": "scenario",
    "prompt": "Podczas wojny ze Szwecją dowódca unika walki z główną armią przeciwnika, atakuje za to mniejsze oddziały i tabory. Jak nazywa się taka taktyka?",
    "options": [
      "Walka oblężnicza",
      "Wojna podjazdowa",
      "Bitwa morska",
      "Wojna pozycyjna",
      "Pokojowe pertraktacje",
      "Blokada portowa"
    ],
    "answer": 1,
    "image": "r01_kawaleria_xvii_wiek.jpg",
    "explanation": "Stefan Czarniecki stosował w walce ze Szwedami wojnę podjazdową, uderzając na mniejsze siły."
  },
  {
    "id": "R01_NIEP_01",
    "section": "Walka o niepodległość",
    "type": "single_choice",
    "prompt": "Kto dowodził zwycięskimi wojskami polskimi pod Wiedniem w 1683 roku?",
    "options": [
      "Stefan Czarniecki",
      "Jan Zamoyski",
      "Tadeusz Kościuszko",
      "Jan Henryk Dąbrowski",
      "Jan III Sobieski",
      "Romuald Traugutt"
    ],
    "answer": 4,
    "image": "r01_odsiecz_wiedenska.jpg",
    "explanation": "Jan III Sobieski pokonał Turków pod Wiedniem w 1683 roku."
  },
  {
    "id": "R01_NIEP_02",
    "section": "Walka o niepodległość",
    "type": "multi_select",
    "prompt": "Które informacje o Tadeuszu Kościuszce są prawdziwe?",
    "options": [
      "Uczestniczył w wojnie o niepodległość Stanów Zjednoczonych",
      "Został odznaczony orderem Virtuti Militari",
      "Został królem Polski",
      "Stanął na czele powstania w 1794 roku",
      "Utworzył Akademię Zamojską",
      "Zmarł na emigracji w Szwajcarii"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "image": "r01_fortyfikacje_kosciuszki.jpg",
    "explanation": "Kościuszko walczył o niepodległość USA, otrzymał Virtuti Militari, dowodził powstaniem w 1794 roku i zmarł w Szwajcarii."
  },
  {
    "id": "R01_NIEP_03",
    "section": "Walka o niepodległość",
    "type": "true_false",
    "prompt": "Jan Henryk Dąbrowski utworzył Legiony Polskie we Włoszech w 1797 roku.",
    "options": null,
    "answer": true,
    "explanation": "Dąbrowski zorganizował Legiony Polskie we Włoszech w porozumieniu z Napoleonem Bonaparte."
  },
  {
    "id": "R01_NIEP_04",
    "section": "Walka o niepodległość",
    "type": "fill_in",
    "prompt": "Powstanie nazwane insurekcją kościuszkowską rozpoczęło się w roku __________.",
    "options": null,
    "answer": [
      "1794"
    ],
    "altAnswers": [
      [
        "1794",
        "1794 r."
      ]
    ],
    "explanation": "W 1794 roku Kościuszko stanął na czele powstania przeciwko Rosji."
  },
  {
    "id": "R01_NIEP_05",
    "section": "Walka o niepodległość",
    "type": "riddle",
    "prompt": "Jak nazywał się order wojskowy, którym uhonorowano Kościuszkę za zwycięstwa w bitwach z Rosją?",
    "options": null,
    "answer": "Virtuti Militari",
    "altAnswers": [
      "Virtuti Militari",
      "Order Virtuti Militari"
    ],
    "explanation": "Virtuti Militari to najwyższe polskie odznaczenie wojskowe, którym uhonorowano Tadeusza Kościuszkę."
  },
  {
    "id": "R01_NIEP_06",
    "section": "Walka o niepodległość",
    "type": "odd_one_out",
    "prompt": "Wskaż postać, która nie była dowódcą wojskowym: Tadeusz Kościuszko, Jan Henryk Dąbrowski, Romuald Traugutt, Mikołaj Kopernik.",
    "options": null,
    "answer": "Mikołaj Kopernik",
    "explanation": "Kościuszko, Dąbrowski i Traugutt byli dowódcami; Kopernik zajmował się astronomią."
  },
  {
    "id": "R01_NIEP_07",
    "section": "Walka o niepodległość",
    "type": "scenario",
    "prompt": "Jest rok 1864. Przywódca powstania styczniowego zostaje schwytany przez Rosjan i stracony na stokach warszawskiej Cytadeli. Kto to był?",
    "options": [
      "Romuald Traugutt",
      "Tadeusz Kościuszko",
      "Jan Henryk Dąbrowski",
      "Józef Piłsudski",
      "Stefan Czarniecki",
      "Jan III Sobieski"
    ],
    "answer": 0,
    "image": "r01_powstancy_styczniowi.jpg",
    "explanation": "Romuald Traugutt był przywódcą powstania styczniowego i został stracony w 1864 roku."
  },
  {
    "id": "R01_NIEP_08",
    "section": "Walka o niepodległość",
    "type": "match",
    "prompt": "Połącz dowódcę z wydarzeniem.",
    "options": null,
    "left": [
      "Jan III Sobieski",
      "Tadeusz Kościuszko",
      "Jan Henryk Dąbrowski",
      "Romuald Traugutt"
    ],
    "right": [
      "Utworzenie Legionów Polskich w 1797 roku",
      "Dowodzenie powstaniem styczniowym",
      "Zwycięstwo pod Wiedniem w 1683 roku",
      "Powstanie przeciw Rosji w 1794 roku"
    ],
    "answer": {
      "Jan III Sobieski": "Zwycięstwo pod Wiedniem w 1683 roku",
      "Tadeusz Kościuszko": "Powstanie przeciw Rosji w 1794 roku",
      "Jan Henryk Dąbrowski": "Utworzenie Legionów Polskich w 1797 roku",
      "Romuald Traugutt": "Dowodzenie powstaniem styczniowym"
    },
    "explanation": "Sobieski zwyciężył pod Wiedniem, Kościuszko dowodził powstaniem 1794 roku, Dąbrowski stworzył Legiony, a Traugutt kierował powstaniem styczniowym."
  },
  {
    "id": "R01_NIEP_09",
    "section": "Walka o niepodległość",
    "type": "sort",
    "prompt": "Podziel wydarzenia na walkę z najeźdźcami w XVII wieku i walkę o niepodległość po rozbiorach.",
    "options": null,
    "items": [
      "Powstanie styczniowe",
      "Zwycięstwo Sobieskiego pod Wiedniem",
      "Insurekcja kościuszkowska",
      "Wojna podjazdowa Czarnieckiego przeciw Szwedom",
      "Utworzenie Legionów Polskich we Włoszech"
    ],
    "categories": [
      "obrona przed najeźdźcami w XVII wieku",
      "walka o niepodległość po rozbiorach"
    ],
    "answer": {
      "obrona przed najeźdźcami w XVII wieku": [
        "Wojna podjazdowa Czarnieckiego przeciw Szwedom",
        "Zwycięstwo Sobieskiego pod Wiedniem"
      ],
      "walka o niepodległość po rozbiorach": [
        "Insurekcja kościuszkowska",
        "Utworzenie Legionów Polskich we Włoszech",
        "Powstanie styczniowe"
      ]
    },
    "explanation": "Czarniecki i Sobieski walczyli z najeźdźcami w XVII wieku; insurekcja, Legiony i powstanie styczniowe służyły odzyskaniu wolności po rozbiorach."
  },
  {
    "id": "R01_NIEP_10",
    "section": "Walka o niepodległość",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z walką o wolność Polski w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Powstanie styczniowe",
      "Bitwa warszawska",
      "Utworzenie Legionów Polskich we Włoszech",
      "Insurekcja kościuszkowska",
      "Odzyskanie niepodległości przez Polskę"
    ],
    "answer": [
      "Insurekcja kościuszkowska",
      "Utworzenie Legionów Polskich we Włoszech",
      "Powstanie styczniowe",
      "Odzyskanie niepodległości przez Polskę",
      "Bitwa warszawska"
    ],
    "explanation": "Wydarzenia te przypadają kolejno na lata 1794, 1797, 1863-1864, 1918 oraz 1920."
  },
  {
    "id": "R01_NIEP_11",
    "section": "Walka o niepodległość",
    "type": "single_choice",
    "prompt": "Który Polak organizował Legiony w czasie I wojny światowej i przyczynił się do odzyskania niepodległości w 1918 roku?",
    "options": [
      "Jan Henryk Dąbrowski",
      "Józef Piłsudski",
      "Romuald Traugutt",
      "Stefan Czarniecki",
      "Tadeusz Kościuszko",
      "Jan Zamoyski"
    ],
    "answer": 1,
    "explanation": "Józef Piłsudski zorganizował Legiony podczas I wojny światowej i odegrał ważną rolę w odzyskaniu niepodległości."
  },
  {
    "id": "R01_NIEP_12",
    "section": "Walka o niepodległość",
    "type": "multi_select",
    "prompt": "Jakie działania podejmował Józef Piłsudski?",
    "options": [
      "Organizował Legiony podczas I wojny światowej",
      "Założył Akademię Krakowską",
      "Dowodził polską armią w 1920 roku",
      "Miał stopień marszałka Polski",
      "Zwyciężył pod Wiedniem",
      "Dwukrotnie pełnił funkcję premiera"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Piłsudski organizował Legiony, dowodził w wojnie polsko-bolszewickiej, został marszałkiem Polski i dwukrotnie był premierem."
  },
  {
    "id": "R01_NIEP_13",
    "section": "Walka o niepodległość",
    "type": "true_false",
    "prompt": "Powstanie styczniowe zakończyło się zwycięstwem Polaków nad Rosją.",
    "options": null,
    "answer": false,
    "explanation": "Po straceniu Romualda Traugutta powstanie styczniowe zakończyło się klęską."
  },
  {
    "id": "R01_NOWE_01",
    "section": "Wybitni Polacy XX i XXI wieku",
    "type": "single_choice",
    "prompt": "Która Polka otrzymała Nagrodę Nobla dwukrotnie, w 1903 i 1911 roku?",
    "options": [
      "Maria Skłodowska-Curie",
      "Anna Walentynowicz",
      "Danuta Siedzikówna",
      "Jadwiga Andegaweńska",
      "Tadeusz Zawadzki",
      "Lech Wałęsa"
    ],
    "answer": 0,
    "image": "r01_laboratorium_marii.jpg",
    "explanation": "Maria Skłodowska-Curie zdobyła dwie Nagrody Nobla za odkrycia w fizyce i chemii."
  },
  {
    "id": "R01_NOWE_02",
    "section": "Wybitni Polacy XX i XXI wieku",
    "type": "multi_select",
    "prompt": "Które działania i osiągnięcia wiążą się z Marią Skłodowską-Curie?",
    "options": [
      "Studiowała na Sorbonie",
      "Prowadziła badania z fizyki i chemii",
      "Została profesorem na Sorbonie",
      "Budowała port w Gdyni",
      "Organizowała prześwietlenia rannych żołnierzy",
      "Dowodziła w bitwie warszawskiej"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Maria studiowała na Sorbonie, prowadziła badania w fizyce i chemii, uzyskała profesurę oraz pomagała rannym żołnierzom dzięki aparaturze rentgenowskiej."
  },
  {
    "id": "R01_NOWE_03",
    "section": "Wybitni Polacy XX i XXI wieku",
    "type": "true_false",
    "prompt": "Eugeniusz Kwiatkowski przyczynił się do rozwoju portu i miasta Gdyni.",
    "options": null,
    "answer": true,
    "image": "r01_port_gdynia.jpg",
    "explanation": "Eugeniusz Kwiatkowski odegrał ważną rolę w budowie i rozwoju portu oraz miasta Gdyni."
  },
  {
    "id": "R01_NOWE_04",
    "section": "Wybitni Polacy XX i XXI wieku",
    "type": "fill_in",
    "prompt": "Pseudonim Danuty Siedzikówny brzmiał __________.",
    "options": null,
    "answer": [
      "Inka"
    ],
    "altAnswers": [
      [
        "Inka",
        "inka"
      ]
    ],
    "explanation": "Danuta Siedzikówna wybrała pseudonim Inka i była sanitariuszką Armii Krajowej."
  },
  {
    "id": "R01_NOWE_05",
    "section": "Wybitni Polacy XX i XXI wieku",
    "type": "riddle",
    "prompt": "Jak nazywał się polski rotmistrz, który zorganizował ruch oporu w Auschwitz i przekazał informacje o zbrodniach niemieckich?",
    "options": null,
    "answer": "Witold Pilecki",
    "altAnswers": [
      "Witold Pilecki",
      "Pilecki"
    ],
    "explanation": "Witold Pilecki działał w obozie Auschwitz, skąd przekazywał informacje Polskiemu Państwu Podziemnemu."
  },
  {
    "id": "R01_NOWE_06",
    "section": "Wybitni Polacy XX i XXI wieku",
    "type": "odd_one_out",
    "prompt": "Wskaż pseudonim, który nie należał do trójki warszawskich harcerzy: Zośka, Rudy, Alek, Inka.",
    "options": null,
    "answer": "Inka",
    "explanation": "Zośka to Tadeusz Zawadzki, Rudy to Jan Bytnar, Alek to Maciej Dawidowski. Inka była pseudonimem Danuty Siedzikówny."
  },
  {
    "id": "R01_NOWE_07",
    "section": "Wybitni Polacy XX i XXI wieku",
    "type": "scenario",
    "prompt": "Żołnierz Polskiego Państwa Podziemnego zostaje więźniem Auschwitz, organizuje tam konspirację, a później walczy w powstaniu warszawskim. O kim mowa?",
    "options": [
      "Józef Piłsudski",
      "Eugeniusz Kwiatkowski",
      "Witold Pilecki",
      "Jan Bytnar",
      "Romuald Traugutt",
      "Jan Henryk Dąbrowski"
    ],
    "answer": 2,
    "image": "r01_konspiracja_wojenna.jpg",
    "explanation": "Witold Pilecki działał w Auschwitz, a w 1944 roku wziął udział w powstaniu warszawskim."
  },
  {
    "id": "R01_NOWE_08",
    "section": "Wybitni Polacy XX i XXI wieku",
    "type": "match",
    "prompt": "Połącz pseudonimy konspiracyjne z imionami i nazwiskami.",
    "options": null,
    "left": [
      "Zośka",
      "Rudy",
      "Alek",
      "Inka"
    ],
    "right": [
      "Jan Bytnar",
      "Danuta Siedzikówna",
      "Tadeusz Zawadzki",
      "Maciej Dawidowski"
    ],
    "answer": {
      "Zośka": "Tadeusz Zawadzki",
      "Rudy": "Jan Bytnar",
      "Alek": "Maciej Dawidowski",
      "Inka": "Danuta Siedzikówna"
    },
    "explanation": "Zośka, Rudy i Alek to trójka harcerzy warszawskich; Inka to sanitariuszka Danuta Siedzikówna."
  },
  {
    "id": "R01_NOWE_09",
    "section": "Wybitni Polacy XX i XXI wieku",
    "type": "sort",
    "prompt": "Przyporządkuj działania do okupacji niemieckiej albo do okresu po II wojnie światowej.",
    "options": null,
    "items": [
      "Działalność Inki przeciw władzom komunistycznym",
      "Działalność Pileckiego w obozie Auschwitz",
      "Strajk robotników Stoczni Gdańskiej w 1980 roku",
      "Malowanie znaków Polski Walczącej przez harcerzy"
    ],
    "categories": [
      "okupacja niemiecka",
      "okres powojenny"
    ],
    "answer": {
      "okupacja niemiecka": [
        "Malowanie znaków Polski Walczącej przez harcerzy",
        "Działalność Pileckiego w obozie Auschwitz"
      ],
      "okres powojenny": [
        "Działalność Inki przeciw władzom komunistycznym",
        "Strajk robotników Stoczni Gdańskiej w 1980 roku"
      ]
    },
    "image": "r01_konspiracja_wojenna.jpg",
    "explanation": "Działalność harcerzy i Pileckiego w Auschwitz to okres okupacji niemieckiej; Inka działała także po wojnie, a strajk stoczniowy nastąpił w 1980 roku."
  },
  {
    "id": "R01_NOWE_10",
    "section": "Wybitni Polacy XX i XXI wieku",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z najnowszych dziejów Polski we właściwej kolejności.",
    "options": null,
    "items": [
      "Wybór Lecha Wałęsy na prezydenta",
      "Kanonizacja Jana Pawła II",
      "Powstanie NSZZ Solidarność",
      "Wybór Karola Wojtyły na papieża",
      "Pokojowa Nagroda Nobla dla Lecha Wałęsy"
    ],
    "answer": [
      "Wybór Karola Wojtyły na papieża",
      "Powstanie NSZZ Solidarność",
      "Pokojowa Nagroda Nobla dla Lecha Wałęsy",
      "Wybór Lecha Wałęsy na prezydenta",
      "Kanonizacja Jana Pawła II"
    ],
    "explanation": "Kolejne daty to 1978, 1980, 1983, 1990 oraz 2014 rok."
  },
  {
    "id": "R01_NOWE_11",
    "section": "Wybitni Polacy XX i XXI wieku",
    "type": "single_choice",
    "prompt": "Co było bezpośrednim powodem rozpoczęcia strajku w Stoczni Gdańskiej w sierpniu 1980 roku?",
    "options": [
      "Zamknięcie portu w Gdyni",
      "Likwidacja Akademii Krakowskiej",
      "Ogłoszenie stanu wojennego",
      "Zwolnienie z pracy Anny Walentynowicz",
      "Wyjazd Lecha Wałęsy z Polski",
      "Zakończenie II wojny światowej"
    ],
    "answer": 3,
    "image": "r01_stocznia_gdanska.jpg",
    "explanation": "Zwolnienie Anny Walentynowicz z pracy było bezpośrednią przyczyną strajku."
  },
  {
    "id": "R01_NOWE_12",
    "section": "Wybitni Polacy XX i XXI wieku",
    "type": "scenario",
    "prompt": "W 1978 roku Polak, który wcześniej był biskupem i kardynałem, zostaje papieżem i przyjmuje nowe imię. Jakie?",
    "options": [
      "Jan XXIII",
      "Piotr I",
      "Benedykt XVI",
      "Pius XII",
      "Jan Paweł II",
      "Leon XIII"
    ],
    "answer": 4,
    "image": "r01_pielgrzymka_papieska.jpg",
    "explanation": "Karol Wojtyła przyjął po wyborze na papieża imię Jan Paweł II."
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz polskie uczelnie lub wydarzenia z odpowiednimi datami.",
    "options": null,
    "left": [
      "Założenie Akademii Krakowskiej",
      "Założenie Akademii Wileńskiej",
      "Założenie Akademii Zamojskiej",
      "Nadanie nazwy Uniwersytet Jagielloński"
    ],
    "right": [
      "1817",
      "1595",
      "1364",
      "1579"
    ],
    "answer": {
      "Założenie Akademii Krakowskiej": "1364",
      "Założenie Akademii Wileńskiej": "1579",
      "Założenie Akademii Zamojskiej": "1595",
      "Nadanie nazwy Uniwersytet Jagielloński": "1817"
    },
    "explanation": "Akademię Krakowską założono w 1364 roku, Wileńską w 1579, Zamojską w 1595, a nazwę Uniwersytet Jagielloński nadano w 1817 roku."
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które z podanych osób studiowały w Akademii Krakowskiej?",
    "options": [
      "Jan Zamoyski",
      "Mikołaj Kopernik",
      "Maria Skłodowska-Curie",
      "Tadeusz Kościuszko",
      "Jan Sobieski",
      "Józef Piłsudski"
    ],
    "answer": [
      1,
      4
    ],
    "explanation": "Kopernik studiował między innymi w Akademii Krakowskiej, a Jan Sobieski również pobierał tam naukę."
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Mikołaj Kopernik urodził się w roku __________, a książka z jego przełomowym odkryciem ukazała się w roku __________.",
    "options": null,
    "answer": [
      "1473",
      "1543"
    ],
    "image": "r01_pracownia_astronoma.jpg",
    "altAnswers": [
      [
        "1473",
        "1473 r."
      ],
      [
        "1543",
        "1543 r."
      ]
    ],
    "explanation": "Mikołaj Kopernik żył w latach 1473–1543, a jego przełomowe dzieło ukazało się w 1543 roku."
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z historii Jadwigi i Jagiellonów od najstarszego do najnowszego.",
    "options": null,
    "items": [
      "Śmierć ostatniego króla z dynastii Jagiellonów",
      "Nadanie nazwy Uniwersytet Jagielloński",
      "Koronacja Jadwigi Andegaweńskiej",
      "Ślub Jadwigi z Władysławem Jagiełłą"
    ],
    "answer": [
      "Koronacja Jadwigi Andegaweńskiej",
      "Ślub Jadwigi z Władysławem Jagiełłą",
      "Śmierć ostatniego króla z dynastii Jagiellonów",
      "Nadanie nazwy Uniwersytet Jagielloński"
    ],
    "explanation": "Jadwigę koronowano w 1384 roku, małżeństwo zawarła w 1386 roku, ostatni król Jagiellonów zmarł w 1572 roku, a nazwę uniwersytetu nadano w 1817 roku."
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż uczelnię powstałą w innym stuleciu niż pozostałe: Akademia Wileńska, Akademia Zamojska, Akademia Krakowska.",
    "options": null,
    "answer": "Akademia Krakowska",
    "explanation": "Akademię Krakowską założono w XIV wieku (1364), zaś Wileńską i Zamojską w XVI wieku (1579 i 1595)."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywała się oznaka najwyższego dowództwa wojskowego, którą u schyłku życia dzierżył Stefan Czarniecki?",
    "options": null,
    "answer": "buława hetmańska",
    "altAnswers": [
      "buława hetmańska",
      "hetmańska buława",
      "buława"
    ],
    "explanation": "Opis Stefana Czarnieckiego wskazuje, że dzierżył hetmańską buławę, symbol najwyższego dowódcy wojsk Rzeczypospolitej."
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Dowódca otrzymuje buławę hetmańską w 1668 roku, zostaje wybrany królem w 1674 roku, jest koronowany w 1676 roku, a w 1683 roku zwycięża pod Wiedniem. O kim mowa?",
    "options": [
      "Stefan Czarniecki",
      "Jan Zamoyski",
      "Jan III Sobieski",
      "Bolesław Chrobry",
      "Tadeusz Kościuszko",
      "Władysław Jagiełło"
    ],
    "answer": 2,
    "image": "r01_odsiecz_wiedenska.jpg",
    "explanation": "Jan Sobieski został hetmanem w 1668 roku, królem wybrano go w 1674, koronowano w 1676, a w 1683 zwyciężył pod Wiedniem."
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Jan Sobieski został wybrany królem i koronowany w tym samym roku.",
    "options": null,
    "answer": false,
    "explanation": "Sobieskiego wybrano królem w 1674 roku, a koronowano dwa lata później, w 1676 roku."
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz postać historyczną z jej mniej znanym dokonaniem.",
    "options": null,
    "left": [
      "Tadeusz Zawadzki",
      "Jan Bytnar",
      "Maciej Dawidowski",
      "Witold Pilecki"
    ],
    "right": [
      "Organizował ruch oporu w Auschwitz",
      "Zdjął niemiecką tablicę z pomnika Kopernika",
      "Otrzymał honorowy pseudonim Kotwicki",
      "Namalował znak Polski Walczącej na pomniku Lotnika"
    ],
    "answer": {
      "Tadeusz Zawadzki": "Otrzymał honorowy pseudonim Kotwicki",
      "Jan Bytnar": "Namalował znak Polski Walczącej na pomniku Lotnika",
      "Maciej Dawidowski": "Zdjął niemiecką tablicę z pomnika Kopernika",
      "Witold Pilecki": "Organizował ruch oporu w Auschwitz"
    },
    "explanation": "Zawadzki zasłynął malowaniem znaków Polski Walczącej, Bytnar namalował je na pomniku Lotnika, Dawidowski usunął tablicę z pomnika Kopernika, a Pilecki działał w Auschwitz."
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które zdarzenia miały miejsce w 1983 roku?",
    "options": [
      "Powstanie NSZZ Solidarność",
      "Przyznanie Pokojowej Nagrody Nobla Lechowi Wałęsie",
      "Wybór Lecha Wałęsy na prezydenta",
      "Proces Anny Walentynowicz za zorganizowanie strajku",
      "Nadanie Annie Walentynowicz Orderu Orła Białego"
    ],
    "answer": [
      1,
      3
    ],
    "explanation": "W 1983 roku Lech Wałęsa otrzymał Pokojową Nagrodę Nobla, a Anna Walentynowicz stanęła przed sądem za organizację strajku w 1981 roku."
  },
  {
    "id": "R01_HARD_11",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Podczas pontyfikatu Jan Paweł II odbył __________ pielgrzymki apostolskie i odwiedził __________ państw.",
    "options": null,
    "answer": [
      "104",
      "129"
    ],
    "image": "r01_pielgrzymka_papieska.jpg",
    "altAnswers": [
      [
        "104",
        "104 pielgrzymki"
      ],
      [
        "129",
        "129 państw"
      ]
    ],
    "explanation": "Jan Paweł II odbył 104 pielgrzymki zagraniczne i odwiedził 129 państw."
  },
  {
    "id": "R01_HARD_12",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj dokonania do dwóch postaci wyróżnionych Nagrodą Nobla.",
    "options": null,
    "items": [
      "Walka o prawa robotnicze",
      "Nagroda Nobla w 1911 roku",
      "Pokojowa Nagroda Nobla w 1983 roku",
      "Odkrycia z fizyki oraz chemii",
      "Nagroda Nobla w 1903 roku"
    ],
    "categories": [
      "Maria Skłodowska-Curie",
      "Lech Wałęsa"
    ],
    "answer": {
      "Maria Skłodowska-Curie": [
        "Nagroda Nobla w 1903 roku",
        "Nagroda Nobla w 1911 roku",
        "Odkrycia z fizyki oraz chemii"
      ],
      "Lech Wałęsa": [
        "Pokojowa Nagroda Nobla w 1983 roku",
        "Walka o prawa robotnicze"
      ]
    },
    "explanation": "Maria Skłodowska-Curie dwukrotnie otrzymała Nobla za działalność naukową, a Wałęsa otrzymał Pokojową Nagrodę Nobla za walkę o prawa i wolności."
  },
  {
    "id": "R01_HARD_13",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Ile lat upłynęło między założeniem Akademii Krakowskiej w 1364 roku a założeniem Akademii Zamojskiej w 1595 roku?",
    "options": null,
    "answer": "231",
    "altAnswers": [
      "231",
      "231 lat"
    ],
    "explanation": "Odejmujemy rok założenia Akademii Krakowskiej od roku założenia Akademii Zamojskiej: 1595 - 1364 = 231."
  },
  {
    "id": "R01_HARD_14",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które osoby zginęły w 1943 roku?",
    "options": [
      "Tadeusz Zawadzki",
      "Witold Pilecki",
      "Jan Bytnar",
      "Danuta Siedzikówna",
      "Maciej Dawidowski",
      "Romuald Traugutt"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Harcerze znani pod pseudonimami Zośka, Rudy i Alek zginęli w 1943 roku."
  }
];

const KID_PROMPTS = {
  "R01_CHRO_02": "Które z tych zdarzeń zaczynały nowe epoki w historii?",
  "R01_CHRO_07": "Rok 1385 to który wiek?",
  "R01_ZROD_02": "Które z tych rzeczy są źródłami pisanymi?",
  "R01_ZROD_08": "Co jest źródłem pisanym, a co niepisanym?",
  "R01_SYMB_03": "Czy człowiek innej narodowości może zostać obywatelem Polski?",
  "R01_DAWN_09": "Podziel osoby na władców, astronomów i hetmanów.",
  "R01_NIEP_07": "Kto dowodził powstaniem styczniowym i został stracony przez Rosjan?",
  "R01_NOWE_07": "Kto działał w Auschwitz i walczył w powstaniu warszawskim?",
  "R01_HARD_03": "Kopernik urodził się w roku __________, a książkę wydał w roku __________."
};

const chapter = {
  "id": "r01",
  "number": 1,
  "title": "Wybitni Polacy",
  "icon": "📚",
  "sectionOrder": [
    "Chronologia i mierzenie czasu",
    "Historia i źródła historyczne",
    "Polska, naród i symbole",
    "Wybitni Polacy do XVII wieku",
    "Walka o niepodległość",
    "Wybitni Polacy XX i XXI wieku"
  ],
  "sectionIcons": {
    "Chronologia i mierzenie czasu": "⏳",
    "Historia i źródła historyczne": "📜",
    "Polska, naród i symbole": "🇵🇱",
    "Wybitni Polacy do XVII wieku": "👑",
    "Walka o niepodległość": "⚔️",
    "Wybitni Polacy XX i XXI wieku": "🌟"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
