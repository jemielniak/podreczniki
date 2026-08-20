// Skróty sekcji (do identyfikatorów ćwiczeń):
//   JAP  = Japonia i Chiny na Dalekim Wschodzie
//   WLO  = Faszystowskie Włochy i Etiopia
//   HIS  = Wojna domowa w Hiszpanii
//   HIT  = Hitler i polityka ustępstw
//   PAK  = Od Anschlussu do paktu Ribbentrop-Mołotow
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R07_JAP_01",
    section: "Japonia i Chiny na Dalekim Wschodzie",
    type: "single_choice",
    prompt: "Kto kierował reformami Japonii w okresie Meiji?",
    options: ["Mutsuhito", "Czang Kaj-szek", "Benito Mussolini", "Francisco Franco", "Wiaczesław Mołotow", "Joachim von Ribbentrop"],
    answer: 0,
    explanation: "Cesarz Mutsuhito rządził w latach 1868-1912, a jego panowanie nazwano okresem Meiji.",
    image: "r07_samuraj_okres_meiji.jpg"
  },
  {
    id: "R07_JAP_02",
    section: "Japonia i Chiny na Dalekim Wschodzie",
    type: "true_false",
    prompt: "Japonia przez długi czas prowadziła politykę izolacji od świata.",
    options: null,
    answer: true,
    explanation: "Od pierwszej połowy XVII w. Japonia ograniczała kontakty z cudzoziemcami, a kraj miał być samowystarczalny."
  },
  {
    id: "R07_JAP_03",
    section: "Japonia i Chiny na Dalekim Wschodzie",
    type: "multi_select",
    prompt: "Zaznacz reformy przeprowadzone w Japonii w okresie Meiji.",
    options: ["Rozbudowa przemysłu", "Reforma finansów", "Utworzenie nowoczesnej armii z poboru", "Zniesienie parlamentu", "Budowa monarchii konstytucyjnej", "Przyjęcie komunizmu"],
    answer: [0, 1, 2, 4],
    explanation: "W okresie Meiji Japonia unowocześniła przemysł, finanse, armię i ustrój, wzorując się na państwach europejskich."
  },
  {
    id: "R07_JAP_04",
    section: "Japonia i Chiny na Dalekim Wschodzie",
    type: "fill_in",
    prompt: "W pierwszej wojnie chińsko-japońskiej z lat __________ Japonia zmusiła Chiny do uznania niepodległości __________.",
    options: null,
    answer: ["1894-1895", "Korei"],
    altAnswers: [
      ["1894-1895", "1894-95"],
      ["Korei", "Korea"]
    ],
    explanation: "Zwycięstwo Japonii w wojnie z Chinami usunęło chińskie wpływy w Korei."
  },
  {
    id: "R07_JAP_05",
    section: "Japonia i Chiny na Dalekim Wschodzie",
    type: "match",
    prompt: "Połącz wydarzenie z rokiem.",
    options: null,
    left: ["Początek okresu Meiji", "Przyłączenie Korei do Japonii", "Utworzenie Republiki Chińskiej", "Utworzenie Mandżukuo"],
    right: ["1911", "1932", "1868", "1910"],
    answer: {
      "Początek okresu Meiji": "1868",
      "Przyłączenie Korei do Japonii": "1910",
      "Utworzenie Republiki Chińskiej": "1911",
      "Utworzenie Mandżukuo": "1932"
    },
    explanation: "Te daty pokazują drogę Japonii i Chin od reform XIX w. do kryzysu w latach 30."
  },
  {
    id: "R07_JAP_06",
    section: "Japonia i Chiny na Dalekim Wschodzie",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Pekin, Szanghaj, Nankin, Rzym.",
    options: null,
    answer: "Rzym",
    explanation: "Pekin, Szanghaj i Nankin były ważnymi miastami chińskimi zdobytymi przez Japończyków w 1937 r.; Rzym leży we Włoszech."
  },
  {
    id: "R07_JAP_07",
    section: "Japonia i Chiny na Dalekim Wschodzie",
    type: "scenario",
    prompt: "Jesteś oficerem armii japońskiej w 1931 r. Po wysadzeniu fragmentu torów oskarżasz Chiny o zamach i używasz tego jako pretekstu do wkroczenia wojsk. O jaką krainę chodzi?",
    options: ["Mandżurię", "Zaolzie", "Sudety", "Etiopię", "Nadrenię", "Katalonię"],
    answer: 0,
    explanation: "Prowokacja z 1931 r. pozwoliła armii japońskiej wkroczyć do Mandżurii.",
    image: "r07_japonczycy_mandzuria.jpg"
  },
  {
    id: "R07_JAP_08",
    section: "Japonia i Chiny na Dalekim Wschodzie",
    type: "sort",
    prompt: "Przyporządkuj zjawiska do państw.",
    options: null,
    items: ["Okres Meiji", "Kuomintang", "Mandżukuo", "Republika Chińska", "Powszechne prawo wyborcze dla mężczyzn w 1925 r.", "Masakra w Szanghaju"],
    categories: ["Japonia", "Chiny"],
    answer: {
      "Japonia": ["Okres Meiji", "Mandżukuo", "Powszechne prawo wyborcze dla mężczyzn w 1925 r."],
      "Chiny": ["Kuomintang", "Republika Chińska", "Masakra w Szanghaju"]
    },
    explanation: "Mandżukuo było zależne od Japonii, natomiast Kuomintang i Republika Chińska należały do dziejów Chin."
  },
  {
    id: "R07_JAP_09",
    section: "Japonia i Chiny na Dalekim Wschodzie",
    type: "sequence",
    prompt: "Ułóż wydarzenia w porządku chronologicznym.",
    options: null,
    items: ["Utworzenie Mandżukuo", "Początek okresu Meiji", "Przyłączenie Korei do Japonii", "Druga wojna chińsko-japońska"],
    answer: ["Początek okresu Meiji", "Przyłączenie Korei do Japonii", "Utworzenie Mandżukuo", "Druga wojna chińsko-japońska"],
    explanation: "Okres Meiji zaczął się w 1868 r., Korea została przyłączona w 1910 r., Mandżukuo powstało w 1932 r., a druga wojna chińsko-japońska rozpoczęła się w 1937 r."
  },
  {
    id: "R07_JAP_10",
    section: "Japonia i Chiny na Dalekim Wschodzie",
    type: "riddle",
    prompt: "Jak nazywała się najważniejsza partia polityczna Republiki Chińskiej?",
    options: null,
    answer: "Kuomintang",
    altAnswers: ["Kuomintang", "Chińska Partia Narodowa"],
    explanation: "Kuomintang, czyli Chińska Partia Narodowa, był najważniejszą partią polityczną Republiki Chińskiej.",
    image: "r07_czang_kaj_szek.jpg"
  },
  {
    id: "R07_JAP_11",
    section: "Japonia i Chiny na Dalekim Wschodzie",
    type: "single_choice",
    prompt: "Jakie miasto było ówczesną stolicą Republiki Chińskiej i miejscem masakry z 1937 r.?",
    options: ["Nankin", "Pekin", "Szanghaj", "Mukden", "Chongqing", "Hongkong"],
    answer: 0,
    explanation: "W 1937 r. Japończycy zdobyli Nankin i dokonali tam masakry ludności cywilnej.",
    image: "r07_masakra_nankinska.jpg"
  },
  {
    id: "R07_JAP_12",
    section: "Japonia i Chiny na Dalekim Wschodzie",
    type: "true_false",
    prompt: "Druga wojna chińsko-japońska zakończyła się już w 1938 r. pełnym zwycięstwem Japonii.",
    options: null,
    answer: false,
    explanation: "Do 1938 r. Japonia opanowała znaczne obszary Chin, ale nie zwyciężyła; wojna trwała do 1945 r."
  },
  {
    id: "R07_WLO_01",
    section: "Faszystowskie Włochy i Etiopia",
    type: "single_choice",
    prompt: "Jak Włosi nazywali swoje rozczarowanie po konferencji pokojowej w Paryżu?",
    options: ["Okaleczone zwycięstwo", "Marsz na Rzym", "Polityka ustępstw", "Anschluss", "Pakt antykominternowski", "Traktat nierównoprawny"],
    answer: 0,
    explanation: "Włochy otrzymały tylko część obiecanych ziem, dlatego mówiono o okaleczonym zwycięstwie."
  },
  {
    id: "R07_WLO_02",
    section: "Faszystowskie Włochy i Etiopia",
    type: "multi_select",
    prompt: "Zaznacz przyczyny chaosu we Włoszech w latach 1919-1920.",
    options: ["Fala strajków w fabrykach", "Samowolny podział ziemi przez chłopów", "Bezrobocie żołnierzy wracających z frontu", "Zajęcie Pragi przez Wehrmacht", "Bombardowanie Chongqingu", "Pakt Ribbentrop-Mołotow"],
    answer: [0, 1, 2],
    explanation: "Po wojnie Włochy były zadłużone i wyczerpane, a kryzys społeczny wzmacniał lęk przed rewolucją."
  },
  {
    id: "R07_WLO_03",
    section: "Faszystowskie Włochy i Etiopia",
    type: "true_false",
    prompt: "Mussolini zdobył stanowisko premiera dzięki zwycięstwu faszystów w wolnych wyborach.",
    options: null,
    answer: false,
    explanation: "Król mianował Mussoliniego premierem po marszu na Rzym, czyli pod naciskiem zastraszenia władz państwa.",
    image: "r07_marsz_na_rzym.jpg"
  },
  {
    id: "R07_WLO_04",
    section: "Faszystowskie Włochy i Etiopia",
    type: "fill_in",
    prompt: "W __________ r. Mussolini założył Włoskie Związki Walki, a w __________ r. przekształcił je w Narodową Partię Faszystowską.",
    options: null,
    answer: ["1919", "1921"],
    altAnswers: [
      ["1919", "1919 r."],
      ["1921", "1921 r."]
    ],
    explanation: "Ruch faszystowski szybko się rozrastał dzięki wsparciu przemysłowców i właścicieli ziemskich."
  },
  {
    id: "R07_WLO_05",
    section: "Faszystowskie Włochy i Etiopia",
    type: "riddle",
    prompt: "Jakim włoskim słowem faszyści określali Mussoliniego jako wodza?",
    options: null,
    answer: "duce",
    altAnswers: ["duce", "Duce"],
    explanation: "Duce znaczy wódz; tak zwolennicy Mussoliniego nazywali swojego przywódcę."
  },
  {
    id: "R07_WLO_06",
    section: "Faszystowskie Włochy i Etiopia",
    type: "match",
    prompt: "Połącz pojęcie z opisem.",
    options: null,
    left: ["Fasci", "Konkordat", "Doktryna", "Totalitaryzm"],
    right: ["Wiązki rózg przed starorzymskim urzędnikiem", "Umowa Stolicy Apostolskiej z państwem", "System twierdzeń i założeń", "Dążenie do podporządkowania państwu każdej dziedziny życia"],
    answer: {
      "Fasci": "Wiązki rózg przed starorzymskim urzędnikiem",
      "Konkordat": "Umowa Stolicy Apostolskiej z państwem",
      "Doktryna": "System twierdzeń i założeń",
      "Totalitaryzm": "Dążenie do podporządkowania państwu każdej dziedziny życia"
    },
    explanation: "Te pojęcia pojawiają się przy opisie ideologii i ustroju faszystowskich Włoch."
  },
  {
    id: "R07_WLO_07",
    section: "Faszystowskie Włochy i Etiopia",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: przemysłowcy, właściciele ziemscy, faszystowskie bojówki, Kuomintang.",
    options: null,
    answer: "Kuomintang",
    explanation: "Kuomintang był chińską partią narodową, a pozostałe elementy dotyczą dojścia faszystów do władzy we Włoszech."
  },
  {
    id: "R07_WLO_08",
    section: "Faszystowskie Włochy i Etiopia",
    type: "scenario",
    prompt: "Jest październik 1922 r. Uzbrojeni faszyści w czarnych koszulach idą na stolicę, żądając zmiany rządu. Jak nazywa się to wydarzenie?",
    options: ["Marsz na Rzym", "Anschluss Austrii", "Układ monachijski", "Masakra w Szanghaju", "Remilitaryzacja Nadrenii", "Wojna opiumowa"],
    answer: 0,
    explanation: "Marsz na Rzym doprowadził do mianowania Mussoliniego premierem.",
    image: "r07_marsz_na_rzym.jpg"
  },
  {
    id: "R07_WLO_09",
    section: "Faszystowskie Włochy i Etiopia",
    type: "sort",
    prompt: "Przyporządkuj elementy do polityki wewnętrznej lub zagranicznej Mussoliniego.",
    options: null,
    items: ["Likwidacja partii poza faszystowską", "Zniesienie wolności prasy", "Atak na Etiopię", "Wystąpienie Włoch z Ligi Narodów", "Plebiscyty zamiast wyborów", "Sojusz z Trzecią Rzeszą"],
    categories: ["Polityka wewnętrzna", "Polityka zagraniczna"],
    answer: {
      "Polityka wewnętrzna": ["Likwidacja partii poza faszystowską", "Zniesienie wolności prasy", "Plebiscyty zamiast wyborów"],
      "Polityka zagraniczna": ["Atak na Etiopię", "Wystąpienie Włoch z Ligi Narodów", "Sojusz z Trzecią Rzeszą"]
    },
    explanation: "Mussolini jednocześnie niszczył demokrację w kraju i prowadził agresywną politykę zewnętrzną."
  },
  {
    id: "R07_WLO_10",
    section: "Faszystowskie Włochy i Etiopia",
    type: "sequence",
    prompt: "Ułóż wydarzenia w porządku chronologicznym.",
    options: null,
    items: ["Wojna włosko-etiopska", "Założenie Włoskich Związków Walki", "Marsz na Rzym", "Wystąpienie Włoch z Ligi Narodów"],
    answer: ["Założenie Włoskich Związków Walki", "Marsz na Rzym", "Wojna włosko-etiopska", "Wystąpienie Włoch z Ligi Narodów"],
    explanation: "Włoskie Związki Walki powstały w 1919 r., marsz na Rzym odbył się w 1922 r., wojna z Etiopią w latach 1935-1936, a Włochy wystąpiły z Ligi w 1937 r."
  },
  {
    id: "R07_WLO_11",
    section: "Faszystowskie Włochy i Etiopia",
    type: "single_choice",
    prompt: "Dlaczego Mussolini kazał zaatakować Etiopię?",
    options: ["Chciał odwetu za klęskę pod Aduą i powiększenia kolonii", "Chciał obronić Republikę Chińską", "Chciał odzyskać Sudety", "Chciał powstrzymać Anschluss Austrii", "Chciał wesprzeć Kuomintang", "Chciał przejąć Wolne Miasto Gdańsk"],
    answer: 0,
    explanation: "Atak na Etiopię miał pomścić klęskę Włoch pod Aduą i rozbudować włoskie imperium kolonialne.",
    image: "r07_wojna_etiopia.jpg"
  },
  {
    id: "R07_WLO_12",
    section: "Faszystowskie Włochy i Etiopia",
    type: "true_false",
    prompt: "W wojnie z Etiopią Włosi użyli gazów trujących także przeciw ludności cywilnej.",
    options: null,
    answer: true,
    explanation: "Włochy miały ogromną przewagę techniczną i używały gazów trujących także wobec ludności cywilnej.",
    image: "r07_wojna_etiopia.jpg"
  },
  {
    id: "R07_HIS_01",
    section: "Wojna domowa w Hiszpanii",
    type: "single_choice",
    prompt: "W których latach toczyła się hiszpańska wojna domowa?",
    options: ["1936-1939", "1931-1933", "1935-1936", "1937-1945", "1922-1925", "1904-1905"],
    answer: 0,
    explanation: "Hiszpańska wojna domowa trwała od 1936 do 1939 r."
  },
  {
    id: "R07_HIS_02",
    section: "Wojna domowa w Hiszpanii",
    type: "multi_select",
    prompt: "Zaznacz przyczyny hiszpańskiej wojny domowej.",
    options: ["Konflikty między grupami społecznymi", "Spór monarchistów ze zwolennikami republiki", "Dążenia niepodległościowe Basków i Katalończyków", "Słaba kontrola rządu nad armią", "Remilitaryzacja Nadrenii", "Powstanie Mandżukuo"],
    answer: [0, 1, 2, 3],
    explanation: "Wojna wynikała z narastających konfliktów społecznych i politycznych oraz ze słabości państwa."
  },
  {
    id: "R07_HIS_03",
    section: "Wojna domowa w Hiszpanii",
    type: "true_false",
    prompt: "Bezpośrednią przyczyną wojny domowej w Hiszpanii było zwycięstwo Frontu Ludowego w wyborach parlamentarnych w 1936 r.",
    options: null,
    answer: true,
    explanation: "Po zwycięstwie lewicowego Frontu Ludowego rząd rozpoczął reformy, które uderzyły w interesy arystokracji i Kościoła."
  },
  {
    id: "R07_HIS_04",
    section: "Wojna domowa w Hiszpanii",
    type: "fill_in",
    prompt: "W lipcu __________ r. część armii dowodzona przez generała __________ zbuntowała się przeciwko rządowi republiki.",
    options: null,
    answer: ["1936", "Francisco Franco"],
    altAnswers: [
      ["1936", "1936 r."],
      ["Francisco Franco", "Franco", "generała Franco"]
    ],
    explanation: "Bunt części armii pod wodzą Franco rozpoczął wojnę rebeliantów z republikanami."
  },
  {
    id: "R07_HIS_05",
    section: "Wojna domowa w Hiszpanii",
    type: "riddle",
    prompt: "Jak nazywano rebeliantów walczących po stronie generała Franco?",
    options: null,
    answer: "frankiści",
    altAnswers: ["frankiści", "frankisci", "rebelianci"],
    explanation: "Wojska zbuntowane przeciw republice określano jako rebeliantów albo frankistów."
  },
  {
    id: "R07_HIS_06",
    section: "Wojna domowa w Hiszpanii",
    type: "match",
    prompt: "Połącz stronę wojny z jej zapleczem.",
    options: null,
    left: ["Frankiści", "Republikanie", "Włochy i Niemcy", "ZSRR"],
    right: ["Wspierały generała Franco", "Otrzymywali pomoc Stalina", "Rebelianci przeciw rządowi republiki", "Obrońcy rządu republiki"],
    answer: {
      "Frankiści": "Rebelianci przeciw rządowi republiki",
      "Republikanie": "Obrońcy rządu republiki",
      "Włochy i Niemcy": "Wspierały generała Franco",
      "ZSRR": "Otrzymywali pomoc Stalina"
    },
    explanation: "Wojna hiszpańska stała się konfliktem wewnętrznym wspieranym przez obce państwa."
  },
  {
    id: "R07_HIS_07",
    section: "Wojna domowa w Hiszpanii",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Katalończycy, Baskowie, mieszkańcy miast, czarne koszule.",
    options: null,
    answer: "czarne koszule",
    explanation: "Katalończycy, Baskowie i mieszkańcy miast wspierali republikanów; czarne koszule to określenie włoskich faszystów."
  },
  {
    id: "R07_HIS_08",
    section: "Wojna domowa w Hiszpanii",
    type: "scenario",
    prompt: "W 1937 r. niemieckie samoloty Legionu Condor bombardują miasteczko, którego jedyne cele wojskowe ocalały. Jak nazywało się to miasteczko?",
    options: ["Guernica", "Madryt", "Toledo", "Barcelona", "Praga", "Nankin"],
    answer: 0,
    explanation: "Bombardowanie Guerniki przyniosło Legionowi Condor ponurą sławę.",
    image: "r07_guernica_nalot.jpg"
  },
  {
    id: "R07_HIS_09",
    section: "Wojna domowa w Hiszpanii",
    type: "sort",
    prompt: "Przyporządkuj grupy do stron wojny domowej w Hiszpanii.",
    options: null,
    items: ["Kościół", "Arystokracja", "Mieszkańcy miast", "Robotnicy", "Część chłopów", "Baskowie"],
    categories: ["Frankiści", "Republikanie"],
    answer: {
      "Frankiści": ["Kościół", "Arystokracja", "Część chłopów"],
      "Republikanie": ["Mieszkańcy miast", "Robotnicy", "Baskowie"]
    },
    explanation: "Franco wsparły siły prawicy i część tradycyjnych elit, a republikę wspierały m.in. środowiska miejskie, lewica oraz część mniejszości narodowych."
  },
  {
    id: "R07_HIS_10",
    section: "Wojna domowa w Hiszpanii",
    type: "sequence",
    prompt: "Ułóż wydarzenia w porządku chronologicznym.",
    options: null,
    items: ["Zdobycie Madrytu przez frankistów", "Zwycięstwo Frontu Ludowego", "Bombardowanie Guerniki", "Bunt części armii"],
    answer: ["Zwycięstwo Frontu Ludowego", "Bunt części armii", "Bombardowanie Guerniki", "Zdobycie Madrytu przez frankistów"],
    explanation: "Front Ludowy wygrał wybory w 1936 r., bunt armii wybuchł w lipcu 1936 r., Guernikę zbombardowano w 1937 r., a Madryt zdobyto wiosną 1939 r."
  },
  {
    id: "R07_HIS_11",
    section: "Wojna domowa w Hiszpanii",
    type: "single_choice",
    prompt: "Jaki skutek wojny domowej w Hiszpanii dotyczył generała Franco?",
    options: ["Został dyktatorem Hiszpanii aż do śmierci w 1975 r.", "Został premierem Włoch w 1922 r.", "Podpisał pakt antykominternowski z Japonią", "Utworzył Mandżukuo", "Przekazał Sudety Niemcom", "Wypowiedział polsko-niemiecką deklarację o nieagresji"],
    answer: 0,
    explanation: "Po zwycięstwie frankistów Franco wprowadził rządy autorytarne i pozostał dyktatorem do 1975 r."
  },
  {
    id: "R07_HIS_12",
    section: "Wojna domowa w Hiszpanii",
    type: "true_false",
    prompt: "Hiszpańska wojna domowa bywa określana jako wstęp do II wojny światowej.",
    options: null,
    answer: true,
    explanation: "Obce państwa wspierały strony konfliktu i testowały nowe typy broni oraz sposoby prowadzenia wojny."
  },
  {
    id: "R07_HIT_01",
    section: "Hitler i polityka ustępstw",
    type: "single_choice",
    prompt: "Jaki był jeden z jawnych celów polityki Hitlera?",
    options: ["Zniesienie dyktatu wersalskiego", "Odbudowa Republiki Chińskiej", "Obrona Ligi Narodów", "Wsparcie hiszpańskich republikanów", "Zakończenie militaryzmu Japonii", "Utrzymanie pokoju za wszelką cenę"],
    answer: 0,
    explanation: "Hitler otwarcie dążył do zniesienia ograniczeń nałożonych na Niemcy po I wojnie światowej."
  },
  {
    id: "R07_HIT_02",
    section: "Hitler i polityka ustępstw",
    type: "multi_select",
    prompt: "Zaznacz działania Hitlera łamiące lub podważające porządek wersalski.",
    options: ["Wprowadzenie obowiązkowej służby wojskowej", "Tworzenie Luftwaffe", "Rozbudowa marynarki wojennej", "Remilitaryzacja Nadrenii", "Przyłączenie Korei", "Zawarcie konkordatu z papieżem"],
    answer: [0, 1, 2, 3],
    explanation: "Niemcy odbudowywały armię i weszły do zdemilitaryzowanej Nadrenii, testując brak reakcji Zachodu.",
    image: "r07_luftwaffe_berlin.jpg"
  },
  {
    id: "R07_HIT_03",
    section: "Hitler i polityka ustępstw",
    type: "true_false",
    prompt: "W 1933 r. Niemcy wystąpiły z Ligi Narodów.",
    options: null,
    answer: true,
    explanation: "Hitler zlekceważył zachodnie demokracje i już w 1933 r. wyprowadził Niemcy z Ligi Narodów."
  },
  {
    id: "R07_HIT_04",
    section: "Hitler i polityka ustępstw",
    type: "fill_in",
    prompt: "W __________ r. Hitler wprowadził obowiązkową służbę wojskową, a w marcu __________ r. wojska niemieckie wkroczyły do Nadrenii.",
    options: null,
    answer: ["1935", "1936"],
    altAnswers: [
      ["1935", "1935 r."],
      ["1936", "1936 r."]
    ],
    explanation: "Odbudowa armii i remilitaryzacja Nadrenii były kolejnymi krokami w łamaniu ograniczeń wersalskich."
  },
  {
    id: "R07_HIT_05",
    section: "Hitler i polityka ustępstw",
    type: "riddle",
    prompt: "Jak nazywały się niemieckie siły powietrzne tworzone od 1935 r.?",
    options: null,
    answer: "Luftwaffe",
    altAnswers: ["Luftwaffe", "luftwaffe"],
    explanation: "Traktat wersalski zabraniał Niemcom posiadania lotnictwa wojskowego, dlatego budowa Luftwaffe była demonstracją łamania tych ograniczeń.",
    image: "r07_luftwaffe_berlin.jpg"
  },
  {
    id: "R07_HIT_06",
    section: "Hitler i polityka ustępstw",
    type: "match",
    prompt: "Połącz państwo z motywem polityki ustępstw.",
    options: null,
    left: ["Francja", "Wielka Brytania", "Zachód", "Niemcy antykomunistyczne"],
    right: ["Pragnienie pokoju po wielkich stratach wojny", "Imperium mające wiele do stracenia", "Przekonanie że ustępstwa unikną wojny", "Postrzeganie jako zapora przed Armią Czerwoną"],
    answer: {
      "Francja": "Pragnienie pokoju po wielkich stratach wojny",
      "Wielka Brytania": "Imperium mające wiele do stracenia",
      "Zachód": "Przekonanie że ustępstwa unikną wojny",
      "Niemcy antykomunistyczne": "Postrzeganie jako zapora przed Armią Czerwoną"
    },
    explanation: "Polityka ustępstw wynikała z lęku przed kolejną wojną i z kalkulacji politycznych państw zachodnich."
  },
  {
    id: "R07_HIT_07",
    section: "Hitler i polityka ustępstw",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: obowiązkowa służba wojskowa, Luftwaffe, remilitaryzacja Nadrenii, konkordat.",
    options: null,
    answer: "konkordat",
    explanation: "Konkordat dotyczył porozumienia Mussoliniego z papieżem, a pozostałe elementy wiążą się z niemieckimi przygotowaniami wojennymi."
  },
  {
    id: "R07_HIT_08",
    section: "Hitler i polityka ustępstw",
    type: "scenario",
    prompt: "Jesteś zachodnim politykiem w latach 1935-1939. Ustępujesz Hitlerowi, wierząc, że tak unikniesz wojny. Jak nazywa się ta postawa?",
    options: ["Polityka ustępstw", "Militaryzm", "Izolacjonizm Meiji", "Rewolucja chińska", "Fasci", "Pakt antykominternowski"],
    answer: 0,
    explanation: "Polityka ustępstw polegała na tolerowaniu kolejnych posunięć Hitlera w nadziei na zachowanie pokoju."
  },
  {
    id: "R07_HIT_09",
    section: "Hitler i polityka ustępstw",
    type: "sort",
    prompt: "Przyporządkuj działania do sprawców.",
    options: null,
    items: ["Wystąpienie Niemiec z Ligi Narodów", "Zgoda na flotę niemiecką do 35 procent floty brytyjskiej", "Brak reakcji na remilitaryzację Nadrenii", "Wprowadzenie obowiązkowej służby wojskowej", "Tworzenie Luftwaffe", "Obawa przed kolejną wojną"],
    categories: ["Niemcy Hitlera", "Zachodnie demokracje"],
    answer: {
      "Niemcy Hitlera": ["Wystąpienie Niemiec z Ligi Narodów", "Wprowadzenie obowiązkowej służby wojskowej", "Tworzenie Luftwaffe"],
      "Zachodnie demokracje": ["Zgoda na flotę niemiecką do 35 procent floty brytyjskiej", "Brak reakcji na remilitaryzację Nadrenii", "Obawa przed kolejną wojną"]
    },
    explanation: "Hitler łamał ograniczenia, a demokracje zachodnie reagowały słabo lub ustępowały."
  },
  {
    id: "R07_HIT_10",
    section: "Hitler i polityka ustępstw",
    type: "sequence",
    prompt: "Ułóż wydarzenia w porządku chronologicznym.",
    options: null,
    items: ["Remilitaryzacja Nadrenii", "Dojście Hitlera do władzy", "Wprowadzenie obowiązkowej służby wojskowej", "Anschluss Austrii"],
    answer: ["Dojście Hitlera do władzy", "Wprowadzenie obowiązkowej służby wojskowej", "Remilitaryzacja Nadrenii", "Anschluss Austrii"],
    explanation: "Hitler doszedł do władzy w 1933 r., zbrojenia przyspieszyły w 1935 r., Nadrenię zajęto w 1936 r., a Austrię przyłączono w 1938 r."
  },
  {
    id: "R07_HIT_11",
    section: "Hitler i polityka ustępstw",
    type: "single_choice",
    prompt: "Co Hitler chciał zdobyć dla Niemców na wschodzie Europy?",
    options: ["Przestrzeń życiową", "Mandat Ligi Narodów", "Kolonie w Etiopii", "Kolej południowomandżurską", "Traktaty nierównoprawne", "Autonomię Sudetów"],
    answer: 0,
    explanation: "Ukrytym celem Hitlera było rozpętanie wojny, by zdobyć na wschodzie tak zwaną przestrzeń życiową."
  },
  {
    id: "R07_HIT_12",
    section: "Hitler i polityka ustępstw",
    type: "true_false",
    prompt: "Hitler był przekonany, że zachodnie demokracje ustąpią przed argumentem siły.",
    options: null,
    answer: true,
    explanation: "Brak stanowczej reakcji Zachodu utwierdzał Hitlera w przekonaniu, że może ryzykować kolejne posunięcia."
  },
  {
    id: "R07_PAK_01",
    section: "Od Anschlussu do paktu Ribbentrop-Mołotow",
    type: "single_choice",
    prompt: "Czym był Anschluss Austrii?",
    options: ["Wcieleniem Austrii do Trzeciej Rzeszy", "Przekazaniem Sudetów Czechosłowacji", "Utworzeniem Mandżukuo", "Zawarciem układu Polski z Wielką Brytanią", "Wystąpieniem Włoch z Ligi Narodów", "Zamachem Franco"],
    answer: 0,
    explanation: "Anschluss oznaczał przyłączenie Austrii do Niemiec w marcu 1938 r."
  },
  {
    id: "R07_PAK_02",
    section: "Od Anschlussu do paktu Ribbentrop-Mołotow",
    type: "multi_select",
    prompt: "Zaznacz elementy dotyczące układu monachijskiego.",
    options: ["Podpisali go przywódcy Wielkiej Brytanii i Francji z Mussolinim i Hitlerem", "Przekazywał Sudety Niemcom", "Nie dopuszczono przedstawicieli Czechosłowacji do obrad", "Zawierał tajny podział Polski między Niemcy i ZSRR", "Powstał w 1932 r. w Mandżurii", "Dotyczył wcielenia Etiopii do Włoskiej Afryki Wschodniej"],
    answer: [0, 1, 2],
    explanation: "Układ monachijski był decyzją wielkich mocarstw narzuconą Czechosłowacji i oddawał Sudety Niemcom.",
    image: "r07_konferencja_monachijska.jpg"
  },
  {
    id: "R07_PAK_03",
    section: "Od Anschlussu do paktu Ribbentrop-Mołotow",
    type: "true_false",
    prompt: "Po układzie monachijskim Polska odebrała Czechosłowacji Zaolzie.",
    options: null,
    answer: true,
    explanation: "Dwa dni po podpisaniu układu monachijskiego Polska zajęła Zaolzie."
  },
  {
    id: "R07_PAK_04",
    section: "Od Anschlussu do paktu Ribbentrop-Mołotow",
    type: "fill_in",
    prompt: "Pakt Ribbentrop-Mołotow podpisano __________ sierpnia __________ r.",
    options: null,
    answer: ["23", "1939"],
    altAnswers: [
      ["23", "23."],
      ["1939", "1939 r."]
    ],
    explanation: "Pakt o nieagresji między Trzecią Rzeszą a ZSRR podpisano 23 sierpnia 1939 r.",
    image: "r07_molotow_pakt.jpg"
  },
  {
    id: "R07_PAK_05",
    section: "Od Anschlussu do paktu Ribbentrop-Mołotow",
    type: "riddle",
    prompt: "Jak nazywano ziemie zachodniej Czechosłowacji zamieszkane przez wielu Niemców?",
    options: null,
    answer: "Sudety",
    altAnswers: ["Sudety", "sudety"],
    explanation: "Niemcy sudeccy mieszkali głównie w Sudetach, które układ monachijski przekazał Rzeszy.",
    image: "r07_konferencja_monachijska.jpg"
  },
  {
    id: "R07_PAK_06",
    section: "Od Anschlussu do paktu Ribbentrop-Mołotow",
    type: "match",
    prompt: "Połącz wydarzenie z datą.",
    options: null,
    left: ["Anschluss Austrii", "Układ monachijski", "Protektorat Czech i Moraw", "Pakt Ribbentrop-Mołotow"],
    right: ["23 sierpnia 1939", "marzec 1938", "wrzesień 1938", "marzec 1939"],
    answer: {
      "Anschluss Austrii": "marzec 1938",
      "Układ monachijski": "wrzesień 1938",
      "Protektorat Czech i Moraw": "marzec 1939",
      "Pakt Ribbentrop-Mołotow": "23 sierpnia 1939"
    },
    explanation: "Od marca 1938 r. do sierpnia 1939 r. Hitler przeszedł od pokojowych podbojów do przygotowań do wojny z Polską."
  },
  {
    id: "R07_PAK_07",
    section: "Od Anschlussu do paktu Ribbentrop-Mołotow",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Anschluss, Sudety, Protektorat Czech i Moraw, Mandżukuo.",
    options: null,
    answer: "Mandżukuo",
    explanation: "Mandżukuo powstało w Mandżurii pod kontrolą Japonii, a pozostałe elementy dotyczą ekspansji Trzeciej Rzeszy w Europie."
  },
  {
    id: "R07_PAK_08",
    section: "Od Anschlussu do paktu Ribbentrop-Mołotow",
    type: "scenario",
    prompt: "Jest marzec 1939 r. Hitler żąda od prezydenta Czech oddania losu kraju w jego ręce i grozi bombardowaniem Pragi. Jaki twór powstał po tej presji?",
    options: ["Protektorat Czech i Moraw", "Mandżukuo", "Włoska Afryka Wschodnia", "Wolne Miasto Gdańsk", "Oś Berlin-Rzym-Tokio", "Republika Chińska"],
    answer: 0,
    explanation: "Po zastraszeniu prezydenta Czech utworzono Protektorat Czech i Moraw zależny od Trzeciej Rzeszy."
  },
  {
    id: "R07_PAK_09",
    section: "Od Anschlussu do paktu Ribbentrop-Mołotow",
    type: "sort",
    prompt: "Przyporządkuj postanowienia tajnego protokołu do stref interesów.",
    options: null,
    items: ["Wschodnia część Polski", "Finlandia", "Estonia", "Zachodnia część Polski", "Litwa", "Część Rumunii"],
    categories: ["Strefa radziecka", "Strefa niemiecka"],
    answer: {
      "Strefa radziecka": ["Wschodnia część Polski", "Finlandia", "Estonia", "Część Rumunii"],
      "Strefa niemiecka": ["Zachodnia część Polski", "Litwa"]
    },
    explanation: "Tajny protokół dzielił Europę Środkową między Trzecią Rzeszę i ZSRR."
  },
  {
    id: "R07_PAK_10",
    section: "Od Anschlussu do paktu Ribbentrop-Mołotow",
    type: "sequence",
    prompt: "Ułóż wydarzenia w porządku chronologicznym.",
    options: null,
    items: ["Pakt Ribbentrop-Mołotow", "Układ monachijski", "Utworzenie Protektoratu Czech i Moraw", "Anschluss Austrii"],
    answer: ["Anschluss Austrii", "Układ monachijski", "Utworzenie Protektoratu Czech i Moraw", "Pakt Ribbentrop-Mołotow"],
    explanation: "Anschluss nastąpił w marcu 1938 r., układ monachijski we wrześniu 1938 r., protektorat w marcu 1939 r., a pakt Ribbentrop-Mołotow w sierpniu 1939 r."
  },
  {
    id: "R07_PAK_11",
    section: "Od Anschlussu do paktu Ribbentrop-Mołotow",
    type: "single_choice",
    prompt: "Którego żądania Niemcy wysunęły wobec Polski?",
    options: ["Włączenia Wolnego Miasta Gdańska do Niemiec", "Przekazania Mandżurii Japonii", "Oddania Etiopii Włochom", "Utworzenia Republiki Chińskiej", "Wprowadzenia Frontu Ludowego", "Zawarcia konkordatu"],
    answer: 0,
    explanation: "Hitler domagał się włączenia Wolnego Miasta Gdańska do Niemiec oraz zgody na eksterytorialną drogę i linię kolejową przez Pomorze."
  },
  {
    id: "R07_PAK_12",
    section: "Od Anschlussu do paktu Ribbentrop-Mołotow",
    type: "true_false",
    prompt: "Polska przyjęła niemieckie żądania z marca 1939 r., aby uniknąć wojny.",
    options: null,
    answer: false,
    explanation: "Polski rząd odrzucił żądania, ponieważ sprowadziłyby państwo do roli zależnego od Niemiec."
  },
  {
    id: "R07_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "W której bitwie wojny rosyjsko-japońskiej Rosja straciła większość floty wojennej?",
    options: ["Pod Cuszimą", "Pod Mukdenem", "Pod Aduą", "Pod Guerniką", "Pod Poitiers", "Pod Nankinem"],
    answer: 0,
    explanation: "W bitwie pod Cuszimą w 1905 r. Rosja utraciła większość floty wojennej."
  },
  {
    id: "R07_HARD_02",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz pięć przyczyn japońskiej ekspansji w latach 30. XX w.",
    options: ["Słabość parlamentaryzmu", "Kryzys gospodarczy", "Ambicje mocarstwowe", "Militaryzm", "Nacjonalizm", "Zwycięstwo Frontu Ludowego w Hiszpanii"],
    answer: [0, 1, 2, 3, 4],
    explanation: "Do przyczyn japońskiej ekspansji należały słabość parlamentaryzmu, kryzys gospodarczy, ambicje mocarstwowe, militaryzm i nacjonalizm."
  },
  {
    id: "R07_HARD_03",
    section: "Super trudne",
    type: "true_false",
    prompt: "Japonia była państwem totalitarnym w europejskim znaczeniu.",
    options: null,
    answer: false,
    explanation: "Japonia nie miała wodza ani rządów jednej partii, choć militaryzm i nacjonalizm odgrywały w niej bardzo silną rolę."
  },
  {
    id: "R07_HARD_04",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Wielki kryzys spowodował, że ceny __________ spadły o __________ procent.",
    options: null,
    answer: ["jedwabiu", "50"],
    altAnswers: [
      ["jedwabiu", "jedwab"],
      ["50", "50%"]
    ],
    explanation: "Spadek cen jedwabiu uderzył w niemal połowę japońskich chłopów, którzy żyli z jego sprzedaży."
  },
  {
    id: "R07_HARD_05",
    section: "Super trudne",
    type: "riddle",
    prompt: "Jak nazywała się kolej odebrana Rosji przez Japonię w 1905 r.?",
    options: null,
    answer: "kolej południowomandżurska",
    altAnswers: ["kolej południowomandżurska", "kolej poludniowomandzurska", "południowomandżurska"],
    explanation: "Kolej południowomandżurska biegła przez Mandżurię i stała się ważnym elementem japońskich wpływów w Chinach."
  },
  {
    id: "R07_HARD_06",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz pojęcie z wyjaśnieniem.",
    options: null,
    left: ["Eskadra", "Marionetkowe państwo", "Eksterytorialny", "Cyniczny"],
    right: ["Zespół okrętów wojennych", "Państwo pozornie niepodległe", "Niepodlegający państwu na którego terytorium się znajduje", "Lekceważący ogólnie szanowane wartości"],
    answer: {
      "Eskadra": "Zespół okrętów wojennych",
      "Marionetkowe państwo": "Państwo pozornie niepodległe",
      "Eksterytorialny": "Niepodlegający państwu na którego terytorium się znajduje",
      "Cyniczny": "Lekceważący ogólnie szanowane wartości"
    },
    explanation: "Pojęcia te dotyczą terminów politycznych i wojskowych używanych w kontekście wydarzeń międzywojennych."
  },
  {
    id: "R07_HARD_07",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Narew, Wisła, San, Jangcy.",
    options: null,
    answer: "Jangcy",
    explanation: "Narew, Wisła i San pojawiają się jako linia rozgraniczenia stref interesów w tajnym protokole; Jangcy dotyczy Chin."
  },
  {
    id: "R07_HARD_08",
    section: "Super trudne",
    type: "scenario",
    prompt: "Jest 1938 r. Aby spowolnić marsz Japończyków na Wuhan, Czang Kaj-szek każe zniszczyć tamy na Jangcy. Jaki był skutek tej decyzji?",
    options: ["Śmierć około 800 tysięcy Chińczyków na zalanym obszarze", "Natychmiastowe zwycięstwo Chin nad Japonią", "Wystąpienie Japonii z Ligi Narodów", "Podpisanie paktu antykominternowskiego", "Zdobycie Madrytu przez frankistów", "Utworzenie Protektoratu Czech i Moraw"],
    answer: 0,
    explanation: "Zniszczenie tam spowodowało powódź, głód i choroby, które zabiły około 800 tysięcy Chińczyków."
  },
  {
    id: "R07_HARD_09",
    section: "Super trudne",
    type: "sort",
    prompt: "Przyporządkuj liczby do wydarzeń lub zjawisk.",
    options: null,
    items: ["35 procent floty brytyjskiej", "3,5 miliona Niemców", "200 tysięcy mieszkańców Nankinu", "60 tysięcy żołnierzy Mussoliniego", "13 starych samolotów Etiopii", "500 samolotów dla Republiki Chińskiej"],
    categories: ["Europa", "Azja i Afryka"],
    answer: {
      "Europa": ["35 procent floty brytyjskiej", "3,5 miliona Niemców", "60 tysięcy żołnierzy Mussoliniego"],
      "Azja i Afryka": ["200 tysięcy mieszkańców Nankinu", "13 starych samolotów Etiopii", "500 samolotów dla Republiki Chińskiej"]
    },
    explanation: "Liczby dotyczą zarówno kryzysów europejskich, jak i wojen w Azji oraz Afryce."
  },
  {
    id: "R07_HARD_10",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż wydarzenia w porządku chronologicznym.",
    options: null,
    items: ["Włochy przystępują do paktu antykominternowskiego", "Niemcy i Japonia podpisują pakt antykominternowski", "Układ o współpracy Włoch z Trzecią Rzeszą", "Włochy występują z Ligi Narodów"],
    answer: ["Układ o współpracy Włoch z Trzecią Rzeszą", "Niemcy i Japonia podpisują pakt antykominternowski", "Włochy przystępują do paktu antykominternowskiego", "Włochy występują z Ligi Narodów"],
    explanation: "W 1936 r. doszło do zbliżenia Niemiec z Włochami i podpisania paktu Niemiec z Japonią; w 1937 r. Włochy dołączyły do paktu i wystąpiły z Ligi Narodów."
  },
  {
    id: "R07_HARD_11",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Co oznaczało zobowiązanie ZSRR do neutralności w razie wojny prowadzonej przez Trzecią Rzeszę?",
    options: ["Zgodę Stalina na niemiecką agresję przeciwko Polsce", "Wejście ZSRR do Ligi Narodów", "Obronę Czechosłowacji przed Hitlerem", "Wysłanie pomocy wojskowej Etiopii", "Uznanie Mandżukuo przez Zachód", "Zakończenie wojny w Hiszpanii"],
    answer: 0,
    explanation: "Jawna część paktu Ribbentrop-Mołotow oznaczała, że Stalin nie przeszkodzi Hitlerowi w ataku na Polskę.",
    image: "r07_molotow_pakt.jpg"
  },
  {
    id: "R07_HARD_12",
    section: "Super trudne",
    type: "true_false",
    prompt: "Hitler odwołał rozkaz ataku na Polskę planowanego na 26 sierpnia 1939 r. po zawarciu układu Polski z Wielką Brytanią.",
    options: null,
    answer: true,
    explanation: "25 sierpnia Polska i Wielka Brytania zawarły układ o wzajemnej pomocy, co skłoniło Hitlera do chwilowego odwołania ataku."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r07",
  number: 7,
  title: "Ku wojnie",
  icon: "⚔️",
  sectionOrder: [
    "Japonia i Chiny na Dalekim Wschodzie",
    "Faszystowskie Włochy i Etiopia",
    "Wojna domowa w Hiszpanii",
    "Hitler i polityka ustępstw",
    "Od Anschlussu do paktu Ribbentrop-Mołotow"
  ],
  sectionIcons: {
    "Japonia i Chiny na Dalekim Wschodzie": "🌏",
    "Faszystowskie Włochy i Etiopia": "🏛️",
    "Wojna domowa w Hiszpanii": "🇪🇸",
    "Hitler i polityka ustępstw": "🕊️",
    "Od Anschlussu do paktu Ribbentrop-Mołotow": "🗺️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
