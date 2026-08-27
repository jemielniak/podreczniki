// Skróty sekcji (do identyfikatorów ćwiczeń):
//   URO  = Układ rozrodczy człowieka
//   CYK  = Cykl miesiączkowy
//   CIA  = Od zapłodnienia do narodzin
//   ROZ  = Rozwój od narodzin do starości
//   HIG  = Higiena i choroby układu rozrodczego
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R09_URO_01",
    "section": "Układ rozrodczy człowieka",
    "type": "single_choice",
    "prompt": "Który narząd wytwarza plemniki i męskie hormony płciowe?",
    "options": [
      "jądro",
      "najądrze",
      "nasieniowód",
      "gruczoł krokowy",
      "prącie",
      "moszna"
    ],
    "answer": 0,
    "explanation": "Jądra wytwarzają plemniki oraz męskie hormony płciowe, w tym testosteron.",
    "image": "r09_meski_uklad_rozrodczy.jpg"
  },
  {
    "id": "R09_URO_02",
    "section": "Układ rozrodczy człowieka",
    "type": "match",
    "prompt": "Połącz narząd męskiego układu rozrodczego z jego funkcją.",
    "options": null,
    "answer": {
      "jądro": "wytwarzanie plemników i hormonów płciowych",
      "najądrze": "dojrzewanie i magazynowanie plemników",
      "nasieniowód": "transport plemników do cewki moczowej",
      "gruczoł krokowy": "wytwarzanie wydzieliny pobudzającej plemniki do ruchu"
    },
    "left": [
      "jądro",
      "najądrze",
      "nasieniowód",
      "gruczoł krokowy"
    ],
    "right": [
      "transport plemników do cewki moczowej",
      "wytwarzanie wydzieliny pobudzającej plemniki do ruchu",
      "wytwarzanie plemników i hormonów płciowych",
      "dojrzewanie i magazynowanie plemników"
    ],
    "explanation": "Jądra produkują plemniki i hormony, najądrza są miejscem dojrzewania plemników, nasieniowody je transportują, a gruczoł krokowy wytwarza składnik nasienia.",
    "image": "r09_meski_uklad_rozrodczy.jpg"
  },
  {
    "id": "R09_URO_03",
    "section": "Układ rozrodczy człowieka",
    "type": "single_choice",
    "prompt": "W której części plemnika znajdują się liczne mitochondria dostarczające energii do ruchu?",
    "options": [
      "główce",
      "wstawce",
      "witce",
      "jądrze komórkowym",
      "osłonce przejrzystej",
      "wieńcu promienistym"
    ],
    "answer": 1,
    "explanation": "Wstawka plemnika zawiera liczne mitochondria, które wytwarzają energię potrzebną do ruchu.",
    "image": "r09_plemnik.jpg"
  },
  {
    "id": "R09_URO_04",
    "section": "Układ rozrodczy człowieka",
    "type": "true_false",
    "prompt": "Temperatura w mosznie jest niższa od temperatury reszty ciała, co sprzyja prawidłowemu rozwojowi plemników.",
    "options": null,
    "answer": true,
    "explanation": "W mosznie temperatura jest niższa o około 2,5-4°C od temperatury reszty ciała, co zapewnia prawidłowy rozwój plemników."
  },
  {
    "id": "R09_URO_05",
    "section": "Układ rozrodczy człowieka",
    "type": "sort",
    "prompt": "Przyporządkuj narządy męskiego układu rozrodczego do narządów zewnętrznych i wewnętrznych.",
    "options": null,
    "answer": {
      "zewnętrzne": [
        "prącie",
        "moszna"
      ],
      "wewnętrzne": [
        "jądro",
        "najądrze",
        "nasieniowód",
        "gruczoł krokowy"
      ]
    },
    "items": [
      "nasieniowód",
      "moszna",
      "jądro",
      "prącie",
      "gruczoł krokowy",
      "najądrze"
    ],
    "categories": [
      "zewnętrzne",
      "wewnętrzne"
    ],
    "explanation": "Do zewnętrznych narządów płciowych mężczyzny należą prącie i moszna. Jądro, najądrze, nasieniowód i gruczoł krokowy są narządami wewnętrznymi."
  },
  {
    "id": "R09_URO_06",
    "section": "Układ rozrodczy człowieka",
    "type": "multi_select",
    "prompt": "Zaznacz wszystkie wewnętrzne narządy płciowe kobiety.",
    "options": [
      "jajniki",
      "jajowody",
      "macica",
      "pochwa",
      "łechtaczka",
      "wzgórek łonowy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Wewnętrzne narządy płciowe kobiety to jajniki, jajowody, macica i pochwa."
  },
  {
    "id": "R09_URO_07",
    "section": "Układ rozrodczy człowieka",
    "type": "single_choice",
    "prompt": "W którym narządzie rozwijają się zarodek i płód?",
    "options": [
      "jajniku",
      "jajowodzie",
      "macicy",
      "pochwie",
      "łechtaczce",
      "wzgórku łonowym"
    ],
    "answer": 2,
    "explanation": "Macica jest narządem, w którym odbywa się rozwój zarodka i płodu.",
    "image": "r09_zenski_uklad_rozrodczy.jpg"
  },
  {
    "id": "R09_URO_08",
    "section": "Układ rozrodczy człowieka",
    "type": "match",
    "prompt": "Połącz żeński narząd płciowy z jego główną funkcją.",
    "options": null,
    "answer": {
      "jajnik": "wytwarzanie komórek jajowych i żeńskich hormonów płciowych",
      "jajowód": "transport komórki jajowej do macicy",
      "macica": "miejsce rozwoju zarodka i płodu",
      "pochwa": "umożliwienie wprowadzenia nasienia i wydania dziecka na świat"
    },
    "left": [
      "jajnik",
      "jajowód",
      "macica",
      "pochwa"
    ],
    "right": [
      "transport komórki jajowej do macicy",
      "miejsce rozwoju zarodka i płodu",
      "umożliwienie wprowadzenia nasienia i wydania dziecka na świat",
      "wytwarzanie komórek jajowych i żeńskich hormonów płciowych"
    ],
    "explanation": "Jajniki wytwarzają komórki jajowe i hormony, jajowody transportują komórkę jajową, macica zapewnia rozwój zarodka i płodu, a pochwa łączy szyjkę macicy ze środowiskiem zewnętrznym.",
    "image": "r09_zenski_uklad_rozrodczy.jpg"
  },
  {
    "id": "R09_URO_09",
    "section": "Układ rozrodczy człowieka",
    "type": "riddle",
    "prompt": "Jak nazywa się proces uwolnienia dojrzałej komórki jajowej z pęcherzyka jajnikowego?",
    "options": null,
    "answer": "owulacja",
    "altAnswers": [
      "owulacja",
      "jajeczkowanie"
    ],
    "explanation": "Uwolnienie komórki jajowej z dojrzałego pęcherzyka jajnikowego to owulacja, nazywana też jajeczkowaniem.",
    "image": "r09_komorka_jajowa.jpg"
  },
  {
    "id": "R09_URO_10",
    "section": "Układ rozrodczy człowieka",
    "type": "fill_in",
    "prompt": "Plemnik składa się z __________, __________ i __________.",
    "options": null,
    "answer": [
      "główki",
      "wstawki",
      "witki"
    ],
    "altAnswers": [
      [
        "główki",
        "główka"
      ],
      [
        "wstawki",
        "wstawka"
      ],
      [
        "witki",
        "witka"
      ]
    ],
    "explanation": "Główka zawiera jądro komórkowe, wstawka dostarcza energii, a witka umożliwia poruszanie się plemnika.",
    "image": "r09_plemnik.jpg"
  },
  {
    "id": "R09_URO_11",
    "section": "Układ rozrodczy człowieka",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do pozostałych: jajnik, jajowód, macica, prostata.",
    "options": null,
    "answer": "prostata",
    "explanation": "Jajnik, jajowód i macica należą do żeńskiego układu rozrodczego, a prostata do męskiego."
  },
  {
    "id": "R09_URO_12",
    "section": "Układ rozrodczy człowieka",
    "type": "scenario",
    "prompt": "Komórka jajowa została uwolniona z jajnika. Trafia do długiego przewodu, którego mięśnie gładkie i nabłonek rzęskowy przesuwają ją w kierunku macicy. Jaki to narząd?",
    "options": [
      "jajnik",
      "jajowód",
      "macica",
      "pochwa",
      "szyjka macicy",
      "wzgórek łonowy"
    ],
    "answer": 1,
    "explanation": "Jajowód ma mięśnie gładkie i nabłonek rzęskowy; ich praca przesuwa komórkę jajową ku macicy.",
    "image": "r09_zenski_uklad_rozrodczy.jpg"
  },
  {
    "id": "R09_CYK_01",
    "section": "Cykl miesiączkowy",
    "type": "single_choice",
    "prompt": "Która para hormonów jajnikowych uczestniczy w regulacji cyklu miesiączkowego?",
    "options": [
      "testosteron i progesteron",
      "estrogeny i testosteron",
      "estrogeny i progesteron",
      "progesteron i testosteron",
      "estrogeny i hormony przysadki",
      "testosteron i hormony przysadki"
    ],
    "answer": 2,
    "explanation": "W żeńskim układzie rozrodczym wytwarzane są estrogeny i progesteron, a ich ilość cyklicznie się zmienia."
  },
  {
    "id": "R09_CYK_02",
    "section": "Cykl miesiączkowy",
    "type": "true_false",
    "prompt": "Pierwszy dzień krwawienia miesiączkowego jest pierwszym dniem cyklu miesiączkowego.",
    "options": null,
    "answer": true,
    "explanation": "Cykl miesiączkowy liczy się od pierwszego dnia miesiączki."
  },
  {
    "id": "R09_CYK_03",
    "section": "Cykl miesiączkowy",
    "type": "sequence",
    "prompt": "Ułóż etapy typowego cyklu bez zapłodnienia w prawidłowej kolejności.",
    "options": null,
    "answer": [
      "miesiączka",
      "dojrzewanie pęcherzyka i odnowa błony śluzowej macicy",
      "owulacja",
      "powstanie ciałka żółtego i wydzielanie progesteronu",
      "zanik ciałka żółtego i spadek poziomu hormonów"
    ],
    "items": [
      "owulacja",
      "zanik ciałka żółtego i spadek poziomu hormonów",
      "miesiączka",
      "powstanie ciałka żółtego i wydzielanie progesteronu",
      "dojrzewanie pęcherzyka i odnowa błony śluzowej macicy"
    ],
    "explanation": "Po miesiączce dojrzewa pęcherzyk i odnawia się błona śluzowa, następnie dochodzi do owulacji. Potem ciałko żółte wydziela progesteron, a bez zapłodnienia zanika i rozpoczyna się kolejny cykl.",
    "image": "r09_cykl_miesiaczkowy.jpg"
  },
  {
    "id": "R09_CYK_04",
    "section": "Cykl miesiączkowy",
    "type": "match",
    "prompt": "Połącz zjawisko w cyklu miesiączkowym z właściwym opisem.",
    "options": null,
    "answer": {
      "miesiączka": "złuszczanie błony śluzowej macicy",
      "dojrzewanie pęcherzyka": "wzrost wydzielania estrogenów",
      "owulacja": "uwolnienie komórki jajowej",
      "ciałko żółte": "wydzielanie progesteronu"
    },
    "left": [
      "miesiączka",
      "dojrzewanie pęcherzyka",
      "owulacja",
      "ciałko żółte"
    ],
    "right": [
      "wydzielanie progesteronu",
      "uwolnienie komórki jajowej",
      "złuszczanie błony śluzowej macicy",
      "wzrost wydzielania estrogenów"
    ],
    "explanation": "Miesiączka wiąże się ze złuszczaniem błony śluzowej; dojrzewający pęcherzyk wydziela estrogeny, owulacja uwalnia komórkę jajową, a ciałko żółte produkuje progesteron.",
    "image": "r09_cykl_miesiaczkowy.jpg"
  },
  {
    "id": "R09_CYK_05",
    "section": "Cykl miesiączkowy",
    "type": "single_choice",
    "prompt": "Jaki hormon wytwarza ciałko żółte?",
    "options": [
      "estrogeny",
      "testosteron",
      "progesteron"
    ],
    "answer": 2,
    "explanation": "Opróżniony pęcherzyk jajnikowy przekształca się w ciałko żółte, które wytwarza progesteron."
  },
  {
    "id": "R09_CYK_06",
    "section": "Cykl miesiączkowy",
    "type": "multi_select",
    "prompt": "Co dzieje się, jeśli nie dojdzie do zapłodnienia?",
    "options": [
      "ciałko żółte stopniowo zanika",
      "komórka jajowa obumiera",
      "poziom progesteronu stale rośnie",
      "poziom hormonów płciowych spada",
      "błona śluzowa macicy ulega złuszczeniu",
      "zatrzymuje się cały cykl miesiączkowy"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Bez zapłodnienia ciałko żółte zanika, komórka jajowa obumiera, poziom hormonów spada, a błona śluzowa macicy ulega złuszczeniu."
  },
  {
    "id": "R09_CYK_07",
    "section": "Cykl miesiączkowy",
    "type": "fill_in",
    "prompt": "Owulacja następuje mniej więcej w __________ cyklu miesiączkowego.",
    "options": null,
    "answer": [
      "połowie"
    ],
    "altAnswers": [
      [
        "połowie",
        "środku"
      ]
    ],
    "explanation": "Pęcherzyk jajnikowy pęka i uwalnia komórkę jajową mniej więcej w połowie cyklu."
  },
  {
    "id": "R09_CYK_08",
    "section": "Cykl miesiączkowy",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do pozostałych: estrogeny, progesteron, testosteron.",
    "options": null,
    "answer": "testosteron",
    "explanation": "Estrogeny i progesteron są żeńskimi hormonami płciowymi uczestniczącymi w regulacji cyklu miesiączkowego; testosteron jest męskim hormonem płciowym."
  },
  {
    "id": "R09_CYK_09",
    "section": "Cykl miesiączkowy",
    "type": "scenario",
    "prompt": "Poziom hormonów płciowych jest niski, a błona śluzowa macicy złuszcza się i jest usuwana wraz z niewielką ilością krwi. Jaka faza cyklu właśnie się rozpoczęła?",
    "options": [
      "miesiączka",
      "owulacja",
      "dojrzewanie ciałka żółtego",
      "zagnieżdżenie zarodka",
      "rozwój płodowy",
      "przekwitanie"
    ],
    "answer": 0,
    "explanation": "Taki przebieg oznacza miesiączkę, która jest początkiem nowego cyklu.",
    "image": "r09_cykl_miesiaczkowy.jpg"
  },
  {
    "id": "R09_CYK_10",
    "section": "Cykl miesiączkowy",
    "type": "riddle",
    "prompt": "Powstaję z opróżnionego pęcherzyka jajnikowego i wydzielam progesteron. Czym jestem?",
    "options": null,
    "answer": "ciałko żółte",
    "altAnswers": [
      "ciałko żółte",
      "cialko zolte"
    ],
    "explanation": "Po owulacji opróżniony pęcherzyk jajnikowy przekształca się w ciałko żółte."
  },
  {
    "id": "R09_CIA_01",
    "section": "Od zapłodnienia do narodzin",
    "type": "single_choice",
    "prompt": "Gdzie najczęściej dochodzi do zapłodnienia?",
    "options": [
      "w jajniku",
      "w macicy",
      "w początkowej części jajowodu",
      "w pochwie",
      "w szyjce macicy",
      "w łożysku"
    ],
    "answer": 2,
    "explanation": "Zapłodnienie, czyli połączenie plemnika z komórką jajową, zachodzi w początkowej części jajowodu.",
    "image": "r09_zaplodnienie.jpg"
  },
  {
    "id": "R09_CIA_02",
    "section": "Od zapłodnienia do narodzin",
    "type": "fill_in",
    "prompt": "Połączenie plemnika z komórką jajową prowadzi do powstania __________.",
    "options": null,
    "answer": [
      "zygoty"
    ],
    "altAnswers": [
      [
        "zygoty",
        "zygota"
      ]
    ],
    "explanation": "W wyniku zapłodnienia powstaje zygota, czyli pierwsza komórka nowego organizmu."
  },
  {
    "id": "R09_CIA_03",
    "section": "Od zapłodnienia do narodzin",
    "type": "sequence",
    "prompt": "Ułóż w kolejności wczesne etapy rozwoju po zapłodnieniu.",
    "options": null,
    "answer": [
      "powstanie zygoty",
      "pierwsze podziały komórkowe",
      "dotarcie zarodka do jamy macicy",
      "rozpoczęcie zagnieżdżania w błonie śluzowej macicy",
      "powstanie błon płodowych"
    ],
    "items": [
      "powstanie błon płodowych",
      "powstanie zygoty",
      "dotarcie zarodka do jamy macicy",
      "pierwsze podziały komórkowe",
      "rozpoczęcie zagnieżdżania w błonie śluzowej macicy"
    ],
    "explanation": "Najpierw powstaje zygota i dzieli się, następnie zarodek dociera do macicy, zagnieżdża się, a później wytwarza błony płodowe.",
    "image": "r09_rozwoj_zarodka_plodu.jpg"
  },
  {
    "id": "R09_CIA_04",
    "section": "Od zapłodnienia do narodzin",
    "type": "match",
    "prompt": "Połącz błonę płodową z jej funkcją.",
    "options": null,
    "answer": {
      "owodnia": "tworzy jamę z wodami płodowymi chroniącymi zarodek",
      "omocznia": "uczestniczy w tworzeniu naczyń krwionośnych pępowiny",
      "kosmówka": "pośredniczy w wymianie substancji między matką a dzieckiem"
    },
    "left": [
      "owodnia",
      "omocznia",
      "kosmówka"
    ],
    "right": [
      "pośredniczy w wymianie substancji między matką a dzieckiem",
      "tworzy jamę z wodami płodowymi chroniącymi zarodek",
      "uczestniczy w tworzeniu naczyń krwionośnych pępowiny"
    ],
    "explanation": "Owodnia tworzy środowisko wodne, omocznia uczestniczy w tworzeniu naczyń pępowiny, a kosmówka pośredniczy w wymianie substancji."
  },
  {
    "id": "R09_CIA_05",
    "section": "Od zapłodnienia do narodzin",
    "type": "true_false",
    "prompt": "Łożysko jest wspólnym narządem matki i dziecka, potrzebnym tylko w czasie ciąży.",
    "options": null,
    "answer": true,
    "explanation": "Łożysko powstaje w ciąży, umożliwia wymianę substancji między matką a dzieckiem i jest usuwane podczas porodu.",
    "image": "r09_lozysko_i_pepowina.jpg"
  },
  {
    "id": "R09_CIA_06",
    "section": "Od zapłodnienia do narodzin",
    "type": "multi_select",
    "prompt": "Które procesy zachodzą dzięki łożysku?",
    "options": [
      "pobieranie tlenu i substancji odżywczych od matki",
      "przekazywanie matce zbędnych produktów przemiany materii",
      "otrzymywanie przeciwciał od matki",
      "bezpośrednie mieszanie się krwi matki i płodu",
      "wytwarzanie komórek jajowych",
      "trawienie pokarmu przez płód"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Przez łożysko rozwijający się organizm otrzymuje tlen i substancje odżywcze, oddaje produkty przemiany materii oraz otrzymuje od matki przeciwciała.",
    "image": "r09_lozysko_i_pepowina.jpg"
  },
  {
    "id": "R09_CIA_07",
    "section": "Od zapłodnienia do narodzin",
    "type": "single_choice",
    "prompt": "Po jakim czasie od zapłodnienia zarodek zaczyna być nazywany płodem?",
    "options": [
      "po 4 dniach",
      "po 8 tygodniach",
      "po 3 dniach",
      "po 13 dniach",
      "po 6 miesiącach",
      "dopiero po porodzie"
    ],
    "answer": 1,
    "explanation": "Po upływie 8 tygodni zarodek ma już ludzkie kształty i od tego momentu jest nazywany płodem.",
    "image": "r09_rozwoj_zarodka_plodu.jpg"
  },
  {
    "id": "R09_CIA_08",
    "section": "Od zapłodnienia do narodzin",
    "type": "scenario",
    "prompt": "Kobieta w ciąży zastanawia się, dlaczego powinna zrezygnować z palenia papierosów i picia alkoholu. Które wyjaśnienie jest właściwe?",
    "options": [
      "używki zatrzymują owulację płodu",
      "używki zmniejszają liczbę błon płodowych",
      "łożysko całkowicie zatrzymuje wszystkie substancje",
      "szkodliwe substancje mogą przez łożysko dotrzeć do płodu",
      "płód samodzielnie neutralizuje wszystkie używki",
      "używki wpływają wyłącznie na skórę matki"
    ],
    "answer": 3,
    "explanation": "Szkodliwe substancje z używek mogą przechodzić przez łożysko do rozwijającego się płodu i go uszkadzać."
  },
  {
    "id": "R09_CIA_09",
    "section": "Od zapłodnienia do narodzin",
    "type": "single_choice",
    "prompt": "Jak powstają bliźnięta jednojajowe?",
    "options": [
      "z dwóch komórek jajowych bez zapłodnienia",
      "z dwóch plemników łączących się ze sobą",
      "z jednej komórki jajowej zapłodnionej przez dwa plemniki",
      "z dwóch osobnych komórek jajowych zapłodnionych osobno",
      "z podziału jednego zarodka na dwa",
      "z podziału łożyska bez podziału zarodka"
    ],
    "answer": 4,
    "explanation": "Bliźnięta jednojajowe powstają, gdy jeden zarodek powstały z jednej zapłodnionej komórki jajowej dzieli się na dwa zarodki.",
    "image": "r09_bliznieta.jpg"
  },
  {
    "id": "R09_CIA_10",
    "section": "Od zapłodnienia do narodzin",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do pozostałych: owodnia, omocznia, kosmówka, najądrze.",
    "options": null,
    "answer": "najądrze",
    "explanation": "Owodnia, omocznia i kosmówka to błony płodowe, a najądrze jest narządem męskiego układu rozrodczego."
  },
  {
    "id": "R09_CIA_11",
    "section": "Od zapłodnienia do narodzin",
    "type": "sequence",
    "prompt": "Ułóż etapy porodu w prawidłowej kolejności.",
    "options": null,
    "answer": [
      "narastające skurcze i rozwieranie szyjki macicy",
      "pęknięcie błon płodowych i odejście wód",
      "urodzenie dziecka",
      "usunięcie błon płodowych i łożyska"
    ],
    "items": [
      "urodzenie dziecka",
      "narastające skurcze i rozwieranie szyjki macicy",
      "usunięcie błon płodowych i łożyska",
      "pęknięcie błon płodowych i odejście wód"
    ],
    "explanation": "Poród zaczyna się skurczami i rozwieraniem szyjki, następnie pękają błony płodowe, rodzi się dziecko, a na końcu usuwane są błony i łożysko."
  },
  {
    "id": "R09_CIA_12",
    "section": "Od zapłodnienia do narodzin",
    "type": "riddle",
    "prompt": "Jak nazywa się okres regeneracji organizmu kobiety po porodzie, trwający około 6-8 tygodni?",
    "options": null,
    "answer": "połóg",
    "altAnswers": [
      "połóg",
      "polog"
    ],
    "explanation": "Po porodzie następuje połóg, podczas którego organizm kobiety się regeneruje."
  },
  {
    "id": "R09_ROZ_01",
    "section": "Rozwój od narodzin do starości",
    "type": "sequence",
    "prompt": "Ułóż pierwsze sześć etapów życia człowieka po urodzeniu w kolejności chronologicznej.",
    "options": null,
    "answer": [
      "okres noworodkowy",
      "okres niemowlęcy",
      "okres poniemowlęcy",
      "dzieciństwo",
      "dojrzewanie",
      "dorosłość"
    ],
    "items": [
      "dzieciństwo",
      "okres noworodkowy",
      "dorosłość",
      "okres poniemowlęcy",
      "dojrzewanie",
      "okres niemowlęcy"
    ],
    "explanation": "Po okresie noworodkowym następują kolejno okres niemowlęcy, poniemowlęcy, dzieciństwo, dojrzewanie i dorosłość.",
    "image": "r09_etapy_zycia.jpg"
  },
  {
    "id": "R09_ROZ_02",
    "section": "Rozwój od narodzin do starości",
    "type": "single_choice",
    "prompt": "Jak długo trwa okres noworodkowy?",
    "options": [
      "około 4 dni",
      "około 4 tygodni",
      "około 6 miesięcy",
      "1 rok",
      "2 lata",
      "około 10 lat"
    ],
    "answer": 1,
    "explanation": "Okres noworodkowy trwa około 4 tygodni."
  },
  {
    "id": "R09_ROZ_03",
    "section": "Rozwój od narodzin do starości",
    "type": "single_choice",
    "prompt": "Który okres obejmuje pierwszy rok życia człowieka?",
    "options": [
      "dzieciństwo",
      "przekwitanie",
      "okres noworodkowy",
      "dojrzewanie",
      "okres poniemowlęcy",
      "okres niemowlęcy"
    ],
    "answer": 5,
    "explanation": "Okres niemowlęcy obejmuje pierwszy rok życia i jest czasem najszybszego wzrostu ciała."
  },
  {
    "id": "R09_ROZ_04",
    "section": "Rozwój od narodzin do starości",
    "type": "match",
    "prompt": "Połącz etap życia z charakterystyczną zmianą.",
    "options": null,
    "answer": {
      "okres noworodkowy": "przystosowanie do samodzielnego oddychania, trawienia i wydalania",
      "okres niemowlęcy": "najszybszy wzrost ciała i nauka skoordynowanych ruchów",
      "okres poniemowlęcy": "nauka wypowiadania słów i wyrzynanie pozostałych zębów mlecznych",
      "dzieciństwo": "intensywny rozwój umysłu i poznawanie zasad życia wśród ludzi"
    },
    "left": [
      "okres noworodkowy",
      "okres niemowlęcy",
      "okres poniemowlęcy",
      "dzieciństwo"
    ],
    "right": [
      "intensywny rozwój umysłu i poznawanie zasad życia wśród ludzi",
      "najszybszy wzrost ciała i nauka skoordynowanych ruchów",
      "przystosowanie do samodzielnego oddychania, trawienia i wydalania",
      "nauka wypowiadania słów i wyrzynanie pozostałych zębów mlecznych"
    ],
    "explanation": "Każdy z pierwszych etapów życia ma charakterystyczne zmiany fizyczne i psychiczne."
  },
  {
    "id": "R09_ROZ_05",
    "section": "Rozwój od narodzin do starości",
    "type": "multi_select",
    "prompt": "Które cechy świadczą o dojrzałości psychicznej?",
    "options": [
      "samodzielne podejmowanie decyzji",
      "w pełni rozwinięte narządy rozrodcze",
      "odpowiedzialność za siebie i innych",
      "radzenie sobie w trudnych sytuacjach",
      "wyłącznie wysoki wzrost",
      "pojawienie się zębów mlecznych"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "Dojrzałość psychiczna obejmuje samodzielne podejmowanie decyzji, odpowiedzialność za siebie i innych oraz radzenie sobie w trudnych sytuacjach."
  },
  {
    "id": "R09_ROZ_06",
    "section": "Rozwój od narodzin do starości",
    "type": "true_false",
    "prompt": "Dojrzałość społeczna polega między innymi na postępowaniu zgodnie z zasadami życia społecznego.",
    "options": null,
    "answer": true,
    "explanation": "Osoba dojrzała społecznie potrafi postępować zgodnie z zasadami życia społecznego i okazywać innym szacunek."
  },
  {
    "id": "R09_ROZ_07",
    "section": "Rozwój od narodzin do starości",
    "type": "fill_in",
    "prompt": "Człowiek wchodzi w wiek dorosły około __________ roku życia.",
    "options": null,
    "answer": [
      "20."
    ],
    "altAnswers": [
      [
        "20.",
        "20",
        "dwudziestego"
      ]
    ],
    "explanation": "Wiek dorosły rozpoczyna się około 20. roku życia."
  },
  {
    "id": "R09_ROZ_08",
    "section": "Rozwój od narodzin do starości",
    "type": "scenario",
    "prompt": "U kobiety około 50. roku życia cykle miesiączkowe stają się nieregularne, pojawiają się uderzenia gorąca i problemy ze snem. Jaki to okres życia?",
    "options": [
      "dojrzewanie",
      "dzieciństwo",
      "przekwitanie",
      "okres niemowlęcy",
      "okres noworodkowy",
      "wczesne dzieciństwo"
    ],
    "answer": 2,
    "explanation": "U kobiet przekwitanie zaczyna się najczęściej między 45. a 55. rokiem życia; cykle stają się nieregularne i w końcu ustają.",
    "image": "r09_etapy_zycia.jpg"
  },
  {
    "id": "R09_ROZ_09",
    "section": "Rozwój od narodzin do starości",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do zmian typowych dla starości: kruche kości, słabsze mięśnie, mniejsza pojemność płuc, najszybszy wzrost ciała.",
    "options": null,
    "answer": "najszybszy wzrost ciała",
    "explanation": "Najszybszy wzrost ciała jest charakterystyczny dla okresu niemowlęcego; w starości słabną mięśnie, kości są bardziej kruche i zmniejsza się pojemność płuc."
  },
  {
    "id": "R09_ROZ_10",
    "section": "Rozwój od narodzin do starości",
    "type": "riddle",
    "prompt": "Jaki etap życia następuje po dorosłości i wiąże się z obniżeniem poziomu hormonów płciowych oraz zdolności rozrodczych?",
    "options": null,
    "answer": "przekwitanie",
    "altAnswers": [
      "przekwitanie"
    ],
    "explanation": "Okres dorosłości kończy się przekwitaniem, kiedy poziom hormonów płciowych obniża się."
  },
  {
    "id": "R09_HIG_01",
    "section": "Higiena i choroby układu rozrodczego",
    "type": "true_false",
    "prompt": "Nieleczone choroby układu rozrodczego mogą prowadzić do trudności z zajściem w ciążę, a nawet do bezpłodności.",
    "options": null,
    "answer": true,
    "explanation": "Choroby układu rozrodczego mogą uszkadzać narządy i prowadzić do trudności z zajściem w ciążę lub bezpłodności."
  },
  {
    "id": "R09_HIG_02",
    "section": "Higiena i choroby układu rozrodczego",
    "type": "multi_select",
    "prompt": "Które działania pomagają zapobiegać chorobom układu rozrodczego?",
    "options": [
      "utrzymywanie kontaktów ze stałym partnerem",
      "staranna higiena narządów płciowych",
      "noszenie czystej bielizny",
      "regularne wizyty kobiet u ginekologa",
      "ignorowanie niepokojących objawów",
      "korzystanie ze wspólnych ręczników podczas infekcji"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Profilaktyka obejmuje unikanie przypadkowych kontaktów seksualnych, higienę osobistą, noszenie czystej bielizny i regularne wizyty kobiet u ginekologa."
  },
  {
    "id": "R09_HIG_03",
    "section": "Higiena i choroby układu rozrodczego",
    "type": "single_choice",
    "prompt": "Który czynnik chorobotwórczy jest najczęstszą przyczyną raka szyjki macicy?",
    "options": [
      "wirus brodawczaka ludzkiego HPV",
      "dwoinka rzeżączki",
      "krętek blady",
      "rzęsistek pochwowy",
      "bielnik biały"
    ],
    "answer": 0,
    "explanation": "Rak szyjki macicy najczęściej wiąże się z zakażeniem wirusem brodawczaka ludzkiego, czyli HPV."
  },
  {
    "id": "R09_HIG_04",
    "section": "Higiena i choroby układu rozrodczego",
    "type": "match",
    "prompt": "Połącz chorobę z czynnikiem, który ją wywołuje.",
    "options": null,
    "answer": {
      "rzeżączka": "bakteria dwoinka rzeżączki",
      "kiła": "bakteria krętek blady",
      "rzęsistkowica": "protist rzęsistek pochwowy"
    },
    "left": [
      "rzeżączka",
      "kiła",
      "rzęsistkowica"
    ],
    "right": [
      "protist rzęsistek pochwowy",
      "bakteria krętek blady",
      "bakteria dwoinka rzeżączki"
    ],
    "explanation": "Rzeżączkę wywołuje dwoinka rzeżączki, kiłę krętek blady, a rzęsistkowicę protist - rzęsistek pochwowy."
  },
  {
    "id": "R09_HIG_05",
    "section": "Higiena i choroby układu rozrodczego",
    "type": "single_choice",
    "prompt": "Na czym polega badanie cytologiczne?",
    "options": [
      "na pomiarze temperatury ciała",
      "na pobraniu komórek nabłonka z szyjki macicy i obserwacji pod mikroskopem",
      "na badaniu krwi płodu",
      "na prześwietleniu jajników",
      "na pomiarze ciśnienia w macicy",
      "na badaniu pojemności płuc"
    ],
    "answer": 1,
    "explanation": "Cytologia polega na pobraniu komórek nabłonka z szyjki macicy i ich obserwacji pod mikroskopem.",
    "image": "r09_badanie_cytologiczne.jpg"
  },
  {
    "id": "R09_HIG_06",
    "section": "Higiena i choroby układu rozrodczego",
    "type": "scenario",
    "prompt": "U pacjenta pojawił się bezbolesny guzek na narządach płciowych, który zniknął bez leczenia. Kilka tygodni później wystąpiła wysypka, gorączka i osłabienie. Która choroba pasuje do tego opisu?",
    "options": [
      "rzeżączka",
      "rzęsistkowica",
      "kiła",
      "rak szyjki macicy",
      "grzybica",
      "rak prostaty"
    ],
    "answer": 2,
    "explanation": "Taki przebieg jest charakterystyczny dla kiły wywoływanej przez krętka bladego."
  },
  {
    "id": "R09_HIG_07",
    "section": "Higiena i choroby układu rozrodczego",
    "type": "true_false",
    "prompt": "Rzeżączkę leczy się antybiotykami.",
    "options": null,
    "answer": true,
    "explanation": "Rzeżączka jest chorobą bakteryjną, a w jej leczeniu stosuje się antybiotyki.",
    "image": "r09_dwoinka_rzezaczki.jpg"
  },
  {
    "id": "R09_HIG_08",
    "section": "Higiena i choroby układu rozrodczego",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do pozostałych: rzeżączka, kiła, rzęsistkowica, rak piersi.",
    "options": null,
    "answer": "rak piersi",
    "explanation": "Rzeżączka, kiła i rzęsistkowica są chorobami zakaźnymi opisywanymi jako przenoszone drogą płciową; rak piersi jest chorobą nowotworową."
  },
  {
    "id": "R09_HIG_09",
    "section": "Higiena i choroby układu rozrodczego",
    "type": "multi_select",
    "prompt": "Które działania należą do profilaktyki raka szyjki macicy?",
    "options": [
      "regularne badania cytologiczne",
      "szczepienie przeciw HPV",
      "unikanie palenia papierosów",
      "unikanie przypadkowych kontaktów seksualnych",
      "rezygnacja z higieny osobistej",
      "stosowanie antybiotyków bez wskazań"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Profilaktyka raka szyjki macicy obejmuje unikanie przypadkowych kontaktów seksualnych, regularne badania ginekologiczne i cytologiczne, unikanie palenia oraz szczepienie przeciw HPV.",
    "image": "r09_badanie_cytologiczne.jpg"
  },
  {
    "id": "R09_HIG_10",
    "section": "Higiena i choroby układu rozrodczego",
    "type": "single_choice",
    "prompt": "Która choroba może zostać przeniesiona także przez korzystanie ze wspólnego ręcznika?",
    "options": [
      "rzęsistkowica",
      "rak piersi",
      "rak prostaty",
      "rak szyjki macicy",
      "kiła",
      "rzeżączka"
    ],
    "answer": 0,
    "explanation": "Rzęsistkowicą można zarazić się podczas kontaktu seksualnego lub przez korzystanie ze wspólnego ręcznika."
  },
  {
    "id": "R09_HIG_11",
    "section": "Higiena i choroby układu rozrodczego",
    "type": "riddle",
    "prompt": "Jaki nowotwór u mężczyzn występuje częściej wraz z wiekiem?",
    "options": null,
    "answer": "rak prostaty",
    "altAnswers": [
      "rak prostaty",
      "rak gruczołu krokowego"
    ],
    "explanation": "Liczba zachorowań na raka prostaty zwiększa się wraz z wiekiem."
  },
  {
    "id": "R09_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "O ile niższa od temperatury reszty ciała jest temperatura w mosznie?",
    "options": [
      "o 0,5-1°C",
      "o 1-2°C",
      "o 2,5-4°C",
      "o 5-7°C",
      "o 8-10°C",
      "nie jest niższa"
    ],
    "answer": 2,
    "explanation": "Temperatura w mosznie jest niższa o około 2,5-4°C, co sprzyja rozwojowi plemników."
  },
  {
    "id": "R09_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "U chłopców wytwarzanie hormonów płciowych znacznie wzrasta między __________ a __________ rokiem życia.",
    "options": null,
    "answer": [
      "12.",
      "14."
    ],
    "altAnswers": [
      [
        "12.",
        "12",
        "dwunastym"
      ],
      [
        "14.",
        "14",
        "czternastym"
      ]
    ],
    "explanation": "Wytwarzanie męskich hormonów płciowych znacznie wzrasta między 12. a 14. rokiem życia."
  },
  {
    "id": "R09_HARD_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz narząd żeńskiego układu rozrodczego z cechą budowy pomagającą mu pełnić funkcję.",
    "options": null,
    "answer": {
      "jajowód": "mięśnie gładkie i nabłonek rzęskowy",
      "macica": "gruba warstwa mięśni i silnie unaczyniona błona śluzowa",
      "pochwa": "elastyczny przewód łączący szyjkę macicy ze środowiskiem zewnętrznym"
    },
    "left": [
      "jajowód",
      "macica",
      "pochwa"
    ],
    "right": [
      "elastyczny przewód łączący szyjkę macicy ze środowiskiem zewnętrznym",
      "gruba warstwa mięśni i silnie unaczyniona błona śluzowa",
      "mięśnie gładkie i nabłonek rzęskowy"
    ],
    "explanation": "Rzęski i mięśnie jajowodu przesuwają komórkę jajową, gruba warstwa mięśni umożliwia powiększanie macicy w czasie ciąży, a elastyczna pochwa umożliwia wydanie dziecka na świat.",
    "image": "r09_zenski_uklad_rozrodczy.jpg"
  },
  {
    "id": "R09_HARD_04",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile najczęściej trwa cykl miesiączkowy?",
    "options": [
      "7-10 dni",
      "14-18 dni",
      "20-24 dni",
      "21-28 dni",
      "35-45 dni",
      "26-34 dni"
    ],
    "answer": 5,
    "explanation": "Cykl miesiączkowy trwa najczęściej od 26 do 34 dni.",
    "image": "r09_cykl_miesiaczkowy.jpg"
  },
  {
    "id": "R09_HARD_05",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które objawy mogą należeć do zespołu napięcia przedmiesiączkowego przy niskim poziomie hormonów?",
    "options": [
      "ból brzucha",
      "wyrzynanie zębów mlecznych",
      "obrzmienie nóg",
      "trwałe zwiększenie pojemności płuc",
      "wahania nastroju",
      "powstanie zawiązków kończyn"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Do objawów zespołu napięcia przedmiesiączkowego należą ból brzucha, obrzmienie nóg i wahania nastroju."
  },
  {
    "id": "R09_HARD_06",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Jeśli dojdzie do zapłodnienia, ciałko żółte nadal wydziela progesteron.",
    "options": null,
    "answer": true,
    "explanation": "Po zapłodnieniu ciałko żółte nadal wydziela progesteron, a błona śluzowa macicy nie złuszcza się."
  },
  {
    "id": "R09_HARD_07",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia rozwoju zarodkowego w kolejności czasowej.",
    "options": null,
    "answer": [
      "zapłodnienie",
      "pierwszy podział zygoty po około 30 godzinach",
      "dotarcie zarodka do jamy macicy w ciągu około 4 dni",
      "rozpoczęcie zagnieżdżania około 7. dnia",
      "wytworzenie błon płodowych około 13. dnia"
    ],
    "items": [
      "wytworzenie błon płodowych około 13. dnia",
      "zapłodnienie",
      "rozpoczęcie zagnieżdżania około 7. dnia",
      "pierwszy podział zygoty po około 30 godzinach",
      "dotarcie zarodka do jamy macicy w ciągu około 4 dni"
    ],
    "explanation": "Po zapłodnieniu następują podziały zygoty, zarodek dociera do macicy, zaczyna się zagnieżdżać, a następnie wytwarza błony płodowe.",
    "image": "r09_rozwoj_zarodka_plodu.jpg"
  },
  {
    "id": "R09_HARD_08",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz błonę płodową z bardziej szczegółowym opisem jej działania.",
    "options": null,
    "answer": {
      "owodnia": "wody płodowe chronią zarodek i pomagają utrzymać stałą temperaturę",
      "omocznia": "gromadzi zbędne produkty przemiany materii zarodka i uczestniczy w tworzeniu naczyń pępowiny",
      "kosmówka": "jej kosmki wrastają w błonę śluzową macicy i uczestniczą w wymianie substancji"
    },
    "left": [
      "owodnia",
      "omocznia",
      "kosmówka"
    ],
    "right": [
      "jej kosmki wrastają w błonę śluzową macicy i uczestniczą w wymianie substancji",
      "wody płodowe chronią zarodek i pomagają utrzymać stałą temperaturę",
      "gromadzi zbędne produkty przemiany materii zarodka i uczestniczy w tworzeniu naczyń pępowiny"
    ],
    "explanation": "Trzy błony płodowe pełnią odmienne funkcje ochronne, wydalnicze i wymienne."
  },
  {
    "id": "R09_HARD_09",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Z czego powstaje łożysko?",
    "options": [
      "z owodni i omoczni",
      "z kosmówki i części błony śluzowej macicy",
      "z jajowodu i owodni",
      "z pępowiny i szyjki macicy",
      "z samej błony śluzowej pochwy",
      "z ciałka żółtego i kosmówki"
    ],
    "answer": 1,
    "explanation": "Łożysko tworzą kosmówka oraz część błony śluzowej macicy.",
    "image": "r09_lozysko_i_pepowina.jpg"
  },
  {
    "id": "R09_HARD_10",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jakie przybliżone wymiary ma ośmiotygodniowy zarodek?",
    "options": [
      "około 3 cm i 1 g",
      "około 30 cm i 1 kg",
      "około 1 cm i 30 g",
      "około 10 cm i 100 g",
      "około 50 cm i 3 kg",
      "około 3 mm i 100 g"
    ],
    "answer": 0,
    "explanation": "Ośmiotygodniowy zarodek ma około 3 cm długości i masę około 1 g.",
    "image": "r09_rozwoj_zarodka_plodu.jpg"
  },
  {
    "id": "R09_HARD_11",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz płeć z typowym przedziałem wieku rozpoczęcia przekwitania.",
    "options": null,
    "answer": {
      "kobiety": "45-55 lat",
      "mężczyźni": "50-60 lat"
    },
    "left": [
      "kobiety",
      "mężczyźni"
    ],
    "right": [
      "50-60 lat",
      "45-55 lat"
    ],
    "explanation": "Przekwitanie u kobiet zaczyna się najczęściej między 45. a 55. rokiem życia, a u mężczyzn zwykle między 50. a 60. rokiem życia."
  },
  {
    "id": "R09_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które zmiany są typowe dla starości?",
    "options": [
      "kruchsze kości",
      "pogorszenie wzroku i słuchu",
      "najszybszy wzrost ciała",
      "osłabienie mięśni szkieletowych",
      "wyrzynanie zębów mlecznych",
      "zmniejszenie pojemności płuc"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "explanation": "W starości kości stają się bardziej kruche, pogarszają się wzrok i słuch, słabną mięśnie i zmniejsza się pojemność płuc."
  },
  {
    "id": "R09_HARD_13",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Od jakiego wieku zaleca się szczepienia ochronne przeciw HPV u dzieci i młodzieży obu płci?",
    "options": [
      "powyżej 3. roku życia",
      "powyżej 5. roku życia",
      "powyżej 7. roku życia",
      "powyżej 8. roku życia",
      "powyżej 9. roku życia",
      "dopiero po 18. roku życia"
    ],
    "answer": 4,
    "explanation": "Szczepienia przeciw HPV zalecono dzieciom i młodzieży obu płci powyżej 9. roku życia."
  },
  {
    "id": "R09_HARD_14",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz chorobę z charakterystyczną informacją.",
    "options": null,
    "answer": {
      "rzeżączka": "u noworodka może wywołać zapalenie spojówek prowadzące do ślepoty",
      "kiła": "pierwszym objawem może być bezbolesny guzek znikający bez leczenia",
      "rzęsistkowica": "może przebiegać bez dolegliwości i może szerzyć się przez wspólny ręcznik"
    },
    "left": [
      "rzeżączka",
      "kiła",
      "rzęsistkowica"
    ],
    "right": [
      "może przebiegać bez dolegliwości i może szerzyć się przez wspólny ręcznik",
      "u noworodka może wywołać zapalenie spojówek prowadzące do ślepoty",
      "pierwszym objawem może być bezbolesny guzek znikający bez leczenia"
    ],
    "explanation": "Rzeżączka, kiła i rzęsistkowica mają odmienne charakterystyczne objawy i drogi szerzenia."
  },
  {
    "id": "R09_HARD_15",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Noworodek urodzony przez zakażoną matkę może rozwinąć zapalenie spojówek prowadzące do ślepoty. Która choroba matki stwarza takie ryzyko?",
    "options": [
      "rzeżączka",
      "kiła",
      "rzęsistkowica",
      "rak szyjki macicy",
      "rak piersi",
      "grzybica narządów płciowych"
    ],
    "answer": 0,
    "explanation": "Dwoinka rzeżączki może przejść na noworodka podczas porodu i wywołać rzeżączkowe zapalenie spojówek.",
    "image": "r09_dwoinka_rzezaczki.jpg"
  }
];

const KID_PROMPTS = {};

const chapter = {
  "id": "r09",
  "number": 9,
  "title": "Rozmnażanie i rozwój człowieka",
  "icon": "🧬",
  "sectionOrder": [
    "Układ rozrodczy człowieka",
    "Cykl miesiączkowy",
    "Od zapłodnienia do narodzin",
    "Rozwój od narodzin do starości",
    "Higiena i choroby układu rozrodczego"
  ],
  "sectionIcons": {
    "Układ rozrodczy człowieka": "🧬",
    "Cykl miesiączkowy": "🔄",
    "Od zapłodnienia do narodzin": "🤰",
    "Rozwój od narodzin do starości": "🌱",
    "Higiena i choroby układu rozrodczego": "🩺"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
