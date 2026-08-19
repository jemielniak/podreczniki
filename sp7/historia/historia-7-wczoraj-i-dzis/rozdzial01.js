// Skróty sekcji (do identyfikatorów ćwiczeń):
//   KNG  = Kongres wiedeński
//   PRZ  = Rewolucja przemysłowa
//   IDE  = Nowe idee polityczne
//   WIO  = Wiosna Ludów i rewolucje
//   KRY  = Wojna krymska
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R01_KNG_01",
    section: "Kongres wiedeński",
    type: "single_choice",
    prompt: "W którym mieście rozpoczęły się obrady kongresu po klęsce Napoleona?",
    options: ["W Wiedniu", "W Paryżu", "W Londynie", "W Berlinie", "W Petersburgu", "W Rzymie"],
    answer: 0,
    image: "r01_wieden_kongres.jpg",
    explanation: "Obrady kongresu rozpoczęły się w Wiedniu we wrześniu 1814 r. Miejsce wybrano między innymi ze względu na znaczenie austriackiej dyplomacji i przygotowanie miasta do przyjęcia gości."
  },
  {
    id: "R01_KNG_02",
    section: "Kongres wiedeński",
    type: "true_false",
    prompt: "Najważniejsze decyzje kongresu wiedeńskiego podejmowali przedstawiciele Rosji, Prus, Wielkiej Brytanii, Austrii i Francji.",
    options: null,
    answer: true,
    explanation: "Właśnie te pięc państw było najsilniejsze i decydujące o najważniejszych ustaleniach kongresu."
  },
  {
    id: "R01_KNG_03",
    section: "Kongres wiedeński",
    type: "fill_in",
    prompt: "Napoleon po pierwszej abdykacji został zesłany na wyspę __________, a po klęsce pod Waterloo na Wyspę __________.",
    options: null,
    answer: ["Elbę", "Świętej Heleny"],
    altAnswers: [
      ["Elbę", "Elba", "wyspę Elbę"],
      ["Świętej Heleny", "Wyspę Świętej Heleny", "Święta Helena"]
    ],
    explanation: "Po abdykacji Napoleon trafił na Elbę na Morzu Śródziemnym. Po bitwie pod Waterloo został uwięziony na Wyspie Świętej Heleny na Oceanie Atlantyckim."
  },
  {
    id: "R01_KNG_04",
    section: "Kongres wiedeński",
    type: "match",
    prompt: "Połącz zasadę ładu wiedeńskiego z jej znaczeniem.",
    options: null,
    left: ["restauracja", "legitymizm", "równowaga europejska"],
    right: ["powrót dawnych dynastii", "władza monarchów uznana za świętą i nienaruszalną", "brak dominacji jednego państwa w Europie"],
    answer: {
      "restauracja": "powrót dawnych dynastii",
      "legitymizm": "władza monarchów uznana za świętą i nienaruszalną",
      "równowaga europejska": "brak dominacji jednego państwa w Europie"
    },
    explanation: "Nowy porządek europejski po 1815 r. opierał się na restauracji, legitymizmie i równowadze europejskiej."
  },
  {
    id: "R01_KNG_05",
    section: "Kongres wiedeński",
    type: "multi_select",
    prompt: "Zaznacz państwa, które założyły Święte Przymierze we wrześniu 1815 r.",
    options: ["Austria", "Prusy", "Rosja", "Wielka Brytania", "Turcja", "Stany Zjednoczone"],
    answer: [0, 1, 2],
    image: "r01_swieto_przymierze_wladcy.jpg",
    explanation: "Święte Przymierze zawarli władcy Austrii, Prus i Rosji. Wielka Brytania, Turcja, Państwo Kościelne i Stany Zjednoczone pozostały poza sojuszem."
  },
  {
    id: "R01_KNG_06",
    section: "Kongres wiedeński",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Rosja, Prusy, Austria, Belgia.",
    options: null,
    answer: "Belgia",
    explanation: "Rosja, Prusy i Austria były założycielami Świętego Przymierza. Belgia została połączona z Holandią w Królestwo Zjednoczonych Niderlandów."
  },
  {
    id: "R01_KNG_07",
    section: "Kongres wiedeński",
    type: "sequence",
    prompt: "Ułóż wydarzenia w porządku chronologicznym.",
    options: null,
    items: ["bitwa pod Waterloo", "zesłanie Napoleona na Elbę", "zawarcie Świętego Przymierza", "rozpoczęcie kongresu w Wiedniu"],
    answer: ["zesłanie Napoleona na Elbę", "rozpoczęcie kongresu w Wiedniu", "bitwa pod Waterloo", "zawarcie Świętego Przymierza"],
    explanation: "Napoleon został zesłany na Elbę po abdykacji, kongres rozpoczął się we wrześniu 1814 r., bitwa pod Waterloo odbyła się 18 czerwca 1815 r., a Święte Przymierze zawarto we wrześniu 1815 r."
  },
  {
    id: "R01_KNG_08",
    section: "Kongres wiedeński",
    type: "scenario",
    prompt: "Jesteś dyplomatą w 1815 r. i bronisz zasady, że po epoce Napoleona trony powinni odzyskać dawni władcy. Którą zasadę popierasz?",
    options: ["restaurację", "industrializację", "urbanizację", "komunizm", "uwłaszczenie", "rewolucję lutową"],
    answer: 0,
    explanation: "Restauracja oznaczała powrót do władzy dynastii obalonych podczas rewolucji francuskiej i przez Napoleona."
  },
  {
    id: "R01_KNG_09",
    section: "Kongres wiedeński",
    type: "sort",
    prompt: "Przyporządkuj skutki kongresu do obszarów Europy.",
    options: null,
    items: ["Związek Niemiecki", "Królestwo Zjednoczonych Niderlandów", "Państwo Kościelne", "podział Księstwa Warszawskiego"],
    categories: ["ziemie niemieckie", "Belgia i Holandia", "Włochy", "ziemie polskie"],
    answer: {
      "ziemie niemieckie": ["Związek Niemiecki"],
      "Belgia i Holandia": ["Królestwo Zjednoczonych Niderlandów"],
      "Włochy": ["Państwo Kościelne"],
      "ziemie polskie": ["podział Księstwa Warszawskiego"]
    },
    explanation: "Kongres zlikwidował Związek Reński, połączył Belgię i Holandię, przywrócił Państwo Kościelne oraz podzielił ziemie Księstwa Warszawskiego."
  },
  {
    id: "R01_KNG_10",
    section: "Kongres wiedeński",
    type: "riddle",
    prompt: "Jak nazywa się rezygnacja władcy z tronu?",
    options: null,
    answer: "abdykacja",
    altAnswers: ["abdykacja", "abdykowanie", "rezygnacja z tronu"],
    explanation: "Napoleon abdykował po klęsce Francji w 1814 roku."
  },
  {
    id: "R01_PRZ_01",
    section: "Rewolucja przemysłowa",
    type: "single_choice",
    prompt: "W którym kraju rozpoczęła się rewolucja przemysłowa?",
    options: ["W Wielkiej Brytanii", "We Francji", "W Rosji", "W Austrii", "W Hiszpanii", "W Królestwie Sardynii"],
    answer: 0,
    explanation: "Rewolucja przemysłowa rozpoczęła się w Wielkiej Brytanii w drugiej połowie XVIII w., a później objęła inne kraje europejskie."
  },
  {
    id: "R01_PRZ_02",
    section: "Rewolucja przemysłowa",
    type: "riddle",
    prompt: "Jak nazywał się szkocki konstruktor maszyny parowej z 1763 r.?",
    options: null,
    answer: "James Watt",
    altAnswers: ["James Watt", "Watt", "Jamesa Watta"],
    image: "r01_maszyna_parowa.jpg",
    explanation: "Maszyna parowa skonstruowana przez Jamesa Watta miała decydujący wpływ na rozwój przemysłu."
  },
  {
    id: "R01_PRZ_03",
    section: "Rewolucja przemysłowa",
    type: "match",
    prompt: "Połącz pojęcie z opisem.",
    options: null,
    left: ["manufaktura", "fabryka", "industrializacja"],
    right: ["zakład oparty na ręcznej pracy etapowej", "zakład wykorzystujący pracę ludzi i maszyn", "przemiany związane z rozwojem przemysłu"],
    answer: {
      "manufaktura": "zakład oparty na ręcznej pracy etapowej",
      "fabryka": "zakład wykorzystujący pracę ludzi i maszyn",
      "industrializacja": "przemiany związane z rozwojem przemysłu"
    },
    explanation: "Dzięki maszynie parowej manufaktury stopniowo przekształcały się w fabryki, a całość tych przemian określa się jako industrializację."
  },
  {
    id: "R01_PRZ_04",
    section: "Rewolucja przemysłowa",
    type: "multi_select",
    prompt: "Zaznacz dziedziny brytyjskiej gospodarki, które rozwijały się szczególnie dynamicznie podczas rewolucji przemysłowej.",
    options: ["przemysł włókienniczy i tekstylny", "hutnictwo", "górnictwo", "transport", "zakony rycerskie", "malarstwo dworskie"],
    answer: [0, 1, 2, 3],
    explanation: "Wśród najdynamiczniej rozwijających się dziedzin wymieniono przemysł włókienniczy i tekstylny, hutnictwo, górnictwo oraz transport."
  },
  {
    id: "R01_PRZ_05",
    section: "Rewolucja przemysłowa",
    type: "true_false",
    prompt: "Maszyna parowa mogła być wykorzystywana w przemyśle, transporcie wodnym i transporcie kolejowym.",
    options: null,
    answer: true,
    image: "r01_parowy_transport.jpg",
    explanation: "Infografika pokazuje zastosowanie maszyny parowej w fabrykach, statkach parowych i lokomotywach."
  },
  {
    id: "R01_PRZ_06",
    section: "Rewolucja przemysłowa",
    type: "fill_in",
    prompt: "Telegraf udoskonalony w 1837 r. przez Samuela __________ przekazywał wiadomości za pomocą impulsów __________.",
    options: null,
    answer: ["Morse'a", "elektrycznych"],
    altAnswers: [
      ["Morse'a", "Morse", "Samuela Morse'a"],
      ["elektrycznych", "elektryczne"]
    ],
    explanation: "Samuel Morse udoskonalił telegraf, który przesyłał informacje na odległość za pomocą impulsów elektrycznych płynących w przewodach."
  },
  {
    id: "R01_PRZ_07",
    section: "Rewolucja przemysłowa",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: lokomotywa parowa, statek parowy, telegraf, maczuga.",
    options: null,
    answer: "maczuga",
    explanation: "Lokomotywa parowa, statek parowy i telegraf są wynalazkami lub urządzeniami omawianymi przy rewolucji przemysłowej. Maczuga nie należy do tej epoki technicznej."
  },
  {
    id: "R01_PRZ_08",
    section: "Rewolucja przemysłowa",
    type: "scenario",
    prompt: "W XIX-wiecznym mieście szybko przybywa mieszkańców ze wsi, powstają fabryki, a miasto gwałtownie się rozrasta. Jak nazywa się ten proces?",
    options: ["urbanizacja", "restauracja", "legitymizm", "abdykacja", "cenzura", "uwłaszczenie"],
    answer: 0,
    explanation: "Urbanizacja to gwałtowne rozrastanie się miast, związane między innymi z napływem ludności wiejskiej szukającej pracy w przemyśle."
  },
  {
    id: "R01_PRZ_09",
    section: "Rewolucja przemysłowa",
    type: "sort",
    prompt: "Przyporządkuj cechy do systemu lub zjawiska.",
    options: null,
    items: ["prywatna własność", "swoboda konkurencji", "rozrastanie się miast", "napływ mieszkańców wsi do miast"],
    categories: ["kapitalizm", "urbanizacja"],
    answer: {
      "kapitalizm": ["prywatna własność", "swoboda konkurencji"],
      "urbanizacja": ["rozrastanie się miast", "napływ mieszkańców wsi do miast"]
    },
    explanation: "Kapitalizm opierał się między innymi na prywatnej własności i swobodzie konkurencji. Urbanizacja oznaczała szybki rozwój miast i napływ ludności ze wsi."
  },
  {
    id: "R01_PRZ_10",
    section: "Rewolucja przemysłowa",
    type: "sequence",
    prompt: "Ułóż elementy procesu w kolejności przyczynowo-skutkowej.",
    options: null,
    items: ["powstanie cywilizacji przemysłowej", "poszukiwanie wydajniejszych metod produkcji", "skonstruowanie maszyny parowej", "rozwój fabryk"],
    answer: ["poszukiwanie wydajniejszych metod produkcji", "skonstruowanie maszyny parowej", "rozwój fabryk", "powstanie cywilizacji przemysłowej"],
    explanation: "Rosnące zapotrzebowanie na towary prowadziło do szukania wydajniejszych metod produkcji. Maszyna parowa przyspieszyła rozwój fabryk i przemiany cywilizacyjne."
  },
  {
    id: "R01_IDE_01",
    section: "Nowe idee polityczne",
    type: "single_choice",
    prompt: "Od którego łacińskiego słowa pochodzi nazwa liberalizmu?",
    options: ["liber", "legitimus", "restaurare", "diekabr", "kapitał", "metropolia"],
    answer: 0,
    explanation: "Nazwa liberalizmu pochodzi od łacińskiego słowa liber, czyli wolny."
  },
  {
    id: "R01_IDE_02",
    section: "Nowe idee polityczne",
    type: "multi_select",
    prompt: "Zaznacz poglądy charakterystyczne dla liberałów.",
    options: ["wolność i swobodny rozwój człowieka są najważniejsze", "obywatele powinni być równi wobec prawa", "wolność słowa i wyznania to prawo obywatela", "należy bronić dziedzicznej monarchii", "własność prywatna ma być zlikwidowana"],
    answer: [0, 1, 2],
    explanation: "Liberałowie głosili wolność jednostki, równość wobec prawa oraz wolność słowa i wyznania. Obrona dziedzicznej monarchii była cechą konserwatyzmu, a likwidacja własności prywatnej komunizmu."
  },
  {
    id: "R01_IDE_03",
    section: "Nowe idee polityczne",
    type: "match",
    prompt: "Połącz ideologię z powiązaną z nią postacią.",
    options: null,
    left: ["liberalizm", "konserwatyzm", "socjalizm", "komunizm"],
    right: ["Adam Smith", "Edmund Burke", "Robert Owen", "Karol Marks"],
    answer: {
      "liberalizm": "Adam Smith",
      "konserwatyzm": "Edmund Burke",
      "socjalizm": "Robert Owen",
      "komunizm": "Karol Marks"
    },
    image: "r01_ideologie_postacie.jpg",
    explanation: "W tabeli jako ważne postaci wskazano między innymi Adama Smitha przy liberalizmie, Edmunda Burke'a przy konserwatyzmie, Roberta Owena przy socjalizmie i Karola Marksa przy komunizmie."
  },
  {
    id: "R01_IDE_04",
    section: "Nowe idee polityczne",
    type: "true_false",
    prompt: "Konserwatyści uważali, że społeczeństwo powinno rozwijać się ewolucyjnie, a nie przez gwałtowne przewroty.",
    options: null,
    answer: true,
    explanation: "Konserwatyzm sprzeciwiał się rewolucyjnym przewrotom i bronił monarchii, religii, Kościoła oraz tradycyjnego porządku."
  },
  {
    id: "R01_IDE_05",
    section: "Nowe idee polityczne",
    type: "fill_in",
    prompt: "Zamożnych właścicieli fabryk nazywano __________, a ubogich robotników __________.",
    options: null,
    answer: ["fabrykantami", "proletariatem"],
    altAnswers: [
      ["fabrykantami", "fabrykanci"],
      ["proletariatem", "proletariat"]
    ],
    explanation: "Rozwój przemysłu doprowadził do powstania nowych grup społecznych: fabrykantów i liczniejszego proletariatu."
  },
  {
    id: "R01_IDE_06",
    section: "Nowe idee polityczne",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: monarchia, dziedziczność tronu, tradycyjne wartości, likwidacja własności prywatnej.",
    options: null,
    answer: "likwidacja własności prywatnej",
    explanation: "Monarchia, dziedziczność tronu i tradycyjne wartości należały do poglądów konserwatystów. Likwidacja własności prywatnej była postulatem komunizmu."
  },
  {
    id: "R01_IDE_07",
    section: "Nowe idee polityczne",
    type: "scenario",
    prompt: "Robotnicy przerywają pracę, aby wymusić na właścicielu fabryki podwyższenie zarobków i poprawę warunków pracy. Jak nazywa się taka forma protestu?",
    options: ["strajk", "restauracja", "giełda", "legitymizm", "blokada kontynentalna", "abdykacja"],
    answer: 0,
    image: "r01_ruch_robotniczy.jpg",
    explanation: "Strajki były jedną z form walki robotników o poprawę warunków pracy i życia."
  },
  {
    id: "R01_IDE_08",
    section: "Nowe idee polityczne",
    type: "riddle",
    prompt: "Jak nazywała się organizacja pracowników dbająca o przestrzeganie ich praw przez pracodawców?",
    options: null,
    answer: "związek zawodowy",
    altAnswers: ["związek zawodowy", "związki zawodowe", "zwiazek zawodowy"],
    explanation: "Związki zawodowe powstały jako kolejny etap walki robotników o poprawę sytuacji. Najwcześniej pojawiły się w Wielkiej Brytanii."
  },
  {
    id: "R01_IDE_09",
    section: "Nowe idee polityczne",
    type: "sort",
    prompt: "Przyporządkuj postulaty do ideologii.",
    options: null,
    items: ["wolna konkurencja", "obrona tradycyjnych wartości", "pokojowa poprawa losu robotników", "rewolucyjne obalenie kapitalizmu"],
    categories: ["liberalizm", "konserwatyzm", "socjalizm", "komunizm"],
    answer: {
      "liberalizm": ["wolna konkurencja"],
      "konserwatyzm": ["obrona tradycyjnych wartości"],
      "socjalizm": ["pokojowa poprawa losu robotników"],
      "komunizm": ["rewolucyjne obalenie kapitalizmu"]
    },
    explanation: "Główne ideologie XIX w. to: liberalizm, konserwatyzm, socjalizm i komunizm."
  },
  {
    id: "R01_IDE_10",
    section: "Nowe idee polityczne",
    type: "single_choice",
    prompt: "W którym roku wydano Manifest komunistyczny?",
    options: ["1848", "1815", "1763", "1837", "1856", "1825"],
    answer: 0,
    explanation: "Karol Marks i Fryderyk Engels zawarli najważniejsze postulaty komunizmu w Manifeście komunistycznym wydanym w 1848 r."
  },
  {
    id: "R01_WIO_01",
    section: "Wiosna Ludów i rewolucje",
    type: "single_choice",
    prompt: "Jak nazywano rosyjskich spiskowców, którzy podjęli próbę przewrotu w grudniu 1825 r.?",
    options: ["dekabryści", "fabrykanci", "liberałowie", "burżuazja", "komunardzi", "restauratorzy"],
    answer: 0,
    explanation: "Powstanie dekabrystów w Rosji wybuchło w grudniu 1825 r. Nazwa pochodzi od rosyjskiego słowa diekabr, czyli grudzień."
  },
  {
    id: "R01_WIO_02",
    section: "Wiosna Ludów i rewolucje",
    type: "true_false",
    prompt: "Rewolucja lipcowa we Francji wybuchła w 1830 r. przeciwko rządom Karola X.",
    options: null,
    answer: true,
    image: "r01_rewolucja_lipcowa.jpg",
    explanation: "Karol X wzmacniał cenzurę, ograniczał rolę parlamentu i zmniejszył liczbę osób z prawem wyborczym, co doprowadziło do rewolucji lipcowej w Paryżu."
  },
  {
    id: "R01_WIO_03",
    section: "Wiosna Ludów i rewolucje",
    type: "multi_select",
    prompt: "Zaznacz przyczyny Wiosny Ludów.",
    options: ["fala nieurodzaju i głodu w latach 1845-1847", "żądania poprawy warunków pracy i życia robotników", "postulaty rozszerzenia praw obywatelskich", "tendencje niepodległościowe i zjednoczeniowe", "wyprawa Napoleona na Elbę"],
    answer: [0, 1, 2, 3],
    explanation: "Do przyczyn Wiosny Ludów należały głód i epidemie, żądania robotników, postulaty praw obywatelskich oraz dążenia niepodległościowe i zjednoczeniowe."
  },
  {
    id: "R01_WIO_04",
    section: "Wiosna Ludów i rewolucje",
    type: "fill_in",
    prompt: "Pierwsze walki Wiosny Ludów rozpoczęły się we __________ pod koniec lutego __________ r.",
    options: null,
    answer: ["Francji", "1848"],
    altAnswers: [
      ["Francji", "Francja"],
      ["1848", "1848 r."]
    ],
    explanation: "Początek Wiośnie Ludów dała rewolucja lutowa we Francji w 1848 r."
  },
  {
    id: "R01_WIO_05",
    section: "Wiosna Ludów i rewolucje",
    type: "match",
    prompt: "Połącz wydarzenie z miejscem.",
    options: null,
    left: ["rewolucja lipcowa", "powstanie dekabrystów", "rewolucja w Berlinie", "powstanie przeciw Austrii"],
    right: ["Francja", "Rosja", "Prusy", "Węgry"],
    answer: {
      "rewolucja lipcowa": "Francja",
      "powstanie dekabrystów": "Rosja",
      "rewolucja w Berlinie": "Prusy",
      "powstanie przeciw Austrii": "Węgry"
    },
    explanation: "Wystąpienia przeciw ładowi wiedeńskiemu miały miejsce m.in. w Rosji, Francji, Prusach i na Węgrzech."
  },
  {
    id: "R01_WIO_06",
    section: "Wiosna Ludów i rewolucje",
    type: "scenario",
    prompt: "Jest marzec 1848 r. Król pruski zgadza się na zwołanie parlamentu, zniesienie cenzury, uchwalenie konstytucji i uwolnienie więźniów politycznych. W którym mieście wybuchła ta rewolucja?",
    options: ["w Berlinie", "w Paryżu", "w Wiedniu", "w Rzymie", "w Petersburgu", "w Lyonie"],
    answer: 0,
    explanation: "W marcu 1848 r. rewolucja wybuchła w Berlinie, a Fryderyk Wilhelm IV początkowo zgodził się na najważniejsze postulaty."
  },
  {
    id: "R01_WIO_07",
    section: "Wiosna Ludów i rewolucje",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Polacy, Węgrzy, Niemcy, Brytyjczycy.",
    options: null,
    answer: "Brytyjczycy",
    explanation: "Polacy i Węgrzy dążyli do niepodległości, a Niemcy do zjednoczenia. W podsumowaniu wskazano, że Wiosna Ludów objęła prawie cały kontynent poza Rosją i Wielką Brytanią."
  },
  {
    id: "R01_WIO_08",
    section: "Wiosna Ludów i rewolucje",
    type: "sequence",
    prompt: "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    options: null,
    items: ["Wiosna Ludów", "powstanie dekabrystów", "rewolucja lipcowa", "wojna krymska"],
    answer: ["powstanie dekabrystów", "rewolucja lipcowa", "Wiosna Ludów", "wojna krymska"],
    explanation: "Powstanie dekabrystów miało miejsce w 1825 r., rewolucja lipcowa w 1830 r., Wiosna Ludów w 1848 r., a wojna krymska rozpoczęła się w 1853 r."
  },
  {
    id: "R01_WIO_09",
    section: "Wiosna Ludów i rewolucje",
    type: "riddle",
    prompt: "Jak nazywało się nadanie chłopom na własność użytkowanej przez nich ziemi?",
    options: null,
    answer: "uwłaszczenie chłopów",
    altAnswers: ["uwłaszczenie chłopów", "uwłaszczenie", "uwlaszczenie chlopow"],
    explanation: "Uwłaszczenie chłopów oznaczało nadanie im na własność użytkowanej ziemi."
  },
  {
    id: "R01_WIO_10",
    section: "Wiosna Ludów i rewolucje",
    type: "single_choice",
    prompt: "Kto został pierwszym prezydentem republiki francuskiej w grudniu 1848 r.?",
    options: ["Ludwik Napoleon Bonaparte", "Karol X", "Ludwik Filip", "Fryderyk Wilhelm IV", "Franciszek Józef I", "Mikołaj I"],
    answer: 0,
    explanation: "Po uchwaleniu konstytucji pierwszym prezydentem republiki został Ludwik Napoleon Bonaparte, bratanek Napoleona I."
  },
  {
    id: "R01_KRY_01",
    section: "Wojna krymska",
    type: "single_choice",
    prompt: "W którym roku wybuchła wojna krymska?",
    options: ["1853", "1815", "1825", "1830", "1848", "1856"],
    answer: 0,
    explanation: "Wojna krymska wybuchła w 1853 r. i została tak nazwana, ponieważ największe walki toczyły się na Półwyspie Krymskim."
  },
  {
    id: "R01_KRY_02",
    section: "Wojna krymska",
    type: "multi_select",
    prompt: "Zaznacz państwa, które poparły Turcję w wojnie krymskiej.",
    options: ["Wielka Brytania", "Francja", "Królestwo Sardynii", "Rosja", "Prusy", "Austria"],
    answer: [0, 1, 2],
    explanation: "Wbrew oczekiwaniom cara Turcję poparły Wielka Brytania, Francja i Królestwo Sardynii."
  },
  {
    id: "R01_KRY_03",
    section: "Wojna krymska",
    type: "true_false",
    prompt: "Rosja chciała opanować cieśniny łączące Morze Czarne z Morzem Śródziemnym.",
    options: null,
    answer: true,
    image: "r01_morze_czarne_ciesniny.jpg",
    explanation: "Jedną z przyczyn wojny krymskiej było dążenie Rosji do opanowania cieśnin łączących Morze Czarne z Morzem Śródziemnym."
  },
  {
    id: "R01_KRY_04",
    section: "Wojna krymska",
    type: "fill_in",
    prompt: "Traktat pokojowy kończący wojnę krymską podpisano w __________ w roku __________.",
    options: null,
    answer: ["Paryżu", "1856"],
    altAnswers: [
      ["Paryżu", "Paryż", "w Paryżu"],
      ["1856", "1856 r."]
    ],
    explanation: "W 1856 r. podpisano w Paryżu traktat pokojowy, który uznał Morze Czarne za obszar neutralny."
  },
  {
    id: "R01_KRY_05",
    section: "Wojna krymska",
    type: "match",
    prompt: "Połącz osobę lub państwo z rolą w wydarzeniach.",
    options: null,
    left: ["Mikołaj I", "Aleksander II", "Turcja", "Rosja"],
    right: ["car zachęcony sukcesami na Węgrzech", "następca zmuszony do zakończenia wojny", "państwo zaatakowane przez Rosję", "państwo osłabione po wojnie"],
    answer: {
      "Mikołaj I": "car zachęcony sukcesami na Węgrzech",
      "Aleksander II": "następca zmuszony do zakończenia wojny",
      "Turcja": "państwo zaatakowane przez Rosję",
      "Rosja": "państwo osłabione po wojnie"
    },
    explanation: "Mikołaj I rozpoczął konflikt z Turcją, a po jego śmierci Aleksander II musiał zakończyć wojnę. Skutkiem była słabość militarna i gospodarcza Rosji."
  },
  {
    id: "R01_KRY_06",
    section: "Wojna krymska",
    type: "scenario",
    prompt: "Po wojnie podpisano traktat, który zabronił przebywania floty wojennej Rosji i Turcji na jednym akwenie. O który akwen chodzi?",
    options: ["Morze Czarne", "Morze Bałtyckie", "Morze Północne", "Morze Adriatyckie", "Ocean Atlantycki", "Morze Śródziemne"],
    answer: 0,
    explanation: "Traktat paryski uznał Morze Czarne za obszar neutralny, na którym nie mogła przebywać flota wojenna Rosji ani Turcji."
  },
  {
    id: "R01_KRY_07",
    section: "Wojna krymska",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Wielka Brytania, Francja, Królestwo Sardynii, Rosja.",
    options: null,
    answer: "Rosja",
    explanation: "Wielka Brytania, Francja i Królestwo Sardynii poparły Turcję. Rosja była jej przeciwnikiem w wojnie krymskiej."
  },
  {
    id: "R01_KRY_08",
    section: "Wojna krymska",
    type: "sort",
    prompt: "Przyporządkuj informacje do przyczyn i skutków wojny krymskiej.",
    options: null,
    items: ["chęć opanowania cieśnin", "atak Rosji na Turcję", "neutralizacja Morza Czarnego", "osłabienie pozycji Rosji"],
    categories: ["przyczyny", "skutki"],
    answer: {
      "przyczyny": ["chęć opanowania cieśnin", "atak Rosji na Turcję"],
      "skutki": ["neutralizacja Morza Czarnego", "osłabienie pozycji Rosji"]
    },
    explanation: "Rosja zaatakowała Turcję, aby opanować cieśniny. Po wojnie Morze Czarne uznano za neutralne, a znaczenie Rosji w tym rejonie spadło."
  },
  {
    id: "R01_KRY_09",
    section: "Wojna krymska",
    type: "sequence",
    prompt: "Ułóż wydarzenia wojny krymskiej w kolejności.",
    options: null,
    items: ["traktat pokojowy w Paryżu", "śmierć cara Mikołaja I", "atak Rosji na Turcję", "poparcie Turcji przez trzy państwa"],
    answer: ["atak Rosji na Turcję", "poparcie Turcji przez trzy państwa", "śmierć cara Mikołaja I", "traktat pokojowy w Paryżu"],
    explanation: "Rosja zaatakowała Turcję w 1853 r., Turcję poparły Wielka Brytania, Francja i Królestwo Sardynii, a po śmierci Mikołaja I Aleksander II musiał zakończyć konflikt traktatem w 1856 r."
  },
  {
    id: "R01_KRY_10",
    section: "Wojna krymska",
    type: "riddle",
    prompt: "Jak nazywał się półwysep, na którym toczyły się największe walki wojny rozpoczętej w 1853 r.?",
    options: null,
    answer: "Półwysep Krymski",
    altAnswers: ["Półwysep Krymski", "Krym", "półwysep Krymski"],
    image: "r01_wojna_krymska.jpg",
    explanation: "Największe walki wojny krymskiej toczyły się na Półwyspie Krymskim, stąd nazwa konfliktu."
  },
  {
    id: "R01_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Który polityk austriacki kierował dyplomacją, której uznaniem był wybór Wiednia na miejsce kongresu?",
    options: ["Klemens von Metternich", "Charles Talleyrand", "Robert Stewart Castlereagh", "Adam Jerzy Czartoryski", "Aleksander I", "Fryderyk Wilhelm III"],
    answer: 0,
    explanation: "Wybór Wiednia był wyrazem uznania dla austriackiej dyplomacji kierowanej przez Klemensa von Metternicha."
  },
  {
    id: "R01_HARD_02",
    section: "Super trudne",
    type: "true_false",
    prompt: "Wspólne posiedzenie wszystkich uczestników kongresu wiedeńskiego nigdy się nie odbyło.",
    options: null,
    answer: true,
    explanation: "W Wiedniu było prawie 150 monarchów, książąt i pretendentów oraz 450 dyplomatów, dlatego wszyscy uczestnicy nie zebrali się w jednej sali."
  },
  {
    id: "R01_HARD_03",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Za inaugurację kongresu zazwyczaj przyjmuje się bal maskowy z __________ października __________ r.",
    options: null,
    answer: ["2", "1814"],
    altAnswers: [
      ["2", "2."],
      ["1814", "1814 r."]
    ],
    explanation: "Kongres nie miał oficjalnego otwarcia. Za jego inaugurację zwykle uznaje się bal maskowy z 2 października 1814 r."
  },
  {
    id: "R01_HARD_04",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz dyplomatę z państwem, które reprezentował lub którego interesów bronił.",
    options: null,
    left: ["Robert Stewart Castlereagh", "Klemens von Metternich", "Adam Jerzy Czartoryski", "Charles Talleyrand"],
    right: ["Wielka Brytania", "Austria", "Rosja", "Francja"],
    answer: {
      "Robert Stewart Castlereagh": "Wielka Brytania",
      "Klemens von Metternich": "Austria",
      "Adam Jerzy Czartoryski": "Rosja",
      "Charles Talleyrand": "Francja"
    },
    explanation: "Główni dyplomaci kongresu: Castlereagha, Metternicha, Czartoryskiego i Talleyranda."
  },
  {
    id: "R01_HARD_05",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Kiedy podpisano akt końcowy kongresu wiedeńskiego?",
    options: ["9 czerwca 1815 r.", "18 czerwca 1815 r.", "2 października 1814 r.", "we wrześniu 1815 r.", "w marcu 1815 r.", "w 1856 r."],
    answer: 0,
    explanation: "Po ponad dziewięciu miesiącach obrad akt końcowy kongresu podpisano 9 czerwca 1815 r."
  },
  {
    id: "R01_HARD_06",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz ustalenia lub działania związane z kongresem wiedeńskim opisane w tekście rozszerzającym.",
    options: ["uchwalenie deklaracji o zakazie handlu niewolnikami", "uregulowanie rang przedstawicieli dyplomatycznych", "praca 10 komisji roboczych", "oficjalne wspólne posiedzenie wszystkich uczestników", "zamknięcie obrad uroczystą ceremonią"],
    answer: [0, 1, 2],
    explanation: "Podczas kongresu uchwalono deklarację o zakazie handlu niewolnikami, przyjęto regulamin dyplomatyczny i pracowano w 10 komisjach. Nie odbyło się wspólne posiedzenie ani oficjalne uroczyste zamknięcie."
  },
  {
    id: "R01_HARD_07",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Belgia, Hiszpania, Włochy, ziemie polskie.",
    options: null,
    answer: "Hiszpania",
    explanation: "Włochy, Belgia i ziemie polskie pojawiają się w opisie zmian terytorialnych po kongresie. Hiszpania jest wymieniona przy powstaniach przeciw ładowi wiedeńskiemu, ale nie w tej liście zmian granic."
  },
  {
    id: "R01_HARD_08",
    section: "Super trudne",
    type: "scenario",
    prompt: "W czasie kongresu bronisz interesów pokonanej Francji i dzięki zręczności dyplomatycznej sprawiasz, że staje się ona pełnoprawnym uczestnikiem obrad. Kim jesteś?",
    options: ["Charles Talleyrand", "Robert Owen", "George Stephenson", "Samuel Morse", "Karol Marks", "Fryderyk Engels"],
    answer: 0,
    explanation: "Interesów Francji bronił Charles Talleyrand. Dzięki jego talentom dyplomatycznym Francja z państwa traktowanego jak wróg stała się pełnoprawnym uczestnikiem obrad."
  },
  {
    id: "R01_HARD_09",
    section: "Super trudne",
    type: "sort",
    prompt: "Przyporządkuj osoby do dziedzin lub wydarzeń.",
    options: null,
    items: ["James Watt", "Michael Faraday", "Samuel Morse", "George Stephenson"],
    categories: ["maszyna parowa", "elektryczność", "telegraf", "lokomotywa"],
    answer: {
      "maszyna parowa": ["James Watt"],
      "elektryczność": ["Michael Faraday"],
      "telegraf": ["Samuel Morse"],
      "lokomotywa": ["George Stephenson"]
    },
    explanation: "Watt - maszyna parowa, Faraday - odkryciac elektryczne, Morse - telegraf, Stephenson - lokomotywa parowa."
  },
  {
    id: "R01_HARD_10",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Który ośrodek wskazano jako jeden z najważniejszych ośrodków przemysłowych Europy w państwach niemieckich?",
    options: ["Zagłębie Ruhry", "Łąka Laffrey", "Wyspa Elba", "Półwysep Krymski", "Morze Czarne", "Królestwo Sardynii"],
    answer: 0,
    explanation: "W państwach niemieckich, szczególnie w Prusach, rozwijał się przemysł w Zagłębiu Ruhry oraz na Śląsku."
  },
  {
    id: "R01_HARD_11",
    section: "Super trudne",
    type: "true_false",
    prompt: "W XIX w. we wschodniej Europie rewolucja przemysłowa przebiegała tak szybko jak na zachodzie kontynentu.",
    options: null,
    answer: false,
    explanation: "We wschodniej Europie rewolucja przemysłowa nie przebiegała tak szybko, między innymi z powodu praw feudalnych ograniczających przenoszenie się chłopów do miast."
  },
  {
    id: "R01_HARD_12",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Robert Owen zakazał pracy dzieci poniżej __________ roku życia i zapewnił robotnikom opiekę __________.",
    options: null,
    answer: ["10.", "socjalną"],
    altAnswers: [
      ["10.", "10", "dziesiątego"],
      ["socjalną", "socjalna"]
    ],
    explanation: "Opis Roberta Owena podaje, że w swoim mieście-przedsiębiorstwie zakazał pracy dzieci poniżej 10. roku życia i zapewnił robotnikom opiekę socjalną."
  },
  {
    id: "R01_HARD_13",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż wydarzenia związane z Francją i Wiosną Ludów w kolejności.",
    options: null,
    items: ["powstanie robotników w Paryżu", "rewolucja lutowa", "uchwalenie nowej konstytucji", "wybór Ludwika Napoleona Bonapartego"],
    answer: ["rewolucja lutowa", "powstanie robotników w Paryżu", "uchwalenie nowej konstytucji", "wybór Ludwika Napoleona Bonapartego"],
    explanation: "Rewolucja lutowa wybuchła pod koniec lutego 1848 r., powstanie robotników w czerwcu, konstytucję uchwalono jesienią, a Ludwika Napoleona wybrano w grudniu 1848 r."
  },
  {
    id: "R01_HARD_14",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz ustępstwa, na które początkowo zgodził się cesarz Ferdynand I w Austrii podczas Wiosny Ludów.",
    options: ["powołanie nowego rządu", "uchwalenie konstytucji", "wprowadzenie podstawowych wolności politycznych", "utworzenie Republiki Rzymskiej", "neutralizacja Morza Czarnego"],
    answer: [0, 1, 2],
    explanation: "W Austrii Ferdynand I zgodził się początkowo na powołanie nowego rządu, konstytucję i podstawowe wolności polityczne."
  },
  {
    id: "R01_HARD_15",
    section: "Super trudne",
    type: "scenario",
    prompt: "Jest lato 1849 r. Powstanie, którego naczelnym wodzem został polski generał Józef Bem, zostaje stłumione przez Rosję jako sojusznika Austrii. O które powstanie chodzi?",
    options: ["powstanie węgierskie", "powstanie dekabrystów", "rewolucję lipcową", "rewolucję w Berlinie", "rewolucję w Państwie Kościelnym", "wojnę krymską"],
    answer: 0,
    explanation: "Podczas Wiosny Ludów Józef Bem został naczelnym wodzem wojsk węgierskich. Latem 1849 r. powstanie węgierskie stłumiła Rosja, sojusznik Austrii w Świętym Przymierzu."
  }
];

const KID_PROMPTS = {
  "R01_KNG_04": "Połącz każdą zasadę kongresu z prostym opisem.",
  "R01_PRZ_08": "Jak nazywa się szybkie rozrastanie miast?",
  "R01_IDE_09": "Dopasuj poglądy do ideologii.",
  "R01_WIO_03": "Co sprawiło, że wybuchła Wiosna Ludów?",
  "R01_KRY_08": "Co było przyczyną, a co skutkiem wojny krymskiej?"
};

const chapter = {
  id: "r01",
  number: 1,
  title: "Europa po kongresie wiedeńskim",
  icon: "🏛️",
  sectionOrder: [
    "Kongres wiedeński",
    "Rewolucja przemysłowa",
    "Nowe idee polityczne",
    "Wiosna Ludów i rewolucje",
    "Wojna krymska"
  ],
  sectionIcons: {
    "Kongres wiedeński": "🤝",
    "Rewolucja przemysłowa": "⚙️",
    "Nowe idee polityczne": "💡",
    "Wiosna Ludów i rewolucje": "🚩",
    "Wojna krymska": "⚔️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
