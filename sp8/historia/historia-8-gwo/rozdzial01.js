// Skróty sekcji (do identyfikatorów ćwiczeń):
//   SOJ  = Rok sojuszy
//   POL  = Międzynarodowe położenie Polski
//   WYB  = Wybuch II wojny światowej
//   SIL  = Siły Polski i Niemiec
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_SOJ_01",
    "section": "Rok sojuszy",
    "type": "single_choice",
    "prompt": "Czego Hitler zażądał od Polski w marcu 1939 r. w sprawie Wolnego Miasta Gdańska?",
    "options": [
      "Włączenia go do Niemiec",
      "Włączenia go do ZSRR",
      "Przekazania go Francji",
      "Przekształcenia go w część Prus Wschodnich bez zmiany granic",
      "Oddania go Wielkiej Brytanii",
      "Utworzenia z niego niepodległego państwa"
    ],
    "answer": 0,
    "explanation": "Hitler zażądał zgody na włączenie Wolnego Miasta Gdańska do Niemiec."
  },
  {
    "id": "R01_SOJ_02",
    "section": "Rok sojuszy",
    "type": "multi_select",
    "prompt": "Zaznacz dwa żądania Hitlera wobec Polski z marca 1939 r.",
    "options": [
      "Włączenie Wolnego Miasta Gdańska do Niemiec",
      "Budowa eksterytorialnej autostrady i linii kolejowej przez polskie Pomorze",
      "Oddanie całego Pomorza ZSRR",
      "Zerwanie sojuszu z Francją",
      "Przekazanie Warszawy Niemcom"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Żądania dotyczyły Gdańska oraz eksterytorialnego połączenia Niemiec z Prusami Wschodnimi przez polskie Pomorze."
  },
  {
    "id": "R01_SOJ_03",
    "section": "Rok sojuszy",
    "type": "true_false",
    "prompt": "Polskie władze przyjęły niemieckie żądania z marca 1939 r.",
    "options": null,
    "answer": false,
    "explanation": "Polscy politycy odrzucili niemieckie żądania, mimo ryzyka wojny."
  },
  {
    "id": "R01_SOJ_04",
    "section": "Rok sojuszy",
    "type": "fill_in",
    "prompt": "Wielka Brytania udzieliła Polsce gwarancji pomocy __________, a układ o pomocy wojskowej zawarła z Polską __________.",
    "options": null,
    "answer": [
      "31 marca",
      "25 sierpnia"
    ],
    "explanation": "Brytyjskie gwarancje padły 31 marca 1939 r., a 25 sierpnia zostały wzmocnione układem o pomocy wojskowej."
  },
  {
    "id": "R01_SOJ_05",
    "section": "Rok sojuszy",
    "type": "riddle",
    "prompt": "Polski minister spraw zagranicznych, który 5 maja 1939 r. odrzucił żądania Hitlera, to...",
    "options": null,
    "answer": "Józef Beck",
    "altAnswers": [
      "Józef Beck",
      "Jozef Beck",
      "Beck"
    ],
    "explanation": "Józef Beck w przemówieniu sejmowym odrzucił niemieckie żądania nawet za cenę wojny z Niemcami.",
    "image": "r01_beck_przemowienie.jpg"
  },
  {
    "id": "R01_SOJ_06",
    "section": "Rok sojuszy",
    "type": "match",
    "prompt": "Połącz termin francuskiego zobowiązania z zapowiedzianym działaniem.",
    "options": null,
    "left": [
      "natychmiast",
      "po trzech dniach wojny",
      "po piętnastu dniach wojny"
    ],
    "right": [
      "atak na Niemcy z powietrza",
      "ograniczone działania zbrojne na lądzie",
      "uderzenie na Niemcy wszystkimi siłami"
    ],
    "answer": {
      "natychmiast": "atak na Niemcy z powietrza",
      "po trzech dniach wojny": "ograniczone działania zbrojne na lądzie",
      "po piętnastu dniach wojny": "uderzenie na Niemcy wszystkimi siłami"
    },
    "explanation": "Francja zapowiadała natychmiastowy atak lotniczy, ograniczone działania lądowe po trzech dniach i pełną ofensywę po piętnastu dniach."
  },
  {
    "id": "R01_SOJ_07",
    "section": "Rok sojuszy",
    "type": "single_choice",
    "prompt": "Kiedy Trzecia Rzesza i ZSRR podpisały pakt Ribbentrop-Mołotow?",
    "options": [
      "31 marca 1939 r.",
      "5 maja 1939 r.",
      "22 sierpnia 1939 r.",
      "23 sierpnia 1939 r.",
      "25 sierpnia 1939 r.",
      "31 sierpnia 1939 r."
    ],
    "answer": 3,
    "explanation": "Pakt Ribbentrop-Mołotow podpisano 23 sierpnia 1939 r.",
    "image": "r01_pakt_ribbentrop_molotow.jpg"
  },
  {
    "id": "R01_SOJ_08",
    "section": "Rok sojuszy",
    "type": "multi_select",
    "prompt": "Zaznacz obszary, które w tajnym protokole paktu Ribbentrop-Mołotow miały znaleźć się w strefie Stalina.",
    "options": [
      "wschodnia część Polski",
      "Finlandia",
      "Estonia",
      "Łotwa",
      "część Rumunii",
      "Litwa"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Stalin miał zająć wschodnią część Polski, Finlandię, Estonię, Łotwę i część Rumunii. Litwa została w tym podziale przypisana Hitlerowi."
  },
  {
    "id": "R01_SOJ_09",
    "section": "Rok sojuszy",
    "type": "true_false",
    "prompt": "W jawnej części paktu Ribbentrop-Mołotow ZSRR zobowiązał się do neutralności w razie wojny toczonej przez Trzecią Rzeszę.",
    "options": null,
    "answer": true,
    "explanation": "Neutralność ZSRR oznaczała zgodę Stalina na niemiecką agresję przeciwko Polsce."
  },
  {
    "id": "R01_SOJ_10",
    "section": "Rok sojuszy",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Podpisanie paktu Ribbentrop-Mołotow",
      "Brytyjski układ o pomocy wojskowej z Polską",
      "Brytyjskie gwarancje dla Polski",
      "Niemiecki atak na Polskę",
      "Odnowienie sojuszu Polski z Francją"
    ],
    "answer": [
      "Brytyjskie gwarancje dla Polski",
      "Odnowienie sojuszu Polski z Francją",
      "Podpisanie paktu Ribbentrop-Mołotow",
      "Brytyjski układ o pomocy wojskowej z Polską",
      "Niemiecki atak na Polskę"
    ],
    "explanation": "Kolejność to: 31 marca, kwiecień, 23 sierpnia, 25 sierpnia i 1 września 1939 r."
  },
  {
    "id": "R01_SOJ_11",
    "section": "Rok sojuszy",
    "type": "scenario",
    "prompt": "W marcu 1939 r. polski rząd rozważa przyjęcie żądań Hitlera. Jaki skutek takiej decyzji stanowił najważniejsze zagrożenie dla pozycji Polski?",
    "options": [
      "Polska stałaby się państwem zależnym od Niemiec",
      "Polska natychmiast weszłaby do ZSRR",
      "Francja przejęłaby Wolne Miasto Gdańsk",
      "Wielka Brytania wysłałaby wojska do Warszawy",
      "Prusy Wschodnie zostałyby przyłączone do Polski",
      "Niemcy zrezygnowałyby z dalszych żądań"
    ],
    "answer": 0,
    "explanation": "Przyjęcie niemieckich żądań miało uczynić Polskę państwem zależnym od Niemiec."
  },
  {
    "id": "R01_SOJ_12",
    "section": "Rok sojuszy",
    "type": "odd_one_out",
    "prompt": "Wskaż obszar niepasujący do pozostałych pod względem strefy przyznanej Stalinowi w tajnym protokole: Finlandia, Estonia, Łotwa, Litwa.",
    "options": null,
    "answer": "Litwa",
    "explanation": "Finlandia, Estonia i Łotwa znalazły się w strefie Stalina, natomiast Litwę w tym podziale przypisano Hitlerowi."
  },
  {
    "id": "R01_POL_01",
    "section": "Międzynarodowe położenie Polski",
    "type": "single_choice",
    "prompt": "Ile francuskich dywizji stało przy granicy z Niemcami latem 1939 r.?",
    "options": [
      "33",
      "36",
      "60",
      "85",
      "120",
      "600"
    ],
    "answer": 3,
    "explanation": "Przy granicy z Niemcami stało 85 dywizji francuskich."
  },
  {
    "id": "R01_POL_02",
    "section": "Międzynarodowe położenie Polski",
    "type": "true_false",
    "prompt": "Granicę Niemiec od strony Francji zabezpieczały 33 dywizje Wehrmachtu.",
    "options": null,
    "answer": true,
    "explanation": "Naprzeciw 85 dywizji francuskich znajdowały się 33 dywizje Wehrmachtu."
  },
  {
    "id": "R01_POL_03",
    "section": "Międzynarodowe położenie Polski",
    "type": "fill_in",
    "prompt": "Francuzi mieli prawie __________ czołgów i około __________ samolotów gotowych do akcji.",
    "options": null,
    "answer": [
      "3000",
      "600"
    ],
    "explanation": "Francja dysponowała prawie 3 tysiącami czołgów i około 600 samolotami gotowymi do działania."
  },
  {
    "id": "R01_POL_04",
    "section": "Międzynarodowe położenie Polski",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki, które osłabiały gotowość Francji do ofensywy przeciw Niemcom.",
    "options": [
      "Wiara, że wojny na Zachodzie da się uniknąć",
      "Ogromne straty poniesione w I wojnie światowej",
      "Niechęć do umierania za Gdańsk",
      "Brak jakichkolwiek czołgów",
      "Brak wojsk przy granicy z Niemcami"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Francuzi liczyli na uniknięcie wojny i pamiętali ogromne straty z I wojny światowej, dlatego nie chcieli podejmować wielkiej ofensywy w obronie Polski."
  },
  {
    "id": "R01_POL_05",
    "section": "Międzynarodowe położenie Polski",
    "type": "single_choice",
    "prompt": "Ile bombowców zdolnych do nalotów na Niemcy miała Wielka Brytania?",
    "options": [
      "około 36",
      "około 120",
      "około 300",
      "około 400",
      "około 600",
      "około 1300"
    ],
    "answer": 4,
    "explanation": "Brytyjczycy mieli około 600 bombowców zdolnych do nalotów na Niemcy, ale nie zamierzali ich użyć."
  },
  {
    "id": "R01_POL_06",
    "section": "Międzynarodowe położenie Polski",
    "type": "match",
    "prompt": "Połącz państwo z opisem jego sytuacji latem 1939 r.",
    "options": null,
    "left": [
      "Niemcy",
      "Francja",
      "Wielka Brytania",
      "ZSRR",
      "Polska"
    ],
    "right": [
      "miały miażdżącą przewagę nad polską armią",
      "miały duże siły przy granicy lecz liczyły na uniknięcie wojny",
      "nie były gotowe do wojny i potrzebowały czasu na przerzut wojsk lądowych",
      "wybrały przymierze z Hitlerem dla większych korzyści",
      "odrzuciła żądania Hitlera i liczyła na sojuszników"
    ],
    "answer": {
      "Niemcy": "miały miażdżącą przewagę nad polską armią",
      "Francja": "miały duże siły przy granicy lecz liczyły na uniknięcie wojny",
      "Wielka Brytania": "nie były gotowe do wojny i potrzebowały czasu na przerzut wojsk lądowych",
      "ZSRR": "wybrały przymierze z Hitlerem dla większych korzyści",
      "Polska": "odrzuciła żądania Hitlera i liczyła na sojuszników"
    },
    "explanation": "Położenie Polski zależało od przewagi Niemiec, bierności zachodnich sojuszników i decyzji Stalina o współpracy z Hitlerem."
  },
  {
    "id": "R01_POL_07",
    "section": "Międzynarodowe położenie Polski",
    "type": "riddle",
    "prompt": "Przywódca ZSRR, który wybrał przymierze z Hitlerem, to...",
    "options": null,
    "answer": "Józef Stalin",
    "altAnswers": [
      "Józef Stalin",
      "Jozef Stalin",
      "Stalin"
    ],
    "explanation": "Józef Stalin uznał, że Hitler oferuje mu większe korzyści niż możliwy sojusz z Anglią i Francją."
  },
  {
    "id": "R01_POL_08",
    "section": "Międzynarodowe położenie Polski",
    "type": "scenario",
    "prompt": "Stalin rozważa sojusz z Niemcami albo z Anglią i Francją. Dlaczego wybiera porozumienie z Hitlerem?",
    "options": [
      "Hitler zaproponował mu większe korzyści",
      "Francja oddała mu Gdańsk",
      "Wielka Brytania nie miała żadnych samolotów",
      "Polska zgodziła się na niemieckie żądania",
      "Niemcy obiecały natychmiastową pomoc Polsce",
      "Stalin obawiał się polskiej ofensywy na Berlin"
    ],
    "answer": 0,
    "explanation": "Stalin wybrał Hitlera, ponieważ niemiecka oferta dawała mu większe korzyści terytorialne i polityczne."
  },
  {
    "id": "R01_POL_09",
    "section": "Międzynarodowe położenie Polski",
    "type": "true_false",
    "prompt": "Polscy politycy i generałowie brali poważnie pod uwagę możliwość wspólnego ataku Niemiec i ZSRR.",
    "options": null,
    "answer": false,
    "explanation": "Nie brali pod uwagę połączonego ataku Niemiec i ZSRR, a wielu z nich przeceniało siłę polskiej armii."
  },
  {
    "id": "R01_POL_10",
    "section": "Międzynarodowe położenie Polski",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do Niemiec lub Polski.",
    "options": null,
    "items": [
      "przewaga liczby żołnierzy i siły ognia",
      "współdziałanie Stalina",
      "wiara we wsparcie sojuszników",
      "przecenianie siły własnej armii"
    ],
    "categories": [
      "Niemcy",
      "Polska"
    ],
    "answer": {
      "Niemcy": [
        "przewaga liczby żołnierzy i siły ognia",
        "współdziałanie Stalina"
      ],
      "Polska": [
        "wiara we wsparcie sojuszników",
        "przecenianie siły własnej armii"
      ]
    },
    "explanation": "Niemcy miały przewagę militarną i porozumienie ze Stalinem. Polska opierała decyzje na zaufaniu do sojuszników, a część dowódców przeceniała własne siły."
  },
  {
    "id": "R01_POL_11",
    "section": "Międzynarodowe położenie Polski",
    "type": "single_choice",
    "prompt": "Gdzie żołnierze Legionu Condor zdobywali doświadczenie i testowali nowe samoloty oraz czołgi?",
    "options": [
      "podczas wojny domowej w Hiszpanii",
      "podczas ćwiczeń Armii Czerwonej w 1938 r.",
      "podczas uroczystości w Berlinie w czerwcu 1939 r.",
      "podczas niemieckiego ataku na Polskę",
      "przy granicy Francji z Niemcami",
      "w Prusach Wschodnich"
    ],
    "answer": 0,
    "explanation": "Legion Condor wspierał generała Franco w wojnie domowej w Hiszpanii i testował tam nowe samoloty oraz czołgi.",
    "image": "r01_legion_condor_berlin.jpg"
  },
  {
    "id": "R01_POL_12",
    "section": "Międzynarodowe położenie Polski",
    "type": "sequence",
    "prompt": "Ułóż kolejne etapy planu Stalina dotyczącego przebiegu wojny.",
    "options": null,
    "items": [
      "Obie walczące strony wykrwawiają się",
      "Stalin wybiera przymierze z Hitlerem",
      "Niemcy atakują Francję i Wielką Brytanię",
      "Stalin chce zadecydować o losach Europy",
      "Niemcy odnoszą zwycięstwo nad Polską"
    ],
    "answer": [
      "Stalin wybiera przymierze z Hitlerem",
      "Niemcy odnoszą zwycięstwo nad Polską",
      "Niemcy atakują Francję i Wielką Brytanię",
      "Obie walczące strony wykrwawiają się",
      "Stalin chce zadecydować o losach Europy"
    ],
    "explanation": "Stalin zakładał, że po pokonaniu Polski Niemcy uderzą na Zachód, obie strony osłabną, a wtedy ZSRR będzie mógł decydować o losach Europy."
  },
  {
    "id": "R01_WYB_01",
    "section": "Wybuch II wojny światowej",
    "type": "single_choice",
    "prompt": "Kiedy Niemcy zaatakowały Polskę, rozpoczynając II wojnę światową?",
    "options": [
      "23 sierpnia 1939 r.",
      "25 sierpnia 1939 r.",
      "31 sierpnia 1939 r.",
      "1 września 1939 r.",
      "3 września 1939 r.",
      "5 września 1939 r."
    ],
    "answer": 3,
    "explanation": "Niemcy zaatakowały Polskę o świcie 1 września 1939 r."
  },
  {
    "id": "R01_WYB_02",
    "section": "Wybuch II wojny światowej",
    "type": "multi_select",
    "prompt": "Zaznacz elementy niemieckiego ataku na Polskę 1 września 1939 r.",
    "options": [
      "Wehrmacht wkroczył z trzech stron",
      "Luftwaffe bombardowała obiekty wojskowe",
      "Bombardowano także miasta i wsie",
      "Atak poprzedziło formalne wypowiedzenie wojny",
      "Naloty miały również siać panikę"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Niemcy uderzyły bez wypowiedzenia wojny. Wojska lądowe weszły z trzech stron, a Luftwaffe atakowała cele wojskowe oraz miejscowości cywilne, aby siać panikę.",
    "image": "r01_nalot_na_warszawe.jpg"
  },
  {
    "id": "R01_WYB_03",
    "section": "Wybuch II wojny światowej",
    "type": "true_false",
    "prompt": "Niemcy przed atakiem 1 września 1939 r. formalnie wypowiedziały Polsce wojnę.",
    "options": null,
    "answer": false,
    "explanation": "Atak nastąpił bez wypowiedzenia wojny."
  },
  {
    "id": "R01_WYB_04",
    "section": "Wybuch II wojny światowej",
    "type": "fill_in",
    "prompt": "Jednym z pierwszych zbombardowanych miast był __________, gdzie zginęło około __________ osób.",
    "options": null,
    "answer": [
      "Wieluń",
      "1200"
    ],
    "explanation": "Wieluń, miasto liczące około 15 tysięcy mieszkańców, znalazł się wśród pierwszych celów; zginęło tam około 1200 osób."
  },
  {
    "id": "R01_WYB_05",
    "section": "Wybuch II wojny światowej",
    "type": "single_choice",
    "prompt": "Które z wymienionych miast było celem niemieckich bombardowań 1 września 1939 r.?",
    "options": [
      "Warszawa",
      "Berlin",
      "Paryż",
      "Londyn",
      "Moskwa",
      "Madryt"
    ],
    "answer": 0,
    "explanation": "Bomby spadły między innymi na Warszawę, Kraków i Gdynię."
  },
  {
    "id": "R01_WYB_06",
    "section": "Wybuch II wojny światowej",
    "type": "riddle",
    "prompt": "Nazwa niemieckiego lotnictwa wojskowego, które rozpoczęło naloty na Polskę, to...",
    "options": null,
    "answer": "Luftwaffe",
    "altAnswers": [
      "Luftwaffe"
    ],
    "explanation": "Luftwaffe atakowała obiekty wojskowe, miasta i wsie."
  },
  {
    "id": "R01_WYB_07",
    "section": "Wybuch II wojny światowej",
    "type": "scenario",
    "prompt": "Niemieckie samoloty bombardują nie tylko obiekty wojskowe, ale także miasta i wsie. Jaki dodatkowy cel miały takie naloty?",
    "options": [
      "Zasianie paniki",
      "Przerwanie rozmów polsko-francuskich",
      "Zdobycie Gdańska bez walki",
      "Ewakuacja ludności do Niemiec",
      "Wzmocnienie polskiej mobilizacji",
      "Ochrona polskich dróg"
    ],
    "answer": 0,
    "explanation": "Naloty na miejscowości cywilne miały między innymi zastraszyć ludność i wywołać panikę."
  },
  {
    "id": "R01_WYB_08",
    "section": "Wybuch II wojny światowej",
    "type": "match",
    "prompt": "Połącz osobę lub formację z właściwym działaniem.",
    "options": null,
    "left": [
      "Wehrmacht",
      "Luftwaffe",
      "Józef Beck",
      "Ignacy Mościcki"
    ],
    "right": [
      "wkroczenie do Polski z trzech stron",
      "naloty na obiekty wojskowe oraz miasta i wsie",
      "odrzucenie żądań Hitlera w przemówieniu sejmowym",
      "orędzie do obywateli po rozpoczęciu agresji"
    ],
    "answer": {
      "Wehrmacht": "wkroczenie do Polski z trzech stron",
      "Luftwaffe": "naloty na obiekty wojskowe oraz miasta i wsie",
      "Józef Beck": "odrzucenie żądań Hitlera w przemówieniu sejmowym",
      "Ignacy Mościcki": "orędzie do obywateli po rozpoczęciu agresji"
    },
    "explanation": "Wehrmacht prowadził natarcie lądowe, Luftwaffe naloty, Beck odrzucił niemieckie żądania, a prezydent Mościcki zwrócił się do obywateli po rozpoczęciu wojny."
  },
  {
    "id": "R01_WYB_09",
    "section": "Wybuch II wojny światowej",
    "type": "odd_one_out",
    "prompt": "Wskaż miasto niepasujące do pozostałych jako wymieniony cel niemieckich bombardowań w Polsce: Warszawa, Kraków, Gdynia, Berlin.",
    "options": null,
    "answer": "Berlin",
    "explanation": "Warszawa, Kraków i Gdynia zostały wymienione jako bombardowane miasta w Polsce. Berlin pojawia się w innym kontekście."
  },
  {
    "id": "R01_WYB_10",
    "section": "Wybuch II wojny światowej",
    "type": "true_false",
    "prompt": "Powszechną mobilizację w Polsce ogłoszono dopiero 31 sierpnia 1939 r.",
    "options": null,
    "answer": true,
    "explanation": "Mobilizację wcześniej odkładano pod naciskiem zachodnich sojuszników, którzy liczyli na uratowanie pokoju."
  },
  {
    "id": "R01_WYB_11",
    "section": "Wybuch II wojny światowej",
    "type": "multi_select",
    "prompt": "Zaznacz słabości polskiej armii i organizacji mobilizacji we wrześniu 1939 r.",
    "options": [
      "Brak pieniędzy na nowoczesne lotnictwo i broń pancerną",
      "Niedostatek dział i moździerzy",
      "Późna powszechna mobilizacja",
      "Zawodzące systemy łączności i organizacja",
      "Brak woli walki",
      "Brak gotowości do poświęceń"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Polska miała braki w nowoczesnym uzbrojeniu, mobilizację ogłoszono bardzo późno, a w chaosie zawodziły łączność i organizacja. Woli walki i gotowości do poświęceń Polakom nie brakowało.",
    "image": "r01_nalot_na_warszawe.jpg"
  },
  {
    "id": "R01_WYB_12",
    "section": "Wybuch II wojny światowej",
    "type": "single_choice",
    "prompt": "Ile polskich bombowców Łoś mogło mierzyć się z samolotami Luftwaffe?",
    "options": [
      "12",
      "24",
      "36",
      "120",
      "300",
      "400"
    ],
    "answer": 2,
    "explanation": "Z samolotami Luftwaffe mogło się mierzyć zaledwie 36 polskich bombowców Łoś.",
    "image": "r01_bombowiec_los.jpg"
  },
  {
    "id": "R01_SIL_01",
    "section": "Siły Polski i Niemiec",
    "type": "single_choice",
    "prompt": "Ilu żołnierzy miała Polska w zestawieniu sił z września 1939 r.?",
    "options": [
      "300 000",
      "400 000",
      "600 000",
      "1 000 000",
      "1 300 000",
      "1 600 000"
    ],
    "answer": 3,
    "explanation": "Infografika podaje orientacyjnie 1 000 000 żołnierzy po stronie polskiej."
  },
  {
    "id": "R01_SIL_02",
    "section": "Siły Polski i Niemiec",
    "type": "single_choice",
    "prompt": "Ilu żołnierzy miała Trzecia Rzesza w zestawieniu sił z września 1939 r.?",
    "options": [
      "400 000",
      "600 000",
      "1 000 000",
      "1 300 000",
      "1 600 000",
      "2 700 000"
    ],
    "answer": 4,
    "explanation": "Infografika podaje orientacyjnie 1 600 000 żołnierzy po stronie niemieckiej.",
    "image": "r01_wehremacht_czolgi.jpg"
  },
  {
    "id": "R01_SIL_03",
    "section": "Siły Polski i Niemiec",
    "type": "match",
    "prompt": "Połącz polską kategorię sił z orientacyjną liczbą z września 1939 r.",
    "options": null,
    "left": [
      "samoloty",
      "działa i moździerze",
      "żołnierze",
      "czołgi"
    ],
    "right": [
      "400",
      "4300",
      "1 000 000",
      "300"
    ],
    "answer": {
      "samoloty": "400",
      "działa i moździerze": "4300",
      "żołnierze": "1 000 000",
      "czołgi": "300"
    },
    "explanation": "Polska miała orientacyjnie 400 samolotów, 4300 dział i moździerzy, milion żołnierzy oraz 300 czołgów.",
    "image": "r01_polska_piechota_dzialko.jpg"
  },
  {
    "id": "R01_SIL_04",
    "section": "Siły Polski i Niemiec",
    "type": "match",
    "prompt": "Połącz niemiecką kategorię sił z orientacyjną liczbą z września 1939 r.",
    "options": null,
    "left": [
      "samoloty",
      "działa i moździerze",
      "żołnierze",
      "czołgi"
    ],
    "right": [
      "1300",
      "10 000",
      "1 600 000",
      "2700"
    ],
    "answer": {
      "samoloty": "1300",
      "działa i moździerze": "10 000",
      "żołnierze": "1 600 000",
      "czołgi": "2700"
    },
    "explanation": "Trzecia Rzesza miała orientacyjnie 1300 samolotów, 10 000 dział i moździerzy, 1,6 mln żołnierzy oraz 2700 czołgów.",
    "image": "r01_dornier_do17.jpg"
  },
  {
    "id": "R01_SIL_05",
    "section": "Siły Polski i Niemiec",
    "type": "true_false",
    "prompt": "Trzecia Rzesza miała w tym zestawieniu ponad trzy razy więcej samolotów niż Polska.",
    "options": null,
    "answer": true,
    "explanation": "Niemcy miały około 1300 samolotów, a Polska około 400, czyli ponad trzykrotnie mniej."
  },
  {
    "id": "R01_SIL_06",
    "section": "Siły Polski i Niemiec",
    "type": "fill_in",
    "prompt": "Polska miała około __________ czołgów, a Trzecia Rzesza około __________ czołgów.",
    "options": null,
    "answer": [
      "300",
      "2700"
    ],
    "explanation": "W zestawieniu Polska miała około 300 czołgów, a Niemcy około 2700."
  },
  {
    "id": "R01_SIL_07",
    "section": "Siły Polski i Niemiec",
    "type": "scenario",
    "prompt": "Dowódca porównuje siły pancerne: około 300 polskich czołgów i około 2700 niemieckich. Który wniosek jest zgodny z tym zestawieniem?",
    "options": [
      "Niemcy miały znacznie więcej czołgów",
      "Polska miała więcej czołgów",
      "Obie strony miały tyle samo czołgów",
      "Polska nie miała żadnych czołgów",
      "Niemcy nie miały czołgów",
      "Zestawienie nie podaje liczby czołgów"
    ],
    "answer": 0,
    "explanation": "Zestawienie podaje około 300 czołgów po stronie polskiej i około 2700 po stronie niemieckiej, więc przewaga liczebna należała do Niemiec.",
    "image": "r01_wehremacht_czolgi.jpg"
  },
  {
    "id": "R01_SIL_08",
    "section": "Siły Polski i Niemiec",
    "type": "multi_select",
    "prompt": "Zaznacz atuty Wehrmachtu w porównaniu z armią polską, poza samą liczebnością.",
    "options": [
      "nowocześniejsze uzbrojenie",
      "sprawne dowodzenie",
      "ruchliwość wojsk",
      "współdziałanie różnych typów broni",
      "brak lotnictwa",
      "mniejsza siła ognia"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Wehrmacht górował nowoczesnością uzbrojenia, sprawnością dowodzenia, ruchliwością i współdziałaniem różnych rodzajów broni."
  },
  {
    "id": "R01_SIL_09",
    "section": "Siły Polski i Niemiec",
    "type": "riddle",
    "prompt": "Polski bombowiec pokazany w zestawieniu sił nosił oznaczenie PZL-37 i nazwę...",
    "options": null,
    "answer": "Łoś",
    "altAnswers": [
      "Łoś",
      "Los",
      "PZL-37 Łoś",
      "PZL-37 Los"
    ],
    "explanation": "PZL-37 Łoś był polskim bombowcem, jednak w wojnie obronnej jego przydatność oceniono jako niewielką.",
    "image": "r01_bombowiec_los.jpg"
  },
  {
    "id": "R01_SIL_10",
    "section": "Siły Polski i Niemiec",
    "type": "odd_one_out",
    "prompt": "Wskaż liczbę niepasującą do polskiego zestawienia sił: 400 samolotów, 4300 dział i moździerzy, 300 czołgów, 2700 czołgów.",
    "options": null,
    "answer": "2700 czołgów",
    "explanation": "2700 czołgów to orientacyjna liczba po stronie Trzeciej Rzeszy. Polska miała około 300 czołgów."
  },
  {
    "id": "R01_SIL_11",
    "section": "Siły Polski i Niemiec",
    "type": "sort",
    "prompt": "Przyporządkuj liczby do armii polskiej lub niemieckiej.",
    "options": null,
    "items": [
      "400 samolotów",
      "1300 samolotów",
      "4300 dział i moździerzy",
      "10 000 dział i moździerzy",
      "300 czołgów",
      "2700 czołgów"
    ],
    "categories": [
      "Polska",
      "Trzecia Rzesza"
    ],
    "answer": {
      "Polska": [
        "400 samolotów",
        "4300 dział i moździerzy",
        "300 czołgów"
      ],
      "Trzecia Rzesza": [
        "1300 samolotów",
        "10 000 dział i moździerzy",
        "2700 czołgów"
      ]
    },
    "explanation": "Polska miała 400 samolotów, 4300 dział i moździerzy oraz 300 czołgów. Niemcy odpowiednio 1300, 10 000 i 2700."
  },
  {
    "id": "R01_SIL_12",
    "section": "Siły Polski i Niemiec",
    "type": "true_false",
    "prompt": "Polska miała w zestawieniu więcej dział i moździerzy niż Trzecia Rzesza.",
    "options": null,
    "answer": false,
    "explanation": "Polska miała około 4300 dział i moździerzy, a Trzecia Rzesza około 10 000."
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Pakt Ribbentrop-Mołotow podpisano __________, a niemiecki atak na Polskę nastąpił __________.",
    "options": null,
    "answer": [
      "23 sierpnia 1939",
      "1 września 1939"
    ],
    "explanation": "Między podpisaniem paktu 23 sierpnia a atakiem 1 września 1939 r. minęło zaledwie kilka dni."
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Kiedy Józef Beck wygłosił w sejmie przemówienie odrzucające żądania Hitlera?",
    "options": [
      "31 marca 1939 r.",
      "5 maja 1939 r.",
      "22 sierpnia 1939 r.",
      "23 sierpnia 1939 r.",
      "25 sierpnia 1939 r.",
      "31 sierpnia 1939 r."
    ],
    "answer": 1,
    "explanation": "Przemówienie Józefa Becka odbyło się 5 maja 1939 r.",
    "image": "r01_beck_przemowienie.jpg"
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Niemieckie słowo użyte jako nazwa odznaki SS i oznaczające 'trupią czaszkę' to...",
    "options": null,
    "answer": "Totenkopf",
    "altAnswers": [
      "Totenkopf"
    ],
    "explanation": "Totenkopf oznacza po niemiecku 'trupią czaszkę' i był nazwą odznaki noszonej przez żołnierzy SS."
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Podczas wielkiej czystki w latach 1934-1938 rozstrzelano 90% generałów Armii Czerwonej.",
    "options": null,
    "answer": true,
    "explanation": "Siła Armii Czerwonej wynikała z liczby ludzi i sprzętu, a dowodzenie osłabiły czystki, w których rozstrzelano 90% generałów.",
    "image": "r01_armia_czerwona_cwiczenia.jpg"
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Wielka czystka, w której rozstrzelano większość generałów Armii Czerwonej, trwała w latach __________-__________.",
    "options": null,
    "answer": [
      "1934",
      "1938"
    ],
    "explanation": "Wielka czystka w Armii Czerwonej trwała w latach 1934-1938."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz datę z wydarzeniem z 1939 r.",
    "options": null,
    "left": [
      "31 marca",
      "5 maja",
      "23 sierpnia",
      "25 sierpnia",
      "31 sierpnia"
    ],
    "right": [
      "brytyjskie gwarancje dla Polski",
      "przemówienie Józefa Becka",
      "pakt Ribbentrop-Mołotow",
      "układ polsko-brytyjski o pomocy wojskowej",
      "ogłoszenie powszechnej mobilizacji"
    ],
    "answer": {
      "31 marca": "brytyjskie gwarancje dla Polski",
      "5 maja": "przemówienie Józefa Becka",
      "23 sierpnia": "pakt Ribbentrop-Mołotow",
      "25 sierpnia": "układ polsko-brytyjski o pomocy wojskowej",
      "31 sierpnia": "ogłoszenie powszechnej mobilizacji"
    },
    "explanation": "Te daty pokazują, jak szybko wiosenna dyplomacja przeszła w sierpniowy kryzys i mobilizację tuż przed wojną."
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż pięć wydarzeń z 1939 r. w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Układ polsko-brytyjski o pomocy wojskowej",
      "Przemówienie Józefa Becka",
      "Pakt Ribbentrop-Mołotow",
      "Brytyjskie gwarancje dla Polski",
      "Powszechna mobilizacja w Polsce"
    ],
    "answer": [
      "Brytyjskie gwarancje dla Polski",
      "Przemówienie Józefa Becka",
      "Pakt Ribbentrop-Mołotow",
      "Układ polsko-brytyjski o pomocy wojskowej",
      "Powszechna mobilizacja w Polsce"
    ],
    "explanation": "Kolejność dat to 31 marca, 5 maja, 23 sierpnia, 25 sierpnia i 31 sierpnia 1939 r."
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "22 sierpnia 1939 r. Hitler mówi dowódcom, że celem ma być nie dojście do określonej linii, lecz zniszczenie polskiej 'żywej siły'. Jakiego charakteru wojny domaga się w tym przemówieniu?",
    "options": [
      "wojny wyniszczenia",
      "wojny wyłącznie obronnej",
      "wojny ograniczonej do granicy",
      "wojny prowadzonej bez ofiar cywilnych",
      "wojny morskiej",
      "wojny propagandowej bez walk"
    ],
    "answer": 0,
    "explanation": "Hitler wprost określił planowaną wojnę jako wojnę wyniszczenia i żądał brutalnego postępowania."
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz elementy, które pojawiają się w przemówieniu Hitlera do dowódców z 22 sierpnia 1939 r.",
    "options": [
      "zniszczenie Polski jako pierwsze zadanie",
      "zniszczenie żywej siły",
      "wojna wyniszczenia",
      "bezwzględność wobec ludności polskiej",
      "ograniczenie działań do zdobycia jednej linii",
      "rezygnacja z przemocy wobec cywilów"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Przemówienie zapowiadało zniszczenie Polski, wyniszczenie jej sił i skrajną brutalność, a nie ograniczoną kampanię do wyznaczonej linii."
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile lat wcześniej Polska odzyskała niepodległość, której broniła we wrześniu 1939 r.?",
    "options": [
      "18",
      "19",
      "20",
      "21",
      "22",
      "25"
    ],
    "answer": 3,
    "explanation": "W 1939 r. Polacy bronili niepodległości odzyskanej 21 lat wcześniej."
  },
  {
    "id": "R01_HARD_11",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Naczelny wódz pokazany na polskim plakacie propagandowym z 1939 r. to marszałek...",
    "options": null,
    "answer": "Edward Rydz-Śmigły",
    "altAnswers": [
      "Edward Rydz-Śmigły",
      "Edward Rydz-Smigly",
      "Rydz-Śmigły",
      "Rydz-Smigly"
    ],
    "explanation": "Na plakacie pokazano naczelnego wodza, marszałka Edwarda Rydza-Śmigłego.",
    "image": "r01_rydz_smigly_plakat.jpg"
  },
  {
    "id": "R01_HARD_12",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż liczbę niepasującą do danych o siłach Francji przy granicy z Niemcami: 85 dywizji, prawie 3000 czołgów, około 600 samolotów, 33 dywizje francuskie.",
    "options": null,
    "answer": "33 dywizje francuskie",
    "explanation": "Francja miała 85 dywizji, prawie 3000 czołgów i około 600 samolotów. Liczba 33 dotyczyła dywizji Wehrmachtu, a nie francuskich."
  },
  {
    "id": "R01_HARD_13",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do państwa, z którym są związane.",
    "options": null,
    "items": [
      "Luftwaffe",
      "Wehrmacht",
      "Armia Czerwona",
      "PZL-37 Łoś",
      "85 dywizji przy granicy z Niemcami",
      "Józef Stalin"
    ],
    "categories": [
      "Niemcy",
      "ZSRR",
      "Polska",
      "Francja"
    ],
    "answer": {
      "Niemcy": [
        "Luftwaffe",
        "Wehrmacht"
      ],
      "ZSRR": [
        "Armia Czerwona",
        "Józef Stalin"
      ],
      "Polska": [
        "PZL-37 Łoś"
      ],
      "Francja": [
        "85 dywizji przy granicy z Niemcami"
      ]
    },
    "explanation": "Luftwaffe i Wehrmacht były niemieckie, Armia Czerwona i Stalin należeli do ZSRR, PZL-37 Łoś był polski, a 85 dywizji dotyczyło Francji."
  },
  {
    "id": "R01_HARD_14",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Polscy politycy wiedzą, że przyjęcie żądań Hitlera może zmienić pozycję kraju. Jaką konsekwencję dla pozycji Polski mogło mieć takie ustępstwo?",
    "options": [
      "Uzależnienie Polski od Niemiec",
      "Natychmiastowe wejście Polski do wojny po stronie ZSRR",
      "Przekazanie Litwy Polsce",
      "Wycofanie Wehrmachtu z Prus Wschodnich",
      "Rozpad Francji",
      "Przyłączenie Gdańska do Polski"
    ],
    "answer": 0,
    "explanation": "Zgoda na niemieckie żądania uczyniłaby Polskę państwem zależnym od Niemiec."
  },
  {
    "id": "R01_HARD_15",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Przerzucenie brytyjskich sił lądowych do Francji wymagało wiele czasu.",
    "options": null,
    "answer": true,
    "explanation": "Wielka Brytania nie była gotowa do wojny, a transport jej wojsk lądowych do Francji był czasochłonny."
  },
  {
    "id": "R01_HARD_16",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Wieluń liczył około __________ mieszkańców, a w bombardowaniu zginęło około __________ osób.",
    "options": null,
    "answer": [
      "15 tysięcy",
      "1200"
    ],
    "explanation": "Wieluń miał około 15 tysięcy mieszkańców; w bombardowaniu zginęło około 1200 osób."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r01",
  number: 1,
  title: "Wybuch II wojny światowej",
  icon: "💥",
  sectionOrder: [
    "Rok sojuszy",
    "Międzynarodowe położenie Polski",
    "Wybuch II wojny światowej",
    "Siły Polski i Niemiec"
  ],
  sectionIcons: {
    "Rok sojuszy": "🤝",
    "Międzynarodowe położenie Polski": "🌍",
    "Wybuch II wojny światowej": "💥",
    "Siły Polski i Niemiec": "⚔️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
