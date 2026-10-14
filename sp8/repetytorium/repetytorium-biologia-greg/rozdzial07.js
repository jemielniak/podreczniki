// Skróty sekcji (do identyfikatorów ćwiczeń):
//   SRO  = Organizm i środowisko
//   POP  = Populacja i jej cechy
//   REL  = Zależności między organizmami
//   EKS  = Ekosystem i zależności pokarmowe
//   BIO  = Bioróżnorodność, zagrożenia i ochrona
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R07_SRO_01",
    "section": "Organizm i środowisko",
    "type": "single_choice",
    "prompt": "Czym zajmuje się ekologia jako nauka?",
    "options": [
      "Wyłącznie oczyszczaniem ścieków",
      "Wyłącznie ustanawianiem parków narodowych",
      "Zależnościami między organizmami i środowiskiem",
      "Wyłącznie prognozowaniem pogody",
      "Wyłącznie badaniem skał i minerałów",
      "Wyłącznie zbieraniem odpadów"
    ],
    "answer": 2,
    "explanation": "Ekologia bada zależności między gatunkami oraz między organizmami a ich naturalnym środowiskiem."
  },
  {
    "id": "R07_SRO_02",
    "section": "Organizm i środowisko",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki abiotyczne.",
    "options": [
      "temperatura",
      "drapieżniki",
      "zasolenie",
      "wiatr",
      "owady",
      "nasłonecznienie"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Temperatura, zasolenie, wiatr i nasłonecznienie są czynnikami nieożywionymi, a organizmy żywe i drapieżniki to czynniki biotyczne."
  },
  {
    "id": "R07_SRO_03",
    "section": "Organizm i środowisko",
    "type": "true_false",
    "prompt": "Czynniki biotyczne to nieożywione elementy środowiska, takie jak temperatura i ciśnienie atmosferyczne.",
    "options": null,
    "answer": false,
    "explanation": "Temperatura i ciśnienie atmosferyczne są czynnikami abiotycznymi. Biotyczne to organizmy żywe wpływające na inne organizmy."
  },
  {
    "id": "R07_SRO_04",
    "section": "Organizm i środowisko",
    "type": "fill_in",
    "prompt": "Zakres wartości czynnika środowiska, w którym organizm może żyć i rozmnażać się, to zakres __________ ekologicznej.",
    "options": null,
    "altAnswers": [
      [
        "tolerancji"
      ]
    ],
    "answer": [
      "tolerancji"
    ],
    "explanation": "Zakres tolerancji ekologicznej wyznaczają wartości czynnika pozwalające organizmowi żyć i się rozmnażać."
  },
  {
    "id": "R07_SRO_05",
    "section": "Organizm i środowisko",
    "type": "match",
    "prompt": "Połącz termin ekologiczny z jego znaczeniem.",
    "options": null,
    "left": [
      "eurybiont",
      "stenobiont",
      "endemit",
      "czynnik ograniczający"
    ],
    "right": [
      "czynnik o wartości uniemożliwiającej rozwój",
      "organizm o szerokim zakresie tolerancji",
      "gatunek występujący naturalnie na ograniczonym obszarze",
      "organizm o wąskim zakresie tolerancji"
    ],
    "answer": {
      "eurybiont": "organizm o szerokim zakresie tolerancji",
      "stenobiont": "organizm o wąskim zakresie tolerancji",
      "endemit": "gatunek występujący naturalnie na ograniczonym obszarze",
      "czynnik ograniczający": "czynnik o wartości uniemożliwiającej rozwój"
    },
    "explanation": "Eurybionty znoszą zróżnicowane warunki, stenobionty mają wąską tolerancję, endemity występują na ograniczonych terenach, a czynnik ograniczający blokuje rozwój."
  },
  {
    "id": "R07_SRO_06",
    "section": "Organizm i środowisko",
    "type": "odd_one_out",
    "prompt": "Wskaż element niepasujący do pozostałych: wilgotność, opady, nasłonecznienie, drapieżniki.",
    "options": null,
    "answer": "drapieżniki",
    "explanation": "Drapieżniki są organizmami żywymi, czyli czynnikiem biotycznym; pozostałe elementy to czynniki abiotyczne."
  },
  {
    "id": "R07_SRO_07",
    "section": "Organizm i środowisko",
    "type": "scenario",
    "prompt": "Dwie sosny tego samego gatunku rosną w odmiennych warunkach: jedna w lesie, druga na terenie narażonym na wiatr. Ich korony znacznie się różnią. Co najlepiej wyjaśnia tę różnicę?",
    "options": [
      "Muszą należeć do odrębnych gatunków",
      "Na wygląd osobników wpływają warunki środowiska",
      "Jedno drzewo nie jest rośliną nasienną",
      "Różnica dowodzi istnienia pasożyta we wszystkich sosnach"
    ],
    "image": "r07_sosny_w_roznych_siedliskach.jpg",
    "answer": 1,
    "explanation": "Czynniki środowiska mogą zmieniać wygląd osobników tego samego gatunku."
  },
  {
    "id": "R07_SRO_08",
    "section": "Organizm i środowisko",
    "type": "riddle",
    "prompt": "Jak nazywamy organizmy o wąskim zakresie tolerancji na dany czynnik środowiska?",
    "options": null,
    "image": "r07_porosty_na_korze.jpg",
    "altAnswers": [
      "stenobionty",
      "stenobiont",
      "stenobiontami"
    ],
    "answer": "stenobionty",
    "explanation": "Stenobionty mają wąską tolerancję ekologiczną i mogą służyć jako bioindykatory."
  },
  {
    "id": "R07_SRO_09",
    "section": "Organizm i środowisko",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do typu czynnika środowiska.",
    "options": null,
    "items": [
      "temperatura",
      "owady",
      "zasolenie",
      "człowiek",
      "opady",
      "drapieżniki",
      "zachmurzenie"
    ],
    "categories": [
      "biotyczne",
      "abiotyczne"
    ],
    "answer": {
      "biotyczne": [
        "owady",
        "człowiek",
        "drapieżniki"
      ],
      "abiotyczne": [
        "temperatura",
        "zasolenie",
        "opady",
        "zachmurzenie"
      ]
    },
    "explanation": "Organizmy należą do czynników biotycznych; temperatura, zasolenie, opady i zachmurzenie są czynnikami abiotycznymi."
  },
  {
    "id": "R07_SRO_10",
    "section": "Organizm i środowisko",
    "type": "sequence",
    "prompt": "Ułóż wartości czynnika środowiska od najniższej do najwyższej w zakresie tolerancji ekologicznej.",
    "options": null,
    "items": [
      "optimum",
      "maksimum",
      "minimum"
    ],
    "answer": [
      "minimum",
      "optimum",
      "maksimum"
    ],
    "explanation": "Na wykresie zakresu tolerancji minimum wyznacza dolną granicę, optimum najlepsze warunki, a maksimum górną granicę."
  },
  {
    "id": "R07_SRO_11",
    "section": "Organizm i środowisko",
    "type": "true_false",
    "prompt": "Wszystkie gatunki mają identyczny zakres tolerancji na ten sam czynnik środowiskowy.",
    "options": null,
    "answer": false,
    "explanation": "Zakres tolerancji ekologicznej na ten sam czynnik środowiska różni się między gatunkami."
  },
  {
    "id": "R07_SRO_12",
    "section": "Organizm i środowisko",
    "type": "single_choice",
    "prompt": "Która roślina jest polskim gatunkiem endemicznym?",
    "options": [
      "sosna zwyczajna",
      "brzoza brodawkowata",
      "trzcina pospolita",
      "mniszek lekarski",
      "warzucha polska",
      "konwalia majowa"
    ],
    "answer": 4,
    "explanation": "Warzucha polska jest przykładem polskiego endemitu rosnącego na skraju Pustyni Błędowskiej."
  },
  {
    "id": "R07_POP_01",
    "section": "Populacja i jej cechy",
    "type": "single_choice",
    "prompt": "Co to jest populacja?",
    "options": [
      "Grupa osobników jednego gatunku żyjących w tym samym miejscu i czasie",
      "Wszystkie organizmy na Ziemi",
      "Wszystkie gatunki tworzące las",
      "Zbiór czynników nieożywionych",
      "Dowolna grupa zwierząt różnych gatunków",
      "Wszystkie ekosystemy kontynentu"
    ],
    "answer": 0,
    "explanation": "Populację stanowi grupa osobników tego samego gatunku żyjących na określonym terenie w tym samym czasie."
  },
  {
    "id": "R07_POP_02",
    "section": "Populacja i jej cechy",
    "type": "fill_in",
    "prompt": "Liczba osobników danego gatunku przypadająca na jednostkę powierzchni lub objętości to __________ populacji.",
    "options": null,
    "altAnswers": [
      [
        "zagęszczenie",
        "zageszczenie"
      ]
    ],
    "answer": [
      "zagęszczenie"
    ],
    "explanation": "Zagęszczenie określa liczbę osobników na jednostkę powierzchni lub objętości, a nie samą całkowitą liczebność."
  },
  {
    "id": "R07_POP_03",
    "section": "Populacja i jej cechy",
    "type": "match",
    "prompt": "Połącz cechę populacji z jej definicją.",
    "options": null,
    "left": [
      "liczebność",
      "zagęszczenie",
      "rozrodczość",
      "śmiertelność"
    ],
    "right": [
      "liczba potomstwa w określonym czasie",
      "liczba wszystkich osobników populacji",
      "liczba osobników ginących w określonym czasie",
      "liczba osobników na jednostkę powierzchni lub objętości"
    ],
    "answer": {
      "liczebność": "liczba wszystkich osobników populacji",
      "zagęszczenie": "liczba osobników na jednostkę powierzchni lub objętości",
      "rozrodczość": "liczba potomstwa w określonym czasie",
      "śmiertelność": "liczba osobników ginących w określonym czasie"
    },
    "explanation": "Liczebność, zagęszczenie, rozrodczość i śmiertelność opisują różne aspekty populacji."
  },
  {
    "id": "R07_POP_04",
    "section": "Populacja i jej cechy",
    "type": "odd_one_out",
    "prompt": "Wskaż pojęcie niebędące typem rozmieszczenia przestrzennego populacji: skupiskowe, losowe, równomierne, rozrodcze.",
    "options": null,
    "answer": "rozrodcze",
    "explanation": "Wyróżnia się rozmieszczenie skupiskowe, losowe i równomierne. Okres rozrodczy dotyczy wieku osobników."
  },
  {
    "id": "R07_POP_05",
    "section": "Populacja i jej cechy",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do typów rozmieszczenia przestrzennego.",
    "options": null,
    "image": "r07_rozmieszczenie_populacji.jpg",
    "items": [
      "terytorialne tygrysy",
      "stado zebr",
      "bakterie przy obfitym pożywieniu",
      "niektóre rośliny pustynne",
      "kolonia mrówek"
    ],
    "categories": [
      "skupiskowe",
      "losowe",
      "równomierne"
    ],
    "answer": {
      "skupiskowe": [
        "stado zebr",
        "kolonia mrówek"
      ],
      "losowe": [
        "bakterie przy obfitym pożywieniu"
      ],
      "równomierne": [
        "terytorialne tygrysy",
        "niektóre rośliny pustynne"
      ]
    },
    "explanation": "Skupiska tworzą m.in. stada i owady społeczne, rozmieszczenie losowe bywa typowe dla bakterii, a równomierne dla organizmów zajmujących terytoria."
  },
  {
    "id": "R07_POP_06",
    "section": "Populacja i jej cechy",
    "type": "true_false",
    "prompt": "Imigracja oznacza przyłączanie się organizmów do populacji, a emigracja - odłączanie się od niej.",
    "options": null,
    "answer": true,
    "explanation": "Imigracja zwiększa liczbę osobników populacji, a emigracja może ją zmniejszać."
  },
  {
    "id": "R07_POP_07",
    "section": "Populacja i jej cechy",
    "type": "scenario",
    "prompt": "Na piramidzie wiekowej pewnej populacji szeroką podstawę tworzą osobniki młodociane, a osobników starych jest niewiele. Jaki jest typ tej populacji?",
    "options": [
      "wymierająca",
      "ustabilizowana",
      "rozwijająca się",
      "pozbawiona struktury wiekowej"
    ],
    "image": "r07_piramidy_wiekowe.jpg",
    "answer": 2,
    "explanation": "Populację rozwijającą się cechuje duża liczba młodych osobników i niewielki udział starych."
  },
  {
    "id": "R07_POP_08",
    "section": "Populacja i jej cechy",
    "type": "sequence",
    "prompt": "Ułóż etapy życia osobnika od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "starość",
      "okres młodociany",
      "okres rozrodczy"
    ],
    "answer": [
      "okres młodociany",
      "okres rozrodczy",
      "starość"
    ],
    "explanation": "W strukturze wiekowej populacji wyróżnia się okres młodociany, rozrodczy i starość."
  },
  {
    "id": "R07_POP_09",
    "section": "Populacja i jej cechy",
    "type": "multi_select",
    "prompt": "Co może wpływać na zagęszczenie populacji?",
    "options": [
      "rozrodczość",
      "śmiertelność",
      "liczba planet w Układzie Słonecznym",
      "imigracja",
      "emigracja",
      "rodzaj skał na Księżycu"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Zagęszczenie zależy od przybywania i ubywania osobników, na co wpływają rozrodczość, śmiertelność i migracje."
  },
  {
    "id": "R07_POP_10",
    "section": "Populacja i jej cechy",
    "type": "single_choice",
    "prompt": "Które rozmieszczenie osobników jest spotykane najrzadziej?",
    "options": [
      "skupiskowe",
      "równomierne",
      "terytorialne",
      "losowe",
      "stadne",
      "kolonijne"
    ],
    "answer": 3,
    "explanation": "Rozmieszczenie losowe występuje najrzadziej; pojawia się m.in. wtedy, gdy pokarmu jest pod dostatkiem."
  },
  {
    "id": "R07_POP_11",
    "section": "Populacja i jej cechy",
    "type": "riddle",
    "prompt": "Jak nazywa się wykres przedstawiający udział osobników różnych grup wiekowych w populacji?",
    "options": null,
    "altAnswers": [
      "piramida wiekowa",
      "piramidą wiekową"
    ],
    "answer": "piramida wiekowa",
    "explanation": "Piramida wiekowa pokazuje liczby lub udziały osobników należących do poszczególnych grup wieku."
  },
  {
    "id": "R07_POP_12",
    "section": "Populacja i jej cechy",
    "type": "multi_select",
    "prompt": "Które stwierdzenia o populacjach są prawdziwe?",
    "options": [
      "Populacja rozwijająca się ma dużo osobników młodych.",
      "Populacja wymierająca ma niewiele osobników starych.",
      "W populacjach niektórych mrówek i pszczół liczebnie dominują samice.",
      "Migracje to to samo co sezonowe wędrówki bocianów.",
      "Przewaga śmiertelności nad rozrodczością może zagrozić populacji wyginięciem."
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Duża liczba młodych oznacza populację rozwijającą się, wylęg młodych z niezapłodnionych jaj sprzyja przewadze samic, a duża śmiertelność grozi spadkiem liczebności."
  },
  {
    "id": "R07_REL_01",
    "section": "Zależności między organizmami",
    "type": "single_choice",
    "prompt": "Jak nazywa się relacja, w której obie populacje nie oddziałują na siebie?",
    "options": [
      "konkurencja",
      "neutralizm",
      "komensalizm",
      "mutualizm",
      "pasożytnictwo",
      "drapieżnictwo"
    ],
    "answer": 1,
    "explanation": "Neutralizm oznacza brak wzajemnego wpływu dwóch populacji na siebie."
  },
  {
    "id": "R07_REL_02",
    "section": "Zależności między organizmami",
    "type": "match",
    "prompt": "Połącz oddziaływanie międzygatunkowe z jego skutkiem dla dwóch populacji.",
    "options": null,
    "left": [
      "neutralizm",
      "komensalizm",
      "mutualizm",
      "konkurencja",
      "pasożytnictwo"
    ],
    "right": [
      "+ / +",
      "- / -",
      "0 / 0",
      "+ / -",
      "+ / 0"
    ],
    "answer": {
      "neutralizm": "0 / 0",
      "komensalizm": "+ / 0",
      "mutualizm": "+ / +",
      "konkurencja": "- / -",
      "pasożytnictwo": "+ / -"
    },
    "explanation": "W zestawieniu relacji 0 oznacza brak wpływu, + korzyść, a - stratę. Konkurenci tracą, a w mutualizmie obie strony korzystają."
  },
  {
    "id": "R07_REL_03",
    "section": "Zależności między organizmami",
    "type": "odd_one_out",
    "prompt": "Wskaż relację nieantagonistyczną: drapieżnictwo, pasożytnictwo, konkurencja, komensalizm.",
    "options": null,
    "answer": "komensalizm",
    "explanation": "Komensalizm jest relacją nieantagonistyczną. Pozostałe związki zaliczono do interakcji antagonistycznych."
  },
  {
    "id": "R07_REL_04",
    "section": "Zależności między organizmami",
    "type": "sort",
    "prompt": "Podziel związki między organizmami na antagonistyczne i nieantagonistyczne.",
    "options": null,
    "items": [
      "komensalizm",
      "drapieżnictwo",
      "konkurencja",
      "mutualizm",
      "roślinożerność",
      "pasożytnictwo"
    ],
    "categories": [
      "antagonistyczne",
      "nieantagonistyczne"
    ],
    "answer": {
      "antagonistyczne": [
        "konkurencja",
        "pasożytnictwo",
        "drapieżnictwo",
        "roślinożerność"
      ],
      "nieantagonistyczne": [
        "mutualizm",
        "komensalizm"
      ]
    },
    "explanation": "Związki antagonistyczne przynoszą stratę przynajmniej jednej stronie. Mutualizm i komensalizm nie powodują strat."
  },
  {
    "id": "R07_REL_05",
    "section": "Zależności między organizmami",
    "type": "scenario",
    "prompt": "Dwa samce jelenia tego samego gatunku walczą o dostęp do samicy. Jaki rodzaj relacji między nimi występuje?",
    "options": [
      "konkurencja wewnątrzgatunkowa",
      "konkurencja międzygatunkowa",
      "komensalizm",
      "mutualizm"
    ],
    "image": "r07_stado_jeleni.jpg",
    "answer": 0,
    "explanation": "Walka osobników jednego gatunku o samicę jest przykładem konkurencji wewnątrzgatunkowej."
  },
  {
    "id": "R07_REL_06",
    "section": "Zależności między organizmami",
    "type": "riddle",
    "prompt": "Jak nazywa się organizm, z którego pasożyt czerpie pokarm i który często stanowi jego środowisko życia?",
    "options": null,
    "image": "r07_kleszcz_na_zywicielu.jpg",
    "altAnswers": [
      "żywiciel",
      "zywiciel"
    ],
    "answer": "żywiciel",
    "explanation": "Żywiciel dostarcza pasożytowi pożywienia, a niekiedy także miejsca życia."
  },
  {
    "id": "R07_REL_07",
    "section": "Zależności między organizmami",
    "type": "true_false",
    "prompt": "Pasożytnictwo jest zwykle krótkotrwałe i zawsze kończy się natychmiastową śmiercią żywiciela.",
    "options": null,
    "answer": false,
    "explanation": "Pasożyty najczęściej nie zabijają od razu swojej ofiary, lecz żyją jej kosztem przez dłuższy czas."
  },
  {
    "id": "R07_REL_08",
    "section": "Zależności między organizmami",
    "type": "multi_select",
    "prompt": "Zaznacz przystosowania ofiar służące unikaniu drapieżników.",
    "options": [
      "kamuflaż",
      "mimikra",
      "wydłużone kły do rozszarpywania ofiar",
      "szybka ucieczka",
      "oczy umieszczone po bokach głowy",
      "wyspecjalizowane szpony łowieckie"
    ],
    "image": "r07_drapieznik_i_ofiara.jpg",
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Ofiary mogą wykorzystywać kamuflaż, mimikrę, szybki bieg i oczy po bokach głowy, które pomagają obserwować otoczenie."
  },
  {
    "id": "R07_REL_09",
    "section": "Zależności między organizmami",
    "type": "single_choice",
    "prompt": "Jaki rodzaj pasożyta reprezentuje tasiemiec?",
    "options": [
      "zewnętrzny żyjący w sierści",
      "epifit",
      "producent",
      "padlinożerca",
      "pasożyt wewnętrzny",
      "komensal"
    ],
    "answer": 4,
    "explanation": "Tasiemce zaliczono do pasożytów wewnętrznych żyjących wewnątrz ciała żywiciela."
  },
  {
    "id": "R07_REL_10",
    "section": "Zależności między organizmami",
    "type": "fill_in",
    "prompt": "Zależność między grzybem a korzeniami rośliny nasiennej to __________.",
    "options": null,
    "image": "r07_grzyb_i_korzenie.jpg",
    "altAnswers": [
      [
        "mikoryza",
        "mikoryzę",
        "mikoryze"
      ]
    ],
    "answer": [
      "mikoryza"
    ],
    "explanation": "Mikoryza to współżycie grzyba z rośliną: grzyb otrzymuje substancje organiczne, a roślina korzysta z lepszego zaopatrzenia w wodę i sole mineralne."
  },
  {
    "id": "R07_REL_11",
    "section": "Zależności między organizmami",
    "type": "scenario",
    "prompt": "Ptak buduje gniazdo na gałęziach drzewa. Drzewo nie odnosi z tego ani korzyści, ani strat. Jaka to relacja?",
    "options": [
      "drapieżnictwo",
      "pasożytnictwo",
      "konkurencja",
      "komensalizm"
    ],
    "answer": 3,
    "explanation": "W komensalizmie jeden gatunek korzysta, natomiast drugi pozostaje obojętny wobec tej relacji."
  },
  {
    "id": "R07_REL_12",
    "section": "Zależności między organizmami",
    "type": "true_false",
    "prompt": "Korzenie roślin bobowatych i bakterie brodawkowe są przykładem symbiozy obligatoryjnej.",
    "options": null,
    "answer": true,
    "explanation": "Rośliny bobowate i bakterie brodawkowe żyją w ścisłej współpracy, w której obie strony czerpią korzyści."
  },
  {
    "id": "R07_EKS_01",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "single_choice",
    "prompt": "Co tworzy ekosystem?",
    "options": [
      "Wyłącznie zwierzęta danego obszaru",
      "Wyłącznie organizmy fotosyntetyzujące",
      "Wyłącznie skały i gleba",
      "Biocenoza wraz z biotopem",
      "Wyłącznie łańcuchy pokarmowe",
      "Wyłącznie suma populacji jednego gatunku"
    ],
    "image": "r07_sad_i_las.jpg",
    "answer": 3,
    "explanation": "Ekosystem to wszystkie organizmy żyjące na danym terenie wraz ze środowiskiem nieożywionym."
  },
  {
    "id": "R07_EKS_02",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "match",
    "prompt": "Dopasuj termin do roli w ekosystemie.",
    "options": null,
    "left": [
      "biocenoza",
      "biotop",
      "producent",
      "konsument",
      "destruent"
    ],
    "right": [
      "organizm rozkładający martwą materię",
      "organizm pobierający pokarm z innych organizmów",
      "ogół żywych organizmów danego terenu",
      "organizm wytwarzający związki organiczne",
      "nieożywione środowisko organizmów"
    ],
    "answer": {
      "biocenoza": "ogół żywych organizmów danego terenu",
      "biotop": "nieożywione środowisko organizmów",
      "producent": "organizm wytwarzający związki organiczne",
      "konsument": "organizm pobierający pokarm z innych organizmów",
      "destruent": "organizm rozkładający martwą materię"
    },
    "explanation": "Biocenoza obejmuje organizmy, biotop czynniki nieożywione, a producenci, konsumenci i destruenci różnią się sposobem pozyskiwania materii."
  },
  {
    "id": "R07_EKS_03",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "sequence",
    "prompt": "Ułóż modelowy łańcuch od źródła pokarmu do organizmów rozkładających szczątki.",
    "options": null,
    "image": "r07_siec_pokarmowa.jpg",
    "items": [
      "destruent",
      "mięsożerca",
      "roślina zielona",
      "roślinożerca"
    ],
    "answer": [
      "roślina zielona",
      "roślinożerca",
      "mięsożerca",
      "destruent"
    ],
    "explanation": "W uproszczonym przykładzie roślina produkuje materię organiczną, roślinożerca ją zjada, drapieżnik zjada roślinożercę, a destruenci rozkładają martwe szczątki."
  },
  {
    "id": "R07_EKS_04",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do ekosystemów naturalnych i sztucznych.",
    "options": null,
    "items": [
      "sad",
      "morze",
      "pole uprawne",
      "las",
      "step",
      "staw rybny",
      "rzeka"
    ],
    "categories": [
      "naturalne",
      "sztuczne"
    ],
    "answer": {
      "naturalne": [
        "las",
        "step",
        "rzeka",
        "morze"
      ],
      "sztuczne": [
        "sad",
        "pole uprawne",
        "staw rybny"
      ]
    },
    "explanation": "Las, step, rzeka i morze to ekosystemy naturalne, a sad, pole uprawne i staw rybny – sztuczne."
  },
  {
    "id": "R07_EKS_05",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "true_false",
    "prompt": "Im większa liczba gatunków tworzących ekosystem, tym zwykle większa jego stabilność.",
    "options": null,
    "answer": true,
    "explanation": "Wielogatunkowe ekosystemy są mniej wrażliwe na zmiany dzięki różnorodnym zależnościom i źródłom pokarmu."
  },
  {
    "id": "R07_EKS_06",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "scenario",
    "prompt": "Do zrównoważonego ekosystemu trafia obcy gatunek, który korzysta z tych samych zasobów co gatunek rodzimy. Jaki skutek może wystąpić?",
    "options": [
      "Automatyczny wzrost liczby wszystkich gatunków",
      "Osłabienie lub wyparcie gatunku rodzimego",
      "Natychmiastowy brak jakiejkolwiek konkurencji",
      "Zatrzymanie obiegu materii we wszystkich ekosystemach"
    ],
    "answer": 1,
    "explanation": "Wprowadzenie obcego gatunku konkurującego o zasoby może osłabić lub wyprzeć gatunek rodzimy."
  },
  {
    "id": "R07_EKS_07",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "fill_in",
    "prompt": "Organizmy samożywne tworzące związki organiczne ze związków nieorganicznych nazywamy __________.",
    "options": null,
    "altAnswers": [
      [
        "producentami",
        "producenty",
        "producenci"
      ]
    ],
    "answer": [
      "producentami"
    ],
    "explanation": "Producentami są m.in. rośliny zielone, glony i sinice, a także bakterie prowadzące chemosyntezę."
  },
  {
    "id": "R07_EKS_08",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "multi_select",
    "prompt": "Zaznacz organizmy lub grupy organizmów należące do producentów.",
    "options": [
      "rośliny zielone",
      "wilki",
      "sinice",
      "niektóre glony",
      "tasiemce",
      "bakterie przeprowadzające chemosyntezę"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Producenci wytwarzają związki organiczne samodzielnie, np. podczas fotosyntezy albo chemosyntezy."
  },
  {
    "id": "R07_EKS_09",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "odd_one_out",
    "prompt": "Wskaż organizm niepasujący do pozostałych producentów: torfowiec, zielenica, sinica, lis.",
    "options": null,
    "answer": "lis",
    "explanation": "Lis jest konsumentem; torfowiec, zielenica i sinica mogą pełnić funkcję producentów."
  },
  {
    "id": "R07_EKS_10",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "riddle",
    "prompt": "Jak nazywamy połączone ze sobą różne łańcuchy pokarmowe występujące w ekosystemie?",
    "options": null,
    "altAnswers": [
      "sieć pokarmowa",
      "sieć pokarmową",
      "siec pokarmowa"
    ],
    "answer": "sieć pokarmowa",
    "explanation": "Gdy konsumenci korzystają z różnych źródeł pokarmu, łańcuchy pokarmowe łączą się w sieci."
  },
  {
    "id": "R07_EKS_11",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "single_choice",
    "prompt": "Który opis najlepiej oddaje różnicę między obiegiem materii a przepływem energii?",
    "options": [
      "Energia krąży bez strat, a materia stale znika",
      "Materia i energia są tym samym",
      "Materia krąży, a energia przepływa i ulega rozproszeniu",
      "Materia płynie tylko od drapieżników do roślin",
      "Materia występuje wyłącznie u konsumentów",
      "Energia pochodzi wyłącznie od destruentów"
    ],
    "image": "r07_obieg_wegla.jpg",
    "answer": 2,
    "explanation": "Materia krąży między organizmami i środowiskiem nieożywionym, natomiast energia przepływa i stopniowo się rozprasza."
  },
  {
    "id": "R07_EKS_12",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "true_false",
    "prompt": "Destruenci przyczyniają się do powstawania prostszych substancji, które mogą zostać ponownie wykorzystane przez producentów.",
    "options": null,
    "answer": true,
    "explanation": "Rozkład martwej materii przez bakterie i grzyby umożliwia obieg pierwiastków między biocenozą i biotopem."
  },
  {
    "id": "R07_BIO_01",
    "section": "Bioróżnorodność, zagrożenia i ochrona",
    "type": "single_choice",
    "prompt": "Który zestaw wymienia trzy poziomy różnorodności biologicznej?",
    "options": [
      "klimatyczna, wodna, glebowa",
      "genetyczna, gatunkowa, ekosystemowa",
      "roślinożerna, mięsożerna, wszystkożerna",
      "lądowa, morska, atmosferyczna",
      "sezonowa, dobowa, roczna",
      "naturalna, sztuczna, mieszana"
    ],
    "answer": 1,
    "explanation": "Wyróżnia się różnorodność genetyczną, gatunkową i ekosystemową."
  },
  {
    "id": "R07_BIO_02",
    "section": "Bioróżnorodność, zagrożenia i ochrona",
    "type": "match",
    "prompt": "Dopasuj rodzaj zasobu przyrody do jego przykładu.",
    "options": null,
    "left": [
      "odnawialny",
      "nieodnawialny",
      "niewyczerpywalny"
    ],
    "right": [
      "energia wiatru",
      "lasy",
      "ropa naftowa"
    ],
    "answer": {
      "odnawialny": "lasy",
      "nieodnawialny": "ropa naftowa",
      "niewyczerpywalny": "energia wiatru"
    },
    "explanation": "Lasy są zasobem odnawialnym, ropa naftowa – nieodnawialnym, a wiatr – niewyczerpywalnym."
  },
  {
    "id": "R07_BIO_03",
    "section": "Bioróżnorodność, zagrożenia i ochrona",
    "type": "multi_select",
    "prompt": "Które działania są zgodne z zasadami zrównoważonego rozwoju?",
    "options": [
      "ograniczanie marnotrawstwa żywności",
      "zwiększanie zużycia jednorazowego plastiku",
      "segregacja odpadów",
      "zalesianie",
      "wypalanie traw",
      "korzystanie z energii słonecznej"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Zrównoważony rozwój uwzględnia potrzeby ludzi, ochronę środowiska i dobro przyszłych pokoleń; wspiera m.in. recykling, ograniczanie marnotrawstwa, zalesienia i energię odnawialną."
  },
  {
    "id": "R07_BIO_04",
    "section": "Bioróżnorodność, zagrożenia i ochrona",
    "type": "odd_one_out",
    "prompt": "Wskaż zasób nieodnawialny: wiatr, energia słoneczna, energia geotermalna, węgiel kamienny.",
    "options": null,
    "answer": "węgiel kamienny",
    "explanation": "Węgiel kamienny należy do zasobów nieodnawialnych. Wiatr, energia słoneczna i geotermalna są zasobami niewyczerpywalnymi."
  },
  {
    "id": "R07_BIO_05",
    "section": "Bioróżnorodność, zagrożenia i ochrona",
    "type": "scenario",
    "prompt": "Po intensywnym nawożeniu pól do jeziora spływają związki azotu i fosforu. Na powierzchni wody szybko przybywa glonów, a w głębi ubywa tlenu. Jak nazywa się ten proces?",
    "options": [
      "eutrofizacja",
      "mikoryza",
      "bioindykacja",
      "reintrodukcja"
    ],
    "image": "r07_zakwit_zbiornika.jpg",
    "answer": 0,
    "explanation": "Nadmiar azotu i fosforu powoduje eutrofizację. Rozkład obumarłej biomasy zużywa tlen rozpuszczony w wodzie."
  },
  {
    "id": "R07_BIO_06",
    "section": "Bioróżnorodność, zagrożenia i ochrona",
    "type": "fill_in",
    "prompt": "Przywracanie dobrego stanu obszarom zdegradowanym przez człowieka to __________.",
    "options": null,
    "altAnswers": [
      [
        "rekultywacja",
        "rekultywację",
        "rekultywacje"
      ]
    ],
    "answer": [
      "rekultywacja"
    ],
    "explanation": "Rekultywacja służy poprawie stanu gleby zniszczonej przez działalność człowieka."
  },
  {
    "id": "R07_BIO_07",
    "section": "Bioróżnorodność, zagrożenia i ochrona",
    "type": "true_false",
    "prompt": "Kwaśne opady mogą uszkadzać liście i igły oraz prowadzić do zakwaszenia gleby.",
    "options": null,
    "answer": true,
    "explanation": "Dwutlenek siarki i tlenki azotu tworzą w atmosferze związki kwasowe, które uszkadzają rośliny i zmieniają warunki glebowe."
  },
  {
    "id": "R07_BIO_08",
    "section": "Bioróżnorodność, zagrożenia i ochrona",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do form ochrony przyrody.",
    "options": null,
    "image": "r07_drzewo_pomnik_przyrody.jpg",
    "items": [
      "pomnik przyrody",
      "park narodowy",
      "ochrona ścisła wilka",
      "stanowisko dokumentacyjne",
      "rezerwat przyrody",
      "użytek ekologiczny",
      "ochrona ścisła rysia"
    ],
    "categories": [
      "obszarowa",
      "indywidualna",
      "gatunkowa"
    ],
    "answer": {
      "obszarowa": [
        "park narodowy",
        "rezerwat przyrody"
      ],
      "indywidualna": [
        "pomnik przyrody",
        "użytek ekologiczny",
        "stanowisko dokumentacyjne"
      ],
      "gatunkowa": [
        "ochrona ścisła rysia",
        "ochrona ścisła wilka"
      ]
    },
    "explanation": "Ochrona obszarowa chroni ekosystemy i siedliska, indywidualna dotyczy m.in. pomników i użytków, a gatunkowa chroni wskazane gatunki."
  },
  {
    "id": "R07_BIO_09",
    "section": "Bioróżnorodność, zagrożenia i ochrona",
    "type": "riddle",
    "prompt": "Jak nazywa się ponowne wprowadzenie gatunku na obszar, na którym wcześniej wyginął?",
    "options": null,
    "altAnswers": [
      "reintrodukcja",
      "reintrodukcję",
      "reintrodukcje"
    ],
    "answer": "reintrodukcja",
    "explanation": "Reintrodukcja to ponowne wprowadzenie gatunku, który zniknął z danego obszaru."
  },
  {
    "id": "R07_BIO_10",
    "section": "Bioróżnorodność, zagrożenia i ochrona",
    "type": "single_choice",
    "prompt": "W jakich warunkach powstaje smog fotochemiczny?",
    "options": [
      "Tylko pod powierzchnią jeziora",
      "Wyłącznie podczas śnieżycy bez samochodów",
      "Tylko podczas erupcji wulkanów",
      "W wyższych warstwach gleby",
      "W silnym słońcu przy dużym natężeniu ruchu samochodowego",
      "Jedynie w nocy nad niezamieszkanym lasem"
    ],
    "image": "r07_zanieczyszczone_miasto.jpg",
    "answer": 4,
    "explanation": "Smog fotochemiczny tworzy się przy ruchliwych ulicach podczas silnego nasłonecznienia wskutek przemian składników spalin."
  },
  {
    "id": "R07_BIO_11",
    "section": "Bioróżnorodność, zagrożenia i ochrona",
    "type": "multi_select",
    "prompt": "Które działania ograniczają zużycie lub zanieczyszczanie wody?",
    "options": [
      "korzystanie z prysznica zamiast częstych kąpieli",
      "usuwanie nieszczelności instalacji",
      "zwiększanie użycia nawozów sztucznych",
      "zamknięty obieg wody w przemyśle",
      "wylewanie ścieków do rzek",
      "ograniczanie nawozów sztucznych"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "explanation": "Oszczędność wody wspierają m.in. prysznice, naprawa urządzeń, obieg zamknięty w przemyśle i ograniczanie nawożenia."
  },
  {
    "id": "R07_BIO_12",
    "section": "Bioróżnorodność, zagrożenia i ochrona",
    "type": "single_choice",
    "prompt": "Co oznacza ochrona ex situ?",
    "options": [
      "Odtwarzanie siedliska wyłącznie w naturze",
      "Hodowlę zagrożonych gatunków poza ich naturalnym środowiskiem",
      "Zaniechanie jakichkolwiek zabiegów ochronnych",
      "Gospodarowanie wyłącznie glebą",
      "Wypuszczanie zanieczyszczeń do rzek",
      "Wycinanie drzew porośniętych porostami"
    ],
    "answer": 1,
    "explanation": "Ochrona ex situ polega na hodowli zagrożonych gatunków poza ich naturalnym siedliskiem, np. w ogrodach zoologicznych lub botanicznych."
  },
  {
    "id": "R07_BIO_13",
    "section": "Bioróżnorodność, zagrożenia i ochrona",
    "type": "true_false",
    "prompt": "Ochrona gatunkowa może obejmować zarówno gatunki rzadkie i ginące, jak i gatunki pospolite.",
    "options": null,
    "image": "r07_rys_w_lesie.jpg",
    "answer": true,
    "explanation": "Ochrona gatunkowa może dotyczyć nie tylko gatunków zagrożonych, ale również pospolitych i ważnych ekologicznie."
  },
  {
    "id": "R07_BIO_14",
    "section": "Bioróżnorodność, zagrożenia i ochrona",
    "type": "scenario",
    "prompt": "W mieście planuje się ochronić pojedynczy bardzo stary dąb ze względu na jego wyjątkową wartość przyrodniczą. Która forma ochrony najlepiej pasuje do tego obiektu?",
    "options": [
      "ochrona wyłącznie sieci pokarmowej",
      "utworzenie parku krajobrazowego z samej korony",
      "pomnik przyrody",
      "zakaz prowadzenia obserwacji botanicznych"
    ],
    "image": "r07_drzewo_pomnik_przyrody.jpg",
    "answer": 2,
    "explanation": "Pojedyncze okazałe drzewa mogą być objęte ochroną jako pomniki przyrody."
  },
  {
    "id": "R07_BIO_15",
    "section": "Bioróżnorodność, zagrożenia i ochrona",
    "type": "match",
    "prompt": "Połącz zagrożenie dla środowiska z jego charakterystycznym następstwem.",
    "options": null,
    "left": [
      "kwaśne opady",
      "eutrofizacja",
      "niszczenie warstwy ozonowej",
      "monokultura"
    ],
    "right": [
      "zubożenie struktury i jakości gleby",
      "słabsza ochrona przed promieniowaniem UV",
      "ubytek tlenu w zbiorniku wodnym",
      "zakwaszenie gleby i uszkodzenie roślin"
    ],
    "answer": {
      "kwaśne opady": "zakwaszenie gleby i uszkodzenie roślin",
      "eutrofizacja": "ubytek tlenu w zbiorniku wodnym",
      "niszczenie warstwy ozonowej": "słabsza ochrona przed promieniowaniem UV",
      "monokultura": "zubożenie struktury i jakości gleby"
    },
    "explanation": "Każde z tych zjawisk prowadzi do innego zaburzenia: kwaśne opady zakwaszają środowisko, eutrofizacja odbiera tlen wodzie, ubytek ozonu nasila narażenie na UV, a monokultura degraduje glebę."
  },
  {
    "id": "R07_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Dlaczego porosty krzaczkowate są lepszym wskaźnikiem zanieczyszczenia dwutlenkiem siarki niż porosty skorupiaste?",
    "options": [
      "Wytwarzają więcej nasion",
      "Są wyłącznie roślinami wodnymi",
      "Mają węższy zakres tolerancji na dwutlenek siarki",
      "Nie reagują na żadne zmiany środowiska",
      "Żywią się owadami",
      "Mogą rosnąć tylko w tropikach"
    ],
    "image": "r07_porosty_na_korze.jpg",
    "answer": 2,
    "explanation": "Porosty krzaczkowate to stenobionty o małej tolerancji na dwutlenek siarki, podczas gdy skorupiaste znoszą go lepiej."
  },
  {
    "id": "R07_HARD_02",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W pewnej populacji w ciągu roku rodzi się mniej osobników, niż umiera, ale jednocześnie napływa wiele nowych osobników z innego obszaru. Dlaczego na podstawie samych urodzeń i zgonów nie można dokładnie przewidzieć jej liczebności?",
    "options": [
      "Zmiany temperatury nie mogą wpływać na populacje",
      "Bilans liczebności uwzględnia również migracje",
      "Każda populacja ma stałą liczebność",
      "Śmiertelność jest niezależna od środowiska"
    ],
    "answer": 1,
    "explanation": "Liczebność i zagęszczenie zależą nie tylko od rozrodczości i śmiertelności, lecz także od imigracji oraz emigracji."
  },
  {
    "id": "R07_HARD_03",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które z opisanych zjawisk mogą prowadzić do spadku liczebności populacji?",
    "options": [
      "wyczerpanie zasobów pożywienia",
      "przewaga rozrodczości nad śmiertelnością",
      "emigracja osobników",
      "osuszanie siedlisk płazów",
      "napływ osobników do populacji",
      "rosnąca liczba drapieżników"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Niedobór pożywienia, przewaga śmiertelności, emigracja i utrata siedlisk mogą ograniczać liczebność. Duża rozrodczość i imigracja sprzyjają jej wzrostowi."
  },
  {
    "id": "R07_HARD_04",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Liczba roślinożerców maleje wskutek intensywnych polowań drapieżników. Po pewnym czasie drapieżników także ubywa. Co opisuje ten układ?",
    "options": [
      "Wzajemną regulację liczebności drapieżników i ofiar",
      "Brak powiązań między populacjami",
      "Powstawanie nowego gatunku w jednym pokoleniu",
      "Wyłącznie oddziaływanie czynników abiotycznych"
    ],
    "image": "r07_drapieznik_i_ofiara.jpg",
    "answer": 0,
    "explanation": "Liczebności ofiar i drapieżników wzajemnie się regulują: mniej ofiar to mniej pożywienia dla drapieżników, co może pozwolić ofiarom się odrodzić."
  },
  {
    "id": "R07_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Przyporządkuj proces do jego funkcji w obiegu węgla.",
    "options": null,
    "image": "r07_obieg_wegla.jpg",
    "left": [
      "fotosynteza",
      "oddychanie",
      "spalanie"
    ],
    "right": [
      "przenoszenie węgla z paliw do atmosfery",
      "pobieranie dwutlenku węgla przez producentów",
      "uwalnianie dwutlenku węgla przez organizmy"
    ],
    "answer": {
      "fotosynteza": "pobieranie dwutlenku węgla przez producentów",
      "oddychanie": "uwalnianie dwutlenku węgla przez organizmy",
      "spalanie": "przenoszenie węgla z paliw do atmosfery"
    },
    "explanation": "W obiegu węgla fotosynteza, oddychanie i spalanie przemieszczają węgiel między organizmami a atmosferą."
  },
  {
    "id": "R07_HARD_06",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się polski endemit roślinny występujący na skraju Pustyni Błędowskiej?",
    "options": null,
    "altAnswers": [
      "warzucha polska",
      "warzuchę polską",
      "warzucha"
    ],
    "answer": "warzucha polska",
    "explanation": "Warzucha polska jest rośliną endemiczną występującą na skraju Pustyni Błędowskiej."
  },
  {
    "id": "R07_HARD_07",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia prowadzące od spływu nawozów do niedoboru tlenu w jeziorze.",
    "options": null,
    "image": "r07_zakwit_zbiornika.jpg",
    "items": [
      "rozkład szczątków przez drobnoustroje",
      "zużycie tlenu rozpuszczonego w wodzie",
      "spływ związków azotu i fosforu",
      "obumieranie i opadanie glonów na dno",
      "masowy rozwój glonów"
    ],
    "answer": [
      "spływ związków azotu i fosforu",
      "masowy rozwój glonów",
      "obumieranie i opadanie glonów na dno",
      "rozkład szczątków przez drobnoustroje",
      "zużycie tlenu rozpuszczonego w wodzie"
    ],
    "explanation": "Eutrofizacja zaczyna się od nadmiaru substancji odżywczych w wodzie, co może prowadzić do zakwitu, rozkładu obumarłych organizmów i spadku ilości tlenu."
  },
  {
    "id": "R07_HARD_08",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W mikoryzie grzyb otrzymuje od rośliny substancje __________, a roślina korzysta ze sprawniejszego pobierania wody i soli __________.",
    "options": null,
    "image": "r07_grzyb_i_korzenie.jpg",
    "altAnswers": [
      [
        "pokarmowe",
        "organiczne"
      ],
      [
        "mineralnych"
      ]
    ],
    "answer": [
      "pokarmowe",
      "mineralnych"
    ],
    "explanation": "W mikoryzie grzyb otrzymuje od rośliny substancje pokarmowe, a roślina zyskuje lepszy dostęp do wody i soli mineralnych."
  },
  {
    "id": "R07_HARD_09",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj zasoby przyrody do odpowiednich kategorii.",
    "options": null,
    "items": [
      "torf",
      "energia geotermalna",
      "gleba",
      "wiatr",
      "rudy metali",
      "lasy",
      "słońce",
      "gaz ziemny",
      "wody powierzchniowe"
    ],
    "categories": [
      "odnawialne",
      "nieodnawialne",
      "niewyczerpywalne"
    ],
    "answer": {
      "odnawialne": [
        "gleba",
        "lasy",
        "wody powierzchniowe"
      ],
      "nieodnawialne": [
        "rudy metali",
        "torf",
        "gaz ziemny"
      ],
      "niewyczerpywalne": [
        "energia geotermalna",
        "wiatr",
        "słońce"
      ]
    },
    "explanation": "Zasoby przyrody dzieli się na odnawialne, nieodnawialne i niewyczerpywalne; gleba i lasy należą do pierwszej grupy, a paliwa kopalne do drugiej."
  },
  {
    "id": "R07_HARD_10",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż zjawisko niezwiązane bezpośrednio z zanieczyszczaniem lub degradacją środowiska: eutrofizacja, kwaśne opady, smog fotochemiczny, mikoryza.",
    "options": null,
    "answer": "mikoryza",
    "explanation": "Mikoryza jest korzystną relacją grzyba i rośliny, podczas gdy pozostałe zjawiska wiążą się z zanieczyszczeniami lub ich następstwami."
  },
  {
    "id": "R07_HARD_11",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W górskiej dolinie występują wysoka wilgotność, słaby wiatr i emisje tlenków siarki oraz azotu. Powstają krople kwasów i spada widoczność. Jakie to zjawisko?",
    "options": [
      "smog fotochemiczny",
      "ozonosfera",
      "eutrofizacja",
      "smog kwaśny"
    ],
    "image": "r07_zanieczyszczone_miasto.jpg",
    "answer": 3,
    "explanation": "Smog kwaśny powstaje przy dużej wilgotności, słabym wietrze i obecności zanieczyszczeń reagujących z parą wodną."
  },
  {
    "id": "R07_HARD_12",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Na jakiej wysokości znajduje się warstwa ozonowa chroniąca organizmy przed promieniowaniem?",
    "options": [
      "0-1 km",
      "1-3 km",
      "3-8 km",
      "10-15 km",
      "20-50 km",
      "150-200 km"
    ],
    "answer": 4,
    "explanation": "Ozonosfera rozciąga się w przybliżeniu na wysokości 20–50 km nad powierzchnią Ziemi."
  },
  {
    "id": "R07_HARD_13",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które zestawienia roli ekologicznej i przystosowania organizmu są prawidłowe?",
    "options": [
      "drapieżnik - oczy z przodu głowy do oceny odległości",
      "ofiara - wyspecjalizowane łamacze do kruszenia kości ofiar",
      "roślinożerca - szerokie zęby do rozcierania pokarmu",
      "tasiemiec - sprawny pościg za ofiarą",
      "ofiara - oczy po bokach głowy ułatwiające obserwację otoczenia",
      "drapieżnik - korzenie pobierające wodę"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Oczy z przodu u drapieżników pomagają oceniać odległość, oczy z boku poszerzają pole widzenia ofiary, a u roślinożerców szerokie zęby rozcierają rośliny."
  },
  {
    "id": "R07_HARD_14",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz działanie ochronne z jego charakterystyką.",
    "options": null,
    "left": [
      "in situ",
      "ex situ",
      "reintrodukcja",
      "recykling"
    ],
    "right": [
      "ponowne wprowadzenie gatunku na teren występowania",
      "powtórne wykorzystanie przetworzonych materiałów",
      "hodowla zagrożonego gatunku poza jego środowiskiem",
      "ochrona lub odtwarzanie gatunku w naturze"
    ],
    "answer": {
      "in situ": "ochrona lub odtwarzanie gatunku w naturze",
      "ex situ": "hodowla zagrożonego gatunku poza jego środowiskiem",
      "reintrodukcja": "ponowne wprowadzenie gatunku na teren występowania",
      "recykling": "powtórne wykorzystanie przetworzonych materiałów"
    },
    "explanation": "In situ dotyczy działań na wolności, ex situ hodowli poza siedliskiem, reintrodukcja przywraca gatunek, a recykling ogranicza odpady przez ponowne użycie materiałów."
  },
  {
    "id": "R07_HARD_15",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W lesie żyje kilka odmian osobników tego samego gatunku, różniących się cechami dziedzicznymi. Naukowiec nie porównuje liczby gatunków ani rodzajów ekosystemów. Który poziom bioróżnorodności opisuje?",
    "options": [
      "ekosystemowy",
      "gatunkowy",
      "genetyczny",
      "krajobrazowy"
    ],
    "answer": 2,
    "explanation": "Różnorodność genetyczna dotyczy zróżnicowania genetycznego osobników populacji, a nie liczby gatunków lub ekosystemów."
  }
];

const KID_PROMPTS = {
  "R07_SRO_01": "Co bada ekologia?",
  "R07_SRO_06": "Które słowo nie pasuje: wilgotność, opady, nasłonecznienie, drapieżniki.",
  "R07_POP_01": "Co nazywamy populacją?",
  "R07_POP_07": "Na wykresie jest dużo młodych i mało starych osobników. Jaki to typ populacji?",
  "R07_REL_01": "Jak nazywa się brak wpływu dwóch populacji na siebie?",
  "R07_REL_11": "Ptak zakłada gniazdo na drzewie i mu nie szkodzi. Jaka to relacja?",
  "R07_EKS_01": "Co wchodzi w skład ekosystemu?",
  "R07_EKS_10": "Jak nazywa się kilka połączonych łańcuchów pokarmowych?",
  "R07_BIO_05": "W jeziorze jest za dużo nawozów, rośnie dużo glonów i ubywa tlenu. Jak to się nazywa?",
  "R07_BIO_12": "Co oznacza ochrona ex situ?"
};

const chapter = {
  id: "r07",
  number: 7,
  title: "Ekologia i zagrożenia różnorodności biologicznej",
  icon: "🌱",
  sectionOrder: [
    "Organizm i środowisko",
    "Populacja i jej cechy",
    "Zależności między organizmami",
    "Ekosystem i zależności pokarmowe",
    "Bioróżnorodność, zagrożenia i ochrona"
  ],
  sectionIcons: {
    "Organizm i środowisko": "🌿",
    "Populacja i jej cechy": "🐾",
    "Zależności między organizmami": "🦊",
    "Ekosystem i zależności pokarmowe": "🌳",
    "Bioróżnorodność, zagrożenia i ochrona": "🌍"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
