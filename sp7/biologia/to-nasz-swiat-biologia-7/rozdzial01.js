// Skróty sekcji (do identyfikatorów ćwiczeń):
//   SKO  = Niezwykła skóra człowieka
//   HIG  = Jak dbać o skórę?
//   KOS  = Układ kostny - twój szkielet
//   RUC  = Jak porusza się twoje ciało? Układ ruchu
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_SKO_01",
    "section": "Niezwykła skóra człowieka",
    "type": "single_choice",
    "prompt": "Który zestaw poprawnie wymienia dwie warstwy skóry?",
    "options": [
      "naskórek i skóra właściwa",
      "naskórek i tkanka podskórna",
      "skóra właściwa i tkanka podskórna",
      "tkanka tłuszczowa i naskórek",
      "okostna i skóra właściwa",
      "chrząstka i naskórek"
    ],
    "answer": 0,
    "explanation": "Skóra składa się z dwóch warstw: naskórka i skóry właściwej. Pod skórą właściwą leży tkanka podskórna."
  },
  {
    "id": "R01_SKO_02",
    "section": "Niezwykła skóra człowieka",
    "type": "match",
    "prompt": "Połącz element budowy skóry z jego charakterystyczną cechą.",
    "options": null,
    "left": [
      "naskórek",
      "skóra właściwa",
      "tkanka podskórna"
    ],
    "right": [
      "zawiera m.in. kolagen oraz naczynia krwionośne",
      "jest zbudowany z tkanki nabłonkowej, która stale się odnawia",
      "składa się głównie z tkanki tłuszczowej"
    ],
    "answer": {
      "naskórek": "jest zbudowany z tkanki nabłonkowej, która stale się odnawia",
      "skóra właściwa": "zawiera m.in. kolagen oraz naczynia krwionośne",
      "tkanka podskórna": "składa się głównie z tkanki tłuszczowej"
    },
    "explanation": "Naskórek tworzy odnawiająca się tkanka nabłonkowa, skóra właściwa zawiera m.in. kolagen i naczynia krwionośne, a tkanka podskórna jest zbudowana głównie z tkanki tłuszczowej.",
    "image": "r01_przekroj_skory.jpg"
  },
  {
    "id": "R01_SKO_03",
    "section": "Niezwykła skóra człowieka",
    "type": "true_false",
    "prompt": "Tkanka podskórna jest trzecią warstwą skóry.",
    "options": null,
    "answer": false,
    "explanation": "Skóra ma dwie warstwy: naskórek i skórę właściwą. Tkanka podskórna leży pod skórą właściwą."
  },
  {
    "id": "R01_SKO_04",
    "section": "Niezwykła skóra człowieka",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje pełnione przez skórę.",
    "options": [
      "ochrona przed urazami i szkodliwymi czynnikami",
      "udział w regulacji temperatury ciała",
      "odbieranie bodźców z otoczenia",
      "produkcja witaminy D pod wpływem słońca",
      "pompowanie krwi do naczyń",
      "wytwarzanie komórek krwi"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Skóra chroni organizm, uczestniczy w termoregulacji, odbiera bodźce i pod wpływem promieniowania słonecznego produkuje witaminę D."
  },
  {
    "id": "R01_SKO_05",
    "section": "Niezwykła skóra człowieka",
    "type": "fill_in",
    "prompt": "Naskórek jest zbudowany z tkanki __________, a w jego komórkach produkowana jest __________.",
    "options": null,
    "answer": [
      "nabłonkowej",
      "keratyna"
    ],
    "altAnswers": [
      [
        "nabłonkowej",
        "tkanki nabłonkowej"
      ],
      [
        "keratyna"
      ]
    ],
    "explanation": "Tkanka nabłonkowa naskórka stale się złuszcza i odnawia. Keratyna jest białkiem nieprzepuszczającym wody i zwiększającym wytrzymałość na urazy."
  },
  {
    "id": "R01_SKO_06",
    "section": "Niezwykła skóra człowieka",
    "type": "single_choice",
    "prompt": "Który gruczoł wydziela sebum i natłuszcza skórę?",
    "options": [
      "gruczoł łojowy",
      "gruczoł potowy",
      "gruczoł mleczny",
      "mieszek włosowy",
      "naczynie krwionośne",
      "receptor"
    ],
    "answer": 0,
    "explanation": "Gruczoł łojowy wydziela sebum, które natłuszcza i nawilża skórę."
  },
  {
    "id": "R01_SKO_07",
    "section": "Niezwykła skóra człowieka",
    "type": "scenario",
    "prompt": "Po intensywnym wysiłku ciało jest przegrzane. Która reakcja skóry pomaga oddać nadmiar ciepła?",
    "options": [
      "rozszerzenie naczyń krwionośnych i wydzielanie potu",
      "zwężenie naczyń krwionośnych i zatrzymanie potu",
      "zwiększenie produkcji sebum",
      "zwiększenie ilości melaniny",
      "zatrzymanie przepływu krwi w skórze",
      "zgrubienie naskórka"
    ],
    "answer": 0,
    "explanation": "Gdy organizm jest przegrzany, naczynia krwionośne skóry rozszerzają się, a gruczoły potowe wydzielają pot. Parowanie potu ochładza ciało."
  },
  {
    "id": "R01_SKO_08",
    "section": "Niezwykła skóra człowieka",
    "type": "riddle",
    "prompt": "Naturalna substancja natłuszczająca i nawilżająca skórę to...",
    "options": null,
    "answer": "sebum",
    "altAnswers": [
      "sebum"
    ],
    "explanation": "Sebum jest naturalną substancją wydzielaną przez gruczoły łojowe."
  },
  {
    "id": "R01_SKO_09",
    "section": "Niezwykła skóra człowieka",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: gruczoł potowy, gruczoł łojowy, mieszek włosowy, chrząstka stawowa.",
    "options": null,
    "answer": "chrząstka stawowa",
    "explanation": "Gruczoły potowe i łojowe oraz mieszki włosowe są elementami związanymi ze skórą. Chrząstka stawowa występuje w stawach."
  },
  {
    "id": "R01_SKO_10",
    "section": "Niezwykła skóra człowieka",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do funkcji skóry.",
    "options": null,
    "items": [
      "zatrzymywanie drobnoustrojów poza organizmem",
      "zwężanie naczyń krwionośnych podczas zimna",
      "wydzielanie potu podczas gorąca",
      "odczuwanie bólu",
      "odczuwanie dotyku",
      "ochrona przed nadmiarem promieniowania UV"
    ],
    "categories": [
      "ochrona",
      "termoregulacja",
      "odbieranie bodźców"
    ],
    "answer": {
      "ochrona": [
        "zatrzymywanie drobnoustrojów poza organizmem",
        "ochrona przed nadmiarem promieniowania UV"
      ],
      "termoregulacja": [
        "zwężanie naczyń krwionośnych podczas zimna",
        "wydzielanie potu podczas gorąca"
      ],
      "odbieranie bodźców": [
        "odczuwanie bólu",
        "odczuwanie dotyku"
      ]
    },
    "explanation": "Skóra chroni wnętrze organizmu, pomaga utrzymać stałą temperaturę ciała oraz odbiera bodźce dzięki receptorom."
  },
  {
    "id": "R01_SKO_11",
    "section": "Niezwykła skóra człowieka",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe informacje o liniach papilarnych.",
    "options": [
      "występują m.in. na opuszkach palców",
      "mogą występować na dłoniach i stopach",
      "powstają już w życiu płodowym",
      "są niepowtarzalne dla każdego człowieka",
      "zmieniają swój układ co kilka lat",
      "bliźnięta jednojajowe mają identyczny układ linii"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Linie papilarne występują m.in. na palcach, dłoniach i stopach, powstają w życiu płodowym, są niepowtarzalne i nie zmieniają się przez całe życie.",
    "image": "r01_linie_papilarne.jpg"
  },
  {
    "id": "R01_SKO_12",
    "section": "Niezwykła skóra człowieka",
    "type": "true_false",
    "prompt": "Melanina pomaga chronić komórki przed szkodliwym działaniem promieniowania UV.",
    "options": null,
    "answer": true,
    "explanation": "Melanina występuje m.in. w naskórku i pełni funkcję ochronną przed promieniowaniem UV."
  },
  {
    "id": "R01_HIG_01",
    "section": "Jak dbać o skórę?",
    "type": "single_choice",
    "prompt": "Który zestaw najlepiej opisuje codzienną higienę skóry?",
    "options": [
      "umycie całego ciała, zmiana bielizny i używanie własnych przyborów higienicznych",
      "mycie tylko dłoni i twarzy oraz wspólne używanie ręczników",
      "unikanie mycia po wysiłku i częste opalanie",
      "używanie cudzych przyborów higienicznych po ich opłukaniu",
      "mycie całego ciała raz w tygodniu",
      "codzienne korzystanie z solarium"
    ],
    "answer": 0,
    "explanation": "Na skórze gromadzą się pot, łój i inne substancje, dlatego codziennie należy umyć całe ciało, zmienić bieliznę i używać własnych przyborów higienicznych."
  },
  {
    "id": "R01_HIG_02",
    "section": "Jak dbać o skórę?",
    "type": "multi_select",
    "prompt": "Zaznacz skutki nadmiernego działania promieniowania UV na skórę.",
    "options": [
      "oparzenia słoneczne",
      "przyspieszone starzenie się skóry",
      "zwiększone ryzyko nowotworów skóry",
      "suchość, zmarszczki i przebarwienia",
      "wzrost liczby kości",
      "wzmocnienie szpiku kostnego"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Nadmierne promieniowanie UV może powodować oparzenia, uszkodzenia i szybsze starzenie skóry oraz zwiększać ryzyko raka skóry."
  },
  {
    "id": "R01_HIG_03",
    "section": "Jak dbać o skórę?",
    "type": "true_false",
    "prompt": "Wystarczy około 15-20 minut na słońcu, aby organizm wyprodukował dzienną dawkę witaminy D.",
    "options": null,
    "answer": true,
    "explanation": "Około 15-20 minut na słońcu wystarcza do wyprodukowania dziennej dawki witaminy D."
  },
  {
    "id": "R01_HIG_04",
    "section": "Jak dbać o skórę?",
    "type": "scenario",
    "prompt": "Uczeń wybiera się w upalny dzień na plażę. Które zachowanie najlepiej ograniczy działanie promieniowania UV?",
    "options": [
      "nakrycie głowy, ubranie osłaniające skórę i krem z filtrem SPF 30 lub wyższym",
      "opalanie się bez kremu między 10 a 15",
      "korzystanie z solarium przed wyjściem",
      "smarowanie skóry wyłącznie sebum",
      "pozostanie w mokrym ubraniu przez cały dzień",
      "używanie wspólnego ręcznika z innymi osobami"
    ],
    "answer": 0,
    "explanation": "Skórę należy chronić ubraniem, nakryciem głowy i kremem z filtrem SPF 30 lub wyższym. Promieniowanie słoneczne jest najsilniejsze w godzinach 10-15.",
    "image": "r01_ochrona_uv.jpg"
  },
  {
    "id": "R01_HIG_05",
    "section": "Jak dbać o skórę?",
    "type": "match",
    "prompt": "Połącz literę zasady ABCDE z cechą niepokojącego znamienia.",
    "options": null,
    "left": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "right": [
      "asymetria",
      "niewyraźne lub poszarpane brzegi",
      "nierówne lub łaciate zabarwienie",
      "średnica powyżej 6 mm",
      "zmiana wyglądu znamienia"
    ],
    "answer": {
      "A": "asymetria",
      "B": "niewyraźne lub poszarpane brzegi",
      "C": "nierówne lub łaciate zabarwienie",
      "D": "średnica powyżej 6 mm",
      "E": "zmiana wyglądu znamienia"
    },
    "explanation": "ABCDE oznacza: asymetrię, nieprawidłowe brzegi, kolor, duży rozmiar oraz ewolucję, czyli zmianę wyglądu znamienia.",
    "image": "r01_znamie_skory.jpg"
  },
  {
    "id": "R01_HIG_06",
    "section": "Jak dbać o skórę?",
    "type": "fill_in",
    "prompt": "Grzybicą łatwo zarazić się w miejscach __________, dlatego na basenie warto nosić __________.",
    "options": null,
    "answer": [
      "wilgotnych",
      "klapki"
    ],
    "altAnswers": [
      [
        "wilgotnych",
        "wilgotnych miejscach"
      ],
      [
        "klapki",
        "klapki na basen"
      ]
    ],
    "explanation": "Grzybica często przenosi się przez kontakt z zakażoną powierzchnią w miejscach wilgotnych, np. na basenie. Klapki pomagają ograniczyć taki kontakt."
  },
  {
    "id": "R01_HIG_07",
    "section": "Jak dbać o skórę?",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do sposobów profilaktyki czerniaka: krem z filtrem SPF, nakrycie głowy, ubranie osłaniające skórę, solarium.",
    "options": null,
    "answer": "solarium",
    "explanation": "Solarium emituje silne promieniowanie UV i nie jest sposobem ochrony skóry. Pozostałe elementy zmniejszają narażenie na UV."
  },
  {
    "id": "R01_HIG_08",
    "section": "Jak dbać o skórę?",
    "type": "riddle",
    "prompt": "Bezbolesne badanie zmian skórnych w kilkunastokrotnym powiększeniu wykonywane przez dermatologa to...",
    "options": null,
    "answer": "dermatoskopia",
    "altAnswers": [
      "dermatoskopia",
      "badanie dermatoskopowe"
    ],
    "explanation": "Dermatoskopia pozwala analizować kształt, kolor i strukturę zmiany skórnej oraz wykrywać nowotwory na wczesnym etapie."
  },
  {
    "id": "R01_HIG_09",
    "section": "Jak dbać o skórę?",
    "type": "sort",
    "prompt": "Przyporządkuj objawy lub cechy do odpowiedniej dolegliwości skóry.",
    "options": null,
    "items": [
      "zaczerwieniona i łuszcząca się skóra",
      "swędzenie skóry",
      "zaczerwienienie po długim pobycie na słońcu",
      "pieczenie i pęcherze",
      "zaskórniki",
      "krosty i stany zapalne"
    ],
    "categories": [
      "grzybica",
      "oparzenie słoneczne",
      "trądzik młodzieńczy"
    ],
    "answer": {
      "grzybica": [
        "zaczerwieniona i łuszcząca się skóra",
        "swędzenie skóry"
      ],
      "oparzenie słoneczne": [
        "zaczerwienienie po długim pobycie na słońcu",
        "pieczenie i pęcherze"
      ],
      "trądzik młodzieńczy": [
        "zaskórniki",
        "krosty i stany zapalne"
      ]
    },
    "explanation": "Grzybica może powodować zaczerwienienie, łuszczenie i świąd; oparzenie słoneczne - zaczerwienienie, pieczenie i pęcherze; trądzik - zaskórniki, krosty i stany zapalne."
  },
  {
    "id": "R01_HIG_10",
    "section": "Jak dbać o skórę?",
    "type": "single_choice",
    "prompt": "Co bezpośrednio rozpoczyna mechanizm powstawania trądziku młodzieńczego?",
    "options": [
      "wzrost poziomu hormonów",
      "spadek ilości melaniny",
      "zwężenie naczyń krwionośnych",
      "zużycie chrząstki",
      "niedobór płynu stawowego",
      "zrastanie się kości"
    ],
    "answer": 0,
    "explanation": "W okresie dojrzewania wzrost poziomu hormonów powoduje nadmierną produkcję sebum, co sprzyja zatykaniu porów i powstawaniu zmian trądzikowych."
  },
  {
    "id": "R01_HIG_11",
    "section": "Jak dbać o skórę?",
    "type": "scenario",
    "prompt": "Na skórze pojawiło się znamię, którego wcześniej nie było, a z czasem zmienia kolor i kształt. Co należy zrobić?",
    "options": [
      "skontaktować się z lekarzem",
      "opalać zmianę bez ochrony",
      "zakryć ją kosmetykiem i nie obserwować",
      "korzystać z solarium",
      "dzielić się ręcznikiem z innymi",
      "samodzielnie ścierać zmianę"
    ],
    "answer": 0,
    "explanation": "Nowe lub zmieniające się zmiany skórne należy zgłosić lekarzowi. Wczesna ocena pomaga szybko rozpocząć potrzebne leczenie."
  },
  {
    "id": "R01_HIG_12",
    "section": "Jak dbać o skórę?",
    "type": "multi_select",
    "prompt": "Zaznacz sposoby ograniczające ryzyko grzybicy skóry i paznokci.",
    "options": [
      "noszenie klapek na basenie",
      "używanie własnego ręcznika",
      "utrzymywanie skóry suchej i czystej",
      "dzielenie się butami",
      "chodzenie boso po wilgotnych powierzchniach",
      "używanie wspólnego ręcznika"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Profilaktyka grzybicy obejmuje noszenie klapek na basenie, nieużywanie wspólnych ręczników i butów oraz utrzymywanie skóry w czystości i suchości.",
    "image": "r01_grzybica_profilaktyka.jpg"
  },
  {
    "id": "R01_KOS_01",
    "section": "Układ kostny - twój szkielet",
    "type": "single_choice",
    "prompt": "Która odpowiedź najlepiej opisuje jedną z funkcji szkieletu?",
    "options": [
      "chroni narządy wewnętrzne i nadaje ciału kształt",
      "wydziela sebum",
      "produkuje pot",
      "odbiera bodźce dotyku",
      "tworzy opaleniznę",
      "chroni skórę przed grzybicą"
    ],
    "answer": 0,
    "explanation": "Szkielet jest rusztowaniem ciała, chroni narządy wewnętrzne, nadaje ciału kształt i pionową postawę oraz stanowi miejsce przyczepu mięśni."
  },
  {
    "id": "R01_KOS_02",
    "section": "Układ kostny - twój szkielet",
    "type": "match",
    "prompt": "Połącz część szkieletu z narządem lub strukturą, którą chroni.",
    "options": null,
    "left": [
      "czaszka",
      "klatka piersiowa",
      "kręgosłup"
    ],
    "right": [
      "mózg",
      "płuca i serce",
      "rdzeń kręgowy"
    ],
    "answer": {
      "czaszka": "mózg",
      "klatka piersiowa": "płuca i serce",
      "kręgosłup": "rdzeń kręgowy"
    },
    "explanation": "Czaszka chroni mózg, klatka piersiowa chroni płuca i serce, a kręgosłup chroni rdzeń kręgowy.",
    "image": "r01_szkielet_czlowieka.jpg"
  },
  {
    "id": "R01_KOS_03",
    "section": "Układ kostny - twój szkielet",
    "type": "true_false",
    "prompt": "Stawy są połączeniami ruchomymi kości, a szwy - połączeniami nieruchomymi.",
    "options": null,
    "answer": true,
    "explanation": "Kości mogą łączyć się ruchomo za pomocą stawów lub nieruchomo za pomocą szwów."
  },
  {
    "id": "R01_KOS_04",
    "section": "Układ kostny - twój szkielet",
    "type": "multi_select",
    "prompt": "Zaznacz trzy główne części układu kostnego człowieka.",
    "options": [
      "szkielet osiowy",
      "obręcze barkowa i miedniczna",
      "szkielet kończyn górnych i dolnych",
      "gruczoły potowe",
      "układ mięśniowy",
      "tkanka podskórna"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "W układzie kostnym wyróżnia się szkielet osiowy, obręcze oraz szkielet kończyn górnych i dolnych."
  },
  {
    "id": "R01_KOS_05",
    "section": "Układ kostny - twój szkielet",
    "type": "fill_in",
    "prompt": "Szkielet osiowy obejmuje czaszkę i __________ z klatką piersiową, a obręcze dzielą się na barkową i __________.",
    "options": null,
    "answer": [
      "kręgosłup",
      "miedniczną"
    ],
    "altAnswers": [
      [
        "kręgosłup",
        "kręgosłupem"
      ],
      [
        "miedniczną",
        "miedniczna"
      ]
    ],
    "explanation": "Szkielet osiowy tworzą czaszka oraz kręgosłup z klatką piersiową. Obręcze to obręcz barkowa i miedniczna."
  },
  {
    "id": "R01_KOS_06",
    "section": "Układ kostny - twój szkielet",
    "type": "odd_one_out",
    "prompt": "Wskaż kość, która nie należy do kończyny górnej: ramieniowa, promieniowa, łokciowa, piszczelowa.",
    "options": null,
    "answer": "piszczelowa",
    "explanation": "Kość piszczelowa należy do kończyny dolnej. Kości ramieniowa, promieniowa i łokciowa należą do kończyny górnej."
  },
  {
    "id": "R01_KOS_07",
    "section": "Układ kostny - twój szkielet",
    "type": "sort",
    "prompt": "Przyporządkuj kości do odpowiedniej grupy.",
    "options": null,
    "items": [
      "ramieniowa",
      "promieniowa",
      "łokciowa",
      "udowa",
      "piszczelowa",
      "strzałkowa",
      "obojczyk",
      "łopatka",
      "kość biodrowa"
    ],
    "categories": [
      "kończyna górna",
      "kończyna dolna",
      "obręcze"
    ],
    "answer": {
      "kończyna górna": [
        "ramieniowa",
        "promieniowa",
        "łokciowa"
      ],
      "kończyna dolna": [
        "udowa",
        "piszczelowa",
        "strzałkowa"
      ],
      "obręcze": [
        "obojczyk",
        "łopatka",
        "kość biodrowa"
      ]
    },
    "explanation": "Kości ramieniowa, promieniowa i łokciowa należą do kończyny górnej; udowa, piszczelowa i strzałkowa do dolnej; obojczyk i łopatka tworzą obręcz barkową, a kość biodrowa należy do obręczy miednicznej."
  },
  {
    "id": "R01_KOS_08",
    "section": "Układ kostny - twój szkielet",
    "type": "single_choice",
    "prompt": "Co znajduje się wewnątrz kości i uczestniczy w produkcji komórek krwi?",
    "options": [
      "szpik kostny",
      "sebum",
      "płyn stawowy",
      "keratyna",
      "melanina",
      "pot"
    ],
    "answer": 0,
    "explanation": "Wewnątrz kości znajduje się szpik kostny, w którym produkowane są komórki krwi."
  },
  {
    "id": "R01_KOS_09",
    "section": "Układ kostny - twój szkielet",
    "type": "scenario",
    "prompt": "W stawie powierzchnie kości zaczynają silnie trzeć o siebie. Które dwa elementy normalnie ograniczają ścieranie i tarcie?",
    "options": [
      "chrząstka i płyn stawowy",
      "okostna i szpik kostny",
      "skóra właściwa i sebum",
      "melanina i keratyna",
      "ścięgno i mieszek włosowy",
      "naskórek i tkanka podskórna"
    ],
    "answer": 0,
    "explanation": "Chrząstka chroni nasady kości przed ścieraniem, a płyn stawowy działa jak smar i zmniejsza tarcie."
  },
  {
    "id": "R01_KOS_10",
    "section": "Układ kostny - twój szkielet",
    "type": "match",
    "prompt": "Połącz element kości długiej z jego funkcją lub cechą.",
    "options": null,
    "left": [
      "chrząstka",
      "okostna",
      "tkanka kostna zbita",
      "tkanka kostna gąbczasta",
      "szpik kostny"
    ],
    "right": [
      "chroni kość przed ścieraniem",
      "zewnętrzna błona z tkanki łącznej",
      "zapewnia wytrzymałość i stabilność",
      "jest odporna na nacisk i naprężenia",
      "uczestniczy w produkcji komórek krwi"
    ],
    "answer": {
      "chrząstka": "chroni kość przed ścieraniem",
      "okostna": "zewnętrzna błona z tkanki łącznej",
      "tkanka kostna zbita": "zapewnia wytrzymałość i stabilność",
      "tkanka kostna gąbczasta": "jest odporna na nacisk i naprężenia",
      "szpik kostny": "uczestniczy w produkcji komórek krwi"
    },
    "explanation": "Chrząstka ogranicza ścieranie, okostna okrywa kość, tkanka zbita zapewnia wytrzymałość, gąbczasta znosi nacisk i naprężenia, a szpik uczestniczy w produkcji komórek krwi.",
    "image": "r01_kosc_dluga.jpg"
  },
  {
    "id": "R01_KOS_11",
    "section": "Układ kostny - twój szkielet",
    "type": "multi_select",
    "prompt": "Zaznacz zachowania pomagające dbać o szkielet.",
    "options": [
      "regularna aktywność fizyczna",
      "równomierne obciążanie kręgosłupa",
      "kucanie przy podnoszeniu ciężkich przedmiotów",
      "noszenie odpowiednio dobranych butów",
      "jedzenie produktów bogatych w wapń i fosfor",
      "stałe noszenie ciężaru na jednym ramieniu"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Dbanie o szkielet obejmuje ruch, prawidłowe podnoszenie ciężarów, równomierne obciążanie kręgosłupa, właściwe obuwie oraz dietę bogatą w wapń i fosfor."
  },
  {
    "id": "R01_KOS_12",
    "section": "Układ kostny - twój szkielet",
    "type": "true_false",
    "prompt": "Szkielet dłoni ma 27 kości, a szkielet stopy 26 kości.",
    "options": null,
    "answer": true,
    "explanation": "Dłoń składa się z 27 kości, a stopa z 26 kości. Liczne połączenia umożliwiają precyzyjne ruchy dłoni i stabilną pracę stopy.",
    "image": "r01_kosci_dloni_i_stopy.jpg"
  },
  {
    "id": "R01_RUC_01",
    "section": "Jak porusza się twoje ciało? Układ ruchu",
    "type": "single_choice",
    "prompt": "Co tworzy układ ruchu człowieka?",
    "options": [
      "szkielet i mięśnie szkieletowe",
      "skóra i gruczoły łojowe",
      "układ krwionośny i skóra",
      "szpik kostny i naskórek",
      "melanina i keratyna",
      "gruczoły potowe i mięśnie gładkie"
    ],
    "answer": 0,
    "explanation": "Układ ruchu tworzą szkielet oraz mięśnie szkieletowe. W jego działaniu uczestniczą kości, stawy, ścięgna i mięśnie."
  },
  {
    "id": "R01_RUC_02",
    "section": "Jak porusza się twoje ciało? Układ ruchu",
    "type": "fill_in",
    "prompt": "Mięśnie są przyczepione do kości za pomocą __________, a miejsca stykania się kości to __________.",
    "options": null,
    "answer": [
      "ścięgien",
      "stawy"
    ],
    "altAnswers": [
      [
        "ścięgien",
        "ścięgna"
      ],
      [
        "stawy",
        "staw"
      ]
    ],
    "explanation": "Ścięgna łączą mięśnie z kośćmi, a stawy są miejscami, w których kości stykają się ze sobą."
  },
  {
    "id": "R01_RUC_03",
    "section": "Jak porusza się twoje ciało? Układ ruchu",
    "type": "true_false",
    "prompt": "Podczas skurczu mięsień skraca się i może pociągać kość, do której jest przyczepiony.",
    "options": null,
    "answer": true,
    "explanation": "Skurcz powoduje skrócenie mięśnia, a pociąganie kości przez ścięgno umożliwia ruch."
  },
  {
    "id": "R01_RUC_04",
    "section": "Jak porusza się twoje ciało? Układ ruchu",
    "type": "sequence",
    "prompt": "Ułóż etapy zginania ręki w łokciu w prawidłowej kolejności.",
    "options": null,
    "items": [
      "ścięgno pociąga kość przedramienia",
      "biceps skraca się",
      "ręka zgina się w łokciu",
      "biceps kurczy się"
    ],
    "answer": [
      "biceps kurczy się",
      "biceps skraca się",
      "ścięgno pociąga kość przedramienia",
      "ręka zgina się w łokciu"
    ],
    "explanation": "Podczas zginania ręki biceps kurczy się i skraca, a przez ścięgno pociąga kość przedramienia, co powoduje zgięcie w łokciu.",
    "image": "r01_praca_miesni_reki.jpg"
  },
  {
    "id": "R01_RUC_05",
    "section": "Jak porusza się twoje ciało? Układ ruchu",
    "type": "single_choice",
    "prompt": "Który mięsień kurczy się podczas prostowania ręki w łokciu?",
    "options": [
      "triceps",
      "biceps",
      "mięsień krawiecki",
      "mięsień pośladkowy wielki",
      "mięsień twarzy",
      "mięsień brzucha"
    ],
    "answer": 0,
    "explanation": "Przy prostowaniu ręki kurczy się triceps, a biceps jest rozciągany."
  },
  {
    "id": "R01_RUC_06",
    "section": "Jak porusza się twoje ciało? Układ ruchu",
    "type": "match",
    "prompt": "Połącz element układu ruchu z jego rolą.",
    "options": null,
    "left": [
      "kości",
      "ścięgna",
      "mięśnie",
      "płyn stawowy",
      "chrząstka"
    ],
    "right": [
      "tworzą rusztowanie ciała",
      "łączą mięśnie z kośćmi",
      "wprawiają układ w ruch",
      "działa jak smar",
      "zabezpiecza nasady kości przed ścieraniem"
    ],
    "answer": {
      "kości": "tworzą rusztowanie ciała",
      "ścięgna": "łączą mięśnie z kośćmi",
      "mięśnie": "wprawiają układ w ruch",
      "płyn stawowy": "działa jak smar",
      "chrząstka": "zabezpiecza nasady kości przed ścieraniem"
    },
    "explanation": "Kości tworzą rusztowanie, ścięgna łączą mięśnie z kośćmi, mięśnie wykonują skurcze, płyn stawowy zmniejsza tarcie, a chrząstka chroni nasady kości."
  },
  {
    "id": "R01_RUC_07",
    "section": "Jak porusza się twoje ciało? Układ ruchu",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: biceps, triceps, mięsień krawiecki, chrząstka.",
    "options": null,
    "answer": "chrząstka",
    "explanation": "Biceps, triceps i mięsień krawiecki są mięśniami. Chrząstka jest tkanką pokrywającą m.in. nasady kości w stawach."
  },
  {
    "id": "R01_RUC_08",
    "section": "Jak porusza się twoje ciało? Układ ruchu",
    "type": "multi_select",
    "prompt": "Zaznacz ruchy możliwe dzięki współdziałaniu mięśni i szkieletu.",
    "options": [
      "zginanie części ciała",
      "prostowanie części ciała",
      "obracanie części ciała",
      "wydzielanie sebum",
      "produkcja melaniny",
      "złuszczanie naskórka"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Skurcze mięśni pociągających kości umożliwiają m.in. zginanie, prostowanie i obracanie części ciała."
  },
  {
    "id": "R01_RUC_09",
    "section": "Jak porusza się twoje ciało? Układ ruchu",
    "type": "sort",
    "prompt": "Przyporządkuj opis do odpowiedniej wady postawy.",
    "options": null,
    "items": [
      "boczne skrzywienie kręgosłupa",
      "ciało wygląda jak pochylone w jedną stronę",
      "nadmierne zaokrąglenie górnej części kręgosłupa",
      "na plecach może tworzyć się garb",
      "nadmierne wygięcie dolnej części kręgosłupa",
      "brzuch może być zbyt wypięty do przodu"
    ],
    "categories": [
      "skolioza",
      "kifoza",
      "lordoza"
    ],
    "answer": {
      "skolioza": [
        "boczne skrzywienie kręgosłupa",
        "ciało wygląda jak pochylone w jedną stronę"
      ],
      "kifoza": [
        "nadmierne zaokrąglenie górnej części kręgosłupa",
        "na plecach może tworzyć się garb"
      ],
      "lordoza": [
        "nadmierne wygięcie dolnej części kręgosłupa",
        "brzuch może być zbyt wypięty do przodu"
      ]
    },
    "explanation": "Skolioza jest skrzywieniem bocznym, kifoza to nadmierne zaokrąglenie górnej części kręgosłupa, a lordoza - nadmierne wygięcie jego dolnej części.",
    "image": "r01_wady_postawy.jpg"
  },
  {
    "id": "R01_RUC_10",
    "section": "Jak porusza się twoje ciało? Układ ruchu",
    "type": "scenario",
    "prompt": "Uczeń długo siedzi przy biurku i nosi plecak na jednym ramieniu. Która zmiana nawyków najlepiej pomaga zapobiegać wadom postawy?",
    "options": [
      "proste plecy, stopy oparte na podłodze, przerwy na rozciąganie i plecak na obu ramionach",
      "jeszcze dłuższe siedzenie bez przerw",
      "noszenie ciężaru stale na tym samym ramieniu",
      "unikanie aktywności fizycznej",
      "pochylanie pleców przy siedzeniu",
      "noszenie źle dobranych butów"
    ],
    "answer": 0,
    "explanation": "Prawidłowa pozycja siedząca, regularne przerwy na rozciąganie, aktywność fizyczna i noszenie plecaka na obu ramionach pomagają chronić kręgosłup."
  },
  {
    "id": "R01_RUC_11",
    "section": "Jak porusza się twoje ciało? Układ ruchu",
    "type": "multi_select",
    "prompt": "Zaznacz działania pomagające zapobiegać skrzywieniom kręgosłupa.",
    "options": [
      "regularna aktywność fizyczna",
      "prawidłowa postawa ciała",
      "noszenie plecaka na obu ramionach",
      "przerwy od długiego siedzenia",
      "brak ruchu",
      "stałe pochylanie pleców"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Ruch wzmacnia mięśnie utrzymujące kręgosłup, a prawidłowa postawa, właściwe noszenie plecaka i przerwy od siedzenia ograniczają przeciążenia."
  },
  {
    "id": "R01_RUC_12",
    "section": "Jak porusza się twoje ciało? Układ ruchu",
    "type": "riddle",
    "prompt": "Boczne skrzywienie kręgosłupa to...",
    "options": null,
    "answer": "skolioza",
    "altAnswers": [
      "skolioza"
    ],
    "explanation": "Skolioza to boczne skrzywienie kręgosłupa, przez które ciało może wyglądać jak pochylone w jedną stronę."
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaką powierzchnię może mieć skóra dorosłego mężczyzny?",
    "options": [
      "do około 2 m²",
      "do około 20 cm²",
      "do około 200 m²",
      "dokładnie 1 m²",
      "około 50 cm²",
      "około 20 m²"
    ],
    "answer": 0,
    "explanation": "Skóra jest największym narządem człowieka; u dorosłego mężczyzny może mieć do około 2 m² powierzchni."
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Bliźnięta jednojajowe mają identyczny układ linii papilarnych.",
    "options": null,
    "answer": false,
    "explanation": "Linie papilarne są niepowtarzalne dla każdego człowieka. Nawet bliźnięta jednojajowe mają odmienny ich układ."
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz miejsca, na których mogą występować linie papilarne.",
    "options": [
      "opuszki palców",
      "dłonie",
      "stopy",
      "usta",
      "kość udowa",
      "chrząstka stawowa"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Linie papilarne występują nie tylko na opuszkach palców, ale także na dłoniach, stopach oraz ustach.",
    "image": "r01_linie_papilarne.jpg"
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Melanina występuje m.in. w __________ i mieszkach włosowych, a jej wysokie stężenie częściowo ogranicza syntezę __________ w skórze.",
    "options": null,
    "answer": [
      "naskórku",
      "witaminy D"
    ],
    "altAnswers": [
      [
        "naskórku",
        "naskórek"
      ],
      [
        "witaminy D",
        "witamina D"
      ]
    ],
    "explanation": "Melanina znajduje się m.in. w naskórku, mieszkach włosowych i tęczówce oka. Jej wysokie stężenie częściowo blokuje syntezę witaminy D w skórze."
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W jakich godzinach promieniowanie słoneczne jest najsilniejsze?",
    "options": [
      "10-15",
      "5-8",
      "6-9",
      "16-18",
      "18-21",
      "22-24"
    ],
    "answer": 0,
    "explanation": "Promieniowanie słoneczne jest najsilniejsze w godzinach 10-15, dlatego wtedy szczególnie ważna jest ochrona skóry."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania trądziku młodzieńczego we właściwej kolejności.",
    "options": null,
    "items": [
      "powstają zaskórniki, krosty i stany zapalne",
      "pory skóry się zatykają",
      "wzrasta poziom hormonów",
      "gruczoły produkują nadmierną ilość sebum"
    ],
    "answer": [
      "wzrasta poziom hormonów",
      "gruczoły produkują nadmierną ilość sebum",
      "pory skóry się zatykają",
      "powstają zaskórniki, krosty i stany zapalne"
    ],
    "explanation": "Wzrost poziomu hormonów nasila produkcję sebum, potem pory się zatykają, a następnie pojawiają się zaskórniki, krosty i stany zapalne."
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Skóra Darka czerwienieje po 15 minutach w pełnym słońcu bez ochrony. Przyjmując, że SPF działa tu jako mnożnik czasu ochrony, ile minut teoretycznie daje filtr SPF 30?",
    "options": [
      "450",
      "30",
      "45",
      "150",
      "300",
      "900"
    ],
    "answer": 0,
    "explanation": "Liczba SPF określa, ile razy dłużej można bezpiecznie przebywać na słońcu w porównaniu z brakiem ochrony. 15 × 30 = 450 minut."
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile kości ma przeciętnie dorosły człowiek?",
    "options": [
      "206",
      "300",
      "650",
      "27",
      "26",
      "33"
    ],
    "answer": 0,
    "explanation": "Noworodek ma około 300 kości, ale część z nich zrasta się podczas dorastania. U dorosłego pozostaje 206 kości."
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe informacje liczbowe o kościach i mięśniach.",
    "options": [
      "noworodek ma około 300 kości",
      "dorosły człowiek ma 206 kości",
      "człowiek ma około 650 mięśni",
      "mięsień krawiecki może mieć około 50 cm długości",
      "stopa składa się z 27 kości",
      "dłoń składa się z 26 kości"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Noworodek ma około 300 kości, dorosły 206, człowiek ma około 650 mięśni, a mięsień krawiecki osiąga około 50 cm. Dłoń ma 27 kości, a stopa 26."
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz informację anatomiczną z właściwą liczbą.",
    "options": null,
    "left": [
      "liczba kości noworodka",
      "liczba kości dorosłego",
      "przybliżona liczba mięśni",
      "długość mięśnia krawieckiego",
      "średnia masa mięśnia pośladkowego wielkiego"
    ],
    "right": [
      "300",
      "206",
      "około 650",
      "około 50 cm",
      "około 1 kg"
    ],
    "answer": {
      "liczba kości noworodka": "300",
      "liczba kości dorosłego": "206",
      "przybliżona liczba mięśni": "około 650",
      "długość mięśnia krawieckiego": "około 50 cm",
      "średnia masa mięśnia pośladkowego wielkiego": "około 1 kg"
    },
    "explanation": "W chwili narodzin człowiek ma około 300 kości, dorosły 206; człowiek ma około 650 mięśni, mięsień krawiecki osiąga około 50 cm, a mięsień pośladkowy wielki waży średnio około 1 kg."
  },
  {
    "id": "R01_HARD_11",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Osoba o ciemnej karnacji ma wysokie stężenie melaniny. Dlaczego może potrzebować nieco więcej czasu na słońcu, aby wytworzyć odpowiednią ilość witaminy D?",
    "options": [
      "melanina częściowo ogranicza syntezę witaminy D w skórze",
      "melanina całkowicie zatrzymuje przepływ krwi",
      "ciemna skóra nie ma gruczołów potowych",
      "melanina rozpuszcza witaminę D",
      "ciemna skóra nie ma naskórka",
      "melanina niszczy szpik kostny"
    ],
    "answer": 0,
    "explanation": "Wysokie stężenie melaniny częściowo blokuje syntezę witaminy D w skórze, dlatego do jej wytworzenia może być potrzebny nieco dłuższy kontakt ze słońcem."
  },
  {
    "id": "R01_HARD_12",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż informację niezgodną z pozostałymi: dorosły człowiek ma 206 kości, noworodek ma około 300 kości, człowiek ma około 650 mięśni, dorosły człowiek ma 300 kości.",
    "options": null,
    "answer": "dorosły człowiek ma 300 kości",
    "explanation": "Dorosły człowiek ma 206 kości. Około 300 kości występuje u noworodka, a człowiek ma około 650 mięśni."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r01",
  number: 1,
  title: "Skóra i układ ruchu",
  icon: "🦴",
  sectionOrder: ["Niezwykła skóra człowieka", "Jak dbać o skórę?", "Układ kostny - twój szkielet", "Jak porusza się twoje ciało? Układ ruchu"],
  sectionIcons: {"Niezwykła skóra człowieka": "🧴", "Jak dbać o skórę?": "☀️", "Układ kostny - twój szkielet": "🦴", "Jak porusza się twoje ciało? Układ ruchu": "💪"},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
