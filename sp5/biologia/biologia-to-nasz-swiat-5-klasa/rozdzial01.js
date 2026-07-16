// Skróty sekcji (do identyfikatorów ćwiczeń):
//   ORG  = Organizm i poziomy budowy
//   CHEM = Skład chemiczny organizmów
//   MIK  = Mikroskop i preparaty
//   KOM  = Budowa komórek
//   FOT  = Fotosynteza
//   ODD  = Oddychanie komórkowe
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_ORG_01",
    "section": "Organizm i poziomy budowy",
    "type": "single_choice",
    "prompt": "Który opis najlepiej wyjaśnia, czym jest organizm?",
    "options": [
      "Istota zbudowana z komórek i wykonująca podstawowe czynności życiowe",
      "Każdy element przyrody, także woda i skały",
      "Tylko zwierzę, które potrafi się poruszać",
      "Przedmiot wytworzony przez człowieka",
      "Wyłącznie roślina, która przeprowadza fotosyntezę",
      "Substancja prosta występująca w komórkach"
    ],
    "answer": 0,
    "explanation": "Organizm to istota zbudowana z komórek, która wykonuje czynności życiowe, takie jak odżywianie, oddychanie, wydalanie, ruch, rozmnażanie, wzrost i rozwój oraz reagowanie na bodźce."
  },
  {
    "id": "R01_ORG_02",
    "section": "Organizm i poziomy budowy",
    "type": "multi_select",
    "prompt": "Zaznacz czynności życiowe organizmów.",
    "options": [
      "odżywianie",
      "oddychanie",
      "wydalanie",
      "rozmnażanie",
      "rdzewienie",
      "parowanie wody"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r01_czynnosci_zyciowe.jpg",
    "explanation": "Do czynności życiowych należą między innymi odżywianie, oddychanie, wydalanie i rozmnażanie. Rdzewienie oraz parowanie wody nie są czynnościami życiowymi organizmu."
  },
  {
    "id": "R01_ORG_03",
    "section": "Organizm i poziomy budowy",
    "type": "true_false",
    "prompt": "Każdy organizm jest zbudowany z komórek.",
    "options": null,
    "answer": true,
    "explanation": "Budowa komórkowa jest wspólną cechą wszystkich organizmów. Niektóre organizmy składają się z jednej komórki, a inne z wielu komórek."
  },
  {
    "id": "R01_ORG_04",
    "section": "Organizm i poziomy budowy",
    "type": "match",
    "prompt": "Połącz czynność życiową z jej opisem.",
    "options": null,
    "left": [
      "odżywianie",
      "oddychanie",
      "wydalanie",
      "rozmnażanie"
    ],
    "right": [
      "pobieranie lub wytwarzanie pokarmu",
      "uwalnianie energii z pokarmu",
      "usuwanie substancji zbędnych i szkodliwych",
      "wydawanie na świat potomstwa"
    ],
    "answer": {
      "odżywianie": "pobieranie lub wytwarzanie pokarmu",
      "oddychanie": "uwalnianie energii z pokarmu",
      "wydalanie": "usuwanie substancji zbędnych i szkodliwych",
      "rozmnażanie": "wydawanie na świat potomstwa"
    },
    "image": "r01_czynnosci_zyciowe.jpg",
    "explanation": "Każda czynność życiowa ma określone znaczenie dla organizmu: pokarm dostarcza materiałów i energii, oddychanie uwalnia energię, wydalanie usuwa niepotrzebne substancje, a rozmnażanie pozwala wydać potomstwo."
  },
  {
    "id": "R01_ORG_05",
    "section": "Organizm i poziomy budowy",
    "type": "sequence",
    "prompt": "Ułóż poziomy budowy organizmu od najprostszego do najbardziej złożonego.",
    "options": null,
    "items": [
      "układ narządów lub system organów",
      "komórka",
      "organ lub narząd",
      "organizm",
      "tkanka"
    ],
    "answer": [
      "komórka",
      "tkanka",
      "organ lub narząd",
      "układ narządów lub system organów",
      "organizm"
    ],
    "image": "r01_poziomy_budowy.jpg",
    "explanation": "Hierarchiczna budowa organizmów oznacza, że poziomy układają się od komórki przez tkankę i narząd lub organ do układu narządów albo systemu organów, a następnie do całego organizmu."
  },
  {
    "id": "R01_ORG_06",
    "section": "Organizm i poziomy budowy",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do poziomów budowy organizmu: komórka, tkanka, narząd, skała.",
    "options": null,
    "answer": "skała",
    "explanation": "Komórka, tkanka i narząd to poziomy budowy organizmu. Skała jest elementem przyrody nieożywionej, a nie poziomem budowy organizmu."
  },
  {
    "id": "R01_ORG_07",
    "section": "Organizm i poziomy budowy",
    "type": "fill_in",
    "prompt": "Podstawowy element budowy organizmów to __________.",
    "options": null,
    "answer": [
      "komórka"
    ],
    "altAnswers": [
      [
        "komórka",
        "komorka"
      ]
    ],
    "explanation": "Komórka jest podstawowym elementem budowy organizmów. Z komórek mogą powstawać tkanki i kolejne poziomy budowy."
  },
  {
    "id": "R01_ORG_08",
    "section": "Organizm i poziomy budowy",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do organizmów roślinnych i zwierzęcych.",
    "options": null,
    "items": [
      "liść",
      "system przewodzący",
      "serce",
      "układ krwionośny"
    ],
    "categories": [
      "u roślin",
      "u zwierząt"
    ],
    "answer": {
      "u roślin": [
        "liść",
        "system przewodzący"
      ],
      "u zwierząt": [
        "serce",
        "układ krwionośny"
      ]
    },
    "image": "r01_poziomy_budowy.jpg",
    "explanation": "W podręczniku liść i system przewodzący są przykładami poziomów budowy roślin, a serce i układ krwionośny przykładami poziomów budowy zwierząt."
  },
  {
    "id": "R01_ORG_09",
    "section": "Organizm i poziomy budowy",
    "type": "scenario",
    "prompt": "Dotykasz bardzo ciepłego kubka i natychmiast odsuwasz rękę. Która czynność życiowa najlepiej opisuje taką zmianę zachowania?",
    "options": [
      "reagowanie na bodźce",
      "rozmnażanie",
      "wydalanie",
      "odżywianie",
      "wzrost",
      "samodzielne wytwarzanie pokarmu"
    ],
    "answer": 0,
    "image": "r01_czynnosci_zyciowe.jpg",
    "explanation": "Bodziec to zmiana w środowisku, która wywołuje reakcję organizmu. Odsunięcie ręki od gorącego przedmiotu jest reakcją na bodziec."
  },
  {
    "id": "R01_ORG_10",
    "section": "Organizm i poziomy budowy",
    "type": "riddle",
    "prompt": "Jak nazywa się czynność życiowa polegająca na usuwaniu z organizmu substancji zbędnych i szkodliwych?",
    "options": null,
    "answer": "wydalanie",
    "altAnswers": [
      "wydalanie"
    ],
    "explanation": "Wydalanie polega na usuwaniu z organizmu substancji zbędnych i szkodliwych."
  },
  {
    "id": "R01_CHEM_01",
    "section": "Skład chemiczny organizmów",
    "type": "single_choice",
    "prompt": "Która lista zawiera sześć pierwiastków występujących w organizmach w największej ilości?",
    "options": [
      "węgiel, wodór, tlen, azot, siarka, fosfor",
      "żelazo, miedź, srebro, złoto, wapń, sód",
      "potas, wapń, magnez, żelazo, fluor, chlor",
      "woda, białka, cukry, tłuszcze, sole mineralne, DNA",
      "glukoza, tlen, dwutlenek węgla, woda, chlorofil, energia",
      "azot, alkohol etylowy, chlorofil, cytozol, glukoza, wakuola"
    ],
    "answer": 0,
    "image": "r01_sklad_chemiczny.jpg",
    "explanation": "W organizmach w największej ilości występują: węgiel, wodór, tlen, azot, siarka oraz fosfor."
  },
  {
    "id": "R01_CHEM_02",
    "section": "Skład chemiczny organizmów",
    "type": "multi_select",
    "prompt": "Zaznacz podstawowe związki chemiczne występujące w organizmach.",
    "options": [
      "białka",
      "cukry",
      "tłuszcze",
      "kwasy nukleinowe",
      "piasek",
      "plastik"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do podstawowych związków chemicznych organizmów należą między innymi białka, cukry, tłuszcze i kwasy nukleinowe. W rozdziale wymieniono także sole mineralne i wodę."
  },
  {
    "id": "R01_CHEM_03",
    "section": "Skład chemiczny organizmów",
    "type": "true_false",
    "prompt": "Pierwiastki to substancje proste.",
    "options": null,
    "answer": true,
    "explanation": "Pierwiastki są substancjami prostymi. Związki chemiczne powstają z połączenia co najmniej dwóch różnych pierwiastków."
  },
  {
    "id": "R01_CHEM_04",
    "section": "Skład chemiczny organizmów",
    "type": "match",
    "prompt": "Połącz związek chemiczny z jego funkcją w organizmie.",
    "options": null,
    "left": [
      "białka",
      "cukry",
      "tłuszcze",
      "kwasy nukleinowe"
    ],
    "right": [
      "materiał budulcowy organizmów",
      "główne źródło energii",
      "źródło energii i ochrona przed chłodem",
      "informacja o budowie i działaniu organizmu"
    ],
    "answer": {
      "białka": "materiał budulcowy organizmów",
      "cukry": "główne źródło energii",
      "tłuszcze": "źródło energii i ochrona przed chłodem",
      "kwasy nukleinowe": "informacja o budowie i działaniu organizmu"
    },
    "image": "r01_funkcje_zwiazkow.jpg",
    "explanation": "Białka budują ciała organizmów, cukry są głównym źródłem energii, tłuszcze mogą być źródłem energii i chronią przed zimnem, a kwasy nukleinowe zawierają informacje o budowie i działaniu organizmu."
  },
  {
    "id": "R01_CHEM_05",
    "section": "Skład chemiczny organizmów",
    "type": "fill_in",
    "prompt": "Związki chemiczne to substancje złożone z co najmniej dwóch różnych __________.",
    "options": null,
    "answer": [
      "pierwiastków"
    ],
    "altAnswers": [
      [
        "pierwiastków",
        "pierwiastkow"
      ]
    ],
    "explanation": "Związek chemiczny powstaje z połączenia co najmniej dwóch różnych pierwiastków, czyli substancji prostych."
  },
  {
    "id": "R01_CHEM_06",
    "section": "Skład chemiczny organizmów",
    "type": "sort",
    "prompt": "Rozdziel przykłady na pierwiastki i związki chemiczne.",
    "options": null,
    "items": [
      "węgiel",
      "tlen",
      "białka",
      "woda",
      "fosfor",
      "cukry"
    ],
    "categories": [
      "pierwiastki",
      "związki chemiczne"
    ],
    "answer": {
      "pierwiastki": [
        "węgiel",
        "tlen",
        "fosfor"
      ],
      "związki chemiczne": [
        "białka",
        "woda",
        "cukry"
      ]
    },
    "image": "r01_sklad_chemiczny.jpg",
    "explanation": "Węgiel, tlen i fosfor to pierwiastki. Białka, woda i cukry są związkami chemicznymi występującymi w organizmach."
  },
  {
    "id": "R01_CHEM_07",
    "section": "Skład chemiczny organizmów",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pierwiastków występujących w organizmach w największej ilości: węgiel, wodór, tlen, celuloza.",
    "options": null,
    "answer": "celuloza",
    "explanation": "Węgiel, wodór i tlen to pierwiastki. Celuloza jest przykładem cukru budującego ściany komórkowe roślin, a nie pierwiastkiem."
  },
  {
    "id": "R01_CHEM_08",
    "section": "Skład chemiczny organizmów",
    "type": "scenario",
    "prompt": "W opisie związku chemicznego podano, że hemoglobina przenosi tlen we krwi. Do której grupy związków należy hemoglobina?",
    "options": [
      "białka",
      "cukry",
      "tłuszcze",
      "sole mineralne",
      "woda",
      "kwasy nukleinowe"
    ],
    "answer": 0,
    "image": "r01_funkcje_zwiazkow.jpg",
    "explanation": "Hemoglobina jest białkiem zawartym we krwi. W rozdziale podano ją jako przykład białka transportującego tlen."
  },
  {
    "id": "R01_CHEM_09",
    "section": "Skład chemiczny organizmów",
    "type": "riddle",
    "prompt": "Jaki związek chemiczny jest głównym składnikiem płynów w organizmie, transportuje substancje i pomaga utrzymać właściwą temperaturę?",
    "options": null,
    "answer": "woda",
    "altAnswers": [
      "woda",
      "wodę"
    ],
    "image": "r01_funkcje_zwiazkow.jpg",
    "explanation": "Woda jest głównym składnikiem płynów występujących w organizmie. Transportuje substancje, pomaga utrzymać temperaturę i bierze udział w procesach komórkowych."
  },
  {
    "id": "R01_CHEM_10",
    "section": "Skład chemiczny organizmów",
    "type": "true_false",
    "prompt": "Cukry mogą być źródłem energii, materiałem zapasowym lub materiałem budulcowym.",
    "options": null,
    "answer": true,
    "explanation": "Cukry są głównym źródłem energii, mogą tworzyć materiał zapasowy, na przykład skrobię, oraz budować ściany komórkowe roślin jako celuloza."
  },
  {
    "id": "R01_MIK_01",
    "section": "Mikroskop i preparaty",
    "type": "single_choice",
    "prompt": "Do czego służy mikroskop optyczny opisany w rozdziale?",
    "options": [
      "Do powiększania obrazu bardzo małych obiektów",
      "Do mierzenia temperatury powietrza",
      "Do ważenia próbek biologicznych",
      "Do wytwarzania glukozy w komórkach",
      "Do usuwania wody z organizmu",
      "Do zapisywania informacji w DNA"
    ],
    "answer": 0,
    "image": "r01_mikroskop_optyczny.jpg",
    "explanation": "Mikroskop powiększa obraz obserwowanego obiektu, dzięki czemu można zobaczyć elementy niewidoczne gołym okiem ani za pomocą lupy."
  },
  {
    "id": "R01_MIK_02",
    "section": "Mikroskop i preparaty",
    "type": "match",
    "prompt": "Połącz element mikroskopu z jego funkcją.",
    "options": null,
    "left": [
      "okular",
      "śruby makrometryczna i mikrometryczna",
      "rewolwer",
      "źródło światła"
    ],
    "right": [
      "powiększa obraz obiektu",
      "ustawiają ostrość obrazu",
      "umożliwia zmianę obiektywów",
      "oświetla preparat"
    ],
    "answer": {
      "okular": "powiększa obraz obiektu",
      "śruby makrometryczna i mikrometryczna": "ustawiają ostrość obrazu",
      "rewolwer": "umożliwia zmianę obiektywów",
      "źródło światła": "oświetla preparat"
    },
    "image": "r01_mikroskop_optyczny.jpg",
    "explanation": "Okular i obiektywy powiększają obraz, śruby służą do ustawiania ostrości, rewolwer pozwala zmieniać obiektywy, a źródło światła oświetla preparat."
  },
  {
    "id": "R01_MIK_03",
    "section": "Mikroskop i preparaty",
    "type": "true_false",
    "prompt": "Obserwację pod mikroskopem zaczyna się zawsze od największego powiększenia obrazu.",
    "options": null,
    "answer": false,
    "explanation": "Obserwację mikroskopową zaczyna się od najmniejszego powiększenia. Dopiero gdy uzyskane powiększenie jest niewystarczające, zmienia się obiektyw."
  },
  {
    "id": "R01_MIK_04",
    "section": "Mikroskop i preparaty",
    "type": "sequence",
    "prompt": "Ułóż etapy przygotowania preparatu z kropli wody z kałuży.",
    "options": null,
    "items": [
      "odsączenie nadmiaru wody",
      "pobranie wody zakraplaczem",
      "nakrycie kropli szkiełkiem nakrywkowym",
      "nabranie wody z kałuży do słoika",
      "naniesienie kropli na środek szkiełka podstawowego"
    ],
    "answer": [
      "nabranie wody z kałuży do słoika",
      "pobranie wody zakraplaczem",
      "naniesienie kropli na środek szkiełka podstawowego",
      "nakrycie kropli szkiełkiem nakrywkowym",
      "odsączenie nadmiaru wody"
    ],
    "image": "r01_preparat_mikroskopowy.jpg",
    "explanation": "Najpierw pobiera się wodę z kałuży, potem zakraplaczem nanosi kroplę na szkiełko podstawowe, nakrywa ją szkiełkiem nakrywkowym i usuwa nadmiar wody."
  },
  {
    "id": "R01_MIK_05",
    "section": "Mikroskop i preparaty",
    "type": "fill_in",
    "prompt": "Obiekt do obserwacji pod mikroskopem trzeba przygotować jako __________.",
    "options": null,
    "answer": [
      "preparat mikroskopowy"
    ],
    "altAnswers": [
      [
        "preparat mikroskopowy",
        "preparat"
      ]
    ],
    "image": "r01_preparat_mikroskopowy.jpg",
    "explanation": "Aby obejrzeć obiekt pod mikroskopem, przygotowuje się z niego preparat mikroskopowy albo korzysta z gotowego preparatu."
  },
  {
    "id": "R01_MIK_06",
    "section": "Mikroskop i preparaty",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do elementów mikroskopu: okular, obiektyw, rewolwer, chloroplast.",
    "options": null,
    "answer": "chloroplast",
    "image": "r01_mikroskop_optyczny.jpg",
    "explanation": "Okular, obiektyw i rewolwer są elementami mikroskopu. Chloroplast jest organellum komórki roślinnej."
  },
  {
    "id": "R01_MIK_07",
    "section": "Mikroskop i preparaty",
    "type": "scenario",
    "prompt": "Uczeń położył preparat na stoliku mikroskopu i widzi rozmazany obraz. Których elementów powinien użyć do ustawienia ostrości?",
    "options": [
      "śrub makrometrycznej i mikrometrycznej",
      "stolika i szkiełka nakrywkowego",
      "rewolweru i chloroplastu",
      "źródła światła i wakuoli",
      "cytozolu i jądra komórkowego",
      "binokularu i bibuły"
    ],
    "answer": 0,
    "image": "r01_mikroskop_optyczny.jpg",
    "explanation": "Śruby makrometryczna i mikrometryczna służą do ustawiania ostrości obrazu w mikroskopie."
  },
  {
    "id": "R01_MIK_08",
    "section": "Mikroskop i preparaty",
    "type": "multi_select",
    "prompt": "Zaznacz materiały potrzebne do wykonania preparatu z kropli wody z kałuży.",
    "options": [
      "szkiełko podstawowe",
      "szkiełko nakrywkowe",
      "zakraplacz",
      "słoik z wodą",
      "mitochondrium",
      "chlorofil"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r01_preparat_mikroskopowy.jpg",
    "explanation": "Do takiego preparatu potrzebne są między innymi szkiełko podstawowe, szkiełko nakrywkowe, zakraplacz i słoik z wodą z kałuży."
  },
  {
    "id": "R01_MIK_09",
    "section": "Mikroskop i preparaty",
    "type": "riddle",
    "prompt": "Jak nazywa się pokrętło mikroskopu umożliwiające zmianę obiektywów?",
    "options": null,
    "answer": "rewolwer",
    "altAnswers": [
      "rewolwer"
    ],
    "image": "r01_mikroskop_optyczny.jpg",
    "explanation": "Rewolwer to pokrętło, które umożliwia zmianę obiektywów w mikroskopie."
  },
  {
    "id": "R01_MIK_10",
    "section": "Mikroskop i preparaty",
    "type": "sort",
    "prompt": "Przyporządkuj elementy mikroskopu do ich głównych funkcji.",
    "options": null,
    "items": [
      "okular",
      "obiektywy",
      "śruby makrometryczna i mikrometryczna",
      "źródło światła",
      "stolik"
    ],
    "categories": [
      "powiększanie obrazu",
      "ustawianie ostrości",
      "oświetlanie preparatu",
      "umieszczenie preparatu"
    ],
    "answer": {
      "powiększanie obrazu": [
        "okular",
        "obiektywy"
      ],
      "ustawianie ostrości": [
        "śruby makrometryczna i mikrometryczna"
      ],
      "oświetlanie preparatu": [
        "źródło światła"
      ],
      "umieszczenie preparatu": [
        "stolik"
      ]
    },
    "image": "r01_mikroskop_optyczny.jpg",
    "explanation": "Okular i obiektywy odpowiadają za powiększenie, śruby za ostrość, źródło światła za oświetlenie, a stolik jest miejscem ułożenia preparatu."
  },
  {
    "id": "R01_KOM_01",
    "section": "Budowa komórek",
    "type": "single_choice",
    "prompt": "Jak nazywają się elementy, z których składają się komórki?",
    "options": [
      "organelle",
      "tkanki",
      "narządy",
      "układy narządów",
      "pierwiastki proste",
      "bodźce"
    ],
    "answer": 0,
    "image": "r01_komorki_ksztalty.jpg",
    "explanation": "Komórki składają się z elementów nazywanych organellami. Różne organelle pełnią w komórce różne funkcje."
  },
  {
    "id": "R01_KOM_02",
    "section": "Budowa komórek",
    "type": "multi_select",
    "prompt": "Zaznacz elementy występujące we wszystkich typach komórek pokazanych w rozdziale.",
    "options": [
      "błona komórkowa",
      "cytozol",
      "chloroplast",
      "wakuola",
      "jądro komórkowe",
      "mitochondrium"
    ],
    "answer": [
      0,
      1
    ],
    "image": "r01_model_komorki_zwierzecej.jpg",
    "explanation": "Błona komórkowa i cytozol występują w komórkach zwierzęcych, roślinnych i bakteryjnych. Pozostałe wymienione elementy nie występują we wszystkich tych typach komórek."
  },
  {
    "id": "R01_KOM_03",
    "section": "Budowa komórek",
    "type": "true_false",
    "prompt": "Niektóre komórki są samodzielnymi organizmami, na przykład bakterie.",
    "options": null,
    "answer": true,
    "image": "r01_komorki_ksztalty.jpg",
    "explanation": "Bakterie są przykładami organizmów jednokomórkowych. Inne komórki tworzą organizmy wielokomórkowe, takie jak rośliny i zwierzęta."
  },
  {
    "id": "R01_KOM_04",
    "section": "Budowa komórek",
    "type": "match",
    "prompt": "Połącz element komórki z jego funkcją.",
    "options": null,
    "left": [
      "jądro komórkowe",
      "mitochondrium",
      "chloroplast",
      "ściana komórkowa"
    ],
    "right": [
      "nadzoruje procesy życiowe i zawiera DNA",
      "dostarcza komórce energię",
      "zawiera chlorofil i zachodzi w nim fotosynteza",
      "nadaje komórce kształt i chroni ją"
    ],
    "answer": {
      "jądro komórkowe": "nadzoruje procesy życiowe i zawiera DNA",
      "mitochondrium": "dostarcza komórce energię",
      "chloroplast": "zawiera chlorofil i zachodzi w nim fotosynteza",
      "ściana komórkowa": "nadaje komórce kształt i chroni ją"
    },
    "image": "r01_model_komorki_roslinnej.jpg",
    "explanation": "Jądro komórkowe zawiera DNA i nadzoruje komórkę, mitochondrium dostarcza energię, chloroplast uczestniczy w fotosyntezie, a ściana komórkowa jest sztywna, chroni komórkę i nadaje jej kształt."
  },
  {
    "id": "R01_KOM_05",
    "section": "Budowa komórek",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do typów komórek, w których są charakterystyczne lub wspólne.",
    "options": null,
    "items": [
      "chloroplast",
      "wakuola",
      "substancja jądrowa",
      "jądro komórkowe",
      "mitochondrium",
      "cytozol"
    ],
    "categories": [
      "roślinna",
      "bakteryjna",
      "zwierzęca i roślinna",
      "wszystkie typy"
    ],
    "answer": {
      "roślinna": [
        "chloroplast",
        "wakuola"
      ],
      "bakteryjna": [
        "substancja jądrowa"
      ],
      "zwierzęca i roślinna": [
        "jądro komórkowe",
        "mitochondrium"
      ],
      "wszystkie typy": [
        "cytozol"
      ]
    },
    "image": "r01_model_komorki_bakteryjnej.jpg",
    "explanation": "Chloroplasty i duża wakuola są pokazane w komórce roślinnej, substancja jądrowa w komórce bakteryjnej, jądro i mitochondria w komórkach zwierzęcych i roślinnych, a cytozol występuje we wszystkich typach komórek."
  },
  {
    "id": "R01_KOM_06",
    "section": "Budowa komórek",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do elementów komórki zwierzęcej: błona komórkowa, cytozol, jądro komórkowe, chloroplast.",
    "options": null,
    "answer": "chloroplast",
    "image": "r01_model_komorki_zwierzecej.jpg",
    "explanation": "Komórka zwierzęca ma błonę komórkową, cytozol i jądro komórkowe, ale nie ma chloroplastów. Chloroplasty występują w komórkach roślinnych."
  },
  {
    "id": "R01_KOM_07",
    "section": "Budowa komórek",
    "type": "fill_in",
    "prompt": "Zielony barwnik znajdujący się w chloroplastach to __________.",
    "options": null,
    "answer": [
      "chlorofil"
    ],
    "altAnswers": [
      [
        "chlorofil"
      ]
    ],
    "image": "r01_model_komorki_roslinnej.jpg",
    "explanation": "Chlorofil to zielony barwnik obecny w chloroplastach. Pochłania światło potrzebne do fotosyntezy."
  },
  {
    "id": "R01_KOM_08",
    "section": "Budowa komórek",
    "type": "scenario",
    "prompt": "Komórka roślinna utrzymuje odpowiednią ilość wody, a dzięki temu zachowuje wielkość i jędrność. Który element komórki odpowiada za tę funkcję?",
    "options": [
      "wakuola",
      "mitochondrium",
      "rewolwer",
      "otoczka śluzowa",
      "hemoglobina",
      "śruba mikrometryczna"
    ],
    "answer": 0,
    "image": "r01_model_komorki_roslinnej.jpg",
    "explanation": "Wakuola utrzymuje właściwą ilość wody w komórce roślinnej, dlatego pomaga zachować jej wielkość i jędrność."
  },
  {
    "id": "R01_KOM_09",
    "section": "Budowa komórek",
    "type": "riddle",
    "prompt": "Które organellum bywa nazywane komórkową elektrownią, bo dostarcza komórce energię?",
    "options": null,
    "answer": "mitochondrium",
    "altAnswers": [
      "mitochondrium",
      "mitochondria"
    ],
    "image": "r01_model_komorki_zwierzecej.jpg",
    "explanation": "Mitochondrium dostarcza komórce energię i zachodzi w nim oddychanie komórkowe tlenowe."
  },
  {
    "id": "R01_KOM_10",
    "section": "Budowa komórek",
    "type": "match",
    "prompt": "Połącz typ komórki z elementem, który pomaga go rozpoznać.",
    "options": null,
    "left": [
      "komórka roślinna",
      "komórka zwierzęca",
      "komórka bakteryjna"
    ],
    "right": [
      "chloroplasty i ściana komórkowa",
      "brak ściany komórkowej w modelu z rozdziału",
      "substancja jądrowa i często otoczka śluzowa"
    ],
    "answer": {
      "komórka roślinna": "chloroplasty i ściana komórkowa",
      "komórka zwierzęca": "brak ściany komórkowej w modelu z rozdziału",
      "komórka bakteryjna": "substancja jądrowa i często otoczka śluzowa"
    },
    "image": "r01_model_komorki_bakteryjnej.jpg",
    "explanation": "Komórkę roślinną można rozpoznać po chloroplastach i ścianie komórkowej, zwierzęcą po braku ściany komórkowej w modelu, a bakteryjną po substancji jądrowej zamiast jądra komórkowego."
  },
  {
    "id": "R01_FOT_01",
    "section": "Fotosynteza",
    "type": "single_choice",
    "prompt": "Jak nazywa się proces, w którym większość organizmów samożywnych wytwarza glukozę?",
    "options": [
      "fotosynteza",
      "fermentacja alkoholowa",
      "wydalanie",
      "oddychanie tlenowe",
      "reakcja na bodźce",
      "barwienie preparatu"
    ],
    "answer": 0,
    "image": "r01_fotosynteza_schemat.jpg",
    "explanation": "Fotosynteza to proces wytwarzania substancji pokarmowej, czyli glukozy, w zielonych częściach roślin oraz u niektórych bakterii i protistów."
  },
  {
    "id": "R01_FOT_02",
    "section": "Fotosynteza",
    "type": "multi_select",
    "prompt": "Zaznacz składniki potrzebne do przeprowadzenia fotosyntezy.",
    "options": [
      "woda",
      "dwutlenek węgla",
      "światło",
      "alkohol etylowy",
      "tlen",
      "białka kurczliwe"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r01_fotosynteza_schemat.jpg",
    "explanation": "Do fotosyntezy potrzebne są woda, dwutlenek węgla i światło. W jej wyniku powstają glukoza i tlen."
  },
  {
    "id": "R01_FOT_03",
    "section": "Fotosynteza",
    "type": "true_false",
    "prompt": "Fotosynteza zachodzi w mitochondriach komórek roślinnych.",
    "options": null,
    "answer": false,
    "image": "r01_model_komorki_roslinnej.jpg",
    "explanation": "Fotosynteza zachodzi w chloroplastach, które zawierają chlorofil. Mitochondria są miejscem oddychania komórkowego tlenowego."
  },
  {
    "id": "R01_FOT_04",
    "section": "Fotosynteza",
    "type": "fill_in",
    "prompt": "W procesie fotosyntezy z dwutlenku węgla i wody przy udziale światła powstaje __________ oraz __________.",
    "options": null,
    "answer": [
      "glukoza",
      "tlen"
    ],
    "altAnswers": [
      [
        "glukoza",
        "substancja pokarmowa"
      ],
      [
        "tlen"
      ]
    ],
    "image": "r01_fotosynteza_schemat.jpg",
    "explanation": "Produktami fotosyntezy są substancja pokarmowa glukoza oraz tlen uwalniany do atmosfery."
  },
  {
    "id": "R01_FOT_05",
    "section": "Fotosynteza",
    "type": "match",
    "prompt": "Połącz pojęcie związane z fotosyntezą z opisem.",
    "options": null,
    "left": [
      "chloroplast",
      "chlorofil",
      "glukoza",
      "dwutlenek węgla"
    ],
    "right": [
      "miejsce fotosyntezy",
      "zielony barwnik pochłaniający światło",
      "substancja pokarmowa wytwarzana przez roślinę",
      "składnik potrzebny do fotosyntezy"
    ],
    "answer": {
      "chloroplast": "miejsce fotosyntezy",
      "chlorofil": "zielony barwnik pochłaniający światło",
      "glukoza": "substancja pokarmowa wytwarzana przez roślinę",
      "dwutlenek węgla": "składnik potrzebny do fotosyntezy"
    },
    "image": "r01_model_komorki_roslinnej.jpg",
    "explanation": "Fotosynteza zachodzi w chloroplastach dzięki chlorofilowi. Do procesu potrzebny jest dwutlenek węgla, a jednym z produktów jest glukoza."
  },
  {
    "id": "R01_FOT_06",
    "section": "Fotosynteza",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do składników potrzebnych do fotosyntezy: światło, woda, dwutlenek węgla, alkohol etylowy.",
    "options": null,
    "answer": "alkohol etylowy",
    "image": "r01_fotosynteza_schemat.jpg",
    "explanation": "Do fotosyntezy potrzebne są światło, woda i dwutlenek węgla. Alkohol etylowy jest produktem fermentacji alkoholowej, a nie składnikiem fotosyntezy."
  },
  {
    "id": "R01_FOT_07",
    "section": "Fotosynteza",
    "type": "scenario",
    "prompt": "Ta sama roślina w ciepłym i bardzo słonecznym klimacie osiąga większe rozmiary niż w chłodniejszym miejscu. Który wniosek najlepiej pasuje do informacji z rozdziału?",
    "options": [
      "Intensywność fotosyntezy zależy między innymi od światła i temperatury",
      "Fotosynteza zachodzi bez udziału światła",
      "Rośliny pobierają gotowy pokarm wyłącznie z gleby",
      "Tlen jest jedynym składnikiem potrzebnym do fotosyntezy",
      "Fermentacja alkoholowa zachodzi tylko w liściach",
      "Chlorofil chroni organizm przed zimnem"
    ],
    "answer": 0,
    "explanation": "Intensywność fotosyntezy zależy między innymi od ilości światła, dwutlenku węgla i temperatury. Dlatego warunki środowiska wpływają na wzrost roślin."
  },
  {
    "id": "R01_FOT_08",
    "section": "Fotosynteza",
    "type": "sort",
    "prompt": "Rozdziel substancje na składniki i produkty fotosyntezy.",
    "options": null,
    "items": [
      "woda",
      "dwutlenek węgla",
      "glukoza",
      "tlen"
    ],
    "categories": [
      "składniki fotosyntezy",
      "produkty fotosyntezy"
    ],
    "answer": {
      "składniki fotosyntezy": [
        "woda",
        "dwutlenek węgla"
      ],
      "produkty fotosyntezy": [
        "glukoza",
        "tlen"
      ]
    },
    "image": "r01_fotosynteza_schemat.jpg",
    "explanation": "Woda i dwutlenek węgla są zużywane w fotosyntezie, a glukoza i tlen powstają jako produkty tego procesu."
  },
  {
    "id": "R01_FOT_09",
    "section": "Fotosynteza",
    "type": "riddle",
    "prompt": "Jak nazywa się zielony barwnik pochłaniający światło w chloroplastach?",
    "options": null,
    "answer": "chlorofil",
    "altAnswers": [
      "chlorofil"
    ],
    "image": "r01_model_komorki_roslinnej.jpg",
    "explanation": "Chlorofil to zielony barwnik w chloroplastach. Dzięki niemu roślina pochłania światło potrzebne do fotosyntezy."
  },
  {
    "id": "R01_FOT_10",
    "section": "Fotosynteza",
    "type": "sequence",
    "prompt": "Ułóż uproszczony przebieg fotosyntezy zgodnie z opisem z rozdziału.",
    "options": null,
    "items": [
      "powstają glukoza i tlen",
      "chlorofil pochłania światło",
      "roślina wykorzystuje glukozę",
      "do chloroplastów trafiają woda i dwutlenek węgla"
    ],
    "answer": [
      "do chloroplastów trafiają woda i dwutlenek węgla",
      "chlorofil pochłania światło",
      "powstają glukoza i tlen",
      "roślina wykorzystuje glukozę"
    ],
    "image": "r01_fotosynteza_schemat.jpg",
    "explanation": "Do fotosyntezy potrzebne są woda, dwutlenek węgla i światło pochłaniane przez chlorofil. W chloroplastach powstają glukoza i tlen, a glukoza jest używana przez roślinę."
  },
  {
    "id": "R01_ODD_01",
    "section": "Oddychanie komórkowe",
    "type": "single_choice",
    "prompt": "Po co organizmy przeprowadzają oddychanie komórkowe?",
    "options": [
      "Aby pozyskać energię ze składników pokarmowych",
      "Aby wytworzyć chlorofil w liściach",
      "Aby zbudować szkiełko nakrywkowe",
      "Aby usunąć światło z komórki",
      "Aby zamienić jądro komórkowe w wakuolę",
      "Aby zwiększyć liczbę pierwiastków na Ziemi"
    ],
    "answer": 0,
    "image": "r01_oddychanie_schemat.jpg",
    "explanation": "Oddychanie komórkowe to proces uwalniania energii z pokarmu. Energia jest potrzebna organizmom do wykonywania czynności życiowych."
  },
  {
    "id": "R01_ODD_02",
    "section": "Oddychanie komórkowe",
    "type": "multi_select",
    "prompt": "Zaznacz produkty oddychania tlenowego.",
    "options": [
      "dwutlenek węgla",
      "woda",
      "energia",
      "chlorofil",
      "alkohol etylowy",
      "światło"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r01_oddychanie_schemat.jpg",
    "explanation": "W oddychaniu tlenowym glukoza i tlen przekształcają się w dwutlenek węgla, wodę i energię."
  },
  {
    "id": "R01_ODD_03",
    "section": "Oddychanie komórkowe",
    "type": "true_false",
    "prompt": "Fermentacja alkoholowa zachodzi z udziałem tlenu.",
    "options": null,
    "answer": false,
    "image": "r01_fermentacja_drozdzy.jpg",
    "explanation": "Fermentacja jest oddychaniem beztlenowym, czyli przebiega bez udziału tlenu. W jej trakcie uwalnia się mniej energii niż podczas oddychania tlenowego."
  },
  {
    "id": "R01_ODD_04",
    "section": "Oddychanie komórkowe",
    "type": "fill_in",
    "prompt": "W oddychaniu tlenowym glukoza i __________ przekształcają się w dwutlenek węgla, wodę i energię.",
    "options": null,
    "answer": [
      "tlen"
    ],
    "altAnswers": [
      [
        "tlen"
      ]
    ],
    "image": "r01_oddychanie_schemat.jpg",
    "explanation": "Schemat oddychania tlenowego to: glukoza + tlen -> dwutlenek węgla + woda + energia."
  },
  {
    "id": "R01_ODD_05",
    "section": "Oddychanie komórkowe",
    "type": "match",
    "prompt": "Połącz proces z miejscem zachodzenia w komórce.",
    "options": null,
    "left": [
      "oddychanie tlenowe",
      "fermentacja alkoholowa"
    ],
    "right": [
      "mitochondria",
      "cytozol"
    ],
    "answer": {
      "oddychanie tlenowe": "mitochondria",
      "fermentacja alkoholowa": "cytozol"
    },
    "image": "r01_oddychanie_schemat.jpg",
    "explanation": "Oddychanie tlenowe przebiega w mitochondriach, a fermentacja alkoholowa, jako oddychanie beztlenowe, zachodzi w cytozolu komórek."
  },
  {
    "id": "R01_ODD_06",
    "section": "Oddychanie komórkowe",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do schematu oddychania tlenowego: glukoza, tlen, dwutlenek węgla, chlorofil.",
    "options": null,
    "answer": "chlorofil",
    "image": "r01_oddychanie_schemat.jpg",
    "explanation": "Glukoza, tlen i dwutlenek węgla występują w schemacie oddychania tlenowego. Chlorofil jest barwnikiem potrzebnym do fotosyntezy."
  },
  {
    "id": "R01_ODD_07",
    "section": "Oddychanie komórkowe",
    "type": "scenario",
    "prompt": "Drożdże znalazły się w warunkach, w których brakuje tlenu. Który proces mogą wtedy przeprowadzać?",
    "options": [
      "fermentację alkoholową",
      "fotosyntezę w chloroplastach",
      "barwienie preparatu",
      "wzrost ściany komórkowej roślin",
      "transport tlenu przez hemoglobinę",
      "działanie rewolweru"
    ],
    "answer": 0,
    "image": "r01_fermentacja_drozdzy.jpg",
    "explanation": "Drożdże mogą oddychać tlenowo, gdy tlenu jest wystarczająco dużo, albo przeprowadzać fermentację alkoholową, gdy tlenu brakuje."
  },
  {
    "id": "R01_ODD_08",
    "section": "Oddychanie komórkowe",
    "type": "sort",
    "prompt": "Przyporządkuj cechy i produkty do rodzaju oddychania komórkowego.",
    "options": null,
    "items": [
      "z udziałem tlenu",
      "w mitochondriach",
      "bez udziału tlenu",
      "w cytozolu",
      "alkohol etylowy",
      "woda"
    ],
    "categories": [
      "oddychanie tlenowe",
      "fermentacja alkoholowa"
    ],
    "answer": {
      "oddychanie tlenowe": [
        "z udziałem tlenu",
        "w mitochondriach",
        "woda"
      ],
      "fermentacja alkoholowa": [
        "bez udziału tlenu",
        "w cytozolu",
        "alkohol etylowy"
      ]
    },
    "image": "r01_oddychanie_schemat.jpg",
    "explanation": "Oddychanie tlenowe odbywa się z udziałem tlenu w mitochondriach i daje między innymi wodę. Fermentacja alkoholowa zachodzi bez tlenu w cytozolu i wytwarza alkohol etylowy."
  },
  {
    "id": "R01_ODD_09",
    "section": "Oddychanie komórkowe",
    "type": "riddle",
    "prompt": "Jak nazywa się oddychanie beztlenowe, którego przykładem jest proces zachodzący u drożdży?",
    "options": null,
    "answer": "fermentacja",
    "altAnswers": [
      "fermentacja",
      "fermentacja alkoholowa"
    ],
    "image": "r01_fermentacja_drozdzy.jpg",
    "explanation": "Oddychanie beztlenowe nazywa się fermentacją. U drożdży przykładem jest fermentacja alkoholowa."
  },
  {
    "id": "R01_ODD_10",
    "section": "Oddychanie komórkowe",
    "type": "sequence",
    "prompt": "Ułóż uproszczony przebieg oddychania tlenowego.",
    "options": null,
    "items": [
      "powstają dwutlenek węgla i woda",
      "glukoza trafia do komórki",
      "uwalnia się energia",
      "w procesie uczestniczy tlen"
    ],
    "answer": [
      "glukoza trafia do komórki",
      "w procesie uczestniczy tlen",
      "powstają dwutlenek węgla i woda",
      "uwalnia się energia"
    ],
    "image": "r01_oddychanie_schemat.jpg",
    "explanation": "W oddychaniu tlenowym glukoza rozkłada się przy udziale tlenu na dwutlenek węgla i wodę, a w trakcie tego procesu uwalnia się energia."
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz związek chemiczny z bardziej szczegółową funkcją podaną w rozdziale.",
    "options": null,
    "left": [
      "białka kurczliwe",
      "celuloza",
      "kwas nukleinowy DNA",
      "sole mineralne"
    ],
    "right": [
      "odpowiadają za skurcz mięśni",
      "buduje ściany komórkowe roślin",
      "zawiera informacje o budowie i funkcjonowaniu komórki",
      "regulują przebieg procesów życiowych"
    ],
    "answer": {
      "białka kurczliwe": "odpowiadają za skurcz mięśni",
      "celuloza": "buduje ściany komórkowe roślin",
      "kwas nukleinowy DNA": "zawiera informacje o budowie i funkcjonowaniu komórki",
      "sole mineralne": "regulują przebieg procesów życiowych"
    },
    "image": "r01_sklad_chemiczny.jpg",
    "explanation": "W rozdziale podano przykłady funkcji związków chemicznych: białka kurczliwe odpowiadają za skurcz mięśni, celuloza buduje ściany komórkowe roślin, DNA zawiera informację, a sole mineralne regulują procesy życiowe."
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki, od których według rozdziału zależy intensywność fotosyntezy.",
    "options": [
      "ilość światła",
      "ilość dwutlenku węgla",
      "odpowiednia temperatura",
      "sole mineralne",
      "ilość alkoholu etylowego",
      "liczba śrub mikroskopu"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r01_fotosynteza_schemat.jpg",
    "explanation": "Intensywność fotosyntezy zależy między innymi od ilości dostępnego światła, dwutlenku węgla, soli mineralnych i odpowiedniej temperatury."
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy obserwacji mikroskopowej zgodnie z instrukcją z rozdziału.",
    "options": null,
    "items": [
      "wyreguluj ostrość śrubą mikrometryczną",
      "połóż preparat na stoliku",
      "oświetl preparat",
      "ustaw obiektyw o najmniejszym powiększeniu",
      "ustaw obiektyw jak najniżej i oddalaj go do uzyskania ostrości"
    ],
    "answer": [
      "połóż preparat na stoliku",
      "ustaw obiektyw o najmniejszym powiększeniu",
      "oświetl preparat",
      "ustaw obiektyw jak najniżej i oddalaj go do uzyskania ostrości",
      "wyreguluj ostrość śrubą mikrometryczną"
    ],
    "image": "r01_preparat_mikroskopowy.jpg",
    "explanation": "Instrukcja nakazuje zacząć od położenia preparatu, ustawienia najmniejszego powiększenia i oświetlenia, a potem stopniowo ustawiać ostrość śrubami."
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do poziomów budowy lub typów komórek.",
    "options": null,
    "items": [
      "komórka mięśniowa",
      "tkanka przewodząca",
      "liść",
      "układ krwionośny",
      "substancja jądrowa",
      "chloroplast"
    ],
    "categories": [
      "poziomy budowy",
      "elementy komórki bakteryjnej",
      "elementy komórki roślinnej"
    ],
    "answer": {
      "poziomy budowy": [
        "komórka mięśniowa",
        "tkanka przewodząca",
        "liść",
        "układ krwionośny"
      ],
      "elementy komórki bakteryjnej": [
        "substancja jądrowa"
      ],
      "elementy komórki roślinnej": [
        "chloroplast"
      ]
    },
    "image": "r01_poziomy_budowy.jpg",
    "explanation": "Komórka mięśniowa, tkanka przewodząca, liść i układ krwionośny są przykładami poziomów budowy. Substancja jądrowa wyróżnia komórkę bakteryjną, a chloroplast jest elementem komórki roślinnej."
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Oddychanie tlenowe zachodzi w __________, a fermentacja alkoholowa w __________ komórek.",
    "options": null,
    "answer": [
      "mitochondriach",
      "cytozolu"
    ],
    "altAnswers": [
      [
        "mitochondriach",
        "mitochondria"
      ],
      [
        "cytozolu",
        "cytozol"
      ]
    ],
    "image": "r01_oddychanie_schemat.jpg",
    "explanation": "Oddychanie tlenowe przebiega w mitochondriach, natomiast fermentacja alkoholowa zachodzi w cytozolu komórek."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W doświadczeniu z drożdżami gaz z pierwszego naczynia trafia rurką do wody wapiennej, a ona mętnieje. Co pokazuje taki wynik?",
    "options": [
      "Podczas fermentacji drożdży wydziela się dwutlenek węgla",
      "Drożdże wytwarzają chlorofil w chloroplastach",
      "Woda wapienna zamienia się w glukozę",
      "Światło jest produktem fermentacji",
      "W mitochondriach powstaje szkiełko nakrywkowe",
      "Błona komórkowa znika w wodzie wapiennej"
    ],
    "answer": 0,
    "image": "r01_fermentacja_drozdzy.jpg",
    "explanation": "Woda wapienna mętnieje w zetknięciu z dwutlenkiem węgla. Doświadczenie ma wykazać, że podczas fermentacji drożdży wydziela się ten gaz."
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Drożdże mogą oddychać tlenowo, gdy jest wystarczająco dużo tlenu, a przy braku tlenu przeprowadzać fermentację alkoholową.",
    "options": null,
    "answer": true,
    "image": "r01_fermentacja_drozdzy.jpg",
    "explanation": "Rozdział podaje, że drożdże przystosowują się do warunków: przy dostępie tlenu oddychają tlenowo, a gdy tlenu brakuje, przeprowadzają fermentację alkoholową."
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do elementów związanych z oddychaniem komórkowym lub jego miejscem: glukoza, mitochondrium, cytozol, wakuola.",
    "options": null,
    "answer": "wakuola",
    "image": "r01_oddychanie_schemat.jpg",
    "explanation": "Glukoza jest rozkładana w oddychaniu, mitochondrium jest miejscem oddychania tlenowego, a cytozol miejscem fermentacji. Wakuola utrzymuje właściwą ilość wody w komórce roślinnej."
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "W którym organellum komórki roślinnej znajduje się chlorofil i przebiega fotosynteza?",
    "options": null,
    "answer": "chloroplast",
    "altAnswers": [
      "chloroplast",
      "chloroplasty",
      "w chloroplaście",
      "w chloroplastach"
    ],
    "image": "r01_model_komorki_roslinnej.jpg",
    "explanation": "Fotosynteza zachodzi w chloroplastach, ponieważ zawierają chlorofil pochłaniający światło."
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który sposób oddychania komórkowego pozwala uzyskać najwięcej energii z glukozy?",
    "options": [
      "oddychanie tlenowe",
      "fermentacja alkoholowa",
      "fermentacja bez produktów",
      "fotosynteza nocna",
      "wydalanie",
      "barwienie preparatu"
    ],
    "answer": 0,
    "image": "r01_oddychanie_schemat.jpg",
    "explanation": "Najwięcej energii uzyskuje się wtedy, gdy w procesie oddychania uczestniczy tlen. Fermentacja uwalnia mniej energii, bo glukoza zostaje rozłożona częściowo."
  },
  {
    "id": "R01_HARD_11",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz organizm lub grupę z typem odżywiania opisanym w rozdziale.",
    "options": null,
    "left": [
      "rośliny",
      "niektóre bakterie",
      "zwierzęta",
      "grzyby"
    ],
    "right": [
      "samożywne rośliny",
      "bakterie zdolne do fotosyntezy",
      "cudzożywne zwierzęta",
      "cudzożywne grzyby"
    ],
    "answer": {
      "rośliny": "samożywne rośliny",
      "niektóre bakterie": "bakterie zdolne do fotosyntezy",
      "zwierzęta": "cudzożywne zwierzęta",
      "grzyby": "cudzożywne grzyby"
    },
    "explanation": "Rośliny są organizmami samożywnymi, niektóre bakterie także mogą przeprowadzać fotosyntezę, a zwierzęta i grzyby pobierają substancje pokarmowe z otoczenia."
  },
  {
    "id": "R01_HARD_12",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Meduza nie ma płuc ani skrzeli, ale według rozdziału może pobierać tlen z otoczenia. Jak to robi?",
    "options": [
      "całą powierzchnią ciała",
      "przez chloroplasty",
      "rewolwerem mikroskopu",
      "przez ścianę komórkową roślin",
      "za pomocą skrobi",
      "przez wodę wapienną"
    ],
    "answer": 0,
    "explanation": "Rozdział podaje, że organizmy mogą pobierać tlen różnymi narządami, na przykład płucami lub skrzelami, a meduzy pobierają go całą powierzchnią ciała."
  }
];

const KID_PROMPTS = {};

const chapter = {
  "id": "r01",
  "number": 1,
  "title": "Budowa i czynności organizmów",
  "icon": "🧬",
  "sectionOrder": [
    "Organizm i poziomy budowy",
    "Skład chemiczny organizmów",
    "Mikroskop i preparaty",
    "Budowa komórek",
    "Fotosynteza",
    "Oddychanie komórkowe"
  ],
  "sectionIcons": {
    "Organizm i poziomy budowy": "🌱",
    "Skład chemiczny organizmów": "⚗️",
    "Mikroskop i preparaty": "🔬",
    "Budowa komórek": "🧫",
    "Fotosynteza": "☀️",
    "Oddychanie komórkowe": "💨"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
