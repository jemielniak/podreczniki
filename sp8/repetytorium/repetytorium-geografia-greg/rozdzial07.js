// Skróty sekcji (do identyfikatorów ćwiczeń):
//   AME = Ameryki — środowisko i ludność
//   BRA = Brazylia i Amazonia
//   USA = Stany Zjednoczone — gospodarka
//   AUS = Australia i Oceania
//   POL = Arktyka i Antarktyda
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R07_AME_01",
    "section": "Ameryki — środowisko i ludność",
    "type": "single_choice",
    "prompt": "Który region obejmuje Meksyk i kraje położone na południe od niego?",
    "options": [
      "Ameryka Anglosaska",
      "Ameryka Łacińska",
      "Arktyka",
      "Ameryka Północna bez Środkowej",
      "Oceania",
      "Antarktyka"
    ],
    "answer": 1,
    "explanation": "Do Ameryki Łacińskiej zalicza się Meksyk i państwa leżące na południe od niego.",
    "image": "r07_kultura_ameryk.jpg"
  },
  {
    "id": "R07_AME_02",
    "section": "Ameryki — środowisko i ludność",
    "type": "single_choice",
    "prompt": "Jakie góry ciągną się wzdłuż zachodniej części Ameryki Południowej?",
    "options": [
      "Appalachy",
      "Andy",
      "Góry Skaliste",
      "Wielkie Góry Wododziałowe",
      "Góry Alaska",
      "Kordyliery"
    ],
    "answer": 1,
    "explanation": "Andy leżą przy zachodnim wybrzeżu Ameryki Południowej. Na zachodzie Ameryki Północnej występują Kordyliery.",
    "image": "r07_mapa_fizyczna_ameryk.jpg"
  },
  {
    "id": "R07_AME_03",
    "section": "Ameryki — środowisko i ludność",
    "type": "single_choice",
    "prompt": "W którym państwie Ameryki Łacińskiej dominującym językiem urzędowym jest portugalski?",
    "options": [
      "Kolumbia",
      "Argentyna",
      "Brazylia",
      "Peru",
      "Meksyk",
      "Chile"
    ],
    "answer": 2,
    "explanation": "W Brazylii językiem urzędowym jest portugalski, natomiast w większości pozostałych państw Ameryki Łacińskiej używa się hiszpańskiego."
  },
  {
    "id": "R07_AME_04",
    "section": "Ameryki — środowisko i ludność",
    "type": "multi_select",
    "prompt": "Zaznacz procesy historyczne, które przyczyniły się do współczesnego zróżnicowania etnicznego Ameryk.",
    "options": [
      "Kolonizacja i napływ osadników z Europy",
      "Przymusowe sprowadzanie zniewolonych ludzi z Afryki",
      "Migracje ludności pochodzącej z Azji",
      "Powstanie Wielkiej Rafy Koralowej",
      "Wędrówki ludności przez obszar dzisiejszej Cieśniny Beringa"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Wymienione fale migracyjne, dobrowolne i przymusowe, ukształtowały mozaikę ludności Ameryk.",
    "image": "r07_kultura_ameryk.jpg"
  },
  {
    "id": "R07_AME_05",
    "section": "Ameryki — środowisko i ludność",
    "type": "true_false",
    "prompt": "W środkowej części USA sprzyjają tornadom spotkania ciepłego wilgotnego powietrza znad Zatoki Meksykańskiej z chłodnym powietrzem znad Gór Skalistych.",
    "options": null,
    "answer": true,
    "explanation": "Kontrast właściwości mas powietrza sprzyja powstawaniu potężnych chmur burzowych i tornad.",
    "image": "r07_tornado_nad_rownina.jpg"
  },
  {
    "id": "R07_AME_06",
    "section": "Ameryki — środowisko i ludność",
    "type": "fill_in",
    "prompt": "Obszar środkowych stanów USA szczególnie zagrożony tornadami nosi nazwę __________.",
    "options": null,
    "answer": [
      "Aleja Tornad"
    ],
    "explanation": "Aleja Tornad obejmuje m.in. Teksas, Oklahomę, Kansas i Nebraskę.",
    "altAnswers": [
      [
        "Aleja Tornad",
        "Alei Tornad",
        "Aleja tornad"
      ]
    ],
    "image": "r07_tornado_nad_rownina.jpg"
  },
  {
    "id": "R07_AME_07",
    "section": "Ameryki — środowisko i ludność",
    "type": "riddle",
    "prompt": "Jak nazywa się rdzenna ludność zamieszkująca m.in. arktyczne obszary Kanady i Alaski?",
    "options": null,
    "answer": "Inuici",
    "explanation": "Inuici należą do rdzennych mieszkańców obszarów arktycznych Ameryki Północnej.",
    "altAnswers": [
      "Inuici",
      "Inuit"
    ]
  },
  {
    "id": "R07_AME_08",
    "section": "Ameryki — środowisko i ludność",
    "type": "odd_one_out",
    "prompt": "Który obiekt nie jest niziną Ameryki Południowej: Nizina Orinoko, Nizina Amazonki, Nizina La Platy, Wyżyna Gujańska.",
    "options": null,
    "answer": "Wyżyna Gujańska",
    "explanation": "Wyżyna Gujańska jest wyżyną, natomiast pozostałe obiekty to niziny.",
    "image": "r07_mapa_fizyczna_ameryk.jpg"
  },
  {
    "id": "R07_AME_09",
    "section": "Ameryki — środowisko i ludność",
    "type": "scenario",
    "prompt": "Przyjeżdżasz do kanadyjskiej prowincji Quebec, w której widoczne jest dziedzictwo dawnej kolonizacji francuskiej. Który język pełni tam funkcję języka urzędowego?",
    "options": [
      "hiszpański",
      "portugalski",
      "francuski",
      "włoski",
      "hawajski",
      "niemiecki"
    ],
    "answer": 2,
    "explanation": "W Quebecu język francuski jest pozostałością po kolonii francuskiej."
  },
  {
    "id": "R07_AME_10",
    "section": "Ameryki — środowisko i ludność",
    "type": "match",
    "prompt": "Połącz zjawiska atmosferyczne i regiony z ich cechami.",
    "options": null,
    "answer": {
      "Tornado": "intensywność określa skala Fujity",
      "Cyklon tropikalny": "siłę określa skala Saffira-Simpsona",
      "Oko cyklonu": "obszar bardzo słabego wiatru w centrum wiru",
      "Aleja Tornad": "region środkowych stanów USA szczególnie zagrożony tornadami"
    },
    "explanation": "Intensywność tornad opisuje skala Fujity, a cyklonów tropikalnych — skala Saffira-Simpsona.",
    "left": [
      "Tornado",
      "Cyklon tropikalny",
      "Oko cyklonu",
      "Aleja Tornad"
    ],
    "right": [
      "region środkowych stanów USA szczególnie zagrożony tornadami",
      "obszar bardzo słabego wiatru w centrum wiru",
      "siłę określa skala Saffira-Simpsona",
      "intensywność określa skala Fujity"
    ],
    "image": "r07_cyklon_nad_oceanem.jpg"
  },
  {
    "id": "R07_AME_11",
    "section": "Ameryki — środowisko i ludność",
    "type": "sort",
    "prompt": "Przyporządkuj wielkie jednostki ukształtowania terenu do kontynentu.",
    "options": null,
    "answer": {
      "Ameryka Północna": [
        "Kordyliery",
        "Appalachy",
        "Nizina Zatokowa"
      ],
      "Ameryka Południowa": [
        "Andy",
        "Wyżyna Patagońska",
        "Nizina Orinoko"
      ]
    },
    "explanation": "Kordyliery, Appalachy i Nizina Zatokowa leżą w Ameryce Północnej, a Andy, Wyżyna Patagońska i Nizina Orinoko w Południowej.",
    "items": [
      "Nizina Orinoko",
      "Wyżyna Patagońska",
      "Andy",
      "Nizina Zatokowa",
      "Appalachy",
      "Kordyliery"
    ],
    "categories": [
      "Ameryka Północna",
      "Ameryka Południowa"
    ]
  },
  {
    "id": "R07_AME_12",
    "section": "Ameryki — środowisko i ludność",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania tornada we właściwej kolejności.",
    "options": null,
    "answer": [
      "Ciepłe i wilgotne powietrze znad Zatoki Meksykańskiej przemieszcza się ku północy",
      "Napotykają się masy ciepłego i chłodnego powietrza",
      "Unoszące się ciepłe powietrze ochładza się i skrapla",
      "Powstaje potężna chmura burzowa",
      "Tworzy się silny wir powietrza"
    ],
    "explanation": "Spotkanie mas powietrza i silne ruchy pionowe mogą doprowadzić do powstania chmury burzowej i tornada.",
    "items": [
      "Unoszące się ciepłe powietrze ochładza się i skrapla",
      "Powstaje potężna chmura burzowa",
      "Tworzy się silny wir powietrza",
      "Ciepłe i wilgotne powietrze znad Zatoki Meksykańskiej przemieszcza się ku północy",
      "Napotykają się masy ciepłego i chłodnego powietrza"
    ],
    "image": "r07_tornado_nad_rownina.jpg"
  },
  {
    "id": "R07_BRA_01",
    "section": "Brazylia i Amazonia",
    "type": "single_choice",
    "prompt": "Jak w Brazylii nazywa się ubogą dzielnicę powstającą często na peryferiach dużego miasta?",
    "options": [
      "barrio bajo",
      "favela",
      "laguna",
      "megalopolis",
      "barriada",
      "interior"
    ],
    "answer": 1,
    "explanation": "Favela to nazwa brazylijskiej dzielnicy nędzy; ogólnym określeniem takich dzielnic są slumsy.",
    "image": "r07_favela_panorama.jpg"
  },
  {
    "id": "R07_BRA_02",
    "section": "Brazylia i Amazonia",
    "type": "single_choice",
    "prompt": "Jak nazywa się stolica Brazylii założona od podstaw, której powstanie wspierało rozwój wnętrza kraju?",
    "options": [
      "Rio de Janeiro",
      "São Paulo",
      "Brasília",
      "Manaus",
      "Lima",
      "Bogota"
    ],
    "answer": 2,
    "explanation": "Przeniesienie stolicy z Rio de Janeiro do Brasílii miało wspomagać zagospodarowanie interioru."
  },
  {
    "id": "R07_BRA_03",
    "section": "Brazylia i Amazonia",
    "type": "single_choice",
    "prompt": "W dorzeczu której rzeki rozciąga się Amazonia?",
    "options": [
      "Parana",
      "Orinoko",
      "Missisipi",
      "Amazonka",
      "Rio Grande",
      "Darling"
    ],
    "answer": 3,
    "explanation": "Amazonia obejmuje dorzecze Amazonki, porośnięte rozległym wilgotnym lasem równikowym.",
    "image": "r07_amazonia_las.jpg"
  },
  {
    "id": "R07_BRA_04",
    "section": "Brazylia i Amazonia",
    "type": "multi_select",
    "prompt": "Wybierz główne przyczyny wycinania lasów Amazonii.",
    "options": [
      "Pozyskiwanie cennego drewna",
      "Zakładanie pastwisk i pól uprawnych",
      "Budowa dróg i osiedli",
      "Eksploatacja surowców mineralnych",
      "Zwiększanie powierzchni lasów pierwotnych"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Las wycinany jest m.in. pod rolnictwo, drogi, osadnictwo i eksploatację zasobów.",
    "image": "r07_wylesianie_amazonii.jpg"
  },
  {
    "id": "R07_BRA_05",
    "section": "Brazylia i Amazonia",
    "type": "true_false",
    "prompt": "Eksplozja miast to gwałtowny wzrost liczby mieszkańców miast wskutek napływu ludności m.in. ze wsi.",
    "options": null,
    "answer": true,
    "explanation": "Urbanizacji pozornej towarzyszy rozwój rozległych przedmieść i dzielnic nędzy.",
    "image": "r07_favela_panorama.jpg"
  },
  {
    "id": "R07_BRA_06",
    "section": "Brazylia i Amazonia",
    "type": "fill_in",
    "prompt": "Wilgotny las równikowy Amazonii określa się hiszpańskim słowem __________.",
    "options": null,
    "answer": [
      "selva"
    ],
    "explanation": "Selva to wilgotny las równikowy porastający Amazonkę i jej dorzecze.",
    "altAnswers": [
      [
        "selva",
        "selwą",
        "selva (las równikowy)"
      ]
    ],
    "image": "r07_amazonia_las.jpg"
  },
  {
    "id": "R07_BRA_07",
    "section": "Brazylia i Amazonia",
    "type": "riddle",
    "prompt": "Jak nazywa się zjawisko rozrostu miast, w którym wysokiemu wskaźnikowi urbanizacji towarzyszą rozległe ubogie przedmieścia?",
    "options": null,
    "answer": "urbanizacja pozorna",
    "explanation": "Urbanizacja pozorna wiąże się z rozrostem obszarów peryferyjnych i nasileniem problemów miejskich.",
    "altAnswers": [
      "urbanizacja pozorna",
      "urbanizacją pozorną"
    ]
  },
  {
    "id": "R07_BRA_08",
    "section": "Brazylia i Amazonia",
    "type": "odd_one_out",
    "prompt": "Które działanie nie przyczynia się do wylesiania Amazonii: pozyskiwanie drewna, zakładanie pastwisk, budowa dróg czy tworzenie rezerwatów przyrody?",
    "options": null,
    "answer": "tworzenie rezerwatów przyrody",
    "explanation": "Tworzenie rezerwatów służy ochronie przyrody, natomiast pozostałe działania mogą prowadzić do wycinania lasów.",
    "image": "r07_wylesianie_amazonii.jpg"
  },
  {
    "id": "R07_BRA_09",
    "section": "Brazylia i Amazonia",
    "type": "scenario",
    "prompt": "W dużym gospodarstwie rolnym w Brazylii zastąpiono pracę wielu ludzi maszynami. Część mieszkańców wsi nie może znaleźć pracy. Jaki może być prawdopodobny skutek społeczny?",
    "options": [
      "Masową migrację do wielkich miast",
      "Powstanie nowego lądolodu",
      "Zmniejszenie liczby przedmieść",
      "Zwiększenie liczby pracowników na polach",
      "Zanik transportu miejskiego",
      "Zmniejszenie powierzchni zabudowy"
    ],
    "answer": 0,
    "explanation": "Mechanizacja zmniejsza zapotrzebowanie na robotników rolnych i przyczynia się do odpływu mieszkańców wsi do miast."
  },
  {
    "id": "R07_BRA_10",
    "section": "Brazylia i Amazonia",
    "type": "match",
    "prompt": "Połącz nazwę z jej znaczeniem lub obszarem występowania.",
    "options": null,
    "answer": {
      "favela": "dzielnica nędzy w Brazylii",
      "barrio bajo": "dzielnica nędzy w Meksyku",
      "selva": "wilgotny las równikowy",
      "megalopolis": "obszar powstały z połączenia sąsiednich aglomeracji"
    },
    "explanation": "Terminy pochodzą z części poświęconych urbanizacji miast Ameryki Łacińskiej i środowisku Amazonii.",
    "left": [
      "favela",
      "barrio bajo",
      "selva",
      "megalopolis"
    ],
    "right": [
      "obszar powstały z połączenia sąsiednich aglomeracji",
      "wilgotny las równikowy",
      "dzielnica nędzy w Meksyku",
      "dzielnica nędzy w Brazylii"
    ]
  },
  {
    "id": "R07_BRA_11",
    "section": "Brazylia i Amazonia",
    "type": "sort",
    "prompt": "Podziel skutki zagospodarowywania Amazonii na korzyści gospodarcze i koszty środowiskowo-społeczne.",
    "options": null,
    "answer": {
      "Korzyści gospodarcze": [
        "Więcej gruntów pod uprawę",
        "Nowe drogi i połączenia transportowe",
        "Możliwość eksploatacji złóż"
      ],
      "Koszty środowiskowo-społeczne": [
        "Utrata siedlisk roślin i zwierząt",
        "Erozja gleby po usunięciu lasu",
        "Ograniczenie terenów życia rdzennej ludności"
      ]
    },
    "explanation": "Rozwój gospodarczy wnętrza kraju niesie korzyści, ale również straty przyrodnicze i zagrożenia dla rdzennych społeczności.",
    "items": [
      "Ograniczenie terenów życia rdzennej ludności",
      "Erozja gleby po usunięciu lasu",
      "Utrata siedlisk roślin i zwierząt",
      "Możliwość eksploatacji złóż",
      "Nowe drogi i połączenia transportowe",
      "Więcej gruntów pod uprawę"
    ],
    "categories": [
      "Korzyści gospodarcze",
      "Koszty środowiskowo-społeczne"
    ],
    "image": "r07_wylesianie_amazonii.jpg"
  },
  {
    "id": "R07_BRA_12",
    "section": "Brazylia i Amazonia",
    "type": "sequence",
    "prompt": "Ułóż w logicznej kolejności zjawiska prowadzące do powstawania slumsów.",
    "options": null,
    "answer": [
      "Mechanizacja pracy w dużych gospodarstwach rolnych",
      "Spadek zapotrzebowania na pracowników rolnych",
      "Migracje ludności ze wsi do miast",
      "Gwałtowny wzrost liczby mieszkańców miast",
      "Rozbudowa peryferyjnych dzielnic nędzy"
    ],
    "explanation": "Proces zaczyna się m.in. od braku pracy na wsi, a kończy eksplozją miast i rozrostem ubogich peryferii.",
    "items": [
      "Migracje ludności ze wsi do miast",
      "Gwałtowny wzrost liczby mieszkańców miast",
      "Rozbudowa peryferyjnych dzielnic nędzy",
      "Mechanizacja pracy w dużych gospodarstwach rolnych",
      "Spadek zapotrzebowania na pracowników rolnych"
    ],
    "image": "r07_favela_panorama.jpg"
  },
  {
    "id": "R07_USA_01",
    "section": "Stany Zjednoczone — gospodarka",
    "type": "single_choice",
    "prompt": "W którym sektorze gospodarki Stanów Zjednoczonych pracuje najwięcej osób?",
    "options": [
      "rolnictwo",
      "przemysł",
      "usługi",
      "leśnictwo",
      "rybołówstwo",
      "górnictwo"
    ],
    "answer": 2,
    "explanation": "W Stanach Zjednoczonych około 77% zatrudnionych pracuje w usługach, 22% w przemyśle i niecały 1% w rolnictwie, leśnictwie i rybołówstwie."
  },
  {
    "id": "R07_USA_02",
    "section": "Stany Zjednoczone — gospodarka",
    "type": "single_choice",
    "prompt": "W którym stanie USA położona jest Dolina Krzemowa, znana z przemysłu wysokiej technologii?",
    "options": [
      "Alaska",
      "Teksas",
      "Kalifornia",
      "Oklahoma",
      "Nebraska",
      "Kolorado"
    ],
    "answer": 2,
    "explanation": "Silicon Valley, czyli Dolina Krzemowa, to słynny kalifornijski okręg przemysłu high-tech.",
    "image": "r07_laboratorium_hightech.jpg"
  },
  {
    "id": "R07_USA_03",
    "section": "Stany Zjednoczone — gospodarka",
    "type": "single_choice",
    "prompt": "Co produkuje zakład Boeing w Everett niedaleko Seattle?",
    "options": [
      "produkcję samolotów",
      "produkcję cementu",
      "produkcję papieru",
      "wytop rudy żelaza",
      "produkcję cukru",
      "produkcję nawozów"
    ],
    "answer": 0,
    "explanation": "W Regionie Nadpacyficznym rozwinięty jest przemysł lotniczy, m.in. zakłady Boeing w Everett.",
    "image": "r07_regiony_usa.jpg"
  },
  {
    "id": "R07_USA_04",
    "section": "Stany Zjednoczone — gospodarka",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki sprzyjające lokalizacji zakładów high-tech w Stanach Zjednoczonych.",
    "options": [
      "Dostęp do wykwalifikowanych pracowników",
      "Współpraca z ośrodkami naukowymi",
      "Duże środki na badania i rozwój",
      "Dobre połączenia komunikacyjne",
      "Brak dostępu do laboratoriów i uczelni"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Przemysł wysokiej technologii wymaga kwalifikacji, zaplecza naukowego, kapitału i dostępności komunikacyjnej.",
    "image": "r07_laboratorium_hightech.jpg"
  },
  {
    "id": "R07_USA_05",
    "section": "Stany Zjednoczone — gospodarka",
    "type": "true_false",
    "prompt": "Stany Zjednoczone są członkiem zarówno Organizacji Narodów Zjednoczonych, jak i NATO.",
    "options": null,
    "answer": true,
    "explanation": "Obie organizacje są przykładami międzynarodowego zaangażowania Stanów Zjednoczonych."
  },
  {
    "id": "R07_USA_06",
    "section": "Stany Zjednoczone — gospodarka",
    "type": "fill_in",
    "prompt": "Skróconym angielskim określeniem przemysłu wysokiej technologii jest __________.",
    "options": null,
    "answer": [
      "high-tech"
    ],
    "explanation": "High-tech pochodzi od angielskiego high technology, czyli wysoka technologia.",
    "altAnswers": [
      [
        "high-tech",
        "high tech",
        "high technology"
      ]
    ],
    "image": "r07_laboratorium_hightech.jpg"
  },
  {
    "id": "R07_USA_07",
    "section": "Stany Zjednoczone — gospodarka",
    "type": "riddle",
    "prompt": "Jaki pierwiastek wykorzystywany przy produkcji półprzewodników dał nazwę Dolinie Krzemowej?",
    "options": null,
    "answer": "krzem",
    "explanation": "Nazwę Silicon Valley utworzono od angielskiego silicon, czyli krzem. Z krzemu produkuje się półprzewodniki i układy scalone.",
    "altAnswers": [
      "krzem",
      "Krzem"
    ]
  },
  {
    "id": "R07_USA_08",
    "section": "Stany Zjednoczone — gospodarka",
    "type": "odd_one_out",
    "prompt": "Który z produktów nie należy do typowych upraw Regionu Południowego USA: bawełna, cytrusy, trzcina cukrowa czy półprzewodniki?",
    "options": null,
    "answer": "półprzewodniki",
    "explanation": "Bawełna, cytrusy i trzcina cukrowa to uprawy; półprzewodniki są wyrobami przemysłu zaawansowanych technologii."
  },
  {
    "id": "R07_USA_09",
    "section": "Stany Zjednoczone — gospodarka",
    "type": "scenario",
    "prompt": "Firma projektująca mikroprocesory szuka miejsca na laboratorium blisko uczelni, kadry badawczej oraz innych firm technologicznych. Który czynnik lokalizacji ma dla niej największe znaczenie?",
    "options": [
      "Zaplecze naukowo-badawcze",
      "Liczba pastwisk",
      "Obecność wielkich złóż węgla brunatnego",
      "Rozległość lasów równikowych",
      "Dostęp do terenów bagiennych",
      "Duża odległość od lotnisk"
    ],
    "answer": 0,
    "explanation": "W high-tech ważne są wyniki badań, uczelnie, specjalistyczna kadra i współpraca między firmami.",
    "image": "r07_laboratorium_hightech.jpg"
  },
  {
    "id": "R07_USA_10",
    "section": "Stany Zjednoczone — gospodarka",
    "type": "match",
    "prompt": "Połącz sektory gospodarki USA z ich przybliżonym udziałem w zatrudnieniu.",
    "options": null,
    "answer": {
      "Usługi": "77%",
      "Przemysł": "22%",
      "Rolnictwo wraz z leśnictwem i rybołówstwem": "niecały 1%"
    },
    "explanation": "W gospodarce USA zatrudnienie koncentruje się w usługach; w rolnictwie, leśnictwie i rybołówstwie pracuje łącznie mniej niż 1% osób.",
    "left": [
      "Usługi",
      "Przemysł",
      "Rolnictwo wraz z leśnictwem i rybołówstwem"
    ],
    "right": [
      "niecały 1%",
      "22%",
      "77%"
    ]
  },
  {
    "id": "R07_USA_11",
    "section": "Stany Zjednoczone — gospodarka",
    "type": "sort",
    "prompt": "Rozdziel czynniki lokalizacji działalności gospodarczej na przyrodnicze i pozaprzyrodnicze.",
    "options": null,
    "answer": {
      "Przyrodnicze": [
        "Występowanie złóż surowców mineralnych",
        "Warunki klimatyczne sprzyjające uprawom",
        "Urodzajność gleb"
      ],
      "Pozaprzyrodnicze": [
        "Bliskość rynku zbytu",
        "Współpraca z uczelniami",
        "Infrastruktura drogowa i łączność"
      ]
    },
    "explanation": "Surowce, klimat i gleby są warunkami środowiska; rynki, nauka oraz infrastruktura są czynnikami pozaprzyrodniczymi.",
    "items": [
      "Infrastruktura drogowa i łączność",
      "Współpraca z uczelniami",
      "Bliskość rynku zbytu",
      "Urodzajność gleb",
      "Warunki klimatyczne sprzyjające uprawom",
      "Występowanie złóż surowców mineralnych"
    ],
    "categories": [
      "Przyrodnicze",
      "Pozaprzyrodnicze"
    ]
  },
  {
    "id": "R07_USA_12",
    "section": "Stany Zjednoczone — gospodarka",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z historii USA od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "answer": [
      "Początek rozwoju przemysłu wysokiej technologii w latach 50. XX wieku",
      "Upowszechnienie określenia high-tech w latach 60. XX wieku",
      "Atak na World Trade Center w 2001 roku"
    ],
    "explanation": "Rozwój przemysłu high-tech rozpoczął się w latach 50. XX wieku, nazwa rozpowszechniła się w latach 60., a atak na WTC nastąpił w 2001 r.",
    "items": [
      "Atak na World Trade Center w 2001 roku",
      "Początek rozwoju przemysłu wysokiej technologii w latach 50. XX wieku",
      "Upowszechnienie określenia high-tech w latach 60. XX wieku"
    ]
  },
  {
    "id": "R07_AUS_01",
    "section": "Australia i Oceania",
    "type": "single_choice",
    "prompt": "Które miasto jest stolicą Związku Australijskiego?",
    "options": [
      "Sydney",
      "Melbourne",
      "Canberra",
      "Perth",
      "Brisbane",
      "Adelaide"
    ],
    "answer": 2,
    "explanation": "Canberra jest stolicą Australii; Sydney to jej największe miasto.",
    "image": "r07_australia_mapa_fizyczna.jpg"
  },
  {
    "id": "R07_AUS_02",
    "section": "Australia i Oceania",
    "type": "single_choice",
    "prompt": "Jakie jest największe miasto Australii?",
    "options": [
      "Perth",
      "Melbourne",
      "Canberra",
      "Sydney",
      "Brisbane",
      "Alice Springs"
    ],
    "answer": 3,
    "explanation": "Mapa Australii oraz opis kraju wskazują Sydney jako największe miasto."
  },
  {
    "id": "R07_AUS_03",
    "section": "Australia i Oceania",
    "type": "single_choice",
    "prompt": "U którego wybrzeża Australii leży Wielka Rafa Koralowa?",
    "options": [
      "północno-wschodniego",
      "południowo-zachodniego",
      "zachodniego",
      "południowego",
      "północno-zachodniego",
      "południowo-wschodniego"
    ],
    "answer": 0,
    "explanation": "Wielka Rafa Koralowa znajduje się u północno-wschodnich wybrzeży Australii.",
    "image": "r07_rafa_koralowa.jpg"
  },
  {
    "id": "R07_AUS_04",
    "section": "Australia i Oceania",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady endemitów Australii.",
    "options": [
      "Kangur",
      "Koala",
      "Dziobak",
      "Eukaliptus",
      "Pszenica",
      "Trzcina cukrowa"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do australijskich endemitów należą m.in. kangury, koale, dziobaki, kolczatki i eukaliptusy."
  },
  {
    "id": "R07_AUS_05",
    "section": "Australia i Oceania",
    "type": "true_false",
    "prompt": "Ponad połowa powierzchni Australii leży na wysokości mniejszej niż 300 m n.p.m.",
    "options": null,
    "answer": true,
    "explanation": "Australia jest kontynentem o przewadze obszarów nizinnych: ponad połowa jej terenu leży poniżej 300 m n.p.m.",
    "image": "r07_australia_mapa_fizyczna.jpg"
  },
  {
    "id": "R07_AUS_06",
    "section": "Australia i Oceania",
    "type": "fill_in",
    "prompt": "Najwyższy szczyt Australii nosi nazwę Góra __________.",
    "options": null,
    "answer": [
      "Kościuszki"
    ],
    "explanation": "Paweł Edmund Strzelecki nazwał najwyższy szczyt Wielkich Gór Wododziałowych Górą Kościuszki.",
    "altAnswers": [
      [
        "Kościuszki",
        "Kosciuszki"
      ]
    ],
    "image": "r07_australia_mapa_fizyczna.jpg"
  },
  {
    "id": "R07_AUS_07",
    "section": "Australia i Oceania",
    "type": "riddle",
    "prompt": "Jak nazywa się studnia, w której woda podziemna podnosi się w otworze, lecz nie wypływa samoczynnie na powierzchnię?",
    "options": null,
    "answer": "studnia subartezyjska",
    "explanation": "W studni subartezyjskiej woda unosi się pod ciśnieniem, ale nie osiąga poziomu gruntu.",
    "altAnswers": [
      "studnia subartezyjska",
      "subartezyjska",
      "studnia subartezyjska (subartezyjska)"
    ],
    "image": "r07_wody_artezyjskie_schemat.jpg"
  },
  {
    "id": "R07_AUS_08",
    "section": "Australia i Oceania",
    "type": "odd_one_out",
    "prompt": "Który obiekt nie jest rzeką ani akwenem morskim: Murray, Darling, Zatoka Karpentaria czy Wyżyna Zachodnioaustralijska?",
    "options": null,
    "answer": "Wyżyna Zachodnioaustralijska",
    "explanation": "Murray i Darling to rzeki, Zatoka Karpentaria jest zatoką, a Wyżyna Zachodnioaustralijska formą ukształtowania lądu."
  },
  {
    "id": "R07_AUS_09",
    "section": "Australia i Oceania",
    "type": "scenario",
    "prompt": "Hodowca owiec pracuje w suchym wnętrzu Australii, gdzie rzeki płyną okresowo i brakuje opadów. Z jakiego rodzaju zasobów wody może korzystać?",
    "options": [
      "Wody artezyjskie",
      "Woda z regularnych opadów monsunowych przez cały rok",
      "Roztopiona pokrywa lądolodu",
      "Woda Wielkiej Rafy Koralowej",
      "Słona woda jezior bezodpływowych",
      "Woda Oceanu Indyjskiego"
    ],
    "answer": 0,
    "explanation": "Zasoby podziemne umożliwiają hodowlę na części suchych australijskich obszarów.",
    "image": "r07_wody_artezyjskie_schemat.jpg"
  },
  {
    "id": "R07_AUS_10",
    "section": "Australia i Oceania",
    "type": "match",
    "prompt": "Połącz pojęcie z opisem formy lub zjawiska przy australijskich wybrzeżach.",
    "options": null,
    "answer": {
      "wybrzeże namorzynowe": "brzeg porośnięty drzewami z korzeniami wynurzającymi się przy odpływie",
      "rafa koralowa": "budowla wytwarzana przez koralowce w ciepłym morzu",
      "łaguna": "płytka część morza oddzielona rafą",
      "atol": "pierścieniowa wyspa koralowa"
    },
    "explanation": "Namorzyny są formacją roślinną, a laguny, atole i rafy koralowe są związane ze środowiskiem morskim.",
    "left": [
      "wybrzeże namorzynowe",
      "rafa koralowa",
      "łaguna",
      "atol"
    ],
    "right": [
      "pierścieniowa wyspa koralowa",
      "płytka część morza oddzielona rafą",
      "budowla wytwarzana przez koralowce w ciepłym morzu",
      "brzeg porośnięty drzewami z korzeniami wynurzającymi się przy odpływie"
    ],
    "image": "r07_rafa_koralowa.jpg"
  },
  {
    "id": "R07_AUS_11",
    "section": "Australia i Oceania",
    "type": "sort",
    "prompt": "Podziel elementy na cechy środowiska Australii i konsekwencje dla jej gospodarki.",
    "options": null,
    "answer": {
      "Cechy środowiska": [
        "Mała suma opadów na dużym obszarze",
        "Duży udział terenów suchych",
        "Zasoby podziemnych wód artezyjskich"
      ],
      "Konsekwencje gospodarcze": [
        "Przewaga hodowli nad uprawą roślin",
        "Wykorzystywanie studni do pojenia zwierząt",
        "Niewielki udział gruntów ornych w suchym wnętrzu"
      ]
    },
    "explanation": "Suchy klimat ogranicza rolnictwo uprawowe; studnie artezyjskie umożliwiają część działalności hodowlanej.",
    "items": [
      "Niewielki udział gruntów ornych w suchym wnętrzu",
      "Wykorzystywanie studni do pojenia zwierząt",
      "Przewaga hodowli nad uprawą roślin",
      "Zasoby podziemnych wód artezyjskich",
      "Duży udział terenów suchych",
      "Mała suma opadów na dużym obszarze"
    ],
    "categories": [
      "Cechy środowiska",
      "Konsekwencje gospodarcze"
    ],
    "image": "r07_australia_mapa_fizyczna.jpg"
  },
  {
    "id": "R07_AUS_12",
    "section": "Australia i Oceania",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania atolu w prawidłowej kolejności.",
    "options": null,
    "answer": [
      "Na oceanie znajduje się niewielka wyspa wulkaniczna",
      "Wokół wyspy rozwijają się koralowce budujące rafę",
      "Wyspa stopniowo zanurza się w oceanie",
      "Pierwotna wyspa znika pod powierzchnią wody",
      "Pozostaje pierścieniowa budowla koralowa otaczająca wodę"
    ],
    "explanation": "Atol ma kształt pierścienia i wiąże się z rozwojem koralowców wokół stopniowo zanikającej wyspy.",
    "items": [
      "Wyspa stopniowo zanurza się w oceanie",
      "Pierwotna wyspa znika pod powierzchnią wody",
      "Pozostaje pierścieniowa budowla koralowa otaczająca wodę",
      "Na oceanie znajduje się niewielka wyspa wulkaniczna",
      "Wokół wyspy rozwijają się koralowce budujące rafę"
    ],
    "image": "r07_rafa_koralowa.jpg"
  },
  {
    "id": "R07_POL_01",
    "section": "Arktyka i Antarktyda",
    "type": "single_choice",
    "prompt": "Co oznacza nazwa Antarktyka?",
    "options": [
      "Sam kontynent wokół bieguna południowego",
      "Antarktydę wraz z otaczającymi wodami i wyspami do 60°S",
      "Ocean Arktyczny wraz z Grenlandią",
      "Tylko obszar bieguna północnego",
      "Całą strefę klimatów zwrotnikowych",
      "Tylko pływający pak lodowy"
    ],
    "answer": 1,
    "explanation": "Antarktyda to kontynent, a Antarktyka obejmuje kontynent z wodami i wyspami do 60° szerokości geograficznej południowej.",
    "image": "r07_stacja_antarktyczna.jpg"
  },
  {
    "id": "R07_POL_02",
    "section": "Arktyka i Antarktyda",
    "type": "single_choice",
    "prompt": "Która izoterma lipca może wyznaczać granicę Arktyki według kryterium klimatycznego?",
    "options": [
      "−10°C",
      "0°C",
      "+5°C",
      "+10°C",
      "+15°C",
      "+20°C"
    ],
    "answer": 3,
    "explanation": "Klimatyczną granicę Arktyki może wyznaczać lipcowa izoterma +10°C."
  },
  {
    "id": "R07_POL_03",
    "section": "Arktyka i Antarktyda",
    "type": "single_choice",
    "prompt": "Na której stacji naukowej odnotowano w 1983 r. rekordową temperaturę −89,2°C?",
    "options": [
      "Amundsen-Scott",
      "Wostok",
      "Arctowski",
      "Siedlecki",
      "Baza na Grenlandii",
      "Stacja w Quebecu"
    ],
    "answer": 1,
    "explanation": "Najniższą temperaturę powietrza zmierzono na stacji Wostok na Antarktydzie 21 sierpnia 1983 r.",
    "image": "r07_stacja_antarktyczna.jpg"
  },
  {
    "id": "R07_POL_04",
    "section": "Arktyka i Antarktyda",
    "type": "multi_select",
    "prompt": "Które zasady obowiązują na Antarktydzie na mocy Traktatu Antarktycznego i Protokołu Madryckiego?",
    "options": [
      "Pokojowe wykorzystanie kontynentu",
      "Prowadzenie badań naukowych",
      "Zakaz eksploatacji surowców mineralnych",
      "Ochrona środowiska przyrodniczego",
      "Swobodne składowanie odpadów",
      "Pierwszeństwo eksploatacji złóż przed nauką"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Przywołane dokumenty ograniczają działalność człowieka na Antarktydzie do celów pokojowych, kładą nacisk na badania i ochronę przyrody."
  },
  {
    "id": "R07_POL_05",
    "section": "Arktyka i Antarktyda",
    "type": "true_false",
    "prompt": "Pak lodowy oznacza wieloletni dryfujący lód morski występujący na obszarach okołobiegunowych.",
    "options": null,
    "answer": true,
    "explanation": "Określenia „pak lodowy”, „lód dryfujący” i „lód pakowy” dotyczą lodu morskiego przemieszczającego się po wodzie.",
    "image": "r07_pak_lodowy_arktyka.jpg"
  },
  {
    "id": "R07_POL_06",
    "section": "Arktyka i Antarktyda",
    "type": "fill_in",
    "prompt": "Obecnie dwa lądolody na Ziemi występują na Antarktydzie i na __________.",
    "options": null,
    "answer": [
      "Grenlandii"
    ],
    "explanation": "Współcześnie wielkie lądolody występują na Antarktydzie i Grenlandii.",
    "altAnswers": [
      [
        "Grenlandii",
        "Grenlandia",
        "Grenlandię"
      ]
    ]
  },
  {
    "id": "R07_POL_07",
    "section": "Arktyka i Antarktyda",
    "type": "riddle",
    "prompt": "Jak nazywa się dokument uzupełniający Traktat Antarktyczny, który ustanawia szczególne zasady ochrony środowiska Antarktydy?",
    "options": null,
    "answer": "Protokół Madrycki",
    "explanation": "Protokół Madrycki zakazuje m.in. eksploatacji minerałów i składowania odpadów.",
    "altAnswers": [
      "Protokół Madrycki",
      "Protokół o Ochronie Środowiska",
      "Protokół o ochronie środowiska"
    ]
  },
  {
    "id": "R07_POL_08",
    "section": "Arktyka i Antarktyda",
    "type": "odd_one_out",
    "prompt": "Który obszar nie należy do Arktyki: północna Kanada, Alaska, Grenlandia czy Półwysep Antarktyczny?",
    "options": null,
    "answer": "Półwysep Antarktyczny",
    "explanation": "Półwysep Antarktyczny leży na południu Ziemi, a pozostałe tereny na północy."
  },
  {
    "id": "R07_POL_09",
    "section": "Arktyka i Antarktyda",
    "type": "scenario",
    "prompt": "Ekipa poszukiwawcza znalazła bogate złoże rudy na Antarktydzie i planuje jego eksploatację. Jakie ograniczenie prawne uniemożliwia wydobycie?",
    "options": [
      "Zakaz wydobycia surowców wynikający z ochrony Antarktydy",
      "Zakaz prowadzenia jakichkolwiek badań naukowych",
      "Obowiązek handlu surowcami tylko latem",
      "Brak jakichkolwiek międzynarodowych uzgodnień",
      "Przekazanie całego kontynentu jednemu państwu",
      "Zakaz przebywania naukowców na kontynencie"
    ],
    "answer": 0,
    "explanation": "Traktat Antarktyczny i Protokół Madrycki regulują pokojowe użytkowanie kontynentu oraz ochronę jego zasobów.",
    "image": "r07_stacja_antarktyczna.jpg"
  },
  {
    "id": "R07_POL_10",
    "section": "Arktyka i Antarktyda",
    "type": "match",
    "prompt": "Połącz pojęcia z poprawnymi definicjami.",
    "options": null,
    "answer": {
      "Arktyka": "obszar wokół bieguna północnego",
      "Antarktyda": "kontynent wokół bieguna południowego",
      "Antarktyka": "kontynent południowy wraz z otaczającymi wodami i wyspami do 60°S",
      "pak lodowy": "wieloletni pływający lód morski"
    },
    "explanation": "Nazwy Arktyka, Antarktyda i Antarktyka oznaczają różne obszary; pak lodowy to zjawisko związane z lodem morskim.",
    "left": [
      "Arktyka",
      "Antarktyda",
      "Antarktyka",
      "pak lodowy"
    ],
    "right": [
      "wieloletni pływający lód morski",
      "kontynent południowy wraz z otaczającymi wodami i wyspami do 60°S",
      "kontynent wokół bieguna południowego",
      "obszar wokół bieguna północnego"
    ],
    "image": "r07_pak_lodowy_arktyka.jpg"
  },
  {
    "id": "R07_POL_11",
    "section": "Arktyka i Antarktyda",
    "type": "sort",
    "prompt": "Przyporządkuj obiekty i charakterystyczne elementy środowiska do obszaru polarnego.",
    "options": null,
    "answer": {
      "Arktyka": [
        "Ocean Arktyczny",
        "Grenlandia",
        "Pływający pak lodowy",
        "Inuici"
      ],
      "Antarktyda": [
        "Stacja Wostok",
        "Masyw Vinsona",
        "Półwysep Antarktyczny",
        "Biegun południowy"
      ]
    },
    "explanation": "W Arktyce dominują akweny morskie i obszary północnych lądów, natomiast Antarktyda jest kontynentem na południu.",
    "items": [
      "Biegun południowy",
      "Półwysep Antarktyczny",
      "Masyw Vinsona",
      "Stacja Wostok",
      "Inuici",
      "Pływający pak lodowy",
      "Grenlandia",
      "Ocean Arktyczny"
    ],
    "categories": [
      "Arktyka",
      "Antarktyda"
    ],
    "image": "r07_zorza_polarna.jpg"
  },
  {
    "id": "R07_POL_12",
    "section": "Arktyka i Antarktyda",
    "type": "sequence",
    "prompt": "Ułóż w logicznej kolejności skutki nasilenia efektu cieplarnianego dla obszarów polarnych.",
    "options": null,
    "answer": [
      "Do atmosfery trafiają zwiększone ilości gazów cieplarnianych",
      "Wzrasta średnia temperatura powietrza na Ziemi",
      "Zmniejsza się objętość lodu na Antarktydzie",
      "Podnosi się poziom wszechoceanu"
    ],
    "explanation": "Wzrost emisji gazów cieplarnianych nasila ocieplenie klimatu, co przyczynia się do zaniku lodu i podnoszenia poziomu mórz.",
    "items": [
      "Zmniejsza się objętość lodu na Antarktydzie",
      "Podnosi się poziom wszechoceanu",
      "Do atmosfery trafiają zwiększone ilości gazów cieplarnianych",
      "Wzrasta średnia temperatura powietrza na Ziemi"
    ]
  },
  {
    "id": "R07_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaką przybliżoną długość ma megalopolis BosWash?",
    "options": [
      "około 100 km",
      "około 500 km",
      "około 1000 km",
      "około 1500 km",
      "około 2000 km",
      "około 3000 km"
    ],
    "answer": 2,
    "explanation": "BosWash rozciąga się na wschodnim wybrzeżu USA na długości około 1000 km."
  },
  {
    "id": "R07_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaki procent powierzchni Amazonii znajduje się na terenie Brazylii?",
    "options": [
      "około 20%",
      "około 30%",
      "około 40%",
      "około 50%",
      "około 60%",
      "około 80%"
    ],
    "answer": 4,
    "explanation": "Na Brazylię przypada około 60% powierzchni Amazonii.",
    "image": "r07_amazonia_las.jpg"
  },
  {
    "id": "R07_HARD_03",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaką część powierzchni Australii zajmują łącznie obszary basenów artezyjskich?",
    "options": [
      "około 1/10",
      "około 1/5",
      "około 1/3",
      "około 1/2",
      "około 2/3",
      "prawie całość"
    ],
    "answer": 2,
    "explanation": "Baseny artezyjskie zajmują około jednej trzeciej powierzchni Australii.",
    "image": "r07_wody_artezyjskie_schemat.jpg"
  },
  {
    "id": "R07_HARD_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Wybierz wszystkie prawidłowe zestawienia miejsc i zjawisk.",
    "options": [
      "Everett koło Seattle — produkcja samolotów",
      "Alaska — wydobycie ropy naftowej",
      "Quebec — obecność języka francuskiego",
      "Rio de Janeiro — występowanie faveli",
      "Canberra — największa metropolia Australii",
      "Manaus — ośrodek na Antarktydzie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Połączenia są oparte odpowiednio na opisach Regionu Nadpacyficznego, Quebecu i miast Brazylii."
  },
  {
    "id": "R07_HARD_05",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz negatywne skutki wylesiania Amazonii.",
    "options": [
      "Zagrożenie bioróżnorodności",
      "Erozja gleby",
      "Zmniejszanie terenów życia rdzennych społeczności",
      "Zmiany obiegu wody w atmosferze",
      "Wzrost powierzchni selvy",
      "Powstanie kolejnych lądolodów"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Autor zwraca uwagę na konsekwencje ekologiczne oraz zagrożenie dla kultury i życia rdzennej ludności.",
    "image": "r07_wylesianie_amazonii.jpg"
  },
  {
    "id": "R07_HARD_06",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Około dwóch trzecich powierzchni Oceanu Arktycznego leży na szelfie kontynentalnym.",
    "options": null,
    "answer": true,
    "explanation": "Ocean Arktyczny jest w większości płytki; około dwóch trzecich jego powierzchni leży na szelfie kontynentalnym.",
    "image": "r07_pak_lodowy_arktyka.jpg"
  },
  {
    "id": "R07_HARD_07",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Rekord temperatury powietrza zmierzony na stacji Wostok wyniósł __________°C w roku __________.",
    "options": null,
    "answer": [
      "−89,2",
      "1983"
    ],
    "explanation": "Najniższą przytoczoną temperaturę, −89,2°C, zarejestrowano na stacji Wostok 21 sierpnia 1983 r.",
    "altAnswers": [
      [
        "−89,2",
        "-89,2",
        "−89.2",
        "-89.2"
      ],
      [
        "1983",
        "1983 r."
      ]
    ],
    "image": "r07_stacja_antarktyczna.jpg"
  },
  {
    "id": "R07_HARD_08",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Kartograf, któremu przypisuje się prawdopodobne wprowadzenie nazwy Ameryka, nosił nazwisko __________; uczczonym podróżnikiem był Amerigo __________.",
    "options": null,
    "answer": [
      "Waldseemüller",
      "Vespucci"
    ],
    "explanation": "Nazwa Ameryka została prawdopodobnie wprowadzona przez Martina Waldseemüllera na cześć Ameriga Vespucciego.",
    "altAnswers": [
      [
        "Waldseemüller",
        "Waldseemuller",
        "Waldseemueller"
      ],
      [
        "Vespucci",
        "Wespucci"
      ]
    ]
  },
  {
    "id": "R07_HARD_09",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak brzmi greckie słowo oznaczające niedźwiedzia, od którego wywodzi się nazwa Arktyka?",
    "options": null,
    "answer": "arctos",
    "explanation": "Nazwa Arktyka wywodzi się od greckiego słowa „arctos”, oznaczającego niedźwiedzia, i wiąże się z gwiazdozbiorem Wielkiej Niedźwiedzicy.",
    "altAnswers": [
      "arctos",
      "arktos"
    ]
  },
  {
    "id": "R07_HARD_10",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Który stan nie należy do Alei Tornad: Kansas, Oklahoma, Nebraska czy Kalifornia?",
    "options": null,
    "answer": "Kalifornia",
    "explanation": "Kansas, Oklahoma i Nebraska są częścią Alei Tornad; Kalifornia leży poza tym regionem."
  },
  {
    "id": "R07_HARD_11",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Geograf chce wyznaczyć granicę Arktyki według kryterium botanicznego, a nie astronomicznego ani klimatycznego. Który wskaźnik powinien wybrać?",
    "options": [
      "Północną granicę zwartych lasów przechodzących w tundrę",
      "Izotermę lipca +10°C",
      "Północne koło podbiegunowe",
      "Zasięg stref uprawy trzciny cukrowej",
      "Granice pływających pól koralowych",
      "Kontur lądolodu Antarktydy"
    ],
    "answer": 0,
    "explanation": "Kryterium botaniczne bazuje na granicy zwartych lasów i tundry, a izoterma lipca +10°C dotyczy kryterium klimatycznego."
  },
  {
    "id": "R07_HARD_12",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz historyczne określenia ludności mieszanej z odpowiadającymi im definicjami.",
    "options": null,
    "answer": {
      "Metysi": "potomkowie osób pochodzenia europejskiego i rdzennoamerykańskiego",
      "Mulaci": "potomkowie osób pochodzenia europejskiego i afrykańskiego",
      "Zambosi": "potomkowie osób pochodzenia afrykańskiego i rdzennoamerykańskiego"
    },
    "explanation": "Historyczne określenia odnoszą się do zróżnicowanego pochodzenia ludności Ameryk. Współczesne tożsamości etniczne są znacznie bardziej złożone.",
    "left": [
      "Metysi",
      "Mulaci",
      "Zambosi"
    ],
    "right": [
      "potomkowie osób pochodzenia afrykańskiego i rdzennoamerykańskiego",
      "potomkowie osób pochodzenia europejskiego i afrykańskiego",
      "potomkowie osób pochodzenia europejskiego i rdzennoamerykańskiego"
    ]
  },
  {
    "id": "R07_HARD_13",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj obiekty do właściwych obszarów geograficznych.",
    "options": null,
    "answer": {
      "Ameryka Północna": [
        "Aleja Tornad",
        "Appalachy"
      ],
      "Ameryka Południowa": [
        "Nizina Orinoko",
        "Selva Amazonii"
      ],
      "Australia": [
        "Rzeka Darling",
        "Wielkie Góry Wododziałowe"
      ],
      "Antarktyda": [
        "Stacja Wostok",
        "Masyw Vinsona"
      ]
    },
    "explanation": "Poprawne przyporządkowanie wymaga rozpoznania położenia obiektów na różnych kontynentach.",
    "items": [
      "Masyw Vinsona",
      "Stacja Wostok",
      "Wielkie Góry Wododziałowe",
      "Rzeka Darling",
      "Selva Amazonii",
      "Nizina Orinoko",
      "Appalachy",
      "Aleja Tornad"
    ],
    "categories": [
      "Ameryka Północna",
      "Ameryka Południowa",
      "Australia",
      "Antarktyda"
    ],
    "image": "r07_mapa_fizyczna_ameryk.jpg"
  },
  {
    "id": "R07_HARD_14",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przypisz procesy i zjawiska do odpowiednich grup problemów.",
    "options": null,
    "answer": {
      "Przyczyny deforestacji Amazonii": [
        "Pozyskiwanie mahoniu",
        "Zakładanie pastwisk dla bydła"
      ],
      "Przyczyny rozrostu miast Brazylii": [
        "Mechanizacja pracy w rolnictwie",
        "Migracja ludności ze wsi"
      ],
      "Zagrożenia obszarów polarnych": [
        "Emisja gazów cieplarnianych",
        "Uwalnianie freonów"
      ]
    },
    "explanation": "Wylesianie wiąże się z użytkowaniem lasu, urbanizacja z sytuacją wsi i migracją, a zagrożenia polarne z emisją gazów cieplarnianych i niszczeniem warstwy ozonowej.",
    "items": [
      "Uwalnianie freonów",
      "Emisja gazów cieplarnianych",
      "Migracja ludności ze wsi",
      "Mechanizacja pracy w rolnictwie",
      "Zakładanie pastwisk dla bydła",
      "Pozyskiwanie mahoniu"
    ],
    "categories": [
      "Przyczyny deforestacji Amazonii",
      "Przyczyny rozrostu miast Brazylii",
      "Zagrożenia obszarów polarnych"
    ]
  },
  {
    "id": "R07_HARD_15",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż chronologicznie procesy i wydarzenia związane z zasiedlaniem Ameryk.",
    "options": null,
    "answer": [
      "Dotarcie Wikingów do wybrzeży Ameryki",
      "Wyprawa Krzysztofa Kolumba i wzrost osadnictwa europejskiego",
      "Rozpoczęcie od XVI wieku przymusowego sprowadzania Afrykanów do pracy niewolniczej",
      "Nasilenie imigracji z Azji do USA po II wojnie światowej"
    ],
    "explanation": "Wyprawy Wikingów poprzedzały wyprawy Kolumba, później nasiliło się sprowadzanie zniewolonych osób z Afryki, a po II wojnie światowej wzrosła imigracja z Azji.",
    "items": [
      "Rozpoczęcie od XVI wieku przymusowego sprowadzania Afrykanów do pracy niewolniczej",
      "Nasilenie imigracji z Azji do USA po II wojnie światowej",
      "Dotarcie Wikingów do wybrzeży Ameryki",
      "Wyprawa Krzysztofa Kolumba i wzrost osadnictwa europejskiego"
    ]
  }
];

const KID_PROMPTS = {
  "R07_AME_01": "Jak nazywa się obszar obejmujący Meksyk i kraje na południe od niego?",
  "R07_AME_05": "Czy spotkanie ciepłego i zimnego powietrza może sprzyjać tornadom w USA?",
  "R07_AME_06": "Jak nazywa się część USA, gdzie bardzo często występują tornada: __________?",
  "R07_BRA_01": "Jak nazywa się uboga dzielnica wielkiego miasta w Brazylii?",
  "R07_BRA_05": "Czy eksplozja miast oznacza szybki wzrost liczby ich mieszkańców?",
  "R07_USA_01": "W jakiej części gospodarki USA pracuje najwięcej osób?",
  "R07_USA_06": "Jak po angielsku mówi się krótko na przemysł wysokiej technologii: __________?",
  "R07_AUS_01": "Które miasto jest stolicą Australii?",
  "R07_AUS_05": "Czy ponad połowa Australii leży niżej niż 300 m n.p.m.?",
  "R07_POL_05": "Czy pak lodowy to pływający lód morski?",
  "R07_POL_06": "Dwa lądolody są na Antarktydzie i na __________.",
  "R07_HARD_02": "Jaka część Amazonii leży w Brazylii?"
};

const chapter = {
  id: "r07",
  number: 7,
  title: "Ameryki, Australia i obszary okołobiegunowe",
  icon: "🌍",
  sectionOrder: ["Ameryki — środowisko i ludność", "Brazylia i Amazonia", "Stany Zjednoczone — gospodarka", "Australia i Oceania", "Arktyka i Antarktyda"],
  sectionIcons: {"Ameryki — środowisko i ludność": "🌎", "Brazylia i Amazonia": "🌳", "Stany Zjednoczone — gospodarka": "🏭", "Australia i Oceania": "🦘", "Arktyka i Antarktyda": "🧊"},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
