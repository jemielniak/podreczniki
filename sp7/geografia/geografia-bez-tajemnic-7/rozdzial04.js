// Skróty sekcji (do identyfikatorów ćwiczeń):
//   ZAT = Struktura zatrudnienia ludności
//   POL = Wpływ zmian politycznych i gospodarczych na strukturę zatrudnienia
//   URB = Urbanizacja w Polsce i Europie
//   MIA = Czynniki rozwoju miast w Polsce
//   SUB = Zmiany w strefach podmiejskich - suburbanizacja
//   WSI = Wpływ migracji na strukturę demograficzną wsi
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_ZAT_01",
    "section": "Struktura zatrudnienia ludności",
    "type": "single_choice",
    "prompt": "Który sektor gospodarki zatrudnia obecnie najwięcej osób w Polsce?",
    "options": [
      "rolnictwo",
      "przemysł ciężki",
      "usługi",
      "górnictwo",
      "budownictwo",
      "leśnictwo"
    ],
    "answer": 2,
    "explanation": "Największy udział w strukturze zatrudnienia w Polsce mają usługi."
  },
  {
    "id": "R04_ZAT_02",
    "section": "Struktura zatrudnienia ludności",
    "type": "sort",
    "prompt": "Przyporządkuj zjawiska do sektora gospodarki, którego dotyczą.",
    "options": null,
    "items": [
      "spadek zatrudnienia wraz z mechanizacją",
      "wysoki udział w Polsce na tle Europy Zachodniej",
      "największy udział w zatrudnieniu w Polsce",
      "szybki wzrost udziału po przemianach gospodarczych"
    ],
    "categories": [
      "rolnictwo",
      "przemysł",
      "usługi"
    ],
    "answer": {
      "rolnictwo": [
        "spadek zatrudnienia wraz z mechanizacją"
      ],
      "przemysł": [
        "wysoki udział w Polsce na tle Europy Zachodniej"
      ],
      "usługi": [
        "największy udział w zatrudnieniu w Polsce",
        "szybki wzrost udziału po przemianach gospodarczych"
      ]
    },
    "image": "r04_struktura_sektorow.jpg",
    "explanation": "Mechanizacja zmniejsza zatrudnienie w rolnictwie, w Polsce udział przemysłu jest wysoki na tle Europy Zachodniej, a usługi mają największy i rosnący udział w zatrudnieniu."
  },
  {
    "id": "R04_ZAT_03",
    "section": "Struktura zatrudnienia ludności",
    "type": "true_false",
    "prompt": "Wraz ze wzrostem mechanizacji i wydajności rolnictwa liczba osób zajmujących się produkcją żywności spada.",
    "options": null,
    "answer": true,
    "explanation": "Rosnąca wydajność rolnictwa pozwala wytwarzać żywność przy mniejszym zatrudnieniu."
  },
  {
    "id": "R04_ZAT_04",
    "section": "Struktura zatrudnienia ludności",
    "type": "fill_in",
    "prompt": "W 2021 roku w Polsce w rolnictwie pracowało __________% zatrudnionych, w przemyśle __________%, a w usługach __________%.",
    "options": null,
    "answer": [
      "8,3",
      "30,6",
      "61,1"
    ],
    "explanation": "Struktura zatrudnienia w Polsce w 2021 roku wynosiła: rolnictwo 8,3%, przemysł 30,6%, usługi 61,1%."
  },
  {
    "id": "R04_ZAT_05",
    "section": "Struktura zatrudnienia ludności",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki wyjaśniające wysoki udział przemysłu w zatrudnieniu w Polsce na tle części krajów Europy Zachodniej.",
    "options": [
      "powstawanie nowych zakładów przemysłowych",
      "niższe koszty pracy niż w Europie Zachodniej",
      "całkowity zanik usług",
      "zakaz inwestycji zagranicznych",
      "brak mechanizacji rolnictwa"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "W Polsce powstało wiele nowych zakładów przemysłowych, a inwestorów przyciągały m.in. niższe koszty pracy niż w Europie Zachodniej."
  },
  {
    "id": "R04_ZAT_06",
    "section": "Struktura zatrudnienia ludności",
    "type": "match",
    "prompt": "Połącz państwo z udziałem zatrudnionych w usługach w 2021 roku.",
    "options": null,
    "left": [
      "Rumunia",
      "Polska",
      "Niemcy",
      "Belgia"
    ],
    "right": [
      "54,4%",
      "61,1%",
      "75%",
      "81,5%"
    ],
    "answer": {
      "Rumunia": "54,4%",
      "Polska": "61,1%",
      "Niemcy": "75%",
      "Belgia": "81,5%"
    },
    "explanation": "W zestawieniu usług największy udział miała Belgia, następnie Niemcy, Polska i Rumunia."
  },
  {
    "id": "R04_ZAT_07",
    "section": "Struktura zatrudnienia ludności",
    "type": "riddle",
    "prompt": "Jaki sektor gospodarki ma największy udział w strukturze zatrudnienia w Polsce oraz wielu krajach europejskich?",
    "options": null,
    "answer": "usługi",
    "altAnswers": [
      "usługi",
      "sektor usługowy"
    ],
    "explanation": "Największy udział mają usługi."
  },
  {
    "id": "R04_ZAT_08",
    "section": "Struktura zatrudnienia ludności",
    "type": "sequence",
    "prompt": "Ułóż etapy zmian struktury zatrudnienia wraz z rozwojem gospodarczym.",
    "options": null,
    "items": [
      "dominacja usług",
      "wzrost zatrudnienia w przemyśle i usługach",
      "dominacja rolnictwa",
      "stabilizacja lub spadek zatrudnienia w przemyśle"
    ],
    "answer": [
      "dominacja rolnictwa",
      "wzrost zatrudnienia w przemyśle i usługach",
      "stabilizacja lub spadek zatrudnienia w przemyśle",
      "dominacja usług"
    ],
    "image": "r04_struktura_sektorow.jpg",
    "explanation": "Wraz z rozwojem maleje znaczenie rolnictwa, rośnie zatrudnienie w przemyśle i usługach, później udział przemysłu stabilizuje się lub spada, a dominują usługi."
  },
  {
    "id": "R04_ZAT_09",
    "section": "Struktura zatrudnienia ludności",
    "type": "scenario",
    "prompt": "W regionie rolnictwo jest coraz bardziej zmechanizowane i wydajne. Coraz mniej osób potrzeba do produkcji tej samej ilości żywności. Jaka zmiana zatrudnienia jest najbardziej zgodna z tym procesem?",
    "options": [
      "wzrost zatrudnienia w rolnictwie",
      "spadek zatrudnienia w rolnictwie i wzrost w przemyśle oraz usługach",
      "zanik sektora usług",
      "spadek wydajności rolnictwa",
      "wzrost zatrudnienia wyłącznie w rolnictwie",
      "brak zmian w strukturze zatrudnienia"
    ],
    "answer": 1,
    "explanation": "Wraz ze wzrostem mechanizacji i wydajności rolnictwa zatrudnienie w rolnictwie spada, a ludzie podejmują pracę w przemyśle i usługach."
  },
  {
    "id": "R04_POL_01",
    "section": "Wpływ zmian politycznych i gospodarczych na strukturę zatrudnienia",
    "type": "single_choice",
    "prompt": "Jaki model gospodarki wprowadzano w Polsce po 1989 roku?",
    "options": [
      "gospodarkę wolnorynkową",
      "gospodarkę wyłącznie rolniczą",
      "gospodarkę bez prywatnych firm",
      "gospodarkę feudalną",
      "gospodarkę bez usług",
      "gospodarkę opartą wyłącznie na eksporcie"
    ],
    "answer": 0,
    "explanation": "Przemiany po 1989 roku obejmowały wprowadzenie gospodarki wolnorynkowej i systemu demokratycznego."
  },
  {
    "id": "R04_POL_02",
    "section": "Wpływ zmian politycznych i gospodarczych na strukturę zatrudnienia",
    "type": "multi_select",
    "prompt": "Zaznacz trudności, z którymi po przemianach ustrojowych musiały zmierzyć się liczne dawne przedsiębiorstwa państwowe.",
    "options": [
      "utrata wschodnich rynków zbytu",
      "niska wydajność pracy",
      "często słaba jakość produktów",
      "przerost zatrudnienia i zacofanie technologiczne",
      "gwałtowny niedobór pracowników we wszystkich branżach",
      "zakaz sprzedaży zakładów prywatnym inwestorom"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do problemów należały utrata wschodnich rynków zbytu, niska wydajność pracy, słaba jakość części produktów oraz przerost zatrudnienia i zacofanie technologiczne w niektórych branżach."
  },
  {
    "id": "R04_POL_03",
    "section": "Wpływ zmian politycznych i gospodarczych na strukturę zatrudnienia",
    "type": "match",
    "prompt": "Połącz miejsce lub branżę z właściwym opisem przemian rynku pracy.",
    "options": null,
    "left": [
      "Łódź",
      "Katowice",
      "Manufaktura",
      "branża IT w Łodzi"
    ],
    "right": [
      "przemysł włókienniczy",
      "górnictwo i przemysł ciężki",
      "zrewitalizowany kompleks dawnej fabryki",
      "zatrudnienie wysoko wykwalifikowanych specjalistów"
    ],
    "answer": {
      "Łódź": "przemysł włókienniczy",
      "Katowice": "górnictwo i przemysł ciężki",
      "Manufaktura": "zrewitalizowany kompleks dawnej fabryki",
      "branża IT w Łodzi": "zatrudnienie wysoko wykwalifikowanych specjalistów"
    },
    "image": "r04_manufaktura_lodz.jpg",
    "explanation": "Łódź była związana z włókiennictwem, Katowice z górnictwem i przemysłem ciężkim, Manufaktura powstała w dawnej fabryce włókienniczej, a w Łodzi rozwija się także branża IT."
  },
  {
    "id": "R04_POL_04",
    "section": "Wpływ zmian politycznych i gospodarczych na strukturę zatrudnienia",
    "type": "true_false",
    "prompt": "W 1988 roku udział przemysłu w strukturze zatrudnienia aglomeracji katowickiej wynosił około 60%.",
    "options": null,
    "answer": true,
    "image": "r04_kopalnia_katowice.jpg",
    "explanation": "U schyłku XX wieku rynek pracy aglomeracji katowickiej był silnie zdominowany przez przemysł, a w 1988 roku jego udział wynosił około 60%."
  },
  {
    "id": "R04_POL_05",
    "section": "Wpływ zmian politycznych i gospodarczych na strukturę zatrudnienia",
    "type": "fill_in",
    "prompt": "W 2003 roku wskaźnik bezrobocia w Polsce przekroczył __________%.",
    "options": null,
    "answer": [
      "20"
    ],
    "explanation": "W 2003 roku stopa bezrobocia w Polsce przekroczyła 20%."
  },
  {
    "id": "R04_POL_06",
    "section": "Wpływ zmian politycznych i gospodarczych na strukturę zatrudnienia",
    "type": "sort",
    "prompt": "Przyporządkuj zjawiska do bezpośrednich skutków zamykania zakładów lub do późniejszych kierunków zmian gospodarczych.",
    "options": null,
    "items": [
      "utrata tysięcy miejsc pracy",
      "wzrost bezrobocia",
      "nowe miejsca pracy w sektorze prywatnym",
      "wzrost zatrudnienia w usługach"
    ],
    "categories": [
      "bezpośrednie skutki zamykania zakładów",
      "późniejsze kierunki zmian"
    ],
    "answer": {
      "bezpośrednie skutki zamykania zakładów": [
        "utrata tysięcy miejsc pracy",
        "wzrost bezrobocia"
      ],
      "późniejsze kierunki zmian": [
        "nowe miejsca pracy w sektorze prywatnym",
        "wzrost zatrudnienia w usługach"
      ]
    },
    "explanation": "Zamykanie zakładów powodowało utratę pracy i wzrost bezrobocia, a z czasem gospodarka wolnorynkowa przyniosła nowe miejsca pracy w sektorze prywatnym, zwłaszcza w usługach."
  },
  {
    "id": "R04_POL_07",
    "section": "Wpływ zmian politycznych i gospodarczych na strukturę zatrudnienia",
    "type": "scenario",
    "prompt": "W mieście zamyka się nierentowną kopalnię, a wielu pracowników traci zatrudnienie. W pierwszym okresie pojawiają się protesty i napięcia społeczne. Jaki skutek dla rynku pracy jest najbardziej bezpośredni?",
    "options": [
      "gwałtowny wzrost zatrudnienia w górnictwie",
      "wzrost bezrobocia",
      "spadek liczby osób poszukujących pracy",
      "zanik sektora usług",
      "wzrost zatrudnienia w rolnictwie",
      "brak zmian na rynku pracy"
    ],
    "answer": 1,
    "image": "r04_kopalnia_katowice.jpg",
    "explanation": "Masowe zwolnienia po zamykaniu kopalń prowadziły do wzrostu bezrobocia."
  },
  {
    "id": "R04_POL_08",
    "section": "Wpływ zmian politycznych i gospodarczych na strukturę zatrudnienia",
    "type": "riddle",
    "prompt": "Które polskie miasto bywa nazywane polskim Manchesterem ze względu na tradycje przemysłu włókienniczego?",
    "options": null,
    "answer": "Łódź",
    "altAnswers": [
      "Łódź",
      "Lodz"
    ],
    "image": "r04_manufaktura_lodz.jpg",
    "explanation": "Łódź jest porównywana z Manchesterem, ponieważ w obu miastach dawniej dominował przemysł włókienniczy."
  },
  {
    "id": "R04_POL_09",
    "section": "Wpływ zmian politycznych i gospodarczych na strukturę zatrudnienia",
    "type": "multi_select",
    "prompt": "Zaznacz zmiany na rynku pracy związane z pandemią Covid-19.",
    "options": [
      "ponad 80% pracujących zdalnie chciało utrzymania tej formy pracy",
      "75% pracodawców po wprowadzeniu pracy zdalnej planowało łączyć ją z pracą stacjonarną",
      "wzrosło znaczenie umiejętności organizacji własnego czasu",
      "wzrosło znaczenie posługiwania się nowoczesnymi technologiami",
      "praca zdalna całkowicie zniknęła po pandemii",
      "zmniejszyło się znaczenie kompetencji cyfrowych"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Praca zdalna stała się powszechniejsza, wielu pracowników chciało jej utrzymania, pracodawcy planowali łączyć ją z pracą stacjonarną, a wzrosło znaczenie organizacji własnego czasu i kompetencji cyfrowych."
  },
  {
    "id": "R04_URB_01",
    "section": "Urbanizacja w Polsce i Europie",
    "type": "riddle",
    "prompt": "Jak nazywa się złożony proces obejmujący rozwój miast, wzrost udziału ludności miejskiej i upowszechnianie miejskiego stylu życia?",
    "options": null,
    "answer": "urbanizacja",
    "altAnswers": [
      "urbanizacja"
    ],
    "explanation": "To urbanizacja, która przebiega na kilku płaszczyznach: formalnej, przestrzennej, demograficznej, ekonomicznej i społecznej."
  },
  {
    "id": "R04_URB_02",
    "section": "Urbanizacja w Polsce i Europie",
    "type": "multi_select",
    "prompt": "Zaznacz płaszczyzny procesu urbanizacji.",
    "options": [
      "formalna",
      "przestrzenna",
      "demograficzna",
      "ekonomiczna",
      "społeczna",
      "geologiczna"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Urbanizacja ma wymiar formalny, przestrzenny, demograficzny, ekonomiczny i społeczny."
  },
  {
    "id": "R04_URB_03",
    "section": "Urbanizacja w Polsce i Europie",
    "type": "fill_in",
    "prompt": "Wskaźnik urbanizacji to odsetek ludności mieszkającej w __________. W Polsce wynosi on obecnie __________%.",
    "options": null,
    "answer": [
      "miastach",
      "59,4"
    ],
    "explanation": "Wskaźnik urbanizacji określa udział ludności miejskiej. W Polsce wynosi 59,4%."
  },
  {
    "id": "R04_URB_04",
    "section": "Urbanizacja w Polsce i Europie",
    "type": "true_false",
    "prompt": "Wskaźnik urbanizacji w Polsce jest niższy niż w większości państw europejskich i od kilku lat spada.",
    "options": null,
    "answer": true,
    "image": "r04_panorama_warszawy.jpg",
    "explanation": "Spadek wiąże się m.in. z migracjami mieszkańców miast do stref podmiejskich oraz ujemnym przyrostem naturalnym w dużych miastach."
  },
  {
    "id": "R04_URB_05",
    "section": "Urbanizacja w Polsce i Europie",
    "type": "multi_select",
    "prompt": "Zaznacz kryteria nadania wsi praw miejskich w Polsce.",
    "options": [
      "liczba mieszkańców przekracza 2 tys.",
      "minimum 60% mieszkańców utrzymuje się z działalności pozarolniczej",
      "w centrum nie ma zabudowy zagrodowej",
      "istnieje miejska infrastruktura techniczna",
      "miejscowość musi leżeć nad morzem",
      "miejscowość musi być stolicą województwa"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do kryteriów należą: ponad 2 tys. mieszkańców, co najmniej 60% mieszkańców utrzymujących się z działalności pozarolniczej, brak zabudowy zagrodowej w centrum i miejska infrastruktura techniczna."
  },
  {
    "id": "R04_URB_06",
    "section": "Urbanizacja w Polsce i Europie",
    "type": "match",
    "prompt": "Połącz obszar z informacją o poziomie urbanizacji.",
    "options": null,
    "left": [
      "województwo śląskie",
      "województwo podkarpackie",
      "Polska"
    ],
    "right": [
      "ponad 75%",
      "niewiele ponad 40%",
      "59,4%"
    ],
    "answer": {
      "województwo śląskie": "ponad 75%",
      "województwo podkarpackie": "niewiele ponad 40%",
      "Polska": "59,4%"
    },
    "explanation": "W województwie śląskim udział ludności miejskiej przekracza 75%, w podkarpackim wynosi niewiele ponad 40%, a w całej Polsce 59,4%."
  },
  {
    "id": "R04_URB_07",
    "section": "Urbanizacja w Polsce i Europie",
    "type": "single_choice",
    "prompt": "Jak nazywa się zespół miast o podobnej randze, bez jednego wyraźnie dominującego ośrodka?",
    "options": [
      "aglomeracja monocentryczna",
      "konurbacja",
      "wieś podmiejska",
      "strefa przemysłowa",
      "dzielnica satelicka",
      "obszar rolniczy"
    ],
    "answer": 1,
    "image": "r04_konurbacja_gornoslaska.jpg",
    "explanation": "Taki zespół to aglomeracja policentryczna, nazywana też konurbacją; przykładem jest konurbacja górnośląska."
  },
  {
    "id": "R04_URB_08",
    "section": "Urbanizacja w Polsce i Europie",
    "type": "single_choice",
    "prompt": "Ile miast było w Polsce w 2022 roku?",
    "options": [
      "764",
      "864",
      "964",
      "1064",
      "1164",
      "1264"
    ],
    "answer": 2,
    "image": "r04_panorama_warszawy.jpg",
    "explanation": "W 2022 roku w Polsce były 964 miasta."
  },
  {
    "id": "R04_URB_09",
    "section": "Urbanizacja w Polsce i Europie",
    "type": "odd_one_out",
    "prompt": "Wskaż miasto, które nie jest miastem satelickim aglomeracji warszawskiej: Legionowo, Piaseczno, Pruszków, Wołomin, Katowice.",
    "options": null,
    "answer": "Katowice",
    "explanation": "Legionowo, Piaseczno, Pruszków i Wołomin są miastami satelickimi aglomeracji warszawskiej. Katowice należą do konurbacji górnośląskiej."
  },
  {
    "id": "R04_MIA_01",
    "section": "Czynniki rozwoju miast w Polsce",
    "type": "single_choice",
    "prompt": "Który czynnik przyrodniczy w przeszłości sprzyjał lokalizacji i rozwojowi wielu dużych polskich miast?",
    "options": [
      "położenie nad rzeką",
      "brak dróg",
      "duża odległość od szlaków handlowych",
      "brak dostępu do wody",
      "zakaz handlu",
      "brak funkcji administracyjnych"
    ],
    "answer": 0,
    "explanation": "Położenie nad rzeką dawało dostęp do wody i szlaku komunikacyjnego, dlatego nad Wisłą i Odrą leży wiele dużych miast."
  },
  {
    "id": "R04_MIA_02",
    "section": "Czynniki rozwoju miast w Polsce",
    "type": "match",
    "prompt": "Połącz miasto z czynnikiem lub przykładem, który wiązał się z jego rozwojem.",
    "options": null,
    "left": [
      "Wrocław",
      "Katowice",
      "Lublin",
      "Gdynia"
    ],
    "right": [
      "przecięcie szlaku bursztynowego i solnego",
      "zasoby węgla kamiennego",
      "funkcja administracyjna",
      "decyzja o budowie portu"
    ],
    "answer": {
      "Wrocław": "przecięcie szlaku bursztynowego i solnego",
      "Katowice": "zasoby węgla kamiennego",
      "Lublin": "funkcja administracyjna",
      "Gdynia": "decyzja o budowie portu"
    },
    "image": "r04_rynek_wroclaw.jpg",
    "explanation": "Wrocław korzystał ze szlaków handlowych, Katowice z zasobów węgla, Lublin z funkcji administracyjnej, a rozwój Gdyni wsparła decyzja polityczna o budowie portu."
  },
  {
    "id": "R04_MIA_03",
    "section": "Czynniki rozwoju miast w Polsce",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje usługowe miast współcześnie ważne dla ich rozwoju.",
    "options": [
      "akademicka",
      "handlowa",
      "kulturalna",
      "rozrywkowa",
      "turystyczna",
      "obronna"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Współczesne miasta rozwijają się dzięki m.in. funkcjom akademickiej, handlowej, kulturalnej, rozrywkowej i turystycznej."
  },
  {
    "id": "R04_MIA_04",
    "section": "Czynniki rozwoju miast w Polsce",
    "type": "scenario",
    "prompt": "Po odzyskaniu niepodległości państwo potrzebuje nowoczesnego portu, a Gdańsk nie jest wówczas częścią kraju. W którym mieście decyzja polityczna prowadzi do budowy nowego portu?",
    "options": [
      "Gdynia",
      "Lublin",
      "Katowice",
      "Wrocław",
      "Kraków",
      "Łódź"
    ],
    "answer": 0,
    "image": "r04_port_gdynia.jpg",
    "explanation": "W okresie międzywojennym podjęto decyzję o budowie portu w Gdyni."
  },
  {
    "id": "R04_MIA_05",
    "section": "Czynniki rozwoju miast w Polsce",
    "type": "riddle",
    "prompt": "Jak nazywa się najstarsza uczelnia w Polsce, będąca ważnym ośrodkiem akademickim Krakowa?",
    "options": null,
    "answer": "Uniwersytet Jagielloński",
    "altAnswers": [
      "Uniwersytet Jagielloński",
      "UJ"
    ],
    "explanation": "Uniwersytet Jagielloński w Krakowie jest najstarszą uczelnią w Polsce i ważnym ośrodkiem akademickim."
  },
  {
    "id": "R04_MIA_06",
    "section": "Czynniki rozwoju miast w Polsce",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do czynników związanych z położeniem i zasobami albo do funkcji i decyzji człowieka.",
    "options": null,
    "items": [
      "położenie nad rzeką",
      "położenie na wybrzeżu",
      "zasoby węgla kamiennego",
      "funkcja administracyjna",
      "ośrodek akademicki",
      "decyzja o budowie portu"
    ],
    "categories": [
      "położenie i zasoby",
      "funkcje i decyzje"
    ],
    "answer": {
      "położenie i zasoby": [
        "położenie nad rzeką",
        "położenie na wybrzeżu",
        "zasoby węgla kamiennego"
      ],
      "funkcje i decyzje": [
        "funkcja administracyjna",
        "ośrodek akademicki",
        "decyzja o budowie portu"
      ]
    },
    "explanation": "Rzeki, wybrzeże i surowce są związane z położeniem lub zasobami, a funkcje administracyjne, uczelnie i decyzja o budowie portu wynikają z działalności człowieka."
  },
  {
    "id": "R04_MIA_07",
    "section": "Czynniki rozwoju miast w Polsce",
    "type": "true_false",
    "prompt": "Współczesne miasta w Polsce nadal pełnią funkcję obronną jako jeden z głównych czynników rozwoju.",
    "options": null,
    "answer": false,
    "explanation": "Znaczenie niektórych dawnych funkcji spadło; współczesne miasta w Polsce nie pełnią już funkcji obronnych."
  },
  {
    "id": "R04_MIA_08",
    "section": "Czynniki rozwoju miast w Polsce",
    "type": "multi_select",
    "prompt": "Zaznacz działania sprzyjające zrównoważonemu rozwojowi miast.",
    "options": [
      "zwiększanie powierzchni terenów zielonych",
      "ograniczanie ruchu samochodowego w centrach",
      "ochrona i promocja dziedzictwa kulturowego",
      "likwidacja terenów rekreacyjnych",
      "zwiększanie zużycia wody i energii",
      "chaotyczne zabudowywanie wolnej przestrzeni"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r04_ogrod_dach_uw.jpg",
    "explanation": "Przykłady obejmują zwiększanie powierzchni terenów zielonych, ograniczanie ruchu samochodowego w centrach oraz ochronę i promocję dziedzictwa kulturowego."
  },
  {
    "id": "R04_MIA_09",
    "section": "Czynniki rozwoju miast w Polsce",
    "type": "fill_in",
    "prompt": "Miasto, które zaspokaja potrzeby mieszkańców i jednocześnie dba o zachowanie ograniczonych zasobów, to miasto __________.",
    "options": null,
    "answer": [
      "zrównoważone"
    ],
    "explanation": "Miasto zrównoważone zaspokaja potrzeby mieszkańców i jednocześnie dba o zachowanie ograniczonych zasobów."
  },
  {
    "id": "R04_SUB_01",
    "section": "Zmiany w strefach podmiejskich - suburbanizacja",
    "type": "riddle",
    "prompt": "Jak nazywa się proces przemieszczania się ludności z obszarów miejskich do strefy podmiejskiej, któremu towarzyszy rozrastanie się miejscowości wokół miasta?",
    "options": null,
    "answer": "suburbanizacja",
    "altAnswers": [
      "suburbanizacja"
    ],
    "image": "r04_domki_podmiejskie.jpg",
    "explanation": "To suburbanizacja."
  },
  {
    "id": "R04_SUB_02",
    "section": "Zmiany w strefach podmiejskich - suburbanizacja",
    "type": "multi_select",
    "prompt": "Zaznacz cechy osób, które najczęściej przenoszą się z dużych miast do stref podmiejskich.",
    "options": [
      "stabilna sytuacja zawodowa",
      "dobre wykształcenie",
      "odpowiednio wysokie dochody",
      "rodzina z dziećmi lub planująca potomstwo",
      "brak jakiegokolwiek źródła dochodu",
      "zatrudnienie wyłącznie w rolnictwie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Poza miasto przenoszą się przeważnie osoby o stabilnej sytuacji zawodowej, dobrze wykształcone, odpowiednio zamożne, często rodziny z dziećmi lub planujące potomstwo."
  },
  {
    "id": "R04_SUB_03",
    "section": "Zmiany w strefach podmiejskich - suburbanizacja",
    "type": "scenario",
    "prompt": "Mieszkaniec przenosi się z Warszawy do Podkowy Leśnej, ale nadal pracuje w stolicy. Wybiera miejscowość przy trasie WKD. Która cecha lokalizacji ma dla niego kluczowe znaczenie?",
    "options": [
      "dobre połączenie transportowe z Warszawą",
      "duża odległość od jakiejkolwiek komunikacji",
      "brak dróg dojazdowych",
      "konieczność pracy w rolnictwie",
      "brak usług i sklepów",
      "całkowity brak kontaktu z miastem"
    ],
    "answer": 0,
    "image": "r04_kolej_wkd.jpg",
    "explanation": "Dobra komunikacja ze stolicą umożliwia szybki dojazd do pracy i sprzyja rozwojowi miejscowości podmiejskich."
  },
  {
    "id": "R04_SUB_04",
    "section": "Zmiany w strefach podmiejskich - suburbanizacja",
    "type": "true_false",
    "prompt": "Osoba, która wyprowadza się z miasta do miejscowości podmiejskiej mającej formalnie status wsi, może z administracyjnego punktu widzenia stać się mieszkańcem wsi.",
    "options": null,
    "answer": true,
    "explanation": "Suburbanizacja może prowadzić do przenoszenia się miejskiego stylu życia na obszary, które administracyjnie pozostają wsiami."
  },
  {
    "id": "R04_SUB_05",
    "section": "Zmiany w strefach podmiejskich - suburbanizacja",
    "type": "multi_select",
    "prompt": "Zaznacz problemy, które mogą towarzyszyć chaotycznej suburbanizacji.",
    "options": [
      "chaos przestrzenny",
      "wysokie koszty infrastruktury",
      "uzależnienie od samochodu",
      "brak usług w bezpośrednim sąsiedztwie",
      "czasochłonne dojazdy",
      "automatyczny spadek kosztów obsługi transportowej"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "r04_domki_podmiejskie.jpg",
    "explanation": "Rozproszona zabudowa zwiększa koszty dróg, kanalizacji i oświetlenia, może powodować braki komunikacji zbiorowej i usług oraz wydłużać codzienne dojazdy."
  },
  {
    "id": "R04_SUB_06",
    "section": "Zmiany w strefach podmiejskich - suburbanizacja",
    "type": "fill_in",
    "prompt": "Szacowany roczny koszt chaosu przestrzennego wynosi __________ mld zł, z czego dodatkowa obsługa transportowa pochłania __________ mld zł.",
    "options": null,
    "answer": [
      "84",
      "31,5"
    ],
    "explanation": "Roczny koszt chaosu przestrzennego oszacowano na 84 mld zł, w tym 31,5 mld zł na dodatkową obsługę transportową."
  },
  {
    "id": "R04_SUB_07",
    "section": "Zmiany w strefach podmiejskich - suburbanizacja",
    "type": "match",
    "prompt": "Połącz zjawisko obserwowane w gminie Lesznowola z jego wyjaśnieniem.",
    "options": null,
    "left": [
      "wzrost liczby mieszkańców",
      "wzrost udziału osób w wieku przedprodukcyjnym",
      "położenie około 20 km od Warszawy"
    ],
    "right": [
      "dynamiczny napływ ludności",
      "osiedlanie się rodzin z dziećmi",
      "bliskość dużego ośrodka miejskiego"
    ],
    "answer": {
      "wzrost liczby mieszkańców": "dynamiczny napływ ludności",
      "wzrost udziału osób w wieku przedprodukcyjnym": "osiedlanie się rodzin z dziećmi",
      "położenie około 20 km od Warszawy": "bliskość dużego ośrodka miejskiego"
    },
    "explanation": "Lesznowola szybko zyskuje mieszkańców, a przeprowadzają się tam często rodziny z dziećmi, co zwiększa udział ludności w wieku przedprodukcyjnym."
  },
  {
    "id": "R04_SUB_08",
    "section": "Zmiany w strefach podmiejskich - suburbanizacja",
    "type": "true_false",
    "prompt": "W Bolechowicach koło Krakowa między 1997 a 2014 rokiem zmniejszyła się powierzchnia gruntów ornych, a wzrosła powierzchnia terenów związanych z zabudową mieszkaniową i ogrodami.",
    "options": null,
    "answer": true,
    "image": "r04_bolechowice_zabudowa.jpg",
    "explanation": "Suburbanizacja w strefie podmiejskiej Krakowa prowadziła do przekształcania części terenów rolniczych w tereny zabudowane i związane z funkcją mieszkaniową."
  },
  {
    "id": "R04_SUB_09",
    "section": "Zmiany w strefach podmiejskich - suburbanizacja",
    "type": "sequence",
    "prompt": "Ułóż łańcuch zmian prowadzących do rozwoju strefy podmiejskiej.",
    "options": null,
    "items": [
      "zmiana zagospodarowania terenu pod miastem",
      "wzrost zamożności i oczekiwań mieszkańców",
      "rozwój miasta i wzrost miejsc pracy",
      "przeprowadzka części mieszkańców do strefy podmiejskiej",
      "zmiana struktury demograficznej strefy podmiejskiej"
    ],
    "answer": [
      "rozwój miasta i wzrost miejsc pracy",
      "wzrost zamożności i oczekiwań mieszkańców",
      "przeprowadzka części mieszkańców do strefy podmiejskiej",
      "zmiana struktury demograficznej strefy podmiejskiej",
      "zmiana zagospodarowania terenu pod miastem"
    ],
    "explanation": "Rozwój miasta sprzyja wzrostowi miejsc pracy i płac, rośnie zamożność i oczekiwania mieszkańców, część z nich przenosi się pod miasto, a następnie zmieniają się struktura ludności i zagospodarowanie terenu."
  },
  {
    "id": "R04_WSI_01",
    "section": "Wpływ migracji na strukturę demograficzną wsi",
    "type": "multi_select",
    "prompt": "Zaznacz przyczyny wyludniania się wsi położonych z dala od dużych miast.",
    "options": [
      "trudności ze znalezieniem pracy",
      "mniejsze niż w mieście zarobki",
      "problemy z dostępem do usług i komunikacji",
      "wyjazdy w celach edukacyjnych",
      "nadmiar dobrze płatnych miejsc pracy",
      "bardzo łatwy dostęp do wszystkich usług"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do przyczyn należą trudności ze znalezieniem pracy, niższe zarobki, problemy z dostępem do usług i komunikacji oraz wyjazdy edukacyjne."
  },
  {
    "id": "R04_WSI_02",
    "section": "Wpływ migracji na strukturę demograficzną wsi",
    "type": "true_false",
    "prompt": "Procesy wyludniania się wsi zachodzą głównie w miejscowościach położonych z dala od dużych miast, często w pobliżu granic województw.",
    "options": null,
    "answer": true,
    "explanation": "Najsilniej dotknięte są peryferyjne miejscowości oddalone od dużych ośrodków miejskich."
  },
  {
    "id": "R04_WSI_03",
    "section": "Wpływ migracji na strukturę demograficzną wsi",
    "type": "sequence",
    "prompt": "Ułóż możliwy ciąg skutków wyludniania się wsi.",
    "options": null,
    "items": [
      "ograniczenie usług i inwestycji",
      "spadek liczby mieszkańców",
      "kolejne wyjazdy mieszkańców",
      "mniej klientów i podatników"
    ],
    "answer": [
      "spadek liczby mieszkańców",
      "mniej klientów i podatników",
      "ograniczenie usług i inwestycji",
      "kolejne wyjazdy mieszkańców"
    ],
    "explanation": "Mniejsza liczba mieszkańców oznacza mniej klientów i podatników, co osłabia firmy oraz dochody samorządu, ogranicza usługi i inwestycje, a to może zachęcać kolejne osoby do wyjazdu."
  },
  {
    "id": "R04_WSI_04",
    "section": "Wpływ migracji na strukturę demograficzną wsi",
    "type": "single_choice",
    "prompt": "Która grupa najczęściej opuszcza wyludniające się wsie, zmieniając ich strukturę wieku?",
    "options": [
      "ludzie młodzi w wieku produkcyjnym",
      "wyłącznie osoby po 80. roku życia",
      "wyłącznie dzieci",
      "wyłącznie emeryci",
      "wszyscy mieszkańcy w równym stopniu",
      "wyłącznie rolnicy po 65. roku życia"
    ],
    "answer": 0,
    "image": "r04_wies_wizajny.jpg",
    "explanation": "Do miast wyjeżdżają przede wszystkim ludzie młodzi w wieku produkcyjnym, a na wsi pozostaje większy udział osób starszych."
  },
  {
    "id": "R04_WSI_05",
    "section": "Wpływ migracji na strukturę demograficzną wsi",
    "type": "fill_in",
    "prompt": "W gminie Wiżajny na 100 mężczyzn przypada __________ kobiet, a w całej Polsce __________ kobiet na 100 mężczyzn.",
    "options": null,
    "answer": [
      "95",
      "107"
    ],
    "explanation": "W gminie Wiżajny przypada 95 kobiet na 100 mężczyzn, a w całej Polsce 107 kobiet."
  },
  {
    "id": "R04_WSI_06",
    "section": "Wpływ migracji na strukturę demograficzną wsi",
    "type": "scenario",
    "prompt": "W małej wsi ubywa dzieci, szkołę łączy się z placówką w innej miejscowości, a uczniowie muszą dojeżdżać kilkanaście kilometrów. Jaki proces najlepiej wyjaśnia ten problem?",
    "options": [
      "wyludnianie się wsi",
      "gwałtowna suburbanizacja",
      "wzrost liczby uczniów",
      "rozwój górnictwa",
      "wzrost urbanizacji formalnej wsi",
      "rozbudowa usług publicznych"
    ],
    "answer": 0,
    "explanation": "Spadek liczby ludności i uczniów może prowadzić do łączenia lub likwidacji małych szkół oraz pogorszenia dostępności usług."
  },
  {
    "id": "R04_WSI_07",
    "section": "Wpływ migracji na strukturę demograficzną wsi",
    "type": "riddle",
    "prompt": "Rozwiń skrót PGR.",
    "options": null,
    "answer": "Państwowe Gospodarstwo Rolne",
    "altAnswers": [
      "Państwowe Gospodarstwo Rolne",
      "Państwowe Gospodarstwa Rolne"
    ],
    "image": "r04_dawny_pgr.jpg",
    "explanation": "PGR to Państwowe Gospodarstwo Rolne; były to należące do państwa wielkoobszarowe przedsiębiorstwa rolne."
  },
  {
    "id": "R04_WSI_08",
    "section": "Wpływ migracji na strukturę demograficzną wsi",
    "type": "multi_select",
    "prompt": "Zaznacz skutki wyludniania się wsi.",
    "options": [
      "starzenie się miejscowej ludności",
      "przewaga mężczyzn w strukturze płci",
      "trudności lokalnych firm i instytucji",
      "stały wzrost liczby klientów sklepów",
      "automatyczny wzrost dochodów samorządu",
      "wzrost liczby uczniów w małych szkołach"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r04_wies_wizajny.jpg",
    "explanation": "Wyludnianie prowadzi do starzenia się ludności, przewagi mężczyzn w strukturze płci oraz problemów firm i instytucji wynikających z mniejszej liczby klientów."
  },
  {
    "id": "R04_WSI_09",
    "section": "Wpływ migracji na strukturę demograficzną wsi",
    "type": "match",
    "prompt": "Połącz przyczynę ze skutkiem przemian na wsi.",
    "options": null,
    "left": [
      "likwidacja PGR-ów",
      "brak perspektyw na lepszą przyszłość",
      "mniej osób płacących podatki",
      "częstsze wyjazdy kobiet"
    ],
    "right": [
      "drastyczny wzrost bezrobocia",
      "wyjazd młodych ludzi do miast",
      "spadek dochodów i inwestycji w gminie",
      "spadek współczynnika feminizacji"
    ],
    "answer": {
      "likwidacja PGR-ów": "drastyczny wzrost bezrobocia",
      "brak perspektyw na lepszą przyszłość": "wyjazd młodych ludzi do miast",
      "mniej osób płacących podatki": "spadek dochodów i inwestycji w gminie",
      "częstsze wyjazdy kobiet": "spadek współczynnika feminizacji"
    },
    "explanation": "Likwidacja PGR-ów zwiększyła bezrobocie, brak perspektyw skłaniał młodych do wyjazdu, mniej podatników obniżało dochody samorządu, a częstszy wyjazd kobiet obniżał współczynnik feminizacji."
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz wszystkie poprawne porównania struktury zatrudnienia Polski z Rumunią, Niemcami i Belgią w 2021 roku.",
    "options": [
      "udział rolnictwa w Polsce był niższy niż w Rumunii",
      "udział rolnictwa w Polsce był wyższy niż w Niemczech i Belgii",
      "udział przemysłu w Polsce był wyższy niż w Niemczech i Belgii",
      "udział usług w Polsce był niższy niż w Niemczech i Belgii",
      "udział usług w Polsce był niższy niż w Rumunii",
      "udział przemysłu w Polsce był niższy niż w Belgii"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Polska miała niższy udział rolnictwa niż Rumunia, ale wyższy niż Niemcy i Belgia; wyższy udział przemysłu niż Niemcy i Belgia; oraz niższy udział usług niż Niemcy i Belgia, ale wyższy niż Rumunia."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W 1988 roku udział przemysłu w strukturze zatrudnienia wynosił około __________% w aglomeracji łódzkiej i około __________% w aglomeracji katowickiej. W 2020 roku udział usług w Łodzi wynosił __________%, a w Katowicach __________%.",
    "options": null,
    "answer": [
      "50",
      "60",
      "76",
      "80"
    ],
    "explanation": "Przed transformacją przemysł miał około 50% udziału w aglomeracji łódzkiej i około 60% w katowickiej. W 2020 roku usługi stanowiły 76% zatrudnienia w Łodzi i 80% w Katowicach."
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Miasto było największym w Polsce ośrodkiem przemysłu włókienniczego. Po zamknięciu wielu zakładów część dawnych fabryk poddano rewitalizacji, a obecnie rozwija się tam m.in. branża IT. O jakie miasto chodzi?",
    "options": [
      "Łódź",
      "Katowice",
      "Gdynia",
      "Lublin",
      "Szczecin",
      "Białystok"
    ],
    "answer": 0,
    "image": "r04_manufaktura_lodz.jpg",
    "explanation": "Opis dotyczy Łodzi: dawnego centrum włókiennictwa, które po transformacji zmieniło strukturę zatrudnienia i wykorzystało część zabudowy poprzemysłowej w nowych funkcjach."
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest firmą otwierającą nową fabrykę w Łodzi: Bosch, Siemens, Dell, Gillette, Manufaktura.",
    "options": null,
    "answer": "Manufaktura",
    "explanation": "Bosch, Siemens, Dell i Gillette otworzyły zakłady w Łodzi. Manufaktura to zrewitalizowany kompleks dawnej fabryki włókienniczej."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W Szwecji za miasto uznaje się jednostkę osadniczą liczącą ponad __________ mieszkańców, w której średnia odległość między zabudowaniami nie przekracza __________ m.",
    "options": null,
    "answer": [
      "200",
      "200"
    ],
    "explanation": "W Szwecji obowiązuje próg ponad 200 mieszkańców i maksymalnie 200 m średniej odległości między zabudowaniami."
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz pojęcie lub miejscowość z właściwym opisem dotyczącym zespołów miejskich.",
    "options": null,
    "left": [
      "aglomeracja warszawska",
      "konurbacja górnośląska",
      "Legionowo",
      "Katowice"
    ],
    "right": [
      "aglomeracja monocentryczna",
      "aglomeracja policentryczna",
      "miasto satelickie Warszawy",
      "jedno z miast konurbacji górnośląskiej"
    ],
    "answer": {
      "aglomeracja warszawska": "aglomeracja monocentryczna",
      "konurbacja górnośląska": "aglomeracja policentryczna",
      "Legionowo": "miasto satelickie Warszawy",
      "Katowice": "jedno z miast konurbacji górnośląskiej"
    },
    "image": "r04_konurbacja_gornoslaska.jpg",
    "explanation": "Aglomeracja warszawska ma charakter monocentryczny, konurbacja górnośląska policentryczny, Legionowo jest przykładem miasta satelickiego Warszawy, a Katowice współtworzą konurbację górnośląską."
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz poprawne pary miasto - czynnik rozwoju.",
    "options": [
      "Wrocław - przecięcie szlaków bursztynowego i solnego",
      "Katowice - zasoby węgla kamiennego",
      "Lublin - funkcja administracyjna",
      "Gdynia - decyzja o budowie portu",
      "Kraków - największy port lotniczy w Polsce",
      "Szczecin - najstarsza uczelnia w Polsce"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Wrocław rozwijał się m.in. dzięki przecięciu szlaków handlowych, Katowice dzięki węglowi kamiennemu, Lublin pełni funkcję administracyjną, a Gdynia rozwinęła się wskutek decyzji o budowie portu."
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Chaos przestrzenny oszacowano na __________ mld zł rocznie, a samą dodatkową obsługę transportową na __________ mld zł.",
    "options": null,
    "answer": [
      "84",
      "31,5"
    ],
    "image": "r04_domki_podmiejskie.jpg",
    "explanation": "Koszt chaosu przestrzennego oszacowano na 84 mld zł rocznie, w tym 31,5 mld zł na dodatkową obsługę transportową."
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Gmina leży około 20 km na południe od Warszawy. Szybko rośnie w niej liczba mieszkańców, a napływają głównie rodziny z dziećmi. Jaka zmiana struktury wieku jest najbardziej prawdopodobna w takiej sytuacji?",
    "options": [
      "wzrost udziału wieku przedprodukcyjnego",
      "gwałtowny spadek liczby dzieci",
      "dominacja wieku poprodukcyjnego",
      "zanik wieku produkcyjnego",
      "brak zmian w strukturze wieku",
      "przewaga osób powyżej 85 lat"
    ],
    "answer": 0,
    "explanation": "W Lesznowoli napływ rodzin z dziećmi zwiększył udział ludności w wieku przedprodukcyjnym."
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Na 100 mężczyzn w gminie Wiżajny przypada __________ kobiet, natomiast w całej Polsce __________ kobiet na 100 mężczyzn.",
    "options": null,
    "answer": [
      "95",
      "107"
    ],
    "image": "r04_wies_wizajny.jpg",
    "explanation": "Różnica 95 do 107 pokazuje lokalną przewagę liczby mężczyzn, związaną m.in. z częstszymi wyjazdami kobiet ze wsi."
  },
  {
    "id": "R04_HARD_11",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz informacje dotyczące Państwowych Gospodarstw Rolnych i skutków ich likwidacji.",
    "options": [
      "były państwowymi wielkoobszarowymi przedsiębiorstwami rolnymi",
      "szczególnie liczne były m.in. na terenach dzisiejszego województwa zachodniopomorskiego",
      "większość zamknięto po zmianach ustrojowych w latach 90.",
      "po sprzedaży prywatnym właścicielom zatrudnienie było zwykle mniejsze niż wcześniej",
      "wysokie bezrobocie przyspieszało wyludnianie tych miejscowości",
      "po likwidacji PGR-ów zatrudnienie na wsi zawsze rosło"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "r04_dawny_pgr.jpg",
    "explanation": "PGR-y były państwowymi wielkoobszarowymi przedsiębiorstwami rolnymi. Wiele działało na ziemiach przyłączonych po II wojnie światowej. Po ich zamykaniu w latach 90. zatrudnienie silnie spadło, a wysokie bezrobocie przyspieszyło wyludnianie wsi popegeerowskich."
  },
  {
    "id": "R04_HARD_12",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do strefy podmiejskiej dużego miasta albo do wyludniającej się wsi peryferyjnej.",
    "options": null,
    "items": [
      "napływ rodzin z dziećmi",
      "wzrost udziału osób lepiej wykształconych",
      "przekształcanie gruntów rolnych w budowlane",
      "presja na rozbudowę infrastruktury",
      "odpływ młodych ludzi",
      "starzenie się ludności",
      "przewaga mężczyzn w strukturze płci",
      "spadek liczby klientów lokalnych usług"
    ],
    "categories": [
      "strefa podmiejska",
      "wieś peryferyjna"
    ],
    "answer": {
      "strefa podmiejska": [
        "napływ rodzin z dziećmi",
        "wzrost udziału osób lepiej wykształconych",
        "przekształcanie gruntów rolnych w budowlane",
        "presja na rozbudowę infrastruktury"
      ],
      "wieś peryferyjna": [
        "odpływ młodych ludzi",
        "starzenie się ludności",
        "przewaga mężczyzn w strukturze płci",
        "spadek liczby klientów lokalnych usług"
      ]
    },
    "explanation": "Strefy podmiejskie przyciągają zamożniejszych, lepiej wykształconych mieszkańców i rozwijają zabudowę mieszkaniową, natomiast wsie peryferyjne tracą młodych ludzi, starzeją się i mają coraz słabszą bazę usługową."
  }
];

const KID_PROMPTS = {};

const chapter = {
  "id": "r04",
  "number": 4,
  "title": "Struktura zatrudnienia ludności i procesy urbanizacji",
  "icon": "🏙️",
  "sectionOrder": [
    "Struktura zatrudnienia ludności",
    "Wpływ zmian politycznych i gospodarczych na strukturę zatrudnienia",
    "Urbanizacja w Polsce i Europie",
    "Czynniki rozwoju miast w Polsce",
    "Zmiany w strefach podmiejskich - suburbanizacja",
    "Wpływ migracji na strukturę demograficzną wsi"
  ],
  "sectionIcons": {
    "Struktura zatrudnienia ludności": "👥",
    "Wpływ zmian politycznych i gospodarczych na strukturę zatrudnienia": "🏭",
    "Urbanizacja w Polsce i Europie": "🏙️",
    "Czynniki rozwoju miast w Polsce": "🏗️",
    "Zmiany w strefach podmiejskich - suburbanizacja": "🏘️",
    "Wpływ migracji na strukturę demograficzną wsi": "🌾"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
