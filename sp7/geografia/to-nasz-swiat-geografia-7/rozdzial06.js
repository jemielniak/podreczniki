// Skróty sekcji (do identyfikatorów ćwiczeń):
//   WAR  = Warunki rozwoju rolnictwa
//   ROL  = Produkcja rolnicza
//   PRZ  = Rozwój przemysłu
//   ENE  = Energetyka
//   USL  = Usługi i transport
//   ZAT  = Struktura zatrudnienia ludności
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R06_WAR_01",
    section: "Warunki rozwoju rolnictwa",
    type: "single_choice",
    prompt: "Jaka jest główna funkcja rolnictwa?",
    options: ["Produkcja żywności", "Wydobycie surowców", "Przewóz pasażerów", "Produkcja energii", "Świadczenie usług bankowych", "Budowa statków"],
    answer: 0,
    explanation: "Rolnictwo polega na uprawie ziemi i roślin oraz chowie zwierząt, a jego główną funkcją jest produkcja żywności."
  },
  {
    id: "R06_WAR_02",
    section: "Warunki rozwoju rolnictwa",
    type: "true_false",
    prompt: "Rewolucja agrarna rozpoczęła się około 10 000 lat temu i przyczyniła się do przejścia ludzi z koczowniczego na osiadły tryb życia.",
    options: null,
    answer: true,
    explanation: "Opanowanie uprawy ziemi na dużą skalę około 10 000 lat temu umożliwiło ludziom osiadły tryb życia."
  },
  {
    id: "R06_WAR_03",
    section: "Warunki rozwoju rolnictwa",
    type: "multi_select",
    prompt: "Zaznacz przyrodnicze warunki rozwoju rolnictwa.",
    options: ["Ukształtowanie terenu", "Klimat", "Gleby", "Wielkość gospodarstw", "Poziom wykształcenia rolników"],
    answer: [0, 1, 2],
    explanation: "Do warunków przyrodniczych należą ukształtowanie terenu, klimat i gleby. Pozostałe czynniki są pozaprzyrodnicze.",
    image: "r06_niziny_i_gory_rolnictwo.jpg"
  },
  {
    id: "R06_WAR_04",
    section: "Warunki rozwoju rolnictwa",
    type: "match",
    prompt: "Połącz czynnik przyrodniczy z jego znaczeniem dla rolnictwa.",
    options: null,
    left: ["Ukształtowanie terenu", "Klimat", "Gleby"],
    right: ["Wpływa na łatwość prowadzenia prac polowych", "Decyduje między innymi o długości okresu wegetacyjnego", "Ich żyzność zależy między innymi od poziomu próchnicy"],
    answer: {
      "Ukształtowanie terenu": "Wpływa na łatwość prowadzenia prac polowych",
      "Klimat": "Decyduje między innymi o długości okresu wegetacyjnego",
      "Gleby": "Ich żyzność zależy między innymi od poziomu próchnicy"
    },
    explanation: "Równinny teren ułatwia prace, klimat wpływa na okres wegetacyjny, a duża zawartość próchnicy zwiększa żyzność gleby."
  },
  {
    id: "R06_WAR_05",
    section: "Warunki rozwoju rolnictwa",
    type: "fill_in",
    prompt: "W Polsce gospodarstwa prywatne stanowią około __________% wszystkich gospodarstw rolnych.",
    options: null,
    answer: ["99,5"],
    altAnswers: [["99,5", "99.5", "99,5%", "99.5%"]],
    explanation: "Prawie wszystkie gospodarstwa rolne w Polsce są prywatne - ich udział wynosi około 99,5%.",
    image: "r06_nowoczesne_gospodarstwo_rolne.jpg"
  },
  {
    id: "R06_WAR_06",
    section: "Warunki rozwoju rolnictwa",
    type: "odd_one_out",
    prompt: "Wskaż czynnik niepasujący do pozostałych: klimat, gleby, ukształtowanie terenu, mechanizacja.",
    options: null,
    answer: "mechanizacja",
    explanation: "Mechanizacja jest czynnikiem pozaprzyrodniczym, a klimat, gleby i ukształtowanie terenu są czynnikami przyrodniczymi."
  },
  {
    id: "R06_WAR_07",
    section: "Warunki rozwoju rolnictwa",
    type: "scenario",
    prompt: "Rolnik wybiera miejsce pod duże pola uprawne. Jeden teren jest równinny, a drugi ma strome górskie stoki. Który teren będzie korzystniejszy dla rolnictwa?",
    options: ["Teren równinny", "Strome stoki górskie", "Oba będą jednakowo korzystne", "Żaden z nich nie nadaje się do uprawy"],
    answer: 0,
    explanation: "Obszary równinne lub nieznacznie pofałdowane sprzyjają rolnictwu, natomiast górska rzeźba terenu jest niekorzystna.",
    image: "r06_niziny_i_gory_rolnictwo.jpg"
  },
  {
    id: "R06_WAR_08",
    section: "Warunki rozwoju rolnictwa",
    type: "sort",
    prompt: "Przyporządkuj warunki rozwoju rolnictwa do odpowiednich grup.",
    options: null,
    items: ["klimat", "gleby", "mechanizacja", "chemizacja", "wielkość gospodarstw", "ukształtowanie terenu"],
    categories: ["przyrodnicze", "pozaprzyrodnicze"],
    answer: {
      "przyrodnicze": ["klimat", "gleby", "ukształtowanie terenu"],
      "pozaprzyrodnicze": ["mechanizacja", "chemizacja", "wielkość gospodarstw"]
    },
    explanation: "Przyrodnicze warunki wynikają ze środowiska, a pozaprzyrodnicze z organizacji, technologii i działalności człowieka."
  },
  {
    id: "R06_WAR_09",
    section: "Warunki rozwoju rolnictwa",
    type: "single_choice",
    prompt: "W której grupie województw dominują liczne duże gospodarstwa rolne?",
    options: ["Lubuskie, warmińsko-mazurskie i zachodniopomorskie", "Małopolskie, lubelskie i podkarpackie", "Śląskie, opolskie i świętokrzyskie", "Mazowieckie, łódzkie i podlaskie", "Pomorskie, kujawsko-pomorskie i lubelskie", "Dolnośląskie, śląskie i małopolskie"],
    answer: 0,
    explanation: "Liczne duże gospodarstwa występują w województwach lubuskim, warmińsko-mazurskim i zachodniopomorskim.",
    image: "r06_nowoczesne_gospodarstwo_rolne.jpg"
  },
  {
    id: "R06_WAR_10",
    section: "Warunki rozwoju rolnictwa",
    type: "riddle",
    prompt: "Jak nazywa się stosowanie w rolnictwie środków chemicznych między innymi przeciw owadom i chwastom?",
    options: null,
    answer: "chemizacja",
    altAnswers: ["chemizacja", "chemizacja rolnictwa", "chemizacja upraw"],
    explanation: "Chemizacja polega na stosowaniu środków chemicznych, między innymi do zwalczania owadów i chwastów."
  },

  {
    id: "R06_ROL_01",
    section: "Produkcja rolnicza",
    type: "single_choice",
    prompt: "Jaką część powierzchni Polski zajmują obszary rolnicze?",
    options: ["Około 18%", "Około 38%", "Około 58%", "Około 78%", "Około 88%", "Prawie 100%"],
    answer: 2,
    explanation: "Obszary rolnicze zajmują około 58% powierzchni Polski, czyli ponad połowę kraju."
  },
  {
    id: "R06_ROL_02",
    section: "Produkcja rolnicza",
    type: "multi_select",
    prompt: "Zaznacz rodzaje obszarów rolniczych występujących w Polsce.",
    options: ["Pola uprawne", "Łąki", "Pastwiska", "Sady", "Kamieniołomy", "Porty morskie"],
    answer: [0, 1, 2, 3],
    explanation: "Do obszarów rolniczych należą pola uprawne, łąki, pastwiska i sady."
  },
  {
    id: "R06_ROL_03",
    section: "Produkcja rolnicza",
    type: "match",
    prompt: "Połącz roślinę z jej wymaganiami.",
    options: null,
    left: ["Pszenica", "Żyto", "Ziemniaki", "Buraki cukrowe"],
    right: ["Bardzo duże wymagania glebowe i długi okres wegetacyjny", "Małe wymagania i odporność na suszę", "Umiarkowane wymagania i odporność na niskie temperatury", "Bardzo duże wymagania oraz odpowiednie nawodnienie"],
    answer: {
      "Pszenica": "Bardzo duże wymagania glebowe i długi okres wegetacyjny",
      "Żyto": "Małe wymagania i odporność na suszę",
      "Ziemniaki": "Umiarkowane wymagania i odporność na niskie temperatury",
      "Buraki cukrowe": "Bardzo duże wymagania oraz odpowiednie nawodnienie"
    },
    explanation: "Pszenica i buraki cukrowe są wymagające, żyto dobrze znosi słabe gleby i suszę, a ziemniaki mają wymagania umiarkowane.",
    image: "r06_pszenica_i_zyto.jpg"
  },
  {
    id: "R06_ROL_04",
    section: "Produkcja rolnicza",
    type: "fill_in",
    prompt: "Główne obszary upraw pszenicy znajdują się w województwach __________ i __________.",
    options: null,
    answer: ["opolskim", "dolnośląskim"],
    altAnswers: [["opolskim", "opolskie", "województwie opolskim"], ["dolnośląskim", "dolnośląskie", "województwie dolnośląskim"]],
    explanation: "Największy udział upraw pszenicy występuje w województwach opolskim i dolnośląskim."
  },
  {
    id: "R06_ROL_05",
    section: "Produkcja rolnicza",
    type: "true_false",
    prompt: "Z sadów w okolicy Grójca pochodzi około 40% polskich jabłek.",
    options: null,
    answer: true,
    explanation: "Okolice Grójca na Nizinie Mazowieckiej są szczególnie znanym regionem sadowniczym i dostarczają około 40% polskich jabłek.",
    image: "r06_sad_jabloniowy_grojec.jpg"
  },
  {
    id: "R06_ROL_06",
    section: "Produkcja rolnicza",
    type: "odd_one_out",
    prompt: "Wskaż produkt niepasujący do pozostałych: pszenica, żyto, ziemniaki, mleko.",
    options: null,
    answer: "mleko",
    explanation: "Mleko jest produktem chowu zwierząt, a pszenica, żyto i ziemniaki pochodzą z upraw roślin."
  },
  {
    id: "R06_ROL_07",
    section: "Produkcja rolnicza",
    type: "scenario",
    prompt: "Gospodarstwo ma słabe, piaszczyste gleby, a latem często występuje susza. Które zboże będzie najlepiej dopasowane do takich warunków?",
    options: ["Żyto", "Pszenica", "Buraki cukrowe", "Jabłonie", "Ryż", "Winorośl"],
    answer: 0,
    explanation: "Żyto ma małe wymagania glebowe, rośnie na słabych i piaszczystych glebach oraz jest odporne na suszę.",
    image: "r06_pszenica_i_zyto.jpg"
  },
  {
    id: "R06_ROL_08",
    section: "Produkcja rolnicza",
    type: "sort",
    prompt: "Przyporządkuj produkty do produkcji roślinnej lub zwierzęcej.",
    options: null,
    items: ["zboże", "warzywa", "owoce", "mleko", "mięso", "jajka"],
    categories: ["produkcja roślinna", "produkcja zwierzęca"],
    answer: {
      "produkcja roślinna": ["zboże", "warzywa", "owoce"],
      "produkcja zwierzęca": ["mleko", "mięso", "jajka"]
    },
    explanation: "Zboże, warzywa i owoce pozyskuje się z upraw, a mleko, mięso i jajka z chowu zwierząt."
  },
  {
    id: "R06_ROL_09",
    section: "Produkcja rolnicza",
    type: "single_choice",
    prompt: "Która grupa zwierząt ma w Polsce zdecydowanie największe pogłowie?",
    options: ["Drób", "Bydło", "Trzoda chlewna", "Owce", "Konie", "Kozy"],
    answer: 0,
    explanation: "Pogłowie drobiu wynosi ponad 200 mln sztuk i jest znacznie większe niż pogłowie innych zwierząt gospodarskich.",
    image: "r06_chow_zwierzat.jpg"
  },
  {
    id: "R06_ROL_10",
    section: "Produkcja rolnicza",
    type: "match",
    prompt: "Połącz zwierzę z pozyskiwanymi od niego produktami.",
    options: null,
    left: ["Drób", "Bydło", "Trzoda chlewna", "Owce"],
    right: ["Mięso i jajka", "Mleko i mięso", "Mięso i tłuszcz", "Wełna i mleko"],
    answer: {
      "Drób": "Mięso i jajka",
      "Bydło": "Mleko i mięso",
      "Trzoda chlewna": "Mięso i tłuszcz",
      "Owce": "Wełna i mleko"
    },
    explanation: "Poszczególne gatunki zwierząt gospodarskich dostarczają różnych produktów: drób jajek, bydło mleka, trzoda tłuszczu, a owce wełny.",
    image: "r06_chow_zwierzat.jpg"
  },

  {
    id: "R06_PRZ_01",
    section: "Rozwój przemysłu",
    type: "riddle",
    prompt: "Jak nazywa się obszar będący skupiskiem wielu zakładów przemysłowych?",
    options: null,
    answer: "okręg przemysłowy",
    altAnswers: ["okręg przemysłowy", "okręg"],
    explanation: "Skupisko wielu zakładów przemysłowych tworzy okręg przemysłowy."
  },
  {
    id: "R06_PRZ_02",
    section: "Rozwój przemysłu",
    type: "multi_select",
    prompt: "Zaznacz działalności należące do przemysłu.",
    options: ["Wydobycie surowców naturalnych", "Przetwarzanie surowców", "Produkcja energii", "Wytwarzanie dóbr na masową skalę", "Udzielanie korepetycji", "Chów zwierząt"],
    answer: [0, 1, 2, 3],
    explanation: "Przemysł obejmuje wydobycie i przetwarzanie surowców, produkcję energii oraz masowe wytwarzanie dóbr."
  },
  {
    id: "R06_PRZ_03",
    section: "Rozwój przemysłu",
    type: "true_false",
    prompt: "W latach 1945-1989 przemysł ciężki był jedną z najważniejszych części polskiej gospodarki i należał głównie do państwa.",
    options: null,
    answer: true,
    explanation: "W gospodarce centralnie planowanej państwo zarządzało zakładami, a przemysł ciężki pełnił wiodącą funkcję.",
    image: "r06_kopalnia_i_huta_gop.jpg"
  },
  {
    id: "R06_PRZ_04",
    section: "Rozwój przemysłu",
    type: "sort",
    prompt: "Przyporządkuj cechy przemysłu do okresu przed 1989 rokiem lub po 1989 roku.",
    options: null,
    items: ["główna własność państwowa", "dominacja przemysłu ciężkiego", "duża liczba prywatnych firm", "mniejsza ingerencja państwa", "rozwój przemysłu hi-tech", "brak konkurencji między zakładami"],
    categories: ["przed 1989 rokiem", "po 1989 roku"],
    answer: {
      "przed 1989 rokiem": ["główna własność państwowa", "dominacja przemysłu ciężkiego", "brak konkurencji między zakładami"],
      "po 1989 roku": ["duża liczba prywatnych firm", "mniejsza ingerencja państwa", "rozwój przemysłu hi-tech"]
    },
    explanation: "Przed 1989 rokiem przemysł był państwowy i centralnie planowany, a po zmianie ustroju rozwinęła się gospodarka wolnorynkowa i nowoczesne gałęzie przemysłu."
  },
  {
    id: "R06_PRZ_05",
    section: "Rozwój przemysłu",
    type: "scenario",
    prompt: "W państwowym zakładzie utrzymuje się znacznie więcej pracowników, niż potrzeba, ponieważ zwolnień prawie się nie stosuje. Jak nazywa się to zjawisko?",
    options: ["Ukryte bezrobocie", "Restrukturyzacja", "Prywatyzacja", "Automatyzacja", "Chemizacja", "Import"],
    answer: 0,
    explanation: "Przerost zatrudnienia, gdy część stanowisk jest niepotrzebna, określa się jako ukryte bezrobocie."
  },
  {
    id: "R06_PRZ_06",
    section: "Rozwój przemysłu",
    type: "sequence",
    prompt: "Ułóż przemiany polskiego przemysłu w kolejności od najwcześniejszej do najpóźniejszej.",
    options: null,
    items: ["Rozwój prywatnych firm i konkurencji", "Dominacja państwowego przemysłu ciężkiego", "Restrukturyzacja i spadek zatrudnienia", "Upadek komunizmu"],
    answer: ["Dominacja państwowego przemysłu ciężkiego", "Upadek komunizmu", "Restrukturyzacja i spadek zatrudnienia", "Rozwój prywatnych firm i konkurencji"],
    explanation: "Najpierw dominowała gospodarka centralnie planowana, po upadku komunizmu rozpoczęto restrukturyzację, a gospodarka wolnorynkowa umożliwiła rozwój prywatnych firm i konkurencji."
  },
  {
    id: "R06_PRZ_07",
    section: "Rozwój przemysłu",
    type: "single_choice",
    prompt: "Na jakich gałęziach opierał się przemysł ciężki Górnośląskiego Okręgu Przemysłowego w okresie komunizmu?",
    options: ["Górnictwie węgla kamiennego i hutnictwie", "Sadownictwie i przemyśle spożywczym", "Turystyce i hotelarstwie", "Przemyśle włókienniczym i obuwniczym", "Bankowości i ubezpieczeniach", "Rybołówstwie i przetwórstwie ryb"],
    answer: 0,
    explanation: "GOP był filarem przemysłu ciężkiego opartego przede wszystkim na górnictwie węgla kamiennego i hutnictwie.",
    image: "r06_kopalnia_i_huta_gop.jpg"
  },
  {
    id: "R06_PRZ_08",
    section: "Rozwój przemysłu",
    type: "single_choice",
    prompt: "Jaka gałąź przemysłu odgrywała dawniej szczególnie ważną rolę w aglomeracji łódzkiej?",
    options: ["Przemysł włókienniczy", "Przemysł stoczniowy", "Górnictwo węgla kamiennego", "Przemysł nawozowy", "Przemysł lotniczy", "Przemysł drzewny"],
    answer: 0,
    explanation: "Aglomeracja łódzka była ważnym ośrodkiem przemysłu włókienniczego, wytwarzającego włókna, tkaniny i dzianiny.",
    image: "r06_manufaktura_lodz.jpg"
  },
  {
    id: "R06_PRZ_09",
    section: "Rozwój przemysłu",
    type: "match",
    prompt: "Połącz polską firmę z główną dziedziną działalności.",
    options: null,
    left: ["Orlen", "KGHM Polska Miedź", "Grupa Azoty", "WB Electronics", "PGE"],
    right: ["Branża paliwowo-energetyczna", "Produkcja miedzi i srebra", "Produkcja nawozów rolniczych", "Elektronika wojskowa i środki łączności", "Sektor energetyczny"],
    answer: {
      "Orlen": "Branża paliwowo-energetyczna",
      "KGHM Polska Miedź": "Produkcja miedzi i srebra",
      "Grupa Azoty": "Produkcja nawozów rolniczych",
      "WB Electronics": "Elektronika wojskowa i środki łączności",
      "PGE": "Sektor energetyczny"
    },
    explanation: "Firmy te reprezentują ważne gałęzie polskiego przemysłu: paliwa i energię, wydobycie metali, chemię oraz technologie wojskowe."
  },
  {
    id: "R06_PRZ_10",
    section: "Rozwój przemysłu",
    type: "fill_in",
    prompt: "W budynkach dawnego zakładu włókienniczego w Łodzi utworzono centrum handlowe __________.",
    options: null,
    answer: ["Manufaktura"],
    altAnswers: [["Manufaktura", "manufaktura"]],
    explanation: "Manufaktura jest przykładem nadania dawnemu obiektowi przemysłowemu nowej funkcji usługowej.",
    image: "r06_manufaktura_lodz.jpg"
  },

  {
    id: "R06_ENE_01",
    section: "Energetyka",
    type: "multi_select",
    prompt: "Zaznacz odnawialne źródła energii.",
    options: ["Wiatr", "Woda", "Słońce", "Biomasa", "Węgiel kamienny", "Ropa naftowa"],
    answer: [0, 1, 2, 3],
    explanation: "Wiatr, woda, słońce i biomasa są źródłami odnawialnymi, natomiast węgiel i ropa są nieodnawialne."
  },
  {
    id: "R06_ENE_02",
    section: "Energetyka",
    type: "sort",
    prompt: "Przyporządkuj źródła energii do odnawialnych i nieodnawialnych.",
    options: null,
    items: ["węgiel kamienny", "węgiel brunatny", "ropa naftowa", "gaz ziemny", "wiatr", "woda", "słońce", "ciepło wnętrza Ziemi"],
    categories: ["odnawialne", "nieodnawialne"],
    answer: {
      "odnawialne": ["wiatr", "woda", "słońce", "ciepło wnętrza Ziemi"],
      "nieodnawialne": ["węgiel kamienny", "węgiel brunatny", "ropa naftowa", "gaz ziemny"]
    },
    explanation: "OZE są niewyczerpywalne w ludzkiej skali czasu, natomiast paliwa kopalne tworzą zasoby wyczerpywalne."
  },
  {
    id: "R06_ENE_03",
    section: "Energetyka",
    type: "fill_in",
    prompt: "Procentowy udział poszczególnych źródeł w produkcji energii nazywa się __________ energetycznym.",
    options: null,
    answer: ["miksem"],
    altAnswers: [["miksem", "miks", "miksem energetycznym", "strukturą produkcji energii"]],
    explanation: "Miks energetyczny, czyli struktura produkcji energii, pokazuje procentowy udział poszczególnych źródeł."
  },
  {
    id: "R06_ENE_04",
    section: "Energetyka",
    type: "true_false",
    prompt: "W trakcie transformacji energetycznej w Polsce maleje udział węgla, a rośnie wykorzystanie odnawialnych źródeł energii.",
    options: null,
    answer: true,
    explanation: "Transformacja energetyczna polega między innymi na ograniczaniu węgla kamiennego i brunatnego oraz zwiększaniu udziału OZE."
  },
  {
    id: "R06_ENE_05",
    section: "Energetyka",
    type: "single_choice",
    prompt: "Które odnawialne źródło energii ma obecnie największe znaczenie w Polsce?",
    options: ["Wiatr", "Woda", "Słońce", "Ciepło wnętrza Ziemi", "Biomasa", "Pływy morskie"],
    answer: 0,
    explanation: "Wiatr jest obecnie głównym odnawialnym źródłem energii w Polsce.",
    image: "r06_farma_wiatrowa_nad_baltykiem.jpg"
  },
  {
    id: "R06_ENE_06",
    section: "Energetyka",
    type: "scenario",
    prompt: "Elektrownia ma spalać kruchy surowiec, którego daleki transport jest nieopłacalny. Gdzie najlepiej ją zbudować?",
    options: ["Bezpośrednio przy kopalni węgla brunatnego", "W centrum dużego miasta", "Na wysokim górskim szczycie", "W dowolnym miejscu kraju", "Wyłącznie przy porcie lotniczym", "Na obszarze bez złóż surowców"],
    answer: 0,
    explanation: "Węgiel brunatny jest kruchy, daje mniej energii i trudno go przewozić, dlatego elektrownie buduje się bezpośrednio przy kopalniach.",
    image: "r06_elektrownia_i_kopalnia_belchatow.jpg"
  },
  {
    id: "R06_ENE_07",
    section: "Energetyka",
    type: "match",
    prompt: "Połącz rodzaj energetyki z charakterystycznym miejscem lub warunkiem w Polsce.",
    options: null,
    left: ["Wiatrowa", "Wodna", "Geotermalna", "Cieplna na węgiel brunatny"],
    right: ["Wybrzeże i równinny pas środkowej Polski", "Solina na rzece San", "Chochołów na Podhalu", "Bełchatów"],
    answer: {
      "Wiatrowa": "Wybrzeże i równinny pas środkowej Polski",
      "Wodna": "Solina na rzece San",
      "Geotermalna": "Chochołów na Podhalu",
      "Cieplna na węgiel brunatny": "Bełchatów"
    },
    explanation: "Rozmieszczenie energetyki zależy od wiatru, rzeźby terenu, zasobów wód termalnych i położenia złóż węgla brunatnego."
  },
  {
    id: "R06_ENE_08",
    section: "Energetyka",
    type: "true_false",
    prompt: "Równinna rzeźba Polski i okresowo zbyt mała ilość wody w rzekach ograniczają rozwój dużych elektrowni wodnych.",
    options: null,
    answer: true,
    explanation: "Energetyka wodna potrzebuje odpowiednio nachylonego terenu i rzek niosących dużo wody, a takich warunków jest w Polsce niewiele."
  },
  {
    id: "R06_ENE_09",
    section: "Energetyka",
    type: "riddle",
    prompt: "Jak nazywa się gazociąg, którym duża część gazu ziemnego dociera do Polski z Norwegii?",
    options: null,
    answer: "Baltic Pipe",
    altAnswers: ["Baltic Pipe", "baltic pipe", "gazociąg Baltic Pipe"],
    explanation: "Baltic Pipe dostarcza do Polski znaczną część importowanego gazu ziemnego z Norwegii."
  },
  {
    id: "R06_ENE_10",
    section: "Energetyka",
    type: "single_choice",
    prompt: "W której gminie ma powstać pierwsza polska elektrownia jądrowa?",
    options: ["Choczewo", "Bełchatów", "Żarnowiec", "Solina", "Uniejów", "Pątnów"],
    answer: 0,
    explanation: "Pierwsza polska elektrownia jądrowa ma powstać w gminie Choczewo w województwie pomorskim."
  },

  {
    id: "R06_USL_01",
    section: "Usługi i transport",
    type: "single_choice",
    prompt: "Na czym polegają usługi?",
    options: ["Na świadczeniu działalności służących ludziom", "Wyłącznie na uprawie roślin", "Wyłącznie na wydobyciu surowców", "Na masowej produkcji dóbr", "Tylko na produkcji energii", "Tylko na hodowli zwierząt"],
    answer: 0,
    explanation: "Usługi obejmują różnorodne działania służące ludziom, inne niż rolnictwo i przemysł."
  },
  {
    id: "R06_USL_02",
    section: "Usługi i transport",
    type: "multi_select",
    prompt: "Zaznacz przykłady usług.",
    options: ["Edukacja", "Opieka zdrowotna", "Transport", "Bankowość", "Wydobycie węgla", "Uprawa pszenicy"],
    answer: [0, 1, 2, 3],
    explanation: "Edukacja, ochrona zdrowia, transport i bankowość należą do usług, natomiast wydobycie jest częścią przemysłu, a uprawa częścią rolnictwa."
  },
  {
    id: "R06_USL_03",
    section: "Usługi i transport",
    type: "fill_in",
    prompt: "Kupowanie za granicą i sprowadzanie do kraju to __________, a sprzedaż za granicę dóbr wytworzonych w kraju to __________.",
    options: null,
    answer: ["import", "eksport"],
    altAnswers: [["import", "importem"], ["eksport", "eksportem"]],
    explanation: "Import oznacza zakup za granicą, a eksport sprzedaż za granicę dóbr i usług wytworzonych w kraju."
  },
  {
    id: "R06_USL_04",
    section: "Usługi i transport",
    type: "match",
    prompt: "Połącz rodzaj transportu z jego cechą.",
    options: null,
    left: ["Samochodowy", "Lotniczy", "Wodny", "Przesyłowy"],
    right: ["Transport od drzwi do drzwi", "Szybki przewóz na bardzo duże odległości", "Tani przewóz ogromnych ilości towarów", "Przesył rurociągami i liniami energetycznymi"],
    answer: {
      "Samochodowy": "Transport od drzwi do drzwi",
      "Lotniczy": "Szybki przewóz na bardzo duże odległości",
      "Wodny": "Tani przewóz ogromnych ilości towarów",
      "Przesyłowy": "Przesył rurociągami i liniami energetycznymi"
    },
    explanation: "Każdy rodzaj transportu ma inne zalety i infrastrukturę: drogi, lotniska, porty lub sieci przesyłowe.",
    image: "r06_transport_w_polsce.jpg"
  },
  {
    id: "R06_USL_05",
    section: "Usługi i transport",
    type: "scenario",
    prompt: "Firma chce przewieźć towar na krótki odcinek bez przeładunku, bezpośrednio z magazynu do sklepu. Który rodzaj transportu będzie najodpowiedniejszy?",
    options: ["Samochodowy", "Lotniczy", "Morski", "Przesyłowy", "Śródlądowy", "Kolejowy"],
    answer: 0,
    explanation: "Transport samochodowy jest mobilny i umożliwia przewóz od drzwi do drzwi, zwłaszcza na krótkich odcinkach.",
    image: "r06_transport_w_polsce.jpg"
  },
  {
    id: "R06_USL_06",
    section: "Usługi i transport",
    type: "true_false",
    prompt: "Najwięcej pasażerów w Polsce obsługuje Lotnisko Chopina w Warszawie.",
    options: null,
    answer: true,
    explanation: "Lotnisko Chopina na warszawskim Okęciu jest największym polskim portem lotniczym pod względem liczby pasażerów."
  },
  {
    id: "R06_USL_07",
    section: "Usługi i transport",
    type: "odd_one_out",
    prompt: "Wskaż środek transportu niepasujący do pozostałych: pociąg, metro, tramwaj, samolot.",
    options: null,
    answer: "samolot",
    explanation: "Pociąg, metro i tramwaj należą do transportu kolejowego, czyli szynowego, a samolot do lotniczego."
  },
  {
    id: "R06_USL_08",
    section: "Usługi i transport",
    type: "sequence",
    prompt: "Ułóż etapy edukacji w kolejności od najwcześniejszego do najpóźniejszego.",
    options: null,
    items: ["szkoła wyższa", "szkoła podstawowa", "zerówka", "szkoła ponadpodstawowa"],
    answer: ["zerówka", "szkoła podstawowa", "szkoła ponadpodstawowa", "szkoła wyższa"],
    explanation: "Dziecko rozpoczyna od zerówki, potem uczęszcza do szkoły podstawowej i ponadpodstawowej, a studia są późniejszym, nieobowiązkowym etapem."
  },
  {
    id: "R06_USL_09",
    section: "Usługi i transport",
    type: "sort",
    prompt: "Przyporządkuj środki łączności do tych, które zyskują lub tracą na znaczeniu.",
    options: null,
    items: ["internet", "telefonia komórkowa", "telefonia stacjonarna", "prasa", "radio", "tradycyjna poczta"],
    categories: ["zyskują na znaczeniu", "tracą na znaczeniu"],
    answer: {
      "zyskują na znaczeniu": ["internet", "telefonia komórkowa"],
      "tracą na znaczeniu": ["telefonia stacjonarna", "prasa", "radio", "tradycyjna poczta"]
    },
    explanation: "Znaczenie internetu i telefonii komórkowej rośnie, natomiast tradycyjna poczta, prasa, radio i telefonia stacjonarna tracą odbiorców."
  },
  {
    id: "R06_USL_10",
    section: "Usługi i transport",
    type: "match",
    prompt: "Połącz działalność w Trójmieście ze sposobem, w jaki wspiera ją położenie nad morzem.",
    options: null,
    left: ["Przemysł stoczniowy", "Rafineria", "Turystyka", "Logistyka i spedycja"],
    right: ["Budowa i naprawa statków oraz jachtów", "Dostawy ropy drogą morską", "Przyjazdy promami i statkami wycieczkowymi", "Obsługa dalszego przewozu towarów z portów"],
    answer: {
      "Przemysł stoczniowy": "Budowa i naprawa statków oraz jachtów",
      "Rafineria": "Dostawy ropy drogą morską",
      "Turystyka": "Przyjazdy promami i statkami wycieczkowymi",
      "Logistyka i spedycja": "Obsługa dalszego przewozu towarów z portów"
    },
    explanation: "Porty w Gdańsku i Gdyni umożliwiły rozwój stoczni, rafinerii, turystyki oraz usług logistycznych i spedycyjnych.",
    image: "r06_port_trojmiasto.jpg"
  },

  {
    id: "R06_ZAT_01",
    section: "Struktura zatrudnienia ludności",
    type: "single_choice",
    prompt: "W którym sektorze pracuje zwykle największa część ludności państw wysoko rozwiniętych?",
    options: ["W usługach", "W rolnictwie", "W przemyśle wydobywczym", "W rybołówstwie", "W leśnictwie", "W górnictwie"],
    answer: 0,
    explanation: "Im wyższy poziom rozwoju gospodarczego, tym większy jest zwykle udział zatrudnionych w usługach.",
    image: "r06_trzy_sektory_gospodarki.jpg"
  },
  {
    id: "R06_ZAT_02",
    section: "Struktura zatrudnienia ludności",
    type: "true_false",
    prompt: "W Mołdawii największa część zatrudnionych pracuje w rolnictwie.",
    options: null,
    answer: true,
    explanation: "Mołdawia należy do najsłabiej rozwiniętych państw Europy, dlatego największe zatrudnienie występuje tam w rolnictwie."
  },
  {
    id: "R06_ZAT_03",
    section: "Struktura zatrudnienia ludności",
    type: "match",
    prompt: "Połącz kraj z opisem jego struktury zatrudnienia w 2023 roku.",
    options: null,
    left: ["Polska", "Francja", "Rumunia", "Mołdawia"],
    right: ["Większość pracuje w usługach, ale przemysł pozostaje istotny", "Bardzo wysoki udział usług i znikomy rolnictwa", "Znaczący udział rolnictwa i przemysłu", "Największe zatrudnienie w rolnictwie"],
    answer: {
      "Polska": "Większość pracuje w usługach, ale przemysł pozostaje istotny",
      "Francja": "Bardzo wysoki udział usług i znikomy rolnictwa",
      "Rumunia": "Znaczący udział rolnictwa i przemysłu",
      "Mołdawia": "Największe zatrudnienie w rolnictwie"
    },
    explanation: "Struktura zatrudnienia odzwierciedla poziom rozwoju: usługi dominują w krajach rozwiniętych, a rolnictwo ma większy udział w słabiej rozwiniętych.",
    image: "r06_trzy_sektory_gospodarki.jpg"
  },
  {
    id: "R06_ZAT_04",
    section: "Struktura zatrudnienia ludności",
    type: "fill_in",
    prompt: "W Polsce w 2023 roku w rolnictwie pracowało około __________%, w przemyśle około __________%, a w usługach około __________% zatrudnionych.",
    options: null,
    answer: ["8", "30", "63"],
    altAnswers: [["8", "8%", "około 8"], ["30", "30%", "około 30"], ["63", "63%", "około 63"]],
    explanation: "W 2023 roku udział zatrudnionych wynosił w przybliżeniu 8% w rolnictwie, 30% w przemyśle i 63% w usługach."
  },
  {
    id: "R06_ZAT_05",
    section: "Struktura zatrudnienia ludności",
    type: "sequence",
    prompt: "Ułóż etapy zmian struktury zatrudnienia w Polsce od najwcześniejszego do najpóźniejszego.",
    options: null,
    items: ["Dominacja usług w zatrudnieniu", "Największe zatrudnienie w rolnictwie", "Znaczny wzrost zatrudnienia w przemyśle w czasach komunizmu", "Spadek znaczenia rolnictwa i przemysłu po 1989 roku"],
    answer: ["Największe zatrudnienie w rolnictwie", "Znaczny wzrost zatrudnienia w przemyśle w czasach komunizmu", "Spadek znaczenia rolnictwa i przemysłu po 1989 roku", "Dominacja usług w zatrudnieniu"],
    explanation: "Przed II wojną światową dominowało rolnictwo, w komunizmie rozwijano przemysł, a po 1989 roku szybko rosło znaczenie usług."
  },
  {
    id: "R06_ZAT_06",
    section: "Struktura zatrudnienia ludności",
    type: "multi_select",
    prompt: "Zaznacz przyczyny spadku zatrudnienia w polskim przemyśle.",
    options: ["Rozwój technologiczny", "Transformacja energetyczna", "Automatyzacja", "Wzrost liczby prac ręcznych", "Rezygnacja z maszyn"],
    answer: [0, 1, 2],
    explanation: "Spadek zatrudnienia w przemyśle wynika z rozwoju technologicznego, transformacji energetycznej i automatyzacji."
  },
  {
    id: "R06_ZAT_07",
    section: "Struktura zatrudnienia ludności",
    type: "riddle",
    prompt: "Jak nazywa się zastępowanie pracy człowieka przez maszyny?",
    options: null,
    answer: "automatyzacja",
    altAnswers: ["automatyzacja", "automatyzacja pracy", "automatyzacja produkcji"],
    explanation: "Automatyzacja polega na zastępowaniu pracy człowieka przez maszyny i przyczynia się do spadku zatrudnienia."
  },
  {
    id: "R06_ZAT_08",
    section: "Struktura zatrudnienia ludności",
    type: "scenario",
    prompt: "W pewnym państwie największa część ludności pracuje w rolnictwie, a usługi mają mały udział. Co najprawdopodobniej mówi to o poziomie rozwoju tego kraju?",
    options: ["Jest słabo rozwinięty", "Jest bardzo wysoko rozwinięty", "Nie ma żadnej gospodarki", "Jest zawsze wyspą", "Ma wyłącznie przemysł hi-tech", "Poziomu rozwoju nie da się powiązać ze strukturą zatrudnienia"],
    answer: 0,
    explanation: "Duży udział zatrudnienia w rolnictwie jest typowy dla państw słabo rozwiniętych.",
    image: "r06_trzy_sektory_gospodarki.jpg"
  },
  {
    id: "R06_ZAT_09",
    section: "Struktura zatrudnienia ludności",
    type: "sort",
    prompt: "Przyporządkuj cechy do sektorów gospodarki.",
    options: null,
    items: ["uprawa roślin", "chów zwierząt", "wydobycie surowców", "masowa produkcja dóbr", "edukacja", "transport"],
    categories: ["rolnictwo", "przemysł", "usługi"],
    answer: {
      "rolnictwo": ["uprawa roślin", "chów zwierząt"],
      "przemysł": ["wydobycie surowców", "masowa produkcja dóbr"],
      "usługi": ["edukacja", "transport"]
    },
    explanation: "Rolnictwo wytwarza żywność, przemysł wydobywa i przetwarza surowce, a usługi obejmują między innymi edukację i transport."
  },
  {
    id: "R06_ZAT_10",
    section: "Struktura zatrudnienia ludności",
    type: "true_false",
    prompt: "Polska jest krajem wysoko rozwiniętym, dlatego większość zatrudnionych pracuje w usługach.",
    options: null,
    answer: true,
    explanation: "W Polsce usługi skupiają około 63% zatrudnionych, co odpowiada strukturze typowej dla kraju wysoko rozwiniętego."
  },

  {
    id: "R06_HARD_01",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz gleby bardzo żyzne i korzystne dla upraw.",
    options: ["Czarnoziemy", "Czarne ziemie", "Mady", "Gleby brunatne", "Gleby piaszczyste"],
    answer: [0, 1, 2, 3],
    explanation: "Do bardzo żyznych gleb należą czarnoziemy, czarne ziemie, mady i gleby brunatne."
  },
  {
    id: "R06_HARD_02",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Jaki odsetek gospodarstw rolnych w Polsce stanowią gospodarstwa prywatne?",
    options: ["59,5%", "79,5%", "89,5%", "95,5%", "99,5%", "100%"],
    answer: 4,
    explanation: "Gospodarstwa prywatne stanowią około 99,5% wszystkich gospodarstw rolnych w Polsce."
  },
  {
    id: "R06_HARD_03",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz roślinę z województwami należącymi do jej głównych obszarów upraw.",
    options: null,
    left: ["Pszenica", "Żyto", "Buraki cukrowe", "Jabłonie"],
    right: ["Opolskie i dolnośląskie", "Zachodniopomorskie, lubuskie i łódzkie", "Kujawsko-pomorskie, wielkopolskie i lubelskie", "Świętokrzyskie i mazowieckie"],
    answer: {
      "Pszenica": "Opolskie i dolnośląskie",
      "Żyto": "Zachodniopomorskie, lubuskie i łódzkie",
      "Buraki cukrowe": "Kujawsko-pomorskie, wielkopolskie i lubelskie",
      "Jabłonie": "Świętokrzyskie i mazowieckie"
    },
    explanation: "Rozmieszczenie upraw zależy od wymagań glebowych i klimatycznych poszczególnych roślin.",
    image: "r06_pszenica_i_zyto.jpg"
  },
  {
    id: "R06_HARD_04",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Jaka część polskich jabłek pochodzi z sadów w okolicy Grójca?",
    options: ["Około 10%", "Około 20%", "Około 30%", "Około 40%", "Około 60%", "Około 80%"],
    answer: 3,
    explanation: "Sady w okolicy Grójca dostarczają około 40% polskich jabłek.",
    image: "r06_sad_jabloniowy_grojec.jpg"
  },
  {
    id: "R06_HARD_05",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz zwierzę z przybliżonym pogłowiem w Polsce w 2024 roku.",
    options: null,
    left: ["Drób", "Trzoda chlewna", "Bydło", "Owce"],
    right: ["Ponad 200 mln", "Ponad 9 mln", "Ponad 6 mln", "Ponad 270 tys."],
    answer: {
      "Drób": "Ponad 200 mln",
      "Trzoda chlewna": "Ponad 9 mln",
      "Bydło": "Ponad 6 mln",
      "Owce": "Ponad 270 tys."
    },
    explanation: "Najliczniejszy jest drób, następnie trzoda chlewna i bydło, a pogłowie owiec wynosi ponad 270 tys. sztuk.",
    image: "r06_chow_zwierzat.jpg"
  },
  {
    id: "R06_HARD_06",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz poprawne informacje o największych polskich firmach przemysłowych.",
    options: ["Orlen działa głównie w branży paliwowo-energetycznej", "KGHM produkuje miedź i srebro", "Grupa Azoty produkuje nawozy rolnicze", "WB Electronics rozwija elektronikę wojskową", "PGE jest firmą włókienniczą"],
    answer: [0, 1, 2, 3],
    explanation: "Orlen, KGHM, Grupa Azoty i WB Electronics reprezentują odpowiednio paliwa i energię, metale, chemię oraz przemysł hi-tech; PGE działa w energetyce."
  },
  {
    id: "R06_HARD_07",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz miejscowość z obiektem lub surowcem energetycznym.",
    options: null,
    left: ["Bełchatów", "Pątnów", "Bogatynia", "Solina", "Chochołów"],
    right: ["Największa elektrownia cieplna i kopalnia węgla brunatnego", "Elektrownia przy złożu węgla brunatnego koło Konina", "Elektrownia przy kopalni węgla brunatnego", "Duża elektrownia wodna na Sanie", "Termy zasilane wodami geotermalnymi"],
    answer: {
      "Bełchatów": "Największa elektrownia cieplna i kopalnia węgla brunatnego",
      "Pątnów": "Elektrownia przy złożu węgla brunatnego koło Konina",
      "Bogatynia": "Elektrownia przy kopalni węgla brunatnego",
      "Solina": "Duża elektrownia wodna na Sanie",
      "Chochołów": "Termy zasilane wodami geotermalnymi"
    },
    explanation: "Różne obiekty energetyczne powstały tam, gdzie występują odpowiednie złoża, rzeki lub wody termalne.",
    image: "r06_elektrownia_i_kopalnia_belchatow.jpg"
  },
  {
    id: "R06_HARD_08",
    section: "Super trudne",
    type: "scenario",
    prompt: "Elektrownia ma dwa zbiorniki na różnych wysokościach. Magazynuje energię, pompując wodę do górnego zbiornika, a wytwarza prąd, gdy woda spływa w dół przez turbiny. Gdzie w Polsce znajduje się taki obiekt?",
    options: ["W Żarnowcu", "W Solinie", "W Bełchatowie", "W Choczewie", "W Uniejowie", "W Bogatyni"],
    answer: 0,
    explanation: "Elektrownia szczytowo-pompowa w Żarnowcu magazynuje energię dzięki dwóm zbiornikom położonym na różnych wysokościach.",
    image: "r06_elektrownia_szczytowo_pompowa_zarnowiec.jpg"
  },
  {
    id: "R06_HARD_09",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Wskaż państwo niepasujące do pozostałych dostawców gazu ziemnego do Polski w 2025 roku: Norwegia, USA, Katar, Algieria, Kazachstan.",
    options: null,
    answer: "Kazachstan",
    explanation: "Norwegia, USA, Katar i Algieria były wymienione jako główni dostawcy gazu ziemnego, natomiast Kazachstan jako główny dostawca węgla kamiennego."
  },
  {
    id: "R06_HARD_10",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Dwa największe polskie porty morskie znajdują się w __________ i __________.",
    options: null,
    answer: ["Gdańsku", "Gdyni"],
    altAnswers: [["Gdańsku", "Gdańsk", "gdansku", "gdansk"], ["Gdyni", "Gdynia", "gdyni", "gdynia"]],
    explanation: "Porty w Gdańsku i Gdyni należą do największych w Polsce i w basenie Morza Bałtyckiego.",
    image: "r06_port_trojmiasto.jpg"
  },
  {
    id: "R06_HARD_11",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż modele struktury zatrudnienia w kolejności typowej dla przechodzenia od słabego do wysokiego poziomu rozwoju.",
    options: null,
    items: ["Dominacja usług", "Duży udział przemysłu", "Dominacja rolnictwa"],
    answer: ["Dominacja rolnictwa", "Duży udział przemysłu", "Dominacja usług"],
    explanation: "W krajach słabo rozwiniętych dominuje rolnictwo, w przechodzących do wyższego poziomu rośnie przemysł, a w wysoko rozwiniętych dominują usługi."
  },
  {
    id: "R06_HARD_12",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz sektor z dokładnym udziałem w strukturze zatrudnienia Polski w 2023 roku.",
    options: null,
    left: ["Rolnictwo", "Przemysł", "Usługi"],
    right: ["7,61%", "29,64%", "62,75%"],
    answer: {
      "Rolnictwo": "7,61%",
      "Przemysł": "29,64%",
      "Usługi": "62,75%"
    },
    explanation: "W 2023 roku usługi skupiały 62,75% zatrudnionych, przemysł 29,64%, a rolnictwo 7,61%."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r06",
  number: 4,
  title: "Gospodarka Polski",
  icon: "🏭",
  sectionOrder: [
    "Warunki rozwoju rolnictwa",
    "Produkcja rolnicza",
    "Rozwój przemysłu",
    "Energetyka",
    "Usługi i transport",
    "Struktura zatrudnienia ludności"
  ],
  sectionIcons: {
    "Warunki rozwoju rolnictwa": "🌱",
    "Produkcja rolnicza": "🌾",
    "Rozwój przemysłu": "🏭",
    "Energetyka": "⚡",
    "Usługi i transport": "🚆",
    "Struktura zatrudnienia ludności": "👷"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
