// Skróty sekcji (do identyfikatorów ćwiczeń):
//   ODK  = Wielkie odkrycia geograficzne
//   SKU  = Skutki odkryć geograficznych
//   REN  = Renesans — narodziny nowej epoki
//   KUL  = Kultura renesansu w Europie
//   REF  = Reformacja — czas wielkich zmian
//   KON  = Kontrreformacja
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_ODK_01",
    "section": "Wielkie odkrycia geograficzne",
    "type": "single_choice",
    "prompt": "Dlaczego w XV wieku Europejczycy zaczęli szukać morskiej drogi do Indii?",
    "options": [
      "Turcy utrudniali handel lądowy ze Wschodem, co podnosiło ceny towarów",
      "Europejczycy chcieli ominąć Ocean Atlantycki",
      "W Indiach zamknięto wszystkie porty dla kupców",
      "Kupcy przestali interesować się przyprawami korzennymi",
      "Szlaki lądowe przez Bliski Wschód stały się krótsze i tańsze",
      "Karawany mogły przewozić tylko towary pochodzące z Europy"
    ],
    "answer": 0,
    "explanation": "Po podbojach tureckich na Bliskim Wschodzie handel lądowy ze Wschodem został utrudniony, a ceny przypraw i innych towarów wzrosły. To skłoniło Europejczyków do poszukiwania drogi morskiej do Indii."
  },
  {
    "id": "R01_ODK_02",
    "section": "Wielkie odkrycia geograficzne",
    "type": "multi_select",
    "prompt": "Zaznacz rozwiązania, które umożliwiły podejmowanie dalekomorskich wypraw w XV wieku.",
    "options": [
      "Kompas",
      "Astrolabium",
      "Dokładniejsze mapy",
      "Karawele",
      "Silnik parowy",
      "Telegraf"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Rozwój żeglugi umożliwiły przyrządy nawigacyjne, dokładniejsze mapy i lepsze statki, między innymi karawele. Silnik parowy i telegraf nie należały do wyposażenia XV-wiecznych wypraw.",
    "image": "r01_karawela.jpg"
  },
  {
    "id": "R01_ODK_03",
    "section": "Wielkie odkrycia geograficzne",
    "type": "true_false",
    "prompt": "Kompas pomagał żeglarzom określać strony świata, ponieważ jego igła magnetyczna wskazywała północ.",
    "options": null,
    "answer": true,
    "explanation": "Igła magnetyczna kompasu wskazywała północ, co pozwalało określić strony świata i wyznaczać kurs okrętu."
  },
  {
    "id": "R01_ODK_04",
    "section": "Wielkie odkrycia geograficzne",
    "type": "match",
    "prompt": "Połącz odkrywcę z jego osiągnięciem.",
    "options": null,
    "left": [
      "Bartłomiej Diaz",
      "Krzysztof Kolumb",
      "Vasco da Gama",
      "Ferdynand Magellan"
    ],
    "right": [
      "Dotarcie do Przylądka Dobrej Nadziei",
      "Wyprawa, której skutkiem było odkrycie Ameryki",
      "Odkrycie morskiej drogi z Europy do Indii",
      "Wyprawa, która jako pierwsza opłynęła Ziemię"
    ],
    "answer": {
      "Bartłomiej Diaz": "Dotarcie do Przylądka Dobrej Nadziei",
      "Krzysztof Kolumb": "Wyprawa, której skutkiem było odkrycie Ameryki",
      "Vasco da Gama": "Odkrycie morskiej drogi z Europy do Indii",
      "Ferdynand Magellan": "Wyprawa, która jako pierwsza opłynęła Ziemię"
    },
    "explanation": "Diaz dotarł do południowego krańca Afryki, Kolumb w 1492 roku dopłynął do ziem Ameryki, Vasco da Gama osiągnął Indie drogą morską, a wyprawa Magellana opłynęła Ziemię."
  },
  {
    "id": "R01_ODK_05",
    "section": "Wielkie odkrycia geograficzne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Vasco da Gama dociera do Indii",
      "Wyprawa Magellana opływa Ziemię",
      "Krzysztof Kolumb wyrusza na zachód",
      "Bartłomiej Diaz dociera do Przylądka Dobrej Nadziei"
    ],
    "answer": [
      "Bartłomiej Diaz dociera do Przylądka Dobrej Nadziei",
      "Krzysztof Kolumb wyrusza na zachód",
      "Vasco da Gama dociera do Indii",
      "Wyprawa Magellana opływa Ziemię"
    ],
    "explanation": "Kolejność wyznaczają daty: 1488, 1492, 1498 oraz 1519-1522.",
    "image": "r01_zeglarze_na_oceanie.jpg"
  },
  {
    "id": "R01_ODK_06",
    "section": "Wielkie odkrycia geograficzne",
    "type": "fill_in",
    "prompt": "W 1492 roku Kolumb wyruszył z __________ na zachód trzema statkami: Niña, Pinta i __________.",
    "options": null,
    "answer": [
      "Hiszpanii",
      "Santa Maria"
    ],
    "altAnswers": [
      [
        "Hiszpanii",
        "Hiszpania"
      ],
      [
        "Santa Maria",
        "Santa María"
      ]
    ],
    "explanation": "Wyprawa Kolumba wyruszyła z Hiszpanii. Trzy statki nosiły nazwy Niña, Pinta i Santa Maria."
  },
  {
    "id": "R01_ODK_07",
    "section": "Wielkie odkrycia geograficzne",
    "type": "riddle",
    "prompt": "Włoski kupiec i podróżnik, który wykazał, że ziemie odkryte przez Kolumba są nowym kontynentem, to...",
    "options": null,
    "answer": "Amerigo Vespucci",
    "altAnswers": [
      "Amerigo Vespucci",
      "Vespucci",
      "Amerigo Wespuczi"
    ],
    "explanation": "Amerigo Vespucci sporządził opisy nowych ziem i określił je Nowym Światem. Od jego imienia zaczęto nazywać kontynent Ameryką."
  },
  {
    "id": "R01_ODK_08",
    "section": "Wielkie odkrycia geograficzne",
    "type": "odd_one_out",
    "prompt": "Wskaż statek, który nie należał do wyprawy Kolumba z 1492 roku: Niña, Pinta, Santa Maria, Victoria.",
    "options": null,
    "answer": "Victoria",
    "explanation": "Niña, Pinta i Santa Maria tworzyły flotę Kolumba. Victoria była okrętem, który wrócił z wyprawy Magellana."
  },
  {
    "id": "R01_ODK_09",
    "section": "Wielkie odkrycia geograficzne",
    "type": "scenario",
    "prompt": "Jesteś żeglarzem na pełnym morzu w XV wieku. Chcesz obliczyć wysokość ciała niebieskiego nad horyzontem, aby określić położenie statku. Którego przyrządu użyjesz?",
    "options": [
      "Astrolabium",
      "Kompas",
      "Koło sterowe",
      "Bocianie gniazdo",
      "Balast",
      "Żagiel rejowy"
    ],
    "answer": 0,
    "explanation": "Astrolabium służyło do obliczania wysokości ciał niebieskich nad horyzontem, dzięki czemu żeglarze mogli określać położenie statku na morzu."
  },
  {
    "id": "R01_SKU_01",
    "section": "Skutki odkryć geograficznych",
    "type": "single_choice",
    "prompt": "Który zestaw obejmuje trzy wielkie cywilizacje prekolumbijskie?",
    "options": [
      "Majowie, Aztekowie i Inkowie",
      "Rzymianie, Grecy i Fenicjanie",
      "Majowie, Wikingowie i Egipcjanie",
      "Inkowie, Celtowie i Germanie",
      "Aztekowie, Arabowie i Persowie",
      "Majowie, Mongołowie i Chińczycy"
    ],
    "answer": 0,
    "explanation": "Przed przybyciem Europejczyków w Ameryce istniały wysoko rozwinięte cywilizacje Majów, Azteków i Inków.",
    "image": "r01_piramida_precolumbijska.jpg"
  },
  {
    "id": "R01_SKU_02",
    "section": "Skutki odkryć geograficznych",
    "type": "sort",
    "prompt": "Przyporządkuj informacje do cywilizacji prekolumbijskich.",
    "options": null,
    "items": [
      "Miasta-państwa na terenie dzisiejszego Meksyku",
      "Najbardziej wojowniczy lud Indian",
      "Imperium w Andach na terenie dzisiejszego Peru",
      "Tarasy nawadniane systemem kanałów",
      "Krwawe ofiary składane na szczytach świątyń",
      "Miasta wznoszone także w dżungli"
    ],
    "categories": [
      "Majowie",
      "Aztekowie",
      "Inkowie"
    ],
    "answer": {
      "Majowie": [
        "Miasta-państwa na terenie dzisiejszego Meksyku",
        "Miasta wznoszone także w dżungli"
      ],
      "Aztekowie": [
        "Najbardziej wojowniczy lud Indian",
        "Krwawe ofiary składane na szczytach świątyń"
      ],
      "Inkowie": [
        "Imperium w Andach na terenie dzisiejszego Peru",
        "Tarasy nawadniane systemem kanałów"
      ]
    },
    "explanation": "Majowie żyli w miastach-państwach i budowali miasta także w dżungli. Aztekowie byli wojowniczym ludem i składali krwawe ofiary. Inkowie stworzyli imperium w Andach oraz rozwijali rolnictwo tarasowe."
  },
  {
    "id": "R01_SKU_03",
    "section": "Skutki odkryć geograficznych",
    "type": "true_false",
    "prompt": "Broń palna, żelazo i konie dawały Hiszpanom przewagę nad ludnością Ameryki, która nie znała tych rozwiązań w takim zastosowaniu.",
    "options": null,
    "answer": true,
    "explanation": "Konkwistadorzy wykorzystali żelazo, broń palną i konie, co dało im dużą przewagę nad liczniejszą ludnością tubylczą."
  },
  {
    "id": "R01_SKU_04",
    "section": "Skutki odkryć geograficznych",
    "type": "match",
    "prompt": "Połącz osobę lub państwo z właściwym obszarem podboju albo kolonizacji.",
    "options": null,
    "left": [
      "Hernan Cortez",
      "Francisco Pizarro",
      "Hiszpania",
      "Portugalia"
    ],
    "right": [
      "Państwo Azteków",
      "Stolica Inków Cuzco",
      "Rozległe obszary Ameryki Południowej, Środkowej i Północnej",
      "Wybrzeża dzisiejszej Brazylii"
    ],
    "answer": {
      "Hernan Cortez": "Państwo Azteków",
      "Francisco Pizarro": "Stolica Inków Cuzco",
      "Hiszpania": "Rozległe obszary Ameryki Południowej, Środkowej i Północnej",
      "Portugalia": "Wybrzeża dzisiejszej Brazylii"
    },
    "explanation": "Cortez podbił państwo Azteków, Pizarro zdobył Cuzco, Hiszpania opanowała rozległe obszary Ameryki Południowej, Środkowej i Północnej, a Portugalia wybrzeża dzisiejszej Brazylii."
  },
  {
    "id": "R01_SKU_05",
    "section": "Skutki odkryć geograficznych",
    "type": "multi_select",
    "prompt": "Zaznacz produkty, które po wielkich odkryciach geograficznych trafiły z Ameryki do Europy.",
    "options": [
      "Ziemniaki",
      "Kukurydza",
      "Kakao",
      "Indyki",
      "Konie",
      "Krowy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Z Nowego Świata do Europy trafiły między innymi ziemniaki, kukurydza, kakao i indyki. Konie i krowy przewożono w przeciwnym kierunku, do kolonii w Ameryce."
  },
  {
    "id": "R01_SKU_06",
    "section": "Skutki odkryć geograficznych",
    "type": "fill_in",
    "prompt": "Duży teren przeznaczony pod uprawę jednej rośliny to __________, a człowiek będący własnością innego człowieka to __________.",
    "options": null,
    "answer": [
      "plantacja",
      "niewolnik"
    ],
    "altAnswers": [
      [
        "plantacja"
      ],
      [
        "niewolnik"
      ]
    ],
    "explanation": "Plantacja była dużym obszarem przeznaczonym pod uprawę jednego gatunku rośliny. Niewolnik był człowiekiem stanowiącym własność innej osoby."
  },
  {
    "id": "R01_SKU_07",
    "section": "Skutki odkryć geograficznych",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który przemieszczał się po odkryciach geograficznych w przeciwnym kierunku niż pozostałe: pomidor, kukurydza, kakao, koń.",
    "options": null,
    "answer": "koń",
    "explanation": "Pomidor, kukurydza i kakao trafiły z Ameryki do Europy. Konie przewożono z Europy do kolonii amerykańskich."
  },
  {
    "id": "R01_SKU_08",
    "section": "Skutki odkryć geograficznych",
    "type": "scenario",
    "prompt": "Jesteś zubożałym hiszpańskim rycerzem w XVI wieku i wyruszasz do Ameryki, aby zdobyć złoto i ziemię. Jak nazwano ludzi takich jak ty?",
    "options": [
      "Konkwistadorzy",
      "Mecenasi",
      "Humanisci",
      "Jezuici",
      "Pastorzy",
      "Introligatorzy"
    ],
    "answer": 0,
    "explanation": "Zubożałych hiszpańskich rycerzy i poszukiwaczy przygód przybywających do Ameryki po złoto i ziemię nazywano konkwistadorami."
  },
  {
    "id": "R01_SKU_09",
    "section": "Skutki odkryć geograficznych",
    "type": "sequence",
    "prompt": "Ułóż proces prowadzący do rozwoju niewolnictwa w koloniach w logicznej kolejności.",
    "options": null,
    "items": [
      "Sprowadzanie do kolonii mieszkańców Afryki jako taniej siły roboczej",
      "Zakładanie europejskich kolonii i plantacji",
      "Masowe wymieranie Indian wskutek pracy, niedożywienia i chorób",
      "Zmuszanie miejscowej ludności do ciężkiej pracy"
    ],
    "answer": [
      "Zakładanie europejskich kolonii i plantacji",
      "Zmuszanie miejscowej ludności do ciężkiej pracy",
      "Masowe wymieranie Indian wskutek pracy, niedożywienia i chorób",
      "Sprowadzanie do kolonii mieszkańców Afryki jako taniej siły roboczej"
    ],
    "explanation": "Europejczycy tworzyli kolonie i plantacje, zmuszali Indian do ciężkiej pracy, a gdy ludność tubylcza masowo wymierała, zaczęli sprowadzać niewolników z Afryki.",
    "image": "r01_port_kolonialny.jpg"
  },
  {
    "id": "R01_REN_01",
    "section": "Renesans — narodziny nowej epoki",
    "type": "single_choice",
    "prompt": "Czym był humanizm?",
    "options": [
      "Poglądem stawiającym człowieka w centrum zainteresowania artystów i myślicieli",
      "Ruchem dążącym do podboju nowych kontynentów",
      "Zasadą nakazującą używanie wyłącznie łaciny",
      "Programem budowy kolonii w Ameryce",
      "Kierunkiem odrzucającym całe dziedzictwo starożytności",
      "Systemem nawigacji opartym na kompasie"
    ],
    "answer": 0,
    "explanation": "Humanizm narodził się we Włoszech i stawiał człowieka oraz jego ziemskie życie w centrum zainteresowania artystów i myślicieli."
  },
  {
    "id": "R01_REN_02",
    "section": "Renesans — narodziny nowej epoki",
    "type": "true_false",
    "prompt": "Nawiązywanie do wzorców antycznych w renesansie oznaczało całkowite odejście od wiary chrześcijańskiej.",
    "options": null,
    "answer": false,
    "explanation": "Renesansowi twórcy czerpali ze starożytności, ale nie oznaczało to odrzucenia chrześcijaństwa. Człowiek nadal był postrzegany jako stworzony na obraz i podobieństwo Boga."
  },
  {
    "id": "R01_REN_03",
    "section": "Renesans — narodziny nowej epoki",
    "type": "match",
    "prompt": "Połącz postać z właściwym osiągnięciem lub poglądem.",
    "options": null,
    "left": [
      "Leonardo da Vinci",
      "Erazm z Rotterdamu",
      "Mikołaj Kopernik",
      "Jan Gutenberg"
    ],
    "right": [
      "Wszechstronna działalność artystyczna i techniczna",
      "Pogląd, że człowiek z natury jest dobry, a zło wynika z niewiedzy",
      "Wykazanie, że Ziemia krąży wokół Słońca",
      "Metoda druku za pomocą ruchomych czcionek"
    ],
    "answer": {
      "Leonardo da Vinci": "Wszechstronna działalność artystyczna i techniczna",
      "Erazm z Rotterdamu": "Pogląd, że człowiek z natury jest dobry, a zło wynika z niewiedzy",
      "Mikołaj Kopernik": "Wykazanie, że Ziemia krąży wokół Słońca",
      "Jan Gutenberg": "Metoda druku za pomocą ruchomych czcionek"
    },
    "explanation": "Leonardo był artystą i wynalazcą, Erazm humanistą głoszącym naturalną dobroć człowieka, Kopernik astronomem, a Gutenberg twórcą europejskiej metody druku ruchomymi czcionkami."
  },
  {
    "id": "R01_REN_04",
    "section": "Renesans — narodziny nowej epoki",
    "type": "multi_select",
    "prompt": "Które cechy pasują do renesansowego ideału człowieka?",
    "options": [
      "Wszechstronna wiedza",
      "Rozległe zainteresowania",
      "Różnorodne umiejętności",
      "Ograniczenie się do jednej dziedziny",
      "Niechęć do nauki o świecie",
      "Zainteresowanie sztuką i nauką"
    ],
    "answer": [
      0,
      1,
      2,
      5
    ],
    "explanation": "Człowiek renesansu miał być wszechstronnie wykształcony, mieć szerokie zainteresowania i liczne umiejętności. Leonardo da Vinci był wzorem takiej postawy.",
    "image": "r01_leonardo_w_pracowni.jpg"
  },
  {
    "id": "R01_REN_05",
    "section": "Renesans — narodziny nowej epoki",
    "type": "fill_in",
    "prompt": "Łacińskie słowo humanus znaczy __________, a francuskie renaissance oznacza __________.",
    "options": null,
    "answer": [
      "ludzki",
      "odrodzenie"
    ],
    "altAnswers": [
      [
        "ludzki"
      ],
      [
        "odrodzenie",
        "odrodzenia"
      ]
    ],
    "explanation": "Nazwa humanizmu wiąże się z łacińskim humanus, czyli ludzki. Słowo renesans pochodzi od francuskiego określenia oznaczającego odrodzenie."
  },
  {
    "id": "R01_REN_06",
    "section": "Renesans — narodziny nowej epoki",
    "type": "riddle",
    "prompt": "Niemiecki rzemieślnik z Moguncji, który około 1445 roku opracował metodę druku za pomocą ruchomych czcionek, to...",
    "options": null,
    "answer": "Jan Gutenberg",
    "altAnswers": [
      "Jan Gutenberg",
      "Gutenberg",
      "Johannes Gutenberg"
    ],
    "explanation": "Jan Gutenberg około 1445 roku opracował w Europie metodę druku z użyciem ruchomych czcionek."
  },
  {
    "id": "R01_REN_07",
    "section": "Renesans — narodziny nowej epoki",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania drukowanej książki w pracowni Gutenberga.",
    "options": null,
    "items": [
      "Introligator układa strony i zszywa je z okładką",
      "Drukarz odbija tekst na papierze za pomocą prasy",
      "Zecer układa czcionki w odpowiedniej kolejności",
      "Drukarz nakłada farbę na czcionki"
    ],
    "answer": [
      "Zecer układa czcionki w odpowiedniej kolejności",
      "Drukarz nakłada farbę na czcionki",
      "Drukarz odbija tekst na papierze za pomocą prasy",
      "Introligator układa strony i zszywa je z okładką"
    ],
    "explanation": "Najpierw zecer składał tekst z czcionek, potem drukarz nakładał farbę i odbijał tekst na papierze, a na końcu introligator układał oraz zszywał strony.",
    "image": "r01_drukarnia_gutenberga.jpg"
  },
  {
    "id": "R01_REN_08",
    "section": "Renesans — narodziny nowej epoki",
    "type": "odd_one_out",
    "prompt": "Wskaż postać, która nie jest zaliczana do wybitnych ludzi renesansu: Leonardo da Vinci, Erazm z Rotterdamu, Mikołaj Kopernik, Hernan Cortez.",
    "options": null,
    "answer": "Hernan Cortez",
    "explanation": "Leonardo, Erazm i Kopernik byli wybitnymi przedstawicielami renesansu. Cortez był konkwistadorem związanym z podbojem Ameryki."
  },
  {
    "id": "R01_REN_09",
    "section": "Renesans — narodziny nowej epoki",
    "type": "scenario",
    "prompt": "W XV wieku właściciel warsztatu chce szybko wykonać wiele identycznych egzemplarzy książki i obniżyć jej cenę. Które rozwiązanie najlepiej realizuje ten cel?",
    "options": [
      "Druk z ruchomych czcionek",
      "Ręczne przepisywanie przez jednego kopistę",
      "Transport karawaną",
      "Budowa karaweli",
      "Użycie astrolabium",
      "Sporządzenie fresku"
    ],
    "answer": 0,
    "explanation": "Druk ruchomymi czcionkami pozwalał tworzyć wiele egzemplarzy znacznie szybciej niż ręczne przepisywanie, dzięki czemu książki taniały i stawały się bardziej dostępne."
  },
  {
    "id": "R01_KUL_01",
    "section": "Kultura renesansu w Europie",
    "type": "single_choice",
    "prompt": "Na czym polegał mecenat?",
    "options": [
      "Na finansowym wspieraniu artystów przez bogatych miłośników sztuki",
      "Na zakładaniu kolonii zamorskich",
      "Na tłumaczeniu Biblii na języki narodowe",
      "Na szkoleniu żeglarzy w użyciu kompasu",
      "Na pobieraniu odpustów od wiernych",
      "Na budowie plantacji w Ameryce"
    ],
    "answer": 0,
    "explanation": "Mecenat oznaczał finansową opiekę nad artystami. Papieże, władcy, szlachta i bogaci mieszczanie wspierali twórców, którzy wykonywali dla nich dzieła sztuki i projekty rezydencji."
  },
  {
    "id": "R01_KUL_02",
    "section": "Kultura renesansu w Europie",
    "type": "match",
    "prompt": "Połącz element sztuki lub architektury z jego opisem.",
    "options": null,
    "left": [
      "Arkada",
      "Attyka",
      "Kopuła",
      "Fresk"
    ],
    "right": [
      "Kolumny połączone łukiem",
      "Ozdobne przedłużenie ściany frontowej na wysokości dachu",
      "Półkoliste sklepienie przykrywające centralną część budowli",
      "Malowidło wykonywane na wilgotnym tynku"
    ],
    "answer": {
      "Arkada": "Kolumny połączone łukiem",
      "Attyka": "Ozdobne przedłużenie ściany frontowej na wysokości dachu",
      "Kopuła": "Półkoliste sklepienie przykrywające centralną część budowli",
      "Fresk": "Malowidło wykonywane na wilgotnym tynku"
    },
    "explanation": "Arkady, attyki, kopuły i freski należały do charakterystycznych elementów renesansowej architektury i dekoracji.",
    "image": "r01_architektura_renesansu.jpg"
  },
  {
    "id": "R01_KUL_03",
    "section": "Kultura renesansu w Europie",
    "type": "true_false",
    "prompt": "Renesansowe budowle miały odznaczać się idealnymi proporcjami, prostotą i harmonią.",
    "options": null,
    "answer": true,
    "explanation": "Architekci renesansu wzorowali się na budowlach antycznych i cenili idealne proporcje, prostotę oraz harmonię."
  },
  {
    "id": "R01_KUL_04",
    "section": "Kultura renesansu w Europie",
    "type": "multi_select",
    "prompt": "Zaznacz role lub dziedziny działalności Michała Anioła.",
    "options": [
      "Rzeźbiarz",
      "Malarz",
      "Poeta",
      "Architekt",
      "Żeglarz",
      "Drukarz"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Michał Anioł był rzeźbiarzem, malarzem, poetą i architektem. Zaprojektował między innymi kopułę bazyliki Świętego Piotra i wykonał freski w kaplicy Sykstyńskiej."
  },
  {
    "id": "R01_KUL_05",
    "section": "Kultura renesansu w Europie",
    "type": "riddle",
    "prompt": "Obraz Leonarda da Vinci przechowywany w Muzeum Narodowym w Krakowie, nazywany też Damą z łasiczką, to...",
    "options": null,
    "answer": "Dama z gronostajem",
    "altAnswers": [
      "Dama z gronostajem",
      "Dama z łasiczką"
    ],
    "explanation": "Dama z gronostajem to dzieło Leonarda da Vinci znajdujące się w polskich zbiorach w Krakowie."
  },
  {
    "id": "R01_KUL_06",
    "section": "Kultura renesansu w Europie",
    "type": "fill_in",
    "prompt": "Słynny portret Leonarda da Vinci nosi tytuł __________, a jego fresk w Mediolanie - __________.",
    "options": null,
    "answer": [
      "Mona Lisa",
      "Ostatnia Wieczerza"
    ],
    "altAnswers": [
      [
        "Mona Lisa",
        "Mona Lizę"
      ],
      [
        "Ostatnia Wieczerza",
        "Ostatniej Wieczerzy"
      ]
    ],
    "explanation": "Mona Lisa jest słynnym portretem Leonarda, a Ostatnia Wieczerza to jego fresk w klasztorze dominikanów w Mediolanie."
  },
  {
    "id": "R01_KUL_07",
    "section": "Kultura renesansu w Europie",
    "type": "scenario",
    "prompt": "Bogaty mieszczanin utrzymuje zdolnego malarza i finansuje jego pracę, a w zamian artysta tworzy obrazy dla swojego opiekuna. Jaką rolę pełni mieszczanin?",
    "options": [
      "Mecenasa",
      "Konkwistadora",
      "Pastora",
      "Introligatora",
      "Nuncjusza",
      "Zecera"
    ],
    "answer": 0,
    "explanation": "Osoba finansowo wspierająca artystę była mecenasem. Mecenat pozwalał twórcom pracować dla bogatych opiekunów i realizować zamówienia."
  },
  {
    "id": "R01_KUL_08",
    "section": "Kultura renesansu w Europie",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest typowy dla architektury renesansowej: arkada, attyka, kopuła, ostrołuk.",
    "options": null,
    "answer": "ostrołuk",
    "explanation": "Do typowych elementów renesansowej architektury należały arkady, attyki i kopuły, natomiast ostrołuk do nich nie należał."
  },
  {
    "id": "R01_KUL_09",
    "section": "Kultura renesansu w Europie",
    "type": "sort",
    "prompt": "Przyporządkuj dzieła do ich twórców.",
    "options": null,
    "items": [
      "Mona Lisa",
      "Ostatnia Wieczerza",
      "Dama z gronostajem",
      "Stworzenie Adama",
      "Pieta",
      "Madonna Sykstyńska"
    ],
    "categories": [
      "Leonardo da Vinci",
      "Michał Anioł",
      "Rafael Santi"
    ],
    "answer": {
      "Leonardo da Vinci": [
        "Mona Lisa",
        "Ostatnia Wieczerza",
        "Dama z gronostajem"
      ],
      "Michał Anioł": [
        "Stworzenie Adama",
        "Pieta"
      ],
      "Rafael Santi": [
        "Madonna Sykstyńska"
      ]
    },
    "explanation": "Leonardo stworzył Monę Lisę, Ostatnią Wieczerzę i Damę z gronostajem. Michał Anioł jest autorem Stworzenia Adama i Piety, a Rafael Santi namalował Madonnę Sykstyńską.",
    "image": "r01_pracownia_renesansowa.jpg"
  },
  {
    "id": "R01_REF_01",
    "section": "Reformacja — czas wielkich zmian",
    "type": "single_choice",
    "prompt": "Które wydarzenie z 1517 roku uznaje się za początek reformacji?",
    "options": [
      "Wystąpienie Marcina Lutra z 95 tezami przeciwko handlowi odpustami",
      "Zawarcie pokoju westfalskiego",
      "Założenie zakonu jezuitów",
      "Rozpoczęcie soboru trydenckiego",
      "Wydanie aktu o Kościele anglikańskim przez Henryka VIII",
      "Wynalezienie druku przez Gutenberga"
    ],
    "answer": 0,
    "explanation": "W 1517 roku Marcin Luter skrytykował sprzedaż odpustów i sformułował 95 tez. Jego wystąpienie zapoczątkowało reformację.",
    "image": "r01_wittenberga_1517.jpg"
  },
  {
    "id": "R01_REF_02",
    "section": "Reformacja — czas wielkich zmian",
    "type": "true_false",
    "prompt": "Marcin Luter uznawał zwierzchnictwo papieża nad całym Kościołem i władzę biskupów.",
    "options": null,
    "answer": false,
    "explanation": "Luter nie akceptował zwierzchnictwa papieża nad całym Kościołem ani władzy biskupów, co doprowadziło do zerwania z Kościołem katolickim."
  },
  {
    "id": "R01_REF_03",
    "section": "Reformacja — czas wielkich zmian",
    "type": "multi_select",
    "prompt": "Zaznacz poglądy i postulaty Marcina Lutra.",
    "options": [
      "Podstawą wiary powinna być lektura Pisma Świętego",
      "Nabożeństwa powinny odbywać się w językach narodowych",
      "Do zbawienia potrzebne są łaska Boża i wiara",
      "Uznawał chrzest i Komunię Świętą",
      "Nabożeństwa powinny pozostać wyłącznie po łacinie",
      "Papież powinien mieć najwyższą władzę nad całym Kościołem"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Luter podkreślał znaczenie wiary i łaski Bożej, Pisma Świętego oraz języków narodowych w liturgii. Uznawał chrzest i Komunię Świętą, a odrzucał zwierzchnictwo papieża."
  },
  {
    "id": "R01_REF_04",
    "section": "Reformacja — czas wielkich zmian",
    "type": "match",
    "prompt": "Połącz przywódcę reformacji z wyznaniem.",
    "options": null,
    "left": [
      "Marcin Luter",
      "Jan Kalwin",
      "Henryk VIII"
    ],
    "right": [
      "Luteranizm",
      "Kalwinizm",
      "Anglikanizm"
    ],
    "answer": {
      "Marcin Luter": "Luteranizm",
      "Jan Kalwin": "Kalwinizm",
      "Henryk VIII": "Anglikanizm"
    },
    "explanation": "Od poglądów Lutra wywodzi się luteranizm, zwolenników Kalwina nazywa się kalwinistami, a Henryk VIII stanął na czele Kościoła anglikańskiego."
  },
  {
    "id": "R01_REF_05",
    "section": "Reformacja — czas wielkich zmian",
    "type": "fill_in",
    "prompt": "Pokój w Augsburgu podpisano w roku __________ i wprowadzono zasadę __________.",
    "options": null,
    "answer": [
      "1555",
      "czyj kraj, tego religia"
    ],
    "altAnswers": [
      [
        "1555",
        "1555 r."
      ],
      [
        "czyj kraj, tego religia",
        "czyj kraj tego religia"
      ]
    ],
    "explanation": "Pokój w Augsburgu z 1555 roku zakończył długotrwałe spory religijne w Rzeszy i wprowadził zasadę, że władca decyduje o religii swoich poddanych."
  },
  {
    "id": "R01_REF_06",
    "section": "Reformacja — czas wielkich zmian",
    "type": "riddle",
    "prompt": "Koncepcja Jana Kalwina mówiąca, że los człowieka jest z góry określony przez Boga, to...",
    "options": null,
    "answer": "predestynacja",
    "altAnswers": [
      "predestynacja"
    ],
    "explanation": "Predestynacja oznaczała przekonanie, że człowiek już od narodzin jest przeznaczony do zbawienia albo potępienia."
  },
  {
    "id": "R01_REF_07",
    "section": "Reformacja — czas wielkich zmian",
    "type": "scenario",
    "prompt": "Jest rok 1555. Władca jednego z państw Rzeszy chce sam zdecydować, jaką religię będą wyznawali jego poddani. Na postanowienia którego pokoju może się powołać?",
    "options": [
      "Pokoju w Augsburgu",
      "Pokoju westfalskiego",
      "Soboru trydenckiego",
      "Wyprawy Magellana",
      "Aktu Henryka VIII z 1534 roku",
      "Traktatu o kolonizacji Brazylii"
    ],
    "answer": 0,
    "explanation": "Pokój w Augsburgu z 1555 roku wprowadził zasadę czyj kraj, tego religia, czyli prawo władcy do decydowania o wyznaniu swoich poddanych."
  },
  {
    "id": "R01_REF_08",
    "section": "Reformacja — czas wielkich zmian",
    "type": "odd_one_out",
    "prompt": "Wskaż wyznanie, które nie jest zaliczane do protestanckich odłamów powstałych w wyniku reformacji: luteranizm, kalwinizm, anglikanizm, katolicyzm.",
    "options": null,
    "answer": "katolicyzm",
    "explanation": "Luteranizm, kalwinizm i anglikanizm są wyznaniami protestanckimi. Katolicyzm nie powstał w wyniku reformacji."
  },
  {
    "id": "R01_REF_09",
    "section": "Reformacja — czas wielkich zmian",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia prowadzące od kryzysu Kościoła do pokoju w Augsburgu.",
    "options": null,
    "items": [
      "Powstanie nowych wyznań protestanckich",
      "Pokój w Augsburgu",
      "Krytyka nadużyć i sprzedaży odpustów",
      "Wystąpienie Marcina Lutra z 95 tezami",
      "Wojny religijne w Rzeszy"
    ],
    "answer": [
      "Krytyka nadużyć i sprzedaży odpustów",
      "Wystąpienie Marcina Lutra z 95 tezami",
      "Powstanie nowych wyznań protestanckich",
      "Wojny religijne w Rzeszy",
      "Pokój w Augsburgu"
    ],
    "explanation": "Kryzys i nadużycia w Kościele poprzedziły wystąpienie Lutra. Reformacja doprowadziła do powstania nowych wyznań i konfliktów, które w Rzeszy zakończył pokój augsburski w 1555 roku."
  },
  {
    "id": "R01_KON_01",
    "section": "Kontrreformacja",
    "type": "single_choice",
    "prompt": "Gdzie i w jakich latach obradował sobór, który zapoczątkował odnowę Kościoła katolickiego?",
    "options": [
      "W Trydencie w latach 1545-1563",
      "W Rzymie w latach 1517-1534",
      "W Augsburgu w latach 1555-1570",
      "W Genewie w latach 1536-1555",
      "W Pradze w latach 1618-1648",
      "We Florencji w latach 1445-1492"
    ],
    "answer": 0,
    "explanation": "Sobór trydencki obradował z przerwami w latach 1545-1563 w Trydencie na północy Włoch i przyczynił się do odnowy Kościoła katolickiego.",
    "image": "r01_sobor_trydencki.jpg"
  },
  {
    "id": "R01_KON_02",
    "section": "Kontrreformacja",
    "type": "multi_select",
    "prompt": "Zaznacz postanowienia lub działania związane z soborem trydenckim i kontrreformacją.",
    "options": [
      "Potwierdzenie papieża jako głowy Kościoła",
      "Większy nacisk na kształcenie księży w seminariach",
      "Sporządzenie indeksu ksiąg zakazanych",
      "Zwiększenie uprawnień inkwizycji",
      "Zniesienie urzędu papieża",
      "Nakaz przejścia katolików na luteranizm"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Sobór potwierdził autorytet papieża, wzmocnił dyscyplinę duchowieństwa i kształcenie księży. Z kontrreformacją wiązały się także indeks ksiąg zakazanych i większe uprawnienia inkwizycji."
  },
  {
    "id": "R01_KON_03",
    "section": "Kontrreformacja",
    "type": "true_false",
    "prompt": "Zakon jezuitów został założony w 1534 roku przez Ignacego Loyolę.",
    "options": null,
    "answer": true,
    "explanation": "Towarzystwo Jezusowe, czyli zakon jezuitów, założył w 1534 roku hiszpański szlachcic Ignacy Loyola."
  },
  {
    "id": "R01_KON_04",
    "section": "Kontrreformacja",
    "type": "match",
    "prompt": "Połącz pojęcie z właściwym znaczeniem.",
    "options": null,
    "left": [
      "Heretyk",
      "Seminarium duchowne",
      "Inkwizycja",
      "Indeks ksiąg zakazanych"
    ],
    "right": [
      "Chrześcijanin odrzucający prawdy wiary uznane przez Kościół",
      "Szkoła przygotowująca przyszłych duchownych do posługi kapłańskiej",
      "Sądy kościelne zajmujące się sądzeniem heretyków",
      "Lista książek, których katolicy nie mogli czytać i rozpowszechniać"
    ],
    "answer": {
      "Heretyk": "Chrześcijanin odrzucający prawdy wiary uznane przez Kościół",
      "Seminarium duchowne": "Szkoła przygotowująca przyszłych duchownych do posługi kapłańskiej",
      "Inkwizycja": "Sądy kościelne zajmujące się sądzeniem heretyków",
      "Indeks ksiąg zakazanych": "Lista książek, których katolicy nie mogli czytać i rozpowszechniać"
    },
    "explanation": "Te pojęcia opisują narzędzia i instytucje związane z odnową oraz obroną Kościoła katolickiego w epoce kontrreformacji."
  },
  {
    "id": "R01_KON_05",
    "section": "Kontrreformacja",
    "type": "fill_in",
    "prompt": "Wojna trzydziestoletnia rozpoczęła się w roku __________, a zakończył ją pokój westfalski w roku __________.",
    "options": null,
    "answer": [
      "1618",
      "1648"
    ],
    "altAnswers": [
      [
        "1618",
        "1618 r."
      ],
      [
        "1648",
        "1648 r."
      ]
    ],
    "explanation": "Wojna trzydziestoletnia rozpoczęła się w 1618 roku i zakończyła pokojem westfalskim w 1648 roku."
  },
  {
    "id": "R01_KON_06",
    "section": "Kontrreformacja",
    "type": "scenario",
    "prompt": "Jesteś uczniem w XVI wieku i uczęszczasz do bezpłatnej szkoły średniej prowadzonej przez jezuitów, słynącej z wysokiego poziomu nauczania. Jak nazywa się taka szkoła?",
    "options": [
      "Kolegium",
      "Seminarium",
      "Zbór",
      "Plantacja",
      "Kancelaria",
      "Karawela"
    ],
    "answer": 0,
    "explanation": "Jezuici zakładali bezpłatne szkoły średnie nazywane kolegiami oraz wyższe uczelnie. Placówki te słynęły z wysokiego poziomu nauczania.",
    "image": "r01_kolegium_jezuickie.jpg"
  },
  {
    "id": "R01_KON_07",
    "section": "Kontrreformacja",
    "type": "riddle",
    "prompt": "Kalendarz wprowadzony w 1582 roku z inicjatywy papieża Grzegorza XIII to...",
    "options": null,
    "answer": "kalendarz gregoriański",
    "altAnswers": [
      "kalendarz gregoriański",
      "gregoriański"
    ],
    "explanation": "Aby skorygować narastającą różnicę między rokiem kalendarzowym a słonecznym, w 1582 roku wprowadzono kalendarz gregoriański."
  },
  {
    "id": "R01_KON_08",
    "section": "Kontrreformacja",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Początek wojny trzydziestoletniej",
      "Wprowadzenie kalendarza gregoriańskiego",
      "Zakończenie soboru trydenckiego",
      "Pokój westfalski",
      "Początek soboru trydenckiego"
    ],
    "answer": [
      "Początek soboru trydenckiego",
      "Zakończenie soboru trydenckiego",
      "Wprowadzenie kalendarza gregoriańskiego",
      "Początek wojny trzydziestoletniej",
      "Pokój westfalski"
    ],
    "explanation": "Daty tych wydarzeń to kolejno 1545, 1563, 1582, 1618 i 1648."
  },
  {
    "id": "R01_KON_09",
    "section": "Kontrreformacja",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie opisuje działalności jezuitów: bezpłatne kolegia, wyższe uczelnie, przedstawienia teatralne, zamknięcie w klasztorach.",
    "options": null,
    "answer": "zamknięcie w klasztorach",
    "explanation": "Jezuici prowadzili szkoły i uczelnie oraz upowszechniali wiarę także poprzez sztukę, na przykład teatr. W odróżnieniu od wielu zakonów nie zamykali się w klasztorach."
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W którym roku Bartłomiej Diaz dotarł do południowego krańca Afryki nazwanego Przylądkiem Dobrej Nadziei?",
    "options": [
      "1488",
      "1492",
      "1498",
      "1517",
      "1519",
      "1522"
    ],
    "answer": 0,
    "explanation": "Bartłomiej Diaz dotarł do Przylądka Dobrej Nadziei w 1488 roku, jeszcze przed wyprawą Kolumba."
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Wyprawa Magellana wyruszyła na __________ okrętach. Z __________ marynarzy wróciło __________.",
    "options": null,
    "answer": [
      "5",
      "265",
      "18"
    ],
    "altAnswers": [
      [
        "5",
        "pięciu"
      ],
      [
        "265"
      ],
      [
        "18",
        "osiemnastu"
      ]
    ],
    "explanation": "Magellan wypłynął na czele pięciu okrętów. Z 265 marynarzy po trzyletniej wyprawie wróciło 18, a do Europy powrócił tylko jeden okręt - Victoria.",
    "image": "r01_wyprawa_magellana.jpg"
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz poprawne informacje o wyposażeniu i budowie statku z epoki wielkich odkryć.",
    "options": [
      "Żagle łacińskie wykorzystywano przy wietrze wiejącym od dziobu",
      "Żagle rejowe napędzały statek przy wietrze od rufy",
      "Balast stabilizował okręt na wodzie",
      "Wysokie burty zwiększały bezpieczeństwo żeglarzy",
      "Astrolabium wskazywało północ za pomocą igły magnetycznej",
      "Koło sterowe służyło do mierzenia wysokości ciał niebieskich"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Żagle łacińskie i rejowe wykorzystywano przy różnych kierunkach wiatru, balast stabilizował statek, a wysokie burty zwiększały bezpieczeństwo. Igłę magnetyczną miał kompas, a wysokość ciał niebieskich mierzono astrolabium."
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak Aztekowie nazywali bóstwo o białej skórze, którego wysłannikiem uznali przybyłego Hernana Corteza?",
    "options": null,
    "answer": "Quetzalcoatl",
    "altAnswers": [
      "Quetzalcoatl",
      "Ketsalkoatl"
    ],
    "explanation": "W opowieści o wcześniejszych kontaktach z Ameryką Aztekowie czcili bóstwo o białej skórze jako Quetzalcoatla; Majowie nazywali podobną postać Kukulkanem."
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Thor Heyerdahl dotarł do Barbadosu już podczas swojej pierwszej wyprawy papirusową łodzią w 1969 roku.",
    "options": null,
    "answer": false,
    "explanation": "Pierwsza próba z 1969 roku zakończyła się niepowodzeniem. Dopiero druga wyprawa w 1970 roku dotarła do Barbadosu."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który żeglarz miał według XVI-wiecznych przekazów poprowadzić w 1476 roku duńskie statki do Ameryki Północnej?",
    "options": [
      "Jan Scolvus zwany Janem z Kolna",
      "Amerigo Vespucci",
      "Bartłomiej Diaz",
      "Zheng He",
      "Thor Heyerdahl",
      "Vasco da Gama"
    ],
    "answer": 0,
    "explanation": "Według późnych przekazów Jan Scolvus, zwany Janem z Kolna, miał w 1476 roku dopłynąć przez Grenlandię w okolice Labradoru. Nie istnieją wiarygodne dowody potwierdzające tę opowieść."
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz opowieść lub hipotezę o dotarciu do Ameryki z przypisanym jej wydarzeniem.",
    "options": null,
    "left": [
      "Wikingowie",
      "Zheng He",
      "Jan Scolvus",
      "Thor Heyerdahl"
    ],
    "right": [
      "Próba osiedlenia na Nowej Fundlandii około 1006 roku",
      "Rzekome dotarcie chińskiej floty do Ameryki w 1421 roku",
      "Rzekoma wyprawa przez Grenlandię w 1476 roku",
      "Dotarcie papirusową łodzią do Barbadosu w 1970 roku"
    ],
    "answer": {
      "Wikingowie": "Próba osiedlenia na Nowej Fundlandii około 1006 roku",
      "Zheng He": "Rzekome dotarcie chińskiej floty do Ameryki w 1421 roku",
      "Jan Scolvus": "Rzekoma wyprawa przez Grenlandię w 1476 roku",
      "Thor Heyerdahl": "Dotarcie papirusową łodzią do Barbadosu w 1970 roku"
    },
    "explanation": "Informacje o kontaktach z Ameryką przed Kolumbem obejmują zarówno znaleziska archeologiczne, eksperyment Heyerdahla, jak i późniejsze, niepewne przekazy."
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Renesans narodził się we włoskiej __________, stolicy Toskanii, gdzie na dworze książąt z rodu __________ przebywali wybitni artyści.",
    "options": null,
    "answer": [
      "Florencji",
      "Medyceuszy"
    ],
    "altAnswers": [
      [
        "Florencji",
        "Florencja"
      ],
      [
        "Medyceuszy",
        "Medyceusze"
      ]
    ],
    "explanation": "Florencja była jednym z najbogatszych miast włoskich i miejscem narodzin renesansu. Na dworze Medyceuszy przebywali czołowi artyści epoki."
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Rozprawa Erazma z Rotterdamu, w której wyśmiewał wady ówczesnego społeczeństwa, nosi tytuł...",
    "options": null,
    "answer": "Pochwała głupoty",
    "altAnswers": [
      "Pochwała głupoty"
    ],
    "explanation": "Erazm z Rotterdamu jest autorem rozprawy Pochwała głupoty, w której krytycznie ukazywał wady społeczeństwa."
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Model śmigłowca zbudowany według szkiców Leonarda da Vinci miał realną szansę oderwać się od ziemi dzięki sile mięśni czterech lotników.",
    "options": null,
    "answer": false,
    "explanation": "Model miał być napędzany siłą mięśni czterech osób, ale nie miał szans wznieść się w powietrze.",
    "image": "r01_leonardo_w_pracowni.jpg"
  },
  {
    "id": "R01_HARD_11",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Oglądasz Ostatnią Wieczerzę Leonarda da Vinci. Mimo że malowidło jest płaskie, przestrzeń wydaje się trójwymiarowa. Jaki zabieg artystyczny odpowiada za ten efekt?",
    "options": [
      "Perspektywa",
      "Attyka",
      "Arkada",
      "Kopuła",
      "Mecenat",
      "Fresk jako technika mokrego tynku"
    ],
    "answer": 0,
    "explanation": "Leonardo zastosował perspektywę, dzięki której widz odnosi wrażenie trójwymiarowej przestrzeni na płaskiej powierzchni."
  },
  {
    "id": "R01_HARD_12",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które dzieło wpisano w 1616 roku na indeks ksiąg zakazanych?",
    "options": [
      "O obrotach sfer niebieskich Mikołaja Kopernika",
      "Pochwała głupoty Erazma z Rotterdamu",
      "95 tez Marcina Lutra",
      "Mona Lisa Leonarda da Vinci",
      "Madonna Sykstyńska Rafaela Santi",
      "Dziennik wyprawy Kolumba"
    ],
    "answer": 0,
    "explanation": "W 1616 roku na indeks ksiąg zakazanych wpisano dzieło Mikołaja Kopernika O obrotach sfer niebieskich."
  },
  {
    "id": "R01_HARD_13",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które państwa przyjęły kalendarz gregoriański już w 1582 roku?",
    "options": [
      "Polska",
      "Francja",
      "Wielka Brytania",
      "Rosja"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Polska i Francja przyjęły nowy kalendarz w 1582 roku. Wielka Brytania zrobiła to w 1752 roku, a Rosja w 1918 roku."
  },
  {
    "id": "R01_HARD_14",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Około jaka część mieszkańców Rzeszy zginęła podczas wojny trzydziestoletniej?",
    "options": [
      "30 procent",
      "5 procent",
      "10 procent",
      "50 procent",
      "70 procent",
      "90 procent"
    ],
    "answer": 0,
    "explanation": "Wojna trzydziestoletnia była wyjątkowo krwawa. Zginęło około 30 procent mieszkańców Rzeszy, a duże obszary zostały spustoszone.",
    "image": "r01_wojna_trzydziestoletnia.jpg"
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r01",
  number: 1,
  title: "Narodziny nowożytnego świata",
  icon: "🌍",
  sectionOrder: [
    "Wielkie odkrycia geograficzne",
    "Skutki odkryć geograficznych",
    "Renesans — narodziny nowej epoki",
    "Kultura renesansu w Europie",
    "Reformacja — czas wielkich zmian",
    "Kontrreformacja"
  ],
  sectionIcons: {
    "Wielkie odkrycia geograficzne": "🧭",
    "Skutki odkryć geograficznych": "🌎",
    "Renesans — narodziny nowej epoki": "📚",
    "Kultura renesansu w Europie": "🎨",
    "Reformacja — czas wielkich zmian": "📜",
    "Kontrreformacja": "⛪"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
