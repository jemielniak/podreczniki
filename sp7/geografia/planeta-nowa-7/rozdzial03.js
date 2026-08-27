// Skróty sekcji (do identyfikatorów ćwiczeń):
//   ROL  = Warunki rozwoju rolnictwa
//   ROS  = Produkcja roślinna
//   ZWI  = Produkcja zwierzęca
//   PRZ  = Przemysł i restrukturyzacja
//   ZAT  = Przemysł a struktura zatrudnienia
//   ENE  = Energetyka
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R03_ROL_01",
    section: "Warunki rozwoju rolnictwa",
    type: "single_choice",
    prompt: "Który zestaw obejmuje wyłącznie przyrodnicze warunki rozwoju rolnictwa?",
    options: ["Klimat, gleby i ukształtowanie powierzchni", "Mechanizacja, klimat i polityka rolna", "Wielkość gospodarstw, gleby i zatrudnienie", "Chemizacja, klimat i forma własności", "Polityka rolna, opady i mechanizacja", "Wykształcenie rolników, rzeźba terenu i gleby"],
    answer: 0,
    explanation: "Do najważniejszych przyrodniczych warunków rozwoju rolnictwa należą klimat, żyzność gleb i ukształtowanie powierzchni.",
    image: "r03_warunki_rolnictwa_polska.jpg"
  },
  {
    id: "R03_ROL_02",
    section: "Warunki rozwoju rolnictwa",
    type: "multi_select",
    prompt: "Zaznacz najżyźniejsze typy gleb występujące w Polsce.",
    options: ["Czarnoziemy", "Czarne ziemie", "Mady", "Rędziny", "Gleby bielicowe", "Gleby płowe"],
    answer: [0, 1, 2, 3],
    explanation: "Do najżyźniejszych gleb należą czarnoziemy, czarne ziemie, mady i rędziny. Występują one jednak tylko na niewielkich obszarach Polski."
  },
  {
    id: "R03_ROL_03",
    section: "Warunki rozwoju rolnictwa",
    type: "true_false",
    prompt: "Rozdrobnienie gruntów zwykle obniża koszty produkcji rolnej.",
    options: null,
    answer: false,
    explanation: "Podział gruntów gospodarstwa na małe i oddalone od siebie działki zwiększa koszty produkcji rolnej.",
    image: "r03_rozdrobnione_pola.jpg"
  },
  {
    id: "R03_ROL_04",
    section: "Warunki rozwoju rolnictwa",
    type: "fill_in",
    prompt: "W 2023 roku średnia wielkość gospodarstwa rolnego w Polsce wynosiła niecałe __________ ha, a na jeden ciągnik przypadało średnio __________ ha użytków rolnych.",
    options: null,
    answer: ["12", "10"],
    altAnswers: [["12", "12 ha"], ["10", "10 ha"]],
    explanation: "Średnia wielkość gospodarstwa wynosiła niecałe 12 ha, a na jeden ciągnik przypadało średnio 10 ha użytków rolnych."
  },
  {
    id: "R03_ROL_05",
    section: "Warunki rozwoju rolnictwa",
    type: "match",
    prompt: "Połącz czynnik z właściwą kategorią.",
    options: null,
    left: ["Klimat", "Żyzność gleb", "Mechanizacja", "Polityka rolna"],
    right: ["przyrodniczy", "przyrodniczy - gleby", "pozaprzyrodniczy - maszyny", "pozaprzyrodniczy - działania państwa"],
    answer: {
      "Klimat": "przyrodniczy",
      "Żyzność gleb": "przyrodniczy - gleby",
      "Mechanizacja": "pozaprzyrodniczy - maszyny",
      "Polityka rolna": "pozaprzyrodniczy - działania państwa"
    },
    explanation: "Klimat i gleby są warunkami przyrodniczymi, natomiast mechanizacja oraz polityka rolna zależą od działalności człowieka."
  },
  {
    id: "R03_ROL_06",
    section: "Warunki rozwoju rolnictwa",
    type: "scenario",
    prompt: "Rolnik chce zwiększyć wydajność dużego gospodarstwa. Kupuje nowoczesny ciągnik i kombajn dzięki wsparciu finansowemu z Unii Europejskiej. Który warunek rozwoju rolnictwa poprawił bezpośrednio?",
    options: ["Poziom mechanizacji", "Żyzność gleb", "Długość okresu wegetacyjnego", "Ukształtowanie powierzchni", "Roczna suma opadów", "Występowanie przymrozków"],
    answer: 0,
    explanation: "Zakup nowoczesnych maszyn zwiększa poziom mechanizacji gospodarstwa.",
    image: "r03_nowoczesne_gospodarstwo.jpg"
  },
  {
    id: "R03_ROL_07",
    section: "Warunki rozwoju rolnictwa",
    type: "sort",
    prompt: "Przyporządkuj czynniki do warunków przyrodniczych i pozaprzyrodniczych.",
    options: null,
    items: ["klimat", "żyzność gleb", "rzeźba terenu", "wielkość gospodarstw", "zatrudnienie", "chemizacja"],
    categories: ["przyrodnicze", "pozaprzyrodnicze"],
    answer: {
      "przyrodnicze": ["klimat", "żyzność gleb", "rzeźba terenu"],
      "pozaprzyrodnicze": ["wielkość gospodarstw", "zatrudnienie", "chemizacja"]
    },
    explanation: "Warunki przyrodnicze wynikają z cech środowiska, a pozaprzyrodnicze są kształtowane przez człowieka."
  },
  {
    id: "R03_ROL_08",
    section: "Warunki rozwoju rolnictwa",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych pozaprzyrodniczych warunków rozwoju rolnictwa: mechanizacja, chemizacja, polityka rolna, żyzność gleb.",
    options: null,
    answer: "żyzność gleb",
    explanation: "Żyzność gleb jest warunkiem przyrodniczym, a pozostałe elementy zależą od działalności człowieka.",
    image: "r03_rozdrobnione_pola.jpg"
  },
  {
    id: "R03_ROL_09",
    section: "Warunki rozwoju rolnictwa",
    type: "riddle",
    prompt: "Okres roku, w którym temperatura i wilgotność pozwalają roślinom rosnąć, to...",
    options: null,
    answer: "okres wegetacyjny",
    altAnswers: ["okres wegetacyjny", "wegetacja"],
    explanation: "Stosunkowo długi okres wegetacyjny sprzyja rozwojowi rolnictwa w Polsce.",
    image: "r03_warunki_rolnictwa_polska.jpg"
  },
  {
    id: "R03_ROL_10",
    section: "Warunki rozwoju rolnictwa",
    type: "single_choice",
    prompt: "Na czym polega chemizacja rolnictwa?",
    options: ["Na stosowaniu nawozów sztucznych i chemicznych środków ochrony roślin", "Na zwiększaniu liczby maszyn rolniczych", "Na scalaniu oddalonych działek", "Na zmianie formy własności gospodarstw", "Na wydłużaniu okresu wegetacyjnego", "Na zastępowaniu gruntów ornych pastwiskami"],
    answer: 0,
    explanation: "Chemizacja obejmuje zasilanie gleby nawozami sztucznymi i stosowanie chemicznych środków ochrony roślin."
  },

  {
    id: "R03_ROS_01",
    section: "Produkcja roślinna",
    type: "single_choice",
    prompt: "Jaki rodzaj użytków rolnych zajmuje w Polsce największą powierzchnię?",
    options: ["Grunty orne", "Sady", "Łąki", "Pastwiska", "Nieużytki", "Lasy"],
    answer: 0,
    explanation: "Największą powierzchnię użytków rolnych w Polsce zajmują grunty orne."
  },
  {
    id: "R03_ROS_02",
    section: "Produkcja roślinna",
    type: "multi_select",
    prompt: "Zaznacz produkty otrzymywane z rzepaku.",
    options: ["Olej jadalny", "Biopaliwa", "Pasze", "Cukier", "Skrobia", "Piwo"],
    answer: [0, 1, 2],
    explanation: "Rzepak jest podstawową rośliną oleistą. Wytwarza się z niego olej jadalny, biopaliwa i pasze."
  },
  {
    id: "R03_ROS_03",
    section: "Produkcja roślinna",
    type: "scenario",
    prompt: "Gospodarstwo leży na obszarze słabszych gleb. Rolnik szuka rośliny o niewielkich wymaganiach glebowych, z której można produkować frytki, chipsy i skrobię. Co powinien uprawiać?",
    options: ["Ziemniaki", "Pszenicę", "Buraki cukrowe", "Rzepak", "Kukurydzę", "Jęczmień"],
    answer: 0,
    explanation: "Ziemniaki mają niewielkie wymagania glebowe, a wykorzystuje się je między innymi do produkcji frytek, chipsów i skrobi.",
    image: "r03_pola_pszenicy_i_ziemniakow.jpg"
  },
  {
    id: "R03_ROS_04",
    section: "Produkcja roślinna",
    type: "match",
    prompt: "Połącz roślinę z jej głównym zastosowaniem.",
    options: null,
    left: ["Buraki cukrowe", "Jęczmień", "Pszenżyto", "Rzepak"],
    right: ["cukier", "kasze i piwo", "głównie pasze", "olej i biopaliwa"],
    answer: {
      "Buraki cukrowe": "cukier",
      "Jęczmień": "kasze i piwo",
      "Pszenżyto": "głównie pasze",
      "Rzepak": "olej i biopaliwa"
    },
    explanation: "Buraki dostarczają cukru, jęczmień służy do produkcji kasz i piwa, pszenżyto jest głównie paszowe, a rzepak oleisty."
  },
  {
    id: "R03_ROS_05",
    section: "Produkcja roślinna",
    type: "fill_in",
    prompt: "Użytki rolne zajmują około __________% powierzchni Polski, a zboża około __________% całkowitej powierzchni upraw.",
    options: null,
    answer: ["46", "66"],
    altAnswers: [["46", "46%"], ["66", "66%", "65,2", "65,2%"]],
    explanation: "Użytki rolne zajmują około 46% powierzchni kraju, a zboża niemal dwie trzecie powierzchni upraw."
  },
  {
    id: "R03_ROS_06",
    section: "Produkcja roślinna",
    type: "true_false",
    prompt: "Około połowy polskich sadów stanowią sady jabłoniowe.",
    options: null,
    answer: true,
    explanation: "Jabłonie zajmują około połowy powierzchni sadów w Polsce, a kraj należy do największych producentów jabłek na świecie.",
    image: "r03_sad_jabloniowy.jpg"
  },
  {
    id: "R03_ROS_07",
    section: "Produkcja roślinna",
    type: "sort",
    prompt: "Przyporządkuj rośliny do właściwych grup.",
    options: null,
    items: ["pszenica", "żyto", "jęczmień", "rzepak", "buraki cukrowe", "ziemniaki"],
    categories: ["zboża", "rośliny przemysłowe", "pozostałe uprawy"],
    answer: {
      "zboża": ["pszenica", "żyto", "jęczmień"],
      "rośliny przemysłowe": ["rzepak", "buraki cukrowe"],
      "pozostałe uprawy": ["ziemniaki"]
    },
    explanation: "Pszenica, żyto i jęczmień są zbożami; rzepak i buraki cukrowe to rośliny przemysłowe; ziemniaki tworzą odrębną grupę upraw."
  },
  {
    id: "R03_ROS_08",
    section: "Produkcja roślinna",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych obszarów sadowniczych: okolice Grójca, okolice Sandomierza, Lubelszczyzna, Bieszczady.",
    options: null,
    answer: "Bieszczady",
    explanation: "Najwięcej sadów znajduje się na Nizinie Mazowieckiej w rejonie Grójca, w okolicach Sandomierza i na Lubelszczyźnie.",
    image: "r03_sad_jabloniowy.jpg"
  },
  {
    id: "R03_ROS_09",
    section: "Produkcja roślinna",
    type: "sequence",
    prompt: "Ułóż formy użytkowania ziemi w Polsce od największego do najmniejszego udziału w powierzchni kraju.",
    options: null,
    items: ["sady", "łąki i pastwiska", "grunty orne", "lasy"],
    answer: ["grunty orne", "lasy", "łąki i pastwiska", "sady"],
    explanation: "Udziały wynosiły odpowiednio: grunty orne 36,5%, lasy 30,5%, łąki i pastwiska 8,6% oraz sady 1,2%."
  },
  {
    id: "R03_ROS_10",
    section: "Produkcja roślinna",
    type: "riddle",
    prompt: "Całkowita ilość zebranych płodów rolnych, najczęściej wyrażana w tonach, to...",
    options: null,
    answer: "zbiory",
    altAnswers: ["zbiory", "zbiór"],
    explanation: "Zbiory oznaczają całkowitą ilość zebranych płodów rolnych. Plony odnoszą się natomiast do jednostki powierzchni."
  },

  {
    id: "R03_ZWI_01",
    section: "Produkcja zwierzęca",
    type: "multi_select",
    prompt: "Zaznacz trzy główne grupy zwierząt gospodarskich chowanych w Polsce.",
    options: ["Trzoda chlewna", "Bydło", "Drób", "Konie", "Owce", "Renifery"],
    answer: [0, 1, 2],
    explanation: "W polskich gospodarstwach prowadzi się przede wszystkim chów trzody chlewnej, bydła i drobiu."
  },
  {
    id: "R03_ZWI_02",
    section: "Produkcja zwierzęca",
    type: "single_choice",
    prompt: "W której części Polski występuje największe pogłowie bydła?",
    options: ["W północno-wschodniej części kraju", "Na wybrzeżu zachodnim", "W Sudetach", "Na Wyżynie Krakowsko-Częstochowskiej", "W Bieszczadach", "Na Nizinie Śląskiej"],
    answer: 0,
    explanation: "Największe pogłowie bydła występuje w północno-wschodniej Polsce, gdzie duży odsetek użytków rolnych stanowią łąki i pastwiska.",
    image: "r03_chow_bydla.jpg"
  },
  {
    id: "R03_ZWI_03",
    section: "Produkcja zwierzęca",
    type: "true_false",
    prompt: "Pogłowie trzody chlewnej w Polsce jest większe niż pogłowie bydła.",
    options: null,
    answer: true,
    explanation: "W 2023 roku pogłowie trzody chlewnej wynosiło około 10 mln sztuk, a bydła około 6,3 mln sztuk.",
    image: "r03_chow_trzody_chlewnej.jpg"
  },
  {
    id: "R03_ZWI_04",
    section: "Produkcja zwierzęca",
    type: "match",
    prompt: "Połącz zwierzę z informacją o jego chowie w Polsce.",
    options: null,
    left: ["Bydło", "Trzoda chlewna", "Drób", "Konie"],
    right: ["przewaga kierunku mlecznego", "duże gospodarstwa Wielkopolski i Kujaw", "unijne liderstwo w produkcji mięsa", "coraz częściej rekreacja i sport"],
    answer: {
      "Bydło": "przewaga kierunku mlecznego",
      "Trzoda chlewna": "duże gospodarstwa Wielkopolski i Kujaw",
      "Drób": "unijne liderstwo w produkcji mięsa",
      "Konie": "coraz częściej rekreacja i sport"
    },
    explanation: "Każda z tych gałęzi chowu ma w Polsce inną specjalizację i rozmieszczenie."
  },
  {
    id: "R03_ZWI_05",
    section: "Produkcja zwierzęca",
    type: "fill_in",
    prompt: "W 2023 roku pogłowie bydła wynosiło około __________ mln sztuk, a trzody chlewnej około __________ mln sztuk.",
    options: null,
    answer: ["6,3", "10"],
    altAnswers: [["6,3", "6,3 mln", "6.3"], ["10", "10 mln", "9,8", "9,8 mln"]],
    explanation: "Pogłowie bydła liczyło około 6,3 mln sztuk, a trzody chlewnej około 10 mln sztuk."
  },
  {
    id: "R03_ZWI_06",
    section: "Produkcja zwierzęca",
    type: "sort",
    prompt: "Przyporządkuj produkty do zwierząt, od których są uzyskiwane.",
    options: null,
    items: ["mleko na jogurty", "wołowina", "wieprzowina", "jaja kurze", "wełna", "oscypek"],
    categories: ["bydło", "trzoda chlewna", "drób", "owce"],
    answer: {
      "bydło": ["mleko na jogurty", "wołowina"],
      "trzoda chlewna": ["wieprzowina"],
      "drób": ["jaja kurze"],
      "owce": ["wełna", "oscypek"]
    },
    explanation: "Bydło dostarcza mleka i wołowiny, trzoda wieprzowiny, drób jaj, a owce między innymi wełny i mleka na tradycyjne sery."
  },
  {
    id: "R03_ZWI_07",
    section: "Produkcja zwierzęca",
    type: "scenario",
    prompt: "Gospodarstwo w północno-wschodniej Polsce ma rozległe łąki i pastwiska oraz chce dostarczać surowiec do produkcji serów i jogurtów. Jaki kierunek produkcji będzie najbardziej odpowiedni?",
    options: ["Chów bydła mlecznego", "Chów trzody chlewnej", "Chów kur niosek", "Hodowla koni sportowych", "Chów bydła mięsnego", "Chów kaczek"],
    answer: 0,
    explanation: "Łąki i pastwiska sprzyjają chowowi bydła, a mleczny kierunek dostarcza mleka do produkcji serów i jogurtów.",
    image: "r03_chow_bydla.jpg"
  },
  {
    id: "R03_ZWI_08",
    section: "Produkcja zwierzęca",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych głównych obszarów chowu trzody chlewnej: Wielkopolska, Kujawy, województwo wielkopolskie, Podhale.",
    options: null,
    answer: "Podhale",
    explanation: "Chów trzody chlewnej koncentruje się przede wszystkim w województwach wielkopolskim i kujawsko-pomorskim, a nie na Podhalu.",
    image: "r03_chow_trzody_chlewnej.jpg"
  },
  {
    id: "R03_ZWI_09",
    section: "Produkcja zwierzęca",
    type: "sequence",
    prompt: "Ułóż grupy zwierząt od największego do najmniejszego pogłowia w Polsce w 2023 roku.",
    options: null,
    items: ["owce", "trzoda chlewna", "drób", "bydło", "konie"],
    answer: ["drób", "trzoda chlewna", "bydło", "konie", "owce"],
    explanation: "Pogłowie wynosiło około: drób 218,3 mln, trzoda 9,8 mln, bydło 6,3 mln, konie 0,3 mln i owce 0,28 mln sztuk."
  },
  {
    id: "R03_ZWI_10",
    section: "Produkcja zwierzęca",
    type: "riddle",
    prompt: "Rehabilitacja prowadzona z udziałem koni to...",
    options: null,
    answer: "hipoterapia",
    altAnswers: ["hipoterapia", "hipoterapią"],
    explanation: "Hipoterapia jest uznawana za skuteczną metodę rehabilitacji, zwłaszcza dzieci z niepełnosprawnościami."
  },

  {
    id: "R03_PRZ_01",
    section: "Przemysł i restrukturyzacja",
    type: "single_choice",
    prompt: "Która działalność należy do przemysłu?",
    options: ["Wydobywanie surowców i ich przetwarzanie", "Wyłącznie sprzedaż detaliczna", "Wyłącznie przewóz pasażerów", "Nauczanie w szkołach", "Świadczenie usług bankowych", "Prowadzenie hoteli"],
    answer: 0,
    explanation: "Przemysł obejmuje wydobywanie surowców mineralnych, ich przetwarzanie oraz gospodarowanie energią, gazem i wodą."
  },
  {
    id: "R03_PRZ_02",
    section: "Przemysł i restrukturyzacja",
    type: "sort",
    prompt: "Przyporządkuj działalności do sekcji przemysłu.",
    options: null,
    items: ["wydobycie węgla", "produkcja żywności", "wytwarzanie energii", "oczyszczanie ścieków", "produkcja maszyn", "odzyskiwanie surowców"],
    categories: ["górnictwo i wydobywanie", "przetwórstwo przemysłowe", "energetyka", "gospodarka wodą i odpadami"],
    answer: {
      "górnictwo i wydobywanie": ["wydobycie węgla"],
      "przetwórstwo przemysłowe": ["produkcja żywności", "produkcja maszyn"],
      "energetyka": ["wytwarzanie energii"],
      "gospodarka wodą i odpadami": ["oczyszczanie ścieków", "odzyskiwanie surowców"]
    },
    explanation: "Przemysł dzieli się na górnictwo, przetwórstwo, wytwarzanie energii oraz dostawę wody i gospodarowanie odpadami."
  },
  {
    id: "R03_PRZ_03",
    section: "Przemysł i restrukturyzacja",
    type: "multi_select",
    prompt: "Zaznacz cechy polskiego przemysłu przed 1989 rokiem.",
    options: ["Przewaga zakładów państwowych", "Duże znaczenie górnictwa i hutnictwa", "Przestarzałe technologie", "Niska jakość wielu wyrobów", "Dominacja prywatnych przedsiębiorstw", "Powszechne stosowanie nowoczesnych technologii"],
    answer: [0, 1, 2, 3],
    explanation: "Przed 1989 rokiem dominowały zakłady państwowe i tradycyjne działy przemysłu, a technologie często były przestarzałe."
  },
  {
    id: "R03_PRZ_04",
    section: "Przemysł i restrukturyzacja",
    type: "true_false",
    prompt: "Restrukturyzację polskiego przemysłu zapoczątkowały przemiany polityczne i gospodarcze z 1989 roku.",
    options: null,
    answer: true,
    explanation: "Po 1989 roku rozpoczęto zmiany organizacji pracy, prywatyzację i przebudowę struktury produkcji.",
    image: "r03_restrukturyzacja_fabryki.jpg"
  },
  {
    id: "R03_PRZ_05",
    section: "Przemysł i restrukturyzacja",
    type: "fill_in",
    prompt: "Sprzedaż państwowych zakładów inwestorom krajowym lub zagranicznym nazywa się __________.",
    options: null,
    answer: ["prywatyzacją"],
    altAnswers: [["prywatyzacją", "prywatyzacja"]],
    explanation: "Prywatyzacja była jednym z podstawowych działań restrukturyzacyjnych po 1989 roku."
  },
  {
    id: "R03_PRZ_06",
    section: "Przemysł i restrukturyzacja",
    type: "scenario",
    prompt: "Zagraniczny koncern chce ulokować w Polsce fabrykę sprzętu AGD. Zależy mu na szybkim dostępie do rynków europejskich i wydajnych pracownikach. Która cecha Polski jest dla niego szczególnie ważna?",
    options: ["Położenie w centrum Europy i wysoka wydajność pracy", "Duży udział terenów górskich", "Mała liczba dróg", "Brak wykwalifikowanych pracowników", "Oddalenie od rynku Unii Europejskiej", "Dominacja gospodarki centralnie sterowanej"],
    answer: 0,
    explanation: "Atrakcyjność Polski wynika między innymi z centralnego położenia w Europie, wydajności pracy, jakości wyrobów i stosunkowo niskich kosztów pracy.",
    image: "r03_nowoczesny_przemysl.jpg"
  },
  {
    id: "R03_PRZ_07",
    section: "Przemysł i restrukturyzacja",
    type: "match",
    prompt: "Połącz przyczynę restrukturyzacji z jej skutkiem.",
    options: null,
    left: ["Przestarzałe technologie", "Niska jakość wyrobów", "Słaba organizacja pracy", "Nierentowne zakłady"],
    right: ["modernizacja i spadek kosztów", "poprawa jakości i różnorodności", "wzrost wydajności po prywatyzacji", "zamykanie i wzrost bezrobocia"],
    answer: {
      "Przestarzałe technologie": "modernizacja i spadek kosztów",
      "Niska jakość wyrobów": "poprawa jakości i różnorodności",
      "Słaba organizacja pracy": "wzrost wydajności po prywatyzacji",
      "Nierentowne zakłady": "zamykanie i wzrost bezrobocia"
    },
    explanation: "Restrukturyzacja poprawiła technologię, jakość i wydajność, ale zamykanie nierentownych zakładów zwiększyło bezrobocie."
  },
  {
    id: "R03_PRZ_08",
    section: "Przemysł i restrukturyzacja",
    type: "sequence",
    prompt: "Ułóż etapy przemian przemysłu w logicznej kolejności.",
    options: null,
    items: ["wzrost jakości i wydajności", "przemiany polityczne i gospodarcze", "modernizacja oraz prywatyzacja", "konkurowanie na rynkach zagranicznych"],
    answer: ["przemiany polityczne i gospodarcze", "modernizacja oraz prywatyzacja", "wzrost jakości i wydajności", "konkurowanie na rynkach zagranicznych"],
    explanation: "Przemiany po 1989 roku umożliwiły restrukturyzację, która poprawiła jakość i wydajność, a następnie konkurencyjność produktów.",
    image: "r03_restrukturyzacja_fabryki.jpg"
  },
  {
    id: "R03_PRZ_09",
    section: "Przemysł i restrukturyzacja",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych tradycyjnych działów ograniczanych w czasie restrukturyzacji: górnictwo, hutnictwo, produkcja wyrobów tekstylnych, produkcja komputerów.",
    options: null,
    answer: "produkcja komputerów",
    explanation: "Produkcja komputerów należy do nowoczesnych dziedzin, których znaczenie rosło, a nie do tradycyjnych działów ograniczanych po 1989 roku."
  },
  {
    id: "R03_PRZ_10",
    section: "Przemysł i restrukturyzacja",
    type: "riddle",
    prompt: "Proces zmian organizacji pracy i struktury produkcji przemysłowej to...",
    options: null,
    answer: "restrukturyzacja przemysłu",
    altAnswers: ["restrukturyzacja przemysłu", "restrukturyzacja"],
    explanation: "Restrukturyzacja przemysłu obejmuje zmiany organizacyjne, własnościowe i technologiczne oraz przebudowę struktury produkcji.",
    image: "r03_nowoczesny_przemysl.jpg"
  },

  {
    id: "R03_ZAT_01",
    section: "Przemysł a struktura zatrudnienia",
    type: "single_choice",
    prompt: "Kto ustala ceny w gospodarce rynkowej?",
    options: ["Rynek", "Wyłącznie rząd", "Wyłącznie samorządy", "Państwowe kopalnie", "Związki zawodowe", "Szkoły wyższe"],
    answer: 0,
    explanation: "W gospodarce rynkowej ceny i procesy gospodarcze są regulowane przez rynek."
  },
  {
    id: "R03_ZAT_02",
    section: "Przemysł a struktura zatrudnienia",
    type: "sort",
    prompt: "Przyporządkuj cechy do odpowiedniego systemu gospodarczego.",
    options: null,
    items: ["dominacja własności państwowej", "ceny ustalane przez władze", "dominacja własności prywatnej", "ceny ustalane przez rynek", "swoboda prywatnej działalności", "centralne zarządzanie"],
    categories: ["gospodarka centralnie sterowana", "gospodarka rynkowa"],
    answer: {
      "gospodarka centralnie sterowana": ["dominacja własności państwowej", "ceny ustalane przez władze", "centralne zarządzanie"],
      "gospodarka rynkowa": ["dominacja własności prywatnej", "ceny ustalane przez rynek", "swoboda prywatnej działalności"]
    },
    explanation: "System centralny opiera się na decyzjach władz i własności państwowej, a rynkowy na własności prywatnej i mechanizmach rynku."
  },
  {
    id: "R03_ZAT_03",
    section: "Przemysł a struktura zatrudnienia",
    type: "match",
    prompt: "Połącz obszar z dominującą dawniej specjalizacją przemysłową.",
    options: null,
    left: ["Konurbacja katowicka", "Aglomeracja łódzka", "Górny Śląsk", "Łódź"],
    right: ["górnictwo i hutnictwo", "włókiennictwo i odzież", "kopalnie i sprzęt górniczy", "duże zakłady tekstylne"],
    answer: {
      "Konurbacja katowicka": "górnictwo i hutnictwo",
      "Aglomeracja łódzka": "włókiennictwo i odzież",
      "Górny Śląsk": "kopalnie i sprzęt górniczy",
      "Łódź": "duże zakłady tekstylne"
    },
    explanation: "Katowice i Górny Śląsk rozwijały górnictwo oraz hutnictwo, a Łódź i jej aglomeracja przemysł włókienniczy.",
    image: "r03_przemiany_slaska_i_lodzi.jpg"
  },
  {
    id: "R03_ZAT_04",
    section: "Przemysł a struktura zatrudnienia",
    type: "true_false",
    prompt: "Po 1989 roku udział usług w zatrudnieniu konurbacji katowickiej i aglomeracji łódzkiej wzrósł.",
    options: null,
    answer: true,
    explanation: "Udział przemysłu zmniejszył się na rzecz usług, które w 2023 roku skupiały blisko 70% zatrudnionych na obu obszarach.",
    image: "r03_przemiany_slaska_i_lodzi.jpg"
  },
  {
    id: "R03_ZAT_05",
    section: "Przemysł a struktura zatrudnienia",
    type: "fill_in",
    prompt: "W 1988 roku przemysł skupiał w konurbacji katowickiej około __________% zatrudnionych, a w 2023 roku usługi na obu analizowanych obszarach skupiały blisko __________% zatrudnionych.",
    options: null,
    answer: ["61", "70"],
    altAnswers: [["61", "61%", "60,6", "60,6%"], ["70", "70%"]],
    explanation: "Pod koniec lat 80. przemysł dominował w konurbacji katowickiej, natomiast w 2023 roku na obu obszarach dominowały usługi."
  },
  {
    id: "R03_ZAT_06",
    section: "Przemysł a struktura zatrudnienia",
    type: "scenario",
    prompt: "Dawna kopalnia przestała wydobywać węgiel. Jej zabudowania odnowiono i urządzono w nich centrum handlowe oraz przestrzeń kultury. Jak nazywa się takie nadanie terenom poprzemysłowym nowych funkcji?",
    options: ["Rewitalizacja", "Chemizacja", "Mechanizacja", "Melioracja", "Elektryfikacja", "Urbanizacja wsi"],
    answer: 0,
    explanation: "Powstawanie obiektów handlowych i kulturalnych na terenach dawnych kopalń i fabryk jest formą rewitalizacji terenów poprzemysłowych."
  },
  {
    id: "R03_ZAT_07",
    section: "Przemysł a struktura zatrudnienia",
    type: "multi_select",
    prompt: "Zaznacz zmiany, które zaszły po restrukturyzacji w konurbacji katowickiej i aglomeracji łódzkiej.",
    options: ["Spadek udziału przemysłu w zatrudnieniu", "Wzrost udziału usług", "Powstanie nowych funkcji w dawnych zakładach", "Rozwój nowocześniejszych gałęzi produkcji", "Całkowity zanik przemysłu", "Powrót do centralnego ustalania cen"],
    answer: [0, 1, 2, 3],
    explanation: "Restrukturyzacja zmniejszyła zatrudnienie w tradycyjnym przemyśle, zwiększyła rolę usług i sprzyjała nowym funkcjom oraz nowoczesnej produkcji."
  },
  {
    id: "R03_ZAT_08",
    section: "Przemysł a struktura zatrudnienia",
    type: "sequence",
    prompt: "Ułóż przemiany dawnego zakładu przemysłowego w logicznej kolejności.",
    options: null,
    items: ["nadanie obiektom nowych funkcji", "zamknięcie nierentownego zakładu", "dominacja tradycyjnego przemysłu", "spadek zatrudnienia w przemyśle"],
    answer: ["dominacja tradycyjnego przemysłu", "zamknięcie nierentownego zakładu", "spadek zatrudnienia w przemyśle", "nadanie obiektom nowych funkcji"],
    explanation: "Najpierw dominował tradycyjny przemysł, następnie zamykano nierentowne zakłady, malało zatrudnienie i pojawiały się nowe funkcje obiektów.",
    image: "r03_przemiany_slaska_i_lodzi.jpg"
  },
  {
    id: "R03_ZAT_09",
    section: "Przemysł a struktura zatrudnienia",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do gospodarki rynkowej: własność prywatna, ceny ustalane przez rynek, swoboda działalności gospodarczej, centralne zarządzanie gospodarką.",
    options: null,
    answer: "centralne zarządzanie gospodarką",
    explanation: "Centralne zarządzanie jest cechą gospodarki centralnie sterowanej, a nie rynkowej."
  },
  {
    id: "R03_ZAT_10",
    section: "Przemysł a struktura zatrudnienia",
    type: "riddle",
    prompt: "Największe w Łodzi centrum handlowo-usługowo-rozrywkowe powstałe w dawnym kompleksie włókienniczym to...",
    options: null,
    answer: "Manufaktura",
    altAnswers: ["Manufaktura", "centrum Manufaktura"],
    explanation: "Manufaktura powstała w zabytkowym kompleksie dawnych zakładów włókienniczych i nadaje obiektom poprzemysłowym nowe funkcje."
  },

  {
    id: "R03_ENE_01",
    section: "Energetyka",
    type: "sort",
    prompt: "Przyporządkuj źródła energii do odnawialnych i nieodnawialnych.",
    options: null,
    items: ["wiatr", "woda", "biomasa", "węgiel kamienny", "gaz ziemny", "pierwiastki promieniotwórcze"],
    categories: ["odnawialne", "nieodnawialne"],
    answer: {
      "odnawialne": ["wiatr", "woda", "biomasa"],
      "nieodnawialne": ["węgiel kamienny", "gaz ziemny", "pierwiastki promieniotwórcze"]
    },
    explanation: "Wiatr, woda i biomasa odnawiają się, natomiast paliwa kopalne oraz paliwo jądrowe są zasobami nieodnawialnymi."
  },
  {
    id: "R03_ENE_02",
    section: "Energetyka",
    type: "single_choice",
    prompt: "Jaki rodzaj elektrowni wytwarza w Polsce najwięcej energii elektrycznej?",
    options: ["Elektrownie cieplne", "Elektrownie wodne", "Elektrownie jądrowe", "Elektrownie geotermalne", "Elektrownie słoneczne", "Elektrownie pływowe"],
    answer: 0,
    explanation: "Około 70% energii elektrycznej w Polsce pochodzi z elektrowni cieplnych, opalanych głównie węglem."
  },
  {
    id: "R03_ENE_03",
    section: "Energetyka",
    type: "scenario",
    prompt: "Elektrownia ma spalać węgiel brunatny. Gdzie należy ją zbudować, aby ograniczyć problemy wynikające z transportu paliwa?",
    options: ["Przy miejscu wydobycia węgla brunatnego", "W dowolnym dużym mieście", "Na wybrzeżu bez złóż", "W centrum obszaru sadowniczego", "Na szczycie górskim", "Przy granicy bez połączeń transportowych"],
    answer: 0,
    explanation: "Węgiel brunatny traci jakość podczas transportu, dlatego elektrownie spalające go buduje się przy kopalniach.",
    image: "r03_elektrownia_belchatow.jpg"
  },
  {
    id: "R03_ENE_04",
    section: "Energetyka",
    type: "true_false",
    prompt: "W 2023 roku w Polsce działała elektrownia jądrowa wytwarzająca energię elektryczną.",
    options: null,
    answer: false,
    explanation: "W Polsce nie funkcjonowała elektrownia jądrowa; planowana pierwsza ma wytwarzać energię po 2036 roku."
  },
  {
    id: "R03_ENE_05",
    section: "Energetyka",
    type: "multi_select",
    prompt: "Zaznacz przyczyny szybkiego rozwoju energetyki słonecznej w Polsce.",
    options: ["Spadek cen paneli", "Wzrost efektywności paneli", "Programy wsparcia i dotacje", "Możliwość oddawania energii do sieci", "Znaczne pogorszenie technologii", "Zakaz montażu paneli na dachach"],
    answer: [0, 1, 2, 3],
    explanation: "Rozwój energetyki słonecznej wspierają tańsze i wydajniejsze panele, dotacje oraz możliwość rozliczania energii wprowadzanej do sieci.",
    image: "r03_odnawialne_zrodla_energii.jpg"
  },
  {
    id: "R03_ENE_06",
    section: "Energetyka",
    type: "match",
    prompt: "Połącz źródło energii z opisem jego wykorzystania w Polsce.",
    options: null,
    left: ["Wiatr", "Woda", "Biomasa", "Geotermia"],
    right: ["około 14% energii elektrycznej", "niewielka rola z powodu warunków rzek", "spalanie drewna i słomy", "głównie energia cieplna"],
    answer: {
      "Wiatr": "około 14% energii elektrycznej",
      "Woda": "niewielka rola z powodu warunków rzek",
      "Biomasa": "spalanie drewna i słomy",
      "Geotermia": "głównie energia cieplna"
    },
    explanation: "Źródła odnawialne mają w Polsce różne znaczenie i zastosowania zależne od warunków przyrodniczych i technologii."
  },
  {
    id: "R03_ENE_07",
    section: "Energetyka",
    type: "fill_in",
    prompt: "W 2023 roku odnawialne źródła energii dostarczyły w Polsce około __________% energii elektrycznej, a energia wiatru około __________%.",
    options: null,
    answer: ["27", "14"],
    altAnswers: [["27", "27%", "27,1", "27,1%"], ["14", "14%"]],
    explanation: "OZE odpowiadały za około 27% produkcji energii elektrycznej, a elektrownie wiatrowe za około 14%."
  },
  {
    id: "R03_ENE_08",
    section: "Energetyka",
    type: "single_choice",
    prompt: "Dlaczego farmy wiatrowe w województwie pomorskim mają duże znaczenie?",
    options: ["Na wybrzeżu często wieje wiatr", "Występują tam największe złoża węgla brunatnego", "Jest tam najdłuższy okres bezwietrzny", "Nie ma tam dostępu do sieci energetycznej", "Wiatraki wykorzystują wody geotermalne", "Farmy wiatrowe spalają biomasę"],
    answer: 0,
    explanation: "Częste i odpowiednio silne wiatry na wybrzeżu tworzą bardzo korzystne warunki dla energetyki wiatrowej.",
    image: "r03_energetyka_pomorze_lodzkie.jpg"
  },
  {
    id: "R03_ENE_09",
    section: "Energetyka",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych odnawialnych źródeł energii: wiatr, biomasa, energia wód, gaz ziemny.",
    options: null,
    answer: "gaz ziemny",
    explanation: "Gaz ziemny jest nieodnawialnym paliwem kopalnym, a pozostałe źródła są odnawialne.",
    image: "r03_odnawialne_zrodla_energii.jpg"
  },
  {
    id: "R03_ENE_10",
    section: "Energetyka",
    type: "riddle",
    prompt: "Zakład produkujący energię cieplną z ciepła wnętrza Ziemi to...",
    options: null,
    answer: "geotermia",
    altAnswers: ["geotermia", "ciepłownia geotermalna"],
    explanation: "Geotermie wykorzystują wody termalne do produkcji energii cieplnej, między innymi do ogrzewania budynków."
  },

  {
    id: "R03_HARD_01",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz zjawiska klimatyczne, które mimo ogólnie sprzyjającego klimatu utrudniają produkcję rolną w Polsce.",
    options: ["Wiosenne przymrozki", "Wiosenne susze", "Obfite deszcze podczas żniw", "Powodzie", "Całoroczny brak opadów", "Wieczna zmarzlina na nizinach"],
    answer: [0, 1, 2, 3],
    explanation: "Rolnictwu szkodzą nagłe przymrozki, wiosenne susze, letnie opady podczas żniw i lokalne powodzie.",
    image: "r03_warunki_rolnictwa_polska.jpg"
  },
  {
    id: "R03_HARD_02",
    section: "Super trudne",
    type: "fill_in",
    prompt: "W Polsce gospodarstwa indywidualne stanowią około __________%, a udział zatrudnionych w rolnictwie wynosił w 2023 roku około __________%.",
    options: null,
    answer: ["99,4", "8"],
    altAnswers: [["99,4", "99,4%", "99.4"], ["8", "8%"]],
    explanation: "Gospodarstwa indywidualne stanowiły 99,4% gospodarstw, a rolnictwo skupiało około 8% pracujących.",
    image: "r03_nowoczesne_gospodarstwo.jpg"
  },
  {
    id: "R03_HARD_03",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz roślinę z obszarem jej dużej koncentracji upraw.",
    options: null,
    left: ["Pszenica", "Buraki cukrowe", "Jabłonie", "Warzywa"],
    right: ["Żuławy i Wyżyna Lubelska", "Żuławy i Pojezierze Wielkopolskie", "rejon Grójca i Sandomierza", "okolice dużych miast"],
    answer: {
      "Pszenica": "Żuławy i Wyżyna Lubelska",
      "Buraki cukrowe": "Żuławy i Pojezierze Wielkopolskie",
      "Jabłonie": "rejon Grójca i Sandomierza",
      "Warzywa": "okolice dużych miast"
    },
    explanation: "Rozmieszczenie upraw zależy od wymagań glebowych i klimatycznych, a w przypadku warzyw także od bliskości rynku zbytu.",
    image: "r03_pola_pszenicy_i_ziemniakow.jpg"
  },
  {
    id: "R03_HARD_04",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Które miejsca zajmowała Polska w Unii Europejskiej w 2023 roku w produkcji jabłek, żyta i pszenicy?",
    options: ["Pierwsze, drugie i trzecie", "Drugie, pierwsze i czwarte", "Pierwsze, trzecie i drugie", "Trzecie, drugie i pierwsze", "Drugie, czwarte i trzecie", "Pierwsze, drugie i piąte"],
    answer: 0,
    explanation: "Polska zajmowała pierwsze miejsce w produkcji jabłek, drugie w produkcji żyta i trzecie w produkcji pszenicy."
  },
  {
    id: "R03_HARD_05",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż etapy wykorzystania biogazu od surowca do produkcji energii.",
    options: null,
    items: ["spalanie biogazu", "powstanie mieszaniny bogatej w metan", "rozkład odpadów i odchodów", "wytworzenie energii"],
    answer: ["rozkład odpadów i odchodów", "powstanie mieszaniny bogatej w metan", "spalanie biogazu", "wytworzenie energii"],
    explanation: "Biogaz powstaje podczas rozkładu materii organicznej, zawiera głównie metan, dwutlenek węgla i azot, a następnie może być spalany."
  },
  {
    id: "R03_HARD_06",
    section: "Super trudne",
    type: "scenario",
    prompt: "Firma wybiera lokalizację zakładu produkującego statki. Który czynnik lokalizacji ma w tym przypadku największe znaczenie?",
    options: ["Dostęp do wybrzeża", "Bliskość sadów", "Występowanie rędzin", "Sąsiedztwo pastwisk", "Długi okres wegetacyjny", "Złoża węgla brunatnego"],
    answer: 0,
    explanation: "Produkcję statków lokalizuje się na wybrzeżu, gdzie możliwe jest wodowanie i obsługa dużych jednostek."
  },
  {
    id: "R03_HARD_07",
    section: "Super trudne",
    type: "sort",
    prompt: "Przyporządkuj wyroby do grup, których produkcja w latach 1989-2023 wzrosła lub zmalała.",
    options: null,
    items: ["węgiel kamienny", "stal surowa", "obuwie", "telewizory", "pralki", "samochody ciężarowe"],
    categories: ["produkcja wzrosła", "produkcja zmalała"],
    answer: {
      "produkcja wzrosła": ["telewizory", "pralki", "samochody ciężarowe"],
      "produkcja zmalała": ["węgiel kamienny", "stal surowa", "obuwie"]
    },
    explanation: "Wzrosła produkcja telewizorów, pralek i samochodów ciężarowych, a zmalała produkcja węgla, stali i obuwia."
  },
  {
    id: "R03_HARD_08",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Jaki udział energii elektrycznej produkowanej w Polsce wytwarza elektrownia Bełchatów?",
    options: ["Około 13%", "Około 3%", "Około 27%", "Około 45%", "Około 1,4%", "Około 70%"],
    answer: 0,
    explanation: "Elektrownia Bełchatów, opalana węglem brunatnym, wytwarza około 13% energii elektrycznej produkowanej w Polsce.",
    image: "r03_elektrownia_belchatow.jpg"
  },
  {
    id: "R03_HARD_09",
    section: "Super trudne",
    type: "true_false",
    prompt: "W 2023 roku energia z biogazu miała większy udział w produkcji energii elektrycznej w Polsce niż energia z biomasy.",
    options: null,
    answer: false,
    explanation: "Biomasa dostarczała około 4% energii elektrycznej, a biogaz tylko około 0,9%."
  },
  {
    id: "R03_HARD_10",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz bariery ograniczające wykorzystanie odnawialnych źródeł energii w Polsce.",
    options: ["Brak dużych rzek o znacznym spadku", "Duża głębokość wód geotermalnych", "Wysokie koszty wydobycia wód termalnych", "Słabsze nasłonecznienie niż na południu Europy", "Brak jakiegokolwiek wiatru na wybrzeżu", "Zakaz wykorzystywania biomasy"],
    answer: [0, 1, 2, 3],
    explanation: "Hydroenergetykę ograniczają warunki rzek, geotermię głębokość i koszty, a energetykę słoneczną słabsze nasłonecznienie niż na południu Europy.",
    image: "r03_odnawialne_zrodla_energii.jpg"
  },
  {
    id: "R03_HARD_11",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz województwo z charakterystycznym uwarunkowaniem energetyki.",
    options: null,
    left: ["Łódzkie - węgiel", "Łódzkie - geotermia", "Pomorskie - wiatr", "Pomorskie - ropa i gaz"],
    right: ["najzasobniejsze złoża węgla brunatnego", "około jednej trzeciej krajowych zasobów energii geotermalnej", "częste wiatry wybrzeża", "porty i szelf bałtycki"],
    answer: {
      "Łódzkie - węgiel": "najzasobniejsze złoża węgla brunatnego",
      "Łódzkie - geotermia": "około jednej trzeciej krajowych zasobów energii geotermalnej",
      "Pomorskie - wiatr": "częste wiatry wybrzeża",
      "Pomorskie - ropa i gaz": "porty i szelf bałtycki"
    },
    explanation: "Energetyka obu województw wykorzystuje odmienne zasoby i warunki: węgiel i geotermię w Łódzkiem oraz wiatr, porty i szelf na Pomorzu.",
    image: "r03_energetyka_pomorze_lodzkie.jpg"
  },
  {
    id: "R03_HARD_12",
    section: "Super trudne",
    type: "fill_in",
    prompt: "W 2023 roku energia słoneczna dostarczyła około __________% energii elektrycznej w Polsce, a hydroelektrownie około __________%.",
    options: null,
    answer: ["6,8", "1,4"],
    altAnswers: [["6,8", "6,8%", "6.8"], ["1,4", "1,4%", "1.4"]],
    explanation: "Panele słoneczne dostarczyły 6,8% energii elektrycznej, a elektrownie wodne 1,4%."
  },
  {
    id: "R03_HARD_13",
    section: "Super trudne",
    type: "scenario",
    prompt: "Władze Uniejowa chcą wykorzystać lokalne wody o temperaturze około 70 stopni Celsjusza. Które zastosowanie najlepiej odpowiada wykorzystaniu tych wód?",
    options: ["Ogrzewanie budynków i rekreacja", "Produkcja węgla brunatnego", "Napęd statków morskich", "Chłodzenie kopalni", "Wytwarzanie paliwa jądrowego", "Nawadnianie plantacji bawełny"],
    answer: 0,
    explanation: "W Uniejowie wody geotermalne służą głównie do ogrzewania budynków, a także do celów rekreacyjnych."
  },
  {
    id: "R03_HARD_14",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Które porównanie województw pomorskiego i łódzkiego w 2023 roku jest poprawne?",
    options: ["Udział OZE wynosił około 65% w pomorskim i 10% w łódzkim", "Udział OZE wynosił około 10% w pomorskim i 65% w łódzkim", "W obu województwach udział OZE wynosił około 27%", "W obu województwach udział OZE wynosił około 65%", "W pomorskim nie wykorzystywano OZE", "W łódzkim cała energia pochodziła z OZE"],
    answer: 0,
    explanation: "W województwie pomorskim 65% energii elektrycznej pochodziło z OZE, a w łódzkim tylko 10%."
  },
  {
    id: "R03_HARD_15",
    section: "Super trudne",
    type: "riddle",
    prompt: "Platforma wydobywcza na polskim szelfie Morza Bałtyckiego, wspomniana przy wydobyciu ropy i gazu, to...",
    options: null,
    answer: "Baltic Beta",
    altAnswers: ["Baltic Beta", "platforma Baltic Beta"],
    explanation: "Platforma Baltic Beta służy do wydobywania ropy naftowej i gazu ziemnego z polskiej części szelfu bałtyckiego."
  }
];

const KID_PROMPTS = {
  "R03_ROL_01": "Które trzy rzeczy w przyrodzie wpływają na rolnictwo?",
  "R03_ROS_10": "Jak nazywa się cała ilość zebranych roślin?",
  "R03_PRZ_10": "Jak nazywa się przebudowa sposobu działania przemysłu?",
  "R03_ENE_01": "Podziel źródła energii na odnawialne i nieodnawialne."
};

const chapter = {
  id: "r03",
  number: 3,
  title: "Rolnictwo i przemysł Polski",
  icon: "🏭",
  sectionOrder: [
    "Warunki rozwoju rolnictwa",
    "Produkcja roślinna",
    "Produkcja zwierzęca",
    "Przemysł i restrukturyzacja",
    "Przemysł a struktura zatrudnienia",
    "Energetyka"
  ],
  sectionIcons: {
    "Warunki rozwoju rolnictwa": "🚜",
    "Produkcja roślinna": "🌾",
    "Produkcja zwierzęca": "🐄",
    "Przemysł i restrukturyzacja": "🏭",
    "Przemysł a struktura zatrudnienia": "👷",
    "Energetyka": "⚡"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
