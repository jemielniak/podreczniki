// Skróty sekcji (do identyfikatorów ćwiczeń):
//   URB  = Sieć osadnicza i urbanizacja
//   WSK  = Wskaźnik urbanizacji
//   MIA  = Miasta Polski
//   AGL  = Aglomeracje miejskie
//   STR  = Rozwój miast i strefy podmiejskie
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R05_URB_01",
    section: "Sieć osadnicza i urbanizacja",
    type: "single_choice",
    prompt: "Co tworzy sieć osadniczą?",
    options: ["Wszystkie miasta i wsie połączone siecią komunikacyjną", "Wyłącznie miasta wojewódzkie", "Tylko miejscowości leżące przy liniach kolejowych", "Jedynie wsie i osady rolnicze", "Wszystkie drogi i linie kolejowe bez miejscowości", "Wyłącznie aglomeracje miejskie"],
    answer: 0,
    explanation: "Sieć osadnicza obejmuje wszystkie miejscowości - miasta i wsie - powiązane drogami, liniami kolejowymi i innymi elementami sieci komunikacyjnej.",
    image: "r05_siec_osadnicza_miasto_wies.jpg"
  },
  {
    id: "R05_URB_02",
    section: "Sieć osadnicza i urbanizacja",
    type: "true_false",
    prompt: "W Polsce o przyznaniu miejscowości praw miejskich decyduje rząd.",
    options: null,
    answer: true,
    explanation: "Przyznawanie praw miejskich należy w Polsce do zadań rządu; nie istnieją przy tym jednolite kryteria ich nadawania."
  },
  {
    id: "R05_URB_03",
    section: "Sieć osadnicza i urbanizacja",
    type: "multi_select",
    prompt: "Zaznacz cechy typowe dla miasta.",
    options: ["Ma prawa miejskie", "Zwykle ma większą liczbę ludności niż wieś", "Ma zwartą i często wielopiętrową zabudowę", "Większość mieszkańców pracuje w rolnictwie", "Nie ma praw miejskich", "Zatrudnienie koncentruje się głównie w usługach i przemyśle"],
    answer: [0, 1, 2, 5],
    explanation: "Miasto ma prawa miejskie, zazwyczaj więcej mieszkańców, zwartą zabudowę oraz przewagę zatrudnienia w usługach i przemyśle.",
    image: "r05_siec_osadnicza_miasto_wies.jpg"
  },
  {
    id: "R05_URB_04",
    section: "Sieć osadnicza i urbanizacja",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych cech wsi: brak praw miejskich, luźna i niska zabudowa, duże zatrudnienie w rolnictwie, zwarta wielopiętrowa zabudowa.",
    options: null,
    answer: "zwarta wielopiętrowa zabudowa",
    explanation: "Zwarta i często wielopiętrowa zabudowa jest typowa dla miast, natomiast na wsi zabudowa jest zwykle luźna i niska."
  },
  {
    id: "R05_URB_05",
    section: "Sieć osadnicza i urbanizacja",
    type: "riddle",
    prompt: "Proces powstawania nowych miast i rozwijania się już istniejących to...",
    options: null,
    answer: "urbanizacja",
    altAnswers: ["urbanizacja", "proces urbanizacji"],
    explanation: "Urbanizacja oznacza powstawanie nowych miast oraz rozwój tych, które już istnieją.",
    image: "r05_rozwoj_urbanizacji_rzeszow.jpg"
  },
  {
    id: "R05_URB_06",
    section: "Sieć osadnicza i urbanizacja",
    type: "multi_select",
    prompt: "Zaznacz przejawy urbanizacji.",
    options: ["Wzrost liczby ludzi mieszkających w miastach", "Zajmowanie przez miasta coraz większej powierzchni", "Wzrost odsetka osób pracujących poza rolnictwem", "Zmniejszanie się liczby wszystkich miast", "Wzrost odsetka osób pracujących w rolnictwie", "Kurczenie się powierzchni zajętej przez miasta"],
    answer: [0, 1, 2],
    explanation: "Urbanizacja przejawia się wzrostem liczby mieszkańców miast, rozszerzaniem ich obszaru oraz zwiększaniem udziału osób pracujących poza rolnictwem.",
    image: "r05_rozwoj_urbanizacji_rzeszow.jpg"
  },
  {
    id: "R05_URB_07",
    section: "Sieć osadnicza i urbanizacja",
    type: "fill_in",
    prompt: "Wzrost odsetka osób pracujących poza __________ jest jednym z przejawów urbanizacji.",
    options: null,
    answer: ["rolnictwem"],
    altAnswers: [["rolnictwem", "rolnictwa"]],
    explanation: "Rozwój miast wiąże się ze wzrostem zatrudnienia w usługach i przemyśle, a więc poza rolnictwem."
  },
  {
    id: "R05_URB_08",
    section: "Sieć osadnicza i urbanizacja",
    type: "sort",
    prompt: "Przyporządkuj cechy do miasta lub wsi.",
    options: null,
    items: ["prawa miejskie", "zwarta zabudowa", "duże zatrudnienie w rolnictwie", "luźna zabudowa", "przewaga usług i przemysłu", "brak praw miejskich"],
    categories: ["miasto", "wieś"],
    answer: {
      "miasto": ["prawa miejskie", "zwarta zabudowa", "przewaga usług i przemysłu"],
      "wieś": ["duże zatrudnienie w rolnictwie", "luźna zabudowa", "brak praw miejskich"]
    },
    explanation: "Miasto wyróżniają prawa miejskie, zwarta zabudowa oraz pozarolnicze zatrudnienie; wieś ma zwykle luźniejszą zabudowę i większe znaczenie rolnictwa."
  },
  {
    id: "R05_URB_09",
    section: "Sieć osadnicza i urbanizacja",
    type: "scenario",
    prompt: "Wokół istniejącego miasta powstają nowe osiedla, a zabudowane tereny zostają włączone w jego granice. Jaki proces opisuje ta sytuacja?",
    options: ["Urbanizację", "Wyludnianie", "Dezurbanizację", "Emigrację zagraniczną", "Rozwój rolnictwa", "Zalesianie"],
    answer: 0,
    explanation: "Rozrastanie się zabudowy i włączanie nowych terenów do miasta jest przestrzennym przejawem urbanizacji.",
    image: "r05_rozwoj_urbanizacji_rzeszow.jpg"
  },
  {
    id: "R05_URB_10",
    section: "Sieć osadnicza i urbanizacja",
    type: "match",
    prompt: "Połącz element z jego opisem.",
    options: null,
    left: ["Sieć osadnicza", "Urbanizacja", "Miasto", "Wieś"],
    right: ["miasta i wsie powiązane komunikacyjnie", "powstawanie i rozwój miast", "miejscowość z prawami miejskimi", "miejscowość bez praw miejskich"],
    answer: {
      "Sieć osadnicza": "miasta i wsie powiązane komunikacyjnie",
      "Urbanizacja": "powstawanie i rozwój miast",
      "Miasto": "miejscowość z prawami miejskimi",
      "Wieś": "miejscowość bez praw miejskich"
    },
    explanation: "Pojęcia opisują odpowiednio układ miejscowości, proces rozwoju miast oraz dwa podstawowe rodzaje miejscowości."
  },
  {
    id: "R05_URB_11",
    section: "Sieć osadnicza i urbanizacja",
    type: "true_false",
    prompt: "Istnieje jeden zestaw jednolitych kryteriów, po których spełnieniu miejscowość automatycznie otrzymuje w Polsce prawa miejskie.",
    options: null,
    answer: false,
    explanation: "W Polsce nie istnieją jednolite kryteria przyznawania praw miejskich, a decyzję w tej sprawie podejmuje rząd."
  },

  {
    id: "R05_WSK_01",
    section: "Wskaźnik urbanizacji",
    type: "riddle",
    prompt: "Odsetek mieszkańców danego obszaru żyjących w miastach to...",
    options: null,
    answer: "wskaźnik urbanizacji",
    altAnswers: ["wskaźnik urbanizacji", "współczynnik urbanizacji"],
    explanation: "Wskaźnik urbanizacji określa procent mieszkańców państwa, województwa lub innego obszaru, którzy mieszkają w miastach."
  },
  {
    id: "R05_WSK_02",
    section: "Wskaźnik urbanizacji",
    type: "single_choice",
    prompt: "Ile wynosi obecnie wskaźnik urbanizacji w Polsce?",
    options: ["Około 60%", "Około 30%", "Około 45%", "Około 75%", "Około 90%", "Około 100%"],
    answer: 0,
    explanation: "Około 60% mieszkańców Polski żyje obecnie w miastach.",
    image: "r05_wskaznik_urbanizacji_polska.jpg"
  },
  {
    id: "R05_WSK_03",
    section: "Wskaźnik urbanizacji",
    type: "fill_in",
    prompt: "W latach 90. XX wieku wskaźnik urbanizacji w Polsce osiągnął maksymalną wartość około __________%.",
    options: null,
    answer: ["62"],
    altAnswers: [["62", "62%", "około 62%"]],
    explanation: "Najwyższa wartość wskaźnika urbanizacji w Polsce wyniosła około 62% i została osiągnięta w latach 90. XX wieku."
  },
  {
    id: "R05_WSK_04",
    section: "Wskaźnik urbanizacji",
    type: "sequence",
    prompt: "Ułóż etapy zmian wskaźnika urbanizacji w Polsce w kolejności chronologicznej.",
    options: null,
    items: ["powolny spadek do około 60%", "maksimum około 62%", "dynamiczny wzrost po II wojnie światowej"],
    answer: ["dynamiczny wzrost po II wojnie światowej", "maksimum około 62%", "powolny spadek do około 60%"],
    explanation: "Po II wojnie światowej wskaźnik szybko rósł, w latach 90. osiągnął maksimum, a następnie zaczął powoli maleć."
  },
  {
    id: "R05_WSK_05",
    section: "Wskaźnik urbanizacji",
    type: "scenario",
    prompt: "Coraz więcej mieszkańców wybiera dom poza granicami dużego miasta, lecz nadal codziennie dojeżdża do niego do pracy. Jaki skutek może mieć to dla wskaźnika urbanizacji kraju?",
    options: ["Może on powoli maleć", "Musi natychmiast wzrosnąć do 100%", "Nie może się zmienić", "Zawsze spada do zera", "Rośnie wyłącznie w województwie śląskim", "Przestaje być obliczany"],
    answer: 0,
    explanation: "Osiedlanie się w strefach podmiejskich poza granicami miast może przyczyniać się do powolnego spadku wskaźnika urbanizacji w Polsce."
  },
  {
    id: "R05_WSK_06",
    section: "Wskaźnik urbanizacji",
    type: "single_choice",
    prompt: "Które województwo ma najwyższy wskaźnik urbanizacji?",
    options: ["Śląskie", "Podkarpackie", "Lubelskie", "Świętokrzyskie", "Małopolskie", "Podlaskie"],
    answer: 0,
    explanation: "Najwyższy wskaźnik urbanizacji w Polsce ma województwo śląskie.",
    image: "r05_wskaznik_urbanizacji_polska.jpg"
  },
  {
    id: "R05_WSK_07",
    section: "Wskaźnik urbanizacji",
    type: "single_choice",
    prompt: "Które województwo ma najniższy wskaźnik urbanizacji?",
    options: ["Podkarpackie", "Śląskie", "Zachodniopomorskie", "Dolnośląskie", "Pomorskie", "Wielkopolskie"],
    answer: 0,
    explanation: "Najniższy wskaźnik urbanizacji ma województwo podkarpackie.",
    image: "r05_wskaznik_urbanizacji_polska.jpg"
  },
  {
    id: "R05_WSK_08",
    section: "Wskaźnik urbanizacji",
    type: "multi_select",
    prompt: "Zaznacz państwa, w których ponad 90% ludności mieszka w miastach.",
    options: ["Belgia", "Holandia", "Luksemburg", "Mołdawia", "Kosowo", "Polska"],
    answer: [0, 1, 2],
    explanation: "Ponad 90% ludności Belgii, Holandii i Luksemburga mieszka w miastach.",
    image: "r05_wskaznik_urbanizacji_europa.jpg"
  },
  {
    id: "R05_WSK_09",
    section: "Wskaźnik urbanizacji",
    type: "true_false",
    prompt: "W większości państw Europy wskaźnik urbanizacji jest wyższy niż w Polsce.",
    options: null,
    answer: true,
    explanation: "Większość krajów europejskich, szczególnie w zachodniej części kontynentu, ma wyższy wskaźnik urbanizacji niż Polska."
  },
  {
    id: "R05_WSK_10",
    section: "Wskaźnik urbanizacji",
    type: "odd_one_out",
    prompt: "Wskaż państwo, które nie pasuje do pozostałych krajów o bardzo wysokim wskaźniku urbanizacji: Belgia, Holandia, Luksemburg, Mołdawia.",
    options: null,
    answer: "Mołdawia",
    explanation: "W Belgii, Holandii i Luksemburgu ponad 90% ludności mieszka w miastach, natomiast w Mołdawii jest to połowa lub mniej."
  },

  {
    id: "R05_MIA_01",
    section: "Miasta Polski",
    type: "fill_in",
    prompt: "W 2024 roku w Polsce były __________ miasta.",
    options: null,
    answer: ["1033"],
    altAnswers: [["1033", "1 033", "ponad 1000", "ponad tysiąc"]],
    explanation: "W 2024 roku Polska miała 1033 miasta, a każdego roku prawa miejskie otrzymuje kilka lub kilkanaście kolejnych miejscowości."
  },
  {
    id: "R05_MIA_02",
    section: "Miasta Polski",
    type: "single_choice",
    prompt: "W których częściach Polski znajduje się więcej miast?",
    options: ["Na zachodzie i południu", "Na wschodzie i północy", "Wyłącznie na wybrzeżu", "Wyłącznie w centrum", "Tylko w górach", "Tylko na pojezierzach"],
    answer: 0,
    explanation: "Miasta są rozmieszczone nierównomiernie; więcej znajduje się ich na zachodzie i południu niż na wschodzie i północy.",
    image: "r05_rozmieszczenie_miast_polska.jpg"
  },
  {
    id: "R05_MIA_03",
    section: "Miasta Polski",
    type: "single_choice",
    prompt: "W którym województwie znajduje się najwięcej miast?",
    options: ["Wielkopolskim", "Opolskim", "Podlaskim", "Lubelskim", "Świętokrzyskim", "Pomorskim"],
    answer: 0,
    explanation: "Najwięcej miast znajduje się w województwie wielkopolskim, a najmniej w opolskim.",
    image: "r05_rozmieszczenie_miast_polska.jpg"
  },
  {
    id: "R05_MIA_04",
    section: "Miasta Polski",
    type: "true_false",
    prompt: "Najmniej miast spośród województw znajduje się w województwie opolskim.",
    options: null,
    answer: true,
    explanation: "Województwo opolskie ma najmniejszą liczbę miast w Polsce."
  },
  {
    id: "R05_MIA_05",
    section: "Miasta Polski",
    type: "single_choice",
    prompt: "Które miasto jest największe w Polsce pod względem liczby mieszkańców?",
    options: ["Warszawa", "Kraków", "Wrocław", "Łódź", "Poznań", "Gdańsk"],
    answer: 0,
    explanation: "Warszawa liczy prawie 1,9 mln mieszkańców i jest najludniejszym miastem Polski.",
    image: "r05_najwieksze_miasta_polski.jpg"
  },
  {
    id: "R05_MIA_06",
    section: "Miasta Polski",
    type: "sequence",
    prompt: "Ułóż pięć największych miast Polski od największej do najmniejszej liczby mieszkańców.",
    options: null,
    items: ["Poznań", "Kraków", "Łódź", "Warszawa", "Wrocław"],
    answer: ["Warszawa", "Kraków", "Wrocław", "Łódź", "Poznań"],
    explanation: "Kolejność według liczby mieszkańców to Warszawa, Kraków, Wrocław, Łódź i Poznań.",
    image: "r05_najwieksze_miasta_polski.jpg"
  },
  {
    id: "R05_MIA_07",
    section: "Miasta Polski",
    type: "fill_in",
    prompt: "W Polsce jest __________ miast liczących ponad 250 tys. mieszkańców, a żyje w nich prawie __________% obywateli kraju.",
    options: null,
    answer: ["11", "20"],
    altAnswers: [["11", "jedenaście"], ["20", "20%", "około 20%", "prawie 20%"]],
    explanation: "Jedenaście polskich miast ma ponad 250 tys. mieszkańców; razem skupiają one prawie jedną piątą ludności kraju."
  },
  {
    id: "R05_MIA_08",
    section: "Miasta Polski",
    type: "riddle",
    prompt: "Najmniejsze pod względem liczby mieszkańców miasto Polski, liczące 308 osób, to...",
    options: null,
    answer: "Opatowiec",
    altAnswers: ["Opatowiec", "miasto Opatowiec"],
    explanation: "Opatowiec w województwie świętokrzyskim liczył 308 mieszkańców i był najmniejszym miastem w Polsce."
  },
  {
    id: "R05_MIA_09",
    section: "Miasta Polski",
    type: "scenario",
    prompt: "Badacz porównuje miasta wyłącznie według powierzchni administracyjnej. Które miasto zajmie pierwsze miejsce, ponieważ w jego granicach znajduje się część zatoki?",
    options: ["Gdańsk", "Warszawa", "Kraków", "Łódź", "Poznań", "Katowice"],
    answer: 0,
    explanation: "Gdańsk jest największy powierzchniowo, ponieważ do jego granic administracyjnych włączono część Zatoki Gdańskiej.",
    image: "r05_powierzchnia_gdansk_warszawa.jpg"
  },
  {
    id: "R05_MIA_10",
    section: "Miasta Polski",
    type: "multi_select",
    prompt: "Zaznacz miasta należące do największych powierzchniowo, choć nie są wśród najludniejszych w kraju.",
    options: ["Świnoujście", "Zielona Góra", "Warszawa", "Kraków", "Wrocław", "Łódź"],
    answer: [0, 1],
    explanation: "Świnoujście ma w granicach fragmenty wód, a Zielona Góra rozległe tereny zielone, dlatego oba miasta mają dużą powierzchnię administracyjną."
  },
  {
    id: "R05_MIA_11",
    section: "Miasta Polski",
    type: "true_false",
    prompt: "Oficjalne dane o ludności miast mogą być niższe od rzeczywistej liczby mieszkańców, ponieważ część osób jest zameldowana gdzie indziej.",
    options: null,
    answer: true,
    explanation: "Wiele osób faktycznie mieszka w mieście, choć jest zameldowanych w innej miejscowości, dlatego oficjalna liczba może być zaniżona."
  },

  {
    id: "R05_AGL_01",
    section: "Aglomeracje miejskie",
    type: "riddle",
    prompt: "Zespół blisko położonych i powiązanych ze sobą miast to...",
    options: null,
    answer: "aglomeracja",
    altAnswers: ["aglomeracja", "aglomeracja miejska", "zespół miejski"],
    explanation: "Aglomerację tworzą miasta połączone przestrzennie, komunikacyjnie i ludnościowo."
  },
  {
    id: "R05_AGL_02",
    section: "Aglomeracje miejskie",
    type: "multi_select",
    prompt: "Zaznacz rodzaje powiązań łączących miasta w aglomeracji.",
    options: ["Przestrzenne", "Komunikacyjne", "Ludnościowe", "Wyłącznie klimatyczne", "Wyłącznie geologiczne", "Tylko rolnicze"],
    answer: [0, 1, 2],
    explanation: "Miasta aglomeracji graniczą ze sobą, są połączone transportem, a ich mieszkańcy przemieszczają się między nimi do pracy lub szkoły."
  },
  {
    id: "R05_AGL_03",
    section: "Aglomeracje miejskie",
    type: "match",
    prompt: "Połącz typ aglomeracji z opisem.",
    options: null,
    left: ["Aglomeracja monocentryczna", "Aglomeracja policentryczna", "Obszar metropolitalny"],
    right: ["jedno miasto dominuje nad mniejszymi", "kilka miast ma podobne znaczenie", "aglomeracja wraz z silnie powiązanym zurbanizowanym otoczeniem"],
    answer: {
      "Aglomeracja monocentryczna": "jedno miasto dominuje nad mniejszymi",
      "Aglomeracja policentryczna": "kilka miast ma podobne znaczenie",
      "Obszar metropolitalny": "aglomeracja wraz z silnie powiązanym zurbanizowanym otoczeniem"
    },
    explanation: "Układ monocentryczny ma jeden dominujący ośrodek, policentryczny kilka równorzędniejszych, a obszar metropolitalny obejmuje także powiązane otoczenie aglomeracji."
  },
  {
    id: "R05_AGL_04",
    section: "Aglomeracje miejskie",
    type: "single_choice",
    prompt: "Która aglomeracja jest przykładem układu monocentrycznego?",
    options: ["Warszawska", "Górnośląska", "Trójmiejska", "Żadna z wymienionych", "Wyłącznie górnośląska", "Wyłącznie trójmiejska"],
    answer: 0,
    explanation: "Aglomeracja warszawska ma jedno wyraźnie dominujące miasto - Warszawę.",
    image: "r05_aglomeracja_warszawska.jpg"
  },
  {
    id: "R05_AGL_05",
    section: "Aglomeracje miejskie",
    type: "multi_select",
    prompt: "Zaznacz polskie aglomeracje policentryczne.",
    options: ["Górnośląska", "Trójmiejska", "Warszawska", "Łódzka", "Krakowska", "Poznańska"],
    answer: [0, 1],
    explanation: "Do aglomeracji policentrycznych należą górnośląska i trójmiejska; pozostałe wymienione mają układ monocentryczny.",
    image: "r05_aglomeracja_gornoslaska.jpg"
  },
  {
    id: "R05_AGL_06",
    section: "Aglomeracje miejskie",
    type: "true_false",
    prompt: "W aglomeracji górnośląskiej jedno miasto zdecydowanie dominuje wielkością i skupia niemal wszystkie funkcje.",
    options: null,
    answer: false,
    explanation: "Aglomeracja górnośląska jest policentryczna: żadne z miast nie dominuje zdecydowanie nad pozostałymi."
  },
  {
    id: "R05_AGL_07",
    section: "Aglomeracje miejskie",
    type: "scenario",
    prompt: "Zespół miejski ma jeden wielki ośrodek skupiający większość miejsc pracy, szkół, urzędów i instytucji kultury, a wokół niego leżą znacznie mniejsze miejscowości. Jaki to typ aglomeracji?",
    options: ["Monocentryczna", "Policentryczna", "Wiejska", "Rolnicza", "Rozproszona bez centrum", "Przemysłowa bez miast"],
    answer: 0,
    explanation: "Dominacja jednego głównego miasta jest cechą aglomeracji monocentrycznej.",
    image: "r05_aglomeracja_warszawska.jpg"
  },
  {
    id: "R05_AGL_08",
    section: "Aglomeracje miejskie",
    type: "odd_one_out",
    prompt: "Wskaż aglomerację, która nie pasuje do pozostałych aglomeracji monocentrycznych: warszawska, łódzka, krakowska, górnośląska.",
    options: null,
    answer: "górnośląska",
    explanation: "Aglomeracja górnośląska jest policentryczna, natomiast warszawska, łódzka i krakowska są monocentryczne."
  },
  {
    id: "R05_AGL_09",
    section: "Aglomeracje miejskie",
    type: "fill_in",
    prompt: "W aglomeracji warszawskiej największa miejscowość otaczająca stolicę - __________ - jest prawie 30 razy mniejsza od Warszawy.",
    options: null,
    answer: ["Pruszków"],
    altAnswers: [["Pruszków", "Pruszkow"]],
    explanation: "Pruszków jest największą z miejscowości otaczających Warszawę, ale ma niemal trzydzieści razy mniej mieszkańców od stolicy."
  },
  {
    id: "R05_AGL_10",
    section: "Aglomeracje miejskie",
    type: "single_choice",
    prompt: "Które miasto jest największe w aglomeracji górnośląskiej?",
    options: ["Katowice", "Sosnowiec", "Gliwice", "Zabrze", "Bytom", "Chorzów"],
    answer: 0,
    explanation: "Największym miastem aglomeracji górnośląskiej są Katowice, liczące 294 tys. mieszkańców.",
    image: "r05_aglomeracja_gornoslaska.jpg"
  },

  {
    id: "R05_STR_01",
    section: "Rozwój miast i strefy podmiejskie",
    type: "multi_select",
    prompt: "Zaznacz miejsca, w których w przeszłości często zakładano miasta.",
    options: ["Nad rzekami", "Na wzgórzach", "Przy szlakach handlowych", "W pobliżu miejsc wydobycia surowców", "Wyłącznie na pustyniach", "Zawsze z dala od dróg"],
    answer: [0, 1, 2, 3],
    explanation: "O lokalizacji miast decydowały możliwości obrony, transportu, handlu i rozwoju przemysłu surowcowego.",
    image: "r05_historyczne_polozenie_miast.jpg"
  },
  {
    id: "R05_STR_02",
    section: "Rozwój miast i strefy podmiejskie",
    type: "multi_select",
    prompt: "Dlaczego położenie nad rzeką sprzyjało dawnym miastom?",
    options: ["Zapewniało wodę i ryby", "Ułatwiało transport", "Rzeka stanowiła barierę obronną", "Gwarantowało brak powodzi", "Uniemożliwiało handel", "Zawsze zapewniało złoża węgla"],
    answer: [0, 1, 2],
    explanation: "Rzeka dostarczała wody i pożywienia, umożliwiała transport oraz utrudniała przeciwnikom dostęp do miasta."
  },
  {
    id: "R05_STR_03",
    section: "Rozwój miast i strefy podmiejskie",
    type: "match",
    prompt: "Połącz miasto z ważnym czynnikiem jego rozwoju.",
    options: null,
    left: ["Warszawa", "Gdańsk", "Katowice", "Kraków"],
    right: ["funkcja administracyjna stolicy", "port i funkcja transportowo-handlowa", "rozwój przemysłu", "ośrodek nauki i kultury"],
    answer: {
      "Warszawa": "funkcja administracyjna stolicy",
      "Gdańsk": "port i funkcja transportowo-handlowa",
      "Katowice": "rozwój przemysłu",
      "Kraków": "ośrodek nauki i kultury"
    },
    explanation: "Rozwój miast wynikał z różnych funkcji: administracyjnej, portowo-handlowej, przemysłowej oraz naukowo-kulturalnej."
  },
  {
    id: "R05_STR_04",
    section: "Rozwój miast i strefy podmiejskie",
    type: "sort",
    prompt: "Przyporządkuj przykłady do funkcji miasta.",
    options: null,
    items: ["port morski", "siedziba władz", "wyższa uczelnia", "zakład produkcyjny", "zabytki i instytucje kultury", "węzeł kolejowy"],
    categories: ["transportowa", "administracyjna", "naukowo-kulturalna", "przemysłowa"],
    answer: {
      "transportowa": ["port morski", "węzeł kolejowy"],
      "administracyjna": ["siedziba władz"],
      "naukowo-kulturalna": ["wyższa uczelnia", "zabytki i instytucje kultury"],
      "przemysłowa": ["zakład produkcyjny"]
    },
    explanation: "Funkcje miasta wynikają z prowadzonej działalności i obecnych instytucji: transportu, administracji, nauki i kultury oraz przemysłu."
  },
  {
    id: "R05_STR_05",
    section: "Rozwój miast i strefy podmiejskie",
    type: "single_choice",
    prompt: "Jaki jest jeden z głównych kierunków migracji wewnętrznych w Polsce?",
    options: ["Z obszarów oddalonych od dużych miast do ich stref podmiejskich", "Wyłącznie ze stref podmiejskich do odległych wsi", "Tylko z zachodu na wschód kraju", "Wyłącznie z miast nad morze", "Z aglomeracji do niezamieszkanych gór", "Tylko między wsiami sąsiednimi"],
    answer: 0,
    explanation: "Wiele osób przenosi się ze wsi, małych miast, a także dużych miast do obszarów położonych wokół aglomeracji.",
    image: "r05_migracje_wewnetrzne_polska.jpg"
  },
  {
    id: "R05_STR_06",
    section: "Rozwój miast i strefy podmiejskie",
    type: "multi_select",
    prompt: "Zaznacz główne powody migracji w okolice dużych miast.",
    options: ["Poszukiwanie pracy", "Lepsze zarobki", "Edukacja", "Lepszy dostęp do usług i kultury", "Brak połączeń transportowych", "Chęć pracy wyłącznie w rolnictwie"],
    answer: [0, 1, 2, 3],
    explanation: "Ludzie migrują głównie z powodu pracy, zarobków, edukacji oraz lepszego dostępu do usług, kultury i rozrywki."
  },
  {
    id: "R05_STR_07",
    section: "Rozwój miast i strefy podmiejskie",
    type: "scenario",
    prompt: "Z odległej gminy wyjeżdżają głównie młodzi ludzie. Zostaje coraz więcej starszych mieszkańców, brakuje lekarzy i powstaje mało inwestycji. Co opisuje ta sytuacja?",
    options: ["Skutki ujemnego salda migracji", "Rozwój aglomeracji policentrycznej", "Wzrost wskaźnika urbanizacji do 100%", "Przyznanie praw miejskich", "Rozwój portu morskiego", "Powstawanie nowego szlaku handlowego"],
    answer: 0,
    explanation: "Odpływ młodych mieszkańców prowadzi do spadku liczby ludności, starzenia się społeczeństwa, niedoboru pracowników i słabszych inwestycji.",
    image: "r05_migracje_wewnetrzne_polska.jpg"
  },
  {
    id: "R05_STR_08",
    section: "Rozwój miast i strefy podmiejskie",
    type: "riddle",
    prompt: "Obszar wokół dużego miasta, który dawniej był wiejski, lecz nabiera cech miejskich, to...",
    options: null,
    answer: "strefa podmiejska",
    altAnswers: ["strefa podmiejska", "strefa podmiejska miasta", "przedmieścia"],
    explanation: "Strefa podmiejska rozwija się w sąsiedztwie dużego miasta i jest z nim silnie powiązana ludnościowo, ekonomicznie oraz transportowo.",
    image: "r05_strefa_podmiejska.jpg"
  },
  {
    id: "R05_STR_09",
    section: "Rozwój miast i strefy podmiejskie",
    type: "multi_select",
    prompt: "Zaznacz przyczyny atrakcyjności stref podmiejskich jako miejsca zamieszkania.",
    options: ["Niższe ceny nieruchomości", "Więcej wolnych terenów pod zabudowę", "Spokojniejsze życie", "Więcej zieleni i mniej hałasu", "Zawsze krótsza droga pieszo do centrum", "Brak jakichkolwiek dojazdów do miasta"],
    answer: [0, 1, 2, 3],
    explanation: "Strefy podmiejskie przyciągają tańszymi nieruchomościami, dostępną przestrzenią, spokojem i korzystniejszymi warunkami środowiskowymi."
  },
  {
    id: "R05_STR_10",
    section: "Rozwój miast i strefy podmiejskie",
    type: "true_false",
    prompt: "Mieszkańcy stref podmiejskich często dojeżdżają do pobliskiego miasta do pracy, szkoły i na uczelnię.",
    options: null,
    answer: true,
    explanation: "Strefa podmiejska jest silnie związana z miastem, a wielu jej mieszkańców prowadzi miejski styl życia i codziennie do niego dojeżdża."
  },
  {
    id: "R05_STR_11",
    section: "Rozwój miast i strefy podmiejskie",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do typowych zmian krajobrazu strefy podmiejskiej: rozwój zabudowy mieszkaniowej, powstawanie obiektów usługowych, zanik pól uprawnych, wzrost znaczenia rolnictwa.",
    options: null,
    answer: "wzrost znaczenia rolnictwa",
    explanation: "W strefach podmiejskich rolnictwo zwykle zanika, a rozwija się zabudowa mieszkaniowa, usługowa i przemysłowa.",
    image: "r05_strefa_podmiejska.jpg"
  },
  {
    id: "R05_STR_12",
    section: "Rozwój miast i strefy podmiejskie",
    type: "single_choice",
    prompt: "Jaką rolę pełnią obwodnice powstające wokół dużych miast?",
    options: ["Pozwalają ominąć centrum i zmniejszają w nim natężenie ruchu", "Zwiększają zatrudnienie w rolnictwie", "Oddzielają wszystkie strefy podmiejskie od miasta", "Uniemożliwiają dojazd do uczelni", "Zastępują linie kolejowe w całym kraju", "Służą wyłącznie ruchowi pieszemu"],
    answer: 0,
    explanation: "Nowoczesne obwodnice umożliwiają ominięcie centrum, co ogranicza natężenie ruchu w centralnych dzielnicach.",
    image: "r05_transport_strefy_podmiejskiej.jpg"
  },

  {
    id: "R05_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Dlaczego wskaźnik urbanizacji w Polsce szybko rósł po II wojnie światowej?",
    options: ["W miastach powstawały liczne miejsca pracy i napływało do nich wielu ludzi", "Wszystkie wsie automatycznie otrzymały prawa miejskie", "Zakazano budowy domów na wsi", "Ludność masowo przenosiła się z miast do stref podmiejskich", "Zlikwidowano przemysł w miastach", "Zmniejszyła się liczba mieszkań w miastach"],
    answer: 0,
    explanation: "Po wojnie miasta dynamicznie się rozwijały, tworzyły miejsca pracy i przyciągały ludność; budowano też liczne bloki mieszkalne."
  },
  {
    id: "R05_HARD_02",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Najwyższy wskaźnik urbanizacji ma województwo __________, a najniższy województwo __________.",
    options: null,
    answer: ["śląskie", "podkarpackie"],
    altAnswers: [["śląskie", "województwo śląskie", "Slaskie"], ["podkarpackie", "województwo podkarpackie", "Podkarpackie"]],
    explanation: "Skrajne wartości wskaźnika urbanizacji występują w województwie śląskim i podkarpackim.",
    image: "r05_wskaznik_urbanizacji_polska.jpg"
  },
  {
    id: "R05_HARD_03",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż pięć największych miast Polski od najmniejszej do największej liczby mieszkańców.",
    options: null,
    items: ["Warszawa", "Poznań", "Wrocław", "Kraków", "Łódź"],
    answer: ["Poznań", "Łódź", "Wrocław", "Kraków", "Warszawa"],
    explanation: "W przybliżeniu miasta liczą kolejno 550 tys., 650 tys., 680 tys., 800 tys. i 1,9 mln mieszkańców.",
    image: "r05_najwieksze_miasta_polski.jpg"
  },
  {
    id: "R05_HARD_04",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz przyczyny dużej powierzchni administracyjnej Świnoujścia i Zielonej Góry.",
    options: ["W granicach Świnoujścia znajdują się fragmenty Zalewu Szczecińskiego i Zatoki Pomorskiej", "W granicach Zielonej Góry leżą rozległe tereny zielone", "Oba miasta mają ponad milion mieszkańców", "Oba miasta obejmują część Zatoki Gdańskiej", "Zielona Góra jest położona na kilku wyspach", "Świnoujście ma największą liczbę mieszkańców w Polsce"],
    answer: [0, 1],
    explanation: "Powierzchnię Świnoujścia zwiększają wody, a Zielonej Góry rozległe tereny zielone o niewielkiej gęstości zaludnienia."
  },
  {
    id: "R05_HARD_05",
    section: "Super trudne",
    type: "true_false",
    prompt: "Kryterium powierzchni administracyjnej zawsze wiernie pokazuje rzeczywisty rozmiar obszaru miejskiego.",
    options: null,
    answer: false,
    explanation: "Do granic administracyjnych mogą należeć wody lub rozległe tereny zielone, dlatego powierzchnia nie zawsze odzwierciedla faktyczną wielkość zabudowanego miasta.",
    image: "r05_powierzchnia_gdansk_warszawa.jpg"
  },
  {
    id: "R05_HARD_06",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Katowice liczyły około __________ tys. mieszkańców, a Sosnowiec około __________ tys.",
    options: null,
    answer: ["294", "201"],
    altAnswers: [["294", "294 tys.", "294 tysiące"], ["201", "201 tys.", "201 tysięcy"]],
    explanation: "Katowice były największym miastem aglomeracji górnośląskiej z 294 tys. mieszkańców, a Sosnowiec liczył 201 tys."
  },
  {
    id: "R05_HARD_07",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Jak nazywa się aglomeracja policentryczna?",
    options: ["Konurbacja", "Metropolia monocentryczna", "Sieć osadnicza", "Strefa podmiejska", "Gmina miejska", "Obszar rolniczy"],
    answer: 0,
    explanation: "Aglomerację policentryczną, złożoną z kilku miast o podobnym znaczeniu, nazywa się konurbacją."
  },
  {
    id: "R05_HARD_08",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz przyczynę lokalizacji dawnego miasta z korzyścią.",
    options: null,
    left: ["Rzeka", "Wzgórze", "Szlak handlowy", "Złoża surowców"],
    right: ["woda transport i obrona", "utrudniony dostęp przeciwnika", "napływ kupców i inwestycji", "rozwój przemysłu i zatrudnienia"],
    answer: {
      "Rzeka": "woda transport i obrona",
      "Wzgórze": "utrudniony dostęp przeciwnika",
      "Szlak handlowy": "napływ kupców i inwestycji",
      "Złoża surowców": "rozwój przemysłu i zatrudnienia"
    },
    explanation: "Warunki położenia wpływały na bezpieczeństwo, transport, handel oraz możliwości rozwoju gospodarczego miasta.",
    image: "r05_historyczne_polozenie_miast.jpg"
  },
  {
    id: "R05_HARD_09",
    section: "Super trudne",
    type: "scenario",
    prompt: "Młode małżeństwo przenosi się z dużego miasta do tańszego domu pod miastem, lecz nadal pracuje i korzysta z kultury w centrum. Jaką funkcję pełni dla niego strefa podmiejska?",
    options: ["Sypialni", "Odrębnego kraju", "Wyłącznie obszaru rolniczego", "Portu morskiego", "Centrum wydobycia surowców", "Aglomeracji policentrycznej"],
    answer: 0,
    explanation: "Mieszkańcy często mieszkają w strefie podmiejskiej, ale pracują, uczą się i spędzają czas w mieście, dlatego traktują ją jak sypialnię.",
    image: "r05_strefa_podmiejska.jpg"
  },
  {
    id: "R05_HARD_10",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz następstwa napływu ludności do gmin otaczających duże miasta.",
    options: ["Wzrost liczby mieszkańców", "Odmłodzenie społeczeństwa", "Rozwój zabudowy mieszkaniowej", "Rozwój usług i przemysłu", "Całkowity zanik transportu", "Wzrost dominacji rolnictwa"],
    answer: [0, 1, 2, 3],
    explanation: "Napływ często młodych ludzi zwiększa populację i odmładza społeczeństwo, a wraz z nim rozwijają się zabudowa, usługi i przemysł."
  },
  {
    id: "R05_HARD_11",
    section: "Super trudne",
    type: "true_false",
    prompt: "Białystok może mieć ujemne saldo migracji, podczas gdy sąsiadujące z nim gminy mają saldo dodatnie.",
    options: null,
    answer: true,
    explanation: "Taka sytuacja oznacza odpływ części mieszkańców miasta do otaczających je gmin strefy podmiejskiej.",
    image: "r05_migracje_wewnetrzne_polska.jpg"
  },
  {
    id: "R05_HARD_12",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Wskaż element, który nie pasuje do typowych cech transportu w strefie podmiejskiej: połączenia z centrum, obwodnice, wielkie węzły drogowe, brak dojazdów do miasta.",
    options: null,
    answer: "brak dojazdów do miasta",
    explanation: "Strefy podmiejskie są zwykle dobrze powiązane transportowo z miastem, a ich rozwój wspierają obwodnice i duże węzły drogowe.",
    image: "r05_transport_strefy_podmiejskiej.jpg"
  },
  {
    id: "R05_HARD_13",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Które zestawienie miasta i funkcji jest poprawne?",
    options: ["Częstochowa - funkcja religijna", "Zakopane - funkcja portowa", "Gdańsk - wyłącznie rolnicza", "Warszawa - uzdrowiskowa", "Katowice - wyłącznie turystyczna", "Kraków - wyłącznie wydobywcza"],
    answer: 0,
    explanation: "Częstochowa pełni funkcję religijną dzięki sanktuarium na Jasnej Górze."
  },
  {
    id: "R05_HARD_14",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Najstarsza polska uczelnia wyższa powstała w Krakowie w roku __________.",
    options: null,
    answer: ["1364"],
    altAnswers: [["1364", "1364 r.", "w 1364 roku"]],
    explanation: "Krakowski ośrodek naukowy rozwinął się wokół uczelni założonej w 1364 roku, obecnego Uniwersytetu Jagiellońskiego."
  },
  {
    id: "R05_HARD_15",
    section: "Super trudne",
    type: "scenario",
    prompt: "Firma szuka tańszego i rozległego terenu pod halę magazynową, dobrze połączonego drogami z dużym miastem. Gdzie najłatwiej znajdzie takie warunki?",
    options: ["W strefie podmiejskiej", "W ścisłym historycznym centrum", "Na obszarze bez dróg z dala od miast", "Wyłącznie w dzielnicy mieszkaniowej", "Na terenie objętym samą zabudową wielopiętrową", "W miejscowości pozbawionej połączeń komunikacyjnych"],
    answer: 0,
    explanation: "Strefy podmiejskie oferują wolną przestrzeń, niższe ceny nieruchomości i dobre skomunikowanie z miastem, dlatego przyciągają magazyny i zakłady przemysłowe."
  }
];

const KID_PROMPTS = {
  "R05_URB_01": "Co należy do sieci osadniczej?",
  "R05_URB_05": "Jak nazywa się powstawanie i rozwój miast?",
  "R05_WSK_01": "Jak nazywa się procent ludzi mieszkających w miastach?",
  "R05_AGL_01": "Jak nazywa się grupa połączonych ze sobą miast?",
  "R05_STR_08": "Jak nazywa się obszar wokół dużego miasta, który nabiera miejskich cech?"
};

const chapter = {
  id: "r05",
  number: 5,
  title: "Ludność Polski - urbanizacja i miasta",
  icon: "🏙️",
  sectionOrder: [
    "Sieć osadnicza i urbanizacja",
    "Wskaźnik urbanizacji",
    "Miasta Polski",
    "Aglomeracje miejskie",
    "Rozwój miast i strefy podmiejskie"
  ],
  sectionIcons: {
    "Sieć osadnicza i urbanizacja": "🏘️",
    "Wskaźnik urbanizacji": "📊",
    "Miasta Polski": "🏙️",
    "Aglomeracje miejskie": "🌆",
    "Rozwój miast i strefy podmiejskie": "🏡"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
