// Skróty sekcji (do identyfikatorów ćwiczeń):
//   USL  = Rola usług w gospodarce Polski
//   TRA  = Transport i łączność
//   LOK  = Wpływ sieci transportowej na lokalizację przedsiębiorstw
//   MOR  = Możliwości rozwoju polskiej gospodarki morskiej
//   WAL  = Walory turystyczne Polski
//   TUR  = Turystyka nad Bałtykiem i w Małopolsce
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R06_USL_01",
    "section": "Rola usług w gospodarce Polski",
    "type": "single_choice",
    "prompt": "Które stwierdzenie najlepiej opisuje usługę?",
    "options": [
      "Czynność wykonywana na rzecz innej osoby lub grupy osób",
      "Wyłącznie wytwarzanie dóbr materialnych w fabryce",
      "Tylko sprzedaż produktów rolnych",
      "Każde wydobycie surowców mineralnych",
      "Wyłącznie praca wykonywana przez urząd państwowy",
      "Tylko działalność prowadzona przez internet"
    ],
    "image": "r06_uslugi_zawody.jpg",
    "answer": 0,
    "explanation": "Usługa jest czynnością wykonywaną przez osobę lub grupę osób, na przykład firmę, na rzecz innej osoby lub grupy osób."
  },
  {
    "id": "R06_USL_02",
    "section": "Rola usług w gospodarce Polski",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady usług o charakterze niematerialnym.",
    "options": [
      "porada lekarska",
      "usługa edukacyjna",
      "wykonanie stołu przez stolarza",
      "napisanie programu komputerowego",
      "nowa fryzura",
      "danie podane w restauracji"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Do usług niematerialnych należą między innymi porada lekarska, usługa edukacyjna i napisanie programu komputerowego."
  },
  {
    "id": "R06_USL_03",
    "section": "Rola usług w gospodarce Polski",
    "type": "true_false",
    "prompt": "Firmy zaliczane do czwartego sektora gospodarki wykorzystują zaawansowaną wiedzę i nowoczesne technologie.",
    "options": null,
    "answer": true,
    "explanation": "Do czwartego sektora zaliczono między innymi usługi marketingowe, ubezpieczeniowe, bankowe i informatyczne, których cechą jest duże wykorzystanie wiedzy i technologii."
  },
  {
    "id": "R06_USL_04",
    "section": "Rola usług w gospodarce Polski",
    "type": "fill_in",
    "prompt": "Dodatkową wartość uzyskiwaną dzięki przetwarzaniu surowców i wykonywaniu prac nazywa się wartością __________.",
    "options": null,
    "altAnswers": [
      [
        "dodaną",
        "dodana"
      ]
    ],
    "answer": [
      "dodaną"
    ],
    "explanation": "Wartość dodana to dodatkowa wartość powstająca w wyniku działalności gospodarczej."
  },
  {
    "id": "R06_USL_05",
    "section": "Rola usług w gospodarce Polski",
    "type": "match",
    "prompt": "Połącz przykład z właściwym opisem.",
    "options": null,
    "left": [
      "porada prawnicza",
      "nowa fryzura",
      "bankowość",
      "sprzedaż suszarki w sklepie"
    ],
    "right": [
      "przykład czwartego sektora",
      "udostępnienie produktu konsumentowi",
      "usługa niematerialna",
      "usługa materialna"
    ],
    "answer": {
      "porada prawnicza": "usługa niematerialna",
      "nowa fryzura": "usługa materialna",
      "bankowość": "przykład czwartego sektora",
      "sprzedaż suszarki w sklepie": "udostępnienie produktu konsumentowi"
    },
    "explanation": "Usługi mogą mieć charakter materialny i niematerialny, a część nowoczesnych usług zalicza się do czwartego sektora. Handel udostępnia konsumentom wytwory przemysłu."
  },
  {
    "id": "R06_USL_06",
    "section": "Rola usług w gospodarce Polski",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: porada prawnicza, usługa edukacyjna, napisanie programu komputerowego, produkcja stali.",
    "options": null,
    "answer": "produkcja stali",
    "explanation": "Porada prawnicza, edukacja i napisanie programu komputerowego są przykładami usług; produkcja stali należy do działalności przemysłowej."
  },
  {
    "id": "R06_USL_07",
    "section": "Rola usług w gospodarce Polski",
    "type": "scenario",
    "prompt": "Chcesz kupić nową suszarkę do włosów. Nie jedziesz do fabryki, tylko zamawiasz ją w sklepie internetowym. Z jakiego rodzaju działalności korzystasz, aby produkt przemysłowy trafił do ciebie?",
    "options": [
      "rolnictwa",
      "wydobycia surowców",
      "handlu",
      "hutnictwa",
      "budownictwa",
      "energetyki"
    ],
    "answer": 2,
    "explanation": "Udostępnienie produktów klientom, w tym ich sprzedaż w sklepie stacjonarnym lub internetowym, jest działalnością usługową."
  },
  {
    "id": "R06_USL_08",
    "section": "Rola usług w gospodarce Polski",
    "type": "single_choice",
    "prompt": "Który sektor wytwarza największą część wartości dodanej w polskiej gospodarce?",
    "options": [
      "rolnictwo",
      "przemysł wydobywczy",
      "budownictwo",
      "usługi",
      "rybołówstwo",
      "leśnictwo"
    ],
    "answer": 3,
    "explanation": "Usługi odpowiadają za największą część wartości dodanej w polskiej gospodarce."
  },
  {
    "id": "R06_USL_09",
    "section": "Rola usług w gospodarce Polski",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do rodzaju usługi.",
    "options": null,
    "items": [
      "porada lekarska",
      "wykonanie stołu przez stolarza",
      "napisanie programu komputerowego",
      "nowa fryzura"
    ],
    "categories": [
      "materialna",
      "niematerialna"
    ],
    "answer": {
      "materialna": [
        "wykonanie stołu przez stolarza",
        "nowa fryzura"
      ],
      "niematerialna": [
        "porada lekarska",
        "napisanie programu komputerowego"
      ]
    },
    "explanation": "Usługi materialne dają rezultat mający materialną postać, a niematerialne obejmują między innymi poradę czy wykonanie programu."
  },
  {
    "id": "R06_USL_10",
    "section": "Rola usług w gospodarce Polski",
    "type": "riddle",
    "prompt": "Jak nazywa się część gospodarki obejmująca między innymi zaawansowane usługi marketingowe, ubezpieczeniowe, bankowe i informatyczne?",
    "options": null,
    "altAnswers": [
      "czwarty sektor gospodarki",
      "czwarty sektor",
      "IV sektor gospodarki"
    ],
    "image": "r06_uslugi_zawody.jpg",
    "answer": "czwarty sektor gospodarki",
    "explanation": "Czwarty sektor gospodarki obejmuje usługi o dużym zaangażowaniu nowoczesnych technologii i zaawansowanej wiedzy."
  },
  {
    "id": "R06_TRA_01",
    "section": "Transport i łączność",
    "type": "single_choice",
    "prompt": "Jakie dwa elementy tworzą komunikację jako dział usług?",
    "options": [
      "handel i turystyka",
      "transport i łączność",
      "rolnictwo i przemysł",
      "bankowość i edukacja",
      "budownictwo i energetyka",
      "rybołówstwo i leśnictwo"
    ],
    "image": "r06_transport_rodzaje.jpg",
    "answer": 1,
    "explanation": "Komunikację tworzą transport i łączność. Odpowiadają za przemieszczanie ludzi i towarów oraz przekazywanie informacji."
  },
  {
    "id": "R06_TRA_02",
    "section": "Transport i łączność",
    "type": "match",
    "prompt": "Połącz rodzaj transportu z charakterystycznym środkiem transportu.",
    "options": null,
    "left": [
      "kolejowy",
      "przesyłowy",
      "morski",
      "lotniczy"
    ],
    "right": [
      "samolot",
      "statek",
      "rurociąg",
      "pociąg"
    ],
    "image": "r06_transport_rodzaje.jpg",
    "answer": {
      "kolejowy": "pociąg",
      "przesyłowy": "rurociąg",
      "morski": "statek",
      "lotniczy": "samolot"
    },
    "explanation": "Z poszczególnymi rodzajami transportu wiążą się typowe środki: pociąg, rurociąg, statek i samolot."
  },
  {
    "id": "R06_TRA_03",
    "section": "Transport i łączność",
    "type": "multi_select",
    "prompt": "Zaznacz skutki i zastosowania transportu kolejowego.",
    "options": [
      "przewóz ciężkich ładunków",
      "przewóz kontenerów",
      "dostawa towaru bezpośrednio od drzwi do drzwi bez przeładunku",
      "szybki dojazd do centrów dużych miast",
      "brak zanieczyszczania powietrza przy trasie przez pociągi elektryczne",
      "przewóz ropy wyłącznie tankowcami"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Kolej przewozi ciężkie ładunki, rośnie jej znaczenie w przewozie kontenerów, może skracać czas dojazdu do centrów miast, a pociągi elektryczne nie zanieczyszczają powietrza w pobliżu trasy."
  },
  {
    "id": "R06_TRA_04",
    "section": "Transport i łączność",
    "type": "scenario",
    "prompt": "Firma chce przewieźć towar bezpośrednio z własnego magazynu do sklepu klienta, bez konieczności dowożenia go do stacji lub portu. Który rodzaj transportu najlepiej spełnia tę potrzebę?",
    "options": [
      "samochodowy",
      "morski",
      "lotniczy",
      "kolejowy",
      "przesyłowy",
      "śródlądowy"
    ],
    "answer": 0,
    "explanation": "Transport samochodowy umożliwia dostarczanie towarów od drzwi do drzwi, czyli bezpośrednio między przedsiębiorstwami lub do klienta."
  },
  {
    "id": "R06_TRA_05",
    "section": "Transport i łączność",
    "type": "true_false",
    "prompt": "Pociągi o napędzie elektrycznym nie zanieczyszczają powietrza w pobliżu swoich tras.",
    "options": null,
    "answer": true,
    "explanation": "Pociągi elektryczne nie emitują zanieczyszczeń powietrza w pobliżu trasy, a nowoczesne składy emitują także mniej hałasu."
  },
  {
    "id": "R06_TRA_06",
    "section": "Transport i łączność",
    "type": "fill_in",
    "prompt": "Część komunikacji służąca do przesyłania informacji to __________.",
    "options": null,
    "altAnswers": [
      [
        "łączność",
        "lacznosc"
      ]
    ],
    "answer": [
      "łączność"
    ],
    "explanation": "Łączność obejmuje sposoby przekazywania informacji, takie jak telefon, internet, poczta, telewizja i radiofonia."
  },
  {
    "id": "R06_TRA_07",
    "section": "Transport i łączność",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych rodzajów transportu: samochodowy, kolejowy, morski, bankowy.",
    "options": null,
    "answer": "bankowy",
    "explanation": "Samochodowy, kolejowy i morski są rodzajami transportu. Bankowość jest usługą, ale nie rodzajem transportu."
  },
  {
    "id": "R06_TRA_08",
    "section": "Transport i łączność",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do transportu albo łączności.",
    "options": null,
    "items": [
      "telefon komórkowy",
      "pociąg",
      "internet",
      "samolot"
    ],
    "categories": [
      "transport",
      "łączność"
    ],
    "answer": {
      "transport": [
        "pociąg",
        "samolot"
      ],
      "łączność": [
        "telefon komórkowy",
        "internet"
      ]
    },
    "explanation": "Transport służy przemieszczaniu osób i rzeczy, a łączność przesyłaniu informacji."
  },
  {
    "id": "R06_TRA_09",
    "section": "Transport i łączność",
    "type": "riddle",
    "prompt": "Jak nazywa się część komunikacji, dzięki której prowadzimy rozmowę telefoniczną, wysyłamy e-mail lub korzystamy z mediów społecznościowych?",
    "options": null,
    "altAnswers": [
      "łączność",
      "lacznosc"
    ],
    "answer": "łączność",
    "explanation": "Łączność umożliwia przesyłanie informacji za pomocą różnych technologii i środków."
  },
  {
    "id": "R06_TRA_10",
    "section": "Transport i łączność",
    "type": "single_choice",
    "prompt": "Która cecha transportu morskiego ułatwia sprowadzanie do Polski dużych ilości towarów z innych kontynentów?",
    "options": [
      "możliwość dotarcia do każdego domu",
      "brak konieczności korzystania z portów",
      "najkrótszy czas przewozu na każdej trasie",
      "przewóz tylko osób",
      "niski koszt w przeliczeniu na jednostkę masy ładunku",
      "działanie wyłącznie na obszarze Polski"
    ],
    "answer": 4,
    "explanation": "Transport morski ma niewielki koszt w przeliczeniu na jednostkę masy ładunku, dlatego nadaje się do przewozu dużych ilości towarów na dalekie odległości."
  },
  {
    "id": "R06_LOK_01",
    "section": "Wpływ sieci transportowej na lokalizację przedsiębiorstw",
    "type": "single_choice",
    "prompt": "Dlaczego bliskość autostrad i dróg ekspresowych sprzyja lokalizacji przedsiębiorstw?",
    "options": [
      "zawsze obniża podatki",
      "eliminuje potrzebę magazynów",
      "umożliwia szybszy, tańszy i bezpieczniejszy transport",
      "zapewnia dostęp wyłącznie do transportu morskiego",
      "uniemożliwia powstawanie centrów handlowych",
      "ogranicza liczbę klientów"
    ],
    "image": "r06_bielany_wroclawskie_infrastruktura.jpg",
    "answer": 2,
    "explanation": "Dobra infrastruktura drogowa ułatwia szybszy, tańszy i bezpieczniejszy transport surowców, produktów, pracowników i klientów."
  },
  {
    "id": "R06_LOK_02",
    "section": "Wpływ sieci transportowej na lokalizację przedsiębiorstw",
    "type": "true_false",
    "prompt": "W pobliżu Bielan Wrocławskich rozwinęły się między innymi magazyny, fabryki i centra handlowe.",
    "options": null,
    "image": "r06_bielany_wroclawskie_infrastruktura.jpg",
    "answer": true,
    "explanation": "Dobre połączenia drogowe w rejonie Wrocławia sprzyjały lokalizacji nowych magazynów, fabryk i obiektów handlowych."
  },
  {
    "id": "R06_LOK_03",
    "section": "Wpływ sieci transportowej na lokalizację przedsiębiorstw",
    "type": "scenario",
    "prompt": "Przedsiębiorca wybiera miejsce dla dużego centrum logistycznego. Zależy mu na szybkim dowozie i wywozie towarów ciężarówkami. Która lokalizacja najlepiej spełnia te wymagania?",
    "options": [
      "z dala od wszystkich dróg",
      "w pobliżu ważnego węzła drogowego",
      "wyłącznie w centrum parku narodowego",
      "na terenie bez dojazdu samochodowego",
      "na obszarze odciętym od klientów",
      "wyłącznie przy lotnisku bez dróg"
    ],
    "answer": 1,
    "explanation": "Centra logistyczne chętnie lokalizują się w pobliżu autostrad, dróg ekspresowych i ważnych węzłów, ponieważ sprawny transport ułatwia obsługę towarów."
  },
  {
    "id": "R06_LOK_04",
    "section": "Wpływ sieci transportowej na lokalizację przedsiębiorstw",
    "type": "fill_in",
    "prompt": "Duży magazyn, w którym różne firmy mogą przechowywać swoje towary, to centrum __________.",
    "options": null,
    "altAnswers": [
      [
        "logistyczne",
        "logistycznym"
      ]
    ],
    "answer": [
      "logistyczne"
    ],
    "explanation": "Centrum logistyczne to duży obiekt magazynowy związany z przyjmowaniem, przechowywaniem, rozdziałem i wydawaniem towarów."
  },
  {
    "id": "R06_LOK_05",
    "section": "Wpływ sieci transportowej na lokalizację przedsiębiorstw",
    "type": "match",
    "prompt": "Połącz element infrastruktury portowej z jego funkcją.",
    "options": null,
    "left": [
      "suwnice",
      "linia kolejowa",
      "terminal kontenerowy",
      "centrum logistyczne"
    ],
    "right": [
      "obsługa statków przewożących kontenery",
      "magazynowanie i rozdział towarów",
      "dowóz i wywóz kontenerów pociągami",
      "przeładunek, załadunek i rozładunek towarów"
    ],
    "image": "r06_port_gdansk_kontenery.jpg",
    "answer": {
      "suwnice": "przeładunek, załadunek i rozładunek towarów",
      "linia kolejowa": "dowóz i wywóz kontenerów pociągami",
      "terminal kontenerowy": "obsługa statków przewożących kontenery",
      "centrum logistyczne": "magazynowanie i rozdział towarów"
    },
    "explanation": "Nowoczesny port łączy infrastrukturę przeładunkową, kolejową i magazynową, dzięki czemu sprawnie obsługuje przepływ towarów."
  },
  {
    "id": "R06_LOK_06",
    "section": "Wpływ sieci transportowej na lokalizację przedsiębiorstw",
    "type": "multi_select",
    "prompt": "Jakie korzyści może dawać zakładowi przemysłowemu położenie nieopodal portu morskiego?",
    "options": [
      "łatwiejszy dostęp do importowanych surowców",
      "całkowity brak potrzeby transportu lądowego",
      "możliwość taniego eksportu produktów drogą morską",
      "automatyczne zwolnienie z ceł",
      "brak konieczności magazynowania",
      "wyłącznie dostęp do ruchu pasażerskiego"
    ],
    "image": "r06_port_gdansk_kontenery.jpg",
    "answer": [
      0,
      2
    ],
    "explanation": "Bliskość portu ułatwia dostęp do importowanych surowców oraz pozwala korzystać z taniego transportu morskiego przy eksporcie produktów."
  },
  {
    "id": "R06_LOK_07",
    "section": "Wpływ sieci transportowej na lokalizację przedsiębiorstw",
    "type": "odd_one_out",
    "prompt": "Wskaż środek transportu, który nie należy do trzech rodzajów szlaków spotykających się w Porcie Gdańsk: morski, samochodowy, kolejowy, lotniczy.",
    "options": null,
    "answer": "lotniczy",
    "explanation": "W Porcie Gdańsk spotykają się szlaki morskie, samochodowe i kolejowe."
  },
  {
    "id": "R06_LOK_08",
    "section": "Wpływ sieci transportowej na lokalizację przedsiębiorstw",
    "type": "true_false",
    "prompt": "Terminal kontenerowy w Porcie Gdańsk zmodernizowano w 2011 roku tak, aby mógł przyjmować największe statki pływające po Bałtyku.",
    "options": null,
    "image": "r06_port_gdansk_kontenery.jpg",
    "answer": true,
    "explanation": "Modernizacja terminalu kontenerowego w 2011 roku umożliwiła obsługę największych statków pływających po Bałtyku."
  },
  {
    "id": "R06_LOK_09",
    "section": "Wpływ sieci transportowej na lokalizację przedsiębiorstw",
    "type": "sequence",
    "prompt": "Ułóż etapy transportu kontenerów z chińskiego Xi'an do dalszych odbiorców w Europie w 2021 roku.",
    "options": null,
    "items": [
      "dalszy transport morski do Skandynawii i Wielkiej Brytanii",
      "dotarcie do portu w Gdyni",
      "wyjazd pociągu z Xi'an",
      "przejazd koleją do Polski"
    ],
    "answer": [
      "wyjazd pociągu z Xi'an",
      "przejazd koleją do Polski",
      "dotarcie do portu w Gdyni",
      "dalszy transport morski do Skandynawii i Wielkiej Brytanii"
    ],
    "explanation": "W grudniu 2021 roku pociąg z Xi'an przywiózł 44 kontenery do portu w Gdyni, skąd popłynęły dalej do Skandynawii i Wielkiej Brytanii."
  },
  {
    "id": "R06_LOK_10",
    "section": "Wpływ sieci transportowej na lokalizację przedsiębiorstw",
    "type": "riddle",
    "prompt": "Jak nazywa się obiekt będący bezpośrednim zapleczem Portu Gdańsk i położony tuż obok terminalu kontenerowego?",
    "options": null,
    "altAnswers": [
      "Pomorskie Centrum Logistyczne",
      "centrum logistyczne"
    ],
    "image": "r06_port_gdansk_kontenery.jpg",
    "answer": "Pomorskie Centrum Logistyczne",
    "explanation": "Pomorskie Centrum Logistyczne leży obok terminalu kontenerowego Portu Gdańsk i wspiera obsługę oraz magazynowanie towarów."
  },
  {
    "id": "R06_MOR_01",
    "section": "Możliwości rozwoju polskiej gospodarki morskiej",
    "type": "single_choice",
    "prompt": "Który zestaw obejmuje porty o największym znaczeniu dla gospodarki Polski?",
    "options": [
      "Gdańsk, Gdynia, Szczecin, Świnoujście, Police",
      "Gdańsk, Hel, Łeba, Sopot, Ustka",
      "Gdynia, Elbląg, Zakopane, Police, Łódź",
      "Szczecin, Poznań, Wrocław, Gdynia, Police",
      "Gdańsk, Toruń, Kraków, Świnoujście, Police",
      "Kołobrzeg, Mielno, Rewal, Ustka, Łeba"
    ],
    "image": "r06_terminal_lng_swinoujscie.jpg",
    "answer": 0,
    "explanation": "Do portów o największym znaczeniu zaliczono Gdańsk, Gdynię, Szczecin, Świnoujście i Police."
  },
  {
    "id": "R06_MOR_02",
    "section": "Możliwości rozwoju polskiej gospodarki morskiej",
    "type": "multi_select",
    "prompt": "Zaznacz towary o strategicznym znaczeniu, które mogą docierać do Polski przez porty morskie.",
    "options": [
      "skroplony gaz ziemny",
      "ropa naftowa",
      "węgiel kamienny",
      "meble szkolne",
      "rudy metali",
      "fosforyty"
    ],
    "answer": [
      0,
      1,
      2,
      4,
      5
    ],
    "explanation": "Przez porty docierają między innymi skroplony gaz ziemny, ropa naftowa, węgiel kamienny, rudy metali i fosforyty potrzebne do produkcji nawozów."
  },
  {
    "id": "R06_MOR_03",
    "section": "Możliwości rozwoju polskiej gospodarki morskiej",
    "type": "true_false",
    "prompt": "Transport kontenerowy jest ważny w handlu światowym między innymi dzięki uniwersalności i łatwości przenoszenia ładunku między statkiem, pociągiem i samochodem.",
    "options": null,
    "answer": true,
    "explanation": "Kontenery można łatwo przeładowywać między różnymi środkami transportu, co oszczędza czas i zmniejsza ryzyko uszkodzenia towaru."
  },
  {
    "id": "R06_MOR_04",
    "section": "Możliwości rozwoju polskiej gospodarki morskiej",
    "type": "fill_in",
    "prompt": "W Polsce transport rzeczny jest obecnie wykorzystywany na __________ skalę.",
    "options": null,
    "altAnswers": [
      [
        "znikomą",
        "znikoma"
      ]
    ],
    "answer": [
      "znikomą"
    ],
    "explanation": "Żegluga śródlądowa ma w Polsce niewielkie znaczenie, choć w innych państwach może odpowiadać za dużą część przewozów towarowych."
  },
  {
    "id": "R06_MOR_05",
    "section": "Możliwości rozwoju polskiej gospodarki morskiej",
    "type": "single_choice",
    "prompt": "Co jest jedną ze współczesnych specjalności polskich zakładów stoczniowych?",
    "options": [
      "wyłącznie budowa drewnianych łodzi",
      "wydobycie węgla",
      "hodowla ryb",
      "remonty statków i produkcja wyposażenia",
      "produkcja nawozów",
      "obsługa lotnisk"
    ],
    "answer": 3,
    "explanation": "Po osłabieniu produkcji statków specjalnością części polskich stoczni stały się remonty statków i produkcja wyposażenia."
  },
  {
    "id": "R06_MOR_06",
    "section": "Możliwości rozwoju polskiej gospodarki morskiej",
    "type": "match",
    "prompt": "Połącz dziedzinę gospodarki morskiej z opisem.",
    "options": null,
    "left": [
      "rybołówstwo dalekomorskie",
      "przetwórstwo ryb i owoców morza",
      "przemysł stoczniowy",
      "energetyka morska"
    ],
    "right": [
      "specjalizuje się między innymi w remontach statków",
      "ma rozwijać farmy wiatrowe w polskiej strefie ekonomicznej",
      "ma obecnie niewielkie znaczenie",
      "korzysta głównie z surowca pochodzącego z importu"
    ],
    "image": "r06_farma_wiatrowa_baltyk.jpg",
    "answer": {
      "rybołówstwo dalekomorskie": "ma obecnie niewielkie znaczenie",
      "przetwórstwo ryb i owoców morza": "korzysta głównie z surowca pochodzącego z importu",
      "przemysł stoczniowy": "specjalizuje się między innymi w remontach statków",
      "energetyka morska": "ma rozwijać farmy wiatrowe w polskiej strefie ekonomicznej"
    },
    "explanation": "Poszczególne dziedziny gospodarki morskiej rozwijają się różnie: część tradycyjnych branż osłabła, a znaczenie przetwórstwa i energetyki może rosnąć."
  },
  {
    "id": "R06_MOR_07",
    "section": "Możliwości rozwoju polskiej gospodarki morskiej",
    "type": "scenario",
    "prompt": "Zakład w Polsce przetwarza łososie sprowadzone z hodowli u wybrzeży Norwegii, pakuje je i sprzedaje na rynkach europejskich. Która dziedzina gospodarki morskiej jest tu najważniejsza?",
    "options": [
      "żegluga pasażerska",
      "budowa autostrad",
      "rolnictwo",
      "wydobycie fosforytów",
      "przetwórstwo ryb i owoców morza",
      "transport lotniczy"
    ],
    "answer": 4,
    "explanation": "Polskie przetwórstwo ryb i owoców morza wykorzystuje w dużej mierze surowiec importowany, na przykład łososie z Norwegii."
  },
  {
    "id": "R06_MOR_08",
    "section": "Możliwości rozwoju polskiej gospodarki morskiej",
    "type": "odd_one_out",
    "prompt": "Wskaż miejscowość, która nie należy do portów o największym znaczeniu dla gospodarki Polski: Gdańsk, Gdynia, Szczecin, Świnoujście, Zakopane.",
    "options": null,
    "answer": "Zakopane",
    "explanation": "Zakopane nie jest portem morskim. Gdańsk, Gdynia, Szczecin i Świnoujście należą do najważniejszych polskich portów."
  },
  {
    "id": "R06_MOR_09",
    "section": "Możliwości rozwoju polskiej gospodarki morskiej",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do dziedzin gospodarki morskiej.",
    "options": null,
    "items": [
      "morska farma wiatrowa",
      "pakowanie importowanego łososia",
      "przeładunek kontenerów",
      "remont platformy wiertniczej"
    ],
    "categories": [
      "transport morski",
      "przemysł stoczniowy",
      "energetyka",
      "przetwórstwo ryb"
    ],
    "answer": {
      "transport morski": [
        "przeładunek kontenerów"
      ],
      "przemysł stoczniowy": [
        "remont platformy wiertniczej"
      ],
      "energetyka": [
        "morska farma wiatrowa"
      ],
      "przetwórstwo ryb": [
        "pakowanie importowanego łososia"
      ]
    },
    "explanation": "Gospodarka morska obejmuje wiele działalności: transport, stocznie, energetykę oraz przetwórstwo ryb i owoców morza."
  },
  {
    "id": "R06_MOR_10",
    "section": "Możliwości rozwoju polskiej gospodarki morskiej",
    "type": "riddle",
    "prompt": "Jak nazywa się obszar morski, w którym Polska ma prawo wykorzystywać zasoby przyrodnicze, na przykład surowce z dna, energię wiatru i ryby?",
    "options": null,
    "altAnswers": [
      "Wyłączna Strefa Ekonomiczna",
      "wyłączna strefa ekonomiczna",
      "WSE"
    ],
    "image": "r06_farma_wiatrowa_baltyk.jpg",
    "answer": "Wyłączna Strefa Ekonomiczna",
    "explanation": "W polskiej Wyłącznej Strefie Ekonomicznej państwo może wykorzystywać zasoby przyrodnicze i rozwijać między innymi energetykę wiatrową."
  },
  {
    "id": "R06_WAL_01",
    "section": "Walory turystyczne Polski",
    "type": "single_choice",
    "prompt": "Na jakie dwie główne grupy dzielą się walory turystyczne Polski?",
    "options": [
      "morskie i lotnicze",
      "miejskie i wiejskie",
      "przyrodnicze i kulturowe",
      "krajowe i zagraniczne",
      "publiczne i prywatne",
      "materialne i finansowe"
    ],
    "image": "r06_walory_turystyczne_polski.jpg",
    "answer": 2,
    "explanation": "Walory turystyczne mogą mieć charakter przyrodniczy albo kulturowy."
  },
  {
    "id": "R06_WAL_02",
    "section": "Walory turystyczne Polski",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady przyrodniczych walorów turystycznych.",
    "options": [
      "parki narodowe i krajobrazowe",
      "różnorodne krajobrazy",
      "chronione gatunki zwierząt",
      "muzea historyczne",
      "duże kompleksy leśne",
      "ciekawe formacje skalne"
    ],
    "answer": [
      0,
      1,
      2,
      4,
      5
    ],
    "explanation": "Do walorów przyrodniczych należą między innymi parki, różnorodne krajobrazy, chronione zwierzęta, kompleksy leśne i ciekawe formacje skalne."
  },
  {
    "id": "R06_WAL_03",
    "section": "Walory turystyczne Polski",
    "type": "true_false",
    "prompt": "Region oferujący różnorodne walory turystyczne może przyciągać wielu odwiedzających i stać się regionem turystycznym.",
    "options": null,
    "answer": true,
    "explanation": "Różni turyści mają odmienne oczekiwania, dlatego regiony łączące rozmaite walory są atrakcyjne dla większej liczby osób."
  },
  {
    "id": "R06_WAL_04",
    "section": "Walory turystyczne Polski",
    "type": "fill_in",
    "prompt": "W 2022 roku na liście światowego dziedzictwa UNESCO znajdowało się w Polsce __________ obiektów.",
    "options": null,
    "altAnswers": [
      [
        "17",
        "siedemnaście"
      ]
    ],
    "answer": [
      "17"
    ],
    "explanation": "W 2022 roku Polska miała 17 obiektów wpisanych na listę światowego dziedzictwa UNESCO."
  },
  {
    "id": "R06_WAL_05",
    "section": "Walory turystyczne Polski",
    "type": "match",
    "prompt": "Połącz formę aktywnego wypoczynku z miejscem, gdzie są do niej dobre warunki.",
    "options": null,
    "left": [
      "windsurfing",
      "żeglarstwo",
      "wspinaczka",
      "turystyka piesza"
    ],
    "right": [
      "Karpaty i Sudety",
      "Kraina Wielkich Jezior Mazurskich",
      "Zatoka Pucka",
      "Wyżyna Krakowsko-Częstochowska"
    ],
    "image": "r06_zatoka_pucka_windsurfing.jpg",
    "answer": {
      "windsurfing": "Zatoka Pucka",
      "żeglarstwo": "Kraina Wielkich Jezior Mazurskich",
      "wspinaczka": "Wyżyna Krakowsko-Częstochowska",
      "turystyka piesza": "Karpaty i Sudety"
    },
    "explanation": "Polskie walory przyrodnicze umożliwiają różne formy aktywnego wypoczynku, od sportów wodnych po wspinaczkę i wędrówki."
  },
  {
    "id": "R06_WAL_06",
    "section": "Walory turystyczne Polski",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest przykładem waloru kulturowego: Muzeum II Wojny Światowej, Zamek Ogrodzieniec, Wilczy Szaniec, Puszcza Piska.",
    "options": null,
    "image": "r06_zamek_ogrodzieniec.jpg",
    "answer": "Puszcza Piska",
    "explanation": "Puszcza Piska jest dużym kompleksem leśnym, czyli walorem przyrodniczym. Pozostałe przykłady są związane z dziedzictwem kulturowym."
  },
  {
    "id": "R06_WAL_07",
    "section": "Walory turystyczne Polski",
    "type": "scenario",
    "prompt": "Turysta chce przede wszystkim poznać miejscową gwarę, stroje, zwyczaje i tradycyjną kulturę. Który walor będzie dla niego szczególnie ważny?",
    "options": [
      "sieć autostrad",
      "folklor regionalny",
      "transport kontenerowy",
      "rurociąg",
      "terminal paliwowy",
      "farma wiatrowa"
    ],
    "answer": 1,
    "explanation": "Folklor regionalny obejmuje lokalne tradycje, gwarę, stroje, architekturę i kuchnię."
  },
  {
    "id": "R06_WAL_08",
    "section": "Walory turystyczne Polski",
    "type": "sort",
    "prompt": "Przyporządkuj walory do odpowiedniej grupy.",
    "options": null,
    "items": [
      "Jarmark św. Dominika",
      "żubr",
      "Zamek Ogrodzieniec",
      "Bory Tucholskie"
    ],
    "categories": [
      "przyrodnicze",
      "kulturowe"
    ],
    "answer": {
      "przyrodnicze": [
        "żubr",
        "Bory Tucholskie"
      ],
      "kulturowe": [
        "Zamek Ogrodzieniec",
        "Jarmark św. Dominika"
      ]
    },
    "explanation": "Żubr i Bory Tucholskie są walorami przyrodniczymi, a zamek i wydarzenie kulturalne są walorami kulturowymi."
  },
  {
    "id": "R06_WAL_09",
    "section": "Walory turystyczne Polski",
    "type": "riddle",
    "prompt": "Jaka organizacja prowadzi listę obiektów o wyjątkowej i powszechnej wartości dla ludzkości?",
    "options": null,
    "altAnswers": [
      "UNESCO",
      "unesco"
    ],
    "answer": "UNESCO",
    "explanation": "UNESCO prowadzi listę światowego dziedzictwa obejmującą obiekty o wyjątkowej wartości kulturowej i przyrodniczej."
  },
  {
    "id": "R06_WAL_10",
    "section": "Walory turystyczne Polski",
    "type": "single_choice",
    "prompt": "Dlaczego walory turystyczne powinny być wykorzystywane odpowiedzialnie?",
    "options": [
      "aby całkowicie zrezygnować z turystyki",
      "aby usunąć wszystkie formy aktywnego wypoczynku",
      "aby ograniczyć dostęp wyłącznie do mieszkańców regionu",
      "aby zastąpić przyrodę zabudową",
      "aby chronić walory i czerpać z nich trwałe korzyści",
      "aby wszystkie obiekty przekształcić w muzea"
    ],
    "image": "r06_walory_turystyczne_polski.jpg",
    "answer": 4,
    "explanation": "Walory przyrodnicze i kulturowe wymagają poszanowania i ochrony; odpowiedzialne wykorzystanie przynosi korzyści gospodarce i mieszkańcom."
  },
  {
    "id": "R06_TUR_01",
    "section": "Turystyka nad Bałtykiem i w Małopolsce",
    "type": "true_false",
    "prompt": "Szczególnie szybki rozwój masowej turystyki nad Bałtykiem przypadł na lata 60. i 70. XX wieku.",
    "options": null,
    "answer": true,
    "explanation": "W latach 60. i 70. XX wieku wybudowano wiele ośrodków wczasowych, a turystyka masowa nad Bałtykiem szybko się rozwijała."
  },
  {
    "id": "R06_TUR_02",
    "section": "Turystyka nad Bałtykiem i w Małopolsce",
    "type": "single_choice",
    "prompt": "Dlaczego największe natężenie ruchu turystycznego nad Bałtykiem występuje latem?",
    "options": [
      "z powodu warunków pogodowych i wakacji szkolnych",
      "ponieważ zimą wszystkie drogi są zamknięte",
      "ponieważ latem nie działają hotele w Małopolsce",
      "wyłącznie z powodu transportu morskiego",
      "z powodu zakazu turystyki wiosną",
      "ponieważ tylko latem działają parki narodowe"
    ],
    "answer": 0,
    "explanation": "Latem sprzyjają temu warunki pogodowe oraz brak zajęć szkolnych."
  },
  {
    "id": "R06_TUR_03",
    "section": "Turystyka nad Bałtykiem i w Małopolsce",
    "type": "fill_in",
    "prompt": "W lipcu i sierpniu 2020 roku w turystycznych obiektach noclegowych na obszarach nadmorskich przebywało około __________ mln turystów, którzy skorzystali z __________ mln noclegów.",
    "options": null,
    "altAnswers": [
      [
        "1,5",
        "1.5"
      ],
      [
        "7,3",
        "7.3"
      ]
    ],
    "answer": [
      "1,5",
      "7,3"
    ],
    "explanation": "W dwóch letnich miesiącach 2020 roku na obszarach nadmorskich odnotowano 1,5 mln turystów i 7,3 mln noclegów."
  },
  {
    "id": "R06_TUR_04",
    "section": "Turystyka nad Bałtykiem i w Małopolsce",
    "type": "multi_select",
    "prompt": "Zaznacz walory przyrodnicze Pobrzeży Bałtyku sprzyjające turystyce.",
    "options": [
      "piaszczyste plaże",
      "malownicze krajobrazy",
      "lasy tworzące mikroklimat",
      "czyste powietrze o walorach leczniczych",
      "kopalnie soli",
      "wydmy"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      5
    ],
    "explanation": "Do ważnych walorów należą piaszczyste plaże, krajobrazy, nadmorskie lasy tworzące mikroklimat, czyste powietrze o walorach leczniczych oraz wydmy."
  },
  {
    "id": "R06_TUR_05",
    "section": "Turystyka nad Bałtykiem i w Małopolsce",
    "type": "match",
    "prompt": "Połącz miejsce nad Bałtykiem z charakterystycznym walorem lub aktywnością.",
    "options": null,
    "left": [
      "Zatoka Pucka",
      "Słowiński Park Narodowy",
      "Sopot",
      "Woliński Park Narodowy"
    ],
    "right": [
      "klif i ślady abrazji",
      "wydmy",
      "windsurfing i kitesurfing",
      "uzdrowisko i inhalacje solankowe"
    ],
    "image": "r06_wydmy_slowinski_park.jpg",
    "answer": {
      "Zatoka Pucka": "windsurfing i kitesurfing",
      "Słowiński Park Narodowy": "wydmy",
      "Sopot": "uzdrowisko i inhalacje solankowe",
      "Woliński Park Narodowy": "klif i ślady abrazji"
    },
    "explanation": "Nadmorskie walory są zróżnicowane: od sportów wodnych na Zatoce Puckiej przez wydmy i klify po uzdrowiskowe walory Sopotu."
  },
  {
    "id": "R06_TUR_06",
    "section": "Turystyka nad Bałtykiem i w Małopolsce",
    "type": "scenario",
    "prompt": "W 2019 roku do Krakowa przyjechało około 14 mln turystów, a całą Małopolskę odwiedziło niecałe 18 mln. Co wynika z tych danych?",
    "options": [
      "Kraków ma mniejsze znaczenie niż każda miejscowość nadmorska",
      "większość turystów omija Kraków",
      "Kraków odgrywa kluczową rolę w turystyce Małopolski",
      "Małopolska nie ma innych atrakcji",
      "wszyscy turyści w Krakowie są zagraniczni",
      "ruch turystyczny w Małopolsce dotyczy wyłącznie gór"
    ],
    "image": "r06_krakow_rynek_wawel.jpg",
    "answer": 2,
    "explanation": "Bardzo duża część ruchu turystycznego Małopolski koncentruje się w Krakowie, dlatego miasto jest nazywane lokomotywą turystyki regionu."
  },
  {
    "id": "R06_TUR_07",
    "section": "Turystyka nad Bałtykiem i w Małopolsce",
    "type": "true_false",
    "prompt": "Częstochowa leży administracyjnie w województwie śląskim, ale historycznie i kulturowo jest związana z Małopolską.",
    "options": null,
    "answer": true,
    "explanation": "Częstochowa została włączona do województwa śląskiego, jednak historycznie i kulturowo przynależy do Małopolski."
  },
  {
    "id": "R06_TUR_08",
    "section": "Turystyka nad Bałtykiem i w Małopolsce",
    "type": "odd_one_out",
    "prompt": "Wskaż obiekt, który nie jest atrakcją Małopolski: Wawel, zamek w Niedzicy, Szlak Orlich Gniazd, Słowiński Park Narodowy.",
    "options": null,
    "answer": "Słowiński Park Narodowy",
    "explanation": "Słowiński Park Narodowy leży na Pobrzeżu Bałtyku. Wawel, Niedzica i Szlak Orlich Gniazd są związane z Małopolską."
  },
  {
    "id": "R06_TUR_09",
    "section": "Turystyka nad Bałtykiem i w Małopolsce",
    "type": "sequence",
    "prompt": "Ułóż etapy rozwoju turystyki nad Bałtykiem od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "w 2020 roku pandemia ogranicza liczbę turystów",
      "w latach 60. i 70. powstaje wiele ośrodków wczasowych",
      "pierwsi amatorzy kąpieli morskich przyjeżdżają głównie dla zdrowia",
      "rozwija się turystyka masowa w XX wieku"
    ],
    "answer": [
      "pierwsi amatorzy kąpieli morskich przyjeżdżają głównie dla zdrowia",
      "rozwija się turystyka masowa w XX wieku",
      "w latach 60. i 70. powstaje wiele ośrodków wczasowych",
      "w 2020 roku pandemia ogranicza liczbę turystów"
    ],
    "explanation": "Początkowo nad morze przyjeżdżano głównie dla zdrowia. Później rozwinęła się turystyka masowa, silnie rozbudowana w latach 60. i 70., a w 2020 roku ruch ograniczyła pandemia."
  },
  {
    "id": "R06_TUR_10",
    "section": "Turystyka nad Bałtykiem i w Małopolsce",
    "type": "riddle",
    "prompt": "Jak nazywa się lokalna kultura ludowa obejmująca tradycje, gwarę, stroje, architekturę i kuchnię, której najbardziej znanym przykładem w Małopolsce jest kultura Podhala?",
    "options": null,
    "altAnswers": [
      "folklor",
      "folklor Podhala",
      "folklor podhalański"
    ],
    "image": "r06_krakow_rynek_wawel.jpg",
    "answer": "folklor",
    "explanation": "Folklor jest ważnym walorem kulturowym Małopolski; szczególnie znany jest folklor Podhala."
  },
  {
    "id": "R06_HARD_01",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Usługi odpowiadają za __________% wartości dodanej, a przemysł za __________%.",
    "options": null,
    "altAnswers": [
      [
        "65,8",
        "65.8"
      ],
      [
        "31,4",
        "31.4"
      ]
    ],
    "answer": [
      "65,8",
      "31,4"
    ],
    "explanation": "Usługi odpowiadają za 65,8% wartości dodanej, a przemysł za 31,4%."
  },
  {
    "id": "R06_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ilu pasażerów w przybliżeniu obsłużyło w 2019 roku lotnisko Warszawa-Okęcie?",
    "options": [
      "2,4 mln",
      "5,4 mln",
      "8,4 mln",
      "18,8 mln",
      "31,4 mln",
      "65,8 mln"
    ],
    "answer": 3,
    "explanation": "W 2019 roku lotnisko Warszawa-Okęcie obsłużyło około 18,8 mln pasażerów."
  },
  {
    "id": "R06_HARD_03",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które informacje razem pokazują, że transport morski i porty zwiększają bezpieczeństwo surowcowe Polski?",
    "options": [
      "tankowce dostarczają ropę i gaz z odległych krajów",
      "transport morski służy wyłącznie turystyce",
      "terminal LNG w Świnoujściu umożliwia dostawy gazu z wielu kierunków",
      "gdańska rafineria może sprowadzać ropę z różnych regionów świata",
      "porty przyjmują tylko towary z Unii Europejskiej",
      "gaz ziemny może docierać wyłącznie rurociągiem ze wschodu"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "Dostawy ropy i gazu z wielu kierunków przez Gdańsk i Świnoujście zmniejszają zależność od jednego źródła, w tym od dostaw z Rosji."
  },
  {
    "id": "R06_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Terminal kontenerowy w Porcie Gdańsk zmodernizowano w roku __________, a supertankowiec Atlantas zawinął tam w sierpniu __________ roku.",
    "options": null,
    "altAnswers": [
      [
        "2011",
        "2011 r."
      ],
      [
        "2016",
        "2016 r."
      ]
    ],
    "answer": [
      "2011",
      "2016"
    ],
    "explanation": "Modernizacja z 2011 roku umożliwiła przyjmowanie największych statków na Bałtyku; w sierpniu 2016 roku zawinął tam supertankowiec Atlantas."
  },
  {
    "id": "R06_HARD_05",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż w poprawnej kolejności etapy intermodalnego przewozu 44 kontenerów z Chin w grudniu 2021 roku.",
    "options": null,
    "items": [
      "przeładunek na transport morski",
      "dotarcie do portu w Gdyni",
      "wysyłka do Skandynawii i Wielkiej Brytanii",
      "załadunek kontenerów w Xi'an",
      "trzytygodniowa podróż koleją do Polski"
    ],
    "answer": [
      "załadunek kontenerów w Xi'an",
      "trzytygodniowa podróż koleją do Polski",
      "dotarcie do portu w Gdyni",
      "przeładunek na transport morski",
      "wysyłka do Skandynawii i Wielkiej Brytanii"
    ],
    "explanation": "Przewóz rozpoczął się w Xi'an, trwał koleją trzy tygodnie do Gdyni, a następnie kontenery popłynęły do krajów skandynawskich i Wielkiej Brytanii."
  },
  {
    "id": "R06_HARD_06",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaki udział ruchu towarowego w Holandii odbywa się żeglugą śródlądową?",
    "options": [
      "17%",
      "42%",
      "65,8%",
      "80%",
      "8%",
      "2,8%"
    ],
    "answer": 1,
    "explanation": "W Holandii około 42% ruchu towarowego odbywa się żeglugą śródlądową."
  },
  {
    "id": "R06_HARD_07",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Polska posiada jedynie dwa statki prowadzące połowy na wodach północnego Atlantyku.",
    "options": null,
    "answer": true,
    "explanation": "Rybołówstwo dalekomorskie ma obecnie niewielkie znaczenie, a Polska posiada dwa statki poławiające na wodach północnego Atlantyku."
  },
  {
    "id": "R06_HARD_08",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Według planów do 2040 roku morskie farmy wiatrowe w polskiej Wyłącznej Strefie Ekonomicznej mają osiągnąć moc od __________ do __________ GW.",
    "options": null,
    "altAnswers": [
      [
        "8",
        "8 GW"
      ],
      [
        "11",
        "11 GW"
      ]
    ],
    "image": "r06_farma_wiatrowa_baltyk.jpg",
    "answer": [
      "8",
      "11"
    ],
    "explanation": "Planowana moc morskich farm wiatrowych do 2040 roku wynosi 8-11 GW."
  },
  {
    "id": "R06_HARD_09",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz obiekty lub zespoły należące do polskiego dziedzictwa UNESCO.",
    "options": [
      "Stare Miasto w Warszawie",
      "Stare Miasto w Zamościu",
      "Pałac Kultury i Nauki w Warszawie",
      "Kościoły Pokoju w Jaworze i Świdnicy",
      "molo w Sopocie",
      "Krzemionki Opatowskie"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "explanation": "Do polskiego dziedzictwa UNESCO należą Stare Miasto w Warszawie, Stare Miasto w Zamościu, Kościoły Pokoju w Jaworze i Świdnicy oraz Krzemionki Opatowskie."
  },
  {
    "id": "R06_HARD_10",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W lipcu i sierpniu 2020 roku liczba turystów na obszarach nadmorskich była niższa niż rok wcześniej o __________%, a liczba udzielonych noclegów o __________%.",
    "options": null,
    "altAnswers": [
      [
        "14,3",
        "14.3"
      ],
      [
        "18,9",
        "18.9"
      ]
    ],
    "answer": [
      "14,3",
      "18,9"
    ],
    "explanation": "W porównaniu z lipcem i sierpniem 2019 roku liczba turystów spadła o 14,3%, a liczba noclegów o 18,9%."
  },
  {
    "id": "R06_HARD_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które zestawienie najlepiej oddaje skalę ruchu turystycznego w Krakowie i całej Małopolsce w 2019 roku?",
    "options": [
      "Kraków 1,5 mln; Małopolska 7,3 mln",
      "Kraków 4 mln; Małopolska 14 mln",
      "Kraków 18,8 mln; Małopolska 31,4 mln",
      "Kraków 7,3 mln; Małopolska 14 mln",
      "Kraków około 14 mln; Małopolska niecałe 18 mln",
      "Kraków 65,8 mln; Małopolska 80 mln"
    ],
    "image": "r06_krakow_rynek_wawel.jpg",
    "answer": 4,
    "explanation": "W 2019 roku Kraków odwiedziło około 14 mln turystów, a całą Małopolskę niecałe 18 mln."
  },
  {
    "id": "R06_HARD_12",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz liczbę lub datę z wydarzeniem albo zjawiskiem.",
    "options": null,
    "left": [
      "2011",
      "2016",
      "2020",
      "2022"
    ],
    "right": [
      "17 polskich obiektów na liście UNESCO",
      "modernizacja terminalu kontenerowego w Porcie Gdańsk",
      "pandemiczny spadek ruchu turystycznego nad Bałtykiem",
      "wizyta supertankowca Atlantas w Porcie Gdańsk"
    ],
    "answer": {
      "2011": "modernizacja terminalu kontenerowego w Porcie Gdańsk",
      "2016": "wizyta supertankowca Atlantas w Porcie Gdańsk",
      "2020": "pandemiczny spadek ruchu turystycznego nad Bałtykiem",
      "2022": "17 polskich obiektów na liście UNESCO"
    },
    "explanation": "Daty dotyczą infrastruktury portowej, pandemii w turystyce i liczby polskich wpisów UNESCO."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r06",
  number: 6,
  title: "Gospodarka Polski - usługi",
  icon: "🇵🇱",
  sectionOrder: [
    "Rola usług w gospodarce Polski",
    "Transport i łączność",
    "Wpływ sieci transportowej na lokalizację przedsiębiorstw",
    "Możliwości rozwoju polskiej gospodarki morskiej",
    "Walory turystyczne Polski",
    "Turystyka nad Bałtykiem i w Małopolsce"
  ],
  sectionIcons: {
    "Rola usług w gospodarce Polski": "🧰",
    "Transport i łączność": "🚆",
    "Wpływ sieci transportowej na lokalizację przedsiębiorstw": "🛣️",
    "Możliwości rozwoju polskiej gospodarki morskiej": "⚓",
    "Walory turystyczne Polski": "🏞️",
    "Turystyka nad Bałtykiem i w Małopolsce": "🧳"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
