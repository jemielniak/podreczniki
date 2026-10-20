// Skróty sekcji (do identyfikatorów ćwiczeń):
//   TKAN = Tkanki roślinne
//   MSPA = Mchy i paprotniki
//   NAGO = Rośliny nagonasienne
//   ORGA = Korzenie, łodygi i liście
//   ROZM = Kwiaty, owoce i nasiona
//   GRZY = Grzyby i porosty
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R03_TKAN_01",
    "section": "Tkanki roślinne",
    "type": "single_choice",
    "prompt": "Która tkanka umożliwia roślinie wzrost na długość?",
    "options": [
      "Merystem wierzchołkowy",
      "Korek",
      "Sklerenchyma",
      "Łyko",
      "Miękisz spichrzowy",
      "Miazga korkotwórcza"
    ],
    "answer": 0,
    "image": "r03_merystem_wierzcholkowy.jpg",
    "explanation": "Stożki wzrostu korzenia i łodygi są merystemami pierwotnymi; ich komórki dzielą się, umożliwiając wydłużanie organów."
  },
  {
    "id": "R03_TKAN_02",
    "section": "Tkanki roślinne",
    "type": "multi_select",
    "prompt": "Zaznacz tkanki zaliczane do żywych.",
    "options": [
      "Kolenchyma",
      "Łyko",
      "Epiderma",
      "Korek",
      "Sklerenchyma",
      "Drewno"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Kolenchyma, łyko i epiderma zawierają żywe komórki. Korek, sklerenchyma i elementy przewodzące drewna są martwe w dojrzałej postaci."
  },
  {
    "id": "R03_TKAN_03",
    "section": "Tkanki roślinne",
    "type": "true_false",
    "prompt": "Korek jest martwą tkanką okrywającą, a wymiana gazowa starszych części rośliny odbywa się przez przetchlinki.",
    "options": null,
    "answer": true,
    "explanation": "Korek składa się ze ściśle przylegających martwych komórek; luźniej ułożone komórki przetchlinek pozwalają na wymianę gazową."
  },
  {
    "id": "R03_TKAN_04",
    "section": "Tkanki roślinne",
    "type": "fill_in",
    "prompt": "Kambium wytwarza na zewnątrz __________, a do wewnątrz __________.",
    "options": null,
    "answer": [
      "łyko wtórne",
      "drewno wtórne"
    ],
    "altAnswers": [
      [
        "łyko wtórne",
        "lyko wtorne"
      ],
      [
        "drewno wtórne",
        "drewno wtorne"
      ]
    ],
    "explanation": "Miazga (kambium) odpowiada za przyrost na grubość: odkłada łyko wtórne na zewnątrz i drewno wtórne do wewnątrz."
  },
  {
    "id": "R03_TKAN_05",
    "section": "Tkanki roślinne",
    "type": "riddle",
    "prompt": "Jak nazywa się skórka korzenia, której wytworami są włośniki?",
    "options": null,
    "answer": "ryzoderma",
    "altAnswers": [
      "ryzoderma",
      "skórka korzenia",
      "skorka korzenia"
    ],
    "explanation": "Ryzoderma okrywa korzeń, a jej włośniki zwiększają powierzchnię pobierania wody i soli mineralnych."
  },
  {
    "id": "R03_TKAN_06",
    "section": "Tkanki roślinne",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie należy do przykładów tkanek wydzielniczych: miodniki, kanały żywiczne, włoski parzące, naczynia.",
    "options": null,
    "answer": "naczynia",
    "explanation": "Naczynia są elementami drewna, natomiast miodniki, kanały żywiczne i włoski parzące zaliczono do struktur wydzielniczych."
  },
  {
    "id": "R03_TKAN_07",
    "section": "Tkanki roślinne",
    "type": "scenario",
    "prompt": "W czasie suszy komórki przyszparkowe tracą wodę i stają się wiotkie. Co dzieje się wtedy z aparatem szparkowym?",
    "options": [
      "Zamyka się",
      "Otwiera się szerzej",
      "Zamienia się w przetchlinkę",
      "Tworzy włośniki"
    ],
    "answer": 0,
    "image": "r03_aparat_szparkowy.jpg",
    "explanation": "Otwarcie szparki zależy od turgoru komórek przyszparkowych. Utrata wody powoduje zamknięcie aparatu i ograniczenie transpiracji."
  },
  {
    "id": "R03_TKAN_08",
    "section": "Tkanki roślinne",
    "type": "match",
    "prompt": "Połącz rodzaj miękiszu z jego główną funkcją.",
    "options": null,
    "left": [
      "Miękisz asymilacyjny",
      "Miękisz spichrzowy",
      "Miękisz powietrzny",
      "Miękisz zasadniczy"
    ],
    "right": [
      "Wypełnianie przestrzeni między tkankami",
      "Ułatwianie wymiany gazowej",
      "Gromadzenie substancji zapasowych",
      "Fotosynteza"
    ],
    "answer": {
      "Miękisz asymilacyjny": "Fotosynteza",
      "Miękisz spichrzowy": "Gromadzenie substancji zapasowych",
      "Miękisz powietrzny": "Ułatwianie wymiany gazowej",
      "Miękisz zasadniczy": "Wypełnianie przestrzeni między tkankami"
    },
    "image": "r03_przekroj_liscia.jpg",
    "explanation": "Miękisz asymilacyjny zawiera chloroplasty, spichrzowy gromadzi zapasy, powietrzny ma duże przestwory, a zasadniczy wypełnia przestrzenie."
  },
  {
    "id": "R03_TKAN_09",
    "section": "Tkanki roślinne",
    "type": "sort",
    "prompt": "Przyporządkuj tkanki do grupy żywych lub martwych.",
    "options": null,
    "items": [
      "Kolenchyma",
      "Łyko",
      "Korek",
      "Ryzoderma",
      "Sklerenchyma",
      "Drewno"
    ],
    "categories": [
      "Żywe",
      "Martwe"
    ],
    "answer": {
      "Żywe": [
        "Kolenchyma",
        "Ryzoderma",
        "Łyko"
      ],
      "Martwe": [
        "Sklerenchyma",
        "Korek",
        "Drewno"
      ]
    },
    "explanation": "Kolenchyma, ryzoderma i łyko należą do tkanek żywych, a sklerenchyma, korek i elementy przewodzące drewna – do martwych."
  },
  {
    "id": "R03_TKAN_10",
    "section": "Tkanki roślinne",
    "type": "sequence",
    "prompt": "Ułóż etapy prowadzące do powstania wtórnej tkanki twórczej.",
    "options": null,
    "items": [
      "Komórka stała odzyskuje zdolność podziałów",
      "Powstaje merystem wtórny",
      "Komórka merystemu pierwotnego dzieli się",
      "Powstaje komórka tkanki stałej"
    ],
    "answer": [
      "Komórka merystemu pierwotnego dzieli się",
      "Powstaje komórka tkanki stałej",
      "Komórka stała odzyskuje zdolność podziałów",
      "Powstaje merystem wtórny"
    ],
    "explanation": "Część komórek merystemów pierwotnych staje się tkankami stałymi, a niektóre komórki stałe mogą ponownie zacząć się dzielić."
  },
  {
    "id": "R03_TKAN_11",
    "section": "Tkanki roślinne",
    "type": "single_choice",
    "prompt": "Która tkanka przewodzi wodę i sole mineralne od korzenia w kierunku liści?",
    "options": [
      "Drewno (ksylem)",
      "Łyko (floem)",
      "Kolenchyma",
      "Epiderma",
      "Korek",
      "Miękisz spichrzowy"
    ],
    "answer": 0,
    "explanation": "Drewno (ksylem) transportuje wodę z solami mineralnymi, podczas gdy łyko przewodzi produkty fotosyntezy."
  },
  {
    "id": "R03_MSPA_01",
    "section": "Mchy i paprotniki",
    "type": "single_choice",
    "prompt": "Które pokolenie dominuje w cyklu rozwojowym mchów?",
    "options": [
      "Gametofit",
      "Sporofit",
      "Zarodnik",
      "Zygota",
      "Zarodnia",
      "Przedrośle"
    ],
    "answer": 0,
    "image": "r03_budowa_mchu.jpg",
    "explanation": "Ulistniona łodyżka mchu jest haploidalnym gametofitem; sporofit zależy od niego."
  },
  {
    "id": "R03_MSPA_02",
    "section": "Mchy i paprotniki",
    "type": "match",
    "prompt": "Dopasuj element mchu do jego roli.",
    "options": null,
    "left": [
      "Chwytniki",
      "Zielone listki",
      "Zarodnia",
      "Splątek"
    ],
    "right": [
      "Młodociana postać gametofitu",
      "Wytwarzanie zarodników",
      "Fotosynteza",
      "Przytwierdzanie do podłoża"
    ],
    "answer": {
      "Chwytniki": "Przytwierdzanie do podłoża",
      "Zielone listki": "Fotosynteza",
      "Zarodnia": "Wytwarzanie zarodników",
      "Splątek": "Młodociana postać gametofitu"
    },
    "image": "r03_budowa_mchu.jpg",
    "explanation": "Chwytniki utrzymują mech w podłożu, listki fotosyntetyzują, zarodnia wytwarza zarodniki, a ze splątka rozwija się gametofit."
  },
  {
    "id": "R03_MSPA_03",
    "section": "Mchy i paprotniki",
    "type": "true_false",
    "prompt": "Mchy mają dobrze rozwinięte tkanki przewodzące i należą do roślin naczyniowych.",
    "options": null,
    "answer": false,
    "explanation": "Tkanki mchów są słabo wykształcone; do roślin naczyniowych należą paprotniki i rośliny nasienne."
  },
  {
    "id": "R03_MSPA_04",
    "section": "Mchy i paprotniki",
    "type": "fill_in",
    "prompt": "U mchów haploidalna ulistniona łodyżka to __________, a bezlistna łodyżka z zarodnią to __________.",
    "options": null,
    "answer": [
      "gametofit",
      "sporofit"
    ],
    "altAnswers": [
      [
        "gametofit"
      ],
      [
        "sporofit"
      ]
    ],
    "explanation": "Gametofit mchu ma pojedynczy zestaw chromosomów (1n), a sporofit podwójny (2n)."
  },
  {
    "id": "R03_MSPA_05",
    "section": "Mchy i paprotniki",
    "type": "scenario",
    "prompt": "Uczeń ogląda liść paproci i zauważa zarodnie na jego spodniej stronie. Jaka jest główna funkcja tych struktur?",
    "options": [
      "Wytwarzanie zarodników",
      "Pobieranie soli z gleby",
      "Magazynowanie żywicy",
      "Wytwarzanie nasion"
    ],
    "answer": 0,
    "explanation": "W zarodniach paproci powstają haploidalne zarodniki, z których rozwijają się gametofity."
  },
  {
    "id": "R03_MSPA_06",
    "section": "Mchy i paprotniki",
    "type": "odd_one_out",
    "prompt": "Wskaż roślinę spoza grup paprotników: paproć, skrzyp, widłak, sosna.",
    "options": null,
    "answer": "sosna",
    "explanation": "Paprocie, skrzypy i widłaki należą do paprotników; sosna jest rośliną nagonasienną."
  },
  {
    "id": "R03_MSPA_07",
    "section": "Mchy i paprotniki",
    "type": "multi_select",
    "prompt": "Wybierz funkcje lub znaczenie mchów.",
    "options": [
      "Magazynują wodę",
      "Zapobiegają erozji gleb",
      "Są roślinami pionierskimi",
      "Tworzą kwiaty i owoce",
      "Wytwarzają nasiona w szyszkach"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Mchy mogą zatrzymywać wodę, chronić glebę przed erozją i przygotowywać podłoże dla innych roślin."
  },
  {
    "id": "R03_MSPA_08",
    "section": "Mchy i paprotniki",
    "type": "single_choice",
    "prompt": "Jakie pokolenie jest dominującą zieloną rośliną u paprotników?",
    "options": [
      "Sporofit",
      "Gametofit",
      "Zarodnik",
      "Plemnik",
      "Zygota",
      "Komórka jajowa"
    ],
    "answer": 0,
    "explanation": "U paprotników dominuje diploidalny sporofit, a gametofit rozwija się z zarodnika w przedrośle."
  },
  {
    "id": "R03_MSPA_09",
    "section": "Mchy i paprotniki",
    "type": "sequence",
    "prompt": "Ułóż etapy rozwoju paproci w kolejności od zarodnika.",
    "options": null,
    "items": [
      "Zapłodnienie w obecności wody",
      "Młody sporofit",
      "Haploidalny zarodnik",
      "Przedrośle z rodniami i plemniami"
    ],
    "answer": [
      "Haploidalny zarodnik",
      "Przedrośle z rodniami i plemniami",
      "Zapłodnienie w obecności wody",
      "Młody sporofit"
    ],
    "explanation": "Zarodnik rozwija się w przedrośle; na nim powstają gamety, a po zapłodnieniu z zygoty wyrasta sporofit."
  },
  {
    "id": "R03_MSPA_10",
    "section": "Mchy i paprotniki",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do mchów lub paprotników.",
    "options": null,
    "items": [
      "Dominacja gametofitu",
      "Splątek jako stadium młodociane",
      "Wykształcone korzenie i łodygi",
      "Chwytniki zamiast typowych korzeni",
      "Dominacja sporofitu",
      "Gametofit w postaci przedrośla"
    ],
    "categories": [
      "Mchy",
      "Paprotniki"
    ],
    "answer": {
      "Mchy": [
        "Dominacja gametofitu",
        "Chwytniki zamiast typowych korzeni",
        "Splątek jako stadium młodociane"
      ],
      "Paprotniki": [
        "Dominacja sporofitu",
        "Wykształcone korzenie i łodygi",
        "Gametofit w postaci przedrośla"
      ]
    },
    "explanation": "Gametofit dominuje u mchów, których młodocianą postacią jest splątek. Paprotniki mają organy i dominujący sporofit."
  },
  {
    "id": "R03_NAGO_01",
    "section": "Rośliny nagonasienne",
    "type": "single_choice",
    "prompt": "Czego nie wytwarzają rośliny nagonasienne?",
    "options": [
      "Owoców",
      "Nasion",
      "Kwiatów",
      "Zalążków",
      "Ziaren pyłku",
      "Korzeni"
    ],
    "answer": 0,
    "explanation": "Nagonasienne mają kwiaty i nasiona, ale nie tworzą owoców. Nasiona rozwijają się między innymi w szyszkach."
  },
  {
    "id": "R03_NAGO_02",
    "section": "Rośliny nagonasienne",
    "type": "multi_select",
    "prompt": "Wybierz przystosowania nagonasiennych do życia na lądzie.",
    "options": [
      "Gruba skórka igieł z warstwą wosku",
      "Odporne nasiona",
      "Tkanki przewodzące",
      "Zapłodnienie wymagające wody stojącej",
      "Brak korzeni"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Woskowa osłona igieł ogranicza utratę wody, odporne nasiona pomagają przetrwać niekorzystne warunki, a tkanki przewodzące umożliwiają transport na duże odległości."
  },
  {
    "id": "R03_NAGO_03",
    "section": "Rośliny nagonasienne",
    "type": "true_false",
    "prompt": "Modrzew europejski co roku zrzuca igły, w przeciwieństwie do wielu innych drzew iglastych.",
    "options": null,
    "answer": true,
    "explanation": "W odróżnieniu od wielu zimozielonych iglastych modrzew gubi igły każdego roku."
  },
  {
    "id": "R03_NAGO_04",
    "section": "Rośliny nagonasienne",
    "type": "fill_in",
    "prompt": "Po zapłodnieniu zalążek sosny przekształca się w __________.",
    "options": null,
    "answer": [
      "nasiono"
    ],
    "image": "r03_szyszki_sosny.jpg",
    "altAnswers": [
      [
        "nasiono",
        "nasienie"
      ]
    ],
    "explanation": "U sosny zalążek rozwija się w nasiono, a żeńska szyszka w czasie dojrzewania nasion rośnie i drewnieje."
  },
  {
    "id": "R03_NAGO_05",
    "section": "Rośliny nagonasienne",
    "type": "odd_one_out",
    "prompt": "Wskaż roślinę, która nie jest nagonasienna: sosna, cis, jałowiec, pomidor.",
    "options": null,
    "answer": "pomidor",
    "explanation": "Pomidor jest rośliną okrytonasienną, a sosna, cis i jałowiec należą do nagonasiennych."
  },
  {
    "id": "R03_NAGO_06",
    "section": "Rośliny nagonasienne",
    "type": "scenario",
    "prompt": "Na korze sosny powstało skaleczenie i wydostała się lepka substancja, która je zasklepia. Co to za substancja?",
    "options": [
      "Żywica",
      "Nektar",
      "Skrobia",
      "Bielmo"
    ],
    "answer": 0,
    "explanation": "Kanały żywiczne w pniu sosny wydzielają żywicę, która zabezpiecza uszkodzenia."
  },
  {
    "id": "R03_NAGO_07",
    "section": "Rośliny nagonasienne",
    "type": "match",
    "prompt": "Połącz część sosny z opisaną rolą.",
    "options": null,
    "left": [
      "Igły",
      "Ziarno pyłku",
      "Szyszka żeńska",
      "Żywica"
    ],
    "right": [
      "Zasklepianie uszkodzeń",
      "Dojrzewanie nasion",
      "Gametofit męski",
      "Ograniczanie utraty wody i fotosynteza"
    ],
    "answer": {
      "Igły": "Ograniczanie utraty wody i fotosynteza",
      "Ziarno pyłku": "Gametofit męski",
      "Szyszka żeńska": "Dojrzewanie nasion",
      "Żywica": "Zasklepianie uszkodzeń"
    },
    "image": "r03_szyszki_sosny.jpg",
    "explanation": "Igły ograniczają transpirację, pyłek pełni rolę gametofitu męskiego, szyszki żeńskie osłaniają dojrzewające nasiona, a żywica zamyka rany."
  },
  {
    "id": "R03_NAGO_08",
    "section": "Rośliny nagonasienne",
    "type": "sequence",
    "prompt": "Ułóż etapy rozmnażania sosny od przeniesienia pyłku przez wiatr.",
    "options": null,
    "items": [
      "Przekształcenie zalążka w nasiono",
      "Wysypanie dojrzałych nasion z szyszki",
      "Przeniesienie ziarna pyłku na zalążek",
      "Zapłodnienie"
    ],
    "answer": [
      "Przeniesienie ziarna pyłku na zalążek",
      "Zapłodnienie",
      "Przekształcenie zalążka w nasiono",
      "Wysypanie dojrzałych nasion z szyszki"
    ],
    "explanation": "U sosny pyłek przenosi wiatr; po zapłodnieniu zalążki stają się nasionami, które wypadają z dojrzałych szyszek."
  },
  {
    "id": "R03_NAGO_09",
    "section": "Rośliny nagonasienne",
    "type": "riddle",
    "prompt": "Jak nazywa się przenoszenie przez wiatr dojrzałych nasion sosny?",
    "options": null,
    "answer": "wiatrosiewność",
    "altAnswers": [
      "wiatrosiewność",
      "wiatrosiewnosc"
    ],
    "explanation": "Wiatrosiewność oznacza rozsiewanie nasion przez wiatr; wiatropylność dotyczy transportu pyłku."
  },
  {
    "id": "R03_NAGO_10",
    "section": "Rośliny nagonasienne",
    "type": "single_choice",
    "prompt": "Ile igieł wyrasta u sosny pospolitej z jednego miejsca?",
    "options": [
      "Dwie",
      "Jedna",
      "Trzy",
      "Cztery",
      "Pięć"
    ],
    "answer": 0,
    "explanation": "Opis sosny pospolitej podaje po dwie igły wyrastające z jednego miejsca, co służy rozpoznawaniu gatunku."
  },
  {
    "id": "R03_ORGA_01",
    "section": "Korzenie, łodygi i liście",
    "type": "single_choice",
    "prompt": "Który system korzeniowy ma jeden wyraźny korzeń główny i korzenie boczne?",
    "options": [
      "Palowy",
      "Wiązkowy",
      "Przybyszowy",
      "Powietrzny",
      "Podporowy"
    ],
    "answer": 0,
    "image": "r03_systemy_korzeniowe.jpg",
    "explanation": "System palowy składa się z korzenia głównego i korzeni bocznych; jest typowy dla wielu roślin dwuliściennych."
  },
  {
    "id": "R03_ORGA_02",
    "section": "Korzenie, łodygi i liście",
    "type": "sort",
    "prompt": "Dopasuj przykłady modyfikacji do organów.",
    "options": null,
    "items": [
      "Korzenie czepne pnączy",
      "Korzenie spichrzowe marchwi",
      "Rozłogi truskawki",
      "Korzenie podporowe kukurydzy",
      "Bulwy ziemniaka",
      "Kłącza perzu"
    ],
    "categories": [
      "Korzenie",
      "Łodygi"
    ],
    "answer": {
      "Korzenie": [
        "Korzenie czepne pnączy",
        "Korzenie podporowe kukurydzy",
        "Korzenie spichrzowe marchwi"
      ],
      "Łodygi": [
        "Bulwy ziemniaka",
        "Rozłogi truskawki",
        "Kłącza perzu"
      ]
    },
    "explanation": "Marchew, kukurydza i pnącza mogą tworzyć wyspecjalizowane korzenie; bulwy, rozłogi i kłącza w podanych przykładach są modyfikacjami pędów lub łodyg."
  },
  {
    "id": "R03_ORGA_03",
    "section": "Korzenie, łodygi i liście",
    "type": "fill_in",
    "prompt": "Stożek wzrostu korzenia jest osłonięty __________, która chroni dzielące się komórki.",
    "options": null,
    "answer": [
      "czapeczką"
    ],
    "altAnswers": [
      [
        "czapeczką",
        "czapeczka"
      ]
    ],
    "explanation": "Czapeczka osłania komórki merystemu wierzchołkowego na szczycie korzenia."
  },
  {
    "id": "R03_ORGA_04",
    "section": "Korzenie, łodygi i liście",
    "type": "match",
    "prompt": "Połącz zmodyfikowany korzeń z jego funkcją.",
    "options": null,
    "left": [
      "Korzenie spichrzowe",
      "Korzenie podporowe",
      "Korzenie powietrzne",
      "Korzenie czepne"
    ],
    "right": [
      "Przyczepianie do pni i gałęzi",
      "Pobieranie pary wodnej z powietrza",
      "Ochrona przed przewróceniem",
      "Gromadzenie substancji zapasowych"
    ],
    "answer": {
      "Korzenie spichrzowe": "Gromadzenie substancji zapasowych",
      "Korzenie podporowe": "Ochrona przed przewróceniem",
      "Korzenie powietrzne": "Pobieranie pary wodnej z powietrza",
      "Korzenie czepne": "Przyczepianie do pni i gałęzi"
    },
    "image": "r03_modyfikacje_korzeni.jpg",
    "explanation": "Poszczególne modyfikacje korzeni mogą magazynować pokarm, podpierać roślinę, wchłaniać wilgoć z powietrza lub umożliwiać wspinanie."
  },
  {
    "id": "R03_ORGA_05",
    "section": "Korzenie, łodygi i liście",
    "type": "scenario",
    "prompt": "Kukurydza rośnie na miękkiej glebie i tworzy korzenie wyrastające nad ziemią, które chronią ją przed przewróceniem. Jakie to korzenie?",
    "options": [
      "Podporowe",
      "Spichrzowe",
      "Kurczliwe",
      "Asymilacyjne"
    ],
    "answer": 0,
    "explanation": "Kukurydza może wytwarzać korzenie podporowe stabilizujące roślinę."
  },
  {
    "id": "R03_ORGA_06",
    "section": "Korzenie, łodygi i liście",
    "type": "true_false",
    "prompt": "W łodydze roślin dwuliściennych wiązki przewodzące są zwykle rozrzucone na całym przekroju, a u jednoliściennych ułożone w pierścień.",
    "options": null,
    "answer": false,
    "explanation": "U dwuliściennych wiązki przewodzące zwykle tworzą pierścień, a u jednoliściennych są rozproszone."
  },
  {
    "id": "R03_ORGA_07",
    "section": "Korzenie, łodygi i liście",
    "type": "odd_one_out",
    "prompt": "Wskaż strukturę, która nie jest modyfikacją łodygi: bulwa ziemniaka, kłącze perzu, rozłóg truskawki, baldach wiśni.",
    "options": null,
    "answer": "baldach wiśni",
    "explanation": "Baldach jest typem kwiatostanu, natomiast bulwa, kłącze i rozłóg są modyfikacjami łodygi."
  },
  {
    "id": "R03_ORGA_08",
    "section": "Korzenie, łodygi i liście",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe cechy łodygi.",
    "options": [
      "Węzły są miejscami osadzenia liści",
      "Międzywęźla leżą między węzłami",
      "W pąku wierzchołkowym znajduje się stożek wzrostu",
      "Łodyga nie zawiera tkanek przewodzących",
      "Wszystkie łodygi są zdrewniałe"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r03_budowa_lodygi.jpg",
    "explanation": "Na łodydze wyróżnia się węzły, międzywęźla i pąk wierzchołkowy ze stożkiem wzrostu. Łodygi przewodzą substancje i mogą być zielne lub zdrewniałe."
  },
  {
    "id": "R03_ORGA_09",
    "section": "Korzenie, łodygi i liście",
    "type": "riddle",
    "prompt": "Jak nazywa się charakterystyczna dla zbóż łodyga pusta w środku?",
    "options": null,
    "answer": "źdźbło",
    "altAnswers": [
      "źdźbło",
      "zdzblo"
    ],
    "explanation": "Źdźbło ma pusty środek i jest charakterystyczne dla zbóż; jego budowa zwiększa odporność na złamanie."
  },
  {
    "id": "R03_ORGA_10",
    "section": "Korzenie, łodygi i liście",
    "type": "single_choice",
    "prompt": "W której tkance liścia, według jego budowy wewnętrznej, znajduje się najwięcej chloroplastów?",
    "options": [
      "Miękisz palisadowy",
      "Miękisz gąbczasty",
      "Skórka dolna",
      "Korek",
      "Łyko",
      "Fellogen"
    ],
    "answer": 0,
    "image": "r03_przekroj_liscia.jpg",
    "explanation": "Komórki miękiszu palisadowego zawierają liczne chloroplasty i stanowią główne miejsce fotosyntezy w liściu."
  },
  {
    "id": "R03_ORGA_11",
    "section": "Korzenie, łodygi i liście",
    "type": "match",
    "prompt": "Połącz sposób unerwienia liścia z przykładem rośliny.",
    "options": null,
    "left": [
      "Nerwacja równoległa",
      "Nerwacja dłoniasta",
      "Nerwacja pierzasta"
    ],
    "right": [
      "Dąb",
      "Klon",
      "Trawy"
    ],
    "answer": {
      "Nerwacja równoległa": "Trawy",
      "Nerwacja dłoniasta": "Klon",
      "Nerwacja pierzasta": "Dąb"
    },
    "explanation": "Trawy mają nerwy biegnące równolegle, u klonu główne nerwy rozchodzą się od nasady blaszki, a u dębu występuje nerw główny z nerwami bocznymi."
  },
  {
    "id": "R03_ORGA_12",
    "section": "Korzenie, łodygi i liście",
    "type": "scenario",
    "prompt": "Roślina żyjąca w suchym środowisku ma grube kutykule i zagłębione aparaty szparkowe. Jaki jest skutek tych przystosowań?",
    "options": [
      "Ograniczenie utraty wody",
      "Zwiększenie liczby owoców",
      "Przyspieszenie rozsiewania nasion",
      "Zwiększenie pobierania wody przez kwiaty"
    ],
    "answer": 0,
    "image": "r03_aparat_szparkowy.jpg",
    "explanation": "Liść kseromorficzny może mieć grubą kutykulę, włoski i zagłębione aparaty szparkowe ograniczające transpirację."
  },
  {
    "id": "R03_ROZM_01",
    "section": "Kwiaty, owoce i nasiona",
    "type": "single_choice",
    "prompt": "Która część kwiatu zawiera zalążki?",
    "options": [
      "Zalążnia słupka",
      "Pylnik pręcika",
      "Płatek korony",
      "Działka kielicha",
      "Szypułka"
    ],
    "answer": 0,
    "image": "r03_budowa_kwiatu.jpg",
    "explanation": "Zalążki są osadzone wewnątrz zalążni słupka, co jest charakterystyczne dla okrytonasiennych."
  },
  {
    "id": "R03_ROZM_02",
    "section": "Kwiaty, owoce i nasiona",
    "type": "multi_select",
    "prompt": "Wybierz funkcje okwiatu.",
    "options": [
      "Ochrona pręcików i słupków",
      "Wabienie owadów przez płatki korony",
      "Ochrona pąka przez kielich",
      "Wytwarzanie plemników przez płatki",
      "Wytwarzanie zarodnika w działkach kielicha"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Kielich osłania pąk, a korona m.in. wabi owady i uczestniczy w ochronie części rozrodczych."
  },
  {
    "id": "R03_ROZM_03",
    "section": "Kwiaty, owoce i nasiona",
    "type": "true_false",
    "prompt": "Rozmnażanie truskawki przez rozłogi może dać rośliny potomne genetycznie identyczne z rośliną macierzystą.",
    "options": null,
    "answer": true,
    "explanation": "Rozłogi truskawki są sposobem rozmnażania wegetatywnego, w którym potomstwo zachowuje cechy genetyczne rośliny macierzystej."
  },
  {
    "id": "R03_ROZM_04",
    "section": "Kwiaty, owoce i nasiona",
    "type": "fill_in",
    "prompt": "Przemieszczenie ziarna pyłku na __________ słupka nazywa się zapyleniem.",
    "options": null,
    "answer": [
      "znamię"
    ],
    "image": "r03_budowa_kwiatu.jpg",
    "altAnswers": [
      [
        "znamię",
        "znamie"
      ]
    ],
    "explanation": "Zapylenie oznacza dotarcie ziarna pyłku na znamię słupka; zapłodnienie zachodzi później."
  },
  {
    "id": "R03_ROZM_05",
    "section": "Kwiaty, owoce i nasiona",
    "type": "match",
    "prompt": "Połącz kwiatostan z jego przykładem.",
    "options": null,
    "left": [
      "Baldach",
      "Koszyczek",
      "Grono",
      "Główka"
    ],
    "right": [
      "Koniczyna",
      "Porzeczka",
      "Słonecznik",
      "Czosnek niedźwiedzi"
    ],
    "answer": {
      "Baldach": "Czosnek niedźwiedzi",
      "Koszyczek": "Słonecznik",
      "Grono": "Porzeczka",
      "Główka": "Koniczyna"
    },
    "image": "r03_kwiatostany.jpg",
    "explanation": "Czosnek niedźwiedzi tworzy baldach, słonecznik koszyczek, porzeczka grono, a koniczyna główkę."
  },
  {
    "id": "R03_ROZM_06",
    "section": "Kwiaty, owoce i nasiona",
    "type": "scenario",
    "prompt": "Owad przenosi pyłek na znamię kwiatu. Z ziarna pyłku wyrasta struktura, która przerasta szyjkę słupka w kierunku zalążni. Co to jest?",
    "options": [
      "Łagiewka pyłkowa",
      "Włośnik",
      "Przetchlinka",
      "Cewka"
    ],
    "answer": 0,
    "image": "r03_budowa_kwiatu.jpg",
    "explanation": "Po zapyleniu ziarno pyłku kiełkuje, tworząc łagiewkę pyłkową prowadzącą plemniki w kierunku zalążka."
  },
  {
    "id": "R03_ROZM_07",
    "section": "Kwiaty, owoce i nasiona",
    "type": "sequence",
    "prompt": "Uporządkuj zdarzenia od zapylenia do powstania zarodka.",
    "options": null,
    "items": [
      "Dochodzi do zapłodnienia",
      "Z zygoty rozwija się zarodek",
      "Ziarno pyłku osiada na znamieniu słupka",
      "Wyrasta łagiewka pyłkowa"
    ],
    "answer": [
      "Ziarno pyłku osiada na znamieniu słupka",
      "Wyrasta łagiewka pyłkowa",
      "Dochodzi do zapłodnienia",
      "Z zygoty rozwija się zarodek"
    ],
    "explanation": "Po zapyleniu pyłek kiełkuje, łagiewka dociera do zalążka, następuje zapłodnienie, a z zygoty powstaje zarodek."
  },
  {
    "id": "R03_ROZM_08",
    "section": "Kwiaty, owoce i nasiona",
    "type": "single_choice",
    "prompt": "Z której struktury rozwija się owocnia?",
    "options": [
      "Ze ściany zalążni",
      "Z łupiny nasiennej",
      "Z ziarna pyłku",
      "Z komórki jajowej",
      "Z łagiewki pyłkowej"
    ],
    "answer": 0,
    "image": "r03_owoce_pomidor_sliwka.jpg",
    "explanation": "Po zapłodnieniu zalążek przekształca się w nasienie, a ściana zalążni w owocnię."
  },
  {
    "id": "R03_ROZM_09",
    "section": "Kwiaty, owoce i nasiona",
    "type": "sort",
    "prompt": "Przyporządkuj owoce do mięsistych albo suchych.",
    "options": null,
    "items": [
      "Jagoda pomidora",
      "Jagoda winogrona",
      "Ziarniak pszenicy",
      "Pestkowiec śliwki",
      "Strąk grochu",
      "Orzech leszczyny"
    ],
    "categories": [
      "Mięsiste",
      "Suche"
    ],
    "answer": {
      "Mięsiste": [
        "Jagoda pomidora",
        "Pestkowiec śliwki",
        "Jagoda winogrona"
      ],
      "Suche": [
        "Strąk grochu",
        "Ziarniak pszenicy",
        "Orzech leszczyny"
      ]
    },
    "image": "r03_owoce_pomidor_sliwka.jpg",
    "explanation": "Jagody i pestkowce są owocami mięsistymi, a strąki, ziarniaki i orzechy należą do suchych."
  },
  {
    "id": "R03_ROZM_10",
    "section": "Kwiaty, owoce i nasiona",
    "type": "odd_one_out",
    "prompt": "Wskaż roślinę odmienną pod względem liczby liścieni zarodka: pszenica, kukurydza, tulipan, fasola.",
    "options": null,
    "answer": "fasola",
    "explanation": "Fasola jest dwuliścienna. Pszenica, kukurydza i tulipan należą do jednoliściennych."
  },
  {
    "id": "R03_ROZM_11",
    "section": "Kwiaty, owoce i nasiona",
    "type": "riddle",
    "prompt": "Jak nazywa się suchy niepękający owoc słonecznika?",
    "options": null,
    "answer": "niełupka",
    "altAnswers": [
      "niełupka",
      "nielupka"
    ],
    "explanation": "Słonecznik wytwarza suchy, niepękający owoc nazywany niełupką."
  },
  {
    "id": "R03_ROZM_12",
    "section": "Kwiaty, owoce i nasiona",
    "type": "multi_select",
    "prompt": "Zaznacz etapy i warunki kiełkowania nasiona.",
    "options": [
      "Pobranie wody i pęcznienie nasiona",
      "Pęknięcie łupiny nasiennej",
      "Wyrastanie najpierw korzenia zarodkowego",
      "Konieczność wcześniejszego wytworzenia kwiatu przez siewkę",
      "Pobieranie składników zapasowych z bielma lub liścieni"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Kiełkowanie rozpoczyna pobranie wody, potem pęka łupina i wyrasta korzeń. Początkowo zarodek korzysta z zapasów nasiona."
  },
  {
    "id": "R03_GRZY_01",
    "section": "Grzyby i porosty",
    "type": "single_choice",
    "prompt": "Który organizm jest grzybem jednokomórkowym?",
    "options": [
      "Drożdże",
      "Pędzlak",
      "Pleśniak",
      "Borowik",
      "Kropidlak",
      "Koźlarz"
    ],
    "answer": 0,
    "explanation": "Drożdże są grzybami jednokomórkowymi; pozostałe przykłady dotyczą grzybów wielokomórkowych."
  },
  {
    "id": "R03_GRZY_02",
    "section": "Grzyby i porosty",
    "type": "multi_select",
    "prompt": "Wybierz prawdziwe cechy grzybów.",
    "options": [
      "Są organizmami cudzożywnymi",
      "Trawią pokarm poza komórkami",
      "Mogą rozmnażać się przez zarodniki",
      "Mają tkanki takie jak rośliny naczyniowe",
      "Wszystkie prowadzą fotosyntezę"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Grzyby są cudzożywne, wydzielają enzymy trawienne do otoczenia i wiele z nich rozmnaża się przez zarodniki."
  },
  {
    "id": "R03_GRZY_03",
    "section": "Grzyby i porosty",
    "type": "true_false",
    "prompt": "Drożdże mogą prowadzić fermentację i rozmnażają się przez pączkowanie.",
    "options": null,
    "answer": true,
    "explanation": "Drożdże przeprowadzają fermentację i mogą rozmnażać się przez pączkowanie, wytwarzając komórkę potomną."
  },
  {
    "id": "R03_GRZY_04",
    "section": "Grzyby i porosty",
    "type": "fill_in",
    "prompt": "Nitkowate elementy budujące ciało grzyba to __________, które razem tworzą grzybnię.",
    "options": null,
    "answer": [
      "strzępki"
    ],
    "altAnswers": [
      [
        "strzępki",
        "strzepki"
      ]
    ],
    "explanation": "Ciało grzyba zbudowane jest ze strzępek tworzących grzybnię."
  },
  {
    "id": "R03_GRZY_05",
    "section": "Grzyby i porosty",
    "type": "match",
    "prompt": "Dopasuj grupę grzybów do opisu.",
    "options": null,
    "left": [
      "Drożdże",
      "Grzyby pleśniowe",
      "Grzyby kapeluszowe"
    ],
    "right": [
      "Owocnik z kapeluszem i trzonem",
      "Zarodniki na szczytach strzępek",
      "Rozmnażanie przez pączkowanie"
    ],
    "answer": {
      "Drożdże": "Rozmnażanie przez pączkowanie",
      "Grzyby pleśniowe": "Zarodniki na szczytach strzępek",
      "Grzyby kapeluszowe": "Owocnik z kapeluszem i trzonem"
    },
    "image": "r03_budowa_grzyba.jpg",
    "explanation": "Drożdże zwykle pączkują, pleśnie mają luźne strzępki i zarodniki na ich szczytach, a grzyby kapeluszowe tworzą owocniki."
  },
  {
    "id": "R03_GRZY_06",
    "section": "Grzyby i porosty",
    "type": "odd_one_out",
    "prompt": "Wskaż organizm, który nie jest grzybem: pędzlak, drożdże, kropidlak, skrzyp.",
    "options": null,
    "answer": "skrzyp",
    "explanation": "Skrzyp jest paprotnikiem, zaś pędzlak, drożdże i kropidlak to przykłady grzybów."
  },
  {
    "id": "R03_GRZY_07",
    "section": "Grzyby i porosty",
    "type": "scenario",
    "prompt": "Korzenie brzozy współpracują z grzybnią koźlarza. Grzyb przekazuje wodę i sole, a drzewo produkty fotosyntezy. Jak nazywa się ta symbioza?",
    "options": [
      "Mikoryza",
      "Zapylenie",
      "Transpiracja",
      "Kiełkowanie"
    ],
    "answer": 0,
    "explanation": "Mikoryza oznacza obustronnie korzystny związek grzyba i korzeni rośliny, na przykład koźlarza i brzozy."
  },
  {
    "id": "R03_GRZY_08",
    "section": "Grzyby i porosty",
    "type": "single_choice",
    "prompt": "Który zestaw zawiera trzy typy plech porostów?",
    "options": [
      "Skorupiaste, listkowate, krzaczkowate",
      "Palowe, wiązkowe, przybyszowe",
      "Palisadowe, gąbczaste, powietrzne",
      "Żeńskie, męskie, obupłciowe"
    ],
    "answer": 0,
    "image": "r03_typy_plech_porostow.jpg",
    "explanation": "Porosty można podzielić według budowy zewnętrznej plechy na skorupiaste, listkowate i krzaczkowate."
  },
  {
    "id": "R03_GRZY_09",
    "section": "Grzyby i porosty",
    "type": "riddle",
    "prompt": "Jak nazywają się fragmenty porostu rozsiewane przez wiatr, które umożliwiają rozmnażanie?",
    "options": null,
    "answer": "urwistki",
    "altAnswers": [
      "urwistki",
      "urwistek"
    ],
    "explanation": "Porosty rozmnażają się m.in. przez urwistki, czyli fragmenty plechy przenoszone przez wiatr."
  },
  {
    "id": "R03_GRZY_10",
    "section": "Grzyby i porosty",
    "type": "single_choice",
    "prompt": "Dlaczego niektóre porosty wykorzystuje się jako bioindykatory?",
    "options": [
      "Są wrażliwe na zanieczyszczenie powietrza",
      "Produkują owoce",
      "Wszystkie rosną tylko w morzach",
      "Mogą zastąpić glebę w nawożeniu"
    ],
    "answer": 0,
    "image": "r03_typy_plech_porostow.jpg",
    "explanation": "Różna wrażliwość porostów na zanieczyszczenia pozwala oceniać stan powietrza."
  },
  {
    "id": "R03_GRZY_11",
    "section": "Grzyby i porosty",
    "type": "scenario",
    "prompt": "Na nagiej skale pojawia się porost, którego kwasy stopniowo pomagają tworzyć glebę. Jaką rolę przyrodniczą pełni porost?",
    "options": [
      "Organizmu pionierskiego",
      "Rośliny nasiennej",
      "Pasożyta korzeni",
      "Producenta owoców"
    ],
    "answer": 0,
    "explanation": "Porosty zasiedlają trudne środowiska i dzięki kwasom porostowym przygotowują podłoże dla roślin."
  },
  {
    "id": "R03_HARD_01",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz merystem wtórny z tkanką lub strukturą, którą tworzy albo z jej funkcją.",
    "options": null,
    "left": [
      "Kambium",
      "Fellogen",
      "Merystem przyranny",
      "Tkanka archesporialna"
    ],
    "right": [
      "Powstawanie zarodników po mejozie",
      "Zasklepianie uszkodzeń",
      "Korek na zewnątrz",
      "Drewno wtórne do wewnątrz"
    ],
    "answer": {
      "Kambium": "Drewno wtórne do wewnątrz",
      "Fellogen": "Korek na zewnątrz",
      "Merystem przyranny": "Zasklepianie uszkodzeń",
      "Tkanka archesporialna": "Powstawanie zarodników po mejozie"
    },
    "explanation": "Miazga wytwarza drewno i łyko wtórne; fellogen korek i fellodermę; kalus zabliźnia rany, a tkanka archesporialna wytwarza zarodniki."
  },
  {
    "id": "R03_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które elementy budują drewno (ksylem)?",
    "options": [
      "Naczynia",
      "Cewki",
      "Włókna drzewne",
      "Miękisz drzewny",
      "Rurki sitowe",
      "Komórki przyrurkowe"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Drewno tworzą naczynia, cewki, włókna drzewne i miękisz drzewny. Rurki sitowe i komórki przyrurkowe należą do łyka."
  },
  {
    "id": "R03_HARD_03",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W upalny dzień z powierzchni liści wyparowuje woda. Utrata wody w liściach powoduje podciąganie jej przez łodygę z korzeni. Jaka siła odpowiada za opisane zjawisko?",
    "options": [
      "Siła ssąca liści",
      "Rozsiewanie samorzutne",
      "Rozrastanie się fellogenu",
      "Pączkowanie"
    ],
    "answer": 0,
    "explanation": "Parowanie z liści wytwarza siłę ssącą, która pomaga podciągać wodę z niższych części rośliny."
  },
  {
    "id": "R03_HARD_04",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj stadia do dominującego lub niedominującego pokolenia właściwego organizmu.",
    "options": null,
    "items": [
      "Ulistniona łodyżka mchu",
      "Ziarno pyłku sosny",
      "Dorosła paproć",
      "Przedrośle paproci",
      "Bezlistna łodyżka mchu z zarodnią",
      "Dorosła sosna"
    ],
    "categories": [
      "Gametofit",
      "Sporofit"
    ],
    "answer": {
      "Gametofit": [
        "Ulistniona łodyżka mchu",
        "Przedrośle paproci",
        "Ziarno pyłku sosny"
      ],
      "Sporofit": [
        "Bezlistna łodyżka mchu z zarodnią",
        "Dorosła paproć",
        "Dorosła sosna"
      ]
    },
    "explanation": "U mchów dominuje gametofit, u paprotników i nasiennych sporofit. Przedrośle paproci i ziarno pyłku sosny są gametofitami."
  },
  {
    "id": "R03_HARD_05",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy cyklu mchu od uwolnienia zarodnika do powstania kolejnego sporofitu.",
    "options": null,
    "items": [
      "Dorosły gametofit",
      "Zapłodnienie w obecności wody",
      "Młody sporofit",
      "Zarodnik",
      "Splątek"
    ],
    "answer": [
      "Zarodnik",
      "Splątek",
      "Dorosły gametofit",
      "Zapłodnienie w obecności wody",
      "Młody sporofit"
    ],
    "explanation": "Z zarodnika rozwija się splątek i gametofit; po wytworzeniu gamet zapłodnienie w wodzie prowadzi do sporofitu."
  },
  {
    "id": "R03_HARD_06",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jak długo igły sosny pospolitej pozostają na drzewie, zanim opadną?",
    "options": [
      "3–4 lata",
      "Jeden sezon",
      "Dwa tygodnie",
      "10–12 lat",
      "Tylko do zapylenia"
    ],
    "answer": 0,
    "explanation": "Opis sosny pospolitej podaje opadanie igieł po 3–4 latach; corocznie zrzuca igły modrzew."
  },
  {
    "id": "R03_HARD_07",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Jakie stwierdzenia poprawnie odróżniają wiatropylność od wiatrosiewności u sosny?",
    "options": [
      "Wiatropylność oznacza przenoszenie ziaren pyłku",
      "Wiatrosiewność oznacza przenoszenie dojrzałych nasion",
      "Obydwa procesy mogą zachodzić z udziałem wiatru",
      "Wiatropylność oznacza roznoszenie owoców",
      "Wiatrosiewność oznacza dostarczenie pyłku na zalążek"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Sosna jest zarówno wiatropylna (transport pyłku), jak i wiatrosiewna (transport nasion)."
  },
  {
    "id": "R03_HARD_08",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz element kwiatu z jego położeniem lub funkcją w rozmnażaniu.",
    "options": null,
    "left": [
      "Znamię słupka",
      "Szyjka słupka",
      "Zalążnia",
      "Pylnik"
    ],
    "right": [
      "Część pręcika wytwarzająca pyłek",
      "Miejsce osadzenia zalążków",
      "Droga wzrostu łagiewki pyłkowej",
      "Miejsce osiadania pyłku"
    ],
    "answer": {
      "Znamię słupka": "Miejsce osiadania pyłku",
      "Szyjka słupka": "Droga wzrostu łagiewki pyłkowej",
      "Zalążnia": "Miejsce osadzenia zalążków",
      "Pylnik": "Część pręcika wytwarzająca pyłek"
    },
    "image": "r03_budowa_kwiatu.jpg",
    "explanation": "Pyłek trafia na znamię, łagiewka przechodzi przez szyjkę ku zalążkom w zalążni, a pylnik jest elementem pręcika."
  },
  {
    "id": "R03_HARD_09",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Badacz ogląda przekrój łodygi. Wiązki przewodzące tworzą pierścień, a między łykiem i drewnem występuje kambium. Która cecha opisuje taką łodygę?",
    "options": [
      "Wiązki otwarte typowe dla dwuliściennych",
      "Wiązki zamknięte typowe dla jednoliściennych",
      "Brak możliwości przyrostu na grubość",
      "Brak tkanek przewodzących"
    ],
    "answer": 0,
    "image": "r03_budowa_lodygi.jpg",
    "explanation": "U dwuliściennych wiązki są ułożone pierścieniowo i zawierają kambium, dlatego mogą uczestniczyć w przyroście na grubość."
  },
  {
    "id": "R03_HARD_10",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Roślina z kwiatami męskimi i żeńskimi na jednym osobniku jest __________, a gdy występują na różnych osobnikach — __________.",
    "options": null,
    "answer": [
      "jednopienna",
      "dwupienna"
    ],
    "altAnswers": [
      [
        "jednopienna"
      ],
      [
        "dwupienna"
      ]
    ],
    "explanation": "Jednopienność oznacza współwystępowanie kwiatów męskich i żeńskich na jednej roślinie, a dwupienność ich rozdzielenie między osobniki."
  },
  {
    "id": "R03_HARD_11",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Który owoc różni się od pozostałych sposobem otwierania po dojrzeniu: strąk, mieszek, torebka, niełupka.",
    "options": null,
    "answer": "niełupka",
    "explanation": "Strąk, mieszek i torebka należą do owoców suchych pękających; niełupka jest owocem suchym niepękającym."
  },
  {
    "id": "R03_HARD_12",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do roślin jednoliściennych lub dwuliściennych.",
    "options": null,
    "items": [
      "Jeden liścień w zarodku",
      "Unerwienie równoległe",
      "Korzenie palowe",
      "Korzenie wiązkowe",
      "Dwa liścienie w zarodku",
      "Unerwienie pierzaste lub dłoniaste"
    ],
    "categories": [
      "Jednoliścienne",
      "Dwuliścienne"
    ],
    "answer": {
      "Jednoliścienne": [
        "Jeden liścień w zarodku",
        "Korzenie wiązkowe",
        "Unerwienie równoległe"
      ],
      "Dwuliścienne": [
        "Dwa liścienie w zarodku",
        "Korzenie palowe",
        "Unerwienie pierzaste lub dłoniaste"
      ]
    },
    "explanation": "Rośliny jednoliścienne mają jeden liścień zarodkowy i zwykle wiązkowy system korzeniowy, a dwuliścienne mają dwa liścienie i często system palowy."
  },
  {
    "id": "R03_HARD_13",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Dopasuj typ owocu suchego pękającego do opisu.",
    "options": null,
    "left": [
      "Mieszek",
      "Strąk",
      "Torebka",
      "Łuszczyna"
    ],
    "right": [
      "Powstaje z dwóch owocolistków",
      "Pęka więcej niż dwoma szwami",
      "Pęka wzdłuż dwóch szwów",
      "Pęka wzdłuż jednego szwu"
    ],
    "answer": {
      "Mieszek": "Pęka wzdłuż jednego szwu",
      "Strąk": "Pęka wzdłuż dwóch szwów",
      "Torebka": "Pęka więcej niż dwoma szwami",
      "Łuszczyna": "Powstaje z dwóch owocolistków"
    },
    "explanation": "Mieszek otwiera się jednym szwem, strąk dwoma, a torebka może otwierać się na kilka sposobów; łuszczyna powstaje z dwóch owocolistków."
  },
  {
    "id": "R03_HARD_14",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Porost zbudowany jest między innymi ze strzępek grzyba i komórek glonu. Która z tych części wytwarza substancje organiczne w fotosyntezie?",
    "options": [
      "Warstwa glonowa",
      "Chwytniki",
      "Warstwa zewnętrzna grzyba",
      "Skała"
    ],
    "answer": 0,
    "image": "r03_przekroj_porostu.jpg",
    "explanation": "Glony prowadzą fotosyntezę i przekazują grzybowi jej produkty, a grzyb zapewnia im wodę, sole mineralne i ochronę."
  }
];

const KID_PROMPTS = {
  "R03_TKAN_01": "Która tkanka sprawia, że roślina rośnie na długość?",
  "R03_TKAN_07": "Co robi szparka w liściu, gdy komórki tracą wodę?",
  "R03_MSPA_01": "Co dominuje u mchu: gametofit czy sporofit?",
  "R03_MSPA_05": "Po co paproci zarodnie na spodzie liścia?",
  "R03_NAGO_01": "Czego nie produkują rośliny nagonasienne?",
  "R03_NAGO_06": "Jak nazywa się lepka substancja chroniąca ranę sosny?",
  "R03_ORGA_01": "Jak nazywa się system korzeni z jednym głównym korzeniem?",
  "R03_ORGA_05": "Jakie korzenie pomagają kukurydzy się nie przewracać?",
  "R03_ORGA_09": "Jak nazywa się pusta w środku łodyga zbóż?",
  "R03_ROZM_01": "W jakiej części kwiatu są zalążki?",
  "R03_ROZM_06": "Co wyrasta z pyłku i dociera do zalążni?",
  "R03_GRZY_01": "Który z tych grzybów jest jednokomórkowy?",
  "R03_GRZY_07": "Jak nazywa się współpraca grzyba i korzeni drzewa?",
  "R03_GRZY_10": "Dlaczego porosty pomagają oceniać zanieczyszczenie powietrza?"
};

const chapter = {
  id: "r03",
  number: 3,
  title: "Rośliny, grzyby i porosty",
  icon: "🌱",
  sectionOrder: [
  "Tkanki roślinne",
  "Mchy i paprotniki",
  "Rośliny nagonasienne",
  "Korzenie, łodygi i liście",
  "Kwiaty, owoce i nasiona",
  "Grzyby i porosty"
],
  sectionIcons: {
  "Tkanki roślinne": "🧫",
  "Mchy i paprotniki": "🌿",
  "Rośliny nagonasienne": "🌲",
  "Korzenie, łodygi i liście": "🍃",
  "Kwiaty, owoce i nasiona": "🌼",
  "Grzyby i porosty": "🍄"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
