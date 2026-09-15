// Skróty sekcji (do identyfikatorów ćwiczeń):
//   ROS  = Wojny z Rosją
//   SZW  = Wojny ze Szwecją
//   KOZ  = Powstanie Chmielnickiego
//   TUR  = Wojny z Turcją
//   KRY  = Kryzys Rzeczypospolitej
//   BAR  = Barok i sarmatyzm
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R03_ROS_01",
    section: "Wojny z Rosją",
    type: "single_choice",
    prompt: "Dlaczego car Iwan Groźny dążył do zdobycia dostępu do Morza Bałtyckiego?",
    options: [
      "Chciał rozwinąć handel morski Rosji",
      "Chciał przenieść stolicę Rosji do Rygi",
      "Chciał podporządkować sobie Szwecję",
      "Chciał zająć kopalnie soli w Wieliczce",
      "Chciał zdobyć ujście Dunaju",
      "Chciał odciąć Turcję od Morza Czarnego"
    ],
    answer: 0,
    explanation: "Dostęp do portów nad Bałtykiem dawał Moskwie szansę na rozwój handlu morskiego."
  },
  {
    id: "R03_ROS_02",
    section: "Wojny z Rosją",
    type: "multi_select",
    prompt: "Zaznacz elementy wyposażenia lub uzbrojenia piechoty wybranieckiej.",
    options: ["szabla", "strzelba", "topór", "kopia husarska", "łuk refleksyjny", "pika janczarska"],
    answer: [0, 1, 2],
    explanation: "Piechurzy wybranieccy używali przede wszystkim szabli i strzelb, a także toporów przydatnych przy budowie umocnień i obozów."
  },
  {
    id: "R03_ROS_03",
    section: "Wojny z Rosją",
    type: "sequence",
    prompt: "Ułóż działania Stefana Batorego i ich finał w porządku chronologicznym.",
    options: null,
    items: ["Oblężenie Pskowa", "Zdobycie Wielkich Łuków", "Rozejm w Jamie Zapolskim", "Zdobycie Połocka"],
    answer: ["Zdobycie Połocka", "Zdobycie Wielkich Łuków", "Oblężenie Pskowa", "Rozejm w Jamie Zapolskim"],
    explanation: "W wyprawach Batorego zdobyto Połock i Wielkie Łuki, potem oblegano Psków, a w 1582 roku zawarto rozejm w Jamie Zapolskim.",
    image: "r03_batory_pod_pskowem.jpg"
  },
  {
    id: "R03_ROS_04",
    section: "Wojny z Rosją",
    type: "riddle",
    prompt: "Jak nazywała się zbrojna wyprawa polskich magnatów do Rosji w 1604 roku popierająca Dymitra?",
    options: null,
    answer: "dymitriada",
    altAnswers: ["dymitriada", "Dymitriada"],
    explanation: "Wyprawę polskich magnatów wspierających Dymitra Samozwańca nazwano dymitriadą."
  },
  {
    id: "R03_ROS_05",
    section: "Wojny z Rosją",
    type: "true_false",
    prompt: "Po około roku rządów Dymitra Samozwańca wybuchł bunt, w którym zginął on i otaczający go Polacy, a carem został Wasyl Szujski.",
    options: null,
    answer: true,
    explanation: "Rządy Dymitra szybko wywołały sprzeciw części Rosjan. Po jego śmierci nowym carem został Wasyl Szujski."
  },
  {
    id: "R03_ROS_06",
    section: "Wojny z Rosją",
    type: "scenario",
    prompt: "Jest rok 1610. Wojska koronne dowodzone przez Stanisława Żółkiewskiego napotykają znacznie liczniejszego przeciwnika, lecz dzięki ciężkozbrojnej jeździe odnoszą wielkie zwycięstwo i otwierają sobie drogę na Moskwę. O jaką bitwę chodzi?",
    options: ["pod Kłuszynem", "pod Kircholmem", "pod Cecorą", "pod Warką", "pod Beresteczkiem", "pod Wiedniem"],
    answer: 0,
    explanation: "W 1610 roku pod Kłuszynem wojska Żółkiewskiego, wspierane przez husarię, pokonały przeważające siły rosyjskie.",
    image: "r03_husaria.jpg"
  },
  {
    id: "R03_ROS_07",
    section: "Wojny z Rosją",
    type: "match",
    prompt: "Połącz wydarzenie z rokiem.",
    options: null,
    left: ["Rozejm w Jamie Zapolskim", "Bitwa pod Kłuszynem", "Hołd Szujskich w Warszawie", "Pokój w Polanowie"],
    right: ["1611", "1634", "1582", "1610"],
    answer: {
      "Rozejm w Jamie Zapolskim": "1582",
      "Bitwa pod Kłuszynem": "1610",
      "Hołd Szujskich w Warszawie": "1611",
      "Pokój w Polanowie": "1634"
    },
    explanation: "Rozejm w Jamie Zapolskim podpisano w 1582 roku, Kłuszyn rozegrano w 1610 roku, hołd Szujskich odbył się w 1611 roku, a pokój w Polanowie zawarto w 1634 roku."
  },
  {
    id: "R03_ROS_08",
    section: "Wojny z Rosją",
    type: "fill_in",
    prompt: "Po pokoju w Polanowie Rzeczpospolita utrzymała ziemię __________, __________ i __________.",
    options: null,
    answer: ["smoleńską", "czernihowską", "siewierską"],
    altAnswers: [
      ["smoleńską", "smolenską", "ziemię smoleńską"],
      ["czernihowską", "czernichowską", "ziemię czernihowską"],
      ["siewierską", "ziemię siewierską"]
    ],
    explanation: "Pokój w Polanowie z 1634 roku potwierdził wcześniejsze zdobycze Rzeczypospolitej: ziemię smoleńską, czernihowską i siewierską."
  },
  {
    id: "R03_ROS_09",
    section: "Wojny z Rosją",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Połock, Wielkie Łuki, Psków, Wiedeń.",
    options: null,
    answer: "Wiedeń",
    explanation: "Połock, Wielkie Łuki i Psków były celami wypraw Stefana Batorego przeciw Rosji. Wiedeń wiąże się z wojną z Turcją."
  },
  {
    id: "R03_SZW_01",
    section: "Wojny ze Szwecją",
    type: "single_choice",
    prompt: "Który zestaw najlepiej wskazuje dwie główne przyczyny wojen polsko-szwedzkich na początku XVII wieku?",
    options: [
      "Spór Wazów o tron Szwecji oraz rywalizacja o panowanie nad Bałtykiem",
      "Spór o tron Rosji oraz rywalizacja o Mołdawię",
      "Najazdy tatarskie oraz konflikt o Podole",
      "Powstanie kozackie oraz rywalizacja o Kijów",
      "Spór o Śląsk oraz konflikt o ujście Dunaju",
      "Rywalizacja o Czechy oraz walka o Inflanty z Turcją"
    ],
    answer: 0,
    explanation: "Wojny ze Szwecją wynikały z roszczeń polskich Wazów do szwedzkiej korony oraz ze szwedzkich dążeń do opanowania wybrzeży Bałtyku."
  },
  {
    id: "R03_SZW_02",
    section: "Wojny ze Szwecją",
    type: "true_false",
    prompt: "Po buncie w Szwecji Zygmunt III Waza został pozbawiony tamtejszego tronu, a królem został jego stryj Karol IX.",
    options: null,
    answer: true,
    explanation: "Szwedzi nie akceptowali katolickiego Zygmunta III Wazy, pozbawili go władzy i powołali na króla Karola IX."
  },
  {
    id: "R03_SZW_03",
    section: "Wojny ze Szwecją",
    type: "match",
    prompt: "Połącz wydarzenie z właściwym rokiem.",
    options: null,
    left: ["Bitwa pod Kircholmem", "Bitwa pod Oliwą", "Rozejm w Starym Targu", "Rozejm w Sztumskiej Wsi", "Pokój w Oliwie"],
    right: ["1660", "1605", "1635", "1627", "1629"],
    answer: {
      "Bitwa pod Kircholmem": "1605",
      "Bitwa pod Oliwą": "1627",
      "Rozejm w Starym Targu": "1629",
      "Rozejm w Sztumskiej Wsi": "1635",
      "Pokój w Oliwie": "1660"
    },
    explanation: "Kircholm to 1605 rok, Oliwa 1627, Stary Targ 1629, Sztumska Wieś 1635, a pokój kończący potop podpisano w Oliwie w 1660 roku.",
    image: "r03_bitwa_pod_oliwa.jpg"
  },
  {
    id: "R03_SZW_04",
    section: "Wojny ze Szwecją",
    type: "multi_select",
    prompt: "Zaznacz postanowienia niekorzystnego dla Rzeczypospolitej rozejmu w Starym Targu z 1629 roku.",
    options: [
      "Szwecja zatrzymała Inflanty wraz z Rygą",
      "Szwedzi zatrzymali część portów Prus Królewskich i Książęcych",
      "Szwecja uzyskała prawo pobierania cła od statków zawijających do polskich portów",
      "Rzeczpospolita odzyskała całe Inflanty",
      "Szwecja zrzekła się wszystkich portów na Pomorzu",
      "Jan Kazimierz zrzekł się praw do tronu szwedzkiego"
    ],
    answer: [0, 1, 2],
    explanation: "Rozejm w Starym Targu pozostawiał Szwecji Inflanty z Rygą, część portów oraz prawo pobierania ceł od statków zawijających do polskich portów."
  },
  {
    id: "R03_SZW_05",
    section: "Wojny ze Szwecją",
    type: "scenario",
    prompt: "Jest rok 1655. Król Szwecji ocenia, że Rzeczpospolita jest osłabiona, bo jej wojska walczą na Ukrainie z powstaniem kozackim i prowadzą wojnę z Rosją. Co robi Karol X Gustaw?",
    options: [
      "Zrywa rozejm i najeżdża Rzeczpospolitą",
      "Oddaje Rzeczypospolitej Inflanty",
      "Wysyła pomoc wojskową Janowi Kazimierzowi",
      "Zawiera z Polską unię personalną",
      "Atakuje wyłącznie imperium osmańskie",
      "Rezygnuje z tytułu króla Szwecji"
    ],
    answer: 0,
    explanation: "Karol X Gustaw wykorzystał osłabienie Rzeczypospolitej i latem 1655 roku rozpoczął najazd, który przeszedł do historii jako potop szwedzki."
  },
  {
    id: "R03_SZW_06",
    section: "Wojny ze Szwecją",
    type: "sequence",
    prompt: "Ułóż wydarzenia potopu szwedzkiego w porządku chronologicznym.",
    options: null,
    items: ["Wojna podjazdowa od 1656 roku", "Obrona Jasnej Góry", "Pokój w Oliwie", "Rozpoczęcie najazdu szwedzkiego"],
    answer: ["Rozpoczęcie najazdu szwedzkiego", "Obrona Jasnej Góry", "Wojna podjazdowa od 1656 roku", "Pokój w Oliwie"],
    explanation: "Najazd rozpoczął się latem 1655 roku, pod koniec tego roku broniono Jasnej Góry, od 1656 roku oddziały Stefana Czarnieckiego prowadziły wojnę podjazdową, a w 1660 roku podpisano pokój w Oliwie.",
    image: "r03_obrona_jasnej_gory.jpg"
  },
  {
    id: "R03_SZW_07",
    section: "Wojny ze Szwecją",
    type: "riddle",
    prompt: "Jak nazywała się taktyka walki Stefana Czarnieckiego polegająca na niespodziewanych atakach małych oddziałów i unikaniu starcia z głównymi siłami wroga?",
    options: null,
    answer: "wojna podjazdowa",
    altAnswers: ["wojna podjazdowa", "taktyka wojny podjazdowej", "wojny podjazdowej"],
    explanation: "Oddziały Czarnieckiego stosowały wojnę podjazdową: atakowały z zaskoczenia odosobnione siły Szwedów i unikały walnej bitwy.",
    image: "r03_stefan_czarniecki.jpg"
  },
  {
    id: "R03_SZW_08",
    section: "Wojny ze Szwecją",
    type: "multi_select",
    prompt: "Zaznacz skutki potopu szwedzkiego dla Rzeczypospolitej.",
    options: [
      "Spadek liczby ludności z około 11 do około 7 milionów",
      "Zniszczenie wielu miast i wsi oraz załamanie handlu",
      "Utrata zwierzchności nad Prusami Książęcymi",
      "Rabunek księgozbiorów i dzieł sztuki",
      "Odzyskanie całych Inflant",
      "Zniesienie pańszczyzny chłopów"
    ],
    answer: [0, 1, 2, 3],
    explanation: "Potop przyniósł ogromne straty ludnościowe i materialne, utratę zwierzchności nad Prusami Książęcymi oraz rabunek wielu dóbr kultury."
  },
  {
    id: "R03_SZW_09",
    section: "Wojny ze Szwecją",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Kircholm, Oliwa, Warka, Cecora.",
    options: null,
    answer: "Cecora",
    explanation: "Kircholm, Oliwa i Warka wiążą się z wojnami ze Szwecją. Cecora była miejscem klęski wojsk polskich w wojnie z Turcją."
  },
  {
    id: "R03_KOZ_01",
    section: "Powstanie Chmielnickiego",
    type: "single_choice",
    prompt: "Jak nazywano słabo zaludnione tereny południowej Ukrainy, na których osiedlali się Kozacy?",
    options: ["Dzikie Pola", "Prusy Książęce", "Inflanty", "Siedmiogród", "Podole", "Wielkie Łuki"],
    answer: 0,
    explanation: "Południowe tereny Ukrainy określano jako Dzikie Pola, a także Zaporoże."
  },
  {
    id: "R03_KOZ_02",
    section: "Powstanie Chmielnickiego",
    type: "true_false",
    prompt: "Kozacy rejestrowi otrzymywali żołd za służbę wojskową i nie musieli odrabiać pańszczyzny.",
    options: null,
    answer: true,
    explanation: "Wpisanie do rejestru wiązało się z żołdem i zwolnieniem z pańszczyzny."
  },
  {
    id: "R03_KOZ_03",
    section: "Powstanie Chmielnickiego",
    type: "multi_select",
    prompt: "Zaznacz przyczyny wybuchu powstania kozackiego w 1648 roku.",
    options: [
      "Zmniejszenie liczby Kozaków rejestrowych",
      "Narzucanie wolnym Kozakom poddaństwa i pańszczyzny",
      "Naciski na porzucenie prawosławia na rzecz wyznania greckokatolickiego",
      "Nakaz przejścia Kozaków na protestantyzm",
      "Odebranie Kozakom dostępu do Bałtyku",
      "Rozwiązanie armii tureckiej"
    ],
    answer: [0, 1, 2],
    explanation: "Do buntu doprowadziły ograniczenie rejestru, próby podporządkowania Kozaków i obciążenia ich pańszczyzną oraz konflikty religijne."
  },
  {
    id: "R03_KOZ_04",
    section: "Powstanie Chmielnickiego",
    type: "match",
    prompt: "Połącz wydarzenie z jego znaczeniem.",
    options: null,
    left: ["Żółte Wody i Korsuń", "Zbaraż", "Ugoda w Zborowie", "Beresteczko", "Układ w Perejasławiu"],
    right: [
      "Kozackie zwycięstwa z 1648 roku",
      "Zwycięska obrona strony polskiej",
      "Porozumienie z 1649 roku zwiększające rejestr kozacki",
      "Polskie zwycięstwo z 1651 roku",
      "Sojusz Chmielnickiego z Rosją i przyłączenie Ukrainy do Rosji"
    ],
    answer: {
      "Żółte Wody i Korsuń": "Kozackie zwycięstwa z 1648 roku",
      "Zbaraż": "Zwycięska obrona strony polskiej",
      "Ugoda w Zborowie": "Porozumienie z 1649 roku zwiększające rejestr kozacki",
      Beresteczko: "Polskie zwycięstwo z 1651 roku",
      "Układ w Perejasławiu": "Sojusz Chmielnickiego z Rosją i przyłączenie Ukrainy do Rosji"
    },
    explanation: "W 1648 roku Kozacy zwyciężali nad Żółtymi Wodami i pod Korsuniem, Zbaraż obronili Polacy, w 1649 roku zawarto ugodę zborowską, w 1651 roku Polacy wygrali pod Beresteczkiem, a w 1654 roku Chmielnicki związał się z Rosją."
  },
  {
    id: "R03_KOZ_05",
    section: "Powstanie Chmielnickiego",
    type: "fill_in",
    prompt: "W 1654 roku Bohdan Chmielnicki zawarł z Rosjanami układ w __________ o przyłączeniu Ukrainy do __________.",
    options: null,
    answer: ["Perejasławiu", "Rosji"],
    altAnswers: [
      ["Perejasławiu", "Perejaslawiu", "Perejasław"],
      ["Rosji", "Rosja"]
    ],
    explanation: "Układ w Perejasławiu z 1654 roku związał Kozaków z Rosją i zapoczątkował nową wojnę z Rzeczpospolitą."
  },
  {
    id: "R03_KOZ_06",
    section: "Powstanie Chmielnickiego",
    type: "sequence",
    prompt: "Ułóż wydarzenia związane z powstaniem Chmielnickiego i jego następstwami w porządku chronologicznym.",
    options: null,
    items: [
      "Rozejm w Andruszowie",
      "Bitwa pod Beresteczkiem",
      "Wybuch powstania Chmielnickiego",
      "Układ w Perejasławiu",
      "Ugoda w Zborowie"
    ],
    answer: [
      "Wybuch powstania Chmielnickiego",
      "Ugoda w Zborowie",
      "Bitwa pod Beresteczkiem",
      "Układ w Perejasławiu",
      "Rozejm w Andruszowie"
    ],
    explanation: "Powstanie wybuchło w 1648 roku, ugodę zborowską zawarto w 1649, bitwę pod Beresteczkiem stoczono w 1651, układ perejasławski podpisano w 1654, a rozejm w Andruszowie w 1667 roku.",
    image: "r03_kozacy_zaporoscy.jpg"
  },
  {
    id: "R03_KOZ_07",
    section: "Powstanie Chmielnickiego",
    type: "riddle",
    prompt: "Jak brzmiał tytuł władcy tatarskiego, z którym sprzymierzał się Bohdan Chmielnicki?",
    options: null,
    answer: "chan",
    altAnswers: ["chan", "Chan", "chan krymski"],
    explanation: "Władca Tatarów nosił tytuł chana. Chmielnicki kilkakrotnie zawierał sojusz z chanem krymskim."
  },
  {
    id: "R03_KOZ_08",
    section: "Powstanie Chmielnickiego",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: strzelba, szabla, buława, kopia husarska.",
    options: null,
    answer: "kopia husarska",
    explanation: "Strzelba i szabla były używane przez Kozaków, a buława była symbolem władzy starszyzny kozackiej. Kopia husarska należała do wyposażenia husarii."
  },
  {
    id: "R03_KOZ_09",
    section: "Powstanie Chmielnickiego",
    type: "scenario",
    prompt: "Kozak zostaje wpisany do rejestru prowadzonego przez władze Rzeczypospolitej. Jakiej zmiany może się spodziewać?",
    options: [
      "Będzie otrzymywał żołd i nie będzie musiał odrabiać pańszczyzny",
      "Zostanie automatycznie polskim szlachcicem",
      "Otrzyma prawo do tronu kozackiego",
      "Będzie musiał przejść na katolicyzm",
      "Zostanie zwolniony z obowiązku służby wojskowej",
      "Otrzyma własny port nad Bałtykiem"
    ],
    answer: 0,
    explanation: "Kozacy rejestrowi otrzymywali regularną zapłatę za służbę i byli zwolnieni z pańszczyzny."
  },
  {
    id: "R03_TUR_01",
    section: "Wojny z Turcją",
    type: "single_choice",
    prompt: "Skąd rekrutowano chłopców wcielanych do oddziałów janczarów?",
    options: [
      "Z niemuzułmańskich rodzin w podbitych krajach",
      "Wyłącznie z polskiej szlachty",
      "Z kozackich oddziałów rejestrowych",
      "Wyłącznie z rodzin tatarskich",
      "Z rosyjskich bojarów",
      "Z austriackich rodów książęcych"
    ],
    answer: 0,
    explanation: "Do janczarów wcielano siłą kilkuletnich niemuzułmańskich chłopców z podbitych krajów, nawracano ich na islam i szkolono do służby.",
    image: "r03_janczarzy.jpg"
  },
  {
    id: "R03_TUR_02",
    section: "Wojny z Turcją",
    type: "match",
    prompt: "Połącz wydarzenie z właściwym opisem.",
    options: null,
    left: ["Cecora 1620", "Chocim 1621", "Buczacz 1672", "Chocim 1673", "Wiedeń 1683"],
    right: [
      "Klęska wojsk polskich i śmierć Stanisława Żółkiewskiego",
      "Obrona twierdzy i powstrzymanie tureckiego najazdu",
      "Traktat nakładający na Rzeczpospolitą haracz",
      "Zwycięstwo Jana Sobieskiego nad Turkami",
      "Rozbicie armii turecko-tatarskiej przez siły sprzymierzone"
    ],
    answer: {
      "Cecora 1620": "Klęska wojsk polskich i śmierć Stanisława Żółkiewskiego",
      "Chocim 1621": "Obrona twierdzy i powstrzymanie tureckiego najazdu",
      "Buczacz 1672": "Traktat nakładający na Rzeczpospolitą haracz",
      "Chocim 1673": "Zwycięstwo Jana Sobieskiego nad Turkami",
      "Wiedeń 1683": "Rozbicie armii turecko-tatarskiej przez siły sprzymierzone"
    },
    explanation: "Cecora była klęską, Chocim w 1621 roku powstrzymał najazd, Buczacz narzucał haracz, Chocim w 1673 roku przyniósł zwycięstwo Sobieskiego, a Wiedeń w 1683 roku zakończył się klęską armii turecko-tatarskiej."
  },
  {
    id: "R03_TUR_03",
    section: "Wojny z Turcją",
    type: "true_false",
    prompt: "Po obronie Chocimia w 1621 roku pokój przywrócił granicę na Dniestrze, a obie strony zobowiązały się ograniczać najazdy kozackie i tatarskie.",
    options: null,
    answer: true,
    explanation: "Nieudane oblężenie Chocimia skłoniło Turków do pokoju, który przywrócił granicę na Dniestrze i przewidywał powstrzymywanie najazdów z pogranicza."
  },
  {
    id: "R03_TUR_04",
    section: "Wojny z Turcją",
    type: "multi_select",
    prompt: "Zaznacz postanowienia traktatu w Buczaczu z 1672 roku.",
    options: [
      "Oddanie Turcji części Ukrainy",
      "Oddanie Turcji Podola i Kamieńca Podolskiego",
      "Obowiązek płacenia sułtanowi haraczu",
      "Odzyskanie przez Polskę całych Inflant",
      "Przyłączenie Mołdawii do Rzeczypospolitej",
      "Zniesienie wszystkich podatków na wojsko"
    ],
    answer: [0, 1, 2],
    explanation: "Traktat w Buczaczu przewidywał utratę części Ukrainy, Podola i Kamieńca Podolskiego oraz płacenie haraczu sułtanowi."
  },
  {
    id: "R03_TUR_05",
    section: "Wojny z Turcją",
    type: "scenario",
    prompt: "Po odrzuceniu upokarzającego traktatu w Buczaczu sejm uchwala podatki na wojsko. Hetman Jan Sobieski zwycięża Turków pod Chocimiem w 1673 roku. Jaki był ważny skutek polityczny tego sukcesu?",
    options: [
      "Rok później Sobieski został wybrany na króla Polski",
      "Sobieski został carem Rosji",
      "Rzeczpospolita utraciła Kraków",
      "Szwecja oddała Polsce Inflanty",
      "Zlikwidowano urząd hetmana",
      "Sobieski zrzekł się dowództwa i wyjechał do Francji"
    ],
    answer: 0,
    explanation: "Zwycięstwo pod Chocimiem zwiększyło popularność Jana Sobieskiego wśród szlachty i pomogło mu zdobyć koronę w 1674 roku."
  },
  {
    id: "R03_TUR_06",
    section: "Wojny z Turcją",
    type: "fill_in",
    prompt: "Bitwa pod Wiedniem rozegrała się __________ września __________ roku.",
    options: null,
    answer: ["12", "1683"],
    altAnswers: [
      ["12", "12."],
      ["1683", "1683 r.", "1683 roku"]
    ],
    explanation: "Odsiecz wiedeńska zakończyła się zwycięską bitwą 12 września 1683 roku.",
    image: "r03_odsiecz_wiedenska.jpg"
  },
  {
    id: "R03_TUR_07",
    section: "Wojny z Turcją",
    type: "riddle",
    prompt: "Jak nazywali się żołnierze doborowej piechoty stanowiącej podstawę armii tureckiej?",
    options: null,
    answer: "janczarzy",
    altAnswers: ["janczarzy", "Janczarzy", "janczar"],
    explanation: "Janczarzy byli elitarną piechotą imperium osmańskiego, znaną z dyscypliny i wyszkolenia strzeleckiego."
  },
  {
    id: "R03_TUR_08",
    section: "Wojny z Turcją",
    type: "sequence",
    prompt: "Ułóż wydarzenia wojen z Turcją w porządku chronologicznym.",
    options: null,
    items: [
      "Bitwa pod Wiedniem",
      "Pokój kończący wojny z Turcją",
      "Bitwa pod Cecorą",
      "Traktat w Buczaczu",
      "Bitwa pod Chocimiem wygrana przez Jana Sobieskiego",
      "Obrona Chocimia"
    ],
    answer: [
      "Bitwa pod Cecorą",
      "Obrona Chocimia",
      "Traktat w Buczaczu",
      "Bitwa pod Chocimiem wygrana przez Jana Sobieskiego",
      "Bitwa pod Wiedniem",
      "Pokój kończący wojny z Turcją"
    ],
    explanation: "Kolejność wyznaczają lata 1620, 1621, 1672, 1673, 1683 i 1699."
  },
  {
    id: "R03_TUR_09",
    section: "Wojny z Turcją",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Stanisław Żółkiewski, Jan Karol Chodkiewicz, Jan Sobieski, Stefan Czarniecki.",
    options: null,
    answer: "Stefan Czarniecki",
    explanation: "Żółkiewski, Chodkiewicz i Sobieski dowodzili w kluczowych walkach z Turcją. Czarniecki zasłynął przede wszystkim w wojnie ze Szwecją."
  },
  {
    id: "R03_KRY_01",
    section: "Kryzys Rzeczypospolitej",
    type: "single_choice",
    prompt: "Jak zmieniła się liczba ludności Rzeczypospolitej wskutek wojen i epidemii XVII wieku?",
    options: [
      "Spadła z około 11 milionów do około 7 milionów",
      "Wzrosła z około 7 milionów do około 11 milionów",
      "Spadła z około 20 milionów do około 18 milionów",
      "Nie zmieniła się",
      "Wzrosła dwukrotnie",
      "Spadła do około 2 milionów"
    ],
    answer: 0,
    explanation: "Wojny, głód i epidemie doprowadziły do spadku liczby mieszkańców z około 11 do około 7 milionów."
  },
  {
    id: "R03_KRY_02",
    section: "Kryzys Rzeczypospolitej",
    type: "multi_select",
    prompt: "Zaznacz gospodarcze skutki XVII-wiecznych wojen dla Rzeczypospolitej.",
    options: [
      "Zniszczenie miast, wsi i folwarków",
      "Pozostawianie części gruntów odłogiem",
      "Załamanie produkcji i handlu zbożem",
      "Zubożenie mieszczaństwa i spadek znaczenia miast",
      "Nagły wzrost cen polskiego zboża w Europie Zachodniej",
      "Całkowite zniesienie pańszczyzny"
    ],
    answer: [0, 1, 2, 3],
    explanation: "Wojny przyniosły zniszczenia, nieuprawiane grunty, kryzys produkcji i handlu oraz zubożenie mieszczaństwa. Szlachta często zwiększała chłopom pańszczyznę.",
    image: "r03_krzyztopor.jpg"
  },
  {
    id: "R03_KRY_03",
    section: "Kryzys Rzeczypospolitej",
    type: "true_false",
    prompt: "Zastosowanie liberum veto przez jednego posła mogło zakończyć obrady sejmu i unieważnić dotychczasowe postanowienia.",
    options: null,
    answer: true,
    explanation: "Zasada liberum veto wymagała jednomyślności. Sprzeciw jednego posła zrywał obrady i unieważniał wcześniejsze uchwały."
  },
  {
    id: "R03_KRY_04",
    section: "Kryzys Rzeczypospolitej",
    type: "fill_in",
    prompt: "Po raz pierwszy sejm został zerwany w roku __________ przez posła __________.",
    options: null,
    answer: ["1652", "Władysława Sicińskiego"],
    altAnswers: [
      ["1652", "1652 r.", "1652 roku"],
      ["Władysława Sicińskiego", "Władysław Siciński", "Sicińskiego", "Siciński"]
    ],
    explanation: "W 1652 roku Władysław Siciński po raz pierwszy doprowadził do zerwania sejmu przez zastosowanie liberum veto."
  },
  {
    id: "R03_KRY_05",
    section: "Kryzys Rzeczypospolitej",
    type: "scenario",
    prompt: "Magnat przekupuje posła, aby ten swoim sprzeciwem zakończył obrady sejmu i zablokował reformę państwa. Z jakiej zasady korzysta poseł?",
    options: ["liberum veto", "wolnej elekcji", "pacta conventa", "rokoszu", "pańszczyzny", "żołdu"],
    answer: 0,
    explanation: "Liberum veto pozwalało jednemu posłowi zerwać sejm. Z czasem mechanizm ten bywał wykorzystywany przez magnatów i obce dwory."
  },
  {
    id: "R03_KRY_06",
    section: "Kryzys Rzeczypospolitej",
    type: "riddle",
    prompt: "Jak nazywało się zbrojne wystąpienie szlachty przeciw królowi?",
    options: null,
    answer: "rokosz",
    altAnswers: ["rokosz", "Rokosz"],
    explanation: "Rokosz był zbrojnym wystąpieniem szlachty przeciw królowi."
  },
  {
    id: "R03_KRY_07",
    section: "Kryzys Rzeczypospolitej",
    type: "sequence",
    prompt: "Ułóż wydarzenia kryzysu ustrojowego w porządku chronologicznym.",
    options: null,
    items: [
      "Abdykacja Jana Kazimierza",
      "Wybuch rokoszu Lubomirskiego",
      "Pierwsze zerwanie sejmu przez liberum veto",
      "Zakończenie wojny domowej ugodą"
    ],
    answer: [
      "Pierwsze zerwanie sejmu przez liberum veto",
      "Wybuch rokoszu Lubomirskiego",
      "Zakończenie wojny domowej ugodą",
      "Abdykacja Jana Kazimierza"
    ],
    explanation: "Pierwsze zerwanie sejmu nastąpiło w 1652 roku, rokosz Lubomirskiego wybuchł w 1665, wojna domowa zakończyła się w 1666 roku, a Jan Kazimierz abdykował w 1668 roku."
  },
  {
    id: "R03_KRY_08",
    section: "Kryzys Rzeczypospolitej",
    type: "match",
    prompt: "Połącz pojęcie z wyjaśnieniem.",
    options: null,
    left: ["liberum veto", "rokosz", "abdykacja", "banicja"],
    right: [
      "Sprzeciw posła zrywający obrady sejmu",
      "Zbrojne wystąpienie szlachty przeciw królowi",
      "Dobrowolne zrzeczenie się tronu",
      "Wygnanie z kraju"
    ],
    answer: {
      "liberum veto": "Sprzeciw posła zrywający obrady sejmu",
      rokosz: "Zbrojne wystąpienie szlachty przeciw królowi",
      abdykacja: "Dobrowolne zrzeczenie się tronu",
      banicja: "Wygnanie z kraju"
    },
    explanation: "Liberum veto zrywało sejm, rokosz był buntem szlachty, abdykacja oznaczała rezygnację z tronu, a banicja wygnanie."
  },
  {
    id: "R03_KRY_09",
    section: "Kryzys Rzeczypospolitej",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Inflanty, wschodnia Ukraina, Prusy Książęce, Mazowsze.",
    options: null,
    answer: "Mazowsze",
    explanation: "W XVII wieku Rzeczpospolita utraciła Inflanty i wschodnią Ukrainę oraz zwierzchność nad Prusami Książęcymi. Mazowsze pozostało częścią państwa."
  },
  {
    id: "R03_BAR_01",
    section: "Barok i sarmatyzm",
    type: "single_choice",
    prompt: "Od jakiego słowa pochodzi nazwa epoki baroku?",
    options: [
      "barroco, oznaczającego perłę o nieregularnym kształcie",
      "basilica, oznaczającego pałac królewski",
      "forum, oznaczającego rynek miejski",
      "sarmata, oznaczającego polskiego szlachcica",
      "opera, oznaczającego śpiew dworski",
      "ornamentum, oznaczającego zbroję"
    ],
    answer: 0,
    explanation: "Nazwa baroku wywodzi się od słowa barroco, oznaczającego perłę o nieregularnym kształcie."
  },
  {
    id: "R03_BAR_02",
    section: "Barok i sarmatyzm",
    type: "multi_select",
    prompt: "Zaznacz cechy typowe dla sztuki barokowej.",
    options: [
      "Bogactwo dekoracji",
      "Dynamiczne kompozycje i pozy",
      "Złocenia, rzeźby i malowidła",
      "Dążenie do wywarcia silnego wrażenia na widzu",
      "Surowe wnętrza pozbawione ozdób",
      "Całkowita rezygnacja z monumentalnych budowli"
    ],
    answer: [0, 1, 2, 3],
    explanation: "Barok wyróżniały przepych, dynamiczna kompozycja, liczne dekoracje oraz świadome oddziaływanie na emocje widza."
  },
  {
    id: "R03_BAR_03",
    section: "Barok i sarmatyzm",
    type: "true_false",
    prompt: "Styl barokowy rozpowszechnił się od końca XVI wieku i trwał do około połowy XVIII wieku, obejmując także posiadłości hiszpańskie i portugalskie w Nowym Świecie.",
    options: null,
    answer: true,
    explanation: "Barok rozwinął się pod koniec XVI wieku i trwał do połowy XVIII wieku, a jego zasięg wykraczał poza Europę.",
    image: "r03_stroj_sarmacki.jpg"
  },
  {
    id: "R03_BAR_04",
    section: "Barok i sarmatyzm",
    type: "match",
    prompt: "Połącz dzieło lub obiekt z właściwą informacją.",
    options: null,
    left: ["Pokłon Trzech Króli", "Dawid", "Pałac w Wersalu", "Organy w bazylice w Leżajsku"],
    right: [
      "Obraz Petera Paula Rubensa",
      "Rzeźba Giovanniego Berniniego",
      "Rezydencja królów Francji",
      "Jeden z najwspanialszych barokowych instrumentów w Europie"
    ],
    answer: {
      "Pokłon Trzech Króli": "Obraz Petera Paula Rubensa",
      Dawid: "Rzeźba Giovanniego Berniniego",
      "Pałac w Wersalu": "Rezydencja królów Francji",
      "Organy w bazylice w Leżajsku": "Jeden z najwspanialszych barokowych instrumentów w Europie"
    },
    explanation: "Rubens namalował Pokłon Trzech Króli, Bernini wyrzeźbił Dawida, Wersal był siedzibą królów Francji, a organy leżajskie należą do najwspanialszych instrumentów barokowych."
  },
  {
    id: "R03_BAR_05",
    section: "Barok i sarmatyzm",
    type: "fill_in",
    prompt: "Kościół Il Gesù w Rzymie powstał na zamówienie zakonu __________ i stał się wzorem barokowej __________.",
    options: null,
    answer: ["jezuitów", "świątyni"],
    altAnswers: [
      ["jezuitów", "jezuici", "zakonu jezuitów"],
      ["świątyni", "świątynia", "kościoła", "kościół"]
    ],
    explanation: "Rzymski kościół Il Gesù wzniesiono dla jezuitów i stał się on wzorem barokowej świątyni."
  },
  {
    id: "R03_BAR_06",
    section: "Barok i sarmatyzm",
    type: "scenario",
    prompt: "Katolicka świątynia ma konkurować z prostymi zborami protestanckimi. Projektanci wybierają monumentalną bryłę, bogate zdobienia, złocenia i pełne przepychu wnętrze. Jaki był główny cel takiego rozwiązania?",
    options: [
      "Pokazać potęgę Kościoła, zachwycić wiernych i umacniać ich wiarę",
      "Zniechęcić wiernych do udziału w nabożeństwach",
      "Naśladować wyłącznie architekturę obronną",
      "Ukryć religijny charakter budynku",
      "Ograniczyć sztukę do prostych form geometrycznych",
      "Zastąpić wszystkie nabożeństwa przedstawieniami operowymi"
    ],
    answer: 0,
    explanation: "Barokowy przepych w świątyniach katolickich miał oddziaływać na emocje, ukazywać potęgę Kościoła i wzmacniać przywiązanie do wiary.",
    image: "r03_kosciol_wizytek.jpg"
  },
  {
    id: "R03_BAR_07",
    section: "Barok i sarmatyzm",
    type: "riddle",
    prompt: "Jak nazywano szlaki procesyjne z kaplicami przedstawiającymi stacje Męki Pańskiej?",
    options: null,
    answer: "kalwarie",
    altAnswers: ["kalwarie", "kalwaria", "Kalwarie", "Kalwaria"],
    explanation: "Kalwarie były szlakami procesyjnymi z kaplicami przedstawiającymi kolejne stacje Męki Pańskiej."
  },
  {
    id: "R03_BAR_08",
    section: "Barok i sarmatyzm",
    type: "multi_select",
    prompt: "Zaznacz elementy męskiego stroju sarmackiego.",
    options: ["żupan", "kontusz", "pas kontuszowy", "karabela", "szyszak husarski", "pika"],
    answer: [0, 1, 2, 3],
    explanation: "Do charakterystycznych elementów stroju sarmackiego należały żupan, kontusz, szeroki pas kontuszowy i karabela."
  },
  {
    id: "R03_BAR_09",
    section: "Barok i sarmatyzm",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: żupan, kontusz, pas kontuszowy, karwasze.",
    options: null,
    answer: "karwasze",
    explanation: "Żupan, kontusz i pas kontuszowy były elementami stroju sarmackiego. Karwasze należały do ochronnego wyposażenia husarza."
  },
  {
    id: "R03_HARD_01",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    options: null,
    items: [
      "Bitwa pod Cecorą",
      "Bitwa pod Kłuszynem",
      "Rozejm w Jamie Zapolskim",
      "Bitwa pod Oliwą",
      "Bitwa pod Kircholmem",
      "Wybuch powstania Chmielnickiego"
    ],
    answer: [
      "Rozejm w Jamie Zapolskim",
      "Bitwa pod Kircholmem",
      "Bitwa pod Kłuszynem",
      "Bitwa pod Cecorą",
      "Bitwa pod Oliwą",
      "Wybuch powstania Chmielnickiego"
    ],
    explanation: "Kolejność wyznaczają lata 1582, 1605, 1610, 1620, 1627 i 1648."
  },
  {
    id: "R03_HARD_02",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz dowódcę z wydarzeniem, z którym jest szczególnie związany.",
    options: null,
    left: ["Jan Zamoyski", "Stanisław Żółkiewski", "Jan Karol Chodkiewicz", "Stefan Czarniecki", "Jan III Sobieski"],
    right: [
      "Wyprawy Stefana Batorego na Rosję",
      "Zwycięstwo pod Kłuszynem",
      "Zwycięstwo pod Kircholmem",
      "Wojna podjazdowa i zwycięstwo pod Warką",
      "Odsiecz wiedeńska"
    ],
    answer: {
      "Jan Zamoyski": "Wyprawy Stefana Batorego na Rosję",
      "Stanisław Żółkiewski": "Zwycięstwo pod Kłuszynem",
      "Jan Karol Chodkiewicz": "Zwycięstwo pod Kircholmem",
      "Stefan Czarniecki": "Wojna podjazdowa i zwycięstwo pod Warką",
      "Jan III Sobieski": "Odsiecz wiedeńska"
    },
    explanation: "Zamoyski współpracował z Batorym, Żółkiewski dowodził pod Kłuszynem, Chodkiewicz pod Kircholmem, Czarniecki walczył podjazdowo ze Szwedami, a Sobieski dowodził odsieczą Wiednia."
  },
  {
    id: "R03_HARD_03",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz porozumienia, których skutkiem była zmiana lub potwierdzenie przynależności terytoriów Rzeczypospolitej.",
    options: [
      "Pokój w Polanowie",
      "Rozejm w Andruszowie",
      "Pokój w Oliwie",
      "Traktat w Buczaczu",
      "Bitwa pod Kłuszynem",
      "Obrona Jasnej Góry"
    ],
    answer: [0, 1, 2, 3],
    explanation: "Polanów potwierdził zdobycze na wschodzie, Andruszów podzielił Ukrainę, Oliwa pozostawiła większość Inflant Szwecji, a Buczacz oddawał Turcji część Ukrainy i Podole."
  },
  {
    id: "R03_HARD_04",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Rozejm w Starym Targu zawarto w __________ roku, a korzystniejsze porozumienie w Sztumskiej Wsi w __________ roku.",
    options: null,
    answer: ["1629", "1635"],
    altAnswers: [
      ["1629", "1629 r.", "1629 roku"],
      ["1635", "1635 r.", "1635 roku"]
    ],
    explanation: "Stary Targ to 1629 rok, a Sztumska Wieś 1635 rok."
  },
  {
    id: "R03_HARD_05",
    section: "Super trudne",
    type: "scenario",
    prompt: "Po zwycięstwie pod Kłuszynem rosyjscy bojarzy proponują tron carski królewiczowi Władysławowi. Stawiają jednak warunek religijny, którego nie przyjęto. Jaki to warunek?",
    options: [
      "Przejście Władysława z katolicyzmu na prawosławie",
      "Przejście Władysława na islam",
      "Zrzeczenie się przez Władysława chrześcijaństwa",
      "Przyjęcie przez Władysława luteranizmu",
      "Uznanie papieża za cara Rosji",
      "Wprowadzenie w Rosji wyłącznie katolicyzmu"
    ],
    answer: 0,
    explanation: "Bojarzy oczekiwali, że Władysław przejdzie na prawosławie. Propozycję odrzucono, a Zygmunt III Waza sam żądał korony carskiej."
  },
  {
    id: "R03_HARD_06",
    section: "Super trudne",
    type: "true_false",
    prompt: "Chocim był miejscem dwóch ważnych sukcesów Rzeczypospolitej przeciw Turcji: obrony w 1621 roku i zwycięstwa Jana Sobieskiego w 1673 roku.",
    options: null,
    answer: true,
    explanation: "W 1621 roku wojska pod Chocimiem zatrzymały najazd turecki, a w 1673 roku Jan Sobieski odniósł tam kolejne zwycięstwo."
  },
  {
    id: "R03_HARD_07",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Jam Zapolski, Sztumska Wieś, Andruszów, Buczacz, Beresteczko.",
    options: null,
    answer: "Beresteczko",
    explanation: "Jam Zapolski, Sztumska Wieś, Andruszów i Buczacz to miejsca zawarcia porozumień. Beresteczko było miejscem bitwy."
  },
  {
    id: "R03_HARD_08",
    section: "Super trudne",
    type: "riddle",
    prompt: "Jak nazywał się wielki wezyr, który dowodził stutysięczną armią turecką oblegającą Wiedeń w 1683 roku?",
    options: null,
    answer: "Kara Mustafa",
    altAnswers: ["Kara Mustafa", "Mustafa Kara", "kara mustafa"],
    explanation: "Wielki wezyr Kara Mustafa dowodził armią turecką oblegającą Wiedeń przed odsieczą Jana III Sobieskiego."
  },
  {
    id: "R03_HARD_09",
    section: "Super trudne",
    type: "sort",
    prompt: "Przyporządkuj wydarzenia do przeciwnika lub strony konfliktu Rzeczypospolitej.",
    options: null,
    items: ["Kłuszyn", "Jam Zapolski", "Kircholm", "Oliwa 1627", "Cecora", "Wiedeń 1683", "Żółte Wody", "Beresteczko"],
    categories: ["Rosja", "Szwecja", "Turcja", "Kozacy"],
    answer: {
      Rosja: ["Kłuszyn", "Jam Zapolski"],
      Szwecja: ["Kircholm", "Oliwa 1627"],
      Turcja: ["Cecora", "Wiedeń 1683"],
      Kozacy: ["Żółte Wody", "Beresteczko"]
    },
    explanation: "Kłuszyn i Jam Zapolski dotyczą Rosji, Kircholm i Oliwa Szwecji, Cecora i Wiedeń Turcji, a Żółte Wody i Beresteczko powstania kozackiego."
  },
  {
    id: "R03_HARD_10",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż wydarzenia z lat 1648-1667 w kolejności chronologicznej.",
    options: null,
    items: [
      "Rozejm w Andruszowie",
      "Początek potopu szwedzkiego",
      "Układ w Perejasławiu",
      "Śluby lwowskie",
      "Wybuch powstania Chmielnickiego",
      "Pokój w Oliwie"
    ],
    answer: [
      "Wybuch powstania Chmielnickiego",
      "Układ w Perejasławiu",
      "Początek potopu szwedzkiego",
      "Śluby lwowskie",
      "Pokój w Oliwie",
      "Rozejm w Andruszowie"
    ],
    explanation: "Daty tych wydarzeń to kolejno 1648, 1654, 1655, 1656, 1660 i 1667."
  },
  {
    id: "R03_HARD_11",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Które zdanie poprawnie porównuje pokój w Polanowie z 1634 roku i pokój w Oliwie z 1660 roku?",
    options: [
      "Polanów potwierdził wschodnie zdobycze Rzeczypospolitej, a Oliwa pozostawiła większość Inflant Szwecji i zakończyła roszczenia Jana Kazimierza do szwedzkiego tronu",
      "Oba traktaty oddawały Rzeczypospolitej całe Inflanty",
      "Polanów kończył wojnę z Turcją, a Oliwa powstanie kozackie",
      "Polanów wprowadzał haracz dla Turcji, a Oliwa przyłączała Kijów do Polski",
      "Oba traktaty dotyczyły wyłącznie spraw religijnych",
      "Oliwa potwierdzała zdobycie Smoleńska, a Polanów utratę Prus Książęcych"
    ],
    answer: 0,
    explanation: "Pokój w Polanowie potwierdził ziemię smoleńską, czernihowską i siewierską przy Rzeczypospolitej. Pokój w Oliwie kończył potop, pozostawiał większość Inflant Szwecji i wymagał od Jana Kazimierza zrzeczenia się pretensji do jej tronu."
  },
  {
    id: "R03_HARD_12",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz zjawiska, które osłabiały funkcjonowanie państwa w drugiej połowie XVII wieku.",
    options: [
      "Pusty skarbiec i brak pieniędzy na wojsko",
      "Nadużywanie liberum veto",
      "Przekupywanie posłów przez magnatów i obce dwory",
      "Rokosze przeciw próbom reform królewskich",
      "Stały wzrost liczebności dobrze opłacanej armii",
      "Pełna zgoda szlachty na reformy ustroju"
    ],
    answer: [0, 1, 2, 3],
    explanation: "Kryzys pogłębiały problemy finansowe, zrywanie sejmów, ingerencja magnatów i obcych dworów oraz sprzeciw części szlachty wobec reform."
  },
  {
    id: "R03_HARD_13",
    section: "Super trudne",
    type: "fill_in",
    prompt: "W XVII wieku liczba mieszkańców Rzeczypospolitej spadła z około __________ milionów do około __________ milionów, a państwo utraciło około __________ swojego terytorium.",
    options: null,
    answer: ["11", "7", "jednej trzeciej"],
    altAnswers: [
      ["11", "jedenastu"],
      ["7", "siedmiu"],
      ["jednej trzeciej", "1/3", "jedną trzecią"]
    ],
    explanation: "Wojny i epidemie zmniejszyły liczbę ludności z około 11 do 7 milionów, a Rzeczpospolita utraciła około jednej trzeciej terytorium."
  },
  {
    id: "R03_HARD_14",
    section: "Super trudne",
    type: "scenario",
    prompt: "Architekt projektuje świątynię katolicką na przełomie XVI i XVII wieku. Chce odróżnić ją od surowych zborów protestanckich i wzmocnić oddziaływanie na wiernych. Który zestaw rozwiązań najlepiej odpowiada temu celowi?",
    options: [
      "Monumentalna bryła, bogate zdobienia, dynamiczne rzeźby i złocenia",
      "Surowe ściany, brak dekoracji i ograniczenie światła",
      "Wyłącznie drewniana palisada i wieże obronne",
      "Niewielki budynek bez rzeźb i malowideł",
      "Prosta hala pozbawiona symboli religijnych",
      "Rezygnacja z architektury na rzecz samych tekstów drukowanych"
    ],
    answer: 0,
    explanation: "Barokowe kościoły miały zachwycać rozmachem i dekoracją, pokazywać potęgę Kościoła katolickiego i umacniać wiarę."
  },
  {
    id: "R03_HARD_15",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz pojęcie z jego znaczeniem.",
    options: null,
    left: ["bojar", "hetman", "jasyr", "haracz", "ornament"],
    right: [
      "Możnowładca w dawnej Rosji",
      "Naczelny dowódca armii w dawnej Rzeczypospolitej",
      "Niewola turecka lub tatarska",
      "Danina płacona imperium osmańskiemu",
      "Element zdobniczy stosowany w sztuce"
    ],
    answer: {
      bojar: "Możnowładca w dawnej Rosji",
      hetman: "Naczelny dowódca armii w dawnej Rzeczypospolitej",
      jasyr: "Niewola turecka lub tatarska",
      haracz: "Danina płacona imperium osmańskiemu",
      ornament: "Element zdobniczy stosowany w sztuce"
    },
    explanation: "Bojar był rosyjskim możnowładcą, hetman dowódcą wojskowym, jasyr oznaczał niewolę, haracz daninę, a ornament element dekoracyjny."
  },
  {
    id: "R03_HARD_16",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Około ilu żołnierzy przyprowadził Jan III Sobieski pod Wiedeń w 1683 roku?",
    options: [
      "około 27 tysięcy",
      "około 8 tysięcy",
      "około 50 tysięcy",
      "około 100 tysięcy",
      "około 18 tysięcy",
      "około 200 tysięcy"
    ],
    answer: 0,
    explanation: "Pod Wiedeń przybyło z Janem III Sobieskim około 27 tysięcy żołnierzy. Wojska austriackie liczyły około 18 tysięcy, a oddziały niemieckich sprzymierzeńców około 20 tysięcy.",
    image: "r03_jan_iii_sobieski.jpg"
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r03",
  number: 3,
  title: "W obronie granic Rzeczypospolitej",
  icon: "🛡️",
  sectionOrder: [
    "Wojny z Rosją",
    "Wojny ze Szwecją",
    "Powstanie Chmielnickiego",
    "Wojny z Turcją",
    "Kryzys Rzeczypospolitej",
    "Barok i sarmatyzm"
  ],
  sectionIcons: {
    "Wojny z Rosją": "⚔️",
    "Wojny ze Szwecją": "⛵",
    "Powstanie Chmielnickiego": "🐎",
    "Wojny z Turcją": "🏹",
    "Kryzys Rzeczypospolitej": "📉",
    "Barok i sarmatyzm": "🎨"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
