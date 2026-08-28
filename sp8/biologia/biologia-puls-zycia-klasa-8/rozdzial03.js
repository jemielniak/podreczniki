// Skróty sekcji (do identyfikatorów ćwiczeń):
//   ORG  = Organizm i populacja
//   ANT  = Zależności antagonistyczne
//   NIA  = Zależności nieantagonistyczne
//   EKO  = Ekosystem i zależności pokarmowe
//   MAT  = Materia i energia w ekosystemie
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R03_ORG_01",
    "section": "Organizm i populacja",
    "type": "single_choice",
    "prompt": "Czym zajmuje się ekologia?",
    "options": [
      "Badaniem zależności między organizmami oraz między organizmami a środowiskiem",
      "Wyłącznie klasyfikowaniem gatunków według budowy ciała",
      "Badaniem wyłącznie składu chemicznego gleby",
      "Opisywaniem tylko procesów zachodzących wewnątrz komórek",
      "Badaniem wyłącznie dziedziczenia cech",
      "Określaniem wieku skał"
    ],
    "answer": 0,
    "explanation": "Ekologia opisuje zależności między organizmami, a także między organizmami i środowiskiem, w którym żyją."
  },
  {
    "id": "R03_ORG_02",
    "section": "Organizm i populacja",
    "type": "match",
    "prompt": "Połącz pojęcie z właściwym opisem.",
    "options": null,
    "left": [
      "nisza ekologiczna",
      "siedlisko",
      "tolerancja ekologiczna",
      "optimum"
    ],
    "right": [
      "wszystkie wymagania życiowe organizmu względem środowiska",
      "przestrzeń, w której występuje dany organizm",
      "zdolność przystosowywania się do zmian zachodzących w środowisku",
      "najkorzystniejsza wartość danego czynnika środowiska"
    ],
    "answer": {
      "nisza ekologiczna": "wszystkie wymagania życiowe organizmu względem środowiska",
      "siedlisko": "przestrzeń, w której występuje dany organizm",
      "tolerancja ekologiczna": "zdolność przystosowywania się do zmian zachodzących w środowisku",
      "optimum": "najkorzystniejsza wartość danego czynnika środowiska"
    },
    "explanation": "Nisza opisuje wymagania życiowe, siedlisko jest miejscem występowania, tolerancja oznacza zdolność znoszenia zmian, a optimum to najkorzystniejsza wartość czynnika."
  },
  {
    "id": "R03_ORG_03",
    "section": "Organizm i populacja",
    "type": "multi_select",
    "prompt": "Zaznacz nieożywione czynniki środowiska wpływające na organizmy.",
    "options": [
      "temperatura",
      "wilgotność powietrza",
      "nasłonecznienie",
      "stężenie tlenu",
      "organizmy innych gatunków",
      "organizmy tego samego gatunku"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do czynników nieożywionych należą między innymi temperatura, wilgotność, nasłonecznienie i stężenie tlenu. Inne organizmy są czynnikami ożywionymi."
  },
  {
    "id": "R03_ORG_04",
    "section": "Organizm i populacja",
    "type": "true_false",
    "prompt": "Dwa różne gatunki żyjące w tym samym siedlisku mogą mieć identyczne nisze ekologiczne.",
    "options": null,
    "answer": false,
    "explanation": "W jednym siedlisku może żyć wiele gatunków, ale ich nisze ekologiczne nie są identyczne, choć mogą być do siebie podobne."
  },
  {
    "id": "R03_ORG_05",
    "section": "Organizm i populacja",
    "type": "fill_in",
    "prompt": "Granice zakresu tolerancji wyznaczają __________ i __________ wartość czynnika, a organizm najlepiej rozwija się w __________.",
    "options": null,
    "answer": [
      "minimalna",
      "maksymalna",
      "optimum"
    ],
    "altAnswers": [
      [
        "minimalna",
        "minimum"
      ],
      [
        "maksymalna",
        "maksimum"
      ],
      [
        "optimum",
        "optimum ekologiczne"
      ]
    ],
    "explanation": "Zakres tolerancji rozciąga się między minimalną i maksymalną tolerowaną wartością czynnika, a najlepsze warunki występują w optimum."
  },
  {
    "id": "R03_ORG_06",
    "section": "Organizm i populacja",
    "type": "single_choice",
    "prompt": "Które organizmy są szczególnie cenne przy ocenie stanu środowiska?",
    "options": [
      "Organizmy o wąskim zakresie tolerancji wobec badanego czynnika",
      "Organizmy o szerokim zakresie tolerancji wobec wszystkich czynników",
      "Wyłącznie duże ssaki",
      "Wyłącznie rośliny uprawne",
      "Organizmy występujące tylko w miastach",
      "Organizmy o największej rozrodczości"
    ],
    "answer": 0,
    "explanation": "Organizmy wskaźnikowe mają wąski zakres tolerancji wobec badanego czynnika, dlatego ich obecność lub brak pomaga ocenić stan środowiska."
  },
  {
    "id": "R03_ORG_07",
    "section": "Organizm i populacja",
    "type": "match",
    "prompt": "Połącz strefę skali porostowej z odpowiadającym jej stężeniem SO2 w powietrzu.",
    "options": null,
    "left": [
      "Strefa 1",
      "Strefa 2",
      "Strefa 3",
      "Strefa 4",
      "Strefa 7"
    ],
    "right": [
      "170 µg/m³ i więcej",
      "169-100 µg/m³",
      "99-70 µg/m³",
      "69-50 µg/m³",
      "29 µg/m³ i mniej"
    ],
    "answer": {
      "Strefa 1": "170 µg/m³ i więcej",
      "Strefa 2": "169-100 µg/m³",
      "Strefa 3": "99-70 µg/m³",
      "Strefa 4": "69-50 µg/m³",
      "Strefa 7": "29 µg/m³ i mniej"
    },
    "explanation": "W skali porostowej wyższy numer strefy odpowiada na ogół mniejszemu zanieczyszczeniu SO2. Strefa 1 ma co najmniej 170 µg/m³, a strefa 7 najwyżej 29 µg/m³.",
    "image": "r03_skala_porostowa.jpg"
  },
  {
    "id": "R03_ORG_08",
    "section": "Organizm i populacja",
    "type": "scenario",
    "prompt": "Na pniach drzew w lesie bardzo daleko od miast, dróg i terenów przemysłowych dominują porosty krzaczkowate. Jakiego stężenia SO2 najbardziej należy się spodziewać według skali porostowej?",
    "options": [
      "29 µg/m³ i mniej",
      "39-30 µg/m³",
      "49-40 µg/m³",
      "69-50 µg/m³",
      "99-70 µg/m³"
    ],
    "answer": 0,
    "explanation": "Lasy najbardziej oddalone od miast, dróg i terenów przemysłowych odpowiadają strefie 7, w której stężenie SO2 wynosi 29 µg/m³ i mniej.",
    "image": "r03_skala_porostowa.jpg"
  },
  {
    "id": "R03_ORG_09",
    "section": "Organizm i populacja",
    "type": "riddle",
    "prompt": "Grupa osobników tego samego gatunku żyjących na określonym obszarze w tym samym czasie to...",
    "options": null,
    "answer": "populacja",
    "altAnswers": [
      "populacja"
    ],
    "explanation": "Populację tworzą osobniki jednego gatunku żyjące na tym samym obszarze w tym samym czasie."
  },
  {
    "id": "R03_ORG_10",
    "section": "Organizm i populacja",
    "type": "sort",
    "prompt": "Przyporządkuj procesy do ich bezpośredniego wpływu na liczebność populacji.",
    "options": null,
    "items": [
      "rozrodczość",
      "imigracja",
      "śmiertelność",
      "emigracja"
    ],
    "categories": [
      "zwiększają liczebność",
      "zmniejszają liczebność"
    ],
    "answer": {
      "zwiększają liczebność": [
        "rozrodczość",
        "imigracja"
      ],
      "zmniejszają liczebność": [
        "śmiertelność",
        "emigracja"
      ]
    },
    "explanation": "Rozród i napływ osobników zwiększają liczebność, natomiast śmierć i odpływ osobników ją zmniejszają."
  },
  {
    "id": "R03_ORG_11",
    "section": "Organizm i populacja",
    "type": "match",
    "prompt": "Połącz przykład z typowym sposobem rozmieszczenia osobników populacji.",
    "options": null,
    "left": [
      "mniszek lekarski",
      "głuptaki w kolonii",
      "śledzie w ławicy"
    ],
    "right": [
      "losowe",
      "równomierne",
      "skupiskowe"
    ],
    "answer": {
      "mniszek lekarski": "losowe",
      "głuptaki w kolonii": "równomierne",
      "śledzie w ławicy": "skupiskowe"
    },
    "explanation": "Nasiona mniszka roznoszone przez wiatr sprzyjają rozmieszczeniu losowemu, rywalizacja o przestrzeń gniazdową u głuptaków prowadzi do rozmieszczenia równomiernego, a ławice śledzi są przykładem rozmieszczenia skupiskowego.",
    "image": "r03_rozmieszczenie_populacji.jpg"
  },
  {
    "id": "R03_ORG_12",
    "section": "Organizm i populacja",
    "type": "sequence",
    "prompt": "Ułóż etapy szacowania liczebności babki zwyczajnej na trawniku we właściwej kolejności.",
    "options": null,
    "items": [
      "Oblicz całkowitą powierzchnię trawnika",
      "Wyznacz kilka fragmentów trawnika o powierzchni 1 m²",
      "Pomnóż średnią liczbę osobników na 1 m² przez powierzchnię trawnika",
      "Policz osobniki na wyznaczonych fragmentach",
      "Oblicz średnią liczbę osobników na badanych fragmentach"
    ],
    "answer": [
      "Wyznacz kilka fragmentów trawnika o powierzchni 1 m²",
      "Policz osobniki na wyznaczonych fragmentach",
      "Oblicz średnią liczbę osobników na badanych fragmentach",
      "Oblicz całkowitą powierzchnię trawnika",
      "Pomnóż średnią liczbę osobników na 1 m² przez powierzchnię trawnika"
    ],
    "explanation": "Najpierw wyznacza się powierzchnie próbne i liczy osobniki, potem oblicza średnią oraz powierzchnię całego trawnika, a na końcu szacuje liczebność całej populacji.",
    "image": "r03_badanie_babki.jpg"
  },
  {
    "id": "R03_ANT_01",
    "section": "Zależności antagonistyczne",
    "type": "single_choice",
    "prompt": "Kiedy oddziaływanie między organizmami jest antagonistyczne?",
    "options": [
      "Gdy co najmniej jedna strona ponosi straty",
      "Gdy obie strony zawsze odnoszą korzyści",
      "Gdy żadna strona nie odnosi ani korzyści, ani strat",
      "Tylko wtedy, gdy organizmy należą do jednego gatunku",
      "Tylko wtedy, gdy jeden organizm zabija drugi",
      "Gdy oba organizmy zajmują różne siedliska"
    ],
    "answer": 0,
    "explanation": "Oddziaływania antagonistyczne przynoszą straty co najmniej jednej ze stron. Należą do nich konkurencja, drapieżnictwo, roślinożerność i pasożytnictwo."
  },
  {
    "id": "R03_ANT_02",
    "section": "Zależności antagonistyczne",
    "type": "multi_select",
    "prompt": "Zaznacz zasoby, o które najczęściej konkurują rośliny.",
    "options": [
      "światło",
      "woda",
      "sole mineralne",
      "zwierzęta zapylające",
      "partner do rozrodu",
      "terytorium łowieckie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Rośliny konkurują między innymi o światło, wodę, sole mineralne oraz zwierzęta zapylające kwiaty lub rozsiewające nasiona."
  },
  {
    "id": "R03_ANT_03",
    "section": "Zależności antagonistyczne",
    "type": "true_false",
    "prompt": "Konkurencja wewnątrzgatunkowa zachodzi między osobnikami tego samego gatunku.",
    "options": null,
    "answer": true,
    "explanation": "Konkurencja wewnątrzgatunkowa dotyczy osobników tego samego gatunku rywalizujących o ograniczone zasoby."
  },
  {
    "id": "R03_ANT_04",
    "section": "Zależności antagonistyczne",
    "type": "scenario",
    "prompt": "Dwa gatunki mają niemal identyczne wymagania życiowe. Jeden z nich jest silniejszy i stopniowo wypiera drugi z obszaru. Jaki jest skutek tej konkurencji międzygatunkowej?",
    "options": [
      "Wyparcie jednego gatunku przez drugi",
      "Powstanie symbiozy",
      "Wzrost rozrodczości obu gatunków",
      "Rozmieszczenie losowe",
      "Komensalizm"
    ],
    "answer": 0,
    "explanation": "Gdy nisze dwóch gatunków bardzo się pokrywają, konkurencja międzygatunkowa może doprowadzić do wyparcia jednego z nich."
  },
  {
    "id": "R03_ANT_05",
    "section": "Zależności antagonistyczne",
    "type": "odd_one_out",
    "prompt": "Wskaż zależność niepasującą do pozostałych: konkurencja, drapieżnictwo, pasożytnictwo, mutualizm.",
    "options": null,
    "answer": "mutualizm",
    "explanation": "Konkurencja, drapieżnictwo i pasożytnictwo są antagonistyczne, natomiast mutualizm jest zależnością nieantagonistyczną."
  },
  {
    "id": "R03_ANT_06",
    "section": "Zależności antagonistyczne",
    "type": "match",
    "prompt": "Połącz opis z możliwym skutkiem konkurencji.",
    "options": null,
    "left": [
      "rywalizacja osobników o przestrzeń",
      "rywalizacja członków jednego stada",
      "silniejszy gatunek zajmuje identyczną niszę",
      "częściowe pokrywanie się nisz dwóch gatunków"
    ],
    "right": [
      "podział przestrzeni na terytoria",
      "ustalenie hierarchii",
      "wyparcie jednego gatunku",
      "zmiana niszy ekologicznej"
    ],
    "answer": {
      "rywalizacja osobników o przestrzeń": "podział przestrzeni na terytoria",
      "rywalizacja członków jednego stada": "ustalenie hierarchii",
      "silniejszy gatunek zajmuje identyczną niszę": "wyparcie jednego gatunku",
      "częściowe pokrywanie się nisz dwóch gatunków": "zmiana niszy ekologicznej"
    },
    "explanation": "Konkurencja może prowadzić do terytorializmu i hierarchii wewnątrz gatunku, a między gatunkami do wyparcia słabszego konkurenta lub zmiany niszy."
  },
  {
    "id": "R03_ANT_07",
    "section": "Zależności antagonistyczne",
    "type": "riddle",
    "prompt": "Roślina chwytająca drobne zwierzęta za pomocą liści przekształconych w pułapki to...",
    "options": null,
    "answer": "rosiczka",
    "altAnswers": [
      "rosiczka",
      "rosiczka drapieżna"
    ],
    "explanation": "Rosiczka zwabia i chwyta drobne zwierzęta liśćmi-pułapkami. Pozyskuje z ofiar między innymi związki azotu, ale pozostaje autotrofem.",
    "image": "r03_rosiczka_pulapka.jpg"
  },
  {
    "id": "R03_ANT_08",
    "section": "Zależności antagonistyczne",
    "type": "multi_select",
    "prompt": "Zaznacz przystosowania drapieżników do zdobywania pokarmu.",
    "options": [
      "dobrze rozwinięte narządy zmysłów",
      "silna muskulatura",
      "maskujące barwy",
      "gruczoły jadowe",
      "ostre kły i pazury",
      "czterokomorowy żołądek przeżuwacza"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Drapieżnikom pomagają rozwinięte zmysły i mięśnie, maskowanie, jad oraz ostre kły i pazury. Czterokomorowy żołądek jest przystosowaniem roślinożernych przeżuwaczy.",
    "image": "r03_drapieznik_przystosowania.jpg"
  },
  {
    "id": "R03_ANT_09",
    "section": "Zależności antagonistyczne",
    "type": "odd_one_out",
    "prompt": "Wskaż cechę niebędącą strategią obrony przed drapieżnikiem: pancerz, kolce, udawanie martwego, długi wąski dziób.",
    "options": null,
    "answer": "długi wąski dziób",
    "explanation": "Pancerz, kolce i udawanie martwego służą obronie. Długi wąski dziób jest przystosowaniem kolibrów do pobierania nektaru."
  },
  {
    "id": "R03_ANT_10",
    "section": "Zależności antagonistyczne",
    "type": "fill_in",
    "prompt": "Ofiary rosiczki są źródłem związków __________, ale roślina pozostaje __________ i wytwarza związki organiczne w procesie __________.",
    "options": null,
    "answer": [
      "azotu",
      "autotrofem",
      "fotosyntezy"
    ],
    "altAnswers": [
      [
        "azotu",
        "azotowych"
      ],
      [
        "autotrofem",
        "organizmem samożywnym"
      ],
      [
        "fotosyntezy",
        "fotosynteza"
      ]
    ],
    "explanation": "Rosiczka uzupełnia związki azotu dzięki zdobyczom, lecz podstawowe związki potrzebne do życia wytwarza sama w fotosyntezie.",
    "image": "r03_rosiczka_pulapka.jpg"
  },
  {
    "id": "R03_ANT_11",
    "section": "Zależności antagonistyczne",
    "type": "match",
    "prompt": "Połącz roślinożercę z jego przystosowaniem do pobierania lub trawienia pokarmu roślinnego.",
    "options": null,
    "left": [
      "motyl żywiący się nektarem",
      "grubodziób",
      "termit",
      "ślimak"
    ],
    "right": [
      "aparat gębowy w kształcie rozwijanej rurki",
      "krótki i gruby dziób",
      "protisty rozkładające celulozę w przewodzie pokarmowym",
      "tarka do zeskrobywania pokarmu"
    ],
    "answer": {
      "motyl żywiący się nektarem": "aparat gębowy w kształcie rozwijanej rurki",
      "grubodziób": "krótki i gruby dziób",
      "termit": "protisty rozkładające celulozę w przewodzie pokarmowym",
      "ślimak": "tarka do zeskrobywania pokarmu"
    },
    "explanation": "Różne roślinożerne zwierzęta mają wyspecjalizowane narządy pobierania pokarmu, a u termitów trawienie celulozy umożliwiają protisty w przewodzie pokarmowym."
  },
  {
    "id": "R03_ANT_12",
    "section": "Zależności antagonistyczne",
    "type": "true_false",
    "prompt": "Litopsy bronią się przed roślinożercami między innymi przez upodabnianie się do kamieni w swoim otoczeniu.",
    "options": null,
    "answer": true,
    "explanation": "Litopsy, nazywane żywymi kamieniami, przypominają podłoże, przez co są trudniejsze do zauważenia przez roślinożerców."
  },
  {
    "id": "R03_NIA_01",
    "section": "Zależności nieantagonistyczne",
    "type": "single_choice",
    "prompt": "Co wyróżnia zależności nieantagonistyczne?",
    "options": [
      "Przynajmniej jedna strona odnosi korzyść i żadna nie ponosi strat",
      "Obie strony zawsze ponoszą straty",
      "Jedna strona zawsze zabija drugą",
      "Zachodzą wyłącznie między osobnikami jednego gatunku",
      "Nie wpływają na zdobywanie pożywienia ani unikanie zagrożeń",
      "Występują tylko między roślinami"
    ],
    "answer": 0,
    "explanation": "W zależnościach nieantagonistycznych przynajmniej jedna strona korzysta, a żadna nie ponosi strat."
  },
  {
    "id": "R03_NIA_02",
    "section": "Zależności nieantagonistyczne",
    "type": "true_false",
    "prompt": "W mutualizmie oba gatunki odnoszą korzyści.",
    "options": null,
    "answer": true,
    "explanation": "Mutualizm jest związkiem korzystnym dla obu gatunków. Może mieć postać symbiozy lub protokooperacji."
  },
  {
    "id": "R03_NIA_03",
    "section": "Zależności nieantagonistyczne",
    "type": "match",
    "prompt": "Połącz rodzaj zależności z właściwym opisem.",
    "options": null,
    "left": [
      "symbioza",
      "protokooperacja",
      "komensalizm"
    ],
    "right": [
      "obie strony korzystają i związek jest niezbędny do przeżycia",
      "obie strony korzystają, ale związek nie jest niezbędny do przeżycia",
      "jedna strona korzysta, a dla drugiej obecność partnera jest obojętna"
    ],
    "answer": {
      "symbioza": "obie strony korzystają i związek jest niezbędny do przeżycia",
      "protokooperacja": "obie strony korzystają, ale związek nie jest niezbędny do przeżycia",
      "komensalizm": "jedna strona korzysta, a dla drugiej obecność partnera jest obojętna"
    },
    "explanation": "Symbioza jest mutualizmem obligatoryjnym, protokooperacja mutualizmem fakultatywnym, a w komensalizmie korzyść odnosi tylko jedna strona."
  },
  {
    "id": "R03_NIA_04",
    "section": "Zależności nieantagonistyczne",
    "type": "scenario",
    "prompt": "Owady pobierają z kwiatów nektar i pyłek, a przy okazji przenoszą pyłek między kwiatami. Współpraca jest korzystna dla obu stron, ale nie jest konieczna do ich przeżycia. Jaki to typ zależności?",
    "options": [
      "protokooperacja",
      "symbioza",
      "komensalizm",
      "pasożytnictwo",
      "konkurencja"
    ],
    "answer": 0,
    "explanation": "Związek roślin kwiatowych i zapylających je owadów jest przykładem protokooperacji: obie strony korzystają, lecz mogą żyć bez tego konkretnego partnera.",
    "image": "r03_zapylanie_kwiatu.jpg"
  },
  {
    "id": "R03_NIA_05",
    "section": "Zależności nieantagonistyczne",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady symbiozy.",
    "options": [
      "mikoryza",
      "rośliny bobowate i bakterie brodawkowe",
      "mrówki uprawiające grzyby niezdolne bez nich przetrwać",
      "lwy i hieny korzystające z resztek",
      "bąkojady i bawoły"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Mikoryza, współżycie roślin bobowatych z bakteriami brodawkowymi oraz ścisły związek mrówek z uprawianymi grzybami są przykładami symbiozy. Lwy z hienami to komensalizm, a bąkojady z dużymi roślinożercami to protokooperacja."
  },
  {
    "id": "R03_NIA_06",
    "section": "Zależności nieantagonistyczne",
    "type": "fill_in",
    "prompt": "W plesze porostu grzyb dostarcza glonom wodę i sole __________, a glony przekazują grzybowi część substancji __________ wytwarzanych podczas fotosyntezy.",
    "options": null,
    "answer": [
      "mineralne",
      "pokarmowych"
    ],
    "altAnswers": [
      [
        "mineralne",
        "mineralnych"
      ],
      [
        "pokarmowych",
        "organicznych"
      ]
    ],
    "explanation": "Porost jest przykładem symbiozy grzyba i glonu: grzyb dostarcza wodę i sole mineralne, a glon przekazuje produkty fotosyntezy.",
    "image": "r03_porost_zblizenie.jpg"
  },
  {
    "id": "R03_NIA_07",
    "section": "Zależności nieantagonistyczne",
    "type": "riddle",
    "prompt": "Symbioza łącząca rośliny nasienne z grzybami to...",
    "options": null,
    "answer": "mikoryza",
    "altAnswers": [
      "mikoryza"
    ],
    "explanation": "Mikoryza to ścisła zależność między korzeniami roślin nasiennych a grzybami."
  },
  {
    "id": "R03_NIA_08",
    "section": "Zależności nieantagonistyczne",
    "type": "scenario",
    "prompt": "Mrówki żywią się słodką spadzią mszyc, a w zamian chronią mszyce przed drapieżnikami. Obie strony odnoszą korzyść, lecz związek nie jest niezbędny do ich przeżycia. Jak nazywa się ta zależność?",
    "options": [
      "protokooperacja",
      "symbioza",
      "komensalizm",
      "drapieżnictwo",
      "pasożytnictwo"
    ],
    "answer": 0,
    "explanation": "Mrówki uzyskują pokarm, a mszyce ochronę. Jest to wzajemnie korzystna, lecz nieobligatoryjna protokooperacja.",
    "image": "r03_mrowki_mszyce.jpg"
  },
  {
    "id": "R03_NIA_09",
    "section": "Zależności nieantagonistyczne",
    "type": "odd_one_out",
    "prompt": "Wskaż parę organizmów niepasującą do przykładów komensalizmu: lwy i hieny, podnawka i rekin, bąkojad i bawół.",
    "options": null,
    "answer": "bąkojad i bawół",
    "explanation": "Lwy z hienami oraz podnawka z rekinem są przykładami komensalizmu. Bąkojad i bawół odnoszą obustronne korzyści, więc tworzą protokooperację."
  },
  {
    "id": "R03_NIA_10",
    "section": "Zależności nieantagonistyczne",
    "type": "true_false",
    "prompt": "W komensalizmie jeden gatunek odnosi korzyść, a dla drugiego obecność partnera jest obojętna.",
    "options": null,
    "answer": true,
    "explanation": "Komensalizm przynosi korzyść tylko jednej stronie, natomiast druga nie ponosi strat ani nie odnosi korzyści."
  },
  {
    "id": "R03_EKO_01",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "single_choice",
    "prompt": "Czym jest ekosystem?",
    "options": [
      "Zbiorem elementów ożywionych i nieożywionych wzajemnie na siebie wpływających",
      "Wyłącznie zbiorem organizmów jednego gatunku",
      "Tylko nieożywioną częścią środowiska",
      "Wyłącznie siecią pokarmową",
      "Każdym obszarem o jednakowej temperaturze",
      "Tylko sztucznie utworzonym środowiskiem"
    ],
    "answer": 0,
    "explanation": "Ekosystem tworzą razem elementy ożywione, czyli biocenoza, oraz nieożywione, czyli biotop, które wzajemnie na siebie oddziałują."
  },
  {
    "id": "R03_EKO_02",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "match",
    "prompt": "Połącz pojęcie z opisem.",
    "options": null,
    "left": [
      "biocenoza",
      "biotop",
      "ekosystem"
    ],
    "right": [
      "wszystkie populacje powiązane zależnościami na danej przestrzeni",
      "nieożywione środowisko życia organizmów",
      "biocenoza i biotop wpływające na siebie"
    ],
    "answer": {
      "biocenoza": "wszystkie populacje powiązane zależnościami na danej przestrzeni",
      "biotop": "nieożywione środowisko życia organizmów",
      "ekosystem": "biocenoza i biotop wpływające na siebie"
    },
    "explanation": "Biocenoza obejmuje organizmy, biotop ich środowisko nieożywione, a oba te składniki razem tworzą ekosystem."
  },
  {
    "id": "R03_EKO_03",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "sort",
    "prompt": "Przyporządkuj ekosystemy do naturalnych lub sztucznych.",
    "options": null,
    "items": [
      "las",
      "jezioro",
      "morze",
      "pole uprawne",
      "sad",
      "park miejski",
      "staw rybny"
    ],
    "categories": [
      "naturalne",
      "sztuczne"
    ],
    "answer": {
      "naturalne": [
        "las",
        "jezioro",
        "morze"
      ],
      "sztuczne": [
        "pole uprawne",
        "sad",
        "park miejski",
        "staw rybny"
      ]
    },
    "explanation": "Ekosystemy naturalne powstały bez udziału człowieka, a sztuczne są wynikiem jego działalności i są przez niego przekształcane."
  },
  {
    "id": "R03_EKO_04",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje i sposoby wykorzystania ekosystemów leśnych.",
    "options": [
      "pozyskiwanie drewna",
      "oczyszczanie powietrza z dwutlenku węgla",
      "ochrona pobliskich terenów przed powodziami",
      "kontakt z przyrodą może obniżać poziom stresu",
      "wytwarzanie soli mineralnych z promieni słonecznych",
      "całkowite zatrzymywanie wszystkich powodzi"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Lasy są źródłem drewna, pomagają oczyszczać powietrze z CO2 i chronić pobliskie tereny przed powodziami, a kontakt z zielenią może obniżać poziom stresu."
  },
  {
    "id": "R03_EKO_05",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "fill_in",
    "prompt": "Sukcesja __________ rozpoczyna się w miejscu, gdzie wcześniej nie było organizmów, a sukcesja __________ zachodzi na terenie wcześniej zasiedlonym, lecz zmienionym np. przez pożar lub powódź.",
    "options": null,
    "answer": [
      "pierwotna",
      "wtórna"
    ],
    "altAnswers": [
      [
        "pierwotna",
        "sukcesja pierwotna"
      ],
      [
        "wtórna",
        "sukcesja wtórna"
      ]
    ],
    "explanation": "Sukcesja pierwotna zaczyna się na podłożu wcześniej niezasiedlonym, a wtórna na terenie, na którym biocenoza została zmieniona lub zniszczona."
  },
  {
    "id": "R03_EKO_06",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "sequence",
    "prompt": "Ułóż etapy sukcesji wtórnej na nieużytkowanej łące od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Pojawiają się krzewy i drzewa",
      "Rosną głównie trawy",
      "Wykształca się las",
      "Pojawiają się wieloletnie rośliny zielne"
    ],
    "answer": [
      "Rosną głównie trawy",
      "Pojawiają się wieloletnie rośliny zielne",
      "Pojawiają się krzewy i drzewa",
      "Wykształca się las"
    ],
    "explanation": "Na początku dominują trawy, potem pojawiają się inne rośliny zielne, następnie krzewy i drzewa, a końcowym stadium może być las."
  },
  {
    "id": "R03_EKO_07",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "scenario",
    "prompt": "Las został zniszczony przez pożar, ale gleba i część składników środowiska pozostały. Po roku zaczęła odradzać się roślinność. Jaki proces zachodzi?",
    "options": [
      "sukcesja wtórna",
      "sukcesja pierwotna",
      "komensalizm",
      "emigracja",
      "pustynia porostowa"
    ],
    "answer": 0,
    "explanation": "Pożar zmienia wcześniej istniejący ekosystem, dlatego jego stopniowe odtwarzanie jest sukcesją wtórną.",
    "image": "r03_las_po_pozarze.jpg"
  },
  {
    "id": "R03_EKO_08",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "riddle",
    "prompt": "Uporządkowany ciąg gatunków, w którym każdy organizm jest zjadany przez następny, to...",
    "options": null,
    "answer": "łańcuch pokarmowy",
    "altAnswers": [
      "łańcuch pokarmowy",
      "lancuch pokarmowy",
      "łańcuch troficzny"
    ],
    "explanation": "Łańcuch pokarmowy przedstawia kolejność zjadanych i zjadających się organizmów."
  },
  {
    "id": "R03_EKO_09",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "match",
    "prompt": "Połącz poziom troficzny z jego opisem.",
    "options": null,
    "left": [
      "producenci",
      "konsumenci I rzędu",
      "konsumenci II rzędu",
      "konsumenci III rzędu"
    ],
    "right": [
      "organizmy samożywne wytwarzające związki organiczne",
      "roślinożercy",
      "mięsożercy żywiący się roślinożercami",
      "mięsożercy żywiący się innymi mięsożercami"
    ],
    "answer": {
      "producenci": "organizmy samożywne wytwarzające związki organiczne",
      "konsumenci I rzędu": "roślinożercy",
      "konsumenci II rzędu": "mięsożercy żywiący się roślinożercami",
      "konsumenci III rzędu": "mięsożercy żywiący się innymi mięsożercami"
    },
    "explanation": "Producenci są samożywni, a kolejne rzędy konsumentów uzyskują materię organiczną z organizmów poprzedniego poziomu."
  },
  {
    "id": "R03_EKO_10",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "scenario",
    "prompt": "Lis w danej chwili żywi się owocami. Który poziom troficzny wtedy zajmuje?",
    "options": [
      "konsument I rzędu",
      "konsument II rzędu",
      "konsument III rzędu",
      "producent",
      "destruent"
    ],
    "answer": 0,
    "explanation": "Gdy lis je owoce, korzysta bezpośrednio z pokarmu producentów, więc pełni rolę konsumenta I rzędu.",
    "image": "r03_lis_w_lesie.jpg"
  },
  {
    "id": "R03_EKO_11",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "multi_select",
    "prompt": "Zaznacz zdarzenia mogące zakłócić równowagę ekosystemu.",
    "options": [
      "zniknięcie jednego z gatunków",
      "wprowadzenie obcego gatunku",
      "masowe pojawienie się roślinożernych owadów w ubogim gatunkowo ekosystemie sztucznym",
      "choroby pasożytnicze w ekosystemie sztucznym",
      "duża liczba gatunków reprezentujących poziomy troficzne"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Równowagę może zakłócić utrata gatunku, introdukcja gatunku obcego oraz gwałtowne zmiany liczebności, szczególnie w ubogich gatunkowo ekosystemach sztucznych."
  },
  {
    "id": "R03_EKO_12",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "true_false",
    "prompt": "Ekosystemy o dużej liczbie gatunków są zwykle mniej narażone na zakłócenia równowagi niż ubogie gatunkowo ekosystemy sztuczne.",
    "options": null,
    "answer": true,
    "explanation": "Duża różnorodność gatunkowa zwiększa liczbę możliwych powiązań pokarmowych, dlatego spadek liczebności jednego gatunku łatwiej może zostać skompensowany przez inne."
  },
  {
    "id": "R03_MAT_01",
    "section": "Materia i energia w ekosystemie",
    "type": "single_choice",
    "prompt": "Które zdanie poprawnie porównuje materię i energię w ekosystemie?",
    "options": [
      "Materia krąży, a energia przepływa przez ekosystem",
      "Materia i energia krążą w identyczny sposób",
      "Materia przepływa jednokierunkowo, a energia krąży",
      "Ani materia, ani energia nie przechodzą między poziomami troficznymi",
      "Tylko energia wraca do producentów w postaci soli mineralnych",
      "Materia występuje wyłącznie w organizmach"
    ],
    "answer": 0,
    "explanation": "Pierwiastki tworzą obieg między środowiskiem i organizmami, natomiast energia przepływa przez poziomy troficzne i stopniowo rozprasza się w postaci ciepła."
  },
  {
    "id": "R03_MAT_02",
    "section": "Materia i energia w ekosystemie",
    "type": "sequence",
    "prompt": "Ułóż uproszczony obieg materii od pobrania związków nieorganicznych przez producentów do ponownego udostępnienia ich producentom.",
    "options": null,
    "items": [
      "Destruenci rozkładają szczątki do związków nieorganicznych",
      "Roślinożercy zjadają producentów",
      "Producenci pobierają związki nieorganiczne i tworzą materię organiczną",
      "Związki nieorganiczne mogą ponownie zostać pobrane przez producentów",
      "Drapieżniki zjadają roślinożerców"
    ],
    "answer": [
      "Producenci pobierają związki nieorganiczne i tworzą materię organiczną",
      "Roślinożercy zjadają producentów",
      "Drapieżniki zjadają roślinożerców",
      "Destruenci rozkładają szczątki do związków nieorganicznych",
      "Związki nieorganiczne mogą ponownie zostać pobrane przez producentów"
    ],
    "explanation": "Materia przechodzi od producentów do konsumentów, a po śmierci organizmów destruenci przekształcają ją w związki nieorganiczne dostępne ponownie dla producentów."
  },
  {
    "id": "R03_MAT_03",
    "section": "Materia i energia w ekosystemie",
    "type": "match",
    "prompt": "Połącz grupę organizmów z jej rolą w krążeniu materii.",
    "options": null,
    "left": [
      "producenci",
      "konsumenci",
      "destruenci"
    ],
    "right": [
      "wytwarzają związki organiczne ze związków nieorganicznych",
      "pozyskują związki organiczne z innych organizmów",
      "rozkładają martwą materię do prostych związków nieorganicznych"
    ],
    "answer": {
      "producenci": "wytwarzają związki organiczne ze związków nieorganicznych",
      "konsumenci": "pozyskują związki organiczne z innych organizmów",
      "destruenci": "rozkładają martwą materię do prostych związków nieorganicznych"
    },
    "explanation": "Producenci budują materię organiczną, konsumenci przenoszą ją w łańcuchach pokarmowych, a destruenci przywracają związki nieorganiczne do środowiska."
  },
  {
    "id": "R03_MAT_04",
    "section": "Materia i energia w ekosystemie",
    "type": "fill_in",
    "prompt": "Rośliny pobierają z atmosfery __________ i wykorzystują go podczas __________ do wytwarzania związków organicznych. Węgiel wraca do środowiska między innymi w wyniku __________ organizmów.",
    "options": null,
    "answer": [
      "dwutlenek węgla",
      "fotosyntezy",
      "oddychania"
    ],
    "altAnswers": [
      [
        "dwutlenek węgla",
        "CO2",
        "CO₂"
      ],
      [
        "fotosyntezy",
        "fotosynteza"
      ],
      [
        "oddychania",
        "oddychanie"
      ]
    ],
    "explanation": "W obiegu węgla producenci wiążą CO2 w fotosyntezie, a oddychanie organizmów ponownie uwalnia dwutlenek węgla do środowiska."
  },
  {
    "id": "R03_MAT_05",
    "section": "Materia i energia w ekosystemie",
    "type": "multi_select",
    "prompt": "Zaznacz procesy, dzięki którym węgiel może wracać do środowiska w postaci dwutlenku węgla.",
    "options": [
      "oddychanie organizmów",
      "rozkład materii organicznej przez destruentów",
      "fotosynteza producentów",
      "pobieranie soli mineralnych przez korzenie"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Oddychanie oraz rozkład materii organicznej przez destruentów uwalniają CO2. Fotosynteza przeciwnie - pobiera CO2 z atmosfery."
  },
  {
    "id": "R03_MAT_06",
    "section": "Materia i energia w ekosystemie",
    "type": "true_false",
    "prompt": "W prawidłowo funkcjonującym ekosystemie ilość materii dostępnej dla producentów utrzymuje się na względnie stałym poziomie.",
    "options": null,
    "answer": true,
    "explanation": "Krążenie materii powoduje, że związki nieorganiczne są wielokrotnie odzyskiwane i ponownie wykorzystywane przez producentów."
  },
  {
    "id": "R03_MAT_07",
    "section": "Materia i energia w ekosystemie",
    "type": "scenario",
    "prompt": "Do jeziora spływa dużo związków mineralnych pochodzących z nawozów. Po pewnym czasie obserwuje się gwałtowny rozwój sinic. Jak nazywa się to zjawisko?",
    "options": [
      "zakwit wód",
      "sukcesja pierwotna",
      "pustynia porostowa",
      "migracja",
      "mikoryza"
    ],
    "answer": 0,
    "explanation": "Nadmiar związków mineralnych pochodzących z nawozów może wywołać gwałtowny rozwój sinic, czyli zakwit wód.",
    "image": "r03_zakwit_sinic.jpg"
  },
  {
    "id": "R03_MAT_08",
    "section": "Materia i energia w ekosystemie",
    "type": "single_choice",
    "prompt": "Jaka część energii pozyskanej ze zjedzonego pokarmu jest przeciętnie wykorzystywana do budowy ciała i może trafić do kolejnego poziomu troficznego?",
    "options": [
      "około 10%",
      "około 90%",
      "około 50%",
      "100%",
      "około 1%",
      "około 75%"
    ],
    "answer": 0,
    "explanation": "Około 10% energii zostaje zmagazynowane w materii budującej ciało. Reszta jest zużywana w procesach życiowych lub rozprasza się jako ciepło."
  },
  {
    "id": "R03_MAT_09",
    "section": "Materia i energia w ekosystemie",
    "type": "odd_one_out",
    "prompt": "Wskaż cechę, której nie przedstawia piramida ekologiczna: liczba osobników, masa organizmów, ilość energii, struktura płciowa.",
    "options": null,
    "answer": "struktura płciowa",
    "explanation": "Piramida ekologiczna może przedstawiać liczbę osobników, ich masę lub ilość energii na poziomach troficznych. Struktura płciowa jest cechą populacji."
  },
  {
    "id": "R03_MAT_10",
    "section": "Materia i energia w ekosystemie",
    "type": "true_false",
    "prompt": "Podstawę piramidy ekologicznej stanowią producenci.",
    "options": null,
    "answer": true,
    "explanation": "U podstawy piramidy znajdują się producenci, a wyżej kolejne poziomy konsumentów."
  },
  {
    "id": "R03_HARD_01",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz strefę skali porostowej z typowym miejscem jej występowania.",
    "options": null,
    "left": [
      "Strefa 1",
      "Strefa 3",
      "Strefa 4",
      "Strefa 5",
      "Strefa 7"
    ],
    "right": [
      "silnie skażone tereny przemysłowe",
      "tereny zadrzewione na obrzeżach dużych miast",
      "lasy w pobliżu dużych miast i obszarów przemysłowych",
      "duże obszary leśne",
      "lasy najbardziej oddalone od miast, dróg i terenów przemysłowych"
    ],
    "answer": {
      "Strefa 1": "silnie skażone tereny przemysłowe",
      "Strefa 3": "tereny zadrzewione na obrzeżach dużych miast",
      "Strefa 4": "lasy w pobliżu dużych miast i obszarów przemysłowych",
      "Strefa 5": "duże obszary leśne",
      "Strefa 7": "lasy najbardziej oddalone od miast, dróg i terenów przemysłowych"
    },
    "explanation": "Skala porostowa wiąże typ porostów i położenie stanowiska ze stopniem zanieczyszczenia SO2: od silnie skażonych terenów w strefie 1 do najczystszych lasów w strefie 7.",
    "image": "r03_skala_porostowa.jpg"
  },
  {
    "id": "R03_HARD_02",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Na drzewach w dużym kompleksie leśnym występują porosty listkowate oraz nieliczne krzaczkowate. Które stężenie SO2 najlepiej odpowiada temu stanowisku?",
    "options": [
      "49-40 µg/m³",
      "69-50 µg/m³",
      "99-70 µg/m³",
      "169-100 µg/m³",
      "170 µg/m³ i więcej"
    ],
    "answer": 0,
    "explanation": "Duże obszary leśne z porostami listkowatymi i nielicznymi krzaczkowatymi odpowiadają strefie 5, czyli 49-40 µg/m³ SO2.",
    "image": "r03_skala_porostowa.jpg"
  },
  {
    "id": "R03_HARD_03",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile osobników liczyła populacja żubra w polskiej części Puszczy Białowieskiej pod koniec 2016 roku?",
    "options": [
      "596",
      "1500",
      "100",
      "2016",
      "69",
      "29"
    ],
    "answer": 0,
    "explanation": "Pod koniec 2016 roku populacja żubra w polskiej części Puszczy Białowieskiej liczyła 596 osobników."
  },
  {
    "id": "R03_HARD_04",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który opis poprawnie porównuje rozrodczość myszy domowej i słonia afrykańskiego?",
    "options": [
      "Mysz może mieć w roku kilkadziesiąt młodych, a słoń jedno młode mniej więcej raz na cztery lata",
      "Mysz ma jedno młode raz na cztery lata, a słoń kilkadziesiąt młodych rocznie",
      "Oba gatunki wydają na świat po jednym młodym rocznie",
      "Oba gatunki mają kilkadziesiąt młodych rocznie",
      "Słoń ma większą rozrodczość niż mysz",
      "Rozrodczość obu gatunków jest taka sama"
    ],
    "answer": 0,
    "explanation": "Mysz domowa może wydać na świat nawet kilkadziesiąt młodych w roku, natomiast słoń afrykański jedno młode mniej więcej raz na cztery lata."
  },
  {
    "id": "R03_HARD_05",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Jaszczurka zwinka i jaszczurka żyworodna żywią się podobnym pokarmem. Silniejsza zwinka zajmuje słoneczne łąki, a żyworódka przystosowała się do życia w cienistych lasach. Jaki skutek konkurencji międzygatunkowej opisuje ten przykład?",
    "options": [
      "zmianę niszy ekologicznej",
      "całkowite wyparcie obu gatunków",
      "powstanie symbiozy",
      "wzrost zanieczyszczenia powietrza",
      "rozmieszczenie losowe"
    ],
    "answer": 0,
    "explanation": "Gdy nisze częściowo się pokrywają, konkurencja może prowadzić do zmiany niszy. W tym przykładzie gatunki rozdzieliły się pod względem siedliska."
  },
  {
    "id": "R03_HARD_06",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz drapieżnika ze strategią zdobywania ofiary.",
    "options": null,
    "left": [
      "meduza",
      "żółw sępi",
      "ryba głębinowa z narządem świetlnym",
      "murena"
    ],
    "right": [
      "paraliżowanie ofiary",
      "wabienie przynętą przypominającą larwę",
      "wzbudzanie zainteresowania światłem",
      "atak z ukrycia w zakamarkach rafy"
    ],
    "answer": {
      "meduza": "paraliżowanie ofiary",
      "żółw sępi": "wabienie przynętą przypominającą larwę",
      "ryba głębinowa z narządem świetlnym": "wzbudzanie zainteresowania światłem",
      "murena": "atak z ukrycia w zakamarkach rafy"
    },
    "explanation": "Drapieżniki stosują różne strategie: meduzy paraliżują, żółw sępi wabi ruchomą przynętą, ryby głębinowe przyciągają światłem, a mureny czatują w kryjówkach."
  },
  {
    "id": "R03_HARD_07",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która cecha tasiemca uzbrojonego pomaga mu pozostać w jelicie żywiciela?",
    "options": [
      "haczyki i przyssawki na główce",
      "krótki gruby dziób",
      "liście przekształcone w pułapki",
      "pancerz zwijany w kulę",
      "narządy świetlne",
      "tarka pokryta ząbkami"
    ],
    "answer": 0,
    "explanation": "Tasiemiec uzbrojony przyczepia się do ściany jelita haczykami i przyssawkami, dzięki czemu nie jest usuwany z odchodami.",
    "image": "r03_tasiemiec_uzbrojony.jpg"
  },
  {
    "id": "R03_HARD_08",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz skutki pasożytnictwa dla żywicieli i gospodarki człowieka.",
    "options": [
      "osłabienie żywiciela",
      "zatruwanie produktami przemiany materii",
      "przenoszenie chorób",
      "straty w rolnictwie",
      "zawsze natychmiastowa śmierć żywiciela",
      "zawsze wzrost odporności roślin"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Pasożyty mogą osłabiać i zatruwać żywiciela, przenosić choroby oraz powodować straty w rolnictwie. Z reguły nie zabijają żywiciela od razu."
  },
  {
    "id": "R03_HARD_09",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Roślina bobowata żyje na glebie ubogiej w azot. W brodawkach jej korzeni znajdują się bakterie, które wykorzystują azot atmosferyczny do produkcji związków azotowych, a otrzymują od rośliny związki organiczne. Jaki rodzaj zależności występuje między tymi organizmami?",
    "options": [
      "symbioza",
      "protokooperacja",
      "komensalizm",
      "pasożytnictwo",
      "konkurencja"
    ],
    "answer": 0,
    "explanation": "Rośliny bobowate i bakterie brodawkowe tworzą ścisłą, obustronnie korzystną symbiozę.",
    "image": "r03_bakterie_brodawkowe.jpg"
  },
  {
    "id": "R03_HARD_10",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy sukcesji pierwotnej na nagiej skale od najwcześniejszego do późniejszego.",
    "options": null,
    "items": [
      "Ze szczątków organizmów pionierskich i okruchów skał tworzy się gleba",
      "Na glebie wyrastają bardziej wymagające rośliny, na przykład mchy i trawy",
      "Nagą skałę zasiedlają porosty",
      "Porosty przyspieszają wietrzenie skały"
    ],
    "answer": [
      "Nagą skałę zasiedlają porosty",
      "Porosty przyspieszają wietrzenie skały",
      "Ze szczątków organizmów pionierskich i okruchów skał tworzy się gleba",
      "Na glebie wyrastają bardziej wymagające rośliny, na przykład mchy i trawy"
    ],
    "explanation": "W sukcesji pierwotnej porosty jako organizmy pionierskie zasiedlają nagą skałę i przyspieszają jej wietrzenie. Z ich szczątków oraz okruchów skał tworzy się gleba, na której mogą rosnąć bardziej wymagające rośliny, na przykład mchy i trawy."
  },
  {
    "id": "R03_HARD_11",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Do zbiornika wodnego wprowadzono roślinożernego amura. Roślinność wodna silnie się zmniejszyła. Który dalszy skutek może wynikać z tego mechanizmu?",
    "options": [
      "spadek liczebności rodzimych ryb odbywających tarło wśród roślin",
      "automatyczny wzrost liczby wszystkich rodzimych ryb",
      "powstanie pustyni porostowej",
      "zwiększenie ilości roślinności wodnej",
      "zatrzymanie przepływu energii w całym ekosystemie"
    ],
    "answer": 0,
    "explanation": "Zmniejszenie roślinności po wprowadzeniu amura może ograniczyć miejsca tarła rodzimych ryb i pogorszyć ich warunki, co prowadzi do spadku ich liczebności."
  },
  {
    "id": "R03_HARD_12",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W obiegu węgla producenci pobierają z atmosfery __________, konsumenci uzyskują węgiel wraz z __________, a do atmosfery wraca on między innymi podczas __________ i rozkładu materii organicznej.",
    "options": null,
    "answer": [
      "dwutlenek węgla",
      "pokarmem",
      "oddychania"
    ],
    "altAnswers": [
      [
        "dwutlenek węgla",
        "CO2",
        "CO₂"
      ],
      [
        "pokarmem",
        "pokarmu"
      ],
      [
        "oddychania",
        "oddychanie"
      ]
    ],
    "explanation": "Producenci wiążą CO2 w fotosyntezie, konsumenci przejmują węgiel z pokarmem, a oddychanie i rozkład materii organicznej uwalniają go z powrotem do środowiska."
  },
  {
    "id": "R03_HARD_13",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W producentach zmagazynowano 10 000 jednostek energii. Przyjmij zasadę, że do kolejnego poziomu troficznego przechodzi około 10% energii. Ile energii dotrze do konsumentów III rzędu?",
    "options": [
      "10 jednostek",
      "100 jednostek",
      "1000 jednostek",
      "1 jednostka",
      "5000 jednostek"
    ],
    "answer": 0,
    "explanation": "Z 10 000 jednostek producenci przekazują około 1000 konsumentom I rzędu, 100 konsumentom II rzędu i 10 konsumentom III rzędu."
  },
  {
    "id": "R03_HARD_14",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż parę organizmów połączoną zależnością antagonistyczną: grzyb i glon w poroście, bąkojad i bawół, lew i hiena korzystająca z resztek, dingo i wilk workowaty.",
    "options": null,
    "answer": "dingo i wilk workowaty",
    "explanation": "Dingo i wilk workowaty konkurowały o podobną niszę, więc ich relacja była antagonistyczna. Pozostałe pary ilustrują zależności nieantagonistyczne."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r03",
  number: 3,
  title: "Ekologia",
  icon: "🌿",
  sectionOrder: [
    "Organizm i populacja",
    "Zależności antagonistyczne",
    "Zależności nieantagonistyczne",
    "Ekosystem i zależności pokarmowe",
    "Materia i energia w ekosystemie"
  ],
  sectionIcons: {
    "Organizm i populacja": "🌱",
    "Zależności antagonistyczne": "⚔️",
    "Zależności nieantagonistyczne": "🤝",
    "Ekosystem i zależności pokarmowe": "🌳",
    "Materia i energia w ekosystemie": "☀️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
