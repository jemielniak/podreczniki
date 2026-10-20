// Skróty sekcji (do identyfikatorów ćwiczeń):
//   GEO = Położenie i ukształtowanie Europy
//   KLI = Klimat Europy i dane statystyczne
//   LUD = Gęstość zaludnienia i źródła energii
//   ROL = Sektory gospodarki i rolnictwo
//   USL = Przemysł, usługi i transport
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_GEO_01",
    "section": "Położenie i ukształtowanie Europy",
    "type": "single_choice",
    "prompt": "Który ocean stanowi zachodnią granicę Europy? ",
    "options": [
      "Ocean Indyjski",
      "Ocean Atlantycki",
      "Ocean Spokojny",
      "Ocean Południowy",
      "Ocean Arktyczny",
      "Morze Kaspijskie"
    ],
    "image": "r04_granice_europy.jpg",
    "answer": 1,
    "explanation": "Zachodnie krańce Europy sąsiadują z Oceanem Atlantyckim."
  },
  {
    "id": "R04_GEO_02",
    "section": "Położenie i ukształtowanie Europy",
    "type": "multi_select",
    "prompt": "Na których półkulach jest położona Europa?",
    "options": [
      "północnej",
      "wschodniej",
      "zachodniej",
      "południowej"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Europa leży na półkuli północnej, wschodniej i zachodniej."
  },
  {
    "id": "R04_GEO_03",
    "section": "Położenie i ukształtowanie Europy",
    "type": "true_false",
    "prompt": "Europa i Azja tworzą wspólnie wielki obszar lądowy zwany Eurazją.",
    "options": null,
    "answer": true,
    "explanation": "Europa wraz z Azją tworzy Eurazję; wydzielenie Europy jako osobnego kontynentu ma charakter kulturowy."
  },
  {
    "id": "R04_GEO_04",
    "section": "Położenie i ukształtowanie Europy",
    "type": "fill_in",
    "prompt": "Europa wraz z Azją tworzy __________.",
    "options": null,
    "altAnswers": [
      [
        "Eurazję",
        "Eurazja"
      ]
    ],
    "answer": [
      "Eurazję"
    ],
    "explanation": "Eurazja to zwarty obszar lądowy utworzony przez Europę i Azję."
  },
  {
    "id": "R04_GEO_05",
    "section": "Położenie i ukształtowanie Europy",
    "type": "riddle",
    "prompt": "Jak nazywa się najwyższy szczyt Alp?",
    "options": null,
    "altAnswers": [
      "Mont Blanc"
    ],
    "answer": "Mont Blanc",
    "explanation": "Mont Blanc, o wysokości około 4810 m n.p.m., jest najwyższym szczytem Alp."
  },
  {
    "id": "R04_GEO_06",
    "section": "Położenie i ukształtowanie Europy",
    "type": "odd_one_out",
    "prompt": "Wskaż obiekt, który nie jest cieśniną ani morzem oddzielającym Europę od Azji: Bosfor, Dardanele, Morze Marmara, Cieśnina Gibraltarska.",
    "options": null,
    "image": "r04_granice_europy.jpg",
    "answer": "Cieśnina Gibraltarska",
    "explanation": "Cieśnina Gibraltarska oddziela Europę od Afryki; pozostałe wymienione akweny rozdzielają Europę i Azję."
  },
  {
    "id": "R04_GEO_07",
    "section": "Położenie i ukształtowanie Europy",
    "type": "scenario",
    "prompt": "W trakcie wycieczki po Finlandii widzisz liczne jeziora i wzgórza z osadów skalnych. Który proces wyjaśnia ich występowanie?",
    "options": [
      "działalność lądolodu",
      "powstawanie raf koralowych",
      "erozja pustynna",
      "zjawiska pływowe mórz",
      "wylewy lawy",
      "osadzanie popiołu z czynnych wulkanów"
    ],
    "image": "r04_krajobraz_pojezierza.jpg",
    "answer": 0,
    "explanation": "Dawny lądolód pozostawił wały, rynny i nieprzepuszczalne osady sprzyjające powstawaniu jezior."
  },
  {
    "id": "R04_GEO_08",
    "section": "Położenie i ukształtowanie Europy",
    "type": "match",
    "prompt": "Połącz orogenezę z przykładowym pasmem górskim.",
    "options": null,
    "left": [
      "orogeneza kaledońska",
      "orogeneza hercyńska",
      "orogeneza alpejska"
    ],
    "right": [
      "Karpaty",
      "Góry Skandynawskie",
      "Ural"
    ],
    "image": "r04_tektonika_europy.jpg",
    "answer": {
      "orogeneza kaledońska": "Góry Skandynawskie",
      "orogeneza hercyńska": "Ural",
      "orogeneza alpejska": "Karpaty"
    },
    "explanation": "Góry Skandynawskie zalicza się do kaledonidów, Ural do hercynidów, a Karpaty do gór orogenezy alpejskiej."
  },
  {
    "id": "R04_GEO_09",
    "section": "Położenie i ukształtowanie Europy",
    "type": "sort",
    "prompt": "Przyporządkuj wymienione formy terenu do nizin albo gór.",
    "options": null,
    "items": [
      "Karpaty",
      "Nizina Panońska",
      "Ural",
      "Nizina Wschodnioeuropejska",
      "Alpy",
      "Nizina Padańska"
    ],
    "categories": [
      "niziny",
      "góry"
    ],
    "image": "r04_rzezba_europy.jpg",
    "answer": {
      "niziny": [
        "Nizina Wschodnioeuropejska",
        "Nizina Padańska",
        "Nizina Panońska"
      ],
      "góry": [
        "Alpy",
        "Karpaty",
        "Ural"
      ]
    },
    "explanation": "Alpy, Karpaty i Ural są pasmami górskimi, a pozostałe obiekty to niziny."
  },
  {
    "id": "R04_GEO_10",
    "section": "Położenie i ukształtowanie Europy",
    "type": "sequence",
    "prompt": "Uszereguj orogenezy od najstarszej do najmłodszej.",
    "options": null,
    "items": [
      "orogeneza alpejska",
      "orogeneza kaledońska",
      "orogeneza hercyńska"
    ],
    "answer": [
      "orogeneza kaledońska",
      "orogeneza hercyńska",
      "orogeneza alpejska"
    ],
    "explanation": "Orogeneza kaledońska poprzedzała hercyńską w paleozoiku, a najmłodszą z tych trzech jest orogeneza alpejska."
  },
  {
    "id": "R04_GEO_11",
    "section": "Położenie i ukształtowanie Europy",
    "type": "single_choice",
    "prompt": "Ile wynosi w przybliżeniu średnia wysokość Europy?",
    "options": [
      "92 m n.p.m.",
      "192 m n.p.m.",
      "292 m n.p.m.",
      "392 m n.p.m.",
      "492 m n.p.m.",
      "592 m n.p.m."
    ],
    "answer": 2,
    "explanation": "Średnia wysokość kontynentu wynosi 292 m n.p.m."
  },
  {
    "id": "R04_GEO_12",
    "section": "Położenie i ukształtowanie Europy",
    "type": "multi_select",
    "prompt": "Które informacje dotyczące Europy są prawdziwe?",
    "options": [
      "Jej linia brzegowa ma około 38 tys. km.",
      "Większość kontynentu stanowią wysokie góry.",
      "Około 1/4 powierzchni zajmują półwyspy.",
      "Zajmuje większą powierzchnię niż Azja.",
      "Wyspy zajmują 7,5% powierzchni lądu."
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Linia brzegowa Europy ma około 38 tys. km, półwyspy zajmują około 1/4 powierzchni, a wyspy 7,5%."
  },
  {
    "id": "R04_KLI_01",
    "section": "Klimat Europy i dane statystyczne",
    "type": "single_choice",
    "prompt": "Która strefa klimatyczna zajmuje największą część Europy?",
    "options": [
      "podzwrotnikowa",
      "umiarkowana",
      "zwrotnikowa",
      "równikowa",
      "podrównikowa",
      "okołobiegunowa"
    ],
    "image": "r04_strefy_klimatyczne.jpg",
    "answer": 1,
    "explanation": "Większość kontynentu leży w strefie umiarkowanej."
  },
  {
    "id": "R04_KLI_02",
    "section": "Klimat Europy i dane statystyczne",
    "type": "multi_select",
    "prompt": "Które czynniki kształtują klimat Europy?",
    "options": [
      "szerokość geograficzna",
      "prądy morskie",
      "nazwa stolicy państwa",
      "wysokość nad poziomem morza",
      "ukształtowanie terenu",
      "rozkład lądów i mórz"
    ],
    "answer": [
      0,
      1,
      3,
      4,
      5
    ],
    "explanation": "Na klimat Europy wpływają m.in. szerokość geograficzna, rozkład lądów i mórz, prądy morskie, wysokość nad poziomem morza oraz ukształtowanie terenu."
  },
  {
    "id": "R04_KLI_03",
    "section": "Klimat Europy i dane statystyczne",
    "type": "true_false",
    "prompt": "Ciepły Prąd Zatokowy obniża średnią roczną temperaturę powietrza na zachodzie Europy.",
    "options": null,
    "answer": false,
    "explanation": "Ciepły Prąd Zatokowy i jego dalszy ciąg podwyższają średnią roczną temperaturę i sprzyjają większym opadom."
  },
  {
    "id": "R04_KLI_04",
    "section": "Klimat Europy i dane statystyczne",
    "type": "fill_in",
    "prompt": "W górach temperatura powietrza maleje średnio o __________ °C na każde 100 m wysokości.",
    "options": null,
    "altAnswers": [
      [
        "0,6",
        "0.6",
        "0,6°C",
        "0,6 stopnia"
      ]
    ],
    "answer": [
      "0,6"
    ],
    "explanation": "W troposferze temperatura powietrza spada średnio o około 0,6°C na każde 100 m wysokości."
  },
  {
    "id": "R04_KLI_05",
    "section": "Klimat Europy i dane statystyczne",
    "type": "riddle",
    "prompt": "Jak nazywa się polski urząd, który gromadzi i udostępnia dane statystyczne? Podaj skrót.",
    "options": null,
    "altAnswers": [
      "GUS",
      "Główny Urząd Statystyczny"
    ],
    "answer": "GUS",
    "explanation": "Skrót GUS oznacza Główny Urząd Statystyczny."
  },
  {
    "id": "R04_KLI_06",
    "section": "Klimat Europy i dane statystyczne",
    "type": "odd_one_out",
    "prompt": "Wskaż przedmiot, który nie służy do prezentacji danych statystycznych: tabela, wykres, infografika, kompas.",
    "options": null,
    "answer": "kompas",
    "explanation": "Tabele, wykresy, mapy i infografiki służą do prezentowania danych; kompas jest przyrządem nawigacyjnym."
  },
  {
    "id": "R04_KLI_07",
    "section": "Klimat Europy i dane statystyczne",
    "type": "scenario",
    "prompt": "Mieszkasz blisko Atlantyku. Zimy są łagodne, a roczna amplituda temperatury niewielka. Z którą odmianą klimatu wiąże się ten opis?",
    "options": [
      "morską",
      "kontynentalną",
      "pustynną",
      "wysokogórską",
      "równikową",
      "polarną"
    ],
    "image": "r04_klimatogramy_europy.jpg",
    "answer": 0,
    "explanation": "Bliskość oceanu sprzyja klimatowi morskiemu o stosunkowo małej amplitudzie rocznej temperatury."
  },
  {
    "id": "R04_KLI_08",
    "section": "Klimat Europy i dane statystyczne",
    "type": "match",
    "prompt": "Połącz miasto z reprezentowaną strefą klimatyczną.",
    "options": null,
    "left": [
      "Palermo",
      "Suwałki",
      "Murmańsk"
    ],
    "right": [
      "okołobiegunowa",
      "podzwrotnikowa",
      "umiarkowana"
    ],
    "image": "r04_klimatogramy_europy.jpg",
    "answer": {
      "Palermo": "podzwrotnikowa",
      "Suwałki": "umiarkowana",
      "Murmańsk": "okołobiegunowa"
    },
    "explanation": "Klimatogramy wybranych miejscowości obrazują cechy różnych stref klimatycznych Europy."
  },
  {
    "id": "R04_KLI_09",
    "section": "Klimat Europy i dane statystyczne",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do morskiej lub kontynentalnej odmiany klimatu.",
    "options": null,
    "items": [
      "większa roczna amplituda temperatury",
      "większa wilgotność powietrza",
      "silniejszy wpływ rozległych lądów",
      "łagodniejsze zimy",
      "niewielka roczna amplituda temperatury",
      "większe różnice między latem a zimą"
    ],
    "categories": [
      "klimat morski",
      "klimat kontynentalny"
    ],
    "answer": {
      "klimat morski": [
        "łagodniejsze zimy",
        "niewielka roczna amplituda temperatury",
        "większa wilgotność powietrza"
      ],
      "klimat kontynentalny": [
        "większa roczna amplituda temperatury",
        "większe różnice między latem a zimą",
        "silniejszy wpływ rozległych lądów"
      ]
    },
    "explanation": "Odmiana morska oznacza mniejsze amplitudy i większą wilgotność, natomiast kontynentalna wiąże się z większymi wahaniami temperatury."
  },
  {
    "id": "R04_KLI_10",
    "section": "Klimat Europy i dane statystyczne",
    "type": "sequence",
    "prompt": "Ułóż strefy klimatyczne Europy w kolejności od południa ku północy.",
    "options": null,
    "items": [
      "okołobiegunowa",
      "podzwrotnikowa",
      "umiarkowana"
    ],
    "image": "r04_strefy_klimatyczne.jpg",
    "answer": [
      "podzwrotnikowa",
      "umiarkowana",
      "okołobiegunowa"
    ],
    "explanation": "Na południu występuje strefa podzwrotnikowa, dalej umiarkowana, a najdalej na północy okołobiegunowa."
  },
  {
    "id": "R04_KLI_11",
    "section": "Klimat Europy i dane statystyczne",
    "type": "scenario",
    "prompt": "Odczytujesz wykres przedstawiający produkcję energii w GWh. Co trzeba sprawdzić, aby prawidłowo zinterpretować wysokość słupków?",
    "options": [
      "tylko wielkość papieru",
      "nazwisko rysownika",
      "opisy osi i jednostki",
      "kolor ramki podręcznika",
      "kolejność stron",
      "liczbę podpisów pod zdjęciami"
    ],
    "image": "r04_wykres_statystyczny.jpg",
    "answer": 2,
    "explanation": "Przy interpretacji wykresu należy zapoznać się z tytułem, podpisami osi, jednostkami i legendą."
  },
  {
    "id": "R04_KLI_12",
    "section": "Klimat Europy i dane statystyczne",
    "type": "single_choice",
    "prompt": "Dlaczego do środkowej Europy mogą swobodnie napływać masy powietrza znad Atlantyku i Azji?",
    "options": [
      "Ponieważ wszędzie leżą wysokie góry.",
      "Ponieważ zanikły wszystkie prądy morskie.",
      "Z powodu dużej liczby czynnych wulkanów.",
      "Z powodu położenia na równiku.",
      "Ze względu na rozległy równoleżnikowy pas nizin.",
      "Ponieważ morza mają jednakową temperaturę."
    ],
    "answer": 4,
    "explanation": "Równoleżnikowy pas nizin od Francji po Rosję ułatwia przemieszczanie się mas powietrza."
  },
  {
    "id": "R04_LUD_01",
    "section": "Gęstość zaludnienia i źródła energii",
    "type": "single_choice",
    "prompt": "Co wyraża wskaźnik gęstości zaludnienia?",
    "options": [
      "liczbę osób na 1 km²",
      "liczbę urodzeń w roku",
      "liczbę ludności całego kontynentu",
      "liczbę rodzin w województwie",
      "udział ludności miejskiej w procentach",
      "liczbę miejsc pracy w rolnictwie"
    ],
    "image": "r04_mapa_gestosci_zaludnienia.jpg",
    "answer": 0,
    "explanation": "Gęstość zaludnienia to liczba mieszkańców przypadająca zazwyczaj na 1 km² powierzchni."
  },
  {
    "id": "R04_LUD_02",
    "section": "Gęstość zaludnienia i źródła energii",
    "type": "multi_select",
    "prompt": "Jakie warunki przyrodnicze sprzyjają większej gęstości zaludnienia?",
    "options": [
      "żyzne gleby",
      "łagodny klimat",
      "równinne ukształtowanie terenu",
      "częste długotrwałe susze",
      "złoża surowców mineralnych",
      "gleby bardzo niskiej jakości"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Wysokiej gęstości zaludnienia sprzyjają m.in. żyzne gleby, łagodny klimat, równinne tereny i dostęp do surowców."
  },
  {
    "id": "R04_LUD_03",
    "section": "Gęstość zaludnienia i źródła energii",
    "type": "true_false",
    "prompt": "Ludność Polski jest rozmieszczona równomiernie na całym obszarze kraju.",
    "options": null,
    "image": "r04_mapa_gestosci_zaludnienia.jpg",
    "answer": false,
    "explanation": "Ludność jest rozmieszczona nierównomiernie, a jej duże skupiska występują w miastach i ich otoczeniu."
  },
  {
    "id": "R04_LUD_04",
    "section": "Gęstość zaludnienia i źródła energii",
    "type": "fill_in",
    "prompt": "W 2019 r. średnia gęstość zaludnienia Polski wynosiła __________ osób na km².",
    "options": null,
    "altAnswers": [
      [
        "123",
        "123 os./km2",
        "123 os./km²"
      ]
    ],
    "answer": [
      "123"
    ],
    "explanation": "W 2019 r. średnia gęstość zaludnienia Polski wynosiła około 123 osób na km²."
  },
  {
    "id": "R04_LUD_05",
    "section": "Gęstość zaludnienia i źródła energii",
    "type": "riddle",
    "prompt": "Jak nazywa się różnicowanie źródeł energii elektrycznej, żeby nie opierać się tylko na jednym z nich?",
    "options": null,
    "altAnswers": [
      "dywersyfikacja",
      "dywersyfikacja źródeł energii"
    ],
    "answer": "dywersyfikacja",
    "explanation": "Dywersyfikacja oznacza zróżnicowanie źródeł wykorzystywanych do produkcji energii."
  },
  {
    "id": "R04_LUD_06",
    "section": "Gęstość zaludnienia i źródła energii",
    "type": "odd_one_out",
    "prompt": "Wskaż źródło energii nieodnawialnej: wiatr, słońce, woda, gaz ziemny.",
    "options": null,
    "image": "r04_elektrownie_odnawialne.jpg",
    "answer": "gaz ziemny",
    "explanation": "Gaz ziemny jest paliwem kopalnym, natomiast wiatr, promieniowanie słoneczne i energia wody należą do odnawialnych źródeł energii."
  },
  {
    "id": "R04_LUD_07",
    "section": "Gęstość zaludnienia i źródła energii",
    "type": "scenario",
    "prompt": "Państwo ma górzystą rzeźbę terenu i bardzo wiele rzek. W 2019 r. ponad 90% energii elektrycznej pozyskiwało z elektrowni wodnych. O które państwo chodzi?",
    "options": [
      "Francja",
      "Norwegia",
      "Niemcy",
      "Litwa",
      "Polska",
      "Węgry"
    ],
    "image": "r04_elektrownia_wodna.jpg",
    "answer": 1,
    "explanation": "W 2019 r. energia wodna stanowiła około 93,4% produkcji energii elektrycznej w Norwegii."
  },
  {
    "id": "R04_LUD_08",
    "section": "Gęstość zaludnienia i źródła energii",
    "type": "match",
    "prompt": "Połącz rodzaj energii odnawialnej z naturalnym źródłem.",
    "options": null,
    "left": [
      "energia słoneczna",
      "energia geotermalna",
      "energia wiatrowa",
      "energia wodna"
    ],
    "right": [
      "energia rzek",
      "ruch powietrza",
      "promieniowanie Słońca",
      "ciepło wnętrza Ziemi"
    ],
    "answer": {
      "energia słoneczna": "promieniowanie Słońca",
      "energia geotermalna": "ciepło wnętrza Ziemi",
      "energia wiatrowa": "ruch powietrza",
      "energia wodna": "energia rzek"
    },
    "explanation": "Słońce, ciepło wnętrza Ziemi, wiatr i przepływająca woda to odnawialne źródła energii."
  },
  {
    "id": "R04_LUD_09",
    "section": "Gęstość zaludnienia i źródła energii",
    "type": "sort",
    "prompt": "Przyporządkuj czynniki gęstości zaludnienia do przyrodniczych i pozaprzyrodniczych.",
    "options": null,
    "items": [
      "rozwój przemysłu",
      "warunki klimatyczne",
      "migracje",
      "występowanie złóż",
      "funkcje administracyjne miasta",
      "żyzność gleb"
    ],
    "categories": [
      "przyrodnicze",
      "pozaprzyrodnicze"
    ],
    "answer": {
      "przyrodnicze": [
        "żyzność gleb",
        "warunki klimatyczne",
        "występowanie złóż"
      ],
      "pozaprzyrodnicze": [
        "migracje",
        "rozwój przemysłu",
        "funkcje administracyjne miasta"
      ]
    },
    "explanation": "Warunki środowiska są czynnikami przyrodniczymi, natomiast migracje, funkcje administracyjne i rozwój przemysłu są pozaprzyrodnicze."
  },
  {
    "id": "R04_LUD_10",
    "section": "Gęstość zaludnienia i źródła energii",
    "type": "single_choice",
    "prompt": "Które źródło energii dominowało w produkcji energii elektrycznej w Polsce w 2019 roku?",
    "options": [
      "źródła konwencjonalne",
      "energia słoneczna",
      "energia geotermalna",
      "energia wiatrowa",
      "energia wodna",
      "elektrownie jądrowe"
    ],
    "answer": 0,
    "explanation": "W 2019 r. w Polsce dominowały konwencjonalne źródła energii elektrycznej, oparte przede wszystkim na węglu."
  },
  {
    "id": "R04_LUD_11",
    "section": "Gęstość zaludnienia i źródła energii",
    "type": "multi_select",
    "prompt": "Które źródła energii są nieodnawialne?",
    "options": [
      "węgiel brunatny",
      "ropa naftowa",
      "wiatr",
      "uran",
      "biomasa",
      "gaz ziemny"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "explanation": "Do nieodnawialnych źródeł energii należą węgiel kamienny i brunatny, ropa naftowa, gaz ziemny i uran."
  },
  {
    "id": "R04_LUD_12",
    "section": "Gęstość zaludnienia i źródła energii",
    "type": "scenario",
    "prompt": "Porównujesz województwa pomorskie i łódzkie w 2019 r. Pierwsze w większym stopniu korzystało z wiatru, drugie z elektrowni na węgiel brunatny. W którym z nich udział OZE w produkcji prądu był wyższy?",
    "options": [
      "w pomorskim",
      "w łódzkim",
      "był dokładnie taki sam",
      "w żadnym nie korzystano z OZE"
    ],
    "image": "r04_elektrownie_odnawialne.jpg",
    "answer": 0,
    "explanation": "W 2019 r. udział OZE w produkcji energii elektrycznej województwa pomorskiego wynosił 51,9%, a łódzkiego 5,4%."
  },
  {
    "id": "R04_ROL_01",
    "section": "Sektory gospodarki i rolnictwo",
    "type": "single_choice",
    "prompt": "Do którego sektora gospodarki zalicza się rolnictwo?",
    "options": [
      "pierwszego",
      "drugiego",
      "trzeciego",
      "czwartego",
      "piątego",
      "sektora usług"
    ],
    "answer": 0,
    "explanation": "Rolnictwo jest pierwszym sektorem gospodarki."
  },
  {
    "id": "R04_ROL_02",
    "section": "Sektory gospodarki i rolnictwo",
    "type": "multi_select",
    "prompt": "Które działania należą do rolnictwa?",
    "options": [
      "uprawa zbóż",
      "chów bydła",
      "produkcja samochodów",
      "hodowla zwierząt",
      "sadownictwo",
      "usługi bankowe"
    ],
    "image": "r04_uzytki_rolne.jpg",
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Do rolnictwa zalicza się uprawę roślin, chów i hodowlę zwierząt oraz sadownictwo."
  },
  {
    "id": "R04_ROL_03",
    "section": "Sektory gospodarki i rolnictwo",
    "type": "true_false",
    "prompt": "W Polsce w 2019 r. ponad połowa pracujących była zatrudniona w usługach.",
    "options": null,
    "answer": true,
    "explanation": "W 2019 r. sektor usług skupiał w Polsce ponad połowę pracujących."
  },
  {
    "id": "R04_ROL_04",
    "section": "Sektory gospodarki i rolnictwo",
    "type": "fill_in",
    "prompt": "Sektor gospodarki obejmujący usługi nazywa się sektorem __________.",
    "options": null,
    "altAnswers": [
      [
        "trzecim",
        "III",
        "3",
        "trzeci"
      ]
    ],
    "answer": [
      "trzecim"
    ],
    "explanation": "Rolnictwo należy do pierwszego sektora gospodarki, przemysł do drugiego, a usługi do trzeciego."
  },
  {
    "id": "R04_ROL_05",
    "section": "Sektory gospodarki i rolnictwo",
    "type": "riddle",
    "prompt": "Jakim skrótem określa się produkt krajowy brutto?",
    "options": null,
    "altAnswers": [
      "PKB"
    ],
    "answer": "PKB",
    "explanation": "PKB to wartość dóbr i usług wytworzonych w gospodarce kraju w ciągu roku."
  },
  {
    "id": "R04_ROL_06",
    "section": "Sektory gospodarki i rolnictwo",
    "type": "odd_one_out",
    "prompt": "Wskaż działalność spoza rolnictwa: sadownictwo, uprawa pszenicy, chów zwierząt, budownictwo.",
    "options": null,
    "answer": "budownictwo",
    "explanation": "Budownictwo należy do sektora przemysłowego; pozostałe rodzaje działalności są rolnicze."
  },
  {
    "id": "R04_ROL_07",
    "section": "Sektory gospodarki i rolnictwo",
    "type": "scenario",
    "prompt": "Rolnik chce prowadzić uprawy na suchym obszarze, gdzie opadów jest mało. Na polach stosuje obrotowe zraszacze. Które działanie pozwala ograniczyć niedobór wody?",
    "options": [
      "likwidacja pól",
      "nawadnianie pól",
      "zamknięcie wszystkich szklarni",
      "zastąpienie gleby betonem",
      "całkowite usunięcie roślin",
      "zaniechanie upraw"
    ],
    "answer": 1,
    "explanation": "Sztuczne nawadnianie umożliwia uprawianie roślin nawet w suchym klimacie."
  },
  {
    "id": "R04_ROL_08",
    "section": "Sektory gospodarki i rolnictwo",
    "type": "match",
    "prompt": "Połącz pojęcie rolnicze z jego objaśnieniem.",
    "options": null,
    "left": [
      "użytki rolne",
      "okres wegetacyjny",
      "plony",
      "mechanizacja"
    ],
    "right": [
      "zbiory z jednostki powierzchni",
      "wykorzystanie maszyn rolniczych",
      "tereny wykorzystywane rolniczo",
      "dni sprzyjające wzrostowi roślin"
    ],
    "answer": {
      "użytki rolne": "tereny wykorzystywane rolniczo",
      "okres wegetacyjny": "dni sprzyjające wzrostowi roślin",
      "plony": "zbiory z jednostki powierzchni",
      "mechanizacja": "wykorzystanie maszyn rolniczych"
    },
    "explanation": "Użytki rolne obejmują pola, sady, łąki i pastwiska; plony wyraża się np. w dt/ha."
  },
  {
    "id": "R04_ROL_09",
    "section": "Sektory gospodarki i rolnictwo",
    "type": "sort",
    "prompt": "Podziel czynniki rozwoju rolnictwa na przyrodnicze i pozaprzyrodnicze.",
    "options": null,
    "items": [
      "mechanizacja",
      "ukształtowanie terenu",
      "suma opadów",
      "dopłaty i dotacje",
      "wielkość gospodarstw",
      "długość okresu wegetacyjnego",
      "nawożenie",
      "żyzność gleb"
    ],
    "categories": [
      "przyrodnicze",
      "pozaprzyrodnicze"
    ],
    "answer": {
      "przyrodnicze": [
        "żyzność gleb",
        "suma opadów",
        "ukształtowanie terenu",
        "długość okresu wegetacyjnego"
      ],
      "pozaprzyrodnicze": [
        "mechanizacja",
        "wielkość gospodarstw",
        "nawożenie",
        "dopłaty i dotacje"
      ]
    },
    "explanation": "O jakości warunków przyrodniczych decydują m.in. gleby, woda, klimat i rzeźba; człowiek wpływa na produkcję przez maszyny, nawozy, strukturę gospodarstw i politykę rolną."
  },
  {
    "id": "R04_ROL_10",
    "section": "Sektory gospodarki i rolnictwo",
    "type": "multi_select",
    "prompt": "Które formy użytkowania terenu zalicza się do użytków rolnych?",
    "options": [
      "grunty orne",
      "sady",
      "łąki",
      "autostrady",
      "pastwiska",
      "place przemysłowe"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Użytkami rolnymi są przede wszystkim grunty orne, sady, łąki i pastwiska."
  },
  {
    "id": "R04_ROL_11",
    "section": "Sektory gospodarki i rolnictwo",
    "type": "single_choice",
    "prompt": "W którym państwie średnie plony zbóż wynosiły w 2017 r. 69,2 dt/ha?",
    "options": [
      "na Węgrzech",
      "w Danii",
      "w Polsce",
      "w Rumunii",
      "we Francji",
      "w Niemczech"
    ],
    "image": "r04_uprawa_zboz.jpg",
    "answer": 1,
    "explanation": "W 2017 roku średnie plony zbóż wynosiły: Dania 69,2 dt/ha, Węgry 57,8 dt/ha, Polska 42,0 dt/ha."
  },
  {
    "id": "R04_ROL_12",
    "section": "Sektory gospodarki i rolnictwo",
    "type": "scenario",
    "prompt": "W 2017 r. Dania osiągała wyższe plony zbóż niż Węgry, choć na Węgrzech występują rozległe czarnoziemy. Co pomaga osiągać wysokie plony w duńskim rolnictwie?",
    "options": [
      "brak wykorzystania maszyn",
      "mechanizacja i nawożenie",
      "całkowity brak nawozów",
      "wyłącznie praca ręczna",
      "brak upraw zbóż",
      "rezygnacja z chowu zwierząt"
    ],
    "image": "r04_uprawa_zboz.jpg",
    "answer": 1,
    "explanation": "Wysokim plonom w Danii sprzyjają mechanizacja oraz stosowanie nawozów i innych środków wspomagających uprawę."
  },
  {
    "id": "R04_USL_01",
    "section": "Przemysł, usługi i transport",
    "type": "single_choice",
    "prompt": "Który sektor gospodarki obejmuje wydobywanie i przetwarzanie surowców?",
    "options": [
      "rolnictwo",
      "przemysł",
      "usługi",
      "administracja publiczna",
      "turystyka",
      "handel"
    ],
    "answer": 1,
    "explanation": "Przemysł jest zaliczany do drugiego sektora gospodarki."
  },
  {
    "id": "R04_USL_02",
    "section": "Przemysł, usługi i transport",
    "type": "multi_select",
    "prompt": "Które rodzaje działalności należą do przemysłu?",
    "options": [
      "górnictwo",
      "przetwórstwo",
      "budownictwo",
      "sądownictwo",
      "wytwarzanie energii",
      "edukacja"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Do przemysłu zaliczono m.in. górnictwo, przetwórstwo, budownictwo i wytwarzanie energii."
  },
  {
    "id": "R04_USL_03",
    "section": "Przemysł, usługi i transport",
    "type": "true_false",
    "prompt": "Sophia Antipolis jest przykładem technopolii we Francji.",
    "options": null,
    "image": "r04_technopolia.jpg",
    "answer": true,
    "explanation": "Sophia Antipolis to nowoczesny francuski ośrodek technologiczny rozwijający się dzięki współpracy nauki i przemysłu."
  },
  {
    "id": "R04_USL_04",
    "section": "Przemysł, usługi i transport",
    "type": "fill_in",
    "prompt": "Skrót polskiej klasyfikacji rodzajów działalności gospodarczej to __________.",
    "options": null,
    "altAnswers": [
      [
        "PKD",
        "Polska Klasyfikacja Działalności"
      ]
    ],
    "answer": [
      "PKD"
    ],
    "explanation": "PKD oznacza Polską Klasyfikację Działalności."
  },
  {
    "id": "R04_USL_05",
    "section": "Przemysł, usługi i transport",
    "type": "riddle",
    "prompt": "Jak nazywa się zastępowanie tradycyjnych gałęzi przemysłu nowymi oraz wykorzystywanie dawnych zakładów do innych celów?",
    "options": null,
    "altAnswers": [
      "restrukturyzacja przemysłu",
      "restrukturyzacja"
    ],
    "answer": "restrukturyzacja przemysłu",
    "explanation": "Restrukturyzacja przemysłu polega na zmianie jego struktury, np. po zamknięciu nieopłacalnych kopalń."
  },
  {
    "id": "R04_USL_06",
    "section": "Przemysł, usługi i transport",
    "type": "odd_one_out",
    "prompt": "Wskaż działalność z sektora usług: górnictwo, hutnictwo, budownictwo, bankowość.",
    "options": null,
    "answer": "bankowość",
    "explanation": "Bankowość należy do usług finansowych, podczas gdy pozostałe działalności należą do przemysłu."
  },
  {
    "id": "R04_USL_07",
    "section": "Przemysł, usługi i transport",
    "type": "scenario",
    "prompt": "W zakładzie roboty sterowane komputerami wykonują wiele czynności, a pracownicy programują i nadzorują ich pracę. Jaką przemianę przemysłu opisuje ta sytuacja?",
    "options": [
      "powrót do rzemiosła ręcznego",
      "wyłącznie produkcję rolniczą",
      "likwidację techniki",
      "przemysł 4.0",
      "rezygnację z automatyzacji",
      "wydobywanie węgla bez maszyn"
    ],
    "image": "r04_roboty_przemyslowe.jpg",
    "answer": 3,
    "explanation": "Przemysł 4.0 wiąże się z robotyzacją, automatyzacją i komputeryzacją procesów produkcji."
  },
  {
    "id": "R04_USL_08",
    "section": "Przemysł, usługi i transport",
    "type": "match",
    "prompt": "Połącz region lub miejsce z jego charakterystyczną funkcją.",
    "options": null,
    "left": [
      "Nadrenia Północna-Westfalia",
      "Sophia Antipolis",
      "Trójmiasto",
      "Bielany Wrocławskie"
    ],
    "right": [
      "porty oraz transport morski i lądowy",
      "inwestycje przy węźle drogowym",
      "francuski ośrodek wysokich technologii",
      "przemiany od górnictwa ku przemysłowi 4.0"
    ],
    "answer": {
      "Nadrenia Północna-Westfalia": "przemiany od górnictwa ku przemysłowi 4.0",
      "Sophia Antipolis": "francuski ośrodek wysokich technologii",
      "Trójmiasto": "porty oraz transport morski i lądowy",
      "Bielany Wrocławskie": "inwestycje przy węźle drogowym"
    },
    "explanation": "Przykłady pokazują zmiany gospodarcze i rolę infrastruktury komunikacyjnej w rozwoju usług oraz przemysłu."
  },
  {
    "id": "R04_USL_09",
    "section": "Przemysł, usługi i transport",
    "type": "sort",
    "prompt": "Przyporządkuj czynności do łączności lub transportu.",
    "options": null,
    "items": [
      "przewóz towarów koleją",
      "przesyłanie wiadomości przez internet",
      "przejazd autobusem",
      "rozmowa telefoniczna",
      "przewóz ładunków statkiem",
      "zdalne przekazanie informacji"
    ],
    "categories": [
      "łączność",
      "transport"
    ],
    "answer": {
      "łączność": [
        "rozmowa telefoniczna",
        "przesyłanie wiadomości przez internet",
        "zdalne przekazanie informacji"
      ],
      "transport": [
        "przewóz towarów koleją",
        "przejazd autobusem",
        "przewóz ładunków statkiem"
      ]
    },
    "explanation": "Łączność oznacza komunikowanie się na odległość, a transport przemieszczanie osób i ładunków."
  },
  {
    "id": "R04_USL_10",
    "section": "Przemysł, usługi i transport",
    "type": "sequence",
    "prompt": "Ułóż etapy rozwoju przemysłu od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "robotyzacja i automatyzacja produkcji",
      "rozwój górnictwa i hutnictwa",
      "restrukturyzacja i nowe gałęzie przemysłu",
      "wydobywanie złóż surowców",
      "zamykanie nierentownych kopalń"
    ],
    "answer": [
      "wydobywanie złóż surowców",
      "rozwój górnictwa i hutnictwa",
      "zamykanie nierentownych kopalń",
      "restrukturyzacja i nowe gałęzie przemysłu",
      "robotyzacja i automatyzacja produkcji"
    ],
    "explanation": "Rozwój przemysłu obejmuje m.in. etap wydobycia i przemysłu ciężkiego, restrukturyzację oraz automatyzację charakterystyczną dla przemysłu 4.0."
  },
  {
    "id": "R04_USL_11",
    "section": "Przemysł, usługi i transport",
    "type": "single_choice",
    "prompt": "Która autostrada łączy Trójmiasto z południem Polski?",
    "options": [
      "A2",
      "A4",
      "A1",
      "A8",
      "A6",
      "A18"
    ],
    "image": "r04_terminal_kontenerowy.jpg",
    "answer": 2,
    "explanation": "Autostrada A1 stanowi ważne połączenie drogowe Trójmiasta z południem Polski."
  },
  {
    "id": "R04_USL_12",
    "section": "Przemysł, usługi i transport",
    "type": "scenario",
    "prompt": "Firma chce przeładowywać kontenery ze statków na ciężarówki lub pociągi na międzynarodowym szlaku handlowym północ–południe Europy. Jakie miejsce najlepiej nadaje się do tego zadania?",
    "options": [
      "szklarnie w Almerii",
      "terminal kontenerowy w Gdyni",
      "technopolia Sophia Antipolis",
      "kopalnia Bełchatów",
      "nizina Panońska",
      "Masyw Uralu"
    ],
    "image": "r04_terminal_kontenerowy.jpg",
    "answer": 1,
    "explanation": "Terminal kontenerowy w Gdyni pozwala zmieniać środki transportu ładunków w rejonie Trójmiasta."
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaka jest przybliżona rozciągłość południkowa Europy?",
    "options": [
      "25°",
      "35°",
      "45°",
      "55°",
      "65°",
      "79°"
    ],
    "answer": 1,
    "explanation": "Rozciągłość południkowa Europy wynosi około 35°, co odpowiada około 4,2 tys. km."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które punkty są skrajnymi punktami kontynentalnej Europy?",
    "options": [
      "przylądek Nordkinn",
      "wyspa Gavdos",
      "przylądek Roca",
      "ujście Bajdaraty",
      "wyspa Rudolfa",
      "przylądek Marroqui"
    ],
    "image": "r04_granice_europy.jpg",
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Skrajnymi punktami kontynentalnej Europy są m.in. przylądek Nordkinn, przylądek Marroqui, ujście Bajdaraty i przylądek Roca."
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Wyspy zajmują około 7,5% powierzchni lądowej Europy.",
    "options": null,
    "answer": true,
    "explanation": "Wyspy stanowią około 7,5% powierzchni lądowej Europy."
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Rozciągłość południkowa Europy wynosi około __________ stopni, a równoleżnikowa około __________ stopni.",
    "options": null,
    "altAnswers": [
      [
        "35",
        "35°"
      ],
      [
        "79",
        "79°"
      ]
    ],
    "answer": [
      "35",
      "79"
    ],
    "explanation": "Rozciągłość południkowa Europy wynosi około 35°, a równoleżnikowa około 79°."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jaka nizina w Rosji obejmuje depresję sięgającą 28 m poniżej poziomu morza?",
    "options": null,
    "altAnswers": [
      "Nizina Nadkaspijska",
      "Nadkaspijska"
    ],
    "answer": "Nizina Nadkaspijska",
    "explanation": "To najniżej położony obszar Europy, obejmujący depresję sięgającą około 28 m p.p.m."
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż obiekt, który nie jest przylądkiem stanowiącym skrajny punkt Europy: Nordkinn, Marroqui, Roca, Mont Blanc.",
    "options": null,
    "answer": "Mont Blanc",
    "explanation": "Nordkinn, Marroqui i Roca to przylądki; Mont Blanc jest szczytem górskim."
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Analizujesz wykres struktury produkcji energii w 2019 roku: prawie 70% energii elektrycznej jednego państwa pochodzi z atomu. Które państwo przedstawia wykres?",
    "options": [
      "Francja",
      "Norwegia",
      "Islandia",
      "Polska",
      "Litwa",
      "Dania"
    ],
    "answer": 0,
    "explanation": "W 2019 r. udział energii jądrowej w produkcji energii elektrycznej Francji wynosił około 69,9%."
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz państwo ze średnim plonem zbóż w 2017 roku.",
    "options": null,
    "left": [
      "Dania",
      "Węgry",
      "Polska"
    ],
    "right": [
      "42,0 dt/ha",
      "69,2 dt/ha",
      "57,8 dt/ha"
    ],
    "image": "r04_uprawa_zboz.jpg",
    "answer": {
      "Dania": "69,2 dt/ha",
      "Węgry": "57,8 dt/ha",
      "Polska": "42,0 dt/ha"
    },
    "explanation": "W 2017 roku średnie plony zbóż wynosiły: Dania – 69,2 dt/ha, Węgry – 57,8 dt/ha, Polska – 42,0 dt/ha."
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Podziel źródła energii na odnawialne i nieodnawialne.",
    "options": null,
    "items": [
      "uran",
      "energia rzek",
      "gaz ziemny",
      "biomasa",
      "energia geotermalna",
      "ropa naftowa",
      "wiatr",
      "węgiel kamienny"
    ],
    "categories": [
      "odnawialne",
      "nieodnawialne"
    ],
    "answer": {
      "odnawialne": [
        "biomasa",
        "energia rzek",
        "wiatr",
        "energia geotermalna"
      ],
      "nieodnawialne": [
        "uran",
        "gaz ziemny",
        "ropa naftowa",
        "węgiel kamienny"
      ]
    },
    "explanation": "Odnawialne źródła to m.in. woda, wiatr, geotermia i biomasa, a kopaliny energetyczne oraz uran są nieodnawialne."
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaki był udział energii wodnej w produkcji energii elektrycznej Norwegii w 2019 r.?",
    "options": [
      "43,0%",
      "69,1%",
      "87,9%",
      "93,4%",
      "51,9%",
      "27,0%"
    ],
    "image": "r04_elektrownia_wodna.jpg",
    "answer": 3,
    "explanation": "W 2019 r. energia wodna odpowiadała za około 93,4% produkcji energii elektrycznej w Norwegii."
  },
  {
    "id": "R04_HARD_11",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które cieśniny i morza tworzą wodną granicę między Europą a Azją?",
    "options": [
      "Morze Egejskie",
      "Bosfor",
      "Dardanele",
      "Cieśnina Duńska",
      "Morze Marmara",
      "Cieśnina Kerczeńska"
    ],
    "answer": [
      0,
      1,
      2,
      4,
      5
    ],
    "explanation": "Do granicy wodnej Europy i Azji należą Morze Egejskie, Dardanele, Marmara, Bosfor, Cieśnina Kerczeńska i Morze Azowskie."
  },
  {
    "id": "R04_HARD_12",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaki odsetek energii elektrycznej województwa łódzkiego pochodził z OZE w 2019 r.?",
    "options": [
      "2,9%",
      "20,3%",
      "5,4%",
      "51,9%",
      "87,9%",
      "93,4%"
    ],
    "answer": 2,
    "explanation": "W 2019 r. udział OZE w produkcji energii elektrycznej wynosił 5,4% w województwie łódzkim i 51,9% w pomorskim."
  },
  {
    "id": "R04_HARD_13",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W Danii duży udział mają gleby bielicowe i brunatne, a na Węgrzech czarnoziemy. Mimo to w 2017 r. Dania osiągała wyższe plony zbóż. Jaki wniosek jest najlepiej uzasadniony?",
    "options": [
      "Czynniki pozaprzyrodnicze mogą podnosić plony mimo słabszych gleb.",
      "Wysokie plony zawsze zależą wyłącznie od gleby.",
      "Dania w ogóle nie prowadzi upraw zbóż.",
      "Węgry nie mają gospodarstw rolnych.",
      "Nawożenie i maszyny nigdy nie wpływają na plony.",
      "Klimat nie ma żadnego związku z rolnictwem."
    ],
    "image": "r04_uprawa_zboz.jpg",
    "answer": 0,
    "explanation": "Porównanie Danii i Węgier pokazuje, że mechanizacja i nawożenie mogą istotnie wpływać na plony, obok warunków przyrodniczych."
  },
  {
    "id": "R04_HARD_14",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "W 2019 roku udział źródeł konwencjonalnych w produkcji energii elektrycznej w Polsce wynosił 87,9%.",
    "options": null,
    "answer": true,
    "explanation": "W 2019 r. źródła konwencjonalne odpowiadały za około 87,9% produkcji energii elektrycznej w Polsce."
  },
  {
    "id": "R04_HARD_15",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Dopasuj wskaźnik do sposobu jego obliczania albo definicji.",
    "options": null,
    "left": [
      "gęstość zaludnienia",
      "plony",
      "zbiory",
      "PKB per capita"
    ],
    "right": [
      "PKB w przeliczeniu na jednego mieszkańca",
      "łączna masa zebranych upraw",
      "liczba osób na jednostkę powierzchni",
      "masa zbiorów na hektar"
    ],
    "image": "r04_wykres_statystyczny.jpg",
    "answer": {
      "gęstość zaludnienia": "liczba osób na jednostkę powierzchni",
      "plony": "masa zbiorów na hektar",
      "zbiory": "łączna masa zebranych upraw",
      "PKB per capita": "PKB w przeliczeniu na jednego mieszkańca"
    },
    "explanation": "Gęstość zaludnienia, plony, zbiory i PKB per capita opisują różne wielkości statystyczne."
  }
];

const KID_PROMPTS = {
  "R04_GEO_07": "Dlaczego w Finlandii jest tak wiele jezior i pagórków?",
  "R04_GEO_08": "Dobierz sposób powstania gór do nazwy pasma.",
  "R04_KLI_02": "Co wpływa na klimat Europy?",
  "R04_KLI_11": "Co sprawdzisz na wykresie, żeby wiedzieć, ile energii pokazuje?",
  "R04_LUD_09": "Podziel przyczyny gęstości zaludnienia na naturalne i związane z ludźmi.",
  "R04_LUD_12": "Gdzie w 2019 roku większa część prądu pochodziła z OZE: na Pomorzu czy w Łódzkiem?",
  "R04_ROL_09": "Podziel warunki rozwoju rolnictwa na naturalne i zależne od ludzi.",
  "R04_USL_07": "Co to za przemysł, gdy fabryczne roboty sterowane są komputerami?",
  "R04_HARD_13": "Dlaczego Dania mogła mieć większe plony zbóż niż Węgry mimo słabszych gleb?"
};

const chapter = {
  id: "r04",
  number: 4,
  title: "Europa – środowisko, ludność i gospodarka (tematy 26–35)",
  icon: "🌍",
  sectionOrder: [
    "Położenie i ukształtowanie Europy",
    "Klimat Europy i dane statystyczne",
    "Gęstość zaludnienia i źródła energii",
    "Sektory gospodarki i rolnictwo",
    "Przemysł, usługi i transport"
  ],
  sectionIcons: {
    "Położenie i ukształtowanie Europy": "🗺️",
    "Klimat Europy i dane statystyczne": "🌦️",
    "Gęstość zaludnienia i źródła energii": "⚡",
    "Sektory gospodarki i rolnictwo": "🌾",
    "Przemysł, usługi i transport": "🏭"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
