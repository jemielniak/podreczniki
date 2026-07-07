// Skróty sekcji:
//   KRG = Kręgowce
//   RYB = Ryby
//   PLA = Płazy
//   GAD = Gady
//   MIE = Powtórka mieszana
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_KRG_01",
    "section": "Kręgowce",
    "type": "single_choice",
    "prompt": "Która cecha najbardziej wyróżnia kręgowce spośród innych zwierząt?",
    "options": [
      "Szkielet wewnętrzny z kręgosłupem",
      "Ciało zbudowane wyłącznie z tułowia",
      "Oddychanie tylko skrzelami",
      "Brak skóry",
      "Stała temperatura ciała u wszystkich gatunków",
      "Życie wyłącznie na lądzie"
    ],
    "answer": 0,
    "image": "/img/r04_szkielet_kregowca.jpg",
    "explanation": "Kręgowce mają szkielet wewnętrzny, którego główną część stanowi kręgosłup zbudowany z kręgów."
  },
  {
    "id": "R04_KRG_02",
    "section": "Kręgowce",
    "type": "multi_select",
    "prompt": "Zaznacz elementy, które według rozdziału składają się na szkielet kręgowców.",
    "options": [
      "czaszka",
      "kręgosłup",
      "kości kończyn",
      "muszla zewnętrzna",
      "chitynowy pancerz"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "W rozdziale podano, że na szkielet kręgowców składają się m.in. czaszka, kręgosłup i kości kończyn."
  },
  {
    "id": "R04_KRG_03",
    "section": "Kręgowce",
    "type": "true_false",
    "prompt": "Ciało większości kręgowców składa się z głowy, tułowia, ogona i kończyn.",
    "options": null,
    "answer": true,
    "image": "/img/r04_szkielet_kregowca.jpg",
    "explanation": "To prawda: podręcznik podaje taki plan budowy ciała większości kręgowców."
  },
  {
    "id": "R04_KRG_04",
    "section": "Kręgowce",
    "type": "fill_in",
    "prompt": "Zwierzęta kręgowe, czyli __________, mają szkielet wewnętrzny, którego główną część stanowi __________.",
    "options": null,
    "answer": [
      "kręgowce",
      "kręgosłup"
    ],
    "altAnswers": [
      [
        "kręgowce",
        "kregowce"
      ],
      [
        "kręgosłup",
        "kregoslup"
      ]
    ],
    "explanation": "Kręgowce to zwierzęta z wewnętrznym szkieletem i kręgosłupem zbudowanym z kręgów."
  },
  {
    "id": "R04_KRG_05",
    "section": "Kręgowce",
    "type": "riddle",
    "prompt": "Grupa zwierząt obejmująca ryby, płazy, gady, ptaki i ssaki to...",
    "options": null,
    "answer": "kręgowce",
    "altAnswers": [
      "kręgowce",
      "kregowce"
    ],
    "explanation": "W rozdziale wymieniono ryby, płazy, gady, ptaki i ssaki jako grupy należące do kręgowców."
  },
  {
    "id": "R04_KRG_06",
    "section": "Kręgowce",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: ryby, płazy, gady, pajęczaki.",
    "options": null,
    "answer": "pajęczaki",
    "explanation": "Ryby, płazy i gady to kręgowce, a pajęczaki nie należą do tej grupy."
  },
  {
    "id": "R04_KRG_07",
    "section": "Kręgowce",
    "type": "single_choice",
    "prompt": "U których kręgowców temperatura ciała zależy od temperatury otoczenia?",
    "options": [
      "U ryb, płazów i gadów",
      "U ptaków i ssaków",
      "Tylko u ssaków",
      "Tylko u ptaków",
      "U wszystkich kręgowców",
      "U żadnych kręgowców"
    ],
    "answer": 0,
    "image": "/img/r04_zmiennocieplne_stalocieplne.jpg",
    "explanation": "Zmiennocieplne są ryby, płazy i gady, ponieważ ich temperatura ciała zmienia się wraz z temperaturą otoczenia."
  },
  {
    "id": "R04_KRG_08",
    "section": "Kręgowce",
    "type": "sort",
    "prompt": "Przyporządkuj grupy kręgowców do typu temperatury ciała.",
    "options": null,
    "items": [
      "ryby",
      "płazy",
      "gady",
      "ptaki",
      "ssaki"
    ],
    "categories": [
      "zmiennocieplne",
      "stałocieplne"
    ],
    "answer": {
      "zmiennocieplne": [
        "ryby",
        "płazy",
        "gady"
      ],
      "stałocieplne": [
        "ptaki",
        "ssaki"
      ]
    },
    "image": "/img/r04_zmiennocieplne_stalocieplne.jpg",
    "explanation": "Ryby, płazy i gady są zmiennocieplne, a ptaki i ssaki są stałocieplne."
  },
  {
    "id": "R04_KRG_09",
    "section": "Kręgowce",
    "type": "true_false",
    "prompt": "Kręgowce występują tylko w wodzie.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz: kręgowce zasiedlają środowiska lądowe i wodne, a niektóre latają w powietrzu."
  },
  {
    "id": "R04_KRG_10",
    "section": "Kręgowce",
    "type": "match",
    "prompt": "Połącz pojęcie z wyjaśnieniem.",
    "options": null,
    "left": [
      "zmiennocieplność",
      "stałocieplność",
      "kręgosłup",
      "czaszka"
    ],
    "right": [
      "temperatura ciała zależy od otoczenia",
      "temperatura ciała jest utrzymywana na stałym poziomie",
      "główna część szkieletu wewnętrznego",
      "część szkieletu ochraniająca mózg"
    ],
    "answer": {
      "zmiennocieplność": "temperatura ciała zależy od otoczenia",
      "stałocieplność": "temperatura ciała jest utrzymywana na stałym poziomie",
      "kręgosłup": "główna część szkieletu wewnętrznego",
      "czaszka": "część szkieletu ochraniająca mózg"
    },
    "explanation": "Zmiennocieplność oznacza zależność temperatury ciała od otoczenia, a stałocieplność utrzymywanie stałej temperatury."
  },
  {
    "id": "R04_KRG_11",
    "section": "Kręgowce",
    "type": "scenario",
    "prompt": "Uczeń obserwuje zwierzę, którego temperatura ciała spada, gdy robi się chłodno, i rośnie, gdy otoczenie się nagrzewa. Jak nazwiesz takie zwierzę?",
    "options": [
      "zmiennocieplne",
      "stałocieplne",
      "bezkostne",
      "bezogonowe"
    ],
    "answer": 0,
    "explanation": "Zwierzę, którego temperatura ciała zależy od temperatury otoczenia, jest zmiennocieplne."
  },
  {
    "id": "R04_KRG_12",
    "section": "Kręgowce",
    "type": "single_choice",
    "prompt": "Dlaczego zwierzęta zmiennocieplne wygrzewają się na słońcu?",
    "options": [
      "Aby podwyższyć temperaturę ciała",
      "Aby oddychać skrzelami",
      "Aby złożyć ikrę",
      "Aby wytworzyć pióra",
      "Aby zmienić szkielet z kostnego na chrzęstny",
      "Aby utracić ogon"
    ],
    "answer": 0,
    "explanation": "Niska temperatura ciała spowalnia procesy życiowe, więc wygrzewanie pomaga ją podwyższyć."
  },
  {
    "id": "R04_RYB_01",
    "section": "Ryby",
    "type": "single_choice",
    "prompt": "W jakim środowisku żyją ryby?",
    "options": [
      "w wodzie",
      "wyłącznie na pustyniach",
      "wyłącznie w glebie",
      "tylko w koronach drzew",
      "tylko w powietrzu",
      "wyłącznie w ściółce leśnej"
    ],
    "answer": 0,
    "explanation": "Ryby są kręgowcami żyjącymi w środowisku wodnym."
  },
  {
    "id": "R04_RYB_02",
    "section": "Ryby",
    "type": "multi_select",
    "prompt": "Zaznacz cechy pomagające rybom żyć w wodzie.",
    "options": [
      "opływowy kształt ciała",
      "płetwy",
      "łuski pokryte śluzem",
      "skrzela",
      "sucha skóra z rogowymi płytkami",
      "powieki chroniące oczy przed wysychaniem"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r04_budowa_ryby_schemat.jpg",
    "explanation": "Opływowy kształt, płetwy, łuski ze śluzem i skrzela to ważne przystosowania ryb do życia w wodzie."
  },
  {
    "id": "R04_RYB_03",
    "section": "Ryby",
    "type": "riddle",
    "prompt": "Narząd zmysłu ryby, który odbiera informacje o ruchach wody, to...",
    "options": null,
    "answer": "linia boczna",
    "altAnswers": [
      "linia boczna",
      "linią boczną"
    ],
    "image": "/img/r04_budowa_ryby_schemat.jpg",
    "explanation": "Linia boczna pomaga rybom odbierać ruchy wody i sprawnie pływać, zwłaszcza w ławicach."
  },
  {
    "id": "R04_RYB_04",
    "section": "Ryby",
    "type": "match",
    "prompt": "Połącz część budowy ryby z jej funkcją.",
    "options": null,
    "left": [
      "płetwa ogonowa",
      "płetwa grzbietowa",
      "pokrywy skrzelowe",
      "łuski ze śluzem"
    ],
    "right": [
      "główny narząd ruchu",
      "ułatwia utrzymanie równowagi i zmianę kierunku",
      "osłaniają skrzela",
      "chronią ciało i ułatwiają pływanie"
    ],
    "answer": {
      "płetwa ogonowa": "główny narząd ruchu",
      "płetwa grzbietowa": "ułatwia utrzymanie równowagi i zmianę kierunku",
      "pokrywy skrzelowe": "osłaniają skrzela",
      "łuski ze śluzem": "chronią ciało i ułatwiają pływanie"
    },
    "image": "/img/r04_budowa_ryby_schemat.jpg",
    "explanation": "Różne elementy ciała ryby pełnią funkcje związane z ruchem, ochroną i oddychaniem."
  },
  {
    "id": "R04_RYB_05",
    "section": "Ryby",
    "type": "true_false",
    "prompt": "Ryby oddychają tlenem rozpuszczonym w wodzie, pobierając go za pomocą skrzeli.",
    "options": null,
    "answer": true,
    "explanation": "To prawda: ryby pobierają tlen rozpuszczony w wodzie przez skrzela."
  },
  {
    "id": "R04_RYB_06",
    "section": "Ryby",
    "type": "fill_in",
    "prompt": "Jaja składane przez samice ryb nazywa się __________, a młode rybki to __________.",
    "options": null,
    "answer": [
      "ikra",
      "narybek"
    ],
    "altAnswers": [
      [
        "ikra",
        "ikrą"
      ],
      [
        "narybek",
        "narybkiem"
      ]
    ],
    "explanation": "W rozdziale podano, że jaja ryb to ikra, a młode rybki to narybek."
  },
  {
    "id": "R04_RYB_07",
    "section": "Ryby",
    "type": "single_choice",
    "prompt": "Jak nazywa się rozród ryb odbywający się na tarlisku?",
    "options": [
      "tarło",
      "linienie",
      "odrętwienie",
      "przeobrażenie",
      "wylinka",
      "gody płazów"
    ],
    "answer": 0,
    "image": "/img/r04_tarlo_ryb.jpg",
    "explanation": "Rozród ryb jest określany jako tarło i odbywa się w miejscu zwanym tarliskiem."
  },
  {
    "id": "R04_RYB_08",
    "section": "Ryby",
    "type": "sequence",
    "prompt": "Ułóż etapy rozwoju większości ryb w odpowiedniej kolejności.",
    "options": null,
    "items": [
      "z zapłodnionych jaj wylęga się narybek",
      "samica składa ikrę do wody",
      "samiec uwalnia plemniki do wody",
      "dochodzi do zapłodnienia zewnętrznego"
    ],
    "answer": [
      "samica składa ikrę do wody",
      "samiec uwalnia plemniki do wody",
      "dochodzi do zapłodnienia zewnętrznego",
      "z zapłodnionych jaj wylęga się narybek"
    ],
    "image": "/img/r04_tarlo_ryb.jpg",
    "explanation": "U większości ryb samica składa ikrę, samiec uwalnia plemniki, dochodzi do zapłodnienia zewnętrznego, a z jaj wylęga się narybek."
  },
  {
    "id": "R04_RYB_09",
    "section": "Ryby",
    "type": "single_choice",
    "prompt": "Co oznacza rozwój prosty u ryb?",
    "options": [
      "Młode ryby są podobne do dorosłych, tylko mniejsze",
      "Ryby zawsze mają larwę nazywaną kijanką",
      "Młode ryby rodzą się wyłącznie na lądzie",
      "Dorosłe ryby tracą skrzela",
      "Ryby przeobrażają się w płazy",
      "Z jaj wylęgają się ptaki"
    ],
    "answer": 0,
    "explanation": "W rozwoju prostym młody organizm przypomina dorosłego osobnika, tylko jest mniejszy."
  },
  {
    "id": "R04_RYB_10",
    "section": "Ryby",
    "type": "sort",
    "prompt": "Przyporządkuj ryby lub grupy ryb do sposobu odżywiania podanego w rozdziale.",
    "options": null,
    "items": [
      "szczupak",
      "amur",
      "karp",
      "śledzie"
    ],
    "categories": [
      "drapieżne",
      "roślinożerne",
      "wszystkożerne",
      "żywiące się planktonem"
    ],
    "answer": {
      "drapieżne": [
        "szczupak"
      ],
      "roślinożerne": [
        "amur"
      ],
      "wszystkożerne": [
        "karp"
      ],
      "żywiące się planktonem": [
        "śledzie"
      ]
    },
    "explanation": "W podręczniku jako przykłady podano m.in. szczupaka jako drapieżnika, amura jako roślinożercę, karpia jako wszystkożercę i śledzie jako żywiące się planktonem."
  },
  {
    "id": "R04_RYB_11",
    "section": "Ryby",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: rekin, płaszczka, szczupak, skrzek.",
    "options": null,
    "answer": "skrzek",
    "explanation": "Rekin, płaszczka i szczupak to ryby, a skrzek to jaja płazów."
  },
  {
    "id": "R04_RYB_12",
    "section": "Ryby",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady znaczenia ryb wymienione w rozdziale.",
    "options": [
      "są źródłem pokarmu dla ludzi i zwierząt",
      "regulują liczbę organizmów wodnych",
      "ryby roślinożerne zapobiegają zarastaniu zbiorników",
      "stanowią surowiec do produkcji leków, klejów i żelatyny",
      "wytwarzają mleko dla młodych",
      "zapylają kwiaty"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Ryby są pokarmem, regulują liczebność organizmów wodnych, mogą zapobiegać zarastaniu zbiorników i być surowcem do produkcji różnych wyrobów."
  },
  {
    "id": "R04_RYB_13",
    "section": "Ryby",
    "type": "true_false",
    "prompt": "Większość ryb opiekuje się ikrą i narybkiem.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz: większość ryb nie opiekuje się ani ikrą, ani narybkiem."
  },
  {
    "id": "R04_RYB_14",
    "section": "Ryby",
    "type": "scenario",
    "prompt": "W akwarium widzisz narząd wypełniony mieszaniną gazów. Gdy jest bardziej napełniony, ryba się wynurza, a gdy gazu jest mniej, zanurza się głębiej. Co to za narząd?",
    "options": [
      "pęcherz pławny",
      "linia boczna",
      "pokrywa skrzelowa",
      "płetwa odbytowa"
    ],
    "answer": 0,
    "explanation": "Pęcherz pławny umożliwia rybom pływanie na różnych głębokościach."
  },
  {
    "id": "R04_PLA_01",
    "section": "Płazy",
    "type": "single_choice",
    "prompt": "Dlaczego płazy nazywa się zwierzętami wodno-lądowymi?",
    "options": [
      "Bo większość żyje w dwóch środowiskach: wodnym i lądowym",
      "Bo żyją tylko w morzach",
      "Bo mają suchą skórę z rogowymi łuskami",
      "Bo wszystkie latają",
      "Bo są stałocieplne",
      "Bo rozmnażają się wyłącznie w piasku"
    ],
    "answer": 0,
    "explanation": "Większość płazów część życia spędza na lądzie, a na czas rozrodu przenosi się do wody."
  },
  {
    "id": "R04_PLA_02",
    "section": "Płazy",
    "type": "multi_select",
    "prompt": "Zaznacz przystosowania żaby do życia w wodzie.",
    "options": [
      "opływowy kształt ciała",
      "śluz na ciele",
      "błony pławne",
      "oczy i nozdrza w górnej części głowy",
      "gruba sucha skóra z płytkami",
      "pióra"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r04_budowa_zaby.jpg",
    "explanation": "Do życia w wodzie pomagają żabie m.in. opływowy kształt, śluz na ciele, błony pławne, oczy i nozdrza u góry głowy oraz wymiana gazowa przez cienką skórę."
  },
  {
    "id": "R04_PLA_03",
    "section": "Płazy",
    "type": "multi_select",
    "prompt": "Zaznacz przystosowania płazów do życia na lądzie wymienione przy żabie.",
    "options": [
      "kończyny przystosowane do poruszania się",
      "śluz chroniący skórę przed wysychaniem",
      "powieki chroniące gałki oczne",
      "płuca i cienka skóra do wymiany gazowej",
      "linia boczna",
      "płetwa ogonowa jako główny narząd ruchu"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Na lądzie pomagają płazom kończyny, śluz chroniący skórę przed wysychaniem, powieki oraz płuca i cienka skóra umożliwiające wymianę gazową."
  },
  {
    "id": "R04_PLA_04",
    "section": "Płazy",
    "type": "match",
    "prompt": "Połącz cechę budowy żaby z funkcją.",
    "options": null,
    "left": [
      "błona pławna",
      "wilgotna skóra",
      "powieki",
      "długie tylne kończyny"
    ],
    "right": [
      "zwiększa powierzchnię stopy",
      "umożliwia wymianę gazową i chroni przed wysychaniem",
      "zapobiegają wysychaniu gałek ocznych",
      "ułatwiają skakanie i pływanie"
    ],
    "answer": {
      "błona pławna": "zwiększa powierzchnię stopy",
      "wilgotna skóra": "umożliwia wymianę gazową i chroni przed wysychaniem",
      "powieki": "zapobiegają wysychaniu gałek ocznych",
      "długie tylne kończyny": "ułatwiają skakanie i pływanie"
    },
    "image": "/img/r04_budowa_zaby.jpg",
    "explanation": "Budowa żaby łączy przystosowania do poruszania się, obserwowania otoczenia i ochrony skóry."
  },
  {
    "id": "R04_PLA_05",
    "section": "Płazy",
    "type": "true_false",
    "prompt": "Płazy są zmiennocieplne.",
    "options": null,
    "answer": true,
    "explanation": "To prawda: płazy należą do kręgowców zmiennocieplnych."
  },
  {
    "id": "R04_PLA_06",
    "section": "Płazy",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady płazów do grup.",
    "options": null,
    "items": [
      "żaba",
      "ropucha",
      "rzekotka",
      "kumak",
      "salamandra",
      "traszka"
    ],
    "categories": [
      "płazy bezogonowe",
      "płazy ogoniaste"
    ],
    "answer": {
      "płazy bezogonowe": [
        "żaba",
        "ropucha",
        "rzekotka",
        "kumak"
      ],
      "płazy ogoniaste": [
        "salamandra",
        "traszka"
      ]
    },
    "explanation": "Żaby, ropuchy, rzekotki i kumaki to płazy bezogonowe, a salamandry i traszki to płazy ogoniaste."
  },
  {
    "id": "R04_PLA_07",
    "section": "Płazy",
    "type": "fill_in",
    "prompt": "Jaja płazów sklejone galaretowatą substancją to __________, a larwa żaby to __________.",
    "options": null,
    "answer": [
      "skrzek",
      "kijanka"
    ],
    "altAnswers": [
      [
        "skrzek",
        "skrzekiem"
      ],
      [
        "kijanka",
        "kijanką"
      ]
    ],
    "explanation": "Skrzek to jaja płazów, a kijanka jest larwą płazów bezogonowych, np. żaby."
  },
  {
    "id": "R04_PLA_08",
    "section": "Płazy",
    "type": "single_choice",
    "prompt": "Jaki typ rozwoju przechodzą płazy?",
    "options": [
      "rozwój złożony",
      "rozwój prosty",
      "rozwój bez jaj",
      "rozwój bez larwy",
      "rozwój wyłącznie w pęcherzu pławnym",
      "rozwój z łuskami rogowymi"
    ],
    "answer": 0,
    "image": "/img/r04_cykl_rozwojowy_zaby.jpg",
    "explanation": "Płazy przechodzą rozwój złożony: z jaja wykluwa się larwa, która przeobraża się w postać dorosłą."
  },
  {
    "id": "R04_PLA_09",
    "section": "Płazy",
    "type": "sequence",
    "prompt": "Ułóż etapy cyklu rozwojowego żaby wodnej w odpowiedniej kolejności.",
    "options": null,
    "items": [
      "młoda żaba",
      "samica składa skrzek do wody",
      "samiec oblewa skrzek plemnikami",
      "z zapłodnionych jaj wykluwają się kijanki",
      "kijance pojawiają się kończyny i zanikają skrzela oraz ogon"
    ],
    "answer": [
      "samica składa skrzek do wody",
      "samiec oblewa skrzek plemnikami",
      "z zapłodnionych jaj wykluwają się kijanki",
      "kijance pojawiają się kończyny i zanikają skrzela oraz ogon",
      "młoda żaba"
    ],
    "image": "/img/r04_cykl_rozwojowy_zaby.jpg",
    "explanation": "U żaby wodnej samica składa skrzek, samiec oblewa go plemnikami, z jaj wykluwają się kijanki, a następnie przeobrażają się w młode żaby."
  },
  {
    "id": "R04_PLA_10",
    "section": "Płazy",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: żaba, ropucha, rzekotka, jaszczurka.",
    "options": null,
    "answer": "jaszczurka",
    "explanation": "Żaba, ropucha i rzekotka to płazy, a jaszczurka jest gadem."
  },
  {
    "id": "R04_PLA_11",
    "section": "Płazy",
    "type": "true_false",
    "prompt": "Kijanki żyją tylko w wodzie, mają skrzela i ogon, ale nie mają kończyn.",
    "options": null,
    "answer": true,
    "image": "/img/r04_cykl_rozwojowy_zaby.jpg",
    "explanation": "To prawda: tak opisano kijanki w rozdziale."
  },
  {
    "id": "R04_PLA_12",
    "section": "Płazy",
    "type": "single_choice",
    "prompt": "Co jest głównym pokarmem dorosłych płazów według rozdziału?",
    "options": [
      "bezkręgowce",
      "wyłącznie plankton",
      "liście drzew iglastych",
      "ikra ryb",
      "rogi gadów",
      "kamienie"
    ],
    "answer": 0,
    "explanation": "Dorosłe płazy są drapieżnikami i żywią się bezkręgowcami."
  },
  {
    "id": "R04_PLA_13",
    "section": "Płazy",
    "type": "multi_select",
    "prompt": "Zaznacz zagrożenia dla płazów opisane w rozdziale.",
    "options": [
      "giną pod kołami pojazdów",
      "szkodzą im środki używane w rolnictwie",
      "zanikają miejsca ich rozrodu",
      "wszystkie są łowione dla kawioru",
      "wszystkie wymarły w Polsce"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Płazom szkodzą m.in. pojazdy, środki używane w rolnictwie i zanik miejsc rozrodu."
  },
  {
    "id": "R04_PLA_14",
    "section": "Płazy",
    "type": "scenario",
    "prompt": "Podczas obserwacji widzisz zwierzę o wilgotnej skórze, które dorosłe żyje na lądzie, ale na czas rozrodu wraca do słodkowodnego zbiornika. Do jakiej grupy najpewniej należy?",
    "options": [
      "płazy",
      "ryby",
      "gady",
      "ptaki"
    ],
    "answer": 0,
    "explanation": "To cechy płazów, które są zwierzętami wodno-lądowymi i rozmnażają się w wodzie lub wilgotnych miejscach."
  },
  {
    "id": "R04_GAD_01",
    "section": "Gady",
    "type": "single_choice",
    "prompt": "Dlaczego gady nazywa się zdobywcami lądu?",
    "options": [
      "Bo opanowały środowisko lądowe i rozmnażają się na lądzie",
      "Bo oddychają skrzelami i składają ikrę",
      "Bo są stałocieplne",
      "Bo ich larwy zawsze żyją w wodzie",
      "Bo mają wilgotną skórę bez łusek",
      "Bo żyją wyłącznie w morzu"
    ],
    "answer": 0,
    "explanation": "Gady opanowały środowisko lądowe, a wszystkie rozmnażają się na lądzie."
  },
  {
    "id": "R04_GAD_02",
    "section": "Gady",
    "type": "multi_select",
    "prompt": "Zaznacz wspólne cechy gadów opisane w rozdziale.",
    "options": [
      "zmiennocieplność",
      "gruba i sucha skóra",
      "łuski i rogowe płytki",
      "ciało podzielone na głowę, tułów i ogon",
      "skrzela przez całe życie",
      "rozwój złożony z kijanką"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r04_budowa_jaszczurki.jpg",
    "explanation": "Gady są zmiennocieplne, mają ciało z głową, tułowiem i ogonem oraz grubą, suchą skórę pokrytą łuskami i rogowymi płytkami."
  },
  {
    "id": "R04_GAD_03",
    "section": "Gady",
    "type": "match",
    "prompt": "Połącz cechę budowy jaszczurki z opisem.",
    "options": null,
    "left": [
      "skóra gadów",
      "oko jaszczurki",
      "kończyny jaszczurki",
      "ogon jaszczurki"
    ],
    "right": [
      "gruba, sucha, z łuskami lub płytkami",
      "ma ruchomą powiekę",
      "mają długie palce zakończone pazurami",
      "jest dłuższy od tułowia"
    ],
    "answer": {
      "skóra gadów": "gruba, sucha, z łuskami lub płytkami",
      "oko jaszczurki": "ma ruchomą powiekę",
      "kończyny jaszczurki": "mają długie palce zakończone pazurami",
      "ogon jaszczurki": "jest dłuższy od tułowia"
    },
    "image": "/img/r04_budowa_jaszczurki.jpg",
    "explanation": "Ilustracja jaszczurki pokazuje m.in. skórę z łuskami, ruchomą powiekę i kończyny z palcami zakończonymi pazurami."
  },
  {
    "id": "R04_GAD_04",
    "section": "Gady",
    "type": "true_false",
    "prompt": "Gady występują na wszystkich kontynentach poza Antarktydą.",
    "options": null,
    "answer": true,
    "explanation": "To prawda: tak samo jak płazy, gady nie występują na Antarktydzie."
  },
  {
    "id": "R04_GAD_05",
    "section": "Gady",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do grup gadów.",
    "options": null,
    "items": [
      "aligator",
      "żółw błotny",
      "jaszczurka zwinka",
      "żmija zygzakowata",
      "kameleon",
      "gawial"
    ],
    "categories": [
      "krokodyle",
      "żółwie",
      "jaszczurki",
      "węże"
    ],
    "answer": {
      "krokodyle": [
        "aligator",
        "gawial"
      ],
      "żółwie": [
        "żółw błotny"
      ],
      "jaszczurki": [
        "jaszczurka zwinka",
        "kameleon"
      ],
      "węże": [
        "żmija zygzakowata"
      ]
    },
    "image": "/img/r04_grupy_gadow.jpg",
    "explanation": "Do gadów należą m.in. krokodyle, żółwie, jaszczurki i węże."
  },
  {
    "id": "R04_GAD_06",
    "section": "Gady",
    "type": "fill_in",
    "prompt": "U gadów dochodzi do zapłodnienia __________, dlatego rozmnażanie nie jest uzależnione od środowiska __________.",
    "options": null,
    "answer": [
      "wewnętrznego",
      "wodnego"
    ],
    "altAnswers": [
      [
        "wewnętrznego",
        "wewnetrznego"
      ],
      [
        "wodnego",
        "wody"
      ]
    ],
    "explanation": "Zapłodnienie wewnętrzne pozwala gadom rozmnażać się na lądzie, bez zależności od środowiska wodnego."
  },
  {
    "id": "R04_GAD_07",
    "section": "Gady",
    "type": "single_choice",
    "prompt": "Jaki rozwój przechodzą gady?",
    "options": [
      "rozwój prosty",
      "rozwój złożony z kijanką",
      "rozwój z larwą wodną",
      "rozwój bez jaj i bez młodych",
      "rozwój przez tarło w wodzie",
      "rozwój planktonowy"
    ],
    "answer": 0,
    "image": "/img/r04_jaja_gadow_na_ladzie.jpg",
    "explanation": "Gady przechodzą rozwój prosty: młode wykluwające się z jaj są podobne do dorosłych osobników."
  },
  {
    "id": "R04_GAD_08",
    "section": "Gady",
    "type": "true_false",
    "prompt": "Większość gadów opiekuje się swoim potomstwem.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz: większość gadów nie opiekuje się potomstwem, a wyjątkiem są krokodyle."
  },
  {
    "id": "R04_GAD_09",
    "section": "Gady",
    "type": "riddle",
    "prompt": "Beznoga jaszczurka żyjąca w Polsce, odróżniana od węży m.in. obecnością powiek, to...",
    "options": null,
    "answer": "padalec zwyczajny",
    "altAnswers": [
      "padalec",
      "padalec zwyczajny"
    ],
    "explanation": "Padalec zwyczajny jest beznogą jaszczurką, a nie wężem."
  },
  {
    "id": "R04_GAD_10",
    "section": "Gady",
    "type": "single_choice",
    "prompt": "Który wąż jest jedynym jadowitym wężem występującym w Polsce według rozdziału?",
    "options": [
      "żmija zygzakowata",
      "zaskroniec zwyczajny",
      "kobra królewska",
      "boa dusiciel",
      "pyton",
      "gawial gangesowy"
    ],
    "answer": 0,
    "explanation": "W podręczniku wskazano żmiję zygzakowatą jako jedynego jadowitego węża występującego w Polsce."
  },
  {
    "id": "R04_GAD_11",
    "section": "Gady",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: krokodyl, żółw, salamandra, jaszczurka.",
    "options": null,
    "answer": "salamandra",
    "explanation": "Krokodyl, żółw i jaszczurka to gady, a salamandra jest płazem."
  },
  {
    "id": "R04_GAD_12",
    "section": "Gady",
    "type": "multi_select",
    "prompt": "Zaznacz znaczenie gadów wymienione w rozdziale.",
    "options": [
      "stanowią pokarm dla ludzi i niektórych zwierząt",
      "regulują liczbę zwierząt, na które polują",
      "jad węży wykorzystuje się w badaniach naukowych",
      "jad węży może być surowcem do produkcji substancji leczniczych",
      "produkują tran",
      "zawsze zapobiegają zarastaniu zbiorników"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Gady mogą stanowić pokarm, regulują liczbę zwierząt, a jad węży jest wykorzystywany w badaniach i do produkcji substancji leczniczych."
  },
  {
    "id": "R04_GAD_13",
    "section": "Gady",
    "type": "scenario",
    "prompt": "W chłodny jesienno-zimowy okres jaszczurka ukrywa się w szczelinie skał i ogranicza aktywność. Jak nazywa się taki stan opisany w rozdziale?",
    "options": [
      "odrętwienie",
      "tarło",
      "stałocieplność",
      "przeobrażenie"
    ],
    "answer": 0,
    "explanation": "Gady żyjące w strefie umiarkowanej podczas chłodów zapadają w stan odrętwienia."
  },
  {
    "id": "R04_GAD_14",
    "section": "Gady",
    "type": "true_false",
    "prompt": "Wszystkie gady występujące w Polsce są objęte ochroną.",
    "options": null,
    "answer": true,
    "explanation": "To prawda: rozdział podaje, że wszystkie gady w Polsce są pod ochroną."
  },
  {
    "id": "R04_MIE_01",
    "section": "Powtórka mieszana",
    "type": "sort",
    "prompt": "Przyporządkuj grupy kręgowców do środowiska lub trybu życia dominującego w rozdziale.",
    "options": null,
    "items": [
      "ryby",
      "płazy",
      "gady"
    ],
    "categories": [
      "wodne",
      "wodno-lądowe",
      "lądowe"
    ],
    "answer": {
      "wodne": [
        "ryby"
      ],
      "wodno-lądowe": [
        "płazy"
      ],
      "lądowe": [
        "gady"
      ]
    },
    "explanation": "Ryby żyją w wodzie, płazy są wodno-lądowe, a gady opanowały ląd, choć niektóre prowadzą wodno-lądowy tryb życia."
  },
  {
    "id": "R04_MIE_02",
    "section": "Powtórka mieszana",
    "type": "match",
    "prompt": "Połącz grupę kręgowców z typowym sposobem rozmnażania opisanym w rozdziale.",
    "options": null,
    "left": [
      "ryby",
      "płazy",
      "gady"
    ],
    "right": [
      "ikra i zapłodnienie zewnętrzne w wodzie",
      "skrzek i rozwój z kijanką",
      "zapłodnienie wewnętrzne i jaja składane na lądzie"
    ],
    "answer": {
      "ryby": "ikra i zapłodnienie zewnętrzne w wodzie",
      "płazy": "skrzek i rozwój z kijanką",
      "gady": "zapłodnienie wewnętrzne i jaja składane na lądzie"
    },
    "explanation": "Ryby składają ikrę do wody, płazy składają skrzek, a gady rozmnażają się na lądzie z zapłodnieniem wewnętrznym."
  },
  {
    "id": "R04_MIE_03",
    "section": "Powtórka mieszana",
    "type": "single_choice",
    "prompt": "Która para jest poprawna?",
    "options": [
      "ryby — skrzela",
      "płazy — suche łuski rogowe",
      "gady — skrzek",
      "ryby — powieki chroniące oczy przed wysychaniem",
      "płazy — pęcherz pławny",
      "gady — kijanki"
    ],
    "answer": 0,
    "explanation": "Ryby oddychają skrzelami, płazy mają wilgotną skórę, a gady grubą i suchą skórę."
  },
  {
    "id": "R04_MIE_04",
    "section": "Powtórka mieszana",
    "type": "multi_select",
    "prompt": "Zaznacz grupy kręgowców zmiennocieplnych omawiane w rozdziale.",
    "options": [
      "ryby",
      "płazy",
      "gady",
      "ptaki",
      "ssaki"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "W rozdziale jako zmiennocieplne wskazano ryby, płazy i gady."
  },
  {
    "id": "R04_MIE_05",
    "section": "Powtórka mieszana",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: ikra, skrzek, jaja gadów, pióra.",
    "options": null,
    "answer": "pióra",
    "explanation": "Ikra, skrzek i jaja gadów dotyczą rozmnażania omawianych grup, a pióra nie są tematem rozdziału o rybach, płazach i gadach."
  },
  {
    "id": "R04_MIE_06",
    "section": "Powtórka mieszana",
    "type": "fill_in",
    "prompt": "Ryby oddychają za pomocą __________, dorosłe płazy mogą oddychać płucami i przez __________, a gady oddychają płucami.",
    "options": null,
    "answer": [
      "skrzeli",
      "skórę"
    ],
    "altAnswers": [
      [
        "skrzeli",
        "skrzela"
      ],
      [
        "skórę",
        "skore",
        "skórę ciała"
      ]
    ],
    "explanation": "Ryby pobierają tlen skrzelami, a u płazów ważna jest także wymiana gazowa przez cienką skórę."
  },
  {
    "id": "R04_MIE_07",
    "section": "Powtórka mieszana",
    "type": "scenario",
    "prompt": "Na zajęciach masz rozpoznać zwierzę: ma łuski i warstwę śluzu, płetwy oraz linię boczną. Do której grupy należy?",
    "options": [
      "ryby",
      "płazy",
      "gady",
      "ssaki"
    ],
    "answer": 0,
    "explanation": "Łuski ze śluzem, płetwy i linia boczna to cechy ryb."
  },
  {
    "id": "R04_MIE_08",
    "section": "Powtórka mieszana",
    "type": "scenario",
    "prompt": "Drugie zwierzę ma grubą, suchą skórę pokrytą łuskami i rogowymi płytkami oraz składa jaja na lądzie. Do której grupy należy?",
    "options": [
      "gady",
      "ryby",
      "płazy",
      "ptaki"
    ],
    "answer": 0,
    "explanation": "Gruba sucha skóra oraz rozmnażanie na lądzie to cechy gadów."
  },
  {
    "id": "R04_MIE_09",
    "section": "Powtórka mieszana",
    "type": "true_false",
    "prompt": "Rozwój prosty występuje u ryb i gadów, a rozwój złożony u płazów.",
    "options": null,
    "answer": true,
    "explanation": "To prawda: ryby i gady mają rozwój prosty, a płazy rozwój złożony z larwą."
  },
  {
    "id": "R04_MIE_10",
    "section": "Powtórka mieszana",
    "type": "sequence",
    "prompt": "Ułóż grupy w kolejności od najbardziej związanej z wodą do najbardziej związanej z lądem według materiału z rozdziału.",
    "options": null,
    "items": [
      "gady",
      "ryby",
      "płazy"
    ],
    "answer": [
      "ryby",
      "płazy",
      "gady"
    ],
    "explanation": "Ryby są wodne, płazy wodno-lądowe, a gady opanowały środowisko lądowe."
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która informacja o łososiach i jesiotrach wynika z ramki „Wędrówki ryb”?",
    "options": [
      "Dorosłe żyją w morzu, a ikra rozwija się w słodkich wodach potoków górskich",
      "Dorosłe żyją wyłącznie w glebie, a ikra na pustyni",
      "Ich młode od razu po wykluciu odlatują w cieplejsze rejony",
      "Nie odbywają żadnych wędrówek",
      "Rozmnażają się tylko w koronach drzew",
      "Składają skrzek w ściółce"
    ],
    "answer": 0,
    "explanation": "Dorosłe łososie i jesiotry żyją w słonych wodach mórz, ale ich ikra rozwija się w słodkich wodach potoków górskich."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Narybek łososia po 2–3 latach płynie w dół rzek, do morza.",
    "options": null,
    "answer": true,
    "explanation": "To prawda: ramka o wędrówkach ryb podaje, że narybek po 2–3 latach płynie do morza."
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Substancja określona w rozdziale jako tłuszcz z rybiej wątroby to...",
    "options": null,
    "answer": "tran",
    "altAnswers": [
      "tran"
    ],
    "explanation": "Tran to tłuszcz z rybiej wątroby, wymieniony jako cenny składnik pozyskiwany z ryb."
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Co odróżnia padalca zwyczajnego od węży według rozdziału?",
    "options": [
      "Ma powieki i małą, słabo oddzieloną od tułowia głowę",
      "Ma skrzela i płetwy",
      "Składa skrzek w wodzie",
      "Nie ma skóry",
      "Jest stałocieplny",
      "Ma pióra"
    ],
    "answer": 0,
    "explanation": "Padalec ma małą, słabo oddzieloną od tułowia głowę oraz powieki, których węże nie mają."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz ryby lub zwierzęta rybie opisane na stronie „To naprawdę ryba!”.",
    "options": [
      "pławikoniki",
      "kurek czerwony",
      "rurecznice lub fletnice",
      "patelnica niebieskoplama",
      "żmija zygzakowata",
      "ropucha szara"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Na stronie „To naprawdę ryba!” opisano m.in. pławikoniki, kurka czerwonego, rurecznice/fletnice oraz patelnicę niebieskoplamą."
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "U płazów bezogonowych zapłodnienie jest __________ i zachodzi w środowisku __________.",
    "options": null,
    "answer": [
      "zewnętrzne",
      "wodnym"
    ],
    "altAnswers": [
      [
        "zewnętrzne",
        "zewnetrzne"
      ],
      [
        "wodnym",
        "wodzie",
        "wodnym środowisku"
      ]
    ],
    "explanation": "Płazy bezogonowe mają zapłodnienie zewnętrzne w środowisku wodnym."
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz przykład zwierzęcia z informacją podaną w rozdziale.",
    "options": null,
    "left": [
      "najeżka",
      "rzekotka drzewna",
      "żółw błotny",
      "zaskroniec zwyczajny"
    ],
    "right": [
      "napełnia ciało wodą lub powietrzem i przypomina kolczastą kulę",
      "ma palce zakończone przylgami i żyje głównie na drzewach",
      "jedyny gatunek żółwia naturalnie występujący w Polsce",
      "ma żółte plamki za skroniami i dobrze pływa"
    ],
    "answer": {
      "najeżka": "napełnia ciało wodą lub powietrzem i przypomina kolczastą kulę",
      "rzekotka drzewna": "ma palce zakończone przylgami i żyje głównie na drzewach",
      "żółw błotny": "jedyny gatunek żółwia naturalnie występujący w Polsce",
      "zaskroniec zwyczajny": "ma żółte plamki za skroniami i dobrze pływa"
    },
    "explanation": "Rozdział podaje charakterystyczne informacje o wybranych gatunkach ryb, płazów i gadów."
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Badacz opisuje zwierzę: dorosłe osobniki są drapieżnikami, żywią się bezkręgowcami, a w cyklu rozwojowym występuje larwa przeobrażająca się w postać dorosłą. O jakiej grupie mowa?",
    "options": [
      "płazy",
      "ryby kostnoszkieletowe",
      "gady",
      "ssaki"
    ],
    "answer": 0,
    "explanation": "To opis płazów: dorosłe są drapieżnikami, a ich rozwój jest złożony z larwą."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r04",
  number: 4,
  title: "Zwierzęta kręgowe: ryby, płazy, gady",
  icon: "🐟",
  sectionOrder: [
  "Kręgowce",
  "Ryby",
  "Płazy",
  "Gady",
  "Powtórka mieszana",
  "Super trudne"
],
  sectionIcons: {
    "Kręgowce": "🦴",
    "Ryby": "🐟",
    "Płazy": "🐸",
    "Gady": "🦎",
    "Powtórka mieszana": "🔁",
    "Super trudne": "🔥"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
