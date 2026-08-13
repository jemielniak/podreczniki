// Skróty sekcji (do identyfikatorów ćwiczeń):
//   POD  = Po upadku Księstwa Warszawskiego
//   LIS  = Powstanie listopadowe
//   EMI  = Polacy po powstaniu listopadowym
//   WIO  = Wiosna Ludów na ziemiach polskich
//   KUL  = Kultura polska pod zaborami
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R02_POD_01",
    section: "Po upadku Księstwa Warszawskiego",
    type: "single_choice",
    prompt: "W którym roku utworzono Królestwo Polskie po likwidacji Księstwa Warszawskiego?",
    options: ["1795", "1807", "1815", "1830", "1846", "1848"],
    answer: 2,
    explanation: "Królestwo Polskie utworzono w 1815 r. z większości ziem dawnego Księstwa Warszawskiego."
  },
  {
    id: "R02_POD_02",
    section: "Po upadku Księstwa Warszawskiego",
    type: "true_false",
    prompt: "Królestwo Polskie było połączone z Rosją unią personalną.",
    options: null,
    answer: true,
    explanation: "Car Aleksander I został jednocześnie królem polskim, dlatego Królestwo Polskie łączyła z Rosją unia personalna."
  },
  {
    id: "R02_POD_03",
    section: "Po upadku Księstwa Warszawskiego",
    type: "fill_in",
    prompt: "Królestwo Polskie nazywano także Królestwem __________ albo __________.",
    options: null,
    answer: ["Kongresowym", "Kongresówką"],
    altAnswers: [
      ["Kongresowym", "Kongresowe"],
      ["Kongresówką", "Kongresówka"]
    ],
    explanation: "Nazwy Królestwo Kongresowe i Kongresówka nawiązywały do kongresu wiedeńskiego, na którym zdecydowano o utworzeniu tego państwa."
  },
  {
    id: "R02_POD_04",
    section: "Po upadku Księstwa Warszawskiego",
    type: "multi_select",
    prompt: "Zaznacz obszary lub państwa utworzone albo wymienione przy podziale ziem Księstwa Warszawskiego.",
    options: ["Królestwo Polskie", "Wielkie Księstwo Poznańskie", "Rzeczpospolita Krakowska", "Księstwo Mazowieckie", "Wolne Miasto Gdańsk"],
    answer: [0, 1, 2],
    explanation: "Po kongresie wiedeńskim powstały Królestwo Polskie, Wielkie Księstwo Poznańskie i Rzeczpospolita Krakowska. Gdańsk zajęli Prusacy, a Księstwo Mazowieckie nie było wtedy nowym tworem politycznym.",
    image: "r02_mapa_kongres_wiedenski.jpg"
  },
  {
    id: "R02_POD_05",
    section: "Po upadku Księstwa Warszawskiego",
    type: "match",
    prompt: "Połącz ziemię lub państwo z informacją o jego położeniu politycznym po 1815 r.",
    options: null,
    left: ["Królestwo Polskie", "Wielkie Księstwo Poznańskie", "Rzeczpospolita Krakowska", "Galicja"],
    right: ["podporządkowane Rosji", "część państwa pruskiego", "pod kontrolą trzech państw zaborczych", "ziemie pod zaborem austriackim"],
    answer: {
      "Królestwo Polskie": "podporządkowane Rosji",
      "Wielkie Księstwo Poznańskie": "część państwa pruskiego",
      "Rzeczpospolita Krakowska": "pod kontrolą trzech państw zaborczych",
      "Galicja": "ziemie pod zaborem austriackim"
    },
    explanation: "Każdy z tych obszarów znalazł się po kongresie wiedeńskim w innym układzie zależności od państw zaborczych."
  },
  {
    id: "R02_POD_06",
    section: "Po upadku Księstwa Warszawskiego",
    type: "sort",
    prompt: "Przyporządkuj cechy do właściwych ziem po kongresie wiedeńskim.",
    options: null,
    items: ["unia personalna z Rosją", "język polski w urzędach i szkołach", "sejm prowincjonalny od 1824 r.", "protektorat trzech państw zaborczych", "brak wojsk państw zaborczych w Krakowie"],
    categories: ["Królestwo Polskie", "Wielkie Księstwo Poznańskie", "Rzeczpospolita Krakowska"],
    answer: {
      "Królestwo Polskie": ["unia personalna z Rosją", "język polski w urzędach i szkołach"],
      "Wielkie Księstwo Poznańskie": ["sejm prowincjonalny od 1824 r."],
      "Rzeczpospolita Krakowska": ["protektorat trzech państw zaborczych", "brak wojsk państw zaborczych w Krakowie"]
    },
    explanation: "Królestwo Polskie miało konstytucję i unię z Rosją, Wielkie Księstwo Poznańskie ograniczoną autonomię w Prusach, a Rzeczpospolita Krakowska działała pod protektoratem trzech zaborców."
  },
  {
    id: "R02_POD_07",
    section: "Po upadku Księstwa Warszawskiego",
    type: "riddle",
    prompt: "Jak nazywa się prawo jakiejś zbiorowości do samodzielnego rozstrzygania swoich spraw?",
    options: null,
    answer: "autonomia",
    altAnswers: ["autonomia", "autonomię"],
    explanation: "Autonomia oznacza możliwość samodzielnego decydowania o części własnych spraw."
  },
  {
    id: "R02_POD_08",
    section: "Po upadku Księstwa Warszawskiego",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: łódzki ośrodek włókienniczy, Zagłębie Dąbrowskie, Zagłębie Staropolskie, Kopalnie soli w Wieliczce.",
    options: null,
    answer: "Kopalnie soli w Wieliczce",
    explanation: "Pierwsze trzy przykłady opisują główne ośrodki przemysłowe Królestwa Polskiego. Kopalnie soli w Wieliczce wskazano przy gospodarce Galicji."
  },
  {
    id: "R02_POD_09",
    section: "Po upadku Księstwa Warszawskiego",
    type: "scenario",
    prompt: "Jesteś ministrem skarbu Królestwa Polskiego. Porządkujesz podatki, wspierasz przemysł i handel, zakładasz Bank Polski oraz inicjujesz budowę Kanału Augustowskiego. Kim jesteś?",
    options: ["Franciszek Ksawery Drucki-Lubecki", "Adam Jerzy Czartoryski", "Stanisław Staszic", "Walerian Łukasiński", "Joachim Lelewel", "Ludwik Mierosławski"],
    answer: 0,
    explanation: "Franciszek Ksawery Drucki-Lubecki jako minister skarbu przyczynił się do rozwoju gospodarczego Królestwa Polskiego."
  },
  {
    id: "R02_POD_10",
    section: "Po upadku Księstwa Warszawskiego",
    type: "single_choice",
    prompt: "Co było podstawą gospodarki Galicji w pierwszej połowie XIX w.?",
    options: ["rolnictwo", "przemysł włókienniczy", "przemysł stoczniowy", "handel morski", "górnictwo miedzi", "produkcja zegarów"],
    answer: 0,
    explanation: "Podstawą gospodarki zaboru austriackiego było rolnictwo, a Galicja znajdowała się w bardzo trudnej sytuacji ekonomicznej."
  },
  {
    id: "R02_POD_11",
    section: "Po upadku Księstwa Warszawskiego",
    type: "sequence",
    prompt: "Ułóż elementy w kolejności od decyzji politycznej do wybranych skutków gospodarczych.",
    options: null,
    items: ["Założenie Banku Polskiego", "Likwidacja Księstwa Warszawskiego", "Utworzenie Królestwa Polskiego", "Budowa Kanału Augustowskiego"],
    answer: ["Likwidacja Księstwa Warszawskiego", "Utworzenie Królestwa Polskiego", "Założenie Banku Polskiego", "Budowa Kanału Augustowskiego"],
    explanation: "Najpierw kongres wiedeński zlikwidował Księstwo Warszawskie i utworzył Królestwo Polskie, a później w jego ramach prowadzono reformy gospodarcze.",
    image: "r02_aleksander_moneta.jpg"
  },
  {
    id: "R02_LIS_01",
    section: "Powstanie listopadowe",
    type: "single_choice",
    prompt: "Kto stanął na czele Sprzysiężenia Podchorążych?",
    options: ["Piotr Wysocki", "Walerian Łukasiński", "Józef Chłopicki", "Ignacy Prądzyński", "Józef Sowiński", "Roman Sołtyk"],
    answer: 0,
    explanation: "Sprzysiężenie Podchorążych działało w Szkole Podchorążych Piechoty w Warszawie, a na jego czele stał Piotr Wysocki."
  },
  {
    id: "R02_LIS_02",
    section: "Powstanie listopadowe",
    type: "multi_select",
    prompt: "Zaznacz przyczyny wzrostu nastrojów antyrosyjskich przed powstaniem listopadowym.",
    options: ["łamanie konstytucji przez cara", "wprowadzenie cenzury", "groźba wysłania armii Królestwa do Belgii", "zniesienie pańszczyzny w Galicji", "utworzenie Banku Polskiego"],
    answer: [0, 1, 2],
    explanation: "Nastroje antyrosyjskie wzmacniały łamanie konstytucji, cenzura oraz obawa, że armia Królestwa zostanie użyta przeciw Belgom."
  },
  {
    id: "R02_LIS_03",
    section: "Powstanie listopadowe",
    type: "fill_in",
    prompt: "Powstanie listopadowe wybuchło w nocy z __________ na __________ 1830 r.",
    options: null,
    answer: ["29 listopada", "30 listopada"],
    altAnswers: [
      ["29 listopada", "29 XI", "29 XI 1830"],
      ["30 listopada", "30 XI", "30 XI 1830"]
    ],
    explanation: "Noc listopadowa rozpoczęła się z 29 na 30 listopada 1830 r. w Warszawie."
  },
  {
    id: "R02_LIS_04",
    section: "Powstanie listopadowe",
    type: "true_false",
    prompt: "Celem pierwszego ataku spiskowców podczas nocy listopadowej było pojmanie wielkiego księcia Konstantego.",
    options: null,
    answer: true,
    explanation: "Spiskowcy ruszyli na Belweder, bo chcieli pojmać Konstantego, lecz książę zbiegł.",
    image: "r02_konstanty_przeglad_wojska.jpg"
  },
  {
    id: "R02_LIS_05",
    section: "Powstanie listopadowe",
    type: "scenario",
    prompt: "Warszawa, noc listopadowa. Spiskowcy nie zdobyli Belwederu, ale przełom nastąpił, gdy mieszkańcy stolicy pomogli im przejąć miejsce z kilkudziesięcioma tysiącami karabinów. Jak nazywało się to miejsce?",
    options: ["Arsenał", "Cytadela", "Zamek Królewski", "Ratusz", "Belweder", "Uniwersytet Warszawski"],
    answer: 0,
    explanation: "Zdobycie Arsenału dało powstańcom broń i pomogło im wyzwolić Warszawę.",
    image: "r02_arsenal_warszawa.jpg"
  },
  {
    id: "R02_LIS_06",
    section: "Powstanie listopadowe",
    type: "match",
    prompt: "Połącz organizację spiskową z informacją o niej.",
    options: null,
    left: ["Towarzystwo Patriotyczne", "Towarzystwo Filomatów", "Sprzysiężenie Podchorążych"],
    right: ["Walerian Łukasiński i odbudowa państwa w granicach przedrozbiorowych", "Tomasz Zan i Adam Mickiewicz oraz samokształcenie", "Piotr Wysocki i przygotowanie powstania zbrojnego"],
    answer: {
      "Towarzystwo Patriotyczne": "Walerian Łukasiński i odbudowa państwa w granicach przedrozbiorowych",
      "Towarzystwo Filomatów": "Tomasz Zan i Adam Mickiewicz oraz samokształcenie",
      "Sprzysiężenie Podchorążych": "Piotr Wysocki i przygotowanie powstania zbrojnego"
    },
    explanation: "Te organizacje różniły się składem i celami, ale łączyły działalność patriotyczna lub konspiracyjna."
  },
  {
    id: "R02_LIS_07",
    section: "Powstanie listopadowe",
    type: "single_choice",
    prompt: "Kto ogłosił się dyktatorem powstania 5 grudnia 1830 r.?",
    options: ["Józef Chłopicki", "Piotr Wysocki", "Ignacy Prądzyński", "Józef Sowiński", "Emilia Plater", "Mikołaj I"],
    answer: 0,
    explanation: "Józef Chłopicki przejął władzę wojskową i polityczną, ale jednocześnie negocjował z carem."
  },
  {
    id: "R02_LIS_08",
    section: "Powstanie listopadowe",
    type: "single_choice",
    prompt: "Kiedy sejm Królestwa Polskiego zdetronizował cara Mikołaja I?",
    options: ["29 listopada 1830 r.", "5 grudnia 1830 r.", "25 stycznia 1831 r.", "25 lutego 1831 r.", "26 maja 1831 r.", "8 września 1831 r."],
    answer: 2,
    explanation: "Akt detronizacji Mikołaja I uchwalono 25 stycznia 1831 r., co oznaczało zerwanie unii z Rosją."
  },
  {
    id: "R02_LIS_09",
    section: "Powstanie listopadowe",
    type: "sort",
    prompt: "Przyporządkuj bitwy lub wydarzenia wojny polsko-rosyjskiej do zwycięzców albo skutków.",
    options: null,
    items: ["Olszynka Grochowska", "Dębe Wielkie", "Iganie", "Ostrołęka", "kapitulacja Warszawy"],
    categories: ["sukces lub zatrzymanie Rosjan", "zwycięstwo Polaków", "klęska Polaków"],
    answer: {
      "sukces lub zatrzymanie Rosjan": ["Olszynka Grochowska"],
      "zwycięstwo Polaków": ["Dębe Wielkie", "Iganie"],
      "klęska Polaków": ["Ostrołęka", "kapitulacja Warszawy"]
    },
    explanation: "Olszynka Grochowska zatrzymała szturm na Warszawę, Dębe Wielkie i Iganie były sukcesami Polaków, a Ostrołęka i kapitulacja Warszawy przesądzały o klęsce.",
    image: "r02_olszynka_grochowska.jpg"
  },
  {
    id: "R02_LIS_10",
    section: "Powstanie listopadowe",
    type: "sequence",
    prompt: "Ułóż wydarzenia powstania listopadowego w porządku chronologicznym.",
    options: null,
    items: ["kapitulacja Zamościa", "detronizacja Mikołaja I", "noc listopadowa", "bitwa pod Ostrołęką", "kapitulacja Warszawy"],
    answer: ["noc listopadowa", "detronizacja Mikołaja I", "bitwa pod Ostrołęką", "kapitulacja Warszawy", "kapitulacja Zamościa"],
    explanation: "Powstanie zaczęło się w listopadzie 1830 r., detronizacja nastąpiła w styczniu 1831 r., potem przyszła klęska pod Ostrołęką, kapitulacja Warszawy i ostatnia kapitulacja Zamościa."
  },
  {
    id: "R02_LIS_11",
    section: "Powstanie listopadowe",
    type: "riddle",
    prompt: "Jak nazywała się litewska uczestniczka walk w powstaniu listopadowym, szczególnie wspomniana wśród dowódców na Litwie?",
    options: null,
    answer: "Emilia Plater",
    altAnswers: ["Emilia Plater", "Plater"],
    explanation: "Na Litwie wśród dowódców powstańczych szczególnie wsławiła się Emilia Plater."
  },
  {
    id: "R02_LIS_12",
    section: "Powstanie listopadowe",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Litwa, Podlasie, Wołyń, Galicja.",
    options: null,
    answer: "Galicja",
    explanation: "Litwa, Podlasie i Wołyń należały do dawnych ziem polskich zagarniętych przez Rosję, gdzie toczyły się walki. Galicja była zaborem austriackim."
  },
  {
    id: "R02_EMI_01",
    section: "Polacy po powstaniu listopadowym",
    type: "single_choice",
    prompt: "Jak nazwano falę wyjazdów politycznych po upadku powstania listopadowego?",
    options: ["Wielka Emigracja", "Wiosna Ludów", "rabacja galicyjska", "noc paskiewiczowska", "praca organiczna", "kontrybucja"],
    answer: 0,
    explanation: "Wielka Emigracja była falą wyjazdów wywołanych klęską powstania i represjami władz rosyjskich."
  },
  {
    id: "R02_EMI_02",
    section: "Polacy po powstaniu listopadowym",
    type: "single_choice",
    prompt: "Ile osób objęła Wielka Emigracja według materiału?",
    options: ["około 1 tys.", "około 5 tys.", "około 10 tys.", "około 50 tys.", "około 100 tys.", "około 300 tys."],
    answer: 2,
    explanation: "Kraj opuściło około 10 tys. osób, w tym dawni powstańcy, artyści, pisarze i naukowcy."
  },
  {
    id: "R02_EMI_03",
    section: "Polacy po powstaniu listopadowym",
    type: "multi_select",
    prompt: "Zaznacz osoby wymienione jako twórcy lub przedstawiciele polskiej elity w Paryżu.",
    options: ["Fryderyk Chopin", "Adam Mickiewicz", "Juliusz Słowacki", "Zygmunt Krasiński", "Jakub Szela", "Iwan Paskiewicz"],
    answer: [0, 1, 2, 3],
    explanation: "W Paryżu znaleźli się m.in. Chopin, Mickiewicz, Słowacki i Krasiński. Jakub Szela oraz Iwan Paskiewicz nie należeli do tej grupy emigracyjnych twórców.",
    image: "r02_wielka_emigracja_paryz.jpg"
  },
  {
    id: "R02_EMI_04",
    section: "Polacy po powstaniu listopadowym",
    type: "match",
    prompt: "Połącz stronnictwo Wielkiej Emigracji z jego przywódcą.",
    options: null,
    left: ["Komitet Narodowy Polski", "Hotel Lambert", "Towarzystwo Demokratyczne Polskie", "Gromady Ludu Polskiego"],
    right: ["Joachim Lelewel", "Adam Jerzy Czartoryski", "Wiktor Heltman", "Stanisław Worcell"],
    answer: {
      "Komitet Narodowy Polski": "Joachim Lelewel",
      "Hotel Lambert": "Adam Jerzy Czartoryski",
      "Towarzystwo Demokratyczne Polskie": "Wiktor Heltman",
      "Gromady Ludu Polskiego": "Stanisław Worcell"
    },
    explanation: "Tabela stronnictw emigracyjnych łączy te ugrupowania z ich przywódcami i programami."
  },
  {
    id: "R02_EMI_05",
    section: "Polacy po powstaniu listopadowym",
    type: "true_false",
    prompt: "Hotel Lambert był stronnictwem konserwatywnym i prowadził działalność dyplomatyczną.",
    options: null,
    answer: true,
    explanation: "Hotel Lambert skupiony wokół Adama Jerzego Czartoryskiego liczył na działania dyplomatyczne i opowiadał się za monarchią konstytucyjną."
  },
  {
    id: "R02_EMI_06",
    section: "Polacy po powstaniu listopadowym",
    type: "riddle",
    prompt: "Jak nazywano tajnego wysłannika politycznego, który zbierał informacje i utrzymywał kontakt emigracji z krajem?",
    options: null,
    answer: "emisariusz",
    altAnswers: ["emisariusz", "emisariusza"],
    explanation: "Emisariusze byli wysyłani przez stronnictwa emigracyjne na ziemie polskie, aby utrzymywać kontakt z ojczyzną i rozwijać konspirację."
  },
  {
    id: "R02_EMI_07",
    section: "Polacy po powstaniu listopadowym",
    type: "multi_select",
    prompt: "Zaznacz represje wprowadzone w Królestwie Polskim po upadku powstania listopadowego.",
    options: ["unieważnienie konstytucji", "likwidacja sejmu", "rozwiązanie polskiego wojska", "zamknięcie uniwersytetów w Warszawie i Wilnie", "przywrócenie pełnej autonomii", "zniesienie kontrybucji"],
    answer: [0, 1, 2, 3],
    explanation: "Car unieważnił konstytucję, ograniczył dawną autonomię, zlikwidował sejm i wojsko oraz zamknął uniwersytety w Warszawie i Wilnie."
  },
  {
    id: "R02_EMI_08",
    section: "Polacy po powstaniu listopadowym",
    type: "fill_in",
    prompt: "W 1832 r. zamiast konstytucji Królestwa Polskiego wprowadzono __________ __________.",
    options: null,
    answer: ["Statut", "organiczny"],
    altAnswers: [
      ["Statut", "statut"],
      ["organiczny", "organiczny"]
    ],
    explanation: "Statut organiczny zastąpił konstytucję i symbolizował ograniczenie autonomii Królestwa Polskiego."
  },
  {
    id: "R02_EMI_09",
    section: "Polacy po powstaniu listopadowym",
    type: "single_choice",
    prompt: "Kto jako namiestnik cara w Królestwie Polskim słynął z okrucieństwa po powstaniu listopadowym?",
    options: ["Iwan Paskiewicz", "Mikołaj I", "Konstanty Romanow", "Aleksander I", "Wiktor Heltman", "Szymon Konarski"],
    answer: 0,
    explanation: "Po ograniczeniu kompetencji rządu car sprawował władzę za pośrednictwem namiestnika Iwana Paskiewicza."
  },
  {
    id: "R02_EMI_10",
    section: "Polacy po powstaniu listopadowym",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: rusyfikacja, katorga, kontrybucja, spolszczenie administracji.",
    options: null,
    answer: "spolszczenie administracji",
    explanation: "Rusyfikacja, katorga i kontrybucja należały do represji po powstaniu listopadowym. Spolszczenie administracji pojawiło się jako postulat lub czasowe ustalenie w innym kontekście."
  },
  {
    id: "R02_EMI_11",
    section: "Polacy po powstaniu listopadowym",
    type: "scenario",
    prompt: "Po upadku powstania władze rosyjskie budują w Warszawie twierdzę, która ma kontrolować miasto i więzić działaczy niepodległościowych. O jakiej twierdzy mowa?",
    options: ["Cytadela", "Belweder", "Arsenał", "Wawel", "Ratusz Poznański", "Twierdza Zamość"],
    answer: 0,
    explanation: "Warszawska Cytadela miała zapewnić Rosjanom kontrolę nad Warszawą i stała się miejscem więzienia uczestników ruchów niepodległościowych.",
    image: "r02_cytadela_brama_stracen.jpg"
  },
  {
    id: "R02_WIO_01",
    section: "Wiosna Ludów na ziemiach polskich",
    type: "single_choice",
    prompt: "W którym roku wybuchło powstanie krakowskie?",
    options: ["1830", "1831", "1835", "1846", "1848", "1864"],
    answer: 3,
    explanation: "Powstanie krakowskie wybuchło w nocy z 21 na 22 lutego 1846 r."
  },
  {
    id: "R02_WIO_02",
    section: "Wiosna Ludów na ziemiach polskich",
    type: "multi_select",
    prompt: "Zaznacz postanowienia Manifestu do narodu polskiego wydanego podczas powstania krakowskiego.",
    options: ["równość wszystkich obywateli wobec prawa", "nadanie chłopom użytkowanej ziemi na własność", "zniesienie pańszczyzny", "pomoc społeczna dla najuboższych mieszkańców miast", "likwidacja języka polskiego w szkołach"],
    answer: [0, 1, 2, 3],
    explanation: "Manifest zapowiadał równość wobec prawa, nadanie chłopom ziemi, zniesienie pańszczyzny i pomoc społeczną dla najuboższych mieszkańców miast."
  },
  {
    id: "R02_WIO_03",
    section: "Wiosna Ludów na ziemiach polskich",
    type: "single_choice",
    prompt: "Kto przewodził rozruchom chłopskim w okolicach Tarnowa podczas rabacji galicyjskiej?",
    options: ["Jakub Szela", "Edward Dembowski", "Ludwik Mierosławski", "Józef Bem", "Karol Libelt", "Piotr Ściegienny"],
    answer: 0,
    explanation: "Największe nasilenie rabacji galicyjskiej miało miejsce w okolicach Tarnowa, gdzie chłopom przewodził Jakub Szela.",
    image: "r02_rabacja_galicyjska.jpg"
  },
  {
    id: "R02_WIO_04",
    section: "Wiosna Ludów na ziemiach polskich",
    type: "true_false",
    prompt: "Rabacja galicyjska ułatwiła powstańcom krakowskim masowe pozyskanie chłopów do walki.",
    options: null,
    answer: false,
    explanation: "Rabacja zastraszyła szlachtę i odciągnęła chłopów od udziału w powstaniu, co osłabiło szanse powstania krakowskiego."
  },
  {
    id: "R02_WIO_05",
    section: "Wiosna Ludów na ziemiach polskich",
    type: "scenario",
    prompt: "Wyruszasz z Krakowa z procesją, trzymając symbole religijne, aby przekonać galicyjskich chłopów do powstania. Giniesz po starciu z wojskiem austriackim. Kim jesteś?",
    options: ["Edward Dembowski", "Jakub Szela", "Ludwik Mierosławski", "Józef Bem", "Gustaw Gizewiusz", "Krzysztof Mrongowiusz"],
    answer: 0,
    explanation: "Edward Dembowski próbował pozyskać chłopów do walki procesją, ale marsz został rozpędzony przez wojsko austriackie, a on zginął."
  },
  {
    id: "R02_WIO_06",
    section: "Wiosna Ludów na ziemiach polskich",
    type: "single_choice",
    prompt: "Kto stanął na czele powstania w Wielkopolsce podczas Wiosny Ludów?",
    options: ["Ludwik Mierosławski", "Edward Dembowski", "Walerian Łukasiński", "Adam Mickiewicz", "Józef Lompa", "Szymon Konarski"],
    answer: 0,
    explanation: "Ludwik Mierosławski stanął na czele powstania wielkopolskiego w 1848 r."
  },
  {
    id: "R02_WIO_07",
    section: "Wiosna Ludów na ziemiach polskich",
    type: "single_choice",
    prompt: "Która bitwa była największym sukcesem polskich powstańców w Wielkopolsce w 1848 r.?",
    options: ["pod Miłosławiem", "pod Ostrołęką", "pod Olszynką Grochowską", "pod Iganiami", "pod Stoczkiem", "pod Wawrem"],
    answer: 0,
    explanation: "Zwycięstwo pod Miłosławiem było największym sukcesem powstańców wielkopolskich podczas Wiosny Ludów.",
    image: "r02_miloslaw_bitwa.jpg"
  },
  {
    id: "R02_WIO_08",
    section: "Wiosna Ludów na ziemiach polskich",
    type: "fill_in",
    prompt: "W 1848 r. w zaborze austriackim cesarski dekret znosił __________ i nadawał chłopom użytkowaną ziemię na __________.",
    options: null,
    answer: ["pańszczyznę", "własność"],
    altAnswers: [
      ["pańszczyznę", "panszczyzne"],
      ["własność", "wlasnosc"]
    ],
    explanation: "Austriacki dekret o uwłaszczeniu chłopów znosił pańszczyznę i nadawał chłopom na własność użytkowaną przez nich ziemię."
  },
  {
    id: "R02_WIO_09",
    section: "Wiosna Ludów na ziemiach polskich",
    type: "match",
    prompt: "Połącz postać z działalnością podczas Wiosny Ludów lub w obronie polskości.",
    options: null,
    left: ["Ludwik Mierosławski", "Gustaw Gizewiusz", "Krzysztof Mrongowiusz", "Józef Lompa"],
    right: ["dowódca powstania w Wielkopolsce", "działacz narodowy wśród Mazurów", "badacz gwary i wykładowca języka polskiego", "obrońca polskiej mowy na Śląsku"],
    answer: {
      "Ludwik Mierosławski": "dowódca powstania w Wielkopolsce",
      "Gustaw Gizewiusz": "działacz narodowy wśród Mazurów",
      "Krzysztof Mrongowiusz": "badacz gwary i wykładowca języka polskiego",
      "Józef Lompa": "obrońca polskiej mowy na Śląsku"
    },
    explanation: "Wydarzenia Wiosny Ludów pobudziły działalność polityczną i narodową w różnych częściach zaboru pruskiego."
  },
  {
    id: "R02_WIO_10",
    section: "Wiosna Ludów na ziemiach polskich",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Józef Bem, Wojciech Chrzanowski, Adam Mickiewicz, Iwan Paskiewicz.",
    options: null,
    answer: "Iwan Paskiewicz",
    explanation: "Bem, Chrzanowski i Mickiewicz zostali wymienieni przy udziale Polaków w europejskiej Wiośnie Ludów. Paskiewicz był rosyjskim namiestnikiem represjonującym Królestwo Polskie."
  },
  {
    id: "R02_WIO_11",
    section: "Wiosna Ludów na ziemiach polskich",
    type: "riddle",
    prompt: "Jakim hasłem kierowali się Polacy walczący podczas Wiosny Ludów w Europie?",
    options: null,
    answer: "Za wolność waszą i naszą",
    altAnswers: ["Za wolność waszą i naszą", "za wolnosc wasza i nasza", "Za waszą i naszą wolność"],
    explanation: "Hasło wyrażało przekonanie, że walka Polaków o wolność innych narodów łączy się z walką o wolność Polski."
  },
  {
    id: "R02_KUL_01",
    section: "Kultura polska pod zaborami",
    type: "single_choice",
    prompt: "Co po utracie niepodległości pomagało Polakom zachować tożsamość narodową?",
    options: ["kultura i edukacja", "likwidacja bibliotek", "ograniczenie języka polskiego", "kontrybucja", "katorga", "gubernie"],
    answer: 0,
    explanation: "Kultura i edukacja odgrywały ważną rolę w zachowaniu polskiej tożsamości narodowej po utracie państwa."
  },
  {
    id: "R02_KUL_02",
    section: "Kultura polska pod zaborami",
    type: "multi_select",
    prompt: "Zaznacz miasta wymienione jako ważne ośrodki życia kulturalno-oświatowego pod zaborami.",
    options: ["Warszawa", "Wilno", "Krzemieniec", "Poznań", "Kraków", "Tarnów"],
    answer: [0, 1, 2, 3, 4],
    explanation: "Ważnymi ośrodkami były Warszawa, Wilno, Krzemieniec, Poznań i Kraków. Tarnów pojawia się w materiale przy rabacji galicyjskiej."
  },
  {
    id: "R02_KUL_03",
    section: "Kultura polska pod zaborami",
    type: "single_choice",
    prompt: "Którą uczelnię otwarto w Królestwie Polskim w 1816 r.?",
    options: ["Uniwersytet Warszawski", "Uniwersytet Wileński", "Uniwersytet Jagielloński", "Zakład Narodowy imienia Ossolińskich", "Szkołę Polską w Paryżu", "Bibliotekę Polską"],
    answer: 0,
    explanation: "W 1816 r. w Królestwie Polskim otwarto Uniwersytet Warszawski."
  },
  {
    id: "R02_KUL_04",
    section: "Kultura polska pod zaborami",
    type: "true_false",
    prompt: "Zakład Narodowy imienia Ossolińskich otwarto we Lwowie w 1817 r.",
    options: null,
    answer: true,
    explanation: "W zaborze austriackim ważnym osiągnięciem było otwarcie we Lwowie Zakładu Narodowego imienia Ossolińskich w 1817 r."
  },
  {
    id: "R02_KUL_05",
    section: "Kultura polska pod zaborami",
    type: "fill_in",
    prompt: "Początek polskiego romantyzmu wyznacza wydanie __________ i __________ Adama Mickiewicza w 1822 r.",
    options: null,
    answer: ["Ballad", "romansów"],
    altAnswers: [
      ["Ballad", "ballad"],
      ["romansów", "romansow"]
    ],
    explanation: "Za początek polskiego romantyzmu uznaje się opublikowanie Ballad i romansów Adama Mickiewicza w 1822 r."
  },
  {
    id: "R02_KUL_06",
    section: "Kultura polska pod zaborami",
    type: "multi_select",
    prompt: "Zaznacz cechy romantyzmu opisane w materiale.",
    options: ["odrzucenie racjonalizmu", "wiara w siłę uczuć i wyobraźni", "inspiracja tradycjami ludowymi", "zainteresowanie kulturą średniowiecza", "wyłączna wiara w rozum", "zakaz podejmowania tematu wolności"],
    answer: [0, 1, 2, 3],
    explanation: "Romantycy buntowali się przeciw racjonalizmowi, cenili emocje i wyobraźnię oraz czerpali inspiracje z tradycji ludowych i średniowiecza."
  },
  {
    id: "R02_KUL_07",
    section: "Kultura polska pod zaborami",
    type: "match",
    prompt: "Połącz twórcę romantycznego z dziedziną lub informacją.",
    options: null,
    left: ["Adam Mickiewicz", "Juliusz Słowacki", "Fryderyk Chopin", "Stanisław Moniuszko"],
    right: ["autor Pana Tadeusza", "polski wieszcz i autor dramatów", "kompozytor i wirtuoz fortepianu", "twórca polskiej opery narodowej"],
    answer: {
      "Adam Mickiewicz": "autor Pana Tadeusza",
      "Juliusz Słowacki": "polski wieszcz i autor dramatów",
      "Fryderyk Chopin": "kompozytor i wirtuoz fortepianu",
      "Stanisław Moniuszko": "twórca polskiej opery narodowej"
    },
    explanation: "Materiał wskazuje najważniejszych przedstawicieli polskiego romantyzmu w literaturze i muzyce.",
    image: "r02_romantycy_portrety.jpg"
  },
  {
    id: "R02_KUL_08",
    section: "Kultura polska pod zaborami",
    type: "riddle",
    prompt: "Jak nazywa się prąd filozoficzny uznający, że głównym źródłem poznania jest rozum ludzki?",
    options: null,
    answer: "racjonalizm",
    altAnswers: ["racjonalizm", "racjonalizmu"],
    explanation: "Racjonalizm podkreślał rolę rozumu. Romantycy odrzucali jego dominację i zwracali się ku uczuciom oraz wyobraźni."
  },
  {
    id: "R02_KUL_09",
    section: "Kultura polska pod zaborami",
    type: "single_choice",
    prompt: "Który filozof i działacz religijny rozwinął ideę polskiego mesjanizmu?",
    options: ["Andrzej Towiański", "Joachim Lelewel", "Adam Jerzy Czartoryski", "Stanisław Kostka Potocki", "Józef Maksymilian Ossoliński", "Stanisław Staszic"],
    answer: 0,
    explanation: "Ideę mesjanizmu rozwinął Andrzej Towiański, którego poglądy wywarły wpływ na polskich romantyków."
  },
  {
    id: "R02_KUL_10",
    section: "Kultura polska pod zaborami",
    type: "scenario",
    prompt: "Uważasz, że Polska przez cierpienie i walkę o niepodległość ma stać się Mesjaszem innych narodów. Jak nazywa się ta idea?",
    options: ["mesjanizm", "racjonalizm", "germanizacja", "rusyfikacja", "kontrybucja", "protektorat"],
    answer: 0,
    explanation: "Mesjanizm przypisywał narodowi polskiemu szczególną duchową misję i porównywał jego cierpienie do misji Mesjasza."
  },
  {
    id: "R02_KUL_11",
    section: "Kultura polska pod zaborami",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Adam Mickiewicz, Juliusz Słowacki, Fryderyk Chopin, Jakub Szela.",
    options: null,
    answer: "Jakub Szela",
    explanation: "Mickiewicz, Słowacki i Chopin należeli do twórców polskiego romantyzmu. Jakub Szela był przywódcą chłopów podczas rabacji galicyjskiej."
  },
  {
    id: "R02_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Który obszar Austria otrzymała po kongresie wiedeńskim obok okolic Wieliczki?",
    options: ["obwód tarnopolski", "ziemię chełmińską", "Kujawy", "Gdańsk", "Podlasie", "Wołyń"],
    answer: 0,
    explanation: "Austria otrzymała obwód tarnopolski i okolice Wieliczki, a całość ziem polskich pod zaborem austriackim nazywano Galicją."
  },
  {
    id: "R02_HARD_02",
    section: "Super trudne",
    type: "true_false",
    prompt: "W Rzeczypospolitej Krakowskiej mogły stacjonować wojska państw zaborczych, jeśli zgodę wyraził senat Krakowa.",
    options: null,
    answer: false,
    explanation: "Zasada neutralności oznaczała, że w Krakowie nie stacjonowały wojska państw zaborczych."
  },
  {
    id: "R02_HARD_03",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Sejm prowincjonalny w Wielkim Księstwie Poznańskim powołano w roku __________.",
    options: null,
    answer: ["1824"],
    altAnswers: [["1824", "1824 r."]],
    explanation: "W 1824 r. powołano sejm prowincjonalny, którego obrady toczyły się w języku polskim.",
    image: "r02_herb_poznanskie.jpg"
  },
  {
    id: "R02_HARD_04",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Który poseł złożył wniosek o detronizację cara Mikołaja I?",
    options: ["Roman Sołtyk", "Joachim Lelewel", "Wiktor Heltman", "Karol Libelt", "Edward Dembowski", "Piotr Wysocki"],
    answer: 0,
    explanation: "Akt detronizacji cara został uchwalony przez sejm na wniosek posła Romana Sołtyka."
  },
  {
    id: "R02_HARD_05",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Kiedy sejm wprowadził biało-czerwoną kokardę jako znak rozpoznawczy polskich oddziałów?",
    options: ["7 lutego 1831 r.", "25 stycznia 1831 r.", "25 lutego 1831 r.", "26 maja 1831 r.", "8 września 1831 r.", "21 października 1831 r."],
    answer: 0,
    explanation: "Sejm obradujący w Warszawie podjął decyzję o wprowadzeniu biało-czerwonej kokardy 7 lutego 1831 r.",
    image: "r02_godlo_powstania_listopadowego.jpg"
  },
  {
    id: "R02_HARD_06",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz ziemie poza Królestwem Polskim, na których toczyły się walki powstania listopadowego.",
    options: ["Litwa", "Podlasie", "Wołyń", "Podole", "Mazury", "Śląsk"],
    answer: [0, 1, 2, 3],
    explanation: "Walki objęły dawne ziemie polskie zagarnięte przez Rosję: Litwę, Podlasie, Wołyń i Podole."
  },
  {
    id: "R02_HARD_07",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz datę z wydarzeniem po powstaniu listopadowym.",
    options: null,
    left: ["1832", "1833", "1847"],
    right: ["wprowadzenie Statutu organicznego", "ogłoszenie stanu wojennego", "wprowadzenie rosyjskiego kodeksu karnego"],
    answer: {
      "1832": "wprowadzenie Statutu organicznego",
      "1833": "ogłoszenie stanu wojennego",
      "1847": "wprowadzenie rosyjskiego kodeksu karnego"
    },
    explanation: "Po klęsce powstania listopadowego kolejne decyzje cara stopniowo ograniczały dawną odrębność Królestwa Polskiego."
  },
  {
    id: "R02_HARD_08",
    section: "Super trudne",
    type: "scenario",
    prompt: "Jesteś emisariuszem, który na ziemiach zabranych głosi idee Stowarzyszenia Ludu Polskiego. Materiał podaje twoje nazwisko przy działalności spiskowej lat 30. XIX w. Kim jesteś?",
    options: ["Szymon Konarski", "Karol Libelt", "Henryk Kamieński", "Edward Dembowski", "Piotr Ściegienny", "Joachim Lelewel"],
    answer: 0,
    explanation: "Szymon Konarski głosił na ziemiach zabranych idee tajnego Stowarzyszenia Ludu Polskiego."
  },
  {
    id: "R02_HARD_09",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Henryk Kamieński, Edward Dembowski, Piotr Ściegienny, Adam Jerzy Czartoryski.",
    options: null,
    answer: "Adam Jerzy Czartoryski",
    explanation: "Kamieński, Dembowski i Ściegienny zostali wymienieni przy działalności spiskowej i społecznej w kraju. Czartoryski był przywódcą Hotelu Lambert na emigracji."
  },
  {
    id: "R02_HARD_10",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż wydarzenia z lat 1846-1848 w porządku chronologicznym.",
    options: null,
    items: ["dekret o uwłaszczeniu chłopów w Galicji", "wcielenie Krakowa do Austrii", "wybuch powstania krakowskiego", "utworzenie Komitetu Narodowego w Poznaniu"],
    answer: ["wybuch powstania krakowskiego", "wcielenie Krakowa do Austrii", "utworzenie Komitetu Narodowego w Poznaniu", "dekret o uwłaszczeniu chłopów w Galicji"],
    explanation: "Powstanie krakowskie wybuchło w lutym 1846 r., Kraków wcielono do Austrii w listopadzie 1846 r., a wydarzenia Wiosny Ludów w Poznaniu i Galicji nastąpiły w 1848 r."
  },
  {
    id: "R02_HARD_11",
    section: "Super trudne",
    type: "riddle",
    prompt: "Jak nazywał się poeta romantyczny, który w 1818 r. jako jeden z pierwszych ludzi na świecie zdobył Mont Blanc?",
    options: null,
    answer: "Antoni Malczewski",
    altAnswers: ["Antoni Malczewski", "Malczewski"],
    explanation: "Antoni Malczewski był poetą romantycznym i alpinistą; materiał podaje, że w 1818 r. zdobył Mont Blanc."
  },
  {
    id: "R02_HARD_12",
    section: "Super trudne",
    type: "true_false",
    prompt: "Joachim Lelewel był poliglotą i według materiału władał aż 12 językami.",
    options: null,
    answer: true,
    explanation: "Joachim Lelewel został przedstawiony jako człowiek o szerokich zdolnościach, w tym jako poliglota władający 12 językami."
  }
];

