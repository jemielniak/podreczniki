// Skróty sekcji (do identyfikatorów ćwiczeń):
//   EKO = Budowa ekosystemu
//   POP = Populacja
//   BIO = Różnorodność biologiczna
//   ZAS = Zasoby przyrody
//   OCH = Ochrona przyrody
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R05_EKO_01",
    "section": "Budowa ekosystemu",
    "type": "single_choice",
    "prompt": "Który zestaw zawiera tylko elementy abiotyczne ekosystemu?",
    "explanation": "Woda, światło i gleba to nieożywione elementy ekosystemu.",
    "options": [
      "woda, światło, gleba",
      "woda, sosna, gleba",
      "grzyb, światło, wiatr",
      "bakterie, piasek, sarna",
      "mech, woda, grzyb",
      "sarna, wiatr, sosna"
    ],
    "image": "r05_lesne_siedlisko.jpg",
    "answer": 0
  },
  {
    "id": "R05_EKO_02",
    "section": "Budowa ekosystemu",
    "type": "multi_select",
    "prompt": "Wybierz składniki biotyczne ekosystemu.",
    "explanation": "Organizmy, w tym bakterie, grzyby, rośliny i zwierzęta, są składnikami żywymi.",
    "options": [
      "bakterie",
      "grzyby",
      "wiatr",
      "rośliny",
      "woda",
      "zwierzęta"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ]
  },
  {
    "id": "R05_EKO_03",
    "section": "Budowa ekosystemu",
    "type": "true_false",
    "prompt": "Ekosystem może być naturalny lub sztuczny.",
    "explanation": "Las może być ekosystemem naturalnym, a pole uprawne lub terrarium jest przykładem sztucznego.",
    "options": null,
    "answer": true
  },
  {
    "id": "R05_EKO_04",
    "section": "Budowa ekosystemu",
    "type": "fill_in",
    "prompt": "Miejsce odpowiadające wymaganiom organizmu to __________, a całokształt jego wymagań i powiązań z otoczeniem to __________.",
    "explanation": "Siedlisko oznacza przestrzeń odpowiednią do życia; nisza obejmuje wymagania i relacje organizmu z otoczeniem.",
    "options": null,
    "answer": [
      "siedlisko",
      "nisza ekologiczna"
    ]
  },
  {
    "id": "R05_EKO_05",
    "section": "Budowa ekosystemu",
    "type": "riddle",
    "prompt": "Jak nazywa się organizm o wąskim zakresie tolerancji, którego obecność pomaga ocenić warunki środowiska?",
    "explanation": "Organizmy wskaźnikowe, zwane też bioindykatorami, reagują na zmiany określonego czynnika.",
    "altAnswers": [
      "organizm wskaźnikowy",
      "bioindykator"
    ],
    "options": null,
    "answer": "organizm wskaźnikowy"
  },
  {
    "id": "R05_EKO_06",
    "section": "Budowa ekosystemu",
    "type": "odd_one_out",
    "prompt": "Wskaż składnik innej grupy: bakterie, sosna, sarna, żwir.",
    "explanation": "Żwir to składnik nieożywiony, a pozostałe to organizmy.",
    "options": null,
    "answer": "żwir"
  },
  {
    "id": "R05_EKO_07",
    "section": "Budowa ekosystemu",
    "type": "scenario",
    "prompt": "W okolicy drzewa coraz trudniej znaleźć porosty. Jaki czynnik można wstępnie ocenić za pomocą skali porostowej?",
    "explanation": "Skala porostowa wykorzystuje wrażliwość porostów na SO₂ do oceny zanieczyszczenia powietrza.",
    "options": [
      "stężenie dwutlenku siarki w powietrzu",
      "liczbę gatunków drzew",
      "wilgotność gleby",
      "zagęszczenie saren",
      "zasolenie wody",
      "temperaturę jeziora"
    ],
    "image": "r05_porosty_na_korze.jpg",
    "answer": 0
  },
  {
    "id": "R05_EKO_08",
    "section": "Budowa ekosystemu",
    "type": "match",
    "prompt": "Połącz pojęcia z ich znaczeniem.",
    "explanation": "Siedlisko jest miejscem życia; nisza opisuje wymagania i relacje, a tolerancja zakres zmian warunków możliwy do zniesienia.",
    "left": [
      "siedlisko",
      "nisza ekologiczna",
      "tolerancja ekologiczna"
    ],
    "right": [
      "zdolność do znoszenia zmian czynnika",
      "wymagania i powiązania z otoczeniem",
      "miejsce życia organizmu"
    ],
    "options": null,
    "answer": {
      "siedlisko": "miejsce życia organizmu",
      "nisza ekologiczna": "wymagania i powiązania z otoczeniem",
      "tolerancja ekologiczna": "zdolność do znoszenia zmian czynnika"
    }
  },
  {
    "id": "R05_EKO_09",
    "section": "Budowa ekosystemu",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do typu ekosystemu.",
    "explanation": "Las i pustynia są lądowe, rzeka i jezioro słodkowodne, morze i ocean morskie; park i pole uprawne utworzył człowiek.",
    "items": [
      "pole uprawne",
      "park",
      "ocean",
      "morze",
      "jezioro",
      "rzeka",
      "pustynia",
      "las"
    ],
    "categories": [
      "lądowy",
      "słodkowodny",
      "morski",
      "sztuczny"
    ],
    "options": null,
    "answer": {
      "lądowy": [
        "las",
        "pustynia"
      ],
      "słodkowodny": [
        "rzeka",
        "jezioro"
      ],
      "morski": [
        "morze",
        "ocean"
      ],
      "sztuczny": [
        "park",
        "pole uprawne"
      ]
    }
  },
  {
    "id": "R05_EKO_10",
    "section": "Budowa ekosystemu",
    "type": "sequence",
    "prompt": "Ułóż etapy obserwacji jakości powietrza za pomocą porostów.",
    "explanation": "Najpierw obserwuje się porosty, porównuje je ze skalą, ocenia powietrze i zapisuje wynik oraz wniosek.",
    "items": [
      "Ocena stanu zanieczyszczenia powietrza",
      "Zapisanie wyniku i wniosku",
      "Obejrzenie porostów na drzewach",
      "Dopasowanie porostów do stref skali"
    ],
    "options": null,
    "answer": [
      "Obejrzenie porostów na drzewach",
      "Dopasowanie porostów do stref skali",
      "Ocena stanu zanieczyszczenia powietrza",
      "Zapisanie wyniku i wniosku"
    ]
  },
  {
    "id": "R05_POP_01",
    "section": "Populacja",
    "type": "single_choice",
    "prompt": "Co musi łączyć osobniki tworzące jedną populację?",
    "explanation": "Populację stanowią osobniki tego samego gatunku żyjące na jednym obszarze w tym samym czasie.",
    "options": [
      "ten sam gatunek, obszar i czas",
      "ten sam gatunek bez względu na miejsce",
      "to samo miejsce bez względu na gatunek",
      "ta sama płeć i gatunek",
      "identyczny wiek i gatunek",
      "wspólne źródło pożywienia"
    ],
    "image": "r05_losie_w_lesie.jpg",
    "answer": 0
  },
  {
    "id": "R05_POP_02",
    "section": "Populacja",
    "type": "multi_select",
    "prompt": "Wskaż czynniki zwiększające liczebność populacji.",
    "explanation": "Narodziny i napływ osobników zwiększają liczebność; zgony i odpływ ją zmniejszają.",
    "options": [
      "rozrodczość",
      "imigracja",
      "śmiertelność",
      "emigracja"
    ],
    "answer": [
      0,
      1
    ]
  },
  {
    "id": "R05_POP_03",
    "section": "Populacja",
    "type": "true_false",
    "prompt": "Zagęszczenie oznacza całkowitą liczbę wszystkich osobników populacji.",
    "explanation": "Całkowita liczba to liczebność. Zagęszczenie jest liczbą osobników na jednostkę powierzchni lub objętości.",
    "options": null,
    "answer": false
  },
  {
    "id": "R05_POP_04",
    "section": "Populacja",
    "type": "fill_in",
    "prompt": "Napływ osobników do populacji to __________, a ich odpływ to __________.",
    "explanation": "Imigracja powiększa populację, a emigracja ją zmniejsza.",
    "options": null,
    "answer": [
      "imigracja",
      "emigracja"
    ]
  },
  {
    "id": "R05_POP_05",
    "section": "Populacja",
    "type": "riddle",
    "prompt": "Jak nazywa się liczba osobników przypadająca na jednostkę powierzchni lub objętości?",
    "explanation": "Zagęszczenie można wyrazić np. jako liczbę roślin na metr kwadratowy.",
    "altAnswers": [
      "zagęszczenie",
      "zagęszczenie populacji"
    ],
    "options": null,
    "answer": "zagęszczenie"
  },
  {
    "id": "R05_POP_06",
    "section": "Populacja",
    "type": "odd_one_out",
    "prompt": "Co nie jest cechą opisującą populację: liczebność, rozrodczość, śmiertelność, nasłonecznienie.",
    "explanation": "Nasłonecznienie jest czynnikiem środowiska; pozostałe to cechy populacji.",
    "options": null,
    "answer": "nasłonecznienie"
  },
  {
    "id": "R05_POP_07",
    "section": "Populacja",
    "type": "scenario",
    "prompt": "Badacz wyznacza na łące kilka jednakowych kwadratów i liczy mniszki w każdym. Co może oszacować na podstawie tych prób?",
    "explanation": "Metoda kwadratów służy do szacowania liczebności i zagęszczenia roślin w siedlisku.",
    "options": [
      "liczebność i zagęszczenie populacji",
      "poziom zanieczyszczenia powietrza",
      "wiek wszystkich mniszków",
      "strukturę płciową mniszków",
      "zasolenie gleby",
      "liczbę drapieżników na łące"
    ],
    "image": "r05_rosliny_na_lace.jpg",
    "answer": 0
  },
  {
    "id": "R05_POP_08",
    "section": "Populacja",
    "type": "match",
    "prompt": "Połącz cechę populacji z jej definicją.",
    "explanation": "Rozrodczość i śmiertelność opisują zmiany liczby osobników, a struktury wiekowa i płciowa ich skład.",
    "left": [
      "rozrodczość",
      "śmiertelność",
      "struktura wiekowa",
      "struktura płciowa"
    ],
    "right": [
      "liczby samic i samców",
      "udział osobników w okresach życia",
      "liczba zmarłych w danym czasie",
      "liczba urodzonych w danym czasie"
    ],
    "options": null,
    "answer": {
      "rozrodczość": "liczba urodzonych w danym czasie",
      "śmiertelność": "liczba zmarłych w danym czasie",
      "struktura wiekowa": "udział osobników w okresach życia",
      "struktura płciowa": "liczby samic i samców"
    }
  },
  {
    "id": "R05_POP_09",
    "section": "Populacja",
    "type": "sort",
    "prompt": "Przyporządkuj zmianę do kierunku wpływu na liczebność.",
    "explanation": "Urodzenia i imigracja zwiększają liczebność; zgony i emigracja ją zmniejszają.",
    "items": [
      "emigracja",
      "zgony",
      "imigracja",
      "urodzenia"
    ],
    "categories": [
      "wzrost",
      "spadek"
    ],
    "options": null,
    "answer": {
      "wzrost": [
        "urodzenia",
        "imigracja"
      ],
      "spadek": [
        "zgony",
        "emigracja"
      ]
    }
  },
  {
    "id": "R05_POP_10",
    "section": "Populacja",
    "type": "sequence",
    "prompt": "Ułóż etapy obserwacji roślin metodą kwadratów.",
    "explanation": "Badanie wymaga wyznaczenia pól, policzenia roślin, obliczenia zagęszczenia i oceny rozmieszczenia.",
    "items": [
      "Odniesienie liczby roślin do powierzchni kwadratu",
      "Określenie sposobu rozmieszczenia roślin",
      "Wyznaczenie jednakowych kwadratów w terenie",
      "Policzenie roślin w każdym kwadracie"
    ],
    "options": null,
    "answer": [
      "Wyznaczenie jednakowych kwadratów w terenie",
      "Policzenie roślin w każdym kwadracie",
      "Odniesienie liczby roślin do powierzchni kwadratu",
      "Określenie sposobu rozmieszczenia roślin"
    ]
  },
  {
    "id": "R05_BIO_01",
    "section": "Różnorodność biologiczna",
    "type": "single_choice",
    "prompt": "Co oznacza różnorodność biologiczna?",
    "explanation": "Bioróżnorodność obejmuje zróżnicowanie organizmów i form życia na Ziemi.",
    "options": [
      "rozmaitość form życia",
      "liczbę osobników jednego gatunku",
      "wyłącznie liczbę ekosystemów",
      "tylko różnice między odmianami roślin",
      "liczbę gatunków chronionych",
      "częstotliwość migracji zwierząt"
    ],
    "answer": 0
  },
  {
    "id": "R05_BIO_02",
    "section": "Różnorodność biologiczna",
    "type": "multi_select",
    "prompt": "Które działania mogą zmniejszać różnorodność biologiczną?",
    "explanation": "Niszczenie siedlisk, nadmierne połowy, gatunki inwazyjne i zanieczyszczanie środowiska mogą zmniejszać różnorodność biologiczną.",
    "options": [
      "niszczenie siedlisk",
      "nadmierne połowy",
      "wprowadzanie gatunków inwazyjnych",
      "zanieczyszczanie środowiska",
      "ochrona zagrożonych siedlisk"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ]
  },
  {
    "id": "R05_BIO_03",
    "section": "Różnorodność biologiczna",
    "type": "true_false",
    "prompt": "Osobniki tego samego gatunku mogą różnić się wyglądem.",
    "explanation": "Różnorodność genetyczna przejawia się m.in. różnicami wyglądu między osobnikami jednego gatunku.",
    "image": "r05_krepak_na_brzozie.jpg",
    "options": null,
    "answer": true
  },
  {
    "id": "R05_BIO_04",
    "section": "Różnorodność biologiczna",
    "type": "fill_in",
    "prompt": "Dzikie owady __________ pomagają w uzyskiwaniu plonów roślin owadopylnych.",
    "explanation": "Spadek liczebności i różnorodności dzikich zapylaczy może zmniejszyć plony roślin owadopylnych.",
    "image": "r05_zapylacz_na_kwiacie.jpg",
    "options": null,
    "answer": [
      "zapylające"
    ]
  },
  {
    "id": "R05_BIO_05",
    "section": "Różnorodność biologiczna",
    "type": "riddle",
    "prompt": "Jak nazywa się zróżnicowanie wszystkich form życia na Ziemi?",
    "explanation": "Różnorodność biologiczna jest inaczej nazywana bioróżnorodnością.",
    "altAnswers": [
      "bioróżnorodność",
      "różnorodność biologiczna"
    ],
    "options": null,
    "answer": "bioróżnorodność"
  },
  {
    "id": "R05_BIO_06",
    "section": "Różnorodność biologiczna",
    "type": "odd_one_out",
    "prompt": "Wskaż działanie służące ochronie zamiast degradacji przyrody: kłusownictwo, niszczenie siedlisk, introdukcja gatunków inwazyjnych, ochrona zapylaczy.",
    "explanation": "Pozostałe działania stanowią zagrożenie dla gatunków lub siedlisk.",
    "options": null,
    "answer": "ochrona zapylaczy"
  },
  {
    "id": "R05_BIO_07",
    "section": "Różnorodność biologiczna",
    "type": "scenario",
    "prompt": "Na jasnej korze brzozy z porostami dwa warianty barwne krępaka nabrzozaka odpoczywają obok siebie. Który wariant jest tam lepiej zamaskowany?",
    "explanation": "Jasny wariant był słabiej widoczny na jasnej korze pokrytej porostami.",
    "options": [
      "jasny",
      "ciemny",
      "oba zawsze tak samo",
      "żaden z nich",
      "ten z większymi skrzydłami",
      "nie można rozważać kamuflażu"
    ],
    "answer": 0
  },
  {
    "id": "R05_BIO_08",
    "section": "Różnorodność biologiczna",
    "type": "match",
    "prompt": "Połącz zagrożenie z przykładem.",
    "explanation": "Kłusownictwo i nadmierne połowy eliminują zwierzęta, a gatunki inwazyjne mogą wypierać rodzime.",
    "left": [
      "kłusownictwo",
      "gatunek inwazyjny",
      "nadmierne rybołówstwo"
    ],
    "right": [
      "intensywne połowy zagrażające gatunkom",
      "rak pręgowany w nowym ekosystemie",
      "nielegalne zabijanie zwierząt"
    ],
    "options": null,
    "answer": {
      "kłusownictwo": "nielegalne zabijanie zwierząt",
      "gatunek inwazyjny": "rak pręgowany w nowym ekosystemie",
      "nadmierne rybołówstwo": "intensywne połowy zagrażające gatunkom"
    }
  },
  {
    "id": "R05_BIO_09",
    "section": "Różnorodność biologiczna",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady zagrożeń.",
    "explanation": "Zagrożenia obejmują utratę siedlisk, bezpośrednią eliminację organizmów i wprowadzanie gatunków obcych.",
    "items": [
      "rak pręgowany",
      "nawłoć kanadyjska",
      "nadmierne połowy",
      "kłusownictwo",
      "osuszanie mokradeł",
      "wycinanie naturalnego lasu"
    ],
    "categories": [
      "niszczenie siedlisk",
      "bezpośrednia eliminacja",
      "gatunki obce"
    ],
    "options": null,
    "answer": {
      "niszczenie siedlisk": [
        "wycinanie naturalnego lasu",
        "osuszanie mokradeł"
      ],
      "bezpośrednia eliminacja": [
        "kłusownictwo",
        "nadmierne połowy"
      ],
      "gatunki obce": [
        "nawłoć kanadyjska",
        "rak pręgowany"
      ]
    }
  },
  {
    "id": "R05_BIO_10",
    "section": "Różnorodność biologiczna",
    "type": "sequence",
    "prompt": "Ułóż zmiany dotyczące żubra w porządku historycznym.",
    "explanation": "Żubry wytępiono w Puszczy Białowieskiej, później odtworzono populację i przywrócono je także gdzie indziej.",
    "items": [
      "Odtworzenie populacji żubra",
      "Obecność żubrów w kilku miejscach Polski",
      "Spadek liczby wolno żyjących żubrów",
      "Śmierć ostatniego dzikiego żubra w Puszczy Białowieskiej w 1919 roku"
    ],
    "image": "r05_zubr_w_lesie.jpg",
    "options": null,
    "answer": [
      "Spadek liczby wolno żyjących żubrów",
      "Śmierć ostatniego dzikiego żubra w Puszczy Białowieskiej w 1919 roku",
      "Odtworzenie populacji żubra",
      "Obecność żubrów w kilku miejscach Polski"
    ]
  },
  {
    "id": "R05_ZAS_01",
    "section": "Zasoby przyrody",
    "type": "single_choice",
    "prompt": "Który zasób jest nieodnawialny?",
    "explanation": "Węgiel brunatny to paliwo kopalne zaliczone do zasobów nieodnawialnych.",
    "options": [
      "węgiel brunatny",
      "energia wiatru",
      "energia Słońca",
      "woda",
      "rośliny",
      "energia wody"
    ],
    "answer": 0
  },
  {
    "id": "R05_ZAS_02",
    "section": "Zasoby przyrody",
    "type": "multi_select",
    "prompt": "Wybierz odnawialne zasoby lub źródła energii.",
    "explanation": "Energia wiatru i Słońca, woda oraz rośliny należą do zasobów odnawialnych.",
    "options": [
      "energia wiatru",
      "energia Słońca",
      "woda",
      "ropa naftowa",
      "gaz ziemny",
      "rośliny"
    ],
    "answer": [
      0,
      1,
      2,
      5
    ]
  },
  {
    "id": "R05_ZAS_03",
    "section": "Zasoby przyrody",
    "type": "true_false",
    "prompt": "Zrównoważony rozwój uwzględnia potrzeby obecnego i przyszłych pokoleń.",
    "explanation": "Zakłada zaspokajanie obecnych potrzeb bez pozbawiania przyszłych pokoleń możliwości rozwoju.",
    "options": null,
    "answer": true
  },
  {
    "id": "R05_ZAS_04",
    "section": "Zasoby przyrody",
    "type": "fill_in",
    "prompt": "Ponowne wykorzystanie surowców z odpadów do produkcji nowych wyrobów to __________.",
    "explanation": "Recykling pozwala pozyskać surowce wtórne z odpadów.",
    "options": null,
    "answer": [
      "recykling"
    ]
  },
  {
    "id": "R05_ZAS_05",
    "section": "Zasoby przyrody",
    "type": "riddle",
    "prompt": "Jak nazywa się przetwarzanie bioodpadów na nawóz?",
    "explanation": "Kompostowanie pozwala uzyskać bezpieczny dla środowiska nawóz z odpadów organicznych.",
    "altAnswers": [
      "kompostowanie"
    ],
    "options": null,
    "answer": "kompostowanie"
  },
  {
    "id": "R05_ZAS_06",
    "section": "Zasoby przyrody",
    "type": "odd_one_out",
    "prompt": "Wskaż nieodnawialny zasób: woda, lasy, energia wiatru, gaz ziemny.",
    "explanation": "Gaz ziemny jest paliwem kopalnym i zasobem nieodnawialnym.",
    "options": null,
    "answer": "gaz ziemny"
  },
  {
    "id": "R05_ZAS_07",
    "section": "Zasoby przyrody",
    "type": "scenario",
    "prompt": "Zakład produkcyjny oczyszcza wodę po użyciu i ponownie kieruje ją do produkcji. Co dzięki temu ogranicza?",
    "explanation": "Zamknięty obieg i recykling wody pozwalają zmniejszyć jej zużycie.",
    "options": [
      "zużycie wody",
      "liczbę owadów zapylających",
      "ilość światła słonecznego",
      "rozrodczość ryb",
      "zasolenie oceanów",
      "strukturę wiekową populacji"
    ],
    "image": "r05_oczyszczalnia_wody.jpg",
    "answer": 0
  },
  {
    "id": "R05_ZAS_08",
    "section": "Zasoby przyrody",
    "type": "match",
    "prompt": "Połącz sposób postępowania z odpadami z opisem.",
    "explanation": "Różne metody ograniczają wpływ odpadów na środowisko w odmienny sposób.",
    "left": [
      "segregowanie",
      "recykling",
      "kompostowanie",
      "składowanie"
    ],
    "right": [
      "izolacja odpadów na przygotowanym terenie",
      "wytwarzanie nawozu z bioodpadów",
      "odzysk surowców wtórnych",
      "sortowanie według rodzaju surowca"
    ],
    "options": null,
    "answer": {
      "segregowanie": "sortowanie według rodzaju surowca",
      "recykling": "odzysk surowców wtórnych",
      "kompostowanie": "wytwarzanie nawozu z bioodpadów",
      "składowanie": "izolacja odpadów na przygotowanym terenie"
    }
  },
  {
    "id": "R05_ZAS_09",
    "section": "Zasoby przyrody",
    "type": "sort",
    "prompt": "Przyporządkuj zasoby przyrody.",
    "explanation": "Woda, lasy i energia wiatru oraz Słońca są odnawialne; paliwa kopalne i sól kamienna nieodnawialne.",
    "items": [
      "sól kamienna",
      "węgiel kamienny",
      "gaz ziemny",
      "ropa naftowa",
      "lasy",
      "woda",
      "energia Słońca",
      "energia wiatru"
    ],
    "categories": [
      "odnawialne",
      "nieodnawialne"
    ],
    "image": "r05_wiatrak_i_panele.jpg",
    "options": null,
    "answer": {
      "odnawialne": [
        "energia wiatru",
        "energia Słońca",
        "woda",
        "lasy"
      ],
      "nieodnawialne": [
        "ropa naftowa",
        "gaz ziemny",
        "węgiel kamienny",
        "sól kamienna"
      ]
    }
  },
  {
    "id": "R05_ZAS_10",
    "section": "Zasoby przyrody",
    "type": "sequence",
    "prompt": "Ułóż etapy gospodarowania odpadami pozwalające odzyskać materiał.",
    "explanation": "Segregacja umożliwia odzysk materiału i ponowne użycie go w produkcji.",
    "items": [
      "Odzyskanie surowców wtórnych",
      "Wytworzenie nowych wyrobów z odzyskanego materiału",
      "Oddanie odpadów do właściwych pojemników",
      "Posortowanie według rodzaju materiału"
    ],
    "options": null,
    "answer": [
      "Oddanie odpadów do właściwych pojemników",
      "Posortowanie według rodzaju materiału",
      "Odzyskanie surowców wtórnych",
      "Wytworzenie nowych wyrobów z odzyskanego materiału"
    ]
  },
  {
    "id": "R05_OCH_01",
    "section": "Ochrona przyrody",
    "type": "single_choice",
    "prompt": "Która forma ochrony obejmuje pojedyncze okazałe drzewo lub głaz?",
    "explanation": "Pomnik przyrody jest formą ochrony indywidualnej obejmującą cenne obiekty żywe i nieożywione.",
    "options": [
      "pomnik przyrody",
      "park narodowy",
      "park krajobrazowy",
      "obszar Natura 2000",
      "obszar chronionego krajobrazu",
      "rezerwat biosfery"
    ],
    "image": "r05_pomnik_przyrody.jpg",
    "answer": 0
  },
  {
    "id": "R05_OCH_02",
    "section": "Ochrona przyrody",
    "type": "multi_select",
    "prompt": "Wybierz formy ochrony obszarowej.",
    "explanation": "Parki narodowe, rezerwaty, obszary Natura 2000 i parki krajobrazowe obejmują obszary.",
    "options": [
      "park narodowy",
      "rezerwat przyrody",
      "obszar Natura 2000",
      "pomnik przyrody",
      "użytek ekologiczny",
      "park krajobrazowy"
    ],
    "answer": [
      0,
      1,
      2,
      5
    ]
  },
  {
    "id": "R05_OCH_03",
    "section": "Ochrona przyrody",
    "type": "true_false",
    "prompt": "Ochrona gatunkowa może obejmować rośliny, zwierzęta i grzyby.",
    "explanation": "Ochrona gatunkowa chroni zagrożone organizmy oraz ich siedliska i ostoje.",
    "options": null,
    "answer": true
  },
  {
    "id": "R05_OCH_04",
    "section": "Ochrona przyrody",
    "type": "fill_in",
    "prompt": "Ochrona __________ polega na stosowaniu zabiegów wspierających gatunki, a ochrona __________ wyklucza ingerencję człowieka.",
    "explanation": "Ochrona czynna dopuszcza zabiegi, a bierna ma zachować przyrodę bez ingerencji.",
    "options": null,
    "answer": [
      "czynna",
      "bierna"
    ]
  },
  {
    "id": "R05_OCH_05",
    "section": "Ochrona przyrody",
    "type": "riddle",
    "prompt": "Jak nazywa się ochrona obejmująca całe ekosystemy?",
    "explanation": "Ochrona obszarowa dotyczy terenów i ekosystemów, np. parków narodowych.",
    "altAnswers": [
      "ochrona obszarowa",
      "obszarowa"
    ],
    "options": null,
    "answer": "ochrona obszarowa"
  },
  {
    "id": "R05_OCH_06",
    "section": "Ochrona przyrody",
    "type": "odd_one_out",
    "prompt": "Wskaż formę ochrony indywidualnej: park narodowy, rezerwat przyrody, park krajobrazowy, użytek ekologiczny.",
    "explanation": "Użytek ekologiczny to niewielki fragment przyrody chroniony indywidualnie.",
    "options": null,
    "answer": "użytek ekologiczny"
  },
  {
    "id": "R05_OCH_07",
    "section": "Ochrona przyrody",
    "type": "scenario",
    "prompt": "W lesie zawiesza się budki lęgowe dla włochatek, by zwiększyć liczbę miejsc gniazdowania. Jaki rodzaj ochrony według stopnia ingerencji zastosowano?",
    "explanation": "Wieszanie budek jest świadomym zabiegiem wspierającym gniazdowanie, więc jest ochroną czynną.",
    "options": [
      "ochrona czynna",
      "ochrona bierna",
      "wyłącznie ochrona krajobrazowa",
      "wyłącznie ochrona nieożywionej przyrody",
      "ochrona przez brak ingerencji",
      "nie jest to zabieg ochronny"
    ],
    "image": "r05_budka_legowa_w_lesie.jpg",
    "answer": 0
  },
  {
    "id": "R05_OCH_08",
    "section": "Ochrona przyrody",
    "type": "match",
    "prompt": "Połącz formę ochrony z chronionym obiektem.",
    "explanation": "Są to cztery formy ochrony indywidualnej o różnych przedmiotach ochrony.",
    "left": [
      "pomnik przyrody",
      "stanowisko dokumentacyjne",
      "użytek ekologiczny",
      "zespół przyrodniczo-krajobrazowy"
    ],
    "right": [
      "fragment cennego krajobrazu",
      "niewielki cenny fragment siedliska",
      "odkrywka geologiczna",
      "okazałe drzewo lub głaz"
    ],
    "options": null,
    "answer": {
      "pomnik przyrody": "okazałe drzewo lub głaz",
      "stanowisko dokumentacyjne": "odkrywka geologiczna",
      "użytek ekologiczny": "niewielki cenny fragment siedliska",
      "zespół przyrodniczo-krajobrazowy": "fragment cennego krajobrazu"
    }
  },
  {
    "id": "R05_OCH_09",
    "section": "Ochrona przyrody",
    "type": "sort",
    "prompt": "Rozdziel formy ochrony według sposobu.",
    "explanation": "Formy obszarowe chronią tereny, gatunkowa organizmy, a indywidualne cenne obiekty lub niewielkie fragmenty przyrody.",
    "items": [
      "stanowisko dokumentacyjne",
      "użytek ekologiczny",
      "pomnik przyrody",
      "ochrona grzybów",
      "ochrona zwierząt",
      "ochrona roślin",
      "obszar Natura 2000",
      "rezerwat przyrody",
      "park narodowy"
    ],
    "categories": [
      "obszarowa",
      "gatunkowa",
      "indywidualna"
    ],
    "options": null,
    "answer": {
      "obszarowa": [
        "park narodowy",
        "rezerwat przyrody",
        "obszar Natura 2000"
      ],
      "gatunkowa": [
        "ochrona roślin",
        "ochrona zwierząt",
        "ochrona grzybów"
      ],
      "indywidualna": [
        "pomnik przyrody",
        "użytek ekologiczny",
        "stanowisko dokumentacyjne"
      ]
    }
  },
  {
    "id": "R05_OCH_10",
    "section": "Ochrona przyrody",
    "type": "sequence",
    "prompt": "Ułóż rozwój prawnej ochrony przyrody od najstarszego przykładu.",
    "explanation": "Opis obejmuje kolejno starożytne Chiny, działania dwóch polskich władców oraz rozwój ochrony pod koniec XIX wieku.",
    "items": [
      "Ochrona cisów za Władysława Jagiełły",
      "Nasilenie ochrony roślin i zwierząt pod koniec XIX wieku",
      "Zakaz wycinania lasów w Chinach około 1000 lat p.n.e.",
      "Zakaz polowania na bobry za Bolesława Chrobrego"
    ],
    "options": null,
    "answer": [
      "Zakaz wycinania lasów w Chinach około 1000 lat p.n.e.",
      "Zakaz polowania na bobry za Bolesława Chrobrego",
      "Ochrona cisów za Władysława Jagiełły",
      "Nasilenie ochrony roślin i zwierząt pod koniec XIX wieku"
    ]
  },
  {
    "id": "R05_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który porost pojawia się w strefie VII skali porostowej, odpowiadającej powietrzu prawie zupełnie czystemu?",
    "explanation": "Granicznik płucnik występuje w VII strefie skali porostowej, odpowiadającej powietrzu prawie zupełnie czystemu.",
    "options": [
      "granicznik płucnik",
      "misecznica jaśniejsza",
      "złotorost ścienny",
      "tarczownica bruzdkowana",
      "mąklik otrębiasty",
      "brodaczka zwyczajna"
    ],
    "image": "r05_porosty_na_korze.jpg",
    "answer": 0
  },
  {
    "id": "R05_HARD_02",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz strefę skali porostowej z podanym porostem.",
    "explanation": "W skali wraz z kolejnymi strefami maleje poziom zanieczyszczenia SO₂.",
    "left": [
      "II",
      "III",
      "IV",
      "VI"
    ],
    "right": [
      "brodaczka zwyczajna",
      "tarczownica bruzdkowana",
      "złotorost ścienny",
      "misecznica jaśniejsza"
    ],
    "options": null,
    "answer": {
      "II": "misecznica jaśniejsza",
      "III": "złotorost ścienny",
      "IV": "tarczownica bruzdkowana",
      "VI": "brodaczka zwyczajna"
    }
  },
  {
    "id": "R05_HARD_03",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który ptak jest symbolem Biebrzańskiego Parku Narodowego?",
    "explanation": "Batalion jest ptakiem przedstawionym w symbolu Biebrzańskiego Parku Narodowego.",
    "options": [
      "batalion",
      "zimorodek",
      "włochatka",
      "kormoran",
      "żuraw",
      "niepylak apollo"
    ],
    "image": "r05_biebrzanskie_torfowisko.jpg",
    "answer": 0
  },
  {
    "id": "R05_HARD_04",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Pieniński i Białowieski Park Narodowy powstały w 1932 roku.",
    "explanation": "Rok 1932 jest datą powstania obu tych parków narodowych.",
    "options": null,
    "answer": true
  },
  {
    "id": "R05_HARD_05",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Park Narodowy Ujście Warty utworzono w roku __________.",
    "explanation": "Park Narodowy Ujście Warty jest najmłodszym parkiem narodowym w Polsce; powstał w 2001 roku.",
    "options": null,
    "answer": [
      "2001"
    ]
  },
  {
    "id": "R05_HARD_06",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który park narodowy zajmuje największy obszar w Polsce?",
    "explanation": "Największym powierzchniowo parkiem narodowym w Polsce jest Biebrzański.",
    "options": [
      "Biebrzański",
      "Białowieski",
      "Pieniński",
      "Kampinoski",
      "Narwiański",
      "Tatrzański"
    ],
    "image": "r05_biebrzanskie_torfowisko.jpg",
    "answer": 0
  },
  {
    "id": "R05_HARD_07",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż formę ochrony indywidualnej wśród obszarowych: obszar Natura 2000, obszar chronionego krajobrazu, park krajobrazowy, stanowisko dokumentacyjne.",
    "explanation": "Stanowisko dokumentacyjne chroni obiekty przyrody nieożywionej i należy do ochrony indywidualnej.",
    "options": null,
    "answer": "stanowisko dokumentacyjne"
  },
  {
    "id": "R05_HARD_08",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Rozdziel motywy ochrony przyrody.",
    "explanation": "Motywy ochrony mają różne podstawy: odpowiedzialność, piękno, dochód i wiedzę.",
    "items": [
      "poznawanie praw natury",
      "zachowanie źródeł dochodu",
      "piękno barw i kształtów przyrody",
      "moralna odpowiedzialność za gatunki"
    ],
    "categories": [
      "etyczny",
      "estetyczny",
      "ekonomiczny",
      "naukowy"
    ],
    "options": null,
    "answer": {
      "etyczny": [
        "moralna odpowiedzialność za gatunki"
      ],
      "estetyczny": [
        "piękno barw i kształtów przyrody"
      ],
      "ekonomiczny": [
        "zachowanie źródeł dochodu"
      ],
      "naukowy": [
        "poznawanie praw natury"
      ]
    }
  },
  {
    "id": "R05_HARD_09",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Na plantacjach bananów maleje zróżnicowanie odmian. Co może to utrudnić w walce z chorobą panamską?",
    "explanation": "Utrata tradycyjnych odmian zmniejsza dostępność genów potencjalnej odporności na patogen.",
    "options": [
      "znalezienie genów odporności w starszych odmianach",
      "zwiększenie liczby zapylaczy",
      "uzyskanie energii geotermalnej",
      "rozwój transportu wodnego",
      "ochronę głazów narzutowych",
      "monitorowanie dwutlenku siarki"
    ],
    "answer": 0
  },
  {
    "id": "R05_HARD_10",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż strefy skali porostowej od najbardziej do najmniej zanieczyszczonego powietrza.",
    "explanation": "Strefa I odpowiada powietrzu bardzo silnie zanieczyszczonemu, a VII prawie zupełnie czystemu.",
    "items": [
      "IV: tarczownica bruzdkowana",
      "VII: granicznik płucnik",
      "I: brak porostów",
      "II: misecznica jaśniejsza"
    ],
    "options": null,
    "answer": [
      "I: brak porostów",
      "II: misecznica jaśniejsza",
      "IV: tarczownica bruzdkowana",
      "VII: granicznik płucnik"
    ]
  },
  {
    "id": "R05_HARD_11",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Wybierz przykłady obiektów, które mogą stanowić stanowisko dokumentacyjne.",
    "explanation": "Stanowiska dokumentacyjne chronią cenne elementy przyrody nieożywionej dla celów naukowych i dydaktycznych.",
    "options": [
      "odkrywka geologiczna",
      "jaskinia",
      "nagromadzenie skamieniałości",
      "okazały żywy dąb",
      "stadko łosi"
    ],
    "answer": [
      0,
      1,
      2
    ]
  },
  {
    "id": "R05_HARD_12",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W 1919 roku padł ostatni żubr żyjący na wolności w Puszczy Białowieskiej. Który proces pozwolił później przywrócić jego obecność?",
    "explanation": "Populacja żubrów została odtworzona w Puszczy Białowieskiej i innych miejscach Polski.",
    "options": [
      "odtworzenie populacji",
      "wprowadzenie raka pręgowanego",
      "skala porostowa",
      "osuszenie torfowisk",
      "wyłącznie składowanie odpadów",
      "zanik siedlisk"
    ],
    "image": "r05_zubr_w_lesie.jpg",
    "answer": 0
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r05",
  number: 5,
  title: "Struktura ekosystemu i jego ochrona",
  icon: "🌍",
  sectionOrder: [
  "Budowa ekosystemu",
  "Populacja",
  "Różnorodność biologiczna",
  "Zasoby przyrody",
  "Ochrona przyrody"
],
  sectionIcons: {
  "Budowa ekosystemu": "🌿",
  "Populacja": "🐾",
  "Różnorodność biologiczna": "🦋",
  "Zasoby przyrody": "💧",
  "Ochrona przyrody": "🌳"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
