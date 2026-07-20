// Skróty sekcji (do identyfikatorów ćwiczeń):
//   BIO  = Biologia jako nauka
//   DZI  = Działy biologii i przyrządy
//   OBS  = Obserwacje i dokumentowanie
//   MET  = Metoda naukowa
//   MIK  = Mikroskop i preparaty
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_BIO_01",
    "section": "Biologia jako nauka",
    "type": "single_choice",
    "prompt": "Czym zajmuje się biologia?",
    "options": [
      "Badaniem życia i organizmów",
      "Badaniem wyłącznie skał",
      "Badaniem dziejów państw",
      "Badaniem utworów literackich",
      "Badaniem języków",
      "Badaniem wyłącznie pogody"
    ],
    "answer": 0,
    "image": "r01_nauki_przyrodnicze.jpg",
    "explanation": "Biologia to nauka o życiu i organizmach. Jej nazwa pochodzi od greckich słów bios i logos."
  },
  {
    "id": "R01_BIO_02",
    "section": "Biologia jako nauka",
    "type": "fill_in",
    "prompt": "Nazwa biologia pochodzi od greckich słów __________ oznaczającego życie i __________ oznaczającego słowo.",
    "options": null,
    "answer": [
      "bios",
      "logos"
    ],
    "altAnswers": [
      [
        "bios"
      ],
      [
        "logos"
      ]
    ],
    "explanation": "Greckie bios oznacza życie, a logos - słowo."
  },
  {
    "id": "R01_BIO_03",
    "section": "Biologia jako nauka",
    "type": "true_false",
    "prompt": "Nauki przyrodnicze badają różne aspekty świata materialnego.",
    "options": null,
    "answer": true,
    "explanation": "Do nauk przyrodniczych należą dziedziny badające świat materialny, między innymi biologia, chemia i fizyka."
  },
  {
    "id": "R01_BIO_04",
    "section": "Biologia jako nauka",
    "type": "multi_select",
    "prompt": "Zaznacz nauki przyrodnicze wymienione w rozdziale.",
    "options": [
      "Biologia",
      "Chemia",
      "Fizyka",
      "Geografia",
      "Astronomia",
      "Historia"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "W rozdziale jako nauki przyrodnicze wskazano biologię, chemię, fizykę, geografię i astronomię."
  },
  {
    "id": "R01_BIO_05",
    "section": "Biologia jako nauka",
    "type": "match",
    "prompt": "Połącz rodzaj wiedzy lub znaczenie nauki z właściwym opisem.",
    "options": null,
    "left": [
      "Nauka jako proces",
      "Nauka jako wiedza",
      "Wiedza potoczna",
      "Wiedza naukowa"
    ],
    "right": [
      "Poznawanie przez czynności badawcze",
      "Uporządkowany zbiór wyników i teorii",
      "Nieuporządkowane codzienne informacje",
      "Wiedza oparta na metodzie naukowej"
    ],
    "answer": {
      "Nauka jako proces": "Poznawanie przez czynności badawcze",
      "Nauka jako wiedza": "Uporządkowany zbiór wyników i teorii",
      "Wiedza potoczna": "Nieuporządkowane codzienne informacje",
      "Wiedza naukowa": "Wiedza oparta na metodzie naukowej"
    },
    "explanation": "Nauka oznacza zarówno proces poznawania, jak i uporządkowaną wiedzę. Wiedza naukowa powstaje według określonych procedur, a potoczna może być przypadkowa i błędna."
  },
  {
    "id": "R01_BIO_06",
    "section": "Biologia jako nauka",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: biologia, chemia, fizyka, historia, astronomia.",
    "options": null,
    "answer": "historia",
    "explanation": "Biologia, chemia, fizyka i astronomia zostały w rozdziale zaliczone do nauk przyrodniczych, a historia nie."
  },
  {
    "id": "R01_BIO_07",
    "section": "Biologia jako nauka",
    "type": "scenario",
    "prompt": "W dwóch książkach znajdujesz odmienne informacje o tym samym zjawisku biologicznym. Jak najlepiej postąpić?",
    "options": [
      "Porównać fakty i argumenty w kilku źródłach",
      "Wybrać zawsze starszą książkę",
      "Uznać każdą informację za opinię",
      "Zignorować wszystkie źródła",
      "Wybrać książkę z większą liczbą ilustracji",
      "Przyjąć pierwszą przeczytaną wersję"
    ],
    "answer": 0,
    "image": "r01_nauki_przyrodnicze.jpg",
    "explanation": "Nauka stale się rozwija, dlatego nowsze ustalenia mogą różnić się od starszych. Najlepiej korzystać z kilku źródeł i porównywać przedstawione fakty oraz argumenty."
  },
  {
    "id": "R01_BIO_08",
    "section": "Biologia jako nauka",
    "type": "riddle",
    "prompt": "Uporządkowany sposób prowadzenia obserwacji i doświadczeń to metoda...",
    "options": null,
    "answer": "naukowa",
    "altAnswers": [
      "naukowa",
      "metoda naukowa"
    ],
    "explanation": "Metoda naukowa określa sposób prowadzenia badań i pomaga ograniczać błędy w poznawaniu świata."
  },
  {
    "id": "R01_BIO_09",
    "section": "Biologia jako nauka",
    "type": "single_choice",
    "prompt": "Dlaczego wiedza naukowa jest zwykle bardziej wiarygodna od potocznej?",
    "options": [
      "Powstaje z użyciem określonych procedur i przyrządów",
      "Zawsze pochodzi od jednej osoby",
      "Nie wymaga sprawdzania",
      "Opiera się wyłącznie na zmysłach",
      "Nigdy się nie zmienia",
      "Nie korzysta z pomiarów"
    ],
    "answer": 0,
    "explanation": "Procedury obserwacji i doświadczeń ograniczają błędy, a przyrządy umożliwiają dokładniejsze obserwacje i pomiary."
  },
  {
    "id": "R01_BIO_10",
    "section": "Biologia jako nauka",
    "type": "sort",
    "prompt": "Przyporządkuj sposoby poznawania świata do właściwej grupy.",
    "options": null,
    "items": [
      "wzrok",
      "słuch",
      "węch",
      "rozmowa",
      "czytanie książek",
      "przeglądanie informacji w internecie"
    ],
    "categories": [
      "zmysły",
      "wymiana informacji"
    ],
    "answer": {
      "zmysły": [
        "wzrok",
        "słuch",
        "węch"
      ],
      "wymiana informacji": [
        "rozmowa",
        "czytanie książek",
        "przeglądanie informacji w internecie"
      ]
    },
    "explanation": "Świat poznajemy bezpośrednio zmysłami oraz pośrednio dzięki wymianie informacji z innymi ludźmi."
  },
  {
    "id": "R01_BIO_11",
    "section": "Biologia jako nauka",
    "type": "true_false",
    "prompt": "Ludzie od dawna poznawali przyrodę zarówno po to, by przeżyć, jak i z ciekawości.",
    "options": null,
    "answer": true,
    "explanation": "Wiedza pomagała między innymi odróżniać zwierzęta niebezpieczne od niegroźnych i rośliny jadalne od trujących, a także odpowiadać na pytania o świat."
  },
  {
    "id": "R01_BIO_12",
    "section": "Biologia jako nauka",
    "type": "single_choice",
    "prompt": "Co sprawia, że wiedza pojedynczych osób może stać się wspólną wiedzą ludzkości?",
    "options": [
      "Współpraca i wymiana informacji",
      "Unikanie dyskusji",
      "Ograniczanie obserwacji",
      "Poleganie na jednym źródle",
      "Rezygnacja z pomiarów",
      "Ukrywanie wyników"
    ],
    "answer": 0,
    "explanation": "Nauka rozwija się dzięki współpracy, podczas której sumuje się wiedza wielu ludzi."
  },
  {
    "id": "R01_DZI_01",
    "section": "Działy biologii i przyrządy",
    "type": "match",
    "prompt": "Połącz dział biologii z przedmiotem jego badań.",
    "options": null,
    "left": [
      "zoologia",
      "botanika",
      "mykologia",
      "mikrobiologia"
    ],
    "right": [
      "zwierzęta",
      "rośliny",
      "grzyby",
      "mikroorganizmy"
    ],
    "answer": {
      "zoologia": "zwierzęta",
      "botanika": "rośliny",
      "mykologia": "grzyby",
      "mikrobiologia": "mikroorganizmy"
    },
    "image": "r01_dzialy_biologii.jpg",
    "explanation": "Zoologia bada zwierzęta, botanika rośliny, mykologia grzyby, a mikrobiologia mikroorganizmy."
  },
  {
    "id": "R01_DZI_02",
    "section": "Działy biologii i przyrządy",
    "type": "single_choice",
    "prompt": "Który dział biologii zajmuje się zwierzętami?",
    "options": [
      "Zoologia",
      "Botanika",
      "Mykologia",
      "Mikrobiologia",
      "Anatomia",
      "Ekologia"
    ],
    "answer": 0,
    "explanation": "Zoologia to nauka o zwierzętach."
  },
  {
    "id": "R01_DZI_03",
    "section": "Działy biologii i przyrządy",
    "type": "multi_select",
    "prompt": "Zaznacz działy biologii wyróżnione ze względu na problematykę badań.",
    "options": [
      "Anatomia",
      "Fizjologia",
      "Genetyka",
      "Ekologia",
      "Botanika",
      "Zoologia"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Anatomia, fizjologia, genetyka i ekologia są przykładami działów wyodrębnionych według problematyki badań. Botanika i zoologia wyróżniono według przedmiotu badań."
  },
  {
    "id": "R01_DZI_04",
    "section": "Działy biologii i przyrządy",
    "type": "fill_in",
    "prompt": "Nauka o budowie wewnętrznej organizmów to __________, a nauka o procesach życiowych organizmów to __________.",
    "options": null,
    "answer": [
      "anatomia",
      "fizjologia"
    ],
    "altAnswers": [
      [
        "anatomia"
      ],
      [
        "fizjologia"
      ]
    ],
    "explanation": "Anatomia opisuje budowę wewnętrzną, natomiast fizjologia bada procesy życiowe organizmów."
  },
  {
    "id": "R01_DZI_05",
    "section": "Działy biologii i przyrządy",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: botanika, zoologia, mykologia, astronomia, mikrobiologia.",
    "options": null,
    "answer": "astronomia",
    "explanation": "Botanika, zoologia, mykologia i mikrobiologia to działy biologii wyróżnione według przedmiotu badań. Astronomia jest odrębną nauką przyrodniczą."
  },
  {
    "id": "R01_DZI_06",
    "section": "Działy biologii i przyrządy",
    "type": "sort",
    "prompt": "Przyporządkuj działy biologii do sposobu ich wyodrębnienia.",
    "options": null,
    "items": [
      "zoologia",
      "botanika",
      "mykologia",
      "mikrobiologia",
      "anatomia",
      "fizjologia",
      "genetyka",
      "ekologia"
    ],
    "categories": [
      "według przedmiotu badań",
      "według problematyki badań"
    ],
    "answer": {
      "według przedmiotu badań": [
        "zoologia",
        "botanika",
        "mykologia",
        "mikrobiologia"
      ],
      "według problematyki badań": [
        "anatomia",
        "fizjologia",
        "genetyka",
        "ekologia"
      ]
    },
    "explanation": "Pierwsza grupa dotyczy określonych grup organizmów, a druga - zagadnień badanych u różnych organizmów."
  },
  {
    "id": "R01_DZI_07",
    "section": "Działy biologii i przyrządy",
    "type": "riddle",
    "prompt": "Jestem nauką o mikroorganizmach. Jak się nazywam?",
    "options": null,
    "answer": "mikrobiologia",
    "altAnswers": [
      "mikrobiologia"
    ],
    "explanation": "Mikrobiologia zajmuje się badaniem mikroorganizmów."
  },
  {
    "id": "R01_DZI_08",
    "section": "Działy biologii i przyrządy",
    "type": "true_false",
    "prompt": "Ekologia bada zależności między organizmami a środowiskiem.",
    "options": null,
    "answer": true,
    "explanation": "Przedmiotem ekologii są zależności organizmów między sobą oraz z ich środowiskiem."
  },
  {
    "id": "R01_DZI_09",
    "section": "Działy biologii i przyrządy",
    "type": "scenario",
    "prompt": "Badacz opisuje budowę i różnorodność grzybów znalezionych w lesie. Z którego działu biologii korzysta przede wszystkim?",
    "options": [
      "Mykologii",
      "Zoologii",
      "Botaniki",
      "Mikrobiologii",
      "Genetyki",
      "Anatomii"
    ],
    "answer": 0,
    "image": "r01_dzialy_biologii.jpg",
    "explanation": "Mykologia jest nauką o grzybach."
  },
  {
    "id": "R01_DZI_10",
    "section": "Działy biologii i przyrządy",
    "type": "multi_select",
    "prompt": "Zaznacz przyrządy znane z lekcji przyrody, które wskazano w rozdziale.",
    "options": [
      "Taśma miernicza",
      "Lornetka",
      "Lupa",
      "Mikroskop",
      "Teleskop radiowy",
      "Sejsmograf"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r01_przyrzady_badawcze.jpg",
    "explanation": "W rozdziale pokazano taśmę mierniczą, lornetkę, lupę i mikroskop jako podstawowe przyrządy badawcze."
  },
  {
    "id": "R01_DZI_11",
    "section": "Działy biologii i przyrządy",
    "type": "single_choice",
    "prompt": "Który przyrząd wykrywa ruch i automatycznie wykonuje zdjęcia dzikich zwierząt?",
    "options": [
      "Fotopułapka",
      "Lupa",
      "Taśma miernicza",
      "Mikroskop optyczny",
      "Pipeta",
      "Siatka na owady"
    ],
    "answer": 0,
    "image": "r01_fotopulapka.jpg",
    "explanation": "Fotopułapka reaguje na ruch i automatycznie fotografuje dzikie zwierzęta."
  },
  {
    "id": "R01_DZI_12",
    "section": "Działy biologii i przyrządy",
    "type": "match",
    "prompt": "Połącz specjalistyczny sprzęt z jego zastosowaniem.",
    "options": null,
    "left": [
      "mikroskop elektronowy",
      "fotopułapka",
      "siatka do łapania owadów"
    ],
    "right": [
      "bardzo szczegółowa obserwacja obiektów",
      "automatyczne zdjęcia dzikich zwierząt",
      "chwytanie owadów bez krzywdzenia"
    ],
    "answer": {
      "mikroskop elektronowy": "bardzo szczegółowa obserwacja obiektów",
      "fotopułapka": "automatyczne zdjęcia dzikich zwierząt",
      "siatka do łapania owadów": "chwytanie owadów bez krzywdzenia"
    },
    "explanation": "Każdy z tych przyrządów umożliwia inny rodzaj badania: szczegółową obserwację, rejestrację zwierząt lub bezpieczne chwytanie owadów."
  },
  {
    "id": "R01_OBS_01",
    "section": "Obserwacje i dokumentowanie",
    "type": "single_choice",
    "prompt": "Na czym polega obserwacja biologiczna?",
    "options": [
      "Na przyglądaniu się organizmom lub procesom",
      "Na celowej zmianie jednego czynnika",
      "Na zgadywaniu bez zbierania danych",
      "Na niszczeniu badanego obiektu",
      "Na zmianie wszystkich warunków naraz",
      "Na opisywaniu wyłącznie własnych opinii"
    ],
    "answer": 0,
    "image": "r01_obserwacja_wiewiorki.jpg",
    "explanation": "Obserwacja polega na przyglądaniu się wybranemu organizmowi albo procesowi przyrodniczemu i zbieraniu informacji."
  },
  {
    "id": "R01_OBS_02",
    "section": "Obserwacje i dokumentowanie",
    "type": "true_false",
    "prompt": "Podczas obserwacji nie wprowadza się celowej zmiany badanego czynnika.",
    "options": null,
    "answer": true,
    "explanation": "Celowa zmiana jednego czynnika jest cechą doświadczenia, a nie samej obserwacji."
  },
  {
    "id": "R01_OBS_03",
    "section": "Obserwacje i dokumentowanie",
    "type": "multi_select",
    "prompt": "Zaznacz materiały przydatne podczas obserwacji ssaków lub ptaków w parku.",
    "options": [
      "Lornetka",
      "Aparat fotograficzny lub smartfon",
      "Notatnik",
      "Młotek",
      "Szkiełko nakrywkowe",
      "Palnik"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Do takiej obserwacji przydają się lornetka, aparat lub smartfon oraz notatnik tradycyjny albo elektroniczny."
  },
  {
    "id": "R01_OBS_04",
    "section": "Obserwacje i dokumentowanie",
    "type": "sequence",
    "prompt": "Ułóż czynności podczas obserwacji zwierząt w logicznej kolejności.",
    "options": null,
    "items": [
      "Zanotuj informacje i wykonaj zdjęcia",
      "Zajmij spokojne nieruchome miejsce",
      "Powoli skieruj wzrok w stronę ruchu lub szelestu",
      "Cierpliwie obserwuj otoczenie",
      "Przygotuj lornetkę i aparat"
    ],
    "answer": [
      "Przygotuj lornetkę i aparat",
      "Zajmij spokojne nieruchome miejsce",
      "Cierpliwie obserwuj otoczenie",
      "Powoli skieruj wzrok w stronę ruchu lub szelestu",
      "Zanotuj informacje i wykonaj zdjęcia"
    ],
    "explanation": "Dobra obserwacja wymaga przygotowania, spokojnego stanowiska, cierpliwości, ostrożnego reagowania na oznaki obecności zwierząt i dokumentacji."
  },
  {
    "id": "R01_OBS_05",
    "section": "Obserwacje i dokumentowanie",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do sposobów dokumentowania badań: fotografia, rysunek, tabela, wykres, zapach.",
    "options": null,
    "answer": "zapach",
    "explanation": "Wyniki można dokumentować fotografiami, rysunkami, tabelami i wykresami. Zapach nie jest formą zapisu wyników."
  },
  {
    "id": "R01_OBS_06",
    "section": "Obserwacje i dokumentowanie",
    "type": "scenario",
    "prompt": "W doświadczeniu z rozkładem liści jeden pojemnik zawiera ziemię, suche liście i dżdżownice, a drugi tylko ziemię i suche liście. Który zestaw jest próbą badawczą?",
    "options": [
      "Pojemnik z dżdżownicami",
      "Pojemnik bez dżdżownic",
      "Oba pojemniki jednocześnie",
      "Pusty pojemnik",
      "Pojemnik tylko z wodą",
      "Pojemnik tylko z liśćmi"
    ],
    "answer": 0,
    "image": "r01_dzdzownice_liscie.jpg",
    "explanation": "W próbie badawczej zmieniono jeden czynnik - dodano dżdżownice. Próba bez dżdżownic służy do porównania."
  },
  {
    "id": "R01_OBS_07",
    "section": "Obserwacje i dokumentowanie",
    "type": "fill_in",
    "prompt": "Opis zmian zaobserwowanych w obu zestawach to __________, a potwierdzenie lub odrzucenie hipotezy to __________.",
    "options": null,
    "answer": [
      "wynik",
      "wniosek"
    ],
    "altAnswers": [
      [
        "wynik",
        "wyniki"
      ],
      [
        "wniosek",
        "wnioski"
      ]
    ],
    "explanation": "Wynik opisuje zaobserwowane zmiany, natomiast wniosek mówi, czy hipoteza została potwierdzona lub odrzucona."
  },
  {
    "id": "R01_OBS_08",
    "section": "Obserwacje i dokumentowanie",
    "type": "riddle",
    "prompt": "Metoda polegająca na uważnym przyglądaniu się wiewiórce bez celowej zmiany warunków to...",
    "options": null,
    "answer": "obserwacja",
    "altAnswers": [
      "obserwacja"
    ],
    "image": "r01_obserwacja_wiewiorki.jpg",
    "explanation": "Przyglądanie się zachowaniu zwierzęcia i zapisywanie informacji jest obserwacją."
  },
  {
    "id": "R01_OBS_09",
    "section": "Obserwacje i dokumentowanie",
    "type": "match",
    "prompt": "Połącz formę dokumentacji z przykładem.",
    "options": null,
    "left": [
      "fotografia",
      "rysunek",
      "tabela",
      "wykres"
    ],
    "right": [
      "zdjęcie rosnącej cebuli",
      "szkic komórek widzianych pod mikroskopem",
      "zapis wyników w wierszach i kolumnach",
      "graficzne porównanie długości liści"
    ],
    "answer": {
      "fotografia": "zdjęcie rosnącej cebuli",
      "rysunek": "szkic komórek widzianych pod mikroskopem",
      "tabela": "zapis wyników w wierszach i kolumnach",
      "wykres": "graficzne porównanie długości liści"
    },
    "explanation": "Różne formy dokumentacji uzupełniają się i pozwalają zapisać wygląd, przebieg oraz wyniki badań."
  },
  {
    "id": "R01_OBS_10",
    "section": "Obserwacje i dokumentowanie",
    "type": "sort",
    "prompt": "Przyporządkuj sytuacje do obserwacji albo doświadczenia.",
    "options": null,
    "items": [
      "przyglądanie się wiewiórce w parku",
      "oglądanie preparatu mikroskopowego",
      "porównanie cebuli w świetle i ciemności",
      "porównanie liści z dżdżownicami i bez nich"
    ],
    "categories": [
      "obserwacja",
      "doświadczenie"
    ],
    "answer": {
      "obserwacja": [
        "przyglądanie się wiewiórce w parku",
        "oglądanie preparatu mikroskopowego"
      ],
      "doświadczenie": [
        "porównanie cebuli w świetle i ciemności",
        "porównanie liści z dżdżownicami i bez nich"
      ]
    },
    "explanation": "W obserwacji zbiera się informacje bez celowej zmiany czynnika, a w doświadczeniu porównuje się zestawy różniące się jednym czynnikiem."
  },
  {
    "id": "R01_OBS_11",
    "section": "Obserwacje i dokumentowanie",
    "type": "true_false",
    "prompt": "Wszystkie obserwacje i doświadczenia powinny być udokumentowane.",
    "options": null,
    "answer": true,
    "explanation": "Dokumentacja pozwala zachować wyniki, porównać próby i uzasadnić wniosek."
  },
  {
    "id": "R01_OBS_12",
    "section": "Obserwacje i dokumentowanie",
    "type": "single_choice",
    "prompt": "Dlaczego doświadczenie należy wykonać co najmniej w trzech powtórzeniach?",
    "options": [
      "Aby wyniki były bardziej wiarygodne",
      "Aby zmienić kilka czynników",
      "Aby nie tworzyć próby kontrolnej",
      "Aby nie zapisywać wyników",
      "Aby każda próba miała inne warunki",
      "Aby zawsze potwierdzić hipotezę"
    ],
    "answer": 0,
    "explanation": "Powtórzenia ograniczają wpływ przypadku i zwiększają wiarygodność wyników."
  },
  {
    "id": "R01_MET_01",
    "section": "Metoda naukowa",
    "type": "sequence",
    "prompt": "Ułóż główne etapy procesu badawczego w kolejności.",
    "options": null,
    "items": [
      "Sformułowanie hipotezy",
      "Wyciągnięcie wniosku",
      "Przeprowadzenie doświadczenia",
      "Obserwacja",
      "Sformułowanie problemu badawczego"
    ],
    "answer": [
      "Obserwacja",
      "Sformułowanie problemu badawczego",
      "Sformułowanie hipotezy",
      "Przeprowadzenie doświadczenia",
      "Wyciągnięcie wniosku"
    ],
    "image": "r01_cebulowe_doswiadczenie.jpg",
    "explanation": "Obserwacja prowadzi do pytania badawczego, następnie stawia się hipotezę, wykonuje doświadczenie i na podstawie wyników formułuje wniosek."
  },
  {
    "id": "R01_MET_02",
    "section": "Metoda naukowa",
    "type": "single_choice",
    "prompt": "Czym jest problem badawczy?",
    "options": [
      "Pytaniem, na które chcemy znaleźć odpowiedź",
      "Gotowym wnioskiem",
      "Listą przyrządów",
      "Opisem wyłącznie próby kontrolnej",
      "Przypadkową opinią",
      "Rysunkiem badanego obiektu"
    ],
    "answer": 0,
    "explanation": "Problem badawczy ma formę pytania i określa, czego chcemy się dowiedzieć."
  },
  {
    "id": "R01_MET_03",
    "section": "Metoda naukowa",
    "type": "riddle",
    "prompt": "Przewidywana odpowiedź na problem badawczy to...",
    "options": null,
    "answer": "hipoteza",
    "altAnswers": [
      "hipoteza"
    ],
    "explanation": "Hipoteza jest przypuszczalną odpowiedzią, którą sprawdza się w doświadczeniu."
  },
  {
    "id": "R01_MET_04",
    "section": "Metoda naukowa",
    "type": "scenario",
    "prompt": "Cebulę umieszczono w lodówce, a drugą w kartonowym pudełku w temperaturze pokojowej. Obie rosły bez światła. Jaki czynnik sprawdzano?",
    "options": [
      "Temperaturę",
      "Dostęp do wody",
      "Rodzaj gleby",
      "Wielkość cebuli",
      "Obecność dżdżownic",
      "Rodzaj pojemnika"
    ],
    "answer": 0,
    "image": "r01_cebulowe_doswiadczenie.jpg",
    "explanation": "W pierwszym doświadczeniu zmieniono temperaturę, a brak światła utrzymano w obu próbach."
  },
  {
    "id": "R01_MET_05",
    "section": "Metoda naukowa",
    "type": "true_false",
    "prompt": "Pierwsze doświadczenie z cebulą potwierdziło, że niska temperatura powoduje jasny kolor liści.",
    "options": null,
    "answer": false,
    "image": "r01_cebulowe_doswiadczenie.jpg",
    "explanation": "W obu próbach liście były jasne, dlatego hipotezę o wpływie niskiej temperatury odrzucono."
  },
  {
    "id": "R01_MET_06",
    "section": "Metoda naukowa",
    "type": "multi_select",
    "prompt": "Zaznacz warunki, które w pierwszym doświadczeniu z cebulą utrzymano jako jednakowe.",
    "options": [
      "Brak światła",
      "Badany gatunek rośliny",
      "Temperatura",
      "Czas obserwacji",
      "Miejsce przechowywania",
      "Dostęp do lodówki"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Aby badać wpływ temperatury, należało utrzymać takie same pozostałe istotne warunki, między innymi brak światła, rodzaj rośliny i czas obserwacji."
  },
  {
    "id": "R01_MET_07",
    "section": "Metoda naukowa",
    "type": "fill_in",
    "prompt": "W próbie __________ celowo zmienia się jeden czynnik, natomiast próba __________ służy do porównania wyników.",
    "options": null,
    "answer": [
      "badawczej",
      "kontrolna"
    ],
    "altAnswers": [
      [
        "badawczej",
        "badawcza"
      ],
      [
        "kontrolna",
        "kontrolnej"
      ]
    ],
    "explanation": "Próba badawcza zawiera zmieniony czynnik, a kontrolna stanowi punkt odniesienia."
  },
  {
    "id": "R01_MET_08",
    "section": "Metoda naukowa",
    "type": "match",
    "prompt": "Połącz element doświadczenia z dżdżownicami z jego rolą.",
    "options": null,
    "left": [
      "Problem badawczy",
      "Hipoteza",
      "Próba badawcza",
      "Próba kontrolna"
    ],
    "right": [
      "Czy dżdżownice przyspieszają rozkład suchych liści?",
      "Obecność dżdżownic przyspiesza rozkład liści",
      "Ziemia i liście z dżdżownicami",
      "Ziemia i liście bez dżdżownic"
    ],
    "answer": {
      "Problem badawczy": "Czy dżdżownice przyspieszają rozkład suchych liści?",
      "Hipoteza": "Obecność dżdżownic przyspiesza rozkład liści",
      "Próba badawcza": "Ziemia i liście z dżdżownicami",
      "Próba kontrolna": "Ziemia i liście bez dżdżownic"
    },
    "image": "r01_dzdzownice_liscie.jpg",
    "explanation": "Doświadczenie porównuje dwa podobne zestawy, które różnią się obecnością dżdżownic."
  },
  {
    "id": "R01_MET_09",
    "section": "Metoda naukowa",
    "type": "sort",
    "prompt": "Przyporządkuj czynności do etapu przed doświadczeniem, w trakcie lub po nim.",
    "options": null,
    "items": [
      "sformułowanie hipotezy",
      "przygotowanie prób",
      "obserwowanie obu prób",
      "zapisywanie wyników",
      "porównanie wyników",
      "sformułowanie wniosku"
    ],
    "categories": [
      "przed doświadczeniem",
      "w trakcie doświadczenia",
      "po doświadczeniu"
    ],
    "answer": {
      "przed doświadczeniem": [
        "sformułowanie hipotezy",
        "przygotowanie prób"
      ],
      "w trakcie doświadczenia": [
        "obserwowanie obu prób",
        "zapisywanie wyników"
      ],
      "po doświadczeniu": [
        "porównanie wyników",
        "sformułowanie wniosku"
      ]
    },
    "explanation": "Najpierw planuje się badanie, potem wykonuje i dokumentuje doświadczenie, a na końcu analizuje wyniki oraz wyciąga wniosek."
  },
  {
    "id": "R01_MET_10",
    "section": "Metoda naukowa",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do elementów metody naukowej: problem badawczy, hipoteza, doświadczenie, wniosek, plotka.",
    "options": null,
    "answer": "plotka",
    "explanation": "Plotka nie jest elementem metody naukowej. Pozostałe pojęcia należą do procesu badawczego."
  },
  {
    "id": "R01_MET_11",
    "section": "Metoda naukowa",
    "type": "scenario",
    "prompt": "W drugim doświadczeniu sprawdzasz wpływ światła na kolor liści cebuli. Który zestaw jest próbą kontrolną?",
    "options": [
      "Cebula rosnąca na parapecie w świetle",
      "Cebula rosnąca w kartonowym pudełku",
      "Cebula przechowywana w lodówce",
      "Pusty karton",
      "Sama gleba bez cebuli",
      "Cebula zanurzona w wodzie"
    ],
    "answer": 0,
    "explanation": "W próbie kontrolnej cebula rośnie w zwykłych warunkach z dostępem do światła, a próbą badawczą jest cebula uprawiana w ciemności."
  },
  {
    "id": "R01_MET_12",
    "section": "Metoda naukowa",
    "type": "single_choice",
    "prompt": "Jaki wniosek wynikał z drugiego doświadczenia z cebulą?",
    "options": [
      "Brak światła powoduje jasny kolor liści",
      "Niska temperatura zawsze zatrzymuje wzrost",
      "Światło powoduje rozkład liści",
      "Dżdżownice nadają liściom zielony kolor",
      "Karton przyspiesza wzrost cebuli",
      "Woda nie jest potrzebna roślinom"
    ],
    "answer": 0,
    "explanation": "Roślina w ciemności miała jasne liście, a roślina w świetle intensywnie zielone, więc hipoteza o wpływie braku światła została potwierdzona."
  },
  {
    "id": "R01_MIK_01",
    "section": "Mikroskop i preparaty",
    "type": "match",
    "prompt": "Połącz część mikroskopu z jej funkcją.",
    "options": null,
    "left": [
      "okular",
      "rewolwer",
      "stolik",
      "śruba makrometryczna",
      "śruba mikrometryczna"
    ],
    "right": [
      "powiększa obraz wytworzony przez obiektyw",
      "umożliwia zmianę obiektywu",
      "miejsce umieszczenia preparatu",
      "służy do zgrubnego ustawienia ostrości",
      "służy do precyzyjnego ustawienia ostrości"
    ],
    "answer": {
      "okular": "powiększa obraz wytworzony przez obiektyw",
      "rewolwer": "umożliwia zmianę obiektywu",
      "stolik": "miejsce umieszczenia preparatu",
      "śruba makrometryczna": "służy do zgrubnego ustawienia ostrości",
      "śruba mikrometryczna": "służy do precyzyjnego ustawienia ostrości"
    },
    "image": "r01_mikroskop_budowa.jpg",
    "explanation": "Części mikroskopu mają różne zadania: tworzą i powiększają obraz, utrzymują preparat oraz pozwalają regulować ostrość."
  },
  {
    "id": "R01_MIK_02",
    "section": "Mikroskop i preparaty",
    "type": "single_choice",
    "prompt": "Która część mikroskopu służy do precyzyjnego ustawiania ostrości?",
    "options": [
      "Śruba mikrometryczna",
      "Śruba makrometryczna",
      "Stolik",
      "Statyw",
      "Tubus",
      "Rewolwer"
    ],
    "answer": 0,
    "image": "r01_mikroskop_budowa.jpg",
    "explanation": "Śruba mikrometryczna służy do dokładnej, precyzyjnej regulacji ostrości obrazu."
  },
  {
    "id": "R01_MIK_03",
    "section": "Mikroskop i preparaty",
    "type": "multi_select",
    "prompt": "Zaznacz elementy układu optycznego mikroskopu.",
    "options": [
      "Okular",
      "Obiektyw",
      "Stolik",
      "Statyw",
      "Rewolwer",
      "Śruba makrometryczna"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Okular i obiektyw tworzą układ optyczny. Pozostałe wymienione części należą do części mechanicznych mikroskopu."
  },
  {
    "id": "R01_MIK_04",
    "section": "Mikroskop i preparaty",
    "type": "true_false",
    "prompt": "Obserwację mikroskopową należy rozpocząć od najmniejszego powiększenia.",
    "options": null,
    "answer": true,
    "explanation": "Najmniejsze powiększenie ułatwia odnalezienie preparatu w polu widzenia i bezpieczne ustawienie ostrości."
  },
  {
    "id": "R01_MIK_05",
    "section": "Mikroskop i preparaty",
    "type": "fill_in",
    "prompt": "Nowoczesny mikroskop optyczny może powiększać obraz nawet __________ razy i pozwala dostrzec szczegóły wielkości około __________ milimetra.",
    "options": null,
    "answer": [
      "1000",
      "0,0002"
    ],
    "altAnswers": [
      [
        "1000",
        "1000 razy"
      ],
      [
        "0,0002",
        "0.0002"
      ]
    ],
    "image": "r01_mikroskop_budowa.jpg",
    "explanation": "W rozdziale podano powiększenie do 1000 razy oraz możliwość obserwacji szczegółów o wielkości około 0,0002 mm."
  },
  {
    "id": "R01_MIK_06",
    "section": "Mikroskop i preparaty",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do narzędzi potrzebnych do wykonania preparatu mikroskopowego: szkiełko podstawowe, szkiełko nakrywkowe, pipeta, pęseta, lornetka.",
    "options": null,
    "answer": "lornetka",
    "explanation": "Lornetka służy do obserwacji odległych obiektów, a pozostałe narzędzia wykorzystuje się przy przygotowywaniu preparatu mikroskopowego."
  },
  {
    "id": "R01_MIK_07",
    "section": "Mikroskop i preparaty",
    "type": "sequence",
    "prompt": "Ułóż czynności przygotowania preparatu ze skórki liścia cebuli.",
    "options": null,
    "items": [
      "Przykryj materiał szkiełkiem nakrywkowym",
      "Umieść kroplę wody na szkiełku podstawowym",
      "Umieść skórkę w kropli wody",
      "Zdejmij cienki fragment skórki cebuli"
    ],
    "answer": [
      "Umieść kroplę wody na szkiełku podstawowym",
      "Zdejmij cienki fragment skórki cebuli",
      "Umieść skórkę w kropli wody",
      "Przykryj materiał szkiełkiem nakrywkowym"
    ],
    "image": "r01_preparat_cebuli.jpg",
    "explanation": "Preparat wykonuje się w kropli wody, a cienki fragment skórki przykrywa delikatnie szkiełkiem nakrywkowym, by nie powstały pęcherzyki powietrza."
  },
  {
    "id": "R01_MIK_08",
    "section": "Mikroskop i preparaty",
    "type": "scenario",
    "prompt": "Przygotowujesz preparat z kropli wody ze stawu. Po co umieszcza się w niej mały kłaczek waty?",
    "options": [
      "Aby zmniejszyć ruchliwość organizmów",
      "Aby zwiększyć temperaturę",
      "Aby zabarwić organizmy",
      "Aby usunąć wodę",
      "Aby powiększyć obraz",
      "Aby zastąpić szkiełko nakrywkowe"
    ],
    "answer": 0,
    "image": "r01_kropla_wody.jpg",
    "explanation": "Kłaczek waty ogranicza ruch drobnych organizmów, dzięki czemu łatwiej je obserwować."
  },
  {
    "id": "R01_MIK_09",
    "section": "Mikroskop i preparaty",
    "type": "multi_select",
    "prompt": "Zaznacz materiały potrzebne do przygotowania preparatu z organizmami z wody ze zbiornika.",
    "options": [
      "Szkiełko podstawowe",
      "Szkiełko nakrywkowe",
      "Pipeta lub zakraplacz",
      "Odrobina waty",
      "Lornetka",
      "Taśma miernicza"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r01_kropla_wody.jpg",
    "explanation": "Do preparatu potrzebne są oba szkiełka, narzędzie do pobrania kropli oraz wata ograniczająca ruch organizmów."
  },
  {
    "id": "R01_MIK_10",
    "section": "Mikroskop i preparaty",
    "type": "sort",
    "prompt": "Przyporządkuj części mikroskopu do układu optycznego lub części mechanicznych.",
    "options": null,
    "items": [
      "okular",
      "obiektyw",
      "tubus",
      "rewolwer",
      "stolik",
      "statyw",
      "śruba makrometryczna"
    ],
    "categories": [
      "układ optyczny",
      "części mechaniczne"
    ],
    "answer": {
      "układ optyczny": [
        "okular",
        "obiektyw"
      ],
      "części mechaniczne": [
        "tubus",
        "rewolwer",
        "stolik",
        "statyw",
        "śruba makrometryczna"
      ]
    },
    "image": "r01_mikroskop_budowa.jpg",
    "explanation": "Okular i obiektyw należą do układu optycznego, a pozostałe wymienione elementy są częściami mechanicznymi."
  },
  {
    "id": "R01_MIK_11",
    "section": "Mikroskop i preparaty",
    "type": "riddle",
    "prompt": "Część mikroskopu, która oświetla preparat, to źródło...",
    "options": null,
    "answer": "światła",
    "altAnswers": [
      "światła",
      "źródło światła"
    ],
    "explanation": "Źródło światła umożliwia oświetlenie preparatu obserwowanego w mikroskopie."
  },
  {
    "id": "R01_MIK_12",
    "section": "Mikroskop i preparaty",
    "type": "true_false",
    "prompt": "Dobry preparat mikroskopowy powinien być cienki, aby dobrze przepuszczał światło.",
    "options": null,
    "answer": true,
    "explanation": "Cienki preparat przepuszcza światło, dzięki czemu jego szczegóły są widoczne w mikroskopie optycznym."
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Kto po raz pierwszy użył terminu biologia w 1802 roku według informacji w rozdziale?",
    "options": [
      "Jean Baptiste Lamarck",
      "Antoni van Leeuwenhoek",
      "Karol Linneusz",
      "Robert Hooke",
      "Mikołaj Kopernik",
      "Galileusz"
    ],
    "answer": 0,
    "explanation": "W rozdziale podano, że francuski uczony Jean Baptiste Lamarck użył terminu biologia w 1802 roku."
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz dział biologii z dokładnym zakresem badań podanym w rozdziale.",
    "options": null,
    "left": [
      "biochemia",
      "ewolucjonizm",
      "genetyka",
      "systematyka",
      "ekologia"
    ],
    "right": [
      "skład chemiczny organizmów",
      "powstanie i rozwój życia na Ziemi",
      "zmienność i dziedziczność cech",
      "klasyfikacja gatunków i pokrewieństwa",
      "zależności organizmów ze środowiskiem"
    ],
    "answer": {
      "biochemia": "skład chemiczny organizmów",
      "ewolucjonizm": "powstanie i rozwój życia na Ziemi",
      "genetyka": "zmienność i dziedziczność cech",
      "systematyka": "klasyfikacja gatunków i pokrewieństwa",
      "ekologia": "zależności organizmów ze środowiskiem"
    },
    "image": "r01_dzialy_biologii.jpg",
    "explanation": "Te działy wyróżnia się ze względu na problematykę badań, a każdy obejmuje inny rodzaj zagadnień biologicznych."
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Nauka może oznaczać zarówno proces __________ świata, jak i uporządkowaną __________ naukową.",
    "options": null,
    "answer": [
      "poznawania",
      "wiedzę"
    ],
    "altAnswers": [
      [
        "poznawania",
        "badania"
      ],
      [
        "wiedzę",
        "wiedza"
      ]
    ],
    "explanation": "W rozdziale słowo nauka ma dwa znaczenia: proces poznawania oraz rezultat tego procesu, czyli uporządkowaną wiedzę."
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Dwa odcinki lub kąty wydają się różne z powodu iluzji optycznej. Jak najpewniej sprawdzić, czy rzeczywiście się różnią?",
    "options": [
      "Wykonać pomiar linijką lub kątomierzem",
      "Zapytać jedną przypadkową osobę",
      "Patrzeć na rysunek dłużej",
      "Wybrać odpowiedź zgodną z pierwszym wrażeniem",
      "Zmienić kolor kartki",
      "Nie sprawdzać wyniku"
    ],
    "answer": 0,
    "explanation": "Zmysły mogą ulegać złudzeniom, dlatego wątpliwość należy rozstrzygnąć za pomocą dokładnego pomiaru odpowiednim przyrządem."
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż przebieg dochodzenia do przyczyny jasnego koloru liści cebuli.",
    "options": null,
    "items": [
      "Sprawdzenie wpływu braku światła",
      "Odrzucenie hipotezy o niskiej temperaturze",
      "Zaobserwowanie jasnych liści cebuli z lodówki",
      "Porównanie cebuli w lodówce i w ciemnym pudełku",
      "Potwierdzenie wpływu ciemności"
    ],
    "answer": [
      "Zaobserwowanie jasnych liści cebuli z lodówki",
      "Porównanie cebuli w lodówce i w ciemnym pudełku",
      "Odrzucenie hipotezy o niskiej temperaturze",
      "Sprawdzenie wpływu braku światła",
      "Potwierdzenie wpływu ciemności"
    ],
    "image": "r01_cebulowe_doswiadczenie.jpg",
    "explanation": "Pierwsze doświadczenie wykluczyło temperaturę, a drugie wykazało, że jasny kolor liści wynika z braku światła."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj składniki doświadczenia z dżdżownicami do właściwych zestawów.",
    "options": null,
    "items": [
      "ziemia ogrodowa",
      "suche liście",
      "pięć dżdżownic",
      "jednakowy pojemnik",
      "dwa tygodnie obserwacji"
    ],
    "categories": [
      "w obu próbach",
      "tylko w próbie badawczej"
    ],
    "answer": {
      "w obu próbach": [
        "ziemia ogrodowa",
        "suche liście",
        "jednakowy pojemnik",
        "dwa tygodnie obserwacji"
      ],
      "tylko w próbie badawczej": [
        "pięć dżdżownic"
      ]
    },
    "image": "r01_dzdzownice_liscie.jpg",
    "explanation": "Oba zestawy powinny być takie same poza jednym czynnikiem - obecnością pięciu dżdżownic w próbie badawczej."
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz poprawne informacje o pierwszym doświadczeniu z cebulą.",
    "options": [
      "Próba badawcza znajdowała się w lodówce",
      "Próba kontrolna była w temperaturze pokojowej",
      "Obie próby pozbawiono światła",
      "Hipotezę o temperaturze potwierdzono",
      "W obu próbach liście były jasne",
      "Badanym czynnikiem był dostęp do wody"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "W pierwszym doświadczeniu porównano niską i pokojową temperaturę przy jednakowym braku światła. Jasne liście w obu próbach oznaczały odrzucenie hipotezy."
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jak mały szczegół może być widoczny w nowoczesnym mikroskopie optycznym według rozdziału?",
    "options": [
      "Około 0,0002 mm",
      "Około 0,2 mm",
      "Około 2 mm",
      "Około 20 mm",
      "Około 0,02 m",
      "Około 2 m"
    ],
    "answer": 0,
    "image": "r01_mikroskop_budowa.jpg",
    "explanation": "Podręcznik podaje, że mikroskop optyczny umożliwia dostrzeżenie szczegółów wielkości około 0,0002 mm."
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż czynności obserwacji gotowego preparatu pod mikroskopem.",
    "options": null,
    "items": [
      "Dokładnie ustaw ostrość śrubą mikrometryczną",
      "Umieść preparat na stoliku",
      "Włącz źródło światła",
      "Ustaw najmniejsze powiększenie",
      "Zgrubnie ustaw ostrość śrubą makrometryczną",
      "Ustaw preparat w polu widzenia"
    ],
    "answer": [
      "Włącz źródło światła",
      "Ustaw najmniejsze powiększenie",
      "Umieść preparat na stoliku",
      "Ustaw preparat w polu widzenia",
      "Zgrubnie ustaw ostrość śrubą makrometryczną",
      "Dokładnie ustaw ostrość śrubą mikrometryczną"
    ],
    "explanation": "Najpierw oświetla się preparat i wybiera małe powiększenie, potem umieszcza go w polu widzenia, a ostrość reguluje kolejno śrubą makro- i mikrometryczną."
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż wartość, która nie opisuje dawnych mikroskopów lub mikroskopu Leeuwenhoeka: rok 1590, rok 1625, powiększenie 60 razy, powiększenie 270 razy, powiększenie 1000 razy.",
    "options": null,
    "answer": "powiększenie 1000 razy",
    "explanation": "Powiększenie do 1000 razy dotyczy nowoczesnych mikroskopów optycznych. Pozostałe wartości odnoszą się do historii dawnych mikroskopów opisanej w rozdziale."
  },
  {
    "id": "R01_HARD_11",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Pobierasz wodę ze słoika zawierającego próbkę ze stawu. Gdzie najlepiej nabrać kroplę i co dodać, aby ułatwić obserwację organizmów?",
    "options": [
      "Blisko ścianki słoika i dodać kłaczek waty",
      "Ze środka słoika i dodać piasek",
      "Z powierzchni i dodać sól",
      "Z dna i całkowicie odparować wodę",
      "Z dowolnego miejsca i dodać olej",
      "Blisko ścianki i nie używać szkiełka"
    ],
    "answer": 0,
    "image": "r01_kropla_wody.jpg",
    "explanation": "Wodę najlepiej pobierać blisko ścianek słoika, a mały kłaczek waty zmniejsza ruchliwość organizmów."
  },
  {
    "id": "R01_HARD_12",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz datę lub liczbę z informacją o historii mikroskopu.",
    "options": null,
    "left": [
      "1590",
      "1625",
      "60 razy",
      "270 razy",
      "5 centymetrów"
    ],
    "right": [
      "pierwsze mikroskopy w Holandii",
      "pierwsze użycie słowa mikroskop",
      "maksymalne powiększenie dawnych mikroskopów",
      "powiększenie mikroskopu Leeuwenhoeka",
      "wielkość mikroskopu Leeuwenhoeka"
    ],
    "answer": {
      "1590": "pierwsze mikroskopy w Holandii",
      "1625": "pierwsze użycie słowa mikroskop",
      "60 razy": "maksymalne powiększenie dawnych mikroskopów",
      "270 razy": "powiększenie mikroskopu Leeuwenhoeka",
      "5 centymetrów": "wielkość mikroskopu Leeuwenhoeka"
    },
    "image": "r01_mikroskop_historyczny.jpg",
    "explanation": "Rozdział zestawia te daty i liczby, pokazując rozwój mikroskopii od prostych urządzeń do udoskonalonego mikroskopu Leeuwenhoeka."
  },
  {
    "id": "R01_HARD_13",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Mikroskop Antoniego van Leeuwenhoeka miał jedną soczewkę, a obserwowany materiał umieszczano na czubku igły.",
    "options": null,
    "answer": true,
    "image": "r01_mikroskop_historyczny.jpg",
    "explanation": "Opisany mikroskop był niewielki, miał jedną soczewkę, a próbkę umieszczano na czubku igły."
  },
  {
    "id": "R01_HARD_14",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Siódmego dnia doświadczenia liście cebuli w ciemności miały około 7 cm i były bladozielone, a w świetle około 10 cm i ciemnozielone. Który zapis najwierniej oddaje wynik?",
    "options": [
      "Roślina w świetle miała dłuższe i ciemniej zielone liście",
      "Obie rośliny miały identyczne liście",
      "Roślina w ciemności miała liście dłuższe o 3 cm",
      "Światło spowodowało blady kolor liści",
      "W obu próbach liście miały 10 cm",
      "Nie zaobserwowano żadnego wzrostu"
    ],
    "answer": 0,
    "explanation": "Tabela w rozdziale pokazuje, że po siedmiu dniach cebula w świetle miała liście dłuższe i ciemnozielone, a cebula w ciemności krótsze i bladozielone."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r01",
  number: 1,
  title: "Poznajemy biologię",
  icon: "🔬",
  sectionOrder: [
    "Biologia jako nauka",
    "Działy biologii i przyrządy",
    "Obserwacje i dokumentowanie",
    "Metoda naukowa",
    "Mikroskop i preparaty"
  ],
  sectionIcons: {
    "Biologia jako nauka": "🧬",
    "Działy biologii i przyrządy": "🧪",
    "Obserwacje i dokumentowanie": "👀",
    "Metoda naukowa": "🧠",
    "Mikroskop i preparaty": "🔬"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
