// Skróty sekcji (do identyfikatorów ćwiczeń):
//   BIO = Biologia i metody badawcze
//   MIK = Mikroskop i obserwacje
//   CHE = Pierwiastki i woda
//   ORG = Związki organiczne
//   ENE = Fotosynteza i oddychanie
//   KOM = Budowa i rodzaje komórek
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_BIO_01",
    "section": "Biologia i metody badawcze",
    "type": "single_choice",
    "prompt": "Czym zajmuje się biologia?",
    "explanation": "Biologia bada organizmy żywe, ich budowę, czynności życiowe oraz relacje między organizmami i środowiskiem.",
    "options": [
      "Badaniem organizmów żywych i ich relacji ze środowiskiem",
      "Badaniem wyłącznie skał i minerałów",
      "Badaniem jedynie gwiazd i planet",
      "Badaniem tylko pierwiastków chemicznych",
      "Badaniem wyłącznie zjawisk atmosferycznych",
      "Badaniem tylko dziejów Ziemi"
    ],
    "answer": 0,
    "image": "r01_organizmy_i_srodowisko.jpg"
  },
  {
    "id": "R01_BIO_02",
    "section": "Biologia i metody badawcze",
    "type": "multi_select",
    "prompt": "Wybierz czynności życiowe organizmów.",
    "explanation": "Do czynności życiowych należą m.in. oddychanie, odżywianie, rozmnażanie, wydalanie, ruch, wzrost i rozwój oraz odbieranie bodźców.",
    "options": [
      "Oddychanie",
      "Rozmnażanie",
      "Wydalanie",
      "Odbieranie bodźców",
      "Krystalizacja soli",
      "Topnienie lodu"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r01_organizmy_i_srodowisko.jpg"
  },
  {
    "id": "R01_BIO_03",
    "section": "Biologia i metody badawcze",
    "type": "true_false",
    "prompt": "Wirusy poza komórką żywiciela nie wykazują oznak życia.",
    "explanation": "Wirusy nie mają budowy komórkowej i poza komórką żywiciela nie przejawiają oznak życia.",
    "options": null,
    "answer": true,
    "image": "r01_organizmy_i_srodowisko.jpg"
  },
  {
    "id": "R01_BIO_04",
    "section": "Biologia i metody badawcze",
    "type": "fill_in",
    "prompt": "Podstawową jednostką życia i najmniejszą strukturą budującą organizm jest __________.",
    "explanation": "Komórka posiada cechy istoty żywej i może samodzielnie tworzyć organizm jednokomórkowy.",
    "options": null,
    "answer": [
      "komórka"
    ],
    "altAnswers": [
      [
        "komórka",
        "komorka"
      ]
    ]
  },
  {
    "id": "R01_BIO_05",
    "section": "Biologia i metody badawcze",
    "type": "riddle",
    "prompt": "Która dziedzina biologii bada dziedziczność i zmienność cech organizmów?",
    "explanation": "Genetyka zajmuje się badaniem dziedziczności i zmienności cech.",
    "options": null,
    "answer": "genetyka",
    "altAnswers": [
      "genetyka"
    ]
  },
  {
    "id": "R01_BIO_06",
    "section": "Biologia i metody badawcze",
    "type": "odd_one_out",
    "prompt": "Wskaż nazwę, która nie jest dziedziną biologii: botanika, zoologia, ekologia, glukoza.",
    "explanation": "Botanika, zoologia i ekologia to dziedziny biologii. Glukoza jest związkiem organicznym, a nie dziedziną nauki.",
    "options": null,
    "answer": "glukoza"
  },
  {
    "id": "R01_BIO_07",
    "section": "Biologia i metody badawcze",
    "type": "scenario",
    "prompt": "Uczeń liczy ptaki na drzewie i zapisuje wynik, nie zmieniając warunków w otoczeniu. Jaką metodę badawczą stosuje?",
    "explanation": "Obserwacja polega na śledzeniu i dokumentowaniu zjawisk bez ingerowania w ich przebieg.",
    "options": [
      "Obserwację",
      "Doświadczenie z próbą badawczą",
      "Zmianę badanego czynnika",
      "Pobieranie próby kontrolnej",
      "Weryfikację eksperymentalną przez zmianę warunków",
      "Przeprowadzenie fermentacji"
    ],
    "answer": 0,
    "image": "r01_badanie_biologiczne.jpg"
  },
  {
    "id": "R01_BIO_08",
    "section": "Biologia i metody badawcze",
    "type": "match",
    "prompt": "Połącz dziedzinę biologii z przedmiotem jej badań.",
    "explanation": "Botanika bada rośliny, cytologia komórki, histologia tkanki, a ekologia zależności między organizmami oraz środowiskiem.",
    "options": null,
    "left": [
      "Botanika",
      "Cytologia",
      "Histologia",
      "Ekologia"
    ],
    "right": [
      "Tkanki",
      "Rośliny",
      "Zależności organizmów ze środowiskiem",
      "Komórki"
    ],
    "answer": {
      "Botanika": "Rośliny",
      "Cytologia": "Komórki",
      "Histologia": "Tkanki",
      "Ekologia": "Zależności organizmów ze środowiskiem"
    }
  },
  {
    "id": "R01_BIO_09",
    "section": "Biologia i metody badawcze",
    "type": "sort",
    "prompt": "Przyporządkuj pojęcia do czynności życiowych albo poziomów organizacji życia.",
    "explanation": "Oddychanie, wydalanie i rozmnażanie są procesami życiowymi, a komórka, tkanka i narząd to poziomy organizacji organizmu.",
    "options": null,
    "items": [
      "Tkanka",
      "Rozmnażanie",
      "Oddychanie",
      "Narząd",
      "Wydalanie",
      "Komórka"
    ],
    "categories": [
      "Czynności życiowe",
      "Poziomy organizacji"
    ],
    "answer": {
      "Czynności życiowe": [
        "Rozmnażanie",
        "Oddychanie",
        "Wydalanie"
      ],
      "Poziomy organizacji": [
        "Tkanka",
        "Narząd",
        "Komórka"
      ]
    }
  },
  {
    "id": "R01_BIO_10",
    "section": "Biologia i metody badawcze",
    "type": "sequence",
    "prompt": "Ułóż poziomy organizacji życia od najprostszej z podanych struktur do całego organizmu.",
    "explanation": "Organella budują komórki, komórki tkanki, tkanki narządy, narządy układy, a układy współtworzą organizm.",
    "options": null,
    "items": [
      "Narząd",
      "Organizm",
      "Organella komórkowe",
      "Układ narządów",
      "Tkanka",
      "Komórka"
    ],
    "answer": [
      "Organella komórkowe",
      "Komórka",
      "Tkanka",
      "Narząd",
      "Układ narządów",
      "Organizm"
    ]
  },
  {
    "id": "R01_MIK_01",
    "section": "Mikroskop i obserwacje",
    "type": "single_choice",
    "prompt": "Która część mikroskopu umożliwia zmianę obiektywu?",
    "explanation": "Rewolwer jest częścią mechaniczną umożliwiającą wybór obiektywu.",
    "options": [
      "Rewolwer",
      "Stolik",
      "Statyw",
      "Tubus",
      "Kondensor",
      "Śruba mikrometryczna"
    ],
    "answer": 0,
    "image": "r01_mikroskop_swietlny.jpg"
  },
  {
    "id": "R01_MIK_02",
    "section": "Mikroskop i obserwacje",
    "type": "multi_select",
    "prompt": "Zaznacz części optyczne mikroskopu świetlnego.",
    "explanation": "Do części optycznych mikroskopu należą okular, obiektyw, kondensor i źródło światła. Statyw i stolik to części mechaniczne.",
    "options": [
      "Okular",
      "Obiektyw",
      "Kondensor",
      "Źródło światła",
      "Statyw",
      "Stolik"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r01_mikroskop_swietlny.jpg"
  },
  {
    "id": "R01_MIK_03",
    "section": "Mikroskop i obserwacje",
    "type": "true_false",
    "prompt": "Całkowite powiększenie mikroskopu uzyskuje się przez pomnożenie powiększenia okularu przez powiększenie obiektywu.",
    "explanation": "Powiększenie mikroskopu oblicza się, mnożąc powiększenie okularu przez powiększenie obiektywu.",
    "options": null,
    "answer": true
  },
  {
    "id": "R01_MIK_04",
    "section": "Mikroskop i obserwacje",
    "type": "fill_in",
    "prompt": "Całkowite powiększenie mikroskopu jest iloczynem powiększenia __________ i powiększenia __________.",
    "explanation": "Oba powiększenia należy przez siebie pomnożyć.",
    "options": null,
    "answer": [
      "okularu",
      "obiektywu"
    ],
    "altAnswers": [
      [
        "okularu",
        "okular"
      ],
      [
        "obiektywu",
        "obiektyw"
      ]
    ]
  },
  {
    "id": "R01_MIK_05",
    "section": "Mikroskop i obserwacje",
    "type": "riddle",
    "prompt": "Jak nazywa się śruba mikroskopu używana do dokładnej regulacji ostrości obrazu?",
    "explanation": "Śruba mikrometryczna służy do precyzyjnego ustawiania ostrości obrazu.",
    "options": null,
    "answer": "śruba mikrometryczna",
    "altAnswers": [
      "śruba mikrometryczna",
      "sruba mikrometryczna",
      "mikrometryczna"
    ]
  },
  {
    "id": "R01_MIK_06",
    "section": "Mikroskop i obserwacje",
    "type": "odd_one_out",
    "prompt": "Wskaż element niebędący częścią mechaniczną mikroskopu: stolik, statyw, rewolwer, kondensor.",
    "explanation": "Kondensor jest zaliczony do części optycznych mikroskopu. Pozostałe części są mechaniczne.",
    "options": null,
    "answer": "kondensor",
    "image": "r01_mikroskop_swietlny.jpg"
  },
  {
    "id": "R01_MIK_07",
    "section": "Mikroskop i obserwacje",
    "type": "scenario",
    "prompt": "W mikroskopie zamontowano okular o powiększeniu 10× oraz obiektyw o powiększeniu 40×. Jakie jest powiększenie całego mikroskopu?",
    "explanation": "10 × 40 = 400, zatem obserwowany obiekt jest powiększony 400 razy.",
    "options": [
      "400×",
      "50×",
      "40×",
      "10×",
      "4×",
      "100×"
    ],
    "answer": 0
  },
  {
    "id": "R01_MIK_08",
    "section": "Mikroskop i obserwacje",
    "type": "match",
    "prompt": "Połącz część mikroskopu z jej funkcją.",
    "explanation": "Okular dodatkowo powiększa obraz, obiektyw powiększa preparat, źródło światła go podświetla, a rewolwer umożliwia zmianę obiektywu.",
    "options": null,
    "left": [
      "Okular",
      "Obiektyw",
      "Źródło światła",
      "Rewolwer"
    ],
    "right": [
      "Pozwala zmienić obiektyw",
      "Podświetla preparat",
      "Powiększa obraz wytworzony przez obiektyw",
      "Powiększa obserwowany preparat"
    ],
    "answer": {
      "Okular": "Powiększa obraz wytworzony przez obiektyw",
      "Obiektyw": "Powiększa obserwowany preparat",
      "Źródło światła": "Podświetla preparat",
      "Rewolwer": "Pozwala zmienić obiektyw"
    },
    "image": "r01_mikroskop_swietlny.jpg"
  },
  {
    "id": "R01_MIK_09",
    "section": "Mikroskop i obserwacje",
    "type": "sort",
    "prompt": "Podziel części mikroskopu na optyczne i mechaniczne.",
    "explanation": "Okular, obiektyw i kondensor należą do części optycznych, natomiast statyw, stolik i rewolwer — do mechanicznych.",
    "options": null,
    "items": [
      "Stolik",
      "Obiektyw",
      "Rewolwer",
      "Kondensor",
      "Statyw",
      "Okular"
    ],
    "categories": [
      "Części optyczne",
      "Części mechaniczne"
    ],
    "answer": {
      "Części optyczne": [
        "Obiektyw",
        "Kondensor",
        "Okular"
      ],
      "Części mechaniczne": [
        "Stolik",
        "Rewolwer",
        "Statyw"
      ]
    },
    "image": "r01_preparat_na_szkielku.jpg"
  },
  {
    "id": "R01_MIK_10",
    "section": "Mikroskop i obserwacje",
    "type": "sequence",
    "prompt": "Ułóż czynności przygotowania świeżego preparatu mikroskopowego we właściwej kolejności.",
    "explanation": "Najpierw nanosi się kroplę wody, potem przygotowuje i umieszcza obiekt, nakrywa go szkiełkiem i ustawia preparat na stoliku.",
    "options": null,
    "items": [
      "Nakryj obiekt szkiełkiem nakrywkowym",
      "Umieść obiekt w kropli wody",
      "Połóż preparat na stoliku mikroskopu",
      "Nanieś kroplę wody na szkiełko podstawowe",
      "Wypreparuj obserwowany obiekt"
    ],
    "answer": [
      "Nanieś kroplę wody na szkiełko podstawowe",
      "Wypreparuj obserwowany obiekt",
      "Umieść obiekt w kropli wody",
      "Nakryj obiekt szkiełkiem nakrywkowym",
      "Połóż preparat na stoliku mikroskopu"
    ],
    "image": "r01_preparat_na_szkielku.jpg"
  },
  {
    "id": "R01_CHE_01",
    "section": "Pierwiastki i woda",
    "type": "single_choice",
    "prompt": "Który pierwiastek należy do mikroelementów?",
    "explanation": "Jod występuje w organizmie w bardzo małych ilościach, więc jest mikroelementem.",
    "options": [
      "Jod",
      "Wapń",
      "Potas",
      "Magnez",
      "Sód",
      "Fosfor"
    ],
    "answer": 0,
    "image": "r01_pierwiastki_w_przyrodzie.jpg"
  },
  {
    "id": "R01_CHE_02",
    "section": "Pierwiastki i woda",
    "type": "multi_select",
    "prompt": "Wybierz pierwiastki biogenne.",
    "explanation": "Węgiel, wodór, tlen, azot, fosfor i siarka budują związki organiczne organizmów.",
    "options": [
      "Węgiel",
      "Wodór",
      "Azot",
      "Fosfor",
      "Wapń",
      "Miedź"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r01_pierwiastki_w_przyrodzie.jpg"
  },
  {
    "id": "R01_CHE_03",
    "section": "Pierwiastki i woda",
    "type": "true_false",
    "prompt": "Woda ma największą gęstość w temperaturze około 4°C, dlatego głębsze warstwy zbiornika mogą pozostać płynne zimą.",
    "explanation": "Woda o temperaturze 4°C ma największą gęstość i zbiera się przy dnie, co ułatwia organizmom przetrwanie zimy.",
    "options": null,
    "answer": true
  },
  {
    "id": "R01_CHE_04",
    "section": "Pierwiastki i woda",
    "type": "fill_in",
    "prompt": "Pierwiastkiem będącym głównym składnikiem związków organicznych jest __________.",
    "explanation": "Głównym składnikiem związków organicznych jest węgiel.",
    "options": null,
    "answer": [
      "węgiel"
    ],
    "altAnswers": [
      [
        "węgiel",
        "wegiel"
      ]
    ]
  },
  {
    "id": "R01_CHE_05",
    "section": "Pierwiastki i woda",
    "type": "riddle",
    "prompt": "Który mikroelement bierze udział w tworzeniu hormonów związanych z pracą tarczycy?",
    "explanation": "Niedobór jodu może prowadzić m.in. do zaburzeń pracy tarczycy.",
    "options": null,
    "answer": "jod",
    "altAnswers": [
      "jod"
    ]
  },
  {
    "id": "R01_CHE_06",
    "section": "Pierwiastki i woda",
    "type": "odd_one_out",
    "prompt": "Wskaż pierwiastek, który nie jest makroelementem: wapń, magnez, potas, cynk.",
    "explanation": "Cynk jest mikroelementem. Wapń, magnez i potas zaliczono do makroelementów.",
    "options": null,
    "answer": "cynk"
  },
  {
    "id": "R01_CHE_07",
    "section": "Pierwiastki i woda",
    "type": "scenario",
    "prompt": "Podczas upału ciało człowieka chłodzi się dzięki poceniu. Która właściwość wody tłumaczy ten efekt?",
    "explanation": "Odparowanie wody wymaga pobrania dużej ilości energii z otoczenia, dzięki czemu powierzchnia ciała się ochładza.",
    "options": [
      "Wysokie ciepło parowania",
      "Zdolność do krystalizacji soli",
      "Brak zdolności rozpuszczania",
      "Stała gęstość w każdej temperaturze",
      "Natychmiastowe nagrzewanie się",
      "Brak wymiany ciepła z otoczeniem"
    ],
    "answer": 0,
    "image": "r01_jezioro_zima.jpg"
  },
  {
    "id": "R01_CHE_08",
    "section": "Pierwiastki i woda",
    "type": "match",
    "prompt": "Połącz pierwiastek z jego funkcją w organizmie.",
    "explanation": "Wapń uczestniczy w skurczach mięśni, fosfor buduje kości i zęby, magnez wspiera układ nerwowy i serce, a siarka wchodzi w skład białek.",
    "options": null,
    "left": [
      "Wapń",
      "Fosfor",
      "Magnez",
      "Siarka"
    ],
    "right": [
      "Składnik białek i budulec włosów",
      "Składnik kości i zębów",
      "Praca układu nerwowego i serca",
      "Skurcze mięśni i prawidłowa praca serca"
    ],
    "answer": {
      "Wapń": "Skurcze mięśni i prawidłowa praca serca",
      "Fosfor": "Składnik kości i zębów",
      "Magnez": "Praca układu nerwowego i serca",
      "Siarka": "Składnik białek i budulec włosów"
    },
    "image": "r01_pierwiastki_w_przyrodzie.jpg"
  },
  {
    "id": "R01_CHE_09",
    "section": "Pierwiastki i woda",
    "type": "sort",
    "prompt": "Rozdziel pierwiastki na makroelementy i mikroelementy.",
    "explanation": "Wapń, potas i magnez to makroelementy. Jod, cynk i miedź to mikroelementy.",
    "options": null,
    "items": [
      "Jod",
      "Magnez",
      "Cynk",
      "Wapń",
      "Miedź",
      "Potas"
    ],
    "categories": [
      "Makroelementy",
      "Mikroelementy"
    ],
    "answer": {
      "Makroelementy": [
        "Magnez",
        "Wapń",
        "Potas"
      ],
      "Mikroelementy": [
        "Jod",
        "Cynk",
        "Miedź"
      ]
    }
  },
  {
    "id": "R01_CHE_10",
    "section": "Pierwiastki i woda",
    "type": "match",
    "prompt": "Połącz właściwości wody z ich znaczeniem biologicznym.",
    "explanation": "Rozpuszczalność umożliwia transport, duża pojemność cieplna łagodzi klimat, parowanie chłodzi ciało, a największa gęstość w 4°C sprzyja przetrwaniu organizmów zimą.",
    "options": null,
    "left": [
      "Dobry rozpuszczalnik",
      "Powolne nagrzewanie i stygnięcie",
      "Wysokie ciepło parowania",
      "Największa gęstość w 4°C"
    ],
    "right": [
      "Cieplejsze zimy nad morzem",
      "Transport substancji w roztworach",
      "Płynna woda przy dnie zimą",
      "Chłodzenie ciała przez pocenie"
    ],
    "answer": {
      "Dobry rozpuszczalnik": "Transport substancji w roztworach",
      "Powolne nagrzewanie i stygnięcie": "Cieplejsze zimy nad morzem",
      "Wysokie ciepło parowania": "Chłodzenie ciała przez pocenie",
      "Największa gęstość w 4°C": "Płynna woda przy dnie zimą"
    },
    "image": "r01_jezioro_zima.jpg"
  },
  {
    "id": "R01_ORG_01",
    "section": "Związki organiczne",
    "type": "single_choice",
    "prompt": "Który związek pełni funkcję materiału zapasowego u zwierząt i grzybów?",
    "explanation": "U zwierząt i grzybów węglowodanem zapasowym jest glikogen, a u roślin — skrobia.",
    "options": [
      "Glikogen",
      "Celuloza",
      "Chityna",
      "Mureina",
      "Sacharoza",
      "RNA"
    ],
    "answer": 0,
    "image": "r01_zwiazki_w_pokarmie.jpg"
  },
  {
    "id": "R01_ORG_02",
    "section": "Związki organiczne",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje tłuszczów.",
    "explanation": "Tłuszcze pełnią m.in. funkcje energetyczną, zapasową, izolacyjną, ochronną i budulcową.",
    "options": [
      "Gromadzenie zapasów energii",
      "Izolacja termiczna",
      "Ochrona narządów",
      "Budowa błon biologicznych",
      "Przechowywanie informacji genetycznej",
      "Wytwarzanie glukozy w fotosyntezie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r01_zwiazki_w_pokarmie.jpg"
  },
  {
    "id": "R01_ORG_03",
    "section": "Związki organiczne",
    "type": "true_false",
    "prompt": "DNA ma postać dwuniciową, a RNA jednoniciową.",
    "explanation": "DNA jest cząsteczką dwuniciową, natomiast RNA jest zwykle jednoniciowy.",
    "options": null,
    "answer": true
  },
  {
    "id": "R01_ORG_04",
    "section": "Związki organiczne",
    "type": "fill_in",
    "prompt": "Cukrem złożonym, który buduje ścianę komórkową roślin, jest __________.",
    "explanation": "Celuloza jest polisacharydem budującym ściany komórek roślinnych.",
    "options": null,
    "answer": [
      "celuloza"
    ],
    "altAnswers": [
      [
        "celuloza"
      ]
    ]
  },
  {
    "id": "R01_ORG_05",
    "section": "Związki organiczne",
    "type": "riddle",
    "prompt": "Jak nazywa się nieodwracalna zmiana struktury i funkcji białka wywołana np. wysoką temperaturą?",
    "explanation": "Denaturacja zmienia strukturę i funkcje białek; powodują ją m.in. wysoka temperatura, stężone kwasy i alkohole.",
    "options": null,
    "answer": "denaturacja",
    "altAnswers": [
      "denaturacja",
      "denaturacja białek",
      "denaturacja bialek"
    ]
  },
  {
    "id": "R01_ORG_06",
    "section": "Związki organiczne",
    "type": "odd_one_out",
    "prompt": "Wskaż związek, który nie należy do cukrów: celuloza, skrobia, glikogen, RNA.",
    "explanation": "RNA to kwas nukleinowy. Celuloza, skrobia i glikogen są węglowodanami.",
    "options": null,
    "answer": "RNA"
  },
  {
    "id": "R01_ORG_07",
    "section": "Związki organiczne",
    "type": "scenario",
    "prompt": "Badacz analizuje substancję budującą pancerzyk bezkręgowca. Który cukier złożony pełni taką funkcję?",
    "explanation": "Chityna jest cukrem złożonym, który buduje m.in. pancerzyki bezkręgowców oraz ściany komórkowe grzybów.",
    "options": [
      "Chityna",
      "Glikogen",
      "Skrobia",
      "Sacharoza",
      "Glukoza",
      "Celuloza"
    ],
    "answer": 0
  },
  {
    "id": "R01_ORG_08",
    "section": "Związki organiczne",
    "type": "match",
    "prompt": "Połącz związek z jego funkcją lub występowaniem.",
    "explanation": "Skrobia jest materiałem zapasowym roślin, glikogen zwierząt i grzybów, chityna buduje ściany grzybów, a mureina ściany bakterii.",
    "options": null,
    "left": [
      "Skrobia",
      "Glikogen",
      "Chityna",
      "Mureina"
    ],
    "right": [
      "Ściana komórkowa bakterii",
      "Materiał zapasowy roślin",
      "Ściana komórkowa grzybów",
      "Materiał zapasowy zwierząt i grzybów"
    ],
    "answer": {
      "Skrobia": "Materiał zapasowy roślin",
      "Glikogen": "Materiał zapasowy zwierząt i grzybów",
      "Chityna": "Ściana komórkowa grzybów",
      "Mureina": "Ściana komórkowa bakterii"
    }
  },
  {
    "id": "R01_ORG_09",
    "section": "Związki organiczne",
    "type": "sort",
    "prompt": "Przyporządkuj związki i przykłady do czterech grup substancji organicznych.",
    "explanation": "Glukoza i celuloza to cukry, olej i wosk to tłuszcze, enzym i przeciwciało są białkami, a DNA i RNA kwasami nukleinowymi.",
    "options": null,
    "items": [
      "RNA",
      "Wosk",
      "Glukoza",
      "Enzym",
      "DNA",
      "Olej",
      "Przeciwciało",
      "Celuloza"
    ],
    "categories": [
      "Cukry",
      "Tłuszcze",
      "Białka",
      "Kwasy nukleinowe"
    ],
    "answer": {
      "Cukry": [
        "Glukoza",
        "Celuloza"
      ],
      "Tłuszcze": [
        "Wosk",
        "Olej"
      ],
      "Białka": [
        "Enzym",
        "Przeciwciało"
      ],
      "Kwasy nukleinowe": [
        "RNA",
        "DNA"
      ]
    },
    "image": "r01_zwiazki_w_pokarmie.jpg"
  },
  {
    "id": "R01_ORG_10",
    "section": "Związki organiczne",
    "type": "single_choice",
    "prompt": "Który kwas nukleinowy uczestniczy w procesie wytwarzania białek?",
    "explanation": "RNA uczestniczy w biosyntezie białek, a DNA przechowuje informację genetyczną.",
    "options": [
      "RNA",
      "DNA",
      "Skrobia",
      "Glikogen",
      "Celuloza",
      "Chityna"
    ],
    "answer": 0
  },
  {
    "id": "R01_ENE_01",
    "section": "Fotosynteza i oddychanie",
    "type": "single_choice",
    "prompt": "Jakie substancje są substratami fotosyntezy?",
    "explanation": "W obecności światła z wody i dwutlenku węgla powstają glukoza i tlen.",
    "options": [
      "Woda i dwutlenek węgla",
      "Tlen i glukoza",
      "Woda i tlen",
      "Glukoza i dwutlenek węgla",
      "Skrobia i tlen",
      "Alkohol etylowy i tlen"
    ],
    "answer": 0,
    "image": "r01_lisc_w_sloncu.jpg"
  },
  {
    "id": "R01_ENE_02",
    "section": "Fotosynteza i oddychanie",
    "type": "multi_select",
    "prompt": "Wybierz czynniki wpływające na intensywność fotosyntezy.",
    "explanation": "Główne czynniki to nasłonecznienie, ilość wody, temperatura i stężenie dwutlenku węgla.",
    "options": [
      "Nasłonecznienie",
      "Ilość wody",
      "Temperatura",
      "Stężenie dwutlenku węgla",
      "Masa ciała zwierzęcia",
      "Liczba obiektywów mikroskopu"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r01_lisc_w_sloncu.jpg"
  },
  {
    "id": "R01_ENE_03",
    "section": "Fotosynteza i oddychanie",
    "type": "true_false",
    "prompt": "W procesie fotosyntezy energia światła zostaje zmagazynowana w związkach organicznych.",
    "explanation": "W fotosyntezie energia świetlna zostaje przekształcona w energię wiązań związków chemicznych, m.in. glukozy.",
    "options": null,
    "answer": true,
    "image": "r01_lisc_w_sloncu.jpg"
  },
  {
    "id": "R01_ENE_04",
    "section": "Fotosynteza i oddychanie",
    "type": "fill_in",
    "prompt": "Podczas oddychania tlenowego komórki rozkładają __________ przy udziale __________.",
    "explanation": "W oddychaniu tlenowym glukoza i tlen ulegają przemianie w dwutlenek węgla i wodę, a energia zostaje uwolniona.",
    "options": null,
    "answer": [
      "glukozę",
      "tlenu"
    ],
    "altAnswers": [
      [
        "glukozę",
        "glukoze",
        "glukoza"
      ],
      [
        "tlenu",
        "tlen"
      ]
    ]
  },
  {
    "id": "R01_ENE_05",
    "section": "Fotosynteza i oddychanie",
    "type": "riddle",
    "prompt": "Jak nazywa się proces uzyskiwania energii z pokarmu bez udziału tlenu, opisany na przykładzie drożdży?",
    "explanation": "Fermentacja zachodzi bez udziału tlenu i dostarcza mniej energii niż oddychanie tlenowe.",
    "options": null,
    "answer": "fermentacja",
    "altAnswers": [
      "fermentacja",
      "oddychanie beztlenowe"
    ],
    "image": "r01_drozdze_i_ciasto.jpg"
  },
  {
    "id": "R01_ENE_06",
    "section": "Fotosynteza i oddychanie",
    "type": "odd_one_out",
    "prompt": "Wskaż substancję, która nie jest produktem oddychania tlenowego: dwutlenek węgla, woda, energia, glukoza.",
    "explanation": "Glukoza jest substratem oddychania tlenowego. Woda, dwutlenek węgla i energia są jego produktami.",
    "options": null,
    "answer": "glukoza"
  },
  {
    "id": "R01_ENE_07",
    "section": "Fotosynteza i oddychanie",
    "type": "scenario",
    "prompt": "Piekarz wykorzystuje drożdże podczas przygotowywania ciasta. Jaki rodzaj fermentacji zachodzi dzięki drożdżom?",
    "explanation": "Drożdże przeprowadzają fermentację alkoholową, w której z glukozy powstają alkohol etylowy, dwutlenek węgla i energia.",
    "options": [
      "Fermentacja alkoholowa",
      "Fermentacja mlekowa",
      "Fotosynteza",
      "Oddychanie tlenowe",
      "Transpiracja",
      "Denaturacja"
    ],
    "answer": 0,
    "image": "r01_drozdze_i_ciasto.jpg"
  },
  {
    "id": "R01_ENE_08",
    "section": "Fotosynteza i oddychanie",
    "type": "match",
    "prompt": "Połącz proces z jego opisem.",
    "explanation": "Fotosynteza produkuje związki organiczne z nieorganicznych, oddychanie tlenowe zużywa tlen, a fermentacje przebiegają bez tlenu i mogą prowadzić do powstania alkoholu lub kwasu mlekowego.",
    "options": null,
    "left": [
      "Fotosynteza",
      "Oddychanie tlenowe",
      "Fermentacja alkoholowa",
      "Fermentacja mlekowa"
    ],
    "right": [
      "Rozkład glukozy z udziałem tlenu",
      "Powstawanie cukrów z wody i dwutlenku węgla przy świetle",
      "Powstawanie kwasu mlekowego w procesie beztlenowym",
      "Powstawanie alkoholu etylowego i dwutlenku węgla"
    ],
    "answer": {
      "Fotosynteza": "Powstawanie cukrów z wody i dwutlenku węgla przy świetle",
      "Oddychanie tlenowe": "Rozkład glukozy z udziałem tlenu",
      "Fermentacja alkoholowa": "Powstawanie alkoholu etylowego i dwutlenku węgla",
      "Fermentacja mlekowa": "Powstawanie kwasu mlekowego w procesie beztlenowym"
    },
    "image": "r01_drozdze_i_ciasto.jpg"
  },
  {
    "id": "R01_ENE_09",
    "section": "Fotosynteza i oddychanie",
    "type": "sort",
    "prompt": "Przyporządkuj organizmy do odpowiedniego sposobu odżywiania.",
    "explanation": "Skrzyp i zielone rośliny wytwarzają własne związki organiczne, natomiast kojot, zwierzęta i grzyby pobierają pokarm z otoczenia.",
    "options": null,
    "items": [
      "Kojot",
      "Skrzyp",
      "Grzyb",
      "Zielona roślina"
    ],
    "categories": [
      "Samożywne",
      "Cudzożywne"
    ],
    "answer": {
      "Samożywne": [
        "Skrzyp",
        "Zielona roślina"
      ],
      "Cudzożywne": [
        "Kojot",
        "Grzyb"
      ]
    }
  },
  {
    "id": "R01_ENE_10",
    "section": "Fotosynteza i oddychanie",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia: od wykorzystania światła przez roślinę do uwolnienia energii z wytworzonego pokarmu.",
    "explanation": "Podczas fotosyntezy energia światła zostaje związana w glukozie; glukoza może zostać zmagazynowana w skrobi i wykorzystana w oddychaniu.",
    "options": null,
    "items": [
      "Uwolnienie energii z glukozy podczas oddychania",
      "Zgromadzenie części glukozy w postaci skrobi",
      "Przekształcenie energii światła w energię chemiczną",
      "Wytworzenie glukozy w procesie fotosyntezy"
    ],
    "answer": [
      "Przekształcenie energii światła w energię chemiczną",
      "Wytworzenie glukozy w procesie fotosyntezy",
      "Zgromadzenie części glukozy w postaci skrobi",
      "Uwolnienie energii z glukozy podczas oddychania"
    ]
  },
  {
    "id": "R01_KOM_01",
    "section": "Budowa i rodzaje komórek",
    "type": "single_choice",
    "prompt": "Co odróżnia komórkę prokariotyczną od eukariotycznej?",
    "explanation": "Komórka prokariotyczna nie ma jądra komórkowego; komórka eukariotyczna je posiada.",
    "options": [
      "Brak jądra komórkowego",
      "Brak błony komórkowej",
      "Brak rybosomów",
      "Obecność chloroplastów",
      "Obecność mitochondriów",
      "Brak materiału genetycznego"
    ],
    "answer": 0,
    "image": "r01_komorki_trzy_typy.jpg"
  },
  {
    "id": "R01_KOM_02",
    "section": "Budowa i rodzaje komórek",
    "type": "multi_select",
    "prompt": "Które struktury występują we wszystkich trzech komórkach: roślinnej, zwierzęcej i bakteryjnej?",
    "explanation": "Wszystkie trzy typy komórek mają błonę komórkową i rybosomy. Pozostałe wymienione struktury nie występują we wszystkich trzech.",
    "options": [
      "Błona komórkowa",
      "Rybosomy",
      "Jądro komórkowe",
      "Chloroplasty",
      "Mitochondrium",
      "Ściana komórkowa"
    ],
    "answer": [
      0,
      1
    ],
    "image": "r01_komorki_trzy_typy.jpg"
  },
  {
    "id": "R01_KOM_03",
    "section": "Budowa i rodzaje komórek",
    "type": "true_false",
    "prompt": "Komórka zwierzęca ma ścianę komórkową.",
    "explanation": "Komórka zwierzęca nie ma ściany komórkowej; ściana występuje w komórkach roślinnych i bakteryjnych.",
    "options": null,
    "answer": false,
    "image": "r01_komorki_trzy_typy.jpg"
  },
  {
    "id": "R01_KOM_04",
    "section": "Budowa i rodzaje komórek",
    "type": "fill_in",
    "prompt": "Fotosynteza zachodzi w komórkach roślinnych w __________.",
    "explanation": "Chloroplasty są miejscem fotosyntezy w komórkach roślinnych.",
    "options": null,
    "answer": [
      "chloroplastach"
    ],
    "altAnswers": [
      [
        "chloroplastach",
        "chloroplasty"
      ]
    ],
    "image": "r01_struktury_komorki.jpg"
  },
  {
    "id": "R01_KOM_05",
    "section": "Budowa i rodzaje komórek",
    "type": "riddle",
    "prompt": "Jaka struktura zawiera i chroni materiał genetyczny oraz kieruje procesami komórkowymi u eukariontów?",
    "explanation": "Jądro komórkowe jest charakterystyczne dla komórek eukariotycznych i zawiera materiał genetyczny.",
    "options": null,
    "answer": "jądro komórkowe",
    "altAnswers": [
      "jądro komórkowe",
      "jadro komorkowe",
      "jądro",
      "jadro"
    ],
    "image": "r01_struktury_komorki.jpg"
  },
  {
    "id": "R01_KOM_06",
    "section": "Budowa i rodzaje komórek",
    "type": "odd_one_out",
    "prompt": "Wskaż strukturę niewystępującą w komórce bakterii: ściana komórkowa, błona komórkowa, rybosomy, jądro komórkowe.",
    "explanation": "Bakterie nie mają wyodrębnionego jądra komórkowego, ale mają ścianę, błonę i rybosomy.",
    "options": null,
    "answer": "jądro komórkowe"
  },
  {
    "id": "R01_KOM_07",
    "section": "Budowa i rodzaje komórek",
    "type": "scenario",
    "prompt": "W mikroskopie widać komórkę ze ścianą komórkową i rybosomami, ale bez jądra komórkowego. Jaki rodzaj komórki najbardziej pasuje do opisu?",
    "explanation": "Komórka bakteryjna ma ścianę, błonę i rybosomy, a jej materiał genetyczny nie jest otoczony jądrem komórkowym.",
    "options": [
      "Bakteryjna",
      "Roślinna",
      "Zwierzęca",
      "Eukariotyczna roślinna",
      "Eukariotyczna zwierzęca",
      "Z jądrem i chloroplastami"
    ],
    "answer": 0,
    "image": "r01_komorki_trzy_typy.jpg"
  },
  {
    "id": "R01_KOM_08",
    "section": "Budowa i rodzaje komórek",
    "type": "match",
    "prompt": "Połącz organellum lub strukturę komórki z jej funkcją.",
    "explanation": "Jądro przechowuje materiał genetyczny, mitochondrium uczestniczy w przemianach energii, ściana chroni komórkę, a błona reguluje wymianę substancji.",
    "options": null,
    "left": [
      "Jądro komórkowe",
      "Mitochondrium",
      "Ściana komórkowa",
      "Błona komórkowa"
    ],
    "right": [
      "Regulowanie kontaktu komórki z otoczeniem",
      "Zawieranie i ochrona materiału genetycznego",
      "Ochrona przed uszkodzeniami i nadawanie kształtu",
      "Przekształcanie energii w oddychaniu tlenowym"
    ],
    "answer": {
      "Jądro komórkowe": "Zawieranie i ochrona materiału genetycznego",
      "Mitochondrium": "Przekształcanie energii w oddychaniu tlenowym",
      "Ściana komórkowa": "Ochrona przed uszkodzeniami i nadawanie kształtu",
      "Błona komórkowa": "Regulowanie kontaktu komórki z otoczeniem"
    },
    "image": "r01_struktury_komorki.jpg"
  },
  {
    "id": "R01_KOM_09",
    "section": "Budowa i rodzaje komórek",
    "type": "sort",
    "prompt": "Przyporządkuj struktury do typów komórek, w których występują.",
    "explanation": "Błona i rybosomy występują we wszystkich trzech typach; jądro, mitochondrium i wodniczka w roślinnych i zwierzęcych; chloroplasty tylko w roślinnych.",
    "options": null,
    "items": [
      "Chloroplasty",
      "Błona komórkowa",
      "Mitochondrium",
      "Rybosomy",
      "Jądro komórkowe",
      "Wodniczka"
    ],
    "categories": [
      "Wszystkie trzy typy",
      "Roślinna i zwierzęca",
      "Tylko roślinna"
    ],
    "answer": {
      "Wszystkie trzy typy": [
        "Błona komórkowa",
        "Rybosomy"
      ],
      "Roślinna i zwierzęca": [
        "Mitochondrium",
        "Jądro komórkowe",
        "Wodniczka"
      ],
      "Tylko roślinna": [
        "Chloroplasty"
      ]
    }
  },
  {
    "id": "R01_KOM_10",
    "section": "Budowa i rodzaje komórek",
    "type": "single_choice",
    "prompt": "W których typach komórek występują mitochondria?",
    "explanation": "Mitochondria zaznaczono w komórkach roślinnych i zwierzęcych; w komórkach bakteryjnych ich nie ma.",
    "options": [
      "W roślinnych i zwierzęcych",
      "Tylko w bakteryjnych",
      "Tylko w roślinnych",
      "Tylko w zwierzęcych",
      "We wszystkich trzech rodzajach",
      "W roślinnych i bakteryjnych"
    ],
    "answer": 0
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Badacz bada wpływ ilości wody na intensywność fotosyntezy. Przygotowuje dwie jednakowe rośliny, ale w pierwszej próbie podlewa je inaczej niż w drugiej. Co powinno pozostać takie samo w obu próbach?",
    "explanation": "Próba badawcza i kontrolna powinny różnić się tylko badanym czynnikiem, tu ilością wody. Inne warunki, np. nasłonecznienie i temperatura, powinny być porównywalne.",
    "options": [
      "Nasłonecznienie i temperatura",
      "Ilość podawanej wody",
      "Tylko liczba wniosków",
      "Wszystkie czynniki poza gatunkiem rośliny",
      "Sposób zapisu wyników zamiast warunków",
      "Wszystkie warunki łącznie z ilością wody"
    ],
    "answer": 0,
    "image": "r01_badanie_biologiczne.jpg"
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz poprawne zestawienia pierwiastków z ich funkcjami lub skutkami niedoboru.",
    "explanation": "Fosfor wchodzi w skład kości i zębów, jod jest związany z tarczycą, a magnez z pracą układu nerwowego i serca. Pozostałe zestawienia są nieprawidłowe.",
    "options": [
      "Fosfor — składnik kości i zębów",
      "Jod — prawidłowa praca tarczycy",
      "Magnez — praca układu nerwowego i serca",
      "Siarka — transport tlenu w krwi jako główna funkcja",
      "Potas — budowanie pancerzyków z chityny",
      "Wapń — magazynowanie informacji w DNA"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r01_pierwiastki_w_przyrodzie.jpg"
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "W temperaturze powyżej około 40°C fotosynteza ustaje wskutek uszkodzenia białek i enzymów.",
    "explanation": "Dla wielu roślin optimum fotosyntezy wynosi około 25°C, a przy temperaturach powyżej 40°C proces może zostać zahamowany wskutek uszkodzenia białek i enzymów.",
    "options": null,
    "answer": true,
    "image": "r01_lisc_w_sloncu.jpg"
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W komórkach roślinnych fotosynteza przebiega w __________, a oddychanie tlenowe w __________.",
    "explanation": "Chloroplasty odpowiadają za fotosyntezę, a mitochondria za oddychanie tlenowe i uwalnianie energii.",
    "options": null,
    "answer": [
      "chloroplastach",
      "mitochondriach"
    ],
    "altAnswers": [
      [
        "chloroplastach",
        "chloroplasty"
      ],
      [
        "mitochondriach",
        "mitochondria"
      ]
    ],
    "image": "r01_struktury_komorki.jpg"
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jaki dwucukier służy do transportu cukrów u roślin?",
    "explanation": "U roślin sacharoza służy do transportu cukrów, a u zwierząt i ludzi podstawowym cukrem transportowanym we krwi jest glukoza.",
    "options": null,
    "answer": "sacharoza",
    "altAnswers": [
      "sacharoza",
      "sacharozę",
      "sacharoze"
    ]
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż proces, który w odróżnieniu od pozostałych służy do wytwarzania pokarmu ze związków nieorganicznych: oddychanie tlenowe, fermentacja alkoholowa, fermentacja mlekowa, fotosynteza.",
    "explanation": "Fotosynteza wytwarza glukozę z wody i dwutlenku węgla. Oddychanie i fermentacje pozyskują energię z substancji pokarmowych.",
    "options": null,
    "answer": "fotosynteza"
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W doświadczeniu z roślinami badacz przygotował identyczne stanowiska, a jedyną różnicą była obecność światła. Która hipoteza najlepiej odpowiada tak zaplanowanemu badaniu?",
    "explanation": "Badany czynnik to oświetlenie, a wynik powinien dotyczyć przebiegu fotosyntezy. Hipotezę należy formułować jako odpowiedź na problem badawczy.",
    "options": [
      "Obecność światła wpływa na przebieg fotosyntezy",
      "Masa mikroskopu zależy od materiału statywu",
      "Rodzaj preparatu zmienia rozmiar okularu",
      "Cukry są zbudowane tylko z azotu",
      "Wszystkie komórki mają jądro",
      "Temperatura zawsze pozostaje jedynym czynnikiem fotosyntezy"
    ],
    "answer": 0,
    "image": "r01_badanie_biologiczne.jpg"
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz substancję z opisem jej funkcji lub występowania.",
    "explanation": "Celuloza buduje ścianę komórkową roślin, chityna ścianę grzybów, mureina ścianę bakterii, a glikogen jest substancją zapasową zwierząt i grzybów.",
    "options": null,
    "left": [
      "Celuloza",
      "Chityna",
      "Mureina",
      "Glikogen"
    ],
    "right": [
      "Materiał zapasowy zwierząt i grzybów",
      "Ściana bakterii",
      "Ściana roślin",
      "Ściana grzybów"
    ],
    "answer": {
      "Celuloza": "Ściana roślin",
      "Chityna": "Ściana grzybów",
      "Mureina": "Ściana bakterii",
      "Glikogen": "Materiał zapasowy zwierząt i grzybów"
    }
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Porównaj rozmieszczenie struktur w komórkach roślinnych, zwierzęcych i bakteryjnych.",
    "explanation": "Błona i rybosomy są obecne we wszystkich trzech, jądro i mitochondrium tylko w dwóch eukariotycznych, ściana w roślinnej i bakteryjnej, a chloroplast tylko w roślinnej.",
    "options": null,
    "items": [
      "Chloroplast",
      "Jądro komórkowe",
      "Ściana komórkowa",
      "Rybosomy",
      "Mitochondrium",
      "Błona komórkowa"
    ],
    "categories": [
      "Wszystkie trzy rodzaje",
      "Roślinna i zwierzęca",
      "Roślinna i bakteryjna",
      "Tylko roślinna"
    ],
    "answer": {
      "Wszystkie trzy rodzaje": [
        "Rybosomy",
        "Błona komórkowa"
      ],
      "Roślinna i zwierzęca": [
        "Jądro komórkowe",
        "Mitochondrium"
      ],
      "Roślinna i bakteryjna": [
        "Ściana komórkowa"
      ],
      "Tylko roślinna": [
        "Chloroplast"
      ]
    },
    "image": "r01_komorki_trzy_typy.jpg"
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy doświadczenia zgodnie z kolejnością postępowania naukowego.",
    "explanation": "W schemacie najpierw stawia się problem i hipotezę, potem planuje i wykonuje doświadczenie, a następnie opracowuje wyniki i weryfikuje hipotezę.",
    "options": null,
    "items": [
      "Opracowanie wyników",
      "Postawienie hipotezy",
      "Weryfikacja hipotezy",
      "Sformułowanie problemu badawczego",
      "Przeprowadzenie doświadczenia",
      "Zaplanowanie doświadczenia"
    ],
    "answer": [
      "Sformułowanie problemu badawczego",
      "Postawienie hipotezy",
      "Zaplanowanie doświadczenia",
      "Przeprowadzenie doświadczenia",
      "Opracowanie wyników",
      "Weryfikacja hipotezy"
    ]
  },
  {
    "id": "R01_HARD_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która para procesów zachodzi odpowiednio w chloroplaście i mitochondrium?",
    "explanation": "Fotosynteza zachodzi w chloroplastach, a oddychanie tlenowe w mitochondriach.",
    "options": [
      "Fotosynteza i oddychanie tlenowe",
      "Oddychanie tlenowe i fotosynteza",
      "Fermentacja mlekowa i fotosynteza",
      "Fermentacja alkoholowa i oddychanie tlenowe",
      "Denaturacja i fermentacja mlekowa",
      "Trawienie i fermentacja alkoholowa"
    ],
    "answer": 0,
    "image": "r01_struktury_komorki.jpg"
  },
  {
    "id": "R01_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz twierdzenia zgodne jednocześnie z opisami fotosyntezy i oddychania tlenowego.",
    "explanation": "Fotosynteza tworzy glukozę i tlen przy wykorzystaniu światła, a oddychanie tlenowe zużywa glukozę i tlen oraz uwalnia energię. Oba procesy występują u roślin.",
    "options": [
      "Glukoza może powstać w fotosyntezie i zostać zużyta podczas oddychania",
      "Tlen może być produktem fotosyntezy i substratem oddychania tlenowego",
      "Roślina może przeprowadzać fotosyntezę i oddychanie tlenowe",
      "Fotosynteza zachodzi wyłącznie w mitochondriach",
      "Fermentacja alkoholowa wymaga dopływu tlenu",
      "Oddychanie tlenowe nie uwalnia energii"
    ],
    "answer": [
      0,
      1,
      2
    ]
  },
  {
    "id": "R01_HARD_13",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz pierwiastek z jego funkcją lub objawem niedoboru.",
    "explanation": "Niedobór jodu wiąże się z zaburzeniami tarczycy, magnezu z zaburzeniami pracy serca, siarki z łamliwością włosów i paznokci, a fosforu z krzywicą i próchnicą.",
    "options": null,
    "left": [
      "Jod",
      "Magnez",
      "Siarka",
      "Fosfor"
    ],
    "right": [
      "Krzywica i próchnica",
      "Zaburzenia pracy tarczycy",
      "Łamliwość włosów i paznokci",
      "Zaburzenia pracy serca i migreny"
    ],
    "answer": {
      "Jod": "Zaburzenia pracy tarczycy",
      "Magnez": "Zaburzenia pracy serca i migreny",
      "Siarka": "Łamliwość włosów i paznokci",
      "Fosfor": "Krzywica i próchnica"
    }
  },
  {
    "id": "R01_HARD_14",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Na preparacie zauważono komórkę zawierającą jądro i mitochondria, ale pozbawioną ściany komórkowej i chloroplastów. Jaki to typ komórki?",
    "explanation": "Komórka zwierzęca ma jądro i mitochondria, natomiast nie ma ściany komórkowej ani chloroplastów.",
    "options": [
      "Komórka zwierzęca",
      "Komórka roślinna",
      "Komórka bakteryjna",
      "Komórka prokariotyczna ze ścianą",
      "Komórka bakteryjna z chloroplastem",
      "Komórka roślinna bez jądra"
    ],
    "answer": 0
  }
];

const KID_PROMPTS = {
  "R01_BIO_01": "Co bada biologia?",
  "R01_BIO_05": "Jaka nauka bada cechy przekazywane z rodziców na potomstwo?",
  "R01_BIO_07": "Uczeń liczy ptaki, niczego nie zmieniając. Jak nazywa się ta metoda?",
  "R01_MIK_01": "Co w mikroskopie służy do zmiany obiektywu?",
  "R01_MIK_07": "Okular powiększa 10 razy, a obiektyw 40 razy. Ile razy powiększa mikroskop?",
  "R01_CHE_07": "Dlaczego pot pomaga ochładzać ciało w upał?",
  "R01_ORG_01": "Jaki cukier zwierzęta i grzyby odkładają na zapas?",
  "R01_ORG_05": "Jak nazywa się zniszczenie struktury białka przez wysoką temperaturę?",
  "R01_ENE_01": "Czego roślina potrzebuje jako substratów do fotosyntezy?",
  "R01_ENE_05": "Jak nazywa się uwalnianie energii z pokarmu bez tlenu?",
  "R01_KOM_01": "Jakiej struktury nie ma prokariota, a ma komórka eukariotyczna?",
  "R01_KOM_05": "Co w komórce chroni materiał genetyczny i kieruje jej pracą?",
  "R01_HARD_05": "Jakiego dwucukru roślina używa do transportu cukrów?"
};

const chapter = {
  id: "r01",
  number: 1,
  title: "Biologia jako nauka, chemizm, komórki",
  icon: "🧬",
  sectionOrder: [
  "Biologia i metody badawcze",
  "Mikroskop i obserwacje",
  "Pierwiastki i woda",
  "Związki organiczne",
  "Fotosynteza i oddychanie",
  "Budowa i rodzaje komórek"
],
  sectionIcons: {
  "Biologia i metody badawcze": "🔬",
  "Mikroskop i obserwacje": "🔎",
  "Pierwiastki i woda": "💧",
  "Związki organiczne": "🧬",
  "Fotosynteza i oddychanie": "🌿",
  "Budowa i rodzaje komórek": "🦠"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