const KID_PROMPTS = {
  R02_POD_01: "W którym roku powstało Królestwo Polskie po kongresie wiedeńskim?",
  R02_POD_07: "Jak nazywa się samodzielne decydowanie o części własnych spraw?",
  R02_LIS_01: "Kto kierował Sprzysiężeniem Podchorążych?",
  R02_LIS_03: "W jaką noc wybuchło powstanie listopadowe?",
  R02_EMI_01: "Jak nazwano wyjazdy Polaków po klęsce powstania listopadowego?",
  R02_EMI_06: "Jak nazywał się tajny wysłannik emigracji do kraju?",
  R02_WIO_03: "Kto przewodził chłopom podczas rabacji galicyjskiej?",
  R02_WIO_06: "Kto dowodził powstaniem w Wielkopolsce w 1848 r.?",
  R02_KUL_05: "Jaka książka Mickiewicza rozpoczęła polski romantyzm?",
  R02_KUL_10: "Jak nazywała się wiara w szczególną misję Polski?"
};

const chapter = {
  id: "r02",
  number: 2,
  title: "Ziemie polskie po kongresie wiedeńskim",
  icon: "📜",
  sectionOrder: [
    "Po upadku Księstwa Warszawskiego",
    "Powstanie listopadowe",
    "Polacy po powstaniu listopadowym",
    "Wiosna Ludów na ziemiach polskich",
    "Kultura polska pod zaborami"
  ],
  sectionIcons: {
    "Po upadku Księstwa Warszawskiego": "🗺️",
    "Powstanie listopadowe": "⚔️",
    "Polacy po powstaniu listopadowym": "🧳",
    "Wiosna Ludów na ziemiach polskich": "🔥",
    "Kultura polska pod zaborami": "📚"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
