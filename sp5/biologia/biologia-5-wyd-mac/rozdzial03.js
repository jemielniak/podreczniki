// Skróty sekcji (do identyfikatorów ćwiczeń):
//   RTK  = Rośliny i tkanki roślinne
//   MCH  = Mchy
//   PSW  = Paprocie, skrzypy i widłaki
//   NAG  = Rośliny nagonasienne
//   ZNA  = Znaczenie nagonasiennych
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R03_RTK_01",
    "section": "Rośliny i tkanki roślinne",
    "type": "single_choice",
    "prompt": "Który zestaw cech najlepiej opisuje większość roślin?",
    "options": [
      "Są samożywne, mają chloroplasty i ścianę komórkową z celulozy",
      "Są cudzożywne i nie mają jądra komórkowego",
      "Żyją wyłącznie w wodzie i nie tworzą tkanek",
      "Mają komórki bez ściany komórkowej",
      "Nie zawierają mitochondriów",
      "Wszystkie są jednokomórkowe"
    ],
    "answer": 0,
    "explanation": "Rośliny są zwykle wielokomórkowe i samożywne. Ich komórki mają jądro, chloroplasty oraz ścianę komórkową z celulozy.",
    "image": "r03_budowa_hierarchiczna_rosliny.jpg"
  },
  {
    "id": "R03_RTK_02",
    "section": "Rośliny i tkanki roślinne",
    "type": "true_false",
    "prompt": "Komórki roślin mają ścianę komórkową zbudowaną z celulozy.",
    "options": null,
    "answer": true,
    "explanation": "Ściana komórkowa z celulozy jest jedną z cech komórek roślinnych."
  },
  {
    "id": "R03_RTK_03",
    "section": "Rośliny i tkanki roślinne",
    "type": "fill_in",
    "prompt": "W budowie hierarchicznej roślin komórki tworzą __________, a tkanki tworzą __________.",
    "options": null,
    "answer": [
      "tkanki",
      "organy"
    ],
    "altAnswers": [
      [
        "tkanki",
        "tkankę"
      ],
      [
        "organy",
        "organ"
      ]
    ],
    "explanation": "Rośliny mają budowę hierarchiczną: komórki łączą się w tkanki, a tkanki budują organy.",
    "image": "r03_budowa_hierarchiczna_rosliny.jpg"
  },
  {
    "id": "R03_RTK_04",
    "section": "Rośliny i tkanki roślinne",
    "type": "match",
    "prompt": "Połącz tkankę stałą z jej główną funkcją.",
    "options": null,
    "left": [
      "tkanka okrywająca",
      "tkanka przewodząca",
      "tkanka miękiszowa",
      "tkanka wzmacniająca"
    ],
    "right": [
      "ochrona rośliny",
      "transport substancji",
      "fotosynteza lub magazynowanie",
      "usztywnianie rośliny"
    ],
    "answer": {
      "tkanka okrywająca": "ochrona rośliny",
      "tkanka przewodząca": "transport substancji",
      "tkanka miękiszowa": "fotosynteza lub magazynowanie",
      "tkanka wzmacniająca": "usztywnianie rośliny"
    },
    "explanation": "Tkanki stałe różnią się budową i zadaniami: okrywają, przewodzą, wypełniają lub wzmacniają ciało rośliny."
  },
  {
    "id": "R03_RTK_05",
    "section": "Rośliny i tkanki roślinne",
    "type": "single_choice",
    "prompt": "Która tkanka okrywa młode organy roślin i zwykle składa się z jednej warstwy żywych komórek?",
    "options": [
      "skórka",
      "korek",
      "łyko",
      "drewno",
      "twardzica",
      "miazga"
    ],
    "answer": 0,
    "explanation": "Skórka okrywa młode organy roślin. Chroni je i uczestniczy w wymianie substancji z otoczeniem.",
    "image": "r03_aparat_szparkowy_i_wlosniki.jpg"
  },
  {
    "id": "R03_RTK_06",
    "section": "Rośliny i tkanki roślinne",
    "type": "multi_select",
    "prompt": "Zaznacz wytwory skórki opisane w rozdziale.",
    "options": [
      "aparaty szparkowe",
      "włośniki",
      "naczynia drewna",
      "sita łyka",
      "miazga",
      "stożek wzrostu"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Do wytworów skórki należą aparaty szparkowe i włośniki. Aparaty szparkowe umożliwiają wymianę gazową, a włośniki zwiększają powierzchnię pobierania wody z solami mineralnymi.",
    "image": "r03_aparat_szparkowy_i_wlosniki.jpg"
  },
  {
    "id": "R03_RTK_07",
    "section": "Rośliny i tkanki roślinne",
    "type": "true_false",
    "prompt": "Korek chroniący starsze części drzew i krzewów jest zbudowany z martwych komórek o grubych ścianach.",
    "options": null,
    "answer": true,
    "explanation": "Korek zabezpiecza starsze części rośliny przed utratą wody i wahaniami temperatury."
  },
  {
    "id": "R03_RTK_08",
    "section": "Rośliny i tkanki roślinne",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie należy do tkanki okrywającej ani jej wytworów: skórka, korek, aparat szparkowy, łyko.",
    "options": null,
    "answer": "łyko",
    "explanation": "Łyko należy do tkanki przewodzącej. Skórka i korek są tkankami okrywającymi, a aparat szparkowy jest wytworem skórki."
  },
  {
    "id": "R03_RTK_09",
    "section": "Rośliny i tkanki roślinne",
    "type": "riddle",
    "prompt": "Jak nazywa się tkanka przewodząca wodę z solami mineralnymi z korzeni do pozostałych organów rośliny?",
    "options": null,
    "answer": "drewno",
    "altAnswers": [
      "drewno",
      "tkanka drewna",
      "naczynia"
    ],
    "explanation": "Drewno przewodzi wodę z solami mineralnymi. Tworzą je martwe komórki w postaci rur nazywanych naczyniami.",
    "image": "r03_miekisz_przewodzace_lisc.jpg"
  },
  {
    "id": "R03_RTK_10",
    "section": "Rośliny i tkanki roślinne",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do typu tkanek.",
    "options": null,
    "items": [
      "skórka",
      "łyko",
      "drewno",
      "stożek wzrostu pędu",
      "miazga",
      "korek"
    ],
    "categories": [
      "tkanki stałe",
      "tkanki twórcze"
    ],
    "answer": {
      "tkanki stałe": [
        "skórka",
        "łyko",
        "drewno",
        "korek"
      ],
      "tkanki twórcze": [
        "stożek wzrostu pędu",
        "miazga"
      ]
    },
    "explanation": "Tkanki stałe pełnią określone funkcje w organach, a tkanki twórcze umożliwiają powstawanie tkanek stałych i wzrost rośliny."
  },
  {
    "id": "R03_MCH_01",
    "section": "Mchy",
    "type": "single_choice",
    "prompt": "Gdzie najczęściej występują mchy?",
    "options": [
      "w miejscach wilgotnych",
      "wyłącznie na suchych pustyniach",
      "tylko w słonej wodzie",
      "tylko na korzeniach drzew",
      "wyłącznie na polach uprawnych",
      "tylko w lodzie"
    ],
    "answer": 0,
    "explanation": "Mchy najlepiej rosną w wilgotnych środowiskach, często tworząc zwarte darnie w runie leśnym.",
    "image": "r03_plonnik_pospolity_budowa.jpg"
  },
  {
    "id": "R03_MCH_02",
    "section": "Mchy",
    "type": "true_false",
    "prompt": "Mchy mają typowe organy: liście, łodygi i korzenie z tkanką przewodzącą oraz wzmacniającą.",
    "options": null,
    "answer": false,
    "explanation": "Mchy nie mają typowych organów. Zamiast nich występują listki, łodyżki i nitkowate chwytniki."
  },
  {
    "id": "R03_MCH_03",
    "section": "Mchy",
    "type": "match",
    "prompt": "Połącz część płonnika pospolitego z jej funkcją.",
    "options": null,
    "left": [
      "zarodnia",
      "łodyżka nieulistniona",
      "listki",
      "chwytniki"
    ],
    "right": [
      "wytwarzanie zarodników",
      "uniesienie zarodni",
      "fotosynteza i wchłanianie wody",
      "utrzymywanie rośliny w glebie"
    ],
    "answer": {
      "zarodnia": "wytwarzanie zarodników",
      "łodyżka nieulistniona": "uniesienie zarodni",
      "listki": "fotosynteza i wchłanianie wody",
      "chwytniki": "utrzymywanie rośliny w glebie"
    },
    "explanation": "Budowa mchu jest przystosowana do pobierania wody, rozprzestrzeniania zarodników i utrzymywania rośliny w podłożu.",
    "image": "r03_plonnik_pospolity_budowa.jpg"
  },
  {
    "id": "R03_MCH_04",
    "section": "Mchy",
    "type": "multi_select",
    "prompt": "Zaznacz znaczenie mchów w przyrodzie.",
    "options": [
      "zatrzymują duże ilości wody",
      "zmniejszają zagrożenie powodziowe",
      "uczestniczą w tworzeniu gleby",
      "wytwarzają owoce z nasionami",
      "niszczą każdą glebę",
      "zawsze rosną pojedynczo"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Mchy gromadzą wodę, ograniczają zagrożenie powodziowe, chronią glebę i jako organizmy pionierskie pomagają tworzyć podłoże dla innych roślin."
  },
  {
    "id": "R03_MCH_05",
    "section": "Mchy",
    "type": "fill_in",
    "prompt": "Mchy rozmnażają się przez __________, a zwarte skupiska mchów nazywa się __________.",
    "options": null,
    "answer": [
      "zarodniki",
      "darnie"
    ],
    "altAnswers": [
      [
        "zarodniki",
        "zarodników"
      ],
      [
        "darnie",
        "darń"
      ]
    ],
    "explanation": "Mchy wytwarzają zarodniki, a osobniki rosnące blisko siebie tworzą darnie."
  },
  {
    "id": "R03_MCH_06",
    "section": "Mchy",
    "type": "single_choice",
    "prompt": "Co oznacza, że mchy są organizmami pionierskimi?",
    "options": [
      "jako jedne z pierwszych zasiedlają trudne podłoża",
      "rosną wyłącznie w gotowej żyznej glebie",
      "zawsze są najwyższymi roślinami w lesie",
      "wytwarzają największe nasiona",
      "żyją tylko w głębokiej wodzie",
      "nie obumierają"
    ],
    "answer": 0,
    "explanation": "Organizmy pionierskie jako jedne z pierwszych zasiedlają podłoża mało gościnne dla innych roślin i przygotowują je dla kolejnych gatunków."
  },
  {
    "id": "R03_MCH_07",
    "section": "Mchy",
    "type": "scenario",
    "prompt": "Po silnym deszczu zauważasz, że kępa mchu w lesie działa jak miękka gąbka. Co najlepiej wyjaśnia to zjawisko?",
    "options": [
      "listki mchów pochłaniają i zatrzymują wodę",
      "mchy mają grube owoce pełne wody",
      "mchy pobierają wodę tylko głębokim korzeniem głównym",
      "mchy magazynują wodę w szyszkach"
    ],
    "answer": 0,
    "explanation": "Listki mchów pochłaniają wilgoć i zatrzymują wodę, co pomaga mchom przetrwać okresy przesuszenia podłoża.",
    "image": "r03_plonnik_pospolity_budowa.jpg"
  },
  {
    "id": "R03_MCH_08",
    "section": "Mchy",
    "type": "riddle",
    "prompt": "Jak nazywa się mech, którego budowa pozwala szczególnie silnie chłonąć wodę i który tworzy torfowiska?",
    "options": null,
    "answer": "torfowiec",
    "altAnswers": [
      "torfowiec",
      "torfowce",
      "mech torfowiec"
    ],
    "explanation": "Torfowce mogą tworzyć grube poduchy mchu. Ich szczątki w warunkach utrudnionego dostępu powietrza przyczyniają się do powstawania torfu.",
    "image": "r03_torfowiec_torfowisko.jpg"
  },
  {
    "id": "R03_MCH_09",
    "section": "Mchy",
    "type": "odd_one_out",
    "prompt": "Wskaż roślinę, która nie jest mchem: płonnik pospolity, torfowiec kończysty, merzyk fałdowany, sosna zwyczajna.",
    "options": null,
    "answer": "sosna zwyczajna",
    "explanation": "Sosna zwyczajna jest rośliną nagonasienną, a pozostałe przykłady to mchy wymienione w rozdziale."
  },
  {
    "id": "R03_MCH_10",
    "section": "Mchy",
    "type": "sequence",
    "prompt": "Ułóż etapy pionierskiego znaczenia mchów w poprawnej kolejności.",
    "options": null,
    "items": [
      "obumierające części tworzą grubszą warstwę podłoża",
      "podłoże zasiedlają rośliny wymagające żyźniejszej gleby",
      "mchy jako jedne z pierwszych pojawiają się na skałach lub murach",
      "mchy rosną i zatrzymują wilgoć"
    ],
    "answer": [
      "mchy jako jedne z pierwszych pojawiają się na skałach lub murach",
      "mchy rosną i zatrzymują wilgoć",
      "obumierające części tworzą grubszą warstwę podłoża",
      "podłoże zasiedlają rośliny wymagające żyźniejszej gleby"
    ],
    "explanation": "Mchy zasiedlają trudne podłoża, rosną tam, obumierają częściowo i tworzą warstwę podłoża, którą mogą później zasiedlić bardziej wymagające rośliny."
  },
  {
    "id": "R03_PSW_01",
    "section": "Paprocie, skrzypy i widłaki",
    "type": "multi_select",
    "prompt": "Zaznacz wspólne cechy paproci, skrzypów i widłaków.",
    "options": [
      "mają łodygi, liście i korzenie",
      "wytwarzają zarodniki w zarodniach",
      "mają tkankę przewodzącą i wzmacniającą",
      "wytwarzają owoce",
      "nie mają tkanek",
      "są wyłącznie jednokomórkowe"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Paprocie, skrzypy i widłaki mają tkanki oraz organy: łodygi, liście i korzenie. Rozmnażają się przez zarodniki wytwarzane w zarodniach."
  },
  {
    "id": "R03_PSW_02",
    "section": "Paprocie, skrzypy i widłaki",
    "type": "single_choice",
    "prompt": "Czym jest kłącze paproci?",
    "options": [
      "podziemną łodygą",
      "nasionem paproci",
      "kwiatem żeńskim",
      "owocem z zarodnikami",
      "rodzajem włośnika",
      "drewnem paproci"
    ],
    "answer": 0,
    "explanation": "Kłącze paproci to łodyga ukryta w ziemi. Wyrastają z niego pęki liści oraz liczne korzenie.",
    "image": "r03_paproc_kupki_zarodniane.jpg"
  },
  {
    "id": "R03_PSW_03",
    "section": "Paprocie, skrzypy i widłaki",
    "type": "true_false",
    "prompt": "Rozwijający się młody liść paproci może przypominać kształtem laskę św. Mikołaja, czyli pastorał.",
    "options": null,
    "answer": true,
    "explanation": "W rozdziale opisano, że młody rozwijający się liść paproci jest zwinięty i przypomina pastorał."
  },
  {
    "id": "R03_PSW_04",
    "section": "Paprocie, skrzypy i widłaki",
    "type": "match",
    "prompt": "Połącz grupę roślin z cechą budowy.",
    "options": null,
    "left": [
      "paprocie",
      "skrzypy",
      "widłaki"
    ],
    "right": [
      "duże liście wyrastające z kłącza",
      "pędy wiosenne i letnie u skrzypu polnego",
      "widlasto rozgałęzione łodygi"
    ],
    "answer": {
      "paprocie": "duże liście wyrastające z kłącza",
      "skrzypy": "pędy wiosenne i letnie u skrzypu polnego",
      "widłaki": "widlasto rozgałęzione łodygi"
    },
    "explanation": "Paprocie, skrzypy i widłaki różnią się wyglądem, mimo że wszystkie mają tkanki, organy i rozmnażają się przez zarodniki."
  },
  {
    "id": "R03_PSW_05",
    "section": "Paprocie, skrzypy i widłaki",
    "type": "odd_one_out",
    "prompt": "Wskaż grupę, która nie pasuje do pozostałych: paprocie, skrzypy, widłaki, mchy.",
    "options": null,
    "answer": "mchy",
    "explanation": "Mchy nie mają typowych organów z tkankami przewodzącymi i wzmacniającymi, a paprocie, skrzypy i widłaki mają takie organy."
  },
  {
    "id": "R03_PSW_06",
    "section": "Paprocie, skrzypy i widłaki",
    "type": "fill_in",
    "prompt": "U paproci z kłącza wyrastają pęki __________ i liczne __________.",
    "options": null,
    "answer": [
      "liści",
      "korzenie"
    ],
    "altAnswers": [
      [
        "liści",
        "liście"
      ],
      [
        "korzenie",
        "korzeni"
      ]
    ],
    "explanation": "Kłącze to podziemna łodyga paproci, z której wyrastają liście oraz korzenie."
  },
  {
    "id": "R03_PSW_07",
    "section": "Paprocie, skrzypy i widłaki",
    "type": "scenario",
    "prompt": "Wiosną widzisz brązowy pęd zakończony skupieniem liści z zarodniami, a później zielony silnie rozgałęziony pęd. Do której grupy należy ta roślina?",
    "options": [
      "skrzypy",
      "mchy",
      "rośliny okrytonasienne",
      "glony"
    ],
    "answer": 0,
    "explanation": "Opis pasuje do skrzypu polnego, u którego występują pędy wiosenne i pędy letnie pojawiające się w różnych porach roku.",
    "image": "r03_skrzyp_pedy.jpg"
  },
  {
    "id": "R03_PSW_08",
    "section": "Paprocie, skrzypy i widłaki",
    "type": "riddle",
    "prompt": "Jak nazywa się grupa roślin, której łodygi rozgałęziają się widlasto, a liście są drobne, łuskowate i zimozielone?",
    "options": null,
    "answer": "widłaki",
    "altAnswers": [
      "widłaki",
      "widłak"
    ],
    "explanation": "Widłaki mają łodygi rozgałęzione widlasto oraz drobne, łuskowate, zimozielone liście.",
    "image": "r03_widlak_ped.jpg"
  },
  {
    "id": "R03_PSW_09",
    "section": "Paprocie, skrzypy i widłaki",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do grup roślin.",
    "options": null,
    "items": [
      "liście przypominające duże pióra",
      "pędy z podłużnymi bruzdami",
      "łodygi rozgałęzione widlasto",
      "kłącze ukryte w ziemi",
      "liście łuskowate i zrośnięte"
    ],
    "categories": [
      "paprocie",
      "skrzypy",
      "widłaki"
    ],
    "answer": {
      "paprocie": [
        "liście przypominające duże pióra",
        "kłącze ukryte w ziemi"
      ],
      "skrzypy": [
        "pędy z podłużnymi bruzdami",
        "liście łuskowate i zrośnięte"
      ],
      "widłaki": [
        "łodygi rozgałęzione widlasto"
      ]
    },
    "explanation": "Każda z tych grup ma własne charakterystyczne cechy wyglądu, przy zachowaniu wspólnej cechy rozmnażania przez zarodniki."
  },
  {
    "id": "R03_PSW_10",
    "section": "Paprocie, skrzypy i widłaki",
    "type": "true_false",
    "prompt": "Węgiel kamienny powstał ze szczątków dawnych paproci, skrzypów i widłaków.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział wskazuje, że przed milionami lat rośliny te tworzyły bujne lasy, a z ich szczątków powstał węgiel kamienny."
  },
  {
    "id": "R03_NAG_01",
    "section": "Rośliny nagonasienne",
    "type": "single_choice",
    "prompt": "Co oznacza nazwa rośliny nagonasienne?",
    "options": [
      "mają nieosłonięte nasiona i nie wytwarzają owoców",
      "nie wytwarzają żadnych nasion",
      "mają nasiona zawsze ukryte w jabłku",
      "rozmnażają się tylko przez zarodniki",
      "nie mają kwiatów",
      "żyją wyłącznie w wodzie"
    ],
    "answer": 0,
    "explanation": "Rośliny nagonasienne mają nasiona nieosłonięte, czyli nieumieszczone wewnątrz owocu.",
    "image": "r03_sosna_kwiaty_szyszki.jpg"
  },
  {
    "id": "R03_NAG_02",
    "section": "Rośliny nagonasienne",
    "type": "true_false",
    "prompt": "Rośliny nagonasienne wytwarzają owoce, w których znajdują się nasiona.",
    "options": null,
    "answer": false,
    "explanation": "Nasiona roślin nagonasiennych są nieosłonięte, dlatego rośliny te nie wytwarzają owoców."
  },
  {
    "id": "R03_NAG_03",
    "section": "Rośliny nagonasienne",
    "type": "multi_select",
    "prompt": "Zaznacz organy wytwarzane przez rośliny nagonasienne według rozdziału.",
    "options": [
      "korzenie",
      "łodygi",
      "liście",
      "kwiaty",
      "owoce",
      "zarodnie na liściach paproci"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Rośliny nagonasienne wytwarzają korzenie, łodygi, liście i kwiaty. Nie wytwarzają owoców."
  },
  {
    "id": "R03_NAG_04",
    "section": "Rośliny nagonasienne",
    "type": "fill_in",
    "prompt": "Liście roślin nagonasiennych mają najczęściej postać __________ lub __________.",
    "options": null,
    "answer": [
      "igieł",
      "łusek"
    ],
    "altAnswers": [
      [
        "igieł",
        "igły"
      ],
      [
        "łusek",
        "łuski"
      ]
    ],
    "explanation": "U roślin nagonasiennych liście są zwykle igłami albo łuskami, często zimozielonymi i wieloletnimi.",
    "image": "r03_porownanie_szyszek_igiel.jpg"
  },
  {
    "id": "R03_NAG_05",
    "section": "Rośliny nagonasienne",
    "type": "match",
    "prompt": "Połącz część sosny zwyczajnej z opisem.",
    "options": null,
    "left": [
      "pień",
      "igły",
      "korzenie",
      "szyszka"
    ],
    "right": [
      "wieloletnia łodyga",
      "liście sosny",
      "pobieranie wody i soli mineralnych",
      "struktura związana z nasionami"
    ],
    "answer": {
      "pień": "wieloletnia łodyga",
      "igły": "liście sosny",
      "korzenie": "pobieranie wody i soli mineralnych",
      "szyszka": "struktura związana z nasionami"
    },
    "explanation": "Sosna zwyczajna ma silny system korzeniowy, pień jako wieloletnią łodygę oraz igły będące liśćmi.",
    "image": "r03_sosna_kwiaty_szyszki.jpg"
  },
  {
    "id": "R03_NAG_06",
    "section": "Rośliny nagonasienne",
    "type": "scenario",
    "prompt": "Na gałązce sosny zauważasz małe czerwone szyszeczki. Według opisu z rozdziału co one tworzą?",
    "options": [
      "kwiatostany żeńskie",
      "pędy letnie skrzypu",
      "zarodnie mchu",
      "owoce sosny"
    ],
    "answer": 0,
    "explanation": "Kwiaty żeńskie sosny tworzą kwiatostan w postaci małej czerwonej szyszeczki.",
    "image": "r03_sosna_kwiaty_szyszki.jpg"
  },
  {
    "id": "R03_NAG_07",
    "section": "Rośliny nagonasienne",
    "type": "riddle",
    "prompt": "Jak nazywa się przeniesienie ziarna pyłku na kwiat żeński?",
    "options": null,
    "answer": "zapylenie",
    "altAnswers": [
      "zapylenie",
      "zapylanie"
    ],
    "explanation": "Gdy ziarno pyłku zostanie przeniesione na kwiat żeński, następuje zapylenie."
  },
  {
    "id": "R03_NAG_08",
    "section": "Rośliny nagonasienne",
    "type": "sequence",
    "prompt": "Ułóż etapy rozmnażania sosny w poprawnej kolejności.",
    "options": null,
    "items": [
      "powstają nasiona",
      "ziarna pyłku przenosi wiatr",
      "dochodzi do zapłodnienia",
      "powstają kwiaty męskie i żeńskie",
      "następuje zapylenie"
    ],
    "answer": [
      "powstają kwiaty męskie i żeńskie",
      "ziarna pyłku przenosi wiatr",
      "następuje zapylenie",
      "dochodzi do zapłodnienia",
      "powstają nasiona"
    ],
    "explanation": "U sosny najpierw powstają kwiaty męskie i żeńskie, pyłek jest przenoszony przez wiatr, następuje zapylenie i zapłodnienie, a potem powstają nasiona."
  },
  {
    "id": "R03_NAG_09",
    "section": "Rośliny nagonasienne",
    "type": "odd_one_out",
    "prompt": "Wskaż roślinę, która nie należy do nagonasiennych: sosna zwyczajna, świerk pospolity, jodła pospolita, jabłoń zwyczajna.",
    "options": null,
    "answer": "jabłoń zwyczajna",
    "explanation": "Jabłoń zwyczajna jest rośliną okrytonasienną, ponieważ jej nasiona znajdują się wewnątrz owocu."
  },
  {
    "id": "R03_NAG_10",
    "section": "Rośliny nagonasienne",
    "type": "true_false",
    "prompt": "Igły sosny zwyczajnej wyrastają po dwie obok siebie.",
    "options": null,
    "answer": true,
    "explanation": "W opisie sosny zwyczajnej podano, że jej igły są osadzone po dwie."
  },
  {
    "id": "R03_ZNA_01",
    "section": "Znaczenie nagonasiennych",
    "type": "single_choice",
    "prompt": "Jak nazywa się las iglasty?",
    "options": [
      "bór",
      "sad",
      "łąka",
      "torfowisko",
      "runo",
      "plantacja"
    ],
    "answer": 0,
    "explanation": "Lasy iglaste są nazywane borami. W Polsce występują między innymi bory sosnowe.",
    "image": "r03_bor_sosnowy.jpg"
  },
  {
    "id": "R03_ZNA_02",
    "section": "Znaczenie nagonasiennych",
    "type": "multi_select",
    "prompt": "Zaznacz rośliny nagonasienne naturalnie występujące w Polsce wymienione w rozdziale.",
    "options": [
      "sosna zwyczajna",
      "świerk pospolity",
      "jodła pospolita",
      "modrzew europejski",
      "jabłoń zwyczajna",
      "płonnik pospolity"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Wśród polskich nagonasiennych wymieniono między innymi sosnę zwyczajną, świerk pospolity, jodłę pospolitą i modrzew europejski."
  },
  {
    "id": "R03_ZNA_03",
    "section": "Znaczenie nagonasiennych",
    "type": "match",
    "prompt": "Połącz gatunek nagonasienny z cechą wskazaną w rozdziale lub kluczu.",
    "options": null,
    "left": [
      "modrzew europejski",
      "jałowiec pospolity",
      "cis pospolity",
      "sosna limba"
    ],
    "right": [
      "gubi liście na zimę",
      "ma igły wyrastające po trzy",
      "ma nasiona z czerwoną osnówką",
      "ma igły wyrastające po pięć"
    ],
    "answer": {
      "modrzew europejski": "gubi liście na zimę",
      "jałowiec pospolity": "ma igły wyrastające po trzy",
      "cis pospolity": "ma nasiona z czerwoną osnówką",
      "sosna limba": "ma igły wyrastające po pięć"
    },
    "explanation": "Gatunki nagonasienne można rozpoznawać między innymi po igłach, szyszkach i szczególnych cechach pędów.",
    "image": "r03_porownanie_szyszek_igiel.jpg"
  },
  {
    "id": "R03_ZNA_04",
    "section": "Znaczenie nagonasiennych",
    "type": "true_false",
    "prompt": "Drewno sosnowe jest wykorzystywane w stolarstwie, ponieważ łatwo poddaje się obróbce.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział podaje drewno sosnowe jako przykład surowca chętnie wykorzystywanego w stolarstwie."
  },
  {
    "id": "R03_ZNA_05",
    "section": "Znaczenie nagonasiennych",
    "type": "fill_in",
    "prompt": "Drewno roślin nagonasiennych wykorzystuje się m.in. do wyrobu __________ i __________.",
    "options": null,
    "answer": [
      "mebli",
      "papieru"
    ],
    "altAnswers": [
      [
        "mebli",
        "meble"
      ],
      [
        "papieru",
        "papier"
      ]
    ],
    "explanation": "Drewno nagonasiennych jest cennym surowcem, używanym między innymi w meblarstwie i do produkcji papieru."
  },
  {
    "id": "R03_ZNA_06",
    "section": "Znaczenie nagonasiennych",
    "type": "scenario",
    "prompt": "Oznaczasz drzewo z miękkimi igłami zebranymi w pęczki, które opadają na zimę. Do jakiego gatunku prowadzi klucz z rozdziału?",
    "options": [
      "modrzew europejski",
      "cis pospolity",
      "jodła pospolita",
      "świerk pospolity"
    ],
    "answer": 0,
    "explanation": "Klucz do oznaczania wskazuje, że miękkie igły zebrane w pęczki i opadające na zimę prowadzą do modrzewia europejskiego."
  },
  {
    "id": "R03_ZNA_07",
    "section": "Znaczenie nagonasiennych",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady znaczenia nagonasiennych do kategorii.",
    "options": null,
    "items": [
      "są producentami tlenu",
      "tworzą środowisko życia organizmów",
      "dostarczają drewna na papier",
      "ich żywica bywa surowcem przemysłowym",
      "kształtują mikroklimat"
    ],
    "categories": [
      "znaczenie w przyrodzie",
      "znaczenie dla człowieka"
    ],
    "answer": {
      "znaczenie w przyrodzie": [
        "są producentami tlenu",
        "tworzą środowisko życia organizmów",
        "kształtują mikroklimat"
      ],
      "znaczenie dla człowieka": [
        "dostarczają drewna na papier",
        "ich żywica bywa surowcem przemysłowym"
      ]
    },
    "explanation": "Rośliny nagonasienne są ważne w przyrodzie, a także dostarczają człowiekowi drewna, żywicy i surowców dla przemysłu."
  },
  {
    "id": "R03_ZNA_08",
    "section": "Znaczenie nagonasiennych",
    "type": "riddle",
    "prompt": "Jak nazywa się ceniona w jubilerstwie skamieniała żywica dawnych drzew?",
    "options": null,
    "answer": "bursztyn",
    "altAnswers": [
      "bursztyn",
      "jantar"
    ],
    "explanation": "Bursztyn powstał z żywicy drzew rosnących przed milionami lat i jest ceniony w jubilerstwie."
  },
  {
    "id": "R03_ZNA_09",
    "section": "Znaczenie nagonasiennych",
    "type": "odd_one_out",
    "prompt": "Wskaż przykład, który nie jest typem boru sosnowego z rozdziału: bór sosnowy świeży, bór sosnowy suchy, bór sosnowy bagienny, sad jabłoniowy.",
    "options": null,
    "answer": "sad jabłoniowy",
    "explanation": "Sad jabłoniowy nie jest borem sosnowym. Rozdział opisuje bór sosnowy świeży, suchy i bagienny."
  },
  {
    "id": "R03_ZNA_10",
    "section": "Znaczenie nagonasiennych",
    "type": "true_false",
    "prompt": "Pod jodłami łatwo znaleźć całe, dojrzałe szyszki leżące na ziemi.",
    "options": null,
    "answer": false,
    "explanation": "Szyszki jodły rosną do góry i rozpadają się, dlatego pod jodłami nie znajduje się całych szyszek tak jak pod wieloma innymi drzewami iglastymi."
  },
  {
    "id": "R03_HARD_01",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz strukturę z dokładną funkcją lub cechą.",
    "options": null,
    "left": [
      "włośniki",
      "aparaty szparkowe",
      "przetchlinki",
      "sita",
      "naczynia"
    ],
    "right": [
      "zwiększają powierzchnię pobierania wody",
      "umożliwiają wymianę gazową w skórce",
      "umożliwiają wymianę gazową w korku",
      "tworzą przewody łyka",
      "tworzą przewody drewna"
    ],
    "answer": {
      "włośniki": "zwiększają powierzchnię pobierania wody",
      "aparaty szparkowe": "umożliwiają wymianę gazową w skórce",
      "przetchlinki": "umożliwiają wymianę gazową w korku",
      "sita": "tworzą przewody łyka",
      "naczynia": "tworzą przewody drewna"
    },
    "explanation": "Włośniki, aparaty szparkowe, przetchlinki, sita i naczynia pełnią różne zadania związane z pobieraniem, wymianą i transportem substancji."
  },
  {
    "id": "R03_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz elementy zbudowane w rozdziale z martwych komórek.",
    "options": [
      "korek",
      "drewno",
      "twardzica",
      "łyko",
      "zwarcica",
      "miękisz palisadowy"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Korek, drewno i twardzica są opisane jako zbudowane z martwych komórek. Łyko i zwarcica tworzą komórki żywe."
  },
  {
    "id": "R03_HARD_03",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Łodyga i korzeń pewnej rośliny z roku na rok stają się coraz grubsze. Która tkanka twórcza odpowiada za taki przyrost?",
    "options": [
      "miazga",
      "skórka",
      "korek",
      "miękisz gąbczasty"
    ],
    "answer": 0,
    "explanation": "Miazga występuje wewnątrz łodyg i korzeni niektórych roślin. Podziały jej komórek powodują przyrost na grubość."
  },
  {
    "id": "R03_HARD_04",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż proces powstawania tkanki stałej w najwłaściwszej kolejności.",
    "options": null,
    "items": [
      "komórki różnicują się",
      "tkanka pełni określoną funkcję w organie",
      "komórki tkanki twórczej dzielą się",
      "powstaje tkanka stała"
    ],
    "answer": [
      "komórki tkanki twórczej dzielą się",
      "komórki różnicują się",
      "powstaje tkanka stała",
      "tkanka pełni określoną funkcję w organie"
    ],
    "explanation": "Tkanki stałe powstają dzięki podziałom komórek tkanki twórczej, po których komórki różnicują się i zaczynają pełnić określone funkcje w organie."
  },
  {
    "id": "R03_HARD_05",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Zwarcica jest zbudowana z komórek __________, a twardzica z komórek __________.",
    "options": null,
    "answer": [
      "żywych",
      "martwych"
    ],
    "altAnswers": [
      [
        "żywych",
        "żywe"
      ],
      [
        "martwych",
        "martwe"
      ]
    ],
    "explanation": "Zwarcica występuje w rosnących organach i tworzą ją żywe komórki. Twardzica występuje w organach, które zakończyły wzrost, i składa się z martwych komórek."
  },
  {
    "id": "R03_HARD_06",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W jakich warunkach ze szczątków torfowców powstaje torf?",
    "options": [
      "przy utrudnionym dostępie powietrza",
      "wyłącznie na suchych piaskach",
      "tylko w pełnym słońcu i bez wody",
      "w dojrzałych owocach",
      "w szyszkach sosny",
      "w korku starych drzew"
    ],
    "answer": 0,
    "explanation": "Torf powstaje ze szczątków torfowców przy utrudnionym dostępie powietrza, w bardzo wilgotnych warunkach torfowiska.",
    "image": "r03_torfowiec_torfowisko.jpg"
  },
  {
    "id": "R03_HARD_07",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Salwinia pływająca jest przykładem paproci żyjącej w środowisku wodnym.",
    "options": null,
    "answer": true,
    "explanation": "W rozdziale podano salwinię pływającą jako nieliczny przykład paproci spotykanej w stawach i wolno płynących rzekach."
  },
  {
    "id": "R03_HARD_08",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż roślinę, która nie jest paprocią: pióropusznik strusi, języcznik zwyczajny, długosz królewski, skrzyp polny.",
    "options": null,
    "answer": "skrzyp polny",
    "explanation": "Skrzyp polny należy do skrzypów, a pióropusznik strusi, języcznik zwyczajny i długosz królewski to paprocie wymienione w rozdziale."
  },
  {
    "id": "R03_HARD_09",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj gatunki do liczby lub ułożenia igieł z klucza.",
    "options": null,
    "items": [
      "sosna zwyczajna",
      "sosna limba",
      "jałowiec pospolity",
      "świerk pospolity",
      "jodła pospolita"
    ],
    "categories": [
      "igły po dwie",
      "igły po pięć",
      "igły po trzy",
      "igły pojedyncze"
    ],
    "answer": {
      "igły po dwie": [
        "sosna zwyczajna"
      ],
      "igły po pięć": [
        "sosna limba"
      ],
      "igły po trzy": [
        "jałowiec pospolity"
      ],
      "igły pojedyncze": [
        "świerk pospolity",
        "jodła pospolita"
      ]
    },
    "explanation": "Klucz rozpoznawania iglastych wykorzystuje między innymi liczbę igieł wyrastających z jednego miejsca oraz kształt igieł."
  },
  {
    "id": "R03_HARD_10",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Szyszki jodły pospolitej rosną do góry i rozpadają się po dojrzeniu.",
    "options": null,
    "answer": true,
    "explanation": "Opis jodły pospolitej wskazuje, że jej szyszki są walcowate, rosną do góry i po dojrzeniu rozpadają się."
  },
  {
    "id": "R03_HARD_11",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Oznaczasz drzewo iglaste. Ma płaskie, tępo zakończone igły z białymi paskami od spodu, a szyszki sterczą do góry. Co to za gatunek?",
    "options": [
      "jodła pospolita",
      "świerk pospolity",
      "jałowiec pospolity",
      "sosna limba"
    ],
    "answer": 0,
    "explanation": "W kluczu cechy: płaskie, tępo zakończone igły z białymi paskami od spodu oraz szyszki skierowane do góry prowadzą do jodły pospolitej."
  },
  {
    "id": "R03_HARD_12",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz typ boru lub lasu z rośliną albo cechą wskazaną w rozdziale.",
    "options": null,
    "left": [
      "bór sosnowy świeży",
      "bór sosnowy suchy",
      "bór sosnowy bagienny",
      "las świerkowy"
    ],
    "right": [
      "borówka czernica i wrzos",
      "warstwa porostów z chrobotkami",
      "borówka bagienna i bagno zwyczajne",
      "częste występowanie w górach"
    ],
    "answer": {
      "bór sosnowy świeży": "borówka czernica i wrzos",
      "bór sosnowy suchy": "warstwa porostów z chrobotkami",
      "bór sosnowy bagienny": "borówka bagienna i bagno zwyczajne",
      "las świerkowy": "częste występowanie w górach"
    },
    "explanation": "Rozdział opisuje różne bory i lasy iglaste: sosnowe świeże, suche, bagienne oraz świerkowe występujące często w górach.",
    "image": "r03_bor_sosnowy.jpg"
  }
];

const KID_PROMPTS = {
  "R03_RTK_01": "Jakie cechy ma większość roślin?",
  "R03_RTK_04": "Połącz tkankę roślinną z jej zadaniem.",
  "R03_MCH_03": "Połącz część mchu z jej zadaniem.",
  "R03_MCH_06": "Co znaczy, że mchy są pionierskie?",
  "R03_PSW_04": "Połącz grupę roślin z jej wyglądem.",
  "R03_NAG_01": "Co znaczy, że roślina jest nagonasienna?",
  "R03_NAG_05": "Połącz część sosny z opisem.",
  "R03_ZNA_01": "Jak nazywa się las iglasty?",
  "R03_ZNA_07": "Podziel przykłady na znaczenie w przyrodzie i dla człowieka."
};

const chapter = {
  id: "r03",
  number: 3,
  title: "Rośliny. Od mchów do roślin nagonasiennych",
  icon: "🌿",
  sectionOrder: [
    "Rośliny i tkanki roślinne",
    "Mchy",
    "Paprocie, skrzypy i widłaki",
    "Rośliny nagonasienne",
    "Znaczenie nagonasiennych"
  ],
  sectionIcons: {
    "Rośliny i tkanki roślinne": "🌱",
    "Mchy": "🟩",
    "Paprocie, skrzypy i widłaki": "🌿",
    "Rośliny nagonasienne": "🌲",
    "Znaczenie nagonasiennych": "🪵"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
