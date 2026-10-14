// Skróty sekcji (do identyfikatorów ćwiczeń):
//   POL  = Położenie, granice i administracja Polski
//   GEO  = Budowa geologiczna i zlodowacenia
//   KLI  = Pogoda i klimat Polski
//   WOD  = Rzeki, jeziora i Morze Bałtyckie
//   PRZ  = Gleby, lasy i ochrona przyrody
//   SUW  = Bogactwa mineralne Polski
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_POL_01",
    "section": "Położenie, granice i administracja Polski",
    "type": "single_choice",
    "prompt": "W jakiej części Europy leży Polska?",
    "options": [
      "W Europie Północnej",
      "W Europie Południowej",
      "W Europie Środkowej",
      "W Europie Zachodniej",
      "W Europie Południowo-Wschodniej",
      "W Europie Północno-Zachodniej"
    ],
    "answer": 2,
    "image": "r04_mapa_polozenia_polski.jpg",
    "explanation": "Polska leży w Europie Środkowej, nazywanej też Centralną lub Środkowo-Wschodnią."
  },
  {
    "id": "R04_POL_02",
    "section": "Położenie, granice i administracja Polski",
    "type": "multi_select",
    "prompt": "Zaznacz państwa mające granicę lądową z Polską.",
    "options": [
      "Litwa",
      "Łotwa",
      "Słowacja",
      "Węgry",
      "Białoruś",
      "Czechy"
    ],
    "answer": [
      0,
      2,
      4,
      5
    ],
    "image": "r04_mapa_polozenia_polski.jpg",
    "explanation": "Polska graniczy z siedmioma państwami: Niemcami, Czechami, Słowacją, Ukrainą, Białorusią, Litwą i Rosją."
  },
  {
    "id": "R04_POL_03",
    "section": "Położenie, granice i administracja Polski",
    "type": "true_false",
    "prompt": "Najdłuższa granica lądowa Polski przebiega z Czechami.",
    "options": null,
    "answer": true,
    "explanation": "Granica z Czechami ma około 796 km długości; najkrótsza jest granica z Litwą (104 km)."
  },
  {
    "id": "R04_POL_04",
    "section": "Położenie, granice i administracja Polski",
    "type": "fill_in",
    "prompt": "Rozciągłość południkowa Polski wynosi __________.",
    "options": null,
    "answer": [
      "5°50′"
    ],
    "altAnswers": [
      [
        "5°50′",
        "5°50'",
        "5 stopni 50 minut",
        "5°50’"
      ]
    ],
    "explanation": "Różnica szerokości geograficznej najbardziej na północ i na południe wysuniętych punktów Polski wynosi 5°50′."
  },
  {
    "id": "R04_POL_05",
    "section": "Położenie, granice i administracja Polski",
    "type": "match",
    "prompt": "Połącz rodzaj jednostki podziału administracyjnego z jej miejscem w hierarchii.",
    "options": null,
    "left": [
      "województwo",
      "powiat",
      "gmina"
    ],
    "right": [
      "najniższy szczebel",
      "najwyższy szczebel",
      "środkowy szczebel"
    ],
    "answer": {
      "województwo": "najwyższy szczebel",
      "powiat": "środkowy szczebel",
      "gmina": "najniższy szczebel"
    },
    "explanation": "Od 1 stycznia 1999 r. obowiązuje w Polsce podział trójstopniowy: województwa, powiaty i gminy."
  },
  {
    "id": "R04_POL_06",
    "section": "Położenie, granice i administracja Polski",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo, które nie graniczy z Polską: Ukraina, Czechy, Węgry, Litwa.",
    "options": null,
    "answer": "Węgry",
    "explanation": "Polska graniczy z Ukrainą, Czechami i Litwą, ale nie ma wspólnej granicy z Węgrami."
  },
  {
    "id": "R04_POL_07",
    "section": "Położenie, granice i administracja Polski",
    "type": "scenario",
    "prompt": "Turysta jedzie wzdłuż naturalnej granicy Polski na zachodzie. Obserwuje rzeki wykorzystywane jako odcinki graniczne. Która para rzek jest właściwa?",
    "options": [
      "Wisła i San",
      "Odra i Nysa Łużycka",
      "Bug i Narew",
      "Warta i Noteć"
    ],
    "answer": 1,
    "image": "r04_mapa_polozenia_polski.jpg",
    "explanation": "Zachodnia granica naturalna Polski biegnie na wielu odcinkach nurtem Odry i Nysy Łużyckiej."
  },
  {
    "id": "R04_POL_08",
    "section": "Położenie, granice i administracja Polski",
    "type": "riddle",
    "prompt": "Ile województw ma Polska?",
    "options": null,
    "answer": "16",
    "altAnswers": [
      "16",
      "szesnaście"
    ],
    "explanation": "Podział administracyjny wprowadzony w 1999 roku obejmuje 16 województw."
  },
  {
    "id": "R04_POL_09",
    "section": "Położenie, granice i administracja Polski",
    "type": "sort",
    "prompt": "Przyporządkuj jednostki i organy do odpowiednich szczebli lub władz.",
    "options": null,
    "items": [
      "wojewoda",
      "marszałek województwa",
      "urząd wojewódzki",
      "sejmik wojewódzki"
    ],
    "categories": [
      "samorząd wojewódzki",
      "administracja rządowa w województwie"
    ],
    "answer": {
      "samorząd wojewódzki": [
        "sejmik wojewódzki",
        "marszałek województwa"
      ],
      "administracja rządowa w województwie": [
        "wojewoda",
        "urząd wojewódzki"
      ]
    },
    "image": "r04_mapa_wojewodztw.jpg",
    "explanation": "Na szczeblu województwa działają organy samorządowe z marszałkiem i sejmikiem oraz administracja rządowa z wojewodą."
  },
  {
    "id": "R04_POL_10",
    "section": "Położenie, granice i administracja Polski",
    "type": "true_false",
    "prompt": "W Polsce sejmik województwa kujawsko-pomorskiego urzęduje w Bydgoszczy.",
    "options": null,
    "answer": false,
    "image": "r04_mapa_wojewodztw.jpg",
    "explanation": "W województwie kujawsko-pomorskim sejmik ma siedzibę w Toruniu, a wojewoda i urząd wojewódzki w Bydgoszczy."
  },
  {
    "id": "R04_GEO_01",
    "section": "Budowa geologiczna i zlodowacenia",
    "type": "single_choice",
    "prompt": "Które góry zostały sfałdowane i wypiętrzone podczas orogenezy alpejskiej?",
    "options": [
      "Karpaty",
      "Góry Świętokrzyskie",
      "Góry Kaczawskie",
      "Góry Sowie",
      "Karkonosze",
      "Masyw Śnieżnika"
    ],
    "answer": 0,
    "image": "r04_mapa_jednostek_tektonicznych.jpg",
    "explanation": "W kenozoiku alpejskie ruchy górotwórcze wypiętrzyły Karpaty; Sudety zostały wtedy odmłodzone tektonicznie."
  },
  {
    "id": "R04_GEO_02",
    "section": "Budowa geologiczna i zlodowacenia",
    "type": "multi_select",
    "prompt": "Wybierz trzy główne jednostki tektoniczne Europy występujące w Polsce.",
    "options": [
      "platforma południowoamerykańska",
      "platforma wschodnioeuropejska",
      "obszar fałdowań paleozoicznych",
      "platforma afrykańska",
      "obszar fałdowań alpejskich"
    ],
    "answer": [
      1,
      2,
      4
    ],
    "image": "r04_mapa_jednostek_tektonicznych.jpg",
    "explanation": "Na obszarze Polski występują: prekambryjska platforma wschodnioeuropejska, obszar fałdowań paleozoicznych oraz obszar fałdowań kenozoicznych (alpejskich)."
  },
  {
    "id": "R04_GEO_03",
    "section": "Budowa geologiczna i zlodowacenia",
    "type": "true_false",
    "prompt": "Linia T–T oddziela platformę wschodnioeuropejską od obszaru fałdowań paleozoicznych.",
    "options": null,
    "answer": true,
    "explanation": "Linia Teisseyre’a–Tornquista to ważna granica tektoniczna Europy, przebiegająca przez Polskę."
  },
  {
    "id": "R04_GEO_04",
    "section": "Budowa geologiczna i zlodowacenia",
    "type": "match",
    "prompt": "Połącz okres geologiczny z charakterystycznym surowcem lub skałą powstałą na obszarze Polski.",
    "options": null,
    "left": [
      "karbon",
      "perm",
      "trias",
      "jura"
    ],
    "right": [
      "wapienie Wyżyny Krakowsko-Częstochowskiej",
      "rudy miedzi okolic Polkowic i Głogowa",
      "węgiel kamienny Górnego i Dolnego Śląska",
      "rudy cynku i ołowiu Górnego Śląska"
    ],
    "answer": {
      "karbon": "węgiel kamienny Górnego i Dolnego Śląska",
      "perm": "rudy miedzi okolic Polkowic i Głogowa",
      "trias": "rudy cynku i ołowiu Górnego Śląska",
      "jura": "wapienie Wyżyny Krakowsko-Częstochowskiej"
    },
    "explanation": "Z karbonem wiążą się złoża węgla, z permem — miedzi, z triasem — cynku i ołowiu, a z jurą — wapieni."
  },
  {
    "id": "R04_GEO_05",
    "section": "Budowa geologiczna i zlodowacenia",
    "type": "riddle",
    "prompt": "Jak nazywa się rozległa pokrywa lodowa, która w plejstocenie nasuwała się ze Skandynawii na Polskę?",
    "options": null,
    "answer": "lądolód",
    "altAnswers": [
      "lądolód",
      "lodowiec kontynentalny"
    ],
    "explanation": "Lądolód, czyli lodowiec kontynentalny, pokrywa wielką powierzchnię i przemieszcza się pod wpływem grawitacji."
  },
  {
    "id": "R04_GEO_06",
    "section": "Budowa geologiczna i zlodowacenia",
    "type": "odd_one_out",
    "prompt": "Wskaż formę niezwiązaną z rzeźbą polodowcową: oz, sandr, morena czołowa, delta rzeczna.",
    "options": null,
    "answer": "delta rzeczna",
    "image": "r04_formy_polodowcowe.jpg",
    "explanation": "Oz, sandr i morena czołowa są formami polodowcowymi; delta powstaje przy ujściu rzeki wskutek osadzania jej materiału."
  },
  {
    "id": "R04_GEO_07",
    "section": "Budowa geologiczna i zlodowacenia",
    "type": "fill_in",
    "prompt": "Najmłodsze zlodowacenie Polski, o najmniejszym zasięgu, to zlodowacenie __________.",
    "options": null,
    "answer": [
      "północnopolskie"
    ],
    "altAnswers": [
      [
        "północnopolskie",
        "północnopolskie (bałtyckie)",
        "bałtyckie"
      ]
    ],
    "explanation": "Zlodowacenie północnopolskie, zwane bałtyckim, objęło głównie współczesne pojezierza i pobrzeża."
  },
  {
    "id": "R04_GEO_08",
    "section": "Budowa geologiczna i zlodowacenia",
    "type": "sort",
    "prompt": "Rozdziel formy i procesy według ich pochodzenia.",
    "options": null,
    "items": [
      "oz",
      "cyrk lodowcowy",
      "głaz narzutowy",
      "sandr",
      "dolina U-kształtna",
      "morena czołowa"
    ],
    "categories": [
      "działalność lądolodu",
      "działalność wód roztopowych",
      "działalność lodowca górskiego"
    ],
    "answer": {
      "działalność lądolodu": [
        "morena czołowa",
        "głaz narzutowy"
      ],
      "działalność wód roztopowych": [
        "sandr",
        "oz"
      ],
      "działalność lodowca górskiego": [
        "dolina U-kształtna",
        "cyrk lodowcowy"
      ]
    },
    "image": "r04_formy_polodowcowe.jpg",
    "explanation": "Moreny i eratyki pozostawia lądolód, sandry i ozy powstają dzięki wodom roztopowym, a lodowce dolinne tworzą doliny U-kształtne i cyrki."
  },
  {
    "id": "R04_GEO_09",
    "section": "Budowa geologiczna i zlodowacenia",
    "type": "single_choice",
    "prompt": "Które określenie najlepiej opisuje dolinę wyżłobioną przez lodowiec górski?",
    "options": [
      "dolina V-kształtna",
      "wąwóz lessowy",
      "dolina meandrowa",
      "dolina U-kształtna",
      "dolina deltowa",
      "dolina rzeczna z estuarium"
    ],
    "answer": 3,
    "image": "r04_dolina_u_ksztaltna.jpg",
    "explanation": "Lodowiec górski poszerza i pogłębia dolinę, tworząc charakterystyczny profil U-kształtny."
  },
  {
    "id": "R04_GEO_10",
    "section": "Budowa geologiczna i zlodowacenia",
    "type": "scenario",
    "prompt": "Na Pojezierzu Pomorskim uczeń widzi wysokie moreny, liczne jeziora i głazy narzutowe. Jaką rzeźbę rozpoznaje?",
    "options": [
      "krasową",
      "staroglacjalną",
      "młodoglacjalną",
      "wulkaniczną"
    ],
    "answer": 2,
    "image": "r04_formy_polodowcowe.jpg",
    "explanation": "Na obszarach ostatniego zlodowacenia formy akumulacji i erozji lodowcowej są dobrze zachowane, co jest cechą rzeźby młodoglacjalnej."
  },
  {
    "id": "R04_GEO_11",
    "section": "Budowa geologiczna i zlodowacenia",
    "type": "sequence",
    "prompt": "Ułóż trzy główne zlodowacenia Polski od najstarszego do najmłodszego.",
    "options": null,
    "items": [
      "zlodowacenie północnopolskie",
      "zlodowacenie południowopolskie",
      "zlodowacenie środkowopolskie"
    ],
    "answer": [
      "zlodowacenie południowopolskie",
      "zlodowacenie środkowopolskie",
      "zlodowacenie północnopolskie"
    ],
    "explanation": "Najstarsze było zlodowacenie południowopolskie (Sanu), potem środkowopolskie, a najmłodsze północnopolskie (bałtyckie)."
  },
  {
    "id": "R04_GEO_12",
    "section": "Budowa geologiczna i zlodowacenia",
    "type": "true_false",
    "prompt": "Gołoborza Gór Świętokrzyskich powstały w zimnym klimacie peryglacjalnym m.in. wskutek wietrzenia mrozowego.",
    "options": null,
    "answer": true,
    "explanation": "Gołoborza to rumowiska ostrokrawędzistych głazów powstające wskutek procesów mrozowych w warunkach okołolodowcowych."
  },
  {
    "id": "R04_KLI_01",
    "section": "Pogoda i klimat Polski",
    "type": "single_choice",
    "prompt": "Jaki typ klimatu występuje w Polsce?",
    "options": [
      "równikowy wybitnie wilgotny",
      "podzwrotnikowy suchy",
      "umiarkowany ciepły morski bez wpływów lądowych",
      "okołobiegunowy",
      "umiarkowany ciepły przejściowy",
      "umiarkowany chłodny kontynentalny"
    ],
    "answer": 4,
    "image": "r04_mapa_mas_powietrza.jpg",
    "explanation": "Polska leży w strefie klimatu umiarkowanego ciepłego, a jej klimat jest przejściowy między morskim i kontynentalnym."
  },
  {
    "id": "R04_KLI_02",
    "section": "Pogoda i klimat Polski",
    "type": "true_false",
    "prompt": "W meteorologii wiatr wieje od wyżu barycznego w kierunku niżu barycznego.",
    "options": null,
    "answer": true,
    "explanation": "Wiatr jest poziomym ruchem powietrza związanym z wyrównywaniem różnic ciśnienia, od wyżu do niżu."
  },
  {
    "id": "R04_KLI_03",
    "section": "Pogoda i klimat Polski",
    "type": "match",
    "prompt": "Dopasuj masy powietrza do ich typowych cech.",
    "options": null,
    "left": [
      "polarne morskie (PPm)",
      "polarne kontynentalne (PPk)",
      "arktyczne (PA)",
      "zwrotnikowe kontynentalne (PZk)"
    ],
    "right": [
      "gorące i suche",
      "bardzo zimne i przymrozki",
      "wilgotne i częste opady",
      "suche i zimowe silne mrozy"
    ],
    "answer": {
      "polarne morskie (PPm)": "wilgotne i częste opady",
      "polarne kontynentalne (PPk)": "suche i zimowe silne mrozy",
      "arktyczne (PA)": "bardzo zimne i przymrozki",
      "zwrotnikowe kontynentalne (PZk)": "gorące i suche"
    },
    "image": "r04_mapa_mas_powietrza.jpg",
    "explanation": "Napływ różnych mas powietrza, m.in. morskich i kontynentalnych, odpowiada za dużą zmienność pogody w Polsce."
  },
  {
    "id": "R04_KLI_04",
    "section": "Pogoda i klimat Polski",
    "type": "scenario",
    "prompt": "W upalny dzień na plaży wiatr wieje od chłodniejszej wody w stronę nagrzanego lądu. Jaki rodzaj wiatru obserwujesz?",
    "options": [
      "bryzę dzienną",
      "bryzę nocną",
      "halny",
      "wiatr fenowy znad Tatr"
    ],
    "answer": 0,
    "image": "r04_schemat_bryzy.jpg",
    "explanation": "Bryza dzienna wieje znad morza ku lądowi; w nocy kierunek tego wiatru jest odwrotny."
  },
  {
    "id": "R04_KLI_05",
    "section": "Pogoda i klimat Polski",
    "type": "multi_select",
    "prompt": "Które stwierdzenia poprawnie opisują halny?",
    "options": [
      "To wiatr ciepły",
      "To wiatr suchy",
      "Występuje wyłącznie nad morzem",
      "To wiatr stale zimny i wilgotny",
      "Może być porywisty"
    ],
    "answer": [
      0,
      1,
      4
    ],
    "explanation": "Halny to lokalny wiatr górski, który po opadnięciu po zawietrznej stronie gór staje się ciepły, suchy i porywisty."
  },
  {
    "id": "R04_KLI_06",
    "section": "Pogoda i klimat Polski",
    "type": "fill_in",
    "prompt": "Średnia roczna suma opadów atmosferycznych w Polsce wynosi około __________ mm.",
    "options": null,
    "answer": [
      "600"
    ],
    "altAnswers": [
      [
        "600",
        "ok. 600",
        "około 600"
      ]
    ],
    "explanation": "Średnia roczna suma opadów w Polsce wynosi około 600 mm."
  },
  {
    "id": "R04_KLI_07",
    "section": "Pogoda i klimat Polski",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest czynnikiem klimatotwórczym: szerokość geograficzna, wysokość nad poziomem morza, odległość od morza, numer województwa.",
    "options": null,
    "answer": "numer województwa",
    "explanation": "Na klimat wpływają m.in. szerokość geograficzna, wysokość i odległość od morza, a nie numer jednostki administracyjnej."
  },
  {
    "id": "R04_KLI_08",
    "section": "Pogoda i klimat Polski",
    "type": "riddle",
    "prompt": "Jak nazywają się linie na mapie synoptycznej łączące punkty o jednakowym ciśnieniu?",
    "options": null,
    "answer": "izobary",
    "altAnswers": [
      "izobary",
      "izobara"
    ],
    "explanation": "Izobary łączą na mapie punkty o takim samym ciśnieniu atmosferycznym."
  },
  {
    "id": "R04_KLI_09",
    "section": "Pogoda i klimat Polski",
    "type": "sort",
    "prompt": "Przyporządkuj cechy klimatu do zachodniej i wschodniej Polski.",
    "options": null,
    "items": [
      "silniejsze cechy kontynentalne",
      "silniejsze wpływy morskie",
      "większe roczne amplitudy temperatur",
      "mniejsze roczne amplitudy temperatur"
    ],
    "categories": [
      "zachód Polski",
      "wschód Polski"
    ],
    "answer": {
      "zachód Polski": [
        "mniejsze roczne amplitudy temperatur",
        "silniejsze wpływy morskie"
      ],
      "wschód Polski": [
        "większe roczne amplitudy temperatur",
        "silniejsze cechy kontynentalne"
      ]
    },
    "image": "r04_mapa_mas_powietrza.jpg",
    "explanation": "Na zachodzie wpływ Atlantyku łagodzi klimat, natomiast ku wschodowi rośnie jego kontynentalizm."
  },
  {
    "id": "R04_KLI_10",
    "section": "Pogoda i klimat Polski",
    "type": "true_false",
    "prompt": "W podziale na klimatyczne pory roku okres wegetacyjny obejmuje dni ze średnią temperaturą dobową powyżej 5°C.",
    "options": null,
    "answer": true,
    "explanation": "Okres wegetacyjny obejmuje klimatyczną wiosnę, lato i jesień; próg jego wyznaczenia to średnia dobowa temperatura powyżej 5°C."
  },
  {
    "id": "R04_WOD_01",
    "section": "Rzeki, jeziora i Morze Bałtyckie",
    "type": "single_choice",
    "prompt": "Która rzeka jest najdłuższa w Polsce?",
    "options": [
      "Odra",
      "Wisła",
      "Warta",
      "Bug",
      "Narew",
      "San"
    ],
    "answer": 1,
    "image": "r04_mapa_rzek_polski.jpg",
    "explanation": "Wisła ma około 1047 km długości i jest najdłuższą rzeką na terenie Polski."
  },
  {
    "id": "R04_WOD_02",
    "section": "Rzeki, jeziora i Morze Bałtyckie",
    "type": "true_false",
    "prompt": "Warta jest rzeką główną uchodzącą bezpośrednio do Morza Bałtyckiego.",
    "options": null,
    "answer": false,
    "image": "r04_mapa_rzek_polski.jpg",
    "explanation": "Warta uchodzi do Odry, jest więc jej dopływem, a nie rzeką uchodzącą bezpośrednio do morza."
  },
  {
    "id": "R04_WOD_03",
    "section": "Rzeki, jeziora i Morze Bałtyckie",
    "type": "multi_select",
    "prompt": "Wskaż zlewiska, do których należą części obszaru Polski.",
    "options": [
      "Morza Bałtyckiego",
      "Morza Śródziemnego",
      "Morza Północnego",
      "Morza Czarnego",
      "Morza Kaspijskiego"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "image": "r04_mapa_rzek_polski.jpg",
    "explanation": "Większość Polski odprowadza wody do Bałtyku, niewielkie fragmenty do Morza Czarnego oraz Morza Północnego."
  },
  {
    "id": "R04_WOD_04",
    "section": "Rzeki, jeziora i Morze Bałtyckie",
    "type": "match",
    "prompt": "Połącz typ jeziora z opisem jego powstania.",
    "options": null,
    "left": [
      "rynnowe",
      "morenowe",
      "przybrzeżne",
      "cyrkowe"
    ],
    "right": [
      "zatoka odcięta mierzeją od morza",
      "zagłębienie wyżłobione przez lodowiec górski",
      "rynna wyżłobiona przez wody pod lodowcem",
      "zagłębienie po działalności lądolodu i moren"
    ],
    "answer": {
      "rynnowe": "rynna wyżłobiona przez wody pod lodowcem",
      "morenowe": "zagłębienie po działalności lądolodu i moren",
      "przybrzeżne": "zatoka odcięta mierzeją od morza",
      "cyrkowe": "zagłębienie wyżłobione przez lodowiec górski"
    },
    "image": "r04_jezioro_rynnowe.jpg",
    "explanation": "W Polsce występują jeziora polodowcowe oraz jeziora przybrzeżne oddzielone mierzejami od Bałtyku."
  },
  {
    "id": "R04_WOD_05",
    "section": "Rzeki, jeziora i Morze Bałtyckie",
    "type": "odd_one_out",
    "prompt": "Wybierz jezioro, które nie jest przykładem jeziora przybrzeżnego: Łebsko, Gardno, Jamno, Gopło.",
    "options": null,
    "answer": "Gopło",
    "explanation": "Łebsko, Gardno i Jamno to jeziora przybrzeżne, natomiast Gopło jest jeziorem rynnowym."
  },
  {
    "id": "R04_WOD_06",
    "section": "Rzeki, jeziora i Morze Bałtyckie",
    "type": "fill_in",
    "prompt": "Około __________ powierzchni Polski należy do zlewiska Morza Bałtyckiego.",
    "options": null,
    "answer": [
      "99,7%"
    ],
    "altAnswers": [
      [
        "99,7%",
        "99,7 %",
        "99.7%"
      ]
    ],
    "explanation": "Około 99,7% obszaru Polski należy do zlewiska Morza Bałtyckiego."
  },
  {
    "id": "R04_WOD_07",
    "section": "Rzeki, jeziora i Morze Bałtyckie",
    "type": "scenario",
    "prompt": "Wędrowiec widzi długie, wąskie jezioro w zagłębieniu wyrzeźbionym przez wody pod lodowcem. Co to za typ jeziora?",
    "options": [
      "krasowe",
      "przybrzeżne",
      "rynnowe",
      "deltowe"
    ],
    "answer": 2,
    "image": "r04_jezioro_rynnowe.jpg",
    "explanation": "Jeziora rynnowe mają zwykle wydłużony kształt i znaczną głębokość; tak powstały m.in. Wigry i Gopło."
  },
  {
    "id": "R04_WOD_08",
    "section": "Rzeki, jeziora i Morze Bałtyckie",
    "type": "riddle",
    "prompt": "Jak nazywa się granica pomiędzy dwoma sąsiednimi dorzeczami lub zlewiskami?",
    "options": null,
    "answer": "dział wodny",
    "altAnswers": [
      "dział wodny",
      "dział wód"
    ],
    "explanation": "Dział wodny oddziela obszary odpływu wód do różnych rzek lub mórz."
  },
  {
    "id": "R04_WOD_09",
    "section": "Rzeki, jeziora i Morze Bałtyckie",
    "type": "sequence",
    "prompt": "Ułóż etapy od początku do końca typowego biegu rzeki.",
    "options": null,
    "items": [
      "ujście",
      "bieg środkowy",
      "bieg górny",
      "bieg dolny"
    ],
    "answer": [
      "bieg górny",
      "bieg środkowy",
      "bieg dolny",
      "ujście"
    ],
    "explanation": "Rzeka płynie kolejno biegiem górnym, środkowym i dolnym, a następnie kończy swój bieg ujściem."
  },
  {
    "id": "R04_WOD_10",
    "section": "Rzeki, jeziora i Morze Bałtyckie",
    "type": "single_choice",
    "prompt": "Które zjawisko w największym stopniu odpowiada za niskie zasolenie Bałtyku?",
    "options": [
      "brak dopływu rzek",
      "silne parowanie na całym akwenie",
      "bezpośrednie połączenie z oceanem przez szeroką cieśninę",
      "dopływ wód rzecznych i ograniczona wymiana z Morzem Północnym",
      "wyłącznie słona woda z Morza Północnego",
      "całkowity brak opadów atmosferycznych"
    ],
    "answer": 3,
    "explanation": "Duży dopływ słodkiej wody, opady i słaba wymiana z oceanem przez wąskie cieśniny obniżają zasolenie Bałtyku."
  },
  {
    "id": "R04_WOD_11",
    "section": "Rzeki, jeziora i Morze Bałtyckie",
    "type": "true_false",
    "prompt": "Morze Bałtyckie łączy się z Morzem Północnym między innymi przez Sund i Bełty.",
    "options": null,
    "answer": true,
    "explanation": "Bałtyk jest połączony z Morzem Północnym przez Sund, Mały Bełt, Wielki Bełt oraz obszary Kattegatu i Skagerraku."
  },
  {
    "id": "R04_WOD_12",
    "section": "Rzeki, jeziora i Morze Bałtyckie",
    "type": "multi_select",
    "prompt": "Wskaż zastosowania sztucznych jezior zaporowych.",
    "options": [
      "ograniczanie zagrożenia powodziowego",
      "zaopatrywanie miast w wodę",
      "wytwarzanie soli kamiennej w złożach",
      "produkcja energii w elektrowni wodnej",
      "rekreacja"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Zbiorniki zaporowe służą retencji, zaopatrzeniu w wodę, energetyce, rolnictwu i wypoczynkowi."
  },
  {
    "id": "R04_PRZ_01",
    "section": "Gleby, lasy i ochrona przyrody",
    "type": "single_choice",
    "prompt": "Na jakim osadzie macierzystym powstają czarnoziemy?",
    "options": [
      "na granicie",
      "na piasku wydmowym",
      "na lessie",
      "na bazalcie",
      "na żwirze rzecznym",
      "na rudzie miedzi"
    ],
    "answer": 2,
    "image": "r04_profil_glebowy.jpg",
    "explanation": "Czarnoziemy w strefie umiarkowanej rozwijają się na lessie i są glebami bardzo żyznymi."
  },
  {
    "id": "R04_PRZ_02",
    "section": "Gleby, lasy i ochrona przyrody",
    "type": "true_false",
    "prompt": "Mady są glebami występującymi przede wszystkim w dolinach rzecznych i przy ujściach rzek.",
    "options": null,
    "answer": true,
    "explanation": "Mady powstają z osadów rzecznych odkładanych na terenach zalewowych dolin i u ujść rzek."
  },
  {
    "id": "R04_PRZ_03",
    "section": "Gleby, lasy i ochrona przyrody",
    "type": "match",
    "prompt": "Dopasuj rodzaj gleby do warunków powstawania lub występowania.",
    "options": null,
    "left": [
      "rędziny",
      "mady",
      "czarne ziemie",
      "gleby górskie"
    ],
    "right": [
      "tereny pobagienne",
      "strome obszary górskie",
      "doliny i obszary zalewowe rzek",
      "skały wapienne lub gipsowe"
    ],
    "answer": {
      "rędziny": "skały wapienne lub gipsowe",
      "mady": "doliny i obszary zalewowe rzek",
      "czarne ziemie": "tereny pobagienne",
      "gleby górskie": "strome obszary górskie"
    },
    "image": "r04_profil_glebowy.jpg",
    "explanation": "Rędziny tworzą się na skałach wapiennych i gipsowych, mady na osadach rzecznych, czarne ziemie na terenach pobagiennych, a gleby górskie w górach."
  },
  {
    "id": "R04_PRZ_04",
    "section": "Gleby, lasy i ochrona przyrody",
    "type": "riddle",
    "prompt": "Jak nazywa się zbiorowisko leśne z przewagą drzew iglastych, najczęściej występujące na glebach mało żyznych?",
    "options": null,
    "answer": "bór",
    "altAnswers": [
      "bór",
      "bory"
    ],
    "image": "r04_las_iglasty.jpg",
    "explanation": "Bory to lasy iglaste, najczęściej sosnowe na niżu i świerkowe w górach, zwykle na glebach o niskiej żyzności."
  },
  {
    "id": "R04_PRZ_05",
    "section": "Gleby, lasy i ochrona przyrody",
    "type": "multi_select",
    "prompt": "Które spośród wymienionych są prawnymi formami ochrony przyrody w Polsce?",
    "options": [
      "park narodowy",
      "rezerwat przyrody",
      "kopalnia odkrywkowa",
      "pomnik przyrody",
      "strefa przemysłowa",
      "park krajobrazowy"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "image": "r04_krajobraz_parku_narodowego.jpg",
    "explanation": "Formy ochrony przyrody w Polsce obejmują m.in. parki narodowe, rezerwaty przyrody, pomniki przyrody i parki krajobrazowe."
  },
  {
    "id": "R04_PRZ_06",
    "section": "Gleby, lasy i ochrona przyrody",
    "type": "scenario",
    "prompt": "Pracownik parku narodowego nie może ingerować w przyrodę danego fragmentu obszaru, ponieważ procesy mają tam przebiegać samodzielnie. Jaki to rodzaj ochrony?",
    "options": [
      "ochrona częściowa czynna",
      "ochrona ścisła bierna",
      "melioracja rolnicza",
      "rekultywacja przemysłowa"
    ],
    "answer": 1,
    "image": "r04_krajobraz_parku_narodowego.jpg",
    "explanation": "Ochrona ścisła (bierna) zakłada nieingerowanie człowieka w procesy przyrodnicze. Ochrona częściowa dopuszcza działania ochronne."
  },
  {
    "id": "R04_PRZ_07",
    "section": "Gleby, lasy i ochrona przyrody",
    "type": "odd_one_out",
    "prompt": "Wskaż glebę astrefową wśród gleb strefowych: gleba brunatna, gleba płowa, gleba bielicowa, mada.",
    "options": null,
    "answer": "mada",
    "explanation": "Gleby brunatne, płowe i bielicowe zaliczono do strefowych, a mady do astrefowych."
  },
  {
    "id": "R04_PRZ_08",
    "section": "Gleby, lasy i ochrona przyrody",
    "type": "sort",
    "prompt": "Przyporządkuj gleby do odpowiednich kategorii.",
    "options": null,
    "items": [
      "rędzina",
      "czarnoziem",
      "mada",
      "gleba brunatna",
      "czarna ziemia",
      "gleba bielicowa"
    ],
    "categories": [
      "gleby strefowe",
      "gleby astrefowe"
    ],
    "answer": {
      "gleby strefowe": [
        "czarnoziem",
        "gleba bielicowa",
        "gleba brunatna"
      ],
      "gleby astrefowe": [
        "mada",
        "rędzina",
        "czarna ziemia"
      ]
    },
    "explanation": "Gleby strefowe zależą przede wszystkim od klimatu i roślinności; astrefowe są silniej związane z warunkami lokalnymi, np. rodzajem skały czy wodami."
  },
  {
    "id": "R04_PRZ_09",
    "section": "Gleby, lasy i ochrona przyrody",
    "type": "fill_in",
    "prompt": "W Polsce istnieją __________ parki narodowe.",
    "options": null,
    "answer": [
      "23"
    ],
    "altAnswers": [
      [
        "23",
        "dwadzieścia trzy"
      ]
    ],
    "image": "r04_krajobraz_parku_narodowego.jpg",
    "explanation": "W Polsce istnieją 23 parki narodowe."
  },
  {
    "id": "R04_PRZ_10",
    "section": "Gleby, lasy i ochrona przyrody",
    "type": "true_false",
    "prompt": "W Puszczy Białowieskiej zachował się płat naturalnej puszczy nizinnej.",
    "options": null,
    "answer": true,
    "explanation": "Puszcza Białowieska chroni fragment dobrze zachowanego naturalnego lasu nizinnego."
  },
  {
    "id": "R04_SUW_01",
    "section": "Bogactwa mineralne Polski",
    "type": "single_choice",
    "prompt": "Który surowiec uważa się za najważniejsze bogactwo mineralne wydobywane w Polsce?",
    "options": [
      "ropa naftowa",
      "siarka",
      "rudy żelaza",
      "węgiel kamienny",
      "gaz ziemny",
      "sól kamienna"
    ],
    "answer": 3,
    "image": "r04_mapa_zloz_mineralnych.jpg",
    "explanation": "Węgiel kamienny jest uznawany za najważniejsze bogactwo mineralne wydobywane w Polsce."
  },
  {
    "id": "R04_SUW_02",
    "section": "Bogactwa mineralne Polski",
    "type": "match",
    "prompt": "Połącz surowce z głównymi obszarami ich występowania lub wydobycia w Polsce.",
    "options": null,
    "left": [
      "węgiel kamienny",
      "rudy miedzi",
      "siarka",
      "sól kamienna"
    ],
    "right": [
      "Osiek koło Sandomierza",
      "Kujawy",
      "Górnośląskie Zagłębie Węglowe",
      "Legnicko-Głogowski Okręg Miedziowy"
    ],
    "answer": {
      "węgiel kamienny": "Górnośląskie Zagłębie Węglowe",
      "rudy miedzi": "Legnicko-Głogowski Okręg Miedziowy",
      "siarka": "Osiek koło Sandomierza",
      "sól kamienna": "Kujawy"
    },
    "image": "r04_mapa_zloz_mineralnych.jpg",
    "explanation": "W Polsce eksploatuje się m.in. węgiel, miedź, siarkę i sól kamienną w charakterystycznych dla tych surowców regionach."
  },
  {
    "id": "R04_SUW_03",
    "section": "Bogactwa mineralne Polski",
    "type": "sort",
    "prompt": "Przyporządkuj zasoby naturalne do grup według odnawialności.",
    "options": null,
    "items": [
      "drewno",
      "ropa naftowa",
      "energia pływów morskich",
      "rudy miedzi",
      "energia wiatru",
      "słoma",
      "węgiel brunatny"
    ],
    "categories": [
      "nieodnawialne",
      "odnawialne",
      "niewyczerpywalne"
    ],
    "answer": {
      "nieodnawialne": [
        "ropa naftowa",
        "węgiel brunatny",
        "rudy miedzi"
      ],
      "odnawialne": [
        "drewno",
        "słoma"
      ],
      "niewyczerpywalne": [
        "energia wiatru",
        "energia pływów morskich"
      ]
    },
    "explanation": "Złoża mineralne ulegają wyczerpaniu, drewno i biomasa mogą się odnawiać, a wiatr oraz pływy dostarczają energii niewyczerpywalnej."
  },
  {
    "id": "R04_SUW_04",
    "section": "Bogactwa mineralne Polski",
    "type": "true_false",
    "prompt": "W Legnicko-Głogowskim Okręgu Miedziowym wydobywa się przede wszystkim rudy cynku i ołowiu.",
    "options": null,
    "answer": false,
    "image": "r04_mapa_zloz_mineralnych.jpg",
    "explanation": "Zagłębie Legnicko-Głogowskie jest najważniejszym obszarem eksploatacji rud miedzi, z których odzyskuje się też inne metale."
  },
  {
    "id": "R04_SUW_05",
    "section": "Bogactwa mineralne Polski",
    "type": "scenario",
    "prompt": "Obserwujesz olbrzymie wyrobisko i hałdy nadkładu. W tej części Polski surowiec energetyczny eksploatuje się metodą odkrywkową. O jaki surowiec chodzi?",
    "options": [
      "węgiel brunatny",
      "węgiel kamienny",
      "sól kamienna",
      "siarkę rodzimą"
    ],
    "answer": 0,
    "image": "r04_kopalnia_odkrywkowa.jpg",
    "explanation": "W Polsce węgiel brunatny eksploatuje się odkrywkowo; wymaga to usuwania dużych ilości skał nadkładu."
  },
  {
    "id": "R04_SUW_06",
    "section": "Bogactwa mineralne Polski",
    "type": "riddle",
    "prompt": "W której miejscowości koło Sandomierza wydobywa się siarkę metodą otworową?",
    "options": null,
    "answer": "Osiek",
    "altAnswers": [
      "Osiek",
      "w Osieku"
    ],
    "explanation": "W Osieku koło Sandomierza siarkę wydobywa się metodą otworową."
  },
  {
    "id": "R04_SUW_07",
    "section": "Bogactwa mineralne Polski",
    "type": "multi_select",
    "prompt": "Wskaż zastosowania węgla kamiennego.",
    "options": [
      "opał",
      "surowiec do produkcji szkła optycznego",
      "produkcja energii elektrycznej w elektrowniach cieplnych",
      "produkcja miedzi z rud",
      "surowiec przemysłu chemicznego"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Węgiel kamienny wykorzystuje się jako paliwo, w elektroenergetyce oraz jako surowiec dla przemysłu chemicznego."
  },
  {
    "id": "R04_SUW_08",
    "section": "Bogactwa mineralne Polski",
    "type": "fill_in",
    "prompt": "Sól kamienna jest w Polsce wydobywana przede wszystkim ze złóż na __________.",
    "options": null,
    "answer": [
      "Kujawach"
    ],
    "altAnswers": [
      [
        "Kujawach",
        "Kujawy"
      ]
    ],
    "explanation": "Ważnym obszarem wydobycia soli kamiennej są Kujawy; historyczne kopalnie w Wieliczce i Bochni zakończyły wydobycie."
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które zestawienie rozciągłości południkowej i równoleżnikowej Polski jest prawidłowe?",
    "options": [
      "południkowa 10°01′ i równoleżnikowa 5°50′",
      "południkowa 5°50′ i równoleżnikowa 10°01′",
      "południkowa 5°01′ i równoleżnikowa 10°50′",
      "południkowa 6°50′ i równoleżnikowa 14°07′"
    ],
    "answer": 1,
    "image": "r04_mapa_polozenia_polski.jpg",
    "explanation": "Rozciągłość południkowa Polski to 5°50′, a równoleżnikowa to różnica 24°08′ E i 14°07′ E, czyli 10°01′."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Polska weszła do strefy Schengen dnia __________.",
    "options": null,
    "answer": [
      "21.12.2007"
    ],
    "altAnswers": [
      [
        "21.12.2007",
        "21 grudnia 2007",
        "21 XII 2007",
        "21.12.2007 r."
      ]
    ],
    "explanation": "Polska weszła do strefy Schengen 21 grudnia 2007 roku."
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "W obowiązującym od 1975 r. dawnym podziale administracyjnym Polski istniało 49 województw i nie było szczebla powiatowego.",
    "options": null,
    "answer": true,
    "explanation": "W latach 1975–1998 podział był dwustopniowy: 49 województw i gminy. Podział trójstopniowy przywrócono od 1 stycznia 1999 r."
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz siedziby organów w dwóch województwach z właściwymi miastami.",
    "options": null,
    "left": [
      "sejmik kujawsko-pomorskiego",
      "wojewoda kujawsko-pomorskiego",
      "sejmik lubuskiego",
      "wojewoda lubuskiego"
    ],
    "right": [
      "Gorzów Wielkopolski",
      "Toruń",
      "Zielona Góra",
      "Bydgoszcz"
    ],
    "answer": {
      "sejmik kujawsko-pomorskiego": "Toruń",
      "wojewoda kujawsko-pomorskiego": "Bydgoszcz",
      "sejmik lubuskiego": "Zielona Góra",
      "wojewoda lubuskiego": "Gorzów Wielkopolski"
    },
    "image": "r04_mapa_wojewodztw.jpg",
    "explanation": "W dwóch województwach siedziby władz samorządowych i rządowych znajdują się w różnych miastach."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż okresy geologiczne od najstarszego do najmłodszego.",
    "options": null,
    "items": [
      "jura",
      "karbon",
      "kreda",
      "trias",
      "perm"
    ],
    "answer": [
      "karbon",
      "perm",
      "trias",
      "jura",
      "kreda"
    ],
    "explanation": "W kolejności geologicznej po karbonie następują perm, trias, jura i kreda."
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które zlodowacenie Polski miało największy zasięg i dotarło do Pogórza Karpackiego oraz Sudetów?",
    "options": [
      "południowopolskie (Sanu)",
      "północnopolskie (bałtyckie)",
      "środkowopolskie (warszawskie)",
      "wyłącznie zlodowacenie górskie w Tatrach"
    ],
    "answer": 0,
    "explanation": "Najstarsze zlodowacenie południowopolskie sięgało najdalej na południe, do Pogórza Karpackiego i Sudetów."
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się najwyższe wzniesienie Niżu Polskiego na Pojezierzu Pomorskim, o wysokości 329 m n.p.m.?",
    "options": null,
    "answer": "Wieżyca",
    "altAnswers": [
      "Wieżyca",
      "Wiezyca"
    ],
    "explanation": "Wieżyca (329 m n.p.m.) jest najwyższym wzniesieniem Niżu Polskiego."
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Wybierz prawidłowe powiązania surowców z okresami i procesami geologicznymi.",
    "options": [
      "karbon — węgiel kamienny Górnego i Dolnego Śląska",
      "perm — rudy miedzi rejonu Polkowic i Głogowa",
      "jura — pokłady soli w Wieliczce",
      "trias — rudy cynku i ołowiu Górnego Śląska",
      "prekambr — powstanie fliszu karpackiego",
      "paleogen i neogen — pokłady soli kamiennej Wieliczki"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "explanation": "Węgiel wiąże się z karbonem, miedź z permem, cynk i ołów z triasem, a złoża soli w Wieliczce z paleogenem i neogenem."
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jak dawno ostatecznie stopniał lądolód, który pozostawił w Polsce krajobraz polodowcowy?",
    "options": [
      "około 250 milionów lat temu",
      "około 430 tysięcy lat temu",
      "około 65 milionów lat temu",
      "około 2 tysięcy lat temu",
      "około 12 tysięcy lat temu",
      "około 100 tysięcy lat temu"
    ],
    "answer": 4,
    "explanation": "Lądolód, który ukształtował polski krajobraz polodowcowy, ostatecznie stopniał około 12 tysięcy lat temu."
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz rekordy klimatyczne Polski z miejscami ich zanotowania.",
    "options": null,
    "left": [
      "temperatura +40,2°C",
      "temperatura −41,0°C",
      "2770 mm opadu w 2001 r.",
      "ponad 300 dni z mgłą w roku"
    ],
    "right": [
      "Śnieżka",
      "Prószków koło Opola",
      "Dolina Pięciu Stawów",
      "Siedlce"
    ],
    "answer": {
      "temperatura +40,2°C": "Prószków koło Opola",
      "temperatura −41,0°C": "Siedlce",
      "2770 mm opadu w 2001 r.": "Dolina Pięciu Stawów",
      "ponad 300 dni z mgłą w roku": "Śnieżka"
    },
    "explanation": "Rekordy klimatyczne Polski obejmują Prószków (+40,2°C), Siedlce (−41°C), Dolinę Pięciu Stawów (2770 mm opadów) i Śnieżkę (ponad 300 dni z mgłą)."
  },
  {
    "id": "R04_HARD_11",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W Polsce rok hydrologiczny trwa od 1 __________ do 31 __________.",
    "options": null,
    "answer": [
      "listopada",
      "października"
    ],
    "altAnswers": [
      [
        "listopada",
        "listopad"
      ],
      [
        "października",
        "październik"
      ]
    ],
    "explanation": "Rok hydrologiczny zaczyna się 1 listopada, a kończy 31 października następnego roku."
  },
  {
    "id": "R04_HARD_12",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Dopasuj kanały do ich funkcji lub łączonych obszarów.",
    "options": null,
    "left": [
      "Kanał Bydgoski",
      "Kanał Augustowski",
      "Kanał Gliwicki",
      "Kanał Wieprz–Krzna"
    ],
    "right": [
      "łączy Wyżynę Śląską z Odrą",
      "najdłuższy kanał w Polsce (140 km)",
      "łączy dorzecza Odry i Wisły",
      "łączy dorzecza Wisły i Niemna"
    ],
    "answer": {
      "Kanał Bydgoski": "łączy dorzecza Odry i Wisły",
      "Kanał Augustowski": "łączy dorzecza Wisły i Niemna",
      "Kanał Gliwicki": "łączy Wyżynę Śląską z Odrą",
      "Kanał Wieprz–Krzna": "najdłuższy kanał w Polsce (140 km)"
    },
    "image": "r04_mapa_rzek_polski.jpg",
    "explanation": "Kanały łączą dorzecza i umożliwiają gospodarcze wykorzystanie wód. Kanał Wieprz–Krzna jest najdłuższym kanałem w Polsce."
  },
  {
    "id": "R04_HARD_13",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż fazy rozwoju Morza Bałtyckiego od najstarszej do najpóźniejszej.",
    "options": null,
    "items": [
      "Morze Litorynowe",
      "Bałtyckie Jezioro Lodowcowe",
      "współczesny Bałtyk",
      "Jezioro Ancylusowe",
      "Morze Yoldiowe"
    ],
    "answer": [
      "Bałtyckie Jezioro Lodowcowe",
      "Morze Yoldiowe",
      "Jezioro Ancylusowe",
      "Morze Litorynowe",
      "współczesny Bałtyk"
    ],
    "explanation": "Po zaniku lądolodu następowały kolejno etapy jeziorne i morskie: Bałtyckie Jezioro Lodowcowe, Yoldia, Ancylus, Littorina i współczesne morze."
  },
  {
    "id": "R04_HARD_14",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który zestaw prawidłowo podaje średnie zasolenie powierzchniowych wód Bałtyku i przeciętne zasolenie oceanu światowego?",
    "options": [
      "Bałtyk 35‰ i ocean 7,5‰",
      "Bałtyk 20‰ i ocean 35‰",
      "Bałtyk 7,5‰ i ocean 35‰",
      "Bałtyk 2‰ i ocean 7,5‰",
      "Bałtyk 35‰ i ocean 40‰"
    ],
    "answer": 2,
    "explanation": "Średnie zasolenie wód powierzchniowych Bałtyku to około 7,5‰, a oceanu światowego około 35‰."
  },
  {
    "id": "R04_HARD_15",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W archiwum UNESCO znajdujesz informację o obszarze przyrodniczym w Polsce wpisanym na Listę Światowego Dziedzictwa w 1979 r., a w 1992 r. rozszerzonym o część białoruską. O jaki obszar chodzi?",
    "options": [
      "Puszczę Białowieską",
      "Słowiński Park Narodowy",
      "Bory Tucholskie",
      "Karkonoski Park Narodowy"
    ],
    "answer": 0,
    "image": "r04_krajobraz_parku_narodowego.jpg",
    "explanation": "Puszczę Białowieską wpisano na Listę Światowego Dziedzictwa w 1979 r.; jej białoruską część dołączono w 1992 r."
  }
];

const KID_PROMPTS = {
  "R04_POL_05": "Połącz województwo, powiat i gminę z ich miejscem w podziale Polski.",
  "R04_POL_07": "Jakie dwie rzeki wyznaczają część zachodniej granicy Polski?",
  "R04_GEO_02": "Zaznacz trzy główne części budowy geologicznej Polski.",
  "R04_GEO_08": "Rozdziel formy terenu według tego, czy stworzył je lądolód, woda czy lodowiec górski.",
  "R04_KLI_03": "Dopasuj masy powietrza do tego, jaką pogodę przynoszą.",
  "R04_KLI_04": "Jak nazywa się wiatr wiejący w dzień znad morza na ląd?",
  "R04_WOD_04": "Połącz rodzaje jezior z tym, jak powstały.",
  "R04_PRZ_06": "Jak nazywa się ochrona przyrody bez ingerencji człowieka?",
  "R04_SUW_03": "Podziel zasoby naturalne na odnawialne, nieodnawialne i niewyczerpywalne.",
  "R04_HARD_13": "Ułóż etapy powstawania Bałtyku od najstarszego do najmłodszego."
};

const chapter = {
  "id": "r04",
  "number": 4,
  "title": "Środowisko przyrodnicze Polski",
  "icon": "🌍",
  "sectionOrder": [
    "Położenie, granice i administracja Polski",
    "Budowa geologiczna i zlodowacenia",
    "Pogoda i klimat Polski",
    "Rzeki, jeziora i Morze Bałtyckie",
    "Gleby, lasy i ochrona przyrody",
    "Bogactwa mineralne Polski"
  ],
  "sectionIcons": {
    "Położenie, granice i administracja Polski": "🧭",
    "Budowa geologiczna i zlodowacenia": "⛰️",
    "Pogoda i klimat Polski": "🌦️",
    "Rzeki, jeziora i Morze Bałtyckie": "🌊",
    "Gleby, lasy i ochrona przyrody": "🌳",
    "Bogactwa mineralne Polski": "⛏️"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
