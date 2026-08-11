// Skróty sekcji (do identyfikatorów ćwiczeń):
//   NIEM = Przemiany przemysłu Niemiec
//   LITB = Walory przyrodnicze i kulturowe Litwy i Białorusi
//   CZSL = Atrakcje turystyczne Czech i Słowacji
//   UKR  = Współczesne problemy Ukrainy
//   ROS  = Zróżnicowanie środowiska przyrodniczego Rosji
//   REL  = Relacje Polski z sąsiadami
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R05_NIEM_01",
    "section": "Przemiany przemysłu Niemiec",
    "type": "single_choice",
    "prompt": "Który dział gospodarki jest obecnie najważniejszy w Niemczech?",
    "options": [
      "rolnictwo",
      "usługi",
      "górnictwo",
      "rybołówstwo",
      "leśnictwo",
      "budownictwo mieszkaniowe"
    ],
    "answer": 1,
    "explanation": "W Niemczech najważniejszym działem gospodarki są obecnie usługi, choć rozwój przemysłu silnie przyczynił się do wysokiego poziomu rozwoju kraju."
  },
  {
    "id": "R05_NIEM_02",
    "section": "Przemiany przemysłu Niemiec",
    "type": "true_false",
    "prompt": "Rozwój przemysłu w Niemczech w poprzednim stuleciu przyczynił się do osiągnięcia przez ten kraj wysokiego poziomu rozwoju gospodarczego.",
    "options": null,
    "answer": true,
    "explanation": "To właśnie rozwój przemysłu w największym stopniu przyczynił się do wysokiego poziomu rozwoju gospodarczego Niemiec w poprzednim stuleciu."
  },
  {
    "id": "R05_NIEM_03",
    "section": "Przemiany przemysłu Niemiec",
    "type": "multi_select",
    "prompt": "Zaznacz surowce, których bogate złoża odkryto w Nadrenii Północnej-Westfalii na początku rozwoju przemysłu.",
    "options": [
      "węgiel kamienny",
      "ruda żelaza",
      "cynk",
      "ołów",
      "ropa naftowa",
      "diamenty"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Początek rozwoju przemysłu w regionie wiązał się z odkryciem złóż węgla kamiennego, rudy żelaza, cynku i ołowiu."
  },
  {
    "id": "R05_NIEM_04",
    "section": "Przemiany przemysłu Niemiec",
    "type": "fill_in",
    "prompt": "Zagłębie Ruhry było jednym z głównych skupisk przemysłu __________ w Niemczech.",
    "options": null,
    "answer": [
      "ciężkiego"
    ],
    "altAnswers": [
      [
        "ciężkiego",
        "ciezkiego",
        "ciężki"
      ]
    ],
    "explanation": "Zagłębie Ruhry przedstawiono jako jedno z głównych skupisk przemysłu ciężkiego Niemiec.",
    "image": "r05_zaglebie_ruhry_kopalnie.jpg"
  },
  {
    "id": "R05_NIEM_05",
    "section": "Przemiany przemysłu Niemiec",
    "type": "riddle",
    "prompt": "Najbardziej uprzemysłowiony region Niemiec to...",
    "options": null,
    "answer": "Nadrenia Północna-Westfalia",
    "altAnswers": [
      "Nadrenia Północna-Westfalia",
      "Nadrenia Polnocna-Westfalia",
      "Nadrenia Północna Westfalia"
    ],
    "explanation": "Zmiany w niemieckim przemyśle omówiono na przykładzie Nadrenii Północnej-Westfalii, wskazanej jako najbardziej uprzemysłowiony region kraju.",
    "image": "r05_nadrenia_przemysl.jpg"
  },
  {
    "id": "R05_NIEM_06",
    "section": "Przemiany przemysłu Niemiec",
    "type": "odd_one_out",
    "prompt": "Wskaż element niepasujący do pierwszych gałęzi przemysłu regionu: górnictwo, hutnictwo, przemysł maszynowy, bankowość.",
    "options": null,
    "answer": "bankowość",
    "explanation": "Pierwszymi gałęziami przemysłowymi regionu były górnictwo, hutnictwo i przemysł maszynowy; bankowość nie należy do tej grupy."
  },
  {
    "id": "R05_NIEM_07",
    "section": "Przemiany przemysłu Niemiec",
    "type": "scenario",
    "prompt": "Wyobraź sobie Nadrenię Północną-Westfalię w pierwszej połowie XIX wieku. Rzeki Ren i Ruhra są tak zanieczyszczone, że nie żyją w nich ryby. Z czym wiąże się taki stan środowiska?",
    "options": [
      "z rozwojem przemysłu odbywającym się kosztem środowiska",
      "z rozwojem turystyki zimowej",
      "z upowszechnieniem rolnictwa ekologicznego",
      "z budową parków narodowych",
      "z odpływem mieszkańców z miast"
    ],
    "answer": 0,
    "explanation": "Na początku rozwoju przemysłu degradacja środowiska była ogromna, a Ren i Ruhra zostały silnie zanieczyszczone przez działalność przemysłową."
  },
  {
    "id": "R05_NIEM_08",
    "section": "Przemiany przemysłu Niemiec",
    "type": "match",
    "prompt": "Połącz okres rozwoju Nadrenii Północnej-Westfalii z charakterystyczną zmianą.",
    "options": null,
    "left": [
      "Pierwsza połowa XIX wieku",
      "Okres po 1945 roku",
      "Lata 60. i 70. XX wieku",
      "Początek XXI wieku"
    ],
    "right": [
      "początek rozwoju przemysłu",
      "szczyt rozwoju tradycyjnego przemysłu",
      "decyzja o stopniowej likwidacji kopalń",
      "automatyzacja i komputeryzacja zakładów"
    ],
    "answer": {
      "Pierwsza połowa XIX wieku": "początek rozwoju przemysłu",
      "Okres po 1945 roku": "szczyt rozwoju tradycyjnego przemysłu",
      "Lata 60. i 70. XX wieku": "decyzja o stopniowej likwidacji kopalń",
      "Początek XXI wieku": "automatyzacja i komputeryzacja zakładów"
    },
    "explanation": "Tabela rozwoju regionu pokazuje przejście od górnictwa i hutnictwa przez powojenny szczyt przemysłu ciężkiego do likwidacji kopalń oraz nowoczesnej produkcji."
  },
  {
    "id": "R05_NIEM_09",
    "section": "Przemiany przemysłu Niemiec",
    "type": "sort",
    "prompt": "Przyporządkuj zjawiska do etapu rozwoju przemysłu w Nadrenii Północnej-Westfalii.",
    "options": null,
    "items": [
      "kopalnie i huty",
      "plan Marshalla",
      "likwidacja kopalń",
      "przemysł farmaceutyczny"
    ],
    "categories": [
      "początek XIX wieku",
      "po 1945 roku",
      "lata 60. i 70. XX wieku",
      "nowoczesne gałęzie"
    ],
    "answer": {
      "początek XIX wieku": [
        "kopalnie i huty"
      ],
      "po 1945 roku": [
        "plan Marshalla"
      ],
      "lata 60. i 70. XX wieku": [
        "likwidacja kopalń"
      ],
      "nowoczesne gałęzie": [
        "przemysł farmaceutyczny"
      ]
    },
    "explanation": "W kolejnych etapach region przeszedł od kopalń i hut, przez odbudowę i rozwój po 1945 roku, po zamykanie kopalń oraz rozwój nowoczesnych gałęzi przemysłu."
  },
  {
    "id": "R05_NIEM_10",
    "section": "Przemiany przemysłu Niemiec",
    "type": "sequence",
    "prompt": "Ułóż etapy przemian przemysłu Nadrenii Północnej-Westfalii w kolejności chronologicznej.",
    "options": null,
    "items": [
      "początek XXI wieku",
      "lata 60. i 70. XX wieku",
      "pierwsza połowa XIX wieku",
      "okres po 1945 roku"
    ],
    "answer": [
      "pierwsza połowa XIX wieku",
      "okres po 1945 roku",
      "lata 60. i 70. XX wieku",
      "początek XXI wieku"
    ],
    "explanation": "Najpierw nastąpił początek rozwoju przemysłu, później powojenny szczyt tradycyjnego przemysłu, następnie decyzje o likwidacji kopalń, a na początku XXI wieku automatyzacja i komputeryzacja."
  },
  {
    "id": "R05_LITB_01",
    "section": "Walory przyrodnicze i kulturowe Litwy i Białorusi",
    "type": "single_choice",
    "prompt": "Która kraina jest jedynym nieco bardziej wzniesionym obszarem w Litwie i Białorusi?",
    "options": [
      "Wyżyna Białoruska",
      "Sudety",
      "Karkonosze",
      "Nizina Wschodnioeuropejska",
      "Tatry",
      "Kraj Krasnodarski"
    ],
    "answer": 0,
    "explanation": "W ukształtowaniu terenu Litwy i Białorusi przeważają niziny, a jedyną nieco bardziej wzniesioną krainą jest Wyżyna Białoruska."
  },
  {
    "id": "R05_LITB_02",
    "section": "Walory przyrodnicze i kulturowe Litwy i Białorusi",
    "type": "true_false",
    "prompt": "W ukształtowaniu terenu Litwy i Białorusi przeważają wysokie góry.",
    "options": null,
    "answer": false,
    "explanation": "W ukształtowaniu terenu obu państw przeważają niziny, a nie wysokie góry.",
    "image": "r05_litwa_bialorus_mapa.jpg"
  },
  {
    "id": "R05_LITB_03",
    "section": "Walory przyrodnicze i kulturowe Litwy i Białorusi",
    "type": "multi_select",
    "prompt": "Zaznacz walory przyrodnicze Litwy i Białorusi.",
    "options": [
      "Pojezierze Litewskie",
      "Niemen",
      "Puszcza Białowieska",
      "Mierzeja Kurońska",
      "Kras Morawski",
      "Słowacki Raj"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do walorów przyrodniczych omawianych krajów zaliczono m.in. Pojezierze Litewskie, Niemen, Puszczę Białowieską oraz Mierzeję Kurońską."
  },
  {
    "id": "R05_LITB_04",
    "section": "Walory przyrodnicze i kulturowe Litwy i Białorusi",
    "type": "fill_in",
    "prompt": "Niemen jest najdłuższą rzeką __________, a jego źródła znajdują się w __________.",
    "options": null,
    "answer": [
      "Litwy",
      "Białorusi"
    ],
    "altAnswers": [
      [
        "Litwy",
        "litwy"
      ],
      [
        "Białorusi",
        "bialorusi",
        "Bialorusi"
      ]
    ],
    "explanation": "Niemen jest najdłuższą rzeką Litwy, a jego źródła znajdują się w Białorusi."
  },
  {
    "id": "R05_LITB_05",
    "section": "Walory przyrodnicze i kulturowe Litwy i Białorusi",
    "type": "riddle",
    "prompt": "Długi piaszczysty wał nad Bałtykiem z olbrzymimi wędrującymi wydmami to...",
    "options": null,
    "answer": "Mierzeja Kurońska",
    "altAnswers": [
      "Mierzeja Kurońska",
      "Mierzeja Kuronska"
    ],
    "explanation": "Mierzeja Kurońska jest piaszczystym wałem usypanym przez fale, prądy morskie i wiatr, a występują tam duże wędrujące wydmy."
  },
  {
    "id": "R05_LITB_06",
    "section": "Walory przyrodnicze i kulturowe Litwy i Białorusi",
    "type": "odd_one_out",
    "prompt": "Wskaż obiekt niepasujący do walorów przyrodniczych Litwy i Białorusi: Pojezierze Litewskie, Niemen, Puszcza Białowieska, Hradczany.",
    "options": null,
    "answer": "Hradczany",
    "explanation": "Hradczany są atrakcją Pragi, natomiast Pojezierze Litewskie, Niemen i Puszcza Białowieska należą do walorów przyrodniczych Litwy i Białorusi."
  },
  {
    "id": "R05_LITB_07",
    "section": "Walory przyrodnicze i kulturowe Litwy i Białorusi",
    "type": "scenario",
    "prompt": "Planujesz wycieczkę do miejsca, gdzie dawny zamek na wyspie jeziora Galwe miał chronić przed najeźdźcami. Dokąd jedziesz?",
    "options": [
      "do Trok",
      "do Mińska",
      "do Nowogródka",
      "do Pervalki",
      "do Nieświeża"
    ],
    "answer": 0,
    "explanation": "Zamek w Trokach położony jest na wyspie jeziora Galwe; jego usytuowanie miało zapewnić bezpieczeństwo przed najeźdźcami.",
    "image": "r05_zamek_troki.jpg"
  },
  {
    "id": "R05_LITB_08",
    "section": "Walory przyrodnicze i kulturowe Litwy i Białorusi",
    "type": "match",
    "prompt": "Połącz miejsce z opisem.",
    "options": null,
    "left": [
      "Wilno",
      "Troki",
      "Mińsk",
      "Nowogródek"
    ],
    "right": [
      "dawny ośrodek polskiej nauki i kultury",
      "zamek na wyspie i dawna stolica Litwy",
      "nowoczesny gmach Biblioteki Narodowej",
      "dzieciństwo Adama Mickiewicza"
    ],
    "answer": {
      "Wilno": "dawny ośrodek polskiej nauki i kultury",
      "Troki": "zamek na wyspie i dawna stolica Litwy",
      "Mińsk": "nowoczesny gmach Biblioteki Narodowej",
      "Nowogródek": "dzieciństwo Adama Mickiewicza"
    },
    "explanation": "Wskazuje się Wilno jako dawny ośrodek polskiej kultury, Troki jako dawną stolicę z zamkiem na wyspie, Mińsk jako miasto z Biblioteką Narodową, a Nowogródek jako miejsce dzieciństwa Mickiewicza."
  },
  {
    "id": "R05_LITB_09",
    "section": "Walory przyrodnicze i kulturowe Litwy i Białorusi",
    "type": "sort",
    "prompt": "Przyporządkuj walory do państwa, z którym są szczególnie powiązane.",
    "options": null,
    "items": [
      "Mierzeja Kurońska",
      "Wilno",
      "Nieśwież",
      "Mir",
      "Mińsk",
      "Troki"
    ],
    "categories": [
      "Litwa",
      "Białoruś"
    ],
    "answer": {
      "Litwa": [
        "Mierzeja Kurońska",
        "Wilno",
        "Troki"
      ],
      "Białoruś": [
        "Nieśwież",
        "Mir",
        "Mińsk"
      ]
    },
    "explanation": "Podsumowanie wyróżnia po stronie Litwy m.in. Mierzeję Kurońską, Wilno i Troki, a po stronie Białorusi Mińsk oraz zamki w Nieświeżu i Mirze."
  },
  {
    "id": "R05_LITB_10",
    "section": "Walory przyrodnicze i kulturowe Litwy i Białorusi",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia i informacje z Litwy oraz Białorusi w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Wilno znalazło się w ZSRS po II wojnie światowej",
      "dworek rodziny Adama Mickiewicza w Nowogródku odbudowano w XIX wieku",
      "Troki były stolicą Litwy do XIV wieku",
      "do Ostrej Bramy dobudowano kaplicę w XVII wieku"
    ],
    "answer": [
      "Troki były stolicą Litwy do XIV wieku",
      "do Ostrej Bramy dobudowano kaplicę w XVII wieku",
      "dworek rodziny Adama Mickiewicza w Nowogródku odbudowano w XIX wieku",
      "Wilno znalazło się w ZSRS po II wojnie światowej"
    ],
    "explanation": "Kolejność opiera się na datach: Troki były stolicą Litwy do XIV wieku, kaplicę Ostrej Bramy dobudowano w XVII wieku, dworek Mickiewicza odbudowano w XIX wieku, a po II wojnie światowej Wilno znalazło się w ZSRS."
  },
  {
    "id": "R05_CZSL_01",
    "section": "Atrakcje turystyczne Czech i Słowacji",
    "type": "single_choice",
    "prompt": "Który szczyt jest najwyższym szczytem Tatr i Słowacji?",
    "options": [
      "Gerlach",
      "Śnieżka",
      "Pradziad",
      "Kluczewska Sopka",
      "Bajkał",
      "Praga"
    ],
    "answer": 0,
    "explanation": "Gerlach, mający 2655 m n.p.m., został przedstawiony jako najwyższy szczyt Tatr i Słowacji."
  },
  {
    "id": "R05_CZSL_02",
    "section": "Atrakcje turystyczne Czech i Słowacji",
    "type": "true_false",
    "prompt": "Karkonosze są najwyższym pasmem górskim w Czechach.",
    "options": null,
    "answer": true,
    "explanation": "Karkonosze, wchodzące w skład Sudetów, są najwyższym pasmem górskim w Czechach."
  },
  {
    "id": "R05_CZSL_03",
    "section": "Atrakcje turystyczne Czech i Słowacji",
    "type": "multi_select",
    "prompt": "Zaznacz cechy Słowackiego Raju.",
    "options": [
      "jest płaskowyżem zbudowanym ze skał wapiennych",
      "występują tam jaskinie i wodospady",
      "na szlakach bywają drabinki i łańcuchy",
      "leży nad Morzem Czarnym",
      "jest najwyższym pasmem Czech"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Słowacki Raj to wapienny płaskowyż z krajobrazem krasowym, jaskiniami, wodospadami oraz wymagającymi szlakami wyposażonymi w zabezpieczenia.",
    "image": "r05_slowacki_raj_szlak.jpg"
  },
  {
    "id": "R05_CZSL_04",
    "section": "Atrakcje turystyczne Czech i Słowacji",
    "type": "fill_in",
    "prompt": "Śnieżka ma __________ m n.p.m. i jest najwyższym szczytem __________ oraz Czech.",
    "options": null,
    "answer": [
      "1603",
      "Karkonoszy"
    ],
    "altAnswers": [
      [
        "1603",
        "1603 m"
      ],
      [
        "Karkonoszy",
        "karkonoszy"
      ]
    ],
    "explanation": "Śnieżka ma 1603 m n.p.m. i jest najwyższym szczytem Karkonoszy oraz Czech."
  },
  {
    "id": "R05_CZSL_05",
    "section": "Atrakcje turystyczne Czech i Słowacji",
    "type": "riddle",
    "prompt": "Zespoły piaskowcowych skał porozcinanych wąskimi szczelinami i tworzących labirynty to czeskie...",
    "options": null,
    "answer": "skalne miasta",
    "altAnswers": [
      "skalne miasta",
      "Skalne miasta",
      "piaskowcowe skalne miasta"
    ],
    "explanation": "W północnej części Czech tzw. skalne miasta tworzą piaskowcowe skały porozcinane szczelinami, przypominające labirynty."
  },
  {
    "id": "R05_CZSL_06",
    "section": "Atrakcje turystyczne Czech i Słowacji",
    "type": "odd_one_out",
    "prompt": "Wskaż element niepasujący do atrakcji Pragi: Zamek na Hradczanach, Most Karola, Ratusz Staromiejski, Bajkał.",
    "options": null,
    "answer": "Bajkał",
    "explanation": "Zamek na Hradczanach, Most Karola i Ratusz Staromiejski należą do atrakcji Pragi, natomiast Bajkał jest jeziorem w Rosji.",
    "image": "r05_praga_zabytki.jpg"
  },
  {
    "id": "R05_CZSL_07",
    "section": "Atrakcje turystyczne Czech i Słowacji",
    "type": "scenario",
    "prompt": "Turysta chce zwiedzić jeden z największych obszarów krasowych w Czechach, w którym rozpoznano ponad 1000 jaskiń, a pięć udostępniono do zwiedzania. Które miejsce powinien wybrać?",
    "options": [
      "Kras Morawski",
      "Pojezierze Litewskie",
      "Kraj Krasnodarski",
      "Puszczę Białowieską",
      "Zagłębie Ruhry"
    ],
    "answer": 0,
    "explanation": "Kras Morawski opisano jako jeden z największych obszarów krasowych w Czechach, z ponad 1000 rozpoznanych jaskiń i pięcioma udostępnionymi do zwiedzania."
  },
  {
    "id": "R05_CZSL_08",
    "section": "Atrakcje turystyczne Czech i Słowacji",
    "type": "match",
    "prompt": "Połącz obiekt lub region z właściwym opisem.",
    "options": null,
    "left": [
      "Tatry",
      "Słowacki Raj",
      "Karkonosze",
      "Adrszpaskie Skalne Miasto"
    ],
    "right": [
      "najwyższa część Karpat na Słowacji",
      "wapienny płaskowyż z jaskiniami",
      "najwyższe pasmo górskie w Czechach",
      "piaskowcowe skały tworzące labirynty"
    ],
    "answer": {
      "Tatry": "najwyższa część Karpat na Słowacji",
      "Słowacki Raj": "wapienny płaskowyż z jaskiniami",
      "Karkonosze": "najwyższe pasmo górskie w Czechach",
      "Adrszpaskie Skalne Miasto": "piaskowcowe skały tworzące labirynty"
    },
    "explanation": "Tatry są najwyższą częścią Karpat na Słowacji, Słowacki Raj to wapienny płaskowyż, Karkonosze są najwyższym pasmem Czech, a Adrszpaskie Skalne Miasto tworzą piaskowcowe skały."
  },
  {
    "id": "R05_CZSL_09",
    "section": "Atrakcje turystyczne Czech i Słowacji",
    "type": "sort",
    "prompt": "Pogrupuj atrakcje turystyczne Czech i Słowacji.",
    "options": null,
    "items": [
      "Krumlov",
      "Karlsztejn",
      "Bojnice",
      "Zamek Spiski",
      "Bratysława",
      "Bouzov"
    ],
    "categories": [
      "Czechy",
      "Słowacja"
    ],
    "answer": {
      "Czechy": [
        "Krumlov",
        "Karlsztejn",
        "Bouzov"
      ],
      "Słowacja": [
        "Bojnice",
        "Zamek Spiski",
        "Bratysława"
      ]
    },
    "explanation": "W podsumowaniu wymieniono czeskie zamki Krumlov, Karlsztejn i Bouzov oraz słowackie przykłady: Bojnice, Bratysławę i Zamek Spiski."
  },
  {
    "id": "R05_CZSL_10",
    "section": "Atrakcje turystyczne Czech i Słowacji",
    "type": "sequence",
    "prompt": "Ułóż elementy od pojęcia najszerszego do najbardziej szczegółowego.",
    "options": null,
    "items": [
      "Karkonosze",
      "Czechy",
      "Śnieżka",
      "Sudety"
    ],
    "answer": [
      "Czechy",
      "Sudety",
      "Karkonosze",
      "Śnieżka"
    ],
    "explanation": "Opisuje się Czechy, przez które przebiegają Sudety; Karkonosze są ich najwyższym pasmem, a Śnieżka jest najwyższym szczytem Karkonoszy i Czech."
  },
  {
    "id": "R05_UKR_01",
    "section": "Współczesne problemy Ukrainy",
    "type": "single_choice",
    "prompt": "Do którego roku Ukraina wchodziła w skład Związku Socjalistycznych Republik Sowieckich?",
    "options": [
      "1991",
      "2004",
      "2013",
      "2014",
      "2016",
      "2022"
    ],
    "answer": 0,
    "explanation": "Ukraina do 1991 roku wchodziła w skład ZSRS, a od 1991 roku jest państwem suwerennym."
  },
  {
    "id": "R05_UKR_02",
    "section": "Współczesne problemy Ukrainy",
    "type": "true_false",
    "prompt": "W 2016 roku Ukraina została włączona do strefy wolnego handlu z Unią Europejską.",
    "options": null,
    "answer": true,
    "explanation": "Ukraina w 2014 roku uzyskała status kraju stowarzyszonego z UE, a w 2016 roku została włączona do strefy wolnego handlu z UE."
  },
  {
    "id": "R05_UKR_03",
    "section": "Współczesne problemy Ukrainy",
    "type": "multi_select",
    "prompt": "Zaznacz problemy, z którymi Ukraina mierzyła się po uzyskaniu niepodległości.",
    "options": [
      "zależność gospodarcza od Rosji",
      "słabe struktury państwa i korupcja",
      "brak własnej waluty i kapitału",
      "podziały i niepokoje społeczne",
      "aktywne wulkany na Kamczatce",
      "zamknięcie kopalń w Zagłębiu Ruhry"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Wśród problemów Ukrainy po 1991 roku wymieniono zależność od Rosji, słabe struktury państwa, korupcję, brak własnej waluty i kapitału oraz podziały społeczne."
  },
  {
    "id": "R05_UKR_04",
    "section": "Współczesne problemy Ukrainy",
    "type": "fill_in",
    "prompt": "W 2013 roku prezydent Wiktor __________ odmówił podpisania umowy stowarzyszeniowej z __________.",
    "options": null,
    "answer": [
      "Janukowycz",
      "Unią Europejską"
    ],
    "altAnswers": [
      [
        "Janukowycz",
        "Wiktor Janukowycz"
      ],
      [
        "Unią Europejską",
        "UE",
        "Unia Europejska",
        "unia europejska"
      ]
    ],
    "explanation": "Odmowa podpisania umowy stowarzyszeniowej z Unią Europejską przez Wiktora Janukowycza doprowadziła do wielkich protestów w Kijowie."
  },
  {
    "id": "R05_UKR_05",
    "section": "Współczesne problemy Ukrainy",
    "type": "riddle",
    "prompt": "Zjawisko polegające na podejmowaniu decyzji w zamian za korzyści to...",
    "options": null,
    "answer": "korupcja",
    "altAnswers": [
      "korupcja",
      "Korupcja"
    ],
    "explanation": "Korupcję zdefiniowano jako podejmowanie decyzji przez urzędników, polityków lub przedsiębiorców w zamian za odnoszone przez nich korzyści."
  },
  {
    "id": "R05_UKR_06",
    "section": "Współczesne problemy Ukrainy",
    "type": "odd_one_out",
    "prompt": "Wskaż element niepasujący do problemów Ukrainy po 1991 roku: korupcja, zależność od Rosji, brak kapitału, Karkonosze.",
    "options": null,
    "answer": "Karkonosze",
    "explanation": "Karkonosze są pasmem górskim w Czechach, a pozostałe elementy należą do problemów Ukrainy po uzyskaniu niepodległości."
  },
  {
    "id": "R05_UKR_07",
    "section": "Współczesne problemy Ukrainy",
    "type": "scenario",
    "prompt": "W Kijowie trwają ogromne protesty po odmowie podpisania umowy stowarzyszeniowej z Unią Europejską. Który rok opisuje ta sytuacja?",
    "options": [
      "2013",
      "1991",
      "2004",
      "2016",
      "2022"
    ],
    "answer": 0,
    "explanation": "W 2013 roku odmowa podpisania umowy z UE przez Wiktora Janukowycza wywołała masowe demonstracje w Kijowie."
  },
  {
    "id": "R05_UKR_08",
    "section": "Współczesne problemy Ukrainy",
    "type": "match",
    "prompt": "Połącz rok lub okres z wydarzeniem dotyczącym Ukrainy.",
    "options": null,
    "left": [
      "1991",
      "2004",
      "2014",
      "2022"
    ],
    "right": [
      "odzyskanie suwerenności po rozpadzie ZSRS",
      "pomarańczowa rewolucja",
      "aneksja Krymu i początek konfliktu zbrojnego",
      "zbrojna napaść Rosji na Ukrainę"
    ],
    "answer": {
      "1991": "odzyskanie suwerenności po rozpadzie ZSRS",
      "2004": "pomarańczowa rewolucja",
      "2014": "aneksja Krymu i początek konfliktu zbrojnego",
      "2022": "zbrojna napaść Rosji na Ukrainę"
    },
    "explanation": "Oś czasu prowadzi od 1991 roku, przez protesty 2004 i wydarzenia 2014 roku, po rosyjską inwazję w 2022 roku.",
    "image": "r05_ukraina_mapa_wojna.jpg"
  },
  {
    "id": "R05_UKR_09",
    "section": "Współczesne problemy Ukrainy",
    "type": "sort",
    "prompt": "Pogrupuj skutki agresji Rosji na Ukrainę według ich charakteru.",
    "options": null,
    "items": [
      "wyjazd 6-7 mln osób z kraju",
      "spadek powierzchni obsianych pól o 30 %",
      "zniszczenie infrastruktury energetycznej",
      "pogłębianie problemów demograficznych"
    ],
    "categories": [
      "skutki społeczne",
      "skutki gospodarcze"
    ],
    "answer": {
      "skutki społeczne": [
        "wyjazd 6-7 mln osób z kraju",
        "pogłębianie problemów demograficznych"
      ],
      "skutki gospodarcze": [
        "spadek powierzchni obsianych pól o 30 %",
        "zniszczenie infrastruktury energetycznej"
      ]
    },
    "explanation": "Rozdziela się skutki wojny na społeczne, takie jak migracja i problemy demograficzne, oraz gospodarcze, np. spadek zasiewów i zniszczenie infrastruktury."
  },
  {
    "id": "R05_UKR_10",
    "section": "Współczesne problemy Ukrainy",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z najnowszej historii Ukrainy w kolejności chronologicznej.",
    "options": null,
    "items": [
      "inwazja Rosji na Ukrainę",
      "pomarańczowa rewolucja",
      "odzyskanie suwerenności",
      "aneksja Krymu"
    ],
    "answer": [
      "odzyskanie suwerenności",
      "pomarańczowa rewolucja",
      "aneksja Krymu",
      "inwazja Rosji na Ukrainę"
    ],
    "explanation": "Kolejność wydarzeń to: odzyskanie suwerenności w 1991 roku, pomarańczowa rewolucja w 2004 roku, aneksja Krymu w 2014 roku i inwazja Rosji w 2022 roku."
  },
  {
    "id": "R05_ROS_01",
    "section": "Zróżnicowanie środowiska przyrodniczego Rosji",
    "type": "single_choice",
    "prompt": "Ile razy Rosja jest większa od Polski?",
    "options": [
      "5 razy",
      "14 razy",
      "40 razy",
      "54 razy",
      "75 razy",
      "100 razy"
    ],
    "answer": 3,
    "explanation": "Powierzchnia Rosji wynosi 17 mln km², czyli jest 54 razy większa od powierzchni Polski."
  },
  {
    "id": "R05_ROS_02",
    "section": "Zróżnicowanie środowiska przyrodniczego Rosji",
    "type": "true_false",
    "prompt": "Europejska część Rosji skupia około 75 % ludności kraju.",
    "options": null,
    "answer": true,
    "explanation": "W europejskiej części Rosji mieszka 75 % ludności kraju."
  },
  {
    "id": "R05_ROS_03",
    "section": "Zróżnicowanie środowiska przyrodniczego Rosji",
    "type": "multi_select",
    "prompt": "Zaznacz elementy środowiska przyrodniczego Rosji.",
    "options": [
      "wieloletnia zmarzlina na Syberii",
      "aktywne wulkany na Kamczatce",
      "roślinność śródziemnomorska nad Morzem Czarnym",
      "Bajkał",
      "Mierzeja Kurońska",
      "Puszcza Białowieska"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Podsumowanie wymienia m.in. wieloletnią zmarzlinę na Syberii, wulkany Kamczatki, roślinność śródziemnomorską nad Morzem Czarnym i jezioro Bajkał."
  },
  {
    "id": "R05_ROS_04",
    "section": "Zróżnicowanie środowiska przyrodniczego Rosji",
    "type": "fill_in",
    "prompt": "Fragment terytorium Rosji graniczący z Polską to obwód __________, który jest __________.",
    "options": null,
    "answer": [
      "królewiecki",
      "eksklawą"
    ],
    "altAnswers": [
      [
        "królewiecki",
        "krolewiecki",
        "królewieckim"
      ],
      [
        "eksklawą",
        "eksklawa",
        "eksklawą Federacji Rosyjskiej"
      ]
    ],
    "explanation": "Obwód królewiecki jest fragmentem terytorium Rosji graniczącym z Polską i stanowi eksklawę Federacji Rosyjskiej."
  },
  {
    "id": "R05_ROS_05",
    "section": "Zróżnicowanie środowiska przyrodniczego Rosji",
    "type": "riddle",
    "prompt": "Najgłębsze jezioro świata, którego maksymalna głębokość wynosi 1672 m, to...",
    "options": null,
    "answer": "Bajkał",
    "altAnswers": [
      "Bajkał",
      "Bajkal",
      "jezioro Bajkał"
    ],
    "explanation": "Bajkał jest najgłębszym jeziorem świata, a jego maksymalna głębokość wynosi 1672 m.",
    "image": "r05_bajkal_zima.jpg"
  },
  {
    "id": "R05_ROS_06",
    "section": "Zróżnicowanie środowiska przyrodniczego Rosji",
    "type": "odd_one_out",
    "prompt": "Wskaż element niepasujący do cech Syberii: tajga, wieloletnia zmarzlina, długie mroźne zimy, palmy nad Morzem Czarnym.",
    "options": null,
    "answer": "palmy nad Morzem Czarnym",
    "explanation": "Tajga, wieloletnia zmarzlina i długie mroźne zimy opisują Syberię; palmy nad Morzem Czarnym dotyczą południowo-zachodniego krańca Rosji."
  },
  {
    "id": "R05_ROS_07",
    "section": "Zróżnicowanie środowiska przyrodniczego Rosji",
    "type": "scenario",
    "prompt": "W miejscowości nad Morzem Czarnym zimy są łagodne, lata gorące, rosną palmy i uprawia się winogrona. Który region Rosji opisuje się?",
    "options": [
      "Kraj Krasnodarski",
      "Kamczatkę",
      "Syberię",
      "obwód królewiecki",
      "Nizinę Wschodnioeuropejską"
    ],
    "answer": 0,
    "explanation": "Kraj Krasnodarski ma cechy klimatu umiarkowanego i śródziemnomorskiego; nad Morzem Czarnym rosną tam palmy i uprawia się winogrona."
  },
  {
    "id": "R05_ROS_08",
    "section": "Zróżnicowanie środowiska przyrodniczego Rosji",
    "type": "match",
    "prompt": "Połącz region lub obiekt Rosji z jego cechą.",
    "options": null,
    "left": [
      "Syberia",
      "Kamczatka",
      "Soczi",
      "Bajkał"
    ],
    "right": [
      "surowy klimat kontynentalny",
      "liczne aktywne wulkany",
      "palmy i winogrona nad Morzem Czarnym",
      "najgłębsze jezioro świata"
    ],
    "answer": {
      "Syberia": "surowy klimat kontynentalny",
      "Kamczatka": "liczne aktywne wulkany",
      "Soczi": "palmy i winogrona nad Morzem Czarnym",
      "Bajkał": "najgłębsze jezioro świata"
    },
    "explanation": "Zestawia się bardzo odmienne obszary Rosji: zimną Syberię, wulkaniczną Kamczatkę, cieplejsze wybrzeże Morza Czarnego i jezioro Bajkał."
  },
  {
    "id": "R05_ROS_09",
    "section": "Zróżnicowanie środowiska przyrodniczego Rosji",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do środowiska Rosji.",
    "options": null,
    "items": [
      "tajga",
      "tundra",
      "stepy",
      "roślinność śródziemnomorska"
    ],
    "categories": [
      "Syberia i północ",
      "południe Rosji",
      "wybrzeże Morza Czarnego"
    ],
    "answer": {
      "Syberia i północ": [
        "tajga",
        "tundra"
      ],
      "południe Rosji": [
        "stepy"
      ],
      "wybrzeże Morza Czarnego": [
        "roślinność śródziemnomorska"
      ]
    },
    "explanation": "Tajga i tundra są związane z chłodniejszą częścią Rosji, stepy z suchym południem, a roślinność śródziemnomorska z wybrzeżem Morza Czarnego."
  },
  {
    "id": "R05_ROS_10",
    "section": "Zróżnicowanie środowiska przyrodniczego Rosji",
    "type": "sequence",
    "prompt": "Ułóż obszary Rosji od zachodu ku wschodowi.",
    "options": null,
    "items": [
      "wybrzeża Oceanu Spokojnego",
      "Syberia",
      "europejska część Rosji",
      "góry Ural"
    ],
    "answer": [
      "europejska część Rosji",
      "góry Ural",
      "Syberia",
      "wybrzeża Oceanu Spokojnego"
    ],
    "explanation": "Syberia rozciąga się od gór Ural na zachodzie aż po wybrzeża Oceanu Spokojnego, a europejska część Rosji leży dalej na zachód."
  },
  {
    "id": "R05_REL_01",
    "section": "Relacje Polski z sąsiadami",
    "type": "single_choice",
    "prompt": "Który kraj jest największym odbiorcą polskiego eksportu według wykresu?",
    "options": [
      "Niemcy",
      "Ukraina",
      "Litwa",
      "Słowacja",
      "Białoruś",
      "Rosja"
    ],
    "answer": 0,
    "explanation": "Na wykresie kierunków eksportu z Polski w 2023 roku największym odbiorcą polskiego eksportu są Niemcy."
  },
  {
    "id": "R05_REL_02",
    "section": "Relacje Polski z sąsiadami",
    "type": "true_false",
    "prompt": "Wspólne członkostwo w Unii Europejskiej ułatwia relacje Polski z Niemcami, Czechami, Słowacją i Litwą.",
    "options": null,
    "answer": true,
    "explanation": "Wspólne członkostwo w UE ułatwia i wzmacnia relacje Polski z Niemcami, Czechami, Słowacją i Litwą."
  },
  {
    "id": "R05_REL_03",
    "section": "Relacje Polski z sąsiadami",
    "type": "multi_select",
    "prompt": "Zaznacz kraje sąsiadujące z Polską, które nie należą do Unii Europejskiej.",
    "options": [
      "Ukraina",
      "Białoruś",
      "Rosja",
      "Niemcy",
      "Czechy",
      "Litwa"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Spośród sąsiadów Polski poza Unią Europejską znajdują się Ukraina, Białoruś i Rosja; Niemcy, Czechy i Litwa są członkami UE."
  },
  {
    "id": "R05_REL_04",
    "section": "Relacje Polski z sąsiadami",
    "type": "fill_in",
    "prompt": "Polska była pierwszym państwem na świecie, które uznało niepodległość __________ w __________ roku.",
    "options": null,
    "answer": [
      "Ukrainy",
      "1991"
    ],
    "altAnswers": [
      [
        "Ukrainy",
        "ukrainy"
      ],
      [
        "1991",
        "1991 r."
      ]
    ],
    "explanation": "Polska jako pierwsze państwo na świecie uznała niepodległość Ukrainy w 1991 roku."
  },
  {
    "id": "R05_REL_05",
    "section": "Relacje Polski z sąsiadami",
    "type": "riddle",
    "prompt": "Rodzaj wojny polegający m.in. na wykorzystywaniu migrantów do atakowania granicy nazwano wojną...",
    "options": null,
    "answer": "hybrydową",
    "altAnswers": [
      "hybrydową",
      "hybrydowa",
      "wojną hybrydową",
      "wojna hybrydowa"
    ],
    "explanation": "Wykorzystywanie migrantów do atakowania granicy zostało nazwane wojną hybrydową."
  },
  {
    "id": "R05_REL_06",
    "section": "Relacje Polski z sąsiadami",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo niepasujące do grupy sąsiadów Polski należących do Unii Europejskiej: Niemcy, Czechy, Słowacja, Białoruś.",
    "options": null,
    "answer": "Białoruś",
    "explanation": "Niemcy, Czechy i Słowacja są członkami Unii Europejskiej, natomiast Białoruś nie należy do UE."
  },
  {
    "id": "R05_REL_07",
    "section": "Relacje Polski z sąsiadami",
    "type": "scenario",
    "prompt": "Po wejściu Polski i Czech do Unii Europejskiej oraz strefy Schengen dawne przejście graniczne na moście w Cieszynie zostało zlikwidowane. Co ułatwiły te zmiany?",
    "options": [
      "przepływ osób i towarów",
      "zamykanie szkół mniejszościowych",
      "budowę rurociągu Nord Stream",
      "aneksję terytorium",
      "transport migrantów z Afryki"
    ],
    "answer": 0,
    "explanation": "Wspólne członkostwo w UE i strefie Schengen ułatwiło przepływ osób i towarów między Polską a południowymi sąsiadami.",
    "image": "r05_granica_schengen_cieszyn.jpg"
  },
  {
    "id": "R05_REL_08",
    "section": "Relacje Polski z sąsiadami",
    "type": "match",
    "prompt": "Połącz państwo z aktualnym opisem relacji Polski.",
    "options": null,
    "left": [
      "Niemcy",
      "Ukraina",
      "Rosja",
      "Litwa"
    ],
    "right": [
      "ważny partner gospodarczy w UE",
      "szczególnie bliskie relacje po 2022 roku",
      "relacje bardzo złe",
      "relacje przyjazne i poprawiające się"
    ],
    "answer": {
      "Niemcy": "ważny partner gospodarczy w UE",
      "Ukraina": "szczególnie bliskie relacje po 2022 roku",
      "Rosja": "relacje bardzo złe",
      "Litwa": "relacje przyjazne i poprawiające się"
    },
    "explanation": "Relacje z państwami sąsiednimi są zróżnicowane: Niemcy są ważnym partnerem gospodarczym, Ukraina bliskim partnerem w obliczu wojny, relacje z Rosją są złe, a z Litwą przyjazne."
  },
  {
    "id": "R05_REL_09",
    "section": "Relacje Polski z sąsiadami",
    "type": "sort",
    "prompt": "Pogrupuj przykłady działań lub zjawisk według relacji Polski z sąsiadami.",
    "options": null,
    "items": [
      "wymiana handlowa",
      "pomoc humanitarna",
      "wojna informacyjna",
      "spór o polskie nazwy miejscowości"
    ],
    "categories": [
      "Niemcy",
      "Ukraina",
      "Rosja i Białoruś",
      "Litwa"
    ],
    "answer": {
      "Niemcy": [
        "wymiana handlowa"
      ],
      "Ukraina": [
        "pomoc humanitarna"
      ],
      "Rosja i Białoruś": [
        "wojna informacyjna"
      ],
      "Litwa": [
        "spór o polskie nazwy miejscowości"
      ]
    },
    "explanation": "Wymiana handlowa dotyczy zwłaszcza relacji z Niemcami, pomoc humanitarna Ukrainy, wojna informacyjna Rosji i Białorusi, a kwestia nazw miejscowości relacji z Litwą."
  },
  {
    "id": "R05_REL_10",
    "section": "Relacje Polski z sąsiadami",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia i zjawiska w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Rosja napadła na Ukrainę",
      "Lublin i Wilno połączono wirtualnym portalem",
      "przez kilka stuleci stosunki z Rosją i Niemcami były trudne",
      "Polska uznała niepodległość Ukrainy"
    ],
    "answer": [
      "przez kilka stuleci stosunki z Rosją i Niemcami były trudne",
      "Polska uznała niepodległość Ukrainy",
      "Lublin i Wilno połączono wirtualnym portalem",
      "Rosja napadła na Ukrainę"
    ],
    "explanation": "Kolejność zaczyna się od wielowiekowego tła relacji: Polska uznała niepodległość Ukrainy w 1991 roku, portal Lublin-Wilno powstał w 2021 roku, a rosyjska napaść nastąpiła w 2022 roku."
  },
  {
    "id": "R05_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który dawny kompleks przemysłowy w Essen pełni dziś funkcje muzealne i kulturalne oraz został wpisany na listę UNESCO w 2001 roku?",
    "options": [
      "Zollverein",
      "Nord Stream",
      "Azowstal",
      "Kras Morawski",
      "Bouzov",
      "Zamek Spiski"
    ],
    "answer": 0,
    "explanation": "Dawny kompleks przemysłowy Zollverein w Essen pełni dziś nowe funkcje, mieści muzeum i instytucje kulturalne, a w 2001 roku wpisano go na listę UNESCO."
  },
  {
    "id": "R05_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz skutki utraty przewagi technologicznej niemieckiego przemysłu opisane w tabeli wyzwań.",
    "options": [
      "klienci wybierają bardziej zaawansowane wyroby z USA, Japonii lub Korei Południowej",
      "niemieckie firmy osiągają mniejsze zyski",
      "w niektórych branżach wiele firm zbankrutowało",
      "Niemcy zwiększają import taniej energii z Rosji",
      "Ren i Ruhra odzyskują ryby w XIX wieku"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Tabela wskazuje, że utrata przewagi technologicznej oznacza konkurencję nowocześniejszych wyrobów z innych krajów, mniejsze zyski firm i bankructwa w niektórych branżach."
  },
  {
    "id": "R05_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Zamek w Nieświeżu wzniesiono na przełomie __________ i __________ wieku z inicjatywy Radziwiłłów.",
    "options": null,
    "answer": [
      "XVI",
      "XVII"
    ],
    "altAnswers": [
      [
        "XVI",
        "16",
        "szesnastego"
      ],
      [
        "XVII",
        "17",
        "siedemnastego"
      ]
    ],
    "explanation": "Budowlę w Nieświeżu wzniesiono na przełomie XVI i XVII wieku z inicjatywy Radziwiłłów."
  },
  {
    "id": "R05_HARD_04",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jaskinia w Krasie Morawskim, przez którą przepływa podziemna rzeka Punkva, to...",
    "options": null,
    "answer": "Jaskinia Punkevni",
    "altAnswers": [
      "Jaskinia Punkevni",
      "Punkevni",
      "jaskinia Punkevni"
    ],
    "explanation": "Najbardziej znaną jaskinią Krasu Morawskiego jest Jaskinia Punkevni, przez którą przepływa podziemna rzeka Punkva."
  },
  {
    "id": "R05_HARD_05",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Porozumienia mińskie z 2014 i 2015 roku były przestrzegane i zakończyły konflikt zbrojny Ukrainy z Rosją.",
    "options": null,
    "answer": false,
    "explanation": "Porozumienia mińskie miały doprowadzić do zakończenia walk, ale nie były przestrzegane i konflikt trwał nadal."
  },
  {
    "id": "R05_HARD_06",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Na obszarze Rosji widzisz około 300 wulkanów, z których 29 jest wysoko aktywnych. Region jest słabo zaludniony, więc erupcje zwykle nie wywołują katastrofalnych skutków. Gdzie jesteś?",
    "options": [
      "na Kamczatce",
      "w obwodzie królewieckim",
      "w Soczi",
      "na Pojezierzu Litewskim",
      "w Nizinie Wschodnioeuropejskiej"
    ],
    "answer": 0,
    "explanation": "Tak opisano Półwysep Kamczatka we wschodniej części Rosji: występuje tam około 300 wulkanów, w tym 29 wysoko aktywnych.",
    "image": "r05_kamczatka_wulkany.jpg"
  },
  {
    "id": "R05_HARD_07",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz pojęcie lub zjawisko z właściwym wyjaśnieniem.",
    "options": null,
    "left": [
      "eksklawa",
      "aneksja",
      "wojna informacyjna",
      "wojna hybrydowa"
    ],
    "right": [
      "fragment terytorium oddzielony lądem innego państwa",
      "zagarnięcie terytorium jednego państwa przez inne",
      "celowe rozpowszechnianie fałszywych informacji",
      "wykorzystywanie migrantów do atakowania granicy"
    ],
    "answer": {
      "eksklawa": "fragment terytorium oddzielony lądem innego państwa",
      "aneksja": "zagarnięcie terytorium jednego państwa przez inne",
      "wojna informacyjna": "celowe rozpowszechnianie fałszywych informacji",
      "wojna hybrydowa": "wykorzystywanie migrantów do atakowania granicy"
    },
    "explanation": "Definiuje się eksklawę i aneksję oraz opisuje wojnę informacyjną i hybrydową jako elementy współczesnych konfliktów."
  },
  {
    "id": "R05_HARD_08",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż postać niepasującą do osób związanych z Wilnem: Adam Mickiewicz, Juliusz Słowacki, Czesław Miłosz, Wiktor Janukowycz.",
    "options": null,
    "answer": "Wiktor Janukowycz",
    "explanation": "Adam Mickiewicz, Juliusz Słowacki i Czesław Miłosz zostali wymienieni wśród osób związanych z Wilnem, natomiast Wiktor Janukowycz pojawia się o Ukrainie."
  },
  {
    "id": "R05_HARD_09",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Pogrupuj nazwy według typu waloru lub zjawiska.",
    "options": null,
    "items": [
      "nerpa",
      "żubr",
      "oligarcha",
      "Radziwiłłowie",
      "Krecik",
      "komary i meszki"
    ],
    "categories": [
      "przyroda",
      "społeczeństwo i kultura"
    ],
    "answer": {
      "przyroda": [
        "nerpa",
        "żubr",
        "komary i meszki"
      ],
      "społeczeństwo i kultura": [
        "oligarcha",
        "Radziwiłłowie",
        "Krecik"
      ]
    },
    "explanation": "Nerpa, żubr oraz komary i meszki należą do świata przyrody, natomiast oligarchowie, Radziwiłłowie i Krecik są związani z życiem społecznym lub kulturą."
  },
  {
    "id": "R05_HARD_10",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Rosja dokonała inwazji na Ukrainę",
      "Rosja dokonała aneksji Krymu",
      "Ukraina uzyskała suwerenność",
      "dawny kompleks Zollverein wpisano na listę UNESCO"
    ],
    "answer": [
      "Ukraina uzyskała suwerenność",
      "dawny kompleks Zollverein wpisano na listę UNESCO",
      "Rosja dokonała aneksji Krymu",
      "Rosja dokonała inwazji na Ukrainę"
    ],
    "explanation": "Ukraina uzyskała suwerenność w 1991 roku, Zollverein wpisano na listę UNESCO w 2001 roku, Rosja dokonała aneksji Krymu w 2014 roku, a inwazji na Ukrainę w 2022 roku."
  },
  {
    "id": "R05_HARD_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który region Rosji opisano jako mający klimat łączący cechy klimatu umiarkowanego i śródziemnomorskiego?",
    "options": [
      "Kraj Krasnodarski",
      "Syberia",
      "Kamczatka",
      "obwód królewiecki",
      "Nizina Wschodnioeuropejska",
      "tundra"
    ],
    "answer": 0,
    "explanation": "Kraj Krasnodarski na południowo-zachodnim krańcu Rosji opisano jako region, którego klimat łączy cechy klimatu umiarkowanego i śródziemnomorskiego."
  },
  {
    "id": "R05_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz informacje o relacjach Polski z Litwą, które wynikają.",
    "options": [
      "relacje należą do przyjaznych",
      "ich jakość ulega poprawie",
      "w 2022 roku Litwa uznała prawo do zapisu nazwiska w języku ojczystym",
      "wszystkie kwestie polskiej mniejszości zostały rozwiązane",
      "Litwa jest opisana jako główny odbiorca polskiego eksportu"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Relacje Polski z Litwą opisano jako przyjazne i poprawiające się, a w 2022 roku Litwa uznała prawo mniejszości do zapisu nazwiska w języku ojczystym; część kwestii nadal pozostaje nierozwiązana."
  }
];

const KID_PROMPTS = {};

const chapter = {
  "id": "r05",
  "number": 5,
  "title": "Sąsiedzi Polski",
  "icon": "🗺️",
  "sectionOrder": [
    "Przemiany przemysłu Niemiec",
    "Walory przyrodnicze i kulturowe Litwy i Białorusi",
    "Atrakcje turystyczne Czech i Słowacji",
    "Współczesne problemy Ukrainy",
    "Zróżnicowanie środowiska przyrodniczego Rosji",
    "Relacje Polski z sąsiadami"
  ],
  "sectionIcons": {
    "Przemiany przemysłu Niemiec": "🏭",
    "Walory przyrodnicze i kulturowe Litwy i Białorusi": "🌿",
    "Atrakcje turystyczne Czech i Słowacji": "⛰️",
    "Współczesne problemy Ukrainy": "🇺🇦",
    "Zróżnicowanie środowiska przyrodniczego Rosji": "🌏",
    "Relacje Polski z sąsiadami": "🤝"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
