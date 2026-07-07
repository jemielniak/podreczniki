// Rozdział 1: Poznajemy biologię
// Materiał przygotowany dla aplikacji „Biologia bez tajemnic - klasa 5”.

const ALL_EXERCISES =
[
  {
    "id": "BBT_R01_CN_01",
    "section": "Czy biologia jest nauką?",
    "type": "single_choice",
    "prompt": "Czym zajmuje się biologia?",
    "options": [
      "Życiem organizmów",
      "Tylko pogodą",
      "Tylko liczbami",
      "Tylko planetami"
    ],
    "answer": 0,
    "explanation": "Biologia to nauka o życiu i organizmach."
  },
  {
    "id": "BBT_R01_CN_02",
    "section": "Czy biologia jest nauką?",
    "type": "true_false",
    "prompt": "Biologia należy do nauk przyrodniczych.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. W rozdziale biologia jest wymieniona jako jedna z nauk przyrodniczych."
  },
  {
    "id": "BBT_R01_CN_03",
    "section": "Czy biologia jest nauką?",
    "type": "multi_select",
    "prompt": "Zaznacz tylko nauki przyrodnicze pokazane w rozdziale.",
    "options": [
      "Biologia",
      "Geografia",
      "Historia",
      "Astronomia",
      "Chemia",
      "Fizyka"
    ],
    "answer": [
      0,
      1,
      3,
      4,
      5
    ],
    "explanation": "Do nauk przyrodniczych w rozdziale należą biologia, geografia, astronomia, chemia i fizyka. Historia do nich nie należy.",
    "image": "/img/bbt_r01_dzialy_biologii.jpg"
  },
  {
    "id": "BBT_R01_CN_04",
    "section": "Czy biologia jest nauką?",
    "type": "single_choice",
    "prompt": "Który dział biologii bada zwierzęta?",
    "options": [
      "Botanika",
      "Zoologia",
      "Mykologia",
      "Ekologia"
    ],
    "answer": 1,
    "explanation": "Zoologia to nauka o zwierzętach."
  },
  {
    "id": "BBT_R01_CN_05",
    "section": "Czy biologia jest nauką?",
    "type": "single_choice",
    "prompt": "Który dział biologii bada grzyby?",
    "options": [
      "Mykologia",
      "Genetyka",
      "Anatomia",
      "Fizjologia"
    ],
    "answer": 0,
    "explanation": "Mykologia zajmuje się grzybami."
  },
  {
    "id": "BBT_R01_CN_06",
    "section": "Czy biologia jest nauką?",
    "type": "single_choice",
    "prompt": "Który dział biologii bada zależności między organizmami a środowiskiem?",
    "options": [
      "Ekologia",
      "Systematyka",
      "Biochemia",
      "Zoologia"
    ],
    "answer": 0,
    "explanation": "Ekologia bada zależności między organizmami i środowiskiem."
  },
  {
    "id": "BBT_R01_CN_07",
    "section": "Czy biologia jest nauką?",
    "type": "match",
    "prompt": "Połącz dział biologii z tym, co bada.",
    "options": null,
    "left": [
      "botanika",
      "mikrobiologia",
      "anatomia"
    ],
    "right": [
      "rośliny",
      "mikroorganizmy",
      "budowę wewnętrzną organizmów"
    ],
    "answer": {
      "botanika": "rośliny",
      "mikrobiologia": "mikroorganizmy",
      "anatomia": "budowę wewnętrzną organizmów"
    },
    "explanation": "Botanika bada rośliny, mikrobiologia mikroorganizmy, a anatomia budowę wewnętrzną organizmów."
  },
  {
    "id": "BBT_R01_CN_08",
    "section": "Czy biologia jest nauką?",
    "type": "multi_select",
    "prompt": "Jak według rozdziału poznajemy świat?",
    "options": [
      "Za pomocą zmysłów",
      "Dzięki rozmowie i czytaniu",
      "Przez zgadywanie",
      "Przez wymianę informacji z innymi"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Rozdział podaje dwa główne sposoby: zmysły oraz wymianę informacji z innymi ludźmi, na przykład przez rozmowę lub czytanie.",
    "image": "/img/bbt_r01_sposoby_poznawania_swiata.jpg"
  },
  {
    "id": "BBT_R01_CN_09",
    "section": "Czy biologia jest nauką?",
    "type": "match",
    "prompt": "Połącz zmysł z odpowiednim przykładem.",
    "options": null,
    "left": [
      "wzrok",
      "słuch",
      "węch"
    ],
    "right": [
      "widzenie liścia",
      "usłyszenie śpiewu ptaka",
      "wyczucie zapachu kwiatu"
    ],
    "answer": {
      "wzrok": "widzenie liścia",
      "słuch": "usłyszenie śpiewu ptaka",
      "węch": "wyczucie zapachu kwiatu"
    },
    "explanation": "Zmysły pomagają zbierać informacje o świecie."
  },
  {
    "id": "BBT_R01_CN_10",
    "section": "Czy biologia jest nauką?",
    "type": "single_choice",
    "prompt": "Dlaczego wiedza naukowa jest zwykle pewniejsza od potocznej?",
    "options": [
      "Bo opiera się na metodzie naukowej i zasadach badań",
      "Bo jest zawsze starsza",
      "Bo powstaje tylko w internecie",
      "Bo nie używa przyrządów"
    ],
    "answer": 0,
    "explanation": "Wiedza naukowa korzysta z metody naukowej, obserwacji, doświadczeń i przyrządów badawczych.",
    "image": "/img/bbt_r01_wiedza_potoczna_i_naukowa.jpg"
  },
  {
    "id": "BBT_R01_CN_11",
    "section": "Czy biologia jest nauką?",
    "type": "true_false",
    "prompt": "Zmysły czasem mogą nas mylić.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Rozdział podaje przykład złudzeń optycznych."
  },
  {
    "id": "BBT_R01_CN_12",
    "section": "Czy biologia jest nauką?",
    "type": "single_choice",
    "prompt": "Co najlepiej zrobić, gdy dwa źródła podają różne informacje o tym samym zjawisku?",
    "options": [
      "Porównać kilka źródeł i sprawdzić fakty oraz argumenty",
      "Wybrać pierwsze lepsze źródło",
      "Uwierzć tylko najstarszej książce",
      "Zrezygnować z szukania odpowiedzi"
    ],
    "answer": 0,
    "explanation": "W rozdziale podano, że najlepiej korzystać z kilku źródeł wiedzy i porównywać fakty oraz argumenty."
  },
  {
    "id": "BBT_R01_CN_13",
    "section": "Czy biologia jest nauką?",
    "type": "single_choice",
    "prompt": "Dlaczego w nowszych źródłach mogą pojawiać się inne ustalenia niż w starszych?",
    "options": [
      "Bo nauka stale się rozwija",
      "Bo młodsze książki są krótsze",
      "Bo autorzy zgadują",
      "Bo przyroda się nie zmienia"
    ],
    "answer": 0,
    "explanation": "Nowe obserwacje, doświadczenia i lepsze przyrządy pozwalają odkrywać nowe fakty."
  },
  {
    "id": "BBT_R01_CN_14",
    "section": "Czy biologia jest nauką?",
    "type": "single_choice",
    "prompt": "Który przyrząd pozwala zobaczyć obiekty niewidoczne gołym okiem?",
    "options": [
      "Lupa",
      "Mikroskop",
      "Lornetka",
      "Taśma miernicza"
    ],
    "answer": 1,
    "explanation": "Mikroskop pozwala oglądać bardzo małe obiekty niewidoczne gołym okiem.",
    "image": "/img/bbt_r01_przyrzady_podstawowe.jpg"
  },
  {
    "id": "BBT_R01_CN_15",
    "section": "Czy biologia jest nauką?",
    "type": "single_choice",
    "prompt": "Którego przyrządu użyjesz, żeby obserwować zwierzę z daleka?",
    "options": [
      "Lornetki",
      "Pipety",
      "Zakraplacza",
      "Szkiełka nakrywkowego"
    ],
    "answer": 0,
    "explanation": "Lornetka ułatwia obserwację z daleka."
  },
  {
    "id": "BBT_R01_CN_16",
    "section": "Czy biologia jest nauką?",
    "type": "single_choice",
    "prompt": "Co robi fotopułapka?",
    "options": [
      "Wykrywa ruch i robi zdjęcia dzikich zwierząt",
      "Mierzy długość liścia",
      "Miesza próbki wody",
      "Liczy gwiazdy"
    ],
    "answer": 0,
    "explanation": "Fotopułapka wykrywa ruch i automatycznie robi zdjęcia dzikich zwierząt.",
    "image": "/img/bbt_r01_przyrzady_specjalistyczne.jpg"
  },
  {
    "id": "BBT_R01_CN_17",
    "section": "Czy biologia jest nauką?",
    "type": "true_false",
    "prompt": "Siatka entomologiczna służy do łapania owadów bez wyrządzania im krzywdy.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Tak opisano ją w rozdziale."
  },
  {
    "id": "BBT_R01_MN_01",
    "section": "Na czym polega metoda naukowa?",
    "type": "single_choice",
    "prompt": "Czym jest obserwacja?",
    "options": [
      "Uważnym przyglądaniem się bez zmieniania warunków",
      "Specjalnym rodzajem siatki",
      "Tylko zapisywaniem wyników",
      "Mieszaniem różnych substancji"
    ],
    "answer": 0,
    "explanation": "Obserwacja polega na przyglądaniu się organizmom albo procesom bez zmieniania warunków.",
    "image": "/img/bbt_r01_obserwacja_i_doswiadczenie.jpg"
  },
  {
    "id": "BBT_R01_MN_02",
    "section": "Na czym polega metoda naukowa?",
    "type": "true_false",
    "prompt": "Podczas doświadczenia celowo zmieniamy jeden czynnik.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Tak właśnie odróżnia się doświadczenie od obserwacji."
  },
  {
    "id": "BBT_R01_MN_03",
    "section": "Na czym polega metoda naukowa?",
    "type": "multi_select",
    "prompt": "Co według rozdziału można obserwować?",
    "options": [
      "Zwierzęta",
      "Rośliny",
      "Kiełkowanie nasion",
      "Rozwój roślin",
      "Tylko liczby"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Obserwować można organizmy i procesy, na przykład zwierzęta, rośliny, kiełkowanie nasion czy rozwój roślin."
  },
  {
    "id": "BBT_R01_MN_04",
    "section": "Na czym polega metoda naukowa?",
    "type": "single_choice",
    "prompt": "W jakim miejscu według przykładu można obserwować ssaki lub ptaki?",
    "options": [
      "W parku albo w lesie",
      "Tylko w klasie",
      "Tylko w laboratorium",
      "Tylko w muzeum"
    ],
    "answer": 0,
    "explanation": "W przykładzie obserwację ssaków lub ptaków można przeprowadzić w dużym miejskim parku albo w lesie."
  },
  {
    "id": "BBT_R01_MN_05",
    "section": "Na czym polega metoda naukowa?",
    "type": "single_choice",
    "prompt": "Czym jest problem badawczy?",
    "options": [
      "Pytaniem, na które chcemy znaleźć odpowiedź",
      "Gotowym wynikiem doświadczenia",
      "Nazwą przyrządu",
      "Rysunkiem z obserwacji"
    ],
    "answer": 0,
    "explanation": "Problem badawczy to pytanie, na które badacz chce znaleźć odpowiedź."
  },
  {
    "id": "BBT_R01_MN_06",
    "section": "Na czym polega metoda naukowa?",
    "type": "single_choice",
    "prompt": "Czym jest hipoteza?",
    "options": [
      "Przewidywaną odpowiedzią na problem badawczy",
      "Nazwą tabeli",
      "Próbą kontrolną",
      "Szkiełkiem nakrywkowym"
    ],
    "answer": 0,
    "explanation": "Hipoteza to przypuszczalna odpowiedź na pytanie badawcze."
  },
  {
    "id": "BBT_R01_MN_07",
    "section": "Na czym polega metoda naukowa?",
    "type": "single_choice",
    "prompt": "W którym zestawie zmieniamy jeden czynnik?",
    "options": [
      "W próbie badawczej",
      "W próbie kontrolnej",
      "W obu tak samo",
      "W żadnym"
    ],
    "answer": 0,
    "explanation": "W próbie badawczej zmienia się jeden czynnik, który chcemy sprawdzić.",
    "image": "/img/bbt_r01_proba_badawcza_i_kontrolna.jpg"
  },
  {
    "id": "BBT_R01_MN_08",
    "section": "Na czym polega metoda naukowa?",
    "type": "single_choice",
    "prompt": "Do czego służy próba kontrolna?",
    "options": [
      "Do porównania wyników",
      "Do ozdabiania notatek",
      "Do mierzenia temperatury",
      "Do łapania owadów"
    ],
    "answer": 0,
    "explanation": "Próba kontrolna służy do porównania wyników z próbą badawczą."
  },
  {
    "id": "BBT_R01_MN_09",
    "section": "Na czym polega metoda naukowa?",
    "type": "true_false",
    "prompt": "Próba badawcza i kontrolna powinny różnić się tylko jednym czynnikiem.",
    "options": null,
    "answer": true,
    "explanation": "Tak. Dzięki temu wiadomo, co naprawdę wpłynęło na wynik."
  },
  {
    "id": "BBT_R01_MN_10",
    "section": "Na czym polega metoda naukowa?",
    "type": "single_choice",
    "prompt": "Ile razy co najmniej należy powtórzyć doświadczenie, aby wyniki były wiarygodne?",
    "options": [
      "1 raz",
      "2 razy",
      "3 razy",
      "10 razy"
    ],
    "answer": 2,
    "explanation": "W rozdziale podano, że doświadczenie należy wykonać minimum trzy razy."
  },
  {
    "id": "BBT_R01_MN_11",
    "section": "Na czym polega metoda naukowa?",
    "type": "sequence",
    "prompt": "Ułóż główne etapy metody naukowej w dobrej kolejności.",
    "options": null,
    "items": [
      "wniosek",
      "problem badawczy",
      "obserwacja",
      "hipoteza",
      "doświadczenie",
      "wynik"
    ],
    "answer": [
      "obserwacja",
      "problem badawczy",
      "hipoteza",
      "doświadczenie",
      "wynik",
      "wniosek"
    ],
    "explanation": "Najpierw coś obserwujemy, potem stawiamy pytanie, hipotezę, robimy doświadczenie, zapisujemy wynik i wyciągamy wniosek.",
    "image": "/img/bbt_r01_etapy_metody_naukowej.jpg"
  },
  {
    "id": "BBT_R01_MN_12",
    "section": "Na czym polega metoda naukowa?",
    "type": "scenario",
    "prompt": "W doświadczeniu z dżdżownicami do jednego pojemnika dodano dżdżownice, a do drugiego nie. Który pojemnik był próbą kontrolną?",
    "options": [
      "Ten bez dżdżownic",
      "Ten z dżdżownicami",
      "Oba były badawcze",
      "Nie da się powiedzieć"
    ],
    "answer": 0,
    "explanation": "Próba kontrolna to zestaw, w którym nie zmieniono badanego czynnika. Tu nie dodano do niej dżdżownic."
  },
  {
    "id": "BBT_R01_MN_13",
    "section": "Na czym polega metoda naukowa?",
    "type": "scenario",
    "prompt": "W doświadczeniu z cebulą okazało się, że jasny kolor liści powodował brak światła. Co było sprawdzanym czynnikiem?",
    "options": [
      "Dostęp do światła",
      "Kolor cebuli",
      "Wielkość doniczki",
      "Rodzaj zeszytu"
    ],
    "answer": 0,
    "explanation": "W drugim doświadczeniu porównano cebulę rosnącą w ciemności i przy świetle, więc sprawdzano wpływ światła."
  },
  {
    "id": "BBT_R01_MN_14",
    "section": "Na czym polega metoda naukowa?",
    "type": "true_false",
    "prompt": "Gdy hipoteza nie potwierdzi się, można postawić nową i zaplanować kolejne doświadczenie.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Taki właśnie jest dalszy krok w metodzie naukowej."
  },
  {
    "id": "BBT_R01_MN_15",
    "section": "Na czym polega metoda naukowa?",
    "type": "multi_select",
    "prompt": "W jaki sposób można dokumentować obserwacje i doświadczenia?",
    "options": [
      "Notatką",
      "Zdjęciem",
      "Rysunkiem",
      "Tabelą",
      "Wykresem",
      "Plotką"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Rozdział wymienia notatki, zdjęcia, rysunki, tabele i wykresy. Plotka nie jest dokumentacją badań.",
    "image": "/img/bbt_r01_dokumentowanie_badan.jpg"
  },
  {
    "id": "BBT_R01_MN_16",
    "section": "Na czym polega metoda naukowa?",
    "type": "single_choice",
    "prompt": "Po co zapisujemy wyniki badań?",
    "options": [
      "Żeby niczego nie pomylić i móc porównać wyniki",
      "Tylko po to, żeby ładnie wyglądało",
      "Żeby skrócić doświadczenie",
      "Nie trzeba ich zapisywać"
    ],
    "answer": 0,
    "explanation": "Notatki i inne zapisy pomagają pamiętać wyniki i je porównywać."
  },
  {
    "id": "BBT_R01_MN_17",
    "section": "Na czym polega metoda naukowa?",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: notatka, tabela, wykres, poduszka.",
    "options": null,
    "answer": "poduszka",
    "explanation": "Notatka, tabela i wykres to sposoby dokumentowania wyników badań. Poduszka do tego nie służy.",
    "image": "/img/bbt_r01_dokumentowanie_badan.jpg"
  },
  {
    "id": "BBT_R01_MM_01",
    "section": "Co można zaobserwować pod mikroskopem?",
    "type": "single_choice",
    "prompt": "Do czego służy mikroskop optyczny?",
    "options": [
      "Do obserwowania bardzo małych obiektów",
      "Do mierzenia czasu",
      "Do łapania owadów",
      "Do słuchania dźwięków"
    ],
    "answer": 0,
    "explanation": "Mikroskop optyczny służy do obserwacji bardzo małych obiektów niewidocznych gołym okiem."
  },
  {
    "id": "BBT_R01_MM_02",
    "section": "Co można zaobserwować pod mikroskopem?",
    "type": "match",
    "prompt": "Połącz część mikroskopu z jej zadaniem.",
    "options": null,
    "left": [
      "okular",
      "rewolwer",
      "stolik"
    ],
    "right": [
      "powiększa obraz wytworzony przez obiektyw",
      "zmienia obiektyw i powiększenie",
      "jest miejscem na preparat"
    ],
    "answer": {
      "okular": "powiększa obraz wytworzony przez obiektyw",
      "rewolwer": "zmienia obiektyw i powiększenie",
      "stolik": "jest miejscem na preparat"
    },
    "explanation": "Każda część mikroskopu ma własne zadanie.",
    "image": "/img/bbt_r01_budowa_mikroskopu.jpg"
  },
  {
    "id": "BBT_R01_MM_03",
    "section": "Co można zaobserwować pod mikroskopem?",
    "type": "single_choice",
    "prompt": "Która śruba służy do precyzyjnego ustawiania ostrości?",
    "options": [
      "Makrometryczna",
      "Mikrometryczna",
      "Rewolwer",
      "Tubus"
    ],
    "answer": 1,
    "explanation": "Śruba mikrometryczna służy do dokładnego ustawiania ostrości obrazu.",
    "image": "/img/bbt_r01_budowa_mikroskopu.jpg"
  },
  {
    "id": "BBT_R01_MM_04",
    "section": "Co można zaobserwować pod mikroskopem?",
    "type": "single_choice",
    "prompt": "Która część mikroskopu oświetla preparat?",
    "options": [
      "Źródło światła",
      "Tubus",
      "Statyw",
      "Okular"
    ],
    "answer": 0,
    "explanation": "Źródło światła umożliwia oświetlenie preparatu."
  },
  {
    "id": "BBT_R01_MM_05",
    "section": "Co można zaobserwować pod mikroskopem?",
    "type": "single_choice",
    "prompt": "Od jakiego powiększenia zaczynamy obserwację pod mikroskopem?",
    "options": [
      "Od największego",
      "Od najmniejszego",
      "Zawsze od średniego",
      "Nie ma to znaczenia"
    ],
    "answer": 1,
    "explanation": "Na początku ustawia się najmniejsze powiększenie, a dopiero potem można je zwiększać."
  },
  {
    "id": "BBT_R01_MM_06",
    "section": "Co można zaobserwować pod mikroskopem?",
    "type": "true_false",
    "prompt": "Po ustawieniu ostrości można zmienić obiektyw, żeby zwiększyć powiększenie.",
    "options": null,
    "answer": true,
    "explanation": "Tak. Rozdział mówi, że po obejrzeniu preparatu można zwiększyć powiększenie."
  },
  {
    "id": "BBT_R01_MM_07",
    "section": "Co można zaobserwować pod mikroskopem?",
    "type": "fill_in",
    "prompt": "Uzupełnij: obiekty obserwowane pod mikroskopem kładziemy na __________, a potem przykrywamy __________.",
    "options": null,
    "answer": [
      "szkiełku podstawowym",
      "szkiełkiem nakrywkowym"
    ],
    "altAnswers": [
      [
        "szkiełku podstawowym",
        "szkiełko podstawowe",
        "szkiełku",
        "szkiełko"
      ],
      [
        "szkiełkiem nakrywkowym",
        "szkiełko nakrywkowe",
        "szkiełkiem",
        "nakrywką"
      ]
    ],
    "explanation": "Preparat robi się na szkiełku podstawowym, a potem przykrywa szkiełkiem nakrywkowym."
  },
  {
    "id": "BBT_R01_MM_08",
    "section": "Co można zaobserwować pod mikroskopem?",
    "type": "sequence",
    "prompt": "Ułóż kroki przygotowania preparatu ze skórki cebuli.",
    "options": null,
    "items": [
      "przykryj skórkę szkiełkiem nakrywkowym",
      "umieść kroplę wody na szkiełku",
      "połóż skórkę cebuli w kropli wody",
      "ściągnij cienką skórkę z liścia cebuli"
    ],
    "answer": [
      "umieść kroplę wody na szkiełku",
      "ściągnij cienką skórkę z liścia cebuli",
      "połóż skórkę cebuli w kropli wody",
      "przykryj skórkę szkiełkiem nakrywkowym"
    ],
    "explanation": "Najpierw daje się kroplę wody, potem pobiera skórkę, umieszcza ją w kropli i przykrywa szkiełkiem.",
    "image": "/img/bbt_r01_preparat_cebuli_kroki.jpg"
  },
  {
    "id": "BBT_R01_MM_09",
    "section": "Co można zaobserwować pod mikroskopem?",
    "type": "single_choice",
    "prompt": "Co najpierw nanosimy na czyste szkiełko podstawowe podczas robienia preparatu z cebuli?",
    "options": [
      "Kroplę wody",
      "Kredę",
      "Piasek",
      "Liść w całości"
    ],
    "answer": 0,
    "explanation": "Przy wykonywaniu preparatu najpierw umieszcza się kroplę wody na szkiełku."
  },
  {
    "id": "BBT_R01_MM_10",
    "section": "Co można zaobserwować pod mikroskopem?",
    "type": "single_choice",
    "prompt": "Po co do kropli wody z organizmami dodaje się mały kłaczek waty?",
    "options": [
      "Żeby zmniejszyć ruchliwość organizmów",
      "Żeby zwiększyć temperaturę",
      "Żeby zabarwić wodę",
      "Żeby wysuszyć preparat"
    ],
    "answer": 0,
    "explanation": "Wata pomaga spowolnić ruch organizmów, dzięki czemu łatwiej je obserwować."
  },
  {
    "id": "BBT_R01_MM_11",
    "section": "Co można zaobserwować pod mikroskopem?",
    "type": "single_choice",
    "prompt": "Co widać w preparacie ze skórki liścia cebuli?",
    "options": [
      "Komórki",
      "Kości",
      "Pióra",
      "Nasiona"
    ],
    "answer": 0,
    "explanation": "Pod mikroskopem w preparacie ze skórki cebuli obserwuje się komórki.",
    "image": "/img/bbt_r01_komorki_skorki_cebuli.jpg"
  },
  {
    "id": "BBT_R01_MM_12",
    "section": "Co można zaobserwować pod mikroskopem?",
    "type": "single_choice",
    "prompt": "Jakie organizmy można zobaczyć w kropli wody ze stawu lub jeziora?",
    "options": [
      "Drobne organizmy, na przykład pantofelki",
      "Tylko drzewa",
      "Tylko kamienie",
      "Tylko chmury"
    ],
    "answer": 0,
    "explanation": "W kropli wody można znaleźć i obserwować drobne organizmy, na przykład pantofelki.",
    "image": "/img/bbt_r01_organizmy_w_kropli_wody.jpg"
  },
  {
    "id": "BBT_R01_MM_13",
    "section": "Co można zaobserwować pod mikroskopem?",
    "type": "single_choice",
    "prompt": "Co robimy z pozostałą wodą po obserwacji organizmów z kropli wody?",
    "options": [
      "Wylewamy ją do zbiornika, z którego pochodziła",
      "Wyrzucamy do kosza",
      "Wlewamy do szuflady",
      "Zostawiamy na podłodze"
    ],
    "answer": 0,
    "explanation": "W rozdziale zalecono wylać pozostałą wodę do zbiornika, z którego została pobrana."
  },
  {
    "id": "BBT_R01_MM_14",
    "section": "Co można zaobserwować pod mikroskopem?",
    "type": "single_choice",
    "prompt": "Jak nazywa się uczony, który ulepszył mikroskop i uzyskał powiększenie 270 razy?",
    "options": [
      "Jean Baptiste Lamarck",
      "Antoni van Leeuwenhoek",
      "Mikołaj Kopernik",
      "Karol Darwin"
    ],
    "answer": 1,
    "explanation": "Takim uczonym był Antoni van Leeuwenhoek."
  },
  {
    "id": "BBT_R01_MM_15",
    "section": "Co można zaobserwować pod mikroskopem?",
    "type": "true_false",
    "prompt": "Pierwsze mikroskopy w postaci soczewek wynaleziono w Holandii.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Taka informacja znajduje się w rozdziale."
  },
  {
    "id": "BBT_R01_MM_16",
    "section": "Co można zaobserwować pod mikroskopem?",
    "type": "single_choice",
    "prompt": "Kto po raz pierwszy użył terminu „biologia”?",
    "options": [
      "Antoni van Leeuwenhoek",
      "Jean Baptiste Lamarck",
      "Arystoteles",
      "Mendel"
    ],
    "answer": 1,
    "explanation": "W rozdziale podano, że terminu „biologia” po raz pierwszy użył Jean Baptiste Lamarck w 1802 roku."
  },
  {
    "id": "BBT_R01_ST_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które zdanie najlepiej opisuje wiedzę potoczną?",
    "options": [
      "Może prowadzić do błędnych wniosków",
      "Nigdy się nie myli",
      "Powstaje tylko w laboratorium",
      "Nie korzysta ze zmysłów"
    ],
    "answer": 0,
    "explanation": "Wiedza potoczna bywa przydatna, ale może też prowadzić do błędnych wniosków."
  },
  {
    "id": "BBT_R01_ST_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Uzupełnij: biologia to nauka o __________, a jej nazwa pochodzi od słów bios - __________ i logos - __________.",
    "options": null,
    "answer": [
      "życiu",
      "życie",
      "słowo"
    ],
    "altAnswers": [
      [
        "życiu",
        "życie"
      ],
      [
        "życie",
        "życiu"
      ],
      [
        "słowo",
        "słowie"
      ]
    ],
    "explanation": "Biologia to nauka o życiu. Jej nazwa pochodzi od greckich słów bios - życie i logos - słowo."
  },
  {
    "id": "BBT_R01_ST_03",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Posegreguj nazwy na nauki przyrodnicze i działy biologii.",
    "options": null,
    "items": [
      "geografia",
      "zoologia",
      "ekologia",
      "chemia",
      "fizyka",
      "mikrobiologia"
    ],
    "categories": [
      "nauki przyrodnicze",
      "działy biologii"
    ],
    "answer": {
      "nauki przyrodnicze": [
        "geografia",
        "chemia",
        "fizyka"
      ],
      "działy biologii": [
        "zoologia",
        "ekologia",
        "mikrobiologia"
      ]
    },
    "explanation": "Geografia, chemia i fizyka to nauki przyrodnicze. Zoologia, ekologia i mikrobiologia to działy biologii."
  },
  {
    "id": "BBT_R01_ST_04",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Ktoś mówi: „Kaczki chętnie jedzą chleb, więc chleb jest dla nich dobry”. Jaki błąd pokazuje ten przykład?",
    "options": [
      "To może być pochopny wniosek z wiedzy potocznej",
      "To pewny wynik doświadczenia",
      "To definicja hipotezy",
      "To przykład próby kontrolnej"
    ],
    "answer": 0,
    "explanation": "Rozdział podaje, że takie codzienne obserwacje mogą prowadzić do błędnych wniosków."
  },
  {
    "id": "BBT_R01_ST_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz przyrząd z tym, do czego służy.",
    "options": null,
    "left": [
      "fotopułapka",
      "mikroskop elektronowy",
      "siatka entomologiczna"
    ],
    "right": [
      "robi zdjęcia dzikich zwierząt",
      "daje bardzo szczegółowy obraz małych obiektów",
      "służy do łapania owadów bez krzywdzenia ich"
    ],
    "answer": {
      "fotopułapka": "robi zdjęcia dzikich zwierząt",
      "mikroskop elektronowy": "daje bardzo szczegółowy obraz małych obiektów",
      "siatka entomologiczna": "służy do łapania owadów bez krzywdzenia ich"
    },
    "explanation": "Każdy z tych przyrządów ma inne zastosowanie w badaniach przyrodniczych.",
    "image": "/img/bbt_r01_przyrzady_specjalistyczne.jpg"
  },
  {
    "id": "BBT_R01_ST_06",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy badania od pytania do odpowiedzi.",
    "options": null,
    "items": [
      "wynik",
      "problem badawczy",
      "wniosek",
      "hipoteza",
      "doświadczenie"
    ],
    "answer": [
      "problem badawczy",
      "hipoteza",
      "doświadczenie",
      "wynik",
      "wniosek"
    ],
    "explanation": "Najpierw jest pytanie, potem hipoteza, doświadczenie, wynik i wniosek.",
    "image": "/img/bbt_r01_etapy_metody_naukowej.jpg"
  },
  {
    "id": "BBT_R01_ST_07",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które zdanie jest problemem badawczym?",
    "options": [
      "Czy brak światła wpływa na kolor liści cebuli?",
      "Brak światła powoduje jasne liście.",
      "Liście były jasne w obu próbach.",
      "Zrobiłem zdjęcie cebuli."
    ],
    "answer": 0,
    "explanation": "Problem badawczy ma formę pytania."
  },
  {
    "id": "BBT_R01_ST_08",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Uzupełnij: zestaw ze zmienionym czynnikiem to próba __________, a zestaw do porównania wyników to próba __________.",
    "options": null,
    "answer": [
      "badawcza",
      "kontrolna"
    ],
    "altAnswers": [
      [
        "badawcza",
        "badawczej"
      ],
      [
        "kontrolna",
        "kontrolnej"
      ]
    ],
    "explanation": "W doświadczeniu porównuje się próbę badawczą z kontrolną.",
    "image": "/img/bbt_r01_proba_badawcza_i_kontrolna.jpg"
  },
  {
    "id": "BBT_R01_ST_09",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W doświadczeniu z dżdżownicami liście rozkładały się szybciej tam, gdzie dodano dżdżownice. Jaki jest wniosek?",
    "options": [
      "Dżdżownice przyspieszają rozkład liści",
      "Liście same zniknęły bez powodu",
      "Trzeba wyrzucić notatki",
      "Nie da się nic powiedzieć"
    ],
    "answer": 0,
    "explanation": "Jeśli w próbie z dżdżownicami rozkład jest szybszy, to taki właśnie jest wniosek."
  },
  {
    "id": "BBT_R01_ST_10",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Powtarzanie doświadczenia co najmniej trzy razy zwiększa wiarygodność wyników.",
    "options": null,
    "answer": true,
    "explanation": "Tak. Rozdział mówi, że minimalnie trzy powtórzenia czynią wynik bardziej wiarygodnym."
  },
  {
    "id": "BBT_R01_ST_11",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz sposób dokumentowania z tym, co robi najlepiej.",
    "options": null,
    "left": [
      "tabela",
      "wykres",
      "fotografia"
    ],
    "right": [
      "porządkuje dane",
      "ułatwia szybkie porównanie",
      "zachowuje wygląd obiektu"
    ],
    "answer": {
      "tabela": "porządkuje dane",
      "wykres": "ułatwia szybkie porównanie",
      "fotografia": "zachowuje wygląd obiektu"
    },
    "explanation": "Każdy sposób dokumentowania ma swoją mocną stronę.",
    "image": "/img/bbt_r01_dokumentowanie_badan.jpg"
  },
  {
    "id": "BBT_R01_ST_12",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W lodówce i w ciemnym pudełku cebula wypuściła jasne liście. Co z tego wynika o hipotezie, że winna jest niska temperatura?",
    "options": [
      "Ta hipoteza nie potwierdziła się",
      "Ta hipoteza została potwierdzona",
      "Nie było żadnej hipotezy",
      "To był wynik próby kontrolnej"
    ],
    "answer": 0,
    "explanation": "Skoro liście były jasne także poza lodówką, przyczyna nie leżała w samej niskiej temperaturze."
  },
  {
    "id": "BBT_R01_ST_13",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Po doświadczeniu z cebulą wiadomo, że o barwie liści zdecydował przede wszystkim:",
    "options": [
      "brak światła",
      "kolor doniczki",
      "rodzaj zeszytu badacza",
      "smak cebuli"
    ],
    "answer": 0,
    "explanation": "Drugie doświadczenie wykazało, że jasny kolor liści powodował brak światła."
  },
  {
    "id": "BBT_R01_ST_14",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż kroki obserwacji gotowego preparatu pod mikroskopem.",
    "options": null,
    "items": [
      "ustaw ostrość obrazu",
      "włącz światło lub ustaw lusterko",
      "obejrzyj preparat i ewentualnie zwiększ powiększenie",
      "umieść preparat na stoliku",
      "ustaw najmniejsze powiększenie"
    ],
    "answer": [
      "włącz światło lub ustaw lusterko",
      "umieść preparat na stoliku",
      "ustaw najmniejsze powiększenie",
      "ustaw ostrość obrazu",
      "obejrzyj preparat i ewentualnie zwiększ powiększenie"
    ],
    "explanation": "Tak wygląda poprawna kolejność pracy z gotowym preparatem.",
    "image": "/img/bbt_r01_budowa_mikroskopu.jpg"
  },
  {
    "id": "BBT_R01_ST_15",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz materiały potrzebne do wykonania preparatu ze skórki cebuli.",
    "options": [
      "cebula",
      "szkiełko podstawowe",
      "szkiełko nakrywkowe",
      "pęseta",
      "igła preparacyjna",
      "lornetka"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Do preparatu z cebuli potrzebne są cebula, oba szkiełka, pęseta i igła preparacyjna. Lornetka nie jest do tego potrzebna.",
    "image": "/img/bbt_r01_materialy_do_preparatu.jpg"
  },
  {
    "id": "BBT_R01_ST_16",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: okular, rewolwer, stolik, lornetka.",
    "options": null,
    "answer": "lornetka",
    "explanation": "Okular, rewolwer i stolik to części mikroskopu. Lornetka jest osobnym przyrządem."
  },
  {
    "id": "BBT_R01_ST_17",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który zestaw informacji jest poprawny?",
    "options": [
      "1590 - pierwsze mikroskopy w postaci soczewek, 1625 - pojawia się słowo „mikroskop”",
      "1625 - Lamarck używa słowa „biologia”, 1590 - van Leeuwenhoek ulepsza mikroskop",
      "1802 - powstają pierwsze soczewki mikroskopowe",
      "1590 - wymyślono fotopułapkę"
    ],
    "answer": 0,
    "explanation": "Takie daty podano w rozdziale o historii mikroskopu."
  },
  {
    "id": "BBT_R01_ST_18",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Dwa artykuły o tym samym zjawisku różnią się wnioskami. Co zgodnie z rozdziałem warto zrobić?",
    "options": [
      "Sięgnąć do kilku źródeł i porównać fakty oraz argumenty",
      "Wybrać ten z ładniejszym obrazkiem",
      "Nigdy więcej nie czytać",
      "Uznać, że nauka nic nie wie"
    ],
    "answer": 0,
    "explanation": "Rozdział zachęca do korzystania z kilku źródeł i porównywania faktów oraz argumentów."
  },
  {
    "id": "BBT_R01_ST_19",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jestem pytaniem, na które badacz chce znaleźć odpowiedź. Jak się nazywam?",
    "options": null,
    "answer": "problem badawczy",
    "altAnswers": [
      "problem badawczy",
      "problemu badawczego",
      "pytanie badawcze",
      "pytaniem badawczym"
    ],
    "explanation": "Tak nazywa się pytanie stawiane na początku badania."
  },
  {
    "id": "BBT_R01_ST_20",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która para części mikroskopu najlepiej odpowiada za ustawianie wyraźnego obrazu?",
    "options": [
      "śruba makrometryczna i śruba mikrometryczna",
      "okular i statyw",
      "stolik i tubus",
      "rewolwer i źródło światła"
    ],
    "answer": 0,
    "explanation": "Ostrość ustawia się śrubą makrometryczną, a dokładnie dopracowuje mikrometryczną.",
    "image": "/img/bbt_r01_budowa_mikroskopu.jpg"
  }
]
;

const KID_PROMPTS =
{
  "BBT_R01_CN_10": "Dlaczego wiedza naukowa jest pewniejsza?",
  "BBT_R01_MN_11": "Jak po kolei działa metoda naukowa?",
  "BBT_R01_MM_08": "Jak zrobić preparat z cebuli?",
  "BBT_R01_ST_08": "Która próba jest badawcza, a która kontrolna?",
  "BBT_R01_ST_14": "Co po kolei robi się z gotowym preparatem pod mikroskopem?"
}
;

const chapter = {
  "id": "bbt_r01",
  "number": 1,
  "title": "Poznajemy biologię",
  "icon": "🔬",
  "sectionOrder": [
    "Czy biologia jest nauką?",
    "Na czym polega metoda naukowa?",
    "Co można zaobserwować pod mikroskopem?"
  ],
  "sectionIcons": {
    "Czy biologia jest nauką?": "🌿",
    "Na czym polega metoda naukowa?": "🧪",
    "Co można zaobserwować pod mikroskopem?": "🔍"
  }
}
;

chapter.exercises = ALL_EXERCISES;
chapter.kidPrompts = KID_PROMPTS;

export default chapter;
