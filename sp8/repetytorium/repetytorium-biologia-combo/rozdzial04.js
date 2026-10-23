// Skróty sekcji (do identyfikatorów ćwiczeń):
//   TKAN = Tkanki zwierzęce
//   GPP = Gąbki, parzydełkowce i płazińce
//   NPM = Nicienie, pierścienice, mięczaki i stawonogi
//   RYPL = Ryby i płazy
//   GAPT = Gady i ptaki
//   SSAK = Ssaki
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_TKAN_01",
    "section": "Tkanki zwierzęce",
    "type": "sequence",
    "prompt": "Ułóż poziomy organizacji ciała zwierzęcia od najmniejszego do największego.",
    "options": null,
    "items": [
      "Narząd",
      "Układ narządów",
      "Organizm",
      "Komórka",
      "Tkanka"
    ],
    "answer": [
      "Komórka",
      "Tkanka",
      "Narząd",
      "Układ narządów",
      "Organizm"
    ],
    "explanation": "Komórki tworzą tkanki, tkanki budują narządy, narządy współpracują w układach, a układy tworzą organizm."
  },
  {
    "id": "R04_TKAN_02",
    "section": "Tkanki zwierzęce",
    "type": "single_choice",
    "prompt": "W której tkance komórki ściśle do siebie przylegają i spoczywają na błonie podstawnej?",
    "options": [
      "Tkanka kostna",
      "Tkanka nabłonkowa",
      "Tkanka nerwowa",
      "Tkanka chrzęstna",
      "Tkanka tłuszczowa",
      "Tkanka mięśniowa"
    ],
    "image": "r04_nablonek_mikroskop.jpg",
    "answer": 1,
    "explanation": "Komórki nabłonka ściśle przylegają do siebie i są osadzone na błonie podstawnej."
  },
  {
    "id": "R04_TKAN_03",
    "section": "Tkanki zwierzęce",
    "type": "multi_select",
    "prompt": "Wybierz cechy tkanki mięśniowej gładkiej.",
    "options": [
      "Wrzecionowate komórki",
      "Jedno jądro ułożone centralnie",
      "Praca niezależna od woli",
      "Liczne jądra położone obwodowo",
      "Buduje ścianę serca"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Mięsień gładki ma wrzecionowate komórki z jednym jądrem i działa niezależnie od woli."
  },
  {
    "id": "R04_TKAN_04",
    "section": "Tkanki zwierzęce",
    "type": "match",
    "prompt": "Połącz rodzaj tkanki mięśniowej z miejscem jej występowania.",
    "options": null,
    "left": [
      "Gładka",
      "Poprzecznie prążkowana szkieletowa",
      "Poprzecznie prążkowana serca"
    ],
    "right": [
      "Ściana serca",
      "Mięśnie mimiczne twarzy",
      "Ściana przewodu pokarmowego"
    ],
    "answer": {
      "Gładka": "Ściana przewodu pokarmowego",
      "Poprzecznie prążkowana szkieletowa": "Mięśnie mimiczne twarzy",
      "Poprzecznie prążkowana serca": "Ściana serca"
    },
    "explanation": "Tkanka gładka buduje ściany narządów wewnętrznych, szkieletowa tworzy mięśnie ruchu, a sercowa buduje serce."
  },
  {
    "id": "R04_TKAN_05",
    "section": "Tkanki zwierzęce",
    "type": "riddle",
    "prompt": "Jak nazywa się długa wypustka neuronu, która jest otoczona osłonką mielinową?",
    "options": null,
    "altAnswers": [
      "akson",
      "neuryt"
    ],
    "image": "r04_neuron_schemat.jpg",
    "answer": "akson",
    "explanation": "Neuron ma krótkie dendryty i jedną dłuższą wypustkę — akson, nazywany też neurytem."
  },
  {
    "id": "R04_TKAN_06",
    "section": "Tkanki zwierzęce",
    "type": "fill_in",
    "prompt": "Komórki kostne to __________, a komórki chrzęstne to __________.",
    "options": null,
    "altAnswers": [
      [
        "osteocyty",
        "osteocyt"
      ],
      [
        "chondrocyty",
        "chondrocyt"
      ]
    ],
    "answer": [
      "osteocyty",
      "chondrocyty"
    ],
    "explanation": "Osteocyty występują w tkance kostnej, natomiast chondrocyty są komórkami tkanki chrzęstnej."
  },
  {
    "id": "R04_TKAN_07",
    "section": "Tkanki zwierzęce",
    "type": "sort",
    "prompt": "Przyporządkuj składniki krwi do ich funkcji.",
    "options": null,
    "items": [
      "leukocyty",
      "erytrocyty",
      "trombocyty"
    ],
    "categories": [
      "Transport gazów",
      "Obrona organizmu",
      "Krzepnięcie krwi"
    ],
    "answer": {
      "Transport gazów": [
        "erytrocyty"
      ],
      "Obrona organizmu": [
        "leukocyty"
      ],
      "Krzepnięcie krwi": [
        "trombocyty"
      ]
    },
    "explanation": "Erytrocyty przenoszą gazy, leukocyty zwalczają obce czynniki, a trombocyty uczestniczą w krzepnięciu krwi."
  },
  {
    "id": "R04_TKAN_08",
    "section": "Tkanki zwierzęce",
    "type": "true_false",
    "prompt": "Tkanka tłuszczowa chroni między innymi przed utratą ciepła i urazami mechanicznymi.",
    "options": null,
    "answer": true,
    "explanation": "Tkanka tłuszczowa magazynuje substancje odżywcze i chroni przed zmianami temperatury oraz urazami."
  },
  {
    "id": "R04_TKAN_09",
    "section": "Tkanki zwierzęce",
    "type": "single_choice",
    "prompt": "Jaki rodzaj tkanki odbiera i przekazuje informacje za pomocą impulsów elektrycznych?",
    "options": [
      "Nabłonkowa",
      "Tłuszczowa",
      "Chrzęstna",
      "Nerwowa",
      "Kostna",
      "Mięśniowa"
    ],
    "answer": 3,
    "explanation": "Tkanka nerwowa składa się między innymi z neuronów przekazujących impulsy elektryczne."
  },
  {
    "id": "R04_TKAN_10",
    "section": "Tkanki zwierzęce",
    "type": "odd_one_out",
    "prompt": "Wskaż element niebędący składnikiem krwi: erytrocyty, leukocyty, trombocyty, osteocyty.",
    "options": null,
    "answer": "osteocyty",
    "explanation": "Osteocyty to komórki tkanki kostnej; trzy pozostałe nazwy dotyczą składników krwi."
  },
  {
    "id": "R04_TKAN_11",
    "section": "Tkanki zwierzęce",
    "type": "scenario",
    "prompt": "Osoba świadomie zgina ramię podczas ćwiczenia. Która tkanka umożliwia ten ruch?",
    "options": [
      "Tkanka mięśniowa gładka",
      "Tkanka mięśniowa poprzecznie prążkowana szkieletowa",
      "Tkanka tłuszczowa",
      "Tkanka nabłonkowa",
      "Tkanka chrzęstna"
    ],
    "answer": 1,
    "explanation": "Ruchy zależne od woli wykonują mięśnie szkieletowe zbudowane z tkanki poprzecznie prążkowanej."
  },
  {
    "id": "R04_TKAN_12",
    "section": "Tkanki zwierzęce",
    "type": "match",
    "prompt": "Połącz tkankę łączną z jej charakterystyczną cechą.",
    "options": null,
    "left": [
      "Kostna",
      "Chrzęstna",
      "Tłuszczowa",
      "Krew"
    ],
    "right": [
      "Płynne osocze",
      "Komórki wypełnione kroplą tłuszczu",
      "Elastyczna substancja międzykomórkowa",
      "Mocno zmineralizowana substancja międzykomórkowa"
    ],
    "answer": {
      "Kostna": "Mocno zmineralizowana substancja międzykomórkowa",
      "Chrzęstna": "Elastyczna substancja międzykomórkowa",
      "Tłuszczowa": "Komórki wypełnione kroplą tłuszczu",
      "Krew": "Płynne osocze"
    },
    "explanation": "Tkanki łączne różnią się rodzajem substancji międzykomórkowej i budową komórek."
  },
  {
    "id": "R04_GPP_01",
    "section": "Gąbki, parzydełkowce i płazińce",
    "type": "single_choice",
    "prompt": "Która grupa zwierząt nie wytwarza typowych tkanek i narządów?",
    "options": [
      "Parzydełkowce",
      "Pierścienice",
      "Gąbki",
      "Płazińce",
      "Nicienie",
      "Mięczaki"
    ],
    "answer": 2,
    "explanation": "Gąbki to zwierzęta o bardzo prostej budowie bez wyodrębnionych tkanek i narządów."
  },
  {
    "id": "R04_GPP_02",
    "section": "Gąbki, parzydełkowce i płazińce",
    "type": "true_false",
    "prompt": "Gąbki zdobywają pokarm przez filtrowanie przepływającej wody.",
    "options": null,
    "answer": true,
    "explanation": "Gąbki są filtratorami, a przepływ wody pozwala im też wymieniać gazy i usuwać produkty przemiany materii."
  },
  {
    "id": "R04_GPP_03",
    "section": "Gąbki, parzydełkowce i płazińce",
    "type": "multi_select",
    "prompt": "Zaznacz informacje zgodne z opisem gąbek.",
    "options": [
      "Prowadzą zwykle osiadły tryb życia",
      "Uczestniczą w samooczyszczaniu wody",
      "Mogą się rozmnażać przez pączkowanie",
      "Posiadają wykształcone płuca",
      "Zawsze żyją pojedynczo"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Gąbki żyją osiadle, często kolonijnie, filtrują wodę i mogą rozmnażać się bezpłciowo przez pączkowanie."
  },
  {
    "id": "R04_GPP_04",
    "section": "Gąbki, parzydełkowce i płazińce",
    "type": "riddle",
    "prompt": "Jak nazywa się białkowa substancja budująca elastyczny szkielet niektórych gąbek?",
    "options": null,
    "image": "r04_gabka_szkielet.jpg",
    "answer": "spongina",
    "explanation": "W szkielecie gąbek może występować spongina, obok igieł wapiennych lub krzemionkowych."
  },
  {
    "id": "R04_GPP_05",
    "section": "Gąbki, parzydełkowce i płazińce",
    "type": "single_choice",
    "prompt": "Jak nazywa się osiadła i workowata forma ciała parzydełkowców?",
    "options": [
      "Meduza",
      "Polip",
      "Planula",
      "Onkosfera",
      "Wągier",
      "Kijanka"
    ],
    "image": "r04_polip_meduza.jpg",
    "answer": 1,
    "explanation": "Parzydełkowce występują w formie polipa, zwykle osiadłego, albo wolno pływającej meduzy."
  },
  {
    "id": "R04_GPP_06",
    "section": "Gąbki, parzydełkowce i płazińce",
    "type": "match",
    "prompt": "Połącz grupę parzydełkowców z jej przedstawicielem.",
    "options": null,
    "left": [
      "Stułbiopławy",
      "Krążkopławy",
      "Kostkomeduzy",
      "Koralowce"
    ],
    "right": [
      "Ukwiały",
      "Osa morska",
      "Chełbia modra",
      "Stułbia płowa"
    ],
    "answer": {
      "Stułbiopławy": "Stułbia płowa",
      "Krążkopławy": "Chełbia modra",
      "Kostkomeduzy": "Osa morska",
      "Koralowce": "Ukwiały"
    },
    "explanation": "Stułbia należy do stułbiopławów, chełbia do krążkopławów, osa morska do kostkomeduz, a ukwiały do koralowców."
  },
  {
    "id": "R04_GPP_07",
    "section": "Gąbki, parzydełkowce i płazińce",
    "type": "fill_in",
    "prompt": "Nazwa parzydełkowców pochodzi od obecności komórek __________.",
    "options": null,
    "altAnswers": [
      [
        "parzydełkowych",
        "parzydełkowe"
      ]
    ],
    "answer": [
      "parzydełkowych"
    ],
    "explanation": "Komórki parzydełkowe znajdują się na ramionach lub czułkach i służą między innymi do chwytania ofiar."
  },
  {
    "id": "R04_GPP_08",
    "section": "Gąbki, parzydełkowce i płazińce",
    "type": "odd_one_out",
    "prompt": "Które zwierzę nie należy do płazińców: wypławek biały, motylica wątrobowa, tasiemiec uzbrojony, glista ludzka.",
    "options": null,
    "answer": "glista ludzka",
    "explanation": "Glista ludzka to nicień, natomiast pozostałe organizmy należą do płazińców."
  },
  {
    "id": "R04_GPP_09",
    "section": "Gąbki, parzydełkowce i płazińce",
    "type": "sequence",
    "prompt": "Ułóż etapy cyklu tasiemca uzbrojonego w prawidłowej kolejności, zaczynając od wydalenia jaj.",
    "options": null,
    "items": [
      "Larwy rozwijają się w tkankach świni jako wągry",
      "Człowiek staje się żywicielem dojrzałego tasiemca",
      "Jaja tasiemca wydostają się z kałem człowieka",
      "Świnia połyka jaja"
    ],
    "image": "r04_tasiemiec_cykl.jpg",
    "answer": [
      "Jaja tasiemca wydostają się z kałem człowieka",
      "Świnia połyka jaja",
      "Larwy rozwijają się w tkankach świni jako wągry",
      "Człowiek staje się żywicielem dojrzałego tasiemca"
    ],
    "explanation": "W cyklu tasiemca uzbrojonego świnia jest żywicielem pośrednim, a człowiek ostatecznym."
  },
  {
    "id": "R04_GPP_10",
    "section": "Gąbki, parzydełkowce i płazińce",
    "type": "scenario",
    "prompt": "Po zjedzeniu nieprzebadanego mięsa pochodzącego z uboju gospodarskiego u człowieka rozwija się pasożytniczy płaziniec złożony z główki, szyjki i członów. O jakie zwierzę chodzi?",
    "options": [
      "Owsik",
      "Tasiemiec",
      "Wypławek",
      "Dżdżownica",
      "Pijawka",
      "Stułbia"
    ],
    "answer": 1,
    "explanation": "Tasiemce mogą zakażać przez mięso zawierające postacie larwalne; ich ciało ma główkę, szyjkę i członowaną wstęgę."
  },
  {
    "id": "R04_GPP_11",
    "section": "Gąbki, parzydełkowce i płazińce",
    "type": "sort",
    "prompt": "Przyporządkuj organizmy do grup płazińców.",
    "options": null,
    "items": [
      "tasiemiec psi",
      "przywra krwi",
      "wypławek czarny",
      "tasiemiec uzbrojony",
      "motylica wątrobowa",
      "wypławek biały"
    ],
    "categories": [
      "Tasiemce",
      "Przywry",
      "Wirki"
    ],
    "answer": {
      "Tasiemce": [
        "tasiemiec uzbrojony",
        "tasiemiec psi"
      ],
      "Przywry": [
        "motylica wątrobowa",
        "przywra krwi"
      ],
      "Wirki": [
        "wypławek biały",
        "wypławek czarny"
      ]
    },
    "explanation": "Tasiemce i przywry są pasożytami, a wirki to wolno żyjące drapieżniki."
  },
  {
    "id": "R04_NPM_01",
    "section": "Nicienie, pierścienice, mięczaki i stawonogi",
    "type": "true_false",
    "prompt": "Nicienie mają drożny przewód pokarmowy z otworem gębowym i odbytem.",
    "options": null,
    "answer": true,
    "explanation": "Przewód pokarmowy nicieni zaczyna się otworem gębowym i kończy odbytem."
  },
  {
    "id": "R04_NPM_02",
    "section": "Nicienie, pierścienice, mięczaki i stawonogi",
    "type": "single_choice",
    "prompt": "Co oznacza dymorfizm płciowy u nicieni?",
    "options": [
      "Rozmnażanie przez podział",
      "Różnice w wyglądzie samca i samicy",
      "Brak narządów rozrodczych",
      "Występowanie larw w wodzie",
      "Obecność segmentów",
      "Wytwarzanie kokonów"
    ],
    "answer": 1,
    "explanation": "Dymorfizm płciowy to różnice wyglądu lub kształtu samca i samicy; u tych nicieni samice są większe."
  },
  {
    "id": "R04_NPM_03",
    "section": "Nicienie, pierścienice, mięczaki i stawonogi",
    "type": "sequence",
    "prompt": "Ułóż cykl zakażenia glistą ludzką, zaczynając od spożycia jaj inwazyjnych.",
    "options": null,
    "items": [
      "Larwy z krwią docierają do płuc",
      "Larwy z gardła wracają do układu pokarmowego",
      "Dorosłe glisty składają jaja wydalane z kałem",
      "Człowiek połyka jaja inwazyjne",
      "Z jaj w jelicie wylęgają się larwy"
    ],
    "image": "r04_glista_cykl.jpg",
    "answer": [
      "Człowiek połyka jaja inwazyjne",
      "Z jaj w jelicie wylęgają się larwy",
      "Larwy z krwią docierają do płuc",
      "Larwy z gardła wracają do układu pokarmowego",
      "Dorosłe glisty składają jaja wydalane z kałem"
    ],
    "explanation": "Larwy glisty wędrują przez płuca, zanim wrócą do przewodu pokarmowego i osiągną dojrzałość."
  },
  {
    "id": "R04_NPM_04",
    "section": "Nicienie, pierścienice, mięczaki i stawonogi",
    "type": "match",
    "prompt": "Połącz grupę bezkręgowców z cechą budowy.",
    "options": null,
    "left": [
      "Nicienie",
      "Pierścienice",
      "Mięczaki",
      "Stawonogi"
    ],
    "right": [
      "Członowane odnóża połączone stawami",
      "Miękkie ciało bez segmentów",
      "Ciało podzielone na segmenty",
      "Nieczłonowane ciało zwężone na końcach"
    ],
    "answer": {
      "Nicienie": "Nieczłonowane ciało zwężone na końcach",
      "Pierścienice": "Ciało podzielone na segmenty",
      "Mięczaki": "Miękkie ciało bez segmentów",
      "Stawonogi": "Członowane odnóża połączone stawami"
    },
    "explanation": "Poszczególne grupy rozróżnia między innymi kształt, segmentacja i budowa odnóży."
  },
  {
    "id": "R04_NPM_05",
    "section": "Nicienie, pierścienice, mięczaki i stawonogi",
    "type": "riddle",
    "prompt": "Jak nazywa się pierścieniowate zgrubienie ciała dżdżownicy umożliwiające rozmnażanie?",
    "options": null,
    "image": "r04_dzdzownica_siodelko.jpg",
    "answer": "siodełko",
    "explanation": "Siodełko dżdżownicy uczestniczy w procesie rozmnażania i powstawaniu kokonów."
  },
  {
    "id": "R04_NPM_06",
    "section": "Nicienie, pierścienice, mięczaki i stawonogi",
    "type": "scenario",
    "prompt": "Pijawka pobiera krew żywiciela i wprowadza do jego organizmu substancję zapobiegającą krzepnięciu. Jak nazywa się ta substancja?",
    "options": [
      "Spongina",
      "Hirudyna",
      "Sepia",
      "Bisior",
      "Śluz",
      "Chityna"
    ],
    "answer": 1,
    "explanation": "Hirudyna wydzielana przez pijawkę zapobiega krzepnięciu krwi."
  },
  {
    "id": "R04_NPM_07",
    "section": "Nicienie, pierścienice, mięczaki i stawonogi",
    "type": "multi_select",
    "prompt": "Wybierz działania dżdżownic korzystne dla gleby.",
    "options": [
      "Napowietrzanie gleby",
      "Udział w tworzeniu próchnicy",
      "Przyspieszanie rozkładu materii organicznej",
      "Zapylanie kwiatów",
      "Produkcja jedwabiu"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Pierścienice lądowe spulchniają i napowietrzają glebę oraz wspierają tworzenie próchnicy."
  },
  {
    "id": "R04_NPM_08",
    "section": "Nicienie, pierścienice, mięczaki i stawonogi",
    "type": "odd_one_out",
    "prompt": "Które zwierzę nie jest pierścienicą: nereida, rurecznik, pijawka lekarska, owsik ludzki.",
    "options": null,
    "answer": "owsik ludzki",
    "explanation": "Owsik ludzki należy do nicieni; pozostałe zwierzęta zaliczono do pierścienic."
  },
  {
    "id": "R04_NPM_09",
    "section": "Nicienie, pierścienice, mięczaki i stawonogi",
    "type": "single_choice",
    "prompt": "Jaki narząd w jamie gębowej ślimaków służy do ścierania pokarmu?",
    "options": [
      "Lejek",
      "Tarka",
      "Skrzela",
      "Syfon wyrzutowy",
      "Przyssawka",
      "Bisior"
    ],
    "image": "r04_slimak_budowa.jpg",
    "answer": 1,
    "explanation": "Tarka jest narządem służącym u ślimaków między innymi do ścierania pokarmu roślinnego."
  },
  {
    "id": "R04_NPM_10",
    "section": "Nicienie, pierścienice, mięczaki i stawonogi",
    "type": "match",
    "prompt": "Połącz grupę mięczaków z jej przedstawicielem.",
    "options": null,
    "left": [
      "Ślimaki",
      "Małże",
      "Głowonogi"
    ],
    "right": [
      "Mątwa zwyczajna",
      "Omułek jadalny",
      "Winniczek"
    ],
    "answer": {
      "Ślimaki": "Winniczek",
      "Małże": "Omułek jadalny",
      "Głowonogi": "Mątwa zwyczajna"
    },
    "explanation": "Winniczek jest ślimakiem, omułek małżem, a mątwa głowonogiem."
  },
  {
    "id": "R04_NPM_11",
    "section": "Nicienie, pierścienice, mięczaki i stawonogi",
    "type": "fill_in",
    "prompt": "Wydzielina niektórych małży, która mocuje je do podłoża, to __________.",
    "options": null,
    "answer": [
      "bisior"
    ],
    "explanation": "Bisior jest wydzieliną gruczołu u podstawy nogi niektórych małży, np. omułka jadalnego."
  },
  {
    "id": "R04_NPM_12",
    "section": "Nicienie, pierścienice, mięczaki i stawonogi",
    "type": "single_choice",
    "prompt": "Który narząd umożliwia głowonogom poruszanie się dzięki odrzutowi wody?",
    "options": [
      "Syfon wpustowy",
      "Lejek",
      "Siodełko",
      "Tarka",
      "Grzebień mostka",
      "Linia boczna"
    ],
    "answer": 1,
    "explanation": "Głowonogi wypychają wodę z jamy płaszczowej przez lejek i poruszają się na zasadzie odrzutu."
  },
  {
    "id": "R04_NPM_13",
    "section": "Nicienie, pierścienice, mięczaki i stawonogi",
    "type": "sort",
    "prompt": "Przyporządkuj przedstawicieli do grup stawonogów.",
    "options": null,
    "items": [
      "stonóg murowy",
      "pasikonik zielony",
      "świerzbowiec",
      "rak rzeczny",
      "mucha domowa",
      "pająk krzyżak"
    ],
    "categories": [
      "Skorupiaki",
      "Owady",
      "Pajęczaki"
    ],
    "image": "r04_stawonogi_trzy_grupy.jpg",
    "answer": {
      "Skorupiaki": [
        "rak rzeczny",
        "stonóg murowy"
      ],
      "Owady": [
        "mucha domowa",
        "pasikonik zielony"
      ],
      "Pajęczaki": [
        "pająk krzyżak",
        "świerzbowiec"
      ]
    },
    "explanation": "Do stawonogów należą m.in. skorupiaki, owady i pajęczaki."
  },
  {
    "id": "R04_NPM_14",
    "section": "Nicienie, pierścienice, mięczaki i stawonogi",
    "type": "multi_select",
    "prompt": "Zaznacz cechy owadów.",
    "options": [
      "Jedna para czułków",
      "Trzy pary odnóży krocznych",
      "Oddychanie tchawkami",
      "Cztery pary odnóży krocznych",
      "Brak czułków"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Owady mają jedną parę czułków, trzy pary odnóży krocznych oraz oddychają tchawkami."
  },
  {
    "id": "R04_RYPL_01",
    "section": "Ryby i płazy",
    "type": "fill_in",
    "prompt": "Ryby i płazy są kręgowcami __________, czyli temperatura ich ciała zależy od otoczenia.",
    "options": null,
    "altAnswers": [
      [
        "zmiennocieplnymi",
        "zmiennocieplne"
      ]
    ],
    "answer": [
      "zmiennocieplnymi"
    ],
    "explanation": "Ryby i płazy zaliczono do kręgowców zmiennocieplnych, których temperatura ciała zależy od środowiska."
  },
  {
    "id": "R04_RYPL_02",
    "section": "Ryby i płazy",
    "type": "single_choice",
    "prompt": "Jaki narząd zmysłu ryby wykrywa ruch wody i pomaga omijać przeszkody?",
    "options": [
      "Pęcherz pławny",
      "Linia boczna",
      "Pokrywa skrzelowa",
      "Płetwa odbytowa",
      "Skrzela",
      "Płetwa brzuszna"
    ],
    "image": "r04_ryba_budowa.jpg",
    "answer": 1,
    "explanation": "Linia boczna pozwala rybom odbierać ruch wody i inne zmiany w środowisku wodnym."
  },
  {
    "id": "R04_RYPL_03",
    "section": "Ryby i płazy",
    "type": "match",
    "prompt": "Połącz płetwę ryby z odpowiednią grupą.",
    "options": null,
    "left": [
      "Piersiowa",
      "Brzuszna",
      "Grzbietowa",
      "Ogonowa"
    ],
    "right": [
      "Płetwa nieparzysta na końcu ciała",
      "Płetwa nieparzysta na grzbiecie",
      "Płetwa parzysta tylna",
      "Płetwa parzysta przednia"
    ],
    "answer": {
      "Piersiowa": "Płetwa parzysta przednia",
      "Brzuszna": "Płetwa parzysta tylna",
      "Grzbietowa": "Płetwa nieparzysta na grzbiecie",
      "Ogonowa": "Płetwa nieparzysta na końcu ciała"
    },
    "explanation": "Parzyste są płetwy piersiowe i brzuszne, a nieparzyste między innymi grzbietowa i ogonowa."
  },
  {
    "id": "R04_RYPL_04",
    "section": "Ryby i płazy",
    "type": "true_false",
    "prompt": "Pęcherz pławny u ryb kostnoszkieletowych pomaga zmieniać głębokość zanurzenia.",
    "options": null,
    "answer": true,
    "explanation": "Pęcherz pławny reguluje zanurzenie ryb kostnoszkieletowych dzięki zmianom wyporności."
  },
  {
    "id": "R04_RYPL_05",
    "section": "Ryby i płazy",
    "type": "scenario",
    "prompt": "Ryba płynie w ciemności w zwartej ławicy, nie dotykając innych ryb. Jaki narząd szczególnie pomaga jej odbierać ruch wody?",
    "options": [
      "Oczy",
      "Linia boczna",
      "Pęcherz pławny",
      "Pokrywy skrzelowe",
      "Łuski"
    ],
    "answer": 1,
    "explanation": "Linia boczna odbiera bodźce z wody i ułatwia poruszanie się w ławicy również po ciemku."
  },
  {
    "id": "R04_RYPL_06",
    "section": "Ryby i płazy",
    "type": "multi_select",
    "prompt": "Wybierz przystosowania ryb do życia w wodzie.",
    "options": [
      "Opływowy kształt ciała",
      "Skrzela",
      "Skóra z gruczołami śluzowymi",
      "Suche pióra",
      "Powieki mrugające"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Opływowe ciało i śluz ułatwiają poruszanie się w wodzie, a skrzela umożliwiają oddychanie."
  },
  {
    "id": "R04_RYPL_07",
    "section": "Ryby i płazy",
    "type": "sequence",
    "prompt": "Ułóż etapy rozmnażania ryb w prawidłowej kolejności.",
    "options": null,
    "items": [
      "Dochodzi do zapłodnienia zewnętrznego",
      "Z zapłodnionych jaj wykluwa się narybek",
      "Samica składa ikrę w wodzie",
      "Samiec polewa ikrę mleczkiem"
    ],
    "answer": [
      "Samica składa ikrę w wodzie",
      "Samiec polewa ikrę mleczkiem",
      "Dochodzi do zapłodnienia zewnętrznego",
      "Z zapłodnionych jaj wykluwa się narybek"
    ],
    "explanation": "W czasie tarła komórki rozrodcze łączą się w wodzie, a z zapłodnionych jaj rozwija się narybek."
  },
  {
    "id": "R04_RYPL_08",
    "section": "Ryby i płazy",
    "type": "odd_one_out",
    "prompt": "Które zwierzę nie jest rybą: płaszczka, płoć, węgorz, traszka górska.",
    "options": null,
    "answer": "traszka górska",
    "explanation": "Traszka górska jest płazem ogoniastym; pozostałe organizmy są rybami."
  },
  {
    "id": "R04_RYPL_09",
    "section": "Ryby i płazy",
    "type": "single_choice",
    "prompt": "Jak nazywa się larwa żaby oddychająca skrzelami?",
    "options": [
      "Wągier",
      "Planula",
      "Kijanka",
      "Onkosfera",
      "Narybek",
      "Poczwarka"
    ],
    "answer": 2,
    "explanation": "Kijanka to stadium larwalne płaza, które ma skrzela i ogon."
  },
  {
    "id": "R04_RYPL_10",
    "section": "Ryby i płazy",
    "type": "sequence",
    "prompt": "Ułóż stadia rozwoju żaby od złożenia jaj do postaci dorosłej.",
    "options": null,
    "items": [
      "Kijanka z rozwijającymi się kończynami",
      "Młoda żaba",
      "Dorosła żaba",
      "Skrzek z zarodkami",
      "Kijanka z ogonem i skrzelami"
    ],
    "image": "r04_zaba_przeobrazenie.jpg",
    "answer": [
      "Skrzek z zarodkami",
      "Kijanka z ogonem i skrzelami",
      "Kijanka z rozwijającymi się kończynami",
      "Młoda żaba",
      "Dorosła żaba"
    ],
    "explanation": "Podczas przeobrażenia żabie wyrastają kończyny, a jej ogon stopniowo zanika."
  },
  {
    "id": "R04_RYPL_11",
    "section": "Ryby i płazy",
    "type": "sort",
    "prompt": "Przyporządkuj płazy do odpowiednich grup.",
    "options": null,
    "items": [
      "ropucha szara",
      "traszka górska",
      "żaba trawna",
      "salamandra plamista",
      "marszczelec pierścieniowy"
    ],
    "categories": [
      "Bezogonowe",
      "Ogoniaste",
      "Beznogie"
    ],
    "answer": {
      "Bezogonowe": [
        "żaba trawna",
        "ropucha szara"
      ],
      "Ogoniaste": [
        "salamandra plamista",
        "traszka górska"
      ],
      "Beznogie": [
        "marszczelec pierścieniowy"
      ]
    },
    "explanation": "Żaby i ropuchy to bezogonowe, salamandry i traszki to ogoniaste, a marszczelce to beznogie."
  },
  {
    "id": "R04_RYPL_12",
    "section": "Ryby i płazy",
    "type": "multi_select",
    "prompt": "Zaznacz przystosowania dorosłych płazów do życia na lądzie.",
    "options": [
      "Powieki chroniące oczy",
      "Workowate płuca",
      "Dwie pary kończyn u płazów czworonożnych",
      "Skrzela zewnętrzne jako główny narząd oddechowy dorosłych",
      "Płetwa ogonowa u każdej dorosłej żaby"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Dorosłe płazy wykorzystują powieki, płuca i kończyny, podczas gdy skrzela zewnętrzne są cechą kijanek."
  },
  {
    "id": "R04_GAPT_01",
    "section": "Gady i ptaki",
    "type": "single_choice",
    "prompt": "Jak nazywa się gady z racji obecności błon płodowych?",
    "options": [
      "Bezowodniowce",
      "Owodniowce",
      "Dwuśrodowiskowce",
      "Gniazdowniki",
      "Zagniazdowniki",
      "Filtratory"
    ],
    "answer": 1,
    "explanation": "U gadów pojawiają się błony płodowe: owodnia, kosmówka i omocznia."
  },
  {
    "id": "R04_GAPT_02",
    "section": "Gady i ptaki",
    "type": "match",
    "prompt": "Połącz grupę gadów z przedstawicielem.",
    "options": null,
    "left": [
      "Żółwie",
      "Krokodyle",
      "Węże",
      "Jaszczurki",
      "Hatterie"
    ],
    "right": [
      "Hatteria niespodziana",
      "Jaszczurka zwinka",
      "Zaskroniec zwyczajny",
      "Gawial gangesowy",
      "Żółw błotny"
    ],
    "answer": {
      "Żółwie": "Żółw błotny",
      "Krokodyle": "Gawial gangesowy",
      "Węże": "Zaskroniec zwyczajny",
      "Jaszczurki": "Jaszczurka zwinka",
      "Hatterie": "Hatteria niespodziana"
    },
    "explanation": "Każdy z podanych gatunków należy do odpowiedniej grupy gadów."
  },
  {
    "id": "R04_GAPT_03",
    "section": "Gady i ptaki",
    "type": "multi_select",
    "prompt": "Wskaż przystosowania gadów do życia na lądzie.",
    "options": [
      "Twarde tarczki i płytki chroniące przed utratą wody",
      "Zapłodnienie wewnętrzne",
      "Błony płodowe",
      "Skrzela zewnętrzne u osobników dorosłych",
      "Złożenie skrzeku do wody"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Osłony skóry, zapłodnienie wewnętrzne i błony płodowe umożliwiają gadom rozmnażanie się na lądzie."
  },
  {
    "id": "R04_GAPT_04",
    "section": "Gady i ptaki",
    "type": "fill_in",
    "prompt": "Błona płodowa chroniąca zarodek przed wysychaniem to __________, a gromadząca zbędne produkty przemiany materii to __________.",
    "options": null,
    "altAnswers": [
      [
        "owodnia",
        "owodnią"
      ],
      [
        "omocznia",
        "omocznią"
      ]
    ],
    "image": "r04_jajo_gada_przekroj.jpg",
    "answer": [
      "owodnia",
      "omocznia"
    ],
    "explanation": "Owodnia tworzy pęcherz z płynem, a omocznia gromadzi produkty przemiany materii zarodka."
  },
  {
    "id": "R04_GAPT_05",
    "section": "Gady i ptaki",
    "type": "true_false",
    "prompt": "W rozwoju gadów pojawia się stadium larwalne podobne do kijanki.",
    "options": null,
    "answer": false,
    "explanation": "U gadów występuje rozwój prosty, bez stadium larwalnego."
  },
  {
    "id": "R04_GAPT_06",
    "section": "Gady i ptaki",
    "type": "scenario",
    "prompt": "Podczas spaceru w Polsce obserwujesz węża, którego ukąszenie może wprowadzić jad. Który z krajowych węży jest jadowity?",
    "options": [
      "Zaskroniec zwyczajny",
      "Gniewosz plamisty",
      "Żmija zygzakowata",
      "Wąż Eskulapa",
      "Zaskroniec rybołów"
    ],
    "answer": 2,
    "explanation": "Żmija zygzakowata jest jadowitym wężem występującym w Polsce."
  },
  {
    "id": "R04_GAPT_07",
    "section": "Gady i ptaki",
    "type": "single_choice",
    "prompt": "Które gady mają termoreceptory przydatne podczas polowania?",
    "options": [
      "Żółwie i hatterie",
      "Grzechotniki, pytony i boa",
      "Krokodyle i aligatory",
      "Jaszczurki i padalce",
      "Żółwie i jaszczurki"
    ],
    "answer": 1,
    "explanation": "Grzechotniki, pytony i boa mają narządy umożliwiające wykrywanie promieniowania cieplnego."
  },
  {
    "id": "R04_GAPT_08",
    "section": "Gady i ptaki",
    "type": "match",
    "prompt": "Połącz rodzaj ptasich piór z główną funkcją.",
    "options": null,
    "left": [
      "Lotki",
      "Sterówki",
      "Pióra puchowe",
      "Pióra pokrywowe"
    ],
    "right": [
      "Okrywanie powierzchni ciała",
      "Ochrona przed utratą ciepła",
      "Sterowanie lotem",
      "Tworzenie powierzchni nośnej skrzydeł"
    ],
    "image": "r04_ptak_piora.jpg",
    "answer": {
      "Lotki": "Tworzenie powierzchni nośnej skrzydeł",
      "Sterówki": "Sterowanie lotem",
      "Pióra puchowe": "Ochrona przed utratą ciepła",
      "Pióra pokrywowe": "Okrywanie powierzchni ciała"
    },
    "explanation": "Lotki umożliwiają lot, sterówki pomagają kierować lotem, a puch i pióra pokrywowe chronią ciało."
  },
  {
    "id": "R04_GAPT_09",
    "section": "Gady i ptaki",
    "type": "multi_select",
    "prompt": "Wybierz cechy budowy wewnętrznej ptaków sprzyjające lataniu.",
    "options": [
      "Kości pneumatyczne",
      "Grzebień mostka dla mięśni piersiowych",
      "Dobrze rozwinięty móżdżek",
      "Ciężkie zęby w dziobie",
      "Pęcherz moczowy gromadzący płyn"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Pneumatyczne kości, grzebień mostka i móżdżek ułatwiają lot; ptaki nie mają zębów ani pęcherza moczowego."
  },
  {
    "id": "R04_GAPT_10",
    "section": "Gady i ptaki",
    "type": "sort",
    "prompt": "Przyporządkuj ptaki do grup ze względu na rozwój piskląt.",
    "options": null,
    "items": [
      "bocian biały",
      "łabędź niemy",
      "gęś gęgawa",
      "wróbel domowy",
      "jaskółka dymówka",
      "kaczka krzyżówka"
    ],
    "categories": [
      "Gniazdowniki",
      "Zagniazdowniki"
    ],
    "answer": {
      "Gniazdowniki": [
        "wróbel domowy",
        "bocian biały",
        "jaskółka dymówka"
      ],
      "Zagniazdowniki": [
        "łabędź niemy",
        "kaczka krzyżówka",
        "gęś gęgawa"
      ]
    },
    "explanation": "Gniazdowniki wykluwają się bezradne, a zagniazdowniki mają puch i szybko zaczynają się poruszać."
  },
  {
    "id": "R04_GAPT_11",
    "section": "Gady i ptaki",
    "type": "scenario",
    "prompt": "Ptak unosi się w powietrzu, zbierając nektar, a jego dziób jest długi i wąski. Do której grupy żywieniowej pasuje opis?",
    "options": [
      "Ptaki drapieżne",
      "Ptaki ziarnojady",
      "Ptaki żywiące się nektarem",
      "Ptaki wszystkożerne",
      "Ptaki żerujące w locie"
    ],
    "answer": 2,
    "explanation": "Kolibry i nektarniki mają długie wąskie dzioby i mogą pobierać nektar z kwiatów."
  },
  {
    "id": "R04_SSAK_01",
    "section": "Ssaki",
    "type": "single_choice",
    "prompt": "Które ssaki składają jaja zamiast rodzić żywe młode?",
    "options": [
      "Torbacze",
      "Stekowce",
      "Łożyskowce",
      "Walenie",
      "Nietoperze",
      "Kopytne"
    ],
    "answer": 1,
    "explanation": "Stekowce, na przykład dziobak i kolczatka, są jajorodne."
  },
  {
    "id": "R04_SSAK_02",
    "section": "Ssaki",
    "type": "match",
    "prompt": "Połącz ssaka ze środowiskiem lub sposobem życia.",
    "options": null,
    "left": [
      "Nietoperz",
      "Kret",
      "Bóbr europejski",
      "Delfin",
      "Wiewiórka"
    ],
    "right": [
      "Nadrzewny",
      "Wodny",
      "Ziemno-wodny",
      "Podziemny",
      "Zdolny do aktywnego lotu"
    ],
    "image": "r04_ssaki_srodowiska.jpg",
    "answer": {
      "Nietoperz": "Zdolny do aktywnego lotu",
      "Kret": "Podziemny",
      "Bóbr europejski": "Ziemno-wodny",
      "Delfin": "Wodny",
      "Wiewiórka": "Nadrzewny"
    },
    "explanation": "Ssaki są przystosowane do życia m.in. w powietrzu, pod ziemią, na lądzie, w wodzie i na drzewach."
  },
  {
    "id": "R04_SSAK_03",
    "section": "Ssaki",
    "type": "true_false",
    "prompt": "Wszystkie ssaki są żyworodne.",
    "options": null,
    "answer": false,
    "explanation": "Większość ssaków rodzi żywe młode, ale stekowce, takie jak dziobak i kolczatka, składają jaja."
  },
  {
    "id": "R04_SSAK_04",
    "section": "Ssaki",
    "type": "fill_in",
    "prompt": "Długie włosy czuciowe ssaków, nazywane potocznie wąsami, to __________.",
    "options": null,
    "answer": [
      "wibrysy"
    ],
    "explanation": "Wibrysy to włosy czuciowe ułatwiające zwierzętom orientację."
  },
  {
    "id": "R04_SSAK_05",
    "section": "Ssaki",
    "type": "multi_select",
    "prompt": "Zaznacz cechy charakterystyczne dla ssaków.",
    "options": [
      "Karmienie młodych mlekiem",
      "Obecność włosów",
      "Oddychanie płucami",
      "Oddychanie skrzelami przez całe życie",
      "Występowanie piór pokrywowych"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Ssaki karmią młode mlekiem, mają włosy i oddychają płucami."
  },
  {
    "id": "R04_SSAK_06",
    "section": "Ssaki",
    "type": "riddle",
    "prompt": "Jaki narząd umożliwia wymianę tlenu i substancji odżywczych między ciężarną samicą łożyskowca a jej płodem?",
    "options": null,
    "altAnswers": [
      "łożysko",
      "lozysko"
    ],
    "answer": "łożysko",
    "explanation": "Łożysko zapewnia wymianę substancji pomiędzy organizmem matki a rozwijającym się płodem."
  },
  {
    "id": "R04_SSAK_07",
    "section": "Ssaki",
    "type": "sort",
    "prompt": "Przyporządkuj ssaki do grup rozrodczych.",
    "options": null,
    "items": [
      "kolczatka",
      "koala",
      "płetwal błękitny",
      "dziobak",
      "kangur",
      "kot"
    ],
    "categories": [
      "Stekowce",
      "Torbacze",
      "Łożyskowce"
    ],
    "answer": {
      "Stekowce": [
        "dziobak",
        "kolczatka"
      ],
      "Torbacze": [
        "kangur",
        "koala"
      ],
      "Łożyskowce": [
        "kot",
        "płetwal błękitny"
      ]
    },
    "explanation": "Stekowce znoszą jaja, u torbaczy młode rozwijają się dalej w torbie, a u łożyskowców występuje łożysko."
  },
  {
    "id": "R04_SSAK_08",
    "section": "Ssaki",
    "type": "scenario",
    "prompt": "Nietoperz poluje nocą i orientuje się w przestrzeni, wysyłając fale dźwiękowe oraz odbierając ich echo. Jak nazywa się ten mechanizm?",
    "options": [
      "Termorecepcja",
      "Echolokacja",
      "Mimetyzm",
      "Partenogeneza",
      "Regeneracja"
    ],
    "answer": 1,
    "explanation": "Nietoperze wykorzystują echolokację opartą na wysyłaniu i odbieraniu fal dźwiękowych."
  },
  {
    "id": "R04_SSAK_09",
    "section": "Ssaki",
    "type": "single_choice",
    "prompt": "W której grupie ssaków noworodek kontynuuje rozwój w torbie na brzuchu samicy?",
    "options": [
      "Stekowce",
      "Torbacze",
      "Łożyskowce",
      "Walenie",
      "Gryzonie"
    ],
    "answer": 1,
    "explanation": "U torbaczy ciąża jest krótka, a dalszy rozwój młodego przebiega w torbie."
  },
  {
    "id": "R04_SSAK_10",
    "section": "Ssaki",
    "type": "match",
    "prompt": "Połącz przystosowanie ssaka z jego środowiskiem życia.",
    "options": null,
    "left": [
      "Długie palce połączone błoną lotną",
      "Krótkie szerokie przednie łapy z pazurami",
      "Gruba warstwa tłuszczu chroniąca przed wychłodzeniem",
      "Długie silne nogi i kopyta"
    ],
    "right": [
      "Życie na równinach",
      "Życie w wodzie",
      "Życie pod ziemią",
      "Latanie"
    ],
    "answer": {
      "Długie palce połączone błoną lotną": "Latanie",
      "Krótkie szerokie przednie łapy z pazurami": "Życie pod ziemią",
      "Gruba warstwa tłuszczu chroniąca przed wychłodzeniem": "Życie w wodzie",
      "Długie silne nogi i kopyta": "Życie na równinach"
    },
    "explanation": "Przystosowania kończyn oraz izolacja cieplna pomagają ssakom w różnych środowiskach."
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz wyspecjalizowaną komórkę lub element z tkanką, w której występuje.",
    "options": null,
    "left": [
      "Osteocyt",
      "Chondrocyt",
      "Neuron",
      "Erytrocyt",
      "Komórka wypełniona kroplą tłuszczu"
    ],
    "right": [
      "Tkanka tłuszczowa",
      "Krew",
      "Tkanka nerwowa",
      "Tkanka chrzęstna",
      "Tkanka kostna"
    ],
    "answer": {
      "Osteocyt": "Tkanka kostna",
      "Chondrocyt": "Tkanka chrzęstna",
      "Neuron": "Tkanka nerwowa",
      "Erytrocyt": "Krew",
      "Komórka wypełniona kroplą tłuszczu": "Tkanka tłuszczowa"
    },
    "explanation": "Osteocyty, chondrocyty, neurony, erytrocyty i komórki tkanki tłuszczowej należą do różnych rodzajów tkanek."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Larwa pasożyta wylęga się w przewodzie pokarmowym człowieka, przedostaje do naczyń krwionośnych, dojrzewa w płucach, a następnie przez gardło wraca do jelita. Jaki to pasożyt?",
    "options": [
      "Tasiemiec uzbrojony",
      "Glista ludzka",
      "Motylica wątrobowa",
      "Owsik ludzki",
      "Włosień kręty"
    ],
    "answer": 1,
    "explanation": "Opis wędrówki larw z jelit przez płuca i z powrotem do układu pokarmowego pochodzi z cyklu glisty ludzkiej."
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy rozmnażania płciowego parzydełkowców we właściwej kolejności.",
    "options": null,
    "items": [
      "Bruzdkowanie zarodka",
      "Powstanie larwy planuli",
      "Osiedlenie się i wzrost polipa",
      "Powstanie formy meduzy",
      "Połączenie plemnika i komórki jajowej",
      "Powstanie zygoty"
    ],
    "image": "r04_polip_meduza.jpg",
    "answer": [
      "Połączenie plemnika i komórki jajowej",
      "Powstanie zygoty",
      "Bruzdkowanie zarodka",
      "Powstanie larwy planuli",
      "Osiedlenie się i wzrost polipa",
      "Powstanie formy meduzy"
    ],
    "explanation": "Rozmnażanie płciowe parzydełkowców obejmuje zapłodnienie, zygotę, bruzdkowanie, larwę planulę oraz formy polipa i meduzy."
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Posortuj narządy lub sposoby oddychania zgodnie z opisanymi grupami.",
    "options": null,
    "items": [
      "głowonogi",
      "owady",
      "gady",
      "ryby",
      "skorupiaki",
      "ssaki",
      "ptaki"
    ],
    "categories": [
      "Skrzela",
      "Tchawki",
      "Płuca i oddychanie płucne"
    ],
    "answer": {
      "Skrzela": [
        "ryby",
        "głowonogi",
        "skorupiaki"
      ],
      "Tchawki": [
        "owady"
      ],
      "Płuca i oddychanie płucne": [
        "ssaki",
        "gady",
        "ptaki"
      ]
    },
    "explanation": "Ryby i głowonogi oddychają skrzelami, owady tchawkami, a gady, ptaki i ssaki płucami."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która grupa gadów ma dwa rzędy zębów w szczęce, jeden w żuchwie i wyraźne oko ciemieniowe?",
    "options": [
      "Krokodyle",
      "Hatterie",
      "Żółwie",
      "Jaszczurki",
      "Węże"
    ],
    "answer": 1,
    "explanation": "Hatterie mają charakterystyczne uzębienie i trzecie, ciemieniowe oko."
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Wybierz prawdziwe porównania rozmnażania zwierząt z różnych grup.",
    "options": [
      "Gady i ptaki mają zapłodnienie wewnętrzne",
      "U większości ryb i u żab zapłodnienie przebiega w wodzie",
      "Stekowce i ptaki składają jaja",
      "U gadów zwykle rozwija się kijanka",
      "U torbaczy zarodek rozwija się wyłącznie w jaju złożonym do wody"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Gady i ptaki zapładniają wewnętrznie, u większości ryb i wielu płazów zapłodnienie zachodzi w wodzie, a stekowce i ptaki są jajorodne."
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż jedyną strukturę nienależącą do błon płodowych gadów: owodnia, omocznia, kosmówka, osłonka mielinowa.",
    "options": null,
    "answer": "osłonka mielinowa",
    "explanation": "Owodnia, omocznia i kosmówka to błony płodowe; osłonka mielinowa otacza akson neuronu."
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Błona płodowa odpowiedzialna za wymianę substancji ze środowiskiem zewnętrznym to __________, a błona magazynująca zbędne produkty zarodka to __________.",
    "options": null,
    "altAnswers": [
      [
        "kosmówka",
        "kosmówkę"
      ],
      [
        "omocznia",
        "omocznię"
      ]
    ],
    "image": "r04_jajo_gada_przekroj.jpg",
    "answer": [
      "kosmówka",
      "omocznia"
    ],
    "explanation": "Kosmówka umożliwia wymianę wody i gazów, a omocznia gromadzi produkty przemiany materii."
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz strukturę anatomiczną z grupą zwierząt, u której pełni określoną funkcję.",
    "options": null,
    "left": [
      "Bisior",
      "Linia boczna",
      "Grzebień mostka",
      "Siodełko",
      "Wibrysy"
    ],
    "right": [
      "Ssaki",
      "Dżdżownice",
      "Ptaki",
      "Ryby",
      "Małże"
    ],
    "answer": {
      "Bisior": "Małże",
      "Linia boczna": "Ryby",
      "Grzebień mostka": "Ptaki",
      "Siodełko": "Dżdżownice",
      "Wibrysy": "Ssaki"
    },
    "explanation": "Bisior przyczepia małże, linia boczna odbiera ruch wody, grzebień mostka wspiera mięśnie, siodełko służy rozmnażaniu, a wibrysy są narządem dotyku."
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W podmokłym środowisku znaleziono trzy zwierzęta: małża filtrującego wodę, dżdżownicę drążącą korytarze oraz płaza wrażliwego na zanieczyszczenia. Które stwierdzenie trafnie zestawia ich znaczenie?",
    "options": [
      "Małż napowietrza glebę, dżdżownica tworzy perły, płaz produkuje bisior",
      "Małż może wskazywać czystość wody, dżdżownica napowietrza glebę, a płaz jest bioindykatorem",
      "Małż zapyla kwiaty, dżdżownica oddycha płucami, płaz tworzy próchnicę",
      "Małż buduje rafy koralowe, dżdżownica jest kręgowcem, płaz produkuje mleko",
      "Małż wytwarza jad, dżdżownica ma pióra, płaz składa jaja na suchym lądzie"
    ],
    "answer": 1,
    "explanation": "Mięczaki bywają bioindykatorami wód, pierścienice poprawiają właściwości gleby, a płazy sygnalizują zanieczyszczenie środowiska."
  }
];

const KID_PROMPTS = {
  "R04_TKAN_01": "Ułóż kolejno: od komórki do całego organizmu.",
  "R04_TKAN_05": "Jak nazywa się długa wypustka komórki nerwowej?",
  "R04_GPP_05": "Jak nazywa się przytwierdzona forma parzydełkowca?",
  "R04_GPP_09": "Ułóż etapy życia tasiemca od wydalenia jego jaj.",
  "R04_NPM_03": "Ułóż, jak glista rozwija się w organizmie człowieka.",
  "R04_NPM_05": "Jak nazywa się zgrubienie na ciele dżdżownicy?",
  "R04_RYPL_10": "Ułóż po kolei etapy rozwoju żaby.",
  "R04_GAPT_08": "Połącz pióra ptaka z ich zadaniami.",
  "R04_SSAK_07": "Połącz ssaki z grupami: stekowce, torbacze i łożyskowce.",
  "R04_HARD_09": "Połącz część ciała zwierzęcia z grupą, która ją ma."
};

const chapter = {
  "id": "r04",
  "number": 4,
  "title": "IV. Zwierzęta",
  "icon": "🐾",
  "sectionOrder": [
    "Tkanki zwierzęce",
    "Gąbki, parzydełkowce i płazińce",
    "Nicienie, pierścienice, mięczaki i stawonogi",
    "Ryby i płazy",
    "Gady i ptaki",
    "Ssaki"
  ],
  "sectionIcons": {
    "Tkanki zwierzęce": "🧬",
    "Gąbki, parzydełkowce i płazińce": "🪸",
    "Nicienie, pierścienice, mięczaki i stawonogi": "🪱",
    "Ryby i płazy": "🐸",
    "Gady i ptaki": "🦎",
    "Ssaki": "🐬"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
