// Skróty sekcji (do identyfikatorów ćwiczeń):
//   CHAR = Charakterystyka i organy
//   ROZM = Rozmnażanie i kwiaty
//   NAS  = Nasiona i owoce
//   DRZ  = Drzewa liściaste
//   ZNAC = Znaczenie okrytonasiennych
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_CHAR_01",
    "section": "Charakterystyka i organy",
    "type": "single_choice",
    "prompt": "Co jest cechą charakterystyczną roślin okrytonasiennych?",
    "options": [
      "Wytwarzają owoce okrywające nasiona",
      "Nie mają typowych organów",
      "Rozmnażają się wyłącznie bezpłciowo",
      "Ich nasiona zawsze leżą na łuskach szyszek",
      "Występują tylko w wodzie",
      "Nie wytwarzają kwiatów"
    ],
    "answer": 0,
    "explanation": "Nazwa roślin okrytonasiennych wiąże się z tym, że wytwarzają owoce, które okrywają nasiona.",
    "image": "r04_owoce_nasiona.jpg"
  },
  {
    "id": "R04_CHAR_02",
    "section": "Charakterystyka i organy",
    "type": "true_false",
    "prompt": "Nasiona roślin okrytonasiennych znajdują się wewnątrz owoców.",
    "options": null,
    "answer": true,
    "explanation": "To podstawowa cecha odróżniająca okrytonasienne od nagonasiennych, których nasiona mogą znajdować się np. w szyszkach.",
    "image": "r04_owoce_nasiona.jpg"
  },
  {
    "id": "R04_CHAR_03",
    "section": "Charakterystyka i organy",
    "type": "fill_in",
    "prompt": "Typowa roślina okrytonasienna ma podziemny __________ oraz nadziemny __________.",
    "options": null,
    "answer": [
      "korzeń",
      "pęd"
    ],
    "altAnswers": [
      [
        "korzeń",
        "korzen"
      ],
      [
        "pęd",
        "ped"
      ]
    ],
    "explanation": "W budowie typowej rośliny wyróżnia się podziemny korzeń oraz nadziemny pęd, czyli łodygę z liśćmi, kwiatami i owocami.",
    "image": "r04_typowa_roslina.jpg"
  },
  {
    "id": "R04_CHAR_04",
    "section": "Charakterystyka i organy",
    "type": "match",
    "prompt": "Połącz organ rośliny z jego podstawową funkcją.",
    "options": null,
    "left": [
      "korzeń",
      "łodyga",
      "liść",
      "kwiat",
      "owoc"
    ],
    "right": [
      "pobiera wodę z solami mineralnymi",
      "podtrzymuje liście i transportuje substancje",
      "odpowiada za fotosyntezę i wymianę gazową",
      "służy do rozmnażania płciowego",
      "zawiera nasiona"
    ],
    "answer": {
      "korzeń": "pobiera wodę z solami mineralnymi",
      "łodyga": "podtrzymuje liście i transportuje substancje",
      "liść": "odpowiada za fotosyntezę i wymianę gazową",
      "kwiat": "służy do rozmnażania płciowego",
      "owoc": "zawiera nasiona"
    },
    "explanation": "Korzeń, łodyga, liść, kwiat i owoc pełnią różne zadania w życiu rośliny okrytonasiennej.",
    "image": "r04_typowa_roslina.jpg"
  },
  {
    "id": "R04_CHAR_05",
    "section": "Charakterystyka i organy",
    "type": "multi_select",
    "prompt": "Zaznacz przystosowania roślin okrytonasiennych do środowiska suchego opisane w rozdziale.",
    "options": [
      "drobne i nieliczne liście",
      "fotosynteza zachodząca w zielonych łodygach",
      "liście opuncji przekształcone w ciernie",
      "duże i płaskie liście stale tracące dużo wody",
      "korzenie podporowe chroniące przed falami"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "W suchym środowisku korzystne są drobne liście, ograniczenie parowania i przejęcie fotosyntezy przez zielone łodygi; u opuncji liście są cierniami.",
    "image": "r04_modyfikacje_organow.jpg"
  },
  {
    "id": "R04_CHAR_06",
    "section": "Charakterystyka i organy",
    "type": "sort",
    "prompt": "Przyporządkuj opis do formy rośliny.",
    "options": null,
    "items": [
      "jeden zdrewniały pień",
      "wiele zdrewniałych pędów od ziemi",
      "zdrewniałe tylko dolne części pędów",
      "delikatna niezdrewniała łodyga"
    ],
    "categories": [
      "drzewo",
      "krzew",
      "krzewinka",
      "roślina zielna"
    ],
    "answer": {
      "drzewo": [
        "jeden zdrewniały pień"
      ],
      "krzew": [
        "wiele zdrewniałych pędów od ziemi"
      ],
      "krzewinka": [
        "zdrewniałe tylko dolne części pędów"
      ],
      "roślina zielna": [
        "delikatna niezdrewniała łodyga"
      ]
    },
    "explanation": "Drzewa mają pień, krzewy wiele zdrewniałych pędów, krzewinki są zdrewniałe tylko u dołu, a rośliny zielne mają łodygi niezdrewniałe."
  },
  {
    "id": "R04_CHAR_07",
    "section": "Charakterystyka i organy",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do organów typowej rośliny okrytonasiennej: korzeń, łodyga, liść, szyszka.",
    "options": null,
    "answer": "szyszka",
    "explanation": "Szyszki są związane z wieloma roślinami nagonasiennymi, natomiast typowa roślina okrytonasienna ma korzeń, łodygę i liście, a także kwiaty i owoce."
  },
  {
    "id": "R04_CHAR_08",
    "section": "Charakterystyka i organy",
    "type": "scenario",
    "prompt": "Roślina rośnie na glebie ubogiej w azot. Jej liście mają włoski z lepką cieczą, do której przyklejają się owady. Jaki rodzaj modyfikacji liści opisano?",
    "options": [
      "liście pułapkowe",
      "liście spichrzowe",
      "liście długowieczne",
      "liście całobrzegie",
      "liście złożone",
      "liście wodne"
    ],
    "answer": 0,
    "explanation": "Liście pułapkowe pozwalają roślinom, takim jak rosiczka czy dzbanecznik, chwytać i trawić owady, aby uzupełnić niedobory azotu.",
    "image": "r04_modyfikacje_organow.jpg"
  },
  {
    "id": "R04_CHAR_09",
    "section": "Charakterystyka i organy",
    "type": "riddle",
    "prompt": "Jak nazywają się organy, w których roślina gromadzi zapasy na niekorzystną porę roku?",
    "options": null,
    "answer": "organy spichrzowe",
    "altAnswers": [
      "organy spichrzowe",
      "spichrzowe",
      "organ spichrzowy"
    ],
    "explanation": "Organy spichrzowe gromadzą substancje zapasowe, np. w korzeniach marchwi lub buraka, bulwach ziemniaka czy cebuli."
  },
  {
    "id": "R04_CHAR_10",
    "section": "Charakterystyka i organy",
    "type": "match",
    "prompt": "Połącz roślinę z przykładem modyfikacji organu.",
    "options": null,
    "left": [
      "opuncja",
      "bluszcz",
      "ziemniak",
      "cebula",
      "marchew"
    ],
    "right": [
      "liście przekształcone w ciernie",
      "korzenie czepne",
      "bulwy pędowe",
      "liście spichrzowe",
      "korzeń spichrzowy"
    ],
    "answer": {
      "opuncja": "liście przekształcone w ciernie",
      "bluszcz": "korzenie czepne",
      "ziemniak": "bulwy pędowe",
      "cebula": "liście spichrzowe",
      "marchew": "korzeń spichrzowy"
    },
    "explanation": "Przekształcone organy pomagają roślinom żyć w różnych warunkach: wspinać się, chronić przed utratą wody albo magazynować zapasy.",
    "image": "r04_modyfikacje_organow.jpg"
  },
  {
    "id": "R04_ROZM_01",
    "section": "Rozmnażanie i kwiaty",
    "type": "single_choice",
    "prompt": "Które elementy kwiatu są męskimi organami rozmnażania?",
    "options": [
      "pręciki",
      "słupki",
      "płatki korony",
      "działki kielicha",
      "miodniki",
      "zalążnie"
    ],
    "answer": 0,
    "explanation": "Pręciki to męskie elementy kwiatu; na ich końcach znajdują się woreczki z pyłkiem zawierającym męskie komórki rozrodcze.",
    "image": "r04_budowa_kwiatu.jpg"
  },
  {
    "id": "R04_ROZM_02",
    "section": "Rozmnażanie i kwiaty",
    "type": "match",
    "prompt": "Połącz element kwiatu z jego opisem.",
    "options": null,
    "left": [
      "znamię",
      "zalążnia",
      "miodnik",
      "korona",
      "kielich"
    ],
    "right": [
      "część słupka przyjmująca pyłek",
      "część słupka z żeńskimi komórkami rozrodczymi",
      "wytwarza słodki nektar",
      "zbudowana z płatków",
      "zbudowany z działek chroniących pąk"
    ],
    "answer": {
      "znamię": "część słupka przyjmująca pyłek",
      "zalążnia": "część słupka z żeńskimi komórkami rozrodczymi",
      "miodnik": "wytwarza słodki nektar",
      "korona": "zbudowana z płatków",
      "kielich": "zbudowany z działek chroniących pąk"
    },
    "explanation": "Elementy kwiatu współdziałają w rozmnażaniu: część przywabia zapylacze, a część bierze bezpośredni udział w zapyleniu i zapłodnieniu.",
    "image": "r04_budowa_kwiatu.jpg"
  },
  {
    "id": "R04_ROZM_03",
    "section": "Rozmnażanie i kwiaty",
    "type": "fill_in",
    "prompt": "Zapylenie zachodzi, gdy ziarno pyłku trafi z __________ na znamię __________.",
    "options": null,
    "answer": [
      "pręcika",
      "słupka"
    ],
    "altAnswers": [
      [
        "pręcika",
        "precika",
        "pręcików",
        "precikow"
      ],
      [
        "słupka",
        "slupka"
      ]
    ],
    "explanation": "Zapylenie polega na przeniesieniu pyłku z pręcika na znamię słupka.",
    "image": "r04_zapylenie.jpg"
  },
  {
    "id": "R04_ROZM_04",
    "section": "Rozmnażanie i kwiaty",
    "type": "multi_select",
    "prompt": "Zaznacz cechy roślin wiatropylnych opisane w rozdziale.",
    "options": [
      "uwalniają bardzo duże ilości pyłku",
      "pyłek przenosi wiatr",
      "mają zwisające pręciki ułatwiające uwalnianie pyłku",
      "mają rozgałęzione znamiona wychwytujące pyłek",
      "zawsze mają duże barwne płatki i dużo nektaru"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Rośliny wiatropylne wykorzystują wiatr, dlatego produkują wiele pyłku i mają budowę ułatwiającą jego uwalnianie oraz wychwytywanie.",
    "image": "r04_zapylenie.jpg"
  },
  {
    "id": "R04_ROZM_05",
    "section": "Rozmnażanie i kwiaty",
    "type": "true_false",
    "prompt": "Dla rośliny zwykle korzystniejsze jest, gdy pyłek pochodzi od innej rośliny tego samego gatunku niż z tego samego kwiatu.",
    "options": null,
    "answer": true,
    "explanation": "Wtedy powstają nasiona o bardziej zróżnicowanym materiale genetycznym, co może pomagać roślinom lepiej radzić sobie w środowisku."
  },
  {
    "id": "R04_ROZM_06",
    "section": "Rozmnażanie i kwiaty",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do sposobu zapylania.",
    "options": null,
    "items": [
      "pyłek niesiony przez wiatr",
      "dużo drobnego pyłku",
      "kolorowe płatki",
      "nektar dla zwierząt",
      "pyłek przykleja się do ciała owada",
      "rozgałęzione znamiona"
    ],
    "categories": [
      "wiatropylność",
      "owadopylność"
    ],
    "answer": {
      "wiatropylność": [
        "pyłek niesiony przez wiatr",
        "dużo drobnego pyłku",
        "rozgałęzione znamiona"
      ],
      "owadopylność": [
        "kolorowe płatki",
        "nektar dla zwierząt",
        "pyłek przykleja się do ciała owada"
      ]
    },
    "explanation": "Kwiaty wiatropylne są przystosowane do przenoszenia pyłku przez powietrze, a owadopylne przywabiają zwierzęta i wykorzystują ich ciało do przeniesienia pyłku."
  },
  {
    "id": "R04_ROZM_07",
    "section": "Rozmnażanie i kwiaty",
    "type": "sequence",
    "prompt": "Ułóż etapy prowadzące od zapylenia do powstania owocu.",
    "options": null,
    "items": [
      "zalążnia przekształca się w owoc",
      "ziarno pyłku trafia na znamię słupka",
      "dochodzi do zapłodnienia",
      "wypustka z ziarna pyłku wrasta do wnętrza słupka",
      "zarodek zostaje zamknięty w nasieniu"
    ],
    "answer": [
      "ziarno pyłku trafia na znamię słupka",
      "wypustka z ziarna pyłku wrasta do wnętrza słupka",
      "dochodzi do zapłodnienia",
      "zarodek zostaje zamknięty w nasieniu",
      "zalążnia przekształca się w owoc"
    ],
    "explanation": "Najpierw pyłek trafia na znamię, potem męska komórka rozrodcza dociera do zalążni, gdzie dochodzi do zapłodnienia; następnie powstaje nasiono i owoc."
  },
  {
    "id": "R04_ROZM_08",
    "section": "Rozmnażanie i kwiaty",
    "type": "riddle",
    "prompt": "Jak nazywa się grupa wielu kwiatów zebranych razem, np. u koniczyny lub słonecznika?",
    "options": null,
    "answer": "kwiatostan",
    "altAnswers": [
      "kwiatostan",
      "kwiatostany"
    ],
    "explanation": "Kwiatostan jest utworzony przez wiele kwiatów, dzięki czemu cała grupa może być lepiej widoczna dla zapylaczy."
  },
  {
    "id": "R04_ROZM_09",
    "section": "Rozmnażanie i kwiaty",
    "type": "scenario",
    "prompt": "Truskawka wytwarza boczny pęd zwany rozłogiem. Gdy rozłóg zetknie się z ziemią, wypuszcza korzenie i daje początek nowej roślinie. Jaki typ rozmnażania opisano?",
    "options": [
      "rozmnażanie wegetatywne",
      "zapylenie wiatropylne",
      "zapłodnienie",
      "kiełkowanie nasiona",
      "powstawanie owocu",
      "tworzenie bielma"
    ],
    "answer": 0,
    "explanation": "Rozmnażanie wegetatywne polega na powstawaniu nowych roślin bezpośrednio z pędów lub korzeni rośliny rodzicielskiej, bez udziału kwiatów i nasion.",
    "image": "r04_wegetatywne.jpg"
  },
  {
    "id": "R04_ROZM_10",
    "section": "Rozmnażanie i kwiaty",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do elementów kwiatu: słupek, pręcik, płatek, bielmo.",
    "options": null,
    "answer": "bielmo",
    "explanation": "Bielmo jest częścią nasiona zawierającą zapas substancji odżywczych, a nie elementem kwiatu."
  },
  {
    "id": "R04_NAS_01",
    "section": "Nasiona i owoce",
    "type": "single_choice",
    "prompt": "Z jakich trzech podstawowych elementów składa się typowe nasiono roślin okrytonasiennych?",
    "options": [
      "z zarodka, łupiny nasiennej i zapasu substancji odżywczych",
      "z korzenia, łodygi i liścia",
      "z płatków, działek i miodników",
      "z pyłku, znamienia i nektaru",
      "z drewna, kory i łyka",
      "z ogonka, blaszki i brzegu"
    ],
    "answer": 0,
    "explanation": "Typowe nasiono zawiera zarodek, łupinę nasienną oraz zapas substancji odżywczych, często zgromadzony w bielmie.",
    "image": "r04_budowa_nasiona.jpg"
  },
  {
    "id": "R04_NAS_02",
    "section": "Nasiona i owoce",
    "type": "match",
    "prompt": "Połącz część nasiona z jej funkcją.",
    "options": null,
    "left": [
      "zarodek",
      "łupina nasienna",
      "bielmo"
    ],
    "right": [
      "nowo powstała roślina",
      "chroni nasiono przed wysychaniem i uszkodzeniami",
      "zawiera zapas cukrów, tłuszczów i białek"
    ],
    "answer": {
      "zarodek": "nowo powstała roślina",
      "łupina nasienna": "chroni nasiono przed wysychaniem i uszkodzeniami",
      "bielmo": "zawiera zapas cukrów, tłuszczów i białek"
    },
    "explanation": "Zarodek może rozwinąć się w nową roślinę, łupina pełni funkcję ochronną, a bielmo jest magazynem substancji odżywczych.",
    "image": "r04_budowa_nasiona.jpg"
  },
  {
    "id": "R04_NAS_03",
    "section": "Nasiona i owoce",
    "type": "true_false",
    "prompt": "Kiełkująca roślina od początku pobiera energię głównie dzięki fotosyntezie w liściach.",
    "options": null,
    "answer": false,
    "explanation": "Na początku kiełkująca roślina nie ma jeszcze rozwiniętych liści i korzysta z zapasów zgromadzonych w nasieniu, uzyskując energię przez oddychanie."
  },
  {
    "id": "R04_NAS_04",
    "section": "Nasiona i owoce",
    "type": "fill_in",
    "prompt": "Aby nasiono mogło kiełkować, potrzebna jest właściwa __________ oraz dostęp do __________ i __________.",
    "options": null,
    "answer": [
      "temperatura",
      "wody",
      "tlenu"
    ],
    "altAnswers": [
      [
        "temperatura",
        "odpowiednia temperatura",
        "właściwa temperatura",
        "wlasciwa temperatura"
      ],
      [
        "wody",
        "woda"
      ],
      [
        "tlenu",
        "tlen"
      ]
    ],
    "explanation": "Kiełkowanie wymaga odpowiednich warunków: właściwej temperatury, wody i tlenu; u części gatunków znaczenie ma też światło lub ciemność."
  },
  {
    "id": "R04_NAS_05",
    "section": "Nasiona i owoce",
    "type": "sort",
    "prompt": "Przyporządkuj przykład do sposobu rozsiewania nasion.",
    "options": null,
    "items": [
      "klon",
      "mniszek",
      "kosaciec",
      "niecierpek",
      "łopian",
      "jeżyna"
    ],
    "categories": [
      "przez wiatr",
      "przez wodę",
      "przez zwierzęta",
      "samorzutnie"
    ],
    "answer": {
      "przez wiatr": [
        "klon",
        "mniszek"
      ],
      "przez wodę": [
        "kosaciec"
      ],
      "przez zwierzęta": [
        "łopian",
        "jeżyna"
      ],
      "samorzutnie": [
        "niecierpek"
      ]
    },
    "explanation": "Klon i mniszek korzystają z wiatru, kosaciec z wody, łopian i jeżyna ze zwierząt, a niecierpek wyrzuca nasiona z pękającej torebki.",
    "image": "r04_rozsiewanie.jpg"
  },
  {
    "id": "R04_NAS_06",
    "section": "Nasiona i owoce",
    "type": "multi_select",
    "prompt": "Zaznacz sposoby rozsiewania nasion z udziałem zwierząt opisane w rozdziale.",
    "options": [
      "zwierzę zjada słodki owoc i usuwa nasiona z odchodami",
      "sójka lub wiewiórka zakopuje żołędzie na zapas",
      "rzep łopianu przyczepia się do sierści",
      "owoc klonu wiruje jak śmigło helikoptera",
      "nasiona kosaćca unoszą się na wodzie"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Zwierzęta rozsiewają nasiona po zjedzeniu owoców, przez gromadzenie zapasów albo przez przenoszenie owoców z haczykami na sierści.",
    "image": "r04_rozsiewanie.jpg"
  },
  {
    "id": "R04_NAS_07",
    "section": "Nasiona i owoce",
    "type": "scenario",
    "prompt": "Dojrzały owoc rośliny pęka po dotknięciu albo podmuchu wiatru i wyrzuca nasiona na znaczną odległość. Jaki sposób rozsiewania opisano?",
    "options": [
      "samorzutny",
      "przez wodę",
      "przez zapylacze",
      "przez bielmo",
      "przez fotosyntezę",
      "przez korzenie"
    ],
    "answer": 0,
    "explanation": "Tak rozsiewa nasiona niecierpek: jego torebka pęka i wyrzuca nasiona bezpośrednio z owocu.",
    "image": "r04_rozsiewanie.jpg"
  },
  {
    "id": "R04_NAS_08",
    "section": "Nasiona i owoce",
    "type": "riddle",
    "prompt": "Jak nazywa się pierwszy etap rozwoju rośliny, podczas którego z nasiona wydostaje się korzeń?",
    "options": null,
    "answer": "kiełkowanie",
    "altAnswers": [
      "kiełkowanie",
      "kielkowanie"
    ],
    "explanation": "Kiełkowanie zaczyna się od wypuszczenia korzenia przez pęknięcie powstałe w łupinie nasiennej."
  },
  {
    "id": "R04_NAS_09",
    "section": "Nasiona i owoce",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do sposobów rozsiewania nasion: przez wiatr, przez wodę, przez zwierzęta, przez pręciki.",
    "options": null,
    "answer": "przez pręciki",
    "explanation": "Pręciki biorą udział w wytwarzaniu pyłku, ale nie są sposobem rozsiewania nasion."
  },
  {
    "id": "R04_NAS_10",
    "section": "Nasiona i owoce",
    "type": "match",
    "prompt": "Połącz roślinę z przystosowaniem owocu do rozsiewania.",
    "options": null,
    "left": [
      "klon",
      "mniszek lekarski",
      "kosaciec",
      "łopian",
      "niecierpek"
    ],
    "right": [
      "skrzydełko umożliwiające wirowanie",
      "puch unoszony przez wiatr",
      "nasiona mogą płynąć z nurtem",
      "haczyki przyczepiające się do sierści",
      "pękająca torebka wyrzucająca nasiona"
    ],
    "answer": {
      "klon": "skrzydełko umożliwiające wirowanie",
      "mniszek lekarski": "puch unoszony przez wiatr",
      "kosaciec": "nasiona mogą płynąć z nurtem",
      "łopian": "haczyki przyczepiające się do sierści",
      "niecierpek": "pękająca torebka wyrzucająca nasiona"
    },
    "explanation": "Owoce mają różne przystosowania, które pomagają przenieść nasiona daleko od rośliny rodzicielskiej.",
    "image": "r04_rozsiewanie.jpg"
  },
  {
    "id": "R04_DRZ_01",
    "section": "Drzewa liściaste",
    "type": "single_choice",
    "prompt": "Z jakich dwóch głównych części składa się liść typowego drzewa liściastego?",
    "options": [
      "z blaszki liściowej i ogonka",
      "z płatka i działki",
      "z łupiny i bielma",
      "z korzenia i łodygi",
      "z pręcika i słupka",
      "z owocu i nasiona"
    ],
    "answer": 0,
    "explanation": "Liść typowego drzewa liściastego składa się z płaskiej blaszki osadzonej na ogonku.",
    "image": "r04_liscie_drzew.jpg"
  },
  {
    "id": "R04_DRZ_02",
    "section": "Drzewa liściaste",
    "type": "multi_select",
    "prompt": "Zaznacz cechy liści, które pomagają rozpoznawać gatunki drzew liściastych.",
    "options": [
      "kształt blaszki",
      "rodzaj brzegu liścia",
      "to, czy liść jest pojedynczy czy złożony",
      "układ listków w liściu złożonym",
      "liczba płatków w kwiecie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W rozpoznawaniu drzew po liściach pomagają m.in. kształt blaszki, typ brzegu i informacja, czy liść jest pojedynczy czy złożony.",
    "image": "r04_liscie_drzew.jpg"
  },
  {
    "id": "R04_DRZ_03",
    "section": "Drzewa liściaste",
    "type": "true_false",
    "prompt": "Liść pojedynczy ma blaszkę stanowiącą całość, niepodzieloną na osobne listki.",
    "options": null,
    "answer": true,
    "explanation": "Jeśli blaszka nie jest podzielona na listki, mówimy o liściu pojedynczym; jeśli składa się z kilku listków, jest to liść złożony."
  },
  {
    "id": "R04_DRZ_04",
    "section": "Drzewa liściaste",
    "type": "sort",
    "prompt": "Przyporządkuj drzewo do typu liścia.",
    "options": null,
    "items": [
      "kasztanowiec pospolity",
      "klon zwyczajny",
      "jesion wyniosły",
      "brzoza brodawkowata",
      "robinia akacjowa",
      "klon jesionolistny"
    ],
    "categories": [
      "liść pojedynczy",
      "liść złożony"
    ],
    "answer": {
      "liść pojedynczy": [
        "klon zwyczajny",
        "brzoza brodawkowata"
      ],
      "liść złożony": [
        "kasztanowiec pospolity",
        "jesion wyniosły",
        "robinia akacjowa",
        "klon jesionolistny"
      ]
    },
    "explanation": "Klon zwyczajny i brzoza mają liście pojedyncze, a kasztanowiec, jesion, robinia i klon jesionolistny mają liście złożone.",
    "image": "r04_drzewa_lisciaste.jpg"
  },
  {
    "id": "R04_DRZ_05",
    "section": "Drzewa liściaste",
    "type": "match",
    "prompt": "Połącz termin z opisem kształtu liścia.",
    "options": null,
    "left": [
      "dłoniastoklapowany",
      "pierzastoklapowany",
      "dłoniastozłożony",
      "pierzastozłożony"
    ],
    "right": [
      "klapy ułożone jak palce dłoni",
      "klapy ułożone wzdłuż osi jak w piórze",
      "listki rozchodzą się z jednego punktu jak dłoń",
      "listki ułożone parami wzdłuż osi"
    ],
    "answer": {
      "dłoniastoklapowany": "klapy ułożone jak palce dłoni",
      "pierzastoklapowany": "klapy ułożone wzdłuż osi jak w piórze",
      "dłoniastozłożony": "listki rozchodzą się z jednego punktu jak dłoń",
      "pierzastozłożony": "listki ułożone parami wzdłuż osi"
    },
    "explanation": "Terminy dotyczą sposobu podziału blaszki lub układu listków w liściu złożonym.",
    "image": "r04_liscie_drzew.jpg"
  },
  {
    "id": "R04_DRZ_06",
    "section": "Drzewa liściaste",
    "type": "scenario",
    "prompt": "Drzewo ma charakterystyczną białą korę. Jego liście są rombowate lub trójkątne, a owoce to małe orzeszki ze skrzydełkami. Który gatunek opisano?",
    "options": [
      "brzoza brodawkowata",
      "kasztanowiec pospolity",
      "dąb szypułkowy",
      "buk zwyczajny",
      "klon jawor",
      "lipa drobnolistna"
    ],
    "answer": 0,
    "explanation": "Opis pasuje do brzozy brodawkowatej, która ma białą korę oraz rombowate lub trójkątne liście o drobno piłkowanym brzegu.",
    "image": "r04_drzewa_lisciaste.jpg"
  },
  {
    "id": "R04_DRZ_07",
    "section": "Drzewa liściaste",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do drzew wytwarzających żołędzie: dąb czerwony, dąb szypułkowy, buk zwyczajny, kasztanowiec pospolity.",
    "options": null,
    "answer": "kasztanowiec pospolity",
    "explanation": "Dęby wytwarzają żołędzie, a buk ma orzeszki ukryte w kolczastej łupinie; kasztanowiec wytwarza kolczaste owoce z nasionami zwanymi kasztanami."
  },
  {
    "id": "R04_DRZ_08",
    "section": "Drzewa liściaste",
    "type": "riddle",
    "prompt": "Jak nazywają się owoce dębów opisanych w rozdziale?",
    "options": null,
    "answer": "żołędzie",
    "altAnswers": [
      "żołędzie",
      "zolędzie",
      "zoledzie",
      "żołądź",
      "zoladz"
    ],
    "explanation": "Zarówno dąb czerwony, jak i dąb szypułkowy mają owoce nazywane żołędziami."
  },
  {
    "id": "R04_DRZ_09",
    "section": "Drzewa liściaste",
    "type": "match",
    "prompt": "Połącz gatunek drzewa z cechą wymienioną w rozdziale.",
    "options": null,
    "left": [
      "kasztanowiec pospolity",
      "klon zwyczajny",
      "dąb czerwony",
      "buk zwyczajny",
      "klon jesionolistny"
    ],
    "right": [
      "liście dłoniastozłożone o 5-7 listkach",
      "jesienią liście żółte lub pomarańczowe",
      "jesienią liście czerwone",
      "orzeszki ukryte w kolczastej łupinie",
      "liście pierzastozłożone o 3-7 listkach"
    ],
    "answer": {
      "kasztanowiec pospolity": "liście dłoniastozłożone o 5-7 listkach",
      "klon zwyczajny": "jesienią liście żółte lub pomarańczowe",
      "dąb czerwony": "jesienią liście czerwone",
      "buk zwyczajny": "orzeszki ukryte w kolczastej łupinie",
      "klon jesionolistny": "liście pierzastozłożone o 3-7 listkach"
    },
    "explanation": "Rozdział podaje charakterystyczne cechy wybranych gatunków drzew liściastych spotykanych w Polsce.",
    "image": "r04_drzewa_lisciaste.jpg"
  },
  {
    "id": "R04_DRZ_10",
    "section": "Drzewa liściaste",
    "type": "fill_in",
    "prompt": "Brzeg liścia może być piłkowany, karbowany albo __________, czyli pozbawiony ząbków i karbów.",
    "options": null,
    "answer": [
      "cały"
    ],
    "altAnswers": [
      [
        "cały",
        "caly"
      ]
    ],
    "explanation": "Cały brzeg liścia nie ma ząbków ani karbów; rodzaj brzegu pomaga rozpoznawać gatunki drzew.",
    "image": "r04_liscie_drzew.jpg"
  },
  {
    "id": "R04_ZNAC_01",
    "section": "Znaczenie okrytonasiennych",
    "type": "true_false",
    "prompt": "Rośliny okrytonasienne tworzą większość środowisk życia dla innych organizmów.",
    "options": null,
    "answer": true,
    "explanation": "W rozdziale podano, że okrytonasienne tworzą m.in. łąki, zarośla, szuwary, lasy liściaste i wilgotne lasy równikowe.",
    "image": "r04_laka_las.jpg"
  },
  {
    "id": "R04_ZNAC_02",
    "section": "Znaczenie okrytonasiennych",
    "type": "multi_select",
    "prompt": "Zaznacz środowiska tworzone głównie przez rośliny okrytonasienne według rozdziału.",
    "options": [
      "łąki",
      "zarośla nadrzeczne",
      "szuwary",
      "lasy liściaste strefy umiarkowanej",
      "wilgotne lasy równikowe",
      "lodowiec bez roślin"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Okrytonasienne tworzą wiele środowisk życia, od łąk i szuwarów po lasy liściaste i wilgotne lasy równikowe.",
    "image": "r04_laka_las.jpg"
  },
  {
    "id": "R04_ZNAC_03",
    "section": "Znaczenie okrytonasiennych",
    "type": "single_choice",
    "prompt": "Gdzie rośliny okrytonasienne ustępują miejsca organizmom odporniejszym na trudne warunki?",
    "options": [
      "na dalekiej północy i w wysokich górach",
      "wyłącznie na łąkach",
      "tylko w sadach",
      "w każdym lesie liściastym",
      "w ogrodach i parkach",
      "wyłącznie w doniczkach"
    ],
    "answer": 0,
    "explanation": "Na dalekiej północy i w wysokich górach trudne warunki sprawiają, że częściej spotyka się m.in. rośliny nagonasienne, mchy i porosty."
  },
  {
    "id": "R04_ZNAC_04",
    "section": "Znaczenie okrytonasiennych",
    "type": "match",
    "prompt": "Połącz sposób wykorzystania roślin okrytonasiennych z przykładem.",
    "options": null,
    "left": [
      "pokarm dla ludzi",
      "pasza dla zwierząt",
      "substancje chemiczne",
      "elementy dekoracyjne",
      "materiały"
    ],
    "right": [
      "warzywa, owoce i produkty zbożowe",
      "trawa, siano i ziarna",
      "związki z ziół używane w medycynie lub przemyśle",
      "rośliny w parkach, ogrodach i doniczkach",
      "wiklina, bawełna, korek i drewno"
    ],
    "answer": {
      "pokarm dla ludzi": "warzywa, owoce i produkty zbożowe",
      "pasza dla zwierząt": "trawa, siano i ziarna",
      "substancje chemiczne": "związki z ziół używane w medycynie lub przemyśle",
      "elementy dekoracyjne": "rośliny w parkach, ogrodach i doniczkach",
      "materiały": "wiklina, bawełna, korek i drewno"
    },
    "explanation": "Rozdział pokazuje, że człowiek wykorzystuje rośliny okrytonasienne jako żywność, paszę, ozdobę, źródło materiałów i substancji chemicznych.",
    "image": "r04_zastosowania_roslin.jpg"
  },
  {
    "id": "R04_ZNAC_05",
    "section": "Znaczenie okrytonasiennych",
    "type": "multi_select",
    "prompt": "Zaznacz materiały uzyskiwane z roślin okrytonasiennych wymienione w rozdziale.",
    "options": [
      "wiklina",
      "bawełna",
      "korek",
      "drewno",
      "stal",
      "szkło"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Wśród materiałów pochodzących z roślin okrytonasiennych wymieniono wiklinę, bawełnę, korek i drewno.",
    "image": "r04_zastosowania_roslin.jpg"
  },
  {
    "id": "R04_ZNAC_06",
    "section": "Znaczenie okrytonasiennych",
    "type": "scenario",
    "prompt": "Krowy żywią się trawą, sianem i ziarnami. Jakie zastosowanie roślin okrytonasiennych przedstawia ta sytuacja?",
    "options": [
      "pasza dla zwierząt",
      "rozsiewanie przez wodę",
      "ochrona zarodka",
      "tworzenie liści złożonych",
      "zapylenie wiatrem",
      "kiełkowanie"
    ],
    "answer": 0,
    "explanation": "Trawa, siano i ziarna roślin okrytonasiennych są paszą dla zwierząt gospodarskich.",
    "image": "r04_zastosowania_roslin.jpg"
  },
  {
    "id": "R04_ZNAC_07",
    "section": "Znaczenie okrytonasiennych",
    "type": "riddle",
    "prompt": "Jak nazywa się grupa organizmów, dla których szczątki roślin, np. opadłe liście, są źródłem pokarmu?",
    "options": null,
    "answer": "saprofity",
    "altAnswers": [
      "saprofity",
      "saprofityczne organizmy",
      "saprofitycznych"
    ],
    "explanation": "Saprofitami nazywa się organizmy odżywiające się szczątkami innych organizmów, np. opadłymi liśćmi."
  },
  {
    "id": "R04_ZNAC_08",
    "section": "Znaczenie okrytonasiennych",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do zastosowań roślin okrytonasiennych przez człowieka: pożywienie, pasza, roślina ozdobna, szyszka.",
    "options": null,
    "answer": "szyszka",
    "explanation": "Pożywienie, pasza i rośliny ozdobne to zastosowania roślin okrytonasiennych; szyszka nie jest zastosowaniem, lecz organem typowym dla wielu nagonasiennych."
  },
  {
    "id": "R04_ZNAC_09",
    "section": "Znaczenie okrytonasiennych",
    "type": "fill_in",
    "prompt": "Rośliny okrytonasienne są pokarmem dla __________, a ich szczątki stanowią pożywienie __________.",
    "options": null,
    "answer": [
      "roślinożerców",
      "saprofitów"
    ],
    "altAnswers": [
      [
        "roślinożerców",
        "roslinozercow"
      ],
      [
        "saprofitów",
        "saprofitow"
      ]
    ],
    "explanation": "Liście, pędy, korzenie, owoce i nasiona są zjadane przez roślinożerców, a szczątki roślin odżywiają saprofity.",
    "image": "r04_laka_las.jpg"
  },
  {
    "id": "R04_ZNAC_10",
    "section": "Znaczenie okrytonasiennych",
    "type": "sort",
    "prompt": "Przyporządkuj znaczenie roślin okrytonasiennych do właściwej grupy.",
    "options": null,
    "items": [
      "tworzenie środowisk życia",
      "pokarm dla roślinożerców",
      "warzywa i owoce w diecie",
      "drewno i bawełna jako materiały",
      "rośliny ozdobne w domach",
      "pożywienie dla saprofitów"
    ],
    "categories": [
      "dla przyrody",
      "dla człowieka"
    ],
    "answer": {
      "dla przyrody": [
        "tworzenie środowisk życia",
        "pokarm dla roślinożerców",
        "pożywienie dla saprofitów"
      ],
      "dla człowieka": [
        "warzywa i owoce w diecie",
        "drewno i bawełna jako materiały",
        "rośliny ozdobne w domach"
      ]
    },
    "explanation": "Okrytonasienne są ważne ekologicznie, bo tworzą środowiska i łańcuchy pokarmowe, a człowiek wykorzystuje je m.in. jako jedzenie, materiały i ozdobę.",
    "image": "r04_laka_las.jpg"
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile gatunków roślin okrytonasiennych podano w rozdziale jako poznanych przez naukę?",
    "options": [
      "ponad 320 tysięcy",
      "około 36 tysięcy",
      "ponad 3 miliony",
      "około 99 tysięcy",
      "około 73 tysiące",
      "ponad 115 tysięcy"
    ],
    "answer": 0,
    "explanation": "W rozdziale napisano, że z około 360 tysięcy poznanych gatunków roślin ponad 320 tysięcy stanowią okrytonasienne."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz informacje o rekordowych roślinach zgodne z rozdziałem.",
    "options": [
      "Najwyższymi roślinami okrytonasiennymi są eukaliptusy królewskie",
      "Rekordowy eukaliptus królewski ma ponad 99 metrów",
      "Najwyższe drzewo świata to nagonasienna sekwoja wieczniezielona",
      "Najwyższe drzewo Europy opisane w rozdziale rośnie w Portugalii",
      "Najwyższym drzewem świata jest eukaliptus różnobarwny"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Rozdział odróżnia rekordowe okrytonasienne eukaliptusy od nagonasiennej sekwoi wieczniezielonej, która jest najwyższym drzewem świata.",
    "image": "r04_rekordowe_rosliny.jpg"
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Najwyższe drzewo Europy opisane w rozdziale to eukaliptus __________ rosnący w __________.",
    "options": null,
    "answer": [
      "różnobarwny",
      "Portugalii"
    ],
    "altAnswers": [
      [
        "różnobarwny",
        "roznobarwny"
      ],
      [
        "Portugalii",
        "Portugalia"
      ]
    ],
    "explanation": "W rozdziale podano, że najwyższe drzewo Europy to eukaliptus różnobarwny rosnący w Portugalii.",
    "image": "r04_rekordowe_rosliny.jpg"
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz zapylacza z grupą zwierząt lub opisem.",
    "options": null,
    "left": [
      "kruszczyca złotawka",
      "furczak gołąbek",
      "brylancik niebieskogardły",
      "nietoperz wieprzoryjek meksykański"
    ],
    "right": [
      "chrząszcz spotykany na kwiatach",
      "ćma przypominająca kolibra",
      "koliber",
      "ssak zapylający kwiaty"
    ],
    "answer": {
      "kruszczyca złotawka": "chrząszcz spotykany na kwiatach",
      "furczak gołąbek": "ćma przypominająca kolibra",
      "brylancik niebieskogardły": "koliber",
      "nietoperz wieprzoryjek meksykański": "ssak zapylający kwiaty"
    },
    "explanation": "Rozdział pokazuje różne zwierzęta zapylające: owady, ptaki i ssaki.",
    "image": "r04_zapylacze_swiata.jpg"
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Której barwy pszczoły nie rozróżniają według ciekawostki w rozdziale?",
    "options": [
      "czerwonej",
      "żółtej",
      "niebieskiej",
      "zielonej",
      "fioletowej",
      "białej"
    ],
    "answer": 0,
    "explanation": "W ciekawostce podano, że pszczoły nie rozróżniają barwy czerwonej, ale dostrzegają niewidoczne dla człowieka promieniowanie ultrafioletowe.",
    "image": "r04_zapylacze_swiata.jpg"
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Pszczoły mają ogromne znaczenie dla rolnictwa, bo bez ich zapylania wiele roślin uprawnych nie wytworzyłoby owoców i nasion.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział podkreśla, że pszczoły zapylają kwiaty roślin uprawnych, co umożliwia powstawanie owoców i nasion.",
    "image": "r04_zapylacze_swiata.jpg"
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Kwiat storczyka ma niewielką ilość nektaru ukrytą na końcu cienkiej wypustki długości około 30 cm. Jaka cecha zapylającego go motyla byłaby najbardziej przydatna?",
    "options": [
      "bardzo długa trąbka",
      "krótkie nogi",
      "twardy dziób do rozłupywania nasion",
      "szerokie liście",
      "gruba łupina nasienna",
      "kolczasty owoc"
    ],
    "answer": 0,
    "explanation": "Jeśli nektar znajduje się głęboko, zapylacz musi mieć odpowiednio długą trąbkę lub język, aby do niego sięgnąć.",
    "image": "r04_zapylacze_swiata.jpg"
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz zwierzę z miejscem wskazanym w rozdziale do odnalezienia na mapie.",
    "options": null,
    "left": [
      "brylancik niebieskogardły",
      "wari czarno-biały",
      "wieprzoryjek meksykański"
    ],
    "right": [
      "Ekwador",
      "Madagaskar",
      "Meksyk"
    ],
    "answer": {
      "brylancik niebieskogardły": "Ekwador",
      "wari czarno-biały": "Madagaskar",
      "wieprzoryjek meksykański": "Meksyk"
    },
    "explanation": "Rozdział zachęca do znalezienia na mapie miejsc występowania tych zwierząt: Ekwadoru, Madagaskaru i Meksyku."
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która roślina wytwarza największe nasiona świata opisane w rozdziale?",
    "options": [
      "lodicja seszelska",
      "brzoza brodawkowata",
      "topola",
      "mniszek lekarski",
      "kapusta warzywna",
      "niecierpek"
    ],
    "answer": 0,
    "explanation": "Największe nasiona świata, ważące po kilkanaście kilogramów, wytwarza palma lodicja seszelska.",
    "image": "r04_duze_i_male_nasiona.jpg"
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wybrane etapy planowania doświadczenia o kiełkowaniu nasion.",
    "options": null,
    "items": [
      "przygotuj próbę kontrolną",
      "sformułuj pytanie badawcze",
      "wybierz obiekt doświadczenia",
      "postaw hipotezę",
      "przeprowadź obserwacje",
      "wyciągnij wniosek"
    ],
    "answer": [
      "wybierz obiekt doświadczenia",
      "sformułuj pytanie badawcze",
      "postaw hipotezę",
      "przygotuj próbę kontrolną",
      "przeprowadź obserwacje",
      "wyciągnij wniosek"
    ],
    "explanation": "Planowanie doświadczenia zaczyna się od wyboru obiektu i pytania badawczego, potem stawia się hipotezę, przygotowuje próby, prowadzi obserwacje i formułuje wniosek."
  },
  {
    "id": "R04_HARD_11",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz zasady przygotowania plakatu informacyjnego wymienione w rozdziale.",
    "options": [
      "najpierw ustalić temat i tytuł",
      "w środkowej części przedstawić podstawowe dane",
      "większość informacji przekazywać obrazem",
      "na dole wypisać wykorzystane źródła",
      "nie podawać żadnych źródeł"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Instrukcja tworzenia plakatu podkreśla tytuł, dobór obiektu, materiały, przewagę obrazu nad tekstem oraz wypisanie źródeł."
  },
  {
    "id": "R04_HARD_12",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do odmian kapusty warzywnej pokazanych w rozdziale: brokuł, kalafior, jarmuż, marchew.",
    "options": null,
    "answer": "marchew",
    "explanation": "Brokuł, kalafior i jarmuż zostały pokazane jako odmiany kapusty warzywnej, natomiast marchew nie należy do tej grupy.",
    "image": "r04_kapusta_odmiany.jpg"
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r04",
  number: 4,
  title: "Rośliny okrytonasienne",
  icon: "🌸",
  sectionOrder: [
    "Charakterystyka i organy",
    "Rozmnażanie i kwiaty",
    "Nasiona i owoce",
    "Drzewa liściaste",
    "Znaczenie okrytonasiennych"
  ],
  sectionIcons: {
    "Charakterystyka i organy": "🌱",
    "Rozmnażanie i kwiaty": "🌼",
    "Nasiona i owoce": "🍎",
    "Drzewa liściaste": "🌳",
    "Znaczenie okrytonasiennych": "🌍"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
