// Skróty sekcji (do identyfikatorów ćwiczeń):
//   EKO  = Ekosystem i tolerancja ekologiczna
//   POP  = Czynniki abiotyczne i populacje
//   ZAL  = Zależności między organizmami
//   OBI  = Łańcuchy pokarmowe i obieg materii
//   ZAS  = Zasoby i różnorodność biologiczna
//   OCH  = Ochrona przyrody
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R08_EKO_01",
    "section": "Ekosystem i tolerancja ekologiczna",
    "type": "single_choice",
    "prompt": "Z jakich dwóch części składa się ekosystem?",
    "options": [
      "Z biocenozy i biotopu",
      "Z producentów i drapieżników",
      "Wyłącznie z czynników nieożywionych",
      "Wyłącznie z organizmów żywych",
      "Z dwóch gatunków i gleby",
      "Z jednego gatunku i jego populacji"
    ],
    "answer": 0,
    "explanation": "Biocenoza obejmuje żywe organizmy i ich zależności, a biotop – nieożywione warunki środowiska.",
    "image": "r08_pietra_lasu.jpg"
  },
  {
    "id": "R08_EKO_02",
    "section": "Ekosystem i tolerancja ekologiczna",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady czynników abiotycznych.",
    "options": [
      "Zwierzęta",
      "Temperatura",
      "Woda",
      "Światło",
      "Grzyby",
      "Zasolenie"
    ],
    "answer": [
      1,
      2,
      3,
      5
    ],
    "explanation": "Zasolenie, temperatura, światło i woda należą do nieożywionych czynników środowiska. Grzyby i zwierzęta są składnikami biocenozy."
  },
  {
    "id": "R08_EKO_03",
    "section": "Ekosystem i tolerancja ekologiczna",
    "type": "true_false",
    "prompt": "W lesie liściastym strefy umiarkowanej można wyróżnić ściółkę, runo, podszyt i korony drzew.",
    "options": null,
    "answer": true,
    "explanation": "Ściółka, runo, podszyt i korony drzew tworzą pionową strukturę lasu liściastego.",
    "image": "r08_pietra_lasu.jpg"
  },
  {
    "id": "R08_EKO_04",
    "section": "Ekosystem i tolerancja ekologiczna",
    "type": "fill_in",
    "prompt": "Ożywiona część ekosystemu to __________, a nieożywiona to __________.",
    "options": null,
    "answer": [
      "biocenoza",
      "biotop"
    ],
    "explanation": "Biocenoza to populacje organizmów, natomiast biotop obejmuje m.in. wodę, temperaturę i światło.",
    "altAnswers": [
      [
        "biocenoza",
        "biocenozą"
      ],
      [
        "biotop",
        "biotopem"
      ]
    ]
  },
  {
    "id": "R08_EKO_05",
    "section": "Ekosystem i tolerancja ekologiczna",
    "type": "riddle",
    "prompt": "Jak nazywa się ogół warunków i zasobów niezbędnych organizmowi do prawidłowego wzrostu i rozwoju?",
    "options": null,
    "answer": "nisza ekologiczna",
    "explanation": "Nisza ekologiczna opisuje wymagania organizmu związane z warunkami i zasobami środowiska.",
    "altAnswers": [
      "nisza ekologiczna",
      "niszą ekologiczną"
    ]
  },
  {
    "id": "R08_EKO_06",
    "section": "Ekosystem i tolerancja ekologiczna",
    "type": "odd_one_out",
    "prompt": "Wskaż pojęcie, które nie jest wskaźnikiem zakresu tolerancji ekologicznej: maksimum, minimum, optimum, rozrodczość.",
    "options": null,
    "answer": "rozrodczość",
    "explanation": "Minimum, optimum i maksimum opisują zakres tolerancji na czynnik środowiskowy. Rozrodczość jest cechą populacji."
  },
  {
    "id": "R08_EKO_07",
    "section": "Ekosystem i tolerancja ekologiczna",
    "type": "scenario",
    "prompt": "Roślina ma odpowiednią ilość wody, składników pokarmowych i właściwe podłoże, ale dociera do niej za mało światła. Co ogranicza jej rozwój?",
    "options": [
      "Zbyt duża liczba drapieżników",
      "Niedobór światła",
      "Nadmiar wody",
      "Brak soli mineralnych",
      "Zbyt mała powierzchnia populacji",
      "Zbyt mała liczba roślinożerców"
    ],
    "answer": 1,
    "explanation": "Czynnik, którego brakuje i który ogranicza rozwój pomimo dobrych pozostałych warunków, jest czynnikiem ograniczającym."
  },
  {
    "id": "R08_EKO_08",
    "section": "Ekosystem i tolerancja ekologiczna",
    "type": "match",
    "prompt": "Połącz strefę jeziora z jej charakterystyką.",
    "options": null,
    "answer": {
      "Strefa przybrzeżna": "Płytka i dobrze oświetlona woda",
      "Otwarta toń wodna": "Oświetlenie zależne od głębokości i przejrzystości",
      "Strefa przydenna": "Niewiele światła i niewielkie wahania temperatury"
    },
    "explanation": "Podział jeziora jest związany przede wszystkim z głębokością i dostępem światła.",
    "image": "r08_strefy_jeziora.jpg",
    "left": [
      "Strefa przybrzeżna",
      "Otwarta toń wodna",
      "Strefa przydenna"
    ],
    "right": [
      "Niewiele światła i niewielkie wahania temperatury",
      "Oświetlenie zależne od głębokości i przejrzystości",
      "Płytka i dobrze oświetlona woda"
    ]
  },
  {
    "id": "R08_EKO_09",
    "section": "Ekosystem i tolerancja ekologiczna",
    "type": "sort",
    "prompt": "Przyporządkuj składniki ekosystemu do biocenozy lub biotopu.",
    "options": null,
    "answer": {
      "Biocenoza": [
        "bakterie",
        "rośliny",
        "zwierzęta"
      ],
      "Biotop": [
        "temperatura",
        "zasolenie",
        "światło"
      ]
    },
    "explanation": "Biocenozę tworzą organizmy, a biotop – elementy przyrody nieożywionej.",
    "items": [
      "światło",
      "zasolenie",
      "temperatura",
      "zwierzęta",
      "rośliny",
      "bakterie"
    ],
    "categories": [
      "Biocenoza",
      "Biotop"
    ]
  },
  {
    "id": "R08_EKO_10",
    "section": "Ekosystem i tolerancja ekologiczna",
    "type": "sequence",
    "prompt": "Ułóż piętra lasu liściastego od najniższego do najwyższego.",
    "options": null,
    "answer": [
      "ściółka",
      "runo",
      "podszyt",
      "korony drzew"
    ],
    "explanation": "Kolejne piętra lasu liściastego od najniższego to ściółka, runo, podszyt i korony drzew.",
    "image": "r08_pietra_lasu.jpg",
    "items": [
      "podszyt",
      "korony drzew",
      "ściółka",
      "runo"
    ]
  },
  {
    "id": "R08_POP_01",
    "section": "Czynniki abiotyczne i populacje",
    "type": "single_choice",
    "prompt": "Co opisuje zagęszczenie populacji?",
    "options": [
      "Liczbę nowo urodzonych osobników w ciągu roku",
      "Liczbę osobników na jednostkę powierzchni lub objętości",
      "Stosunek osobników dorosłych do młodych",
      "Liczbę wszystkich gatunków w ekosystemie",
      "Liczbę drapieżników w całym kraju",
      "Proporcję producentów do konsumentów"
    ],
    "answer": 1,
    "explanation": "Zagęszczenie wyraża liczbę osobników populacji w odniesieniu do powierzchni lub objętości środowiska.",
    "image": "r08_rozmieszczenie_populacji.jpg"
  },
  {
    "id": "R08_POP_02",
    "section": "Czynniki abiotyczne i populacje",
    "type": "multi_select",
    "prompt": "Które procesy mogą bezpośrednio zmieniać liczebność populacji?",
    "options": [
      "Śmiertelność",
      "Imigracja",
      "Emigracja",
      "Struktura piętrowa lasu",
      "Nazwa gatunku",
      "Rozrodczość"
    ],
    "answer": [
      0,
      1,
      2,
      5
    ],
    "explanation": "Liczebność zmienia się w następstwie narodzin, śmierci i migracji osobników."
  },
  {
    "id": "R08_POP_03",
    "section": "Czynniki abiotyczne i populacje",
    "type": "true_false",
    "prompt": "Przy zbliżaniu się liczebności populacji do pojemności środowiska tempo jej wzrostu maleje.",
    "options": null,
    "answer": true,
    "explanation": "Ograniczone zasoby i opór środowiska powodują spadek tempa wzrostu w pobliżu pojemności środowiska."
  },
  {
    "id": "R08_POP_04",
    "section": "Czynniki abiotyczne i populacje",
    "type": "fill_in",
    "prompt": "Napływ osobników do populacji nazywa się __________, a opuszczanie siedliska – __________.",
    "options": null,
    "answer": [
      "imigracją",
      "emigracją"
    ],
    "explanation": "Imigracja zwiększa liczbę osobników obecnych na terenie, emigracja oznacza ich odpływ.",
    "altAnswers": [
      [
        "imigracją",
        "imigracja"
      ],
      [
        "emigracją",
        "emigracja"
      ]
    ]
  },
  {
    "id": "R08_POP_05",
    "section": "Czynniki abiotyczne i populacje",
    "type": "riddle",
    "prompt": "Jak nazywa się liczba osobników, które mogą długo żyć na danym obszarze przy ograniczonych zasobach?",
    "options": null,
    "answer": "pojemność środowiska",
    "explanation": "Pojemność środowiska określa długotrwale możliwą liczebność populacji w określonych warunkach.",
    "altAnswers": [
      "pojemność środowiska",
      "pojemnością środowiska"
    ]
  },
  {
    "id": "R08_POP_06",
    "section": "Czynniki abiotyczne i populacje",
    "type": "odd_one_out",
    "prompt": "Wskaż termin odnoszący się do rozmieszczenia przestrzennego, a nie do struktury wieku: ustabilizowana, wymierająca, skupiskowe, rozwijająca się.",
    "options": null,
    "answer": "skupiskowe",
    "explanation": "Pierwsze trzy określenia dotyczą typu populacji w ujęciu wiekowym; skupiskowe to sposób rozmieszczenia osobników.",
    "image": "r08_piramidy_wieku.jpg"
  },
  {
    "id": "R08_POP_07",
    "section": "Czynniki abiotyczne i populacje",
    "type": "scenario",
    "prompt": "Badacz obserwuje gatunek, który wydaje na świat niewiele młodych, ale rodzice opiekują się potomstwem i większość młodych dożywa dorosłości. Którą strategię rozrodczą rozpoznaje?",
    "options": [
      "Rozmieszczenie równomierne",
      "Rozrodczość maksymalną",
      "Rozmieszczenie losowe",
      "Typ r",
      "Typ K",
      "Imigrację"
    ],
    "answer": 4,
    "explanation": "Strategia K charakteryzuje się mniejszą liczbą potomstwa i opieką rodzicielską."
  },
  {
    "id": "R08_POP_08",
    "section": "Czynniki abiotyczne i populacje",
    "type": "match",
    "prompt": "Połącz rodzaje rozmieszczenia osobników z odpowiadającymi im przykładami.",
    "options": null,
    "answer": {
      "Równomierne": "Drzewa w sadzie",
      "Skupiskowe": "Stado antylop",
      "Losowe": "Rośliny wiatrosiewne"
    },
    "explanation": "Rozmieszczenie równomierne wiąże się z podobnymi odstępami, skupiskowe z grupami, a losowe z przypadkowym układem.",
    "image": "r08_rozmieszczenie_populacji.jpg",
    "left": [
      "Równomierne",
      "Skupiskowe",
      "Losowe"
    ],
    "right": [
      "Rośliny wiatrosiewne",
      "Stado antylop",
      "Drzewa w sadzie"
    ]
  },
  {
    "id": "R08_POP_09",
    "section": "Czynniki abiotyczne i populacje",
    "type": "sort",
    "prompt": "Podziel procesy według ich bezpośredniego wpływu na liczebność populacji.",
    "options": null,
    "answer": {
      "Zwiększają liczebność": [
        "narodziny",
        "imigracja"
      ],
      "Zmniejszają liczebność": [
        "śmierć osobników",
        "emigracja"
      ]
    },
    "explanation": "Narodziny i napływ zwiększają liczebność, śmierć i odpływ ją zmniejszają.",
    "items": [
      "emigracja",
      "śmierć osobników",
      "imigracja",
      "narodziny"
    ],
    "categories": [
      "Zwiększają liczebność",
      "Zmniejszają liczebność"
    ]
  },
  {
    "id": "R08_POP_10",
    "section": "Czynniki abiotyczne i populacje",
    "type": "sequence",
    "prompt": "Ułóż typowy ciąg zmian przy wzroście populacji w środowisku o ograniczonych zasobach.",
    "options": null,
    "answer": [
      "Populacja korzysta z dostępnych zasobów",
      "Liczebność populacji wzrasta",
      "Liczebność zbliża się do pojemności środowiska",
      "Tempo wzrostu populacji maleje"
    ],
    "explanation": "Wraz ze zbliżaniem się liczebności do pojemności środowiska opór środowiska hamuje dalszy wzrost.",
    "items": [
      "Liczebność zbliża się do pojemności środowiska",
      "Tempo wzrostu populacji maleje",
      "Populacja korzysta z dostępnych zasobów",
      "Liczebność populacji wzrasta"
    ]
  },
  {
    "id": "R08_ZAL_01",
    "section": "Zależności między organizmami",
    "type": "single_choice",
    "prompt": "Jak określa się współpracę, w której oba gatunki odnoszą korzyści i nie potrafią żyć bez siebie?",
    "options": [
      "Konkurencja",
      "Komensalizm",
      "Roślinożerność",
      "Mutualizm obligatoryjny",
      "Pasożytnictwo",
      "Drapieżnictwo"
    ],
    "answer": 3,
    "explanation": "Mutualizm obligatoryjny, nazywany też symbiozą, jest ścisłą i konieczną współpracą korzystną dla obu partnerów.",
    "image": "r08_porosty_na_korze.jpg"
  },
  {
    "id": "R08_ZAL_02",
    "section": "Zależności między organizmami",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady zależności nieantagonistycznych.",
    "options": [
      "Pasożyt czerpiący substancje z gospodarza",
      "Grzyb i glon tworzące porost",
      "Roślina motylkowa i bakterie brodawkowe",
      "Krab pustelnik i ukwiał",
      "Hiena zjadająca resztki po lwie",
      "Wilk chwytający ofiarę"
    ],
    "answer": [
      1,
      2,
      3,
      4
    ],
    "explanation": "Symbioza, protokooperacja i komensalizm przynoszą korzyści co najmniej jednej stronie bez szkody dla drugiej.",
    "image": "r08_krab_i_ukwial.jpg"
  },
  {
    "id": "R08_ZAL_03",
    "section": "Zależności między organizmami",
    "type": "true_false",
    "prompt": "W komensalizmie jedna populacja zyskuje, a druga nie ponosi szkody ani nie odnosi korzyści.",
    "options": null,
    "answer": true,
    "explanation": "Taki typ relacji ilustruje hiena wykorzystująca resztki pokarmu lwa."
  },
  {
    "id": "R08_ZAL_04",
    "section": "Zależności między organizmami",
    "type": "fill_in",
    "prompt": "Mutualizm fakultatywny jest też nazywany __________, a mutualizm obligatoryjny – __________.",
    "options": null,
    "answer": [
      "protokooperacją",
      "symbiozą"
    ],
    "explanation": "Protokooperacja nie jest konieczna do przeżycia partnerów; w symbiozie partnerzy są od siebie zależni.",
    "altAnswers": [
      [
        "protokooperacją",
        "protokooperacja"
      ],
      [
        "symbiozą",
        "symbioza"
      ]
    ]
  },
  {
    "id": "R08_ZAL_05",
    "section": "Zależności między organizmami",
    "type": "riddle",
    "prompt": "Jak nazywa się wydzielanie przez rośliny, grzyby lub bakterie substancji hamujących rozwój konkurentów?",
    "options": null,
    "answer": "allelopatia",
    "explanation": "Allelopatia jest formą oddziaływania między organizmami, która może ograniczać wzrost konkurentów.",
    "altAnswers": [
      "allelopatia",
      "allelopatią"
    ]
  },
  {
    "id": "R08_ZAL_06",
    "section": "Zależności między organizmami",
    "type": "odd_one_out",
    "prompt": "Która zależność nie należy do antagonistycznych: roślinożerność, mutualizm, drapieżnictwo, konkurencja.",
    "options": null,
    "answer": "mutualizm",
    "explanation": "Konkurencja, roślinożerność i drapieżnictwo przynoszą niekorzystny skutek co najmniej jednej stronie; mutualizm jest obustronnie korzystny."
  },
  {
    "id": "R08_ZAL_07",
    "section": "Zależności między organizmami",
    "type": "scenario",
    "prompt": "Jemioła wytwarza własne związki organiczne, ale pobiera z drzewa wodę i sole mineralne. Jak zaklasyfikujesz jemiołę?",
    "options": [
      "Destruent",
      "Organizm komensalny",
      "Drapieżnik",
      "Producent całkowicie niezależny od żywiciela",
      "Półpasożyt",
      "Konsument II rzędu"
    ],
    "answer": 4,
    "explanation": "Jemioła jest półpasożytem: sama przeprowadza fotosyntezę, ale pobiera od żywiciela wodę i sole mineralne.",
    "image": "r08_jemiola_na_drzewie.jpg"
  },
  {
    "id": "R08_ZAL_08",
    "section": "Zależności między organizmami",
    "type": "match",
    "prompt": "Dopasuj nazwę relacji do jej charakterystyki.",
    "options": null,
    "answer": {
      "Symbioza": "Obopólna korzyść i konieczność współżycia",
      "Protokooperacja": "Obopólna korzyść bez konieczności współżycia",
      "Komensalizm": "Korzyść jednej strony i brak wpływu na drugą",
      "Pasożytnictwo": "Korzyść pasożyta kosztem gospodarza"
    },
    "explanation": "Relacje różnią się tym, kto odnosi korzyść, kto traci i czy partnerzy mogą żyć oddzielnie.",
    "image": "r08_krab_i_ukwial.jpg",
    "left": [
      "Symbioza",
      "Protokooperacja",
      "Komensalizm",
      "Pasożytnictwo"
    ],
    "right": [
      "Korzyść pasożyta kosztem gospodarza",
      "Korzyść jednej strony i brak wpływu na drugą",
      "Obopólna korzyść bez konieczności współżycia",
      "Obopólna korzyść i konieczność współżycia"
    ]
  },
  {
    "id": "R08_ZAL_09",
    "section": "Zależności między organizmami",
    "type": "sort",
    "prompt": "Przyporządkuj zależności do ich charakteru.",
    "options": null,
    "answer": {
      "Nieantagonistyczne": [
        "symbioza",
        "protokooperacja",
        "komensalizm"
      ],
      "Antagonistyczne": [
        "konkurencja",
        "drapieżnictwo",
        "pasożytnictwo",
        "roślinożerność"
      ]
    },
    "explanation": "Nieantagonistyczne przynoszą korzyści bez strat drugiej strony; antagonistyczne szkodzą co najmniej jednemu z partnerów.",
    "items": [
      "roślinożerność",
      "pasożytnictwo",
      "drapieżnictwo",
      "konkurencja",
      "komensalizm",
      "protokooperacja",
      "symbioza"
    ],
    "categories": [
      "Nieantagonistyczne",
      "Antagonistyczne"
    ]
  },
  {
    "id": "R08_ZAL_10",
    "section": "Zależności między organizmami",
    "type": "sequence",
    "prompt": "Ułóż logiczny przebieg przykładowego cyklu liczebności drapieżników i ofiar.",
    "options": null,
    "answer": [
      "Zwiększa się liczba ofiar",
      "Większa dostępność ofiar sprzyja wzrostowi liczby drapieżników",
      "Rosnąca presja drapieżników zmniejsza liczbę ofiar",
      "Przy mniejszej liczbie ofiar spada liczba drapieżników"
    ],
    "explanation": "Liczebność populacji drapieżników i ich ofiar często zmienia się cyklicznie i w sposób powiązany.",
    "items": [
      "Rosnąca presja drapieżników zmniejsza liczbę ofiar",
      "Przy mniejszej liczbie ofiar spada liczba drapieżników",
      "Zwiększa się liczba ofiar",
      "Większa dostępność ofiar sprzyja wzrostowi liczby drapieżników"
    ]
  },
  {
    "id": "R08_OBI_01",
    "section": "Łańcuchy pokarmowe i obieg materii",
    "type": "single_choice",
    "prompt": "Która grupa zajmuje najniższy poziom troficzny?",
    "options": [
      "Producenci",
      "Pasożyty",
      "Konsumenci II rzędu",
      "Konsumenci I rzędu",
      "Wszystkożercy",
      "Drapieżniki szczytowe"
    ],
    "answer": 0,
    "explanation": "Producenci są organizmami samożywnymi stanowiącymi pierwsze ogniwo łańcucha pokarmowego.",
    "image": "r08_siec_pokarmowa.jpg"
  },
  {
    "id": "R08_OBI_02",
    "section": "Łańcuchy pokarmowe i obieg materii",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe stwierdzenia dotyczące destruentów.",
    "options": [
      "Należą do nich grzyby saprofityczne",
      "Uwalniają proste substancje nieorganiczne",
      "Prowadzą wyłącznie fotosyntezę",
      "Zawsze są konsumentami I rzędu",
      "Rozkładają martwą materię organiczną",
      "Należą do nich liczne bakterie saprofityczne"
    ],
    "answer": [
      0,
      1,
      4,
      5
    ],
    "explanation": "Destruenci, zwani też reducentami, rozkładają związki organiczne i umożliwiają powrót materii nieorganicznej do obiegu."
  },
  {
    "id": "R08_OBI_03",
    "section": "Łańcuchy pokarmowe i obieg materii",
    "type": "true_false",
    "prompt": "Energia i materia krążą w ekosystemie w jednakowo zamkniętych obiegach.",
    "options": null,
    "answer": false,
    "explanation": "Materia krąży w obiegu zamkniętym, lecz energia przepływa przez ekosystem i jej znaczna część ulega rozproszeniu jako ciepło."
  },
  {
    "id": "R08_OBI_04",
    "section": "Łańcuchy pokarmowe i obieg materii",
    "type": "fill_in",
    "prompt": "W łańcuchu pokarmowym na początku występują __________, po nich __________ I rzędu.",
    "options": null,
    "answer": [
      "producenci",
      "konsumenci"
    ],
    "explanation": "Producenci wytwarzają związki organiczne, a konsumenci I rzędu odżywiają się producentami.",
    "altAnswers": [
      [
        "producenci",
        "producentów"
      ],
      [
        "konsumenci",
        "konsumentów"
      ]
    ]
  },
  {
    "id": "R08_OBI_05",
    "section": "Łańcuchy pokarmowe i obieg materii",
    "type": "riddle",
    "prompt": "Jak nazywa się układ powiązanych i przecinających się łańcuchów pokarmowych?",
    "options": null,
    "answer": "sieć pokarmowa",
    "explanation": "Sieć pokarmowa (troficzna) przedstawia wiele połączonych zależności między zjadanymi i zjadającymi.",
    "image": "r08_siec_pokarmowa.jpg",
    "altAnswers": [
      "sieć pokarmowa",
      "sieć troficzna",
      "siec pokarmowa",
      "siec troficzna"
    ]
  },
  {
    "id": "R08_OBI_06",
    "section": "Łańcuchy pokarmowe i obieg materii",
    "type": "odd_one_out",
    "prompt": "Wskaż organizm, który nie jest producentem: rośliny, glony, zwierzęta roślinożerne, bakterie fotosyntetyzujące.",
    "options": null,
    "answer": "zwierzęta roślinożerne",
    "explanation": "Rośliny, glony i bakterie fotosyntetyzujące mogą wytwarzać materię organiczną, a roślinożercy są konsumentami."
  },
  {
    "id": "R08_OBI_07",
    "section": "Łańcuchy pokarmowe i obieg materii",
    "type": "scenario",
    "prompt": "Rolnik corocznie zbiera z pola obfity plon i wywozi go poza gospodarstwo. Aby uzupełnić wyniesione z pola składniki mineralne, stosuje nawozy. Jakie zjawisko opisuje ta sytuacja?",
    "options": [
      "Całkowite zatrzymanie dopływu energii słonecznej",
      "Zanik zależności pokarmowych w lesie",
      "Zmianę strategii rozrodczej roślin na typ K",
      "Przekształcenie rolnika w producenta",
      "Zaburzenie obiegu materii w ekosystemie sztucznym",
      "Powstanie nowej strefy jeziora"
    ],
    "answer": 4,
    "explanation": "W sztucznych ekosystemach zbiór plonów usuwa część materii, dlatego człowiek uzupełnia jej niedobory nawożeniem."
  },
  {
    "id": "R08_OBI_08",
    "section": "Łańcuchy pokarmowe i obieg materii",
    "type": "match",
    "prompt": "Połącz rolę troficzną z opisem sposobu odżywiania.",
    "options": null,
    "answer": {
      "Producent": "Wytwarza związki organiczne z prostych substancji",
      "Konsument I rzędu": "Zjada organizmy samożywne",
      "Konsument II rzędu": "Zjada roślinożerców",
      "Destruent": "Rozkłada martwą materię organiczną"
    },
    "explanation": "Pierwsze ogniwo stanowią producenci, następnie konsumenci kolejnych rzędów; destruenci rozkładają szczątki.",
    "image": "r08_siec_pokarmowa.jpg",
    "left": [
      "Producent",
      "Konsument I rzędu",
      "Konsument II rzędu",
      "Destruent"
    ],
    "right": [
      "Rozkłada martwą materię organiczną",
      "Zjada roślinożerców",
      "Zjada organizmy samożywne",
      "Wytwarza związki organiczne z prostych substancji"
    ]
  },
  {
    "id": "R08_OBI_09",
    "section": "Łańcuchy pokarmowe i obieg materii",
    "type": "sort",
    "prompt": "Przyporządkuj procesy do obiegu azotu albo węgla.",
    "options": null,
    "answer": {
      "Obieg azotu": [
        "wiązanie azotu atmosferycznego przez bakterie",
        "pobieranie z gleby jonów amonowych przez rośliny",
        "uwalnianie azotu do atmosfery"
      ],
      "Obieg węgla": [
        "pobieranie dwutlenku węgla podczas fotosyntezy",
        "uwalnianie dwutlenku węgla przy oddychaniu",
        "uwalnianie dwutlenku węgla przy spalaniu paliw kopalnych"
      ]
    },
    "explanation": "W obiegu azotu istotną rolę mają bakterie wiążące azot, zaś w obiegu węgla fotosynteza, oddychanie i spalanie.",
    "image": "r08_obieg_materii.jpg",
    "items": [
      "uwalnianie dwutlenku węgla przy spalaniu paliw kopalnych",
      "uwalnianie dwutlenku węgla przy oddychaniu",
      "pobieranie dwutlenku węgla podczas fotosyntezy",
      "uwalnianie azotu do atmosfery",
      "pobieranie z gleby jonów amonowych przez rośliny",
      "wiązanie azotu atmosferycznego przez bakterie"
    ],
    "categories": [
      "Obieg azotu",
      "Obieg węgla"
    ]
  },
  {
    "id": "R08_OBI_10",
    "section": "Łańcuchy pokarmowe i obieg materii",
    "type": "sequence",
    "prompt": "Ułóż etapy obiegu materii w typowym ekosystemie.",
    "options": null,
    "answer": [
      "Producenci pobierają substancje nieorganiczne",
      "Producenci wytwarzają materię organiczną",
      "Konsumenci zjadają producentów",
      "Destruenci rozkładają martwe szczątki do substancji nieorganicznych"
    ],
    "explanation": "Materia powraca do producentów dzięki rozkładowi szczątków przez reducentów.",
    "image": "r08_obieg_materii.jpg",
    "items": [
      "Konsumenci zjadają producentów",
      "Destruenci rozkładają martwe szczątki do substancji nieorganicznych",
      "Producenci pobierają substancje nieorganiczne",
      "Producenci wytwarzają materię organiczną"
    ]
  },
  {
    "id": "R08_ZAS_01",
    "section": "Zasoby i różnorodność biologiczna",
    "type": "single_choice",
    "prompt": "Który z podanych zasobów przyrody jest nieodnawialny?",
    "options": [
      "Woda",
      "Gleba",
      "Zwierzęta",
      "Drewno",
      "Ropa naftowa",
      "Rośliny"
    ],
    "answer": 4,
    "explanation": "Ropa naftowa jest zasobem nieodnawialnym, ponieważ powstaje bardzo wolno. Drewno, gleba i woda mogą być zasobami odnawialnymi przy odpowiednim gospodarowaniu.",
    "image": "r08_zasoby_przyrody.jpg"
  },
  {
    "id": "R08_ZAS_02",
    "section": "Zasoby i różnorodność biologiczna",
    "type": "multi_select",
    "prompt": "Które działania człowieka mogą zmniejszać różnorodność biologiczną?",
    "options": [
      "Ochrona zagrożonych gatunków",
      "Powstawanie monokultur",
      "Odtwarzanie siedlisk",
      "Tworzenie barier na szlakach migracyjnych",
      "Niszczenie naturalnych siedlisk",
      "Wprowadzanie gatunków obcych"
    ],
    "answer": [
      1,
      3,
      4,
      5
    ],
    "explanation": "Niszczenie siedlisk, monokultury, inwazje i bariery migracyjne zaburzają bioróżnorodność."
  },
  {
    "id": "R08_ZAS_03",
    "section": "Zasoby i różnorodność biologiczna",
    "type": "true_false",
    "prompt": "Różnorodność genetyczna w małych populacjach jest zwykle mniejsza niż w dużych.",
    "options": null,
    "answer": true,
    "explanation": "Opis różnorodności genetycznej wiąże ją z liczebnością populacji i zaznacza jej mniejszą wartość w małych populacjach."
  },
  {
    "id": "R08_ZAS_04",
    "section": "Zasoby i różnorodność biologiczna",
    "type": "fill_in",
    "prompt": "Trzy poziomy różnorodności biologicznej to różnorodność ekosystemowa, __________ i __________.",
    "options": null,
    "answer": [
      "gatunkowa",
      "genetyczna"
    ],
    "explanation": "Wyróżnia się różnorodność ekosystemową, gatunkową i genetyczną.",
    "altAnswers": [
      [
        "gatunkowa",
        "gatunkową"
      ],
      [
        "genetyczna",
        "genetyczną"
      ]
    ]
  },
  {
    "id": "R08_ZAS_05",
    "section": "Zasoby i różnorodność biologiczna",
    "type": "riddle",
    "prompt": "Jak nazywa się gatunek przeniesiony poza naturalny zasięg, który w nowym miejscu może dominować i wypierać gatunki rodzime?",
    "options": null,
    "answer": "gatunek inwazyjny",
    "explanation": "Norka amerykańska i barszcz Sosnowskiego są przykładami gatunków inwazyjnych w Polsce.",
    "image": "r08_gatunek_inwazyjny.jpg",
    "altAnswers": [
      "gatunek inwazyjny",
      "gatunkiem inwazyjnym"
    ]
  },
  {
    "id": "R08_ZAS_06",
    "section": "Zasoby i różnorodność biologiczna",
    "type": "odd_one_out",
    "prompt": "Wskaż zasób odnawialny wśród nieodnawialnych: węgiel kamienny, gaz ziemny, drewno, ropa naftowa.",
    "options": null,
    "answer": "drewno",
    "explanation": "Paliwa kopalne są zasobami nieodnawialnymi, a drewno pozostaje zasobem odnawialnym przy właściwej gospodarce.",
    "image": "r08_zasoby_przyrody.jpg"
  },
  {
    "id": "R08_ZAS_07",
    "section": "Zasoby i różnorodność biologiczna",
    "type": "scenario",
    "prompt": "Na dużym obszarze rolniczym od lat uprawia się tylko jeden gatunek roślin, co ogranicza zróżnicowanie organizmów. Jak nazywa się taka uprawa?",
    "options": [
      "Monokultura",
      "Sukcesja jeziora",
      "Pojemność środowiska",
      "Rezerwat biosfery",
      "Sieć troficzna",
      "Biocenoza pierwotna"
    ],
    "answer": 0,
    "explanation": "Monokultura to uprawa jednego gatunku na dużym obszarze; może ograniczać różnorodność biologiczną."
  },
  {
    "id": "R08_ZAS_08",
    "section": "Zasoby i różnorodność biologiczna",
    "type": "match",
    "prompt": "Połącz poziom różnorodności lub zasadę gospodarowania z odpowiednim opisem.",
    "options": null,
    "answer": {
      "Różnorodność ekosystemowa": "Rozmaitość ekosystemów na Ziemi",
      "Różnorodność gatunkowa": "Rozmaitość gatunków w ekosystemie",
      "Różnorodność genetyczna": "Różnice w materiale genetycznym osobników gatunku",
      "Zrównoważony rozwój": "Zaspokajanie potrzeb obecnych bez ograniczania szans przyszłych pokoleń"
    },
    "explanation": "Różnorodność można opisywać na trzech poziomach, a zrównoważony rozwój określa sposób korzystania z zasobów.",
    "left": [
      "Różnorodność ekosystemowa",
      "Różnorodność gatunkowa",
      "Różnorodność genetyczna",
      "Zrównoważony rozwój"
    ],
    "right": [
      "Zaspokajanie potrzeb obecnych bez ograniczania szans przyszłych pokoleń",
      "Różnice w materiale genetycznym osobników gatunku",
      "Rozmaitość gatunków w ekosystemie",
      "Rozmaitość ekosystemów na Ziemi"
    ]
  },
  {
    "id": "R08_ZAS_09",
    "section": "Zasoby i różnorodność biologiczna",
    "type": "sort",
    "prompt": "Podziel zasoby na niewyczerpalne, odnawialne i nieodnawialne.",
    "options": null,
    "answer": {
      "Niewyczerpalne": [
        "energia słoneczna",
        "energia wiatru"
      ],
      "Odnawialne": [
        "woda",
        "drewno",
        "gleba"
      ],
      "Nieodnawialne": [
        "ropa naftowa",
        "węgiel",
        "gaz ziemny"
      ]
    },
    "explanation": "Energia słońca i wiatru to zasoby niewyczerpalne, woda, drewno i gleba należą do odnawialnych, a paliwa kopalne do nieodnawialnych.",
    "image": "r08_zasoby_przyrody.jpg",
    "items": [
      "gaz ziemny",
      "węgiel",
      "ropa naftowa",
      "gleba",
      "drewno",
      "woda",
      "energia wiatru",
      "energia słoneczna"
    ],
    "categories": [
      "Niewyczerpalne",
      "Odnawialne",
      "Nieodnawialne"
    ]
  },
  {
    "id": "R08_ZAS_10",
    "section": "Zasoby i różnorodność biologiczna",
    "type": "sequence",
    "prompt": "Ułóż przykład rozwoju inwazji gatunku obcego w logicznej kolejności.",
    "options": null,
    "answer": [
      "Przeniesienie gatunku poza naturalny zasięg",
      "Znalezienie sprzyjających warunków w nowym miejscu",
      "Rozmnażanie się bez silnej presji naturalnych wrogów",
      "Dominacja i wypieranie gatunków rodzimych"
    ],
    "explanation": "Gatunek inwazyjny może w nowym środowisku szybko zwiększać liczebność i wypierać gatunki miejscowe, m.in. dzięki brakowi naturalnych wrogów.",
    "image": "r08_gatunek_inwazyjny.jpg",
    "items": [
      "Rozmnażanie się bez silnej presji naturalnych wrogów",
      "Dominacja i wypieranie gatunków rodzimych",
      "Przeniesienie gatunku poza naturalny zasięg",
      "Znalezienie sprzyjających warunków w nowym miejscu"
    ]
  },
  {
    "id": "R08_OCH_01",
    "section": "Ochrona przyrody",
    "type": "single_choice",
    "prompt": "Jaka jest minimalna powierzchnia parku narodowego w Polsce określona w ustawie o ochronie przyrody?",
    "options": [
      "100 ha",
      "500 ha",
      "1000 ha",
      "50 ha",
      "2000 ha",
      "10 000 ha"
    ],
    "answer": 2,
    "explanation": "Zgodnie z polskim prawem park narodowy powinien mieć powierzchnię co najmniej 1000 ha.",
    "image": "r08_park_narodowy.jpg"
  },
  {
    "id": "R08_OCH_02",
    "section": "Ochrona przyrody",
    "type": "multi_select",
    "prompt": "Zaznacz formy ochrony przyrody obowiązujące w Polsce.",
    "options": [
      "Park narodowy",
      "Pole uprawne",
      "Monokultura rolna",
      "Rezerwat przyrody",
      "Pomnik przyrody",
      "Obszar Natura 2000"
    ],
    "answer": [
      0,
      3,
      4,
      5
    ],
    "explanation": "Parki narodowe, rezerwaty, pomniki przyrody i obszary Natura 2000 są ustawowymi formami ochrony przyrody."
  },
  {
    "id": "R08_OCH_03",
    "section": "Ochrona przyrody",
    "type": "true_false",
    "prompt": "Park krajobrazowy może chronić nie tylko przyrodę, lecz także wartości historyczne, kulturowe i krajobrazowe.",
    "options": null,
    "answer": true,
    "explanation": "Park krajobrazowy chroni wartości przyrodnicze, historyczne, kulturowe i krajobrazowe."
  },
  {
    "id": "R08_OCH_04",
    "section": "Ochrona przyrody",
    "type": "fill_in",
    "prompt": "Europejska sieć ochrony ptaków i siedlisk to Natura __________, a ochrona konkretnych rzadkich gatunków to ochrona __________.",
    "options": null,
    "answer": [
      "2000",
      "gatunkowa"
    ],
    "explanation": "Natura 2000 obejmuje ochronę ptaków i siedlisk, natomiast ochrona gatunkowa dotyczy gatunków oraz ich siedlisk i ostoi.",
    "altAnswers": [
      [
        "2000"
      ],
      [
        "gatunkowa",
        "gatunkową"
      ]
    ]
  },
  {
    "id": "R08_OCH_05",
    "section": "Ochrona przyrody",
    "type": "riddle",
    "prompt": "Jaką formą ochrony można objąć wyjątkowo okazałe pojedyncze drzewo albo głaz narzutowy?",
    "options": null,
    "answer": "pomnik przyrody",
    "explanation": "Pomnikami przyrody mogą być okazałe drzewa, głazy narzutowe, jaskinie i skałki.",
    "image": "r08_pomnik_przyrody.jpg",
    "altAnswers": [
      "pomnik przyrody",
      "pomnikiem przyrody"
    ]
  },
  {
    "id": "R08_OCH_06",
    "section": "Ochrona przyrody",
    "type": "odd_one_out",
    "prompt": "Wskaż element niebędący formą ochrony przyrody: pole uprawne, park krajobrazowy, rezerwat przyrody, park narodowy.",
    "options": null,
    "answer": "pole uprawne",
    "explanation": "Pierwsze trzy elementy to formalne sposoby ochrony; pole uprawne jest przykładem ekosystemu sztucznego."
  },
  {
    "id": "R08_OCH_07",
    "section": "Ochrona przyrody",
    "type": "scenario",
    "prompt": "Między polami znajduje się niewielkie torfowisko będące pozostałością naturalnego ekosystemu. Która forma ochrony szczególnie pasuje do takiego obiektu?",
    "options": [
      "Park narodowy obejmujący co najmniej 1000 ha",
      "Sieć troficzna",
      "Stanowisko wyłącznie geologiczne",
      "Rezerwat biosfery obejmujący cały region",
      "Użytek ekologiczny",
      "Monokultura"
    ],
    "answer": 4,
    "explanation": "Użytkami ekologicznymi mogą być między innymi torfowiska, bagna i śródpolne oczka wodne.",
    "image": "r08_torfowisko.jpg"
  },
  {
    "id": "R08_OCH_08",
    "section": "Ochrona przyrody",
    "type": "match",
    "prompt": "Połącz formę ochrony z wyróżniającym ją przykładem lub celem.",
    "options": null,
    "answer": {
      "Obszar chronionego krajobrazu": "Walory wypoczynkowe i korytarze ekologiczne",
      "Stanowisko dokumentacyjne": "Miejsce ze skamieniałościami o wartości naukowej",
      "Zespół przyrodniczo-krajobrazowy": "Fragment krajobrazu o szczególnych walorach widokowych",
      "Natura 2000": "Obszary ochrony ptaków i siedlisk"
    },
    "explanation": "Poszczególne formy ochrony przyrody różnią się głównym celem i przedmiotem ochrony.",
    "left": [
      "Obszar chronionego krajobrazu",
      "Stanowisko dokumentacyjne",
      "Zespół przyrodniczo-krajobrazowy",
      "Natura 2000"
    ],
    "right": [
      "Obszary ochrony ptaków i siedlisk",
      "Fragment krajobrazu o szczególnych walorach widokowych",
      "Miejsce ze skamieniałościami o wartości naukowej",
      "Walory wypoczynkowe i korytarze ekologiczne"
    ]
  },
  {
    "id": "R08_OCH_09",
    "section": "Ochrona przyrody",
    "type": "sort",
    "prompt": "Podziel nazwy form ochrony oraz obiekty, które mogą być chronione jako pomniki przyrody.",
    "options": null,
    "answer": {
      "Nazwy form ochrony": [
        "park narodowy",
        "rezerwat przyrody",
        "obszar Natura 2000"
      ],
      "Przykładowe pomniki przyrody": [
        "okazałe drzewo",
        "głaz narzutowy",
        "jaskinia"
      ]
    },
    "explanation": "Park, rezerwat i Natura 2000 są nazwami form ochrony; cenne drzewa, głazy i jaskinie mogą być pomnikami przyrody.",
    "image": "r08_pomnik_przyrody.jpg",
    "items": [
      "jaskinia",
      "głaz narzutowy",
      "okazałe drzewo",
      "obszar Natura 2000",
      "rezerwat przyrody",
      "park narodowy"
    ],
    "categories": [
      "Nazwy form ochrony",
      "Przykładowe pomniki przyrody"
    ]
  },
  {
    "id": "R08_OCH_10",
    "section": "Ochrona przyrody",
    "type": "multi_select",
    "prompt": "Które zadania pełnią rezerwaty biosfery?",
    "options": [
      "Udział w programie UNESCO Człowiek i biosfera",
      "Ochrona bioróżnorodności",
      "Promowanie zrównoważonego rozwoju",
      "Wydobywanie paliw kopalnych",
      "Ochrona ekosystemów charakterystycznych dla regionu",
      "Zastąpienie wszystkich parków narodowych"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Rezerwaty biosfery tworzy się w programie UNESCO Człowiek i biosfera dla ochrony różnorodności i promowania zrównoważonego rozwoju.",
    "image": "r08_park_narodowy.jpg"
  },
  {
    "id": "R08_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który porost jest w siedmiostopniowej skali porostowej przypisany do strefy VII, z najniższym stężeniem SO₂?",
    "options": [
      "Pustułka pęcherzykowata",
      "Granicznik płucnik",
      "Brodaczka zwyczajna",
      "Mąklik otrębiasty",
      "Złotorost ścienny",
      "Misecznica proszkowata"
    ],
    "answer": 1,
    "explanation": "W skali porostowej strefa VII, odpowiadająca stężeniu SO₂ poniżej 30 µg/m³, wiąże się z występowaniem granicznika płucnika.",
    "image": "r08_porosty_na_korze.jpg"
  },
  {
    "id": "R08_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Wybierz poprawne wnioski dotyczące siedmiostopniowej skali porostowej.",
    "options": [
      "W strefie I nie ma porostów nadrzewnych",
      "W strefie III występuje złotorost ścienny",
      "Strefa VII oznacza najwyższe stężenie SO₂",
      "Porosty reagują na zanieczyszczenie powietrza tlenkami siarki",
      "W strefie VII stężenie SO₂ jest poniżej 30 µg/m³",
      "W strefie I występuje granicznik płucnik"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "W skali porostowej strefa I oznacza brak porostów nadrzewnych, strefa III obecność złotorostu ściennego, a strefa VII wiąże się z najniższym stężeniem SO₂.",
    "image": "r08_porosty_na_korze.jpg"
  },
  {
    "id": "R08_HARD_03",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Według opisu przepływu energii rośliny wykorzystują około 1–5% energii słonecznej docierającej do Ziemi.",
    "options": null,
    "answer": true,
    "explanation": "Rośliny wykorzystują do fotosyntezy około 1–5% padającej na nie energii słonecznej."
  },
  {
    "id": "R08_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Strategia rozrodcza z licznym potomstwem i bez opieki to typ __________, a strategia z niewielką liczbą potomstwa i opieką to typ __________.",
    "options": null,
    "answer": [
      "r",
      "K"
    ],
    "explanation": "Typ r obejmuje liczne potomstwo z małą przeżywalnością, a typ K – mniej młodych i opiekę rodzicielską.",
    "altAnswers": [
      [
        "r",
        "R"
      ],
      [
        "K",
        "k"
      ]
    ]
  },
  {
    "id": "R08_HARD_05",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się najgłębsza strefa jeziora?",
    "options": null,
    "answer": "profundal",
    "explanation": "Profundal jest najgłębszą strefą jeziora, nazywaną też strefą głębinową.",
    "image": "r08_strefy_jeziora.jpg",
    "altAnswers": [
      "profundal",
      "profundalu"
    ]
  },
  {
    "id": "R08_HARD_06",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Która nazwa oznacza gatunek inwazyjny zamiast porostu ze skali porostowej: granicznik płucnik, norka amerykańska, złotorost ścienny, brodaczka zwyczajna.",
    "options": null,
    "answer": "norka amerykańska",
    "explanation": "Norka amerykańska jest gatunkiem inwazyjnym, a pozostałe nazwy dotyczą porostów wykorzystywanych do oceny czystości powietrza.",
    "image": "r08_porosty_na_korze.jpg"
  },
  {
    "id": "R08_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Po usunięciu roślin z łańcucha troficznego zabrakło podstawowego źródła materii organicznej dla roślinożerców. Jednocześnie grzyby nadal rozkładają martwe szczątki. Jakie dwie role rozpoznajesz?",
    "options": [
      "Rośliny są producentami, a grzyby saprofityczne destruentami",
      "Rośliny są konsumentami I rzędu, a grzyby konsumentami II rzędu",
      "Rośliny są wyłącznie biotopem, a grzyby wyłącznie czynnikiem abiotycznym",
      "Rośliny są drapieżnikami, a grzyby roślinożercami",
      "Rośliny są konsumentami II rzędu, a grzyby producentami",
      "Rośliny są pasożytami, a grzyby komensalami"
    ],
    "answer": 0,
    "explanation": "Producenci wytwarzają związki organiczne, a destruenci rozkładają materię organiczną do prostych substancji nieorganicznych.",
    "image": "r08_siec_pokarmowa.jpg"
  },
  {
    "id": "R08_HARD_08",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Dopasuj mniej oczywiste obiekty do ustawowych form ochrony przyrody.",
    "options": null,
    "answer": {
      "Torfowisko jako pozostałość naturalnego ekosystemu": "Użytek ekologiczny",
      "Miejsce nagromadzenia skamieniałości": "Stanowisko dokumentacyjne",
      "Wyjątkowy pojedynczy głaz narzutowy": "Pomnik przyrody",
      "Malowniczy fragment krajobrazu naturalnego i kulturowego": "Zespół przyrodniczo-krajobrazowy"
    },
    "explanation": "Torfowiska mogą być użytkami ekologicznymi, miejsca ze skamieniałościami – stanowiskami dokumentacyjnymi, głazy – pomnikami przyrody, a wartościowe krajobrazy – zespołami przyrodniczo-krajobrazowymi.",
    "image": "r08_pomnik_przyrody.jpg",
    "left": [
      "Torfowisko jako pozostałość naturalnego ekosystemu",
      "Miejsce nagromadzenia skamieniałości",
      "Wyjątkowy pojedynczy głaz narzutowy",
      "Malowniczy fragment krajobrazu naturalnego i kulturowego"
    ],
    "right": [
      "Zespół przyrodniczo-krajobrazowy",
      "Pomnik przyrody",
      "Stanowisko dokumentacyjne",
      "Użytek ekologiczny"
    ]
  },
  {
    "id": "R08_HARD_09",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj porosty i obserwacje do podanych grup stref skali porostowej.",
    "options": null,
    "answer": {
      "Strefy I–III": [
        "brak porostów nadrzewnych",
        "misecznica proszkowata",
        "złotorost ścienny"
      ],
      "Strefy V–VII": [
        "mąklik otrębiasty",
        "brodaczka zwyczajna",
        "granicznik płucnik"
      ]
    },
    "explanation": "Skala porostowa obejmuje siedem stref: w strefach I–III stężenie SO₂ jest wyższe niż w strefach V–VII.",
    "image": "r08_porosty_na_korze.jpg",
    "items": [
      "granicznik płucnik",
      "brodaczka zwyczajna",
      "mąklik otrębiasty",
      "złotorost ścienny",
      "misecznica proszkowata",
      "brak porostów nadrzewnych"
    ],
    "categories": [
      "Strefy I–III",
      "Strefy V–VII"
    ]
  },
  {
    "id": "R08_HARD_10",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy przykładowego przepływu węgla od atmosfery do jego ponownego uwolnienia.",
    "options": null,
    "answer": [
      "Rośliny pobierają dwutlenek węgla z atmosfery",
      "Fotosynteza wbudowuje węgiel w związki organiczne",
      "Konsumenci zjadają materię organiczną roślin",
      "Oddychanie organizmów uwalnia dwutlenek węgla do atmosfery"
    ],
    "explanation": "Węgiel trafia do producentów przez fotosyntezę, przechodzi do konsumentów i może powrócić do atmosfery w oddychaniu.",
    "image": "r08_obieg_materii.jpg",
    "items": [
      "Konsumenci zjadają materię organiczną roślin",
      "Oddychanie organizmów uwalnia dwutlenek węgla do atmosfery",
      "Rośliny pobierają dwutlenek węgla z atmosfery",
      "Fotosynteza wbudowuje węgiel w związki organiczne"
    ]
  },
  {
    "id": "R08_HARD_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która odpowiedź poprawnie łączy dane o azocie i sposobie jego wykorzystania?",
    "options": [
      "Azot stanowi około 30% atmosfery i jest głównym składnikiem glukozy",
      "Azot z atmosfery mogą bezpośrednio wykorzystać wszystkie zwierzęta",
      "Azot nie występuje w atmosferze, lecz tylko w glebie",
      "Azot stanowi około 78% atmosfery, a bakterie wiążące azot udostępniają go roślinom",
      "Azot stanowi 1–5% atmosfery i jest pobierany przez rośliny wyłącznie jako gaz",
      "Azot stanowi 100% atmosfery, a grzyby produkują go w fotosyntezie"
    ],
    "answer": 3,
    "explanation": "Azot stanowi około 78% atmosfery. Niektóre bakterie wiążą azot atmosferyczny i udostępniają go roślinom."
  },
  {
    "id": "R08_HARD_12",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Na obszarze zanika wiele rodzimych gatunków. Pojawił się sprowadzony z daleka organizm bez naturalnych wrogów, a część siedlisk zniszczono. Który zestaw działań najbardziej odpowiada zasadom ochrony różnorodności?",
    "options": [
      "Rozbudowa sztucznych barier migracyjnych i tępienie rodzimych gatunków",
      "Rezygnacja z odtwarzania ekosystemów i zwiększanie zanieczyszczenia",
      "Ochrona i odtwarzanie siedlisk oraz ograniczanie rozprzestrzeniania gatunków obcych",
      "Zwiększanie liczby monokultur i usuwanie korytarzy ekologicznych",
      "Zastąpienie lasu uprawą jednogatunkową i ograniczenie ochrony gatunkowej",
      "Wprowadzanie kolejnych gatunków obcych i niszczenie naturalnych siedlisk"
    ],
    "answer": 2,
    "explanation": "Niszczenie siedlisk i rozprzestrzenianie się gatunków obcych zagrażają różnorodności biologicznej; ochrona siedlisk i ograniczanie inwazji pomagają ją zachować.",
    "image": "r08_gatunek_inwazyjny.jpg"
  }
];

const KID_PROMPTS = {
  "R08_EKO_01": "Jak nazywają się dwie części ekosystemu?",
  "R08_EKO_07": "Roślinie brakuje światła. Co spowalnia jej wzrost?",
  "R08_POP_01": "Co oznacza zagęszczenie populacji?",
  "R08_POP_07": "Zwierzę ma mało młodych i się nimi opiekuje. Jaki to typ rozrodu?",
  "R08_ZAL_01": "Jak nazywa się współpraca korzystna i konieczna dla obu gatunków?",
  "R08_ZAL_07": "Jemioła bierze z drzewa wodę i sole. Jakim jest organizmem?",
  "R08_OBI_01": "Kto jest na początku łańcucha pokarmowego?",
  "R08_OBI_03": "Czy energia krąży w zamkniętym obiegu tak jak materia?",
  "R08_ZAS_01": "Który zasób nie odnowi się szybko?",
  "R08_ZAS_05": "Jak nazywa się obcy gatunek wypierający miejscowe?",
  "R08_OCH_01": "Jak duży musi być co najmniej park narodowy?",
  "R08_OCH_07": "Jak chronić małe torfowisko między polami?",
  "R08_HARD_03": "Czy rośliny wykorzystują tylko 1–5% docierającej energii Słońca?"
};

const chapter = {
  id: "r08",
  number: 8,
  title: "Ekologia i różnorodność biologiczna",
  icon: "🌳",
  sectionOrder: [
    "Ekosystem i tolerancja ekologiczna",
    "Czynniki abiotyczne i populacje",
    "Zależności między organizmami",
    "Łańcuchy pokarmowe i obieg materii",
    "Zasoby i różnorodność biologiczna",
    "Ochrona przyrody"
  ],
  sectionIcons: {
    "Ekosystem i tolerancja ekologiczna": "🌿",
    "Czynniki abiotyczne i populacje": "🐾",
    "Zależności między organizmami": "🤝",
    "Łańcuchy pokarmowe i obieg materii": "🔄",
    "Zasoby i różnorodność biologiczna": "🌍",
    "Ochrona przyrody": "🛡️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
