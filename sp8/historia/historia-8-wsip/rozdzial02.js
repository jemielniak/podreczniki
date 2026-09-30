// Skróty sekcji (do identyfikatorów ćwiczeń):
//   NIEM = Okupacja niemiecka
//   SOW  = Okupacja sowiecka
//   EMIG = Władze na uchodźstwie i Polskie Siły Zbrojne
//   PPP  = Polskie Państwo Podziemne
//   ZIEM = Ziemie polskie w latach 1943-1944
//   POW  = Powstanie warszawskie
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_NIEM_01",
    "section": "Okupacja niemiecka",
    "type": "single_choice",
    "prompt": "Które miasto było stolicą Generalnego Gubernatorstwa?",
    "options": [
      "Kraków",
      "Warszawa",
      "Lublin",
      "Radom",
      "Poznań",
      "Łódź"
    ],
    "answer": 0,
    "explanation": "Generalne Gubernatorstwo miało stolicę w Krakowie, a siedzibą generalnego gubernatora Hansa Franka był Wawel."
  },
  {
    "id": "R02_NIEM_02",
    "section": "Okupacja niemiecka",
    "type": "multi_select",
    "prompt": "Zaznacz ziemie II Rzeczypospolitej, które w 1939 r. zostały bezpośrednio wcielone do III Rzeszy.",
    "options": [
      "Pomorze",
      "Wielkopolska",
      "polska część Górnego Śląska",
      "Łódzkie",
      "Wołyń",
      "Polesie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do III Rzeszy bezpośrednio wcielono m.in. Pomorze, Wielkopolskę, północne Mazowsze, Łódzkie, polską część Górnego Śląska i Suwalszczyznę."
  },
  {
    "id": "R02_NIEM_03",
    "section": "Okupacja niemiecka",
    "type": "true_false",
    "prompt": "Wpisanie na folkslistę mogło poprawić warunki bytowe, ale wiązało się m.in. z obowiązkiem służby w armii niemieckiej.",
    "options": null,
    "answer": true,
    "explanation": "Na Śląsku i Pomorzu Niemcy zmuszali część Polaków do wpisywania się na niemiecką listę narodową. Osoby na folksliście miały lepsze zaopatrzenie, ale podlegały m.in. obowiązkowi służby w armii niemieckiej."
  },
  {
    "id": "R02_NIEM_04",
    "section": "Okupacja niemiecka",
    "type": "fill_in",
    "prompt": "Generalne Gubernatorstwo miało stolicę w __________, a generalnym gubernatorem był __________.",
    "options": null,
    "answer": [
      "Krakowie",
      "Hans Frank"
    ],
    "altAnswers": [
      [
        "Krakowie",
        "Kraków"
      ],
      [
        "Hans Frank",
        "Hansa Franka"
      ]
    ],
    "explanation": "Stolicą Generalnego Gubernatorstwa był Kraków, a funkcję generalnego gubernatora pełnił Hans Frank."
  },
  {
    "id": "R02_NIEM_05",
    "section": "Okupacja niemiecka",
    "type": "match",
    "prompt": "Połącz pojęcie z jego znaczeniem w realiach okupacji niemieckiej.",
    "options": null,
    "left": [
      "folkslista",
      "gestapo",
      "prasa gadzinowa",
      "kontyngenty"
    ],
    "right": [
      "niemiecka lista narodowa",
      "policja polityczna",
      "propagandowa prasa okupanta",
      "obowiązkowe dostawy płodów rolnych"
    ],
    "answer": {
      "folkslista": "niemiecka lista narodowa",
      "gestapo": "policja polityczna",
      "prasa gadzinowa": "propagandowa prasa okupanta",
      "kontyngenty": "obowiązkowe dostawy płodów rolnych"
    },
    "explanation": "Folkslista była niemiecką listą narodową, gestapo policją polityczną, prasa gadzinowa narzędziem propagandy okupanta, a kontyngenty obowiązkowymi dostawami płodów rolnych."
  },
  {
    "id": "R02_NIEM_06",
    "section": "Okupacja niemiecka",
    "type": "sort",
    "prompt": "Przyporządkuj działania okupanta do właściwej kategorii.",
    "options": null,
    "items": [
      "wymuszanie wpisów na folkslistę",
      "odbieranie polskich dzieci rodzinom",
      "publiczne egzekucje",
      "łapanki uliczne",
      "obowiązkowe kontyngenty",
      "wywózki na roboty do Niemiec"
    ],
    "categories": [
      "germanizacja",
      "terror",
      "wyzysk gospodarczy"
    ],
    "answer": {
      "germanizacja": [
        "wymuszanie wpisów na folkslistę",
        "odbieranie polskich dzieci rodzinom"
      ],
      "terror": [
        "publiczne egzekucje",
        "łapanki uliczne"
      ],
      "wyzysk gospodarczy": [
        "obowiązkowe kontyngenty",
        "wywózki na roboty do Niemiec"
      ]
    },
    "explanation": "Niemcy stosowali równocześnie germanizację, terror i wyzysk gospodarczy ludności polskiej."
  },
  {
    "id": "R02_NIEM_07",
    "section": "Okupacja niemiecka",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "pacyfikacja Michniowa",
      "akcja AB",
      "aresztowanie krakowskich profesorów",
      "traktat o przyjaźni i granicy III Rzeszy i ZSRS"
    ],
    "answer": [
      "traktat o przyjaźni i granicy III Rzeszy i ZSRS",
      "aresztowanie krakowskich profesorów",
      "akcja AB",
      "pacyfikacja Michniowa"
    ],
    "explanation": "Najpierw we wrześniu 1939 r. III Rzesza i ZSRS podzieliły ziemie polskie, następnie w listopadzie 1939 r. aresztowano krakowskich profesorów, w pierwszej połowie 1940 r. prowadzono akcję AB, a w lipcu 1943 r. spacyfikowano Michniów."
  },
  {
    "id": "R02_NIEM_08",
    "section": "Okupacja niemiecka",
    "type": "scenario",
    "prompt": "Okupowana Warszawa. Niemiecka policja zatrzymuje przypadkowych przechodniów na ulicy, a część z nich trafia do więzienia lub na egzekucję. Jak nazywano takie masowe zatrzymania?",
    "options": [
      "łapanki",
      "kontyngenty",
      "kolektywizacja",
      "amnestia",
      "parcelacja",
      "sowietyzacja"
    ],
    "answer": 0,
    "image": "r02_niemcy_lapanka.jpg",
    "explanation": "Przypadkowe masowe zatrzymywanie ludzi na ulicach nazywano łapankami. Terror miał zastraszać ludność i ułatwiać zwalczanie oporu."
  },
  {
    "id": "R02_NIEM_09",
    "section": "Okupacja niemiecka",
    "type": "odd_one_out",
    "prompt": "Wskaż miejsce, które nie było niemiecką katownią lub więzieniem okupacyjnym wymienionym w tej grupie: aleja Szucha, Pawiak, Zamek w Lublinie, Katyń.",
    "options": null,
    "answer": "Katyń",
    "explanation": "Katyń był miejscem sowieckiej zbrodni na polskich oficerach. Aleja Szucha, Pawiak i Zamek w Lublinie były związane z niemieckim aparatem terroru."
  },
  {
    "id": "R02_SOW_01",
    "section": "Okupacja sowiecka",
    "type": "single_choice",
    "prompt": "Kiedy ZSRS zaatakował Polskę we wrześniu 1939 r.?",
    "options": [
      "17 września 1939 r.",
      "30 września 1939 r.",
      "10 lutego 1940 r.",
      "5 marca 1940 r.",
      "30 lipca 1941 r.",
      "4 lipca 1943 r."
    ],
    "answer": 0,
    "explanation": "Armia Czerwona wkroczyła na terytorium Polski 17 września 1939 r., realizując ustalenia paktu Ribbentrop-Mołotow."
  },
  {
    "id": "R02_SOW_02",
    "section": "Okupacja sowiecka",
    "type": "multi_select",
    "prompt": "Zaznacz działania służące sowietyzacji ziem zajętych przez ZSRS.",
    "options": [
      "likwidacja polskich urzędów",
      "nowe programy nauczania",
      "nacjonalizacja banków i fabryk",
      "kolektywizacja rolnictwa",
      "utworzenie Generalnego Gubernatorstwa",
      "wprowadzenie folkslisty"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Władze sowieckie likwidowały polskie urzędy, ograniczały używanie języka polskiego, zmieniały programy szkolne, nacjonalizowały gospodarkę i wprowadzały kolektywizację rolnictwa."
  },
  {
    "id": "R02_SOW_03",
    "section": "Okupacja sowiecka",
    "type": "true_false",
    "prompt": "Przymusowe nadanie mieszkańcom Kresów obywatelstwa ZSRS mogło skutkować poborem do Armii Czerwonej.",
    "options": null,
    "answer": true,
    "explanation": "Po wcieleniu zajętych ziem do ZSRS ich mieszkańcom narzucono obywatelstwo sowieckie, co wiązało się m.in. z poborem do Armii Czerwonej."
  },
  {
    "id": "R02_SOW_04",
    "section": "Okupacja sowiecka",
    "type": "fill_in",
    "prompt": "W październiku 1939 r. na zajętych Kresach przeprowadzono zmanipulowane __________, a ich przebieg nadzorowało __________.",
    "options": null,
    "answer": [
      "wybory",
      "NKWD"
    ],
    "altAnswers": [
      [
        "wybory",
        "wybory do Rad Delegatów Ludowych"
      ],
      [
        "NKWD"
      ]
    ],
    "explanation": "Zmanipulowane wybory miały stworzyć pozory legalności wcielenia ziem do ZSRS. Odbywały się pod nadzorem NKWD."
  },
  {
    "id": "R02_SOW_05",
    "section": "Okupacja sowiecka",
    "type": "match",
    "prompt": "Połącz miejsce przetrzymywania polskich jeńców z miejscem ich zamordowania lub pochówku.",
    "options": null,
    "left": [
      "Kozielsk",
      "Ostaszków",
      "Starobielsk"
    ],
    "right": [
      "Katyń",
      "Kalinin i Miednoje",
      "Charków i Piatichatki"
    ],
    "answer": {
      "Kozielsk": "Katyń",
      "Ostaszków": "Kalinin i Miednoje",
      "Starobielsk": "Charków i Piatichatki"
    },
    "image": "r02_katyn_cmentarz.jpg",
    "explanation": "Jeńców z Kozielska zamordowano w Katyniu, z Ostaszkowa w Kalininie i pogrzebano w Miednoje, a ze Starobielska rozstrzelano w Charkowie i pochowano w Piatichatkach."
  },
  {
    "id": "R02_SOW_06",
    "section": "Okupacja sowiecka",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do kategorii: represje wobec ludzi albo przekształcanie życia publicznego i gospodarki.",
    "options": null,
    "items": [
      "deportacje na Syberię",
      "zsyłanie do łagrów",
      "aresztowania polskich elit",
      "likwidacja polskich urzędów",
      "nacjonalizacja banków i fabryk",
      "kolektywizacja rolnictwa"
    ],
    "categories": [
      "represje wobec ludzi",
      "sowietyzacja państwa i gospodarki"
    ],
    "answer": {
      "represje wobec ludzi": [
        "deportacje na Syberię",
        "zsyłanie do łagrów",
        "aresztowania polskich elit"
      ],
      "sowietyzacja państwa i gospodarki": [
        "likwidacja polskich urzędów",
        "nacjonalizacja banków i fabryk",
        "kolektywizacja rolnictwa"
      ]
    },
    "explanation": "Okupacja sowiecka łączyła represje osobowe z szeroką sowietyzacją instytucji, edukacji i gospodarki."
  },
  {
    "id": "R02_SOW_07",
    "section": "Okupacja sowiecka",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z okupacją sowiecką i sprawą katyńską w porządku chronologicznym.",
    "options": null,
    "items": [
      "ZSRS przyznaje odpowiedzialność za zbrodnię katyńską",
      "ujawnienie grobów katyńskich przez Niemców",
      "zbrodnia katyńska",
      "zmanipulowane wybory na Kresach",
      "agresja ZSRS na Polskę"
    ],
    "answer": [
      "agresja ZSRS na Polskę",
      "zmanipulowane wybory na Kresach",
      "zbrodnia katyńska",
      "ujawnienie grobów katyńskich przez Niemców",
      "ZSRS przyznaje odpowiedzialność za zbrodnię katyńską"
    ],
    "explanation": "Agresja ZSRS nastąpiła we wrześniu 1939 r., zmanipulowane wybory w październiku 1939 r., zbrodnia katyńska wiosną 1940 r., ujawnienie grobów przez Niemców w kwietniu 1943 r., a przyznanie odpowiedzialności przez ZSRS w 1990 r."
  },
  {
    "id": "R02_SOW_08",
    "section": "Okupacja sowiecka",
    "type": "scenario",
    "prompt": "Rodzina zostaje w nocy wyprowadzona z domu, ma kilkadziesiąt minut na spakowanie rzeczy, a następnie jedzie tygodniami w nieogrzewanym wagonie towarowym na Syberię. Jak określić tę formę represji?",
    "options": [
      "deportacja",
      "folkslista",
      "łapanka",
      "akcja N",
      "parcelacja",
      "mały sabotaż"
    ],
    "answer": 0,
    "image": "r02_deportacja_sowiecka.jpg",
    "explanation": "Taki przymusowy wywóz ludności na odległe tereny był deportacją. Polaków wywożono m.in. na Syberię i do Kazachstanu."
  },
  {
    "id": "R02_SOW_09",
    "section": "Okupacja sowiecka",
    "type": "odd_one_out",
    "prompt": "Wskaż miejsce, które nie było sowieckim obozem dla polskich jeńców związanych ze zbrodnią katyńską: Kozielsk, Starobielsk, Ostaszków, Palmiry.",
    "options": null,
    "answer": "Palmiry",
    "explanation": "Palmiry były miejscem niemieckich egzekucji pod Warszawą. Kozielsk, Starobielsk i Ostaszków były obozami związanymi z losem polskich jeńców zamordowanych przez Sowietów."
  },
  {
    "id": "R02_EMIG_01",
    "section": "Władze na uchodźstwie i Polskie Siły Zbrojne",
    "type": "single_choice",
    "prompt": "Kto objął urząd prezydenta RP po internowaniu Ignacego Mościckiego w Rumunii?",
    "options": [
      "Władysław Raczkiewicz",
      "Władysław Sikorski",
      "Stanisław Mikołajczyk",
      "Kazimierz Sosnkowski",
      "Ignacy Jan Paderewski",
      "Władysław Anders"
    ],
    "answer": 0,
    "explanation": "Ignacy Mościcki, korzystając z konstytucji kwietniowej, przekazał urząd Władysławowi Raczkiewiczowi."
  },
  {
    "id": "R02_EMIG_02",
    "section": "Władze na uchodźstwie i Polskie Siły Zbrojne",
    "type": "multi_select",
    "prompt": "Zaznacz główne zadania polskich władz na uchodźstwie.",
    "options": [
      "ochrona interesów polskich obywateli",
      "zachowanie suwerenności Polski",
      "tworzenie Polskich Sił Zbrojnych na Zachodzie",
      "organizowanie konspiracji zbrojnej w kraju",
      "wprowadzenie folkslisty",
      "likwidacja Delegatury Rządu na Kraj"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Rząd na uchodźstwie miał chronić interesy obywateli, bronić suwerenności i integralności terytorialnej Polski, tworzyć Polskie Siły Zbrojne na Zachodzie oraz wspierać konspirację zbrojną w kraju."
  },
  {
    "id": "R02_EMIG_03",
    "section": "Władze na uchodźstwie i Polskie Siły Zbrojne",
    "type": "true_false",
    "prompt": "Władysław Sikorski po utworzeniu rządu na uchodźstwie był jednocześnie premierem i wodzem naczelnym.",
    "options": null,
    "answer": true,
    "explanation": "30 września 1939 r. Władysław Sikorski stanął na czele rządu na uchodźstwie i objął funkcję wodza naczelnego."
  },
  {
    "id": "R02_EMIG_04",
    "section": "Władze na uchodźstwie i Polskie Siły Zbrojne",
    "type": "fill_in",
    "prompt": "Układ Sikorski-Majski podpisano 30 lipca __________ r., a dowódcą tworzonej w ZSRS polskiej armii został generał __________.",
    "options": null,
    "answer": [
      "1941",
      "Władysław Anders"
    ],
    "altAnswers": [
      [
        "1941",
        "1941 r."
      ],
      [
        "Władysław Anders",
        "Władysław Andersa",
        "Anders"
      ]
    ],
    "explanation": "Porozumienie polsko-sowieckie podpisano 30 lipca 1941 r. Armię Polską w ZSRS organizował generał Władysław Anders."
  },
  {
    "id": "R02_EMIG_05",
    "section": "Władze na uchodźstwie i Polskie Siły Zbrojne",
    "type": "match",
    "prompt": "Połącz polską formację z miejscem lub bitwą, z którą była szczególnie związana.",
    "options": null,
    "left": [
      "Samodzielna Brygada Strzelców Podhalańskich",
      "Dywizjon 303",
      "Samodzielna Brygada Strzelców Karpackich",
      "2 Korpus Polski"
    ],
    "right": [
      "Narwik",
      "bitwa o Anglię",
      "Tobruk",
      "Monte Cassino"
    ],
    "answer": {
      "Samodzielna Brygada Strzelców Podhalańskich": "Narwik",
      "Dywizjon 303": "bitwa o Anglię",
      "Samodzielna Brygada Strzelców Karpackich": "Tobruk",
      "2 Korpus Polski": "Monte Cassino"
    },
    "image": "r02_dywizjon_303.jpg",
    "explanation": "Samodzielna Brygada Strzelców Podhalańskich walczyła o Narwik, Dywizjon 303 w bitwie o Anglię, Samodzielna Brygada Strzelców Karpackich broniła Tobruku, a 2 Korpus Polski walczył pod Monte Cassino."
  },
  {
    "id": "R02_EMIG_06",
    "section": "Władze na uchodźstwie i Polskie Siły Zbrojne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia dotyczące władz na uchodźstwie i stosunków z ZSRS w porządku chronologicznym.",
    "options": null,
    "items": [
      "śmierć Władysława Sikorskiego w Gibraltarze",
      "ewakuacja armii Andersa z ZSRS",
      "utworzenie rządu RP na uchodźstwie",
      "zerwanie stosunków dyplomatycznych przez ZSRS",
      "podpisanie układu Sikorski-Majski"
    ],
    "answer": [
      "utworzenie rządu RP na uchodźstwie",
      "podpisanie układu Sikorski-Majski",
      "ewakuacja armii Andersa z ZSRS",
      "zerwanie stosunków dyplomatycznych przez ZSRS",
      "śmierć Władysława Sikorskiego w Gibraltarze"
    ],
    "explanation": "Rząd na uchodźstwie utworzono we wrześniu 1939 r., układ Sikorski-Majski podpisano w lipcu 1941 r., ewakuację armii Andersa zakończono latem 1942 r., stosunki z ZSRS zerwano w kwietniu 1943 r., a Sikorski zginął w lipcu 1943 r."
  },
  {
    "id": "R02_EMIG_07",
    "section": "Władze na uchodźstwie i Polskie Siły Zbrojne",
    "type": "scenario",
    "prompt": "Polski okręt podwodny we wrześniu 1939 r. zostaje internowany i rozbrojony w Tallinnie. Załoga potajemnie wymyka się z portu i bez map dociera do Wielkiej Brytanii. O jaki okręt chodzi?",
    "options": [
      "ORP Orzeł",
      "ORP Grom",
      "ORP Burza",
      "ORP Błyskawica"
    ],
    "answer": 0,
    "image": "r02_orp_orzel.jpg",
    "explanation": "Był to ORP Orzeł. Jego załoga uciekła z Tallinna i przedarła się do Wielkiej Brytanii mimo odebrania map."
  },
  {
    "id": "R02_EMIG_08",
    "section": "Władze na uchodźstwie i Polskie Siły Zbrojne",
    "type": "sort",
    "prompt": "Przyporządkuj formacje do ich dowódców.",
    "options": null,
    "items": [
      "Armia Polska w ZSRS",
      "1 Dywizja Pancerna",
      "Samodzielna Brygada Spadochronowa"
    ],
    "categories": [
      "Władysław Anders",
      "Stanisław Maczek",
      "Stanisław Sosabowski"
    ],
    "answer": {
      "Władysław Anders": [
        "Armia Polska w ZSRS"
      ],
      "Stanisław Maczek": [
        "1 Dywizja Pancerna"
      ],
      "Stanisław Sosabowski": [
        "Samodzielna Brygada Spadochronowa"
      ]
    },
    "image": "r02_armia_andersa.jpg",
    "explanation": "Armią Polską w ZSRS dowodził Władysław Anders, 1 Dywizją Pancerną Stanisław Maczek, a Samodzielną Brygadą Spadochronową Stanisław Sosabowski."
  },
  {
    "id": "R02_EMIG_09",
    "section": "Władze na uchodźstwie i Polskie Siły Zbrojne",
    "type": "odd_one_out",
    "prompt": "Wskaż miejsce, które nie było polem walk polskich formacji działających u boku zachodnich aliantów: Narwik, Tobruk, Monte Cassino, Wawer.",
    "options": null,
    "answer": "Wawer",
    "explanation": "Wawer był miejscem niemieckiej egzekucji pod Warszawą. Narwik, Tobruk i Monte Cassino wiążą się z walkami polskich formacji u boku aliantów."
  },
  {
    "id": "R02_PPP_01",
    "section": "Polskie Państwo Podziemne",
    "type": "single_choice",
    "prompt": "Z jakich dwóch głównych pionów składało się Polskie Państwo Podziemne?",
    "options": [
      "cywilnego i wojskowego",
      "sądowego i kościelnego",
      "morskiego i lotniczego",
      "miejskiego i wiejskiego",
      "jawnego i emigracyjnego",
      "gospodarczego i kolonialnego"
    ],
    "answer": 0,
    "explanation": "Polskie Państwo Podziemne było zorganizowane w pionie cywilnym i wojskowym, podległych legalnym władzom RP na uchodźstwie."
  },
  {
    "id": "R02_PPP_02",
    "section": "Polskie Państwo Podziemne",
    "type": "multi_select",
    "prompt": "Zaznacz zadania Delegatury Rządu RP na Kraj.",
    "options": [
      "organizowanie podziemnej administracji",
      "kierowanie walką cywilną",
      "przygotowanie przejęcia władzy po wojnie",
      "koordynowanie departamentów odpowiadających ministerstwom",
      "dowodzenie Dywizjonem 303",
      "tworzenie PKWN"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Delegatura organizowała konspiracyjną administrację, kierowała jej działalnością, przygotowywała przejęcie władzy po wojnie i uczestniczyła w kierowaniu walką cywilną."
  },
  {
    "id": "R02_PPP_03",
    "section": "Polskie Państwo Podziemne",
    "type": "true_false",
    "prompt": "W lutym 1942 r. Związek Walki Zbrojnej został przemianowany na Armię Krajową.",
    "options": null,
    "answer": true,
    "explanation": "W lutym 1942 r. ZWZ przyjął nazwę Armia Krajowa. Na początku 1944 r. AK liczyła około 360 tys. zaprzysiężonych żołnierzy."
  },
  {
    "id": "R02_PPP_04",
    "section": "Polskie Państwo Podziemne",
    "type": "fill_in",
    "prompt": "Pierwszą ogólnokrajową organizacją wojskową podziemia była __________, którą następnie zastąpił __________, a od lutego 1942 r. działała __________.",
    "options": null,
    "answer": [
      "Służba Zwycięstwu Polski",
      "Związek Walki Zbrojnej",
      "Armia Krajowa"
    ],
    "altAnswers": [
      [
        "Służba Zwycięstwu Polski",
        "SZP"
      ],
      [
        "Związek Walki Zbrojnej",
        "ZWZ"
      ],
      [
        "Armia Krajowa",
        "AK"
      ]
    ],
    "explanation": "27 września 1939 r. powstała Służba Zwycięstwu Polski. W grudniu 1939 r. zastąpił ją Związek Walki Zbrojnej, przemianowany w lutym 1942 r. na Armię Krajową."
  },
  {
    "id": "R02_PPP_05",
    "section": "Polskie Państwo Podziemne",
    "type": "match",
    "prompt": "Połącz organizację lub formację z właściwą partią albo dowódcą.",
    "options": null,
    "left": [
      "Bataliony Chłopskie",
      "Narodowa Organizacja Wojskowa",
      "Służba Zwycięstwu Polski",
      "ZWZ i AK"
    ],
    "right": [
      "Stronnictwo Ludowe",
      "Stronnictwo Narodowe",
      "Michał Karaszewicz-Tokarzewski",
      "Stefan Rowecki"
    ],
    "answer": {
      "Bataliony Chłopskie": "Stronnictwo Ludowe",
      "Narodowa Organizacja Wojskowa": "Stronnictwo Narodowe",
      "Służba Zwycięstwu Polski": "Michał Karaszewicz-Tokarzewski",
      "ZWZ i AK": "Stefan Rowecki"
    },
    "explanation": "Bataliony Chłopskie były związane ze Stronnictwem Ludowym, NOW ze Stronnictwem Narodowym, SZP organizował Michał Karaszewicz-Tokarzewski, a Stefan Rowecki dowodził ZWZ i następnie AK."
  },
  {
    "id": "R02_PPP_06",
    "section": "Polskie Państwo Podziemne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z Polskim Państwem Podziemnym w porządku chronologicznym.",
    "options": null,
    "items": [
      "zamach na Franza Kutscherę",
      "powstanie Armii Krajowej",
      "akcja pod Arsenałem",
      "powołanie Delegatury Rządu RP na Kraj",
      "powstanie Służby Zwycięstwu Polski"
    ],
    "answer": [
      "powstanie Służby Zwycięstwu Polski",
      "powołanie Delegatury Rządu RP na Kraj",
      "powstanie Armii Krajowej",
      "akcja pod Arsenałem",
      "zamach na Franza Kutscherę"
    ],
    "explanation": "SZP powstała we wrześniu 1939 r., Delegatura w grudniu 1940 r., AK w lutym 1942 r., akcja pod Arsenałem w marcu 1943 r., a zamach na Franza Kutscherę w lutym 1944 r."
  },
  {
    "id": "R02_PPP_07",
    "section": "Polskie Państwo Podziemne",
    "type": "scenario",
    "prompt": "Wywiad podziemnej armii zdobywa informacje o niemieckiej broni rakietowej oraz fragmenty pocisku, a także pomaga zlokalizować ośrodek doświadczalny na wyspie Uznam. Jakiej broni dotyczył ten sukces?",
    "options": [
      "V-2",
      "V-1",
      "samolot myśliwski",
      "okręt podwodny",
      "czołg",
      "pocisk artyleryjski"
    ],
    "answer": 0,
    "explanation": "Wywiad Armii Krajowej zdobył dane o pocisku V-2 i pomógł zlokalizować ośrodek w Peenemünde, gdzie pracowano nad rakietami V-1 i V-2."
  },
  {
    "id": "R02_PPP_08",
    "section": "Polskie Państwo Podziemne",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady oporu do walki cywilnej albo walki zbrojnej.",
    "options": null,
    "items": [
      "tajne nauczanie",
      "prasa podziemna",
      "bojkot niemieckich rozrywek",
      "wysadzanie torów kolejowych",
      "akcja pod Arsenałem",
      "oddziały partyzanckie"
    ],
    "categories": [
      "walka cywilna",
      "walka zbrojna"
    ],
    "answer": {
      "walka cywilna": [
        "tajne nauczanie",
        "prasa podziemna",
        "bojkot niemieckich rozrywek"
      ],
      "walka zbrojna": [
        "wysadzanie torów kolejowych",
        "akcja pod Arsenałem",
        "oddziały partyzanckie"
      ]
    },
    "image": "r02_szare_szeregi_mur.jpg",
    "explanation": "Podziemie łączyło walkę cywilną, np. tajne nauczanie i prasę konspiracyjną, z działaniami zbrojnymi, takimi jak dywersja i odbijanie więźniów."
  },
  {
    "id": "R02_PPP_09",
    "section": "Polskie Państwo Podziemne",
    "type": "odd_one_out",
    "prompt": "Wskaż organizację, która nie należała do struktur Polskiego Państwa Podziemnego: Delegatura Rządu RP na Kraj, Armia Krajowa, Rada Jedności Narodowej, Polski Komitet Wyzwolenia Narodowego.",
    "options": null,
    "answer": "Polski Komitet Wyzwolenia Narodowego",
    "explanation": "PKWN był ośrodkiem władzy podporządkowanym ZSRS i konkurencyjnym wobec legalnych władz oraz Polskiego Państwa Podziemnego."
  },
  {
    "id": "R02_ZIEM_01",
    "section": "Ziemie polskie w latach 1943-1944",
    "type": "single_choice",
    "prompt": "Która partia została powołana w styczniu 1942 r. przez komunistyczną grupę inicjatywną zrzuconą wcześniej w okolicach Warszawy?",
    "options": [
      "Polska Partia Robotnicza",
      "Stronnictwo Ludowe",
      "Stronnictwo Narodowe",
      "Polska Partia Socjalistyczna",
      "Stronnictwo Pracy",
      "Polityczny Komitet Porozumiewawczy"
    ],
    "answer": 0,
    "explanation": "W styczniu 1942 r. powstała Polska Partia Robotnicza, zależna politycznie od władz w Moskwie."
  },
  {
    "id": "R02_ZIEM_02",
    "section": "Ziemie polskie w latach 1943-1944",
    "type": "multi_select",
    "prompt": "Zaznacz postulaty lub stanowiska programu Polskiej Partii Robotniczej.",
    "options": [
      "sojusz z ZSRS",
      "odmowa uznania rządu RP na uchodźstwie",
      "nacjonalizacja zakładów przemysłowych i banków",
      "parcelacja wielkich majątków ziemskich",
      "utrzymanie przedwojennej granicy wschodniej bez zmian",
      "uznanie konstytucji kwietniowej za podstawę własnej władzy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "PPR odmawiała uznania rządu RP na uchodźstwie, deklarowała sojusz z ZSRS, zapowiadała przesunięcie granic na zachód i północ oraz nacjonalizację przemysłu i banków i parcelację wielkich majątków."
  },
  {
    "id": "R02_ZIEM_03",
    "section": "Ziemie polskie w latach 1943-1944",
    "type": "true_false",
    "prompt": "Przewodniczącym Krajowej Rady Narodowej utworzonej w noc sylwestrową 1943/1944 był Bolesław Bierut.",
    "options": null,
    "answer": true,
    "explanation": "KRN powołali przywódcy PPR, a jej przewodniczącym został Bolesław Bierut."
  },
  {
    "id": "R02_ZIEM_04",
    "section": "Ziemie polskie w latach 1943-1944",
    "type": "fill_in",
    "prompt": "W marcu 1943 r. w ZSRS powstał Związek Patriotów Polskich z __________ na czele, a dowódcą 1 Dywizji Piechoty im. Tadeusza Kościuszki został generał __________.",
    "options": null,
    "answer": [
      "Wandą Wasilewską",
      "Zygmunt Berling"
    ],
    "altAnswers": [
      [
        "Wandą Wasilewską",
        "Wanda Wasilewska"
      ],
      [
        "Zygmunt Berling",
        "Zygmuntem Berlingiem",
        "Berling"
      ]
    ],
    "explanation": "Związkowi Patriotów Polskich przewodziła Wanda Wasilewska. Formowaną w Sielcach nad Oką 1 Dywizją Piechoty dowodził generał Zygmunt Berling."
  },
  {
    "id": "R02_ZIEM_05",
    "section": "Ziemie polskie w latach 1943-1944",
    "type": "match",
    "prompt": "Połącz organizację lub instytucję z jej przywódcą.",
    "options": null,
    "left": [
      "Związek Patriotów Polskich",
      "Krajowa Rada Narodowa",
      "Polski Komitet Wyzwolenia Narodowego",
      "Gwardia Ludowa"
    ],
    "right": [
      "Wanda Wasilewska",
      "Bolesław Bierut",
      "Edward Osóbka-Morawski",
      "Michał Rola-Żymierski"
    ],
    "answer": {
      "Związek Patriotów Polskich": "Wanda Wasilewska",
      "Krajowa Rada Narodowa": "Bolesław Bierut",
      "Polski Komitet Wyzwolenia Narodowego": "Edward Osóbka-Morawski",
      "Gwardia Ludowa": "Michał Rola-Żymierski"
    },
    "explanation": "ZPP wiązał się z Wandą Wasilewską, KRN z Bolesławem Bierutem, PKWN z Edwardem Osóbką-Morawskim, a Gwardia Ludowa z Michałem Rolą-Żymierskim."
  },
  {
    "id": "R02_ZIEM_06",
    "section": "Ziemie polskie w latach 1943-1944",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z tworzeniem komunistycznego ośrodka władzy i wojska w porządku chronologicznym.",
    "options": null,
    "items": [
      "powstanie Rządu Tymczasowego",
      "bitwa pod Lenino",
      "powstanie PPR",
      "ujawnienie PKWN",
      "powstanie ZPP",
      "powstanie KRN"
    ],
    "answer": [
      "powstanie PPR",
      "powstanie ZPP",
      "bitwa pod Lenino",
      "powstanie KRN",
      "ujawnienie PKWN",
      "powstanie Rządu Tymczasowego"
    ],
    "explanation": "PPR powstała w styczniu 1942 r., ZPP w marcu 1943 r., 1 Dywizja walczyła pod Lenino w październiku 1943 r., KRN powstała na przełomie 1943 i 1944 r., PKWN ujawnił się w lipcu 1944 r., a Rząd Tymczasowy powstał w grudniu 1944 r."
  },
  {
    "id": "R02_ZIEM_07",
    "section": "Ziemie polskie w latach 1943-1944",
    "type": "scenario",
    "prompt": "9 lutego 1943 r. oddział UPA atakuje polską wieś Parośla i morduje 179 mieszkańców. Z jakim szerszym wydarzeniem wiąże się ten atak?",
    "options": [
      "zbrodnia wołyńska",
      "akcja AB",
      "akcja Burza",
      "powstanie warszawskie",
      "zbrodnia katyńska",
      "akcja pod Arsenałem"
    ],
    "answer": 0,
    "image": "r02_wolyn_wies.jpg",
    "explanation": "Atak na Paroślę był jednym z pierwszych epizodów masowej antypolskiej akcji UPA na Wołyniu i we wschodniej Małopolsce, określanej jako zbrodnia wołyńska."
  },
  {
    "id": "R02_ZIEM_08",
    "section": "Ziemie polskie w latach 1943-1944",
    "type": "sort",
    "prompt": "Przyporządkuj działania do organizacji, z którą były związane.",
    "options": null,
    "items": [
      "odmowa uznania rządu RP na uchodźstwie",
      "utworzenie Gwardii Ludowej",
      "antypolska akcja na Wołyniu",
      "dążenie do usunięcia Polaków z części Kresów",
      "organizowanie własnej administracji na terenach zajętych przez Armię Czerwoną",
      "likwidowanie struktur Polskiego Państwa Podziemnego"
    ],
    "categories": [
      "PPR",
      "UPA",
      "PKWN"
    ],
    "answer": {
      "PPR": [
        "odmowa uznania rządu RP na uchodźstwie",
        "utworzenie Gwardii Ludowej"
      ],
      "UPA": [
        "antypolska akcja na Wołyniu",
        "dążenie do usunięcia Polaków z części Kresów"
      ],
      "PKWN": [
        "organizowanie własnej administracji na terenach zajętych przez Armię Czerwoną",
        "likwidowanie struktur Polskiego Państwa Podziemnego"
      ]
    },
    "explanation": "PPR budowała konkurencyjne podziemie polityczne, UPA prowadziła antypolską akcję na południowo-wschodnich Kresach, a PKWN organizował administrację na terenach zajmowanych przez Armię Czerwoną."
  },
  {
    "id": "R02_ZIEM_09",
    "section": "Ziemie polskie w latach 1943-1944",
    "type": "odd_one_out",
    "prompt": "Wskaż miejsce, które nie wiąże się z walkami polskich oddziałów tworzonych u boku Armii Czerwonej: Lenino, Studzianki, Wał Pomorski, Arnhem.",
    "options": null,
    "answer": "Arnhem",
    "image": "r02_lenino_zolnierze.jpg",
    "explanation": "Arnhem wiąże się z Samodzielną Brygadą Spadochronową walczącą u boku zachodnich aliantów. Lenino, Studzianki i Wał Pomorski dotyczą formacji polskich walczących u boku Armii Czerwonej."
  },
  {
    "id": "R02_POW_01",
    "section": "Powstanie warszawskie",
    "type": "single_choice",
    "prompt": "Kiedy rozpoczęło się powstanie warszawskie?",
    "options": [
      "1 sierpnia 1944 r. o 17.00",
      "22 lipca 1944 r. o 12.00",
      "5 sierpnia 1944 r. o 17.00",
      "1 września 1944 r. o 17.00",
      "2 października 1944 r. o 12.00",
      "17 września 1944 r. o 17.00"
    ],
    "answer": 0,
    "image": "r02_powstanie_barykada.jpg",
    "explanation": "Powstanie rozpoczęło się 1 sierpnia 1944 r. o godzinie 17.00, nazywanej godziną W."
  },
  {
    "id": "R02_POW_02",
    "section": "Powstanie warszawskie",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki, które wpłynęły na decyzję o rozpoczęciu powstania w Warszawie.",
    "options": [
      "niepowodzenie Burzy na Kresach",
      "zbliżanie się Armii Czerwonej",
      "zainstalowanie prosowieckich władz w Lublinie",
      "niemieckie przygotowania do ewakuacji Warszawy",
      "kapitulacja Niemiec w maju 1945 r.",
      "powstanie rządu RP na uchodźstwie w 1939 r."
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Na decyzję wpływały m.in. niepowodzenie Burzy na Kresach, zbliżanie się Armii Czerwonej, pojawienie się prosowieckich władz w Lublinie, niemieckie przygotowania do ewakuacji i wezwania komunistów do walki."
  },
  {
    "id": "R02_POW_03",
    "section": "Powstanie warszawskie",
    "type": "true_false",
    "prompt": "Warszawa od początku była przewidziana jako główne miejsce walk w planie Burza.",
    "options": null,
    "answer": false,
    "explanation": "Warszawa początkowo nie była przewidywana jako miejsce walk powstańczych. Decyzję o zrywie w stolicy podjęto później pod wpływem rozwoju sytuacji militarnej i politycznej."
  },
  {
    "id": "R02_POW_04",
    "section": "Powstanie warszawskie",
    "type": "fill_in",
    "prompt": "Powstanie warszawskie trwało __________ dni, a układ o zaprzestaniu walk podpisano 2 __________ 1944 r.",
    "options": null,
    "answer": [
      "63",
      "października"
    ],
    "altAnswers": [
      [
        "63",
        "63 dni"
      ],
      [
        "października",
        "październik"
      ]
    ],
    "explanation": "Po 63 dniach walk powstanie zakończyło się kapitulacją. Układ o zaprzestaniu działań wojennych podpisano 2 października 1944 r."
  },
  {
    "id": "R02_POW_05",
    "section": "Powstanie warszawskie",
    "type": "match",
    "prompt": "Połącz miejsce w Warszawie z wydarzeniem z okresu powstania.",
    "options": null,
    "left": [
      "Wola",
      "Starówka",
      "Śródmieście",
      "Praga"
    ],
    "right": [
      "masowe mordy ludności cywilnej",
      "wycofanie części powstańców kanałami",
      "zdobycie budynku PAST-y",
      "szybkie zakończenie walk"
    ],
    "answer": {
      "Wola": "masowe mordy ludności cywilnej",
      "Starówka": "wycofanie części powstańców kanałami",
      "Śródmieście": "zdobycie budynku PAST-y",
      "Praga": "szybkie zakończenie walk"
    },
    "image": "r02_powstanie_kanaly.jpg",
    "explanation": "Na Woli doszło do masowych mordów ludności cywilnej, ze Starówki powstańcy wycofywali się kanałami, w Śródmieściu zdobyto budynek PAST-y, a na Pradze walki zakończyły się bardzo szybko."
  },
  {
    "id": "R02_POW_06",
    "section": "Powstanie warszawskie",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia prowadzące od rozpoczęcia Burzy do końca powstania warszawskiego.",
    "options": null,
    "items": [
      "kapitulacja powstania warszawskiego",
      "desant żołnierzy armii Berlinga",
      "wspólne opanowanie Wilna przez AK i Armię Czerwoną",
      "wybuch powstania warszawskiego",
      "pierwsze akcje planu Burza"
    ],
    "answer": [
      "pierwsze akcje planu Burza",
      "wspólne opanowanie Wilna przez AK i Armię Czerwoną",
      "wybuch powstania warszawskiego",
      "desant żołnierzy armii Berlinga",
      "kapitulacja powstania warszawskiego"
    ],
    "explanation": "Pierwsze akcje Burzy rozpoczęły się po wejściu Sowietów na ziemie przedwojennej Polski, w lipcu AK współdziałała z Armią Czerwoną pod Wilnem, 1 sierpnia wybuchło powstanie warszawskie, we wrześniu desantowali się żołnierze armii Berlinga, a 2 października podpisano kapitulację."
  },
  {
    "id": "R02_POW_07",
    "section": "Powstanie warszawskie",
    "type": "riddle",
    "prompt": "Jak nazywała się radiostacja uruchomiona przez powstańców w Warszawie?",
    "options": null,
    "answer": "Błyskawica",
    "altAnswers": [
      "Błyskawica",
      "radiostacja Błyskawica"
    ],
    "explanation": "Na obszarach kontrolowanych przez powstańców działała radiostacja Błyskawica, a także prasa i Harcerska Poczta Polowa."
  },
  {
    "id": "R02_POW_08",
    "section": "Powstanie warszawskie",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do polskiej organizacji życia w powstaniu albo do działań niemieckich.",
    "options": null,
    "items": [
      "radiostacja Błyskawica",
      "Harcerska Poczta Polowa",
      "powstańcze gazety",
      "rzeź Woli",
      "bombardowanie polskich pozycji",
      "systematyczne niszczenie miasta po kapitulacji"
    ],
    "categories": [
      "organizacja życia powstańczego",
      "działania niemieckie"
    ],
    "answer": {
      "organizacja życia powstańczego": [
        "radiostacja Błyskawica",
        "Harcerska Poczta Polowa",
        "powstańcze gazety"
      ],
      "działania niemieckie": [
        "rzeź Woli",
        "bombardowanie polskich pozycji",
        "systematyczne niszczenie miasta po kapitulacji"
      ]
    },
    "explanation": "Na terenach powstańczych działały polskie instytucje i służby, podczas gdy Niemcy prowadzili brutalne działania zbrojne i terror wobec ludności cywilnej."
  },
  {
    "id": "R02_POW_09",
    "section": "Powstanie warszawskie",
    "type": "odd_one_out",
    "prompt": "Wskaż miejsce, które nie było dzielnicą lub obszarem walk powstania warszawskiego: Wola, Ochota, Starówka, Monte Cassino.",
    "options": null,
    "answer": "Monte Cassino",
    "explanation": "Monte Cassino leży we Włoszech i było miejscem walk 2 Korpusu Polskiego. Wola, Ochota i Starówka były obszarami walk w Warszawie."
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który zestaw rzek wyznaczał w 1939 r. linię graniczną niemiecko-sowiecką opisaną po traktacie o przyjaźni i granicy?",
    "options": [
      "San, Bug, Narew, Pisa",
      "Wisła, Pilica, Noteć, Warta",
      "Odra, Nysa, Bug, Niemen",
      "San, Wisła, Warta, Prosna",
      "Bug, Dniestr, Prut, Niemen",
      "Narew, Wisła, Odra, San"
    ],
    "answer": 0,
    "explanation": "Linia graniczna między okupantami przebiegała wzdłuż Sanu, Bugu, Narwi i Pisy."
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz osoby wymienione jako ofiary niemieckiej polityki wymierzonej w polskie elity.",
    "options": [
      "Maciej Rataj",
      "Janusz Kusociński",
      "Kazimierz Bartel",
      "Tadeusz Boy-Żeleński",
      "Bolesław Bierut",
      "Zygmunt Berling"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W akcjach wymierzonych w polskie elity zginęli m.in. Maciej Rataj i Janusz Kusociński w ramach akcji AB oraz Kazimierz Bartel i Tadeusz Boy-Żeleński po zajęciu Lwowa."
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Janina Antonina Lewandowska, polska lotniczka zamordowana w Katyniu, została zidentyfikowana po badaniu czaszki w 2005 r.",
    "options": null,
    "answer": true,
    "explanation": "Szczątki Janiny Antoniny Lewandowskiej wydobyto w 1943 r., a czaszkę przechowywano później w tajemnicy. W 2005 r. została zbadana, zidentyfikowana i pochowana w rodzinnym grobie."
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W kwietniu i maju 1940 r. Sowieci rozstrzelali __________ polskich jeńców oraz około __________ więźniów cywilnych.",
    "options": null,
    "answer": [
      "14 730",
      "7300"
    ],
    "altAnswers": [
      [
        "14 730",
        "14730"
      ],
      [
        "7300",
        "7 300"
      ]
    ],
    "explanation": "W ramach zbrodni katyńskiej rozstrzelano 14 730 jeńców i około 7300 więźniów cywilnych - obywateli polskich."
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz obóz polskich jeńców z miejscem egzekucji i pochówku jego więźniów.",
    "options": null,
    "left": [
      "Kozielsk",
      "Ostaszków",
      "Starobielsk"
    ],
    "right": [
      "Katyń pod Smoleńskiem",
      "Kalinin i Miednoje",
      "Charków i Piatichatki"
    ],
    "answer": {
      "Kozielsk": "Katyń pod Smoleńskiem",
      "Ostaszków": "Kalinin i Miednoje",
      "Starobielsk": "Charków i Piatichatki"
    },
    "image": "r02_katyn_cmentarz.jpg",
    "explanation": "Los jeńców z trzech głównych obozów był różny pod względem miejsca egzekucji i pochówku, ale stanowił część tej samej sowieckiej zbrodni."
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z historii Polski w latach 1939–1944 od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "podpisanie układu Sikorski-Majski",
      "wybuch powstania warszawskiego",
      "powstanie Służby Zwycięstwu Polski",
      "decyzja władz sowieckich o rozstrzelaniu polskich jeńców"
    ],
    "answer": [
      "powstanie Służby Zwycięstwu Polski",
      "decyzja władz sowieckich o rozstrzelaniu polskich jeńców",
      "podpisanie układu Sikorski-Majski",
      "wybuch powstania warszawskiego"
    ],
    "explanation": "SZP powstała 27 września 1939 r., rozkaz dotyczący zbrodni katyńskiej wydano 5 marca 1940 r., układ Sikorski-Majski podpisano 30 lipca 1941 r., a powstanie warszawskie rozpoczęło się 1 sierpnia 1944 r."
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż osobę, która nie była związana z kurierską lub specjalną łącznością Polskiego Państwa Podziemnego z Zachodem: Jan Nowak-Jeziorański, Elżbieta Zawacka, Jan Piwnik Ponury, Hans Frank.",
    "options": null,
    "answer": "Hans Frank",
    "explanation": "Hans Frank był generalnym gubernatorem okupowanych ziem polskich. Pozostałe osoby były związane z polską konspiracją, a Nowak-Jeziorański i Zawacka pełnili funkcje kurierskie lub emisariuszy; Piwnik był cichociemnym."
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W okupowanej Polsce drukuje się po niemiecku gazetki i ulotki wyglądające jak oficjalne wydawnictwa albo materiały niemieckich grup oporu. Mają ośmieszać nazistów i obniżać morale żołnierzy. Jaki kryptonim nosi ta akcja?",
    "options": [
      "akcja N",
      "akcja AB",
      "Burza",
      "akcja pod Arsenałem",
      "mały sabotaż"
    ],
    "answer": 0,
    "image": "r02_panstwo_podziemne_prasa.jpg",
    "explanation": "Była to akcja N, czyli działalność propagandowa i dezinformacyjna Polskiego Państwa Podziemnego skierowana do Niemców."
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj postacie do instytucji lub formacji, z którymi były związane.",
    "options": null,
    "items": [
      "Władysław Raczkiewicz",
      "Kazimierz Pużak",
      "Zygmunt Berling",
      "Antoni Chruściel"
    ],
    "categories": [
      "władze RP na uchodźstwie",
      "Polskie Państwo Podziemne",
      "wojsko polskie u boku Armii Czerwonej",
      "powstanie warszawskie"
    ],
    "answer": {
      "władze RP na uchodźstwie": [
        "Władysław Raczkiewicz"
      ],
      "Polskie Państwo Podziemne": [
        "Kazimierz Pużak"
      ],
      "wojsko polskie u boku Armii Czerwonej": [
        "Zygmunt Berling"
      ],
      "powstanie warszawskie": [
        "Antoni Chruściel"
      ]
    },
    "explanation": "Raczkiewicz był prezydentem na uchodźstwie, Pużak przewodniczył Radzie Jedności Narodowej, Berling dowodził 1 Dywizją Piechoty, a Chruściel był dowódcą powstania warszawskiego."
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ilu żołnierzy i cywilów łącznie ewakuowano z ZSRS przez Iran na Bliski Wschód do sierpnia 1942 r.?",
    "options": [
      "ponad 116 tys.",
      "14 730",
      "około 7300",
      "ponad 860 tys.",
      "około 200 tys.",
      "360 tys."
    ],
    "answer": 0,
    "image": "r02_armia_andersa.jpg",
    "explanation": "Do sierpnia 1942 r. z ZSRS ewakuowano przez Iran ponad 116 tys. żołnierzy i ludności cywilnej."
  },
  {
    "id": "R02_HARD_11",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz miejscowości lub obszary związane z walkami polskich formacji na Zachodzie w latach 1944-1945.",
    "options": [
      "Monte Cassino",
      "Ankona",
      "Falaise",
      "Breda",
      "Katyń",
      "Palmiry"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "2 Korpus Polski walczył m.in. pod Monte Cassino, Ankoną i Bolonią, a 1 Dywizja Pancerna pod Falaise oraz w Bredzie i Wilhelmshaven."
  },
  {
    "id": "R02_HARD_12",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż w porządku chronologicznym kolejne etapy budowy komunistycznego ośrodka politycznego i wojskowego związanego z ZSRS.",
    "options": null,
    "items": [
      "powstanie PKWN",
      "powstanie KRN",
      "powstanie Rządu Tymczasowego",
      "powstanie ZPP",
      "powstanie PPR"
    ],
    "answer": [
      "powstanie PPR",
      "powstanie ZPP",
      "powstanie KRN",
      "powstanie PKWN",
      "powstanie Rządu Tymczasowego"
    ],
    "explanation": "PPR powstała w styczniu 1942 r., ZPP w marcu 1943 r., KRN na przełomie 1943 i 1944 r., PKWN w lipcu 1944 r., a Rząd Tymczasowy w grudniu 1944 r."
  },
  {
    "id": "R02_HARD_13",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W czasie rzezi Woli Niemcy zabili około __________ osób, a całe powstanie warszawskie trwało __________ dni.",
    "options": null,
    "answer": [
      "40 tys.",
      "63"
    ],
    "altAnswers": [
      [
        "40 tys.",
        "40 tysięcy",
        "40000",
        "40 000"
      ],
      [
        "63",
        "63 dni"
      ]
    ],
    "image": "r02_powstanie_barykada.jpg",
    "explanation": "W czasie rzezi Woli zamordowano około 40 tys. ludzi. Powstanie warszawskie trwało 63 dni."
  },
  {
    "id": "R02_HARD_14",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Była jedyną kobietą wśród cichociemnych, wielokrotnie przewoziła meldunki między Warszawą a Berlinem i jako emisariuszka AK dotarła do Anglii. Podaj jej imię i nazwisko.",
    "options": null,
    "answer": "Elżbieta Zawacka",
    "altAnswers": [
      "Elżbieta Zawacka",
      "Elzbieta Zawacka",
      "Zawacka"
    ],
    "explanation": "Chodzi o Elżbietę Zawacką. Była kurierką i emisariuszką AK, a po szkoleniu wróciła do kraju jako cichociemna."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r02",
  number: 2,
  title: "Polska w latach II wojny światowej",
  icon: "🇵🇱",
  sectionOrder: [
    "Okupacja niemiecka",
    "Okupacja sowiecka",
    "Władze na uchodźstwie i Polskie Siły Zbrojne",
    "Polskie Państwo Podziemne",
    "Ziemie polskie w latach 1943-1944",
    "Powstanie warszawskie"
  ],
  sectionIcons: {
    "Okupacja niemiecka": "🪖",
    "Okupacja sowiecka": "🚂",
    "Władze na uchodźstwie i Polskie Siły Zbrojne": "🌍",
    "Polskie Państwo Podziemne": "🕵️",
    "Ziemie polskie w latach 1943-1944": "⚔️",
    "Powstanie warszawskie": "🏙️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
