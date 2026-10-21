// Skróty sekcji (do identyfikatorów ćwiczeń):
//   LAD  = Lądy, oceany i odkrycia
//   KLI  = Pogoda i klimat
//   KRA  = Krajobrazy świata
//   RUC  = Układ Słoneczny i ruchy Ziemi
//   WSP  = Współrzędne geograficzne
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_LAD_01",
    "section": "Lądy, oceany i odkrycia",
    "type": "single_choice",
    "prompt": "Jak określa się rzeczywisty kształt Ziemi, zbliżony do kuli i spłaszczony w okolicach biegunów?",
    "options": [
      "Elipsa",
      "Geoida",
      "Walec",
      "Stożek",
      "Ostrosłup",
      "Dysk"
    ],
    "answer": 1,
    "explanation": "Geoida to bryła zbliżona do kuli, spłaszczona przy biegunach i mająca lokalne nierówności."
  },
  {
    "id": "R02_LAD_02",
    "section": "Lądy, oceany i odkrycia",
    "type": "single_choice",
    "prompt": "Ile kontynentów wyróżnia się w powszechnie stosowanym podziale geograficznym?",
    "options": [
      "5",
      "6",
      "7",
      "8",
      "4",
      "9"
    ],
    "answer": 2,
    "explanation": "W podziale na siedem kontynentów wyróżnia się Azję, Afrykę, Amerykę Północną, Amerykę Południową, Antarktydę, Europę i Australię."
  },
  {
    "id": "R02_LAD_03",
    "section": "Lądy, oceany i odkrycia",
    "type": "single_choice",
    "prompt": "Który ocean Ferdynand Magellan przepłynął i nazwał podczas wyprawy wokół Ziemi?",
    "options": [
      "Ocean Spokojny",
      "Ocean Atlantycki",
      "Ocean Indyjski",
      "Ocean Arktyczny",
      "Ocean Południowy"
    ],
    "answer": 0,
    "explanation": "Opis wyprawy Magellana z lat 1519–1522 wskazuje na Ocean Spokojny."
  },
  {
    "id": "R02_LAD_04",
    "section": "Lądy, oceany i odkrycia",
    "type": "multi_select",
    "prompt": "Zaznacz wszystkie oceany świata.",
    "options": [
      "Ocean Indyjski",
      "Ocean Arktyczny",
      "Morze Śródziemne",
      "Ocean Spokojny",
      "Ocean Południowy",
      "Ocean Atlantycki"
    ],
    "answer": [
      0,
      1,
      3,
      4,
      5
    ],
    "explanation": "Oceany świata to Atlantycki, Spokojny, Indyjski, Arktyczny i Południowy; Morze Śródziemne nie jest oceanem."
  },
  {
    "id": "R02_LAD_05",
    "section": "Lądy, oceany i odkrycia",
    "type": "true_false",
    "prompt": "Wikingowie dotarli do Grenlandii i Labradoru w Ameryce Północnej.",
    "image": "r02_lodz_wikingow.jpg",
    "options": null,
    "answer": true,
    "explanation": "Wyprawy wikingów pozwoliły Europejczykom poznać południowe wybrzeża Grenlandii i Labrador."
  },
  {
    "id": "R02_LAD_06",
    "section": "Lądy, oceany i odkrycia",
    "type": "fill_in",
    "prompt": "Marco Polo podróżował do Chin szlakiem nazywanym __________.",
    "altAnswers": [
      [
        "jedwabnym",
        "Jedwabnym"
      ]
    ],
    "options": null,
    "answer": [
      "jedwabnym"
    ],
    "explanation": "Marco Polo przemierzał w XIII wieku tzw. jedwabny szlak, docierając do Chin."
  },
  {
    "id": "R02_LAD_07",
    "section": "Lądy, oceany i odkrycia",
    "type": "riddle",
    "prompt": "Jak nazywał się żeglarz, który po śmierci Ferdynanda Magellana dokończył pierwszą wyprawę dookoła Ziemi?",
    "altAnswers": [
      "Elcano",
      "Juan del Cano",
      "Juan Sebastián Elcano",
      "Juan Sebastian Elcano"
    ],
    "options": null,
    "answer": "Elcano",
    "explanation": "Wyprawę rozpoczętą przez Magellana ukończył Juan del Cano, zwany także Juanem Sebastiánem Elcano."
  },
  {
    "id": "R02_LAD_08",
    "section": "Lądy, oceany i odkrycia",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest oceanem: Ocean Atlantycki, Ocean Indyjski, Morze Śródziemne, Ocean Arktyczny.",
    "options": null,
    "answer": "Morze Śródziemne",
    "explanation": "Atlantycki, Indyjski i Arktyczny to oceany; Morze Śródziemne jest morzem."
  },
  {
    "id": "R02_LAD_09",
    "section": "Lądy, oceany i odkrycia",
    "type": "scenario",
    "prompt": "Jest rok 1492. Wyprawa wypływa przez Atlantyk na zachód w poszukiwaniu drogi morskiej do Indii, lecz dociera do wysp Karaibów. Kto nią dowodzi?",
    "options": [
      "Krzysztof Kolumb",
      "Vasco da Gama",
      "Ferdynand Magellan",
      "James Cook",
      "David Livingstone"
    ],
    "image": "r02_karawela_odkrywcow.jpg",
    "answer": 0,
    "explanation": "Krzysztof Kolumb odbył w latach 1492–1493 wyprawę na zachód i dotarł m.in. do Bahamów, Haiti i Kuby."
  },
  {
    "id": "R02_LAD_10",
    "section": "Lądy, oceany i odkrycia",
    "type": "match",
    "prompt": "Połącz podróżnika z osiągnięciem.",
    "left": [
      "Marco Polo",
      "Vasco da Gama",
      "James Cook",
      "David Livingstone"
    ],
    "right": [
      "Badanie wnętrza Afryki",
      "Podróż jedwabnym szlakiem do Chin",
      "Badanie wybrzeży Australii i Nowej Zelandii",
      "Droga morska do Indii wokół Afryki"
    ],
    "options": null,
    "answer": {
      "Marco Polo": "Podróż jedwabnym szlakiem do Chin",
      "Vasco da Gama": "Droga morska do Indii wokół Afryki",
      "James Cook": "Badanie wybrzeży Australii i Nowej Zelandii",
      "David Livingstone": "Badanie wnętrza Afryki"
    },
    "explanation": "Marco Polo podróżował do Chin, Vasco da Gama opłynął Afrykę, James Cook badał Oceanię, a David Livingstone Afrykę."
  },
  {
    "id": "R02_LAD_11",
    "section": "Lądy, oceany i odkrycia",
    "type": "sort",
    "prompt": "Przyporządkuj nazwy do odpowiedniej grupy.",
    "items": [
      "Ocean Atlantycki",
      "Afryka",
      "Antarktyda",
      "Ocean Południowy",
      "Ocean Indyjski",
      "Europa",
      "Ocean Spokojny",
      "Australia"
    ],
    "categories": [
      "Kontynenty",
      "Oceany"
    ],
    "options": null,
    "answer": {
      "Kontynenty": [
        "Afryka",
        "Europa",
        "Antarktyda",
        "Australia"
      ],
      "Oceany": [
        "Ocean Atlantycki",
        "Ocean Południowy",
        "Ocean Indyjski",
        "Ocean Spokojny"
      ]
    },
    "explanation": "Kontynentami są m.in. Afryka, Europa, Antarktyda i Australia; pozostałe nazwy oznaczają oceany."
  },
  {
    "id": "R02_LAD_12",
    "section": "Lądy, oceany i odkrycia",
    "type": "sequence",
    "prompt": "Ułóż wyprawy w kolejności chronologicznej, od najwcześniejszej.",
    "items": [
      "Wyprawa Magellana i Elcano (1519)",
      "Wyprawa Vasco da Gamy do Indii (1497)",
      "Podróż Marco Polo do Chin (XIII w.)",
      "Wyprawa Krzysztofa Kolumba (1492)"
    ],
    "image": "r02_karawela_odkrywcow.jpg",
    "options": null,
    "answer": [
      "Podróż Marco Polo do Chin (XIII w.)",
      "Wyprawa Krzysztofa Kolumba (1492)",
      "Wyprawa Vasco da Gamy do Indii (1497)",
      "Wyprawa Magellana i Elcano (1519)"
    ],
    "explanation": "Marco Polo podróżował w XIII wieku, Kolumb wyruszył w 1492, Vasco da Gama w 1497, a wyprawa Magellana rozpoczęła się w 1519 roku."
  },
  {
    "id": "R02_KLI_01",
    "section": "Pogoda i klimat",
    "type": "single_choice",
    "prompt": "Czym jest pogoda?",
    "options": [
      "Chwilowym stanem atmosfery",
      "Średnią opadów z wielu lat",
      "Stałym układem stref krajobrazowych",
      "Wysokością terenu",
      "Rodzajem pokrywy roślinnej"
    ],
    "image": "r02_przyrzady_pogodowe.jpg",
    "answer": 0,
    "explanation": "Pogoda oznacza chwilowy stan atmosfery w konkretnym miejscu i czasie."
  },
  {
    "id": "R02_KLI_02",
    "section": "Pogoda i klimat",
    "type": "single_choice",
    "prompt": "Jak długi powinien być okres obserwacji pogody, aby na jego podstawie określić klimat?",
    "options": [
      "1 dzień",
      "12 miesięcy",
      "Co najmniej 30 lat",
      "3 lata",
      "7 dni",
      "10 lat"
    ],
    "answer": 2,
    "explanation": "Klimat określa się na podstawie obserwacji pogody z co najmniej 30 lat."
  },
  {
    "id": "R02_KLI_03",
    "section": "Pogoda i klimat",
    "type": "single_choice",
    "prompt": "Co na typowym klimatogramie oznacza linia, zwykle czerwona?",
    "options": [
      "Opady atmosferyczne",
      "Temperaturę powietrza",
      "Prędkość wiatru",
      "Ciśnienie atmosferyczne",
      "Grubość śniegu"
    ],
    "image": "r02_klimatogram_bez_opisow.jpg",
    "answer": 1,
    "explanation": "Temperatury miesięczne przedstawia się linią, a sumy opadów atmosferycznych – słupkami."
  },
  {
    "id": "R02_KLI_04",
    "section": "Pogoda i klimat",
    "type": "multi_select",
    "prompt": "Które elementy należą do składników pogody?",
    "options": [
      "Temperatura powietrza",
      "Prędkość wiatru",
      "Liczba kontynentów",
      "Opady atmosferyczne",
      "Wilgotność powietrza"
    ],
    "image": "r02_przyrzady_pogodowe.jpg",
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Do składników pogody należą m.in. temperatura, wiatr, opady i wilgotność powietrza; liczba kontynentów nie opisuje pogody."
  },
  {
    "id": "R02_KLI_05",
    "section": "Pogoda i klimat",
    "type": "true_false",
    "prompt": "Klimat opisuje warunki atmosferyczne występujące wyłącznie w jednej, wybranej godzinie.",
    "options": null,
    "answer": false,
    "explanation": "Warunki w danej godzinie opisują pogodę, a klimat charakteryzuje wieloletnie, typowe warunki danego miejsca."
  },
  {
    "id": "R02_KLI_06",
    "section": "Pogoda i klimat",
    "type": "fill_in",
    "prompt": "Roczną sumę opadów obliczamy, __________ średnie miesięczne sumy opadów.",
    "altAnswers": [
      [
        "sumując",
        "dodając"
      ]
    ],
    "options": null,
    "answer": [
      "sumując"
    ],
    "explanation": "Roczną sumę opadów otrzymuje się przez dodanie średnich sum opadów ze wszystkich 12 miesięcy."
  },
  {
    "id": "R02_KLI_07",
    "section": "Pogoda i klimat",
    "type": "riddle",
    "prompt": "Jak nazywa się wykres, który przedstawia w kolejnych miesiącach średnią temperaturę powietrza i opady atmosferyczne?",
    "altAnswers": [
      "klimatogram",
      "Klimatogram"
    ],
    "image": "r02_klimatogram_bez_opisow.jpg",
    "options": null,
    "answer": "klimatogram",
    "explanation": "Klimatogram przedstawia wieloletnie dane o temperaturach i opadach w podziale na miesiące."
  },
  {
    "id": "R02_KLI_08",
    "section": "Pogoda i klimat",
    "type": "odd_one_out",
    "prompt": "Która wielkość nie jest składnikiem pogody: temperatura powietrza, wilgotność powietrza, prędkość wiatru, liczba kontynentów.",
    "options": null,
    "answer": "liczba kontynentów",
    "explanation": "Temperatura, wilgotność i wiatr są składnikami pogody; liczba kontynentów jest cechą podziału powierzchni Ziemi."
  },
  {
    "id": "R02_KLI_09",
    "section": "Pogoda i klimat",
    "type": "scenario",
    "prompt": "W tabeli klimatycznej Włodawy lipiec ma średnio 19,3°C, a styczeń -2,5°C. Jaką roczną amplitudę temperatury należy wpisać do notatki?",
    "options": [
      "16,8°C",
      "19,3°C",
      "21,8°C",
      "24,3°C",
      "18,8°C"
    ],
    "answer": 2,
    "explanation": "Roczna amplituda temperatury Włodawy to 19,3°C − (−2,5°C) = 21,8°C."
  },
  {
    "id": "R02_KLI_10",
    "section": "Pogoda i klimat",
    "type": "match",
    "prompt": "Połącz wielkość klimatyczną ze sposobem jej obliczania.",
    "left": [
      "Średnia roczna temperatura",
      "Roczna amplituda temperatury",
      "Roczna suma opadów"
    ],
    "right": [
      "Suma opadów ze wszystkich 12 miesięcy",
      "Suma 12 średnich miesięcznych temperatur podzielona przez 12",
      "Najwyższa średnia miesięczna minus najniższa średnia miesięczna"
    ],
    "options": null,
    "answer": {
      "Średnia roczna temperatura": "Suma 12 średnich miesięcznych temperatur podzielona przez 12",
      "Roczna amplituda temperatury": "Najwyższa średnia miesięczna minus najniższa średnia miesięczna",
      "Roczna suma opadów": "Suma opadów ze wszystkich 12 miesięcy"
    },
    "explanation": "Do charakterystyki klimatu wykorzystuje się średnią roczną temperaturę, roczną amplitudę temperatury oraz roczną sumę opadów."
  },
  {
    "id": "R02_KLI_11",
    "section": "Pogoda i klimat",
    "type": "sort",
    "prompt": "Przyporządkuj opisy do pogody albo klimatu.",
    "items": [
      "Typowe opady z okresu 30 lat",
      "Dzisiejsze zachmurzenie",
      "Średnia temperatura lipca z wielu lat",
      "Temperatura zmierzona dziś o 12:00",
      "Prędkość wiatru podczas porannego pomiaru",
      "Średnia roczna temperatura ustalona z wieloletnich danych"
    ],
    "categories": [
      "Pogoda",
      "Klimat"
    ],
    "options": null,
    "answer": {
      "Pogoda": [
        "Temperatura zmierzona dziś o 12:00",
        "Dzisiejsze zachmurzenie",
        "Prędkość wiatru podczas porannego pomiaru"
      ],
      "Klimat": [
        "Średnia temperatura lipca z wielu lat",
        "Typowe opady z okresu 30 lat",
        "Średnia roczna temperatura ustalona z wieloletnich danych"
      ]
    },
    "explanation": "Pogodę wyznacza się dla chwil i krótkich okresów, natomiast klimat na podstawie obserwacji wieloletnich."
  },
  {
    "id": "R02_KLI_12",
    "section": "Pogoda i klimat",
    "type": "sequence",
    "prompt": "Ułóż miesiące Włodawy według rosnącej średniej temperatury powietrza.",
    "items": [
      "Lipiec (19,3°C)",
      "Styczeń (-2,5°C)",
      "Maj (13,9°C)",
      "Marzec (2,4°C)"
    ],
    "options": null,
    "answer": [
      "Styczeń (-2,5°C)",
      "Marzec (2,4°C)",
      "Maj (13,9°C)",
      "Lipiec (19,3°C)"
    ],
    "explanation": "Średnie temperatury we Włodawie wynoszą: w styczniu -2,5°C, w marcu 2,4°C, w maju 13,9°C i w lipcu 19,3°C."
  },
  {
    "id": "R02_KRA_01",
    "section": "Krajobrazy świata",
    "type": "single_choice",
    "prompt": "Gdzie występują wilgotne lasy równikowe?",
    "options": [
      "W pobliżu równika",
      "Za kołami podbiegunowymi",
      "Na suchych stepach Eurazji",
      "W centrum pustyń gorących",
      "Na najwyższych grzbietach Himalajów"
    ],
    "image": "r02_las_rownikowy.jpg",
    "answer": 0,
    "explanation": "Wilgotne lasy równikowe występują blisko równika, np. na Nizinie Amazonki i w Kotlinie Konga."
  },
  {
    "id": "R02_KRA_02",
    "section": "Krajobrazy świata",
    "type": "single_choice",
    "prompt": "Które dwie pory roku wyróżnia się w warunkach klimatycznych sawanny?",
    "options": [
      "Wiosna i jesień",
      "Pora mroźna i odwilżowa",
      "Pora sucha i deszczowa",
      "Pora śnieżna i monsunowa",
      "Dwie pory mroźne"
    ],
    "image": "r02_sawanna.jpg",
    "answer": 2,
    "explanation": "Na sawannie występuje pora sucha oraz pora deszczowa, podczas której spadają obfite opady."
  },
  {
    "id": "R02_KRA_03",
    "section": "Krajobrazy świata",
    "type": "single_choice",
    "prompt": "Jak nazywa się formacja rozległych lasów iglastych klimatu umiarkowanego chłodnego?",
    "options": [
      "Pampa",
      "Tajga",
      "Sawanna",
      "Tundra",
      "Makia",
      "Preria"
    ],
    "answer": 1,
    "explanation": "Tajga to lasy iglaste rosnące m.in. na Syberii i w Kanadzie, z sosnami, świerkami, jodłami i modrzewiami."
  },
  {
    "id": "R02_KRA_04",
    "section": "Krajobrazy świata",
    "type": "multi_select",
    "prompt": "Wskaż przystosowania roślin pustynnych do suszy.",
    "options": [
      "Rozbudowany system korzeniowy",
      "Duże cienkie liście zwiększające parowanie",
      "Gromadzenie wody w łodygach",
      "Małe liście ograniczające parowanie",
      "Gromadzenie wody w liściach"
    ],
    "image": "r02_sukulenty_pustynne.jpg",
    "answer": [
      0,
      2,
      3,
      4
    ],
    "explanation": "Rośliny pustynne mogą mieć rozbudowane korzenie, magazynować wodę i ograniczać parowanie dzięki małym liściom."
  },
  {
    "id": "R02_KRA_05",
    "section": "Krajobrazy świata",
    "type": "true_false",
    "prompt": "Pampa jest regionalną nazwą formacji trawiastej typu step w Ameryce Południowej.",
    "options": null,
    "answer": true,
    "explanation": "Trawiaste formacje strefy umiarkowanej to step w Eurazji, preria w Ameryce Północnej i pampa w Ameryce Południowej."
  },
  {
    "id": "R02_KRA_06",
    "section": "Krajobrazy świata",
    "type": "fill_in",
    "prompt": "W Himalajach powyżej około 5000 m n.p.m. zaczyna się piętro __________.",
    "altAnswers": [
      [
        "śnieżne",
        "sniezne"
      ]
    ],
    "options": null,
    "answer": [
      "śnieżne"
    ],
    "explanation": "Piętro śnieżne w Himalajach rozpoczyna się od około 5000 m n.p.m., ponad piętrem górskich łąk."
  },
  {
    "id": "R02_KRA_07",
    "section": "Krajobrazy świata",
    "type": "riddle",
    "prompt": "Jak nazywa się bezleśna formacja roślinna leżąca na niezlodowaconych północnych krańcach Eurazji i Ameryki Północnej?",
    "altAnswers": [
      "tundra",
      "Tundra"
    ],
    "image": "r02_tundra.jpg",
    "options": null,
    "answer": "tundra",
    "explanation": "Tundra jest formacją bezleśną w strefie okołobiegunowej, z roślinami przystosowanymi do krótkiego lata."
  },
  {
    "id": "R02_KRA_08",
    "section": "Krajobrazy świata",
    "type": "odd_one_out",
    "prompt": "Która roślina nie jest typowym drzewem tajgi: sosna, świerk, modrzew, baobab.",
    "options": null,
    "answer": "baobab",
    "explanation": "Sosna, świerk i modrzew to typowe drzewa iglaste tajgi; baobab występuje na sawannie."
  },
  {
    "id": "R02_KRA_09",
    "section": "Krajobrazy świata",
    "type": "scenario",
    "prompt": "Pasterze w Mongolii okresowo przemieszczają się ze stadami i potrzebują dużego schronienia z drewnianych pali oraz skór, łatwego do złożenia. Co budują?",
    "options": [
      "Jurtę",
      "Igloo",
      "Kamienny dom",
      "Dom na palach",
      "Drewniany blok mieszkalny"
    ],
    "image": "r02_jurta_na_stepie.jpg",
    "answer": 0,
    "explanation": "Mieszkańcy stepów Mongolii i Kazachstanu podczas wędrówek używają jurt, czyli rozkładanych schronień przypominających namioty."
  },
  {
    "id": "R02_KRA_10",
    "section": "Krajobrazy świata",
    "type": "match",
    "prompt": "Połącz krajobraz z charakterystyczną rośliną.",
    "left": [
      "Wilgotny las równikowy",
      "Sawanna",
      "Tajga",
      "Pustynia gorąca"
    ],
    "right": [
      "Kaktus",
      "Modrzew",
      "Drzewo kapokowe",
      "Baobab"
    ],
    "options": null,
    "answer": {
      "Wilgotny las równikowy": "Drzewo kapokowe",
      "Sawanna": "Baobab",
      "Tajga": "Modrzew",
      "Pustynia gorąca": "Kaktus"
    },
    "explanation": "Drzewo kapokowe występuje w lesie równikowym, baobab na sawannie, modrzew w tajdze, a kaktus na pustyni gorącej."
  },
  {
    "id": "R02_KRA_11",
    "section": "Krajobrazy świata",
    "type": "sort",
    "prompt": "Dopasuj rośliny do stref krajobrazowych.",
    "items": [
      "Modrzew",
      "Mchy",
      "Akacja",
      "Porosty",
      "Świerk",
      "Baobab"
    ],
    "categories": [
      "Sawanna",
      "Tajga",
      "Tundra"
    ],
    "options": null,
    "answer": {
      "Sawanna": [
        "Akacja",
        "Baobab"
      ],
      "Tajga": [
        "Świerk",
        "Modrzew"
      ],
      "Tundra": [
        "Mchy",
        "Porosty"
      ]
    },
    "explanation": "Sawannę wyróżniają akacje i baobaby, tajgę drzewa iglaste, a tundrę niska roślinność, w tym mchy i porosty."
  },
  {
    "id": "R02_KRA_12",
    "section": "Krajobrazy świata",
    "type": "sequence",
    "prompt": "Ułóż piętra roślinności Himalajów od najniżej do najwyżej położonego.",
    "items": [
      "Piętro śnieżne",
      "Piętro lasów iglastych",
      "Piętro wiecznie zielonych lasów",
      "Piętro górskich łąk",
      "Piętro krzewów",
      "Piętro lasów liściastych"
    ],
    "options": null,
    "answer": [
      "Piętro wiecznie zielonych lasów",
      "Piętro lasów liściastych",
      "Piętro lasów iglastych",
      "Piętro krzewów",
      "Piętro górskich łąk",
      "Piętro śnieżne"
    ],
    "explanation": "W Himalajach piętra zmieniają się kolejno od lasów wiecznie zielonych przez liściaste, iglaste, krzewy i łąki po piętro śnieżne."
  },
  {
    "id": "R02_RUC_01",
    "section": "Układ Słoneczny i ruchy Ziemi",
    "type": "single_choice",
    "prompt": "Ile planet znajduje się w Układzie Słonecznym?",
    "options": [
      "7",
      "8",
      "9",
      "6",
      "10",
      "5"
    ],
    "answer": 1,
    "explanation": "W Układzie Słonecznym wyróżniono osiem planet orbitujących wokół Słońca."
  },
  {
    "id": "R02_RUC_02",
    "section": "Układ Słoneczny i ruchy Ziemi",
    "type": "single_choice",
    "prompt": "Która planeta znajduje się najbliżej Słońca?",
    "options": [
      "Merkury",
      "Wenus",
      "Ziemia",
      "Mars",
      "Jowisz",
      "Saturn"
    ],
    "answer": 0,
    "explanation": "Merkury to pierwsza od Słońca i zarazem najmniejsza planeta Układu Słonecznego."
  },
  {
    "id": "R02_RUC_03",
    "section": "Układ Słoneczny i ruchy Ziemi",
    "type": "single_choice",
    "prompt": "W jakim kierunku Ziemia obraca się wokół własnej osi?",
    "options": [
      "Ze wschodu na zachód",
      "Z zachodu na wschód",
      "Z północy na południe",
      "Z południa na północ"
    ],
    "image": "r02_os_zachod_wschod.jpg",
    "answer": 1,
    "explanation": "Ruch obrotowy Ziemi odbywa się z zachodu na wschód i trwa około 24 godzin."
  },
  {
    "id": "R02_RUC_04",
    "section": "Układ Słoneczny i ruchy Ziemi",
    "type": "multi_select",
    "prompt": "Wybierz wszystkie planety grupy ziemskiej (skaliste).",
    "options": [
      "Merkury",
      "Wenus",
      "Jowisz",
      "Mars",
      "Uran",
      "Ziemia"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "explanation": "Do planet skalistych zaliczono Merkurego, Wenus, Ziemię i Marsa; Jowisz i Uran są planetami olbrzymami."
  },
  {
    "id": "R02_RUC_05",
    "section": "Układ Słoneczny i ruchy Ziemi",
    "type": "true_false",
    "prompt": "Pełny obrót Ziemi wokół własnej osi trwa około 24 godzin.",
    "options": null,
    "answer": true,
    "explanation": "Ziemia wykonuje obrót o 360° w ciągu jednej doby, czyli około 24 godzin."
  },
  {
    "id": "R02_RUC_06",
    "section": "Układ Słoneczny i ruchy Ziemi",
    "type": "fill_in",
    "prompt": "Obieg Ziemi wokół Słońca trwa w przybliżeniu __________ dnia.",
    "altAnswers": [
      [
        "365,24",
        "365.24",
        "365,24 dnia",
        "365.24 dnia"
      ]
    ],
    "image": "r02_orbita_slonce_ziemia.jpg",
    "options": null,
    "answer": [
      "365,24"
    ],
    "explanation": "Czas jednego obiegu Ziemi wokół Słońca wynosi około 365,24 dnia."
  },
  {
    "id": "R02_RUC_07",
    "section": "Układ Słoneczny i ruchy Ziemi",
    "type": "riddle",
    "prompt": "Jak nazywa się gwiazda położona w centrum Układu Słonecznego?",
    "altAnswers": [
      "Słońce",
      "Slonce",
      "słońce"
    ],
    "options": null,
    "answer": "Słońce",
    "explanation": "Słońce jest centralną gwiazdą Układu Słonecznego i emituje własne światło."
  },
  {
    "id": "R02_RUC_08",
    "section": "Układ Słoneczny i ruchy Ziemi",
    "type": "odd_one_out",
    "prompt": "Wskaż planetę, która nie należy do planet skalistych: Merkury, Wenus, Mars, Saturn.",
    "options": null,
    "answer": "Saturn",
    "explanation": "Merkury, Wenus i Mars to planety skaliste; Saturn należy do planet olbrzymów."
  },
  {
    "id": "R02_RUC_09",
    "section": "Układ Słoneczny i ruchy Ziemi",
    "type": "scenario",
    "prompt": "Uczeń ustawił pionowo gnomon i obserwuje jego cień. W pewnym momencie cień jest najkrótszy w ciągu dnia. Jak nazywa się ten moment?",
    "options": [
      "Wschód Słońca",
      "Zachód Słońca",
      "Południe słoneczne",
      "Początek nocy polarnej"
    ],
    "image": "r02_gnomon_i_cien.jpg",
    "answer": 2,
    "explanation": "Najkrótszy cień gnomonu pojawia się podczas górowania Słońca, czyli w południe słoneczne."
  },
  {
    "id": "R02_RUC_10",
    "section": "Układ Słoneczny i ruchy Ziemi",
    "type": "match",
    "prompt": "Połącz planetę z przybliżonym czasem jej obiegu wokół Słońca.",
    "left": [
      "Merkury",
      "Ziemia",
      "Jowisz",
      "Neptun"
    ],
    "right": [
      "Niespełna 165 lat",
      "1 rok",
      "88 dni",
      "Niecałe 12 lat"
    ],
    "options": null,
    "answer": {
      "Merkury": "88 dni",
      "Ziemia": "1 rok",
      "Jowisz": "Niecałe 12 lat",
      "Neptun": "Niespełna 165 lat"
    },
    "explanation": "Merkury obiega Słońce w 88 dni, Ziemia w rok, Jowisz w niecałe 12 lat, a Neptun w niespełna 165 lat."
  },
  {
    "id": "R02_RUC_11",
    "section": "Układ Słoneczny i ruchy Ziemi",
    "type": "sort",
    "prompt": "Rozdziel osiem planet na planety skaliste i planety olbrzymy.",
    "items": [
      "Neptun",
      "Wenus",
      "Jowisz",
      "Mars",
      "Saturn",
      "Merkury",
      "Uran",
      "Ziemia"
    ],
    "categories": [
      "Planety skaliste",
      "Planety olbrzymy"
    ],
    "options": null,
    "answer": {
      "Planety skaliste": [
        "Merkury",
        "Wenus",
        "Ziemia",
        "Mars"
      ],
      "Planety olbrzymy": [
        "Jowisz",
        "Saturn",
        "Uran",
        "Neptun"
      ]
    },
    "explanation": "Pierwsze cztery planety od Słońca to planety skaliste, a cztery dalsze to planety olbrzymy."
  },
  {
    "id": "R02_RUC_12",
    "section": "Układ Słoneczny i ruchy Ziemi",
    "type": "sequence",
    "prompt": "Ułóż astronomiczne początki pór roku na półkuli północnej w kolejności kalendarzowej.",
    "items": [
      "22 grudnia — przesilenie zimowe",
      "23 września — równonoc jesienna",
      "21 marca — równonoc wiosenna",
      "22 czerwca — przesilenie letnie"
    ],
    "options": null,
    "answer": [
      "21 marca — równonoc wiosenna",
      "22 czerwca — przesilenie letnie",
      "23 września — równonoc jesienna",
      "22 grudnia — przesilenie zimowe"
    ],
    "explanation": "Daty rozpoczynające astronomiczne pory roku to w przybliżeniu 21 marca, 22 czerwca, 23 września i 22 grudnia."
  },
  {
    "id": "R02_WSP_01",
    "section": "Współrzędne geograficzne",
    "type": "single_choice",
    "prompt": "Na podstawie jakich linii wyznacza się szerokość geograficzną?",
    "options": [
      "Południków",
      "Linii brzegowych",
      "Równoleżników",
      "Orbit planet",
      "Linii zmiany daty"
    ],
    "answer": 2,
    "explanation": "Szerokość geograficzna jest związana z równoleżnikami i mierzona na północ lub południe od równika."
  },
  {
    "id": "R02_WSP_02",
    "section": "Współrzędne geograficzne",
    "type": "single_choice",
    "prompt": "Jaka jest największa możliwa wartość długości geograficznej?",
    "options": [
      "180°",
      "90°",
      "360°",
      "60°",
      "45°",
      "120°"
    ],
    "answer": 0,
    "explanation": "Długość geograficzna przyjmuje wartości od 0° do 180° w kierunku wschodnim lub zachodnim."
  },
  {
    "id": "R02_WSP_03",
    "section": "Współrzędne geograficzne",
    "type": "single_choice",
    "prompt": "Przez jaką miejscowość przechodzi południk zerowy?",
    "options": [
      "Paryż",
      "Greenwich",
      "Rzym",
      "Lizbona",
      "Madryt",
      "Berlin"
    ],
    "answer": 1,
    "explanation": "Południk 0° przechodzi przez Greenwich koło Londynu."
  },
  {
    "id": "R02_WSP_04",
    "section": "Współrzędne geograficzne",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe stwierdzenia o równoleżnikach.",
    "options": [
      "Biegną ze wschodu na zachód",
      "Równik to najdłuższy równoleżnik",
      "Wszystkie mają identyczną długość",
      "Są krótsze im dalej od równika",
      "Przecinają południki pod kątem prostym"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Równoleżniki biegną w kierunku wschód–zachód, równik jest najdłuższy, a pozostałe stają się krótsze ku biegunom i przecinają południki pod kątem prostym."
  },
  {
    "id": "R02_WSP_05",
    "section": "Współrzędne geograficzne",
    "type": "true_false",
    "prompt": "Jeden stopień kątowy zawiera 60 minut kątowych.",
    "options": null,
    "answer": true,
    "explanation": "Jeden stopień kątowy (1°) dzieli się na 60 minut (60′), a jedna minuta na 60 sekund (60″)."
  },
  {
    "id": "R02_WSP_06",
    "section": "Współrzędne geograficzne",
    "type": "fill_in",
    "prompt": "Długość geograficzną zachodnią oznacza się literą __________.",
    "altAnswers": [
      [
        "W",
        "w"
      ]
    ],
    "options": null,
    "answer": [
      "W"
    ],
    "explanation": "Litera W oznacza zachód (west); długość wschodnia ma oznaczenie E."
  },
  {
    "id": "R02_WSP_07",
    "section": "Współrzędne geograficzne",
    "type": "riddle",
    "prompt": "Jak nazywa się równoleżnik, któremu odpowiada szerokość geograficzna 0°?",
    "altAnswers": [
      "równik",
      "rownik"
    ],
    "options": null,
    "answer": "równik",
    "explanation": "Równik ma szerokość geograficzną 0° i dzieli Ziemię na półkulę północną oraz południową."
  },
  {
    "id": "R02_WSP_08",
    "section": "Współrzędne geograficzne",
    "type": "odd_one_out",
    "prompt": "Który symbol nie oznacza kierunku pośredniego: NE, NW, SE, N.",
    "options": null,
    "answer": "N",
    "explanation": "NE, NW i SE to kierunki pośrednie; N oznacza główny kierunek północ."
  },
  {
    "id": "R02_WSP_09",
    "section": "Współrzędne geograficzne",
    "type": "scenario",
    "prompt": "Odbiornik GPS pokazuje współrzędne punktu 60°N, 75°E. Na których półkulach znajduje się punkt?",
    "options": [
      "Północnej i wschodniej",
      "Północnej i zachodniej",
      "Południowej i wschodniej",
      "Południowej i zachodniej"
    ],
    "image": "r02_odbiornik_gps.jpg",
    "answer": 0,
    "explanation": "60°N to półkula północna, a 75°E to półkula wschodnia. Najpierw podaje się szerokość, potem długość geograficzną."
  },
  {
    "id": "R02_WSP_10",
    "section": "Współrzędne geograficzne",
    "type": "match",
    "prompt": "Dopasuj literowe oznaczenia kierunków geograficznych.",
    "left": [
      "N",
      "S",
      "E",
      "W"
    ],
    "right": [
      "Zachód",
      "Północ",
      "Wschód",
      "Południe"
    ],
    "options": null,
    "answer": {
      "N": "Północ",
      "S": "Południe",
      "E": "Wschód",
      "W": "Zachód"
    },
    "explanation": "Międzynarodowe oznaczenia to N – północ, S – południe, E – wschód i W – zachód."
  },
  {
    "id": "R02_WSP_11",
    "section": "Współrzędne geograficzne",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do szerokości lub długości geograficznej.",
    "items": [
      "Południk 180°",
      "Równik",
      "Półkula zachodnia",
      "Zwrotnik Raka",
      "Południk Greenwich",
      "Koło podbiegunowe północne",
      "Półkula południowa",
      "Półkula wschodnia"
    ],
    "categories": [
      "Szerokość geograficzna",
      "Długość geograficzna"
    ],
    "options": null,
    "answer": {
      "Szerokość geograficzna": [
        "Równik",
        "Zwrotnik Raka",
        "Koło podbiegunowe północne",
        "Półkula południowa"
      ],
      "Długość geograficzna": [
        "Południk Greenwich",
        "Południk 180°",
        "Półkula zachodnia",
        "Półkula wschodnia"
      ]
    },
    "explanation": "Równoleżniki oraz półkule północna i południowa odnoszą się do szerokości, a południki oraz półkule wschodnia i zachodnia do długości geograficznej."
  },
  {
    "id": "R02_WSP_12",
    "section": "Współrzędne geograficzne",
    "type": "sequence",
    "prompt": "Ułóż w odpowiedniej kolejności kroki odczytywania współrzędnych geograficznych punktu.",
    "items": [
      "Odczytaj długość i półkulę E albo W",
      "Zapisz najpierw szerokość, potem długość",
      "Ustal odstępy między liniami siatki",
      "Odczytaj szerokość i półkulę N albo S"
    ],
    "image": "r02_odbiornik_gps.jpg",
    "options": null,
    "answer": [
      "Ustal odstępy między liniami siatki",
      "Odczytaj szerokość i półkulę N albo S",
      "Odczytaj długość i półkulę E albo W",
      "Zapisz najpierw szerokość, potem długość"
    ],
    "explanation": "Najpierw sprawdza się podziałkę siatki, następnie szerokość i długość, a na końcu zapisuje współrzędne w odpowiedniej kolejności."
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W Greenwich jest godzina 12:00 czasu słonecznego. Obserwator przebywa na południku 75°E. Którą godzinę czasu słonecznego powinien odczytać?",
    "options": [
      "07:00",
      "15:00",
      "17:00",
      "19:00",
      "12:05"
    ],
    "image": "r02_zegar_solar.jpg",
    "answer": 2,
    "explanation": "Każdy stopień długości oznacza 4 minuty różnicy czasu. 75° × 4 min = 300 minut = 5 godzin; na wschód czas jest późniejszy."
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaka jest rozciągłość równoleżnikowa Afryki w podanym przykładzie obliczeniowym?",
    "options": [
      "68°55′",
      "33°51′",
      "62°11′",
      "68°45′",
      "51°23′"
    ],
    "answer": 0,
    "explanation": "Długości skrajnych punktów Afryki to 51°23′E i 17°32′W. Ponieważ leżą na różnych półkulach, dodajemy wartości: 68°55′."
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Wskaż poprawne przeliczenia wynikające z ruchu obrotowego Ziemi.",
    "options": [
      "15° odpowiada 1 godzinie",
      "1° odpowiada 4 minutom",
      "45° odpowiada 2 godzinom",
      "90° odpowiada 6 godzinom",
      "30° odpowiada 30 minutom"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Ziemia obraca się o 360° w 24 godziny, czyli o 15° w godzinę i 1° w 4 minuty; 45° odpowiada 3 godzinom, nie 2."
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Dopasuj wydarzenia astronomiczne do miejsca padania promieni słonecznych pod kątem prostym.",
    "left": [
      "Równonoc marcowa",
      "Przesilenie czerwcowe",
      "Przesilenie grudniowe"
    ],
    "right": [
      "Zwrotnik Koziorożca",
      "Równik",
      "Zwrotnik Raka"
    ],
    "options": null,
    "answer": {
      "Równonoc marcowa": "Równik",
      "Przesilenie czerwcowe": "Zwrotnik Raka",
      "Przesilenie grudniowe": "Zwrotnik Koziorożca"
    },
    "explanation": "Podczas równonocy promienie padają prostopadle na równik, w czerwcu na zwrotnik Raka, a w grudniu na zwrotnik Koziorożca."
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W Himalajach temperatura powietrza spada średnio o __________ °C na każde 100 m wysokości.",
    "altAnswers": [
      [
        "0,6",
        "0.6"
      ]
    ],
    "image": "r02_himalaje_bez_podpisow.jpg",
    "options": null,
    "answer": [
      "0,6"
    ],
    "explanation": "Przeciętny spadek temperatury powietrza w górach wynosi około 0,6°C na każde 100 m wysokości."
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Uporządkuj podane miesiące Włodawy od najmniejszej do największej średniej miesięcznej sumy opadów.",
    "items": [
      "Lipiec (82,9 mm)",
      "Maj (67,3 mm)",
      "Styczeń (27,4 mm)",
      "Grudzień (31,9 mm)"
    ],
    "options": null,
    "answer": [
      "Styczeń (27,4 mm)",
      "Grudzień (31,9 mm)",
      "Maj (67,3 mm)",
      "Lipiec (82,9 mm)"
    ],
    "explanation": "W tabeli dla Włodawy: styczeń 27,4 mm, grudzień 31,9 mm, maj 67,3 mm, lipiec 82,9 mm."
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się lud zamieszkujący wysoko położone tereny Himalajów i często pracujący jako przewodnicy wypraw górskich?",
    "altAnswers": [
      "Szerpowie",
      "Szerpa",
      "Szerpowie himalajscy"
    ],
    "options": null,
    "answer": "Szerpowie",
    "explanation": "Szerpowie mieszkają nawet powyżej 4000 m n.p.m. i często pracują jako przewodnicy lub tragarze."
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do stref oświetlenia Ziemi.",
    "items": [
      "Możliwe dni i noce polarne",
      "Obszar między zwrotnikami",
      "Brak dni i nocy polarnych",
      "Słońce przynajmniej raz w roku jest w zenicie",
      "Obszary za kołami podbiegunowymi",
      "Obszary między zwrotnikami i kołami podbiegunowymi"
    ],
    "categories": [
      "Strefa gorąca",
      "Strefy umiarkowane",
      "Strefy zimne"
    ],
    "options": null,
    "answer": {
      "Strefa gorąca": [
        "Słońce przynajmniej raz w roku jest w zenicie",
        "Obszar między zwrotnikami"
      ],
      "Strefy umiarkowane": [
        "Obszary między zwrotnikami i kołami podbiegunowymi",
        "Brak dni i nocy polarnych"
      ],
      "Strefy zimne": [
        "Obszary za kołami podbiegunowymi",
        "Możliwe dni i noce polarne"
      ]
    },
    "explanation": "Między zwrotnikami występuje strefa gorąca; pomiędzy zwrotnikami a kołami podbiegunowymi – umiarkowane; za kołami – zimne."
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Południk 30°W ma czas słoneczny o dwie godziny wcześniejszy niż południk Greenwich.",
    "options": null,
    "answer": true,
    "explanation": "Różnica 30° to 30 × 4 min = 120 minut. Na zachód od Greenwich czas słoneczny jest wcześniejszy."
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Skrajny punkt obszaru leży na 18°N, drugi na 12°S. Ile wynosi rozciągłość południkowa tego obszaru?",
    "options": [
      "6°",
      "30°",
      "18°",
      "36°",
      "12°"
    ],
    "answer": 1,
    "explanation": "Skrajne punkty leżą na różnych półkulach, dlatego ich szerokości geograficzne dodajemy: 18° + 12° = 30°."
  },
  {
    "id": "R02_HARD_11",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż datę, która nie odpowiada dacie równonocy lub przesilenia: 21 marca, 22 czerwca, 23 września, 22 listopada.",
    "options": null,
    "answer": "22 listopada",
    "explanation": "Równonoce i przesilenia przypadają w przybliżeniu na 21 marca, 22 czerwca, 23 września i 22 grudnia."
  },
  {
    "id": "R02_HARD_12",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile wynosi średnia roczna temperatura Włodawy po zaokrągleniu do jednego miejsca po przecinku?",
    "options": [
      "7,3°C",
      "8,1°C",
      "8,8°C",
      "8,3°C",
      "9,3°C"
    ],
    "answer": 3,
    "explanation": "Sumę 12 średnich temperatur miesięcznych (100,1°C) dzieli się przez 12, otrzymując około 8,3°C."
  }
];

const KID_PROMPTS = {
  "R02_LAD_01": "Jak nazywa się kształt Ziemi, trochę spłaszczony na biegunach?",
  "R02_LAD_09": "Kto w 1492 roku popłynął przez Atlantyk i dotarł do Karaibów?",
  "R02_KLI_01": "Co nazywamy pogodą?",
  "R02_KLI_03": "Co pokazuje linia na klimatogramie?",
  "R02_KRA_02": "Co rośnie najczęściej na sawannie?",
  "R02_KRA_07": "Jak nazywa się bezleśny krajobraz dalekiej północy?",
  "R02_RUC_03": "W którą stronę kręci się Ziemia?",
  "R02_RUC_09": "Kiedy kij wbity w ziemię rzuca najkrótszy cień?",
  "R02_WSP_01": "Z których linii odczytujemy szerokość geograficzną?",
  "R02_WSP_09": "GPS pokazuje 60°N, 75°E. Które to półkule?",
  "R02_HARD_10": "Dwa punkty leżą na 18°N i 12°S. Ile stopni dzieli je z północy na południe?"
};

const chapter = {
  id: "r02",
  number: 2,
  title: "Ziemia",
  icon: "🌍",
  sectionOrder: [
    "Lądy, oceany i odkrycia",
    "Pogoda i klimat",
    "Krajobrazy świata",
    "Układ Słoneczny i ruchy Ziemi",
    "Współrzędne geograficzne"
  ],
  sectionIcons: {
    "Lądy, oceany i odkrycia": "🌍",
    "Pogoda i klimat": "🌦️",
    "Krajobrazy świata": "🌿",
    "Układ Słoneczny i ruchy Ziemi": "☀️",
    "Współrzędne geograficzne": "🧭"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
