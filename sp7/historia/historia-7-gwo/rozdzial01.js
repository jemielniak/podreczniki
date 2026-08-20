// Skróty sekcji (do identyfikatorów ćwiczeń):
//   KON  = Kongres i ład wiedeński
//   WIO  = Wiosna Ludów i ruchy narodowe
//   PRZ  = Rewolucja przemysłowa
//   KRO  = Królestwo Kongresowe i ziemie polskie
//   POW  = Powstania i Wielka Emigracja
//   ZAB  = Polityka zaborców i opór Polaków
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R01_KON_01",
    section: "Kongres i ład wiedeński",
    type: "single_choice",
    prompt: "W którym mieście zwołano kongres po klęsce Napoleona?",
    options: ["Paryż", "Wiedeń", "Berlin", "Londyn", "Petersburg", "Rzym"],
    answer: 1,
    image: "r01_tanczacy_kongres.jpg",
    explanation: "Kongres zwołano jesienią 1814 r. do stolicy Austrii, czyli Wiednia."
  },
  {
    id: "R01_KON_02",
    section: "Kongres i ład wiedeński",
    type: "multi_select",
    prompt: "Zaznacz cele uczestników kongresu wiedeńskiego.",
    options: ["Zapewnienie pokoju w Europie", "Przywrócenie starego ładu", "Niedopuszczenie do kolejnej rewolucji", "Zjednoczenie Niemiec", "Odbudowa cesarstwa Napoleona"],
    answer: [0, 1, 2],
    explanation: "Dyplomaci chcieli uspokoić Europę po wojnach napoleońskich, przywrócić stary ład i powstrzymać ruchy rewolucyjne."
  },
  {
    id: "R01_KON_03",
    section: "Kongres i ład wiedeński",
    type: "true_false",
    prompt: "Zasada legitymizmu głosiła, że władca rządzi z woli ludu.",
    options: null,
    answer: false,
    explanation: "Legitymizm opierał się na przekonaniu, że władca pochodzi z rodziny królewskiej lub książęcej i rządzi z Bożej łaski."
  },
  {
    id: "R01_KON_04",
    section: "Kongres i ład wiedeński",
    type: "fill_in",
    prompt: "Kongres wiedeński kierował się zasadami __________ i __________.",
    options: null,
    answer: ["legitymizmu", "równowagi sił"],
    altAnswers: [["legitymizmu"], ["równowagi sił", "rownowagi sil"]],
    explanation: "Legitymizm uzasadniał powrót dawnych dynastii, a równowaga sił miała zapobiec dominacji jednego państwa w Europie."
  },
  {
    id: "R01_KON_05",
    section: "Kongres i ład wiedeński",
    type: "match",
    prompt: "Połącz decyzję kongresu wiedeńskiego z jej skutkiem.",
    options: null,
    left: ["Francja", "Niemcy", "Włochy", "Księstwo Warszawskie"],
    right: ["przywrócenie granic sprzed rewolucji", "utrzymanie rozbicia na liczne państwa", "zachowanie rozdrobnienia", "likwidacja i podział ziem"],
    answer: {
      "Francja": "przywrócenie granic sprzed rewolucji",
      "Niemcy": "utrzymanie rozbicia na liczne państwa",
      "Włochy": "zachowanie rozdrobnienia",
      "Księstwo Warszawskie": "likwidacja i podział ziem"
    },
    explanation: "Kongres przywrócił dawny porządek i nie uwzględniał dążeń narodowych Niemców, Włochów ani Polaków."
  },
  {
    id: "R01_KON_06",
    section: "Kongres i ład wiedeński",
    type: "riddle",
    prompt: "Sojusz Rosji, Prus i Austrii wymierzony przeciw ruchom rewolucyjnym i niepodległościowym to...",
    options: null,
    answer: "Święte Przymierze",
    altAnswers: ["Święte Przymierze", "Swiete Przymierze"],
    explanation: "Święte Przymierze zawarto w 1815 r.; w praktyce stało się narzędziem obrony starego ładu."
  },
  {
    id: "R01_KON_07",
    section: "Kongres i ład wiedeński",
    type: "odd_one_out",
    prompt: "Co nie pasuje do pozostałych elementów starego ładu: silna władza monarchy, uprzywilejowana szlachta, wolność prasy, uprzywilejowane duchowieństwo.",
    options: null,
    answer: "wolność prasy",
    explanation: "Stary ład opierał się na silnej władzy monarchy oraz przywilejach szlachty i duchowieństwa, a nie na swobodach demokratycznych."
  },
  {
    id: "R01_KON_08",
    section: "Kongres i ład wiedeński",
    type: "scenario",
    prompt: "Jesteś monarchą po 1815 r. i boisz się nowych rewolucji. W twoim państwie władze czytają teksty przed drukiem i decydują, czy mogą się ukazać. Jak nazywa się takie działanie?",
    options: ["Cenzura", "Amnestia", "Uwłaszczenie", "Autonomia", "Emigracja", "Legitymizm"],
    answer: 0,
    explanation: "Cenzura polegała na kontrolowaniu prasy i książek przed drukiem."
  },
  {
    id: "R01_KON_09",
    section: "Kongres i ład wiedeński",
    type: "sort",
    prompt: "Przyporządkuj działania do zwolenników starego ładu lub jego przeciwników.",
    options: null,
    items: ["obrona przywilejów szlachty", "cenzura prasy", "żądanie wolności słowa", "tworzenie tajnych związków"],
    categories: ["zwolennicy starego ładu", "przeciwnicy starego ładu"],
    answer: {
      "zwolennicy starego ładu": ["obrona przywilejów szlachty", "cenzura prasy"],
      "przeciwnicy starego ładu": ["żądanie wolności słowa", "tworzenie tajnych związków"]
    },
    explanation: "Konserwatyści bronili starego ładu, a młodzi działacze tajnych związków domagali się swobód i zmian politycznych."
  },
  {
    id: "R01_WIO_01",
    section: "Wiosna Ludów i ruchy narodowe",
    type: "single_choice",
    prompt: "Jak nazywamy organizacje i działania zmierzające do budowy własnego państwa?",
    options: ["Ruchy narodowe", "Święte Przymierze", "Konserwatyzm", "Rugi pruskie", "Trójlojalizm", "Rusyfikacja"],
    answer: 0,
    explanation: "Ruchy narodowe rozwijały się tam, gdzie narody nie miały własnego państwa albo żyły w państwach rozbitych."
  },
  {
    id: "R01_WIO_02",
    section: "Wiosna Ludów i ruchy narodowe",
    type: "true_false",
    prompt: "Przed rewolucją francuską i wojnami napoleońskimi za naród danego kraju uważano przede wszystkim szlachtę.",
    options: null,
    answer: true,
    explanation: "Dopiero przemiany przełomu XVIII i XIX w. upowszechniły nowoczesną świadomość narodową także poza szlachtą."
  },
  {
    id: "R01_WIO_03",
    section: "Wiosna Ludów i ruchy narodowe",
    type: "multi_select",
    prompt: "Zaznacz przyczyny Wiosny Ludów.",
    options: ["Głód po nieurodzaju", "Dążenia do niepodległości lub zjednoczenia", "Żądania swobód demokratycznych", "Odbudowa imperium Napoleona", "Zakończenie rusyfikacji"],
    answer: [0, 1, 2],
    explanation: "Wiosnę Ludów wywołały problemy społeczne, aspiracje narodowe oraz żądania wolności politycznych."
  },
  {
    id: "R01_WIO_04",
    section: "Wiosna Ludów i ruchy narodowe",
    type: "fill_in",
    prompt: "Rewolucja lutowa we Francji wybuchła w roku __________ i doprowadziła do ogłoszenia Francji __________.",
    options: null,
    answer: ["1848", "republiką"],
    altAnswers: [["1848"], ["republiką", "republika"]],
    explanation: "W lutym 1848 r. król ustąpił z tronu, a Rząd Tymczasowy ogłosił Francję republiką."
  },
  {
    id: "R01_WIO_05",
    section: "Wiosna Ludów i ruchy narodowe",
    type: "match",
    prompt: "Połącz grupę z jej żądaniem podczas Wiosny Ludów.",
    options: null,
    left: ["Francuzi", "Węgrzy", "Włosi", "Niemcy"],
    right: ["republika i powszechne prawo wyborcze dla mężczyzn", "autonomia i własna armia", "wyzwolenie spod panowania Austrii i zjednoczenie", "zjednoczenie kraju oraz wolność prasy i zgromadzeń"],
    answer: {
      "Francuzi": "republika i powszechne prawo wyborcze dla mężczyzn",
      "Węgrzy": "autonomia i własna armia",
      "Włosi": "wyzwolenie spod panowania Austrii i zjednoczenie",
      "Niemcy": "zjednoczenie kraju oraz wolność prasy i zgromadzeń"
    },
    explanation: "Wiosna Ludów łączyła żądania społeczne i demokratyczne z programami narodowymi poszczególnych ludów."
  },
  {
    id: "R01_WIO_06",
    section: "Wiosna Ludów i ruchy narodowe",
    type: "sequence",
    prompt: "Ułóż wydarzenia w porządku chronologicznym.",
    options: null,
    items: ["Rewolucja lipcowa we Francji", "Wiosna Ludów", "Kongres wiedeński", "Powstanie listopadowe"],
    answer: ["Kongres wiedeński", "Rewolucja lipcowa we Francji", "Powstanie listopadowe", "Wiosna Ludów"],
    explanation: "Kongres trwał w latach 1814-1815, rewolucja lipcowa wybuchła w 1830 r., powstanie listopadowe w 1830 r., a Wiosna Ludów w latach 1848-1849."
  },
  {
    id: "R01_WIO_07",
    section: "Wiosna Ludów i ruchy narodowe",
    type: "scenario",
    prompt: "W marcu 1848 r. mieszkańcy Berlina walczą z wojskiem. Król wycofuje żołnierzy, wypuszcza więźniów politycznych, a ogólnoniemiecki parlament przygotowuje projekt zjednoczenia. W którym państwie dzieje się ta sytuacja?",
    options: ["Prusy", "Francja", "Austria", "Piemont", "Rosja", "Królestwo Polskie"],
    answer: 0,
    image: "r01_barykada_berlin.jpg",
    explanation: "Walki w Berlinie były częścią Wiosny Ludów w Prusach i państwach niemieckich."
  },
  {
    id: "R01_WIO_08",
    section: "Wiosna Ludów i ruchy narodowe",
    type: "odd_one_out",
    prompt: "Co nie pasuje do skutków Wiosny Ludów: powszechne prawo wyborcze dla mężczyzn we Francji, uwłaszczenie chłopów w Austrii, konstytucja Piemontu, przywrócenie Księstwa Warszawskiego.",
    options: null,
    answer: "przywrócenie Księstwa Warszawskiego",
    explanation: "Księstwo Warszawskie nie zostało przywrócone; należało do spraw rozstrzygniętych na kongresie wiedeńskim."
  },
  {
    id: "R01_WIO_09",
    section: "Wiosna Ludów i ruchy narodowe",
    type: "riddle",
    prompt: "Generał powstania listopadowego, który podczas Wiosny Ludów dowodził jedną z armii węgierskich, to...",
    options: null,
    answer: "Józef Bem",
    altAnswers: ["Józef Bem", "Jozef Bem", "Bem"],
    explanation: "Józef Bem odniósł na Węgrzech liczne zwycięstwa i jest tam czczony jako bohater narodowy."
  },
  {
    id: "R01_PRZ_01",
    section: "Rewolucja przemysłowa",
    type: "single_choice",
    prompt: "W którym kraju rozpoczęła się rewolucja przemysłowa?",
    options: ["W Wielkiej Brytanii", "We Francji", "W Prusach", "W Austrii", "W Rosji", "W Belgii"],
    answer: 0,
    explanation: "Rewolucja przemysłowa zaczęła się w Wielkiej Brytanii w drugiej połowie XVIII w."
  },
  {
    id: "R01_PRZ_02",
    section: "Rewolucja przemysłowa",
    type: "multi_select",
    prompt: "Zaznacz czynniki, które ułatwiły rewolucję przemysłową w Wielkiej Brytanii.",
    options: ["Zamożność przedsiębiorców", "Bogate złoża węgla i rud żelaza", "Dostęp do surowców z kolonii", "Brak popytu na wyroby przemysłowe", "Przemiany w rolnictwie"],
    answer: [0, 1, 2, 4],
    explanation: "Brytania miała kapitał, surowce, kolonie, robotników i rosnący popyt związany z przemianami agrarnymi oraz wzrostem liczby ludności."
  },
  {
    id: "R01_PRZ_03",
    section: "Rewolucja przemysłowa",
    type: "fill_in",
    prompt: "Najważniejszym wynalazkiem rewolucji przemysłowej była __________ ulepszona przez Jamesa __________.",
    options: null,
    answer: ["maszyna parowa", "Watta"],
    altAnswers: [["maszyna parowa"], ["Watta", "Watt"]],
    explanation: "Maszyna parowa Watta mogła napędzać pompy, maszyny, lokomotywy i statki."
  },
  {
    id: "R01_PRZ_04",
    section: "Rewolucja przemysłowa",
    type: "true_false",
    prompt: "Brytyjczycy stanowili około 2% ludności Ziemi, a wytwarzali połowę artykułów przemysłowych świata.",
    options: null,
    answer: true,
    explanation: "Taka przewaga sprawiła, że Wielką Brytanię nazywano w pierwszej połowie XIX w. warsztatem świata."
  },
  {
    id: "R01_PRZ_05",
    section: "Rewolucja przemysłowa",
    type: "scenario",
    prompt: "Rok 1825. Brytyjski wynalazca samouk otwiera pierwszą na świecie linię kolejową. Kto to zrobił?",
    options: ["George Stephenson", "Robert Fulton", "James Watt", "Klemens von Metternich", "Aleksander Wielopolski", "Ksawery Drucki-Lubecki"],
    answer: 0,
    image: "r01_lokomotywa_stephensona.jpg",
    explanation: "George Stephenson otworzył pierwszą linię kolejową w 1825 r.; później jego lokomotywa obsługiwała trasę Manchester-Liverpool."
  },
  {
    id: "R01_PRZ_06",
    section: "Rewolucja przemysłowa",
    type: "match",
    prompt: "Połącz wynalazek lub zjawisko z opisem.",
    options: null,
    left: ["płodozmian", "parowiec", "klasa robotnicza", "burżuazja"],
    right: ["zastąpienie trójpolówki uprawą całego pola", "statek napędzany maszyną parową", "robotnicy pracujący w fabrykach", "zamożni właściciele fabryk i banków"],
    answer: {
      "płodozmian": "zastąpienie trójpolówki uprawą całego pola",
      "parowiec": "statek napędzany maszyną parową",
      "klasa robotnicza": "robotnicy pracujący w fabrykach",
      "burżuazja": "zamożni właściciele fabryk i banków"
    },
    explanation: "Rewolucja przemysłowa zmieniła zarówno technikę, jak i strukturę społeczeństwa."
  },
  {
    id: "R01_PRZ_07",
    section: "Rewolucja przemysłowa",
    type: "sort",
    prompt: "Przyporządkuj elementy do przyczyn lub skutków rewolucji przemysłowej.",
    options: null,
    items: ["zamożność przedsiębiorców", "złoża węgla i rud żelaza", "zanikanie stanów", "konflikt burżuazji z robotnikami", "zadymione obszary przemysłowe"],
    categories: ["przyczyny", "skutki"],
    answer: {
      "przyczyny": ["zamożność przedsiębiorców", "złoża węgla i rud żelaza"],
      "skutki": ["zanikanie stanów", "konflikt burżuazji z robotnikami", "zadymione obszary przemysłowe"]
    },
    explanation: "Kapitał i surowce umożliwiły rozwój przemysłu, a jego skutkiem były nowe klasy społeczne, konflikty i zanieczyszczenie."
  },
  {
    id: "R01_PRZ_08",
    section: "Rewolucja przemysłowa",
    type: "odd_one_out",
    prompt: "Co nie pasuje do obszarów objętych rewolucją przemysłową poza Wielką Brytanią: Belgia, Francja, Górny Śląsk, Norwegia.",
    options: null,
    answer: "Norwegia",
    explanation: "Do obszarów objętych rewolucją przemysłową należały m.in. Belgia, Francja, Niemcy, Górny Śląsk, Czechy i Stany Zjednoczone."
  },
  {
    id: "R01_PRZ_09",
    section: "Rewolucja przemysłowa",
    type: "riddle",
    prompt: "Amerykanin, który w 1807 r. zastosował maszynę parową do napędzania statku, to...",
    options: null,
    answer: "Robert Fulton",
    altAnswers: ["Robert Fulton", "Fulton"],
    image: "r01_parowiec_fultona.jpg",
    explanation: "Parowce były wolniejsze od żaglowców, ale miały wielką zaletę: były punktualne, bo nie zależały od wiatru."
  },
  {
    id: "R01_KRO_01",
    section: "Królestwo Kongresowe i ziemie polskie",
    type: "single_choice",
    prompt: "Z których ziem car Aleksander I utworzył w 1815 r. Królestwo Polskie?",
    options: ["Z większości ziem Księstwa Warszawskiego przyznanych Rosji", "Z całej dawnej Rzeczpospolitej", "Tylko z Galicji", "Z Pomorza Gdańskiego", "Z Wielkiego Księstwa Poznańskiego", "Z Rzeczpospolitej Krakowskiej"],
    answer: 0,
    explanation: "Rosja otrzymała większość ziem Księstwa Warszawskiego, a car utworzył z nich Królestwo Polskie."
  },
  {
    id: "R01_KRO_02",
    section: "Królestwo Kongresowe i ziemie polskie",
    type: "true_false",
    prompt: "Królestwo Kongresowe było połączone z Rosją osobą władcy oraz wspólną polityką zagraniczną.",
    options: null,
    answer: true,
    explanation: "Car był królem Polski, a polityka zagraniczna Królestwa miała realizować interesy Rosji."
  },
  {
    id: "R01_KRO_03",
    section: "Królestwo Kongresowe i ziemie polskie",
    type: "multi_select",
    prompt: "Zaznacz prawa lub elementy autonomii Królestwa Kongresowego zapisane w konstytucji.",
    options: ["Polski język urzędowy", "Własny skarb i armia", "Prawo obsadzania urzędów przez Polaków", "Pełna niepodległość w polityce zagranicznej", "Wolność druku"],
    answer: [0, 1, 2, 4],
    explanation: "Królestwo miało znaczną autonomię, ale nie prowadziło samodzielnej polityki zagranicznej."
  },
  {
    id: "R01_KRO_04",
    section: "Królestwo Kongresowe i ziemie polskie",
    type: "fill_in",
    prompt: "Królestwo Polskie nazywano też Królestwem __________ albo potocznie __________.",
    options: null,
    answer: ["Kongresowym", "Kongresówką"],
    altAnswers: [["Kongresowym"], ["Kongresówką", "Kongresowka"]],
    explanation: "Nazwa wiązała się z kongresem wiedeńskim, na którym rozstrzygnięto sprawę tych ziem."
  },
  {
    id: "R01_KRO_05",
    section: "Królestwo Kongresowe i ziemie polskie",
    type: "match",
    prompt: "Połącz zaborcę lub miasto z decyzją kongresu dotyczącą ziem polskich.",
    options: null,
    left: ["Rosja", "Prusy", "Austria", "Kraków"],
    right: ["większość ziem Księstwa Warszawskiego", "Gdańsk oraz departamenty poznański i bydgoski", "większość Galicji bez Krakowa", "wolne miasto pod nadzorem trzech mocarstw"],
    answer: {
      "Rosja": "większość ziem Księstwa Warszawskiego",
      "Prusy": "Gdańsk oraz departamenty poznański i bydgoski",
      "Austria": "większość Galicji bez Krakowa",
      "Kraków": "wolne miasto pod nadzorem trzech mocarstw"
    },
    explanation: "Kongres wiedeński ponownie podzielił ziemie polskie między trzech zaborców i pozostawił Kraków jako osobny twór polityczny."
  },
  {
    id: "R01_KRO_06",
    section: "Królestwo Kongresowe i ziemie polskie",
    type: "scenario",
    prompt: "Minister skarbu ściąga zaległe podatki, wprowadza nowe, wspiera przemysł i do 1830 r. likwiduje długi Królestwa. O kim mowa?",
    options: ["Ksawery Drucki-Lubecki", "Adam Czartoryski", "Piotr Wysocki", "Romuald Traugutt", "Józef Chłopicki", "Jakub Szela"],
    answer: 0,
    explanation: "Ksawery Drucki-Lubecki uzdrowił finanse Królestwa, zwiększył eksport i zgromadził rezerwy pieniężne."
  },
  {
    id: "R01_KRO_07",
    section: "Królestwo Kongresowe i ziemie polskie",
    type: "riddle",
    prompt: "Wolne miasto ogłoszone pod opieką Rosji, Austrii i Prus to...",
    options: null,
    answer: "Kraków",
    altAnswers: ["Kraków", "Krakow", "Rzeczpospolita Krakowska"],
    image: "r01_kopiec_kosciuszki_krakow.jpg",
    explanation: "Kraków z okręgiem nazywano Rzeczpospolitą Krakowską; był w znacznym stopniu niezależny."
  },
  {
    id: "R01_KRO_08",
    section: "Królestwo Kongresowe i ziemie polskie",
    type: "odd_one_out",
    prompt: "Co nie pasuje do sytuacji Królestwa Kongresowego przed powstaniem listopadowym: polski język urzędowy, własna armia, car jako król, pełna niepodległość.",
    options: null,
    answer: "pełna niepodległość",
    explanation: "Królestwo miało autonomię, ale było zależne od Rosji i połączone z nią osobą cara."
  },
  {
    id: "R01_KRO_09",
    section: "Królestwo Kongresowe i ziemie polskie",
    type: "sequence",
    prompt: "Ułóż wydarzenia w porządku chronologicznym.",
    options: null,
    items: ["utworzenie Uniwersytetu Warszawskiego", "zwołanie kongresu wiedeńskiego", "nadanie konstytucji Królestwu Polskiemu", "wybuch powstania listopadowego"],
    answer: ["zwołanie kongresu wiedeńskiego", "nadanie konstytucji Królestwu Polskiemu", "utworzenie Uniwersytetu Warszawskiego", "wybuch powstania listopadowego"],
    explanation: "Kongres zwołano w 1814 r., konstytucję nadano w 1815 r., Uniwersytet Warszawski utworzono w 1816 r., a powstanie listopadowe wybuchło w 1830 r."
  },
  {
    id: "R01_POW_01",
    section: "Powstania i Wielka Emigracja",
    type: "single_choice",
    prompt: "Kto dał sygnał do rozpoczęcia powstania listopadowego?",
    options: ["Piotr Wysocki", "Józef Chłopicki", "Jan Skrzynecki", "Ignacy Prądzyński", "Adam Czartoryski", "Romuald Traugutt"],
    answer: 0,
    explanation: "Piotr Wysocki był przywódcą sprzysiężenia podchorążych i 29 listopada 1830 r. wezwał podchorążych do walki."
  },
  {
    id: "R01_POW_02",
    section: "Powstania i Wielka Emigracja",
    type: "multi_select",
    prompt: "Zaznacz przyczyny powstania listopadowego.",
    options: ["Królestwo Kongresowe nie było niepodległe", "Car łamał konstytucję", "Wielki książę Konstanty budził nienawiść żołnierzy", "Rosja przegrała wojnę krymską", "Ogłoszono brankę spiskowców"],
    answer: [0, 1, 2],
    explanation: "Do wybuchu w 1830 r. doprowadziły zależność od Rosji, łamanie konstytucji, brutalna dyscyplina Konstantego oraz bezpośrednie zagrożenie spisku."
  },
  {
    id: "R01_POW_03",
    section: "Powstania i Wielka Emigracja",
    type: "scenario",
    prompt: "Wieczorem 29 listopada 1830 r. spiskowcy ruszają do Belwederu, a potem mieszkańcy Warszawy pomagają zdobyć Arsenał. Jak nazywa się ta noc?",
    options: ["Noc listopadowa", "Rewolucja moralna", "Rabacja galicyjska", "Branka", "Dyktatura Traugutta", "Wiosna Ludów"],
    answer: 0,
    image: "r01_noc_listopadowa_arsenal.jpg",
    explanation: "Noc listopadowa rozpoczęła powstanie listopadowe w Warszawie."
  },
  {
    id: "R01_POW_04",
    section: "Powstania i Wielka Emigracja",
    type: "sequence",
    prompt: "Ułóż wydarzenia powstania listopadowego w porządku chronologicznym.",
    options: null,
    items: ["bitwa pod Ostrołęką", "noc listopadowa", "bitwa pod Grochowem", "atak Rosjan na Warszawę"],
    answer: ["noc listopadowa", "bitwa pod Grochowem", "bitwa pod Ostrołęką", "atak Rosjan na Warszawę"],
    explanation: "Powstanie zaczęło się 29 listopada 1830 r.; Grochów był w lutym 1831 r., Ostrołęka w maju, a Warszawa została zaatakowana we wrześniu."
  },
  {
    id: "R01_POW_05",
    section: "Powstania i Wielka Emigracja",
    type: "match",
    prompt: "Połącz postać z rolą lub poglądem.",
    options: null,
    left: ["Adam Czartoryski", "Wiktor Heltman", "Piotr Ściegienny", "Szymon Konarski"],
    right: ["przywódca Hotelu Lambert", "działacz Towarzystwa Demokratycznego Polskiego", "organizator spisku chłopów", "emisariusz jednoczący spiskowców na ziemiach zabranych"],
    answer: {
      "Adam Czartoryski": "przywódca Hotelu Lambert",
      "Wiktor Heltman": "działacz Towarzystwa Demokratycznego Polskiego",
      "Piotr Ściegienny": "organizator spisku chłopów",
      "Szymon Konarski": "emisariusz jednoczący spiskowców na ziemiach zabranych"
    },
    image: "r01_hotel_lambert_paryz.jpg",
    explanation: "Wielka Emigracja i ruch spiskowy miały różne ośrodki, od konserwatywnego Hotelu Lambert po demokratów i konspirację w kraju."
  },
  {
    id: "R01_POW_06",
    section: "Powstania i Wielka Emigracja",
    type: "true_false",
    prompt: "Towarzystwo Demokratyczne Polskie chciało odrodzenia Polski jako republiki opartej na powszechnej równości.",
    options: null,
    answer: true,
    explanation: "TDP przygotowywało kolejne powstanie i łączyło niepodległość z programem republikańskim oraz równościowym."
  },
  {
    id: "R01_POW_07",
    section: "Powstania i Wielka Emigracja",
    type: "fill_in",
    prompt: "Polskich uchodźców politycznych po klęsce powstania listopadowego nazywamy __________ __________.",
    options: null,
    answer: ["Wielką", "Emigracją"],
    altAnswers: [["Wielką", "Wielka"], ["Emigracją", "Emigracja"]],
    explanation: "Wielka Emigracja liczyła około 11 tysięcy Polaków i odegrała ważną rolę polityczną oraz kulturalną."
  },
  {
    id: "R01_POW_08",
    section: "Powstania i Wielka Emigracja",
    type: "sort",
    prompt: "Przyporządkuj twórców do dziedzin kultury Wielkiej Emigracji.",
    options: null,
    items: ["Adam Mickiewicz", "Juliusz Słowacki", "Zygmunt Krasiński", "Fryderyk Chopin"],
    categories: ["literatura", "muzyka"],
    answer: {
      "literatura": ["Adam Mickiewicz", "Juliusz Słowacki", "Zygmunt Krasiński"],
      "muzyka": ["Fryderyk Chopin"]
    },
    explanation: "Mickiewicz, Słowacki i Krasiński byli trzema wieszczami, a Chopin tworzył m.in. polonezy i mazurki."
  },
  {
    id: "R01_POW_09",
    section: "Powstania i Wielka Emigracja",
    type: "riddle",
    prompt: "Pogląd, że Polacy cierpią jak Mesjasz i doprowadzą inne narody do moralnej odnowy, to...",
    options: null,
    answer: "polski mesjanizm",
    altAnswers: ["polski mesjanizm", "mesjanizm", "mesjanizm polski"],
    explanation: "Polski mesjanizm rozpowszechnił się po powstaniu listopadowym i dawał sens klęskom oraz nadzieję na przyszłe zwycięstwo."
  },
  {
    id: "R01_ZAB_01",
    section: "Polityka zaborców i opór Polaków",
    type: "single_choice",
    prompt: "Jak nazywano działania władz rosyjskich zmierzające do uczynienia z Polaków Rosjan?",
    options: ["Rusyfikacja", "Germanizacja", "Kulturkampf", "Trójlojalizm", "Uwłaszczenie", "Praca organiczna"],
    answer: 0,
    explanation: "Po powstaniu styczniowym car Aleksander II pozbawił Królestwo autonomii i poddał Polaków rusyfikacji."
  },
  {
    id: "R01_ZAB_02",
    section: "Polityka zaborców i opór Polaków",
    type: "multi_select",
    prompt: "Zaznacz przykłady rusyfikacji po powstaniu styczniowym.",
    options: ["Likwidacja polskich urzędów", "Nauka po rosyjsku", "Nazywanie Królestwa Krajem Przywiślańskim", "Wysiedlenie 30 tysięcy Polaków z Niemiec", "Strajk dzieci we Wrześni"],
    answer: [0, 1, 2],
    explanation: "Rusyfikacja obejmowała urzędy, szkoły, język urzędowy i symboliczne usuwanie nazwy Królestwo Polskie."
  },
  {
    id: "R01_ZAB_03",
    section: "Polityka zaborców i opór Polaków",
    type: "true_false",
    prompt: "Kulturkampf był walką Bismarcka z Kościołem Katolickim, a wobec Polaków miał dodatkowo charakter antypolski.",
    options: null,
    answer: true,
    explanation: "W czasie Kulturkampfu usuwano także polskich proboszczów, dlatego polityka ta uderzała w katolicyzm i polskość."
  },
  {
    id: "R01_ZAB_04",
    section: "Polityka zaborców i opór Polaków",
    type: "match",
    prompt: "Połącz pojęcie z wyjaśnieniem.",
    options: null,
    left: ["rugi pruskie", "Komisja Kolonizacyjna", "praca organiczna", "praca u podstaw"],
    right: ["wysiedlenie prawie 30 tysięcy osób z zaborów rosyjskiego i austriackiego", "wykupywanie ziemi z rąk Polaków dla niemieckich osadników", "dążenie do postępu gospodarczego i rozwoju kultury społeczeństwa", "kształcenie ludu i rozbudzanie świadomości narodowej"],
    answer: {
      "rugi pruskie": "wysiedlenie prawie 30 tysięcy osób z zaborów rosyjskiego i austriackiego",
      "Komisja Kolonizacyjna": "wykupywanie ziemi z rąk Polaków dla niemieckich osadników",
      "praca organiczna": "dążenie do postępu gospodarczego i rozwoju kultury społeczeństwa",
      "praca u podstaw": "kształcenie ludu i rozbudzanie świadomości narodowej"
    },
    explanation: "Polityka zaborców wywołała różne formy polskiego oporu, szczególnie legalną pracę społeczną i gospodarczą."
  },
  {
    id: "R01_ZAB_05",
    section: "Polityka zaborców i opór Polaków",
    type: "scenario",
    prompt: "Polski chłop nie dostaje zgody na budowę domu na swojej ziemi, więc mieszka z rodziną w wozie cyrkowym i codziennie go przesuwa. Kto stał się symbolem takiego oporu?",
    options: ["Michał Drzymała", "Bolesław Prus", "Jan Matejko", "Stanisław Wyspiański", "Otto von Bismarck", "Romuald Traugutt"],
    answer: 0,
    image: "r01_woz_drzymaly.jpg",
    explanation: "Postawa Michała Drzymały stała się symbolem oporu wobec germanizacji i zakazu budowy domów."
  },
  {
    id: "R01_ZAB_06",
    section: "Polityka zaborców i opór Polaków",
    type: "fill_in",
    prompt: "Po 1866 r. Galicja uzyskała __________, a językiem urzędowym stał się tam język __________.",
    options: null,
    answer: ["autonomię", "polski"],
    altAnswers: [["autonomię", "autonomie"], ["polski"]],
    explanation: "W Galicji Polacy zasiadali we władzach, kierowali administracją, sądami i szkołami, a kultura mogła rozwijać się swobodniej."
  },
  {
    id: "R01_ZAB_07",
    section: "Polityka zaborców i opór Polaków",
    type: "odd_one_out",
    prompt: "Co nie pasuje do form germanizacji: Kulturkampf, rugi pruskie, Komisja Kolonizacyjna, amnestia dla zesłańców.",
    options: null,
    answer: "amnestia dla zesłańców",
    explanation: "Amnestia dla zesłańców była ustępstwem Aleksandra II po wojnie krymskiej, a nie formą germanizacji."
  },
  {
    id: "R01_ZAB_08",
    section: "Polityka zaborców i opór Polaków",
    type: "riddle",
    prompt: "Program wierności temu państwu zaborczemu, w którym żyli Polacy, to...",
    options: null,
    answer: "trójlojalizm",
    altAnswers: ["trójlojalizm", "trojlojalizm"],
    explanation: "Trójlojalizm zalecali znani krakowscy uczeni i politycy w warunkach autonomii galicyjskiej."
  },
  {
    id: "R01_ZAB_09",
    section: "Polityka zaborców i opór Polaków",
    type: "scenario",
    prompt: "W 1901 r. dzieci odmawiają nauki religii po niemiecku i nie odpowiadają na pytania katechety. Gdzie wybuchł ten strajk szkolny?",
    options: ["We Wrześni", "W Warszawie", "W Krakowie", "We Lwowie", "W Poznaniu", "W Tarnowie"],
    answer: 0,
    explanation: "Strajk dzieci polskich we Wrześni trwał w latach 1901-1902 i był protestem przeciw nauczaniu religii po niemiecku."
  },
  {
    id: "R01_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Które pięć państw miało decydujący głos na kongresie wiedeńskim?",
    options: ["Rosja, Prusy, Austria, Wielka Brytania i Francja", "Rosja, Austria, Hiszpania, Portugalia i Francja", "Prusy, Austria, Szwecja, Dania i Rosja", "Wielka Brytania, Belgia, Francja, Prusy i Włochy", "Rosja, Prusy, Turcja, Austria i Francja", "Austria, Piemont, Francja, Rosja i Holandia"],
    answer: 0,
    explanation: "Mimo klęski Napoleona do grona decydujących mocarstw dopuszczono także pokonaną Francję, by nie naruszyć równowagi sił."
  },
  {
    id: "R01_HARD_02",
    section: "Super trudne",
    type: "true_false",
    prompt: "Święte Przymierze przetrwało do lat 50. XIX w.",
    options: null,
    answer: true,
    explanation: "Święte Przymierze przetrwało do lat 50. XIX w."
  },
  {
    id: "R01_HARD_03",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Królestwo Kongresowe miało powierzchnię __________ tysiąca km kwadratowych i liczyło __________ miliona mieszkańców.",
    options: null,
    answer: ["128,5", "3,3"],
    altAnswers: [["128,5", "128.5"], ["3,3", "3.3"]],
    explanation: "Królestwo zajmowało 128,5 tysiąca km kwadratowych i liczyło 3,3 miliona mieszkańców."
  },
  {
    id: "R01_HARD_04",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Ilu żołnierzy liczyła nowoczesna armia Królestwa Polskiego, którą można było utrzymać dzięki poprawie finansów?",
    options: ["27 tysięcy", "11 tysięcy", "50 tysięcy", "100 tysięcy", "120 tysięcy", "250 tysięcy"],
    answer: 0,
    explanation: "Po reformach skarbowych państwo było stać na utrzymanie 27-tysięcznej nowoczesnej armii."
  },
  {
    id: "R01_HARD_05",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Który wódz naczelny zmarnował zwycięstwa pod Dębem Wielkim i Iganiami, bo zawrócił do Warszawy?",
    options: ["Jan Skrzynecki", "Józef Chłopicki", "Ignacy Prądzyński", "Piotr Wysocki", "Wielki książę Konstanty", "Romuald Traugutt"],
    answer: 0,
    explanation: "Jan Skrzynecki obawiał się przewagi Rosjan i nie kontynuował ofensywy po polskich zwycięstwach."
  },
  {
    id: "R01_HARD_06",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz skutki klęski powstania listopadowego.",
    options: ["Likwidacja sejmu Królestwa", "Likwidacja armii Królestwa", "Zastąpienie konstytucji Statutem organicznym", "Budowa Cytadeli w Warszawie", "Uwłaszczenie chłopów w Galicji"],
    answer: [0, 1, 2, 3],
    explanation: "Po powstaniu car ograniczył odrębność Królestwa, zlikwidował sejm i armię, wprowadził Statut organiczny oraz kazał zbudować Cytadelę."
  },
  {
    id: "R01_HARD_07",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz dzieło z twórcą.",
    options: null,
    left: ["Pan Tadeusz", "Kordian", "Nie-Boska komedia", "polonezy i mazurki"],
    right: ["Adam Mickiewicz", "Juliusz Słowacki", "Zygmunt Krasiński", "Fryderyk Chopin"],
    answer: {
      "Pan Tadeusz": "Adam Mickiewicz",
      "Kordian": "Juliusz Słowacki",
      "Nie-Boska komedia": "Zygmunt Krasiński",
      "polonezy i mazurki": "Fryderyk Chopin"
    },
    explanation: "Twórcy Wielkiej Emigracji budowali kulturę narodową na obczyźnie."
  },
  {
    id: "R01_HARD_08",
    section: "Super trudne",
    type: "scenario",
    prompt: "W lutym 1846 r. w Krakowie powstaje Rząd Narodowy Rzeczpospolitej Polskiej. Obiecuje ziemię chłopom i pełną równość obywateli. Na czyich ideach opierał się jego program?",
    options: ["Towarzystwa Demokratycznego Polskiego", "Hotelu Lambert", "Świętego Przymierza", "Komisji Kolonizacyjnej", "Trójlojalistów", "Konserwatystów wiedeńskich"],
    answer: 0,
    image: "r01_powstancy_krakowscy.jpg",
    explanation: "Program powstania krakowskiego był zgodny z ideami emigracyjnego TDP: równością obywateli i pozyskaniem chłopów."
  },
  {
    id: "R01_HARD_09",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Ile dni trwało powstanie krakowskie?",
    options: ["9 dni", "3 dni", "27 dni", "50 dni", "120 dni", "2 lata"],
    answer: 0,
    explanation: "Powstanie krakowskie było krótkie; trwało zaledwie dziewięć dni."
  },
  {
    id: "R01_HARD_10",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz informacje zgodne z opisem powstania styczniowego.",
    options: ["Wybuchło w nocy z 22 na 23 stycznia 1863 r.", "Miało charakter wojny partyzanckiej", "Powstańcy stoczyli ponad 1200 potyczek", "Chłopi w większości od razu poparli powstanie", "Rząd Narodowy stworzył tajne państwo"],
    answer: [0, 1, 2, 4],
    explanation: "Powstanie było partyzanckie, obejmowało ponad 1200 potyczek i tajne państwo, ale większość chłopów pozostała bierna."
  },
  {
    id: "R01_HARD_11",
    section: "Super trudne",
    type: "scenario",
    prompt: "Jesienią 1863 r. przywództwo tajnego państwa obejmuje dawny oficer armii rosyjskiej. Ukryty w warszawskim mieszkaniu próbuje ratować powstanie. Kto to był?",
    options: ["Romuald Traugutt", "Aleksander Wielopolski", "Piotr Wysocki", "Ignacy Prądzyński", "Szymon Konarski", "Józef Bem"],
    answer: 0,
    image: "r01_traugutt_tajne_panstwo.jpg",
    explanation: "Romuald Traugutt został dyktatorem powstania styczniowego w październiku 1863 r."
  },
  {
    id: "R01_HARD_12",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Jaki odsetek mieszkańców Królestwa Kongresowego u schyłku XIX w. nie umiał czytać ani pisać?",
    options: ["Prawie 70%", "Około 2%", "Około 11%", "Prawie 30%", "56%", "Ponad 90%"],
    answer: 0,
    explanation: "W końcu XIX w. prawie 70% mieszkańców Królestwa Kongresowego było analfabetami; w Galicji było to 56%."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r01",
  number: 1,
  title: "Europa i ziemie polskie po Kongresie wiedeńskim",
  icon: "🌍",
  sectionOrder: [
    "Kongres i ład wiedeński",
    "Wiosna Ludów i ruchy narodowe",
    "Rewolucja przemysłowa",
    "Królestwo Kongresowe i ziemie polskie",
    "Powstania i Wielka Emigracja",
    "Polityka zaborców i opór Polaków"
  ],
  sectionIcons: {
    "Kongres i ład wiedeński": "🏛️",
    "Wiosna Ludów i ruchy narodowe": "🔥",
    "Rewolucja przemysłowa": "⚙️",
    "Królestwo Kongresowe i ziemie polskie": "🗺️",
    "Powstania i Wielka Emigracja": "🎖️",
    "Polityka zaborców i opór Polaków": "📚"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
