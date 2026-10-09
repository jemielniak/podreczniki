// Skróty sekcji (do identyfikatorów ćwiczeń):
//   BARS = Konfederacja barska i I rozbiór Polski
//   SEJM = Sejm Wielki i Konstytucja 3 maja
//   UPAD = Targowica, insurekcja i upadek Rzeczypospolitej
//   REWO = Wielka Rewolucja Francuska
//   NAPO = Napoleon i jego reformy
//   POLS = Legiony Polskie i Księstwo Warszawskie
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R05_BARS_01",
    "section": "Konfederacja barska i I rozbiór Polski",
    "type": "single_choice",
    "prompt": "W którym roku nastąpił I rozbiór Polski?",
    "options": [
      "1764",
      "1768",
      "1772",
      "1773",
      "1788",
      "1793"
    ],
    "image": "r05_mapa_pierwszy_rozbior.jpg",
    "answer": 2,
    "explanation": "I rozbiór przeprowadziły w 1772 r. Rosja, Prusy i Austria."
  },
  {
    "id": "R05_BARS_02",
    "section": "Konfederacja barska i I rozbiór Polski",
    "type": "multi_select",
    "prompt": "Które państwa dokonały I rozbioru Polski?",
    "options": [
      "Rosja",
      "Prusy",
      "Austria",
      "Francja",
      "Wielka Brytania",
      "Turcja"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "W pierwszym rozbiorze Rzeczypospolitej wzięły udział Rosja, Prusy i Austria."
  },
  {
    "id": "R05_BARS_03",
    "section": "Konfederacja barska i I rozbiór Polski",
    "type": "true_false",
    "prompt": "Konfederacja barska była wymierzona przeciw ingerencji Rosji w sprawy Rzeczypospolitej.",
    "options": null,
    "image": "r05_konfederaci_barscy.jpg",
    "answer": true,
    "explanation": "Konfederaci wystąpili przeciw Rosji i królowi Stanisławowi Augustowi Poniatowskiemu, broniąc wiary katolickiej i niezależności państwa."
  },
  {
    "id": "R05_BARS_04",
    "section": "Konfederacja barska i I rozbiór Polski",
    "type": "fill_in",
    "prompt": "Konfederacja barska rozpoczęła się w roku __________, a I rozbiór Polski nastąpił w roku __________.",
    "options": null,
    "altAnswers": [
      [
        "1768",
        "1768 r."
      ],
      [
        "1772",
        "1772 r."
      ]
    ],
    "answer": [
      "1768",
      "1772"
    ],
    "explanation": "Konfederacja barska trwała od 1768 do 1772 r., a I rozbiór nastąpił w 1772 r."
  },
  {
    "id": "R05_BARS_05",
    "section": "Konfederacja barska i I rozbiór Polski",
    "type": "riddle",
    "prompt": "Jak nazywał się poseł, którego protest na sejmie rozbiorowym w 1773 r. stał się symbolem patriotyzmu?",
    "options": null,
    "altAnswers": [
      "Tadeusz Rejtan",
      "Rejtan"
    ],
    "image": "r05_rejtan_protest.jpg",
    "answer": "Tadeusz Rejtan",
    "explanation": "Tadeusz Rejtan protestował przeciw zatwierdzeniu rozbioru na sejmie w Warszawie."
  },
  {
    "id": "R05_BARS_06",
    "section": "Konfederacja barska i I rozbiór Polski",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo niebiorące udziału w I rozbiorze: Rosja, Prusy, Austria, Francja.",
    "options": null,
    "answer": "Francja",
    "explanation": "W 1772 r. ziemie Rzeczypospolitej zajęły Rosja, Prusy i Austria."
  },
  {
    "id": "R05_BARS_07",
    "section": "Konfederacja barska i I rozbiór Polski",
    "type": "scenario",
    "prompt": "Jesteś szlachcicem w 1768 r. Dołączasz do zbrojnego związku zawiązanego w Barze na Podolu, aby bronić wiary katolickiej i sprzeciwić się wpływom Rosji. Do jakiego ruchu przystępujesz?",
    "options": [
      "Konfederacja barska",
      "Konfederacja targowicka",
      "Insurekcja kościuszkowska",
      "Stronnictwo hetmańskie",
      "Jakobini",
      "Dyrektoriat"
    ],
    "image": "r05_konfederaci_barscy.jpg",
    "answer": 0,
    "explanation": "Konfederacja barska powstała w Barze na Podolu w 1768 r. i prowadziła walkę zbrojną przeciw Rosji."
  },
  {
    "id": "R05_BARS_08",
    "section": "Konfederacja barska i I rozbiór Polski",
    "type": "match",
    "prompt": "Połącz państwo z ziemiami zajętymi podczas I rozbioru Polski.",
    "options": null,
    "left": [
      "Austria",
      "Prusy",
      "Rosja"
    ],
    "right": [
      "Ziemie na wschód od Dźwiny i Dniepru",
      "Pomorze Gdańskie bez Gdańska i Torunia",
      "Południowa część ziem polskich z Rusią"
    ],
    "image": "r05_mapa_pierwszy_rozbior.jpg",
    "answer": {
      "Austria": "Południowa część ziem polskich z Rusią",
      "Prusy": "Pomorze Gdańskie bez Gdańska i Torunia",
      "Rosja": "Ziemie na wschód od Dźwiny i Dniepru"
    },
    "explanation": "Austria zajęła ziemie południowe, Prusy część Pomorza i Kujaw, a Rosja rozległe tereny wschodnie."
  },
  {
    "id": "R05_BARS_09",
    "section": "Konfederacja barska i I rozbiór Polski",
    "type": "sort",
    "prompt": "Podziel przyczyny osłabienia Rzeczypospolitej na wewnętrzne i zewnętrzne.",
    "options": null,
    "items": [
      "Ingerencja sąsiednich mocarstw",
      "Liberum veto",
      "Wzrost potęgi Rosji i Prus",
      "Wolna elekcja",
      "Brak sojuszników",
      "Wojny domowe"
    ],
    "categories": [
      "wewnętrzne",
      "zewnętrzne"
    ],
    "answer": {
      "wewnętrzne": [
        "Liberum veto",
        "Wolna elekcja",
        "Wojny domowe"
      ],
      "zewnętrzne": [
        "Ingerencja sąsiednich mocarstw",
        "Wzrost potęgi Rosji i Prus",
        "Brak sojuszników"
      ]
    },
    "explanation": "Wadliwy ustrój i konflikty wewnętrzne osłabiały państwo, a ingerencja silnych sąsiadów i brak sojuszników pogłębiały kryzys."
  },
  {
    "id": "R05_BARS_10",
    "section": "Konfederacja barska i I rozbiór Polski",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Sejm rozbiorowy w Warszawie",
      "Rozpoczęcie Sejmu Wielkiego",
      "Zawiązanie konfederacji barskiej",
      "I rozbiór Polski"
    ],
    "answer": [
      "Zawiązanie konfederacji barskiej",
      "I rozbiór Polski",
      "Sejm rozbiorowy w Warszawie",
      "Rozpoczęcie Sejmu Wielkiego"
    ],
    "explanation": "Daty kolejnych wydarzeń to 1768, 1772, 1773 i 1788 r."
  },
  {
    "id": "R05_SEJM_01",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "single_choice",
    "prompt": "W jakich latach obradował Sejm Wielki (Czteroletni)?",
    "options": [
      "1768-1772",
      "1773-1775",
      "1788-1792",
      "1789-1799",
      "1792-1794",
      "1807-1813"
    ],
    "image": "r05_sejm_wielki_wnetrze.jpg",
    "answer": 2,
    "explanation": "Sejm Wielki obradował w Warszawie od 1788 do 1792 r."
  },
  {
    "id": "R05_SEJM_02",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "multi_select",
    "prompt": "Jakie zmiany wprowadziła Konstytucja 3 maja?",
    "options": [
      "Zniesienie liberum veto",
      "Dziedziczność tronu",
      "Trójpodział władzy",
      "Przywrócenie wolnej elekcji",
      "Utrzymanie liberum veto",
      "Likwidacja monarchy"
    ],
    "image": "r05_konstytucja_3_maja_obraz.jpg",
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Konstytucja zniosła liberum veto i wolną elekcję, ustanowiła tron dziedziczny oraz trójpodział władzy."
  },
  {
    "id": "R05_SEJM_03",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "true_false",
    "prompt": "Sejm Wielki planował armię stutysięczną, lecz zdołano zebrać około 65 tysięcy żołnierzy.",
    "options": null,
    "answer": true,
    "explanation": "Uchwalono podniesienie liczebności wojska do 100 tys., jednak zebrano około 65 tys. żołnierzy."
  },
  {
    "id": "R05_SEJM_04",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "fill_in",
    "prompt": "Konstytucja została uchwalona __________ maja __________ roku.",
    "options": null,
    "altAnswers": [
      [
        "3",
        "trzeciego"
      ],
      [
        "1791",
        "1791 r."
      ]
    ],
    "image": "r05_konstytucja_3_maja_obraz.jpg",
    "answer": [
      "3",
      "1791"
    ],
    "explanation": "Ustawa Rządowa, zwana Konstytucją 3 maja, została uchwalona 3 maja 1791 r."
  },
  {
    "id": "R05_SEJM_05",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "riddle",
    "prompt": "Jak nazywał się marszałek Sejmu Wielkiego?",
    "options": null,
    "altAnswers": [
      "Stanisław Małachowski",
      "Małachowski"
    ],
    "answer": "Stanisław Małachowski",
    "explanation": "Marszałkiem Sejmu Wielkiego, obradującego w Warszawie, był Stanisław Małachowski."
  },
  {
    "id": "R05_SEJM_06",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "odd_one_out",
    "prompt": "Wskaż grupę nienależącą do trzech stronnictw Sejmu Wielkiego: królewskie, patriotyczne, hetmańskie, jakobini.",
    "options": null,
    "answer": "jakobini",
    "explanation": "Na Sejmie Wielkim działały stronnictwa królewskie, patriotyczne i hetmańskie; jakobini byli ugrupowaniem rewolucji francuskiej."
  },
  {
    "id": "R05_SEJM_07",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "scenario",
    "prompt": "W 1789 r. przedstawiciele miast królewskich maszerują ulicami Warszawy, domagając się większych praw dla mieszczan. Na ich czele stoi prezydent Warszawy. Kto nim jest?",
    "options": [
      "Jan Dekert",
      "Hugo Kołłątaj",
      "Ignacy Potocki",
      "Stanisław Małachowski",
      "Seweryn Rzewuski",
      "Adam Poniński"
    ],
    "image": "r05_czarna_procesja.jpg",
    "answer": 0,
    "explanation": "Czarną procesją w 1789 r. kierował Jan Dekert, prezydent Warszawy."
  },
  {
    "id": "R05_SEJM_08",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "match",
    "prompt": "Połącz rodzaj władzy z instytucją przewidzianą w Konstytucji 3 maja.",
    "options": null,
    "left": [
      "ustawodawcza",
      "wykonawcza",
      "sądownicza"
    ],
    "right": [
      "Niezawisłe sądy",
      "Król i Straż Praw",
      "Dwuizbowy Sejm"
    ],
    "answer": {
      "ustawodawcza": "Dwuizbowy Sejm",
      "wykonawcza": "Król i Straż Praw",
      "sądownicza": "Niezawisłe sądy"
    },
    "explanation": "Konstytucja wprowadziła trójpodział władzy: Sejm, króla ze Strażą Praw i niezawisłe sądy."
  },
  {
    "id": "R05_SEJM_09",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "sort",
    "prompt": "Przyporządkuj reformy Sejmu Wielkiego do dziedzin.",
    "options": null,
    "items": [
      "Prawo nabywania ziemi przez mieszczan",
      "Plan armii stutysięcznej",
      "Likwidacja Rady Nieustającej",
      "Dopuszczenie mieszczan do urzędów",
      "Pozbawienie gołoty prawa głosu na sejmikach",
      "Włączenie wojsk prywatnych do regularnej armii"
    ],
    "categories": [
      "wojskowe",
      "dotyczące miast",
      "ustrojowe"
    ],
    "answer": {
      "wojskowe": [
        "Plan armii stutysięcznej",
        "Włączenie wojsk prywatnych do regularnej armii"
      ],
      "dotyczące miast": [
        "Prawo nabywania ziemi przez mieszczan",
        "Dopuszczenie mieszczan do urzędów"
      ],
      "ustrojowe": [
        "Likwidacja Rady Nieustającej",
        "Pozbawienie gołoty prawa głosu na sejmikach"
      ]
    },
    "explanation": "Sejm Wielki reformował wojsko, położenie mieszczan oraz ustrój Rzeczypospolitej."
  },
  {
    "id": "R05_SEJM_10",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "sequence",
    "prompt": "Ustaw wydarzenia prowadzące do uchwalenia Konstytucji 3 maja chronologicznie.",
    "options": null,
    "items": [
      "Czarna procesja",
      "Uchwalenie Konstytucji 3 maja",
      "Sejm rozbiorowy",
      "Rozpoczęcie obrad Sejmu Wielkiego"
    ],
    "answer": [
      "Sejm rozbiorowy",
      "Rozpoczęcie obrad Sejmu Wielkiego",
      "Czarna procesja",
      "Uchwalenie Konstytucji 3 maja"
    ],
    "explanation": "Sejm rozbiorowy zebrał się w 1773 r., Wielki rozpoczął obrady w 1788 r., czarna procesja odbyła się w 1789 r., a Konstytucję uchwalono w 1791 r."
  },
  {
    "id": "R05_UPAD_01",
    "section": "Targowica, insurekcja i upadek Rzeczypospolitej",
    "type": "single_choice",
    "prompt": "Które państwa przeprowadziły II rozbiór Polski w 1793 r.?",
    "options": [
      "Rosja i Prusy",
      "Prusy i Austria",
      "Rosja i Austria",
      "Francja i Austria",
      "Rosja i Francja",
      "Prusy i Turcja"
    ],
    "image": "r05_mapa_drugi_rozbior.jpg",
    "answer": 0,
    "explanation": "W II rozbiorze uczestniczyły Rosja i Prusy, bez Austrii."
  },
  {
    "id": "R05_UPAD_02",
    "section": "Targowica, insurekcja i upadek Rzeczypospolitej",
    "type": "multi_select",
    "prompt": "Co należało do przyczyn wybuchu powstania kościuszkowskiego?",
    "options": [
      "II rozbiór Polski",
      "Rządy targowiczan",
      "Rosyjski nakaz ograniczenia polskiego wojska",
      "Utworzenie Księstwa Warszawskiego",
      "Zwycięstwo pod Waterloo",
      "Uchwalenie kodeksu Napoleona"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Powstanie poprzedziły II rozbiór, rządy targowiczan i rosyjski nakaz redukcji wojska."
  },
  {
    "id": "R05_UPAD_03",
    "section": "Targowica, insurekcja i upadek Rzeczypospolitej",
    "type": "true_false",
    "prompt": "Stanisław August Poniatowski przystąpił w 1792 r. do konfederacji targowickiej.",
    "options": null,
    "answer": true,
    "explanation": "Król, nie wierząc w zwycięstwo w wojnie z Rosją, przystąpił do Targowicy."
  },
  {
    "id": "R05_UPAD_04",
    "section": "Targowica, insurekcja i upadek Rzeczypospolitej",
    "type": "fill_in",
    "prompt": "Insurekcja kościuszkowska wybuchła w roku __________, a III rozbiór Polski nastąpił w roku __________.",
    "options": null,
    "altAnswers": [
      [
        "1794",
        "1794 r."
      ],
      [
        "1795",
        "1795 r."
      ]
    ],
    "answer": [
      "1794",
      "1795"
    ],
    "explanation": "Powstanie Tadeusza Kościuszki wybuchło w 1794 r.; po jego klęsce nastąpił trzeci rozbiór w 1795 r."
  },
  {
    "id": "R05_UPAD_05",
    "section": "Targowica, insurekcja i upadek Rzeczypospolitej",
    "type": "riddle",
    "prompt": "Pod jaką miejscowością w 1794 r. kosynierzy zwyciężyli wojska rosyjskie?",
    "options": null,
    "altAnswers": [
      "Racławice",
      "Racławicami"
    ],
    "image": "r05_kosynierzy_raclawice.jpg",
    "answer": "Racławice",
    "explanation": "Zwycięstwo pod Racławicami było jednym z najważniejszych sukcesów powstańców kościuszkowskich."
  },
  {
    "id": "R05_UPAD_06",
    "section": "Targowica, insurekcja i upadek Rzeczypospolitej",
    "type": "odd_one_out",
    "prompt": "Wskaż bitwę z innej epoki niż pozostałe: Zieleńce, Dubienka, Racławice, Waterloo.",
    "options": null,
    "answer": "Waterloo",
    "explanation": "Zieleńce i Dubienka wiążą się z wojną 1792 r., Racławice z powstaniem 1794 r., a Waterloo z upadkiem Napoleona w 1815 r."
  },
  {
    "id": "R05_UPAD_07",
    "section": "Targowica, insurekcja i upadek Rzeczypospolitej",
    "type": "scenario",
    "prompt": "Na krakowskim rynku przywódca składa przysięgę i obejmuje funkcję naczelnika powstania. Wkrótce powstańcy odnoszą zwycięstwo pod Racławicami. Kim jest ten przywódca?",
    "options": [
      "Tadeusz Kościuszko",
      "Jan Kiliński",
      "Jakub Jasiński",
      "Józef Poniatowski",
      "Antoni Madaliński",
      "Jan Henryk Dąbrowski"
    ],
    "image": "r05_kosynierzy_raclawice.jpg",
    "answer": 0,
    "explanation": "Tadeusz Kościuszko został naczelnikiem powstania w 1794 r. i kierował walką zbrojną."
  },
  {
    "id": "R05_UPAD_08",
    "section": "Targowica, insurekcja i upadek Rzeczypospolitej",
    "type": "match",
    "prompt": "Połącz postać z wydarzeniem lub miejscem walk.",
    "options": null,
    "left": [
      "Józef Poniatowski",
      "Tadeusz Kościuszko",
      "Jan Kiliński",
      "Jakub Jasiński"
    ],
    "right": [
      "Powstanie w Wilnie",
      "Insurekcja w Warszawie",
      "Dowodzenie powstaniem w 1794 r.",
      "Zwycięstwo pod Zieleńcami"
    ],
    "answer": {
      "Józef Poniatowski": "Zwycięstwo pod Zieleńcami",
      "Tadeusz Kościuszko": "Dowodzenie powstaniem w 1794 r.",
      "Jan Kiliński": "Insurekcja w Warszawie",
      "Jakub Jasiński": "Powstanie w Wilnie"
    },
    "explanation": "Poniatowski dowodził pod Zieleńcami; Kościuszko był naczelnikiem powstania, Kiliński kierował wystąpieniem w Warszawie, a Jasiński w Wilnie."
  },
  {
    "id": "R05_UPAD_09",
    "section": "Targowica, insurekcja i upadek Rzeczypospolitej",
    "type": "sort",
    "prompt": "Przyporządkuj ziemie zajęte w II rozbiorze do właściwego zaborcy.",
    "options": null,
    "items": [
      "Ukraina",
      "Gdańsk",
      "Podole",
      "Toruń",
      "Białoruś",
      "Wielkopolska z Poznaniem"
    ],
    "categories": [
      "Prusy",
      "Rosja"
    ],
    "image": "r05_mapa_drugi_rozbior.jpg",
    "answer": {
      "Prusy": [
        "Gdańsk",
        "Toruń",
        "Wielkopolska z Poznaniem"
      ],
      "Rosja": [
        "Białoruś",
        "Podole",
        "Ukraina"
      ]
    },
    "explanation": "Prusy przejęły m.in. Gdańsk, Toruń i Wielkopolskę, a Rosja ziemie białoruskie i ukraińskie oraz Podole."
  },
  {
    "id": "R05_UPAD_10",
    "section": "Targowica, insurekcja i upadek Rzeczypospolitej",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od 1792 do 1795 r. w odpowiedniej kolejności.",
    "options": null,
    "items": [
      "Powstanie kościuszkowskie",
      "Konfederacja targowicka",
      "III rozbiór Polski",
      "II rozbiór Polski"
    ],
    "answer": [
      "Konfederacja targowicka",
      "II rozbiór Polski",
      "Powstanie kościuszkowskie",
      "III rozbiór Polski"
    ],
    "explanation": "Targowica powstała w 1792 r., drugi rozbiór nastąpił w 1793 r., insurekcja w 1794 r., a trzeci rozbiór w 1795 r."
  },
  {
    "id": "R05_REWO_01",
    "section": "Wielka Rewolucja Francuska",
    "type": "single_choice",
    "prompt": "Które wydarzenie z 14 lipca 1789 r. stało się symbolem początku rewolucji francuskiej?",
    "options": [
      "Zdobycie Bastylii",
      "Koronacja Napoleona",
      "Egzekucja Ludwika XVI",
      "Przewrót thermidoriański",
      "Ogłoszenie I Republiki",
      "Bitwa pod Waterloo"
    ],
    "image": "r05_szturm_bastylii.jpg",
    "answer": 0,
    "explanation": "14 lipca 1789 r. paryski tłum zdobył Bastylię, rozpoczynając rewolucję."
  },
  {
    "id": "R05_REWO_02",
    "section": "Wielka Rewolucja Francuska",
    "type": "multi_select",
    "prompt": "Które grupy składały się na stan trzeci we Francji przed rewolucją?",
    "options": [
      "Chłopi",
      "Mieszczanie",
      "Burżuazja",
      "Duchowieństwo",
      "Szlachta rodowa",
      "Szlachta urzędnicza"
    ],
    "image": "r05_trzy_stany_francja.jpg",
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Stan trzeci obejmował chłopów oraz mieszczan, w tym bogatszą burżuazję."
  },
  {
    "id": "R05_REWO_03",
    "section": "Wielka Rewolucja Francuska",
    "type": "true_false",
    "prompt": "Przed rewolucją stan trzeci stanowił około 98% społeczeństwa francuskiego.",
    "options": null,
    "answer": true,
    "explanation": "Stan trzeci obejmował około 98% mieszkańców Francji, ale nie miał takich przywilejów jak duchowieństwo i szlachta."
  },
  {
    "id": "R05_REWO_04",
    "section": "Wielka Rewolucja Francuska",
    "type": "fill_in",
    "prompt": "Monarchię we Francji zniesiono, a republikę ogłoszono w roku __________.",
    "options": null,
    "altAnswers": [
      [
        "1792",
        "1792 r."
      ]
    ],
    "answer": [
      "1792"
    ],
    "explanation": "W 1792 r. zniesiono monarchię i proklamowano I Republikę Francuską."
  },
  {
    "id": "R05_REWO_05",
    "section": "Wielka Rewolucja Francuska",
    "type": "riddle",
    "prompt": "Jak nazywał się dokument ogłoszony w 1789 r., który głosił m.in. wolność i równość wobec prawa?",
    "options": null,
    "altAnswers": [
      "Deklaracja Praw Człowieka i Obywatela",
      "Deklaracja praw człowieka i obywatela"
    ],
    "answer": "Deklaracja Praw Człowieka i Obywatela",
    "explanation": "Deklaracja Praw Człowieka i Obywatela z 1789 r. głosiła wolność, równość i nienaruszalność własności."
  },
  {
    "id": "R05_REWO_06",
    "section": "Wielka Rewolucja Francuska",
    "type": "odd_one_out",
    "prompt": "Wskaż element niebędący stanem społecznym przedrewolucyjnej Francji: duchowieństwo, szlachta, stan trzeci, dyrektoriat.",
    "options": null,
    "answer": "dyrektoriat",
    "explanation": "Duchowieństwo, szlachta i stan trzeci były grupami społecznymi; dyrektoriat był późniejszą władzą wykonawczą."
  },
  {
    "id": "R05_REWO_07",
    "section": "Wielka Rewolucja Francuska",
    "type": "scenario",
    "prompt": "W 1793 r. we Francji działa radykalne ugrupowanie kierowane przez Maksymiliana Robespierre'a. Jego przeciwników uznaje się za wrogów ludu i skazuje na śmierć. Jak nazywano to ugrupowanie?",
    "options": [
      "Jakobini",
      "Konfederaci barscy",
      "Stronnictwo patriotyczne",
      "Dyrektoriat",
      "Legioniści Dąbrowskiego",
      "Targowiczanie"
    ],
    "image": "r05_gilotyna_rewolucja.jpg",
    "answer": 0,
    "explanation": "Jakobini kierowani przez Robespierre'a sprawowali władzę w okresie Wielkiego Terroru 1793-1794."
  },
  {
    "id": "R05_REWO_08",
    "section": "Wielka Rewolucja Francuska",
    "type": "match",
    "prompt": "Połącz wydarzenie rewolucji francuskiej z rokiem.",
    "options": null,
    "left": [
      "Zdobycie Bastylii",
      "Ogłoszenie I Republiki",
      "Egzekucja Ludwika XVI",
      "Zamach stanu Napoleona"
    ],
    "right": [
      "1799",
      "1793",
      "1792",
      "1789"
    ],
    "answer": {
      "Zdobycie Bastylii": "1789",
      "Ogłoszenie I Republiki": "1792",
      "Egzekucja Ludwika XVI": "1793",
      "Zamach stanu Napoleona": "1799"
    },
    "explanation": "Bastylia została zdobyta w 1789 r.; republikę ogłoszono w 1792 r.; króla stracono w 1793 r.; Napoleon przejął władzę w 1799 r."
  },
  {
    "id": "R05_REWO_09",
    "section": "Wielka Rewolucja Francuska",
    "type": "sort",
    "prompt": "Dopasuj grupy społeczne do ich położenia przed rewolucją.",
    "options": null,
    "items": [
      "Chłopi",
      "Duchowieństwo",
      "Miejska biedota",
      "Szlachta rodowa",
      "Bogaci mieszczanie",
      "Szlachta urzędnicza"
    ],
    "categories": [
      "stany uprzywilejowane",
      "stan obciążony podatkami"
    ],
    "image": "r05_trzy_stany_francja.jpg",
    "answer": {
      "stany uprzywilejowane": [
        "Duchowieństwo",
        "Szlachta rodowa",
        "Szlachta urzędnicza"
      ],
      "stan obciążony podatkami": [
        "Chłopi",
        "Miejska biedota",
        "Bogaci mieszczanie"
      ]
    },
    "explanation": "Duchowieństwo i szlachta były zwolnione z podatków; ciężary ponosił stan trzeci."
  },
  {
    "id": "R05_REWO_10",
    "section": "Wielka Rewolucja Francuska",
    "type": "sequence",
    "prompt": "Ułóż kolejne przemiany polityczne we Francji chronologicznie.",
    "options": null,
    "items": [
      "Przejęcie władzy przez Napoleona",
      "Ogłoszenie republiki",
      "Zdobycie Bastylii",
      "Rządy jakobinów w okresie Wielkiego Terroru"
    ],
    "answer": [
      "Zdobycie Bastylii",
      "Ogłoszenie republiki",
      "Rządy jakobinów w okresie Wielkiego Terroru",
      "Przejęcie władzy przez Napoleona"
    ],
    "explanation": "Kolejne etapy przypadają na 1789, 1792, 1793-1794 oraz 1799 r."
  },
  {
    "id": "R05_NAPO_01",
    "section": "Napoleon i jego reformy",
    "type": "single_choice",
    "prompt": "W jaki sposób Napoleon Bonaparte przejął władzę we Francji w 1799 r.?",
    "options": [
      "W wyniku zamachu stanu",
      "Dzięki sukcesji tronu",
      "Po zwycięstwie w wyborach do władz państwa",
      "Przez mianowanie przez dyrektoriat",
      "Dzięki powołaniu go przez Stany Generalne",
      "Dzięki porozumieniu z królem Francji"
    ],
    "image": "r05_napoleon_portret.jpg",
    "answer": 0,
    "explanation": "Przewrót 18 brumaire'a w 1799 r. obalił dyrektoriat i rozpoczął konsulat."
  },
  {
    "id": "R05_NAPO_02",
    "section": "Napoleon i jego reformy",
    "type": "multi_select",
    "prompt": "Które z poniższych reform wprowadził Napoleon?",
    "options": [
      "Wprowadzenie Kodeksu cywilnego",
      "Utworzenie banku francuskiego",
      "Reforma armii i awanse według zdolności",
      "Przywrócenie liberum veto",
      "Przywrócenie feudalnych przywilejów",
      "Wprowadzenie wolnej elekcji"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Napoleon wprowadził Kodeks cywilny, reformował finanse i wojsko; nie przywracał ustroju Rzeczypospolitej."
  },
  {
    "id": "R05_NAPO_03",
    "section": "Napoleon i jego reformy",
    "type": "true_false",
    "prompt": "Wyprawa Napoleona na Rosję w 1812 r. zakończyła się sukcesem jego armii.",
    "options": null,
    "answer": false,
    "explanation": "Wyprawa na Rosję poniosła klęskę, do czego przyczyniły się m.in. warunki klimatyczne i trudności zaopatrzeniowe."
  },
  {
    "id": "R05_NAPO_04",
    "section": "Napoleon i jego reformy",
    "type": "fill_in",
    "prompt": "W roku __________ Napoleon został cesarzem Francuzów i wprowadził Kodeks cywilny.",
    "options": null,
    "altAnswers": [
      [
        "1804",
        "1804 r."
      ]
    ],
    "image": "r05_napoleon_portret.jpg",
    "answer": [
      "1804"
    ],
    "explanation": "Koronacja Napoleona na cesarza oraz wprowadzenie jego kodeksu cywilnego nastąpiły w 1804 r."
  },
  {
    "id": "R05_NAPO_05",
    "section": "Napoleon i jego reformy",
    "type": "riddle",
    "prompt": "Na jaką wyspę zesłano Napoleona po abdykacji w 1814 r.?",
    "options": null,
    "altAnswers": [
      "Elba",
      "Elbę",
      "wyspa Elba",
      "na Elbę"
    ],
    "answer": "Elba",
    "explanation": "Po klęskach wojennych Napoleon abdykował w 1814 r. i został zesłany na Elbę."
  },
  {
    "id": "R05_NAPO_06",
    "section": "Napoleon i jego reformy",
    "type": "odd_one_out",
    "prompt": "Wskaż miejsce niezwiązane z końcem panowania Napoleona: Elba, Waterloo, Święta Helena, Bar.",
    "options": null,
    "answer": "Bar",
    "explanation": "Elba była miejscem zesłania w 1814 r., Waterloo miejscem klęski w 1815 r., a Święta Helena miejscem ostatniego zesłania. Bar wiąże się z konfederacją z 1768 r."
  },
  {
    "id": "R05_NAPO_07",
    "section": "Napoleon i jego reformy",
    "type": "scenario",
    "prompt": "Jest rok 1815. Napoleon powrócił z Elby, lecz jego armia została rozgromiona. Cesarz zostaje wysłany na odległą wyspę, gdzie umrze kilka lat później. O którą wyspę chodzi?",
    "options": [
      "Święta Helena",
      "Elba",
      "Korsyka",
      "Wielka Brytania",
      "Lombardia",
      "Sycylia"
    ],
    "answer": 0,
    "explanation": "Po klęsce pod Waterloo Napoleona zesłano na Wyspę Świętej Heleny, gdzie zmarł w 1821 r."
  },
  {
    "id": "R05_NAPO_08",
    "section": "Napoleon i jego reformy",
    "type": "match",
    "prompt": "Połącz wydarzenie z epoki Napoleona z odpowiednim rokiem.",
    "options": null,
    "left": [
      "Przewrót 18 brumaire'a",
      "Koronacja na cesarza Francuzów",
      "Wyprawa na Rosję",
      "Bitwa pod Waterloo"
    ],
    "right": [
      "1815",
      "1812",
      "1804",
      "1799"
    ],
    "answer": {
      "Przewrót 18 brumaire'a": "1799",
      "Koronacja na cesarza Francuzów": "1804",
      "Wyprawa na Rosję": "1812",
      "Bitwa pod Waterloo": "1815"
    },
    "explanation": "Napoleon przejął władzę w 1799 r., koronował się w 1804 r., zaatakował Rosję w 1812 r., a przegrał pod Waterloo w 1815 r."
  },
  {
    "id": "R05_NAPO_09",
    "section": "Napoleon i jego reformy",
    "type": "sort",
    "prompt": "Podziel skutki działań Napoleona na pozytywne i negatywne.",
    "options": null,
    "items": [
      "Powstanie Księstwa Warszawskiego",
      "Wielkie straty ludzkie",
      "Nowoczesny Kodeks cywilny",
      "Kryzys gospodarczy we Francji",
      "Upowszechnienie równości wobec prawa",
      "Zniszczenia gospodarcze w Europie"
    ],
    "categories": [
      "pozytywne",
      "negatywne"
    ],
    "answer": {
      "pozytywne": [
        "Upowszechnienie równości wobec prawa",
        "Nowoczesny Kodeks cywilny",
        "Powstanie Księstwa Warszawskiego"
      ],
      "negatywne": [
        "Wielkie straty ludzkie",
        "Zniszczenia gospodarcze w Europie",
        "Kryzys gospodarczy we Francji"
      ]
    },
    "explanation": "Działania Napoleona upowszechniły idee równości i nowoczesnego prawa, ale wojny powodowały ogromne ofiary i zniszczenia."
  },
  {
    "id": "R05_NAPO_10",
    "section": "Napoleon i jego reformy",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w karierze Napoleona od najwcześniejszego.",
    "options": null,
    "items": [
      "Bitwa Narodów pod Lipskiem",
      "Zamach stanu",
      "Klęska pod Waterloo",
      "Koronacja na cesarza",
      "Wyprawa na Rosję"
    ],
    "answer": [
      "Zamach stanu",
      "Koronacja na cesarza",
      "Wyprawa na Rosję",
      "Bitwa Narodów pod Lipskiem",
      "Klęska pod Waterloo"
    ],
    "explanation": "Chronologia: 1799 - zamach stanu; 1804 - cesarstwo; 1812 - Rosja; 1813 - Lipsk; 1815 - Waterloo."
  },
  {
    "id": "R05_POLS_01",
    "section": "Legiony Polskie i Księstwo Warszawskie",
    "type": "single_choice",
    "prompt": "Kto dowodził Legionami Polskimi utworzonymi we Włoszech w 1797 r.?",
    "options": [
      "Jan Henryk Dąbrowski",
      "Józef Poniatowski",
      "Tadeusz Kościuszko",
      "Antoni Madaliński",
      "Jakub Jasiński",
      "Jan Kiliński"
    ],
    "image": "r05_legiony_polskie_we_wloszech.jpg",
    "answer": 0,
    "explanation": "Legiony Polskie we Włoszech utworzono w 1797 r. pod dowództwem generała Jana Henryka Dąbrowskiego."
  },
  {
    "id": "R05_POLS_02",
    "section": "Legiony Polskie i Księstwo Warszawskie",
    "type": "multi_select",
    "prompt": "Które cechy charakteryzowały Legiony Polskie we Włoszech?",
    "options": [
      "Zachowanie polskich stopni wojskowych",
      "Polski język komend",
      "Kokardy w barwach rewolucji francuskiej",
      "Podległość królowi Prus",
      "Walka wyłącznie na ziemiach polskich",
      "Brak związku z Lombardią"
    ],
    "image": "r05_legiony_polskie_we_wloszech.jpg",
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Legioniści zachowali polskie stopnie i język komend, a kokardy przypominały o ich związku z Francją."
  },
  {
    "id": "R05_POLS_03",
    "section": "Legiony Polskie i Księstwo Warszawskie",
    "type": "true_false",
    "prompt": "Księstwo Warszawskie było formalnie samodzielne, ale w praktyce zależne od napoleońskiej Francji.",
    "options": null,
    "answer": true,
    "explanation": "Księstwo Warszawskie miało własną konstytucję i wojsko, jednak faktycznie pozostawało podporządkowane Francji."
  },
  {
    "id": "R05_POLS_04",
    "section": "Legiony Polskie i Księstwo Warszawskie",
    "type": "fill_in",
    "prompt": "Napoleon nadał Księstwu Warszawskiemu konstytucję w roku __________.",
    "options": null,
    "altAnswers": [
      [
        "1807",
        "1807 r."
      ]
    ],
    "image": "r05_ksiestwo_warszawskie_mapa.jpg",
    "answer": [
      "1807"
    ],
    "explanation": "Konstytucję Księstwa Warszawskiego Napoleon nadał 22 lipca 1807 r. w Dreźnie."
  },
  {
    "id": "R05_POLS_05",
    "section": "Legiony Polskie i Księstwo Warszawskie",
    "type": "riddle",
    "prompt": "Kto napisał słowa Pieśni Legionów Polskich we Włoszech, późniejszego Mazurka Dąbrowskiego?",
    "options": null,
    "altAnswers": [
      "Józef Wybicki",
      "Wybicki"
    ],
    "image": "r05_legiony_polskie_we_wloszech.jpg",
    "answer": "Józef Wybicki",
    "explanation": "Tekst Pieśni Legionów Polskich we Włoszech, znanej później jako Mazurek Dąbrowskiego, napisał Józef Wybicki."
  },
  {
    "id": "R05_POLS_06",
    "section": "Legiony Polskie i Księstwo Warszawskie",
    "type": "odd_one_out",
    "prompt": "Wskaż postać niezwiązaną z polską działalnością w epoce napoleońskiej: Jan Henryk Dąbrowski, Józef Wybicki, Józef Poniatowski, Maksymilian Robespierre.",
    "options": null,
    "answer": "Maksymilian Robespierre",
    "explanation": "Robespierre był przywódcą francuskich jakobinów; pozostałe postacie wiążą się z Legionami lub Księstwem Warszawskim."
  },
  {
    "id": "R05_POLS_07",
    "section": "Legiony Polskie i Księstwo Warszawskie",
    "type": "scenario",
    "prompt": "Jesteś chłopem w Księstwie Warszawskim w 1807 r. Nowy przepis pozwala ci opuścić wieś, ale musisz zostawić dotychczasowy dobytek, uznany za własność pana. O który akt chodzi?",
    "options": [
      "Dekret grudniowy",
      "Prawo o miastach",
      "Konstytucja 3 maja",
      "Prawa kardynalne",
      "Deklaracja Praw Człowieka i Obywatela",
      "Akt konfederacji barskiej"
    ],
    "answer": 0,
    "explanation": "Dekret grudniowy z 1807 r. pozwalał chłopom opuścić wieś pod warunkiem pozostawienia dobytku właścicielowi ziemi."
  },
  {
    "id": "R05_POLS_08",
    "section": "Legiony Polskie i Księstwo Warszawskie",
    "type": "match",
    "prompt": "Połącz postać z jej rolą w dziejach polskich czasów napoleońskich.",
    "options": null,
    "left": [
      "Jan Henryk Dąbrowski",
      "Józef Wybicki",
      "Fryderyk August I Wettin",
      "Józef Poniatowski"
    ],
    "right": [
      "Dowódca armii Księstwa Warszawskiego",
      "Władca Księstwa Warszawskiego",
      "Autor słów Mazurka Dąbrowskiego",
      "Dowódca Legionów Polskich"
    ],
    "answer": {
      "Jan Henryk Dąbrowski": "Dowódca Legionów Polskich",
      "Józef Wybicki": "Autor słów Mazurka Dąbrowskiego",
      "Fryderyk August I Wettin": "Władca Księstwa Warszawskiego",
      "Józef Poniatowski": "Dowódca armii Księstwa Warszawskiego"
    },
    "explanation": "Dąbrowski dowodził Legionami, Wybicki napisał pieśń, Fryderyk August rządził Księstwem, a Poniatowski dowodził jego armią."
  },
  {
    "id": "R05_POLS_09",
    "section": "Legiony Polskie i Księstwo Warszawskie",
    "type": "sort",
    "prompt": "Przyporządkuj informacje do Legionów Polskich lub Księstwa Warszawskiego.",
    "options": null,
    "items": [
      "Konstytucja nadana w Dreźnie",
      "Formowanie w Lombardii",
      "Utworzone w 1797 roku",
      "Unia personalna z Saksonią",
      "Dowództwo Jana Henryka Dąbrowskiego",
      "Utworzone w 1807 roku"
    ],
    "categories": [
      "Legiony Polskie",
      "Księstwo Warszawskie"
    ],
    "image": "r05_ksiestwo_warszawskie_mapa.jpg",
    "answer": {
      "Legiony Polskie": [
        "Utworzone w 1797 roku",
        "Dowództwo Jana Henryka Dąbrowskiego",
        "Formowanie w Lombardii"
      ],
      "Księstwo Warszawskie": [
        "Utworzone w 1807 roku",
        "Konstytucja nadana w Dreźnie",
        "Unia personalna z Saksonią"
      ]
    },
    "explanation": "Legiony powstały w Lombardii w 1797 r., a Księstwo Warszawskie w 1807 r. z władcą będącym królem Saksonii."
  },
  {
    "id": "R05_POLS_10",
    "section": "Legiony Polskie i Księstwo Warszawskie",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z polskich dziejów epoki napoleońskiej chronologicznie.",
    "options": null,
    "items": [
      "Wprowadzenie Kodeksu Napoleona w Księstwie",
      "Utworzenie Legionów Polskich",
      "Likwidacja Księstwa Warszawskiego",
      "Utworzenie Księstwa Warszawskiego"
    ],
    "answer": [
      "Utworzenie Legionów Polskich",
      "Utworzenie Księstwa Warszawskiego",
      "Wprowadzenie Kodeksu Napoleona w Księstwie",
      "Likwidacja Księstwa Warszawskiego"
    ],
    "explanation": "Legiony powstały w 1797 r., Księstwo w 1807 r., kodeks wprowadzono w 1808 r., a Księstwo przestało istnieć w 1815 r."
  },
  {
    "id": "R05_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W jakim roku uchwalono prawa kardynalne utrzymujące m.in. wolną elekcję i liberum veto?",
    "options": [
      "1764",
      "1768",
      "1772",
      "1773",
      "1788",
      "1791"
    ],
    "answer": 1,
    "explanation": "Prawa kardynalne uchwalono w 1768 r. i gwarantowały m.in. wolną elekcję oraz liberum veto."
  },
  {
    "id": "R05_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Jakie uprawnienia przyniosło mieszczanom miast królewskich prawo o miastach z 1791 r.?",
    "options": [
      "Nabywanie ziemi",
      "Dostęp do urzędów",
      "Nietykalność osobistą",
      "Pełne zniesienie stanów",
      "Automatyczne nadanie wszystkim szlachectwa",
      "Wyłączne prawo wyboru króla"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Prawo o miastach z 1791 r. dopuszczało mieszczan do nabywania ziemi i urzędów oraz zapewniało nietykalność osobistą."
  },
  {
    "id": "R05_HARD_03",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Sejm Wielki uchwalił podatek w wysokości 10% od majątków szlacheckich i 20% od dochodów duchownych.",
    "options": null,
    "answer": true,
    "explanation": "Sejm Wielki ustalił podatki w wysokości 10% od majątków szlacheckich oraz 20% od duchownych."
  },
  {
    "id": "R05_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Sejm Wielki ustalił podatek od majątków szlacheckich na __________%, a od duchownych na __________%.",
    "options": null,
    "answer": [
      "10",
      "20"
    ],
    "explanation": "Szlachta miała płacić 10%, a duchowni 20% zgodnie z reformami podatkowymi Sejmu Wielkiego."
  },
  {
    "id": "R05_HARD_05",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywał się król Saksonii, który w unii personalnej rządził Księstwem Warszawskim?",
    "options": null,
    "altAnswers": [
      "Fryderyk August I Wettin",
      "Fryderyk August Wettin",
      "Fryderyk August",
      "Fryderyk August I"
    ],
    "answer": "Fryderyk August I Wettin",
    "explanation": "Władcą Księstwa Warszawskiego był Fryderyk August I Wettin, król Saksonii."
  },
  {
    "id": "R05_HARD_06",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż osobę, która nie należała do autorów Konstytucji 3 maja: Stanisław August Poniatowski, Ignacy Potocki, Hugo Kołłątaj, Ksawery Branicki.",
    "options": null,
    "answer": "Ksawery Branicki",
    "explanation": "Wśród autorów Konstytucji 3 maja byli Stanisław August Poniatowski, Ignacy Potocki i Hugo Kołłątaj; Ksawery Branicki należał do stronnictwa hetmańskiego."
  },
  {
    "id": "R05_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Po zwycięstwie polskiej armii pod Zieleńcami w 1792 r. król Stanisław August Poniatowski ustanawia nowe odznaczenie za męstwo na polu walki. Jak nazywa się ten order?",
    "options": [
      "Virtuti Militari",
      "Legia Honorowa",
      "Order Orła Białego",
      "Order św. Stanisława",
      "Krzyż Żelazny",
      "Order Korony Żelaznej"
    ],
    "answer": 0,
    "explanation": "Order Virtuti Militari ustanowiono w 1792 r. po zwycięstwie pod Zieleńcami."
  },
  {
    "id": "R05_HARD_08",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz państwa zaborcze z powierzchnią ziem zajętych podczas I rozbioru.",
    "options": null,
    "left": [
      "Austria",
      "Prusy",
      "Rosja"
    ],
    "right": [
      "92 tys. km²",
      "36 tys. km²",
      "83 tys. km²"
    ],
    "answer": {
      "Austria": "83 tys. km²",
      "Prusy": "36 tys. km²",
      "Rosja": "92 tys. km²"
    },
    "explanation": "W I rozbiorze Austria otrzymała 83 tys. km², Prusy 36 tys. km², a Rosja 92 tys. km²."
  },
  {
    "id": "R05_HARD_09",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj szczegółowe decyzje Sejmu Wielkiego do ich charakteru.",
    "options": null,
    "items": [
      "Utworzenie Komisji Wojskowej",
      "Likwidacja Rady Nieustającej",
      "Dziesięcioprocentowy podatek dla szlachty",
      "Odebranie głosu gołocie na sejmikach",
      "Dwudziestoprocentowy podatek dla duchownych",
      "Włączenie prywatnych oddziałów do regularnej armii"
    ],
    "categories": [
      "podatkowe",
      "wojskowe",
      "polityczne"
    ],
    "answer": {
      "podatkowe": [
        "Dziesięcioprocentowy podatek dla szlachty",
        "Dwudziestoprocentowy podatek dla duchownych"
      ],
      "wojskowe": [
        "Utworzenie Komisji Wojskowej",
        "Włączenie prywatnych oddziałów do regularnej armii"
      ],
      "polityczne": [
        "Odebranie głosu gołocie na sejmikach",
        "Likwidacja Rady Nieustającej"
      ]
    },
    "explanation": "Reformy Sejmu Wielkiego dotyczyły podatków, organizacji armii oraz funkcjonowania instytucji politycznych."
  },
  {
    "id": "R05_HARD_10",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia końcowych lat Rzeczypospolitej w porządku chronologicznym.",
    "options": null,
    "items": [
      "Klęska Kościuszki pod Szczekocinami",
      "Wojna z Rosją w obronie Konstytucji",
      "III rozbiór Polski",
      "Zwycięstwo pod Racławicami",
      "Kapitulacja Warszawy"
    ],
    "answer": [
      "Wojna z Rosją w obronie Konstytucji",
      "Zwycięstwo pod Racławicami",
      "Klęska Kościuszki pod Szczekocinami",
      "Kapitulacja Warszawy",
      "III rozbiór Polski"
    ],
    "explanation": "Wojna w obronie Konstytucji trwała w 1792 r. W 1794 r. nastąpiły bitwy pod Racławicami i Szczekocinami oraz upadek powstania, a w 1795 r. dokonano III rozbioru."
  },
  {
    "id": "R05_HARD_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jak nazywano wysokie należności na rzecz Napoleona wynikające z porozumienia zawartego w Bajonnie?",
    "options": [
      "Bajońskie sumy",
      "Prawa kardynalne",
      "Kontrybucja targowicka",
      "Podatek podymny",
      "Dziesięcina",
      "Podatek sejmikowy"
    ],
    "answer": 0,
    "explanation": "Zadłużenie przekazane Księstwu Warszawskiemu w Bajonnie określano jako bajońskie sumy; obciążyło jego skarb."
  },
  {
    "id": "R05_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które informacje o Straży Praw z Konstytucji 3 maja są poprawne?",
    "options": [
      "Przewodniczył jej król",
      "W jej skład wchodził prymas",
      "Obejmowała pięciu ministrów",
      "Zastępowała niezawisłe sądy",
      "Była wybierana na zasadzie wolnej elekcji",
      "Znosiła dwuizbowy sejm"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Straży Praw przewodniczył król, a w jej skład wchodzili prymas i pięciu ministrów odpowiedzialnych przed sejmem."
  },
  {
    "id": "R05_HARD_13",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Legioniści Dąbrowskiego zachowali polski język komend mimo formalnego związku z Republiką Lombardzką.",
    "options": null,
    "image": "r05_legiony_polskie_we_wloszech.jpg",
    "answer": true,
    "explanation": "Legiony podlegały formalnie Lombardii, ale żołnierze zachowali polskie stopnie, odznaki i język komend."
  },
  {
    "id": "R05_HARD_14",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Napoleon przejął władzę w wyniku przewrotu 18 __________ w roku __________.",
    "options": null,
    "altAnswers": [
      [
        "brumaire'a",
        "brumaire",
        "brumairea"
      ],
      [
        "1799",
        "1799 r."
      ]
    ],
    "answer": [
      "brumaire'a",
      "1799"
    ],
    "explanation": "Przewrót 18 brumaire'a według kalendarza rewolucyjnego odbył się w 1799 r. i obalił dyrektoriat."
  },
  {
    "id": "R05_HARD_15",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz bitwy z latami, w których się rozegrały.",
    "options": null,
    "left": [
      "Zieleńce",
      "Racławice",
      "Lipsk",
      "Waterloo"
    ],
    "right": [
      "1815",
      "1813",
      "1794",
      "1792"
    ],
    "answer": {
      "Zieleńce": "1792",
      "Racławice": "1794",
      "Lipsk": "1813",
      "Waterloo": "1815"
    },
    "explanation": "Pod Zieleńcami walczono w 1792 r., pod Racławicami w 1794 r., pod Lipskiem w 1813 r., a pod Waterloo w 1815 r."
  }
];

const KID_PROMPTS = {
  "R05_BARS_02": "Zaznacz państwa, które podzieliły Polskę w 1772 roku.",
  "R05_BARS_05": "Kto protestował przeciw I rozbiorowi na sejmie w 1773 roku?",
  "R05_SEJM_02": "Co zmieniła Konstytucja 3 maja?",
  "R05_SEJM_07": "Kto prowadził czarną procesję mieszczan w Warszawie?",
  "R05_UPAD_02": "Co doprowadziło do powstania Kościuszki?",
  "R05_UPAD_05": "Gdzie kosynierzy wygrali bitwę w 1794 roku?",
  "R05_REWO_02": "Kto należał do trzeciego stanu we Francji?",
  "R05_REWO_05": "Jak nazywał się dokument o prawach ludzi z 1789 roku?",
  "R05_NAPO_02": "Jakie reformy wprowadził Napoleon?",
  "R05_NAPO_03": "Czy Napoleon wygrał wyprawę na Rosję w 1812 roku?",
  "R05_POLS_02": "Co polskiego zachowały Legiony we Włoszech?",
  "R05_POLS_05": "Kto napisał słowa Mazurka Dąbrowskiego?",
  "R05_HARD_12": "Kto należał do Straży Praw?"
};

const chapter = {
  id: "r05",
  number: 5,
  title: "Upadek Rzeczypospolitej i okres napoleoński",
  icon: "🏛️",
  sectionOrder: [
  "Konfederacja barska i I rozbiór Polski",
  "Sejm Wielki i Konstytucja 3 maja",
  "Targowica, insurekcja i upadek Rzeczypospolitej",
  "Wielka Rewolucja Francuska",
  "Napoleon i jego reformy",
  "Legiony Polskie i Księstwo Warszawskie"
],
  sectionIcons: {
  "Konfederacja barska i I rozbiór Polski": "⚔️",
  "Sejm Wielki i Konstytucja 3 maja": "📜",
  "Targowica, insurekcja i upadek Rzeczypospolitej": "🛡️",
  "Wielka Rewolucja Francuska": "🇫🇷",
  "Napoleon i jego reformy": "🎖️",
  "Legiony Polskie i Księstwo Warszawskie": "🇵🇱"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
