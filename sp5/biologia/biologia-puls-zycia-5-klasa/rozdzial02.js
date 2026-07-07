// Rozdział 2: Budowa i czynności życiowe organizmów
// Wygenerowany na podstawie załączonego rozdziału i szablonu aplikacji.

const ALL_EXERCISES = 
[
  {
    "id": "R02_SK_01",
    "section": "Składniki chemiczne organizmów",
    "type": "single_choice",
    "prompt": "Którego składnika jest najwięcej w organizmie człowieka?",
    "options": [
      "Wody",
      "Białek",
      "Tłuszczów",
      "Soli mineralnych"
    ],
    "answer": 0,
    "explanation": "W organizmie człowieka najwięcej jest wody. To ona stanowi największą część masy ciała.",
    "image": "/img/r02_skladniki_organizmu.jpg"
  },
  {
    "id": "R02_SK_02",
    "section": "Składniki chemiczne organizmów",
    "type": "true_false",
    "prompt": "Woda pomaga transportować różne substancje w organizmie.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Woda przenosi różne substancje wewnątrz komórek i pomiędzy komórkami."
  },
  {
    "id": "R02_SK_03",
    "section": "Składniki chemiczne organizmów",
    "type": "match",
    "prompt": "Połącz składnik z jego główną funkcją.",
    "options": null,
    "left": [
      "skrobia",
      "celuloza",
      "DNA"
    ],
    "right": [
      "zapas cukru",
      "buduje ścianę komórkową roślin",
      "zapis informacji o cechach"
    ],
    "answer": {
      "skrobia": "zapas cukru",
      "celuloza": "buduje ścianę komórkową roślin",
      "DNA": "zapis informacji o cechach"
    },
    "explanation": "Skrobia jest materiałem zapasowym, celuloza buduje ścianę komórkową, a DNA przechowuje informację o cechach."
  },
  {
    "id": "R02_SK_04",
    "section": "Składniki chemiczne organizmów",
    "type": "single_choice",
    "prompt": "Który pierwiastek jest potrzebny roślinom do fotosyntezy i znajduje się w solach mineralnych?",
    "options": [
      "Magnez",
      "Złoto",
      "Srebro",
      "Rtęć"
    ],
    "answer": 0,
    "explanation": "Magnez jest ważnym składnikiem potrzebnym roślinom do przeprowadzania fotosyntezy."
  },
  {
    "id": "R02_SK_05",
    "section": "Składniki chemiczne organizmów",
    "type": "fill_in",
    "prompt": "Cukier zapasowy w bulwach ziemniaka to __________, a cukier budujący ścianę komórkową roślin to __________.",
    "options": null,
    "answer": [
      "skrobia",
      "celuloza"
    ],
    "explanation": "Skrobia jest zapasem, a celuloza buduje ścianę komórkową roślin.",
    "altAnswers": [
      [
        "skrobia",
        "skrobię",
        "skrobii"
      ],
      [
        "celuloza",
        "celulozę",
        "celulozy"
      ]
    ],
    "image": "/img/r02_funkcje_cukrow.jpg"
  },
  {
    "id": "R02_SK_06",
    "section": "Składniki chemiczne organizmów",
    "type": "multi_select",
    "prompt": "Zaznacz zdania prawdziwe o białkach.",
    "options": [
      "Budują ciało organizmu",
      "Mogą być zapasem w nasionach",
      "Są enzymami pomagającymi w trawieniu",
      "Zawsze tworzą chloroplasty"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Białka budują organizmy, mogą być zapasem w nasionach i niektóre z nich działają jako enzymy. Nie tworzą chloroplastów.",
    "image": "/img/r02_funkcje_bialek.jpg"
  },
  {
    "id": "R02_SK_07",
    "section": "Składniki chemiczne organizmów",
    "type": "single_choice",
    "prompt": "Który związek daje organizmowi najwięcej energii?",
    "options": [
      "Tłuszcze",
      "Woda",
      "Sole mineralne",
      "DNA"
    ],
    "answer": 0,
    "explanation": "Tłuszcze są bardzo bogatym źródłem energii. Dają jej więcej niż cukry.",
    "image": "/img/r02_funkcje_tluszczow.jpg"
  },
  {
    "id": "R02_SK_08",
    "section": "Składniki chemiczne organizmów",
    "type": "riddle",
    "prompt": "Jestem związkiem, w którym zapisane są informacje o cechach organizmu. Kim jestem?",
    "options": null,
    "answer": "DNA",
    "explanation": "DNA to kwas nukleinowy, w którym zapisana jest informacja o cechach organizmu.",
    "altAnswers": [
      "dna",
      "DNA"
    ]
  },
  {
    "id": "R02_KZ_01",
    "section": "Budowa komórki zwierzęcej",
    "type": "single_choice",
    "prompt": "Jak nazywa się najmniejsza część organizmu, która wykonuje czynności życiowe?",
    "options": [
      "Komórka",
      "Tkanka",
      "Narząd",
      "Układ"
    ],
    "answer": 0,
    "explanation": "Komórka jest podstawową jednostką życia. To najmniejsza część organizmu zdolna do wykonywania czynności życiowych."
  },
  {
    "id": "R02_KZ_02",
    "section": "Budowa komórki zwierzęcej",
    "type": "true_false",
    "prompt": "Wszystkie komórki zwierzęce mają dokładnie taki sam kształt.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz. Kształt komórek zależy od funkcji, które pełnią w organizmie.",
    "image": "/img/r02_ksztalty_komorek_zwierzecych.jpg"
  },
  {
    "id": "R02_KZ_03",
    "section": "Budowa komórki zwierzęcej",
    "type": "match",
    "prompt": "Połącz rodzaj komórki zwierzęcej z tym, co jej pomaga.",
    "options": null,
    "left": [
      "plemnik",
      "komórka nerwowa",
      "komórka jajowa"
    ],
    "right": [
      "witka ułatwiająca ruch",
      "wypustki do przekazywania informacji",
      "zapas substancji dla rozwijającego się organizmu"
    ],
    "answer": {
      "plemnik": "witka ułatwiająca ruch",
      "komórka nerwowa": "wypustki do przekazywania informacji",
      "komórka jajowa": "zapas substancji dla rozwijającego się organizmu"
    },
    "explanation": "Plemnik ma witkę, komórka nerwowa ma wypustki, a komórka jajowa zawiera zapasy.",
    "image": "/img/r02_ksztalty_komorek_zwierzecych.jpg"
  },
  {
    "id": "R02_KZ_04",
    "section": "Budowa komórki zwierzęcej",
    "type": "single_choice",
    "prompt": "Która część komórki zwierzęcej kieruje procesami zachodzącymi w komórce?",
    "options": [
      "Jądro komórkowe",
      "Błona komórkowa",
      "Wakuola",
      "Rzęska"
    ],
    "answer": 0,
    "explanation": "Jądro komórkowe zawiera DNA i kieruje najważniejszymi procesami w komórce.",
    "image": "/img/r02_komorka_zwierzeca.jpg"
  },
  {
    "id": "R02_KZ_05",
    "section": "Budowa komórki zwierzęcej",
    "type": "fill_in",
    "prompt": "Komórkę zwierzęcą od zewnątrz otacza __________, a jej wnętrze wypełnia __________.",
    "options": null,
    "answer": [
      "błona komórkowa",
      "cytoplazma"
    ],
    "explanation": "Błona komórkowa oddziela komórkę od otoczenia, a cytoplazma wypełnia jej wnętrze.",
    "altAnswers": [
      [
        "błona komórkowa",
        "błona",
        "błoną komórkową"
      ],
      [
        "cytoplazma",
        "cytoplazmę",
        "cytoplazmie"
      ]
    ],
    "image": "/img/r02_komorka_zwierzeca.jpg"
  },
  {
    "id": "R02_KZ_06",
    "section": "Budowa komórki zwierzęcej",
    "type": "multi_select",
    "prompt": "Co można znaleźć w cytoplazmie komórki zwierzęcej przy dużym powiększeniu?",
    "options": [
      "Mitochondria",
      "Rybosomy",
      "Wakuole",
      "Szyszki"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "W cytoplazmie znajdują się między innymi mitochondria, rybosomy i wakuole. Szyszki nie są częścią komórki."
  },
  {
    "id": "R02_KZ_07",
    "section": "Budowa komórki zwierzęcej",
    "type": "scenario",
    "prompt": "Ola ogląda pod mikroskopem komórki nabłonka jamy ustnej. Którą część komórki najłatwiej może zauważyć?",
    "options": [
      "Jądro komórkowe",
      "Korzeń",
      "Liść",
      "Szparkę"
    ],
    "answer": 0,
    "explanation": "W komórkach nabłonka jamy ustnej można zauważyć między innymi jądro komórkowe. Pozostałe odpowiedzi nie są częściami komórki zwierzęcej."
  },
  {
    "id": "R02_KZ_08",
    "section": "Budowa komórki zwierzęcej",
    "type": "riddle",
    "prompt": "Oddzielam wnętrze komórki od otoczenia i przepuszczam różne substancje. Kim jestem?",
    "options": null,
    "answer": "błona komórkowa",
    "explanation": "Błona komórkowa otacza komórkę i kontroluje przepływ różnych substancji.",
    "altAnswers": [
      "błona komórkowa",
      "błona",
      "błoną komórkową"
    ]
  },
  {
    "id": "R02_KR_01",
    "section": "Komórka roślinna i inne rodzaje komórek",
    "type": "single_choice",
    "prompt": "Które komórki należą do komórek jądrowych?",
    "options": [
      "Zwierzęce, roślinne i grzybowe",
      "Tylko bakteryjne",
      "Tylko wirusów",
      "Tylko roślinne"
    ],
    "answer": 0,
    "explanation": "Komórki zwierzęce, roślinne i grzybowe mają jądro komórkowe. Bakterie go nie mają."
  },
  {
    "id": "R02_KR_02",
    "section": "Komórka roślinna i inne rodzaje komórek",
    "type": "multi_select",
    "prompt": "Zaznacz elementy, które występują w komórce roślinnej, a nie występują w typowej komórce zwierzęcej.",
    "options": [
      "Ściana komórkowa",
      "Chloroplasty",
      "Duża wakuola",
      "Mitochondria"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Komórka roślinna ma ścianę komórkową, chloroplasty i dużą wakuolę. Mitochondria występują także w komórce zwierzęcej.",
    "image": "/img/r02_porownanie_komorek.jpg"
  },
  {
    "id": "R02_KR_03",
    "section": "Komórka roślinna i inne rodzaje komórek",
    "type": "match",
    "prompt": "Połącz element komórki roślinnej z jego zadaniem.",
    "options": null,
    "left": [
      "ściana komórkowa",
      "chloroplast",
      "wakuola"
    ],
    "right": [
      "nadaje kształt i chroni",
      "przeprowadza fotosyntezę",
      "magazynuje wodę"
    ],
    "answer": {
      "ściana komórkowa": "nadaje kształt i chroni",
      "chloroplast": "przeprowadza fotosyntezę",
      "wakuola": "magazynuje wodę"
    },
    "explanation": "Ściana komórkowa chroni i usztywnia komórkę, chloroplast prowadzi fotosyntezę, a wakuola pomaga utrzymać wodę.",
    "image": "/img/r02_komorka_roslinna.jpg"
  },
  {
    "id": "R02_KR_04",
    "section": "Komórka roślinna i inne rodzaje komórek",
    "type": "true_false",
    "prompt": "Komórka bakteryjna ma jądro komórkowe.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz. Komórka bakteryjna nie ma jądra. Zamiast niego ma nić DNA w cytozolu.",
    "image": "/img/r02_komorka_bakteryjna_grzybowa.jpg"
  },
  {
    "id": "R02_KR_05",
    "section": "Komórka roślinna i inne rodzaje komórek",
    "type": "single_choice",
    "prompt": "Co w komórce bakteryjnej pełni rolę materiału genetycznego zamiast jądra?",
    "options": [
      "Nić DNA",
      "Chloroplast",
      "Jąderko",
      "Skrobia"
    ],
    "answer": 0,
    "explanation": "W komórce bakteryjnej zamiast jądra występuje nić DNA zanurzona w cytozolu.",
    "image": "/img/r02_komorka_bakteryjna_grzybowa.jpg"
  },
  {
    "id": "R02_KR_06",
    "section": "Komórka roślinna i inne rodzaje komórek",
    "type": "single_choice",
    "prompt": "Z jakiego cukru jest zbudowana ściana komórkowa grzybów?",
    "options": [
      "Z chityny",
      "Z glukozy",
      "Z tłuszczu",
      "Z chlorofilu"
    ],
    "answer": 0,
    "explanation": "Ściana komórkowa grzybów jest zbudowana z chityny, a nie z celulozy jak u roślin."
  },
  {
    "id": "R02_KR_07",
    "section": "Komórka roślinna i inne rodzaje komórek",
    "type": "sort",
    "prompt": "Posegreguj komórki do właściwych grup.",
    "options": null,
    "items": [
      "komórka zwierzęca",
      "komórka roślinna",
      "komórka grzybowa",
      "komórka bakteryjna"
    ],
    "categories": [
      "jądrowe",
      "bezjądrowe"
    ],
    "answer": {
      "jądrowe": [
        "komórka zwierzęca",
        "komórka roślinna",
        "komórka grzybowa"
      ],
      "bezjądrowe": [
        "komórka bakteryjna"
      ]
    },
    "explanation": "Komórki zwierzęce, roślinne i grzybowe mają jądro, więc są jądrowe. Komórka bakteryjna jest bezjądrowa.",
    "image": "/img/r02_porownanie_komorek.jpg"
  },
  {
    "id": "R02_KR_08",
    "section": "Komórka roślinna i inne rodzaje komórek",
    "type": "fill_in",
    "prompt": "Zielony barwnik w chloroplastach to __________, a dzięki niemu roślina pochłania __________.",
    "options": null,
    "answer": [
      "chlorofil",
      "światło"
    ],
    "explanation": "Chlorofil nadaje zielony kolor chloroplastom i pomaga pochłaniać światło potrzebne do fotosyntezy.",
    "altAnswers": [
      [
        "chlorofil",
        "chlorofilu"
      ],
      [
        "światło",
        "światła"
      ]
    ],
    "image": "/img/r02_komorka_roslinna.jpg"
  },
  {
    "id": "R02_SA_01",
    "section": "Samożywność",
    "type": "single_choice",
    "prompt": "Jak nazywamy organizmy, które same wytwarzają pokarm?",
    "options": [
      "Samożywne",
      "Cudzożywne",
      "Pasożytnicze",
      "Padlinożerne"
    ],
    "answer": 0,
    "explanation": "Organizmy samożywne same produkują pokarm, najczęściej dzięki fotosyntezie."
  },
  {
    "id": "R02_SA_02",
    "section": "Samożywność",
    "type": "multi_select",
    "prompt": "Zaznacz organizmy samożywne.",
    "options": [
      "rośliny",
      "niektóre bakterie",
      "niektóre protisty",
      "lis"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Do organizmów samożywnych należą rośliny, niektóre bakterie i niektóre protisty. Lis jest cudzożywny."
  },
  {
    "id": "R02_SA_03",
    "section": "Samożywność",
    "type": "fill_in",
    "prompt": "W fotosyntezie z __________ i __________ powstają substancje pokarmowe i tlen.",
    "options": null,
    "answer": [
      "dwutlenku węgla",
      "wody"
    ],
    "explanation": "W czasie fotosyntezy roślina wykorzystuje dwutlenek węgla i wodę. Powstają z nich substancje pokarmowe oraz tlen.",
    "altAnswers": [
      [
        "dwutlenku węgla",
        "dwutlenek węgla",
        "co2"
      ],
      [
        "wody",
        "woda"
      ]
    ],
    "image": "/img/r02_fotosynteza.jpg"
  },
  {
    "id": "R02_SA_04",
    "section": "Samożywność",
    "type": "single_choice",
    "prompt": "W którym organie rośliny najczęściej zachodzi fotosynteza?",
    "options": [
      "W liściach",
      "W korzeniach",
      "W kwiatach",
      "W nasionach"
    ],
    "answer": 0,
    "explanation": "Fotosynteza zachodzi głównie w liściach, bo tam jest dużo chloroplastów."
  },
  {
    "id": "R02_SA_05",
    "section": "Samożywność",
    "type": "scenario",
    "prompt": "Kuba patrzy na rysunek komórki liścia i widzi zielone owalne elementy. Co to jest?",
    "options": [
      "Chloroplasty",
      "Mięśnie",
      "Łuski",
      "Skrzela"
    ],
    "answer": 0,
    "explanation": "Zielone owalne struktury w komórkach roślinnych to chloroplasty. To w nich zachodzi fotosynteza.",
    "image": "/img/r02_chloroplasty_i_glukoza.jpg"
  },
  {
    "id": "R02_SA_06",
    "section": "Samożywność",
    "type": "match",
    "prompt": "Połącz sposób wykorzystania glukozy przez roślinę z przykładem.",
    "options": null,
    "left": [
      "źródło energii",
      "budowa ciała",
      "materiał zapasowy"
    ],
    "right": [
      "pomaga wykonywać czynności życiowe",
      "umożliwia wzrost nowych liści i pędów",
      "jest odkładana jako skrobia"
    ],
    "answer": {
      "źródło energii": "pomaga wykonywać czynności życiowe",
      "budowa ciała": "umożliwia wzrost nowych liści i pędów",
      "materiał zapasowy": "jest odkładana jako skrobia"
    },
    "explanation": "Glukoza daje energię, pomaga budować ciało rośliny i może być odkładana na zapas.",
    "image": "/img/r02_chloroplasty_i_glukoza.jpg"
  },
  {
    "id": "R02_SA_07",
    "section": "Samożywność",
    "type": "multi_select",
    "prompt": "Co wpływa na intensywność fotosyntezy?",
    "options": [
      "światło",
      "dwutlenek węgla",
      "woda",
      "temperatura"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Na intensywność fotosyntezy wpływają między innymi światło, ilość dwutlenku węgla, woda i temperatura.",
    "image": "/img/r02_czynniki_fotosyntezy.jpg"
  },
  {
    "id": "R02_CU_01",
    "section": "Cudzożywność",
    "type": "single_choice",
    "prompt": "Jak nazywamy organizmy, które nie potrafią same zrobić pokarmu i muszą go pobierać z otoczenia?",
    "options": [
      "Cudzożywne",
      "Samożywne",
      "Jądrowe",
      "Bezjądrowe"
    ],
    "answer": 0,
    "explanation": "Organizmy cudzożywne pobierają gotowy pokarm z otoczenia."
  },
  {
    "id": "R02_CU_02",
    "section": "Cudzożywność",
    "type": "match",
    "prompt": "Połącz typ zwierzęcia z rodzajem pokarmu.",
    "options": null,
    "left": [
      "roślinożerca",
      "mięsożerca",
      "wszystkożerca"
    ],
    "right": [
      "pokarm roślinny",
      "pokarm zwierzęcy",
      "pokarm roślinny i zwierzęcy"
    ],
    "answer": {
      "roślinożerca": "pokarm roślinny",
      "mięsożerca": "pokarm zwierzęcy",
      "wszystkożerca": "pokarm roślinny i zwierzęcy"
    },
    "explanation": "Roślinożerca je rośliny, mięsożerca zjada zwierzęta, a wszystkożerca je oba rodzaje pokarmu.",
    "image": "/img/r02_cudzozywnosc_podzial.jpg"
  },
  {
    "id": "R02_CU_03",
    "section": "Cudzożywność",
    "type": "single_choice",
    "prompt": "Po co zachodzi trawienie u organizmów cudzożywnych?",
    "options": [
      "Aby rozłożyć złożone związki na prostsze",
      "Aby zrobić chlorofil",
      "Aby zamienić wodę w tlen",
      "Aby wytworzyć ścianę komórkową"
    ],
    "answer": 0,
    "explanation": "Trawienie rozkłada złożone związki pokarmowe na prostsze, które organizm może wykorzystać."
  },
  {
    "id": "R02_CU_04",
    "section": "Cudzożywność",
    "type": "multi_select",
    "prompt": "Wybierz trzy główne grupy organizmów cudzożywnych z podręcznika.",
    "options": [
      "zjadające inne organizmy",
      "pasożyty",
      "odżywiające się szczątkami",
      "samożywne"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "W podręczniku organizmy cudzożywne podzielono na zjadające inne organizmy, pasożyty i odżywiające się szczątkami.",
    "image": "/img/r02_cudzozywnosc_podzial.jpg"
  },
  {
    "id": "R02_CU_05",
    "section": "Cudzożywność",
    "type": "single_choice",
    "prompt": "Jak nazywa się pasożyt, który żyje na powierzchni ciała żywiciela?",
    "options": [
      "Pasożyt zewnętrzny",
      "Pasożyt wewnętrzny",
      "Roślinożerca",
      "Drapieżnik"
    ],
    "answer": 0,
    "explanation": "Pasożyt zewnętrzny żyje na powierzchni ciała żywiciela, na przykład kleszcz.",
    "image": "/img/r02_pasozyty_i_szczatki.jpg"
  },
  {
    "id": "R02_CU_06",
    "section": "Cudzożywność",
    "type": "true_false",
    "prompt": "Pasożytowi zwykle opłaca się bardzo szybko zabić żywiciela.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz. Pasożyt zwykle nie doprowadza szybko do śmierci żywiciela, bo żywy żywiciel jest mu potrzebny."
  },
  {
    "id": "R02_CU_07",
    "section": "Cudzożywność",
    "type": "scenario",
    "prompt": "W lesie na ziemi leżą stare liście i kawałki martwych roślin. Kto pomaga rozkładać takie szczątki?",
    "options": [
      "Bakterie i grzyby",
      "Chloroplasty",
      "Skrzela",
      "Pręciki"
    ],
    "answer": 0,
    "explanation": "Bakterie i grzyby rozkładają szczątki organizmów. Dzięki temu nie gromadzą się one nadmiernie w przyrodzie.",
    "image": "/img/r02_pasozyty_i_szczatki.jpg"
  },
  {
    "id": "R02_OD_01",
    "section": "Sposoby oddychania organizmów",
    "type": "single_choice",
    "prompt": "Na czym polega oddychanie komórkowe?",
    "options": [
      "Na uwalnianiu energii z pokarmu",
      "Na robieniu chlorofilu",
      "Na wytwarzaniu korzeni",
      "Na budowaniu ściany komórkowej"
    ],
    "answer": 0,
    "explanation": "Oddychanie komórkowe to proces uwalniania energii zawartej w pożywieniu."
  },
  {
    "id": "R02_OD_02",
    "section": "Sposoby oddychania organizmów",
    "type": "fill_in",
    "prompt": "W oddychaniu tlenowym glukoza łączy się z __________. Powstają dwutlenek węgla, woda i __________.",
    "options": null,
    "answer": [
      "tlenem",
      "energia"
    ],
    "explanation": "Oddychanie tlenowe wymaga tlenu. W jego wyniku powstają dwutlenek węgla, woda i energia.",
    "altAnswers": [
      [
        "tlenem",
        "tlen",
        "tlenu"
      ],
      [
        "energia",
        "energią"
      ]
    ],
    "image": "/img/r02_oddychanie_tlenowe.jpg"
  },
  {
    "id": "R02_OD_03",
    "section": "Sposoby oddychania organizmów",
    "type": "multi_select",
    "prompt": "Które narządy lub powierzchnie mogą służyć zwierzętom do wymiany gazowej?",
    "options": [
      "powierzchnia ciała",
      "skrzela",
      "płuca",
      "cebulka kwiatowa"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Wymiana gazowa u zwierząt może zachodzić całą powierzchnią ciała, przez skrzela albo przez płuca.",
    "image": "/img/r02_wymiana_gazowa.jpg"
  },
  {
    "id": "R02_OD_04",
    "section": "Sposoby oddychania organizmów",
    "type": "true_false",
    "prompt": "Rośliny oddychają komórkowo tylko w nocy.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz. Rośliny oddychają komórkowo przez całą dobę, a fotosynteza zachodzi tylko wtedy, gdy jest światło."
  },
  {
    "id": "R02_OD_05",
    "section": "Sposoby oddychania organizmów",
    "type": "single_choice",
    "prompt": "Co roślina pobiera z powietrza nocą?",
    "options": [
      "Tlen",
      "Tylko wodę",
      "Skrobię",
      "Piasek"
    ],
    "answer": 0,
    "explanation": "W nocy fotosynteza ustaje, ale oddychanie komórkowe trwa dalej. Dlatego roślina pobiera tlen i oddaje dwutlenek węgla.",
    "image": "/img/r02_wymiana_gazowa.jpg"
  },
  {
    "id": "R02_OD_06",
    "section": "Sposoby oddychania organizmów",
    "type": "single_choice",
    "prompt": "Gdzie w komórce zachodzi oddychanie tlenowe?",
    "options": [
      "W mitochondriach",
      "W chloroplastach",
      "W ścianie komórkowej",
      "W szyszkach"
    ],
    "answer": 0,
    "explanation": "Oddychanie tlenowe zachodzi w mitochondriach.",
    "image": "/img/r02_oddychanie_tlenowe.jpg"
  },
  {
    "id": "R02_OD_07",
    "section": "Sposoby oddychania organizmów",
    "type": "single_choice",
    "prompt": "Co powstaje podczas fermentacji alkoholowej?",
    "options": [
      "Alkohol etylowy i dwutlenek węgla",
      "Tylko tlen",
      "Skrobia i celuloza",
      "Białka i tłuszcze"
    ],
    "answer": 0,
    "explanation": "Podczas fermentacji alkoholowej powstają alkohol etylowy, dwutlenek węgla i niewielka ilość energii.",
    "image": "/img/r02_fermentacja.jpg"
  },
  {
    "id": "R02_ST_01",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Posegreguj składniki według ich głównej roli.",
    "options": null,
    "items": [
      "skrobia",
      "celuloza",
      "enzym trawienny",
      "tłuszcz pod skórą"
    ],
    "categories": [
      "zapas",
      "budulcowe / regulacyjne"
    ],
    "answer": {
      "zapas": [
        "skrobia",
        "tłuszcz pod skórą"
      ],
      "budulcowe / regulacyjne": [
        "celuloza",
        "enzym trawienny"
      ]
    },
    "explanation": "Skrobia i tłuszcz mogą być zapasem. Celuloza buduje ścianę komórkową, a enzym reguluje przebieg procesów w organizmie."
  },
  {
    "id": "R02_ST_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który zestaw zawiera tylko pierwiastki występujące w organizmach w bardzo dużej ilości?",
    "options": [
      "węgiel, wodór, tlen, azot, siarka, fosfor",
      "żelazo, złoto, srebro, ołów",
      "wapń, sód, hel, neon",
      "miedź, cynk, rtęć, brom"
    ],
    "answer": 0,
    "explanation": "Do podstawowych pierwiastków budujących organizmy należą węgiel, wodór, tlen, azot, siarka i fosfor."
  },
  {
    "id": "R02_ST_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz typ komórki z cechą, która do niego pasuje.",
    "options": null,
    "left": [
      "bakteryjna",
      "roślinna",
      "grzybowa",
      "zwierzęca"
    ],
    "right": [
      "nić DNA zamiast jądra",
      "chloroplasty i ściana komórkowa",
      "ściana komórkowa z chityny",
      "brak ściany komórkowej"
    ],
    "answer": {
      "bakteryjna": "nić DNA zamiast jądra",
      "roślinna": "chloroplasty i ściana komórkowa",
      "grzybowa": "ściana komórkowa z chityny",
      "zwierzęca": "brak ściany komórkowej"
    },
    "explanation": "Bakteria nie ma jądra, roślina ma chloroplasty i ścianę komórkową, grzyb ma ścianę z chityny, a typowa komórka zwierzęca nie ma ściany komórkowej."
  },
  {
    "id": "R02_ST_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Komórki jądrowe to komórki __________, __________ i grzybowe.",
    "options": null,
    "answer": [
      "zwierzęce",
      "roślinne"
    ],
    "explanation": "Komórki jądrowe to komórki zwierzęce, roślinne i grzybowe.",
    "altAnswers": [
      [
        "zwierzęce",
        "zwierzęca",
        "zwierzęcych"
      ],
      [
        "roślinne",
        "roślinna",
        "roślinnych"
      ]
    ]
  },
  {
    "id": "R02_ST_05",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Posegreguj elementy do odpowiednich komórek.",
    "options": null,
    "items": [
      "chloroplast",
      "jądro komórkowe",
      "nić DNA",
      "ściana komórkowa"
    ],
    "categories": [
      "tylko roślinna",
      "roślinna i grzybowa",
      "roślinna, zwierzęca i grzybowa",
      "bakteryjna"
    ],
    "answer": {
      "tylko roślinna": [
        "chloroplast"
      ],
      "roślinna i grzybowa": [
        "ściana komórkowa"
      ],
      "roślinna, zwierzęca i grzybowa": [
        "jądro komórkowe"
      ],
      "bakteryjna": [
        "nić DNA"
      ]
    },
    "explanation": "Chloroplasty ma tylko komórka roślinna. Ścianę komórkową mają rośliny i grzyby, jądro mają komórki jądrowe, a nić DNA zamiast jądra ma bakteria."
  },
  {
    "id": "R02_ST_06",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż kroki przygotowania preparatu z komórek nabłonka jamy ustnej.",
    "options": null,
    "items": [
      "nakryj materiał szkiełkiem nakrywkowym",
      "potrzyj patyczkiem wewnętrzną powierzchnię policzka",
      "przenieś komórki na szkiełko podstawowe"
    ],
    "answer": [
      "potrzyj patyczkiem wewnętrzną powierzchnię policzka",
      "przenieś komórki na szkiełko podstawowe",
      "nakryj materiał szkiełkiem nakrywkowym"
    ],
    "explanation": "Najpierw pobiera się komórki z policzka, potem przenosi je na szkiełko, a na końcu nakrywa szkiełkiem nakrywkowym."
  },
  {
    "id": "R02_ST_07",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż w dobrej kolejności kroki obserwacji komórek liścia moczarki.",
    "options": null,
    "items": [
      "przykryj liść szkiełkiem nakrywkowym",
      "nanieś kroplę wody na szkiełko podstawowe",
      "umieść liść moczarki w kropli wody"
    ],
    "answer": [
      "nanieś kroplę wody na szkiełko podstawowe",
      "umieść liść moczarki w kropli wody",
      "przykryj liść szkiełkiem nakrywkowym"
    ],
    "explanation": "Najpierw daje się kroplę wody, potem liść, a na końcu przykrywa preparat."
  },
  {
    "id": "R02_ST_08",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W preparacie komórki roślinnej Zosia widzi grubszą warstwę na zewnątrz oraz zielone owalne ciałka w środku. Co widzi?",
    "options": [
      "Ścianę komórkową i chloroplasty",
      "Błonę komórkową i rzęski",
      "Pazury i łuski",
      "Skrzela i płuca"
    ],
    "answer": 0,
    "explanation": "Grubsza zewnętrzna warstwa to ściana komórkowa, a zielone owalne elementy to chloroplasty."
  },
  {
    "id": "R02_ST_09",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Do fotosyntezy potrzebne są: __________, __________, światło i chlorofil.",
    "options": null,
    "answer": [
      "dwutlenek węgla",
      "woda"
    ],
    "explanation": "W fotosyntezie roślina korzysta z dwutlenku węgla, wody, światła i chlorofilu.",
    "altAnswers": [
      [
        "dwutlenek węgla",
        "co2",
        "dwutlenku węgla"
      ],
      [
        "woda",
        "wody"
      ]
    ]
  },
  {
    "id": "R02_ST_10",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Co stanie się z intensywnością fotosyntezy, gdy roślina ma za mało światła?",
    "options": [
      "Zmniejszy się",
      "Zawsze wzrośnie",
      "Nie zmieni się",
      "Roślina zamieni się w pasożyta"
    ],
    "answer": 0,
    "explanation": "Gdy jednego z ważnych czynników jest za mało, intensywność fotosyntezy maleje."
  },
  {
    "id": "R02_ST_11",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj organizmy do rodzaju odżywiania.",
    "options": null,
    "items": [
      "zebra",
      "orzeł",
      "dzik",
      "kleszcz"
    ],
    "categories": [
      "roślinożerca",
      "mięsożerca",
      "wszystkożerca",
      "pasożyt"
    ],
    "answer": {
      "roślinożerca": [
        "zebra"
      ],
      "mięsożerca": [
        "orzeł"
      ],
      "wszystkożerca": [
        "dzik"
      ],
      "pasożyt": [
        "kleszcz"
      ]
    },
    "explanation": "Zebra je rośliny, orzeł poluje na zwierzęta, dzik je różny pokarm, a kleszcz pasożytuje."
  },
  {
    "id": "R02_ST_12",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz pasożyta z miejscem życia.",
    "options": null,
    "left": [
      "kleszcz",
      "tasiemiec"
    ],
    "right": [
      "na powierzchni ciała żywiciela",
      "wewnątrz ciała żywiciela"
    ],
    "answer": {
      "kleszcz": "na powierzchni ciała żywiciela",
      "tasiemiec": "wewnątrz ciała żywiciela"
    },
    "explanation": "Kleszcz jest pasożytem zewnętrznym, a tasiemiec wewnętrznym."
  },
  {
    "id": "R02_ST_13",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Dwóch uczniów porównuje roślinę w dzień i w nocy. Kiedy roślina głównie oddaje tlen do otoczenia?",
    "options": [
      "W dzień",
      "W nocy",
      "Nigdy",
      "Tylko zimą"
    ],
    "answer": 0,
    "explanation": "W dzień zachodzi fotosynteza i powstaje dużo tlenu, którego roślina nie zużywa w całości."
  },
  {
    "id": "R02_ST_14",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W nocy roślina pobiera __________, a oddaje __________.",
    "options": null,
    "answer": [
      "tlen",
      "dwutlenek węgla"
    ],
    "explanation": "W nocy nie ma fotosyntezy, ale oddychanie komórkowe trwa, więc roślina pobiera tlen i oddaje dwutlenek węgla.",
    "altAnswers": [
      [
        "tlen",
        "tlenu"
      ],
      [
        "dwutlenek węgla",
        "dwutlenku węgla",
        "co2"
      ]
    ]
  },
  {
    "id": "R02_ST_15",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Fermentacja zachodzi w cytozolu i daje mniej energii niż oddychanie tlenowe.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Fermentacja zachodzi w cytozolu i uwalnia mniej energii niż oddychanie tlenowe."
  },
  {
    "id": "R02_ST_16",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W słoiku z drożdżami, cukrem i ciepłą wodą pojawiły się pęcherzyki gazu. Jaki gaz powstał?",
    "options": [
      "Dwutlenek węgla",
      "Tlen",
      "Azot",
      "Wodór"
    ],
    "answer": 0,
    "explanation": "Podczas fermentacji alkoholowej drożdże uwalniają dwutlenek węgla."
  },
  {
    "id": "R02_ST_17",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który element występuje we wszystkich typach komórek omawianych w rozdziale?",
    "options": [
      "Błona komórkowa",
      "Chloroplast",
      "Jądro komórkowe",
      "Mitochondrium"
    ],
    "answer": 0,
    "explanation": "Błona komórkowa występuje w komórkach zwierzęcych, roślinnych, grzybowych i bakteryjnych."
  },
  {
    "id": "R02_ST_18",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: mitochondrium, rybosom, chloroplast, płuca.",
    "options": null,
    "answer": "płuca",
    "explanation": "Płuca są narządem wymiany gazowej, a pozostałe nazwy oznaczają składniki komórki."
  },
  {
    "id": "R02_ST_19",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jestem częścią komórki roślinnej. Zawieram chlorofil i dzięki mnie zachodzi fotosynteza. Kim jestem?",
    "options": null,
    "answer": "chloroplast",
    "explanation": "Chloroplast zawiera chlorofil i bierze udział w fotosyntezie.",
    "altAnswers": [
      "chloroplast",
      "chloroplasty",
      "chloroplastem",
      "chloroplaście"
    ]
  },
  {
    "id": "R02_ST_20",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz proces z miejscem, w którym zachodzi.",
    "options": null,
    "left": [
      "oddychanie tlenowe",
      "fermentacja alkoholowa",
      "fotosynteza"
    ],
    "right": [
      "mitochondrium",
      "cytozol",
      "chloroplast"
    ],
    "answer": {
      "oddychanie tlenowe": "mitochondrium",
      "fermentacja alkoholowa": "cytozol",
      "fotosynteza": "chloroplast"
    },
    "explanation": "Oddychanie tlenowe zachodzi w mitochondrium, fermentacja w cytozolu, a fotosynteza w chloroplaście."
  }
]
;

const KID_PROMPTS = 
{
  "R02_SK_01": "Spójrz na rysunek. Którego składnika jest w organizmie najwięcej?",
  "R02_SK_05": "Na schemacie cukrów: który z nich jest zapasem, a który buduje ścianę komórkową?",
  "R02_KZ_03": "Na rysunku widać trzy różne komórki zwierzęce. Połącz je z ich zadaniami.",
  "R02_KZ_04": "Spójrz na komórkę zwierzęcą. Która część nią kieruje?",
  "R02_KR_02": "Na porównaniu komórek zaznacz elementy tylko komórki roślinnej.",
  "R02_KR_03": "Na schemacie komórki roślinnej połącz część z jej zadaniem.",
  "R02_SA_03": "Na schemacie fotosyntezy wpisz dwa składniki, z których powstaje pokarm.",
  "R02_SA_05": "Co oznaczają zielone owalne elementy na rysunku komórki liścia?",
  "R02_CU_05": "Na obrazku pasożyt siedzi na skórze. Jak nazywa się taki pasożyt?",
  "R02_OD_02": "Na schemacie oddychania wpisz, co jest potrzebne i co powstaje."
}
;

const chapter = {
  id: "r02",
  number: 2,
  title: "Budowa i czynności życiowe organizmów",
  icon: "🧬",
  sectionOrder: [
    "Składniki chemiczne organizmów",
    "Budowa komórki zwierzęcej",
    "Komórka roślinna i inne rodzaje komórek",
    "Samożywność",
    "Cudzożywność",
    "Sposoby oddychania organizmów"
  ],
  sectionIcons: {
    "Składniki chemiczne organizmów": "⚗️",
    "Budowa komórki zwierzęcej": "🔬",
    "Komórka roślinna i inne rodzaje komórek": "🌿",
    "Samożywność": "☀️",
    "Cudzożywność": "🍽️",
    "Sposoby oddychania organizmów": "💨"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS,
};

export default chapter;
