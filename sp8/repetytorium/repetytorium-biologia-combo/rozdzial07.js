// Skróty sekcji (do identyfikatorów ćwiczeń):
//   EKO = Ekosystem i populacje
//   ODD = Oddziaływania i tolerancja ekologiczna
//   TRO = Sieci troficzne i przepływ energii
//   ZAS = Zasoby przyrody i zrównoważony rozwój
//   BIO = Bioróżnorodność i jej zagrożenia
//   OCH = Formy ochrony przyrody w Polsce
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R07_EKO_01",
    "section": "Ekosystem i populacje",
    "type": "single_choice",
    "prompt": "Jak nazywa się zbiór nieożywionych elementów ekosystemu?",
    "options": [
      "Biocenoza",
      "Biotop",
      "Populacja",
      "Sieć troficzna",
      "Sukcesja",
      "Nisza ekologiczna"
    ],
    "answer": 1,
    "explanation": "Biotop obejmuje czynniki abiotyczne, m.in. temperaturę, wodę, światło i składniki mineralne."
  },
  {
    "id": "R07_EKO_02",
    "section": "Ekosystem i populacje",
    "type": "multi_select",
    "prompt": "Wybierz czynniki abiotyczne występujące w ekosystemie.",
    "options": [
      "Temperatura",
      "Bakterie",
      "Nasłonecznienie",
      "Sole mineralne",
      "Grzyby",
      "Wilgotność"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Czynniki abiotyczne to elementy nieożywione, takie jak temperatura, nasłonecznienie, sole mineralne i wilgotność."
  },
  {
    "id": "R07_EKO_03",
    "section": "Ekosystem i populacje",
    "type": "true_false",
    "prompt": "Sukcesja wtórna przebiega szybciej niż sukcesja pierwotna.",
    "options": null,
    "answer": true,
    "explanation": "Sukcesja wtórna zachodzi w miejscu wcześniej zasiedlonym, np. po pożarze, i jest zwykle szybsza od pierwotnej."
  },
  {
    "id": "R07_EKO_04",
    "section": "Ekosystem i populacje",
    "type": "fill_in",
    "prompt": "Populacja to osobniki jednego __________ żyjące równocześnie na tym samym __________.",
    "options": null,
    "altAnswers": [
      [
        "gatunku"
      ],
      [
        "obszarze",
        "terenie"
      ]
    ],
    "answer": [
      "gatunku",
      "obszarze"
    ],
    "explanation": "Populacja obejmuje osobniki tego samego gatunku żyjące jednocześnie na określonym obszarze."
  },
  {
    "id": "R07_EKO_05",
    "section": "Ekosystem i populacje",
    "type": "riddle",
    "prompt": "Jak nazywa się liczba osobników populacji przypadających na jednostkę powierzchni lub objętości?",
    "options": null,
    "altAnswers": [
      "zagęszczenie populacji",
      "zagęszczenie"
    ],
    "answer": "zagęszczenie populacji",
    "explanation": "Zagęszczenie określa liczbę osobników w przeliczeniu na jednostkę powierzchni lub objętości."
  },
  {
    "id": "R07_EKO_06",
    "section": "Ekosystem i populacje",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest cechą populacji: liczebność, zagęszczenie, struktura wiekowa, skład mineralny gleby.",
    "options": null,
    "answer": "skład mineralny gleby",
    "explanation": "Skład mineralny gleby jest czynnikiem abiotycznym, a nie cechą populacji."
  },
  {
    "id": "R07_EKO_07",
    "section": "Ekosystem i populacje",
    "type": "match",
    "prompt": "Dopasuj rodzaj rozmieszczenia osobników do jego opisu.",
    "options": null,
    "left": [
      "Skupiskowe",
      "Losowe",
      "Równomierne"
    ],
    "right": [
      "Położenie osobników jest przypadkowe",
      "Osobniki zachowują podobne odstępy",
      "Osobniki tworzą grupy"
    ],
    "image": "r07_rozmieszczenie_populacji.jpg",
    "answer": {
      "Skupiskowe": "Osobniki tworzą grupy",
      "Losowe": "Położenie osobników jest przypadkowe",
      "Równomierne": "Osobniki zachowują podobne odstępy"
    },
    "explanation": "Wyróżnia się rozmieszczenie skupiskowe, losowe i równomierne osobników w populacji."
  },
  {
    "id": "R07_EKO_08",
    "section": "Ekosystem i populacje",
    "type": "sort",
    "prompt": "Podziel składniki ekosystemu na biotyczne i abiotyczne.",
    "options": null,
    "items": [
      "Temperatura",
      "Drzewa",
      "Sole mineralne",
      "Bakterie",
      "Nasłonecznienie",
      "Grzyby"
    ],
    "categories": [
      "Biotyczne",
      "Abiotyczne"
    ],
    "answer": {
      "Biotyczne": [
        "Drzewa",
        "Bakterie",
        "Grzyby"
      ],
      "Abiotyczne": [
        "Temperatura",
        "Sole mineralne",
        "Nasłonecznienie"
      ]
    },
    "explanation": "Biocenoza obejmuje organizmy, a biotop nieożywione czynniki środowiska."
  },
  {
    "id": "R07_EKO_09",
    "section": "Ekosystem i populacje",
    "type": "scenario",
    "prompt": "Na świeżo odsłoniętych skałach po wylaniu lawy zaczyna się tworzyć nowy ekosystem. Jaki rodzaj sukcesji zachodzi w tym miejscu?",
    "options": [
      "Sukcesja wtórna",
      "Regres populacji",
      "Sukcesja pierwotna",
      "Migracja sezonowa",
      "Konkurencja wewnątrzgatunkowa"
    ],
    "image": "r07_sukcesja_skaly.jpg",
    "answer": 2,
    "explanation": "Sukcesja pierwotna zaczyna się tam, gdzie wcześniej nie było organizmów, np. na skałach po wylaniu lawy."
  },
  {
    "id": "R07_EKO_10",
    "section": "Ekosystem i populacje",
    "type": "sequence",
    "prompt": "Ułóż etapy życia osobnika od narodzin do okresu niezdolności rozrodczej.",
    "options": null,
    "items": [
      "Okres rozrodczy",
      "Okres porozrodczy",
      "Narodziny",
      "Okres przedrozrodczy"
    ],
    "image": "r07_piramida_wiekowa.jpg",
    "answer": [
      "Narodziny",
      "Okres przedrozrodczy",
      "Okres rozrodczy",
      "Okres porozrodczy"
    ],
    "explanation": "Struktura wiekowa wyróżnia osobniki młode, dorosłe zdolne do rozrodu i stare, już niezdolne do rozrodu."
  },
  {
    "id": "R07_ODD_01",
    "section": "Oddziaływania i tolerancja ekologiczna",
    "type": "single_choice",
    "prompt": "Jak nazywają się organizmy o szerokim zakresie tolerancji ekologicznej?",
    "options": [
      "Stenobionty",
      "Destruenci",
      "Endemity",
      "Eurybionty",
      "Producenci",
      "Relikty"
    ],
    "answer": 3,
    "explanation": "Eurybionty dobrze znoszą zmienne warunki środowiska; przykładem jest wróbel zwyczajny."
  },
  {
    "id": "R07_ODD_02",
    "section": "Oddziaływania i tolerancja ekologiczna",
    "type": "multi_select",
    "prompt": "Które organizmy mogą służyć jako wskaźniki stanu środowiska?",
    "options": [
      "Larwy jętek",
      "Wróbel zwyczajny",
      "Pstrąg potokowy",
      "Sosna zwyczajna",
      "Porosty",
      "Jeleń"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Larwy jętek i pstrąg potokowy wskazują na czyste wody, a porosty pomagają oceniać zanieczyszczenie powietrza."
  },
  {
    "id": "R07_ODD_03",
    "section": "Oddziaływania i tolerancja ekologiczna",
    "type": "true_false",
    "prompt": "W komensalizmie jeden gatunek odnosi korzyść, a drugi nie ponosi strat.",
    "options": null,
    "answer": true,
    "explanation": "Komensalizm należy do oddziaływań nieantagonistycznych: jeden partner korzysta, drugi pozostaje bez strat."
  },
  {
    "id": "R07_ODD_04",
    "section": "Oddziaływania i tolerancja ekologiczna",
    "type": "fill_in",
    "prompt": "Najkorzystniejsza wartość czynnika ekologicznego to __________, a organizmy o wąskiej tolerancji to __________.",
    "options": null,
    "altAnswers": [
      [
        "optimum",
        "optimum ekologiczne"
      ],
      [
        "stenobionty"
      ]
    ],
    "answer": [
      "optimum",
      "stenobionty"
    ],
    "explanation": "Optimum to warunki najlepsze dla organizmu. Stenobionty tolerują tylko wąski zakres danego czynnika."
  },
  {
    "id": "R07_ODD_05",
    "section": "Oddziaływania i tolerancja ekologiczna",
    "type": "riddle",
    "prompt": "Jak nazywa się zdolność przystosowywania się organizmu do zmian danego czynnika środowiska?",
    "options": null,
    "altAnswers": [
      "tolerancja ekologiczna",
      "tolerancję ekologiczną"
    ],
    "answer": "tolerancja ekologiczna",
    "explanation": "Tolerancja ekologiczna określa zdolność organizmu do znoszenia zmian czynnika w określonym zakresie."
  },
  {
    "id": "R07_ODD_06",
    "section": "Oddziaływania i tolerancja ekologiczna",
    "type": "odd_one_out",
    "prompt": "Wskaż przykład, który nie opisuje konkurencji: walka jeleni o samice, rywalizacja sadzonek o wodę, rywalizacja dzików z człowiekiem o plony, symbioza glonu z grzybem w poroście.",
    "options": null,
    "answer": "symbioza glonu z grzybem w poroście",
    "explanation": "W poroście glon i grzyb odnoszą wzajemne korzyści, jest to mutualizm, a nie konkurencja."
  },
  {
    "id": "R07_ODD_07",
    "section": "Oddziaływania i tolerancja ekologiczna",
    "type": "match",
    "prompt": "Dopasuj rodzaj plechy porostu do wskazywanego stanu powietrza.",
    "options": null,
    "left": [
      "Skorupiasta",
      "Listkowata",
      "Krzaczkowata"
    ],
    "right": [
      "Czyste powietrze",
      "Silnie zanieczyszczone powietrze",
      "Średnio zanieczyszczone powietrze"
    ],
    "image": "r07_porosty_plechy.jpg",
    "answer": {
      "Skorupiasta": "Silnie zanieczyszczone powietrze",
      "Listkowata": "Średnio zanieczyszczone powietrze",
      "Krzaczkowata": "Czyste powietrze"
    },
    "explanation": "Wróbel zwyczajny toleruje szeroki zakres temperatur, dlatego jest eurybiontem."
  },
  {
    "id": "R07_ODD_08",
    "section": "Oddziaływania i tolerancja ekologiczna",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady oddziaływań do dwóch grup.",
    "options": null,
    "items": [
      "Komensalizm",
      "Konkurencja siewek o wodę",
      "Mutualizm glonu i grzyba",
      "Rywalizacja jeleni o samice",
      "Konkurencja buków z innymi roślinami"
    ],
    "categories": [
      "Antagonistyczne",
      "Nieantagonistyczne"
    ],
    "answer": {
      "Antagonistyczne": [
        "Rywalizacja jeleni o samice",
        "Konkurencja siewek o wodę",
        "Konkurencja buków z innymi roślinami"
      ],
      "Nieantagonistyczne": [
        "Mutualizm glonu i grzyba",
        "Komensalizm"
      ]
    },
    "explanation": "Konkurencja przynosi straty uczestnikom, natomiast mutualizm i komensalizm nie powodują strat u partnerów."
  },
  {
    "id": "R07_ODD_09",
    "section": "Oddziaływania i tolerancja ekologiczna",
    "type": "scenario",
    "prompt": "Wróbel potrafi żyć w miejscach o bardzo różnych temperaturach. Jaki typ organizmu reprezentuje pod względem tolerancji na temperaturę?",
    "options": [
      "Stenobiont",
      "Eurybiont",
      "Endemit",
      "Relikt polodowcowy",
      "Destruent"
    ],
    "answer": 1,
    "explanation": "Wróbel zwyczajny ma szeroki zakres tolerancji na temperaturę, dlatego jest przykładem eurybionta."
  },
  {
    "id": "R07_ODD_10",
    "section": "Oddziaływania i tolerancja ekologiczna",
    "type": "sequence",
    "prompt": "Ułóż wartości czynnika środowiskowego w kolejności od najniższej do najwyższej względem zakresu tolerancji.",
    "options": null,
    "items": [
      "Optimum",
      "Powyżej maksimum",
      "Minimum",
      "Maksimum",
      "Poniżej minimum"
    ],
    "image": "r07_krzywa_tolerancji.jpg",
    "answer": [
      "Poniżej minimum",
      "Minimum",
      "Optimum",
      "Maksimum",
      "Powyżej maksimum"
    ],
    "explanation": "Zakres tolerancji obejmuje wartości od minimum do maksimum, a optimum leży w jego najbardziej korzystnej części."
  },
  {
    "id": "R07_TRO_01",
    "section": "Sieci troficzne i przepływ energii",
    "type": "single_choice",
    "prompt": "Które organizmy pełnią rolę producentów w zbiornikach wodnych?",
    "options": [
      "Grzyby i bakterie saprofityczne",
      "Drapieżne ryby",
      "Owady wodne",
      "Pierwotniaki",
      "Glony i sinice",
      "Ptaki wodne"
    ],
    "answer": 4,
    "explanation": "Glony i sinice tworzą fitoplankton i wytwarzają pokarm w procesie fotosyntezy."
  },
  {
    "id": "R07_TRO_02",
    "section": "Sieci troficzne i przepływ energii",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki i substraty potrzebne roślinom do fotosyntezy.",
    "options": [
      "Woda",
      "Tlen pobrany z powietrza",
      "Dwutlenek węgla",
      "Gotowy pokarm zwierzęcy",
      "Martwe szczątki",
      "Światło słoneczne"
    ],
    "answer": [
      0,
      2,
      5
    ],
    "explanation": "Do fotosyntezy rośliny wykorzystują wodę, dwutlenek węgla i światło słoneczne."
  },
  {
    "id": "R07_TRO_03",
    "section": "Sieci troficzne i przepływ energii",
    "type": "true_false",
    "prompt": "Energia krąży w ekosystemie wielokrotnie, tak samo jak materia.",
    "options": null,
    "answer": false,
    "explanation": "Materia krąży między organizmami a środowiskiem, natomiast energia przepływa i stopniowo się rozprasza."
  },
  {
    "id": "R07_TRO_04",
    "section": "Sieci troficzne i przepływ energii",
    "type": "fill_in",
    "prompt": "Konsumenci I rzędu to zazwyczaj __________, a konsumenci II rzędu zjadają __________.",
    "options": null,
    "altAnswers": [
      [
        "roślinożercy",
        "zwierzęta roślinożerne"
      ],
      [
        "roślinożerców",
        "zwierzęta roślinożerne"
      ]
    ],
    "answer": [
      "roślinożercy",
      "roślinożerców"
    ],
    "explanation": "Roślinożercy żywią się producentami, a mięsożercy drugiego rzędu polują na roślinożerców."
  },
  {
    "id": "R07_TRO_05",
    "section": "Sieci troficzne i przepływ energii",
    "type": "riddle",
    "prompt": "Jak nazywa się układ wielu łączących się i krzyżujących łańcuchów pokarmowych?",
    "options": null,
    "altAnswers": [
      "sieć pokarmowa",
      "sieć troficzna"
    ],
    "answer": "sieć pokarmowa",
    "explanation": "Sieć pokarmowa, inaczej troficzna, przedstawia złożone zależności żywieniowe między organizmami."
  },
  {
    "id": "R07_TRO_06",
    "section": "Sieci troficzne i przepływ energii",
    "type": "odd_one_out",
    "prompt": "Wskaż organizm, który nie jest producentem: sosna, glony, sinice, kuna leśna.",
    "options": null,
    "answer": "kuna leśna",
    "explanation": "Kuna leśna jest konsumentem, a sosna, glony i sinice mogą pełnić funkcję producentów."
  },
  {
    "id": "R07_TRO_07",
    "section": "Sieci troficzne i przepływ energii",
    "type": "match",
    "prompt": "Dopasuj rolę troficzną do przykładowego organizmu.",
    "options": null,
    "left": [
      "Producent",
      "Konsument I rzędu",
      "Konsument II rzędu",
      "Destruent"
    ],
    "right": [
      "Grzyb saprofityczny",
      "Dzięcioł zjadający kornika",
      "Sosna",
      "Kornik"
    ],
    "image": "r07_las_siec_troficzna.jpg",
    "answer": {
      "Producent": "Sosna",
      "Konsument I rzędu": "Kornik",
      "Konsument II rzędu": "Dzięcioł zjadający kornika",
      "Destruent": "Grzyb saprofityczny"
    },
    "explanation": "Producent wytwarza pokarm, kornik żywi się rośliną, dzięcioł może zjadać kornika, a grzyb rozkłada martwą materię."
  },
  {
    "id": "R07_TRO_08",
    "section": "Sieci troficzne i przepływ energii",
    "type": "sort",
    "prompt": "Podziel organizmy zgodnie z ich rolą w łańcuchu pokarmowym.",
    "options": null,
    "items": [
      "Kornik",
      "Glon",
      "Bakteria saprofityczna",
      "Sosna",
      "Kuna leśna",
      "Grzyb saprofityczny"
    ],
    "categories": [
      "Producenci",
      "Konsumenci",
      "Destruenci"
    ],
    "answer": {
      "Producenci": [
        "Sosna",
        "Glon"
      ],
      "Konsumenci": [
        "Kornik",
        "Kuna leśna"
      ],
      "Destruenci": [
        "Grzyb saprofityczny",
        "Bakteria saprofityczna"
      ]
    },
    "explanation": "Producenci fotosyntetyzują, konsumenci odżywiają się innymi organizmami, a destruenci rozkładają szczątki."
  },
  {
    "id": "R07_TRO_09",
    "section": "Sieci troficzne i przepływ energii",
    "type": "scenario",
    "prompt": "Do ekosystemu trafia obca norka amerykańska. Ubywa ptaków wodno-błotnych gniazdujących na ziemi. Co może stać się z tym ekosystemem?",
    "options": [
      "Jego równowaga może zostać zaburzona",
      "Wszystkie gatunki zwiększą liczebność",
      "Obieg materii całkowicie ustanie",
      "Zniknie potrzeba istnienia destruentów",
      "Wzrośnie liczba wszystkich ptaków"
    ],
    "answer": 0,
    "explanation": "Wprowadzenie obcego drapieżnika może zmienić liczebności gatunków i zakłócić równowagę ekosystemu."
  },
  {
    "id": "R07_TRO_10",
    "section": "Sieci troficzne i przepływ energii",
    "type": "sequence",
    "prompt": "Ułóż uproszczony łańcuch pokarmowy lasu od producenta do rozkładaczy.",
    "options": null,
    "items": [
      "Dzięcioł",
      "Grzyby saprofityczne",
      "Kornik",
      "Sosna"
    ],
    "image": "r07_obieg_materii.jpg",
    "answer": [
      "Sosna",
      "Kornik",
      "Dzięcioł",
      "Grzyby saprofityczne"
    ],
    "explanation": "Sosna jest producentem, kornik konsumentem rośliny, dzięcioł może zjadać korniki, a grzyby saprofityczne rozkładają szczątki."
  },
  {
    "id": "R07_ZAS_01",
    "section": "Zasoby przyrody i zrównoważony rozwój",
    "type": "single_choice",
    "prompt": "Który z podanych surowców jest zasobem nieodnawialnym?",
    "options": [
      "Biomasa",
      "Woda",
      "Węgiel kamienny",
      "Gleba",
      "Wiatr",
      "Promieniowanie słoneczne"
    ],
    "answer": 2,
    "explanation": "Węgiel kamienny powstawał w procesach geologicznych przez miliony lat i nie odnawia się w ludzkiej skali czasu."
  },
  {
    "id": "R07_ZAS_02",
    "section": "Zasoby przyrody i zrównoważony rozwój",
    "type": "multi_select",
    "prompt": "Wybierz odnawialne zasoby przyrody.",
    "options": [
      "Woda",
      "Ropa naftowa",
      "Gleba",
      "Rudy metali",
      "Biomasa",
      "Gaz ziemny"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Woda, gleba i biomasa mogą podlegać regeneracji; ropa, rudy metali i gaz ziemny są zasobami nieodnawialnymi."
  },
  {
    "id": "R07_ZAS_03",
    "section": "Zasoby przyrody i zrównoważony rozwój",
    "type": "true_false",
    "prompt": "Wiatr zaklasyfikowano w schemacie zasobów przyrody jako zasób niewyczerpywalny.",
    "options": null,
    "answer": true,
    "explanation": "Wiatr, promieniowanie słoneczne i prądy morskie są zasobami niewyczerpywalnymi."
  },
  {
    "id": "R07_ZAS_04",
    "section": "Zasoby przyrody i zrównoważony rozwój",
    "type": "fill_in",
    "prompt": "Powtórne wykorzystanie odpadów do wytworzenia nowego produktu to __________, a zasada dbania o potrzeby przyszłych pokoleń to rozwój __________.",
    "options": null,
    "altAnswers": [
      [
        "recykling"
      ],
      [
        "zrównoważony",
        "zrownowazony"
      ]
    ],
    "answer": [
      "recykling",
      "zrównoważony"
    ],
    "explanation": "Recykling oszczędza materiały, a zrównoważony rozwój ma zaspokajać potrzeby obecnych ludzi bez uszczuplania szans przyszłych pokoleń."
  },
  {
    "id": "R07_ZAS_05",
    "section": "Zasoby przyrody i zrównoważony rozwój",
    "type": "riddle",
    "prompt": "Jak nazywa się oddziaływanie ludzi na środowisko naturalne?",
    "options": null,
    "altAnswers": [
      "antropopresja",
      "antropopresję"
    ],
    "answer": "antropopresja",
    "explanation": "Antropopresja to wpływ działalności ludzkiej na środowisko, np. przez budowę dróg, miast i wydobycie kopalin."
  },
  {
    "id": "R07_ZAS_06",
    "section": "Zasoby przyrody i zrównoważony rozwój",
    "type": "odd_one_out",
    "prompt": "Wskaż zasób, który nie jest nieodnawialny: węgiel brunatny, ropa naftowa, gaz ziemny, biomasa.",
    "options": null,
    "answer": "biomasa",
    "explanation": "Biomasa jest odnawialna, natomiast paliwa kopalne nie odnawiają się w ludzkiej skali czasu."
  },
  {
    "id": "R07_ZAS_07",
    "section": "Zasoby przyrody i zrównoważony rozwój",
    "type": "match",
    "prompt": "Połącz odnawialne źródło energii z jego charakterystyką.",
    "options": null,
    "left": [
      "Wiatrowa",
      "Wodna",
      "Słoneczna",
      "Geotermalna"
    ],
    "right": [
      "Wykorzystuje ciepło pod powierzchnią Ziemi",
      "Może zmieniać naturalny bieg rzek",
      "Może stanowić zagrożenie dla ptaków",
      "Najkorzystniejsza przy dużym nasłonecznieniu"
    ],
    "image": "r07_elektrownie_wiatrowe.jpg",
    "answer": {
      "Wiatrowa": "Może stanowić zagrożenie dla ptaków",
      "Wodna": "Może zmieniać naturalny bieg rzek",
      "Słoneczna": "Najkorzystniejsza przy dużym nasłonecznieniu",
      "Geotermalna": "Wykorzystuje ciepło pod powierzchnią Ziemi"
    },
    "explanation": "Odnawialne źródła energii mają zarówno zalety, jak i ograniczenia związane z warunkami ich wykorzystania."
  },
  {
    "id": "R07_ZAS_08",
    "section": "Zasoby przyrody i zrównoważony rozwój",
    "type": "sort",
    "prompt": "Przyporządkuj zasoby do odpowiednich kategorii.",
    "options": null,
    "items": [
      "Wiatr",
      "Węgiel kamienny",
      "Biomasa",
      "Promieniowanie słoneczne",
      "Rudy metali",
      "Woda"
    ],
    "categories": [
      "Wyczerpywalne odnawialne",
      "Wyczerpywalne nieodnawialne",
      "Niewyczerpywalne"
    ],
    "answer": {
      "Wyczerpywalne odnawialne": [
        "Biomasa",
        "Woda"
      ],
      "Wyczerpywalne nieodnawialne": [
        "Węgiel kamienny",
        "Rudy metali"
      ],
      "Niewyczerpywalne": [
        "Wiatr",
        "Promieniowanie słoneczne"
      ]
    },
    "explanation": "Zasoby dzielą się na wyczerpywalne odnawialne, wyczerpywalne nieodnawialne i niewyczerpywalne."
  },
  {
    "id": "R07_ZAS_09",
    "section": "Zasoby przyrody i zrównoważony rozwój",
    "type": "scenario",
    "prompt": "Szkoła chce ogrzewać budynek dzięki ciepłu gruntu, wykorzystując pompę ciepła. Jakie źródło energii zamierza wykorzystać?",
    "options": [
      "Energia wiatrowa",
      "Energia wodna",
      "Energia z paliw kopalnych",
      "Energia geotermalna",
      "Energia pływów"
    ],
    "answer": 3,
    "explanation": "Energia geotermalna pochodzi z ciepła skał, gruntu lub wód pod powierzchnią Ziemi."
  },
  {
    "id": "R07_ZAS_10",
    "section": "Zasoby przyrody i zrównoważony rozwój",
    "type": "sequence",
    "prompt": "Ułóż kolejne etapy powstawania nowego wyrobu dzięki recyklingowi.",
    "options": null,
    "items": [
      "Powtórne wykorzystanie odpadu",
      "Zużycie produktu",
      "Wytworzenie nowego produktu",
      "Powstanie odpadu"
    ],
    "answer": [
      "Zużycie produktu",
      "Powstanie odpadu",
      "Powtórne wykorzystanie odpadu",
      "Wytworzenie nowego produktu"
    ],
    "explanation": "Recykling polega na powtórnym wykorzystaniu odpadu do wytworzenia nowego produktu."
  },
  {
    "id": "R07_BIO_01",
    "section": "Bioróżnorodność i jej zagrożenia",
    "type": "single_choice",
    "prompt": "Który rodzaj bioróżnorodności opisuje różnice pomiędzy osobnikami tego samego gatunku?",
    "options": [
      "Różnorodność gatunkowa",
      "Różnorodność genetyczna",
      "Różnorodność ekosystemów",
      "Struktura przestrzenna",
      "Struktura wiekowa",
      "Struktura płciowa"
    ],
    "answer": 1,
    "explanation": "Różnorodność genetyczna wynika z różnic między jednostkami w obrębie gatunku."
  },
  {
    "id": "R07_BIO_02",
    "section": "Bioróżnorodność i jej zagrożenia",
    "type": "multi_select",
    "prompt": "Wybierz organizmy będące reliktami polodowcowymi w Polsce.",
    "options": [
      "Brzoza karłowata",
      "Dziobak",
      "Dębik ośmiopłatkowy",
      "Panda wielka",
      "Emu",
      "Malina moroszka"
    ],
    "image": "r07_relikty_polodowcowe.jpg",
    "answer": [
      0,
      2,
      5
    ],
    "explanation": "Brzoza karłowata, dębik ośmiopłatkowy i malina moroszka to relikty polodowcowe."
  },
  {
    "id": "R07_BIO_03",
    "section": "Bioróżnorodność i jej zagrożenia",
    "type": "true_false",
    "prompt": "Endemity to organizmy, które występują naturalnie na bardzo rozległych obszarach całego świata.",
    "options": null,
    "answer": false,
    "explanation": "Endemity zamieszkują tylko ściśle określony, stosunkowo niewielki obszar."
  },
  {
    "id": "R07_BIO_04",
    "section": "Bioróżnorodność i jej zagrożenia",
    "type": "fill_in",
    "prompt": "Do polskich reliktów polodowcowych należą m.in. __________ oraz __________.",
    "options": null,
    "altAnswers": [
      [
        "brzoza karłowata",
        "brzozę karłowatą"
      ],
      [
        "wierzba lapońska",
        "wierzbę lapońską"
      ]
    ],
    "answer": [
      "brzoza karłowata",
      "wierzba lapońska"
    ],
    "explanation": "Do reliktów polodowcowych w Polsce należą m.in. brzoza karłowata i wierzba lapońska."
  },
  {
    "id": "R07_BIO_05",
    "section": "Bioróżnorodność i jej zagrożenia",
    "type": "riddle",
    "prompt": "Jaki obcy gatunek raka wypiera w Polsce raka szlachetnego i raka błotnego?",
    "options": null,
    "altAnswers": [
      "rak pręgowany",
      "raka pręgowanego"
    ],
    "answer": "rak pręgowany",
    "explanation": "Rak pręgowany jest obcym gatunkiem, który może wypierać rodzime gatunki raków."
  },
  {
    "id": "R07_BIO_06",
    "section": "Bioróżnorodność i jej zagrożenia",
    "type": "odd_one_out",
    "prompt": "Wskaż zwierzę, które nie jest endemitem Australii: koala, dziobak, emu, zając bielak.",
    "options": null,
    "answer": "zając bielak",
    "explanation": "Koala, dziobak i emu są endemitami Australii; zając bielak jest reliktem polodowcowym."
  },
  {
    "id": "R07_BIO_07",
    "section": "Bioróżnorodność i jej zagrożenia",
    "type": "match",
    "prompt": "Dopasuj organizm do miejsca jego występowania.",
    "options": null,
    "left": [
      "Diabeł tasmański",
      "Koala",
      "Traszka karpacka",
      "Panda wielka"
    ],
    "right": [
      "Polska",
      "Góry chińskich prowincji",
      "Tasmania",
      "Australia"
    ],
    "answer": {
      "Diabeł tasmański": "Tasmania",
      "Koala": "Australia",
      "Traszka karpacka": "Polska",
      "Panda wielka": "Góry chińskich prowincji"
    },
    "explanation": "Endemity mają ograniczony zasięg geograficzny i występują tylko na określonych obszarach."
  },
  {
    "id": "R07_BIO_08",
    "section": "Bioróżnorodność i jej zagrożenia",
    "type": "sort",
    "prompt": "Oddziel czynniki geograficzne i klimatyczne od zagrożeń spowodowanych przez ludzi.",
    "options": null,
    "items": [
      "Wylesianie",
      "Rodzaj podłoża",
      "Przeławianie łowisk",
      "Nasłonecznienie",
      "Dostęp do wody",
      "Osuszanie torfowisk"
    ],
    "categories": [
      "Czynniki geograficzne i klimatyczne",
      "Zagrożenia związane z działalnością człowieka"
    ],
    "answer": {
      "Czynniki geograficzne i klimatyczne": [
        "Rodzaj podłoża",
        "Nasłonecznienie",
        "Dostęp do wody"
      ],
      "Zagrożenia związane z działalnością człowieka": [
        "Wylesianie",
        "Przeławianie łowisk",
        "Osuszanie torfowisk"
      ]
    },
    "explanation": "Na różnorodność biologiczną wpływają czynniki naturalne, a działalność człowieka może przyczyniać się do jej spadku."
  },
  {
    "id": "R07_BIO_09",
    "section": "Bioróżnorodność i jej zagrożenia",
    "type": "scenario",
    "prompt": "W tropikalnym lesie wycina się ogromny obszar drzew. Liczne organizmy tracą miejsce życia oraz powiązania pokarmowe. Jaki jest skutek tego działania?",
    "options": [
      "Zwiększenie liczby endemitów",
      "Pełna regeneracja wszystkich siedlisk od razu",
      "Wzrost liczby gatunków zależnych od lasu",
      "Zniknięcie wpływu człowieka na przyrodę",
      "Spadek różnorodności biologicznej"
    ],
    "image": "r07_wylesianie_lasu.jpg",
    "answer": 4,
    "explanation": "Wylesianie niszczy siedliska wielu gatunków i może prowadzić do spadku bioróżnorodności oraz ich zaniku."
  },
  {
    "id": "R07_BIO_10",
    "section": "Bioróżnorodność i jej zagrożenia",
    "type": "sequence",
    "prompt": "Ułóż zdarzenia od najdawniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Podpisanie konwencji w Rio w 1992 roku",
      "Wytępienie gołębia wędrownego na początku XX wieku",
      "Wytępienie tura w Europie w XVII wieku",
      "Początek prowadzenia Czerwonej księgi w 1963 roku",
      "Upolowanie ostatniej krowy morskiej w XVIII wieku"
    ],
    "answer": [
      "Wytępienie tura w Europie w XVII wieku",
      "Upolowanie ostatniej krowy morskiej w XVIII wieku",
      "Wytępienie gołębia wędrownego na początku XX wieku",
      "Początek prowadzenia Czerwonej księgi w 1963 roku",
      "Podpisanie konwencji w Rio w 1992 roku"
    ],
    "explanation": "Wymieranie gatunków i rozwój ochrony przyrody doprowadziły do powstania Czerwonej księgi i międzynarodowych porozumień, m.in. konwencji z Rio."
  },
  {
    "id": "R07_OCH_01",
    "section": "Formy ochrony przyrody w Polsce",
    "type": "single_choice",
    "prompt": "Jaka jest minimalna powierzchnia parku narodowego w Polsce?",
    "options": [
      "100 ha",
      "1000 ha",
      "10 000 ha",
      "500 ha",
      "50 ha",
      "5000 ha"
    ],
    "answer": 1,
    "explanation": "Park narodowy w Polsce musi mieć powierzchnię co najmniej 1000 hektarów."
  },
  {
    "id": "R07_OCH_02",
    "section": "Formy ochrony przyrody w Polsce",
    "type": "multi_select",
    "prompt": "Które z podanych form należą do ochrony obszarowej?",
    "options": [
      "Park narodowy",
      "Rezerwat przyrody",
      "Obszar Natura 2000",
      "Pomnik przyrody",
      "Użytek ekologiczny",
      "Park krajobrazowy"
    ],
    "answer": [
      0,
      1,
      2,
      5
    ],
    "explanation": "Do ochrony obszarowej należą m.in. parki narodowe, rezerwaty, parki krajobrazowe i obszary Natura 2000."
  },
  {
    "id": "R07_OCH_03",
    "section": "Formy ochrony przyrody w Polsce",
    "type": "true_false",
    "prompt": "Na terenie parków krajobrazowych każda działalność gospodarcza jest całkowicie zakazana.",
    "options": null,
    "answer": false,
    "explanation": "W parkach krajobrazowych działalność gospodarcza jest dopuszczalna z ograniczeniami wynikającymi z ochrony."
  },
  {
    "id": "R07_OCH_04",
    "section": "Formy ochrony przyrody w Polsce",
    "type": "fill_in",
    "prompt": "W Polsce istnieją __________ parki narodowe, a najmniejszy to __________ Park Narodowy.",
    "options": null,
    "altAnswers": [
      [
        "23",
        "23 parki"
      ],
      [
        "Ojcowski"
      ]
    ],
    "answer": [
      "23",
      "Ojcowski"
    ],
    "explanation": "W Polsce istnieją 23 parki narodowe, a najmniejszy jest Ojcowski Park Narodowy."
  },
  {
    "id": "R07_OCH_05",
    "section": "Formy ochrony przyrody w Polsce",
    "type": "riddle",
    "prompt": "Jak nazywa się objęty ochroną prawną szczególnie cenny obiekt przyrody, na przykład sędziwe drzewo?",
    "options": null,
    "altAnswers": [
      "pomnik przyrody",
      "pomnikiem przyrody"
    ],
    "image": "r07_pomnik_przyrody_dab.jpg",
    "answer": "pomnik przyrody",
    "explanation": "Pomniki przyrody chronią wyjątkowe obiekty żywe lub nieożywione, np. drzewa wyróżniające się wiekiem albo rozmiarem."
  },
  {
    "id": "R07_OCH_06",
    "section": "Formy ochrony przyrody w Polsce",
    "type": "odd_one_out",
    "prompt": "Wskaż formę, która nie jest ochroną obszarową: park narodowy, rezerwat przyrody, park krajobrazowy, użytek ekologiczny.",
    "options": null,
    "answer": "użytek ekologiczny",
    "explanation": "Użytek ekologiczny należy do ochrony indywidualnej; pozostałe pozycje to formy ochrony obszarowej."
  },
  {
    "id": "R07_OCH_07",
    "section": "Formy ochrony przyrody w Polsce",
    "type": "match",
    "prompt": "Połącz park narodowy z jego charakterystyczną cechą.",
    "options": null,
    "left": [
      "Pieniński Park Narodowy",
      "Park Narodowy Ujście Warty",
      "Ojcowski Park Narodowy",
      "Biebrzański Park Narodowy"
    ],
    "right": [
      "Najmniejszy park narodowy",
      "Największy park narodowy",
      "Najstarszy park narodowy",
      "Najmłodszy park narodowy"
    ],
    "answer": {
      "Pieniński Park Narodowy": "Najstarszy park narodowy",
      "Park Narodowy Ujście Warty": "Najmłodszy park narodowy",
      "Ojcowski Park Narodowy": "Najmniejszy park narodowy",
      "Biebrzański Park Narodowy": "Największy park narodowy"
    },
    "explanation": "Pieniński, Ujście Warty, Ojcowski i Biebrzański to parki narodowe o odmiennych cechach przyrodniczych i powierzchniach."
  },
  {
    "id": "R07_OCH_08",
    "section": "Formy ochrony przyrody w Polsce",
    "type": "sort",
    "prompt": "Przyporządkuj działania do ochrony ścisłej, czynnej lub biernej.",
    "options": null,
    "items": [
      "Dokarmianie zwierząt",
      "Segregowanie odpadów",
      "Nieingerowanie w naturalne procesy",
      "Odtwarzanie torfowisk",
      "Korzystanie z opakowań biodegradowalnych",
      "Koszenie łąk"
    ],
    "categories": [
      "Ochrona ścisła",
      "Ochrona czynna",
      "Ochrona bierna"
    ],
    "image": "r07_korytarz_ekologiczny.jpg",
    "answer": {
      "Ochrona ścisła": [
        "Nieingerowanie w naturalne procesy"
      ],
      "Ochrona czynna": [
        "Koszenie łąk",
        "Odtwarzanie torfowisk",
        "Dokarmianie zwierząt"
      ],
      "Ochrona bierna": [
        "Segregowanie odpadów",
        "Korzystanie z opakowań biodegradowalnych"
      ]
    },
    "explanation": "Ochrona ścisła zakłada nieingerowanie, czynna oznacza celowe działania w przyrodzie, a bierna ograniczanie negatywnego wpływu człowieka."
  },
  {
    "id": "R07_OCH_09",
    "section": "Formy ochrony przyrody w Polsce",
    "type": "scenario",
    "prompt": "Dwa obszary przyrodnicze są od siebie oddzielone drogami i zabudową. Chcemy ułatwić zwierzętom przemieszczanie się między nimi. Co pomaga osiągnąć ten cel?",
    "options": [
      "Osuszanie mokradeł",
      "Budowa szczelnych ogrodzeń",
      "Tworzenie korytarzy ekologicznych",
      "Rozszerzenie kopalni",
      "Wycinka lasów"
    ],
    "image": "r07_korytarz_ekologiczny.jpg",
    "answer": 2,
    "explanation": "Korytarze ekologiczne umożliwiają zwierzętom wędrówki między terenami i zapewniają im schronienie oraz pokarm."
  },
  {
    "id": "R07_OCH_10",
    "section": "Formy ochrony przyrody w Polsce",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z polskimi obszarami chronionymi w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Utworzenie Suwalskiego Parku Krajobrazowego w 1976 roku",
      "Utworzenie Parku Narodowego Ujście Warty w 2001 roku",
      "Utworzenie Pienińskiego Parku Narodowego w czerwcu 1932 roku",
      "Utworzenie Białowieskiego Parku Narodowego dwa miesiące później"
    ],
    "answer": [
      "Utworzenie Pienińskiego Parku Narodowego w czerwcu 1932 roku",
      "Utworzenie Białowieskiego Parku Narodowego dwa miesiące później",
      "Utworzenie Suwalskiego Parku Krajobrazowego w 1976 roku",
      "Utworzenie Parku Narodowego Ujście Warty w 2001 roku"
    ],
    "explanation": "Parki narodowe utworzone w 1932 roku powstały wcześniej niż Suwalski Park Krajobrazowy i Park Narodowy Ujście Warty."
  },
  {
    "id": "R07_HARD_01",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe zestawienia organizmu z jego rolą lub wymaganiami ekologicznymi.",
    "options": [
      "Pstrąg potokowy — bioindykator czystej wody",
      "Wróbel zwyczajny — stenobiont temperatury",
      "Wróbel zwyczajny — eurybiont temperatury",
      "Larwy jętek — wskaźnik silnie zatrutej wody",
      "Termity — organizmy o bardzo szerokiej tolerancji na wilgotność",
      "Termity — wrażliwe na zmiany temperatury i wilgotności"
    ],
    "answer": [
      0,
      2,
      5
    ],
    "explanation": "Pstrąg potokowy wskazuje czyste wody, wróbel jest eurybiontem temperatury, a termity wymagają stabilnej temperatury i wilgotności."
  },
  {
    "id": "R07_HARD_02",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Na terenie po powodzi odradza się ekosystem, w którym organizmy żyły już wcześniej. Które stwierdzenie prawidłowo opisuje ten proces?",
    "options": [
      "Sukcesja pierwotna szybsza od wtórnej",
      "Sukcesja wtórna szybsza od pierwotnej",
      "Sukcesja pierwotna bez zmian składu gatunków",
      "Sukcesja wtórna tylko na nowych skałach",
      "Brak sukcesji w miejscu wcześniej zasiedlonym"
    ],
    "image": "r07_sukcesja_skaly.jpg",
    "answer": 1,
    "explanation": "Po powodzi może zachodzić sukcesja wtórna, która rozwija się szybciej niż sukcesja pierwotna."
  },
  {
    "id": "R07_HARD_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Dopasuj typ oddziaływania do opisu strat i korzyści.",
    "options": null,
    "left": [
      "Konkurencja",
      "Mutualizm",
      "Komensalizm"
    ],
    "right": [
      "Jeden gatunek korzysta bez szkody dla drugiego",
      "Rywalizacja przynosi straty uczestnikom",
      "Obydwa gatunki odnoszą korzyść"
    ],
    "answer": {
      "Konkurencja": "Rywalizacja przynosi straty uczestnikom",
      "Mutualizm": "Obydwa gatunki odnoszą korzyść",
      "Komensalizm": "Jeden gatunek korzysta bez szkody dla drugiego"
    },
    "explanation": "Konkurencja jest antagonistyczna, natomiast mutualizm i komensalizm należą do nieantagonistycznych oddziaływań."
  },
  {
    "id": "R07_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Czynnik ekologiczny ma wartości graniczne __________ i __________, których przekroczenie powoduje śmierć organizmu.",
    "options": null,
    "altAnswers": [
      [
        "minimum"
      ],
      [
        "maksimum"
      ]
    ],
    "answer": [
      "minimum",
      "maksimum"
    ],
    "explanation": "Minimum i maksimum to skrajne wartości tolerowanego czynnika; poza ich zakresem organizm nie przeżywa."
  },
  {
    "id": "R07_HARD_05",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy obiegu materii od pobrania substancji przez producenta po ich powrót do środowiska.",
    "options": null,
    "items": [
      "Rozkład szczątków przez destruentów",
      "Powstawanie związków organicznych u producentów",
      "Wykorzystanie związków nieorganicznych w fotosyntezie",
      "Przekazanie materii konsumentom"
    ],
    "image": "r07_obieg_materii.jpg",
    "answer": [
      "Wykorzystanie związków nieorganicznych w fotosyntezie",
      "Powstawanie związków organicznych u producentów",
      "Przekazanie materii konsumentom",
      "Rozkład szczątków przez destruentów"
    ],
    "explanation": "Producenci budują związki organiczne z nieorganicznych, konsumenci je pobierają, a destruenci przywracają proste związki środowisku."
  },
  {
    "id": "R07_HARD_06",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Dopływ energii jest niezbędny do funkcjonowania ekosystemu, ponieważ energia nie krąży w nim tak jak materia.",
    "options": null,
    "answer": true,
    "explanation": "Energia przepływa przez kolejne poziomy troficzne i rozprasza się, podczas gdy materia uczestniczy w obiegu."
  },
  {
    "id": "R07_HARD_07",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Z czego czerpią energię bakterie żyjące bez światła słonecznego przy kominach hydrotermicznych?",
    "options": [
      "Z bezpośredniego promieniowania słonecznego",
      "Z pokarmu pochodzącego wyłącznie z roślin lądowych",
      "Z promieniowania gwiazd odbitego od dna",
      "Z rozproszonego światła Księżyca",
      "Z energii wiatru",
      "Ze związków chemicznych"
    ],
    "image": "r07_komin_hydrotermiczny.jpg",
    "answer": 5,
    "explanation": "Niektóre bakterie wykorzystują energię związków chemicznych wydobywających się z wnętrza Ziemi."
  },
  {
    "id": "R07_HARD_08",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Podziel przykłady zasobów naturalnych według ich odnawialności.",
    "options": null,
    "items": [
      "Grawitacja",
      "Fosforyty",
      "Biomasa",
      "Prądy morskie",
      "Rudy metali",
      "Gleba"
    ],
    "categories": [
      "Odnawialne",
      "Nieodnawialne",
      "Niewyczerpywalne"
    ],
    "answer": {
      "Odnawialne": [
        "Biomasa",
        "Gleba"
      ],
      "Nieodnawialne": [
        "Fosforyty",
        "Rudy metali"
      ],
      "Niewyczerpywalne": [
        "Grawitacja",
        "Prądy morskie"
      ]
    },
    "explanation": "Biomasa i gleba to zasoby odnawialne, fosforyty i rudy metali — nieodnawialne, a grawitacja i prądy morskie — niewyczerpywalne."
  },
  {
    "id": "R07_HARD_09",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się międzynarodowa umowa o ochronie bioróżnorodności podpisana 9 czerwca 1992 roku w Rio de Janeiro?",
    "options": null,
    "altAnswers": [
      "Konwencja o różnorodności biologicznej",
      "konwencja o bioróżnorodności"
    ],
    "answer": "Konwencja o różnorodności biologicznej",
    "explanation": "Konwencję o różnorodności biologicznej podpisano podczas Szczytu Ziemi w Rio de Janeiro."
  },
  {
    "id": "R07_HARD_10",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż działanie, które nie jest zagrożeniem bioróżnorodności: przełowienie łowisk, wylesianie, osuszanie torfowisk, tworzenie korytarzy ekologicznych.",
    "options": null,
    "answer": "tworzenie korytarzy ekologicznych",
    "explanation": "Korytarze ekologiczne pomagają zwierzętom przemieszczać się między siedliskami, w przeciwieństwie do pozostałych działań niszczących przyrodę."
  },
  {
    "id": "R07_HARD_11",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Przy budowie elektrowni przegrodzono rzekę i utworzono zbiornik retencyjny, co zmieniło jej bioróżnorodność. O jakim źródle energii jest mowa?",
    "options": [
      "Geotermalnym",
      "Słonecznym",
      "Wiatrowym",
      "Wodnym",
      "Z paliw kopalnych"
    ],
    "answer": 3,
    "explanation": "Elektrownie wodne wykorzystują energię płynącej wody, lecz zmiany biegu rzek i budowa zbiorników zaburzają różnorodność biologiczną."
  },
  {
    "id": "R07_HARD_12",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz obiekt lub grupę obszarów chronionych z odpowiednią liczbą.",
    "options": null,
    "left": [
      "Ojcowski Park Narodowy",
      "Biebrzański Park Narodowy",
      "Parki narodowe w Polsce",
      "Parki krajobrazowe w Polsce"
    ],
    "right": [
      "125",
      "592,23 km²",
      "23",
      "21,46 km²"
    ],
    "answer": {
      "Ojcowski Park Narodowy": "21,46 km²",
      "Biebrzański Park Narodowy": "592,23 km²",
      "Parki narodowe w Polsce": "23",
      "Parki krajobrazowe w Polsce": "125"
    },
    "explanation": "Ojcowski Park Narodowy ma 21,46 km², a Biebrzański 592,23 km². W Polsce istnieją 23 parki narodowe i 125 parków krajobrazowych."
  },
  {
    "id": "R07_HARD_13",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które działania należą do czynnej ochrony przyrody?",
    "options": [
      "Koszenie łąk",
      "Osuszanie bagien pod uprawy",
      "Odtwarzanie osuszonych torfowisk",
      "Wprowadzanie norki amerykańskiej do środowiska",
      "Zakładanie sztucznych gniazd",
      "Przeławianie łowisk"
    ],
    "image": "r07_korytarz_ekologiczny.jpg",
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Do ochrony czynnej należą koszenie łąk, odtwarzanie torfowisk i zakładanie sztucznych gniazd; osuszanie bagien i wypuszczanie obcych gatunków nie są przykładami ochrony."
  },
  {
    "id": "R07_HARD_14",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Badacz analizuje piramidę wiekową populacji. Osobników młodych jest znacznie więcej niż starych, a podstawa piramidy jest szeroka. Jak nazywa się taka populacja?",
    "options": [
      "Rozwijająca się",
      "Wymierająca",
      "Pozbawiona młodych",
      "Zanikająca wskutek emigracji",
      "Składająca się tylko z osobników starych"
    ],
    "image": "r07_piramida_wiekowa.jpg",
    "answer": 0,
    "explanation": "Na schemacie rozwoju populacji szeroka podstawa odpowiada populacji rozwijającej się."
  },
  {
    "id": "R07_HARD_15",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Od roku __________ IUCN prowadzi Czerwoną księgę gatunków zagrożonych, a w roku 2020 znajdowało się w niej ponad __________ gatunków zagrożonych.",
    "options": null,
    "altAnswers": [
      [
        "1963"
      ],
      [
        "35 700",
        "35700",
        "35,700"
      ]
    ],
    "answer": [
      "1963",
      "35 700"
    ],
    "explanation": "IUCN prowadzi Czerwoną księgę od 1963 roku; w 2020 roku odnotowano ponad 35 700 zagrożonych gatunków."
  }
];

