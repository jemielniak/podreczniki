// Skróty sekcji (do identyfikatorów ćwiczeń):
//   REG  = Region i mała ojczyzna
//   SGR  = Środowisko i gospodarka regionu
//   ZAL  = Zależności w środowisku geograficznym
//   PRO  = Zwiedzanie i promocja
//   MIE  = Miejsce zamieszkania i lokalne zmiany
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R08_REG_01",
    section: "Region i mała ojczyzna",
    type: "single_choice",
    prompt: "Czym jest region?",
    options: ["Obszarem wyróżnionym ze względu na charakterystyczne cechy", "Wyłącznie obszarem jednego województwa", "Każdym krajem należącym do Unii Europejskiej", "Tylko miejscem położonym w górach", "Obszarem zamieszkanym przez jedną rodzinę", "Jednostką mniejszą od dzielnicy"],
    answer: 0,
    explanation: "Region to obszar wyszczególniony ze względu na charakterystyczne cechy, na przykład przyrodnicze, etnograficzne lub historyczne.",
    image: "r08_regiony_historyczno_etnograficzne.jpg"
  },
  {
    id: "R08_REG_02",
    section: "Region i mała ojczyzna",
    type: "single_choice",
    prompt: "Który opis najlepiej wyjaśnia pojęcie małej ojczyzny?",
    options: ["Niewielki bliski nam obszar związany z emocjami oraz więzami kulturowymi i historycznymi", "Każdy region wyznaczony wyłącznie przez granice administracyjne", "Państwo zamieszkania każdego człowieka", "Najbliższy park narodowy", "Miejsce urodzenia rodziców bez względu na nasze związki z nim", "Dowolna miejscowość odwiedzona podczas wakacji"],
    answer: 0,
    explanation: "Mała ojczyzna to niewielki obszar, z którym czujemy silną więź emocjonalną i mamy powiązania kulturowe oraz historyczne. Może nią być wieś, miasto, dzielnica lub region.",
    image: "r08_regiony_historyczno_etnograficzne.jpg"
  },
  {
    id: "R08_REG_03",
    section: "Region i mała ojczyzna",
    type: "true_false",
    prompt: "Regiony można wyróżniać zarówno według cech przyrodniczych, jak i kulturowych lub historycznych.",
    options: null,
    answer: true,
    explanation: "Podział na regiony może opierać się na różnych kryteriach, w tym przyrodniczych, kulturowych, etnograficznych i historycznych."
  },
  {
    id: "R08_REG_04",
    section: "Region i mała ojczyzna",
    type: "multi_select",
    prompt: "Zaznacz cechy, które mogą służyć do wyróżniania regionów.",
    options: ["Cechy przyrodnicze", "Cechy etnograficzne", "Cechy historyczne", "Losowo wybrany numer domu", "Kolor samochodów mieszkańców"],
    answer: [0, 1, 2],
    explanation: "Regiony wyróżnia się na podstawie charakterystycznych cech, między innymi przyrodniczych, etnograficznych i historycznych."
  },
  {
    id: "R08_REG_05",
    section: "Region i mała ojczyzna",
    type: "fill_in",
    prompt: "Mała ojczyzna to niewielki obszar, z którym czujemy silną więź __________.",
    options: null,
    answer: ["emocjonalną"],
    altAnswers: [["emocjonalną", "emocjonalna"]],
    explanation: "O małej ojczyźnie decyduje między innymi silna więź emocjonalna z bliskim nam obszarem."
  },
  {
    id: "R08_REG_06",
    section: "Region i mała ojczyzna",
    type: "riddle",
    prompt: "Nauka opisująca tradycyjną kulturę różnych ludów to...",
    options: null,
    answer: "etnografia",
    altAnswers: ["etnografia", "etnografią"],
    explanation: "Etnografia zajmuje się opisywaniem tradycyjnej kultury różnych ludów."
  },
  {
    id: "R08_REG_07",
    section: "Region i mała ojczyzna",
    type: "odd_one_out",
    prompt: "Co nie jest typowym źródłem wiedzy o własnym regionie: mapa tematyczna, rozmowa z mieszkańcem, przewodnik turystyczny, losowanie wyniku kostką.",
    options: null,
    answer: "losowanie wyniku kostką",
    explanation: "Mapy, rozmowy z mieszkańcami i przewodniki są źródłami informacji o regionie, natomiast losowanie nie dostarcza wiarygodnej wiedzy.",
    image: "r08_zrodla_wiedzy_o_regionie.jpg"
  },
  {
    id: "R08_REG_08",
    section: "Region i mała ojczyzna",
    type: "match",
    prompt: "Połącz źródło informacji z przykładem wiedzy, którą można dzięki niemu zdobyć.",
    options: null,
    left: ["Mapa tematyczna", "Rozmowa z mieszkańcem", "Bank Danych Lokalnych GUS", "Własna obserwacja"],
    right: ["Rozmieszczenie zjawiska na obszarze", "Wspomnienia o lokalnej tradycji", "Dane statystyczne o gminie", "Stan najbliższego otoczenia"],
    answer: {
      "Mapa tematyczna": "Rozmieszczenie zjawiska na obszarze",
      "Rozmowa z mieszkańcem": "Wspomnienia o lokalnej tradycji",
      "Bank Danych Lokalnych GUS": "Dane statystyczne o gminie",
      "Własna obserwacja": "Stan najbliższego otoczenia"
    },
    explanation: "Różne źródła uzupełniają się: mapy pokazują rozmieszczenie zjawisk, mieszkańcy przekazują wiedzę lokalną, BDL GUS dane statystyczne, a obserwacja pozwala ocenić otoczenie.",
    image: "r08_zrodla_wiedzy_o_regionie.jpg"
  },
  {
    id: "R08_REG_09",
    section: "Region i mała ojczyzna",
    type: "sort",
    prompt: "Przyporządkuj źródła wiedzy o regionie do właściwych kategorii.",
    options: null,
    items: ["własne obserwacje", "rozmowy z mieszkańcami", "ankiety", "mapy tematyczne", "książki geograficzne", "bazy danych"],
    categories: ["pozyskiwane bezpośrednio w regionie", "gotowe opracowania i zbiory danych"],
    answer: {
      "pozyskiwane bezpośrednio w regionie": ["własne obserwacje", "rozmowy z mieszkańcami", "ankiety"],
      "gotowe opracowania i zbiory danych": ["mapy tematyczne", "książki geograficzne", "bazy danych"]
    },
    explanation: "Obserwacje, rozmowy i ankiety pozwalają samodzielnie zebrać informacje, a mapy, książki i bazy danych są już opracowanymi źródłami."
  },
  {
    id: "R08_REG_10",
    section: "Region i mała ojczyzna",
    type: "scenario",
    prompt: "Chcesz poznać wspomnienia o dawnych zwyczajach w swojej miejscowości. Które działanie będzie najbardziej użyteczne?",
    options: ["Rozmowa ze starszymi mieszkańcami", "Sprawdzenie prognozy pogody", "Pomiar temperatury wody", "Obliczenie kosztu biletu", "Odczytanie wysokości z mapy", "Policzenie samochodów na parkingu"],
    answer: 0,
    explanation: "Rozmowy z mieszkańcami są cennym źródłem wiedzy o lokalnej historii, tradycjach i zmianach zachodzących w małej ojczyźnie."
  },
  {
    id: "R08_REG_11",
    section: "Region i mała ojczyzna",
    type: "sequence",
    prompt: "Ułóż działania prowadzące do sprawdzenia liczby szkół podstawowych w gminie w BDL GUS.",
    options: null,
    items: ["Wybierz najnowszy rok i przejdź dalej", "Wpisz nazwę gminy i wybierz właściwą jednostkę", "Otwórz stronę BDL GUS", "Wybierz dane dla jednostki terytorialnej", "Znajdź kategorię szkolnictwo i dane o szkołach podstawowych"],
    answer: ["Otwórz stronę BDL GUS", "Wybierz dane dla jednostki terytorialnej", "Wpisz nazwę gminy i wybierz właściwą jednostkę", "Znajdź kategorię szkolnictwo i dane o szkołach podstawowych", "Wybierz najnowszy rok i przejdź dalej"],
    explanation: "W BDL GUS najpierw wybiera się dane dla jednostki terytorialnej, następnie gminę, kategorię tematyczną, właściwy wskaźnik i rok.",
    image: "r08_bank_danych_lokalnych.jpg"
  },

  {
    id: "R08_SGR_01",
    section: "Środowisko i gospodarka regionu",
    type: "multi_select",
    prompt: "Które elementy należy uwzględnić w opisie środowiska przyrodniczego regionu?",
    options: ["Ukształtowanie terenu", "Klimat", "Wody", "Gleby", "Roślinność", "Cena biletów do kina"],
    answer: [0, 1, 2, 3, 4],
    explanation: "Opis środowiska przyrodniczego powinien obejmować między innymi położenie, rzeźbę terenu, klimat, wody, gleby i roślinność.",
    image: "r08_srodowisko_przyrodnicze_regionu.jpg"
  },
  {
    id: "R08_SGR_02",
    section: "Środowisko i gospodarka regionu",
    type: "match",
    prompt: "Połącz składnik opisu środowiska z informacją, którą należy dla niego ustalić.",
    options: null,
    left: ["Położenie geograficzne", "Ukształtowanie terenu", "Klimat", "Wody", "Roślinność"],
    right: ["Województwo i współrzędne", "Wysokość i pas krajobrazowy", "Temperatury i suma opadów", "Zlewisko oraz największe rzeki i jeziora", "Lesistość i duże obszary leśne"],
    answer: {
      "Położenie geograficzne": "Województwo i współrzędne",
      "Ukształtowanie terenu": "Wysokość i pas krajobrazowy",
      "Klimat": "Temperatury i suma opadów",
      "Wody": "Zlewisko oraz największe rzeki i jeziora",
      "Roślinność": "Lesistość i duże obszary leśne"
    },
    explanation: "Każdy element środowiska opisuje się za pomocą właściwych cech i danych, na przykład klimat za pomocą temperatur i opadów."
  },
  {
    id: "R08_SGR_03",
    section: "Środowisko i gospodarka regionu",
    type: "single_choice",
    prompt: "Która informacja najlepiej opisuje rolnictwo regionu?",
    options: ["Największe uprawy i najliczniej hodowane zwierzęta", "Liczba kin i teatrów", "Liczba zakładów przemysłowych", "Liczba zabytków", "Wysokość nad poziomem morza", "Roczna liczba koncertów"],
    answer: 0,
    explanation: "W charakterystyce rolnictwa uwzględnia się między innymi zatrudnienie, największe uprawy i najliczniej hodowane zwierzęta."
  },
  {
    id: "R08_SGR_04",
    section: "Środowisko i gospodarka regionu",
    type: "single_choice",
    prompt: "Która informacja dotyczy przemysłu regionu?",
    options: ["Obecność zagłębia surowcowego", "Liczba szpitali", "Roczna liczba turystów zagranicznych", "Liczba supermarketów", "Powierzchnia parków miejskich", "Liczba bibliotek"],
    answer: 0,
    explanation: "Przemysł regionu opisuje się między innymi przez udział zatrudnionych, obecność surowców mineralnych i zagłębi surowcowych."
  },
  {
    id: "R08_SGR_05",
    section: "Środowisko i gospodarka regionu",
    type: "single_choice",
    prompt: "Który wskaźnik należy do opisu usług?",
    options: ["Liczba szpitali", "Długość okresu wegetacyjnego", "Rodzaj gleby", "Obecność lądolodu w przeszłości", "Wysokość bezwzględna", "Typ surowca w zagłębiu"],
    answer: 0,
    explanation: "Do usług należą między innymi ochrona zdrowia, handel i turystyka, dlatego liczba szpitali jest wskaźnikiem sektora usług."
  },
  {
    id: "R08_SGR_06",
    section: "Środowisko i gospodarka regionu",
    type: "true_false",
    prompt: "Opis gospodarki regionu powinien uwzględniać rolnictwo, przemysł i usługi.",
    options: null,
    answer: true,
    explanation: "Pełna charakterystyka gospodarki obejmuje wszystkie trzy sektory: rolnictwo, przemysł i usługi.",
    image: "r08_trzy_sektory_gospodarki.jpg"
  },
  {
    id: "R08_SGR_07",
    section: "Środowisko i gospodarka regionu",
    type: "sort",
    prompt: "Przyporządkuj informacje do sektorów gospodarki.",
    options: null,
    items: ["największe uprawy", "najliczniej hodowane zwierzęta", "zagłębie surowcowe", "zatrudnienie w przemyśle", "liczba szpitali", "liczba supermarketów"],
    categories: ["rolnictwo", "przemysł", "usługi"],
    answer: {
      "rolnictwo": ["największe uprawy", "najliczniej hodowane zwierzęta"],
      "przemysł": ["zagłębie surowcowe", "zatrudnienie w przemyśle"],
      "usługi": ["liczba szpitali", "liczba supermarketów"]
    },
    explanation: "Uprawy i hodowla należą do rolnictwa, wydobycie surowców i produkcja do przemysłu, a szpitale i handel do usług.",
    image: "r08_trzy_sektory_gospodarki.jpg"
  },
  {
    id: "R08_SGR_08",
    section: "Środowisko i gospodarka regionu",
    type: "fill_in",
    prompt: "Skrót BDL GUS oznacza Bank Danych Lokalnych __________.",
    options: null,
    answer: ["Głównego Urzędu Statystycznego"],
    altAnswers: [["Głównego Urzędu Statystycznego", "GUS"]],
    explanation: "BDL GUS to Bank Danych Lokalnych Głównego Urzędu Statystycznego, zawierający dane statystyczne o jednostkach terytorialnych.",
    image: "r08_bank_danych_lokalnych.jpg"
  },
  {
    id: "R08_SGR_09",
    section: "Środowisko i gospodarka regionu",
    type: "scenario",
    prompt: "Uczeń chce ustalić średnią roczną sumę opadów w swoim regionie. Od którego źródła powinien zacząć?",
    options: ["Od mapy klimatycznej", "Od rozkładu jazdy autobusów", "Od spisu kin", "Od cennika muzeum", "Od ankiety o ulubionych potrawach", "Od mapy sklepów"],
    answer: 0,
    explanation: "Mapy klimatyczne przedstawiają przestrzenne zróżnicowanie temperatur i sum opadów, dlatego są właściwym źródłem do rozpoczęcia takiej analizy."
  },
  {
    id: "R08_SGR_10",
    section: "Środowisko i gospodarka regionu",
    type: "odd_one_out",
    prompt: "Co nie jest elementem środowiska przyrodniczego: klimat, wody, gleby, roślinność, supermarket.",
    options: null,
    answer: "supermarket",
    explanation: "Klimat, wody, gleby i roślinność są elementami naturalnymi, natomiast supermarket jest obiektem stworzonym przez człowieka."
  },
  {
    id: "R08_SGR_11",
    section: "Środowisko i gospodarka regionu",
    type: "match",
    prompt: "Połącz potrzebną informację z odpowiednim źródłem.",
    options: null,
    left: ["Zasięg zlodowaceń", "Typy gleb", "Lesistość województwa", "Liczba szpitali"],
    right: ["Mapa zasięgów zlodowaceń", "Mapa gleb", "Mapa lesistości", "Bank Danych Lokalnych GUS"],
    answer: {
      "Zasięg zlodowaceń": "Mapa zasięgów zlodowaceń",
      "Typy gleb": "Mapa gleb",
      "Lesistość województwa": "Mapa lesistości",
      "Liczba szpitali": "Bank Danych Lokalnych GUS"
    },
    explanation: "Mapy tematyczne służą do badania rozmieszczenia zjawisk przyrodniczych, a BDL GUS dostarcza danych statystycznych o obiektach i usługach."
  },

  {
    id: "R08_ZAL_01",
    section: "Zależności w środowisku geograficznym",
    type: "single_choice",
    prompt: "Co obejmuje środowisko geograficzne?",
    options: ["Środowisko przyrodnicze oraz elementy stworzone przez człowieka", "Wyłącznie elementy naturalne", "Tylko zabudowę i drogi", "Wyłącznie klimat i wody", "Tylko obszary chronione", "Jedynie gospodarkę regionu"],
    answer: 0,
    explanation: "Środowisko geograficzne tworzą zarówno elementy środowiska przyrodniczego, jak i obiekty oraz przekształcenia powstałe w wyniku działalności człowieka."
  },
  {
    id: "R08_ZAL_02",
    section: "Zależności w środowisku geograficznym",
    type: "true_false",
    prompt: "Fale morskie mogą podcinać wysoki brzeg i prowadzić do powstania stromego klifu.",
    options: null,
    answer: true,
    explanation: "Podcinanie brzegu przez fale powoduje jego obrywanie, a w rezultacie tworzenie się stromego klifu.",
    image: "r08_klif_nad_morzem.jpg"
  },
  {
    id: "R08_ZAL_03",
    section: "Zależności w środowisku geograficznym",
    type: "match",
    prompt: "Połącz czynnik z jego skutkiem.",
    options: null,
    left: ["Duża wysokość nad poziomem morza", "Bliskość zbiornika wodnego", "Umieszczenie budynku na nachylonym terenie", "Bliskość parku narodowego"],
    right: ["Niższa temperatura i wyższe opady", "Rozwój infrastruktury turystycznej", "Trudniejsze warunki zabudowy", "Większa atrakcyjność turystyczna okolicy"],
    answer: {
      "Duża wysokość nad poziomem morza": "Niższa temperatura i wyższe opady",
      "Bliskość zbiornika wodnego": "Rozwój infrastruktury turystycznej",
      "Umieszczenie budynku na nachylonym terenie": "Trudniejsze warunki zabudowy",
      "Bliskość parku narodowego": "Większa atrakcyjność turystyczna okolicy"
    },
    explanation: "Elementy środowiska wpływają na warunki klimatyczne, możliwości zabudowy oraz rozwój turystyki."
  },
  {
    id: "R08_ZAL_04",
    section: "Zależności w środowisku geograficznym",
    type: "scenario",
    prompt: "Nowe osiedle zaplanowano tuż przy rzece na obszarze, który może zostać zalany. Jakie zagrożenie należy uwzględnić przede wszystkim?",
    options: ["Powódź", "Trzęsienie ziemi", "Erupcję wulkanu", "Lawinę śnieżną", "Burzę piaskową", "Tsunami"],
    answer: 0,
    explanation: "Zabudowa i obszary rolnicze położone blisko rzeki mogą być narażone na powódź.",
    image: "r08_zabudowa_przy_rzece.jpg"
  },
  {
    id: "R08_ZAL_05",
    section: "Zależności w środowisku geograficznym",
    type: "multi_select",
    prompt: "Zaznacz typowe skutki dużej wysokości nad poziomem morza w górach.",
    options: ["Niższa średnia temperatura", "Wyższe opady niż na nizinach", "Krótszy okres wegetacyjny", "Zawsze większa liczba supermarketów", "Brak nachyleń terenu"],
    answer: [0, 1, 2],
    explanation: "Wraz ze wzrostem wysokości temperatura spada, opady zwykle rosną, a niższe temperatury skracają okres wegetacyjny.",
    image: "r08_gory_a_klimat.jpg"
  },
  {
    id: "R08_ZAL_06",
    section: "Zależności w środowisku geograficznym",
    type: "odd_one_out",
    prompt: "Co nie pasuje do skutków obecności jeziora lub terenu podmokłego: więcej owadów latem, możliwość rozwoju turystyki, obecność wody, większa wysokość gór.",
    options: null,
    answer: "większa wysokość gór",
    explanation: "Jezioro lub teren podmokły wpływa na obecność wody, owadów i możliwości rekreacji, ale nie zwiększa wysokości gór."
  },
  {
    id: "R08_ZAL_07",
    section: "Zależności w środowisku geograficznym",
    type: "fill_in",
    prompt: "Stromy brzeg morski powstający wskutek podcinania i obrywania brzegu to __________.",
    options: null,
    answer: ["klif"],
    altAnswers: [["klif", "klif morski"]],
    explanation: "Fale podcinają wysoki brzeg, który się obrywa, tworząc stromy klif.",
    image: "r08_klif_nad_morzem.jpg"
  },
  {
    id: "R08_ZAL_08",
    section: "Zależności w środowisku geograficznym",
    type: "sort",
    prompt: "Podziel elementy środowiska geograficznego na naturalne i stworzone przez człowieka.",
    options: null,
    items: ["rzeka", "las", "klimat", "droga", "budynek", "pole uprawne"],
    categories: ["elementy naturalne", "elementy stworzone lub przekształcone przez człowieka"],
    answer: {
      "elementy naturalne": ["rzeka", "las", "klimat"],
      "elementy stworzone lub przekształcone przez człowieka": ["droga", "budynek", "pole uprawne"]
    },
    explanation: "Rzeka, las i klimat należą do środowiska przyrodniczego, a droga, budynek i pole uprawne są skutkiem działalności człowieka."
  },
  {
    id: "R08_ZAL_09",
    section: "Zależności w środowisku geograficznym",
    type: "sequence",
    prompt: "Ułóż etapy powstawania klifu w logicznej kolejności.",
    options: null,
    items: ["Powstaje stromy klif", "Fale uderzają w wysoki brzeg", "Podstawa brzegu zostaje podcięta", "Fragment brzegu obrywa się"],
    answer: ["Fale uderzają w wysoki brzeg", "Podstawa brzegu zostaje podcięta", "Fragment brzegu obrywa się", "Powstaje stromy klif"],
    explanation: "Działanie fal podcina brzeg, prowadzi do jego obrywania i powstania stromej ściany klifu.",
    image: "r08_klif_nad_morzem.jpg"
  },
  {
    id: "R08_ZAL_10",
    section: "Zależności w środowisku geograficznym",
    type: "scenario",
    prompt: "W miejscowości nad jeziorem pojawiły się wypożyczalnie kajaków, kąpielisko i pensjonaty. Jaką zależność pokazuje ta sytuacja?",
    options: ["Wpływ wody na rozwój infrastruktury turystycznej", "Wpływ przemysłu na wysokość gór", "Wpływ bibliotek na opady", "Wpływ gleby na liczbę kin", "Wpływ dróg na powstanie jeziora", "Wpływ szkół na temperaturę"],
    answer: 0,
    explanation: "Obecność jeziora może zwiększać atrakcyjność turystyczną i sprzyjać rozwojowi usług oraz infrastruktury rekreacyjnej."
  },
  {
    id: "R08_ZAL_11",
    section: "Zależności w środowisku geograficznym",
    type: "match",
    prompt: "Połącz zależność z odpowiednim przykładem.",
    options: null,
    left: ["Woda wpływa na rzeźbę terenu", "Rzeźba terenu wpływa na klimat", "Człowiek wpływa na wody", "Podłoże wpływa na zabudowę"],
    right: ["Fale tworzą klif", "W górach jest chłodniej", "Zabudowa przy rzece zwiększa ryzyko strat powodziowych", "Stromy stok utrudnia budowę"],
    answer: {
      "Woda wpływa na rzeźbę terenu": "Fale tworzą klif",
      "Rzeźba terenu wpływa na klimat": "W górach jest chłodniej",
      "Człowiek wpływa na wody": "Zabudowa przy rzece zwiększa ryzyko strat powodziowych",
      "Podłoże wpływa na zabudowę": "Stromy stok utrudnia budowę"
    },
    explanation: "Środowisko geograficzne jest systemem zależności, w którym elementy naturalne i działalność człowieka wzajemnie na siebie oddziałują."
  },

  {
    id: "R08_PRO_01",
    section: "Zwiedzanie i promocja",
    type: "single_choice",
    prompt: "Jak długo powinien trwać proponowany film promujący małą ojczyznę?",
    options: ["2-4 minuty", "10-15 sekund", "20-30 minut", "Około godziny", "Co najmniej dwie godziny", "Dokładnie 45 minut"],
    answer: 0,
    explanation: "Krótki film promujący miejsce powinien trwać 2-4 minuty, aby zwięźle i atrakcyjnie przedstawić jego walory."
  },
  {
    id: "R08_PRO_02",
    section: "Zwiedzanie i promocja",
    type: "sequence",
    prompt: "Ułóż elementy przykładowego filmu promocyjnego w odpowiedniej kolejności.",
    options: null,
    items: ["Podziękowanie i ponowne zaproszenie", "Tytuł i zaproszenie do zwiedzania", "Krótkie filmy lub zdjęcia z komentarzem", "Mapa pokazująca położenie miejsca"],
    answer: ["Tytuł i zaproszenie do zwiedzania", "Mapa pokazująca położenie miejsca", "Krótkie filmy lub zdjęcia z komentarzem", "Podziękowanie i ponowne zaproszenie"],
    explanation: "Film rozpoczyna się tytułem i zaproszeniem, następnie lokalizuje miejsce na mapie, prezentuje atrakcje i kończy się podziękowaniem oraz zaproszeniem.",
    image: "r08_film_promujacy_region.jpg"
  },
  {
    id: "R08_PRO_03",
    section: "Zwiedzanie i promocja",
    type: "multi_select",
    prompt: "Które elementy mogą być atrakcjami małej ojczyzny?",
    options: ["Lokalne tradycje", "Park lub las", "Zabytek", "Trasa rowerowa", "Wydarzenie kulturalne", "Wyłącznie obiekt znany na całym świecie"],
    answer: [0, 1, 2, 3, 4],
    explanation: "Atrakcjami mogą być walory przyrodnicze, historia, lokalna kultura, rekreacja, wydarzenia oraz ciekawe miejsca codziennego życia.",
    image: "r08_atrakcje_malej_ojczyzny.jpg"
  },
  {
    id: "R08_PRO_04",
    section: "Zwiedzanie i promocja",
    type: "scenario",
    prompt: "Planujesz jednodniową wycieczkę dla rodzin z dziećmi. Który plan jest najlepiej dostosowany do uczestników i warunków wycieczki?",
    options: ["Kilka różnorodnych miejsc dobranych do wieku i sprawności uczestników", "Wyłącznie najtrudniejszy szlak bez przerw", "Losowa trasa bez sprawdzenia godzin otwarcia", "Trasa dobrana tylko do zainteresowań organizatora", "Wyprawa bez określonej godziny zakończenia", "Zwiedzanie miejsc bez sprawdzenia możliwości dojazdu"],
    answer: 0,
    explanation: "Trasę należy dostosować do liczby, wieku, sprawności i zainteresowań uczestników oraz zaplanować czas, przerwy i dostępność atrakcji.",
    image: "r08_planowanie_wycieczki.jpg"
  },
  {
    id: "R08_PRO_05",
    section: "Zwiedzanie i promocja",
    type: "true_false",
    prompt: "Prognozę pogody warto sprawdzić ponownie dzień przed wycieczką, ponieważ bliżej terminu zwykle jest bardziej sprawdzalna.",
    options: null,
    answer: true,
    explanation: "Warunki mogą się zmieniać, a prognozy są zazwyczaj dokładniejsze bliżej terminu wycieczki."
  },
  {
    id: "R08_PRO_06",
    section: "Zwiedzanie i promocja",
    type: "match",
    prompt: "Połącz pytanie organizacyjne z elementem planowania wycieczki.",
    options: null,
    left: ["Z kim?", "Dokąd?", "Kiedy?", "Jak będziemy zwiedzać?", "Jaki będzie koszt?"],
    right: ["Wiek i sprawność uczestników", "Wybór obszaru i miejsc", "Data oraz godziny i przerwy", "Dostępność oraz środki transportu", "Przejazdy wstępy i inne wydatki"],
    answer: {
      "Z kim?": "Wiek i sprawność uczestników",
      "Dokąd?": "Wybór obszaru i miejsc",
      "Kiedy?": "Data oraz godziny i przerwy",
      "Jak będziemy zwiedzać?": "Dostępność oraz środki transportu",
      "Jaki będzie koszt?": "Przejazdy wstępy i inne wydatki"
    },
    explanation: "Dobry plan wycieczki uwzględnia uczestników, trasę, termin, sposób przemieszczania się i pełny kosztorys.",
    image: "r08_planowanie_wycieczki.jpg"
  },
  {
    id: "R08_PRO_07",
    section: "Zwiedzanie i promocja",
    type: "sort",
    prompt: "Przyporządkuj wyposażenie do głównego zastosowania.",
    options: null,
    items: ["kurtka przeciwdeszczowa", "krem z filtrem UV", "apteczka", "woda", "mapa papierowa", "powerbank"],
    categories: ["ochrona przed pogodą", "bezpieczeństwo i zdrowie", "orientacja i łączność"],
    answer: {
      "ochrona przed pogodą": ["kurtka przeciwdeszczowa", "krem z filtrem UV"],
      "bezpieczeństwo i zdrowie": ["apteczka", "woda"],
      "orientacja i łączność": ["mapa papierowa", "powerbank"]
    },
    explanation: "Ekwipunek powinien chronić przed pogodą, wspierać zdrowie i bezpieczeństwo oraz umożliwiać orientację i korzystanie z urządzeń.",
    image: "r08_ekwipunek_wycieczkowy.jpg"
  },
  {
    id: "R08_PRO_08",
    section: "Zwiedzanie i promocja",
    type: "odd_one_out",
    prompt: "Co nie należy do zalecanego ekwipunku wycieczkowego: apteczka, woda, mapa papierowa, powerbank, telewizor.",
    options: null,
    answer: "telewizor",
    explanation: "Apteczka, woda, mapa i powerbank mogą być potrzebne w terenie, natomiast telewizor nie jest elementem wyposażenia wycieczkowego.",
    image: "r08_ekwipunek_wycieczkowy.jpg"
  },
  {
    id: "R08_PRO_09",
    section: "Zwiedzanie i promocja",
    type: "riddle",
    prompt: "Jaki rodzaj mapy warto zabrać jako niezależne od zasięgu źródło orientacji?",
    options: null,
    answer: "mapa papierowa",
    altAnswers: ["mapa papierowa", "papierowa mapa", "mapę papierową"],
    explanation: "Mapa papierowa działa bez telefonu, internetu i zasięgu, dlatego stanowi ważne zabezpieczenie podczas wycieczki.",
    image: "r08_ekwipunek_wycieczkowy.jpg"
  },
  {
    id: "R08_PRO_10",
    section: "Zwiedzanie i promocja",
    type: "single_choice",
    prompt: "Co należy uwzględnić w kosztorysie wycieczki?",
    options: ["Przejazdy wstępy usługi przewodnika oraz kupowane jedzenie i picie", "Wyłącznie cenę pierwszego biletu", "Tylko koszt paliwa organizatora", "Jedynie opłatę za parking", "Wyłącznie cenę pamiątek", "Tylko wydatki poniesione po powrocie"],
    answer: 0,
    explanation: "Kosztorys powinien obejmować wszystkie przewidywane wydatki, w tym transport, bilety wstępu, przewodnika oraz kupowane jedzenie i picie."
  },
  {
    id: "R08_PRO_11",
    section: "Zwiedzanie i promocja",
    type: "scenario",
    prompt: "Przed wycieczką w góry organizator zauważa, że część uczestników ma słabszą kondycję. Co powinien zrobić?",
    options: ["Dostosować trudność i długość trasy do możliwości grupy", "Zachować najtrudniejszą trasę bez zmian", "Zrezygnować z przerw", "Nie informować uczestników o przebiegu trasy", "Rozpocząć wycieczkę bez określenia godziny powrotu", "Zabrać tylko mapę w telefonie"],
    answer: 0,
    explanation: "Plan trasy powinien uwzględniać wiek i sprawność fizyczną wszystkich uczestników."
  },

  {
    id: "R08_MIE_01",
    section: "Miejsce zamieszkania i lokalne zmiany",
    type: "multi_select",
    prompt: "Które czynniki pomagają ocenić jakość miejsca zamieszkania?",
    options: ["Jakość środowiska", "Dostęp do szkół", "Dostęp do ochrony zdrowia", "Dostęp do kultury i sportu", "Dostępność usług", "Kolor wszystkich dachów"],
    answer: [0, 1, 2, 3, 4],
    explanation: "Ocena miejsca zamieszkania obejmuje jakość środowiska oraz dostęp do edukacji, ochrony zdrowia, kultury, sportu i innych usług."
  },
  {
    id: "R08_MIE_02",
    section: "Miejsce zamieszkania i lokalne zmiany",
    type: "true_false",
    prompt: "Bliskość parku, lasu lub jeziora może być zaletą miejsca zamieszkania.",
    options: null,
    answer: true,
    explanation: "Dostęp do zieleni i elementów przyrody może poprawiać warunki życia, wypoczynku i ocenę najbliższego otoczenia."
  },
  {
    id: "R08_MIE_03",
    section: "Miejsce zamieszkania i lokalne zmiany",
    type: "single_choice",
    prompt: "Który element należy do oceny atrakcyjności gospodarczej małej ojczyzny?",
    options: ["Obecność inwestycji i dobre skomunikowanie", "Wyłącznie liczba drzew w parku", "Tylko średnia temperatura lipca", "Wyłącznie rodzaj skał", "Tylko liczba jezior", "Wyłącznie wysokość nad poziomem morza"],
    answer: 0,
    explanation: "Atrakcyjność gospodarcza zależy między innymi od struktury gospodarki, obecności inwestycji i połączeń drogowych, kolejowych, lotniczych lub morskich."
  },
  {
    id: "R08_MIE_04",
    section: "Miejsce zamieszkania i lokalne zmiany",
    type: "match",
    prompt: "Połącz problem z jego możliwym skutkiem.",
    options: null,
    left: ["Dużo betonu i mało zieleni", "Słaba komunikacja", "Brak przychodni", "Brak obiektów sportowych"],
    right: ["Silne nagrzewanie powierzchni i mała retencja", "Trudniejszy dojazd", "Gorszy dostęp do ochrony zdrowia", "Mniej możliwości aktywności fizycznej"],
    answer: {
      "Dużo betonu i mało zieleni": "Silne nagrzewanie powierzchni i mała retencja",
      "Słaba komunikacja": "Trudniejszy dojazd",
      "Brak przychodni": "Gorszy dostęp do ochrony zdrowia",
      "Brak obiektów sportowych": "Mniej możliwości aktywności fizycznej"
    },
    explanation: "Rozpoznanie skutków lokalnych problemów pomaga zaproponować rozwiązania poprawiające jakość życia."
  },
  {
    id: "R08_MIE_05",
    section: "Miejsce zamieszkania i lokalne zmiany",
    type: "scenario",
    prompt: "Plac między budynkami jest niemal całkowicie pokryty betonem, latem mocno się nagrzewa i nie zatrzymuje wody. Które rozwiązanie najlepiej poprawi warunki na tym placu?",
    options: ["Posadzenie drzew i krzewów oraz utworzenie trawników", "Dobudowanie kolejnej betonowej płyty", "Usunięcie pozostałych roślin", "Zwiększenie powierzchni parkingu bez zieleni", "Pomalowanie betonu na ciemniejszy kolor", "Zamknięcie placu bez żadnych zmian"],
    answer: 0,
    explanation: "Wprowadzenie roślinności poprawia estetykę, ogranicza nagrzewanie i wspiera retencję wody.",
    image: "r08_zabetonowany_plac.jpg"
  },
  {
    id: "R08_MIE_06",
    section: "Miejsce zamieszkania i lokalne zmiany",
    type: "sort",
    prompt: "Przyporządkuj kryteria do oceny miejsca zamieszkania lub atrakcyjności gospodarczej.",
    options: null,
    items: ["poziom hałasu", "dostęp do szkół", "dostęp do obiektów sportowych", "udział sektorów gospodarki", "nowe inwestycje", "połączenia kolejowe"],
    categories: ["ocena codziennych warunków życia", "ocena atrakcyjności gospodarczej"],
    answer: {
      "ocena codziennych warunków życia": ["poziom hałasu", "dostęp do szkół", "dostęp do obiektów sportowych"],
      "ocena atrakcyjności gospodarczej": ["udział sektorów gospodarki", "nowe inwestycje", "połączenia kolejowe"]
    },
    explanation: "Codzienne warunki życia ocenia się przez środowisko i dostęp do usług, a atrakcyjność gospodarczą przez strukturę gospodarki, inwestycje i skomunikowanie."
  },
  {
    id: "R08_MIE_07",
    section: "Miejsce zamieszkania i lokalne zmiany",
    type: "fill_in",
    prompt: "Mieszkańcy mogą zgłaszać projekty inwestycji i wybierać je w głosowaniu w ramach budżetu __________.",
    options: null,
    answer: ["obywatelskiego"],
    altAnswers: [["obywatelskiego", "obywatelski"]],
    explanation: "Budżet obywatelski pozwala mieszkańcom zgłaszać projekty i decydować w głosowaniu, które z nich mają zostać zrealizowane."
  },
  {
    id: "R08_MIE_08",
    section: "Miejsce zamieszkania i lokalne zmiany",
    type: "riddle",
    prompt: "Do jakiej instytucji można kierować skargi lub propozycje rozwiązań dotyczące gminy?",
    options: null,
    answer: "urząd gminy",
    altAnswers: ["urząd gminy", "urzędu gminy", "urząd miasta", "rada dzielnicy"],
    explanation: "Skargi i propozycje rozwiązań mogą przyjmować urząd gminy, urząd miasta lub rada dzielnicy."
  },
  {
    id: "R08_MIE_09",
    section: "Miejsce zamieszkania i lokalne zmiany",
    type: "odd_one_out",
    prompt: "Co nie jest przykładem obiektu lub usługi ocenianej w miejscu zamieszkania: szkoła, przychodnia, kino, boisko, pokład węgla brunatnego.",
    options: null,
    answer: "pokład węgla brunatnego",
    explanation: "Szkoła, przychodnia, kino i boisko wpływają na dostęp do edukacji, zdrowia, kultury i sportu, a pokład surowca nie jest usługą ani takim obiektem."
  },
  {
    id: "R08_MIE_10",
    section: "Miejsce zamieszkania i lokalne zmiany",
    type: "sequence",
    prompt: "Ułóż etapy przygotowania propozycji lokalnej zmiany w logicznej kolejności.",
    options: null,
    items: ["Przedstaw konkretną propozycję rozwiązania", "Rozpoznaj element funkcjonujący źle", "Wyjaśnij negatywne skutki problemu", "Skieruj pomysł do właściwej instytucji lub zgłoś projekt"],
    answer: ["Rozpoznaj element funkcjonujący źle", "Wyjaśnij negatywne skutki problemu", "Przedstaw konkretną propozycję rozwiązania", "Skieruj pomysł do właściwej instytucji lub zgłoś projekt"],
    explanation: "Dobra propozycja zmiany wynika z rozpoznania problemu, oceny jego skutków, opracowania rozwiązania i przekazania pomysłu do odpowiedniej instytucji."
  },
  {
    id: "R08_MIE_11",
    section: "Miejsce zamieszkania i lokalne zmiany",
    type: "single_choice",
    prompt: "Które dane z BDL GUS mogą pomóc ocenić dostępność usług w gminie?",
    options: ["Liczba szkół szpitali kin i teatrów", "Barwa gleby na jednej działce", "Kształt pojedynczego kamienia", "Kierunek wiatru w jednej chwili", "Wysokość jednego drzewa", "Kolor elewacji urzędu"],
    answer: 0,
    explanation: "Liczby szkół, szpitali, kin i teatrów pozwalają ocenić dostęp mieszkańców do edukacji, ochrony zdrowia i kultury.",
    image: "r08_bank_danych_lokalnych.jpg"
  },

  {
    id: "R08_HARD_01",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz wszystkie informacje potrzebne do opisu położenia geograficznego regionu.",
    options: ["Położenie na tle kraju", "Nazwa województwa i regionu", "Przybliżone współrzędne środka regionu", "Roczna liczba turystów zagranicznych", "Liczba supermarketów"],
    answer: [0, 1, 2],
    explanation: "Położenie geograficzne opisuje się przez umiejscowienie na tle kraju, nazwę województwa i regionu oraz przybliżone współrzędne geograficzne środka regionu."
  },
  {
    id: "R08_HARD_02",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz etap pracy w BDL GUS z właściwą czynnością.",
    options: null,
    left: ["Określenie celu", "Wybór jednostki", "Wybór dziedziny", "Wybór wskaźnika", "Wybór czasu"],
    right: ["Sformułowanie pytania badawczego", "Wskazanie całej gminy", "Otwarcie kategorii szkolnictwo", "Zaznaczenie szkół podstawowych ogółem", "Zaznaczenie najnowszego roku"],
    answer: {
      "Określenie celu": "Sformułowanie pytania badawczego",
      "Wybór jednostki": "Wskazanie całej gminy",
      "Wybór dziedziny": "Otwarcie kategorii szkolnictwo",
      "Wybór wskaźnika": "Zaznaczenie szkół podstawowych ogółem",
      "Wybór czasu": "Zaznaczenie najnowszego roku"
    },
    explanation: "Poprawne wyszukiwanie danych wymaga kolejno jasnego pytania, wskazania jednostki terytorialnej, dziedziny, wskaźnika i roku.",
    image: "r08_bank_danych_lokalnych.jpg"
  },
  {
    id: "R08_HARD_03",
    section: "Super trudne",
    type: "scenario",
    prompt: "Turysta wyznaczył górską trasę tylko w podstawowej mapie cyfrowej. Dlaczego powinien dodatkowo sprawdzić mapę turystyczną lub papierową?",
    options: ["Podstawowa mapa cyfrowa może nie uwzględniać nachylenia terenu i przeszkód skalnych", "Mapa cyfrowa zawsze zawyża ceny biletów", "Mapa papierowa automatycznie poprawia pogodę", "Podstawowa mapa pokazuje wyłącznie granice państw", "Mapa cyfrowa nie potrafi wskazać żadnej drogi", "Mapa papierowa mierzy sprawność uczestników"],
    answer: 0,
    explanation: "Podstawowe mapy cyfrowe mogą pomijać trudności terenowe, takie jak strome nachylenia, przeszkody skalne czy przepaście, co w górach może być niebezpieczne."
  },
  {
    id: "R08_HARD_04",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż szczegółowy scenariusz filmu promującego region.",
    options: null,
    items: ["Powtórne zaproszenie do odwiedzenia miejsca", "Najazd kamery na mapę Polski", "Tytuł filmu i pierwsze zaproszenie", "Prezentacja autorskich ujęć z komentarzem", "Podziękowanie widzom"],
    answer: ["Tytuł filmu i pierwsze zaproszenie", "Najazd kamery na mapę Polski", "Prezentacja autorskich ujęć z komentarzem", "Podziękowanie widzom", "Powtórne zaproszenie do odwiedzenia miejsca"],
    explanation: "Przykładowy film najpierw zaprasza i lokalizuje miejsce, następnie prezentuje atrakcje, a kończy się podziękowaniem i ponownym zaproszeniem.",
    image: "r08_film_promujacy_region.jpg"
  },
  {
    id: "R08_HARD_05",
    section: "Super trudne",
    type: "sort",
    prompt: "Przyporządkuj szczegółowe wskaźniki do sektorów gospodarki.",
    options: null,
    items: ["długość okresu wegetacyjnego", "najliczniej hodowane zwierzęta", "obecność surowców mineralnych", "nazwa zagłębia surowcowego", "liczba hipermarketów", "liczba nierezydentów korzystających z turystyki"],
    categories: ["rolnictwo", "przemysł", "usługi"],
    answer: {
      "rolnictwo": ["długość okresu wegetacyjnego", "najliczniej hodowane zwierzęta"],
      "przemysł": ["obecność surowców mineralnych", "nazwa zagłębia surowcowego"],
      "usługi": ["liczba hipermarketów", "liczba nierezydentów korzystających z turystyki"]
    },
    explanation: "Okres wegetacyjny i hodowla opisują rolnictwo, surowce i zagłębia wiążą się z przemysłem, a handel i turystyka należą do usług."
  },
  {
    id: "R08_HARD_06",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Co nie należy do opisu ukształtowania terenu regionu: wysokość nad poziomem morza, pas krajobrazowy, obecność lądolodu w przeszłości, roczna liczba turystów zagranicznych.",
    options: null,
    answer: "roczna liczba turystów zagranicznych",
    explanation: "Wysokość, pas krajobrazowy i ślady działalności lądolodu pomagają opisać rzeźbę terenu, natomiast liczba turystów jest wskaźnikiem usług."
  },
  {
    id: "R08_HARD_07",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Środowisko geograficzne obejmuje środowisko __________ oraz elementy stworzone przez __________.",
    options: null,
    answer: ["przyrodnicze", "człowieka"],
    altAnswers: [["przyrodnicze", "naturalne"], ["człowieka", "ludzi"]],
    explanation: "Środowisko geograficzne składa się z elementów naturalnych oraz elementów stworzonych lub przekształconych przez człowieka."
  },
  {
    id: "R08_HARD_08",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Kim jest nierezydent w znaczeniu użytym przy danych turystycznych?",
    options: ["Cudzoziemcem niemieszkającym w Polsce", "Każdym mieszkańcem innego województwa", "Pracownikiem urzędu statystycznego", "Osobą mieszkającą na wsi", "Turystą podróżującym bez noclegu", "Mieszkańcem regionu pracującym za granicą"],
    answer: 0,
    explanation: "Nierezydent to cudzoziemiec niemieszkający w Polsce; jego pobyt może być uwzględniany w danych dotyczących turystyki zagranicznej."
  },
  {
    id: "R08_HARD_09",
    section: "Super trudne",
    type: "true_false",
    prompt: "Podstawowe mapy cyfrowe zawsze uwzględniają nachylenie terenu, przeszkody skalne i przepaście podczas wytyczania trasy.",
    options: null,
    answer: false,
    explanation: "Wiele podstawowych map cyfrowych nie uwzględnia wszystkich trudności terenowych, dlatego w terenie potrzebne są odpowiednie mapy i dodatkowa weryfikacja."
  },
  {
    id: "R08_HARD_10",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Które przedmioty zachowują użyteczność także wtedy, gdy telefon nie ma zasięgu lub się rozładuje?",
    options: ["Mapa papierowa", "Numery alarmowe zapisane na kartce", "Dokument tożsamości", "Wyłącznie mapa internetowa", "Wyłącznie lista numerów zapisana w chmurze"],
    answer: [0, 1, 2],
    explanation: "Papierowa mapa, kartka z numerami i dokument nie wymagają zasięgu ani energii, dlatego stanowią ważne zabezpieczenie.",
    image: "r08_ekwipunek_wycieczkowy.jpg"
  },
  {
    id: "R08_HARD_11",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz zależność z najbardziej bezpośrednim skutkiem.",
    options: null,
    left: ["Mniej żyzna gleba", "Bardziej stromy teren", "Bardziej młodoglacjalny krajobraz", "Niższe średnie temperatury"],
    right: ["Mniej upraw roślin o dużych wymaganiach", "Trudniejsze warunki zabudowy", "Więcej jezior", "Krótszy okres wegetacyjny"],
    answer: {
      "Mniej żyzna gleba": "Mniej upraw roślin o dużych wymaganiach",
      "Bardziej stromy teren": "Trudniejsze warunki zabudowy",
      "Bardziej młodoglacjalny krajobraz": "Więcej jezior",
      "Niższe średnie temperatury": "Krótszy okres wegetacyjny"
    },
    explanation: "Warunki naturalne wpływają na rolnictwo, zabudowę i krajobraz: żyzność gleby na uprawy, nachylenie na budowę, rzeźba młodoglacjalna na jeziora, a temperatura na okres wegetacyjny."
  },
  {
    id: "R08_HARD_12",
    section: "Super trudne",
    type: "scenario",
    prompt: "Mieszkańcy chcą ograniczyć nagrzewanie placu i zwiększyć magazynowanie wody po deszczu. Który projekt najlepiej realizuje oba cele?",
    options: ["Park z drzewami krzewami i powierzchnią przepuszczalną", "Nowy asfaltowy parking", "Dodatkowy betonowy chodnik", "Usunięcie trawnika", "Ciemna nawierzchnia bez roślin", "Zadaszenie całego placu blachą"],
    answer: 0,
    explanation: "Roślinność daje cień i ogranicza nagrzewanie, a przepuszczalne podłoże sprzyja retencji wody.",
    image: "r08_zabetonowany_plac.jpg"
  },
  {
    id: "R08_HARD_13",
    section: "Super trudne",
    type: "riddle",
    prompt: "Jak nazywa się rejestr, w którym można szukać form ochrony przyrody przed planowaniem wycieczki?",
    options: null,
    answer: "Centralny Rejestr Form Ochrony Przyrody",
    altAnswers: ["Centralny Rejestr Form Ochrony Przyrody", "CRFOP", "centralny rejestr form ochrony przyrody"],
    explanation: "Centralny Rejestr Form Ochrony Przyrody pomaga znaleźć chronione walory przyrodnicze na wybranym obszarze."
  },
  {
    id: "R08_HARD_14",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Dlaczego prognozę pogody należy prześledzić ponownie dzień przed wycieczką?",
    options: ["Im bliżej terminu tym zwykle większa sprawdzalność prognozy", "Prognozy są publikowane tylko raz w miesiącu", "Dzień wcześniej można zmienić porę roku", "Prognoza zastępuje ocenę bezpieczeństwa trasy", "Prognoza podaje ceny biletów", "Prognoza gwarantuje brak opadów"],
    answer: 0,
    explanation: "Prognoza bliższa terminowi wycieczki zwykle lepiej odzwierciedla możliwe warunki, choć nadal trzeba przygotować się na ich zmianę."
  },
  {
    id: "R08_HARD_15",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż pełny tok przygotowania jednodniowej wycieczki od rozpoznania grupy do wyjścia w teren.",
    options: null,
    items: ["Sprawdź prognozę i przygotuj ekwipunek", "Określ uczestników i ich możliwości", "Oblicz całkowity koszt", "Wybierz miejsca oraz kolejność zwiedzania", "Sprawdź dostępność atrakcji i transport", "Ustal termin godziny i przerwy"],
    answer: ["Określ uczestników i ich możliwości", "Wybierz miejsca oraz kolejność zwiedzania", "Ustal termin godziny i przerwy", "Sprawdź dostępność atrakcji i transport", "Oblicz całkowity koszt", "Sprawdź prognozę i przygotuj ekwipunek"],
    explanation: "Planowanie rozpoczyna się od poznania grupy i wyboru trasy, następnie obejmuje termin, dostępność, transport i koszty, a bezpośrednio przed wyjściem sprawdzenie pogody oraz wyposażenia.",
    image: "r08_planowanie_wycieczki.jpg"
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r08",
  number: 5,
  title: "Własny region i mała ojczyzna",
  icon: "🏡",
  sectionOrder: [
    "Region i mała ojczyzna",
    "Środowisko i gospodarka regionu",
    "Zależności w środowisku geograficznym",
    "Zwiedzanie i promocja",
    "Miejsce zamieszkania i lokalne zmiany"
  ],
  sectionIcons: {
    "Region i mała ojczyzna": "🗺️",
    "Środowisko i gospodarka regionu": "🌿",
    "Zależności w środowisku geograficznym": "🔄",
    "Zwiedzanie i promocja": "🎒",
    "Miejsce zamieszkania i lokalne zmiany": "🏘️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
