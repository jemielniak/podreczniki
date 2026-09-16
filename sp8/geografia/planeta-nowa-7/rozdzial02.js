// Skróty sekcji (do identyfikatorów ćwiczeń):
//   PRZ  = Środowisko przyrodnicze Afryki
//   ROL  = Rolnictwo Afryki
//   GOS  = Przemysł i usługi w Afryce
//   ETI  = Etiopia - problemy głodu i niedożywienia
//   KEN  = Kenia - turystyczny potencjał
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_PRZ_01",
    "section": "Środowisko przyrodnicze Afryki",
    "type": "single_choice",
    "prompt": "Jak nazywa się najwyższy szczyt Afryki?",
    "options": [
      "Ras Daszan",
      "Kibo",
      "Batian",
      "Góra Kamerun",
      "Toubkal",
      "Ruwenzori"
    ],
    "image": "r02_kilimandzaro.jpg",
    "answer": 1,
    "explanation": "Kibo ma 5895 m n.p.m. i leży w masywie wulkanicznym Kilimandżaro."
  },
  {
    "id": "R02_PRZ_02",
    "section": "Środowisko przyrodnicze Afryki",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki, które kształtują klimat Afryki.",
    "options": [
      "położenie geograficzne",
      "prądy morskie",
      "wysokość nad poziomem morza",
      "gęstość zaludnienia",
      "granice państw"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Najważniejsze czynniki to położenie geograficzne, prądy morskie i wysokość nad poziomem morza."
  },
  {
    "id": "R02_PRZ_03",
    "section": "Środowisko przyrodnicze Afryki",
    "type": "true_false",
    "prompt": "Afryka leży na wszystkich czterech półkulach.",
    "options": null,
    "answer": true,
    "explanation": "Przez Afrykę przebiegają równik i południk 0°, dlatego kontynent leży na półkulach północnej, południowej, wschodniej i zachodniej."
  },
  {
    "id": "R02_PRZ_04",
    "section": "Środowisko przyrodnicze Afryki",
    "type": "fill_in",
    "prompt": "Najzasobniejszą w wodę rzeką Afryki jest __________, a najdłuższą rzeką kontynentu jest __________.",
    "options": null,
    "altAnswers": [
      [
        "Kongo"
      ],
      [
        "Nil"
      ]
    ],
    "answer": [
      "Kongo",
      "Nil"
    ],
    "explanation": "Kongo jest najzasobniejszą w wodę rzeką Afryki, natomiast Nil ma 6671 km i jest najdłuższą rzeką kontynentu."
  },
  {
    "id": "R02_PRZ_05",
    "section": "Środowisko przyrodnicze Afryki",
    "type": "riddle",
    "prompt": "Jak nazywa się suche koryto rzeczne w strefie klimatów zwrotnikowych, które wypełnia się wodą po ulewnych deszczach?",
    "options": null,
    "altAnswers": [
      "wadi",
      "ued",
      "uedy"
    ],
    "answer": "wadi",
    "explanation": "Wadi, nazywane też uedem, wypełnia się wodą tylko po ulewnych deszczach, tworząc rzekę epizodyczną."
  },
  {
    "id": "R02_PRZ_06",
    "section": "Środowisko przyrodnicze Afryki",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest kotliną: Kotlina Konga, Kotlina Czadu, Kalahari, Atlas.",
    "options": null,
    "answer": "Atlas",
    "explanation": "Kotlina Konga, Kotlina Czadu i Kalahari są rozległymi obniżeniami terenu, a Atlas jest pasmem górskim."
  },
  {
    "id": "R02_PRZ_07",
    "section": "Środowisko przyrodnicze Afryki",
    "type": "scenario",
    "prompt": "Na południowo-zachodnim wybrzeżu Afryki występują obniżona temperatura powietrza i bardzo małe opady. Który prąd morski sprzyja takim warunkom?",
    "options": [
      "Prąd Benguelski",
      "Prąd Mozambicki",
      "Prąd Gwinejski",
      "Prąd Agulhas"
    ],
    "image": "r02_pustynia_namib.jpg",
    "answer": 0,
    "explanation": "Zimny Prąd Benguelski obniża temperaturę i zmniejsza ilość opadów, co przyczyniło się do powstania pustyni Namib."
  },
  {
    "id": "R02_PRZ_08",
    "section": "Środowisko przyrodnicze Afryki",
    "type": "match",
    "prompt": "Połącz typ klimatu z charakterystyczną roślinnością.",
    "options": null,
    "left": [
      "równikowy wilgotny",
      "podrównikowy",
      "zwrotnikowy suchy",
      "podzwrotnikowy morski"
    ],
    "right": [
      "pustynie i półpustynie",
      "makia",
      "wilgotne lasy równikowe",
      "sawanna"
    ],
    "answer": {
      "równikowy wilgotny": "wilgotne lasy równikowe",
      "podrównikowy": "sawanna",
      "zwrotnikowy suchy": "pustynie i półpustynie",
      "podzwrotnikowy morski": "makia"
    },
    "explanation": "Wilgotne lasy równikowe występują w klimacie równikowym wilgotnym, sawanna w podrównikowym, pustynie w zwrotnikowym suchym, a makia w podzwrotnikowym morskim."
  },
  {
    "id": "R02_PRZ_09",
    "section": "Środowisko przyrodnicze Afryki",
    "type": "sort",
    "prompt": "Przyporządkuj obiekty do odpowiednich grup.",
    "options": null,
    "items": [
      "Kotlina Czadu",
      "Góry Smocze",
      "Wyżyna Abisyńska",
      "Kalahari",
      "Wyżyna Wschodnioafrykańska",
      "Kotlina Konga"
    ],
    "categories": [
      "wyżyny i góry",
      "kotliny"
    ],
    "answer": {
      "wyżyny i góry": [
        "Wyżyna Abisyńska",
        "Wyżyna Wschodnioafrykańska",
        "Góry Smocze"
      ],
      "kotliny": [
        "Kotlina Konga",
        "Kotlina Czadu",
        "Kalahari"
      ]
    },
    "explanation": "Do największych wyżyn należą Wyżyna Abisyńska i Wschodnioafrykańska, Góry Smocze są pasmem górskim, a Kotlina Konga, Kotlina Czadu i Kalahari są kotlinami."
  },
  {
    "id": "R02_PRZ_10",
    "section": "Środowisko przyrodnicze Afryki",
    "type": "sequence",
    "prompt": "Ułóż etapy cyrkulacji powietrza w strefie międzyzwrotnikowej od zjawiska zachodzącego nad równikiem do powstania pasatów.",
    "options": null,
    "items": [
      "W okolicach zwrotników powietrze opada i tworzy wyże",
      "Chłodne i suche powietrze przemieszcza się ku zwrotnikom",
      "Różnica ciśnienia wywołuje pasaty wiejące ku równikowi",
      "Ciepłe i wilgotne powietrze unosi się nad równikiem",
      "Unoszące się powietrze ochładza się i para wodna się skrapla"
    ],
    "answer": [
      "Ciepłe i wilgotne powietrze unosi się nad równikiem",
      "Unoszące się powietrze ochładza się i para wodna się skrapla",
      "Chłodne i suche powietrze przemieszcza się ku zwrotnikom",
      "W okolicach zwrotników powietrze opada i tworzy wyże",
      "Różnica ciśnienia wywołuje pasaty wiejące ku równikowi"
    ],
    "explanation": "Nagrzane powietrze wznosi się nad równikiem, ochładza się, potem przemieszcza ku zwrotnikom i opada; różnica ciśnienia między wyżami zwrotnikowymi a niżem równikowym wywołuje pasaty."
  },
  {
    "id": "R02_ROL_01",
    "section": "Rolnictwo Afryki",
    "type": "single_choice",
    "prompt": "Gdzie leży Sahel?",
    "options": [
      "na północ od Morza Śródziemnego",
      "na południe od Kalahari",
      "na południe od Sahary",
      "wyłącznie w Kotlinie Konga",
      "na Madagaskarze",
      "na wybrzeżu Namibii"
    ],
    "image": "r02_sahel.jpg",
    "answer": 2,
    "explanation": "Sahel jest regionem geograficznym położonym na południe od Sahary, w pobliżu równoleżnika 15°N."
  },
  {
    "id": "R02_ROL_02",
    "section": "Rolnictwo Afryki",
    "type": "multi_select",
    "prompt": "Zaznacz przyrodnicze bariery zwiększania produkcji rolnej w wielu częściach Afryki.",
    "options": [
      "niedostatek wody",
      "częste susze",
      "mało żyzne gleby",
      "długi okres wegetacyjny",
      "możliwość kilku zbiorów w roku"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Niedostatek wody, częste susze i mało żyzne gleby ograniczają plony, mimo długiego okresu wegetacyjnego."
  },
  {
    "id": "R02_ROL_03",
    "section": "Rolnictwo Afryki",
    "type": "true_false",
    "prompt": "Rolnictwo plantacyjne w Afryce jest zwykle nastawione na sprzedaż, a większość produkcji przeznacza się na eksport.",
    "options": null,
    "answer": true,
    "explanation": "Plantacje są wielkoobszarowymi gospodarstwami wyspecjalizowanymi w produkcji roślinnej na sprzedaż, a znaczna część zbiorów trafia na eksport."
  },
  {
    "id": "R02_ROL_04",
    "section": "Rolnictwo Afryki",
    "type": "fill_in",
    "prompt": "Rolnictwo __________ polega na wypalaniu fragmentów lasu lub sawanny, a wieloletnia uprawa jednego rodzaju roślin na tym samym obszarze to __________.",
    "options": null,
    "altAnswers": [
      [
        "żarowo-odłogowe",
        "zarowo-odlogowe"
      ],
      [
        "monokultura"
      ]
    ],
    "image": "r02_rolnictwo_zarowo_odlogowe.jpg",
    "answer": [
      "żarowo-odłogowe",
      "monokultura"
    ],
    "explanation": "W rolnictwie żarowo-odłogowym pozyskuje się pola przez wypalanie roślinności. Monokultura jest typowa dla wielu plantacji."
  },
  {
    "id": "R02_ROL_05",
    "section": "Rolnictwo Afryki",
    "type": "riddle",
    "prompt": "Jak nazywa się pasterstwo koczownicze polegające na przemieszczaniu się ludzi ze zwierzętami w poszukiwaniu lepszych miejsc wypasu?",
    "options": null,
    "altAnswers": [
      "nomadyzm",
      "pasterstwo koczownicze"
    ],
    "answer": "nomadyzm",
    "explanation": "Nomadyzm jest podstawową tradycyjną formą gospodarowania w Sahelu i zależy od okresowych zasobów trawy oraz wody."
  },
  {
    "id": "R02_ROL_06",
    "section": "Rolnictwo Afryki",
    "type": "odd_one_out",
    "prompt": "Która roślina nie należy do trzech najważniejszych zbóż żywieniowych Afryki: proso, sorgo, kukurydza czy kakaowiec?",
    "options": null,
    "answer": "kakaowiec",
    "explanation": "Proso, sorgo i kukurydza należą do najważniejszych zbóż żywieniowych Afryki, natomiast kakaowiec jest rośliną plantacyjną."
  },
  {
    "id": "R02_ROL_07",
    "section": "Rolnictwo Afryki",
    "type": "scenario",
    "prompt": "Rolnik wypala fragment sawanny, przez kilka lat uprawia niewielkie pole, a po utracie żyzności gleby przenosi uprawę na nowy wypalony obszar. Jaki typ rolnictwa stosuje?",
    "options": [
      "plantacyjne",
      "żarowo-odłogowe",
      "śródziemnomorskie",
      "intensywne szklarniowe"
    ],
    "image": "r02_rolnictwo_zarowo_odlogowe.jpg",
    "answer": 1,
    "explanation": "Taki sposób gospodarowania jest charakterystyczny dla rolnictwa żarowo-odłogowego."
  },
  {
    "id": "R02_ROL_08",
    "section": "Rolnictwo Afryki",
    "type": "match",
    "prompt": "Połącz roślinę z typowym obszarem jej uprawy.",
    "options": null,
    "left": [
      "pszenica",
      "ryż",
      "sorgo i proso",
      "kakaowiec"
    ],
    "right": [
      "Sahel",
      "Senegal",
      "okolice Zatoki Gwinejskiej",
      "Egipt"
    ],
    "image": "r02_plantacja_kakao.jpg",
    "answer": {
      "pszenica": "Egipt",
      "ryż": "Senegal",
      "sorgo i proso": "Sahel",
      "kakaowiec": "okolice Zatoki Gwinejskiej"
    },
    "explanation": "Pszenicę uprawia się m.in. w Egipcie, ryż w Senegalu, sorgo i proso są typowe dla Sahelu, a większość afrykańskiej produkcji kakao pochodzi z krajów nad Zatoką Gwinejską."
  },
  {
    "id": "R02_ROL_09",
    "section": "Rolnictwo Afryki",
    "type": "sort",
    "prompt": "Przyporządkuj skutki i cechy do typu rolnictwa.",
    "options": null,
    "items": [
      "duże zużycie środków ochrony roślin i nawozów",
      "wypalanie fragmentów lasu lub sawanny",
      "wycinanie lasów pod plantacje",
      "zwiększanie erozji po zniszczeniu naturalnej pokrywy roślinnej",
      "zmniejszanie żyzności gleb wskutek monokultury"
    ],
    "categories": [
      "żarowo-odłogowe",
      "plantacyjne"
    ],
    "answer": {
      "żarowo-odłogowe": [
        "wypalanie fragmentów lasu lub sawanny",
        "zwiększanie erozji po zniszczeniu naturalnej pokrywy roślinnej"
      ],
      "plantacyjne": [
        "duże zużycie środków ochrony roślin i nawozów",
        "zmniejszanie żyzności gleb wskutek monokultury",
        "wycinanie lasów pod plantacje"
      ]
    },
    "explanation": "Oba typy rolnictwa mogą szkodzić środowisku, lecz robią to w odmienny sposób: wypalanie i erozja są typowe dla systemu żarowo-odłogowego, a monokultura i duże nakłady chemiczne dla plantacji."
  },
  {
    "id": "R02_ROL_10",
    "section": "Rolnictwo Afryki",
    "type": "sequence",
    "prompt": "Ułóż etapy typowego cyklu rolnictwa żarowo-odłogowego.",
    "options": null,
    "items": [
      "Spadek żyzności gleby",
      "Założenie niewielkiego pola",
      "Wypalenie kolejnego fragmentu roślinności",
      "Wypalenie fragmentu lasu lub sawanny",
      "Uprawa roślin przez kilka lat"
    ],
    "answer": [
      "Wypalenie fragmentu lasu lub sawanny",
      "Założenie niewielkiego pola",
      "Uprawa roślin przez kilka lat",
      "Spadek żyzności gleby",
      "Wypalenie kolejnego fragmentu roślinności"
    ],
    "explanation": "W tym systemie pole powstaje po wypaleniu roślinności, jest użytkowane do spadku żyzności, a potem uprawa przenosi się na kolejny obszar."
  },
  {
    "id": "R02_GOS_01",
    "section": "Przemysł i usługi w Afryce",
    "type": "single_choice",
    "prompt": "Który zestaw surowców ma około połowy światowej produkcji pochodzącej z Afryki?",
    "options": [
      "ropa naftowa, gaz ziemny, węgiel i sól",
      "złoto, mangan, uran i żelazo",
      "miedź, boksyt, cynk i nikiel",
      "kobalt, platyna, chrom i diamenty",
      "fosforyty, siarka, sól i gips",
      "ropa naftowa, miedź, złoto i srebro"
    ],
    "image": "r02_kopalnia_diamentow.jpg",
    "answer": 3,
    "explanation": "Z Afryki pochodzi około połowy światowej produkcji kobaltu, platyny, chromu i diamentów."
  },
  {
    "id": "R02_GOS_02",
    "section": "Przemysł i usługi w Afryce",
    "type": "multi_select",
    "prompt": "Zaznacz bariery rozwoju nowoczesnych działów gospodarki w wielu państwach Afryki.",
    "options": [
      "brak funduszy na inwestycje",
      "duże zadłużenie zagraniczne",
      "wysoki poziom analfabetyzmu",
      "niedobór wykwalifikowanych pracowników",
      "wojny i niestabilność polityczna",
      "duże zasoby surowców mineralnych"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Rozwój ograniczają brak funduszy, wysokie zadłużenie, analfabetyzm, niedobór wykwalifikowanych pracowników oraz wojny, terroryzm i niestabilność polityczna."
  },
  {
    "id": "R02_GOS_03",
    "section": "Przemysł i usługi w Afryce",
    "type": "true_false",
    "prompt": "Przetwórstwo przemysłowe w większości państw afrykańskich jest wciąż mało wydajne i odgrywa niewielką rolę w gospodarce.",
    "options": null,
    "answer": true,
    "explanation": "W wielu państwach przetwórstwo jest przestarzałe i mało wydajne, choć wybrane jego działy rozwinęły się m.in. w RPA, Egipcie i Algierii."
  },
  {
    "id": "R02_GOS_04",
    "section": "Przemysł i usługi w Afryce",
    "type": "fill_in",
    "prompt": "W państwach takich jak __________ i __________ surowce mineralne stanowiły ponad 90% wartości eksportu.",
    "options": null,
    "altAnswers": [
      [
        "Angola",
        "Angoli"
      ],
      [
        "Nigeria",
        "Nigerii"
      ]
    ],
    "answer": [
      "Angola",
      "Nigeria"
    ],
    "explanation": "W Angoli i Nigerii udział surowców mineralnych w wartości eksportu przekraczał 90%."
  },
  {
    "id": "R02_GOS_05",
    "section": "Przemysł i usługi w Afryce",
    "type": "riddle",
    "prompt": "Jaki nowoczesny dział usług w Afryce szybko zyskuje na znaczeniu dzięki telefonom komórkowym, smartfonom i aplikacjom mobilnym?",
    "options": null,
    "altAnswers": [
      "telekomunikacja",
      "usługi telekomunikacyjne"
    ],
    "image": "r02_telefonia_mobilna_afryka.jpg",
    "answer": "telekomunikacja",
    "explanation": "Telekomunikacja należy do najszybciej rozwijających się nowoczesnych usług w wielu państwach Afryki."
  },
  {
    "id": "R02_GOS_06",
    "section": "Przemysł i usługi w Afryce",
    "type": "odd_one_out",
    "prompt": "Które państwo nie pasuje do grupy afrykańskich krajów o rozwiniętym przetwórstwie przemysłowym: RPA, Egipt, Algieria czy Niger?",
    "options": null,
    "answer": "Niger",
    "explanation": "RPA, Egipt i Algieria należą do państw Afryki, w których rozwinęło się przetwórstwo przemysłowe."
  },
  {
    "id": "R02_GOS_07",
    "section": "Przemysł i usługi w Afryce",
    "type": "scenario",
    "prompt": "Rolnik sprawdza ceny przez telefon, taksówkarz korzysta z aplikacji, a pacjent umawia wizytę medyczną w smartfonie. Rozwój którego działu gospodarki umożliwia te zmiany?",
    "options": [
      "górnictwa",
      "hutnictwa",
      "telekomunikacji",
      "rybołówstwa"
    ],
    "image": "r02_telefonia_mobilna_afryka.jpg",
    "answer": 2,
    "explanation": "Coraz powszechniejszy dostęp do smartfonów i aplikacji zwiększa znaczenie usług telekomunikacyjnych i mobilnych."
  },
  {
    "id": "R02_GOS_08",
    "section": "Przemysł i usługi w Afryce",
    "type": "match",
    "prompt": "Połącz przykład z dziedziną, której dotyczy.",
    "options": null,
    "left": [
      "diagnostyka wad wzroku przez aplikację",
      "płatności i przesyłanie pieniędzy telefonem",
      "linia kolejowa Mombasa-Nairobi",
      "oprogramowanie do komunikacji"
    ],
    "right": [
      "transport",
      "finanse",
      "informatyka i telekomunikacja",
      "ochrona zdrowia"
    ],
    "answer": {
      "diagnostyka wad wzroku przez aplikację": "ochrona zdrowia",
      "płatności i przesyłanie pieniędzy telefonem": "finanse",
      "linia kolejowa Mombasa-Nairobi": "transport",
      "oprogramowanie do komunikacji": "informatyka i telekomunikacja"
    },
    "explanation": "Nowoczesne usługi mobilne wspierają zdrowie, finanse i komunikację, a inwestycje infrastrukturalne obejmują także transport kolejowy."
  },
  {
    "id": "R02_GOS_09",
    "section": "Przemysł i usługi w Afryce",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do przemysłu wydobywczego lub przetwórczego.",
    "options": null,
    "items": [
      "odzież",
      "rudy miedzi",
      "wyroby chemiczne",
      "kobalt",
      "artykuły spożywcze",
      "ropa naftowa"
    ],
    "categories": [
      "przemysł wydobywczy",
      "przemysł przetwórczy"
    ],
    "answer": {
      "przemysł wydobywczy": [
        "ropa naftowa",
        "rudy miedzi",
        "kobalt"
      ],
      "przemysł przetwórczy": [
        "artykuły spożywcze",
        "odzież",
        "wyroby chemiczne"
      ]
    },
    "explanation": "Wydobycie dostarcza surowców, takich jak ropa, rudy miedzi i kobalt, a przetwórstwo wytwarza m.in. żywność, odzież i wyroby chemiczne."
  },
  {
    "id": "R02_GOS_10",
    "section": "Przemysł i usługi w Afryce",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia i zjawiska gospodarcze w kolejności chronologicznej.",
    "options": null,
    "items": [
      "W 2020 r. pandemia COVID-19 zahamowała rozwój turystyki",
      "W maju 2017 r. uruchomiono linię kolejową Mombasa-Nairobi",
      "Od połowy lat 90. XX wieku gospodarki wielu państw Afryki zaczynają dynamiczniej się rozwijać",
      "Dane z 2019 r. pokazują ponad 90% udział surowców mineralnych w eksporcie Angoli i Nigerii"
    ],
    "answer": [
      "Od połowy lat 90. XX wieku gospodarki wielu państw Afryki zaczynają dynamiczniej się rozwijać",
      "W maju 2017 r. uruchomiono linię kolejową Mombasa-Nairobi",
      "Dane z 2019 r. pokazują ponad 90% udział surowców mineralnych w eksporcie Angoli i Nigerii",
      "W 2020 r. pandemia COVID-19 zahamowała rozwój turystyki"
    ],
    "explanation": "Wydarzenia przypadają kolejno na połowę lat 90., 2017 r., 2019 r. i 2020 r."
  },
  {
    "id": "R02_ETI_01",
    "section": "Etiopia - problemy głodu i niedożywienia",
    "type": "single_choice",
    "prompt": "Jakie jest orientacyjne dzienne zapotrzebowanie energetyczne dorosłego człowieka?",
    "options": [
      "800-1000 kcal",
      "1500-1800 kcal",
      "2400-2700 kcal",
      "3200-3500 kcal",
      "4000-4500 kcal",
      "5000-5500 kcal"
    ],
    "answer": 2,
    "explanation": "Dorosły człowiek powinien codziennie dostarczać około 2400-2700 kcal."
  },
  {
    "id": "R02_ETI_02",
    "section": "Etiopia - problemy głodu i niedożywienia",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki wpływające na zapotrzebowanie energetyczne człowieka.",
    "options": [
      "wiek",
      "warunki klimatyczne",
      "rodzaj wykonywanej pracy",
      "stan zdrowia",
      "liczba języków używanych w kraju",
      "wysokość PKB państwa"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Zapotrzebowanie energetyczne zależy m.in. od wieku, warunków klimatycznych, rodzaju wykonywanej pracy i stanu zdrowia."
  },
  {
    "id": "R02_ETI_03",
    "section": "Etiopia - problemy głodu i niedożywienia",
    "type": "true_false",
    "prompt": "Głód to stan organizmu spowodowany czasowym brakiem pożywienia, który w skrajnych przypadkach może prowadzić do śmierci.",
    "options": null,
    "answer": true,
    "explanation": "Głód wiąże się z brakiem pożywienia, natomiast niedożywienie oznacza zbyt małą wartość kaloryczną przyjmowanych posiłków."
  },
  {
    "id": "R02_ETI_04",
    "section": "Etiopia - problemy głodu i niedożywienia",
    "type": "fill_in",
    "prompt": "Jeśli kaloryczność posiłków jest niższa od potrzeb organizmu, mówimy o __________. Brak określonych składników odżywczych w codziennej diecie to __________.",
    "options": null,
    "altAnswers": [
      [
        "niedożywieniu",
        "niedożywienie"
      ],
      [
        "głód utajony",
        "głodzie utajonym"
      ]
    ],
    "answer": [
      "niedożywieniu",
      "głód utajony"
    ],
    "explanation": "Niedożywienie oznacza niedostateczną wartość energetyczną pożywienia, a głód utajony - niedobór określonych składników odżywczych."
  },
  {
    "id": "R02_ETI_05",
    "section": "Etiopia - problemy głodu i niedożywienia",
    "type": "riddle",
    "prompt": "Jak nazywa się najwyższy szczyt Etiopii, położony na Wyżynie Abisyńskiej?",
    "options": null,
    "altAnswers": [
      "Ras Daszan",
      "Ras Dashen"
    ],
    "image": "r02_wyzyna_abisynska.jpg",
    "answer": "Ras Daszan",
    "explanation": "Ras Daszan ma 4550 m n.p.m. i jest najwyższym szczytem Etiopii."
  },
  {
    "id": "R02_ETI_06",
    "section": "Etiopia - problemy głodu i niedożywienia",
    "type": "odd_one_out",
    "prompt": "Wskaż czynnik, który nie jest przyrodniczą przyczyną problemów z wyżywieniem: długotrwałe susze, powodzie, plagi szkodników, bardzo wysoki przyrost naturalny.",
    "options": null,
    "answer": "bardzo wysoki przyrost naturalny",
    "explanation": "Susze, powodzie i plagi szkodników są czynnikami przyrodniczymi, a wysoki przyrost naturalny jest czynnikiem społeczno-ekonomicznym."
  },
  {
    "id": "R02_ETI_07",
    "section": "Etiopia - problemy głodu i niedożywienia",
    "type": "scenario",
    "prompt": "Pora deszczowa zaczyna się z dużym opóźnieniem, opady są znacznie niższe niż zwykle, a plony spadają. Jakie zjawisko jest bezpośrednią przyrodniczą przyczyną tego kryzysu?",
    "options": [
      "susza",
      "monokultura",
      "urbanizacja",
      "eksport surowców"
    ],
    "image": "r02_susza_etiopia.jpg",
    "answer": 0,
    "explanation": "Etiopię okresowo nawiedzają katastrofalne susze, które powodują straty w uprawach i zwiększają ryzyko głodu."
  },
  {
    "id": "R02_ETI_08",
    "section": "Etiopia - problemy głodu i niedożywienia",
    "type": "match",
    "prompt": "Połącz przyczynę problemów żywnościowych z jej bezpośrednim skutkiem.",
    "options": null,
    "left": [
      "bardzo wysoki przyrost naturalny",
      "ubóstwo",
      "konflikty zbrojne",
      "plagi szkodników"
    ],
    "right": [
      "niszczenie roślin uprawnych",
      "niszczenie upraw i zbiorów",
      "brak możliwości zakupu dostatecznej ilości pokarmu",
      "trudność zapewnienia żywności rosnącej liczbie ludności"
    ],
    "answer": {
      "bardzo wysoki przyrost naturalny": "trudność zapewnienia żywności rosnącej liczbie ludności",
      "ubóstwo": "brak możliwości zakupu dostatecznej ilości pokarmu",
      "konflikty zbrojne": "niszczenie upraw i zbiorów",
      "plagi szkodników": "niszczenie roślin uprawnych"
    },
    "explanation": "Problemy żywnościowe mają zarówno przyczyny przyrodnicze, jak i społeczno-ekonomiczne, które często nakładają się na siebie."
  },
  {
    "id": "R02_ETI_09",
    "section": "Etiopia - problemy głodu i niedożywienia",
    "type": "sort",
    "prompt": "Przyporządkuj przyczyny głodu i niedożywienia do właściwej grupy.",
    "options": null,
    "items": [
      "ubóstwo",
      "długotrwałe susze",
      "niski poziom rozwoju rolnictwa",
      "plagi szkodników",
      "bardzo wysoki przyrost naturalny",
      "powodzie",
      "konflikty zbrojne",
      "pustynnienie"
    ],
    "categories": [
      "przyrodnicze",
      "społeczno-ekonomiczne"
    ],
    "answer": {
      "przyrodnicze": [
        "długotrwałe susze",
        "powodzie",
        "pustynnienie",
        "plagi szkodników"
      ],
      "społeczno-ekonomiczne": [
        "bardzo wysoki przyrost naturalny",
        "niski poziom rozwoju rolnictwa",
        "ubóstwo",
        "konflikty zbrojne"
      ]
    },
    "explanation": "Susze, powodzie, pustynnienie i szkodniki należą do przyczyn przyrodniczych, a szybki wzrost ludności, słabe rolnictwo, ubóstwo i konflikty - do społeczno-ekonomicznych."
  },
  {
    "id": "R02_ETI_10",
    "section": "Etiopia - problemy głodu i niedożywienia",
    "type": "sequence",
    "prompt": "Ułóż mechanizm, który pomógł ograniczyć niedożywienie w Etiopii.",
    "options": null,
    "items": [
      "Obniżenie poziomu ubóstwa",
      "Zmniejszenie liczby osób niedożywionych",
      "Zwiększenie wydatków na inwestycje rządowe",
      "Powstawanie nowych miejsc pracy i wzrost dochodów części społeczeństwa"
    ],
    "answer": [
      "Zwiększenie wydatków na inwestycje rządowe",
      "Powstawanie nowych miejsc pracy i wzrost dochodów części społeczeństwa",
      "Obniżenie poziomu ubóstwa",
      "Zmniejszenie liczby osób niedożywionych"
    ],
    "explanation": "Inwestycje w infrastrukturę, rolnictwo, edukację i ochronę zdrowia sprzyjały wzrostowi zatrudnienia i dochodów, obniżeniu ubóstwa oraz poprawie wyżywienia."
  },
  {
    "id": "R02_KEN_01",
    "section": "Kenia - turystyczny potencjał",
    "type": "single_choice",
    "prompt": "Jaki jest najwyższy szczyt Kenii?",
    "options": [
      "Batian",
      "Kibo",
      "Ras Daszan",
      "Toubkal",
      "Góra Kamerun",
      "Stanley"
    ],
    "answer": 0,
    "explanation": "Najwyższym szczytem Kenii jest Batian (5199 m n.p.m.) w masywie wulkanicznym Kenia."
  },
  {
    "id": "R02_KEN_02",
    "section": "Kenia - turystyczny potencjał",
    "type": "multi_select",
    "prompt": "Zaznacz przyrodnicze walory turystyczne Kenii.",
    "options": [
      "wysokie góry",
      "rozległe sawanny",
      "piaszczyste wybrzeże Oceanu Indyjskiego",
      "parki i rezerwaty narodowe",
      "kościoły i meczety",
      "fortyfikacje kolonialne"
    ],
    "image": "r02_masai_mara_safari.jpg",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do walorów przyrodniczych należą wysokie góry, sawanny, wybrzeże Oceanu Indyjskiego oraz parki i rezerwaty z dziką fauną."
  },
  {
    "id": "R02_KEN_03",
    "section": "Kenia - turystyczny potencjał",
    "type": "true_false",
    "prompt": "Kenia leży we wschodniej części Afryki i po obu stronach równika.",
    "options": null,
    "answer": true,
    "explanation": "Równik przecina Kenię, a państwo leży we wschodniej części kontynentu."
  },
  {
    "id": "R02_KEN_04",
    "section": "Kenia - turystyczny potencjał",
    "type": "fill_in",
    "prompt": "Rezerwat Narodowy Masai Mara graniczy z Parkiem Narodowym __________ położonym w __________.",
    "options": null,
    "altAnswers": [
      [
        "Serengeti"
      ],
      [
        "Tanzanii",
        "Tanzania"
      ]
    ],
    "image": "r02_masai_mara_safari.jpg",
    "answer": [
      "Serengeti",
      "Tanzanii"
    ],
    "explanation": "Masai Mara w Kenii graniczy z większym Parkiem Narodowym Serengeti w Tanzanii."
  },
  {
    "id": "R02_KEN_05",
    "section": "Kenia - turystyczny potencjał",
    "type": "riddle",
    "prompt": "Jak nazywa się XVI-wieczna fortyfikacja w Mombasie zbudowana przez Portugalczyków?",
    "options": null,
    "altAnswers": [
      "Fort Jesus",
      "fort Jesus"
    ],
    "image": "r02_fort_jesus_mombasa.jpg",
    "answer": "Fort Jesus",
    "explanation": "Fort Jesus przez stulecia bronił Mombasy, a obecnie mieści się w nim muzeum."
  },
  {
    "id": "R02_KEN_06",
    "section": "Kenia - turystyczny potencjał",
    "type": "odd_one_out",
    "prompt": "Wskaż obiekt, który jest przede wszystkim walorem przyrodniczym, a nie kulturowym: Lamu, święte gaje kaya, Fort Jesus, Masai Mara.",
    "options": null,
    "answer": "Masai Mara",
    "explanation": "Lamu, święte gaje kaya i Fort Jesus są walorami kulturowymi, natomiast Masai Mara słynie przede wszystkim z dzikiej przyrody i safari."
  },
  {
    "id": "R02_KEN_07",
    "section": "Kenia - turystyczny potencjał",
    "type": "scenario",
    "prompt": "Turysta chce nurkować przy rafach koralowych i odpoczywać na szerokiej piaszczystej plaży. Który obszar Kenii najlepiej odpowiada tym planom?",
    "options": [
      "Wyżyna Abisyńska",
      "wybrzeże Oceanu Indyjskiego",
      "Sahel",
      "Kotlina Konga"
    ],
    "image": "r02_wybrzeze_kenii.jpg",
    "answer": 1,
    "explanation": "Ciepłe wody Oceanu Indyjskiego, piaszczyste plaże i przybrzeżne rafy koralowe sprzyjają plażowaniu i nurkowaniu."
  },
  {
    "id": "R02_KEN_08",
    "section": "Kenia - turystyczny potencjał",
    "type": "match",
    "prompt": "Połącz miejsce w Kenii z charakterystyczną atrakcją.",
    "options": null,
    "left": [
      "Masai Mara",
      "Wielki Rów Wschodni",
      "Mombasa",
      "wybrzeże Oceanu Indyjskiego"
    ],
    "right": [
      "Fort Jesus",
      "wulkany, gorące źródła i jeziora tektoniczne",
      "rafy koralowe i nurkowanie",
      "safari i obserwacja dzikich zwierząt"
    ],
    "image": "r02_row_tektoniczny.jpg",
    "answer": {
      "Masai Mara": "safari i obserwacja dzikich zwierząt",
      "Wielki Rów Wschodni": "wulkany, gorące źródła i jeziora tektoniczne",
      "Mombasa": "Fort Jesus",
      "wybrzeże Oceanu Indyjskiego": "rafy koralowe i nurkowanie"
    },
    "explanation": "Kenia łączy walory dzikiej przyrody, rzeźby tektonicznej, wybrzeża i zabytków kultury."
  },
  {
    "id": "R02_KEN_09",
    "section": "Kenia - turystyczny potencjał",
    "type": "sort",
    "prompt": "Przyporządkuj walory turystyczne Kenii do właściwej grupy.",
    "options": null,
    "items": [
      "fortyfikacje",
      "wybrzeże Oceanu Indyjskiego",
      "obrzędy rdzennej ludności",
      "Wielka Afrykańska Piątka",
      "kościoły i meczety",
      "masyw wulkaniczny Kenia",
      "rezerwaty Masajów",
      "parki i rezerwaty narodowe"
    ],
    "categories": [
      "przyrodnicze",
      "kulturowe"
    ],
    "answer": {
      "przyrodnicze": [
        "wybrzeże Oceanu Indyjskiego",
        "masyw wulkaniczny Kenia",
        "Wielka Afrykańska Piątka",
        "parki i rezerwaty narodowe"
      ],
      "kulturowe": [
        "rezerwaty Masajów",
        "kościoły i meczety",
        "fortyfikacje",
        "obrzędy rdzennej ludności"
      ]
    },
    "explanation": "Przyrodnicze walory wynikają z krajobrazu i fauny, a kulturowe z dziedzictwa, religii, budowli i tradycji mieszkańców."
  },
  {
    "id": "R02_KEN_10",
    "section": "Kenia - turystyczny potencjał",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z turystyką w Afryce i Kenii w kolejności chronologicznej.",
    "options": null,
    "items": [
      "W 2019 r. Afrykę odwiedziło 72 mln turystów",
      "W 2020 r. pandemia COVID-19 zahamowała rozwój turystyki",
      "W 1990 r. Afrykę odwiedziło niecałe 15 mln turystów",
      "We wrześniu 2013 r. doszło do zamachu w Westgate Mall w Nairobi"
    ],
    "answer": [
      "W 1990 r. Afrykę odwiedziło niecałe 15 mln turystów",
      "We wrześniu 2013 r. doszło do zamachu w Westgate Mall w Nairobi",
      "W 2019 r. Afrykę odwiedziło 72 mln turystów",
      "W 2020 r. pandemia COVID-19 zahamowała rozwój turystyki"
    ],
    "explanation": "Kolejność wyznaczają lata 1990, 2013, 2019 i 2020."
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która rzeka uchodzi do bezodpływowej Kotliny Kalahari i tworzy największą deltę śródlądową świata?",
    "options": [
      "Nil",
      "Niger",
      "Kongo",
      "Zambezi",
      "Okawango",
      "Limpopo"
    ],
    "answer": 4,
    "explanation": "Okawango uchodzi do Kotliny Kalahari i tworzy rozległą deltę śródlądową."
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz cechy Wielkich Rowów Afrykańskich.",
    "options": [
      "doliny ograniczone uskokami",
      "liczne aktywne i wygasłe wulkany",
      "duże jeziora tektoniczne",
      "związek z pęknięciem płyty litosfery",
      "szeroki pas nizin nadmorskich",
      "obszar powstały przez działalność lodowca"
    ],
    "image": "r02_row_tektoniczny.jpg",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Wielkie Rowy Afrykańskie to rozległe doliny ograniczone uskokami, z licznymi wulkanami i dużymi jeziorami tektonicznymi, powstałe wskutek pęknięcia płyty litosfery."
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz czynnik klimatyczny z jego skutkiem w Afryce.",
    "options": null,
    "left": [
      "zimny Prąd Benguelski",
      "ciepły Prąd Mozambicki",
      "duża wysokość nad poziomem morza",
      "położenie po obu stronach równika"
    ],
    "right": [
      "chłodniejszy klimat",
      "symetryczny układ stref klimatycznych",
      "więcej opadów na południowo-wschodnim wybrzeżu",
      "mniej opadów na południowo-zachodnim wybrzeżu"
    ],
    "answer": {
      "zimny Prąd Benguelski": "mniej opadów na południowo-zachodnim wybrzeżu",
      "ciepły Prąd Mozambicki": "więcej opadów na południowo-wschodnim wybrzeżu",
      "duża wysokość nad poziomem morza": "chłodniejszy klimat",
      "położenie po obu stronach równika": "symetryczny układ stref klimatycznych"
    },
    "explanation": "Prądy morskie, wysokość i położenie geograficzne razem kształtują klimat kontynentu."
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz strefę roślinną z typowymi glebami.",
    "options": null,
    "left": [
      "wilgotne lasy równikowe",
      "sawanna",
      "pustynie i półpustynie",
      "strefa śródziemnomorska"
    ],
    "right": [
      "gleby cynamonowe",
      "szaroziemy, buroziemy i gleby pustynne",
      "czerwonożółte gleby ferralitowe",
      "gleby cynamonowoczerwone i czerwonobure"
    ],
    "answer": {
      "wilgotne lasy równikowe": "czerwonożółte gleby ferralitowe",
      "sawanna": "gleby cynamonowoczerwone i czerwonobure",
      "pustynie i półpustynie": "szaroziemy, buroziemy i gleby pustynne",
      "strefa śródziemnomorska": "gleby cynamonowe"
    },
    "explanation": "Układ gleb jest powiązany z klimatem i roślinnością, dlatego strefy klimatyczno-roślinno-glebowe układają się niemal symetrycznie względem równika."
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W Sahelu rośnie liczba mieszkańców, uprawy zajmują coraz więcej dawnych pastwisk, stada są liczniejsze, a zapotrzebowanie na drewno opałowe wzrasta. Jaki proces środowiskowy przyspiesza?",
    "options": [
      "zlodowacenie",
      "wulkanizm",
      "zalesianie",
      "pustynnienie"
    ],
    "answer": 3,
    "explanation": "Wzrost presji rolniczej, nadmierny wypas i pozyskiwanie drewna przyspieszają pustynnienie, czyli degradację środowiska na obszarach suchych i półsuchych."
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz działania rolnicze niekorzystne dla środowiska.",
    "options": [
      "wypalanie fragmentów lasu lub sawanny",
      "niszczenie naturalnej pokrywy roślinnej sprzyjające erozji",
      "wieloletnia monokultura",
      "duże zużycie nawozów i środków ochrony roślin",
      "wycinanie lasów pod plantacje",
      "rekultywacja zdegradowanych gleb"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Do presji na środowisko należą wypalanie naturalnej roślinności, erozja po jej usunięciu, monokultura, intensywna chemizacja i wycinanie lasów pod plantacje."
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Z Afryki pochodzi około __________ światowej produkcji kobaltu, platyny, chromu i diamentów, a kontynent zaspokaja prawie __________ światowego zapotrzebowania na złoto, mangan i uran.",
    "options": null,
    "altAnswers": [
      [
        "połowy",
        "1/2",
        "jednej drugiej"
      ],
      [
        "jednej trzeciej",
        "1/3"
      ]
    ],
    "answer": [
      "połowy",
      "jednej trzeciej"
    ],
    "explanation": "Afryka ma bardzo duży udział w światowej produkcji wielu surowców: około 1/2 dla kobaltu, platyny, chromu i diamentów oraz prawie 1/3 dla złota, manganu i uranu."
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W 2017 r. inwestycja finansowana głównie przez podmioty z Chin skróciła czas podróży między Mombasą a Nairobi z 12 do 4,5 godziny. Czego dotyczyła ta inwestycja?",
    "options": [
      "portu lotniczego",
      "linii kolejowej",
      "rurociągu",
      "sieci kanałów nawadniających"
    ],
    "image": "r02_kolej_mombasa_nairobi.jpg",
    "answer": 1,
    "explanation": "Chodziło o uruchomienie linii kolejowej Mombasa-Nairobi, będącej przykładem inwestycji transportowej i infrastrukturalnej."
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż fakty dotyczące sytuacji żywieniowej Etiopii w kolejności chronologicznej.",
    "options": null,
    "items": [
      "W 2017 r. odsetek niedożywionych spadł do 20%",
      "W 2013 r. zawarto kontrakt na zakup 3 tys. polskich ciągników",
      "Klęska głodu w latach 1983-1985",
      "W 1991 r. 75% mieszkańców uznawano za niedożywionych"
    ],
    "answer": [
      "Klęska głodu w latach 1983-1985",
      "W 1991 r. 75% mieszkańców uznawano za niedożywionych",
      "W 2013 r. zawarto kontrakt na zakup 3 tys. polskich ciągników",
      "W 2017 r. odsetek niedożywionych spadł do 20%"
    ],
    "explanation": "Kolejność wyznaczają lata 1983-1985, 1991, 2013 i 2017."
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz informację o Etiopii z właściwym uzupełnieniem.",
    "options": null,
    "left": [
      "Ras Daszan",
      "Rów Abisyński",
      "pora deszczowa",
      "podstawa gospodarki"
    ],
    "right": [
      "rolnictwo",
      "część Wielkich Rowów Afrykańskich",
      "4550 m n.p.m.",
      "około 80% rocznych opadów od czerwca do września"
    ],
    "answer": {
      "Ras Daszan": "4550 m n.p.m.",
      "Rów Abisyński": "część Wielkich Rowów Afrykańskich",
      "pora deszczowa": "około 80% rocznych opadów od czerwca do września",
      "podstawa gospodarki": "rolnictwo"
    },
    "explanation": "Etiopia jest krajem wyżynnym, przecinanym systemem rowów tektonicznych, o nierównomiernym rozkładzie opadów i gospodarce silnie związanej z rolnictwem."
  },
  {
    "id": "R02_HARD_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Z czego słynie Lalibela w Etiopii?",
    "options": [
      "z największego portu Afryki",
      "z rozległych plantacji kakao",
      "z delty śródlądowej",
      "z kopalń diamentów",
      "z raf koralowych",
      "z kościołów wykutych w skałach"
    ],
    "image": "r02_lalibela_kosciol.jpg",
    "answer": 5,
    "explanation": "Lalibela słynie z zespołu 11 kościołów wykutych w skałach wulkanicznych; najbardziej znany jest kościół św. Jerzego."
  },
  {
    "id": "R02_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz zwierzęta należące do Wielkiej Afrykańskiej Piątki.",
    "options": [
      "lew",
      "słoń sawannowy",
      "bawół",
      "nosorożec czarny",
      "lampart",
      "żyrafa",
      "zebra"
    ],
    "image": "r02_masai_mara_safari.jpg",
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Wielką Afrykańską Piątkę tworzą lew, słoń sawannowy, bawół, nosorożec czarny i lampart."
  },
  {
    "id": "R02_HARD_13",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się najstarsze miasto w Kenii, będące ważnym obiektem światowego dziedzictwa?",
    "options": null,
    "altAnswers": [
      "Lamu"
    ],
    "answer": "Lamu",
    "explanation": "Lamu jest zabytkowym, najstarszym miastem Kenii i należy do ważnych walorów kulturowych kraju."
  },
  {
    "id": "R02_HARD_14",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz region Afryki z charakterystyką ruchu turystycznego.",
    "options": null,
    "left": [
      "Afryka Północna",
      "Afryka Wschodnia",
      "Afryka Południowa",
      "Afryka Zachodnia i Środkowa"
    ],
    "right": [
      "dużym zainteresowaniem cieszy się RPA",
      "najmniej turystów m.in. z powodu konfliktów i zagrożenia chorobami",
      "około połowy turystów; popularne są Egipt, Maroko i Tunezja",
      "parki i rezerwaty oraz tereny nadmorskie; popularne są Uganda, Kenia i Tanzania"
    ],
    "answer": {
      "Afryka Północna": "około połowy turystów; popularne są Egipt, Maroko i Tunezja",
      "Afryka Wschodnia": "parki i rezerwaty oraz tereny nadmorskie; popularne są Uganda, Kenia i Tanzania",
      "Afryka Południowa": "dużym zainteresowaniem cieszy się RPA",
      "Afryka Zachodnia i Środkowa": "najmniej turystów m.in. z powodu konfliktów i zagrożenia chorobami"
    },
    "explanation": "Ruch turystyczny w Afryce jest silnie zróżnicowany regionalnie: północ przyciąga najwięcej osób, wschód słynie z przyrody, południe z RPA, a zachód i centrum mają największe bariery."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r02",
  number: 2,
  title: "Afryka",
  icon: "🌍",
  sectionOrder: [
    "Środowisko przyrodnicze Afryki",
    "Rolnictwo Afryki",
    "Przemysł i usługi w Afryce",
    "Etiopia - problemy głodu i niedożywienia",
    "Kenia - turystyczny potencjał"
  ],
  sectionIcons: {
    "Środowisko przyrodnicze Afryki": "🌋",
    "Rolnictwo Afryki": "🌾",
    "Przemysł i usługi w Afryce": "⛏️",
    "Etiopia - problemy głodu i niedożywienia": "🍽️",
    "Kenia - turystyczny potencjał": "🦁"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
