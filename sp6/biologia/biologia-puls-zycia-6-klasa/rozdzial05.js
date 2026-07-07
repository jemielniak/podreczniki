// Skróty sekcji (do identyfikatorów ćwiczeń):
//   PTL  = Ptaki: budowa i lot
//   ZPT  = Ptaki: różnorodność i znaczenie
//   SSB  = Ssaki: budowa i środowisko
//   ZSS  = Ssaki: odżywianie i znaczenie
//   OCH  = Ochrona zwierząt stałocieplnych
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R05_PTL_01",
    "section": "Ptaki: budowa i lot",
    "type": "single_choice",
    "prompt": "Która cecha jest wspólna wszystkim ptakom według rozdziału?",
    "options": [
      "Mają pióra",
      "Mają futro",
      "Karmią młode mlekiem",
      "Oddychają skrzelami",
      "Nie składają jaj",
      "Nie mają kręgosłupa"
    ],
    "answer": 0,
    "explanation": "Ptaki to jedyne zwierzęta, które mają pióra. Pióra pomagają im latać i chronią przed utratą ciepła."
  },
  {
    "id": "R05_PTL_02",
    "section": "Ptaki: budowa i lot",
    "type": "multi_select",
    "prompt": "Zaznacz przystosowania ptaków do lotu opisane w rozdziale.",
    "options": [
      "Kończyny przednie przekształcone w skrzydła",
      "Opływowy kształt ciała",
      "Kości wypełnione powietrzem",
      "Skrzela ukryte pod piórami",
      "Zęby zastępujące dziób",
      "Pęcherzykowate płuca z przeponą"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Do lotu przystosowują ptaki między innymi skrzydła, opływowy kształt ciała i lekki szkielet z kośćmi wypełnionymi powietrzem.",
    "image": "r05_budowa_ptaka.jpg"
  },
  {
    "id": "R05_PTL_03",
    "section": "Ptaki: budowa i lot",
    "type": "true_false",
    "prompt": "Stałocieplność oznacza zdolność utrzymywania stałej temperatury ciała niezależnie od temperatury otoczenia.",
    "options": null,
    "answer": true,
    "explanation": "W rozdziale stałocieplność zdefiniowano właśnie jako utrzymywanie stałej temperatury ciała mimo zmian temperatury otoczenia."
  },
  {
    "id": "R05_PTL_04",
    "section": "Ptaki: budowa i lot",
    "type": "match",
    "prompt": "Połącz rodzaj piór z jego funkcją.",
    "options": null,
    "left": [
      "pióra puchowe",
      "pióra pokrywowe",
      "sterówki",
      "lotki"
    ],
    "right": [
      "ochrona przed utratą ciepła",
      "nadawanie gładkiej powierzchni",
      "kierowanie lotem",
      "tworzenie powierzchni lotnych"
    ],
    "answer": {
      "pióra puchowe": "ochrona przed utratą ciepła",
      "pióra pokrywowe": "nadawanie gładkiej powierzchni",
      "sterówki": "kierowanie lotem",
      "lotki": "tworzenie powierzchni lotnych"
    },
    "explanation": "Pióra puchowe izolują, pokrywowe wygładzają ciało, sterówki w ogonie pomagają kierować lotem, a lotki na skrzydłach tworzą powierzchnie lotne.",
    "image": "r05_rodzaje_pior.jpg"
  },
  {
    "id": "R05_PTL_05",
    "section": "Ptaki: budowa i lot",
    "type": "fill_in",
    "prompt": "Kończyny przednie ptaków są przekształcone w __________, a dziób zastępuje __________.",
    "options": null,
    "answer": [
      "skrzydła",
      "zęby"
    ],
    "altAnswers": [
      [
        "skrzydła",
        "skrzydla"
      ],
      [
        "zęby",
        "zeby"
      ]
    ],
    "explanation": "Skrzydła umożliwiają lot, a dziób przejmuje funkcje związane z pobieraniem pokarmu i zastępuje zęby."
  },
  {
    "id": "R05_PTL_06",
    "section": "Ptaki: budowa i lot",
    "type": "riddle",
    "prompt": "Jak nazywa się gruczoł u nasady ogona ptaka, który wydziela substancję do natłuszczania piór?",
    "options": null,
    "answer": "gruczoł kuprowy",
    "altAnswers": [
      "gruczoł kuprowy",
      "gruczol kuprowy"
    ],
    "explanation": "Gruczoł kuprowy wydziela substancję, którą ptaki natłuszczają pióra. Dzięki temu pióra nie nasiąkają wodą."
  },
  {
    "id": "R05_PTL_07",
    "section": "Ptaki: budowa i lot",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: lotki, sterówki, pióra puchowe, małżowiny uszne.",
    "options": null,
    "answer": "małżowiny uszne",
    "explanation": "Lotki, sterówki i pióra puchowe to rodzaje piór ptaków. Małżowiny uszne są charakterystycznym elementem budowy ssaków."
  },
  {
    "id": "R05_PTL_08",
    "section": "Ptaki: budowa i lot",
    "type": "scenario",
    "prompt": "Uczeń obserwuje ptaka, który unosi się w powietrzu prawie bez poruszania skrzydłami. Który przykład z rozdziału najlepiej pasuje do takiego lotu?",
    "options": [
      "myszołów",
      "koliber",
      "pingwin",
      "struś",
      "wróbel",
      "perkoz"
    ],
    "answer": 0,
    "explanation": "W rozdziale podano, że myszołowy mogą unosić się w powietrzu niemal bez poruszania skrzydłami."
  },
  {
    "id": "R05_PTL_09",
    "section": "Ptaki: budowa i lot",
    "type": "single_choice",
    "prompt": "Która część jaja ptaka jest głównym źródłem substancji pokarmowych dla rozwijającego się organizmu?",
    "options": [
      "żółtko",
      "wapienna skorupka",
      "komora powietrzna",
      "białko",
      "dutka",
      "stosina"
    ],
    "answer": 0,
    "explanation": "Żółtko jest głównym źródłem substancji pokarmowych dla rozwijającego się pisklęcia.",
    "image": "r05_jajo_ptaka.jpg"
  },
  {
    "id": "R05_PTL_10",
    "section": "Ptaki: budowa i lot",
    "type": "sort",
    "prompt": "Przyporządkuj elementy budowy ptaka do ich funkcji.",
    "options": null,
    "items": [
      "skrzydła",
      "dziób",
      "pazury",
      "powieki",
      "kości wypełnione powietrzem"
    ],
    "categories": [
      "lot",
      "pobieranie pokarmu",
      "ochrona i chwytanie",
      "ochrona oka",
      "zmniejszanie masy ciała"
    ],
    "answer": {
      "lot": [
        "skrzydła"
      ],
      "pobieranie pokarmu": [
        "dziób"
      ],
      "ochrona i chwytanie": [
        "pazury"
      ],
      "ochrona oka": [
        "powieki"
      ],
      "zmniejszanie masy ciała": [
        "kości wypełnione powietrzem"
      ]
    },
    "explanation": "Skrzydła umożliwiają lot, dziób służy głównie do pobierania pokarmu, pazury chronią palce i pomagają chwytać, powieki zabezpieczają oczy, a kości z powietrzem zmniejszają masę ciała.",
    "image": "r05_budowa_ptaka.jpg"
  },
  {
    "id": "R05_PTL_11",
    "section": "Ptaki: budowa i lot",
    "type": "sequence",
    "prompt": "Ułóż etapy rozmnażania i rozwoju ptaków w poprawnej kolejności.",
    "options": null,
    "items": [
      "wysiadywanie jaj",
      "toki",
      "wylęganie się piskląt",
      "składanie jaj",
      "zapłodnienie wewnętrzne"
    ],
    "answer": [
      "toki",
      "zapłodnienie wewnętrzne",
      "składanie jaj",
      "wysiadywanie jaj",
      "wylęganie się piskląt"
    ],
    "explanation": "Okres godowy rozpoczynają toki, potem następuje zapłodnienie wewnętrzne, złożenie jaj, ich wysiadywanie i wyklucie piskląt."
  },
  {
    "id": "R05_PTL_12",
    "section": "Ptaki: budowa i lot",
    "type": "true_false",
    "prompt": "Świeże powietrze przepływa przez płuca ptaków zarówno podczas wdechu, jak i wydechu.",
    "options": null,
    "answer": true,
    "explanation": "Worki powietrzne sprawiają, że przez rurkowate płuca ptaków świeże powietrze przepływa w obu fazach oddychania."
  },
  {
    "id": "R05_ZPT_01",
    "section": "Ptaki: różnorodność i znaczenie",
    "type": "single_choice",
    "prompt": "Która para ptaków jest w rozdziale podana jako przykład ptaków nielotnych?",
    "options": [
      "pingwin i struś",
      "jaskółka i koliber",
      "wróbel i sikora",
      "czapla i sęp",
      "sójka i jemiołuszka",
      "kaczka i łabędź"
    ],
    "answer": 0,
    "explanation": "Rozdział wskazuje pingwiny i strusie jako skrajne przykłady przystosowań, u których pojawia się brak zdolności do lotu.",
    "image": "r05_ptaki_nielotne.jpg"
  },
  {
    "id": "R05_ZPT_02",
    "section": "Ptaki: różnorodność i znaczenie",
    "type": "match",
    "prompt": "Połącz ptaka z opisem dzioba lub sposobu pobierania pokarmu.",
    "options": null,
    "left": [
      "wróbel",
      "łabędź",
      "orzeł",
      "sęp"
    ],
    "right": [
      "krótki stożkowaty dziób do wyłuskiwania nasion",
      "szeroki płaski dziób do odcedzania pokarmu z wody",
      "zakrzywiony dziób do chwytania i rozszarpywania",
      "głowa i szyja bez piór ułatwiają żerowanie na padlinie"
    ],
    "answer": {
      "wróbel": "krótki stożkowaty dziób do wyłuskiwania nasion",
      "łabędź": "szeroki płaski dziób do odcedzania pokarmu z wody",
      "orzeł": "zakrzywiony dziób do chwytania i rozszarpywania",
      "sęp": "głowa i szyja bez piór ułatwiają żerowanie na padlinie"
    },
    "explanation": "Wielkość i kształt dzioba zależą od pokarmu i sposobu jego pobierania. Dlatego ptaki o różnych dietach mają różne dzioby.",
    "image": "r05_dzioby_ptakow.jpg"
  },
  {
    "id": "R05_ZPT_03",
    "section": "Ptaki: różnorodność i znaczenie",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje ptaków w przyrodzie opisane w rozdziale.",
    "options": [
      "Regulują liczebność organizmów",
      "Rozsiewają nasiona roślin",
      "Zapylają kwiaty",
      "Budują łożysko dla zarodka",
      "Wytwarzają mleko",
      "Zawsze żywią się tylko roślinami"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Ptaki są pokarmem i drapieżnikami, rozsiewają nasiona oraz zapylają kwiaty, jeśli odżywiają się nektarem."
  },
  {
    "id": "R05_ZPT_04",
    "section": "Ptaki: różnorodność i znaczenie",
    "type": "scenario",
    "prompt": "Na stawie obserwujesz ptaka z szerokim, płaskim dziobem z rogowymi listewkami na brzegach. Do czego taki dziób jest przystosowany?",
    "options": [
      "do odcedzania z wody pokarmu",
      "do kruszenia kości",
      "do rozgrzebywania ziemi",
      "do rozszarpywania padliny",
      "do łapania owadów pęsetą",
      "do kucia dziupli"
    ],
    "answer": 0,
    "explanation": "W rozdziale tak opisano dziób łabędzia, który dzięki listewkom odcedza z wody pokarm, głównie roślinny.",
    "image": "r05_dzioby_ptakow.jpg"
  },
  {
    "id": "R05_ZPT_05",
    "section": "Ptaki: różnorodność i znaczenie",
    "type": "true_false",
    "prompt": "Czaple mają cechy ptaków brodzących w wodzie, na przykład długą szyję i długie cienkie nogi.",
    "options": null,
    "answer": true,
    "explanation": "Czaple są w rozdziale opisane jako ptaki brodzące w wodzie w poszukiwaniu pokarmu."
  },
  {
    "id": "R05_ZPT_06",
    "section": "Ptaki: różnorodność i znaczenie",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: kolibry, nektarniki, jemiołuszki, nietoperze.",
    "options": null,
    "answer": "nietoperze",
    "explanation": "Kolibry, nektarniki i jemiołuszki to ptaki wspomniane przy zapylaniu lub rozsiewaniu nasion. Nietoperze są ssakami."
  },
  {
    "id": "R05_ZPT_07",
    "section": "Ptaki: różnorodność i znaczenie",
    "type": "fill_in",
    "prompt": "Bocian biały jesienią odlatuje z Europy do __________, a wiosną wraca zwykle do starego __________.",
    "options": null,
    "answer": [
      "Afryki",
      "gniazda"
    ],
    "altAnswers": [
      [
        "Afryki",
        "Afryka"
      ],
      [
        "gniazda",
        "gniazdo"
      ]
    ],
    "explanation": "Bocian biały zimuje w Afryce, a wiosną wraca do Europy, często do swojego starego gniazda."
  },
  {
    "id": "R05_ZPT_08",
    "section": "Ptaki: różnorodność i znaczenie",
    "type": "riddle",
    "prompt": "Jak nazywa się gatunek ptaka, który według rozdziału uszkadza owoce w sadach, na przykład czereśnie?",
    "options": null,
    "answer": "szpak",
    "altAnswers": [
      "szpak",
      "szpaki"
    ],
    "explanation": "W rozdziale wskazano szpaki jako ptaki, które uszkadzają owoce w sadach."
  },
  {
    "id": "R05_ZPT_09",
    "section": "Ptaki: różnorodność i znaczenie",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do znaczenia ptaków.",
    "options": null,
    "items": [
      "kury dostarczają jaj",
      "jemiołuszki rozsiewają nasiona",
      "jastrzębie atakują ptactwo domowe",
      "kormorany atakują ryby w stawach",
      "kolibry zapylają kwiaty"
    ],
    "categories": [
      "dla człowieka pozytywne",
      "w przyrodzie",
      "dla człowieka negatywne"
    ],
    "answer": {
      "dla człowieka pozytywne": [
        "kury dostarczają jaj"
      ],
      "w przyrodzie": [
        "jemiołuszki rozsiewają nasiona",
        "kolibry zapylają kwiaty"
      ],
      "dla człowieka negatywne": [
        "jastrzębie atakują ptactwo domowe",
        "kormorany atakują ryby w stawach"
      ]
    },
    "explanation": "Ptaki mogą pomagać człowiekowi, pełnić ważne funkcje w przyrodzie, ale część gatunków powoduje też straty gospodarcze."
  },
  {
    "id": "R05_ZPT_10",
    "section": "Ptaki: różnorodność i znaczenie",
    "type": "single_choice",
    "prompt": "Jaką prędkość podczas ucieczki może osiągać struś według rozdziału?",
    "options": [
      "około 70 km/godz.",
      "około 10 km/godz.",
      "około 30 km/godz.",
      "około 120 km/godz.",
      "około 2 km/godz.",
      "około 8 km/godz."
    ],
    "answer": 0,
    "explanation": "Strusie nie latają, ale podczas ucieczki przed drapieżnikiem mogą osiągać około 70 km/godz."
  },
  {
    "id": "R05_ZPT_11",
    "section": "Ptaki: różnorodność i znaczenie",
    "type": "sequence",
    "prompt": "Ułóż trasę sezonowej wędrówki bociana białego od jesieni do wiosny.",
    "options": null,
    "items": [
      "spędza zimę w Afryce",
      "odlatuje z Europy",
      "wraca do Europy",
      "rozmnaża się i wychowuje młode"
    ],
    "answer": [
      "odlatuje z Europy",
      "spędza zimę w Afryce",
      "wraca do Europy",
      "rozmnaża się i wychowuje młode"
    ],
    "explanation": "Jesienią bocian biały odlatuje z Europy do Afryki, tam zimuje, a wiosną wraca do Europy, gdzie się rozmnaża."
  },
  {
    "id": "R05_ZPT_12",
    "section": "Ptaki: różnorodność i znaczenie",
    "type": "true_false",
    "prompt": "Ptaki drapieżne mogą pomagać człowiekowi, ponieważ zjadają szkodniki pól uprawnych, sadów i lasów.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział podaje, że ptaki drapieżne zjadają między innymi owady, myszy i inne gryzonie, czyli organizmy szkodzące uprawom."
  },
  {
    "id": "R05_SSB_01",
    "section": "Ssaki: budowa i środowisko",
    "type": "single_choice",
    "prompt": "Od czego pochodzi nazwa ssaki?",
    "options": [
      "Od ssania mleka matki przez młode",
      "Od życia wyłącznie na lądzie",
      "Od posiadania skrzydeł",
      "Od składania twardych jaj",
      "Od braku kręgosłupa",
      "Od oddychania skrzelami"
    ],
    "answer": 0,
    "explanation": "Nazwa tej gromady kręgowców pochodzi od ssania, czyli sposobu pobierania mleka matki przez młode.",
    "image": "r05_srodowiska_ssakow.jpg"
  },
  {
    "id": "R05_SSB_02",
    "section": "Ssaki: budowa i środowisko",
    "type": "multi_select",
    "prompt": "Zaznacz elementy budowy lub funkcje skóry charakterystyczne dla ssaków opisane w rozdziale.",
    "options": [
      "Włosy wyrastające ze skóry",
      "Komórki wydzielające łój",
      "Komórki wydzielające pot",
      "Komórki wydzielające mleko",
      "Pióra pokrywające ciało",
      "Skrzydła z lotkami"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Skóra ssaków wytwarza włosy oraz zawiera komórki wydzielające łój, pot i mleko. Pióra oraz lotki dotyczą ptaków.",
    "image": "r05_budowa_ssaka.jpg"
  },
  {
    "id": "R05_SSB_03",
    "section": "Ssaki: budowa i środowisko",
    "type": "true_false",
    "prompt": "Ssaki, podobnie jak ptaki, są zwierzętami stałocieplnymi.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział podkreśla, że ssaki są stałocieplne, dlatego mogą żyć w różnych środowiskach na wszystkich kontynentach."
  },
  {
    "id": "R05_SSB_04",
    "section": "Ssaki: budowa i środowisko",
    "type": "sort",
    "prompt": "Przyporządkuj ssaki do środowiska lub sposobu życia.",
    "options": null,
    "items": [
      "jeleń",
      "małpa",
      "kret",
      "delfin",
      "nietoperz"
    ],
    "categories": [
      "naziemne",
      "w koronach drzew",
      "pod ziemią",
      "w wodzie",
      "aktywnie latające"
    ],
    "answer": {
      "naziemne": [
        "jeleń"
      ],
      "w koronach drzew": [
        "małpa"
      ],
      "pod ziemią": [
        "kret"
      ],
      "w wodzie": [
        "delfin"
      ],
      "aktywnie latające": [
        "nietoperz"
      ]
    },
    "explanation": "Rozdział podaje przykłady ssaków naziemnych, nadrzewnych, podziemnych, wodnych oraz aktywnie latających.",
    "image": "r05_srodowiska_ssakow.jpg"
  },
  {
    "id": "R05_SSB_05",
    "section": "Ssaki: budowa i środowisko",
    "type": "match",
    "prompt": "Połącz element budowy ssaka z funkcją.",
    "options": null,
    "left": [
      "włosy",
      "małżowina uszna",
      "pot",
      "łój",
      "tkanka tłuszczowa"
    ],
    "right": [
      "ochrona przed utratą ciepła",
      "wychwytywanie dźwięków",
      "ochładzanie ciała",
      "natłuszczanie skóry i włosów",
      "rezerwa energii i izolacja"
    ],
    "answer": {
      "włosy": "ochrona przed utratą ciepła",
      "małżowina uszna": "wychwytywanie dźwięków",
      "pot": "ochładzanie ciała",
      "łój": "natłuszczanie skóry i włosów",
      "tkanka tłuszczowa": "rezerwa energii i izolacja"
    },
    "explanation": "Włosy, małżowiny uszne i wydzieliny skóry pełnią u ssaków różne funkcje ochronne i regulacyjne.",
    "image": "r05_budowa_ssaka.jpg"
  },
  {
    "id": "R05_SSB_06",
    "section": "Ssaki: budowa i środowisko",
    "type": "fill_in",
    "prompt": "Narządem oddechowym ssaków są pęcherzykowate __________, a u większości ssaków w czasie ciąży rozwija się __________.",
    "options": null,
    "answer": [
      "płuca",
      "łożysko"
    ],
    "altAnswers": [
      [
        "płuca",
        "pluca"
      ],
      [
        "łożysko",
        "lozysko"
      ]
    ],
    "explanation": "Ssaki oddychają pęcherzykowatymi płucami, a u większości samic podczas ciąży powstaje łożysko."
  },
  {
    "id": "R05_SSB_07",
    "section": "Ssaki: budowa i środowisko",
    "type": "riddle",
    "prompt": "Jak nazywa się okres rozwoju ssaka od zapłodnienia do porodu?",
    "options": null,
    "answer": "ciąża",
    "altAnswers": [
      "ciąża",
      "ciaza"
    ],
    "explanation": "Okres od zapłodnienia do porodu nazywamy ciążą. Jej czas trwania zależy od gatunku."
  },
  {
    "id": "R05_SSB_08",
    "section": "Ssaki: budowa i środowisko",
    "type": "scenario",
    "prompt": "Zwierzę ma przednie kończyny przekształcone w płetwy i jest ssakiem żyjącym w wodzie. Która grupa z rozdziału najlepiej pasuje do tego opisu?",
    "options": [
      "ssaki wodne",
      "ptaki nielotne",
      "ssaki podziemne",
      "ptaki brodzące",
      "owady wodne",
      "ssaki nadrzewne"
    ],
    "answer": 0,
    "explanation": "Ssaki żyjące w wodzie mają kończyny przednie przekształcone w płetwy. Przykładami są delfiny i foki."
  },
  {
    "id": "R05_SSB_09",
    "section": "Ssaki: budowa i środowisko",
    "type": "true_false",
    "prompt": "Małżowina uszna występuje tylko u ssaków i ułatwia wychwytywanie dźwięków z otoczenia.",
    "options": null,
    "answer": true,
    "explanation": "W opisie budowy ssaków podano, że małżowina uszna jest cechą ssaków i pomaga odbierać dźwięki."
  },
  {
    "id": "R05_SSB_10",
    "section": "Ssaki: budowa i środowisko",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: pazury, paznokcie, kopyta, lotki.",
    "options": null,
    "answer": "lotki",
    "explanation": "Pazury, paznokcie i kopyta są wytworami skóry ssaków. Lotki są piórami ptaków."
  },
  {
    "id": "R05_SSB_11",
    "section": "Ssaki: budowa i środowisko",
    "type": "sequence",
    "prompt": "Ułóż kolejne etapy typowego rozmnażania ssaków żyworodnych.",
    "options": null,
    "items": [
      "poród",
      "ciąża",
      "zapłodnienie wewnętrzne",
      "karmienie młodych mlekiem"
    ],
    "answer": [
      "zapłodnienie wewnętrzne",
      "ciąża",
      "poród",
      "karmienie młodych mlekiem"
    ],
    "explanation": "U prawie wszystkich ssaków po zapłodnieniu wewnętrznym rozwój zachodzi w ciele samicy, kończy się porodem, a noworodki są karmione mlekiem."
  },
  {
    "id": "R05_SSB_12",
    "section": "Ssaki: budowa i środowisko",
    "type": "single_choice",
    "prompt": "Jaki jest największy ssak wodny i zarazem największy ssak na Ziemi według rozdziału?",
    "options": [
      "płetwal błękitny",
      "delfin",
      "foka",
      "słoń afrykański",
      "niedźwiedź polarny",
      "żubr"
    ],
    "answer": 0,
    "explanation": "W rozdziale podano, że największym ssakiem wodnym i zarazem największym ssakiem na Ziemi jest płetwal błękitny."
  },
  {
    "id": "R05_ZSS_01",
    "section": "Ssaki: odżywianie i znaczenie",
    "type": "single_choice",
    "prompt": "Co jest pierwszym pokarmem wszystkich ssaków?",
    "options": [
      "mleko matki",
      "nektar",
      "nasiona",
      "padlina",
      "liście",
      "dżdżownice"
    ],
    "answer": 0,
    "explanation": "Pierwszym pokarmem wszystkich ssaków jest mleko matki."
  },
  {
    "id": "R05_ZSS_02",
    "section": "Ssaki: odżywianie i znaczenie",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady pozytywnego znaczenia ssaków dla człowieka opisane w rozdziale.",
    "options": [
      "Dostarczają mięsa, mleka, skór i wełny",
      "Służą jako środek transportu",
      "Są używane w badaniach naukowych",
      "Zjadają niektóre szkodniki upraw",
      "Zawsze niszczą zapasy żywności",
      "Nie mają wpływu na człowieka"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Ssaki mogą być hodowane, wykorzystywane w transporcie i badaniach oraz mogą ograniczać liczebność szkodników."
  },
  {
    "id": "R05_ZSS_03",
    "section": "Ssaki: odżywianie i znaczenie",
    "type": "match",
    "prompt": "Połącz rodzaj zęba ssaka z funkcją.",
    "options": null,
    "left": [
      "siekacze",
      "kły",
      "zęby przedtrzonowe",
      "zęby trzonowe"
    ],
    "right": [
      "odcinanie części pokarmu",
      "chwytanie i zabijanie ofiary",
      "miażdżenie i rozcieranie pożywienia",
      "rozcieranie pożywienia"
    ],
    "answer": {
      "siekacze": "odcinanie części pokarmu",
      "kły": "chwytanie i zabijanie ofiary",
      "zęby przedtrzonowe": "miażdżenie i rozcieranie pożywienia",
      "zęby trzonowe": "rozcieranie pożywienia"
    },
    "explanation": "Siekacze odcinają pokarm, kły pomagają chwytać i zabijać ofiarę, a zęby przedtrzonowe i trzonowe rozdrabniają pożywienie.",
    "image": "r05_zeby_ssakow.jpg"
  },
  {
    "id": "R05_ZSS_04",
    "section": "Ssaki: odżywianie i znaczenie",
    "type": "true_false",
    "prompt": "Wśród dorosłych ssaków spotykamy głównie gatunki wszystkożerne.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział wskazuje, że wśród dorosłych ssaków najczęstsze są gatunki wszystkożerne, a mniej liczne są typowo roślinożerne i typowo mięsożerne."
  },
  {
    "id": "R05_ZSS_05",
    "section": "Ssaki: odżywianie i znaczenie",
    "type": "fill_in",
    "prompt": "Mrówkojady wyciągają mrówki lub termity za pomocą długiego lepkiego __________, a wieloryby odcedzają pokarm za pomocą __________.",
    "options": null,
    "answer": [
      "języka",
      "fiszbinów"
    ],
    "altAnswers": [
      [
        "języka",
        "jezyka"
      ],
      [
        "fiszbinów",
        "fiszbinow",
        "fiszbiny"
      ]
    ],
    "explanation": "Mrówkojady używają długiego, lepkiego języka, a niektóre wieloryby odcedzają drobne skorupiaki za pomocą fiszbinów."
  },
  {
    "id": "R05_ZSS_06",
    "section": "Ssaki: odżywianie i znaczenie",
    "type": "riddle",
    "prompt": "Jaki ssak opisany w rozdziale potrafi biec w pościgu za ofiarą z prędkością około 120 km/godz.?",
    "options": null,
    "answer": "gepard",
    "altAnswers": [
      "gepard"
    ],
    "explanation": "Gepard poluje na niewielkie ssaki i podczas pościgu potrafi osiągać około 120 km/godz."
  },
  {
    "id": "R05_ZSS_07",
    "section": "Ssaki: odżywianie i znaczenie",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do roli ssaków w przyrodzie.",
    "options": null,
    "items": [
      "wiewiórki gubią zapasy nasion",
      "sarny usuwają nasiona z kałem",
      "nietoperze odżywiające się nektarem zapylają kwiaty",
      "ssaki są pokarmem wielu drapieżników",
      "ssaki odżywiają się roślinami i zwierzętami"
    ],
    "categories": [
      "rozsiewanie nasion",
      "zapylanie kwiatów",
      "regulacja liczebności organizmów"
    ],
    "answer": {
      "rozsiewanie nasion": [
        "wiewiórki gubią zapasy nasion",
        "sarny usuwają nasiona z kałem"
      ],
      "zapylanie kwiatów": [
        "nietoperze odżywiające się nektarem zapylają kwiaty"
      ],
      "regulacja liczebności organizmów": [
        "ssaki są pokarmem wielu drapieżników",
        "ssaki odżywiają się roślinami i zwierzętami"
      ]
    },
    "explanation": "Ssaki wpływają na przyrodę przez zjadanie innych organizmów, bycie pokarmem, rozsiewanie nasion i zapylanie kwiatów.",
    "image": "r05_pokarm_i_rozsiewanie.jpg"
  },
  {
    "id": "R05_ZSS_08",
    "section": "Ssaki: odżywianie i znaczenie",
    "type": "scenario",
    "prompt": "Rolnik zauważa, że myszy niszczą jego zapasy żywności. Jak rozdział klasyfikuje takie działanie ssaków?",
    "options": [
      "jako negatywne znaczenie ssaków dla człowieka",
      "jako zapylanie kwiatów",
      "jako ochronę gatunkową",
      "jako rozmnażanie żyworodne",
      "jako pozytywne znaczenie ptaków",
      "jako przykład stałocieplności"
    ],
    "answer": 0,
    "explanation": "Niszczenie zapasów żywności przez myszy jest podane jako przykład szkód wyrządzanych przez ssaki."
  },
  {
    "id": "R05_ZSS_09",
    "section": "Ssaki: odżywianie i znaczenie",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: bydło domowe, świnie, kozy, sępy.",
    "options": null,
    "answer": "sępy",
    "explanation": "Bydło domowe, świnie i kozy to ssaki hodowane przez człowieka. Sępy są ptakami."
  },
  {
    "id": "R05_ZSS_10",
    "section": "Ssaki: odżywianie i znaczenie",
    "type": "single_choice",
    "prompt": "Które ssaki wymieniono w rozdziale jako przenoszące wirusa wścieklizny?",
    "options": [
      "lisy, borsuki, nietoperze, psy i koty",
      "kury, kaczki, gęsi i indyki",
      "wróble, szpaki i jastrzębie",
      "delfiny, foki i płetwale",
      "kolibry, nektarniki i jemiołuszki",
      "żurawie, pawie i altanniki"
    ],
    "answer": 0,
    "explanation": "Rozdział podaje, że wirusa wścieklizny mogą przenosić lisy, borsuki, nietoperze, psy i koty."
  },
  {
    "id": "R05_ZSS_11",
    "section": "Ssaki: odżywianie i znaczenie",
    "type": "sequence",
    "prompt": "Ułóż drogę nasiona rozsiewanego przez sarnę zgodnie z opisem w rozdziale.",
    "options": null,
    "items": [
      "nasiono zostaje usunięte z kałem",
      "sarna zjada owoc z nasionem",
      "nasiono trafia w nowe miejsce",
      "roślina może się rozprzestrzenić"
    ],
    "answer": [
      "sarna zjada owoc z nasionem",
      "nasiono zostaje usunięte z kałem",
      "nasiono trafia w nowe miejsce",
      "roślina może się rozprzestrzenić"
    ],
    "explanation": "Niektóre nasiona są zjadane przez ssaki, a potem usuwane z kałem w innym miejscu, co pomaga roślinom się rozsiewać."
  },
  {
    "id": "R05_ZSS_12",
    "section": "Ssaki: odżywianie i znaczenie",
    "type": "true_false",
    "prompt": "Niektóre wieloryby nie mają typowych zębów, lecz fiszbiny służące do odcedzania drobnych skorupiaków z wody.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział wyjaśnia, że u niektórych wielorybów fiszbiny zastępują zęby i umożliwiają odcedzanie drobnych morskich skorupiaków."
  },
  {
    "id": "R05_OCH_01",
    "section": "Ochrona zwierząt stałocieplnych",
    "type": "multi_select",
    "prompt": "Zaznacz działania człowieka zagrażające ptakom wymienione w rozdziale.",
    "options": [
      "Wycinka lasów i usuwanie zadrzewień śródpolnych",
      "Osuszanie terenów podmokłych",
      "Zanieczyszczanie gleby i zbiorników wodnych",
      "Połowy ryb sieciami groźnymi dla ptaków rybożernych",
      "Zakładanie skrzynek lęgowych",
      "Budowanie karmników zimą"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do zagrożeń dla ptaków należą między innymi niszczenie siedlisk, osuszanie terenów, zanieczyszczenia oraz sieci rybackie. Skrzynki lęgowe i karmniki pomagają ptakom."
  },
  {
    "id": "R05_OCH_02",
    "section": "Ochrona zwierząt stałocieplnych",
    "type": "true_false",
    "prompt": "Ropa naftowa niszczy pióra, przez co ptaki mogą mieć trudności z lataniem, zdobywaniem pożywienia i utrzymywaniem temperatury ciała.",
    "options": null,
    "answer": true,
    "explanation": "W rozdziale podkreślono, że ropa niszczy pióra i utrudnia ptakom podstawowe czynności życiowe."
  },
  {
    "id": "R05_OCH_03",
    "section": "Ochrona zwierząt stałocieplnych",
    "type": "single_choice",
    "prompt": "Które działanie jest sposobem ochrony ptaków opisanym w rozdziale?",
    "options": [
      "zakładanie skrzynek lęgowych",
      "zwiększanie liczby przezroczystych ekranów",
      "osuszanie łąk",
      "usuwanie zadrzewień",
      "zanieczyszczanie zbiorników",
      "budowa dróg przez siedliska"
    ],
    "answer": 0,
    "explanation": "Zakładanie skrzynek lęgowych i karmników jest wskazane jako działanie pomagające chronić ptaki.",
    "image": "r05_ochrona_zwierzat.jpg"
  },
  {
    "id": "R05_OCH_04",
    "section": "Ochrona zwierząt stałocieplnych",
    "type": "match",
    "prompt": "Połącz zagrożenie z grupą zwierząt, której dotyczy w rozdziale.",
    "options": null,
    "left": [
      "wycieki ropy naftowej",
      "drogi przecinające terytoria",
      "przezroczyste ekrany akustyczne",
      "rozbudowa miast niszcząca siedliska"
    ],
    "right": [
      "ptaki",
      "ssaki",
      "ptaki",
      "ssaki"
    ],
    "answer": {
      "wycieki ropy naftowej": "ptaki",
      "drogi przecinające terytoria": "ssaki",
      "przezroczyste ekrany akustyczne": "ptaki",
      "rozbudowa miast niszcząca siedliska": "ssaki"
    },
    "explanation": "Wycieki ropy i przezroczyste ekrany opisano przy zagrożeniach dla ptaków, a drogi rozdzielające terytoria i rozbudowę miast przy zagrożeniach dla ssaków."
  },
  {
    "id": "R05_OCH_05",
    "section": "Ochrona zwierząt stałocieplnych",
    "type": "fill_in",
    "prompt": "Jednym ze sposobów ochrony ssaków jest budowa bezpiecznych __________ przez drogi, które rozdzielają ich __________.",
    "options": null,
    "answer": [
      "przejść",
      "terytoria"
    ],
    "altAnswers": [
      [
        "przejść",
        "przejsc",
        "przejścia",
        "przejscia"
      ],
      [
        "terytoria",
        "terytorium"
      ]
    ],
    "explanation": "Bezpieczne przejścia przez drogi ułatwiają ssakom przemieszczanie się między częściami terytorium."
  },
  {
    "id": "R05_OCH_06",
    "section": "Ochrona zwierząt stałocieplnych",
    "type": "scenario",
    "prompt": "Zima jest wyjątkowo surowa, a zwierzętom brakuje pokarmu. Które działanie ochronne pojawia się w rozdziale zarówno przy ptakach, jak i ssakach?",
    "options": [
      "dokarmianie",
      "zwiększanie wycinki drzew",
      "osuszanie mokradeł",
      "zabieranie jaj z gniazd",
      "usuwanie skrzynek lęgowych",
      "przenoszenie wirusa wścieklizny"
    ],
    "answer": 0,
    "explanation": "Przy szczególnie surowych zimach rozdział wskazuje dokarmianie jako pomoc dla ptaków i ssaków."
  },
  {
    "id": "R05_OCH_07",
    "section": "Ochrona zwierząt stałocieplnych",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: ochrona siedlisk, przejścia dla zwierząt, ochrona gatunkowa, osuszanie łąk.",
    "options": null,
    "answer": "osuszanie łąk",
    "explanation": "Ochrona siedlisk, przejścia dla zwierząt i ochrona gatunkowa pomagają zwierzętom. Osuszanie łąk jest zagrożeniem, zwłaszcza dla ptaków."
  },
  {
    "id": "R05_OCH_08",
    "section": "Ochrona zwierząt stałocieplnych",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do kategorii.",
    "options": null,
    "items": [
      "zakładanie karmników",
      "ograniczanie wycinania drzew",
      "budowa przejść przez drogi",
      "objęcie niedźwiedzia brunatnego ochroną gatunkową",
      "wycieki ropy naftowej",
      "wycinanie lasów"
    ],
    "categories": [
      "ochrona ptaków",
      "ochrona ssaków",
      "zagrożenie"
    ],
    "answer": {
      "ochrona ptaków": [
        "zakładanie karmników",
        "ograniczanie wycinania drzew"
      ],
      "ochrona ssaków": [
        "budowa przejść przez drogi",
        "objęcie niedźwiedzia brunatnego ochroną gatunkową"
      ],
      "zagrożenie": [
        "wycieki ropy naftowej",
        "wycinanie lasów"
      ]
    },
    "explanation": "Karmniki i zachowanie zadrzewień pomagają ptakom, przejścia przez drogi i ochrona gatunkowa pomagają ssakom, a ropa i wycinanie lasów są zagrożeniami.",
    "image": "r05_ochrona_zwierzat.jpg"
  },
  {
    "id": "R05_OCH_09",
    "section": "Ochrona zwierząt stałocieplnych",
    "type": "riddle",
    "prompt": "Jak nazywa się forma ochrony obejmująca rzadkie lub zagrożone wyginięciem ptaki i ssaki?",
    "options": null,
    "answer": "ochrona gatunkowa",
    "altAnswers": [
      "ochrona gatunkowa",
      "gatunkowa"
    ],
    "explanation": "Rozdział wskazuje, że rzadkie lub zagrożone gatunki obejmuje się ochroną gatunkową."
  },
  {
    "id": "R05_OCH_10",
    "section": "Ochrona zwierząt stałocieplnych",
    "type": "single_choice",
    "prompt": "Co jest największym zagrożeniem dla ssaków według rozdziału?",
    "options": [
      "niszczenie obszarów ich występowania",
      "brak piór",
      "zbyt duża liczba skrzynek lęgowych",
      "odcedzanie pokarmu fiszbinami",
      "wysiadywanie jaj",
      "zapylanie kwiatów"
    ],
    "answer": 0,
    "explanation": "Największym zagrożeniem dla ssaków jest niszczenie miejsc, w których żyją, między innymi przez wycinanie lasów, osuszanie terenów i rozbudowę miast."
  },
  {
    "id": "R05_OCH_11",
    "section": "Ochrona zwierząt stałocieplnych",
    "type": "sequence",
    "prompt": "Ułóż ciąg przyczynowo-skutkowy dotyczący dróg i ssaków.",
    "options": null,
    "items": [
      "ssaki nie mogą swobodnie się przemieszczać",
      "część zwierząt ginie w zderzeniach z pojazdami",
      "drogi przecinają terytoria zwierząt",
      "człowiek buduje coraz więcej dróg"
    ],
    "answer": [
      "człowiek buduje coraz więcej dróg",
      "drogi przecinają terytoria zwierząt",
      "ssaki nie mogą swobodnie się przemieszczać",
      "część zwierząt ginie w zderzeniach z pojazdami"
    ],
    "explanation": "Coraz gęstsza sieć dróg dzieli terytoria ssaków, utrudnia im wędrówki i zwiększa ryzyko śmierci w zderzeniach z pojazdami."
  },
  {
    "id": "R05_OCH_12",
    "section": "Ochrona zwierząt stałocieplnych",
    "type": "true_false",
    "prompt": "Ochrona ptaków i ssaków polega między innymi na dbaniu o miejsca, w których te zwierzęta żyją.",
    "options": null,
    "answer": true,
    "explanation": "Podsumowanie rozdziału wskazuje ochronę miejsc występowania jako wspólny sposób ochrony ptaków i ssaków."
  },
  {
    "id": "R05_HARD_01",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Badacz śledzi trasę bociana białego lecącego z Europy do Afryki. Jaki zakres długości takiej drogi podaje rozdział?",
    "options": [
      "od 2 tys. do 10 tys. km",
      "od 20 km do 100 km",
      "od 70 km do 120 km",
      "od 7 km do 10 km",
      "od 46 cm do 90 cm",
      "od 1 m do 3 m"
    ],
    "answer": 0,
    "explanation": "Pod ilustracją z wędrówką bocianów podano, że w drodze do Afryki pokonują od 2 tys. do 10 tys. km."
  },
  {
    "id": "R05_HARD_02",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz część pióra z opisem budowy.",
    "options": null,
    "left": [
      "dutka",
      "stosina",
      "chorągiewka",
      "haczyki"
    ],
    "right": [
      "część osi znajdująca się w skórze",
      "pozostała część osi pióra",
      "część osadzona na osi pióra",
      "łączą promienie chorągiewki"
    ],
    "answer": {
      "dutka": "część osi znajdująca się w skórze",
      "stosina": "pozostała część osi pióra",
      "chorągiewka": "część osadzona na osi pióra",
      "haczyki": "łączą promienie chorągiewki"
    },
    "explanation": "Pióro składa się z osi i chorągiewki. Dutka tkwi w skórze, stosina jest pozostałą częścią osi, a haczyki łączą promienie chorągiewki.",
    "image": "r05_rodzaje_pior.jpg"
  },
  {
    "id": "R05_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "U samicy dziobaka w norze pojawia się od __________ do __________ jaj.",
    "options": null,
    "answer": [
      "jednego",
      "trzech"
    ],
    "altAnswers": [
      [
        "jednego",
        "1"
      ],
      [
        "trzech",
        "3"
      ]
    ],
    "explanation": "Dziobak jest ssakiem jajorodnym. Samica składa w norze od jednego do trzech jaj."
  },
  {
    "id": "R05_HARD_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz informacje o pingwinie cesarskim zgodne z tekstem w rozdziale.",
    "options": [
      "Samica składa w zimie jedno jajo",
      "Samiec ogrzewa jajo na stopach fałdem brzusznym",
      "Samiec pości podczas wysiadywania",
      "Samica wraca dopiero wtedy, gdy pisklę się wykluwa",
      "Samiec buduje altankę z muszli",
      "Pisklę od razu opuszcza gniazdo i jest całkowicie samodzielne"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Opis pingwina cesarskiego mówi o jednym jaju składanym zimą, wysiadywanym przez samca na stopach. Samiec pości, a samica wraca przy wykluwaniu pisklęcia."
  },
  {
    "id": "R05_HARD_05",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: żubr, ryjówka, zając szarak, nektarnik.",
    "options": null,
    "answer": "nektarnik",
    "explanation": "Żubr, ryjówka i zając szarak pojawiają się wśród rekordzistów ssaków Polski. Nektarnik jest ptakiem odżywiającym się nektarem."
  },
  {
    "id": "R05_HARD_06",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż rekordy ssaków Polski od dotyczącego najmniejszego zwierzęcia do dotyczącego najszybszego biegu.",
    "options": null,
    "items": [
      "zając szarak do 80 km/godz.",
      "ryjówka od 7 cm do 10 cm",
      "kozica skok około 8 m",
      "żubr do 2 m wysokości i tony masy"
    ],
    "answer": [
      "ryjówka od 7 cm do 10 cm",
      "żubr do 2 m wysokości i tony masy",
      "kozica skok około 8 m",
      "zając szarak do 80 km/godz."
    ],
    "explanation": "Ryjówka jest najmniejsza, żubr najpotężniejszy, kozica jest najlepszym skoczkiem, a zając szarak najszybszym ssakiem Polski według podanych rekordów."
  },
  {
    "id": "R05_HARD_07",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Dziobaki to ssaki jajorodne zamieszkujące rzeki, stawy i jeziora Australii.",
    "options": null,
    "answer": true,
    "explanation": "W tekście dodatkowym podano, że dziobaki są ssakami jajorodnymi wodno-lądowymi żyjącymi w Australii."
  },
  {
    "id": "R05_HARD_08",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz grupę ssaków z cechą uzębienia opisaną w rozdziale.",
    "options": null,
    "left": [
      "ssaki drapieżne",
      "ssaki roślinożerne",
      "mrówkojady",
      "niektóre wieloryby"
    ],
    "right": [
      "duże i silne kły",
      "niewielkie kły lub ich brak",
      "brak zębów i lepki język",
      "fiszbin zamiast zębów"
    ],
    "answer": {
      "ssaki drapieżne": "duże i silne kły",
      "ssaki roślinożerne": "niewielkie kły lub ich brak",
      "mrówkojady": "brak zębów i lepki język",
      "niektóre wieloryby": "fiszbin zamiast zębów"
    },
    "explanation": "Różne ssaki mają uzębienie i narządy pobierania pokarmu dopasowane do diety: drapieżniki mają silne kły, roślinożerne szerokie zęby, mrówkojady lepki język, a część wielorybów fiszbiny.",
    "image": "r05_zeby_ssakow.jpg"
  },
  {
    "id": "R05_HARD_09",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się narząd powstający u samic większości ssaków w czasie ciąży i umożliwiający wymianę substancji między matką a rozwijającym się organizmem?",
    "options": null,
    "answer": "łożysko",
    "altAnswers": [
      "łożysko",
      "lozysko"
    ],
    "explanation": "Łożysko dostarcza rozwijającemu się organizmowi między innymi tlen i składniki odżywcze oraz umożliwia wymianę substancji z matką."
  },
  {
    "id": "R05_HARD_10",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj rekordy i dane liczbowe do zwierząt.",
    "options": null,
    "items": [
      "wysokość do 2 m i masa do tony",
      "długość od 7 cm do 10 cm",
      "prędkość do 80 km/godz.",
      "skok około 8 m"
    ],
    "categories": [
      "żubr",
      "ryjówka",
      "zając szarak",
      "kozica"
    ],
    "answer": {
      "żubr": [
        "wysokość do 2 m i masa do tony"
      ],
      "ryjówka": [
        "długość od 7 cm do 10 cm"
      ],
      "zając szarak": [
        "prędkość do 80 km/godz."
      ],
      "kozica": [
        "skok około 8 m"
      ]
    },
    "explanation": "Wśród rekordzistów ssaków Polski rozdział wymienia żubra, ryjówkę, zająca szaraka i kozicę z tymi właśnie wartościami."
  },
  {
    "id": "R05_HARD_11",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W gnieździe są ślepe i prawie nagie pisklęta, które długo wymagają karmienia i ogrzewania przez rodziców. Do której grupy należy je zaliczyć?",
    "options": [
      "gniazdowniki",
      "zagniazdowniki",
      "ssaki jajorodne",
      "ptaki brodzące",
      "ssaki aktywnie latające",
      "padlinożercy"
    ],
    "answer": 0,
    "explanation": "Gniazdowniki po wykluciu są bezradne i długo pozostają w gnieździe pod opieką rodziców."
  },
  {
    "id": "R05_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz pary organizm i rola zgodne z podsumowaniem rozdziału.",
    "options": [
      "kolibry biorą udział w zapylaniu kwiatów",
      "niektóre nietoperze biorą udział w zapylaniu kwiatów",
      "jemiołuszki przyczyniają się do rozsiewania nasion",
      "wiewiórki przyczyniają się do rozsiewania nasion",
      "foki zapylają kwiaty nektarem",
      "sępy karmią młode mlekiem"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Podsumowanie wskazuje, że kolibry i niektóre nietoperze zapylają kwiaty, a jemiołuszki i wiewiórki pomagają rozsiewać nasiona.",
    "image": "r05_pokarm_i_rozsiewanie.jpg"
  }
];

const KID_PROMPTS = {
  "R05_PTL_02": "Które cechy pomagają ptakom latać?",
  "R05_PTL_04": "Połącz pióra z tym, do czego służą.",
  "R05_ZPT_02": "Połącz ptaka z jego dziobem lub pokarmem.",
  "R05_ZPT_07": "Dokąd bocian odlatuje zimą i do czego wraca wiosną?",
  "R05_SSB_01": "Dlaczego ssaki nazywamy ssakami?",
  "R05_SSB_05": "Połącz część ciała ssaka z jej zadaniem.",
  "R05_ZSS_03": "Połącz zęby ssaka z ich zadaniem.",
  "R05_ZSS_07": "Jak ssaki pomagają roślinom i innym organizmom?",
  "R05_OCH_03": "Co pomaga chronić ptaki?",
  "R05_OCH_10": "Co najbardziej zagraża ssakom?",
  "R05_HARD_02": "Połącz części pióra z opisami.",
  "R05_HARD_09": "Jaki narząd pomaga młodemu ssakowi rozwijać się w ciele matki?"
};

const chapter = {
  "id": "r05",
  "number": 5,
  "title": "Kręgowce stałocieplne",
  "icon": "🦅",
  "sectionOrder": [
    "Ptaki: budowa i lot",
    "Ptaki: różnorodność i znaczenie",
    "Ssaki: budowa i środowisko",
    "Ssaki: odżywianie i znaczenie",
    "Ochrona zwierząt stałocieplnych"
  ],
  "sectionIcons": {
    "Ptaki: budowa i lot": "🪽",
    "Ptaki: różnorodność i znaczenie": "🐦",
    "Ssaki: budowa i środowisko": "🦊",
    "Ssaki: odżywianie i znaczenie": "🐾",
    "Ochrona zwierząt stałocieplnych": "🌿"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
