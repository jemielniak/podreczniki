// Skróty sekcji (do identyfikatorów ćwiczeń):
//   DEM  = Ludność, demografia i migracje
//   URB  = Urbanizacja i osadnictwo
//   ROL  = Rolnictwo i produkcja żywności
//   PRZ  = Przemysł i energetyka
//   USL  = Usługi, transport i łączność
//   TUR  = Turystyka, handel i środowisko
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R05_DEM_01",
    "section": "Ludność, demografia i migracje",
    "type": "single_choice",
    "prompt": "Gdzie, poza Górnośląskim Okręgiem Przemysłowym, koncentruje się współcześnie duża część ludności Polski?",
    "options": [
      "W otoczeniu wielkich miast",
      "Na terenach oddalonych od dużych miast",
      "Wyłącznie na obszarach górskich",
      "Wyłącznie na Pojezierzu Suwalskim",
      "Przede wszystkim na obszarach bagiennych",
      "Wyłącznie na wybrzeżu Bałtyku"
    ],
    "answer": 0,
    "explanation": "Duża część ludności Polski koncentruje się w otoczeniu wielkich miast, zwłaszcza Warszawy, Krakowa, Łodzi i Poznania."
  },
  {
    "id": "R05_DEM_02",
    "section": "Ludność, demografia i migracje",
    "type": "multi_select",
    "prompt": "Wybierz przyrodnicze czynniki, które wpływały na rozmieszczenie ludności i rozwój osadnictwa na ziemiach polskich.",
    "options": [
      "Żyzność gleb",
      "Rozwój zakładów przemysłowych",
      "Ukształtowanie terenu",
      "Wydobycie surowców mineralnych",
      "Warunki klimatyczne",
      "Migracje"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Początkowo o osadnictwie decydowały gleby, rzeźba terenu i klimat. Przemysł, eksploatacja kopalin oraz migracje to czynniki pozaprzyrodnicze."
  },
  {
    "id": "R05_DEM_03",
    "section": "Ludność, demografia i migracje",
    "type": "true_false",
    "prompt": "W migracjach wewnętrznych Polski od około 2000 r. przeważał kierunek z miast na wieś.",
    "options": null,
    "answer": true,
    "explanation": "Przed 2000 r. dominowały migracje ze wsi do miast, a później częściej obserwowano migracje w kierunku odwrotnym, szczególnie do stref podmiejskich."
  },
  {
    "id": "R05_DEM_04",
    "section": "Ludność, demografia i migracje",
    "type": "fill_in",
    "prompt": "Przyrost rzeczywisty ludności to suma przyrostu __________ i salda __________.",
    "options": null,
    "answer": [
      "naturalnego",
      "migracji"
    ],
    "explanation": "Przyrost rzeczywisty obliczamy przez dodanie przyrostu naturalnego oraz salda migracji.",
    "altAnswers": [
      [
        "naturalnego",
        "naturalny"
      ],
      [
        "migracji",
        "migracyjnego"
      ]
    ]
  },
  {
    "id": "R05_DEM_05",
    "section": "Ludność, demografia i migracje",
    "type": "riddle",
    "prompt": "Jak nazywa się wskaźnik określający liczbę kobiet przypadających na 100 mężczyzn?",
    "options": null,
    "answer": "wskaźnik feminizacji",
    "explanation": "Wskaźnik feminizacji określa liczbę kobiet przypadających na 100 mężczyzn. Dla Polski wskaźnik ten wynosił 107.",
    "altAnswers": [
      "wskaźnik feminizacji",
      "współczynnik feminizacji",
      "feminizacja"
    ]
  },
  {
    "id": "R05_DEM_06",
    "section": "Ludność, demografia i migracje",
    "type": "odd_one_out",
    "prompt": "Który z obszarów nie jest wielkim miastem, wokół którego koncentruje się ludność: Warszawa, Kraków, Łódź czy Pojezierze Suwalskie?",
    "options": null,
    "answer": "Pojezierze Suwalskie",
    "explanation": "Warszawa, Kraków i Łódź to wielkie miasta, wokół których koncentruje się ludność. Pojezierze Suwalskie jest regionem geograficznym, nie miastem."
  },
  {
    "id": "R05_DEM_07",
    "section": "Ludność, demografia i migracje",
    "type": "scenario",
    "prompt": "Młoda osoba opuszcza odległą wieś w województwie podlaskim, ponieważ nie znajduje w pobliżu pracy. Jaki skutek społeczny mogą mieć takie wyjazdy?",
    "options": [
      "Szybkie odmładzanie się ludności wsi",
      "Starzenie się ludności i wyludnianie wsi",
      "Znaczny napływ młodych rodzin na wieś",
      "Zanik migracji zarobkowych",
      "Powstawanie nowych wielkich miast",
      "Stały wzrost liczby urodzeń na wsi"
    ],
    "answer": 1,
    "explanation": "Z terenów wiejskich odległych od miast wyjeżdżają przede wszystkim młodzi, co prowadzi do ujemnego salda migracji i starzenia się mieszkańców."
  },
  {
    "id": "R05_DEM_08",
    "section": "Ludność, demografia i migracje",
    "type": "match",
    "prompt": "Połącz grupy ludności z właściwymi przedziałami wieku.",
    "options": null,
    "answer": {
      "Wiek przedprodukcyjny": "0–17 lat",
      "Wiek produkcyjny": "18–59/64 lata",
      "Wiek poprodukcyjny": "powyżej 60/65 lat"
    },
    "explanation": "Wiek przedprodukcyjny obejmuje 0–17 lat, produkcyjny 18–59 lat dla kobiet i 18–64 dla mężczyzn, a poprodukcyjny wiek powyżej tych granic.",
    "image": "r05_piramida_wieku.jpg",
    "left": [
      "Wiek poprodukcyjny",
      "Wiek przedprodukcyjny",
      "Wiek produkcyjny"
    ],
    "right": [
      "18–59/64 lata",
      "powyżej 60/65 lat",
      "0–17 lat"
    ]
  },
  {
    "id": "R05_DEM_09",
    "section": "Ludność, demografia i migracje",
    "type": "sort",
    "prompt": "Podziel czynniki wpływające na osadnictwo na przyrodnicze i pozaprzyrodnicze.",
    "options": null,
    "answer": {
      "Przyrodnicze": [
        "żyzne gleby",
        "dogodny klimat",
        "łagodna rzeźba terenu"
      ],
      "Pozaprzyrodnicze": [
        "wydobycie surowców",
        "rozwój przemysłu",
        "migracje ludności"
      ]
    },
    "explanation": "Osadnictwo zależy zarówno od warunków przyrodniczych, jak i od działalności gospodarczej oraz migracji ludności.",
    "items": [
      "wydobycie surowców",
      "żyzne gleby",
      "migracje ludności",
      "dogodny klimat",
      "rozwój przemysłu",
      "łagodna rzeźba terenu"
    ],
    "categories": [
      "Przyrodnicze",
      "Pozaprzyrodnicze"
    ]
  },
  {
    "id": "R05_DEM_10",
    "section": "Ludność, demografia i migracje",
    "type": "sequence",
    "prompt": "Ułóż zjawiska migracyjne od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "answer": [
      "Przesiedlenia po II wojnie światowej",
      "Emigracja polityczna lat 60. XX wieku",
      "Emigracja gospodarcza lat 80. XX wieku",
      "Wyjazdy po wejściu Polski do Unii Europejskiej"
    ],
    "explanation": "Chronologicznie występowały: powojenne przesiedlenia, emigracja polityczna w latach 60., ekonomiczna w latach 80. i duża fala emigracji po przystąpieniu Polski do UE.",
    "items": [
      "Emigracja gospodarcza lat 80. XX wieku",
      "Wyjazdy po wejściu Polski do Unii Europejskiej",
      "Przesiedlenia po II wojnie światowej",
      "Emigracja polityczna lat 60. XX wieku"
    ]
  },
  {
    "id": "R05_URB_01",
    "section": "Urbanizacja i osadnictwo",
    "type": "single_choice",
    "prompt": "Co oznacza wskaźnik urbanizacji?",
    "options": [
      "Odsetek powierzchni kraju zajętej przez lasy",
      "Liczba miast na 100 kilometrów kwadratowych",
      "Procent ludności mieszkającej w miastach",
      "Odsetek dróg miejskich w sieci transportowej",
      "Liczba nowych mieszkań budowanych na wsi",
      "Liczba osób dojeżdżających do pracy"
    ],
    "answer": 2,
    "explanation": "Wskaźnik urbanizacji to procent mieszkańców miast w ogólnej liczbie ludności kraju."
  },
  {
    "id": "R05_URB_02",
    "section": "Urbanizacja i osadnictwo",
    "type": "multi_select",
    "prompt": "Zaznacz zjawiska zaliczane do procesu urbanizacji.",
    "options": [
      "Zwiększanie liczby mieszkańców miast",
      "Przekształcanie wsi w miasta",
      "Wyłącznie zwiększanie powierzchni lasów",
      "Rozbudowa sieci ulic i komunikacji",
      "Likwidację wszystkich usług",
      "Upowszechnianie miejskiego stylu życia"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "explanation": "Urbanizacja obejmuje rozbudowę miast, zwiększanie ich liczby ludności, przekształcanie wsi w miasta oraz upowszechnianie miejskiego stylu życia."
  },
  {
    "id": "R05_URB_03",
    "section": "Urbanizacja i osadnictwo",
    "type": "true_false",
    "prompt": "W 2022 r. wskaźnik urbanizacji Polski wynosił 59,6%.",
    "options": null,
    "answer": true,
    "explanation": "W 2022 r. 59,6% mieszkańców Polski mieszkało w miastach."
  },
  {
    "id": "R05_URB_04",
    "section": "Urbanizacja i osadnictwo",
    "type": "fill_in",
    "prompt": "Zespół miast z jednym ośrodkiem dominującym to __________, a zespół miast bez jednego dominującego ośrodka to __________.",
    "options": null,
    "answer": [
      "aglomeracja",
      "konurbacja"
    ],
    "explanation": "W aglomeracji monocentrycznej jeden ośrodek dominuje, a konurbacja jest zespołem miast podobnej wielkości.",
    "image": "r05_schemat_zespolow_miejskich.jpg",
    "altAnswers": [
      [
        "aglomeracja",
        "aglomeracja monocentryczna"
      ],
      [
        "konurbacja",
        "aglomeracja policentryczna"
      ]
    ]
  },
  {
    "id": "R05_URB_05",
    "section": "Urbanizacja i osadnictwo",
    "type": "riddle",
    "prompt": "Jak nazywa się zespół miast podobnej wielkości, w którym żadne nie dominuje nad pozostałymi?",
    "options": null,
    "answer": "konurbacja",
    "explanation": "Przykładami konurbacji są konurbacja górnośląska i Zagłębie Ruhry.",
    "altAnswers": [
      "konurbacja",
      "aglomeracja policentryczna"
    ]
  },
  {
    "id": "R05_URB_06",
    "section": "Urbanizacja i osadnictwo",
    "type": "odd_one_out",
    "prompt": "Które miasto nie stanowi samodzielnego centrum aglomeracji monocentrycznej: Warszawa, Kraków, Londyn czy Bytom?",
    "options": null,
    "answer": "Bytom",
    "explanation": "Warszawa, Kraków i Londyn są centrami aglomeracji monocentrycznych; Bytom wchodzi w skład konurbacji górnośląskiej."
  },
  {
    "id": "R05_URB_07",
    "section": "Urbanizacja i osadnictwo",
    "type": "scenario",
    "prompt": "Rodzina wyprowadza się z centrum Poznania do pobliskiej wsi. Nadal pracuje w mieście, ale mieszka w domu z ogrodem i korzysta z dogodnego dojazdu. Który proces ilustruje ta sytuacja?",
    "options": [
      "Dezurbanizacja całego kraju",
      "Industrializacja rolnictwa",
      "Emigracja zagraniczna",
      "Suburbanizacja",
      "Rozwój żeglugi śródlądowej",
      "Rekultywacja terenów poprzemysłowych"
    ],
    "answer": 3,
    "explanation": "Napływ mieszkańców miast do otaczających je wsi prowadzi do rozwoju stref podmiejskich, czyli suburbiów.",
    "image": "r05_zabudowa_podmiejska.jpg"
  },
  {
    "id": "R05_URB_08",
    "section": "Urbanizacja i osadnictwo",
    "type": "match",
    "prompt": "Połącz przykład z odpowiednim typem zespołu miejskiego.",
    "options": null,
    "answer": {
      "Warszawa": "aglomeracja monocentryczna w Polsce",
      "Konurbacja górnośląska": "konurbacja w Polsce",
      "Zagłębie Ruhry": "konurbacja w Niemczech"
    },
    "explanation": "W aglomeracji Warszawy dominuje Warszawa. Górny Śląsk oraz Zagłębie Ruhry tworzą zespoły z wieloma dużymi ośrodkami.",
    "left": [
      "Zagłębie Ruhry",
      "Warszawa",
      "Konurbacja górnośląska"
    ],
    "right": [
      "konurbacja w Polsce",
      "konurbacja w Niemczech",
      "aglomeracja monocentryczna w Polsce"
    ]
  },
  {
    "id": "R05_URB_09",
    "section": "Urbanizacja i osadnictwo",
    "type": "sort",
    "prompt": "Przyporządkuj czynniki przyciągające mieszkańców do centrum miasta i do strefy podmiejskiej.",
    "options": null,
    "answer": {
      "Miasto": [
        "większa liczba miejsc pracy",
        "różnorodne usługi i instytucje"
      ],
      "Strefa podmiejska": [
        "więcej zieleni przy domu",
        "mniejszy hałas w miejscu zamieszkania"
      ]
    },
    "explanation": "Duże miasta przyciągają miejscami pracy i usługami, a przedmieścia m.in. zielenią, spokojem i warunkami mieszkaniowymi.",
    "image": "r05_zabudowa_podmiejska.jpg",
    "items": [
      "więcej zieleni przy domu",
      "większa liczba miejsc pracy",
      "mniejszy hałas w miejscu zamieszkania",
      "różnorodne usługi i instytucje"
    ],
    "categories": [
      "Miasto",
      "Strefa podmiejska"
    ]
  },
  {
    "id": "R05_URB_10",
    "section": "Urbanizacja i osadnictwo",
    "type": "single_choice",
    "prompt": "Które z podanych województw miało najwyższy wskaźnik urbanizacji?",
    "options": [
      "Śląskie",
      "Podkarpackie",
      "Lubelskie",
      "Świętokrzyskie",
      "Podlaskie",
      "Małopolskie"
    ],
    "answer": 0,
    "explanation": "Województwo śląskie miało najwyższy odsetek ludności miejskiej — 75,89%."
  },
  {
    "id": "R05_ROL_01",
    "section": "Rolnictwo i produkcja żywności",
    "type": "single_choice",
    "prompt": "Jakie rośliny zajmują największą część powierzchni upraw w Polsce?",
    "options": [
      "Zboża",
      "Owoce cytrusowe",
      "Rośliny tropikalne",
      "Winorośl",
      "Bawełna",
      "Oliwki"
    ],
    "answer": 0,
    "explanation": "Zboża stanowią około 72% upraw, dlatego dominują w polskiej produkcji roślinnej.",
    "image": "r05_pola_zbozowe.jpg"
  },
  {
    "id": "R05_ROL_02",
    "section": "Rolnictwo i produkcja żywności",
    "type": "multi_select",
    "prompt": "Które z wymienionych cech zaliczają się do przyrodniczych czynników rozwoju rolnictwa?",
    "options": [
      "Warunki klimatyczne",
      "Mechanizacja upraw",
      "Żyzność gleb",
      "Wielkość gospodarstw",
      "Rzeźba terenu",
      "Polityka rolna państwa"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Do czynników przyrodniczych należą między innymi klimat, gleby i rzeźba terenu; mechanizacja, nawożenie i struktura gospodarstw są pozaprzyrodnicze."
  },
  {
    "id": "R05_ROL_03",
    "section": "Rolnictwo i produkcja żywności",
    "type": "true_false",
    "prompt": "Żyto może być uprawiane na glebach gorszej jakości niż pszenica.",
    "options": null,
    "answer": true,
    "explanation": "Pszenica ma wysokie wymagania glebowe, natomiast żyto można uprawiać nawet na słabych glebach."
  },
  {
    "id": "R05_ROL_04",
    "section": "Rolnictwo i produkcja żywności",
    "type": "fill_in",
    "prompt": "Okres wegetacyjny występuje, gdy średnia dobowa temperatura powietrza przekracza __________ stopni Celsjusza.",
    "options": null,
    "answer": [
      "5"
    ],
    "explanation": "Długość okresu wegetacyjnego zależy od warunków termicznych i wodnych; za jego próg przyjmuje się średnią dobową temperaturę powyżej +5°C.",
    "altAnswers": [
      [
        "5",
        "+5",
        "5°C",
        "+5°C"
      ]
    ]
  },
  {
    "id": "R05_ROL_05",
    "section": "Rolnictwo i produkcja żywności",
    "type": "riddle",
    "prompt": "Jak nazywa się zboże będące krzyżówką pszenicy i żyta?",
    "options": null,
    "answer": "pszenżyto",
    "explanation": "Pszenżyto otrzymano przez skrzyżowanie pszenicy i żyta. Jest jednym ze zbóż uprawianych w Polsce.",
    "altAnswers": [
      "pszenżyto"
    ]
  },
  {
    "id": "R05_ROL_06",
    "section": "Rolnictwo i produkcja żywności",
    "type": "odd_one_out",
    "prompt": "Wskaż roślinę niebędącą zbożem: pszenica, żyto, jęczmień, rzepak.",
    "options": null,
    "answer": "rzepak",
    "explanation": "Rzepak jest rośliną oleistą, natomiast pszenica, żyto i jęczmień należą do zbóż."
  },
  {
    "id": "R05_ROL_07",
    "section": "Rolnictwo i produkcja żywności",
    "type": "scenario",
    "prompt": "Rolnik prowadzi sad w pobliżu dużego miasta. Może szybko dowozić świeże owoce do odbiorców. Który czynnik lokalizacji produkcji warzyw i owoców ilustruje ta sytuacja?",
    "options": [
      "Odległość od najbliższej rafinerii",
      "Bliskość rynku zbytu",
      "Dostęp do kopalń rud metali",
      "Bliskość portów oceanicznych",
      "Wysokość pasm górskich",
      "Występowanie wiecznej zmarzliny"
    ],
    "answer": 1,
    "explanation": "Sady i plantacje warzyw często znajdują się blisko dużych miast, które stanowią ważne rynki zbytu.",
    "image": "r05_sad_uprawny.jpg"
  },
  {
    "id": "R05_ROL_08",
    "section": "Rolnictwo i produkcja żywności",
    "type": "match",
    "prompt": "Dopasuj uprawy do ich wymagań lub głównych obszarów występowania.",
    "options": null,
    "answer": {
      "pszenica": "żyzne gleby",
      "żyto": "możliwość uprawy na glebach słabych",
      "chmiel": "Wyżyna Lubelska",
      "rzepak": "roślina oleista"
    },
    "explanation": "Pszenica potrzebuje gleb urodzajnych; żyto znosi słabe gleby; chmiel uprawia się m.in. na Wyżynie Lubelskiej, a rzepak zalicza się do roślin oleistych.",
    "left": [
      "chmiel",
      "pszenica",
      "rzepak",
      "żyto"
    ],
    "right": [
      "roślina oleista",
      "żyzne gleby",
      "możliwość uprawy na glebach słabych",
      "Wyżyna Lubelska"
    ]
  },
  {
    "id": "R05_ROL_09",
    "section": "Rolnictwo i produkcja żywności",
    "type": "sort",
    "prompt": "Przydziel przykłady do produkcji roślinnej lub zwierzęcej.",
    "options": null,
    "answer": {
      "Produkcja roślinna": [
        "uprawa pszenicy",
        "uprawa buraków cukrowych",
        "sadownictwo"
      ],
      "Produkcja zwierzęca": [
        "chów bydła",
        "hodowla owiec",
        "chów drobiu"
      ]
    },
    "explanation": "Produkcja roślinna obejmuje m.in. uprawy polowe i sady, natomiast produkcja zwierzęca polega na utrzymywaniu i hodowli zwierząt gospodarskich.",
    "items": [
      "chów drobiu",
      "uprawa pszenicy",
      "hodowla owiec",
      "sadownictwo",
      "chów bydła",
      "uprawa buraków cukrowych"
    ],
    "categories": [
      "Produkcja roślinna",
      "Produkcja zwierzęca"
    ]
  },
  {
    "id": "R05_ROL_10",
    "section": "Rolnictwo i produkcja żywności",
    "type": "single_choice",
    "prompt": "W których regionach Polski znajdują się główne skupiska hodowli owiec?",
    "options": [
      "Na Żuławach Wiślanych i Mazurach",
      "Na Pojezierzu Wielkopolskim",
      "W Beskidach i na Podhalu",
      "Wyłącznie na Nizinie Mazowieckiej",
      "Na Nizinie Szczecińskiej i w Zagłębiu Ruhry",
      "W centrach największych aglomeracji"
    ],
    "answer": 2,
    "explanation": "Owce hoduje się głównie w Beskidach i na Podhalu.",
    "image": "r05_owce_na_halach.jpg"
  },
  {
    "id": "R05_PRZ_01",
    "section": "Przemysł i energetyka",
    "type": "single_choice",
    "prompt": "Jakim paliwem zasilana jest elektrownia Bełchatów?",
    "options": [
      "Ropą naftową",
      "Węglem brunatnym",
      "Gazem ziemnym",
      "Biomasą",
      "Wodorem",
      "Uranem"
    ],
    "answer": 1,
    "explanation": "Elektrownia Bełchatów znajduje się w rejonie dużych złóż węgla brunatnego i jest opalana właśnie tym surowcem.",
    "image": "r05_elektrownia_cieplna.jpg"
  },
  {
    "id": "R05_PRZ_02",
    "section": "Przemysł i energetyka",
    "type": "multi_select",
    "prompt": "Zaznacz pozaprzyrodnicze czynniki lokalizacji zakładów przemysłowych.",
    "options": [
      "Ukształtowanie terenu",
      "Dostępność wykwalifikowanych pracowników",
      "Bliskość rynku zbytu",
      "Naturalne zasoby wody",
      "Infrastruktura drogowa i energetyczna",
      "Zaplecze naukowo-badawcze"
    ],
    "answer": [
      1,
      2,
      4,
      5
    ],
    "explanation": "Do pozaprzyrodniczych czynników lokalizacji przemysłu należą m.in. infrastruktura techniczna, dostęp do pracowników, rynek zbytu i zaplecze naukowo-badawcze."
  },
  {
    "id": "R05_PRZ_03",
    "section": "Przemysł i energetyka",
    "type": "true_false",
    "prompt": "Restrukturyzacja przemysłu w Polsce po 1989 r. obejmowała między innymi prywatyzację przedsiębiorstw i zamykanie nierentownych kopalń.",
    "options": null,
    "answer": true,
    "explanation": "Przemiany po 1989 r. objęły prywatyzację, modernizację, zmianę struktury produkcji i likwidację części nierentownych zakładów."
  },
  {
    "id": "R05_PRZ_04",
    "section": "Przemysł i energetyka",
    "type": "fill_in",
    "prompt": "Zmiany organizacji i sposobu działania przedsiębiorstwa służące poprawie wyników to __________.",
    "options": null,
    "answer": [
      "restrukturyzacja"
    ],
    "explanation": "Restrukturyzacja przedsiębiorstwa polega na zmianach organizacyjnych i gospodarczych mających poprawić jego funkcjonowanie.",
    "altAnswers": [
      [
        "restrukturyzacja",
        "restrukturyzacja przemysłu"
      ]
    ]
  },
  {
    "id": "R05_PRZ_05",
    "section": "Przemysł i energetyka",
    "type": "riddle",
    "prompt": "Jak nazywa się proces przywracania dawnym terenom przemysłowym użytecznych funkcji, na przykład przez zakładanie parków?",
    "options": null,
    "answer": "rekultywacja",
    "explanation": "Rekultywacja polega na przywracaniu zdegradowanym terenom funkcji użytkowych, np. przez tworzenie parków i miejsc wypoczynku.",
    "altAnswers": [
      "rekultywacja",
      "rekultywacja terenów poprzemysłowych"
    ]
  },
  {
    "id": "R05_PRZ_06",
    "section": "Przemysł i energetyka",
    "type": "odd_one_out",
    "prompt": "Wskaż działalność niewchodzącą do sektora przemysłu: kopalnia węgla, huta stali, fabryka samochodów, szkoła językowa.",
    "options": null,
    "answer": "szkoła językowa",
    "explanation": "Kopalnia, huta i fabryka produkują lub wydobywają konkretne dobra; edukacja świadczona przez szkołę jest usługą.",
    "image": "r05_zaklad_przemyslowy.jpg"
  },
  {
    "id": "R05_PRZ_07",
    "section": "Przemysł i energetyka",
    "type": "scenario",
    "prompt": "Przedsiębiorca planuje fabrykę zaawansowanych urządzeń elektronicznych. Potrzebuje inżynierów oraz współpracy z uczelnią i laboratorium badawczym. Który czynnik lokalizacji jest tu szczególnie ważny?",
    "options": [
      "Obecność morskiego klifu",
      "Przewaga łąk i pastwisk",
      "Lokalny poziom opadów śniegu",
      "Położenie przy plantacji tytoniu",
      "Zaplecze naukowo-badawcze",
      "Odległość od szlaku turystycznego"
    ],
    "answer": 4,
    "explanation": "W produkcji opartej na nowoczesnych technologiach istotne jest zaplecze naukowo-badawcze i odpowiednie kwalifikacje pracowników."
  },
  {
    "id": "R05_PRZ_08",
    "section": "Przemysł i energetyka",
    "type": "match",
    "prompt": "Połącz obiekt energetyczny z wykorzystywanym źródłem lub sposobem magazynowania energii.",
    "options": null,
    "answer": {
      "Bełchatów": "węgiel brunatny",
      "Kozienice": "węgiel kamienny",
      "Żarnowiec": "elektrownia szczytowo-pompowa",
      "Bańska Niżna": "energia geotermalna"
    },
    "explanation": "Bełchatów jest elektrownią na węgiel brunatny, Kozienice — na węgiel kamienny, Żarnowiec — szczytowo-pompową, a Bańska Niżna — obiektem geotermalnym.",
    "left": [
      "Kozienice",
      "Bańska Niżna",
      "Bełchatów",
      "Żarnowiec"
    ],
    "right": [
      "elektrownia szczytowo-pompowa",
      "energia geotermalna",
      "węgiel brunatny",
      "węgiel kamienny"
    ]
  },
  {
    "id": "R05_PRZ_09",
    "section": "Przemysł i energetyka",
    "type": "sort",
    "prompt": "Przyporządkuj źródła energii do odnawialnych i nieodnawialnych.",
    "options": null,
    "answer": {
      "Odnawialne": [
        "wiatr",
        "promieniowanie słoneczne",
        "energia płynącej wody"
      ],
      "Nieodnawialne": [
        "węgiel kamienny",
        "węgiel brunatny",
        "gaz ziemny"
      ]
    },
    "explanation": "Źródła odnawialne odnawiają się w przyrodzie, natomiast zasoby paliw kopalnych wyczerpują się w trakcie wydobycia i spalania.",
    "image": "r05_farma_wiatrowa.jpg",
    "items": [
      "węgiel kamienny",
      "wiatr",
      "gaz ziemny",
      "energia płynącej wody",
      "promieniowanie słoneczne",
      "węgiel brunatny"
    ],
    "categories": [
      "Odnawialne",
      "Nieodnawialne"
    ]
  },
  {
    "id": "R05_PRZ_10",
    "section": "Przemysł i energetyka",
    "type": "single_choice",
    "prompt": "Która gałąź przemysłu szczególnie mocno kojarzyła się z Łodzią przed przemianami gospodarczymi 1989 r.?",
    "options": [
      "Stoczniowy",
      "Rafineryjny",
      "Wydobycia węgla brunatnego",
      "Włókienniczy",
      "Rybołówstwa dalekomorskiego",
      "Lotniczy"
    ],
    "answer": 3,
    "explanation": "Łódź była znaczącym ośrodkiem przemysłu włókienniczego i odzieżowego. Po 1989 r. wiele tych zakładów upadło lub zmieniło profil."
  },
  {
    "id": "R05_USL_01",
    "section": "Usługi, transport i łączność",
    "type": "single_choice",
    "prompt": "Która działalność jest usługą, a nie produkcją przemysłową?",
    "options": [
      "Produkcja telewizorów",
      "Nauka języka obcego",
      "Wydobywanie miedzi",
      "Wytapianie żelaza",
      "Produkcja nawozów",
      "Wypiek pieczywa w piekarni"
    ],
    "answer": 1,
    "explanation": "Usługi zaspokajają potrzeby ludzi i firm bez wytwarzania konkretnego produktu; przykładem jest nauczanie."
  },
  {
    "id": "R05_USL_02",
    "section": "Usługi, transport i łączność",
    "type": "multi_select",
    "prompt": "Zaznacz rodzaje transportu wodnego.",
    "options": [
      "Transport morski",
      "Transport kolejowy",
      "Żegluga śródlądowa",
      "Transport lotniczy",
      "Transport drogowy",
      "Żegluga kabotażowa"
    ],
    "answer": [
      0,
      2,
      5
    ],
    "explanation": "Do transportu wodnego zalicza się żeglugę morską i śródlądową; żegluga kabotażowa jest rodzajem transportu wzdłuż wybrzeża."
  },
  {
    "id": "R05_USL_03",
    "section": "Usługi, transport i łączność",
    "type": "true_false",
    "prompt": "Odra jest najważniejszym szlakiem żeglugi śródlądowej w Polsce.",
    "options": null,
    "answer": true,
    "explanation": "Odra jest uregulowana na przeważającej długości i połączona Kanałem Gliwickim z Górnośląskim Okręgiem Przemysłowym."
  },
  {
    "id": "R05_USL_04",
    "section": "Usługi, transport i łączność",
    "type": "fill_in",
    "prompt": "Transport informacji przez telefon i Internet należy do sektora __________, a przesyłanie ropy rurociągami to transport __________.",
    "options": null,
    "answer": [
      "łączności",
      "przesyłowy"
    ],
    "explanation": "Łączność obejmuje wymianę informacji; transport przesyłowy obejmuje m.in. rurociągi oraz przesyłanie energii.",
    "altAnswers": [
      [
        "łączności",
        "łączność"
      ],
      [
        "przesyłowy",
        "przesyłowego"
      ]
    ]
  },
  {
    "id": "R05_USL_05",
    "section": "Usługi, transport i łączność",
    "type": "riddle",
    "prompt": "Jak nazywa się organizowanie przewozu ładunków na zlecenie innych firm?",
    "options": null,
    "answer": "spedycja",
    "explanation": "Spedycja to organizowanie przewozu ładunków zleconego przez inne podmioty; w tym celu korzysta m.in. z infrastruktury transportowej.",
    "altAnswers": [
      "spedycja",
      "działalność spedycyjna"
    ]
  },
  {
    "id": "R05_USL_06",
    "section": "Usługi, transport i łączność",
    "type": "odd_one_out",
    "prompt": "Wskaż obiekt, który nie jest portem morskim: Gdańsk, Gdynia, Świnoujście, Port Lotniczy Gdańsk.",
    "options": null,
    "answer": "Port Lotniczy Gdańsk",
    "explanation": "Gdańsk, Gdynia i Świnoujście są portami morskimi, a Port Lotniczy Gdańsk jest portem lotniczym.",
    "image": "r05_port_morski.jpg"
  },
  {
    "id": "R05_USL_07",
    "section": "Usługi, transport i łączność",
    "type": "scenario",
    "prompt": "Firma musi bardzo szybko dostarczyć kosztowny i łatwo psujący się towar na inny kontynent. Koszt przewozu jest drugorzędny. Który transport będzie najodpowiedniejszy?",
    "options": [
      "Lotniczy",
      "Żegluga śródlądowa",
      "Rurociągowy",
      "Tramwajowy",
      "Kolej podmiejska",
      "Kabotażowy"
    ],
    "answer": 0,
    "explanation": "Transport lotniczy jest szybki, lecz drogi, dlatego opłaca się m.in. przy przewozie produktów łatwo psujących się i szczególnie cennych."
  },
  {
    "id": "R05_USL_08",
    "section": "Usługi, transport i łączność",
    "type": "match",
    "prompt": "Połącz środek lub sposób transportu z przykładowym przewożonym ładunkiem.",
    "options": null,
    "answer": {
      "Tankowiec": "ropa naftowa",
      "Gazociąg": "gaz ziemny",
      "Kolej towarowa": "węgiel kamienny"
    },
    "explanation": "Tankowce służą do przewozu ropy i jej produktów, gazociągi do transportu gazu, a kolej może przewozić m.in. węgiel.",
    "left": [
      "Gazociąg",
      "Kolej towarowa",
      "Tankowiec"
    ],
    "right": [
      "węgiel kamienny",
      "ropa naftowa",
      "gaz ziemny"
    ]
  },
  {
    "id": "R05_USL_09",
    "section": "Usługi, transport i łączność",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do transportu albo łączności.",
    "options": null,
    "answer": {
      "Transport": [
        "przewóz towarów koleją",
        "rejs promem",
        "lot pasażerski"
      ],
      "Łączność": [
        "rozmowa telefoniczna",
        "wiadomość e-mail",
        "przesłanie listu"
      ]
    },
    "explanation": "Transport dotyczy przemieszczania ludzi lub towarów, a łączność przekazywania informacji.",
    "items": [
      "wiadomość e-mail",
      "przewóz towarów koleją",
      "przesłanie listu",
      "lot pasażerski",
      "rozmowa telefoniczna",
      "rejs promem"
    ],
    "categories": [
      "Transport",
      "Łączność"
    ]
  },
  {
    "id": "R05_USL_10",
    "section": "Usługi, transport i łączność",
    "type": "sequence",
    "prompt": "Ułóż kategorie dróg publicznych w Polsce od szczebla ogólnokrajowego do najbardziej lokalnego.",
    "options": null,
    "answer": [
      "Drogi krajowe",
      "Drogi wojewódzkie",
      "Drogi powiatowe",
      "Drogi gminne"
    ],
    "explanation": "Drogi krajowe należą do Skarbu Państwa, natomiast drogi wojewódzkie, powiatowe i gminne pozostają w zarządzie odpowiednich samorządów.",
    "items": [
      "Drogi powiatowe",
      "Drogi gminne",
      "Drogi krajowe",
      "Drogi wojewódzkie"
    ]
  },
  {
    "id": "R05_TUR_01",
    "section": "Turystyka, handel i środowisko",
    "type": "single_choice",
    "prompt": "Co odróżnia turystykę od podróży podejmowanej w celu zarobkowym?",
    "options": [
      "Zawsze bardzo długi czas pobytu",
      "Cel niezarobkowy wyjazdu",
      "Obowiązek podróży zagranicznej",
      "Konieczność nocowania w hotelu",
      "Obowiązek podróżowania samolotem",
      "Podróż wyłącznie w góry"
    ],
    "answer": 1,
    "explanation": "Turystyka to dobrowolne podróżowanie poza miejsce zamieszkania w celach niezarobkowych."
  },
  {
    "id": "R05_TUR_02",
    "section": "Turystyka, handel i środowisko",
    "type": "multi_select",
    "prompt": "Wybierz przyrodnicze walory turystyczne polskiego wybrzeża Bałtyku.",
    "options": [
      "Piaszczyste plaże",
      "Zabytkowe kościoły",
      "Klifowe wybrzeże",
      "Zabytkowe zamki",
      "Mierzeje",
      "Jeziora przybrzeżne"
    ],
    "answer": [
      0,
      2,
      4,
      5
    ],
    "explanation": "Przyrodnicze walory polskiego pobrzeża obejmują plaże, klify, mierzeje i jeziora przybrzeżne; zabytki są walorami kulturowymi.",
    "image": "r05_wydmy_nadmorskie.jpg"
  },
  {
    "id": "R05_TUR_03",
    "section": "Turystyka, handel i środowisko",
    "type": "true_false",
    "prompt": "W 2022 r. Niemcy były najważniejszym partnerem handlowym Polski.",
    "options": null,
    "answer": true,
    "explanation": "W 2022 r. Niemcy były głównym partnerem handlowym Polski zarówno w eksporcie, jak i w imporcie."
  },
  {
    "id": "R05_TUR_04",
    "section": "Turystyka, handel i środowisko",
    "type": "fill_in",
    "prompt": "Zakup i przywóz towarów z zagranicy to __________, a sprzedaż towarów za granicę to __________.",
    "options": null,
    "answer": [
      "import",
      "eksport"
    ],
    "explanation": "Import oznacza sprowadzanie towarów, a eksport sprzedaż towarów na zagranicznych rynkach.",
    "altAnswers": [
      [
        "import",
        "importowanie"
      ],
      [
        "eksport",
        "eksportowanie"
      ]
    ]
  },
  {
    "id": "R05_TUR_05",
    "section": "Turystyka, handel i środowisko",
    "type": "riddle",
    "prompt": "Jak nazywa się nadmierne użyźnienie wód, które może prowadzić do zakwitu sinic i zaniku tlenu?",
    "options": null,
    "answer": "eutrofizacja",
    "explanation": "Eutrofizacja jest skutkiem napływu substancji odżywczych, między innymi azotu i fosforu, do zbiorników wodnych.",
    "image": "r05_zakwit_wod.jpg",
    "altAnswers": [
      "eutrofizacja",
      "eutrofizacja wód"
    ]
  },
  {
    "id": "R05_TUR_06",
    "section": "Turystyka, handel i środowisko",
    "type": "odd_one_out",
    "prompt": "Wskaż element niebędący rodzajem zanieczyszczenia lub jego skutkiem: smog, eutrofizacja, kwaśny deszcz, piaszczysta plaża.",
    "options": null,
    "answer": "piaszczysta plaża",
    "explanation": "Smog, eutrofizacja i kwaśne deszcze są zagrożeniami dla środowiska; plaża jest walorem przyrodniczym."
  },
  {
    "id": "R05_TUR_07",
    "section": "Turystyka, handel i środowisko",
    "type": "scenario",
    "prompt": "Turyści odwiedzają Kraków, ponieważ chcą zwiedzać historyczne budowle i dzielnice, w tym Wawel oraz Kazimierz. Z jakiego rodzaju walorów turystycznych korzystają?",
    "options": [
      "Wyłącznie klimatycznych",
      "Wyłącznie surowcowych",
      "Kulturowych",
      "Wyłącznie geologicznych",
      "Rolniczych",
      "Wyłącznie hydrologicznych"
    ],
    "answer": 2,
    "explanation": "Zabytki i dziedzictwo historyczne są walorami kulturowymi, które obok walorów przyrodniczych przyciągają turystów.",
    "image": "r05_krakow_zabytki.jpg"
  },
  {
    "id": "R05_TUR_08",
    "section": "Turystyka, handel i środowisko",
    "type": "match",
    "prompt": "Połącz polskie firmy z dziedzinami ich działalności.",
    "options": null,
    "answer": {
      "PESA": "pojazdy szynowe",
      "Mlekpol": "produkty mleczne",
      "CD Projekt": "gry komputerowe",
      "Black Red White": "meble"
    },
    "explanation": "Przykładami przedsiębiorstw działających w Polsce są PESA, Mlekpol, CD Projekt oraz Black Red White.",
    "left": [
      "Mlekpol",
      "Black Red White",
      "PESA",
      "CD Projekt"
    ],
    "right": [
      "gry komputerowe",
      "pojazdy szynowe",
      "meble",
      "produkty mleczne"
    ]
  },
  {
    "id": "R05_TUR_09",
    "section": "Turystyka, handel i środowisko",
    "type": "sort",
    "prompt": "Przydziel atrakcje turystyczne do walorów przyrodniczych lub kulturowych.",
    "options": null,
    "answer": {
      "Przyrodnicze": [
        "klif morski",
        "piaszczysta mierzeja",
        "ruchome wydmy"
      ],
      "Kulturowe": [
        "kościół zabytkowy",
        "historyczna starówka",
        "dawna kopalnia jako zabytek"
      ]
    },
    "explanation": "Walory przyrodnicze są elementami natury, a kulturowe wytworami działalności człowieka.",
    "image": "r05_wydmy_nadmorskie.jpg",
    "items": [
      "historyczna starówka",
      "klif morski",
      "ruchome wydmy",
      "dawna kopalnia jako zabytek",
      "piaszczysta mierzeja",
      "kościół zabytkowy"
    ],
    "categories": [
      "Przyrodnicze",
      "Kulturowe"
    ]
  },
  {
    "id": "R05_TUR_10",
    "section": "Turystyka, handel i środowisko",
    "type": "sequence",
    "prompt": "Ułóż obiekty z Listy Światowego Dziedzictwa UNESCO od najwcześniejszego wpisu do najpóźniejszego.",
    "options": null,
    "answer": [
      "Stare Miasto w Krakowie (1978)",
      "Kopalnia soli w Wieliczce (1979)",
      "Kościoły Pokoju w Jaworze i Świdnicy (2001)",
      "Krzemionki Opatowskie (2019)"
    ],
    "explanation": "Kraków wpisano w 1978 r., Wieliczkę w 1979 r., Kościoły Pokoju w 2001 r., a Krzemionki Opatowskie w 2019 r.",
    "items": [
      "Kościoły Pokoju w Jaworze i Świdnicy (2001)",
      "Krzemionki Opatowskie (2019)",
      "Stare Miasto w Krakowie (1978)",
      "Kopalnia soli w Wieliczce (1979)"
    ]
  },
  {
    "id": "R05_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaki odsetek ludności Polski stanowiły w 2023 r. osoby w wieku przedprodukcyjnym (0–17 lat)?",
    "options": [
      "14,7%",
      "17,9%",
      "18,2%",
      "19,7%",
      "22,2%",
      "24,8%"
    ],
    "answer": 2,
    "explanation": "Według danych GUS w 2023 r. osoby w wieku przedprodukcyjnym stanowiły 18,2%, produkcyjnym 58,4%, a poprodukcyjnym 23,4% ludności."
  },
  {
    "id": "R05_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które informacje o Karaimach są prawdziwe?",
    "options": [
      "Język karaimski należy do języków tureckich",
      "Religia Karaimów powstała z buddyzmu",
      "Religia Karaimów powstała z judaizmu",
      "Karaimi są największą mniejszością w Polsce",
      "Współczesne skupiska są m.in. w Warszawie i Trójmieście",
      "Karaimi wyznają wyłącznie islam"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Karaimi to bardzo mała społeczność; ich język należy do języków tureckich, a religia wywodzi się z judaizmu. Jej skupiska znajdują się m.in. w Warszawie i Trójmieście."
  },
  {
    "id": "R05_HARD_03",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "W 2023 r. udział osób w wieku poprodukcyjnym (23,4%) był w Polsce wyższy niż udział osób w wieku przedprodukcyjnym (18,2%).",
    "options": null,
    "answer": true,
    "explanation": "W 2023 r. udział ludności w wieku poprodukcyjnym wynosił 23,4%, a przedprodukcyjnym 18,2%, co obrazuje starzenie się społeczeństwa.",
    "image": "r05_piramida_wieku.jpg"
  },
  {
    "id": "R05_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W 2009 r. z Polski wyjechało 18,6 tys. osób, a przyjechało 17,4 tys. Saldo migracji wyniosło __________ tys. osób.",
    "options": null,
    "answer": [
      "-1,2"
    ],
    "explanation": "Saldo to liczba przybyłych minus liczba wyjeżdżających: 17,4 − 18,6 = −1,2 tys. osób.",
    "altAnswers": [
      [
        "-1,2",
        "−1,2",
        "-1.2",
        "minus 1,2"
      ]
    ]
  },
  {
    "id": "R05_HARD_05",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "W którym roku przeprowadzono pierwszy ogólnopolski spis ludności i domów?",
    "options": null,
    "answer": "1789",
    "explanation": "Pierwszy ogólnopolski spis ludności i domów przeprowadzono w 1789 roku.",
    "altAnswers": [
      "1789",
      "1789 r.",
      "rok 1789"
    ]
  },
  {
    "id": "R05_HARD_06",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Która z elektrowni nie jest szczytowo-pompowa: Żarnowiec, Żydowo, Porąbka-Żar czy Bełchatów?",
    "options": null,
    "answer": "Bełchatów",
    "explanation": "Żarnowiec, Żydowo i Porąbka-Żar to elektrownie szczytowo-pompowe; Bełchatów jest elektrownią cieplną na węgiel brunatny.",
    "image": "r05_elektrownia_cieplna.jpg"
  },
  {
    "id": "R05_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W 2000 r. osoby w wieku przedprodukcyjnym stanowiły 24,8% ludności Polski, a w 2023 r. 18,2%. O ile punktów procentowych zmalał ich udział?",
    "options": [
      "O 2,6 punktu procentowego",
      "O 4,4 punktu procentowego",
      "O 5,4 punktu procentowego",
      "O 6,6 punktu procentowego",
      "O 8,4 punktu procentowego",
      "O 11,6 punktu procentowego"
    ],
    "answer": 3,
    "explanation": "Udział zmniejszył się o 24,8 − 18,2 = 6,6 punktu procentowego."
  },
  {
    "id": "R05_HARD_08",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz Polaków z ich osiągnięciami.",
    "options": null,
    "answer": {
      "Aleksander Wolszczan": "odkrycie pierwszych planet poza Układem Słonecznym",
      "Henryk Skarżyński": "stworzenie Światowego Centrum Słuchu",
      "Mirosław Miętus": "badania nad zmianami klimatu",
      "Rafał Blechacz": "zwycięstwo w XV Konkursie Chopinowskim"
    },
    "explanation": "Każda z wymienionych osób zasłynęła z określonego osiągnięcia na arenie międzynarodowej.",
    "left": [
      "Rafał Blechacz",
      "Mirosław Miętus",
      "Aleksander Wolszczan",
      "Henryk Skarżyński"
    ],
    "right": [
      "stworzenie Światowego Centrum Słuchu",
      "zwycięstwo w XV Konkursie Chopinowskim",
      "badania nad zmianami klimatu",
      "odkrycie pierwszych planet poza Układem Słonecznym"
    ]
  },
  {
    "id": "R05_HARD_09",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj województwa do grup o wysokim i niskim wskaźniku urbanizacji.",
    "options": null,
    "answer": {
      "Wysoki wskaźnik urbanizacji": [
        "śląskie (75,89%)",
        "zachodniopomorskie (68,08%)"
      ],
      "Niski wskaźnik urbanizacji": [
        "podkarpackie (41,1%)",
        "świętokrzyskie (44,83%)"
      ]
    },
    "explanation": "Najwyższe wskaźniki urbanizacji mają województwa śląskie i zachodniopomorskie, a najniższe należą m.in. do podkarpackiego i świętokrzyskiego.",
    "items": [
      "podkarpackie (41,1%)",
      "zachodniopomorskie (68,08%)",
      "śląskie (75,89%)",
      "świętokrzyskie (44,83%)"
    ],
    "categories": [
      "Wysoki wskaźnik urbanizacji",
      "Niski wskaźnik urbanizacji"
    ]
  },
  {
    "id": "R05_HARD_10",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż chronologicznie wydarzenia związane z historią statystyki i przemianami Polski.",
    "options": null,
    "answer": [
      "Pierwszy ogólnopolski spis ludności i domów (1789)",
      "Rozpoczęcie rejestrowania urodzeń i zgonów (1790)",
      "Przemiany gospodarcze w Polsce (1989)",
      "Początek spadku udziału ludności miejskiej (2002)"
    ],
    "explanation": "W 1789 r. przeprowadzono pierwszy ogólnopolski spis, od 1790 r. rejestrowano ruch naturalny, po 1989 r. nastąpiły przemiany gospodarcze, a od 2002 r. notowano spadek udziału ludności miejskiej.",
    "items": [
      "Początek spadku udziału ludności miejskiej (2002)",
      "Rozpoczęcie rejestrowania urodzeń i zgonów (1790)",
      "Pierwszy ogólnopolski spis ludności i domów (1789)",
      "Przemiany gospodarcze w Polsce (1989)"
    ]
  },
  {
    "id": "R05_HARD_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile cyfr, nie licząc wyróżnika województwa, zawiera numer drogi powiatowej?",
    "options": [
      "Jedną",
      "Dwie",
      "Trzy",
      "Cztery",
      "Pięć",
      "Sześć"
    ],
    "answer": 3,
    "explanation": "Drogi powiatowe otrzymują czterocyfrowy numer z wyróżnikiem województwa. Numery wojewódzkie mają trzy cyfry, a gminne sześć."
  },
  {
    "id": "R05_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które działania pomagają chronić przed powodziami?",
    "options": [
      "Budowa wałów przeciwpowodziowych",
      "Budowa sztucznych zbiorników wodnych",
      "Osuszanie wszystkich mokradeł bez wyjątku",
      "Przywracanie naturalnej retencji",
      "Zabudowywanie całych dolin rzecznych",
      "Budowa polderów powodziowych"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "explanation": "Ochronie przed powodziami służą m.in. wały i zbiorniki przeciwpowodziowe, odtwarzanie naturalnej retencji oraz poldery.",
    "image": "r05_krajobraz_powodzi.jpg"
  },
  {
    "id": "R05_HARD_13",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Odsetek polskich gospodarstw domowych z dostępem do Internetu wzrósł z 86,7% w 2019 r. do 95,9% w 2024 r.",
    "options": null,
    "answer": true,
    "explanation": "W 2019 r. dostęp do Internetu miało 86,7% gospodarstw domowych, a w 2024 r. — 95,9%."
  },
  {
    "id": "R05_HARD_14",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W 2022 r. pewien kraj odpowiadał za 27,8% polskiego eksportu i 20,2% importu. Który to kraj?",
    "options": [
      "Niemcy",
      "Czechy",
      "Wielka Brytania",
      "Francja",
      "Chiny",
      "Włochy"
    ],
    "answer": 0,
    "explanation": "W 2022 r. Niemcy odpowiadały za 27,8% polskiego eksportu i 20,2% importu."
  }
];

const KID_PROMPTS = {
  "R05_DEM_04": "Dokończ: przyrost rzeczywisty to przyrost czego i saldo czego?",
  "R05_DEM_05": "Jak nazywa się liczba kobiet przypadających na 100 mężczyzn?",
  "R05_URB_04": "Jak nazywają się dwa rodzaje zespołów miast?",
  "R05_URB_07": "Rodzina wyprowadza się z miasta na przedmieścia. Jak nazywa się ten proces?",
  "R05_ROL_04": "Powyżej ilu stopni średnio w ciągu dnia rośliny mają okres wzrostu?",
  "R05_ROL_08": "Połącz rośliny z miejscem uprawy lub ich wymaganiami.",
  "R05_PRZ_04": "Jak nazywa się zmienianie firmy, żeby działała lepiej?",
  "R05_PRZ_07": "Fabryka elektroniki potrzebuje naukowców. Co jest ważne przy wyborze miejsca?",
  "R05_USL_04": "Uzupełnij: telefon i Internet to...; rurociąg to transport...",
  "R05_USL_05": "Jak nazywa się planowanie przewozu towarów dla innych firm?",
  "R05_TUR_04": "Jak nazywa się kupowanie towarów z zagranicy, a jak sprzedawanie za granicę?",
  "R05_TUR_05": "Jak nazywa się zbyt duża ilość substancji odżywczych w jeziorze?",
  "R05_HARD_07": "O ile punktów procentowych zmalał udział dzieci i młodzieży między 2000 a 2023 rokiem?",
  "R05_HARD_11": "Ile cyfr ma numer drogi powiatowej?"
};

const chapter = {
  "id": "r05",
  "number": 5,
  "title": "Społeczeństwo i gospodarka Polski",
  "icon": "🇵🇱",
  "sectionOrder": [
    "Ludność, demografia i migracje",
    "Urbanizacja i osadnictwo",
    "Rolnictwo i produkcja żywności",
    "Przemysł i energetyka",
    "Usługi, transport i łączność",
    "Turystyka, handel i środowisko"
  ],
  "sectionIcons": {
    "Ludność, demografia i migracje": "👥",
    "Urbanizacja i osadnictwo": "🏙️",
    "Rolnictwo i produkcja żywności": "🌾",
    "Przemysł i energetyka": "🏭",
    "Usługi, transport i łączność": "🚆",
    "Turystyka, handel i środowisko": "🌍"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
