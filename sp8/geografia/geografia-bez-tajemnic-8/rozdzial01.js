// Skróty sekcji (do identyfikatorów ćwiczeń):
//   POL  = Położenie i rzeźba Azji
//   KON  = Klimat, ludność i gospodarka
//   OGN  = Pacyficzny pierścień ognia
//   KAT  = Katastrofy i ochrona ludności
//   RYZ  = Monsun i kultura ryżu
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R01_POL_01",
    section: "Położenie i rzeźba Azji",
    type: "single_choice",
    prompt: "Jaka jest powierzchnia Azji?",
    options: ["Około 14,5 mln km²", "Około 24,5 mln km²", "Około 34,5 mln km²", "Około 44,5 mln km²", "Około 54,5 mln km²", "Około 64,5 mln km²"],
    answer: 3,
    explanation: "Azja ma około 44,5 mln km² powierzchni i jest największym kontynentem świata.",
    image: "r01_azja_mapa.jpg"
  },
  {
    id: "R01_POL_02",
    section: "Położenie i rzeźba Azji",
    type: "true_false",
    prompt: "Główna lądowa część Azji leży na półkulach północnej i wschodniej.",
    options: null,
    answer: true,
    explanation: "Azja leży niemal w całości na półkuli wschodniej, a jej główna część lądowa znajduje się na półkuli północnej.",
    image: "r01_azja_mapa.jpg"
  },
  {
    id: "R01_POL_03",
    section: "Położenie i rzeźba Azji",
    type: "multi_select",
    prompt: "Zaznacz oceany oblewające Azję.",
    options: ["Ocean Spokojny", "Ocean Indyjski", "Ocean Arktyczny", "Ocean Atlantycki", "Ocean Południowy"],
    answer: [0, 1, 2],
    explanation: "Azję oblewają Ocean Spokojny, Ocean Indyjski i Ocean Arktyczny wraz z ich morzami.",
    image: "r01_azja_mapa.jpg"
  },
  {
    id: "R01_POL_04",
    section: "Położenie i rzeźba Azji",
    type: "fill_in",
    prompt: "Góry i wyżyny zajmują około __________ powierzchni Azji.",
    options: null,
    answer: ["2/3"],
    altAnswers: [["2/3", "dwie trzecie", "⅔"]],
    explanation: "Góry i wyżyny przeważają w rzeźbie Azji i zajmują około dwóch trzecich jej powierzchni."
  },
  {
    id: "R01_POL_05",
    section: "Położenie i rzeźba Azji",
    type: "match",
    prompt: "Połącz obiekt lub cechę Azji z właściwą informacją.",
    options: null,
    left: ["Mount Everest", "wybrzeże Morza Martwego", "Himalaje i Karakorum", "góry i wyżyny"],
    right: ["8849 m n.p.m.", "438 m p.p.m.", "najwyższe obszary na Ziemi", "około 2/3 powierzchni kontynentu"],
    answer: {
      "Mount Everest": "8849 m n.p.m.",
      "wybrzeże Morza Martwego": "438 m p.p.m.",
      "Himalaje i Karakorum": "najwyższe obszary na Ziemi",
      "góry i wyżyny": "około 2/3 powierzchni kontynentu"
    },
    explanation: "Azja łączy rekordowo wysokie góry z najgłębszą depresją lądową, a większość jej powierzchni zajmują góry i wyżyny."
  },
  {
    id: "R01_POL_06",
    section: "Położenie i rzeźba Azji",
    type: "riddle",
    prompt: "Najwyższy szczyt Ziemi, nazywany także Czomolungmą lub Sagarmathą, to...",
    options: null,
    answer: "Mount Everest",
    altAnswers: ["Mount Everest", "Everest", "Czomolungma", "Sagarmatha"],
    explanation: "Mount Everest osiąga 8849 m n.p.m. i jest najwyższą górą świata.",
    image: "r01_mount_everest.jpg"
  },
  {
    id: "R01_POL_07",
    section: "Położenie i rzeźba Azji",
    type: "single_choice",
    prompt: "Ile szczytów w Himalajach i Karakorum przekracza 8000 m n.p.m.?",
    options: ["4", "8", "10", "12", "14", "18"],
    answer: 4,
    explanation: "Czternaście szczytów Himalajów i Karakorum wznosi się na ponad 8000 m n.p.m."
  },
  {
    id: "R01_POL_08",
    section: "Położenie i rzeźba Azji",
    type: "scenario",
    prompt: "Turysta stoi na brzegu słonowodnego jeziora 438 metrów poniżej poziomu morza. Gdzie się znajduje?",
    options: ["Na wybrzeżu Morza Martwego", "Na szczycie Mount Everestu", "Na Wyżynie Tybetańskiej", "Na Syberii"],
    answer: 0,
    explanation: "Wybrzeże Morza Martwego leży 438 m p.p.m. i tworzy najniżej położoną depresję na Ziemi.",
    image: "r01_morze_martwe.jpg"
  },
  {
    id: "R01_POL_09",
    section: "Położenie i rzeźba Azji",
    type: "odd_one_out",
    prompt: "Wskaż obiekt, który nie jest związany z najwyżej położonymi obszarami Azji: Himalaje, Karakorum, Mount Everest, wybrzeże Morza Martwego.",
    options: null,
    answer: "wybrzeże Morza Martwego",
    explanation: "Wybrzeże Morza Martwego jest depresją, a pozostałe elementy wiążą się z najwyższymi górami Azji."
  },
  {
    id: "R01_POL_10",
    section: "Położenie i rzeźba Azji",
    type: "sort",
    prompt: "Podziel informacje na dotyczące najwyższych i najniższych obszarów Azji.",
    options: null,
    items: ["Mount Everest", "8849 m n.p.m.", "Himalaje", "Morze Martwe", "438 m p.p.m.", "najgłębsza depresja na Ziemi"],
    categories: ["obszary najwyższe", "obszary najniższe"],
    answer: {
      "obszary najwyższe": ["Mount Everest", "8849 m n.p.m.", "Himalaje"],
      "obszary najniższe": ["Morze Martwe", "438 m p.p.m.", "najgłębsza depresja na Ziemi"]
    },
    explanation: "Mount Everest w Himalajach reprezentuje najwyższe obszary, a depresja nad Morzem Martwym najniższe."
  },
  {
    id: "R01_POL_11",
    section: "Położenie i rzeźba Azji",
    type: "true_false",
    prompt: "Niektóre wyspy zaliczane do Azji leżą na półkuli południowej.",
    options: null,
    answer: true,
    explanation: "Główna część Azji leży na półkuli północnej, ale część azjatyckich wysp znajduje się na półkuli południowej.",
    image: "r01_azja_mapa.jpg"
  },
  {
    id: "R01_KON_01",
    section: "Klimat, ludność i gospodarka",
    type: "single_choice",
    prompt: "Dlaczego w Azji występują wszystkie strefy klimatyczne Ziemi?",
    options: ["Z powodu dużej rozciągłości południkowej", "Wyłącznie z powodu licznych rzek", "Z powodu małej powierzchni", "Wyłącznie z powodu działalności człowieka", "Z powodu braku gór", "Z powodu położenia tylko przy równiku"],
    answer: 0,
    explanation: "Południowe krańce Azji sięgają niemal równika, a północne leżą daleko za kołem podbiegunowym."
  },
  {
    id: "R01_KON_02",
    section: "Klimat, ludność i gospodarka",
    type: "match",
    prompt: "Połącz miejsce z rekordem klimatycznym.",
    options: null,
    left: ["Ojmiakon", "Mitribah", "Mawsynram", "Aden"],
    right: ["-71,2°C", "53,9°C", "11 872 mm opadów rocznie", "46 mm opadów rocznie"],
    answer: {
      "Ojmiakon": "-71,2°C",
      "Mitribah": "53,9°C",
      "Mawsynram": "11 872 mm opadów rocznie",
      "Aden": "46 mm opadów rocznie"
    },
    explanation: "Azjatyckie rekordy obejmują skrajne temperatury w Ojmiakonie i Mitribah oraz ogromny kontrast opadów między Mawsynram i Adenem."
  },
  {
    id: "R01_KON_03",
    section: "Klimat, ludność i gospodarka",
    type: "multi_select",
    prompt: "Zaznacz obszary Azji o bardzo małej gęstości zaludnienia.",
    options: ["Stepy Mongolii", "Syberyjska tajga", "Pustynie Półwyspu Arabskiego", "Singapur", "Dhaka"],
    answer: [0, 1, 2],
    explanation: "Rozległe stepy, tajga i pustynie są słabo zaludnione, w przeciwieństwie do Singapuru i wielkich metropolii."
  },
  {
    id: "R01_KON_04",
    section: "Klimat, ludność i gospodarka",
    type: "fill_in",
    prompt: "Azję zamieszkuje niemal __________ miliarda ludzi, z czego ponad __________ miliarda mieszka w Chinach i Indiach.",
    options: null,
    answer: ["4,8", "2,8"],
    altAnswers: [["4,8", "4.8", "4,8 mld"], ["2,8", "2.8", "2,8 mld"]],
    explanation: "Azję zamieszkuje niemal 4,8 mld ludzi, a Chiny i Indie skupiają łącznie ponad 2,8 mld."
  },
  {
    id: "R01_KON_05",
    section: "Klimat, ludność i gospodarka",
    type: "scenario",
    prompt: "Region ma niemal 8 tysięcy mieszkańców na kilometr kwadratowy i jest silnie zurbanizowany. Które państwo najlepiej pasuje do opisu?",
    options: ["Singapur", "Mongolia", "Afganistan", "Bhutan"],
    answer: 0,
    explanation: "W Singapurze gęstość zaludnienia wynosi około 7909 osób na km², podczas gdy Mongolia jest bardzo słabo zaludniona."
  },
  {
    id: "R01_KON_06",
    section: "Klimat, ludność i gospodarka",
    type: "sort",
    prompt: "Podziel państwa według poziomu rozwoju gospodarczego.",
    options: null,
    items: ["Japonia", "Korea Południowa", "Singapur", "Afganistan", "Korea Północna", "Bhutan"],
    categories: ["wysoki poziom rozwoju", "niski poziom rozwoju"],
    answer: {
      "wysoki poziom rozwoju": ["Japonia", "Korea Południowa", "Singapur"],
      "niski poziom rozwoju": ["Afganistan", "Korea Północna", "Bhutan"]
    },
    explanation: "Japonia, Korea Południowa i Singapur szybko się rozwinęły, a Afganistan, Korea Północna i Bhutan należą do państw słabiej rozwiniętych."
  },
  {
    id: "R01_KON_07",
    section: "Klimat, ludność i gospodarka",
    type: "true_false",
    prompt: "Od 2023 roku Indie są najludniejszym państwem świata.",
    options: null,
    answer: true,
    explanation: "W 2023 roku Indie wyprzedziły inne państwa pod względem liczby ludności."
  },
  {
    id: "R01_KON_08",
    section: "Klimat, ludność i gospodarka",
    type: "odd_one_out",
    prompt: "Wskaż państwo o niskim poziomie rozwoju gospodarczego: Japonia, Korea Południowa, Singapur, Afganistan.",
    options: null,
    answer: "Afganistan",
    explanation: "Afganistan ma niski poziom rozwoju, a pozostałe państwa należą do wysoko rozwiniętych."
  },
  {
    id: "R01_KON_09",
    section: "Klimat, ludność i gospodarka",
    type: "riddle",
    prompt: "Najzimniejsze stale zamieszkane miejsce na Ziemi, położone na Syberii, to...",
    options: null,
    answer: "Ojmiakon",
    altAnswers: ["Ojmiakon", "Ojmjakon"],
    explanation: "W Ojmiakonie rekordowy mróz osiągnął około -71,2°C."
  },
  {
    id: "R01_KON_10",
    section: "Klimat, ludność i gospodarka",
    type: "multi_select",
    prompt: "Zaznacz demokratyczne państwa Azji.",
    options: ["Indie", "Korea Południowa", "Korea Północna", "Arabia Saudyjska", "Mjanma"],
    answer: [0, 1],
    explanation: "W Indiach i Korei Południowej regularnie odbywają się wybory, natomiast pozostałe przykłady reprezentują ustroje niedemokratyczne."
  },
  {
    id: "R01_KON_11",
    section: "Klimat, ludność i gospodarka",
    type: "scenario",
    prompt: "Na karcie wyborczej obok nazw partii umieszczono symbole. Jaki problem ma rozwiązać to działanie?",
    options: ["Ułatwić głosowanie osobom niepiśmiennym", "Uniemożliwić udział mieszkańcom wsi", "Zastąpić tajne wybory", "Wybrać monarchę"],
    answer: 0,
    explanation: "Symbole partii pomagają osobom niepiśmiennym rozpoznać ugrupowania i świadomie oddać głos."
  },
  {
    id: "R01_OGN_01",
    section: "Pacyficzny pierścień ognia",
    type: "single_choice",
    prompt: "Wokół którego oceanu rozciąga się pacyficzny pierścień ognia?",
    options: ["Oceanu Spokojnego", "Oceanu Atlantyckiego", "Oceanu Indyjskiego", "Oceanu Arktycznego", "Morza Śródziemnego", "Morza Czarnego"],
    answer: 0,
    explanation: "Pacyficzny pierścień ognia otacza Ocean Spokojny i obejmuje strefy styku wielu płyt litosfery.",
    image: "r01_pierscien_ognia.jpg"
  },
  {
    id: "R01_OGN_02",
    section: "Pacyficzny pierścień ognia",
    type: "true_false",
    prompt: "W pacyficznym pierścieniu ognia występuje większość aktywnych wulkanów i trzęsień ziemi na świecie.",
    options: null,
    answer: true,
    explanation: "Styk płyt wokół Oceanu Spokojnego jest obszarem wyjątkowo intensywnej aktywności sejsmicznej i wulkanicznej.",
    image: "r01_pierscien_ognia.jpg"
  },
  {
    id: "R01_OGN_03",
    section: "Pacyficzny pierścień ognia",
    type: "multi_select",
    prompt: "Zaznacz zjawiska związane ze zbieżnymi granicami płyt we wschodniej i południowej Azji.",
    options: ["Trzęsienia ziemi", "Erupcje wulkanów", "Powstawanie rowów oceanicznych", "Tsunami", "Powstawanie zórz polarnych"],
    answer: [0, 1, 2, 3],
    explanation: "Kolizja i podsuwanie płyt wyzwalają energię, tworzą rowy oceaniczne i mogą prowadzić do trzęsień ziemi, erupcji oraz tsunami."
  },
  {
    id: "R01_OGN_04",
    section: "Pacyficzny pierścień ognia",
    type: "sequence",
    prompt: "Ułóż etapy powstawania rowu oceanicznego.",
    options: null,
    items: ["dno oceanu staje się znacznie głębsze", "jedna płyta podsuwa się pod drugą", "powstaje rów oceaniczny", "płyta oceaniczna wygina się w dół"],
    answer: ["jedna płyta podsuwa się pod drugą", "płyta oceaniczna wygina się w dół", "dno oceanu staje się znacznie głębsze", "powstaje rów oceaniczny"],
    explanation: "Subdukcja wygina płytę oceaniczną, pogłębia dno i tworzy podłużny rów oceaniczny."
  },
  {
    id: "R01_OGN_05",
    section: "Pacyficzny pierścień ognia",
    type: "match",
    prompt: "Połącz zjawisko z bezpośrednią przyczyną.",
    options: null,
    left: ["trzęsienie ziemi", "erupcja wulkanu", "tsunami", "rów oceaniczny"],
    right: ["nagłe przesunięcie płyt i fale sejsmiczne", "wypływ magmy na powierzchnię", "gwałtowne przemieszczenie masy wody", "wygięcie płyty oceanicznej w dół"],
    answer: {
      "trzęsienie ziemi": "nagłe przesunięcie płyt i fale sejsmiczne",
      "erupcja wulkanu": "wypływ magmy na powierzchnię",
      "tsunami": "gwałtowne przemieszczenie masy wody",
      "rów oceaniczny": "wygięcie płyty oceanicznej w dół"
    },
    explanation: "Wszystkie te zjawiska mogą być elementami jednego układu procesów zachodzących na granicy płyt."
  },
  {
    id: "R01_OGN_06",
    section: "Pacyficzny pierścień ognia",
    type: "riddle",
    prompt: "Podłużne zagłębienie na granicy płyt, gdzie jedna płyta podsuwa się pod drugą, to...",
    options: null,
    answer: "rów oceaniczny",
    altAnswers: ["rów oceaniczny", "row oceaniczny"],
    explanation: "Rów oceaniczny powstaje wskutek wygięcia podsuwającej się płyty oceanicznej."
  },
  {
    id: "R01_OGN_07",
    section: "Pacyficzny pierścień ognia",
    type: "fill_in",
    prompt: "Energia trzęsienia ziemi rozchodzi się w postaci fal __________.",
    options: null,
    answer: ["sejsmicznych"],
    altAnswers: [["sejsmicznych", "sejsmiczne"]],
    explanation: "Nagłe przesunięcie płyt uwalnia energię w postaci fal sejsmicznych."
  },
  {
    id: "R01_OGN_08",
    section: "Pacyficzny pierścień ognia",
    type: "scenario",
    prompt: "Morze nagle cofa się od brzegu po silnym podwodnym trzęsieniu ziemi. Jakie zagrożenie może nadejść?",
    options: ["Tsunami", "Monsun zimowy", "Susza", "Burza piaskowa"],
    answer: 0,
    explanation: "Nagłe cofnięcie morza może poprzedzać nadejście fali tsunami wywołanej ruchem dna oceanu.",
    image: "r01_tsunami_wybrzeze.jpg"
  },
  {
    id: "R01_OGN_09",
    section: "Pacyficzny pierścień ognia",
    type: "odd_one_out",
    prompt: "Wskaż zjawisko, które nie wynika z ruchów płyt w obrębie pierścienia ognia: trzęsienie ziemi, erupcja wulkanu, tsunami, monsun letni.",
    options: null,
    answer: "monsun letni",
    explanation: "Monsun jest skutkiem różnic ciśnienia między lądem i oceanem, a pozostałe zjawiska wiążą się z ruchem płyt."
  },
  {
    id: "R01_OGN_10",
    section: "Pacyficzny pierścień ognia",
    type: "sort",
    prompt: "Podziel skutki ruchu płyt na związane ze skałami i związane z wodą oceanu.",
    options: null,
    items: ["fale sejsmiczne", "roztapianie skał", "powstawanie magmy", "gwałtowne popchnięcie wody", "przemieszczanie wielkiej masy wody", "fala tsunami"],
    categories: ["procesy w skałach", "procesy w wodzie"],
    answer: {
      "procesy w skałach": ["fale sejsmiczne", "roztapianie skał", "powstawanie magmy"],
      "procesy w wodzie": ["gwałtowne popchnięcie wody", "przemieszczanie wielkiej masy wody", "fala tsunami"]
    },
    explanation: "Ruch płyt oddziałuje na skały skorupy i może nagle przemieścić dno, które wprawia w ruch wodę oceanu."
  },
  {
    id: "R01_OGN_11",
    section: "Pacyficzny pierścień ognia",
    type: "multi_select",
    prompt: "Zaznacz wybrzeża państw dotknięte tsunami na Oceanie Indyjskim w 2004 roku.",
    options: ["Sri Lanka", "Indonezja", "Indie", "Tajlandia", "Mongolia"],
    answer: [0, 1, 2, 3],
    explanation: "Tsunami z 2004 roku dotarło między innymi do Sri Lanki, Indonezji, Indii i Tajlandii."
  },
  {
    id: "R01_KAT_01",
    section: "Katastrofy i ochrona ludności",
    type: "true_false",
    prompt: "Naukowcy potrafią dokładnie przewidzieć moment wystąpienia trzęsienia ziemi.",
    options: null,
    answer: false,
    explanation: "Trzęsienie ziemi może wystąpić niespodziewanie i nie da się obecnie dokładnie przewidzieć jego momentu."
  },
  {
    id: "R01_KAT_02",
    section: "Katastrofy i ochrona ludności",
    type: "single_choice",
    prompt: "Które zjawisko zwykle daje wcześniej oznaki umożliwiające ostrzeżenie i ewakuację?",
    options: ["Erupcja wulkanu", "Trzęsienie ziemi", "Nagłe przesunięcie uskoku", "Powstanie fal sejsmicznych", "Zawalenie budynku", "Pęknięcie wodociągu"],
    answer: 0,
    explanation: "Wulkan zazwyczaj daje oznaki nadchodzącej erupcji, co umożliwia ostrzeżenie mieszkańców.",
    image: "r01_wulkan_azja.jpg"
  },
  {
    id: "R01_KAT_03",
    section: "Katastrofy i ochrona ludności",
    type: "multi_select",
    prompt: "Zaznacz działania ograniczające skutki katastrof przyrodniczych.",
    options: ["Odporne przepisy budowlane", "Monitoring zagrożeń", "System ostrzegawczy", "Ćwiczenia ewakuacyjne", "Edukacja społeczeństwa", "Likwidacja służb ratowniczych"],
    answer: [0, 1, 2, 3, 4],
    explanation: "Ochrona wymaga odpornych budowli, monitoringu, ostrzegania, ćwiczeń oraz edukacji mieszkańców."
  },
  {
    id: "R01_KAT_04",
    section: "Katastrofy i ochrona ludności",
    type: "match",
    prompt: "Połącz działanie ochronne z jego funkcją.",
    options: null,
    left: ["sejsmograf", "system ostrzegania", "przepisy budowlane", "służby ratownicze"],
    right: ["zapis ruchów skorupy ziemskiej", "przekazanie informacji o zagrożeniu", "wymóg odpornych konstrukcji", "pomoc po katastrofie"],
    answer: {
      "sejsmograf": "zapis ruchów skorupy ziemskiej",
      "system ostrzegania": "przekazanie informacji o zagrożeniu",
      "przepisy budowlane": "wymóg odpornych konstrukcji",
      "służby ratownicze": "pomoc po katastrofie"
    },
    explanation: "Skuteczna ochrona łączy obserwację zagrożeń, ostrzeganie, odporne budownictwo i sprawne ratownictwo."
  },
  {
    id: "R01_KAT_05",
    section: "Katastrofy i ochrona ludności",
    type: "sort",
    prompt: "Przyporządkuj cechy do trzęsienia ziemi, erupcji wulkanu albo tsunami.",
    options: null,
    items: ["nie można przewidzieć", "zwykle poprzedzają je oznaki", "działa system ostrzegania", "pył może przebyć wielkie odległości", "fala może okrążyć Ziemię", "wiele budynków zawala się od wstrząsów"],
    categories: ["trzęsienie ziemi", "erupcja wulkanu", "tsunami"],
    answer: {
      "trzęsienie ziemi": ["nie można przewidzieć", "wiele budynków zawala się od wstrząsów"],
      "erupcja wulkanu": ["zwykle poprzedzają je oznaki", "pył może przebyć wielkie odległości"],
      "tsunami": ["działa system ostrzegania", "fala może okrążyć Ziemię"]
    },
    explanation: "Zjawiska różnią się możliwością prognozowania i zasięgiem, choć każde może powodować ogromne straty."
  },
  {
    id: "R01_KAT_06",
    section: "Katastrofy i ochrona ludności",
    type: "scenario",
    prompt: "Miasto leży w obszarze sejsmicznym. Które działanie najlepiej ograniczy zawalanie budynków?",
    options: ["Stosowanie odpornych konstrukcji", "Budowa bez przepisów", "Wyłączenie monitoringu", "Ukrywanie informacji o zagrożeniu"],
    answer: 0,
    explanation: "Przepisy wymuszające odporne konstrukcje zmniejszają ryzyko zawalenia budynków podczas wstrząsów."
  },
  {
    id: "R01_KAT_07",
    section: "Katastrofy i ochrona ludności",
    type: "fill_in",
    prompt: "Urządzenie zapisujące ruchy skorupy ziemskiej to __________.",
    options: null,
    answer: ["sejsmograf"],
    altAnswers: [["sejsmograf", "sejsmografem"]],
    explanation: "Sejsmograf rejestruje drgania i ruchy skorupy ziemskiej."
  },
  {
    id: "R01_KAT_08",
    section: "Katastrofy i ochrona ludności",
    type: "odd_one_out",
    prompt: "Wskaż działanie, które nie zwiększa bezpieczeństwa mieszkańców: monitoring zagrożeń, ćwiczenia ewakuacyjne, edukacja, ignorowanie ostrzeżeń.",
    options: null,
    answer: "ignorowanie ostrzeżeń",
    explanation: "Ignorowanie ostrzeżeń zwiększa ryzyko, a monitoring, edukacja i ćwiczenia pomagają przygotować się do katastrofy."
  },
  {
    id: "R01_KAT_09",
    section: "Katastrofy i ochrona ludności",
    type: "sequence",
    prompt: "Ułóż działania od wykrycia zagrożenia do udzielenia pomocy.",
    options: null,
    items: ["ewakuacja mieszkańców", "monitoring wykrywa zagrożenie", "służby udzielają pomocy", "system przekazuje ostrzeżenie"],
    answer: ["monitoring wykrywa zagrożenie", "system przekazuje ostrzeżenie", "ewakuacja mieszkańców", "służby udzielają pomocy"],
    explanation: "Monitoring dostarcza informacji, ostrzeżenie uruchamia ewakuację, a służby pomagają poszkodowanym."
  },
  {
    id: "R01_KAT_10",
    section: "Katastrofy i ochrona ludności",
    type: "multi_select",
    prompt: "Zaznacz wspólne możliwe skutki trzęsień ziemi, erupcji wulkanów i tsunami.",
    options: ["Ofiary i ranni", "Uszkodzenie infrastruktury", "Problemy z dostawami wody i żywności", "Pożary", "Ryzyko epidemii", "Zawsze globalne ochłodzenie"],
    answer: [0, 1, 2, 3, 4],
    explanation: "Każde z tych zjawisk może powodować ofiary, zniszczenia, pożary, przerwy w dostawach i zagrożenie epidemiczne."
  },
  {
    id: "R01_KAT_11",
    section: "Katastrofy i ochrona ludności",
    type: "riddle",
    prompt: "Jak nazywają się obszary, na których występują trzęsienia ziemi?",
    options: null,
    answer: "obszary sejsmiczne",
    altAnswers: ["obszary sejsmiczne", "strefy sejsmiczne", "obszar sejsmiczny"],
    explanation: "Obszary sejsmiczne są narażone na wstrząsy wywołane ruchem płyt litosfery."
  },
  {
    id: "R01_RYZ_01",
    section: "Monsun i kultura ryżu",
    type: "single_choice",
    prompt: "W jakim kierunku wieje monsun letni?",
    options: ["Znad oceanu ku lądowi", "Znad lądu ku oceanowi", "Wyłącznie z północy na południe", "Wyłącznie z gór ku dolinom", "Od równika ku biegunowi przez cały rok", "Nie ma stałego kierunku"],
    answer: 0,
    explanation: "Latem ląd nagrzewa się szybciej, tworzy niż i przyciąga wilgotne powietrze znad oceanu."
  },
  {
    id: "R01_RYZ_02",
    section: "Monsun i kultura ryżu",
    type: "true_false",
    prompt: "Monsun zimowy wieje znad lądu ku oceanowi i przynosi chłodniejsze oraz bardziej suche powietrze.",
    options: null,
    answer: true,
    explanation: "Zimą ląd szybko się ochładza, tworzy wyż i kieruje suche powietrze ku niżowi nad cieplejszym oceanem."
  },
  {
    id: "R01_RYZ_03",
    section: "Monsun i kultura ryżu",
    type: "sequence",
    prompt: "Ułóż etapy powstawania monsunu letniego.",
    options: null,
    items: ["wilgotne powietrze płynie znad oceanu", "nad lądem powstaje niż", "ląd szybko się nagrzewa", "nad oceanem utrzymuje się wyż"],
    answer: ["ląd szybko się nagrzewa", "nad lądem powstaje niż", "nad oceanem utrzymuje się wyż", "wilgotne powietrze płynie znad oceanu"],
    explanation: "Różnica nagrzewania lądu i oceanu tworzy układ ciśnienia, który kieruje wilgotne powietrze nad kontynent."
  },
  {
    id: "R01_RYZ_04",
    section: "Monsun i kultura ryżu",
    type: "fill_in",
    prompt: "Najkorzystniejsza temperatura dla ryżu wynosi __________-__________°C, a podczas wzrostu woda powinna mieć około __________ cm głębokości.",
    options: null,
    answer: ["20", "30", "15"],
    altAnswers: [["20", "20°C"], ["30", "30°C"], ["15", "15 cm"]],
    explanation: "Ryż najlepiej rośnie w temperaturze 20-30°C, a młode rośliny są zanurzone w wodzie o głębokości około 15 cm."
  },
  {
    id: "R01_RYZ_05",
    section: "Monsun i kultura ryżu",
    type: "scenario",
    prompt: "Zbliżają się zbiory ryżu. Co należy zrobić z wodą na polu?",
    options: ["Usunąć ją z pola", "Podnieść jej poziom do jednego metra", "Zamrozić ją", "Dodać wodę morską"],
    answer: 0,
    explanation: "Przed zbiorami wodę usuwa się, aby ziarna straciły nadmiar wilgoci, czemu sprzyja spadek opadów pod koniec monsunu."
  },
  {
    id: "R01_RYZ_06",
    section: "Monsun i kultura ryżu",
    type: "match",
    prompt: "Połącz etap uprawy ryżu z właściwym działaniem.",
    options: null,
    left: ["kiełkowanie", "sadzenie", "wzrost", "dojrzewanie", "przed zbiorem"],
    right: ["specjalne pojemniki", "przeniesienie sadzonek na pole", "zanurzenie roślin w wodzie", "zmniejszanie ilości wody", "osuszenie pola"],
    answer: {
      "kiełkowanie": "specjalne pojemniki",
      "sadzenie": "przeniesienie sadzonek na pole",
      "wzrost": "zanurzenie roślin w wodzie",
      "dojrzewanie": "zmniejszanie ilości wody",
      "przed zbiorem": "osuszenie pola"
    },
    explanation: "Uprawa ryżu wymaga starannego sterowania wodą od kiełkowania aż do zbiorów.",
    image: "r01_pole_ryzowe.jpg"
  },
  {
    id: "R01_RYZ_07",
    section: "Monsun i kultura ryżu",
    type: "multi_select",
    prompt: "Zaznacz produkty wytwarzane z ryżu.",
    options: ["Mąka", "Olej", "Ocet", "Sake", "Wino", "Benzyna"],
    answer: [0, 1, 2, 3, 4],
    explanation: "Z ryżu wytwarza się między innymi mąkę, olej, ocet oraz napoje alkoholowe, takie jak sake i wino."
  },
  {
    id: "R01_RYZ_08",
    section: "Monsun i kultura ryżu",
    type: "multi_select",
    prompt: "Zaznacz sposoby wykorzystania słomy ryżowej.",
    options: ["Pasza", "Ściółka", "Nawóz", "Pokrycie dachów", "Maty i miotły", "Produkcja rud metali"],
    answer: [0, 1, 2, 3, 4],
    explanation: "Słoma ryżowa służy jako pasza, ściółka, nawóz, pokrycie dachów i materiał do wyrobu przedmiotów."
  },
  {
    id: "R01_RYZ_09",
    section: "Monsun i kultura ryżu",
    type: "riddle",
    prompt: "Jak nazywa się kultura społeczna, w której współpracę i dobro wspólne przedkłada się nad interes jednostki?",
    options: null,
    answer: "kultura ryżu",
    altAnswers: ["kultura ryżu", "kultura ryzowa", "kultura ryżowa"],
    explanation: "Wspólne nawadnianie, sadzenie i zbiory ukształtowały kulturę ryżu opartą na ścisłej współpracy."
  },
  {
    id: "R01_RYZ_10",
    section: "Monsun i kultura ryżu",
    type: "sort",
    prompt: "Podziel warunki i działania na związane z monsunem letnim albo zimowym.",
    options: null,
    items: ["wiatr znad oceanu", "wysokie opady", "niż nad lądem", "wiatr znad lądu", "suche powietrze", "wyż nad lądem"],
    categories: ["monsun letni", "monsun zimowy"],
    answer: {
      "monsun letni": ["wiatr znad oceanu", "wysokie opady", "niż nad lądem"],
      "monsun zimowy": ["wiatr znad lądu", "suche powietrze", "wyż nad lądem"]
    },
    explanation: "Latem wilgotne powietrze płynie ku niżowi nad lądem, a zimą suchy wiatr wieje od wyżu nad kontynentem."
  },
  {
    id: "R01_RYZ_11",
    section: "Monsun i kultura ryżu",
    type: "odd_one_out",
    prompt: "Wskaż element, który nie sprzyja uprawie ryżu mokrego: wysoka temperatura, obfite opady, silne nasłonecznienie podczas dojrzewania, długotrwały mróz.",
    options: null,
    answer: "długotrwały mróz",
    explanation: "Ryż wymaga wysokiej temperatury, wody i słońca, natomiast długotrwały mróz uniemożliwia jego uprawę.",
    image: "r01_pole_ryzowe.jpg"
  },
  {
    id: "R01_HARD_01",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Azja ma około __________ mln km² i niemal __________ mld mieszkańców.",
    options: null,
    answer: ["44,5", "4,8"],
    altAnswers: [["44,5", "44.5", "44,5 mln"], ["4,8", "4.8", "4,8 mld"]],
    explanation: "Powierzchnia Azji wynosi około 44,5 mln km², a liczba ludności niemal 4,8 mld."
  },
  {
    id: "R01_HARD_02",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz azjatycki rekord z dokładną wartością.",
    options: null,
    left: ["Mount Everest", "Morze Martwe", "Mawsynram", "Singapur"],
    right: ["8849 m n.p.m.", "438 m p.p.m.", "11 872 mm opadów", "7909 os./km²"],
    answer: {
      "Mount Everest": "8849 m n.p.m.",
      "Morze Martwe": "438 m p.p.m.",
      "Mawsynram": "11 872 mm opadów",
      "Singapur": "7909 os./km²"
    },
    explanation: "Rekordy Azji obejmują wysokość, depresję, opady i gęstość zaludnienia."
  },
  {
    id: "R01_HARD_03",
    section: "Super trudne",
    type: "sort",
    prompt: "Podziel miejsca na skrajnie wilgotne, suche, zimne albo gorące.",
    options: null,
    items: ["Mawsynram", "Aden", "Ojmiakon", "Mitribah"],
    categories: ["wilgotne", "suche", "zimne", "gorące"],
    answer: {
      "wilgotne": ["Mawsynram"],
      "suche": ["Aden"],
      "zimne": ["Ojmiakon"],
      "gorące": ["Mitribah"]
    },
    explanation: "Mawsynram ma rekordowe opady, Aden jest skrajnie suchy, Ojmiakon zimny, a Mitribah gorące."
  },
  {
    id: "R01_HARD_04",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Jaki odsetek ludności Indii stanowią osoby niepiśmienne?",
    options: ["Około 5%", "Około 10%", "Około 15%", "Około 20%", "Około 25%", "Około 50%"],
    answer: 4,
    explanation: "Około 25% mieszkańców Indii to osoby niepiśmienne, dlatego na kartach wyborczych stosuje się symbole partii."
  },
  {
    id: "R01_HARD_05",
    section: "Super trudne",
    type: "true_false",
    prompt: "W Indiach palec wyborcy znakuje się niezmywalnym atramentem, aby zapobiec ponownemu głosowaniu.",
    options: null,
    answer: true,
    explanation: "Atrament na palcu pokazuje, że dana osoba już oddała głos."
  },
  {
    id: "R01_HARD_06",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż pełny łańcuch prowadzący od ruchu płyt do erupcji wulkanu.",
    options: null,
    items: ["magma wypływa na powierzchnię", "skały są wciągane głębiej", "jedna płyta podsuwa się pod drugą", "temperatura skał rośnie", "skały ulegają roztopieniu"],
    answer: ["jedna płyta podsuwa się pod drugą", "skały są wciągane głębiej", "temperatura skał rośnie", "skały ulegają roztopieniu", "magma wypływa na powierzchnię"],
    explanation: "Subdukcja wciąga skały w głąb, gdzie wzrost temperatury prowadzi do ich topienia i powstania magmy."
  },
  {
    id: "R01_HARD_07",
    section: "Super trudne",
    type: "scenario",
    prompt: "Sejsmograf rejestruje drobne wstrząsy, lecz brak innych jednoznacznych sygnałów. Czy można podać dokładny moment silnego trzęsienia?",
    options: ["Nie można go dokładnie przewidzieć", "Tak z dokładnością do minuty", "Tak na podstawie temperatury oceanu", "Tak na podstawie kierunku monsunu"],
    answer: 0,
    explanation: "Rejestrowanie ruchów skorupy nie pozwala dokładnie przewidzieć czasu wystąpienia trzęsienia ziemi."
  },
  {
    id: "R01_HARD_08",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz katastrofę z cechą dotyczącą jej zasięgu lub ostrzegania.",
    options: null,
    left: ["trzęsienie ziemi", "erupcja wulkanu", "tsunami"],
    right: ["brak dokładnej prognozy", "pył może dotrzeć bardzo daleko", "fala może okrążyć Ziemię"],
    answer: {
      "trzęsienie ziemi": "brak dokładnej prognozy",
      "erupcja wulkanu": "pył może dotrzeć bardzo daleko",
      "tsunami": "fala może okrążyć Ziemię"
    },
    explanation: "Trzęsienie jest nieprzewidywalne, a pył wulkaniczny i tsunami mogą mieć bardzo duży zasięg."
  },
  {
    id: "R01_HARD_09",
    section: "Super trudne",
    type: "fill_in",
    prompt: "W tsunami z 2004 roku zginęło ponad __________ tysięcy ludzi, a Tilly Smith pomogła uratować około __________ osób.",
    options: null,
    answer: ["200", "100"],
    altAnswers: [["200", "200 tys.", "ponad 200"], ["100", "około 100"]],
    explanation: "Katastrofa pochłonęła ponad 200 tysięcy ofiar, a rozpoznanie cofającego się morza przez Tilly Smith uratowało około 100 osób."
  },
  {
    id: "R01_HARD_10",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz zależności łączące monsun letni z uprawą ryżu mokrego.",
    options: ["Wilgotny wiatr wieje znad oceanu", "Pojawiają się wysokie opady", "Można zalać pola wodą", "Sadzenie rozpoczyna się na początku monsunu", "Zimą ląd tworzy niż"],
    answer: [0, 1, 2, 3],
    explanation: "Monsun letni dostarcza wilgoci i opadów potrzebnych do zalania pól i rozpoczęcia sadzenia ryżu."
  },
  {
    id: "R01_HARD_11",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz eksportera ryżu z wielkością eksportu w 2022 roku.",
    options: null,
    left: ["Indie", "Tajlandia", "Wietnam", "Pakistan"],
    right: ["18,0 mln ton", "8,2 mln ton", "7,2 mln ton", "4,7 mln ton"],
    answer: {
      "Indie": "18,0 mln ton",
      "Tajlandia": "8,2 mln ton",
      "Wietnam": "7,2 mln ton",
      "Pakistan": "4,7 mln ton"
    },
    explanation: "W 2022 roku Indie były największym eksporterem ryżu, przed Tajlandią, Wietnamem i Pakistanem."
  },
  {
    id: "R01_HARD_12",
    section: "Super trudne",
    type: "sort",
    prompt: "Podziel zachowania na zgodne z kulturą ryżu i sprzeczne z nią.",
    options: null,
    items: ["wspólne utrzymanie kanałów", "pomoc sąsiadom", "podporządkowanie się wspólnym zasadom", "ignorowanie potrzeb sąsiednich pól", "stawianie własnego interesu ponad wspólnotą"],
    categories: ["zgodne z kulturą ryżu", "sprzeczne z kulturą ryżu"],
    answer: {
      "zgodne z kulturą ryżu": ["wspólne utrzymanie kanałów", "pomoc sąsiadom", "podporządkowanie się wspólnym zasadom"],
      "sprzeczne z kulturą ryżu": ["ignorowanie potrzeb sąsiednich pól", "stawianie własnego interesu ponad wspólnotą"]
    },
    explanation: "Kultura ryżu przedkłada współpracę i dobro wspólne nad interes jednostki."
  },
  {
    id: "R01_HARD_13",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż cykl uprawy ryżu od przygotowania młodych roślin do zbioru.",
    options: null,
    items: ["osuszenie pola", "kiełkowanie w pojemnikach", "sadzenie na polu", "wzrost w wodzie", "zmniejszanie poziomu wody"],
    answer: ["kiełkowanie w pojemnikach", "sadzenie na polu", "wzrost w wodzie", "zmniejszanie poziomu wody", "osuszenie pola"],
    explanation: "Sadzonki przygotowuje się osobno, przenosi na zalane pole, a przed zbiorem stopniowo usuwa wodę.",
    image: "r01_tarasy_ryzowe.jpg"
  },
  {
    id: "R01_HARD_14",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Ile zbiorów w roku jest teoretycznie możliwych, jeśli odmiana ryżu dojrzewa około czterech miesięcy i nie ma termicznej zimy?",
    options: ["Jeden", "Dwa", "Trzy", "Cztery", "Pięć", "Sześć"],
    answer: 2,
    explanation: "Dwanaście miesięcy podzielone przez cztery miesiące wzrostu daje możliwość trzech cykli uprawy."
  },
  {
    id: "R01_HARD_15",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Wskaż państwo spoza Azji wśród głównych eksporterów ryżu: Indie, Tajlandia, Wietnam, USA.",
    options: null,
    answer: "USA",
    explanation: "Indie, Tajlandia i Wietnam leżą w Azji, natomiast USA znajduje się w Ameryce Północnej."
  }
];

