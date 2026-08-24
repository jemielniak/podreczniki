// Skróty sekcji (do identyfikatorów ćwiczeń):
//   HOR  = Układ hormonalny
//   ROZ  = Budowa układu rozrodczego
//   DOJR = Dojrzewanie i cykl menstruacyjny
//   PREN = Od zapłodnienia do narodzin
//   PROF = Profilaktyka układu rozrodczego
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R06_HOR_01",
    "section": "Układ hormonalny",
    "type": "single_choice",
    "prompt": "Który gruczoł dokrewny wydziela m.in. hormon wzrostu?",
    "options": [
      "Przysadka mózgowa",
      "Tarczyca",
      "Nadnercza",
      "Trzustka",
      "Jajniki",
      "Jądra"
    ],
    "answer": 0,
    "explanation": "Hormon wzrostu jest wydzielany m.in. przez przysadkę mózgową. Jego stężenie wzrasta w okresie dojrzewania.",
    "image": "r06_gruczoly_dokrewne.jpg"
  },
  {
    "id": "R06_HOR_02",
    "section": "Układ hormonalny",
    "type": "match",
    "prompt": "Połącz gruczoł z hormonem lub hormonami, które produkuje.",
    "options": null,
    "left": [
      "przysadka mózgowa",
      "tarczyca",
      "nadnercza",
      "trzustka",
      "jajniki"
    ],
    "right": [
      "hormon wzrostu",
      "tyroksyna",
      "adrenalina",
      "insulina i glukagon",
      "estrogeny i progesteron"
    ],
    "answer": {
      "przysadka mózgowa": "hormon wzrostu",
      "tarczyca": "tyroksyna",
      "nadnercza": "adrenalina",
      "trzustka": "insulina i glukagon",
      "jajniki": "estrogeny i progesteron"
    },
    "explanation": "Przysadka wydziela hormon wzrostu, tarczyca tyroksynę, nadnercza m.in. adrenalinę, trzustka insulinę i glukagon, a jajniki estrogeny i progesteron.",
    "image": "r06_gruczoly_dokrewne.jpg"
  },
  {
    "id": "R06_HOR_03",
    "section": "Układ hormonalny",
    "type": "true_false",
    "prompt": "Tyroksyna wpływa na tempo wykorzystywania energii oraz pomaga utrzymać prawidłowe tętno, ciśnienie krwi i temperaturę ciała.",
    "options": null,
    "answer": true,
    "explanation": "Tyroksyna wydzielana przez tarczycę reguluje tempo przemiany materii, w tym wykorzystanie energii, oraz wpływa na tętno, ciśnienie i temperaturę ciała."
  },
  {
    "id": "R06_HOR_04",
    "section": "Układ hormonalny",
    "type": "multi_select",
    "prompt": "Zaznacz zmiany, które uruchamia adrenalina w nagłej sytuacji zagrożenia.",
    "options": [
      "Wzrost tętna",
      "Wzrost ciśnienia krwi",
      "Rozszerzenie źrenic",
      "Obniżenie poziomu glukozy we krwi",
      "Utrzymanie ciąży",
      "Zmniejszenie napięcia mięśniowego"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Adrenalina uruchamia natychmiastową reakcję na zagrożenie: zwiększa tętno i ciśnienie krwi oraz rozszerza źrenice."
  },
  {
    "id": "R06_HOR_05",
    "section": "Układ hormonalny",
    "type": "scenario",
    "prompt": "Po dużym słodkim deserze poziom glukozy we krwi rośnie. Który hormon powinien wtedy zacząć działać, aby przywrócić równowagę?",
    "options": [
      "Insulina",
      "Glukagon",
      "Adrenalina",
      "Tyroksyna",
      "Testosteron",
      "Progesteron"
    ],
    "answer": 0,
    "explanation": "Po wzroście poziomu glukozy trzustka wydziela insulinę. Insulina obniża poziom glukozy, ułatwia jej przechodzenie z krwi do komórek i sprzyja magazynowaniu nadmiaru w postaci glikogenu.",
    "image": "r06_trzustka_glukoza.jpg"
  },
  {
    "id": "R06_HOR_06",
    "section": "Układ hormonalny",
    "type": "fill_in",
    "prompt": "Insulina __________ poziom glukozy we krwi, a glukagon go __________.",
    "options": null,
    "answer": [
      "obniża",
      "podwyższa"
    ],
    "altAnswers": [
      [
        "obniża",
        "zmniejsza"
      ],
      [
        "podwyższa",
        "zwiększa"
      ]
    ],
    "explanation": "Insulina i glukagon działają antagonistycznie: insulina obniża stężenie glukozy, a glukagon je podwyższa."
  },
  {
    "id": "R06_HOR_07",
    "section": "Układ hormonalny",
    "type": "sort",
    "prompt": "Przyporządkuj hormony do gruczołów, które je produkują.",
    "options": null,
    "items": [
      "hormon wzrostu",
      "tyroksyna",
      "adrenalina",
      "insulina",
      "glukagon"
    ],
    "categories": [
      "przysadka mózgowa",
      "tarczyca",
      "nadnercza",
      "trzustka"
    ],
    "answer": {
      "przysadka mózgowa": [
        "hormon wzrostu"
      ],
      "tarczyca": [
        "tyroksyna"
      ],
      "nadnercza": [
        "adrenalina"
      ],
      "trzustka": [
        "insulina",
        "glukagon"
      ]
    },
    "explanation": "Hormon wzrostu pochodzi z przysadki, tyroksyna z tarczycy, adrenalina z nadnerczy, a insulina i glukagon z trzustki."
  },
  {
    "id": "R06_HOR_08",
    "section": "Układ hormonalny",
    "type": "riddle",
    "prompt": "Dwa hormony trzustki działają przeciwstawnie na poziom glukozy we krwi. Jak się nazywają?",
    "options": null,
    "answer": "insulina i glukagon",
    "altAnswers": [
      "insulina i glukagon",
      "glukagon i insulina"
    ],
    "explanation": "Insulina obniża poziom glukozy we krwi, a glukagon go podwyższa, dlatego ich działanie jest antagonistyczne."
  },
  {
    "id": "R06_HOR_09",
    "section": "Układ hormonalny",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: hormon wzrostu, tyroksyna, adrenalina, glikogen.",
    "options": null,
    "answer": "glikogen",
    "explanation": "Hormon wzrostu, tyroksyna i adrenalina są hormonami, natomiast glikogen jest formą magazynowania glukozy m.in. w wątrobie i mięśniach."
  },
  {
    "id": "R06_HOR_10",
    "section": "Układ hormonalny",
    "type": "single_choice",
    "prompt": "Jaki jest główny objaw cukrzycy?",
    "options": [
      "Stale zbyt wysoki poziom glukozy we krwi",
      "Stale zbyt niski poziom glukozy we krwi",
      "Brak adrenaliny we krwi",
      "Nadmierna produkcja tyroksyny",
      "Brak testosteronu",
      "Stałe rozszerzenie źrenic"
    ],
    "answer": 0,
    "explanation": "W cukrzycy glukoza pozostaje we krwi i nie trafia prawidłowo do komórek, dlatego głównym objawem jest stale zbyt wysoki poziom glukozy we krwi.",
    "image": "r06_trzustka_glukoza.jpg"
  },
  {
    "id": "R06_HOR_11",
    "section": "Układ hormonalny",
    "type": "scenario",
    "prompt": "Po dłuższej przerwie od jedzenia poziom glukozy we krwi spada. Jaka reakcja pomaga go podwyższyć?",
    "options": [
      "Wydzielenie glukagonu i uwolnienie glukozy z zapasów w wątrobie",
      "Wydzielenie insuliny i magazynowanie glukozy",
      "Wydzielenie progesteronu",
      "Zmniejszenie wydzielania adrenaliny",
      "Wydzielenie estrogenów",
      "Zatrzymanie pracy trzustki"
    ],
    "answer": 0,
    "explanation": "Gdy poziom glukozy spada, trzustka wydziela glukagon. Hormon ten pobudza uwalnianie glukozy z zapasów, m.in. glikogenu w wątrobie.",
    "image": "r06_trzustka_glukoza.jpg"
  },
  {
    "id": "R06_ROZ_01",
    "section": "Budowa układu rozrodczego",
    "type": "single_choice",
    "prompt": "Jakie jest główne zadanie układu rozrodczego człowieka?",
    "options": [
      "Wytwarzanie komórek rozrodczych i umożliwienie rozmnażania",
      "Transport tlenu do tkanek",
      "Usuwanie mocznika z krwi",
      "Sterowanie ruchem mięśni",
      "Trawienie pokarmów",
      "Wytwarzanie krwinek"
    ],
    "answer": 0,
    "explanation": "Układ rozrodczy wytwarza gamety i umożliwia rozmnażanie, co zapewnia przetrwanie gatunku."
  },
  {
    "id": "R06_ROZ_02",
    "section": "Budowa układu rozrodczego",
    "type": "match",
    "prompt": "Połącz narząd męskiego układu rozrodczego z jego podstawową funkcją.",
    "options": null,
    "left": [
      "jądro",
      "najądrze",
      "gruczoł krokowy",
      "penis"
    ],
    "right": [
      "produkcja plemników i testosteronu",
      "przechowywanie plemników",
      "produkcja płynu wchodzącego w skład nasienia",
      "wprowadzenie plemników do układu rozrodczego kobiety"
    ],
    "answer": {
      "jądro": "produkcja plemników i testosteronu",
      "najądrze": "przechowywanie plemników",
      "gruczoł krokowy": "produkcja płynu wchodzącego w skład nasienia",
      "penis": "wprowadzenie plemników do układu rozrodczego kobiety"
    },
    "explanation": "Jądra produkują plemniki i testosteron, najądrza przechowują plemniki, prostata wytwarza składnik płynu nasiennego, a penis umożliwia wprowadzenie plemników do układu rozrodczego kobiety.",
    "image": "r06_uklad_rozrodczy_meski.jpg"
  },
  {
    "id": "R06_ROZ_03",
    "section": "Budowa układu rozrodczego",
    "type": "single_choice",
    "prompt": "W którym narządzie żeńskiego układu rozrodczego zwykle dochodzi do zapłodnienia?",
    "options": [
      "W jajowodzie",
      "W macicy",
      "W jajniku",
      "W pochwie",
      "W szyjce macicy",
      "W sromie"
    ],
    "answer": 0,
    "explanation": "Komórka jajowa przemieszcza się jajowodem do macicy i to w jajowodzie zwykle dochodzi do zapłodnienia.",
    "image": "r06_uklad_rozrodczy_zenski.jpg"
  },
  {
    "id": "R06_ROZ_04",
    "section": "Budowa układu rozrodczego",
    "type": "fill_in",
    "prompt": "Męskie komórki rozrodcze to __________, a żeńskie komórki rozrodcze to __________.",
    "options": null,
    "answer": [
      "plemniki",
      "komórki jajowe"
    ],
    "altAnswers": [
      [
        "plemniki",
        "plemnik"
      ],
      [
        "komórki jajowe",
        "komórka jajowa"
      ]
    ],
    "explanation": "Męskimi gametami są plemniki, a żeńskimi gametami są komórki jajowe.",
    "image": "r06_plemnik_i_komorka_jajowa.jpg"
  },
  {
    "id": "R06_ROZ_05",
    "section": "Budowa układu rozrodczego",
    "type": "true_false",
    "prompt": "Jajniki produkują komórki jajowe oraz żeńskie hormony płciowe.",
    "options": null,
    "answer": true,
    "explanation": "Jajniki wytwarzają komórki jajowe, a także estrogeny i progesteron."
  },
  {
    "id": "R06_ROZ_06",
    "section": "Budowa układu rozrodczego",
    "type": "multi_select",
    "prompt": "Zaznacz elementy należące do męskiego układu rozrodczego.",
    "options": [
      "jądro",
      "najądrze",
      "nasieniowód",
      "macica",
      "jajowód",
      "gruczoł krokowy"
    ],
    "answer": [
      0,
      1,
      2,
      5
    ],
    "explanation": "Do męskiego układu rozrodczego należą m.in. jądra, najądrza, nasieniowody i gruczoł krokowy. Macica i jajowody należą do układu żeńskiego.",
    "image": "r06_uklad_rozrodczy_meski.jpg"
  },
  {
    "id": "R06_ROZ_07",
    "section": "Budowa układu rozrodczego",
    "type": "riddle",
    "prompt": "W jakim narządzie męskiego układu rozrodczego są przechowywane plemniki?",
    "options": null,
    "answer": "najądrze",
    "altAnswers": [
      "najądrze",
      "najądrza"
    ],
    "explanation": "Najądrza służą do przechowywania plemników.",
    "image": "r06_uklad_rozrodczy_meski.jpg"
  },
  {
    "id": "R06_ROZ_08",
    "section": "Budowa układu rozrodczego",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: jajnik, jajowód, macica, najądrze.",
    "options": null,
    "answer": "najądrze",
    "explanation": "Jajnik, jajowód i macica należą do żeńskiego układu rozrodczego, a najądrze do męskiego."
  },
  {
    "id": "R06_ROZ_09",
    "section": "Budowa układu rozrodczego",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do męskiego lub żeńskiego układu rozrodczego.",
    "options": null,
    "items": [
      "plemnik",
      "testosteron",
      "jądro",
      "komórka jajowa",
      "estrogeny",
      "jajnik"
    ],
    "categories": [
      "męski",
      "żeński"
    ],
    "answer": {
      "męski": [
        "plemnik",
        "testosteron",
        "jądro"
      ],
      "żeński": [
        "komórka jajowa",
        "estrogeny",
        "jajnik"
      ]
    },
    "explanation": "Plemniki, testosteron i jądra są związane z męskim układem rozrodczym, natomiast komórki jajowe, estrogeny i jajniki z żeńskim."
  },
  {
    "id": "R06_ROZ_10",
    "section": "Budowa układu rozrodczego",
    "type": "scenario",
    "prompt": "Ktoś długo trzyma rozgrzany laptop na kolanach. Dlaczego nie jest to dobry nawyk z punktu widzenia męskiego układu rozrodczego?",
    "options": [
      "Może przegrzewać jądra",
      "Blokuje wydzielanie śliny",
      "Podwyższa temperaturę tarczycy",
      "Zatrzymuje pracę jajowodów",
      "Zmniejsza liczbę krwinek",
      "Powoduje owulację"
    ],
    "answer": 0,
    "explanation": "Jądra znajdują się w mosznie, która pomaga utrzymać w nich niższą temperaturę. Długie trzymanie laptopa na kolanach może je przegrzewać.",
    "image": "r06_uklad_rozrodczy_meski.jpg"
  },
  {
    "id": "R06_ROZ_11",
    "section": "Budowa układu rozrodczego",
    "type": "single_choice",
    "prompt": "Który narząd żeńskiego układu rozrodczego jest elastycznym umięśnionym kanałem, którym odpływa krew menstruacyjna i przez który podczas porodu dziecko wydostaje się na zewnątrz?",
    "options": [
      "Pochwa",
      "Jajnik",
      "Jajowód",
      "Macica",
      "Szyjka macicy",
      "Srom"
    ],
    "answer": 0,
    "explanation": "Pochwa jest elastycznym umięśnionym kanałem. Odpływa nią krew menstruacyjna, a podczas porodu dziecko wydostaje się nią na zewnątrz.",
    "image": "r06_uklad_rozrodczy_zenski.jpg"
  },
  {
    "id": "R06_DOJR_01",
    "section": "Dojrzewanie i cykl menstruacyjny",
    "type": "single_choice",
    "prompt": "W jakim wieku zwykle rozpoczyna się dojrzewanie człowieka?",
    "options": [
      "Między 10. a 14. rokiem życia",
      "Między 2. a 5. rokiem życia",
      "Między 6. a 8. rokiem życia",
      "Między 16. a 20. rokiem życia",
      "Dopiero po 21. roku życia",
      "Zawsze dokładnie w 12. roku życia"
    ],
    "answer": 0,
    "explanation": "Dojrzewanie zwykle zaczyna się między 10. a 14. rokiem życia i trwa kilka lat. Sterują nim hormony.",
    "image": "r06_dojrzewanie_nastolatkow.jpg"
  },
  {
    "id": "R06_DOJR_02",
    "section": "Dojrzewanie i cykl menstruacyjny",
    "type": "multi_select",
    "prompt": "Zaznacz zmiany fizyczne typowe dla dojrzewania chłopców.",
    "options": [
      "obniżenie głosu",
      "powiększenie jąder i penisa",
      "zarost na twarzy",
      "produkcja plemników",
      "rozwój piersi",
      "menstruacja"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "U chłopców w dojrzewaniu pojawiają się m.in. mutacja głosu, wzrost narządów płciowych, zarost oraz produkcja plemników. Rozwój piersi i menstruacja dotyczą dojrzewania dziewcząt.",
    "image": "r06_dojrzewanie_nastolatkow.jpg"
  },
  {
    "id": "R06_DOJR_03",
    "section": "Dojrzewanie i cykl menstruacyjny",
    "type": "multi_select",
    "prompt": "Zaznacz zmiany fizyczne typowe dla dojrzewania dziewcząt.",
    "options": [
      "rozwój piersi",
      "szersze biodra",
      "dojrzewanie komórek jajowych",
      "menstruacja",
      "zarost na twarzy",
      "polucje"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "U dziewcząt rozwijają się piersi, zmienia się sylwetka m.in. przez szersze biodra, dojrzewają komórki jajowe i pojawia się menstruacja.",
    "image": "r06_dojrzewanie_nastolatkow.jpg"
  },
  {
    "id": "R06_DOJR_04",
    "section": "Dojrzewanie i cykl menstruacyjny",
    "type": "match",
    "prompt": "Połącz rodzaj zmiany w okresie dojrzewania z przykładem.",
    "options": null,
    "left": [
      "społeczna",
      "psychiczna",
      "etyczna"
    ],
    "right": [
      "potrzeba kontaktu i przynależności do grupy",
      "wahania nastroju i odkrywanie kim się jest",
      "budowanie systemu wartości"
    ],
    "answer": {
      "społeczna": "potrzeba kontaktu i przynależności do grupy",
      "psychiczna": "wahania nastroju i odkrywanie kim się jest",
      "etyczna": "budowanie systemu wartości"
    },
    "explanation": "Dojrzewanie obejmuje nie tylko ciało. Zmieniają się relacje z innymi, emocje i obraz siebie, a także kształtuje się system wartości."
  },
  {
    "id": "R06_DOJR_05",
    "section": "Dojrzewanie i cykl menstruacyjny",
    "type": "sequence",
    "prompt": "Ułóż fazy cyklu menstruacyjnego w prawidłowej kolejności.",
    "options": null,
    "items": [
      "owulacja",
      "faza poowulacyjna",
      "menstruacja",
      "faza pęcherzykowa"
    ],
    "answer": [
      "menstruacja",
      "faza pęcherzykowa",
      "owulacja",
      "faza poowulacyjna"
    ],
    "explanation": "Cykl rozpoczyna menstruacja, po niej następuje faza pęcherzykowa, następnie owulacja, a potem faza poowulacyjna."
  },
  {
    "id": "R06_DOJR_06",
    "section": "Dojrzewanie i cykl menstruacyjny",
    "type": "fill_in",
    "prompt": "Cykl menstruacyjny trwa od __________ dnia krwawienia do dnia poprzedzającego kolejne krwawienie i przeciętnie ma __________ dni.",
    "options": null,
    "answer": [
      "pierwszego",
      "28"
    ],
    "altAnswers": [
      [
        "pierwszego",
        "1",
        "1."
      ],
      [
        "28",
        "28 dni"
      ]
    ],
    "explanation": "Początkiem cyklu jest pierwszy dzień krwawienia. Przeciętny cykl ma 28 dni.",
    "image": "r06_owulacja_uklad_zenski.jpg"
  },
  {
    "id": "R06_DOJR_07",
    "section": "Dojrzewanie i cykl menstruacyjny",
    "type": "true_false",
    "prompt": "Owulacja to uwolnienie dojrzałej komórki jajowej z jajnika.",
    "options": null,
    "answer": true,
    "explanation": "Owulacja polega na uwolnieniu dojrzałej komórki jajowej z jajnika. W typowym 28-dniowym cyklu przypada mniej więcej w jego połowie.",
    "image": "r06_owulacja_uklad_zenski.jpg"
  },
  {
    "id": "R06_DOJR_08",
    "section": "Dojrzewanie i cykl menstruacyjny",
    "type": "scenario",
    "prompt": "Po owulacji nie dochodzi do zapłodnienia. Co dzieje się dalej pod koniec cyklu?",
    "options": [
      "Poziom hormonów spada i rozpoczyna się krwawienie",
      "Poziom progesteronu stale rośnie bez końca",
      "Komórka jajowa wraca do jajnika",
      "Rozpoczyna się produkcja plemników",
      "Błona śluzowa macicy nie zmienia się",
      "Natychmiast zaczyna się ciąża"
    ],
    "answer": 0,
    "explanation": "Jeśli nie dochodzi do zapłodnienia, poziom hormonów spada. Pogrubiona błona śluzowa macicy staje się niepotrzebna, złuszcza się i pojawia się menstruacja."
  },
  {
    "id": "R06_DOJR_09",
    "section": "Dojrzewanie i cykl menstruacyjny",
    "type": "riddle",
    "prompt": "Jak nazywa się mimowolny wytrysk nasienia podczas snu, który może pojawić się u chłopców w okresie dojrzewania?",
    "options": null,
    "answer": "polucja",
    "altAnswers": [
      "polucja",
      "polucje",
      "nocny wytrysk"
    ],
    "explanation": "Polucje to mimowolne wytryski nasienia podczas snu, możliwe w okresie dojrzewania."
  },
  {
    "id": "R06_DOJR_10",
    "section": "Dojrzewanie i cykl menstruacyjny",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych zmian społecznych w dojrzewaniu: potrzeba kontaktu z rówieśnikami, potrzeba wsparcia emocjonalnego, potrzeba przynależności do grupy, powiększenie jąder.",
    "options": null,
    "answer": "powiększenie jąder",
    "explanation": "Pierwsze trzy przykłady dotyczą sfery społecznej. Powiększenie jąder jest zmianą fizyczną."
  },
  {
    "id": "R06_DOJR_11",
    "section": "Dojrzewanie i cykl menstruacyjny",
    "type": "single_choice",
    "prompt": "Które wydarzenie w cyklu menstruacyjnym jest bezpośrednio związane z uwolnieniem komórki jajowej zdolnej do zapłodnienia?",
    "options": [
      "Owulacja",
      "Menstruacja",
      "Faza poowulacyjna",
      "Odbudowa błony śluzowej macicy",
      "Spadek poziomu hormonów",
      "Polucja"
    ],
    "answer": 0,
    "explanation": "Podczas owulacji dojrzała komórka jajowa zostaje uwolniona z jajnika i może zostać zapłodniona.",
    "image": "r06_owulacja_uklad_zenski.jpg"
  },
  {
    "id": "R06_PREN_01",
    "section": "Od zapłodnienia do narodzin",
    "type": "single_choice",
    "prompt": "Co powstaje bezpośrednio w wyniku połączenia komórki jajowej i plemnika?",
    "options": [
      "Zygota",
      "Zarodek",
      "Płód",
      "Łożysko",
      "Pępowina",
      "Pęcherzyk jajnikowy"
    ],
    "answer": 0,
    "explanation": "Zapłodnienie to połączenie komórki jajowej i plemnika. W jego wyniku powstaje zygota, pierwsza komórka nowego organizmu.",
    "image": "r06_zaplodnienie.jpg"
  },
  {
    "id": "R06_PREN_02",
    "section": "Od zapłodnienia do narodzin",
    "type": "sequence",
    "prompt": "Ułóż etapy od zapłodnienia do rozwoju płodu w kolejności.",
    "options": null,
    "items": [
      "zarodek",
      "zapłodnienie",
      "płód",
      "zygota"
    ],
    "answer": [
      "zapłodnienie",
      "zygota",
      "zarodek",
      "płód"
    ],
    "explanation": "Najpierw dochodzi do zapłodnienia i powstaje zygota. Po zagnieżdżeniu rozwija się zarodek, a od 9. tygodnia mówi się o płodzie.",
    "image": "r06_zaplodnienie.jpg"
  },
  {
    "id": "R06_PREN_03",
    "section": "Od zapłodnienia do narodzin",
    "type": "match",
    "prompt": "Połącz pojęcie z jego rolą lub etapem rozwoju.",
    "options": null,
    "left": [
      "zygota",
      "zarodek",
      "płód",
      "łożysko",
      "pępowina"
    ],
    "right": [
      "pierwsza komórka nowego organizmu",
      "etap w którym powstają zawiązki najważniejszych narządów",
      "etap od 9. tygodnia do porodu",
      "narząd wymiany między organizmem matki a dziecka",
      "przewód łączący dziecko z łożyskiem"
    ],
    "answer": {
      "zygota": "pierwsza komórka nowego organizmu",
      "zarodek": "etap w którym powstają zawiązki najważniejszych narządów",
      "płód": "etap od 9. tygodnia do porodu",
      "łożysko": "narząd wymiany między organizmem matki a dziecka",
      "pępowina": "przewód łączący dziecko z łożyskiem"
    },
    "explanation": "Zygota jest pierwszą komórką organizmu, zarodek tworzy zawiązki narządów, od 9. tygodnia rozwija się płód, a łożysko i pępowina łączą jego funkcjonowanie z organizmem matki.",
    "image": "r06_plod_lozysko_pepowina.jpg"
  },
  {
    "id": "R06_PREN_04",
    "section": "Od zapłodnienia do narodzin",
    "type": "true_false",
    "prompt": "Do zapłodnienia u człowieka zwykle dochodzi w jajowodzie.",
    "options": null,
    "answer": true,
    "explanation": "Komórka jajowa przemieszcza się jajowodem w stronę macicy i zwykle właśnie w jajowodzie dochodzi do zapłodnienia.",
    "image": "r06_zaplodnienie.jpg"
  },
  {
    "id": "R06_PREN_05",
    "section": "Od zapłodnienia do narodzin",
    "type": "fill_in",
    "prompt": "Okres zarodkowy trwa od __________ do __________ tygodnia, a od 9. tygodnia rozwijający się organizm jest nazywany płodem.",
    "options": null,
    "answer": [
      "2.",
      "8."
    ],
    "altAnswers": [
      [
        "2.",
        "2",
        "drugiego"
      ],
      [
        "8.",
        "8",
        "ósmego"
      ]
    ],
    "explanation": "Okres zarodkowy obejmuje 2.-8. tydzień. Od 9. tygodnia do porodu trwa okres płodowy."
  },
  {
    "id": "R06_PREN_06",
    "section": "Od zapłodnienia do narodzin",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje łożyska.",
    "options": [
      "dostarczanie substancji odżywczych",
      "wymiana gazowa",
      "usuwanie zbędnych produktów przemiany materii",
      "ochrona przed patogenami",
      "produkcja plemników",
      "wywoływanie menstruacji"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Łożysko umożliwia odżywianie rozwijającego się dziecka, wymianę gazową i usuwanie produktów przemiany materii, a także pełni funkcję ochronną.",
    "image": "r06_plod_lozysko_pepowina.jpg"
  },
  {
    "id": "R06_PREN_07",
    "section": "Od zapłodnienia do narodzin",
    "type": "scenario",
    "prompt": "Płód pod koniec ciąży połyka płyn owodniowy i wykonuje ruchy klatką piersiową. Czemu służą te czynności?",
    "options": [
      "Ćwiczeniu układu pokarmowego i mięśni oddechowych",
      "Produkcji komórek jajowych",
      "Obniżaniu poziomu glukozy",
      "Tworzeniu łożyska",
      "Wytwarzaniu testosteronu",
      "Rozpoczęciu menstruacji"
    ],
    "answer": 0,
    "explanation": "Połykanie płynu owodniowego ćwiczy układ pokarmowy, a ruchy klatką piersiową przygotowują mięśnie oddechowe do życia po urodzeniu."
  },
  {
    "id": "R06_PREN_08",
    "section": "Od zapłodnienia do narodzin",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do etapów rozwoju przedurodzeniowego: zygota, zarodek, płód, owulacja.",
    "options": null,
    "answer": "owulacja",
    "explanation": "Zygota, zarodek i płód to kolejne etapy rozwoju przedurodzeniowego. Owulacja jest uwolnieniem komórki jajowej z jajnika."
  },
  {
    "id": "R06_PREN_09",
    "section": "Od zapłodnienia do narodzin",
    "type": "riddle",
    "prompt": "Jak nazywa się przewód łączący rozwijające się dziecko z łożyskiem?",
    "options": null,
    "answer": "pępowina",
    "altAnswers": [
      "pępowina",
      "pępowiną"
    ],
    "explanation": "Dziecko jest połączone z łożyskiem za pomocą pępowiny, wewnątrz której biegną naczynia krwionośne.",
    "image": "r06_plod_lozysko_pepowina.jpg"
  },
  {
    "id": "R06_PREN_10",
    "section": "Od zapłodnienia do narodzin",
    "type": "single_choice",
    "prompt": "Które stwierdzenie o alkoholu w ciąży jest prawidłowe?",
    "options": [
      "Nie istnieje bezpieczna dawka alkoholu w ciąży",
      "Mała ilość alkoholu jest zawsze bezpieczna",
      "Alkohol nie przechodzi przez łożysko",
      "Alkohol szkodzi tylko pod koniec ciąży",
      "Alkohol nie wpływa na mózg dziecka",
      "Alkohol jest zatrzymywany przez pępowinę"
    ],
    "answer": 0,
    "explanation": "Alkohol łatwo przenika przez łożysko. Nie istnieje bezpieczna dawka alkoholu w ciąży, a nawet niewielka ilość może spowodować nieodwracalne szkody, w tym FAS.",
    "image": "r06_ciaza_bez_uzywek.jpg"
  },
  {
    "id": "R06_PREN_11",
    "section": "Od zapłodnienia do narodzin",
    "type": "scenario",
    "prompt": "Kobieta w ciąży przebywa w dymie tytoniowym. Jaki skutek dla płodu powoduje połączenie działania nikotyny i tlenku węgla?",
    "options": [
      "Przewlekłe niedotlenienie",
      "Nadmierne dotlenienie",
      "Zwiększenie liczby komórek jajowych",
      "Przyspieszenie dojrzewania płuc bez ryzyka",
      "Obniżenie temperatury ciała",
      "Zatrzymanie wzrostu łożyska bez wpływu na tlen"
    ],
    "answer": 0,
    "explanation": "Nikotyna obkurcza naczynia łożyska, a tlenek węgla utrudnia działanie hemoglobiny. W efekcie płód jest przewlekle niedotleniony.",
    "image": "r06_ciaza_bez_uzywek.jpg"
  },
  {
    "id": "R06_PROF_01",
    "section": "Profilaktyka układu rozrodczego",
    "type": "single_choice",
    "prompt": "Jak leczy się chlamydiozę?",
    "options": [
      "Antybiotykami",
      "Insuliną",
      "Tyroksyną",
      "Progesteronem",
      "Szczepionką przeciw HPV",
      "Wyłącznie odpoczynkiem"
    ],
    "answer": 0,
    "explanation": "Chlamydioza jest chorobą bakteryjną i leczy się ją antybiotykami. Wiele zakażeń może przebiegać bezobjawowo.",
    "image": "r06_bakterie_choroby.jpg"
  },
  {
    "id": "R06_PROF_02",
    "section": "Profilaktyka układu rozrodczego",
    "type": "match",
    "prompt": "Połącz metodę profilaktyki lub badania z chorobą, której dotyczy.",
    "options": null,
    "left": [
      "szczepienie przeciw HPV",
      "stosowanie prezerwatywy",
      "regularne wizyty u urologa",
      "mammografia"
    ],
    "right": [
      "rak szyjki macicy",
      "zakażenie wirusem HIV",
      "rak prostaty",
      "rak piersi"
    ],
    "answer": {
      "szczepienie przeciw HPV": "rak szyjki macicy",
      "stosowanie prezerwatywy": "zakażenie wirusem HIV",
      "regularne wizyty u urologa": "rak prostaty",
      "mammografia": "rak piersi"
    },
    "explanation": "Szczepienie przeciw HPV zmniejsza ryzyko raka szyjki macicy, prezerwatywa ogranicza ryzyko zakażeń przenoszonych drogą płciową, urolog wspiera profilaktykę raka prostaty, a mammografia służy wczesnemu wykrywaniu raka piersi.",
    "image": "r06_badania_profilaktyczne.jpg"
  },
  {
    "id": "R06_PROF_03",
    "section": "Profilaktyka układu rozrodczego",
    "type": "true_false",
    "prompt": "Chlamydioza może przebiegać bezobjawowo, zwłaszcza u kobiet, co utrudnia jej rozpoznanie.",
    "options": null,
    "answer": true,
    "explanation": "Wiele zakażeń chlamydią przebiega bezobjawowo, szczególnie u kobiet, dlatego choroba może być trudna do wykrycia bez badań."
  },
  {
    "id": "R06_PROF_04",
    "section": "Profilaktyka układu rozrodczego",
    "type": "multi_select",
    "prompt": "Zaznacz zasady zmniejszające ryzyko chorób przenoszonych drogą płciową.",
    "options": [
      "stosowanie prezerwatywy",
      "unikanie przypadkowych kontaktów seksualnych",
      "regularne badania kontrolne",
      "szczepienie przeciw każdej chorobie bakteryjnej",
      "rezygnacja z higieny intymnej",
      "używanie jak największej ilości detergentów"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Do podstawowych zasad profilaktyki należą prezerwatywy, unikanie przypadkowych kontaktów seksualnych oraz regularne badania kontrolne. Nie ma szczepionek przeciw chlamydiozie, rzeżączce i kile."
  },
  {
    "id": "R06_PROF_05",
    "section": "Profilaktyka układu rozrodczego",
    "type": "single_choice",
    "prompt": "Która nieleczona choroba bakteryjna może w późniejszych etapach uszkodzić serce, nerwy i mózg?",
    "options": [
      "Kiła",
      "Chlamydioza",
      "Cukrzyca typu 1",
      "FAS",
      "Rak piersi",
      "Cukrzyca typu 2"
    ],
    "answer": 0,
    "explanation": "Nieleczona kiła może w późniejszych stadiach powodować poważne uszkodzenia serca, nerwów i mózgu.",
    "image": "r06_bakterie_choroby.jpg"
  },
  {
    "id": "R06_PROF_06",
    "section": "Profilaktyka układu rozrodczego",
    "type": "fill_in",
    "prompt": "Badanie __________ pomaga wcześnie wykrywać zmiany w komórkach szyjki macicy, a badanie poziomu __________ we krwi jest stosowane w profilaktyce raka prostaty.",
    "options": null,
    "answer": [
      "cytologiczne",
      "PSA"
    ],
    "altAnswers": [
      [
        "cytologiczne",
        "cytologia"
      ],
      [
        "PSA",
        "psa"
      ]
    ],
    "explanation": "Cytologia służy wczesnemu wykrywaniu zmian w szyjce macicy. W profilaktyce raka prostaty stosuje się m.in. badanie poziomu PSA we krwi.",
    "image": "r06_badania_profilaktyczne.jpg"
  },
  {
    "id": "R06_PROF_07",
    "section": "Profilaktyka układu rozrodczego",
    "type": "scenario",
    "prompt": "Kobieta podczas samobadania wyczuwa nowy guzek lub zgrubienie piersi. Jakie działanie jest zgodne z zasadami profilaktyki?",
    "options": [
      "Skonsultować zmianę z lekarzem",
      "Poczekać kilka lat bez obserwacji",
      "Zwiększyć ilość detergentów do higieny",
      "Przyjmować insulinę",
      "Unikać wszystkich badań",
      "Uznać że młody wiek wyklucza chorobę"
    ],
    "answer": 0,
    "explanation": "Samobadanie pomaga poznać własne ciało i zauważać zmiany, takie jak guzki lub zgrubienia. Niepokojącą zmianę należy skonsultować z lekarzem.",
    "image": "r06_badania_profilaktyczne.jpg"
  },
  {
    "id": "R06_PROF_08",
    "section": "Profilaktyka układu rozrodczego",
    "type": "riddle",
    "prompt": "Jaka choroba bakteryjna może zaczynać się od bezbolesnego twardego owrzodzenia w miejscu zakażenia i jest leczona antybiotykiem, głównie penicyliną?",
    "options": null,
    "answer": "kiła",
    "altAnswers": [
      "kiła",
      "kila"
    ],
    "explanation": "Tak może przebiegać kiła. Zniknięcie pierwszego owrzodzenia samoistnie nie oznacza wyleczenia.",
    "image": "r06_bakterie_choroby.jpg"
  },
  {
    "id": "R06_PROF_09",
    "section": "Profilaktyka układu rozrodczego",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do metod wczesnego wykrywania nowotworów układu rozrodczego: mammografia, cytologia, badanie poziomu PSA, insulina.",
    "options": null,
    "answer": "insulina",
    "explanation": "Mammografia, cytologia i oznaczenie PSA są związane z profilaktyką nowotworów. Insulina reguluje poziom glukozy we krwi."
  },
  {
    "id": "R06_PROF_10",
    "section": "Profilaktyka układu rozrodczego",
    "type": "single_choice",
    "prompt": "Kiedy najlepiej wykonać szczepienie przeciw HPV?",
    "options": [
      "Przed rozpoczęciem współżycia",
      "Dopiero po 50. roku życia",
      "Wyłącznie w ciąży",
      "Dopiero po rozpoznaniu raka szyjki macicy",
      "Tylko po wystąpieniu objawów zakażenia",
      "Wyłącznie po menopauzie"
    ],
    "answer": 0,
    "explanation": "Szczepienie przeciw HPV działa profilaktycznie i najlepiej wykonać je przed rozpoczęciem współżycia.",
    "image": "r06_badania_profilaktyczne.jpg"
  },
  {
    "id": "R06_PROF_11",
    "section": "Profilaktyka układu rozrodczego",
    "type": "scenario",
    "prompt": "Młoda osoba uważa, że regularne samobadanie piersi nie ma sensu, bo nic jej nie dolega. Który argument najlepiej odpowiada zasadom profilaktyki?",
    "options": [
      "Regularne samobadanie pomaga poznać własne ciało i wcześniej zauważyć niepokojące zmiany",
      "Badanie ma sens tylko po pojawieniu się bólu",
      "Nowotwór zawsze daje natychmiastowe objawy",
      "Młody wiek całkowicie wyklucza zmiany",
      "Samobadanie zastępuje wszystkie wizyty lekarskie",
      "Samobadanie służy wyłącznie ocenie poziomu hormonów"
    ],
    "answer": 0,
    "explanation": "Profilaktyka polega m.in. na regularnej obserwacji własnego ciała. Dzięki temu łatwiej zauważyć nowe guzki, zgrubienia lub inne niepokojące zmiany.",
    "image": "r06_badania_profilaktyczne.jpg"
  },
  {
    "id": "R06_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaki jest typowy poziom glukozy we krwi zdrowego człowieka rano przed posiłkiem?",
    "options": [
      "Około 70-100 mg/dl",
      "Około 10-20 mg/dl",
      "Około 30-50 mg/dl",
      "Około 120-160 mg/dl",
      "Około 200-250 mg/dl",
      "Zawsze dokładnie 100 mg/dl"
    ],
    "answer": 0,
    "explanation": "Prawidłowy poziom glukozy rano przed posiłkiem wynosi około 70-100 mg/dl.",
    "image": "r06_trzustka_glukoza.jpg"
  },
  {
    "id": "R06_HARD_02",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Hormon wzrostu jest najintensywniej produkowany w początkowych etapach snu, jego stężenie wzrasta w okresie dojrzewania i maleje z wiekiem.",
    "options": null,
    "answer": true,
    "explanation": "Hormon wzrostu jest najintensywniej produkowany w początkowych etapach snu. Jego stężenie rośnie w okresie dojrzewania i maleje z wiekiem."
  },
  {
    "id": "R06_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Proces tworzenia plemników w jądrach trwa około __________ dni, a komórka jajowa po owulacji żyje krótko, około __________ godzin.",
    "options": null,
    "answer": [
      "70",
      "12-24"
    ],
    "altAnswers": [
      [
        "70",
        "około 70"
      ],
      [
        "12-24",
        "12–24",
        "od 12 do 24"
      ]
    ],
    "explanation": "Wytworzenie plemników trwa około 70 dni. Komórka jajowa żyje po owulacji około 12-24 godzin.",
    "image": "r06_plemnik_i_komorka_jajowa.jpg"
  },
  {
    "id": "R06_HARD_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki, które sprzyjają dobrej ilości i jakości plemników.",
    "options": [
      "zdrowa dieta",
      "ruch i sport",
      "odpowiednia ilość snu",
      "nieprzegrzewanie jąder",
      "prawidłowa masa ciała",
      "papierosy i alkohol"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Sprzyjają im zdrowa dieta, aktywność, sen, unikanie przegrzewania i prawidłowa masa ciała. Papierosy i alkohol należą do czynników szkodliwych."
  },
  {
    "id": "R06_HARD_05",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jak długo plemniki mogą przeżyć w drogach rodnych kobiety?",
    "options": [
      "5-7 dni",
      "12-24 godziny",
      "Około 70 dni",
      "Około 30 tygodni",
      "Około 40 tygodni",
      "Tylko kilka minut"
    ],
    "answer": 0,
    "explanation": "Plemniki mogą przeżyć w żeńskim układzie rozrodczym 5-7 dni. To m.in. dlatego dni płodne trwają dłużej niż sama owulacja.",
    "image": "r06_plemnik_i_komorka_jajowa.jpg"
  },
  {
    "id": "R06_HARD_06",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W 28-dniowym cyklu owulacja przypada około 14. dnia. Dlaczego dni płodne nie ograniczają się do jednego dnia owulacji?",
    "options": [
      "Plemniki mogą przeżyć 5-7 dni, a komórka jajowa około 12-24 godzin",
      "Komórka jajowa żyje 70 dni",
      "Owulacja trwa przez cały cykl",
      "Plemniki żyją tylko kilka minut",
      "Menstruacja trwa zawsze 14 dni",
      "Progesteron zatrzymuje wszystkie plemniki"
    ],
    "answer": 0,
    "explanation": "Komórka jajowa jest zdolna do zapłodnienia krótko po owulacji, lecz plemniki mogą przetrwać 5-7 dni. Dlatego możliwość zapłodnienia obejmuje kilka dni wokół owulacji.",
    "image": "r06_owulacja_uklad_zenski.jpg"
  },
  {
    "id": "R06_HARD_07",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w kolejności od zapłodnienia do początku okresu płodowego.",
    "options": null,
    "items": [
      "zagnieżdżenie wielokomórkowego pęcherzyka w błonie śluzowej macicy",
      "powstanie zygoty",
      "rozpoczęcie okresu płodowego",
      "szybkie podziały zygoty podczas wędrówki jajowodem"
    ],
    "answer": [
      "powstanie zygoty",
      "szybkie podziały zygoty podczas wędrówki jajowodem",
      "zagnieżdżenie wielokomórkowego pęcherzyka w błonie śluzowej macicy",
      "rozpoczęcie okresu płodowego"
    ],
    "explanation": "Po zapłodnieniu powstaje zygota, która dzieli się podczas wędrówki jajowodem. Po zagnieżdżeniu rozpoczyna się okres zarodkowy, a od 9. tygodnia okres płodowy."
  },
  {
    "id": "R06_HARD_08",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Ciąża u ludzi trwa około __________ tygodni, a pępowina ma zwykle około __________ cm długości.",
    "options": null,
    "answer": [
      "40",
      "50-60"
    ],
    "altAnswers": [
      [
        "40",
        "około 40"
      ],
      [
        "50-60",
        "50–60",
        "od 50 do 60"
      ]
    ],
    "explanation": "Ciąża u ludzi trwa około 40 tygodni, a pępowina ma zwykle około 50-60 cm długości.",
    "image": "r06_plod_lozysko_pepowina.jpg"
  },
  {
    "id": "R06_HARD_09",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz etap rozwoju przedurodzeniowego z jego zakresem czasu.",
    "options": null,
    "left": [
      "okres zygoty",
      "okres zarodkowy",
      "okres płodowy"
    ],
    "right": [
      "1.-4. dzień",
      "2.-8. tydzień",
      "od 9. tygodnia do porodu"
    ],
    "answer": {
      "okres zygoty": "1.-4. dzień",
      "okres zarodkowy": "2.-8. tydzień",
      "okres płodowy": "od 9. tygodnia do porodu"
    },
    "explanation": "Okres zygoty obejmuje pierwsze dni, okres zarodkowy 2.-8. tydzień, a okres płodowy zaczyna się w 9. tygodniu i trwa do porodu."
  },
  {
    "id": "R06_HARD_10",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Które zestawienie prawidłowo wyjaśnia niedotlenienie płodu przy paleniu tytoniu w ciąży?",
    "options": [
      "Nikotyna obkurcza naczynia łożyska, a tlenek węgla blokuje działanie hemoglobiny",
      "Nikotyna rozszerza naczynia łożyska, a tlenek węgla zwiększa transport tlenu",
      "Nikotyna zwiększa produkcję hemoglobiny, a tlenek węgla nie przenika do krwi",
      "Obie substancje działają wyłącznie na skórę płodu",
      "Tylko nikotyna ma znaczenie, a tlenek węgla jest obojętny",
      "Tlenek węgla poprawia wymianę gazową w łożysku"
    ],
    "answer": 0,
    "explanation": "Nikotyna zwęża naczynia krwionośne w łożysku, ograniczając dopływ krwi, a tlenek węgla blokuje hemoglobinę transportującą tlen.",
    "image": "r06_ciaza_bez_uzywek.jpg"
  },
  {
    "id": "R06_HARD_11",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz skutki płodowego zespołu alkoholowego FAS.",
    "options": [
      "niższy wzrost i masa ciała",
      "wady serca i innych narządów",
      "problemy z pamięcią i koncentracją",
      "trudności w kontrolowaniu emocji i relacjach",
      "przyspieszone dojrzewanie płuc",
      "zwiększona odporność na alkohol"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "FAS może powodować trwałe problemy fizyczne, w tym niższy wzrost i masę oraz wady narządów, a także problemy z pamięcią, koncentracją, emocjami i relacjami.",
    "image": "r06_ciaza_bez_uzywek.jpg"
  },
  {
    "id": "R06_HARD_12",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jak często wykonuje się mammografię po 40. roku życia, jeśli lekarz nie zaleci inaczej z powodu czynników ryzyka?",
    "options": [
      "Co 2 lata",
      "Co miesiąc",
      "Co 3 miesiące",
      "Co 6 miesięcy",
      "Co 5 lat",
      "Tylko raz w życiu"
    ],
    "answer": 0,
    "explanation": "Po 40. roku życia mammografię wykonuje się co 2 lata, a przy czynnikach ryzyka termin i częstotliwość badań określa lekarz.",
    "image": "r06_badania_profilaktyczne.jpg"
  },
  {
    "id": "R06_HARD_13",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jak często wykonuje się cytologię przy prawidłowym poprzednim wyniku i braku grupy ryzyka?",
    "options": [
      "Co najmniej co 3 lata",
      "Co miesiąc",
      "Co 2 tygodnie",
      "Co 6 miesięcy",
      "Raz na 10 lat",
      "Tylko po wystąpieniu objawów"
    ],
    "answer": 0,
    "explanation": "Cytologię wykonuje się co najmniej co 3 lata, jeśli poprzedni wynik był prawidłowy i osoba nie jest w grupie ryzyka.",
    "image": "r06_badania_profilaktyczne.jpg"
  },
  {
    "id": "R06_HARD_14",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jak często wykonuje się badanie urologiczne po 50. roku życia w profilaktyce raka prostaty, jeśli lekarz nie zaleci inaczej?",
    "options": [
      "Co 2 lata",
      "Co miesiąc",
      "Co 3 miesiące",
      "Co 6 miesięcy",
      "Co 10 lat",
      "Tylko po pojawieniu się bólu"
    ],
    "answer": 0,
    "explanation": "Po 50. roku życia badanie urologiczne wykonuje się co 2 lata, a przy czynnikach ryzyka częstotliwość może ustalić lekarz.",
    "image": "r06_badania_profilaktyczne.jpg"
  },
  {
    "id": "R06_HARD_15",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Po owulacji błona śluzowa macicy staje się gruba i dobrze ukrwiona, gotowa na przyjęcie zarodka. Który hormon odpowiada za ten etap?",
    "options": [
      "Progesteron",
      "Insulina",
      "Glukagon",
      "Adrenalina",
      "Tyroksyna",
      "Hormon wzrostu"
    ],
    "answer": 0,
    "explanation": "Po owulacji jajnik zaczyna produkować progesteron. Hormon ten sprawia, że błona śluzowa macicy jest gruba i dobrze ukrwiona, co przygotowuje ją na przyjęcie zarodka.",
    "image": "r06_owulacja_uklad_zenski.jpg"
  }
];

const chapter = {
  "id": "r06",
  "number": 6,
  "title": "Układ hormonalny i układ rozrodczy",
  "icon": "🧬",
  "sectionOrder": [
    "Układ hormonalny",
    "Budowa układu rozrodczego",
    "Dojrzewanie i cykl menstruacyjny",
    "Od zapłodnienia do narodzin",
    "Profilaktyka układu rozrodczego"
  ],
  "sectionIcons": {
    "Układ hormonalny": "🧪",
    "Budowa układu rozrodczego": "🧬",
    "Dojrzewanie i cykl menstruacyjny": "🌱",
    "Od zapłodnienia do narodzin": "👶",
    "Profilaktyka układu rozrodczego": "🩺"
  },
  "exercises": ALL_EXERCISES
};

export default chapter;
