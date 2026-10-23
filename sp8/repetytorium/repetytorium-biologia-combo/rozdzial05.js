// Skróty sekcji (do identyfikatorów ćwiczeń):
//   SKOR = Skóra i aparat ruchu
//   POKA = Układ pokarmowy i odżywianie
//   KREW = Krążenie, krew i odporność
//   ODDE = Oddychanie i wydalanie
//   NERW = Układ nerwowy i zmysły
//   HORM = Hormony, rozród i homeostaza
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R05_SKOR_01",
    "section": "Skóra i aparat ruchu",
    "type": "single_choice",
    "prompt": "Który narząd jest największym narządem ciała człowieka?",
    "options": [
      "Serce",
      "Wątroba",
      "Skóra",
      "Żołądek",
      "Nerka",
      "Płuco"
    ],
    "answer": 2,
    "explanation": "Skóra jest największym narządem człowieka. Chroni przed urazami, drobnoustrojami i utratą wody.",
    "image": "r05_przekroj_skory.jpg"
  },
  {
    "id": "R05_SKOR_02",
    "section": "Skóra i aparat ruchu",
    "type": "single_choice",
    "prompt": "Która warstwa naskórka znajduje się najbliżej powierzchni ciała?",
    "options": [
      "Warstwa rozrodcza",
      "Warstwa rogowa",
      "Skóra właściwa",
      "Tkanka podskórna",
      "Warstwa tłuszczowa",
      "Okostna"
    ],
    "answer": 1,
    "explanation": "Najbardziej zewnętrzna jest warstwa rogowa naskórka; warstwa rozrodcza leży najgłębiej w naskórku."
  },
  {
    "id": "R05_SKOR_03",
    "section": "Skóra i aparat ruchu",
    "type": "scenario",
    "prompt": "Uczeń zgina łokieć. Jeden mięsień ramienia kurczy się, a drugi rozluźnia i rozciąga. Jaki to sposób pracy mięśni?",
    "options": [
      "Współpracę synergistyczną",
      "Pracę mięśni antagonistycznych",
      "Wytwarzanie komórek krwi",
      "Kostnienie chrząstki",
      "Oddychanie komórkowe skóry",
      "Pracę receptorów smakowych"
    ],
    "answer": 1,
    "explanation": "Mięśnie antagonistyczne pełnią przeciwne funkcje, np. zginacz i prostownik ramienia.",
    "image": "r05_praca_miesni_ramienia.jpg"
  },
  {
    "id": "R05_SKOR_04",
    "section": "Skóra i aparat ruchu",
    "type": "multi_select",
    "prompt": "Wybierz funkcje skóry.",
    "options": [
      "Ochrona przed utratą wody",
      "Odbieranie bodźców z otoczenia",
      "Regulacja temperatury ciała",
      "Produkcja żółci",
      "Ochrona przed drobnoustrojami",
      "Wytwarzanie pepsyny"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Skóra ogranicza utratę wody, chroni przed czynnikami zewnętrznymi, odbiera bodźce i uczestniczy w termoregulacji."
  },
  {
    "id": "R05_SKOR_05",
    "section": "Skóra i aparat ruchu",
    "type": "true_false",
    "prompt": "Substancje mineralne stanowią około 70% masy kości.",
    "options": null,
    "answer": true,
    "explanation": "Kości składają się w około 70% z substancji mineralnych i w około 30% z organicznych."
  },
  {
    "id": "R05_SKOR_06",
    "section": "Skóra i aparat ruchu",
    "type": "fill_in",
    "prompt": "Melanocyty wytwarzają barwnik zwany __________.",
    "options": null,
    "altAnswers": [
      [
        "melaniną",
        "melanina"
      ]
    ],
    "answer": [
      "melaniną"
    ],
    "explanation": "Melanina jest produkowana przez melanocyty i chroni skórę przed działaniem promieniowania UV."
  },
  {
    "id": "R05_SKOR_07",
    "section": "Skóra i aparat ruchu",
    "type": "riddle",
    "prompt": "Jak nazywa się błona pokrywająca kość, zawierająca naczynia krwionośne i nerwy?",
    "options": null,
    "altAnswers": [
      "okostna",
      "okostną"
    ],
    "answer": "okostna",
    "explanation": "Okostna pokrywa kość, zawiera naczynia i nerwy oraz uczestniczy w regeneracji po złamaniu."
  },
  {
    "id": "R05_SKOR_08",
    "section": "Skóra i aparat ruchu",
    "type": "odd_one_out",
    "prompt": "Wskaż schorzenie, które nie jest chorobą skóry: świerzb, wszawica, opryszczka, skolioza.",
    "options": null,
    "answer": "skolioza",
    "explanation": "Skolioza to boczne skrzywienie kręgosłupa; pozostałe schorzenia dotyczą skóry."
  },
  {
    "id": "R05_SKOR_09",
    "section": "Skóra i aparat ruchu",
    "type": "match",
    "prompt": "Połącz warstwę skóry z opisaną funkcją.",
    "options": null,
    "left": [
      "Naskórek",
      "Skóra właściwa",
      "Tkanka podskórna"
    ],
    "right": [
      "Izolacja cieplna dzięki komórkom tłuszczowym",
      "Receptory i naczynia krwionośne",
      "Bariera dzięki ściśle ułożonym komórkom"
    ],
    "answer": {
      "Naskórek": "Bariera dzięki ściśle ułożonym komórkom",
      "Skóra właściwa": "Receptory i naczynia krwionośne",
      "Tkanka podskórna": "Izolacja cieplna dzięki komórkom tłuszczowym"
    },
    "explanation": "Naskórek chroni, w skórze właściwej leżą receptory i naczynia, a tkanka podskórna amortyzuje i izoluje."
  },
  {
    "id": "R05_SKOR_10",
    "section": "Skóra i aparat ruchu",
    "type": "sequence",
    "prompt": "Ułóż warstwy od najbardziej zewnętrznej do najgłębiej położonej.",
    "options": null,
    "items": [
      "Tkanka podskórna",
      "Skóra właściwa",
      "Warstwa rozrodcza naskórka",
      "Warstwa rogowa naskórka"
    ],
    "answer": [
      "Warstwa rogowa naskórka",
      "Warstwa rozrodcza naskórka",
      "Skóra właściwa",
      "Tkanka podskórna"
    ],
    "explanation": "Naskórek leży na zewnątrz i ma warstwę rogową ponad rozrodczą; niżej występują skóra właściwa i tkanka podskórna.",
    "image": "r05_przekroj_skory.jpg"
  },
  {
    "id": "R05_POKA_01",
    "section": "Układ pokarmowy i odżywianie",
    "type": "single_choice",
    "prompt": "Który enzym produkowany przez ślinianki rozpoczyna trawienie cukrów złożonych?",
    "options": [
      "Pepsyna",
      "Lipaza",
      "Amylaza ślinowa",
      "Trypsyna",
      "Nukleaza",
      "Insulina"
    ],
    "answer": 2,
    "explanation": "Ślinianki wytwarzają amylazę ślinową, która rozkłada cukry złożone."
  },
  {
    "id": "R05_POKA_02",
    "section": "Układ pokarmowy i odżywianie",
    "type": "single_choice",
    "prompt": "W którym narządzie jest produkowana żółć?",
    "options": [
      "Żołądek",
      "Pęcherzyk żółciowy",
      "Wątroba",
      "Trzustka",
      "Jelito grube",
      "Przełyk"
    ],
    "answer": 2,
    "explanation": "Żółć powstaje w wątrobie, a jest magazynowana i zagęszczana w pęcherzyku żółciowym.",
    "image": "r05_uklad_pokarmowy.jpg"
  },
  {
    "id": "R05_POKA_03",
    "section": "Układ pokarmowy i odżywianie",
    "type": "scenario",
    "prompt": "Podczas gryzienia twardego pokarmu najbardziej przydają się szerokie zęby o pofałdowanych koronach, które rozcierają pokarm. O jakich zębach mowa?",
    "options": [
      "Siekacze",
      "Kły",
      "Przedtrzonowe i trzonowe",
      "Wyłącznie siekacze mleczne",
      "Wyłącznie kły mleczne",
      "Wyłącznie siekacze stałe"
    ],
    "answer": 2,
    "explanation": "Zęby przedtrzonowe i trzonowe mają szerokie, pofałdowane korony przystosowane do rozcierania pokarmu.",
    "image": "r05_przekroj_zeba.jpg"
  },
  {
    "id": "R05_POKA_04",
    "section": "Układ pokarmowy i odżywianie",
    "type": "multi_select",
    "prompt": "Wybierz stwierdzenia zgodne z opisem jelita cienkiego.",
    "options": [
      "Zachodzi w nim wchłanianie substancji pokarmowych",
      "Występują w nim kosmki jelitowe",
      "Jego początkowym odcinkiem jest dwunastnica",
      "Produkuje kwas solny w gruczołach ściany",
      "Uchodzą do dwunastnicy przewody trzustki i wątroby"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "W jelicie cienkim kończy się duża część trawienia i zachodzi wchłanianie; jego kosmki zwiększają powierzchnię."
  },
  {
    "id": "R05_POKA_05",
    "section": "Układ pokarmowy i odżywianie",
    "type": "true_false",
    "prompt": "Kwas solny i pepsyna są wydzielane przez gruczoły ściany jelita grubego.",
    "options": null,
    "answer": false,
    "explanation": "Kwas solny i pepsyna są produkowane w żołądku, a nie w jelicie grubym."
  },
  {
    "id": "R05_POKA_06",
    "section": "Układ pokarmowy i odżywianie",
    "type": "fill_in",
    "prompt": "W uzębieniu mlecznym człowieka występuje __________ zębów.",
    "options": null,
    "answer": [
      "20"
    ],
    "explanation": "U człowieka występuje 20 zębów mlecznych: 8 siekaczy, 4 kły i 8 trzonowych."
  },
  {
    "id": "R05_POKA_07",
    "section": "Układ pokarmowy i odżywianie",
    "type": "riddle",
    "prompt": "Jak nazywają się wypustki jelita cienkiego, które zwiększają powierzchnię wchłaniania?",
    "options": null,
    "altAnswers": [
      "kosmki jelitowe",
      "kosmki"
    ],
    "answer": "kosmki jelitowe",
    "explanation": "Kosmki jelitowe zwiększają powierzchnię chłonną jelita cienkiego."
  },
  {
    "id": "R05_POKA_08",
    "section": "Układ pokarmowy i odżywianie",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest narządem ani gruczołem układu pokarmowego: ślinianki, wątroba, trzustka, tchawica.",
    "options": null,
    "answer": "tchawica",
    "explanation": "Tchawica należy do układu oddechowego; pozostałe narządy wspierają trawienie pokarmu."
  },
  {
    "id": "R05_POKA_09",
    "section": "Układ pokarmowy i odżywianie",
    "type": "match",
    "prompt": "Połącz substancję trawienną z grupą związków, na które działa.",
    "options": null,
    "left": [
      "Amylaza ślinowa",
      "Pepsyna",
      "Lipaza"
    ],
    "right": [
      "Tłuszcze",
      "Białka",
      "Cukry złożone"
    ],
    "answer": {
      "Amylaza ślinowa": "Cukry złożone",
      "Pepsyna": "Białka",
      "Lipaza": "Tłuszcze"
    },
    "explanation": "Amylaza rozkłada cukry, pepsyna uczestniczy w trawieniu białek, a lipaza trawi tłuszcze."
  },
  {
    "id": "R05_POKA_10",
    "section": "Układ pokarmowy i odżywianie",
    "type": "sort",
    "prompt": "Przyporządkuj czynności do odcinków układu pokarmowego.",
    "options": null,
    "items": [
      "Rozdrabnianie pokarmu zębami",
      "Wydzielanie pepsyny",
      "Wchłanianie substancji odżywczych",
      "Odsączanie wody z treści jelitowej",
      "Nawilżanie pokarmu śliną",
      "Wydzielanie kwasu solnego",
      "Obecność kosmków jelitowych",
      "Formowanie mas kałowych"
    ],
    "categories": [
      "Jama ustna",
      "Żołądek",
      "Jelito cienkie",
      "Jelito grube"
    ],
    "answer": {
      "Jama ustna": [
        "Rozdrabnianie pokarmu zębami",
        "Nawilżanie pokarmu śliną"
      ],
      "Żołądek": [
        "Wydzielanie pepsyny",
        "Wydzielanie kwasu solnego"
      ],
      "Jelito cienkie": [
        "Wchłanianie substancji odżywczych",
        "Obecność kosmków jelitowych"
      ],
      "Jelito grube": [
        "Odsączanie wody z treści jelitowej",
        "Formowanie mas kałowych"
      ]
    },
    "explanation": "Każdy odcinek ma inną rolę: jama ustna rozdrabnia, żołądek trawi białka, jelito cienkie wchłania, a grube zagęszcza treść.",
    "image": "r05_uklad_pokarmowy.jpg"
  },
  {
    "id": "R05_KREW_01",
    "section": "Krążenie, krew i odporność",
    "type": "single_choice",
    "prompt": "W której części serca rozpoczyna się mały obieg krwi?",
    "options": [
      "Lewy przedsionek",
      "Prawy przedsionek",
      "Lewa komora",
      "Prawa komora",
      "Aorta",
      "Żyła główna"
    ],
    "answer": 3,
    "explanation": "Mały obieg zaczyna się w prawej komorze i prowadzi krew przez tętnicę płucną do płuc.",
    "image": "r05_serce_i_krwiobiegi.jpg"
  },
  {
    "id": "R05_KREW_02",
    "section": "Krążenie, krew i odporność",
    "type": "single_choice",
    "prompt": "Jaki antygen na erytrocytach decyduje o dodatnim czynniku Rh?",
    "options": [
      "Antygen A",
      "Antygen B",
      "Antygen D",
      "Przeciwciało anty-A",
      "Przeciwciało anty-B",
      "Hemoglobina"
    ],
    "answer": 2,
    "explanation": "Oznaczenie Rh+ wiąże się z obecnością antygenu D na powierzchni erytrocytów."
  },
  {
    "id": "R05_KREW_03",
    "section": "Krążenie, krew i odporność",
    "type": "scenario",
    "prompt": "Po poważnym krwotoku lekarze przygotowują transfuzję krwi. Jaką zasadę zgodności należy uwzględnić przed przetoczeniem?",
    "options": [
      "Zgodność wzrostu dawcy i biorcy",
      "Zgodność grupy krwi dawcy i biorcy",
      "Ten sam wiek dawcy i biorcy",
      "Jednakowy puls dawcy i biorcy",
      "Ta sama masa ciała",
      "Zgodność koloru skóry"
    ],
    "answer": 1,
    "explanation": "Przed transfuzją należy uwzględnić zgodność grup krwi dawcy i biorcy."
  },
  {
    "id": "R05_KREW_04",
    "section": "Krążenie, krew i odporność",
    "type": "multi_select",
    "prompt": "Które składniki tworzą krew?",
    "options": [
      "Osocze",
      "Erytrocyty",
      "Leukocyty",
      "Trombocyty",
      "Żółć",
      "Limfa jako osobna tkanka"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Krew składa się z osocza i elementów morfotycznych: erytrocytów, leukocytów i płytek krwi.",
    "image": "r05_skladniki_krwi.jpg"
  },
  {
    "id": "R05_KREW_05",
    "section": "Krążenie, krew i odporność",
    "type": "true_false",
    "prompt": "Surowica podawana osobie już zakażonej dostarcza gotowych przeciwciał.",
    "options": null,
    "answer": true,
    "explanation": "Surowica zawiera gotowe przeciwciała, które pomagają zwalczyć zakażenie."
  },
  {
    "id": "R05_KREW_06",
    "section": "Krążenie, krew i odporność",
    "type": "fill_in",
    "prompt": "Erytrocyty transportują tlen dzięki zawartej w nich __________.",
    "options": null,
    "altAnswers": [
      [
        "hemoglobinie",
        "hemoglobina"
      ]
    ],
    "answer": [
      "hemoglobinie"
    ],
    "explanation": "Hemoglobina jest czerwonym barwnikiem erytrocytów, zdolnym do nietrwałego wiązania tlenu."
  },
  {
    "id": "R05_KREW_07",
    "section": "Krążenie, krew i odporność",
    "type": "riddle",
    "prompt": "Jak nazywa się narząd układu odpornościowego, w którym dojrzewają limfocyty?",
    "options": null,
    "altAnswers": [
      "grasica",
      "grasicy"
    ],
    "answer": "grasica",
    "explanation": "Limfocyty T dojrzewają w grasicy."
  },
  {
    "id": "R05_KREW_08",
    "section": "Krążenie, krew i odporność",
    "type": "odd_one_out",
    "prompt": "Wskaż element nienależący do składników krwi: erytrocyty, leukocyty, trombocyty, neuron.",
    "options": null,
    "answer": "neuron",
    "explanation": "Neuron jest komórką układu nerwowego; pozostałe to elementy morfotyczne krwi."
  },
  {
    "id": "R05_KREW_09",
    "section": "Krążenie, krew i odporność",
    "type": "match",
    "prompt": "Połącz składnik krwi z jego główną rolą.",
    "options": null,
    "left": [
      "Erytrocyty",
      "Leukocyty",
      "Trombocyty",
      "Osocze"
    ],
    "right": [
      "Płynna część krwi",
      "Udział w krzepnięciu",
      "Ochrona przed drobnoustrojami",
      "Transport tlenu"
    ],
    "answer": {
      "Erytrocyty": "Transport tlenu",
      "Leukocyty": "Ochrona przed drobnoustrojami",
      "Trombocyty": "Udział w krzepnięciu",
      "Osocze": "Płynna część krwi"
    },
    "explanation": "Erytrocyty niosą tlen, leukocyty bronią organizm, płytki uczestniczą w krzepnięciu, a osocze jest płynną częścią krwi."
  },
  {
    "id": "R05_KREW_10",
    "section": "Krążenie, krew i odporność",
    "type": "sequence",
    "prompt": "Ułóż drogę krwi w obiegu płucnym od początku do końca.",
    "options": null,
    "items": [
      "Lewy przedsionek serca",
      "Żyły płucne",
      "Naczynia włosowate płuc",
      "Tętnica płucna",
      "Prawa komora serca"
    ],
    "answer": [
      "Prawa komora serca",
      "Tętnica płucna",
      "Naczynia włosowate płuc",
      "Żyły płucne",
      "Lewy przedsionek serca"
    ],
    "explanation": "Z prawej komory krew płynie do płuc, gdzie zachodzi wymiana gazowa, po czym żyłami płucnymi wraca do lewego przedsionka.",
    "image": "r05_serce_i_krwiobiegi.jpg"
  },
  {
    "id": "R05_ODDE_01",
    "section": "Oddychanie i wydalanie",
    "type": "single_choice",
    "prompt": "Co dzieje się z wdychanym powietrzem w jamie nosowej?",
    "options": [
      "Jest wyłącznie ochładzane",
      "Jest ogrzewane, nawilżane i oczyszczane",
      "Zmienia się w krew",
      "Zamienia się w mocz",
      "Powstaje z niego żółć",
      "Jest trawione przez pepsynę"
    ],
    "answer": 1,
    "explanation": "Śluz nawilża powietrze, naczynia je ogrzewają, a nabłonek rzęskowy wychwytuje zanieczyszczenia.",
    "image": "r05_drogi_oddechowe.jpg"
  },
  {
    "id": "R05_ODDE_02",
    "section": "Oddychanie i wydalanie",
    "type": "single_choice",
    "prompt": "Jak nazywa się podstawowa jednostka budowy i działania nerki?",
    "options": [
      "Alweola",
      "Neuron",
      "Nefron",
      "Kosmek jelitowy",
      "Erytrocyt",
      "Osteon"
    ],
    "answer": 2,
    "explanation": "Nefron jest podstawową jednostką budulcową i czynnościową nerki.",
    "image": "r05_budowa_nefronu.jpg"
  },
  {
    "id": "R05_ODDE_03",
    "section": "Oddychanie i wydalanie",
    "type": "scenario",
    "prompt": "Badanie wykazuje nagromadzenie produktów przemiany materii, które powinny być usuwane z krwi. Która funkcja nerek bezpośrednio odpowiada za ich eliminowanie?",
    "options": [
      "Filtracja krwi",
      "Wytwarzanie głosu",
      "Przewodzenie impulsów w synapsie",
      "Rozdrabnianie pokarmu",
      "Wytwarzanie żółci",
      "Rejestracja dźwięku"
    ],
    "answer": 0,
    "explanation": "Układ wydalniczy filtruje krew z produktów przemiany materii i usuwa zbędne substancje."
  },
  {
    "id": "R05_ODDE_04",
    "section": "Oddychanie i wydalanie",
    "type": "multi_select",
    "prompt": "Wybierz elementy dróg oddechowych.",
    "options": [
      "Jama nosowa",
      "Gardło",
      "Krtań",
      "Tchawica",
      "Oskrzela",
      "Moczowód"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Górne drogi to jama nosowa i gardło; dolne obejmują krtań, tchawicę i oskrzela.",
    "image": "r05_drogi_oddechowe.jpg"
  },
  {
    "id": "R05_ODDE_05",
    "section": "Oddychanie i wydalanie",
    "type": "true_false",
    "prompt": "Płuca uczestniczą w wydalaniu dwutlenku węgla i wody w postaci pary wodnej.",
    "options": null,
    "answer": true,
    "explanation": "Płuca uczestniczą w usuwaniu z organizmu CO₂ i pary wodnej."
  },
  {
    "id": "R05_ODDE_06",
    "section": "Oddychanie i wydalanie",
    "type": "fill_in",
    "prompt": "W jednej nerce występuje około __________ nefronów.",
    "options": null,
    "altAnswers": [
      [
        "miliona",
        "1000000",
        "milion"
      ]
    ],
    "answer": [
      "miliona"
    ],
    "explanation": "Każda nerka zawiera około miliona nefronów.",
    "image": "r05_budowa_nefronu.jpg"
  },
  {
    "id": "R05_ODDE_07",
    "section": "Oddychanie i wydalanie",
    "type": "riddle",
    "prompt": "Jaki narząd gromadzi mocz dopływający moczowodami z nerek?",
    "options": null,
    "altAnswers": [
      "pęcherz moczowy",
      "pęcherz"
    ],
    "answer": "pęcherz moczowy",
    "explanation": "Moczowody przenoszą mocz z nerek do pęcherza moczowego."
  },
  {
    "id": "R05_ODDE_08",
    "section": "Oddychanie i wydalanie",
    "type": "odd_one_out",
    "prompt": "Wskaż narząd nienależący do układu moczowego: nerka, moczowód, pęcherz moczowy, oskrzele.",
    "options": null,
    "answer": "oskrzele",
    "explanation": "Oskrzele należy do układu oddechowego; pozostałe elementy to części układu moczowego."
  },
  {
    "id": "R05_ODDE_09",
    "section": "Oddychanie i wydalanie",
    "type": "match",
    "prompt": "Połącz strukturę z jej funkcją w oddychaniu.",
    "options": null,
    "left": [
      "Jama nosowa",
      "Krtań",
      "Pęcherzyki płucne"
    ],
    "right": [
      "Wymiana gazów oddechowych",
      "Wytwarzanie głosu",
      "Ogrzewanie i oczyszczanie powietrza"
    ],
    "answer": {
      "Jama nosowa": "Ogrzewanie i oczyszczanie powietrza",
      "Krtań": "Wytwarzanie głosu",
      "Pęcherzyki płucne": "Wymiana gazów oddechowych"
    },
    "explanation": "W jamie nosowej powietrze przygotowywane jest do oddychania, krtań jest narządem głosu, a w płucach zachodzi wymiana gazowa."
  },
  {
    "id": "R05_ODDE_10",
    "section": "Oddychanie i wydalanie",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do odpowiednich układów.",
    "options": null,
    "items": [
      "Tchawica",
      "Pęcherzyki płucne",
      "Nerki",
      "Pęcherz moczowy",
      "Oskrzela",
      "Jama nosowa",
      "Moczowody",
      "Cewka moczowa"
    ],
    "categories": [
      "Układ oddechowy",
      "Układ moczowy"
    ],
    "answer": {
      "Układ oddechowy": [
        "Tchawica",
        "Oskrzela",
        "Pęcherzyki płucne",
        "Jama nosowa"
      ],
      "Układ moczowy": [
        "Nerki",
        "Moczowody",
        "Pęcherz moczowy",
        "Cewka moczowa"
      ]
    },
    "explanation": "Drogi oddechowe doprowadzają powietrze do płuc; drogi moczowe odpowiadają za powstawanie i odprowadzanie moczu."
  },
  {
    "id": "R05_NERW_01",
    "section": "Układ nerwowy i zmysły",
    "type": "single_choice",
    "prompt": "Która część układu nerwowego działa niezależnie od naszej woli i kontroluje narządy wewnętrzne?",
    "options": [
      "Układ somatyczny",
      "Układ autonomiczny",
      "Narząd słuchu",
      "Układ szkieletowy",
      "Układ limfatyczny",
      "Naskórek"
    ],
    "answer": 1,
    "explanation": "Układ autonomiczny steruje narządami wewnętrznymi niezależnie od świadomej woli."
  },
  {
    "id": "R05_NERW_02",
    "section": "Układ nerwowy i zmysły",
    "type": "single_choice",
    "prompt": "Które komórki siatkówki umożliwiają widzenie barw?",
    "options": [
      "Pręciki",
      "Czopki",
      "Melanocyty",
      "Erytrocyty",
      "Trombocyty",
      "Limfocyty"
    ],
    "answer": 1,
    "explanation": "Czopki są receptorami widzenia barw, natomiast pręciki reagują na natężenie światła.",
    "image": "r05_siatkowka_oka.jpg"
  },
  {
    "id": "R05_NERW_03",
    "section": "Układ nerwowy i zmysły",
    "type": "scenario",
    "prompt": "W półmroku trudniej odróżnić kolory, ale nadal można dostrzec zarysy przedmiotów. Który rodzaj fotoreceptorów odpowiada za widzenie nocne?",
    "options": [
      "Czopki",
      "Pręciki",
      "Kubki smakowe",
      "Melanocyty",
      "Receptory węchowe",
      "Komórki skóry właściwej"
    ],
    "answer": 1,
    "explanation": "Pręciki odpowiadają głównie za widzenie przy słabym oświetleniu, a czopki za widzenie barw."
  },
  {
    "id": "R05_NERW_04",
    "section": "Układ nerwowy i zmysły",
    "type": "multi_select",
    "prompt": "Które elementy są kosteczkami słuchowymi ucha środkowego?",
    "options": [
      "Młoteczek",
      "Kowadełko",
      "Strzemiączko",
      "Ślimak",
      "Tęczówka",
      "Soczewka"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Trzy kosteczki w jamie bębenkowej to młoteczek, kowadełko i strzemiączko.",
    "image": "r05_przekroj_ucha.jpg"
  },
  {
    "id": "R05_NERW_05",
    "section": "Układ nerwowy i zmysły",
    "type": "true_false",
    "prompt": "Ślimak oraz kanały półkoliste należą do ucha wewnętrznego.",
    "options": null,
    "answer": true,
    "explanation": "Ucho wewnętrzne składa się m.in. z przedsionka, ślimaka i kanałów półkolistych."
  },
  {
    "id": "R05_NERW_06",
    "section": "Układ nerwowy i zmysły",
    "type": "fill_in",
    "prompt": "W synapsie chemicznej sygnał między neuronami jest przekazywany za pomocą __________.",
    "options": null,
    "altAnswers": [
      [
        "neuroprzekaźnika",
        "neuroprzekaźników"
      ]
    ],
    "answer": [
      "neuroprzekaźnika"
    ],
    "explanation": "Synapsa chemiczna przenosi pobudzenie dzięki neuroprzekaźnikowi.",
    "image": "r05_neuron_i_synapsa.jpg"
  },
  {
    "id": "R05_NERW_07",
    "section": "Układ nerwowy i zmysły",
    "type": "riddle",
    "prompt": "Jak nazywa się zdolność oka do zmiany kształtu soczewki w celu ustawiania ostrości?",
    "options": null,
    "altAnswers": [
      "akomodacja",
      "akomodacja oka"
    ],
    "answer": "akomodacja",
    "explanation": "Akomodacja umożliwia widzenie ostrego obrazu przedmiotów znajdujących się w różnej odległości."
  },
  {
    "id": "R05_NERW_08",
    "section": "Układ nerwowy i zmysły",
    "type": "odd_one_out",
    "prompt": "Wskaż strukturę, która nie jest kosteczką słuchową: młoteczek, kowadełko, strzemiączko, tęczówka.",
    "options": null,
    "answer": "tęczówka",
    "explanation": "Tęczówka stanowi część oka, podczas gdy pozostałe trzy struktury są kosteczkami słuchowymi."
  },
  {
    "id": "R05_NERW_09",
    "section": "Układ nerwowy i zmysły",
    "type": "match",
    "prompt": "Połącz zmysł z miejscem występowania jego receptorów.",
    "options": null,
    "left": [
      "Węch",
      "Smak",
      "Wzrok",
      "Dotyk"
    ],
    "right": [
      "Skóra",
      "Siatkówka oka",
      "Kubki smakowe języka",
      "Nabłonek węchowy jamy nosowej"
    ],
    "answer": {
      "Węch": "Nabłonek węchowy jamy nosowej",
      "Smak": "Kubki smakowe języka",
      "Wzrok": "Siatkówka oka",
      "Dotyk": "Skóra"
    },
    "explanation": "Receptory poszczególnych zmysłów znajdują się w wyspecjalizowanych obszarach nosa, języka, oka i skóry."
  },
  {
    "id": "R05_NERW_10",
    "section": "Układ nerwowy i zmysły",
    "type": "sequence",
    "prompt": "Ułóż etapy odbierania dźwięku od dotarcia fali do powstania wrażenia w mózgu.",
    "options": null,
    "items": [
      "Impulsy docierają nerwem słuchowym do mózgu",
      "Powstają impulsy w komórkach receptorowych",
      "Porusza się płyn w ślimaku",
      "Drgają kosteczki słuchowe",
      "Błona bębenkowa zaczyna drgać",
      "Fala dźwiękowa dociera do błony bębenkowej"
    ],
    "answer": [
      "Fala dźwiękowa dociera do błony bębenkowej",
      "Błona bębenkowa zaczyna drgać",
      "Drgają kosteczki słuchowe",
      "Porusza się płyn w ślimaku",
      "Powstają impulsy w komórkach receptorowych",
      "Impulsy docierają nerwem słuchowym do mózgu"
    ],
    "explanation": "Drgania błony i kosteczek wywołują ruch płynu w ślimaku, a receptory zamieniają go w impuls nerwowy.",
    "image": "r05_przekroj_ucha.jpg"
  },
  {
    "id": "R05_HORM_01",
    "section": "Hormony, rozród i homeostaza",
    "type": "single_choice",
    "prompt": "Który hormon trzustki obniża stężenie glukozy we krwi?",
    "options": [
      "Glukagon",
      "Adrenalina",
      "Insulina",
      "Melatonina",
      "Tyroksyna",
      "Testosteron"
    ],
    "answer": 2,
    "explanation": "Insulina obniża stężenie glukozy, natomiast glukagon działa w przeciwnym kierunku.",
    "image": "r05_gruczoly_dokrewne.jpg"
  },
  {
    "id": "R05_HORM_02",
    "section": "Hormony, rozród i homeostaza",
    "type": "single_choice",
    "prompt": "W jakim narządzie żeńskiego układu rozrodczego zazwyczaj dochodzi do zapłodnienia?",
    "options": [
      "Jajnik",
      "Jajowód",
      "Macica",
      "Pochwa",
      "Pęcherz moczowy",
      "Szyjka macicy"
    ],
    "answer": 1,
    "explanation": "Do zapłodnienia najczęściej dochodzi w jajowodzie.",
    "image": "r05_uklad_rozrodczy_zenski.jpg"
  },
  {
    "id": "R05_HORM_03",
    "section": "Hormony, rozród i homeostaza",
    "type": "scenario",
    "prompt": "W upalny dzień organizm zaczyna intensywniej wydzielać pot, aby obniżyć zbyt wysoką temperaturę ciała. Jak nazywa się utrzymywana dzięki temu wewnętrzna równowaga?",
    "options": [
      "Owulacja",
      "Homeostaza",
      "Krzepnięcie",
      "Trawienie",
      "Transfuzja",
      "Akomodacja"
    ],
    "answer": 1,
    "explanation": "Homeostaza to utrzymywanie względnej równowagi organizmu pomimo zmian otoczenia, m.in. przez pocenie.",
    "image": "r05_termoregulacja.jpg"
  },
  {
    "id": "R05_HORM_04",
    "section": "Hormony, rozród i homeostaza",
    "type": "multi_select",
    "prompt": "Zaznacz parametry wewnętrzne organizmu regulowane w procesie homeostazy.",
    "options": [
      "Temperatura ciała",
      "pH krwi",
      "Ciśnienie tętnicze",
      "Objętość płynów ustrojowych",
      "Kolor tęczówki",
      "Długość włosów"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do ważnych parametrów homeostazy należą temperatura, pH, ciśnienie i objętość płynów ustrojowych.",
    "image": "r05_termoregulacja.jpg"
  },
  {
    "id": "R05_HORM_05",
    "section": "Hormony, rozród i homeostaza",
    "type": "true_false",
    "prompt": "Zygota powstaje po połączeniu komórki jajowej z plemnikiem.",
    "options": null,
    "answer": true,
    "explanation": "Zapłodnienie jest połączeniem gamet, w którego wyniku powstaje zygota."
  },
  {
    "id": "R05_HORM_06",
    "section": "Hormony, rozród i homeostaza",
    "type": "fill_in",
    "prompt": "Szyszynka wydziela __________, hormon związany z dobowym rytmem snu i czuwania.",
    "options": null,
    "altAnswers": [
      [
        "melatoninę",
        "melatonina"
      ]
    ],
    "answer": [
      "melatoninę"
    ],
    "explanation": "Melatonina produkowana przez szyszynkę reguluje rytm snu i czuwania."
  },
  {
    "id": "R05_HORM_07",
    "section": "Hormony, rozród i homeostaza",
    "type": "riddle",
    "prompt": "Jak nazywa się nowa komórka powstała podczas zapłodnienia z połączenia komórki jajowej i plemnika?",
    "options": null,
    "altAnswers": [
      "zygota",
      "zygotą"
    ],
    "answer": "zygota",
    "explanation": "Po połączeniu gamet powstaje zygota, od której rozpoczyna się rozwój nowego człowieka."
  },
  {
    "id": "R05_HORM_08",
    "section": "Hormony, rozród i homeostaza",
    "type": "odd_one_out",
    "prompt": "Wskaż substancję, która nie jest hormonem: insulina, glukagon, adrenalina, pepsyna.",
    "options": null,
    "answer": "pepsyna",
    "explanation": "Pepsyna jest enzymem trawiennym żołądka. Pozostałe substancje to hormony."
  },
  {
    "id": "R05_HORM_09",
    "section": "Hormony, rozród i homeostaza",
    "type": "match",
    "prompt": "Połącz gruczoł dokrewny z wydzielanym hormonem.",
    "options": null,
    "left": [
      "Szyszynka",
      "Trzustka",
      "Nadnercza",
      "Jądra"
    ],
    "right": [
      "Testosteron",
      "Adrenalina",
      "Insulina",
      "Melatonina"
    ],
    "answer": {
      "Szyszynka": "Melatonina",
      "Trzustka": "Insulina",
      "Nadnercza": "Adrenalina",
      "Jądra": "Testosteron"
    },
    "explanation": "Gruczoły wydzielania wewnętrznego produkują określone hormony działające na komórki docelowe.",
    "image": "r05_gruczoly_dokrewne.jpg"
  },
  {
    "id": "R05_HORM_10",
    "section": "Hormony, rozród i homeostaza",
    "type": "sequence",
    "prompt": "Ułóż etapy rozwoju pozapłodowego człowieka w kolejności od najwcześniejszego.",
    "options": null,
    "items": [
      "Okres dorosłości",
      "Okres dojrzewania",
      "Okres dzieciństwa",
      "Okres poniemowlęcy",
      "Okres niemowlęcy",
      "Okres noworodkowy"
    ],
    "answer": [
      "Okres noworodkowy",
      "Okres niemowlęcy",
      "Okres poniemowlęcy",
      "Okres dzieciństwa",
      "Okres dojrzewania",
      "Okres dorosłości"
    ],
    "explanation": "Po urodzeniu następują okresy: noworodkowy, niemowlęcy, poniemowlęcy, dzieciństwo, dojrzewanie i dorosłość."
  },
  {
    "id": "R05_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaki odsetek krwi stanowi osocze?",
    "options": [
      "25%",
      "35%",
      "45%",
      "55%",
      "65%",
      "75%"
    ],
    "answer": 3,
    "explanation": "Osocze stanowi około 55% objętości krwi."
  },
  {
    "id": "R05_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile dni żyją przeciętnie erytrocyty?",
    "options": [
      "30 dni",
      "60 dni",
      "90 dni",
      "120 dni",
      "150 dni",
      "180 dni"
    ],
    "answer": 3,
    "explanation": "Erytrocyty żyją około 120 dni, po czym są zastępowane nowymi.",
    "image": "r05_skladniki_krwi.jpg"
  },
  {
    "id": "R05_HARD_03",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która grupa krwi ma na erytrocytach oba antygeny A i B, a w osoczu nie ma przeciwciał anty-A i anty-B?",
    "options": [
      "A",
      "B",
      "AB",
      "0",
      "A Rh-",
      "B Rh-"
    ],
    "answer": 2,
    "explanation": "W układzie AB0 grupa AB ma na erytrocytach antygeny A i B oraz brak przeciwciał anty-A i anty-B w osoczu."
  },
  {
    "id": "R05_HARD_04",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Matka ma czynnik Rh-, ojciec Rh+, a dziecko dziedziczy po ojcu Rh+. Jaki problem immunologiczny może się rozwinąć?",
    "options": [
      "Alergia wziewna",
      "Konflikt serologiczny",
      "Hemofilia",
      "Krzywica",
      "Osteoporoza",
      "Świerzb"
    ],
    "answer": 1,
    "explanation": "W takim układzie może dojść do konfliktu serologicznego, jeśli organizm matki wytworzy przeciwciała przeciw erytrocytom Rh+ płodu."
  },
  {
    "id": "R05_HARD_05",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz poprawne połączenia narządu z wydalaną przez niego substancją.",
    "options": [
      "Płuca — dwutlenek węgla",
      "Skóra — woda",
      "Nerki — mocznik",
      "Płuca — żółć",
      "Nerki — kwas moczowy",
      "Skóra — pepsyna"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Płuca usuwają CO₂, skóra m.in. wodę, a nerki m.in. mocznik i kwas moczowy."
  },
  {
    "id": "R05_HARD_06",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które skutki są związane z działaniem adrenaliny?",
    "options": [
      "Podniesienie ciśnienia krwi",
      "Przyspieszenie pracy serca",
      "Przyspieszenie oddychania",
      "Obniżenie poziomu glukozy przez działanie insuliny",
      "Regulacja rytmu snu i czuwania"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Adrenalina wydzielana przez nadnercza podnosi ciśnienie i przyspiesza czynność serca oraz oddychanie."
  },
  {
    "id": "R05_HARD_07",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "W małym obiegu krwi tętnica płucna prowadzi krew natlenioną z lewej komory serca.",
    "options": null,
    "answer": false,
    "explanation": "Tętnica płucna prowadzi odtlenioną krew z prawej komory do płuc, gdzie zachodzi wymiana gazowa.",
    "image": "r05_serce_i_krwiobiegi.jpg"
  },
  {
    "id": "R05_HARD_08",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Pierwszy wynik pomiaru ciśnienia 120/80 mmHg odpowiada ciśnieniu __________, a drugi — ciśnieniu __________.",
    "options": null,
    "altAnswers": [
      [
        "skurczowemu",
        "skurczowe"
      ],
      [
        "rozkurczowemu",
        "rozkurczowe"
      ]
    ],
    "answer": [
      "skurczowemu",
      "rozkurczowemu"
    ],
    "explanation": "Pierwsza wartość pomiaru odnosi się do skurczu serca, druga do rozkurczu komór."
  },
  {
    "id": "R05_HARD_09",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Uzębienie stałe człowieka obejmuje __________ siekaczy, __________ przedtrzonowych i __________ trzonowych.",
    "options": null,
    "answer": [
      "8",
      "8",
      "12"
    ],
    "explanation": "U człowieka występuje 8 siekaczy, 4 kły, 8 przedtrzonowych i 12 trzonowych, łącznie 32 zęby stałe."
  },
  {
    "id": "R05_HARD_10",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się błona śluzowa macicy, która złuszcza się podczas menstruacji?",
    "options": null,
    "altAnswers": [
      "endometrium"
    ],
    "answer": "endometrium",
    "explanation": "Podczas miesiączki złuszcza się błona śluzowa macicy nazywana endometrium."
  },
  {
    "id": "R05_HARD_11",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż substancję, która nie jest hormonem dokrewnym: melatonina, parathormon, tyroksyna, keratyna.",
    "options": null,
    "answer": "keratyna",
    "explanation": "Keratyna jest białkiem budującym zrogowaciałą warstwę naskórka. Pozostałe substancje to hormony."
  },
  {
    "id": "R05_HARD_12",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Dopasuj stopień odmrożenia do opisu uszkodzenia.",
    "options": null,
    "left": [
      "I stopień",
      "II stopień",
      "III stopień",
      "IV stopień"
    ],
    "right": [
      "Martwica całych części ciała i możliwe uszkodzenie kości",
      "Uszkodzenie skóry właściwej i czasem tkanek głębszych",
      "Uszkodzenie głębszych warstw naskórka",
      "Powierzchowne warstwy naskórka i przejściowe zaburzenia krążenia"
    ],
    "answer": {
      "I stopień": "Powierzchowne warstwy naskórka i przejściowe zaburzenia krążenia",
      "II stopień": "Uszkodzenie głębszych warstw naskórka",
      "III stopień": "Uszkodzenie skóry właściwej i czasem tkanek głębszych",
      "IV stopień": "Martwica całych części ciała i możliwe uszkodzenie kości"
    },
    "explanation": "Wyróżnia się cztery stopnie odmrożenia — od przejściowego zaburzenia krążenia do głębokiej martwicy."
  },
  {
    "id": "R05_HARD_13",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Podziel elementy odporności na wrodzone bariery i mechanizmy swoiste.",
    "options": null,
    "items": [
      "Skóra jako bariera",
      "Kaszel jako odruch obronny",
      "Przeciwciała limfocytów B",
      "Komórki pamięci immunologicznej",
      "Błony śluzowe",
      "Kwaśny sok żołądkowy",
      "Limfocyty T niszczące zakażone komórki"
    ],
    "categories": [
      "Odporność wrodzona",
      "Odporność swoista"
    ],
    "answer": {
      "Odporność wrodzona": [
        "Skóra jako bariera",
        "Błony śluzowe",
        "Kaszel jako odruch obronny",
        "Kwaśny sok żołądkowy"
      ],
      "Odporność swoista": [
        "Przeciwciała limfocytów B",
        "Limfocyty T niszczące zakażone komórki",
        "Komórki pamięci immunologicznej"
      ]
    },
    "explanation": "Odporność wrodzona obejmuje bariery fizyczne i chemiczne; swoista rozpoznaje antygeny i wykorzystuje limfocyty oraz pamięć immunologiczną."
  },
  {
    "id": "R05_HARD_14",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż fazy cyklu miesiączkowego we właściwej kolejności.",
    "options": null,
    "items": [
      "Faza lutealna",
      "Owulacja",
      "Faza folikularna",
      "Menstruacja"
    ],
    "answer": [
      "Menstruacja",
      "Faza folikularna",
      "Owulacja",
      "Faza lutealna"
    ],
    "explanation": "Cykl obejmuje kolejno miesiączkę, dojrzewanie pęcherzyka jajnikowego, owulację i fazę lutealną."
  },
  {
    "id": "R05_HARD_15",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż struktury oka według drogi światła i dalszego impulsu do ośrodka wzroku.",
    "options": null,
    "items": [
      "Nerw wzrokowy",
      "Siatkówka",
      "Ciało szkliste",
      "Soczewka",
      "Źrenica",
      "Rogówka"
    ],
    "answer": [
      "Rogówka",
      "Źrenica",
      "Soczewka",
      "Ciało szkliste",
      "Siatkówka",
      "Nerw wzrokowy"
    ],
    "explanation": "Światło przechodzi przez rogówkę, źrenicę, soczewkę i ciało szkliste do siatkówki; nerw wzrokowy przenosi powstałe impulsy.",
    "image": "r05_siatkowka_oka.jpg"
  }
];

const KID_PROMPTS = {
  "R05_SKOR_01": "Co jest największym narządem w naszym ciele?",
  "R05_POKA_01": "Który enzym śliny pomaga trawić cukry?",
  "R05_KREW_01": "W jakiej części serca zaczyna się krążenie krwi przez płuca?",
  "R05_ODDE_02": "Jak nazywa się część nerki, która ją buduje i oczyszcza krew?",
  "R05_NERW_02": "Jakie komórki oka pozwalają nam widzieć kolory?",
  "R05_HORM_01": "Jaki hormon obniża cukier we krwi?",
  "R05_HORM_03": "Gdy jest gorąco, pocimy się i chłodzimy ciało. Jak nazywa się utrzymywanie równowagi w organizmie?",
  "R05_HARD_04": "Mama ma Rh-, tata Rh+, a dziecko Rh+. Jakie zagrożenie może się pojawić?"
};

const chapter = {
  id: "r05",
  number: 5,
  title: "Człowiek",
  icon: "🧍",
  sectionOrder: [
    "Skóra i aparat ruchu",
    "Układ pokarmowy i odżywianie",
    "Krążenie, krew i odporność",
    "Oddychanie i wydalanie",
    "Układ nerwowy i zmysły",
    "Hormony, rozród i homeostaza"
  ],
  sectionIcons: {
    "Skóra i aparat ruchu": "🦴",
    "Układ pokarmowy i odżywianie": "🍎",
    "Krążenie, krew i odporność": "🫀",
    "Oddychanie i wydalanie": "🫁",
    "Układ nerwowy i zmysły": "🧠",
    "Hormony, rozród i homeostaza": "⚖️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
