// Skróty sekcji (do identyfikatorów ćwiczeń):
//   STR  = Strefowość krajobrazów
//   LAS  = Wilgotny las równikowy
//   SAW  = Sawanna
//   PUS  = Pustynia gorąca
//   SRD  = Krajobraz śródziemnomorski
//   STE  = Step
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R05_STR_01",
    "section": "Strefowość krajobrazów",
    "type": "single_choice",
    "prompt": "Co oznacza pojęcie pogoda?",
    "options": [
      "Warunki atmosferyczne w danym miejscu i momencie",
      "Całość zjawisk pogodowych z wielu lat",
      "Układ roślinności na mapie świata",
      "Wysokość terenu nad poziomem morza",
      "Suma opadów tylko w styczniu",
      "Stały zestaw pór roku na kontynencie"
    ],
    "answer": 0,
    "explanation": "Pogoda to warunki atmosferyczne panujące w danym miejscu i w konkretnym momencie."
  },
  {
    "id": "R05_STR_02",
    "section": "Strefowość krajobrazów",
    "type": "true_false",
    "prompt": "Klimat opisuje się na podstawie danych o pogodzie z wielu lat.",
    "options": null,
    "answer": true,
    "explanation": "Klimat to całość zjawisk pogodowych charakterystycznych dla danego obszaru w długim okresie."
  },
  {
    "id": "R05_STR_03",
    "section": "Strefowość krajobrazów",
    "type": "multi_select",
    "prompt": "Zaznacz elementy pogody wymienione w rozdziale.",
    "options": [
      "temperatura powietrza",
      "opady",
      "wiatr",
      "zachmurzenie",
      "typ gleby",
      "liczba kontynentów"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r05_strefy_klimatyczne.jpg",
    "explanation": "Do elementów pogody należą między innymi temperatura powietrza, opady, wiatr i zachmurzenie."
  },
  {
    "id": "R05_STR_04",
    "section": "Strefowość krajobrazów",
    "type": "fill_in",
    "prompt": "Klimatogram przedstawia średnie miesięczne wartości __________ i __________ w ciągu roku w danym miejscu.",
    "options": null,
    "answer": [
      "temperatury powietrza",
      "opadów"
    ],
    "altAnswers": [
      [
        "temperatury powietrza",
        "temperatura powietrza"
      ],
      [
        "opadów",
        "opady"
      ]
    ],
    "image": "r05_klimatogram.jpg",
    "explanation": "Klimatogram pokazuje średnie miesięczne wartości temperatury powietrza i opadów."
  },
  {
    "id": "R05_STR_05",
    "section": "Strefowość krajobrazów",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do pozostałych elementów pogody: temperatura powietrza, opady, wiatr, klimat.",
    "options": null,
    "answer": "klimat",
    "explanation": "Temperatura powietrza, opady i wiatr są elementami pogody, a klimat opisuje warunki z wielu lat."
  },
  {
    "id": "R05_STR_06",
    "section": "Strefowość krajobrazów",
    "type": "match",
    "prompt": "Połącz pojęcie z opisem.",
    "options": null,
    "left": [
      "pogoda",
      "klimat",
      "klimatogram"
    ],
    "right": [
      "warunki w danym miejscu i momencie",
      "zjawiska pogodowe z długiego okresu",
      "wykres temperatury i opadów"
    ],
    "answer": {
      "pogoda": "warunki w danym miejscu i momencie",
      "klimat": "zjawiska pogodowe z długiego okresu",
      "klimatogram": "wykres temperatury i opadów"
    },
    "explanation": "Pogoda dotyczy konkretnego momentu, klimat wielu lat, a klimatogram jest wykresem danych klimatycznych."
  },
  {
    "id": "R05_STR_07",
    "section": "Strefowość krajobrazów",
    "type": "single_choice",
    "prompt": "Jak układają się na Ziemi strefy klimatyczne i krajobrazowe?",
    "options": [
      "Pasami wzdłuż równoleżników",
      "Pasami wzdłuż południków",
      "Wyłącznie wokół gór",
      "Tylko przy wybrzeżach oceanów",
      "Losowo na każdym kontynencie",
      "Tylko na półkuli północnej"
    ],
    "answer": 0,
    "explanation": "Strefy klimatyczne i krajobrazowe układają się pasami rozciągniętymi wzdłuż równoleżników."
  },
  {
    "id": "R05_STR_08",
    "section": "Strefowość krajobrazów",
    "type": "scenario",
    "prompt": "Uczeń wygląda przez okno i mówi: Teraz jest pochmurno i zaczyna padać. Do czego odnosi się jego obserwacja?",
    "options": [
      "do pogody",
      "do klimatu",
      "do piętrowości krajobrazów",
      "do strefy glebowej",
      "do mapy hipsometrycznej",
      "do ruchu płyt litosfery"
    ],
    "answer": 0,
    "explanation": "Opis zachmurzenia i opadów w konkretnym momencie dotyczy pogody."
  },
  {
    "id": "R05_STR_09",
    "section": "Strefowość krajobrazów",
    "type": "riddle",
    "prompt": "Układ krajobrazów zmieniających się wraz z wysokością nad poziomem morza to...",
    "options": null,
    "answer": "piętrowość krajobrazów",
    "altAnswers": [
      "piętrowość krajobrazów",
      "pietrowosc krajobrazow",
      "piętrowość"
    ],
    "image": "r05_strefy_klimatyczne.jpg",
    "explanation": "W górach wraz z wysokością klimat jest chłodniejszy, roślinność niższa i uboższa, dlatego krajobrazy układają się piętrowo."
  },
  {
    "id": "R05_STR_10",
    "section": "Strefowość krajobrazów",
    "type": "sequence",
    "prompt": "Ułóż krajobrazy od najbliższego równikowi do położonego dalej od niego na półkuli północnej.",
    "options": null,
    "items": [
      "pustynia gorąca",
      "step",
      "wilgotny las równikowy",
      "sawanna",
      "krajobraz śródziemnomorski"
    ],
    "answer": [
      "wilgotny las równikowy",
      "sawanna",
      "pustynia gorąca",
      "krajobraz śródziemnomorski",
      "step"
    ],
    "image": "r05_klimatogram.jpg",
    "explanation": "W materiałach działu podróż przez krajobrazy prowadzi od wilgotnych lasów równikowych przez sawanny i pustynie gorące ku krajobrazom podzwrotnikowym oraz stepom."
  },
  {
    "id": "R05_LAS_01",
    "section": "Wilgotny las równikowy",
    "type": "single_choice",
    "prompt": "Gdzie głównie występują wilgotne lasy równikowe?",
    "options": [
      "W Ameryce Południowej, środkowej Afryce i południowo-wschodniej Azji",
      "Tylko w Europie i Antarktydzie",
      "Wyłącznie w pobliżu kół podbiegunowych",
      "Na wszystkich pustyniach gorących",
      "Głównie w centralnej Ameryce Północnej",
      "Tylko na wyspach Morza Śródziemnego"
    ],
    "answer": 0,
    "image": "r05_las_rownikowy.jpg",
    "explanation": "Wilgotne lasy równikowe rosną głównie w sąsiedztwie równika w Ameryce Południowej, środkowej Afryce i południowo-wschodniej Azji."
  },
  {
    "id": "R05_LAS_02",
    "section": "Wilgotny las równikowy",
    "type": "true_false",
    "prompt": "W wilgotnym lesie równikowym występują wyraźne cztery pory roku.",
    "options": null,
    "answer": false,
    "explanation": "Pogoda w tej strefie nie zmienia się znacząco, dlatego nie wyróżnia się tam pór roku."
  },
  {
    "id": "R05_LAS_03",
    "section": "Wilgotny las równikowy",
    "type": "multi_select",
    "prompt": "Zaznacz cechy klimatu wilgotnego lasu równikowego.",
    "options": [
      "wysoka temperatura przez cały rok",
      "duża ilość opadów przez cały rok",
      "brak wyraźnych pór roku",
      "mroźne zimy",
      "opady tylko zimą",
      "długie letnie susze"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Klimat równikowy wybitnie wilgotny cechuje się wysoką temperaturą i dużą ilością opadów przez cały rok, bez wyraźnych pór roku."
  },
  {
    "id": "R05_LAS_04",
    "section": "Wilgotny las równikowy",
    "type": "fill_in",
    "prompt": "Wilgotne lasy równikowe nazywa się zielonymi __________ Ziemi.",
    "options": null,
    "answer": [
      "płucami"
    ],
    "altAnswers": [
      [
        "płucami",
        "plucami"
      ]
    ],
    "image": "r05_las_rownikowy.jpg",
    "explanation": "Nazywa się je zielonymi płucami Ziemi ze względu na powierzchnię oraz rolę w oczyszczaniu powietrza."
  },
  {
    "id": "R05_LAS_05",
    "section": "Wilgotny las równikowy",
    "type": "single_choice",
    "prompt": "Dlaczego lasy równikowe są nazywane wiecznie zielonymi?",
    "options": [
      "Bo liście drzew nie zmieniają barwy w ciągu roku",
      "Bo drzewa rosną tylko w maju",
      "Bo występują tam wyłącznie iglaki",
      "Bo wszystkie rośliny rosną pod śniegiem",
      "Bo w porze suchej wszystkie drzewa zrzucają liście",
      "Bo rosną tylko na zielonych glebach"
    ],
    "answer": 0,
    "image": "r05_warstwy_lasu.jpg",
    "explanation": "Liście rosnących tam drzew nie zmieniają barwy w ciągu roku."
  },
  {
    "id": "R05_LAS_06",
    "section": "Wilgotny las równikowy",
    "type": "match",
    "prompt": "Połącz zwierzę z kontynentem lub regionem występowania podanym w rozdziale.",
    "options": null,
    "left": [
      "tapir",
      "goryl",
      "orangutan",
      "tygrys"
    ],
    "right": [
      "Ameryka Południowa",
      "Afryka",
      "południowo-wschodnia Azja",
      "Azja"
    ],
    "answer": {
      "tapir": "Ameryka Południowa",
      "goryl": "Afryka",
      "orangutan": "południowo-wschodnia Azja",
      "tygrys": "Azja"
    },
    "explanation": "Rozdział wskazuje przykładowe zwierzęta lasów równikowych z różnych części świata."
  },
  {
    "id": "R05_LAS_07",
    "section": "Wilgotny las równikowy",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do zwierząt wilgotnego lasu równikowego: tukan, goryl, orangutan, suhak.",
    "options": null,
    "answer": "suhak",
    "explanation": "Suhak jest zwierzęciem stepowym, a tukan, goryl i orangutan są wymienione przy lasach równikowych."
  },
  {
    "id": "R05_LAS_08",
    "section": "Wilgotny las równikowy",
    "type": "scenario",
    "prompt": "W osadzie często grożą zalania po dużych opadach, dlatego domy stoją na palach. W jakiej strefie krajobrazowej najłatwiej wyobrazić sobie taki opis?",
    "options": [
      "w wilgotnym lesie równikowym",
      "na stepie",
      "na pustyni gorącej",
      "w krajobrazie śródziemnomorskim",
      "na tundrze",
      "w pustyni lodowej"
    ],
    "answer": 0,
    "explanation": "W wilgotnych lasach równikowych wskutek dużych opadów niektóre obszary są narażone na zalanie, dlatego buduje się domy na palach."
  },
  {
    "id": "R05_LAS_09",
    "section": "Wilgotny las równikowy",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do kategorii.",
    "options": null,
    "items": [
      "liany",
      "tapiry",
      "rybołówstwo",
      "wanilia",
      "tukany",
      "łowiectwo"
    ],
    "categories": [
      "roślinność i uprawy",
      "zwierzęta",
      "zajęcia mieszkańców"
    ],
    "answer": {
      "roślinność i uprawy": [
        "liany",
        "wanilia"
      ],
      "zwierzęta": [
        "tapiry",
        "tukany"
      ],
      "zajęcia mieszkańców": [
        "rybołówstwo",
        "łowiectwo"
      ]
    },
    "explanation": "W rozdziale osobno opisano roślinność, zwierzęta i zajęcia mieszkańców wilgotnych lasów równikowych."
  },
  {
    "id": "R05_LAS_10",
    "section": "Wilgotny las równikowy",
    "type": "riddle",
    "prompt": "Proces wycinania lasów w celu uzyskania miejsca pod uprawy, zabudowę lub drewno to...",
    "options": null,
    "answer": "wylesianie",
    "altAnswers": [
      "wylesianie",
      "wycinka lasów",
      "wycinanie lasów"
    ],
    "explanation": "W rozdziale taki proces nazwano wylesianiem i opisano jego negatywne skutki przyrodnicze."
  },
  {
    "id": "R05_SAW_01",
    "section": "Sawanna",
    "type": "single_choice",
    "prompt": "Czym są sawanny?",
    "options": [
      "Rozległymi terenami trawiastymi z pojedynczymi drzewami",
      "Gęstymi lasami o wielu piętrach",
      "Obszarami całkowicie pokrytymi lodem",
      "Wyłącznie kamienistymi wybrzeżami",
      "Wilgotnymi bagnami z dużą liczbą jezior",
      "Zawsze zielonymi zaroślami przy Morzu Śródziemnym"
    ],
    "answer": 0,
    "explanation": "Sawanny to rozległe tereny trawiaste z pojedynczymi drzewami, takimi jak akacje i baobaby."
  },
  {
    "id": "R05_SAW_02",
    "section": "Sawanna",
    "type": "true_false",
    "prompt": "Sawanny występują na wszystkich kontynentach z wyjątkiem Europy i Antarktydy.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział podaje, że sawanny występują na większości kontynentów poza Europą i Antarktydą."
  },
  {
    "id": "R05_SAW_03",
    "section": "Sawanna",
    "type": "fill_in",
    "prompt": "Klimat typowy dla sawanny to klimat __________.",
    "options": null,
    "answer": [
      "podrównikowy"
    ],
    "altAnswers": [
      [
        "podrównikowy",
        "podrownikowy"
      ]
    ],
    "explanation": "Klimat sawanny z wysoką temperaturą przez cały rok oraz porą deszczową i suchą nazywamy podrównikowym."
  },
  {
    "id": "R05_SAW_04",
    "section": "Sawanna",
    "type": "multi_select",
    "prompt": "Zaznacz przystosowania drzew sawanny do suszy.",
    "options": [
      "grube pnie z zapasem wody",
      "rozległe korzenie",
      "niewielkie liście",
      "zrzucanie liści w porze suchej",
      "igły odporne na mróz",
      "korony zanurzone stale w wodzie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r05_sawanna_baobab_akacja.jpg",
    "explanation": "Drzewa sawanny mają między innymi grube pnie gromadzące wodę, rozległe korzenie oraz niewielkie liście ograniczające utratę wody."
  },
  {
    "id": "R05_SAW_05",
    "section": "Sawanna",
    "type": "single_choice",
    "prompt": "Które drzewa są typowe dla sawanny według rozdziału?",
    "options": [
      "akacje i baobaby",
      "cyprysy i dęby korkowe",
      "świerki i modrzewie",
      "palmy daktylowe i kaktusy",
      "sosny pinie i oleandry",
      "brzozy i klony"
    ],
    "answer": 0,
    "image": "r05_sawanna_baobab_akacja.jpg",
    "explanation": "W opisie sawanny wymieniono baobaby i akacje jako pojedyncze drzewa rosnące na tych terenach."
  },
  {
    "id": "R05_SAW_06",
    "section": "Sawanna",
    "type": "match",
    "prompt": "Połącz grupę pokarmową ze zwierzęciem afrykańskiej sawanny.",
    "options": null,
    "left": [
      "roślinożerne",
      "drapieżne",
      "padlinożerne"
    ],
    "right": [
      "zebra",
      "lew",
      "sęp"
    ],
    "answer": {
      "roślinożerne": "zebra",
      "drapieżne": "lew",
      "padlinożerne": "sęp"
    },
    "image": "r05_migracja_sawanny.jpg",
    "explanation": "Rozdział dzieli przykładowe zwierzęta sawanny na roślinożerne, drapieżne i padlinożerne."
  },
  {
    "id": "R05_SAW_07",
    "section": "Sawanna",
    "type": "riddle",
    "prompt": "Wędrówka ludzi lub zwierząt w poszukiwaniu lepszych warunków do życia to...",
    "options": null,
    "answer": "migracja",
    "altAnswers": [
      "migracja",
      "wędrówka",
      "wedrowka"
    ],
    "image": "r05_migracja_sawanny.jpg",
    "explanation": "Rozdział definiuje migrację jako przemieszczanie się ludzi lub zwierząt w poszukiwaniu lepszych warunków do życia."
  },
  {
    "id": "R05_SAW_08",
    "section": "Sawanna",
    "type": "scenario",
    "prompt": "Nadchodzi okres suszy, trawa wysycha, więc pasterze przenoszą się ze zwierzętami tam, gdzie znajdą więcej pożywienia. Jak nazywa się taki sposób hodowli?",
    "options": [
      "pasterstwo koczownicze",
      "rybołówstwo osiadłe",
      "plantacja palmowa",
      "wylesianie",
      "uprawa tarasowa",
      "górnictwo odkrywkowe"
    ],
    "answer": 0,
    "explanation": "Taki sposób hodowli opisano jako pasterstwo koczownicze."
  },
  {
    "id": "R05_SAW_09",
    "section": "Sawanna",
    "type": "sort",
    "prompt": "Rozdziel zwierzęta sawanny według grupy pokarmowej.",
    "options": null,
    "items": [
      "zebra",
      "żyrafa",
      "lew",
      "gepard",
      "krokuta",
      "szakal"
    ],
    "categories": [
      "roślinożerne",
      "drapieżne",
      "padlinożerne"
    ],
    "answer": {
      "roślinożerne": [
        "zebra",
        "żyrafa"
      ],
      "drapieżne": [
        "lew",
        "gepard"
      ],
      "padlinożerne": [
        "krokuta",
        "szakal"
      ]
    },
    "explanation": "W rozdziale zebry i żyrafy są roślinożerne, lwy i gepardy drapieżne, a krokuty i szakale padlinożerne."
  },
  {
    "id": "R05_SAW_10",
    "section": "Sawanna",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do sawanny: akacja, baobab, gnu, makia.",
    "options": null,
    "answer": "makia",
    "explanation": "Makia jest roślinnością krajobrazu śródziemnomorskiego, a akacje, baobaby i gnu są związane z sawanną."
  },
  {
    "id": "R05_PUS_01",
    "section": "Pustynia gorąca",
    "type": "single_choice",
    "prompt": "Jak rozdział definiuje pustynię gorącą?",
    "options": [
      "Bardzo suchy obszar lądowy prawie pozbawiony roślinności",
      "Wilgotny las o wielu piętrach",
      "Obszar trawiasty z akacjami i baobabami",
      "Region z gorącym i suchym latem oraz deszczową zimą",
      "Obszar z czterema porami roku i żyznymi glebami",
      "Strefa stale pokryta śniegiem"
    ],
    "answer": 0,
    "image": "r05_pustynia_goraca.jpg",
    "explanation": "Pustynia gorąca to bardzo suchy obszar lądowy pozbawiony roślinności lub z bardzo niewielką jej ilością."
  },
  {
    "id": "R05_PUS_02",
    "section": "Pustynia gorąca",
    "type": "multi_select",
    "prompt": "Zaznacz cechy krajobrazu pustyni gorącej.",
    "options": [
      "bardzo mało opadów",
      "uboga roślinność",
      "piach, żwir lub skały",
      "gęste piętra drzew",
      "obfite deszcze każdego popołudnia",
      "cztery mroźne pory roku"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r05_pustynia_goraca.jpg",
    "explanation": "Pustynie gorące są bardzo suche, mają bardzo ubogą roślinność i są pokryte piachem, żwirem lub innymi skałami."
  },
  {
    "id": "R05_PUS_03",
    "section": "Pustynia gorąca",
    "type": "true_false",
    "prompt": "Pustynie gorące występują głównie w pobliżu zwrotników.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział podaje, że pustynie gorące występują głównie w pobliżu zwrotników."
  },
  {
    "id": "R05_PUS_04",
    "section": "Pustynia gorąca",
    "type": "fill_in",
    "prompt": "Na większości pustyń gorących panuje klimat __________ suchy.",
    "options": null,
    "answer": [
      "zwrotnikowy"
    ],
    "altAnswers": [
      [
        "zwrotnikowy"
      ]
    ],
    "explanation": "Klimat typowy dla większości pustyń gorących to klimat zwrotnikowy suchy."
  },
  {
    "id": "R05_PUS_05",
    "section": "Pustynia gorąca",
    "type": "single_choice",
    "prompt": "Która pustynia gorąca została w rozdziale wskazana jako największa na świecie?",
    "options": [
      "Sahara",
      "Mojave",
      "Atakama",
      "Wielka Pustynia Wiktorii",
      "Gobi",
      "Kalahari"
    ],
    "answer": 0,
    "explanation": "W rozdziale największą pustynią gorącą nazwano Saharę w północnej Afryce."
  },
  {
    "id": "R05_PUS_06",
    "section": "Pustynia gorąca",
    "type": "match",
    "prompt": "Połącz pojęcie z opisem z lekcji o pustyni gorącej.",
    "options": null,
    "left": [
      "oaza",
      "karawana",
      "dromader"
    ],
    "right": [
      "miejsce z płytko położoną wodą podziemną",
      "grupa ludzi podróżujących na wielbłądach",
      "wielbłąd jednogarbny"
    ],
    "answer": {
      "oaza": "miejsce z płytko położoną wodą podziemną",
      "karawana": "grupa ludzi podróżujących na wielbłądach",
      "dromader": "wielbłąd jednogarbny"
    },
    "explanation": "W rozdziale wyjaśniono oazy, karawany i przykładowe zwierzę pustyni."
  },
  {
    "id": "R05_PUS_07",
    "section": "Pustynia gorąca",
    "type": "scenario",
    "prompt": "Podróżnik widzi palmy daktylowe, figi i wodę na środku bardzo suchego obszaru. Jak nazywa się takie miejsce?",
    "options": [
      "oaza",
      "pampa",
      "preria",
      "makia",
      "sawanna",
      "plantacja palmowa"
    ],
    "answer": 0,
    "image": "r05_oaza.jpg",
    "explanation": "Na pustyniach gorących stałe osady i uprawy spotyka się w oazach, czyli miejscach z dostępem do wody."
  },
  {
    "id": "R05_PUS_08",
    "section": "Pustynia gorąca",
    "type": "riddle",
    "prompt": "Lis pustynny spędzający dzień w norze i wychodzący nocą to...",
    "options": null,
    "answer": "fenek",
    "altAnswers": [
      "fenek",
      "lis pustynny"
    ],
    "image": "r05_oaza.jpg",
    "explanation": "Fenek, czyli lis pustynny, unika największego upału, spędzając dzień w norze."
  },
  {
    "id": "R05_PUS_09",
    "section": "Pustynia gorąca",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do zwierząt pustyni gorącej: dromader, fenek, skorpion, okapi.",
    "options": null,
    "answer": "okapi",
    "explanation": "Okapi jest wymienione przy wilgotnym lesie równikowym, a pozostałe zwierzęta przy pustyni gorącej."
  },
  {
    "id": "R05_PUS_10",
    "section": "Pustynia gorąca",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do stref pustynnych i niepustynnych.",
    "options": null,
    "items": [
      "oaza",
      "dromader",
      "kaktus",
      "liany",
      "goryl",
      "makia"
    ],
    "categories": [
      "pustynia gorąca",
      "inne strefy"
    ],
    "answer": {
      "pustynia gorąca": [
        "oaza",
        "dromader",
        "kaktus"
      ],
      "inne strefy": [
        "liany",
        "goryl",
        "makia"
      ]
    },
    "explanation": "Pustynię gorącą cechują oazy, dromadery i kaktusy, natomiast liany, goryle i makia należą do innych stref."
  },
  {
    "id": "R05_SRD_01",
    "section": "Krajobraz śródziemnomorski",
    "type": "single_choice",
    "prompt": "Skąd pochodzi nazwa krajobrazu śródziemnomorskiego?",
    "options": [
      "Od Morza Śródziemnego",
      "Od Oceanu Arktycznego",
      "Od rzeki Amazonki",
      "Od pustyni Mojave",
      "Od preriowej trawy",
      "Od jezior stepowych"
    ],
    "answer": 0,
    "image": "r05_morze_srodziemne.jpg",
    "explanation": "Nazwa pochodzi od Morza Śródziemnego, leżącego między Afryką, Europą i Azją."
  },
  {
    "id": "R05_SRD_02",
    "section": "Krajobraz śródziemnomorski",
    "type": "true_false",
    "prompt": "Krajobraz śródziemnomorski występuje głównie w otoczeniu Morza Śródziemnego.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział wskazuje, że występuje przede wszystkim wokół Morza Śródziemnego."
  },
  {
    "id": "R05_SRD_03",
    "section": "Krajobraz śródziemnomorski",
    "type": "multi_select",
    "prompt": "Zaznacz cechy klimatu śródziemnomorskiego.",
    "options": [
      "gorące i suche lato",
      "deszczowa i dość ciepła zima",
      "rzadkie mrozy",
      "bardzo mroźna zima przez pół roku",
      "pora deszczowa tylko latem",
      "brak opadów przez wiele lat"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "W tej strefie lato jest gorące i suche, a zima deszczowa i dość ciepła, z mrozem pojawiającym się rzadko."
  },
  {
    "id": "R05_SRD_04",
    "section": "Krajobraz śródziemnomorski",
    "type": "fill_in",
    "prompt": "Roślinność śródziemnomorska z niewysokimi drzewami i krzewami o twardych liściach to __________.",
    "options": null,
    "answer": [
      "makia"
    ],
    "altAnswers": [
      [
        "makia"
      ]
    ],
    "explanation": "Wśród roślinności śródziemnomorskiej dominuje makia."
  },
  {
    "id": "R05_SRD_05",
    "section": "Krajobraz śródziemnomorski",
    "type": "single_choice",
    "prompt": "Która cecha liści makii pomaga ograniczać utratę wody w gorące lato?",
    "options": [
      "Są twarde, grube i czasem kolczaste",
      "Są bardzo delikatne i stale mokre",
      "Są całkowicie zanurzone pod wodą",
      "Opadają codziennie wieczorem",
      "Są przez cały rok pokryte lodem",
      "Rosną tylko w głębokim cieniu"
    ],
    "answer": 0,
    "image": "r05_makia.jpg",
    "explanation": "Twarde, grube, czasem kolczaste liście skutecznie wstrzymują odparowywanie wody."
  },
  {
    "id": "R05_SRD_06",
    "section": "Krajobraz śródziemnomorski",
    "type": "match",
    "prompt": "Połącz element z krajobrazem śródziemnomorskim.",
    "options": null,
    "left": [
      "winorośl",
      "drzewo oliwne",
      "muflon",
      "jeżowiec"
    ],
    "right": [
      "winogrona",
      "oliwki",
      "ssak lądowy",
      "zwierzę morskie"
    ],
    "answer": {
      "winorośl": "winogrona",
      "drzewo oliwne": "oliwki",
      "muflon": "ssak lądowy",
      "jeżowiec": "zwierzę morskie"
    },
    "explanation": "Rozdział wymienia typowe rośliny uprawne i zwierzęta spotykane w tej strefie."
  },
  {
    "id": "R05_SRD_07",
    "section": "Krajobraz śródziemnomorski",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do roślinności śródziemnomorskiej: cyprys, dąb korkowy, oleander, baobab.",
    "options": null,
    "answer": "baobab",
    "explanation": "Baobab jest charakterystyczny dla sawanny, a cyprys, dąb korkowy i oleander są wymienione przy krajobrazie śródziemnomorskim."
  },
  {
    "id": "R05_SRD_08",
    "section": "Krajobraz śródziemnomorski",
    "type": "scenario",
    "prompt": "Między godziną 14 a 17 część urzędów, sklepów i restauracji jest zamknięta, bo trwa przerwa w czasie największego upału. Jak nazywa się ta przerwa?",
    "options": [
      "sjesta",
      "migracja",
      "karawana",
      "monsun",
      "wylesianie",
      "pampa"
    ],
    "answer": 0,
    "image": "r05_morze_srodziemne.jpg",
    "explanation": "W wielu krajach śródziemnomorskich taka przerwa w pracy nazywa się sjestą."
  },
  {
    "id": "R05_SRD_09",
    "section": "Krajobraz śródziemnomorski",
    "type": "sort",
    "prompt": "Rozdziel elementy krajobrazu śródziemnomorskiego.",
    "options": null,
    "items": [
      "cyprys",
      "oleander",
      "delfin",
      "muflon",
      "turystyka",
      "połów ryb"
    ],
    "categories": [
      "rośliny",
      "zwierzęta",
      "gospodarka"
    ],
    "answer": {
      "rośliny": [
        "cyprys",
        "oleander"
      ],
      "zwierzęta": [
        "delfin",
        "muflon"
      ],
      "gospodarka": [
        "turystyka",
        "połów ryb"
      ]
    },
    "explanation": "W rozdziale osobno opisano rośliny, zwierzęta i zajęcia ludzi w regionie śródziemnomorskim."
  },
  {
    "id": "R05_SRD_10",
    "section": "Krajobraz śródziemnomorski",
    "type": "riddle",
    "prompt": "Przerwa w pracy w czasie największego upału w wielu krajach śródziemnomorskich to...",
    "options": null,
    "answer": "sjesta",
    "altAnswers": [
      "sjesta"
    ],
    "explanation": "W rozdziale podano, że taka przerwa w pracy zwykle między 14 a 17 jest nazywana sjestą."
  },
  {
    "id": "R05_STE_01",
    "section": "Step",
    "type": "single_choice",
    "prompt": "Czym są stepy?",
    "options": [
      "Rozległymi trawiastymi terenami prawie bez drzew",
      "Gęstymi lasami przy równiku",
      "Obszarami z makią przy ciepłym morzu",
      "Pustyniami z oazami i kaktusami",
      "Górskimi piętrami roślinności",
      "Miejscami stale zalewanymi przez opady"
    ],
    "answer": 0,
    "image": "r05_step_preria.jpg",
    "explanation": "Stepy to rozległe trawiaste tereny, prawie pozbawione drzew, z rzadko występującymi krzewami."
  },
  {
    "id": "R05_STE_02",
    "section": "Step",
    "type": "fill_in",
    "prompt": "Stepy w Ameryce Północnej nazywa się __________, a w Ameryce Południowej __________.",
    "options": null,
    "answer": [
      "preriami",
      "pampami"
    ],
    "altAnswers": [
      [
        "preriami",
        "prerie"
      ],
      [
        "pampami",
        "pampasami",
        "pampy",
        "pampasy"
      ]
    ],
    "explanation": "Rozdział podaje, że stepy w Ameryce Północnej to prerie, a w Ameryce Południowej pampy lub pampasy."
  },
  {
    "id": "R05_STE_03",
    "section": "Step",
    "type": "true_false",
    "prompt": "Na większości stepów panuje klimat umiarkowany ciepły kontynentalny.",
    "options": null,
    "answer": true,
    "explanation": "Taki klimat wskazano w rozdziale jako typowy dla większości stepów."
  },
  {
    "id": "R05_STE_04",
    "section": "Step",
    "type": "multi_select",
    "prompt": "Zaznacz cechy klimatu stepowego według rozdziału.",
    "options": [
      "cztery pory roku",
      "gorące lato",
      "mroźna zima",
      "niewielkie opady",
      "codzienne ulewne deszcze",
      "brak zimy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Na stepach występują cztery pory roku, lato jest gorące, zima mroźna, a opadów jest niewiele."
  },
  {
    "id": "R05_STE_05",
    "section": "Step",
    "type": "single_choice",
    "prompt": "Jak nazywają się bardzo żyzne gleby powstałe na stepach?",
    "options": [
      "czarnoziemy",
      "mady rzeczne",
      "piaski pustynne",
      "lessy lodowcowe",
      "gleby bagienne",
      "żwiry wulkaniczne"
    ],
    "answer": 0,
    "image": "r05_step_preria.jpg",
    "explanation": "Szczątki roślin wzbogacają glebę, dzięki czemu na stepach wykształciły się czarnoziemy."
  },
  {
    "id": "R05_STE_06",
    "section": "Step",
    "type": "match",
    "prompt": "Połącz zwierzę stepowe z obszarem podanym w rozdziale.",
    "options": null,
    "left": [
      "bizony",
      "nandu",
      "suhaki",
      "pieski preriowe"
    ],
    "right": [
      "Ameryka Północna",
      "Ameryka Południowa",
      "Azja",
      "prerie Ameryki Północnej"
    ],
    "answer": {
      "bizony": "Ameryka Północna",
      "nandu": "Ameryka Południowa",
      "suhaki": "Azja",
      "pieski preriowe": "prerie Ameryki Północnej"
    },
    "explanation": "Rozdział wymienia różne zwierzęta stepów Ameryki Północnej, Ameryki Południowej i Azji."
  },
  {
    "id": "R05_STE_07",
    "section": "Step",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do stepu: trawy, czarnoziemy, jurta, meduza.",
    "options": null,
    "answer": "meduza",
    "explanation": "Meduza jest wymieniona przy Morzu Śródziemnym, a trawy, czarnoziemy i jurty są związane ze stepem."
  },
  {
    "id": "R05_STE_08",
    "section": "Step",
    "type": "scenario",
    "prompt": "Na azjatyckim stepie pasterze stawiają duży namiot z drewnianego szkieletu pokrytego skórami. Jak nazywa się taki namiot?",
    "options": [
      "jurta",
      "oaza",
      "makia",
      "karawana",
      "preria",
      "baobab"
    ],
    "answer": 0,
    "image": "r05_jurta_stepowa.jpg",
    "explanation": "Tradycyjnym schronieniem koczowników na azjatyckich stepach są jurty."
  },
  {
    "id": "R05_STE_09",
    "section": "Step",
    "type": "sort",
    "prompt": "Rozdziel elementy związane ze stepem według kontynentu.",
    "options": null,
    "items": [
      "bizony",
      "pieski preriowe",
      "nandu",
      "nibylisy pampasowe",
      "suhaki",
      "wielbłądy dwugarbne"
    ],
    "categories": [
      "Ameryka Północna",
      "Ameryka Południowa",
      "Azja"
    ],
    "answer": {
      "Ameryka Północna": [
        "bizony",
        "pieski preriowe"
      ],
      "Ameryka Południowa": [
        "nandu",
        "nibylisy pampasowe"
      ],
      "Azja": [
        "suhaki",
        "wielbłądy dwugarbne"
      ]
    },
    "explanation": "Rozdział pokazuje przykładowe zwierzęta stepowe z Ameryki Północnej, Ameryki Południowej i Azji."
  },
  {
    "id": "R05_STE_10",
    "section": "Step",
    "type": "riddle",
    "prompt": "Duży namiot koczowników azjatyckich stepów z drewnianego szkieletu pokrytego skórami to...",
    "options": null,
    "answer": "jurta",
    "altAnswers": [
      "jurta",
      "jurtach"
    ],
    "image": "r05_jurta_stepowa.jpg",
    "explanation": "Na azjatyckich stepach pasterze mieszkają w jurtach."
  },
  {
    "id": "R05_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która para najlepiej pokazuje różnicę między pogodą a klimatem?",
    "options": [
      "dzisiejsze opady oraz średnie warunki z wielu lat",
      "temperatura i wiatr w tej samej chwili",
      "opady i zachmurzenie w tym samym mieście",
      "jedna burza i jeden deszcz po południu",
      "pustynia i oaza na tej samej mapie",
      "sawanna i step jako dwa trawiaste krajobrazy"
    ],
    "answer": 0,
    "explanation": "Pogoda dotyczy danego miejsca i momentu, a klimat opisuje warunki na podstawie danych z wielu lat."
  },
  {
    "id": "R05_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz stwierdzenia poprawne o związku klimatu, roślinności i krajobrazu.",
    "options": [
      "krajobrazy różnią się głównie typem roślinności",
      "typ roślinności zależy w dużej mierze od klimatu",
      "wysokość nad poziomem morza wpływa na krajobraz",
      "wzrost wysokości zwykle ociepla klimat",
      "strefy krajobrazowe nie mają związku z klimatem",
      "klimatogram pokazuje tylko kierunki wiatrów"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Krajobrazy różnią się głównie typem roślinności zależnym od klimatu, a w górach dodatkowo ważna jest wysokość nad poziomem morza."
  },
  {
    "id": "R05_HARD_03",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W pewnym miejscu przez cały rok jest bardzo ciepło, ale deszcze koncentrują się w jednej porze roku, po której następuje pora sucha. Jaki krajobraz najbardziej pasuje do tego opisu?",
    "options": [
      "sawanna",
      "wilgotny las równikowy",
      "step",
      "krajobraz śródziemnomorski",
      "pustynia gorąca",
      "pustynia lodowa"
    ],
    "answer": 0,
    "explanation": "Taki klimat podrównikowy, z porą deszczową i suchą oraz wysoką temperaturą przez cały rok, jest typowy dla sawanny."
  },
  {
    "id": "R05_HARD_04",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz typ klimatu z krajobrazem opisanym w dziale.",
    "options": null,
    "left": [
      "równikowy wybitnie wilgotny",
      "podrównikowy",
      "zwrotnikowy suchy",
      "podzwrotnikowy morski",
      "umiarkowany ciepły kontynentalny"
    ],
    "right": [
      "wilgotny las równikowy",
      "sawanna",
      "pustynia gorąca",
      "krajobraz śródziemnomorski",
      "step"
    ],
    "answer": {
      "równikowy wybitnie wilgotny": "wilgotny las równikowy",
      "podrównikowy": "sawanna",
      "zwrotnikowy suchy": "pustynia gorąca",
      "podzwrotnikowy morski": "krajobraz śródziemnomorski",
      "umiarkowany ciepły kontynentalny": "step"
    },
    "explanation": "Każdy krajobraz w dziale ma wskazany typ klimatu lub charakterystyczny przebieg pogody w roku."
  },
  {
    "id": "R05_HARD_05",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do właściwych krajobrazów.",
    "options": null,
    "items": [
      "liany",
      "baobaby",
      "kaktusy",
      "makia",
      "czarnoziemy",
      "tukany",
      "gnu",
      "fenki",
      "jeżowce",
      "suhaki"
    ],
    "categories": [
      "las równikowy",
      "sawanna",
      "pustynia gorąca",
      "śródziemnomorski",
      "step"
    ],
    "answer": {
      "las równikowy": [
        "liany",
        "tukany"
      ],
      "sawanna": [
        "baobaby",
        "gnu"
      ],
      "pustynia gorąca": [
        "kaktusy",
        "fenki"
      ],
      "śródziemnomorski": [
        "makia",
        "jeżowce"
      ],
      "step": [
        "czarnoziemy",
        "suhaki"
      ]
    },
    "explanation": "Elementy pochodzą z opisów roślinności i zwierząt poszczególnych krajobrazów działu."
  },
  {
    "id": "R05_HARD_06",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż typowy dzień w wilgotnym lesie równikowym zgodnie z opisem z rozdziału.",
    "options": null,
    "items": [
      "pada deszcz",
      "jest wysoka temperatura",
      "woda obficie paruje",
      "powstają chmury"
    ],
    "answer": [
      "jest wysoka temperatura",
      "woda obficie paruje",
      "powstają chmury",
      "pada deszcz"
    ],
    "explanation": "Wysoka temperatura powoduje intensywne parowanie, powstawanie chmur i popołudniowe lub wieczorne opady deszczu."
  },
  {
    "id": "R05_HARD_07",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Miejsce na pustyni gorącej, gdzie wody podziemne są płytko pod ziemią lub na powierzchni, to...",
    "options": null,
    "answer": "oaza",
    "altAnswers": [
      "oaza",
      "oazą",
      "oazy"
    ],
    "explanation": "Takie miejsce nazwano oazą; można tam spotkać rośliny, a często także jeziora i osady."
  },
  {
    "id": "R05_HARD_08",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Na stepach wśród roślin dominują __________, a bardzo żyzne gleby to __________.",
    "options": null,
    "answer": [
      "trawy",
      "czarnoziemy"
    ],
    "altAnswers": [
      [
        "trawy"
      ],
      [
        "czarnoziemy"
      ]
    ],
    "explanation": "Na stepach dominują trawy, a z ich szczątków powstały żyzne czarnoziemy."
  },
  {
    "id": "R05_HARD_09",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do pozostałych klimatów: równikowy wybitnie wilgotny, podrównikowy, zwrotnikowy suchy, preria.",
    "options": null,
    "answer": "preria",
    "explanation": "Preria to nazwa stepów w Ameryce Północnej, a pozostałe elementy są typami klimatów opisanymi w dziale."
  },
  {
    "id": "R05_HARD_10",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Na sawannie im bliżej równika, tym dłuższa jest pora deszczowa.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział podaje, że w klimacie sawanny pory roku nie wszędzie trwają tak samo długo: im bliżej równika, tym pora deszczowa jest dłuższa."
  },
  {
    "id": "R05_HARD_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Dlaczego na stepach w wielu miejscach rozwinęło się rolnictwo?",
    "options": [
      "Bo występują tam żyzne czarnoziemy",
      "Bo przez cały rok padają ulewne deszcze",
      "Bo stepy są pokryte gęstym lasem",
      "Bo nie występują tam wiatry ani susze",
      "Bo gleba jest stale zalana wodą",
      "Bo brak tam zwierząt hodowlanych"
    ],
    "answer": 0,
    "explanation": "Stepy mają bardzo żyzne czarnoziemy, dlatego wiele z nich zamieniono w pola uprawne i pastwiska."
  },
  {
    "id": "R05_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz poprawne przyczyny atrakcyjności obszarów śródziemnomorskich dla turystów.",
    "options": [
      "przyjazny klimat",
      "ciepłe morze",
      "liczne zabytki",
      "bogata kultura",
      "mroźne zimy przez cały rok",
      "całkowity brak wybrzeży"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Kraje śródziemnomorskie przyciągają turystów przyjaznym klimatem, ciepłym morzem, pięknymi widokami, zabytkami i bogatą kulturą."
  }
];

const KID_PROMPTS = {};

const chapter = {
  "id": "r05",
  "number": 5,
  "title": "Krajobrazy świata",
  "icon": "🌍",
  "sectionOrder": [
    "Strefowość krajobrazów",
    "Wilgotny las równikowy",
    "Sawanna",
    "Pustynia gorąca",
    "Krajobraz śródziemnomorski",
    "Step"
  ],
  "sectionIcons": {
    "Strefowość krajobrazów": "🌐",
    "Wilgotny las równikowy": "🌳",
    "Sawanna": "🦒",
    "Pustynia gorąca": "🏜️",
    "Krajobraz śródziemnomorski": "🌊",
    "Step": "🌾"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
