// Skróty sekcji (do identyfikatorów ćwiczeń):
//   DOW  = Dowody ewolucji
//   GAT  = Powstawanie gatunków
//   DOB  = Dobór naturalny i sztuczny
//   CZE  = Człowiek i człekokształtne
//   EWC  = Ewolucja człowieka
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_DOW_01",
    "section": "Dowody ewolucji",
    "type": "single_choice",
    "prompt": "Które określenie najlepiej opisuje ewolucję organizmów?",
    "options": [
      "Rozwój pojedynczego organizmu od narodzin do śmierci",
      "Stopniowe zmiany organizmów prowadzące do powstawania nowych gatunków",
      "Sezonowa zmiana zachowania zwierząt",
      "Nagłe wymieranie wszystkich organizmów w środowisku",
      "Wyłącznie zmiana miejsca występowania gatunku",
      "Proces zachodzący tylko u bakterii"
    ],
    "answer": 1,
    "explanation": "Ewolucja to proces stopniowych i ciągłych zmian organizmów prowadzący do powstawania nowych gatunków."
  },
  {
    "id": "R02_DOW_02",
    "section": "Dowody ewolucji",
    "type": "multi_select",
    "prompt": "Zaznacz bezpośrednie dowody ewolucji.",
    "options": [
      "skamieniałości",
      "narządy szczątkowe",
      "formy pośrednie",
      "struktury analogiczne",
      "żywe skamieniałości",
      "rozmieszczenie organizmów na kuli ziemskiej"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Bezpośrednie dowody ewolucji to skamieniałości, formy pośrednie i żywe skamieniałości.",
    "image": "r02_skamienialosci.jpg"
  },
  {
    "id": "R02_DOW_03",
    "section": "Dowody ewolucji",
    "type": "true_false",
    "prompt": "Skamieniałości obejmują zarówno szczątki organizmów, jak i ślady ich działalności zachowane w osadach skorupy ziemskiej.",
    "options": null,
    "answer": true,
    "explanation": "Do skamieniałości należą między innymi kości, zęby, muszle, a także tropy, gniazda, nory i skamieniałe odchody.",
    "image": "r02_skamienialosci.jpg"
  },
  {
    "id": "R02_DOW_04",
    "section": "Dowody ewolucji",
    "type": "fill_in",
    "prompt": "Organizmy łączące cechy dwóch różnych grup systematycznych nazywamy formami __________.",
    "options": null,
    "answer": [
      "pośrednimi"
    ],
    "explanation": "Archeopteryks, tiktaalik i ichtiostega są przykładami form pośrednich."
  },
  {
    "id": "R02_DOW_05",
    "section": "Dowody ewolucji",
    "type": "riddle",
    "prompt": "Łączył cechy gadów i ptaków: miał pióra i skrzydła, ale także zęby, długi ogon i pazury na przednich kończynach. Co to za zwierzę?",
    "options": null,
    "answer": "archeopteryks",
    "explanation": "Archeopteryks jest przykładem formy pośredniej łączącej cechy gadów i ptaków.",
    "image": "r02_archeopteryks.jpg"
  },
  {
    "id": "R02_DOW_06",
    "section": "Dowody ewolucji",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do bezpośrednich dowodów ewolucji: skamieniałości, formy pośrednie, żywe skamieniałości, narządy szczątkowe.",
    "options": null,
    "answer": "narządy szczątkowe",
    "explanation": "Narządy szczątkowe są pośrednim dowodem ewolucji; pozostałe trzy przykłady należą do dowodów bezpośrednich."
  },
  {
    "id": "R02_DOW_07",
    "section": "Dowody ewolucji",
    "type": "scenario",
    "prompt": "Badacz porównuje kończynę przednią konia ze skrzydłem nietoperza. Narządy pełnią inne funkcje, ale składają się z odpowiadających sobie kości. Jak powinien je sklasyfikować?",
    "options": [
      "struktury homologiczne",
      "struktury analogiczne",
      "narządy szczątkowe",
      "żywe skamieniałości"
    ],
    "answer": 0,
    "explanation": "Kończyna konia i skrzydło nietoperza mają wspólne pochodzenie i podobną budowę wewnętrzną, dlatego są strukturami homologicznymi.",
    "image": "r02_struktury_homologiczne.jpg"
  },
  {
    "id": "R02_DOW_08",
    "section": "Dowody ewolucji",
    "type": "match",
    "prompt": "Połącz przykład z rodzajem dowodu lub zjawiska.",
    "options": null,
    "left": [
      "kość ogonowa człowieka",
      "skrzydło ptaka i skrzydło owada",
      "skrzydło nietoperza i kończyna konia",
      "tiktaalik"
    ],
    "right": [
      "struktury homologiczne",
      "narząd szczątkowy",
      "forma pośrednia",
      "struktury analogiczne"
    ],
    "answer": {
      "kość ogonowa człowieka": "narząd szczątkowy",
      "skrzydło ptaka i skrzydło owada": "struktury analogiczne",
      "skrzydło nietoperza i kończyna konia": "struktury homologiczne",
      "tiktaalik": "forma pośrednia"
    },
    "explanation": "Kość ogonowa jest narządem szczątkowym, skrzydła ptaka i owada są analogiczne, kończyna konia i skrzydło nietoperza homologiczne, a tiktaalik jest formą pośrednią."
  },
  {
    "id": "R02_DOW_09",
    "section": "Dowody ewolucji",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do bezpośrednich i pośrednich dowodów ewolucji.",
    "options": null,
    "items": [
      "kość ogonowa człowieka",
      "archeopteryks",
      "rozmieszczenie torbaczy w Australii",
      "skamieniałe muszle amonitów",
      "skrzydło nietoperza i kończyna konia",
      "latimeria"
    ],
    "categories": [
      "bezpośrednie",
      "pośrednie"
    ],
    "answer": {
      "bezpośrednie": [
        "skamieniałe muszle amonitów",
        "archeopteryks",
        "latimeria"
      ],
      "pośrednie": [
        "kość ogonowa człowieka",
        "rozmieszczenie torbaczy w Australii",
        "skrzydło nietoperza i kończyna konia"
      ]
    },
    "explanation": "Skamieniałości, formy pośrednie i żywe skamieniałości są dowodami bezpośrednimi, a narządy szczątkowe, rozmieszczenie organizmów i struktury homologiczne należą do dowodów pośrednich."
  },
  {
    "id": "R02_DOW_10",
    "section": "Dowody ewolucji",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania i odsłaniania skamieniałości ryby w prawidłowej kolejności.",
    "options": null,
    "items": [
      "erozja niszczy kolejne warstwy skał",
      "martwa ryba opada na dno",
      "skamieniały szkielet zostaje odsłonięty",
      "twarde części ulegają skamienieniu i sprasowaniu",
      "szczątki zostają przykryte osadem"
    ],
    "answer": [
      "martwa ryba opada na dno",
      "szczątki zostają przykryte osadem",
      "twarde części ulegają skamienieniu i sprasowaniu",
      "erozja niszczy kolejne warstwy skał",
      "skamieniały szkielet zostaje odsłonięty"
    ],
    "explanation": "Szybkie pogrzebanie szczątków w osadzie umożliwia skamienienie twardych części, a późniejsza erozja może odsłonić skamieniałość."
  },
  {
    "id": "R02_DOW_11",
    "section": "Dowody ewolucji",
    "type": "single_choice",
    "prompt": "Która para jest przykładem struktur analogicznych?",
    "options": [
      "kończyna konia i skrzydło nietoperza",
      "ręka człowieka i kończyna przednia konia",
      "kość ramienna konia i kość ramienna nietoperza",
      "skrzydło ptaka i skrzydło owada",
      "zęby mądrości i kość ogonowa",
      "tiktaalik i ichtiostega"
    ],
    "answer": 3,
    "explanation": "Skrzydła ptaka i owada pełnią tę samą funkcję, lecz mają inną budowę wewnętrzną i pochodzenie.",
    "image": "r02_struktury_analogiczne.jpg"
  },
  {
    "id": "R02_GAT_01",
    "section": "Powstawanie gatunków",
    "type": "single_choice",
    "prompt": "W którym roku Karol Darwin rozpoczął podróż dookoła świata na okręcie Beagle?",
    "options": [
      "1758",
      "1809",
      "1831",
      "1859",
      "1866",
      "1953"
    ],
    "answer": 2,
    "explanation": "Darwin wyruszył na Beagle w 1831 roku, a zebrane obserwacje pomogły mu sformułować teorię ewolucji."
  },
  {
    "id": "R02_GAT_02",
    "section": "Powstawanie gatunków",
    "type": "multi_select",
    "prompt": "Zaznacz organizmy będące endemitami Galapagos.",
    "options": [
      "żółw słoniowy",
      "latimeria",
      "legwan morski",
      "pingwin równikowy",
      "łodzik",
      "mamucie niemowlę"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "Do endemitów Galapagos należą między innymi żółw słoniowy, legwan morski i pingwin równikowy; endemity żyją tylko na ograniczonym obszarze.",
    "image": "r02_galapagos.jpg"
  },
  {
    "id": "R02_GAT_03",
    "section": "Powstawanie gatunków",
    "type": "true_false",
    "prompt": "Izolacja geograficzna może sprawić, że dwie grupy osobników tego samego gatunku przestaną się ze sobą krzyżować.",
    "options": null,
    "answer": true,
    "explanation": "Oddzielenie grup ogranicza kontakt i krzyżowanie. Z czasem różnice mogą stać się tak duże, że powstaje nowy gatunek."
  },
  {
    "id": "R02_GAT_04",
    "section": "Powstawanie gatunków",
    "type": "fill_in",
    "prompt": "Gatunki żyjące tylko na ograniczonym obszarze nazywamy __________.",
    "options": null,
    "answer": [
      "endemitami"
    ],
    "explanation": "Darwin obserwował na Galapagos gatunki niespotykane nigdzie indziej, czyli endemity."
  },
  {
    "id": "R02_GAT_05",
    "section": "Powstawanie gatunków",
    "type": "riddle",
    "prompt": "Ptaki z Galapagos, na których przykładzie można prześledzić powstawanie nowych gatunków, to...",
    "options": null,
    "answer": "darwinki",
    "explanation": "Darwinki wywodzą się od wspólnego przodka z Ameryki Południowej, a ich populacje przystosowały się do warunków różnych wysp.",
    "image": "r02_darwinki_dzioby.jpg"
  },
  {
    "id": "R02_GAT_06",
    "section": "Powstawanie gatunków",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do obserwacji Darwina na Galapagos: endemity, darwinki, żółw słoniowy, neandertalczyk.",
    "options": null,
    "answer": "neandertalczyk",
    "explanation": "Neandertalczyk jest formą z ewolucji człowieka, a pozostałe elementy wiążą się z obserwacjami organizmów Galapagos."
  },
  {
    "id": "R02_GAT_07",
    "section": "Powstawanie gatunków",
    "type": "scenario",
    "prompt": "Część populacji ptaków trafia na odległą wyspę i przestaje krzyżować się z populacją wyjściową. Na wyspie występuje inny pokarm, więc z czasem utrwalają się odmienne cechy. Jaki proces rozpoczął powstawanie nowego gatunku?",
    "options": [
      "konwergencja",
      "izolacja geograficzna",
      "dobór sztuczny",
      "mumifikacja"
    ],
    "answer": 1,
    "explanation": "Pierwszym krokiem jest izolacja geograficzna, która rozdziela populacje i ogranicza kontakt i krzyżowanie między nimi."
  },
  {
    "id": "R02_GAT_08",
    "section": "Powstawanie gatunków",
    "type": "match",
    "prompt": "Połącz element związany z Darwinem z właściwą informacją.",
    "options": null,
    "left": [
      "Beagle",
      "1831",
      "Galapagos",
      "endemit"
    ],
    "right": [
      "miejsce ważnych obserwacji",
      "gatunek żyjący na ograniczonym obszarze",
      "okręt podróży Darwina",
      "rok rozpoczęcia wyprawy"
    ],
    "answer": {
      "Beagle": "okręt podróży Darwina",
      "1831": "rok rozpoczęcia wyprawy",
      "Galapagos": "miejsce ważnych obserwacji",
      "endemit": "gatunek żyjący na ograniczonym obszarze"
    },
    "explanation": "Darwin wyruszył w 1831 roku na Beagle, prowadził ważne obserwacje na Galapagos, a gatunki ograniczone do jednego obszaru to endemity."
  },
  {
    "id": "R02_GAT_09",
    "section": "Powstawanie gatunków",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do dwóch darwinek występujących na Galapagos.",
    "options": null,
    "items": [
      "masywny dziób",
      "żerowanie na kwiatach kaktusów",
      "zjadanie nasion o twardych łupinach",
      "długi dziób"
    ],
    "categories": [
      "darwinka kaktusowa",
      "darwinka wielkodzioba"
    ],
    "answer": {
      "darwinka kaktusowa": [
        "długi dziób",
        "żerowanie na kwiatach kaktusów"
      ],
      "darwinka wielkodzioba": [
        "masywny dziób",
        "zjadanie nasion o twardych łupinach"
      ]
    },
    "explanation": "Kształt dzioba darwinek jest związany z rodzajem zdobywanego pokarmu.",
    "image": "r02_darwinki_dzioby.jpg"
  },
  {
    "id": "R02_GAT_10",
    "section": "Powstawanie gatunków",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania nowego gatunku w wyniku izolacji geograficznej.",
    "options": null,
    "items": [
      "narastają różnice między grupami",
      "część osobników zostaje odizolowana",
      "po ponownym spotkaniu osobniki nie mogą wydać wspólnego potomstwa",
      "odizolowana grupa przystosowuje się do innych warunków",
      "grupy nie krzyżują się ze sobą"
    ],
    "answer": [
      "część osobników zostaje odizolowana",
      "grupy nie krzyżują się ze sobą",
      "odizolowana grupa przystosowuje się do innych warunków",
      "narastają różnice między grupami",
      "po ponownym spotkaniu osobniki nie mogą wydać wspólnego potomstwa"
    ],
    "explanation": "Izolacja rozdziela populacje, a różne warunki środowiska sprzyjają narastaniu różnic prowadzących do powstania nowego gatunku."
  },
  {
    "id": "R02_GAT_11",
    "section": "Powstawanie gatunków",
    "type": "single_choice",
    "prompt": "Skąd pochodził wspólny przodek darwinek?",
    "options": [
      "z Australii",
      "z Europy",
      "z Afryki",
      "z Ameryki Północnej",
      "z Ameryki Południowej",
      "z Azji"
    ],
    "answer": 4,
    "explanation": "Wspólny przodek darwinek pochodził z Ameryki Południowej i żywił się nasionami.",
    "image": "r02_darwinki_dzioby.jpg"
  },
  {
    "id": "R02_DOB_01",
    "section": "Dobór naturalny i sztuczny",
    "type": "single_choice",
    "prompt": "Jak Darwin nazwał konkurencję organizmów o ograniczone zasoby środowiska?",
    "options": [
      "walką o byt",
      "izolacją geograficzną",
      "konwergencją",
      "rekombinacją",
      "doborem sztucznym",
      "zmiennością genetyczną"
    ],
    "answer": 0,
    "explanation": "Konkurencję o pokarm, wodę, miejsce do życia i partnera do rozrodu Darwin nazwał walką o byt."
  },
  {
    "id": "R02_DOB_02",
    "section": "Dobór naturalny i sztuczny",
    "type": "multi_select",
    "prompt": "O jakie zasoby organizmy mogą konkurować w walce o byt?",
    "options": [
      "pokarm",
      "wodę",
      "skamieniałości",
      "miejsce do życia",
      "partnera do rozrodu",
      "warstwy osadu"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Walka o byt obejmuje konkurencję między innymi o pokarm, wodę, miejsce do życia i partnera do rozrodu."
  },
  {
    "id": "R02_DOB_03",
    "section": "Dobór naturalny i sztuczny",
    "type": "true_false",
    "prompt": "W doborze sztucznym o wyborze osobników przeznaczonych do rozrodu decyduje człowiek.",
    "options": null,
    "answer": true,
    "explanation": "Dobór sztuczny jest celowym działaniem hodowcy, który wybiera osobniki o pożądanych cechach."
  },
  {
    "id": "R02_DOB_04",
    "section": "Dobór naturalny i sztuczny",
    "type": "fill_in",
    "prompt": "Mechanizm, dzięki któremu przeżywają osobniki najlepiej przystosowane do warunków środowiska, to dobór __________.",
    "options": null,
    "answer": [
      "naturalny"
    ],
    "explanation": "Dobór naturalny sprzyja osobnikom najlepiej dostosowanym do danych warunków."
  },
  {
    "id": "R02_DOB_05",
    "section": "Dobór naturalny i sztuczny",
    "type": "riddle",
    "prompt": "Hodowca wybiera do rozrodu tylko osobniki o pożądanych cechach, aby utrwalić je w kolejnych pokoleniach. Jak nazywa się ten proces?",
    "options": null,
    "answer": "dobór sztuczny",
    "explanation": "Dobór sztuczny prowadzi do powstawania hodowlanych ras zwierząt i odmian roślin."
  },
  {
    "id": "R02_DOB_06",
    "section": "Dobór naturalny i sztuczny",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do doboru naturalnego: warunki środowiska, walka o byt, najlepiej przystosowane osobniki, hodowca.",
    "options": null,
    "answer": "hodowca",
    "explanation": "W doborze naturalnym o selekcji decydują warunki środowiska, a hodowca decyduje w doborze sztucznym."
  },
  {
    "id": "R02_DOB_07",
    "section": "Dobór naturalny i sztuczny",
    "type": "scenario",
    "prompt": "W populacji drapieżników część osobników jest szybsza i skuteczniej zdobywa pożywienie. Częściej dożywają wieku rozrodczego i przekazują geny potomstwu. Jaki mechanizm działa w tej sytuacji?",
    "options": [
      "dobór sztuczny",
      "izolacja geograficzna",
      "dobór naturalny",
      "mumifikacja"
    ],
    "answer": 2,
    "explanation": "Lepsze przeżywanie i rozmnażanie osobników dobrze przystosowanych jest przykładem doboru naturalnego.",
    "image": "r02_dobor_naturalny.jpg"
  },
  {
    "id": "R02_DOB_08",
    "section": "Dobór naturalny i sztuczny",
    "type": "match",
    "prompt": "Połącz pojęcie z właściwym opisem.",
    "options": null,
    "left": [
      "dobór naturalny",
      "dobór sztuczny",
      "walka o byt",
      "zmienność genetyczna"
    ],
    "right": [
      "różnice między osobnikami jednego gatunku",
      "selekcja zależna od decyzji człowieka",
      "konkurencja o ograniczone zasoby",
      "selekcja zależna od warunków środowiska"
    ],
    "answer": {
      "dobór naturalny": "selekcja zależna od warunków środowiska",
      "dobór sztuczny": "selekcja zależna od decyzji człowieka",
      "walka o byt": "konkurencja o ograniczone zasoby",
      "zmienność genetyczna": "różnice między osobnikami jednego gatunku"
    },
    "explanation": "Dobór naturalny zależy od środowiska, sztuczny od człowieka, walka o byt oznacza konkurencję, a zmienność genetyczna to różnice między osobnikami."
  },
  {
    "id": "R02_DOB_09",
    "section": "Dobór naturalny i sztuczny",
    "type": "sort",
    "prompt": "Rozdziel cechy doboru naturalnego i sztucznego.",
    "options": null,
    "items": [
      "prowadzi do hodowlanych ras i odmian",
      "o selekcji decydują warunki środowiska",
      "do rozrodu wybiera się osobniki o pożądanych cechach",
      "przeżywają najlepiej przystosowane osobniki",
      "o selekcji decyduje człowiek",
      "prowadzi do powstania nowych gatunków"
    ],
    "categories": [
      "dobór naturalny",
      "dobór sztuczny"
    ],
    "answer": {
      "dobór naturalny": [
        "o selekcji decydują warunki środowiska",
        "przeżywają najlepiej przystosowane osobniki",
        "prowadzi do powstania nowych gatunków"
      ],
      "dobór sztuczny": [
        "o selekcji decyduje człowiek",
        "do rozrodu wybiera się osobniki o pożądanych cechach",
        "prowadzi do hodowlanych ras i odmian"
      ]
    },
    "explanation": "Dobór naturalny wynika z warunków środowiska, a dobór sztuczny jest celowym wyborem dokonywanym przez człowieka."
  },
  {
    "id": "R02_DOB_10",
    "section": "Dobór naturalny i sztuczny",
    "type": "sequence",
    "prompt": "Ułóż zdarzenia prowadzące do utrwalania korzystnych cech w doborze naturalnym.",
    "options": null,
    "items": [
      "organizmy konkurują o zasoby",
      "osobniki te przekazują geny potomstwu",
      "osobniki różnią się cechami",
      "najlepiej przystosowane osobniki częściej przeżywają",
      "zasoby środowiska są ograniczone"
    ],
    "answer": [
      "osobniki różnią się cechami",
      "zasoby środowiska są ograniczone",
      "organizmy konkurują o zasoby",
      "najlepiej przystosowane osobniki częściej przeżywają",
      "osobniki te przekazują geny potomstwu"
    ],
    "explanation": "Zmienność oraz konkurencja o ograniczone zasoby sprawiają, że osobniki najlepiej przystosowane częściej przeżywają i przekazują geny potomstwu."
  },
  {
    "id": "R02_DOB_11",
    "section": "Dobór naturalny i sztuczny",
    "type": "single_choice",
    "prompt": "Co jest przykładem efektu doboru sztucznego?",
    "options": [
      "powstanie skamieniałości",
      "opływowy kształt rekina i delfina",
      "wykształcenie różnych dziobów darwinek",
      "wymieranie słabiej przystosowanych osobników",
      "izolacja populacji na wyspie",
      "rasa krów dających więcej mleka"
    ],
    "answer": 5,
    "explanation": "Hodowcy uzyskali między innymi rasy krów dających więcej mleka oraz odmiany roślin odporne na choroby."
  },
  {
    "id": "R02_CZE_01",
    "section": "Człowiek i człekokształtne",
    "type": "single_choice",
    "prompt": "Do jakiego gatunku należą wszyscy współcześni ludzie?",
    "options": [
      "człowiek wyprostowany",
      "człowiek zręczny",
      "australopitek",
      "Homo sapiens",
      "ardipitek",
      "neandertalczyk"
    ],
    "answer": 3,
    "explanation": "Wszyscy współcześni ludzie należą do jednego gatunku Homo sapiens, czyli człowiek rozumny."
  },
  {
    "id": "R02_CZE_02",
    "section": "Człowiek i człekokształtne",
    "type": "multi_select",
    "prompt": "Zaznacz cechy wspólne człowieka i innych człekokształtnych.",
    "options": [
      "obuoczne widzenie",
      "rozróżnianie barw",
      "umiejętność mowy",
      "chwytne dłonie z przeciwstawnymi kciukami",
      "długi okres dzieciństwa",
      "wyłącznie dwunożny chód"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Do wspólnych cech należą między innymi obuoczne widzenie, rozróżnianie barw, chwytne dłonie z przeciwstawnymi kciukami i długi okres dzieciństwa.",
    "image": "r02_czlekoksztaltne.jpg"
  },
  {
    "id": "R02_CZE_03",
    "section": "Człowiek i człekokształtne",
    "type": "true_false",
    "prompt": "Szympansy potrafią używać prostych narzędzi, lecz nie potrafią mówić.",
    "options": null,
    "answer": true,
    "explanation": "Szympansy używają między innymi patyków lub kamieni i komunikują się dźwiękami oraz mimiką, ale nie mają zdolności mowy.",
    "image": "r02_czlekoksztaltne.jpg"
  },
  {
    "id": "R02_CZE_04",
    "section": "Człowiek i człekokształtne",
    "type": "fill_in",
    "prompt": "Chwytne dłonie człekokształtnych mają przeciwstawne __________.",
    "options": null,
    "answer": [
      "kciuki"
    ],
    "explanation": "Przeciwstawny kciuk ułatwia chwytanie i korzystanie z narzędzi."
  },
  {
    "id": "R02_CZE_05",
    "section": "Człowiek i człekokształtne",
    "type": "riddle",
    "prompt": "Małpy te prowadzą głównie naziemny tryb życia, żyją w grupach rodzinnych i używają prostych narzędzi. O jakich małpach mowa?",
    "options": null,
    "answer": "szympansy",
    "explanation": "Szympansy prowadzą głównie naziemny tryb życia, żyją w grupach rodzinnych i używają prostych narzędzi.",
    "image": "r02_czlekoksztaltne.jpg"
  },
  {
    "id": "R02_CZE_06",
    "section": "Człowiek i człekokształtne",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do cech wspólnych człowieka i innych człekokształtnych: obuoczne widzenie, chwytne dłonie, długi okres dzieciństwa, umiejętność mowy.",
    "options": null,
    "answer": "umiejętność mowy",
    "explanation": "Umiejętność mowy jest cechą charakterystyczną człowieka, a pozostałe cechy są wspólne z innymi człekokształtnymi."
  },
  {
    "id": "R02_CZE_07",
    "section": "Człowiek i człekokształtne",
    "type": "scenario",
    "prompt": "Badacz ogląda stopę przystosowaną do dwunożnego chodu: jest wysklepiona, a paluch nie jest przeciwstawny. Do którego organizmu należy taka stopa?",
    "options": [
      "szympansa",
      "człowieka",
      "orangutana",
      "goryla"
    ],
    "answer": 1,
    "explanation": "Wysklepiona stopa z nieprzeciwstawnym paluchem jest cechą człowieka i wiąże się z dwunożnym chodem.",
    "image": "r02_czlowiek_szympans_budowa.jpg"
  },
  {
    "id": "R02_CZE_08",
    "section": "Człowiek i człekokształtne",
    "type": "match",
    "prompt": "Połącz grupę systematyczną człowieka z charakterystyczną cechą.",
    "options": null,
    "left": [
      "ssaki",
      "naczelne",
      "człekokształtne",
      "Homo"
    ],
    "right": [
      "dwunożny chód",
      "zredukowany ogon",
      "odżywianie młodych mlekiem matki",
      "przynajmniej jedna para chwytnych kończyn"
    ],
    "answer": {
      "ssaki": "odżywianie młodych mlekiem matki",
      "naczelne": "przynajmniej jedna para chwytnych kończyn",
      "człekokształtne": "zredukowany ogon",
      "Homo": "dwunożny chód"
    },
    "explanation": "Człowiek należy kolejno między innymi do ssaków, naczelnych, człekokształtnych i rodzaju Homo; cechy odpowiadają charakterystyce tych grup."
  },
  {
    "id": "R02_CZE_09",
    "section": "Człowiek i człekokształtne",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do wspólnych z innymi człekokształtnymi oraz charakterystycznych dla człowieka.",
    "options": null,
    "items": [
      "tworzenie dóbr kultury",
      "rozbudowane mięśnie mimiczne",
      "wyprostowana postawa ciała",
      "zredukowany ogon",
      "umiejętność mowy",
      "rozróżnianie barw"
    ],
    "categories": [
      "wspólne",
      "charakterystyczne dla człowieka"
    ],
    "answer": {
      "wspólne": [
        "rozróżnianie barw",
        "rozbudowane mięśnie mimiczne",
        "zredukowany ogon"
      ],
      "charakterystyczne dla człowieka": [
        "umiejętność mowy",
        "wyprostowana postawa ciała",
        "tworzenie dóbr kultury"
      ]
    },
    "explanation": "Człowiek dzieli z innymi człekokształtnymi wiele cech, ale mowa, wyprostowana postawa i rozwinięta kultura wyróżniają człowieka."
  },
  {
    "id": "R02_CZE_10",
    "section": "Człowiek i człekokształtne",
    "type": "sequence",
    "prompt": "Ułóż jednostki systematyczne człowieka od najszerszej do najwęższej.",
    "options": null,
    "items": [
      "Homo sapiens",
      "naczelne",
      "zwierzęta",
      "kręgowce",
      "strunowce",
      "ssaki"
    ],
    "answer": [
      "zwierzęta",
      "strunowce",
      "kręgowce",
      "ssaki",
      "naczelne",
      "Homo sapiens"
    ],
    "explanation": "Jednostki tworzą kolejność od królestwa zwierząt przez coraz węższe grupy do gatunku Homo sapiens."
  },
  {
    "id": "R02_CZE_11",
    "section": "Człowiek i człekokształtne",
    "type": "single_choice",
    "prompt": "Która cecha odróżnia człowieka od innych człekokształtnych?",
    "options": [
      "umiejętność mowy",
      "obuoczne widzenie",
      "rozróżnianie barw",
      "długi okres dzieciństwa",
      "chwytne dłonie",
      "rozbudowane mięśnie mimiczne"
    ],
    "answer": 0,
    "explanation": "Do cech wyróżniających człowieka należą między innymi mowa, dwunożność, wyprostowana postawa, duży mózg, rozwinięte zdolności manualne i kultura.",
    "image": "r02_czlowiek_szympans_budowa.jpg"
  },
  {
    "id": "R02_EWC_01",
    "section": "Ewolucja człowieka",
    "type": "single_choice",
    "prompt": "Gdzie i kiedy pojawił się człowiek rozumny?",
    "options": [
      "około 7 mln lat temu w Europie",
      "około 4,4 mln lat temu w Azji",
      "około 2 mln lat temu w Europie",
      "około 400 tys. lat temu w Afryce",
      "około 300 tys. lat temu w Afryce",
      "około 40 tys. lat temu w Australii"
    ],
    "answer": 4,
    "explanation": "Homo sapiens pojawił się około 300 tysięcy lat temu w Afryce.",
    "image": "r02_ewolucja_czlowieka.jpg"
  },
  {
    "id": "R02_EWC_02",
    "section": "Ewolucja człowieka",
    "type": "multi_select",
    "prompt": "Zaznacz punkty przełomowe w ewolucji człowieka.",
    "options": [
      "opanowanie dwunożności",
      "wytwarzanie narzędzi",
      "rozpalanie ognia",
      "powstanie skrzydeł",
      "opanowanie mowy",
      "rozwój kultury i sztuki"
    ],
    "answer": [
      0,
      1,
      2,
      4,
      5
    ],
    "explanation": "Do przełomowych zmian należały dwunożność, wytwarzanie narzędzi, rozpalanie ognia, mowa oraz rozwój kultury i sztuki.",
    "image": "r02_ewolucja_czlowieka.jpg"
  },
  {
    "id": "R02_EWC_03",
    "section": "Ewolucja człowieka",
    "type": "true_false",
    "prompt": "Ewolucja człowieka przebiegała wielokierunkowo, a różne gatunki człowiekowatych mogły żyć w tym samym czasie.",
    "options": null,
    "answer": true,
    "explanation": "Wiele gatunków współwystępowało i konkurowało o podobne zasoby, dlatego ewolucja człowieka nie tworzyła jednej prostej linii."
  },
  {
    "id": "R02_EWC_04",
    "section": "Ewolucja człowieka",
    "type": "fill_in",
    "prompt": "Pierwszym znanym gatunkiem człowieka, który wytwarzał proste narzędzia kamienne, był człowiek __________.",
    "options": null,
    "answer": [
      "zręczny"
    ],
    "explanation": "Człowiek zręczny żył od około 2,5 do 1,5 mln lat temu i jest uznawany za pierwszy gatunek człowieka."
  },
  {
    "id": "R02_EWC_05",
    "section": "Ewolucja człowieka",
    "type": "riddle",
    "prompt": "Pojawił się około 2 mln lat temu, wytwarzał bardziej skomplikowane narzędzia, wzniecał ogień i jako pierwszy skolonizował Europę oraz Azję. Kto to?",
    "options": null,
    "answer": "człowiek wyprostowany",
    "explanation": "Człowiek wyprostowany opuścił Afrykę około 2 mln lat temu i posługiwał się ogniem.",
    "image": "r02_ewolucja_czlowieka.jpg"
  },
  {
    "id": "R02_EWC_06",
    "section": "Ewolucja człowieka",
    "type": "odd_one_out",
    "prompt": "Która forma nie jest związana z ewolucją człowieka: ardipitek, australopitek, człowiek zręczny, archeopteryks.",
    "options": null,
    "answer": "archeopteryks",
    "explanation": "Archeopteryks jest formą pośrednią między gadami i ptakami, a pozostałe nazwy dotyczą ewolucji człowieka."
  },
  {
    "id": "R02_EWC_07",
    "section": "Ewolucja człowieka",
    "type": "scenario",
    "prompt": "Około 10 mln lat temu we wschodniej Afryce zanikały lasy tropikalne i rozwijała się sucha sawanna. Jaka zmiana postawy ciała była korzystna na otwartej przestrzeni?",
    "options": [
      "powrót do poruszania się wyłącznie po drzewach",
      "wydłużenie ogona",
      "przyjęcie wyprostowanej postawy i dwunożności",
      "utrata zdolności chwytania"
    ],
    "answer": 2,
    "explanation": "Wyprostowana postawa i dwunożność unosiły głowę, poprawiały obserwację otoczenia i uwalniały ręce.",
    "image": "r02_ewolucja_czlowieka.jpg"
  },
  {
    "id": "R02_EWC_08",
    "section": "Ewolucja człowieka",
    "type": "match",
    "prompt": "Połącz formę z charakterystyczną informacją.",
    "options": null,
    "left": [
      "ardipitek",
      "człowiek zręczny",
      "człowiek wyprostowany",
      "neandertalczyk"
    ],
    "right": [
      "posługiwał się ogniem",
      "wytwarzał proste narzędzia kamienne",
      "jako pierwszy grzebał zmarłych",
      "chodził na dwóch nogach i sprawnie wspinał się na drzewa"
    ],
    "answer": {
      "ardipitek": "chodził na dwóch nogach i sprawnie wspinał się na drzewa",
      "człowiek zręczny": "wytwarzał proste narzędzia kamienne",
      "człowiek wyprostowany": "posługiwał się ogniem",
      "neandertalczyk": "jako pierwszy grzebał zmarłych"
    },
    "explanation": "Ardipitek łączył wspinanie z chodzeniem wyprostowanym, człowiek zręczny wytwarzał narzędzia, człowiek wyprostowany używał ognia, a neandertalczyk grzebał zmarłych."
  },
  {
    "id": "R02_EWC_09",
    "section": "Ewolucja człowieka",
    "type": "sort",
    "prompt": "Rozdziel formy na przedludzkie i gatunki człowieka.",
    "options": null,
    "items": [
      "człowiek wyprostowany",
      "ardipitek",
      "neandertalczyk",
      "australopitek",
      "człowiek rozumny",
      "człowiek zręczny"
    ],
    "categories": [
      "formy przedludzkie",
      "gatunki człowieka"
    ],
    "answer": {
      "formy przedludzkie": [
        "ardipitek",
        "australopitek"
      ],
      "gatunki człowieka": [
        "człowiek zręczny",
        "człowiek wyprostowany",
        "neandertalczyk",
        "człowiek rozumny"
      ]
    },
    "explanation": "Ardipitek i australopitek zalicza się do form przedludzkich, natomiast człowiek zręczny jest uznawany za pierwszy gatunek człowieka."
  },
  {
    "id": "R02_EWC_10",
    "section": "Ewolucja człowieka",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najstarszego do najmłodszego.",
    "options": null,
    "items": [
      "pojawienie się neandertalczyka około 400 tys. lat temu",
      "pojawienie się ardipiteka około 4,4 mln lat temu",
      "pojawienie się Homo sapiens około 300 tys. lat temu",
      "pojawienie się człowieka wyprostowanego około 2 mln lat temu",
      "pojawienie się człowieka zręcznego około 2,5 mln lat temu"
    ],
    "answer": [
      "pojawienie się ardipiteka około 4,4 mln lat temu",
      "pojawienie się człowieka zręcznego około 2,5 mln lat temu",
      "pojawienie się człowieka wyprostowanego około 2 mln lat temu",
      "pojawienie się neandertalczyka około 400 tys. lat temu",
      "pojawienie się Homo sapiens około 300 tys. lat temu"
    ],
    "explanation": "Daty pokazują następstwo wybranych form, przy czym ewolucja człowieka była wielokierunkowa i część gatunków współwystępowała.",
    "image": "r02_ewolucja_czlowieka.jpg"
  },
  {
    "id": "R02_EWC_11",
    "section": "Ewolucja człowieka",
    "type": "single_choice",
    "prompt": "Którą umiejętność przypisuje się neandertalczykowi jako prawdopodobnie pierwszemu gatunkowi człowieka?",
    "options": [
      "wytwarzać proste narzędzia kamienne",
      "mówić",
      "chodzić na dwóch nogach",
      "żywić się nasionami",
      "używać chwytnego ogona",
      "tworzyć rasy zwierząt"
    ],
    "answer": 1,
    "explanation": "Neandertalczyk jest uznawany za prawdopodobnie pierwszy gatunek człowieka, który zaczął mówić; jako pierwszy także grzebał zmarłych."
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który zestaw poprawnie łączy typ dowodu ewolucji z przykładem?",
    "options": [
      "bezpośredni - kość ogonowa człowieka",
      "pośredni - skamieniałe muszle amonitów",
      "pośredni - kość ogonowa człowieka",
      "bezpośredni - skrzydło ptaka i owada",
      "pośredni - archeopteryks",
      "bezpośredni - rozmieszczenie torbaczy w Australii"
    ],
    "answer": 2,
    "explanation": "Narządy szczątkowe należą do pośrednich dowodów ewolucji, a kość ogonowa człowieka jest ich przykładem."
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz cechy archeopteryksa typowe dla gadów.",
    "options": [
      "pióra",
      "szczęki z zębami",
      "długi ogon",
      "kończyny przednie przekształcone w skrzydła",
      "pazury na przednich kończynach"
    ],
    "answer": [
      1,
      2,
      4
    ],
    "explanation": "Do gadzich cech archeopteryksa należały szczęki z zębami, długi ogon i pazury na przednich kończynach.",
    "image": "r02_archeopteryks.jpg"
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Konwergencja może prowadzić do podobnego wyglądu narządów u organizmów, które nie są ze sobą blisko spokrewnione.",
    "options": null,
    "answer": true,
    "explanation": "Podobne warunki środowiska mogą prowadzić do upodobnienia niespokrewnionych blisko organizmów; przykładem jest opływowy kształt rekina i delfina.",
    "image": "r02_struktury_analogiczne.jpg"
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W 1859 roku Darwin opublikował dzieło o powstawaniu gatunków, w 1866 roku __________ sformułował podstawowe prawa dziedziczenia, a w 1953 roku Crick i Watson opisali strukturę DNA.",
    "options": null,
    "answer": [
      "Gregor Mendel"
    ],
    "explanation": "Późniejsze odkrycia genetyczne uzupełniły teorię Darwina i doprowadziły do powstania syntetycznej teorii ewolucji."
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Ryba trzonopłetwa o płetwach osadzonych na umięśnionych trzonach, której bliscy krewni w większości wymarli miliony lat temu, to...",
    "options": null,
    "answer": "latimeria",
    "explanation": "Latimeria jest przykładem żywej skamieniałości."
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do odkrycia w Trachilos: Kreta, prawie 6 mln lat, Gerard Gierliński, Galapagos.",
    "options": null,
    "answer": "Galapagos",
    "explanation": "Tropy odkryte przez zespół Gerarda Gierlińskiego znajdują się w Trachilos na Krecie i liczą prawie 6 mln lat.",
    "image": "r02_tropy_trachilos.jpg"
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Na zdjęciu widać skrzydło owada i skrzydło ptaka. Oba służą do lotu, lecz rusztowanie skrzydła ptaka tworzą kości, a w skrzydle owada widoczne są żyłki będące głównie tchawkami. Jaki wniosek jest poprawny?",
    "options": [
      "są narządami szczątkowymi",
      "są skamieniałościami",
      "są strukturami homologicznymi",
      "są formami pośrednimi",
      "są strukturami analogicznymi"
    ],
    "answer": 4,
    "explanation": "Te skrzydła mają podobną funkcję, ale różną budowę wewnętrzną i pochodzenie, więc są strukturami analogicznymi.",
    "image": "r02_struktury_analogiczne.jpg"
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz formę z przybliżonym czasem pojawienia się lub życia.",
    "options": null,
    "left": [
      "ardipitek",
      "człowiek zręczny",
      "człowiek wyprostowany",
      "neandertalczyk",
      "człowiek rozumny"
    ],
    "right": [
      "około 300 tys. lat temu",
      "około 2 mln lat temu",
      "od 2,5 do 1,5 mln lat temu",
      "około 400 tys. lat temu",
      "około 4,4 mln lat temu"
    ],
    "answer": {
      "ardipitek": "około 4,4 mln lat temu",
      "człowiek zręczny": "od 2,5 do 1,5 mln lat temu",
      "człowiek wyprostowany": "około 2 mln lat temu",
      "neandertalczyk": "około 400 tys. lat temu",
      "człowiek rozumny": "około 300 tys. lat temu"
    },
    "explanation": "Daty tworzą orientacyjną chronologię wybranych form w historii ewolucji człowieka.",
    "image": "r02_ewolucja_czlowieka.jpg"
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj osiągnięcie lub odkrycie do naukowca albo zespołu naukowców.",
    "options": null,
    "items": [
      "ogłoszenie struktury podwójnej helisy DNA w 1953 roku",
      "publikacja dzieła o powstawaniu gatunków w 1859 roku",
      "sformułowanie podstawowych praw dziedziczenia w 1866 roku"
    ],
    "categories": [
      "Karol Darwin",
      "Gregor Mendel",
      "Francis Crick i James Watson"
    ],
    "answer": {
      "Karol Darwin": [
        "publikacja dzieła o powstawaniu gatunków w 1859 roku"
      ],
      "Gregor Mendel": [
        "sformułowanie podstawowych praw dziedziczenia w 1866 roku"
      ],
      "Francis Crick i James Watson": [
        "ogłoszenie struktury podwójnej helisy DNA w 1953 roku"
      ]
    },
    "explanation": "Odkrycia Darwina, Mendla oraz Cricka i Watsona tworzą kolejne etapy rozwoju nowoczesnej teorii ewolucji."
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z człowiekiem rozumnym od najstarszego do najmłodszego.",
    "options": null,
    "items": [
      "opanowanie hodowli zwierząt około 12 tys. lat temu",
      "przybycie Homo sapiens do Europy około 40 tys. lat temu",
      "powstanie malowideł w Lascaux około 17 tys. lat temu",
      "pojawienie się Homo sapiens w Afryce około 300 tys. lat temu",
      "wyginięcie neandertalczyka około 25 tys. lat temu"
    ],
    "answer": [
      "pojawienie się Homo sapiens w Afryce około 300 tys. lat temu",
      "przybycie Homo sapiens do Europy około 40 tys. lat temu",
      "wyginięcie neandertalczyka około 25 tys. lat temu",
      "powstanie malowideł w Lascaux około 17 tys. lat temu",
      "opanowanie hodowli zwierząt około 12 tys. lat temu"
    ],
    "explanation": "Homo sapiens pojawił się w Afryce około 300 tys. lat temu, dotarł do Europy około 40 tys. lat temu, a później rozwijał kulturę i osiadły tryb życia."
  },
  {
    "id": "R02_HARD_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która cecha budowy stopy jest typowa dla człowieka w porównaniu z innymi człekokształtnymi?",
    "options": [
      "płaska stopa z przeciwstawnym paluchem",
      "cztery kończyny chwytne",
      "wygięty w łuk kręgosłup",
      "długa i wąska miednica",
      "paluch przeciwstawny",
      "wysklepiona stopa z nieprzeciwstawnym paluchem"
    ],
    "answer": 5,
    "explanation": "Ludzka stopa jest wysklepiona, a paluch nie jest przeciwstawny, co wiąże się z dwunożnym chodem.",
    "image": "r02_czlowiek_szympans_budowa.jpg"
  },
  {
    "id": "R02_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz informacje dotyczące neandertalczyka.",
    "options": [
      "pojawił się około 400 tys. lat temu",
      "jako pierwszy skolonizował Europę i Azję",
      "żył w surowych warunkach klimatycznych Europy",
      "tworzył duże grupy rodzinne",
      "pojawił się około 4,4 mln lat temu",
      "jako pierwszy grzebał zmarłych"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Neandertalczyk pojawił się około 400 tys. lat temu, żył w surowym klimacie Europy, tworzył duże grupy rodzinne i grzebał zmarłych."
  },
  {
    "id": "R02_HARD_13",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Odkrycie tropów w Trachilos było przełomowe, ponieważ wcześniej sądzono, że pierwsi dwunożni przodkowie człowieka pochodzili z Afryki.",
    "options": null,
    "answer": true,
    "explanation": "Odciski z Krety liczą prawie 6 mln lat i rzuciły nowe światło na poglądy dotyczące miejsca pojawienia się wczesnych dwunożnych człowiekowatych.",
    "image": "r02_tropy_trachilos.jpg"
  },
  {
    "id": "R02_HARD_14",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które zestawienie poprawnie porównuje człowieka i inne człekokształtne?",
    "options": [
      "człowiek - przeciwstawny paluch; inne człekokształtne - paluch nieprzeciwstawny",
      "człowiek - esowaty kręgosłup; inne człekokształtne - kręgosłup wygięty w łuk",
      "człowiek - długa i wąska miednica; inne człekokształtne - krótka i szeroka miednica",
      "człowiek - średnio 500 cm3 mózgu; inne człekokształtne - średnio 1350 cm3",
      "człowiek - cztery kończyny chwytne; inne człekokształtne - dwie kończyny do chodu wyprostowanego",
      "człowiek - wysunięta trzewioczaszka; inne człekokształtne - spłaszczona trzewioczaszka"
    ],
    "answer": 1,
    "explanation": "Człowiek ma średnio większą objętość mózgu, esowaty kręgosłup i krótką, szeroką miednicę, natomiast inne człekokształtne mają średnio mniejszy mózg, łukowaty kręgosłup oraz długą i wąską miednicę.",
    "image": "r02_czlowiek_szympans_budowa.jpg"
  },
  {
    "id": "R02_HARD_15",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która informacja najlepiej wyjaśnia, dlaczego powstanie dwunożności sprzyjało dalszym zmianom w ewolucji człowieka?",
    "options": [
      "uniemożliwiła obserwację otoczenia",
      "zmuszała do życia wyłącznie na drzewach",
      "spowodowała utratę zdolności używania dłoni",
      "uwolniła kończyny górne i sprzyjała zdolnościom manipulacyjnym",
      "zwiększyła zależność od chwytnego ogona",
      "wyeliminowała potrzebę korzystania z narzędzi"
    ],
    "answer": 3,
    "explanation": "Dwunożność uwolniła kończyny górne od funkcji lokomocyjnej, co sprzyjało rozwojowi zdolności manipulacyjnych rąk; wyprostowana postawa poprawiała też obserwację otoczenia."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r02",
  number: 2,
  title: "Ewolucja życia",
  icon: "🧬",
  sectionOrder: [
    "Dowody ewolucji",
    "Powstawanie gatunków",
    "Dobór naturalny i sztuczny",
    "Człowiek i człekokształtne",
    "Ewolucja człowieka"
  ],
  sectionIcons: {
    "Dowody ewolucji": "🦴",
    "Powstawanie gatunków": "🏝️",
    "Dobór naturalny i sztuczny": "🌿",
    "Człowiek i człekokształtne": "🦍",
    "Ewolucja człowieka": "🔥"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
