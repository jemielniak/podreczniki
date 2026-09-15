// Skróty sekcji (do identyfikatorów ćwiczeń):
//   WET  = Rzeczpospolita pod rządami Wettinów
//   ROZ  = Pierwszy rozbiór Polski
//   KUL  = Kultura polskiego oświecenia
//   KON  = Sejm Wielki i Konstytucja 3 maja
//   KOS  = Powstanie kościuszkowskie i trzeci rozbiór Polski
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R05_WET_01",
    "section": "Rzeczpospolita pod rządami Wettinów",
    "type": "single_choice",
    "prompt": "Jaki związek polityczny połączył Rzeczpospolitą i Saksonię po objęciu polskiego tronu przez Augusta II Mocnego?",
    "options": [
      "unia realna",
      "unia personalna",
      "federacja",
      "konfederacja",
      "aneksja",
      "sojusz wojskowy"
    ],
    "answer": 1,
    "image": "r05_august_ii_mocny.jpg",
    "explanation": "August II był jednocześnie królem Polski i księciem Saksonii, dlatego oba państwa połączyła unia personalna."
  },
  {
    "id": "R05_WET_02",
    "section": "Rzeczpospolita pod rządami Wettinów",
    "type": "true_false",
    "prompt": "August II Mocny zawarł w imieniu Saksonii przymierze z Rosją podczas wojny północnej.",
    "options": null,
    "answer": true,
    "image": "r05_august_ii_mocny.jpg",
    "explanation": "August II liczył, że zwycięstwo nad Szwecją wzmocni jego pozycję w Rzeczypospolitej i ułatwi przeprowadzenie reform."
  },
  {
    "id": "R05_WET_03",
    "section": "Rzeczpospolita pod rządami Wettinów",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z epoki saskiej w porządku chronologicznym.",
    "options": null,
    "items": [
      "Sejm niemy",
      "Śmierć Augusta II Mocnego",
      "Objęcie tronu przez Augusta II Mocnego",
      "Powrót Augusta II na tron po bitwie pod Połtawą"
    ],
    "answer": [
      "Objęcie tronu przez Augusta II Mocnego",
      "Powrót Augusta II na tron po bitwie pod Połtawą",
      "Sejm niemy",
      "Śmierć Augusta II Mocnego"
    ],
    "explanation": "August II objął tron w 1697 roku, odzyskał go po bitwie pod Połtawą w 1709 roku, sejm niemy odbył się w 1717 roku, a August II zmarł w 1733 roku."
  },
  {
    "id": "R05_WET_04",
    "section": "Rzeczpospolita pod rządami Wettinów",
    "type": "single_choice",
    "prompt": "Dlaczego sejm z 1717 roku nazwano niemym?",
    "options": [
      "obrady odbyły się bez obecności króla",
      "nie podjęto żadnych uchwał",
      "większość posłów nie znała języka polskiego",
      "zakazano większości uczestników zabierania głosu",
      "sejm obradował nocą",
      "obrady utajniono przed szlachtą"
    ],
    "answer": 3,
    "image": "r05_sejm_niemy.jpg",
    "explanation": "Aby zapobiec zerwaniu obrad, nie zezwolono posłom i senatorom na zabieranie głosu poza wyznaczonymi osobami."
  },
  {
    "id": "R05_WET_05",
    "section": "Rzeczpospolita pod rządami Wettinów",
    "type": "scenario",
    "prompt": "Jest rok 1733. Po śmierci Augusta II część szlachty wybiera Stanisława Leszczyńskiego, lecz do kraju wkraczają wojska rosyjskie. Kogo pod ich osłoną ogłoszono królem?",
    "options": [
      "Augusta III Sasa",
      "Stanisława Konarskiego",
      "Stanisława Augusta Poniatowskiego",
      "Józefa Załuskiego",
      "Jana III Sobieskiego",
      "Tadeusza Rejtana"
    ],
    "answer": 0,
    "explanation": "Rosja wsparła syna Augusta II, który objął władzę jako August III Sas. Między zwolennikami obu kandydatów wybuchła wojna domowa."
  },
  {
    "id": "R05_WET_06",
    "section": "Rzeczpospolita pod rządami Wettinów",
    "type": "riddle",
    "prompt": "Jak brzmi powiedzenie powstałe w czasie walk o tron między zwolennikami Augusta III i Stanisława Leszczyńskiego, oznaczające częste zmienianie zdania i sprzeczne poglądy?",
    "options": null,
    "answer": "Od Sasa do Lasa",
    "altAnswers": [
      "Od Sasa do Lasa",
      "od Sasa do Lasa",
      "od sasa do lasa"
    ],
    "explanation": "Powiedzenie Od Sasa do Lasa wiązano z częstym przechodzeniem magnatów i szlachty z jednego stronnictwa do drugiego."
  },
  {
    "id": "R05_WET_07",
    "section": "Rzeczpospolita pod rządami Wettinów",
    "type": "multi_select",
    "prompt": "Zaznacz przejawy osłabienia Rzeczypospolitej za panowania Augusta III.",
    "options": [
      "zrywanie większości sejmów",
      "brak ważnych reform przez około 30 lat",
      "stacjonowanie wojsk rosyjskich",
      "rabowanie zachodnich ziem przez armię pruską",
      "utworzenie Operalni",
      "ożywienie handlu z Saksonią i Turcją"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Za Augusta III większość sejmów zrywano, przez około 30 lat nie przeprowadzono ważnych reform, w kraju stacjonowały wojska rosyjskie, a zachodnie ziemie rabowała armia pruska."
  },
  {
    "id": "R05_WET_08",
    "section": "Rzeczpospolita pod rządami Wettinów",
    "type": "sort",
    "prompt": "Przyporządkuj zjawiska z czasów Augusta III do odpowiednich kategorii.",
    "options": null,
    "items": [
      "zrywanie sejmów",
      "stacjonowanie wojsk rosyjskich",
      "ożywienie handlu zagranicznego",
      "wzniesienie Operalni",
      "rabowanie zachodnich ziem przez armię pruską",
      "stypendia na studia za granicą"
    ],
    "categories": [
      "osłabienie państwa",
      "odbudowa gospodarki i rozwój kultury"
    ],
    "answer": {
      "osłabienie państwa": [
        "zrywanie sejmów",
        "stacjonowanie wojsk rosyjskich",
        "rabowanie zachodnich ziem przez armię pruską"
      ],
      "odbudowa gospodarki i rozwój kultury": [
        "ożywienie handlu zagranicznego",
        "wzniesienie Operalni",
        "stypendia na studia za granicą"
      ]
    },
    "explanation": "Panowanie Augusta III łączyło polityczne osłabienie państwa z okresem pokoju sprzyjającym odbudowie gospodarki i rozwojowi kultury."
  },
  {
    "id": "R05_WET_09",
    "section": "Rzeczpospolita pod rządami Wettinów",
    "type": "match",
    "prompt": "Połącz osobę lub instytucję z właściwym dziełem albo przedsięwzięciem.",
    "options": null,
    "left": [
      "Stanisław Leszczyński",
      "Stanisław Konarski",
      "Józef i Andrzej Załuscy"
    ],
    "right": [
      "Głos wolny wolność ubezpieczający",
      "O skutecznym rad sposobie",
      "Biblioteka Załuskich"
    ],
    "answer": {
      "Stanisław Leszczyński": "Głos wolny wolność ubezpieczający",
      "Stanisław Konarski": "O skutecznym rad sposobie",
      "Józef i Andrzej Załuscy": "Biblioteka Załuskich"
    },
    "explanation": "Stanisław Leszczyński ogłosił Głos wolny wolność ubezpieczający, Stanisław Konarski napisał O skutecznym rad sposobie, a bracia Załuscy założyli pierwszą bibliotekę publiczną w Polsce."
  },
  {
    "id": "R05_WET_10",
    "section": "Rzeczpospolita pod rządami Wettinów",
    "type": "fill_in",
    "prompt": "W roku __________ Stanisław Konarski założył szkołę __________, w której kształcono synów magnatów i bogatej szlachty.",
    "options": null,
    "answer": [
      "1740",
      "Collegium Nobilium"
    ],
    "altAnswers": [
      [
        "1740",
        "1740 r.",
        "1740 roku"
      ],
      [
        "Collegium Nobilium",
        "collegium nobilium"
      ]
    ],
    "image": "r05_collegium_nobilium.jpg",
    "explanation": "Collegium Nobilium powstało w 1740 roku i miało kształcić młodych szlachciców w poczuciu obywatelskiej odpowiedzialności za losy kraju."
  },
  {
    "id": "R05_WET_11",
    "section": "Rzeczpospolita pod rządami Wettinów",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do wad ustroju krytykowanych przez Stanisława Konarskiego: liberum veto, wolna elekcja, konfederacje, dziedziczność tronu.",
    "options": null,
    "answer": "dziedziczność tronu",
    "explanation": "Konarski krytykował liberum veto, wolną elekcję i konfederacje. Dziedziczność tronu nie należała do krytykowanych przez niego elementów ustroju."
  },
  {
    "id": "R05_ROZ_01",
    "section": "Pierwszy rozbiór Polski",
    "type": "single_choice",
    "prompt": "Kto został wybrany na króla Polski w 1764 roku dzięki poparciu Katarzyny II i Familii?",
    "options": [
      "Stanisław August Poniatowski",
      "August III Sas",
      "Stanisław Leszczyński",
      "Tadeusz Kościuszko",
      "Stanisław Małachowski",
      "Hugo Kołłątaj"
    ],
    "answer": 0,
    "image": "r05_stanislaw_august_poniatowski.jpg",
    "explanation": "W 1764 roku królem został Stanisław August Poniatowski, wspierany przez carycę Katarzynę II oraz stronnictwo Czartoryskich zwane Familią."
  },
  {
    "id": "R05_ROZ_02",
    "section": "Pierwszy rozbiór Polski",
    "type": "multi_select",
    "prompt": "Zaznacz reformy przeprowadzone w pierwszych latach panowania Stanisława Augusta Poniatowskiego.",
    "options": [
      "reforma finansów i nowe monety",
      "ujednolicanie miar i wag",
      "zniesienie prywatnych ceł",
      "utworzenie Szkoły Rycerskiej",
      "wprowadzenie dziedziczności tronu",
      "zniesienie pańszczyzny w całym kraju"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r05_stanislaw_august_poniatowski.jpg",
    "explanation": "Wprowadzono reformę finansów, nowe monety, ujednolicano miary i wagi, zniesiono prywatne cła i utworzono Szkołę Rycerską."
  },
  {
    "id": "R05_ROZ_03",
    "section": "Pierwszy rozbiór Polski",
    "type": "match",
    "prompt": "Połącz nazwę z właściwym znaczeniem z początków panowania Stanisława Augusta.",
    "options": null,
    "left": [
      "Familia",
      "Szkoła Rycerska",
      "Katarzyna II"
    ],
    "right": [
      "stronnictwo rodu Czartoryskich",
      "szkoła przyszłych oficerów i urzędników",
      "władczyni Rosji popierająca elekcję Poniatowskiego"
    ],
    "answer": {
      "Familia": "stronnictwo rodu Czartoryskich",
      "Szkoła Rycerska": "szkoła przyszłych oficerów i urzędników",
      "Katarzyna II": "władczyni Rosji popierająca elekcję Poniatowskiego"
    },
    "explanation": "Familia była stronnictwem Czartoryskich, Szkoła Rycerska kształciła przyszłych oficerów i urzędników, a Katarzyna II wspierała elekcję Poniatowskiego."
  },
  {
    "id": "R05_ROZ_04",
    "section": "Pierwszy rozbiór Polski",
    "type": "odd_one_out",
    "prompt": "Co nie należało do praw kardynalnych narzuconych w Rzeczypospolitej: wolna elekcja, liberum veto, prawo wypowiadania posłuszeństwa królowi, dziedziczność tronu.",
    "options": null,
    "answer": "dziedziczność tronu",
    "explanation": "Do praw kardynalnych zaliczono wolną elekcję, liberum veto i prawo wypowiadania posłuszeństwa królowi. Dziedziczność tronu do nich nie należała."
  },
  {
    "id": "R05_ROZ_05",
    "section": "Pierwszy rozbiór Polski",
    "type": "fill_in",
    "prompt": "W roku __________ szlachta zawiązała konfederację w miasteczku __________ na Podolu.",
    "options": null,
    "answer": [
      "1768",
      "Bar"
    ],
    "altAnswers": [
      [
        "1768",
        "1768 r.",
        "1768 roku"
      ],
      [
        "Bar",
        "Barze",
        "bar"
      ]
    ],
    "image": "r05_konfederaci_barscy.jpg",
    "explanation": "Konfederacja barska została zawiązana w 1768 roku w Barze na Podolu."
  },
  {
    "id": "R05_ROZ_06",
    "section": "Pierwszy rozbiór Polski",
    "type": "multi_select",
    "prompt": "Zaznacz cele i motywy konfederatów barskich.",
    "options": [
      "sprzeciw wobec ingerencji Rosji",
      "obrona niezależności Rzeczypospolitej",
      "obrona katolicyzmu",
      "obrona przywilejów szlacheckich",
      "poparcie dla rosyjskiej gwarancji praw kardynalnych",
      "wprowadzenie dziedzicznego tronu"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r05_konfederaci_barscy.jpg",
    "explanation": "Konfederaci walczyli o niezależność Rzeczypospolitej od ingerencji obcych państw, szczególnie Rosji, a także w obronie katolicyzmu i przywilejów szlacheckich."
  },
  {
    "id": "R05_ROZ_07",
    "section": "Pierwszy rozbiór Polski",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia prowadzące do pierwszego rozbioru i jego zatwierdzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "Sejm rozbiorowy",
      "Zawiązanie konfederacji barskiej",
      "Pierwszy rozbiór Polski",
      "Elekcja Stanisława Augusta Poniatowskiego"
    ],
    "answer": [
      "Elekcja Stanisława Augusta Poniatowskiego",
      "Zawiązanie konfederacji barskiej",
      "Pierwszy rozbiór Polski",
      "Sejm rozbiorowy"
    ],
    "explanation": "Stanisław August objął tron w 1764 roku, konfederacja barska wybuchła w 1768 roku, pierwszy rozbiór nastąpił w 1772 roku, a sejm rozbiorowy zatwierdził go w 1773 roku."
  },
  {
    "id": "R05_ROZ_08",
    "section": "Pierwszy rozbiór Polski",
    "type": "single_choice",
    "prompt": "Które państwo podczas pierwszego rozbioru zajęło Warmię oraz Pomorze Gdańskie bez Gdańska i Torunia?",
    "options": [
      "Prusy",
      "Rosja",
      "Austria",
      "Saksonia",
      "Szwecja",
      "Francja"
    ],
    "answer": 0,
    "explanation": "Prusy zajęły Warmię i Pomorze Gdańskie, pozostawiając poza zaborem Gdańsk i Toruń."
  },
  {
    "id": "R05_ROZ_09",
    "section": "Pierwszy rozbiór Polski",
    "type": "scenario",
    "prompt": "Jest rok 1773. Poseł próbuje własnym ciałem zagrodzić innym drogę do sali senatu, aby nie dopuścić do zatwierdzenia traktatu rozbiorowego. Kto to?",
    "options": [
      "Tadeusz Rejtan",
      "Adam Poniński",
      "Stanisław Małachowski",
      "Ignacy Krasicki",
      "Jan Kiliński",
      "Wojciech Bogusławski"
    ],
    "answer": 0,
    "explanation": "Tadeusz Rejtan zasłynął protestem przeciw zatwierdzeniu pierwszego rozbioru Polski przez sejm rozbiorowy."
  },
  {
    "id": "R05_ROZ_10",
    "section": "Pierwszy rozbiór Polski",
    "type": "true_false",
    "prompt": "Pierwszego rozbioru Polski w 1772 roku dokonały Rosja, Prusy i Austria.",
    "options": null,
    "answer": true,
    "image": "r05_rejtan_sejm_rozbiorowy.jpg",
    "explanation": "Trzy sąsiednie mocarstwa wykorzystały osłabienie Rzeczypospolitej po klęsce konfederacji barskiej i zawarły traktat rozbiorowy."
  },
  {
    "id": "R05_ROZ_11",
    "section": "Pierwszy rozbiór Polski",
    "type": "match",
    "prompt": "Połącz państwo z obszarem zajętym podczas pierwszego rozbioru Polski.",
    "options": null,
    "left": [
      "Prusy",
      "Austria",
      "Rosja"
    ],
    "right": [
      "Warmia i Pomorze Gdańskie bez Gdańska i Torunia",
      "południowa Małopolska z Lwowem",
      "ziemie białoruskie nad górną Dźwiną i Dnieprem"
    ],
    "answer": {
      "Prusy": "Warmia i Pomorze Gdańskie bez Gdańska i Torunia",
      "Austria": "południowa Małopolska z Lwowem",
      "Rosja": "ziemie białoruskie nad górną Dźwiną i Dnieprem"
    },
    "explanation": "Prusy zajęły Warmię i Pomorze Gdańskie bez Gdańska i Torunia, Austria południową Małopolskę z Lwowem, a Rosja ziemie białoruskie nad górną Dźwiną i Dnieprem."
  },
  {
    "id": "R05_KUL_01",
    "section": "Kultura polskiego oświecenia",
    "type": "single_choice",
    "prompt": "Kto był autorem licznych bajek i fraszek oraz pierwszej polskiej powieści Mikołaja Doświadczyńskiego przypadki?",
    "options": [
      "Ignacy Krasicki",
      "Julian Ursyn Niemcewicz",
      "Wojciech Bogusławski",
      "Stanisław Staszic",
      "Hugo Kołłątaj",
      "Dominik Merlini"
    ],
    "answer": 0,
    "explanation": "Ignacy Krasicki należał do najwybitniejszych pisarzy polskiego oświecenia i napisał Mikołaja Doświadczyńskiego przypadki."
  },
  {
    "id": "R05_KUL_02",
    "section": "Kultura polskiego oświecenia",
    "type": "multi_select",
    "prompt": "Zaznacz poglądy głoszone przez Hugona Kołłątaja i Stanisława Staszica.",
    "options": [
      "krytyka wolnej elekcji",
      "krytyka liberum veto",
      "ograniczenie przywilejów szlachty",
      "większe prawa dla mieszczan i chłopów",
      "utrzymanie wszystkich przywilejów magnaterii",
      "powrót do nauczania wyłącznie po łacinie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Obaj krytykowali wolną elekcję i liberum veto, domagali się ograniczenia przywilejów szlachty oraz większych praw dla mieszczan i chłopów."
  },
  {
    "id": "R05_KUL_03",
    "section": "Kultura polskiego oświecenia",
    "type": "single_choice",
    "prompt": "W którym roku z inicjatywy Stanisława Augusta Poniatowskiego utworzono Teatr Narodowy?",
    "options": [
      "1740",
      "1747",
      "1765",
      "1772",
      "1773",
      "1791"
    ],
    "answer": 2,
    "image": "r05_teatr_narodowy.jpg",
    "explanation": "Teatr Narodowy powstał w 1765 roku i prezentował między innymi sztuki ośmieszające sarmackie zwyczaje oraz popularyzujące reformy."
  },
  {
    "id": "R05_KUL_04",
    "section": "Kultura polskiego oświecenia",
    "type": "match",
    "prompt": "Połącz twórcę z jego dziełem.",
    "options": null,
    "left": [
      "Julian Ursyn Niemcewicz",
      "Wojciech Bogusławski",
      "Ignacy Krasicki"
    ],
    "right": [
      "Powrót posła",
      "Cud mniemany, czyli Krakowiacy i górale",
      "Mikołaja Doświadczyńskiego przypadki"
    ],
    "answer": {
      "Julian Ursyn Niemcewicz": "Powrót posła",
      "Wojciech Bogusławski": "Cud mniemany, czyli Krakowiacy i górale",
      "Ignacy Krasicki": "Mikołaja Doświadczyńskiego przypadki"
    },
    "explanation": "Niemcewicz napisał Powrót posła, Bogusławski Cud mniemany, czyli Krakowiacy i górale, a Krasicki Mikołaja Doświadczyńskiego przypadki."
  },
  {
    "id": "R05_KUL_05",
    "section": "Kultura polskiego oświecenia",
    "type": "riddle",
    "prompt": "Jak nazywał się nadworny malarz Stanisława Augusta Poniatowskiego, zwany Canalettem, który stworzył liczne widoki XVIII-wiecznej Warszawy?",
    "options": null,
    "answer": "Bernardo Bellotto",
    "altAnswers": [
      "Bernardo Bellotto",
      "Bellotto",
      "bernardo bellotto"
    ],
    "explanation": "Canaletto, czyli Bernardo Bellotto, pozostawił szczegółowe widoki Warszawy i pałacu w Wilanowie."
  },
  {
    "id": "R05_KUL_06",
    "section": "Kultura polskiego oświecenia",
    "type": "multi_select",
    "prompt": "Zaznacz działania Stanisława Augusta Poniatowskiego jako mecenasa kultury.",
    "options": [
      "sprowadzanie zagranicznych artystów",
      "gromadzenie obrazów rzeźb monet i medali",
      "wspieranie pisma Monitor",
      "organizowanie obiadów czwartkowych",
      "założenie Collegium Nobilium",
      "likwidacja Teatru Narodowego"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Król sprowadzał artystów, kolekcjonował dzieła sztuki, monety i medale, wspierał Monitor oraz organizował spotkania artystów i uczonych zwane obiadami czwartkowymi."
  },
  {
    "id": "R05_KUL_07",
    "section": "Kultura polskiego oświecenia",
    "type": "single_choice",
    "prompt": "Jaką funkcję pełnił pierwotnie budynek późniejszego Pałacu Na Wodzie w Łazienkach Królewskich?",
    "options": [
      "pawilon kąpielowy",
      "arsenał",
      "siedziba sejmu",
      "biblioteka publiczna",
      "mennica",
      "szkoła wojskowa"
    ],
    "answer": 0,
    "image": "r05_palac_na_wodzie.jpg",
    "explanation": "Pierwotnie był to pawilon kąpielowy nazywany Łazienką. Po przebudowie stał się letnią rezydencją króla."
  },
  {
    "id": "R05_KUL_08",
    "section": "Kultura polskiego oświecenia",
    "type": "true_false",
    "prompt": "Klasycystyczne budowle w Polsce wzorowano na zabytkach starożytnej Grecji i Rzymu, a w ich architekturze często stosowano kolumny i linie proste.",
    "options": null,
    "answer": true,
    "image": "r05_palac_na_wodzie.jpg",
    "explanation": "Klasycyzm nawiązywał do architektury antycznej; w odróżnieniu od baroku dominowały w nim linie proste, a częstym elementem były kolumny."
  },
  {
    "id": "R05_KUL_09",
    "section": "Kultura polskiego oświecenia",
    "type": "fill_in",
    "prompt": "Komisję Edukacji Narodowej powołano w roku __________. W jej szkołach lekcje prowadzono w języku __________ zamiast po łacinie.",
    "options": null,
    "answer": [
      "1773",
      "polskim"
    ],
    "altAnswers": [
      [
        "1773",
        "1773 r.",
        "1773 roku"
      ],
      [
        "polskim",
        "polski",
        "języku polskim"
      ]
    ],
    "image": "r05_komisja_edukacji_narodowej.jpg",
    "explanation": "Komisję Edukacji Narodowej utworzono w 1773 roku. Szkoły miały dawać praktyczną wiedzę i wychowywać mądrych obywateli i patriotów, a nauczanie odbywało się po polsku."
  },
  {
    "id": "R05_KUL_10",
    "section": "Kultura polskiego oświecenia",
    "type": "sort",
    "prompt": "Przyporządkuj elementy reformy szkolnictwa do właściwej kategorii.",
    "options": null,
    "items": [
      "nauka czytania",
      "nauka pisania",
      "proste obliczenia",
      "zasady higieny",
      "opracowywanie nowoczesnych książek szkolnych"
    ],
    "categories": [
      "szkoły parafialne",
      "Towarzystwo do Ksiąg Elementarnych"
    ],
    "answer": {
      "szkoły parafialne": [
        "nauka czytania",
        "nauka pisania",
        "proste obliczenia",
        "zasady higieny"
      ],
      "Towarzystwo do Ksiąg Elementarnych": [
        "opracowywanie nowoczesnych książek szkolnych"
      ]
    },
    "image": "r05_komisja_edukacji_narodowej.jpg",
    "explanation": "W szkołach parafialnych uczono podstawowych i praktycznych umiejętności, a Towarzystwo do Ksiąg Elementarnych opracowywało nowoczesne książki szkolne."
  },
  {
    "id": "R05_KUL_11",
    "section": "Kultura polskiego oświecenia",
    "type": "riddle",
    "prompt": "Kto na zlecenie Komisji Edukacji Narodowej opracował pierwszą gramatykę języka polskiego przeznaczoną do nauczania?",
    "options": null,
    "answer": "Onufry Kopczyński",
    "altAnswers": [
      "Onufry Kopczyński",
      "Kopczyński",
      "onufry kopczyński"
    ],
    "explanation": "Pierwszą gramatykę języka polskiego przeznaczoną do nauczania przygotował Onufry Kopczyński."
  },
  {
    "id": "R05_KON_01",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "single_choice",
    "prompt": "W jakich latach obradował Sejm Wielki, nazywany też Sejmem Czteroletnim?",
    "options": [
      "1764-1768",
      "1768-1772",
      "1773-1776",
      "1788-1792",
      "1791-1795",
      "1792-1794"
    ],
    "answer": 3,
    "explanation": "Sejm Wielki obradował w Warszawie od 1788 do 1792 roku."
  },
  {
    "id": "R05_KON_02",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "fill_in",
    "prompt": "Sejm Wielki planował zwiększyć armię z __________ do __________ tysięcy żołnierzy, ale uzyskane środki wystarczyły ostatecznie na około __________ tysięcy.",
    "options": null,
    "answer": [
      "24",
      "100",
      "65"
    ],
    "altAnswers": [
      [
        "24",
        "24 tys.",
        "24 tysiące"
      ],
      [
        "100",
        "100 tys.",
        "100 tysięcy"
      ],
      [
        "65",
        "65 tys.",
        "65 tysięcy"
      ]
    ],
    "explanation": "Plan zakładał wzrost armii z 24 do 100 tysięcy żołnierzy. Ostatecznie środki pozwoliły powołać około 65 tysięcy."
  },
  {
    "id": "R05_KON_03",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "multi_select",
    "prompt": "Zaznacz reformy uchwalone podczas obrad Sejmu Wielkiego przed przyjęciem Konstytucji 3 maja.",
    "options": [
      "powiększenie armii",
      "stałe podatki dla szlachty i duchowieństwa",
      "prawo o miastach",
      "możliwość nabywania majątków ziemskich przez mieszczan z miast królewskich",
      "przywrócenie liberum veto",
      "likwidacja Szkoły Rycerskiej"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Sejm dążył do rozbudowy armii, obciążył stałymi podatkami szlachtę i duchowieństwo oraz uchwalił prawo o miastach zwiększające możliwości mieszczan z miast królewskich."
  },
  {
    "id": "R05_KON_04",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "single_choice",
    "prompt": "Kto był marszałkiem Sejmu Wielkiego?",
    "options": [
      "Stanisław Małachowski",
      "Stanisław Szczęsny Potocki",
      "Franciszek Ksawery Branicki",
      "Seweryn Rzewuski",
      "Tadeusz Rejtan",
      "Jan Kiliński"
    ],
    "answer": 0,
    "explanation": "Marszałkiem Sejmu Wielkiego był Stanisław Małachowski, jeden z ważnych zwolenników reform."
  },
  {
    "id": "R05_KON_05",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "single_choice",
    "prompt": "Którego dnia uchwalono Konstytucję 3 maja?",
    "options": [
      "3 maja 1791 roku",
      "24 marca 1794 roku",
      "4 kwietnia 1794 roku",
      "10 października 1794 roku",
      "4 listopada 1794 roku",
      "7 maja 1794 roku"
    ],
    "answer": 0,
    "image": "r05_konstytucja_3_maja.jpg",
    "explanation": "Projekt konstytucji przygotowany przez zwolenników reform w porozumieniu z królem został przyjęty 3 maja 1791 roku."
  },
  {
    "id": "R05_KON_06",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "multi_select",
    "prompt": "Zaznacz najważniejsze zmiany wprowadzone przez Konstytucję 3 maja.",
    "options": [
      "zniesienie wolnej elekcji",
      "zniesienie liberum veto",
      "dziedziczność tronu",
      "trójpodział władzy",
      "ochrona prawna chłopów",
      "przywrócenie praw kardynalnych"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "r05_konstytucja_3_maja.jpg",
    "explanation": "Konstytucja zniosła wolną elekcję i liberum veto, wprowadziła dziedziczność tronu i trójpodział władzy, ograniczyła prawa polityczne szlachty gołoty, zwiększyła prawa mieszczan z miast królewskich i objęła chłopów ochroną prawną."
  },
  {
    "id": "R05_KON_07",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "match",
    "prompt": "Połącz rodzaj władzy z organem, który ją sprawował zgodnie z Konstytucją 3 maja.",
    "options": null,
    "left": [
      "władza ustawodawcza",
      "władza wykonawcza",
      "władza sądownicza"
    ],
    "right": [
      "sejm",
      "król i Straż Praw",
      "niezawisłe sądy"
    ],
    "answer": {
      "władza ustawodawcza": "sejm",
      "władza wykonawcza": "król i Straż Praw",
      "władza sądownicza": "niezawisłe sądy"
    },
    "explanation": "Konstytucja przyjęła trójpodział władzy: ustawodawczą sprawował sejm, wykonawczą król i Straż Praw, a sądowniczą niezawisłe sądy."
  },
  {
    "id": "R05_KON_08",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "scenario",
    "prompt": "Jest rok 1792. Przeciwnicy reform uzgadniają konfederację z Katarzyną II w Petersburgu, a następnie ogłaszają ją na terytorium Rzeczypospolitej. W jakim miasteczku ją ogłoszono?",
    "options": [
      "Targowica",
      "Bar",
      "Połaniec",
      "Racławice",
      "Grodno",
      "Zieleńce"
    ],
    "answer": 0,
    "image": "r05_targowica.jpg",
    "explanation": "Konfederację uzgodniono w Petersburgu, lecz oficjalnie ogłoszono ją w miasteczku Targowica."
  },
  {
    "id": "R05_KON_09",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "match",
    "prompt": "Połącz postać z wydarzeniem wojny polsko-rosyjskiej 1792 roku.",
    "options": null,
    "left": [
      "Józef Poniatowski",
      "Tadeusz Kościuszko",
      "Stanisław August Poniatowski"
    ],
    "right": [
      "zwycięstwo pod Zieleńcami",
      "obrona pod Dubienką",
      "przystąpienie do konfederacji targowickiej"
    ],
    "answer": {
      "Józef Poniatowski": "zwycięstwo pod Zieleńcami",
      "Tadeusz Kościuszko": "obrona pod Dubienką",
      "Stanisław August Poniatowski": "przystąpienie do konfederacji targowickiej"
    },
    "explanation": "Józef Poniatowski dowodził pod Zieleńcami, Tadeusz Kościuszko pod Dubienką, a Stanisław August po rosyjskiej presji przystąpił do konfederacji targowickiej i nakazał zakończenie walk."
  },
  {
    "id": "R05_KON_10",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "true_false",
    "prompt": "W wojnie 1792 roku armia rosyjska liczyła około 100 tysięcy żołnierzy, a wojska polskie około 60 tysięcy.",
    "options": null,
    "answer": true,
    "explanation": "Targowiczanie wezwali armię rosyjską liczącą około 100 tysięcy żołnierzy. Polska armia miała około 60 tysięcy."
  },
  {
    "id": "R05_KON_11",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z upadkiem reform Sejmu Wielkiego w porządku chronologicznym.",
    "options": null,
    "items": [
      "Drugi rozbiór Polski",
      "Wojna polsko-rosyjska",
      "Uchwalenie Konstytucji 3 maja",
      "Ogłoszenie konfederacji targowickiej"
    ],
    "answer": [
      "Uchwalenie Konstytucji 3 maja",
      "Ogłoszenie konfederacji targowickiej",
      "Wojna polsko-rosyjska",
      "Drugi rozbiór Polski"
    ],
    "explanation": "Najpierw uchwalono Konstytucję 3 maja w 1791 roku, potem zawiązano konfederację targowicką i wybuchła wojna w 1792 roku, a w 1793 roku dokonano drugiego rozbioru."
  },
  {
    "id": "R05_KON_12",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "single_choice",
    "prompt": "Co zrobił sejm w Grodnie w 1793 roku po drugim rozbiorze Polski?",
    "options": [
      "zatwierdził drugi rozbiór i cofnął większość reform Sejmu Wielkiego",
      "uchwalił Konstytucję 3 maja",
      "ogłosił powstanie kościuszkowskie",
      "zawiązał konfederację barską",
      "zniósł wolną elekcję",
      "ustanowił Komisję Edukacji Narodowej"
    ],
    "answer": 0,
    "explanation": "Zastraszeni lub przekupieni posłowie zatwierdzili drugi rozbiór, znieśli większość reform Sejmu Wielkiego, unieważnili Konstytucję 3 maja i przywrócili między innymi wolną elekcję oraz liberum veto."
  },
  {
    "id": "R05_KOS_01",
    "section": "Powstanie kościuszkowskie i trzeci rozbiór Polski",
    "type": "single_choice",
    "prompt": "Kiedy Tadeusz Kościuszko ogłosił w Krakowie wybuch powstania przeciw Rosji?",
    "options": [
      "24 marca 1794 roku",
      "4 kwietnia 1794 roku",
      "7 maja 1794 roku",
      "10 października 1794 roku",
      "4 listopada 1794 roku",
      "3 maja 1791 roku"
    ],
    "answer": 0,
    "image": "r05_kosynierzy_raclawice.jpg",
    "explanation": "Kościuszko ogłosił powstanie i złożył przysięgę na wierność ojczyźnie 24 marca 1794 roku."
  },
  {
    "id": "R05_KOS_02",
    "section": "Powstanie kościuszkowskie i trzeci rozbiór Polski",
    "type": "riddle",
    "prompt": "Jak inaczej nazywa się powstanie kościuszkowskie?",
    "options": null,
    "answer": "insurekcja kościuszkowska",
    "altAnswers": [
      "insurekcja kościuszkowska",
      "Insurekcja kościuszkowska",
      "insurekcja"
    ],
    "explanation": "Powstanie pod wodzą Tadeusza Kościuszki nazywa się również insurekcją kościuszkowską."
  },
  {
    "id": "R05_KOS_03",
    "section": "Powstanie kościuszkowskie i trzeci rozbiór Polski",
    "type": "scenario",
    "prompt": "4 kwietnia 1794 roku wojska Kościuszki spotykają Rosjan. W polskich szeregach szczególnie wyróżniają się chłopi uzbrojeni w kosy. Gdzie dochodzi do zwycięskiej bitwy?",
    "options": [
      "pod Racławicami",
      "pod Maciejowicami",
      "pod Dubienką",
      "pod Zieleńcami",
      "pod Połtawą",
      "pod Lanckoroną"
    ],
    "answer": 0,
    "explanation": "Pierwsza bitwa insurekcji z Rosjanami została stoczona pod Racławicami i zakończyła się polskim zwycięstwem."
  },
  {
    "id": "R05_KOS_04",
    "section": "Powstanie kościuszkowskie i trzeci rozbiór Polski",
    "type": "match",
    "prompt": "Połącz wydarzenie z datą z 1794 roku.",
    "options": null,
    "left": [
      "Bitwa pod Racławicami",
      "Bitwa pod Maciejowicami",
      "Szturm Pragi"
    ],
    "right": [
      "4 kwietnia",
      "10 października",
      "4 listopada"
    ],
    "answer": {
      "Bitwa pod Racławicami": "4 kwietnia",
      "Bitwa pod Maciejowicami": "10 października",
      "Szturm Pragi": "4 listopada"
    },
    "explanation": "Bitwa pod Racławicami odbyła się 4 kwietnia, klęska pod Maciejowicami 10 października, a szturm Pragi 4 listopada."
  },
  {
    "id": "R05_KOS_05",
    "section": "Powstanie kościuszkowskie i trzeci rozbiór Polski",
    "type": "multi_select",
    "prompt": "Zaznacz postanowienia Uniwersału połanieckiego dotyczące chłopów.",
    "options": [
      "wolność osobista",
      "gwarancja nieusuwalności z zajmowanej ziemi",
      "zmniejszenie pańszczyzny o połowę na czas walk",
      "zwolnienie z pańszczyzny powołanych do wojska",
      "natychmiastowe nadanie wszystkim chłopom pełnych praw politycznych",
      "całkowite zniesienie własności ziemskiej szlachty"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r05_uniwersal_polaniecki.jpg",
    "explanation": "Kościuszko przyznał chłopom wolność osobistą i gwarancję nieusuwalności z zajmowanej ziemi, zmniejszył pańszczyznę o połowę na czas walk i zwolnił z niej powołanych do wojska."
  },
  {
    "id": "R05_KOS_06",
    "section": "Powstanie kościuszkowskie i trzeci rozbiór Polski",
    "type": "true_false",
    "prompt": "Uniwersał połaniecki nie doprowadził do masowego udziału chłopów w powstaniu między innymi dlatego, że wiadomość nie dotarła wszędzie, część szlachty utrudniała werbunek, a brakowało broni i czasu na wyszkolenie.",
    "options": null,
    "answer": true,
    "explanation": "Mimo ustępstw Kościuszki udział chłopów pozostał mniejszy od oczekiwań właśnie z powodu tych przeszkód."
  },
  {
    "id": "R05_KOS_07",
    "section": "Powstanie kościuszkowskie i trzeci rozbiór Polski",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia końcowego okresu Rzeczypospolitej w porządku chronologicznym.",
    "options": null,
    "items": [
      "Trzeci rozbiór Polski",
      "Bitwa pod Maciejowicami",
      "Ogłoszenie powstania w Krakowie",
      "Szturm Pragi",
      "Bitwa pod Racławicami"
    ],
    "answer": [
      "Ogłoszenie powstania w Krakowie",
      "Bitwa pod Racławicami",
      "Bitwa pod Maciejowicami",
      "Szturm Pragi",
      "Trzeci rozbiór Polski"
    ],
    "image": "r05_upadek_insurekcji.jpg",
    "explanation": "Powstanie ogłoszono 24 marca, zwycięstwo pod Racławicami nastąpiło 4 kwietnia, klęska pod Maciejowicami 10 października, szturm Pragi 4 listopada 1794 roku, a trzeci rozbiór przeprowadzono w 1795 roku."
  },
  {
    "id": "R05_KOS_08",
    "section": "Powstanie kościuszkowskie i trzeci rozbiór Polski",
    "type": "single_choice",
    "prompt": "Co wydarzyło się w Warszawie i Wilnie po wiadomości o zwycięstwie pod Racławicami?",
    "options": [
      "mieszkańcy wraz z polskimi żołnierzami rozbili oddziały rosyjskie",
      "miasta poddały się Prusom bez walki",
      "ogłoszono tam trzeci rozbiór Polski",
      "powołano Komisję Edukacji Narodowej",
      "zawarto pokój ze Szwecją",
      "przywrócono liberum veto"
    ],
    "answer": 0,
    "explanation": "Miejscowa ludność wraz z polskimi żołnierzami rozbiła stacjonujące w tych miastach oddziały rosyjskie."
  },
  {
    "id": "R05_KOS_09",
    "section": "Powstanie kościuszkowskie i trzeci rozbiór Polski",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do miejsc związanych bezpośrednio z walkami powstania kościuszkowskiego: Racławice, Maciejowice, Praga, Grodno.",
    "options": null,
    "answer": "Grodno",
    "explanation": "Racławice, Maciejowice i Praga były miejscami walk w 1794 roku. Grodno wiąże się z sejmem zatwierdzającym drugi rozbiór w 1793 roku."
  },
  {
    "id": "R05_KOS_10",
    "section": "Powstanie kościuszkowskie i trzeci rozbiór Polski",
    "type": "match",
    "prompt": "Połącz państwo z ziemiami zajętymi po trzecim rozbiorze Polski.",
    "options": null,
    "left": [
      "Prusy",
      "Austria",
      "Rosja"
    ],
    "right": [
      "część Mazowsza z Warszawą",
      "pozostały obszar Mazowsza i ziemie między Pilicą a Bugiem",
      "Litwa ziemie białoruskie Polesie i Wołyń"
    ],
    "answer": {
      "Prusy": "część Mazowsza z Warszawą",
      "Austria": "pozostały obszar Mazowsza i ziemie między Pilicą a Bugiem",
      "Rosja": "Litwa ziemie białoruskie Polesie i Wołyń"
    },
    "explanation": "Prusy zajęły część Mazowsza z Warszawą, Austria pozostały obszar Mazowsza i tereny między Pilicą a Bugiem, a Rosja Litwę, ziemie białoruskie, Polesie i Wołyń."
  },
  {
    "id": "R05_HARD_01",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia edukacyjne i kulturalne od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Powołanie Komisji Edukacji Narodowej",
      "Otwarcie Biblioteki Załuskich",
      "Utworzenie Teatru Narodowego",
      "Założenie Collegium Nobilium"
    ],
    "answer": [
      "Założenie Collegium Nobilium",
      "Otwarcie Biblioteki Załuskich",
      "Utworzenie Teatru Narodowego",
      "Powołanie Komisji Edukacji Narodowej"
    ],
    "explanation": "Collegium Nobilium powstało w 1740 roku, Biblioteka Załuskich została otwarta w 1747 roku, Teatr Narodowy utworzono w 1765 roku, a Komisję Edukacji Narodowej w 1773 roku."
  },
  {
    "id": "R05_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Do jakiej liczby żołnierzy sejm niemy z 1717 roku zmniejszył armię Rzeczypospolitej?",
    "options": [
      "12 tysięcy",
      "24 tysiące",
      "40 tysięcy",
      "60 tysięcy",
      "65 tysięcy",
      "100 tysięcy"
    ],
    "answer": 1,
    "image": "r05_sejm_niemy.jpg",
    "explanation": "Sejm niemy uchwalił podatki na utrzymanie wojska, ale jednocześnie ograniczył jego liczebność do 24 tysięcy żołnierzy."
  },
  {
    "id": "R05_HARD_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz sytuację z właściwą liczebnością wojsk.",
    "options": null,
    "left": [
      "armia po sejmie niemym",
      "armia powołana dzięki środkom Sejmu Wielkiego",
      "armia rosyjska w 1792 roku",
      "armia polska w 1792 roku"
    ],
    "right": [
      "24 tysiące",
      "65 tysięcy",
      "100 tysięcy",
      "60 tysięcy"
    ],
    "answer": {
      "armia po sejmie niemym": "24 tysiące",
      "armia powołana dzięki środkom Sejmu Wielkiego": "65 tysięcy",
      "armia rosyjska w 1792 roku": "100 tysięcy",
      "armia polska w 1792 roku": "60 tysięcy"
    },
    "explanation": "Sejm niemy ograniczył armię do 24 tysięcy. Podczas Sejmu Wielkiego udało się ostatecznie powołać około 65 tysięcy żołnierzy. W 1792 roku armia rosyjska liczyła około 100 tysięcy, a polska około 60 tysięcy."
  },
  {
    "id": "R05_HARD_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz propozycje reform Stanisława Leszczyńskiego z pracy Głos wolny wolność ubezpieczający.",
    "options": [
      "ograniczenie liberum veto",
      "armia licząca 100 tysięcy żołnierzy",
      "kompetentni urzędnicy",
      "wolność osobista chłopów",
      "zamiana pańszczyzny na czynsz",
      "przywrócenie praw kardynalnych"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Leszczyński chciał ograniczenia liberum veto, armii liczącej 100 tysięcy żołnierzy, sprawnych urzędników, wolności osobistej chłopów i zamiany pańszczyzny na czynsz."
  },
  {
    "id": "R05_HARD_05",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W którym roku zebrał się sejm, na którym Tadeusz Rejtan protestował przeciw zatwierdzeniu pierwszego rozbioru Polski?",
    "options": [
      "1717",
      "1747",
      "1768",
      "1772",
      "1773",
      "1793"
    ],
    "answer": 4,
    "image": "r05_rejtan_sejm_rozbiorowy.jpg",
    "explanation": "Sejm rozbiorowy zebrał się w 1773 roku na Zamku Królewskim w Warszawie."
  },
  {
    "id": "R05_HARD_06",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz twórcę z tytułem jego dzieła.",
    "options": null,
    "left": [
      "Stanisław Konarski",
      "Ignacy Krasicki",
      "Julian Ursyn Niemcewicz",
      "Wojciech Bogusławski"
    ],
    "right": [
      "O skutecznym rad sposobie",
      "Mikołaja Doświadczyńskiego przypadki",
      "Powrót posła",
      "Cud mniemany, czyli Krakowiacy i górale"
    ],
    "answer": {
      "Stanisław Konarski": "O skutecznym rad sposobie",
      "Ignacy Krasicki": "Mikołaja Doświadczyńskiego przypadki",
      "Julian Ursyn Niemcewicz": "Powrót posła",
      "Wojciech Bogusławski": "Cud mniemany, czyli Krakowiacy i górale"
    },
    "explanation": "Konarski, Krasicki, Niemcewicz i Bogusławski tworzyli różne gatunki, ale ich utwory i pisma miały istotne znaczenie dla życia publicznego i kultury XVIII wieku."
  },
  {
    "id": "R05_HARD_07",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Co przedstawiały posągi zdobiące Belweder, czyli nadbudówkę Pałacu Na Wodzie?",
    "options": [
      "cztery żywioły",
      "cztery pory roku",
      "cztery kontynenty",
      "cztery cnoty kardynalne",
      "czterech królów Polski",
      "cztery główne miasta Rzeczypospolitej"
    ],
    "answer": 0,
    "image": "r05_palac_na_wodzie.jpg",
    "explanation": "Posągi na Belwederze symbolizowały cztery żywioły: wodę, ogień, powietrze i ziemię."
  },
  {
    "id": "R05_HARD_08",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz zmiany społeczne zapisane w Konstytucji 3 maja.",
    "options": [
      "ograniczenie praw politycznych szlachty gołoty",
      "zwiększenie praw mieszczan z miast królewskich",
      "objęcie chłopów ochroną prawną",
      "nadanie pełni praw politycznych wszystkim chłopom",
      "zniesienie własności szlacheckiej",
      "likwidacja miast królewskich"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r05_konstytucja_3_maja.jpg",
    "explanation": "Ograniczono prawa polityczne szlachty gołoty, zwiększono prawa mieszczan z miast królewskich i objęto chłopów ochroną prawną."
  },
  {
    "id": "R05_HARD_09",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Konfederację targowicką zawiązano w porozumieniu z Katarzyną II w __________, lecz oficjalnie ogłoszono ją w __________.",
    "options": null,
    "answer": [
      "Petersburgu",
      "Targowicy"
    ],
    "altAnswers": [
      [
        "Petersburgu",
        "Petersburg",
        "petersburgu"
      ],
      [
        "Targowicy",
        "Targowica",
        "targowicy"
      ]
    ],
    "image": "r05_targowica.jpg",
    "explanation": "Przeciwnicy reform uzgodnili konfederację w Petersburgu, a ogłosili ją na terytorium Rzeczypospolitej w Targowicy."
  },
  {
    "id": "R05_HARD_10",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz osobę z jej działaniem podczas wojny polsko-rosyjskiej 1792 roku.",
    "options": null,
    "left": [
      "Józef Poniatowski",
      "Tadeusz Kościuszko",
      "Stanisław August Poniatowski"
    ],
    "right": [
      "dowodził pod Zieleńcami",
      "dowodził pod Dubienką",
      "przystąpił do targowicy i zakończył walkę"
    ],
    "answer": {
      "Józef Poniatowski": "dowodził pod Zieleńcami",
      "Tadeusz Kościuszko": "dowodził pod Dubienką",
      "Stanisław August Poniatowski": "przystąpił do targowicy i zakończył walkę"
    },
    "explanation": "Józef Poniatowski zwyciężył pod Zieleńcami, Tadeusz Kościuszko dowodził pod Dubienką, a Stanisław August pod rosyjską presją zakończył walkę i poparł targowiczan."
  },
  {
    "id": "R05_HARD_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaką przewagę liczebną miały wojska rosyjskie nad armią Kościuszki pod Dubienką?",
    "options": [
      "dwukrotną",
      "trzykrotną",
      "czterokrotną",
      "pięciokrotną",
      "sześciokrotną",
      "dziesięciokrotną"
    ],
    "answer": 3,
    "explanation": "Pod Dubienką armia polska dowodzona przez Tadeusza Kościuszkę odparła pięciokrotnie liczniejsze wojska rosyjskie."
  },
  {
    "id": "R05_HARD_12",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywał się kosynier, który pod Racławicami zgasił lont rosyjskiej armaty?",
    "options": null,
    "answer": "Wojciech Bartos",
    "altAnswers": [
      "Wojciech Bartos",
      "Bartos",
      "wojciech bartos"
    ],
    "image": "r05_kosynierzy_raclawice.jpg",
    "explanation": "Wojciech Bartos zasłynął odwagą podczas zdobywania rosyjskich armat przez kosynierów."
  },
  {
    "id": "R05_HARD_13",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Klęska pod Maciejowicami nastąpiła __________ 1794 roku, a szturm Pragi __________ 1794 roku.",
    "options": null,
    "answer": [
      "10 października",
      "4 listopada"
    ],
    "altAnswers": [
      [
        "10 października",
        "10 X",
        "10.10"
      ],
      [
        "4 listopada",
        "4 XI",
        "4.11"
      ]
    ],
    "image": "r05_upadek_insurekcji.jpg",
    "explanation": "Wojska powstańcze poniosły klęskę pod Maciejowicami 10 października, a Rosjanie zdobyli Pragę 4 listopada."
  },
  {
    "id": "R05_HARD_14",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Kiedy w czasie insurekcji pojawiły się w obiegu pierwsze polskie pieniądze papierowe?",
    "options": [
      "w marcu 1794 roku",
      "w kwietniu 1794 roku",
      "w maju 1794 roku",
      "w sierpniu 1794 roku",
      "w październiku 1794 roku",
      "w listopadzie 1794 roku"
    ],
    "answer": 3,
    "explanation": "W sierpniu 1794 roku, z powodu wysokich kosztów działań zbrojnych, władze polskie zdecydowały o wydaniu biletów skarbowych."
  },
  {
    "id": "R05_HARD_15",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj przyczyny rozbiorów Polski do przyczyn wewnętrznych i zewnętrznych.",
    "options": null,
    "items": [
      "osłabienie państwa wojnami XVII wieku",
      "ograniczenie władzy królewskiej przez przywileje szlacheckie",
      "nadużywanie liberum veto",
      "słaba i nieliczna armia",
      "utrata pozycji międzynarodowej wskutek wojen XVII wieku",
      "ingerencja Rosji Prus i Austrii w sprawy Rzeczypospolitej",
      "wpływanie sąsiadów na wolną elekcję",
      "wykorzystywanie liberum veto do blokowania reform"
    ],
    "categories": [
      "przyczyny wewnętrzne",
      "przyczyny zewnętrzne"
    ],
    "answer": {
      "przyczyny wewnętrzne": [
        "osłabienie państwa wojnami XVII wieku",
        "ograniczenie władzy królewskiej przez przywileje szlacheckie",
        "nadużywanie liberum veto",
        "słaba i nieliczna armia"
      ],
      "przyczyny zewnętrzne": [
        "utrata pozycji międzynarodowej wskutek wojen XVII wieku",
        "ingerencja Rosji Prus i Austrii w sprawy Rzeczypospolitej",
        "wpływanie sąsiadów na wolną elekcję",
        "wykorzystywanie liberum veto do blokowania reform"
      ]
    },
    "explanation": "Wewnętrzne słabości ustroju i państwa łączyły się z presją sąsiednich mocarstw, które ingerowały w wybór króla i blokowały reformy."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r05",
  number: 5,
  title: "Upadek Rzeczypospolitej",
  icon: "🇵🇱",
  sectionOrder: [
    "Rzeczpospolita pod rządami Wettinów",
    "Pierwszy rozbiór Polski",
    "Kultura polskiego oświecenia",
    "Sejm Wielki i Konstytucja 3 maja",
    "Powstanie kościuszkowskie i trzeci rozbiór Polski"
  ],
  sectionIcons: {
    "Rzeczpospolita pod rządami Wettinów": "👑",
    "Pierwszy rozbiór Polski": "🗺️",
    "Kultura polskiego oświecenia": "🎭",
    "Sejm Wielki i Konstytucja 3 maja": "📜",
    "Powstanie kościuszkowskie i trzeci rozbiór Polski": "⚔️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
