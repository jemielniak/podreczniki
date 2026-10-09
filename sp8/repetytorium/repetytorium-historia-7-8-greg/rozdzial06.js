// Skróty sekcji (do identyfikatorów ćwiczeń):
//   PRE  = Przejęcie władzy i stalinizm
//   GOM  = Październik 1956 i rządy Gomułki
//   GIE  = Dekada Gierka, opozycja i Kościół
//   SOL  = Solidarność, stan wojenny i upadek PRL
//   III  = III Rzeczpospolita i integracja z Zachodem
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R06_PRE_01",
    "section": "Przejęcie władzy i stalinizm",
    "type": "single_choice",
    "prompt": "W którym roku założono Polską Partię Robotniczą (PPR)?",
    "options": [
      "1939",
      "1940",
      "1941",
      "1942",
      "1944",
      "1948"
    ],
    "answer": 3,
    "explanation": "PPR została założona w Warszawie w 1942 r. przez polskich komunistów szkolonych w Moskwie."
  },
  {
    "id": "R06_PRE_02",
    "section": "Przejęcie władzy i stalinizm",
    "type": "single_choice",
    "prompt": "Która instytucja powstała 20 VII 1944 r. w Moskwie i pełniła funkcję władzy wykonawczej?",
    "options": [
      "Krajowa Rada Narodowa",
      "Polski Komitet Wyzwolenia Narodowego",
      "Tymczasowy Rząd Jedności Narodowej",
      "Rząd RP na emigracji",
      "Polska Zjednoczona Partia Robotnicza",
      "Delegatura Sił Zbrojnych na Kraj"
    ],
    "answer": 1,
    "explanation": "Polski Komitet Wyzwolenia Narodowego (PKWN) powstał 20 VII 1944 r. w Moskwie z inicjatywy Związku Patriotów Polskich i był władzą wykonawczą.",
    "image": "r06_polska_lubelska.jpg"
  },
  {
    "id": "R06_PRE_03",
    "section": "Przejęcie władzy i stalinizm",
    "type": "single_choice",
    "prompt": "Jaki slogan promowali komuniści przed referendum ludowym z 30 VI 1946 r.?",
    "options": [
      "2 razy tak",
      "3 razy tak",
      "Nie dla Senatu",
      "Wolne wybory",
      "Polska bez partii",
      "Tak dla monarchii"
    ],
    "answer": 1,
    "explanation": "W referendum dotyczącym zniesienia Senatu, reformy rolnej i nacjonalizacji przemysłu komuniści zachęcali do głosowania \"3 razy tak\".",
    "image": "r06_referendum_1946.jpg"
  },
  {
    "id": "R06_PRE_04",
    "section": "Przejęcie władzy i stalinizm",
    "type": "multi_select",
    "prompt": "Zaznacz cechy okresu stalinowskiego.",
    "options": [
      "Represje i terror wobec przeciwników systemu",
      "Zależność władz od ZSRS",
      "Socrealizm w kulturze",
      "Kult jednostki",
      "Pełna swoboda działalności partii opozycyjnych",
      "Prywatna własność jako podstawa gospodarki"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Stalinizm w Polsce oznaczał m.in. terror, zależność od ZSRS, socrealizm, kult jednostki oraz likwidację opozycji i podporządkowanie gospodarki modelowi sowieckiemu.",
    "image": "r06_socrealizm.jpg"
  },
  {
    "id": "R06_PRE_05",
    "section": "Przejęcie władzy i stalinizm",
    "type": "true_false",
    "prompt": "Konstytucja PRL z 22 VII 1952 r. utrzymała urząd prezydenta jako najważniejszy urząd państwowy.",
    "options": null,
    "answer": false,
    "explanation": "Konstytucja z 1952 r. zniosła urząd prezydenta i zastąpiła go Radą Państwa."
  },
  {
    "id": "R06_PRE_06",
    "section": "Przejęcie władzy i stalinizm",
    "type": "fill_in",
    "prompt": "Polska Zjednoczona Partia Robotnicza powstała w 1948 r. z połączenia __________ i __________.",
    "options": null,
    "answer": [
      "PPR",
      "PPS"
    ],
    "explanation": "PZPR powstała 15 XII 1948 r. z połączenia Polskiej Partii Robotniczej i Polskiej Partii Socjalistycznej."
  },
  {
    "id": "R06_PRE_07",
    "section": "Przejęcie władzy i stalinizm",
    "type": "riddle",
    "prompt": "Był ostatnim członkiem powojennego ruchu oporu. Nosił pseudonim Lalek i zginął 21 X 1963 r. Kto to?",
    "options": null,
    "answer": "Józef Franczak",
    "altAnswers": [
      "Józef Franczak",
      "Lalek",
      "Józef Franczak Lalek"
    ],
    "explanation": "Józef Franczak, ps. Lalek, zginął w obławie 21 X 1963 r., osiemnaście lat po wojnie.",
    "image": "r06_zolnierze_wykleci.jpg"
  },
  {
    "id": "R06_PRE_08",
    "section": "Przejęcie władzy i stalinizm",
    "type": "odd_one_out",
    "prompt": "Wskaż osobę, która nie pasuje do pozostałych: Witold Pilecki, Danuta Siedzikówna, August Emil Fieldorf, Bolesław Bierut.",
    "options": null,
    "answer": "Bolesław Bierut",
    "explanation": "Pilecki, Siedzikówna i Fieldorf zostali wymienieni wśród najważniejszych postaci podziemia antykomunistycznego. Bierut był czołowym działaczem komunistycznym.",
    "image": "r06_zolnierze_wykleci.jpg"
  },
  {
    "id": "R06_PRE_09",
    "section": "Przejęcie władzy i stalinizm",
    "type": "scenario",
    "prompt": "Artysta w okresie stalinowskim ma tworzyć łatwe i optymistyczne dzieła o pracy, przodownikach, przywódcach i potędze państwa, zgodne z linią partii. Jak nazywała się narzucana wtedy metoda twórcza?",
    "options": [
      "Socrealizm",
      "Romantyzm",
      "Impresjonizm",
      "Naturalizm",
      "Kubizm",
      "Surrealizm"
    ],
    "answer": 0,
    "explanation": "W kulturze wprowadzono socrealizm, czyli podporządkowanie formy i tematyki twórczości założeniom partii.",
    "image": "r06_socrealizm.jpg"
  },
  {
    "id": "R06_PRE_10",
    "section": "Przejęcie władzy i stalinizm",
    "type": "match",
    "prompt": "Połącz instytucję z właściwą informacją.",
    "options": null,
    "left": [
      "Krajowa Rada Narodowa",
      "PKWN",
      "Tymczasowy Rząd Jedności Narodowej",
      "PZPR"
    ],
    "right": [
      "samozwańczy parlament utworzony 1 I 1944 r.",
      "władza wykonawcza powstała 20 VII 1944 r.",
      "rząd powołany 28 VI 1945 r.",
      "partia utworzona 15 XII 1948 r."
    ],
    "answer": {
      "Krajowa Rada Narodowa": "samozwańczy parlament utworzony 1 I 1944 r.",
      "PKWN": "władza wykonawcza powstała 20 VII 1944 r.",
      "Tymczasowy Rząd Jedności Narodowej": "rząd powołany 28 VI 1945 r.",
      "PZPR": "partia utworzona 15 XII 1948 r."
    },
    "explanation": "KRN, PKWN, TRJN i PZPR powstawały kolejno w latach 1944-1948 i pełniły różne role w budowaniu systemu komunistycznego."
  },
  {
    "id": "R06_PRE_11",
    "section": "Przejęcie władzy i stalinizm",
    "type": "sort",
    "prompt": "Przyporządkuj działania z okresu stalinowskiego do gospodarki albo kultury.",
    "options": null,
    "items": [
      "kolektywizacja rolnictwa",
      "plan sześcioletni",
      "bitwa o handel",
      "cenzura",
      "socrealizm",
      "likwidacja prywatnych wydawnictw"
    ],
    "categories": [
      "gospodarka",
      "kultura"
    ],
    "answer": {
      "gospodarka": [
        "kolektywizacja rolnictwa",
        "plan sześcioletni",
        "bitwa o handel"
      ],
      "kultura": [
        "cenzura",
        "socrealizm",
        "likwidacja prywatnych wydawnictw"
      ]
    },
    "explanation": "Gospodarka była podporządkowywana planowaniu i własności państwowej, a kulturę kontrolowano przez cenzurę i socrealizm."
  },
  {
    "id": "R06_PRE_12",
    "section": "Przejęcie władzy i stalinizm",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Referendum ludowe",
      "Powstanie PZPR",
      "Założenie PPR",
      "Wybory do Sejmu Ustawodawczego",
      "Powstanie Krajowej Rady Narodowej"
    ],
    "answer": [
      "Założenie PPR",
      "Powstanie Krajowej Rady Narodowej",
      "Referendum ludowe",
      "Wybory do Sejmu Ustawodawczego",
      "Powstanie PZPR"
    ],
    "explanation": "PPR powstała w 1942 r., KRN w 1944 r., referendum odbyło się w 1946 r., wybory w 1947 r., a PZPR powstała w 1948 r."
  },
  {
    "id": "R06_GOM_01",
    "section": "Październik 1956 i rządy Gomułki",
    "type": "single_choice",
    "prompt": "Kto był najmłodszą ofiarą Poznańskiego Czerwca 1956 r.?",
    "options": [
      "Romek Strzałkowski",
      "Jacek Kuroń",
      "Adam Michnik",
      "Stanisław Pyjas",
      "Jerzy Popiełuszko",
      "Lech Wałęsa"
    ],
    "answer": 0,
    "explanation": "Najmłodszą ofiarą Poznańskiego Czerwca był trzynastoletni Romek Strzałkowski.",
    "image": "r06_poznanski_czerwiec.jpg"
  },
  {
    "id": "R06_GOM_02",
    "section": "Październik 1956 i rządy Gomułki",
    "type": "single_choice",
    "prompt": "Kto został I sekretarzem PZPR w październiku 1956 r.?",
    "options": [
      "Edward Ochab",
      "Władysław Gomułka",
      "Edward Gierek",
      "Bolesław Bierut",
      "Wojciech Jaruzelski",
      "Józef Cyrankiewicz"
    ],
    "answer": 1,
    "explanation": "W październiku 1956 r. stanowisko I sekretarza PZPR objął Władysław Gomułka."
  },
  {
    "id": "R06_GOM_03",
    "section": "Październik 1956 i rządy Gomułki",
    "type": "single_choice",
    "prompt": "Zakaz wystawiania którego utworu w reżyserii Kazimierza Dejmka był jedną z przyczyn Marca 1968?",
    "options": [
      "Dziady",
      "Wesele",
      "Kordian",
      "Lalka",
      "Krzyżacy",
      "Zemsta"
    ],
    "answer": 0,
    "explanation": "Jedną z przyczyn protestów studenckich w Marcu 1968 był zakaz wystawiania Dziadów w reżyserii Kazimierza Dejmka.",
    "image": "r06_marzec_1968.jpg"
  },
  {
    "id": "R06_GOM_04",
    "section": "Październik 1956 i rządy Gomułki",
    "type": "multi_select",
    "prompt": "Zaznacz skutki przemian październikowych 1956 r.",
    "options": [
      "Usunięcie oficerów sowieckich z wojska polskiego",
      "Ograniczenie cenzury",
      "Większa swoboda w rozwoju kultury",
      "Poprawa gospodarcza",
      "Powrót do nasilonej kolektywizacji",
      "Przywrócenie kultu Stalina"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Po Październiku 1956 ograniczono cenzurę, zwiększono swobodę kultury, usunięto oficerów sowieckich z wojska i nastąpiła poprawa gospodarcza."
  },
  {
    "id": "R06_GOM_05",
    "section": "Październik 1956 i rządy Gomułki",
    "type": "true_false",
    "prompt": "Władysław Gomułka zezwolił na rozwiązywanie spółdzielni rolniczych zakładanych w czasach stalinizmu.",
    "options": null,
    "answer": true,
    "explanation": "Gomułka zezwolił na rozwiązywanie spółdzielni rolniczych tworzonych w okresie stalinizmu."
  },
  {
    "id": "R06_GOM_06",
    "section": "Październik 1956 i rządy Gomułki",
    "type": "fill_in",
    "prompt": "Do 1966 r. w ramach akcji Tysiąc szkół na Tysiąclecie Państwa Polskiego wybudowano __________ szkół podstawowych.",
    "options": null,
    "answer": [
      "1417"
    ],
    "explanation": "W ramach akcji tysiąclatek do 1966 r. wybudowano w Polsce 1417 szkół podstawowych."
  },
  {
    "id": "R06_GOM_07",
    "section": "Październik 1956 i rządy Gomułki",
    "type": "riddle",
    "prompt": "Jak nazywano okres po dojściu Władysława Gomułki do władzy w 1956 r., kojarzony z częściowym uspokojeniem sytuacji?",
    "options": null,
    "answer": "mała stabilizacja",
    "altAnswers": [
      "mała stabilizacja",
      "mala stabilizacja"
    ],
    "explanation": "Przemiany po październiku 1956 r. wiązano z określeniem mała stabilizacja."
  },
  {
    "id": "R06_GOM_08",
    "section": "Październik 1956 i rządy Gomułki",
    "type": "odd_one_out",
    "prompt": "Wskaż osobę, która nie pasuje do pozostałych w kontekście Marca 1968: Adam Michnik, Henryk Szlajfer, Jacek Kuroń, Edward Gierek.",
    "options": null,
    "answer": "Edward Gierek",
    "explanation": "Michnik, Szlajfer i Kuroń są wymienieni w opisie wydarzeń i środowisk związanych z Marcem 1968. Edward Gierek objął władzę po Grudniu 1970.",
    "image": "r06_marzec_1968.jpg"
  },
  {
    "id": "R06_GOM_09",
    "section": "Październik 1956 i rządy Gomułki",
    "type": "scenario",
    "prompt": "Jest grudzień 1970 r. Władze ogłaszają podwyżki cen żywności, na Wybrzeżu wybuchają strajki, a protesty są tłumione przez milicję i wojsko. Jak nazywa się ten kryzys?",
    "options": [
      "Poznański Czerwiec",
      "Marzec 1968",
      "Grudzień 1970",
      "Czerwiec 1976",
      "Sierpień 1980",
      "Październik 1956"
    ],
    "answer": 2,
    "explanation": "Grudzień 1970 to masowe protesty robotnicze na Wybrzeżu po podwyżkach cen, zakończone użyciem siły i zmianą przywództwa PZPR.",
    "image": "r06_grudzien_1970.jpg"
  },
  {
    "id": "R06_GOM_10",
    "section": "Październik 1956 i rządy Gomułki",
    "type": "match",
    "prompt": "Połącz kryzys lub wydarzenie z właściwym skutkiem.",
    "options": null,
    "left": [
      "Poznański Czerwiec 1956",
      "Październik 1956",
      "Marzec 1968",
      "Grudzień 1970"
    ],
    "right": [
      "58 ofiar śmiertelnych według danych IPN",
      "objęcie stanowiska I sekretarza PZPR przez Gomułkę",
      "emigracja około 20 tys. Żydów",
      "dymisja Gomułki i objęcie władzy przez Gierka"
    ],
    "answer": {
      "Poznański Czerwiec 1956": "58 ofiar śmiertelnych według danych IPN",
      "Październik 1956": "objęcie stanowiska I sekretarza PZPR przez Gomułkę",
      "Marzec 1968": "emigracja około 20 tys. Żydów",
      "Grudzień 1970": "dymisja Gomułki i objęcie władzy przez Gierka"
    },
    "explanation": "Każdy z tych kryzysów miał odmienne następstwa: od ofiar śmiertelnych po zmiany polityczne i emigrację."
  },
  {
    "id": "R06_GOM_11",
    "section": "Październik 1956 i rządy Gomułki",
    "type": "sort",
    "prompt": "Przyporządkuj działania z okresu rządów Gomułki do polityki wobec Kościoła albo do życia społecznego i gospodarczego.",
    "options": null,
    "items": [
      "zakaz nauki religii w budynkach szkół",
      "niedopuszczenie do pielgrzymki Pawła VI",
      "zakaz procesji Bożego Ciała w części miast",
      "rozwiązywanie spółdzielni rolniczych",
      "budowa zakładów chemicznych dla rolnictwa",
      "akcja tysiąclatek"
    ],
    "categories": [
      "polityka wobec Kościoła",
      "życie społeczne i gospodarcze"
    ],
    "answer": {
      "polityka wobec Kościoła": [
        "zakaz nauki religii w budynkach szkół",
        "niedopuszczenie do pielgrzymki Pawła VI",
        "zakaz procesji Bożego Ciała w części miast"
      ],
      "życie społeczne i gospodarcze": [
        "rozwiązywanie spółdzielni rolniczych",
        "budowa zakładów chemicznych dla rolnictwa",
        "akcja tysiąclatek"
      ]
    },
    "explanation": "Rządy Gomułki łączyły działania gospodarcze i społeczne z narastającym konfliktem państwa z Kościołem."
  },
  {
    "id": "R06_GOM_12",
    "section": "Październik 1956 i rządy Gomułki",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "Marzec 1968",
      "Zakaz nauki religii w budynkach szkół",
      "Październik 1956",
      "Grudzień 1970",
      "Obchody Tysiąclecia Państwa Polskiego"
    ],
    "answer": [
      "Październik 1956",
      "Zakaz nauki religii w budynkach szkół",
      "Obchody Tysiąclecia Państwa Polskiego",
      "Marzec 1968",
      "Grudzień 1970"
    ],
    "explanation": "Październik nastąpił w 1956 r., zakaz nauki religii w szkołach w 1960 r., obchody Tysiąclecia w 1966 r., Marzec w 1968 r., a Grudzień w 1970 r."
  },
  {
    "id": "R06_GIE_01",
    "section": "Dekada Gierka, opozycja i Kościół",
    "type": "single_choice",
    "prompt": "Jak nazywano model rozwoju gospodarczego dekady Edwarda Gierka oparty na zagranicznych kredytach?",
    "options": [
      "cud na kredyt",
      "mała stabilizacja",
      "plan trzyletni",
      "bitwa o handel",
      "terapia szokowa",
      "nowy kurs"
    ],
    "answer": 0,
    "explanation": "Dziesięciolecie rządów Gierka i zmiany gospodarcze finansowane kredytami zagranicznymi nazwano cudem na kredyt.",
    "image": "r06_gierek_inwestycje.jpg"
  },
  {
    "id": "R06_GIE_02",
    "section": "Dekada Gierka, opozycja i Kościół",
    "type": "single_choice",
    "prompt": "Który samochód był symbolem produkcji w dekadzie Gierka?",
    "options": [
      "Fiat 126p",
      "Polonez",
      "Syrena 105",
      "Warszawa M20",
      "Trabant 601",
      "Wołga GAZ-24"
    ],
    "answer": 0,
    "explanation": "Fiat 126p był jednym z symboli produkcji w dekadzie Gierka.",
    "image": "r06_gierek_inwestycje.jpg"
  },
  {
    "id": "R06_GIE_03",
    "section": "Dekada Gierka, opozycja i Kościół",
    "type": "single_choice",
    "prompt": "Która organizacja opozycyjna została założona we wrześniu 1976 r. i pomagała represjonowanym robotnikom?",
    "options": [
      "Komitet Obrony Robotników",
      "Ruch Młodej Polski",
      "Konfederacja Polski Niepodległej",
      "NSZZ Solidarność",
      "Krajowa Rada Narodowa",
      "Polska Partia Robotnicza"
    ],
    "answer": 0,
    "explanation": "Komitet Obrony Robotników powstał we wrześniu 1976 r. i udzielał pomocy finansowej oraz prawnej represjonowanym robotnikom i ich rodzinom."
  },
  {
    "id": "R06_GIE_04",
    "section": "Dekada Gierka, opozycja i Kościół",
    "type": "multi_select",
    "prompt": "Zaznacz objawy kryzysu gospodarczego pod koniec dekady Gierka.",
    "options": [
      "Wzrost zadłużenia",
      "Pustki w sklepach",
      "Kartki na cukier i inne artykuły",
      "Wyłączanie dostaw energii",
      "Nadwyżka towarów w sklepach",
      "Brak zadłużenia zagranicznego"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Kryzys obejmował rosnące zadłużenie, niedobory towarów, reglamentację i przerwy w dostawach energii.",
    "image": "r06_kartki_towarowe.jpg"
  },
  {
    "id": "R06_GIE_05",
    "section": "Dekada Gierka, opozycja i Kościół",
    "type": "true_false",
    "prompt": "Podczas protestów w czerwcu 1976 r. Edward Gierek zakazał strzelania do demonstrantów.",
    "options": null,
    "answer": true,
    "explanation": "Podczas brutalnego tłumienia protestów w Radomiu, Ursusie i innych miastach Gierek zakazał strzelania do demonstrantów."
  },
  {
    "id": "R06_GIE_06",
    "section": "Dekada Gierka, opozycja i Kościół",
    "type": "fill_in",
    "prompt": "Ruch Obrony Praw Człowieka i Obywatela został założony w roku __________.",
    "options": null,
    "answer": [
      "1977"
    ],
    "explanation": "ROPCiO powstał w 1977 r.; do jego działaczy należeli Leszek Moczulski i Andrzej Czuma."
  },
  {
    "id": "R06_GIE_07",
    "section": "Dekada Gierka, opozycja i Kościół",
    "type": "riddle",
    "prompt": "Powstała w 1979 r., a jej działaczem był Leszek Moczulski. Była pierwszą jawną, choć niezarejestrowaną partią opozycyjną. Co to za organizacja?",
    "options": null,
    "answer": "Konfederacja Polski Niepodległej",
    "explanation": "Konfederacja Polski Niepodległej została założona w 1979 r. i działała jawnie jako partia opozycyjna, choć nie była zarejestrowana."
  },
  {
    "id": "R06_GIE_08",
    "section": "Dekada Gierka, opozycja i Kościół",
    "type": "odd_one_out",
    "prompt": "Wskaż organizację, która nie należała do opozycji demokratycznej lat 70.: KOR, ROPCiO, Konfederacja Polski Niepodległej, PZPR.",
    "options": null,
    "answer": "PZPR",
    "explanation": "KOR, ROPCiO i Konfederacja Polski Niepodległej były organizacjami opozycyjnymi. PZPR była partią rządzącą."
  },
  {
    "id": "R06_GIE_09",
    "section": "Dekada Gierka, opozycja i Kościół",
    "type": "scenario",
    "prompt": "Po protestach 1976 r. państwo ogranicza ilość cukru, którą jedna osoba może kupić w miesiącu, a zakup wymaga specjalnych kartek. Jak nazywa się taki system dystrybucji?",
    "options": [
      "reglamentacja towarów",
      "prywatyzacja",
      "kolektywizacja",
      "nacjonalizacja",
      "wolny handel",
      "denominacja"
    ],
    "answer": 0,
    "explanation": "Reglamentacja towarów polega na odgórnym ograniczeniu ilości towaru, którą klient może nabyć; do zakupu uprawniają kartki.",
    "image": "r06_kartki_towarowe.jpg"
  },
  {
    "id": "R06_GIE_10",
    "section": "Dekada Gierka, opozycja i Kościół",
    "type": "match",
    "prompt": "Połącz organizację opozycyjną z osobą lub grupą osób.",
    "options": null,
    "left": [
      "KOR",
      "ROPCiO",
      "Konfederacja Polski Niepodległej",
      "Ruch Młodej Polski"
    ],
    "right": [
      "Jacek Kuroń, Edward Lipiński i Adam Michnik",
      "Leszek Moczulski i Andrzej Czuma",
      "Leszek Moczulski",
      "Aleksander Hall"
    ],
    "answer": {
      "KOR": "Jacek Kuroń, Edward Lipiński i Adam Michnik",
      "ROPCiO": "Leszek Moczulski i Andrzej Czuma",
      "Konfederacja Polski Niepodległej": "Leszek Moczulski",
      "Ruch Młodej Polski": "Aleksander Hall"
    },
    "explanation": "KOR był związany m.in. z Jackiem Kuroniem, Edwardem Lipińskim i Adamem Michnikiem, ROPCiO z Leszkiem Moczulskim i Andrzejem Czumą, KPN z Leszkiem Moczulskim, a Ruch Młodej Polski z Aleksandrem Hallem."
  },
  {
    "id": "R06_GIE_11",
    "section": "Dekada Gierka, opozycja i Kościół",
    "type": "sort",
    "prompt": "Przyporządkuj zjawiska z dekady Gierka do rozwoju inwestycji i konsumpcji albo do kryzysu gospodarczego.",
    "options": null,
    "items": [
      "Huta Katowice",
      "Fiat 126p",
      "bloki z wielkiej płyty",
      "wzrost zadłużenia",
      "pustki w sklepach",
      "wyłączanie dostaw energii"
    ],
    "categories": [
      "inwestycje i konsumpcja",
      "kryzys gospodarczy"
    ],
    "answer": {
      "inwestycje i konsumpcja": [
        "Huta Katowice",
        "Fiat 126p",
        "bloki z wielkiej płyty"
      ],
      "kryzys gospodarczy": [
        "wzrost zadłużenia",
        "pustki w sklepach",
        "wyłączanie dostaw energii"
      ]
    },
    "explanation": "Dekada Gierka łączyła rozbudowę przemysłu, mieszkalnictwa i produkcji konsumpcyjnej z narastającym zadłużeniem i niedoborami."
  },
  {
    "id": "R06_GIE_12",
    "section": "Dekada Gierka, opozycja i Kościół",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Wybór Karola Wojtyły na papieża",
      "Powstanie KOR",
      "Powstanie ROPCiO",
      "Czerwiec 1976",
      "Pierwsza pielgrzymka Jana Pawła II do Polski"
    ],
    "answer": [
      "Czerwiec 1976",
      "Powstanie KOR",
      "Powstanie ROPCiO",
      "Wybór Karola Wojtyły na papieża",
      "Pierwsza pielgrzymka Jana Pawła II do Polski"
    ],
    "explanation": "Protesty i powstanie KOR miały miejsce w 1976 r., ROPCiO powstał w 1977 r., Karol Wojtyła został papieżem w 1978 r., a pierwszą pielgrzymkę do Polski odbył w 1979 r.",
    "image": "r06_jan_pawel_ii_1979.jpg"
  },
  {
    "id": "R06_SOL_01",
    "section": "Solidarność, stan wojenny i upadek PRL",
    "type": "single_choice",
    "prompt": "Kiedy wybuchł strajk okupacyjny w Stoczni Gdańskiej, który doprowadził do powstania Międzyzakładowego Komitetu Strajkowego?",
    "options": [
      "1 VIII 1980",
      "14 VIII 1980",
      "31 VIII 1980",
      "17 IX 1980",
      "10 XI 1980",
      "13 XII 1981"
    ],
    "answer": 1,
    "explanation": "Strajk okupacyjny w Stoczni Gdańskiej wybuchł 14 VIII 1980 r.; później powstał Międzyzakładowy Komitet Strajkowy pod przewodnictwem Lecha Wałęsy.",
    "image": "r06_stocznia_gdanska_1980.jpg"
  },
  {
    "id": "R06_SOL_02",
    "section": "Solidarność, stan wojenny i upadek PRL",
    "type": "single_choice",
    "prompt": "Kiedy powstał NSZZ Solidarność?",
    "options": [
      "14 VIII 1980",
      "31 VIII 1980",
      "17 IX 1980",
      "10 XI 1980",
      "13 XII 1981",
      "22 VII 1983"
    ],
    "answer": 2,
    "explanation": "NSZZ Solidarność powstał 17 IX 1980 r.; rejestracji związku dokonano 10 XI 1980 r."
  },
  {
    "id": "R06_SOL_03",
    "section": "Solidarność, stan wojenny i upadek PRL",
    "type": "single_choice",
    "prompt": "Kiedy wprowadzono w Polsce stan wojenny?",
    "options": [
      "31 VIII 1980",
      "10 XI 1980",
      "13 XII 1981",
      "31 XII 1982",
      "22 VII 1983",
      "6 II 1989"
    ],
    "answer": 2,
    "explanation": "Stan wojenny został wprowadzony 13 XII 1981 r. uchwałą Rady Państwa.",
    "image": "r06_stan_wojenny.jpg"
  },
  {
    "id": "R06_SOL_04",
    "section": "Solidarność, stan wojenny i upadek PRL",
    "type": "multi_select",
    "prompt": "Zaznacz postulaty Międzyzakładowego Komitetu Strajkowego.",
    "options": [
      "Wolne związki zawodowe",
      "Prawo do strajku",
      "Zniesienie cenzury",
      "Podwyżki płac",
      "Wolne soboty",
      "Wprowadzenie godziny milicyjnej"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Wśród 21 postulatów znalazły się m.in. wolne związki zawodowe, prawo do strajku, zniesienie cenzury, podwyżki płac i wolne soboty.",
    "image": "r06_stocznia_gdanska_1980.jpg"
  },
  {
    "id": "R06_SOL_05",
    "section": "Solidarność, stan wojenny i upadek PRL",
    "type": "true_false",
    "prompt": "Solidarność działała legalnie przez ponad 15 miesięcy przed wprowadzeniem stanu wojennego.",
    "options": null,
    "answer": true,
    "explanation": "Solidarność działała legalnie przez ponad 15 miesięcy; okres ten nazwano karnawałem Solidarności."
  },
  {
    "id": "R06_SOL_06",
    "section": "Solidarność, stan wojenny i upadek PRL",
    "type": "fill_in",
    "prompt": "Podczas pacyfikacji kopalni Wujek 16 XII 1981 r. zabito __________ górników.",
    "options": null,
    "answer": [
      "9"
    ],
    "explanation": "16 XII 1981 r. w kopalni Wujek podczas brutalnej pacyfikacji zginęło dziewięciu górników."
  },
  {
    "id": "R06_SOL_07",
    "section": "Solidarność, stan wojenny i upadek PRL",
    "type": "riddle",
    "prompt": "Jak nazywano okres legalnej działalności Solidarności, gdy rozwijały się niezależne związki, prasa i inicjatywy społeczne?",
    "options": null,
    "answer": "karnawał Solidarności",
    "altAnswers": [
      "karnawał Solidarności",
      "karnawal Solidarnosci"
    ],
    "explanation": "Ponad piętnastomiesięczny okres legalnej działalności Solidarności określono jako karnawał Solidarności."
  },
  {
    "id": "R06_SOL_08",
    "section": "Solidarność, stan wojenny i upadek PRL",
    "type": "odd_one_out",
    "prompt": "Wskaż działanie, które nie było ograniczeniem stanu wojennego: godzina milicyjna, cenzura korespondencji, internowanie działaczy opozycji, zniesienie cenzury.",
    "options": null,
    "answer": "zniesienie cenzury",
    "explanation": "W stanie wojennym cenzurę zaostrzono, kontrolowano korespondencję i internowano opozycjonistów; nie zniesiono cenzury.",
    "image": "r06_stan_wojenny.jpg"
  },
  {
    "id": "R06_SOL_09",
    "section": "Solidarność, stan wojenny i upadek PRL",
    "type": "scenario",
    "prompt": "W 1982 r. obywatel nosi na ubraniu opornik, zapala świecę w miesięcznicę 13 grudnia i kolportuje antyrządowe ulotki. Co wyraża w ten sposób?",
    "options": [
      "Poparcie dla stanu wojennego",
      "Sprzeciw wobec władz i stanu wojennego",
      "Poparcie dla PZPR",
      "Protest przeciw wejściu do NATO",
      "Sprzeciw wobec integracji europejskiej",
      "Poparcie dla kolektywizacji"
    ],
    "answer": 1,
    "explanation": "Noszenie oporników, zapalanie świec, ulotki i hasła na murach były formami protestu przeciw władzom w okresie stanu wojennego.",
    "image": "r06_stan_wojenny.jpg"
  },
  {
    "id": "R06_SOL_10",
    "section": "Solidarność, stan wojenny i upadek PRL",
    "type": "match",
    "prompt": "Połącz datę z wydarzeniem.",
    "options": null,
    "left": [
      "17 IX 1980",
      "13 XII 1981",
      "31 XII 1982",
      "22 VII 1983"
    ],
    "right": [
      "powstanie NSZZ Solidarność",
      "wprowadzenie stanu wojennego",
      "zawieszenie stanu wojennego",
      "zniesienie stanu wojennego"
    ],
    "answer": {
      "17 IX 1980": "powstanie NSZZ Solidarność",
      "13 XII 1981": "wprowadzenie stanu wojennego",
      "31 XII 1982": "zawieszenie stanu wojennego",
      "22 VII 1983": "zniesienie stanu wojennego"
    },
    "explanation": "Solidarność powstała we wrześniu 1980 r., stan wojenny wprowadzono w grudniu 1981 r., zawieszono pod koniec 1982 r. i zniesiono w lipcu 1983 r."
  },
  {
    "id": "R06_SOL_11",
    "section": "Solidarność, stan wojenny i upadek PRL",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do przyczyn albo konsekwencji stanu wojennego.",
    "options": null,
    "items": [
      "zła sytuacja ekonomiczna",
      "obawa komunistów przed utratą władzy",
      "możliwa interwencja państw Układu Warszawskiego",
      "rozdział między władzą a społeczeństwem",
      "emigracja około 1 mln Polaków",
      "liczne ofiary"
    ],
    "categories": [
      "przyczyny",
      "konsekwencje"
    ],
    "answer": {
      "przyczyny": [
        "zła sytuacja ekonomiczna",
        "obawa komunistów przed utratą władzy",
        "możliwa interwencja państw Układu Warszawskiego"
      ],
      "konsekwencje": [
        "rozdział między władzą a społeczeństwem",
        "emigracja około 1 mln Polaków",
        "liczne ofiary"
      ]
    },
    "explanation": "Do przyczyn stanu wojennego należały kryzys gospodarczy i obawy władz, a do konsekwencji społeczne rozdarcie, emigracja i ofiary."
  },
  {
    "id": "R06_SOL_12",
    "section": "Solidarność, stan wojenny i upadek PRL",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia prowadzące od Sierpnia 1980 do przemian 1989 r.",
    "options": null,
    "items": [
      "Wybory 4 VI 1989",
      "Wprowadzenie stanu wojennego",
      "Strajk w Stoczni Gdańskiej",
      "Rozpoczęcie obrad Okrągłego Stołu",
      "Powstanie NSZZ Solidarność"
    ],
    "answer": [
      "Strajk w Stoczni Gdańskiej",
      "Powstanie NSZZ Solidarność",
      "Wprowadzenie stanu wojennego",
      "Rozpoczęcie obrad Okrągłego Stołu",
      "Wybory 4 VI 1989"
    ],
    "explanation": "Strajk sierpniowy i powstanie Solidarności poprzedziły stan wojenny, a w 1989 r. odbyły się obrady Okrągłego Stołu i czerwcowe wybory.",
    "image": "r06_okragly_stol.jpg"
  },
  {
    "id": "R06_III_01",
    "section": "III Rzeczpospolita i integracja z Zachodem",
    "type": "single_choice",
    "prompt": "Kto 24 VIII 1989 r. został premierem i utworzył rząd jako działacz Solidarności?",
    "options": [
      "Tadeusz Mazowiecki",
      "Wojciech Jaruzelski",
      "Lech Wałęsa",
      "Leszek Balcerowicz",
      "Aleksander Kwaśniewski",
      "Czesław Kiszczak"
    ],
    "answer": 0,
    "explanation": "24 VIII 1989 r. premierem został Tadeusz Mazowiecki, działacz Solidarności."
  },
  {
    "id": "R06_III_02",
    "section": "III Rzeczpospolita i integracja z Zachodem",
    "type": "single_choice",
    "prompt": "Kto wygrał powszechne wybory prezydenckie w listopadzie 1990 r.?",
    "options": [
      "Lech Wałęsa",
      "Wojciech Jaruzelski",
      "Tadeusz Mazowiecki",
      "Aleksander Kwaśniewski",
      "Ryszard Kaczorowski",
      "Jan Olszewski"
    ],
    "answer": 0,
    "explanation": "W listopadzie 1990 r. w powszechnych wyborach prezydentem został Lech Wałęsa."
  },
  {
    "id": "R06_III_03",
    "section": "III Rzeczpospolita i integracja z Zachodem",
    "type": "single_choice",
    "prompt": "Kiedy uchwalono Konstytucję RP?",
    "options": [
      "31 XII 1989",
      "6 IV 1990",
      "27 X 1991",
      "2 IV 1997",
      "12 III 1999",
      "1 V 2004"
    ],
    "answer": 3,
    "explanation": "Konstytucję RP uchwalono 2 IV 1997 r."
  },
  {
    "id": "R06_III_04",
    "section": "III Rzeczpospolita i integracja z Zachodem",
    "type": "multi_select",
    "prompt": "Zaznacz elementy transformacji systemowej lat 90.",
    "options": [
      "Zasada podziału władz",
      "Pluralizm polityczny",
      "Państwo prawa",
      "Zasada suwerenności narodu",
      "Monopol jednej partii",
      "Zasada jednolitej władzy państwowej"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Transformacja oznaczała przejście od jednolitej władzy i monopolu partii do podziału władz, pluralizmu, państwa prawa i suwerenności narodu.",
    "image": "r06_transformacja_ustrojowa.jpg"
  },
  {
    "id": "R06_III_05",
    "section": "III Rzeczpospolita i integracja z Zachodem",
    "type": "true_false",
    "prompt": "Plan Balcerowicza z 1990 r. miał utrzymać gospodarkę centralnie sterowaną i ograniczyć mechanizmy rynkowe.",
    "options": null,
    "answer": false,
    "explanation": "Plan Balcerowicza miał stabilizować gospodarkę i przekształcać ją z centralnie sterowanej w gospodarkę rynkową.",
    "image": "r06_transformacja_ustrojowa.jpg"
  },
  {
    "id": "R06_III_06",
    "section": "III Rzeczpospolita i integracja z Zachodem",
    "type": "fill_in",
    "prompt": "Polska przystąpiła do NATO __________, a do Unii Europejskiej __________.",
    "options": null,
    "answer": [
      "12 III 1999 r.",
      "1 V 2004 r."
    ],
    "explanation": "Polska wstąpiła do NATO 12 III 1999 r., a członkiem Unii Europejskiej została 1 V 2004 r.",
    "image": "r06_nato_ue.jpg"
  },
  {
    "id": "R06_III_07",
    "section": "III Rzeczpospolita i integracja z Zachodem",
    "type": "riddle",
    "prompt": "Jak nazywa się obszar państw UE, na którym zniesiono kontrole graniczne, do którego Polska weszła 21 XII 2007 r.?",
    "options": null,
    "answer": "Strefa Schengen",
    "altAnswers": [
      "Strefa Schengen",
      "Schengen"
    ],
    "explanation": "Strefa Schengen to teren państw UE bez kontroli granicznych; Polska weszła do niej 21 XII 2007 r."
  },
  {
    "id": "R06_III_08",
    "section": "III Rzeczpospolita i integracja z Zachodem",
    "type": "odd_one_out",
    "prompt": "Wskaż zjawisko, które nie było problemem społecznym lat 90.: wysokie bezrobocie, emigracja zarobkowa, wzrost przestępczości, kolektywizacja rolnictwa.",
    "options": null,
    "answer": "kolektywizacja rolnictwa",
    "explanation": "Problemy lat 90. obejmowały bezrobocie, emigrację zarobkową, rozwarstwienie i wzrost przestępczości. Kolektywizacja była elementem wcześniejszej polityki komunistycznej."
  },
  {
    "id": "R06_III_09",
    "section": "III Rzeczpospolita i integracja z Zachodem",
    "type": "scenario",
    "prompt": "Po 1 V 2004 r. Polak może łatwiej pracować za granicą w krajach UE, prowadzić firmę i korzystać ze swobodnego przemieszczania. Z jakim procesem wiążą się te możliwości?",
    "options": [
      "Przystąpieniem Polski do Unii Europejskiej",
      "Wprowadzeniem stanu wojennego",
      "Powstaniem PZPR",
      "Reformą rolną 1944 r.",
      "Poznańskim Czerwcem",
      "Planem sześcioletnim"
    ],
    "answer": 0,
    "explanation": "Do korzyści związanych z członkostwem Polski w UE należą praca za granicą, możliwość prowadzenia firmy i swoboda przemieszczania się.",
    "image": "r06_nato_ue.jpg"
  },
  {
    "id": "R06_III_10",
    "section": "III Rzeczpospolita i integracja z Zachodem",
    "type": "match",
    "prompt": "Połącz etap integracji europejskiej z datą.",
    "options": null,
    "left": [
      "Wniosek o członkostwo w UE",
      "Rozpoczęcie negocjacji członkowskich",
      "Podpisanie traktatu akcesyjnego",
      "Referendum akcesyjne",
      "Wstąpienie Polski do UE"
    ],
    "right": [
      "8 IV 1994",
      "31 III 1998",
      "16 IV 2003",
      "7-8 VI 2003",
      "1 V 2004"
    ],
    "answer": {
      "Wniosek o członkostwo w UE": "8 IV 1994",
      "Rozpoczęcie negocjacji członkowskich": "31 III 1998",
      "Podpisanie traktatu akcesyjnego": "16 IV 2003",
      "Referendum akcesyjne": "7-8 VI 2003",
      "Wstąpienie Polski do UE": "1 V 2004"
    },
    "explanation": "Droga do UE prowadziła od wniosku w 1994 r., przez negocjacje i traktat akcesyjny, po referendum i członkostwo 1 V 2004 r."
  },
  {
    "id": "R06_III_11",
    "section": "III Rzeczpospolita i integracja z Zachodem",
    "type": "sort",
    "prompt": "Przyporządkuj korzyści i znaczenie do NATO albo do Unii Europejskiej.",
    "options": null,
    "items": [
      "wzrost bezpieczeństwa Polski",
      "udział Polski w operacjach sojuszu",
      "transformacja Polskich Sił Zbrojnych",
      "fundusze na infrastrukturę i badania",
      "możliwość pracy zarobkowej w krajach członkowskich",
      "swobodne przemieszczanie w strefie Schengen"
    ],
    "categories": [
      "NATO",
      "Unia Europejska"
    ],
    "answer": {
      "NATO": [
        "wzrost bezpieczeństwa Polski",
        "udział Polski w operacjach sojuszu",
        "transformacja Polskich Sił Zbrojnych"
      ],
      "Unia Europejska": [
        "fundusze na infrastrukturę i badania",
        "możliwość pracy zarobkowej w krajach członkowskich",
        "swobodne przemieszczanie w strefie Schengen"
      ]
    },
    "explanation": "NATO wiązało się przede wszystkim z bezpieczeństwem i transformacją sił zbrojnych, a UE z funduszami, swobodami gospodarczymi i przemieszczaniem.",
    "image": "r06_nato_ue.jpg"
  },
  {
    "id": "R06_III_12",
    "section": "III Rzeczpospolita i integracja z Zachodem",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "Wejście Polski do strefy Schengen",
      "Ostatnie wojska rosyjskie opuszczają Polskę",
      "Pierwsze wolne wybory do Sejmu i Senatu",
      "Wstąpienie Polski do NATO",
      "Wstąpienie Polski do Unii Europejskiej"
    ],
    "answer": [
      "Pierwsze wolne wybory do Sejmu i Senatu",
      "Ostatnie wojska rosyjskie opuszczają Polskę",
      "Wstąpienie Polski do NATO",
      "Wstąpienie Polski do Unii Europejskiej",
      "Wejście Polski do strefy Schengen"
    ],
    "explanation": "Wolne wybory odbyły się w 1991 r., wojska rosyjskie opuściły Polskę w 1993 r., Polska weszła do NATO w 1999 r., do UE w 2004 r., a do strefy Schengen w 2007 r."
  },
  {
    "id": "R06_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaki odsetek głosujących poparł hasło \"3 razy tak\" według rzeczywistych wyników referendum z 1946 r.?",
    "options": [
      "niecałe 12%",
      "niecałe 27%",
      "około 41%",
      "około 58%",
      "około 77%",
      "około 90%"
    ],
    "answer": 1,
    "explanation": "Według rzeczywistych wyników referendum hasło \"3 razy tak\" poparło niecałe 27% głosujących.",
    "image": "r06_referendum_1946.jpg"
  },
  {
    "id": "R06_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W jakich dniach rozwiązano PZPR?",
    "options": [
      "27-30 I 1990 r.",
      "6-9 II 1989 r.",
      "17-20 IX 1980 r.",
      "21-22 VII 1983 r.",
      "1-4 VI 1989 r.",
      "8-11 IV 1994 r."
    ],
    "answer": 0,
    "explanation": "PZPR rozwiązano w dniach 27-30 I 1990 r."
  },
  {
    "id": "R06_HARD_03",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Dlaczego 1 marca wybrano na Narodowy Dzień Pamięci Żołnierzy Wyklętych?",
    "options": [
      "Tego dnia w 1951 r. wykonano wyrok śmierci na kierownictwie IV Komendy WiN",
      "Tego dnia w 1944 r. powstała KRN",
      "Tego dnia w 1946 r. odbyło się referendum",
      "Tego dnia w 1956 r. rozpoczął się Poznański Czerwiec",
      "Tego dnia w 1963 r. zginął Józef Franczak",
      "Tego dnia w 1976 r. powstał KOR"
    ],
    "answer": 0,
    "explanation": "1 III 1951 r. wykonano wyrok śmierci na kierownictwie IV Komendy Zrzeszenia Wolność i Niezawisłość; 1 marca ustanowiono później świętem państwowym poświęconym Żołnierzom Wyklętym."
  },
  {
    "id": "R06_HARD_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz postanowienia Konstytucji PRL z 22 VII 1952 r.",
    "options": [
      "Zmiana nazwy państwa na Polska Rzeczpospolita Ludowa",
      "Zniesienie urzędu prezydenta",
      "Odstąpienie od trójpodziału władzy",
      "Podmiotem władzy miał być lud pracujący miast i wsi",
      "Wprowadzenie Senatu",
      "Pełna niezależność samorządu od władz wyższego stopnia"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Konstytucja z 1952 r. ustanowiła PRL, zniosła urząd prezydenta, odrzuciła trójpodział władzy i deklarowała władzę ludu pracującego miast i wsi."
  },
  {
    "id": "R06_HARD_05",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz działania władz komunistycznych wobec Kościoła katolickiego.",
    "options": [
      "Aresztowanie prymasa Stefana Wyszyńskiego w latach 1953-1956",
      "Wprowadzenie zasadniczej służby wojskowej dla kleryków w 1959 r.",
      "Nieudzielanie pozwoleń na budowę nowych kościołów",
      "Zerwanie stosunków z Watykanem w 1945 r.",
      "Przekazanie Kościołowi pełnej kontroli nad szkolnictwem",
      "Zniesienie cenzury kościelnej przez państwo"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Działania władz obejmowały zerwanie stosunków z Watykanem, represje wobec duchowieństwa, aresztowanie prymasa, służbę wojskową kleryków i ograniczanie budowy kościołów."
  },
  {
    "id": "R06_HARD_06",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "W momencie rejestracji Solidarność liczyła około 10 mln członków, czyli około 80% zatrudnionych.",
    "options": null,
    "answer": true,
    "explanation": "Przy rejestracji Solidarność liczyła około 10 mln członków, co odpowiadało około 80% zatrudnionych."
  },
  {
    "id": "R06_HARD_07",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "W ustaleniach Okrągłego Stołu 65% miejsc w Sejmie przeznaczono dla opozycji, a 35% dla strony rządowej.",
    "options": null,
    "answer": false,
    "explanation": "Było odwrotnie: 65% miejsc w Sejmie przyznano stronie rządowej, a 35% opozycji. Wybory do Senatu były w pełni wolne."
  },
  {
    "id": "R06_HARD_08",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Stan wojenny zawieszono 31 XII 1982 r., a zniesiono 22 VII 1983 r. po __________ dniach.",
    "options": null,
    "answer": [
      "586"
    ],
    "explanation": "Stan wojenny zniesiono 22 VII 1983 r. po 586 dniach."
  },
  {
    "id": "R06_HARD_09",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W referendum akcesyjnym do UE z 7-8 VI 2003 r. frekwencja wyniosła __________, a poparcie dla członkostwa __________.",
    "options": null,
    "answer": [
      "58,9%",
      "77,45%"
    ],
    "explanation": "W referendum akcesyjnym frekwencja wyniosła 58,9%, a poparcie dla członkostwa 77,45%."
  },
  {
    "id": "R06_HARD_10",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywały się ćwiczenia wojsk Układu Warszawskiego prowadzone w Polsce w 1981 r., które miały przestraszyć opozycję?",
    "options": null,
    "answer": "Sojusz 81",
    "explanation": "W 1981 r. w Polsce trwały ćwiczenia wojsk Układu Warszawskiego pod nazwą Sojusz 81."
  },
  {
    "id": "R06_HARD_11",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż organizację, która nie należy do grupy opozycyjnych organizacji lat 70.: KOR, ROPCiO, Ruch Młodej Polski, Krajowa Rada Narodowa.",
    "options": null,
    "answer": "Krajowa Rada Narodowa",
    "explanation": "KOR, ROPCiO i Ruch Młodej Polski były organizacjami opozycyjnymi lat 70. KRN była strukturą utworzoną przez PPR w 1944 r."
  },
  {
    "id": "R06_HARD_12",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W latach 90. sprawdza się przeszłość osoby pełniącej funkcję publiczną, aby ustalić, czy w PRL współpracowała ze Służbą Bezpieczeństwa. Jak nazywa się ta procedura?",
    "options": [
      "lustracja",
      "reglamentacja",
      "nacjonalizacja",
      "kolektywizacja",
      "internowanie",
      "dekompresja"
    ],
    "answer": 0,
    "explanation": "Lustracja to weryfikacja przeszłości osób zajmujących stanowiska państwowe pod kątem współpracy ze Służbami Bezpieczeństwa."
  },
  {
    "id": "R06_HARD_13",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz postać z rolą w przemianach 1989-1990.",
    "options": null,
    "left": [
      "Wojciech Jaruzelski",
      "Tadeusz Mazowiecki",
      "Leszek Balcerowicz",
      "Ryszard Kaczorowski"
    ],
    "right": [
      "prezydent wybrany przez Zgromadzenie Narodowe 19 VII 1989 r.",
      "premier od 24 VIII 1989 r.",
      "minister finansów prowadzący reformy gospodarcze",
      "ostatni prezydent RP na wychodźstwie przekazujący insygnia Lechowi Wałęsie"
    ],
    "answer": {
      "Wojciech Jaruzelski": "prezydent wybrany przez Zgromadzenie Narodowe 19 VII 1989 r.",
      "Tadeusz Mazowiecki": "premier od 24 VIII 1989 r.",
      "Leszek Balcerowicz": "minister finansów prowadzący reformy gospodarcze",
      "Ryszard Kaczorowski": "ostatni prezydent RP na wychodźstwie przekazujący insygnia Lechowi Wałęsie"
    },
    "explanation": "Jaruzelski został prezydentem w lipcu 1989 r., Mazowiecki premierem w sierpniu, Balcerowicz prowadził reformy gospodarcze, a Kaczorowski przekazał insygnia władzy prezydenckiej Lechowi Wałęsie."
  },
  {
    "id": "R06_HARD_14",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do ustaleń Okrągłego Stołu albo do wydarzeń po wyborach 4 VI 1989 r.",
    "options": null,
    "items": [
      "częściowo wolne wybory do Sejmu",
      "przywrócenie Senatu i urzędu prezydenta",
      "dostęp opozycji do mediów",
      "wybór Wojciecha Jaruzelskiego na prezydenta",
      "powołanie Tadeusza Mazowieckiego na premiera",
      "przywrócenie nazwy Rzeczpospolita Polska"
    ],
    "categories": [
      "ustalenia Okrągłego Stołu",
      "wydarzenia po wyborach 4 VI 1989"
    ],
    "answer": {
      "ustalenia Okrągłego Stołu": [
        "częściowo wolne wybory do Sejmu",
        "przywrócenie Senatu i urzędu prezydenta",
        "dostęp opozycji do mediów"
      ],
      "wydarzenia po wyborach 4 VI 1989": [
        "wybór Wojciecha Jaruzelskiego na prezydenta",
        "powołanie Tadeusza Mazowieckiego na premiera",
        "przywrócenie nazwy Rzeczpospolita Polska"
      ]
    },
    "explanation": "Okrągły Stół ustalił zasady zmian politycznych, a po wyborach nastąpiły wybór prezydenta, powołanie rządu Mazowieckiego i dalsze zmiany ustrojowe.",
    "image": "r06_okragly_stol.jpg"
  },
  {
    "id": "R06_HARD_15",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia dotyczące relacji państwo-Kościół i Jana Pawła II w porządku chronologicznym.",
    "options": null,
    "items": [
      "Pierwsza pielgrzymka Jana Pawła II do Polski",
      "List biskupów polskich do niemieckich",
      "Aresztowanie prymasa Stefana Wyszyńskiego",
      "Wybór Karola Wojtyły na papieża",
      "Zerwanie stosunków z Watykanem"
    ],
    "answer": [
      "Zerwanie stosunków z Watykanem",
      "Aresztowanie prymasa Stefana Wyszyńskiego",
      "List biskupów polskich do niemieckich",
      "Wybór Karola Wojtyły na papieża",
      "Pierwsza pielgrzymka Jana Pawła II do Polski"
    ],
    "explanation": "Stosunki z Watykanem zerwano w 1945 r., Wyszyńskiego aresztowano w 1953 r., list biskupów pochodzi z 1965 r., Karol Wojtyła został papieżem w 1978 r., a pierwszą pielgrzymkę do Polski odbył w 1979 r."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r06",
  number: 6,
  title: "Polska po II wojnie światowej",
  icon: "🇵🇱",
  sectionOrder: [
    "Przejęcie władzy i stalinizm",
    "Październik 1956 i rządy Gomułki",
    "Dekada Gierka, opozycja i Kościół",
    "Solidarność, stan wojenny i upadek PRL",
    "III Rzeczpospolita i integracja z Zachodem"
  ],
  sectionIcons: {
    "Przejęcie władzy i stalinizm": "🏛️",
    "Październik 1956 i rządy Gomułki": "🔄",
    "Dekada Gierka, opozycja i Kościół": "🏗️",
    "Solidarność, stan wojenny i upadek PRL": "✊",
    "III Rzeczpospolita i integracja z Zachodem": "🌍"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
