// Skróty sekcji (do identyfikatorów ćwiczeń):
//   UKL  = Układ Słoneczny
//   OBR  = Ruch obrotowy Ziemi
//   OBI  = Ruch obiegowy Ziemi
//   STR  = Strefowość oświetlenia Ziemi
//   KOS  = Poznawanie kosmosu
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_UKL_01",
    "section": "Układ Słoneczny",
    "type": "single_choice",
    "prompt": "Ile w przybliżeniu lat ma Wszechświat?",
    "options": [
      "13,8 mld lat",
      "4,6 mld lat",
      "365 dni",
      "100 tys. lat",
      "400 mld lat",
      "24 godziny"
    ],
    "answer": 0,
    "explanation": "Wszechświat powstał około 13,8 mld lat temu, a jego narodziny nazywa się Wielkim Wybuchem.",
    "image": "r01_galaktyka_spiralna.jpg"
  },
  {
    "id": "R01_UKL_02",
    "section": "Układ Słoneczny",
    "type": "true_false",
    "prompt": "Planety świecą własnym światłem tak jak gwiazdy.",
    "options": null,
    "answer": false,
    "explanation": "Planety nie świecą własnym światłem. Własne światło wytwarzają gwiazdy."
  },
  {
    "id": "R01_UKL_03",
    "section": "Układ Słoneczny",
    "type": "multi_select",
    "prompt": "Zaznacz mniejsze ciała niebieskie jako obiekty Układu Słonecznego oprócz planet.",
    "options": [
      "planety karłowate",
      "planetoidy",
      "komety",
      "meteoroidy",
      "kontynenty",
      "oceany"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W Układzie Słonecznym oprócz planet znajdują się m.in. planety karłowate, księżyce, planetoidy, komety i meteoroidy."
  },
  {
    "id": "R01_UKL_04",
    "section": "Układ Słoneczny",
    "type": "fill_in",
    "prompt": "Układ Słoneczny powstał około __________ lat temu i należy do galaktyki __________.",
    "options": null,
    "answer": [
      "4,6 mld",
      "Droga Mleczna"
    ],
    "altAnswers": [
      [
        "4,6 mld",
        "4,6 miliarda",
        "4,6 miliarda lat"
      ],
      [
        "Droga Mleczna",
        "Drogi Mlecznej"
      ]
    ],
    "explanation": "Układ Słoneczny ma około 4,6 mld lat i należy do Drogi Mlecznej."
  },
  {
    "id": "R01_UKL_05",
    "section": "Układ Słoneczny",
    "type": "sort",
    "prompt": "Przyporządkuj planety do dwóch grup.",
    "options": null,
    "items": [
      "Merkury",
      "Wenus",
      "Ziemia",
      "Mars",
      "Jowisz",
      "Saturn",
      "Uran",
      "Neptun"
    ],
    "categories": [
      "planety skaliste",
      "gazowe olbrzymy"
    ],
    "answer": {
      "planety skaliste": [
        "Merkury",
        "Wenus",
        "Ziemia",
        "Mars"
      ],
      "gazowe olbrzymy": [
        "Jowisz",
        "Saturn",
        "Uran",
        "Neptun"
      ]
    },
    "explanation": "Cztery planety skaliste to Merkury, Wenus, Ziemia i Mars, a cztery gazowe olbrzymy to Jowisz, Saturn, Uran i Neptun.",
    "image": "r01_uklad_sloneczny_planety.jpg"
  },
  {
    "id": "R01_UKL_06",
    "section": "Układ Słoneczny",
    "type": "match",
    "prompt": "Połącz pojęcie z wyjaśnieniem.",
    "options": null,
    "left": [
      "galaktyka",
      "gwiazda",
      "planeta",
      "orbita"
    ],
    "right": [
      "zbiorowisko m.in. milionów gwiazd oraz gazu i pyłu",
      "ciało z gorących gazów wytwarzające światło",
      "ciało niebieskie często krążące wokół gwiazdy",
      "tor ruchu ciała niebieskiego wokół innego ciała"
    ],
    "answer": {
      "galaktyka": "zbiorowisko m.in. milionów gwiazd oraz gazu i pyłu",
      "gwiazda": "ciało z gorących gazów wytwarzające światło",
      "planeta": "ciało niebieskie często krążące wokół gwiazdy",
      "orbita": "tor ruchu ciała niebieskiego wokół innego ciała"
    },
    "explanation": "Galaktyka, gwiazda, planeta i orbita to podstawowe pojęcia związane z opisem Wszechświata i Układu Słonecznego.",
    "image": "r01_galaktyka_spiralna.jpg"
  },
  {
    "id": "R01_UKL_07",
    "section": "Układ Słoneczny",
    "type": "sequence",
    "prompt": "Ułóż planety skaliste w kolejności od Słońca.",
    "options": null,
    "items": [
      "Ziemia",
      "Merkury",
      "Mars",
      "Wenus"
    ],
    "answer": [
      "Merkury",
      "Wenus",
      "Ziemia",
      "Mars"
    ],
    "explanation": "Planety skaliste położone kolejno od Słońca to Merkury, Wenus, Ziemia i Mars.",
    "image": "r01_uklad_sloneczny_planety.jpg"
  },
  {
    "id": "R01_UKL_08",
    "section": "Układ Słoneczny",
    "type": "odd_one_out",
    "prompt": "Wskaż planetę, która nie pasuje do pozostałych: Merkury, Wenus, Ziemia, Jowisz.",
    "options": null,
    "answer": "Jowisz",
    "explanation": "Merkury, Wenus i Ziemia są planetami skalistymi, a Jowisz jest gazowym olbrzymem."
  },
  {
    "id": "R01_UKL_09",
    "section": "Układ Słoneczny",
    "type": "riddle",
    "prompt": "Najbliższa Ziemi gwiazda to...",
    "options": null,
    "answer": "Słońce",
    "altAnswers": [
      "Słońce",
      "Slonce"
    ],
    "explanation": "Za dnia blask innych gwiazd przyćmiewa gwiazda znajdująca się najbliżej naszej planety, czyli Słońce."
  },
  {
    "id": "R01_UKL_10",
    "section": "Układ Słoneczny",
    "type": "scenario",
    "prompt": "Podczas lekcji ktoś mówi: Ten obiekt jest w centrum Układu Słonecznego, jest gwiazdą i wokół niego krąży osiem planet. O jaki obiekt chodzi?",
    "options": [
      "Słońce",
      "Księżyc",
      "Jowisz",
      "Droga Mleczna",
      "Pluton",
      "Ziemia"
    ],
    "answer": 0,
    "explanation": "W centrum Układu Słonecznego znajduje się gwiazda zwana Słońcem, a wokół niej krąży osiem planet."
  },
  {
    "id": "R01_UKL_11",
    "section": "Układ Słoneczny",
    "type": "single_choice",
    "prompt": "Która planeta ma najwięcej księżyców w Układzie Słonecznym?",
    "options": [
      "Saturn",
      "Jowisz",
      "Uran",
      "Neptun",
      "Mars",
      "Ziemia"
    ],
    "answer": 0,
    "explanation": "Saturn ma najwięcej księżyców w Układzie Słonecznym - 146."
  },
  {
    "id": "R01_UKL_12",
    "section": "Układ Słoneczny",
    "type": "match",
    "prompt": "Połącz ciało niebieskie z opisem.",
    "options": null,
    "left": [
      "naturalne satelity",
      "komety",
      "meteoroidy",
      "meteoryty"
    ],
    "right": [
      "obiegają planety lub planety karłowate",
      "składają się ze skał i lodu oraz warkocza pyłów i gazów",
      "małe odłamki skalne",
      "fragmenty meteoroidów docierające do powierzchni Ziemi"
    ],
    "answer": {
      "naturalne satelity": "obiegają planety lub planety karłowate",
      "komety": "składają się ze skał i lodu oraz warkocza pyłów i gazów",
      "meteoroidy": "małe odłamki skalne",
      "meteoryty": "fragmenty meteoroidów docierające do powierzchni Ziemi"
    },
    "explanation": "Rozróżnia się mniejsze ciała niebieskie: naturalne satelity, komety, meteoroidy i meteoryty.",
    "image": "r01_ciala_niebieskie_mniejsze.jpg"
  },
  {
    "id": "R01_OBR_01",
    "section": "Ruch obrotowy Ziemi",
    "type": "single_choice",
    "prompt": "Ile trwa jeden pełny obrót Ziemi wokół własnej osi?",
    "options": [
      "około 24 godzin",
      "około 365 dni",
      "około 27 dni",
      "około 88 dni",
      "około 165 lat",
      "około 12 godzin"
    ],
    "answer": 0,
    "explanation": "Jeden pełny obrót Ziemi wokół własnej osi trwa około 24 godzin, czyli dobę.",
    "image": "r01_ruch_obrotowy_ziemi.jpg"
  },
  {
    "id": "R01_OBR_02",
    "section": "Ruch obrotowy Ziemi",
    "type": "true_false",
    "prompt": "Ziemia obraca się wokół własnej osi ze wschodu na zachód.",
    "options": null,
    "answer": false,
    "explanation": "Ziemia obraca się z zachodu na wschód, a pozorna wędrówka Słońca odbywa się przeciwnie - ze wschodu na zachód.",
    "image": "r01_ruch_obrotowy_ziemi.jpg"
  },
  {
    "id": "R01_OBR_03",
    "section": "Ruch obrotowy Ziemi",
    "type": "fill_in",
    "prompt": "Oś Ziemi to wyobrażona linia biegnąca od bieguna __________ do bieguna __________.",
    "options": null,
    "answer": [
      "północnego",
      "południowego"
    ],
    "altAnswers": [
      [
        "północnego",
        "polnocnego"
      ],
      [
        "południowego",
        "poludniowego"
      ]
    ],
    "explanation": "Oś Ziemi to prosta linia prowadząca przez środek Ziemi od bieguna północnego do bieguna południowego."
  },
  {
    "id": "R01_OBR_04",
    "section": "Ruch obrotowy Ziemi",
    "type": "match",
    "prompt": "Połącz pojęcie z opisem pozornej wędrówki Słońca.",
    "options": null,
    "left": [
      "wschód Słońca",
      "górowanie Słońca",
      "zachód Słońca",
      "horyzont"
    ],
    "right": [
      "pojawienie się Słońca na horyzoncie",
      "najwyższe położenie Słońca nad horyzontem",
      "zniknięcie Słońca za horyzontem",
      "linia oddzielająca widoczną część nieba od niewidocznej"
    ],
    "answer": {
      "wschód Słońca": "pojawienie się Słońca na horyzoncie",
      "górowanie Słońca": "najwyższe położenie Słońca nad horyzontem",
      "zachód Słońca": "zniknięcie Słońca za horyzontem",
      "horyzont": "linia oddzielająca widoczną część nieba od niewidocznej"
    },
    "explanation": "Wyjaśnia się wschód, górowanie i zachód Słońca oraz definiuje horyzont.",
    "image": "r01_pozorna_wedrowka_slonca.jpg"
  },
  {
    "id": "R01_OBR_05",
    "section": "Ruch obrotowy Ziemi",
    "type": "single_choice",
    "prompt": "W jakim kierunku Słońce pozornie wędruje po niebie w ciągu dnia?",
    "options": [
      "ze wschodu na zachód",
      "z zachodu na wschód",
      "z północy na południe",
      "z południa na północ",
      "po orbicie wokół Ziemi",
      "zawsze pionowo w dół"
    ],
    "answer": 0,
    "explanation": "Pozorna wędrówka Słońca po niebie odbywa się ze wschodu na zachód, czyli przeciwnie do kierunku obrotu Ziemi."
  },
  {
    "id": "R01_OBR_06",
    "section": "Ruch obrotowy Ziemi",
    "type": "multi_select",
    "prompt": "Zaznacz skutki ruchu obrotowego Ziemi.",
    "options": [
      "występowanie dnia i nocy",
      "pozorna wędrówka Słońca po niebie",
      "zróżnicowanie czasu na Ziemi",
      "dobowy rytm życia ludzi i zwierząt",
      "występowanie pór roku",
      "występowanie dni polarnych"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Skutkami ruchu obrotowego są m.in. dzień i noc, pozorna wędrówka Słońca, zróżnicowanie czasu oraz dobowy rytm życia."
  },
  {
    "id": "R01_OBR_07",
    "section": "Ruch obrotowy Ziemi",
    "type": "scenario",
    "prompt": "Jest dokładnie połowa dnia słonecznego. Słońce znajduje się najwyżej nad horyzontem. Jak nazywa się ten moment?",
    "options": [
      "południe słoneczne",
      "równonoc",
      "przesilenie",
      "północ polarna",
      "wschód Słońca",
      "zachód Słońca"
    ],
    "answer": 0,
    "explanation": "Moment, w którym Słońce jest najwyżej nad horyzontem, to górowanie Słońca, czyli południe słoneczne."
  },
  {
    "id": "R01_OBR_08",
    "section": "Ruch obrotowy Ziemi",
    "type": "odd_one_out",
    "prompt": "Co nie jest skutkiem ruchu obrotowego Ziemi: dzień i noc, rytm dobowy, zróżnicowanie czasu, pory roku.",
    "options": null,
    "answer": "pory roku",
    "explanation": "Pory roku są skutkiem ruchu obiegowego Ziemi i nachylenia osi, a nie skutkiem ruchu obrotowego."
  },
  {
    "id": "R01_OBR_09",
    "section": "Ruch obrotowy Ziemi",
    "type": "riddle",
    "prompt": "Linia w kształcie okręgu oddzielająca widoczną część nieba od niewidocznej to...",
    "options": null,
    "answer": "horyzont",
    "altAnswers": [
      "horyzont"
    ],
    "explanation": "Horyzont to linia oddzielająca widoczną część nieba od tej niewidocznej."
  },
  {
    "id": "R01_OBR_10",
    "section": "Ruch obrotowy Ziemi",
    "type": "true_false",
    "prompt": "Im dalej na zachód położone jest miejsce na Ziemi, tym wcześniejsza jest tam godzina.",
    "options": null,
    "answer": true,
    "explanation": "Im dalej na zachód, tym wcześniejsza godzina, a im dalej na wschód, tym późniejsza.",
    "image": "r01_strefy_czasowe_mapa.jpg"
  },
  {
    "id": "R01_OBR_11",
    "section": "Ruch obrotowy Ziemi",
    "type": "sort",
    "prompt": "Przyporządkuj miejsca do różnicy czasu względem Polski zgodnie z zasadą.",
    "options": null,
    "items": [
      "Lizbona",
      "Argentyna",
      "Dubaj",
      "Japonia"
    ],
    "categories": [
      "wcześniejsza godzina niż w Polsce",
      "późniejsza godzina niż w Polsce"
    ],
    "answer": {
      "wcześniejsza godzina niż w Polsce": [
        "Lizbona",
        "Argentyna"
      ],
      "późniejsza godzina niż w Polsce": [
        "Dubaj",
        "Japonia"
      ]
    },
    "explanation": "Miejsca położone na zachód od Polski mają wcześniejszą godzinę, a miejsca położone na wschód - późniejszą.",
    "image": "r01_strefy_czasowe_mapa.jpg"
  },
  {
    "id": "R01_OBR_12",
    "section": "Ruch obrotowy Ziemi",
    "type": "sequence",
    "prompt": "Ułóż etapy pozornej wędrówki Słońca w ciągu dnia.",
    "options": null,
    "items": [
      "górowanie Słońca",
      "zachód Słońca",
      "wschód Słońca",
      "obniżanie się Słońca",
      "wznoszenie się Słońca"
    ],
    "answer": [
      "wschód Słońca",
      "wznoszenie się Słońca",
      "górowanie Słońca",
      "obniżanie się Słońca",
      "zachód Słońca"
    ],
    "explanation": "Dzień zaczyna się wschodem Słońca, potem Słońce pozornie wznosi się, góruje, obniża i zachodzi.",
    "image": "r01_pozorna_wedrowka_slonca.jpg"
  },
  {
    "id": "R01_OBI_01",
    "section": "Ruch obiegowy Ziemi",
    "type": "single_choice",
    "prompt": "Jak nazywamy przemieszczanie się Ziemi wokół Słońca?",
    "options": [
      "ruch obiegowy",
      "ruch obrotowy",
      "górowanie Słońca",
      "noc polarna",
      "zenit",
      "strefa czasowa"
    ],
    "answer": 0,
    "explanation": "Ziemia obiega Słońce, dlatego to przemieszczanie się nazywamy ruchem obiegowym.",
    "image": "r01_pory_roku_orbita.jpg"
  },
  {
    "id": "R01_OBI_02",
    "section": "Ruch obiegowy Ziemi",
    "type": "fill_in",
    "prompt": "Pełne okrążenie Słońca przez Ziemię trwa dokładniej __________ dni, __________ godzin i __________ minut.",
    "options": null,
    "answer": [
      "365",
      "5",
      "49"
    ],
    "altAnswers": [
      [
        "365",
        "365 dni"
      ],
      [
        "5",
        "5 godzin"
      ],
      [
        "49",
        "49 minut"
      ]
    ],
    "explanation": "Dokładniejszy czas obiegu Ziemi wokół Słońca wynosi 365 dni, 5 godzin i 49 minut."
  },
  {
    "id": "R01_OBI_03",
    "section": "Ruch obiegowy Ziemi",
    "type": "true_false",
    "prompt": "Orbita Ziemi ma kształt elipsy, czyli spłaszczonego okręgu.",
    "options": null,
    "answer": true,
    "explanation": "Trasa obiegu Ziemi wokół Słońca, zwana orbitą, ma kształt elipsy."
  },
  {
    "id": "R01_OBI_04",
    "section": "Ruch obiegowy Ziemi",
    "type": "multi_select",
    "prompt": "Zaznacz skutki ruchu obiegowego Ziemi.",
    "options": [
      "występowanie pór roku",
      "występowanie dnia polarnego i nocy polarnej",
      "zmiana trasy pozornej wędrówki Słońca nad horyzontem",
      "zmiana długości dnia i nocy w ciągu roku",
      "podział Ziemi na strefy czasowe",
      "dobowy rytm życia ludzi"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Ruch obiegowy Ziemi skutkuje m.in. porami roku, dniami i nocami polarnymi, zmianą trasy Słońca nad horyzontem oraz zmianą długości dnia i nocy."
  },
  {
    "id": "R01_OBI_05",
    "section": "Ruch obiegowy Ziemi",
    "type": "match",
    "prompt": "Połącz datę z wydarzeniem na półkuli północnej.",
    "options": null,
    "left": [
      "około 21 marca",
      "około 22 czerwca",
      "około 23 września",
      "około 22 grudnia"
    ],
    "right": [
      "początek kalendarzowej wiosny",
      "początek kalendarzowego lata",
      "początek kalendarzowej jesieni",
      "początek kalendarzowej zimy"
    ],
    "answer": {
      "około 21 marca": "początek kalendarzowej wiosny",
      "około 22 czerwca": "początek kalendarzowego lata",
      "około 23 września": "początek kalendarzowej jesieni",
      "około 22 grudnia": "początek kalendarzowej zimy"
    },
    "explanation": "Na półkuli północnej około 21 marca zaczyna się wiosna, około 22 czerwca lato, około 23 września jesień, a około 22 grudnia zima.",
    "image": "r01_pory_roku_orbita.jpg"
  },
  {
    "id": "R01_OBI_06",
    "section": "Ruch obiegowy Ziemi",
    "type": "sort",
    "prompt": "Przyporządkuj wydarzenia do dat przesileń.",
    "options": null,
    "items": [
      "początek lata na półkuli północnej",
      "początek zimy na półkuli południowej",
      "początek zimy na półkuli północnej",
      "początek lata na półkuli południowej"
    ],
    "categories": [
      "około 22 czerwca",
      "około 22 grudnia"
    ],
    "answer": {
      "około 22 czerwca": [
        "początek lata na półkuli północnej",
        "początek zimy na półkuli południowej"
      ],
      "około 22 grudnia": [
        "początek zimy na półkuli północnej",
        "początek lata na półkuli południowej"
      ]
    },
    "explanation": "Podczas przesilenia letniego na półkuli północnej zaczyna się lato, a na południowej zima; podczas przesilenia zimowego jest odwrotnie."
  },
  {
    "id": "R01_OBI_07",
    "section": "Ruch obiegowy Ziemi",
    "type": "single_choice",
    "prompt": "Która półkula jest mocniej oświetlona podczas przesilenia letniego około 22 czerwca?",
    "options": [
      "półkula północna",
      "półkula południowa",
      "obie tak samo",
      "żadna z półkul",
      "tylko okolice równika",
      "tylko biegun południowy"
    ],
    "answer": 0,
    "explanation": "Około 22 czerwca półkula północna jest mocniej oświetlona, dociera do niej więcej energii słonecznej i zaczyna się tam lato.",
    "image": "r01_oswietlenie_przesilenie.jpg"
  },
  {
    "id": "R01_OBI_08",
    "section": "Ruch obiegowy Ziemi",
    "type": "scenario",
    "prompt": "W Polsce wypada najkrótszy dzień i najdłuższa noc w roku. Która data pasuje do tej sytuacji?",
    "options": [
      "około 22 grudnia",
      "około 22 czerwca",
      "około 21 marca",
      "około 23 września",
      "około 12 kwietnia",
      "około 20 lipca"
    ],
    "answer": 0,
    "explanation": "Na półkuli północnej podczas przesilenia zimowego, około 22 grudnia, występuje najkrótszy dzień i najdłuższa noc w roku."
  },
  {
    "id": "R01_OBI_09",
    "section": "Ruch obiegowy Ziemi",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do ruchu obiegowego Ziemi: orbita, elipsa, pory roku, strefy czasowe.",
    "options": null,
    "answer": "strefy czasowe",
    "explanation": "Strefy czasowe wiążą się z ruchem obrotowym Ziemi, a nie bezpośrednio z jej obiegiem wokół Słońca."
  },
  {
    "id": "R01_OBI_10",
    "section": "Ruch obiegowy Ziemi",
    "type": "riddle",
    "prompt": "Doba, w której dzień i noc mają po 12 godzin, to...",
    "options": null,
    "answer": "równonoc",
    "altAnswers": [
      "równonoc",
      "rownonoc"
    ],
    "explanation": "Równonoc to doba, w której dzień i noc mają taką samą długość, po 12 godzin."
  },
  {
    "id": "R01_OBI_11",
    "section": "Ruch obiegowy Ziemi",
    "type": "sequence",
    "prompt": "Ułóż daty początków astronomicznych pór roku na półkuli północnej w kolejności od początku roku.",
    "options": null,
    "items": [
      "około 23 września",
      "około 22 czerwca",
      "około 22 grudnia",
      "około 21 marca"
    ],
    "answer": [
      "około 21 marca",
      "około 22 czerwca",
      "około 23 września",
      "około 22 grudnia"
    ],
    "explanation": "W kolejności w roku są: równonoc wiosenna, przesilenie letnie, równonoc jesienna i przesilenie zimowe.",
    "image": "r01_pory_roku_orbita.jpg"
  },
  {
    "id": "R01_OBI_12",
    "section": "Ruch obiegowy Ziemi",
    "type": "match",
    "prompt": "Połącz pojęcie z definicją.",
    "options": null,
    "left": [
      "dzień polarny",
      "noc polarna",
      "przesilenie",
      "równonoc"
    ],
    "right": [
      "Słońce nie zachodzi przez co najmniej 24 godziny",
      "Słońce nie wschodzi przez co najmniej 24 godziny",
      "doba z najdłuższym albo najkrótszym dniem w roku",
      "doba z dniem i nocą tej samej długości"
    ],
    "answer": {
      "dzień polarny": "Słońce nie zachodzi przez co najmniej 24 godziny",
      "noc polarna": "Słońce nie wschodzi przez co najmniej 24 godziny",
      "przesilenie": "doba z najdłuższym albo najkrótszym dniem w roku",
      "równonoc": "doba z dniem i nocą tej samej długości"
    },
    "explanation": "Definiuje się dzień i noc polarną oraz wyjaśnia różnicę między przesileniem i równonocą."
  },
  {
    "id": "R01_STR_01",
    "section": "Strefowość oświetlenia Ziemi",
    "type": "single_choice",
    "prompt": "Gdzie na Ziemi występują najwyższe średnie roczne temperatury powietrza?",
    "options": [
      "między zwrotnikiem Raka a zwrotnikiem Koziorożca",
      "przy biegunie północnym",
      "przy biegunie południowym",
      "tylko na kołach podbiegunowych",
      "na wszystkich obszarach tak samo",
      "wyłącznie w Polsce"
    ],
    "answer": 0,
    "explanation": "Najwyższe średnie roczne temperatury występują na obszarze między zwrotnikiem Raka a zwrotnikiem Koziorożca."
  },
  {
    "id": "R01_STR_02",
    "section": "Strefowość oświetlenia Ziemi",
    "type": "fill_in",
    "prompt": "Kąt padania promieni słonecznych to kąt między promieniami a __________ Ziemi.",
    "options": null,
    "answer": [
      "powierzchnią"
    ],
    "altAnswers": [
      [
        "powierzchnią",
        "powierzchnia",
        "powierzchnią Ziemi"
      ]
    ],
    "explanation": "Definiuje się kąt padania promieni słonecznych jako kąt między promieniami a powierzchnią Ziemi.",
    "image": "r01_kat_padania_promieni.jpg"
  },
  {
    "id": "R01_STR_03",
    "section": "Strefowość oświetlenia Ziemi",
    "type": "true_false",
    "prompt": "Im większy jest kąt padania promieni słonecznych, tym więcej energii słonecznej dociera do powierzchni Ziemi.",
    "options": null,
    "answer": true,
    "explanation": "Duży kąt padania promieni oznacza dużo energii słonecznej i cieplejsze warunki."
  },
  {
    "id": "R01_STR_04",
    "section": "Strefowość oświetlenia Ziemi",
    "type": "multi_select",
    "prompt": "Zaznacz cechy strefy międzyzwrotnikowej.",
    "options": [
      "leży między zwrotnikiem Raka a zwrotnikiem Koziorożca",
      "Słońce może świecić w zenicie",
      "dociera tam najwięcej energii słonecznej",
      "na równiku długość dnia i nocy jest stała",
      "występują tam dni i noce polarne",
      "ma najniższe temperatury na Ziemi"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Strefa międzyzwrotnikowa leży między zwrotnikami, może mieć Słońce w zenicie i otrzymuje najwięcej energii słonecznej; długość dnia i nocy zmienia się tam niewiele, a na równiku jest stała."
  },
  {
    "id": "R01_STR_05",
    "section": "Strefowość oświetlenia Ziemi",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do stref oświetlenia Ziemi.",
    "options": null,
    "items": [
      "Słońce może świecić w zenicie",
      "najmniejszy kąt padania promieni",
      "wyraźnie zróżnicowane kalendarzowe pory roku",
      "dni i noce polarne",
      "najwięcej energii słonecznej",
      "długość dnia i nocy zmienia się wraz z porami roku"
    ],
    "categories": [
      "strefa międzyzwrotnikowa",
      "strefy umiarkowane",
      "strefy podbiegunowe"
    ],
    "answer": {
      "strefa międzyzwrotnikowa": [
        "Słońce może świecić w zenicie",
        "najwięcej energii słonecznej"
      ],
      "strefy umiarkowane": [
        "wyraźnie zróżnicowane kalendarzowe pory roku",
        "długość dnia i nocy zmienia się wraz z porami roku"
      ],
      "strefy podbiegunowe": [
        "najmniejszy kąt padania promieni",
        "dni i noce polarne"
      ]
    },
    "explanation": "Strefy różnią się ilością energii, kątem padania promieni oraz zjawiskami takimi jak pory roku lub dni i noce polarne.",
    "image": "r01_strefy_oswietlenia_ziemi.jpg"
  },
  {
    "id": "R01_STR_06",
    "section": "Strefowość oświetlenia Ziemi",
    "type": "sequence",
    "prompt": "Ułóż strefy oświetlenia Ziemi od bieguna północnego do bieguna południowego.",
    "options": null,
    "items": [
      "strefa umiarkowana południowa",
      "strefa podbiegunowa północna",
      "strefa międzyzwrotnikowa",
      "strefa podbiegunowa południowa",
      "strefa umiarkowana północna"
    ],
    "answer": [
      "strefa podbiegunowa północna",
      "strefa umiarkowana północna",
      "strefa międzyzwrotnikowa",
      "strefa umiarkowana południowa",
      "strefa podbiegunowa południowa"
    ],
    "explanation": "Od północy ku południu występują kolejno: strefa podbiegunowa północna, umiarkowana północna, międzyzwrotnikowa, umiarkowana południowa i podbiegunowa południowa.",
    "image": "r01_strefy_oswietlenia_ziemi.jpg"
  },
  {
    "id": "R01_STR_07",
    "section": "Strefowość oświetlenia Ziemi",
    "type": "match",
    "prompt": "Połącz strefę oświetlenia z jej położeniem.",
    "options": null,
    "left": [
      "strefa międzyzwrotnikowa",
      "strefy umiarkowane",
      "strefy podbiegunowe"
    ],
    "right": [
      "między zwrotnikiem Raka a zwrotnikiem Koziorożca",
      "między danym zwrotnikiem a bliższym kołem podbiegunowym",
      "między kołami podbiegunowymi a biegunami"
    ],
    "answer": {
      "strefa międzyzwrotnikowa": "między zwrotnikiem Raka a zwrotnikiem Koziorożca",
      "strefy umiarkowane": "między danym zwrotnikiem a bliższym kołem podbiegunowym",
      "strefy podbiegunowe": "między kołami podbiegunowymi a biegunami"
    },
    "explanation": "Położenie stref oświetlenia wyznaczają równoleżniki: zwrotniki, koła podbiegunowe i bieguny.",
    "image": "r01_strefy_oswietlenia_ziemi.jpg"
  },
  {
    "id": "R01_STR_08",
    "section": "Strefowość oświetlenia Ziemi",
    "type": "single_choice",
    "prompt": "Na co wpływa ilość energii słonecznej docierającej do danego obszaru?",
    "options": [
      "na klimat i w konsekwencji na krajobraz",
      "wyłącznie na nazwy kontynentów",
      "tylko na liczbę gwiazd",
      "na liczbę planet w Układzie Słonecznym",
      "na czas obrotu Ziemi",
      "na liczbę stref czasowych"
    ],
    "answer": 0,
    "explanation": "Ilość energii słonecznej wpływa na klimat obszaru, a w konsekwencji także na krajobraz."
  },
  {
    "id": "R01_STR_09",
    "section": "Strefowość oświetlenia Ziemi",
    "type": "odd_one_out",
    "prompt": "Co nie układa się równoleżnikowo i symetrycznie względem równika: strefy oświetlenia, strefy klimatyczne, strefy krajobrazowe, strefy czasowe.",
    "options": null,
    "answer": "strefy czasowe",
    "explanation": "Strefy oświetlenia, klimatyczne i krajobrazowe mają podobny równoleżnikowy układ; strefy czasowe nie mają takiego układu."
  },
  {
    "id": "R01_STR_10",
    "section": "Strefowość oświetlenia Ziemi",
    "type": "riddle",
    "prompt": "Punkt na niebie znajdujący się dokładnie nad obserwatorem to...",
    "options": null,
    "answer": "zenit",
    "altAnswers": [
      "zenit"
    ],
    "explanation": "Zenit to punkt na niebie dokładnie nad obserwatorem."
  },
  {
    "id": "R01_STR_11",
    "section": "Strefowość oświetlenia Ziemi",
    "type": "scenario",
    "prompt": "Badacz porównuje dwa miejsca. W pierwszym promienie słoneczne padają pod dużym kątem, w drugim pod małym. Gdzie będzie cieplej?",
    "options": [
      "w miejscu z dużym kątem padania promieni",
      "w miejscu z małym kątem padania promieni",
      "w obu miejscach zawsze tak samo",
      "tylko przy biegunie południowym",
      "tylko tam, gdzie trwa noc polarna",
      "tylko w strefach czasowych"
    ],
    "answer": 0,
    "explanation": "Tam, gdzie kąt padania promieni słonecznych jest duży, dociera dużo energii słonecznej i jest cieplej.",
    "image": "r01_kat_padania_promieni.jpg"
  },
  {
    "id": "R01_STR_12",
    "section": "Strefowość oświetlenia Ziemi",
    "type": "true_false",
    "prompt": "Polska leży w jednej ze stref umiarkowanych oświetlenia Ziemi.",
    "options": null,
    "answer": true,
    "explanation": "Polska znajduje się w Europie, której większość leży w strefie umiarkowanej północnej."
  },
  {
    "id": "R01_KOS_01",
    "section": "Poznawanie kosmosu",
    "type": "single_choice",
    "prompt": "Ile gwiazd znajduje się w Drodze Mlecznej?",
    "options": [
      "około 400 miliardów",
      "około 88",
      "około 24",
      "około 13,8 miliarda",
      "około 100 tysięcy",
      "około 300 tysięcy"
    ],
    "answer": 0,
    "explanation": "W Drodze Mlecznej znajduje się około 400 miliardów gwiazd.",
    "image": "r01_droga_mleczna_nocne_niebo.jpg"
  },
  {
    "id": "R01_KOS_02",
    "section": "Poznawanie kosmosu",
    "type": "true_false",
    "prompt": "Droga Mleczna jest jedyną galaktyką we Wszechświecie.",
    "options": null,
    "answer": false,
    "explanation": "Droga Mleczna jest tylko jedną z miliardów galaktyk."
  },
  {
    "id": "R01_KOS_03",
    "section": "Poznawanie kosmosu",
    "type": "riddle",
    "prompt": "Najjaśniejsza gwiazda Małej Niedźwiedzicy, która zawsze wskazuje północ, to...",
    "options": null,
    "answer": "Gwiazda Polarna",
    "altAnswers": [
      "Gwiazda Polarna",
      "Polarna"
    ],
    "explanation": "Gwiazda Polarna jest najjaśniejszą gwiazdą Małej Niedźwiedzicy i zawsze wskazuje północ."
  },
  {
    "id": "R01_KOS_04",
    "section": "Poznawanie kosmosu",
    "type": "single_choice",
    "prompt": "Ile gwiazdozbiorów wyróżnia się?",
    "options": [
      "88",
      "24",
      "12",
      "8",
      "400",
      "100"
    ],
    "answer": 0,
    "explanation": "Określone obszary nieba z grupami gwiazd nazywa się gwiazdozbiorami lub konstelacjami, a wyróżnia się ich 88."
  },
  {
    "id": "R01_KOS_05",
    "section": "Poznawanie kosmosu",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady, od których nadawano nazwy gwiazdozbiorom.",
    "options": [
      "zwierzęta",
      "mityczne stworzenia",
      "przedmioty",
      "nazwy stref czasowych",
      "temperatury planet",
      "godziny wschodu Słońca"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Nazwy gwiazdozbiorów nadawano m.in. od zwierząt, mitycznych stworzeń lub przedmiotów kojarzonych z układami gwiazd."
  },
  {
    "id": "R01_KOS_06",
    "section": "Poznawanie kosmosu",
    "type": "fill_in",
    "prompt": "Światło przemieszcza się z prędkością prawie __________ km/s, a przez Drogę Mleczną biegnie z jednego krańca na drugi przez __________ lat.",
    "options": null,
    "answer": [
      "300 tys.",
      "100 tys."
    ],
    "altAnswers": [
      [
        "300 tys.",
        "300 tysięcy",
        "300000"
      ],
      [
        "100 tys.",
        "100 tysięcy",
        "100000"
      ]
    ],
    "explanation": "Prędkość światła wynosi prawie 300 tys. km/s, a przebycie Drogi Mlecznej od krańca do krańca zajęłoby światłu około 100 tys. lat.",
    "image": "r01_droga_mleczna_nocne_niebo.jpg"
  },
  {
    "id": "R01_KOS_07",
    "section": "Poznawanie kosmosu",
    "type": "scenario",
    "prompt": "Naukowcy badają obiekt o tak silnej grawitacji, że wciąga wszystko w pobliżu, nawet światło. Nie można go zobaczyć bezpośrednio. Co to za obiekt?",
    "options": [
      "czarna dziura",
      "kometa",
      "meteor",
      "planetoida",
      "gwiazdozbiór",
      "gnomon"
    ],
    "answer": 0,
    "explanation": "Czarne dziury mają tak silną grawitację, że wciągają nawet światło, dlatego nie można ich zobaczyć bezpośrednio.",
    "image": "r01_czarna_dziura_artystycznie.jpg"
  },
  {
    "id": "R01_KOS_08",
    "section": "Poznawanie kosmosu",
    "type": "match",
    "prompt": "Połącz nazwę z informacją.",
    "options": null,
    "left": [
      "Jurij Gagarin",
      "Neil Armstrong",
      "Wostok 1",
      "Apollo 11"
    ],
    "right": [
      "pierwszy człowiek w kosmosie",
      "pierwszy człowiek, który stanął na Księżycu",
      "statek, którym odbyto lot na orbitę okołoziemską w 1961 roku",
      "misja, podczas której człowiek stanął na Księżycu w 1969 roku"
    ],
    "answer": {
      "Jurij Gagarin": "pierwszy człowiek w kosmosie",
      "Neil Armstrong": "pierwszy człowiek, który stanął na Księżycu",
      "Wostok 1": "statek, którym odbyto lot na orbitę okołoziemską w 1961 roku",
      "Apollo 11": "misja, podczas której człowiek stanął na Księżycu w 1969 roku"
    },
    "explanation": "Jurij Gagarin odbył lot statkiem Wostok 1, a podczas misji Apollo 11 Neil Armstrong stanął na Księżycu.",
    "image": "r01_teleskop_kosmiczny.jpg"
  },
  {
    "id": "R01_KOS_09",
    "section": "Poznawanie kosmosu",
    "type": "sequence",
    "prompt": "Ułóż podane wielkości od najmniejszej liczby do największej.",
    "options": null,
    "items": [
      "400 miliardów gwiazd w Drodze Mlecznej",
      "88 gwiazdozbiorów",
      "300 tysięcy kilometrów na sekundę",
      "100 tysięcy lat przez Drogę Mleczną"
    ],
    "answer": [
      "88 gwiazdozbiorów",
      "100 tysięcy lat przez Drogę Mleczną",
      "300 tysięcy kilometrów na sekundę",
      "400 miliardów gwiazd w Drodze Mlecznej"
    ],
    "explanation": "Liczbowo 88 jest mniejsze niż 100 tysięcy, 300 tysięcy i 400 miliardów."
  },
  {
    "id": "R01_KOS_10",
    "section": "Poznawanie kosmosu",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do sposobu poznawania nieba.",
    "options": null,
    "items": [
      "fragment Drogi Mlecznej nocą",
      "Gwiazda Polarna",
      "teleskop Hubble'a",
      "teleskop Jamesa Webba"
    ],
    "categories": [
      "można dostrzec bez przyrządu przy dobrych warunkach",
      "narzędzia badania kosmosu"
    ],
    "answer": {
      "można dostrzec bez przyrządu przy dobrych warunkach": [
        "fragment Drogi Mlecznej nocą",
        "Gwiazda Polarna"
      ],
      "narzędzia badania kosmosu": [
        "teleskop Hubble'a",
        "teleskop Jamesa Webba"
      ]
    },
    "explanation": "Fragment Drogi Mlecznej i Gwiazdę Polarną można obserwować na niebie, natomiast teleskopy Hubble'a i Jamesa Webba służą do badania kosmosu.",
    "image": "r01_teleskop_kosmiczny.jpg"
  },
  {
    "id": "R01_KOS_11",
    "section": "Poznawanie kosmosu",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do pozostałych: Hubble, James Webb, teleskop, Wielki Wóz.",
    "options": null,
    "answer": "Wielki Wóz",
    "explanation": "Hubble i James Webb to teleskopy, a Wielki Wóz jest częścią gwiazdozbioru Wielkiej Niedźwiedzicy."
  },
  {
    "id": "R01_KOS_12",
    "section": "Poznawanie kosmosu",
    "type": "true_false",
    "prompt": "Na opublikowanym w 2019 roku pierwszym zdjęciu czarnej dziury widoczna jest sama czarna dziura.",
    "options": null,
    "answer": false,
    "explanation": "Samej czarnej dziury nie można zobaczyć; na zdjęciu widać to, co jest przez nią wsysane.",
    "image": "r01_czarna_dziura_artystycznie.jpg"
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która odpowiedź najdokładniej podaje czas pełnego obiegu Ziemi wokół Słońca?",
    "options": [
      "365 dni, 5 godzin i 49 minut",
      "365 dni dokładnie",
      "24 godziny i 49 minut",
      "27 dni i 5 godzin",
      "88 dni",
      "165 lat"
    ],
    "answer": 0,
    "explanation": "Pełne okrążenie Słońca przez Ziemię trwa rok, a dokładniej 365 dni, 5 godzin i 49 minut."
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz cechy gazowych olbrzymów.",
    "options": [
      "składają się głównie z gazów",
      "nie mają stałej powierzchni",
      "mają pierścienie",
      "krąży wokół nich od kilkunastu do ponad stu księżyców",
      "są zbudowane ze skał",
      "nie mają księżyców"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Gazowe olbrzymy składają się głównie z gazów, nie mają stałej powierzchni, mają pierścienie i liczne księżyce."
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Saturn ma 146 księżyców, a Jowisz 95 księżyców.",
    "options": null,
    "answer": true,
    "explanation": "Saturn ma 146 księżyców, a Jowisz 95."
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Merkuremu wystarczy __________ dni na okrążenie Słońca, a Neptunowi aż __________ lat.",
    "options": null,
    "answer": [
      "88",
      "165"
    ],
    "altAnswers": [
      [
        "88",
        "88 dni"
      ],
      [
        "165",
        "165 lat"
      ]
    ],
    "explanation": "Porównuje się czas obiegu planet: Merkuremu wystarczy 88 dni, Ziemi około 365 dni, a Neptunowi 165 lat."
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz planetę z charakterystyczną liczbą lub cechą.",
    "options": null,
    "left": [
      "Wenus",
      "Uran",
      "Neptun",
      "Merkury"
    ],
    "right": [
      "średnia temperatura powierzchni około 480°C",
      "temperatura atmosfery spada do -224°C",
      "wiatry osiągające nawet 2100 km/h",
      "nocą średnio -163°C"
    ],
    "answer": {
      "Wenus": "średnia temperatura powierzchni około 480°C",
      "Uran": "temperatura atmosfery spada do -224°C",
      "Neptun": "wiatry osiągające nawet 2100 km/h",
      "Merkury": "nocą średnio -163°C"
    },
    "explanation": "Opisy planet zawierają charakterystyczne wartości: Wenus jest bardzo gorąca, Uran najzimniejszy, Neptun ma najsilniejsze wiatry, a Merkury ma bardzo niską nocną temperaturę."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj zjawiska do przesilenia około 22 czerwca.",
    "options": null,
    "items": [
      "dzień polarny między kołem podbiegunowym północnym a biegunem północnym",
      "noc polarna między kołem podbiegunowym południowym a biegunem południowym",
      "najdłuższy dzień na półkuli północnej",
      "najkrótszy dzień na półkuli południowej"
    ],
    "categories": [
      "półkula północna około 22 czerwca",
      "półkula południowa około 22 czerwca"
    ],
    "answer": {
      "półkula północna około 22 czerwca": [
        "dzień polarny między kołem podbiegunowym północnym a biegunem północnym",
        "najdłuższy dzień na półkuli północnej"
      ],
      "półkula południowa około 22 czerwca": [
        "noc polarna między kołem podbiegunowym południowym a biegunem południowym",
        "najkrótszy dzień na półkuli południowej"
      ]
    },
    "explanation": "Około 22 czerwca półkula północna jest mocniej oświetlona, ma najdłuższy dzień i dzień polarny w okolicy bieguna północnego, a na półkuli południowej występują zjawiska odwrotne.",
    "image": "r01_oswietlenie_przesilenie.jpg"
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż okresy obiegu od najkrótszego do najdłuższego.",
    "options": null,
    "items": [
      "Neptun wokół Słońca - 165 lat",
      "Księżyc wokół Ziemi - około 27 dni",
      "Ziemia wokół Słońca - około 365 dni",
      "Merkury wokół Słońca - 88 dni"
    ],
    "answer": [
      "Księżyc wokół Ziemi - około 27 dni",
      "Merkury wokół Słońca - 88 dni",
      "Ziemia wokół Słońca - około 365 dni",
      "Neptun wokół Słońca - 165 lat"
    ],
    "explanation": "Najkrócej trwa obieg Księżyca wokół Ziemi, potem Merkurego wokół Słońca, następnie Ziemi, a najdłużej z podanych - obieg Neptuna.",
    "image": "r01_ciala_niebieskie_mniejsze.jpg"
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do strefy międzyzwrotnikowej: Słońce w zenicie, największy kąt padania promieni, najwięcej energii słonecznej, dni polarne.",
    "options": null,
    "answer": "dni polarne",
    "explanation": "Dni polarne występują w strefach podbiegunowych, a nie w strefie międzyzwrotnikowej."
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Podróżnik leci z Polski do kraju położonego daleko na wschód. Jaką ogólną zmianę czasu powinien przewidzieć?",
    "options": [
      "będzie tam późniejsza godzina",
      "będzie tam wcześniejsza godzina",
      "czas zawsze pozostanie taki sam",
      "zniknie podział na doby",
      "nastąpi równonoc",
      "nastąpi dzień polarny"
    ],
    "answer": 0,
    "explanation": "Im dalej na wschód, tym późniejsza godzina.",
    "image": "r01_strefy_czasowe_mapa.jpg"
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Prosty przyrząd astronomiczny z patyka, używany w doświadczeniu do obserwacji cienia, to...",
    "options": null,
    "answer": "gnomon",
    "altAnswers": [
      "gnomon"
    ],
    "explanation": "W doświadczeniu prosty patyk wbity pionowo w ziemię staje się gnomonem, czyli przyrządem do obserwacji cienia.",
    "image": "r01_gnomon_cien.jpg"
  },
  {
    "id": "R01_HARD_11",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz zjawisko z datą.",
    "options": null,
    "left": [
      "równonoc wiosenna",
      "przesilenie letnie",
      "równonoc jesienna",
      "przesilenie zimowe"
    ],
    "right": [
      "około 21 marca",
      "około 22 czerwca",
      "około 23 września",
      "około 22 grudnia"
    ],
    "answer": {
      "równonoc wiosenna": "około 21 marca",
      "przesilenie letnie": "około 22 czerwca",
      "równonoc jesienna": "około 23 września",
      "przesilenie zimowe": "około 22 grudnia"
    },
    "explanation": "Daty początków astronomicznych pór roku to około 21 marca, 22 czerwca, 23 września i 22 grudnia."
  },
  {
    "id": "R01_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe informacje o gwiazdozbiorach i gwiazdach.",
    "options": [
      "Wyróżnia się 88 gwiazdozbiorów",
      "Gwiazda Polarna należy do Małej Niedźwiedzicy",
      "Gwiazda Polarna wskazuje północ",
      "Wielki Wóz jest częścią Wielkiej Niedźwiedzicy",
      "Wszystkie gwiazdozbiory widać z obu półkul",
      "Gwiazdozbiory są strefami czasowymi"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Na niebie wyróżnia się 88 gwiazdozbiorów, Gwiazda Polarna należy do Małej Niedźwiedzicy, a Wielki Wóz jest częścią Wielkiej Niedźwiedzicy."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r01",
  number: 1,
  title: "Ziemia we Wszechświecie",
  icon: "🌍",
  sectionOrder: [
    "Układ Słoneczny",
    "Ruch obrotowy Ziemi",
    "Ruch obiegowy Ziemi",
    "Strefowość oświetlenia Ziemi",
    "Poznawanie kosmosu"
  ],
  sectionIcons: {
    "Układ Słoneczny": "☀️",
    "Ruch obrotowy Ziemi": "🌗",
    "Ruch obiegowy Ziemi": "🌞",
    "Strefowość oświetlenia Ziemi": "🌡️",
    "Poznawanie kosmosu": "🔭"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