const KID_PROMPTS = {
  "R07_EKO_01": "Jak nazywamy nieożywioną część ekosystemu?",
  "R07_EKO_05": "Jak nazywamy liczbę osobników na danym kawałku terenu?",
  "R07_EKO_09": "Na nagiej skale po lawie zaczyna się życie. Jaka to sukcesja?",
  "R07_ODD_01": "Jak nazywają się organizmy dobrze znoszące różne warunki?",
  "R07_ODD_07": "Połącz typ porostu ze stopniem zanieczyszczenia powietrza.",
  "R07_TRO_05": "Jak nazywamy wiele połączonych łańcuchów pokarmowych?",
  "R07_TRO_09": "Obca norka powoduje spadek liczby ptaków. Co dzieje się z równowagą?",
  "R07_ZAS_04": "Wpisz nazwę przerabiania odpadów na nowe produkty oraz słowo opisujące rozwój dbający o przyszłe pokolenia.",
  "R07_ZAS_09": "Szkoła ogrzewa się ciepłem z gruntu. Jakie to źródło energii?",
  "R07_BIO_01": "Jaka różnorodność oznacza różnice między osobnikami jednego gatunku?",
  "R07_BIO_09": "Po wycięciu lasu zwierzęta tracą domy. Co dzieje się z różnorodnością?",
  "R07_OCH_09": "Co pomaga zwierzętom przechodzić między dwoma obszarami przyrody?",
  "R07_HARD_07": "Skąd bakterie przy kominach na dnie oceanu biorą energię bez światła?",
  "R07_HARD_14": "Gdy jest dużo młodych osobników i mało starych, jaka to populacja?"
};

const chapter = {
  id: "r07",
  number: 7,
  title: "Ekologia",
  icon: "🌍",
  sectionOrder: [
  "Ekosystem i populacje",
  "Oddziaływania i tolerancja ekologiczna",
  "Sieci troficzne i przepływ energii",
  "Zasoby przyrody i zrównoważony rozwój",
  "Bioróżnorodność i jej zagrożenia",
  "Formy ochrony przyrody w Polsce"
],
  sectionIcons: {
  "Ekosystem i populacje": "🌿",
  "Oddziaływania i tolerancja ekologiczna": "🔍",
  "Sieci troficzne i przepływ energii": "🔗",
  "Zasoby przyrody i zrównoważony rozwój": "♻️",
  "Bioróżnorodność i jej zagrożenia": "🦋",
  "Formy ochrony przyrody w Polsce": "🏞️"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
