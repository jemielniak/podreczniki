// Rozdział 5: Różnorodność roślin
// Wygenerowany na podstawie załączonego rozdziału i szablonu aplikacji.

const ALL_EXERCISES = 
[
  {
    "id": "R05_MH_01",
    "section": "Mchy",
    "type": "single_choice",
    "prompt": "Gdzie mchy najczęściej rosną?",
    "options": [
      "W miejscach wilgotnych i cienistych",
      "Na pustyniach",
      "W bardzo suchych jaskiniach",
      "Tylko na polach uprawnych"
    ],
    "answer": 0,
    "explanation": "Mchy najlepiej rosną tam, gdzie jest wilgotno i niezbyt słonecznie, na przykład w runie leśnym."
  },
  {
    "id": "R05_MH_02",
    "section": "Mchy",
    "type": "true_false",
    "prompt": "Chwytniki mchu są prawdziwymi korzeniami.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz. Chwytniki tylko przytrzymują mech w podłożu. Nie są prawdziwymi korzeniami."
  },
  {
    "id": "R05_MH_03",
    "section": "Mchy",
    "type": "match",
    "prompt": "Połącz część mchu z jej zadaniem.",
    "options": null,
    "left": [
      "chwytniki",
      "ulistniona łodyżka",
      "zarodnia"
    ],
    "right": [
      "utrzymuje roślinę w podłożu",
      "wytwarza pokarm w fotosyntezie",
      "powstają w niej zarodniki"
    ],
    "answer": {
      "chwytniki": "utrzymuje roślinę w podłożu",
      "ulistniona łodyżka": "wytwarza pokarm w fotosyntezie",
      "zarodnia": "powstają w niej zarodniki"
    },
    "explanation": "Chwytniki przytwierdzają mech, zielona łodyżka z listkami prowadzi fotosyntezę, a zarodnia wytwarza zarodniki.",
    "image": "/img/r05_mchy_budowa.jpg"
  },
  {
    "id": "R05_MH_04",
    "section": "Mchy",
    "type": "single_choice",
    "prompt": "W której części mchu powstają zarodniki?",
    "options": [
      "W zarodni",
      "W chwytnikach",
      "W listkach",
      "W kłączu"
    ],
    "answer": 0,
    "explanation": "Zarodniki powstają w zarodni umieszczonej na końcu trzonka.",
    "image": "/img/r05_mchy_budowa.jpg"
  },
  {
    "id": "R05_MH_05",
    "section": "Mchy",
    "type": "multi_select",
    "prompt": "Zaznacz zdania prawdziwe o znaczeniu mchów w przyrodzie.",
    "options": [
      "Magazynują dużo wody",
      "Pomagają ograniczać skutki suszy",
      "Są pokarmem lub schronieniem dla niektórych zwierząt",
      "Zawsze tworzą owoce"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Mchy zatrzymują wodę, pomagają chronić glebę przed wysychaniem i są miejscem życia oraz pokarmem dla części zwierząt. Nie tworzą owoców."
  },
  {
    "id": "R05_MH_06",
    "section": "Mchy",
    "type": "single_choice",
    "prompt": "Co jest potrzebne, żeby u mchów mogło dojść do zapłodnienia?",
    "options": [
      "Woda",
      "Śnieg",
      "Owady",
      "Bardzo silny wiatr"
    ],
    "answer": 0,
    "explanation": "Plemniki mchów przemieszczają się w kropli wody, dlatego do zapłodnienia potrzebna jest woda.",
    "image": "/img/r05_mchy_rozmnazanie.jpg"
  },
  {
    "id": "R05_MH_07",
    "section": "Mchy",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: torfowiec błotny, płonnik pospolity, widłoząb miotlasty, sosna zwyczajna.",
    "options": null,
    "answer": "sosna zwyczajna",
    "explanation": "Sosna zwyczajna nie jest mchem. To roślina nagonasienna."
  },
  {
    "id": "R05_MH_08",
    "section": "Mchy",
    "type": "riddle",
    "prompt": "Jestem miejscem, w którym u mchu powstają zarodniki. Kim jestem?",
    "options": null,
    "answer": "zarodnia",
    "altAnswers": [
      "zarodnia",
      "zarodnią",
      "zarodni",
      "zarodnie"
    ],
    "explanation": "To zarodnia. Właśnie tam powstają zarodniki mchu."
  },
  {
    "id": "R05_PP_01",
    "section": "Paprotniki",
    "type": "single_choice",
    "prompt": "Jakie organy mają paprotniki?",
    "options": [
      "Korzenie, łodygi i liście",
      "Tylko łodyżki i listki",
      "Tylko chwytniki",
      "Tylko korzenie i kwiaty"
    ],
    "answer": 0,
    "explanation": "Paprotniki mają już właściwe organy roślinne: korzenie, łodygi i liście."
  },
  {
    "id": "R05_PP_02",
    "section": "Paprotniki",
    "type": "multi_select",
    "prompt": "Które grupy należą do paprotników?",
    "options": [
      "Paprocie",
      "Skrzypy",
      "Widłaki",
      "Mchy",
      "Sosny"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Do paprotników zaliczamy paprocie, skrzypy i widłaki. Mchy i sosny to inne grupy roślin."
  },
  {
    "id": "R05_PP_03",
    "section": "Paprotniki",
    "type": "single_choice",
    "prompt": "Gdzie u paproci najczęściej znajdują się zarodnie?",
    "options": [
      "Na spodniej stronie liści",
      "Na korzeniach",
      "W kwiatach",
      "Na końcach chwytników"
    ],
    "answer": 0,
    "explanation": "U paproci zarodnie rozwijają się zwykle na spodniej stronie liści.",
    "image": "/img/r05_paproc_budowa.jpg"
  },
  {
    "id": "R05_PP_04",
    "section": "Paprotniki",
    "type": "true_false",
    "prompt": "Paprotniki najczęściej rosną w miejscach wilgotnych i zacienionych.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Takie warunki odpowiadają większości paprotników."
  },
  {
    "id": "R05_PP_05",
    "section": "Paprotniki",
    "type": "match",
    "prompt": "Połącz grupę paprotników z cechą rozpoznawczą.",
    "options": null,
    "left": [
      "paproć",
      "skrzyp",
      "widłak"
    ],
    "right": [
      "ma duże, pierzaste liście",
      "ma pędy wiosenne i letnie albo zielone pędy z kłosem",
      "ma płożące łodygi i pionowe odgałęzienia"
    ],
    "answer": {
      "paproć": "ma duże, pierzaste liście",
      "skrzyp": "ma pędy wiosenne i letnie albo zielone pędy z kłosem",
      "widłak": "ma płożące łodygi i pionowe odgałęzienia"
    },
    "explanation": "Paprocie, skrzypy i widłaki różnią się wyglądem zewnętrznym, dlatego można je dość łatwo odróżnić.",
    "image": "/img/r05_skrzyp_i_widlak.jpg"
  },
  {
    "id": "R05_PP_06",
    "section": "Paprotniki",
    "type": "single_choice",
    "prompt": "Jak nazywa się mała roślina, która wyrasta z zarodnika paproci?",
    "options": [
      "Przedrośle",
      "Bulwa",
      "Szyszka",
      "Zarodnia"
    ],
    "answer": 0,
    "explanation": "Z zarodnika paproci wyrasta przedrośle. Na nim tworzą się elementy potrzebne do zapłodnienia.",
    "image": "/img/r05_paproc_rozmnazanie.jpg"
  },
  {
    "id": "R05_PP_07",
    "section": "Paprotniki",
    "type": "fill_in",
    "prompt": "Uzupełnij: Większość paproci ma podziemną łodygę zwaną __________, a ich duże liście są zwykle __________.",
    "options": null,
    "answer": [
      "kłączem",
      "pierzaste"
    ],
    "altAnswers": [
      [
        "kłączem",
        "kłącze",
        "kłącza",
        "kłączu"
      ],
      [
        "pierzaste",
        "pierzasty",
        "pierzastymi",
        "pierzastych"
      ]
    ],
    "explanation": "Podziemna łodyga paproci to kłącze, a ich liście mają zwykle pierzasty kształt."
  },
  {
    "id": "R05_PP_08",
    "section": "Paprotniki",
    "type": "scenario",
    "prompt": "Widzisz skrzyp z żółtobrązowym, nierozgałęzionym pędem i kłosem zarodnionośnym. Jaki to pęd?",
    "options": [
      "Pęd wiosenny",
      "Pęd letni",
      "Korzeń",
      "Liść zarodnionośny"
    ],
    "answer": 0,
    "explanation": "Pęd wiosenny skrzypu jest zwykle żółtobrązowy, nierozgałęziony i wytwarza kłos zarodnionośny.",
    "image": "/img/r05_skrzyp_i_widlak.jpg"
  },
  {
    "id": "R05_NG_01",
    "section": "Nagonasienne",
    "type": "single_choice",
    "prompt": "Co wytwarzają rośliny nasienne?",
    "options": [
      "Kwiaty i nasiona",
      "Tylko zarodniki",
      "Tylko kłącza",
      "Tylko chwytniki"
    ],
    "answer": 0,
    "explanation": "Rośliny nasienne rozmnażają się dzięki kwiatom i nasionom."
  },
  {
    "id": "R05_NG_02",
    "section": "Nagonasienne",
    "type": "true_false",
    "prompt": "Nasiona roślin nagonasiennych są „nagie”, czyli nie są okryte owocem.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Nasiona roślin nagonasiennych nie są ukryte w owocu."
  },
  {
    "id": "R05_NG_03",
    "section": "Nagonasienne",
    "type": "single_choice",
    "prompt": "Jak wyglądają liście większości roślin nagonasiennych?",
    "options": [
      "Jak długie, sztywne igły",
      "Jak szerokie płatki",
      "Jak miękkie płatki kwiatu",
      "Jak duże liście pułapkowe"
    ],
    "answer": 0,
    "explanation": "Większość roślin nagonasiennych to rośliny iglaste, więc ich liście mają postać igieł.",
    "image": "/img/r05_nagonasienne_cechy.jpg"
  },
  {
    "id": "R05_NG_04",
    "section": "Nagonasienne",
    "type": "multi_select",
    "prompt": "Zaznacz cechy sosny zwyczajnej opisane w rozdziale.",
    "options": [
      "Ma pień okryty grubą korą",
      "Jej igły wyrastają po dwa obok siebie",
      "Wytwarza kwiatostany męskie i żeńskie",
      "Tworzy owoce jabłkowate"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Sosna ma gruby pień, igły po dwa i kwiatostany męskie oraz żeńskie. Nie tworzy owoców.",
    "image": "/img/r05_sosna_budowa.jpg"
  },
  {
    "id": "R05_NG_05",
    "section": "Nagonasienne",
    "type": "match",
    "prompt": "Połącz roślinę iglastą z cechą.",
    "options": null,
    "left": [
      "świerk",
      "jodła",
      "modrzew"
    ],
    "right": [
      "ma szyszki zwisające",
      "ma szyszki stojące pionowo",
      "zrzuca igły na zimę"
    ],
    "answer": {
      "świerk": "ma szyszki zwisające",
      "jodła": "ma szyszki stojące pionowo",
      "modrzew": "zrzuca igły na zimę"
    },
    "explanation": "Świerk ma szyszki zwisające, jodła - stojące, a modrzew jest wyjątkiem, bo gubi igły na zimę.",
    "image": "/img/r05_nagonasienne_cechy.jpg"
  },
  {
    "id": "R05_NG_06",
    "section": "Nagonasienne",
    "type": "single_choice",
    "prompt": "Jak najczęściej rozsiewają się nasiona sosny?",
    "options": [
      "Przez wiatr",
      "Przez owady",
      "Przez wodę w rzece",
      "Przez korzenie"
    ],
    "answer": 0,
    "explanation": "Nasiona sosny mają skrzydełka, dlatego mogą być przenoszone przez wiatr.",
    "image": "/img/r05_nagonasienne_rozmnazanie.jpg"
  },
  {
    "id": "R05_NG_07",
    "section": "Nagonasienne",
    "type": "fill_in",
    "prompt": "Uzupełnij: Kwiaty męskie wytwarzają ziarna __________, a po zapłodnieniu z zalążka powstaje __________.",
    "options": null,
    "answer": [
      "pyłku",
      "nasienie"
    ],
    "altAnswers": [
      [
        "pyłku",
        "pyłek",
        "pyłkiem"
      ],
      [
        "nasienie",
        "nasiono",
        "nasienia",
        "nasieniem"
      ]
    ],
    "explanation": "Kwiaty męskie wytwarzają ziarna pyłku, a z zalążka po zapłodnieniu rozwija się nasienie."
  },
  {
    "id": "R05_NG_08",
    "section": "Nagonasienne",
    "type": "multi_select",
    "prompt": "Jakie znaczenie mają drzewa iglaste dla człowieka?",
    "options": [
      "Dają drewno do budowy i mebli",
      "Są źródłem substancji do leków i kosmetyków",
      "Służą do ozdoby parków i ogrodów",
      "Zawsze wytwarzają soczyste owoce do jedzenia"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Drzewa iglaste są ważne w budownictwie, przemyśle i ogrodnictwie. Nie tworzą soczystych owoców."
  },
  {
    "id": "R05_OK_01",
    "section": "Okrytonasienne",
    "type": "single_choice",
    "prompt": "Co okrywa nasiona roślin okrytonasiennych?",
    "options": [
      "Ściana owocu",
      "Łodyga",
      "Korzeń",
      "Kora drzewa"
    ],
    "answer": 0,
    "explanation": "U roślin okrytonasiennych nasiona są ukryte w owocu, czyli są okryte ścianą owocu."
  },
  {
    "id": "R05_OK_02",
    "section": "Okrytonasienne",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do odpowiedniej formy rośliny.",
    "options": null,
    "items": [
      "tulipan",
      "klon",
      "głóg",
      "wrzos"
    ],
    "categories": [
      "roślina zielna",
      "drzewo",
      "krzew",
      "krzewinka"
    ],
    "answer": {
      "roślina zielna": [
        "tulipan"
      ],
      "drzewo": [
        "klon"
      ],
      "krzew": [
        "głóg"
      ],
      "krzewinka": [
        "wrzos"
      ]
    },
    "explanation": "Tulipan to roślina zielna, klon to drzewo, głóg zaliczamy do krzewów, a wrzos do krzewinek.",
    "image": "/img/r05_formy_okrytonasiennych.jpg"
  },
  {
    "id": "R05_OK_03",
    "section": "Okrytonasienne",
    "type": "single_choice",
    "prompt": "Które elementy rozrodcze ma kwiat obupłciowy?",
    "options": [
      "Pręciki i słupek",
      "Tylko pręciki",
      "Tylko słupek",
      "Tylko owocnię"
    ],
    "answer": 0,
    "explanation": "Kwiat obupłciowy ma jednocześnie elementy męskie, czyli pręciki, i żeńskie, czyli słupek."
  },
  {
    "id": "R05_OK_04",
    "section": "Okrytonasienne",
    "type": "match",
    "prompt": "Połącz element kwiatu z jego rolą.",
    "options": null,
    "left": [
      "pręcik",
      "słupek",
      "okwiat"
    ],
    "right": [
      "powstaje w nim pyłek albo pomaga w zapyleniu",
      "chroni elementy rozrodcze i wabi zapylacze",
      "zawiera zalążki"
    ],
    "answer": {
      "pręcik": "powstaje w nim pyłek albo pomaga w zapyleniu",
      "słupek": "zawiera zalążki",
      "okwiat": "chroni elementy rozrodcze i wabi zapylacze"
    },
    "explanation": "Pręciki wytwarzają pyłek, słupek zawiera zalążki, a okwiat chroni kwiat i pomaga przyciągać zwierzęta zapylające.",
    "image": "/img/r05_kwiat_budowa.jpg"
  },
  {
    "id": "R05_OK_05",
    "section": "Okrytonasienne",
    "type": "true_false",
    "prompt": "Kwiaty zapylane przez wiatr są zwykle duże, pachnące i bardzo kolorowe.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz. Takie cechy częściej mają kwiaty zapylane przez zwierzęta. Wiatropylne są zwykle niepozorne."
  },
  {
    "id": "R05_OK_06",
    "section": "Okrytonasienne",
    "type": "multi_select",
    "prompt": "Wskaż cechy kwiatów zapylanych przez wiatr.",
    "options": [
      "Długie i wiotkie pręciki",
      "Duże znamiona słupka",
      "Lekki, sypki pyłek",
      "Silny słodki zapach"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Kwiaty wiatropylne mają cechy ułatwiające unoszenie i wychwytywanie pyłku. Nie potrzebują silnego zapachu.",
    "image": "/img/r05_zapylanie_porownanie.jpg"
  },
  {
    "id": "R05_OK_07",
    "section": "Okrytonasienne",
    "type": "single_choice",
    "prompt": "Czym jest kwiatostan?",
    "options": [
      "Grupą kwiatów rosnących razem",
      "Rodzajem korzenia",
      "Tylko jednym dużym kwiatem",
      "Miejscem powstawania kłączy"
    ],
    "answer": 0,
    "explanation": "Kwiatostan to grupa drobnych kwiatów zebranych razem na jednej roślinie."
  },
  {
    "id": "R05_OK_08",
    "section": "Okrytonasienne",
    "type": "riddle",
    "prompt": "Jestem częścią słupka. To na mnie trafia pyłek podczas zapylenia. Kim jestem?",
    "options": null,
    "answer": "znamię słupka",
    "altAnswers": [
      "znamię słupka",
      "znamię",
      "znamię słupka",
      "znamię",
      "znamieniem słupka",
      "znamieniu słupka"
    ],
    "explanation": "To znamię słupka. To właśnie ono wychwytuje pyłek."
  },
  {
    "id": "R05_RO_01",
    "section": "Rozprzestrzenianie się roślin okrytonasiennych",
    "type": "single_choice",
    "prompt": "Z czego jest zbudowany typowy owoc?",
    "options": [
      "Z nasion i owocni",
      "Z korzenia i łodygi",
      "Z pyłku i pręcików",
      "Z chwytników i zarodni"
    ],
    "answer": 0,
    "explanation": "Typowy owoc składa się z nasion oraz owocni, która je chroni i pomaga w rozsiewaniu.",
    "image": "/img/r05_owoc_rozsiewanie.jpg"
  },
  {
    "id": "R05_RO_02",
    "section": "Rozprzestrzenianie się roślin okrytonasiennych",
    "type": "match",
    "prompt": "Połącz owoc z typowym sposobem przenoszenia.",
    "options": null,
    "left": [
      "klon",
      "łopian",
      "kokos",
      "jarzębina"
    ],
    "right": [
      "wiatr",
      "zwierzęta - sierść",
      "woda",
      "zwierzęta - zjadanie owoców"
    ],
    "answer": {
      "klon": "wiatr",
      "łopian": "zwierzęta - sierść",
      "kokos": "woda",
      "jarzębina": "zwierzęta - zjadanie owoców"
    },
    "explanation": "Klon ma skrzydełka, łopian haczyki, kokos unosi się na wodzie, a jarzębina wabi zwierzęta barwą i smakiem.",
    "image": "/img/r05_owoc_rozsiewanie.jpg"
  },
  {
    "id": "R05_RO_03",
    "section": "Rozprzestrzenianie się roślin okrytonasiennych",
    "type": "true_false",
    "prompt": "Owocnia chroni nasiona i może pomagać w ich rozsiewaniu.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Owocnia chroni nasiona, a czasem ułatwia też ich przenoszenie przez wiatr, wodę lub zwierzęta."
  },
  {
    "id": "R05_RO_04",
    "section": "Rozprzestrzenianie się roślin okrytonasiennych",
    "type": "single_choice",
    "prompt": "Który zestaw pokazuje części nasienia?",
    "options": [
      "Zarodek, tkanka odżywcza i łupina nasienna",
      "Pręcik, słupek i okwiat",
      "Korzeń, łodyga i liść",
      "Pyłek, znamię i zalążnia"
    ],
    "answer": 0,
    "explanation": "Nasienie jest zbudowane z zarodka, tkanki odżywczej i łupiny nasiennej.",
    "image": "/img/r05_nasienie_kielkowanie.jpg"
  },
  {
    "id": "R05_RO_05",
    "section": "Rozprzestrzenianie się roślin okrytonasiennych",
    "type": "multi_select",
    "prompt": "Co jest potrzebne do kiełkowania nasion?",
    "options": [
      "Woda",
      "Tlen",
      "Odpowiednia temperatura",
      "Zawsze mróz"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Do kiełkowania nasion potrzebne są woda, tlen i odpowiednia temperatura. U części roślin potrzebne jest też światło."
  },
  {
    "id": "R05_RO_06",
    "section": "Rozprzestrzenianie się roślin okrytonasiennych",
    "type": "scenario",
    "prompt": "Z kawałka bulwy ziemniaka z oczkiem wyrasta nowa roślina. Jak nazywa się taki sposób powstawania nowej rośliny?",
    "options": [
      "Rozmnażanie wegetatywne",
      "Zapylenie",
      "Kiełkowanie zarodników",
      "Fotosynteza"
    ],
    "answer": 0,
    "explanation": "Nowa roślina powstaje tu z fragmentu rośliny rodzicielskiej, więc jest to rozmnażanie wegetatywne.",
    "image": "/img/r05_rozmnazanie_wegetatywne.jpg"
  },
  {
    "id": "R05_RO_07",
    "section": "Rozprzestrzenianie się roślin okrytonasiennych",
    "type": "fill_in",
    "prompt": "Uzupełnij: Rozmnażanie wegetatywne polega na powstawaniu nowych roślin z fragmentów rośliny __________. U truskawki pomagają w tym __________.",
    "options": null,
    "answer": [
      "rodzicielskiej",
      "rozłogi"
    ],
    "altAnswers": [
      [
        "rodzicielskiej",
        "rodzicielska",
        "rodzicielską"
      ],
      [
        "rozłogi",
        "rozłogów",
        "rozłogami",
        "rozłóg"
      ]
    ],
    "explanation": "W rozmnażaniu wegetatywnym nowa roślina powstaje z części rośliny rodzicielskiej. U truskawki ważną rolę pełnią rozłogi.",
    "image": "/img/r05_rozmnazanie_wegetatywne.jpg"
  },
  {
    "id": "R05_ZN_01",
    "section": "Znaczenie i przegląd roślin okrytonasiennych",
    "type": "multi_select",
    "prompt": "Jaką rolę rośliny okrytonasienne pełnią w przyrodzie?",
    "options": [
      "Są pokarmem dla wielu organizmów",
      "Tworzą schronienie dla innych organizmów",
      "Pochłaniają dwutlenek węgla i wytwarzają tlen",
      "Nigdy nie mają znaczenia dla zwierząt"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Rośliny okrytonasienne są bardzo ważne: karmią, dają schronienie i uczestniczą w wymianie gazowej."
  },
  {
    "id": "R05_ZN_02",
    "section": "Znaczenie i przegląd roślin okrytonasiennych",
    "type": "single_choice",
    "prompt": "Który produkt powstaje z roślin okrytonasiennych?",
    "options": [
      "Mąka ze zbóż",
      "Szyszka z sosny",
      "Zarodniki mchu",
      "Kłos skrzypu"
    ],
    "answer": 0,
    "explanation": "Zboża są roślinami okrytonasiennymi i robi się z nich między innymi mąkę."
  },
  {
    "id": "R05_ZN_03",
    "section": "Znaczenie i przegląd roślin okrytonasiennych",
    "type": "single_choice",
    "prompt": "Które rośliny są podane w rozdziale jako przykłady używane do produkcji leków lub kosmetyków?",
    "options": [
      "Mięta i rumianek",
      "Sosna i świerk",
      "Płonnik i torfowiec",
      "Skrzyp i widłak"
    ],
    "answer": 0,
    "explanation": "Mięta i rumianek to przykłady roślin okrytonasiennych używanych w lekach i kosmetykach.",
    "image": "/img/r05_okrytonasienne_znaczenie.jpg"
  },
  {
    "id": "R05_ZN_04",
    "section": "Znaczenie i przegląd roślin okrytonasiennych",
    "type": "match",
    "prompt": "Połącz formę rośliny z przykładem.",
    "options": null,
    "left": [
      "drzewo",
      "krzew",
      "krzewinka"
    ],
    "right": [
      "klon jawor",
      "głóg dwuszyjkowy",
      "borówka brusznica"
    ],
    "answer": {
      "drzewo": "klon jawor",
      "krzew": "głóg dwuszyjkowy",
      "krzewinka": "borówka brusznica"
    },
    "explanation": "Klon jawor to drzewo, głóg to krzew, a borówka brusznica należy do krzewinek.",
    "image": "/img/r05_przeglad_okrytonasiennych.jpg"
  },
  {
    "id": "R05_ZN_05",
    "section": "Znaczenie i przegląd roślin okrytonasiennych",
    "type": "true_false",
    "prompt": "Lasy liściaste pomagają oczyszczać powietrze i mogą ograniczać ryzyko powodzi.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Lasy liściaste pochłaniają pyły i gazy, a także zatrzymują wodę z opadów."
  },
  {
    "id": "R05_ZN_06",
    "section": "Znaczenie i przegląd roślin okrytonasiennych",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: wierzba biała, klon jawor, wiąz pospolity, jałowiec pospolity.",
    "options": null,
    "answer": "jałowiec pospolity",
    "explanation": "Jałowiec pospolity nie jest rośliną okrytonasienną. To roślina nagonasienna."
  },
  {
    "id": "R05_ST_01",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy rozmnażania mchu od początku do końca.",
    "options": null,
    "items": [
      "zapłodnienie",
      "powstawanie zarodników",
      "kiełkowanie zarodników",
      "powstawanie ulistnionych roślin",
      "wytwarzanie rodni lub plemni",
      "wzrost trzonka z zarodnią"
    ],
    "answer": [
      "powstawanie zarodników",
      "kiełkowanie zarodników",
      "powstawanie ulistnionych roślin",
      "wytwarzanie rodni lub plemni",
      "zapłodnienie",
      "wzrost trzonka z zarodnią"
    ],
    "explanation": "Najpierw powstają zarodniki, potem kiełkują, wyrastają rośliny, tworzą się rodnie i plemnie, dochodzi do zapłodnienia, a zygota rozwija trzonek z zarodnią."
  },
  {
    "id": "R05_ST_02",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Dwa suche okazy torfowca włożono do kolb. Jeden wisiał nad mokrą bibułą, drugi nad suchą. Który po dwóch godzinach bardziej się nawodni?",
    "options": [
      "Ten nad mokrą bibułą",
      "Ten nad suchą bibułą",
      "Oba tak samo",
      "Żaden"
    ],
    "answer": 0,
    "explanation": "Mech ma zdolność wchłaniania wody z otoczenia, więc bardziej nawodni się okaz umieszczony nad mokrą bibułą."
  },
  {
    "id": "R05_ST_03",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj rośliny do odpowiedniej grupy.",
    "options": null,
    "items": [
      "płonnik pospolity",
      "nerecznica samcza",
      "sosna zwyczajna",
      "czereśnia",
      "widłak goździsty",
      "torfowiec błotny"
    ],
    "categories": [
      "mchy",
      "paprotniki",
      "nagonasienne",
      "okrytonasienne"
    ],
    "answer": {
      "mchy": [
        "płonnik pospolity",
        "torfowiec błotny"
      ],
      "paprotniki": [
        "nerecznica samcza",
        "widłak goździsty"
      ],
      "nagonasienne": [
        "sosna zwyczajna"
      ],
      "okrytonasienne": [
        "czereśnia"
      ]
    },
    "explanation": "Płonnik i torfowiec to mchy, nerecznica i widłak należą do paprotników, sosna do nagonasiennych, a czereśnia do okrytonasiennych."
  },
  {
    "id": "R05_ST_04",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz grupę roślin z jednostką, która głównie służy im do rozprzestrzeniania się.",
    "options": null,
    "left": [
      "mchy",
      "paprotniki",
      "nagonasienne",
      "okrytonasienne"
    ],
    "right": [
      "zarodniki",
      "zarodniki",
      "nasiona",
      "nasiona ukryte w owocach"
    ],
    "answer": {
      "mchy": "zarodniki",
      "paprotniki": "zarodniki",
      "nagonasienne": "nasiona",
      "okrytonasienne": "nasiona ukryte w owocach"
    },
    "explanation": "Mchy i paprotniki rozprzestrzeniają się dzięki zarodnikom, a rośliny nasienne dzięki nasionom. U okrytonasiennych nasiona są ukryte w owocach."
  },
  {
    "id": "R05_ST_05",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Wybierz cechy, które pomagają rozpoznać paprotniki.",
    "options": [
      "Mają korzenie, łodygi i liście",
      "Często rosną w miejscach wilgotnych",
      "U wielu z nich powstają zarodnie",
      "Zawsze tworzą owoce"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Paprotniki mają właściwe organy roślinne, często lubią wilgoć i rozmnażają się za pomocą zarodni z zarodnikami. Nie tworzą owoców."
  },
  {
    "id": "R05_ST_06",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy rozmnażania paproci.",
    "options": null,
    "items": [
      "zapłodnienie",
      "powstawanie zarodni",
      "kiełkowanie zarodników",
      "wzrost i rozwój nowej paproci",
      "wytwarzanie rodni i plemni na przedroślu",
      "wytwarzanie zarodników"
    ],
    "answer": [
      "powstawanie zarodni",
      "wytwarzanie zarodników",
      "kiełkowanie zarodników",
      "wytwarzanie rodni i plemni na przedroślu",
      "zapłodnienie",
      "wzrost i rozwój nowej paproci"
    ],
    "explanation": "Najpierw tworzą się zarodnie, potem zarodniki, z nich wyrasta przedrośle, na nim rodnie i plemnie, następnie zachodzi zapłodnienie i wyrasta nowa paproć."
  },
  {
    "id": "R05_ST_07",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: salwinia pływająca, nerecznica samcza, skrzyp polny, paprotniki.",
    "options": null,
    "answer": "paprotniki",
    "explanation": "Trzy pierwsze nazwy oznaczają konkretne rośliny, a „paprotniki” to nazwa całej grupy roślin."
  },
  {
    "id": "R05_ST_08",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Na wiosnę widzisz skrzyp z kłosem zarodnionośnym. Latem pojawia się zielony, rozgałęziony pęd bez kłosa. Po co skrzypowi taki letni pęd?",
    "options": [
      "Do fotosyntezy i gromadzenia pokarmu",
      "Do wytwarzania zarodników",
      "Do tworzenia owoców",
      "Do zapylania przez owady"
    ],
    "answer": 0,
    "explanation": "Letni pęd skrzypu jest zielony i rozgałęziony, więc odpowiada głównie za fotosyntezę i gromadzenie substancji pokarmowych."
  },
  {
    "id": "R05_ST_09",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz roślinę nagonasienną z cechą jej nasion lub owoców.",
    "options": null,
    "left": [
      "cis pospolity",
      "jałowiec pospolity",
      "sosna zwyczajna"
    ],
    "right": [
      "nasiona z czerwoną osnówką",
      "szyszkojagody",
      "nasiona ze skrzydełkiem"
    ],
    "answer": {
      "cis pospolity": "nasiona z czerwoną osnówką",
      "jałowiec pospolity": "szyszkojagody",
      "sosna zwyczajna": "nasiona ze skrzydełkiem"
    },
    "explanation": "Cis ma pojedyncze nasiona z osnówką, jałowiec tworzy szyszkojagody, a sosna ma nasiona ze skrzydełkami."
  },
  {
    "id": "R05_ST_10",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Modrzew jest wyjątkiem wśród wielu roślin iglastych, bo zrzuca igły na zimę.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Większość roślin iglastych jest zimozielona, ale modrzew traci igły jesienią."
  },
  {
    "id": "R05_ST_11",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Uzupełnij: Nasiona roślin nagonasiennych są __________, a u sosny igły wyrastają po __________ obok siebie.",
    "options": null,
    "answer": [
      "nagie",
      "dwa"
    ],
    "altAnswers": [
      [
        "nagie",
        "nagi",
        "nago"
      ],
      [
        "dwa",
        "2",
        "dwóch",
        "dwoma"
      ]
    ],
    "explanation": "Nasiona nagonasiennych nie są okryte owocem, dlatego mówi się o nich „nagie”. U sosny igły rosną parami."
  },
  {
    "id": "R05_ST_12",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Dwie otwarte szyszki sosny położono w różnych warunkach. Jedna trafiła do wilgoci, druga została sucha. Która bardziej otworzy łuski i łatwiej rozsypie nasiona?",
    "options": [
      "Ta sucha",
      "Ta wilgotna",
      "Obie tak samo",
      "Żadna"
    ],
    "answer": 0,
    "explanation": "Sucha szyszka łatwiej rozchyla łuski i rozsiewa nasiona. Woda powoduje zamykanie się szyszek."
  },
  {
    "id": "R05_ST_13",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj cechy kwiatów do właściwego sposobu zapylania.",
    "options": null,
    "items": [
      "duży, barwny okwiat",
      "lekki, sypki pyłek",
      "długie i wiotkie pręciki",
      "nektar",
      "duże znamiona słupka",
      "silny zapach"
    ],
    "categories": [
      "zapylanie przez wiatr",
      "zapylanie przez zwierzęta"
    ],
    "answer": {
      "zapylanie przez wiatr": [
        "lekki, sypki pyłek",
        "długie i wiotkie pręciki",
        "duże znamiona słupka"
      ],
      "zapylanie przez zwierzęta": [
        "duży, barwny okwiat",
        "nektar",
        "silny zapach"
      ]
    },
    "explanation": "Rośliny wiatropylne ułatwiają unoszenie pyłku, a rośliny zapylane przez zwierzęta muszą zwabić zapylaczy."
  },
  {
    "id": "R05_ST_14",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy rozmnażania rośliny okrytonasiennej od kwitnienia do kiełkowania.",
    "options": null,
    "items": [
      "dojrzewanie owocu",
      "kiełkowanie",
      "zapylenie",
      "kwitnienie",
      "zapłodnienie",
      "powstawanie owocu"
    ],
    "answer": [
      "kwitnienie",
      "zapylenie",
      "zapłodnienie",
      "powstawanie owocu",
      "dojrzewanie owocu",
      "kiełkowanie"
    ],
    "explanation": "Najpierw roślina kwitnie, potem następuje zapylenie i zapłodnienie, tworzy się oraz dojrzewa owoc, a na końcu kiełkuje nasienie."
  },
  {
    "id": "R05_ST_15",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Dlaczego u roślin okrytonasiennych do zapłodnienia nie jest potrzebna kropla wody, tak jak u mchów i paproci?",
    "options": [
      "Bo komórki plemnikowe transportuje łagiewka pyłkowa",
      "Bo pyłek zamienia się w korzeń",
      "Bo zalążek pęka bez zapłodnienia",
      "Bo kwiat zastępuje wodę"
    ],
    "answer": 0,
    "explanation": "U roślin okrytonasiennych komórki plemnikowe docierają do zalążka przez łagiewkę pyłkową, więc nie muszą pływać w wodzie."
  },
  {
    "id": "R05_ST_16",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz roślinę z narządem lub przekształceniem używanym w rozmnażaniu wegetatywnym.",
    "options": null,
    "left": [
      "truskawka",
      "ziemniak",
      "imbir",
      "tulipan"
    ],
    "right": [
      "rozłóg",
      "bulwa",
      "kłącze",
      "cebula"
    ],
    "answer": {
      "truskawka": "rozłóg",
      "ziemniak": "bulwa",
      "imbir": "kłącze",
      "tulipan": "cebula"
    },
    "explanation": "Różne rośliny tworzą różne przekształcenia pędu, dzięki którym mogą rozmnażać się wegetatywnie."
  },
  {
    "id": "R05_ST_17",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które cechy pomagają owocom rozprzestrzeniać się z pomocą zwierząt?",
    "options": [
      "Jaskrawa barwa",
      "Smak i zapach zachęcające do zjedzenia",
      "Haczyki do czepiania się sierści",
      "Duże komory powietrzne do pływania"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Niektóre owoce wabią zwierzęta kolorem i smakiem, a inne przyczepiają się do sierści. Komory powietrzne służą raczej owocom przenoszonym przez wodę."
  },
  {
    "id": "R05_ST_18",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jestem zapasem pokarmu w nasieniu. Dzięki mnie młoda roślina ma z czego korzystać na starcie. Kim jestem?",
    "options": null,
    "answer": "tkanka odżywcza",
    "altAnswers": [
      "tkanka odżywcza",
      "bielmo",
      "tkanką odżywczą",
      "bielmem",
      "tkanki odżywczej"
    ],
    "explanation": "To tkanka odżywcza, nazywana też bielmem. Stanowi zapas pokarmu dla rozwijającego się zarodka."
  },
  {
    "id": "R05_ST_19",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Dwie rośliny są drzewiaste. Jedna ma wiele pędów wyrastających nisko nad ziemią, a druga jest mała i przypomina niski krzew. Jak nazywamy te formy?",
    "options": [
      "Krzew i krzewinka",
      "Drzewo i roślina zielna",
      "Krzewinka i paproć",
      "Roślina zielna i mech"
    ],
    "answer": 0,
    "explanation": "Roślina z wieloma pędami od dołu to krzew, a mała drzewiasta roślina podobna do małego krzewu to krzewinka."
  },
  {
    "id": "R05_ST_20",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do odpowiedniej formy rośliny okrytonasiennej.",
    "options": null,
    "items": [
      "wierzba biała",
      "głóg dwuszyjkowy",
      "wrzos zwyczajny",
      "burak cukrowy"
    ],
    "categories": [
      "drzewo",
      "krzew",
      "krzewinka",
      "roślina zielna"
    ],
    "answer": {
      "drzewo": [
        "wierzba biała"
      ],
      "krzew": [
        "głóg dwuszyjkowy"
      ],
      "krzewinka": [
        "wrzos zwyczajny"
      ],
      "roślina zielna": [
        "burak cukrowy"
      ]
    },
    "explanation": "Wierzba to drzewo, głóg to krzew, wrzos to krzewinka, a burak cukrowy jest rośliną zielną."
  }
]
;

const KID_PROMPTS = 
{
  "R05_MH_04": "Spójrz na rysunek mchu. Gdzie robią się zarodniki?",
  "R05_PP_03": "Który pęd skrzypu robi pokarm - wiosenny czy letni?",
  "R05_NG_04": "Na obrazku sosny zaznaczono dwie części. Która z nich zamienia się w szyszkę?",
  "R05_OK_03": "Która część kwiatu łapie pyłek?",
  "R05_RO_04": "Co najpierw wyrasta z nasiona podczas kiełkowania?"
}
;

const chapter = {
  id: "r05",
  number: 5,
  title: "Różnorodność roślin",
  icon: "🌼",
  sectionOrder: [
    "Mchy",
    "Paprotniki",
    "Nagonasienne",
    "Okrytonasienne",
    "Rozprzestrzenianie się roślin okrytonasiennych",
    "Znaczenie i przegląd roślin okrytonasiennych"
  ],
  sectionIcons: {
    "Mchy": "🌿",
    "Paprotniki": "🌱",
    "Nagonasienne": "🌲",
    "Okrytonasienne": "🌸",
    "Rozprzestrzenianie się roślin okrytonasiennych": "🍎",
    "Znaczenie i przegląd roślin okrytonasiennych": "🌼"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS,
};

export default chapter;