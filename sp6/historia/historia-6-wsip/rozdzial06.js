// Skróty sekcji (do identyfikatorów ćwiczeń):
//   WLA  = Droga Napoleona do władzy
//   EUR  = Nowy ład w Europie
//   LEG  = Legiony i nadzieje Polaków
//   KSI  = Księstwo Warszawskie
//   UPA  = Klęska i ocena Napoleona
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R06_WLA_01",
    "section": "Droga Napoleona do władzy",
    "type": "single_choice",
    "prompt": "W którym roku Napoleon Bonaparte przeprowadził zbrojny zamach stanu we Francji?",
    "options": [
      "1794",
      "1797",
      "1799",
      "1801",
      "1804",
      "1807"
    ],
    "answer": 2,
    "explanation": "Napoleon wykorzystał polityczny zamęt i poparcie armii, a w 1799 roku przeprowadził zbrojny zamach stanu."
  },
  {
    "id": "R06_WLA_02",
    "section": "Droga Napoleona do władzy",
    "type": "scenario",
    "prompt": "Młody generał zdobywa popularność, bo tłumi rozruchy w Paryżu i odnosi zwycięstwa na froncie włoskim przeciw Austriakom. O kogo chodzi?",
    "options": [
      "Napoleona Bonapartego",
      "Józefa Poniatowskiego",
      "Jana Henryka Dąbrowskiego",
      "Ludwika XVIII",
      "Papieża Piusa VII",
      "Józefa Wybickiego"
    ],
    "answer": 0,
    "image": "r06_napoleon_we_wloszech.jpg",
    "explanation": "Tak opisano początki kariery Napoleona Bonapartego: sukcesy we Włoszech i stłumienie rozruchów w Paryżu zwiększyły jego popularność."
  },
  {
    "id": "R06_WLA_03",
    "section": "Droga Napoleona do władzy",
    "type": "true_false",
    "prompt": "Nowa konstytucja po zamachu Napoleona bardziej przypominała dyktaturę jednostki niż rządy republikańskie.",
    "options": null,
    "answer": true,
    "explanation": "W podręczniku podkreślono, że konstytucja napisana na życzenie Bonapartego dawała realną pełnię władzy pierwszemu konsulowi."
  },
  {
    "id": "R06_WLA_04",
    "section": "Droga Napoleona do władzy",
    "type": "fill_in",
    "prompt": "Po zamachu najwyższa władza wykonawcza miała znajdować się w ręku __________ konsulów, ale pełnię władzy otrzymał __________ konsul.",
    "options": null,
    "answer": [
      "trzech",
      "pierwszy"
    ],
    "altAnswers": [
      [
        "trzech",
        "3"
      ],
      [
        "pierwszy",
        "I",
        "pierwszy konsul"
      ]
    ],
    "explanation": "Ustrój po zamachu przewidywał trzech konsulów, lecz dwóch miało tylko głos doradczy, a pełnię władzy sprawował pierwszy konsul."
  },
  {
    "id": "R06_WLA_05",
    "section": "Droga Napoleona do władzy",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki, które według rozdziału ułatwiły Napoleonowi objęcie władzy.",
    "options": [
      "Kłopoty gospodarcze państwa",
      "Konflikty między najwyższymi władzami republiki",
      "Poparcie armii",
      "Powszechne pragnienie rządów silnej ręki",
      "Długie panowanie Burbonów w republice",
      "Pokój z wszystkimi sąsiadami już przed 1799 rokiem"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Francja była pogrążona w kłopotach gospodarczych i sporach politycznych, a Napoleon wykorzystał poparcie armii oraz przekonanie wielu Francuzów, że potrzebne są rządy silnej ręki."
  },
  {
    "id": "R06_WLA_06",
    "section": "Droga Napoleona do władzy",
    "type": "riddle",
    "prompt": "Jaką funkcję objął Napoleon po zamachu stanu, gdy pełnia władzy znalazła się w jego rękach?",
    "options": null,
    "answer": "pierwszy konsul",
    "altAnswers": [
      "pierwszy konsul",
      "I konsul",
      "konsul pierwszy"
    ],
    "explanation": "Po przewrocie Napoleon został pierwszym konsulem Republiki Francuskiej i faktycznie sprawował władzę dyktatorską."
  },
  {
    "id": "R06_WLA_07",
    "section": "Droga Napoleona do władzy",
    "type": "single_choice",
    "prompt": "Gdzie 2 grudnia 1804 roku odbyła się cesarska koronacja Napoleona?",
    "options": [
      "W paryskiej katedrze Notre Dame",
      "W pałacu wersalskim",
      "W Berlinie",
      "W Dreźnie",
      "W Rzymie",
      "W katedrze w Reims"
    ],
    "answer": 0,
    "image": "r06_koronacja_w_notre_dame.jpg",
    "explanation": "Koronacja Napoleona i Józefiny odbyła się 2 grudnia 1804 roku w paryskiej katedrze Notre Dame."
  },
  {
    "id": "R06_WLA_08",
    "section": "Droga Napoleona do władzy",
    "type": "odd_one_out",
    "prompt": "Wskaż tytuł lub funkcję, która nie pasuje do kariery Napoleona opisanej w rozdziale: generał, pierwszy konsul, cesarz Francuzów, król Francji.",
    "options": null,
    "answer": "król Francji",
    "explanation": "Napoleon był generałem, pierwszym konsulem i cesarzem Francuzów. Nie był królem Francji."
  },
  {
    "id": "R06_WLA_09",
    "section": "Droga Napoleona do władzy",
    "type": "multi_select",
    "prompt": "Które zasady wymieniono w rozdziale jako najważniejsze regulacje Kodeksu Napoleona?",
    "options": [
      "Równość wobec prawa",
      "Wolność osobista obywateli",
      "Swoboda wyznawania religii",
      "Nienaruszalność własności prywatnej",
      "Zniesienie wszystkich podatków",
      "Przywrócenie pełnej władzy arystokracji"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r06_kodeks_napoleona.jpg",
    "explanation": "Kodeks Napoleona gwarantował między innymi równość wobec prawa, wolność osobistą, swobodę religijną oraz nienaruszalność własności prywatnej."
  },
  {
    "id": "R06_WLA_10",
    "section": "Droga Napoleona do władzy",
    "type": "match",
    "prompt": "Połącz wydarzenie z rokiem lub datą.",
    "options": null,
    "left": [
      "Upadek rządów jakobinów",
      "Zamach stanu Napoleona",
      "Koronacja Napoleona",
      "Bitwa pod Austerlitz"
    ],
    "right": [
      "1794",
      "1799",
      "2 grudnia 1804",
      "grudzień 1805"
    ],
    "answer": {
      "Upadek rządów jakobinów": "1794",
      "Zamach stanu Napoleona": "1799",
      "Koronacja Napoleona": "2 grudnia 1804",
      "Bitwa pod Austerlitz": "grudzień 1805"
    },
    "explanation": "Po upadku jakobinów w 1794 roku Napoleon przejął władzę w 1799 roku, koronował się 2 grudnia 1804 roku, a pod Austerlitz zwyciężył na początku grudnia 1805 roku."
  },
  {
    "id": "R06_WLA_11",
    "section": "Droga Napoleona do władzy",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do właściwych grup.",
    "options": null,
    "items": [
      "zwycięstwa na froncie włoskim",
      "stłumienie rozruchów w Paryżu",
      "poparcie armii",
      "kłopoty gospodarcze państwa",
      "konflikty we władzach republiki",
      "wojna z koalicją"
    ],
    "categories": [
      "źródła popularności Napoleona",
      "problemy Francji"
    ],
    "answer": {
      "źródła popularności Napoleona": [
        "zwycięstwa na froncie włoskim",
        "stłumienie rozruchów w Paryżu",
        "poparcie armii"
      ],
      "problemy Francji": [
        "kłopoty gospodarcze państwa",
        "konflikty we władzach republiki",
        "wojna z koalicją"
      ]
    },
    "explanation": "Popularność Napoleona rosła dzięki sukcesom wojskowym i poparciu armii, a kryzys Francji tworzyły wojna, konflikty polityczne i problemy gospodarcze."
  },
  {
    "id": "R06_WLA_12",
    "section": "Droga Napoleona do władzy",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Bitwa pod Austerlitz",
      "Upadek rządów jakobinów",
      "Zamach stanu Napoleona",
      "Koronacja Napoleona na cesarza"
    ],
    "answer": [
      "Upadek rządów jakobinów",
      "Zamach stanu Napoleona",
      "Koronacja Napoleona na cesarza",
      "Bitwa pod Austerlitz"
    ],
    "explanation": "Najpierw upadły rządy jakobinów w 1794 roku, następnie Napoleon dokonał zamachu w 1799 roku, koronował się w 1804 roku, a bitwa pod Austerlitz odbyła się w 1805 roku."
  },
  {
    "id": "R06_EUR_01",
    "section": "Nowy ład w Europie",
    "type": "single_choice",
    "prompt": "Jak nazywa się bitwa z początku grudnia 1805 roku, w której Napoleon pokonał połączone armie austriacką i rosyjską?",
    "options": [
      "Bitwa pod Austerlitz",
      "Bitwa pod Waterloo",
      "Bitwa pod Lipskiem",
      "Bitwa pod Raszynem",
      "Bitwa pod Somosierrą",
      "Bitwa pod Dubienką"
    ],
    "answer": 0,
    "image": "r06_bitwa_pod_austerlitz.jpg",
    "explanation": "Bitwa pod Austerlitz z 1805 roku, zwana bitwą trzech cesarzy, była zwycięstwem Napoleona nad armiami Austrii i Rosji."
  },
  {
    "id": "R06_EUR_02",
    "section": "Nowy ład w Europie",
    "type": "true_false",
    "prompt": "Pod Austerlitz wojska austriacko-rosyjskie były liczniejsze od wojsk francuskich.",
    "options": null,
    "answer": true,
    "image": "r06_bitwa_pod_austerlitz.jpg",
    "explanation": "Rozdział podaje, że połączone siły austriacko-rosyjskie były liczniejsze niż wojsko francuskie, mimo to zwyciężyła Wielka Armia Napoleona."
  },
  {
    "id": "R06_EUR_03",
    "section": "Nowy ład w Europie",
    "type": "multi_select",
    "prompt": "Zaznacz elementy podstępu Napoleona podczas bitwy pod Austerlitz.",
    "options": [
      "Wykorzystanie ukształtowania terenu",
      "Wykorzystanie gęstej mgły",
      "Ukrycie części Wielkiej Armii za wzgórzami",
      "Wysłanie początkowo nielicznych oddziałów wyglądających na osłabione",
      "Desant floty brytyjskiej na tyły wroga",
      "Sojusz z wojskami pruskimi czekającymi w rezerwie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Napoleon użył terenu, pogody, mgły i pozorowanego osłabienia, aby wciągnąć przeciwnika w niekorzystne położenie."
  },
  {
    "id": "R06_EUR_04",
    "section": "Nowy ład w Europie",
    "type": "scenario",
    "prompt": "Wojska koalicji ruszają do ataku, nie czekając na posiłki pruskie. Wtedy cesarz Francuzów wysyła ukryte we mgle oddziały, by rozdzielić siły wroga. W której bitwie rozegrała się ta sytuacja?",
    "options": [
      "Pod Austerlitz",
      "Pod Waterloo",
      "Pod Lipskiem",
      "Pod Raszynem",
      "Pod Somosierrą",
      "Pod Dubienką"
    ],
    "answer": 0,
    "image": "r06_bitwa_pod_austerlitz.jpg",
    "explanation": "Opis dotyczy bitwy pod Austerlitz, w której Napoleon wykorzystał mgłę i ukształtowanie terenu do pokonania Austrii i Rosji."
  },
  {
    "id": "R06_EUR_05",
    "section": "Nowy ład w Europie",
    "type": "fill_in",
    "prompt": "Po zwycięstwach Napoleona z mapy Europy zniknęło Święte Cesarstwo __________ Narodu Niemieckiego, a w jego miejsce powstał Związek __________.",
    "options": null,
    "answer": [
      "Rzymskie",
      "Reński"
    ],
    "altAnswers": [
      [
        "Rzymskie",
        "rzymskie"
      ],
      [
        "Reński",
        "Renski",
        "reński"
      ]
    ],
    "explanation": "Po klęsce Habsburgów upadło Święte Cesarstwo Rzymskie Narodu Niemieckiego, a Napoleon utworzył podporządkowany Francji Związek Reński."
  },
  {
    "id": "R06_EUR_06",
    "section": "Nowy ład w Europie",
    "type": "single_choice",
    "prompt": "Co utworzył Napoleon na początku 1806 roku z części dawnych terenów Rzeszy?",
    "options": [
      "Związek Reński",
      "Księstwo Warszawskie",
      "Królestwo Westfalii",
      "Cesarstwo Austriackie",
      "Republikę Francuską",
      "Święte Cesarstwo Rzymskie"
    ],
    "answer": 0,
    "explanation": "Z reszty terenów Rzeszy Napoleon utworzył Związek Reński, złożony z zależnych od niego państw niemieckich."
  },
  {
    "id": "R06_EUR_07",
    "section": "Nowy ład w Europie",
    "type": "true_false",
    "prompt": "Politykę zagraniczną Związku Reńskiego miał prowadzić sam Napoleon.",
    "options": null,
    "answer": true,
    "image": "r06_europa_napoleonska_mapa.jpg",
    "explanation": "Państwa Związku Reńskiego były faktycznie podporządkowane Francji, a ich politykę zagraniczną miał prowadzić Napoleon."
  },
  {
    "id": "R06_EUR_08",
    "section": "Nowy ład w Europie",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo, które nie pasuje do koalicji występującej przeciw Napoleonowi w opisie wojny z Prusami: Prusy, Wielka Brytania, Rosja, Saksonia.",
    "options": null,
    "answer": "Saksonia",
    "explanation": "Prusy, Wielka Brytania i Rosja stworzyły kolejną koalicję antyfrancuską. Saksonia została podana jako przykład państwa włączonego w system Związku Reńskiego."
  },
  {
    "id": "R06_EUR_09",
    "section": "Nowy ład w Europie",
    "type": "match",
    "prompt": "Połącz państwo lub dynastię ze skutkiem opisanym w rozdziale.",
    "options": null,
    "left": [
      "Austria po Austerlitz",
      "Prusy w 1806 roku",
      "Wielka Brytania",
      "Habsburgowie"
    ],
    "right": [
      "poprosiła o pokój",
      "poniosły druzgocącą klęskę",
      "pozostała nieugiętym przeciwnikiem",
      "zrezygnowali z tytułu cesarzy rzymskich narodu niemieckiego"
    ],
    "answer": {
      "Austria po Austerlitz": "poprosiła o pokój",
      "Prusy w 1806 roku": "poniosły druzgocącą klęskę",
      "Wielka Brytania": "pozostała nieugiętym przeciwnikiem",
      "Habsburgowie": "zrezygnowali z tytułu cesarzy rzymskich narodu niemieckiego"
    },
    "explanation": "Zwycięstwa Napoleona zmusiły Austrię i Prusy do ustępstw, a Wielka Brytania pozostała najtrudniejszym przeciwnikiem Francji."
  },
  {
    "id": "R06_EUR_10",
    "section": "Nowy ład w Europie",
    "type": "multi_select",
    "prompt": "Jakie zjawiska charakteryzowały Europę napoleońską według rozdziału?",
    "options": [
      "Osadzanie przez Napoleona krewnych na tronach zależnych państw",
      "Wprowadzanie konstytucji wzorowanych na francuskiej",
      "Upowszechnianie Kodeksu Napoleona",
      "Zmuszanie dawnych wrogów do sojuszu z Francją",
      "Całkowita niezależność wszystkich państw niemieckich",
      "Dobrowolne rozwiązanie armii francuskiej"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Europa napoleońska oznaczała dominację Francji, zależność wielu państw, francuskie wzory ustrojowe i prawne oraz dynastów lub marszałków związanych z Napoleonem na tronach."
  },
  {
    "id": "R06_EUR_11",
    "section": "Nowy ład w Europie",
    "type": "scenario",
    "prompt": "Na karykaturze premier Wielkiej Brytanii William Pitt młodszy i Napoleon dzielą świat. Jaki sens ma ten obraz według podpisu w rozdziale?",
    "options": [
      "Drwi z apetytów Wielkiej Brytanii i Francji na panowanie nad światem",
      "Pokazuje faktyczny traktat o pokojowym podziale Europy",
      "Dowodzi, że Napoleon był sojusznikiem Wielkiej Brytanii przez cały okres wojen",
      "Opisuje koronację Napoleona w Notre Dame",
      "Wyjaśnia zasady Kodeksu Napoleona",
      "Pokazuje powstanie Księstwa Warszawskiego"
    ],
    "answer": 0,
    "image": "r06_napoleon_pitt_karykatura.jpg",
    "explanation": "Podpis pod karykaturą wyjaśnia, że rysownik drwił z apetytów Francji i Wielkiej Brytanii na panowanie nad światem."
  },
  {
    "id": "R06_EUR_12",
    "section": "Nowy ład w Europie",
    "type": "riddle",
    "prompt": "Jak nazywa się związek lub porozumienie państw działających we wspólnym celu?",
    "options": null,
    "answer": "koalicja",
    "altAnswers": [
      "koalicja",
      "koalicją"
    ],
    "explanation": "Rozdział definiuje koalicję jako związek lub porozumienie państw działających we wspólnym celu."
  },
  {
    "id": "R06_LEG_01",
    "section": "Legiony i nadzieje Polaków",
    "type": "single_choice",
    "prompt": "Kto przedstawił w Paryżu plan utworzenia polskich oddziałów u boku armii francuskiej?",
    "options": [
      "Jan Henryk Dąbrowski",
      "Józef Wybicki",
      "Józef Poniatowski",
      "Hugo Kołłątaj",
      "Napoleon Bonaparte",
      "Tadeusz Kościuszko"
    ],
    "answer": 0,
    "explanation": "Plan sformowania polskich oddziałów przedstawił w Paryżu generał Jan Henryk Dąbrowski."
  },
  {
    "id": "R06_LEG_02",
    "section": "Legiony i nadzieje Polaków",
    "type": "fill_in",
    "prompt": "Legiony Polskie zaczęto tworzyć w __________ roku na terenach północnych __________.",
    "options": null,
    "answer": [
      "1797",
      "Włoch"
    ],
    "altAnswers": [
      [
        "1797",
        "1797 r."
      ],
      [
        "Włoch",
        "Włochy",
        "północnych Włoch"
      ]
    ],
    "explanation": "Dąbrowski zaczął tworzyć Legiony Polskie w 1797 roku na terenach północnych Włoch."
  },
  {
    "id": "R06_LEG_03",
    "section": "Legiony i nadzieje Polaków",
    "type": "true_false",
    "prompt": "Legiony Polskie miały rekrutować się między innymi z Polaków wziętych przez Francuzów do niewoli jako jeńcy z armii austriackiej.",
    "options": null,
    "answer": true,
    "image": "r06_legion_dabrowskiego.jpg",
    "explanation": "Podręcznik podaje, że oddziały miały rekrutować się głównie z kilku tysięcy Polaków wziętych do niewoli z armii austriackiej."
  },
  {
    "id": "R06_LEG_04",
    "section": "Legiony i nadzieje Polaków",
    "type": "multi_select",
    "prompt": "Zaznacz informacje zgodne z opisem Legionów Polskich.",
    "options": [
      "Utworzono je u boku armii francuskiej",
      "Ich liczba w ciągu dwóch lat wzrosła do około 10 tysięcy żołnierzy",
      "Walczyły na froncie włoskim oraz na pograniczu francusko-niemieckim",
      "Przyczyniły się do zwycięstw Francuzów nad Austrią",
      "Od początku były częścią armii rosyjskiej",
      "Powstały po pokoju w Tylży"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Legiony Dąbrowskiego powstały przy armii francuskiej, osiągnęły około 10 tysięcy żołnierzy, walczyły we Włoszech i na pograniczu francusko-niemieckim oraz pomagały Francuzom w walkach z Austrią."
  },
  {
    "id": "R06_LEG_05",
    "section": "Legiony i nadzieje Polaków",
    "type": "riddle",
    "prompt": "Kto ułożył Pieśń Legionów Polskich we Włoszech?",
    "options": null,
    "answer": "Józef Wybicki",
    "altAnswers": [
      "Józef Wybicki",
      "Wybicki",
      "Jozef Wybicki"
    ],
    "explanation": "Pieśń Legionów Polskich we Włoszech ułożył w 1797 roku Józef Wybicki."
  },
  {
    "id": "R06_LEG_06",
    "section": "Legiony i nadzieje Polaków",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z Legionami w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Wysłanie części legionistów na Santo Domingo",
      "Ułożenie Pieśni Legionów Polskich we Włoszech",
      "Zawarcie pokoju z Austrią i likwidacja odrębności legionów",
      "Rozpoczęcie tworzenia Legionów we Włoszech"
    ],
    "answer": [
      "Rozpoczęcie tworzenia Legionów we Włoszech",
      "Ułożenie Pieśni Legionów Polskich we Włoszech",
      "Zawarcie pokoju z Austrią i likwidacja odrębności legionów",
      "Wysłanie części legionistów na Santo Domingo"
    ],
    "explanation": "Najpierw w 1797 roku tworzono Legiony i powstała pieśń Wybickiego, później po pokoju z Austrią w 1801 roku zlikwidowano ich odrębność, a w następnym roku część żołnierzy wysłano na Santo Domingo."
  },
  {
    "id": "R06_LEG_07",
    "section": "Legiony i nadzieje Polaków",
    "type": "single_choice",
    "prompt": "Dokąd wysłano około 6 tysięcy legionistów wcielonych do wojska francuskiego?",
    "options": [
      "Na Santo Domingo",
      "Do Moskwy",
      "Do Berlina",
      "Na Elbę",
      "Do Saksonii",
      "Do Londynu"
    ],
    "answer": 0,
    "image": "r06_santo_domingo_legiony.jpg",
    "explanation": "Około 6 tysięcy legionistów wysłano na Santo Domingo, czyli dzisiejsze Haiti, francuską kolonię na Morzu Karaibskim."
  },
  {
    "id": "R06_LEG_08",
    "section": "Legiony i nadzieje Polaków",
    "type": "true_false",
    "prompt": "Na Santo Domingo polscy legioniści mieli tłumić rebelię niewolników przeciw francuskim plantatorom.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział podkreśla tragiczny paradoks: żołnierze z hasłem Ludzie wolni są braćmi zostali zmuszeni do walki przeciw powstaniu uciskanej ludności."
  },
  {
    "id": "R06_LEG_09",
    "section": "Legiony i nadzieje Polaków",
    "type": "odd_one_out",
    "prompt": "Wskaż nazwę, która nie pasuje do miejsc zwycięstw polskich sztandarów przywołanych w odezwie Dąbrowskiego: Dubienka, Racławice, Warszawa, Madryt.",
    "options": null,
    "answer": "Madryt",
    "explanation": "W odezwie wspomniano Dubienkę, Racławice, Warszawę i Wilno. Madryt nie należy do tej listy."
  },
  {
    "id": "R06_LEG_10",
    "section": "Legiony i nadzieje Polaków",
    "type": "scenario",
    "prompt": "Generał apeluje do Polaków wcielonych do wojsk zaborczych, aby rzucili narzuconą im broń i walczyli za wolność pod Bonapartem. Kto wygłasza tę odezwę?",
    "options": [
      "Jan Henryk Dąbrowski",
      "Józef Wybicki",
      "Hugo Kołłątaj",
      "Józef Poniatowski",
      "Ludwik XVIII",
      "Pius VII"
    ],
    "answer": 0,
    "explanation": "Odezwa przytoczona w rozdziale pochodziła od generała Jana Henryka Dąbrowskiego, twórcy Legionów Polskich."
  },
  {
    "id": "R06_LEG_11",
    "section": "Legiony i nadzieje Polaków",
    "type": "match",
    "prompt": "Połącz postać z rolą opisaną w rozdziale.",
    "options": null,
    "left": [
      "Jan Henryk Dąbrowski",
      "Józef Wybicki",
      "Tadeusz Kościuszko",
      "Napoleon Bonaparte"
    ],
    "right": [
      "twórca Legionów Polskich",
      "autor Pieśni Legionów Polskich we Włoszech",
      "dowódca powstania wspominanego przez Dąbrowskiego",
      "dowódca francuskiego frontu włoskiego"
    ],
    "answer": {
      "Jan Henryk Dąbrowski": "twórca Legionów Polskich",
      "Józef Wybicki": "autor Pieśni Legionów Polskich we Włoszech",
      "Tadeusz Kościuszko": "dowódca powstania wspominanego przez Dąbrowskiego",
      "Napoleon Bonaparte": "dowódca francuskiego frontu włoskiego"
    },
    "explanation": "Dąbrowski stworzył Legiony, Wybicki napisał ich pieśń, Kościuszko był symbolem wcześniejszej walki o wolność, a Bonaparte dowodził frontem włoskim."
  },
  {
    "id": "R06_LEG_12",
    "section": "Legiony i nadzieje Polaków",
    "type": "fill_in",
    "prompt": "Pieśń Legionów Polskich we Włoszech stała się oficjalnym hymnem narodowym Polski w __________ roku; dziś znana jest jako __________ Dąbrowskiego.",
    "options": null,
    "answer": [
      "1927",
      "Mazurek"
    ],
    "altAnswers": [
      [
        "1927",
        "1927 r."
      ],
      [
        "Mazurek",
        "Mazurek Dąbrowskiego"
      ]
    ],
    "explanation": "Pieśń ułożona dla Legionów przez Józefa Wybickiego została oficjalnym hymnem Polski w 1927 roku i jest znana jako Mazurek Dąbrowskiego."
  },
  {
    "id": "R06_KSI_01",
    "section": "Księstwo Warszawskie",
    "type": "single_choice",
    "prompt": "Na mocy którego pokoju w 1807 roku utworzono Księstwo Warszawskie?",
    "options": [
      "Pokoju w Tylży",
      "Pokoju w Campo Formio",
      "Pokoju westfalskiego",
      "Pokoju w Wiedniu",
      "Pokoju w Lipsku",
      "Pokoju w Dreźnie"
    ],
    "answer": 0,
    "explanation": "Księstwo Warszawskie utworzono po pokoju w Tylży, zawartym przez Napoleona z Prusami i Rosją w 1807 roku."
  },
  {
    "id": "R06_KSI_02",
    "section": "Księstwo Warszawskie",
    "type": "true_false",
    "prompt": "Księstwo Warszawskie powstało z części ziem polskich zaboru pruskiego.",
    "options": null,
    "answer": true,
    "image": "r06_nadanie_konstytucji_ksiestwu.jpg",
    "explanation": "Decyzja pokoju w Tylży dotyczyła utworzenia Księstwa Warszawskiego z części ziem polskich zaboru pruskiego."
  },
  {
    "id": "R06_KSI_03",
    "section": "Księstwo Warszawskie",
    "type": "multi_select",
    "prompt": "Zaznacz postanowienia konstytucji Księstwa Warszawskiego wymienione w rozdziale.",
    "options": [
      "Władzę wykonawczą sprawują monarcha i ministrowie",
      "Sejm ma władzę ustawodawczą, ale ograniczone kompetencje",
      "Chłopi otrzymują wolność osobistą",
      "Prawo wyborcze obejmuje między innymi szlachtę z majątkami ziemskimi i zamożnych mieszczan",
      "Chłopi otrzymują pełną własność uprawianej ziemi",
      "Władcą zostaje car Rosji"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Konstytucja przewidywała władzę monarchy i ministrów, sejm o ograniczonych kompetencjach, prawo wyborcze dla wybranych grup oraz wolność osobistą chłopów bez nadania im własności ziemi."
  },
  {
    "id": "R06_KSI_04",
    "section": "Księstwo Warszawskie",
    "type": "match",
    "prompt": "Połącz element herbu Księstwa Warszawskiego z jego znaczeniem.",
    "options": null,
    "left": [
      "tarcza w czarno-złote pasy z zielonym wieńcem",
      "biały orzeł w koronie",
      "jedno pole herbu",
      "drugie pole herbu"
    ],
    "right": [
      "herb Saksonii i dynastii Wettinów",
      "herb Polski",
      "część związana z Saksonią",
      "część związana z Polską"
    ],
    "answer": {
      "tarcza w czarno-złote pasy z zielonym wieńcem": "herb Saksonii i dynastii Wettinów",
      "biały orzeł w koronie": "herb Polski",
      "jedno pole herbu": "część związana z Saksonią",
      "drugie pole herbu": "część związana z Polską"
    },
    "image": "r06_herb_ksiestwa_warszawskiego.jpg",
    "explanation": "Herb Księstwa łączył symbolikę Saksonii i dynastii Wettinów z polskim białym orłem."
  },
  {
    "id": "R06_KSI_05",
    "section": "Księstwo Warszawskie",
    "type": "fill_in",
    "prompt": "Dziedzicznym władcą Księstwa Warszawskiego został król __________ z dynastii __________.",
    "options": null,
    "answer": [
      "Saksonii",
      "Wettinów"
    ],
    "altAnswers": [
      [
        "Saksonii",
        "saksoński",
        "Saksonia"
      ],
      [
        "Wettinów",
        "Wettinowie",
        "Wettin"
      ]
    ],
    "explanation": "Władcą Księstwa Warszawskiego został król Saksonii z dynastii Wettinów."
  },
  {
    "id": "R06_KSI_06",
    "section": "Księstwo Warszawskie",
    "type": "riddle",
    "prompt": "Jak nazywało się niewielkie państwo polskie utworzone w 1807 roku i uzależnione od napoleońskiej Francji?",
    "options": null,
    "answer": "Księstwo Warszawskie",
    "altAnswers": [
      "Księstwo Warszawskie",
      "Ksiestwo Warszawskie"
    ],
    "explanation": "Księstwo Warszawskie było państwem satelickim napoleońskiej Francji, utworzonym w 1807 roku."
  },
  {
    "id": "R06_KSI_07",
    "section": "Księstwo Warszawskie",
    "type": "sort",
    "prompt": "Przyporządkuj elementy ustroju Księstwa Warszawskiego do kategorii.",
    "options": null,
    "items": [
      "monarcha",
      "ministrowie",
      "sejm",
      "szlachta posiadająca majątki ziemskie",
      "mieszczanie o wysokich dochodach",
      "wolność osobista chłopów"
    ],
    "categories": [
      "władza wykonawcza",
      "władza ustawodawcza",
      "prawo wyborcze",
      "położenie chłopów"
    ],
    "answer": {
      "władza wykonawcza": [
        "monarcha",
        "ministrowie"
      ],
      "władza ustawodawcza": [
        "sejm"
      ],
      "prawo wyborcze": [
        "szlachta posiadająca majątki ziemskie",
        "mieszczanie o wysokich dochodach"
      ],
      "położenie chłopów": [
        "wolność osobista chłopów"
      ]
    },
    "explanation": "Konstytucja określała władzę wykonawczą monarchy i ministrów, ustawodawczą rolę sejmu, ograniczone prawo wyborcze oraz wolność osobistą chłopów."
  },
  {
    "id": "R06_KSI_08",
    "section": "Księstwo Warszawskie",
    "type": "single_choice",
    "prompt": "Które państwo najechało Księstwo Warszawskie w 1809 roku?",
    "options": [
      "Austria",
      "Rosja",
      "Prusy",
      "Wielka Brytania",
      "Saksonia",
      "Hiszpania"
    ],
    "answer": 0,
    "explanation": "W 1809 roku Austria najechała Księstwo Warszawskie, wypowiadając w ten sposób wojnę Francji."
  },
  {
    "id": "R06_KSI_09",
    "section": "Księstwo Warszawskie",
    "type": "scenario",
    "prompt": "Książę Józef Poniatowski odpiera atak liczniejszej armii austriackiej, a potem wojska polskie wkraczają na ziemie zaboru austriackiego. Z którą bitwą łączy się ten opis?",
    "options": [
      "Z bitwą pod Raszynem",
      "Z bitwą pod Austerlitz",
      "Z bitwą pod Waterloo",
      "Z bitwą pod Lipskiem",
      "Z bitwą pod Somosierrą",
      "Z bitwą pod Dubienką"
    ],
    "answer": 0,
    "explanation": "W bitwie pod Raszynem w 1809 roku wojska księcia Józefa Poniatowskiego odparły liczniejszą armię austriacką."
  },
  {
    "id": "R06_KSI_10",
    "section": "Księstwo Warszawskie",
    "type": "true_false",
    "prompt": "Po wojnie z Austrią w 1809 roku Księstwo Warszawskie powiększyło się o część ziem zaboru austriackiego, w tym Kraków.",
    "options": null,
    "answer": true,
    "explanation": "Po klęsce Austrii do Księstwa Warszawskiego włączono ziemie zagarnięte przez Austrię w III rozbiorze Polski, z Krakowem włącznie."
  },
  {
    "id": "R06_KSI_11",
    "section": "Księstwo Warszawskie",
    "type": "single_choice",
    "prompt": "Jak nazywano polską lekką jazdę, która wsławiła się szarżą pod Somosierrą?",
    "options": [
      "Szwoleżerowie",
      "Kirasjerzy",
      "Piechurzy liniowi",
      "Kosynierzy",
      "Artylerzyści",
      "Ułani austriaccy"
    ],
    "answer": 0,
    "image": "r06_szarza_somosierra.jpg",
    "explanation": "Pod Somosierrą wsławił się pułk polskiej lekkiej jazdy, czyli szwoleżerów."
  },
  {
    "id": "R06_KSI_12",
    "section": "Księstwo Warszawskie",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie pasuje do skutków wojny 1809 roku dla Księstwa Warszawskiego: Kraków, ziemie zaboru austriackiego, powiększenie terytorium, Londyn.",
    "options": null,
    "answer": "Londyn",
    "explanation": "Po wojnie 1809 roku Księstwo powiększono o część ziem zaboru austriackiego z Krakowem. Londyn nie był związany z tym skutkiem."
  },
  {
    "id": "R06_UPA_01",
    "section": "Klęska i ocena Napoleona",
    "type": "single_choice",
    "prompt": "Które państwo rozdział wskazuje jako najbardziej nieugiętego i jedynego niezwyciężonego przeciwnika Napoleona?",
    "options": [
      "Wielką Brytanię",
      "Austrię",
      "Prusy",
      "Rosję",
      "Saksonię",
      "Księstwo Warszawskie"
    ],
    "answer": 0,
    "explanation": "Wielka Brytania pozostała przez cały okres wojen najbardziej nieugiętym i jedynym niezwyciężonym przeciwnikiem Francji i Napoleona."
  },
  {
    "id": "R06_UPA_02",
    "section": "Klęska i ocena Napoleona",
    "type": "multi_select",
    "prompt": "Zaznacz działania Napoleona wobec państw zależnych w Europie.",
    "options": [
      "Osadzanie członków rodziny lub marszałków na tronach",
      "Wymuszanie uznania zwierzchnictwa francuskiego imperium",
      "Wprowadzanie konstytucji wzorowanych na francuskiej",
      "Wprowadzanie Kodeksu Napoleona",
      "Zostawienie wszystkim państwom pełnej swobody politycznej",
      "Oddanie tronu Burbonom przed 1812 rokiem"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W państwach zależnych Napoleon obsadzał trony ludźmi sobie bliskimi, wymuszał podporządkowanie Francji oraz rozpowszechniał francuskie wzory ustrojowe i prawne."
  },
  {
    "id": "R06_UPA_03",
    "section": "Klęska i ocena Napoleona",
    "type": "fill_in",
    "prompt": "W 1812 roku Napoleon wyruszył na Rosję na czele armii liczącej około __________ tysięcy żołnierzy, w tym polskiego korpusu liczącego __________ tysięcy.",
    "options": null,
    "answer": [
      "600",
      "100"
    ],
    "altAnswers": [
      [
        "600",
        "600 tysięcy",
        "600 tys."
      ],
      [
        "100",
        "100 tysięcy",
        "100 tys."
      ]
    ],
    "image": "r06_kampania_rosyjska_mapa.jpg",
    "explanation": "Wyprawa na Rosję ruszyła z około 600-tysięczną Wielką Armią, w której znajdował się 100-tysięczny korpus polski pod dowództwem Józefa Poniatowskiego."
  },
  {
    "id": "R06_UPA_04",
    "section": "Klęska i ocena Napoleona",
    "type": "true_false",
    "prompt": "Napoleon nazwał kampanię rosyjską drugą wojną polską, aby zachęcić Polaków do mobilizacji.",
    "options": null,
    "answer": true,
    "explanation": "Sejm Księstwa Warszawskiego zapowiedział odrodzenie Polski, a Napoleon nazwał wyprawę drugą wojną polską, co miało mobilizować Polaków."
  },
  {
    "id": "R06_UPA_05",
    "section": "Klęska i ocena Napoleona",
    "type": "multi_select",
    "prompt": "Wybierz przyczyny klęski i zdziesiątkowania Wielkiej Armii podczas odwrotu z Rosji wymienione w rozdziale.",
    "options": [
      "Brak żywności",
      "Wyjątkowo ciężka zima",
      "Napady rosyjskich wojsk",
      "Ataki chłopskich partyzantów",
      "Pożar Moskwy i zniszczenie zapasów",
      "Dezercja korpusu polskiego"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Wielką Armię niszczyły głód, ciężka zima, ataki wojsk rosyjskich i chłopskich partyzantów oraz utrata zapasów po pożarze Moskwy. Korpus polski pozostał wierny Napoleonowi."
  },
  {
    "id": "R06_UPA_06",
    "section": "Klęska i ocena Napoleona",
    "type": "single_choice",
    "prompt": "Jaka część początkowego stanu Wielkiej Armii wróciła z kampanii rosyjskiej według szacunków podanych w rozdziale?",
    "options": [
      "Około 20%",
      "Około 30%",
      "Około 50%",
      "Około 80%",
      "Około 5%",
      "Prawie całość"
    ],
    "answer": 0,
    "explanation": "Rozdział podaje, że z wyprawy rosyjskiej wróciło zaledwie około 20% początkowego stanu całej Wielkiej Armii."
  },
  {
    "id": "R06_UPA_07",
    "section": "Klęska i ocena Napoleona",
    "type": "scenario",
    "prompt": "Jesienią 1813 roku w Saksonii armia Napoleona walczy przez trzy dni z dwukrotnie liczniejszą koalicją. Uczestniczą w niej żołnierze z wielu państw Europy. Co to za bitwa?",
    "options": [
      "Bitwa pod Lipskiem",
      "Bitwa pod Waterloo",
      "Bitwa pod Austerlitz",
      "Bitwa pod Raszynem",
      "Bitwa pod Somosierrą",
      "Bitwa pod Tylżą"
    ],
    "answer": 0,
    "image": "r06_smierc_poniatowskiego_elstera.jpg",
    "explanation": "Opis dotyczy bitwy pod Lipskiem, zwanej bitwą narodów, która przypieczętowała klęskę Napoleona."
  },
  {
    "id": "R06_UPA_08",
    "section": "Klęska i ocena Napoleona",
    "type": "riddle",
    "prompt": "Jak nazywano bitwę pod Lipskiem ze względu na udział żołnierzy z wielu państw Europy?",
    "options": null,
    "answer": "bitwa narodów",
    "altAnswers": [
      "bitwa narodów",
      "Bitwa Narodów",
      "bitwą narodów"
    ],
    "explanation": "Bitwa pod Lipskiem była nazywana bitwą narodów, ponieważ walczyli w niej żołnierze z wielu krajów europejskich."
  },
  {
    "id": "R06_UPA_09",
    "section": "Klęska i ocena Napoleona",
    "type": "true_false",
    "prompt": "Józef Poniatowski został mianowany przez Napoleona marszałkiem Francji jako jedyny nie-Francuz.",
    "options": null,
    "answer": true,
    "image": "r06_smierc_poniatowskiego_elstera.jpg",
    "explanation": "Za wierność Napoleon mianował Poniatowskiego marszałkiem Francji; rozdział podkreśla, że był on jedynym nie-Francuzem z tym tytułem."
  },
  {
    "id": "R06_UPA_10",
    "section": "Klęska i ocena Napoleona",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z upadku Napoleona w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Zesłanie Napoleona na Wyspę Świętej Heleny",
      "Bitwa pod Lipskiem",
      "Wyprawa na Rosję",
      "Abdykacja Napoleona w 1814 roku",
      "Bitwa pod Waterloo"
    ],
    "answer": [
      "Wyprawa na Rosję",
      "Bitwa pod Lipskiem",
      "Abdykacja Napoleona w 1814 roku",
      "Bitwa pod Waterloo",
      "Zesłanie Napoleona na Wyspę Świętej Heleny"
    ],
    "explanation": "Najpierw była kampania rosyjska 1812 roku, potem Lipsk 1813, abdykacja 1814, Waterloo 1815 i zesłanie na Wyspę Świętej Heleny."
  },
  {
    "id": "R06_UPA_11",
    "section": "Klęska i ocena Napoleona",
    "type": "single_choice",
    "prompt": "Co oznacza określenie sto dni Napoleona w rozdziale?",
    "options": [
      "Ostatni okres panowania od powrotu do Francji do klęski pod Waterloo",
      "Sto dni pobytu Napoleona na Elbie",
      "Czas trwania kampanii rosyjskiej",
      "Okres od koronacji do Austerlitz",
      "Sto dni oblężenia Paryża",
      "Czas podróży na Wyspę Świętej Heleny"
    ],
    "answer": 0,
    "image": "r06_bitwa_pod_waterloo.jpg",
    "explanation": "Sto dni Napoleona to ostatni, krótki okres jego władzy po powrocie z Elby, zakończony klęską pod Waterloo."
  },
  {
    "id": "R06_UPA_12",
    "section": "Klęska i ocena Napoleona",
    "type": "odd_one_out",
    "prompt": "Wskaż miejsce, które nie pasuje do losów Napoleona po pierwszej abdykacji i ostatecznej klęsce: Elba, Wyspa Świętej Heleny, Atlantyk, Moskwa.",
    "options": null,
    "answer": "Moskwa",
    "explanation": "Po pierwszej abdykacji Napoleon otrzymał Elbę, a po Waterloo zesłano go na Wyspę Świętej Heleny na Atlantyku. Moskwa dotyczy kampanii 1812 roku, nie miejsca zesłania."
  },
  {
    "id": "R06_HARD_01",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Napoleon został porucznikiem w wieku __________ lat, a generałem w wieku __________ lat.",
    "options": null,
    "answer": [
      "16",
      "25"
    ],
    "altAnswers": [
      [
        "16",
        "szesnastu",
        "szesnaście"
      ],
      [
        "25",
        "dwudziestu pięciu",
        "dwadzieścia pięć"
      ]
    ],
    "explanation": "Podpis pod ilustracją informuje, że Napoleon został porucznikiem w wieku 16 lat, a generałem w wieku 25 lat."
  },
  {
    "id": "R06_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaki sens miał tytuł cesarz Francuzów przyjęty przez Napoleona?",
    "options": [
      "Miał oznaczać, że został cesarzem z woli narodu",
      "Oznaczał koronację wyłącznie z woli papieża",
      "Podkreślał podporządkowanie Francji Habsburgom",
      "Przywracał tytuł króla Francji",
      "Oznaczał likwidację plebiscytu",
      "Miał oznaczać władzę tylko nad arystokracją"
    ],
    "answer": 0,
    "image": "r06_koronacja_w_notre_dame.jpg",
    "explanation": "Tytuł cesarza Francuzów miał wskazywać, że Napoleon został cesarzem z woli narodu, potwierdzonej plebiscytem."
  },
  {
    "id": "R06_HARD_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz regulację Kodeksu Napoleona z jej znaczeniem.",
    "options": null,
    "left": [
      "śluby cywilne",
      "akty stanu cywilnego",
      "nienaruszalność własności prywatnej",
      "wolność handlu i produkcji"
    ],
    "right": [
      "małżeństwa zawierane poza wyłączną kontrolą Kościoła",
      "prowadzenie dokumentów przez urzędników państwowych",
      "ochrona posiadania przed dowolnym naruszeniem",
      "swoboda działalności gospodarczej"
    ],
    "answer": {
      "śluby cywilne": "małżeństwa zawierane poza wyłączną kontrolą Kościoła",
      "akty stanu cywilnego": "prowadzenie dokumentów przez urzędników państwowych",
      "nienaruszalność własności prywatnej": "ochrona posiadania przed dowolnym naruszeniem",
      "wolność handlu i produkcji": "swoboda działalności gospodarczej"
    },
    "explanation": "Wśród regulacji Kodeksu Napoleona wymieniono śluby cywilne, państwowe akta stanu cywilnego, ochronę własności i wolność działalności gospodarczej."
  },
  {
    "id": "R06_HARD_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz skutki zwycięstwa Napoleona pod Austerlitz i kolejnych rozstrzygnięć z 1805-1806 roku.",
    "options": [
      "Austria poprosiła o pokój",
      "Habsburgowie zrezygnowali z godności cesarzy rzymskich narodu niemieckiego",
      "Zniknęło Święte Cesarstwo Rzymskie Narodu Niemieckiego",
      "Powstał Związek Reński podporządkowany Francji",
      "Wielka Brytania została podbita przez Napoleona",
      "Księstwo Warszawskie przestało istnieć"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Zwycięstwa nad Austrią, Rosją i Prusami doprowadziły do pokoju, upadku godności cesarzy rzymskich u Habsburgów, końca Rzeszy i utworzenia Związku Reńskiego."
  },
  {
    "id": "R06_HARD_05",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Prusy sprzeciwiają się zmianom na mapie Niemiec, tworzą z Wielką Brytanią i Rosją koalicję, po czym ponoszą druzgocącą klęskę w błyskawicznej kampanii. Który rok wskazuje rozdział?",
    "options": [
      "1806",
      "1804",
      "1807",
      "1809",
      "1812",
      "1815"
    ],
    "answer": 0,
    "image": "r06_europa_napoleonska_mapa.jpg",
    "explanation": "Błyskawiczna kampania przeciw Prusom została opisana jako wydarzenie 1806 roku."
  },
  {
    "id": "R06_HARD_06",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Po pokoju z Austrią w 1801 roku Bonaparte zachował pełną odrębność organizacyjną polskich Legionów, aby nie drażnić Rosji.",
    "options": null,
    "answer": false,
    "explanation": "Było odwrotnie: aby nie zadrażniać stosunków z Rosją, Bonaparte postanowił zlikwidować odrębność organizacyjną Legionów."
  },
  {
    "id": "R06_HARD_07",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ilu żołnierzom Legionów udało się powrócić z Santo Domingo według rozdziału?",
    "options": [
      "Około 300",
      "Około 1000",
      "Około 3000",
      "Około 6000",
      "Około 10000",
      "Prawie wszystkim"
    ],
    "answer": 0,
    "image": "r06_santo_domingo_legiony.jpg",
    "explanation": "Rozdział podaje, że zaledwie trzystu żołnierzom udało się powrócić z Santo Domingo."
  },
  {
    "id": "R06_HARD_08",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Chłopi w Księstwie Warszawskim uzyskali wolność __________, ale nie otrzymali prawa __________ do uprawianej ziemi.",
    "options": null,
    "answer": [
      "osobistą",
      "własności"
    ],
    "altAnswers": [
      [
        "osobistą",
        "osobista",
        "osobistej"
      ],
      [
        "własności",
        "wlasnosci",
        "własności ziemi"
      ]
    ],
    "explanation": "Konstytucja Księstwa Warszawskiego dawała chłopom wolność osobistą, lecz nie własność uprawianej ziemi."
  },
  {
    "id": "R06_HARD_09",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz informacje zgodne z biogramem księcia Józefa Poniatowskiego i opisem jego służby.",
    "options": [
      "Był bratankiem Stanisława Augusta Poniatowskiego",
      "Urodził się i wychował w Wiedniu",
      "Z czeska nazywano go księciem Pepi",
      "Dowodził wojskami Księstwa Warszawskiego w 1809 roku",
      "Zdradził Napoleona podczas kampanii rosyjskiej",
      "Był autorem Pieśni Legionów Polskich we Włoszech"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Poniatowski był bratankiem ostatniego króla, urodził się i wychował w Wiedniu, nazywano go Pepi, a w 1809 roku dowodził wojskami Księstwa Warszawskiego."
  },
  {
    "id": "R06_HARD_10",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Na paryskim Łuku Triumfalnym wyryto nazwisko polskiego dowódcy, który osłaniał odwrót spod Lipska i zginął w nurtach Elstery. Kto to był?",
    "options": [
      "Józef Poniatowski",
      "Jan Henryk Dąbrowski",
      "Józef Wybicki",
      "Tadeusz Kościuszko",
      "Hugo Kołłątaj",
      "Ludwik XVIII"
    ],
    "answer": 0,
    "image": "r06_luk_triumfalny_paryz.jpg",
    "explanation": "Nazwisko Józefa Poniatowskiego widnieje na Łuku Triumfalnym w Paryżu, a rozdział łączy to z jego wiernością Napoleonowi i śmiercią po bitwie pod Lipskiem."
  },
  {
    "id": "R06_HARD_11",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Koronacja Napoleona na cesarza Francuzów",
      "Utworzenie Legionów Polskich we Włoszech",
      "Utworzenie Księstwa Warszawskiego",
      "Kampania rosyjska Napoleona",
      "Zamach stanu Napoleona",
      "Bitwa pod Waterloo"
    ],
    "answer": [
      "Utworzenie Legionów Polskich we Włoszech",
      "Zamach stanu Napoleona",
      "Koronacja Napoleona na cesarza Francuzów",
      "Utworzenie Księstwa Warszawskiego",
      "Kampania rosyjska Napoleona",
      "Bitwa pod Waterloo"
    ],
    "explanation": "Chronologia to: Legiony 1797, zamach 1799, koronacja 1804, Księstwo Warszawskie 1807, kampania rosyjska 1812 i Waterloo 1815."
  },
  {
    "id": "R06_HARD_12",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jaka budowla w Paryżu, nawiązująca do tradycji starożytnego Rzymu, została wzniesiona przez Napoleona dla uczczenia zwycięskich władców i bitew?",
    "options": null,
    "answer": "Łuk Triumfalny",
    "altAnswers": [
      "Łuk Triumfalny",
      "Luk Triumfalny",
      "Łuk Triumfalny w Paryżu",
      "Luk Triumfalny w Paryzu"
    ],
    "image": "r06_luk_triumfalny_paryz.jpg",
    "explanation": "Łuk Triumfalny w Paryżu nawiązywał do rzymskich budowli upamiętniających zwycięstwa i był elementem napoleońskiego odwoływania się do tradycji Cesarstwa Rzymskiego."
  }
];

const KID_PROMPTS = {
  "R06_WLA_01": "W którym roku Napoleon przejął władzę zamachem?",
  "R06_WLA_07": "Gdzie koronowano Napoleona w 1804 roku?",
  "R06_EUR_01": "Jak nazywała się wielka bitwa Napoleona z 1805 roku?",
  "R06_EUR_06": "Jak nazywał się związek państw niemieckich zależny od Napoleona?",
  "R06_LEG_01": "Kto założył Legiony Polskie?",
  "R06_LEG_05": "Kto napisał Pieśń Legionów Polskich we Włoszech?",
  "R06_LEG_07": "Na jaką wyspę wysłano część legionistów?",
  "R06_KSI_01": "Po jakim pokoju utworzono Księstwo Warszawskie?",
  "R06_KSI_06": "Jak nazywało się polskie państwo utworzone w 1807 roku?",
  "R06_KSI_11": "Jak nazywano polską lekką jazdę spod Somosierry?",
  "R06_UPA_03": "Ilu żołnierzy miała Wielka Armia w 1812 roku?",
  "R06_UPA_08": "Jak inaczej nazywano bitwę pod Lipskiem?",
  "R06_UPA_11": "Co znaczy określenie sto dni Napoleona?",
  "R06_HARD_07": "Ilu legionistów wróciło z Santo Domingo?"
};

const chapter = {
  id: "r06",
  number: 6,
  title: "Epoka napoleońska",
  icon: "🎖️",
  sectionOrder: [
    "Droga Napoleona do władzy",
    "Nowy ład w Europie",
    "Legiony i nadzieje Polaków",
    "Księstwo Warszawskie",
    "Klęska i ocena Napoleona"
  ],
  sectionIcons: {
    "Droga Napoleona do władzy": "⚔️",
    "Nowy ład w Europie": "🗺️",
    "Legiony i nadzieje Polaków": "🇵🇱",
    "Księstwo Warszawskie": "🏛️",
    "Klęska i ocena Napoleona": "🌊"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
