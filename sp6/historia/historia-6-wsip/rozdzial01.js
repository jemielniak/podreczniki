// Skróty sekcji (do identyfikatorów ćwiczeń):
//   WOG  = Wielkie odkrycia geograficzne
//   KOG  = Konsekwencje wielkich odkryć geograficznych
//   ODR  = Kultura odrodzenia we Włoszech
//   HUM  = Humanizm i przewrót kopernikański
//   REF  = Reformacja
//   KAT  = Reforma katolicka
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_WOG_01",
    "section": "Wielkie odkrycia geograficzne",
    "type": "single_choice",
    "prompt": "Jak nazywał się lekki i szybki statek zbudowany przez Portugalczyków w XV wieku, który ułatwił dalekie wyprawy morskie?",
    "image": "r01_karawela_na_morzu.jpg",
    "options": [
      "karawela",
      "galera",
      "dromona",
      "drakkar",
      "fregata",
      "tratwa"
    ],
    "answer": 0,
    "explanation": "Portugalczycy zbudowali karawelę: lekki, szybki i zwrotny statek, który mogła obsługiwać mniej liczna załoga."
  },
  {
    "id": "R01_WOG_02",
    "section": "Wielkie odkrycia geograficzne",
    "type": "true_false",
    "prompt": "Trójkątne żagle karaweli sprawiały, że statek był mniej zależny od kierunku wiatru.",
    "image": "r01_karawela_na_morzu.jpg",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik podkreśla, że dzięki trójkątnym żaglom karawele lepiej manewrowały przy zmiennych wiatrach."
  },
  {
    "id": "R01_WOG_03",
    "section": "Wielkie odkrycia geograficzne",
    "type": "match",
    "prompt": "Połącz przyrząd nawigacyjny z jego zastosowaniem.",
    "image": "r01_przyrzady_nawigacyjne.jpg",
    "options": null,
    "left": [
      "kompas",
      "astrolabium",
      "log"
    ],
    "right": [
      "określanie kierunku żeglugi",
      "ustalanie pozycji statku według gwiazd",
      "pomiar prędkości płynącego statku"
    ],
    "answer": {
      "kompas": "określanie kierunku żeglugi",
      "astrolabium": "ustalanie pozycji statku według gwiazd",
      "log": "pomiar prędkości płynącego statku"
    },
    "explanation": "Kompas wskazywał kierunek, astrolabium pomagało ustalić pozycję statku na podstawie gwiazd, a log służył do mierzenia prędkości."
  },
  {
    "id": "R01_WOG_04",
    "section": "Wielkie odkrycia geograficzne",
    "type": "multi_select",
    "prompt": "Zaznacz przyczyny poszukiwania przez Europejczyków morskiej drogi do Indii.",
    "options": [
      "utrudnienie handlu lądowego przez podboje Turków osmańskich",
      "chęć sprowadzania luksusowych towarów z Dalekiego Wschodu taniej i bezpieczniej",
      "opowieści o bogactwach Azji i brak złota oraz metali szlachetnych w Europie",
      "zakaz używania kompasu na Morzu Śródziemnym",
      "odkrycie w Ameryce wielkich plantacji kawy przed wyprawą Kolumba",
      "zniknięcie wszystkich portów w Europie Zachodniej"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Kupcy i władcy szukali nowej drogi, bo handel Jedwabnym Szlakiem był utrudniony i drogi, a Daleki Wschód kojarzono z luksusowymi towarami oraz metalami szlachetnymi."
  },
  {
    "id": "R01_WOG_05",
    "section": "Wielkie odkrycia geograficzne",
    "type": "fill_in",
    "prompt": "Prastary szlak handlowy łączący Chiny z Europą nazywano __________ Szlakiem.",
    "options": null,
    "answer": [
      "Jedwabnym"
    ],
    "altAnswers": [
      [
        "Jedwabnym",
        "jedwabnym"
      ]
    ],
    "explanation": "Jedwabny Szlak prowadził od Chin przez kraje arabskie do śródziemnomorskich wybrzeży Europy."
  },
  {
    "id": "R01_WOG_06",
    "section": "Wielkie odkrycia geograficzne",
    "type": "scenario",
    "prompt": "Jesteś żeglarzem w 1492 roku. Płyniesz z wybrzeży Hiszpanii na zachód przez Atlantyk, a po prawie dziewięciu tygodniach docierasz do wyspy nazwanej San Salvador. Kto dowodzi wyprawą?",
    "image": "r01_wyprawa_kolumba.jpg",
    "options": [
      "Krzysztof Kolumb",
      "Vasco da Gama",
      "Ferdynand Magellan",
      "Amerigo Vespucci",
      "Jan Gutenberg",
      "Jan Kalwin"
    ],
    "answer": 0,
    "explanation": "W 1492 roku trzy statki pod dowództwem Krzysztofa Kolumba wyruszyły z Hiszpanii na zachód i dotarły do wyspy San Salvador na Morzu Karaibskim."
  },
  {
    "id": "R01_WOG_07",
    "section": "Wielkie odkrycia geograficzne",
    "type": "riddle",
    "prompt": "Jaką nazwę Król Portugalii nadał najdalej wysuniętemu na południe skrawkowi Afryki, aby zachęcić żeglarzy do dalszej drogi do Indii?",
    "options": null,
    "answer": "Przylądek Dobrej Nadziei",
    "altAnswers": [
      "Przylądek Dobrej Nadziei",
      "Przyladek Dobrej Nadziei",
      "Dobrej Nadziei"
    ],
    "explanation": "Po dotarciu Portugalczyków do południowego krańca Afryki nazwano go Przylądkiem Dobrej Nadziei."
  },
  {
    "id": "R01_WOG_08",
    "section": "Wielkie odkrycia geograficzne",
    "type": "single_choice",
    "prompt": "Dlaczego rdzennych mieszkańców Ameryki pierwsi odkrywcy nazwali Indianami?",
    "image": "r01_wyprawa_kolumba.jpg",
    "options": [
      "bo Kolumb był przekonany, że dotarł do Indii",
      "bo przybyli z Indii w XVI wieku",
      "bo mieszkali nad Oceanem Indyjskim",
      "bo tak nazywał ich Amerigo Vespucci przed 1492 rokiem",
      "bo Vasco da Gama założył tam pierwsze miasto",
      "bo Magellan nadał im tę nazwę po opłynięciu świata"
    ],
    "answer": 0,
    "explanation": "Kolumb zmarł w przekonaniu, że dotarł do wybrzeży Indii, dlatego rdzenni mieszkańcy Ameryki zostali nazwani Indianami."
  },
  {
    "id": "R01_WOG_09",
    "section": "Wielkie odkrycia geograficzne",
    "type": "sequence",
    "prompt": "Ułóż wyprawy w porządku chronologicznym.",
    "options": null,
    "items": [
      "wyprawa Ferdynanda Magellana dookoła świata",
      "pierwsza wyprawa Krzysztofa Kolumba",
      "dotarcie Vasco da Gamy do Indii",
      "powrót jednego statku wyprawy Magellana do Hiszpanii"
    ],
    "answer": [
      "pierwsza wyprawa Krzysztofa Kolumba",
      "dotarcie Vasco da Gamy do Indii",
      "wyprawa Ferdynanda Magellana dookoła świata",
      "powrót jednego statku wyprawy Magellana do Hiszpanii"
    ],
    "explanation": "Kolumb wypłynął w 1492 roku, Vasco da Gama dotarł do Indii w 1498 roku, Magellan rozpoczął wyprawę w 1519 roku, a jeden statek wrócił w 1522 roku."
  },
  {
    "id": "R01_WOG_10",
    "section": "Wielkie odkrycia geograficzne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Krzysztof Kolumb, Vasco da Gama, Ferdynand Magellan, Mikołaj Kopernik.",
    "options": null,
    "answer": "Mikołaj Kopernik",
    "explanation": "Kolumb, Vasco da Gama i Magellan byli żeglarzami wielkich wypraw geograficznych, a Kopernik był astronomem."
  },
  {
    "id": "R01_KOG_01",
    "section": "Konsekwencje wielkich odkryć geograficznych",
    "type": "true_false",
    "prompt": "Od początku wypraw europejskim żeglarzom i władcom przyświecał także cel nawracania rdzennej ludności na chrześcijaństwo.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik wskazuje, że obok bogactw i podporządkowania nowych ziem ważnym celem było nawracanie miejscowej ludności na chrześcijaństwo."
  },
  {
    "id": "R01_KOG_02",
    "section": "Konsekwencje wielkich odkryć geograficznych",
    "type": "single_choice",
    "prompt": "Który lud utworzył jedno z najpotężniejszych państw na terenach dzisiejszego Meksyku?",
    "options": [
      "Aztekowie",
      "Inkowie",
      "Wikingowie",
      "Portugalczycy",
      "Holendrzy",
      "Bizantyjczycy"
    ],
    "answer": 0,
    "explanation": "Na obszarze dzisiejszego Meksyku jedno z najpotężniejszych państw stworzyli Aztekowie."
  },
  {
    "id": "R01_KOG_03",
    "section": "Konsekwencje wielkich odkryć geograficznych",
    "type": "riddle",
    "prompt": "Jak nazywała się stolica imperium Azteków?",
    "image": "r01_tenochtitlan_miasto.jpg",
    "options": null,
    "answer": "Tenochtitlan",
    "altAnswers": [
      "Tenochtitlan",
      "Tenochtitlán",
      "Tenochtitlin"
    ],
    "explanation": "Stolicą państwa Azteków było Tenochtitlan, miasto z pałacami, świątyniami i pływającymi ogrodami."
  },
  {
    "id": "R01_KOG_04",
    "section": "Konsekwencje wielkich odkryć geograficznych",
    "type": "single_choice",
    "prompt": "Jak Aztekowie wyobrażali sobie jednego z najważniejszych bogów, stworzyciela świata?",
    "options": [
      "jako Zielonego Pierzastego Węża",
      "jako czarnego orła z berłem",
      "jako białego konia z mieczem",
      "jako kamienny statek",
      "jako boga ukrytego w kompasie",
      "jako lwa z koroną papieską"
    ],
    "answer": 0,
    "explanation": "Aztekowie wyobrażali sobie tego boga jako Zielonego Pierzastego Węża, który miał powrócić jako brodaty mężczyzna o białej skórze."
  },
  {
    "id": "R01_KOG_05",
    "section": "Konsekwencje wielkich odkryć geograficznych",
    "type": "fill_in",
    "prompt": "Państwo Inków liczyło ponad __________ mln mieszkańców, a władcy wywodzili swój rodowód od boga __________.",
    "options": null,
    "answer": [
      "8",
      "Słońca"
    ],
    "altAnswers": [
      [
        "8",
        "osiem"
      ],
      [
        "Słońca",
        "Slonca",
        "słońca",
        "slonca"
      ]
    ],
    "explanation": "Podręcznik podaje, że państwo Inków liczyło ponad 8 mln mieszkańców, a władcom przypisywano pochodzenie od boga Słońca."
  },
  {
    "id": "R01_KOG_06",
    "section": "Konsekwencje wielkich odkryć geograficznych",
    "type": "multi_select",
    "prompt": "Zaznacz informacje zgodne z opisem miasta Tenochtitlan.",
    "image": "r01_tenochtitlan_miasto.jpg",
    "options": [
      "założono je na wyspie na jeziorze Texcoco",
      "na początku XV wieku liczyło około 200 tys. mieszkańców",
      "najważniejszym obiektem była schodkowa piramida ze świątynią",
      "było stolicą państwa Inków",
      "powstało dopiero po przybyciu Hiszpanów",
      "nie miało świątyń ani targów"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Infografika opisuje Tenochtitlan jako azteckie miasto na wyspie jeziora Texcoco, liczące około 200 tys. mieszkańców i mające ważną piramidę świątynną."
  },
  {
    "id": "R01_KOG_07",
    "section": "Konsekwencje wielkich odkryć geograficznych",
    "type": "single_choice",
    "prompt": "Jak nazywano hiszpańskich zdobywców podbijających ziemie w Nowym Świecie?",
    "options": [
      "konkwistadorami",
      "humanistami",
      "mecenasami",
      "jezuitami",
      "luteranami",
      "astronomami"
    ],
    "answer": 0,
    "explanation": "Hiszpańskich zdobywców w Ameryce nazywano konkwistadorami."
  },
  {
    "id": "R01_KOG_08",
    "section": "Konsekwencje wielkich odkryć geograficznych",
    "type": "scenario",
    "prompt": "Masz pod komendą niewiele ponad pięciuset Europejczyków. Po wylądowaniu na wybrzeżu Meksyku każesz spalić własne okręty, aby uniemożliwić odwrót. Którym konkwistadorem jesteś?",
    "image": "r01_konkwistadorzy_i_indianie.jpg",
    "options": [
      "Hernán Cortés",
      "Franciszek Ksawery",
      "Mikołaj Kopernik",
      "Jan Gutenberg",
      "Rafael Santi",
      "Stanisław Hozjusz"
    ],
    "answer": 0,
    "explanation": "Podręcznik opisuje Hernána Cortésa jako konkwistadora, który w latach 1519-1521 podbił imperium Azteków i po wylądowaniu nakazał spalenie okrętów."
  },
  {
    "id": "R01_KOG_09",
    "section": "Konsekwencje wielkich odkryć geograficznych",
    "type": "sort",
    "prompt": "Przyporządkuj produkty do kierunku wymiany opisanej po odkryciach geograficznych.",
    "image": "r01_konkwistadorzy_i_indianie.jpg",
    "options": null,
    "items": [
      "kakao",
      "tytoń",
      "kukurydza",
      "ananasy",
      "ziemniaki",
      "trzcina cukrowa",
      "bawełna",
      "kawa"
    ],
    "categories": [
      "z Ameryki do Europy",
      "z Azji na plantacje w Ameryce"
    ],
    "answer": {
      "z Ameryki do Europy": [
        "kakao",
        "tytoń",
        "kukurydza",
        "ananasy",
        "ziemniaki"
      ],
      "z Azji na plantacje w Ameryce": [
        "trzcina cukrowa",
        "bawełna",
        "kawa"
      ]
    },
    "explanation": "Z Ameryki sprowadzano do Europy m.in. kakao, tytoń, kukurydzę, ananasy i ziemniaki, natomiast na plantacjach amerykańskich uprawiano sprowadzone z Azji trzcinę cukrową, bawełnę i kawę."
  },
  {
    "id": "R01_KOG_10",
    "section": "Konsekwencje wielkich odkryć geograficznych",
    "type": "single_choice",
    "prompt": "Kto według podręcznika był jednym z pierwszych obrońców Indian i doprowadził do wydania w 1542 roku zakazu brania ich w niewolę w koloniach hiszpańskich?",
    "image": "r01_handel_niewolnikami.jpg",
    "options": [
      "Bartolomé de Las Casas",
      "Ignacy Loyola",
      "Jan Kalwin",
      "Henryk VIII",
      "Amerigo Vespucci",
      "Galileusz"
    ],
    "answer": 0,
    "explanation": "Bartolomé de Las Casas, dominikanin i misjonarz, zasłynął jako obrońca Indian; dzięki jego żądaniom w 1542 roku zakazano brania Indian w niewolę w koloniach hiszpańskich."
  },
  {
    "id": "R01_ODR_01",
    "section": "Kultura odrodzenia we Włoszech",
    "type": "single_choice",
    "prompt": "Jak nazywamy nową epokę w kulturze Europy trwającą od XV do schyłku XVI wieku?",
    "image": "r01_renesansowe_wlochy.jpg",
    "options": [
      "odrodzenie lub renesans",
      "romanizm lub gotyk",
      "oświecenie",
      "barok",
      "reformacja",
      "kontrreformacja"
    ],
    "answer": 0,
    "explanation": "Podręcznik określa epokę od XV do schyłku XVI wieku mianem odrodzenia lub renesansu."
  },
  {
    "id": "R01_ODR_02",
    "section": "Kultura odrodzenia we Włoszech",
    "type": "multi_select",
    "prompt": "Zaznacz powody, dla których kolebką renesansu były Włochy.",
    "image": "r01_renesansowe_wlochy.jpg",
    "options": [
      "widoczne ślady kultury starożytnych Rzymian",
      "uczeni z Bizancjum przynieśli wiedzę o kulturze starożytnej Grecji",
      "bogactwo włoskich miast czerpane z banków, handlu i rzemiosła",
      "całkowity brak uniwersytetów we Włoszech",
      "zakaz mecenatu artystów przez książąt",
      "izolacja Włoch od kultury antycznej"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Renesans narodził się we Włoszech dzięki żywym śladom antyku, napływowi uczonych z Bizancjum, starym uniwersytetom oraz bogactwu miast i mecenasów."
  },
  {
    "id": "R01_ODR_03",
    "section": "Kultura odrodzenia we Włoszech",
    "type": "riddle",
    "prompt": "Jak nazywano opiekunów artystów i uczonych, którzy zatrudniali twórców i wspierali ich działalność?",
    "options": null,
    "answer": "mecenasi",
    "altAnswers": [
      "mecenasi",
      "mecenas",
      "opiekunowie"
    ],
    "explanation": "Książęta, papieże, biskupi i najzamożniejsi ludzie stawali się mecenasami, czyli opiekunami artystów i uczonych."
  },
  {
    "id": "R01_ODR_04",
    "section": "Kultura odrodzenia we Włoszech",
    "type": "match",
    "prompt": "Połącz twórcę włoskiego renesansu z opisanym dokonaniem lub dziełem.",
    "image": "r01_leonardo_pracownia.jpg",
    "options": null,
    "left": [
      "Leonardo da Vinci",
      "Michał Anioł",
      "Rafael Santi"
    ],
    "right": [
      "Mona Lisa i Człowiek witruwiański",
      "freski w Kaplicy Sykstyńskiej i kopuła Bazyliki św. Piotra",
      "Szkoła ateńska i obrazy Madonny z Dzieciątkiem"
    ],
    "answer": {
      "Leonardo da Vinci": "Mona Lisa i Człowiek witruwiański",
      "Michał Anioł": "freski w Kaplicy Sykstyńskiej i kopuła Bazyliki św. Piotra",
      "Rafael Santi": "Szkoła ateńska i obrazy Madonny z Dzieciątkiem"
    },
    "explanation": "Leonardo, Michał Anioł i Rafael Santi to najważniejsi artyści włoskiego renesansu opisani w podręczniku."
  },
  {
    "id": "R01_ODR_05",
    "section": "Kultura odrodzenia we Włoszech",
    "type": "fill_in",
    "prompt": "Prąd umysłowy i kulturalny odrodzenia, skupiony przede wszystkim na człowieku, nazywa się __________.",
    "options": null,
    "answer": [
      "humanizmem"
    ],
    "altAnswers": [
      [
        "humanizmem",
        "humanizm"
      ]
    ],
    "explanation": "Humanizm to prąd kultury odrodzenia, którego nazwa pochodzi od łacińskiego humanus, czyli ludzki."
  },
  {
    "id": "R01_ODR_06",
    "section": "Kultura odrodzenia we Włoszech",
    "type": "true_false",
    "prompt": "Leonardo da Vinci interesował się wyłącznie malarstwem i nie zajmował się techniką ani medycyną.",
    "image": "r01_leonardo_pracownia.jpg",
    "options": null,
    "answer": false,
    "explanation": "Leonardo był człowiekiem wszechstronnym: malarzem, rzeźbiarzem i pisarzem, a interesował się także architekturą, techniką, muzyką oraz medycyną."
  },
  {
    "id": "R01_ODR_07",
    "section": "Kultura odrodzenia we Włoszech",
    "type": "single_choice",
    "prompt": "Co według podręcznika oznacza określenie człowiek renesansu?",
    "options": [
      "osobę o dużej wiedzy i wielu zainteresowaniach",
      "osobę, która nie umie czytać po łacinie",
      "żołnierza walczącego z piratami",
      "mnicha sprzedającego odpusty",
      "kupca płacącego na Jedwabnym Szlaku",
      "władcę Kościoła Anglii"
    ],
    "answer": 0,
    "explanation": "Określenie człowiek renesansu odnosi się do osoby wszechstronnej, o rozległej wiedzy i zainteresowaniach."
  },
  {
    "id": "R01_ODR_08",
    "section": "Kultura odrodzenia we Włoszech",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Leonardo da Vinci, Michał Anioł, Rafael Santi, Jan Kalwin.",
    "options": null,
    "answer": "Jan Kalwin",
    "explanation": "Leonardo, Michał Anioł i Rafael Santi byli wielkimi artystami włoskiego renesansu, a Jan Kalwin był reformatorem religijnym."
  },
  {
    "id": "R01_ODR_09",
    "section": "Kultura odrodzenia we Włoszech",
    "type": "scenario",
    "prompt": "Jesteś XV-wiecznym władcą Florencji z rodu Medyceuszy. Zasłynąłeś jako mecenas, a na twoim dworze pracował młody Michał Anioł. Jak cię nazwano w podręczniku?",
    "options": [
      "Wawrzyniec Wspaniały",
      "Jan Gutenberg",
      "Hernán Cortés",
      "Franciszek Ksawery",
      "Marcin Luter",
      "Jean Bodin"
    ],
    "answer": 0,
    "explanation": "Wawrzyniec Wspaniały z rodu Medyceuszy był władcą Florencji i zasłynął jako mecenas artystów."
  },
  {
    "id": "R01_ODR_10",
    "section": "Kultura odrodzenia we Włoszech",
    "type": "single_choice",
    "prompt": "Jakie starożytne elementy architektury wskazano przy Panteonie jako naśladowane przez twórców renesansowych?",
    "options": [
      "portyk z kolumnami i kopułę",
      "wieżę z zegarem i ostre łuki",
      "drewniany most zwodzony",
      "gotyckie witraże i strzeliste wieże",
      "papierową prasę drukarską",
      "schodkową piramidę ze świątynią"
    ],
    "answer": 0,
    "explanation": "Opis Panteonu zwraca uwagę na portyk z kolumnami oraz kopułę, czyli elementy chętnie naśladowane w renesansie."
  },
  {
    "id": "R01_HUM_01",
    "section": "Humanizm i przewrót kopernikański",
    "type": "true_false",
    "prompt": "Na przełomie XV i XVI wieku kultura renesansowa oraz humanizm zaczęły rozprzestrzeniać się w większości krajów europejskich.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik wskazuje, że zjawisko to było związane m.in. z podróżami do Włoch i kontaktami z tamtejszymi humanistami."
  },
  {
    "id": "R01_HUM_02",
    "section": "Humanizm i przewrót kopernikański",
    "type": "single_choice",
    "prompt": "Komu podręcznik przypisuje wynalazek ruchomej czcionki drukarskiej zastosowany około 1450 roku?",
    "image": "r01_drukarnia_gutenberga.jpg",
    "options": [
      "Janowi Gutenbergowi",
      "Erazmowi z Rotterdamu",
      "Mikołajowi Kopernikowi",
      "Galileuszowi",
      "Leonardowi da Vinci",
      "Jeanowi Bodinowi"
    ],
    "answer": 0,
    "explanation": "Ruchome czcionki drukarskie były dziełem niemieckiego drukarza Jana Gutenberga i zostały zastosowane około 1450 roku."
  },
  {
    "id": "R01_HUM_03",
    "section": "Humanizm i przewrót kopernikański",
    "type": "sequence",
    "prompt": "Ułóż etapy pracy drukarskiej w kolejności opisanej w podręczniku.",
    "image": "r01_drukarnia_gutenberga.jpg",
    "options": null,
    "items": [
      "suszenie zadrukowanego arkusza",
      "ułożenie wyrazów z czcionek w wierszownikach",
      "pokrycie czcionek farbą drukarską",
      "dociśnięcie arkusza w prasie drukarskiej"
    ],
    "answer": [
      "ułożenie wyrazów z czcionek w wierszownikach",
      "pokrycie czcionek farbą drukarską",
      "dociśnięcie arkusza w prasie drukarskiej",
      "suszenie zadrukowanego arkusza"
    ],
    "explanation": "Najpierw składano tekst z czcionek, potem pokrywano je farbą, odbijano arkusz w prasie, a na końcu suszono zadrukowany papier."
  },
  {
    "id": "R01_HUM_04",
    "section": "Humanizm i przewrót kopernikański",
    "type": "fill_in",
    "prompt": "Pierwszym dziełem drukowanym przez Gutenberga w 1455 roku była __________ w języku __________.",
    "options": null,
    "answer": [
      "Biblia",
      "łacińskim"
    ],
    "altAnswers": [
      [
        "Biblia",
        "biblia"
      ],
      [
        "łacińskim",
        "lacinskim",
        "łacina",
        "lacina"
      ]
    ],
    "explanation": "Gutenberg wydrukował w 1455 roku Biblię w języku łacińskim."
  },
  {
    "id": "R01_HUM_05",
    "section": "Humanizm i przewrót kopernikański",
    "type": "single_choice",
    "prompt": "Który humanista nosił przydomek księcia humanistów i sam siebie określał mianem obywatela świata?",
    "options": [
      "Erazm z Rotterdamu",
      "Stanisław Hozjusz",
      "Ignacy Loyola",
      "Marcin Luter",
      "Henryk VIII",
      "Rafael Santi"
    ],
    "answer": 0,
    "explanation": "Erazm z Rotterdamu dzięki swej działalności i podróżom był nazywany księciem humanistów, a siebie określał jako obywatela świata."
  },
  {
    "id": "R01_HUM_06",
    "section": "Humanizm i przewrót kopernikański",
    "type": "multi_select",
    "prompt": "Zaznacz poglądy i działania Erazma z Rotterdamu opisane w rozdziale.",
    "options": [
      "potępiał wojny",
      "nawoływał do tolerancji wobec osób innego wyznania niż katolickie",
      "krytykował nadużycia władców i duchownych",
      "założył zakon jezuitów",
      "podbił imperium Azteków",
      "ogłosił parlamentowi Anglii głowę Kościoła"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Erazm potępiał wojny, głosił potrzebę tolerancji i krytykował nadużycia popełniane przez władców oraz duchownych."
  },
  {
    "id": "R01_HUM_07",
    "section": "Humanizm i przewrót kopernikański",
    "type": "riddle",
    "prompt": "Kto ogłosił teorię heliocentryczną, według której Ziemia i inne planety Układu Słonecznego krążą wokół Słońca?",
    "image": "r01_kopernik_obserwatorium.jpg",
    "options": null,
    "answer": "Mikołaj Kopernik",
    "altAnswers": [
      "Mikołaj Kopernik",
      "Mikolaj Kopernik",
      "Kopernik"
    ],
    "explanation": "Teoria heliocentryczna została ogłoszona przez Mikołaja Kopernika w dziele O obrotach sfer niebieskich."
  },
  {
    "id": "R01_HUM_08",
    "section": "Humanizm i przewrót kopernikański",
    "type": "match",
    "prompt": "Połącz system astronomiczny z jego głównym założeniem.",
    "image": "r01_kopernik_obserwatorium.jpg",
    "options": null,
    "left": [
      "układ geocentryczny",
      "układ heliocentryczny"
    ],
    "right": [
      "nieruchoma Ziemia w centrum kosmosu",
      "Ziemia i planety krążą wokół Słońca"
    ],
    "answer": {
      "układ geocentryczny": "nieruchoma Ziemia w centrum kosmosu",
      "układ heliocentryczny": "Ziemia i planety krążą wokół Słońca"
    },
    "explanation": "Ptolemejski geocentryzm stawiał w centrum nieruchomą Ziemię, a Kopernik stworzył podstawy systemu heliocentrycznego ze Słońcem w centrum Układu Słonecznego."
  },
  {
    "id": "R01_HUM_09",
    "section": "Humanizm i przewrót kopernikański",
    "type": "scenario",
    "prompt": "Jesteś włoskim astronomem i fizykiem żyjącym niemal sto lat po Koperniku. Udoskonalasz prosty teleskop, potwierdzasz teorię heliocentryczną i w 1633 roku stajesz przed sądem kościelnym. Kim jesteś?",
    "options": [
      "Galileuszem",
      "Janem Gutenbergiem",
      "Jeanem Bodinem",
      "Rafaelem Santim",
      "Vasco da Gamą",
      "Henrykiem VIII"
    ],
    "answer": 0,
    "explanation": "Galileusz udoskonalił teleskop, potwierdził teorię Kopernika i za opublikowanie wyników badań został postawiony przed sądem kościelnym."
  },
  {
    "id": "R01_HUM_10",
    "section": "Humanizm i przewrót kopernikański",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Toruń, Olsztyn, Frombork, Genewa.",
    "options": null,
    "answer": "Genewa",
    "explanation": "Toruń, Olsztyn i Frombork wiążą się z życiem Mikołaja Kopernika, natomiast Genewa była głównym miejscem działalności Jana Kalwina."
  },
  {
    "id": "R01_REF_01",
    "section": "Reformacja",
    "type": "single_choice",
    "prompt": "Jaka praktyka kościelna szczególnie budziła niezadowolenie na początku XVI wieku?",
    "options": [
      "sprzedaż odpustów",
      "budowa pływających ogrodów",
      "drukowanie map Ptolemeusza",
      "wyprawa do Japonii",
      "używanie astrolabium",
      "zakładanie plantacji bawełny"
    ],
    "answer": 0,
    "explanation": "Szczególne niezadowolenie budziła sprzedaż odpustów, czyli odpuszczanie kary za grzechy w zamian za opłaty pieniężne."
  },
  {
    "id": "R01_REF_02",
    "section": "Reformacja",
    "type": "fill_in",
    "prompt": "Marcin Luter ogłosił __________ tez dnia __________ października 1517 roku.",
    "image": "r01_wystapienie_lutra.jpg",
    "options": null,
    "answer": [
      "95",
      "31"
    ],
    "altAnswers": [
      [
        "95",
        "dziewięćdziesiąt pięć",
        "dziewiecdziesiat piec"
      ],
      [
        "31",
        "trzydziestego pierwszego",
        "31."
      ]
    ],
    "explanation": "31 października 1517 roku Marcin Luter ogłosił 95 tez krytykujących sprzedaż odpustów."
  },
  {
    "id": "R01_REF_03",
    "section": "Reformacja",
    "type": "riddle",
    "prompt": "Jak nazywamy ruch zapoczątkowany przez zwolenników Lutra, dążący do reformy życia kościelnego?",
    "options": null,
    "answer": "reformacja",
    "altAnswers": [
      "reformacja",
      "Reformacja"
    ],
    "explanation": "Ruch dążący do zreformowania życia kościelnego i zapoczątkowany przez zwolenników Lutra nazywamy reformacją."
  },
  {
    "id": "R01_REF_04",
    "section": "Reformacja",
    "type": "multi_select",
    "prompt": "Zaznacz poglądy lub postulaty Marcina Lutra opisane w rozdziale.",
    "image": "r01_wystapienie_lutra.jpg",
    "options": [
      "krytyka sprzedaży odpustów",
      "podważanie pozycji papieży jako zwierzchników Kościoła",
      "żądanie sekularyzacji klasztorów",
      "utrzymanie celibatu jako najważniejszej zasady reformacji",
      "uznanie papieża za bezpośredniego dowódcę wszystkich zborów",
      "zakaz tłumaczenia Biblii na język niemiecki"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Luter krytykował sprzedaż odpustów, podważał zwierzchnictwo papieża i domagał się sekularyzacji, czyli rozwiązania klasztorów i rezygnacji duchownych z własności ziemskiej."
  },
  {
    "id": "R01_REF_05",
    "section": "Reformacja",
    "type": "single_choice",
    "prompt": "Jaka była ważna konsekwencja tłumaczenia Biblii przez Lutra na język niemiecki?",
    "options": [
      "położyło podstawy pod rozwój nowożytnego literackiego języka niemieckiego",
      "zatrzymało rozwój druku w Europie",
      "doprowadziło do odkrycia Ameryki",
      "spowodowało powstanie zakonu jezuitów",
      "ustanowiło Mikołaja Kopernika biskupem Rzymu",
      "przeniosło stolicę reformacji do Tenochtitlan"
    ],
    "answer": 0,
    "explanation": "Podręcznik podkreśla, że tłumaczenie Biblii dokonane przez Lutra położyło podstawy pod rozwój nowożytnego literackiego języka niemieckiego."
  },
  {
    "id": "R01_REF_06",
    "section": "Reformacja",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do Kościoła katolickiego albo ewangelickiego według opisu z rozdziału.",
    "options": null,
    "items": [
      "uznawanie władzy papieża",
      "nabożeństwa po łacinie",
      "nieuznawanie władzy papieża",
      "Biblia dostępna w języku zrozumiałym dla wiernych",
      "zniesienie celibatu duchownych"
    ],
    "categories": [
      "Kościół katolicki",
      "Kościół ewangelicki"
    ],
    "answer": {
      "Kościół katolicki": [
        "uznawanie władzy papieża",
        "nabożeństwa po łacinie"
      ],
      "Kościół ewangelicki": [
        "nieuznawanie władzy papieża",
        "Biblia dostępna w języku zrozumiałym dla wiernych",
        "zniesienie celibatu duchownych"
      ]
    },
    "explanation": "W opisie luteranizmu podkreślono odrzucenie władzy papieża, znaczenie Biblii w języku zrozumiałym dla wiernych i zniesienie celibatu; dla katolików papież pozostawał najwyższym zwierzchnikiem, a nabożeństwa odprawiano po łacinie."
  },
  {
    "id": "R01_REF_07",
    "section": "Reformacja",
    "type": "true_false",
    "prompt": "Pokój augsburski z 1555 roku uznał w Rzeszy obok Kościoła katolickiego także Kościół ewangelicko-augsburski.",
    "options": null,
    "answer": true,
    "explanation": "Pokój podpisany w Augsburgu w 1555 roku zakończył konflikt kompromisem i uznał istnienie Kościoła ewangelicko-augsburskiego w Rzeszy."
  },
  {
    "id": "R01_REF_08",
    "section": "Reformacja",
    "type": "scenario",
    "prompt": "Działasz głównie w Genewie. Twoi zwolennicy tworzą Kościół ewangelicko-reformowany, a w ich zborach centralne miejsce zajmuje Biblia i surowy wystrój. Kim jesteś?",
    "image": "r01_zbor_kalwinski.jpg",
    "options": [
      "Janem Kalwinem",
      "Marcinem Lutrem",
      "Henrykiem VIII",
      "Ignacym Loyolą",
      "Erazmem z Rotterdamu",
      "Franciszkiem Ksawerym"
    ],
    "answer": 0,
    "explanation": "Jan Kalwin działał głównie w Genewie, a jego zwolennicy, kalwiniści, utworzyli Kościół ewangelicko-reformowany."
  },
  {
    "id": "R01_REF_09",
    "section": "Reformacja",
    "type": "single_choice",
    "prompt": "Kto w 1534 roku został ogłoszony przez angielski parlament głową Kościoła Anglii?",
    "options": [
      "Henryk VIII",
      "Jan Kalwin",
      "Marcin Luter",
      "papież Leon X",
      "Michał Anioł",
      "Vasco da Gama"
    ],
    "answer": 0,
    "explanation": "Pod naciskiem Henryka VIII parlament angielski w 1534 roku ogłosił monarchę głową Kościoła Anglii, zrywając ze zwierzchnictwem papieskim."
  },
  {
    "id": "R01_REF_10",
    "section": "Reformacja",
    "type": "match",
    "prompt": "Połącz pojęcie reformacyjne z właściwym opisem.",
    "options": null,
    "left": [
      "luteranie",
      "kalwiniści",
      "anglikanizm"
    ],
    "right": [
      "zwolennicy nauk Marcina Lutra",
      "zwolennicy nauki Jana Kalwina",
      "Kościół Anglii związany z monarchą"
    ],
    "answer": {
      "luteranie": "zwolennicy nauk Marcina Lutra",
      "kalwiniści": "zwolennicy nauki Jana Kalwina",
      "anglikanizm": "Kościół Anglii związany z monarchą"
    },
    "explanation": "Luteranie odwoływali się do Lutra, kalwiniści do Kalwina, a anglikanizm powstał w Anglii po zerwaniu z papiestwem przez Henryka VIII."
  },
  {
    "id": "R01_KAT_01",
    "section": "Reforma katolicka",
    "type": "single_choice",
    "prompt": "Który sobór dokonał w XVI wieku reformy Kościoła katolickiego?",
    "image": "r01_sobor_trydencki.jpg",
    "options": [
      "sobór trydencki",
      "sobór nicejski",
      "sobór laterański pierwszy",
      "sobór w Augsburgu",
      "sobór w Genewie",
      "sobór w Tenochtitlan"
    ],
    "answer": 0,
    "explanation": "Reformy Kościoła katolickiego dokonał sobór trydencki, obradujący w latach 1545-1563."
  },
  {
    "id": "R01_KAT_02",
    "section": "Reforma katolicka",
    "type": "multi_select",
    "prompt": "Zaznacz ważniejsze reformy soboru trydenckiego wymienione w podręczniku.",
    "image": "r01_sobor_trydencki.jpg",
    "options": [
      "zakładanie seminariów duchownych",
      "nakaz noszenia sutann przez księży",
      "obowiązek stałego przebywania proboszczów w parafiach i biskupów w diecezjach",
      "zniesienie wszystkich sakramentów",
      "odrzucenie prymatu papieży",
      "przeniesienie nabożeństw wyłącznie na język niemiecki"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Sobór trydencki troszczył się o wykształcenie i dyscyplinę duchowieństwa: zakładano seminaria, nakazano sutanny oraz stałą obecność proboszczów i biskupów w powierzonych im miejscach."
  },
  {
    "id": "R01_KAT_03",
    "section": "Reforma katolicka",
    "type": "fill_in",
    "prompt": "Sobór trydencki obradował w latach __________-__________.",
    "options": null,
    "answer": [
      "1545",
      "1563"
    ],
    "altAnswers": [
      [
        "1545",
        "1545 r."
      ],
      [
        "1563",
        "1563 r."
      ]
    ],
    "explanation": "Obrady soboru trydenckiego trwały prawie osiemnaście lat, od 1545 do 1563 roku."
  },
  {
    "id": "R01_KAT_04",
    "section": "Reforma katolicka",
    "type": "riddle",
    "prompt": "Jak nazywał się specjalny spis dzieł uznanych za niezgodne z wiarą katolicką, których lektura i rozpowszechnianie groziły karami kościelnymi?",
    "options": null,
    "answer": "Indeks ksiąg zakazanych",
    "altAnswers": [
      "Indeks ksiąg zakazanych",
      "Indeks ksiag zakazanych",
      "index ksiąg zakazanych",
      "Index librorum prohibitorum"
    ],
    "explanation": "Indeks ksiąg zakazanych był spisem dzieł ocenionych jako niezgodne z wiarą katolicką."
  },
  {
    "id": "R01_KAT_05",
    "section": "Reforma katolicka",
    "type": "true_false",
    "prompt": "Na Indeksie ksiąg zakazanych umieszczono wkrótce dzieło Mikołaja Kopernika O obrotach sfer niebieskich.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik podaje, że na indeksie znalazło się m.in. dzieło Mikołaja Kopernika O obrotach sfer niebieskich."
  },
  {
    "id": "R01_KAT_06",
    "section": "Reforma katolicka",
    "type": "single_choice",
    "prompt": "Kto założył zakon jezuitów?",
    "options": [
      "Ignacy Loyola",
      "Franciszek Ksawery",
      "Stanisław Hozjusz",
      "Erazm z Rotterdamu",
      "Marcin Luter",
      "Jean Bodin"
    ],
    "answer": 0,
    "explanation": "Zakon jezuitów założył Hiszpan Ignacy Loyola w 1534 roku."
  },
  {
    "id": "R01_KAT_07",
    "section": "Reforma katolicka",
    "type": "scenario",
    "prompt": "Studiujesz razem z Ignacym Loyolą i zostajesz jednym z pierwszych jezuitów. Wyruszasz do Indii, prowadzisz misje, pomagasz potrzebującym i jako pierwszy misjonarz z Europy docierasz do Japonii. Kim jesteś?",
    "image": "r01_jezuici_na_misji.jpg",
    "options": [
      "Franciszkiem Ksawerym",
      "Stanisławem Hozjuszem",
      "Henrykiem VIII",
      "Janem Kalwinem",
      "Galileuszem",
      "Bartolomé de Las Casasem"
    ],
    "answer": 0,
    "explanation": "Franciszek Ksawery był jednym z pierwszych jezuitów, działał w Indiach i jako pierwszy misjonarz z Europy dotarł do Japonii."
  },
  {
    "id": "R01_KAT_08",
    "section": "Reforma katolicka",
    "type": "single_choice",
    "prompt": "Dlaczego jezuitów nazywano żołnierzami Boga i armią papieża?",
    "image": "r01_jezuici_na_misji.jpg",
    "options": [
      "ponieważ składali ślub posłuszeństwa papieżowi",
      "ponieważ dowodzili wojskami Henryka VIII",
      "ponieważ podbili imperium Inków",
      "ponieważ zakazali drukowania Biblii",
      "ponieważ budowali karawelę dla Kolumba",
      "ponieważ rządzili Rzeszą jako cesarze"
    ],
    "answer": 0,
    "explanation": "Jezuici składali ślub posłuszeństwa papieżowi, dlatego nazywano ich żołnierzami Boga i armią papieża."
  },
  {
    "id": "R01_KAT_09",
    "section": "Reforma katolicka",
    "type": "multi_select",
    "prompt": "Zaznacz konsekwencje reformacji i kontrreformacji wskazane w podsumowaniu lekcji.",
    "options": [
      "krwawe wojny religijne",
      "podział wyznaniowy Europy",
      "rozwój idei tolerancji religijnej",
      "zniknięcie wszystkich języków narodowych",
      "odkrycie morskiej drogi do Indii",
      "powstanie imperium Azteków"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Podręcznik wskazuje zarówno negatywne skutki, takie jak wojny i podziały, jak i pozytywny rozwój idei tolerancji religijnej."
  },
  {
    "id": "R01_KAT_10",
    "section": "Reforma katolicka",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: sobór trydencki, Indeks ksiąg zakazanych, jezuici, karawela.",
    "options": null,
    "answer": "karawela",
    "explanation": "Sobór trydencki, Indeks ksiąg zakazanych i jezuici wiążą się z reformą katolicką, a karawela z wielkimi odkryciami geograficznymi."
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które zestawienie poprawnie łączy rok z wydarzeniem?",
    "options": [
      "1450 - zastosowanie ruchomej czcionki drukarskiej przez Gutenberga",
      "1450 - początek obrad soboru trydenckiego",
      "1450 - pokój augsburski",
      "1450 - wyprawa Magellana",
      "1450 - ogłoszenie 95 tez Lutra",
      "1450 - wydanie Indeksu ksiąg zakazanych"
    ],
    "answer": 0,
    "explanation": "Około 1450 roku Jan Gutenberg zastosował ruchome czcionki drukarskie."
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "pokój augsburski",
      "pierwsza wyprawa Kolumba do Ameryki",
      "ogłoszenie 95 tez Lutra",
      "publikacja O obrotach sfer niebieskich",
      "początek obrad soboru trydenckiego"
    ],
    "answer": [
      "pierwsza wyprawa Kolumba do Ameryki",
      "ogłoszenie 95 tez Lutra",
      "publikacja O obrotach sfer niebieskich",
      "początek obrad soboru trydenckiego",
      "pokój augsburski"
    ],
    "explanation": "Kolejność to: 1492, 1517, 1543, 1545 i 1555."
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz osobę z określeniem lub rolą podaną w rozdziale.",
    "options": null,
    "left": [
      "Erazm z Rotterdamu",
      "Stanisław Hozjusz",
      "Bartolomé de Las Casas",
      "Lucas Cranach starszy"
    ],
    "right": [
      "książę humanistów",
      "uczestnik soboru trydenckiego i sprowadzający jezuitów do Polski",
      "jeden z pierwszych obrońców Indian",
      "malarz reformacji"
    ],
    "answer": {
      "Erazm z Rotterdamu": "książę humanistów",
      "Stanisław Hozjusz": "uczestnik soboru trydenckiego i sprowadzający jezuitów do Polski",
      "Bartolomé de Las Casas": "jeden z pierwszych obrońców Indian",
      "Lucas Cranach starszy": "malarz reformacji"
    },
    "explanation": "Rozdział używa tych określeń przy omawianiu humanizmu, reformy katolickiej, kolonizacji oraz reformacji."
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Do Hiszpanii po wyprawie Magellana w 1522 roku wrócił tylko __________ statek z zaledwie __________ ludźmi na pokładzie.",
    "options": null,
    "answer": [
      "jeden",
      "18"
    ],
    "altAnswers": [
      [
        "jeden",
        "1"
      ],
      [
        "18",
        "osiemnastoma",
        "osiemnastu"
      ]
    ],
    "explanation": "Z wyprawy Magellana powrócił tylko jeden statek z 18 ludźmi, choć w 1519 roku wyruszyło pięć statków z 265 ludźmi."
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które zdanie najlepiej wyjaśnia, dlaczego teoria Kopernika była przełomem światopoglądowym?",
    "options": [
      "odrzucała przekonanie o centralnym miejscu nieruchomej Ziemi we wszechświecie",
      "dowodziła, że Ziemia jest płaska",
      "zakazywała obserwacji nieba bez teleskopu",
      "potwierdzała w pełni układ geocentryczny Ptolemeusza",
      "twierdziła, że planety nie poruszają się wcale",
      "uznawała Tenochtitlan za środek kosmosu"
    ],
    "answer": 0,
    "explanation": "Kopernik obalił pogląd o centralnym położeniu Ziemi i stworzył podstawy systemu heliocentrycznego."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "W kalwinizmie całkowicie zniesiono urzędy biskupów, a wystrój zborów był surowy.",
    "image": "r01_zbor_kalwinski.jpg",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik wskazuje, że kalwiniści bardziej niż luteranie ograniczyli hierarchię kościelną, znosząc urzędy biskupów, a ich zbory miały surowy wystrój."
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: 1450, 1455, 1543, Quetzalcoatl.",
    "options": null,
    "answer": "Quetzalcoatl",
    "explanation": "1450, 1455 i 1543 to daty ważne dla druku i dzieła Kopernika, a Quetzalcoatl to azteckie bóstwo Zielonego Pierzastego Węża."
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz osoby, które według rozdziału działały w związku z reformą katolicką lub katolicką odnową.",
    "options": [
      "Stanisław Hozjusz",
      "Ignacy Loyola",
      "Franciszek Ksawery",
      "Jan Kalwin",
      "Marcin Luter",
      "Henryk VIII"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Stanisław Hozjusz uczestniczył w soborze trydenckim i sprowadził jezuitów do Polski, Ignacy Loyola założył jezuitów, a Franciszek Ksawery był jezuickim misjonarzem."
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj skutki odkryć geograficznych do obszaru, którego dotyczą przede wszystkim.",
    "options": null,
    "items": [
      "rozwój handlu zamorskiego",
      "masowe wymieranie Indian wskutek pracy niewolniczej i chorób",
      "rozprzestrzenianie się chrześcijaństwa w koloniach",
      "bogacenie się miast Europy Zachodniej",
      "sprowadzanie czarnych niewolników z Afryki"
    ],
    "categories": [
      "Europa",
      "Nowy Świat"
    ],
    "answer": {
      "Europa": [
        "rozwój handlu zamorskiego",
        "bogacenie się miast Europy Zachodniej"
      ],
      "Nowy Świat": [
        "masowe wymieranie Indian wskutek pracy niewolniczej i chorób",
        "rozprzestrzenianie się chrześcijaństwa w koloniach",
        "sprowadzanie czarnych niewolników z Afryki"
      ]
    },
    "explanation": "Kolonizacja wzbogacała kraje i miasta Europy Zachodniej, ale w Nowym Świecie oznaczała przymusową pracę, choroby, niewolnictwo oraz chrystianizację."
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Czytasz krytykę teorii heliocentrycznej z 1596 roku: autor twierdzi, że wielka i ciężka Ziemia nie może obracać się wokół własnej osi ani obiegać Słońca. Kto jest autorem przytoczonego tekstu źródłowego?",
    "options": [
      "Jean Bodin",
      "Mikołaj Kopernik",
      "Galileusz",
      "Erazm z Rotterdamu",
      "Jan Gutenberg",
      "Michał Anioł"
    ],
    "answer": 0,
    "explanation": "W tekście źródłowym francuski myśliciel Jean Bodin krytykował teorię heliocentryczną i odrzucał ruch Ziemi."
  },
  {
    "id": "R01_HARD_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Według tekstu o prześladowaniach za czary nowsze badania wskazują, że w ciągu ponad dwustu lat ich ofiarą padło ile osób?",
    "options": [
      "30-60 tys.",
      "około 200 tys.",
      "ponad 8 mln",
      "zaledwie 18",
      "kilkanaście milionów",
      "około 500 Europejczyków"
    ],
    "answer": 0,
    "explanation": "W ramce Warto wiedzieć podano, że najnowsze badania mówią o 30-60 tys. ofiar prześladowań za czary w Europie nowożytnej."
  },
  {
    "id": "R01_HARD_12",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywała się noc z 23 na 24 sierpnia 1572 roku, podczas której we Francji wymordowano tysiące francuskich kalwinistów?",
    "options": null,
    "answer": "noc św. Bartłomieja",
    "altAnswers": [
      "noc św. Bartłomieja",
      "noc sw. Bartłomieja",
      "noc świętego Bartłomieja",
      "Noc św. Bartłomieja"
    ],
    "explanation": "Noc św. Bartłomieja była krwawą rzezią francuskich kalwinistów, która zaostrzyła wojnę religijną we Francji."
  }
];

const KID_PROMPTS = {
  "R01_WOG_01": "Jak nazywał się szybki statek Portugalczyków z XV wieku?",
  "R01_WOG_04": "Dlaczego Europejczycy szukali morskiej drogi do Indii?",
  "R01_KOG_03": "Jak nazywała się stolica Azteków?",
  "R01_KOG_09": "Które towary płynęły z Ameryki do Europy, a które z Azji do Ameryki?",
  "R01_ODR_07": "Kogo nazywamy człowiekiem renesansu?",
  "R01_HUM_07": "Kto powiedział, że Ziemia krąży wokół Słońca?",
  "R01_REF_02": "Ile tez ogłosił Marcin Luter i kiedy?",
  "R01_REF_08": "Który reformator działał w Genewie?",
  "R01_KAT_04": "Jak nazywał się spis książek zakazanych przez Kościół?",
  "R01_KAT_06": "Kto założył jezuitów?"
};

const chapter = {
  "id": "r01",
  "number": 1,
  "title": "Europa i świat w XVI wieku",
  "icon": "🌍",
  "sectionOrder": [
    "Wielkie odkrycia geograficzne",
    "Konsekwencje wielkich odkryć geograficznych",
    "Kultura odrodzenia we Włoszech",
    "Humanizm i przewrót kopernikański",
    "Reformacja",
    "Reforma katolicka"
  ],
  "sectionIcons": {
    "Wielkie odkrycia geograficzne": "⛵",
    "Konsekwencje wielkich odkryć geograficznych": "🌎",
    "Kultura odrodzenia we Włoszech": "🎨",
    "Humanizm i przewrót kopernikański": "🔭",
    "Reformacja": "📜",
    "Reforma katolicka": "⛪"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
