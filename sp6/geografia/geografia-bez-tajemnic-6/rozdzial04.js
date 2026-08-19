// Skróty sekcji (do identyfikatorów ćwiczeń):
//   UNI  = Unia Europejska i podział polityczny Europy
//   LUD  = Rozmieszczenie ludności w Europie
//   STA  = Przyczyny i skutki starzenia się ludności
//   MIG  = Migracje w Europie
//   MIA  = Wielkie miasta Europy - Londyn i Paryż
//   FRA  = Nowoczesny przemysł i usługi w gospodarce Francji
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_UNI_01",
    "section": "Unia Europejska i podział polityczny Europy",
    "type": "single_choice",
    "prompt": "Co było głównym celem integracji europejskiej po II wojnie światowej?",
    "options": [
      "Zapobieganie konfliktom zbrojnym w Europie",
      "Zastąpienie wszystkich języków jednym językiem",
      "Przeniesienie stolic państw do Brukseli",
      "Zlikwidowanie wszystkich granic państwowych",
      "Utworzenie jednego państwa europejskiego",
      "Zakaz handlu między państwami"
    ],
    "answer": 0,
    "image": "r04_parlament_europejski.jpg",
    "explanation": "Po wojnie szukano sposobu, aby zapobiec kolejnym konfliktom. Współpraca gospodarcza miała sprawić, że wojny stałyby się nieopłacalne, a spory rozwiązywano by przy stole negocjacyjnym."
  },
  {
    "id": "R04_UNI_02",
    "section": "Unia Europejska i podział polityczny Europy",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady wpływu Unii Europejskiej na gospodarkę i społeczeństwa.",
    "options": [
      "Swobodniejsze przekraczanie granic i podróżowanie",
      "Możliwość podejmowania pracy w innych krajach UE",
      "Łatwiejszy handel bez ceł wewnątrz UE",
      "Finansowanie wspólnych celów z budżetu UE",
      "Obowiązek używania euro w każdym kraju Europy",
      "Zakaz sprzedaży usług za granicę"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r04_flaga_unii_europejskiej.jpg",
    "explanation": "Do skutków integracji europejskiej należą m.in. swobodniejsze podróżowanie, możliwość pracy w innych krajach, łatwiejszy handel bez ceł oraz wykorzystanie środków ze wspólnego budżetu."
  },
  {
    "id": "R04_UNI_03",
    "section": "Unia Europejska i podział polityczny Europy",
    "type": "true_false",
    "prompt": "Polska przystąpiła do Unii Europejskiej w 2004 roku wraz z dziewięcioma innymi państwami.",
    "options": null,
    "answer": true,
    "explanation": "Polska weszła do UE w 2004 roku razem z dziewięcioma innymi krajami."
  },
  {
    "id": "R04_UNI_04",
    "section": "Unia Europejska i podział polityczny Europy",
    "type": "fill_in",
    "prompt": "W 1952 roku zaczęła funkcjonować __________, a w 1993 roku wspólnoty europejskie przekształcono w __________.",
    "options": null,
    "answer": [
      "Europejska Wspólnota Węgla i Stali",
      "Unię Europejską"
    ],
    "altAnswers": [
      [
        "Europejska Wspólnota Węgla i Stali",
        "EWWiS",
        "Europejską Wspólnotę Węgla i Stali"
      ],
      [
        "Unię Europejską",
        "Unia Europejska",
        "UE"
      ]
    ],
    "explanation": "Europejska Wspólnota Węgla i Stali była pierwszym etapem integracji. W 1993 roku wspólnoty przekształcono w Unię Europejską."
  },
  {
    "id": "R04_UNI_05",
    "section": "Unia Europejska i podział polityczny Europy",
    "type": "riddle",
    "prompt": "Jak nazywa się podatek nakładany na towary przewożone przez granice państwowe?",
    "options": null,
    "answer": "cło",
    "altAnswers": [
      "cło",
      "clo"
    ],
    "explanation": "Cło to podatek od towarów przywożonych do kraju lub wywożonych za granicę. W handlu wewnątrz UE nie pobiera się ceł."
  },
  {
    "id": "R04_UNI_06",
    "section": "Unia Europejska i podział polityczny Europy",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo, które nie pasuje do krajów powstałych po rozpadzie Jugosławii: Serbia, Chorwacja, Słowenia, Ukraina.",
    "options": null,
    "answer": "Ukraina",
    "image": "r04_mapa_podzialu_politycznego_europy.jpg",
    "explanation": "Ukraina powstała po rozpadzie Związku Sowieckiego, a Serbia, Chorwacja i Słowenia należą do państw powstałych po rozpadzie Jugosławii."
  },
  {
    "id": "R04_UNI_07",
    "section": "Unia Europejska i podział polityczny Europy",
    "type": "scenario",
    "prompt": "Podróżni przejeżdżają z jednego państwa do drugiego bez kontroli granicznej, choć granice państw nadal istnieją. Do jakiej strefy odnosi się ten opis?",
    "options": [
      "Strefy Schengen",
      "Strefy klimatu śródziemnomorskiego",
      "Europejskiej Wspólnoty Węgla i Stali",
      "Strefy przemysłowej",
      "Obszaru wielkich aglomeracji",
      "Strefy euroazjatyckiej"
    ],
    "answer": 0,
    "explanation": "Brak kontroli przy przekraczaniu granic dotyczy państw należących do strefy Schengen. Nie oznacza to likwidacji granic państwowych."
  },
  {
    "id": "R04_UNI_08",
    "section": "Unia Europejska i podział polityczny Europy",
    "type": "match",
    "prompt": "Połącz wydarzenie z rokiem.",
    "options": null,
    "left": [
      "Początek funkcjonowania EWWiS",
      "Przekształcenie wspólnot w Unię Europejską",
      "Przystąpienie Polski do UE",
      "Brexit"
    ],
    "right": [
      "1952",
      "1993",
      "2004",
      "2020"
    ],
    "answer": {
      "Początek funkcjonowania EWWiS": "1952",
      "Przekształcenie wspólnot w Unię Europejską": "1993",
      "Przystąpienie Polski do UE": "2004",
      "Brexit": "2020"
    },
    "image": "r04_fundusze_europejskie_w_polsce.jpg",
    "explanation": "Daty pokazują kolejne etapy integracji i zmian w Unii Europejskiej."
  },
  {
    "id": "R04_UNI_09",
    "section": "Unia Europejska i podział polityczny Europy",
    "type": "sequence",
    "prompt": "Ułóż etapy integracji i zmian w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Przystąpienie Polski do Unii Europejskiej",
      "Początek funkcjonowania EWWiS",
      "Brexit",
      "Utworzenie EWG i Euratomu",
      "Przekształcenie wspólnot w Unię Europejską"
    ],
    "answer": [
      "Początek funkcjonowania EWWiS",
      "Utworzenie EWG i Euratomu",
      "Przekształcenie wspólnot w Unię Europejską",
      "Przystąpienie Polski do Unii Europejskiej",
      "Brexit"
    ],
    "explanation": "Najpierw zaczęła funkcjonować EWWiS, potem utworzono EWG i Euratom, w 1993 roku powstała UE, w 2004 roku Polska przystąpiła do UE, a Brexit dokonał się w 2020 roku."
  },
  {
    "id": "R04_LUD_01",
    "section": "Rozmieszczenie ludności w Europie",
    "type": "single_choice",
    "prompt": "W której części Europy występuje największa gęstość zaludnienia?",
    "options": [
      "W zachodniej części Europy",
      "W północnej części Europy",
      "Na najwyższych szczytach Alp",
      "Na Islandii",
      "Na obszarach subpolarnych",
      "Na pustynnych wybrzeżach Afryki"
    ],
    "answer": 0,
    "explanation": "Największa gęstość zaludnienia występuje w zachodniej części Europy."
  },
  {
    "id": "R04_LUD_02",
    "section": "Rozmieszczenie ludności w Europie",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki sprzyjające wysokiej gęstości zaludnienia w Europie Zachodniej.",
    "options": [
      "Sprzyjający klimat umiarkowany ciepły",
      "Wiele rzek dostarczających wody",
      "Liczne miasta przyciągające mieszkańców",
      "Wysoki poziom rozwoju gospodarczego",
      "Długie i mroźne zimy",
      "Położenie daleko od szlaków handlowych"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Wysokiej gęstości zaludnienia sprzyjają m.in. łagodniejszy klimat, dobre warunki dla rolnictwa, rzeki, nadmorskie niziny, liczne miasta i wysoki poziom rozwoju gospodarczego."
  },
  {
    "id": "R04_LUD_03",
    "section": "Rozmieszczenie ludności w Europie",
    "type": "true_false",
    "prompt": "Gęstość zaludnienia to liczba osób przypadających na jednostkę powierzchni, zwykle na kilometr kwadratowy.",
    "options": null,
    "answer": true,
    "explanation": "Gęstość zaludnienia to liczba osób przypadających na jednostkę powierzchni. Dzięki temu można porównywać zaludnienie państw i regionów o różnej powierzchni."
  },
  {
    "id": "R04_LUD_04",
    "section": "Rozmieszczenie ludności w Europie",
    "type": "fill_in",
    "prompt": "Całą Europę zamieszkuje nieznacznie ponad __________ ludzi, a średnia gęstość zaludnienia Europy wynosi około __________ os./km2.",
    "options": null,
    "answer": [
      "750 milionów",
      "70"
    ],
    "altAnswers": [
      [
        "750 milionów",
        "750 mln",
        "ponad 750 milionów"
      ],
      [
        "70",
        "około 70",
        "ok. 70"
      ]
    ],
    "explanation": "Zaludnienie można określać za pomocą liczby ludności oraz gęstości zaludnienia."
  },
  {
    "id": "R04_LUD_05",
    "section": "Rozmieszczenie ludności w Europie",
    "type": "riddle",
    "prompt": "Jak potocznie nazywa się Królestwo Niderlandów, w którym gęstość zaludnienia wynosi 522 os./km2?",
    "options": null,
    "answer": "Holandia",
    "altAnswers": [
      "Holandia",
      "Królestwo Niderlandów",
      "Niderlandy"
    ],
    "explanation": "Królestwo Niderlandów, czyli Holandia, ma bardzo dużą gęstość zaludnienia."
  },
  {
    "id": "R04_LUD_06",
    "section": "Rozmieszczenie ludności w Europie",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do czynników sprzyjających dużemu zaludnieniu: sprzyjający klimat, wiele rzek, liczne miasta, długie mroźne zimy.",
    "options": null,
    "answer": "długie mroźne zimy",
    "explanation": "Długie i mroźne zimy ograniczają zaludnienie, zwłaszcza w Europie Północnej. Pozostałe czynniki sprzyjają osadnictwu."
  },
  {
    "id": "R04_LUD_07",
    "section": "Rozmieszczenie ludności w Europie",
    "type": "scenario",
    "prompt": "W pobliżu kopalni i zakładów przemysłowych powstały osiedla dla robotników i ich rodzin. Który czynnik wpłynął tu na rozmieszczenie ludności?",
    "options": [
      "Występowanie surowców mineralnych i rozwój przemysłu",
      "Brak możliwości uprawy zbóż",
      "Oddalenie od szlaków handlowych",
      "Granica strefy Schengen",
      "Występowanie klimatu subpolarnego",
      "Brak dużych miast"
    ],
    "answer": 0,
    "image": "r04_osiedle_robotnicze_gorny_slask.jpg",
    "explanation": "Rozwój kopalń i zakładów przetwarzających surowce przyciągał pracowników, czego przykładem jest Górny Śląsk."
  },
  {
    "id": "R04_LUD_08",
    "section": "Rozmieszczenie ludności w Europie",
    "type": "match",
    "prompt": "Połącz pojęcie z opisem.",
    "options": null,
    "left": [
      "Liczba ludności",
      "Gęstość zaludnienia",
      "Rozmieszczenie równomierne",
      "Rozmieszczenie nierównomierne"
    ],
    "right": [
      "Całkowita liczba mieszkańców obszaru",
      "Liczba osób na jednostkę powierzchni",
      "Ludzie mieszkają w wielu częściach bez wyraźnych pustek",
      "W jednych częściach ludzi jest wyraźnie więcej niż w innych"
    ],
    "answer": {
      "Liczba ludności": "Całkowita liczba mieszkańców obszaru",
      "Gęstość zaludnienia": "Liczba osób na jednostkę powierzchni",
      "Rozmieszczenie równomierne": "Ludzie mieszkają w wielu częściach bez wyraźnych pustek",
      "Rozmieszczenie nierównomierne": "W jednych częściach ludzi jest wyraźnie więcej niż w innych"
    },
    "image": "r04_murcja_nad_rzeka.jpg",
    "explanation": "Te pojęcia służą do opisywania tego, ile osób mieszka na danym obszarze i jak są rozmieszczone."
  },
  {
    "id": "R04_LUD_09",
    "section": "Rozmieszczenie ludności w Europie",
    "type": "sort",
    "prompt": "Przyporządkuj czynniki do wpływu na gęstość zaludnienia.",
    "options": null,
    "items": [
      "klimat umiarkowany ciepły",
      "wiele rzek",
      "liczne miasta",
      "wysoki poziom rozwoju",
      "klimat subpolarny",
      "brak dużych ośrodków miejskich",
      "utrudnione uprawy",
      "oddalenie od szlaków handlowych"
    ],
    "categories": [
      "sprzyjają zaludnieniu",
      "ograniczają zaludnienie"
    ],
    "answer": {
      "sprzyjają zaludnieniu": [
        "klimat umiarkowany ciepły",
        "wiele rzek",
        "liczne miasta",
        "wysoki poziom rozwoju"
      ],
      "ograniczają zaludnienie": [
        "klimat subpolarny",
        "brak dużych ośrodków miejskich",
        "utrudnione uprawy",
        "oddalenie od szlaków handlowych"
      ]
    },
    "explanation": "Łagodny klimat, rzeki, miasta i rozwój gospodarczy sprzyjają zaludnieniu. Chłodny klimat, brak upraw, brak miast i oddalenie od szlaków je ograniczają."
  },
  {
    "id": "R04_STA_01",
    "section": "Przyczyny i skutki starzenia się ludności",
    "type": "single_choice",
    "prompt": "Na czym polega starzenie się ludności?",
    "options": [
      "Na wzroście udziału osób starszych i spadku odsetka młodych",
      "Na wyłącznie szybszym rozwoju miast",
      "Na zwiększaniu liczby dzieci w rodzinach",
      "Na stałym odpływie wszystkich mieszkańców z Europy",
      "Na zastępowaniu przemysłu rolnictwem",
      "Na likwidacji emerytur"
    ],
    "answer": 0,
    "image": "r04_opieka_nad_seniorem.jpg",
    "explanation": "Starzenie się ludności to wzrost udziału osób starszych przy jednoczesnym spadku odsetka osób młodych w społeczeństwie."
  },
  {
    "id": "R04_STA_02",
    "section": "Przyczyny i skutki starzenia się ludności",
    "type": "multi_select",
    "prompt": "Zaznacz przyczyny odkładania decyzji o założeniu rodziny.",
    "options": [
      "Chęć zdobycia wykształcenia",
      "Dążenie do niezależności finansowej",
      "Kariera zawodowa",
      "Realizacja pasji",
      "Wysokie ceny mieszkań",
      "Obowiązek posiadania trojga dzieci"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Do przyczyn odkładania decyzji o założeniu rodziny należą m.in. chęć zdobycia wykształcenia, kariera, niezależność finansowa, realizacja pasji, wysokie ceny mieszkań i niestabilna sytuacja zawodowa."
  },
  {
    "id": "R04_STA_03",
    "section": "Przyczyny i skutki starzenia się ludności",
    "type": "true_false",
    "prompt": "Mężczyźni w Europie żyją średnio około 6 lat krócej niż kobiety.",
    "options": null,
    "answer": true,
    "explanation": "Na wykresie oczekiwanej długości życia zaznaczono, że mężczyźni średnio żyją około 6 lat krócej niż kobiety."
  },
  {
    "id": "R04_STA_04",
    "section": "Przyczyny i skutki starzenia się ludności",
    "type": "fill_in",
    "prompt": "Starzenie się ludności wynika ze spadku liczby __________ oraz z rosnącej __________.",
    "options": null,
    "answer": [
      "rodzących się dzieci",
      "przeciętnej długości życia"
    ],
    "altAnswers": [
      [
        "rodzących się dzieci",
        "urodzeń",
        "dzieci"
      ],
      [
        "przeciętnej długości życia",
        "średniej długości życia",
        "długości życia"
      ]
    ],
    "explanation": "Dwie główne przyczyny starzenia się ludności to mniejsza liczba rodzących się dzieci i wzrost przeciętnej długości życia."
  },
  {
    "id": "R04_STA_05",
    "section": "Przyczyny i skutki starzenia się ludności",
    "type": "riddle",
    "prompt": "Jak nazywają się świadczenia pieniężne wypłacane osobom, które osiągnęły odpowiedni wiek?",
    "options": null,
    "answer": "emerytury",
    "altAnswers": [
      "emerytury",
      "emerytura"
    ],
    "explanation": "Emerytury są wypłacane osobom, które osiągnęły odpowiedni wiek. Częściowo lub całkowicie pochodzą ze składek osób pracujących."
  },
  {
    "id": "R04_STA_06",
    "section": "Przyczyny i skutki starzenia się ludności",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do skutków starzenia się ludności: brak pracowników, obciążenie służby zdrowia, problemy z wypłatą emerytur, wzrost liczby dzieci.",
    "options": null,
    "answer": "wzrost liczby dzieci",
    "explanation": "Wzrost liczby dzieci nie jest skutkiem starzenia się ludności. Przeciwnie, spadek liczby dzieci jest jedną z przyczyn tego procesu."
  },
  {
    "id": "R04_STA_07",
    "section": "Przyczyny i skutki starzenia się ludności",
    "type": "scenario",
    "prompt": "W firmie wielu pracowników odchodzi na emeryturę, a młodszych osób jest zbyt mało, by ich zastąpić. Jaki skutek starzenia się ludności pokazuje ta sytuacja?",
    "options": [
      "Problemy z brakiem pracowników",
      "Wzrost liczby dzieci w szkołach",
      "Zmniejszenie zapotrzebowania na lekarzy",
      "Spadek liczby emerytów",
      "Zwiększenie liczby osób płacących składki",
      "Równomierne rozmieszczenie ludności"
    ],
    "answer": 0,
    "image": "r04_opieka_nad_seniorem.jpg",
    "explanation": "Starzenie się ludności zmniejsza liczbę osób pracujących, przez co firmy mogą mieć trudności ze znalezieniem pracowników."
  },
  {
    "id": "R04_STA_08",
    "section": "Przyczyny i skutki starzenia się ludności",
    "type": "match",
    "prompt": "Połącz przyczynę lub zjawisko ze skutkiem.",
    "options": null,
    "left": [
      "Spadek liczby dzieci",
      "Rosnąca długość życia",
      "Mniej osób odprowadza składki",
      "Więcej osób starszych"
    ],
    "right": [
      "Mniejszy odsetek młodych w społeczeństwie",
      "Większy udział seniorów",
      "Trudności z finansowaniem emerytur",
      "Większe zapotrzebowanie na opiekę medyczną"
    ],
    "answer": {
      "Spadek liczby dzieci": "Mniejszy odsetek młodych w społeczeństwie",
      "Rosnąca długość życia": "Większy udział seniorów",
      "Mniej osób odprowadza składki": "Trudności z finansowaniem emerytur",
      "Więcej osób starszych": "Większe zapotrzebowanie na opiekę medyczną"
    },
    "explanation": "Mniejsza liczba dzieci i dłuższe życie zwiększają udział osób starszych, a to wpływa na rynek pracy, służbę zdrowia i emerytury."
  },
  {
    "id": "R04_STA_09",
    "section": "Przyczyny i skutki starzenia się ludności",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do przyczyn i skutków starzenia się ludności.",
    "options": null,
    "items": [
      "spadek liczby rodzących się dzieci",
      "wzrost średniej długości życia",
      "kariera przed założeniem rodziny",
      "brak pracowników",
      "większe potrzeby opieki medycznej",
      "problemy z wypłatą emerytur"
    ],
    "categories": [
      "przyczyny",
      "skutki"
    ],
    "answer": {
      "przyczyny": [
        "spadek liczby rodzących się dzieci",
        "wzrost średniej długości życia",
        "kariera przed założeniem rodziny"
      ],
      "skutki": [
        "brak pracowników",
        "większe potrzeby opieki medycznej",
        "problemy z wypłatą emerytur"
      ]
    },
    "explanation": "Przyczyny dotyczą mniejszej liczby urodzeń oraz dłuższego życia. Skutki obejmują problemy na rynku pracy, obciążenie służby zdrowia i wypłatę emerytur."
  },
  {
    "id": "R04_MIG_01",
    "section": "Migracje w Europie",
    "type": "single_choice",
    "prompt": "Czym jest migracja?",
    "options": [
      "Przemieszczaniem się ludności prowadzącym do zmiany miejsca zamieszkania",
      "Podatkiem od towarów przewożonych przez granice",
      "Miastem położonym blisko innego miasta",
      "Wzrostem udziału osób starszych",
      "Działem gospodarki opartym na usługach",
      "Granica bez kontroli paszportowej"
    ],
    "answer": 0,
    "image": "r04_lodz_z_migrantami.jpg",
    "explanation": "Migracja to przemieszczanie się ludności, którego skutkiem jest zmiana miejsca zamieszkania przez migranta."
  },
  {
    "id": "R04_MIG_02",
    "section": "Migracje w Europie",
    "type": "multi_select",
    "prompt": "Zaznacz najczęstsze przyczyny współczesnych migracji.",
    "options": [
      "Chęć znalezienia pracy",
      "Chęć poprawy warunków życia",
      "Poszukiwanie bezpieczeństwa",
      "Ucieczka przed konfliktem lub prześladowaniem",
      "Konieczność opłacenia cła",
      "Chęć zmniejszenia różnorodności kulturowej"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Większość migracji wynika z chęci poprawy warunków życia i znalezienia pracy, a część z potrzeby bezpieczeństwa, ucieczki przed konfliktem lub prześladowaniem."
  },
  {
    "id": "R04_MIG_03",
    "section": "Migracje w Europie",
    "type": "true_false",
    "prompt": "Więcej osób przyjeżdża do Unii Europejskiej, niż z niej wyjeżdża.",
    "options": null,
    "answer": true,
    "explanation": "Więcej osób przyjeżdża do UE, niż ją opuszcza, co wpływa na liczbę ludności kontynentu."
  },
  {
    "id": "R04_MIG_04",
    "section": "Migracje w Europie",
    "type": "fill_in",
    "prompt": "Osoba opuszczająca kraj w celu zmiany miejsca zamieszkania to __________, a osoba przybywająca do kraju to __________.",
    "options": null,
    "answer": [
      "emigrant",
      "imigrant"
    ],
    "altAnswers": [
      [
        "emigrant",
        "emigrantka"
      ],
      [
        "imigrant",
        "imigrantka"
      ]
    ],
    "explanation": "Emigracja oznacza opuszczanie kraju, a imigracja - przybywanie do kraju. Dlatego mówimy o emigrancie i imigrancie."
  },
  {
    "id": "R04_MIG_05",
    "section": "Migracje w Europie",
    "type": "riddle",
    "prompt": "Jak nazywa się osoba, która opuściła ojczysty kraj z powodu zagrożenia bezpieczeństwa, wojny lub prześladowań?",
    "options": null,
    "answer": "uchodźca",
    "altAnswers": [
      "uchodźca",
      "uchodzca",
      "uchodźczyni"
    ],
    "explanation": "Uchodźcy nie planują zwykłej emigracji, lecz ratują siebie i rodziny przed wojną albo prześladowaniami."
  },
  {
    "id": "R04_MIG_06",
    "section": "Migracje w Europie",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do prac często wykonywanych przez imigrantów: usługi porządkowe, usługi budowlane, usługi gastronomiczne, wydobycie węgla.",
    "options": null,
    "answer": "wydobycie węgla",
    "explanation": "Imigranci często pracują m.in. w usługach porządkowych, budowlanych, gastronomicznych i transportowych, a nie przy wydobyciu węgla."
  },
  {
    "id": "R04_MIG_07",
    "section": "Migracje w Europie",
    "type": "scenario",
    "prompt": "Rodzina nagle opuszcza kraj, bo w jej okolicy wybuchła wojna. Trafia do tymczasowego obozu, gdzie potrzebuje schronienia, żywności i opieki medycznej. Jakie zjawisko opisuje ta sytuacja?",
    "options": [
      "Uchodźstwo",
      "Rozwój turystyki",
      "Brexit",
      "Gęstość zaludnienia",
      "Aglomeracja",
      "Strefa euro"
    ],
    "answer": 0,
    "image": "r04_uchodzcy_na_granicy.jpg",
    "explanation": "To uchodźstwo, czyli ucieczka przed wojną lub prześladowaniem. Uchodźcom trzeba zapewnić podstawowe warunki życia."
  },
  {
    "id": "R04_MIG_08",
    "section": "Migracje w Europie",
    "type": "match",
    "prompt": "Połącz przyczynę lub zjawisko migracyjne z opisanym skutkiem.",
    "options": null,
    "left": [
      "Brak pracy w kraju wyjazdu",
      "Napływ imigrantów",
      "Nieskuteczna integracja",
      "Ucieczka przed wojną"
    ],
    "right": [
      "Szukanie zatrudnienia za granicą",
      "Większa różnorodność kulturowa",
      "Możliwe napięcia narodowościowe",
      "Potrzeba schronienia i pomocy"
    ],
    "answer": {
      "Brak pracy w kraju wyjazdu": "Szukanie zatrudnienia za granicą",
      "Napływ imigrantów": "Większa różnorodność kulturowa",
      "Nieskuteczna integracja": "Możliwe napięcia narodowościowe",
      "Ucieczka przed wojną": "Potrzeba schronienia i pomocy"
    },
    "image": "r04_restauracja_turecka_niemcy.jpg",
    "explanation": "Migracje mogą poprawiać sytuację życiową migrantów i uzupełniać braki na rynku pracy, ale mogą też powodować trudności, jeśli integracja nie przebiega skutecznie."
  },
  {
    "id": "R04_MIG_09",
    "section": "Migracje w Europie",
    "type": "sort",
    "prompt": "Pogrupuj skutki migracji.",
    "options": null,
    "items": [
      "wypełnianie luk na rynku pracy",
      "większa różnorodność kulturowa",
      "specjały innych kuchni",
      "przeludnienie obozów",
      "konflikty z lokalną ludnością",
      "zależność od pomocy państwa"
    ],
    "categories": [
      "pozytywne skutki",
      "negatywne skutki"
    ],
    "answer": {
      "pozytywne skutki": [
        "wypełnianie luk na rynku pracy",
        "większa różnorodność kulturowa",
        "specjały innych kuchni"
      ],
      "negatywne skutki": [
        "przeludnienie obozów",
        "konflikty z lokalną ludnością",
        "zależność od pomocy państwa"
      ]
    },
    "explanation": "Skutki migracji zależą od integracji. Migranci mogą wspierać gospodarkę i kulturę, ale przy dużych trudnościach mogą pojawić się napięcia i problemy organizacyjne."
  },
  {
    "id": "R04_MIA_01",
    "section": "Wielkie miasta Europy - Londyn i Paryż",
    "type": "single_choice",
    "prompt": "Które miasto określa się jako jedno z najważniejszych światowych centrów finansowych?",
    "options": [
      "Londyn",
      "Paryż",
      "Moskwa",
      "Stambuł",
      "Monako",
      "Murcja"
    ],
    "answer": 0,
    "image": "r04_centra_londynu_paryza.jpg",
    "explanation": "Londyńskie City jest jednym z najważniejszych centrów finansowych na świecie."
  },
  {
    "id": "R04_MIA_02",
    "section": "Wielkie miasta Europy - Londyn i Paryż",
    "type": "multi_select",
    "prompt": "Zaznacz informacje odnoszące się do Paryża.",
    "options": [
      "Stolica Francji",
      "Światowa stolica mody i wykwintnej kuchni",
      "Siedziby organizacji międzynarodowych",
      "Luwr i Wieża Eiffla",
      "Siedziba rodziny królewskiej w Pałacu Buckingham",
      "Londyńskie City"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Paryż jest stolicą Francji, światową stolicą mody i wykwintnej kuchni, ma siedziby organizacji międzynarodowych oraz zabytki takie jak Luwr i Wieża Eiffla."
  },
  {
    "id": "R04_MIA_03",
    "section": "Wielkie miasta Europy - Londyn i Paryż",
    "type": "true_false",
    "prompt": "Paryż i Londyn są miastami wielokulturowymi, ponieważ przyciągają imigrantów z różnych stron świata.",
    "options": null,
    "answer": true,
    "explanation": "Oba miasta są zamieszkane przez wielu imigrantów, dlatego są wielokulturowe i różnorodne."
  },
  {
    "id": "R04_MIA_04",
    "section": "Wielkie miasta Europy - Londyn i Paryż",
    "type": "fill_in",
    "prompt": "W Paryżu zrezygnowano z przesuwania granic administracyjnych w __________, a granice Londynu ustalono __________ lat później.",
    "options": null,
    "answer": [
      "1860 roku",
      "105"
    ],
    "altAnswers": [
      [
        "1860 roku",
        "1860",
        "w 1860 roku"
      ],
      [
        "105",
        "sto pięć",
        "105 lat"
      ]
    ],
    "explanation": "Granice administracyjne miast wyznaczano inaczej: Paryż zachował dziewiętnastowieczne rozmiary, a Londyn ustalił granice znacznie później."
  },
  {
    "id": "R04_MIA_05",
    "section": "Wielkie miasta Europy - Londyn i Paryż",
    "type": "riddle",
    "prompt": "Jak nazywa się kilka lub kilkanaście blisko położonych miast wzajemnie powiązanych np. dojazdami do pracy?",
    "options": null,
    "answer": "aglomeracja",
    "altAnswers": [
      "aglomeracja",
      "aglomerację"
    ],
    "explanation": "Aglomeracja to zespół miast powiązanych funkcjonalnie z dominującym ośrodkiem centralnym. Paryż i Londyn tworzą aglomeracje liczące ponad 10 milionów mieszkańców."
  },
  {
    "id": "R04_MIA_06",
    "section": "Wielkie miasta Europy - Londyn i Paryż",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do zabytków Londynu: Pałac Buckingham, Pałac Westminsterski, Tower Bridge, Łuk Triumfalny.",
    "options": null,
    "answer": "Łuk Triumfalny",
    "explanation": "Łuk Triumfalny należy do znanych zabytków Paryża. Pozostałe obiekty są związane z Londynem."
  },
  {
    "id": "R04_MIA_07",
    "section": "Wielkie miasta Europy - Londyn i Paryż",
    "type": "scenario",
    "prompt": "Rodzina szuka tańszego mieszkania poza centrum wielkiej metropolii. Codziennie pokonuje dziesiątki kilometrów do pracy, a ulice są zakorkowane. Jakie zjawisko opisuje ta sytuacja?",
    "options": [
      "Rozrastanie się przedmieść",
      "Brexit",
      "Spadek liczby dzieci",
      "Wzrost ceł",
      "Ucieczka przed prześladowaniem",
      "Powstawanie EWWiS"
    ],
    "answer": 0,
    "explanation": "Wysokie ceny nieruchomości w centrach Londynu i Paryża powodują rozrastanie się przedmieść i długie dojazdy mieszkańców."
  },
  {
    "id": "R04_MIA_08",
    "section": "Wielkie miasta Europy - Londyn i Paryż",
    "type": "match",
    "prompt": "Połącz miejsce lub obiekt z miastem.",
    "options": null,
    "left": [
      "City",
      "La Défense",
      "Heathrow",
      "Charles de Gaulle"
    ],
    "right": [
      "Londyn",
      "Paryż",
      "Londyn",
      "Paryż"
    ],
    "answer": {
      "City": "Londyn",
      "La Défense": "Paryż",
      "Heathrow": "Londyn",
      "Charles de Gaulle": "Paryż"
    },
    "image": "r04_transport_wielkich_miast.jpg",
    "explanation": "Londyn i Paryż mają własne dzielnice biznesowe, lotniska i charakterystyczne obiekty."
  },
  {
    "id": "R04_MIA_09",
    "section": "Wielkie miasta Europy - Londyn i Paryż",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia i informacje w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Rekordowy upał w Paryżu przekroczył 42 stopnie C",
      "Igrzyska olimpijskie w Londynie",
      "Granice administracyjne Londynu ustalono 105 lat po paryskich",
      "Igrzyska olimpijskie w Paryżu",
      "Paryż zrezygnował z przesuwania granic administracyjnych"
    ],
    "answer": [
      "Paryż zrezygnował z przesuwania granic administracyjnych",
      "Granice administracyjne Londynu ustalono 105 lat po paryskich",
      "Igrzyska olimpijskie w Londynie",
      "Rekordowy upał w Paryżu przekroczył 42 stopnie C",
      "Igrzyska olimpijskie w Paryżu"
    ],
    "explanation": "Paryż przestał przesuwać granice w 1860 roku, Londyn ustalił granice 105 lat później, igrzyska w Londynie odbyły się w 2012 roku, rekordowy upał w Paryżu odnotowano w 2019 roku, a igrzyska w Paryżu zaplanowano na 2024 rok."
  },
  {
    "id": "R04_FRA_01",
    "section": "Nowoczesny przemysł i usługi w gospodarce Francji",
    "type": "single_choice",
    "prompt": "W którym sektorze pracuje większość pracujących mieszkańców Francji?",
    "options": [
      "W usługach",
      "W rolnictwie",
      "W rybołówstwie",
      "W wydobyciu węgla",
      "W leśnictwie",
      "W tradycyjnym rzemiośle"
    ],
    "answer": 0,
    "explanation": "Wysoki poziom rozwoju gospodarczego Francji przejawia się m.in. tym, że większość pracujących mieszkańców jest zatrudniona w usługach."
  },
  {
    "id": "R04_FRA_02",
    "section": "Nowoczesny przemysł i usługi w gospodarce Francji",
    "type": "multi_select",
    "prompt": "Zaznacz cechy świadczące o wysokim poziomie rozwoju gospodarczego Francji.",
    "options": [
      "Większość pracujących jest zatrudniona w usługach",
      "Wysoka wydajność pracy",
      "Wykorzystywanie najnowszych osiągnięć techniki",
      "Wykonywanie wielu zadań przez komputery i roboty",
      "Większość pracuje w rolnictwie",
      "Niska wydajność pracy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Nowoczesną gospodarkę cechują m.in. przewaga zatrudnienia w usługach, wysoka wydajność pracy i wykorzystywanie najnowszych osiągnięć techniki, komputerów oraz robotów."
  },
  {
    "id": "R04_FRA_03",
    "section": "Nowoczesny przemysł i usługi w gospodarce Francji",
    "type": "true_false",
    "prompt": "Przemysł obejmuje m.in. pozyskiwanie i przetwarzanie surowców oraz produkowanie przedmiotów przy użyciu maszyn.",
    "options": null,
    "answer": true,
    "explanation": "Tak wyjaśnia się działalność przemysłu: obejmuje ona pozyskiwanie i przetwarzanie surowców, wytwarzanie dóbr oraz produkcję przedmiotów w dużych ilościach."
  },
  {
    "id": "R04_FRA_04",
    "section": "Nowoczesny przemysł i usługi w gospodarce Francji",
    "type": "fill_in",
    "prompt": "Francja od dawna specjalizuje się w energetyce __________, a jednym z ważnych działów jej przemysłu jest przemysł __________.",
    "options": null,
    "answer": [
      "jądrowej",
      "lotniczy"
    ],
    "altAnswers": [
      [
        "jądrowej",
        "jadrowej"
      ],
      [
        "lotniczy",
        "lotniczym"
      ]
    ],
    "image": "r04_elektrownia_jadrowa_francja.jpg",
    "explanation": "Energetyka jądrowa oraz przemysł lotniczy są ważnymi elementami nowoczesnej gospodarki Francji."
  },
  {
    "id": "R04_FRA_05",
    "section": "Nowoczesny przemysł i usługi w gospodarce Francji",
    "type": "riddle",
    "prompt": "Jak nazywają się supernowoczesne francuskie pociągi, które kursują między największymi miastami i rozwijają prędkość do 320 km/h?",
    "options": null,
    "answer": "TGV",
    "altAnswers": [
      "TGV",
      "tgv"
    ],
    "image": "r04_pociag_tgv.jpg",
    "explanation": "Francuskie pociągi TGV są przykładem nowoczesnego transportu kolejowego."
  },
  {
    "id": "R04_FRA_06",
    "section": "Nowoczesny przemysł i usługi w gospodarce Francji",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do kategorii usług: usługi finansowe, usługi medyczne, usługi transportowe, wydobycie surowców.",
    "options": null,
    "answer": "wydobycie surowców",
    "explanation": "Wydobycie surowców należy do przemysłu, a nie do usług. Do ważnych kategorii usług należą usługi finansowe, medyczne i transportowe."
  },
  {
    "id": "R04_FRA_07",
    "section": "Nowoczesny przemysł i usługi w gospodarce Francji",
    "type": "scenario",
    "prompt": "Fabryka wykorzystuje roboty i komputery, wytwarza zaawansowane technicznie produkty oraz stara się zużywać jak najmniej surowców. Co opisuje ta sytuacja?",
    "options": [
      "Nowoczesny przemysł",
      "Rolnictwo tradycyjne",
      "Równomierne rozmieszczenie ludności",
      "Strefa Schengen",
      "Uchodźstwo",
      "Nastroje antyunijne"
    ],
    "answer": 0,
    "explanation": "To cechy nowoczesnego przemysłu: nowe technologie, zaawansowane produkty, możliwie niewielkie zużycie surowców i dbałość o środowisko."
  },
  {
    "id": "R04_FRA_08",
    "section": "Nowoczesny przemysł i usługi w gospodarce Francji",
    "type": "match",
    "prompt": "Połącz dział gospodarki Francji z korzyścią.",
    "options": null,
    "left": [
      "Energetyka jądrowa",
      "Przemysł lotniczy",
      "Produkcja gier komputerowych",
      "Telekomunikacja"
    ],
    "right": [
      "Dostęp do tańszej energii",
      "Dochody ze sprzedaży samolotów i technologii",
      "Rozwój technologii informatycznych",
      "Efektywna wymiana informacji"
    ],
    "answer": {
      "Energetyka jądrowa": "Dostęp do tańszej energii",
      "Przemysł lotniczy": "Dochody ze sprzedaży samolotów i technologii",
      "Produkcja gier komputerowych": "Rozwój technologii informatycznych",
      "Telekomunikacja": "Efektywna wymiana informacji"
    },
    "explanation": "Nowoczesny przemysł i usługi we Francji przynoszą różne korzyści: energię, dochody z technologii, sprawny transport i lepszą wymianę informacji."
  },
  {
    "id": "R04_FRA_09",
    "section": "Nowoczesny przemysł i usługi w gospodarce Francji",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do przemysłu i usług w gospodarce Francji.",
    "options": null,
    "items": [
      "elektrownie jądrowe",
      "samoloty Airbus i Rafale",
      "produkcja gier komputerowych",
      "bankowość internetowa",
      "opieka medyczna",
      "transport TGV"
    ],
    "categories": [
      "przemysł",
      "usługi"
    ],
    "answer": {
      "przemysł": [
        "elektrownie jądrowe",
        "samoloty Airbus i Rafale",
        "produkcja gier komputerowych"
      ],
      "usługi": [
        "bankowość internetowa",
        "opieka medyczna",
        "transport TGV"
      ]
    },
    "explanation": "Energetyka, lotnictwo i produkcja gier należą do nowoczesnego przemysłu lub działalności przemysłowo-technologicznej, a bankowość, medycyna i transport do usług."
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Dlaczego w pierwszym etapie integracji europejskiej zwrócono szczególną uwagę na produkcję stali?",
    "options": [
      "Bo stal była niezbędna do wytwarzania uzbrojenia",
      "Bo stal była wspólną walutą Europy",
      "Bo stal zastępowała ropę w transporcie",
      "Bo stal była głównym produktem rolnictwa",
      "Bo stal służyła do kontroli granic Schengen",
      "Bo stal była warunkiem członkostwa w strefie euro"
    ],
    "answer": 0,
    "image": "r04_parlament_europejski.jpg",
    "explanation": "Stal była niezbędna do wytwarzania uzbrojenia, dlatego kontrola jej produkcji miała ograniczać możliwość przygotowania wojny."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz państwa jako powstałe po rozpadzie Związku Sowieckiego.",
    "options": [
      "Ukraina",
      "Białoruś",
      "Estonia",
      "Litwa",
      "Mołdawia",
      "Słowenia",
      "Chorwacja"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "r04_mapa_podzialu_politycznego_europy.jpg",
    "explanation": "Po rozpadzie Związku Sowieckiego powstały m.in. Rosja, Ukraina, Białoruś, Estonia, Litwa, Łotwa i Mołdawia. Słowenia i Chorwacja powstały po rozpadzie Jugosławii."
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Turcja i Kazachstan leżą w większości w Azji, a tylko ich niewielkie fragmenty należą do Europy.",
    "options": null,
    "answer": true,
    "explanation": "Rosja i Turcja według części kryteriów są zaliczane do Europy tylko fragmentarycznie."
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Polska w latach 2004-2021 otrzymała z budżetu Unii Europejskiej o __________ euro więcej niż wpłaciła.",
    "options": null,
    "answer": [
      "141 miliardów"
    ],
    "altAnswers": [
      [
        "141 miliardów",
        "141 mld",
        "141 miliardów euro",
        "141 mld euro"
      ]
    ],
    "image": "r04_fundusze_europejskie_w_polsce.jpg",
    "explanation": "W latach 2004-2021 Polska otrzymała o 141 miliardów euro więcej, niż wpłaciła do budżetu UE."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się francuska wieś w Alpach, która leży ponad 2 tysiące metrów n.p.m.?",
    "options": null,
    "answer": "Saint-Véran",
    "altAnswers": [
      "Saint-Véran",
      "Saint-Veran",
      "Saint Veran"
    ],
    "image": "r04_wies_alpejska.jpg",
    "explanation": "Saint-Véran jest przykładem alpejskiej miejscowości, której mieszkańcy muszą być przygotowani na surowe warunki i utrudniony transport."
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do przeszkód w zakładaniu rodziny: wysokie ceny mieszkań, niestabilna sytuacja zawodowa, zdobywanie wykształcenia, stabilna sytuacja zawodowa.",
    "options": null,
    "answer": "stabilna sytuacja zawodowa",
    "explanation": "Stabilna sytuacja zawodowa nie jest przeszkodą; znaczenie mają raczej niestabilność zatrudnienia, koszty mieszkań oraz odkładanie rodziny z powodu edukacji i kariery."
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Nowi mieszkańcy nie znają lokalnego języka i przepisów, korzystają długo ze wsparcia państwa, a w dzielnicach pojawiają się napięcia z ludnością miejscową. Jak wyjaśnia się taką sytuację?",
    "options": [
      "Nieskuteczną integracją imigrantów",
      "Równomiernym rozmieszczeniem ludności",
      "Wzrostem udziału usług w gospodarce",
      "Powstaniem aglomeracji",
      "Zniesieniem ceł",
      "Rozwojem energetyki jądrowej"
    ],
    "answer": 0,
    "explanation": "Negatywne skutki migracji mogą wystąpić, gdy integracja imigrantów ze społeczeństwem nie przebiega skutecznie."
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz szczegół z właściwym zagadnieniem.",
    "options": null,
    "left": [
      "Brexit",
      "522 os./km2",
      "Ponad 13 mln w aglomeracji",
      "56 zakładów jądrowych"
    ],
    "right": [
      "Wyjście Zjednoczonego Królestwa z UE",
      "Gęstość zaludnienia Królestwa Niderlandów",
      "Londyn",
      "Energetyka we Francji"
    ],
    "answer": {
      "Brexit": "Wyjście Zjednoczonego Królestwa z UE",
      "522 os./km2": "Gęstość zaludnienia Królestwa Niderlandów",
      "Ponad 13 mln w aglomeracji": "Londyn",
      "56 zakładów jądrowych": "Energetyka we Francji"
    },
    "image": "r04_elektrownia_jadrowa_francja.jpg",
    "explanation": "Szczegóły te pochodzą i łączą informacje o UE, ludności, migracjach oraz Francji."
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż informacje w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Brexit",
      "Igrzyska olimpijskie w Londynie",
      "Paryż zrezygnował z przesuwania granic",
      "Rekordowy upał w Paryżu",
      "Ustalenie granic administracyjnych Londynu"
    ],
    "answer": [
      "Paryż zrezygnował z przesuwania granic",
      "Ustalenie granic administracyjnych Londynu",
      "Igrzyska olimpijskie w Londynie",
      "Rekordowy upał w Paryżu",
      "Brexit"
    ],
    "image": "r04_centra_londynu_paryza.jpg",
    "explanation": "Paryż zachował swoje granice od 1860 roku, granice Londynu ustalono 105 lat później, igrzyska w Londynie odbyły się w 2012 roku, rekordowy upał w Paryżu wystąpił w 2019 roku, a Brexit dokonał się w 2020 roku."
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj informacje do miasta lub państwa, którego dotyczą.",
    "options": null,
    "items": [
      "City",
      "Pałac Buckingham",
      "La Défense",
      "Luwr",
      "pięć z dziesięciu największych banków Europy",
      "56 zakładów jądrowych"
    ],
    "categories": [
      "Londyn",
      "Paryż",
      "Francja"
    ],
    "answer": {
      "Londyn": [
        "City",
        "Pałac Buckingham"
      ],
      "Paryż": [
        "La Défense",
        "Luwr"
      ],
      "Francja": [
        "pięć z dziesięciu największych banków Europy",
        "56 zakładów jądrowych"
      ]
    },
    "explanation": "Londyn i Paryż mają różne funkcje i obiekty, natomiast dane o energetyce oraz bankach odnoszą się do gospodarki Francji jako kraju."
  },
  {
    "id": "R04_HARD_11",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz cechy nowoczesnego przemysłu we Francji.",
    "options": [
      "Wytwarzanie zaawansowanych technicznie produktów",
      "Wykorzystanie robotów i komputerów",
      "Współpraca z ośrodkami badawczymi",
      "Możliwie niewielkie zużycie surowców naturalnych",
      "Dbałość o środowisko przyrodnicze",
      "Oparcie produkcji wyłącznie na pracy ręcznej"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Nowoczesny przemysł we Francji wiąże się z zaawansowanymi produktami, nowymi technologiami, współpracą z ośrodkami badawczymi, mniejszym zużyciem surowców i dbałością o środowisko."
  },
  {
    "id": "R04_HARD_12",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Sztandarowym produktem francuskiego przemysłu lotniczego w latach 2007-2021 był Airbus __________, który mógł zabrać nawet __________ pasażerów.",
    "options": null,
    "answer": [
      "A380",
      "853"
    ],
    "altAnswers": [
      [
        "A380",
        "Airbus A380"
      ],
      [
        "853",
        "853 pasażerów"
      ]
    ],
    "image": "r04_elektrownia_jadrowa_francja.jpg",
    "explanation": "Airbus A380 był w tym okresie największym samolotem pasażerskim na świecie, a na jego pokład mogło wejść nawet 853 pasażerów."
  }
];

const KID_PROMPTS = {
  "R04_UNI_01": "Po co kraje Europy zaczęły współpracować po II wojnie światowej?",
  "R04_LUD_03": "Co oznacza gęstość zaludnienia?",
  "R04_STA_01": "Co znaczy, że ludność się starzeje?",
  "R04_MIG_01": "Co to jest migracja?",
  "R04_MIA_05": "Jak nazywa się grupa blisko położonych miast?",
  "R04_FRA_01": "W czym pracuje najwięcej osób we Francji?"
};

const chapter = {
  id: "r04",
  number: 4,
  title: "Europa - ludność i gospodarka",
  icon: "🌍",
  sectionOrder: [
    "Unia Europejska i podział polityczny Europy",
    "Rozmieszczenie ludności w Europie",
    "Przyczyny i skutki starzenia się ludności",
    "Migracje w Europie",
    "Wielkie miasta Europy - Londyn i Paryż",
    "Nowoczesny przemysł i usługi w gospodarce Francji"
  ],
  sectionIcons: {
    "Unia Europejska i podział polityczny Europy": "🇪🇺",
    "Rozmieszczenie ludności w Europie": "👥",
    "Przyczyny i skutki starzenia się ludności": "👵",
    "Migracje w Europie": "🧳",
    "Wielkie miasta Europy - Londyn i Paryż": "🏙️",
    "Nowoczesny przemysł i usługi w gospodarce Francji": "🇫🇷"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
