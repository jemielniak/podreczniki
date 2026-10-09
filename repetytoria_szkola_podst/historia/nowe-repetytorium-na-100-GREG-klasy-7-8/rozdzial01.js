// Skróty sekcji (do identyfikatorów ćwiczeń):
//   KPI  = Kongres, przemysł i idee XIX wieku
//   POL  = Ziemie polskie 1815-1848 i powstanie listopadowe
//   SWI  = Zjednoczenia, wojna secesyjna i kolonializm
//   BEL  = Belle époque, nauka i sztuka
//   ZAB  = Ziemie polskie po 1863 roku
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_KPI_01",
    "section": "Kongres, przemysł i idee XIX wieku",
    "type": "single_choice",
    "prompt": "Która zasada kongresu wiedeńskiego oznaczała powrót na trony dynastii obalonych przez Napoleona?",
    "options": [
      "restauracji",
      "legitymizmu",
      "równowagi europejskiej",
      "suwerenności ludu",
      "samostanowienia narodów",
      "federalizmu"
    ],
    "answer": 0,
    "image": "r01_kongres_wiedenski.jpg",
    "explanation": "Zasada restauracji zakładała przywrócenie obalonych dynastii i dawnych ustrojów."
  },
  {
    "id": "R01_KPI_02",
    "section": "Kongres, przemysł i idee XIX wieku",
    "type": "multi_select",
    "prompt": "Zaznacz postanowienia kongresu wiedeńskiego dotyczące ziem polskich.",
    "options": [
      "Utworzenie Królestwa Polskiego w unii personalnej z Rosją",
      "Utworzenie Wielkiego Księstwa Poznańskiego pod panowaniem Prus",
      "Utworzenie Rzeczpospolitej Krakowskiej pod opieką trzech zaborców",
      "Przyłączenie całego Księstwa Warszawskiego do Austrii",
      "Przekazanie Gdańska Rosji"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Po kongresie większość Księstwa Warszawskiego utworzyła Królestwo Polskie związane unią personalną z Rosją, Wielkopolska znalazła się w Prusach jako Wielkie Księstwo Poznańskie, a Kraków z okolicą utworzył Rzeczpospolitą Krakowską pod opieką trzech zaborców."
  },
  {
    "id": "R01_KPI_03",
    "section": "Kongres, przemysł i idee XIX wieku",
    "type": "true_false",
    "prompt": "Święte Przymierze miało pomagać w utrzymaniu ładu ustalonego na kongresie wiedeńskim i przeciwdziałać buntom wywoływanym przez ruchy społeczno-narodowe.",
    "options": null,
    "answer": true,
    "explanation": "Święte Przymierze utworzyły w 1815 r. Rosja, Prusy i Austria, a jego celem było podtrzymywanie porządku wiedeńskiego."
  },
  {
    "id": "R01_KPI_04",
    "section": "Kongres, przemysł i idee XIX wieku",
    "type": "fill_in",
    "prompt": "Rewolucja przemysłowa rozpoczęła się na przełomie XVIII i XIX w. w __________ i oznaczała przejście od produkcji __________ do fabrycznej.",
    "options": null,
    "answer": [
      "Anglii",
      "manufakturowej"
    ],
    "image": "r01_maszyna_parowa.jpg",
    "explanation": "Rewolucja przemysłowa rozpoczęła się w Anglii i oznaczała przejście od produkcji manufakturowej do fabrycznej na dużą skalę."
  },
  {
    "id": "R01_KPI_05",
    "section": "Kongres, przemysł i idee XIX wieku",
    "type": "match",
    "prompt": "Połącz wynalazcę z osiągnięciem.",
    "options": null,
    "left": [
      "James Watt",
      "George Stephenson",
      "Samuel Morse",
      "James Hargreaves"
    ],
    "right": [
      "maszyna parowa",
      "pierwsza lokomotywa",
      "telegraf",
      "spinning Jenny"
    ],
    "answer": {
      "James Watt": "maszyna parowa",
      "George Stephenson": "pierwsza lokomotywa",
      "Samuel Morse": "telegraf",
      "James Hargreaves": "spinning Jenny"
    },
    "image": "r01_maszyna_parowa.jpg",
    "explanation": "James Watt jest związany z maszyną parową, George Stephenson z pierwszą lokomotywą, Samuel Morse z telegrafem, a James Hargreaves z mechaniczną przędzarką spinning Jenny."
  },
  {
    "id": "R01_KPI_06",
    "section": "Kongres, przemysł i idee XIX wieku",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do odpowiednich ideologii XIX wieku.",
    "options": null,
    "items": [
      "powolne przemiany społeczne",
      "szacunek dla tradycji",
      "wolność jednostki",
      "równość obywateli wobec prawa",
      "walka klas",
      "ogólnoświatowa rewolucja"
    ],
    "categories": [
      "konserwatyzm",
      "liberalizm",
      "marksizm"
    ],
    "answer": {
      "konserwatyzm": [
        "powolne przemiany społeczne",
        "szacunek dla tradycji"
      ],
      "liberalizm": [
        "wolność jednostki",
        "równość obywateli wobec prawa"
      ],
      "marksizm": [
        "walka klas",
        "ogólnoświatowa rewolucja"
      ]
    },
    "explanation": "Konserwatyzm akcentował tradycję i powolną ewolucję, liberalizm wolność jednostki i równość wobec prawa, a marksizm walkę klas i rewolucję prowadzącą do komunizmu."
  },
  {
    "id": "R01_KPI_07",
    "section": "Kongres, przemysł i idee XIX wieku",
    "type": "riddle",
    "prompt": "Rozrost miast i wzrost liczby ludności miejskiej jako skutek rewolucji przemysłowej to...",
    "options": null,
    "answer": "urbanizacja",
    "explanation": "Proces ten nazywa się urbanizacją."
  },
  {
    "id": "R01_KPI_08",
    "section": "Kongres, przemysł i idee XIX wieku",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie należy do nowych grup społecznych powstałych wskutek rewolucji przemysłowej: kapitaliści, robotnicy, proletariat, duchowieństwo.",
    "options": null,
    "answer": "duchowieństwo",
    "explanation": "Do nowych grup społecznych związanych z rewolucją przemysłową należeli kapitaliści, robotnicy i proletariat; duchowieństwo nie należy do tego zestawu."
  },
  {
    "id": "R01_KPI_09",
    "section": "Kongres, przemysł i idee XIX wieku",
    "type": "scenario",
    "prompt": "Mówca twierdzi, że władza powstaje na mocy umowy społecznej, człowiek ma przyrodzone prawa, a państwo powinno chronić wolność jednostki i demokrację parlamentarną. Którą ideologię reprezentuje?",
    "options": [
      "liberalizm",
      "konserwatyzm",
      "marksizm",
      "anarchizm",
      "nacjonalizm",
      "szowinizm"
    ],
    "answer": 0,
    "explanation": "Takie założenia są charakterystyczne dla liberalizmu."
  },
  {
    "id": "R01_KPI_10",
    "section": "Kongres, przemysł i idee XIX wieku",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Grecja odzyskuje niepodległość",
      "Powstaje Święte Przymierze",
      "Wybucha greckie powstanie niepodległościowe",
      "Rozpoczynają się obrady kongresu wiedeńskiego"
    ],
    "answer": [
      "Rozpoczynają się obrady kongresu wiedeńskiego",
      "Powstaje Święte Przymierze",
      "Wybucha greckie powstanie niepodległościowe",
      "Grecja odzyskuje niepodległość"
    ],
    "explanation": "Kongres rozpoczął obrady w 1814 r., Święte Przymierze powstało w 1815 r., powstanie greckie wybuchło w 1821 r., a Grecja odzyskała niepodległość w 1830 r."
  },
  {
    "id": "R01_POL_01",
    "section": "Ziemie polskie 1815-1848 i powstanie listopadowe",
    "type": "single_choice",
    "prompt": "Jakie państwo utworzono z większości ziem Księstwa Warszawskiego po kongresie wiedeńskim?",
    "options": [
      "Królestwo Polskie",
      "Wielkie Księstwo Poznańskie",
      "Rzeczpospolita Krakowska",
      "Królestwo Galicji",
      "Księstwo Litewskie",
      "Królestwo Prus"
    ],
    "answer": 0,
    "image": "r01_ziemie_polskie_1815.jpg",
    "explanation": "Z większości ziem Księstwa Warszawskiego utworzono Królestwo Polskie, związane unią personalną z Rosją."
  },
  {
    "id": "R01_POL_02",
    "section": "Ziemie polskie 1815-1848 i powstanie listopadowe",
    "type": "match",
    "prompt": "Połącz obszar ziem polskich po 1815 r. z jego statusem.",
    "options": null,
    "left": [
      "Królestwo Polskie",
      "Wielkie Księstwo Poznańskie",
      "Rzeczpospolita Krakowska"
    ],
    "right": [
      "unia personalna z Rosją",
      "pod panowaniem Prus",
      "pod opieką trzech zaborców"
    ],
    "answer": {
      "Królestwo Polskie": "unia personalna z Rosją",
      "Wielkie Księstwo Poznańskie": "pod panowaniem Prus",
      "Rzeczpospolita Krakowska": "pod opieką trzech zaborców"
    },
    "image": "r01_ziemie_polskie_1815.jpg",
    "explanation": "Po 1815 r. Królestwo Polskie było związane unią personalną z Rosją, Wielkie Księstwo Poznańskie znajdowało się pod panowaniem Prus, a Rzeczpospolita Krakowska pozostawała pod opieką trzech zaborców."
  },
  {
    "id": "R01_POL_03",
    "section": "Ziemie polskie 1815-1848 i powstanie listopadowe",
    "type": "true_false",
    "prompt": "Królestwo Polskie miało po 1815 r. odrębne m.in. skarb, monetę, szkolnictwo, parlament, wojsko, aparat państwowy, prawo i sądownictwo.",
    "options": null,
    "answer": true,
    "explanation": "Instytucje te stanowiły elementy odrębności Królestwa Polskiego."
  },
  {
    "id": "R01_POL_04",
    "section": "Ziemie polskie 1815-1848 i powstanie listopadowe",
    "type": "fill_in",
    "prompt": "Powstanie listopadowe rozpoczęło się w roku __________ i zakończyło w roku __________.",
    "options": null,
    "answer": [
      "1830",
      "1831"
    ],
    "explanation": "Powstanie listopadowe trwało od 29 listopada 1830 r. do października 1831 r."
  },
  {
    "id": "R01_POL_05",
    "section": "Ziemie polskie 1815-1848 i powstanie listopadowe",
    "type": "single_choice",
    "prompt": "Która bitwa powstania listopadowego, rozegrana 6-7 września 1831 r., zakończyła się zwycięstwem Rosjan?",
    "options": [
      "Grochów",
      "Wawer",
      "Dębe Wielkie",
      "Iganie",
      "Ostrołęka",
      "Warszawa"
    ],
    "answer": 5,
    "image": "r01_olszynka_grochowska.jpg",
    "explanation": "Walki o Warszawę 6-7 września 1831 r. wygrali Rosjanie."
  },
  {
    "id": "R01_POL_06",
    "section": "Ziemie polskie 1815-1848 i powstanie listopadowe",
    "type": "multi_select",
    "prompt": "Zaznacz przyczyny klęski powstania listopadowego.",
    "options": [
      "Nieudolne kierownictwo powstania",
      "Brak poparcia chłopów",
      "Przewaga liczebna Rosjan",
      "Brak poparcia państw zachodnich",
      "Przewaga liczebna armii polskiej",
      "Powszechne poparcie chłopów"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do przyczyn klęski zaliczono m.in. nieudolne kierownictwo, brak poparcia chłopów, przewagę liczebną Rosjan oraz brak wsparcia państw zachodnich."
  },
  {
    "id": "R01_POL_07",
    "section": "Ziemie polskie 1815-1848 i powstanie listopadowe",
    "type": "riddle",
    "prompt": "Jak nazywa się fala wyjazdów Polaków za granicę po klęsce powstania listopadowego, rozpoczęta od 1831 r.?",
    "options": null,
    "answer": "Wielka Emigracja",
    "explanation": "Wyjazdy te określa się jako Wielką Emigrację."
  },
  {
    "id": "R01_POL_08",
    "section": "Ziemie polskie 1815-1848 i powstanie listopadowe",
    "type": "odd_one_out",
    "prompt": "Wskaż osobę, która nie należała do uczestników Wielkiej Emigracji: Fryderyk Chopin, Adam Mickiewicz, Juliusz Słowacki, Klemens von Metternich.",
    "options": null,
    "answer": "Klemens von Metternich",
    "explanation": "Chopin, Mickiewicz i Słowacki zostali wymienieni wśród emigrantów; Metternich był austriackim politykiem."
  },
  {
    "id": "R01_POL_09",
    "section": "Ziemie polskie 1815-1848 i powstanie listopadowe",
    "type": "scenario",
    "prompt": "Noc 29/30 listopada 1830 r. Podchorążowie atakują Belweder, chcąc pojmać osobę mieszkającą w pałacu. Kogo próbowali schwytać?",
    "options": [
      "wielkiego księcia Konstantego",
      "cara Aleksandra I",
      "Iwana Paskiewicza",
      "Adama Czartoryskiego",
      "Józefa Chłopickiego",
      "Joachima Lelewela"
    ],
    "answer": 0,
    "explanation": "W Belwederze mieszkał wielki książę Konstanty; powstańcom nie udało się go pojmać."
  },
  {
    "id": "R01_POL_10",
    "section": "Ziemie polskie 1815-1848 i powstanie listopadowe",
    "type": "sort",
    "prompt": "Przyporządkuj osoby i postulaty do ugrupowań Wielkiej Emigracji.",
    "options": null,
    "items": [
      "Joachim Lelewel",
      "Wiktor Heltman",
      "Ludwik Mierosławski",
      "powstanie obejmujące wszystkie trzy zabory",
      "uwłaszczenie chłopów",
      "obywatelstwo polskie dla Żydów"
    ],
    "categories": [
      "Komitet Narodowy Polski",
      "Towarzystwo Demokratyczne Polskie"
    ],
    "answer": {
      "Komitet Narodowy Polski": [
        "Joachim Lelewel"
      ],
      "Towarzystwo Demokratyczne Polskie": [
        "Wiktor Heltman",
        "Ludwik Mierosławski",
        "powstanie obejmujące wszystkie trzy zabory",
        "uwłaszczenie chłopów",
        "obywatelstwo polskie dla Żydów"
      ]
    },
    "explanation": "Komitet Narodowy Polski był związany z Joachimem Lelewelem, a Towarzystwo Demokratyczne Polskie z Wiktorem Heltmanem i Ludwikiem Mierosławskim oraz programem powstania we wszystkich zaborach, uwłaszczenia chłopów i obywatelstwa dla Żydów."
  },
  {
    "id": "R01_SWI_01",
    "section": "Zjednoczenia, wojna secesyjna i kolonializm",
    "type": "single_choice",
    "prompt": "Kto był premierem Piemontu współtworzącym plany zjednoczenia Włoch u boku Wiktora Emanuela II?",
    "options": [
      "Camillo Cavour",
      "Otto von Bismarck",
      "Abraham Lincoln",
      "Robert Lee",
      "Napoleon III",
      "Franciszek Józef I"
    ],
    "answer": 0,
    "image": "r01_zjednoczenie_wloch.jpg",
    "explanation": "Camillo Cavour był premierem współtworzącym plany zjednoczeniowe."
  },
  {
    "id": "R01_SWI_02",
    "section": "Zjednoczenia, wojna secesyjna i kolonializm",
    "type": "sequence",
    "prompt": "Ułóż etapy zjednoczenia Włoch w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Rzym zostaje stolicą zjednoczonych Włoch",
      "Ogłoszenie Królestwa Włoskiego",
      "Wojna Sardynii z Austrią",
      "Plebiscyty i przyłączenie części ziem do Piemontu"
    ],
    "answer": [
      "Wojna Sardynii z Austrią",
      "Plebiscyty i przyłączenie części ziem do Piemontu",
      "Ogłoszenie Królestwa Włoskiego",
      "Rzym zostaje stolicą zjednoczonych Włoch"
    ],
    "image": "r01_zjednoczenie_wloch.jpg",
    "explanation": "W 1859 r. Sardynia walczyła z Austrią, w 1860 r. odbyły się plebiscyty przyłączeniowe, w 1861 r. ogłoszono Królestwo Włoskie, a w 1871 r. Rzym został stolicą."
  },
  {
    "id": "R01_SWI_03",
    "section": "Zjednoczenia, wojna secesyjna i kolonializm",
    "type": "match",
    "prompt": "Połącz wydarzenie procesu zjednoczenia Niemiec z rokiem.",
    "options": null,
    "left": [
      "Wojna Prus i Austrii z Danią",
      "Wojna Prus z Austrią",
      "Wojna Prus z Francją",
      "Ogłoszenie Cesarstwa Niemieckiego"
    ],
    "right": [
      "1864",
      "1866",
      "1870",
      "1871"
    ],
    "answer": {
      "Wojna Prus i Austrii z Danią": "1864",
      "Wojna Prus z Austrią": "1866",
      "Wojna Prus z Francją": "1870",
      "Ogłoszenie Cesarstwa Niemieckiego": "1871"
    },
    "explanation": "Kolejne etapy to: wojna z Danią w 1864 r., wojna z Austrią w 1866 r., wojna z Francją od 1870 r. i ogłoszenie Cesarstwa Niemieckiego w 1871 r."
  },
  {
    "id": "R01_SWI_04",
    "section": "Zjednoczenia, wojna secesyjna i kolonializm",
    "type": "true_false",
    "prompt": "Austro-Węgry powstały w 1867 r.; Austria i Królestwo Węgierskie miały odrębne parlamenty i rządy, ale wspólne skarb, armię i politykę zagraniczną.",
    "options": null,
    "answer": true,
    "explanation": "Monarchia austro-węgierska powstała w 1867 r.; Austria i Królestwo Węgierskie miały odrębne parlamenty i rządy, ale wspólne skarb, armię i politykę zagraniczną."
  },
  {
    "id": "R01_SWI_05",
    "section": "Zjednoczenia, wojna secesyjna i kolonializm",
    "type": "single_choice",
    "prompt": "Które wydarzenie było bezpośrednią przyczyną secesji jedenastu stanów południowych z Unii?",
    "options": [
      "Wybór Abrahama Lincolna na prezydenta",
      "Zniesienie niewolnictwa w całych USA w 1860 r.",
      "Kapitulacja pod Appomattox",
      "Bitwa pod Gettysburgiem",
      "Utworzenie Ku Klux Klanu",
      "Zakup Alaski"
    ],
    "answer": 0,
    "image": "r01_wojna_secesyjna_mapa.jpg",
    "explanation": "Po wyborze Abrahama Lincolna, przeciwnika niewolnictwa, jedenaście stanów południowych ogłosiło secesję."
  },
  {
    "id": "R01_SWI_06",
    "section": "Zjednoczenia, wojna secesyjna i kolonializm",
    "type": "sort",
    "prompt": "Przyporządkuj określenia do stron wojny secesyjnej.",
    "options": null,
    "items": [
      "jankesi",
      "republikanie",
      "silna władza centralna",
      "konfederaci",
      "demokraci",
      "duża samodzielność stanów"
    ],
    "categories": [
      "Północ",
      "Południe"
    ],
    "answer": {
      "Północ": [
        "jankesi",
        "republikanie",
        "silna władza centralna"
      ],
      "Południe": [
        "konfederaci",
        "demokraci",
        "duża samodzielność stanów"
      ]
    },
    "image": "r01_wojna_secesyjna_mapa.jpg",
    "explanation": "Północ tworzyli unioniści nazywani jankesami, związani z republikanami i silniejszą władzą centralną; Południe tworzyli konfederaci, kojarzeni z demokratami i większą samodzielnością stanów."
  },
  {
    "id": "R01_SWI_07",
    "section": "Zjednoczenia, wojna secesyjna i kolonializm",
    "type": "fill_in",
    "prompt": "W 1865 r. generał Robert Lee podpisał kapitulację Konfederacji pod __________.",
    "options": null,
    "answer": [
      "Appomattox"
    ],
    "explanation": "Appomattox było miejscem kapitulacji wojsk Konfederacji."
  },
  {
    "id": "R01_SWI_08",
    "section": "Zjednoczenia, wojna secesyjna i kolonializm",
    "type": "single_choice",
    "prompt": "Która definicja najlepiej odpowiada pojęciu kolonializmu?",
    "options": [
      "Utrzymywanie słabiej rozwiniętych krajów w zależności politycznej i ekonomicznej",
      "Dobrowolne łączenie państw w federacje",
      "Zniesienie wszystkich barier celnych w Europie",
      "Rezygnację z ekspansji poza własny kontynent",
      "Wyłącznie działalność misyjną bez podporządkowania politycznego",
      "System wolnych miast bez władzy państwowej"
    ],
    "answer": 0,
    "image": "r01_kolonializm_1898.jpg",
    "explanation": "Kolonializm to polityka państw rozwiniętych wobec słabiej rozwiniętych krajów, utrzymywanych w zależności politycznej i ekonomicznej."
  },
  {
    "id": "R01_SWI_09",
    "section": "Zjednoczenia, wojna secesyjna i kolonializm",
    "type": "odd_one_out",
    "prompt": "Wskaż wydarzenie, które nie było jednym z konfliktów kolonialnych: powstanie sipajów, powstanie tajpingów, powstanie bokserów, powstanie listopadowe.",
    "options": null,
    "answer": "powstanie listopadowe",
    "image": "r01_kolonializm_1898.jpg",
    "explanation": "Powstanie listopadowe było polskim powstaniem niepodległościowym; pozostałe wydarzenia były konfliktami kolonialnymi."
  },
  {
    "id": "R01_SWI_10",
    "section": "Zjednoczenia, wojna secesyjna i kolonializm",
    "type": "scenario",
    "prompt": "Brytyjczycy zajmują ziemie w południowej Afryce zamieszkane przez osadników holenderskich, gdzie odkryto złoża diamentów i złota. Z kim Brytyjczycy prowadzą wojny?",
    "options": [
      "Burowie",
      "sipajowie",
      "tajpingowie",
      "bokserzy",
      "mahdystowie",
      "jankesi"
    ],
    "answer": 0,
    "explanation": "Wojny burskie były konfliktami Burów, czyli osadników holenderskich, z Brytyjczykami."
  },
  {
    "id": "R01_BEL_01",
    "section": "Belle époque, nauka i sztuka",
    "type": "true_false",
    "prompt": "Belle époque to okres od 1871 r. do wybuchu I wojny światowej, kojarzony z rozkwitem, postępem i względnym spokojem w Europie.",
    "options": null,
    "answer": true,
    "explanation": "Piękna epoka obejmuje okres od 1871 r. do wybuchu I wojny światowej, kojarzony z rozkwitem, postępem i względnym spokojem w Europie."
  },
  {
    "id": "R01_BEL_02",
    "section": "Belle époque, nauka i sztuka",
    "type": "single_choice",
    "prompt": "Gdzie w 1896 r. odbyły się pierwsze nowożytne igrzyska olimpijskie?",
    "options": [
      "Ateny",
      "Paryż",
      "Londyn",
      "Rzym",
      "Berlin",
      "Wiedeń"
    ],
    "answer": 0,
    "explanation": "Pierwsze nowożytne igrzyska olimpijskie odbyły się w 1896 r. w Atenach."
  },
  {
    "id": "R01_BEL_03",
    "section": "Belle époque, nauka i sztuka",
    "type": "multi_select",
    "prompt": "Zaznacz postulaty i zjawiska związane z emancypacją kobiet.",
    "options": [
      "Prawa wyborcze dla kobiet",
      "Równouprawnienie",
      "Dostęp kobiet do wykształcenia",
      "Całkowity zakaz pracy kobiet poza domem",
      "Odebranie kobietom możliwości udziału w życiu publicznym"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Emancypantki domagały się praw wyborczych, równouprawnienia i dostępu do wykształcenia, a sufrażystki szczególnie walczyły o prawa wyborcze."
  },
  {
    "id": "R01_BEL_04",
    "section": "Belle époque, nauka i sztuka",
    "type": "match",
    "prompt": "Połącz wynalazcę lub twórców z osiągnięciem.",
    "options": null,
    "left": [
      "bracia Wright",
      "Graham Alexander Bell",
      "bracia Lumière",
      "Thomas Alva Edison"
    ],
    "right": [
      "samolot",
      "telefon",
      "kinematograf",
      "żarówka elektryczna"
    ],
    "answer": {
      "bracia Wright": "samolot",
      "Graham Alexander Bell": "telefon",
      "bracia Lumière": "kinematograf",
      "Thomas Alva Edison": "żarówka elektryczna"
    },
    "image": "r01_piekna_epoka_wynalazki.jpg",
    "explanation": "Bracia Wright są związani z samolotem, Bell z telefonem, bracia Lumière z kinematografem, a Edison z żarówką elektryczną."
  },
  {
    "id": "R01_BEL_05",
    "section": "Belle époque, nauka i sztuka",
    "type": "fill_in",
    "prompt": "W 1889 r. Gustave Eiffel zbudował w __________ stalową wieżę znaną jako __________.",
    "options": null,
    "answer": [
      "Paryżu",
      "wieża Eiffla"
    ],
    "explanation": "W 1889 r. Gustave Eiffel zbudował w Paryżu wieżę Eiffla."
  },
  {
    "id": "R01_BEL_06",
    "section": "Belle époque, nauka i sztuka",
    "type": "riddle",
    "prompt": "Jak nazywa się teoria Charlesa Darwina, według której świat organizmów powstał drogą stopniowego rozwoju i przemian?",
    "options": null,
    "answer": "teoria ewolucji",
    "explanation": "Jest to teoria ewolucji."
  },
  {
    "id": "R01_BEL_07",
    "section": "Belle époque, nauka i sztuka",
    "type": "odd_one_out",
    "prompt": "Wskaż kierunek należący do wcześniejszego nurtu wiernego odzwierciedlania rzeczywistości, a nie do nowych kierunków przełomu XIX i XX w.: impresjonizm, kubizm, futuryzm, realizm.",
    "options": null,
    "answer": "realizm",
    "image": "r01_kierunki_sztuki.jpg",
    "explanation": "Realizm należał do kierunków opartych na wiernym przedstawianiu rzeczywistości; impresjonizm, kubizm i futuryzm należą do nowych nurtów omawianych na przełomie XIX i XX w."
  },
  {
    "id": "R01_BEL_08",
    "section": "Belle époque, nauka i sztuka",
    "type": "single_choice",
    "prompt": "Co szczególnie eksponował naturalizm w literaturze?",
    "options": [
      "Brzydotę życia, choroby, ubóstwo, patologie i cierpienie",
      "Wyłącznie legendy średniowieczne",
      "Tylko tematykę mitologiczną",
      "Idealizację życia arystokracji",
      "Jedynie opowieści fantastyczne",
      "Wyłącznie poezję patriotyczną"
    ],
    "answer": 0,
    "explanation": "Naturalizm dążył do jeszcze wierniejszych przedstawień, akcentując brzydotę życia, choroby, ubóstwo, patologie i cierpienie."
  },
  {
    "id": "R01_BEL_09",
    "section": "Belle époque, nauka i sztuka",
    "type": "scenario",
    "prompt": "Młoda kobieta na początku XX w. organizuje demonstracje i kampanie, żądając przyznania kobietom prawa głosu. Jak określano takie działaczki?",
    "options": [
      "sufrażystki",
      "emigrantki",
      "socjaldemokratki",
      "kolonistki",
      "realistki",
      "konserwatystki"
    ],
    "answer": 0,
    "explanation": "Kobiety walczące o prawa wyborcze określono jako sufrażystki."
  },
  {
    "id": "R01_BEL_10",
    "section": "Belle époque, nauka i sztuka",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do kierunków sztuki.",
    "options": null,
    "items": [
      "pastelowe barwy",
      "rozmyte kontury",
      "geometryzacja form",
      "odrzucenie perspektywy",
      "dynamizm i ruch",
      "fascynacja techniką"
    ],
    "categories": [
      "impresjonizm",
      "kubizm",
      "futuryzm"
    ],
    "answer": {
      "impresjonizm": [
        "pastelowe barwy",
        "rozmyte kontury"
      ],
      "kubizm": [
        "geometryzacja form",
        "odrzucenie perspektywy"
      ],
      "futuryzm": [
        "dynamizm i ruch",
        "fascynacja techniką"
      ]
    },
    "image": "r01_kierunki_sztuki.jpg",
    "explanation": "Impresjonizm kojarzono z pastelowymi barwami i rozmytymi konturami, kubizm z geometryzacją i odrzuceniem perspektywy, a futuryzm z dynamizmem i fascynacją nowoczesnością oraz techniką."
  },
  {
    "id": "R01_ZAB_01",
    "section": "Ziemie polskie po 1863 roku",
    "type": "single_choice",
    "prompt": "Który obóz przed powstaniem styczniowym dążył do jak najszybszego wybuchu zbrojnego powstania i planował uwłaszczenie chłopów bez odszkodowań dla właścicieli?",
    "options": [
      "czerwoni",
      "biali",
      "stańczycy",
      "ugodowcy",
      "endecy",
      "chadecy"
    ],
    "answer": 0,
    "explanation": "Takie poglądy reprezentowali czerwoni, skupiający m.in. młodzież studencką i robotników."
  },
  {
    "id": "R01_ZAB_02",
    "section": "Ziemie polskie po 1863 roku",
    "type": "multi_select",
    "prompt": "Zaznacz skutki powstania styczniowego.",
    "options": [
      "Represje i zsyłki",
      "Konfiskaty majątków",
      "Nasilenie rusyfikacji i germanizacji",
      "Uwłaszczenie chłopów w Królestwie Polskim w 1864 r.",
      "Początek pozytywizmu",
      "Odzyskanie niepodległości przez Polskę"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "r01_powstanie_styczniowe.jpg",
    "explanation": "Po klęsce nastąpiły represje i zsyłki, konfiskaty majątków, nasilenie rusyfikacji i germanizacji, uwłaszczenie chłopów w 1864 r. oraz przejście od romantyzmu do pozytywizmu."
  },
  {
    "id": "R01_ZAB_03",
    "section": "Ziemie polskie po 1863 roku",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia powstania styczniowego w kolejności.",
    "options": null,
    "items": [
      "Upadek powstania",
      "Dyktatura Romualda Traugutta",
      "Wybuch powstania",
      "Krótka dyktatura Mariana Langiewicza"
    ],
    "answer": [
      "Wybuch powstania",
      "Krótka dyktatura Mariana Langiewicza",
      "Dyktatura Romualda Traugutta",
      "Upadek powstania"
    ],
    "image": "r01_powstanie_styczniowe.jpg",
    "explanation": "Powstanie rozpoczęło się w styczniu 1863 r.; po kolejnych zmianach przywództwa dyktatorem został Romuald Traugutt, a w 1864 r. powstanie upadło."
  },
  {
    "id": "R01_ZAB_04",
    "section": "Ziemie polskie po 1863 roku",
    "type": "fill_in",
    "prompt": "Uwłaszczenie oznacza przekazanie chłopom użytkowanej przez nich __________ na __________.",
    "options": null,
    "answer": [
      "ziemi",
      "własność"
    ],
    "explanation": "Uwłaszczenie to przekazanie chłopom użytkowanej ziemi na własność."
  },
  {
    "id": "R01_ZAB_05",
    "section": "Ziemie polskie po 1863 roku",
    "type": "match",
    "prompt": "Połącz zabór lub obszar z charakterystyczną polityką po powstaniu styczniowym.",
    "options": null,
    "left": [
      "zabór rosyjski",
      "zabór pruski",
      "Galicja"
    ],
    "right": [
      "rusyfikacja",
      "germanizacja",
      "autonomia od 1867 r."
    ],
    "answer": {
      "zabór rosyjski": "rusyfikacja",
      "zabór pruski": "germanizacja",
      "Galicja": "autonomia od 1867 r."
    },
    "image": "r01_germanizacja_rusyfikacja.jpg",
    "explanation": "W zaborze rosyjskim prowadzono rusyfikację, w pruskim germanizację, a Galicja od 1867 r. korzystała z szerokiej autonomii."
  },
  {
    "id": "R01_ZAB_06",
    "section": "Ziemie polskie po 1863 roku",
    "type": "true_false",
    "prompt": "Strajk dzieci we Wrześni w 1901 r. był protestem przeciw prowadzeniu lekcji religii po niemiecku.",
    "options": null,
    "answer": true,
    "explanation": "Dzieci odmówiły udziału w lekcjach religii prowadzonych po niemiecku i zostały za to ukarane."
  },
  {
    "id": "R01_ZAB_07",
    "section": "Ziemie polskie po 1863 roku",
    "type": "riddle",
    "prompt": "Jak nazywał się program działań na rzecz gospodarczego, społecznego i kulturowego rozwoju ziem polskich, modernizacji społeczeństwa i podtrzymywania świadomości narodowej?",
    "options": null,
    "answer": "praca organiczna",
    "explanation": "Taki program określa się jako pracę organiczną."
  },
  {
    "id": "R01_ZAB_08",
    "section": "Ziemie polskie po 1863 roku",
    "type": "match",
    "prompt": "Połącz okręg przemysłowy z jego główną gałęzią przemysłu.",
    "options": null,
    "left": [
      "Górnośląski Okręg Przemysłowy",
      "Łódzki Okręg Przemysłowy",
      "Staropolski Okręg Przemysłowy"
    ],
    "right": [
      "górnictwo",
      "włókiennictwo",
      "hutnictwo"
    ],
    "answer": {
      "Górnośląski Okręg Przemysłowy": "górnictwo",
      "Łódzki Okręg Przemysłowy": "włókiennictwo",
      "Staropolski Okręg Przemysłowy": "hutnictwo"
    },
    "image": "r01_okregi_przemyslowe.jpg",
    "explanation": "Górny Śląsk był związany z górnictwem, Łódź z włókiennictwem, a okręg staropolski z hutnictwem."
  },
  {
    "id": "R01_ZAB_09",
    "section": "Ziemie polskie po 1863 roku",
    "type": "sort",
    "prompt": "Przyporządkuj osoby i hasła do nurtów politycznych na ziemiach polskich.",
    "options": null,
    "items": [
      "Józef Piłsudski",
      "reformy społeczne w niepodległym państwie",
      "Roman Dmowski",
      "bierny opór wobec zaborców",
      "nacjonalizm i ksenofobia",
      "Wojciech Korfanty",
      "nauka Kościoła podstawą współżycia społecznego",
      "współdziałanie warstw społecznych w interesie narodu"
    ],
    "categories": [
      "PPS",
      "endecja",
      "chadecja"
    ],
    "answer": {
      "PPS": [
        "Józef Piłsudski",
        "reformy społeczne w niepodległym państwie"
      ],
      "endecja": [
        "Roman Dmowski",
        "bierny opór wobec zaborców",
        "nacjonalizm i ksenofobia"
      ],
      "chadecja": [
        "Wojciech Korfanty",
        "nauka Kościoła podstawą współżycia społecznego",
        "współdziałanie warstw społecznych w interesie narodu"
      ]
    },
    "explanation": "PPS łączyła walkę o niepodległość z reformami społecznymi i była związana z Józefem Piłsudskim; endecja z Romanem Dmowskim, biernym oporem i nacjonalizmem; chadecja z Wojciechem Korfantym i nauką Kościoła."
  },
  {
    "id": "R01_ZAB_10",
    "section": "Ziemie polskie po 1863 roku",
    "type": "scenario",
    "prompt": "W czasie rewolucji 1905-1907 car zapowiada poszerzenie swobód i zwołuje pierwszy rosyjski parlament. Jak nazywał się ten parlament?",
    "options": [
      "Duma Państwowa",
      "Reichstag",
      "Sejm Krajowy",
      "Rada Państwa Galicji",
      "Konwent Narodowy",
      "Izba Gmin"
    ],
    "answer": 0,
    "explanation": "Pierwszy rosyjski parlament nazywał się Dumą Państwową."
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Komu kongres wiedeński oddał Parmę?",
    "options": [
      "Marii Ludwice",
      "Marii Antoninie",
      "Ludwice Pruskiej",
      "Wiktorii",
      "Marii Teresie",
      "Józefinie de Beauharnais"
    ],
    "answer": 0,
    "explanation": "Parma została oddana drugiej żonie Napoleona, cesarzowej Marii Ludwice."
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz postać kongresu wiedeńskiego z jej rolą lub państwem.",
    "options": null,
    "left": [
      "Aleksander I Romanow",
      "Klemens Lothar von Metternich",
      "Robert Stewart Castlereagh",
      "Charles-Maurice de Talleyrand-Périgord"
    ],
    "right": [
      "car Rosji",
      "austriacki minister spraw zagranicznych",
      "brytyjski polityk",
      "francuski minister spraw zagranicznych"
    ],
    "answer": {
      "Aleksander I Romanow": "car Rosji",
      "Klemens Lothar von Metternich": "austriacki minister spraw zagranicznych",
      "Robert Stewart Castlereagh": "brytyjski polityk",
      "Charles-Maurice de Talleyrand-Périgord": "francuski minister spraw zagranicznych"
    },
    "image": "r01_kongres_wiedenski.jpg",
    "explanation": "Aleksander I był carem Rosji, Metternich austriackim ministrem spraw zagranicznych, Castlereagh brytyjskim politykiem, a Talleyrand francuskim ministrem spraw zagranicznych."
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Greckie powstanie niepodległościowe wybuchło w roku __________, a Grecja odzyskała niepodległość w roku __________.",
    "options": null,
    "answer": [
      "1821",
      "1830"
    ],
    "explanation": "Powstanie greckie wybuchło w 1821 r., a Grecja odzyskała niepodległość w 1830 r."
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wynalazki i wydarzenia techniczne od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Pierwszy lot braci Wright",
      "Telefon Bella",
      "Lokomotywa Stephensona",
      "Kinematograf braci Lumière",
      "Telegraf Morse'a",
      "Wieża Eiffla"
    ],
    "answer": [
      "Lokomotywa Stephensona",
      "Telegraf Morse'a",
      "Telefon Bella",
      "Wieża Eiffla",
      "Kinematograf braci Lumière",
      "Pierwszy lot braci Wright"
    ],
    "image": "r01_piekna_epoka_wynalazki.jpg",
    "explanation": "Kolejność wynalazków i osiągnięć jest następująca: lokomotywa Stephensona 1825, telegraf Morse'a 1837, telefon Bella 1876, wieża Eiffla 1889, kinematograf braci Lumière 1895 i pierwszy lot braci Wright 1903."
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaka organizacja syjonistyczna powstała w 1897 r.?",
    "options": [
      "Światowa Organizacja Syjonistyczna",
      "I Międzynarodówka",
      "II Międzynarodówka",
      "Liga Narodowa",
      "Polska Partia Socjalistyczna",
      "SDKPiL"
    ],
    "answer": 0,
    "explanation": "W 1897 r. powstała Światowa Organizacja Syjonistyczna."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz bitwę powstania listopadowego z datą.",
    "options": null,
    "left": [
      "Grochów",
      "Iganie",
      "Ostrołęka",
      "Warszawa"
    ],
    "right": [
      "25 II",
      "10 IV",
      "26 V",
      "6-7 IX"
    ],
    "answer": {
      "Grochów": "25 II",
      "Iganie": "10 IV",
      "Ostrołęka": "26 V",
      "Warszawa": "6-7 IX"
    },
    "image": "r01_olszynka_grochowska.jpg",
    "explanation": "Daty bitew to: Grochów 25 lutego, Iganie 10 kwietnia, Ostrołęka 26 maja, Warszawa 6-7 września 1831 r."
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz elementy programu Towarzystwa Demokratycznego Polskiego.",
    "options": [
      "Powstanie obejmujące wszystkie trzy zabory",
      "Duża rola chłopów w powstaniu",
      "Uwłaszczenie chłopów",
      "Przyznanie Żydom obywatelstwa polskiego",
      "Republika z szerokimi wolnościami obywatelskimi",
      "Utrzymanie monarchii absolutnej"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "TDP zakładało powstanie we wszystkich trzech zaborach z dużą rolą chłopów, uwłaszczenie, obywatelstwo dla Żydów oraz republikę z szerokimi wolnościami i równością wobec prawa."
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która dziedzina była wspólna dla Austrii i Królestwa Węgierskiego po utworzeniu Austro-Węgier w 1867 r.?",
    "options": [
      "polityka zagraniczna",
      "parlament",
      "rząd",
      "szkolnictwo",
      "administracja lokalna",
      "ordynacja wyborcza"
    ],
    "answer": 0,
    "explanation": "Po 1867 r. oba człony monarchii miały m.in. wspólną politykę zagraniczną, obok wspólnego skarbu i armii."
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Otto von Bismarck przeredagował i opublikował __________, co zaostrzyło konflikt z __________ i poprzedziło wojnę 1870 r.",
    "options": null,
    "answer": [
      "depeszę emską",
      "Francją"
    ],
    "explanation": "Bismarck przekształcił depeszę emską w tekst obraźliwy dla Francji; następnie Francja wypowiedziała Prusom wojnę."
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż konflikt dotyczący osadników holenderskich w południowej Afryce: powstanie sipajów, powstanie tajpingów, powstanie bokserów, wojny Burów.",
    "options": null,
    "answer": "wojny Burów",
    "explanation": "Wojny Burów dotyczyły osadników holenderskich w południowej Afryce; pozostałe trzy wydarzenia rozegrały się w Indiach lub Chinach."
  },
  {
    "id": "R01_HARD_11",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz podróżnika lub badacza z osiągnięciem geograficznym.",
    "options": null,
    "left": [
      "Robert Peary",
      "Roald Amundsen",
      "Edmund Strzelecki",
      "Jan Czekanowski"
    ],
    "right": [
      "biegun północny",
      "biegun południowy",
      "Góra Kościuszki",
      "wyprawa do Afryki Równikowej"
    ],
    "answer": {
      "Robert Peary": "biegun północny",
      "Roald Amundsen": "biegun południowy",
      "Edmund Strzelecki": "Góra Kościuszki",
      "Jan Czekanowski": "wyprawa do Afryki Równikowej"
    },
    "explanation": "Robert Peary jest związany z biegunem północnym, Roald Amundsen z biegunem południowym, Edmund Strzelecki z Górą Kościuszki, a Jan Czekanowski z wyprawą do Afryki Równikowej."
  },
  {
    "id": "R01_HARD_12",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Jest 1901 r. Dzieci w Wielkopolsce odmawiają udziału w lekcjach religii prowadzonych po niemiecku i zostają ukarane przez nauczycieli oraz policję. O jakim wydarzeniu mowa?",
    "options": [
      "strajk dzieci we Wrześni",
      "rugi pruskie",
      "powstanie zabajkalskie",
      "rewolucja 1905 r. w Warszawie",
      "strajk w Łodzi",
      "manifestacja w Krakowie"
    ],
    "answer": 0,
    "image": "r01_germanizacja_rusyfikacja.jpg",
    "explanation": "Chodzi o protest dzieci polskich we Wrześni w 1901 r."
  },
  {
    "id": "R01_HARD_13",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z uwłaszczeniem chłopów w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Uwłaszczenie w Królestwie Polskim",
      "Rozszerzenie edyktu regulacyjnego na Wielkie Księstwo Poznańskie",
      "Dekret uwłaszczeniowy w zaborze austriackim",
      "Pruski edykt regulacyjny"
    ],
    "answer": [
      "Pruski edykt regulacyjny",
      "Rozszerzenie edyktu regulacyjnego na Wielkie Księstwo Poznańskie",
      "Dekret uwłaszczeniowy w zaborze austriackim",
      "Uwłaszczenie w Królestwie Polskim"
    ],
    "explanation": "Kolejne etapy uwłaszczenia to: pruski edykt regulacyjny 1811, rozszerzenie go na Wielkie Księstwo Poznańskie 1823, uwłaszczenie w zaborze austriackim 1848 i w Królestwie Polskim 1864."
  },
  {
    "id": "R01_HARD_14",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz partię lub nurt polityczny z przywódcą.",
    "options": null,
    "left": [
      "Wielki Proletariat",
      "PPS",
      "PPSD",
      "endecja",
      "chadecja"
    ],
    "right": [
      "Ludwik Waryński",
      "Józef Piłsudski",
      "Ignacy Daszyński",
      "Roman Dmowski",
      "Wojciech Korfanty"
    ],
    "answer": {
      "Wielki Proletariat": "Ludwik Waryński",
      "PPS": "Józef Piłsudski",
      "PPSD": "Ignacy Daszyński",
      "endecja": "Roman Dmowski",
      "chadecja": "Wojciech Korfanty"
    },
    "explanation": "Wielki Proletariat był związany z Ludwikiem Waryńskim, PPS z Józefem Piłsudskim, PPSD z Ignacym Daszyńskim, endecja z Romanem Dmowskim, a chadecja z Wojciechem Korfantym."
  },
  {
    "id": "R01_HARD_15",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz skutki rewolucji 1905-1907 na ziemiach polskich.",
    "options": [
      "Polscy posłowie zasiadali w rosyjskim parlamencie",
      "Zezwolono na tworzenie legalnych stowarzyszeń",
      "Wprowadzono tolerancję religijną",
      "Powstawały polskie szkoły prywatne",
      "Otwarto katedrę języka polskiego na Uniwersytecie Warszawskim",
      "Królestwo Polskie odzyskało pełną niepodległość"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Po rewolucji poprawiła się sytuacja Polaków w Królestwie Polskim: polscy posłowie zasiadali w rosyjskim parlamencie, dopuszczono legalne stowarzyszenia, wprowadzono tolerancję religijną, powstawały polskie szkoły prywatne i katedra języka polskiego na Uniwersytecie Warszawskim."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r01",
  number: 1,
  title: "Europa po Kongresie Wiedeńskim",
  icon: "🌍",
  sectionOrder: [
      "Kongres, przemysł i idee XIX wieku",
      "Ziemie polskie 1815-1848 i powstanie listopadowe",
      "Zjednoczenia, wojna secesyjna i kolonializm",
      "Belle époque, nauka i sztuka",
      "Ziemie polskie po 1863 roku"
  ],
  sectionIcons: {
      "Kongres, przemysł i idee XIX wieku": "🏛️",
      "Ziemie polskie 1815-1848 i powstanie listopadowe": "🗺️",
      "Zjednoczenia, wojna secesyjna i kolonializm": "🌐",
      "Belle époque, nauka i sztuka": "💡",
      "Ziemie polskie po 1863 roku": "🦅"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
