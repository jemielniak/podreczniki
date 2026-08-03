// Skróty sekcji (do identyfikatorów ćwiczeń):
//   EUR  = Europa Zachodnia
//   WAZ  = Wazowie i wojny z Rosją
//   KOZ  = Powstanie kozackie
//   SZW  = Wojny ze Szwecją i kryzys
//   TUR  = Wojny z Turcją
//   BAR  = Barok i sarmatyzm
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R03_EUR_01",
    "section": "Europa Zachodnia",
    "type": "single_choice",
    "prompt": "Kogo podręcznik nazywa architektem potęgi Francji w XVII wieku?",
    "options": [
      "Armanda de Richelieu",
      "Olivera Cromwella",
      "Jana III Sobieskiego",
      "Karola I Stuarta",
      "Michała I Romanowa",
      "Bohdana Chmielnickiego"
    ],
    "answer": 0,
    "explanation": "Kardynał Armand de Richelieu przez wiele lat był pierwszym ministrem królewskim i dążył do wzmocnienia władzy monarchy.",
    "image": "r03_richelieu.jpg"
  },
  {
    "id": "R03_EUR_02",
    "section": "Europa Zachodnia",
    "type": "true_false",
    "prompt": "Absolutyzm we Francji polegał na skupieniu najwyższej władzy wykonawczej, ustawodawczej i sądowniczej w rękach króla.",
    "options": null,
    "answer": true,
    "explanation": "Za panowania Ludwika XIV taki model władzy ukształtował się we Francji; król rządził bez udziału Stanów Generalnych."
  },
  {
    "id": "R03_EUR_03",
    "section": "Europa Zachodnia",
    "type": "fill_in",
    "prompt": "Symbolem potęgi Ludwika XIV był pałac w __________, a sam władca zyskał przydomek Król __________.",
    "options": null,
    "answer": [
      "Wersalu",
      "Słońce"
    ],
    "explanation": "Wersal stał się symbolem władzy absolutnej, a przydomek Król Słońce podkreślał centralną pozycję monarchy.",
    "altAnswers": [
      [
        "Wersalu",
        "Wersal"
      ],
      [
        "Słońce",
        "Słońca"
      ]
    ],
    "image": "r03_wersal.jpg"
  },
  {
    "id": "R03_EUR_04",
    "section": "Europa Zachodnia",
    "type": "multi_select",
    "prompt": "Zaznacz cechy władcy absolutnego opisane w rozdziale.",
    "options": [
      "Stanowi prawa bez przyzwolenia stanów",
      "Nakłada nowe podatki bez zgody stanów",
      "Mianuje i odwołuje urzędników według własnego upodobania",
      "Może uwięzić poddanego bez wyroku sądowego",
      "Podlega gabinetowi ministrów odpowiedzialnemu przed Parlamentem",
      "Nie może decydować o wojnie i pokoju"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Władca absolutny samodzielnie stanowił prawa, decydował o podatkach, urzędnikach, wojnie i pokoju, a nawet mógł więzić bez wyroku."
  },
  {
    "id": "R03_EUR_05",
    "section": "Europa Zachodnia",
    "type": "riddle",
    "prompt": "Jak nazywało się francuskie zgromadzenie stanowe, którego królowie przestali zwoływać po 1614 roku?",
    "options": null,
    "answer": "Stany Generalne",
    "explanation": "Stany Generalne były odpowiednikiem polskiego sejmu; ich niezwoływanie wzmacniało samodzielność monarchy.",
    "altAnswers": [
      "Stany Generalne",
      "Stany Generalnych"
    ]
  },
  {
    "id": "R03_EUR_06",
    "section": "Europa Zachodnia",
    "type": "match",
    "prompt": "Połącz postać lub akt z właściwym opisem.",
    "options": null,
    "left": [
      "Richelieu",
      "Ludwik XIV",
      "Oliver Cromwell",
      "Bill of Rights"
    ],
    "right": [
      "zasada racji stanu i wzmacnianie władzy królewskiej",
      "absolutyzm francuski i Wersal",
      "lord protektor w czasie republiki angielskiej",
      "akt ograniczający władzę króla po Wspaniałej Rewolucji"
    ],
    "answer": {
      "Richelieu": "zasada racji stanu i wzmacnianie władzy królewskiej",
      "Ludwik XIV": "absolutyzm francuski i Wersal",
      "Oliver Cromwell": "lord protektor w czasie republiki angielskiej",
      "Bill of Rights": "akt ograniczający władzę króla po Wspaniałej Rewolucji"
    },
    "explanation": "Richelieu i Ludwik XIV wiążą się z absolutyzmem francuskim, a Cromwell i Bill of Rights z drogą Anglii do monarchii parlamentarnej."
  },
  {
    "id": "R03_EUR_07",
    "section": "Europa Zachodnia",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z dziejów Anglii w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Powrót Stuartów na tron angielski",
      "Wybuch wojny domowej w Anglii",
      "Wspaniała Rewolucja",
      "Egzekucja Karola I Stuarta",
      "Unia realna Anglii i Szkocji"
    ],
    "answer": [
      "Wybuch wojny domowej w Anglii",
      "Egzekucja Karola I Stuarta",
      "Powrót Stuartów na tron angielski",
      "Wspaniała Rewolucja",
      "Unia realna Anglii i Szkocji"
    ],
    "explanation": "Wojna domowa wybuchła w 1640 roku, Karola I ścięto w 1649 roku, Stuartowie wrócili w 1660 roku, Wspaniała Rewolucja nastąpiła w 1688 roku, a unię realną zawarto w 1707 roku."
  },
  {
    "id": "R03_EUR_08",
    "section": "Europa Zachodnia",
    "type": "scenario",
    "prompt": "Po Wspaniałej Rewolucji Parlament uchwala akt, który wyklucza katolików z dziedziczenia tronu, ogranicza władzę królewską i rozszerza prawa Parlamentu. Jaki to akt?",
    "options": [
      "Deklaracja praw",
      "Edykt nantejski",
      "Pokój w Oliwie",
      "Traktat w Buczaczu",
      "Ugoda perejasławska",
      "Konstytucja 3 maja"
    ],
    "answer": 0,
    "explanation": "Deklaracja praw, czyli Bill of Rights, stała się podstawą angielskich praw konstytucyjnych i monarchii parlamentarnej.",
    "image": "r03_deklaracja_praw.jpg"
  },
  {
    "id": "R03_EUR_09",
    "section": "Europa Zachodnia",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do ustroju.",
    "options": null,
    "items": [
      "król stanowi prawa bez zgody stanów",
      "Parlament ma wyłączną moc stanowienia prawa",
      "gabinet ministrów odpowiada przed Parlamentem",
      "władza sądownicza, wykonawcza i ustawodawcza skupiona jest w ręku monarchy",
      "król pełni głównie funkcje reprezentacyjne",
      "monarcha może nakładać podatki bez zgody stanów"
    ],
    "categories": [
      "monarchia absolutna",
      "monarchia parlamentarna"
    ],
    "answer": {
      "monarchia absolutna": [
        "król stanowi prawa bez zgody stanów",
        "władza sądownicza, wykonawcza i ustawodawcza skupiona jest w ręku monarchy",
        "monarcha może nakładać podatki bez zgody stanów"
      ],
      "monarchia parlamentarna": [
        "Parlament ma wyłączną moc stanowienia prawa",
        "gabinet ministrów odpowiada przed Parlamentem",
        "król pełni głównie funkcje reprezentacyjne"
      ]
    },
    "explanation": "We Francji wzorem była władza absolutna króla, natomiast w Wielkiej Brytanii realną władzę sprawowały Parlament i odpowiedzialny przed nim rząd."
  },
  {
    "id": "R03_EUR_10",
    "section": "Europa Zachodnia",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do pozostałych: Richelieu, Ludwik XIV, Wersal, Oliver Cromwell.",
    "options": null,
    "answer": "Oliver Cromwell",
    "explanation": "Richelieu, Ludwik XIV i Wersal wiążą się z francuskim absolutyzmem, a Cromwell z republiką angielską."
  },
  {
    "id": "R03_WAZ_01",
    "section": "Wazowie i wojny z Rosją",
    "type": "single_choice",
    "prompt": "Kto był pierwszym królem Polski i Litwy z dynastii Wazów?",
    "options": [
      "Zygmunt III Waza",
      "Władysław IV Waza",
      "Jan II Kazimierz Waza",
      "Michał Korybut Wiśniowiecki",
      "Jan III Sobieski",
      "Stefan Czarniecki"
    ],
    "answer": 0,
    "explanation": "Pierwszym Wazą wybranym na tron polsko-litewski był Zygmunt III, popierany m.in. przez Annę Jagiellonkę.",
    "image": "r03_wazowie.jpg"
  },
  {
    "id": "R03_WAZ_02",
    "section": "Wazowie i wojny z Rosją",
    "type": "true_false",
    "prompt": "Od 1573 roku królowie Rzeczypospolitej byli wybierani przez szlachtę w wolnej elekcji.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik podkreśla, że od 1573 roku aż do upadku państwa wszyscy polscy królowie byli władcami elekcyjnymi."
  },
  {
    "id": "R03_WAZ_03",
    "section": "Wazowie i wojny z Rosją",
    "type": "fill_in",
    "prompt": "W 1605 roku polscy magnaci zorganizowali __________, aby osadzić w Moskwie pretendenta podającego się za __________.",
    "options": null,
    "answer": [
      "dymitriadę",
      "Dymitra"
    ],
    "explanation": "Wyprawę nazwano dymitriadą od imienia Dymitra Samozwańca, rzekomego syna Iwana Groźnego.",
    "altAnswers": [
      [
        "dymitriadę",
        "dymitriada",
        "dymitriadą"
      ],
      [
        "Dymitra",
        "Dymitr"
      ]
    ]
  },
  {
    "id": "R03_WAZ_04",
    "section": "Wazowie i wojny z Rosją",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki, które sprzyjały polskiej ingerencji w sprawy Rosji na początku XVII wieku.",
    "options": [
      "Wielka smuta po wygaśnięciu dynastii Rurykowiczów",
      "Pojawienie się Dymitra Samozwańca na ziemiach Rzeczypospolitej",
      "Poparcie części rosyjskich bojarów dla polskich planów",
      "Propozycja tronu carskiego dla królewicza Władysława",
      "Uchwalenie Bill of Rights przez Parlament",
      "Oblężenie Wiednia przez Turków"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Wielka smuta, Dymitr Samozwaniec, poparcie bojarów i propozycja tronu dla Władysława stworzyły okazję do interwencji w Rosji."
  },
  {
    "id": "R03_WAZ_05",
    "section": "Wazowie i wojny z Rosją",
    "type": "riddle",
    "prompt": "Jak nazywał się kryzys polityczny w Rosji po wymarciu dynastii Rurykowiczów?",
    "options": null,
    "answer": "wielka smuta",
    "explanation": "Wielka smuta oznaczała chaos i walki o władzę w Rosji na początku XVII wieku.",
    "altAnswers": [
      "wielka smuta",
      "smuta"
    ]
  },
  {
    "id": "R03_WAZ_06",
    "section": "Wazowie i wojny z Rosją",
    "type": "match",
    "prompt": "Połącz postać z opisem.",
    "options": null,
    "left": [
      "Dymitr Samozwaniec",
      "Jerzy Mniszech",
      "Zygmunt III Waza",
      "Michał I Romanow"
    ],
    "right": [
      "pretendent do tronu carów wspierany przez magnatów",
      "wojewoda sandomierski i stronnik Dymitra",
      "król, który oficjalnie ingerował w sprawy Rosji",
      "car wybrany w 1613 roku"
    ],
    "answer": {
      "Dymitr Samozwaniec": "pretendent do tronu carów wspierany przez magnatów",
      "Jerzy Mniszech": "wojewoda sandomierski i stronnik Dymitra",
      "Zygmunt III Waza": "król, który oficjalnie ingerował w sprawy Rosji",
      "Michał I Romanow": "car wybrany w 1613 roku"
    },
    "explanation": "Te postacie tworzą ciąg wydarzeń od dymitriady po zakończenie wielkiej smuty i początek rządów Romanowów."
  },
  {
    "id": "R03_WAZ_07",
    "section": "Wazowie i wojny z Rosją",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z Wazami i Rosją w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Pokój w Polanowie",
      "Kapitulacja polskiej załogi na Kremlu",
      "Wybór Zygmunta III Wazy na tron polsko-litewski",
      "Utrata tronu szwedzkiego przez Zygmunta III",
      "Zajęcie moskiewskiego Kremla przez wojska Rzeczypospolitej",
      "Dymitriada"
    ],
    "answer": [
      "Wybór Zygmunta III Wazy na tron polsko-litewski",
      "Utrata tronu szwedzkiego przez Zygmunta III",
      "Dymitriada",
      "Zajęcie moskiewskiego Kremla przez wojska Rzeczypospolitej",
      "Kapitulacja polskiej załogi na Kremlu",
      "Pokój w Polanowie"
    ],
    "explanation": "Zygmunt III został królem w 1587 roku, utracił tron szwedzki w 1599 roku, dymitriada zaczęła się w 1605 roku, Kreml zajęto w 1610 roku, kapitulacja nastąpiła w 1612 roku, a pokój w Polanowie podpisano w 1634 roku.",
    "image": "r03_wazowie.jpg"
  },
  {
    "id": "R03_WAZ_08",
    "section": "Wazowie i wojny z Rosją",
    "type": "scenario",
    "prompt": "Rok 1610. Siły polsko-litewskie pokonują pod tym miejscem prawie pięciokrotnie silniejszą armię rosyjską, a dużą rolę odgrywa atak husarii. O jaką bitwę chodzi?",
    "options": [
      "bitwę pod Kłuszynem",
      "bitwę pod Oliwą",
      "bitwę pod Wiedniem",
      "bitwę pod Kircholmem",
      "bitwę pod Chocimiem",
      "bitwę pod Ujściem"
    ],
    "answer": 0,
    "explanation": "Bitwa pod Kłuszynem była jednym z kluczowych zwycięstw w pierwszej fazie wojny polsko-rosyjskiej.",
    "image": "r03_kluszyn.jpg"
  },
  {
    "id": "R03_WAZ_09",
    "section": "Wazowie i wojny z Rosją",
    "type": "sort",
    "prompt": "Przyporządkuj postacie do państwa lub spraw, z którymi są w rozdziale najmocniej związane.",
    "options": null,
    "items": [
      "Zygmunt III Waza",
      "Władysław IV Waza",
      "Dymitr Samozwaniec",
      "Michał I Romanow"
    ],
    "categories": [
      "Rzeczpospolita",
      "Rosja"
    ],
    "answer": {
      "Rzeczpospolita": [
        "Zygmunt III Waza",
        "Władysław IV Waza"
      ],
      "Rosja": [
        "Dymitr Samozwaniec",
        "Michał I Romanow"
      ]
    },
    "explanation": "Zygmunt III i Władysław IV byli królami Rzeczypospolitej z dynastii Wazów, a Dymitr Samozwaniec i Michał I Romanow należą do wydarzeń związanych z tronem carów."
  },
  {
    "id": "R03_WAZ_10",
    "section": "Wazowie i wojny z Rosją",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do pozostałych: Zygmunt III Waza, Władysław IV Waza, Jan II Kazimierz Waza, Michał I Romanow.",
    "options": null,
    "answer": "Michał I Romanow",
    "explanation": "Trzej pierwsi to królowie Rzeczypospolitej z dynastii Wazów, a Michał I Romanow był carem Rosji."
  },
  {
    "id": "R03_KOZ_01",
    "section": "Powstanie kozackie",
    "type": "single_choice",
    "prompt": "Co było bezpośrednią przyczyną wybuchu powstania kozackiego w 1648 roku?",
    "options": [
      "zmniejszenie liczby Kozaków rejestrowych",
      "uchwalenie Bill of Rights",
      "pokój w Oliwie",
      "wybór Jana III Sobieskiego",
      "budowa pałacu w Wilanowie",
      "bitwa pod Kłuszynem"
    ],
    "answer": 0,
    "explanation": "Sejmowa decyzja o ograniczeniu liczby Kozaków na królewskim żołdzie wywołała wzburzenie i stała się bezpośrednim powodem buntu."
  },
  {
    "id": "R03_KOZ_02",
    "section": "Powstanie kozackie",
    "type": "true_false",
    "prompt": "Kozacy wywodzili się głównie z chłopstwa lub drobnej szlachty, wyznawali prawosławie i posługiwali się językiem ruskim.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik tak opisuje społeczne, religijne i językowe cechy Kozaków na Zaporożu."
  },
  {
    "id": "R03_KOZ_03",
    "section": "Powstanie kozackie",
    "type": "fill_in",
    "prompt": "Głównym grodem Kozaków był warowny obóz __________, a ich zwinne łodzie nazywano __________.",
    "options": null,
    "answer": [
      "Sicz",
      "czajkami"
    ],
    "explanation": "Sicz leżała na trudno dostępnych wyspach Dniepru, a czajki służyły Kozakom m.in. do wypraw przez Morze Czarne.",
    "altAnswers": [
      [
        "Sicz",
        "Siczą"
      ],
      [
        "czajkami",
        "czajka",
        "czajki"
      ]
    ],
    "image": "r03_kozacy_czajki.jpg"
  },
  {
    "id": "R03_KOZ_04",
    "section": "Powstanie kozackie",
    "type": "multi_select",
    "prompt": "Zaznacz przyczyny narastania konfliktów na Ukrainie w XVII wieku.",
    "options": [
      "Niechęć części prawosławnych do unii brzeskiej i Kościoła greckokatolickiego",
      "Porzucanie prawosławia przez wielu ukraińskich magnatów i zamożnych szlachciców",
      "Wzrost świadczeń i pańszczyzny nakładanych na chłopów",
      "Ograniczanie liczby Kozaków rejestrowych",
      "Wzniesienie pałacu w Wersalu",
      "Uchwalenie Habeas corpus w Anglii"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Konflikt miał podłoże religijne, społeczne i polityczne; bezpośrednio zaostrzyło go ograniczanie kozackiego rejestru."
  },
  {
    "id": "R03_KOZ_05",
    "section": "Powstanie kozackie",
    "type": "riddle",
    "prompt": "Kto stanął na czele powstania Kozaków w 1648 roku?",
    "options": null,
    "answer": "Bohdan Chmielnicki",
    "explanation": "Bohdan Chmielnicki był hetmanem wojsk zaporoskich i przywódcą powstania kozackiego.",
    "altAnswers": [
      "Bohdan Chmielnicki",
      "Chmielnicki"
    ],
    "image": "r03_chmielnicki.jpg"
  },
  {
    "id": "R03_KOZ_06",
    "section": "Powstanie kozackie",
    "type": "match",
    "prompt": "Połącz pojęcie z objaśnieniem.",
    "options": null,
    "left": [
      "Sicz",
      "czajki",
      "Kozacy rejestrowi",
      "osełedec"
    ],
    "right": [
      "warowny obóz kozacki na wyspach Dniepru",
      "duże łodzie używane przez Kozaków",
      "oddziały opłacane ze skarbu Rzeczypospolitej",
      "kosmyk włosów na czubku ogolonej głowy"
    ],
    "answer": {
      "Sicz": "warowny obóz kozacki na wyspach Dniepru",
      "czajki": "duże łodzie używane przez Kozaków",
      "Kozacy rejestrowi": "oddziały opłacane ze skarbu Rzeczypospolitej",
      "osełedec": "kosmyk włosów na czubku ogolonej głowy"
    },
    "explanation": "Te pojęcia opisują organizację, wygląd i sposób walki Kozaków."
  },
  {
    "id": "R03_KOZ_07",
    "section": "Powstanie kozackie",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z powstaniem kozackim i wojną z Rosją w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Rozejm w Andruszowie",
      "Wybuch powstania Chmielnickiego",
      "Ugoda w Perejasławiu",
      "Zmniejszenie liczby Kozaków rejestrowych",
      "Wybór Jana Kazimierza na tron polski"
    ],
    "answer": [
      "Zmniejszenie liczby Kozaków rejestrowych",
      "Wybuch powstania Chmielnickiego",
      "Wybór Jana Kazimierza na tron polski",
      "Ugoda w Perejasławiu",
      "Rozejm w Andruszowie"
    ],
    "explanation": "Ograniczenie rejestru poprzedziło powstanie 1648 roku; po śmierci Władysława IV królem został Jan Kazimierz, w 1654 roku zawarto ugodę w Perejasławiu, a w 1667 roku rozejm w Andruszowie."
  },
  {
    "id": "R03_KOZ_08",
    "section": "Powstanie kozackie",
    "type": "scenario",
    "prompt": "Kozacy po kolejnych walkach szukają wsparcia u prawosławnego cara. W 1654 roku zawierają porozumienie, które łączy Ukrainę z państwem carów i rozpoczyna nową wojnę Rzeczypospolitej z Rosją. Jak nazywało się to porozumienie?",
    "options": [
      "ugoda perejasławska",
      "pokój w Polanowie",
      "pokój w Oliwie",
      "traktat w Buczaczu",
      "Deklaracja praw",
      "rozejm w Jamie Zapolskim"
    ],
    "answer": 0,
    "explanation": "Ugoda perejasławska z 1654 roku połączyła Ukrainę z Rosją i zapoczątkowała kolejną wojnę Rzeczypospolitej z państwem carów."
  },
  {
    "id": "R03_KOZ_09",
    "section": "Powstanie kozackie",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do świata kozackiego albo do instytucji Rzeczypospolitej.",
    "options": null,
    "items": [
      "Sicz",
      "czajki",
      "Kozacy rejestrowi",
      "sejm",
      "szlachta",
      "Korona Polska"
    ],
    "categories": [
      "świat kozacki",
      "Rzeczpospolita"
    ],
    "answer": {
      "świat kozacki": [
        "Sicz",
        "czajki",
        "Kozacy rejestrowi"
      ],
      "Rzeczpospolita": [
        "sejm",
        "szlachta",
        "Korona Polska"
      ]
    },
    "explanation": "Sicz, czajki i rejestr opisują Kozaków, natomiast sejm, szlachta i Korona Polska należą do ustroju i organizacji Rzeczypospolitej."
  },
  {
    "id": "R03_KOZ_10",
    "section": "Powstanie kozackie",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do pozostałych: Sicz, czajka, Zaporoże, Wersal.",
    "options": null,
    "answer": "Wersal",
    "explanation": "Sicz, czajka i Zaporoże wiążą się z Kozakami, a Wersal z absolutyzmem francuskim."
  },
  {
    "id": "R03_SZW_01",
    "section": "Wojny ze Szwecją i kryzys",
    "type": "single_choice",
    "prompt": "Jaką nazwą określono najazd szwedzki z lat 1655-1657?",
    "options": [
      "potop szwedzki",
      "wielka smuta",
      "Wspaniała Rewolucja",
      "dymitriada",
      "rokosz Lubomirskiego",
      "odsiecz wiedeńska"
    ],
    "answer": 0,
    "explanation": "Większość ziem Polski i Litwy znalazła się wtedy pod okupacją wojsk szwedzkich, dlatego wojnę nazwano potopem szwedzkim."
  },
  {
    "id": "R03_SZW_02",
    "section": "Wojny ze Szwecją i kryzys",
    "type": "true_false",
    "prompt": "Pokój w Oliwie z 1660 roku potwierdził, że Rzeczpospolita utraciła większą część Inflant na rzecz Szwecji.",
    "options": null,
    "answer": true,
    "explanation": "Po wyparciu Szwedów z kraju Rzeczpospolita była zbyt wyczerpana, aby odzyskać Inflanty; uznała ich utratę w pokoju oliwskim."
  },
  {
    "id": "R03_SZW_03",
    "section": "Wojny ze Szwecją i kryzys",
    "type": "fill_in",
    "prompt": "Obroną Jasnej Góry w 1655 roku kierował przeor __________ __________.",
    "options": null,
    "answer": [
      "Augustyn",
      "Kordecki"
    ],
    "explanation": "Ksiądz Augustyn Kordecki odmówił kapitulacji i stanął na czele obrony klasztoru paulinów w Częstochowie.",
    "altAnswers": [
      [
        "Augustyn",
        "Augustyna"
      ],
      [
        "Kordecki",
        "Kordeckiego"
      ]
    ],
    "image": "r03_jasna_gora.jpg"
  },
  {
    "id": "R03_SZW_04",
    "section": "Wojny ze Szwecją i kryzys",
    "type": "multi_select",
    "prompt": "Zaznacz przyczyny lub okoliczności wojen Rzeczypospolitej ze Szwecją.",
    "options": [
      "Wazowie w Rzeczypospolitej nie chcieli zrzec się tytułu króla Szwecji",
      "Obu państwom zależało na wpływach nad Morzem Bałtyckim",
      "Kontrola ceł od handlu bałtyckiego dawała duże dochody",
      "Karol Gustaw wykorzystał uwikłanie Rzeczypospolitej w wojnę z Rosją i Kozakami",
      "Turcy zdobyli Kamieniec Podolski",
      "Parlament angielski uchwalił Bill of Rights"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Spór dynastyczny Wazów i rywalizacja o Bałtyk trwały długo, a potop był możliwy także dlatego, że Rzeczpospolita była uwikłana w inne wojny."
  },
  {
    "id": "R03_SZW_05",
    "section": "Wojny ze Szwecją i kryzys",
    "type": "riddle",
    "prompt": "Który litewski magnat uznał władzę króla szwedzkiego i chciał zerwać unię Litwy z Koroną Polską?",
    "options": null,
    "answer": "Janusz Radziwiłł",
    "explanation": "Hetman Janusz Radziwiłł uznał władzę Karola Gustawa i zamierzał połączyć Wielkie Księstwo Litewskie unią ze Szwecją.",
    "altAnswers": [
      "Janusz Radziwiłł",
      "Radziwiłł",
      "Janusz Radziwill"
    ]
  },
  {
    "id": "R03_SZW_06",
    "section": "Wojny ze Szwecją i kryzys",
    "type": "match",
    "prompt": "Połącz wydarzenie z datą lub znaczeniem.",
    "options": null,
    "left": [
      "Kircholm",
      "bitwa pod Oliwą",
      "Jasna Góra",
      "pokój w Oliwie"
    ],
    "right": [
      "zwycięstwo z 1605 roku nad trzykrotnie silniejszą armią szwedzką",
      "zwycięstwo floty polskiej z 1627 roku",
      "obrona klasztoru w 1655 roku",
      "traktat pokojowy ze Szwecją z 1660 roku"
    ],
    "answer": {
      "Kircholm": "zwycięstwo z 1605 roku nad trzykrotnie silniejszą armią szwedzką",
      "bitwa pod Oliwą": "zwycięstwo floty polskiej z 1627 roku",
      "Jasna Góra": "obrona klasztoru w 1655 roku",
      "pokój w Oliwie": "traktat pokojowy ze Szwecją z 1660 roku"
    },
    "explanation": "Te punkty pokazują drogę od sukcesów Rzeczypospolitej do wyczerpującego potopu i pokoju kończącego wojnę."
  },
  {
    "id": "R03_SZW_07",
    "section": "Wojny ze Szwecją i kryzys",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z wojnami szwedzkimi i kryzysem Rzeczypospolitej w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Pokój w Oliwie",
      "Wprowadzenie liberum veto do obrad sejmowych",
      "Bitwa pod Oliwą",
      "Obrona Jasnej Góry",
      "Bitwa pod Kircholmem",
      "Odzyskanie Warszawy z rąk szwedzkich"
    ],
    "answer": [
      "Bitwa pod Kircholmem",
      "Bitwa pod Oliwą",
      "Wprowadzenie liberum veto do obrad sejmowych",
      "Obrona Jasnej Góry",
      "Odzyskanie Warszawy z rąk szwedzkich",
      "Pokój w Oliwie"
    ],
    "explanation": "Kircholm to 1605 rok, bitwa morska pod Oliwą 1627, liberum veto pojawiło się w 1652, obrona Jasnej Góry w 1655, Warszawę odzyskano w 1656, a pokój zawarto w 1660 roku."
  },
  {
    "id": "R03_SZW_08",
    "section": "Wojny ze Szwecją i kryzys",
    "type": "scenario",
    "prompt": "Niewielka załoga klasztoru przez czterdzieści dni broni się przed przeważającymi siłami szwedzkimi. Wydarzenie ma ogromne znaczenie moralne dla oporu przeciw najeźdźcy. O jakie miejsce chodzi?",
    "options": [
      "Jasną Górę",
      "Wilanów",
      "Kreml",
      "Wersal",
      "Kamieniec Podolski",
      "Krzyżtopór"
    ],
    "answer": 0,
    "explanation": "Obrona Jasnej Góry w Częstochowie w 1655 roku stała się symbolem narastającego oporu wobec Szwedów.",
    "image": "r03_jasna_gora.jpg"
  },
  {
    "id": "R03_SZW_09",
    "section": "Wojny ze Szwecją i kryzys",
    "type": "sort",
    "prompt": "Przyporządkuj skutki połowy XVII wieku do kategorii.",
    "options": null,
    "items": [
      "zrujnowane miasta i majątki",
      "spadek dochodów podatkowych",
      "wzrost pańszczyzny",
      "rokosz Lubomirskiego",
      "wprowadzenie liberum veto",
      "wzrost znaczenia magnatów"
    ],
    "categories": [
      "skutki gospodarcze i społeczne",
      "skutki polityczne"
    ],
    "answer": {
      "skutki gospodarcze i społeczne": [
        "zrujnowane miasta i majątki",
        "spadek dochodów podatkowych",
        "wzrost pańszczyzny"
      ],
      "skutki polityczne": [
        "rokosz Lubomirskiego",
        "wprowadzenie liberum veto",
        "wzrost znaczenia magnatów"
      ]
    },
    "explanation": "Wojny przyniosły kryzys gospodarczy, wzrost obciążeń chłopów i osłabienie państwa, które ujawniło się w sporach politycznych i liberum veto.",
    "image": "r03_krzyztopor.jpg"
  },
  {
    "id": "R03_SZW_10",
    "section": "Wojny ze Szwecją i kryzys",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do pozostałych: Kircholm, Trzciana, Oliwa, Buczacz.",
    "options": null,
    "answer": "Buczacz",
    "explanation": "Kircholm, Trzciana i Oliwa wiążą się z wojnami ze Szwecją, a Buczacz z konfliktem z Turcją."
  },
  {
    "id": "R03_TUR_01",
    "section": "Wojny z Turcją",
    "type": "single_choice",
    "prompt": "Który traktat z 1672 roku nazwano upokarzającym dla Rzeczypospolitej, bo nakazywał oddanie ziem i płacenie haraczu sułtanowi?",
    "options": [
      "traktat w Buczaczu",
      "pokój w Oliwie",
      "pokój w Polanowie",
      "rozejm w Andruszowie",
      "Bill of Rights",
      "ugoda perejasławska"
    ],
    "answer": 0,
    "explanation": "Traktat w Buczaczu zobowiązywał Rzeczpospolitą do oddania dużej części południowej Ukrainy i płacenia Turcji haraczu."
  },
  {
    "id": "R03_TUR_02",
    "section": "Wojny z Turcją",
    "type": "true_false",
    "prompt": "Tatarzy krymscy byli lennikami Turcji i wielokrotnie najeżdżali południowo-wschodnie ziemie Rzeczypospolitej.",
    "options": null,
    "answer": true,
    "explanation": "Najazdy tatarskie były jedną z przyczyn pogorszenia stosunków polsko-tureckich na początku XVII wieku."
  },
  {
    "id": "R03_TUR_03",
    "section": "Wojny z Turcją",
    "type": "fill_in",
    "prompt": "Jan Sobieski odniósł w 1673 roku zwycięstwo pod __________, a w 1683 roku pod __________.",
    "options": null,
    "answer": [
      "Chocimiem",
      "Wiedniem"
    ],
    "explanation": "Zwycięstwo pod Chocimiem przyniosło Sobieskiemu popularność, a odsiecz wiedeńska była ostatnim wielkim zwycięstwem Rzeczypospolitej w XVII wieku.",
    "altAnswers": [
      [
        "Chocimiem",
        "Chocim"
      ],
      [
        "Wiedniem",
        "Wiedeń"
      ]
    ]
  },
  {
    "id": "R03_TUR_04",
    "section": "Wojny z Turcją",
    "type": "multi_select",
    "prompt": "Zaznacz cechy husarii opisane w rozdziale.",
    "options": [
      "Była najcięższą i najsłynniejszą formacją wojskową Rzeczypospolitej",
      "Zmasowaną szarżą rozbijała szeregi przeciwnika",
      "Charakterystyczną cechą były skrzydła mocowane do siodła lub zbroi",
      "Początkowo była jazdą lekką, a z czasem stała się jazdą ciężką",
      "Była oddziałem piechoty walczącym muszkietami",
      "Składała się z niezbyt zdyscyplinowanego pospolitego ruszenia"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Husaria przeszła od jazdy lekkiej do ciężkiej i zasłynęła skutecznymi szarżami oraz charakterystycznymi skrzydłami.",
    "image": "r03_husaria.jpg"
  },
  {
    "id": "R03_TUR_05",
    "section": "Wojny z Turcją",
    "type": "riddle",
    "prompt": "Jaka turecka nazwa Polski występuje w przydomku Jana Sobieskiego: Lew...?",
    "options": null,
    "answer": "Lechistanu",
    "explanation": "Turcy nazywali Sobieskiego Lwem Lechistanu, bo Lechistan to turecka nazwa Polski.",
    "altAnswers": [
      "Lechistanu",
      "Lechistan"
    ]
  },
  {
    "id": "R03_TUR_06",
    "section": "Wojny z Turcją",
    "type": "match",
    "prompt": "Połącz miejsce lub akt z opisem.",
    "options": null,
    "left": [
      "Kamieniec Podolski",
      "Buczacz",
      "Chocim",
      "Wiedeń"
    ],
    "right": [
      "twierdza zdobyta przez Turków w 1672 roku",
      "upokarzający traktat z Turcją",
      "zwycięstwo Sobieskiego w 1673 roku",
      "odsiecz Jana III Sobieskiego w 1683 roku"
    ],
    "answer": {
      "Kamieniec Podolski": "twierdza zdobyta przez Turków w 1672 roku",
      "Buczacz": "upokarzający traktat z Turcją",
      "Chocim": "zwycięstwo Sobieskiego w 1673 roku",
      "Wiedeń": "odsiecz Jana III Sobieskiego w 1683 roku"
    },
    "explanation": "Te miejsca wyznaczają najważniejsze etapy konfliktu Rzeczypospolitej z Turcją w drugiej połowie XVII wieku."
  },
  {
    "id": "R03_TUR_07",
    "section": "Wojny z Turcją",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z konfliktu polsko-tureckiego w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Bitwa pod Wiedniem",
      "Traktat w Buczaczu",
      "Bitwa pod Chocimiem",
      "Wybór Jana Sobieskiego na króla",
      "Zdobycie Kamieńca Podolskiego przez Turków"
    ],
    "answer": [
      "Zdobycie Kamieńca Podolskiego przez Turków",
      "Traktat w Buczaczu",
      "Bitwa pod Chocimiem",
      "Wybór Jana Sobieskiego na króla",
      "Bitwa pod Wiedniem"
    ],
    "explanation": "Turcy zdobyli Kamieniec w 1672 roku, potem podpisano traktat w Buczaczu, Sobieski wygrał pod Chocimiem w 1673 roku, został królem w 1674 roku, a w 1683 roku zwyciężył pod Wiedniem.",
    "image": "r03_wieden.jpg"
  },
  {
    "id": "R03_TUR_08",
    "section": "Wojny z Turcją",
    "type": "scenario",
    "prompt": "Prawie stutysięczna armia turecka oblega stolicę Austrii. Jan III Sobieski z 27 tysiącami żołnierzy obejmuje dowództwo nad wojskami sprzymierzonych i rozbija armię sułtana. O jaką bitwę chodzi?",
    "options": [
      "bitwę pod Wiedniem",
      "bitwę pod Chocimiem",
      "bitwę pod Kłuszynem",
      "bitwę pod Kircholmem",
      "bitwę pod Oliwą",
      "bitwę pod Zbarażem"
    ],
    "answer": 0,
    "explanation": "W 1683 roku Sobieski poprowadził odsiecz Wiednia i odniósł wielkie zwycięstwo nad Turkami.",
    "image": "r03_wieden.jpg"
  },
  {
    "id": "R03_TUR_09",
    "section": "Wojny z Turcją",
    "type": "sort",
    "prompt": "Przyporządkuj formacje do sposobu walki opisanego w rozdziale.",
    "options": null,
    "items": [
      "husaria",
      "towarzysze pancerni",
      "jazda tatarska",
      "muszkieterzy",
      "dragoni"
    ],
    "categories": [
      "jazda",
      "piechota lub walka piesza"
    ],
    "answer": {
      "jazda": [
        "husaria",
        "towarzysze pancerni",
        "jazda tatarska"
      ],
      "piechota lub walka piesza": [
        "muszkieterzy",
        "dragoni"
      ]
    },
    "explanation": "Husaria, towarzysze pancerni i jazda tatarska walczyli konno; muszkieterzy byli piechotą, a dragoni przemieszczali się konno, lecz walczyli pieszo.",
    "image": "r03_husaria.jpg"
  },
  {
    "id": "R03_TUR_10",
    "section": "Wojny z Turcją",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do pozostałych: Chocim, Wiedeń, Buczacz, Andruszów.",
    "options": null,
    "answer": "Andruszów",
    "explanation": "Chocim, Wiedeń i Buczacz wiążą się z wojnami z Turcją, a Andruszów z wojną Rzeczypospolitej z Rosją."
  },
  {
    "id": "R03_BAR_01",
    "section": "Barok i sarmatyzm",
    "type": "single_choice",
    "prompt": "Który kraj był u schyłku XVI wieku kolebką baroku?",
    "options": [
      "Włochy",
      "Szwecja",
      "Rosja",
      "Anglia",
      "Turcja",
      "Holandia"
    ],
    "answer": 0,
    "explanation": "Podręcznik wskazuje Włochy jako miejsce narodzin kolejnej po renesansie epoki sztuki, literatury i muzyki."
  },
  {
    "id": "R03_BAR_02",
    "section": "Barok i sarmatyzm",
    "type": "true_false",
    "prompt": "Kultura baroku rozprzestrzeniła się w całej Europie w XVII wieku i trwała do początków XVIII stulecia.",
    "options": null,
    "answer": true,
    "explanation": "Barok objął całą Europę w XVII wieku, a jego oddziaływanie trwało jeszcze na początku XVIII wieku.",
    "image": "r03_kosciol_barokowy.jpg"
  },
  {
    "id": "R03_BAR_03",
    "section": "Barok i sarmatyzm",
    "type": "fill_in",
    "prompt": "Nazwa barok wywodzi się prawdopodobnie od portugalskiego słowa __________, oznaczającego perłę o dziwnym i niezwykłym kształcie.",
    "options": null,
    "answer": [
      "barroco"
    ],
    "explanation": "Słowo barroco dobrze oddaje zamiłowanie baroku do form niezwykłych, dynamicznych i bogatych.",
    "altAnswers": [
      [
        "barroco"
      ]
    ]
  },
  {
    "id": "R03_BAR_04",
    "section": "Barok i sarmatyzm",
    "type": "multi_select",
    "prompt": "Zaznacz cechy sztuki barokowej opisane w rozdziale.",
    "options": [
      "Formy pełne ruchu",
      "Dążenie do realistycznego przedstawienia ciała i natury",
      "Odwoływanie się do emocji i przeżyć religijnych",
      "Bogactwo i przepych dekoracji",
      "Ostre kontrasty światła i cienia",
      "Całkowite odrzucenie elementów sztuki starożytnej"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Artyści baroku korzystali też z elementów antycznych, ale nadawali im dynamiczną, emocjonalną i bogato zdobioną formę.",
    "image": "r03_kosciol_barokowy.jpg"
  },
  {
    "id": "R03_BAR_05",
    "section": "Barok i sarmatyzm",
    "type": "riddle",
    "prompt": "Jak nazywamy różne przejawy kultury szlacheckiej w Rzeczypospolitej okresu baroku?",
    "options": null,
    "answer": "sarmatyzm",
    "explanation": "Sarmatyzm łączył wpływy zachodnioeuropejskie z elementami kultury orientalnej i był związany ze szlachtą Rzeczypospolitej.",
    "altAnswers": [
      "sarmatyzm",
      "kultura sarmatyzmu"
    ]
  },
  {
    "id": "R03_BAR_06",
    "section": "Barok i sarmatyzm",
    "type": "match",
    "prompt": "Połącz zabytek lub zjawisko z opisem.",
    "options": null,
    "left": [
      "Il Gesu",
      "kościół Świętych Piotra i Pawła w Krakowie",
      "Wilanów",
      "portret trumienny"
    ],
    "right": [
      "rzymska świątynia będąca wzorem baroku",
      "krakowski kościół wzorowany na Il Gesu",
      "rezydencja Sobieskiego inspirowana Wersalem",
      "wizerunek charakterystyczny dla sarmatyzmu"
    ],
    "answer": {
      "Il Gesu": "rzymska świątynia będąca wzorem baroku",
      "kościół Świętych Piotra i Pawła w Krakowie": "krakowski kościół wzorowany na Il Gesu",
      "Wilanów": "rezydencja Sobieskiego inspirowana Wersalem",
      "portret trumienny": "wizerunek charakterystyczny dla sarmatyzmu"
    },
    "explanation": "Zabytki i zjawiska pokazują europejskie oraz polsko-litewskie oblicza baroku i sarmatyzmu.",
    "image": "r03_wilanow.jpg"
  },
  {
    "id": "R03_BAR_07",
    "section": "Barok i sarmatyzm",
    "type": "sequence",
    "prompt": "Ułóż zjawiska z dziejów baroku w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Barok trwa do początków XVIII wieku",
      "Włochy stają się kolebką baroku",
      "Wzniesienie kościoła Świętych Piotra i Pawła w Krakowie",
      "Barok rozprzestrzenia się w Europie w XVII wieku",
      "Powstanie rezydencji Sobieskiego w Wilanowie"
    ],
    "answer": [
      "Włochy stają się kolebką baroku",
      "Wzniesienie kościoła Świętych Piotra i Pawła w Krakowie",
      "Barok rozprzestrzenia się w Europie w XVII wieku",
      "Powstanie rezydencji Sobieskiego w Wilanowie",
      "Barok trwa do początków XVIII wieku"
    ],
    "explanation": "Barok narodził się u schyłku XVI wieku we Włoszech; krakowski kościół zbudowano w latach 1605-1619, barok dominował w XVII wieku, Wilanów powstał u schyłku tego wieku, a epoka trwała do początków XVIII stulecia.",
    "image": "r03_wilanow.jpg"
  },
  {
    "id": "R03_BAR_08",
    "section": "Barok i sarmatyzm",
    "type": "scenario",
    "prompt": "Szlachcic podkreśla swoje przywiązanie do wolnej elekcji, złotej wolności i rodzimego stroju: żupana, kontusza oraz pasa. Jaką kulturę reprezentuje?",
    "options": [
      "sarmatyzm",
      "absolutyzm",
      "purytanizm",
      "samodzierżawie",
      "kalwinizm",
      "humanizm"
    ],
    "answer": 0,
    "explanation": "Takie elementy stroju i pochwała złotej wolności są charakterystyczne dla kultury sarmatyzmu."
  },
  {
    "id": "R03_BAR_09",
    "section": "Barok i sarmatyzm",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do nurtu kultury barokowej.",
    "options": null,
    "items": [
      "organy w kościele",
      "ołtarze imitujące złoto i marmur",
      "sceny z życia świętych",
      "Lekcja anatomii doktora Tulpa",
      "Dziewczyna z perłą",
      "martwa natura"
    ],
    "categories": [
      "katolicki barok kościelny",
      "protestanckie malarstwo świeckie"
    ],
    "answer": {
      "katolicki barok kościelny": [
        "organy w kościele",
        "ołtarze imitujące złoto i marmur",
        "sceny z życia świętych"
      ],
      "protestanckie malarstwo świeckie": [
        "Lekcja anatomii doktora Tulpa",
        "Dziewczyna z perłą",
        "martwa natura"
      ]
    },
    "explanation": "W krajach katolickich barok służył m.in. Kościołowi, a w krajach protestanckich rozwinęło się świeckie malarstwo niderlandzkie."
  },
  {
    "id": "R03_BAR_10",
    "section": "Barok i sarmatyzm",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do pozostałych: żupan, kontusz, pas słucki, Bill of Rights.",
    "options": null,
    "answer": "Bill of Rights",
    "explanation": "Żupan, kontusz i pas słucki wiążą się ze strojem sarmackim, a Bill of Rights z ustrojem Anglii."
  },
  {
    "id": "R03_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W którym roku Ludwik XIV zniósł wieloletni pokój religijny i próbował zmusić hugenotów do przyjęcia katolicyzmu?",
    "options": [
      "1685",
      "1649",
      "1660",
      "1672",
      "1634",
      "1658"
    ],
    "answer": 0,
    "explanation": "W 1685 roku Ludwik XIV zakończył okres tolerancji wobec francuskich kalwinistów, czyli hugenotów."
  },
  {
    "id": "R03_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz postanowienia lub zasady wymienione w fragmentach Bill of Rights.",
    "options": [
      "Zawieszanie praw bez zgody parlamentu jest bezprawiem",
      "Ściąganie pieniędzy na użytek Korony bez zezwolenia parlamentu jest bezprawiem",
      "Utrzymywanie stałych armii w czasie pokoju bez zgody parlamentu jest sprzeczne z prawem",
      "Wybór członków parlamentu ma być swobodny",
      "Król może uwięzić każdego poddanego bez wyroku sądowego",
      "Katolicy mają pierwszeństwo w dziedziczeniu tronu"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Bill of Rights ograniczał samowolę króla w sprawach prawa, podatków i armii oraz wzmacniał swobodę parlamentu."
  },
  {
    "id": "R03_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Wojska polsko-litewskie okupowały Moskwę od roku __________ do roku __________, a polska załoga na Kremlu skapitulowała w roku __________.",
    "options": null,
    "answer": [
      "1610",
      "1612",
      "1612"
    ],
    "explanation": "Kreml zajęto w 1610 roku, a po oblężeniu polska załoga skapitulowała w 1612 roku.",
    "altAnswers": [
      [
        "1610",
        "1610 r."
      ],
      [
        "1612",
        "1612 r."
      ],
      [
        "1612",
        "1612 r."
      ]
    ],
    "image": "r03_kluszyn.jpg"
  },
  {
    "id": "R03_HARD_04",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywała się córka Jerzego Mniszcha, którą poślubił Dymitr Samozwaniec?",
    "options": null,
    "answer": "Maryna Mniszchówna",
    "explanation": "Maryna Mniszchówna była córką wojewody sandomierskiego Jerzego Mniszcha i żoną Dymitra Samozwańca.",
    "altAnswers": [
      "Maryna Mniszchówna",
      "Maryna Mniszech",
      "Mniszchówna"
    ]
  },
  {
    "id": "R03_HARD_05",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W 1654 roku porozumienie zawarte przez Bohdana Chmielnickiego z państwem carów połączyło Ukrainę z Rosją i doprowadziło do długiej wojny Rzeczypospolitej z Rosją. Jak nazywało się to porozumienie?",
    "options": [
      "ugoda perejasławska",
      "pokój w Polanowie",
      "pokój w Oliwie",
      "traktat w Buczaczu",
      "unia lubelska",
      "Deklaracja praw"
    ],
    "answer": 0,
    "explanation": "Ugoda perejasławska była punktem zwrotnym powstania kozackiego i zapoczątkowała wojnę zakończoną rozejmem w Andruszowie."
  },
  {
    "id": "R03_HARD_06",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz układ pokojowy lub rozejm ze skutkiem opisanym w rozdziale.",
    "options": null,
    "left": [
      "Polanów 1634",
      "Andruszów 1667",
      "Oliwa 1660",
      "Buczacz 1672"
    ],
    "right": [
      "potwierdzenie zwierzchnictwa Rzeczypospolitej m.in. nad Smoleńskiem",
      "oddanie Rosji Zadnieprza wraz z Kijowem",
      "uznanie utraty większej części Inflant i zrzeczenie się tytułu króla Szwecji",
      "oddanie Turcji części południowej Ukrainy i zobowiązanie do haraczu"
    ],
    "answer": {
      "Polanów 1634": "potwierdzenie zwierzchnictwa Rzeczypospolitej m.in. nad Smoleńskiem",
      "Andruszów 1667": "oddanie Rosji Zadnieprza wraz z Kijowem",
      "Oliwa 1660": "uznanie utraty większej części Inflant i zrzeczenie się tytułu króla Szwecji",
      "Buczacz 1672": "oddanie Turcji części południowej Ukrainy i zobowiązanie do haraczu"
    },
    "explanation": "Każde z tych porozumień zamykało inny konflikt i miało odmienne skutki terytorialne lub polityczne."
  },
  {
    "id": "R03_HARD_07",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Według ramki z podręcznika Władysław Siciński w 1652 roku od razu zerwał cały sejm na samym początku obrad.",
    "options": null,
    "answer": false,
    "explanation": "Ramka wyjaśnia, że Siciński zawetował przedłużenie obrad poza określony prawem czas; dopiero później zaczęto zrywać sejmy coraz częściej i nawet na początku obrad."
  },
  {
    "id": "R03_HARD_08",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z całego działu w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Potop szwedzki",
      "Dymitriada",
      "Wprowadzenie liberum veto",
      "Pokój w Polanowie",
      "Bitwa pod Wiedniem",
      "Powstanie Chmielnickiego"
    ],
    "answer": [
      "Dymitriada",
      "Pokój w Polanowie",
      "Powstanie Chmielnickiego",
      "Wprowadzenie liberum veto",
      "Potop szwedzki",
      "Bitwa pod Wiedniem"
    ],
    "explanation": "Dymitriada to 1605 rok, pokój w Polanowie 1634, powstanie Chmielnickiego 1648, liberum veto 1652, potop 1655-1657, a bitwa pod Wiedniem 1683 rok.",
    "image": "r03_husaria.jpg"
  },
  {
    "id": "R03_HARD_09",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do pozostałych: tymf, Andrzej Tymf, złotówka 30 groszy, haracz.",
    "options": null,
    "answer": "haracz",
    "explanation": "Tymf, Andrzej Tymf i złotówka 30 groszy wiążą się z kryzysem pieniądza w Rzeczypospolitej, a haracz był daniną wymuszoną przez Turcję w traktacie buczackim."
  },
  {
    "id": "R03_HARD_10",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Po zwycięstwie w ręce polskie wpadają ogromne łupy z tureckiego obozu, m.in. sztandary. Jeden z nich, zwany Sztandarem Proroka, zwycięzca przekazuje papieżowi. O którą bitwę chodzi?",
    "options": [
      "bitwę pod Wiedniem",
      "bitwę pod Kircholmem",
      "bitwę pod Oliwą",
      "bitwę pod Kłuszynem",
      "bitwę pod Chocimiem",
      "bitwę pod Ujściem"
    ],
    "answer": 0,
    "explanation": "Po bitwie pod Wiedniem w 1683 roku zdobyto turecki obóz, a część trofeów trafiła m.in. do papieża i na Wawel.",
    "image": "r03_wieden.jpg"
  },
  {
    "id": "R03_HARD_11",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz cechy kultury sarmatyzmu opisane w rozdziale.",
    "options": [
      "Pochwała złotej wolności szlacheckiej",
      "Przywiązanie do rodzimych instytucji politycznych",
      "Łączenie wpływów zachodnioeuropejskich z orientalnymi",
      "Niechęć do absolutyzmu i części obyczajów zachodnich",
      "Całkowita równość szlachty, mieszczan i chłopów",
      "Odrzucenie wolnej elekcji jako symbolu złotej wolności"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Sarmatyzm wzmacniał szlachecką tożsamość, łączył różne wpływy kulturowe i chwalił instytucje takie jak wolna elekcja."
  },
  {
    "id": "R03_HARD_12",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Co wyróżniało portrety trumienne w kulturze sarmatyzmu?",
    "options": [
      "Malowano je na blasze w kształcie wielokąta odpowiadającego przekrojowi trumny",
      "Wieszano je wyłącznie w Wersalu jako portrety monarchów",
      "Były mapami bitew z czasów potopu",
      "Przedstawiały tylko protestanckich kupców niderlandzkich",
      "Służyły do podpisywania aktów sejmowych",
      "Zawsze zawierały tekst Bill of Rights"
    ],
    "answer": 0,
    "explanation": "Portret trumienny mocowano przy głowie zmarłego, a po pogrzebie często wieszano na ścianie kościoła; był charakterystyczny dla sarmatyzmu.",
    "image": "r03_portret_trumienny.jpg"
  }
];

const KID_PROMPTS = {};

const chapter = {
  "id": "r03",
  "number": 3,
  "title": "Europa i Polska w XVII wieku",
  "icon": "⚔️",
  "sectionOrder": [
    "Europa Zachodnia",
    "Wazowie i wojny z Rosją",
    "Powstanie kozackie",
    "Wojny ze Szwecją i kryzys",
    "Wojny z Turcją",
    "Barok i sarmatyzm"
  ],
  "sectionIcons": {
    "Europa Zachodnia": "👑",
    "Wazowie i wojny z Rosją": "🦅",
    "Powstanie kozackie": "⚔️",
    "Wojny ze Szwecją i kryzys": "🌊",
    "Wojny z Turcją": "🛡️",
    "Barok i sarmatyzm": "🎭"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
