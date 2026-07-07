// Skróty sekcji:
//   NAR = Narodziny państwa polskiego
//   CHR = Panowanie Bolesława Chrobrego
//   ODB = Upadek i odbudowa państwa Piastów
//   KRZ = Panowanie Bolesława Krzywoustego
//   SPO = Społeczeństwo pierwszych Piastów
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R06_NAR_01",
    "section": "Narodziny państwa polskiego",
    "type": "single_choice",
    "prompt": "Czym był wiec u plemion słowiańskich na ziemiach polskich?",
    "options": [
      "Siedzibą biskupa misyjnego",
      "Zgromadzeniem dorosłych mężczyzn",
      "Oddziałem książęcych wojów",
      "Obowiązkową opłatą dla władcy",
      "Rodzajem grodu obronnego",
      "Nazwą plemiennego bóstwa"
    ],
    "answer": 1,
    "explanation": "Wiec był zgromadzeniem dorosłych mężczyzn, które decydowało o najważniejszych sprawach plemienia."
  },
  {
    "id": "R06_NAR_02",
    "section": "Narodziny państwa polskiego",
    "type": "multi_select",
    "prompt": "Zaznacz sprawy, o których według podręcznika decydowano na wiecu.",
    "options": [
      "Rozpoczęcie wojny",
      "Budowa grodu",
      "Rozstrzyganie sporów",
      "Organizowanie ceremonii religijnych",
      "Koronacja króla Polski",
      "Wybór papieża"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Na wiecu podejmowano decyzje o wojnie i budowie grodu, rozstrzygano spory oraz organizowano ceremonie religijne."
  },
  {
    "id": "R06_NAR_03",
    "section": "Narodziny państwa polskiego",
    "type": "true_false",
    "prompt": "Głównym zajęciem plemion słowiańskich zamieszkujących ziemie polskie było rolnictwo.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik wskazuje rolnictwo jako główne zajęcie ówczesnych plemion słowiańskich."
  },
  {
    "id": "R06_NAR_04",
    "section": "Narodziny państwa polskiego",
    "type": "single_choice",
    "prompt": "Który gród był głównym grodem Wiślan?",
    "options": [
      "Gniezno",
      "Poznań",
      "Kraków",
      "Wrocław",
      "Kołobrzeg",
      "Płock"
    ],
    "answer": 2,
    "explanation": "Głównym grodem Wiślan był Kraków, a ich państwo obejmowało późniejszą Małopolskę."
  },
  {
    "id": "R06_NAR_05",
    "section": "Narodziny państwa polskiego",
    "type": "fill_in",
    "prompt": "Państwo Polan miało główny gród w __________, a pierwotne siedziby Polan leżały w centralnej __________.",
    "options": null,
    "answer": [
      "Gnieźnie",
      "Wielkopolsce"
    ],
    "altAnswers": [
      [
        "Gnieźnie",
        "Gniezno"
      ],
      [
        "Wielkopolsce",
        "Wielkopolska"
      ]
    ],
    "explanation": "Polanie mieli główny gród w Gnieźnie, a ich pierwotne siedziby znajdowały się w centralnej Wielkopolsce."
  },
  {
    "id": "R06_NAR_06",
    "section": "Narodziny państwa polskiego",
    "type": "riddle",
    "prompt": "Pierwsza polska dynastia, której nazwa pochodzi od legendarnego Piasta, to...",
    "options": null,
    "answer": "Piastowie",
    "altAnswers": [
      "Piastowie",
      "dynastia Piastów",
      "ród Piastów"
    ],
    "explanation": "Według tradycji nazwa dynastii Piastów wywodziła się od Piasta, prostego rolnika z legendy."
  },
  {
    "id": "R06_NAR_07",
    "section": "Narodziny państwa polskiego",
    "type": "sequence",
    "prompt": "Ułóż postacie w kolejności od legendarnego przodka do pierwszego w pełni historycznego władcy.",
    "options": null,
    "items": [
      "Mieszko I",
      "Leszek",
      "Piast",
      "Siemomysł",
      "Siemowit"
    ],
    "answer": [
      "Piast",
      "Siemowit",
      "Leszek",
      "Siemomysł",
      "Mieszko I"
    ],
    "explanation": "Podręcznik podaje kolejność: Piast, Siemowit, Leszek, Siemomysł, Mieszko I."
  },
  {
    "id": "R06_NAR_08",
    "section": "Narodziny państwa polskiego",
    "type": "single_choice",
    "prompt": "Który obszar był pierwotną siedzibą Polan?",
    "options": [
      "Centralna Wielkopolska",
      "Pomorze Zachodnie",
      "Ziemia sandomierska",
      "Ruś Kijowska",
      "Morawy",
      "Prusy"
    ],
    "answer": 0,
    "image": "/img/r06_mapa_panstwo_mieszka.jpg",
    "explanation": "Pierwotne siedziby Polan znajdowały się w centralnej Wielkopolsce."
  },
  {
    "id": "R06_NAR_09",
    "section": "Narodziny państwa polskiego",
    "type": "scenario",
    "prompt": "Mieszko I prowadzi zacięte walki z Wieletami. Nie może pokonać przeciwnika, więc zawiera sojusz z chrześcijańskim księciem Czech i poślubia jego córkę Dobrawę. Jaki przełomowy krok Mieszka był częścią tego porozumienia?",
    "options": [
      "Koronacja na króla",
      "Przyjęcie chrztu",
      "Założenie Krakowa",
      "Podział państwa na dzielnice",
      "Wyprawa do Prus",
      "Utworzenie arcybiskupstwa w Gnieźnie"
    ],
    "answer": 1,
    "explanation": "Jednym z warunków czesko-polskiego porozumienia było przyjęcie chrztu przez Mieszka I w 966 roku."
  },
  {
    "id": "R06_NAR_10",
    "section": "Narodziny państwa polskiego",
    "type": "true_false",
    "prompt": "Biskupstwo misyjne utworzone na ziemiach polskich miało podlegać bezpośrednio cesarzowi.",
    "options": null,
    "answer": false,
    "explanation": "Mieszko I zabiegał o biskupstwo misyjne bezpośrednio podległe papieżowi, aby uniknąć zależności od biskupów niemieckich."
  },
  {
    "id": "R06_NAR_11",
    "section": "Narodziny państwa polskiego",
    "type": "match",
    "prompt": "Połącz pojęcie z właściwym opisem.",
    "options": null,
    "left": [
      "wiec",
      "danina",
      "biskupstwo misyjne",
      "gród"
    ],
    "right": [
      "obowiązkowa opłata na rzecz władcy",
      "warowna siedziba władzy i drużyny",
      "zgromadzenie dorosłych mężczyzn plemienia",
      "jednostka kościelna podległa bezpośrednio papieżowi"
    ],
    "answer": {
      "wiec": "zgromadzenie dorosłych mężczyzn plemienia",
      "danina": "obowiązkowa opłata na rzecz władcy",
      "biskupstwo misyjne": "jednostka kościelna podległa bezpośrednio papieżowi",
      "gród": "warowna siedziba władzy i drużyny"
    },
    "image": "/img/r06_ostrow_lednicki_grod.jpg",
    "explanation": "Pojęcia te opisują organizację życia plemiennego i państwowego w początkach Polski Piastów."
  },
  {
    "id": "R06_NAR_12",
    "section": "Narodziny państwa polskiego",
    "type": "fill_in",
    "prompt": "W 972 roku Mieszko I pokonał margrabiego __________ w bitwie pod __________.",
    "options": null,
    "answer": [
      "Hodona",
      "Cedynią"
    ],
    "altAnswers": [
      [
        "Hodona",
        "Hodon"
      ],
      [
        "Cedynią",
        "Cedynia",
        "pod Cedynią"
      ]
    ],
    "explanation": "W bitwie pod Cedynią Mieszko I odparł najazd niemieckiego margrabiego Hodona."
  },
  {
    "id": "R06_CHR_01",
    "section": "Panowanie Bolesława Chrobrego",
    "type": "single_choice",
    "prompt": "Kto objął władzę w państwie polskim po śmierci Mieszka I w 992 roku?",
    "options": [
      "Bezprym",
      "Mieszko II",
      "Bolesław Chrobry",
      "Kazimierz Odnowiciel",
      "Władysław Herman",
      "Bolesław Śmiały"
    ],
    "answer": 2,
    "explanation": "Po śmierci Mieszka I władzę objął jego najstarszy syn, Bolesław Chrobry."
  },
  {
    "id": "R06_CHR_02",
    "section": "Panowanie Bolesława Chrobrego",
    "type": "true_false",
    "prompt": "Biskup Wojciech został wygnany z czeskiej Pragi, a następnie wyruszył z misją do Prusów.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik podaje, że Wojciech, wygnany z Pragi, udał się z misją chrystianizacyjną do pogańskich Prusów."
  },
  {
    "id": "R06_CHR_03",
    "section": "Panowanie Bolesława Chrobrego",
    "type": "scenario",
    "prompt": "Bolesław Chrobry wspiera wyprawę biskupa do ludu żyjącego za północną granicą państwa polskiego. Wyprawa ma szerzyć chrześcijaństwo i pokazać księcia jako prawdziwie chrześcijańskiego władcę. Którego biskupa dotyczy ta sytuacja?",
    "options": [
      "Stanisława",
      "Wojciecha",
      "Aleksandra",
      "Brunona",
      "Thietmara",
      "Galla Anonima"
    ],
    "answer": 1,
    "image": "/img/r06_drzwi_gnieznienskie_wojciech.jpg",
    "explanation": "Chodzi o biskupa Wojciecha, którego wyprawę do Prusów Bolesław Chrobry wsparł i zorganizował."
  },
  {
    "id": "R06_CHR_04",
    "section": "Panowanie Bolesława Chrobrego",
    "type": "fill_in",
    "prompt": "Wojciech udał się do Prus w __________ roku i został zabity przez __________.",
    "options": null,
    "answer": [
      "997",
      "Prusów"
    ],
    "altAnswers": [
      [
        "997",
        "997 roku"
      ],
      [
        "Prusów",
        "Prusowie",
        "pogańskich Prusów"
      ]
    ],
    "explanation": "Misja Wojciecha do Prusów odbyła się w 997 roku i zakończyła się śmiercią misjonarza z rąk Prusów."
  },
  {
    "id": "R06_CHR_05",
    "section": "Panowanie Bolesława Chrobrego",
    "type": "single_choice",
    "prompt": "Gdzie Bolesław Chrobry uroczyście pochował ciało biskupa Wojciecha?",
    "options": [
      "W Krakowie",
      "W Gnieźnie",
      "W Poznaniu",
      "W Kołobrzegu",
      "We Wrocławiu",
      "W Wolinie"
    ],
    "answer": 1,
    "image": "/img/r06_drzwi_gnieznienskie_wojciech.jpg",
    "explanation": "Po wykupieniu ciała misjonarza Bolesław Chrobry pochował je w Gnieźnie."
  },
  {
    "id": "R06_CHR_06",
    "section": "Panowanie Bolesława Chrobrego",
    "type": "multi_select",
    "prompt": "Zaznacz skutki śmierci biskupa Wojciecha opisane w podręczniku.",
    "options": [
      "Wojciech został ogłoszony świętym męczennikiem",
      "Wojciech został uznany za patrona Polski",
      "Relikwie Wojciecha pomogły w utworzeniu arcybiskupstwa",
      "Bolesław utracił Gniezno",
      "Prusowie przyjęli natychmiast chrzest",
      "Polska stała się dzielnicą cesarstwa"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "/img/r06_drzwi_gnieznienskie_wojciech.jpg",
    "explanation": "Śmierć Wojciecha doprowadziła do ogłoszenia go świętym i patronem Polski, a posiadanie jego relikwii ułatwiło powołanie polskiej prowincji kościelnej."
  },
  {
    "id": "R06_CHR_07",
    "section": "Panowanie Bolesława Chrobrego",
    "type": "match",
    "prompt": "Połącz siedzibę kościelną z jej rolą po utworzeniu polskiej prowincji kościelnej.",
    "options": null,
    "left": [
      "Gniezno",
      "Kraków",
      "Wrocław",
      "Kołobrzeg"
    ],
    "right": [
      "nowe biskupstwo",
      "arcybiskupstwo",
      "nowe biskupstwo na południu",
      "nowe biskupstwo nad Bałtykiem"
    ],
    "answer": {
      "Gniezno": "arcybiskupstwo",
      "Kraków": "nowe biskupstwo na południu",
      "Wrocław": "nowe biskupstwo",
      "Kołobrzeg": "nowe biskupstwo nad Bałtykiem"
    },
    "explanation": "Po zjeździe gnieźnieńskim arcybiskupstwo znalazło się w Gnieźnie, a nowo powołane biskupstwa w Krakowie, Wrocławiu i Kołobrzegu."
  },
  {
    "id": "R06_CHR_08",
    "section": "Panowanie Bolesława Chrobrego",
    "type": "true_false",
    "prompt": "Zjazd gnieźnieński odbył się w 1000 roku przy grobie św. Wojciecha.",
    "options": null,
    "answer": true,
    "image": "/img/r06_zjazd_gnieznienski.jpg",
    "explanation": "W 1000 roku cesarz Otton III przybył do grobu św. Wojciecha w Gnieźnie, gdzie ogłoszono powstanie polskiej prowincji kościelnej."
  },
  {
    "id": "R06_CHR_09",
    "section": "Panowanie Bolesława Chrobrego",
    "type": "single_choice",
    "prompt": "Jaki dar otrzymał Bolesław Chrobry od Ottona III podczas zjazdu gnieźnieńskiego?",
    "options": [
      "Koronę królewską",
      "Kopię włóczni św. Maurycego",
      "Relikwie św. Stanisława",
      "Denar z napisem Polonia",
      "Dokument testamentu",
      "Ziemię sandomierską"
    ],
    "answer": 1,
    "image": "/img/r06_zjazd_gnieznienski.jpg",
    "explanation": "Otton III ofiarował Bolesławowi kopię włóczni św. Maurycego, której oryginał był insygnium władzy cesarskiej."
  },
  {
    "id": "R06_CHR_10",
    "section": "Panowanie Bolesława Chrobrego",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z czasów Bolesława Chrobrego w porządku chronologicznym.",
    "options": null,
    "items": [
      "Pokój w Budziszynie",
      "Misja biskupa Wojciecha do Prusów",
      "Koronacja Bolesława Chrobrego",
      "Śmierć Ottona III",
      "Zjazd gnieźnieński"
    ],
    "answer": [
      "Misja biskupa Wojciecha do Prusów",
      "Zjazd gnieźnieński",
      "Śmierć Ottona III",
      "Pokój w Budziszynie",
      "Koronacja Bolesława Chrobrego"
    ],
    "explanation": "Kolejność wydarzeń to: misja Wojciecha w 997 roku, zjazd gnieźnieński w 1000 roku, śmierć Ottona III w 1002 roku, pokój w Budziszynie w 1018 roku i koronacja Chrobrego w 1025 roku."
  },
  {
    "id": "R06_CHR_11",
    "section": "Panowanie Bolesława Chrobrego",
    "type": "single_choice",
    "prompt": "Jaki pokój zakończył wieloletnie wojny Bolesława Chrobrego z Henrykiem II?",
    "options": [
      "Pokój w Budziszynie",
      "Pokój w Gnieźnie",
      "Pokój w Krakowie",
      "Pokój w Cedyni",
      "Pokój w Kijowie",
      "Pokój w Wolinie"
    ],
    "answer": 0,
    "image": "/img/r06_mapa_panstwo_chrobrego.jpg",
    "explanation": "W 1018 roku podpisano pokój w Budziszynie, po którym Chrobry zatrzymał Milsko i Łużyce."
  },
  {
    "id": "R06_CHR_12",
    "section": "Panowanie Bolesława Chrobrego",
    "type": "fill_in",
    "prompt": "W __________ roku Bolesław Chrobry koronował się na __________ Polski.",
    "options": null,
    "answer": [
      "1025",
      "króla"
    ],
    "altAnswers": [
      [
        "1025",
        "1025 roku"
      ],
      [
        "króla",
        "król"
      ]
    ],
    "explanation": "Koronacja Bolesława Chrobrego w 1025 roku potwierdzała niezależność Polski i jej miejsce wśród chrześcijańskich państw Europy."
  },
  {
    "id": "R06_ODB_01",
    "section": "Upadek i odbudowa państwa Piastów",
    "type": "single_choice",
    "prompt": "Kim był Mieszko II dla Bolesława Chrobrego?",
    "options": [
      "Bratem",
      "Synem",
      "Ojcem",
      "Wnukiem",
      "Wujem",
      "Doradcą"
    ],
    "answer": 1,
    "image": "/img/r06_mieszko_ii_matylda.jpg",
    "explanation": "Mieszko II był synem Bolesława Chrobrego i objął władzę po jego śmierci."
  },
  {
    "id": "R06_ODB_02",
    "section": "Upadek i odbudowa państwa Piastów",
    "type": "true_false",
    "prompt": "Mieszko II koronował się na króla w 1025 roku, czyli w tym samym roku, w którym zmarł Bolesław Chrobry.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik podaje, że Mieszko II objął rządy po śmierci Chrobrego i jeszcze w 1025 roku koronował się na króla."
  },
  {
    "id": "R06_ODB_03",
    "section": "Upadek i odbudowa państwa Piastów",
    "type": "multi_select",
    "prompt": "Zaznacz przyczyny lub przejawy kryzysu państwa piastowskiego po rządach Bolesława Chrobrego.",
    "options": [
      "Najazd wojsk cesarskich i ruskich",
      "Wysokie daniny obciążające poddanych",
      "Bunty przeciw władzy książęcej i Kościołowi",
      "Najazd czeski na Gniezno",
      "Testament Bolesława Krzywoustego",
      "Założenie biskupstwa w Wolinie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Kryzys pogłębiły najazdy sąsiadów, wysokie daniny, bunty przeciw władzy i Kościołowi oraz niszczący najazd czeski."
  },
  {
    "id": "R06_ODB_04",
    "section": "Upadek i odbudowa państwa Piastów",
    "type": "single_choice",
    "prompt": "Kto przejął władzę w Polsce po ucieczce Mieszka II z kraju w 1031 roku?",
    "options": [
      "Bezprym",
      "Kazimierz Odnowiciel",
      "Bolesław Śmiały",
      "Władysław Herman",
      "Zbigniew",
      "Henryk V"
    ],
    "answer": 0,
    "explanation": "Po ucieczce Mieszka II na polskim tronie zasiadł jego brat Bezprym, który zrzekł się tytułu królewskiego."
  },
  {
    "id": "R06_ODB_05",
    "section": "Upadek i odbudowa państwa Piastów",
    "type": "fill_in",
    "prompt": "Za rządów Bezpryma Grody Czerwieńskie przyłączono do __________, a Milsko i Łużyce do __________.",
    "options": null,
    "answer": [
      "Rusi",
      "cesarstwa"
    ],
    "altAnswers": [
      [
        "Rusi",
        "Rusi Kijowskiej"
      ],
      [
        "cesarstwa",
        "Cesarstwa",
        "Niemiec"
      ]
    ],
    "explanation": "Po klęskach Mieszka II Grody Czerwieńskie zajęła Ruś, natomiast Milsko i Łużyce wróciły pod władzę cesarstwa."
  },
  {
    "id": "R06_ODB_06",
    "section": "Upadek i odbudowa państwa Piastów",
    "type": "riddle",
    "prompt": "Syn Mieszka II, który powrócił z wygnania i rozpoczął odbudowę państwa polskiego, to...",
    "options": null,
    "answer": "Kazimierz Odnowiciel",
    "altAnswers": [
      "Kazimierz Odnowiciel",
      "Kazimierz",
      "Kazimierz I Odnowiciel"
    ],
    "explanation": "Kazimierz Odnowiciel odbudował państwo po okresie buntów i najazdów."
  },
  {
    "id": "R06_ODB_07",
    "section": "Upadek i odbudowa państwa Piastów",
    "type": "match",
    "prompt": "Połącz wydarzenie z właściwym rokiem.",
    "options": null,
    "left": [
      "Najazd cesarza i księcia Rusi na Polskę",
      "Najazd czeski i zniszczenie Gniezna",
      "Koronacja Bolesława Śmiałego",
      "Konflikt Bolesława Śmiałego ze Stanisławem"
    ],
    "right": [
      "1031",
      "1039",
      "1076",
      "1079"
    ],
    "answer": {
      "Najazd cesarza i księcia Rusi na Polskę": "1031",
      "Najazd czeski i zniszczenie Gniezna": "1039",
      "Koronacja Bolesława Śmiałego": "1076",
      "Konflikt Bolesława Śmiałego ze Stanisławem": "1079"
    },
    "explanation": "Daty te wyznaczają kryzys i odbudowę państwa pierwszych Piastów oraz późniejsze rządy Bolesława Śmiałego."
  },
  {
    "id": "R06_ODB_08",
    "section": "Upadek i odbudowa państwa Piastów",
    "type": "single_choice",
    "prompt": "Który gród Kazimierz Odnowiciel obrał za swoją główną siedzibę po zniszczeniu Gniezna?",
    "options": [
      "Gniezno",
      "Kraków",
      "Poznań",
      "Kołobrzeg",
      "Wolin",
      "Płock"
    ],
    "answer": 1,
    "explanation": "Kazimierz Odnowiciel wybrał Kraków, który odtąd zaczął pełnić funkcję stołecznego grodu."
  },
  {
    "id": "R06_ODB_09",
    "section": "Upadek i odbudowa państwa Piastów",
    "type": "true_false",
    "prompt": "Bolesław Śmiały poparł papieża Grzegorza VII w sporze cesarstwa z papiestwem i dzięki temu uzyskał zgodę na koronację.",
    "options": null,
    "answer": true,
    "explanation": "Bolesław Śmiały poparł Grzegorza VII, a w 1076 roku koronował się na króla Polski."
  },
  {
    "id": "R06_ODB_10",
    "section": "Upadek i odbudowa państwa Piastów",
    "type": "scenario",
    "prompt": "Król uznaje napomnienie duchownego za zdradę i skazuje go na śmierć. Wydarzenie wstrząsa możnymi i prowadzi do buntu, po którym król musi uciekać z kraju. Którego biskupa dotyczy ta sytuacja?",
    "options": [
      "Wojciecha",
      "Stanisława",
      "Aleksandra",
      "Thietmara",
      "Galla Anonima",
      "Dobrawy"
    ],
    "answer": 1,
    "image": "/img/r06_smierc_biskupa_stanislawa.jpg",
    "explanation": "Sytuacja dotyczy biskupa krakowskiego Stanisława, którego śmierć doprowadziła do buntu możnych przeciw Bolesławowi Śmiałemu."
  },
  {
    "id": "R06_ODB_11",
    "section": "Upadek i odbudowa państwa Piastów",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Kazimierz Odnowiciel, odbudowa państwa, Kraków, odzyskanie Śląska, testament.",
    "options": null,
    "answer": "testament",
    "explanation": "Testament wiąże się z Bolesławem Krzywoustym, a pozostałe elementy dotyczą Kazimierza Odnowiciela i odbudowy państwa."
  },
  {
    "id": "R06_ODB_12",
    "section": "Upadek i odbudowa państwa Piastów",
    "type": "sort",
    "prompt": "Przyporządkuj postacie do etapu dziejów, z którym są najmocniej związane w podręczniku.",
    "options": null,
    "items": [
      "Mieszko II",
      "Bezprym",
      "Kazimierz Odnowiciel",
      "Bolesław Śmiały",
      "Stanisław"
    ],
    "categories": [
      "kryzys państwa",
      "odbudowa państwa",
      "konflikt 1079 roku"
    ],
    "answer": {
      "kryzys państwa": [
        "Mieszko II",
        "Bezprym"
      ],
      "odbudowa państwa": [
        "Kazimierz Odnowiciel"
      ],
      "konflikt 1079 roku": [
        "Bolesław Śmiały",
        "Stanisław"
      ]
    },
    "explanation": "Mieszko II i Bezprym należą do czasu kryzysu, Kazimierz Odnowiciel do odbudowy, a Bolesław Śmiały i Stanisław do późniejszego konfliktu kończącego rządy króla."
  },
  {
    "id": "R06_KRZ_01",
    "section": "Panowanie Bolesława Krzywoustego",
    "type": "single_choice",
    "prompt": "Kogo możnowładcy osadzili na tronie po wygnaniu Bolesława Śmiałego?",
    "options": [
      "Zbigniewa",
      "Bolesława Krzywoustego",
      "Władysława Hermana",
      "Mieszka II",
      "Kazimierza Odnowiciela",
      "Henryka V"
    ],
    "answer": 2,
    "explanation": "Po wygnaniu Bolesława Śmiałego możnowładcy osadzili na tronie jego brata, Władysława Hermana."
  },
  {
    "id": "R06_KRZ_02",
    "section": "Panowanie Bolesława Krzywoustego",
    "type": "multi_select",
    "prompt": "Zaznacz informacje zgodne z opisem Władysława Hermana.",
    "options": [
      "Nie koronował się na króla",
      "Zwykle ulegał wpływom możnych",
      "Był bratem Bolesława Śmiałego",
      "Podbił całe Pomorze w 1122 roku",
      "Ustanowił zasadę senioratu",
      "Poparł papieża Grzegorza VII"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Władysław Herman był słabym władcą, nie koronował się na króla i zwykle ulegał wpływom możnych."
  },
  {
    "id": "R06_KRZ_03",
    "section": "Panowanie Bolesława Krzywoustego",
    "type": "true_false",
    "prompt": "Zbigniew prowadził ostrożną politykę i podporządkował się cesarzowi, a młodszy Bolesław działał bardziej samodzielnie i wojowniczo.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik wyraźnie przeciwstawia ostrożną politykę Zbigniewa samodzielniejszym i wojowniczym działaniom Bolesława Krzywoustego."
  },
  {
    "id": "R06_KRZ_04",
    "section": "Panowanie Bolesława Krzywoustego",
    "type": "scenario",
    "prompt": "Niemiecki władca Henryk V wstawia się za Zbigniewem i w 1109 roku rusza z wojskiem do Polski. Oddziały nie zdobywają żadnego ważnego grodu i są nękane przez wojska Bolesława. Jak zakończyła się ta wyprawa Henryka V?",
    "options": [
      "Zwycięstwem Henryka V i koronacją Zbigniewa",
      "Zawieszeniem broni po nieudanej wyprawie Henryka V",
      "Natychmiastowym podziałem kraju na dzielnice",
      "Zdobyciem Krakowa przez Henryka V",
      "Utratą Pomorza przez Bolesława",
      "Utworzeniem arcybiskupstwa w Gnieźnie"
    ],
    "answer": 1,
    "explanation": "Henryk V nie odniósł zwycięstwa i musiał zakończyć wojnę zawieszeniem broni."
  },
  {
    "id": "R06_KRZ_05",
    "section": "Panowanie Bolesława Krzywoustego",
    "type": "single_choice",
    "prompt": "Który gród zasłynął z pełnej poświęcenia obrony podczas najazdu Henryka V w 1109 roku?",
    "options": [
      "Głogów",
      "Kraków",
      "Gniezno",
      "Poznań",
      "Wolin",
      "Sandomierz"
    ],
    "answer": 0,
    "image": "/img/r06_obrona_glogowa.jpg",
    "explanation": "Podczas najazdu Henryka V szczególnie zasłynęła obrona Głogowa."
  },
  {
    "id": "R06_KRZ_06",
    "section": "Panowanie Bolesława Krzywoustego",
    "type": "fill_in",
    "prompt": "Ostatecznie w __________ roku całe Pomorze znalazło się pod władzą Bolesława __________.",
    "options": null,
    "answer": [
      "1122",
      "Krzywoustego"
    ],
    "altAnswers": [
      [
        "1122",
        "1122 roku"
      ],
      [
        "Krzywoustego",
        "Bolesława Krzywoustego"
      ]
    ],
    "explanation": "Podręcznik podaje, że w 1122 roku całe Pomorze znalazło się pod władzą Bolesława Krzywoustego."
  },
  {
    "id": "R06_KRZ_07",
    "section": "Panowanie Bolesława Krzywoustego",
    "type": "match",
    "prompt": "Połącz miejsce lub pojęcie z jego znaczeniem w czasach Bolesława Krzywoustego.",
    "options": null,
    "left": [
      "Wolin",
      "Włocławek",
      "Kraków",
      "dzielnica senioralna"
    ],
    "right": [
      "biskupstwo dla Pomorza Zachodniego",
      "biskupstwo dla Kujaw i Pomorza Gdańskiego",
      "stołeczny gród seniora",
      "niepodzielna i niedziedziczna część kraju"
    ],
    "answer": {
      "Wolin": "biskupstwo dla Pomorza Zachodniego",
      "Włocławek": "biskupstwo dla Kujaw i Pomorza Gdańskiego",
      "Kraków": "stołeczny gród seniora",
      "dzielnica senioralna": "niepodzielna i niedziedziczna część kraju"
    },
    "explanation": "Wolin i Włocławek wiązały się z organizacją kościelną na zdobytych ziemiach, a Kraków i dzielnica senioralna z testamentem Krzywoustego."
  },
  {
    "id": "R06_KRZ_08",
    "section": "Panowanie Bolesława Krzywoustego",
    "type": "riddle",
    "prompt": "Zasada, zgodnie z którą zwierzchnią władzę miał sprawować najstarszy wiekiem przedstawiciel rodu Piastów, to...",
    "options": null,
    "answer": "seniorat",
    "altAnswers": [
      "seniorat",
      "zasada senioratu"
    ],
    "explanation": "Seniorat miał oddać władzę zwierzchnią seniorowi, czyli najstarszemu przedstawicielowi dynastii Piastów."
  },
  {
    "id": "R06_KRZ_09",
    "section": "Panowanie Bolesława Krzywoustego",
    "type": "multi_select",
    "prompt": "Zaznacz ziemie wchodzące w skład dzielnicy senioralnej według podręcznika.",
    "options": [
      "Małopolska",
      "Ziemia sieradzka i łęczycka",
      "Wschodnia Wielkopolska z Gnieznem i Kaliszem",
      "Mazowsze",
      "Śląsk",
      "Pomorze Zachodnie"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "/img/r06_podzial_dzielnicowy.jpg",
    "explanation": "Dzielnica senioralna obejmowała Małopolskę, ziemie sieradzką i łęczycką oraz wschodnią Wielkopolskę z Gnieznem i Kaliszem."
  },
  {
    "id": "R06_KRZ_10",
    "section": "Panowanie Bolesława Krzywoustego",
    "type": "true_false",
    "prompt": "Dzielnica senioralna była niepodzielna i niedziedziczna, więc synowie zmarłego seniora nie mogli jej podzielić między siebie.",
    "options": null,
    "answer": true,
    "image": "/img/r06_podzial_dzielnicowy.jpg",
    "explanation": "Władza nad dzielnicą senioralną miała przechodzić na kolejnego seniora, a nie na synów poprzedniego."
  },
  {
    "id": "R06_KRZ_11",
    "section": "Panowanie Bolesława Krzywoustego",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z życia politycznego Bolesława Krzywoustego w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Podbój całego Pomorza",
      "Najazd Henryka V na Polskę",
      "Śmierć Bolesława Krzywoustego i początek rozbicia dzielnicowego",
      "Wspólne rządy Zbigniewa i Bolesława Krzywoustego"
    ],
    "answer": [
      "Wspólne rządy Zbigniewa i Bolesława Krzywoustego",
      "Najazd Henryka V na Polskę",
      "Podbój całego Pomorza",
      "Śmierć Bolesława Krzywoustego i początek rozbicia dzielnicowego"
    ],
    "explanation": "Najpierw władzę objęli synowie Władysława Hermana, potem doszło do najazdu Henryka V w 1109 roku, podboju Pomorza w 1122 roku i testamentu z 1138 roku."
  },
  {
    "id": "R06_KRZ_12",
    "section": "Panowanie Bolesława Krzywoustego",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Pomorze Gdańskie, Pomorze Zachodnie, Wolin, Włocławek, Śląsk.",
    "options": null,
    "answer": "Śląsk",
    "explanation": "Śląsk nie należy do zestawu pojęć związanych z podbojem i chrystianizacją Pomorza przez Bolesława Krzywoustego."
  },
  {
    "id": "R06_SPO_01",
    "section": "Społeczeństwo pierwszych Piastów",
    "type": "single_choice",
    "prompt": "Która grupa była najliczniejsza w społeczeństwie Polski pierwszych Piastów?",
    "options": [
      "Chłopi",
      "Możnowładcy",
      "Duchowni",
      "Kupcy dalekomorscy",
      "Kasztelanowie",
      "Kronikarze"
    ],
    "answer": 0,
    "explanation": "Najliczniejszą grupą społeczeństwa byli chłopi, czyli ludność wiejska utrzymująca się głównie z rolnictwa."
  },
  {
    "id": "R06_SPO_02",
    "section": "Społeczeństwo pierwszych Piastów",
    "type": "multi_select",
    "prompt": "Zaznacz zajęcia lub uprawy ludności wiejskiej wymienione w podręczniku.",
    "options": [
      "Uprawa prosa",
      "Uprawa jęczmienia i żyta",
      "Wypas bydła",
      "Hodowla pszczół",
      "Produkcja armat",
      "Budowa kolei"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Chłopi uprawiali proso, jęczmień i żyto, wypasali bydło, hodowali pszczoły, a także korzystali z myślistwa i rybołówstwa."
  },
  {
    "id": "R06_SPO_03",
    "section": "Społeczeństwo pierwszych Piastów",
    "type": "true_false",
    "prompt": "W X wieku w państwie piastowskim żyło około miliona ludzi, a dużą część kraju pokrywały puszcze.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik podaje, że w X wieku państwo piastowskie liczyło około miliona mieszkańców, a niemal całą powierzchnię kraju pokrywały puszcze."
  },
  {
    "id": "R06_SPO_04",
    "section": "Społeczeństwo pierwszych Piastów",
    "type": "fill_in",
    "prompt": "Gród wraz z podporządkowanym mu obszarem tworzył __________, którym zarządzał pan grodowy, później nazywany __________.",
    "options": null,
    "answer": [
      "okręg grodowy",
      "kasztelanem"
    ],
    "altAnswers": [
      [
        "okręg grodowy",
        "okreg grodowy"
      ],
      [
        "kasztelanem",
        "kasztelan"
      ]
    ],
    "image": "/img/r06_grod_podgrodzie_poznan.jpg",
    "explanation": "Okręgiem grodowym zarządzał mianowany przez władcę pan grodowy, w późniejszym okresie zwany kasztelanem."
  },
  {
    "id": "R06_SPO_05",
    "section": "Społeczeństwo pierwszych Piastów",
    "type": "match",
    "prompt": "Połącz rzemieślnika z wyrobem lub zajęciem typowym dla podgrodzia.",
    "options": null,
    "left": [
      "kowal",
      "garncarz",
      "kołodziej",
      "piekarz"
    ],
    "right": [
      "wyroby z metalu",
      "naczynia",
      "koła i wozy",
      "chleb"
    ],
    "answer": {
      "kowal": "wyroby z metalu",
      "garncarz": "naczynia",
      "kołodziej": "koła i wozy",
      "piekarz": "chleb"
    },
    "image": "/img/r06_grod_podgrodzie_poznan.jpg",
    "explanation": "Na podgrodziach osiedlali się między innymi kowale, garncarze, kołodzieje, piekarze i piwowarzy."
  },
  {
    "id": "R06_SPO_06",
    "section": "Społeczeństwo pierwszych Piastów",
    "type": "riddle",
    "prompt": "Osady, których mieszkańcy wykonywali określone zadania na rzecz księcia, grodów lub drużyny, to...",
    "options": null,
    "answer": "osady służebne",
    "altAnswers": [
      "osady służebne",
      "osada służebna"
    ],
    "image": "/img/r06_osady_sluzebne_wielkopolska.jpg",
    "explanation": "Osady służebne powstały wtedy, gdy część ludności wiejskiej otrzymała specjalne obowiązki wobec władcy."
  },
  {
    "id": "R06_SPO_07",
    "section": "Społeczeństwo pierwszych Piastów",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Szczytniki, Grotniki, Szewce, Piekary, Kraków.",
    "options": null,
    "answer": "Kraków",
    "image": "/img/r06_osady_sluzebne_wielkopolska.jpg",
    "explanation": "Szczytniki, Grotniki, Szewce i Piekary to przykłady nazw osad służebnych, natomiast Kraków był grodem stołecznym."
  },
  {
    "id": "R06_SPO_08",
    "section": "Społeczeństwo pierwszych Piastów",
    "type": "single_choice",
    "prompt": "Jak nazywał się najważniejszy urzędnik, który w zastępstwie władcy dowodził wojami i zarządzał dworem?",
    "options": [
      "wojewoda",
      "kasztelan",
      "biskup",
      "senior",
      "kołodziej",
      "piekarz"
    ],
    "answer": 0,
    "explanation": "Najważniejszym urzędnikiem był wojewoda, którego nazwa wiąże się z dowodzeniem wojami."
  },
  {
    "id": "R06_SPO_09",
    "section": "Społeczeństwo pierwszych Piastów",
    "type": "true_false",
    "prompt": "Kazimierz Odnowiciel zaczął nadawać drużynnikom ziemię, a oni w zamian mieli stawiać się zbrojnie na wezwanie władcy.",
    "options": null,
    "answer": true,
    "explanation": "Zmiana ta zmniejszała koszt utrzymania drużyny i z czasem doprowadziła do ukształtowania się rycerstwa."
  },
  {
    "id": "R06_SPO_10",
    "section": "Społeczeństwo pierwszych Piastów",
    "type": "sort",
    "prompt": "Przyporządkuj grupy społeczne do ich najważniejszych ról w państwie pierwszych Piastów.",
    "options": null,
    "items": [
      "chłopi",
      "woje",
      "możnowładcy",
      "duchowni"
    ],
    "categories": [
      "praca na roli i daniny",
      "służba zbrojna",
      "najwyższe urzędy",
      "religia, pismo i szkoły"
    ],
    "answer": {
      "praca na roli i daniny": [
        "chłopi"
      ],
      "służba zbrojna": [
        "woje"
      ],
      "najwyższe urzędy": [
        "możnowładcy"
      ],
      "religia, pismo i szkoły": [
        "duchowni"
      ]
    },
    "explanation": "Chłopi utrzymywali państwo daninami i posługami, woje służyli zbrojnie, możnowładcy pełnili urzędy, a duchowni zajmowali się religią, pismem i szkołami."
  },
  {
    "id": "R06_SPO_11",
    "section": "Społeczeństwo pierwszych Piastów",
    "type": "multi_select",
    "prompt": "Zaznacz zadania duchownych w państwie pierwszych Piastów.",
    "options": [
      "Uczenie zasad nowej wiary",
      "Doradzanie władcy",
      "Prowadzenie książęcej kancelarii",
      "Organizowanie szkół przy klasztorach i katedrach",
      "Wyrabianie tarcz w Szczytnikach",
      "Dowodzenie wszystkimi wojami jako wojewoda"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Duchowni byli ludźmi wykształconymi: uczyli zasad wiary, doradzali władcy, prowadzili kancelarię i organizowali szkoły."
  },
  {
    "id": "R06_SPO_12",
    "section": "Społeczeństwo pierwszych Piastów",
    "type": "scenario",
    "prompt": "Mieszkaniec podgrodzia wykonuje naczynia potrzebne mieszkańcom grodu i okolicznej ludności wiejskiej. Jak nazywał się taki rzemieślnik?",
    "options": [
      "garncarz",
      "kołodziej",
      "piwowar",
      "kasztelan",
      "wojewoda",
      "senior"
    ],
    "answer": 0,
    "image": "/img/r06_grod_podgrodzie_poznan.jpg",
    "explanation": "Rzemieślnik wytwarzający naczynia to garncarz, a garncarze należeli do grup osiedlających się na podgrodziach."
  },
  {
    "id": "R06_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które państwo podbiło państwo Wiślan według podręcznika?",
    "options": [
      "Państwo Wielkomorawskie",
      "Ruś Kijowska",
      "Cesarstwo Niemieckie",
      "Związek Wielecki",
      "Królestwo Węgierskie",
      "Dania"
    ],
    "answer": 0,
    "explanation": "Państwo Wiślan zostało wkrótce podbite przez książąt Wielkich Moraw."
  },
  {
    "id": "R06_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Biskupstwo misyjne z siedzibą w Poznaniu miało podlegać bezpośrednio __________, aby ograniczyć groźbę politycznego uzależnienia Polski od __________.",
    "options": null,
    "answer": [
      "papieża",
      "cesarstwa"
    ],
    "altAnswers": [
      [
        "papieża",
        "papiez",
        "papieżowi"
      ],
      [
        "cesarstwa",
        "Cesarstwa",
        "Niemiec"
      ]
    ],
    "explanation": "Bezpośrednia zależność od papieża miała zapobiec prowadzeniu chrystianizacji przez biskupów niemieckich i uzależnieniu od cesarstwa."
  },
  {
    "id": "R06_HARD_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz autora lub źródło z informacją, którą podręcznik z nim wiąże.",
    "options": null,
    "left": [
      "Thietmar",
      "Gall Anonim",
      "Wincenty Kadłubek",
      "Drzwi Gnieźnieńskie"
    ],
    "right": [
      "opowieść o roli Dobrawy w chrzcie Mieszka",
      "kronika o upadku państwa i pieśń wojów",
      "opis gestu Ottona wobec Bolesława",
      "sceny z życia św. Wojciecha"
    ],
    "answer": {
      "Thietmar": "opowieść o roli Dobrawy w chrzcie Mieszka",
      "Gall Anonim": "kronika o upadku państwa i pieśń wojów",
      "Wincenty Kadłubek": "opis gestu Ottona wobec Bolesława",
      "Drzwi Gnieźnieńskie": "sceny z życia św. Wojciecha"
    },
    "explanation": "Podręcznik przywołuje kilku kronikarzy i źródła, aby opisać początki państwa Piastów oraz późniejszą pamięć o tych wydarzeniach."
  },
  {
    "id": "R06_HARD_04",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "Zjazd gnieźnieński",
      "Chrzest Mieszka I",
      "Pokój w Budziszynie",
      "Najazd Henryka V",
      "Koronacja Bolesława Śmiałego",
      "Śmierć Bolesława Krzywoustego"
    ],
    "answer": [
      "Chrzest Mieszka I",
      "Zjazd gnieźnieński",
      "Pokój w Budziszynie",
      "Koronacja Bolesława Śmiałego",
      "Najazd Henryka V",
      "Śmierć Bolesława Krzywoustego"
    ],
    "explanation": "Daty z rozdziału układają się od chrztu Mieszka I w 966 roku do śmierci Bolesława Krzywoustego i początku rozbicia dzielnicowego w 1138 roku."
  },
  {
    "id": "R06_HARD_05",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaki dar otrzymał Otton III od Bolesława Chrobrego podczas zjazdu gnieźnieńskiego?",
    "options": [
      "Ramię św. Wojciecha",
      "Koronę królewską",
      "Śląsk",
      "Kopię włóczni św. Maurycego",
      "Denar z orłem",
      "Testament senioralny"
    ],
    "answer": 0,
    "image": "/img/r06_zjazd_gnieznienski.jpg",
    "explanation": "Bolesław Chrobry przekazał Ottonowi III cenną relikwię - ramię św. Wojciecha."
  },
  {
    "id": "R06_HARD_06",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz trzy nowo powołane biskupstwa podległe arcybiskupowi gnieźnieńskiemu po zjeździe gnieźnieńskim.",
    "options": [
      "Kraków",
      "Wrocław",
      "Kołobrzeg",
      "Poznań",
      "Płock",
      "Wolin"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Nowo powołane biskupstwa znajdowały się w Krakowie, Wrocławiu i Kołobrzegu; Poznańskie biskupstwo misyjne podporządkowano arcybiskupowi później."
  },
  {
    "id": "R06_HARD_07",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Bolesław Śmiały doprowadził do ustanowienia nowego biskupstwa w Płocku.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik podaje, że Bolesław Śmiały troszczył się o Kościół i doprowadził do ustanowienia biskupstwa w Płocku."
  },
  {
    "id": "R06_HARD_08",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Małopolska, ziemia sieradzka, ziemia łęczycka, wschodnia Wielkopolska, Mazowsze.",
    "options": null,
    "answer": "Mazowsze",
    "image": "/img/r06_podzial_dzielnicowy.jpg",
    "explanation": "Mazowsze było dzielnicą jednego z młodszych synów Krzywoustego, a pozostałe elementy wchodziły w skład dzielnicy senioralnej."
  },
  {
    "id": "R06_HARD_09",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Na dworze księcia ktoś sporządza dokumenty, pisze listy do innych monarchów i zna pismo. Do której grupy społecznej najpewniej należy ta osoba?",
    "options": [
      "duchowni",
      "chłopi",
      "niewolnicy",
      "kołodzieje",
      "bartnicy",
      "zakładnicy"
    ],
    "answer": 0,
    "explanation": "W państwie pierwszych Piastów duchowni byli jedyną grupą ludzi wykształconych i prowadzili książęcą kancelarię."
  },
  {
    "id": "R06_HARD_10",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Gall Anonim przebywał na dworze __________, a pierwszą kronikę dziejów Polski napisał jako cudzoziemski __________.",
    "options": null,
    "answer": [
      "Bolesława Krzywoustego",
      "duchowny"
    ],
    "altAnswers": [
      [
        "Bolesława Krzywoustego",
        "Krzywoustego"
      ],
      [
        "duchowny",
        "ksiądz",
        "cudzoziemski duchowny"
      ]
    ],
    "explanation": "Podręcznik wyjaśnia, że Gall Anonim był cudzoziemskim duchownym przebywającym na dworze Bolesława Krzywoustego."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r06",
  number: 6,
  title: "Polska pierwszych Piastów",
  icon: "🦅",
  sectionOrder: [
    "Narodziny państwa polskiego",
    "Panowanie Bolesława Chrobrego",
    "Upadek i odbudowa państwa Piastów",
    "Panowanie Bolesława Krzywoustego",
    "Społeczeństwo pierwszych Piastów",
    "Super trudne"
  ],
  sectionIcons: {
    "Narodziny państwa polskiego": "🌱",
    "Panowanie Bolesława Chrobrego": "👑",
    "Upadek i odbudowa państwa Piastów": "🏗️",
    "Panowanie Bolesława Krzywoustego": "🛡️",
    "Społeczeństwo pierwszych Piastów": "🏘️",
    "Super trudne": "🔥"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
