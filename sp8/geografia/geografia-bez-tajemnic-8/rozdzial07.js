// Skróty sekcji (do identyfikatorów ćwiczeń):
//   AUS  = Środowisko przyrodnicze Australii
//   OCE  = Oceania i Wielka Rafa Koralowa
//   LUD  = Ludność Australii
//   GOS  = Gospodarka Australii
//   ANT  = Antarktyda i badania polarne
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R07_AUS_01",
    section: "Środowisko przyrodnicze Australii",
    type: "single_choice",
    prompt: "Które określenie najlepiej charakteryzuje Australię na tle innych kontynentów?",
    options: ["najmniejszy i najbardziej nizinny", "największy i najwyżej położony", "najzimniejszy i najbardziej górzysty", "najludniejszy i najbardziej wilgotny", "najbardziej zalesiony i najmłodszy", "najbardziej zaludniony i najcieplejszy"],
    answer: 0,
    explanation: "Australia jest najmniejszym i najbardziej nizinnym kontynentem; jej średnia wysokość wynosi około 292 m n.p.m."
  },
  {
    id: "R07_AUS_02",
    section: "Środowisko przyrodnicze Australii",
    type: "true_false",
    prompt: "Niemal przez środek Australii przebiega zwrotnik Koziorożca.",
    options: null,
    answer: true,
    explanation: "Położenie względem zwrotnika Koziorożca sprawia, że znaczna część kontynentu znajduje się w strefie klimatów gorących i suchych."
  },
  {
    id: "R07_AUS_03",
    section: "Środowisko przyrodnicze Australii",
    type: "fill_in",
    prompt: "Najwyższym szczytem Australii jest Góra __________ o wysokości __________ m n.p.m.",
    options: null,
    answer: ["Kościuszki", "2228"],
    altAnswers: [["Kościuszki", "Kosciuszki", "Góra Kościuszki"], ["2228", "2228 m"]],
    explanation: "Góra Kościuszki w Alpach Australijskich, będących częścią Wielkich Gór Wododziałowych, osiąga 2228 m n.p.m."
  },
  {
    id: "R07_AUS_04",
    section: "Środowisko przyrodnicze Australii",
    type: "riddle",
    prompt: "Jest świętą górą Aborygenów i symbolem Australii. Ma nieco ponad 300 m wysokości względnej. Co to za obiekt?",
    options: null,
    answer: "Uluru",
    altAnswers: ["Uluru", "Ayers Rock", "Uluru (Ayers Rock)"],
    explanation: "Uluru, znana również jako Ayers Rock, jest ważnym miejscem kultury Aborygenów.",
    image: "r07_uluru.jpg"
  },
  {
    id: "R07_AUS_05",
    section: "Środowisko przyrodnicze Australii",
    type: "multi_select",
    prompt: "Zaznacz zwierzęta będące przykładami australijskich endemitów.",
    options: ["kangur", "koala", "wombat", "diabeł tasmański", "renifer", "niedźwiedź polarny"],
    answer: [0, 1, 2, 3],
    explanation: "Kangury, koale, wombaty i diabły tasmańskie należą do charakterystycznych zwierząt występujących naturalnie w Australii.",
    image: "r07_australijskie_endemity.jpg"
  },
  {
    id: "R07_AUS_06",
    section: "Środowisko przyrodnicze Australii",
    type: "match",
    prompt: "Połącz obiekt z jego charakterystyką.",
    options: null,
    left: ["Wielki Basen Artezyjski", "Wielkie Góry Wododziałowe", "Alpy Australijskie", "Uluru"],
    right: ["rozległe obniżenie w środkowej części kontynentu", "pasmo ciągnące się wzdłuż wschodniego wybrzeża", "najwyższa część gór Australii", "święta góra Aborygenów"],
    answer: {
      "Wielki Basen Artezyjski": "rozległe obniżenie w środkowej części kontynentu",
      "Wielkie Góry Wododziałowe": "pasmo ciągnące się wzdłuż wschodniego wybrzeża",
      "Alpy Australijskie": "najwyższa część gór Australii",
      "Uluru": "święta góra Aborygenów"
    },
    explanation: "Wnętrze Australii zajmuje rozległe obniżenie, a wschodnią krawędź kontynentu wyznaczają Wielkie Góry Wododziałowe z Alpami Australijskimi."
  },
  {
    id: "R07_AUS_07",
    section: "Środowisko przyrodnicze Australii",
    type: "sort",
    prompt: "Przyporządkuj cechy do odpowiednich części Australii.",
    options: null,
    items: ["wysokie opady", "Wielkie Góry Wododziałowe", "bardzo małe opady", "rozległe pustynie", "ciepło przez cały rok", "chłodniejsze warunki na Tasmanii"],
    categories: ["wschód", "wnętrze", "północ", "południe"],
    answer: {
      "wschód": ["wysokie opady", "Wielkie Góry Wododziałowe"],
      "wnętrze": ["bardzo małe opady", "rozległe pustynie"],
      "północ": ["ciepło przez cały rok"],
      "południe": ["chłodniejsze warunki na Tasmanii"]
    },
    explanation: "Opady są większe na wschodzie i północy, natomiast wnętrze kontynentu jest bardzo suche; wyspy wysunięte na południe są chłodniejsze."
  },
  {
    id: "R07_AUS_08",
    section: "Środowisko przyrodnicze Australii",
    type: "sequence",
    prompt: "Ułóż etapy prowadzące do powstania wyjątkowej fauny Australii.",
    options: null,
    items: ["odrębna ewolucja organizmów", "rozpad Gondwany", "powstanie licznych endemitów", "długotrwała izolacja Australii"],
    answer: ["rozpad Gondwany", "długotrwała izolacja Australii", "odrębna ewolucja organizmów", "powstanie licznych endemitów"],
    explanation: "Po rozpadzie Gondwany Australia została odizolowana, dlatego jej organizmy ewoluowały niezależnie i powstało wiele endemitów."
  },
  {
    id: "R07_AUS_09",
    section: "Środowisko przyrodnicze Australii",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: kangur, koala, wombat, renifer.",
    options: null,
    answer: "renifer",
    explanation: "Kangur, koala i wombat są charakterystycznymi zwierzętami Australii, natomiast renifer jest związany z obszarami północnymi."
  },
  {
    id: "R07_AUS_10",
    section: "Środowisko przyrodnicze Australii",
    type: "scenario",
    prompt: "Turysta chce jeździć na nartach w Alpach Australijskich. W którym okresie ma największą szansę zastać śnieg?",
    options: ["od czerwca do października", "od grudnia do lutego", "wyłącznie w kwietniu", "od stycznia do marca", "przez cały rok", "wyłącznie w listopadzie"],
    answer: 0,
    explanation: "Na Górze Kościuszki i w jej otoczeniu śnieg leży zwykle od czerwca do października."
  },
  {
    id: "R07_AUS_11",
    section: "Środowisko przyrodnicze Australii",
    type: "single_choice",
    prompt: "Który prąd morski zwiększa ilość opadów na wschodnim wybrzeżu Australii?",
    options: ["Prąd Wschodnioaustralijski", "Prąd Peruwiański", "Prąd Benguelski", "Prąd Labradorski", "Prąd Kanaryjski", "Prąd Zachodnioaustralijski"],
    answer: 0,
    explanation: "Ciepły Prąd Wschodnioaustralijski płynie wzdłuż wschodnich wybrzeży i sprzyja większym opadom."
  },

  {
    id: "R07_OCE_01",
    section: "Oceania i Wielka Rafa Koralowa",
    type: "single_choice",
    prompt: "Czym jest Oceania?",
    options: ["regionem wysp i archipelagów położonych na wschód od Australii", "kontynentem leżącym wyłącznie na półkuli północnej", "pasmem górskim we wnętrzu Australii", "morzem między Australią a Azją", "pustynią na zachodzie Australii", "wyłącznie jednym państwem wyspiarskim"],
    answer: 0,
    explanation: "Oceania obejmuje tysiące wysp i archipelagów położonych na Oceanie Spokojnym, głównie na wschód od Australii."
  },
  {
    id: "R07_OCE_02",
    section: "Oceania i Wielka Rafa Koralowa",
    type: "multi_select",
    prompt: "Zaznacz główne części Oceanii.",
    options: ["Mikronezja", "Melanezja", "Polinezja", "Nowa Zelandia", "Skandynawia", "Patagonia"],
    answer: [0, 1, 2, 3],
    explanation: "Oceanię dzieli się na Mikronezję, Melanezję, Polinezję i Nową Zelandię."
  },
  {
    id: "R07_OCE_03",
    section: "Oceania i Wielka Rafa Koralowa",
    type: "true_false",
    prompt: "Wielka Rafa Koralowa ciągnie się wzdłuż północno-wschodnich wybrzeży Australii.",
    options: null,
    answer: true,
    explanation: "Wielka Rafa Koralowa ma około 2300 km długości i leży przy północno-wschodnim wybrzeżu Australii.",
    image: "r07_wielka_rafa_koralowa.jpg"
  },
  {
    id: "R07_OCE_04",
    section: "Oceania i Wielka Rafa Koralowa",
    type: "fill_in",
    prompt: "Rafy koralowe powstają w wodzie o temperaturze powyżej __________ °C i na głębokości do __________ m.",
    options: null,
    answer: ["18", "50"],
    altAnswers: [["18", "18°C", "18 °C"], ["50", "50 m"]],
    explanation: "Koralowce potrzebują ciepłej, przejrzystej wody; optymalna temperatura wynosi 23–29 °C, a głębokość nie przekracza 50 m."
  },
  {
    id: "R07_OCE_05",
    section: "Oceania i Wielka Rafa Koralowa",
    type: "match",
    prompt: "Połącz warunek z jego znaczeniem dla rozwoju rafy koralowej.",
    options: null,
    left: ["ciepła woda", "duża przejrzystość", "stabilne podłoże", "odpowiednie zasolenie"],
    right: ["temperatura powyżej 18 °C", "dostęp światła", "miejsce osiadania koralowców", "32–42 PSU"],
    answer: {
      "ciepła woda": "temperatura powyżej 18 °C",
      "duża przejrzystość": "dostęp światła",
      "stabilne podłoże": "miejsce osiadania koralowców",
      "odpowiednie zasolenie": "32–42 PSU"
    },
    explanation: "Rozwój rafy wymaga jednocześnie ciepłej i przejrzystej wody, zasolenia 32–42 PSU oraz stabilnego podłoża."
  },
  {
    id: "R07_OCE_06",
    section: "Oceania i Wielka Rafa Koralowa",
    type: "sort",
    prompt: "Przyporządkuj czynniki do grup wspierających lub zagrażających rafom koralowym.",
    options: null,
    items: ["temperatura 23–29 °C", "duża przejrzystość wody", "stabilne podłoże", "nadmierny wzrost temperatury", "zanieczyszczenia", "zmiana odczynu wody"],
    categories: ["warunki sprzyjające", "zagrożenia"],
    answer: {
      "warunki sprzyjające": ["temperatura 23–29 °C", "duża przejrzystość wody", "stabilne podłoże"],
      "zagrożenia": ["nadmierny wzrost temperatury", "zanieczyszczenia", "zmiana odczynu wody"]
    },
    explanation: "Rafy najlepiej rozwijają się w stabilnych warunkach, a nagłe zmiany temperatury i chemizmu wody oraz zanieczyszczenia prowadzą do blaknięcia koralowców."
  },
  {
    id: "R07_OCE_07",
    section: "Oceania i Wielka Rafa Koralowa",
    type: "sequence",
    prompt: "Ułóż etapy powstawania atolu.",
    options: null,
    items: ["utworzenie pierścienia wysp i rafy", "rozwój rafy wokół wyspy wulkanicznej", "gromadzenie piasku przez fale i prądy", "powstanie laguny oddzielonej od oceanu"],
    answer: ["rozwój rafy wokół wyspy wulkanicznej", "powstanie laguny oddzielonej od oceanu", "gromadzenie piasku przez fale i prądy", "utworzenie pierścienia wysp i rafy"],
    explanation: "Rafa rozwija się wokół wyspy wulkanicznej, odcina lagunę, a gromadzony piasek współtworzy pierścieniowy atol.",
    image: "r07_atol_oceanii.jpg"
  },
  {
    id: "R07_OCE_08",
    section: "Oceania i Wielka Rafa Koralowa",
    type: "riddle",
    prompt: "Jest wyspą w kształcie pierścienia, utworzoną przez wynurzoną rafę koralową i otaczającą lagunę. Co to jest?",
    options: null,
    answer: "atol",
    altAnswers: ["atol", "wyspa koralowa", "atol koralowy"],
    explanation: "Atol ma zwykle formę pierścienia otaczającego płytką lagunę."
  },
  {
    id: "R07_OCE_09",
    section: "Oceania i Wielka Rafa Koralowa",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do warunków rozwoju rafy koralowej: ciepła woda, duża przejrzystość, stabilne podłoże, głębokość 500 m.",
    options: null,
    answer: "głębokość 500 m",
    explanation: "Rafy koralowe rozwijają się na płytkich wodach, zazwyczaj do głębokości 50 m."
  },
  {
    id: "R07_OCE_10",
    section: "Oceania i Wielka Rafa Koralowa",
    type: "scenario",
    prompt: "Badacze obserwują bielenie koralowców po długim okresie wyjątkowo ciepłej wody. Która przyczyna jest najbardziej prawdopodobna?",
    options: ["nadmierny wzrost temperatury wody", "spadek temperatury do wartości optymalnej", "pojawienie się stabilnego podłoża", "zwiększenie przejrzystości wody", "ustalenie zasolenia na 35 PSU", "zmniejszenie głębokości do 20 m"],
    answer: 0,
    explanation: "Nadmierne ogrzanie wody może prowadzić do blaknięcia koralowców i obumierania rafy."
  },
  {
    id: "R07_OCE_11",
    section: "Oceania i Wielka Rafa Koralowa",
    type: "single_choice",
    prompt: "Z czego zbudowane są rafy koralowe?",
    options: ["ze szkieletów koralowców", "z zastygłej lawy bazaltowej", "z piasku naniesionego przez rzeki", "z lodu morskiego", "z muszli małży słodkowodnych", "z osadów wydmowych"],
    answer: 0,
    explanation: "Rafy to struktury wapienne tworzone ze szkieletów morskich zwierząt zwanych koralowcami."
  },

  {
    id: "R07_LUD_01",
    section: "Ludność Australii",
    type: "single_choice",
    prompt: "Gdzie koncentruje się największa część ludności Australii?",
    options: ["na wschodnim i południowo-wschodnim wybrzeżu", "w centrum Wielkiego Basenu Artezyjskiego", "na pustyniach zachodniej Australii", "wyłącznie na Tasmanii", "na półwyspie Jork", "w Alpach Australijskich"],
    answer: 0,
    explanation: "Największe skupiska ludności znajdują się na wilgotniejszych wybrzeżach wschodnich i południowo-wschodnich."
  },
  {
    id: "R07_LUD_02",
    section: "Ludność Australii",
    type: "true_false",
    prompt: "Ponad 86% mieszkańców Australii żyje w miastach.",
    options: null,
    answer: true,
    explanation: "Australia ma bardzo wysoki poziom urbanizacji, przekraczający 86%."
  },
  {
    id: "R07_LUD_03",
    section: "Ludność Australii",
    type: "fill_in",
    prompt: "Średnia gęstość zaludnienia Australii wynosi około __________ osoby na km², a liczba ludności przekracza __________ milionów.",
    options: null,
    answer: ["3,4", "26"],
    altAnswers: [["3,4", "3.4", "3,4 os./km²"], ["26", "26 mln", "26 milionów"]],
    explanation: "Australia liczy ponad 26 mln mieszkańców, lecz z powodu ogromnej powierzchni średnia gęstość zaludnienia wynosi tylko około 3,4 os./km²."
  },
  {
    id: "R07_LUD_04",
    section: "Ludność Australii",
    type: "match",
    prompt: "Połącz miasto z właściwą informacją.",
    options: null,
    left: ["Sydney", "Melbourne", "Canberra", "Perth"],
    right: ["największe miasto Australii", "drugie wielkie centrum południowego wschodu", "stolica administracyjna", "duże miasto zachodniego wybrzeża"],
    answer: {
      "Sydney": "największe miasto Australii",
      "Melbourne": "drugie wielkie centrum południowego wschodu",
      "Canberra": "stolica administracyjna",
      "Perth": "duże miasto zachodniego wybrzeża"
    },
    explanation: "Sydney i Melbourne tworzą największe skupiska ludności, Canberra pełni funkcję stolicy, a Perth jest głównym dużym miastem na zachodzie.",
    image: "r07_sydney_wybrzeze.jpg"
  },
  {
    id: "R07_LUD_05",
    section: "Ludność Australii",
    type: "multi_select",
    prompt: "Zaznacz warunki, które może spełniać osoba starająca się o osiedlenie w Australii.",
    options: ["posiadać poszukiwany zawód", "mieć doświadczenie zawodowe", "biegle znać język angielski", "dysponować środkami na rozpoczęcie życia", "urodzić się w Sydney", "posiadać kopalnię rudy żelaza"],
    answer: [0, 1, 2, 3],
    explanation: "Polityka migracyjna uwzględnia kwalifikacje zawodowe, doświadczenie, znajomość angielskiego i możliwość samodzielnego rozpoczęcia życia w kraju."
  },
  {
    id: "R07_LUD_06",
    section: "Ludność Australii",
    type: "sort",
    prompt: "Przyporządkuj obszary do poziomu zaludnienia.",
    options: null,
    items: ["Sydney", "Melbourne", "wschodnie wybrzeże", "wnętrze kontynentu", "obszary pustynne", "rozległe tereny suche"],
    categories: ["gęściej zaludnione", "słabo zaludnione"],
    answer: {
      "gęściej zaludnione": ["Sydney", "Melbourne", "wschodnie wybrzeże"],
      "słabo zaludnione": ["wnętrze kontynentu", "obszary pustynne", "rozległe tereny suche"]
    },
    explanation: "Ludność skupia się na wybrzeżach o większych opadach, a suche wnętrze pozostaje niemal niezamieszkane."
  },
  {
    id: "R07_LUD_07",
    section: "Ludność Australii",
    type: "sequence",
    prompt: "Ułóż etapy przemian migracyjnych Australii od najwcześniejszego do współczesnego.",
    options: null,
    items: ["wzrost imigracji z Chin i Indii", "przybycie pierwszych ludzi około 58 tys. lat temu", "dominacja imigrantów europejskich", "powstanie społeczeństwa wielokulturowego"],
    answer: ["przybycie pierwszych ludzi około 58 tys. lat temu", "dominacja imigrantów europejskich", "wzrost imigracji z Chin i Indii", "powstanie społeczeństwa wielokulturowego"],
    explanation: "Przodkowie Aborygenów przybyli najwcześniej, później dominowała migracja europejska, a obecnie duże znaczenie ma napływ ludności z Azji."
  },
  {
    id: "R07_LUD_08",
    section: "Ludność Australii",
    type: "riddle",
    prompt: "Jest rdzenną ludnością Australii, której przodkowie przybyli na kontynent około 58 tysięcy lat temu. O jakiej ludności mowa?",
    options: null,
    answer: "Aborygeni",
    altAnswers: ["Aborygeni", "Aborygeni australijscy", "rdzenni Australijczycy"],
    explanation: "Aborygeni są potomkami pierwszych ludzi, którzy zasiedlili Australię; obecnie jest ich około 220 tysięcy.",
    image: "r07_aborygeni.jpg"
  },
  {
    id: "R07_LUD_09",
    section: "Ludność Australii",
    type: "odd_one_out",
    prompt: "Wskaż miasto, które nie leży we wschodniej ani południowo-wschodniej części Australii: Sydney, Melbourne, Brisbane, Perth.",
    options: null,
    answer: "Perth",
    explanation: "Perth leży na zachodnim wybrzeżu, podczas gdy pozostałe miasta znajdują się we wschodniej lub południowo-wschodniej części kraju."
  },
  {
    id: "R07_LUD_10",
    section: "Ludność Australii",
    type: "scenario",
    prompt: "Rodzina szuka miejsca o większej gęstości zaludnienia, licznych miastach i wyższych opadach. Który region Australii najlepiej spełnia te warunki?",
    options: ["wschodnie wybrzeże", "środkowa pustynia", "północno-zachodnie pustkowia", "Wielki Basen Artezyjski w centrum", "zachodnie wnętrze", "okolice pustyni Simpsona"],
    answer: 0,
    explanation: "Wyższe opady i dogodne warunki życia sprzyjają koncentracji ludności oraz miast na wschodnim wybrzeżu."
  },
  {
    id: "R07_LUD_11",
    section: "Ludność Australii",
    type: "single_choice",
    prompt: "Z którego regionu pochodzi obecnie wielu imigrantów przybywających do Australii?",
    options: ["z Azji", "wyłącznie z Antarktydy", "głównie z Arktyki", "wyłącznie z Oceanii", "tylko z Ameryki Południowej", "głównie z Afryki Północnej"],
    answer: 0,
    explanation: "Współcześnie liczni imigranci przybywają z Azji, zwłaszcza z Chin i Indii."
  },

  {
    id: "R07_GOS_01",
    section: "Gospodarka Australii",
    type: "single_choice",
    prompt: "Który sektor wytwarza największą część PKB Australii?",
    options: ["usługi", "rolnictwo", "rybołówstwo", "leśnictwo", "górnictwo rzemieślnicze", "hodowla reniferów"],
    answer: 0,
    explanation: "Usługi odpowiadają za ponad 65% PKB Australii."
  },
  {
    id: "R07_GOS_02",
    section: "Gospodarka Australii",
    type: "true_false",
    prompt: "Australia jest największym na świecie eksporterem rudy żelaza i węgla kamiennego.",
    options: null,
    answer: true,
    explanation: "Bogate złoża i wydobycie odkrywkowe pozwalają Australii sprzedawać ogromne ilości tych surowców."
  },
  {
    id: "R07_GOS_03",
    section: "Gospodarka Australii",
    type: "fill_in",
    prompt: "W strukturze PKB Australii przemysł stanowi około __________%, a rolnictwo ponad __________%.",
    options: null,
    answer: ["25", "2"],
    altAnswers: [["25", "25%", "25 %"], ["2", "2%", "2 %"]],
    explanation: "Przemysł wytwarza około 25% PKB, natomiast udział rolnictwa wynosi nieco ponad 2%."
  },
  {
    id: "R07_GOS_04",
    section: "Gospodarka Australii",
    type: "match",
    prompt: "Połącz zasób przyrodniczy z formą jego gospodarczego wykorzystania.",
    options: null,
    left: ["rozległe pastwiska", "rudy żelaza", "wyjątkowa fauna", "wody podziemne"],
    right: ["chów owiec i bydła", "przemysł wydobywczy i eksport", "turystyka", "nawadnianie pól"],
    answer: {
      "rozległe pastwiska": "chów owiec i bydła",
      "rudy żelaza": "przemysł wydobywczy i eksport",
      "wyjątkowa fauna": "turystyka",
      "wody podziemne": "nawadnianie pól"
    },
    explanation: "Australia wykorzystuje pastwiska w hodowli, surowce w górnictwie, walory przyrodnicze w turystyce oraz zasoby wodne w rolnictwie."
  },
  {
    id: "R07_GOS_05",
    section: "Gospodarka Australii",
    type: "multi_select",
    prompt: "Zaznacz produkty rolne eksportowane przez Australię.",
    options: ["pszenica", "jęczmień", "rzepak", "owoce", "ryż z tundry", "kawa z Antarktydy"],
    answer: [0, 1, 2, 3],
    explanation: "Nowoczesne metody uprawy i nawadnianie umożliwiają uzyskiwanie wysokich zbiorów pszenicy, jęczmienia, rzepaku i owoców."
  },
  {
    id: "R07_GOS_06",
    section: "Gospodarka Australii",
    type: "sort",
    prompt: "Przyporządkuj przykłady do sektorów gospodarki.",
    options: null,
    items: ["wydobycie rudy żelaza", "wydobycie węgla kamiennego", "chów merynosów", "uprawa pszenicy", "obsługa turystów", "zwiedzanie Wielkiej Rafy Koralowej"],
    categories: ["przemysł", "rolnictwo", "usługi"],
    answer: {
      "przemysł": ["wydobycie rudy żelaza", "wydobycie węgla kamiennego"],
      "rolnictwo": ["chów merynosów", "uprawa pszenicy"],
      "usługi": ["obsługa turystów", "zwiedzanie Wielkiej Rafy Koralowej"]
    },
    explanation: "Górnictwo należy do przemysłu, uprawa i chów do rolnictwa, a turystyka do usług."
  },
  {
    id: "R07_GOS_07",
    section: "Gospodarka Australii",
    type: "sequence",
    prompt: "Ułóż drogę rudy żelaza od złoża do odbiorcy zagranicznego.",
    options: null,
    items: ["transport morski za granicę", "wydobycie w kopalni odkrywkowej", "załadunek w porcie", "przewóz długim pociągiem do wybrzeża"],
    answer: ["wydobycie w kopalni odkrywkowej", "przewóz długim pociągiem do wybrzeża", "załadunek w porcie", "transport morski za granicę"],
    explanation: "Rudę wydobywa się w głębi lądu, przewozi koleją do portów, a następnie eksportuje drogą morską.",
    image: "r07_kopalnia_rudy_zelaza.jpg"
  },
  {
    id: "R07_GOS_08",
    section: "Gospodarka Australii",
    type: "riddle",
    prompt: "Ta rasa owiec słynie z wyjątkowo cenionej wełny i jest specjalnością australijskiej hodowli. Jak się nazywa?",
    options: null,
    answer: "merynos",
    altAnswers: ["merynos", "merynosy", "owca merynos"],
    explanation: "Merynosy są hodowane w Australii ze względu na wysokiej jakości wełnę.",
    image: "r07_hodowla_merynosow.jpg"
  },
  {
    id: "R07_GOS_09",
    section: "Gospodarka Australii",
    type: "odd_one_out",
    prompt: "Wskaż surowiec, który nie należy do głównych australijskich kopalin eksportowych: ruda żelaza, węgiel kamienny, boksyty, drewno tropikalne.",
    options: null,
    answer: "drewno tropikalne",
    explanation: "Australia eksportuje liczne surowce mineralne, w tym rudę żelaza, węgiel kamienny i boksyty; drewno tropikalne nie jest kopaliną."
  },
  {
    id: "R07_GOS_10",
    section: "Gospodarka Australii",
    type: "scenario",
    prompt: "Farmer prowadzi uprawy na suchym obszarze wschodniej Australii położonym nad Wielkim Basenem Artezyjskim. Które rozwiązanie najbardziej pomoże jego gospodarstwu?",
    options: ["nawadnianie wodami podziemnymi", "rezygnacja z dostępu do wody", "zwiększenie zasolenia gleby", "pokrycie pól lodem", "likwidacja wszystkich studni", "ograniczenie dopływu wody z gór"],
    answer: 0,
    explanation: "Wody Wielkiego Basenu Artezyjskiego są wykorzystywane między innymi do nawadniania pól.",
    image: "r07_niecka_artezyjska.jpg"
  },
  {
    id: "R07_GOS_11",
    section: "Gospodarka Australii",
    type: "single_choice",
    prompt: "Jaki udział w wartości australijskiego eksportu dóbr w 2021 roku miała ruda żelaza?",
    options: ["34%", "2%", "5,2%", "25%", "65%", "86%"],
    answer: 0,
    explanation: "Ruda żelaza odpowiadała za 34% wartości australijskiego eksportu dóbr w 2021 roku."
  },

  {
    id: "R07_ANT_01",
    section: "Antarktyda i badania polarne",
    type: "single_choice",
    prompt: "Który ocean otacza Antarktydę?",
    options: ["Ocean Południowy", "Ocean Arktyczny", "Ocean Indyjski wyłącznie", "Ocean Atlantycki wyłącznie", "Morze Śródziemne", "Morze Kaspijskie"],
    answer: 0,
    explanation: "Antarktyda leży wokół bieguna południowego i jest otoczona wodami Oceanu Południowego."
  },
  {
    id: "R07_ANT_02",
    section: "Antarktyda i badania polarne",
    type: "true_false",
    prompt: "Średnia wysokość Antarktydy przekracza 2000 m n.p.m.",
    options: null,
    answer: true,
    explanation: "Po uwzględnieniu powierzchni lądolodu Antarktyda jest najwyżej położonym kontynentem."
  },
  {
    id: "R07_ANT_03",
    section: "Antarktyda i badania polarne",
    type: "fill_in",
    prompt: "Lądolód Antarktydy osiąga miejscami około __________ km grubości, a rekordowa temperatura zmierzona tradycyjnie wyniosła __________ °C.",
    options: null,
    answer: ["4", "-89,2"],
    altAnswers: [["4", "4 km"], ["-89,2", "-89.2", "-89,2°C", "-89,2 °C"]],
    explanation: "Pokrywa lodowa ma miejscami około 4 km grubości, a najniższy tradycyjny pomiar temperatury wyniósł -89,2 °C.",
    image: "r07_ladodol_antarktydy.jpg"
  },
  {
    id: "R07_ANT_04",
    section: "Antarktyda i badania polarne",
    type: "multi_select",
    prompt: "Zaznacz postanowienia Traktatu Antarktycznego.",
    options: ["pokojowe wykorzystanie Antarktydy", "swoboda prowadzenia badań naukowych", "zakaz prób broni jądrowej", "wstrzymanie nowych roszczeń terytorialnych", "obowiązkowy podział kontynentu", "zezwolenie na działania wojenne"],
    answer: [0, 1, 2, 3],
    explanation: "Traktat chroni pokojowy i naukowy charakter Antarktydy, zakazuje prób jądrowych i zamraża roszczenia terytorialne."
  },
  {
    id: "R07_ANT_05",
    section: "Antarktyda i badania polarne",
    type: "match",
    prompt: "Połącz termin z definicją.",
    options: null,
    left: ["lodowiec szelfowy", "cielenie się lodowca", "glacjologia", "ornitologia"],
    right: ["lodowiec wkraczający do oceanu", "odrywanie się fragmentów tworzących góry lodowe", "nauka o lodowcach", "nauka o ptakach"],
    answer: {
      "lodowiec szelfowy": "lodowiec wkraczający do oceanu",
      "cielenie się lodowca": "odrywanie się fragmentów tworzących góry lodowe",
      "glacjologia": "nauka o lodowcach",
      "ornitologia": "nauka o ptakach"
    },
    explanation: "Terminy te opisują formy lodowe, proces ich rozpadu oraz dziedziny badań prowadzonych na obszarach polarnych."
  },
  {
    id: "R07_ANT_06",
    section: "Antarktyda i badania polarne",
    type: "sort",
    prompt: "Przyporządkuj elementy do środowiska naturalnego lub działalności badawczej.",
    options: null,
    items: ["lądolód", "lodowiec szelfowy", "góra lodowa", "laboratorium meteorologiczne", "pomiary geomagnetyczne", "obserwacje pingwinów"],
    categories: ["środowisko naturalne", "badania naukowe"],
    answer: {
      "środowisko naturalne": ["lądolód", "lodowiec szelfowy", "góra lodowa"],
      "badania naukowe": ["laboratorium meteorologiczne", "pomiary geomagnetyczne", "obserwacje pingwinów"]
    },
    explanation: "Formy lodowe należą do środowiska polarnego, natomiast pomiary i obserwacje są elementami pracy naukowców."
  },
  {
    id: "R07_ANT_07",
    section: "Antarktyda i badania polarne",
    type: "sequence",
    prompt: "Ułóż etapy powstawania góry lodowej.",
    options: null,
    items: ["samodzielne dryfowanie góry lodowej", "ruch lądolodu ku wybrzeżu", "wkroczenie lodowca do oceanu", "odłamanie fragmentu lodowca"],
    answer: ["ruch lądolodu ku wybrzeżu", "wkroczenie lodowca do oceanu", "odłamanie fragmentu lodowca", "samodzielne dryfowanie góry lodowej"],
    explanation: "Przemieszczający się lądolód tworzy lodowiec szelfowy, od którego odrywają się dryfujące góry lodowe."
  },
  {
    id: "R07_ANT_08",
    section: "Antarktyda i badania polarne",
    type: "riddle",
    prompt: "Polska stacja na Wyspie Króla Jerzego nosi imię tego badacza polarnego. O kogo chodzi?",
    options: null,
    answer: "Henryk Arctowski",
    altAnswers: ["Henryk Arctowski", "Arctowski", "Henryka Arctowskiego"],
    explanation: "Stacja im. Henryka Arctowskiego leży w archipelagu Szetlandów Południowych, nieco ponad 100 km od głównego lądu Antarktydy.",
    image: "r07_stacja_arctowskiego.jpg"
  },
  {
    id: "R07_ANT_09",
    section: "Antarktyda i badania polarne",
    type: "odd_one_out",
    prompt: "Wskaż dziedzinę, która nie jest związana z badaniami polarnymi: glacjologia, oceanografia, ornitologia, astrologia.",
    options: null,
    answer: "astrologia",
    explanation: "Glacjologia, oceanografia i ornitologia są dyscyplinami naukowymi obecnymi w badaniach polarnych; astrologia nie jest nauką przyrodniczą."
  },
  {
    id: "R07_ANT_10",
    section: "Antarktyda i badania polarne",
    type: "scenario",
    prompt: "Naukowiec wychodzi zimą polarną w głąb Antarktydy. Z jakim zestawem warunków powinien się liczyć?",
    options: ["bardzo niska temperatura i silny wiatr", "upał i deszcz monsunowy", "ciepłe morze i wysoka wilgotność", "łagodna temperatura przez całą dobę", "częste burze tropikalne", "stała temperatura powyżej 20 °C"],
    answer: 0,
    explanation: "W głębi Antarktydy podczas nocy polarnej temperatura często spada do około -70 °C, a warunki dodatkowo pogarsza wiatr."
  },
  {
    id: "R07_ANT_11",
    section: "Antarktyda i badania polarne",
    type: "single_choice",
    prompt: "Co powoduje powstawanie zorzy polarnej?",
    options: ["oddziaływanie cząstek słonecznych z gazami atmosfery", "odbicie światła od raf koralowych", "erupcja podmorskiego wulkanu", "topnienie lodowca szelfowego", "ruch fal oceanicznych", "światło wielkich miast"],
    answer: 0,
    explanation: "Zorza powstaje wskutek oddziaływania cząstek pochodzących ze Słońca z gazami tworzącymi ziemską atmosferę.",
    image: "r07_zorza_polarna.jpg"
  },

  {
    id: "R07_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Kiedy Australia odłączyła się od Antarktydy?",
    options: ["około 30–40 mln lat temu", "około 2 mln lat temu", "około 1500 lat temu", "około 500 mln lat temu", "w XVIII wieku", "około 10 tys. lat temu"],
    answer: 0,
    explanation: "Odłączenie Australii od Antarktydy nastąpiło około 30–40 mln lat temu i rozpoczęło długą izolację kontynentu."
  },
  {
    id: "R07_HARD_02",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Wielka Rafa Koralowa ma około __________ km długości, a optymalna temperatura wody dla raf wynosi __________–__________ °C.",
    options: null,
    answer: ["2300", "23", "29"],
    altAnswers: [["2300", "2300 km"], ["23", "23°C", "23 °C"], ["29", "29°C", "29 °C"]],
    explanation: "Wielka Rafa Koralowa rozciąga się na około 2300 km, a koralowce najlepiej rozwijają się w wodzie o temperaturze 23–29 °C."
  },
  {
    id: "R07_HARD_03",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz informacje dotyczące australijskiego przemysłu wydobywczego.",
    options: ["duża część surowców jest wydobywana odkrywkowo", "rudę z głębi lądu wozi się koleją do portów", "najdłuższy pociąg z rudą mierzył ponad 7 km", "od 2018 roku wykorzystuje się autonomiczne lokomotywy", "wydobycie odkrywkowe nie zmienia środowiska", "ruda jest przewożona wyłącznie samolotami"],
    answer: [0, 1, 2, 3],
    explanation: "Australijskie górnictwo korzysta z kopalń odkrywkowych, bardzo długich składów kolejowych i autonomicznych lokomotyw, lecz wiąże się z degradacją środowiska."
  },
  {
    id: "R07_HARD_04",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz wartość liczbową z właściwą informacją.",
    options: null,
    left: ["7,7 mln km²", "220 tys.", "80 mln", "9,5 mln"],
    right: ["powierzchnia Australii", "liczba Aborygenów", "liczba owiec w 2023 roku", "liczba turystów w 2019 roku"],
    answer: {
      "7,7 mln km²": "powierzchnia Australii",
      "220 tys.": "liczba Aborygenów",
      "80 mln": "liczba owiec w 2023 roku",
      "9,5 mln": "liczba turystów w 2019 roku"
    },
    explanation: "Wartości te pokazują skalę powierzchni kraju, liczebność ludności rdzennej, znaczenie hodowli oraz ruchu turystycznego."
  },
  {
    id: "R07_HARD_05",
    section: "Super trudne",
    type: "sort",
    prompt: "Przyporządkuj fakty do Australii, Oceanii lub Antarktydy.",
    options: null,
    items: ["Wielki Basen Artezyjski", "Góra Kościuszki", "Mikronezja", "liczne wyspy wulkaniczne", "lądolód o grubości do 4 km", "Traktat Antarktyczny"],
    categories: ["Australia", "Oceania", "Antarktyda"],
    answer: {
      "Australia": ["Wielki Basen Artezyjski", "Góra Kościuszki"],
      "Oceania": ["Mikronezja", "liczne wyspy wulkaniczne"],
      "Antarktyda": ["lądolód o grubości do 4 km", "Traktat Antarktyczny"]
    },
    explanation: "Każdy zestaw wskazuje charakterystyczne elementy środowiska lub organizacji danego obszaru."
  },
  {
    id: "R07_HARD_06",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    options: null,
    items: ["wejście w życie Traktatu Antarktycznego", "odłączenie Australii od Antarktydy", "wyprawa Arctowskiego i Dobrowolskiego", "podpisanie Traktatu Antarktycznego"],
    answer: ["odłączenie Australii od Antarktydy", "wyprawa Arctowskiego i Dobrowolskiego", "podpisanie Traktatu Antarktycznego", "wejście w życie Traktatu Antarktycznego"],
    explanation: "Australia odłączyła się 30–40 mln lat temu, wyprawa odbyła się w latach 1897–1899, traktat podpisano w 1959 roku i wprowadzono w życie w 1961 roku."
  },
  {
    id: "R07_HARD_07",
    section: "Super trudne",
    type: "true_false",
    prompt: "Pod antarktycznym lądolodem występują jeziora z ciekłą wodą i żyjącymi w niej bakteriami.",
    options: null,
    answer: true,
    explanation: "Ciepło z wnętrza Ziemi utrzymuje wodę pod lodem w stanie ciekłym, a badania wykazały obecność bakterii."
  },
  {
    id: "R07_HARD_08",
    section: "Super trudne",
    type: "riddle",
    prompt: "Która polska stacja badawcza w Arktyce może jednocześnie pomieścić około 40 osób?",
    options: null,
    answer: "Stacja im. Stanisława Siedleckiego",
    altAnswers: ["Stacja im. Stanisława Siedleckiego", "Polska Stacja Polarna im. Stanisława Siedleckiego", "stacja Stanisława Siedleckiego"],
    explanation: "Stacja im. Stanisława Siedleckiego prowadzi między innymi obserwacje sejsmologiczne, meteorologiczne i geomagnetyczne."
  },
  {
    id: "R07_HARD_09",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Wskaż element, który nie jest postanowieniem Traktatu Antarktycznego: pokojowe wykorzystanie, badania naukowe, zakaz prób jądrowych, swobodne wydobycie surowców.",
    options: null,
    answer: "swobodne wydobycie surowców",
    explanation: "Traktat służy pokojowemu wykorzystaniu, współpracy naukowej i ochronie Antarktydy, a nie swobodnej eksploatacji kopalin."
  },
  {
    id: "R07_HARD_10",
    section: "Super trudne",
    type: "scenario",
    prompt: "Satelita rejestruje zmniejszanie powierzchni lodowca szelfowego i odsłanianie ciemnej wody. Jaki mechanizm może przyspieszyć dalsze ocieplanie?",
    options: ["ciemna powierzchnia pochłania więcej energii słonecznej", "woda odbija całe promieniowanie", "zanika wymiana energii z atmosferą", "temperatura oceanu natychmiast spada", "śnieg pochłania więcej energii niż woda", "powstaje więcej raf koralowych"],
    answer: 0,
    explanation: "Ciemna woda i skały odbijają mniej promieniowania niż śnieg i lód, więc pochłaniają więcej energii i wzmacniają ocieplenie."
  },
  {
    id: "R07_HARD_11",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Jaki odsetek całego zatrudnienia w Australii przypadał na turystykę w 2019 roku?",
    options: ["5,2%", "3,1%", "34%", "25%", "65%", "86%"],
    answer: 0,
    explanation: "W 2019 roku turystyka zatrudniała 666 tys. osób, czyli 5,2% wszystkich pracujących."
  },
  {
    id: "R07_HARD_12",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz badania prowadzone w polskiej stacji polarnej im. Stanisława Siedleckiego.",
    options: ["rejestracja lokalnych trzęsień ziemi", "obserwacja zmian pola magnetycznego", "analiza wód powierzchniowych i opadowych", "obserwacja Lodowca Hansa", "hodowla koralowców tropikalnych", "wydobycie rudy żelaza"],
    answer: [0, 1, 2, 3],
    explanation: "Stacja prowadzi obserwacje sejsmiczne i geomagnetyczne, analizuje wody oraz monitoruje zmiany Lodowca Hansa."
  }
];

const KID_PROMPTS = {
  "R07_AUS_01": "Jaka jest Australia w porównaniu z innymi kontynentami?",
  "R07_OCE_07": "Ułóż po kolei etapy powstawania atolu.",
  "R07_LUD_01": "W której części Australii mieszka najwięcej ludzi?",
  "R07_GOS_04": "Połącz bogactwo przyrody ze sposobem jego wykorzystania.",
  "R07_ANT_05": "Połącz pojęcia polarne z ich znaczeniami."
};

const chapter = {
  id: "r07",
  number: 7,
  title: "Australia i Oceania oraz obszary okołobiegunowe",
  icon: "🦘",
  sectionOrder: [
    "Środowisko przyrodnicze Australii",
    "Oceania i Wielka Rafa Koralowa",
    "Ludność Australii",
    "Gospodarka Australii",
    "Antarktyda i badania polarne"
  ],
  sectionIcons: {
    "Środowisko przyrodnicze Australii": "🦘",
    "Oceania i Wielka Rafa Koralowa": "🪸",
    "Ludność Australii": "🏙️",
    "Gospodarka Australii": "⛏️",
    "Antarktyda i badania polarne": "🐧"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
