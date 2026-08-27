// Skróty sekcji (do identyfikatorów ćwiczeń):
//   UST  = Usługi, transport i łączność
//   TRO  = Transport a rozwój Trójmiasta
//   HAN  = Handel zagraniczny
//   TUR  = Turystyka w Polsce
//   REG  = Wybrzeże Bałtyku i Małopolska
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R04_UST_01",
    section: "Usługi, transport i łączność",
    type: "single_choice",
    prompt: "Które stwierdzenie najlepiej opisuje usługi?",
    options: [
      "Służą zaspokajaniu potrzeb ludzi, przedsiębiorstw i instytucji",
      "Polegają wyłącznie na wytwarzaniu dóbr materialnych",
      "Obejmują jedynie przewóz osób",
      "Są częścią wyłącznie rolnictwa",
      "Zajmują się tylko sprzedażą produktów",
      "Występują tylko w dużych miastach"
    ],
    answer: 0,
    explanation: "Celem działalności usługowej nie jest wytwarzanie konkretnych produktów, lecz zaspokajanie potrzeb ludzi, przedsiębiorstw i instytucji."
  },
  {
    id: "R04_UST_02",
    section: "Usługi, transport i łączność",
    type: "sort",
    prompt: "Przyporządkuj usługi do właściwych grup.",
    options: null,
    items: [
      "usługi telefoniczne",
      "usługi pocztowe",
      "transport",
      "handel",
      "naprawa samochodu",
      "usługi remontowe",
      "ochrona zdrowia",
      "usługi turystyczne"
    ],
    categories: [
      "informacyjne",
      "dystrybucyjne",
      "naprawcze",
      "rekreacyjno-zdrowotne"
    ],
    answer: {
      "informacyjne": ["usługi telefoniczne", "usługi pocztowe"],
      "dystrybucyjne": ["transport", "handel"],
      "naprawcze": ["naprawa samochodu", "usługi remontowe"],
      "rekreacyjno-zdrowotne": ["ochrona zdrowia", "usługi turystyczne"]
    },
    explanation: "Klasyfikacja uwzględnia wynik działalności usługowej: przekazywanie informacji, dostarczanie, naprawę albo wypoczynek i zdrowie."
  },
  {
    id: "R04_UST_03",
    section: "Usługi, transport i łączność",
    type: "multi_select",
    prompt: "Zaznacz usługi zaliczane do podstawowych.",
    options: [
      "handel",
      "usługi finansowe",
      "transport",
      "łączność",
      "projektowanie ogrodów",
      "specjalistyczne doradztwo inwestycyjne"
    ],
    answer: [0, 1, 2, 3],
    explanation: "Do usług podstawowych należą między innymi handel, usługi finansowe, transport i łączność."
  },
  {
    id: "R04_UST_04",
    section: "Usługi, transport i łączność",
    type: "true_false",
    prompt: "Transport obejmuje przewóz osób i ładunków środkami lokomocji.",
    options: null,
    answer: true,
    explanation: "Przewóz osób i ładunków jest podstawową funkcją transportu."
  },
  {
    id: "R04_UST_05",
    section: "Usługi, transport i łączność",
    type: "match",
    prompt: "Połącz rodzaj transportu z odpowiadającym mu sposobem przewozu.",
    options: null,
    left: [
      "transport samochodowy",
      "transport kolejowy",
      "transport wodny",
      "transport przesyłowy"
    ],
    right: [
      "przewóz ciężarówką",
      "przewóz pociągiem",
      "rejs barką",
      "przesył gazociągiem"
    ],
    answer: {
      "transport samochodowy": "przewóz ciężarówką",
      "transport kolejowy": "przewóz pociągiem",
      "transport wodny": "rejs barką",
      "transport przesyłowy": "przesył gazociągiem"
    },
    image: "r04_transport_ladowy_polska.jpg",
    explanation: "Każdy rodzaj transportu wykorzystuje inną infrastrukturę i środki przewozu."
  },
  {
    id: "R04_UST_06",
    section: "Usługi, transport i łączność",
    type: "single_choice",
    prompt: "Która cecha jest zaletą transportu samochodowego?",
    options: [
      "Możliwość przewozu niemal od drzwi do drzwi",
      "Najniższy koszt na każdej odległości",
      "Największa prędkość na świecie",
      "Brak zależności od sieci dróg",
      "Przewóz wyłącznie pasażerów",
      "Największa opłacalność dla ogromnych ładunków masowych"
    ],
    answer: 0,
    image: "r04_transport_ladowy_polska.jpg",
    explanation: "Transport samochodowy pozwala dostarczać osoby i towary niemal od drzwi do drzwi, a na niewielkich odległościach ma stosunkowo niskie koszty."
  },
  {
    id: "R04_UST_07",
    section: "Usługi, transport i łączność",
    type: "fill_in",
    prompt: "W 2023 roku na 100 km² powierzchni Polski przypadało średnio __________ km dróg o twardej nawierzchni.",
    options: null,
    answer: ["101,9"],
    altAnswers: [["101,9", "101.9", "101,9 km", "101.9 km"]],
    explanation: "Średnia gęstość dróg o twardej nawierzchni w Polsce wynosiła w 2023 roku 101,9 km na 100 km²."
  },
  {
    id: "R04_UST_08",
    section: "Usługi, transport i łączność",
    type: "true_false",
    prompt: "Gęstość sieci drogowej jest większa na terenach zurbanizowanych i uprzemysłowionych niż na obszarach słabo zaludnionych.",
    options: null,
    answer: true,
    image: "r04_transport_ladowy_polska.jpg",
    explanation: "Największa gęstość sieci drogowej występuje na obszarach zurbanizowanych i uprzemysłowionych; bardzo dużą gęstością wyróżnia się województwo śląskie."
  },
  {
    id: "R04_UST_09",
    section: "Usługi, transport i łączność",
    type: "scenario",
    prompt: "Firma chce tanio przewieźć dużą partię zboża na znaczną odległość dostępnym szlakiem wodnym. Który rodzaj transportu najlepiej odpowiada temu zadaniu?",
    options: [
      "transport wodny",
      "transport lotniczy",
      "transport przesyłowy",
      "transport tramwajowy",
      "transport metrem",
      "transport motocyklowy"
    ],
    answer: 0,
    image: "r04_transport_wodny_odra.jpg",
    explanation: "Transport wodny należy do najtańszych i umożliwia przewóz dużych ładunków, takich jak zboże lub piasek, na znaczne odległości."
  },
  {
    id: "R04_UST_10",
    section: "Usługi, transport i łączność",
    type: "multi_select",
    prompt: "Zaznacz przyczyny niewielkiego znaczenia żeglugi śródlądowej w Polsce.",
    options: [
      "mała długość żeglownych odcinków rzek",
      "niski poziom wody głównie latem",
      "mała liczba kanałów łączących największe rzeki",
      "brak dostępu Polski do morza",
      "zbyt duża liczba portów rzecznych",
      "całkowity zakaz przewozu ładunków barkami"
    ],
    answer: [0, 1, 2],
    image: "r04_transport_wodny_odra.jpg",
    explanation: "Rozwój żeglugi śródlądowej ograniczają krótkie żeglowne odcinki rzek, okresowo niski poziom wód i niewielka liczba kanałów."
  },
  {
    id: "R04_UST_11",
    section: "Usługi, transport i łączność",
    type: "match",
    prompt: "Połącz element transportu przesyłowego z właściwą informacją.",
    options: null,
    left: [
      "Rurociąg Pomorski",
      "Rurociąg Przyjaźń",
      "Gazociąg Bałtycki",
      "Gazociąg Jamalski"
    ],
    right: [
      "łączy port w Gdańsku z rafineriami w Gdańsku i Płocku",
      "przesyłał ropę z Rosji przez Płock w stronę Niemiec",
      "ma początek w Norwegii",
      "biegnie z północnej Rosji do Europy Zachodniej"
    ],
    answer: {
      "Rurociąg Pomorski": "łączy port w Gdańsku z rafineriami w Gdańsku i Płocku",
      "Rurociąg Przyjaźń": "przesyłał ropę z Rosji przez Płock w stronę Niemiec",
      "Gazociąg Bałtycki": "ma początek w Norwegii",
      "Gazociąg Jamalski": "biegnie z północnej Rosji do Europy Zachodniej"
    },
    image: "r04_transport_przesylowy.jpg",
    explanation: "Rurociągi i gazociągi łączą źródła lub porty odbioru surowców z rafineriami i odbiorcami."
  },
  {
    id: "R04_UST_12",
    section: "Usługi, transport i łączność",
    type: "multi_select",
    prompt: "Zaznacz środki przekazywania informacji zaliczane do łączności.",
    options: ["poczta", "radio", "telewizja", "telefon", "internet", "rurociąg"],
    answer: [0, 1, 2, 3, 4],
    image: "r04_lacznosc_wspolczesna.jpg",
    explanation: "Łączność obejmuje przekazywanie informacji za pośrednictwem poczty, radia, telewizji, telefonu i internetu."
  },

  {
    id: "R04_TRO_01",
    section: "Transport a rozwój Trójmiasta",
    type: "fill_in",
    prompt: "Trójmiasto tworzą Gdańsk, __________ i __________.",
    options: null,
    answer: ["Gdynia", "Sopot"],
    altAnswers: [
      ["Gdynia", "Gdynię"],
      ["Sopot", "Sopotu"]
    ],
    explanation: "Trójmiasto to zespół trzech nadbałtyckich miast: Gdańska, Gdyni i Sopotu."
  },
  {
    id: "R04_TRO_02",
    section: "Transport a rozwój Trójmiasta",
    type: "true_false",
    prompt: "W porcie w Gdańsku od lat notuje się największe przeładunki w Polsce.",
    options: null,
    answer: true,
    image: "r04_port_gdansk_trojmiasto.jpg",
    explanation: "Port w Gdańsku jest największym polskim portem pod względem przeładunków."
  },
  {
    id: "R04_TRO_03",
    section: "Transport a rozwój Trójmiasta",
    type: "multi_select",
    prompt: "Zaznacz skutki rozwoju transportu morskiego w Trójmieście.",
    options: [
      "rozwój rafinerii",
      "rozwój stoczni",
      "powstawanie centrów logistycznych",
      "działalność firm spedycyjnych",
      "zanik handlu międzynarodowego",
      "likwidacja połączeń kolejowych"
    ],
    answer: [0, 1, 2, 3],
    image: "r04_port_gdansk_trojmiasto.jpg",
    explanation: "Porty sprzyjają rozwojowi przemysłu przetwarzającego surowce, stoczni, logistyki i spedycji."
  },
  {
    id: "R04_TRO_04",
    section: "Transport a rozwój Trójmiasta",
    type: "match",
    prompt: "Połącz obiekt lub firmę z jej funkcją.",
    options: null,
    left: ["Rafineria Gdańska", "terminal gazowy", "centrum logistyczne", "firma spedycyjna"],
    right: [
      "przetwarza ropę na paliwa i oleje",
      "przeładowuje płynny gaz ziemny ze statków",
      "magazynuje i przygotowuje towary do dalszego transportu",
      "organizuje przewozy ładunków na zlecenie"
    ],
    answer: {
      "Rafineria Gdańska": "przetwarza ropę na paliwa i oleje",
      "terminal gazowy": "przeładowuje płynny gaz ziemny ze statków",
      "centrum logistyczne": "magazynuje i przygotowuje towary do dalszego transportu",
      "firma spedycyjna": "organizuje przewozy ładunków na zlecenie"
    },
    image: "r04_logistyka_kontenerowa.jpg",
    explanation: "Każdy z tych elementów pełni inną funkcję w obsłudze surowców i towarów przechodzących przez porty."
  },
  {
    id: "R04_TRO_05",
    section: "Transport a rozwój Trójmiasta",
    type: "scenario",
    prompt: "Kontener rozładowany ze statku ma trafić do odbiorcy w głębi Polski. Jakie rozwiązanie jest typowe dla dalszego przewozu?",
    options: [
      "kolej lub ciężarówka",
      "wyłącznie samolot",
      "wyłącznie prom pasażerski",
      "metro i tramwaj",
      "rurociąg naftowy",
      "pieszy kurier"
    ],
    answer: 0,
    image: "r04_logistyka_kontenerowa.jpg",
    explanation: "Kontenery z portów przewozi się w głąb lądu koleją lub ciężarówkami."
  },
  {
    id: "R04_TRO_06",
    section: "Transport a rozwój Trójmiasta",
    type: "riddle",
    prompt: "Największy i najnowocześniejszy terminal kontenerowy na Morzu Bałtyckim, zlokalizowany w Porcie Gdańsk, to...",
    options: null,
    answer: "Baltic Hub",
    altAnswers: ["Baltic Hub", "Baltic Hub w Gdańsku", "terminal Baltic Hub"],
    image: "r04_port_gdansk_trojmiasto.jpg",
    explanation: "Baltic Hub jest terminalem kontenerowym działającym w Porcie Gdańsk."
  },
  {
    id: "R04_TRO_07",
    section: "Transport a rozwój Trójmiasta",
    type: "true_false",
    prompt: "Stocznie zajmują się budową, remontem i modernizacją łodzi, jachtów oraz statków.",
    options: null,
    answer: true,
    image: "r04_port_gdansk_trojmiasto.jpg",
    explanation: "Na terenach portowych Gdańska i Gdyni działają stocznie wykonujące właśnie takie prace."
  },
  {
    id: "R04_TRO_08",
    section: "Transport a rozwój Trójmiasta",
    type: "fill_in",
    prompt: "Dostępność Trójmiasta zwiększają pobliska autostrada __________ oraz port lotniczy w Gdańsku-__________.",
    options: null,
    answer: ["A1", "Rębiechowie"],
    altAnswers: [
      ["A1", "autostrada A1"],
      ["Rębiechowie", "Rębiechowo", "Gdańsku-Rębiechowie"]
    ],
    explanation: "Trójmiasto korzysta z połączenia autostradą A1 oraz z międzynarodowego portu lotniczego w Gdańsku-Rębiechowie."
  },
  {
    id: "R04_TRO_09",
    section: "Transport a rozwój Trójmiasta",
    type: "sort",
    prompt: "Przyporządkuj elementy do grup usług rozwijających się dzięki napływowi turystów do Trójmiasta.",
    options: null,
    items: ["hotel", "pensjonat", "restauracja", "bar", "muzeum", "festiwal", "szkolenie", "kongres"],
    categories: ["noclegowe", "gastronomiczne", "kulturalno-rozrywkowe", "konferencyjne"],
    answer: {
      "noclegowe": ["hotel", "pensjonat"],
      "gastronomiczne": ["restauracja", "bar"],
      "kulturalno-rozrywkowe": ["muzeum", "festiwal"],
      "konferencyjne": ["szkolenie", "kongres"]
    },
    explanation: "Dobra dostępność transportowa pobudza rozwój noclegów, gastronomii, kultury, rozrywki oraz obsługi szkoleń i konferencji."
  },
  {
    id: "R04_TRO_10",
    section: "Transport a rozwój Trójmiasta",
    type: "sequence",
    prompt: "Ułóż etapy przewozu płynnego gazu ziemnego od statku do odbiorców.",
    options: null,
    items: [
      "rozwożenie gazu po Polsce i krajach sąsiednich",
      "wpłynięcie statku z płynnym gazem do portu",
      "przeładunek gazu w terminalu",
      "napełnienie cystern kolejowych lub samochodowych"
    ],
    answer: [
      "wpłynięcie statku z płynnym gazem do portu",
      "przeładunek gazu w terminalu",
      "napełnienie cystern kolejowych lub samochodowych",
      "rozwożenie gazu po Polsce i krajach sąsiednich"
    ],
    image: "r04_logistyka_kontenerowa.jpg",
    explanation: "Gaz trafia ze statku do terminalu, następnie do cystern, a później jest rozwożony do odbiorców."
  },

  {
    id: "R04_HAN_01",
    section: "Handel zagraniczny",
    type: "fill_in",
    prompt: "Sprowadzanie towarów z zagranicy to __________, a ich sprzedaż za granicę to __________.",
    options: null,
    answer: ["import", "eksport"],
    altAnswers: [
      ["import", "importowanie"],
      ["eksport", "eksportowanie"]
    ],
    image: "r04_handel_zagraniczny.jpg",
    explanation: "Import oznacza zakup i sprowadzanie dóbr z zagranicy, a eksport ich sprzedaż do innych państw."
  },
  {
    id: "R04_HAN_02",
    section: "Handel zagraniczny",
    type: "single_choice",
    prompt: "Które państwo jest głównym partnerem handlowym Polski?",
    options: ["Niemcy", "Chiny", "Czechy", "Francja", "Włochy", "Stany Zjednoczone"],
    answer: 0,
    explanation: "Najważniejszym partnerem Polski zarówno w imporcie, jak i eksporcie są Niemcy."
  },
  {
    id: "R04_HAN_03",
    section: "Handel zagraniczny",
    type: "multi_select",
    prompt: "Zaznacz towary należące do najważniejszych grup importowanych do Polski.",
    options: [
      "ropa naftowa",
      "gaz ziemny",
      "urządzenia elektroniczne",
      "samochody i ich części",
      "wyłącznie polskie meble",
      "wyłącznie polskie gry komputerowe"
    ],
    answer: [0, 1, 2, 3],
    image: "r04_polskie_produkty_eksportowe.jpg",
    explanation: "W imporcie ważne są samochody i części, elektronika, ropa naftowa oraz gaz ziemny."
  },
  {
    id: "R04_HAN_04",
    section: "Handel zagraniczny",
    type: "multi_select",
    prompt: "Zaznacz ważne polskie artykuły eksportowe.",
    options: [
      "meble",
      "sprzęt RTV i AGD",
      "części samochodowe",
      "artykuły spożywcze",
      "wyłącznie surowa ropa naftowa",
      "wyłącznie gaz ziemny"
    ],
    answer: [0, 1, 2, 3],
    image: "r04_polskie_produkty_eksportowe.jpg",
    explanation: "Polska eksportuje między innymi meble, sprzęt elektryczny, części samochodowe i żywność."
  },
  {
    id: "R04_HAN_05",
    section: "Handel zagraniczny",
    type: "true_false",
    prompt: "W 2022 roku wymiana handlowa Polski z Rosją zmniejszyła się w związku z sankcjami gospodarczymi.",
    options: null,
    answer: true,
    explanation: "Sankcje gospodarcze nałożone na Rosję w 2022 roku ograniczyły wymianę handlową z Polską."
  },
  {
    id: "R04_HAN_06",
    section: "Handel zagraniczny",
    type: "match",
    prompt: "Połącz polską firmę z jej rozpoznawalnym produktem.",
    options: null,
    left: ["PESA Bydgoszcz", "CD Projekt", "Mlekpol", "Nowy Styl"],
    right: ["pojazdy szynowe", "gry komputerowe", "wyroby mleczarskie", "meble biurowe"],
    answer: {
      "PESA Bydgoszcz": "pojazdy szynowe",
      "CD Projekt": "gry komputerowe",
      "Mlekpol": "wyroby mleczarskie",
      "Nowy Styl": "meble biurowe"
    },
    image: "r04_polskie_produkty_eksportowe.jpg",
    explanation: "PESA Bydgoszcz, CD Projekt, Mlekpol i Nowy Styl to polskie przedsiębiorstwa odnoszące sukcesy na rynkach zagranicznych."
  },
  {
    id: "R04_HAN_07",
    section: "Handel zagraniczny",
    type: "riddle",
    prompt: "Różnica między wartością eksportu a wartością importu to...",
    options: null,
    answer: "saldo bilansu handlu zagranicznego",
    altAnswers: [
      "saldo bilansu handlu zagranicznego",
      "saldo handlu zagranicznego",
      "saldo bilansu handlowego",
      "saldo"
    ],
    image: "r04_handel_zagraniczny.jpg",
    explanation: "Saldo oblicza się jako różnicę między wartością eksportu i importu w określonym czasie."
  },
  {
    id: "R04_HAN_08",
    section: "Handel zagraniczny",
    type: "scenario",
    prompt: "Wartość eksportu państwa w danym roku była większa niż wartość importu. Jakie saldo bilansu handlu zagranicznego osiągnęło to państwo?",
    options: ["dodatnie", "ujemne", "zerowe", "sezonowe", "lokalne", "niemożliwe do określenia"],
    answer: 0,
    image: "r04_handel_zagraniczny.jpg",
    explanation: "Gdy eksport ma większą wartość niż import, saldo bilansu handlu zagranicznego jest dodatnie."
  },
  {
    id: "R04_HAN_09",
    section: "Handel zagraniczny",
    type: "odd_one_out",
    prompt: "Wskaż produkt, który nie należy do głównych artykułów eksportowych Polski: meble, sprzęt AGD, ropa naftowa, części samochodowe.",
    options: null,
    answer: "ropa naftowa",
    image: "r04_polskie_produkty_eksportowe.jpg",
    explanation: "Ropa naftowa należy do ważnych towarów importowanych, natomiast pozostałe pozycje są istotne w polskim eksporcie."
  },
  {
    id: "R04_HAN_10",
    section: "Handel zagraniczny",
    type: "sequence",
    prompt: "Ułóż czynności prowadzące do określenia salda handlu zagranicznego.",
    options: null,
    items: [
      "interpretacja wyniku jako salda dodatniego lub ujemnego",
      "ustalenie wartości importu",
      "odjęcie wartości importu od wartości eksportu",
      "ustalenie wartości eksportu"
    ],
    answer: [
      "ustalenie wartości eksportu",
      "ustalenie wartości importu",
      "odjęcie wartości importu od wartości eksportu",
      "interpretacja wyniku jako salda dodatniego lub ujemnego"
    ],
    image: "r04_handel_zagraniczny.jpg",
    explanation: "Najpierw porównuje się wartości eksportu i importu, a ich różnica określa znak salda."
  },
  {
    id: "R04_HAN_11",
    section: "Handel zagraniczny",
    type: "single_choice",
    prompt: "W którym roku po raz pierwszy od początku lat 90. XX wieku Polska odnotowała dodatnie saldo handlu zagranicznego?",
    options: ["2015", "2004", "2010", "2012", "2019", "2023"],
    answer: 0,
    explanation: "Pierwsze dodatnie saldo od początku lat 90. XX wieku odnotowano w Polsce w 2015 roku."
  },

  {
    id: "R04_TUR_01",
    section: "Turystyka w Polsce",
    type: "single_choice",
    prompt: "Czym jest turystyka?",
    options: [
      "Różnymi formami spędzania wolnego czasu z dala od miejsca zamieszkania",
      "Wyłącznie zagranicznymi wyjazdami służbowymi",
      "Stałą przeprowadzką do miejscowości wypoczynkowej",
      "Codziennym dojazdem do szkoły",
      "Tylko uprawianiem sportów ekstremalnych",
      "Wyłącznie działalnością hoteli"
    ],
    answer: 0,
    image: "r04_walory_turystyczne_polski.jpg",
    explanation: "Turystyka obejmuje różne formy spędzania wolnego czasu poza miejscem zamieszkania."
  },
  {
    id: "R04_TUR_02",
    section: "Turystyka w Polsce",
    type: "sort",
    prompt: "Przyporządkuj rodzaje turystyki do kryterium podziału.",
    options: null,
    items: [
      "wypoczynkowa",
      "poznawcza",
      "biznesowa",
      "lecznicza",
      "religijna",
      "indywidualna",
      "zbiorowa"
    ],
    categories: ["ze względu na cel", "ze względu na sposób organizacji"],
    answer: {
      "ze względu na cel": ["wypoczynkowa", "poznawcza", "biznesowa", "lecznicza", "religijna"],
      "ze względu na sposób organizacji": ["indywidualna", "zbiorowa"]
    },
    explanation: "Ze względu na cel wyjazdu wyróżnia się pięć form turystyki, a ze względu na sposób organizacji — turystykę indywidualną i zbiorową."
  },
  {
    id: "R04_TUR_03",
    section: "Turystyka w Polsce",
    type: "match",
    prompt: "Połącz formę turystyki z odpowiadającym jej celem wyjazdu.",
    options: null,
    left: ["wypoczynkowa", "poznawcza", "biznesowa", "lecznicza", "religijna"],
    right: ["urlop nad morzem", "zwiedzanie muzeów", "udział w kongresie", "pobyt w uzdrowisku", "pielgrzymka"],
    answer: {
      "wypoczynkowa": "urlop nad morzem",
      "poznawcza": "zwiedzanie muzeów",
      "biznesowa": "udział w kongresie",
      "lecznicza": "pobyt w uzdrowisku",
      "religijna": "pielgrzymka"
    },
    image: "r04_walory_turystyczne_polski.jpg",
    explanation: "Formy turystyki różnią się podstawowym celem wyjazdu."
  },
  {
    id: "R04_TUR_04",
    section: "Turystyka w Polsce",
    type: "multi_select",
    prompt: "Zaznacz elementy infrastruktury turystycznej.",
    options: [
      "baza noclegowa",
      "baza gastronomiczna",
      "inne obiekty turystyczne",
      "sieć komunikacyjna",
      "wyłącznie zakłady górnicze",
      "wyłącznie pola uprawne"
    ],
    answer: [0, 1, 2, 3],
    explanation: "Infrastrukturę turystyczną tworzą noclegi, gastronomia, obiekty turystyczne i sieć transportowa."
  },
  {
    id: "R04_TUR_05",
    section: "Turystyka w Polsce",
    type: "true_false",
    prompt: "W 2024 roku Polskę odwiedziło prawie 20 mln turystów, a wpływy z turystyki wyniosły około 15 mld dolarów amerykańskich.",
    options: null,
    answer: true,
    explanation: "W 2024 roku Polskę odwiedziło prawie 20 mln turystów, a wpływy z turystyki wyniosły około 15 mld dolarów amerykańskich; wartości te były niższe niż w czołowych krajach śródziemnomorskich."
  },
  {
    id: "R04_TUR_06",
    section: "Turystyka w Polsce",
    type: "single_choice",
    prompt: "Który element jest walorem przyrodniczym?",
    options: ["jezioro", "muzeum", "zamek", "festiwal", "galeria sztuki", "zabytkowy kościół"],
    answer: 0,
    image: "r04_walory_turystyczne_polski.jpg",
    explanation: "Jeziora należą do walorów przyrodniczych, a muzea, zabytki i wydarzenia kulturalne do walorów kulturowych."
  },
  {
    id: "R04_TUR_07",
    section: "Turystyka w Polsce",
    type: "odd_one_out",
    prompt: "Wskaż walor, który nie jest kulturowy: muzeum, zabytek, festiwal, jezioro.",
    options: null,
    answer: "jezioro",
    explanation: "Jezioro jest walorem przyrodniczym, a pozostałe elementy należą do walorów kulturowych."
  },
  {
    id: "R04_TUR_08",
    section: "Turystyka w Polsce",
    type: "scenario",
    prompt: "Turysta chce latem wędrować, a zimą jeździć na nartach w tym samym regionie Polski. Który obszar najlepiej odpowiada temu opisowi?",
    options: ["Karpaty lub Sudety", "Żuławy Wiślane", "Nizina Podlaska", "Kujawy", "Pojezierze Wielkopolskie", "Wyżyna Lubelska"],
    answer: 0,
    image: "r04_walory_turystyczne_polski.jpg",
    explanation: "Karpaty i Sudety przyciągają turystów przez cały rok: latem pieszych i rowerzystów, a zimą narciarzy."
  },
  {
    id: "R04_TUR_09",
    section: "Turystyka w Polsce",
    type: "fill_in",
    prompt: "Najchętniej odwiedzane regiony pojezierne to Kraina Wielkich Jezior __________ oraz Pojezierze __________.",
    options: null,
    answer: ["Mazurskich", "Kaszubskie"],
    altAnswers: [
      ["Mazurskich", "Mazury", "Wielkich Jezior Mazurskich"],
      ["Kaszubskie", "Pojezierze Kaszubskie"]
    ],
    explanation: "Kraina Wielkich Jezior Mazurskich i Pojezierze Kaszubskie są najpopularniejszymi regionami pojeziernymi."
  },
  {
    id: "R04_TUR_10",
    section: "Turystyka w Polsce",
    type: "riddle",
    prompt: "Międzynarodowy wykaz obejmujący wyjątkowo cenne obiekty przyrodnicze i kulturowe to...",
    options: null,
    answer: "Lista światowego dziedzictwa UNESCO",
    altAnswers: [
      "Lista światowego dziedzictwa UNESCO",
      "Lista UNESCO",
      "lista światowego dziedzictwa",
      "UNESCO"
    ],
    explanation: "Na Liście światowego dziedzictwa UNESCO znajdują się obiekty o wyjątkowej wartości przyrodniczej lub kulturowej."
  },
  {
    id: "R04_TUR_11",
    section: "Turystyka w Polsce",
    type: "sequence",
    prompt: "Ułóż regiony i miejsca od północy ku południu Polski.",
    options: null,
    items: ["Tatry", "Pojezierze Mazurskie", "Kraków", "wybrzeże Bałtyku"],
    answer: ["wybrzeże Bałtyku", "Pojezierze Mazurskie", "Kraków", "Tatry"],
    explanation: "Wybrzeże leży na północy, dalej na południe znajdują się pojezierza, Kraków i Tatry."
  },

  {
    id: "R04_REG_01",
    section: "Wybrzeże Bałtyku i Małopolska",
    type: "multi_select",
    prompt: "Zaznacz walory przyrodnicze wybrzeża Morza Bałtyckiego.",
    options: [
      "szerokie piaszczyste plaże",
      "strome klify",
      "wydmy",
      "mierzeje",
      "kopalnie soli",
      "średniowieczny rynek"
    ],
    answer: [0, 1, 2, 3],
    image: "r04_wybrzeze_baltyku.jpg",
    explanation: "Do charakterystycznych walorów wybrzeża należą plaże, klify, wydmy oraz Mierzeja Helska i Mierzeja Wiślana."
  },
  {
    id: "R04_REG_02",
    section: "Wybrzeże Bałtyku i Małopolska",
    type: "single_choice",
    prompt: "W którym parku narodowym wydmy osiągają wysokość nawet około 40 m?",
    options: [
      "Słowińskim Parku Narodowym",
      "Wolińskim Parku Narodowym",
      "Tatrzańskim Parku Narodowym",
      "Ojcowskim Parku Narodowym",
      "Białowieskim Parku Narodowym",
      "Karkonoskim Parku Narodowym"
    ],
    answer: 0,
    image: "r04_wybrzeze_baltyku.jpg",
    explanation: "W Słowińskim Parku Narodowym wydmy osiągają nawet około 40 m wysokości."
  },
  {
    id: "R04_REG_03",
    section: "Wybrzeże Bałtyku i Małopolska",
    type: "true_false",
    prompt: "Najwyższe klify wyspy Wolin mają ponad 90 m wysokości i są chronione w Wolińskim Parku Narodowym.",
    options: null,
    answer: true,
    image: "r04_wybrzeze_baltyku.jpg",
    explanation: "Klify na Wolinie wraz z fragmentami lasów objęto ochroną w Wolińskim Parku Narodowym."
  },
  {
    id: "R04_REG_04",
    section: "Wybrzeże Bałtyku i Małopolska",
    type: "scenario",
    prompt: "Osoba wybiera nadmorskie uzdrowisko ze względu na czyste powietrze nasycone jodem. Która miejscowość pasuje do tego celu?",
    options: ["Kołobrzeg", "Zakopane", "Wieliczka", "Toruń", "Malbork", "Kazimierz Dolny"],
    answer: 0,
    image: "r04_wybrzeze_baltyku.jpg",
    explanation: "Kołobrzeg jest jednym z popularnych nadmorskich uzdrowisk wykorzystujących walory klimatu i powietrza nasyconego jodem."
  },
  {
    id: "R04_REG_05",
    section: "Wybrzeże Bałtyku i Małopolska",
    type: "match",
    prompt: "Połącz miejsce z charakterystycznym walorem lub funkcją.",
    options: null,
    left: ["Kołobrzeg", "Słowiński Park Narodowy", "wyspa Wolin", "Mierzeja Helska"],
    right: ["uzdrowisko", "ruchome wydmy", "wysokie klify", "piaszczysta forma odcinająca wody Zatoki Puckiej"],
    answer: {
      "Kołobrzeg": "uzdrowisko",
      "Słowiński Park Narodowy": "ruchome wydmy",
      "wyspa Wolin": "wysokie klify",
      "Mierzeja Helska": "piaszczysta forma odcinająca wody Zatoki Puckiej"
    },
    image: "r04_wybrzeze_baltyku.jpg",
    explanation: "Wybrzeże Bałtyku łączy walory lecznicze, krajobrazowe i geomorfologiczne."
  },
  {
    id: "R04_REG_06",
    section: "Wybrzeże Bałtyku i Małopolska",
    type: "riddle",
    prompt: "Czas w ciągu doby, gdy tarczy słonecznej nie przesłaniają chmury, to...",
    options: null,
    answer: "usłonecznienie",
    altAnswers: ["usłonecznienie", "czas usłonecznienia"],
    image: "r04_wybrzeze_baltyku.jpg",
    explanation: "Duże usłonecznienie jest jednym z walorów wypoczynkowych polskiego wybrzeża."
  },
  {
    id: "R04_REG_07",
    section: "Wybrzeże Bałtyku i Małopolska",
    type: "single_choice",
    prompt: "Kiedy ruch turystyczny nad Morzem Bałtyckim jest największy?",
    options: ["latem", "zimą", "wyłącznie jesienią", "wyłącznie wczesną wiosną", "tylko w grudniu", "przez cały rok na jednakowym poziomie"],
    answer: 0,
    image: "r04_wybrzeze_baltyku.jpg",
    explanation: "Największy ruch turystyczny występuje latem; w lipcu i sierpniu na polskich plażach wypoczywa zwykle ponad 1,5 mln turystów."
  },
  {
    id: "R04_REG_08",
    section: "Wybrzeże Bałtyku i Małopolska",
    type: "multi_select",
    prompt: "Zaznacz walory kulturowe Małopolski.",
    options: [
      "Wawel",
      "Rynek Główny w Krakowie",
      "kopalnie soli w Wieliczce i Bochni",
      "Kalwaria Zebrzydowska",
      "Mierzeja Wiślana",
      "klify wyspy Wolin"
    ],
    answer: [0, 1, 2, 3],
    image: "r04_dziedzictwo_malopolski.jpg",
    explanation: "Małopolska przyciąga zabytkami Krakowa, kopalniami soli i zespołem w Kalwarii Zebrzydowskiej."
  },
  {
    id: "R04_REG_09",
    section: "Wybrzeże Bałtyku i Małopolska",
    type: "true_false",
    prompt: "W Małopolsce znajduje się ponad 5 tys. zabytków, w tym sześć wpisanych na Listę UNESCO.",
    options: null,
    answer: true,
    image: "r04_dziedzictwo_malopolski.jpg",
    explanation: "Duże nagromadzenie zabytków, w tym obiektów UNESCO, jest jednym z powodów popularności turystycznej Małopolski."
  },
  {
    id: "R04_REG_10",
    section: "Wybrzeże Bałtyku i Małopolska",
    type: "sort",
    prompt: "Przyporządkuj miejsca i walory do wybrzeża Bałtyku albo Małopolski.",
    options: null,
    items: ["Mierzeja Helska", "Słowiński Park Narodowy", "Kołobrzeg", "Wawel", "Wieliczka", "Tatry"],
    categories: ["wybrzeże Bałtyku", "Małopolska"],
    answer: {
      "wybrzeże Bałtyku": ["Mierzeja Helska", "Słowiński Park Narodowy", "Kołobrzeg"],
      "Małopolska": ["Wawel", "Wieliczka", "Tatry"]
    },
    image: "r04_dziedzictwo_malopolski.jpg",
    explanation: "Wybrzeże wyróżniają mierzeje, wydmy i uzdrowiska, a Małopolskę zabytki Krakowa, kopalnie soli oraz Karpaty z Tatrami."
  },
  {
    id: "R04_REG_11",
    section: "Wybrzeże Bałtyku i Małopolska",
    type: "odd_one_out",
    prompt: "Wskaż miejsce, które nie leży w Małopolsce: Wieliczka, Bochnia, Kalwaria Zebrzydowska, Mierzeja Helska.",
    options: null,
    answer: "Mierzeja Helska",
    image: "r04_dziedzictwo_malopolski.jpg",
    explanation: "Mierzeja Helska leży nad Bałtykiem, a pozostałe miejsca znajdują się w Małopolsce."
  },

  {
    id: "R04_HARD_01",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Na koniec 2023 roku drogi szybkiego ruchu miały ponad __________ km, w tym __________ km autostrad i __________ km dróg ekspresowych.",
    options: null,
    answer: ["5115", "1849", "3266"],
    altAnswers: [
      ["5115", "ponad 5115", "5115 km"],
      ["1849", "1849 km"],
      ["3266", "3266 km"]
    ],
    explanation: "Łączna długość dróg szybkiego ruchu przekroczyła 5115 km: 1849 km autostrad i 3266 km dróg ekspresowych."
  },
  {
    id: "R04_HARD_02",
    section: "Super trudne",
    type: "riddle",
    prompt: "Ile osób przeciętnie korzysta z warszawskiego metra w dzień powszedni?",
    options: null,
    answer: "685 tys. osób",
    altAnswers: ["685 tys. osób", "685 tys.", "685 tysięcy", "685000", "685 000"],
    explanation: "Z warszawskiego metra w dni powszednie korzysta przeciętnie 685 tys. osób."
  },
  {
    id: "R04_HARD_03",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz produkt lub surowiec z odpowiednim kierunkiem transportu albo miejscem obsługi.",
    options: null,
    left: ["węgiel kamienny koleją", "ropa Rurociągiem Pomorskim", "gaz Gazociągiem Bałtyckim", "promy pasażerskie"],
    right: [
      "z Górnego Śląska do portów",
      "z portu w Gdańsku do rafinerii",
      "z Norwegii do Polski",
      "z polskich portów do Szwecji"
    ],
    answer: {
      "węgiel kamienny koleją": "z Górnego Śląska do portów",
      "ropa Rurociągiem Pomorskim": "z portu w Gdańsku do rafinerii",
      "gaz Gazociągiem Bałtyckim": "z Norwegii do Polski",
      "promy pasażerskie": "z polskich portów do Szwecji"
    },
    explanation: "Różne surowce i pasażerowie są przewożeni odmiennymi środkami i trasami zależnie od infrastruktury."
  },
  {
    id: "R04_HARD_04",
    section: "Super trudne",
    type: "scenario",
    prompt: "Ładunek surowców energetycznych ma być przewieziony z Górnego Śląska do portów w Szczecinie, Gdańsku lub Gdyni. Który rodzaj transportu jest wykorzystywany do takiego przewozu?",
    options: ["kolejowy", "lotniczy", "śródlądowy wyłącznie Wisłą", "tramwajowy", "metrem", "rowerowy"],
    answer: 0,
    image: "r04_transport_ladowy_polska.jpg",
    explanation: "Koleją przewozi się surowce energetyczne z Górnego Śląska do portów w Szczecinie, Gdańsku i Gdyni."
  },
  {
    id: "R04_HARD_05",
    section: "Super trudne",
    type: "true_false",
    prompt: "Transport wodny ma w Polsce większe znaczenie w przewozie ładunków niż pasażerów.",
    options: null,
    answer: true,
    image: "r04_transport_wodny_odra.jpg",
    explanation: "Zarówno transport morski, jak i śródlądowy są ważniejsze dla przewozu ładunków niż pasażerów."
  },
  {
    id: "R04_HARD_06",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Jakie wpływy z turystyki osiągnęła Polska w 2024 roku?",
    options: [
      "około 15 mld dolarów amerykańskich",
      "około 1,5 mld dolarów amerykańskich",
      "około 50 mld euro",
      "około 100 mln zł",
      "około 20 mln euro",
      "około 120 mld dolarów amerykańskich"
    ],
    answer: 0,
    explanation: "W 2024 roku wpływy z turystyki w Polsce wyniosły około 15 mld dolarów amerykańskich."
  },
  {
    id: "R04_HARD_07",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz jednocześnie walory i ograniczenia wypoczynku nad Bałtykiem.",
    options: [
      "duże usłonecznienie",
      "piaszczyste plaże",
      "powietrze nasycone jodem",
      "zmienna pogoda",
      "chłodne wody Bałtyku",
      "stała temperatura wody powyżej 25°C"
    ],
    answer: [0, 1, 2, 3, 4],
    image: "r04_wybrzeze_baltyku.jpg",
    explanation: "Wybrzeże przyciąga plażami, słońcem i czystym powietrzem z jodem, choć pogoda bywa zmienna, a woda jest chłodna."
  },
  {
    id: "R04_HARD_08",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Wskaż element, który nie należy do transportu przesyłowego: gazociąg, rurociąg naftowy, linia energetyczna, terminal kontenerowy.",
    options: null,
    answer: "terminal kontenerowy",
    image: "r04_transport_przesylowy.jpg",
    explanation: "Terminal kontenerowy jest elementem transportu morskiego i logistyki, a pozostałe służą transportowi przesyłowemu."
  },
  {
    id: "R04_HARD_09",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż etapy obsługi kontenera od portu do odbiorcy w głębi lądu.",
    options: null,
    items: [
      "dostarczenie towaru odbiorcy",
      "magazynowanie i przygotowanie w centrum logistycznym",
      "rozładunek kontenera ze statku",
      "przewóz koleją lub ciężarówką"
    ],
    answer: [
      "rozładunek kontenera ze statku",
      "magazynowanie i przygotowanie w centrum logistycznym",
      "przewóz koleją lub ciężarówką",
      "dostarczenie towaru odbiorcy"
    ],
    image: "r04_logistyka_kontenerowa.jpg",
    explanation: "Po rozładunku portowym kontener może trafić do centrum logistycznego, a następnie koleją lub ciężarówką do odbiorcy."
  },
  {
    id: "R04_HARD_10",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz firmę z informacją o jej działalności zagranicznej.",
    options: null,
    left: ["PESA Bydgoszcz", "CD Projekt", "Mlekpol", "Nowy Styl"],
    right: [
      "pojazdy kursujące między innymi we Włoszech i Niemczech",
      "ponad 70 mln sprzedanych gier z serii o Wiedźminie do końca 2023 roku",
      "około 30% wyrobów kierowanych za granicę",
      "meble dostarczone do ponad 100 krajów"
    ],
    answer: {
      "PESA Bydgoszcz": "pojazdy kursujące między innymi we Włoszech i Niemczech",
      "CD Projekt": "ponad 70 mln sprzedanych gier z serii o Wiedźminie do końca 2023 roku",
      "Mlekpol": "około 30% wyrobów kierowanych za granicę",
      "Nowy Styl": "meble dostarczone do ponad 100 krajów"
    },
    image: "r04_polskie_produkty_eksportowe.jpg",
    explanation: "Każda firma osiągnęła sukces zagraniczny w innej branży: transporcie, grach, mleczarstwie lub meblarstwie."
  },
  {
    id: "R04_HARD_11",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Dodatnie saldo handlu zagranicznego po raz pierwszy od początku lat 90. XX wieku Polska osiągnęła w roku __________.",
    options: null,
    answer: ["2015"],
    altAnswers: [["2015", "2015 r.", "w 2015 roku"]],
    explanation: "Rok 2015 był pierwszym od początku lat 90. XX wieku, w którym wartość eksportu przewyższyła wartość importu."
  },
  {
    id: "R04_HARD_12",
    section: "Super trudne",
    type: "scenario",
    prompt: "Turysta odwiedza zespół architektoniczny i krajobrazowy w Kalwarii Zebrzydowskiej jako miejsce pielgrzymkowe. Jaki rodzaj turystyki ze względu na cel uprawia?",
    options: ["religijną", "biznesową", "leczniczą", "wyłącznie wypoczynkową", "zbiorową", "indywidualną"],
    answer: 0,
    image: "r04_dziedzictwo_malopolski.jpg",
    explanation: "Cel pielgrzymkowy oznacza turystykę religijną; zbiorowa i indywidualna opisują sposób organizacji, nie cel."
  },
  {
    id: "R04_HARD_13",
    section: "Super trudne",
    type: "sort",
    prompt: "Przyporządkuj walory do kategorii przyrodniczych i kulturowych.",
    options: null,
    items: [
      "klify Wolina",
      "wydmy Słowińskiego Parku Narodowego",
      "Tatry",
      "Wawel",
      "kopalnia soli w Wieliczce",
      "Szlak Architektury Drewnianej"
    ],
    categories: ["przyrodnicze", "kulturowe"],
    answer: {
      "przyrodnicze": ["klify Wolina", "wydmy Słowińskiego Parku Narodowego", "Tatry"],
      "kulturowe": ["Wawel", "kopalnia soli w Wieliczce", "Szlak Architektury Drewnianej"]
    },
    explanation: "Formy terenu i góry są walorami przyrodniczymi, natomiast zabytki oraz szlaki dziedzictwa należą do walorów kulturowych."
  },
  {
    id: "R04_HARD_14",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż miejsca od zachodu ku wschodowi Polski.",
    options: null,
    items: ["Gdańsk", "Szczecin", "Kraków", "Warszawa"],
    answer: ["Szczecin", "Gdańsk", "Kraków", "Warszawa"],
    explanation: "Najbardziej na zachód leży Szczecin, dalej Gdańsk, Kraków i Warszawa."
  },
  {
    id: "R04_HARD_15",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz województwa o najwyższym w Polsce wskaźniku intensywności ruchu turystycznego w 2023 roku.",
    options: [
      "małopolskie",
      "pomorskie",
      "zachodniopomorskie",
      "łódzkie",
      "opolskie",
      "lubuskie"
    ],
    answer: [0, 1, 2],
    image: "r04_mapa_ruchu_turystycznego.jpg",
    explanation: "Najwyższy wskaźnik liczby korzystających z noclegów na 100 mieszkańców występował w województwach małopolskim, pomorskim i zachodniopomorskim."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r04",
  number: 4,
  title: "Usługi w Polsce",
  icon: "🧭",
  sectionOrder: [
    "Usługi, transport i łączność",
    "Transport a rozwój Trójmiasta",
    "Handel zagraniczny",
    "Turystyka w Polsce",
    "Wybrzeże Bałtyku i Małopolska"
  ],
  sectionIcons: {
    "Usługi, transport i łączność": "🚆",
    "Transport a rozwój Trójmiasta": "⚓",
    "Handel zagraniczny": "🌍",
    "Turystyka w Polsce": "🧳",
    "Wybrzeże Bałtyku i Małopolska": "🏖️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
