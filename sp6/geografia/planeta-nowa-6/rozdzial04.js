// Skróty sekcji (do identyfikatorów ćwiczeń):
//   GOS  = Gospodarka i przemysł Francji
//   USL  = Usługi i turystyka Francji
//   ENE  = Energetyka Europy
//   ZMI  = Zmiany i przykłady energetyki
//   TUR  = Turystyka Europy Południowej
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_GOS_01",
    "section": "Gospodarka i przemysł Francji",
    "type": "single_choice",
    "prompt": "Który zestaw poprawnie przedstawia trzy sektory gospodarki?",
    "options": [
      "rolnictwo, przemysł, usługi",
      "handel, transport, turystyka",
      "górnictwo, hutnictwo, energetyka",
      "edukacja, zdrowie, banki",
      "uprawa roślin, chów zwierząt, rybołówstwo",
      "eksport, import, produkcja"
    ],
    "answer": 0,
    "explanation": "Gospodarkę dzieli się na trzy sektory: rolnictwo, przemysł oraz usługi."
  },
  {
    "id": "R04_GOS_02",
    "section": "Gospodarka i przemysł Francji",
    "type": "multi_select",
    "prompt": "Zaznacz działania należące do przemysłu.",
    "options": [
      "wydobywanie surowców mineralnych",
      "przetwórstwo przemysłowe",
      "wytwarzanie energii elektrycznej",
      "dostarczanie wody i odprowadzanie ścieków",
      "udzielanie porad prawnych",
      "organizowanie wyjazdów turystycznych"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Przemysł obejmuje górnictwo, przetwórstwo przemysłowe, wytwarzanie energii elektrycznej oraz dostarczanie wody i odprowadzanie ścieków."
  },
  {
    "id": "R04_GOS_03",
    "section": "Gospodarka i przemysł Francji",
    "type": "true_false",
    "prompt": "Najbardziej rozbudowaną częścią przemysłu jest przetwórstwo przemysłowe.",
    "options": null,
    "answer": true,
    "explanation": "Najbardziej rozbudowaną częścią przemysłu jest przetwórstwo przemysłowe."
  },
  {
    "id": "R04_GOS_04",
    "section": "Gospodarka i przemysł Francji",
    "type": "match",
    "prompt": "Połącz dział przetwórstwa przemysłowego z przykładowymi produktami.",
    "options": null,
    "left": [
      "produkcja wyrobów tekstylnych i odzieży",
      "produkcja wyrobów chemicznych i farmaceutycznych",
      "produkcja metali i wyrobów z metali",
      "produkcja komputerów i urządzeń elektronicznych"
    ],
    "right": [
      "tkaniny, dywany, bielizna",
      "farby, kosmetyki, lekarstwa",
      "stal, narzędzia, kontenery",
      "odkurzacze, telewizory, kamery"
    ],
    "answer": {
      "produkcja wyrobów tekstylnych i odzieży": "tkaniny, dywany, bielizna",
      "produkcja wyrobów chemicznych i farmaceutycznych": "farby, kosmetyki, lekarstwa",
      "produkcja metali i wyrobów z metali": "stal, narzędzia, kontenery",
      "produkcja komputerów i urządzeń elektronicznych": "odkurzacze, telewizory, kamery"
    },
    "explanation": "Najważniejsze działy przetwórstwa przemysłowego wytwarzają m.in. tkaniny, lekarstwa, stal i urządzenia elektroniczne."
  },
  {
    "id": "R04_GOS_05",
    "section": "Gospodarka i przemysł Francji",
    "type": "fill_in",
    "prompt": "Przemysł we Francji rozwinął się dzięki złożom __________ takich jak węgiel, gaz ziemny i rudy żelaza oraz dzięki __________.",
    "options": null,
    "answer": [
      "surowców mineralnych",
      "rolnictwu"
    ],
    "altAnswers": [
      [
        "surowców mineralnych",
        "złóż surowców mineralnych"
      ],
      [
        "rolnictwu",
        "rolnictwo"
      ]
    ],
    "explanation": "Dwa ważne czynniki rozwoju przemysłu we Francji to złoża surowców mineralnych oraz rolnictwo."
  },
  {
    "id": "R04_GOS_06",
    "section": "Gospodarka i przemysł Francji",
    "type": "single_choice",
    "prompt": "Który dział należy do najważniejszych współczesnych działów francuskiego przemysłu?",
    "options": [
      "produkcja samochodów i innych środków transportu",
      "wydobycie węgla brunatnego",
      "produkcja wyłącznie wyrobów tekstylnych",
      "tradycyjna produkcja z drewna",
      "chów bydła",
      "organizowanie wycieczek"
    ],
    "answer": 0,
    "image": "r04_fabryka_airbusa.jpg",
    "explanation": "Produkcja samochodów i innych środków transportu należy do najważniejszych działów francuskiego przemysłu."
  },
  {
    "id": "R04_GOS_07",
    "section": "Gospodarka i przemysł Francji",
    "type": "odd_one_out",
    "prompt": "Wskaż nazwę, która nie pasuje do francuskich producentów samochodów: Peugeot, Citroën, Renault, Michelin.",
    "options": null,
    "answer": "Michelin",
    "explanation": "Peugeot, Citroën i Renault to producenci samochodów, a Michelin jest znany między innymi z produkcji opon."
  },
  {
    "id": "R04_GOS_08",
    "section": "Gospodarka i przemysł Francji",
    "type": "scenario",
    "prompt": "Jesteś w Tuluzie i oglądasz zakład wytwarzający znane europejskie samoloty pasażerskie. Jakiej marki samoloty powstają w tym zakładzie?",
    "options": [
      "Airbus",
      "Michelin",
      "L'Oreal",
      "TGV",
      "Renault",
      "Carcassonne"
    ],
    "answer": 0,
    "image": "r04_fabryka_airbusa.jpg",
    "explanation": "W Tuluzie znajduje się największy zakład produkujący samoloty marki Airbus."
  },
  {
    "id": "R04_GOS_09",
    "section": "Gospodarka i przemysł Francji",
    "type": "riddle",
    "prompt": "Obszary koncentracji firm zaawansowanych technologicznie i ośrodków naukowych to...",
    "options": null,
    "answer": "technopolie",
    "altAnswers": [
      "technopolie",
      "technopolia"
    ],
    "explanation": "Technopolie to obszary, na których koncentrują się takie firmy i instytucje, często blisko uniwersytetów."
  },
  {
    "id": "R04_GOS_10",
    "section": "Gospodarka i przemysł Francji",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady działalności do sektorów gospodarki.",
    "options": null,
    "items": [
      "uprawa roślin",
      "chów zwierząt",
      "produkcja samochodów",
      "wydobywanie węgla",
      "handel",
      "transport"
    ],
    "categories": [
      "rolnictwo",
      "przemysł",
      "usługi"
    ],
    "answer": {
      "rolnictwo": [
        "uprawa roślin",
        "chów zwierząt"
      ],
      "przemysł": [
        "produkcja samochodów",
        "wydobywanie węgla"
      ],
      "usługi": [
        "handel",
        "transport"
      ]
    },
    "explanation": "Rolnictwo obejmuje uprawę roślin i chów zwierząt, przemysł wytwarzanie i wydobycie, a usługi obejmują między innymi handel i transport."
  },
  {
    "id": "R04_USL_01",
    "section": "Usługi i turystyka Francji",
    "type": "single_choice",
    "prompt": "Które wyjaśnienie najlepiej opisuje usługi?",
    "options": [
      "część gospodarki zaspokajająca potrzeby ludzi, organizacji i firm bez wytwarzania konkretnych produktów",
      "wydobywanie surowców mineralnych z głębi ziemi",
      "produkcja artykułów na masową skalę",
      "wyłącznie uprawa roślin i chów zwierząt",
      "przetwarzanie energii w elektrowni",
      "tylko sprzedaż towarów za granicę"
    ],
    "answer": 0,
    "explanation": "Usługi zaspokajają potrzeby ludzi, organizacji i firm, ale nie polegają na wytwarzaniu konkretnych produktów."
  },
  {
    "id": "R04_USL_02",
    "section": "Usługi i turystyka Francji",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady usług.",
    "options": [
      "edukacja",
      "ochrona zdrowia",
      "handel",
      "transport",
      "produkcja stali",
      "uprawa winorośli"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do usług należą między innymi edukacja, ochrona zdrowia, handel i transport."
  },
  {
    "id": "R04_USL_03",
    "section": "Usługi i turystyka Francji",
    "type": "true_false",
    "prompt": "W krajach wysoko rozwiniętych gospodarczo większość pracowników jest zatrudniona w usługach.",
    "options": null,
    "answer": true,
    "explanation": "Rolnictwo i przemysł są tam zmechanizowane i nie wymagają tylu pracowników, natomiast zapotrzebowanie na usługi jest duże."
  },
  {
    "id": "R04_USL_04",
    "section": "Usługi i turystyka Francji",
    "type": "fill_in",
    "prompt": "PKB to całkowita wartość __________ i __________ wytworzonych w danym państwie w ciągu roku.",
    "options": null,
    "answer": [
      "dóbr",
      "usług"
    ],
    "altAnswers": [
      [
        "dóbr",
        "dobr"
      ],
      [
        "usług",
        "uslug"
      ]
    ],
    "explanation": "Produkt krajowy brutto obejmuje całkowitą wartość dóbr i usług wytworzonych w państwie w ciągu roku."
  },
  {
    "id": "R04_USL_05",
    "section": "Usługi i turystyka Francji",
    "type": "single_choice",
    "prompt": "Ile osób na 10 pracujących we Francji wykonuje zawody związane z usługami?",
    "options": [
      "8",
      "1",
      "3",
      "5",
      "10",
      "2"
    ],
    "answer": 0,
    "explanation": "We Francji aż 8 na 10 osób pracujących wykonuje zawody związane z usługami."
  },
  {
    "id": "R04_USL_06",
    "section": "Usługi i turystyka Francji",
    "type": "scenario",
    "prompt": "Podróżujesz po Francji pociągiem TGV, który na regularnych trasach osiąga prędkość ponad 300 km/h. Do jakiego rodzaju transportu należy TGV?",
    "options": [
      "kolei dużych prędkości",
      "transportu wodnego",
      "transportu kosmicznego",
      "żeglugi śródlądowej",
      "kolei geotermalnej",
      "transportu rolniczego"
    ],
    "answer": 0,
    "image": "r04_pociag_tgv.jpg",
    "explanation": "TGV to francuska kolej dużych prędkości, jedna z najbardziej znanych na świecie."
  },
  {
    "id": "R04_USL_07",
    "section": "Usługi i turystyka Francji",
    "type": "match",
    "prompt": "Połącz dział usług we Francji z przykładem.",
    "options": null,
    "left": [
      "transport",
      "usługi badawczo-rozwojowe",
      "usługi finansowe",
      "usługi turystyczne"
    ],
    "right": [
      "TGV, lotniska i transport samochodowy",
      "opracowywanie nowych technologii",
      "banki i towarzystwa ubezpieczeniowe",
      "muzea, hotele i restauracje"
    ],
    "answer": {
      "transport": "TGV, lotniska i transport samochodowy",
      "usługi badawczo-rozwojowe": "opracowywanie nowych technologii",
      "usługi finansowe": "banki i towarzystwa ubezpieczeniowe",
      "usługi turystyczne": "muzea, hotele i restauracje"
    },
    "image": "r04_pociag_tgv.jpg",
    "explanation": "We Francji rozwinięte są między innymi usługi transportowe, badawczo-rozwojowe, finansowe i turystyczne."
  },
  {
    "id": "R04_USL_08",
    "section": "Usługi i turystyka Francji",
    "type": "odd_one_out",
    "prompt": "Wskaż przykład, który nie jest usługą wymienioną jako ważna we Francji: handel, transport, usługi finansowe, hutnictwo.",
    "options": null,
    "answer": "hutnictwo",
    "explanation": "Handel, transport i usługi finansowe należą do usług, natomiast hutnictwo jest działem przemysłu."
  },
  {
    "id": "R04_USL_09",
    "section": "Usługi i turystyka Francji",
    "type": "true_false",
    "prompt": "Francja należy do światowych liderów handlu i zajmuje ósme miejsce na świecie pod względem wartości eksportu oraz piąte pod względem importu.",
    "options": null,
    "answer": true,
    "explanation": "Francja zajmuje ósme miejsce na świecie pod względem eksportu i piąte pod względem importu."
  },
  {
    "id": "R04_USL_10",
    "section": "Usługi i turystyka Francji",
    "type": "single_choice",
    "prompt": "Które zdanie najlepiej wyjaśnia szczególną rolę usług turystycznych we Francji?",
    "options": [
      "W 2023 roku Francję odwiedziło najwięcej turystów na świecie, 100 mln osób.",
      "Francja w ogóle nie posiada muzeów ani restauracji.",
      "Francja korzysta wyłącznie z turystyki zimowej.",
      "Usługi turystyczne we Francji są mniej ważne niż chów zwierząt.",
      "Francja leży poza Europą i dlatego przyciąga turystów.",
      "W Paryżu nie działają firmy finansowe."
    ],
    "answer": 0,
    "image": "r04_wieza_eiffla.jpg",
    "explanation": "Szczególną rolę turystyki pokazuje fakt, że w 2023 roku Francję odwiedziło 100 mln turystów, najwięcej na świecie."
  },
  {
    "id": "R04_ENE_01",
    "section": "Energetyka Europy",
    "type": "single_choice",
    "prompt": "Gdzie powstaje energia elektryczna przez przetwarzanie innych rodzajów energii?",
    "options": [
      "w elektrowni",
      "w banku",
      "w biurze podróży",
      "w muzeum",
      "w starówce miasta",
      "w pasiece"
    ],
    "answer": 0,
    "explanation": "Energia elektryczna jest wytwarzana w elektrowni przez przetwarzanie innych rodzajów energii."
  },
  {
    "id": "R04_ENE_02",
    "section": "Energetyka Europy",
    "type": "sort",
    "prompt": "Podziel źródła energii elektrycznej na odnawialne i nieodnawialne.",
    "options": null,
    "items": [
      "energia słoneczna",
      "energia wiatru",
      "energia wody płynącej",
      "energia geotermalna",
      "biomasa",
      "węgiel",
      "ropa naftowa",
      "gaz ziemny",
      "energia jądrowa"
    ],
    "categories": [
      "odnawialne",
      "nieodnawialne"
    ],
    "answer": {
      "odnawialne": [
        "energia słoneczna",
        "energia wiatru",
        "energia wody płynącej",
        "energia geotermalna",
        "biomasa"
      ],
      "nieodnawialne": [
        "węgiel",
        "ropa naftowa",
        "gaz ziemny",
        "energia jądrowa"
      ]
    },
    "explanation": "Źródła odnawialne są niewyczerpywalne, a nieodnawialne obejmują między innymi węgiel, ropę, gaz i energię jądrową."
  },
  {
    "id": "R04_ENE_03",
    "section": "Energetyka Europy",
    "type": "multi_select",
    "prompt": "Zaznacz odnawialne źródła energii.",
    "options": [
      "energia słoneczna",
      "energia wiatru",
      "energia wody płynącej",
      "energia geotermalna",
      "ropa naftowa",
      "energia jądrowa"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do odnawialnych źródeł należą energia słoneczna, energia wiatru, energia wody płynącej, energia geotermalna oraz biomasa."
  },
  {
    "id": "R04_ENE_04",
    "section": "Energetyka Europy",
    "type": "true_false",
    "prompt": "Źródła nieodnawialne są wyczerpywalne, a wytwarzanie z nich energii wymaga surowców mineralnych, których nie da się odtworzyć.",
    "options": null,
    "answer": true,
    "explanation": "Nieodnawialne źródła energii wykorzystują surowce mineralne, takie jak węgiel, ropa naftowa i gaz ziemny, których zasoby mogą się skończyć."
  },
  {
    "id": "R04_ENE_05",
    "section": "Energetyka Europy",
    "type": "fill_in",
    "prompt": "Energia __________ to ciepło pochodzące z wnętrza Ziemi, a energia ze spalania roślin to __________.",
    "options": null,
    "answer": [
      "geotermalna",
      "biomasa"
    ],
    "altAnswers": [
      [
        "geotermalna",
        "geotermiczna"
      ],
      [
        "biomasa",
        "energia biomasy"
      ]
    ],
    "explanation": "Energia geotermalna pochodzi z wnętrza Ziemi, a biomasa to energia powstająca między innymi podczas spalania roślin."
  },
  {
    "id": "R04_ENE_06",
    "section": "Energetyka Europy",
    "type": "match",
    "prompt": "Połącz źródło nieodnawialne z opisem.",
    "options": null,
    "left": [
      "węgiel",
      "ropa naftowa",
      "gaz ziemny",
      "energia jądrowa"
    ],
    "right": [
      "może być kamienny albo brunatny",
      "surowiec spalany w elektrowniach cieplnych",
      "surowiec wydobywany między innymi na Morzu Północnym",
      "uzyskiwana głównie z przemian uranu"
    ],
    "answer": {
      "węgiel": "może być kamienny albo brunatny",
      "ropa naftowa": "surowiec spalany w elektrowniach cieplnych",
      "gaz ziemny": "surowiec wydobywany między innymi na Morzu Północnym",
      "energia jądrowa": "uzyskiwana głównie z przemian uranu"
    },
    "explanation": "Nieodnawialne źródła energii obejmują węgiel, ropę naftową, gaz ziemny oraz energię jądrową uzyskiwaną głównie z uranu."
  },
  {
    "id": "R04_ENE_07",
    "section": "Energetyka Europy",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do odnawialnych źródeł energii: energia słoneczna, energia wiatru, energia wody płynącej, ropa naftowa.",
    "options": null,
    "answer": "ropa naftowa",
    "explanation": "Ropa naftowa jest źródłem nieodnawialnym, a energia słoneczna, wiatru i wody płynącej są odnawialne."
  },
  {
    "id": "R04_ENE_08",
    "section": "Energetyka Europy",
    "type": "scenario",
    "prompt": "Na morzu widzisz platformy wiertnicze, które są głównym obszarem europejskiego wydobycia pewnych surowców. O które surowce chodzi?",
    "options": [
      "ropa naftowa i gaz ziemny",
      "uran i biomasa",
      "węgiel brunatny i sól",
      "lawenda i winogrona",
      "energia słoneczna i energia wiatru",
      "wapień i marmur"
    ],
    "answer": 0,
    "image": "r04_platforma_wiertnicza.jpg",
    "explanation": "Głównym obszarem wydobycia ropy naftowej i gazu ziemnego w Europie jest Morze Północne."
  },
  {
    "id": "R04_ENE_09",
    "section": "Energetyka Europy",
    "type": "riddle",
    "prompt": "Elektrownia wykorzystująca uran do wytwarzania energii to elektrownia...",
    "options": null,
    "answer": "jądrowa",
    "altAnswers": [
      "jądrowa",
      "atomowa",
      "elektrownia jądrowa",
      "elektrownia atomowa"
    ],
    "image": "r04_elektrownia_jadrowa.jpg",
    "explanation": "Energia jądrowa jest uzyskiwana podczas przemian pierwiastków chemicznych, głównie uranu."
  },
  {
    "id": "R04_ENE_10",
    "section": "Energetyka Europy",
    "type": "sequence",
    "prompt": "Ułóż etapy od źródła energii do działania urządzeń elektrycznych.",
    "options": null,
    "items": [
      "wytworzenie energii elektrycznej",
      "energia z wybranego źródła",
      "zasilanie urządzeń",
      "przetwarzanie energii w elektrowni"
    ],
    "answer": [
      "energia z wybranego źródła",
      "przetwarzanie energii w elektrowni",
      "wytworzenie energii elektrycznej",
      "zasilanie urządzeń"
    ],
    "explanation": "W elektrowni inne rodzaje energii są przetwarzane na energię elektryczną, która zasila urządzenia."
  },
  {
    "id": "R04_ZMI_01",
    "section": "Zmiany i przykłady energetyki",
    "type": "single_choice",
    "prompt": "Gdzie najczęściej buduje się elektrownie wodne?",
    "options": [
      "w górach, gdzie rzeki mają duży spadek",
      "wyłącznie na pustyniach",
      "tylko w centrach miast",
      "zawsze daleko od rzek",
      "wyłącznie przy kopalniach węgla",
      "tylko na lotniskach"
    ],
    "answer": 0,
    "image": "r04_elektrownia_wodna_gory.jpg",
    "explanation": "Elektrownie wodne najczęściej buduje się w górach, gdzie rzeki mają duży spadek i łatwiej wykorzystać energię płynącej wody."
  },
  {
    "id": "R04_ZMI_02",
    "section": "Zmiany i przykłady energetyki",
    "type": "single_choice",
    "prompt": "W których krajach Europy panują najlepsze warunki do rozwoju energetyki geotermalnej?",
    "options": [
      "na Islandii i we Włoszech",
      "w Danii i Norwegii",
      "w Grecji i Hiszpanii",
      "w Polsce i Francji",
      "w Austrii i Chorwacji",
      "w Belgii i Holandii"
    ],
    "answer": 0,
    "explanation": "Najlepsze warunki do rozwoju energetyki geotermalnej w Europie panują na Islandii i we Włoszech."
  },
  {
    "id": "R04_ZMI_03",
    "section": "Zmiany i przykłady energetyki",
    "type": "multi_select",
    "prompt": "Zaznacz elementy środowiska przyrodniczego wpływające na to, jakie elektrownie działają w danym kraju.",
    "options": [
      "rzeźba terenu",
      "klimat",
      "sieć rzeczna",
      "złoża surowców mineralnych",
      "kolor flagi państwowej",
      "waluta kraju"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Na typy elektrowni wpływają między innymi rzeźba terenu, klimat, sieć rzeczna i złoża surowców mineralnych."
  },
  {
    "id": "R04_ZMI_04",
    "section": "Zmiany i przykłady energetyki",
    "type": "true_false",
    "prompt": "Elektrownie wiatrowe powstają głównie na obszarach, gdzie często wieje wiatr, zwłaszcza na wybrzeżach i w rozległych dolinach.",
    "options": null,
    "answer": true,
    "image": "r04_wiatraki_nad_morzem.jpg",
    "explanation": "Wybrzeża i rozległe doliny sprzyjają budowie elektrowni wiatrowych."
  },
  {
    "id": "R04_ZMI_05",
    "section": "Zmiany i przykłady energetyki",
    "type": "match",
    "prompt": "Połącz kraj z przykładem produkcji energii elektrycznej.",
    "options": null,
    "left": [
      "Polska",
      "Norwegia",
      "Islandia",
      "Dania",
      "Grecja"
    ],
    "right": [
      "energia z węgla brunatnego",
      "ogromna rola elektrowni wodnych",
      "duże znaczenie elektrowni geotermalnych",
      "spory udział elektrowni wiatrowych",
      "duże wykorzystanie energii słonecznej"
    ],
    "answer": {
      "Polska": "energia z węgla brunatnego",
      "Norwegia": "ogromna rola elektrowni wodnych",
      "Islandia": "duże znaczenie elektrowni geotermalnych",
      "Dania": "spory udział elektrowni wiatrowych",
      "Grecja": "duże wykorzystanie energii słonecznej"
    },
    "explanation": "W poszczególnych państwach duże znaczenie mają różne rodzaje elektrowni, zależnie od warunków środowiska."
  },
  {
    "id": "R04_ZMI_06",
    "section": "Zmiany i przykłady energetyki",
    "type": "fill_in",
    "prompt": "W Europie zmniejsza się produkcja energii ze źródeł __________, a zwiększa ze źródeł __________.",
    "options": null,
    "answer": [
      "nieodnawialnych",
      "odnawialnych"
    ],
    "altAnswers": [
      [
        "nieodnawialnych",
        "nieodnawialne"
      ],
      [
        "odnawialnych",
        "odnawialne"
      ]
    ],
    "explanation": "Od początku XXI wieku w Europie spada udział energii ze źródeł nieodnawialnych, a rośnie udział źródeł odnawialnych."
  },
  {
    "id": "R04_ZMI_07",
    "section": "Zmiany i przykłady energetyki",
    "type": "scenario",
    "prompt": "Analizujesz wykres struktury produkcji energii elektrycznej w kraju, w którym elektrownie jądrowe wytwarzają niemal dwie trzecie energii. Jaki to kraj?",
    "options": [
      "Francja",
      "Dania",
      "Grecja",
      "Norwegia",
      "Islandia",
      "Chorwacja"
    ],
    "answer": 0,
    "image": "r04_elektrownia_jadrowa.jpg",
    "explanation": "Przykładem kraju o bardzo dużym udziale energii jądrowej jest Francja, gdzie powstaje w ten sposób niemal dwie trzecie energii elektrycznej."
  },
  {
    "id": "R04_ZMI_08",
    "section": "Zmiany i przykłady energetyki",
    "type": "multi_select",
    "prompt": "Zaznacz informacje o elektrowniach jądrowych.",
    "options": [
      "są bardzo wydajne",
      "nie zanieczyszczają powietrza",
      "podczas ich pracy powstają bardzo szkodliwe odpady",
      "wiele osób obawia się ich awarii",
      "zawsze wymagają zalania dużego obszaru",
      "produkują prąd tylko wtedy, gdy wieje wiatr"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Elektrownie jądrowe są wydajne i nie zanieczyszczają powietrza, ale powodują problem szkodliwych odpadów i budzą obawy przed awarią."
  },
  {
    "id": "R04_ZMI_09",
    "section": "Zmiany i przykłady energetyki",
    "type": "riddle",
    "prompt": "Rodzaj węgla, który traci na jakości podczas transportu i dlatego elektrownie opalane nim są silnie zależne od miejsca wydobycia, to...",
    "options": null,
    "answer": "węgiel brunatny",
    "altAnswers": [
      "węgiel brunatny",
      "brunatny"
    ],
    "explanation": "Węgiel brunatny traci na jakości podczas transportu, dlatego elektrownie opalane tym surowcem lokalizuje się blisko jego wydobycia."
  },
  {
    "id": "R04_ZMI_10",
    "section": "Zmiany i przykłady energetyki",
    "type": "odd_one_out",
    "prompt": "Wskaż parę, która nie pasuje do przykładów z lekcji: Norwegia - elektrownie wodne, Islandia - elektrownie geotermalne, Dania - elektrownie wiatrowe, Francja - elektrownie słoneczne.",
    "options": null,
    "answer": "Francja - elektrownie słoneczne",
    "explanation": "Francja jest przykładem kraju o dużym udziale elektrowni jądrowych, a elektrownie słoneczne silnie kojarzono z Grecją."
  },
  {
    "id": "R04_TUR_01",
    "section": "Turystyka Europy Południowej",
    "type": "single_choice",
    "prompt": "Czym są walory turystyczne?",
    "options": [
      "cechami środowiska lub obiektami kultury, które budzą zainteresowanie turystów",
      "wyłącznie hotelami i drogami",
      "jedynie zyskami państwa z turystyki",
      "tylko zakładami przemysłowymi na wybrzeżu",
      "rodzajem surowców mineralnych",
      "nazwą kolei dużych prędkości"
    ],
    "answer": 0,
    "explanation": "Walory turystyczne to cechy środowiska przyrodniczego lub obiekty kultury, które przyciągają turystów."
  },
  {
    "id": "R04_TUR_02",
    "section": "Turystyka Europy Południowej",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do walorów przyrodniczych, walorów kulturowych i infrastruktury turystycznej.",
    "options": null,
    "items": [
      "klimat podzwrotnikowy",
      "ciepłe morze",
      "urozmaicone wybrzeże",
      "Koloseum",
      "Akropol",
      "muzea",
      "hotele",
      "drogi",
      "biura podróży"
    ],
    "categories": [
      "walory przyrodnicze",
      "walory kulturowe",
      "infrastruktura turystyczna"
    ],
    "answer": {
      "walory przyrodnicze": [
        "klimat podzwrotnikowy",
        "ciepłe morze",
        "urozmaicone wybrzeże"
      ],
      "walory kulturowe": [
        "Koloseum",
        "Akropol",
        "muzea"
      ],
      "infrastruktura turystyczna": [
        "hotele",
        "drogi",
        "biura podróży"
      ]
    },
    "explanation": "Walory dzielą się na przyrodnicze i kulturowe, natomiast hotele, drogi i biura podróży są częścią infrastruktury turystycznej."
  },
  {
    "id": "R04_TUR_03",
    "section": "Turystyka Europy Południowej",
    "type": "multi_select",
    "prompt": "Zaznacz walory przyrodnicze Europy Południowej.",
    "options": [
      "klimat podzwrotnikowy",
      "ciepłe wody Morza Śródziemnego",
      "urozmaicone wybrzeże",
      "góry i obszary krasowe",
      "starówki miast",
      "muzea"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r04_lazurowe_wybrzeze.jpg",
    "explanation": "Do walorów przyrodniczych należą klimat podzwrotnikowy, ciepłe morze, urozmaicone wybrzeże, góry i obszary krasowe."
  },
  {
    "id": "R04_TUR_04",
    "section": "Turystyka Europy Południowej",
    "type": "match",
    "prompt": "Połącz atrakcję lub miejsce z opisem.",
    "options": null,
    "left": [
      "Wenecja",
      "Lazurowe Wybrzeże",
      "Jeziora Plitwickie",
      "Rzym"
    ],
    "right": [
      "miasto położone na ponad stu wyspach oddzielonych kanałami",
      "miejsce, gdzie góry spotykają morze i tworzą zatoki",
      "chorwackie jeziora połączone malowniczymi wodospadami",
      "starożytna stolica z Koloseum"
    ],
    "answer": {
      "Wenecja": "miasto położone na ponad stu wyspach oddzielonych kanałami",
      "Lazurowe Wybrzeże": "miejsce, gdzie góry spotykają morze i tworzą zatoki",
      "Jeziora Plitwickie": "chorwackie jeziora połączone malowniczymi wodospadami",
      "Rzym": "starożytna stolica z Koloseum"
    },
    "image": "r04_lazurowe_wybrzeze.jpg",
    "explanation": "Do atrakcyjnych turystycznie miejsc Europy Południowej należą między innymi Wenecja, Lazurowe Wybrzeże, Jeziora Plitwickie i Rzym."
  },
  {
    "id": "R04_TUR_05",
    "section": "Turystyka Europy Południowej",
    "type": "true_false",
    "prompt": "Infrastruktura turystyczna obejmuje między innymi drogi, hotele, restauracje, biura podróży, wyciągi i wypożyczalnie.",
    "options": null,
    "answer": true,
    "explanation": "Infrastruktura turystyczna to obiekty i instytucje umożliwiające korzystanie z walorów turystycznych odwiedzanych miejsc."
  },
  {
    "id": "R04_TUR_06",
    "section": "Turystyka Europy Południowej",
    "type": "fill_in",
    "prompt": "Turystyka w Europie Południowej stwarza miejsca __________ i przynosi państwom wysokie __________.",
    "options": null,
    "answer": [
      "pracy",
      "dochody"
    ],
    "altAnswers": [
      [
        "pracy",
        "miejsca pracy"
      ],
      [
        "dochody",
        "zyski"
      ]
    ],
    "explanation": "Usługi turystyczne dają pracę między innymi w hotelach, restauracjach, muzeach i biurach podróży oraz przynoszą państwom dochody."
  },
  {
    "id": "R04_TUR_07",
    "section": "Turystyka Europy Południowej",
    "type": "scenario",
    "prompt": "Zwiedzasz w Rzymie budowlę z czasów starożytnego Cesarstwa Rzymskiego, wzniesioną w I wieku n.e. Jak nazywa się ten obiekt?",
    "options": [
      "Koloseum",
      "Akropol",
      "Sagrada Familia",
      "Wieża Eiffla",
      "Panteon w Paryżu",
      "TGV"
    ],
    "answer": 0,
    "image": "r04_koloseum.jpg",
    "explanation": "Koloseum w Rzymie jest zabytkiem starożytnego Cesarstwa Rzymskiego, wzniesionym w I wieku n.e."
  },
  {
    "id": "R04_TUR_08",
    "section": "Turystyka Europy Południowej",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do walorów kulturowych Europy Południowej: starówki miast, świątynie, muzea, ciepłe morze.",
    "options": null,
    "answer": "ciepłe morze",
    "explanation": "Ciepłe morze jest walorem przyrodniczym, a starówki, świątynie i muzea są walorami kulturowymi."
  },
  {
    "id": "R04_TUR_09",
    "section": "Turystyka Europy Południowej",
    "type": "single_choice",
    "prompt": "Co stało się z turystyką w krajach Europy Południowej w latach 2020-2021?",
    "options": [
      "pandemia COVID-19 i ograniczenia podróży spowodowały spadek liczby turystów oraz dochodów",
      "turystyka całkowicie zastąpiła rolnictwo we wszystkich krajach",
      "liczba turystów stale rosła bez żadnych ograniczeń",
      "zamknięto tylko elektrownie jądrowe",
      "wzrosła liczba kopalń węgla brunatnego",
      "turyści zaczęli odwiedzać wyłącznie kraje północne"
    ],
    "answer": 0,
    "explanation": "W czasie pandemii wprowadzono ograniczenia podróży, przez co liczba turystów i dochody z turystyki w wielu krajach spadły."
  },
  {
    "id": "R04_TUR_10",
    "section": "Turystyka Europy Południowej",
    "type": "riddle",
    "prompt": "Chorwacka atrakcja krasowa z kilkunastoma jeziorami połączonymi malowniczymi wodospadami to...",
    "options": null,
    "answer": "Jeziora Plitwickie",
    "altAnswers": [
      "Jeziora Plitwickie",
      "Plitwickie",
      "Park Narodowy Jezior Plitwickich"
    ],
    "image": "r04_jeziora_plitwickie.jpg",
    "explanation": "Jeziora Plitwickie w Chorwacji tworzą krajobraz krasowy z licznymi jeziorami i wodospadami."
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Co nazwano Francją metropolitalną?",
    "options": [
      "obszar Francji w Europie Zachodniej razem z Korsyką",
      "wszystkie francuskie obszary na innych kontynentach",
      "wyłącznie Paryż i jego okolice",
      "tylko Gujanę Francuską, Gwadelupę i Martynikę",
      "całą Europę Południową",
      "Morze Północne i jego platformy"
    ],
    "answer": 0,
    "image": "r04_mapa_francji.jpg",
    "explanation": "Francją metropolitalną nazwano obszar Francji w Europie Zachodniej oraz Korsykę na Morzu Śródziemnym."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Francja metropolitalna ma powierzchnię __________, a PKB na osobę wynosi __________ dol. amer. w 2023 roku.",
    "options": null,
    "answer": [
      "551 700 km²",
      "44 461"
    ],
    "altAnswers": [
      [
        "551 700 km²",
        "551 700 km2",
        "551700 km²",
        "551700 km2"
      ],
      [
        "44 461",
        "44461",
        "44 461 dol. amer."
      ]
    ],
    "explanation": "Francja metropolitalna ma powierzchnię 551 700 km², a PKB na osobę wynosiło 44 461 dol. amer. w 2023 roku."
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz francuskie obszary położone poza Europą.",
    "options": [
      "Gujana Francuska",
      "Gwadelupa",
      "Martynika",
      "Korsyka",
      "Sycylia",
      "Majorka"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Do obszarów Francji położonych poza Europą należą Gujana Francuska, Gwadelupa i Martynika. Korsyka należy do Francji metropolitalnej."
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Planujesz lokalizację zakładu produkującego zaawansowany sprzęt elektroniczny. Dlaczego warto umieścić go w technopolii, blisko ośrodka naukowego?",
    "options": [
      "bo taka produkcja wymaga wykwalifikowanych pracowników oraz zaplecza naukowo-badawczego",
      "bo w technopolii zawsze znajdują się tylko kopalnie węgla brunatnego",
      "bo sprzęt elektroniczny nie wymaga badań ani nowych technologii",
      "bo każda technopolia leży przy Morzu Śródziemnym",
      "bo technopolie są wyłącznie ośrodkami turystycznymi",
      "bo służą głównie do chowu zwierząt"
    ],
    "answer": 0,
    "explanation": "Nowoczesna produkcja wymaga odpowiednio wykształconych pracowników i stałej współpracy przedsiębiorców z naukowcami."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz znaną francuską firmę lub markę z produktem.",
    "options": null,
    "left": [
      "Renault",
      "Airbus",
      "Michelin",
      "L'Oreal"
    ],
    "right": [
      "samochody",
      "samoloty pasażerskie",
      "opony",
      "kosmetyki"
    ],
    "answer": {
      "Renault": "samochody",
      "Airbus": "samoloty pasażerskie",
      "Michelin": "opony",
      "L'Oreal": "kosmetyki"
    },
    "explanation": "Renault produkuje samochody, Airbus samoloty, Michelin opony, a L'Oreal kosmetyki."
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż ciąg przyczynowo-skutkowy dotyczący rozwoju wybranych działów przemysłu Francji.",
    "options": null,
    "items": [
      "rozwój produkcji artykułów spożywczych i odzieży",
      "korzystne warunki rolnictwa",
      "produkty rolne wysokiej jakości trafiają do zakładów",
      "produkcja artykułów spożywczych i napojów nadal ma znaczenie"
    ],
    "answer": [
      "korzystne warunki rolnictwa",
      "produkty rolne wysokiej jakości trafiają do zakładów",
      "rozwój produkcji artykułów spożywczych i odzieży",
      "produkcja artykułów spożywczych i napojów nadal ma znaczenie"
    ],
    "explanation": "Korzystne rolnictwo dostarczało wysokiej jakości surowców, co sprzyjało produkcji żywności, tekstyliów i odzieży; spośród dawnych działów szczególne znaczenie zachowała produkcja żywności i napojów."
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "W 2023 roku Francja była pierwsza na świecie pod względem wartości eksportu i piąta pod względem importu.",
    "options": null,
    "answer": false,
    "explanation": "Francja zajmuje ósme miejsce na świecie pod względem wartości eksportu i piąte pod względem importu. Pierwszeństwo dotyczy liczby turystów odwiedzających Francję w 2023 roku."
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaki jest główny obszar wydobycia ropy naftowej i gazu ziemnego w Europie?",
    "options": [
      "Morze Północne",
      "Morze Śródziemne",
      "Zatoka Biskajska",
      "Jeziora Plitwickie",
      "Dolina Loary",
      "Korsyka"
    ],
    "answer": 0,
    "image": "r04_platforma_wiertnicza.jpg",
    "explanation": "Głównym europejskim obszarem wydobycia ropy naftowej i gazu ziemnego jest Morze Północne."
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Węgiel brunatny traci na __________ podczas transportu, dlatego elektrownie opalane nim są szczególnie zależne od miejsca __________.",
    "options": null,
    "answer": [
      "jakości",
      "wydobycia"
    ],
    "altAnswers": [
      [
        "jakości",
        "jakosci"
      ],
      [
        "wydobycia",
        "wydobywania"
      ]
    ],
    "explanation": "Elektrownie cieplne opalane węglem brunatnym są uzależnione od miejsca wydobycia, ponieważ ten rodzaj węgla traci na jakości podczas transportu."
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz wady odnawialnych źródeł energii.",
    "options": [
      "zazwyczaj produkują mniej prądu niż elektrownie cieplne",
      "są w dużym stopniu uzależnione od warunków środowiska",
      "w wielu krajach klimat lub rzeźba terenu nie pozwalają uzyskać z nich wystarczającej ilości energii",
      "zawsze zanieczyszczają powietrze bardziej niż węgiel",
      "wymagają przemian uranu",
      "tworzą bardzo szkodliwe odpady jądrowe"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Odnawialne źródła energii mają też wady: zwykle dają mniej prądu i zależą od warunków środowiska, które nie wszędzie są wystarczające."
  },
  {
    "id": "R04_HARD_11",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz rodzaj elektrowni z państwem podanym jako przykład.",
    "options": null,
    "left": [
      "elektrownie wodne",
      "elektrownie geotermalne",
      "elektrownie wiatrowe",
      "elektrownie słoneczne"
    ],
    "right": [
      "Norwegia",
      "Islandia i Włochy",
      "Dania",
      "Grecja"
    ],
    "answer": {
      "elektrownie wodne": "Norwegia",
      "elektrownie geotermalne": "Islandia i Włochy",
      "elektrownie wiatrowe": "Dania",
      "elektrownie słoneczne": "Grecja"
    },
    "image": "r04_elektrownia_geotermalna.jpg",
    "explanation": "Łączy się Norwegię z energetyką wodną, Islandię i Włochy z geotermalną, Danię z wiatrową, a Grecję ze słoneczną."
  },
  {
    "id": "R04_HARD_12",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W którym prowansalskim miasteczku działają dwie najstarsze na świecie wytwórnie perfum?",
    "options": [
      "Grasse",
      "Cannes",
      "Nicea",
      "Saint-Tropez",
      "Marsylia",
      "Carcassonne"
    ],
    "answer": 0,
    "image": "r04_pola_lawendy.jpg",
    "explanation": "Dwie najstarsze wytwórnie perfum działają w miasteczku Grasse w Prowansji."
  },
  {
    "id": "R04_HARD_13",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz informacje, które opisują Carcassonne.",
    "options": [
      "jest położone na wzgórzu",
      "słynie z dobrze zachowanych średniowiecznych obiektów obronnych",
      "można tam zobaczyć zamek książęcy z XII wieku",
      "ma dwa pierścienie murów obronnych o łącznej długości 3 km",
      "jest stolicą Francji",
      "leży w Chorwacji nad Jeziorem Plitwickim"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r04_carcassonne_twierdza.jpg",
    "explanation": "Carcassonne leży na wzgórzu i zachowało średniowieczne obiekty obronne, zamek z XII wieku oraz dwa pierścienie murów o długości 3 km."
  },
  {
    "id": "R04_HARD_14",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do typu waloru turystycznego Europy Południowej.",
    "options": null,
    "items": [
      "klimat podzwrotnikowy",
      "Jeziora Plitwickie",
      "Lazurowe Wybrzeże",
      "Koloseum",
      "Akropol",
      "flamenco"
    ],
    "categories": [
      "walory przyrodnicze",
      "walory kulturowe"
    ],
    "answer": {
      "walory przyrodnicze": [
        "klimat podzwrotnikowy",
        "Jeziora Plitwickie",
        "Lazurowe Wybrzeże"
      ],
      "walory kulturowe": [
        "Koloseum",
        "Akropol",
        "flamenco"
      ]
    },
    "explanation": "Klimat, jeziora i urozmaicone wybrzeże są walorami przyrodniczymi, a zabytki oraz flamenco należą do walorów kulturowych."
  }
];

const KID_PROMPTS = {
  "R04_GOS_01": "Jakie są trzy sektory gospodarki?",
  "R04_GOS_05": "Co pomagało rozwinąć przemysł we Francji?",
  "R04_USL_01": "Czym są usługi?",
  "R04_USL_05": "Ile z 10 pracujących osób we Francji pracuje w usługach?",
  "R04_ENE_02": "Podziel źródła energii na odnawialne i nieodnawialne.",
  "R04_ENE_09": "Jak nazywa się elektrownia, która używa uranu?",
  "R04_ZMI_07": "Który kraj wytwarza dużo energii w elektrowniach jądrowych?",
  "R04_TUR_01": "Co przyciąga turystów do danego miejsca?",
  "R04_TUR_05": "Co należy do infrastruktury turystycznej?",
  "R04_HARD_12": "W jakim miasteczku w Prowansji są stare wytwórnie perfum?"
};

const chapter = {
  id: "r04",
  number: 4,
  title: "Gospodarka Europy",
  icon: "💶",
  sectionOrder: [
    "Gospodarka i przemysł Francji",
    "Usługi i turystyka Francji",
    "Energetyka Europy",
    "Zmiany i przykłady energetyki",
    "Turystyka Europy Południowej"
  ],
  sectionIcons: {
    "Gospodarka i przemysł Francji": "🏭",
    "Usługi i turystyka Francji": "🚄",
    "Energetyka Europy": "⚡",
    "Zmiany i przykłady energetyki": "🌍",
    "Turystyka Europy Południowej": "🏖️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
