// Skróty sekcji (do identyfikatorów ćwiczeń):
//   POP  = Liczba i rozmieszczenie ludności
//   MIG  = Migracje
//   NAT  = Przyrost naturalny
//   RZE  = Przyrost rzeczywisty
//   WIE  = Struktura płci i wieku
//   MNW  = Mniejszości i wyznania
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R04_POP_01",
    section: "Liczba i rozmieszczenie ludności",
    type: "single_choice",
    prompt: "Ile wynosiła populacja Polski pod koniec 2024 r.?",
    options: ["Około 24 mln", "Około 31 mln", "Około 35 mln", "Około 37,5 mln", "Około 44 mln", "Około 74,4 mln"],
    answer: 3,
    explanation: "Pod koniec 2024 r. populacja Polski wynosiła około 37,5 mln osób.",
    image: "r04_populacja_swiat_europa_polska.jpg"
  },
  {
    id: "R04_POP_02",
    section: "Liczba i rozmieszczenie ludności",
    type: "match",
    prompt: "Połącz obszar z liczbą ludności w 2024 r.",
    options: null,
    left: ["Świat", "Europa", "Polska"],
    right: ["około 37,5 mln", "ponad 744 mln", "ponad 8,2 mld"],
    answer: {
      "Świat": "ponad 8,2 mld",
      "Europa": "ponad 744 mln",
      "Polska": "około 37,5 mln"
    },
    explanation: "W 2024 r. świat liczył ponad 8,2 mld mieszkańców, Europa ponad 744 mln, a Polska około 37,5 mln.",
    image: "r04_populacja_swiat_europa_polska.jpg"
  },
  {
    id: "R04_POP_03",
    section: "Liczba i rozmieszczenie ludności",
    type: "true_false",
    prompt: "Krótko po zakończeniu II wojny światowej liczba ludności Polski wynosiła niecałe 24 mln.",
    options: null,
    answer: true,
    explanation: "W 1946 r. Polskę zamieszkiwało niecałe 24 mln osób. Przed wojną populacja wynosiła prawie 35 mln."
  },
  {
    id: "R04_POP_04",
    section: "Liczba i rozmieszczenie ludności",
    type: "sequence",
    prompt: "Ułóż etapy zmian liczby ludności Polski od najwcześniejszego do najpóźniejszego.",
    options: null,
    items: ["Populacja stabilizuje się na poziomie około 38 mln", "Liczba ludności przekracza 32 mln", "Liczba ludności stale się zmniejsza", "Populacja wynosi niecałe 24 mln"],
    answer: ["Populacja wynosi niecałe 24 mln", "Liczba ludności przekracza 32 mln", "Populacja stabilizuje się na poziomie około 38 mln", "Liczba ludności stale się zmniejsza"],
    explanation: "W 1946 r. populacja wynosiła niecałe 24 mln, w 1970 r. przekroczyła 32 mln, na przełomie XX i XXI w. ustabilizowała się na około 38 mln, a od drugiej dekady XXI w. maleje."
  },
  {
    id: "R04_POP_05",
    section: "Liczba i rozmieszczenie ludności",
    type: "multi_select",
    prompt: "Zaznacz przyrodnicze czynniki sprzyjające osiedlaniu się ludności.",
    options: ["Nizinna rzeźba terenu", "Żyzne gleby", "Dostęp do wody", "Obecność surowców mineralnych", "Wysokie wynagrodzenia", "Rozwinięte usługi"],
    answer: [0, 1, 2, 3],
    explanation: "Do sprzyjających czynników przyrodniczych należą m.in. nizinna rzeźba terenu, żyzne gleby, dostęp do wody i surowce mineralne. Wynagrodzenia i usługi są czynnikami pozaprzyrodniczymi.",
    image: "r04_osiedlanie_warunki.jpg"
  },
  {
    id: "R04_POP_06",
    section: "Liczba i rozmieszczenie ludności",
    type: "sort",
    prompt: "Przyporządkuj czynniki osiedlania się ludności do odpowiednich kategorii.",
    options: null,
    items: ["ciepły klimat", "dostęp do wody", "miejsca pracy", "wysokie wynagrodzenia", "żyzne gleby", "bezpieczeństwo"],
    categories: ["przyrodnicze", "pozaprzyrodnicze"],
    answer: {
      "przyrodnicze": ["ciepły klimat", "dostęp do wody", "żyzne gleby"],
      "pozaprzyrodnicze": ["miejsca pracy", "wysokie wynagrodzenia", "bezpieczeństwo"]
    },
    explanation: "Klimat, woda i gleby wynikają z warunków środowiska. Praca, zarobki i bezpieczeństwo są skutkiem działalności człowieka.",
    image: "r04_osiedlanie_warunki.jpg"
  },
  {
    id: "R04_POP_07",
    section: "Liczba i rozmieszczenie ludności",
    type: "fill_in",
    prompt: "Przy populacji około __________ i powierzchni 312 tys. km² gęstość zaludnienia Polski wynosi około __________.",
    options: null,
    answer: ["37,5 mln", "120 os./km²"],
    altAnswers: [
      ["37,5 mln", "37,5 miliona", "37 500 000"],
      ["120 os./km²", "120 osób/km²", "120"]
    ],
    explanation: "Gęstość zaludnienia oblicza się, dzieląc liczbę ludności przez powierzchnię. Dla Polski jest to około 37,5 mln : 312 tys. km², czyli około 120 os./km²."
  },
  {
    id: "R04_POP_08",
    section: "Liczba i rozmieszczenie ludności",
    type: "odd_one_out",
    prompt: "Wskaż obszar niepasujący do pozostałych pod względem małej gęstości zaludnienia: Pojezierze Mazurskie, Tatry, Bieszczady, Warszawa.",
    options: null,
    answer: "Warszawa",
    explanation: "Pojezierza i góry cechują się małą gęstością zaludnienia, natomiast Warszawa jako duże miasto ma bardzo wysoką gęstość zaludnienia.",
    image: "r04_gestosc_miasto_gory.jpg"
  },
  {
    id: "R04_POP_09",
    section: "Liczba i rozmieszczenie ludności",
    type: "scenario",
    prompt: "Młoda osoba wybiera miejsce zamieszkania z licznymi ofertami pracy, uczelniami, różnorodnymi usługami i rozwiniętym przemysłem. Jaki typ obszaru najpełniej odpowiada temu opisowi?",
    options: ["Duże miasto", "Wysokie góry", "Pojezierze", "Wschodnie krańce Polski", "Obszar leśny bez miast", "Słabo skomunikowana wieś"],
    answer: 0,
    explanation: "Duże miasta przyciągają ludność licznymi miejscami pracy, wyższymi wynagrodzeniami, uczelniami, usługami i możliwościami rozwoju zawodowego.",
    image: "r04_gestosc_miasto_gory.jpg"
  },

  {
    id: "R04_MIG_01",
    section: "Migracje",
    type: "riddle",
    prompt: "Jak nazywa się osiedlanie się w danym kraju osoby przybyłej z zagranicy?",
    options: null,
    answer: "imigracja",
    altAnswers: ["imigracja", "migracja do kraju"],
    explanation: "Imigracja oznacza przyjazd do innego kraju i osiedlenie się w nim.",
    image: "r04_migracja_zewnetrzna_wewnetrzna.jpg"
  },
  {
    id: "R04_MIG_02",
    section: "Migracje",
    type: "match",
    prompt: "Połącz pojęcie migracyjne z jego znaczeniem.",
    options: null,
    left: ["emigrant", "imigrant", "migracja wewnętrzna", "uchodźstwo"],
    right: ["ucieczka do innego kraju przed zagrożeniem", "osoba przybyła i osiedlająca się", "zmiana miejsca zamieszkania w obrębie jednego państwa", "osoba opuszczająca dany obszar"],
    answer: {
      "emigrant": "osoba opuszczająca dany obszar",
      "imigrant": "osoba przybyła i osiedlająca się",
      "migracja wewnętrzna": "zmiana miejsca zamieszkania w obrębie jednego państwa",
      "uchodźstwo": "ucieczka do innego kraju przed zagrożeniem"
    },
    explanation: "Ta sama osoba może być emigrantem z punktu widzenia kraju opuszczanego i imigrantem z punktu widzenia kraju przyjmującego.",
    image: "r04_migracja_zewnetrzna_wewnetrzna.jpg"
  },
  {
    id: "R04_MIG_03",
    section: "Migracje",
    type: "true_false",
    prompt: "Przeprowadzka z Lublina do Gdańska jest przykładem migracji wewnętrznej.",
    options: null,
    answer: true,
    explanation: "Oba miasta leżą w Polsce, więc zmiana miejsca zamieszkania odbywa się w obrębie jednego państwa.",
    image: "r04_migracja_zewnetrzna_wewnetrzna.jpg"
  },
  {
    id: "R04_MIG_04",
    section: "Migracje",
    type: "multi_select",
    prompt: "Zaznacz główne przyczyny emigracji z Polski.",
    options: ["Brak pracy", "Poszukiwanie wyższych zarobków", "Wyjazd na studia", "Szukanie nowych doświadczeń", "Przymusowa asymilacja w Polsce", "Nadmiar miejsc pracy w kraju"],
    answer: [0, 1, 2, 3],
    explanation: "Polacy emigrują m.in. z powodu braku pracy, chęci uzyskania wyższych zarobków, podjęcia studiów i zdobycia nowych doświadczeń.",
    image: "r04_emigracja_zarobkowa.jpg"
  },
  {
    id: "R04_MIG_05",
    section: "Migracje",
    type: "sort",
    prompt: "Przyporządkuj skutki migracji do kraju emigracyjnego albo imigracyjnego.",
    options: null,
    items: ["mniej osób bez pracy", "brak wykwalifikowanych pracowników", "wypełnienie wolnych miejsc pracy", "odmłodzenie społeczeństwa", "problemy z asymilacją", "rozłąka emigrantów z rodziną"],
    categories: ["kraj emigracyjny", "kraj imigracyjny"],
    answer: {
      "kraj emigracyjny": ["mniej osób bez pracy", "brak wykwalifikowanych pracowników", "rozłąka emigrantów z rodziną"],
      "kraj imigracyjny": ["wypełnienie wolnych miejsc pracy", "odmłodzenie społeczeństwa", "problemy z asymilacją"]
    },
    explanation: "Odpływ ludności może zmniejszać bezrobocie, ale powodować braki kadr i rozłąkę rodzin. Napływ ludności wypełnia wakaty i odmładza społeczeństwo, lecz może utrudniać asymilację."
  },
  {
    id: "R04_MIG_06",
    section: "Migracje",
    type: "scenario",
    prompt: "Rodzina opuszcza swój kraj z powodu wojny i zagrożenia życia, po czym szuka bezpieczeństwa w innym państwie. Jak nazywa się ten rodzaj migracji?",
    options: ["Uchodźstwo", "Reemigracja", "Migracja wahadłowa", "Turystyka", "Migracja wewnętrzna", "Wyjazd na studia"],
    answer: 0,
    explanation: "Uchodźstwo jest ucieczką do innego kraju przed wojną, prześladowaniem lub zagrożeniem życia.",
    image: "r04_uchodzcy.jpg"
  },
  {
    id: "R04_MIG_07",
    section: "Migracje",
    type: "scenario",
    prompt: "W 2020 r. do Polski przyjechały 13 263 osoby, a wyjechało 8780 osób. Jakie było saldo migracji?",
    options: ["-4483", "4483", "22 043", "-22 043", "13 263", "8780"],
    answer: 1,
    explanation: "Saldo migracji to liczba imigrantów minus liczba emigrantów: 13 263 - 8780 = 4483. Saldo było dodatnie."
  },
  {
    id: "R04_MIG_08",
    section: "Migracje",
    type: "fill_in",
    prompt: "Od 2016 r. saldo migracji Polski jest __________, dlatego Polska przekształca się z kraju emigracyjnego w kraj __________.",
    options: null,
    answer: ["dodatnie", "imigracyjny"],
    altAnswers: [
      ["dodatnie", "dodatni", "większe od zera"],
      ["imigracyjny", "imigracyjnego"]
    ],
    explanation: "W 2016 r. liczba osób osiedlających się w Polsce zaczęła przewyższać liczbę osób wyjeżdżających, więc saldo stało się dodatnie.",
    image: "r04_imigracja_do_polski.jpg"
  },
  {
    id: "R04_MIG_09",
    section: "Migracje",
    type: "sequence",
    prompt: "Ułóż wydarzenia migracyjne w Polsce w kolejności chronologicznej.",
    options: null,
    items: ["Fala uchodźstwa z Ukrainy po inwazji Rosji", "Saldo migracji staje się dodatnie", "Po wejściu do UE nasila się emigracja zarobkowa", "Emigracja co roku przewyższa imigrację"],
    answer: ["Emigracja co roku przewyższa imigrację", "Po wejściu do UE nasila się emigracja zarobkowa", "Saldo migracji staje się dodatnie", "Fala uchodźstwa z Ukrainy po inwazji Rosji"],
    explanation: "W latach 1990-2004 emigracja przewyższała imigrację, po wejściu do UE w 2004 r. nastąpiła fala emigracji, w 2016 r. saldo stało się dodatnie, a w 2022 r. pojawiła się fala uchodźstwa z Ukrainy.",
    image: "r04_uchodzcy.jpg"
  },

  {
    id: "R04_NAT_01",
    section: "Przyrost naturalny",
    type: "single_choice",
    prompt: "Czym jest przyrost naturalny?",
    options: ["Różnicą między liczbą urodzeń żywych a liczbą zgonów", "Sumą liczby imigrantów i emigrantów", "Różnicą między powierzchnią a liczbą ludności", "Liczbą urodzeń na 100 mieszkańców", "Sumą przyrostu rzeczywistego i salda migracji", "Liczbą osób w wieku produkcyjnym"],
    answer: 0,
    explanation: "Przyrost naturalny oblicza się, odejmując liczbę zgonów od liczby urodzeń żywych."
  },
  {
    id: "R04_NAT_02",
    section: "Przyrost naturalny",
    type: "true_false",
    prompt: "Jeżeli w ciągu roku liczba urodzeń żywych jest mniejsza od liczby zgonów, przyrost naturalny jest ujemny.",
    options: null,
    answer: true,
    explanation: "Gdy zgonów jest więcej niż urodzeń żywych, różnica U - Z ma wartość ujemną."
  },
  {
    id: "R04_NAT_03",
    section: "Przyrost naturalny",
    type: "fill_in",
    prompt: "Przyrost naturalny oblicza się jako liczbę __________ pomniejszoną o liczbę __________.",
    options: null,
    answer: ["urodzeń żywych", "zgonów"],
    altAnswers: [
      ["urodzeń żywych", "urodzeń"],
      ["zgonów", "zmarłych"]
    ],
    explanation: "Wzór na przyrost naturalny ma postać Pn = U - Z."
  },
  {
    id: "R04_NAT_04",
    section: "Przyrost naturalny",
    type: "match",
    prompt: "Połącz okres ze zmianą przyrostu naturalnego w Polsce.",
    options: null,
    left: ["1946-1955", "1964-1973", "1976-1983", "2020-2024"],
    right: ["dodatni i bardzo wysoki po wojnie", "dodatni i bardzo wysoki wskutek kolejnego wyżu", "dodatni lecz niewysoki", "ujemny i bardzo niski"],
    answer: {
      "1946-1955": "dodatni i bardzo wysoki po wojnie",
      "1964-1973": "dodatni lecz niewysoki",
      "1976-1983": "dodatni i bardzo wysoki wskutek kolejnego wyżu",
      "2020-2024": "ujemny i bardzo niski"
    },
    explanation: "Po wojnie wystąpił wyż kompensacyjny, około 20 lat później niż, w latach 70. i 80. kolejny wyż, a w latach 2020-2024 bardzo niski ujemny przyrost.",
    image: "r04_wyz_i_niz_demograficzny.jpg"
  },
  {
    id: "R04_NAT_05",
    section: "Przyrost naturalny",
    type: "scenario",
    prompt: "W ciągu roku w pewnym kraju urodziło się 200 tys. dzieci, a zmarło 150 tys. osób. Jaki był przyrost naturalny?",
    options: ["+50 tys.", "-50 tys.", "+350 tys.", "-350 tys.", "+200 tys.", "+150 tys."],
    answer: 0,
    explanation: "Przyrost naturalny wyniósł 200 tys. - 150 tys. = +50 tys., więc był dodatni."
  },
  {
    id: "R04_NAT_06",
    section: "Przyrost naturalny",
    type: "single_choice",
    prompt: "W Polsce w 2023 r. odnotowano 272 500 urodzeń żywych i 409 000 zgonów. Ile wyniósł przyrost naturalny?",
    options: ["-136 500", "+136 500", "681 500", "-681 500", "-37 637 000", "+37 637 000"],
    answer: 0,
    explanation: "272 500 - 409 000 = -136 500. Ujemny wynik oznacza, że zmarło więcej osób, niż się urodziło."
  },
  {
    id: "R04_NAT_07",
    section: "Przyrost naturalny",
    type: "riddle",
    prompt: "W jakiej jednostce podaje się współczynnik przyrostu naturalnego?",
    options: null,
    answer: "w promilach",
    altAnswers: ["w promilach", "promil", "promile", "‰"],
    explanation: "Współczynnik przyrostu naturalnego przedstawia zmianę w przeliczeniu na 1000 mieszkańców, dlatego podaje się go w promilach."
  },
  {
    id: "R04_NAT_08",
    section: "Przyrost naturalny",
    type: "multi_select",
    prompt: "Zaznacz przyczyny spadku przyrostu naturalnego w krajach wysoko rozwiniętych.",
    options: ["Spadek liczby związków", "Wzrost aktywności zawodowej kobiet", "Decyzje o mniejszej liczbie potomstwa lub jego braku", "Powszechna wiedza o antykoncepcji", "Wzrost liczby urodzeń", "Masowa imigracja"],
    answer: [0, 1, 2, 3],
    explanation: "Zmiany kulturowe i stylu życia, m.in. mniej związków, aktywność zawodowa kobiet, mniejsza dzietność i dostęp do antykoncepcji, sprzyjają spadkowi przyrostu naturalnego.",
    image: "r04_rodzina_i_dzietnosc.jpg"
  },
  {
    id: "R04_NAT_09",
    section: "Przyrost naturalny",
    type: "sequence",
    prompt: "Ułóż etapy powstawania kolejnego wyżu demograficznego.",
    options: null,
    items: ["Rośnie liczba urodzeń", "Liczne pokolenie osiąga wiek rozrodczy", "Pojawia się kolejne liczne pokolenie dzieci", "Wcześniej występuje wyż demograficzny"],
    answer: ["Wcześniej występuje wyż demograficzny", "Liczne pokolenie osiąga wiek rozrodczy", "Rośnie liczba urodzeń", "Pojawia się kolejne liczne pokolenie dzieci"],
    explanation: "Dzieci urodzone podczas wyżu po osiągnięciu dorosłości same zostają rodzicami, co może spowodować kolejny wzrost liczby urodzeń.",
    image: "r04_wyz_i_niz_demograficzny.jpg"
  },

  {
    id: "R04_RZE_01",
    section: "Przyrost rzeczywisty",
    type: "riddle",
    prompt: "Jak nazywa się suma przyrostu naturalnego i salda migracji?",
    options: null,
    answer: "przyrost rzeczywisty",
    altAnswers: ["przyrost rzeczywisty"],
    explanation: "Przyrost rzeczywisty uwzględnia zarówno urodzenia i zgony, jak i napływ oraz odpływ ludności."
  },
  {
    id: "R04_RZE_02",
    section: "Przyrost rzeczywisty",
    type: "true_false",
    prompt: "Dodatni przyrost rzeczywisty oznacza, że liczba ludności danego obszaru wzrosła.",
    options: null,
    answer: true,
    explanation: "Jeżeli suma przyrostu naturalnego i salda migracji jest dodatnia, na danym obszarze przybyło mieszkańców."
  },
  {
    id: "R04_RZE_03",
    section: "Przyrost rzeczywisty",
    type: "fill_in",
    prompt: "Przyrost rzeczywisty jest sumą __________ oraz __________.",
    options: null,
    answer: ["przyrostu naturalnego", "salda migracji"],
    altAnswers: [
      ["przyrostu naturalnego", "przyrost naturalny"],
      ["salda migracji", "saldo migracji"]
    ],
    explanation: "Wzór ma postać Pr = Pn + Sm."
  },
  {
    id: "R04_RZE_04",
    section: "Przyrost rzeczywisty",
    type: "scenario",
    prompt: "W 2020 r. przyrost naturalny Polski wyniósł -122 046 osób, a saldo migracji +4483 osoby. Jaki był przyrost rzeczywisty?",
    options: ["-117 563", "+117 563", "-126 529", "+126 529", "-122 046", "+4483"],
    answer: 0,
    explanation: "Przyrost rzeczywisty wyniósł -122 046 + 4483 = -117 563 osoby."
  },
  {
    id: "R04_RZE_05",
    section: "Przyrost rzeczywisty",
    type: "single_choice",
    prompt: "Populacja Polski w 2020 r. wynosiła 38 270 000, a przyrost rzeczywisty -117 563. Ile wynosił współczynnik przyrostu rzeczywistego?",
    options: ["Około -3,07‰", "Około +3,07‰", "Około -30,7‰", "Około +30,7‰", "Około -0,31‰", "Około +0,31‰"],
    answer: 0,
    explanation: "(-117 563 : 38 270 000) × 1000‰ daje około -3,07‰."
  },
  {
    id: "R04_RZE_06",
    section: "Przyrost rzeczywisty",
    type: "sort",
    prompt: "Przyporządkuj państwa do znaku przyrostu rzeczywistego w 2024 r.",
    options: null,
    items: ["Hiszpania", "Niemcy", "Polska", "Estonia", "Albania", "Mołdawia"],
    categories: ["dodatni", "ujemny"],
    answer: {
      "dodatni": ["Hiszpania", "Niemcy"],
      "ujemny": ["Polska", "Estonia", "Albania", "Mołdawia"]
    },
    explanation: "Hiszpania i Niemcy mają dodatni przyrost rzeczywisty dzięki dużej imigracji, natomiast w Polsce, Estonii, Albanii i Mołdawii jest on ujemny."
  },
  {
    id: "R04_RZE_07",
    section: "Przyrost rzeczywisty",
    type: "multi_select",
    prompt: "Zaznacz państwa, w których duża imigracja powoduje dodatni przyrost rzeczywisty mimo ujemnego przyrostu naturalnego.",
    options: ["Hiszpania", "Niemcy", "Albania", "Mołdawia", "Polska", "Estonia"],
    answer: [0, 1],
    explanation: "W Hiszpanii i Niemczech napływ imigrantów jest na tyle duży, że równoważy ujemny przyrost naturalny."
  },
  {
    id: "R04_RZE_08",
    section: "Przyrost rzeczywisty",
    type: "scenario",
    prompt: "W kraju odnotowano 65 000 urodzeń, 71 000 zgonów, 19 000 imigrantów i 17 500 emigrantów. Jaki był przyrost rzeczywisty?",
    options: ["-4500", "+4500", "-7500", "+7500", "-6000", "+1500"],
    answer: 0,
    explanation: "Przyrost naturalny wynosi -6000, saldo migracji +1500, więc przyrost rzeczywisty to -6000 + 1500 = -4500."
  },
  {
    id: "R04_RZE_09",
    section: "Przyrost rzeczywisty",
    type: "match",
    prompt: "Połącz składnik zmiany ludności Polski w 2022 r. z jego wartością.",
    options: null,
    left: ["przyrost naturalny", "saldo migracji", "przyrost rzeczywisty"],
    right: ["-145 300", "-2000", "-143 300"],
    answer: {
      "przyrost naturalny": "-143 300",
      "saldo migracji": "-2000",
      "przyrost rzeczywisty": "-145 300"
    },
    explanation: "W 2022 r. 305 100 - 448 400 = -143 300, 13 600 - 15 600 = -2000, a ich suma wyniosła -145 300."
  },

  {
    id: "R04_WIE_01",
    section: "Struktura płci i wieku",
    type: "single_choice",
    prompt: "Co przedstawia piramida płci i wieku?",
    options: ["Liczbę kobiet i mężczyzn w poszczególnych grupach wieku", "Gęstość zaludnienia województw", "Saldo migracji w kolejnych latach", "Podział ludności według wyznań", "Liczbę urodzeń i zgonów w Europie", "Rozmieszczenie mniejszości narodowych"],
    answer: 0,
    explanation: "Piramida płci i wieku pokazuje strukturę ludności według płci oraz wieku."
  },
  {
    id: "R04_WIE_02",
    section: "Struktura płci i wieku",
    type: "match",
    prompt: "Połącz typ społeczeństwa z cechą jego piramidy płci i wieku.",
    options: null,
    left: ["społeczeństwo młode", "społeczeństwo stare"],
    right: ["szeroka podstawa i wąska góra", "szeroka górna część i zwężenie ku dołowi"],
    answer: {
      "społeczeństwo młode": "szeroka podstawa i wąska góra",
      "społeczeństwo stare": "szeroka górna część i zwężenie ku dołowi"
    },
    explanation: "W społeczeństwie młodym jest dużo dzieci i mało seniorów, a w starym więcej osób w średnim i starszym wieku niż dzieci.",
    image: "r04_spoleczenstwo_mlode_stare.jpg"
  },
  {
    id: "R04_WIE_03",
    section: "Struktura płci i wieku",
    type: "odd_one_out",
    prompt: "Wskaż cechę niepasującą do społeczeństwa młodego: szeroka podstawa piramidy, wąska góra piramidy, dużo dzieci i młodzieży, więcej seniorów niż dzieci.",
    options: null,
    answer: "więcej seniorów niż dzieci",
    explanation: "Przewaga seniorów nad dziećmi jest cechą społeczeństwa starego, nie młodego.",
    image: "r04_spoleczenstwo_mlode_stare.jpg"
  },
  {
    id: "R04_WIE_04",
    section: "Struktura płci i wieku",
    type: "fill_in",
    prompt: "W Polsce wiek produkcyjny kobiet obejmuje lata __________, a mężczyzn lata __________.",
    options: null,
    answer: ["18-59", "18-64"],
    altAnswers: [
      ["18-59", "18–59", "od 18 do 59 lat"],
      ["18-64", "18–64", "od 18 do 64 lat"]
    ],
    explanation: "Wiek produkcyjny zaczyna się w wieku 18 lat, a kończy w wieku 59 lat u kobiet i 64 lat u mężczyzn."
  },
  {
    id: "R04_WIE_05",
    section: "Struktura płci i wieku",
    type: "true_false",
    prompt: "Mężczyźni w Polsce osiągają wiek produkcyjny wcześniej niż kobiety.",
    options: null,
    answer: false,
    explanation: "Zarówno kobiety, jak i mężczyźni osiągają wiek produkcyjny po ukończeniu 18 lat. Różny jest jego górny próg."
  },
  {
    id: "R04_WIE_06",
    section: "Struktura płci i wieku",
    type: "scenario",
    prompt: "Z piramidy płci i wieku Polski w 2024 r. odczytano około 200 tys. 70-letnich mężczyzn i około 260 tys. 70-letnich kobiet. Ilu było łącznie 70-latków?",
    options: ["Około 460 tys.", "Około 60 tys.", "Około 260 tys.", "Około 200 tys.", "Około 520 tys.", "Około 400 tys."],
    answer: 0,
    explanation: "Po zsumowaniu obu słupków otrzymujemy około 200 tys. + 260 tys. = 460 tys. osób.",
    image: "r04_piramida_plci_wieku.jpg"
  },
  {
    id: "R04_WIE_07",
    section: "Struktura płci i wieku",
    type: "multi_select",
    prompt: "Zaznacz cechy obecnej struktury płci i wieku ludności Polski.",
    options: ["Najliczniejsza grupa ma około 35-50 lat", "U podstawy piramida od lat się zwęża", "Wśród osób po 50. roku życia przeważają kobiety", "Rodzą się nieco częściej chłopcy niż dziewczynki", "Najwięcej jest osób powyżej 80 lat", "Społeczeństwo szybko się odmładza"],
    answer: [0, 1, 2, 3],
    explanation: "Polskie społeczeństwo starzeje się: rodzi się coraz mniej dzieci, liczna jest grupa 35-50 lat, a dzięki dłuższemu życiu kobiet przeważają one w starszych rocznikach.",
    image: "r04_piramida_plci_wieku.jpg"
  },
  {
    id: "R04_WIE_08",
    section: "Struktura płci i wieku",
    type: "sequence",
    prompt: "Ułóż łańcuch prowadzący do dalszego spadku liczby urodzeń.",
    options: null,
    items: ["Rodziców jest mniej", "Rodzą się mniej liczne roczniki", "W dorosłość wchodzi mniej młodych ludzi", "Rodzinom rodzi się mniej dzieci łącznie"],
    answer: ["Rodzą się mniej liczne roczniki", "W dorosłość wchodzi mniej młodych ludzi", "Rodziców jest mniej", "Rodzinom rodzi się mniej dzieci łącznie"],
    explanation: "Mniej liczne roczniki dzieci oznaczają w przyszłości mniej młodych dorosłych i potencjalnych rodziców, a więc także mniej urodzeń.",
    image: "r04_starzenie_spoleczenstwa.jpg"
  },
  {
    id: "R04_WIE_09",
    section: "Struktura płci i wieku",
    type: "match",
    prompt: "Połącz kategorię wieku z właściwym przedziałem.",
    options: null,
    left: ["wiek przedprodukcyjny", "wiek produkcyjny kobiet", "wiek produkcyjny mężczyzn", "wiek poprodukcyjny kobiet", "wiek poprodukcyjny mężczyzn"],
    right: ["poniżej 18 lat", "18-59 lat", "18-64 lata", "60 lat i więcej", "65 lat i więcej"],
    answer: {
      "wiek przedprodukcyjny": "poniżej 18 lat",
      "wiek produkcyjny kobiet": "18-59 lat",
      "wiek produkcyjny mężczyzn": "18-64 lata",
      "wiek poprodukcyjny kobiet": "60 lat i więcej",
      "wiek poprodukcyjny mężczyzn": "65 lat i więcej"
    },
    explanation: "Granice wieku produkcyjnego są w Polsce różne dla kobiet i mężczyzn, natomiast wiek przedprodukcyjny obejmuje osoby poniżej 18 lat.",
    image: "r04_starzenie_spoleczenstwa.jpg"
  },

  {
    id: "R04_MNW_01",
    section: "Mniejszości i wyznania",
    type: "single_choice",
    prompt: "Która instytucja przeprowadza w Polsce spisy powszechne i opracowuje ich wyniki?",
    options: ["Główny Urząd Statystyczny", "Ministerstwo Edukacji", "Narodowy Bank Polski", "Państwowa Komisja Wyborcza", "Instytut Meteorologii i Gospodarki Wodnej", "Zakład Ubezpieczeń Społecznych"],
    answer: 0,
    explanation: "Za przeprowadzanie spisów powszechnych oraz analizę ich wyników odpowiada Główny Urząd Statystyczny."
  },
  {
    id: "R04_MNW_02",
    section: "Mniejszości i wyznania",
    type: "match",
    prompt: "Połącz rodzaj mniejszości z cechą odróżniającą ją od większości mieszkańców państwa.",
    options: null,
    left: ["mniejszość narodowa", "mniejszość etniczna", "mniejszość wyznaniowa"],
    right: ["inna religia", "związek z innym narodem posiadającym własne państwo", "odrębna kultura bez własnego państwa"],
    answer: {
      "mniejszość narodowa": "związek z innym narodem posiadającym własne państwo",
      "mniejszość etniczna": "odrębna kultura bez własnego państwa",
      "mniejszość wyznaniowa": "inna religia"
    },
    explanation: "Mniejszość narodowa utożsamia się z innym narodem, etniczna nie ma własnego państwa, a wyznaniowa wyznaje religię inną niż większość."
  },
  {
    id: "R04_MNW_03",
    section: "Mniejszości i wyznania",
    type: "multi_select",
    prompt: "Zaznacz mniejszości narodowe uznawane w Polsce.",
    options: ["Białorusini", "Litwini", "Niemcy", "Ukraińcy", "Romowie", "Tatarzy", "Czesi", "Karaimi"],
    answer: [0, 1, 2, 3, 6],
    explanation: "Białorusini, Litwini, Niemcy, Ukraińcy i Czesi są mniejszościami narodowymi. Romowie, Tatarzy i Karaimi należą do mniejszości etnicznych.",
    image: "r04_mniejszosci_narodowe.jpg"
  },
  {
    id: "R04_MNW_04",
    section: "Mniejszości i wyznania",
    type: "sort",
    prompt: "Przyporządkuj grupy do mniejszości narodowych albo etnicznych.",
    options: null,
    items: ["Ukraińcy", "Czesi", "Ormianie", "Żydzi", "Łemkowie", "Romowie", "Karaimi", "Tatarzy"],
    categories: ["mniejszości narodowe", "mniejszości etniczne"],
    answer: {
      "mniejszości narodowe": ["Ukraińcy", "Czesi", "Ormianie", "Żydzi"],
      "mniejszości etniczne": ["Łemkowie", "Romowie", "Karaimi", "Tatarzy"]
    },
    explanation: "Do mniejszości etnicznych w Polsce należą Łemkowie, Romowie, Karaimi i Tatarzy; pozostałe wymienione grupy są mniejszościami narodowymi.",
    image: "r04_mniejszosci_etniczne.jpg"
  },
  {
    id: "R04_MNW_05",
    section: "Mniejszości i wyznania",
    type: "match",
    prompt: "Połącz mniejszość narodową z jej głównym skupiskiem w Polsce.",
    options: null,
    left: ["litewska", "białoruska", "ukraińska", "słowacka", "żydowska"],
    right: ["województwo podlaskie przy granicy z Litwą", "województwo podlaskie przy granicy z Białorusią", "województwa podkarpackie i warmińsko-mazurskie", "województwo małopolskie", "duże miasta takie jak Warszawa i Kraków"],
    answer: {
      "litewska": "województwo podlaskie przy granicy z Litwą",
      "białoruska": "województwo podlaskie przy granicy z Białorusią",
      "ukraińska": "województwa podkarpackie i warmińsko-mazurskie",
      "słowacka": "województwo małopolskie",
      "żydowska": "duże miasta takie jak Warszawa i Kraków"
    },
    explanation: "Rozmieszczenie wielu mniejszości narodowych wiąże się z bliskością granic, a społeczność żydowska skupia się głównie w dużych miastach.",
    image: "r04_mniejszosci_narodowe.jpg"
  },
  {
    id: "R04_MNW_06",
    section: "Mniejszości i wyznania",
    type: "single_choice",
    prompt: "Która mniejszość etniczna od kilku wieków zamieszkuje Podlasie, a większość jej przedstawicieli wyznaje islam?",
    options: ["Tatarzy", "Łemkowie", "Romowie", "Karaimi", "Kaszubi", "Ślązacy"],
    answer: 0,
    explanation: "Tatarzy mieszkają na Podlasiu, gdzie świadectwem ich obecności są drewniane meczety.",
    image: "r04_mniejszosci_etniczne.jpg"
  },
  {
    id: "R04_MNW_07",
    section: "Mniejszości i wyznania",
    type: "match",
    prompt: "Połącz mniejszość etniczną z charakterystyczną informacją.",
    options: null,
    left: ["Tatarzy", "Łemkowie", "Romowie", "Karaimi"],
    right: ["islam i drewniane meczety na Podlasiu", "język łemkowski i festiwal w Zdyni", "język romani i tradycja koczownicza", "karaimizm i pochodzenie z Bliskiego Wschodu"],
    answer: {
      "Tatarzy": "islam i drewniane meczety na Podlasiu",
      "Łemkowie": "język łemkowski i festiwal w Zdyni",
      "Romowie": "język romani i tradycja koczownicza",
      "Karaimi": "karaimizm i pochodzenie z Bliskiego Wschodu"
    },
    explanation: "Każda z czterech mniejszości etnicznych ma odrębny język, tradycje, religię lub historię osadnictwa.",
    image: "r04_mniejszosci_etniczne.jpg"
  },
  {
    id: "R04_MNW_08",
    section: "Mniejszości i wyznania",
    type: "true_false",
    prompt: "Kaszubi i Ślązacy mają w Polsce status mniejszości etnicznych.",
    options: null,
    answer: false,
    explanation: "Kaszubi i Ślązacy są grupami etnicznymi, ale nie mają statusu mniejszości etnicznych."
  },
  {
    id: "R04_MNW_09",
    section: "Mniejszości i wyznania",
    type: "multi_select",
    prompt: "Zaznacz trzy główne nurty chrześcijaństwa obecne w Polsce.",
    options: ["Katolicyzm", "Prawosławie", "Protestantyzm", "Islam", "Judaizm", "Karaimizm"],
    answer: [0, 1, 2],
    explanation: "Chrześcijaństwo ukształtowało trzy główne nurty: katolicyzm, prawosławie i protestantyzm.",
    image: "r04_wyznania_w_polsce.jpg"
  },

  {
    id: "R04_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Który zestaw poprawnie przedstawia prognozowaną liczbę ludności Polski?",
    options: ["2040 r. - nieco ponad 35 mln; 2060 r. - prawie 31 mln", "2040 r. - prawie 31 mln; 2060 r. - ponad 35 mln", "2040 r. - około 38 mln; 2060 r. - około 37,5 mln", "2040 r. - ponad 44 mln; 2060 r. - ponad 50 mln", "2040 r. - około 24 mln; 2060 r. - około 20 mln", "2040 r. - ponad 744 mln; 2060 r. - ponad 8,2 mld"],
    answer: 0,
    explanation: "Prognozy przewidują spadek populacji Polski do nieco ponad 35 mln w 2040 r. i prawie 31 mln w 2060 r.",
    image: "r04_populacja_swiat_europa_polska.jpg"
  },
  {
    id: "R04_HARD_02",
    section: "Super trudne",
    type: "scenario",
    prompt: "Aglomeracja warszawska ma około 3,1 mln mieszkańców i powierzchnię około 6 tys. km². Jaka jest jej przybliżona gęstość zaludnienia?",
    options: ["Około 517 os./km²", "Około 120 os./km²", "Około 52 os./km²", "Około 1860 os./km²", "Około 6000 os./km²", "Około 3,1 os./km²"],
    answer: 0,
    explanation: "3 100 000 : 6000 daje około 516,7, czyli w przybliżeniu 517 os./km²."
  },
  {
    id: "R04_HARD_03",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Wskaż czynnik niepasujący do przyczyn małej gęstości zaludnienia pojezierzy: mało żyzne gleby, pagórkowaty teren, liczne lasy i jeziora, duża liczba uczelni wyższych.",
    options: null,
    answer: "duża liczba uczelni wyższych",
    explanation: "Mało żyzne gleby, pagórkowaty teren oraz liczne lasy i jeziora ograniczają osadnictwo na pojezierzach. Uczelnie są czynnikiem przyciągającym ludność do dużych miast.",
    image: "r04_gestosc_miasto_gory.jpg"
  },
  {
    id: "R04_HARD_04",
    section: "Super trudne",
    type: "single_choice",
    prompt: "W którym państwie mieszka najliczniejsza Polonia, szacowana na około 8,5 mln osób?",
    options: ["Stany Zjednoczone", "Niemcy", "Wielka Brytania", "Holandia", "Norwegia", "Szwecja"],
    answer: 0,
    explanation: "Najliczniejsza Polonia mieszka w Stanach Zjednoczonych. Duże skupisko Polaków znajduje się m.in. w Chicago.",
    image: "r04_emigracja_zarobkowa.jpg"
  },
  {
    id: "R04_HARD_05",
    section: "Super trudne",
    type: "scenario",
    prompt: "W 2000 r. do Polski przybyło 7331 imigrantów, a wyjechało 26 999 emigrantów. Ile wyniosło saldo migracji?",
    options: ["-19 668", "+19 668", "34 330", "-34 330", "-26 999", "+7331"],
    answer: 0,
    explanation: "Saldo migracji obliczamy jako 7331 - 26 999 = -19 668."
  },
  {
    id: "R04_HARD_06",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż szczegółowe etapy zmian migracji w Polsce od najwcześniejszego do najpóźniejszego.",
    options: null,
    items: ["Pandemia COVID-19 powoduje krótki spadek migracji", "Po wejściu do UE pojawia się wzmożona fala emigracji", "Inwazja Rosji wywołuje falę uchodźstwa z Ukrainy", "Emigracja co roku przewyższa imigrację", "Saldo migracji staje się dodatnie"],
    answer: ["Emigracja co roku przewyższa imigrację", "Po wejściu do UE pojawia się wzmożona fala emigracji", "Saldo migracji staje się dodatnie", "Pandemia COVID-19 powoduje krótki spadek migracji", "Inwazja Rosji wywołuje falę uchodźstwa z Ukrainy"],
    explanation: "Kolejność odpowiada okresom 1990-2004, wejściu Polski do UE w 2004 r., zmianie salda w 2016 r., pandemii od 2020 r. i inwazji Rosji w 2022 r."
  },
  {
    id: "R04_HARD_07",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Dla 272 500 urodzeń, 409 000 zgonów i populacji 37 637 000 współczynnik przyrostu naturalnego wynosi około __________.",
    options: null,
    answer: ["-3,63‰"],
    altAnswers: [["-3,63‰", "-3,6‰", "-3.63‰", "-3,63 promila"]],
    explanation: "Przyrost naturalny wynosi -136 500, a (-136 500 : 37 637 000) × 1000‰ daje około -3,63‰."
  },
  {
    id: "R04_HARD_08",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz zjawisko demograficzne z jego przyczyną.",
    options: null,
    left: ["powojenny wyż kompensacyjny", "niż około 20 lat po wojnie", "wyż na przełomie lat 70. i 80.", "niewielki wyż 2006-2011"],
    right: ["wzrost urodzeń po zakończeniu wojny", "mało liczne wojenne roczniki zostały rodzicami", "liczne powojenne roczniki zostały rodzicami", "dzieci pokolenia z lat 80. zakładały rodziny"],
    answer: {
      "powojenny wyż kompensacyjny": "wzrost urodzeń po zakończeniu wojny",
      "niż około 20 lat po wojnie": "mało liczne wojenne roczniki zostały rodzicami",
      "wyż na przełomie lat 70. i 80.": "liczne powojenne roczniki zostały rodzicami",
      "niewielki wyż 2006-2011": "dzieci pokolenia z lat 80. zakładały rodziny"
    },
    explanation: "Naprzemienne wyże i niże są echem liczebności wcześniejszych pokoleń oraz wpływu II wojny światowej.",
    image: "r04_wyz_i_niz_demograficzny.jpg"
  },
  {
    id: "R04_HARD_09",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Przy 65 000 urodzeń, 71 000 zgonów, 19 000 imigrantów i 17 500 emigrantów przyrost rzeczywisty wynosi __________, a dla 20 mln mieszkańców jego współczynnik wynosi __________.",
    options: null,
    answer: ["-4500", "-0,225‰"],
    altAnswers: [
      ["-4500", "-4 500"],
      ["-0,225‰", "-0.225‰", "-0,23‰", "-0,225 promila"]
    ],
    explanation: "Przyrost naturalny to -6000, saldo migracji +1500, a przyrost rzeczywisty -4500. Po przeliczeniu na 20 mln mieszkańców otrzymujemy -0,225‰."
  },
  {
    id: "R04_HARD_10",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Ile wynosił współczynnik przyrostu rzeczywistego Polski w 2024 r. według zestawienia państw Europy?",
    options: ["-3,4‰", "+3,4‰", "-1,0‰", "+1,4‰", "+0,8‰", "-11,0‰"],
    answer: 0,
    explanation: "W zestawieniu dla 2024 r. współczynnik przyrostu rzeczywistego Polski wynosił -3,4‰."
  },
  {
    id: "R04_HARD_11",
    section: "Super trudne",
    type: "scenario",
    prompt: "Na piramidzie Polski z 2024 r. dla wieku 70 lat słupek kobiet sięga około 260 tys., a mężczyzn około 200 tys. Jaki wniosek jest poprawny?",
    options: ["Kobiet jest o około 60 tys. więcej", "Mężczyzn jest o około 60 tys. więcej", "Kobiet jest dokładnie dwa razy więcej", "Liczebność obu płci jest równa", "Łącznie jest około 260 tys. osób", "Łącznie jest około 200 tys. osób"],
    answer: 0,
    explanation: "260 tys. - 200 tys. = około 60 tys. W starszych grupach wieku kobiety przeważają liczebnie.",
    image: "r04_piramida_plci_wieku.jpg"
  },
  {
    id: "R04_HARD_12",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz mniejszość etniczną z liczbą osób deklarujących tę przynależność w spisie z 2021 r.",
    options: null,
    left: ["Tatarzy", "Łemkowie", "Romowie", "Karaimi"],
    right: ["346", "4009", "9026", "9226"],
    answer: {
      "Tatarzy": "4009",
      "Łemkowie": "9226",
      "Romowie": "9026",
      "Karaimi": "346"
    },
    explanation: "Według spisu z 2021 r. liczebność tych grup wynosiła: 4009 Tatarów, 9226 Łemków, 9026 Romów i 346 Karaimów.",
    image: "r04_mniejszosci_etniczne.jpg"
  },
  {
    id: "R04_HARD_13",
    section: "Super trudne",
    type: "fill_in",
    prompt: "W spisie z 2021 r. katolicy stanowili około __________ mieszkańców Polski, a osoby nienależące do żadnego wyznania około __________.",
    options: null,
    answer: ["71,3%", "6,87%"],
    altAnswers: [
      ["71,3%", "71.3%", "około 71,3%"],
      ["6,87%", "6.87%", "około 6,87%"]
    ],
    explanation: "Wyniki spisu wskazywały około 71,3% katolików i około 6,87% osób nienależących do żadnego wyznania.",
    image: "r04_wyznania_w_polsce.jpg"
  },
  {
    id: "R04_HARD_14",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz poprawne informacje o grupach etnicznych i mniejszościach etnicznych w Polsce.",
    options: ["Język kaszubski uznano za regionalny w 2005 r.", "Łemkowska Watra odbywa się w Zdyni", "Karaimi wyznają karaimizm", "Romowie mają indyjskie pochodzenie", "Większość Tatarów wyznaje islam", "Ślązacy są mniejszością narodową"],
    answer: [0, 1, 2, 3, 4],
    explanation: "Pierwszych pięć zdań jest zgodnych z opisem grup. Ślązacy są grupą etniczną bez statusu mniejszości narodowej.",
    image: "r04_mniejszosci_etniczne.jpg"
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r04",
  number: 4,
  title: "Ludność Polski",
  icon: "👥",
  sectionOrder: [
    "Liczba i rozmieszczenie ludności",
    "Migracje",
    "Przyrost naturalny",
    "Przyrost rzeczywisty",
    "Struktura płci i wieku",
    "Mniejszości i wyznania"
  ],
  sectionIcons: {
    "Liczba i rozmieszczenie ludności": "🗺️",
    "Migracje": "🧳",
    "Przyrost naturalny": "👶",
    "Przyrost rzeczywisty": "📊",
    "Struktura płci i wieku": "👨‍👩‍👧‍👦",
    "Mniejszości i wyznania": "🤝"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