const KID_PROMPTS = {
  "R01_POL_10": "Podziel informacje na te o najwyższych i najniższych miejscach Azji.",
  "R01_KON_06": "Podziel państwa na bardziej i mniej rozwinięte.",
  "R01_OGN_04": "Ułóż po kolei, jak powstaje rów oceaniczny.",
  "R01_OGN_05": "Połącz każde zjawisko z jego przyczyną.",
  "R01_KAT_05": "Podziel cechy między trzęsienie ziemi, wulkan i tsunami.",
  "R01_KAT_09": "Ułóż po kolei działania od wykrycia zagrożenia do pomocy.",
  "R01_RYZ_03": "Ułóż po kolei, jak powstaje monsun letni.",
  "R01_RYZ_06": "Połącz etap uprawy ryżu z działaniem rolnika.",
  "R01_HARD_06": "Ułóż po kolei drogę od ruchu płyt do erupcji.",
  "R01_HARD_13": "Ułóż po kolei uprawę ryżu od kiełkowania do zbioru."
};

const chapter = {
  id: "r01",
  number: 1,
  title: "Azja, część 1",
  icon: "🌏",
  sectionOrder: [
    "Położenie i rzeźba Azji",
    "Klimat, ludność i gospodarka",
    "Pacyficzny pierścień ognia",
    "Katastrofy i ochrona ludności",
    "Monsun i kultura ryżu"
  ],
  sectionIcons: {
    "Położenie i rzeźba Azji": "🗺️",
    "Klimat, ludność i gospodarka": "🌡️",
    "Pacyficzny pierścień ognia": "🌋",
    "Katastrofy i ochrona ludności": "🚨",
    "Monsun i kultura ryżu": "🌾"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
