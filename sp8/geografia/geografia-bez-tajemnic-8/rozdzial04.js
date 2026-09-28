// Skróty sekcji (do identyfikatorów ćwiczeń):
//   ROL  = Rolnictwo żarowo-odłogowe
//   PLA  = Rolnictwo plantacyjne i nowoczesne
//   KEN  = Turystyka w Kenii
//   MAR  = Nowoczesna gospodarka Maroka
//   RWA  = Nowoczesna gospodarka Rwandy
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R04_ROL_01",
    section: "Rolnictwo żarowo-odłogowe",
    type: "single_choice",
    prompt: "Czym jest odłóg?",
    options: ["Polem czasowo wyłączonym z użytkowania", "Plantacją jednego gatunku", "Pastwiskiem nawadnianym", "Polem przeznaczonym wyłącznie na eksport", "Terenem miejskim", "Szkółką leśną"],
    answer: 0,
    image: "r04_pole_po_wypaleniu.jpg",
    explanation: "Odłóg to pole wyłączone na pewien czas z użytkowania rolniczego, aby gleba mogła się zregenerować, a naturalna roślinność odrodzić."
  },
  {
    id: "R04_ROL_02",
    section: "Rolnictwo żarowo-odłogowe",
    type: "sequence",
    prompt: "Ułóż etapy tradycyjnego cyklu rolnictwa żarowo-odłogowego.",
    options: null,
    items: ["Odłogowanie pola przez kilka lat", "Uprawianie roślin i zbieranie plonów", "Wycięcie i wypalenie roślinności", "Utrata żyzności gleby", "Odrodzenie naturalnej roślinności"],
    answer: ["Wycięcie i wypalenie roślinności", "Uprawianie roślin i zbieranie plonów", "Utrata żyzności gleby", "Odłogowanie pola przez kilka lat", "Odrodzenie naturalnej roślinności"],
    image: "r04_pole_po_wypaleniu.jpg",
    explanation: "Najpierw usuwa się roślinność, potem uprawia pole. Po spadku żyzności pozostawia się je odłogiem, dzięki czemu odradza się naturalna roślinność."
  },
  {
    id: "R04_ROL_03",
    section: "Rolnictwo żarowo-odłogowe",
    type: "true_false",
    prompt: "Rolnictwo żarowo-odłogowe jest typowe dla wilgotnych klimatów strefy międzyzwrotnikowej.",
    options: null,
    answer: true,
    explanation: "System ten jest powszechny w deszczowym lesie równikowym i na wilgotnej odmianie sawanny."
  },
  {
    id: "R04_ROL_04",
    section: "Rolnictwo żarowo-odłogowe",
    type: "multi_select",
    prompt: "Zaznacz przyczyny ograniczenia możliwości prowadzenia tradycyjnej gospodarki żarowo-odłogowej.",
    options: ["Szybki wzrost liczby ludności", "Sprzedaż lasów prywatnym właścicielom", "Wydłużanie okresów odłogowania", "Kurczenie się dostępnego obszaru", "Spadek gęstości zaludnienia", "Powszechna mechanizacja"],
    answer: [0, 1, 3],
    explanation: "Wzrost liczby ludności oraz prywatyzacja dawnych terenów wspólnych zmniejszyły obszar dostępny dla długiego, zrównoważonego cyklu odłogowania."
  },
  {
    id: "R04_ROL_05",
    section: "Rolnictwo żarowo-odłogowe",
    type: "fill_in",
    prompt: "Popiół po spaleniu roślinności wzbogaca glebę w __________.",
    options: null,
    answer: ["składniki odżywcze"],
    altAnswers: [["składniki odżywcze", "substancje odżywcze"]],
    explanation: "Popiół chwilowo dostarcza glebie składników odżywczych, dlatego na świeżo przygotowanym polu można rozpocząć uprawę."
  },
  {
    id: "R04_ROL_06",
    section: "Rolnictwo żarowo-odłogowe",
    type: "odd_one_out",
    prompt: "Co nie jest sposobem zagospodarowania dawnych pól żarowo-odłogowych: zalesienie, agroleśnictwo, uprawa ciągła, elektrownia jądrowa.",
    options: null,
    answer: "elektrownia jądrowa",
    explanation: "Dawne pola mogą zostać zalesione, objęte agroleśnictwem albo przeznaczone pod ciągłe uprawy. Elektrownia jądrowa nie jest sposobem ich rolniczego zagospodarowania."
  },
  {
    id: "R04_ROL_07",
    section: "Rolnictwo żarowo-odłogowe",
    type: "match",
    prompt: "Połącz pojęcie z właściwym opisem.",
    options: null,
    left: ["odłóg", "wypalanie", "agroleśnictwo", "uprawa ciągła"],
    right: ["łączenie upraw z drzewami", "oczyszczanie pola za pomocą ognia", "pole czasowo wyłączone z użytkowania", "gospodarowanie bez okresu odłogowania"],
    answer: {
      "odłóg": "pole czasowo wyłączone z użytkowania",
      "wypalanie": "oczyszczanie pola za pomocą ognia",
      "agroleśnictwo": "łączenie upraw z drzewami",
      "uprawa ciągła": "gospodarowanie bez okresu odłogowania"
    },
    explanation: "Każde pojęcie opisuje inny element przemian rolnictwa: regenerację gleby, przygotowanie pola, współistnienie drzew i upraw albo rezygnację z odłogowania."
  },
  {
    id: "R04_ROL_08",
    section: "Rolnictwo żarowo-odłogowe",
    type: "riddle",
    prompt: "Moje bulwy służą do wyrobu kassawy i tapioki, ale przed jedzeniem trzeba je ugotować lub upiec. Jaką jestem rośliną?",
    options: null,
    answer: "maniok",
    altAnswers: ["maniok", "maniokiem"],
    image: "r04_maniok_bulwy.jpg",
    explanation: "Surowe bulwy manioku zawierają silnie trujące substancje. Po odpowiedniej obróbce służą między innymi do wyrobu kassawy i tapioki."
  },
  {
    id: "R04_ROL_09",
    section: "Rolnictwo żarowo-odłogowe",
    type: "scenario",
    prompt: "Rolnik wraca na wcześniej użytkowane pole już po jednym sezonie. Jaki skutek jest najbardziej prawdopodobny?",
    options: ["Gleba nie zdąży się zregenerować", "Odłóg stanie się dłuższy", "Wzrośnie powierzchnia lasów", "Pole automatycznie stanie się plantacją", "Zniknie potrzeba uprawy", "Gleba zawsze zwiększy żyzność"],
    answer: 0,
    explanation: "Zbyt krótki okres odłogowania nie pozwala glebie i naturalnej roślinności w pełni się odtworzyć, dlatego tradycyjny system traci zrównoważony charakter."
  },
  {
    id: "R04_ROL_10",
    section: "Rolnictwo żarowo-odłogowe",
    type: "sort",
    prompt: "Przyporządkuj rośliny do grup: rośliny jednoroczne i rośliny wieloletnie.",
    options: null,
    items: ["ryż", "kauczukowiec", "kukurydza", "palma oleista", "maniok", "trzcina cukrowa"],
    categories: ["rośliny jednoroczne", "rośliny wieloletnie"],
    answer: {
      "rośliny jednoroczne": ["ryż", "kukurydza", "maniok", "trzcina cukrowa"],
      "rośliny wieloletnie": ["kauczukowiec", "palma oleista"]
    },
    image: "r04_maniok_bulwy.jpg",
    explanation: "Ryż, trzcina cukrowa, kukurydza i maniok należą do grupy roślin jednorocznych, a kauczukowiec i palma oleista do grupy roślin wieloletnich."
  },
  {
    id: "R04_PLA_01",
    section: "Rolnictwo plantacyjne i nowoczesne",
    type: "single_choice",
    prompt: "Która definicja najlepiej opisuje plantację?",
    options: ["Duże gospodarstwo specjalizujące się w uprawie jednego gatunku", "Małe pole czasowo pozostawione odłogiem", "Gospodarstwo produkujące wyłącznie na potrzeby rodziny", "Teren chroniony bez upraw", "Miejski ogród społeczny", "Las odnawiający się samoczynnie"],
    answer: 0,
    image: "r04_plantacja_monokultura.jpg",
    explanation: "Plantacja jest dużym gospodarstwem nastawionym na zysk i specjalizującym się zwykle w jednym gatunku roślin."
  },
  {
    id: "R04_PLA_02",
    section: "Rolnictwo plantacyjne i nowoczesne",
    type: "true_false",
    prompt: "Rolnictwo plantacyjne jest przede wszystkim rolnictwem samozaopatrzeniowym.",
    options: null,
    answer: false,
    explanation: "Plony z plantacji są przeznaczane na sprzedaż, często na eksport, dlatego jest to rolnictwo towarowe."
  },
  {
    id: "R04_PLA_03",
    section: "Rolnictwo plantacyjne i nowoczesne",
    type: "multi_select",
    prompt: "Zaznacz cechy rolnictwa plantacyjnego.",
    options: ["Monokultura", "Produkcja na sprzedaż", "Wysoka bioróżnorodność", "Często niskie płace pracowników", "Wyłącznie wspólna własność gruntów", "Postępująca mechanizacja"],
    answer: [0, 1, 3, 5],
    explanation: "Plantacje są zwykle monokulturami nastawionymi na sprzedaż. Płace bywają niskie, a mechanizacja postępuje zwłaszcza tam, gdzie rosną koszty pracy."
  },
  {
    id: "R04_PLA_04",
    section: "Rolnictwo plantacyjne i nowoczesne",
    type: "fill_in",
    prompt: "Uprawę jednego gatunku roślin na bardzo dużym obszarze nazywa się __________.",
    options: null,
    answer: ["monokulturą"],
    altAnswers: [["monokulturą", "monokultura"]],
    image: "r04_plantacja_monokultura.jpg",
    explanation: "Monokultura upraszcza produkcję, ale ogranicza bioróżnorodność i może zwiększać podatność roślin na choroby oraz szkodniki."
  },
  {
    id: "R04_PLA_05",
    section: "Rolnictwo plantacyjne i nowoczesne",
    type: "match",
    prompt: "Połącz cechę z właściwym systemem gospodarowania.",
    options: null,
    left: ["plony na potrzeby mieszkańców", "plony często eksportowane", "grunty dawniej wspólne", "pracownicy otrzymują wynagrodzenie"],
    right: ["rolnictwo plantacyjne", "rolnictwo żarowo-odłogowe", "rolnictwo żarowo-odłogowe - własność", "rolnictwo plantacyjne - praca najemna"],
    answer: {
      "plony na potrzeby mieszkańców": "rolnictwo żarowo-odłogowe",
      "plony często eksportowane": "rolnictwo plantacyjne",
      "grunty dawniej wspólne": "rolnictwo żarowo-odłogowe - własność",
      "pracownicy otrzymują wynagrodzenie": "rolnictwo plantacyjne - praca najemna"
    },
    explanation: "W gospodarce żarowo-odłogowej plony służą głównie społeczności, a grunty były tradycyjnie wspólne. Plantacje sprzedają plony i zatrudniają pracowników."
  },
  {
    id: "R04_PLA_06",
    section: "Rolnictwo plantacyjne i nowoczesne",
    type: "scenario",
    prompt: "Duże gospodarstwo uprawia palmę oleistą, a całe zbiory sprzedaje za granicę. Jaki typ działalności prowadzi?",
    options: ["Rolnictwo plantacyjne i towarowe", "Rolnictwo żarowo-odłogowe", "Rolnictwo samozaopatrzeniowe", "Agroleśnictwo bez sprzedaży", "Odłogowanie", "Zalesianie ochronne"],
    answer: 0,
    explanation: "Duża skala, specjalizacja w jednej roślinie i przeznaczenie zbiorów na eksport wskazują na rolnictwo plantacyjne i towarowe."
  },
  {
    id: "R04_PLA_07",
    section: "Rolnictwo plantacyjne i nowoczesne",
    type: "odd_one_out",
    prompt: "Co nie pasuje do działalności plantacji: sprzedaż, eksport, zysk, własna konsumpcja.",
    options: null,
    answer: "własna konsumpcja",
    explanation: "Plantacja działa dla zysku, a jej plony trafiają na sprzedaż, często za granicę. Własna konsumpcja jest cechą rolnictwa samozaopatrzeniowego."
  },
  {
    id: "R04_PLA_08",
    section: "Rolnictwo plantacyjne i nowoczesne",
    type: "sequence",
    prompt: "Ułóż zjawiska związane z przemianami pracy na plantacjach.",
    options: null,
    items: ["Postępująca mechanizacja prac", "Wzrost kosztów pracy w lepiej rozwiniętych krajach", "Kolonialne wykorzystywanie taniej siły roboczej", "Współczesne wypłacanie wynagrodzeń"],
    answer: ["Kolonialne wykorzystywanie taniej siły roboczej", "Współczesne wypłacanie wynagrodzeń", "Wzrost kosztów pracy w lepiej rozwiniętych krajach", "Postępująca mechanizacja prac"],
    explanation: "Plantacje wywodzą się z czasów kolonialnych. Dziś pracownicy otrzymują płace, a wraz ze wzrostem kosztów pracy coraz więcej zadań przejmują maszyny."
  },
  {
    id: "R04_PLA_09",
    section: "Rolnictwo plantacyjne i nowoczesne",
    type: "sort",
    prompt: "Przyporządkuj cele nowoczesnego rolnictwa w Afryce do obszarów korzyści.",
    options: null,
    items: ["bezpieczne warunki pracy", "ochrona zasobów wodnych", "finansowanie edukacji", "poprawa sytuacji kobiet", "zachowanie bioróżnorodności", "rozwój przetwórstwa rolno-spożywczego"],
    categories: ["lokalne społeczności", "środowisko", "gospodarka państwa"],
    answer: {
      "lokalne społeczności": ["bezpieczne warunki pracy", "poprawa sytuacji kobiet"],
      "środowisko": ["ochrona zasobów wodnych", "zachowanie bioróżnorodności"],
      "gospodarka państwa": ["finansowanie edukacji", "rozwój przetwórstwa rolno-spożywczego"]
    },
    explanation: "Nowoczesne rolnictwo powinno jednocześnie poprawiać warunki życia, chronić zasoby przyrody i wzmacniać gospodarkę."
  },
  {
    id: "R04_PLA_10",
    section: "Rolnictwo plantacyjne i nowoczesne",
    type: "riddle",
    prompt: "Znak na produkcie potwierdza, że powstał on z poszanowaniem zasad sprawiedliwego handlu. Jak brzmi nazwa tego systemu?",
    options: null,
    answer: "Fairtrade",
    altAnswers: ["Fairtrade", "fair trade", "sprawiedliwy handel"],
    explanation: "Fairtrade ma wspierać sprawiedliwe warunki handlu oraz rozwiązania zgodne z zasadami zrównoważonego rozwoju."
  },
  {
    id: "R04_KEN_01",
    section: "Turystyka w Kenii",
    type: "single_choice",
    prompt: "Z którego parku narodowego w Kenii można podziwiać Kilimandżaro?",
    options: ["Amboseli", "Nakuru", "Masai Mara", "Tsavo", "Serengeti", "Krugera"],
    answer: 0,
    image: "r04_slonie_i_kilimandzaro.jpg",
    explanation: "Widok na Kilimandżaro jest walorem Parku Narodowego Amboseli, choć sama góra leży po drugiej stronie granicy, w Tanzanii."
  },
  {
    id: "R04_KEN_02",
    section: "Turystyka w Kenii",
    type: "match",
    prompt: "Połącz miejsce w Kenii z jego atrakcją.",
    options: null,
    left: ["Park Narodowy Amboseli", "Park Narodowy Masai Mara", "Park Narodowy Nakuru", "Mombasa"],
    right: ["Fort Jesus", "widok na Kilimandżaro", "wielka migracja przez rzekę Marę", "flamingi i pelikany"],
    answer: {
      "Park Narodowy Amboseli": "widok na Kilimandżaro",
      "Park Narodowy Masai Mara": "wielka migracja przez rzekę Marę",
      "Park Narodowy Nakuru": "flamingi i pelikany",
      "Mombasa": "Fort Jesus"
    },
    image: "r04_migracja_przez_mare.jpg",
    explanation: "Każde z tych miejsc ma charakterystyczny walor: krajobraz Kilimandżaro, migrację zwierząt, bogactwo ptaków albo zabytek kolonialny."
  },
  {
    id: "R04_KEN_03",
    section: "Turystyka w Kenii",
    type: "multi_select",
    prompt: "Zaznacz wszystkie zwierzęta należące do Wielkiej Piątki Afryki.",
    options: ["bawół", "lampart", "nosorożec", "lew", "słoń", "żyrafa"],
    answer: [0, 1, 2, 3, 4],
    explanation: "Wielką Piątkę tworzą bawół, lampart, nosorożec, lew i słoń. Dawniej były trofeami myśliwych, a dziś fotografują je turyści."
  },
  {
    id: "R04_KEN_04",
    section: "Turystyka w Kenii",
    type: "true_false",
    prompt: "Kilimandżaro znajduje się na terytorium Kenii.",
    options: null,
    answer: false,
    image: "r04_slonie_i_kilimandzaro.jpg",
    explanation: "Kilimandżaro można oglądać z kenijskiego Parku Narodowego Amboseli, ale góra leży w Tanzanii."
  },
  {
    id: "R04_KEN_05",
    section: "Turystyka w Kenii",
    type: "fill_in",
    prompt: "Turystyka zagraniczna wytwarza około __________ PKB Kenii, a od branży turystycznej zależy około __________ miejsc pracy.",
    options: null,
    answer: ["11%", "12%"],
    altAnswers: [["11%", "11 %"], ["12%", "12 %"]],
    explanation: "Turystyka ma duże znaczenie dla kenijskiej gospodarki: odpowiada za około 11% PKB i około 12% miejsc pracy."
  },
  {
    id: "R04_KEN_06",
    section: "Turystyka w Kenii",
    type: "sequence",
    prompt: "Ułóż główne przystanki podróży po Kenii we właściwej kolejności.",
    options: null,
    items: ["Park Narodowy Masai Mara", "Mombasa - przylot", "Park Narodowy Nakuru", "Nairobi", "Park Narodowy Amboseli", "Mombasa - powrót"],
    answer: ["Mombasa - przylot", "Park Narodowy Amboseli", "Nairobi", "Park Narodowy Masai Mara", "Park Narodowy Nakuru", "Mombasa - powrót"],
    explanation: "Trasa prowadziła od Mombasy przez Amboseli, Nairobi, Masai Mara i Nakuru, a następnie z powrotem do Mombasy."
  },
  {
    id: "R04_KEN_07",
    section: "Turystyka w Kenii",
    type: "sort",
    prompt: "Przyporządkuj walory turystyczne Kenii do właściwej grupy.",
    options: null,
    items: ["stada dzikich zwierząt", "taniec Masajów", "flamingi w Nakuru", "Fort Jesus", "piaszczyste plaże", "tradycyjne stroje"],
    categories: ["walory przyrodnicze", "walory kulturowe"],
    answer: {
      "walory przyrodnicze": ["stada dzikich zwierząt", "flamingi w Nakuru", "piaszczyste plaże"],
      "walory kulturowe": ["taniec Masajów", "Fort Jesus", "tradycyjne stroje"]
    },
    image: "r04_masajowie_taniec.jpg",
    explanation: "Przyroda obejmuje zwierzęta i krajobrazy, natomiast kultura przejawia się w tańcu, strojach i zabytkowym budownictwie."
  },
  {
    id: "R04_KEN_08",
    section: "Turystyka w Kenii",
    type: "scenario",
    prompt: "Turysta nocuje w hotelu miejscowego przedsiębiorcy, je lokalne produkty i korzysta z usług kenijskiego przewodnika. Jaki model turystyki wspiera?",
    options: ["Turystykę zrównoważoną", "Turystykę pozbawioną kontaktu z mieszkańcami", "Eksploatację zasobów bez ograniczeń", "Wyłącznie turystykę biznesową", "Turystykę kolonialną", "Masową turystykę bez planowania"],
    answer: 0,
    explanation: "Korzystanie z lokalnych usług i produktów sprawia, że większa część dochodów pozostaje w kraju przyjmującym i służy jego mieszkańcom."
  },
  {
    id: "R04_KEN_09",
    section: "Turystyka w Kenii",
    type: "odd_one_out",
    prompt: "Które zwierzę nie należy do Wielkiej Piątki Afryki: bawół, lampart, żyrafa, nosorożec, słoń.",
    options: null,
    answer: "żyrafa",
    explanation: "Wielką Piątkę tworzą bawół, lampart, nosorożec, lew i słoń. Żyrafa do niej nie należy."
  },
  {
    id: "R04_KEN_10",
    section: "Turystyka w Kenii",
    type: "riddle",
    prompt: "Jestem oficjalną walutą Kenii. Na moich banknotach można zobaczyć zwierzęta Wielkiej Piątki. Jak się nazywam?",
    options: null,
    answer: "szyling kenijski",
    altAnswers: ["szyling kenijski", "szyling", "szylingi kenijskie"],
    explanation: "Oficjalną walutą Kenii jest szyling kenijski, a banknoty przedstawiają między innymi zwierzęta Wielkiej Piątki."
  },
  {
    id: "R04_MAR_01",
    section: "Nowoczesna gospodarka Maroka",
    type: "single_choice",
    prompt: "Który atut położenia Maroka szczególnie sprzyja rozwojowi nowoczesnej gospodarki?",
    options: ["Bliskość morskich szlaków transportowych", "Położenie w centrum Sahary", "Brak dostępu do morza", "Oddalenie od Europy", "Brak portów", "Izolacja od handlu światowego"],
    answer: 0,
    explanation: "Maroko wykorzystuje bliskość ważnych morskich szlaków transportowych oraz historyczne powiązania z Francją i innymi krajami europejskimi."
  },
  {
    id: "R04_MAR_02",
    section: "Nowoczesna gospodarka Maroka",
    type: "multi_select",
    prompt: "Zaznacz tradycyjne gałęzie przemysłu, które miały duże znaczenie w Maroku.",
    options: ["produkcja ubrań", "przemysł spożywczy", "przemysł wydobywczy", "produkcja statków kosmicznych", "wyłącznie sztuczna inteligencja", "wydobycie fosforytów"],
    answer: [0, 1, 2, 5],
    explanation: "Maroko rozwijało produkcję ubrań i żywności oraz przemysł wydobywczy oparty między innymi na fosforytach i gazie ziemnym."
  },
  {
    id: "R04_MAR_03",
    section: "Nowoczesna gospodarka Maroka",
    type: "fill_in",
    prompt: "Maroko ma duże zasoby __________, które wykorzystuje się do produkcji nawozów sztucznych.",
    options: null,
    answer: ["fosforytów"],
    altAnswers: [["fosforytów", "fosforyty"]],
    explanation: "Fosforyty są ważnym surowcem marokańskiego przemysłu wydobywczego i służą do produkcji nawozów sztucznych."
  },
  {
    id: "R04_MAR_04",
    section: "Nowoczesna gospodarka Maroka",
    type: "match",
    prompt: "Połącz gałąź marokańskiej gospodarki z właściwą informacją.",
    options: null,
    left: ["przemysł samochodowy", "przemysł lotniczy", "przemysł farmaceutyczny", "transport kolejowy"],
    right: ["pociąg Al Boraq", "zdolność produkcji 700 tysięcy pojazdów rocznie", "około 140 firm", "około 400 milionów klientów"],
    answer: {
      "przemysł samochodowy": "zdolność produkcji 700 tysięcy pojazdów rocznie",
      "przemysł lotniczy": "około 140 firm",
      "przemysł farmaceutyczny": "około 400 milionów klientów",
      "transport kolejowy": "pociąg Al Boraq"
    },
    explanation: "Maroko łączy rozwój nowoczesnego przemysłu z inwestycjami w transport, który ułatwia przepływ ludzi i towarów."
  },
  {
    id: "R04_MAR_05",
    section: "Nowoczesna gospodarka Maroka",
    type: "true_false",
    prompt: "Marokański przemysł samochodowy ma zdolność produkcji około 700 tysięcy pojazdów rocznie.",
    options: null,
    answer: true,
    image: "r04_fabryka_samochodow_maroko.jpg",
    explanation: "Zdolności produkcyjne marokańskiego przemysłu samochodowego sięgają około 700 tysięcy pojazdów rocznie, a sektor zatrudnia około 220 tysięcy osób."
  },
  {
    id: "R04_MAR_06",
    section: "Nowoczesna gospodarka Maroka",
    type: "scenario",
    prompt: "Podróżny jedzie z Casablanki do Tangeru ponad 300 kilometrów w 2 godziny i 10 minut. Z jakiej kolei korzysta?",
    options: ["Al Boraq", "Orient Express", "TGV Atlantique", "Blue Train", "Shinkansen", "Transsaharyjska"],
    answer: 0,
    image: "r04_al_boraq.jpg",
    explanation: "Al Boraq jest pierwszą szybką koleją w Afryce. Na trasie Casablanca-Tanger pociąg rozwija miejscami prędkość 320 km/h."
  },
  {
    id: "R04_MAR_07",
    section: "Nowoczesna gospodarka Maroka",
    type: "sequence",
    prompt: "Ułóż etapy wytwarzania energii w elektrowni Noor Ouarzazate.",
    options: null,
    items: ["Generator wytwarza prąd", "Zwierciadła skupiają promieniowanie słoneczne", "Para napędza generator", "Podgrzana ciecz przekazuje ciepło", "Powstaje para"],
    answer: ["Zwierciadła skupiają promieniowanie słoneczne", "Podgrzana ciecz przekazuje ciepło", "Powstaje para", "Para napędza generator", "Generator wytwarza prąd"],
    image: "r04_noor_ouarzazate.jpg",
    explanation: "Zwierciadła skupiają energię słoneczną i ogrzewają ciecz. Jej ciepło służy do wytworzenia pary napędzającej generatory prądu."
  },
  {
    id: "R04_MAR_08",
    section: "Nowoczesna gospodarka Maroka",
    type: "sort",
    prompt: "Przyporządkuj elementy infrastruktury i gospodarki Maroka do właściwych grup.",
    options: null,
    items: ["Al Boraq", "port Tanger", "fabryki samochodów", "klaster lotniczy", "terminal kontenerowy", "elektrownia Noor Ouarzazate"],
    categories: ["transport", "przemysł", "energetyka"],
    answer: {
      "transport": ["Al Boraq", "port Tanger", "terminal kontenerowy"],
      "przemysł": ["fabryki samochodów", "klaster lotniczy"],
      "energetyka": ["elektrownia Noor Ouarzazate"]
    },
    explanation: "Nowoczesna gospodarka Maroka opiera się na połączeniu przemysłu, energetyki odnawialnej i sprawnej infrastruktury transportowej."
  },
  {
    id: "R04_MAR_09",
    section: "Nowoczesna gospodarka Maroka",
    type: "riddle",
    prompt: "Jestem zespołem zakładów przemysłowych położonych blisko siebie i współpracujących. Jak się nazywam?",
    options: null,
    answer: "klaster przemysłowy",
    altAnswers: ["klaster przemysłowy", "klaster"],
    explanation: "Klaster przemysłowy skupia powiązane zakłady na jednym obszarze. W Maroku powstał między innymi klaster przemysłu lotniczego."
  },
  {
    id: "R04_MAR_10",
    section: "Nowoczesna gospodarka Maroka",
    type: "odd_one_out",
    prompt: "Która firma nie pasuje do pozostałych pod względem związku z branżą samochodową w Maroku: Renault, Stellantis, Peugeot, Boeing.",
    options: null,
    answer: "Boeing",
    image: "r04_fabryka_samochodow_maroko.jpg",
    explanation: "Boeing działa w branży lotniczej. Renault i Stellantis, do którego należy marka Peugeot, są związane z przemysłem samochodowym."
  },
  {
    id: "R04_RWA_01",
    section: "Nowoczesna gospodarka Rwandy",
    type: "fill_in",
    prompt: "W 2000 roku na 1000 urodzonych dzieci pierwszych urodzin nie dożywało __________, a średnia długość życia wynosiła __________ lat.",
    options: null,
    answer: ["111", "47"],
    altAnswers: [["111", "111 dzieci"], ["47", "47 lat"]],
    explanation: "Wskaźniki z 2000 roku pokazują, jak trudna była sytuacja Rwandy na przełomie XX i XXI wieku."
  },
  {
    id: "R04_RWA_02",
    section: "Nowoczesna gospodarka Rwandy",
    type: "true_false",
    prompt: "Współcześnie śmiertelność niemowląt w Rwandzie jest około pięć razy niższa niż w 2000 roku.",
    options: null,
    answer: true,
    explanation: "Śmiertelność niemowląt spadła pięciokrotnie, a średnia długość życia wzrosła z 47 do około 70 lat."
  },
  {
    id: "R04_RWA_03",
    section: "Nowoczesna gospodarka Rwandy",
    type: "single_choice",
    prompt: "Co uruchomiono w Kigali w 2019 roku?",
    options: ["Pierwszą w Afryce fabrykę smartfonów produkującą je od podstaw", "Największą kopalnię fosforytów", "Pierwszą plantację kakao", "Port oceaniczny", "Fabrykę samolotów pasażerskich", "Szybką kolej Al Boraq"],
    answer: 0,
    image: "r04_fabryka_smartfonow_kigali.jpg",
    explanation: "W Kigali otwarto pierwszy w Afryce zakład produkujący nowoczesne telefony od podstaw, a nie z importowanych podzespołów."
  },
  {
    id: "R04_RWA_04",
    section: "Nowoczesna gospodarka Rwandy",
    type: "multi_select",
    prompt: "Zaznacz cele systemu rozwijanego przez Viebeg Technologies.",
    options: ["Monitorowanie zaopatrzenia medycznego", "Szybsza dystrybucja leków", "Tańsze dostarczanie sprzętu medycznego", "Zwiększanie wydobycia fosforytów", "Sterowanie ruchem statków", "Wykorzystanie sztucznej inteligencji"],
    answer: [0, 1, 2, 5],
    explanation: "Firma wykorzystuje sztuczną inteligencję i centralny monitoring, aby leki i sprzęt docierały szybciej i taniej tam, gdzie są najbardziej potrzebne."
  },
  {
    id: "R04_RWA_05",
    section: "Nowoczesna gospodarka Rwandy",
    type: "match",
    prompt: "Połącz rok z wydarzeniem dotyczącym Rwandy.",
    options: null,
    left: ["1994", "2000", "2018", "2019"],
    right: ["kobiety zdobyły 61% mandatów parlamentarnych", "otwarcie fabryki smartfonów w Kigali", "ludobójstwo w wyniku waśni plemiennych", "średnia długość życia wynosiła 47 lat"],
    answer: {
      "1994": "ludobójstwo w wyniku waśni plemiennych",
      "2000": "średnia długość życia wynosiła 47 lat",
      "2018": "kobiety zdobyły 61% mandatów parlamentarnych",
      "2019": "otwarcie fabryki smartfonów w Kigali"
    },
    explanation: "Daty pokazują drogę Rwandy od katastrofy w 1994 roku i bardzo słabych wskaźników społecznych do rozwoju technologii i dużego udziału kobiet w parlamencie."
  },
  {
    id: "R04_RWA_06",
    section: "Nowoczesna gospodarka Rwandy",
    type: "scenario",
    prompt: "Szpital pilnie potrzebuje leków, a zasoby w kraju są ograniczone. Które rozwiązanie ma pomóc skierować dostawy tam, gdzie są najbardziej potrzebne?",
    options: ["Centralny system monitorujący zaopatrzenie medyczne", "Monokultura plantacyjna", "Terminal kontenerowy w Tangerze", "Skrócenie odłogowania", "Rozbudowa hoteli all inclusive", "Eksport fosforytów"],
    answer: 0,
    explanation: "Centralny system rozwijany z użyciem sztucznej inteligencji ma usprawnić i obniżyć koszt dystrybucji leków oraz sprzętu medycznego."
  },
  {
    id: "R04_RWA_07",
    section: "Nowoczesna gospodarka Rwandy",
    type: "odd_one_out",
    prompt: "Co nie pasuje do przykładów rozwoju nowoczesnej gospodarki Rwandy: fabryka smartfonów, sztuczna inteligencja w dystrybucji leków, uniwersytet w Kigali, wydobycie fosforytów.",
    options: null,
    answer: "wydobycie fosforytów",
    explanation: "Fosforyty są ważnym surowcem Maroka. Z rozwojem nowoczesnej gospodarki Rwandy wiążą się produkcja smartfonów, technologie medyczne i rozwój kapitału ludzkiego."
  },
  {
    id: "R04_RWA_08",
    section: "Nowoczesna gospodarka Rwandy",
    type: "sort",
    prompt: "Przyporządkuj informacje do sytuacji dawnej lub współczesnej Rwandy.",
    options: null,
    items: ["średnia długość życia 47 lat", "średnia długość życia około 70 lat", "111 zgonów niemowląt na 1000 urodzeń", "pięciokrotnie niższa śmiertelność niemowląt", "kraj zaliczany do najsłabiej rozwiniętych", "rozwój przemysłu wysokich technologii"],
    categories: ["około 2000 roku", "współcześnie"],
    answer: {
      "około 2000 roku": ["średnia długość życia 47 lat", "111 zgonów niemowląt na 1000 urodzeń", "kraj zaliczany do najsłabiej rozwiniętych"],
      "współcześnie": ["średnia długość życia około 70 lat", "pięciokrotnie niższa śmiertelność niemowląt", "rozwój przemysłu wysokich technologii"]
    },
    explanation: "Porównanie wskaźników pokazuje ogromną poprawę jakości życia i rozwój nowych gałęzi gospodarki w Rwandzie."
  },
  {
    id: "R04_RWA_09",
    section: "Nowoczesna gospodarka Rwandy",
    type: "riddle",
    prompt: "Jestem stolicą Rwandy, miejscem uniwersytetu i pierwszej afrykańskiej fabryki smartfonów produkującej je od podstaw. Jak się nazywam?",
    options: null,
    answer: "Kigali",
    altAnswers: ["Kigali", "kigali"],
    explanation: "Kigali jest stolicą Rwandy i ważnym ośrodkiem jej rozwoju edukacyjnego oraz technologicznego."
  },
  {
    id: "R04_RWA_10",
    section: "Nowoczesna gospodarka Rwandy",
    type: "sequence",
    prompt: "Ułóż wydarzenia z najnowszej historii Rwandy chronologicznie.",
    options: null,
    items: ["Otwarcie fabryki smartfonów w Kigali", "Kobiety zdobywają 61% mandatów w parlamencie", "Ludobójstwo", "Bardzo niskie wskaźniki zdrowotne na początku wieku"],
    answer: ["Ludobójstwo", "Bardzo niskie wskaźniki zdrowotne na początku wieku", "Kobiety zdobywają 61% mandatów w parlamencie", "Otwarcie fabryki smartfonów w Kigali"],
    image: "r04_fabryka_smartfonow_kigali.jpg",
    explanation: "Ludobójstwo miało miejsce w 1994 roku, dane zdrowotne pochodzą z 2000 roku, wybory parlamentarne z 2018 roku, a fabrykę otwarto w 2019 roku."
  },
  {
    id: "R04_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "W którym parku narodowym naliczono około 450 gatunków ptaków?",
    options: ["Nakuru", "Amboseli", "Masai Mara", "Serengeti", "Krugera", "Tsavo"],
    answer: 0,
    image: "r04_flamingi_nakuru.jpg",
    explanation: "Park Narodowy Nakuru słynie z ptaków wodno-błotnych, szczególnie flamingów i pelikanów; naliczono tam około 450 gatunków ptaków."
  },
  {
    id: "R04_HARD_02",
    section: "Super trudne",
    type: "fill_in",
    prompt: "W 2022 roku przychody Kenii z turystyki przekroczyły __________ dolarów, a turyści przywożą między innymi dolary i euro nazywane __________ walutami.",
    options: null,
    answer: ["2 miliardy", "twardymi"],
    altAnswers: [["2 miliardy", "2 mld", "dwa miliardy"], ["twardymi", "twarde"]],
    explanation: "Przychody przekroczyły 2 miliardy dolarów. Twarde waluty pozwalają finansować import potrzebnych dóbr i spłatę zadłużenia zagranicznego."
  },
  {
    id: "R04_HARD_03",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz atrakcję Kenii z dokładnym miejscem jej występowania.",
    options: null,
    left: ["przeprawa przez rzekę Marę", "tradycyjny taniec Masajów", "Fort Jesus", "flamingi i pelikany"],
    right: ["Mombasa", "Park Narodowy Nakuru", "Park Narodowy Masai Mara", "wioska Masajów"],
    answer: {
      "przeprawa przez rzekę Marę": "Park Narodowy Masai Mara",
      "tradycyjny taniec Masajów": "wioska Masajów",
      "Fort Jesus": "Mombasa",
      "flamingi i pelikany": "Park Narodowy Nakuru"
    },
    image: "r04_fort_jesus_mombasa.jpg",
    explanation: "Wielka migracja przebiega przez Masai Mara, taniec można poznać w wioskach Masajów, Fort Jesus leży w Mombasie, a Nakuru słynie z ptaków."
  },
  {
    id: "R04_HARD_04",
    section: "Super trudne",
    type: "scenario",
    prompt: "Plaża przy popularnym kurorcie jest tak zatłoczona, że krajobraz traci atrakcyjność, a zadowolenie gości spada. Co zostało przekroczone?",
    options: ["Pojemność turystyczna miejsca", "Parytet siły nabywczej", "Wydajność plantacji", "Limit produkcji przemysłowej", "Okres odłogowania", "Zdolność magazynowania energii"],
    answer: 0,
    explanation: "Każde miejsce ma określoną pojemność turystyczną. Po jej przekroczeniu walory tracą wartość, a satysfakcja odwiedzających maleje."
  },
  {
    id: "R04_HARD_05",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz potencjalne korzyści z rozwoju turystyki w Kenii.",
    options: ["Napływ twardych walut", "Nowe miejsca pracy", "Inwestycje w infrastrukturę", "Promocja przyrody i kultury", "Automatyczne wyeliminowanie wszystkich konfliktów", "Nieograniczona eksploatacja wody"],
    answer: [0, 1, 2, 3],
    explanation: "Turystyka może dostarczać walut, tworzyć zatrudnienie, wspierać infrastrukturę i promować kraj. Nie usuwa jednak automatycznie problemów i może zwiększać presję na zasoby."
  },
  {
    id: "R04_HARD_06",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Który zestaw danych dotyczy marokańskiego przemysłu lotniczego?",
    options: ["Około 140 firm i 17 tysięcy pracowników", "700 tysięcy firm i 220 pracowników", "55 firm i 400 pracowników", "2 firmy i 5% zatrudnionych", "320 firm i 300 tysięcy pracowników", "61 firm i 111 tysięcy pracowników"],
    answer: 0,
    explanation: "W marokańskim sektorze lotniczym działa około 140 firm zatrudniających łącznie około 17 tysięcy osób."
  },
  {
    id: "R04_HARD_07",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Marokański przemysł farmaceutyczny tworzy __________ PKB sektora przemysłowego, zatrudnia __________ osób i zaopatruje około __________ klientów w Afryce i Europie.",
    options: null,
    answer: ["5%", "55 tysięcy", "400 milionów"],
    altAnswers: [["5%", "5 %"], ["55 tysięcy", "55 tys.", "55000"], ["400 milionów", "400 mln", "400000000"]],
    explanation: "Sektor farmaceutyczny tworzy 5% PKB przemysłu, zatrudnia około 55 tysięcy osób i obsługuje około 400 milionów klientów."
  },
  {
    id: "R04_HARD_08",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz wielkość z właściwym osiągnięciem Maroka.",
    options: null,
    left: ["320 km/h", "2 godziny i 10 minut", "700 tysięcy rocznie", "220 tysięcy osób"],
    right: ["zatrudnienie w przemyśle samochodowym", "maksymalna prędkość Al Boraq na trasie", "zdolność produkcji samochodów", "czas przejazdu Casablanca-Tanger"],
    answer: {
      "320 km/h": "maksymalna prędkość Al Boraq na trasie",
      "2 godziny i 10 minut": "czas przejazdu Casablanca-Tanger",
      "700 tysięcy rocznie": "zdolność produkcji samochodów",
      "220 tysięcy osób": "zatrudnienie w przemyśle samochodowym"
    },
    image: "r04_al_boraq.jpg",
    explanation: "Dane pokazują skalę rozwoju marokańskiego transportu kolejowego i przemysłu samochodowego."
  },
  {
    id: "R04_HARD_09",
    section: "Super trudne",
    type: "true_false",
    prompt: "Do 2030 roku ponad połowa energii elektrycznej w Maroku ma pochodzić ze źródeł odnawialnych.",
    options: null,
    answer: true,
    image: "r04_noor_ouarzazate.jpg",
    explanation: "Maroko przechodzi transformację energetyczną i zakłada, że do 2030 roku ponad 50% energii elektrycznej będzie pochodziło ze źródeł odnawialnych."
  },
  {
    id: "R04_HARD_10",
    section: "Super trudne",
    type: "riddle",
    prompt: "Jestem wielką marokańską elektrownią słoneczną. Magazynuję energię, dzięki czemu mogę dostarczać ją także nocą. Jak się nazywam?",
    options: null,
    answer: "Noor Ouarzazate",
    altAnswers: ["Noor Ouarzazate", "Noor", "elektrownia Noor Ouarzazate"],
    image: "r04_noor_ouarzazate.jpg",
    explanation: "Noor Ouarzazate wykorzystuje między innymi zwierciadła i technologię magazynowania energii cieplnej, dlatego może dostarczać energię również w nocy."
  },
  {
    id: "R04_HARD_11",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Jaki odsetek mandatów w parlamencie Rwandy zdobyły kobiety w wyborach w 2018 roku?",
    options: ["61%", "47%", "70%", "12%", "5%", "111%"],
    answer: 0,
    explanation: "W wyborach w 2018 roku kobiety zdobyły 61% mandatów, co dało Rwandzie najwyższy na świecie odsetek kobiet w parlamencie."
  },
  {
    id: "R04_HARD_12",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Do ludobójstwa w Rwandzie, wywołanego waśniami plemiennymi, doszło w roku __________.",
    options: null,
    answer: ["1994"],
    altAnswers: [["1994", "1994 r."]],
    explanation: "W 1994 roku w Rwandzie doszło do ludobójstwa, w którym zginęło kilkaset tysięcy osób."
  },
  {
    id: "R04_HARD_13",
    section: "Super trudne",
    type: "sort",
    prompt: "Przyporządkuj cechy do rolnictwa żarowo-odłogowego lub plantacyjnego.",
    options: null,
    items: ["plony głównie dla mieszkańców", "plony często eksportowane", "długi odłóg chroni glebę", "monokultura wyjaławia glebę", "dawniej wspólna własność gruntów", "prywatny inwestor lub firma"],
    categories: ["rolnictwo żarowo-odłogowe", "rolnictwo plantacyjne"],
    answer: {
      "rolnictwo żarowo-odłogowe": ["plony głównie dla mieszkańców", "długi odłóg chroni glebę", "dawniej wspólna własność gruntów"],
      "rolnictwo plantacyjne": ["plony często eksportowane", "monokultura wyjaławia glebę", "prywatny inwestor lub firma"]
    },
    image: "r04_plantacja_monokultura.jpg",
    explanation: "Systemy różnią się celem produkcji, sposobem użytkowania gleby i formą własności gruntów."
  },
  {
    id: "R04_HARD_14",
    section: "Super trudne",
    type: "sort",
    prompt: "Przyporządkuj osiągnięcia gospodarcze do Maroka lub Rwandy.",
    options: null,
    items: ["szybka kolej Al Boraq", "fabryka smartfonów w Kigali", "port Tanger", "sztuczna inteligencja w dystrybucji leków", "klaster przemysłu lotniczego", "61% kobiet w parlamencie"],
    categories: ["Maroko", "Rwanda"],
    answer: {
      "Maroko": ["szybka kolej Al Boraq", "port Tanger", "klaster przemysłu lotniczego"],
      "Rwanda": ["fabryka smartfonów w Kigali", "sztuczna inteligencja w dystrybucji leków", "61% kobiet w parlamencie"]
    },
    image: "r04_fabryka_smartfonow_kigali.jpg",
    explanation: "Maroko rozwinęło nowoczesny transport i przemysł, a Rwanda wyróżnia się produkcją telefonów, technologiami medycznymi i udziałem kobiet w życiu publicznym."
  },
  {
    id: "R04_HARD_15",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz pojęcie z precyzyjną definicją.",
    options: null,
    left: ["turystyka zrównoważona", "wielka migracja", "rolnictwo towarowe", "zasady zrównoważonego rozwoju"],
    right: ["produkcja przeznaczona na sprzedaż", "sezonowe przemieszczanie zwierząt w poszukiwaniu pastwisk", "ochrona przyrody i kultury przy zachowaniu dochodowości", "korzyści dla ludzi i gospodarki przy ochronie dziedzictwa przyrodniczego"],
    answer: {
      "turystyka zrównoważona": "ochrona przyrody i kultury przy zachowaniu dochodowości",
      "wielka migracja": "sezonowe przemieszczanie zwierząt w poszukiwaniu pastwisk",
      "rolnictwo towarowe": "produkcja przeznaczona na sprzedaż",
      "zasady zrównoważonego rozwoju": "korzyści dla ludzi i gospodarki przy ochronie dziedzictwa przyrodniczego"
    },
    explanation: "Pojęcia dotyczą rolnictwa, turystyki i rozwoju gospodarczego w Afryce."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r04",
  number: 4,
  title: "Afryka, część 2",
  icon: "🌍",
  sectionOrder: [
    "Rolnictwo żarowo-odłogowe",
    "Rolnictwo plantacyjne i nowoczesne",
    "Turystyka w Kenii",
    "Nowoczesna gospodarka Maroka",
    "Nowoczesna gospodarka Rwandy"
  ],
  sectionIcons: {
    "Rolnictwo żarowo-odłogowe": "🌱",
    "Rolnictwo plantacyjne i nowoczesne": "🚜",
    "Turystyka w Kenii": "🦁",
    "Nowoczesna gospodarka Maroka": "🚄",
    "Nowoczesna gospodarka Rwandy": "📱"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
