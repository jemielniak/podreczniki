// Skróty sekcji (do identyfikatorów ćwiczeń):
//   TUR  = Turystyka i jej znaczenie
//   WAL  = Walory przyrodnicze i kulturowe
//   REG  = Pobrzeża Bałtyku i Małopolska
//   UNE  = Dziedzictwo UNESCO
//   SUK  = Rozwój i sukcesy Polski
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R07_TUR_01",
    section: "Turystyka i jej znaczenie",
    type: "single_choice",
    prompt: "Która definicja najlepiej opisuje turystykę?",
    options: ["Podróżowanie krótsze niż rok w celach innych niż zarobkowe, z wyjątkiem podróży biznesowych", "Każda podróż poza miejsce zamieszkania trwająca dłużej niż rok", "Wyłącznie wyjazdy zagraniczne w celach wypoczynkowych", "Podróżowanie podejmowane tylko w czasie wakacji", "Każdy codzienny dojazd do szkoły lub pracy", "Wyłącznie wyjazdy organizowane przez biuro podróży"],
    answer: 0,
    explanation: "Turystyka to podróżowanie trwające krócej niż rok i podejmowane w celach innych niż zarobkowe; wyjątkiem są podróże biznesowe."
  },
  {
    id: "R07_TUR_02",
    section: "Turystyka i jej znaczenie",
    type: "multi_select",
    prompt: "Zaznacz typy turystyki wyróżniane ze względu na główny cel wyjazdu.",
    options: ["poznawcza", "wypoczynkowa", "zdrowotna", "religijna", "zbiorowa", "indywidualna"],
    answer: [0, 1, 2, 3],
    explanation: "Turystykę poznawczą, wypoczynkową, zdrowotną i religijną wyróżnia się według celu podróży. Turystyka zbiorowa i indywidualna dotyczą sposobu organizacji wyjazdu."
  },
  {
    id: "R07_TUR_03",
    section: "Turystyka i jej znaczenie",
    type: "true_false",
    prompt: "Wyjazd służbowy może być zaliczony do turystyki biznesowej.",
    options: null,
    answer: true,
    explanation: "Podróże biznesowe są wyjątkiem od ogólnej zasady, że celem wyjazdu turystycznego nie jest zarobkowanie."
  },
  {
    id: "R07_TUR_04",
    section: "Turystyka i jej znaczenie",
    type: "fill_in",
    prompt: "Turystyka to podróżowanie trwające krócej niż __________ i odbywające się w celach innych niż zarobkowe.",
    options: null,
    answer: ["rok"],
    altAnswers: [["rok", "jeden rok", "1 rok"]],
    explanation: "Turystyka obejmuje podróże trwające krócej niż jeden rok."
  },
  {
    id: "R07_TUR_05",
    section: "Turystyka i jej znaczenie",
    type: "match",
    prompt: "Połącz typ turystyki z przykładem wyjazdu.",
    options: null,
    left: ["poznawcza", "wypoczynkowa", "zdrowotna", "religijna", "kwalifikowana"],
    right: ["zwiedzanie zabytków", "odpoczynek nad jeziorem", "pobyt w sanatorium", "pielgrzymka", "nurkowanie wymagające umiejętności"],
    answer: {
      "poznawcza": "zwiedzanie zabytków",
      "wypoczynkowa": "odpoczynek nad jeziorem",
      "zdrowotna": "pobyt w sanatorium",
      "religijna": "pielgrzymka",
      "kwalifikowana": "nurkowanie wymagające umiejętności"
    },
    explanation: "Typ turystyki określa główny cel wyjazdu lub charakter podejmowanej aktywności."
  },
  {
    id: "R07_TUR_06",
    section: "Turystyka i jej znaczenie",
    type: "scenario",
    prompt: "Marta wyjeżdża z biurem podróży na tygodniowe zwiedzanie zabytków. Jak sklasyfikować jej wyjazd ze względu na sposób organizacji?",
    options: ["turystyka zbiorowa", "turystyka indywidualna", "turystyka zdrowotna", "turystyka religijna", "turystyka kwalifikowana", "wyjazd zarobkowy"],
    answer: 0,
    image: "r07_podroz_turystyczna.jpg",
    explanation: "Wyjazd zorganizowany przez biuro podróży jest przykładem turystyki zbiorowej."
  },
  {
    id: "R07_TUR_07",
    section: "Turystyka i jej znaczenie",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych typów turystyki wyróżnianych według celu: poznawcza, zdrowotna, religijna, indywidualna.",
    options: null,
    answer: "indywidualna",
    explanation: "Turystyka indywidualna jest wyróżniana według sposobu organizacji, a pozostałe typy - według celu wyjazdu."
  },
  {
    id: "R07_TUR_08",
    section: "Turystyka i jej znaczenie",
    type: "sort",
    prompt: "Przyporządkuj określenia do właściwego kryterium podziału turystyki.",
    options: null,
    items: ["poznawcza", "wypoczynkowa", "zbiorowa", "indywidualna", "biznesowa", "kwalifikowana"],
    categories: ["główny cel wyjazdu", "sposób organizacji"],
    answer: {
      "główny cel wyjazdu": ["poznawcza", "wypoczynkowa", "biznesowa", "kwalifikowana"],
      "sposób organizacji": ["zbiorowa", "indywidualna"]
    },
    explanation: "Cel wyjazdu pozwala wyróżnić m.in. turystykę poznawczą, wypoczynkową, biznesową i kwalifikowaną, a sposób organizacji - zbiorową i indywidualną."
  },
  {
    id: "R07_TUR_09",
    section: "Turystyka i jej znaczenie",
    type: "single_choice",
    prompt: "Na co turyści wydają pieniądze, zasilając lokalne budżety?",
    options: ["Noclegi, jedzenie, pamiątki i bilety wstępu", "Wyłącznie zakup gruntów rolnych", "Tylko opłaty za energię elektryczną", "Wyłącznie podatki od przedsiębiorstw przemysłowych", "Tylko bilety lotnicze kupowane za granicą", "Wyłącznie sprzęt produkowany poza regionem"],
    answer: 0,
    explanation: "Przyjezdni wydają pieniądze m.in. na noclegi, jedzenie, pamiątki i bilety wstępu, wspierając lokalną gospodarkę."
  },
  {
    id: "R07_TUR_10",
    section: "Turystyka i jej znaczenie",
    type: "multi_select",
    prompt: "Zaznacz elementy infrastruktury turystycznej.",
    options: ["baza gastronomiczna", "baza hotelowa", "sieć transportowo-komunikacyjna", "szlaki turystyczne", "złoża rud miedzi", "granice administracyjne"],
    answer: [0, 1, 2, 3],
    explanation: "Infrastruktura turystyczna obejmuje m.in. obiekty gastronomiczne i hotelowe, transport oraz szlaki turystyczne."
  },
  {
    id: "R07_TUR_11",
    section: "Turystyka i jej znaczenie",
    type: "riddle",
    prompt: "Jak nazywa się ogół obiektów wykorzystywanych przez odwiedzających, takich jak hotele, restauracje i szlaki?",
    options: null,
    answer: "infrastruktura turystyczna",
    altAnswers: ["infrastruktura turystyczna", "infrastruktura"],
    explanation: "Baza noclegowa i gastronomiczna, transport oraz szlaki tworzą infrastrukturę turystyczną."
  },
  {
    id: "R07_TUR_12",
    section: "Turystyka i jej znaczenie",
    type: "true_false",
    prompt: "Im bardziej popularna turystycznie jest miejscowość, tym zwykle lepiej rozwiniętą ma infrastrukturę turystyczną.",
    options: null,
    answer: true,
    explanation: "Rosnący ruch turystyczny sprzyja rozwojowi hoteli, gastronomii, transportu i szlaków."
  },

  {
    id: "R07_WAL_01",
    section: "Walory przyrodnicze i kulturowe",
    type: "single_choice",
    prompt: "Czym są walory turystyczne?",
    options: ["Cechami przyrodniczymi i kulturowymi miejsca przyciągającymi turystów", "Wyłącznie obiektami noclegowymi", "Tylko wydarzeniami organizowanymi latem", "Jedynie obszarami objętymi ochroną", "Wyłącznie zabytkami wpisanymi na listę UNESCO", "Środkami transportu używanymi przez mieszkańców"],
    answer: 0,
    explanation: "Walory turystyczne to wszelkie cechy przyrodnicze i kulturowe danego miejsca, które przyciągają turystów."
  },
  {
    id: "R07_WAL_02",
    section: "Walory przyrodnicze i kulturowe",
    type: "sort",
    prompt: "Przyporządkuj walory do kategorii przyrodniczych lub kulturowych.",
    options: null,
    items: ["klif", "jezioro", "Puszcza Białowieska", "muzeum", "zamek", "festiwal muzyczny"],
    categories: ["przyrodnicze", "kulturowe"],
    answer: {
      "przyrodnicze": ["klif", "jezioro", "Puszcza Białowieska"],
      "kulturowe": ["muzeum", "zamek", "festiwal muzyczny"]
    },
    image: "r07_walory_turystyczne_polski.jpg",
    explanation: "Formy terenu, wody i lasy są walorami przyrodniczymi, natomiast muzea, zabytki i wydarzenia są walorami kulturowymi."
  },
  {
    id: "R07_WAL_03",
    section: "Walory przyrodnicze i kulturowe",
    type: "match",
    prompt: "Połącz region lub obiekt z charakterystycznym walorem.",
    options: null,
    left: ["Pojezierze Mazurskie", "Puszcza Białowieska", "Jura", "góry"],
    right: ["jeziora i lasy", "żubry i las o cechach pierwotnych", "wapienne formacje skalne", "szczyty i doliny"],
    answer: {
      "Pojezierze Mazurskie": "jeziora i lasy",
      "Puszcza Białowieska": "żubry i las o cechach pierwotnych",
      "Jura": "wapienne formacje skalne",
      "góry": "szczyty i doliny"
    },
    explanation: "Każde z tych miejsc przyciąga turystów innym zespołem walorów przyrodniczych."
  },
  {
    id: "R07_WAL_04",
    section: "Walory przyrodnicze i kulturowe",
    type: "multi_select",
    prompt: "Zaznacz aktywności możliwe do uprawiania w polskich górach.",
    options: ["wędrówki piesze", "narciarstwo", "wspinaczka skalna", "podziwianie krajobrazu", "zwiedzanie raf koralowych", "żegluga morska"],
    answer: [0, 1, 2, 3],
    explanation: "Góry przyciągają turystów krajobrazem i możliwością wędrówek, narciarstwa oraz wspinaczki."
  },
  {
    id: "R07_WAL_05",
    section: "Walory przyrodnicze i kulturowe",
    type: "true_false",
    prompt: "Puszcza Białowieska słynie z dziko żyjącej populacji żubrów.",
    options: null,
    answer: true,
    explanation: "Żubr jest jednym z najbardziej rozpoznawalnych walorów przyrodniczych Puszczy Białowieskiej."
  },
  {
    id: "R07_WAL_06",
    section: "Walory przyrodnicze i kulturowe",
    type: "single_choice",
    prompt: "Z jakiego waloru przyrodniczego słynie Wyżyna Krakowsko-Częstochowska?",
    options: ["Wapiennych formacji skalnych", "Ruchomych wydm nadmorskich", "Rozległych delt rzecznych", "Czynnych wulkanów", "Fiordów", "Raf koralowych"],
    answer: 0,
    explanation: "Jura słynie z wapiennych formacji skalnych i jest popularnym miejscem wspinaczki."
  },
  {
    id: "R07_WAL_07",
    section: "Walory przyrodnicze i kulturowe",
    type: "odd_one_out",
    prompt: "Wskaż walor kulturowy wśród walorów przyrodniczych: klif, jezioro, wydma, muzeum.",
    options: null,
    answer: "muzeum",
    explanation: "Muzeum jest walorem kulturowym, natomiast klif, jezioro i wydma są walorami przyrodniczymi."
  },
  {
    id: "R07_WAL_08",
    section: "Walory przyrodnicze i kulturowe",
    type: "fill_in",
    prompt: "Najcenniejsze walory przyrodnicze Polski są chronione w __________ parkach narodowych.",
    options: null,
    answer: ["23"],
    altAnswers: [["23", "dwudziestu trzech"]],
    explanation: "W Polsce najcenniejsze walory przyrodnicze objęto ochroną w 23 parkach narodowych."
  },
  {
    id: "R07_WAL_09",
    section: "Walory przyrodnicze i kulturowe",
    type: "sequence",
    prompt: "Ułóż elementy w kolejności od waloru do przykładowej korzyści gospodarczej dla regionu.",
    options: null,
    items: ["wydatki na noclegi i jedzenie", "rozwój infrastruktury", "przyjazd turystów", "atrakcyjny walor turystyczny"],
    answer: ["atrakcyjny walor turystyczny", "przyjazd turystów", "wydatki na noclegi i jedzenie", "rozwój infrastruktury"],
    explanation: "Walor przyciąga turystów, ich wydatki zasilają lokalną gospodarkę, a rosnący ruch sprzyja rozwojowi infrastruktury."
  },
  {
    id: "R07_WAL_10",
    section: "Walory przyrodnicze i kulturowe",
    type: "single_choice",
    prompt: "Które wydarzenie jest przykładem waloru kulturowego?",
    options: ["Open'er Festival", "Powstanie klifu", "Przemieszczanie się wydmy", "Kwitnienie roślin w lesie", "Falowanie jeziora", "Topnienie śniegu w górach"],
    answer: 0,
    explanation: "Festiwal muzyczny jest wydarzeniem kulturalnym, a więc walorem kulturowym."
  },
  {
    id: "R07_WAL_11",
    section: "Walory przyrodnicze i kulturowe",
    type: "riddle",
    prompt: "Jak nazywa się odtwarzanie wydarzeń historycznych w strojach z epoki i z wykorzystaniem eksponatów?",
    options: null,
    answer: "inscenizacja historyczna",
    altAnswers: ["inscenizacja historyczna", "inscenizacja", "rekonstrukcja historyczna"],
    explanation: "Inscenizacje historyczne widowiskowo odtwarzają ważne momenty z przeszłości."
  },
  {
    id: "R07_WAL_12",
    section: "Walory przyrodnicze i kulturowe",
    type: "scenario",
    prompt: "Turysta odwiedza Stare Miasto w Toruniu, muzeum i festiwal muzyczny. Jaki rodzaj walorów jest głównym celem tej podróży?",
    options: ["walory kulturowe", "walory przyrodnicze", "walory rolnicze", "walory klimatyczne", "walory geologiczne", "walory leśne"],
    answer: 0,
    explanation: "Zabytkowa zabudowa, muzeum i wydarzenie muzyczne należą do walorów kulturowych."
  },

  {
    id: "R07_REG_01",
    section: "Pobrzeża Bałtyku i Małopolska",
    type: "multi_select",
    prompt: "Zaznacz walory przyrodnicze pobrzeży Bałtyku.",
    options: ["piaszczyste plaże", "klify", "mierzeje", "ruchome wydmy", "kopalnie soli", "zabytkowe kościoły"],
    answer: [0, 1, 2, 3],
    image: "r07_pobrzeze_baltyku.jpg",
    explanation: "Plaże, klify, mierzeje i ruchome wydmy są charakterystycznymi walorami przyrodniczymi polskiego wybrzeża."
  },
  {
    id: "R07_REG_02",
    section: "Pobrzeża Bałtyku i Małopolska",
    type: "single_choice",
    prompt: "Na czym polega sezonowość turystyki nad Bałtykiem?",
    options: ["Latem turystów jest znacznie więcej niż w pozostałych porach roku", "Zimą turystów jest zawsze więcej niż latem", "Liczba turystów jest identyczna przez cały rok", "Turyści przyjeżdżają wyłącznie wiosną", "Jesienią zamyka się całe wybrzeże", "Ruch turystyczny odbywa się tylko co drugi rok"],
    answer: 0,
    explanation: "Nadmorski ruch turystyczny jest silnie skoncentrowany w lecie."
  },
  {
    id: "R07_REG_03",
    section: "Pobrzeża Bałtyku i Małopolska",
    type: "true_false",
    prompt: "Ruchome wydmy w Słowińskim Parku Narodowym przemieszczają się pod wpływem wiatru.",
    options: null,
    answer: true,
    image: "r07_ruchome_wydmy.jpg",
    explanation: "Wiatr przesuwa masy piasku, przez co wydmy stale zmieniają położenie i krajobraz."
  },
  {
    id: "R07_REG_04",
    section: "Pobrzeża Bałtyku i Małopolska",
    type: "match",
    prompt: "Połącz nadmorski walor z właściwym przykładem lub opisem.",
    options: null,
    left: ["plaża", "klif", "mierzeja", "ruchoma wydma", "Wyspa Wolin"],
    right: ["piaszczysty pas na styku morza i lądu", "wybrzeże wysokie", "długi i wąski pas lądu utworzony przez morze", "wzniesienie z piasku przesuwane przez wiatr", "największa polska wyspa w całości należąca do kraju"],
    answer: {
      "plaża": "piaszczysty pas na styku morza i lądu",
      "klif": "wybrzeże wysokie",
      "mierzeja": "długi i wąski pas lądu utworzony przez morze",
      "ruchoma wydma": "wzniesienie z piasku przesuwane przez wiatr",
      "Wyspa Wolin": "największa polska wyspa w całości należąca do kraju"
    },
    explanation: "Każdy z wymienionych elementów ma odrębną formę i znaczenie dla krajobrazu wybrzeża."
  },
  {
    id: "R07_REG_05",
    section: "Pobrzeża Bałtyku i Małopolska",
    type: "odd_one_out",
    prompt: "Wskaż aktywność niezwiązaną ze sportami wodnymi nad Bałtykiem: żeglarstwo, kitesurfing, windsurfing, narciarstwo.",
    options: null,
    answer: "narciarstwo",
    explanation: "Żeglarstwo, kitesurfing i windsurfing są sportami wodnymi uprawianymi nad morzem, a narciarstwo nie."
  },
  {
    id: "R07_REG_06",
    section: "Pobrzeża Bałtyku i Małopolska",
    type: "fill_in",
    prompt: "Największa polska wyspa w całości należąca do kraju to __________.",
    options: null,
    answer: ["Wolin"],
    altAnswers: [["Wolin", "wyspa Wolin"]],
    explanation: "Wolin jest największą polską wyspą w całości należącą do Polski i słynie z wysokich klifów."
  },
  {
    id: "R07_REG_07",
    section: "Pobrzeża Bałtyku i Małopolska",
    type: "single_choice",
    prompt: "Które miejsce było najliczniej odwiedzane przez turystów w Polsce w 2024 roku?",
    options: ["Kraków", "Toruń", "Zamość", "Wadowice", "Malbork", "Świdnica"],
    answer: 0,
    image: "r07_krakow_stare_miasto.jpg",
    explanation: "Kraków odwiedziło w 2024 roku ponad 14,7 mln turystów, co czyniło go najliczniej odwiedzanym miejscem w kraju."
  },
  {
    id: "R07_REG_08",
    section: "Pobrzeża Bałtyku i Małopolska",
    type: "multi_select",
    prompt: "Zaznacz atrakcje wymienione jako szczególnie popularne w Krakowie.",
    options: ["Zamek Królewski na Wawelu", "Kościół Mariacki", "Sukiennice", "Brama Floriańska", "Hala Stulecia", "Park Mużakowski"],
    answer: [0, 1, 2, 3],
    explanation: "Wawel, Kościół Mariacki, Sukiennice i Brama Floriańska należą do najważniejszych atrakcji Krakowa."
  },
  {
    id: "R07_REG_09",
    section: "Pobrzeża Bałtyku i Małopolska",
    type: "true_false",
    prompt: "Kopalnie soli w Wieliczce i Bochni powstały w średniowieczu i są udostępnione do zwiedzania.",
    options: null,
    answer: true,
    image: "r07_kopalnia_soli.jpg",
    explanation: "Obie dawne kopalnie soli powstały w średniowieczu i słyną z ozdobionych podziemnych sal."
  },
  {
    id: "R07_REG_10",
    section: "Pobrzeża Bałtyku i Małopolska",
    type: "riddle",
    prompt: "Jak nazywa się małopolski szlak obejmujący 250 zabytkowych kościołów, cerkwi, dworów i skansenów?",
    options: null,
    answer: "Szlak Architektury Drewnianej",
    altAnswers: ["Szlak Architektury Drewnianej", "szlak architektury drewnianej"],
    explanation: "Szlak Architektury Drewnianej łączy 250 zabytkowych obiektów w Małopolsce."
  },
  {
    id: "R07_REG_11",
    section: "Pobrzeża Bałtyku i Małopolska",
    type: "single_choice",
    prompt: "Dlaczego Wadowice są popularne wśród turystów?",
    options: ["Stamtąd pochodził Karol Wojtyła, późniejszy papież Jan Paweł II", "Znajduje się tam największa polska wyspa", "Leżą nad Morzem Bałtyckim", "Odbywa się tam inscenizacja bitwy pod Grunwaldem", "Znajduje się tam Hala Stulecia", "Są stolicą polskiego żeglarstwa"],
    answer: 0,
    explanation: "Popularność Wadowic wiąże się z tym, że z miasta pochodził Karol Wojtyła, czyli papież Jan Paweł II."
  },
  {
    id: "R07_REG_12",
    section: "Pobrzeża Bałtyku i Małopolska",
    type: "sort",
    prompt: "Przyporządkuj atrakcje do pobrzeży Bałtyku lub Małopolski.",
    options: null,
    items: ["Mierzeja Helska", "ruchome wydmy", "Wyspa Wolin", "Szlak Orlich Gniazd", "Wadowice", "kopalnia soli w Bochni"],
    categories: ["pobrzeża Bałtyku", "Małopolska"],
    answer: {
      "pobrzeża Bałtyku": ["Mierzeja Helska", "ruchome wydmy", "Wyspa Wolin"],
      "Małopolska": ["Szlak Orlich Gniazd", "Wadowice", "kopalnia soli w Bochni"]
    },
    explanation: "Mierzeja Helska, wydmy i Wolin leżą nad Bałtykiem, a pozostałe atrakcje znajdują się w Małopolsce."
  },

  {
    id: "R07_UNE_01",
    section: "Dziedzictwo UNESCO",
    type: "single_choice",
    prompt: "W ramach jakiej organizacji działa UNESCO?",
    options: ["Organizacji Narodów Zjednoczonych", "Unii Europejskiej", "Rady Europy", "Światowej Organizacji Handlu", "Międzynarodowego Funduszu Walutowego", "Organizacji Współpracy Gospodarczej i Rozwoju"],
    answer: 0,
    image: "r07_mapa_unesco_polska.jpg",
    explanation: "UNESCO jest organizacją działającą w ramach Organizacji Narodów Zjednoczonych."
  },
  {
    id: "R07_UNE_02",
    section: "Dziedzictwo UNESCO",
    type: "multi_select",
    prompt: "Zaznacz kategorie obiektów występujące na liście światowego dziedzictwa UNESCO.",
    options: ["kulturowe", "przyrodnicze", "mieszane", "wyłącznie gospodarcze", "wyłącznie sportowe"],
    answer: [0, 1, 2],
    explanation: "Lista obejmuje obiekty kulturowe, przyrodnicze oraz mieszane, łączące oba rodzaje dziedzictwa."
  },
  {
    id: "R07_UNE_03",
    section: "Dziedzictwo UNESCO",
    type: "single_choice",
    prompt: "Który polski obiekt UNESCO jest największym ceglanym i gotyckim zamkiem na świecie?",
    options: ["Zamek krzyżacki w Malborku", "Zamek Królewski na Wawelu", "Zamek Królewski w Warszawie", "Zamek Pieskowa Skała", "Zamek w Oświęcimiu", "Zamek w Niedzicy"],
    answer: 0,
    image: "r07_zamek_malbork.jpg",
    explanation: "Zamek krzyżacki w Malborku jest największym ceglanym i gotyckim zamkiem na świecie."
  },
  {
    id: "R07_UNE_04",
    section: "Dziedzictwo UNESCO",
    type: "true_false",
    prompt: "Kościoły Pokoju w Jaworze i Świdnicy zbudowano z muru pruskiego.",
    options: null,
    answer: true,
    image: "r07_koscioly_pokoju.jpg",
    explanation: "Kościoły Pokoju są największymi w Europie budowlami sakralnymi wykonanymi z muru pruskiego."
  },
  {
    id: "R07_UNE_05",
    section: "Dziedzictwo UNESCO",
    type: "match",
    prompt: "Połącz obiekt UNESCO z jego cechą.",
    options: null,
    left: ["Hala Stulecia", "Krzemionki", "Stare Miasto w Zamościu", "Park Mużakowski"],
    right: ["hala widowiskowo-sportowa z lat 1911-1913", "region pradziejowego górnictwa krzemienia pasiastego", "renesansowa zabudowa miasta", "park w stylu angielskim po obu stronach Nysy Łużyckiej"],
    answer: {
      "Hala Stulecia": "hala widowiskowo-sportowa z lat 1911-1913",
      "Krzemionki": "region pradziejowego górnictwa krzemienia pasiastego",
      "Stare Miasto w Zamościu": "renesansowa zabudowa miasta",
      "Park Mużakowski": "park w stylu angielskim po obu stronach Nysy Łużyckiej"
    },
    explanation: "Obiekty UNESCO reprezentują różne typy dziedzictwa - od zabudowy miejskiej i przemysłowej po założenia parkowe."
  },
  {
    id: "R07_UNE_06",
    section: "Dziedzictwo UNESCO",
    type: "fill_in",
    prompt: "W Polsce znajduje się __________ obiektów na liście światowego dziedzictwa UNESCO według danych z lipca 2025 roku.",
    options: null,
    answer: ["17"],
    altAnswers: [["17", "siedemnaście"]],
    explanation: "Według danych z lipca 2025 roku Polska ma 17 obiektów UNESCO: 15 kulturowych i 2 przyrodnicze."
  },
  {
    id: "R07_UNE_07",
    section: "Dziedzictwo UNESCO",
    type: "odd_one_out",
    prompt: "Wskaż obiekt przyrodniczy wśród obiektów kulturowych UNESCO: Zamek w Malborku, Hala Stulecia, Puszcza Białowieska, Stare Miasto w Toruniu.",
    options: null,
    answer: "Puszcza Białowieska",
    explanation: "Puszcza Białowieska jest obiektem dziedzictwa przyrodniczego, a pozostałe są obiektami kulturowymi."
  },
  {
    id: "R07_UNE_08",
    section: "Dziedzictwo UNESCO",
    type: "sequence",
    prompt: "Ułóż państwa od największej do najmniejszej liczby obiektów UNESCO według danych z lipca 2025 roku.",
    options: null,
    items: ["Francja", "Włochy", "Hiszpania", "Chiny", "Niemcy"],
    answer: ["Włochy", "Chiny", "Niemcy", "Francja", "Hiszpania"],
    explanation: "Liczby obiektów wynosiły odpowiednio: Włochy 61, Chiny 60, Niemcy 55, Francja 54 i Hiszpania 50."
  },
  {
    id: "R07_UNE_09",
    section: "Dziedzictwo UNESCO",
    type: "scenario",
    prompt: "Pielgrzym szuka obiektu UNESCO z bazyliką, klasztorem, licznymi kaplicami i parkiem pielgrzymkowym, nazywanego czasem polską Jerozolimą. Dokąd powinien pojechać?",
    options: ["Do Kalwarii Zebrzydowskiej", "Do Parku Mużakowskiego", "Do Krzemionek", "Do Hali Stulecia", "Do Malborka", "Do Tarnowskich Gór"],
    answer: 0,
    image: "r07_kalwaria_zebrzydowska.jpg",
    explanation: "Kalwaria Zebrzydowska jest ważnym miejscem religijnym i częstym celem pielgrzymek."
  },
  {
    id: "R07_UNE_10",
    section: "Dziedzictwo UNESCO",
    type: "riddle",
    prompt: "Jak nazywa się organizacja ONZ do spraw Oświaty, Nauki i Kultury, która prowadzi listę światowego dziedzictwa?",
    options: null,
    answer: "UNESCO",
    altAnswers: ["UNESCO", "unesco"],
    explanation: "UNESCO kwalifikuje najcenniejsze obiekty dziedzictwa i umieszcza je na liście światowego dziedzictwa."
  },
  {
    id: "R07_UNE_11",
    section: "Dziedzictwo UNESCO",
    type: "sort",
    prompt: "Przyporządkuj polskie obiekty UNESCO do rodzaju dziedzictwa.",
    options: null,
    items: ["Puszcza Białowieska", "pierwotne lasy bukowe Karpat", "historyczne centrum Krakowa", "Hala Stulecia", "kopalnie soli w Wieliczce i Bochni", "Stare Miasto w Zamościu"],
    categories: ["przyrodnicze", "kulturowe"],
    answer: {
      "przyrodnicze": ["Puszcza Białowieska", "pierwotne lasy bukowe Karpat"],
      "kulturowe": ["historyczne centrum Krakowa", "Hala Stulecia", "kopalnie soli w Wieliczce i Bochni", "Stare Miasto w Zamościu"]
    },
    explanation: "Polska ma dwa przyrodnicze obiekty UNESCO, a pozostałe wymienione obiekty należą do dziedzictwa kulturowego."
  },
  {
    id: "R07_UNE_12",
    section: "Dziedzictwo UNESCO",
    type: "true_false",
    prompt: "Europa jest kontynentem o największej liczbie obiektów na liście światowego dziedzictwa UNESCO.",
    options: null,
    answer: true,
    explanation: "Najwięcej obiektów UNESCO znajduje się w Europie."
  },

  {
    id: "R07_SUK_01",
    section: "Rozwój i sukcesy Polski",
    type: "single_choice",
    prompt: "Od którego roku, po upadku komunizmu, polska gospodarka zaczęła się dynamicznie rozwijać?",
    options: ["1989", "1978", "2004", "2010", "2018", "2025"],
    answer: 0,
    explanation: "Dynamiczny rozwój polskiej gospodarki rozpoczął się po upadku komunizmu w 1989 roku."
  },
  {
    id: "R07_SUK_02",
    section: "Rozwój i sukcesy Polski",
    type: "multi_select",
    prompt: "Zaznacz skutki dynamicznego rozwoju gospodarczego Polski.",
    options: ["wzrost znaczenia międzynarodowego", "napływ inwestycji zagranicznych", "rozbudowa nowoczesnej infrastruktury", "wzrost jakości życia", "zanik wszystkich usług", "spadek nowoczesności kraju"],
    answer: [0, 1, 2, 3],
    explanation: "Rozwój gospodarczy wzmacnia pozycję Polski, przyciąga inwestycje, sprzyja modernizacji infrastruktury i podnosi jakość życia."
  },
  {
    id: "R07_SUK_03",
    section: "Rozwój i sukcesy Polski",
    type: "fill_in",
    prompt: "W 2024 roku PKB Polski wyniosło około __________ miliarda dolarów amerykańskich.",
    options: null,
    answer: ["914,7"],
    altAnswers: [["914,7", "914.7", "około 914,7", "ok. 914,7"]],
    explanation: "W 2024 roku PKB Polski wyniosło około 914,7 mld dolarów, czyli około 3 bln 641 mld zł."
  },
  {
    id: "R07_SUK_04",
    section: "Rozwój i sukcesy Polski",
    type: "match",
    prompt: "Połącz polską firmę z dziedziną jej działalności.",
    options: null,
    left: ["Orlen", "KGHM", "CD Projekt", "PESA", "4F"],
    right: ["przemysł naftowy i energetyczny", "produkcja srebra i miedzi", "gry komputerowe", "pojazdy szynowe", "odzież i akcesoria sportowe"],
    answer: {
      "Orlen": "przemysł naftowy i energetyczny",
      "KGHM": "produkcja srebra i miedzi",
      "CD Projekt": "gry komputerowe",
      "PESA": "pojazdy szynowe",
      "4F": "odzież i akcesoria sportowe"
    },
    explanation: "Każda z firm odniosła sukces międzynarodowy w innej gałęzi przemysłu lub biznesu."
  },
  {
    id: "R07_SUK_05",
    section: "Rozwój i sukcesy Polski",
    type: "scenario",
    prompt: "Astronauta uczestniczył w misji Axiom 4 i jako pierwszy Polak stacjonował na Międzynarodowej Stacji Kosmicznej. O kim mowa?",
    options: ["Sławosz Uznański-Wiśniewski", "Mirosław Hermaszewski", "Wojciech Zaremba", "Jakub Pachocki", "Szymon Sidor", "Łukasz Kaiser"],
    answer: 0,
    image: "r07_misja_axiom4.jpg",
    explanation: "Sławosz Uznański-Wiśniewski poleciał w kosmos w ramach misji Axiom 4 w 2025 roku i stacjonował na ISS."
  },
  {
    id: "R07_SUK_06",
    section: "Rozwój i sukcesy Polski",
    type: "true_false",
    prompt: "Mirosław Hermaszewski był pierwszym Polakiem, który odbył lot w kosmos.",
    options: null,
    answer: true,
    explanation: "Mirosław Hermaszewski odbył lot w kosmos w 1978 roku."
  },
  {
    id: "R07_SUK_07",
    section: "Rozwój i sukcesy Polski",
    type: "odd_one_out",
    prompt: "Wskaż osobę niezwiązaną ze współtworzeniem ChatGPT: Wojciech Zaremba, Jakub Pachocki, Łukasz Kaiser, Robert Lewandowski.",
    options: null,
    answer: "Robert Lewandowski",
    explanation: "Robert Lewandowski jest piłkarzem, natomiast pozostałe osoby są związane ze współtworzeniem ChatGPT."
  },
  {
    id: "R07_SUK_08",
    section: "Rozwój i sukcesy Polski",
    type: "single_choice",
    prompt: "Która firma jest znaczącym w Europie producentem pojazdów szynowych?",
    options: ["PESA", "4F", "KGHM", "Orlen", "CD Projekt", "OpenAI"],
    answer: 0,
    image: "r07_polskie_firmy.jpg",
    explanation: "PESA produkuje pociągi i tramwaje używane w Polsce oraz w wielu innych krajach."
  },
  {
    id: "R07_SUK_09",
    section: "Rozwój i sukcesy Polski",
    type: "riddle",
    prompt: "Jak nazywa się autorka powieści Bieguni, uhonorowana w 2018 roku Nagrodą Nobla i Międzynarodową Nagrodą Bookera?",
    options: null,
    answer: "Olga Tokarczuk",
    altAnswers: ["Olga Tokarczuk", "Tokarczuk"],
    explanation: "Olga Tokarczuk otrzymała obie prestiżowe nagrody za powieść Bieguni."
  },
  {
    id: "R07_SUK_10",
    section: "Rozwój i sukcesy Polski",
    type: "sort",
    prompt: "Przyporządkuj przykłady sukcesów do dziedzin.",
    options: null,
    items: ["misja Sławosza Uznańskiego-Wiśniewskiego", "współtworzenie ChatGPT", "firma PESA", "firma CD Projekt", "Olga Tokarczuk", "Andrzej Sapkowski", "Robert Lewandowski", "Iga Świątek"],
    categories: ["nauka i technologie", "przemysł i biznes", "kultura i sztuka", "sport"],
    answer: {
      "nauka i technologie": ["misja Sławosza Uznańskiego-Wiśniewskiego", "współtworzenie ChatGPT"],
      "przemysł i biznes": ["firma PESA", "firma CD Projekt"],
      "kultura i sztuka": ["Olga Tokarczuk", "Andrzej Sapkowski"],
      "sport": ["Robert Lewandowski", "Iga Świątek"]
    },
    explanation: "Sukcesy Polski obejmują naukę i technologię, biznes, kulturę oraz sport."
  },

  {
    id: "R07_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Ile obiektów na świecie znajdowało się na liście UNESCO w lipcu 2025 roku?",
    options: ["1248", "972", "235", "170", "1241", "1418"],
    answer: 0,
    explanation: "W lipcu 2025 roku lista światowego dziedzictwa UNESCO obejmowała 1248 obiektów ze 170 państw."
  },
  {
    id: "R07_HARD_02",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Spośród 1248 obiektów UNESCO __________ należały do dziedzictwa kulturowego, __________ do przyrodniczego, a __________ miało charakter mieszany.",
    options: null,
    answer: ["972", "235", "41"],
    altAnswers: [["972"], ["235"], ["41"]],
    explanation: "W lipcu 2025 roku lista obejmowała 972 obiekty kulturowe, 235 przyrodniczych i 41 mieszanych."
  },
  {
    id: "R07_HARD_03",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz wszystkie informacje dotyczące Parku Mużakowskiego.",
    options: ["Leży w Polsce i Niemczech", "Przepływa przez niego Nysa Łużycka", "Jest parkiem w stylu angielskim", "Uznano go za wybitny przykład XIX-wiecznej architektury ogrodowej", "Jest kopalnią soli", "Znajduje się wyłącznie w Małopolsce"],
    answer: [0, 1, 2, 3],
    explanation: "Park Mużakowski leży po obu stronach granicy polsko-niemieckiej, przecina go Nysa Łużycka i reprezentuje XIX-wieczną architekturę ogrodową w stylu angielskim."
  },
  {
    id: "R07_HARD_04",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    options: null,
    items: ["misja Axiom 4", "Nagroda Nobla dla Olgi Tokarczuk", "lot Mirosława Hermaszewskiego", "początek dynamicznego rozwoju gospodarki po upadku komunizmu"],
    answer: ["lot Mirosława Hermaszewskiego", "początek dynamicznego rozwoju gospodarki po upadku komunizmu", "Nagroda Nobla dla Olgi Tokarczuk", "misja Axiom 4"],
    explanation: "Kolejność wyznaczają lata: 1978, 1989, 2018 i 2025."
  },
  {
    id: "R07_HARD_05",
    section: "Super trudne",
    type: "scenario",
    prompt: "Badacz analizuje zespół 28 zabytkowych obiektów związanych z górnictwem, obejmujący kopalnię, system gospodarowania wodami podziemnymi i park na dawnych terenach górniczych. Który obiekt UNESCO opisuje?",
    options: ["Kopalnię rud ołowiu, srebra i cynku w Tarnowskich Górach", "Królewskie Kopalnie Soli w Wieliczce i Bochni", "Krzemionkowski region górnictwa krzemienia pasiastego", "Park Mużakowski", "Zamek krzyżacki w Malborku", "Halę Stulecia we Wrocławiu"],
    answer: 0,
    explanation: "Obiekt w Tarnowskich Górach obejmuje 28 zabytków górnictwa i system gospodarowania wodami podziemnymi."
  },
  {
    id: "R07_HARD_06",
    section: "Super trudne",
    type: "true_false",
    prompt: "Osiem drewnianych cerkwi wpisanych jako wspólny obiekt UNESCO znajduje się w Polsce, a osiem w Ukrainie.",
    options: null,
    answer: true,
    explanation: "Wspólny polsko-ukraiński obiekt obejmuje po osiem drewnianych cerkwi w każdym z tych państw."
  },
  {
    id: "R07_HARD_07",
    section: "Super trudne",
    type: "riddle",
    prompt: "Który polski obiekt UNESCO był miejscem wydobycia krzemienia pasiastego w latach około 3900-1600 p.n.e.?",
    options: null,
    answer: "Krzemionkowski region pradziejowego górnictwa krzemienia pasiastego",
    altAnswers: ["Krzemionkowski region pradziejowego górnictwa krzemienia pasiastego", "Krzemionki", "region górniczy Krzemionki"],
    explanation: "Krzemionki dokumentują pradziejowe wydobycie krzemienia pasiastego."
  },
  {
    id: "R07_HARD_08",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Wskaż firmę, której opis nie dotyczy produkcji materialnej ani energetyki: Orlen, KGHM, PESA, CD Projekt.",
    options: null,
    answer: "CD Projekt",
    explanation: "CD Projekt tworzy gry komputerowe, podczas gdy Orlen działa w energetyce, KGHM wydobywa i produkuje metale, a PESA wytwarza pojazdy szynowe."
  },
  {
    id: "R07_HARD_09",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz osobę ze wskazaną rolą lub osiągnięciem.",
    options: null,
    left: ["Wojciech Zaremba", "Jakub Pachocki", "Sławosz Uznański-Wiśniewski", "Mirosław Hermaszewski"],
    right: ["współzałożyciel OpenAI", "główny naukowiec OpenAI", "pierwszy Polak na ISS", "pierwszy Polak w kosmosie"],
    answer: {
      "Wojciech Zaremba": "współzałożyciel OpenAI",
      "Jakub Pachocki": "główny naukowiec OpenAI",
      "Sławosz Uznański-Wiśniewski": "pierwszy Polak na ISS",
      "Mirosław Hermaszewski": "pierwszy Polak w kosmosie"
    },
    explanation: "Te osoby reprezentują polskie osiągnięcia w rozwoju sztucznej inteligencji i badaniach kosmicznych."
  },
  {
    id: "R07_HARD_10",
    section: "Super trudne",
    type: "single_choice",
    prompt: "W jakim okresie trwała misja Axiom 4 z udziałem Sławosza Uznańskiego-Wiśniewskiego?",
    options: ["Od 25 czerwca do 15 lipca 2025 roku", "Od 1 maja do 21 maja 2024 roku", "Od 15 lipca do 25 sierpnia 2025 roku", "Od 25 czerwca do 15 lipca 1978 roku", "Od 1 stycznia do 15 lutego 2025 roku", "Od 20 czerwca do 10 lipca 2023 roku"],
    answer: 0,
    explanation: "Misja Axiom 4 trwała od 25 czerwca do 15 lipca 2025 roku."
  },
  {
    id: "R07_HARD_11",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz informacje odnoszące się do drewnianych kościołów południowej Małopolski wpisanych na listę UNESCO.",
    options: ["Najstarszy powstał w XIV wieku", "Są konstrukcjami typu wieńcowego", "Tworzą drugie najstarsze w Europie skupisko zachowanych drewnianych świątyń", "Obejmują m.in. Binarową i Sękową", "Wszystkie powstały w XX wieku", "Są budowlami z muru pruskiego"],
    answer: [0, 1, 2, 3],
    explanation: "Kościoły są kilkusetletnimi konstrukcjami wieńcowymi, a wśród miejscowości wymieniono m.in. Binarową, Blizne, Dębno, Haczów, Lipnicę Murowaną i Sękową."
  },
  {
    id: "R07_HARD_12",
    section: "Super trudne",
    type: "scenario",
    prompt: "Turysta chce zobaczyć miejsce obejmujące Stare Miasto, Wawel, dawne przedmieście Stradom i dawne miasto Kazimierz. Który obiekt UNESCO powinien wybrać?",
    options: ["Historyczne centrum Krakowa", "Średniowieczny zespół miejski Torunia", "Stare Miasto w Warszawie", "Stare Miasto w Zamościu", "Kalwarię Zebrzydowską", "Park Mużakowski"],
    answer: 0,
    image: "r07_krakow_stare_miasto.jpg",
    explanation: "Historyczne centrum Krakowa obejmuje Stare Miasto, Wawel, Stradom i Kazimierz."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r07",
  number: 4,
  title: "Gospodarka Polski",
  icon: "🇵🇱",
  sectionOrder: [
    "Turystyka i jej znaczenie",
    "Walory przyrodnicze i kulturowe",
    "Pobrzeża Bałtyku i Małopolska",
    "Dziedzictwo UNESCO",
    "Rozwój i sukcesy Polski"
  ],
  sectionIcons: {
    "Turystyka i jej znaczenie": "🧳",
    "Walory przyrodnicze i kulturowe": "🏞️",
    "Pobrzeża Bałtyku i Małopolska": "🌊",
    "Dziedzictwo UNESCO": "🏛️",
    "Rozwój i sukcesy Polski": "📈"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
