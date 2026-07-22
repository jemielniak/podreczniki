// Skróty sekcji (do identyfikatorów ćwiczeń):
//   ORG  = Cechy organizmów i komórki
//   MIK  = Mikroskop i doświadczenia
//   FOT  = Odżywianie i fotosynteza
//   ODD  = Oddychanie i fermentacja
//   KLW  = Klasyfikacja i wirusy
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_ORG_01",
    "section": "Cechy organizmów i komórki",
    "type": "single_choice",
    "prompt": "Czym zajmuje się biologia?",
    "options": [
      "Badaniem organizmów",
      "Badaniem wyłącznie skał",
      "Projektowaniem maszyn",
      "Badaniem tylko pogody",
      "Opisem planet",
      "Tworzeniem map politycznych"
    ],
    "answer": 0,
    "image": "r01_bobr_biolog.jpg",
    "explanation": "Biologia jest nauką o życiu, czyli zajmuje się organizmami żyjącymi obecnie oraz wymarłymi."
  },
  {
    "id": "R01_ORG_02",
    "section": "Cechy organizmów i komórki",
    "type": "match",
    "prompt": "Połącz specjalistę z obiektem jego badań.",
    "options": null,
    "left": [
      "zoolog",
      "botanik",
      "mikrobiolog",
      "ekolog"
    ],
    "right": [
      "zwierzęta",
      "rośliny",
      "bakterie",
      "zależności między organizmami i środowiskiem"
    ],
    "answer": {
      "zoolog": "zwierzęta",
      "botanik": "rośliny",
      "mikrobiolog": "bakterie",
      "ekolog": "zależności między organizmami i środowiskiem"
    },
    "explanation": "Różne działy biologii skupiają się na różnych grupach organizmów lub zależnościach w przyrodzie."
  },
  {
    "id": "R01_ORG_03",
    "section": "Cechy organizmów i komórki",
    "type": "multi_select",
    "prompt": "Zaznacz podstawowe czynności życiowe organizmów.",
    "options": [
      "odżywianie",
      "oddychanie",
      "wydalanie",
      "drukowanie",
      "rozmnażanie",
      "reagowanie na zmiany"
    ],
    "answer": [
      0,
      1,
      2,
      4,
      5
    ],
    "explanation": "Do podstawowych czynności życiowych należą między innymi odżywianie, oddychanie, wydalanie, wzrost, rozmnażanie i reagowanie na zmiany."
  },
  {
    "id": "R01_ORG_04",
    "section": "Cechy organizmów i komórki",
    "type": "true_false",
    "prompt": "Budowa komórkowa jest wspólną cechą wszystkich organizmów.",
    "options": null,
    "answer": true,
    "explanation": "W podręczniku podkreślono, że wszystkie organizmy są zbudowane z komórek."
  },
  {
    "id": "R01_ORG_05",
    "section": "Cechy organizmów i komórki",
    "type": "fill_in",
    "prompt": "Organizm zbudowany z jednej komórki to organizm __________, a organizm zbudowany z wielu komórek to organizm __________.",
    "options": null,
    "answer": [
      "jednokomórkowy",
      "wielokomórkowy"
    ],
    "altAnswers": [
      [
        "jednokomórkowy",
        "jednokomórkowy organizm"
      ],
      [
        "wielokomórkowy",
        "wielokomórkowy organizm"
      ]
    ],
    "explanation": "Organizmy jednokomórkowe mają jedną komórkę, natomiast wielokomórkowe są zbudowane z wielu komórek."
  },
  {
    "id": "R01_ORG_06",
    "section": "Cechy organizmów i komórki",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do czynności życiowych.",
    "options": null,
    "items": [
      "kot zjada pokarm",
      "organizm usuwa zbędne substancje",
      "zwierzę ucieka przed zagrożeniem",
      "siewka zwiększa rozmiary"
    ],
    "categories": [
      "odżywianie",
      "wydalanie",
      "reagowanie na zmiany",
      "wzrost"
    ],
    "answer": {
      "odżywianie": [
        "kot zjada pokarm"
      ],
      "wydalanie": [
        "organizm usuwa zbędne substancje"
      ],
      "reagowanie na zmiany": [
        "zwierzę ucieka przed zagrożeniem"
      ],
      "wzrost": [
        "siewka zwiększa rozmiary"
      ]
    },
    "explanation": "Każdy przykład opisuje inną czynność życiową: zdobywanie substancji, usuwanie zbędnych substancji albo reakcję na bodziec."
  },
  {
    "id": "R01_ORG_07",
    "section": "Cechy organizmów i komórki",
    "type": "sequence",
    "prompt": "Ułóż poziomy budowy organizmu wielokomórkowego od najmniejszego do największego.",
    "options": null,
    "items": [
      "układ narządów",
      "tkanka",
      "organizm",
      "komórka",
      "narząd"
    ],
    "answer": [
      "komórka",
      "tkanka",
      "narząd",
      "układ narządów",
      "organizm"
    ],
    "image": "r01_hierarchia_organizmu.jpg",
    "explanation": "W budowie hierarchicznej mniejsze elementy tworzą większe struktury: komórki tworzą tkanki, tkanki narządy, a narządy układy narządów."
  },
  {
    "id": "R01_ORG_08",
    "section": "Cechy organizmów i komórki",
    "type": "single_choice",
    "prompt": "Który element komórki zawiera materiał genetyczny w komórkach roślinnych i zwierzęcych?",
    "options": [
      "jądro komórkowe",
      "ściana komórkowa",
      "chloroplast",
      "wakuola",
      "błona komórkowa",
      "cytoplazma"
    ],
    "answer": 0,
    "image": "r01_komorka_roslinna_schemat.jpg",
    "explanation": "W jądrze komórkowym zgromadzony jest materiał genetyczny zawierający instrukcje dotyczące budowy i działania komórki."
  },
  {
    "id": "R01_ORG_09",
    "section": "Cechy organizmów i komórki",
    "type": "multi_select",
    "prompt": "Zaznacz elementy, które pozwalają odróżnić typową komórkę roślinną od zwierzęcej.",
    "options": [
      "chloroplast",
      "ściana komórkowa",
      "jądro komórkowe",
      "mitochondrium",
      "błona komórkowa"
    ],
    "answer": [
      0,
      1
    ],
    "image": "r01_komorka_roslinna_schemat.jpg",
    "explanation": "Komórka roślinna ma chloroplasty oraz ścianę komórkową, których nie ma typowa komórka zwierzęca."
  },
  {
    "id": "R01_ORG_10",
    "section": "Cechy organizmów i komórki",
    "type": "riddle",
    "prompt": "Jak nazywa się organellum, które odpowiada za powstawanie energii niezbędnej do życia komórki?",
    "options": null,
    "answer": "mitochondrium",
    "altAnswers": [
      "mitochondrium",
      "mitochondria"
    ],
    "explanation": "Mitochondria są w podręczniku porównane do małych elektrowni komórki."
  },
  {
    "id": "R01_ORG_11",
    "section": "Cechy organizmów i komórki",
    "type": "odd_one_out",
    "prompt": "Wskaż pierwiastek, który nie należy do pierwiastków biogennych wymienionych w rozdziale: węgiel, wodór, tlen, złoto.",
    "options": null,
    "answer": "złoto",
    "explanation": "Do pierwiastków biogennych zaliczono węgiel, wodór, tlen, azot, siarkę i fosfor. Złoto nie znalazło się na tej liście."
  },
  {
    "id": "R01_ORG_12",
    "section": "Cechy organizmów i komórki",
    "type": "scenario",
    "prompt": "Uczeń ogląda komórkę, w której materiał genetyczny znajduje się bezpośrednio w cytoplazmie, a nie w jądrze komórkowym. Jakiego typu komórkę najpewniej obserwuje?",
    "options": [
      "komórkę bakteryjną",
      "komórkę mięśniową człowieka",
      "komórkę nerwową kota",
      "komórkę liścia z chloroplastami"
    ],
    "answer": 0,
    "image": "r01_komorka_bakteryjna.jpg",
    "explanation": "W komórce bakteryjnej nie ma jądra komórkowego, a materiał genetyczny znajduje się bezpośrednio w cytoplazmie."
  },
  {
    "id": "R01_MIK_01",
    "section": "Mikroskop i doświadczenia",
    "type": "single_choice",
    "prompt": "Między jakimi elementami znajduje się obiekt w preparacie mikroskopowym?",
    "options": [
      "między szkiełkiem podstawowym a nakrywkowym",
      "między dwoma obiektywami",
      "między okularem a tubusem",
      "między statywem a rewolwerem",
      "między dwoma źródłami światła"
    ],
    "answer": 0,
    "image": "r01_preparat_mikroskopowy.jpg",
    "explanation": "W prostym preparacie obiekt umieszcza się między szkiełkiem podstawowym a szkiełkiem nakrywkowym."
  },
  {
    "id": "R01_MIK_02",
    "section": "Mikroskop i doświadczenia",
    "type": "match",
    "prompt": "Połącz element mikroskopu z jego funkcją.",
    "options": null,
    "left": [
      "okular",
      "obiektyw",
      "stolik",
      "rewolwer"
    ],
    "right": [
      "umożliwia obserwację powiększonego obrazu",
      "powiększa oglądany obiekt",
      "miejsce ułożenia preparatu",
      "pozwala zmienić obiektyw"
    ],
    "answer": {
      "okular": "umożliwia obserwację powiększonego obrazu",
      "obiektyw": "powiększa oglądany obiekt",
      "stolik": "miejsce ułożenia preparatu",
      "rewolwer": "pozwala zmienić obiektyw"
    },
    "image": "r01_mikroskop_swietlny.jpg",
    "explanation": "Każdy element mikroskopu pełni określoną rolę podczas obserwacji preparatu."
  },
  {
    "id": "R01_MIK_03",
    "section": "Mikroskop i doświadczenia",
    "type": "true_false",
    "prompt": "Szkolne mikroskopy świetlne umożliwiają oglądanie obiektów w powiększeniu od około 100 do 1200 razy.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział podaje taki zakres powiększeń dla mikroskopów świetlnych używanych w pracowniach szkolnych."
  },
  {
    "id": "R01_MIK_04",
    "section": "Mikroskop i doświadczenia",
    "type": "sequence",
    "prompt": "Ułóż podstawowe czynności korzystania z mikroskopu we właściwej kolejności.",
    "options": null,
    "items": [
      "ustaw ostrość obrazu",
      "umieść preparat na stoliku",
      "ustaw obiektyw o najmniejszym powiększeniu",
      "włącz światło i ustaw preparat w polu widzenia",
      "w razie potrzeby zmień obiektyw"
    ],
    "answer": [
      "umieść preparat na stoliku",
      "ustaw obiektyw o najmniejszym powiększeniu",
      "włącz światło i ustaw preparat w polu widzenia",
      "ustaw ostrość obrazu",
      "w razie potrzeby zmień obiektyw"
    ],
    "explanation": "Najpierw przygotowuje się mikroskop do obserwacji na najmniejszym powiększeniu, a dopiero później ustawia ostrość i ewentualnie zwiększa powiększenie."
  },
  {
    "id": "R01_MIK_05",
    "section": "Mikroskop i doświadczenia",
    "type": "fill_in",
    "prompt": "Do wykonania preparatu potrzebne są szkiełko __________ oraz szkiełko __________.",
    "options": null,
    "answer": [
      "podstawowe",
      "nakrywkowe"
    ],
    "altAnswers": [
      [
        "podstawowe",
        "podstawowym"
      ],
      [
        "nakrywkowe",
        "nakrywkowym"
      ]
    ],
    "image": "r01_preparat_mikroskopowy.jpg",
    "explanation": "Podstawowy preparat wykonuje się na szkiełku podstawowym i przykrywa szkiełkiem nakrywkowym."
  },
  {
    "id": "R01_MIK_06",
    "section": "Mikroskop i doświadczenia",
    "type": "multi_select",
    "prompt": "Zaznacz materiały potrzebne do wykonania prostego preparatu mikroskopowego.",
    "options": [
      "szkiełko podstawowe",
      "szkiełko nakrywkowe",
      "kropla wody",
      "obserwowany obiekt",
      "rewolwer mikroskopu",
      "futro niedźwiedzia"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do wykonania preparatu potrzeba szkiełka podstawowego, szkiełka nakrywkowego, kropli wody i obserwowanego obiektu."
  },
  {
    "id": "R01_MIK_07",
    "section": "Mikroskop i doświadczenia",
    "type": "scenario",
    "prompt": "Podczas obserwacji uczeń widzi preparat, ale obraz jest jeszcze nieostry. Którym elementem powinien delikatnie doprecyzować ostrość?",
    "options": [
      "śrubą mikrometryczną",
      "szkiełkiem nakrywkowym",
      "źródłem światła trzymanym w dłoni",
      "preparatem w zlewce"
    ],
    "answer": 0,
    "explanation": "Po wstępnym ustawieniu obrazu ostrość dopracowuje się śrubą mikrometryczną."
  },
  {
    "id": "R01_MIK_08",
    "section": "Mikroskop i doświadczenia",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest częścią mikroskopu świetlnego: okular, obiektyw, kondensor, pajęczyna.",
    "options": null,
    "answer": "pajęczyna",
    "explanation": "Okular, obiektyw i kondensor to elementy mikroskopu. Pajęczyna może być obiektem przyrodniczym, ale nie jest częścią mikroskopu."
  },
  {
    "id": "R01_MIK_09",
    "section": "Mikroskop i doświadczenia",
    "type": "riddle",
    "prompt": "Jak nazywa się przyrząd, który pozwala obserwować komórki i bardzo małe obiekty dzięki powiększeniu obrazu?",
    "options": null,
    "answer": "mikroskop",
    "altAnswers": [
      "mikroskop",
      "mikroskop świetlny"
    ],
    "explanation": "Do obserwacji komórek używa się mikroskopu świetlnego."
  },
  {
    "id": "R01_FOT_01",
    "section": "Odżywianie i fotosynteza",
    "type": "single_choice",
    "prompt": "Które organizmy są samożywne?",
    "options": [
      "organizmy wytwarzające pokarm",
      "organizmy zjadające wyłącznie zwierzęta",
      "organizmy bez komórek",
      "organizmy żyjące tylko w ciemności",
      "organizmy przeprowadzające tylko fermentację"
    ],
    "answer": 0,
    "explanation": "Organizmy samożywne same wytwarzają pokarm, na przykład rośliny w procesie fotosyntezy."
  },
  {
    "id": "R01_FOT_02",
    "section": "Odżywianie i fotosynteza",
    "type": "true_false",
    "prompt": "Człowiek jest organizmem cudzożywnym.",
    "options": null,
    "answer": true,
    "explanation": "Człowiek uzyskuje potrzebne związki chemiczne z pokarmu, dlatego należy do organizmów cudzożywnych."
  },
  {
    "id": "R01_FOT_03",
    "section": "Odżywianie i fotosynteza",
    "type": "fill_in",
    "prompt": "W fotosyntezie z dwutlenku węgla i wody, przy udziale energii świetlnej, powstają __________ i __________.",
    "options": null,
    "answer": [
      "cukier",
      "tlen"
    ],
    "altAnswers": [
      [
        "cukier",
        "glukoza"
      ],
      [
        "tlen"
      ]
    ],
    "image": "r01_fotosynteza_roslina.jpg",
    "explanation": "Produktami fotosyntezy są cukier oraz tlen."
  },
  {
    "id": "R01_FOT_04",
    "section": "Odżywianie i fotosynteza",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki lub substancje potrzebne do przebiegu fotosyntezy.",
    "options": [
      "woda",
      "dwutlenek węgla",
      "energia świetlna",
      "tlen jako produkt",
      "alkohol etylowy",
      "chlorofil"
    ],
    "answer": [
      0,
      1,
      2,
      5
    ],
    "image": "r01_fotosynteza_roslina.jpg",
    "explanation": "Do fotosyntezy potrzebne są woda, dwutlenek węgla i energia światła; światło pochłaniają barwniki fotosyntetyczne, przede wszystkim chlorofil."
  },
  {
    "id": "R01_FOT_05",
    "section": "Odżywianie i fotosynteza",
    "type": "riddle",
    "prompt": "Jak nazywa się najważniejszy barwnik fotosyntetyczny pochłaniający światło?",
    "options": null,
    "answer": "chlorofil",
    "altAnswers": [
      "chlorofil"
    ],
    "explanation": "Najważniejszym barwnikiem fotosyntetycznym jest chlorofil."
  },
  {
    "id": "R01_FOT_06",
    "section": "Odżywianie i fotosynteza",
    "type": "scenario",
    "prompt": "W doświadczeniu z moczarką jedna roślina stoi w ciemności, druga w słabym świetle, a trzecia w silnym świetle. W której próbie powinno powstać najwięcej tlenu?",
    "options": [
      "w silnym świetle",
      "w ciemności",
      "w każdej próbie tyle samo",
      "tylko w probówce bez rośliny"
    ],
    "answer": 0,
    "image": "r01_doswiadczenie_fotosynteza.jpg",
    "explanation": "Większe natężenie światła zwiększa intensywność fotosyntezy, dlatego w silnym świetle powinno powstać najwięcej tlenu."
  },
  {
    "id": "R01_FOT_07",
    "section": "Odżywianie i fotosynteza",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest potrzebnym substratem ani warunkiem fotosyntezy: woda, dwutlenek węgla, światło, alkohol etylowy.",
    "options": null,
    "answer": "alkohol etylowy",
    "explanation": "Fotosynteza wymaga wody, dwutlenku węgla i światła. Alkohol etylowy jest związany z fermentacją alkoholową, a nie z fotosyntezą."
  },
  {
    "id": "R01_FOT_08",
    "section": "Odżywianie i fotosynteza",
    "type": "match",
    "prompt": "Połącz pojęcie z opisem.",
    "options": null,
    "left": [
      "chloroplast",
      "chlorofil",
      "organizm cudzożywny",
      "skrobia"
    ],
    "right": [
      "miejsce fotosyntezy w komórce roślinnej",
      "barwnik pochłaniający światło",
      "pobiera pokarm z otoczenia",
      "materiał zapasowy roślin"
    ],
    "answer": {
      "chloroplast": "miejsce fotosyntezy w komórce roślinnej",
      "chlorofil": "barwnik pochłaniający światło",
      "organizm cudzożywny": "pobiera pokarm z otoczenia",
      "skrobia": "materiał zapasowy roślin"
    },
    "explanation": "Pojęcia dotyczą różnych elementów odżywiania się organizmów i fotosyntezy."
  },
  {
    "id": "R01_FOT_09",
    "section": "Odżywianie i fotosynteza",
    "type": "sort",
    "prompt": "Rozdziel przykłady na organizmy samożywne i cudzożywne.",
    "options": null,
    "items": [
      "dąb",
      "moczarka",
      "człowiek",
      "pająk"
    ],
    "categories": [
      "samożywne",
      "cudzożywne"
    ],
    "answer": {
      "samożywne": [
        "dąb",
        "moczarka"
      ],
      "cudzożywne": [
        "człowiek",
        "pająk"
      ]
    },
    "explanation": "Rośliny wytwarzają pokarm w fotosyntezie, a zwierzęta pobierają pokarm z innych organizmów."
  },
  {
    "id": "R01_FOT_10",
    "section": "Odżywianie i fotosynteza",
    "type": "single_choice",
    "prompt": "W którym organellum komórki roślinnej zachodzi fotosynteza?",
    "options": [
      "chloroplast",
      "mitochondrium",
      "jądro komórkowe",
      "ściana komórkowa",
      "błona komórkowa",
      "wakuola"
    ],
    "answer": 0,
    "image": "r01_komorka_roslinna_schemat.jpg",
    "explanation": "Fotosynteza zachodzi w chloroplastach, które zawierają barwniki pochłaniające światło."
  },
  {
    "id": "R01_ODD_01",
    "section": "Oddychanie i fermentacja",
    "type": "single_choice",
    "prompt": "Które związki chemiczne są podstawowym źródłem energii dla organizmów?",
    "options": [
      "cukry",
      "sole mineralne",
      "woda",
      "chlorofil",
      "materiał genetyczny",
      "ściana komórkowa"
    ],
    "answer": 0,
    "explanation": "W rozdziale wskazano, że podstawowe źródło energii stanowią cukry."
  },
  {
    "id": "R01_ODD_02",
    "section": "Oddychanie i fermentacja",
    "type": "fill_in",
    "prompt": "W oddychaniu tlenowym cukier i tlen przekształcają się w energię, dwutlenek węgla oraz __________.",
    "options": null,
    "answer": [
      "wodę"
    ],
    "altAnswers": [
      [
        "wodę",
        "woda"
      ]
    ],
    "image": "r01_oddychanie_tlenowe_schemat.jpg",
    "explanation": "Podczas oddychania tlenowego powstają energia, dwutlenek węgla i woda."
  },
  {
    "id": "R01_ODD_03",
    "section": "Oddychanie i fermentacja",
    "type": "true_false",
    "prompt": "Oddychanie tlenowe zachodzi w mitochondriach.",
    "options": null,
    "answer": true,
    "image": "r01_oddychanie_tlenowe_schemat.jpg",
    "explanation": "Mitochondria są organellami, w których zachodzi oddychanie tlenowe."
  },
  {
    "id": "R01_ODD_04",
    "section": "Oddychanie i fermentacja",
    "type": "match",
    "prompt": "Połącz proces z charakterystyczną informacją.",
    "options": null,
    "left": [
      "oddychanie tlenowe",
      "fermentacja mlekowa",
      "fermentacja alkoholowa"
    ],
    "right": [
      "zachodzi w mitochondriach",
      "powstaje kwas mlekowy",
      "powstaje alkohol etylowy i dwutlenek węgla"
    ],
    "answer": {
      "oddychanie tlenowe": "zachodzi w mitochondriach",
      "fermentacja mlekowa": "powstaje kwas mlekowy",
      "fermentacja alkoholowa": "powstaje alkohol etylowy i dwutlenek węgla"
    },
    "explanation": "Oddychanie tlenowe i fermentacje różnią się udziałem tlenu, miejscem zachodzenia i produktami."
  },
  {
    "id": "R01_ODD_05",
    "section": "Oddychanie i fermentacja",
    "type": "multi_select",
    "prompt": "Zaznacz produkty fermentacji alkoholowej.",
    "options": [
      "alkohol etylowy",
      "dwutlenek węgla",
      "energia",
      "tlen",
      "chlorofil",
      "ściana komórkowa"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r01_fermentacja_drozdze.jpg",
    "explanation": "Podczas fermentacji alkoholowej cukier przekształca się w alkohol etylowy i dwutlenek węgla, a uwalniana jest część energii."
  },
  {
    "id": "R01_ODD_06",
    "section": "Oddychanie i fermentacja",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie pasuje do pozostałych jako produkt lub efekt fermentacji: kwas mlekowy, alkohol etylowy, dwutlenek węgla, chlorofil.",
    "options": null,
    "answer": "chlorofil",
    "explanation": "Kwas mlekowy, alkohol etylowy i dwutlenek węgla są związane z fermentacją. Chlorofil jest barwnikiem fotosyntetycznym."
  },
  {
    "id": "R01_ODD_07",
    "section": "Oddychanie i fermentacja",
    "type": "scenario",
    "prompt": "Podczas bardzo intensywnego wysiłku do mięśni dociera zbyt mało tlenu. Jaki proces może wtedy zachodzić w mięśniach szkieletowych?",
    "options": [
      "fermentacja mlekowa",
      "fotosynteza",
      "fermentacja alkoholowa drożdży",
      "klasyfikacja biologiczna"
    ],
    "answer": 0,
    "explanation": "Gdy do mięśni nie dociera odpowiednia ilość tlenu, może zachodzić w nich fermentacja mlekowa."
  },
  {
    "id": "R01_ODD_08",
    "section": "Oddychanie i fermentacja",
    "type": "sort",
    "prompt": "Przyporządkuj procesy do informacji o tlenie.",
    "options": null,
    "items": [
      "oddychanie tlenowe",
      "fermentacja mlekowa",
      "fermentacja alkoholowa"
    ],
    "categories": [
      "wymaga tlenu",
      "zachodzi bez udziału tlenu"
    ],
    "answer": {
      "wymaga tlenu": [
        "oddychanie tlenowe"
      ],
      "zachodzi bez udziału tlenu": [
        "fermentacja mlekowa",
        "fermentacja alkoholowa"
      ]
    },
    "explanation": "Oddychanie tlenowe wymaga tlenu, natomiast fermentacja pozwala uzyskiwać energię bez udziału tlenu."
  },
  {
    "id": "R01_ODD_09",
    "section": "Oddychanie i fermentacja",
    "type": "riddle",
    "prompt": "Jak nazywają się mikroskopijne grzyby przeprowadzające fermentację alkoholową?",
    "options": null,
    "answer": "drożdże",
    "altAnswers": [
      "drożdże",
      "drozdze"
    ],
    "explanation": "Drożdże przeprowadzają fermentację alkoholową, dzięki której powstaje między innymi dwutlenek węgla spulchniający ciasto."
  },
  {
    "id": "R01_ODD_10",
    "section": "Oddychanie i fermentacja",
    "type": "true_false",
    "prompt": "Z tej samej ilości cukru fermentacja daje mniej energii niż oddychanie tlenowe.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik wyjaśnia, że fermentacja uwalnia tylko część energii zmagazynowanej w cukrze."
  },
  {
    "id": "R01_ODD_11",
    "section": "Oddychanie i fermentacja",
    "type": "sequence",
    "prompt": "Ułóż etapy uzyskiwania energii z pokarmu przez człowieka.",
    "options": null,
    "items": [
      "tlen i cukier docierają do komórek",
      "pokarm jest trawiony",
      "w mitochondriach zachodzi oddychanie tlenowe",
      "proste związki są wchłaniane do krwi",
      "uwalnia się energia"
    ],
    "answer": [
      "pokarm jest trawiony",
      "proste związki są wchłaniane do krwi",
      "tlen i cukier docierają do komórek",
      "w mitochondriach zachodzi oddychanie tlenowe",
      "uwalnia się energia"
    ],
    "explanation": "Pokarm jest trawiony do prostych związków, które trafiają z krwią do komórek. Tam z udziałem tlenu może zachodzić oddychanie tlenowe."
  },
  {
    "id": "R01_KLW_01",
    "section": "Klasyfikacja i wirusy",
    "type": "single_choice",
    "prompt": "Czym jest gatunek?",
    "options": [
      "grupą organizmów o wielu wspólnych cechach przekazywanych potomstwu",
      "dowolną grupą zwierząt żyjących w jednym miejscu",
      "nazwą wszystkich organizmów jednokomórkowych",
      "zestawem narządów w ciele zwierzęcia"
    ],
    "answer": 0,
    "explanation": "Gatunek to grupa organizmów mających wiele wspólnych cech i przekazujących je potomstwu."
  },
  {
    "id": "R01_KLW_02",
    "section": "Klasyfikacja i wirusy",
    "type": "fill_in",
    "prompt": "Wszystkie gatunki na Ziemi pochodzą od wspólnego __________.",
    "options": null,
    "answer": [
      "przodka"
    ],
    "altAnswers": [
      [
        "przodka",
        "wspólnego przodka"
      ]
    ],
    "image": "r01_drzewo_zycia.jpg",
    "explanation": "Podręcznik przedstawia organizmy jako jedną wielką rodzinę pochodzącą od wspólnego przodka."
  },
  {
    "id": "R01_KLW_03",
    "section": "Klasyfikacja i wirusy",
    "type": "sequence",
    "prompt": "Ułóż poziomy klasyfikacji biologicznej od najmniejszego do największego.",
    "options": null,
    "items": [
      "rodzina",
      "królestwo",
      "gatunek",
      "gromada",
      "rodzaj",
      "rząd"
    ],
    "answer": [
      "gatunek",
      "rodzaj",
      "rodzina",
      "rząd",
      "gromada",
      "królestwo"
    ],
    "explanation": "Gatunki łączy się w rodzaje, rodzaje w rodziny, rodziny w rzędy, rzędy w gromady, a gromady w królestwa."
  },
  {
    "id": "R01_KLW_04",
    "section": "Klasyfikacja i wirusy",
    "type": "multi_select",
    "prompt": "Zaznacz królestwa organizmów wymienione w rozdziale.",
    "options": [
      "rośliny",
      "zwierzęta",
      "grzyby",
      "bakterie",
      "protisty",
      "wirusy"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "r01_drzewo_zycia.jpg",
    "explanation": "W rozdziale wyróżniono pięć królestw: rośliny, zwierzęta, grzyby, bakterie i protisty."
  },
  {
    "id": "R01_KLW_05",
    "section": "Klasyfikacja i wirusy",
    "type": "match",
    "prompt": "Połącz królestwo lub grupę z cechą opisaną w rozdziale.",
    "options": null,
    "left": [
      "bakterie",
      "zwierzęta",
      "protisty",
      "rośliny"
    ],
    "right": [
      "nie mają jądra komórkowego",
      "cudzożywne organizmy wielokomórkowe o tkankach",
      "mogą być samożywne lub cudzożywne",
      "wytwarzają pokarm w fotosyntezie"
    ],
    "answer": {
      "bakterie": "nie mają jądra komórkowego",
      "zwierzęta": "cudzożywne organizmy wielokomórkowe o tkankach",
      "protisty": "mogą być samożywne lub cudzożywne",
      "rośliny": "wytwarzają pokarm w fotosyntezie"
    },
    "explanation": "Królestwa różnią się między innymi budową komórek, liczbą komórek i sposobem odżywiania."
  },
  {
    "id": "R01_KLW_06",
    "section": "Klasyfikacja i wirusy",
    "type": "odd_one_out",
    "prompt": "Wskaż pojęcie, które nie jest poziomem klasyfikacji biologicznej: gatunek, rodzaj, rodzina, mikroskop.",
    "options": null,
    "answer": "mikroskop",
    "explanation": "Gatunek, rodzaj i rodzina to poziomy klasyfikacji. Mikroskop jest przyrządem do obserwacji."
  },
  {
    "id": "R01_KLW_07",
    "section": "Klasyfikacja i wirusy",
    "type": "true_false",
    "prompt": "Dział biologii zajmujący się klasyfikacją organizmów to systematyka.",
    "options": null,
    "answer": true,
    "explanation": "Systematyka zajmuje się porządkowaniem i klasyfikacją organizmów."
  },
  {
    "id": "R01_KLW_08",
    "section": "Klasyfikacja i wirusy",
    "type": "single_choice",
    "prompt": "Dlaczego wirusy nie są zaliczane do organizmów?",
    "options": [
      "bo nie mają budowy komórkowej ani czynności życiowych",
      "bo zawsze są większe od komórek",
      "bo zawierają chloroplasty",
      "bo są wyłącznie roślinami",
      "bo oddychają tlenowo w mitochondriach"
    ],
    "answer": 0,
    "image": "r01_wirusy_budowa.jpg",
    "explanation": "Wirusy nie mają budowy komórkowej i nie wykazują czynności życiowych, dlatego nie są organizmami."
  },
  {
    "id": "R01_KLW_09",
    "section": "Klasyfikacja i wirusy",
    "type": "riddle",
    "prompt": "Jak nazywa się wirus atakujący bakterie, przedstawiany jako kształt przypominający małego robota?",
    "options": null,
    "answer": "bakteriofag",
    "altAnswers": [
      "bakteriofag",
      "bakteriofagi"
    ],
    "explanation": "Bakteriofagi to wirusy atakujące bakterie."
  },
  {
    "id": "R01_KLW_10",
    "section": "Klasyfikacja i wirusy",
    "type": "multi_select",
    "prompt": "Zaznacz drogi zakażenia wirusami opisane w rozdziale.",
    "options": [
      "bezpośredni kontakt z chorym",
      "droga powietrzno-kropelkowa",
      "droga pokarmowa",
      "za pośrednictwem zwierząt",
      "kontakt z zakażoną krwią",
      "samo czytanie o wirusach"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "r01_drogi_zakazenia.jpg",
    "explanation": "Wirusy mogą przenosić się między innymi przez kontakt z chorym, drogą kropelkową, pokarmową, przez zwierzęta, drogą płciową lub przez zakażoną krew."
  },
  {
    "id": "R01_KLW_11",
    "section": "Klasyfikacja i wirusy",
    "type": "scenario",
    "prompt": "Po szczepieniu białe krwinki uczą się rozpoznawać określone wirusy lub bakterie i wytwarzają przeciwciała. Jaki jest cel szczepienia?",
    "options": [
      "wspomóc odporność organizmu",
      "zastąpić wszystkie czynności życiowe",
      "umożliwić wirusom rozmnażanie",
      "zahamować pracę białych krwinek"
    ],
    "answer": 0,
    "image": "r01_szczepionka_odpornosc.jpg",
    "explanation": "Szczepienie ma przygotować układ odpornościowy do szybkiej reakcji przy kolejnym kontakcie z danym czynnikiem chorobotwórczym."
  },
  {
    "id": "R01_KLW_12",
    "section": "Klasyfikacja i wirusy",
    "type": "true_false",
    "prompt": "Wirus HIV atakuje i niszczy białe krwinki, osłabiając zdolność organizmu do walki z chorobami.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik podaje, że HIV niszczy białe krwinki i ogranicza zdolność organizmu do obrony przed chorobami."
  },
  {
    "id": "R01_KLW_13",
    "section": "Klasyfikacja i wirusy",
    "type": "match",
    "prompt": "Połącz chorobę lub wirusa z opisem z rozdziału.",
    "options": null,
    "left": [
      "wścieklizna",
      "grypa",
      "AIDS",
      "półpasiec"
    ],
    "right": [
      "może być przenoszona przez ślinę chorego zwierzęcia",
      "jej wirus szybko się zmienia",
      "choroba wywoływana przez HIV",
      "może pojawić się po uaktywnieniu wirusa ospy wietrznej"
    ],
    "answer": {
      "wścieklizna": "może być przenoszona przez ślinę chorego zwierzęcia",
      "grypa": "jej wirus szybko się zmienia",
      "AIDS": "choroba wywoływana przez HIV",
      "półpasiec": "może pojawić się po uaktywnieniu wirusa ospy wietrznej"
    },
    "explanation": "Rozdział omawia przykłady chorób wirusowych i sposoby ich przenoszenia."
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Nazwa biologia pochodzi od greckich słów bios oznaczającego __________ oraz logos oznaczającego __________.",
    "options": null,
    "answer": [
      "życie",
      "nauka"
    ],
    "altAnswers": [
      [
        "życie",
        "zycie"
      ],
      [
        "nauka",
        "naukę",
        "nauke"
      ]
    ],
    "explanation": "Z połączenia słów bios i logos powstała nazwa nauki o życiu."
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz sposoby zdobywania wiedzy biologicznej opisane w rozdziale.",
    "options": [
      "doświadczenia",
      "obserwacje",
      "precyzyjne pomiary",
      "gromadzenie danych",
      "wróżenie",
      "zgadywanie bez sprawdzania"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Biologia jest nauką doświadczalną, a ważną rolę w poznawaniu organizmów odgrywają doświadczenia i obserwacje."
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Toczek tworzy kolonię z wielu pojedynczych organizmów. Dlaczego nie jest to to samo co typowy organizm wielokomórkowy z tkankami?",
    "options": [
      "bo kolonia składa się z wielu pojedynczych organizmów",
      "bo nie zawiera żadnych komórek",
      "bo zawsze jest zwierzęciem",
      "bo przeprowadza wyłącznie fotosyntezę"
    ],
    "answer": 0,
    "explanation": "W organizmie wielokomórkowym komórki tworzą tkanki, narządy i układy narządów oraz dzielą się funkcjami. Kolonia składa się z pojedynczych organizmów."
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj związki chemiczne do głównej roli opisanej w rozdziale.",
    "options": null,
    "items": [
      "białka",
      "glukoza",
      "kwasy nukleinowe",
      "woda"
    ],
    "categories": [
      "budulec",
      "źródło energii",
      "materiał genetyczny",
      "transport i przebieg procesów"
    ],
    "answer": {
      "budulec": [
        "białka"
      ],
      "źródło energii": [
        "glukoza"
      ],
      "materiał genetyczny": [
        "kwasy nukleinowe"
      ],
      "transport i przebieg procesów": [
        "woda"
      ]
    },
    "explanation": "Różne związki chemiczne pełnią w organizmie różne funkcje: są budulcem, źródłem energii, materiałem genetycznym albo środowiskiem transportu i reakcji."
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz pierwiastek ważny dla aktywnych osób z informacją z rozdziału.",
    "options": null,
    "left": [
      "sód",
      "potas",
      "wapń",
      "magnez"
    ],
    "right": [
      "reguluje poziom wody w organizmie",
      "jest potrzebny do pracy serca",
      "buduje kości i szkliwo",
      "wchodzi w skład kości i zębów"
    ],
    "answer": {
      "sód": "reguluje poziom wody w organizmie",
      "potas": "jest potrzebny do pracy serca",
      "wapń": "buduje kości i szkliwo",
      "magnez": "wchodzi w skład kości i zębów"
    },
    "explanation": "Na stronach o pierwiastkach dla aktywnych opisano znaczenie sodu, potasu, wapnia i magnezu."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Zbyt niski poziom ferrytyny może wskazywać na niedobór żelaza.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział wyjaśnia, że ferrytyna odpowiada za magazynowanie żelaza, a jej zbyt niski poziom wskazuje na niedobór tego pierwiastka."
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Według rozdziału w ciele człowieka znajduje się około 30 bilionów komórek, a około 25 bilionów to krwinki czerwone. Który wniosek najlepiej wynika z tych danych?",
    "options": [
      "krwinki czerwone stanowią bardzo dużą część komórek ciała",
      "komórek nerwowych jest dokładnie 25 bilionów",
      "człowiek ma tylko 30 komórek",
      "krwinki czerwone odpowiadają za fotosyntezę"
    ],
    "answer": 0,
    "explanation": "Skoro 25 z około 30 bilionów komórek to krwinki czerwone, stanowią one bardzo dużą część komórek ciała człowieka."
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie pasuje do pozostałych jako pierwiastek ważny dla organizmu: sód, potas, wapń, chloroplast.",
    "options": null,
    "answer": "chloroplast",
    "explanation": "Sód, potas i wapń to pierwiastki. Chloroplast jest organellum komórki roślinnej."
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż uproszczone etapy namnażania wirusa w komórce.",
    "options": null,
    "items": [
      "powstają elementy nowych wirusów",
      "wirus wnika do komórki",
      "nowe wirusy wydostają się po zniszczeniu komórki",
      "materiał genetyczny wirusa przejmuje kontrolę",
      "składane są nowe wirusy"
    ],
    "answer": [
      "wirus wnika do komórki",
      "materiał genetyczny wirusa przejmuje kontrolę",
      "powstają elementy nowych wirusów",
      "składane są nowe wirusy",
      "nowe wirusy wydostają się po zniszczeniu komórki"
    ],
    "image": "r01_namnazanie_wirusa.jpg",
    "explanation": "Wirus wnika do komórki, przejmuje nad nią kontrolę, doprowadza do powstania swoich kopii, a nowe wirusy wydostają się do otoczenia."
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Fermentacja zachodzi w __________, a oddychanie tlenowe zachodzi w __________.",
    "options": null,
    "answer": [
      "cytoplazmie",
      "mitochondriach"
    ],
    "altAnswers": [
      [
        "cytoplazmie",
        "cytoplazma"
      ],
      [
        "mitochondriach",
        "mitochondrium"
      ]
    ],
    "explanation": "Fermentacja zachodzi w cytoplazmie, natomiast oddychanie tlenowe zachodzi w mitochondriach."
  },
  {
    "id": "R01_HARD_11",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Roślina cierpi na niedobór wody, przez co zamykają się aparaty szparkowe i do liścia dociera mniej dwutlenku węgla. Jaki będzie skutek dla fotosyntezy?",
    "options": [
      "fotosynteza może zostać zahamowana",
      "fotosynteza zawsze przyspieszy",
      "roślina zacznie przeprowadzać fermentację alkoholową",
      "chloroplasty znikną z komórek"
    ],
    "answer": 0,
    "explanation": "Niedobór wody może hamować fotosyntezę, między innymi dlatego, że zamknięcie aparatów szparkowych ogranicza dostęp dwutlenku węgla."
  },
  {
    "id": "R01_HARD_12",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywają się cząsteczki, które przyłączają się do wirusów lub zakażonych nimi komórek?",
    "options": null,
    "answer": "przeciwciała",
    "altAnswers": [
      "przeciwciała",
      "przeciwciala"
    ],
    "explanation": "Przeciwciała to białka wytwarzane przez białe krwinki i uczestniczące w obronie organizmu."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r01",
  number: 1,
  title: "Podstawy biologii",
  icon: "🔬",
  sectionOrder: [
  "Cechy organizmów i komórki",
  "Mikroskop i doświadczenia",
  "Odżywianie i fotosynteza",
  "Oddychanie i fermentacja",
  "Klasyfikacja i wirusy"
],
  sectionIcons: {
  "Cechy organizmów i komórki": "🧬",
  "Mikroskop i doświadczenia": "🔬",
  "Odżywianie i fotosynteza": "🌿",
  "Oddychanie i fermentacja": "⚡",
  "Klasyfikacja i wirusy": "🦠"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
