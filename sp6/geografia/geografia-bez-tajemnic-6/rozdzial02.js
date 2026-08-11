// Skróty sekcji (do identyfikatorów ćwiczeń):
// ZWS = Ziemia we Wszechświecie
// ROB = Ruch obrotowy Ziemi
// CZA = Czas na Ziemi
// ROG = Ruch obiegowy Ziemi
// STO = Strefy oświetlenia Ziemi
// HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_ZWS_01",
    "section": "Ziemia we Wszechświecie",
    "type": "single_choice",
    "prompt": "Która teoria wyjaśnia powstanie Wszechświata?",
    "options": [
      "teoria Wielkiego Wybuchu",
      "teoria pływów oceanicznych",
      "teoria dryfu kontynentów",
      "teoria zegara słonecznego",
      "teoria dnia polarnego",
      "teoria stref czasowych"
    ],
    "answer": 0,
    "explanation": "Opisuje się teorię Wielkiego Wybuchu: początkowo materia i energia były skupione w jednym punkcie, a około 13,8 miliarda lat temu nastąpił gwałtowny wybuch."
  },
  {
    "id": "R02_ZWS_02",
    "section": "Ziemia we Wszechświecie",
    "type": "fill_in",
    "prompt": "Nasza planeta znajduje się w Galaktyce nazwanej __________.",
    "options": null,
    "answer": [
      "Droga Mleczna"
    ],
    "altAnswers": [
      [
        "Droga Mleczna",
        "Drodze Mlecznej"
      ]
    ],
    "explanation": "Układ Słoneczny i Ziemia znajdują się w Galaktyce nazywanej Drogą Mleczną.",
    "image": "r02_uklad_sloneczny.jpg"
  },
  {
    "id": "R02_ZWS_03",
    "section": "Ziemia we Wszechświecie",
    "type": "sequence",
    "prompt": "Ułóż elementy od największej skali do najmniejszej.",
    "options": null,
    "items": [
      "Układ Słoneczny",
      "Droga Mleczna",
      "Ziemia",
      "Grupa Lokalna",
      "Słońce"
    ],
    "answer": [
      "Grupa Lokalna",
      "Droga Mleczna",
      "Układ Słoneczny",
      "Słońce",
      "Ziemia"
    ],
    "explanation": "W podsumowaniu pokazano drogę od grup galaktyk przez Galaktykę i układ planetarny do Słońca oraz planet.",
    "image": "r02_uklad_sloneczny.jpg"
  },
  {
    "id": "R02_ZWS_04",
    "section": "Ziemia we Wszechświecie",
    "type": "multi_select",
    "prompt": "Zaznacz planety wewnętrzne Układu Słonecznego.",
    "options": [
      "Merkury",
      "Wenus",
      "Ziemia",
      "Mars",
      "Jowisz",
      "Neptun"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Planety wewnętrzne to cztery skaliste planety położone blisko Słońca: Merkury, Wenus, Ziemia i Mars."
  },
  {
    "id": "R02_ZWS_05",
    "section": "Ziemia we Wszechświecie",
    "type": "match",
    "prompt": "Połącz obiekt Układu Słonecznego z opisem.",
    "options": null,
    "left": [
      "Merkury",
      "Jowisz",
      "Saturn",
      "Neptun"
    ],
    "right": [
      "najmniejsza planeta i najbliższa Słońca",
      "największa planeta zbudowana głównie z wodoru i helu",
      "ma widoczne pierścienie ze skał i lodu",
      "planeta położona najdalej od Słońca"
    ],
    "answer": {
      "Merkury": "najmniejsza planeta i najbliższa Słońca",
      "Jowisz": "największa planeta zbudowana głównie z wodoru i helu",
      "Saturn": "ma widoczne pierścienie ze skał i lodu",
      "Neptun": "planeta położona najdalej od Słońca"
    },
    "explanation": "Wyróżnia się charakterystyczne cechy planet: Merkury jest najbliżej Słońca, Jowisz jest największy, Saturn ma pierścienie, a Neptun leży najdalej."
  },
  {
    "id": "R02_ZWS_06",
    "section": "Ziemia we Wszechświecie",
    "type": "true_false",
    "prompt": "Wszystkie planety Układu Słonecznego krążą wokół Słońca po orbitach w kształcie elipsy.",
    "options": null,
    "answer": true,
    "explanation": "Planety krążą wokół Słońca po orbitach w kształcie elipsy."
  },
  {
    "id": "R02_ZWS_07",
    "section": "Ziemia we Wszechświecie",
    "type": "sort",
    "prompt": "Przyporządkuj planety do grupy.",
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
    "explanation": "Dzieli się osiem planet na cztery skaliste i cztery gazowe olbrzymy."
  },
  {
    "id": "R02_ZWS_08",
    "section": "Ziemia we Wszechświecie",
    "type": "single_choice",
    "prompt": "Ile trwa pełny cykl faz Księżyca?",
    "options": [
      "około 29,5 doby",
      "około 24 godziny",
      "około 365 dni",
      "około 12 godzin",
      "około 4 minuty",
      "około pół roku"
    ],
    "answer": 0,
    "explanation": "Pełny cykl faz Księżyca trwa około 29,5 doby.",
    "image": "r02_fazy_ksiezyca.jpg"
  },
  {
    "id": "R02_ZWS_09",
    "section": "Ziemia we Wszechświecie",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Merkury, Wenus, Ziemia, Saturn.",
    "options": null,
    "answer": "Saturn",
    "explanation": "Merkury, Wenus i Ziemia są planetami wewnętrznymi o skalistej powierzchni, a Saturn należy do planet zewnętrznych."
  },
  {
    "id": "R02_ZWS_10",
    "section": "Ziemia we Wszechświecie",
    "type": "riddle",
    "prompt": "Jak nazywa się naturalny satelita naszej planety?",
    "options": null,
    "answer": "Księżyc",
    "altAnswers": [
      "Księżyc",
      "Ksiezyc"
    ],
    "explanation": "Księżyc jest naturalnym satelitą Ziemi."
  },
  {
    "id": "R02_ZWS_11",
    "section": "Ziemia we Wszechświecie",
    "type": "scenario",
    "prompt": "Uczeń opisuje obiekt o ogromnej gęstości i masie, którego grawitacja jest tak silna, że nawet światło nie może go opuścić. O jakim obiekcie mówi?",
    "options": [
      "czarnej dziurze",
      "gwieździe polarnej",
      "planecie skalistej",
      "równiku",
      "zwrotniku Raka",
      "gnomonie"
    ],
    "answer": 0,
    "explanation": "Czarne dziury mają tak silną grawitację, że nie może ich opuścić nawet światło.",
    "image": "r02_czarna_dziura.jpg"
  },
  {
    "id": "R02_ROB_01",
    "section": "Ruch obrotowy Ziemi",
    "type": "single_choice",
    "prompt": "Na czym polega ruch obrotowy Ziemi?",
    "options": [
      "na obrocie Ziemi wokół własnej osi",
      "na krążeniu Ziemi wokół Księżyca",
      "na krążeniu Słońca wokół Ziemi",
      "na przesuwaniu stref klimatycznych",
      "na zmianie linii daty",
      "na obiegu Ziemi wokół Słońca"
    ],
    "answer": 0,
    "explanation": "Ruch obrotowy, nazywany też wirowym, polega na obrocie Ziemi wokół własnej osi.",
    "image": "r02_ruch_obrotowy_globus.jpg"
  },
  {
    "id": "R02_ROB_02",
    "section": "Ruch obrotowy Ziemi",
    "type": "fill_in",
    "prompt": "Pełny obrót Ziemi wokół własnej osi trwa około __________ godziny.",
    "options": null,
    "answer": [
      "24"
    ],
    "altAnswers": [
      [
        "24",
        "24 godziny",
        "jedną dobę",
        "1 dobę"
      ]
    ],
    "explanation": "Pełny obrót Ziemi trwa w przybliżeniu 24 godziny, czyli jedną dobę.",
    "image": "r02_ruch_obrotowy_globus.jpg"
  },
  {
    "id": "R02_ROB_03",
    "section": "Ruch obrotowy Ziemi",
    "type": "true_false",
    "prompt": "Ziemia obraca się z zachodu na wschód, czyli przeciwnie do ruchu wskazówek zegara.",
    "options": null,
    "answer": true,
    "explanation": "Kierunek obrotu Ziemi to z zachodu na wschód, przeciwnie do ruchu wskazówek zegara."
  },
  {
    "id": "R02_ROB_04",
    "section": "Ruch obrotowy Ziemi",
    "type": "multi_select",
    "prompt": "Zaznacz następstwa ruchu obrotowego Ziemi.",
    "options": [
      "następstwo dnia i nocy",
      "pozorna wędrówka Słońca nad horyzontem",
      "różnica czasu między punktami o różnych długościach geograficznych",
      "powstanie czarnych dziur",
      "występowanie astronomicznych pór roku"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Podsumowanie wymienia jako następstwa ruchu obrotowego: dzień i noc, pozorny ruch Słońca oraz różnice czasu między punktami na różnych długościach geograficznych."
  },
  {
    "id": "R02_ROB_05",
    "section": "Ruch obrotowy Ziemi",
    "type": "scenario",
    "prompt": "Miejsce na Ziemi obraca się ku stronie oświetlonej przez Słońce. Jaki moment obserwuje człowiek stojący w tym miejscu?",
    "options": [
      "wschód Słońca",
      "zachód Słońca",
      "nów Księżyca",
      "pełnię Księżyca",
      "przesilenie zimowe",
      "linię zmiany daty"
    ],
    "answer": 0,
    "explanation": "Kiedy miejsce przesuwa się z nieoświetlonej strony Ziemi na oświetloną, zaczyna się dzień i widzimy wschód Słońca.",
    "image": "r02_dzien_i_noc.jpg"
  },
  {
    "id": "R02_ROB_06",
    "section": "Ruch obrotowy Ziemi",
    "type": "match",
    "prompt": "Połącz miejsce na Ziemi z prędkością liniową.",
    "options": null,
    "left": [
      "bieguny",
      "szerokości geograficzne Polski",
      "równik"
    ],
    "right": [
      "0 km/h",
      "około 1000 km/h",
      "około 1667 km/h"
    ],
    "answer": {
      "bieguny": "0 km/h",
      "szerokości geograficzne Polski": "około 1000 km/h",
      "równik": "około 1667 km/h"
    },
    "explanation": "Prędkość liniowa jest największa na równiku, maleje wraz z oddalaniem się od równika i na biegunach wynosi 0 km/h."
  },
  {
    "id": "R02_ROB_07",
    "section": "Ruch obrotowy Ziemi",
    "type": "single_choice",
    "prompt": "Jak nazywa się najwyższe położenie Słońca nad horyzontem w ciągu doby?",
    "options": [
      "górowanie Słońca",
      "nów",
      "dzień polarny",
      "ruch obiegowy",
      "strefa podbiegunowa",
      "równonoc"
    ],
    "answer": 0,
    "explanation": "Moment najwyższego położenia Słońca nad horyzontem nazywamy górowaniem Słońca albo południem słonecznym.",
    "image": "r02_pozorna_wedrowka_slonca.jpg"
  },
  {
    "id": "R02_ROB_08",
    "section": "Ruch obrotowy Ziemi",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: wschód Słońca, górowanie Słońca, zachód Słońca, pełnia Księżyca.",
    "options": null,
    "answer": "pełnia Księżyca",
    "explanation": "Wschód, górowanie i zachód Słońca są etapami pozornej wędrówki Słońca nad horyzontem, a pełnia Księżyca jest fazą Księżyca."
  },
  {
    "id": "R02_ROB_09",
    "section": "Ruch obrotowy Ziemi",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe zależności między wysokością Słońca a cieniem.",
    "options": [
      "Gdy Słońce jest nisko, cień jest długi",
      "Gdy Słońce jest wysoko, cień jest krótki",
      "Największa wysokość Słońca jest podczas górowania",
      "Najmniejsza wysokość Słońca jest podczas pełni Księżyca",
      "Cień nie zależy od wysokości Słońca"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Niskie Słońce daje długi cień, wysokie Słońce daje krótki cień, a największą wysokość Słońce osiąga podczas górowania.",
    "image": "r02_wysokosc_slonca_cienie.jpg"
  },
  {
    "id": "R02_ROB_10",
    "section": "Ruch obrotowy Ziemi",
    "type": "riddle",
    "prompt": "Jak nazywa się gwiazda widoczna w środku okręgów tworzonych na fotografii nocnego nieba z długim czasem naświetlania?",
    "options": null,
    "answer": "Gwiazda Polarna",
    "altAnswers": [
      "Gwiazda Polarna",
      "Polarna"
    ],
    "explanation": "Pozorne drogi świecących obiektów układają się w okręgi, a w ich środku widoczna jest Gwiazda Polarna wskazująca północ."
  },
  {
    "id": "R02_ROB_11",
    "section": "Ruch obrotowy Ziemi",
    "type": "true_false",
    "prompt": "Datę w praktyce zmieniamy o północy, a nie w momencie górowania Słońca.",
    "options": null,
    "answer": true,
    "explanation": "Choć teoretycznie zmiana daty mogłaby następować w południe słoneczne, ze względów praktycznych przyjęto zmianę daty o północy."
  },
  {
    "id": "R02_CZA_01",
    "section": "Czas na Ziemi",
    "type": "single_choice",
    "prompt": "O jaki kąt obraca się Ziemia w ciągu jednej godziny?",
    "options": [
      "15 stopni",
      "1 stopień",
      "30 stopni",
      "180 stopni",
      "360 stopni",
      "90 stopni"
    ],
    "answer": 0,
    "explanation": "Ziemia wykonuje obrót 360 stopni w 24 godziny, więc w ciągu jednej godziny obraca się o 15 stopni."
  },
  {
    "id": "R02_CZA_02",
    "section": "Czas na Ziemi",
    "type": "match",
    "prompt": "Połącz kąt obrotu Ziemi z czasem podanym w podsumowaniu.",
    "options": null,
    "left": [
      "1 stopień",
      "15 stopni",
      "180 stopni",
      "360 stopni"
    ],
    "right": [
      "4 minuty",
      "1 godzina",
      "12 godzin",
      "24 godziny"
    ],
    "answer": {
      "1 stopień": "4 minuty",
      "15 stopni": "1 godzina",
      "180 stopni": "12 godzin",
      "360 stopni": "24 godziny"
    },
    "explanation": "Podsumowanie pokazuje zależności między kątem obrotu Ziemi a czasem: 1 stopień w 4 minuty, 15 stopni w godzinę, 180 stopni w 12 godzin i 360 stopni w 24 godziny."
  },
  {
    "id": "R02_CZA_03",
    "section": "Czas na Ziemi",
    "type": "fill_in",
    "prompt": "Czas mierzony na podstawie położenia Słońca na niebie to czas __________.",
    "options": null,
    "answer": [
      "słoneczny"
    ],
    "altAnswers": [
      [
        "słoneczny",
        "sloneczny"
      ]
    ],
    "explanation": "Czas słoneczny wyznacza się na podstawie położenia Słońca podczas jego pozornego ruchu nad horyzontem."
  },
  {
    "id": "R02_CZA_04",
    "section": "Czas na Ziemi",
    "type": "true_false",
    "prompt": "Punkty położone na tym samym południku mają w danym momencie tę samą godzinę czasu słonecznego.",
    "options": null,
    "answer": true,
    "explanation": "Ten sam południk oznacza tę samą długość geograficzną, a więc ten sam czas słoneczny."
  },
  {
    "id": "R02_CZA_05",
    "section": "Czas na Ziemi",
    "type": "single_choice",
    "prompt": "Dlaczego w XIX wieku wprowadzono czas strefowy?",
    "options": [
      "aby wygodniej określać czas na świecie",
      "aby zmienić długość doby",
      "aby zatrzymać pozorny ruch Słońca",
      "aby ustalić fazy Księżyca",
      "aby zwiększyć prędkość obrotu Ziemi",
      "aby przesunąć równik"
    ],
    "answer": 0,
    "explanation": "Czas strefowy wprowadzono, bo korzystanie z osobnego czasu słonecznego na każdym południku utrudniałoby codzienne życie, na przykład rozkłady jazdy i spotkania online.",
    "image": "r02_strefy_czasowe.jpg"
  },
  {
    "id": "R02_CZA_06",
    "section": "Czas na Ziemi",
    "type": "riddle",
    "prompt": "Ile stref czasowych wyznaczono na świecie?",
    "options": null,
    "answer": "24",
    "altAnswers": [
      "24",
      "dwadzieścia cztery",
      "dwanascie plus dwanascie"
    ],
    "explanation": "Świat podzielono wzdłuż południków na 24 strefy czasowe."
  },
  {
    "id": "R02_CZA_07",
    "section": "Czas na Ziemi",
    "type": "multi_select",
    "prompt": "Zaznacz zdania prawdziwe o czasie urzędowym w Polsce.",
    "options": [
      "Granice stref czasowych dopasowano do granic państw i regionów",
      "W Polsce stosuje się czas letni i zimowy",
      "Czas letni w Polsce to czas wschodnioeuropejski",
      "Czas urzędowy zawsze musi przebiegać dokładnie według południków",
      "Zimą przesuwamy zegary o godzinę do przodu"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Czas urzędowy wynika z decyzji administracyjnych; w Polsce obowiązuje czas letni i zimowy, a czas letni opisano jako wschodnioeuropejski."
  },
  {
    "id": "R02_CZA_08",
    "section": "Czas na Ziemi",
    "type": "scenario",
    "prompt": "W ostatnią niedzielę marca w Polsce godzina 2.00 staje się godziną 3.00. Jaki czas zostaje wtedy wprowadzony?",
    "options": [
      "czas letni",
      "czas zimowy",
      "czas słoneczny",
      "czas atomowy",
      "czas lokalny Księżyca",
      "linia zmiany daty"
    ],
    "answer": 0,
    "explanation": "Podczas wprowadzania czasu letniego przesuwamy wskazówki zegara o jedną godzinę do przodu, z 2.00 na 3.00."
  },
  {
    "id": "R02_CZA_09",
    "section": "Czas na Ziemi",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: czas słoneczny, czas strefowy, czas urzędowy, czas obiegowy.",
    "options": null,
    "answer": "czas obiegowy",
    "explanation": "Czas słoneczny, strefowy i urzędowy to pojęcia z lekcji o czasie na Ziemi, a czas obiegowy nie jest takim rodzajem czasu."
  },
  {
    "id": "R02_CZA_10",
    "section": "Czas na Ziemi",
    "type": "single_choice",
    "prompt": "Który południk przyjęto jako umowną linię zmiany daty?",
    "options": [
      "180 stopni",
      "0 stopni",
      "15 stopni E",
      "22 stopnie 30 minut E",
      "7 stopni 30 minut W",
      "90 stopni"
    ],
    "answer": 0,
    "explanation": "Za umowną linię zmiany daty przyjęto południk 180 stopni, choć jej przebieg dopasowano do granic administracyjnych.",
    "image": "r02_linia_zmiany_daty.jpg"
  },
  {
    "id": "R02_CZA_11",
    "section": "Czas na Ziemi",
    "type": "sequence",
    "prompt": "Ułóż kroki rozumowania od pełnego obrotu Ziemi do wniosku o czasie w jednej godzinie.",
    "options": null,
    "items": [
      "Wniosek: w godzinę Ziemia obraca się o 15 stopni",
      "Pełny obrót ma 360 stopni",
      "Pełny obrót trwa 24 godziny",
      "Dzielimy 360 stopni przez 24"
    ],
    "answer": [
      "Pełny obrót ma 360 stopni",
      "Pełny obrót trwa 24 godziny",
      "Dzielimy 360 stopni przez 24",
      "Wniosek: w godzinę Ziemia obraca się o 15 stopni"
    ],
    "explanation": "Pokazuje się zależność 360 stopni w 24 godziny, a po podzieleniu otrzymujemy 15 stopni w godzinę."
  },
  {
    "id": "R02_ROG_01",
    "section": "Ruch obiegowy Ziemi",
    "type": "single_choice",
    "prompt": "Czym jest ruch obiegowy Ziemi?",
    "options": [
      "krążeniem Ziemi wokół Słońca",
      "obrotem Ziemi wokół własnej osi",
      "krążeniem Księżyca wokół Słońca",
      "pozorną wędrówką Słońca nad horyzontem",
      "zmianą czasu z letniego na zimowy",
      "ruchem gwiazd wokół Gwiazdy Polarnej"
    ],
    "answer": 0,
    "explanation": "Ruch obiegowy to ruch Ziemi po orbicie wokół Słońca.",
    "image": "r02_ruch_obiegowy_orbita.jpg"
  },
  {
    "id": "R02_ROG_02",
    "section": "Ruch obiegowy Ziemi",
    "type": "fill_in",
    "prompt": "Jeden pełny obieg Ziemi wokół Słońca trwa jeden __________.",
    "options": null,
    "answer": [
      "rok"
    ],
    "altAnswers": [
      [
        "rok",
        "1 rok",
        "jeden rok"
      ]
    ],
    "explanation": "Pełny obieg Ziemi wokół Słońca trwa rok, czyli około 365 dób.",
    "image": "r02_ruch_obiegowy_orbita.jpg"
  },
  {
    "id": "R02_ROG_03",
    "section": "Ruch obiegowy Ziemi",
    "type": "true_false",
    "prompt": "Ziemia obiega Słońce po orbicie w kształcie elipsy.",
    "options": null,
    "answer": true,
    "explanation": "Ruch Ziemi wokół Słońca odbywa się po orbicie w kształcie elipsy."
  },
  {
    "id": "R02_ROG_04",
    "section": "Ruch obiegowy Ziemi",
    "type": "multi_select",
    "prompt": "Zaznacz cechy ruchu obiegowego Ziemi podane w podsumowaniu.",
    "options": [
      "Ziemia obiega Słońce po orbicie w kształcie elipsy",
      "Ziemia porusza się przeciwnie do ruchu wskazówek zegara",
      "Oś ziemska jest nachylona do płaszczyzny orbity pod stałym kątem",
      "Pełny obieg trwa 24 godziny",
      "Ruch ten powoduje wyłącznie fazy Księżyca"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Podsumowanie wskazuje eliptyczną orbitę, kierunek przeciwny do ruchu wskazówek zegara oraz stałe nachylenie osi do płaszczyzny orbity."
  },
  {
    "id": "R02_ROG_05",
    "section": "Ruch obiegowy Ziemi",
    "type": "match",
    "prompt": "Połącz datę z początkiem astronomicznej pory roku na półkuli północnej.",
    "options": null,
    "left": [
      "21 marca",
      "22 czerwca",
      "23 września",
      "22 grudnia"
    ],
    "right": [
      "wiosna",
      "lato",
      "jesień",
      "zima"
    ],
    "answer": {
      "21 marca": "wiosna",
      "22 czerwca": "lato",
      "23 września": "jesień",
      "22 grudnia": "zima"
    },
    "explanation": "Na półkuli północnej podano daty początków pór roku: 21 marca, 22 czerwca, 23 września i 22 grudnia."
  },
  {
    "id": "R02_ROG_06",
    "section": "Ruch obiegowy Ziemi",
    "type": "scenario",
    "prompt": "Jest 22 czerwca. Półkula północna jest lepiej oświetlona niż południowa, a za kołem podbiegunowym północnym trwa dzień polarny. Jaki to moment roku?",
    "options": [
      "przesilenie letnie",
      "równonoc wiosenna",
      "równonoc jesienna",
      "przesilenie zimowe",
      "nów Księżyca",
      "czas zimowy"
    ],
    "answer": 0,
    "explanation": "22 czerwca zaczyna się astronomiczne lato na półkuli północnej, czyli przesilenie letnie.",
    "image": "r02_oswietlenie_por_roku.jpg"
  },
  {
    "id": "R02_ROG_07",
    "section": "Ruch obiegowy Ziemi",
    "type": "single_choice",
    "prompt": "Kiedy na całej kuli ziemskiej dzień i noc trwają po 12 godzin?",
    "options": [
      "w dniach równonocy",
      "tylko podczas przesilenia letniego",
      "tylko podczas przesilenia zimowego",
      "podczas każdej pełni Księżyca",
      "przy zmianie czasu na letni",
      "podczas górowania Słońca"
    ],
    "answer": 0,
    "explanation": "W dniach równonocy półkula północna i południowa są oświetlone tak samo, a dzień i noc trwają po 12 godzin."
  },
  {
    "id": "R02_ROG_08",
    "section": "Ruch obiegowy Ziemi",
    "type": "sort",
    "prompt": "Przyporządkuj następstwa do ruchu Ziemi.",
    "options": null,
    "items": [
      "następstwo dnia i nocy",
      "pozorna wędrówka Słońca nad horyzontem",
      "astronomiczne pory roku",
      "zmiany długości dnia i nocy w ciągu roku",
      "zmiany wysokości górowania Słońca w ciągu roku",
      "różnica czasu między południkami"
    ],
    "categories": [
      "ruch obrotowy",
      "ruch obiegowy"
    ],
    "answer": {
      "ruch obrotowy": [
        "następstwo dnia i nocy",
        "pozorna wędrówka Słońca nad horyzontem",
        "różnica czasu między południkami"
      ],
      "ruch obiegowy": [
        "astronomiczne pory roku",
        "zmiany długości dnia i nocy w ciągu roku",
        "zmiany wysokości górowania Słońca w ciągu roku"
      ]
    },
    "explanation": "Ruch obrotowy odpowiada za zjawiska dobowe i rachubę czasu, a ruch obiegowy za zmiany obserwowane w ciągu roku."
  },
  {
    "id": "R02_ROG_09",
    "section": "Ruch obiegowy Ziemi",
    "type": "riddle",
    "prompt": "Jak nazywa się rok, w którym luty ma 29 dni, a cały rok 366 dni?",
    "options": null,
    "answer": "rok przestępny",
    "altAnswers": [
      "rok przestępny",
      "przestępny",
      "rok przestepny",
      "przestepny"
    ],
    "explanation": "Co cztery lata z dodatkowych godzin obiegu Ziemi tworzy się dodatkowy dzień, dlatego rok przestępny ma 366 dni i 29 dni lutego."
  },
  {
    "id": "R02_ROG_10",
    "section": "Ruch obiegowy Ziemi",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: równonoc wiosenna, przesilenie letnie, równonoc jesienna, południe słoneczne.",
    "options": null,
    "answer": "południe słoneczne",
    "explanation": "Równonoce i przesilenie to momenty roku związane z ruchem obiegowym, a południe słoneczne jest momentem doby."
  },
  {
    "id": "R02_ROG_11",
    "section": "Ruch obiegowy Ziemi",
    "type": "true_false",
    "prompt": "W szerokościach geograficznych Polski Słońce góruje najwyżej w czerwcu, a najniżej w grudniu.",
    "options": null,
    "answer": true,
    "explanation": "W szerokościach geograficznych Polski Słońce najwyżej góruje w czerwcu, a najniżej w grudniu."
  },
  {
    "id": "R02_STO_01",
    "section": "Strefy oświetlenia Ziemi",
    "type": "single_choice",
    "prompt": "Dlaczego powierzchnia Ziemi nie jest ogrzewana przez Słońce równomiernie?",
    "options": [
      "ponieważ Ziemia ma kulisty kształt i promienie padają pod różnym kątem",
      "ponieważ wszystkie miejsca leżą w jednej strefie czasowej",
      "ponieważ Księżyc oświetla Ziemię w dzień",
      "ponieważ Słońce zawsze świeci dokładnie nad biegunami",
      "ponieważ Ziemia nie ma atmosfery",
      "ponieważ wszystkie równoleżniki mają tę samą długość"
    ],
    "answer": 0,
    "explanation": "Kulisty kształt Ziemi sprawia, że promienie słoneczne docierają do różnych obszarów pod różnym kątem, a więc różnie je ogrzewają."
  },
  {
    "id": "R02_STO_02",
    "section": "Strefy oświetlenia Ziemi",
    "type": "fill_in",
    "prompt": "Wyróżniamy pięć stref oświetlenia Ziemi: jedną międzyzwrotnikową, dwie __________ i dwie podbiegunowe.",
    "options": null,
    "answer": [
      "umiarkowane"
    ],
    "altAnswers": [
      [
        "umiarkowane",
        "umiarkowana"
      ]
    ],
    "explanation": "Wyróżnia się jedną strefę międzyzwrotnikową, dwie umiarkowane i dwie podbiegunowe.",
    "image": "r02_strefy_oswietlenia_ziemi.jpg"
  },
  {
    "id": "R02_STO_03",
    "section": "Strefy oświetlenia Ziemi",
    "type": "match",
    "prompt": "Połącz strefę oświetlenia Ziemi z jej położeniem.",
    "options": null,
    "left": [
      "strefa międzyzwrotnikowa",
      "strefy umiarkowane",
      "strefy podbiegunowe"
    ],
    "right": [
      "między zwrotnikiem Raka a zwrotnikiem Koziorożca",
      "między zwrotnikami a kołami podbiegunowymi",
      "między kołami podbiegunowymi a biegunami"
    ],
    "answer": {
      "strefa międzyzwrotnikowa": "między zwrotnikiem Raka a zwrotnikiem Koziorożca",
      "strefy umiarkowane": "między zwrotnikami a kołami podbiegunowymi",
      "strefy podbiegunowe": "między kołami podbiegunowymi a biegunami"
    },
    "explanation": "Granice stref oświetlenia wyznaczają zwrotniki oraz koła podbiegunowe."
  },
  {
    "id": "R02_STO_04",
    "section": "Strefy oświetlenia Ziemi",
    "type": "true_false",
    "prompt": "W strefach podbiegunowych występuje zjawisko dnia i nocy polarnej.",
    "options": null,
    "answer": true,
    "explanation": "W strefach położonych między kołami podbiegunowymi a biegunami występuje dzień i noc polarna."
  },
  {
    "id": "R02_STO_05",
    "section": "Strefy oświetlenia Ziemi",
    "type": "multi_select",
    "prompt": "Zaznacz cechy strefy międzyzwrotnikowej.",
    "options": [
      "dociera tu najwięcej energii słonecznej",
      "temperatura powietrza przez cały rok jest wysoka",
      "długość dnia i nocy jest podobna w ciągu roku",
      "występuje tu dzień polarny i noc polarna",
      "Słońce nigdy nie góruje w zenicie"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "W strefie międzyzwrotnikowej dociera najwięcej energii słonecznej, temperatura jest wysoka, a dzień i noc mają podobną długość."
  },
  {
    "id": "R02_STO_06",
    "section": "Strefy oświetlenia Ziemi",
    "type": "single_choice",
    "prompt": "Gdzie promienie słoneczne padają pod dużym kątem, a wiązka energii ogrzewa niewielką powierzchnię?",
    "options": [
      "w okolicach równika",
      "przy biegunach",
      "wyłącznie za kołami podbiegunowymi",
      "na linii zmiany daty",
      "na południku 180 stopni",
      "w centrum Drogi Mlecznej"
    ],
    "answer": 0,
    "explanation": "W okolicach równika Słońce góruje wysoko, promienie padają pod dużym kątem i bardziej ogrzewają powierzchnię."
  },
  {
    "id": "R02_STO_07",
    "section": "Strefy oświetlenia Ziemi",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: zwrotnik Raka, zwrotnik Koziorożca, koło podbiegunowe północne, południk zero.",
    "options": null,
    "answer": "południk zero",
    "explanation": "Zwrotniki i koła podbiegunowe wyznaczają granice stref oświetlenia Ziemi, a południk zero służy do ustalania czasu uniwersalnego."
  },
  {
    "id": "R02_STO_08",
    "section": "Strefy oświetlenia Ziemi",
    "type": "scenario",
    "prompt": "W pewnej strefie Słońce góruje nisko nad horyzontem, dociera mało energii słonecznej i panują niskie wartości temperatury. Która to strefa?",
    "options": [
      "podbiegunowa",
      "międzyzwrotnikowa",
      "umiarkowana przy zwrotniku",
      "krajobrazowa rolnicza",
      "czasowa UTC+1",
      "galaktyczna"
    ],
    "answer": 0,
    "explanation": "Tak opisano strefy podbiegunowe: Słońce góruje tam nisko, a do powierzchni dociera mało energii."
  },
  {
    "id": "R02_STO_09",
    "section": "Strefy oświetlenia Ziemi",
    "type": "riddle",
    "prompt": "Jak nazywa się moment, gdy Słońce znajduje się na wysokości 90 stopni nad horyzontem?",
    "options": null,
    "answer": "górowanie Słońca w zenicie",
    "altAnswers": [
      "górowanie Słońca w zenicie",
      "gorowanie Slonca w zenicie",
      "zenit",
      "górowanie w zenicie"
    ],
    "explanation": "Słowniczek definiuje górowanie Słońca w zenicie jako moment, w którym Słońce znajduje się na wysokości 90 stopni nad horyzontem.",
    "image": "r02_zenit_cien.jpg"
  },
  {
    "id": "R02_STO_10",
    "section": "Strefy oświetlenia Ziemi",
    "type": "single_choice",
    "prompt": "Co jest podstawą wydzielenia stref klimatycznych?",
    "options": [
      "rozkład średniej rocznej temperatury powietrza i rocznej sumy opadów",
      "liczba planet w Układzie Słonecznym",
      "długość nazw państw",
      "liczba południków w strefie czasowej",
      "fazy Księżyca",
      "położenie Gwiazdy Polarnej"
    ],
    "answer": 0,
    "explanation": "Rozkład średniej rocznej temperatury powietrza oraz rocznej sumy opadów stał się podstawą wydzielenia stref klimatycznych."
  },
  {
    "id": "R02_STO_11",
    "section": "Strefy oświetlenia Ziemi",
    "type": "true_false",
    "prompt": "Strefy klimatyczne i krajobrazowe mają przebieg równoleżnikowy, podobnie jak strefy oświetlenia Ziemi.",
    "options": null,
    "answer": true,
    "explanation": "Rozkład temperatury, stref klimatycznych i krajobrazowych ma przebieg równoleżnikowy wynikający ze zróżnicowania energii słonecznej."
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Około ile czasu temu według teorii Wielkiego Wybuchu nastąpił gwałtowny wybuch?",
    "options": [
      "13,8 miliarda lat temu",
      "6 miliardów lat temu",
      "4 miliony lat temu",
      "365 dni temu",
      "29,5 doby temu",
      "15 miliardów lat temu"
    ],
    "answer": 0,
    "explanation": "Wielki Wybuch nastąpił około 13,8 miliarda lat temu."
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Około ile czasu temu powstał Układ Słoneczny?",
    "options": [
      "około 6 miliardów lat temu",
      "około 13,8 miliarda lat temu",
      "około 365 dni temu",
      "około 29,5 doby temu",
      "około 4 milionów lat temu",
      "około 24 godziny temu"
    ],
    "answer": 0,
    "explanation": "Układ Słoneczny powstał z wirującego obłoku pyłów i gazów około 6 miliardów lat temu.",
    "image": "r02_uklad_sloneczny.jpg"
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się zbiór kilkudziesięciu galaktyk, do którego należy Droga Mleczna?",
    "options": null,
    "answer": "Grupa Lokalna",
    "altAnswers": [
      "Grupa Lokalna",
      "grupa lokalna"
    ],
    "explanation": "Uproszczony schemat budowy Wszechświata podaje, że Grupa Lokalna jest zbudowana z kilkudziesięciu galaktyk, a jedną z nich jest Droga Mleczna."
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Supermasywna czarna dziura w centrum Drogi Mlecznej ma masę ponad 4 milionów Słońc.",
    "options": null,
    "answer": true,
    "explanation": "W ciekawostce o czarnych dziurach zapisano, że jedna z supermasywnych czarnych dziur w centrum naszej Galaktyki ma masę ponad 4 milionów Słońc.",
    "image": "r02_czarna_dziura.jpg"
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Na biegunach prędkość liniowa podczas ruchu obrotowego Ziemi wynosi __________ km/h.",
    "options": null,
    "answer": [
      "0"
    ],
    "altAnswers": [
      [
        "0",
        "zero",
        "0 km/h"
      ]
    ],
    "explanation": "Diagram różnic prędkości liniowej wskazuje, że na biegunach prędkość liniowa jest równa 0 km/h."
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Fotograf wykonuje zdjęcie nocnego nieba z bardzo długim czasem naświetlania. Świecące obiekty tworzą okręgi o wspólnym środku. Co przedstawiają te okręgi?",
    "options": [
      "drogi obiektów w pozornym ruchu na niebie",
      "orbity planet wokół Słońca",
      "granice stref czasowych",
      "fazy Księżyca",
      "linie zmiany daty",
      "granice stref klimatycznych"
    ],
    "answer": 0,
    "explanation": "Podczas długiego naświetlania pozorny ruch obiektów na niebie zapisuje się jako ślady układające się w okręgi.",
    "image": "r02_pozorna_wedrowka_slonca.jpg"
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaka jest różnica czasu słonecznego w Polsce między skrajnymi punktami na wschodzie i zachodzie kraju, gdyby używano wyłącznie czasu słonecznego?",
    "options": [
      "prawie 40 minut",
      "dokładnie 4 minuty",
      "około 1 godzina",
      "około 12 godzin",
      "około 24 godziny",
      "około 29,5 doby"
    ],
    "answer": 0,
    "explanation": "Gdyby w Polsce używano czasu słonecznego, różnica między skrajnym wschodem i zachodem kraju wynosiłaby prawie 40 minut."
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Przekraczasz międzynarodową linię zmiany daty z zachodu na wschód. Co dzieje się z datą?",
    "options": [
      "zyskujesz jeden dzień",
      "tracisz jeden dzień",
      "czas nie zmienia się wcale",
      "przesuwasz zegar o 15 minut",
      "zaczyna się nów Księżyca",
      "zaczyna się rok przestępny"
    ],
    "answer": 0,
    "explanation": "Mapa i opis linii zmiany daty podają, że przy przekraczaniu jej z zachodu na wschód zyskujemy jeden dzień.",
    "image": "r02_linia_zmiany_daty.jpg"
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Dokładny czas pełnego obiegu Ziemi wokół Słońca to 365 dni 5 godz. 48 min __________ s.",
    "options": null,
    "answer": [
      "46"
    ],
    "altAnswers": [
      [
        "46",
        "46 s",
        "46 sekund"
      ]
    ],
    "explanation": "Podaje się dokładny czas pełnego obiegu Ziemi jako 365 dni 5 godz. 48 min 46 s."
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Pod jakim stałym kątem do płaszczyzny orbity jest nachylona oś Ziemi?",
    "options": [
      "66 stopni 34 minuty",
      "90 stopni",
      "23 stopnie 26 minut",
      "15 stopni",
      "7 stopni 30 minut",
      "180 stopni"
    ],
    "answer": 0,
    "explanation": "W opisie ruchu obiegowego podano, że oś Ziemi jest nachylona do płaszczyzny orbity pod stałym kątem 66 stopni 34 minuty."
  },
  {
    "id": "R02_HARD_11",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz moment roku z miejscem padania promieni słonecznych pod kątem prostym.",
    "options": null,
    "left": [
      "równonoc wiosenna",
      "przesilenie letnie",
      "równonoc jesienna",
      "przesilenie zimowe"
    ],
    "right": [
      "równik",
      "zwrotnik Raka",
      "zwrotnik Koziorożca",
      "równik ponownie"
    ],
    "answer": {
      "równonoc wiosenna": "równik",
      "przesilenie letnie": "zwrotnik Raka",
      "równonoc jesienna": "równik ponownie",
      "przesilenie zimowe": "zwrotnik Koziorożca"
    },
    "explanation": "W równonoce promienie padają prostopadle na równik, 22 czerwca na zwrotnik Raka, a 22 grudnia na zwrotnik Koziorożca.",
    "image": "r02_oswietlenie_por_roku.jpg"
  },
  {
    "id": "R02_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz cechy opisujące strefy umiarkowane.",
    "options": [
      "leżą między zwrotnikami a kołami podbiegunowymi",
      "poza zwrotnikami Słońce nigdy nie góruje w zenicie",
      "występują duże zmiany temperatury powietrza w ciągu roku",
      "na całym obszarze codziennie trwa dzień polarny",
      "dociera tam najwięcej energii słonecznej na Ziemi"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Strefy umiarkowane są położone między zwrotnikami i kołami podbiegunowymi; poza zwrotnikami Słońce nie góruje tam w zenicie, a temperatura silnie zmienia się w roku.",
    "image": "r02_strefy_oswietlenia_ziemi.jpg"
  },
  {
    "id": "R02_HARD_13",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: równikowa, zwrotnikowa, podzwrotnikowa, międzyzwrotnikowa.",
    "options": null,
    "answer": "międzyzwrotnikowa",
    "explanation": "Równikowa, zwrotnikowa i podzwrotnikowa to strefy klimatyczne, a międzyzwrotnikowa to strefa oświetlenia Ziemi."
  },
  {
    "id": "R02_HARD_14",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Na równiku Słońce góruje w zenicie w pierwszy dzień astronomicznej wiosny lub jesieni. Co dzieje się wtedy z cieniem przedmiotu?",
    "options": [
      "znajduje się pod przedmiotem i może być niewidoczny",
      "zawsze jest najdłuższy w roku",
      "zawsze pada na zachód przez całą dobę",
      "tworzy okrąg wokół przedmiotu",
      "zmienia datę o jeden dzień",
      "wskazuje południk 180 stopni"
    ],
    "answer": 0,
    "explanation": "Gdy Słońce góruje w zenicie, świeci dokładnie nad głową, więc cień znajduje się pod przedmiotem i może być niewidoczny.",
    "image": "r02_zenit_cien.jpg"
  },
  {
    "id": "R02_HARD_15",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Układ stref klimatycznych wpływa bezpośrednio na rozmieszczenie stref krajobrazowych.",
    "options": null,
    "answer": true,
    "explanation": "Warunki klimatyczne decydują o świecie roślin i zwierząt, dlatego układ stref klimatycznych wpływa na rozmieszczenie stref krajobrazowych."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r02",
  number: 2,
  title: "Ruchy Ziemi",
  icon: "🌍",
  sectionOrder: [
    "Ziemia we Wszechświecie",
    "Ruch obrotowy Ziemi",
    "Czas na Ziemi",
    "Ruch obiegowy Ziemi",
    "Strefy oświetlenia Ziemi"
  ],
  sectionIcons: {
    "Ziemia we Wszechświecie": "🌌",
    "Ruch obrotowy Ziemi": "🔄",
    "Czas na Ziemi": "🕒",
    "Ruch obiegowy Ziemi": "☀️",
    "Strefy oświetlenia Ziemi": "🌡️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
