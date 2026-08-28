// Skróty sekcji (do identyfikatorów ćwiczeń):
//   BIO  = Różnorodność biologiczna
//   WPL  = Wpływ człowieka na różnorodność biologiczną
//   ZAS  = Racjonalne gospodarowanie zasobami przyrody
//   OCH  = Sposoby ochrony przyrody
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_BIO_01",
    "section": "Różnorodność biologiczna",
    "type": "single_choice",
    "prompt": "Czym jest różnorodność biologiczna?",
    "options": [
      "Liczbą organizmów jednego gatunku w populacji",
      "Rozmaitością form życia i środowisk ich występowania",
      "Wyłącznie liczbą ekosystemów na danym obszarze",
      "Tylko zróżnicowaniem genów w jednej populacji",
      "Procesem stopniowego zarastania siedliska",
      "Zdolnością organizmów do rozmnażania"
    ],
    "answer": 1,
    "explanation": "Różnorodność biologiczna to rozmaitość form życia występujących na Ziemi oraz środowisk, które zamieszkują."
  },
  {
    "id": "R04_BIO_02",
    "section": "Różnorodność biologiczna",
    "type": "multi_select",
    "prompt": "Zaznacz trzy poziomy różnorodności biologicznej.",
    "options": [
      "ekosystemowa",
      "klimatyczna",
      "gatunkowa",
      "geologiczna",
      "genetyczna",
      "krajobrazowa"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Wyróżnia się różnorodność ekosystemową, gatunkową i genetyczną.",
    "image": "r04_poziomy_roznorodnosci.jpg"
  },
  {
    "id": "R04_BIO_03",
    "section": "Różnorodność biologiczna",
    "type": "true_false",
    "prompt": "Różnorodność gatunkowa zależy od liczby gatunków występujących w danym ekosystemie.",
    "options": null,
    "answer": true,
    "explanation": "Poziom różnorodności gatunkowej opisuje rozmaitość gatunków występujących w danym ekosystemie."
  },
  {
    "id": "R04_BIO_04",
    "section": "Różnorodność biologiczna",
    "type": "match",
    "prompt": "Połącz poziom różnorodności biologicznej z jego opisem.",
    "options": null,
    "answer": {
      "różnorodność ekosystemowa": "liczba typów ekosystemów na danym obszarze",
      "różnorodność gatunkowa": "liczba gatunków w danym ekosystemie",
      "różnorodność genetyczna": "zróżnicowanie genetyczne osobników jednej populacji"
    },
    "left": [
      "różnorodność ekosystemowa",
      "różnorodność gatunkowa",
      "różnorodność genetyczna"
    ],
    "right": [
      "zróżnicowanie genetyczne osobników jednej populacji",
      "liczba typów ekosystemów na danym obszarze",
      "liczba gatunków w danym ekosystemie"
    ],
    "explanation": "Każdy poziom opisuje inny rodzaj zróżnicowania: ekosystemów, gatunków albo genów w populacji."
  },
  {
    "id": "R04_BIO_05",
    "section": "Różnorodność biologiczna",
    "type": "fill_in",
    "prompt": "Do naturalnych procesów kształtujących różnorodność biologiczną należą klimat oraz __________.",
    "options": null,
    "answer": [
      "sukcesja"
    ],
    "altAnswers": [
      [
        "sukcesja",
        "sukcesję"
      ]
    ],
    "explanation": "Sukcesja to zmiany zachodzące w ekosystemie wraz z upływem czasu."
  },
  {
    "id": "R04_BIO_06",
    "section": "Różnorodność biologiczna",
    "type": "sequence",
    "prompt": "Ułóż etapy zarastania nadmorskiej wydmy od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "answer": [
      "Piaszczystą wydmę zasiedlają rośliny o małych wymaganiach siedliskowych",
      "W podłożu gromadzi się coraz więcej substancji organicznej",
      "Pojawiają się rośliny o większych wymaganiach siedliskowych oraz mchy i porosty",
      "Na odpowiednio grubej warstwie gleby pojawiają się sosny i z czasem powstaje bór sosnowy"
    ],
    "items": [
      "Na odpowiednio grubej warstwie gleby pojawiają się sosny i z czasem powstaje bór sosnowy",
      "W podłożu gromadzi się coraz więcej substancji organicznej",
      "Piaszczystą wydmę zasiedlają rośliny o małych wymaganiach siedliskowych",
      "Pojawiają się rośliny o większych wymaganiach siedliskowych oraz mchy i porosty"
    ],
    "explanation": "W sukcesji wydmy najpierw pojawiają się gatunki pionierskie, potem wzrasta ilość substancji organicznej, wchodzą bardziej wymagające rośliny, a ostatecznie może powstać bór sosnowy.",
    "image": "r04_wydma_sukcesja.jpg"
  },
  {
    "id": "R04_BIO_07",
    "section": "Różnorodność biologiczna",
    "type": "odd_one_out",
    "prompt": "Wskaż pojęcie, które nie jest poziomem różnorodności biologicznej: ekosystemowa, gatunkowa, genetyczna, geologiczna.",
    "options": null,
    "answer": "geologiczna",
    "explanation": "Poziomami różnorodności biologicznej są różnorodność ekosystemowa, gatunkowa i genetyczna."
  },
  {
    "id": "R04_BIO_08",
    "section": "Różnorodność biologiczna",
    "type": "riddle",
    "prompt": "Jak nazywa się proces zmian zachodzących w ekosystemie wraz z upływem czasu?",
    "options": null,
    "answer": "sukcesja",
    "altAnswers": [
      "sukcesja",
      "sukcesja ekologiczna"
    ],
    "explanation": "Sukcesja prowadzi do stopniowych zmian składu gatunkowego i warunków środowiska."
  },
  {
    "id": "R04_BIO_09",
    "section": "Różnorodność biologiczna",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do poziomów różnorodności biologicznej.",
    "options": null,
    "answer": {
      "ekosystemowa": [
        "wydmy i klify na wybrzeżu",
        "ekosystemy rzeczne i jeziorne"
      ],
      "gatunkowa": [
        "duża liczba gatunków w Puszczy Białowieskiej",
        "około 60 tys. opisanych gatunków organizmów w Polsce"
      ],
      "genetyczna": [
        "odmienne wzory sierści likaonów",
        "małe zróżnicowanie genetyczne żubra"
      ]
    },
    "items": [
      "odmienne wzory sierści likaonów",
      "ekosystemy rzeczne i jeziorne",
      "duża liczba gatunków w Puszczy Białowieskiej",
      "małe zróżnicowanie genetyczne żubra",
      "wydmy i klify na wybrzeżu",
      "około 60 tys. opisanych gatunków organizmów w Polsce"
    ],
    "categories": [
      "ekosystemowa",
      "gatunkowa",
      "genetyczna"
    ],
    "explanation": "Ekosystemowa dotyczy typów ekosystemów, gatunkowa liczby gatunków, a genetyczna zróżnicowania osobników w populacji."
  },
  {
    "id": "R04_BIO_10",
    "section": "Różnorodność biologiczna",
    "type": "scenario",
    "prompt": "Badacz porównuje liczbę gatunków w kilku strefach klimatycznych. W której strefie powinien spodziewać się największej różnorodności gatunkowej?",
    "options": [
      "okołobiegunowej północnej",
      "okołobiegunowej południowej",
      "równikowej i podrównikowej",
      "suchej chłodnej",
      "umiarkowanej chłodnej",
      "wysokogórskiej"
    ],
    "answer": 2,
    "explanation": "Najwięcej gatunków żyje w strefach klimatów gorących i wilgotnych, czyli równikowych i podrównikowych.",
    "image": "r04_biegun_i_las_rownikowy.jpg"
  },
  {
    "id": "R04_BIO_11",
    "section": "Różnorodność biologiczna",
    "type": "single_choice",
    "prompt": "Około jaką część powierzchni Polski zajmują lasy?",
    "options": [
      "4%",
      "30%",
      "50%",
      "60%",
      "75%",
      "90%"
    ],
    "answer": 1,
    "explanation": "Lasy zajmują około 30% powierzchni Polski."
  },
  {
    "id": "R04_BIO_12",
    "section": "Różnorodność biologiczna",
    "type": "true_false",
    "prompt": "Naturalne lasy zajmują około 4% powierzchni Polski.",
    "options": null,
    "answer": true,
    "explanation": "Większość lasów w Polsce została zasadzona przez człowieka, a naturalne lasy zajmują około 4% powierzchni kraju."
  },
  {
    "id": "R04_BIO_13",
    "section": "Różnorodność biologiczna",
    "type": "match",
    "prompt": "Połącz obszar z informacją o różnorodności biologicznej.",
    "options": null,
    "answer": {
      "strefy równikowe i podrównikowe": "najwięcej gatunków",
      "okolice obu biegunów": "najmniej gatunków",
      "ekosystemy górskie": "różnorodność zależna od wysokości nad poziomem morza"
    },
    "left": [
      "strefy równikowe i podrównikowe",
      "okolice obu biegunów",
      "ekosystemy górskie"
    ],
    "right": [
      "najmniej gatunków",
      "różnorodność zależna od wysokości nad poziomem morza",
      "najwięcej gatunków"
    ],
    "explanation": "Klimat i wysokość nad poziomem morza wpływają na to, jakie gatunki i ekosystemy występują na danym obszarze."
  },
  {
    "id": "R04_BIO_14",
    "section": "Różnorodność biologiczna",
    "type": "multi_select",
    "prompt": "Zaznacz naturalne czynniki, które mogą przyczynić się do wymarcia gatunku.",
    "options": [
      "zmiany klimatu",
      "zmiany poziomu mórz",
      "intensywne połowy",
      "wybuchy wulkanów",
      "kłusownictwo",
      "choroby i epidemie"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "explanation": "Do naturalnych przyczyn wymierania należą m.in. zmiany klimatu, zmiany poziomu mórz, wybuchy wulkanów oraz choroby i epidemie."
  },
  {
    "id": "R04_BIO_15",
    "section": "Różnorodność biologiczna",
    "type": "single_choice",
    "prompt": "Jaki może być skutek wymarcia jednego gatunku dla ekosystemu?",
    "options": [
      "Zawsze zwiększa liczbę gatunków",
      "Nie ma wpływu na inne organizmy",
      "Powoduje wyłącznie wzrost liczby roślin",
      "Może zaburzyć równowagę ekosystemu",
      "Zawsze prowadzi do powstania nowego ekosystemu",
      "Zatrzymuje sukcesję we wszystkich siedliskach"
    ],
    "answer": 3,
    "explanation": "Gatunki są powiązane siecią zależności, dlatego wymarcie jednego z nich może zaburzyć równowagę ekosystemu i prowadzić do utraty kolejnych ogniw łańcucha pokarmowego."
  },
  {
    "id": "R04_WPL_01",
    "section": "Wpływ człowieka na różnorodność biologiczną",
    "type": "single_choice",
    "prompt": "Które działanie człowieka może bezpośrednio zmniejszać różnorodność biologiczną?",
    "options": [
      "niszczenie siedlisk",
      "naturalna sukcesja",
      "wietrzenie skał",
      "rozmnażanie organizmów",
      "naturalne oczyszczanie wody",
      "powstawanie gleby"
    ],
    "answer": 0,
    "explanation": "Do głównych przyczyn spadku różnorodności biologicznej należą eliminowanie organizmów, zanieczyszczanie środowiska, niszczenie siedlisk i wprowadzanie obcych gatunków."
  },
  {
    "id": "R04_WPL_02",
    "section": "Wpływ człowieka na różnorodność biologiczną",
    "type": "multi_select",
    "prompt": "Zaznacz działania człowieka prowadzące do spadku różnorodności biologicznej.",
    "options": [
      "eliminowanie organizmów",
      "zanieczyszczanie środowiska",
      "ochrona siedlisk",
      "niszczenie siedlisk",
      "wprowadzanie obcych gatunków",
      "odtwarzanie populacji"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Człowiek zmniejsza bioróżnorodność przez eliminowanie organizmów, zanieczyszczanie środowiska, niszczenie siedlisk i wprowadzanie obcych gatunków."
  },
  {
    "id": "R04_WPL_03",
    "section": "Wpływ człowieka na różnorodność biologiczną",
    "type": "true_false",
    "prompt": "Kwaśne opady powstają wskutek reakcji tlenków siarki i azotu z wodą zawartą w powietrzu.",
    "options": null,
    "answer": true,
    "explanation": "Kwasy obecne w kwaśnych opadach powstają właśnie w wyniku reakcji tlenków siarki i azotu z wodą w powietrzu.",
    "image": "r04_zanieczyszczenie_powietrza.jpg"
  },
  {
    "id": "R04_WPL_04",
    "section": "Wpływ człowieka na różnorodność biologiczną",
    "type": "match",
    "prompt": "Połącz zjawisko z jego charakterystyczną przyczyną lub skutkiem.",
    "options": null,
    "answer": {
      "kwaśne opady": "zakwaszenie wód i gleb",
      "dziura ozonowa": "zmniejszona zawartość ozonu w ozonosferze",
      "smog": "mieszanina pary wodnej i zanieczyszczeń",
      "globalne ocieplenie": "wzrost średniej temperatury powietrza"
    },
    "left": [
      "kwaśne opady",
      "dziura ozonowa",
      "smog",
      "globalne ocieplenie"
    ],
    "right": [
      "wzrost średniej temperatury powietrza",
      "mieszanina pary wodnej i zanieczyszczeń",
      "zakwaszenie wód i gleb",
      "zmniejszona zawartość ozonu w ozonosferze"
    ],
    "explanation": "Każde z tych zjawisk wiąże się z innym rodzajem zaburzenia środowiska: zakwaszeniem, ubytkiem ozonu, smogiem albo wzrostem temperatury."
  },
  {
    "id": "R04_WPL_05",
    "section": "Wpływ człowieka na różnorodność biologiczną",
    "type": "fill_in",
    "prompt": "Kwaśne opady powodują zakwaszenie __________ i __________.",
    "options": null,
    "answer": [
      "wód",
      "gleb"
    ],
    "altAnswers": [
      [
        "wód",
        "wody"
      ],
      [
        "gleb",
        "gleby"
      ]
    ],
    "explanation": "Zakwaszenie wód i gleb stanowi zagrożenie dla życia wielu organizmów."
  },
  {
    "id": "R04_WPL_06",
    "section": "Wpływ człowieka na różnorodność biologiczną",
    "type": "sequence",
    "prompt": "Ułóż kolejne skutki dopływu ścieków i nawozów rolniczych do wody.",
    "options": null,
    "answer": [
      "Do wody napływają ścieki i nawozy rolnicze",
      "Dochodzi do nadmiernego rozwoju mikroorganizmów i zakwitu wody",
      "Ograniczony zostaje dopływ światła i rośliny wodne nie mogą prowadzić fotosyntezy",
      "Zmniejsza się ilość tlenu w wodzie i giną organizmy takie jak ryby"
    ],
    "items": [
      "Zmniejsza się ilość tlenu w wodzie i giną organizmy takie jak ryby",
      "Do wody napływają ścieki i nawozy rolnicze",
      "Ograniczony zostaje dopływ światła i rośliny wodne nie mogą prowadzić fotosyntezy",
      "Dochodzi do nadmiernego rozwoju mikroorganizmów i zakwitu wody"
    ],
    "explanation": "Zakwit ogranicza dostęp światła, osłabia fotosyntezę roślin wodnych, a spadek ilości tlenu może prowadzić do śmierci wielu organizmów.",
    "image": "r04_zakwit_wody.jpg"
  },
  {
    "id": "R04_WPL_07",
    "section": "Wpływ człowieka na różnorodność biologiczną",
    "type": "scenario",
    "prompt": "Elektrownia odprowadza do rzeki ogrzaną wodę. Jaki skutek jest najbardziej bezpośredni dla środowiska wodnego?",
    "options": [
      "wzrost zawartości tlenu w wodzie",
      "natychmiastowe powstanie dziury ozonowej",
      "spadek zawartości tlenu rozpuszczonego w wodzie",
      "zwiększenie grubości warstwy ozonowej",
      "zanik wszystkich soli mineralnych",
      "wzrost liczby drzew iglastych"
    ],
    "answer": 2,
    "explanation": "Zanieczyszczenia termiczne podnoszą temperaturę wody, co może zmniejszać ilość tlenu rozpuszczonego w wodzie."
  },
  {
    "id": "R04_WPL_08",
    "section": "Wpływ człowieka na różnorodność biologiczną",
    "type": "odd_one_out",
    "prompt": "Wskaż pojęcie, które nie jest skutkiem lub formą zanieczyszczenia powietrza: smog, kwaśne opady, dziura ozonowa, sukcesja.",
    "options": null,
    "answer": "sukcesja",
    "explanation": "Sukcesja jest naturalnym procesem zmian w ekosystemie, a pozostałe pojęcia wiążą się z problemami jakości atmosfery."
  },
  {
    "id": "R04_WPL_09",
    "section": "Wpływ człowieka na różnorodność biologiczną",
    "type": "riddle",
    "prompt": "Jak nazywa się obszar ozonosfery o znacznie zmniejszonej zawartości ozonu?",
    "options": null,
    "answer": "dziura ozonowa",
    "altAnswers": [
      "dziura ozonowa",
      "dziurą ozonową"
    ],
    "explanation": "Dziura ozonowa to przestrzeń o znacznie zmniejszonej zawartości ozonu w warstwie ochronnej atmosfery."
  },
  {
    "id": "R04_WPL_10",
    "section": "Wpływ człowieka na różnorodność biologiczną",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do rodzaju problemu środowiskowego.",
    "options": null,
    "answer": {
      "zanieczyszczenie powietrza": [
        "tlenki siarki i azotu ze spalania surowców energetycznych",
        "pyły emitowane przez samochody i zakłady przemysłowe"
      ],
      "zanieczyszczenie wód": [
        "sole rtęci kadmu lub ołowiu w ściekach",
        "ropa naftowa po katastrofie tankowca"
      ],
      "degradacja gleb": [
        "nadmierne nawożenie",
        "używanie ciężkich maszyn rolniczych"
      ]
    },
    "items": [
      "ropa naftowa po katastrofie tankowca",
      "nadmierne nawożenie",
      "tlenki siarki i azotu ze spalania surowców energetycznych",
      "używanie ciężkich maszyn rolniczych",
      "sole rtęci kadmu lub ołowiu w ściekach",
      "pyły emitowane przez samochody i zakłady przemysłowe"
    ],
    "categories": [
      "zanieczyszczenie powietrza",
      "zanieczyszczenie wód",
      "degradacja gleb"
    ],
    "explanation": "Zanieczyszczenia powietrza obejmują gazy i pyły, wód m.in. metale ciężkie i ropę, a glebę degraduje np. nadmierne nawożenie i ugniatanie ciężkimi maszynami."
  },
  {
    "id": "R04_WPL_11",
    "section": "Wpływ człowieka na różnorodność biologiczną",
    "type": "single_choice",
    "prompt": "Dlaczego w monokulturze leśnej szkodniki mogą szybko się rozprzestrzeniać?",
    "options": [
      "Ponieważ brakuje im pokarmu",
      "Ponieważ mają dużo pokarmu i mało naturalnych wrogów",
      "Ponieważ wszystkie drzewa są różnego gatunku",
      "Ponieważ nie mogą się rozmnażać",
      "Ponieważ występuje tam nadmiar starych dziuplastych drzew",
      "Ponieważ gleba zawsze jest podmokła"
    ],
    "answer": 1,
    "explanation": "Monokultura zapewnia szkodnikom dużo pokarmu, a jednocześnie jest uboga w ich naturalnych wrogów, np. ptaki gniazdujące w dziuplach starych drzew.",
    "image": "r04_monokultura_sosnowa.jpg"
  },
  {
    "id": "R04_WPL_12",
    "section": "Wpływ człowieka na różnorodność biologiczną",
    "type": "true_false",
    "prompt": "Wycinanie lasów w celu zwiększenia powierzchni upraw i pastwisk może prowadzić do zaniku siedlisk wielu organizmów.",
    "options": null,
    "answer": true,
    "explanation": "Przekształcanie terenów, w tym wycinanie lasów, niszczy siedliska i może przyczyniać się do wymierania gatunków."
  },
  {
    "id": "R04_WPL_13",
    "section": "Wpływ człowieka na różnorodność biologiczną",
    "type": "match",
    "prompt": "Połącz gatunek uznany w Polsce za wymarły z podaną przyczyną jego zaniku.",
    "options": null,
    "answer": {
      "storczyk trójzębny": "zniszczenie siedlisk",
      "perłoródka rzeczna": "znaczne zanieczyszczenie wód",
      "tur": "zmniejszenie powierzchni leśnych i polowania",
      "jesiotr zachodni": "połowy budowa zapór i silne zanieczyszczenie wód"
    },
    "left": [
      "storczyk trójzębny",
      "perłoródka rzeczna",
      "tur",
      "jesiotr zachodni"
    ],
    "right": [
      "połowy budowa zapór i silne zanieczyszczenie wód",
      "zniszczenie siedlisk",
      "zmniejszenie powierzchni leśnych i polowania",
      "znaczne zanieczyszczenie wód"
    ],
    "explanation": "Różne formy działalności człowieka prowadziły do zaniku tych gatunków w Polsce: niszczenie siedlisk, zanieczyszczenia, polowania, połowy i budowa zapór."
  },
  {
    "id": "R04_WPL_14",
    "section": "Wpływ człowieka na różnorodność biologiczną",
    "type": "multi_select",
    "prompt": "Zaznacz gatunki obce występujące w Polsce.",
    "options": [
      "barszcz Sosnowskiego",
      "żubr",
      "karp",
      "ryś",
      "szrotówek kasztanowcowiaczek",
      "zimorodek"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Do gatunków obcych występujących w Polsce należą barszcz Sosnowskiego, karp i szrotówek kasztanowcowiaczek.",
    "image": "r04_gatunki_obce_polska.jpg"
  },
  {
    "id": "R04_WPL_15",
    "section": "Wpływ człowieka na różnorodność biologiczną",
    "type": "scenario",
    "prompt": "Króliki sprowadzone do Australii zaczęły gwałtownie zwiększać liczebność. Co najbardziej sprzyjało temu zjawisku?",
    "options": [
      "brak roślinności na łąkach",
      "bardzo niska temperatura przez cały rok",
      "duża liczba lisów od początku introdukcji",
      "brak naturalnych wrogów",
      "zakaz rozmnażania",
      "duża liczba zapór na rzekach"
    ],
    "answer": 3,
    "explanation": "Króliki nadmiernie się rozmnożyły, ponieważ w nowym środowisku nie miały naturalnych wrogów."
  },
  {
    "id": "R04_ZAS_01",
    "section": "Racjonalne gospodarowanie zasobami przyrody",
    "type": "single_choice",
    "prompt": "Co nazywamy zasobami przyrody?",
    "options": [
      "Wyłącznie paliwa kopalne",
      "Tylko organizmy hodowlane",
      "Wszystkie elementy przyrody wykorzystywane przez człowieka",
      "Jedynie odnawialne źródła energii",
      "Tylko obszary chronione",
      "Wyłącznie woda i gleba"
    ],
    "answer": 2,
    "explanation": "Zasoby przyrody to wszystkie elementy przyrody wykorzystywane przez człowieka."
  },
  {
    "id": "R04_ZAS_02",
    "section": "Racjonalne gospodarowanie zasobami przyrody",
    "type": "multi_select",
    "prompt": "Zaznacz wyczerpywalne zasoby odnawialne.",
    "options": [
      "organizmy",
      "woda",
      "węgiel",
      "powietrze",
      "gleba",
      "rudy metali"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Do wyczerpywalnych zasobów odnawialnych należą organizmy, woda, powietrze i gleba."
  },
  {
    "id": "R04_ZAS_03",
    "section": "Racjonalne gospodarowanie zasobami przyrody",
    "type": "true_false",
    "prompt": "Energia słoneczna należy do zasobów niewyczerpywalnych.",
    "options": null,
    "answer": true,
    "explanation": "Energia słoneczna stale się odnawia i została zaliczona do zasobów niewyczerpywalnych."
  },
  {
    "id": "R04_ZAS_04",
    "section": "Racjonalne gospodarowanie zasobami przyrody",
    "type": "match",
    "prompt": "Połącz zasób odnawialny z procesem, dzięki któremu może się odtwarzać lub poprawiać jego stan.",
    "options": null,
    "answer": {
      "organizmy": "rozmnażanie",
      "powietrze": "działanie roślin wychwytujących dwutlenek węgla i pyły oraz produkujących tlen",
      "woda": "naturalne procesy biologiczne i chemiczne przywracające skład",
      "gleba": "wietrzenie skał i aktywność organizmów glebowych"
    },
    "left": [
      "organizmy",
      "powietrze",
      "woda",
      "gleba"
    ],
    "right": [
      "wietrzenie skał i aktywność organizmów glebowych",
      "rozmnażanie",
      "naturalne procesy biologiczne i chemiczne przywracające skład",
      "działanie roślin wychwytujących dwutlenek węgla i pyły oraz produkujących tlen"
    ],
    "explanation": "Odnawialność tych zasobów wynika z naturalnych procesów, ale zachodzi skutecznie tylko wtedy, gdy tempo eksploatacji nie jest zbyt duże."
  },
  {
    "id": "R04_ZAS_05",
    "section": "Racjonalne gospodarowanie zasobami przyrody",
    "type": "fill_in",
    "prompt": "Zasoby wyczerpywalne dzielą się na __________ i __________.",
    "options": null,
    "answer": [
      "odnawialne",
      "nieodnawialne"
    ],
    "altAnswers": [
      [
        "odnawialne"
      ],
      [
        "nieodnawialne"
      ]
    ],
    "explanation": "Wśród zasobów wyczerpywalnych wyróżnia się odnawialne oraz nieodnawialne."
  },
  {
    "id": "R04_ZAS_06",
    "section": "Racjonalne gospodarowanie zasobami przyrody",
    "type": "single_choice",
    "prompt": "Czym jest energia geotermalna?",
    "options": [
      "Energią ruchu fal morskich",
      "Energią promieniowania słonecznego",
      "Energią chemiczną paliw kopalnych",
      "Energią ruchu powietrza",
      "Energią cieplną skał wody i gruntu",
      "Energią powstającą wyłącznie ze spalania drewna"
    ],
    "answer": 4,
    "explanation": "Energia geotermalna to energia cieplna skał, wody i gruntu.",
    "image": "r04_zrodla_energii_odnawialnej.jpg"
  },
  {
    "id": "R04_ZAS_07",
    "section": "Racjonalne gospodarowanie zasobami przyrody",
    "type": "sequence",
    "prompt": "Ułóż pojęcia od kategorii najszerszej do konkretnego przykładu.",
    "options": null,
    "answer": [
      "zasoby przyrody",
      "zasoby wyczerpywalne",
      "zasoby odnawialne",
      "woda"
    ],
    "items": [
      "woda",
      "zasoby odnawialne",
      "zasoby przyrody",
      "zasoby wyczerpywalne"
    ],
    "explanation": "Woda jest odnawialnym zasobem wyczerpywalnym, a ten należy do ogólnej kategorii zasobów przyrody."
  },
  {
    "id": "R04_ZAS_08",
    "section": "Racjonalne gospodarowanie zasobami przyrody",
    "type": "odd_one_out",
    "prompt": "Wskaż zasób, który nie należy do odnawialnych zasobów wyczerpywalnych: woda, gleba, powietrze, ropa naftowa.",
    "options": null,
    "answer": "ropa naftowa",
    "explanation": "Ropa naftowa jest zasobem nieodnawialnym, natomiast woda, gleba i powietrze należą do zasobów odnawialnych."
  },
  {
    "id": "R04_ZAS_09",
    "section": "Racjonalne gospodarowanie zasobami przyrody",
    "type": "riddle",
    "prompt": "Jak nazywa się zasada, zgodnie z którą rozwój ma zaspokajać potrzeby obecnych pokoleń bez ograniczania tej możliwości przyszłym pokoleniom?",
    "options": null,
    "answer": "zrównoważony rozwój",
    "altAnswers": [
      "zrównoważony rozwój",
      "zasada zrównoważonego rozwoju"
    ],
    "explanation": "Zrównoważony rozwój łączy rozwój gospodarczy z ochroną zasobów i środowiska dla przyszłych pokoleń."
  },
  {
    "id": "R04_ZAS_10",
    "section": "Racjonalne gospodarowanie zasobami przyrody",
    "type": "sort",
    "prompt": "Przyporządkuj zasoby do właściwej kategorii.",
    "options": null,
    "answer": {
      "niewyczerpywalne": [
        "energia słoneczna",
        "energia wiatru",
        "energia geotermalna",
        "energia wody"
      ],
      "nieodnawialne": [
        "węgiel",
        "ropa naftowa",
        "gaz ziemny",
        "rudy metali"
      ]
    },
    "items": [
      "rudy metali",
      "energia wiatru",
      "gaz ziemny",
      "energia geotermalna",
      "ropa naftowa",
      "energia słoneczna",
      "węgiel",
      "energia wody"
    ],
    "categories": [
      "niewyczerpywalne",
      "nieodnawialne"
    ],
    "explanation": "Źródła energii takie jak słońce, wiatr, energia geotermalna i energia wody są niewyczerpywalne, natomiast paliwa kopalne i rudy metali są nieodnawialne."
  },
  {
    "id": "R04_ZAS_11",
    "section": "Racjonalne gospodarowanie zasobami przyrody",
    "type": "scenario",
    "prompt": "Rodzina chce zmniejszyć zużycie zasobów i ilość zanieczyszczeń. Które działanie najlepiej realizuje ten cel?",
    "options": [
      "częstsze używanie samochodu na krótkich trasach",
      "korzystanie z roweru lub komunikacji miejskiej",
      "wyrzucanie odpadów poza wyznaczonymi miejscami",
      "pozostawianie sprzętu stale podłączonego do prądu",
      "mieszanie wszystkich odpadów w jednym pojemniku",
      "zwiększanie zużycia paliw kopalnych"
    ],
    "answer": 1,
    "explanation": "Korzystanie z roweru lub komunikacji miejskiej zamiast samochodu zmniejsza produkcję spalin.",
    "image": "r04_ochrona_zasobow.jpg"
  },
  {
    "id": "R04_ZAS_12",
    "section": "Racjonalne gospodarowanie zasobami przyrody",
    "type": "true_false",
    "prompt": "Przestrzeganie limitów wycinki drzew, połowu ryb i polowań jest sposobem ograniczania eksploatacji organizmów.",
    "options": null,
    "answer": true,
    "explanation": "Limity eksploatacji pomagają utrzymać liczebność populacji i są elementem odpowiedzialnego korzystania z zasobów odnawialnych."
  },
  {
    "id": "R04_ZAS_13",
    "section": "Racjonalne gospodarowanie zasobami przyrody",
    "type": "match",
    "prompt": "Połącz zasób z możliwym skutkiem jego niewłaściwej eksploatacji.",
    "options": null,
    "answer": {
      "organizmy": "spadek liczebności lub wymarcie gatunku",
      "woda": "zanieczyszczenie i skażenie",
      "gleba": "degradacja i jałowienie",
      "powietrze": "zanieczyszczenie gazami i pyłami"
    },
    "left": [
      "organizmy",
      "woda",
      "gleba",
      "powietrze"
    ],
    "right": [
      "zanieczyszczenie gazami i pyłami",
      "zanieczyszczenie i skażenie",
      "spadek liczebności lub wymarcie gatunku",
      "degradacja i jałowienie"
    ],
    "explanation": "Nadmierna lub niewłaściwa eksploatacja pogarsza stan zasobów odnawialnych i może prowadzić do ich trwałego uszkodzenia."
  },
  {
    "id": "R04_ZAS_14",
    "section": "Racjonalne gospodarowanie zasobami przyrody",
    "type": "multi_select",
    "prompt": "Zaznacz codzienne działania sprzyjające racjonalnemu korzystaniu z zasobów przyrody.",
    "options": [
      "segregowanie śmieci",
      "korzystanie z roweru lub komunikacji miejskiej",
      "częstsze korzystanie z samochodu",
      "odłączanie naładowanych urządzeń od prądu",
      "wyrzucanie śmieci w lesie",
      "niewyrzucanie śmieci w nieodpowiednich miejscach"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "explanation": "Do prostych działań należą segregowanie odpadów, korzystanie z roweru lub komunikacji miejskiej, odłączanie naładowanych urządzeń od prądu i niewyrzucanie śmieci w nieodpowiednich miejscach."
  },
  {
    "id": "R04_ZAS_15",
    "section": "Racjonalne gospodarowanie zasobami przyrody",
    "type": "single_choice",
    "prompt": "Jaki proces umożliwia powtórne wykorzystanie surowców takich jak papier, szkło i plastik?",
    "options": [
      "recykling",
      "sukcesja",
      "eutrofizacja",
      "erozja",
      "kłusownictwo",
      "fragmentacja siedlisk"
    ],
    "answer": 0,
    "explanation": "Segregacja odpadów umożliwia recykling, czyli powtórne wykorzystanie surowców."
  },
  {
    "id": "R04_OCH_01",
    "section": "Sposoby ochrony przyrody",
    "type": "single_choice",
    "prompt": "Jaki jest główny cel ochrony przyrody?",
    "options": [
      "jak najszybsze wykorzystanie wszystkich zasobów",
      "całkowite wyłączenie człowieka ze wszystkich terenów",
      "zwiększenie wydobycia paliw kopalnych",
      "zachowanie właściwe wykorzystanie i odnawianie zasobów przyrody",
      "zastąpienie naturalnych ekosystemów monokulturami",
      "wprowadzanie obcych gatunków"
    ],
    "answer": 3,
    "explanation": "Ochrona przyrody ma na celu zachowanie, właściwe wykorzystanie i odnawianie zasobów przyrody oraz jej składników."
  },
  {
    "id": "R04_OCH_02",
    "section": "Sposoby ochrony przyrody",
    "type": "multi_select",
    "prompt": "Zaznacz najważniejsze formy ochrony obszarowej w Polsce.",
    "options": [
      "park narodowy",
      "pomnik przyrody",
      "rezerwat przyrody",
      "stanowisko dokumentacyjne",
      "park krajobrazowy",
      "użytek ekologiczny"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Do najważniejszych form ochrony obszarowej należą parki narodowe, rezerwaty przyrody i parki krajobrazowe."
  },
  {
    "id": "R04_OCH_03",
    "section": "Sposoby ochrony przyrody",
    "type": "true_false",
    "prompt": "Park narodowy ma powierzchnię co najmniej 1000 hektarów.",
    "options": null,
    "answer": true,
    "explanation": "Parki narodowe to obszary o powierzchni co najmniej 1000 ha, z przyrodą zachowaną w stanie niezmienionym lub mało zmienionym przez człowieka.",
    "image": "r04_bialowieski_park_narodowy.jpg"
  },
  {
    "id": "R04_OCH_04",
    "section": "Sposoby ochrony przyrody",
    "type": "match",
    "prompt": "Połącz formę ochrony obszarowej z jej opisem.",
    "options": null,
    "answer": {
      "park narodowy": "obszar co najmniej 1000 ha z przyrodą niezmienioną lub mało zmienioną",
      "rezerwat przyrody": "obszar mniejszy od parku narodowego chroniący cenne ekosystemy lub rzadkie gatunki z siedliskami",
      "park krajobrazowy": "teren atrakcyjny przyrodniczo o dużej wartości kulturowej i historycznej z działalnością zgodną ze zrównoważonym rozwojem"
    },
    "left": [
      "park narodowy",
      "rezerwat przyrody",
      "park krajobrazowy"
    ],
    "right": [
      "teren atrakcyjny przyrodniczo o dużej wartości kulturowej i historycznej z działalnością zgodną ze zrównoważonym rozwojem",
      "obszar co najmniej 1000 ha z przyrodą niezmienioną lub mało zmienioną",
      "obszar mniejszy od parku narodowego chroniący cenne ekosystemy lub rzadkie gatunki z siedliskami"
    ],
    "explanation": "Formy ochrony obszarowej różnią się wielkością, zakresem ochrony i dopuszczalnym sposobem użytkowania."
  },
  {
    "id": "R04_OCH_05",
    "section": "Sposoby ochrony przyrody",
    "type": "fill_in",
    "prompt": "Wokół każdego parku narodowego wyznacza się __________, która zabezpiecza park przed niekorzystnym wpływem sąsiednich terenów.",
    "options": null,
    "answer": [
      "otulinę"
    ],
    "altAnswers": [
      [
        "otulinę",
        "otulina"
      ]
    ],
    "explanation": "Otulina ogranicza niekorzystny wpływ przekształconych przez człowieka terenów sąsiadujących z parkiem."
  },
  {
    "id": "R04_OCH_06",
    "section": "Sposoby ochrony przyrody",
    "type": "sequence",
    "prompt": "Ułóż kolejne etapy odtwarzania liczebności zagrożonego gatunku zwierząt.",
    "options": null,
    "answer": [
      "Przedstawiciele zagrożonego gatunku trafiają do miejsca zapewniającego odpowiednie warunki",
      "Zwierzęta rozmnażają się i rozwijają pod opieką człowieka",
      "Wyhodowane osobniki są przygotowywane do powrotu do środowiska naturalnego",
      "Osobniki są wypuszczane do środowiska naturalnego"
    ],
    "items": [
      "Osobniki są wypuszczane do środowiska naturalnego",
      "Zwierzęta rozmnażają się i rozwijają pod opieką człowieka",
      "Przedstawiciele zagrożonego gatunku trafiają do miejsca zapewniającego odpowiednie warunki",
      "Wyhodowane osobniki są przygotowywane do powrotu do środowiska naturalnego"
    ],
    "explanation": "W czynnej ochronie zagrożonych gatunków najpierw zapewnia się warunki rozmnażania i rozwoju, a następnie wyhodowane osobniki wypuszcza się na wolność."
  },
  {
    "id": "R04_OCH_07",
    "section": "Sposoby ochrony przyrody",
    "type": "riddle",
    "prompt": "Jak nazywa się forma ochrony indywidualnej, którą można objąć wyjątkowo stare drzewo, takie jak dąb Bartek?",
    "options": null,
    "answer": "pomnik przyrody",
    "altAnswers": [
      "pomnik przyrody",
      "pomnikiem przyrody"
    ],
    "explanation": "Pomnikami przyrody mogą być pojedyncze cenne elementy przyrody ożywionej, np. wyjątkowo stare drzewa.",
    "image": "r04_pomnik_przyrody_dab_bartek.jpg"
  },
  {
    "id": "R04_OCH_08",
    "section": "Sposoby ochrony przyrody",
    "type": "odd_one_out",
    "prompt": "Wskaż formę, która nie należy do ochrony indywidualnej: pomnik przyrody, użytek ekologiczny, stanowisko dokumentacyjne, park narodowy.",
    "options": null,
    "answer": "park narodowy",
    "explanation": "Park narodowy jest formą ochrony obszarowej, a pozostałe należą do ochrony indywidualnej."
  },
  {
    "id": "R04_OCH_09",
    "section": "Sposoby ochrony przyrody",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do rodzaju ochrony przyrody.",
    "options": null,
    "answer": {
      "obszarowa": [
        "park narodowy",
        "rezerwat przyrody",
        "park krajobrazowy"
      ],
      "indywidualna": [
        "pomnik przyrody",
        "użytek ekologiczny",
        "stanowisko dokumentacyjne"
      ],
      "gatunkowa": [
        "ochrona ścisła gatunku",
        "ochrona częściowa gatunku"
      ]
    },
    "items": [
      "użytek ekologiczny",
      "ochrona częściowa gatunku",
      "park krajobrazowy",
      "pomnik przyrody",
      "rezerwat przyrody",
      "ochrona ścisła gatunku",
      "stanowisko dokumentacyjne",
      "park narodowy"
    ],
    "categories": [
      "obszarowa",
      "indywidualna",
      "gatunkowa"
    ],
    "explanation": "Ochrona obszarowa dotyczy większych terenów, indywidualna niewielkich elementów przyrody, a gatunkowa chroni gatunki rzadkie lub zagrożone."
  },
  {
    "id": "R04_OCH_10",
    "section": "Sposoby ochrony przyrody",
    "type": "single_choice",
    "prompt": "Czym różni się ochrona gatunkowa częściowa od ścisłej?",
    "options": [
      "Obejmuje wyłącznie rośliny",
      "Nie chroni siedlisk gatunku",
      "Dopuszcza określone prawnie gospodarcze wykorzystanie",
      "Obowiązuje tylko poza granicami kraju",
      "Nie wprowadza żadnych ograniczeń",
      "Jest tym samym co ochrona obszarowa"
    ],
    "answer": 2,
    "explanation": "Ochrona częściowa dopuszcza gospodarcze wykorzystywanie chronionych gatunków w zakresie określonym przepisami, a ścisła tego nie dopuszcza."
  },
  {
    "id": "R04_OCH_11",
    "section": "Sposoby ochrony przyrody",
    "type": "scenario",
    "prompt": "Chroniona łąka zaczyna zarastać drzewami i krzewami. Jakie działanie jest przykładem czynnej ochrony tego ekosystemu?",
    "options": [
      "pozostawienie zarastania bez zmian",
      "koszenie łąki i usuwanie drzew",
      "wprowadzenie obcego gatunku",
      "zwiększenie zabudowy",
      "osuszenie całego terenu",
      "wysypanie odpadów"
    ],
    "answer": 1,
    "explanation": "Koszenie łąk i usuwanie z nich drzew hamuje naturalne zarastanie i pomaga zachować charakter łąki.",
    "image": "r04_czynna_ochrona_przyrody.jpg"
  },
  {
    "id": "R04_OCH_12",
    "section": "Sposoby ochrony przyrody",
    "type": "true_false",
    "prompt": "Na obszarach Natura 2000 można prowadzić działalność gospodarczą pod warunkiem, że nie wpływa ona negatywnie na środowisko.",
    "options": null,
    "answer": true,
    "explanation": "Sieć Natura 2000 dopuszcza działalność gospodarczą, jeśli nie szkodzi ona chronionym siedliskom i gatunkom."
  },
  {
    "id": "R04_OCH_13",
    "section": "Sposoby ochrony przyrody",
    "type": "match",
    "prompt": "Połącz przykład czynnej ochrony przyrody z jego funkcją.",
    "options": null,
    "answer": {
      "korytarze ekologiczne": "umożliwiają przemieszczanie się między rozdzielonymi siedliskami",
      "sztuczne gniazda": "zapewniają ptakom miejsca do rozrodu",
      "dokarmianie zwierząt": "pomaga gdy naturalnego pokarmu jest mało lub jest trudno dostępny",
      "koszenie łąk": "hamuje zarastanie łąk"
    },
    "left": [
      "korytarze ekologiczne",
      "sztuczne gniazda",
      "dokarmianie zwierząt",
      "koszenie łąk"
    ],
    "right": [
      "hamuje zarastanie łąk",
      "zapewniają ptakom miejsca do rozrodu",
      "umożliwiają przemieszczanie się między rozdzielonymi siedliskami",
      "pomaga gdy naturalnego pokarmu jest mało lub jest trudno dostępny"
    ],
    "explanation": "Czynna ochrona wymaga ingerencji człowieka po to, aby zachować siedliska lub zwiększyć szanse przetrwania gatunków."
  },
  {
    "id": "R04_OCH_14",
    "section": "Sposoby ochrony przyrody",
    "type": "multi_select",
    "prompt": "Zaznacz gatunki, których populacje w Polsce odtwarzano za pomocą czynnych działań ochronnych.",
    "options": [
      "żubr",
      "bóbr",
      "ryś",
      "foka szara",
      "ślimak winniczek",
      "żółw błotny"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      5
    ],
    "explanation": "Takim działaniom poddano m.in. populacje żubra, bobra, rysia, foki szarej i żółwia błotnego."
  },
  {
    "id": "R04_OCH_15",
    "section": "Sposoby ochrony przyrody",
    "type": "single_choice",
    "prompt": "Ile parków narodowych istnieje w Polsce?",
    "options": [
      "9",
      "12",
      "21",
      "23",
      "30",
      "46"
    ],
    "answer": 3,
    "explanation": "W Polsce istnieją 23 parki narodowe."
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Około ilu opisanych gatunków organizmów żyje w Polsce?",
    "options": [
      "około 12 tys.",
      "około 35 tys.",
      "około 60 tys.",
      "około 100 tys.",
      "około 300 tys.",
      "około 800 tys."
    ],
    "answer": 2,
    "explanation": "W Polsce żyje około 60 tys. opisanych gatunków organizmów, w tym ponad 35 tys. gatunków zwierząt."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz grupy zaliczane do roślin wyższych.",
    "options": [
      "mszaki",
      "porosty",
      "paprotniki",
      "glony",
      "rośliny nasienne",
      "grzyby"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Do roślin wyższych zaliczono mszaki, paprotniki i rośliny nasienne."
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Największe wymieranie gatunków miało miejsce około 250 mln lat temu i wyginęło wtedy ponad 90% organizmów morskich.",
    "options": null,
    "answer": true,
    "explanation": "Największe wymieranie datowano na około 250 mln lat temu; jednym z jego skutków było wymarcie ponad 90% organizmów morskich."
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Lasy zajmują około __________ powierzchni Polski, a naturalne lasy około __________.",
    "options": null,
    "answer": [
      "30%",
      "4%"
    ],
    "altAnswers": [
      [
        "30%",
        "30 %",
        "30 procent"
      ],
      [
        "4%",
        "4 %",
        "4 procent"
      ]
    ],
    "explanation": "Około 30% powierzchni Polski zajmują lasy, lecz naturalne lasy stanowią około 4% powierzchni kraju."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz gatunek z podaną informacją o przyczynie jego wyginięcia w Polsce.",
    "options": null,
    "answer": {
      "storczyk trójzębny": "zniszczenie siedlisk",
      "suseł moręgowany": "niszczenie pastwisk i ugorów będących jego siedliskami",
      "perłoródka rzeczna": "znaczne zanieczyszczenie wód",
      "jesiotr zachodni": "połowy zapory na rzekach i silne zanieczyszczenie wód"
    },
    "left": [
      "storczyk trójzębny",
      "suseł moręgowany",
      "perłoródka rzeczna",
      "jesiotr zachodni"
    ],
    "right": [
      "połowy zapory na rzekach i silne zanieczyszczenie wód",
      "niszczenie pastwisk i ugorów będących jego siedliskami",
      "zniszczenie siedlisk",
      "znaczne zanieczyszczenie wód"
    ],
    "explanation": "Przyczyny zaniku tych gatunków były różne, ale wszystkie wiązały się z działalnością człowieka zmieniającą siedliska lub bezpośrednio oddziałującą na organizmy."
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Badacz odwiedza park obejmujący fragmenty Puszczy Białowieskiej. Na jego terenie żyje około 12 tys. gatunków zwierząt, czyli około jedna trzecia wszystkich gatunków zwierząt w Polsce. Jaki to park?",
    "options": [
      "Białowieski Park Narodowy",
      "Kampinoski Park Narodowy",
      "Karkonoski Park Narodowy",
      "Słowiński Park Narodowy",
      "Tatrzański Park Narodowy",
      "Park Narodowy Bory Tucholskie"
    ],
    "answer": 0,
    "explanation": "Tak scharakteryzowano Białowieski Park Narodowy.",
    "image": "r04_bialowieski_park_narodowy.jpg"
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż informację, która nie dotyczy parków narodowych w Polsce: 23 parki narodowe, około 1% powierzchni kraju, 21% powierzchni parków pod ochroną ścisłą, 75% gospodarstw domowych odprowadza ścieki do oczyszczalni.",
    "options": null,
    "answer": "75% gospodarstw domowych odprowadza ścieki do oczyszczalni",
    "explanation": "Pierwsze trzy dane dotyczą parków narodowych. Wartość 75% odnosi się do gospodarstw domowych odprowadzających ścieki do oczyszczalni."
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się najstarszy park krajobrazowy w Polsce, którego powierzchnia wynosi ponad 6000 ha?",
    "options": null,
    "answer": "Suwalski Park Krajobrazowy",
    "altAnswers": [
      "Suwalski Park Krajobrazowy",
      "suwalski park krajobrazowy"
    ],
    "explanation": "Suwalski Park Krajobrazowy jest uznawany za najstarszy tego typu obszar chroniony w Polsce."
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Na obszarach Natura 2000 ochronie podlega około 200 najcenniejszych siedlisk przyrodniczych oraz ponad 1000 rzadkich i zagrożonych gatunków.",
    "options": null,
    "answer": true,
    "explanation": "Sieć Natura 2000 obejmuje około 200 najcenniejszych siedlisk i ponad 1000 rzadkich oraz zagrożonych gatunków."
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Dąb Bartek ma około __________ lat, około __________ metrów wysokości, a obwód jego pnia przy ziemi przekracza __________ metrów.",
    "options": null,
    "answer": [
      "650",
      "30",
      "13"
    ],
    "altAnswers": [
      [
        "650",
        "650 lat"
      ],
      [
        "30",
        "30 m",
        "30 metrów"
      ],
      [
        "13",
        "13 m",
        "13 metrów"
      ]
    ],
    "explanation": "Dąb Bartek ma około 650 lat i 30 m wysokości, a obwód jego pnia przy ziemi przekracza 13 m.",
    "image": "r04_pomnik_przyrody_dab_bartek.jpg"
  },
  {
    "id": "R04_HARD_11",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz park narodowy z charakterystyczną informacją.",
    "options": null,
    "answer": {
      "Biebrzański Park Narodowy": "największy park narodowy w Polsce o powierzchni ponad 60 000 ha",
      "Słowiński Park Narodowy": "chroni ruchome wydmy przybrzeżne jeziora bagna i łąki",
      "Kampinoski Park Narodowy": "obejmuje bagna lasy i śródlądowe wydmy",
      "Białowieski Park Narodowy": "obejmuje fragmenty Puszczy Białowieskiej z obszarami niezmienionymi przez człowieka"
    },
    "left": [
      "Biebrzański Park Narodowy",
      "Słowiński Park Narodowy",
      "Kampinoski Park Narodowy",
      "Białowieski Park Narodowy"
    ],
    "right": [
      "obejmuje bagna lasy i śródlądowe wydmy",
      "największy park narodowy w Polsce o powierzchni ponad 60 000 ha",
      "obejmuje fragmenty Puszczy Białowieskiej z obszarami niezmienionymi przez człowieka",
      "chroni ruchome wydmy przybrzeżne jeziora bagna i łąki"
    ],
    "explanation": "Parki narodowe chronią odmienne, charakterystyczne ekosystemy i krajobrazy."
  },
  {
    "id": "R04_HARD_12",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W którym roku rozpoczęto odtwarzanie populacji żubrów w Polsce?",
    "options": [
      "1919",
      "1929",
      "1977",
      "1987",
      "2000",
      "2019"
    ],
    "answer": 1,
    "explanation": "Odtwarzanie populacji żubrów w Polsce rozpoczęto w 1929 r.; pierwsze żubry hodowano w rezerwacie Puszczy Białowieskiej."
  },
  {
    "id": "R04_HARD_13",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj dane liczbowe do tematu, którego dotyczą.",
    "options": null,
    "answer": {
      "odtwarzanie gatunków": [
        "1929 - początek odtwarzania populacji żubrów",
        "1977 - około 500 bobrów w Polsce"
      ],
      "racjonalne gospodarowanie zasobami": [
        "75% gospodarstw domowych odprowadza ścieki do oczyszczalni",
        "85% dzikich wysypisk zlikwidowano w 2019 r."
      ]
    },
    "items": [
      "85% dzikich wysypisk zlikwidowano w 2019 r.",
      "1977 - około 500 bobrów w Polsce",
      "75% gospodarstw domowych odprowadza ścieki do oczyszczalni",
      "1929 - początek odtwarzania populacji żubrów"
    ],
    "categories": [
      "odtwarzanie gatunków",
      "racjonalne gospodarowanie zasobami"
    ],
    "explanation": "Daty 1929 i 1977 dotyczą odtwarzania populacji żubra i bobra, natomiast wartości 75% i 85% odnoszą się do gospodarowania ściekami i likwidacji dzikich wysypisk."
  },
  {
    "id": "R04_HARD_14",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w kolejności chronologicznej.",
    "options": null,
    "answer": [
      "1929 - rozpoczęto odtwarzanie populacji żubrów w Polsce",
      "1977 - liczebność polskiej populacji bobra szacowano na 500 osobników",
      "1987 - w niewoli żyło 30 kondorów kalifornijskich",
      "2019 - w Polsce zlikwidowano 85% dzikich wysypisk śmieci"
    ],
    "items": [
      "1987 - w niewoli żyło 30 kondorów kalifornijskich",
      "2019 - w Polsce zlikwidowano 85% dzikich wysypisk śmieci",
      "1929 - rozpoczęto odtwarzanie populacji żubrów w Polsce",
      "1977 - liczebność polskiej populacji bobra szacowano na 500 osobników"
    ],
    "explanation": "Kolejność wynika z dat: 1929, 1977, 1987 i 2019."
  },
  {
    "id": "R04_HARD_15",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe informacje o parkach narodowych w Polsce.",
    "options": [
      "istnieją 23 parki narodowe",
      "zajmują łącznie ponad 300 000 ha",
      "stanowią około 1% powierzchni kraju",
      "dziewięć chroni ekosystemy unikalne w skali świata",
      "około 21% powierzchni parków objęto ochroną ścisłą",
      "cała powierzchnia każdego parku narodowego jest objęta ochroną ścisłą"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "W Polsce są 23 parki narodowe; łącznie zajmują ponad 300 000 ha, czyli około 1% powierzchni kraju. Dziewięć chroni ekosystemy unikalne w skali świata, a około 21% powierzchni parków objęto ochroną ścisłą."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r04",
  number: 4,
  title: "Człowiek i środowisko",
  icon: "🌍",
  sectionOrder: [
    "Różnorodność biologiczna",
    "Wpływ człowieka na różnorodność biologiczną",
    "Racjonalne gospodarowanie zasobami przyrody",
    "Sposoby ochrony przyrody"
  ],
  sectionIcons: {
    "Różnorodność biologiczna": "🧬",
    "Wpływ człowieka na różnorodność biologiczną": "🏭",
    "Racjonalne gospodarowanie zasobami przyrody": "🌱",
    "Sposoby ochrony przyrody": "🌳"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
