// Skróty sekcji (do identyfikatorów ćwiczeń):
//   ODK  = Wielkie odkrycia geograficzne
//   REN  = Kultura renesansu
//   REF  = Reformacja i kontrreformacja
//   ZLO  = Złoty wiek Rzeczypospolitej
//   WOJ  = Wojny Rzeczypospolitej w XVII wieku
//   BAR  = Kultura baroku i sarmatyzm
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R03_ODK_01",
    "section": "Wielkie odkrycia geograficzne",
    "type": "single_choice",
    "prompt": "Które państwo, obok Hiszpanii, zapoczątkowało falę wielkich odkryć geograficznych?",
    "options": [
      "Portugalia",
      "Francja",
      "Anglia",
      "Holandia",
      "Austria",
      "Polska"
    ],
    "answer": 0,
    "explanation": "Hiszpania i Portugalia zapoczątkowały europejskie wielkie odkrycia geograficzne.",
    "image": "r03_karawela_na_oceanie.jpg"
  },
  {
    "id": "R03_ODK_02",
    "section": "Wielkie odkrycia geograficzne",
    "type": "multi_select",
    "prompt": "Zaznacz przyczyny wielkich odkryć geograficznych.",
    "options": [
      "Poszukiwanie morskiej drogi do Indii",
      "Wzrost popytu na przyprawy",
      "Postęp w nawigacji i budowie okrętów",
      "Wprowadzenie kalendarza gregoriańskiego",
      "Budowa pałaców barokowych"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Europejczycy poszukiwali nowych szlaków handlu, chcieli zdobywać towary z Azji, a podróżom sprzyjały m.in. kompasy, astrolabia, mapy i karawele.",
    "image": "r03_karawela_na_oceanie.jpg"
  },
  {
    "id": "R03_ODK_03",
    "section": "Wielkie odkrycia geograficzne",
    "type": "true_false",
    "prompt": "Krzysztof Kolumb zmarł, wiedząc, że odkrył wcześniej nieznany Europejczykom kontynent.",
    "options": null,
    "answer": false,
    "explanation": "Kolumb do końca życia nie wiedział, że dotarł do nowego kontynentu."
  },
  {
    "id": "R03_ODK_04",
    "section": "Wielkie odkrycia geograficzne",
    "type": "fill_in",
    "prompt": "W 1498 roku Vasco da Gama dotarł drogą morską do __________.",
    "options": null,
    "answer": [
      "Indii"
    ],
    "altAnswers": [
      [
        "Indii",
        "Indie"
      ]
    ],
    "explanation": "Vasco da Gama opłynął Afrykę i w 1498 roku dopłynął do indyjskiego Kalikatu."
  },
  {
    "id": "R03_ODK_05",
    "section": "Wielkie odkrycia geograficzne",
    "type": "riddle",
    "prompt": "Jak nazywał się rodzaj szybkiego statku przystosowanego do żeglugi oceanicznej, wykorzystywanego podczas odkryć?",
    "options": null,
    "answer": "karawela",
    "altAnswers": [
      "karawela",
      "karawelę"
    ],
    "explanation": "Karawele należały do osiągnięć technicznych ułatwiających dalekie wyprawy."
  },
  {
    "id": "R03_ODK_06",
    "section": "Wielkie odkrycia geograficzne",
    "type": "odd_one_out",
    "prompt": "Który z tych towarów nie jest rośliną pochodzącą z Nowego Świata: kukurydza, ziemniak, pomidor, jedwab?",
    "options": null,
    "answer": "jedwab",
    "explanation": "Kukurydza, ziemniaki i pomidory pochodzą z Nowego Świata; jedwab był poszukiwanym towarem azjatyckim."
  },
  {
    "id": "R03_ODK_07",
    "section": "Wielkie odkrycia geograficzne",
    "type": "scenario",
    "prompt": "Pod koniec XV wieku planujesz dopłynąć do Indii drogą morską, opływając Afrykę od południa. Który podróżnik dokonał takiej wyprawy w latach 1497–1498?",
    "options": [
      "Vasco da Gama",
      "Bartolomeo Diaz",
      "Krzysztof Kolumb",
      "Ferdynand Magellan",
      "Amerigo Vespucci"
    ],
    "answer": 0,
    "explanation": "Vasco da Gama dotarł drogą morską do Indii w 1498 roku; Bartolomeo Diaz wcześniej dopłynął do Przylądka Dobrej Nadziei."
  },
  {
    "id": "R03_ODK_08",
    "section": "Wielkie odkrycia geograficzne",
    "type": "match",
    "prompt": "Połącz odkrywcę lub zdobywcę z jego dokonaniem.",
    "options": null,
    "left": [
      "Bartolomeo Diaz",
      "Vasco da Gama",
      "Ferdynand Magellan",
      "Hernán Cortés"
    ],
    "right": [
      "Podbój państwa Azteków",
      "Zorganizowanie pierwszej wyprawy dookoła świata",
      "Dopłynięcie drogą morską do Indii",
      "Dotarcie do Przylądka Dobrej Nadziei"
    ],
    "answer": {
      "Bartolomeo Diaz": "Dotarcie do Przylądka Dobrej Nadziei",
      "Vasco da Gama": "Dopłynięcie drogą morską do Indii",
      "Ferdynand Magellan": "Zorganizowanie pierwszej wyprawy dookoła świata",
      "Hernán Cortés": "Podbój państwa Azteków"
    },
    "explanation": "Diaz opłynął Afrykę od południa, da Gama dotarł do Indii, wyprawa Magellana opłynęła świat, a Cortés pokonał Azteków."
  },
  {
    "id": "R03_ODK_09",
    "section": "Wielkie odkrycia geograficzne",
    "type": "sort",
    "prompt": "Podziel zjawiska na przyczyny i skutki odkryć geograficznych.",
    "options": null,
    "items": [
      "Zapotrzebowanie na przyprawy",
      "Rozwój techniki nawigacji",
      "Nowe szlaki handlowe",
      "Poszukiwanie drogi morskiej do Indii",
      "Rewolucja cen",
      "Napływ złota i srebra do Europy"
    ],
    "categories": [
      "Przyczyny",
      "Skutki"
    ],
    "answer": {
      "Przyczyny": [
        "Zapotrzebowanie na przyprawy",
        "Poszukiwanie drogi morskiej do Indii",
        "Rozwój techniki nawigacji"
      ],
      "Skutki": [
        "Rewolucja cen",
        "Nowe szlaki handlowe",
        "Napływ złota i srebra do Europy"
      ]
    },
    "explanation": "Nowe możliwości żeglugi i motywy handlowe sprzyjały odkryciom; ich następstwem były przemiany handlu i gospodarki.",
    "image": "r03_plantacja_w_ameryce.jpg"
  },
  {
    "id": "R03_ODK_10",
    "section": "Wielkie odkrycia geograficzne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w kolejności od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Pierwsza wyprawa Kolumba do Ameryki (1492)",
      "Początek wyprawy Magellana (1519)",
      "Odkrycie Przylądka Dobrej Nadziei przez Diaza (1488)",
      "Dotarcie da Gamy do Indii (1498)"
    ],
    "answer": [
      "Odkrycie Przylądka Dobrej Nadziei przez Diaza (1488)",
      "Pierwsza wyprawa Kolumba do Ameryki (1492)",
      "Dotarcie da Gamy do Indii (1498)",
      "Początek wyprawy Magellana (1519)"
    ],
    "explanation": "Diaz dotarł do Przylądka Dobrej Nadziei w 1488 roku, Kolumb przepłynął Atlantyk w 1492, da Gama dotarł do Indii w 1498, a wyprawa Magellana wyruszyła w 1519 roku."
  },
  {
    "id": "R03_REN_01",
    "section": "Kultura renesansu",
    "type": "single_choice",
    "prompt": "Jak nazywał się nurt renesansowy, który stawiał w centrum zainteresowania człowieka?",
    "options": [
      "Humanizm",
      "Sarmatyzm",
      "Kontrreformacja",
      "Kalwinizm",
      "Mecenat"
    ],
    "answer": 0,
    "explanation": "Humanizm interesował się człowiekiem, jego rozumem, nauką i kulturą.",
    "image": "r03_pracownia_renesansowa.jpg"
  },
  {
    "id": "R03_REN_02",
    "section": "Kultura renesansu",
    "type": "multi_select",
    "prompt": "Zaznacz cechy architektury renesansowej.",
    "options": [
      "Harmonia i idealne proporcje",
      "Wzorowanie się na antyku",
      "Prostota kompozycji",
      "Przepych i nadmiar ozdób",
      "Ciężkie proporcje i silne kontrasty"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Architektura renesansu nawiązywała do starożytności i dążyła do harmonii, prostoty i idealnych proporcji.",
    "image": "r03_architektura_renesansowa.jpg"
  },
  {
    "id": "R03_REN_03",
    "section": "Kultura renesansu",
    "type": "true_false",
    "prompt": "Mikołaj Rej należał do pionierów twórczości literackiej w języku polskim.",
    "options": null,
    "answer": true,
    "explanation": "Mikołaj Rej należał do pierwszych polskich pisarzy tworzących w języku ojczystym."
  },
  {
    "id": "R03_REN_04",
    "section": "Kultura renesansu",
    "type": "fill_in",
    "prompt": "Autorem obrazu „Mona Lisa” był __________.",
    "options": null,
    "answer": [
      "Leonardo da Vinci"
    ],
    "altAnswers": [
      [
        "Leonardo da Vinci",
        "Leonardo da Vinci"
      ]
    ],
    "explanation": "Leonardo da Vinci namalował m.in. „Mona Lisę”, „Damę z łasiczką” i „Ostatnią wieczerzę”.",
    "image": "r03_malarstwo_renesansowe.jpg"
  },
  {
    "id": "R03_REN_05",
    "section": "Kultura renesansu",
    "type": "riddle",
    "prompt": "Jak nazywa się finansowa opieka bogatych osób nad artystami?",
    "options": null,
    "answer": "mecenat",
    "explanation": "Mecenat umożliwiał artystom tworzenie dzięki wsparciu zamożnych opiekunów.",
    "image": "r03_pracownia_renesansowa.jpg"
  },
  {
    "id": "R03_REN_06",
    "section": "Kultura renesansu",
    "type": "odd_one_out",
    "prompt": "Który utwór nie jest dziełem Jana Kochanowskiego: Treny, Fraszki, Pieśni, Utopia?",
    "options": null,
    "answer": "Utopia",
    "explanation": "„Utopia” to dzieło Tomasza More’a, a „Treny”, „Fraszki” i „Pieśni” napisał Jan Kochanowski."
  },
  {
    "id": "R03_REN_07",
    "section": "Kultura renesansu",
    "type": "scenario",
    "prompt": "Pracujesz w renesansowym warsztacie. Zamiast przepisywać każdą książkę ręcznie możesz powielać tekst, korzystając z ruchomych czcionek. Z jakim wynalazkiem wiąże się to usprawnienie?",
    "options": [
      "Z drukiem",
      "Z astrolabium",
      "Z kompasem",
      "Z teleskopem",
      "Z mikroskopem"
    ],
    "answer": 0,
    "explanation": "Rozwój drukarstwa umożliwił szybsze i masowe rozpowszechnianie książek oraz idei renesansowych."
  },
  {
    "id": "R03_REN_08",
    "section": "Kultura renesansu",
    "type": "match",
    "prompt": "Dopasuj twórcę renesansowego do dzieła lub budowli.",
    "options": null,
    "left": [
      "Leonardo da Vinci",
      "Michał Anioł",
      "Rafael Santi",
      "Filippo Brunelleschi"
    ],
    "right": [
      "Katedra we Florencji",
      "Szkoła Ateńska",
      "Freski w Kaplicy Sykstyńskiej",
      "Mona Lisa"
    ],
    "answer": {
      "Leonardo da Vinci": "Mona Lisa",
      "Michał Anioł": "Freski w Kaplicy Sykstyńskiej",
      "Rafael Santi": "Szkoła Ateńska",
      "Filippo Brunelleschi": "Katedra we Florencji"
    },
    "explanation": "Leonardo da Vinci namalował „Monę Lisę”, Michał Anioł stworzył freski w Kaplicy Sykstyńskiej, Rafael Santi namalował „Szkołę Ateńską”, a Filippo Brunelleschi zaprojektował kopułę katedry we Florencji.",
    "image": "r03_malarstwo_renesansowe.jpg"
  },
  {
    "id": "R03_REN_09",
    "section": "Kultura renesansu",
    "type": "sort",
    "prompt": "Przyporządkuj twórców renesansu do dziedzin ich działalności.",
    "options": null,
    "items": [
      "Jan Kochanowski",
      "Leonardo da Vinci",
      "Mikołaj Rej",
      "Rafael Santi"
    ],
    "categories": [
      "Literatura",
      "Malarstwo"
    ],
    "answer": {
      "Literatura": [
        "Jan Kochanowski",
        "Mikołaj Rej"
      ],
      "Malarstwo": [
        "Leonardo da Vinci",
        "Rafael Santi"
      ]
    },
    "explanation": "Kochanowski i Rej byli pisarzami, a da Vinci i Rafael zaliczają się do najsłynniejszych malarzy renesansu."
  },
  {
    "id": "R03_REN_10",
    "section": "Kultura renesansu",
    "type": "single_choice",
    "prompt": "Jaką teorię budowy Układu Słonecznego głosił Mikołaj Kopernik?",
    "options": [
      "Heliocentryczną",
      "Geocentryczną",
      "Praw ruchu planet Keplera",
      "Powszechnego ciążenia",
      "Wielości światów Brunona"
    ],
    "answer": 0,
    "explanation": "Według teorii heliocentrycznej Słońce zajmuje centralne miejsce w Układzie Słonecznym; teoria geocentryczna stawiała w centrum Ziemię."
  },
  {
    "id": "R03_REF_01",
    "section": "Reformacja i kontrreformacja",
    "type": "single_choice",
    "prompt": "Kto wystąpił w Wittenberdze w 1517 roku, zapoczątkowując reformację?",
    "options": [
      "Marcin Luter",
      "Jan Kalwin",
      "Ignacy Loyola",
      "Grzegorz XIII",
      "Mikołaj Kopernik"
    ],
    "answer": 0,
    "explanation": "Wystąpienie Marcina Lutra w Wittenberdze w 1517 roku uznaje się za początek reformacji.",
    "image": "r03_kosciol_reformowany.jpg"
  },
  {
    "id": "R03_REF_02",
    "section": "Reformacja i kontrreformacja",
    "type": "multi_select",
    "prompt": "Zaznacz zasady luteranizmu.",
    "options": [
      "Biblia jako źródło wiary",
      "Zachowanie chrztu i komunii",
      "Odrzucenie zwierzchnictwa papieża",
      "Zachowanie siedmiu sakramentów",
      "Utrzymanie kultu relikwii"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Luteranizm uznawał Biblię za źródło wiary, pozostawiał dwa sakramenty i odrzucał papieską hierarchię oraz kult relikwii.",
    "image": "r03_kosciol_reformowany.jpg"
  },
  {
    "id": "R03_REF_03",
    "section": "Reformacja i kontrreformacja",
    "type": "true_false",
    "prompt": "W anglikanizmie głową Kościoła był król.",
    "options": null,
    "answer": true,
    "explanation": "Anglikanizm zachował hierarchię kościelną, ale głową Kościoła był monarcha."
  },
  {
    "id": "R03_REF_04",
    "section": "Reformacja i kontrreformacja",
    "type": "fill_in",
    "prompt": "Charakterystyczna dla kalwinizmu zasada z góry określonego zbawienia lub potępienia to __________.",
    "options": null,
    "answer": [
      "predestynacja"
    ],
    "altAnswers": [
      [
        "predestynacja",
        "predestynacji"
      ]
    ],
    "explanation": "Zgodnie z zasadą predestynacji los człowieka w kwestii zbawienia jest z góry określony."
  },
  {
    "id": "R03_REF_05",
    "section": "Reformacja i kontrreformacja",
    "type": "riddle",
    "prompt": "Jak nazywa się duchowny w wyznaniach protestanckich, odpowiednik księdza?",
    "options": null,
    "answer": "pastor",
    "altAnswers": [
      "pastor",
      "Pastor"
    ],
    "explanation": "Pastor to określenie duchownego protestanckiego."
  },
  {
    "id": "R03_REF_06",
    "section": "Reformacja i kontrreformacja",
    "type": "odd_one_out",
    "prompt": "Wskaż wyznanie, które nie jest odłamem protestantyzmu: luteranizm, kalwinizm, anglikanizm, katolicyzm.",
    "options": null,
    "answer": "katolicyzm",
    "explanation": "Luteranizm, kalwinizm i anglikanizm są wyznaniami protestanckimi, natomiast katolicyzm należy do innej gałęzi chrześcijaństwa."
  },
  {
    "id": "R03_REF_07",
    "section": "Reformacja i kontrreformacja",
    "type": "scenario",
    "prompt": "Jesteś delegatem na zgromadzeniu Kościoła katolickiego po reformacji. Uczestnicy potwierdzają naukę o sakramentach. Ile sakramentów zachowano w postanowieniach soboru trydenckiego?",
    "options": [
      "Siedem",
      "Dwa",
      "Trzy",
      "Cztery",
      "Pięć"
    ],
    "answer": 0,
    "explanation": "Sobór trydencki podtrzymał siedem sakramentów w Kościele katolickim, natomiast luteranie i kalwini uznawali dwa.",
    "image": "r03_sobor_trydencki.jpg"
  },
  {
    "id": "R03_REF_08",
    "section": "Reformacja i kontrreformacja",
    "type": "match",
    "prompt": "Połącz postać ze zjawiskiem lub działaniem religijnym.",
    "options": null,
    "left": [
      "Marcin Luter",
      "Jan Kalwin",
      "Ignacy Loyola",
      "Grzegorz XIII"
    ],
    "right": [
      "Wprowadzenie kalendarza gregoriańskiego",
      "Założenie zakonu jezuitów",
      "Kalwinizm",
      "Luteranizm"
    ],
    "answer": {
      "Marcin Luter": "Luteranizm",
      "Jan Kalwin": "Kalwinizm",
      "Ignacy Loyola": "Założenie zakonu jezuitów",
      "Grzegorz XIII": "Wprowadzenie kalendarza gregoriańskiego"
    },
    "explanation": "Luter i Kalwin byli reformatorami, Loyola założył zakon jezuitów, a Grzegorz XIII zarządził reformę kalendarza."
  },
  {
    "id": "R03_REF_09",
    "section": "Reformacja i kontrreformacja",
    "type": "sort",
    "prompt": "Przyporządkuj zasady religijne do protestantyzmu lub postanowień soboru trydenckiego.",
    "options": null,
    "items": [
      "Dwa sakramenty",
      "Biblia jako podstawowe źródło wiary",
      "Papież głową Kościoła",
      "Odrzucenie zwierzchnictwa papieża",
      "Siedem sakramentów",
      "Utrzymanie liturgii łacińskiej"
    ],
    "categories": [
      "Protestantyzm",
      "Sobór trydencki"
    ],
    "answer": {
      "Protestantyzm": [
        "Dwa sakramenty",
        "Odrzucenie zwierzchnictwa papieża",
        "Biblia jako podstawowe źródło wiary"
      ],
      "Sobór trydencki": [
        "Siedem sakramentów",
        "Papież głową Kościoła",
        "Utrzymanie liturgii łacińskiej"
      ]
    },
    "explanation": "Luteranizm i kalwinizm odrzucały zwierzchnictwo papieża i pozostawiały dwa sakramenty. Sobór trydencki potwierdził siedem sakramentów, władzę papieża i łacinę w liturgii.",
    "image": "r03_sobor_trydencki.jpg"
  },
  {
    "id": "R03_REF_10",
    "section": "Reformacja i kontrreformacja",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z reformacją i kontrreformacją w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Powstanie zakonu jezuitów (1534)",
      "Defenestracja praska (1618)",
      "Wystąpienie Lutra w Wittenberdze (1517)",
      "Wprowadzenie kalendarza gregoriańskiego (1582)"
    ],
    "answer": [
      "Wystąpienie Lutra w Wittenberdze (1517)",
      "Powstanie zakonu jezuitów (1534)",
      "Wprowadzenie kalendarza gregoriańskiego (1582)",
      "Defenestracja praska (1618)"
    ],
    "explanation": "Daty tych wydarzeń to kolejno 1517, 1534, 1582 i 1618."
  },
  {
    "id": "R03_ZLO_01",
    "section": "Złoty wiek Rzeczypospolitej",
    "type": "single_choice",
    "prompt": "Jak nazywała się konstytucja z 1505 roku, która wzmacniała udział szlachty w stanowieniu prawa?",
    "options": [
      "Nihil novi",
      "Pacta conventa",
      "Konfederacja warszawska",
      "Artykuły henrykowskie",
      "Unia lubelska"
    ],
    "answer": 0,
    "explanation": "Konstytucja Nihil novi z 1505 roku należała do ważnych przywilejów ustrojowych szlachty."
  },
  {
    "id": "R03_ZLO_02",
    "section": "Złoty wiek Rzeczypospolitej",
    "type": "multi_select",
    "prompt": "Wybierz wszystkie grupy szlachty wyróżniane ze względu na majątek.",
    "options": [
      "Magnateria",
      "Szlachta średnia",
      "Szlachta zagrodowa",
      "Gołota",
      "Patrycjat miejski",
      "Duchowieństwo"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Szlachtę podzielono na magnaterię, szlachtę średnią, zagrodową i gołotę."
  },
  {
    "id": "R03_ZLO_03",
    "section": "Złoty wiek Rzeczypospolitej",
    "type": "true_false",
    "prompt": "Sejm walny obejmował króla, senat oraz izbę poselską.",
    "options": null,
    "answer": true,
    "explanation": "Sejm walny Rzeczypospolitej składał się z trzech stanów sejmujących: króla, senatu i izby poselskiej.",
    "image": "r03_sejm_szlachecki.jpg"
  },
  {
    "id": "R03_ZLO_04",
    "section": "Złoty wiek Rzeczypospolitej",
    "type": "fill_in",
    "prompt": "W 1569 roku w __________ zawarto unię, która doprowadziła do powstania Rzeczypospolitej Obojga Narodów.",
    "options": null,
    "answer": [
      "Lublinie"
    ],
    "altAnswers": [
      [
        "Lublinie",
        "Lublin"
      ]
    ],
    "explanation": "Unia lubelska z 1569 roku połączyła Polskę i Litwę unią realną."
  },
  {
    "id": "R03_ZLO_05",
    "section": "Złoty wiek Rzeczypospolitej",
    "type": "riddle",
    "prompt": "Jak nazywało się wydarzenie z 1525 roku, kiedy Albrecht Hohenzollern złożył Zygmuntowi I Staremu hołd lenny?",
    "options": null,
    "answer": "hołd pruski",
    "altAnswers": [
      "hołd pruski",
      "hołdu pruskiego"
    ],
    "explanation": "Hołd pruski był następstwem sekularyzacji państwa zakonnego i powstania Prus Książęcych."
  },
  {
    "id": "R03_ZLO_06",
    "section": "Złoty wiek Rzeczypospolitej",
    "type": "odd_one_out",
    "prompt": "Które z poniższych nie było obowiązkiem chłopa w gospodarce folwarcznej: pańszczyzna, czynsz, danina, wolna elekcja?",
    "options": null,
    "answer": "wolna elekcja",
    "explanation": "Pańszczyzna, czynsz i danina były powinnościami chłopów. Wolna elekcja dotyczyła wyboru króla przez szlachtę.",
    "image": "r03_folwark_szlachecki.jpg"
  },
  {
    "id": "R03_ZLO_07",
    "section": "Złoty wiek Rzeczypospolitej",
    "type": "scenario",
    "prompt": "Jest rok 1573. Po wygaśnięciu dynastii Jagiellonów szlachta zbiera się, aby wybrać nowego króla. Jak nazywał się ten sposób obsadzania tronu?",
    "options": [
      "Wolna elekcja",
      "Elekcja vivente rege",
      "Dziedziczenie tronu",
      "Hołd lenny",
      "Sejmik gospodarczy"
    ],
    "answer": 0,
    "explanation": "Wolna elekcja polegała na wyborze króla przez ogół szlachty; pierwszym elekcyjnym królem został Henryk Walezy.",
    "image": "r03_sejm_szlachecki.jpg"
  },
  {
    "id": "R03_ZLO_08",
    "section": "Złoty wiek Rzeczypospolitej",
    "type": "match",
    "prompt": "Połącz grupę szlachty z charakterystycznym opisem.",
    "options": null,
    "left": [
      "Magnateria",
      "Szlachta średnia",
      "Szlachta zagrodowa",
      "Gołota"
    ],
    "right": [
      "Szlachta bez własnego majątku",
      "Właściciele małego gospodarstwa pracujący fizycznie",
      "Posiadacze kilku wsi i dworków",
      "Posiadacze ogromnych majątków i wielu wsi"
    ],
    "answer": {
      "Magnateria": "Posiadacze ogromnych majątków i wielu wsi",
      "Szlachta średnia": "Posiadacze kilku wsi i dworków",
      "Szlachta zagrodowa": "Właściciele małego gospodarstwa pracujący fizycznie",
      "Gołota": "Szlachta bez własnego majątku"
    },
    "explanation": "Grupy szlachty różniły się wielkością majątku i sytuacją materialną."
  },
  {
    "id": "R03_ZLO_09",
    "section": "Złoty wiek Rzeczypospolitej",
    "type": "sort",
    "prompt": "Podziel postanowienia unii lubelskiej na wspólne i zachowane odrębnie dla Korony i Litwy.",
    "options": null,
    "items": [
      "Król",
      "Moneta",
      "Skarb",
      "Urzędy",
      "Sejm i senat",
      "Polityka zagraniczna",
      "Wojsko",
      "Sądownictwo"
    ],
    "categories": [
      "Wspólne",
      "Odrębne"
    ],
    "answer": {
      "Wspólne": [
        "Król",
        "Sejm i senat",
        "Moneta",
        "Polityka zagraniczna"
      ],
      "Odrębne": [
        "Skarb",
        "Wojsko",
        "Urzędy",
        "Sądownictwo"
      ]
    },
    "explanation": "Po unii lubelskiej Korona i Litwa miały wspólnego króla, sejm, monetę i politykę zagraniczną, a odrębne skarby, wojska, urzędy i sądownictwo."
  },
  {
    "id": "R03_ZLO_10",
    "section": "Złoty wiek Rzeczypospolitej",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia ustrojowe i polityczne w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Konstytucja Nihil novi (1505)",
      "Unia lubelska (1569)",
      "Pierwszy sejm walny w Piotrkowie (1493)",
      "Hołd pruski (1525)"
    ],
    "answer": [
      "Pierwszy sejm walny w Piotrkowie (1493)",
      "Konstytucja Nihil novi (1505)",
      "Hołd pruski (1525)",
      "Unia lubelska (1569)"
    ],
    "explanation": "Pierwszy sejm walny odbył się w 1493 roku, Nihil novi uchwalono w 1505, hołd pruski złożono w 1525, a unię lubelską zawarto w 1569 roku."
  },
  {
    "id": "R03_WOJ_01",
    "section": "Wojny Rzeczypospolitej w XVII wieku",
    "type": "single_choice",
    "prompt": "Który król Polski dowodził odsieczą wiedeńską w 1683 roku?",
    "options": [
      "Jan III Sobieski",
      "Jan II Kazimierz",
      "Zygmunt III Waza",
      "Władysław IV Waza",
      "Michał Korybut Wiśniowiecki"
    ],
    "answer": 0,
    "explanation": "Jan III Sobieski pokonał wojska tureckie pod Wiedniem w 1683 roku.",
    "image": "r03_husaria_w_bitewie.jpg"
  },
  {
    "id": "R03_WOJ_02",
    "section": "Wojny Rzeczypospolitej w XVII wieku",
    "type": "multi_select",
    "prompt": "Zaznacz skutki potopu szwedzkiego.",
    "options": [
      "Wielkie straty ludnościowe",
      "Zniszczenie i wywóz dóbr kultury",
      "Zniesienie zwierzchnictwa Polski nad Prusami Książęcymi",
      "Trwałe zakończenie wszelkich wojen w Europie",
      "Zniesienie pańszczyzny"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Potop spowodował wyludnienie, straty materialne i utratę zwierzchnictwa nad Prusami Książęcymi.",
    "image": "r03_wojska_na_baltyku.jpg"
  },
  {
    "id": "R03_WOJ_03",
    "section": "Wojny Rzeczypospolitej w XVII wieku",
    "type": "true_false",
    "prompt": "Pokój w Oliwie zawarto w 1660 roku, kończąc wojnę polsko-szwedzką.",
    "options": null,
    "answer": true,
    "explanation": "W 1660 roku Rzeczpospolita i Szwecja zawarły pokój w Oliwie."
  },
  {
    "id": "R03_WOJ_04",
    "section": "Wojny Rzeczypospolitej w XVII wieku",
    "type": "fill_in",
    "prompt": "Powstanie Kozaków pod wodzą Bohdana Chmielnickiego wybuchło w roku __________.",
    "options": null,
    "answer": [
      "1648"
    ],
    "altAnswers": [
      [
        "1648",
        "1648 r."
      ]
    ],
    "explanation": "Powstanie Chmielnickiego na Ukrainie rozpoczęło się w 1648 roku."
  },
  {
    "id": "R03_WOJ_05",
    "section": "Wojny Rzeczypospolitej w XVII wieku",
    "type": "riddle",
    "prompt": "Jak nazywano prawo jednego posła do zerwania obrad sejmu, które utrudniało reformowanie Rzeczypospolitej?",
    "options": null,
    "answer": "liberum veto",
    "altAnswers": [
      "liberum veto",
      "Liberum veto"
    ],
    "explanation": "Zasada liberum veto pozwalała pojedynczemu posłowi przerwać obrady, co osłabiało funkcjonowanie państwa."
  },
  {
    "id": "R03_WOJ_06",
    "section": "Wojny Rzeczypospolitej w XVII wieku",
    "type": "odd_one_out",
    "prompt": "Które państwo nie było przeciwnikiem Rzeczypospolitej w wojnach XVII wieku: Szwecja, Rosja, Turcja, Portugalia?",
    "options": null,
    "answer": "Portugalia",
    "explanation": "W XVII wieku Rzeczpospolita walczyła m.in. ze Szwecją, Rosją i Turcją; Portugalia nie należała do tych przeciwników."
  },
  {
    "id": "R03_WOJ_07",
    "section": "Wojny Rzeczypospolitej w XVII wieku",
    "type": "scenario",
    "prompt": "W 1655 roku wojska Karola X Gustawa błyskawicznie zajmują ziemie polskie, a część obrońców kapituluje. Jak nazywa się ten okres wojny?",
    "options": [
      "Potop szwedzki",
      "Powstanie Chmielnickiego",
      "Odsiecz wiedeńska",
      "Wojna trzynastoletnia",
      "Wyprawy inflanckie Batorego"
    ],
    "answer": 0,
    "explanation": "Potop szwedzki trwał od 1655 do 1660 roku i początkowo oznaczał szybkie postępy wojsk szwedzkich.",
    "image": "r03_wojska_na_baltyku.jpg"
  },
  {
    "id": "R03_WOJ_08",
    "section": "Wojny Rzeczypospolitej w XVII wieku",
    "type": "match",
    "prompt": "Połącz wydarzenie z datą.",
    "options": null,
    "left": [
      "Początek potopu szwedzkiego",
      "Pokój w Oliwie",
      "Odsiecz wiedeńska",
      "Pokój w Karłowicach"
    ],
    "right": [
      "1699",
      "1683",
      "1660",
      "1655"
    ],
    "answer": {
      "Początek potopu szwedzkiego": "1655",
      "Pokój w Oliwie": "1660",
      "Odsiecz wiedeńska": "1683",
      "Pokój w Karłowicach": "1699"
    },
    "explanation": "Wojna szwedzka rozpoczęła się w 1655 roku i zakończyła pokojem w 1660, odsiecz Wiednia nastąpiła w 1683, a pokój w Karłowicach w 1699 roku.",
    "image": "r03_husaria_w_bitewie.jpg"
  },
  {
    "id": "R03_WOJ_09",
    "section": "Wojny Rzeczypospolitej w XVII wieku",
    "type": "sort",
    "prompt": "Przyporządkuj wydarzenia do konfliktów z poszczególnymi przeciwnikami Rzeczypospolitej.",
    "options": null,
    "items": [
      "Pokój w Oliwie",
      "Rozejm w Andruszowie",
      "Odsiecz Wiednia",
      "Ugoda w Kiejdanach",
      "Pokój Grzymułtowskiego",
      "Pokój w Karłowicach"
    ],
    "categories": [
      "Wojny ze Szwecją",
      "Wojny z Rosją",
      "Wojny z Turcją"
    ],
    "answer": {
      "Wojny ze Szwecją": [
        "Pokój w Oliwie",
        "Ugoda w Kiejdanach"
      ],
      "Wojny z Rosją": [
        "Rozejm w Andruszowie",
        "Pokój Grzymułtowskiego"
      ],
      "Wojny z Turcją": [
        "Odsiecz Wiednia",
        "Pokój w Karłowicach"
      ]
    },
    "explanation": "Pokój w Oliwie i Kiejdany wiążą się z potopem, Andruszów i pokój Grzymułtowskiego z Rosją, a Wiedeń i Karłowice z Turcją."
  },
  {
    "id": "R03_WOJ_10",
    "section": "Wojny Rzeczypospolitej w XVII wieku",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia XVII wieku w porządku chronologicznym.",
    "options": null,
    "items": [
      "Ugoda w Perejasławiu (1654)",
      "Pokój w Oliwie (1660)",
      "Początek powstania Chmielnickiego (1648)",
      "Początek potopu szwedzkiego (1655)",
      "Odsiecz wiedeńska (1683)"
    ],
    "answer": [
      "Początek powstania Chmielnickiego (1648)",
      "Ugoda w Perejasławiu (1654)",
      "Początek potopu szwedzkiego (1655)",
      "Pokój w Oliwie (1660)",
      "Odsiecz wiedeńska (1683)"
    ],
    "explanation": "Kolejne daty to 1648, 1654, 1655, 1660 i 1683."
  },
  {
    "id": "R03_BAR_01",
    "section": "Kultura baroku i sarmatyzm",
    "type": "single_choice",
    "prompt": "Kto namalował „Nocną straż”?",
    "options": [
      "Rembrandt van Rijn",
      "Peter Paul Rubens",
      "Diego Velázquez",
      "Caravaggio",
      "El Greco"
    ],
    "answer": 0,
    "explanation": "„Nocna straż” jest dziełem Rembrandta."
  },
  {
    "id": "R03_BAR_02",
    "section": "Kultura baroku i sarmatyzm",
    "type": "multi_select",
    "prompt": "Wybierz cechy sztuki barokowej.",
    "options": [
      "Ruch i dynamika",
      "Kontrast",
      "Przepych i bogactwo ozdób",
      "Ścisła prostota i umiar",
      "Rezygnacja ze światłocienia"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Barok dążył do wywoływania silnych wrażeń przez dynamikę, kontrasty, bogate dekoracje i światłocień.",
    "image": "r03_kosciol_barokowy.jpg"
  },
  {
    "id": "R03_BAR_03",
    "section": "Kultura baroku i sarmatyzm",
    "type": "true_false",
    "prompt": "Sarmatyzm opierał się na przekonaniu szlachty polskiej o pochodzeniu od starożytnych Sarmatów.",
    "options": null,
    "answer": true,
    "explanation": "Sarmaci byli ludem, od którego polska szlachta wywodziła swoje pochodzenie w ideologii sarmatyzmu.",
    "image": "r03_szlachta_sarmacka.jpg"
  },
  {
    "id": "R03_BAR_04",
    "section": "Kultura baroku i sarmatyzm",
    "type": "fill_in",
    "prompt": "Kompozytorem „Czterech pór roku” był __________.",
    "options": null,
    "answer": [
      "Antonio Vivaldi"
    ],
    "altAnswers": [
      [
        "Antonio Vivaldi",
        "Vivaldi",
        "Antoni Vivaldi"
      ]
    ],
    "explanation": "„Cztery pory roku” to dzieło kompozytora Antonia Vivaldiego."
  },
  {
    "id": "R03_BAR_05",
    "section": "Kultura baroku i sarmatyzm",
    "type": "riddle",
    "prompt": "Od jakiego starożytnego ludu, według ideologii sarmatyzmu, wywodziła się szlachta polska?",
    "options": null,
    "answer": "Sarmatów",
    "altAnswers": [
      "Sarmatów",
      "Sarmaci"
    ],
    "explanation": "Sarmatyzm wiązał szlachecką tożsamość z domniemanym pochodzeniem od Sarmatów.",
    "image": "r03_szlachta_sarmacka.jpg"
  },
  {
    "id": "R03_BAR_06",
    "section": "Kultura baroku i sarmatyzm",
    "type": "odd_one_out",
    "prompt": "Wskaż budowlę nienależącą do architektury barokowej: Wersal, pałac w Wilanowie, pałac Schönbrunn, katedra we Florencji.",
    "options": null,
    "answer": "katedra we Florencji",
    "explanation": "Katedra we Florencji jest związana z architekturą renesansową, zwłaszcza dzięki swojej kopule; Wersal, Wilanów i Schönbrunn to przykłady pałaców barokowych."
  },
  {
    "id": "R03_BAR_07",
    "section": "Kultura baroku i sarmatyzm",
    "type": "scenario",
    "prompt": "Zwiedzasz kościół o teatralnym wnętrzu, pełnym ozdób, kontrastów światła i cienia oraz dynamicznych form. Który styl najlepiej odpowiada temu opisowi?",
    "options": [
      "Barok",
      "Renesans",
      "Gotyk",
      "Romanizm",
      "Klasycyzm"
    ],
    "answer": 0,
    "explanation": "Monumentalność, teatralność, kontrasty i dekoracyjność są typowymi cechami baroku.",
    "image": "r03_kosciol_barokowy.jpg"
  },
  {
    "id": "R03_BAR_08",
    "section": "Kultura baroku i sarmatyzm",
    "type": "match",
    "prompt": "Połącz kompozytora z utworem barokowym.",
    "options": null,
    "left": [
      "Jan Sebastian Bach",
      "Georg Friedrich Handel",
      "Antonio Vivaldi",
      "Johann Pachelbel"
    ],
    "right": [
      "Kanon D-dur",
      "Cztery pory roku",
      "Mesjasz",
      "Koncerty brandenburskie"
    ],
    "answer": {
      "Jan Sebastian Bach": "Koncerty brandenburskie",
      "Georg Friedrich Handel": "Mesjasz",
      "Antonio Vivaldi": "Cztery pory roku",
      "Johann Pachelbel": "Kanon D-dur"
    },
    "explanation": "Bach skomponował „Koncerty brandenburskie”, Handel „Mesjasza”, Vivaldi „Cztery pory roku”, a Pachelbel „Kanon D-dur”."
  },
  {
    "id": "R03_BAR_09",
    "section": "Kultura baroku i sarmatyzm",
    "type": "sort",
    "prompt": "Rozdziel postacie i dzieła baroku na malarstwo i muzykę.",
    "options": null,
    "items": [
      "Rembrandt van Rijn",
      "Peter Paul Rubens",
      "Cztery pory roku",
      "Nocna straż",
      "Antonio Vivaldi",
      "Georg Friedrich Handel"
    ],
    "categories": [
      "Malarstwo",
      "Muzyka"
    ],
    "answer": {
      "Malarstwo": [
        "Rembrandt van Rijn",
        "Nocna straż",
        "Peter Paul Rubens"
      ],
      "Muzyka": [
        "Antonio Vivaldi",
        "Cztery pory roku",
        "Georg Friedrich Handel"
      ]
    },
    "explanation": "Rembrandt i Rubens należeli do malarzy baroku, natomiast Vivaldi i Händel do kompozytorów tej epoki."
  },
  {
    "id": "R03_BAR_10",
    "section": "Kultura baroku i sarmatyzm",
    "type": "single_choice",
    "prompt": "Co oznacza włoskie słowo „barocco”, od którego pochodzi nazwa baroku?",
    "options": [
      "Perłę o nieregularnym kształcie",
      "Złoconą kopułę",
      "Ogród w kształcie litery U",
      "Kamienny krużganek",
      "Bogato zdobiony ołtarz"
    ],
    "answer": 0,
    "explanation": "Określenie „barok” wywodzi się od włoskiego „barocco”, oznaczającego perłę o nieregularnym kształcie."
  },
  {
    "id": "R03_HARD_01",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz postać z odpowiadającym jej dokonaniem.",
    "options": null,
    "left": [
      "Amerigo Vespucci",
      "Giordano Bruno",
      "Jakub Wujek",
      "Jan Heweliusz"
    ],
    "right": [
      "Obserwacje Księżyca",
      "Przekład Biblii na język polski",
      "Pogląd o wielości światów we wszechświecie",
      "Upowszechnienie nazwy Nowy Świat"
    ],
    "answer": {
      "Amerigo Vespucci": "Upowszechnienie nazwy Nowy Świat",
      "Giordano Bruno": "Pogląd o wielości światów we wszechświecie",
      "Jakub Wujek": "Przekład Biblii na język polski",
      "Jan Heweliusz": "Obserwacje Księżyca"
    },
    "explanation": "Vespucci używał określenia Nowy Świat, Bruno rozważał liczne światy, Wujek przetłumaczył Biblię, a Heweliusz prowadził badania Księżyca."
  },
  {
    "id": "R03_HARD_02",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ustaw podboje i wyprawy przełomu XV i XVI wieku chronologicznie.",
    "options": null,
    "items": [
      "Pierwsza wyprawa Kolumba (1492)",
      "Rozpoczęcie wyprawy Magellana (1519)",
      "Przylądek Dobrej Nadziei odkryty przez Diaza (1488)",
      "Dotarcie Vasco da Gamy do Indii (1498)",
      "Zakończenie podboju Azteków przez Cortésa (1521)"
    ],
    "answer": [
      "Przylądek Dobrej Nadziei odkryty przez Diaza (1488)",
      "Pierwsza wyprawa Kolumba (1492)",
      "Dotarcie Vasco da Gamy do Indii (1498)",
      "Rozpoczęcie wyprawy Magellana (1519)",
      "Zakończenie podboju Azteków przez Cortésa (1521)"
    ],
    "explanation": "Wydarzenia miały miejsce kolejno w latach 1488, 1492, 1498, 1519 i 1521."
  },
  {
    "id": "R03_HARD_03",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz wszystkie poprawne zestawienia.",
    "options": [
      "Michał Anioł — Pietà",
      "Rafael Santi — Szkoła Ateńska",
      "Jan Kochanowski — Treny",
      "Mikołaj Rej — Utopia",
      "Rembrandt — Cztery pory roku"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "„Pietà” to rzeźba Michała Anioła, „Szkołę Ateńską” namalował Rafael, a „Treny” napisał Kochanowski; „Utopia” to dzieło Morusa, a „Cztery pory roku” Vivaldiego."
  },
  {
    "id": "R03_HARD_04",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Który autor renesansu napisał „O naprawie Rzeczypospolitej”?",
    "options": null,
    "answer": "Andrzej Frycz Modrzewski",
    "altAnswers": [
      "Andrzej Frycz Modrzewski",
      "Frycz Modrzewski",
      "Modrzewski"
    ],
    "explanation": "Andrzej Frycz Modrzewski był pisarzem politycznym i autorem dzieła „O naprawie Rzeczypospolitej”."
  },
  {
    "id": "R03_HARD_05",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Pierwszy sejm walny obradował w Piotrkowie w roku __________, a konstytucję Nihil novi uchwalono w roku __________.",
    "options": null,
    "answer": [
      "1493",
      "1505"
    ],
    "altAnswers": [
      [
        "1493",
        "1493 r."
      ],
      [
        "1505",
        "1505 r."
      ]
    ],
    "explanation": "Sejm walny zebrał się po raz pierwszy w 1493 roku, zaś Nihil novi pochodzi z 1505 roku."
  },
  {
    "id": "R03_HARD_06",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przydziel postacie do właściwych zjawisk historycznych.",
    "options": null,
    "items": [
      "Amerigo Vespucci",
      "Jan Kalwin",
      "Giordano Bruno",
      "Francisco Pizarro",
      "Ignacy Loyola",
      "Isaac Newton"
    ],
    "categories": [
      "Odkrycia geograficzne",
      "Reformacja i kontrreformacja",
      "Nauka XVI–XVII wieku"
    ],
    "answer": {
      "Odkrycia geograficzne": [
        "Amerigo Vespucci",
        "Francisco Pizarro"
      ],
      "Reformacja i kontrreformacja": [
        "Jan Kalwin",
        "Ignacy Loyola"
      ],
      "Nauka XVI–XVII wieku": [
        "Giordano Bruno",
        "Isaac Newton"
      ]
    },
    "explanation": "Vespucci i Pizarro występują przy odkryciach, Kalwin i Loyola przy sporach religijnych, Bruno i Newton przy dziejach nauki."
  },
  {
    "id": "R03_HARD_07",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który myśliciel głosił, że Układ Słoneczny nie jest jedynym układem planetarnym we wszechświecie?",
    "options": [
      "Giordano Bruno",
      "Mikołaj Kopernik",
      "Jan Kepler",
      "Galileusz",
      "Isaac Newton"
    ],
    "answer": 0,
    "explanation": "Giordano Bruno twierdził, że istnieje nieskończenie wiele światów podobnych do naszego."
  },
  {
    "id": "R03_HARD_08",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Po 4 października 1582 roku w kalendarzu gregoriańskim nastąpił od razu 15 października.",
    "options": null,
    "answer": true,
    "explanation": "Przy reformie kalendarza usunięto dziesięć dni, a po 4 października nastąpił 15 października."
  },
  {
    "id": "R03_HARD_09",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Dopasuj wydarzenia do ich dat.",
    "options": null,
    "left": [
      "Hołd pruski",
      "Unia lubelska",
      "Pokój w Oliwie",
      "Pokój w Karłowicach"
    ],
    "right": [
      "1699",
      "1660",
      "1569",
      "1525"
    ],
    "answer": {
      "Hołd pruski": "1525",
      "Unia lubelska": "1569",
      "Pokój w Oliwie": "1660",
      "Pokój w Karłowicach": "1699"
    },
    "explanation": "Hołd pruski złożono w 1525, unię lubelską zawarto w 1569, pokój w Oliwie podpisano w 1660, a pokój w Karłowicach w 1699 roku."
  },
  {
    "id": "R03_HARD_10",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Jest rok 1657. Zostają zawarte traktaty, które znoszą zależność lenną Prus Książęcych od Rzeczypospolitej. Jak nazywają się te traktaty?",
    "options": [
      "Welawsko-bydgoskie",
      "Pokój w Oliwie",
      "Ugoda w Kiejdanach",
      "Ugoda w Hadziaczu",
      "Pokój w Karłowicach"
    ],
    "answer": 0,
    "explanation": "Traktaty welawsko-bydgoskie z 1657 roku oznaczały zniesienie zależności lennej Prus Książęcych od Polski."
  },
  {
    "id": "R03_HARD_11",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Który element nie był wspólny dla Korony i Litwy po unii lubelskiej: król, sejm, moneta, wojsko?",
    "options": null,
    "answer": "wojsko",
    "explanation": "Na mocy unii lubelskiej wspólne były m.in. król, sejm i moneta, natomiast wojska pozostały odrębne."
  },
  {
    "id": "R03_HARD_12",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż porozumienia związane z powstaniem Chmielnickiego i jego następstwami chronologicznie.",
    "options": null,
    "items": [
      "Ugoda w Białej Cerkwi (1651)",
      "Ugoda w Hadziaczu (1658)",
      "Ugoda w Zborowie (1649)",
      "Ugoda w Perejasławiu (1654)",
      "Rozejm w Andruszowie (1667)"
    ],
    "answer": [
      "Ugoda w Zborowie (1649)",
      "Ugoda w Białej Cerkwi (1651)",
      "Ugoda w Perejasławiu (1654)",
      "Ugoda w Hadziaczu (1658)",
      "Rozejm w Andruszowie (1667)"
    ],
    "explanation": "Chronologicznie: Zborów (1649), Biała Cerkiew (1651), Perejasław (1654), Hadziacz (1658), Andruszów (1667)."
  },
  {
    "id": "R03_HARD_13",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Który uczony sformułował prawa ruchu planet?",
    "options": null,
    "answer": "Jan Kepler",
    "altAnswers": [
      "Jan Kepler",
      "Johannes Kepler",
      "Kepler"
    ],
    "explanation": "Johannes (Jan) Kepler sformułował prawa ruchu planet."
  },
  {
    "id": "R03_HARD_14",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które zdania o wojnach XVII wieku są zgodne z faktami historycznymi?",
    "options": [
      "W 1673 roku Sobieski zwyciężył pod Chocimiem",
      "W 1683 roku wojska Sobieskiego wsparły Wiedeń",
      "W 1699 roku zawarto pokój w Karłowicach",
      "Pokój w Oliwie podpisano w 1655 roku",
      "Ugoda w Perejasławiu została zawarta w 1699 roku"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Sobieski zwyciężył pod Chocimiem w 1673 roku i pod Wiedniem w 1683; w 1699 podpisano pokój w Karłowicach."
  },
  {
    "id": "R03_HARD_15",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Hołd pruski złożono w roku __________, a traktaty welawsko-bydgoskie zawarto w roku __________.",
    "options": null,
    "answer": [
      "1525",
      "1657"
    ],
    "altAnswers": [
      [
        "1525",
        "1525 r."
      ],
      [
        "1657",
        "1657 r."
      ]
    ],
    "explanation": "Hołd pruski uczynił Albrechta Hohenzollerna lennikiem Polski w 1525 roku; w 1657 traktaty welawsko-bydgoskie zniosły tę zależność."
  }
];

const KID_PROMPTS = {
  "R03_ODK_01": "Który kraj oprócz Hiszpanii rozpoczął wielkie odkrycia geograficzne?",
  "R03_REN_01": "Jak nazywał się renesansowy nurt stawiający człowieka w centrum?",
  "R03_REN_05": "Jak nazywa się finansowe wspieranie artystów?",
  "R03_REF_01": "Kto rozpoczął reformację w 1517 roku?",
  "R03_REF_03": "Czy król był głową Kościoła anglikańskiego?",
  "R03_ZLO_04": "Unię z 1569 roku zawarto w __________.",
  "R03_ZLO_07": "Jak nazywał się wybór króla przez szlachtę?",
  "R03_WOJ_01": "Jaki król dowodził pod Wiedniem w 1683 roku?",
  "R03_WOJ_04": "Powstanie Chmielnickiego wybuchło w roku __________.",
  "R03_BAR_03": "Czy polska szlachta uważała się za potomków Sarmatów?",
  "R03_BAR_04": "Kto skomponował „Cztery pory roku”?"
};

const chapter = {
  id: "r03",
  number: 3,
  title: "Nowożytność",
  icon: "📜",
  sectionOrder: [
    "Wielkie odkrycia geograficzne",
    "Kultura renesansu",
    "Reformacja i kontrreformacja",
    "Złoty wiek Rzeczypospolitej",
    "Wojny Rzeczypospolitej w XVII wieku",
    "Kultura baroku i sarmatyzm"
  ],
  sectionIcons: {
    "Wielkie odkrycia geograficzne": "🌍",
    "Kultura renesansu": "🎨",
    "Reformacja i kontrreformacja": "⛪",
    "Złoty wiek Rzeczypospolitej": "👑",
    "Wojny Rzeczypospolitej w XVII wieku": "⚔️",
    "Kultura baroku i sarmatyzm": "🎭"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
