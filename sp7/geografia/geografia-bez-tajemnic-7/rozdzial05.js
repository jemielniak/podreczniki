// Skróty sekcji (do identyfikatorów ćwiczeń):
//   ROL  = Czynniki rozwoju rolnictwa
//   UPR  = Uprawa roślin i chów zwierząt w Polsce
//   ENE  = Warunki rozwoju gospodarki energetycznej
//   PRZ  = Przemiany przemysłu w Polsce
//   TEC  = Przemysł zaawansowanych technologii
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R05_ROL_01",
    "section": "Czynniki rozwoju rolnictwa",
    "type": "single_choice",
    "prompt": "Do którego sektora gospodarki należy rolnictwo?",
    "options": [
      "pierwszego",
      "drugiego",
      "trzeciego",
      "czwartego",
      "sektora usług",
      "sektora przemysłowego"
    ],
    "answer": 0,
    "explanation": "Rolnictwo należy do pierwszego sektora gospodarki. Obejmuje uprawę roślin oraz chów i hodowlę zwierząt."
  },
  {
    "id": "R05_ROL_02",
    "section": "Czynniki rozwoju rolnictwa",
    "type": "multi_select",
    "prompt": "Zaznacz przyrodnicze czynniki wpływające na rozwój rolnictwa.",
    "options": [
      "ukształtowanie powierzchni",
      "usłonecznienie i temperatura",
      "wody powierzchniowe i podziemne",
      "opady",
      "gleby",
      "wielkość gospodarstwa"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Do czynników przyrodniczych należą m.in. rzeźba terenu, klimat, zasoby wodne, opady i gleby. Wielkość gospodarstwa jest czynnikiem pozaprzyrodniczym.",
    "image": "r05_warunki_rolnictwa.jpg"
  },
  {
    "id": "R05_ROL_03",
    "section": "Czynniki rozwoju rolnictwa",
    "type": "fill_in",
    "prompt": "Poza obszarami górskimi okres wegetacyjny trwa od około __________ dni na północnym wschodzie do około __________ dni na zachodzie Polski.",
    "options": null,
    "answer": [
      "180-190",
      "230"
    ],
    "altAnswers": [
      [
        "180-190",
        "180–190"
      ],
      [
        "230",
        "230 dni"
      ]
    ],
    "explanation": "Długość okresu wegetacyjnego wzrasta od około 180-190 dni na północnym wschodzie do około 230 dni na zachodzie kraju."
  },
  {
    "id": "R05_ROL_04",
    "section": "Czynniki rozwoju rolnictwa",
    "type": "single_choice",
    "prompt": "W których regionach roczne opady poniżej 500 mm bywają niewystarczające dla rolnictwa?",
    "options": [
      "w Wielkopolsce i na Mazowszu",
      "na Podhalu i w Bieszczadach",
      "na Wyżynie Lubelskiej i Żuławach Wiślanych",
      "na Suwalszczyźnie i Podlasiu",
      "na Nizinie Śląskiej i w Sudetach",
      "na Pomorzu i Kujawach"
    ],
    "answer": 0,
    "explanation": "W Wielkopolsce i na Mazowszu opady poniżej 500 mm rocznie bywają zbyt małe. Niedobór wody jest jednym z ważniejszych problemów polskiego rolnictwa."
  },
  {
    "id": "R05_ROL_05",
    "section": "Czynniki rozwoju rolnictwa",
    "type": "match",
    "prompt": "Połącz region z charakterystycznym warunkiem rozwoju rolnictwa.",
    "options": null,
    "left": [
      "Nizina Śląska",
      "Wyżyna Lubelska",
      "Podlasie i Suwalszczyzna",
      "Podhale"
    ],
    "right": [
      "łagodny klimat, żyzne gleby i równinny teren",
      "bardzo żyzne gleby, ale miejscami problem erozji",
      "mało żyzne gleby i krótki okres wegetacyjny",
      "górskie ukształtowanie powierzchni"
    ],
    "answer": {
      "Nizina Śląska": "łagodny klimat, żyzne gleby i równinny teren",
      "Wyżyna Lubelska": "bardzo żyzne gleby, ale miejscami problem erozji",
      "Podlasie i Suwalszczyzna": "mało żyzne gleby i krótki okres wegetacyjny",
      "Podhale": "górskie ukształtowanie powierzchni"
    },
    "explanation": "Warunki rolnicze są w Polsce silnie zróżnicowane regionalnie: Nizina Śląska ma bardzo dobre warunki, Wyżyna Lubelska żyzne gleby, a Suwalszczyzna i Podhale istotne ograniczenia.",
    "image": "r05_warunki_rolnictwa.jpg"
  },
  {
    "id": "R05_ROL_06",
    "section": "Czynniki rozwoju rolnictwa",
    "type": "true_false",
    "prompt": "Średnia powierzchnia gruntów rolnych w gospodarstwie w Polsce wynosiła w 2021 roku około 12 ha.",
    "options": null,
    "answer": true,
    "explanation": "Średnia krajowa wynosiła około 12 ha. Gospodarstwa w Polsce należą do mniejszych w Unii Europejskiej."
  },
  {
    "id": "R05_ROL_07",
    "section": "Czynniki rozwoju rolnictwa",
    "type": "scenario",
    "prompt": "Rolnik posiada kilka długich i bardzo wąskich pól położonych obok siebie i w różnych miejscach wsi. Co przede wszystkim utrudnia mu sprawną uprawę tych gruntów?",
    "options": [
      "duże rozdrobnienie gruntów",
      "zbyt długi okres wegetacyjny",
      "nadmiar czarnoziemów",
      "zbyt duża powierzchnia gospodarstwa",
      "brak opadów w całej Polsce",
      "zbyt duża liczba ciągników"
    ],
    "answer": 0,
    "explanation": "Rozdrobnienie gruntów oznacza podział gospodarstwa na wiele małych działek. Taki układ, typowy m.in. dla części Małopolski i Podkarpacia, utrudnia uprawę.",
    "image": "r05_suloszowa_pola.jpg"
  },
  {
    "id": "R05_ROL_08",
    "section": "Czynniki rozwoju rolnictwa",
    "type": "riddle",
    "prompt": "Jak nazywa się proces łączenia mniejszych gospodarstw lub sąsiadujących działek w większe?",
    "options": null,
    "answer": "komasacja",
    "altAnswers": [
      "komasacja",
      "komasacja gruntów"
    ],
    "explanation": "Komasacja polega na łączeniu mniejszych gospodarstw lub sąsiadujących działek, co może ułatwiać ich użytkowanie."
  },
  {
    "id": "R05_ROL_09",
    "section": "Czynniki rozwoju rolnictwa",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki pozaprzyrodnicze związane z funkcjonowaniem gospodarstw rolnych.",
    "options": [
      "wielkość gospodarstwa",
      "stosowanie nawozów",
      "stosowanie środków ochrony roślin",
      "liczba maszyn rolniczych",
      "poziom wykształcenia rolników",
      "długość okresu wegetacyjnego"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Wielkość gospodarstwa, nawożenie, ochrona roślin, mechanizacja i kwalifikacje rolników to czynniki pozaprzyrodnicze. Okres wegetacyjny jest związany z warunkami klimatycznymi."
  },
  {
    "id": "R05_ROL_10",
    "section": "Czynniki rozwoju rolnictwa",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest czynnikiem przyrodniczym rozwoju rolnictwa: opady, gleby, ukształtowanie powierzchni, wykształcenie rolników.",
    "options": null,
    "answer": "wykształcenie rolników",
    "explanation": "Wykształcenie rolników jest czynnikiem pozaprzyrodniczym. Opady, gleby i rzeźba terenu należą do czynników przyrodniczych."
  },
  {
    "id": "R05_ROL_11",
    "section": "Czynniki rozwoju rolnictwa",
    "type": "sort",
    "prompt": "Przyporządkuj czynniki do odpowiedniej grupy.",
    "options": null,
    "items": [
      "żyzność gleb",
      "opady",
      "ukształtowanie powierzchni",
      "wielkość gospodarstwa",
      "liczba maszyn",
      "wykształcenie rolników"
    ],
    "categories": [
      "przyrodnicze",
      "pozaprzyrodnicze"
    ],
    "answer": {
      "przyrodnicze": [
        "żyzność gleb",
        "opady",
        "ukształtowanie powierzchni"
      ],
      "pozaprzyrodnicze": [
        "wielkość gospodarstwa",
        "liczba maszyn",
        "wykształcenie rolników"
      ]
    },
    "explanation": "Czynniki przyrodnicze wynikają z cech środowiska, a pozaprzyrodnicze z organizacji, wyposażenia i wiedzy gospodarujących ludzi."
  },
  {
    "id": "R05_UPR_01",
    "section": "Uprawa roślin i chów zwierząt w Polsce",
    "type": "single_choice",
    "prompt": "Która grupa roślin zajmuje największą część powierzchni zasiewów w Polsce?",
    "options": [
      "zboża",
      "ziemniaki",
      "rośliny strączkowe jadalne",
      "warzywa",
      "rośliny pastewne",
      "sady"
    ],
    "answer": 0,
    "explanation": "Zboża zajmują ponad 70% powierzchni zasiewów w Polsce; w 2019 roku ich udział wynosił 72%."
  },
  {
    "id": "R05_UPR_02",
    "section": "Uprawa roślin i chów zwierząt w Polsce",
    "type": "match",
    "prompt": "Połącz roślinę z głównym obszarem jej uprawy.",
    "options": null,
    "left": [
      "pszenica",
      "żyto",
      "jęczmień",
      "ziemniak"
    ],
    "right": [
      "Nizina Śląska, Wyżyna Lubelska i Żuławy Wiślane",
      "środkowa Polska",
      "północno-zachodnia i zachodnia Polska",
      "południowa i środkowa Polska"
    ],
    "answer": {
      "pszenica": "Nizina Śląska, Wyżyna Lubelska i Żuławy Wiślane",
      "żyto": "środkowa Polska",
      "jęczmień": "północno-zachodnia i zachodnia Polska",
      "ziemniak": "południowa i środkowa Polska"
    },
    "explanation": "Rozmieszczenie upraw wiąże się z wymaganiami roślin. Pszenica potrzebuje dobrych warunków, a żyto i ziemniak znoszą słabsze gleby.",
    "image": "r05_pszenica_pole.jpg"
  },
  {
    "id": "R05_UPR_03",
    "section": "Uprawa roślin i chów zwierząt w Polsce",
    "type": "multi_select",
    "prompt": "Zaznacz rośliny lub grupy roślin o wysokich albo bardzo wysokich wymaganiach klimatyczno-glebowych.",
    "options": [
      "pszenica",
      "burak cukrowy",
      "owoce i warzywa",
      "żyto",
      "ziemniak"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Pszenica ma wysokie wymagania, burak cukrowy bardzo wysokie, a owoce i warzywa wymagają dobrych warunków i starannej pielęgnacji. Żyto i ziemniak są mniej wymagające."
  },
  {
    "id": "R05_UPR_04",
    "section": "Uprawa roślin i chów zwierząt w Polsce",
    "type": "riddle",
    "prompt": "Jak nazywa się krzyżówka pszenicy i żyta, która dobrze radzi sobie w trudniejszych warunkach i jest wykorzystywana głównie na paszę?",
    "options": null,
    "answer": "pszenżyto",
    "altAnswers": [
      "pszenżyto",
      "pszenzyto"
    ],
    "explanation": "Pszenżyto łączy cechy pszenicy i żyta: może rosnąć w trudniejszych warunkach, a plonami zbliża się do pszenicy."
  },
  {
    "id": "R05_UPR_05",
    "section": "Uprawa roślin i chów zwierząt w Polsce",
    "type": "true_false",
    "prompt": "Duży udział upraw żyta w środkowej Polsce wiąże się m.in. ze słabszymi glebami w województwach łódzkim i mazowieckim.",
    "options": null,
    "answer": true,
    "explanation": "Żyto toleruje gorsze gleby i mniej sprzyjający klimat niż pszenica, dlatego ma duże znaczenie w środkowej Polsce.",
    "image": "r05_pszenica_pole.jpg"
  },
  {
    "id": "R05_UPR_06",
    "section": "Uprawa roślin i chów zwierząt w Polsce",
    "type": "single_choice",
    "prompt": "Który region tradycyjnie specjalizuje się w chowie trzody chlewnej?",
    "options": [
      "Wielkopolska",
      "Podlasie",
      "Podhale",
      "Wyżyna Lubelska",
      "Suwalszczyzna",
      "Żuławy Wiślane"
    ],
    "answer": 0,
    "explanation": "Wielkopolska jest tradycyjnym regionem chowu trzody chlewnej. Około jednej trzeciej wszystkich świń w Polsce znajduje się w gospodarstwach tego regionu."
  },
  {
    "id": "R05_UPR_07",
    "section": "Uprawa roślin i chów zwierząt w Polsce",
    "type": "scenario",
    "prompt": "Gospodarstwo leży w słabo zaludnionym regionie z mało żyznymi glebami, chłodniejszym klimatem oraz dużą powierzchnią łąk i pastwisk. Jaki kierunek produkcji zwierzęcej jest tam szczególnie uzasadniony?",
    "options": [
      "chów bydła",
      "chów trzody chlewnej w wielkich chlewniach",
      "hodowla zwierząt futerkowych",
      "chów strusi",
      "wyłącznie chów drobiu",
      "hodowla koni wyścigowych"
    ],
    "answer": 0,
    "explanation": "Takie warunki są charakterystyczne dla Podlasia, gdzie duże znaczenie ma chów bydła i produkcja mleka.",
    "image": "r05_hodowla_bydla.jpg"
  },
  {
    "id": "R05_UPR_08",
    "section": "Uprawa roślin i chów zwierząt w Polsce",
    "type": "sort",
    "prompt": "Przyporządkuj rośliny do grup upraw.",
    "options": null,
    "items": [
      "pszenica",
      "żyto",
      "jęczmień",
      "rzepak",
      "burak cukrowy",
      "ziemniak"
    ],
    "categories": [
      "zboża",
      "rośliny przemysłowe",
      "inna roślina żywieniowa"
    ],
    "answer": {
      "zboża": [
        "pszenica",
        "żyto",
        "jęczmień"
      ],
      "rośliny przemysłowe": [
        "rzepak",
        "burak cukrowy"
      ],
      "inna roślina żywieniowa": [
        "ziemniak"
      ]
    },
    "explanation": "Pszenica, żyto i jęczmień są zbożami, rzepak i burak cukrowy to rośliny przemysłowe, a ziemniak jest ważną rośliną żywieniową."
  },
  {
    "id": "R05_UPR_09",
    "section": "Uprawa roślin i chów zwierząt w Polsce",
    "type": "odd_one_out",
    "prompt": "Wskaż roślinę, która nie jest zbożem: pszenica, żyto, jęczmień, rzepak.",
    "options": null,
    "answer": "rzepak",
    "explanation": "Rzepak jest rośliną przemysłową wykorzystywaną m.in. do produkcji oleju i biopaliwa. Pozostałe rośliny są zbożami."
  },
  {
    "id": "R05_UPR_10",
    "section": "Uprawa roślin i chów zwierząt w Polsce",
    "type": "fill_in",
    "prompt": "Najwięcej krów posiadają rolnicy w województwie __________, a pozyskiwane mleko jest ważnym surowcem dla przemysłu __________.",
    "options": null,
    "answer": [
      "podlaskim",
      "przetwórczego"
    ],
    "altAnswers": [
      [
        "podlaskim",
        "podlaskie"
      ],
      [
        "przetwórczego",
        "przetwórstwa spożywczego"
      ]
    ],
    "explanation": "Województwo podlaskie wyróżnia się chowem bydła. Mleko jest ważnym surowcem dla przemysłu przetwórczego, a polski nabiał jest także produktem eksportowym."
  },
  {
    "id": "R05_UPR_11",
    "section": "Uprawa roślin i chów zwierząt w Polsce",
    "type": "multi_select",
    "prompt": "Zaznacz stwierdzenia prawidłowo opisujące chów drobiu w Polsce.",
    "options": [
      "fermy mogą być lokalizowane blisko rynków zbytu",
      "często powstają blisko zakładów mięsnych",
      "duże miasta mogą stanowić ważny rynek zbytu",
      "rozmieszczenie ferm jest bardziej równomierne niż w przypadku części innych kierunków chowu",
      "największe pogłowie drobiu występuje na Podhalu"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Lokalizacja ferm drobiu jest mniej ograniczona warunkami środowiskowymi, dlatego wiele z nich leży blisko zakładów mięsnych i dużych rynków zbytu. Największe pogłowie drobiu występuje w województwie mazowieckim."
  },
  {
    "id": "R05_ENE_01",
    "section": "Warunki rozwoju gospodarki energetycznej",
    "type": "single_choice",
    "prompt": "Które źródło miało największy udział w produkcji energii elektrycznej w Polsce w 2020 roku?",
    "options": [
      "węgiel kamienny",
      "węgiel brunatny",
      "gaz ziemny",
      "wiatr",
      "biomasa i biogaz",
      "woda"
    ],
    "answer": 0,
    "explanation": "W 2020 roku węgiel kamienny odpowiadał za 46% produkcji energii elektrycznej, a węgiel brunatny za 24%."
  },
  {
    "id": "R05_ENE_02",
    "section": "Warunki rozwoju gospodarki energetycznej",
    "type": "sort",
    "prompt": "Przyporządkuj źródła energii do grup odnawialnych i nieodnawialnych.",
    "options": null,
    "items": [
      "wiatr",
      "woda",
      "biomasa",
      "biogaz",
      "słońce",
      "węgiel kamienny",
      "węgiel brunatny",
      "gaz ziemny"
    ],
    "categories": [
      "odnawialne",
      "nieodnawialne"
    ],
    "answer": {
      "odnawialne": [
        "wiatr",
        "woda",
        "biomasa",
        "biogaz",
        "słońce"
      ],
      "nieodnawialne": [
        "węgiel kamienny",
        "węgiel brunatny",
        "gaz ziemny"
      ]
    },
    "explanation": "OZE obejmują m.in. energię wiatru, wód, biomasy, biogazu i słońca. Paliwa kopalne, takie jak węgiel i gaz ziemny, są nieodnawialne."
  },
  {
    "id": "R05_ENE_03",
    "section": "Warunki rozwoju gospodarki energetycznej",
    "type": "true_false",
    "prompt": "W 2020 roku węgiel kamienny i brunatny łącznie dawały 70% energii elektrycznej w Polsce.",
    "options": null,
    "answer": true,
    "explanation": "Udział węgla kamiennego wynosił 46%, a brunatnego 24%, co łącznie daje 70%."
  },
  {
    "id": "R05_ENE_04",
    "section": "Warunki rozwoju gospodarki energetycznej",
    "type": "fill_in",
    "prompt": "Skrót OZE oznacza __________ źródła energii.",
    "options": null,
    "answer": [
      "odnawialne"
    ],
    "altAnswers": [
      [
        "odnawialne",
        "odnawialne źródła energii"
      ]
    ],
    "explanation": "Odnawialne źródła energii wykorzystują zasoby, których używanie nie prowadzi do ich wyczerpania."
  },
  {
    "id": "R05_ENE_05",
    "section": "Warunki rozwoju gospodarki energetycznej",
    "type": "riddle",
    "prompt": "Jak nazywa się przywracanie wartości przyrodniczych i użytkowych obszarowi, np. po zakończeniu wydobycia w kopalni odkrywkowej?",
    "options": null,
    "answer": "rekultywacja",
    "altAnswers": [
      "rekultywacja",
      "rekultywacja terenu"
    ],
    "explanation": "Rekultywacja może obejmować m.in. zalesianie albo przekształcanie wyrobisk w zbiorniki wodne i tereny rekreacyjne."
  },
  {
    "id": "R05_ENE_06",
    "section": "Warunki rozwoju gospodarki energetycznej",
    "type": "match",
    "prompt": "Połącz warunek lub miejsce z odpowiadającym mu kierunkiem energetyki.",
    "options": null,
    "left": [
      "złoża węgla brunatnego w rejonie Bełchatowa",
      "silne wiatry na wybrzeżu i Bałtyku",
      "rzeka Brda i elektrownia Mylof",
      "dostateczne usłonecznienie"
    ],
    "right": [
      "energetyka oparta na węglu brunatnym",
      "energetyka wiatrowa",
      "energetyka wodna",
      "fotowoltaika"
    ],
    "answer": {
      "złoża węgla brunatnego w rejonie Bełchatowa": "energetyka oparta na węglu brunatnym",
      "silne wiatry na wybrzeżu i Bałtyku": "energetyka wiatrowa",
      "rzeka Brda i elektrownia Mylof": "energetyka wodna",
      "dostateczne usłonecznienie": "fotowoltaika"
    },
    "explanation": "Struktura energetyki zależy od lokalnych zasobów i warunków: węgla, wiatru, wody oraz promieniowania słonecznego.",
    "image": "r05_kopalnia_belchatow.jpg"
  },
  {
    "id": "R05_ENE_07",
    "section": "Warunki rozwoju gospodarki energetycznej",
    "type": "scenario",
    "prompt": "Po zakończeniu wydobycia w dużej kopalni odkrywkowej planuje się zalać część wyrobiska i stworzyć sztuczne jeziora z infrastrukturą wypoczynkową. Jak nazywa się takie przywracanie wartości terenu?",
    "options": [
      "rekultywacja",
      "prywatyzacja",
      "komasacja",
      "robotyzacja",
      "restrukturyzacja",
      "urbanizacja"
    ],
    "answer": 0,
    "explanation": "To przykład rekultywacji. Podobny kierunek zagospodarowania dotyczy terenów po kopalni w Bełchatowie.",
    "image": "r05_kopalnia_belchatow.jpg"
  },
  {
    "id": "R05_ENE_08",
    "section": "Warunki rozwoju gospodarki energetycznej",
    "type": "multi_select",
    "prompt": "Zaznacz wymieniane problemy związane z lokalizacją elektrowni wiatrowych.",
    "options": [
      "degradacja krajobrazu",
      "obniżenie wartości gruntów i nieruchomości",
      "zagrożenie dla ptaków",
      "konieczność importowania węgla brunatnego",
      "wyczerpywanie energii wiatru"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Wskazywane minusy elektrowni wiatrowych to m.in. wpływ na krajobraz, wartość nieruchomości i ptaki. Wiatr jest źródłem odnawialnym.",
    "image": "r05_farma_wiatrowa_baltyk.jpg"
  },
  {
    "id": "R05_ENE_09",
    "section": "Warunki rozwoju gospodarki energetycznej",
    "type": "single_choice",
    "prompt": "W którym województwie znajduje się planowana lokalizacja pierwszej polskiej elektrowni atomowej w pobliżu Lubiatowa i Kopalina?",
    "options": [
      "pomorskim",
      "łódzkim",
      "śląskim",
      "lubelskim",
      "podlaskim",
      "opolskim"
    ],
    "answer": 0,
    "explanation": "Planowana lokalizacja znajduje się w województwie pomorskim. Elektrownie atomowe często lokuje się nad morzem, ponieważ dostęp do wody jest ważny dla ich funkcjonowania.",
    "image": "r05_farma_wiatrowa_baltyk.jpg"
  },
  {
    "id": "R05_ENE_10",
    "section": "Warunki rozwoju gospodarki energetycznej",
    "type": "true_false",
    "prompt": "W województwie pomorskim nie planuje się budowy nowych dużych elektrowni wodnych m.in. z powodu negatywnych skutków środowiskowych zapór.",
    "options": null,
    "answer": true,
    "explanation": "Rzeki regionu mają duże spadki, ale skutki środowiskowe zapór ograniczają rozwój nowych dużych obiektów. Działają tam mniejsze elektrownie, w tym zabytkowa Mylof."
  },
  {
    "id": "R05_ENE_11",
    "section": "Warunki rozwoju gospodarki energetycznej",
    "type": "odd_one_out",
    "prompt": "Wskaż źródło, które nie jest odnawialne: wiatr, woda, biomasa, węgiel kamienny.",
    "options": null,
    "answer": "węgiel kamienny",
    "explanation": "Wiatr, woda i biomasa należą do OZE. Węgiel kamienny jest paliwem kopalnym i źródłem nieodnawialnym."
  },
  {
    "id": "R05_PRZ_01",
    "section": "Przemiany przemysłu w Polsce",
    "type": "single_choice",
    "prompt": "Która definicja najlepiej opisuje przemysł?",
    "options": [
      "działalność polegająca na pozyskiwaniu i przetwarzaniu surowców na masową skalę przy użyciu maszyn",
      "wyłącznie sprzedaż towarów w sklepach",
      "tylko uprawa roślin i chów zwierząt",
      "wyłącznie transport osób i ładunków",
      "jedynie wydobywanie surowców bez ich przetwarzania",
      "świadczenie usług administracyjnych"
    ],
    "answer": 0,
    "explanation": "Przemysł obejmuje pozyskiwanie i przetwarzanie surowców, odbywa się na masową skalę i zwykle wymaga użycia maszyn."
  },
  {
    "id": "R05_PRZ_02",
    "section": "Przemiany przemysłu w Polsce",
    "type": "multi_select",
    "prompt": "Zaznacz cechy działalności przemysłowej.",
    "options": [
      "przetwarzanie surowców",
      "produkcja na masową skalę",
      "wykorzystanie maszyn",
      "wytwarzanie różnego rodzaju dóbr",
      "wyłącznie ręczna praca jednostkowa",
      "świadczenie usług turystycznych"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Działalność przemysłowa polega na masowym wytwarzaniu dóbr z użyciem maszyn oraz na pozyskiwaniu i przetwarzaniu surowców."
  },
  {
    "id": "R05_PRZ_03",
    "section": "Przemiany przemysłu w Polsce",
    "type": "match",
    "prompt": "Połącz pojęcie z jego znaczeniem.",
    "options": null,
    "left": [
      "przemysł wydobywczy",
      "przemysł przetwórczy",
      "półprodukt",
      "eksport"
    ],
    "right": [
      "pozyskiwanie surowców naturalnych z ziemi",
      "zamiana surowców w dobra konsumpcyjne lub półprodukty",
      "wstępnie przetworzony produkt przeznaczony do dalszej produkcji",
      "wywóz towarów lub usług poza granice państwa"
    ],
    "answer": {
      "przemysł wydobywczy": "pozyskiwanie surowców naturalnych z ziemi",
      "przemysł przetwórczy": "zamiana surowców w dobra konsumpcyjne lub półprodukty",
      "półprodukt": "wstępnie przetworzony produkt przeznaczony do dalszej produkcji",
      "eksport": "wywóz towarów lub usług poza granice państwa"
    },
    "explanation": "Przemysł wydobywczy pozyskuje surowce, przetwórczy je przekształca, półprodukt trafia do dalszej produkcji, a eksport oznacza sprzedaż za granicę."
  },
  {
    "id": "R05_PRZ_04",
    "section": "Przemiany przemysłu w Polsce",
    "type": "true_false",
    "prompt": "W 2019 roku przemysł odpowiadał za około 23% produktu krajowego brutto Polski i zatrudniał ponad trzy miliony pracowników.",
    "options": null,
    "answer": true,
    "explanation": "W 2019 roku udział przemysłu w PKB wynosił około 23%, a zatrudnienie przekraczało trzy miliony osób."
  },
  {
    "id": "R05_PRZ_05",
    "section": "Przemiany przemysłu w Polsce",
    "type": "fill_in",
    "prompt": "Proces przekazywania majątku państwowego prywatnym inwestorom to __________, a zmiany w strukturze produkcji i organizacji pracy określa się jako __________ przemysłu.",
    "options": null,
    "answer": [
      "prywatyzacja",
      "restrukturyzacja"
    ],
    "altAnswers": [
      [
        "prywatyzacja",
        "prywatyzację"
      ],
      [
        "restrukturyzacja",
        "restrukturyzację"
      ]
    ],
    "explanation": "Po 1989 roku w przemyśle zachodziły prywatyzacja i restrukturyzacja, czyli zmiany własnościowe, produkcyjne i organizacyjne.",
    "image": "r05_stara_fabryka.jpg"
  },
  {
    "id": "R05_PRZ_06",
    "section": "Przemiany przemysłu w Polsce",
    "type": "scenario",
    "prompt": "Po 1989 roku ceny wyrobów przestały być odgórnie ustalane, a zaczęły zależeć od popytu i podaży. Jaka zasada gospodarcza została wprowadzona?",
    "options": [
      "zasady wolnego rynku",
      "pełne sterowanie cenami przez państwo",
      "zakaz importu",
      "wyłącznie państwowa własność zakładów",
      "likwidacja konkurencji",
      "obowiązkowy eksport do jednego bloku państw"
    ],
    "answer": 0,
    "explanation": "Po 1989 roku wprowadzano zasady wolnego rynku. Ceny coraz silniej zależały od popytu i podaży.",
    "image": "r05_stara_fabryka.jpg"
  },
  {
    "id": "R05_PRZ_07",
    "section": "Przemiany przemysłu w Polsce",
    "type": "riddle",
    "prompt": "Jak nazywa się liczba produktów, którą klienci chcą kupić?",
    "options": null,
    "answer": "popyt",
    "altAnswers": [
      "popyt"
    ],
    "explanation": "Popyt oznacza zapotrzebowanie klientów, czyli liczbę produktów, którą chcą kupić. Podaż to liczba produktów dostępna w sprzedaży."
  },
  {
    "id": "R05_PRZ_08",
    "section": "Przemiany przemysłu w Polsce",
    "type": "sequence",
    "prompt": "Ułóż etapy coraz większego przetworzenia miedzi od surowca do bardziej złożonego wyrobu.",
    "options": null,
    "items": [
      "produkcja kabli elektrycznych",
      "wydobycie rudy miedzi",
      "produkcja komputera z wykorzystaniem miedzi",
      "wytworzenie czystej miedzi w hucie"
    ],
    "answer": [
      "wydobycie rudy miedzi",
      "wytworzenie czystej miedzi w hucie",
      "produkcja kabli elektrycznych",
      "produkcja komputera z wykorzystaniem miedzi"
    ],
    "explanation": "Wraz ze wzrostem stopnia przetworzenia rośnie wartość produktu: od wydobycia rudy przez czystą miedź i półprodukty po zaawansowany wyrób."
  },
  {
    "id": "R05_PRZ_09",
    "section": "Przemiany przemysłu w Polsce",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do przemysłu przed 1988 rokiem i do przemysłu po zmianach ustrojowych.",
    "options": null,
    "items": [
      "duże i średnie zakłady należą głównie do państwa",
      "niska wydajność pracy",
      "odgórne ustalanie kierunków produkcji",
      "rozwój wielu małych i średnich prywatnych zakładów",
      "modernizacja metod produkcji",
      "napływ zagranicznych inwestorów"
    ],
    "categories": [
      "przed 1988 rokiem",
      "po zmianach ustrojowych"
    ],
    "answer": {
      "przed 1988 rokiem": [
        "duże i średnie zakłady należą głównie do państwa",
        "niska wydajność pracy",
        "odgórne ustalanie kierunków produkcji"
      ],
      "po zmianach ustrojowych": [
        "rozwój wielu małych i średnich prywatnych zakładów",
        "modernizacja metod produkcji",
        "napływ zagranicznych inwestorów"
      ]
    },
    "explanation": "Przed zmianami dominowała własność państwowa i centralne decyzje. Później rosły prywatna przedsiębiorczość, modernizacja i udział kapitału zagranicznego."
  },
  {
    "id": "R05_PRZ_10",
    "section": "Przemiany przemysłu w Polsce",
    "type": "odd_one_out",
    "prompt": "Wskaż gałąź, której znaczenie po zmianach ustrojowych nie rosło tak jak pozostałych: przemysł elektromaszynowy, przemysł spożywczy, przemysł chemiczny, przemysł wydobywczy.",
    "options": null,
    "answer": "przemysł wydobywczy",
    "explanation": "Po zmianach ustrojowych wzrosło znaczenie m.in. przemysłu elektromaszynowego, spożywczego i chemicznego, a przemysł wydobywczy stracił na znaczeniu.",
    "image": "r05_nowoczesna_fabryka.jpg"
  },
  {
    "id": "R05_PRZ_11",
    "section": "Przemiany przemysłu w Polsce",
    "type": "scenario",
    "prompt": "Zagraniczna firma rozważa budowę fabryki w Polsce po zmianach ustrojowych. Który zestaw czynników mógł szczególnie zachęcać ją do inwestycji?",
    "options": [
      "niskie koszty pracy, duże zasoby siły roboczej i preferencyjne warunki w specjalnych strefach ekonomicznych",
      "zakaz prywatnej własności i brak konkurencji",
      "odgórne ceny i obowiązkowy zbyt",
      "brak pracowników i bardzo wysokie koszty pracy",
      "zakaz importu nowoczesnych maszyn",
      "wyłącznie dostęp do złóż soli"
    ],
    "answer": 0,
    "explanation": "Po przemianach inwestorów przyciągały niskie koszty pracy, duża podaż pracowników oraz ulgi i preferencyjne warunki, m.in. w specjalnych strefach ekonomicznych."
  },
  {
    "id": "R05_TEC_01",
    "section": "Przemysł zaawansowanych technologii",
    "type": "single_choice",
    "prompt": "Co jest charakterystyczne dla przemysłu zaawansowanych technologii?",
    "options": [
      "wykorzystywanie najnowszych zdobyczy techniki i wyników badań naukowych",
      "opieranie produkcji wyłącznie na pracy ręcznej",
      "rezygnacja z badań i rozwoju",
      "produkcja tylko surowców nieprzetworzonych",
      "brak współpracy z nauką",
      "niska wartość produktów w stosunku do surowców"
    ],
    "answer": 0,
    "explanation": "Przemysł high-tech wykorzystuje nowoczesne technologie i wyniki badań, a ważną rolę odgrywają w nim badania, rozwój i wiedza.",
    "image": "r05_drukarka_3d.jpg"
  },
  {
    "id": "R05_TEC_02",
    "section": "Przemysł zaawansowanych technologii",
    "type": "multi_select",
    "prompt": "Zaznacz kluczowe czynniki sukcesu firm zaawansowanych technologii.",
    "options": [
      "wysoki poziom przygotowania naukowego",
      "efektywna organizacja pracy",
      "innowacyjne pomysły",
      "rezygnacja z wykwalifikowanych specjalistów",
      "ograniczanie badań i rozwoju"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Sukces firm high-tech zależy od przygotowania naukowego, dobrej organizacji i innowacyjnych pomysłów."
  },
  {
    "id": "R05_TEC_03",
    "section": "Przemysł zaawansowanych technologii",
    "type": "true_false",
    "prompt": "Polska należy do państw Unii Europejskiej o jednym z najniższych poziomów innowacyjności, podczas gdy wysokie wyniki osiągają kraje skandynawskie i Belgia.",
    "options": null,
    "answer": true,
    "explanation": "Poziom innowacyjności Polski jest niski na tle UE, a wysokie wyniki osiągają m.in. kraje skandynawskie i Belgia."
  },
  {
    "id": "R05_TEC_04",
    "section": "Przemysł zaawansowanych technologii",
    "type": "fill_in",
    "prompt": "Dolina Lotnicza jest przykładem przemysłowego __________, a firmy lotnicze współpracują tam z naukowcami z Politechniki __________.",
    "options": null,
    "answer": [
      "klastra",
      "Rzeszowskiej"
    ],
    "altAnswers": [
      [
        "klastra",
        "klaster",
        "klastra przemysłowego"
      ],
      [
        "Rzeszowskiej",
        "Rzeszowska"
      ]
    ],
    "explanation": "Dolina Lotnicza to klaster firm i instytucji skupionych wokół lotnictwa. Ważnym partnerem naukowym jest Politechnika Rzeszowska.",
    "image": "r05_dolina_lotnicza.jpg"
  },
  {
    "id": "R05_TEC_05",
    "section": "Przemysł zaawansowanych technologii",
    "type": "match",
    "prompt": "Połącz pojęcie z definicją.",
    "options": null,
    "left": [
      "patent",
      "klaster przemysłowy",
      "crowdfunding",
      "innowacyjność"
    ],
    "right": [
      "wyłączne prawo do wykorzystania wynalazku",
      "zespół położonych blisko i współpracujących zakładów lub instytucji",
      "finansowanie przedsięwzięcia przez zbieranie środków od społeczności",
      "ciągłe ulepszanie metod działania lub technologii"
    ],
    "answer": {
      "patent": "wyłączne prawo do wykorzystania wynalazku",
      "klaster przemysłowy": "zespół położonych blisko i współpracujących zakładów lub instytucji",
      "crowdfunding": "finansowanie przedsięwzięcia przez zbieranie środków od społeczności",
      "innowacyjność": "ciągłe ulepszanie metod działania lub technologii"
    },
    "explanation": "Te pojęcia opisują ochronę wynalazków, współpracę przedsiębiorstw, alternatywne finansowanie i ciągłe unowocześnianie gospodarki."
  },
  {
    "id": "R05_TEC_06",
    "section": "Przemysł zaawansowanych technologii",
    "type": "scenario",
    "prompt": "Młoda firma technologiczna nie może uzyskać kredytu bankowego. Twórcy proszą internautów o finansowe wsparcie projektu, oferując im przyszłe korzyści. Z jakiej metody korzystają?",
    "options": [
      "crowdfundingu",
      "prywatyzacji",
      "komasacji",
      "rekultywacji",
      "importu",
      "robotyzacji"
    ],
    "answer": 0,
    "explanation": "Crowdfunding polega na pozyskiwaniu środków od członków społeczności, np. internautów, w zamian za określone korzyści."
  },
  {
    "id": "R05_TEC_07",
    "section": "Przemysł zaawansowanych technologii",
    "type": "riddle",
    "prompt": "Jaki dokument przyznaje wyłączne prawo do wykorzystania wynalazku?",
    "options": null,
    "answer": "patent",
    "altAnswers": [
      "patent"
    ],
    "explanation": "Patent chroni wynalazek, dając uprawnionemu wyłączne prawo do jego wykorzystania."
  },
  {
    "id": "R05_TEC_08",
    "section": "Przemysł zaawansowanych technologii",
    "type": "single_choice",
    "prompt": "Ile nowych robotów przemysłowych zainstalowano w Polsce w 2019 roku?",
    "options": [
      "2600",
      "260",
      "26 000",
      "20 000",
      "140 500",
      "500"
    ],
    "answer": 0,
    "explanation": "W 2019 roku w Polsce zainstalowano około 2600 nowych robotów przemysłowych. W Niemczech w tym samym czasie przybyło ich ponad 20 tysięcy.",
    "image": "r05_robot_przemyslowy.jpg"
  },
  {
    "id": "R05_TEC_09",
    "section": "Przemysł zaawansowanych technologii",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do przemysłu wydobywczego i zaawansowanych technologii.",
    "options": null,
    "items": [
      "węgiel kamienny",
      "ruda miedzi",
      "komputery",
      "aparatura badawczo-rozwojowa"
    ],
    "categories": [
      "przemysł wydobywczy",
      "przemysł zaawansowanych technologii"
    ],
    "answer": {
      "przemysł wydobywczy": [
        "węgiel kamienny",
        "ruda miedzi"
      ],
      "przemysł zaawansowanych technologii": [
        "komputery",
        "aparatura badawczo-rozwojowa"
      ]
    },
    "explanation": "Węgiel i ruda miedzi to surowce pozyskiwane przez przemysł wydobywczy. Komputery i aparatura badawczo-rozwojowa należą do produktów high-tech.",
    "image": "r05_drukarka_3d.jpg"
  },
  {
    "id": "R05_TEC_10",
    "section": "Przemysł zaawansowanych technologii",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie należy do głównych grup produktów wysokich technologii w Polsce: komputery, elektronika, produkty dla lotnictwa, węgiel brunatny.",
    "options": null,
    "answer": "węgiel brunatny",
    "explanation": "Węgiel brunatny jest surowcem energetycznym. Do ważnych grup polskiego high-tech należą komputery, elektronika, produkty lotnicze i aparatura badawczo-rozwojowa."
  },
  {
    "id": "R05_TEC_11",
    "section": "Przemysł zaawansowanych technologii",
    "type": "true_false",
    "prompt": "Polska jest europejskim liderem w produkcji baterii do pojazdów elektrycznych.",
    "options": null,
    "answer": true,
    "explanation": "Produkcja baterii do pojazdów elektrycznych jest jednym z przykładów polskiej specjalizacji w wyrobach zaawansowanych technologicznie."
  },
  {
    "id": "R05_HARD_01",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz poprawne pary region - warunki rolnicze.",
    "options": [
      "Nizina Śląska - żyzne gleby, długi okres wegetacyjny i równinny teren",
      "Kujawy - bardzo żyzne gleby, ale miejscami zbyt mało opadów",
      "Suwalszczyzna - mało żyzne gleby i krótki okres wegetacyjny",
      "Podhale - górskie ukształtowanie powierzchni utrudniające rolnictwo",
      "Pojezierze Pomorskie - przewaga czarnoziemów i najdłuższy okres wegetacyjny"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Nizina Śląska ma bardzo dobre warunki, Kujawy żyzne gleby przy niedoborze opadów, Suwalszczyzna słabe gleby i krótki okres wegetacyjny, a Podhale ogranicza rzeźba górska.",
    "image": "r05_warunki_rolnictwa.jpg"
  },
  {
    "id": "R05_HARD_02",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz roślinę z typowym zastosowaniem.",
    "options": null,
    "left": [
      "pszenica",
      "jęczmień",
      "rzepak",
      "burak cukrowy",
      "ziemniak"
    ],
    "right": [
      "mąka, płatki, kasze i pasza",
      "kasza, pasza i browarnictwo",
      "olej i biopaliwo",
      "cukier",
      "frytki, mąka, alkohol i pasza"
    ],
    "answer": {
      "pszenica": "mąka, płatki, kasze i pasza",
      "jęczmień": "kasza, pasza i browarnictwo",
      "rzepak": "olej i biopaliwo",
      "burak cukrowy": "cukier",
      "ziemniak": "frytki, mąka, alkohol i pasza"
    },
    "explanation": "Zastosowania roślin wynikają z ich właściwości: zboża dają m.in. produkty spożywcze i pasze, rzepak olej, burak cukier, a ziemniaki mają wiele zastosowań żywnościowych i przemysłowych."
  },
  {
    "id": "R05_HARD_03",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Rolnik w środkowej Polsce ma słabsze gleby i chce wybrać zboże bardziej odporne na trudniejsze warunki klimatyczne niż pszenica. Którą roślinę powinien wybrać?",
    "options": [
      "żyto",
      "burak cukrowy",
      "rzepak",
      "pszenicę",
      "warzywa",
      "jęczmień browarny"
    ],
    "answer": 0,
    "explanation": "Żyto ma mniejsze wymagania glebowe i klimatyczne niż pszenica, dlatego jest szeroko uprawiane w środkowej Polsce."
  },
  {
    "id": "R05_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Użytki rolne zajmują około __________% powierzchni Polski, a zboża stanowiły w 2019 roku __________% powierzchni zasiewów.",
    "options": null,
    "answer": [
      "60",
      "72"
    ],
    "altAnswers": [
      [
        "60",
        "60%"
      ],
      [
        "72",
        "72%"
      ]
    ],
    "explanation": "Użytki rolne zajmują około 60% powierzchni kraju, a w strukturze zasiewów w 2019 roku zboża miały 72% udziału."
  },
  {
    "id": "R05_HARD_05",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż drogę miedzi od surowca do produktu o najwyższym stopniu przetworzenia.",
    "options": null,
    "items": [
      "komputer wykorzystujący miedź",
      "czysta miedź z huty",
      "ruda miedzi",
      "kable elektryczne"
    ],
    "answer": [
      "ruda miedzi",
      "czysta miedź z huty",
      "kable elektryczne",
      "komputer wykorzystujący miedź"
    ],
    "explanation": "Im wyższy stopień przetworzenia surowca, tym większa wartość wytworzonego dobra."
  },
  {
    "id": "R05_HARD_06",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz przyczynę przemian przemysłu po 1989 roku z jej skutkiem.",
    "options": null,
    "left": [
      "prywatyzacja dużych zakładów",
      "wprowadzenie nowocześniejszych metod produkcji",
      "napływ zagranicznych inwestorów",
      "nieopłacalność części wydobycia surowców",
      "napływ tanich produktów z Azji"
    ],
    "right": [
      "rozwój wielu prywatnych małych i średnich zakładów",
      "wzrost wydajności pracy",
      "otwieranie w Polsce fabryk przez firmy zagraniczne",
      "spadek znaczenia przemysłu wydobywczego",
      "zamknięcie części zakładów włókienniczych i elektronicznych"
    ],
    "answer": {
      "prywatyzacja dużych zakładów": "rozwój wielu prywatnych małych i średnich zakładów",
      "wprowadzenie nowocześniejszych metod produkcji": "wzrost wydajności pracy",
      "napływ zagranicznych inwestorów": "otwieranie w Polsce fabryk przez firmy zagraniczne",
      "nieopłacalność części wydobycia surowców": "spadek znaczenia przemysłu wydobywczego",
      "napływ tanich produktów z Azji": "zamknięcie części zakładów włókienniczych i elektronicznych"
    },
    "explanation": "Przemiany własnościowe, modernizacja, inwestycje zagraniczne i konkurencja importowa wywołały różne skutki w strukturze polskiego przemysłu."
  },
  {
    "id": "R05_HARD_07",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który zestaw najlepiej opisuje kierunki energetyki województwa pomorskiego?",
    "options": [
      "rozwój energetyki wiatrowej, planowana energetyka jądrowa i działające małe elektrownie wodne",
      "dominacja wielkich elektrowni na węglu brunatnym i brak energetyki wiatrowej",
      "wyłącznie energetyka gazowa",
      "głównie kopalnie węgla kamiennego i duże hydroelektrownie",
      "brak możliwości wykorzystania wiatru i wody",
      "wyłącznie import energii bez własnej produkcji"
    ],
    "answer": 0,
    "explanation": "Pomorze ma bardzo dobre warunki wiatrowe, planowaną lokalizację elektrowni jądrowej oraz małe elektrownie wodne wykorzystujące spadki rzek.",
    "image": "r05_farma_wiatrowa_baltyk.jpg"
  },
  {
    "id": "R05_HARD_08",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz prawidłowe informacje o energetyce województwa pomorskiego.",
    "options": [
      "lokalne zasoby paliw kopalnych mają małe znaczenie",
      "wybrzeże i przybrzeżne części morza mają bardzo dobre warunki wiatrowe",
      "rzeki mają miejscami duże spadki umożliwiające wykorzystanie energii wody",
      "w pobliżu Lubiatowa i Kopalina planowana jest elektrownia jądrowa",
      "region opiera elektroenergetykę głównie na własnym węglu brunatnym"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Pomorze ma niewielkie znaczenie paliw kopalnych, ale duży potencjał wiatru, częściowo energii wodnej oraz planowaną energetykę jądrową."
  },
  {
    "id": "R05_HARD_09",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Przekształcenie wyrobiska po kopalni węgla brunatnego w sztuczne jezioro może być formą rekultywacji terenu.",
    "options": null,
    "answer": true,
    "explanation": "Przykładem jest Berzdorfer See w Niemczech; podobne zagospodarowanie planowano dla terenów po kopalni w Bełchatowie.",
    "image": "r05_kopalnia_belchatow.jpg"
  },
  {
    "id": "R05_HARD_10",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które dwie grupy miały największy udział w polskim eksporcie wysokich technologii?",
    "options": [
      "komputery oraz elektronika i komunikacja",
      "lotnictwo oraz środki farmaceutyczne",
      "aparatura badawczo-rozwojowa oraz chemikalia",
      "maszyny elektryczne oraz maszyny nieelektryczne",
      "środki farmaceutyczne oraz chemikalia",
      "lotnictwo oraz maszyny elektryczne"
    ],
    "answer": 0,
    "explanation": "Największe udziały miały komputery - 29% oraz elektronika i komunikacja - 27%."
  },
  {
    "id": "R05_HARD_11",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj źródła energii elektrycznej do przedziałów udziału w Polsce w 2020 roku.",
    "options": null,
    "items": [
      "węgiel kamienny",
      "węgiel brunatny",
      "gaz ziemny",
      "wiatr",
      "biomasa i biogaz",
      "woda",
      "słońce",
      "inne"
    ],
    "categories": [
      "ponad 40%",
      "20-30%",
      "10%",
      "poniżej 10%"
    ],
    "answer": {
      "ponad 40%": [
        "węgiel kamienny"
      ],
      "20-30%": [
        "węgiel brunatny"
      ],
      "10%": [
        "gaz ziemny",
        "wiatr"
      ],
      "poniżej 10%": [
        "biomasa i biogaz",
        "woda",
        "słońce",
        "inne"
      ]
    },
    "explanation": "W 2020 roku udziały wynosiły: węgiel kamienny 46%, brunatny 24%, gaz 10%, wiatr 10%, biomasa i biogaz 5%, woda 2%, słońce 1%, inne 2%."
  },
  {
    "id": "R05_HARD_12",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż pojęcie związane przede wszystkim z rolnictwem, a nie z przemianami przemysłu: prywatyzacja, restrukturyzacja, import, komasacja.",
    "options": null,
    "answer": "komasacja",
    "explanation": "Komasacja dotyczy łączenia gruntów rolnych. Prywatyzacja i restrukturyzacja były ważnymi elementami przemian przemysłu, a import silnie wpływał na konkurencję rynkową."
  },
  {
    "id": "R05_HARD_13",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W strukturze jakości gleb w Polsce gleby średniej jakości stanowią __________%, a najlepsze zaledwie __________%.",
    "options": null,
    "answer": [
      "63",
      "1"
    ],
    "altAnswers": [
      [
        "63",
        "63%"
      ],
      [
        "1",
        "1%"
      ]
    ],
    "explanation": "W strukturze jakości gleb 63% stanowią gleby średnie, 21% słabe, 12% bardzo słabe, 3% bardzo dobre, a 1% najlepsze."
  },
  {
    "id": "R05_HARD_14",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz grupę towarów wysokich technologii z jej udziałem w polskim eksporcie wysokich technologii.",
    "options": null,
    "left": [
      "komputery",
      "elektronika i komunikacja",
      "lotnictwo",
      "aparatura badawczo-rozwojowa"
    ],
    "right": [
      "29%",
      "27%",
      "15%",
      "12%"
    ],
    "answer": {
      "komputery": "29%",
      "elektronika i komunikacja": "27%",
      "lotnictwo": "15%",
      "aparatura badawczo-rozwojowa": "12%"
    },
    "explanation": "Największy udział miały komputery - 29%, następnie elektronika i komunikacja - 27%, lotnictwo - 15% oraz aparatura badawczo-rozwojowa - 12%."
  },
  {
    "id": "R05_HARD_15",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Firma lotnicza chce rozwijać innowacyjny produkt i szuka miejsca, gdzie może współpracować z innymi przedsiębiorstwami oraz naukowcami uczelni technicznej. Która lokalizacja najlepiej odpowiada temu opisowi?",
    "options": [
      "Dolina Lotnicza i okolice Rzeszowa",
      "kopalnia odkrywkowa w Bełchatowie",
      "obszar upraw żyta w środkowej Polsce",
      "rejon wielkich chlewni w Wielkopolsce",
      "Żuławy Wiślane jako obszar upraw pszenicy",
      "okolice elektrowni wodnej Mylof"
    ],
    "answer": 0,
    "explanation": "Dolina Lotnicza jest klastrem wysokich technologii, a firmy lotnicze współpracują tam m.in. z naukowcami Politechniki Rzeszowskiej.",
    "image": "r05_dolina_lotnicza.jpg"
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r05",
  number: 5,
  title: "Gospodarka Polski - rolnictwo i przemysł",
  icon: "🏭",
  sectionOrder: [
    "Czynniki rozwoju rolnictwa",
    "Uprawa roślin i chów zwierząt w Polsce",
    "Warunki rozwoju gospodarki energetycznej",
    "Przemiany przemysłu w Polsce",
    "Przemysł zaawansowanych technologii"
  ],
  sectionIcons: {
    "Czynniki rozwoju rolnictwa": "🌾",
    "Uprawa roślin i chów zwierząt w Polsce": "🚜",
    "Warunki rozwoju gospodarki energetycznej": "⚡",
    "Przemiany przemysłu w Polsce": "🏭",
    "Przemysł zaawansowanych technologii": "🤖"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
