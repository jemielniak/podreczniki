// Skróty sekcji:
//   ZAN = Zanim powstała Polska
//   MIE = Mieszko I i początki Polski
//   CHR = Polska Bolesława Chrobrego
//   KRY = Kryzys i odbudowa państwa
//   KRZ = Rządy Bolesława Krzywoustego
//   SPO = Społeczeństwo i kronikarze
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R06_ZAN_01",
    "section": "Zanim powstała Polska",
    "type": "single_choice",
    "prompt": "Skąd historycy wiedzą o ludach żyjących na ziemiach polskich przed powstaniem Polski?",
    "options": [
      "Z wykopalisk archeologicznych",
      "Z gazet drukowanych w Biskupinie",
      "Z kronik Mieszka I",
      "Z dokumentów sejmowych",
      "Z listów Ottona III",
      "Z roczników zakonu krzyżackiego"
    ],
    "answer": 0,
    "explanation": "O najdawniejszej przeszłości ziem polskich wiemy głównie dzięki wykopaliskom archeologicznym, takim jak resztki grodów, kurhany i kamienne kręgi.",
    "image": "/img/r06_grod_biskupin.jpg"
  },
  {
    "id": "R06_ZAN_02",
    "section": "Zanim powstała Polska",
    "type": "true_false",
    "prompt": "Słowianie osiedlali się w Europie wschodniej, środkowej i południowej od V do VIII wieku.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik wskazuje V-VIII wiek jako czas zasiedlania tych obszarów Europy przez Słowian."
  },
  {
    "id": "R06_ZAN_03",
    "section": "Zanim powstała Polska",
    "type": "multi_select",
    "prompt": "Zaznacz zajęcia i umiejętności dawnych Słowian wymienione w podręczniku.",
    "options": [
      "Rolnictwo",
      "Rybołówstwo",
      "Łowiectwo",
      "Garncarstwo",
      "Kowalstwo",
      "Drukowanie książek"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Słowianie zajmowali się rolnictwem, rybołówstwem i łowiectwem oraz znali rzemiosła, między innymi garncarstwo i kowalstwo."
  },
  {
    "id": "R06_ZAN_04",
    "section": "Zanim powstała Polska",
    "type": "fill_in",
    "prompt": "Słowianie czcili wielu bogów, między innymi boga ognia i słońca __________ oraz władającego piorunami __________.",
    "options": null,
    "answer": [
      "Swaroga",
      "Peruna"
    ],
    "altAnswers": [
      [
        "Swaroga",
        "Swaróg",
        "Swarożyca"
      ],
      [
        "Peruna",
        "Perun"
      ]
    ],
    "explanation": "Swaróg był bogiem ognia i słońca, a Perun według wierzeń władał niebem i piorunami."
  },
  {
    "id": "R06_ZAN_05",
    "section": "Zanim powstała Polska",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Swaróg, Perun, Świętowit, Jordan.",
    "options": null,
    "answer": "Jordan",
    "explanation": "Swaróg, Perun i Świętowit to bóstwa słowiańskie, a Jordan był pierwszym biskupem w państwie Mieszka I."
  },
  {
    "id": "R06_ZAN_06",
    "section": "Zanim powstała Polska",
    "type": "riddle",
    "prompt": "Jak nazywało się państwo słowiańskie powstałe około 830 roku na Morawach?",
    "options": null,
    "answer": "Państwo Wielkomorawskie",
    "altAnswers": [
      "Państwo Wielkomorawskie",
      "Wielkie Morawy",
      "państwo wielkomorawskie"
    ],
    "explanation": "Około 830 roku na Morawach powstało Państwo Wielkomorawskie, jedno z pierwszych państw słowiańskich."
  },
  {
    "id": "R06_ZAN_07",
    "section": "Zanim powstała Polska",
    "type": "match",
    "prompt": "Połącz bóstwo lub postać z opisem.",
    "options": null,
    "left": [
      "Swaróg",
      "Perun",
      "Świętowit",
      "Marzanna"
    ],
    "right": [
      "bóg ognia i słońca",
      "władca nieba i piorunów",
      "pan wojny, płodności i urodzaju",
      "słowiańska bogini śmierci"
    ],
    "answer": {
      "Swaróg": "bóg ognia i słońca",
      "Perun": "władca nieba i piorunów",
      "Świętowit": "pan wojny, płodności i urodzaju",
      "Marzanna": "słowiańska bogini śmierci"
    },
    "explanation": "Podręcznik opisuje te postacie jako elementy wierzeń dawnych Słowian.",
    "image": "/img/r06_slowianskie_obrzedy.jpg"
  },
  {
    "id": "R06_ZAN_08",
    "section": "Zanim powstała Polska",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do właściwych kategorii.",
    "options": null,
    "items": [
      "topienie Marzanny",
      "Śmigus-Dyngus",
      "noc świętojańska",
      "gaje",
      "źródła",
      "szczyty gór"
    ],
    "categories": [
      "tradycje wywodzące się z wierzeń",
      "miejsca uważane przez Słowian za święte"
    ],
    "answer": {
      "tradycje wywodzące się z wierzeń": [
        "topienie Marzanny",
        "Śmigus-Dyngus",
        "noc świętojańska"
      ],
      "miejsca uważane przez Słowian za święte": [
        "gaje",
        "źródła",
        "szczyty gór"
      ]
    },
    "explanation": "Wiele współczesnych zwyczajów ma korzenie w dawnych wierzeniach, a obrzędy odprawiano w miejscach uznawanych za święte."
  },
  {
    "id": "R06_ZAN_09",
    "section": "Zanim powstała Polska",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "Powstanie państwa Polan",
      "Powstanie Państwa Wielkomorawskiego",
      "Wielka wędrówka ludów",
      "Osiedlanie się Słowian w Europie"
    ],
    "answer": [
      "Wielka wędrówka ludów",
      "Osiedlanie się Słowian w Europie",
      "Powstanie Państwa Wielkomorawskiego",
      "Powstanie państwa Polan"
    ],
    "explanation": "Najpierw trwała wielka wędrówka ludów, potem Słowianie zasiedlali Europę, około 830 roku powstały Wielkie Morawy, a w X wieku państwo Polan."
  },
  {
    "id": "R06_ZAN_10",
    "section": "Zanim powstała Polska",
    "type": "scenario",
    "prompt": "Archeolog bada kamienne kręgi w Odrach na Kaszubach. Zgodnie z podręcznikiem są one pozostałością po plemionach żyjących na ziemiach polskich przed przybyciem Słowian. O jakie plemiona chodzi?",
    "options": [
      "Gotów",
      "Polan",
      "Wiślan",
      "Węgrów",
      "Prusów",
      "Wieletów"
    ],
    "answer": 0,
    "explanation": "Kamienne kręgi w Odrach na Kaszubach są pozostałością po germańskich Gotach."
  },
  {
    "id": "R06_ZAN_11",
    "section": "Zanim powstała Polska",
    "type": "single_choice",
    "prompt": "Wokół jakiego grodu rozwinęło się państwo Polan?",
    "options": [
      "Gniezna",
      "Krakowa",
      "Wiślicy",
      "Pragi",
      "Kijowa",
      "Kołobrzegu"
    ],
    "answer": 0,
    "explanation": "Polanie zamieszkiwali okolice Gniezna i tam ukształtowało się ich państwo."
  },
  {
    "id": "R06_ZAN_12",
    "section": "Zanim powstała Polska",
    "type": "true_false",
    "prompt": "Państwo Wiślan powstałe w drugiej połowie IX wieku przetrwało długo i dało bezpośredni początek Polsce.",
    "options": null,
    "answer": false,
    "explanation": "Państwo Wiślan nie przetrwało długo; sukces w budowie silnego państwa odniosło plemię Polan."
  },
  {
    "id": "R06_MIE_01",
    "section": "Mieszko I i początki Polski",
    "type": "single_choice",
    "prompt": "Z jakiej dynastii pochodzili książęta rządzący plemieniem Polan?",
    "options": [
      "Piastów",
      "Jagiellonów",
      "Andegawenów",
      "Wazów",
      "Przemyślidów",
      "Arpadów"
    ],
    "answer": 0,
    "explanation": "Plemieniem Polan rządzili książęta z dynastii Piastów."
  },
  {
    "id": "R06_MIE_02",
    "section": "Mieszko I i początki Polski",
    "type": "fill_in",
    "prompt": "Około __________ roku władzę w państwie Polan objął Mieszko I, a w roku __________ przyjął chrzest.",
    "options": null,
    "answer": [
      "960",
      "966"
    ],
    "altAnswers": [
      [
        "960",
        "około 960",
        "ok. 960"
      ],
      [
        "966",
        "966."
      ]
    ],
    "explanation": "Mieszko I objął władzę około 960 roku, a chrzest przyjął w 966 roku."
  },
  {
    "id": "R06_MIE_03",
    "section": "Mieszko I i początki Polski",
    "type": "multi_select",
    "prompt": "Które ziemie lub plemiona podporządkował sobie Mieszko I według podręcznika?",
    "options": [
      "Pomorzan",
      "Wiślan",
      "Ślężan",
      "Opolan",
      "Prusów",
      "Arabów"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Mieszko I podporządkował sobie ziemie Pomorzan oraz na południu ziemie Wiślan, Ślężan i Opolan; Prusowie pozostali poza jego państwem.",
    "image": "/img/r06_mapa_panstwa_mieszka.jpg"
  },
  {
    "id": "R06_MIE_04",
    "section": "Mieszko I i początki Polski",
    "type": "scenario",
    "prompt": "Mieszko I chce, by chrześcijańscy władcy traktowali go jak równorzędnego partnera i by wzmocnić swoją pozycję w Europie. Jaki krok uznaje za niezbędny?",
    "options": [
      "Przyjęcie chrztu",
      "Zburzenie Poznania",
      "Odesłanie insygniów cesarzowi",
      "Podział kraju na dzielnice",
      "Ucieczkę na Węgry",
      "Wyprawę na Kijów"
    ],
    "answer": 0,
    "explanation": "Przyjęcie chrztu miało wzmocnić pozycję Mieszka I i jego państwa wśród chrześcijańskich władców.",
    "image": "/img/r06_mieszko_dobrawa_chrzest.jpg"
  },
  {
    "id": "R06_MIE_05",
    "section": "Mieszko I i początki Polski",
    "type": "true_false",
    "prompt": "Pierwsze biskupstwo na ziemiach polskich powstało w 968 roku w Poznaniu.",
    "options": null,
    "answer": true,
    "explanation": "Po chrzcie Mieszka I w 968 roku utworzono biskupstwo w Poznaniu z biskupem Jordanem na czele."
  },
  {
    "id": "R06_MIE_06",
    "section": "Mieszko I i początki Polski",
    "type": "riddle",
    "prompt": "Jak miała na imię czeska księżniczka, której małżeństwo z Mieszkiem I potwierdziło sojusz polsko-czeski?",
    "options": null,
    "answer": "Dobrawa",
    "altAnswers": [
      "Dobrawa",
      "Dąbrówka",
      "Dobrawa Przemyślidka"
    ],
    "explanation": "Małżeństwo Mieszka I z Dobrawą było sposobem potwierdzenia sojuszu z Czechami.",
    "image": "/img/r06_mieszko_dobrawa_chrzest.jpg"
  },
  {
    "id": "R06_MIE_07",
    "section": "Mieszko I i początki Polski",
    "type": "match",
    "prompt": "Połącz postać z jej rolą w początkach państwa Mieszka I.",
    "options": null,
    "left": [
      "Siemomysł",
      "Dobrawa",
      "Jordan",
      "Hodon"
    ],
    "right": [
      "ojciec Mieszka I",
      "czeska żona Mieszka I",
      "pierwszy biskup w Poznaniu",
      "margrabia pokonany pod Cedynią"
    ],
    "answer": {
      "Siemomysł": "ojciec Mieszka I",
      "Dobrawa": "czeska żona Mieszka I",
      "Jordan": "pierwszy biskup w Poznaniu",
      "Hodon": "margrabia pokonany pod Cedynią"
    },
    "explanation": "Te postacie są związane z przejęciem władzy przez Mieszka, chrztem, organizacją Kościoła i obroną granic."
  },
  {
    "id": "R06_MIE_08",
    "section": "Mieszko I i początki Polski",
    "type": "single_choice",
    "prompt": "W którym roku Mieszko I pokonał wojska margrabiego Hodona pod Cedynią?",
    "options": [
      "972",
      "966",
      "968",
      "1000",
      "1025",
      "1038"
    ],
    "answer": 0,
    "explanation": "Bitwa pod Cedynią odbyła się w 972 roku i utrwaliła władzę Mieszka I na Pomorzu Zachodnim."
  },
  {
    "id": "R06_MIE_09",
    "section": "Mieszko I i początki Polski",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Dobrawa, Bolesław Srogi, Czechy, Jordan.",
    "options": null,
    "answer": "Jordan",
    "explanation": "Dobrawa, Bolesław Srogi i Czechy łączą się z sojuszem polsko-czeskim; Jordan był biskupem w Poznaniu."
  },
  {
    "id": "R06_MIE_10",
    "section": "Mieszko I i początki Polski",
    "type": "fill_in",
    "prompt": "Nazwa Polska wywodzi się od plemienia __________, którego nazwa prawdopodobnie pochodzi od słowa __________.",
    "options": null,
    "answer": [
      "Polan",
      "pole"
    ],
    "altAnswers": [
      [
        "Polan",
        "Polanie"
      ],
      [
        "pole",
        "pola"
      ]
    ],
    "explanation": "Nazwa państwa pochodzi od Polan, a nazwę plemienia wiąże się ze słowem „pole”."
  },
  {
    "id": "R06_MIE_11",
    "section": "Mieszko I i początki Polski",
    "type": "multi_select",
    "prompt": "Zaznacz skutki przyjęcia chrztu przez Mieszka I opisane w podręczniku.",
    "options": [
      "Wzrost znaczenia polskiego władcy",
      "Rozwój kultury i piśmiennictwa",
      "Włączenie Polski w krąg Zachodu",
      "Początek kształtowania wspólnoty mieszkańców państwa",
      "Natychmiastowy rozpad państwa",
      "Zakończenie dynastii Piastów"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Chrzest wzmocnił pozycję władcy, związał Polskę ze światem Zachodu i przyczynił się do rozwoju kultury oraz wspólnoty mieszkańców."
  },
  {
    "id": "R06_MIE_12",
    "section": "Mieszko I i początki Polski",
    "type": "true_false",
    "prompt": "Dokument Dagome iudex zawiera najstarszy opis granic państwa Mieszka I i oddawał jego państwo pod opiekę papieża.",
    "options": null,
    "answer": true,
    "explanation": "Dagome iudex, znany ze streszczeń, opisuje granice państwa Mieszka I i przekazanie go pod opiekę papieską."
  },
  {
    "id": "R06_CHR_01",
    "section": "Polska Bolesława Chrobrego",
    "type": "single_choice",
    "prompt": "Kim był Bolesław Chrobry dla Mieszka I?",
    "options": [
      "Synem",
      "Bratem",
      "Ojcem",
      "Palatynem",
      "Biskupem",
      "Kronikarzem"
    ],
    "answer": 0,
    "explanation": "Bolesław Chrobry był synem Mieszka I i Dobrawy."
  },
  {
    "id": "R06_CHR_02",
    "section": "Polska Bolesława Chrobrego",
    "type": "true_false",
    "prompt": "W 997 roku biskup Wojciech podjął misję chrystianizacyjną wśród pogańskich Prusów.",
    "options": null,
    "answer": true,
    "explanation": "Misja biskupa Wojciecha do Prus odbyła się w 997 roku i zakończyła jego śmiercią.",
    "image": "/img/r06_drzwi_gnieznienskie_wojciech.jpg"
  },
  {
    "id": "R06_CHR_03",
    "section": "Polska Bolesława Chrobrego",
    "type": "scenario",
    "prompt": "Cesarz Otton III przybywa z pielgrzymką do grobu świętego Wojciecha w Gnieźnie, a Bolesław Chrobry podejmuje go uroczyście. Jak nazwano to spotkanie?",
    "options": [
      "Zjazd gnieźnieński",
      "Bitwa pod Cedynią",
      "Dagome iudex",
      "Testament Krzywoustego",
      "Misja pruska",
      "Pokój w Budziszynie"
    ],
    "answer": 0,
    "explanation": "Spotkanie Bolesława Chrobrego z Ottonem III w 1000 roku nazwano zjazdem gnieźnieńskim.",
    "image": "/img/r06_zjazd_gnieznienski.jpg"
  },
  {
    "id": "R06_CHR_04",
    "section": "Polska Bolesława Chrobrego",
    "type": "multi_select",
    "prompt": "Zaznacz skutki zjazdu gnieźnieńskiego wymienione w podręczniku.",
    "options": [
      "Utworzenie arcybiskupstwa w Gnieźnie",
      "Utworzenie biskupstw w Krakowie, Wrocławiu i Kołobrzegu",
      "Wzrost znaczenia państwa polskiego",
      "Symboliczne ukoronowanie Bolesława przez Ottona III",
      "Rozpad państwa Polan",
      "Utrata Pomorza Gdańskiego"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Zjazd gnieźnieński wzmocnił znaczenie Polski i przyniósł odrębną organizację kościelną z arcybiskupstwem w Gnieźnie.",
    "image": "/img/r06_zjazd_gnieznienski.jpg"
  },
  {
    "id": "R06_CHR_05",
    "section": "Polska Bolesława Chrobrego",
    "type": "fill_in",
    "prompt": "Podczas zjazdu gnieźnieńskiego Otton III podarował Bolesławowi kopię włóczni świętego __________, a w zamian otrzymał relikwię świętego __________.",
    "options": null,
    "answer": [
      "Maurycego",
      "Wojciecha"
    ],
    "altAnswers": [
      [
        "Maurycego",
        "świętego Maurycego"
      ],
      [
        "Wojciecha",
        "świętego Wojciecha"
      ]
    ],
    "explanation": "Otton III przekazał kopię włóczni świętego Maurycego, a otrzymał relikwię świętego Wojciecha."
  },
  {
    "id": "R06_CHR_06",
    "section": "Polska Bolesława Chrobrego",
    "type": "match",
    "prompt": "Połącz wydarzenie z rokiem.",
    "options": null,
    "left": [
      "Misja biskupa Wojciecha do Prus",
      "Zjazd gnieźnieński",
      "Pokój z Henrykiem II",
      "Koronacja Bolesława Chrobrego"
    ],
    "right": [
      "997",
      "1000",
      "1018",
      "1025"
    ],
    "answer": {
      "Misja biskupa Wojciecha do Prus": "997",
      "Zjazd gnieźnieński": "1000",
      "Pokój z Henrykiem II": "1018",
      "Koronacja Bolesława Chrobrego": "1025"
    },
    "explanation": "Te daty porządkują najważniejsze wydarzenia z panowania Bolesława Chrobrego."
  },
  {
    "id": "R06_CHR_07",
    "section": "Polska Bolesława Chrobrego",
    "type": "single_choice",
    "prompt": "Gdzie odbyła się koronacja Bolesława Chrobrego na pierwszego króla Polski?",
    "options": [
      "W Gnieźnie",
      "W Krakowie",
      "W Poznaniu",
      "W Kijowie",
      "W Pradze",
      "W Kołobrzegu"
    ],
    "answer": 0,
    "explanation": "Koronacja Bolesława Chrobrego odbyła się w 1025 roku w Gnieźnie.",
    "image": "/img/r06_koronacja_chrobrego.jpg"
  },
  {
    "id": "R06_CHR_08",
    "section": "Polska Bolesława Chrobrego",
    "type": "true_false",
    "prompt": "Wojny polsko-niemieckie Bolesława Chrobrego trwały z przerwami przez szesnaście lat.",
    "options": null,
    "answer": true,
    "explanation": "Po zajęciu Milska i Łużyc rozpoczęły się wyniszczające wojny z Niemcami, które trwały z przerwami szesnaście lat."
  },
  {
    "id": "R06_CHR_09",
    "section": "Polska Bolesława Chrobrego",
    "type": "riddle",
    "prompt": "Jak nazywały się ziemie przyłączone do Polski po wyprawie Bolesława Chrobrego na Ruś w 1018 roku?",
    "options": null,
    "answer": "Grody Czerwieńskie",
    "altAnswers": [
      "Grody Czerwieńskie",
      "Grodów Czerwieńskich",
      "grody czerwieńskie"
    ],
    "explanation": "Wyprawa na Ruś zakończyła się przyłączeniem do Polski Grodów Czerwieńskich."
  },
  {
    "id": "R06_CHR_10",
    "section": "Polska Bolesława Chrobrego",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Milsko, Łużyce, Grody Czerwieńskie, Pomorze Gdańskie.",
    "options": null,
    "answer": "Pomorze Gdańskie",
    "explanation": "Milsko, Łużyce i Grody Czerwieńskie łączą się z nabytkami Chrobrego; Pomorze Gdańskie odzyskał później Bolesław Krzywousty."
  },
  {
    "id": "R06_CHR_11",
    "section": "Polska Bolesława Chrobrego",
    "type": "sort",
    "prompt": "Przyporządkuj ziemie do sposobu związania ich z państwem Chrobrego.",
    "options": null,
    "items": [
      "Czechy",
      "Morawy",
      "Słowacja",
      "Grody Czerwieńskie"
    ],
    "categories": [
      "czasowe panowanie Chrobrego",
      "przyłączone po wyprawie na Ruś"
    ],
    "answer": {
      "czasowe panowanie Chrobrego": [
        "Czechy",
        "Morawy",
        "Słowacja"
      ],
      "przyłączone po wyprawie na Ruś": [
        "Grody Czerwieńskie"
      ]
    },
    "explanation": "Chrobry czasowo rządził Czechami, Morawami i Słowacją, a Grody Czerwieńskie przyłączył po wyprawie na Ruś."
  },
  {
    "id": "R06_CHR_12",
    "section": "Polska Bolesława Chrobrego",
    "type": "scenario",
    "prompt": "Następcy Chrobrego muszą zmagać się z wrogimi sąsiadami i niezadowoleniem ludności obciążonej daninami na wojny. Jaki wniosek najlepiej pasuje do oceny jego panowania w podręczniku?",
    "options": [
      "Sukcesy Chrobrego miały także kosztowne skutki",
      "Chrobry całkowicie zlikwidował daniny",
      "Po Chrobrym Polska nie miała żadnych wrogów",
      "Wojny Chrobrego nie miały wpływu na państwo",
      "Chrobry rozwiązał problem sukcesji",
      "Chrobry zrezygnował z korony"
    ],
    "answer": 0,
    "explanation": "Podręcznik podkreśla, że sukcesy Chrobrego umocniły Polskę, ale wojny i daniny przyczyniły się do późniejszego kryzysu."
  },
  {
    "id": "R06_KRY_01",
    "section": "Kryzys i odbudowa państwa",
    "type": "single_choice",
    "prompt": "Kto został królem Polski po śmierci Bolesława Chrobrego w 1025 roku?",
    "options": [
      "Mieszko II",
      "Kazimierz Odnowiciel",
      "Bezprym",
      "Władysław Herman",
      "Bolesław Śmiały",
      "Zbigniew"
    ],
    "answer": 0,
    "explanation": "Po śmierci Chrobrego królem został jego młodszy syn Mieszko II."
  },
  {
    "id": "R06_KRY_02",
    "section": "Kryzys i odbudowa państwa",
    "type": "multi_select",
    "prompt": "Które ziemie Polska utraciła po ataku cesarstwa i Rusi w 1031 roku?",
    "options": [
      "Milsko",
      "Łużyce",
      "Grody Czerwieńskie",
      "Pomorze Zachodnie",
      "Mazowsze",
      "Kujawy"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "W 1031 roku Polska utraciła Milsko, Łużyce oraz Grody Czerwieńskie."
  },
  {
    "id": "R06_KRY_03",
    "section": "Kryzys i odbudowa państwa",
    "type": "true_false",
    "prompt": "Bezprym zrezygnował z koronacji i odesłał insygnia królewskie cesarzowi.",
    "options": null,
    "answer": true,
    "explanation": "Po przejęciu władzy Bezprym odesłał cesarzowi polskie insygnia królewskie."
  },
  {
    "id": "R06_KRY_04",
    "section": "Kryzys i odbudowa państwa",
    "type": "fill_in",
    "prompt": "Mieszko II zmarł w roku __________, a Czesi spustoszyli Wielkopolskę w roku __________.",
    "options": null,
    "answer": [
      "1034",
      "1038"
    ],
    "altAnswers": [
      [
        "1034",
        "1034."
      ],
      [
        "1038",
        "1038."
      ]
    ],
    "explanation": "Po śmierci Mieszka II w 1034 roku zamęt się pogłębił, a w 1038 roku Czesi zniszczyli Poznań i Gniezno."
  },
  {
    "id": "R06_KRY_05",
    "section": "Kryzys i odbudowa państwa",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "Najazd czeski na Wielkopolskę",
      "Śmierć Mieszka II",
      "Atak cesarstwa i Rusi na Polskę",
      "Koronacja Mieszka II",
      "Powrót Kazimierza do kraju"
    ],
    "answer": [
      "Koronacja Mieszka II",
      "Atak cesarstwa i Rusi na Polskę",
      "Śmierć Mieszka II",
      "Najazd czeski na Wielkopolskę",
      "Powrót Kazimierza do kraju"
    ],
    "explanation": "Mieszko II został królem w 1025 roku, atak nastąpił w 1031, śmierć Mieszka II w 1034, najazd Czechów w 1038, a powrót Kazimierza około 1039 roku."
  },
  {
    "id": "R06_KRY_06",
    "section": "Kryzys i odbudowa państwa",
    "type": "riddle",
    "prompt": "Jaki przydomek otrzymał Kazimierz, który odbudował państwo polskie po kryzysie XI wieku?",
    "options": null,
    "answer": "Odnowiciel",
    "altAnswers": [
      "Odnowiciel",
      "Kazimierz Odnowiciel",
      "odnowiciel"
    ],
    "explanation": "Kazimierz odbudował państwo i Kościół na ziemiach polskich, dlatego nazwano go Odnowicielem.",
    "image": "/img/r06_kryzys_odbudowa_panstwa.jpg"
  },
  {
    "id": "R06_KRY_07",
    "section": "Kryzys i odbudowa państwa",
    "type": "multi_select",
    "prompt": "Które ziemie odzyskał lub miał pod swoją władzą Kazimierz Odnowiciel według podręcznika?",
    "options": [
      "Wielkopolska",
      "Małopolska",
      "Mazowsze",
      "Śląsk",
      "Pomorze Gdańskie",
      "Normandia"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Kazimierz zdobył Wielkopolskę i Małopolskę, odzyskał Mazowsze i Pomorze Gdańskie oraz odebrał Czechom Śląsk."
  },
  {
    "id": "R06_KRY_08",
    "section": "Kryzys i odbudowa państwa",
    "type": "single_choice",
    "prompt": "Który gród stał się główną siedzibą Kazimierza Odnowiciela po zniszczeniu Gniezna?",
    "options": [
      "Kraków",
      "Gniezno",
      "Kijów",
      "Kołobrzeg",
      "Cedynia",
      "Płock"
    ],
    "answer": 0,
    "explanation": "Kazimierz uczynił Kraków główną siedzibą władcy po zniszczeniu Gniezna."
  },
  {
    "id": "R06_KRY_09",
    "section": "Kryzys i odbudowa państwa",
    "type": "true_false",
    "prompt": "Kazimierz Odnowiciel odzyskał koronę królewską i zdobycze Bolesława Chrobrego.",
    "options": null,
    "answer": false,
    "explanation": "Kazimierz odbudował państwo, ale nie odzyskał korony królewskiej ani wszystkich zdobyczy Chrobrego."
  },
  {
    "id": "R06_KRY_10",
    "section": "Kryzys i odbudowa państwa",
    "type": "scenario",
    "prompt": "W sporze o inwestyturę Bolesław Śmiały poparł papieża Grzegorza VII przeciw cesarzowi Henrykowi IV. Jaki ważny skutek przyniosła mu ta polityka?",
    "options": [
      "Koronację królewską w 1076 roku",
      "Utratę Krakowa w 1038 roku",
      "Zjazd gnieźnieński w 1000 roku",
      "Bitwę pod Cedynią",
      "Objęcie władzy przez Bezpryma",
      "Podział kraju na dzielnice"
    ],
    "answer": 0,
    "explanation": "Poparcie papieża ułatwiło Bolesławowi Śmiałemu przywrócenie arcybiskupstwa w Gnieźnie i koronację w 1076 roku.",
    "image": "/img/r06_boleslaw_smialy_stanislaw.jpg"
  },
  {
    "id": "R06_KRY_11",
    "section": "Kryzys i odbudowa państwa",
    "type": "match",
    "prompt": "Połącz postać z opisem.",
    "options": null,
    "left": [
      "Mieszko II",
      "Bezprym",
      "Kazimierz Odnowiciel",
      "Bolesław Śmiały"
    ],
    "right": [
      "król, który utracił koronę i uznał zwierzchnictwo cesarza",
      "brat Mieszka II, który odesłał insygnia cesarzowi",
      "władca odbudowujący państwo po kryzysie",
      "król zmuszony do ucieczki po konflikcie ze Stanisławem"
    ],
    "answer": {
      "Mieszko II": "król, który utracił koronę i uznał zwierzchnictwo cesarza",
      "Bezprym": "brat Mieszka II, który odesłał insygnia cesarzowi",
      "Kazimierz Odnowiciel": "władca odbudowujący państwo po kryzysie",
      "Bolesław Śmiały": "król zmuszony do ucieczki po konflikcie ze Stanisławem"
    },
    "explanation": "Każda z tych postaci odegrała ważną rolę w kryzysie lub odbudowie państwa polskiego."
  },
  {
    "id": "R06_KRY_12",
    "section": "Kryzys i odbudowa państwa",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: najazd niemiecki i ruski, bunty przeciw chrześcijaństwu, najazd czeski na Wielkopolskę, zjazd gnieźnieński.",
    "options": null,
    "answer": "zjazd gnieźnieński",
    "explanation": "Pierwsze trzy elementy należą do przyczyn lub wydarzeń kryzysu XI wieku, a zjazd gnieźnieński był wcześniejszym sukcesem Chrobrego."
  },
  {
    "id": "R06_KRZ_01",
    "section": "Rządy Bolesława Krzywoustego",
    "type": "single_choice",
    "prompt": "Kto objął panowanie w Polsce po ucieczce Bolesława Śmiałego?",
    "options": [
      "Władysław Herman",
      "Mieszko II",
      "Bezprym",
      "Kazimierz Odnowiciel",
      "Otton III",
      "Henryk V"
    ],
    "answer": 0,
    "explanation": "Po ucieczce Bolesława Śmiałego władzę objął jego młodszy brat Władysław Herman."
  },
  {
    "id": "R06_KRZ_02",
    "section": "Rządy Bolesława Krzywoustego",
    "type": "riddle",
    "prompt": "Jak nazywał się palatyn Władysława Hermana, który zdobył bardzo silną pozycję w państwie?",
    "options": null,
    "answer": "Sieciech",
    "altAnswers": [
      "Sieciech",
      "palatyn Sieciech"
    ],
    "explanation": "Sieciech wykorzystał nieudolność Władysława Hermana i w praktyce przejął jego rolę."
  },
  {
    "id": "R06_KRZ_03",
    "section": "Rządy Bolesława Krzywoustego",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe informacje o podziale kraju wymuszonym na Władysławie Hermanie przez jego synów.",
    "options": [
      "Zbigniew otrzymał Wielkopolskę",
      "Zbigniew otrzymał Kujawy",
      "Bolesław otrzymał Małopolskę",
      "Bolesław otrzymał Śląsk",
      "Władysław Herman zachował Mazowsze",
      "Sieciech otrzymał Kraków"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Po pokonaniu Sieciecha Zbigniew otrzymał Wielkopolskę i Kujawy, Bolesław Małopolskę i Śląsk, a Herman zachował Mazowsze."
  },
  {
    "id": "R06_KRZ_04",
    "section": "Rządy Bolesława Krzywoustego",
    "type": "true_false",
    "prompt": "Władysław Herman starał się o koronę królewską i przyjął tytuł króla.",
    "options": null,
    "answer": false,
    "explanation": "Władysław Herman zadowolił się tytułem księcia i nie zabiegał o koronę."
  },
  {
    "id": "R06_KRZ_05",
    "section": "Rządy Bolesława Krzywoustego",
    "type": "fill_in",
    "prompt": "Władysław Herman zmarł w roku __________, a najazd Henryka V na Polskę nastąpił w roku __________.",
    "options": null,
    "answer": [
      "1102",
      "1109"
    ],
    "altAnswers": [
      [
        "1102",
        "1102."
      ],
      [
        "1109",
        "1109."
      ]
    ],
    "explanation": "Śmierć Władysława Hermana w 1102 roku poprzedziła konflikt między synami, a w 1109 roku na Polskę najechał Henryk V."
  },
  {
    "id": "R06_KRZ_06",
    "section": "Rządy Bolesława Krzywoustego",
    "type": "scenario",
    "prompt": "Podczas oblężenia Głogowa Niemcy przywiązali pojmanych mieszkańców do machin oblężniczych, licząc, że obrońcy nie będą strzelać. Jak można nazwać ten podstęp?",
    "options": [
      "Użycie żywych tarcz",
      "Zjazd gnieźnieński",
      "Seniorat",
      "Metoda żarowa",
      "Danina",
      "Misja chrystianizacyjna"
    ],
    "answer": 0,
    "explanation": "Według relacji Galla Anonima Henryk V próbował złamać obrońców Głogowa, używając jeńców jako żywych tarcz.",
    "image": "/img/r06_obrona_glogowa.jpg"
  },
  {
    "id": "R06_KRZ_07",
    "section": "Rządy Bolesława Krzywoustego",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z czasów Władysława Hermana i Bolesława Krzywoustego w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Wygnanie Sieciecha",
      "Śmierć Władysława Hermana",
      "Najazd Henryka V",
      "Oślepienie Zbigniewa"
    ],
    "answer": [
      "Wygnanie Sieciecha",
      "Śmierć Władysława Hermana",
      "Najazd Henryka V",
      "Oślepienie Zbigniewa"
    ],
    "explanation": "Najpierw bracia pokonali i wygnali Sieciecha, potem zmarł Herman, następnie doszło do najazdu w 1109 roku, a później Bolesław kazał oślepić Zbigniewa."
  },
  {
    "id": "R06_KRZ_08",
    "section": "Rządy Bolesława Krzywoustego",
    "type": "single_choice",
    "prompt": "Które Pomorze Bolesław Krzywousty podbił i przyłączył do państwa około 1116 roku?",
    "options": [
      "Pomorze Gdańskie",
      "Pomorze Zachodnie",
      "Mazowsze",
      "Milsko",
      "Łużyce",
      "Grody Czerwieńskie"
    ],
    "answer": 0,
    "explanation": "Około 1116 roku Bolesław Krzywousty podbił i przyłączył Pomorze Gdańskie."
  },
  {
    "id": "R06_KRZ_09",
    "section": "Rządy Bolesława Krzywoustego",
    "type": "match",
    "prompt": "Połącz wydarzenie z datą.",
    "options": null,
    "left": [
      "Śmierć Władysława Hermana",
      "Najazd Henryka V",
      "Przyłączenie Pomorza Gdańskiego",
      "Podporządkowanie Pomorza Zachodniego",
      "Śmierć Bolesława Krzywoustego i początek testamentu"
    ],
    "right": [
      "1102",
      "1109",
      "około 1116",
      "1122",
      "1138"
    ],
    "answer": {
      "Śmierć Władysława Hermana": "1102",
      "Najazd Henryka V": "1109",
      "Przyłączenie Pomorza Gdańskiego": "około 1116",
      "Podporządkowanie Pomorza Zachodniego": "1122",
      "Śmierć Bolesława Krzywoustego i początek testamentu": "1138"
    },
    "explanation": "Daty te porządkują najważniejsze wydarzenia rządów Krzywoustego."
  },
  {
    "id": "R06_KRZ_10",
    "section": "Rządy Bolesława Krzywoustego",
    "type": "true_false",
    "prompt": "Bolesław Krzywousty uzyskał koronę królewską tak jak Bolesław Chrobry i Bolesław Śmiały.",
    "options": null,
    "answer": false,
    "explanation": "Podręcznik podkreśla, że Bolesław Krzywousty nie uzyskał korony królewskiej."
  },
  {
    "id": "R06_KRZ_11",
    "section": "Rządy Bolesława Krzywoustego",
    "type": "fill_in",
    "prompt": "Testament Bolesława Krzywoustego wprowadzał zasadę __________, według której najstarszy książę z rodu Piastów był zwierzchnikiem pozostałych, czyli __________.",
    "options": null,
    "answer": [
      "senioratu",
      "juniorów"
    ],
    "altAnswers": [
      [
        "senioratu",
        "seniorat"
      ],
      [
        "juniorów",
        "juniorami",
        "juniorzy"
      ]
    ],
    "explanation": "Seniorat dawał najstarszemu Piastowi władzę zwierzchnią nad młodszymi książętami.",
    "image": "/img/r06_testament_krzywoustego.jpg"
  },
  {
    "id": "R06_KRZ_12",
    "section": "Rządy Bolesława Krzywoustego",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Głogów, Wrocław, Bytom, Kijów.",
    "options": null,
    "answer": "Kijów",
    "explanation": "Głogów, Wrocław i Bytom były grodami związanymi z obroną przed najazdem Henryka V w 1109 roku, a Kijów wiąże się z wyprawą Chrobrego na Ruś."
  },
  {
    "id": "R06_SPO_01",
    "section": "Społeczeństwo i kronikarze",
    "type": "single_choice",
    "prompt": "Ilu ludzi liczyło według szacunków państwo Mieszka I?",
    "options": [
      "Około miliona",
      "Około dziesięciu milionów",
      "Około stu tysięcy",
      "Około pięćdziesięciu milionów",
      "Około dwudziestu milionów",
      "Około tysiąca"
    ],
    "answer": 0,
    "explanation": "Podręcznik podaje, że państwo Mieszka I liczyło zaledwie około miliona ludzi."
  },
  {
    "id": "R06_SPO_02",
    "section": "Społeczeństwo i kronikarze",
    "type": "multi_select",
    "prompt": "Zaznacz główne sposoby utrzymania mieszkańców Polski pierwszych Piastów.",
    "options": [
      "Uprawa roli",
      "Hodowla",
      "Rybołówstwo",
      "Łowiectwo",
      "Produkcja samochodów",
      "Górnictwo ropy naftowej"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Poddani Piastów żyli głównie z uprawy roli, hodowli, rybołówstwa i łowiectwa."
  },
  {
    "id": "R06_SPO_03",
    "section": "Społeczeństwo i kronikarze",
    "type": "riddle",
    "prompt": "Jak nazywała się metoda uprawy polegająca na karczowaniu puszczy i wykorzystywaniu popiołu jako nawozu?",
    "options": null,
    "answer": "metoda żarowa",
    "altAnswers": [
      "metoda żarowa",
      "żarowa",
      "uprawa żarowa"
    ],
    "explanation": "Metoda żarowa polegała na wycinaniu i wypalaniu fragmentu puszczy, a popiół służył jako naturalny nawóz."
  },
  {
    "id": "R06_SPO_04",
    "section": "Społeczeństwo i kronikarze",
    "type": "true_false",
    "prompt": "W czasach Mieszka I pieniądze były rzadko używane, a jako środka płatniczego używano między innymi płatów lnu.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik wyjaśnia, że pieniądze były rzadkie, a płaty lnu mogły służyć jako środek płatniczy."
  },
  {
    "id": "R06_SPO_05",
    "section": "Społeczeństwo i kronikarze",
    "type": "match",
    "prompt": "Połącz grupę ludności z jej głównym zajęciem.",
    "options": null,
    "left": [
      "Chłopi",
      "Rzemieślnicy",
      "Kupcy",
      "Wojowie"
    ],
    "right": [
      "uprawa ziemi i hodowla",
      "wytwarzanie naczyń, odzieży, ozdób i broni",
      "sprzedaż towarów na targach",
      "obrona grodu i okolicznych ziem"
    ],
    "answer": {
      "Chłopi": "uprawa ziemi i hodowla",
      "Rzemieślnicy": "wytwarzanie naczyń, odzieży, ozdób i broni",
      "Kupcy": "sprzedaż towarów na targach",
      "Wojowie": "obrona grodu i okolicznych ziem"
    },
    "explanation": "Infografika o grodzie w Gnieźnie pokazuje różne grupy mieszkańców i ich zadania.",
    "image": "/img/r06_grod_gniezno.jpg"
  },
  {
    "id": "R06_SPO_06",
    "section": "Społeczeństwo i kronikarze",
    "type": "fill_in",
    "prompt": "W państwie pierwszych Piastów książę był najwyższym __________ i __________.",
    "options": null,
    "answer": [
      "sędzią",
      "wodzem"
    ],
    "altAnswers": [
      [
        "sędzią",
        "sędzia"
      ],
      [
        "wodzem",
        "wódz"
      ]
    ],
    "explanation": "Książę był najwyższym sędzią i wodzem, a państwo traktowano jak jego własność."
  },
  {
    "id": "R06_SPO_07",
    "section": "Społeczeństwo i kronikarze",
    "type": "multi_select",
    "prompt": "Zaznacz obowiązki poddanych wobec władcy wymienione w podręczniku.",
    "options": [
      "Płacenie danin",
      "Świadczenie posług",
      "Goszczenie władcy i jego orszaku",
      "Naprawa umocnień grodowych",
      "Służba wartownicza",
      "Wybieranie księcia w głosowaniu"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Poddani płacili daniny, wykonywali posługi, gościli władcę, naprawiali umocnienia i pełnili służbę wartowniczą."
  },
  {
    "id": "R06_SPO_08",
    "section": "Społeczeństwo i kronikarze",
    "type": "single_choice",
    "prompt": "Kto według infografiki najczęściej mieszkał na podgrodziu?",
    "options": [
      "Rzemieślnicy i kupcy",
      "Tylko książę i jego rodzina",
      "Wyłącznie biskupi",
      "Sami wojowie",
      "Tylko cudzoziemcy",
      "Mnisi z Rusi"
    ],
    "answer": 0,
    "explanation": "Podgrodzie zamieszkiwali głównie rzemieślnicy i kupcy.",
    "image": "/img/r06_grod_gniezno.jpg"
  },
  {
    "id": "R06_SPO_09",
    "section": "Społeczeństwo i kronikarze",
    "type": "match",
    "prompt": "Połącz nazwę miejscowości lub grupy służebnej z zajęciem, z którym ją wiązano.",
    "options": null,
    "left": [
      "Psary",
      "Piekary",
      "Winiary",
      "Kowale",
      "Niewodnicy"
    ],
    "right": [
      "hodowla psów myśliwskich",
      "pieczenie chleba",
      "dostarczanie wina",
      "wyrób przedmiotów metalowych",
      "wytwarzanie i naprawa sieci rybackich"
    ],
    "answer": {
      "Psary": "hodowla psów myśliwskich",
      "Piekary": "pieczenie chleba",
      "Winiary": "dostarczanie wina",
      "Kowale": "wyrób przedmiotów metalowych",
      "Niewodnicy": "wytwarzanie i naprawa sieci rybackich"
    },
    "explanation": "Nazwy wielu miejscowości pochodzą od zajęć dawnej ludności służebnej."
  },
  {
    "id": "R06_SPO_10",
    "section": "Społeczeństwo i kronikarze",
    "type": "scenario",
    "prompt": "Po kryzysie państwa skarbiec Kazimierza Odnowiciela jest zrujnowany, więc władcy nie stać na utrzymywanie licznej drużyny wojów. Co zaczyna nadawać wojownikom w zamian za służbę?",
    "options": [
      "Ziemię",
      "Insygnia królewskie",
      "Arcybiskupstwa",
      "Korony",
      "Relikwie",
      "Statki handlowe"
    ],
    "answer": 0,
    "explanation": "Kazimierz zaczął nadawać wojownikom ziemię, co przyczyniło się do wykształcenia rycerstwa.",
    "image": "/img/r06_druzyna_wojow.jpg"
  },
  {
    "id": "R06_SPO_11",
    "section": "Społeczeństwo i kronikarze",
    "type": "true_false",
    "prompt": "Najstarsza polska kronika Galla Anonima została napisana po polsku.",
    "options": null,
    "answer": false,
    "explanation": "Najstarsza polska kronika została napisana po łacinie przez Galla Anonima.",
    "image": "/img/r06_kronikarz_gall.jpg"
  },
  {
    "id": "R06_SPO_12",
    "section": "Społeczeństwo i kronikarze",
    "type": "match",
    "prompt": "Połącz źródło lub autora z miejscem pochodzenia wskazanym w podręczniku.",
    "options": null,
    "left": [
      "Kronika Nestora",
      "Kronika Thietmara",
      "Kronika Kosmasa",
      "Ibrahim ibn Jakub"
    ],
    "right": [
      "Ruś",
      "Niemcy",
      "Czechy",
      "żydowski kupiec podróżujący po Słowiańszczyźnie"
    ],
    "answer": {
      "Kronika Nestora": "Ruś",
      "Kronika Thietmara": "Niemcy",
      "Kronika Kosmasa": "Czechy",
      "Ibrahim ibn Jakub": "żydowski kupiec podróżujący po Słowiańszczyźnie"
    },
    "explanation": "Informacje o początkach Polski pochodzą również z obcych kronik i relacji Ibrahima ibn Jakuba.",
    "image": "/img/r06_kronikarz_gall.jpg"
  },
  {
    "id": "R06_HARD_01",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż władców w kolejności sprawowania rządów według rozdziału.",
    "options": null,
    "items": [
      "Bolesław Śmiały",
      "Mieszko I",
      "Władysław Herman",
      "Bolesław Chrobry",
      "Kazimierz Odnowiciel",
      "Mieszko II",
      "Bolesław Krzywousty"
    ],
    "answer": [
      "Mieszko I",
      "Bolesław Chrobry",
      "Mieszko II",
      "Kazimierz Odnowiciel",
      "Bolesław Śmiały",
      "Władysław Herman",
      "Bolesław Krzywousty"
    ],
    "explanation": "Kolejność głównych władców w rozdziale prowadzi od Mieszka I do Bolesława Krzywoustego."
  },
  {
    "id": "R06_HARD_02",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do wydarzeń, z którymi są najściślej związane.",
    "options": null,
    "items": [
      "Dobrawa",
      "biskup Jordan",
      "arcybiskupstwo w Gnieźnie",
      "Otton III",
      "Bezprym",
      "najazd czeski",
      "Henryk V",
      "obrona Głogowa"
    ],
    "categories": [
      "chrzest Mieszka I",
      "zjazd gnieźnieński",
      "kryzys XI wieku",
      "najazd 1109 roku"
    ],
    "answer": {
      "chrzest Mieszka I": [
        "Dobrawa",
        "biskup Jordan"
      ],
      "zjazd gnieźnieński": [
        "arcybiskupstwo w Gnieźnie",
        "Otton III"
      ],
      "kryzys XI wieku": [
        "Bezprym",
        "najazd czeski"
      ],
      "najazd 1109 roku": [
        "Henryk V",
        "obrona Głogowa"
      ]
    },
    "explanation": "Każdy zestaw wskazuje charakterystyczne osoby lub skutki najważniejszych wydarzeń z rozdziału."
  },
  {
    "id": "R06_HARD_03",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Wincenty Kadłubek opisał zwycięstwo Krzywoustego nad Niemcami na Psim Polu, ale Gall Anonim piszący kilka lat po najazdzie o takiej bitwie nie wspomniał, a badania archeologiczne jej nie potwierdziły. Jaki wniosek przedstawia podręcznik?",
    "options": [
      "Uczeni uznali opowieść o Psim Polu za wymyśloną",
      "Bitwa na Psim Polu jest najlepiej potwierdzoną bitwą rozdziału",
      "Gall Anonim opisał tę bitwę bardzo szczegółowo",
      "Kadłubek pisał przed najazdem Henryka V",
      "Bitwa odbyła się podczas chrztu Polski",
      "Było to starcie Mieszka I z Hodonem"
    ],
    "answer": 0,
    "explanation": "Podręcznik wyjaśnia, że brak potwierdzenia w starszych źródłach i archeologii sprawił, iż opowieść o Psim Polu uznano za wymyśloną."
  },
  {
    "id": "R06_HARD_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz postanowienia lub skutki testamentu Bolesława Krzywoustego zgodne z podręcznikiem.",
    "options": [
      "Podział państwa między synów",
      "Wprowadzenie zasady senioratu",
      "Władza zwierzchnia seniora nad juniorami",
      "Prawo seniora do wypowiadania wojny i reprezentowania państwa",
      "Zapobieżenie wszystkim wojnom domowym",
      "Koronacja Krzywoustego na króla"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Testament dzielił kraj i wprowadzał seniorat, ale nie zapobiegł bratobójczym walkom.",
    "image": "/img/r06_testament_krzywoustego.jpg"
  },
  {
    "id": "R06_HARD_05",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Najstarszą polską kronikę napisał po łacinie __________ na dworze Bolesława __________.",
    "options": null,
    "answer": [
      "Gall Anonim",
      "Krzywoustego"
    ],
    "altAnswers": [
      [
        "Gall Anonim",
        "Galla Anonima"
      ],
      [
        "Krzywoustego",
        "Bolesława Krzywoustego"
      ]
    ],
    "explanation": "Gall Anonim, benedyktyn przebywający na dworze Bolesława Krzywoustego, napisał najstarszą polską kronikę.",
    "image": "/img/r06_kronikarz_gall.jpg"
  },
  {
    "id": "R06_HARD_06",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: korona, berło, jabłko królewskie, drużyna wojów.",
    "options": null,
    "answer": "drużyna wojów",
    "explanation": "Korona, berło i jabłko królewskie to insygnia królewskie; drużyna wojów była siłą zbrojną władcy."
  },
  {
    "id": "R06_HARD_07",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Ibrahim ibn Jakub podróżował po Słowiańszczyźnie w latach 965-966, a jego relacja należy do źródeł o początkach państwa polskiego.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik wymienia relację Ibrahima ibn Jakuba z lat 965-966 jako jedno ze źródeł informacji o początkach Polski."
  },
  {
    "id": "R06_HARD_08",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się zasada, według której najstarszy książę z rodu Piastów miał sprawować władzę zwierzchnią nad juniorami?",
    "options": null,
    "answer": "seniorat",
    "altAnswers": [
      "seniorat",
      "zasada senioratu"
    ],
    "explanation": "Seniorat oznaczał zwierzchnictwo najstarszego księcia z rodu Piastów nad pozostałymi."
  }
];

const KID_PROMPTS = {};

const chapter = {
  "id": "r06",
  "number": 6,
  "title": "Polska pierwszych Piastów",
  "icon": "👑",
  "sectionOrder": [
    "Zanim powstała Polska",
    "Mieszko I i początki Polski",
    "Polska Bolesława Chrobrego",
    "Kryzys i odbudowa państwa",
    "Rządy Bolesława Krzywoustego",
    "Społeczeństwo i kronikarze",
    "Super trudne"
  ],
  "sectionIcons": {
    "Zanim powstała Polska": "🌲",
    "Mieszko I i początki Polski": "✝️",
    "Polska Bolesława Chrobrego": "👑",
    "Kryzys i odbudowa państwa": "🏚️",
    "Rządy Bolesława Krzywoustego": "🛡️",
    "Społeczeństwo i kronikarze": "🏘️",
    "Super trudne": "🔥"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
