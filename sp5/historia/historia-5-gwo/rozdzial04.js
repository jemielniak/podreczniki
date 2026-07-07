// Skróty sekcji:
//   BIZ = Bizancjum
//   ARA = Arabowie i początki islamu
//   KAR = Państwo Karola Wielkiego
//   NOW = Nowe państwa w Europie
//   PAP = Walka cesarza z papieżem
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_BIZ_01",
    "section": "Bizancjum",
    "type": "single_choice",
    "prompt": "Jak nazywała się stolica cesarstwa bizantyjskiego?",
    "options": [
      "Rzym",
      "Konstantynopol",
      "Ateny",
      "Aleksandria",
      "Antiochia",
      "Damaszek"
    ],
    "answer": 1,
    "explanation": "Stolicą Bizancjum był Konstantynopol, dawne Bizancjum rozbudowane przez Konstantyna Wielkiego."
  },
  {
    "id": "R04_BIZ_02",
    "section": "Bizancjum",
    "type": "true_false",
    "prompt": "W 395 roku Imperium Rzymskie podzielono na część wschodnią i zachodnią.",
    "options": null,
    "answer": true,
    "explanation": "Podział z 395 roku sprawił, że każda część imperium miała własnego cesarza."
  },
  {
    "id": "R04_BIZ_03",
    "section": "Bizancjum",
    "type": "fill_in",
    "prompt": "Zachodnie cesarstwo rzymskie upadło w roku __________, a cesarstwo bizantyjskie przetrwało do roku __________.",
    "options": null,
    "answer": [
      "476",
      "1453"
    ],
    "altAnswers": [
      [
        "476",
        "476 r.",
        "476 roku"
      ],
      [
        "1453",
        "1453 r.",
        "1453 roku"
      ]
    ],
    "explanation": "Zachodnie cesarstwo upadło w 476 roku, a Bizancjum istniało do zdobycia Konstantynopola przez Turków w 1453 roku."
  },
  {
    "id": "R04_BIZ_04",
    "section": "Bizancjum",
    "type": "single_choice",
    "prompt": "Który język zastąpił łacinę jako język używany przez Bizantyjczyków?",
    "options": [
      "greka",
      "arabski",
      "francuski",
      "hebrajski",
      "perski",
      "niemiecki"
    ],
    "answer": 0,
    "explanation": "Bizancjum było kontynuacją Rzymu, ale używano tam greki zamiast łaciny."
  },
  {
    "id": "R04_BIZ_05",
    "section": "Bizancjum",
    "type": "multi_select",
    "prompt": "Zaznacz osiągnięcia Bizancjum opisane w rozdziale.",
    "options": [
      "Kodeks Justyniana",
      "Bazylika Hagia Sophia",
      "Ikony i mozaiki",
      "Kompas magnetyczny",
      "Wyższa uczelnia w Konstantynopolu",
      "Druk ruchomą czcionką"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Do osiągnięć Bizancjum należały Kodeks Justyniana, Hagia Sophia, ikony, mozaiki i wyższa uczelnia w Konstantynopolu."
  },
  {
    "id": "R04_BIZ_06",
    "section": "Bizancjum",
    "type": "riddle",
    "prompt": "Zbiór uporządkowanego prawa rzymskiego spisany na polecenie cesarza Justyniana to...",
    "options": null,
    "answer": "Kodeks Justyniana",
    "altAnswers": [
      "Kodeks Justyniana",
      "kodeks Justyniana",
      "Codex Iustinianus"
    ],
    "explanation": "Kodeks Justyniana porządkował prawo rzymskie i później służył do nauczania prawa na uniwersytetach Europy Zachodniej."
  },
  {
    "id": "R04_BIZ_07",
    "section": "Bizancjum",
    "type": "single_choice",
    "prompt": "Która budowla jest w rozdziale przedstawiona jako najwspanialszy przykład architektury bizantyjskiej?",
    "options": [
      "Koloseum",
      "Hagia Sophia",
      "Piramida Cheopsa",
      "Partenon",
      "Bazylika św. Piotra w Rzymie",
      "Pałac Alhambra"
    ],
    "answer": 1,
    "image": "/img/r04_hagia_sophia_przekroj.jpg",
    "explanation": "Bazylika Hagia Sophia w Konstantynopolu została opisana jako najwspanialszy przykład architektury bizantyjskiej."
  },
  {
    "id": "R04_BIZ_08",
    "section": "Bizancjum",
    "type": "match",
    "prompt": "Połącz pojęcie z wyjaśnieniem.",
    "options": null,
    "left": [
      "ikona",
      "schizma",
      "patriarcha",
      "kodeks"
    ],
    "right": [
      "obraz religijny malowany według reguł",
      "rozłam w Kościele",
      "ważny dostojnik Kościoła na Wschodzie",
      "zbiór przepisów prawnych"
    ],
    "answer": {
      "ikona": "obraz religijny malowany według reguł",
      "schizma": "rozłam w Kościele",
      "patriarcha": "ważny dostojnik Kościoła na Wschodzie",
      "kodeks": "zbiór przepisów prawnych"
    },
    "image": "/img/r04_ikona_mozaika.jpg",
    "explanation": "Te pojęcia porządkują najważniejsze informacje o Bizancjum: od prawa po sztukę i rozłam Kościoła."
  },
  {
    "id": "R04_BIZ_09",
    "section": "Bizancjum",
    "type": "true_false",
    "prompt": "Justynian Wielki próbował odzyskać część ziem dawnego zachodniego cesarstwa rzymskiego.",
    "options": null,
    "answer": true,
    "explanation": "Za Justyniana Bizancjum odzyskało znaczne obszary dawnego zachodniego cesarstwa, choć po jego śmierci je utraciło."
  },
  {
    "id": "R04_BIZ_10",
    "section": "Bizancjum",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Konstantynopol, Hagia Sophia, Kodeks Justyniana, hidżra.",
    "options": null,
    "answer": "hidżra",
    "explanation": "Hidżra dotyczy początków islamu, a pozostałe hasła odnoszą się do Bizancjum."
  },
  {
    "id": "R04_BIZ_11",
    "section": "Bizancjum",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "Wielka schizma wschodnia",
      "Upadek zachodniego cesarstwa rzymskiego",
      "Podział Imperium Rzymskiego",
      "Zdobycie Konstantynopola przez Turków"
    ],
    "answer": [
      "Podział Imperium Rzymskiego",
      "Upadek zachodniego cesarstwa rzymskiego",
      "Wielka schizma wschodnia",
      "Zdobycie Konstantynopola przez Turków"
    ],
    "explanation": "Najpierw podzielono imperium w 395 roku, potem upadła część zachodnia, następnie doszło do schizmy, a na końcu Turcy zdobyli Konstantynopol."
  },
  {
    "id": "R04_BIZ_12",
    "section": "Bizancjum",
    "type": "scenario",
    "prompt": "Przybysz ogląda miasto nad Bosforem z potężnymi murami, pałacami, akweduktami i termami. W jakim mieście się znajduje?",
    "options": [
      "Konstantynopol",
      "Mekka",
      "Akwizgran",
      "Wormacja"
    ],
    "answer": 0,
    "image": "/img/r04_mury_konstantynopola.jpg",
    "explanation": "Opis pasuje do Konstantynopola, który był jedną z największych i najświetniejszych stolic średniowiecznego świata."
  },
  {
    "id": "R04_ARA_01",
    "section": "Arabowie i początki islamu",
    "type": "single_choice",
    "prompt": "Na którym obszarze mieszkali dawni Arabowie opisani w rozdziale?",
    "options": [
      "Półwysep Arabski",
      "Półwysep Apeniński",
      "Półwysep Iberyjski",
      "Skandynawia",
      "Azja Mniejsza",
      "Galia"
    ],
    "answer": 0,
    "image": "/img/r04_karawana_arabska.jpg",
    "explanation": "Dawni Arabowie zamieszkiwali pustynny Półwysep Arabski w południowo-zachodniej Azji."
  },
  {
    "id": "R04_ARA_02",
    "section": "Arabowie i początki islamu",
    "type": "true_false",
    "prompt": "Przed islamem plemiona arabskie wyznawały politeizm.",
    "options": null,
    "answer": true,
    "explanation": "Każde plemię miało własnych bożków, a wspólną świętością Arabów był Czarny Kamień w Al-Kabie."
  },
  {
    "id": "R04_ARA_03",
    "section": "Arabowie i początki islamu",
    "type": "riddle",
    "prompt": "Przeniesienie się Mahometa z Mekki do Medyny w 622 roku to...",
    "options": null,
    "answer": "hidżra",
    "altAnswers": [
      "hidżra",
      "Hidżra",
      "hidzra",
      "Hidzra"
    ],
    "explanation": "Hidżra stała się dla muzułmanów początkiem nowej ery."
  },
  {
    "id": "R04_ARA_04",
    "section": "Arabowie i początki islamu",
    "type": "multi_select",
    "prompt": "Zaznacz elementy należące do pięciu filarów islamu.",
    "options": [
      "Publiczne wyznanie wiary",
      "Modlitwa pięć razy dziennie",
      "Jałmużna",
      "Post w ramadanie",
      "Pielgrzymka do Mekki",
      "Inwestytura biskupów"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Pięć filarów islamu obejmuje wyznanie wiary, modlitwę, jałmużnę, post w ramadanie i pielgrzymkę do Mekki."
  },
  {
    "id": "R04_ARA_05",
    "section": "Arabowie i początki islamu",
    "type": "fill_in",
    "prompt": "Mahomet urodził się około __________ roku w mieście __________.",
    "options": null,
    "answer": [
      "570",
      "Mekka"
    ],
    "altAnswers": [
      [
        "570",
        "ok. 570",
        "około 570"
      ],
      [
        "Mekka",
        "Mekce",
        "Mekki"
      ]
    ],
    "explanation": "Mahomet urodził się około 570 roku w Mekce."
  },
  {
    "id": "R04_ARA_06",
    "section": "Arabowie i początki islamu",
    "type": "single_choice",
    "prompt": "Jak nazywa się święta księga muzułmanów?",
    "options": [
      "Koran",
      "Biblia",
      "Tora",
      "Kodeks Justyniana",
      "Ewangelia",
      "Reguła benedyktyńska"
    ],
    "answer": 0,
    "image": "/img/r04_strona_koranu.jpg",
    "explanation": "Koran jest świętą księgą islamu, według wierzeń muzułmanów przekazaną Mahometowi przez archanioła Gabriela."
  },
  {
    "id": "R04_ARA_07",
    "section": "Arabowie i początki islamu",
    "type": "match",
    "prompt": "Połącz pojęcie z objaśnieniem.",
    "options": null,
    "left": [
      "islam",
      "kalif",
      "Koran",
      "dżihad"
    ],
    "right": [
      "poddanie się woli Boga",
      "zastępca proroka",
      "święta księga muzułmanów",
      "święta wojna"
    ],
    "answer": {
      "islam": "poddanie się woli Boga",
      "kalif": "zastępca proroka",
      "Koran": "święta księga muzułmanów",
      "dżihad": "święta wojna"
    },
    "explanation": "Pojęcia te opisują podstawowe elementy początków islamu i państwa arabskiego."
  },
  {
    "id": "R04_ARA_08",
    "section": "Arabowie i początki islamu",
    "type": "single_choice",
    "prompt": "Dlaczego zamożni mieszkańcy Mekki byli wrogo nastawieni do islamu?",
    "options": [
      "Bali się utraty pielgrzymów i zysków z Al-Kaby",
      "Chcieli przenieść stolicę do Konstantynopola",
      "Nie znali języka greckiego",
      "Popierali cesarza Ottona I",
      "Chcieli wstąpić do zakonu",
      "Bronili Longobardów"
    ],
    "answer": 0,
    "image": "/img/r04_al_kaba_mekka.jpg",
    "explanation": "Obawiali się, że jeśli Mahomet zniszczy Al-Kabę, do miasta przestaną przybywać pielgrzymi i ich pieniądze."
  },
  {
    "id": "R04_ARA_09",
    "section": "Arabowie i początki islamu",
    "type": "true_false",
    "prompt": "Po śmierci Mahometa przywódcę państwa arabskiego nazywano kalifem.",
    "options": null,
    "answer": true,
    "explanation": "Kalif oznaczał zastępcę proroka i stał na czele państwa po śmierci Mahometa."
  },
  {
    "id": "R04_ARA_10",
    "section": "Arabowie i początki islamu",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do właściwych religii lub kręgów kulturowych.",
    "options": null,
    "items": [
      "Koran",
      "pięć filarów",
      "Stary i Nowy Testament",
      "Jezus jako Syn Boga",
      "Mekka",
      "judaizm i chrześcijaństwo jako wcześniejsze religie monoteistyczne"
    ],
    "categories": [
      "islam",
      "wcześniejsze religie monoteistyczne"
    ],
    "answer": {
      "islam": [
        "Koran",
        "pięć filarów",
        "Mekka"
      ],
      "wcześniejsze religie monoteistyczne": [
        "Stary i Nowy Testament",
        "Jezus jako Syn Boga",
        "judaizm i chrześcijaństwo jako wcześniejsze religie monoteistyczne"
      ]
    },
    "explanation": "Rozdział pokazuje zarówno elementy islamu, jak i wpływy chrześcijaństwa oraz judaizmu w nauczaniu Mahometa."
  },
  {
    "id": "R04_ARA_11",
    "section": "Arabowie i początki islamu",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z życia Mahometa i początków islamu w kolejności.",
    "options": null,
    "items": [
      "Hidżra do Medyny",
      "Narodziny Mahometa",
      "Pierwsze objawienie według tradycji arabskiej",
      "Zjednoczenie plemion arabskich przez Mahometa"
    ],
    "answer": [
      "Narodziny Mahometa",
      "Pierwsze objawienie według tradycji arabskiej",
      "Hidżra do Medyny",
      "Zjednoczenie plemion arabskich przez Mahometa"
    ],
    "explanation": "Mahomet urodził się około 570 roku, około czterdziestego roku życia miał doznać objawienia, w 622 roku odbyła się hidżra, a przed śmiercią zjednoczył większość Półwyspu Arabskiego wokół islamu."
  },
  {
    "id": "R04_ARA_12",
    "section": "Arabowie i początki islamu",
    "type": "scenario",
    "prompt": "Uczeń wyjaśnia, że Europejczycy przejęli od świata arabskiego cyfry, wiele słów oraz korzystali z arabskich tłumaczeń antycznych dzieł. O czym mówi?",
    "options": [
      "O wpływie cywilizacji arabskiej na Europę",
      "O reformie kluniackiej",
      "O podziale państwa Franków",
      "O ugodzie w Wormacji"
    ],
    "answer": 0,
    "explanation": "Rozdział opisuje wpływ cywilizacji arabskiej na Europę przez naukę, handel, tłumaczenia i zapożyczenia językowe."
  },
  {
    "id": "R04_KAR_01",
    "section": "Państwo Karola Wielkiego",
    "type": "single_choice",
    "prompt": "Kim byli Frankowie?",
    "options": [
      "plemieniem germańskim",
      "arabskimi kupcami",
      "bizantyjskimi duchownymi",
      "normańskimi piratami",
      "słowiańskimi rolnikami",
      "rzymskimi senatorami"
    ],
    "answer": 0,
    "explanation": "Frankowie byli plemieniem germańskim, które w V wieku utworzyło własne państwo w północno-wschodniej Galii."
  },
  {
    "id": "R04_KAR_02",
    "section": "Państwo Karola Wielkiego",
    "type": "multi_select",
    "prompt": "Dlaczego Chlodwig zdecydował się przyjąć chrzest?",
    "options": [
      "Potrzebował galijskich duchownych jako urzędników",
      "Chciał połączyć Franków z chrześcijańską ludnością Galii",
      "Uważał, że chrześcijaństwo lepiej tłumaczy świat",
      "Chciał zostać kalifem",
      "Pragnął zdobyć Mekkę",
      "Zamierzał zbudować Hagia Sophię"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Chlodwig potrzebował pomocy duchownych w rządach, chciał połączyć Franków z ludnością Galii i uznał, że chrześcijaństwo lepiej tłumaczy świat."
  },
  {
    "id": "R04_KAR_03",
    "section": "Państwo Karola Wielkiego",
    "type": "fill_in",
    "prompt": "Pepin Krótki przekazał papieżowi ziemie w środkowej Italii w roku __________, tworząc __________.",
    "options": null,
    "answer": [
      "756",
      "Państwo Kościelne"
    ],
    "altAnswers": [
      [
        "756",
        "756 r.",
        "756 roku"
      ],
      [
        "Państwo Kościelne",
        "Panstwo Koscielne",
        "Państwa Kościelnego"
      ]
    ],
    "explanation": "Po pokonaniu Longobardów Pepin Krótki przekazał papieżowi ziemie w 756 roku, co dało początek Państwu Kościelnemu."
  },
  {
    "id": "R04_KAR_04",
    "section": "Państwo Karola Wielkiego",
    "type": "true_false",
    "prompt": "Pepin Krótki sam ogłosił się królem po usunięciu z tronu ostatniego potomka Chlodwiga.",
    "options": null,
    "answer": true,
    "explanation": "Pepin Krótki przejął władzę, usuwając ostatniego potomka Chlodwiga i rozpoczynając rządy nowej dynastii."
  },
  {
    "id": "R04_KAR_05",
    "section": "Państwo Karola Wielkiego",
    "type": "single_choice",
    "prompt": "Kiedy Karol Wielki został koronowany na cesarza Rzymian?",
    "options": [
      "476",
      "622",
      "756",
      "800",
      "843",
      "962"
    ],
    "answer": 3,
    "image": "/img/r04_koronacja_karola_wielkiego.jpg",
    "explanation": "Papież koronował Karola Wielkiego w Boże Narodzenie 800 roku w Bazylice św. Piotra w Rzymie."
  },
  {
    "id": "R04_KAR_06",
    "section": "Państwo Karola Wielkiego",
    "type": "match",
    "prompt": "Połącz władcę z działaniem.",
    "options": null,
    "left": [
      "Chlodwig",
      "Pepin Krótki",
      "Karol Wielki",
      "papież"
    ],
    "right": [
      "przyjął chrzest i schrystianizował państwo Franków",
      "utworzył Państwo Kościelne, przekazując ziemie papieżowi",
      "został koronowany na cesarza w 800 roku",
      "koronował cesarzy i uznał władzę Pepina"
    ],
    "answer": {
      "Chlodwig": "przyjął chrzest i schrystianizował państwo Franków",
      "Pepin Krótki": "utworzył Państwo Kościelne, przekazując ziemie papieżowi",
      "Karol Wielki": "został koronowany na cesarza w 800 roku",
      "papież": "koronował cesarzy i uznał władzę Pepina"
    },
    "explanation": "Chlodwig, Pepin Krótki i Karol Wielki odegrali różne role w rozwoju państwa Franków."
  },
  {
    "id": "R04_KAR_07",
    "section": "Państwo Karola Wielkiego",
    "type": "single_choice",
    "prompt": "Które miasto było ulubionym miejscem pobytu Karola Wielkiego?",
    "options": [
      "Akwizgran",
      "Konstantynopol",
      "Mekka",
      "Medyna",
      "Wormacja",
      "Canossa"
    ],
    "answer": 0,
    "image": "/img/r04_akwizgran_kaplica.jpg",
    "explanation": "Karol Wielki nie miał stałej stolicy, ale szczególnie lubił przebywać w Akwizgranie."
  },
  {
    "id": "R04_KAR_08",
    "section": "Państwo Karola Wielkiego",
    "type": "true_false",
    "prompt": "Imperium Karolińskie miało stałą stolicę w Rzymie.",
    "options": null,
    "answer": false,
    "explanation": "Karol Wielki przenosił się z dworem z miejsca na miejsce, a imperium nie miało stałej stolicy."
  },
  {
    "id": "R04_KAR_09",
    "section": "Państwo Karola Wielkiego",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do starożytnego cesarstwa rzymskiego albo Imperium Karolińskiego.",
    "options": null,
    "items": [
      "stolicą był Rzym",
      "nie miało stałej stolicy",
      "urzędnikami byli głównie Germanie",
      "obejmowało ziemie wokół Morza Śródziemnego",
      "łączyło tradycje rzymskie, germańskie i chrześcijańskie",
      "cesarz był także najwyższym kapłanem"
    ],
    "categories": [
      "starożytne cesarstwo rzymskie",
      "Imperium Karolińskie"
    ],
    "answer": {
      "starożytne cesarstwo rzymskie": [
        "stolicą był Rzym",
        "obejmowało ziemie wokół Morza Śródziemnego",
        "cesarz był także najwyższym kapłanem"
      ],
      "Imperium Karolińskie": [
        "nie miało stałej stolicy",
        "urzędnikami byli głównie Germanie",
        "łączyło tradycje rzymskie, germańskie i chrześcijańskie"
      ]
    },
    "explanation": "Imperium Karolińskie różniło się od starożytnego Rzymu zasięgiem, stolicą i rolą duchowieństwa."
  },
  {
    "id": "R04_KAR_10",
    "section": "Państwo Karola Wielkiego",
    "type": "single_choice",
    "prompt": "Na czym polegało odrodzenie karolińskie?",
    "options": [
      "na odrodzeniu kultury i edukacji za Karola Wielkiego",
      "na podboju Mekki przez Franków",
      "na rozłamie Kościoła wschodniego i zachodniego",
      "na ugodzie papieża z cesarzem w Wormacji",
      "na przejściu Bizancjum na islam",
      "na podziale Arabów na kalifaty"
    ],
    "answer": 0,
    "explanation": "Odrodzenie karolińskie oznaczało ożywienie kultury i edukacji za Karola Wielkiego, między innymi przez szkołę pałacową i przepisywanie ksiąg."
  },
  {
    "id": "R04_KAR_11",
    "section": "Państwo Karola Wielkiego",
    "type": "riddle",
    "prompt": "Zakonnika ręcznie przepisującego księgi w średniowieczu nazywano...",
    "options": null,
    "answer": "kopista",
    "altAnswers": [
      "kopista",
      "kopistą",
      "kopisci",
      "kopiści"
    ],
    "explanation": "Kopiści przepisywali księgi, dzięki czemu antyczne teksty mogły trafić do klasztornych bibliotek."
  },
  {
    "id": "R04_KAR_12",
    "section": "Państwo Karola Wielkiego",
    "type": "scenario",
    "prompt": "Władca sprowadza uczonych na dwór, zakłada szkołę pałacową i każe rozsyłać kopie antycznych ksiąg do klasztorów. Jak nazywamy to zjawisko?",
    "options": [
      "odrodzenie karolińskie",
      "wielka schizma wschodnia",
      "hidżra",
      "reforma kluniacka"
    ],
    "answer": 0,
    "explanation": "Tak opisane działania Karola Wielkiego tworzą odrodzenie karolińskie."
  },
  {
    "id": "R04_NOW_01",
    "section": "Nowe państwa w Europie",
    "type": "multi_select",
    "prompt": "Dlaczego Imperium Karolińskie osłabło po śmierci Karola Wielkiego?",
    "options": [
      "Różne języki i kultury plemion w imperium",
      "Walki potomków Karola Wielkiego o władzę",
      "Możnowładcy tworzący własne księstwa",
      "Natychmiastowy podbój przez Bizancjum",
      "Zakaz używania łaciny",
      "Zniszczenie Akwizgranu przez Arabów"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Imperium osłabło przez różnorodność plemion, walki potomków Karola o władzę i usamodzielnianie się możnowładców."
  },
  {
    "id": "R04_NOW_02",
    "section": "Nowe państwa w Europie",
    "type": "single_choice",
    "prompt": "Co postanowiono w traktacie w Verdun w 843 roku?",
    "options": [
      "podział Imperium Karolińskiego na trzy królestwa",
      "koronację Ottona I na cesarza",
      "przeniesienie Mahometa do Medyny",
      "utworzenie Państwa Kościelnego",
      "wybór papieża przez konklawe",
      "zawarcie ugody w Wormacji"
    ],
    "answer": 0,
    "image": "/img/r04_podzial_panstwa_frankow.jpg",
    "explanation": "Traktat w Verdun podzielił imperium Karola Wielkiego na trzy królestwa."
  },
  {
    "id": "R04_NOW_03",
    "section": "Nowe państwa w Europie",
    "type": "match",
    "prompt": "Połącz część podziału z późniejszym skutkiem.",
    "options": null,
    "left": [
      "państwo Karola Łysego",
      "państwo Ludwika Niemieckiego",
      "państwo Lotara",
      "Verdun"
    ],
    "right": [
      "późniejsza Francja",
      "późniejsze Niemcy",
      "królestwo środkowe, którego władca był też cesarzem",
      "miejsce podpisania traktatu z 843 roku"
    ],
    "answer": {
      "państwo Karola Łysego": "późniejsza Francja",
      "państwo Ludwika Niemieckiego": "późniejsze Niemcy",
      "państwo Lotara": "królestwo środkowe, którego władca był też cesarzem",
      "Verdun": "miejsce podpisania traktatu z 843 roku"
    },
    "explanation": "Traktat w Verdun zapoczątkował powstanie późniejszej Francji i Niemiec oraz osobnego królestwa środkowego."
  },
  {
    "id": "R04_NOW_04",
    "section": "Nowe państwa w Europie",
    "type": "true_false",
    "prompt": "Możnowładcy po śmierci Karola Wielkiego zaczęli przekazywać urzędy i ziemie swoim synom.",
    "options": null,
    "answer": true,
    "explanation": "Tak powstały dziedziczne księstwa, których władcy byli w praktyce coraz bardziej niezależni."
  },
  {
    "id": "R04_NOW_05",
    "section": "Nowe państwa w Europie",
    "type": "sort",
    "prompt": "Przyporządkuj najeźdźców do informacji.",
    "options": null,
    "items": [
      "wypływali z Norwegii, Danii i Szwecji",
      "nazywani też wikingami",
      "pokonani przez Ottona I na Lechowym Polu",
      "atakowali wybrzeża Włoch i południowej Francji",
      "po klęsce założyli Królestwo Węgier",
      "zapuszczali się w górę rzek"
    ],
    "categories": [
      "Normanowie",
      "Węgrzy",
      "arabscy piraci"
    ],
    "answer": {
      "Normanowie": [
        "wypływali z Norwegii, Danii i Szwecji",
        "nazywani też wikingami",
        "zapuszczali się w górę rzek"
      ],
      "Węgrzy": [
        "pokonani przez Ottona I na Lechowym Polu",
        "po klęsce założyli Królestwo Węgier"
      ],
      "arabscy piraci": [
        "atakowali wybrzeża Włoch i południowej Francji"
      ]
    },
    "explanation": "W IX i X wieku Europę Zachodnią pustoszyli Normanowie, Węgrzy i arabscy piraci."
  },
  {
    "id": "R04_NOW_06",
    "section": "Nowe państwa w Europie",
    "type": "fill_in",
    "prompt": "Węgrzy zostali pokonani przez króla Niemiec Ottona I w bitwie na __________ w roku __________.",
    "options": null,
    "answer": [
      "Lechowym Polu",
      "955"
    ],
    "altAnswers": [
      [
        "Lechowym Polu",
        "Lechowym Polu.",
        "Lechowe Pole"
      ],
      [
        "955",
        "955 r.",
        "955 roku"
      ]
    ],
    "explanation": "Najazdy Węgrów zakończyła klęska zadana im przez Ottona I na Lechowym Polu w 955 roku."
  },
  {
    "id": "R04_NOW_07",
    "section": "Nowe państwa w Europie",
    "type": "single_choice",
    "prompt": "Jaką późniejszą nazwę otrzymało odnowione w 962 roku cesarstwo Ottona I?",
    "options": [
      "Święte Cesarstwo Rzymskie",
      "Imperium Osmańskie",
      "Kalifat Kordobański",
      "Cesarstwo Bizantyjskie",
      "Państwo Kościelne",
      "Królestwo Galii"
    ],
    "answer": 0,
    "image": "/img/r04_otton_i_koronacja.jpg",
    "explanation": "Po koronacji Ottona I powstało odnowione cesarstwo, później nazwane Świętym Cesarstwem Rzymskim."
  },
  {
    "id": "R04_NOW_08",
    "section": "Nowe państwa w Europie",
    "type": "true_false",
    "prompt": "Otton I wzmacniał władzę, nadając urzędy i księstwa duchownym, którzy nie mogli przekazywać ich synom.",
    "options": null,
    "answer": true,
    "explanation": "Duchowni nie zakładali rodzin, więc po ich śmierci urzędy i ziemie wracały do króla."
  },
  {
    "id": "R04_NOW_09",
    "section": "Nowe państwa w Europie",
    "type": "single_choice",
    "prompt": "Które państwa słowiańskie przyjęły chrzest w X wieku według rozdziału?",
    "options": [
      "Czechy, państwo Polan i Ruś Kijowska",
      "Hiszpania, Egipt i Syria",
      "Norwegia, Dania i Szwecja",
      "Galia, Italia i Afryka",
      "Mekka, Medyna i Damaszek",
      "Bawaria, Saksonia i Lotaryngia"
    ],
    "answer": 0,
    "explanation": "W X wieku chrzest przyjęły Czechy, państwo Polan oraz Ruś Kijowska."
  },
  {
    "id": "R04_NOW_10",
    "section": "Nowe państwa w Europie",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Normanowie, Węgrzy, arabscy piraci, kardynałowie.",
    "options": null,
    "answer": "kardynałowie",
    "explanation": "Normanowie, Węgrzy i arabscy piraci byli najeźdźcami pustoszącymi Europę, a kardynałowie to dostojnicy Kościoła."
  },
  {
    "id": "R04_NOW_11",
    "section": "Nowe państwa w Europie",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "Koronacja Ottona I na cesarza",
      "Śmierć Karola Wielkiego",
      "Bitwa na Lechowym Polu",
      "Traktat w Verdun"
    ],
    "answer": [
      "Śmierć Karola Wielkiego",
      "Traktat w Verdun",
      "Bitwa na Lechowym Polu",
      "Koronacja Ottona I na cesarza"
    ],
    "explanation": "Po śmierci Karola w 814 roku nastąpił traktat w Verdun w 843 roku, potem bitwa na Lechowym Polu w 955 roku i koronacja Ottona I w 962 roku."
  },
  {
    "id": "R04_NOW_12",
    "section": "Nowe państwa w Europie",
    "type": "scenario",
    "prompt": "Książę z X wieku przyjmuje chrzest, bo chce wzmocnić swoje państwo i wejść do świata chrześcijańskich władców. Która grupa państw pasuje do takiego procesu w rozdziale?",
    "options": [
      "Czechy, państwo Polan i Ruś Kijowska",
      "Państwo Lotara, Kalifat Kordobański i Mekka",
      "Bizancjum, Italia i Afryka Północna",
      "Norwegia, Dania i Szwecja"
    ],
    "answer": 0,
    "explanation": "Rozdział podaje, że w X wieku chrzest przyjęły słowiańskie Czechy, państwo Polan oraz Ruś Kijowska."
  },
  {
    "id": "R04_PAP_01",
    "section": "Walka cesarza z papieżem",
    "type": "single_choice",
    "prompt": "Co oznaczała inwestytura biskupa w cesarstwie?",
    "options": [
      "wprowadzenie biskupa na urząd przez wręczenie oznak władzy",
      "wygnanie króla z państwa",
      "podział imperium na trzy części",
      "przeniesienie stolicy do Medyny",
      "ręczne przepisywanie ksiąg",
      "obowiązek pielgrzymki do Mekki"
    ],
    "answer": 0,
    "explanation": "Inwestytura polegała na wprowadzeniu biskupa na urząd przez wręczenie mu oznak władzy, takich jak pierścień i pastorał."
  },
  {
    "id": "R04_PAP_02",
    "section": "Walka cesarza z papieżem",
    "type": "multi_select",
    "prompt": "Dlaczego w średniowieczu trudno było oddzielić władzę duchowną od świeckiej?",
    "options": [
      "Papież był władcą Państwa Kościelnego",
      "Cesarz nadawał ziemie i urzędy duchownym",
      "Duchowni podlegali cesarzowi jako urzędnicy i papieżowi jako księża",
      "Kalif wybierał papieży",
      "Konstantynopol leżał nad Bosforem",
      "Normanowie używali długich łodzi"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Papież był jednocześnie władcą Państwa Kościelnego, a cesarz nadawał ziemie i urzędy duchownym w cesarstwie."
  },
  {
    "id": "R04_PAP_03",
    "section": "Walka cesarza z papieżem",
    "type": "true_false",
    "prompt": "W X wieku papieże byli całkowicie niezależni od cesarzy.",
    "options": null,
    "answer": false,
    "explanation": "W X wieku przewagę miał cesarz, a papieże musieli składać mu przysięgę wierności."
  },
  {
    "id": "R04_PAP_04",
    "section": "Walka cesarza z papieżem",
    "type": "riddle",
    "prompt": "Zgromadzenie kardynałów wybierające papieża to...",
    "options": null,
    "answer": "konklawe",
    "altAnswers": [
      "konklawe",
      "Konklawe"
    ],
    "explanation": "Dokument papieski z 1059 roku przekazał wybór papieża konklawe, czyli zgromadzeniu kardynałów."
  },
  {
    "id": "R04_PAP_05",
    "section": "Walka cesarza z papieżem",
    "type": "fill_in",
    "prompt": "Reforma Kościoła rozpoczęta w klasztorze w __________ nazywa się reformą __________.",
    "options": null,
    "answer": [
      "Cluny",
      "kluniacką"
    ],
    "altAnswers": [
      [
        "Cluny",
        "cluny",
        "Kluni"
      ],
      [
        "kluniacką",
        "kluniacka",
        "reformą kluniacką"
      ]
    ],
    "explanation": "Reforma kluniacka rozpoczęła się w klasztorze Benedyktynów w Cluny i dążyła między innymi do odnowy życia zakonnego."
  },
  {
    "id": "R04_PAP_06",
    "section": "Walka cesarza z papieżem",
    "type": "single_choice",
    "prompt": "Który papież był głównym przeciwnikiem Henryka IV w sporze o inwestyturę?",
    "options": [
      "Grzegorz VII",
      "Leon III",
      "Urban II",
      "Innocenty III",
      "Sylwester II",
      "Bonifacy VIII"
    ],
    "answer": 0,
    "image": "/img/r04_grzegorz_vii.jpg",
    "explanation": "Spór o inwestyturę rozegrał się między królem Henrykiem IV a papieżem Grzegorzem VII."
  },
  {
    "id": "R04_PAP_07",
    "section": "Walka cesarza z papieżem",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia sporu Henryka IV z Grzegorzem VII w kolejności.",
    "options": null,
    "items": [
      "Henryk IV ukorzył się w Canossie",
      "Henryk IV i biskupi uznali wybór papieża za nieważny",
      "Grzegorz VII rzucił klątwę na Henryka IV",
      "Wojska Henryka IV zdobyły Rzym"
    ],
    "answer": [
      "Henryk IV i biskupi uznali wybór papieża za nieważny",
      "Grzegorz VII rzucił klątwę na Henryka IV",
      "Henryk IV ukorzył się w Canossie",
      "Wojska Henryka IV zdobyły Rzym"
    ],
    "image": "/img/r04_canossa_henryk_iv.jpg",
    "explanation": "Najpierw podważono wybór papieża, potem Grzegorz VII rzucił klątwę, Henryk IV ukorzył się w Canossie, a później ponownie podjął walkę i zdobył Rzym."
  },
  {
    "id": "R04_PAP_08",
    "section": "Walka cesarza z papieżem",
    "type": "single_choice",
    "prompt": "Co wydarzyło się w Canossie w 1077 roku?",
    "options": [
      "Henryk IV ukorzył się przed papieżem i uzyskał zdjęcie klątwy",
      "Karol Wielki został koronowany na cesarza",
      "Mahomet przeniósł się do Medyny",
      "Justynian ogłosił kodeks",
      "Otton I pokonał Węgrów",
      "Pepin utworzył Państwo Kościelne"
    ],
    "answer": 0,
    "explanation": "Henryk IV stał pod murami zamku w Canossie i uzyskał od papieża zdjęcie klątwy."
  },
  {
    "id": "R04_PAP_09",
    "section": "Walka cesarza z papieżem",
    "type": "match",
    "prompt": "Połącz wydarzenie lub dokument ze skutkiem.",
    "options": null,
    "left": [
      "dokument z 1059 roku",
      "klątwa Grzegorza VII",
      "Canossa",
      "ugoda w Wormacji"
    ],
    "right": [
      "wybór papieża przez konklawe i koniec przysięgi wobec cesarza",
      "zagrożenie utratą władzy przez Henryka IV",
      "zdjęcie klątwy z Henryka IV",
      "kompromis papieża i cesarza w sprawie inwestytury"
    ],
    "answer": {
      "dokument z 1059 roku": "wybór papieża przez konklawe i koniec przysięgi wobec cesarza",
      "klątwa Grzegorza VII": "zagrożenie utratą władzy przez Henryka IV",
      "Canossa": "zdjęcie klątwy z Henryka IV",
      "ugoda w Wormacji": "kompromis papieża i cesarza w sprawie inwestytury"
    },
    "explanation": "Najważniejsze etapy sporu dotyczyły wyboru papieża, inwestytury oraz kompromisu w Wormacji."
  },
  {
    "id": "R04_PAP_10",
    "section": "Walka cesarza z papieżem",
    "type": "multi_select",
    "prompt": "Które postanowienia należały do ugody w Wormacji z 1122 roku?",
    "options": [
      "Biskupów mieli wybierać uprawnieni księża",
      "Cesarz zrezygnował z inwestytury przez pierścień i pastorał",
      "W Niemczech cesarz mógł rozstrzygać spory między kandydatami",
      "Papież miał przenieść stolicę do Akwizgranu",
      "Henryk IV miał zostać kalifem",
      "Bizancjum miało oddać Konstantynopol"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "/img/r04_katedra_wormacja.jpg",
    "explanation": "Ugoda w Wormacji była kompromisem: biskupów wybierali uprawnieni księża, cesarz zrezygnował z wręczania pierścienia i pastorału, ale w Niemczech zachował wpływ na spory między kandydatami."
  },
  {
    "id": "R04_PAP_11",
    "section": "Walka cesarza z papieżem",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: pierścień, pastorał, inwestytura, hidżra.",
    "options": null,
    "answer": "hidżra",
    "explanation": "Hidżra należy do historii islamu, a pozostałe hasła dotyczą inwestytury biskupów."
  },
  {
    "id": "R04_PAP_12",
    "section": "Walka cesarza z papieżem",
    "type": "scenario",
    "prompt": "Cesarz chce sam wskazywać biskupów, bo są jego urzędnikami, a papież twierdzi, że tylko on ma takie prawo. Jaki spór opisuje ta sytuacja?",
    "options": [
      "spór o inwestyturę",
      "wielką schizmę wschodnią",
      "traktat w Verdun",
      "hidżrę",
      "odrodzenie karolińskie",
      "podboje Arabów"
    ],
    "answer": 0,
    "explanation": "Sytuacja opisuje spór o inwestyturę między cesarstwem a papiestwem."
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz datę z wydarzeniem.",
    "options": null,
    "left": [
      "395",
      "476",
      "622",
      "800",
      "843",
      "962"
    ],
    "right": [
      "podział Imperium Rzymskiego",
      "upadek zachodniego cesarstwa rzymskiego",
      "hidżra",
      "koronacja Karola Wielkiego",
      "traktat w Verdun",
      "koronacja Ottona I"
    ],
    "answer": {
      "395": "podział Imperium Rzymskiego",
      "476": "upadek zachodniego cesarstwa rzymskiego",
      "622": "hidżra",
      "800": "koronacja Karola Wielkiego",
      "843": "traktat w Verdun",
      "962": "koronacja Ottona I"
    },
    "explanation": "Daty z rozdziału wyznaczają najważniejsze punkty dziejów wczesnego średniowiecza."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj skutki do wydarzeń.",
    "options": null,
    "items": [
      "powstanie późniejszej Francji i Niemiec",
      "początek ery muzułmańskiej",
      "odnowienie zachodniego cesarstwa rzymskiego przez Franków",
      "kompromis w sprawie inwestytury",
      "podział Kościoła na katolicki i prawosławny",
      "utworzenie Państwa Kościelnego"
    ],
    "categories": [
      "traktat w Verdun",
      "hidżra",
      "koronacja Karola Wielkiego",
      "ugoda w Wormacji",
      "wielka schizma wschodnia",
      "darowizna Pepina"
    ],
    "answer": {
      "traktat w Verdun": [
        "powstanie późniejszej Francji i Niemiec"
      ],
      "hidżra": [
        "początek ery muzułmańskiej"
      ],
      "koronacja Karola Wielkiego": [
        "odnowienie zachodniego cesarstwa rzymskiego przez Franków"
      ],
      "ugoda w Wormacji": [
        "kompromis w sprawie inwestytury"
      ],
      "wielka schizma wschodnia": [
        "podział Kościoła na katolicki i prawosławny"
      ],
      "darowizna Pepina": [
        "utworzenie Państwa Kościelnego"
      ]
    },
    "explanation": "Każde z tych wydarzeń wywołało inne skutki polityczne lub religijne opisane w rozdziale."
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które zestawienie najlepiej pokazuje różnicę między Bizancjum a Imperium Karolińskim?",
    "options": [
      "Bizancjum: Konstantynopol i greka; Imperium Karolińskie: państwo Franków bez stałej stolicy",
      "Bizancjum: Mekka i arabski; Imperium Karolińskie: Medyna i islam",
      "Bizancjum: państwo Chlodwiga; Imperium Karolińskie: kalifat",
      "Bizancjum: traktat w Verdun; Imperium Karolińskie: Kodeks Justyniana"
    ],
    "answer": 0,
    "explanation": "Bizancjum było kontynuacją wschodniego cesarstwa rzymskiego ze stolicą w Konstantynopolu i językiem greckim, a Imperium Karolińskie było zachodnim państwem Franków bez stałej stolicy."
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Władca chce osłabić świeckich możnowładców, więc przekazuje urzędy duchownym, ponieważ po ich śmierci nie odziedziczą ich dzieci. Kto zastosował taką metodę?",
    "options": [
      "Otton I",
      "Justynian Wielki",
      "Mahomet",
      "Chlodwig",
      "Lotar",
      "Grzegorz VII"
    ],
    "answer": 0,
    "explanation": "Otton I nadawał urzędy i księstwa duchownym, żeby po ich śmierci wracały do króla."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Wielka schizma wschodnia rozpoczęła się w roku __________ i podzieliła Kościół na __________ oraz __________.",
    "options": null,
    "answer": [
      "1054",
      "prawosławny",
      "katolicki"
    ],
    "altAnswers": [
      [
        "1054",
        "1054 r.",
        "1054 roku"
      ],
      [
        "prawosławny",
        "Prawosławny",
        "Kościół Prawosławny"
      ],
      [
        "katolicki",
        "Katolicki",
        "Kościół Katolicki"
      ]
    ],
    "explanation": "W 1054 roku doszło do rozłamu chrześcijaństwa na Kościół prawosławny i katolicki."
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Ugoda w Wormacji całkowicie odebrała cesarzowi wpływ na wybór biskupów w Niemczech.",
    "options": null,
    "answer": false,
    "explanation": "Ugoda ograniczyła inwestyturę cesarską, ale w Niemczech cesarz nadal mógł rozstrzygać spory między kandydatami."
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż daty od najwcześniejszej do najpóźniejszej.",
    "options": null,
    "items": [
      "1054",
      "622",
      "1453",
      "395",
      "843",
      "800",
      "1122",
      "476",
      "962"
    ],
    "answer": [
      "395",
      "476",
      "622",
      "800",
      "843",
      "962",
      "1054",
      "1122",
      "1453"
    ],
    "explanation": "Kolejność dat to: 395, 476, 622, 800, 843, 962, 1054, 1122, 1453."
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Chlodwig, Pepin Krótki, Karol Wielki, Mahomet.",
    "options": null,
    "answer": "Mahomet",
    "explanation": "Chlodwig, Pepin Krótki i Karol Wielki byli władcami Franków, a Mahomet był prorokiem islamu i twórcą państwa arabskiego."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r04",
  number: 4,
  title: "Czasy średniowiecza",
  icon: "🏰",
  sectionOrder: [
  "Bizancjum",
  "Arabowie i początki islamu",
  "Państwo Karola Wielkiego",
  "Nowe państwa w Europie",
  "Walka cesarza z papieżem",
  "Super trudne"
],
  sectionIcons: {
  "Bizancjum": "🏛️",
  "Arabowie i początki islamu": "🌙",
  "Państwo Karola Wielkiego": "👑",
  "Nowe państwa w Europie": "🗺️",
  "Walka cesarza z papieżem": "⚔️",
  "Super trudne": "🔥"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
