// Skróty sekcji (do identyfikatorów ćwiczeń):
//   GRN  = Granice i polityka zagraniczna
//   UST  = Konstytucja marcowa i republika
//   SAN  = Sanacja i konstytucja kwietniowa
//   SPO  = Społeczeństwo wielonarodowe
//   GOS  = Gospodarka i modernizacja
//   KUL  = Oświata, nauka i kultura
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R05_GRN_01",
    section: "Granice i polityka zagraniczna",
    type: "single_choice",
    prompt: "Który polityk reprezentował federacyjną koncepcję polskiej polityki wschodniej?",
    options: ["Józef Piłsudski", "Roman Dmowski", "Wojciech Korfanty", "Wincenty Witos", "Gabriel Narutowicz", "Józef Beck"],
    answer: 0,
    explanation: "Józef Piłsudski chciał stworzenia federacji państw Europy Środkowej i Wschodniej, która miała wzmacniać bezpieczeństwo Polski."
  },
  {
    id: "R05_GRN_02",
    section: "Granice i polityka zagraniczna",
    type: "single_choice",
    prompt: "Które miasto było bronione przez polską młodzież nazwaną później Orlętami?",
    options: ["Lwów", "Wilno", "Poznań", "Gdańsk", "Katowice", "Kijów"],
    answer: 0,
    image: "r05_orleta_lwowskie.jpg",
    explanation: "Orlęta Lwowskie to młodzi polscy obrońcy Lwowa walczący z Ukraińcami w listopadzie 1918 r."
  },
  {
    id: "R05_GRN_03",
    section: "Granice i polityka zagraniczna",
    type: "true_false",
    prompt: "Pokój ryski kończący wojnę polsko-bolszewicką podpisano 18 marca 1921 r.",
    options: null,
    answer: true,
    explanation: "Traktat pokojowy podpisano w Rydze 18 marca 1921 r.; ustalił on przebieg granicy polsko-sowieckiej."
  },
  {
    id: "R05_GRN_04",
    section: "Granice i polityka zagraniczna",
    type: "multi_select",
    prompt: "Zaznacz wydarzenia związane z kształtowaniem zachodniej i północnej granicy Polski.",
    options: ["powstanie wielkopolskie", "plebiscyt na Warmii i Mazurach", "powstania śląskie", "wyprawa kijowska", "pakt Ribbentrop-Mołotow"],
    answer: [0, 1, 2],
    explanation: "Zachodnią i północną granicę kształtowały powstanie wielkopolskie, traktat wersalski, plebiscyty oraz powstania śląskie."
  },
  {
    id: "R05_GRN_05",
    section: "Granice i polityka zagraniczna",
    type: "fill_in",
    prompt: "Polska kontrofensywa w Bitwie Warszawskiej ruszyła 16 sierpnia 1920 r. znad rzeki __________.",
    options: null,
    answer: ["Wieprz"],
    altAnswers: [["Wieprz", "Wieprza", "rzeki Wieprz"]],
    image: "r05_bitwa_warszawska.jpg",
    explanation: "Uderzenie znad Wieprza na tyły Armii Czerwonej pozwoliło rozbić większość sił walczących o Warszawę."
  },
  {
    id: "R05_GRN_06",
    section: "Granice i polityka zagraniczna",
    type: "riddle",
    prompt: "Jak nazywało się niewielkie państwo utworzone po zajęciu Wilna przez oddziały generała Żeligowskiego?",
    options: null,
    answer: "Litwa Środkowa",
    altAnswers: ["Litwa Środkowa", "Litwa Srodkowa"],
    explanation: "Po upozorowanym buncie Żeligowskiego Wilno i okolice weszły w skład Litwy Środkowej, przyłączonej do Polski w 1922 r."
  },
  {
    id: "R05_GRN_07",
    section: "Granice i polityka zagraniczna",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Bitwa Warszawska, bitwa nad Niemnem, pokój ryski, konstytucja marcowa.",
    options: null,
    answer: "konstytucja marcowa",
    explanation: "Trzy pierwsze elementy dotyczą wojny polsko-bolszewickiej, a konstytucja marcowa dotyczy ustroju państwa."
  },
  {
    id: "R05_GRN_08",
    section: "Granice i polityka zagraniczna",
    type: "scenario",
    prompt: "Jest rok 1921. Na Górny Śląsk przyjeżdżają osoby urodzone w tym regionie, ale mieszkające w głębi Niemiec, aby wziąć udział w głosowaniu. O jakie głosowanie chodzi?",
    options: ["plebiscyt na Górnym Śląsku", "wybory do Sejmu Wileńskiego", "wybory brzeskie", "plebiscyt na Warmii i Mazurach", "wybory prezydenckie"],
    answer: 0,
    explanation: "Plebiscyt na Górnym Śląsku odbył się 20 marca 1921 r.; z głębi Niemiec przyjechało na niego niemal 200 tys. Niemców urodzonych na Śląsku."
  },
  {
    id: "R05_GRN_09",
    section: "Granice i polityka zagraniczna",
    type: "sequence",
    prompt: "Ułóż wydarzenia w porządku chronologicznym.",
    options: null,
    items: ["pokój ryski", "Bitwa Warszawska", "wybuch powstania wielkopolskiego", "III powstanie śląskie"],
    answer: ["wybuch powstania wielkopolskiego", "Bitwa Warszawska", "pokój ryski", "III powstanie śląskie"],
    explanation: "Powstanie wielkopolskie wybuchło 27 grudnia 1918 r., Bitwa Warszawska rozegrała się w sierpniu 1920 r., pokój ryski podpisano w marcu 1921 r., a III powstanie śląskie wybuchło w maju 1921 r."
  },
  {
    id: "R05_GRN_10",
    section: "Granice i polityka zagraniczna",
    type: "match",
    prompt: "Połącz osobę z wydarzeniem lub działaniem.",
    options: null,
    left: ["Symon Petlura", "Lucjan Żeligowski", "Wojciech Korfanty", "Joachim von Ribbentrop"],
    right: ["pakt z Niemcami i ZSRS", "przywództwo III powstania śląskiego", "sojusz z Piłsudskim w 1920 r.", "zajęcie Wilna"],
    answer: {
      "Symon Petlura": "sojusz z Piłsudskim w 1920 r.",
      "Lucjan Żeligowski": "zajęcie Wilna",
      "Wojciech Korfanty": "przywództwo III powstania śląskiego",
      "Joachim von Ribbentrop": "pakt z Niemcami i ZSRS"
    },
    image: "r05_mapa_granic_ii_rp.jpg",
    explanation: "Każda z tych postaci wiąże się z innym etapem walki o granice lub z polityką zagraniczną końca dwudziestolecia."
  },
  {
    id: "R05_UST_01",
    section: "Konstytucja marcowa i republika",
    type: "single_choice",
    prompt: "Jak nazywał się sejm wybrany w styczniu 1919 r. w celu uchwalenia konstytucji?",
    options: ["Sejm Ustawodawczy", "Sejm Wileński", "Zgromadzenie Narodowe", "Rada Ambasadorów", "Rada Obrony Państwa", "Senat Konstytucyjny"],
    answer: 0,
    image: "r05_sejm_ustawodawczy.jpg",
    explanation: "Sejm Ustawodawczy miał przygotować i uchwalić ustawę zasadniczą odrodzonej Polski."
  },
  {
    id: "R05_UST_02",
    section: "Konstytucja marcowa i republika",
    type: "true_false",
    prompt: "Mała konstytucja z 1919 r. wzmacniała władzę Naczelnika Państwa kosztem sejmu.",
    options: null,
    answer: false,
    explanation: "Mała konstytucja ograniczała kompetencje Naczelnika Państwa i podporządkowywała go sejmowi."
  },
  {
    id: "R05_UST_03",
    section: "Konstytucja marcowa i republika",
    type: "fill_in",
    prompt: "Konstytucja marcowa została uchwalona __________ marca __________ r.",
    options: null,
    answer: ["17", "1921"],
    altAnswers: [["17", "siedemnastego"], ["1921", "1921 roku"]],
    explanation: "Sejm Ustawodawczy uchwalił konstytucję 17 marca 1921 r., dlatego nazwano ją konstytucją marcową."
  },
  {
    id: "R05_UST_04",
    section: "Konstytucja marcowa i republika",
    type: "multi_select",
    prompt: "Zaznacz cechy wyborów do parlamentu według konstytucji marcowej.",
    options: ["powszechne", "równe", "tajne", "bezpośrednie", "dziedziczne", "proporcjonalne"],
    answer: [0, 1, 2, 3, 5],
    explanation: "Wybory były pięcioprzymiotnikowe: powszechne, równe, tajne, bezpośrednie i proporcjonalne."
  },
  {
    id: "R05_UST_05",
    section: "Konstytucja marcowa i republika",
    type: "single_choice",
    prompt: "Kto wybierał prezydenta Rzeczypospolitej według konstytucji marcowej?",
    options: ["Zgromadzenie Narodowe", "Rada Ministrów", "sam sejm", "Sąd Najwyższy", "Naczelnik Państwa", "wszyscy obywatele w wyborach powszechnych"],
    answer: 0,
    explanation: "Sejm i senat łączyły się w Zgromadzenie Narodowe, które wybierało prezydenta."
  },
  {
    id: "R05_UST_06",
    section: "Konstytucja marcowa i republika",
    type: "sort",
    prompt: "Przyporządkuj organy państwa do rodzaju władzy według konstytucji marcowej.",
    options: null,
    items: ["sejm", "senat", "prezydent", "rząd", "sądy"],
    categories: ["ustawodawcza", "wykonawcza", "sądownicza"],
    answer: {
      "ustawodawcza": ["sejm", "senat"],
      "wykonawcza": ["prezydent", "rząd"],
      "sądownicza": ["sądy"]
    },
    explanation: "Konstytucja marcowa wprowadzała trójpodział władzy: sejm i senat tworzyły władzę ustawodawczą, prezydent i rząd wykonawczą, a sądy sądowniczą."
  },
  {
    id: "R05_UST_07",
    section: "Konstytucja marcowa i republika",
    type: "riddle",
    prompt: "Jak nazywał się pierwszy prezydent II Rzeczypospolitej?",
    options: null,
    answer: "Gabriel Narutowicz",
    altAnswers: ["Gabriel Narutowicz", "Narutowicz"],
    image: "r05_narutowicz_zacheta.jpg",
    explanation: "Gabriel Narutowicz został wybrany przez Zgromadzenie Narodowe w grudniu 1922 r."
  },
  {
    id: "R05_UST_08",
    section: "Konstytucja marcowa i republika",
    type: "scenario",
    prompt: "Po burzliwych obradach parlament wybiera prezydenta głosami centrum, lewicy i mniejszości narodowych. Prawica rozpoczyna przeciw niemu ostrą kampanię. Kogo dotyczy ta sytuacja?",
    options: ["Gabriela Narutowicza", "Stanisława Wojciechowskiego", "Ignacego Mościckiego", "Macieja Rataja", "Władysława Grabskiego"],
    answer: 0,
    explanation: "Wybór Gabriela Narutowicza wywołał gwałtowną kampanię prawicy, zakończoną atmosferą demonstracji i zamachem."
  },
  {
    id: "R05_UST_09",
    section: "Konstytucja marcowa i republika",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: sejm, senat, Zgromadzenie Narodowe, Korpus Ochrony Pogranicza.",
    options: null,
    answer: "Korpus Ochrony Pogranicza",
    explanation: "Korpus Ochrony Pogranicza był formacją strzegącą granic, a pozostałe elementy dotyczą ustroju parlamentarnego."
  },
  {
    id: "R05_UST_10",
    section: "Konstytucja marcowa i republika",
    type: "match",
    prompt: "Połącz postać z funkcją lub wydarzeniem.",
    options: null,
    left: ["Józef Piłsudski", "Maciej Rataj", "Gabriel Narutowicz", "Eligiusz Niewiadomski"],
    right: ["marszałek sejmu", "zamachowiec z Zachęty", "Naczelnik Państwa", "pierwszy prezydent II RP"],
    answer: {
      "Józef Piłsudski": "Naczelnik Państwa",
      "Maciej Rataj": "marszałek sejmu",
      "Gabriel Narutowicz": "pierwszy prezydent II RP",
      "Eligiusz Niewiadomski": "zamachowiec z Zachęty"
    },
    explanation: "Te osoby pojawiają się przy opisie pierwszych lat republiki parlamentarnej i kryzysu po wyborze prezydenta."
  },
  {
    id: "R05_SAN_01",
    section: "Sanacja i konstytucja kwietniowa",
    type: "single_choice",
    prompt: "Jak nazwano koalicję prawicy skupionej w Chjenie z PSL Piast?",
    options: ["Chjeno-Piast", "Centrolew", "BBWR", "OZN", "Front Morges", "Obóz belwederski"],
    answer: 0,
    explanation: "Koalicja Chjeny i PSL Piast przyjęła nazwę Chjeno-Piast; rząd tej koalicji objął władzę w czasie kryzysu gospodarczego."
  },
  {
    id: "R05_SAN_02",
    section: "Sanacja i konstytucja kwietniowa",
    type: "true_false",
    prompt: "Przewrót majowy rozpoczął się w maju 1926 r. i doprowadził do objęcia władzy przez obóz sanacji.",
    options: null,
    answer: true,
    image: "r05_most_poniatowskiego_1926.jpg",
    explanation: "Walki w Warszawie w maju 1926 r. zakończyły się rezygnacją prezydenta Wojciechowskiego i rządu, a władzę przejęło środowisko Piłsudskiego."
  },
  {
    id: "R05_SAN_03",
    section: "Sanacja i konstytucja kwietniowa",
    type: "fill_in",
    prompt: "Po przewrocie majowym prezydentem został __________ __________.",
    options: null,
    answer: ["Ignacy", "Mościcki"],
    altAnswers: [["Ignacy"], ["Mościcki", "Moscicki"]],
    explanation: "Piłsudski nie przyjął urzędu prezydenta, a Zgromadzenie Narodowe wybrało zaproponowanego przez niego Ignacego Mościckiego."
  },
  {
    id: "R05_SAN_04",
    section: "Sanacja i konstytucja kwietniowa",
    type: "multi_select",
    prompt: "Zaznacz skutki lub cechy rządów sanacji.",
    options: ["ograniczanie roli parlamentu", "wzmocnienie władzy wykonawczej", "represje wobec części opozycji", "likwidacja urzędu prezydenta", "pełna dominacja sejmu nad rządem"],
    answer: [0, 1, 2],
    explanation: "Sanacja ograniczała znaczenie sejmu, wzmacniała władzę wykonawczą i stosowała represje wobec części przeciwników politycznych."
  },
  {
    id: "R05_SAN_05",
    section: "Sanacja i konstytucja kwietniowa",
    type: "riddle",
    prompt: "Jak nazywał się obóz polityczny utworzony przez zwolenników Piłsudskiego jako zaplecze rządów po przewrocie?",
    options: null,
    answer: "Bezpartyjny Blok Współpracy z Rządem",
    altAnswers: ["Bezpartyjny Blok Współpracy z Rządem", "Bezpartyjny Blok Wspolpracy z Rzadem", "BBWR"],
    explanation: "BBWR był organizacją wspierającą obóz sanacji i zwyciężył m.in. w wyborach brzeskich."
  },
  {
    id: "R05_SAN_06",
    section: "Sanacja i konstytucja kwietniowa",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: BBWR, OZN, Centrolew, Obóz Narodowo-Radykalny.",
    options: null,
    answer: "Centrolew",
    explanation: "Centrolew był porozumieniem partii centrowych i lewicowych przeciw sanacji, a pozostałe nazwy odnoszą się do obozu rządzącego lub prawicy."
  },
  {
    id: "R05_SAN_07",
    section: "Sanacja i konstytucja kwietniowa",
    type: "single_choice",
    prompt: "Która konstytucja wzmacniała urząd prezydenta i ograniczała rolę sejmu?",
    options: ["konstytucja kwietniowa", "konstytucja marcowa", "mała konstytucja", "konstytucja 3 maja", "konstytucja lipcowa", "konstytucja wersalska"],
    answer: 0,
    explanation: "Konstytucja kwietniowa z 1935 r. dawała prezydentowi bardzo silną pozycję i niemal eliminowała sejm z rządzenia państwem."
  },
  {
    id: "R05_SAN_08",
    section: "Sanacja i konstytucja kwietniowa",
    type: "sequence",
    prompt: "Ułóż wydarzenia w porządku chronologicznym.",
    options: null,
    items: ["śmierć Józefa Piłsudskiego", "konstytucja kwietniowa", "przewrót majowy", "Ignacy Mościcki prezydentem"],
    answer: ["przewrót majowy", "Ignacy Mościcki prezydentem", "konstytucja kwietniowa", "śmierć Józefa Piłsudskiego"],
    explanation: "Przewrót majowy i wybór Mościckiego nastąpiły w 1926 r., konstytucję kwietniową podpisano 23 kwietnia 1935 r., a Piłsudski zmarł 12 maja 1935 r."
  },
  {
    id: "R05_SAN_09",
    section: "Sanacja i konstytucja kwietniowa",
    type: "scenario",
    prompt: "Przywódcy opozycji zostają aresztowani podczas kampanii wyborczej w 1930 r. i osadzeni w twierdzy brzeskiej bez wyroków sądowych. Jak nazwano później te wybory?",
    options: ["wybory brzeskie", "wybory sejmowe", "wybory wileńskie", "wybory plebiscytowe", "wybory konstytucyjne"],
    answer: 0,
    explanation: "Przeciwnicy sanacji nazwali wybory z 1930 r. wyborami brzeskimi od twierdzy, w której osadzono liderów opozycji."
  },
  {
    id: "R05_SAN_10",
    section: "Sanacja i konstytucja kwietniowa",
    type: "sort",
    prompt: "Przyporządkuj osoby do obszaru wpływów po śmierci Piłsudskiego.",
    options: null,
    items: ["Ignacy Mościcki", "Edward Rydz-Śmigły", "Józef Beck"],
    categories: ["polityka wewnętrzna i gospodarka", "wojsko", "polityka zagraniczna"],
    answer: {
      "polityka wewnętrzna i gospodarka": ["Ignacy Mościcki"],
      "wojsko": ["Edward Rydz-Śmigły"],
      "polityka zagraniczna": ["Józef Beck"]
    },
    explanation: "Po śmierci Piłsudskiego wpływy w obozie sanacji podzielili między siebie Mościcki, Rydz-Śmigły i Beck."
  },
  {
    id: "R05_SPO_01",
    section: "Społeczeństwo wielonarodowe",
    type: "single_choice",
    prompt: "Ilu mieszkańców miała Polska po włączeniu Śląska i Wileńszczyzny w 1922 r.?",
    options: ["ponad 27 mln", "około 10 mln", "ponad 40 mln", "około 5 mln", "ponad 60 mln", "około 18 mln"],
    answer: 0,
    explanation: "W 1922 r. Polskę zamieszkiwało ponad 27 mln ludzi, co dawało jej szóste miejsce w Europie pod względem powierzchni i liczby mieszkańców."
  },
  {
    id: "R05_SPO_02",
    section: "Społeczeństwo wielonarodowe",
    type: "true_false",
    prompt: "Na początku lat 20. XX w. większość ludności Polski mieszkała na wsi.",
    options: null,
    answer: true,
    explanation: "II Rzeczpospolita była krajem rolniczo-przemysłowym, a większość jej ludności żyła na wsiach."
  },
  {
    id: "R05_SPO_03",
    section: "Społeczeństwo wielonarodowe",
    type: "single_choice",
    prompt: "Które województwo było najgęściej zaludnione?",
    options: ["śląskie", "poleskie", "wołyńskie", "wileńskie", "pomorskie", "lubelskie"],
    answer: 0,
    explanation: "Najgęściej zaludnione było województwo śląskie, a najrzadziej województwo poleskie."
  },
  {
    id: "R05_SPO_04",
    section: "Społeczeństwo wielonarodowe",
    type: "multi_select",
    prompt: "Zaznacz najliczniejsze mniejszości narodowe II Rzeczypospolitej wymienione w podsumowaniu lekcji.",
    options: ["Ukraińcy", "Żydzi", "Białorusini", "Niemcy", "Francuzi", "Hiszpanie"],
    answer: [0, 1, 2, 3],
    image: "r05_mniejszosci_narodowe.jpg",
    explanation: "Do najliczniejszych mniejszości narodowych należeli Ukraińcy, Żydzi, Białorusini i Niemcy."
  },
  {
    id: "R05_SPO_05",
    section: "Społeczeństwo wielonarodowe",
    type: "fill_in",
    prompt: "Według danych ze spisu z 1931 r. Ukraińców w Polsce było około __________ mln.",
    options: null,
    answer: ["4,5"],
    altAnswers: [["4,5", "4.5", "cztery i pół"]],
    explanation: "Ukraińcy byli najliczniejszą mniejszością narodową II RP; według spisu z 1931 r. było ich około 4,5 mln."
  },
  {
    id: "R05_SPO_06",
    section: "Społeczeństwo wielonarodowe",
    type: "riddle",
    prompt: "Jaki skrót nosiła Organizacja Ukraińskich Nacjonalistów?",
    options: null,
    answer: "OUN",
    altAnswers: ["OUN", "Organizacja Ukraińskich Nacjonalistów", "Organizacja Ukrainskich Nacjonalistow"],
    explanation: "OUN powstała w 1929 r. i prowadziła walkę o państwo ukraińskie, uznając Polskę i ZSRS za okupantów ziem ukraińskich."
  },
  {
    id: "R05_SPO_07",
    section: "Społeczeństwo wielonarodowe",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Ukraińcy, Żydzi, Białorusini, Chjena.",
    options: null,
    answer: "Chjena",
    explanation: "Ukraińcy, Żydzi i Białorusini to mniejszości narodowe, a Chjena była blokiem politycznym."
  },
  {
    id: "R05_SPO_08",
    section: "Społeczeństwo wielonarodowe",
    type: "scenario",
    prompt: "Mieszkasz w małym gospodarstwie na Kresach lub w Galicji. Ziemi jest mało, rodzina ledwo zaspokaja potrzeby i nie ma środków na inwestycje. Jaki problem społeczny opisuje ta sytuacja?",
    options: ["rozdrobnienie i ubóstwo gospodarstw chłopskich", "nadmiar wielkich fabryk", "powszechne bogactwo wsi", "pełną urbanizację kraju", "brak ludności wiejskiej"],
    answer: 0,
    explanation: "Na Kresach Wschodnich i w Galicji dominowały małe i karłowate gospodarstwa, które często nie pozwalały na inwestycje."
  },
  {
    id: "R05_SPO_09",
    section: "Społeczeństwo wielonarodowe",
    type: "sort",
    prompt: "Przyporządkuj grupy do typowych miejsc zamieszkania.",
    options: null,
    items: ["Ukraińcy", "Białorusini", "Żydzi", "Niemcy"],
    categories: ["wschód i południowy wschód", "miasta i miasteczka", "pogranicze zachodnie i północne"],
    answer: {
      "wschód i południowy wschód": ["Ukraińcy", "Białorusini"],
      "miasta i miasteczka": ["Żydzi"],
      "pogranicze zachodnie i północne": ["Niemcy"]
    },
    explanation: "Ukraińcy i Białorusini zamieszkiwali głównie tereny wschodnie, Żydzi miasta i miasteczka, a Niemcy zwarte skupiska na pograniczu zachodnim i północnym."
  },
  {
    id: "R05_SPO_10",
    section: "Społeczeństwo wielonarodowe",
    type: "single_choice",
    prompt: "Które miasto było największym w Europie skupiskiem ludności żydowskiej?",
    options: ["Warszawa", "Kraków", "Lublin", "Lwów", "Poznań", "Wilno"],
    answer: 0,
    explanation: "Warszawa była największym skupiskiem ludności żydowskiej w Europie."
  },
  {
    id: "R05_GOS_01",
    section: "Gospodarka i modernizacja",
    type: "single_choice",
    prompt: "Jaki problem utrudniał integrację gospodarczą ziem po zaborach?",
    options: ["różne systemy walutowe i prawne", "nadmiar jednolitych połączeń kolejowych", "brak zniszczeń wojennych", "jednolity rozstaw torów w całym kraju", "nadmiar portów pełnomorskich", "zbyt duże zasoby złota"],
    answer: 0,
    explanation: "Po zaborach państwo odziedziczyło różne waluty, systemy prawne, administrację oraz nierówną i niespójną sieć transportową."
  },
  {
    id: "R05_GOS_02",
    section: "Gospodarka i modernizacja",
    type: "true_false",
    prompt: "W styczniu 1919 r. wprowadzono markę polską, aby porządkować system walutowy.",
    options: null,
    answer: true,
    explanation: "Marka polska miała zastąpić różne waluty odziedziczone po zaborach i uporządkować obieg pieniądza."
  },
  {
    id: "R05_GOS_03",
    section: "Gospodarka i modernizacja",
    type: "fill_in",
    prompt: "W czerwcu 1924 r. markę polską zastąpił __________ __________.",
    options: null,
    answer: ["złoty", "polski"],
    altAnswers: [["złoty", "zloty"], ["polski"]],
    explanation: "Reforma Grabskiego wprowadziła złotego polskiego i pomogła zdusić hiperinflację."
  },
  {
    id: "R05_GOS_04",
    section: "Gospodarka i modernizacja",
    type: "multi_select",
    prompt: "Zaznacz działania rządu Władysława Grabskiego służące opanowaniu kryzysu walutowego.",
    options: ["urealnienie podatków", "przyspieszenie ściągania podatków", "oszczędności w administracji", "powołanie Banku Polskiego", "wprowadzenie rubla", "likwidacja portu w Gdyni"],
    answer: [0, 1, 2, 3],
    explanation: "Rząd Grabskiego urealnił podatki, przyspieszył ich pobór, oszczędzał w administracji i powołał Bank Polski."
  },
  {
    id: "R05_GOS_05",
    section: "Gospodarka i modernizacja",
    type: "single_choice",
    prompt: "Który minister szczególnie przyczynił się do rozwoju portu w Gdyni?",
    options: ["Eugeniusz Kwiatkowski", "Władysław Grabski", "Józef Beck", "Wincenty Witos", "Roman Dmowski", "Stanisław Taczak"],
    answer: 0,
    image: "r05_port_w_gdyni.jpg",
    explanation: "Do szybkiego rozwoju Gdyni przyczynił się minister przemysłu i handlu Eugeniusz Kwiatkowski."
  },
  {
    id: "R05_GOS_06",
    section: "Gospodarka i modernizacja",
    type: "riddle",
    prompt: "Jak nazywała się linia kolejowa łącząca Śląsk z portem w Gdyni i ułatwiająca eksport węgla?",
    options: null,
    answer: "magistrala węglowa",
    altAnswers: ["magistrala węglowa", "magistrala weglowa"],
    explanation: "Magistralę węglową zbudowano w latach 1926-1930 we współpracy z kapitałem francuskim."
  },
  {
    id: "R05_GOS_07",
    section: "Gospodarka i modernizacja",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Gdynia, magistrala węglowa, Centralny Okręg Przemysłowy, Zachęta.",
    options: null,
    answer: "Zachęta",
    explanation: "Gdynia, magistrala węglowa i COP to osiągnięcia gospodarcze, a Zachęta była galerią związaną z zamachem na Narutowicza."
  },
  {
    id: "R05_GOS_08",
    section: "Gospodarka i modernizacja",
    type: "scenario",
    prompt: "Władze wybierają rejon w widłach Wisły i Sanu, daleko od granic i z liczną siłą roboczą, aby budować zakłady przemysłu zbrojeniowego i chemicznego. Jak nazywa się to przedsięwzięcie?",
    options: ["Centralny Okręg Przemysłowy", "magistrala węglowa", "Bank Polski", "Wolne Miasto Gdańsk", "Korpus Ochrony Pogranicza"],
    answer: 0,
    image: "r05_cop_fabryka.jpg",
    explanation: "Centralny Okręg Przemysłowy zaplanowano w widłach Wisły i Sanu, z myślą o rozwoju przemysłu i bezpieczeństwie państwa."
  },
  {
    id: "R05_GOS_09",
    section: "Gospodarka i modernizacja",
    type: "sequence",
    prompt: "Ułóż wydarzenia gospodarcze w porządku chronologicznym.",
    options: null,
    items: ["początek wielkiego kryzysu", "wprowadzenie złotego polskiego", "decyzja o budowie COP", "rozpoczęcie prac przy porcie w Gdyni"],
    answer: ["rozpoczęcie prac przy porcie w Gdyni", "wprowadzenie złotego polskiego", "początek wielkiego kryzysu", "decyzja o budowie COP"],
    explanation: "Prace w Gdyni ruszyły w 1921 r., złoty wszedł w 1924 r., wielki kryzys rozpoczął się w 1929 r., a decyzję o COP podjęto w 1937 r."
  },
  {
    id: "R05_GOS_10",
    section: "Gospodarka i modernizacja",
    type: "match",
    prompt: "Połącz pojęcie z opisem.",
    options: null,
    left: ["hiperinflacja", "Bank Polski", "wojna celna", "Polska B"],
    right: ["słabiej rozwinięte województwa wschodnie i południowe", "gwałtowny wzrost cen", "instytucja powołana w 1924 r.", "spór gospodarczy z Niemcami"],
    answer: {
      "hiperinflacja": "gwałtowny wzrost cen",
      "Bank Polski": "instytucja powołana w 1924 r.",
      "wojna celna": "spór gospodarczy z Niemcami",
      "Polska B": "słabiej rozwinięte województwa wschodnie i południowe"
    },
    explanation: "Te pojęcia opisują najważniejsze problemy i reformy gospodarcze II Rzeczypospolitej."
  },
  {
    id: "R05_KUL_01",
    section: "Oświata, nauka i kultura",
    type: "single_choice",
    prompt: "Jaki odsetek mieszkańców Polski według spisu z 1921 r. stanowili analfabeci?",
    options: ["33%", "1,5%", "7,5%", "15%", "50%", "70%"],
    answer: 0,
    explanation: "Według spisu powszechnego z 1921 r. 33% mieszkańców Polski nie potrafiło czytać i pisać."
  },
  {
    id: "R05_KUL_02",
    section: "Oświata, nauka i kultura",
    type: "true_false",
    prompt: "Dekret o obowiązku szkolnym z 1919 r. dotyczył dzieci w wieku od 7 do 14 lat.",
    options: null,
    answer: true,
    explanation: "Dekret nakazywał dzieciom w tym wieku uczęszczanie do finansowanej przez państwo szkoły powszechnej."
  },
  {
    id: "R05_KUL_03",
    section: "Oświata, nauka i kultura",
    type: "fill_in",
    prompt: "Twórcą reformy szkolnej z 1932 r. był Janusz __________.",
    options: null,
    answer: ["Jędrzejewicz"],
    altAnswers: [["Jędrzejewicz", "Jedrzejewicz"]],
    explanation: "Reforma jędrzejewiczowska uporządkowała ustrój szkolny i utrzymała 7-letnią szkołę powszechną."
  },
  {
    id: "R05_KUL_04",
    section: "Oświata, nauka i kultura",
    type: "multi_select",
    prompt: "Zaznacz polskich matematyków wymienionych przy szkołach warszawskiej i lwowskiej.",
    options: ["Wacław Sierpiński", "Stefan Banach", "Hugo Steinhaus", "Rudolf Weigl", "Władysław Reymont", "Janusz Kusociński"],
    answer: [0, 1, 2],
    explanation: "Sierpiński, Banach i Steinhaus należeli do najwybitniejszych matematyków polskiego dwudziestolecia."
  },
  {
    id: "R05_KUL_05",
    section: "Oświata, nauka i kultura",
    type: "riddle",
    prompt: "Jak nazywała się niemiecka maszyna szyfrująca złamana przez polskich kryptologów?",
    options: null,
    answer: "Enigma",
    altAnswers: ["Enigma", "enigma"],
    image: "r05_lamacz_enigmy.jpg",
    explanation: "Marian Rejewski, Jerzy Różycki i Henryk Zygalski złamali szyfr Enigmy i umożliwili odczytywanie niemieckich depesz."
  },
  {
    id: "R05_KUL_06",
    section: "Oświata, nauka i kultura",
    type: "single_choice",
    prompt: "Za którą powieść Władysław Reymont otrzymał Literacką Nagrodę Nobla?",
    options: ["Chłopi", "Przedwiośnie", "Noce i dnie", "Dziady", "Sklepy cynamonowe", "Ferdydurke"],
    answer: 0,
    explanation: "Władysław Reymont otrzymał Literacką Nagrodę Nobla w 1924 r. za powieść Chłopi."
  },
  {
    id: "R05_KUL_07",
    section: "Oświata, nauka i kultura",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: radio, kino, kabaret, plebiscyt.",
    options: null,
    answer: "plebiscyt",
    explanation: "Radio, kino i kabaret należały do form kultury masowej, a plebiscyt był formą głosowania politycznego."
  },
  {
    id: "R05_KUL_08",
    section: "Oświata, nauka i kultura",
    type: "scenario",
    prompt: "Uczeń po sześciu klasach szkoły powszechnej zdaje egzaminy do czteroletniego gimnazjum, a potem może przejść do dwuletniego liceum. Z którą reformą wiąże się ten model?",
    options: ["reformą jędrzejewiczowską", "reformą Grabskiego", "konstytucją kwietniową", "paktem reńskim", "ustawą sierpniową"],
    answer: 0,
    explanation: "Reforma Jędrzejewicza z 1932 r. porządkowała system szkolny i wprowadzała nowy układ nauki."
  },
  {
    id: "R05_KUL_09",
    section: "Oświata, nauka i kultura",
    type: "sort",
    prompt: "Przyporządkuj postacie do dziedzin osiągnięć.",
    options: null,
    items: ["Rudolf Weigl", "Władysław Reymont", "Janusz Kusociński", "Halina Konopacka"],
    categories: ["nauka i medycyna", "literatura", "sport"],
    answer: {
      "nauka i medycyna": ["Rudolf Weigl"],
      "literatura": ["Władysław Reymont"],
      "sport": ["Janusz Kusociński", "Halina Konopacka"]
    },
    explanation: "Weigl stworzył szczepionkę przeciw tyfusowi, Reymont otrzymał Nobla, a Kusociński i Konopacka zdobywali olimpijskie złoto."
  },
  {
    id: "R05_KUL_10",
    section: "Oświata, nauka i kultura",
    type: "single_choice",
    prompt: "Która forma przekazu rozpoczęła regularne nadawanie w Polsce w kwietniu 1926 r.?",
    options: ["radio", "telewizja", "internet", "kino dźwiękowe", "prasa codzienna", "telegraf"],
    answer: 0,
    image: "r05_radio_i_kino.jpg",
    explanation: "Regularny program radiowy rozpoczął się w kwietniu 1926 r., po wzniesieniu masztu w podwarszawskim Raszynie."
  },
  {
    id: "R05_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Jaki odsetek głosów uzyskały partie prawicowe skupione w Chjenie w wyborach z 1922 r.?",
    options: ["28% mandatów do sejmu", "40% mandatów do sejmu", "60% głosów", "3,4% głosów", "75% mandatów", "46% mandatów"],
    answer: 0,
    explanation: "Chjena wygrała wybory, ale zdobyła tylko 28% mandatów do sejmu i nie mogła samodzielnie stworzyć rządu."
  },
  {
    id: "R05_HARD_02",
    section: "Super trudne",
    type: "true_false",
    prompt: "W plebiscycie na Warmii i Mazurach za Polską głosowało tylko 3,4% ludności.",
    options: null,
    answer: true,
    explanation: "Plebiscyt z 11 lipca 1920 r. zakończył się klęską Polski; za przynależnością do Polski głosowało tylko 3,4% ludności."
  },
  {
    id: "R05_HARD_03",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Konstytucję kwietniową prezydent Mościcki podpisał __________ kwietnia __________ r.",
    options: null,
    answer: ["23", "1935"],
    altAnswers: [["23", "dwudziestego trzeciego"], ["1935", "1935 roku"]],
    explanation: "Nową ustawę zasadniczą podpisano 23 kwietnia 1935 r.; stąd nazwa konstytucja kwietniowa."
  },
  {
    id: "R05_HARD_04",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz państwa będące sygnatariuszami protokołu moskiewskiego zwanego protokołem Litwinowa.",
    options: ["Polska", "ZSRS", "Łotwa", "Estonia", "Hiszpania", "Portugalia"],
    answer: [0, 1, 2, 3],
    explanation: "Wśród sygnatariuszy wymieniono Polskę, ZSRS, Łotwę, Estonię i Rumunię, a później także Litwę, Turcję i Persję."
  },
  {
    id: "R05_HARD_05",
    section: "Super trudne",
    type: "riddle",
    prompt: "Jak nazywała się miejscowość w Szwajcarii, gdzie w 1936 r. powstało porozumienie opozycyjnych polityków centrowych?",
    options: null,
    answer: "Morges",
    altAnswers: ["Morges", "morges"],
    explanation: "Front Morges powstał w 1936 r. w szwajcarskiej miejscowości, w której mieszkał Ignacy Paderewski."
  },
  {
    id: "R05_HARD_06",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Jaki procent kopalń i hut oraz odlewni żelaza na obszarze plebiscytowym Górnego Śląska przypadł Polsce według decyzji Ligi Narodów?",
    options: ["75% kopalń i 59% hut oraz odlewni", "29% kopalń i 46% hut oraz odlewni", "60% kopalń i 40% hut oraz odlewni", "3,4% kopalń i 11% hut oraz odlewni", "100% kopalń i 100% hut oraz odlewni"],
    answer: 0,
    explanation: "Polska otrzymała 29% terytorium plebiscytowego, ale znajdowało się na nim 75% kopalń oraz 59% hut i odlewni żelaza."
  },
  {
    id: "R05_HARD_07",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz układ lub dokument z rokiem.",
    options: null,
    left: ["sojusz polsko-francuski", "protokół Litwinowa", "pakt o nieagresji Polska-ZSRS", "deklaracja Polska-Niemcy"],
    right: ["1921", "1929", "1932", "1934"],
    answer: {
      "sojusz polsko-francuski": "1921",
      "protokół Litwinowa": "1929",
      "pakt o nieagresji Polska-ZSRS": "1932",
      "deklaracja Polska-Niemcy": "1934"
    },
    explanation: "Te daty pokazują etapy polskiej polityki równowagi i poszukiwania bezpieczeństwa między sąsiadami."
  },
  {
    id: "R05_HARD_08",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż wydarzenia polityki zagranicznej w porządku chronologicznym.",
    options: null,
    items: ["pakt Ribbentrop-Mołotow", "deklaracja o niestosowaniu przemocy z Niemcami", "pakt o nieagresji z ZSRS", "zajęcie Zaolzia przez Polskę"],
    answer: ["pakt o nieagresji z ZSRS", "deklaracja o niestosowaniu przemocy z Niemcami", "zajęcie Zaolzia przez Polskę", "pakt Ribbentrop-Mołotow"],
    explanation: "Pakt z ZSRS podpisano w 1932 r., deklarację z Niemcami w 1934 r., Zaolzie zajęto w 1938 r., a pakt Ribbentrop-Mołotow podpisano 23 sierpnia 1939 r."
  },
  {
    id: "R05_HARD_09",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Narew, Wisła, San, Odra.",
    options: null,
    answer: "Odra",
    explanation: "W tajnym protokole do paktu Ribbentrop-Mołotow rozgraniczenie stref interesów w Polsce miało przebiegać w przybliżeniu linią Narew-Wisła-San."
  },
  {
    id: "R05_HARD_10",
    section: "Super trudne",
    type: "scenario",
    prompt: "W 1934 r. polski minister spraw zagranicznych jako pierwszy europejski minister tego szczebla składa wizytę w Moskwie, a pakt z ZSRS zostaje przedłużony o dziesięć lat. Kto był tym ministrem?",
    options: ["Józef Beck", "August Zaleski", "Ignacy Mościcki", "Józef Piłsudski", "Władysław Sikorski"],
    answer: 0,
    explanation: "Józef Beck odwiedził Moskwę w 1934 r. i odpowiadał za politykę zagraniczną Polski w końcowym okresie dwudziestolecia."
  },
  {
    id: "R05_HARD_11",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz polskich kryptologów, którzy złamali szyfr Enigmy.",
    options: ["Marian Rejewski", "Jerzy Różycki", "Henryk Zygalski", "Hugo Steinhaus", "Wacław Sierpiński", "Rudolf Weigl"],
    answer: [0, 1, 2],
    explanation: "Tajny zespół kryptologów tworzyli Marian Rejewski, Jerzy Różycki i Henryk Zygalski."
  },
  {
    id: "R05_HARD_12",
    section: "Super trudne",
    type: "true_false",
    prompt: "Polska odrzuciła w 1938 r. czechosłowacką propozycję połączenia sił i wspólnej obrony przeciw Niemcom.",
    options: null,
    answer: true,
    explanation: "Po zajęciu Zaolzia Polska odrzuciła propozycję wspólnej obrony, co pogorszyło jej wizerunek międzynarodowy."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r05",
  number: 5,
  title: "Polska w dwudziestoleciu międzywojennym",
  icon: "🇵🇱",
  sectionOrder: [
    "Granice i polityka zagraniczna",
    "Konstytucja marcowa i republika",
    "Sanacja i konstytucja kwietniowa",
    "Społeczeństwo wielonarodowe",
    "Gospodarka i modernizacja",
    "Oświata, nauka i kultura"
  ],
  sectionIcons: {
    "Granice i polityka zagraniczna": "🗺️",
    "Konstytucja marcowa i republika": "🏛️",
    "Sanacja i konstytucja kwietniowa": "⚖️",
    "Społeczeństwo wielonarodowe": "👥",
    "Gospodarka i modernizacja": "🏭",
    "Oświata, nauka i kultura": "📚"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
