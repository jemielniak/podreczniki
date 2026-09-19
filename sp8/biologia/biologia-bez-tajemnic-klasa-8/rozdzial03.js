// Skróty sekcji (identyfikatory ćwiczeń):
//   SLAD = Ślady ewolucji i skamieniałości
//   NARZ = Pokrewieństwo i narządy
//   NAT = Dobór naturalny
//   SZT = Dobór sztuczny
//   CZLO = Ewolucja człowieka
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R03_SLAD_01",
    "section": "Ślady ewolucji i skamieniałości",
    "type": "single_choice",
    "prompt": "Czym jest ewolucja biologiczna?",
    "options": [
      "Stopniowymi zmianami cech organizmów w kolejnych pokoleniach",
      "Przeobrażeniem gąsienicy w motyla",
      "Nagłym wzrostem jednego osobnika",
      "Rocznym cyklem rozwojowym roślin"
    ],
    "answer": 0,
    "explanation": "Ewolucja obejmuje stopniowe zmiany cech i sposobu życia organizmów; część gatunków wymiera, a inne powstają."
  },
  {
    "id": "R03_SLAD_02",
    "section": "Ślady ewolucji i skamieniałości",
    "type": "true_false",
    "prompt": "Skamieniałościami mogą być zarówno szczątki, jak i ślady działalności dawno żyjących organizmów.",
    "options": null,
    "answer": true,
    "explanation": "Do skamieniałości należą m.in. kości, muszle, odciski liści i inne ślady działalności organizmów."
  },
  {
    "id": "R03_SLAD_03",
    "section": "Ślady ewolucji i skamieniałości",
    "type": "multi_select",
    "prompt": "Które z obiektów mogą stanowić skamieniałości?",
    "options": [
      "Odcisk liścia w skale",
      "Utrwalony w osadzie szkielet",
      "Ślad dawnego organizmu w skale",
      "Żywy motyl na łące",
      "Świeże liście drzewa"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Skamieniałości to zachowane pozostałości lub ślady dawnych organizmów.",
    "image": "r03_trylobit_skamienialosc.jpg"
  },
  {
    "id": "R03_SLAD_04",
    "section": "Ślady ewolucji i skamieniałości",
    "type": "fill_in",
    "prompt": "Naukowca badającego dawno wymarłe organizmy na podstawie skamieniałości nazywa się __________.",
    "options": null,
    "answer": [
      "paleontologiem"
    ],
    "explanation": "Paleontolodzy odnajdują i analizują skamieniałości."
  },
  {
    "id": "R03_SLAD_05",
    "section": "Ślady ewolucji i skamieniałości",
    "type": "riddle",
    "prompt": "Zachowany w bursztynie owad jest przykładem czego?",
    "options": null,
    "answer": "skamieniałości",
    "altAnswers": [
      "skamieniałości",
      "skamieniałość"
    ],
    "explanation": "Bursztyn to utwardzona żywica; zachowany w niej dawny organizm jest skamieniałością.",
    "image": "r03_owad_w_bursztynie.jpg"
  },
  {
    "id": "R03_SLAD_06",
    "section": "Ślady ewolucji i skamieniałości",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do pozostałych skamieniałości: odcisk liścia, szkielet dinozaura, muszla utrwalona w osadzie, żywy dziobak.",
    "options": null,
    "answer": "żywy dziobak",
    "explanation": "Żywy dziobak nie jest skamieniałością, choć zalicza się go do tak zwanych żywych skamieniałości."
  },
  {
    "id": "R03_SLAD_07",
    "section": "Ślady ewolucji i skamieniałości",
    "type": "scenario",
    "prompt": "Odnaleziono organizm kopalny o cechach gadów i ptaków. Jak określa się taki organizm?",
    "options": [
      "Forma przejściowa",
      "Narząd szczątkowy",
      "Odmiana rośliny",
      "Rasa zwierzęcia"
    ],
    "answer": 0,
    "explanation": "Formy przejściowe mają cechy dwóch grup systematycznych.",
    "image": "r03_praptak_rekonstrukcja.jpg"
  },
  {
    "id": "R03_SLAD_08",
    "section": "Ślady ewolucji i skamieniałości",
    "type": "match",
    "prompt": "Połącz dowód ewolucji z jego przykładem.",
    "options": null,
    "left": [
      "Skamieniałość",
      "Forma przejściowa",
      "Żywa skamieniałość"
    ],
    "right": [
      "Latimeria",
      "Praptak",
      "Owad zachowany w bursztynie"
    ],
    "answer": {
      "Skamieniałość": "Owad zachowany w bursztynie",
      "Forma przejściowa": "Praptak",
      "Żywa skamieniałość": "Latimeria"
    },
    "explanation": "Owad w bursztynie jest skamieniałością, praptak formą przejściową, a latimeria żywą skamieniałością."
  },
  {
    "id": "R03_SLAD_09",
    "section": "Ślady ewolucji i skamieniałości",
    "type": "sort",
    "prompt": "Rozdziel przykłady na formy kopalne i żyjące współcześnie.",
    "options": null,
    "items": [
      "szkielet dinozaura",
      "owad w bursztynie",
      "dziobak",
      "odcisk liścia w skale",
      "latimeria",
      "miłorząb"
    ],
    "categories": [
      "formy kopalne",
      "organizmy żyjące współcześnie"
    ],
    "answer": {
      "formy kopalne": [
        "szkielet dinozaura",
        "odcisk liścia w skale",
        "owad w bursztynie"
      ],
      "organizmy żyjące współcześnie": [
        "latimeria",
        "dziobak",
        "miłorząb"
      ]
    },
    "explanation": "Szkielet, odcisk i owad utrwalony w bursztynie są formami kopalnymi; pozostałe organizmy żyją dziś."
  },
  {
    "id": "R03_SLAD_10",
    "section": "Ślady ewolucji i skamieniałości",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania skamieniałości w kolejności.",
    "options": null,
    "items": [
      "Szczątki zostają szybko przykryte osadami",
      "Pozostałości utrwalają się w osadzie",
      "Organizm umiera",
      "Dostęp tlenu zostaje ograniczony"
    ],
    "answer": [
      "Organizm umiera",
      "Szczątki zostają szybko przykryte osadami",
      "Dostęp tlenu zostaje ograniczony",
      "Pozostałości utrwalają się w osadzie"
    ],
    "explanation": "Szybkie zakrycie szczątków i ograniczenie dostępu tlenu sprzyjają ich zachowaniu."
  },
  {
    "id": "R03_SLAD_11",
    "section": "Ślady ewolucji i skamieniałości",
    "type": "true_false",
    "prompt": "Praptak miał wyłącznie cechy ptaków.",
    "options": null,
    "answer": false,
    "explanation": "Praptak łączył cechy ptasie, w tym pióra, z cechami gadzimi, np. pazurami na kończynach przednich."
  },
  {
    "id": "R03_SLAD_12",
    "section": "Ślady ewolucji i skamieniałości",
    "type": "single_choice",
    "prompt": "Który z organizmów zaliczono do żywych skamieniałości?",
    "options": [
      "Łodzik",
      "Tyranozaur",
      "Trylobit",
      "Praptak"
    ],
    "answer": 0,
    "explanation": "Łodzik żyje współcześnie, natomiast tyranozaur, trylobit i praptak wymarły.",
    "image": "r03_lodzik.jpg"
  },
  {
    "id": "R03_NARZ_01",
    "section": "Pokrewieństwo i narządy",
    "type": "single_choice",
    "prompt": "Jak nazywa się narządy o wspólnym pochodzeniu i podobnej budowie wewnętrznej, które mogą pełnić różne funkcje?",
    "options": [
      "Narządy homologiczne",
      "Narządy analogiczne",
      "Narządy szczątkowe",
      "Skamieniałości"
    ],
    "answer": 0,
    "explanation": "Kończyny człowieka, kota, walenia i nietoperza zawierają te same kości, choć pełnią różne funkcje.",
    "image": "r03_konczyny_ssakow.jpg"
  },
  {
    "id": "R03_NARZ_02",
    "section": "Pokrewieństwo i narządy",
    "type": "multi_select",
    "prompt": "Które z poniższych struktur są narządami szczątkowymi człowieka?",
    "options": [
      "Kość ogonowa",
      "Mięśnie poruszające małżowiną uszną",
      "Ostatnia para zębów trzonowych",
      "Serce",
      "Palce stopy"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Kość ogonowa, mięśnie poruszające małżowiną uszną i ostatnia para zębów trzonowych są pozostałościami po przodkach, u których pełniły ważniejszą funkcję."
  },
  {
    "id": "R03_NARZ_03",
    "section": "Pokrewieństwo i narządy",
    "type": "true_false",
    "prompt": "Kończyna człowieka i płetwa walenia zawierają kości o wspólnym pochodzeniu ewolucyjnym.",
    "options": null,
    "answer": true,
    "explanation": "Kończyny ssaków mają homologiczny szkielet, mimo różnic w wyglądzie i funkcji."
  },
  {
    "id": "R03_NARZ_04",
    "section": "Pokrewieństwo i narządy",
    "type": "fill_in",
    "prompt": "Podobieństwo budowy narządów wynikające ze wspólnego pochodzenia to __________.",
    "options": null,
    "answer": [
      "homologia"
    ],
    "explanation": "Homologia jest dowodem wspólnego pochodzenia ewolucyjnego."
  },
  {
    "id": "R03_NARZ_05",
    "section": "Pokrewieństwo i narządy",
    "type": "odd_one_out",
    "prompt": "Który narząd nie jest przykładem narządu szczątkowego u człowieka: kość ogonowa, mięśnie poruszające małżowiną uszną, ostatnia para zębów trzonowych, serce.",
    "options": null,
    "answer": "serce",
    "explanation": "Serce pełni istotną funkcję, a kość ogonowa, mięśnie poruszające małżowiną uszną i ostatnia para zębów trzonowych mają charakter szczątkowy."
  },
  {
    "id": "R03_NARZ_06",
    "section": "Pokrewieństwo i narządy",
    "type": "match",
    "prompt": "Połącz narząd szczątkowy z funkcją u przodków człowieka.",
    "options": null,
    "left": [
      "Kość ogonowa",
      "Mięśnie poruszające małżowiną uszną",
      "Ostatnia para zębów trzonowych"
    ],
    "right": [
      "Rozcieranie pokarmu roślinnego",
      "Lepsze wychwytywanie dźwięków",
      "Pomoc w utrzymywaniu równowagi na drzewach"
    ],
    "answer": {
      "Kość ogonowa": "Pomoc w utrzymywaniu równowagi na drzewach",
      "Mięśnie poruszające małżowiną uszną": "Lepsze wychwytywanie dźwięków",
      "Ostatnia para zębów trzonowych": "Rozcieranie pokarmu roślinnego"
    },
    "explanation": "Ogon pomagał utrzymać równowagę, ruch uszu ułatwiał słyszenie, a dodatkowe zęby rozcierały pokarm."
  },
  {
    "id": "R03_NARZ_07",
    "section": "Pokrewieństwo i narządy",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do rodzaju podobieństwa.",
    "options": null,
    "items": [
      "ręka człowieka i skrzydło nietoperza",
      "skrzydło myszołowa i skrzydło pszczoły",
      "płetwa walenia i przednia łapa kota"
    ],
    "categories": [
      "wspólne pochodzenie",
      "podobna funkcja bez bliskiego pokrewieństwa"
    ],
    "answer": {
      "wspólne pochodzenie": [
        "ręka człowieka i skrzydło nietoperza",
        "płetwa walenia i przednia łapa kota"
      ],
      "podobna funkcja bez bliskiego pokrewieństwa": [
        "skrzydło myszołowa i skrzydło pszczoły"
      ]
    },
    "explanation": "Szkielety kończyn ssaków są homologiczne; skrzydła myszołowa i pszczoły służą do lotu mimo odmiennej budowy i pochodzenia."
  },
  {
    "id": "R03_NARZ_08",
    "section": "Pokrewieństwo i narządy",
    "type": "scenario",
    "prompt": "Naukowiec porównuje szkielety przednich kończyn ssaków. Co świadczy o ich wspólnym pochodzeniu?",
    "options": [
      "Obecność tych samych kości w podobnym układzie",
      "Występowanie identycznej barwy futra",
      "Ten sam sposób zdobywania pokarmu",
      "Równa masa ciała"
    ],
    "answer": 0,
    "explanation": "W kończynach badanych ssaków występują te same kości, choć kończyny pełnią różne funkcje.",
    "image": "r03_konczyny_ssakow.jpg"
  },
  {
    "id": "R03_NARZ_09",
    "section": "Pokrewieństwo i narządy",
    "type": "riddle",
    "prompt": "Jak nazywa się pozostałość po ogonie przodków człowieka?",
    "options": null,
    "answer": "kość ogonowa",
    "altAnswers": [
      "kość ogonowa",
      "kosc ogonowa"
    ],
    "explanation": "Kość ogonowa to narząd szczątkowy związany z ogonem przodków."
  },
  {
    "id": "R03_NARZ_10",
    "section": "Pokrewieństwo i narządy",
    "type": "true_false",
    "prompt": "Podobna funkcja skrzydeł myszołowa i pszczoły dowodzi, że ich skrzydła mają taką samą budowę wewnętrzną.",
    "options": null,
    "answer": false,
    "explanation": "Oba organizmy latają, ale ich skrzydła mają różną budowę i nie dowodzą bliskiego pokrewieństwa."
  },
  {
    "id": "R03_NARZ_11",
    "section": "Pokrewieństwo i narządy",
    "type": "single_choice",
    "prompt": "O czym świadczą szczątkowe kończyny występujące u niektórych węży?",
    "options": [
      "O pochodzeniu od czworonożnych przodków",
      "O pochodzeniu od współczesnych pszczół",
      "O braku ewolucji węży",
      "O pochodzeniu od ptaków"
    ],
    "answer": 0,
    "explanation": "Szczątkowe kończyny niektórych węży są śladem czworonożnych przodków."
  },
  {
    "id": "R03_NARZ_12",
    "section": "Pokrewieństwo i narządy",
    "type": "multi_select",
    "prompt": "Co może stanowić dowód wspólnego pochodzenia ewolucyjnego ssaków?",
    "options": [
      "Podobny plan budowy szkieletu",
      "Homologiczne kości kończyn",
      "Odmienny kolor sierści",
      "Taki sam wiek wszystkich osobników"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Podobny szkielet i homologiczne kończyny świadczą o pokrewieństwie."
  },
  {
    "id": "R03_NAT_01",
    "section": "Dobór naturalny",
    "type": "single_choice",
    "prompt": "Kto selekcjonuje osobniki w doborze naturalnym?",
    "options": [
      "Środowisko przyrodnicze",
      "Hodowca",
      "Ogrodnik",
      "Laborant"
    ],
    "answer": 0,
    "explanation": "Dobór naturalny zależy od warunków środowiska i możliwości przetrwania oraz rozmnażania."
  },
  {
    "id": "R03_NAT_02",
    "section": "Dobór naturalny",
    "type": "true_false",
    "prompt": "Osobniki tego samego gatunku mogą różnić się cechami sprzyjającymi przetrwaniu.",
    "options": null,
    "answer": true,
    "explanation": "Naturalna zmienność powoduje, że niektóre osobniki są lepiej przystosowane do danych warunków."
  },
  {
    "id": "R03_NAT_03",
    "section": "Dobór naturalny",
    "type": "multi_select",
    "prompt": "Które czynniki odgrywają rolę w doborze naturalnym?",
    "options": [
      "Zmienność osobników",
      "Ograniczone zasoby środowiska",
      "Konkurencja o zasoby",
      "Dobór partnerów przez hodowcę",
      "Utrwalanie korzystnych cech w potomstwie"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Zmienność, ograniczone zasoby, konkurencja i dziedziczenie korzystnych cech są elementami doboru naturalnego."
  },
  {
    "id": "R03_NAT_04",
    "section": "Dobór naturalny",
    "type": "fill_in",
    "prompt": "W doborze __________ o przeżyciu i wydaniu potomstwa decyduje przystosowanie do środowiska.",
    "options": null,
    "answer": [
      "naturalnym"
    ],
    "explanation": "Dobór naturalny sprzyja osobnikom lepiej przystosowanym do aktualnych warunków."
  },
  {
    "id": "R03_NAT_05",
    "section": "Dobór naturalny",
    "type": "single_choice",
    "prompt": "Dlaczego zięby Darwina na Galapagos różniły się wielkością i kształtem dziobów?",
    "options": [
      "Przystosowały się do zdobywania różnych rodzajów pokarmu",
      "Każdy ptak miał innego hodowcę",
      "Wszystkie żywiły się tylko jednym rodzajem pokarmu",
      "Różnice powstały w wyniku treningu lotu"
    ],
    "answer": 0,
    "explanation": "Różnice dziobów wiążą się ze specjalizacją w zdobywaniu pokarmu.",
    "image": "r03_zieby_darwina.jpg"
  },
  {
    "id": "R03_NAT_06",
    "section": "Dobór naturalny",
    "type": "odd_one_out",
    "prompt": "Który element nie należy do mechanizmu doboru naturalnego: zmienność osobników, ograniczone zasoby, konkurencja, wybór cech przez hodowcę.",
    "options": null,
    "answer": "wybór cech przez hodowcę",
    "explanation": "Wybór przez hodowcę to dobór sztuczny; pozostałe elementy dotyczą naturalnego."
  },
  {
    "id": "R03_NAT_07",
    "section": "Dobór naturalny",
    "type": "match",
    "prompt": "Połącz cechę zięb z korzyścią przy zdobywaniu pokarmu.",
    "options": null,
    "left": [
      "Masywny dziób",
      "Używanie cierni lub gałązek",
      "Różny kształt dzioba"
    ],
    "right": [
      "Zdobywanie różnych rodzajów pokarmu",
      "Wydobywanie ofiar spod kory",
      "Zgniatanie twardych łupin nasion"
    ],
    "answer": {
      "Masywny dziób": "Zgniatanie twardych łupin nasion",
      "Używanie cierni lub gałązek": "Wydobywanie ofiar spod kory",
      "Różny kształt dzioba": "Zdobywanie różnych rodzajów pokarmu"
    },
    "explanation": "Zróżnicowanie dziobów i sposobów żerowania pozwala ptakom wykorzystywać różne zasoby.",
    "image": "r03_zieby_darwina.jpg"
  },
  {
    "id": "R03_NAT_08",
    "section": "Dobór naturalny",
    "type": "sequence",
    "prompt": "Ułóż kolejne zdarzenia ilustrujące dobór naturalny.",
    "options": null,
    "items": [
      "Osobniki konkurują o ograniczone zasoby",
      "Korzystne cechy utrwalają się w kolejnych pokoleniach",
      "Wśród osobników występuje zmienność",
      "Lepiej przystosowane osobniki częściej przeżywają i rozmnażają się"
    ],
    "answer": [
      "Wśród osobników występuje zmienność",
      "Osobniki konkurują o ograniczone zasoby",
      "Lepiej przystosowane osobniki częściej przeżywają i rozmnażają się",
      "Korzystne cechy utrwalają się w kolejnych pokoleniach"
    ],
    "explanation": "Zmienność i konkurencja sprawiają, że korzystne cechy częściej przechodzą do następnych pokoleń."
  },
  {
    "id": "R03_NAT_09",
    "section": "Dobór naturalny",
    "type": "scenario",
    "prompt": "Na ośnieżonym obszarze lepiej maskują się osobniki o jasnej sierści. Jaki proces może zwiększyć częstość tej cechy?",
    "options": [
      "Dobór naturalny",
      "Dobór sztuczny",
      "Powstawanie skamieniałości",
      "Datowanie szczątków"
    ],
    "answer": 0,
    "explanation": "Jasna sierść może ułatwiać maskowanie w śniegu, więc sprzyja przetrwaniu w danych warunkach.",
    "image": "r03_zwierze_w_sniegu.jpg"
  },
  {
    "id": "R03_NAT_10",
    "section": "Dobór naturalny",
    "type": "true_false",
    "prompt": "Ograniczone zasoby środowiska mogą nasilać konkurencję osobników tego samego gatunku.",
    "options": null,
    "answer": true,
    "explanation": "Gdy zasoby są ograniczone, nie wszystkie osobniki mają jednakowe szanse przeżycia."
  },
  {
    "id": "R03_NAT_11",
    "section": "Dobór naturalny",
    "type": "riddle",
    "prompt": "Jak nazywa się mechanizm, w którym środowisko sprzyja przeżyciu najlepiej przystosowanych osobników?",
    "options": null,
    "answer": "dobór naturalny",
    "altAnswers": [
      "dobór naturalny",
      "dobor naturalny"
    ],
    "explanation": "W doborze naturalnym lepiej przystosowane osobniki częściej przeżywają i wydają potomstwo."
  },
  {
    "id": "R03_NAT_12",
    "section": "Dobór naturalny",
    "type": "sort",
    "prompt": "Podziel podane zdarzenia według tego, czy należą do doboru naturalnego.",
    "options": null,
    "items": [
      "konkurencja o ograniczony pokarm",
      "przeżycie najlepiej przystosowanych osobników",
      "krzyżowanie roślin dla większych plonów",
      "przekazywanie potomstwu cech korzystnych w środowisku",
      "wybieranie psów o pożądanym umaszczeniu"
    ],
    "categories": [
      "dobór naturalny",
      "dobór sztuczny"
    ],
    "answer": {
      "dobór naturalny": [
        "konkurencja o ograniczony pokarm",
        "przekazywanie potomstwu cech korzystnych w środowisku",
        "przeżycie najlepiej przystosowanych osobników"
      ],
      "dobór sztuczny": [
        "wybieranie psów o pożądanym umaszczeniu",
        "krzyżowanie roślin dla większych plonów"
      ]
    },
    "explanation": "W pierwszej grupie selekcjonuje środowisko; w drugiej człowiek."
  },
  {
    "id": "R03_SZT_01",
    "section": "Dobór sztuczny",
    "type": "single_choice",
    "prompt": "Kto dokonuje selekcji w doborze sztucznym?",
    "options": [
      "Człowiek",
      "Tylko drapieżnik",
      "Tylko klimat",
      "Wyłącznie pasożyt"
    ],
    "answer": 0,
    "explanation": "Hodowcy wybierają osobniki z cechami pożądanymi przez człowieka."
  },
  {
    "id": "R03_SZT_02",
    "section": "Dobór sztuczny",
    "type": "multi_select",
    "prompt": "Które cechy człowiek może wybierać w doborze sztucznym?",
    "options": [
      "Wysoka mleczność krów",
      "Wysoka nieśność kur",
      "Duże plony zbóż",
      "Nietypowe umaszczenie psów",
      "Dziedziczne przystosowanie zięb do lokalnego pokarmu"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Hodowcy wybierają np. mleczność, nieśność, plon i wygląd; przystosowanie zięb powstało w doborze naturalnym."
  },
  {
    "id": "R03_SZT_03",
    "section": "Dobór sztuczny",
    "type": "true_false",
    "prompt": "Dobór sztuczny może prowadzić do powstawania nowych ras zwierząt i odmian roślin.",
    "options": null,
    "answer": true,
    "explanation": "Krzyżowanie wybranych osobników pozwala utrwalać cechy ras i odmian."
  },
  {
    "id": "R03_SZT_04",
    "section": "Dobór sztuczny",
    "type": "fill_in",
    "prompt": "Dobór __________ polega na selekcjonowaniu organizmów przez człowieka.",
    "options": null,
    "answer": [
      "sztuczny"
    ],
    "explanation": "Selekcja prowadzona przez człowieka to dobór sztuczny."
  },
  {
    "id": "R03_SZT_05",
    "section": "Dobór sztuczny",
    "type": "single_choice",
    "prompt": "Która roślina należy do warzyw uzyskanych z kapusty warzywnej w wyniku doboru sztucznego?",
    "options": [
      "Brokuł",
      "Miłorząb",
      "Skrzyp",
      "Kaktus"
    ],
    "answer": 0,
    "explanation": "Z kapusty warzywnej uzyskano m.in. brokuł, kalafior, jarmuż i kalarepę.",
    "image": "r03_odmiany_kapusty.jpg"
  },
  {
    "id": "R03_SZT_06",
    "section": "Dobór sztuczny",
    "type": "odd_one_out",
    "prompt": "Który przykład nie dotyczy doboru sztucznego: rasa yorkshire terrier, kura wyselekcjonowana na wysoką nieśność, kalafior wyhodowany z kapusty warzywnej, zięba przystosowana do zdobywania pokarmu na Galapagos.",
    "options": null,
    "answer": "zięba przystosowana do zdobywania pokarmu na Galapagos",
    "explanation": "Różnice w sposobach zdobywania pokarmu zięb wynikały z doboru naturalnego."
  },
  {
    "id": "R03_SZT_07",
    "section": "Dobór sztuczny",
    "type": "match",
    "prompt": "Połącz organizm z cechą pożądaną przez hodowcę.",
    "options": null,
    "left": [
      "Krowa",
      "Kura nioska",
      "Zboże"
    ],
    "right": [
      "Duży plon",
      "Wysoka nieśność",
      "Wysoka mleczność"
    ],
    "answer": {
      "Krowa": "Wysoka mleczność",
      "Kura nioska": "Wysoka nieśność",
      "Zboże": "Duży plon"
    },
    "explanation": "Mleczność, nieśność i plon są przykładami cech wybieranych przez człowieka."
  },
  {
    "id": "R03_SZT_08",
    "section": "Dobór sztuczny",
    "type": "sort",
    "prompt": "Podziel cechy ze względu na mechanizm, który je selekcjonuje.",
    "options": null,
    "items": [
      "wysoka mleczność krów",
      "wysoka nieśność kur",
      "dziób pozwalający rozgniatać twarde nasiona",
      "nietypowe umaszczenie psów",
      "maskowanie jasną sierścią na śniegu"
    ],
    "categories": [
      "człowiek",
      "środowisko przyrodnicze"
    ],
    "answer": {
      "człowiek": [
        "wysoka mleczność krów",
        "nietypowe umaszczenie psów",
        "wysoka nieśność kur"
      ],
      "środowisko przyrodnicze": [
        "maskowanie jasną sierścią na śniegu",
        "dziób pozwalający rozgniatać twarde nasiona"
      ]
    },
    "explanation": "Cechy hodowlane wybiera człowiek; cechy sprzyjające przeżyciu selekcjonuje środowisko."
  },
  {
    "id": "R03_SZT_09",
    "section": "Dobór sztuczny",
    "type": "scenario",
    "prompt": "Hodowca krzyżuje psy o pożądanym umaszczeniu, aby uzyskać kolejne pokolenia z tą cechą. Który mechanizm stosuje?",
    "options": [
      "Dobór sztuczny",
      "Dobór naturalny",
      "Powstawanie skamieniałości",
      "Datowanie skamieniałości"
    ],
    "answer": 0,
    "explanation": "W doborze sztucznym człowiek wybiera i krzyżuje osobniki o pożądanych cechach.",
    "image": "r03_psy_rozne_rasy.jpg"
  },
  {
    "id": "R03_SZT_10",
    "section": "Dobór sztuczny",
    "type": "true_false",
    "prompt": "Cecha pożądana w hodowli zawsze pomaga organizmowi przetrwać w środowisku przyrodniczym.",
    "options": null,
    "answer": false,
    "explanation": "Cecha wybierana przez człowieka może być nieprzydatna w naturze; utrwalone bywają też wady genetyczne."
  },
  {
    "id": "R03_SZT_11",
    "section": "Dobór sztuczny",
    "type": "riddle",
    "prompt": "Jak nazywa się mechanizm prowadzący do powstawania ras zwierząt dzięki selekcji prowadzonej przez ludzi?",
    "options": null,
    "answer": "dobór sztuczny",
    "altAnswers": [
      "dobór sztuczny",
      "dobor sztuczny"
    ],
    "explanation": "Dobór sztuczny polega na wyborze i krzyżowaniu organizmów o cechach pożądanych przez człowieka."
  },
  {
    "id": "R03_SZT_12",
    "section": "Dobór sztuczny",
    "type": "single_choice",
    "prompt": "Który z poniższych może być niekorzystnym skutkiem doboru hodowlanego u niektórych ras psów?",
    "options": [
      "Utrwalanie wad serca",
      "Utrata zdolności oddychania",
      "Powstanie szkieletu zewnętrznego",
      "Zmiana psa w roślinę"
    ],
    "answer": 0,
    "explanation": "Dobór hodowlany może utrwalać wady genetyczne, w tym wady serca u niektórych ras psów."
  },
  {
    "id": "R03_CZLO_01",
    "section": "Ewolucja człowieka",
    "type": "single_choice",
    "prompt": "Jaka jest nazwa gatunkowa człowieka rozumnego?",
    "options": [
      "Homo sapiens",
      "Homo habilis",
      "Homo erectus",
      "Homo neanderthalensis"
    ],
    "answer": 0,
    "explanation": "Współcześnie wszyscy ludzie należą do gatunku Homo sapiens."
  },
  {
    "id": "R03_CZLO_02",
    "section": "Ewolucja człowieka",
    "type": "multi_select",
    "prompt": "Które cechy są wspólne człowiekowi i innym małpom człekokształtnym?",
    "options": [
      "Przeciwstawny kciuk",
      "Paznokcie",
      "Rozróżnianie barw",
      "Długi okres dzieciństwa",
      "Jednakowa budowa stopy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Przeciwstawny kciuk, paznokcie, rozróżnianie barw i długie dzieciństwo są cechami wspólnymi."
  },
  {
    "id": "R03_CZLO_03",
    "section": "Ewolucja człowieka",
    "type": "true_false",
    "prompt": "Człowiek i szympans mają wspólnych przodków.",
    "options": null,
    "answer": true,
    "explanation": "Świadczą o tym ich wspólne cechy i bardzo duże podobieństwo materiału genetycznego."
  },
  {
    "id": "R03_CZLO_04",
    "section": "Ewolucja człowieka",
    "type": "fill_in",
    "prompt": "Człowiek rozumny to po łacinie Homo __________.",
    "options": null,
    "answer": [
      "sapiens"
    ],
    "explanation": "Nazwą gatunkową współczesnego człowieka jest Homo sapiens."
  },
  {
    "id": "R03_CZLO_05",
    "section": "Ewolucja człowieka",
    "type": "odd_one_out",
    "prompt": "Który organizm nie jest małpą człekokształtną: goryl, orangutan, gibon, latimeria.",
    "options": null,
    "answer": "latimeria",
    "explanation": "Latimeria jest rybą; goryl, orangutan i gibon należą do małp człekokształtnych."
  },
  {
    "id": "R03_CZLO_06",
    "section": "Ewolucja człowieka",
    "type": "match",
    "prompt": "Połącz cechę z właściwym opisem człowieka lub szympansa.",
    "options": null,
    "left": [
      "Człowiek – sposób poruszania się",
      "Szympans – długość kończyn",
      "Człowiek – owłosienie"
    ],
    "right": [
      "Zredukowane",
      "Górne dłuższe od dolnych",
      "Chód dwunożny"
    ],
    "answer": {
      "Człowiek – sposób poruszania się": "Chód dwunożny",
      "Szympans – długość kończyn": "Górne dłuższe od dolnych",
      "Człowiek – owłosienie": "Zredukowane"
    },
    "explanation": "Człowiek porusza się dwunożnie i ma zredukowane owłosienie; szympans ma dłuższe kończyny górne.",
    "image": "r03_czlowiek_szympans.jpg"
  },
  {
    "id": "R03_CZLO_07",
    "section": "Ewolucja człowieka",
    "type": "sort",
    "prompt": "Rozdziel różniące się cechy człowieka i szympansa.",
    "options": null,
    "items": [
      "chód dwunożny",
      "palce stopy ułożone równolegle",
      "kończyny górne dłuższe od dolnych",
      "kończyny dolne dłuższe od górnych",
      "poruszanie się z użyciem czterech kończyn",
      "przeciwstawny palec stopy"
    ],
    "categories": [
      "człowiek",
      "szympans"
    ],
    "answer": {
      "człowiek": [
        "chód dwunożny",
        "kończyny dolne dłuższe od górnych",
        "palce stopy ułożone równolegle"
      ],
      "szympans": [
        "poruszanie się z użyciem czterech kończyn",
        "kończyny górne dłuższe od dolnych",
        "przeciwstawny palec stopy"
      ]
    },
    "explanation": "Różnice w kończynach i stopach wiążą się z odmiennym sposobem poruszania."
  },
  {
    "id": "R03_CZLO_08",
    "section": "Ewolucja człowieka",
    "type": "single_choice",
    "prompt": "Który gatunek najprawdopodobniej jako pierwszy wytwarzał narzędzia kamienne?",
    "options": [
      "Homo habilis",
      "Homo sapiens",
      "Homo neanderthalensis",
      "Australopithecus afarensis"
    ],
    "answer": 0,
    "explanation": "Homo habilis, czyli człowiek zręczny, prawdopodobnie był pierwszym twórcą narzędzi kamiennych.",
    "image": "r03_narzedzia_kamienne.jpg"
  },
  {
    "id": "R03_CZLO_09",
    "section": "Ewolucja człowieka",
    "type": "sequence",
    "prompt": "Ułóż wybrane formy ludzkie według czasu ich najwcześniejszego pojawienia się.",
    "options": null,
    "items": [
      "Homo habilis",
      "Homo sapiens",
      "Australopithecus afarensis",
      "Homo erectus"
    ],
    "answer": [
      "Australopithecus afarensis",
      "Homo habilis",
      "Homo erectus",
      "Homo sapiens"
    ],
    "explanation": "Australopitek poprzedzał człowieka zręcznego, następnie pojawił się człowiek wyprostowany, a później człowiek rozumny."
  },
  {
    "id": "R03_CZLO_10",
    "section": "Ewolucja człowieka",
    "type": "true_false",
    "prompt": "Neandertalczycy wytwarzali narzędzia i tworzyli miejsca pochówku.",
    "options": null,
    "answer": true,
    "explanation": "Neandertalczycy mieli rozwiniętą kulturę; tworzyli narzędzia, malowidła i miejsca pochówku."
  },
  {
    "id": "R03_CZLO_11",
    "section": "Ewolucja człowieka",
    "type": "single_choice",
    "prompt": "W jakiej części świata najprawdopodobniej pojawił się Homo sapiens?",
    "options": [
      "W Afryce",
      "W Europie",
      "W Azji",
      "W Australii"
    ],
    "answer": 0,
    "explanation": "Człowiek rozumny najprawdopodobniej pojawił się w Afryce około 200 tys. lat temu."
  },
  {
    "id": "R03_CZLO_12",
    "section": "Ewolucja człowieka",
    "type": "riddle",
    "prompt": "Jak nazywa się gatunek człowieka, który posługiwał się ogniem do ogrzewania jaskiń i obróbki pokarmu?",
    "options": null,
    "answer": "Homo erectus",
    "altAnswers": [
      "Homo erectus",
      "człowiek wyprostowany",
      "czlowiek wyprostowany"
    ],
    "explanation": "Homo erectus używał ognia m.in. do ogrzewania jaskiń i obróbki termicznej pokarmu."
  },
  {
    "id": "R03_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W którym roku ukazała się przełomowa publikacja Darwina o powstawaniu gatunków?",
    "options": [
      "1859",
      "1759",
      "1959",
      "2009"
    ],
    "answer": 0,
    "explanation": "Praca Darwina o powstawaniu gatunków drogą doboru naturalnego ukazała się w 1859 roku."
  },
  {
    "id": "R03_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Najstarsze szczątki przodka człowieka współczesnego datowane są na około __________ miliona lat.",
    "options": null,
    "answer": [
      "6,5"
    ],
    "altAnswers": [
      [
        "6,5",
        "6.5"
      ]
    ],
    "explanation": "Podany wiek najstarszych szczątków wynosi około 6,5 miliona lat."
  },
  {
    "id": "R03_HARD_03",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które organizmy zaliczono do tak zwanych żywych skamieniałości?",
    "options": [
      "Latimeria",
      "Łodzik",
      "Skrzyp",
      "Miłorząb",
      "Trylobit",
      "Praptak"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Latimeria, łodzik, skrzyp i miłorząb są przykładami żywych skamieniałości; trylobit i praptak wymarły."
  },
  {
    "id": "R03_HARD_04",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Około ile milionów lat temu planetoida przyczyniła się do wielkiego wymierania obejmującego nieptasie dinozaury?",
    "options": [
      "66",
      "6,5",
      "200",
      "4,6"
    ],
    "answer": 0,
    "explanation": "Planetoida uderzyła w Ziemię około 66 milionów lat temu."
  },
  {
    "id": "R03_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz formę ludzką z informacją o jej rozwoju.",
    "options": null,
    "left": [
      "Australopithecus afarensis",
      "Homo habilis",
      "Homo erectus",
      "Homo neanderthalensis"
    ],
    "right": [
      "Narzędzia oraz miejsca pochówku",
      "Używanie ognia do ogrzewania i obróbki pokarmu",
      "Prawdopodobne wytwarzanie pierwszych narzędzi kamiennych",
      "Dwunożność i wyprostowana postawa"
    ],
    "answer": {
      "Australopithecus afarensis": "Dwunożność i wyprostowana postawa",
      "Homo habilis": "Prawdopodobne wytwarzanie pierwszych narzędzi kamiennych",
      "Homo erectus": "Używanie ognia do ogrzewania i obróbki pokarmu",
      "Homo neanderthalensis": "Narzędzia oraz miejsca pochówku"
    },
    "explanation": "Australopithecus afarensis wiąże się z dwunożnością, Homo habilis z pierwszymi narzędziami kamiennymi, Homo erectus z używaniem ognia, a Homo neanderthalensis z narzędziami i miejscami pochówku."
  },
  {
    "id": "R03_HARD_06",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Do jakiej części świata Homo erectus rozprzestrzenił się z Afryki?",
    "options": [
      "Do Europy i Azji",
      "Tylko do Australii",
      "Tylko na Antarktydę",
      "Wyłącznie na Galapagos"
    ],
    "answer": 0,
    "explanation": "Człowiek wyprostowany początkowo żył w Afryce, skąd rozprzestrzenił się do Europy i Azji."
  },
  {
    "id": "R03_HARD_07",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Homo habilis żył przez pewien czas równolegle z australopitekami.",
    "options": null,
    "answer": true,
    "explanation": "Homo habilis żył równolegle z australopitekami przez prawie milion lat."
  },
  {
    "id": "R03_HARD_08",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Homo habilis żył w Afryce wschodniej około __________–__________ miliona lat temu.",
    "options": null,
    "answer": [
      "2,5",
      "1,7"
    ],
    "altAnswers": [
      [
        "2,5",
        "2.5"
      ],
      [
        "1,7",
        "1.7"
      ]
    ],
    "explanation": "Homo habilis żył w Afryce wschodniej około 2,5–1,7 miliona lat temu."
  },
  {
    "id": "R03_HARD_09",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Na około ile lat datuje się najstarsze skamieniałości przypominające wyglądem żyjącego dziś dziobaka?",
    "options": [
      "100 tysięcy",
      "100 lat",
      "10 milionów",
      "4,6 miliarda"
    ],
    "answer": 0,
    "explanation": "Skamieniałości podobne do obecnego dziobaka datowano na około 100 tysięcy lat temu.",
    "image": "r03_dziobak.jpg"
  },
  {
    "id": "R03_HARD_10",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najdawniejszego do najnowszego.",
    "options": null,
    "items": [
      "Pojawienie się neandertalczyków",
      "Publikacja pracy Darwina w 1859 roku",
      "Pojawienie się Homo habilis",
      "Powstanie sztuki Homo sapiens datowanej na około 77 tys. lat"
    ],
    "answer": [
      "Pojawienie się Homo habilis",
      "Pojawienie się neandertalczyków",
      "Powstanie sztuki Homo sapiens datowanej na około 77 tys. lat",
      "Publikacja pracy Darwina w 1859 roku"
    ],
    "explanation": "Homo habilis żył około 2,5–1,7 mln lat temu; neandertalczycy pojawili się co najmniej 200 tys. lat temu, sztukę datuje się na 77 tys. lat."
  },
  {
    "id": "R03_HARD_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Z której części kapusty warzywnej uzyskano kalarepę?",
    "options": [
      "Z łodygi",
      "Z korzeni",
      "Z nasion",
      "Z liści"
    ],
    "answer": 0,
    "explanation": "Kalarepa została uzyskana z łodygi kapusty warzywnej.",
    "image": "r03_odmiany_kapusty.jpg"
  },
  {
    "id": "R03_HARD_12",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Przyczynę wyginięcia neandertalczyków jednoznacznie wyjaśniono konkurencją z Homo sapiens.",
    "options": null,
    "answer": false,
    "explanation": "Przyczyna wymarcia neandertalczyków nie jest do końca poznana; rywalizacja z innymi ludźmi pozostaje hipotezą."
  }
];

const KID_PROMPTS = {};

const chapter = {
  "id": "r03",
  "number": 3,
  "title": "Ewolucja życia",
  "icon": "🧬",
  "sectionOrder": [
    "Ślady ewolucji i skamieniałości",
    "Pokrewieństwo i narządy",
    "Dobór naturalny",
    "Dobór sztuczny",
    "Ewolucja człowieka"
  ],
  "sectionIcons": {
    "Ślady ewolucji i skamieniałości": "🦴",
    "Pokrewieństwo i narządy": "🧬",
    "Dobór naturalny": "🐦",
    "Dobór sztuczny": "🌱",
    "Ewolucja człowieka": "👣"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
