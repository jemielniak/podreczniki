// Skróty sekcji:
//   CEZ = Cechy zwierząt
//   NAB = Tkanka nabłonkowa
//   LAC = Tkanka łączna
//   MIN = Tkanka mięśniowa i nerwowa
//   MIX = Powtórka mieszana
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_CEZ_01",
    "section": "Cechy zwierząt",
    "type": "single_choice",
    "prompt": "Która cecha pozwala zaliczyć organizm do królestwa zwierząt?",
    "options": [
      "Samodzielne wytwarzanie pokarmu",
      "Budowa wielokomórkowa z komórek zwierzęcych",
      "Obecność chloroplastów",
      "Budowa ze strzępek",
      "Jednokomórkowa budowa bakterii",
      "Wytwarzanie nasion"
    ],
    "answer": 1,
    "image": "/img/r01_krolestwa_organizmow.jpg",
    "explanation": "Zwierzęta są organizmami wielokomórkowymi, zbudowanymi z komórek zwierzęcych."
  },
  {
    "id": "R01_CEZ_02",
    "section": "Cechy zwierząt",
    "type": "true_false",
    "prompt": "Zwierzęta samodzielnie wytwarzają pokarm, podobnie jak rośliny.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz. Zwierzęta są cudzożywne, czyli korzystają z pokarmu pochodzącego z innych organizmów."
  },
  {
    "id": "R01_CEZ_03",
    "section": "Cechy zwierząt",
    "type": "multi_select",
    "prompt": "Zaznacz cechy zwierząt opisane w rozdziale.",
    "options": [
      "Budowa wielokomórkowa",
      "Obecność chloroplastów",
      "Cudzożywność",
      "Oddychanie tlenowe u większości zwierząt",
      "Ściana komórkowa z celulozy",
      "Zdolność do aktywnego poruszania się"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "image": "/img/r01_cechy_zwierzat.jpg",
    "explanation": "Do cech zwierząt należą m.in. wielokomórkowa budowa, cudzożywność, oddychanie tlenowe u większości zwierząt oraz zdolność do aktywnego poruszania się."
  },
  {
    "id": "R01_CEZ_04",
    "section": "Cechy zwierząt",
    "type": "fill_in",
    "prompt": "Ciało zwierząt jest zbudowane z wielu __________, a zwierzęta są organizmami __________.",
    "options": null,
    "answer": [
      "komórek",
      "cudzożywnymi"
    ],
    "altAnswers": [
      [
        "komórek",
        "komorek"
      ],
      [
        "cudzożywnymi",
        "cudzozywnymi",
        "cudzożywne",
        "cudzozywne"
      ]
    ],
    "explanation": "W rozdziale podkreślono, że zwierzęta mają budowę wielokomórkową i są cudzożywne."
  },
  {
    "id": "R01_CEZ_05",
    "section": "Cechy zwierząt",
    "type": "sort",
    "prompt": "Przyporządkuj grupy zwierząt do właściwej kategorii.",
    "options": null,
    "answer": {
      "bezkręgowce": [
        "płazińce",
        "nicienie",
        "stawonogi",
        "mięczaki"
      ],
      "kręgowce": [
        "ryby",
        "płazy",
        "ptaki",
        "ssaki"
      ]
    },
    "items": [
      "płazińce",
      "nicienie",
      "ryby",
      "płazy",
      "stawonogi",
      "ptaki",
      "mięczaki",
      "ssaki"
    ],
    "categories": [
      "bezkręgowce",
      "kręgowce"
    ],
    "image": "/img/r01_bezkregowce_i_kregowce.jpg",
    "explanation": "Bezkręgowce nie mają kręgosłupa, a kręgowce mają kręgosłup."
  },
  {
    "id": "R01_CEZ_06",
    "section": "Cechy zwierząt",
    "type": "match",
    "prompt": "Połącz zwierzę lub grupę zwierząt z częścią ciała służącą do przemieszczania się.",
    "options": null,
    "answer": {
      "pająki": "odnóża",
      "ślimaki": "noga",
      "ryby": "płetwy",
      "ssaki": "kończyny"
    },
    "left": [
      "pająki",
      "ślimaki",
      "ryby",
      "ssaki"
    ],
    "right": [
      "odnóża",
      "noga",
      "płetwy",
      "kończyny"
    ],
    "explanation": "Zwierzęta mogą poruszać się dzięki mięśniom i wyspecjalizowanym częściom ciała, takim jak odnóża, noga, płetwy lub kończyny."
  },
  {
    "id": "R01_CEZ_07",
    "section": "Cechy zwierząt",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: płazińce, nicienie, pierścienice, ssaki, mięczaki.",
    "options": null,
    "answer": "ssaki",
    "image": "/img/r01_bezkregowce_i_kregowce.jpg",
    "explanation": "Ssaki są kręgowcami, a pozostałe wymienione grupy należą do bezkręgowców."
  },
  {
    "id": "R01_CEZ_08",
    "section": "Cechy zwierząt",
    "type": "sequence",
    "prompt": "Ułóż poziomy budowy zwierzęcia od najprostszego do najbardziej złożonego.",
    "options": null,
    "answer": [
      "komórki",
      "tkanki",
      "narządy",
      "układy narządów",
      "organizm"
    ],
    "items": [
      "narządy",
      "komórki",
      "organizm",
      "układy narządów",
      "tkanki"
    ],
    "image": "/img/r01_hierarchia_budowy_zwierzat.jpg",
    "explanation": "Hierarchiczna budowa zwierząt prowadzi od komórek przez tkanki, narządy i układy narządów do organizmu."
  },
  {
    "id": "R01_CEZ_09",
    "section": "Cechy zwierząt",
    "type": "single_choice",
    "prompt": "Czego nie ma komórka zwierzęca?",
    "options": [
      "Jądra komórkowego",
      "Błony komórkowej",
      "Chloroplastów",
      "Cytoplazmy",
      "Komórkowego wnętrza",
      "Materiału komórkowego"
    ],
    "answer": 2,
    "image": "/img/r01_komorka_zwierzeca.jpg",
    "explanation": "Komórka zwierzęca nie ma chloroplastów; jest otoczona błoną komórkową i zawiera m.in. jądro komórkowe."
  },
  {
    "id": "R01_CEZ_10",
    "section": "Cechy zwierząt",
    "type": "scenario",
    "prompt": "Uczeń obserwuje zwierzę i stwierdza, że ma kręgosłup. Do której zwyczajowej grupy powinien je zaliczyć?",
    "options": [
      "do bezkręgowców",
      "do kręgowców",
      "do protistów",
      "do grzybów",
      "do płazińców",
      "do nicieni"
    ],
    "answer": 1,
    "image": "/img/r01_bezkregowce_i_kregowce.jpg",
    "explanation": "Zwierzęta mające kręgosłup to kręgowce."
  },
  {
    "id": "R01_CEZ_11",
    "section": "Cechy zwierząt",
    "type": "true_false",
    "prompt": "Zoologia to nauka badająca zwierzęta.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. W rozdziale zoologia jest zdefiniowana jako nauka badająca zwierzęta."
  },
  {
    "id": "R01_CEZ_12",
    "section": "Cechy zwierząt",
    "type": "riddle",
    "prompt": "Jak nazywa się zwyczajowo zwierzęta, które nie mają kręgosłupa?",
    "options": null,
    "answer": "bezkręgowce",
    "altAnswers": [
      "bezkręgowce",
      "bezkręgowce.",
      "bezkregowce",
      "zwierzęta bezkręgowe",
      "zwierzeta bezkregowe"
    ],
    "image": "/img/r01_bezkregowce_i_kregowce.jpg",
    "explanation": "Zwierzęta bez kręgosłupa to bezkręgowce."
  },
  {
    "id": "R01_NAB_01",
    "section": "Tkanka nabłonkowa",
    "type": "single_choice",
    "prompt": "Która cecha najlepiej opisuje budowę tkanki nabłonkowej?",
    "options": [
      "Dużo substancji międzykomórkowej",
      "Komórki ściśle do siebie przylegające",
      "Twarda substancja z solami mineralnymi",
      "Wrzecionowate komórki kurczące się",
      "Płynna substancja międzykomórkowa",
      "Długie aksony między komórkami"
    ],
    "answer": 1,
    "image": "/img/r01_nablonek_budowa.jpg",
    "explanation": "Tkanka nabłonkowa jest zbudowana z komórek ściśle do siebie przylegających, ułożonych w jedną lub wiele warstw."
  },
  {
    "id": "R01_NAB_02",
    "section": "Tkanka nabłonkowa",
    "type": "true_false",
    "prompt": "Komórki nabłonka są zawsze oddzielone dużą ilością substancji międzykomórkowej.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz. Duża ilość substancji międzykomórkowej jest typowa dla tkanek łącznych, a komórki nabłonka ściśle do siebie przylegają."
  },
  {
    "id": "R01_NAB_03",
    "section": "Tkanka nabłonkowa",
    "type": "match",
    "prompt": "Połącz rodzaj nabłonka z funkcją lub miejscem występowania.",
    "options": null,
    "answer": {
      "jednowarstwowy płaski": "wymiana gazowa w pęcherzykach płucnych",
      "jednowarstwowy sześcienny": "transport wody i soli mineralnych w kanalikach nerkowych",
      "migawkowy": "oczyszczanie dróg oddechowych",
      "zmysłowy": "odbiór bodźców zapachowych",
      "gruczołowy": "produkcja substancji, np. soku żołądkowego",
      "wielowarstwowy płaski": "ochrona powierzchni ciała"
    },
    "left": [
      "jednowarstwowy płaski",
      "jednowarstwowy sześcienny",
      "migawkowy",
      "zmysłowy",
      "gruczołowy",
      "wielowarstwowy płaski"
    ],
    "right": [
      "wymiana gazowa w pęcherzykach płucnych",
      "transport wody i soli mineralnych w kanalikach nerkowych",
      "oczyszczanie dróg oddechowych",
      "odbiór bodźców zapachowych",
      "produkcja substancji, np. soku żołądkowego",
      "ochrona powierzchni ciała"
    ],
    "image": "/img/r01_rodzaje_nablonkow.jpg",
    "explanation": "Różne nabłonki mają różne funkcje: wymianę gazową, transport substancji, oczyszczanie powietrza, odbiór zapachu, wydzielanie i ochronę."
  },
  {
    "id": "R01_NAB_04",
    "section": "Tkanka nabłonkowa",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje tkanki nabłonkowej wymienione w rozdziale.",
    "options": [
      "Tworzy pokrycie ciała zwierząt",
      "Buduje ściany niektórych narządów wewnętrznych",
      "Umożliwia wymianę gazową",
      "Magazynuje tłuszcz",
      "Pełni funkcje zmysłowe i gruczołowe",
      "Oczyszcza drogi oddechowe z zanieczyszczeń"
    ],
    "answer": [
      0,
      1,
      2,
      4,
      5
    ],
    "explanation": "Tkanka nabłonkowa tworzy pokrycie ciała, buduje ściany niektórych narządów, umożliwia wymianę gazową i transport substancji, pełni funkcje zmysłowe i gruczołowe oraz oczyszcza drogi oddechowe."
  },
  {
    "id": "R01_NAB_05",
    "section": "Tkanka nabłonkowa",
    "type": "fill_in",
    "prompt": "Nabłonek płaski w pęcherzykach płucnych umożliwia transport __________ do krwi oraz __________ w przeciwnym kierunku.",
    "options": null,
    "answer": [
      "tlenu",
      "dwutlenku węgla"
    ],
    "altAnswers": [
      [
        "tlenu"
      ],
      [
        "dwutlenku węgla",
        "dwutlenku wegla",
        "CO2"
      ]
    ],
    "image": "/img/r01_nablonek_plaski_pecherzyki.jpg",
    "explanation": "Wymiana gazowa polega tu na przechodzeniu tlenu do krwi i dwutlenku węgla w przeciwnym kierunku."
  },
  {
    "id": "R01_NAB_06",
    "section": "Tkanka nabłonkowa",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: rzęski, zakończenia nerwowe, gruczoły, osocze.",
    "options": null,
    "answer": "osocze",
    "explanation": "Osocze jest substancją międzykomórkową krwi, a pozostałe elementy mogą być związane z budową lub działaniem nabłonków opisanych w rozdziale."
  },
  {
    "id": "R01_NAB_07",
    "section": "Tkanka nabłonkowa",
    "type": "scenario",
    "prompt": "W powietrzu znajdują się drobne zanieczyszczenia. Który nabłonek pomaga je wychwycić, zanim trafią do płuc?",
    "options": [
      "nabłonek migawkowy",
      "nabłonek kostny",
      "nabłonek tłuszczowy",
      "nabłonek chrzęstny",
      "nabłonek krwi",
      "nabłonek mięśniowy"
    ],
    "answer": 0,
    "image": "/img/r01_nablonek_migawkowy_drogi_oddechowe.jpg",
    "explanation": "Nabłonek migawkowy ma rzęski, które wychwytują zanieczyszczenia i drobnoustroje w drogach oddechowych."
  },
  {
    "id": "R01_NAB_08",
    "section": "Tkanka nabłonkowa",
    "type": "true_false",
    "prompt": "Nabłonek wielowarstwowy płaski tworzy wierzchnią warstwę skóry.",
    "options": null,
    "answer": true,
    "image": "/img/r01_naskorek_wielowarstwowy.jpg",
    "explanation": "To prawda. Naskórek w skórze kręgowców jest zbudowany z nabłonka wielowarstwowego płaskiego."
  },
  {
    "id": "R01_NAB_09",
    "section": "Tkanka nabłonkowa",
    "type": "riddle",
    "prompt": "Jak nazywają się kuliste elementy płuc ssaków, w których nabłonek płaski umożliwia wymianę gazową?",
    "options": null,
    "answer": "pęcherzyki płucne",
    "altAnswers": [
      "pęcherzyki płucne",
      "pecherzyki plucne",
      "pęcherzyk płucny",
      "pecherzyk plucny"
    ],
    "image": "/img/r01_nablonek_plaski_pecherzyki.jpg",
    "explanation": "Pęcherzyki płucne przypominają małe baloniki i są miejscem wymiany gazowej."
  },
  {
    "id": "R01_NAB_10",
    "section": "Tkanka nabłonkowa",
    "type": "sort",
    "prompt": "Przyporządkuj nabłonki do kategorii według liczby warstw komórek.",
    "options": null,
    "answer": {
      "jedna warstwa": [
        "jednowarstwowy płaski",
        "jednowarstwowy sześcienny",
        "migawkowy",
        "zmysłowy",
        "gruczołowy"
      ],
      "wiele warstw": [
        "wielowarstwowy płaski"
      ]
    },
    "items": [
      "jednowarstwowy płaski",
      "jednowarstwowy sześcienny",
      "migawkowy",
      "zmysłowy",
      "gruczołowy",
      "wielowarstwowy płaski"
    ],
    "categories": [
      "jedna warstwa",
      "wiele warstw"
    ],
    "explanation": "Nabłonki jednowarstwowe tworzy jedna warstwa komórek, a nabłonek wielowarstwowy płaski ma wiele warstw."
  },
  {
    "id": "R01_NAB_11",
    "section": "Tkanka nabłonkowa",
    "type": "single_choice",
    "prompt": "Który nabłonek w jamie nosowej umożliwia odczuwanie zapachów?",
    "options": [
      "nabłonek zmysłowy",
      "nabłonek kostny",
      "nabłonek wielowarstwowy skóry",
      "nabłonek chrzęstny",
      "nabłonek tłuszczowy",
      "nabłonek krwi"
    ],
    "answer": 0,
    "image": "/img/r01_nablonek_zmyslowy_jama_nosowa.jpg",
    "explanation": "Nabłonek zmysłowy w jamie nosowej ma zakończenia nerwowe odbierające bodźce ze środowiska."
  },
  {
    "id": "R01_NAB_12",
    "section": "Tkanka nabłonkowa",
    "type": "scenario",
    "prompt": "W ścianie żołądka znajdują się struktury produkujące sok żołądkowy. Który typ nabłonka odpowiada temu opisowi?",
    "options": [
      "gruczołowy",
      "migawkowy",
      "zmysłowy",
      "wielowarstwowy płaski",
      "kostny",
      "nerwowy"
    ],
    "answer": 0,
    "image": "/img/r01_nablonek_gruczolowy_zoladek.jpg",
    "explanation": "Nabłonek gruczołowy w ścianie żołądka ma gruczoły produkujące substancje ważne dla organizmu, np. sok żołądkowy."
  },
  {
    "id": "R01_LAC_01",
    "section": "Tkanka łączna",
    "type": "single_choice",
    "prompt": "Jaka cecha jest wspólna dla różnych rodzajów tkanki łącznej?",
    "options": [
      "Brak substancji międzykomórkowej",
      "Obecność substancji międzykomórkowej",
      "Wyłącznie jedna warstwa komórek",
      "Obecność rzęsek na każdej komórce",
      "Same komórki nerwowe",
      "Brak komórek"
    ],
    "answer": 1,
    "image": "/img/r01_tkanka_laczna_rodzaje.jpg",
    "explanation": "Tkanki łączne bardzo różnią się budową, ale mają substancję międzykomórkową wypełniającą przestrzenie między komórkami."
  },
  {
    "id": "R01_LAC_02",
    "section": "Tkanka łączna",
    "type": "true_false",
    "prompt": "Krew jest płynną tkanką łączną.",
    "options": null,
    "answer": true,
    "image": "/img/r01_tkanka_tluszczowa_i_krew.jpg",
    "explanation": "To prawda. W krwi substancją międzykomórkową jest osocze, a komórkami są krwinki."
  },
  {
    "id": "R01_LAC_03",
    "section": "Tkanka łączna",
    "type": "fill_in",
    "prompt": "Komórki krwi to __________, a substancja międzykomórkowa we krwi to __________.",
    "options": null,
    "answer": [
      "krwinki",
      "osocze"
    ],
    "altAnswers": [
      [
        "krwinki"
      ],
      [
        "osocze",
        "osoczem"
      ]
    ],
    "image": "/img/r01_krew_skladniki.jpg",
    "explanation": "Rozdział opisuje krew jako płynną tkankę łączną z krwinkami zawieszonymi w osoczu."
  },
  {
    "id": "R01_LAC_04",
    "section": "Tkanka łączna",
    "type": "match",
    "prompt": "Połącz rodzaj tkanki łącznej z jej główną funkcją.",
    "options": null,
    "answer": {
      "tkanka tłuszczowa": "magazynuje tłuszcz i chroni przed zimnem",
      "krew": "transportuje substancje w organizmie",
      "tkanka kostna": "buduje kości",
      "tkanka chrzęstna": "tworzy chrząstki"
    },
    "left": [
      "tkanka tłuszczowa",
      "krew",
      "tkanka kostna",
      "tkanka chrzęstna"
    ],
    "right": [
      "magazynuje tłuszcz i chroni przed zimnem",
      "transportuje substancje w organizmie",
      "buduje kości",
      "tworzy chrząstki"
    ],
    "explanation": "Tkanka tłuszczowa magazynuje tłuszcz, krew transportuje substancje, tkanka kostna buduje kości, a tkanka chrzęstna tworzy chrząstki."
  },
  {
    "id": "R01_LAC_05",
    "section": "Tkanka łączna",
    "type": "multi_select",
    "prompt": "Zaznacz składniki krwi opisane w rozdziale.",
    "options": [
      "krwinki czerwone",
      "krwinki białe",
      "płytki krwi",
      "osocze",
      "rzęski",
      "akson"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r01_krew_skladniki.jpg",
    "explanation": "W rozdziale opisano krwinki czerwone, krwinki białe, płytki krwi i osocze."
  },
  {
    "id": "R01_LAC_06",
    "section": "Tkanka łączna",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: kość ramienna, żuchwa, żebro, małżowina uszna.",
    "options": null,
    "answer": "małżowina uszna",
    "image": "/img/r01_tkanka_kostna_i_chrzestna.jpg",
    "explanation": "Małżowina uszna jest przykładem struktury z tkanki chrzęstnej, a pozostałe przykłady dotyczą kości."
  },
  {
    "id": "R01_LAC_07",
    "section": "Tkanka łączna",
    "type": "scenario",
    "prompt": "Pod skórą znajduje się tkanka, która magazynuje tłuszcz, chroni przed utratą ciepła i zabezpiecza narządy przed urazami. Jaka to tkanka?",
    "options": [
      "tkanka tłuszczowa",
      "tkanka nerwowa",
      "tkanka mięśniowa serca",
      "tkanka kostna",
      "nabłonek migawkowy",
      "tkanka chrzęstna"
    ],
    "answer": 0,
    "image": "/img/r01_tkanka_tluszczowa_i_krew.jpg",
    "explanation": "Taką funkcję pełni tkanka tłuszczowa."
  },
  {
    "id": "R01_LAC_08",
    "section": "Tkanka łączna",
    "type": "single_choice",
    "prompt": "Co nadaje kościom twardość i sztywność?",
    "options": [
      "rzęski",
      "sole mineralne",
      "zakończenia nerwowe",
      "osocze",
      "sok żołądkowy",
      "tłuszcz w komórkach"
    ],
    "answer": 1,
    "image": "/img/r01_tkanka_kostna_i_chrzestna.jpg",
    "explanation": "Substancja międzykomórkowa tkanki kostnej zawiera m.in. sole mineralne, które nadają kościom twardość i sztywność."
  },
  {
    "id": "R01_LAC_09",
    "section": "Tkanka łączna",
    "type": "true_false",
    "prompt": "Komórki chrzęstne są ułożone po 2-3 w jamkach.",
    "options": null,
    "answer": true,
    "image": "/img/r01_tkanka_kostna_i_chrzestna.jpg",
    "explanation": "To prawda. Rozdział opisuje komórki chrzęstne jako mniej liczne i ułożone po 2-3 w jamkach."
  },
  {
    "id": "R01_LAC_10",
    "section": "Tkanka łączna",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do tkanek łącznych.",
    "options": null,
    "answer": {
      "tkanka tłuszczowa": [
        "warstwa podskórna magazynująca tłuszcz"
      ],
      "krew": [
        "transport tlenu i dwutlenku węgla"
      ],
      "tkanka kostna": [
        "kość ramienna"
      ],
      "tkanka chrzęstna": [
        "małżowina uszna"
      ]
    },
    "items": [
      "warstwa podskórna magazynująca tłuszcz",
      "transport tlenu i dwutlenku węgla",
      "kość ramienna",
      "małżowina uszna"
    ],
    "categories": [
      "tkanka tłuszczowa",
      "krew",
      "tkanka kostna",
      "tkanka chrzęstna"
    ],
    "explanation": "Przykłady w rozdziale pokazują, że tkanki łączne tworzą różne struktury i pełnią różne funkcje."
  },
  {
    "id": "R01_LAC_11",
    "section": "Tkanka łączna",
    "type": "riddle",
    "prompt": "Jaka płynna tkanka łączna transportuje tlen, dwutlenek węgla, składniki pokarmowe i produkty przemiany materii?",
    "options": null,
    "answer": "krew",
    "altAnswers": [
      "krew",
      "krwi"
    ],
    "image": "/img/r01_krew_skladniki.jpg",
    "explanation": "Krew transportuje różne substancje w organizmie."
  },
  {
    "id": "R01_LAC_12",
    "section": "Tkanka łączna",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje krwi opisane w rozdziale.",
    "options": [
      "Transport tlenu i dwutlenku węgla",
      "Transport składników pokarmowych",
      "Udział w reakcjach obronnych i odpornościowych",
      "Udział w krzepnięciu krwi",
      "Odbieranie zapachów",
      "Budowanie chrząstek"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r01_krew_skladniki.jpg",
    "explanation": "Krew transportuje substancje, uczestniczy w reakcjach obronnych i odpornościowych oraz w procesie krzepnięcia."
  },
  {
    "id": "R01_MIN_01",
    "section": "Tkanka mięśniowa i nerwowa",
    "type": "single_choice",
    "prompt": "Jaka zdolność tkanki mięśniowej pozwala zwierzętom wykonywać ruchy?",
    "options": [
      "Wydzielanie soku żołądkowego",
      "Kurczenie się",
      "Odbieranie zapachów",
      "Tworzenie osocza",
      "Magazynowanie tłuszczu",
      "Tworzenie chrząstek"
    ],
    "answer": 1,
    "image": "/img/r01_tkanki_miesniowe_porownanie.jpg",
    "explanation": "Tkanka mięśniowa ma zdolność kurczenia się, dzięki czemu umożliwia ruch."
  },
  {
    "id": "R01_MIN_02",
    "section": "Tkanka mięśniowa i nerwowa",
    "type": "true_false",
    "prompt": "Mięśnie gładkie pracują zależnie od woli organizmu.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz. Mięśnie gładkie pracują niezależnie od woli organizmu."
  },
  {
    "id": "R01_MIN_03",
    "section": "Tkanka mięśniowa i nerwowa",
    "type": "match",
    "prompt": "Połącz rodzaj tkanki mięśniowej z miejscem lub rolą.",
    "options": null,
    "answer": {
      "mięśniowa gładka": "przesuwanie pokarmu w jelicie",
      "poprzecznie prążkowana serca": "skurcze serca i ruch krwi",
      "poprzecznie prążkowana szkieletowa": "ruch kończyn i przemieszczanie ciała"
    },
    "left": [
      "mięśniowa gładka",
      "poprzecznie prążkowana serca",
      "poprzecznie prążkowana szkieletowa"
    ],
    "right": [
      "przesuwanie pokarmu w jelicie",
      "skurcze serca i ruch krwi",
      "ruch kończyn i przemieszczanie ciała"
    ],
    "image": "/img/r01_tkanki_miesniowe_porownanie.jpg",
    "explanation": "Tkanka mięśniowa gładka buduje ściany niektórych narządów wewnętrznych, tkanka serca buduje serce, a tkanka szkieletowa buduje mięśnie przyczepione do kości."
  },
  {
    "id": "R01_MIN_04",
    "section": "Tkanka mięśniowa i nerwowa",
    "type": "multi_select",
    "prompt": "Zaznacz cechy komórek mięśniowych opisane w rozdziale.",
    "options": [
      "Białka umożliwiające skurcz",
      "Dużo mitochondriów",
      "Zapasy cukru i tlenu",
      "Zakończenia nerwowe do odczuwania zapachów",
      "Dużo chloroplastów",
      "Osocze jako substancja międzykomórkowa"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Komórki mięśniowe mają białka umożliwiające skurcz, dużo mitochondriów oraz zapasy cukru i tlenu wykorzystywane podczas intensywnej pracy."
  },
  {
    "id": "R01_MIN_05",
    "section": "Tkanka mięśniowa i nerwowa",
    "type": "fill_in",
    "prompt": "Neuron ma liczne krótkie wypustki zwane __________ oraz jedną długą wypustkę zwaną __________.",
    "options": null,
    "answer": [
      "dendrytami",
      "aksonem"
    ],
    "altAnswers": [
      [
        "dendrytami",
        "dendryty"
      ],
      [
        "aksonem",
        "akson"
      ]
    ],
    "image": "/img/r01_neuron_budowa.jpg",
    "explanation": "Dendryty odbierają informacje, a akson przekazuje je do innych komórek."
  },
  {
    "id": "R01_MIN_06",
    "section": "Tkanka mięśniowa i nerwowa",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: dendryt, akson, ciało komórki nerwowej, osocze.",
    "options": null,
    "answer": "osocze",
    "image": "/img/r01_neuron_budowa.jpg",
    "explanation": "Osocze jest substancją międzykomórkową krwi, a pozostałe elementy należą do budowy neuronu."
  },
  {
    "id": "R01_MIN_07",
    "section": "Tkanka mięśniowa i nerwowa",
    "type": "scenario",
    "prompt": "W jelicie przesuwa się pokarm. Który rodzaj tkanki mięśniowej umożliwia taki ruch wewnątrz organizmu?",
    "options": [
      "tkanka mięśniowa gładka",
      "tkanka mięśniowa szkieletowa",
      "tkanka mięśniowa serca",
      "tkanka nerwowa",
      "tkanka kostna",
      "krew"
    ],
    "answer": 0,
    "image": "/img/r01_tkanka_miesniowa_gladka_jelito.jpg",
    "explanation": "Ruch pokarmu w jelicie umożliwia tkanka mięśniowa gładka."
  },
  {
    "id": "R01_MIN_08",
    "section": "Tkanka mięśniowa i nerwowa",
    "type": "scenario",
    "prompt": "Uczeń podnosi nogę i świadomie rusza nią podczas ćwiczenia. Która tkanka mięśniowa przede wszystkim odpowiada za taki ruch?",
    "options": [
      "poprzecznie prążkowana szkieletowa",
      "gładka",
      "poprzecznie prążkowana serca",
      "chrzęstna",
      "nabłonkowa zmysłowa",
      "tłuszczowa"
    ],
    "answer": 0,
    "image": "/img/r01_tkanki_miesniowe_porownanie.jpg",
    "explanation": "Mięśnie szkieletowe pracują zależnie od woli organizmu i umożliwiają ruch części ciała."
  },
  {
    "id": "R01_MIN_09",
    "section": "Tkanka mięśniowa i nerwowa",
    "type": "true_false",
    "prompt": "Tkanka mięśniowa poprzecznie prążkowana serca pracuje niezależnie od woli organizmu.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Mięsień sercowy kurczy się niezależnie od woli organizmu."
  },
  {
    "id": "R01_MIN_10",
    "section": "Tkanka mięśniowa i nerwowa",
    "type": "single_choice",
    "prompt": "Która tkanka buduje mózg, rdzeń kręgowy i nerwy?",
    "options": [
      "tkanka nerwowa",
      "tkanka tłuszczowa",
      "tkanka chrzęstna",
      "tkanka mięśniowa gładka",
      "nabłonek gruczołowy",
      "krew"
    ],
    "answer": 0,
    "image": "/img/r01_neuron_budowa.jpg",
    "explanation": "Mózg, rdzeń kręgowy i nerwy są narządami układu nerwowego zbudowanymi z tkanki nerwowej."
  },
  {
    "id": "R01_MIN_11",
    "section": "Tkanka mięśniowa i nerwowa",
    "type": "match",
    "prompt": "Połącz element neuronu z jego rolą.",
    "options": null,
    "answer": {
      "dendryty": "odbierają informacje",
      "akson": "przekazuje informacje do innych komórek",
      "ciało komórki": "zawiera centralnie położone jądro",
      "sieć połączeń neuronów": "umożliwia szybkie przekazywanie informacji"
    },
    "left": [
      "dendryty",
      "akson",
      "ciało komórki",
      "sieć połączeń neuronów"
    ],
    "right": [
      "odbierają informacje",
      "przekazuje informacje do innych komórek",
      "zawiera centralnie położone jądro",
      "umożliwia szybkie przekazywanie informacji"
    ],
    "image": "/img/r01_neuron_budowa.jpg",
    "explanation": "Neuron składa się z ciała komórki, dendrytów i aksonu; elementy te umożliwiają odbiór i przekazywanie informacji."
  },
  {
    "id": "R01_MIN_12",
    "section": "Tkanka mięśniowa i nerwowa",
    "type": "fill_in",
    "prompt": "Komórki mięśniowe mają dużo __________, które dostarczają energię potrzebną do pracy mięśni.",
    "options": null,
    "answer": [
      "mitochondriów"
    ],
    "altAnswers": [
      [
        "mitochondriów",
        "mitochondriow",
        "mitochondria"
      ]
    ],
    "explanation": "Mitochondria dostarczają energii potrzebnej do pracy komórek mięśniowych."
  },
  {
    "id": "R01_MIX_01",
    "section": "Powtórka mieszana",
    "type": "sort",
    "prompt": "Posegreguj elementy na komórki, tkanki i narządy.",
    "options": null,
    "answer": {
      "komórki": [
        "neuron",
        "komórka kostna"
      ],
      "tkanki": [
        "krew",
        "nabłonek migawkowy",
        "tkanka kostna"
      ],
      "narządy": [
        "mózg",
        "serce",
        "płuco"
      ]
    },
    "items": [
      "neuron",
      "komórka kostna",
      "krew",
      "nabłonek migawkowy",
      "mózg",
      "serce",
      "płuco",
      "tkanka kostna"
    ],
    "categories": [
      "komórki",
      "tkanki",
      "narządy"
    ],
    "image": "/img/r01_hierarchia_budowy_zwierzat.jpg",
    "explanation": "Komórka jest podstawową jednostką budowy, tkanka to grupa komórek pełniących podobną funkcję, a narząd jest zbudowany z tkanek."
  },
  {
    "id": "R01_MIX_02",
    "section": "Powtórka mieszana",
    "type": "match",
    "prompt": "Połącz tkankę z funkcją.",
    "options": null,
    "answer": {
      "nabłonkowa": "tworzy pokrycie ciała i buduje ściany narządów",
      "łączna": "łączy, wspiera lub chroni inne tkanki",
      "mięśniowa": "umożliwia ruch dzięki skurczom",
      "nerwowa": "odbiera bodźce i umożliwia szybką reakcję"
    },
    "left": [
      "nabłonkowa",
      "łączna",
      "mięśniowa",
      "nerwowa"
    ],
    "right": [
      "tworzy pokrycie ciała i buduje ściany narządów",
      "łączy, wspiera lub chroni inne tkanki",
      "umożliwia ruch dzięki skurczom",
      "odbiera bodźce i umożliwia szybką reakcję"
    ],
    "image": "/img/r01_lokalizacja_tkanek_w_ciele.jpg",
    "explanation": "Każda z tkanek zwierzęcych ma budowę przystosowaną do pełnienia określonych funkcji."
  },
  {
    "id": "R01_MIX_03",
    "section": "Powtórka mieszana",
    "type": "sequence",
    "prompt": "Ułóż poziomy organizacji ciała zwierzęcia od najmniejszego do największego.",
    "options": null,
    "answer": [
      "komórki",
      "tkanki",
      "narządy",
      "układy narządów",
      "organizm"
    ],
    "items": [
      "tkanki",
      "układy narządów",
      "komórki",
      "narządy",
      "organizm"
    ],
    "image": "/img/r01_hierarchia_budowy_zwierzat.jpg",
    "explanation": "Ciało zwierzęcia ma budowę hierarchiczną: komórki tworzą tkanki, tkanki narządy, narządy układy narządów, a te organizm."
  },
  {
    "id": "R01_MIX_04",
    "section": "Powtórka mieszana",
    "type": "single_choice",
    "prompt": "Który zestaw zawiera cztery podstawowe rodzaje tkanek zwierzęcych?",
    "options": [
      "nabłonkowa, łączna, mięśniowa, nerwowa",
      "kostna, chrzęstna, krew, tłuszczowa",
      "ryby, płazy, gady, ptaki",
      "płazińce, nicienie, pierścienice, stawonogi",
      "płaska, sześcienna, migawkowa, gruczołowa",
      "serce, nerka, wątroba, płuco"
    ],
    "answer": 0,
    "explanation": "Cztery podstawowe rodzaje tkanek zwierzęcych to: nabłonkowa, łączna, mięśniowa i nerwowa."
  },
  {
    "id": "R01_MIX_05",
    "section": "Powtórka mieszana",
    "type": "multi_select",
    "prompt": "Zaznacz miejsca lub narządy, w których w rozdziale wskazano tkankę nabłonkową.",
    "options": [
      "skóra",
      "pęcherzyki płucne",
      "kanaliki nerkowe",
      "żołądek",
      "jama nosowa",
      "kość udowa"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "/img/r01_lokalizacja_tkanek_w_ciele.jpg",
    "explanation": "Rozdział pokazuje nabłonek m.in. w skórze, pęcherzykach płucnych, kanalikach nerkowych, żołądku i jamie nosowej."
  },
  {
    "id": "R01_MIX_06",
    "section": "Powtórka mieszana",
    "type": "true_false",
    "prompt": "Wszystkie zwierzęta mają układy narządów.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz. W rozdziale podano, że nie wszystkie zwierzęta mają taki sam stopień złożoności budowy."
  },
  {
    "id": "R01_MIX_07",
    "section": "Powtórka mieszana",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: pęcherzyki płucne, kanaliki nerkowe, skóra, akson.",
    "options": null,
    "answer": "akson",
    "explanation": "Akson jest częścią neuronu, a pozostałe elementy są miejscami występowania nabłonków opisanych w rozdziale."
  },
  {
    "id": "R01_MIX_08",
    "section": "Powtórka mieszana",
    "type": "fill_in",
    "prompt": "Tkanka to grupa komórek o podobnej budowie, które pełnią te same __________.",
    "options": null,
    "answer": [
      "funkcje"
    ],
    "altAnswers": [
      [
        "funkcje",
        "funkcję",
        "funkcje."
      ]
    ],
    "explanation": "Definicja tkanki w rozdziale podkreśla podobną budowę komórek i wspólną funkcję."
  },
  {
    "id": "R01_MIX_09",
    "section": "Powtórka mieszana",
    "type": "scenario",
    "prompt": "Pod mikroskopem widać duże komórki wypełnione tłuszczem. Tkanka magazynuje tłuszcz i chroni przed utratą ciepła. Jaka to tkanka?",
    "options": [
      "tkanka tłuszczowa",
      "tkanka kostna",
      "tkanka chrzęstna",
      "tkanka nerwowa",
      "nabłonek migawkowy",
      "tkanka mięśniowa serca"
    ],
    "answer": 0,
    "image": "/img/r01_tkanka_tluszczowa_i_krew.jpg",
    "explanation": "Opis odpowiada tkance tłuszczowej."
  },
  {
    "id": "R01_MIX_10",
    "section": "Powtórka mieszana",
    "type": "scenario",
    "prompt": "Narząd stale wykonuje skurcze i rozkurcze, dzięki czemu krew krąży po organizmie. Jaka tkanka buduje ten narząd?",
    "options": [
      "tkanka mięśniowa poprzecznie prążkowana serca",
      "nabłonek zmysłowy",
      "tkanka tłuszczowa",
      "tkanka chrzęstna",
      "tkanka kostna",
      "krew"
    ],
    "answer": 0,
    "image": "/img/r01_tkanki_miesniowe_porownanie.jpg",
    "explanation": "Serce buduje tkanka mięśniowa poprzecznie prążkowana serca."
  },
  {
    "id": "R01_MIX_11",
    "section": "Powtórka mieszana",
    "type": "riddle",
    "prompt": "Jak nazywa się nauka badająca zwierzęta?",
    "options": null,
    "answer": "zoologia",
    "altAnswers": [
      "zoologia",
      "zoologią"
    ],
    "explanation": "Nauka badająca zwierzęta to zoologia."
  },
  {
    "id": "R01_MIX_12",
    "section": "Powtórka mieszana",
    "type": "multi_select",
    "prompt": "Zaznacz grupy należące do kręgowców.",
    "options": [
      "ryby",
      "płazy",
      "gady",
      "ptaki",
      "ssaki",
      "mięczaki"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "/img/r01_bezkregowce_i_kregowce.jpg",
    "explanation": "Do kręgowców należą ryby, płazy, gady, ptaki i ssaki."
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz miejsce występowania z właściwym nabłonkiem.",
    "options": null,
    "answer": {
      "pęcherzyki płucne": "jednowarstwowy płaski",
      "kanaliki nerkowe": "jednowarstwowy sześcienny",
      "drogi oddechowe": "migawkowy",
      "jama nosowa": "zmysłowy",
      "ściana żołądka": "gruczołowy",
      "skóra": "wielowarstwowy płaski"
    },
    "left": [
      "pęcherzyki płucne",
      "kanaliki nerkowe",
      "drogi oddechowe",
      "jama nosowa",
      "ściana żołądka",
      "skóra"
    ],
    "right": [
      "jednowarstwowy płaski",
      "jednowarstwowy sześcienny",
      "migawkowy",
      "zmysłowy",
      "gruczołowy",
      "wielowarstwowy płaski"
    ],
    "image": "/img/r01_lokalizacja_tkanek_w_ciele.jpg",
    "explanation": "Rozdział pokazuje różne nabłonki w różnych miejscach organizmu, m.in. w płucach, nerkach, drogach oddechowych, jamie nosowej, żołądku i skórze."
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Komórki pewnej tkanki rozgałęziają się, mają jedno lub dwa jądra komórkowe położone centralnie i kurczą się przez całe życie organizmu. Jaka to tkanka?",
    "options": [
      "tkanka mięśniowa poprzecznie prążkowana serca",
      "tkanka mięśniowa gładka",
      "tkanka mięśniowa poprzecznie prążkowana szkieletowa",
      "tkanka chrzęstna",
      "tkanka tłuszczowa",
      "nabłonek wielowarstwowy płaski"
    ],
    "answer": 0,
    "image": "/img/r01_tkanki_miesniowe_porownanie.jpg",
    "explanation": "Opis dotyczy tkanki mięśniowej poprzecznie prążkowanej serca."
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Gąbki są asymetryczne i należą do zwierząt beztkankowych, czyli ich komórki nie tworzą tkanek.",
    "options": null,
    "answer": true,
    "image": "/img/r01_gabka_beztkankowa.jpg",
    "explanation": "To prawda. Rozdział opisuje gąbki jako proste zwierzęta beztkankowe o nieregularnym kształcie ciała."
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który zestaw zawiera dwa elementy, których nie ma komórka zwierzęca?",
    "options": [
      "ściana komórkowa i chloroplasty",
      "jądro komórkowe i błona komórkowa",
      "akson i dendryty",
      "rzęski i gruczoły",
      "krwinki i osocze",
      "sole mineralne i jamki"
    ],
    "answer": 0,
    "image": "/img/r01_komorka_zwierzeca.jpg",
    "explanation": "Komórka zwierzęca nie ma ściany komórkowej ani chloroplastów."
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Tkanka kostna ma komórki o gwiaździstym kształcie, a jej substancja międzykomórkowa zawiera __________ __________.",
    "options": null,
    "answer": [
      "sole",
      "mineralne"
    ],
    "altAnswers": [
      [
        "sole"
      ],
      [
        "mineralne"
      ]
    ],
    "image": "/img/r01_tkanka_kostna_i_chrzestna.jpg",
    "explanation": "Sole mineralne nadają kościom twardość i sztywność."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj tkanki mięśniowe do sposobu pracy.",
    "options": null,
    "answer": {
      "niezależnie od woli": [
        "mięśniowa gładka",
        "poprzecznie prążkowana serca"
      ],
      "zależnie od woli": [
        "poprzecznie prążkowana szkieletowa"
      ]
    },
    "items": [
      "mięśniowa gładka",
      "poprzecznie prążkowana serca",
      "poprzecznie prążkowana szkieletowa"
    ],
    "categories": [
      "niezależnie od woli",
      "zależnie od woli"
    ],
    "image": "/img/r01_tkanki_miesniowe_porownanie.jpg",
    "explanation": "Mięśnie gładkie i mięsień sercowy pracują niezależnie od woli, a mięśnie szkieletowe zależnie od woli organizmu."
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz nabłonki jednowarstwowe, które w rozdziale opisano z dodatkowymi strukturami lub komórkami między nabłonkowymi.",
    "options": [
      "migawkowy",
      "zmysłowy",
      "gruczołowy",
      "wielowarstwowy płaski",
      "kostny",
      "tłuszczowy"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "/img/r01_rodzaje_nablonkow.jpg",
    "explanation": "Nabłonek migawkowy ma rzęski, zmysłowy zawiera zakończenia nerwowe, a gruczołowy ma jednokomórkowe gruczoły."
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż opis działania nabłonka migawkowego w drogach oddechowych w poprawnej kolejności.",
    "options": null,
    "answer": [
      "powietrze jest wdychane",
      "powietrze przechodzi przez drogi oddechowe",
      "rzęski wychwytują zanieczyszczenia i drobnoustroje",
      "zanieczyszczenia nie trafiają dalej tak łatwo do płuc"
    ],
    "items": [
      "rzęski wychwytują zanieczyszczenia i drobnoustroje",
      "powietrze jest wdychane",
      "zanieczyszczenia nie trafiają dalej tak łatwo do płuc",
      "powietrze przechodzi przez drogi oddechowe"
    ],
    "image": "/img/r01_nablonek_migawkowy_drogi_oddechowe.jpg",
    "explanation": "Nabłonek migawkowy ma rzęski, które wychwytują zanieczyszczenia i drobnoustroje, zanim dostaną się one do płuc."
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: drapieżniki, roślinożercy, wszystkożercy, samożywne, pasożyty.",
    "options": null,
    "answer": "samożywne",
    "explanation": "Samożywne nie pasuje, ponieważ zwierzęta są cudzożywne; pozostałe określenia dotyczą sposobów odżywiania zwierząt."
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Która długa, pojedyncza wypustka neuronu przekazuje informacje do innych komórek?",
    "options": null,
    "answer": "akson",
    "altAnswers": [
      "akson",
      "aksonem"
    ],
    "image": "/img/r01_neuron_budowa.jpg",
    "explanation": "Akson przekazuje informacje do innych komórek, np. mięśniowych lub nerwowych."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r01",
  number: 1,
  title: "Poznajemy świat zwierząt",
  icon: "🐾",
  sectionOrder: [
    "Cechy zwierząt",
    "Tkanka nabłonkowa",
    "Tkanka łączna",
    "Tkanka mięśniowa i nerwowa",
    "Powtórka mieszana",
    "Super trudne"
  ],
  sectionIcons: {
    "Cechy zwierząt": "🐾",
    "Tkanka nabłonkowa": "🧱",
    "Tkanka łączna": "🦴",
    "Tkanka mięśniowa i nerwowa": "⚡",
    "Powtórka mieszana": "🔁",
    "Super trudne": "🔥"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
