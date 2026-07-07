const ALL_EXERCISES = [
  {
    "id": "R02_CECHY_01",
    "section": "Jakie są cechy organizmów?",
    "type": "single_choice",
    "prompt": "Co oznacza, że organizm ma hierarchiczną budowę?",
    "options": [
      "Składa się z samych tkanek",
      "Składa się z coraz większych i bardziej złożonych części",
      "Zawsze ma tylko jedną komórkę",
      "Nie ma żadnych narządów"
    ],
    "answer": 1,
    "explanation": "Hierarchiczna budowa oznacza, że organizm składa się z mniejszych elementów o prostej budowie, które tworzą większe i bardziej złożone struktury."
  },
  {
    "id": "R02_CECHY_02",
    "section": "Jakie są cechy organizmów?",
    "type": "sequence",
    "prompt": "Ułóż poziomy organizacji organizmu od najmniejszego do największego.",
    "options": null,
    "items": [
      "układy narządów",
      "tkanki",
      "organizm",
      "komórki",
      "narządy"
    ],
    "answer": [
      "komórki",
      "tkanki",
      "narządy",
      "układy narządów",
      "organizm"
    ],
    "image": "/img/bbt_r02_hierarchiczna_budowa.jpg",
    "explanation": "Najpierw są komórki. Z komórek powstają tkanki, z tkanek narządy, z narządów układy narządów, a razem tworzą one cały organizm."
  },
  {
    "id": "R02_CECHY_03",
    "section": "Jakie są cechy organizmów?",
    "type": "single_choice",
    "prompt": "Najmniejszą samodzielną jednostką budującą wszystkie organizmy jest:",
    "options": [
      "narząd",
      "tkanka",
      "komórka",
      "układ narządów"
    ],
    "answer": 2,
    "explanation": "Komórka to najmniejsza samodzielna jednostka budująca wszystkie organizmy."
  },
  {
    "id": "R02_CECHY_04",
    "section": "Jakie są cechy organizmów?",
    "type": "sort",
    "prompt": "Przyporządkuj organizmy do odpowiedniej grupy.",
    "options": null,
    "items": [
      "ameba",
      "ważka"
    ],
    "categories": [
      "jednokomórkowe",
      "wielokomórkowe"
    ],
    "answer": {
      "jednokomórkowe": [
        "ameba"
      ],
      "wielokomórkowe": [
        "ważka"
      ]
    },
    "image": "/img/bbt_r02_ameba_wazka.jpg",
    "explanation": "Ameba jest organizmem jednokomórkowym, a ważka wielokomórkowym."
  },
  {
    "id": "R02_CECHY_05",
    "section": "Jakie są cechy organizmów?",
    "type": "true_false",
    "prompt": "Organizm jednokomórkowy wykonuje wszystkie czynności życiowe dzięki jednej komórce.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. U organizmów jednokomórkowych jedna komórka wykonuje wszystkie czynności życiowe."
  },
  {
    "id": "R02_CECHY_06",
    "section": "Jakie są cechy organizmów?",
    "type": "multi_select",
    "prompt": "Zaznacz czynności życiowe organizmów.",
    "options": [
      "odżywianie się",
      "oddychanie",
      "rysowanie map",
      "wydalanie",
      "ruch",
      "rozmnażanie się"
    ],
    "answer": [
      0,
      1,
      3,
      4,
      5
    ],
    "explanation": "Do czynności życiowych należą między innymi odżywianie się, oddychanie, wydalanie, ruch i rozmnażanie się. Rysowanie map nie jest czynnością życiową."
  },
  {
    "id": "R02_CECHY_07",
    "section": "Jakie są cechy organizmów?",
    "type": "single_choice",
    "prompt": "Co pokazuje ilustracja ze słonecznikami?",
    "options": [
      "wydalanie",
      "ruch rośliny w stronę światła",
      "rozmnażanie się",
      "budowę tkanki"
    ],
    "answer": 1,
    "image": "/img/bbt_r02_slonecznik_ruch.jpg",
    "explanation": "Słonecznik kieruje kwiaty w stronę słońca. To przykład ruchu rośliny."
  },
  {
    "id": "R02_CECHY_08",
    "section": "Jakie są cechy organizmów?",
    "type": "scenario",
    "prompt": "Kuba wyszedł z ciemnego pokoju na bardzo jasne słońce i odruchowo zmrużył oczy. Jaką czynność życiową pokazuje ten przykład?",
    "options": [
      "wrażliwość na bodźce",
      "rozmnażanie się",
      "odżywianie się",
      "wzrost i rozwój"
    ],
    "answer": 0,
    "explanation": "Zmrużenie oczu po silnym świetle to reakcja na bodziec. Pokazuje wrażliwość na bodźce."
  },
  {
    "id": "R02_CECHY_09",
    "section": "Jakie są cechy organizmów?",
    "type": "fill_in",
    "prompt": "Uzupełnij: Z komórek powstają __________, a z tkanek powstają __________.",
    "options": null,
    "answer": [
      "tkanki",
      "narządy"
    ],
    "altAnswers": [
      [
        "tkanki",
        "tkanka",
        "tkanek"
      ],
      [
        "narządy",
        "narzad",
        "narządy",
        "narząd"
      ]
    ],
    "explanation": "W hierarchicznej budowie organizmu komórki tworzą tkanki, a tkanki tworzą narządy."
  },
  {
    "id": "R02_CECHY_10",
    "section": "Jakie są cechy organizmów?",
    "type": "match",
    "prompt": "Połącz czynność życiową z przykładem.",
    "options": null,
    "left": [
      "odżywianie się",
      "ruch",
      "rozmnażanie się",
      "wydalanie"
    ],
    "right": [
      "pies biegnie",
      "ptak zjada owoce",
      "powstają osobniki potomne",
      "organizm usuwa zbędne substancje"
    ],
    "answer": {
      "odżywianie się": "ptak zjada owoce",
      "ruch": "pies biegnie",
      "rozmnażanie się": "powstają osobniki potomne",
      "wydalanie": "organizm usuwa zbędne substancje"
    },
    "explanation": "Każdy przykład pokazuje inną czynność życiową: zdobywanie pokarmu, poruszanie się, powstawanie potomstwa lub usuwanie zbędnych substancji."
  },
  {
    "id": "R02_CECHY_11",
    "section": "Jakie są cechy organizmów?",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: oddychanie, ruch, chlorofil, wydalanie.",
    "options": null,
    "answer": "chlorofil",
    "explanation": "Chlorofil to zielony barwnik roślin, a pozostałe wyrazy to czynności życiowe organizmów."
  },
  {
    "id": "R02_CECHY_12",
    "section": "Jakie są cechy organizmów?",
    "type": "scenario",
    "prompt": "Na ilustracji widać ptaka, który zjada owoce. Jaką czynność życiową widzisz przede wszystkim?",
    "options": [
      "odżywianie się",
      "wydalanie",
      "wzrost i rozwój",
      "wrażliwość na bodźce"
    ],
    "answer": 0,
    "image": "/img/bbt_r02_jemioluszka_odzywianie.jpg",
    "explanation": "Ptak pobiera pokarm z otoczenia. To przykład odżywiania się."
  },
  {
    "id": "R02_ZWIAZKI_01",
    "section": "Z czego są zbudowane organizmy?",
    "type": "single_choice",
    "prompt": "Czym są pierwiastki chemiczne?",
    "options": [
      "proste substancje budujące przyrodę",
      "gotowe pokarmy dla roślin",
      "tylko gazy w powietrzu",
      "same witaminy"
    ],
    "answer": 0,
    "explanation": "Pierwiastki chemiczne to proste substancje, z których zbudowana jest przyroda ożywiona i nieożywiona."
  },
  {
    "id": "R02_ZWIAZKI_02",
    "section": "Z czego są zbudowane organizmy?",
    "type": "multi_select",
    "prompt": "Zaznacz najważniejsze pierwiastki budujące organizmy.",
    "options": [
      "węgiel",
      "wodór",
      "azot",
      "tlen",
      "fosfor",
      "siarka"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4,
      5
    ],
    "image": "/img/bbt_r02_pierwiastki_chonps.jpg",
    "explanation": "Najważniejsze pierwiastki budujące organizmy to węgiel, wodór, azot, tlen, fosfor i siarka."
  },
  {
    "id": "R02_ZWIAZKI_03",
    "section": "Z czego są zbudowane organizmy?",
    "type": "true_false",
    "prompt": "W organizmie człowieka najwięcej jest tlenu.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Tlen stanowi największą część masy organizmu człowieka."
  },
  {
    "id": "R02_ZWIAZKI_04",
    "section": "Z czego są zbudowane organizmy?",
    "type": "match",
    "prompt": "Połącz związek chemiczny z jego główną rolą.",
    "options": null,
    "left": [
      "woda",
      "białka",
      "tłuszcze",
      "kwasy nukleinowe"
    ],
    "right": [
      "zawierają informację genetyczną",
      "są rozpuszczalnikiem wielu związków",
      "budują struktury komórki i regulują procesy",
      "są źródłem energii i materiałem zapasowym"
    ],
    "answer": {
      "woda": "są rozpuszczalnikiem wielu związków",
      "białka": "budują struktury komórki i regulują procesy",
      "tłuszcze": "są źródłem energii i materiałem zapasowym",
      "kwasy nukleinowe": "zawierają informację genetyczną"
    },
    "explanation": "Woda jest rozpuszczalnikiem, białka budują i regulują, tłuszcze dają energię i są zapasem, a kwasy nukleinowe przechowują informację genetyczną."
  },
  {
    "id": "R02_ZWIAZKI_05",
    "section": "Z czego są zbudowane organizmy?",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do właściwej grupy.",
    "options": null,
    "items": [
      "węgiel",
      "woda",
      "azot",
      "białka",
      "tlen",
      "cukry"
    ],
    "categories": [
      "pierwiastki",
      "związki chemiczne"
    ],
    "answer": {
      "pierwiastki": [
        "węgiel",
        "azot",
        "tlen"
      ],
      "związki chemiczne": [
        "woda",
        "białka",
        "cukry"
      ]
    },
    "explanation": "Węgiel, azot i tlen to pierwiastki. Woda, białka i cukry to związki chemiczne."
  },
  {
    "id": "R02_ZWIAZKI_06",
    "section": "Z czego są zbudowane organizmy?",
    "type": "single_choice",
    "prompt": "Głównym składnikiem organizmów jest:",
    "options": [
      "woda",
      "żelazo",
      "powietrze",
      "piasek"
    ],
    "answer": 0,
    "explanation": "Głównym składnikiem organizmów jest woda."
  },
  {
    "id": "R02_ZWIAZKI_07",
    "section": "Z czego są zbudowane organizmy?",
    "type": "fill_in",
    "prompt": "Uzupełnij symbole: wodór to __________, a tlen to __________.",
    "options": null,
    "answer": [
      "H",
      "O"
    ],
    "altAnswers": [
      [
        "H",
        "h"
      ],
      [
        "O",
        "o"
      ]
    ],
    "explanation": "Międzynarodowy symbol wodoru to H, a tlenu - O."
  },
  {
    "id": "R02_ZWIAZKI_08",
    "section": "Z czego są zbudowane organizmy?",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: woda, białka, tłuszcze, liść.",
    "options": null,
    "answer": "liść",
    "explanation": "Liść jest częścią rośliny, a woda, białka i tłuszcze to związki chemiczne budujące organizmy."
  },
  {
    "id": "R02_ZWIAZKI_09",
    "section": "Z czego są zbudowane organizmy?",
    "type": "single_choice",
    "prompt": "Co najlepiej pokazuje ilustracja z talerzami jedzenia?",
    "options": [
      "zróżnicowaną dietę",
      "budowę komórki",
      "wydalanie",
      "oddychanie"
    ],
    "answer": 0,
    "image": "/img/bbt_r02_zroznicowana_dieta.jpg",
    "explanation": "Ilustracja pokazuje różne produkty spożywcze. To przykład zróżnicowanej diety."
  },
  {
    "id": "R02_ZWIAZKI_10",
    "section": "Z czego są zbudowane organizmy?",
    "type": "scenario",
    "prompt": "Maja je codziennie tylko jeden rodzaj przekąski. Dlaczego to zły pomysł według rozdziału?",
    "options": [
      "Bo organizm potrzebuje zróżnicowanej diety, która dostarcza różnych związków chemicznych",
      "Bo wtedy rośliny nie rosną",
      "Bo białka zamieniają się w wodę",
      "Bo wszystkie pierwiastki znikają z organizmu"
    ],
    "answer": 0,
    "explanation": "Organizmy potrzebują wielu różnych związków chemicznych. Najłatwiej dostarczyć je dzięki zróżnicowanej diecie."
  },
  {
    "id": "R02_ZWIAZKI_11",
    "section": "Z czego są zbudowane organizmy?",
    "type": "true_false",
    "prompt": "Kwasy nukleinowe zawierają informację genetyczną.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Kwasy nukleinowe uczestniczą w dziedziczeniu cech i przechowują informację genetyczną."
  },
  {
    "id": "R02_ZWIAZKI_12",
    "section": "Z czego są zbudowane organizmy?",
    "type": "sequence",
    "prompt": "Ułóż pierwiastki od największego udziału w organizmie człowieka do najmniejszego spośród podanych.",
    "options": null,
    "items": [
      "azot",
      "wodór",
      "tlen",
      "węgiel"
    ],
    "answer": [
      "tlen",
      "węgiel",
      "wodór",
      "azot"
    ],
    "explanation": "W organizmie człowieka spośród tych czterech najwięcej jest tlenu, potem węgla, następnie wodoru, a najmniej azotu."
  },
  {
    "id": "R02_KOMORKI_01",
    "section": "Jak są zbudowane komórki?",
    "type": "single_choice",
    "prompt": "Komórka to:",
    "options": [
      "największa część organizmu",
      "najmniejsza samodzielna jednostka budująca organizmy",
      "rodzaj tkanki",
      "to samo co narząd"
    ],
    "answer": 1,
    "explanation": "Komórka jest najmniejszą samodzielną jednostką budującą wszystkie organizmy."
  },
  {
    "id": "R02_KOMORKI_02",
    "section": "Jak są zbudowane komórki?",
    "type": "sort",
    "prompt": "Przyporządkuj komórki do właściwej grupy.",
    "options": null,
    "items": [
      "komórka bakterii",
      "komórka zwierzęca",
      "komórka roślinna"
    ],
    "categories": [
      "bezjądrowe",
      "jądrowe"
    ],
    "answer": {
      "bezjądrowe": [
        "komórka bakterii"
      ],
      "jądrowe": [
        "komórka zwierzęca",
        "komórka roślinna"
      ]
    },
    "image": "/img/bbt_r02_jadrowe_bezjadrowe.jpg",
    "explanation": "Komórki bakterii są bezjądrowe, a komórki zwierzęce i roślinne mają jądro komórkowe, więc są jądrowe."
  },
  {
    "id": "R02_KOMORKI_03",
    "section": "Jak są zbudowane komórki?",
    "type": "multi_select",
    "prompt": "Zaznacz elementy, które może zawierać komórka bakterii według rozdziału.",
    "options": [
      "błona komórkowa",
      "ściana komórkowa",
      "cytozol",
      "nić DNA",
      "jądro komórkowe",
      "rzęska"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      5
    ],
    "image": "/img/bbt_r02_komorka_bakterii.jpg",
    "explanation": "Komórka bakterii ma błonę komórkową, ścianę komórkową, cytozol i nić DNA. U niektórych bakterii występuje też rzęska. Bakterie nie mają jądra komórkowego."
  },
  {
    "id": "R02_KOMORKI_04",
    "section": "Jak są zbudowane komórki?",
    "type": "true_false",
    "prompt": "Komórki bakterii mają jądro komórkowe.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz. Komórki bakterii są bezjądrowe, więc nie mają jądra komórkowego."
  },
  {
    "id": "R02_KOMORKI_05",
    "section": "Jak są zbudowane komórki?",
    "type": "single_choice",
    "prompt": "Jaka jest główna rola błony komórkowej?",
    "options": [
      "oddychanie tlenowe",
      "oddziela wnętrze komórki od środowiska zewnętrznego",
      "wytwarza chlorofil",
      "magazynuje DNA"
    ],
    "answer": 1,
    "explanation": "Błona komórkowa oddziela wnętrze komórki od środowiska zewnętrznego i umożliwia wymianę niektórych substancji."
  },
  {
    "id": "R02_KOMORKI_06",
    "section": "Jak są zbudowane komórki?",
    "type": "match",
    "prompt": "Połącz typ komórki z elementem szczególnie dla niego charakterystycznym.",
    "options": null,
    "left": [
      "komórka bakterii",
      "komórka zwierzęca",
      "komórka roślinna"
    ],
    "right": [
      "chloroplasty",
      "nić DNA leżąca w cytozolu",
      "brak ściany komórkowej i chloroplastów"
    ],
    "answer": {
      "komórka bakterii": "nić DNA leżąca w cytozolu",
      "komórka zwierzęca": "brak ściany komórkowej i chloroplastów",
      "komórka roślinna": "chloroplasty"
    },
    "explanation": "Komórka bakterii nie ma jądra, więc nić DNA leży w cytozolu. Komórka zwierzęca nie ma ściany komórkowej ani chloroplastów. Komórka roślinna ma chloroplasty."
  },
  {
    "id": "R02_KOMORKI_07",
    "section": "Jak są zbudowane komórki?",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do odpowiedniego typu komórki.",
    "options": null,
    "items": [
      "chloroplasty",
      "wakuola",
      "jądro komórkowe",
      "ściana komórkowa",
      "mitochondrium",
      "nić DNA"
    ],
    "categories": [
      "komórka roślinna",
      "komórka zwierzęca",
      "komórka bakterii"
    ],
    "answer": {
      "komórka roślinna": [
        "chloroplasty",
        "wakuola",
        "ściana komórkowa"
      ],
      "komórka zwierzęca": [
        "jądro komórkowe",
        "mitochondrium"
      ],
      "komórka bakterii": [
        "nić DNA"
      ]
    },
    "explanation": "Chloroplasty, wakuola i ściana komórkowa są typowe dla komórki roślinnej. Jądro i mitochondrium występują w komórce zwierzęcej. U bakterii materiał genetyczny ma postać nici DNA."
  },
  {
    "id": "R02_KOMORKI_08",
    "section": "Jak są zbudowane komórki?",
    "type": "single_choice",
    "prompt": "W jakim elemencie komórki roślinnej zachodzi fotosynteza?",
    "options": [
      "w jądrze komórkowym",
      "w chloroplaście",
      "w błonie komórkowej",
      "w wodniczce"
    ],
    "answer": 1,
    "explanation": "Fotosynteza zachodzi w chloroplastach."
  },
  {
    "id": "R02_KOMORKI_09",
    "section": "Jak są zbudowane komórki?",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: chloroplast, wakuola, ściana komórkowa, ważka.",
    "options": null,
    "answer": "ważka",
    "explanation": "Ważka jest organizmem, a pozostałe nazwy oznaczają elementy typowe dla komórki roślinnej."
  },
  {
    "id": "R02_KOMORKI_10",
    "section": "Jak są zbudowane komórki?",
    "type": "scenario",
    "prompt": "Ola porównuje dwie ilustracje komórek. Jedna ma ścianę komórkową i chloroplasty, druga nie. Która to komórka roślinna?",
    "options": [
      "ta bez chloroplastów",
      "ta ze ścianą komórkową i chloroplastami",
      "obie są zwierzęce",
      "obie są bakteryjne"
    ],
    "answer": 1,
    "image": "/img/bbt_r02_komorka_roslinna.jpg",
    "explanation": "Komórkę roślinną rozpoznajemy po obecności ściany komórkowej i chloroplastów."
  },
  {
    "id": "R02_KOMORKI_11",
    "section": "Jak są zbudowane komórki?",
    "type": "match",
    "prompt": "Połącz wyspecjalizowaną komórkę z jej zadaniem.",
    "options": null,
    "left": [
      "włośnik",
      "komórka nerwowa",
      "plemnik",
      "komórka mięśniowa"
    ],
    "right": [
      "przekazuje materiał genetyczny potomstwu",
      "przekazuje informacje",
      "kurczy się i umożliwia ruch",
      "pobiera z gleby wodę i sole mineralne"
    ],
    "answer": {
      "włośnik": "pobiera z gleby wodę i sole mineralne",
      "komórka nerwowa": "przekazuje informacje",
      "plemnik": "przekazuje materiał genetyczny potomstwu",
      "komórka mięśniowa": "kurczy się i umożliwia ruch"
    },
    "image": "/img/bbt_r02_wyspecjalizowane_komorki.jpg",
    "explanation": "Wyspecjalizowane komórki mają budowę dopasowaną do swoich zadań: włośnik pobiera, komórka nerwowa przekazuje informacje, plemnik bierze udział w rozmnażaniu, a komórka mięśniowa umożliwia ruch."
  },
  {
    "id": "R02_KOMORKI_12",
    "section": "Jak są zbudowane komórki?",
    "type": "single_choice",
    "prompt": "Po co roślinie są włośniki?",
    "options": [
      "żeby oddychała przez liście",
      "żeby pobierała z gleby wodę i sole mineralne",
      "żeby się rozmnażała",
      "żeby miała chlorofil"
    ],
    "answer": 1,
    "image": "/img/bbt_r02_wlosnik_korzenia.jpg",
    "explanation": "Włośniki zwiększają powierzchnię korzenia i pomagają pobierać z gleby wodę oraz sole mineralne."
  },
  {
    "id": "R02_KOMORKI_13",
    "section": "Jak są zbudowane komórki?",
    "type": "fill_in",
    "prompt": "Uzupełnij: W komórce roślinnej znajduje się jedna duża __________, a na zewnątrz błony leży __________ komórkowa.",
    "options": null,
    "answer": [
      "wakuola",
      "ściana"
    ],
    "altAnswers": [
      [
        "wakuola",
        "wodniczka",
        "wodniczka komórkowa"
      ],
      [
        "ściana",
        "ściana komórkowa"
      ]
    ],
    "explanation": "Komórka roślinna ma jedną dużą wakuolę. Na zewnątrz błony komórkowej znajduje się ściana komórkowa."
  },
  {
    "id": "R02_FOTO_01",
    "section": "Na czym polega fotosynteza?",
    "type": "single_choice",
    "prompt": "Fotosynteza to proces:",
    "options": [
      "oddawania wody przez korzeń",
      "wytwarzania związków chemicznych dzięki energii światła",
      "rozmnażania się roślin",
      "budowy mięśni u zwierząt"
    ],
    "answer": 1,
    "explanation": "Fotosynteza to proces wytwarzania związków chemicznych dzięki wykorzystaniu energii światła słonecznego."
  },
  {
    "id": "R02_FOTO_02",
    "section": "Na czym polega fotosynteza?",
    "type": "fill_in",
    "prompt": "Uzupełnij schemat: dwutlenek węgla + __________ -> cukier (glukoza) + __________.",
    "options": null,
    "answer": [
      "woda",
      "tlen"
    ],
    "altAnswers": [
      [
        "woda",
        "wodę",
        "wodzie"
      ],
      [
        "tlen",
        "tlenu"
      ]
    ],
    "image": "/img/bbt_r02_fotosynteza_rownanie.jpg",
    "explanation": "W fotosyntezie z dwutlenku węgla i wody powstają cukier (glukoza) oraz tlen."
  },
  {
    "id": "R02_FOTO_03",
    "section": "Na czym polega fotosynteza?",
    "type": "single_choice",
    "prompt": "Gdzie zachodzi fotosynteza?",
    "options": [
      "w chloroplastach",
      "w mitochondriach",
      "w jądrze komórkowym",
      "w kościach"
    ],
    "answer": 0,
    "explanation": "Fotosynteza zachodzi w chloroplastach."
  },
  {
    "id": "R02_FOTO_04",
    "section": "Na czym polega fotosynteza?",
    "type": "true_false",
    "prompt": "Chlorofil pochłania energię światła słonecznego.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Chlorofil to zielony barwnik, który pochłania energię światła potrzebną do fotosyntezy."
  },
  {
    "id": "R02_FOTO_05",
    "section": "Na czym polega fotosynteza?",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki, od których zależy fotosynteza.",
    "options": [
      "światło",
      "dwutlenek węgla",
      "woda",
      "temperatura",
      "sole mineralne",
      "piasek"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "/img/bbt_r02_czynniki_fotosyntezy.jpg",
    "explanation": "Na fotosyntezę wpływają światło, dwutlenek węgla, woda, temperatura i sole mineralne. Piasek nie jest wymieniony jako taki czynnik."
  },
  {
    "id": "R02_FOTO_06",
    "section": "Na czym polega fotosynteza?",
    "type": "match",
    "prompt": "Połącz element z jego rolą w fotosyntezie.",
    "options": null,
    "left": [
      "woda",
      "dwutlenek węgla",
      "światło słoneczne",
      "chlorofil"
    ],
    "right": [
      "jest pobierany głównie przez liście",
      "jest zielonym barwnikiem",
      "jest pobierana z gleby",
      "dostarcza energii"
    ],
    "answer": {
      "woda": "jest pobierana z gleby",
      "dwutlenek węgla": "jest pobierany głównie przez liście",
      "światło słoneczne": "dostarcza energii",
      "chlorofil": "jest zielonym barwnikiem"
    },
    "explanation": "Woda trafia do rośliny z gleby, dwutlenek węgla z powietrza przez liście, światło dostarcza energii, a chlorofil ją pochłania."
  },
  {
    "id": "R02_FOTO_07",
    "section": "Na czym polega fotosynteza?",
    "type": "scenario",
    "prompt": "W szklarni zwiększono ilość dwutlenku węgla. Po co robi się to w uprawach szklarniowych?",
    "options": [
      "żeby roślina miała więcej chlorofilu od razu",
      "żeby przy dobrych warunkach uzyskać wyższe plony",
      "żeby zamienić liście w korzenie",
      "żeby zatrzymać wydalanie"
    ],
    "answer": 1,
    "image": "/img/bbt_r02_szklarnia_pomidory.jpg",
    "explanation": "Rośliny mogą wykorzystywać większą ilość dwutlenku węgla w fotosyntezie. Gdy mają też dość światła, wody i soli mineralnych, można uzyskać wyższe plony."
  },
  {
    "id": "R02_FOTO_08",
    "section": "Na czym polega fotosynteza?",
    "type": "single_choice",
    "prompt": "Jak roślina może wykorzystać cukry powstałe w fotosyntezie?",
    "options": [
      "tylko jako ozdobę liści",
      "jako źródło energii, materiał budulcowy i materiał zapasowy",
      "tylko do oddychania ryb",
      "nie może ich wykorzystać"
    ],
    "answer": 1,
    "explanation": "Cukry powstałe w fotosyntezie mogą dawać energię, służyć do budowy ciała rośliny i być magazynowane jako zapas."
  },
  {
    "id": "R02_FOTO_09",
    "section": "Na czym polega fotosynteza?",
    "type": "sort",
    "prompt": "Przyporządkuj związki do odpowiedniej grupy.",
    "options": null,
    "items": [
      "dwutlenek węgla",
      "woda",
      "cukier (glukoza)",
      "tlen"
    ],
    "categories": [
      "substancje potrzebne do fotosyntezy",
      "produkty fotosyntezy"
    ],
    "answer": {
      "substancje potrzebne do fotosyntezy": [
        "dwutlenek węgla",
        "woda"
      ],
      "produkty fotosyntezy": [
        "cukier (glukoza)",
        "tlen"
      ]
    },
    "explanation": "Do przeprowadzenia fotosyntezy potrzebne są dwutlenek węgla i woda. Produktami są cukier i tlen."
  },
  {
    "id": "R02_FOTO_10",
    "section": "Na czym polega fotosynteza?",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: światło, woda, dwutlenek węgla, kredka.",
    "options": null,
    "answer": "kredka",
    "explanation": "Światło, woda i dwutlenek węgla są związane z fotosyntezą. Kredka nie."
  },
  {
    "id": "R02_FOTO_11",
    "section": "Na czym polega fotosynteza?",
    "type": "scenario",
    "prompt": "Dlaczego duże obszary leśne są ważne dla życia na Ziemi?",
    "options": [
      "bo produkują tlen potrzebny większości organizmów",
      "bo zamieniają wszystkie zwierzęta w rośliny",
      "bo nie potrzebują światła",
      "bo wytwarzają tylko wodę"
    ],
    "answer": 0,
    "image": "/img/bbt_r02_znaczenie_fotosyntezy_las.jpg",
    "explanation": "Lasy są bardzo ważne, bo rośliny podczas fotosyntezy wytwarzają tlen niezbędny dla większości organizmów."
  },
  {
    "id": "R02_FOTO_12",
    "section": "Na czym polega fotosynteza?",
    "type": "true_false",
    "prompt": "Rośliny iglaste mogą prowadzić fotosyntezę przy temperaturze poniżej 0°C.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. W rozdziale podano, że rośliny iglaste mogą prowadzić fotosyntezę przy temperaturze poniżej 0°C."
  },
  {
    "id": "R02_FOTO_13",
    "section": "Na czym polega fotosynteza?",
    "type": "single_choice",
    "prompt": "Jaki zielony barwnik znajduje się w chloroplastach?",
    "options": [
      "chlorofil",
      "glukoza",
      "celuloza",
      "skrobia"
    ],
    "answer": 0,
    "explanation": "W chloroplastach znajduje się chlorofil - zielony barwnik potrzebny do fotosyntezy."
  },
  {
    "id": "R02_SUPER_01",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz elementy typowe dla komórki roślinnej, a niewystępujące w komórce zwierzęcej.",
    "options": [
      "chloroplasty",
      "ściana komórkowa",
      "jedna duża wakuola",
      "jądro komórkowe",
      "mitochondrium"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "/img/bbt_r02_komorka_roslinna.jpg",
    "explanation": "Komórka roślinna ma chloroplasty, ścianę komórkową i zwykle jedną dużą wakuolę. Jądro i mitochondria występują także w komórkach zwierzęcych."
  },
  {
    "id": "R02_SUPER_02",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj związki chemiczne do ich głównej roli.",
    "options": null,
    "items": [
      "woda",
      "białka",
      "tłuszcze",
      "cukry",
      "sole mineralne",
      "kwasy nukleinowe"
    ],
    "categories": [
      "budulec",
      "źródło lub zapas energii",
      "informacja i kierowanie procesami",
      "udział w wielu procesach komórkowych"
    ],
    "answer": {
      "budulec": [
        "białka"
      ],
      "źródło lub zapas energii": [
        "tłuszcze",
        "cukry"
      ],
      "informacja i kierowanie procesami": [
        "kwasy nukleinowe"
      ],
      "udział w wielu procesach komórkowych": [
        "woda",
        "sole mineralne"
      ]
    },
    "explanation": "Białka przede wszystkim budują struktury. Tłuszcze i cukry dostarczają energii lub są zapasem. Kwasy nukleinowe przechowują informację genetyczną i sterują procesami życiowymi. Woda i sole mineralne biorą udział w wielu procesach komórkowych."
  },
  {
    "id": "R02_SUPER_03",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy przebiegu fotosyntezy w logicznej kolejności od pobrania składników do powstania produktu.",
    "options": null,
    "items": [
      "w liściach powstaje cukier",
      "korzeń pobiera wodę z solami mineralnymi",
      "chlorofil pochłania energię światła",
      "do liścia dociera dwutlenek węgla"
    ],
    "answer": [
      "korzeń pobiera wodę z solami mineralnymi",
      "do liścia dociera dwutlenek węgla",
      "chlorofil pochłania energię światła",
      "w liściach powstaje cukier"
    ],
    "image": "/img/bbt_r02_przebieg_fotosyntezy_roslina.jpg",
    "explanation": "Roślina najpierw pobiera wodę, następnie korzysta z dwutlenku węgla z powietrza. Chlorofil pochłania energię światła, dzięki czemu może powstać cukier."
  },
  {
    "id": "R02_SUPER_04",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Roślina ma dużo światła, wody i soli mineralnych, ale stoi w miejscu z bardzo małą ilością dwutlenku węgla. Co najpewniej stanie się z fotosyntezą?",
    "options": [
      "będzie przebiegała z małą intensywnością",
      "natychmiast się zatrzyma na zawsze",
      "zamieni się w oddychanie",
      "w ogóle nie zależy od dwutlenku węgla"
    ],
    "answer": 0,
    "explanation": "Dwutlenek węgla jest niezbędny do fotosyntezy. Gdy jest go mało, fotosynteza przebiega z małą intensywnością."
  },
  {
    "id": "R02_SUPER_05",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: włośnik, komórka nerwowa, plemnik, skrobia.",
    "options": null,
    "answer": "skrobia",
    "explanation": "Włośnik, komórka nerwowa i plemnik to komórki wyspecjalizowane. Skrobia nie jest komórką, tylko substancją zapasową roślin."
  },
  {
    "id": "R02_SUPER_06",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Uzupełnij zdanie z rozdziału: cytoplazma = __________ + znajdujące się w nim elementy.",
    "options": null,
    "answer": [
      "cytozol"
    ],
    "altAnswers": [
      [
        "cytozol",
        "cytozolu"
      ]
    ],
    "explanation": "W rozdziale wyjaśniono, że cytoplazma to cytozol oraz znajdujące się w nim elementy."
  },
  {
    "id": "R02_SUPER_07",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do odpowiedniego typu komórki.",
    "options": null,
    "items": [
      "jądro komórkowe",
      "chloroplasty",
      "ściana komórkowa",
      "nić DNA w cytozolu",
      "mitochondria",
      "otoczka śluzowa"
    ],
    "categories": [
      "komórka bakterii",
      "komórka roślinna",
      "komórka zwierzęca"
    ],
    "answer": {
      "komórka bakterii": [
        "nić DNA w cytozolu",
        "otoczka śluzowa"
      ],
      "komórka roślinna": [
        "chloroplasty",
        "ściana komórkowa"
      ],
      "komórka zwierzęca": [
        "jądro komórkowe",
        "mitochondria"
      ]
    },
    "image": "/img/bbt_r02_jadrowe_bezjadrowe.jpg",
    "explanation": "Bakterie mają nić DNA w cytozolu i mogą mieć otoczkę śluzową. Rośliny mają chloroplasty i ścianę komórkową. Komórka zwierzęca ma jądro i mitochondria, ale nie ma ściany komórkowej ani chloroplastów."
  },
  {
    "id": "R02_SUPER_08",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Każda komórka, która zawiera DNA, ma też chloroplasty.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz. DNA występuje w wielu komórkach, na przykład zwierzęcych i bakteryjnych, ale chloroplasty są typowe dla komórek roślin."
  },
  {
    "id": "R02_SUPER_09",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz przykład z odpowiednią czynnością życiową.",
    "options": null,
    "left": [
      "zamknięcie oczu na silnym świetle",
      "powstawanie osobników potomnych",
      "wykorzystanie energii ze związków chemicznych",
      "usuwanie zbędnych substancji"
    ],
    "right": [
      "rozmnażanie się",
      "wydalanie",
      "oddychanie",
      "wrażliwość na bodźce"
    ],
    "answer": {
      "zamknięcie oczu na silnym świetle": "wrażliwość na bodźce",
      "powstawanie osobników potomnych": "rozmnażanie się",
      "wykorzystanie energii ze związków chemicznych": "oddychanie",
      "usuwanie zbędnych substancji": "wydalanie"
    },
    "explanation": "Każdy opis odnosi się do innej czynności życiowej: reakcji na bodziec, rozmnażania, oddychania albo wydalania."
  },
  {
    "id": "R02_SUPER_10",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W szklarni zwiększono ilość dwutlenku węgla, ale roślinom brakuje światła. Czy sam dodatkowy CO₂ wystarczy, by bardzo zwiększyć plony?",
    "options": [
      "tak, zawsze wystarczy",
      "nie, bo fotosynteza zależy też od światła",
      "tak, bo światło nie ma znaczenia",
      "nie, bo rośliny nie potrzebują dwutlenku węgla"
    ],
    "answer": 1,
    "image": "/img/bbt_r02_szklarnia_pomidory.jpg",
    "explanation": "Dodatkowy dwutlenek węgla pomaga tylko wtedy, gdy roślina ma też odpowiednią ilość światła, wody, soli mineralnych i właściwą temperaturę."
  },
  {
    "id": "R02_SUPER_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Co najlepiej odróżnia prostą kolonię organizmów jednokomórkowych od organizmu wielokomórkowego?",
    "options": [
      "W kolonii komórki nie zaczęły się specjalizować, a w organizmie wielokomórkowym są wyspecjalizowane",
      "W kolonii nie ma żadnych komórek",
      "Organizm wielokomórkowy ma zawsze tylko jedną tkankę",
      "Kolonia nie może żyć w wodzie"
    ],
    "answer": 0,
    "explanation": "W rozdziale wyjaśniono, że organizmy wielokomórkowe powstały, gdy komórki zaczęły się specjalizować w pełnieniu określonych funkcji."
  },
  {
    "id": "R02_SUPER_12",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Uzupełnij: Trzy pierwiastki z grupy CHONPS to __________, __________ i __________.",
    "options": null,
    "answer": [
      "węgiel",
      "wodór",
      "azot"
    ],
    "altAnswers": [
      [
        "węgiel",
        "wegiel"
      ],
      [
        "wodór",
        "wodor"
      ],
      [
        "azot"
      ]
    ],
    "explanation": "Do grupy najważniejszych pierwiastków budujących organizmy należą między innymi węgiel, wodór i azot. W tej grupie są też tlen, fosfor i siarka."
  },
  {
    "id": "R02_SUPER_13",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż poziomy organizacji od prostszych składników do całego organizmu.",
    "options": null,
    "items": [
      "tkanki",
      "organizm",
      "pierwiastki chemiczne",
      "komórki",
      "związki chemiczne"
    ],
    "answer": [
      "pierwiastki chemiczne",
      "związki chemiczne",
      "komórki",
      "tkanki",
      "organizm"
    ],
    "explanation": "Najprostsze są pierwiastki chemiczne, z nich powstają związki chemiczne, dalej komórki, tkanki i cały organizm."
  },
  {
    "id": "R02_SUPER_14",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe zdania o znaczeniu fotosyntezy.",
    "options": [
      "Podczas fotosyntezy do otoczenia uwalnia się tlen",
      "Rośliny wytwarzają tylko tyle tlenu, ile same zużywają",
      "Dzięki fotosyntezie na Ziemi mogły rozwinąć się organizmy wykorzystujące tlen do oddychania",
      "Duże obszary leśne są ważne, bo produkują tlen",
      "Fotosynteza zachodzi tylko w szklarniach"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "Rośliny uwalniają do otoczenia tlen, a duże obszary leśne są bardzo ważne dla większości organizmów. Dzięki tlenowi wytwarzanemu przez pierwsze organizmy prowadzące fotosyntezę mogły rozwinąć się organizmy oddychające tlenem."
  },
  {
    "id": "R02_SUPER_15",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jestem zielonym barwnikiem w chloroplastach. Pochłaniam energię światła potrzebną do fotosyntezy. Kim jestem?",
    "options": null,
    "answer": "chlorofil",
    "altAnswers": [
      "chlorofil",
      "chlorofilu",
      "chlorofilem"
    ],
    "explanation": "Chlorofil to zielony barwnik obecny w chloroplastach. Dzięki niemu roślina może wykorzystywać energię światła."
  },
  {
    "id": "R02_SUPER_16",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Na ilustracji widzisz komórkę z grubą ścianą zewnętrzną, chloroplastami i dużą wakuolą. Jaki to typ komórki?",
    "options": [
      "bakteryjna",
      "zwierzęca",
      "roślinna",
      "mięśniowa"
    ],
    "answer": 2,
    "explanation": "Komórkę roślinną rozpoznajemy po ścianie komórkowej, chloroplastach i dużej wakuoli."
  },
  {
    "id": "R02_SUPER_17",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz symbol pierwiastka z jego nazwą.",
    "options": null,
    "left": [
      "H",
      "C",
      "O",
      "N"
    ],
    "right": [
      "węgiel",
      "wodór",
      "tlen",
      "azot"
    ],
    "answer": {
      "H": "wodór",
      "C": "węgiel",
      "O": "tlen",
      "N": "azot"
    },
    "image": "/img/bbt_r02_symbole_pierwiastkow.jpg",
    "explanation": "Międzynarodowe symbole tych pierwiastków to: H - wodór, C - węgiel, O - tlen, N - azot."
  },
  {
    "id": "R02_SUPER_18",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj sposoby wykorzystania cukrów do odpowiedniej kategorii.",
    "options": null,
    "items": [
      "oddychanie komórkowe",
      "budowa ciała rośliny",
      "magazynowanie na później"
    ],
    "categories": [
      "źródło energii",
      "materiał budulcowy",
      "materiał zapasowy"
    ],
    "answer": {
      "źródło energii": [
        "oddychanie komórkowe"
      ],
      "materiał budulcowy": [
        "budowa ciała rośliny"
      ],
      "materiał zapasowy": [
        "magazynowanie na później"
      ]
    },
    "image": "/img/bbt_r02_produkty_fotosyntezy_cukry.jpg",
    "explanation": "Cukry mogą być źródłem energii, materiałem budulcowym i materiałem zapasowym."
  },
  {
    "id": "R02_SUPER_19",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Co stanie się z fotosyntezą, gdy temperatura będzie zbyt niska?",
    "options": [
      "będzie szybsza niż zwykle",
      "nie będzie zachodzić",
      "zamieni się w rozmnażanie",
      "będzie zależała tylko od wody"
    ],
    "answer": 1,
    "explanation": "W rozdziale napisano, że w zbyt niskiej temperaturze fotosynteza nie zachodzi."
  },
  {
    "id": "R02_SUPER_20",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Uzupełnij na podstawie ilustracji: zielone komórki liścia zawierają __________, a w nich znajduje się zielony barwnik potrzebny do fotosyntezy.",
    "options": null,
    "answer": [
      "chloroplasty"
    ],
    "altAnswers": [
      [
        "chloroplasty",
        "chloroplast",
        "chloroplastach"
      ]
    ],
    "image": "/img/bbt_r02_lisc_chloroplasty.jpg",
    "explanation": "W zielonych komórkach liścia znajdują się chloroplasty. To w nich jest chlorofil potrzebny do fotosyntezy."
  }
];
const KID_PROMPTS = {
  "R02_CECHY_08": "Co pokazuje zmrużenie oczu na mocnym świetle?",
  "R02_ZWIAZKI_10": "Po co potrzebna jest zróżnicowana dieta?",
  "R02_KOMORKI_10": "Która komórka jest roślinna?",
  "R02_FOTO_07": "Po co w szklarni dodaje się więcej CO₂?",
  "R02_SUPER_10": "Czy samo CO₂ wystarczy, gdy brakuje światła?"
};
const chapter = {
  id: "r02",
  number: 2,
  title: "Organizacja i chemizm życia",
  icon: "🧫",
  sectionOrder: [
  "Jakie są cechy organizmów?",
  "Z czego są zbudowane organizmy?",
  "Jak są zbudowane komórki?",
  "Na czym polega fotosynteza?"
],
  sectionIcons: {
  "Jakie są cechy organizmów?": "🐌",
  "Z czego są zbudowane organizmy?": "⚛️",
  "Jak są zbudowane komórki?": "🔬",
  "Na czym polega fotosynteza?": "🌿"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS,
};

export default chapter;
