// Skróty sekcji (do identyfikatorów ćwiczeń):
//   LAD  = Ład wiedeński i ruchy polityczne
//   KRO  = Królestwo Polskie
//   POW  = Powstanie listopadowe
//   EMI  = Emigracja i ziemie polskie po powstaniu
//   WPR  = Wiosna Ludów i rewolucja przemysłowa
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R01_LAD_01",
    section: "Ład wiedeński i ruchy polityczne",
    type: "single_choice",
    prompt: "W którym mieście obradował kongres zwołany po pierwszej abdykacji Napoleona?",
    options: ["Paryż", "Wiedeń", "Berlin", "Londyn", "Petersburg", "Bruksela"],
    answer: 1,
    image: "r01_kongres_wiedenski_obrady.jpg",
    explanation: "Kongres obradował w Wiedniu, stolicy Austrii, od jesieni 1814 r. do czerwca 1815 r."
  },
  {
    id: "R01_LAD_02",
    section: "Ład wiedeński i ruchy polityczne",
    type: "multi_select",
    prompt: "Zaznacz mocarstwa, które miały najwięcej do powiedzenia na kongresie wiedeńskim.",
    options: ["Wielka Brytania", "Rosja", "Austria", "Prusy", "Hiszpania", "Szwecja"],
    answer: [0, 1, 2, 3],
    image: "r01_europa_po_kongresie.jpg",
    explanation: "Najważniejszą rolę na kongresie odegrały zwycięskie mocarstwa: Wielka Brytania, Rosja, Austria i Prusy."
  },
  {
    id: "R01_LAD_03",
    section: "Ład wiedeński i ruchy polityczne",
    type: "true_false",
    prompt: "Po kongresie wiedeńskim Francja ponownie stała się królestwem rządzonym przez Burbonów.",
    options: null,
    answer: true,
    explanation: "Zgodnie z zasadą restauracji przywrócono we Francji władzę Burbonów, a królem został Ludwik XVIII."
  },
  {
    id: "R01_LAD_04",
    section: "Ład wiedeński i ruchy polityczne",
    type: "fill_in",
    prompt: "Kongres wiedeński rozpoczął obrady jesienią roku __________, a zakończył je w czerwcu roku __________.",
    options: null,
    answer: ["1814", "1815"],
    altAnswers: [["1814", "1814 r."], ["1815", "1815 r."]],
    explanation: "Obrady rozpoczęły się pół roku po pierwszej abdykacji Napoleona i skończyły kilka dni przed jego klęską pod Waterloo."
  },
  {
    id: "R01_LAD_05",
    section: "Ład wiedeński i ruchy polityczne",
    type: "riddle",
    prompt: "Jak nazywała się zasada kongresu wiedeńskiego polegająca na przywracaniu dawnych dynastii na trony?",
    options: null,
    answer: "restauracja",
    altAnswers: ["restauracja", "zasada restauracji"],
    explanation: "Restauracja oznaczała odbudowę dawnego porządku, w tym przywrócenie władzy dynastiom odsuniętym po 1789 r."
  },
  {
    id: "R01_LAD_06",
    section: "Ład wiedeński i ruchy polityczne",
    type: "match",
    prompt: "Połącz zasadę kongresu wiedeńskiego z jej znaczeniem.",
    options: null,
    left: ["restauracja", "legitymizm", "równowaga sił"],
    right: ["przywracanie dawnych dynastii", "uznanie władzy monarchy za nadaną przez Boga", "niedopuszczenie do przewagi jednego mocarstwa"],
    answer: {
      "restauracja": "przywracanie dawnych dynastii",
      "legitymizm": "uznanie władzy monarchy za nadaną przez Boga",
      "równowaga sił": "niedopuszczenie do przewagi jednego mocarstwa"
    },
    image: "r01_kongres_wiedenski_obrady.jpg",
    explanation: "Te trzy zasady miały utrzymać pokongresowy porządek w Europie."
  },
  {
    id: "R01_LAD_07",
    section: "Ład wiedeński i ruchy polityczne",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do nabytków terytorialnych Rosji po kongresie wiedeńskim: Finlandia, Besarabia, Francja.",
    options: null,
    answer: "Francja",
    explanation: "Rosja otrzymała m.in. Finlandię i Besarabię, natomiast Francja nie była rosyjskim nabytkiem."
  },
  {
    id: "R01_LAD_08",
    section: "Ład wiedeński i ruchy polityczne",
    type: "scenario",
    prompt: "Monarcha twierdzi, że bunt poddanych jest zbrodnią, ponieważ jego władza pochodzi od Boga. Na którą zasadę się powołuje?",
    options: ["legitymizm", "urbanizację", "uwłaszczenie", "liberalizm", "industrializację", "konstytucjonalizm"],
    answer: 0,
    explanation: "Legitymizm opierał się na przekonaniu, że władza monarsza ma boskie pochodzenie."
  },
  {
    id: "R01_LAD_09",
    section: "Ład wiedeński i ruchy polityczne",
    type: "sort",
    prompt: "Przyporządkuj poglądy do obozów politycznych epoki restauracji.",
    options: null,
    items: ["monarchia konstytucyjna", "wolność prasy", "uprzywilejowana pozycja szlachty", "tradycyjny ład społeczny"],
    categories: ["liberałowie", "konserwatyści"],
    answer: {
      "liberałowie": ["monarchia konstytucyjna", "wolność prasy"],
      "konserwatyści": ["uprzywilejowana pozycja szlachty", "tradycyjny ład społeczny"]
    },
    explanation: "Liberałowie chcieli konstytucji i swobód obywatelskich, a konserwatyści bronili dawnego porządku."
  },
  {
    id: "R01_LAD_10",
    section: "Ład wiedeński i ruchy polityczne",
    type: "sequence",
    prompt: "Ułóż wydarzenia w kolejności chronologicznej.",
    options: null,
    items: ["utworzenie Świętego Przymierza", "wojna Napoleona z Rosją", "zwołanie kongresu w Wiedniu", "pierwsza abdykacja Napoleona"],
    answer: ["wojna Napoleona z Rosją", "pierwsza abdykacja Napoleona", "zwołanie kongresu w Wiedniu", "utworzenie Świętego Przymierza"],
    image: "r01_wolnosc_na_barykadach.jpg",
    explanation: "Wyprawa na Rosję poprzedziła abdykację Napoleona, po której zwołano kongres, a Święte Przymierze powstało już po jego zakończeniu."
  },
  {
    id: "R01_KRO_01",
    section: "Królestwo Polskie",
    type: "single_choice",
    prompt: "Jakim związkiem połączono Królestwo Polskie z Cesarstwem Rosyjskim?",
    options: ["unią realną", "unią personalną", "sojuszem wojskowym", "federacją", "konfederacją", "protektoratem pruskim"],
    answer: 1,
    image: "r01_godlo_krolestwa_polskiego.jpg",
    explanation: "Królestwo Polskie było związane z Rosją unią personalną, ponieważ car Rosji był zarazem królem Polski."
  },
  {
    id: "R01_KRO_02",
    section: "Królestwo Polskie",
    type: "multi_select",
    prompt: "Zaznacz swobody gwarantowane przez konstytucję Królestwa Polskiego.",
    options: ["swoboda wyznania", "wolność słowa i druku", "wolność osobista", "nietykalność majątkowa", "pełne uwłaszczenie chłopów", "niezależna polityka zagraniczna"],
    answer: [0, 1, 2, 3],
    explanation: "Konstytucja Królestwa gwarantowała m.in. swobodę wyznania, słowa i druku, wolność osobistą oraz nietykalność majątkową."
  },
  {
    id: "R01_KRO_03",
    section: "Królestwo Polskie",
    type: "true_false",
    prompt: "Armia Królestwa Polskiego liczyła około 27 tysięcy żołnierzy i oficerów.",
    options: null,
    answer: true,
    explanation: "Królestwo posiadało dobrze wyćwiczoną polską armię liczącą około 27 tysięcy żołnierzy i oficerów."
  },
  {
    id: "R01_KRO_04",
    section: "Królestwo Polskie",
    type: "fill_in",
    prompt: "Z inicjatywy Druckiego-Lubeckiego założono państwowy __________ oraz Towarzystwo __________ Ziemskie.",
    options: null,
    answer: ["Bank Polski", "Kredytowe"],
    altAnswers: [["Bank Polski", "Bank"], ["Kredytowe", "Kredytowe Ziemskie"]],
    image: "r01_plac_bankowy_warszawa.jpg",
    explanation: "Bank Polski kredytował przedsięwzięcia gospodarcze, a Towarzystwo Kredytowe Ziemskie miało oddłużać i unowocześniać majątki ziemskie."
  },
  {
    id: "R01_KRO_05",
    section: "Królestwo Polskie",
    type: "riddle",
    prompt: "Jak nazywano posłów z Kalisza i zachodnich terenów Królestwa, którzy tworzyli legalną opozycję sejmową?",
    options: null,
    answer: "kaliszanie",
    altAnswers: ["kaliszanie", "kaliszanami"],
    explanation: "Kaliszanie protestowali przeciw łamaniu praw konstytucyjnych w Królestwie Polskim."
  },
  {
    id: "R01_KRO_06",
    section: "Królestwo Polskie",
    type: "scenario",
    prompt: "Władze zamykają czasopisma i usuwają z publikacji treści uznane za niebezpieczne politycznie. Jak nazywa się taka urzędowa kontrola?",
    options: ["cenzura", "uwłaszczenie", "autonomia", "restauracja", "emisariat", "legitymizm"],
    answer: 0,
    image: "r01_plac_bankowy_warszawa.jpg",
    explanation: "Cenzura to urzędowa kontrola treści prezentowanych publicznie."
  },
  {
    id: "R01_KRO_07",
    section: "Królestwo Polskie",
    type: "match",
    prompt: "Połącz postać z jej rolą w Królestwie Polskim.",
    options: null,
    left: ["Aleksander I", "Józef Zajączek", "wielki książę Konstanty", "Walerian Łukasiński"],
    right: ["król Polski od 1815 r.", "namiestnik Królestwa", "głównodowodzący armii polskiej", "założyciel Towarzystwa Patriotycznego"],
    answer: {
      "Aleksander I": "król Polski od 1815 r.",
      "Józef Zajączek": "namiestnik Królestwa",
      "wielki książę Konstanty": "głównodowodzący armii polskiej",
      "Walerian Łukasiński": "założyciel Towarzystwa Patriotycznego"
    },
    explanation: "Te postacie łączą się z funkcjonowaniem autonomii, armii i opozycji w Królestwie Polskim."
  },
  {
    id: "R01_KRO_08",
    section: "Królestwo Polskie",
    type: "sort",
    prompt: "Przyporządkuj ośrodki lub regiony do gałęzi gospodarki rozwijających się w Królestwie Polskim.",
    options: null,
    items: ["Zagłębie Staropolskie", "Zagłębie Dąbrowskie", "Łódź", "Kalisz"],
    categories: ["hutnictwo", "górnictwo", "włókiennictwo"],
    answer: {
      "hutnictwo": ["Zagłębie Staropolskie"],
      "górnictwo": ["Zagłębie Dąbrowskie"],
      "włókiennictwo": ["Łódź", "Kalisz"]
    },
    explanation: "W Zagłębiu Staropolskim rozwijało się hutnictwo, w Zagłębiu Dąbrowskim górnictwo, a w Łodzi i Kaliszu zaczątki przemysłu włókienniczego."
  },
  {
    id: "R01_KRO_09",
    section: "Królestwo Polskie",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do instytucji politycznych autonomicznego Królestwa Polskiego: sejm, Rada Administracyjna, namiestnik, Bank Polski.",
    options: null,
    answer: "Bank Polski",
    explanation: "Bank Polski był instytucją gospodarczą, a pozostałe elementy wiązały się bezpośrednio z systemem władzy Królestwa."
  },
  {
    id: "R01_KRO_10",
    section: "Królestwo Polskie",
    type: "sequence",
    prompt: "Ułóż wydarzenia w kolejności chronologicznej.",
    options: null,
    items: ["Mikołaj I zostaje carem", "Aleksander I zostaje królem Polski", "utworzenie Uniwersytetu Warszawskiego", "fala aresztowań likwiduje Towarzystwo Patriotyczne"],
    answer: ["Aleksander I zostaje królem Polski", "utworzenie Uniwersytetu Warszawskiego", "Mikołaj I zostaje carem", "fala aresztowań likwiduje Towarzystwo Patriotyczne"],
    explanation: "Aleksander I objął tron Królestwa w 1815 r., Uniwersytet Warszawski utworzono w 1816 r., Mikołaj I został carem w 1825 r., a represje wobec Towarzystwa nasiliły się w połowie lat 20."
  },
  {
    id: "R01_POW_01",
    section: "Powstanie listopadowe",
    type: "single_choice",
    prompt: "Kiedy wybuchło powstanie listopadowe?",
    options: ["w nocy z 29 na 30 listopada 1830 r.", "w styczniu 1831 r.", "w lutym 1831 r.", "w maju 1831 r.", "we wrześniu 1831 r.", "w październiku 1831 r."],
    answer: 0,
    image: "r01_noc_listopadowa.jpg",
    explanation: "Powstanie rozpoczęło się w Warszawie w nocy z 29 na 30 listopada 1830 r."
  },
  {
    id: "R01_POW_02",
    section: "Powstanie listopadowe",
    type: "multi_select",
    prompt: "Zaznacz czynniki, które sprzyjały decyzji o rozpoczęciu powstania listopadowego.",
    options: ["łamanie swobód konstytucyjnych", "represje wobec organizacji niepodległościowych", "wieści o rewolucji lipcowej we Francji", "obawa przed użyciem wojsk polskich przeciw Belgom", "pełne przestrzeganie konstytucji przez cara", "uwłaszczenie chłopów w Królestwie"],
    answer: [0, 1, 2, 3],
    explanation: "Na nastroje wpływały represje, łamanie konstytucji oraz wieści o rewolucjach we Francji i Belgii."
  },
  {
    id: "R01_POW_03",
    section: "Powstanie listopadowe",
    type: "true_false",
    prompt: "Atak powstańców na Belweder zakończył się uwięzieniem wielkiego księcia Konstantego.",
    options: null,
    answer: false,
    image: "r01_noc_listopadowa.jpg",
    explanation: "Atak na Belweder był nieskuteczny, a Konstanty zdołał zbiec do wojsk rosyjskich i wiernych mu oddziałów polskich."
  },
  {
    id: "R01_POW_04",
    section: "Powstanie listopadowe",
    type: "fill_in",
    prompt: "W styczniu 1831 r. sejm ogłosił detronizację __________ jako króla polskiego i powierzył władzę wykonawczą __________ Narodowemu.",
    options: null,
    answer: ["Mikołaja I", "Rządowi"],
    altAnswers: [["Mikołaja I", "Mikołaj I", "cara Mikołaja I"], ["Rządowi", "Rządowi Narodowemu"]],
    explanation: "Po detronizacji Mikołaja I najwyższą władzę wykonawczą powierzono Rządowi Narodowemu."
  },
  {
    id: "R01_POW_05",
    section: "Powstanie listopadowe",
    type: "riddle",
    prompt: "Który podporucznik stał na czele sprzysiężenia w warszawskiej Szkole Podchorążych Piechoty?",
    options: null,
    answer: "Piotr Wysocki",
    altAnswers: ["Piotr Wysocki", "Wysocki"],
    explanation: "Piotr Wysocki kierował sprzysiężeniem, które zaplanowało uderzenie na Konstantego i opanowanie Warszawy."
  },
  {
    id: "R01_POW_06",
    section: "Powstanie listopadowe",
    type: "scenario",
    prompt: "Popularny generał zostaje dyktatorem powstania, ale od początku źle ocenia szanse zwycięstwa i próbuje porozumieć się z carem. O kim mowa?",
    options: ["Józef Chłopicki", "Ignacy Prądzyński", "Jan Skrzynecki", "Jan Krukowiecki", "Józef Sowiński", "Piotr Wysocki"],
    answer: 0,
    explanation: "Józef Chłopicki został dyktatorem powstania, ale szukał ugody z Mikołajem I."
  },
  {
    id: "R01_POW_07",
    section: "Powstanie listopadowe",
    type: "match",
    prompt: "Połącz dowódcę z opisem jego roli w powstaniu listopadowym.",
    options: null,
    left: ["Józef Chłopicki", "Ignacy Prądzyński", "Jan Skrzynecki", "Jan Krukowiecki"],
    right: ["pierwszy dyktator powstania", "autor planu kampanii wiosennej", "nieudolny wódz naczelny po zwycięstwach wiosennych", "źle przygotował obronę Warszawy"],
    answer: {
      "Józef Chłopicki": "pierwszy dyktator powstania",
      "Ignacy Prądzyński": "autor planu kampanii wiosennej",
      "Jan Skrzynecki": "nieudolny wódz naczelny po zwycięstwach wiosennych",
      "Jan Krukowiecki": "źle przygotował obronę Warszawy"
    },
    explanation: "Dowódcy odgrywali różne role: od dyktatury Chłopickiego po błędy Skrzyneckiego i Krukowieckiego."
  },
  {
    id: "R01_POW_08",
    section: "Powstanie listopadowe",
    type: "sort",
    prompt: "Przyporządkuj wydarzenia militarne do ich znaczenia dla powstania.",
    options: null,
    items: ["Grochów", "Wawer", "Dębe Wielkie", "Ostrołęka", "szturm Woli"],
    categories: ["powstrzymanie Rosjan", "polskie zwycięstwa wiosenne", "przełomowa klęska", "upadek Warszawy"],
    answer: {
      "powstrzymanie Rosjan": ["Grochów"],
      "polskie zwycięstwa wiosenne": ["Wawer", "Dębe Wielkie"],
      "przełomowa klęska": ["Ostrołęka"],
      "upadek Warszawy": ["szturm Woli"]
    },
    image: "r01_olszynka_grochowska.jpg",
    explanation: "Grochów ocalił stolicę, Wawer i Dębe Wielkie były sukcesami wiosennymi, Ostrołęka przełomową klęską, a szturm Woli poprzedził kapitulację Warszawy."
  },
  {
    id: "R01_POW_09",
    section: "Powstanie listopadowe",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do wydarzeń powstania listopadowego: Grochów, Wawer, Iganie, Waterloo.",
    options: null,
    answer: "Waterloo",
    explanation: "Grochów, Wawer i Iganie były związane z wojną polsko-rosyjską 1831 r., a Waterloo z ostateczną klęską Napoleona."
  },
  {
    id: "R01_POW_10",
    section: "Powstanie listopadowe",
    type: "sequence",
    prompt: "Ułóż wydarzenia powstania listopadowego w kolejności chronologicznej.",
    options: null,
    items: ["bitwa pod Ostrołęką", "detronizacja Mikołaja I", "wybuch powstania", "poddanie Warszawy", "bitwa pod Grochowem"],
    answer: ["wybuch powstania", "detronizacja Mikołaja I", "bitwa pod Grochowem", "bitwa pod Ostrołęką", "poddanie Warszawy"],
    image: "r01_olszynka_grochowska.jpg",
    explanation: "Powstanie wybuchło w listopadzie 1830 r., detronizacja nastąpiła w styczniu 1831 r., Grochów w lutym, Ostrołęka pod koniec maja, a Warszawę poddano we wrześniu."
  },
  {
    id: "R01_EMI_01",
    section: "Emigracja i ziemie polskie po powstaniu",
    type: "single_choice",
    prompt: "Ilu mniej więcej Polaków udało się na emigrację po upadku powstania listopadowego?",
    options: ["około 1 tysiąca", "około 10 tysięcy", "około 50 tysięcy", "około 100 tysięcy", "około 200 delegacji", "około 27 tysięcy"],
    answer: 1,
    image: "r01_wielka_emigracja_mapa.jpg",
    explanation: "Po upadku powstania listopadowego na emigrację udało się około 10 tysięcy Polaków."
  },
  {
    id: "R01_EMI_02",
    section: "Emigracja i ziemie polskie po powstaniu",
    type: "multi_select",
    prompt: "Zaznacz kraje lub regiony, do których trafiali emigranci po powstaniu listopadowym.",
    options: ["Saksonia", "Francja", "Wielka Brytania", "Belgia", "Szwajcaria", "Japonia"],
    answer: [0, 1, 2, 3, 4],
    image: "r01_wielka_emigracja_mapa.jpg",
    explanation: "Emigranci osiadali m.in. w Saksonii, Francji, Wielkiej Brytanii, Belgii i Szwajcarii, a część wyjechała nawet do Stanów Zjednoczonych."
  },
  {
    id: "R01_EMI_03",
    section: "Emigracja i ziemie polskie po powstaniu",
    type: "true_false",
    prompt: "Emigrację po powstaniu listopadowym nazwano Wielką Emigracją także dlatego, że znaleźli się w niej wybitni polscy politycy i artyści.",
    options: null,
    answer: true,
    explanation: "O nazwie Wielka Emigracja decydowała nie tylko liczba emigrantów, lecz także obecność wybitnych twórców kultury i polityków."
  },
  {
    id: "R01_EMI_04",
    section: "Emigracja i ziemie polskie po powstaniu",
    type: "fill_in",
    prompt: "Ugrupowanie skupione wokół księcia Adama Jerzego __________ nazwano Hotelem __________.",
    options: null,
    answer: ["Czartoryskiego", "Lambert"],
    altAnswers: [["Czartoryskiego", "Adam Jerzy Czartoryski", "Czartoryski"], ["Lambert", "Hotel Lambert"]],
    image: "r01_hotel_lambert_bal.jpg",
    explanation: "Hotel Lambert skupiał działaczy wokół Adama Jerzego Czartoryskiego i wziął nazwę od jego paryskiej rezydencji."
  },
  {
    id: "R01_EMI_05",
    section: "Emigracja i ziemie polskie po powstaniu",
    type: "match",
    prompt: "Połącz ugrupowanie emigracyjne z jego programem.",
    options: null,
    left: ["Hotel Lambert", "Towarzystwo Demokratyczne Polskie", "Gromady Ludu Polskiego"],
    right: ["program konserwatywno-liberalny", "program republikańsko-demokratyczny i uwłaszczenie bez odszkodowań", "zniesienie własności prywatnej i przekazanie ziemi ludowi"],
    answer: {
      "Hotel Lambert": "program konserwatywno-liberalny",
      "Towarzystwo Demokratyczne Polskie": "program republikańsko-demokratyczny i uwłaszczenie bez odszkodowań",
      "Gromady Ludu Polskiego": "zniesienie własności prywatnej i przekazanie ziemi ludowi"
    },
    image: "r01_hotel_lambert_bal.jpg",
    explanation: "Najważniejsze ugrupowania emigracyjne różniły się wizją przyszłej Polski i stosunkiem do sprawy chłopskiej."
  },
  {
    id: "R01_EMI_06",
    section: "Emigracja i ziemie polskie po powstaniu",
    type: "riddle",
    prompt: "Jak nazywano tajnego wysłannika politycznego wysyłanego na ziemie polskie w celu agitacji i rozpoznania nastrojów?",
    options: null,
    answer: "emisariusz",
    altAnswers: ["emisariusz", "tajny wysłannik"],
    explanation: "Emisariusze tworzyli siatki konspiracyjne i przygotowywali kolejne wystąpienia niepodległościowe."
  },
  {
    id: "R01_EMI_07",
    section: "Emigracja i ziemie polskie po powstaniu",
    type: "scenario",
    prompt: "Działacz związany z Młodą Polską współtworzy tajne Stowarzyszenie Ludu Polskiego, działa na ziemiach zabranych i po śledztwie zostaje rozstrzelany w Wilnie. Kto to?",
    options: ["Szymon Konarski", "Józef Zaliwski", "Piotr Ściegienny", "Karol Marcinkowski", "Hipolit Cegielski", "Edward Raczyński"],
    answer: 0,
    explanation: "Szymon Konarski był emisariuszem związanym z Młodą Polską i został rozstrzelany w Wilnie w 1839 r."
  },
  {
    id: "R01_EMI_08",
    section: "Emigracja i ziemie polskie po powstaniu",
    type: "single_choice",
    prompt: "Co stało się symbolem nocy paskiewiczowskiej w Królestwie Polskim?",
    options: ["Cytadela Warszawska", "Kanał Augustowski", "Biblioteka Polska w Paryżu", "Bazar w Poznaniu", "Ossolineum", "Pałac Staszica"],
    answer: 0,
    image: "r01_cytadela_warszawska.jpg",
    explanation: "Symbolem nocy paskiewiczowskiej była Cytadela Warszawska, twierdza i więzienie wzniesione w latach 30. XIX w."
  },
  {
    id: "R01_EMI_09",
    section: "Emigracja i ziemie polskie po powstaniu",
    type: "multi_select",
    prompt: "Zaznacz represje zastosowane w Królestwie Polskim po upadku powstania listopadowego.",
    options: ["likwidacja polskiej armii", "rozwiązanie sejmu", "zawieszenie konstytucji", "wprowadzenie stanu wojennego", "utworzenie autonomicznego sejmu galicyjskiego", "nadanie pełnej niepodległości Królestwu"],
    answer: [0, 1, 2, 3],
    image: "r01_cytadela_warszawska.jpg",
    explanation: "Car zlikwidował armię i sejm, zawiesił konstytucję, wprowadził Statut Organiczny i stan wojenny."
  },
  {
    id: "R01_EMI_10",
    section: "Emigracja i ziemie polskie po powstaniu",
    type: "sort",
    prompt: "Przyporządkuj działania lub wydarzenia do zaborów po powstaniu listopadowym.",
    options: null,
    items: ["praca organiczna", "Bazar w Poznaniu", "powstanie krakowskie", "rabacja galicyjska"],
    categories: ["zabór pruski", "zabór austriacki"],
    answer: {
      "zabór pruski": ["praca organiczna", "Bazar w Poznaniu"],
      "zabór austriacki": ["powstanie krakowskie", "rabacja galicyjska"]
    },
    explanation: "W Wielkopolsce rozwijano pracę organiczną, natomiast w Galicji doszło do powstania krakowskiego i rabacji."
  },
  {
    id: "R01_WPR_01",
    section: "Wiosna Ludów i rewolucja przemysłowa",
    type: "single_choice",
    prompt: "Jak nazywa się fala rewolucji i powstań, która ogarnęła Europę w latach 1848-1849?",
    options: ["Wiosna Ludów", "noc paskiewiczowska", "epoka restauracji", "Wielka Emigracja", "rewolucja lipcowa", "kongres wiedeński"],
    answer: 0,
    explanation: "Wydarzenia rewolucyjne z lat 1848-1849 nazwano Wiosną Ludów."
  },
  {
    id: "R01_WPR_02",
    section: "Wiosna Ludów i rewolucja przemysłowa",
    type: "multi_select",
    prompt: "Zaznacz przyczyny Wiosny Ludów.",
    options: ["klęski głodu", "kryzys gospodarczy", "żądania likwidacji absolutyzmu", "dążenia do konstytucji i praw obywatelskich", "zwycięstwo Napoleona pod Waterloo", "dobrowolne zniesienie cenzury przez wszystkie monarchie"],
    answer: [0, 1, 2, 3],
    explanation: "Wiosnę Ludów wywołały m.in. głód, kryzys gospodarczy oraz żądania likwidacji absolutyzmu i rozszerzenia praw."
  },
  {
    id: "R01_WPR_03",
    section: "Wiosna Ludów i rewolucja przemysłowa",
    type: "true_false",
    prompt: "W wyniku rewolucji lutowej 1848 r. we Francji obalono monarchię Burbonów i proklamowano II Republikę.",
    options: null,
    answer: true,
    image: "r01_wolnosc_na_barykadach.jpg",
    explanation: "Rewolucja lutowa obaliła monarchię i doprowadziła do ogłoszenia republiki we Francji."
  },
  {
    id: "R01_WPR_04",
    section: "Wiosna Ludów i rewolucja przemysłowa",
    type: "fill_in",
    prompt: "W 1852 r. Ludwik Napoleon Bonaparte koronował się jako Napoleon __________ na cesarza __________.",
    options: null,
    answer: ["III", "Francuzów"],
    altAnswers: [["III", "Trzeci", "Napoleon III"], ["Francuzów", "cesarza Francuzów"]],
    explanation: "Po zamachu stanu Ludwik Napoleon Bonaparte koronował się jako Napoleon III na cesarza Francuzów."
  },
  {
    id: "R01_WPR_05",
    section: "Wiosna Ludów i rewolucja przemysłowa",
    type: "match",
    prompt: "Połącz postać z jej rolą podczas Wiosny Ludów.",
    options: null,
    left: ["Lajos Kossuth", "Józef Bem", "Ludwik Mierosławski", "Adam Mickiewicz"],
    right: ["przywódca węgierskiego ruchu narodowo-liberalnego", "główny wódz powstańczej armii węgierskiej", "dowódca powstania w Wielkopolsce i armii w Badenii", "twórca polskiego legionu we Włoszech"],
    answer: {
      "Lajos Kossuth": "przywódca węgierskiego ruchu narodowo-liberalnego",
      "Józef Bem": "główny wódz powstańczej armii węgierskiej",
      "Ludwik Mierosławski": "dowódca powstania w Wielkopolsce i armii w Badenii",
      "Adam Mickiewicz": "twórca polskiego legionu we Włoszech"
    },
    explanation: "Wiosna Ludów stworzyła przestrzeń dla działań polskich emigrantów i dawnych oficerów w wielu krajach Europy."
  },
  {
    id: "R01_WPR_06",
    section: "Wiosna Ludów i rewolucja przemysłowa",
    type: "sequence",
    prompt: "Ułóż wydarzenia związane z Wiosną Ludów w kolejności chronologicznej.",
    options: null,
    items: ["koronacja Napoleona III", "rewolucja lutowa w Paryżu", "rewolucje marcowe w Wiedniu i Berlinie", "kapitulacja Węgrów"],
    answer: ["rewolucja lutowa w Paryżu", "rewolucje marcowe w Wiedniu i Berlinie", "kapitulacja Węgrów", "koronacja Napoleona III"],
    explanation: "Najpierw wybuchła rewolucja lutowa, potem marcowe wystąpienia w Austrii i Prusach, w 1849 r. skapitulowali Węgrzy, a Napoleon III koronował się w 1852 r."
  },
  {
    id: "R01_WPR_07",
    section: "Wiosna Ludów i rewolucja przemysłowa",
    type: "scenario",
    prompt: "Parlament zebrany we Frankfurcie uchwala liberalną konstytucję i proponuje koronę królowi Prus, który jej nie przyjmuje. O jakim parlamencie mowa?",
    options: ["parlamencie frankfurckim", "sejmie Królestwa Polskiego", "Rządzie Tymczasowym w Paryżu", "Komitecie Obrony Węgier", "Radzie Administracyjnej", "Świętym Przymierzu"],
    answer: 0,
    explanation: "Ogólnoniemiecki parlament frankfurcki obradował w kościele św. Pawła i zaproponował koronę Fryderykowi Wilhelmowi IV."
  },
  {
    id: "R01_WPR_08",
    section: "Wiosna Ludów i rewolucja przemysłowa",
    type: "single_choice",
    prompt: "Kto stanął na czele polskich oddziałów wojskowych tworzonych w Wielkopolsce w 1848 r.?",
    options: ["Ludwik Mierosławski", "Józef Bem", "Henryk Dembiński", "Wojciech Chrzanowski", "Adam Mickiewicz", "Jan Tyssowski"],
    answer: 0,
    image: "r01_bitwa_pod_miloslawiem.jpg",
    explanation: "Polskie oddziały w Wielkopolsce zorganizował i poprowadził Ludwik Mierosławski."
  },
  {
    id: "R01_WPR_09",
    section: "Wiosna Ludów i rewolucja przemysłowa",
    type: "true_false",
    prompt: "Pruska konstytucja z grudnia 1848 r. zachowała autonomiczne Wielkie Księstwo Poznańskie.",
    options: null,
    answer: false,
    image: "r01_bitwa_pod_miloslawiem.jpg",
    explanation: "Konstytucja pruska nie przewidywała autonomii Wielkiego Księstwa Poznańskiego; utworzono Prowincję Poznańską."
  },
  {
    id: "R01_WPR_10",
    section: "Wiosna Ludów i rewolucja przemysłowa",
    type: "sort",
    prompt: "Przyporządkuj wynalazcę lub konstruktora do rozwiązania technicznego.",
    options: null,
    items: ["James Watt", "George Stephenson", "Samuel Morse"],
    categories: ["maszyna parowa", "lokomotywa", "telegraf"],
    answer: {
      "maszyna parowa": ["James Watt"],
      "lokomotywa": ["George Stephenson"],
      "telegraf": ["Samuel Morse"]
    },
    image: "r01_maszyna_parowa_watt.jpg",
    explanation: "Watt udoskonalił maszynę parową, Stephenson zbudował lokomotywę, a Morse opracował popularny system telegrafii elektrycznej."
  },
  {
    id: "R01_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Który francuski dyplomata na kongresie wiedeńskim był orędownikiem zasady legitymizmu?",
    options: ["Charles Maurice de Talleyrand", "Ludwik Filip", "Ludwik XVIII", "Klemens von Metternich", "Aleksander I", "Karol X"],
    answer: 0,
    explanation: "Talleyrand, przedstawiciel Ludwika XVIII, był na kongresie głównym orędownikiem legitymizmu."
  },
  {
    id: "R01_HARD_02",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Wielonarodowe cesarstwo Austrii otrzymało Dalmację i __________ oraz północnowłoskie terytoria z Mediolanem i __________.",
    options: null,
    answer: ["Istrię", "Wenecję"],
    altAnswers: [["Istrię", "Istria"], ["Wenecję", "Wenecja"]],
    explanation: "Austria otrzymała Dalmację, Istrię oraz ziemie północnowłoskie, w tym Lombardię z Mediolanem i Wenecję."
  },
  {
    id: "R01_HARD_03",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz państwa, które jako pierwsze przystąpiły do Świętego Przymierza.",
    options: ["Rosja", "Prusy", "Austria", "Francja", "Wielka Brytania", "Szwecja"],
    answer: [0, 1, 2],
    explanation: "Pierwszymi sygnatariuszami Świętego Przymierza były Rosja, Prusy i Austria."
  },
  {
    id: "R01_HARD_04",
    section: "Super trudne",
    type: "true_false",
    prompt: "Amnestia ogłoszona pod koniec 1831 r. obejmowała członków władz powstańczych i najbardziej zasłużonych powstańców.",
    options: null,
    answer: false,
    explanation: "Amnestia nie dotyczyła członków władz powstańczych ani osób szczególnie zasłużonych dla sprawy powstania."
  },
  {
    id: "R01_HARD_05",
    section: "Super trudne",
    type: "riddle",
    prompt: "Jak nazywał się akt, którym car zastąpił zawieszoną konstytucję Królestwa Polskiego po powstaniu listopadowym?",
    options: null,
    answer: "Statut Organiczny",
    altAnswers: ["Statut Organiczny", "statut organiczny"],
    explanation: "Po powstaniu Mikołaj I zawiesił konstytucję i wprowadził Statut Organiczny."
  },
  {
    id: "R01_HARD_06",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz postać z działaniem na ziemiach polskich po powstaniu listopadowym.",
    options: null,
    left: ["Karol Marcinkowski", "Hipolit Cegielski", "Edward Raczyński", "Józef Maksymilian Ossoliński"],
    right: ["propagator pracy organicznej", "założyciel fabryki maszyn w Poznaniu", "założyciel Biblioteki Raczyńskich", "twórca Ossolineum we Lwowie"],
    answer: {
      "Karol Marcinkowski": "propagator pracy organicznej",
      "Hipolit Cegielski": "założyciel fabryki maszyn w Poznaniu",
      "Edward Raczyński": "założyciel Biblioteki Raczyńskich",
      "Józef Maksymilian Ossoliński": "twórca Ossolineum we Lwowie"
    },
    explanation: "Te działania pokazują legalne formy umacniania kultury i gospodarki pod zaborami."
  },
  {
    id: "R01_HARD_07",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż wydarzenia z lat 1846-1848 w kolejności chronologicznej.",
    options: null,
    items: ["rewolucja lutowa w Paryżu", "utworzenie Rządu Narodowego w Krakowie", "powstanie w Wielkopolsce", "rzeź galicyjska"],
    answer: ["utworzenie Rządu Narodowego w Krakowie", "rzeź galicyjska", "rewolucja lutowa w Paryżu", "powstanie w Wielkopolsce"],
    explanation: "Rząd Narodowy w Krakowie powstał 22 lutego 1846 r., rabacja nastąpiła w tym samym czasie, rewolucja lutowa wybuchła w 1848 r., a po niej doszło do wystąpień w Wielkopolsce."
  },
  {
    id: "R01_HARD_08",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do polskich ugrupowań i organizacji emigracyjnych: Hotel Lambert, Towarzystwo Demokratyczne Polskie, Gromady Ludu Polskiego, Święte Przymierze.",
    options: null,
    answer: "Święte Przymierze",
    explanation: "Święte Przymierze było sojuszem monarchów europejskich, a pozostałe nazwy odnoszą się do polskich środowisk emigracyjnych."
  },
  {
    id: "R01_HARD_09",
    section: "Super trudne",
    type: "scenario",
    prompt: "W Galicji władze austriackie wprowadzają uwłaszczenie dzień przed polskimi planami, przez co wieś nie popiera sprawy narodowej. Jaki skutek polityczny miało to dla polskich działaczy?",
    options: ["pokrzyżowało plany wystąpień w zaborze austriackim", "doprowadziło do odbudowy Rzeczypospolitej Krakowskiej", "umożliwiło zwycięstwo powstania w Wielkopolsce", "zakończyło germanizację", "przywróciło sejm Królestwa Polskiego", "zlikwidowało Święte Przymierze"],
    answer: 0,
    explanation: "Austriackie uwłaszczenie w Galicji osłabiło polskie plany, bo chłopi nie poparli wystąpień narodowych."
  },
  {
    id: "R01_HARD_10",
    section: "Super trudne",
    type: "sort",
    prompt: "Przyporządkuj cechy do grup społecznych ukształtowanych przez rewolucję przemysłową.",
    options: null,
    items: ["właściciele fabryk", "bankierzy", "praca najemna w fabrykach", "strajki i związki zawodowe"],
    categories: ["burżuazja", "robotnicy"],
    answer: {
      "burżuazja": ["właściciele fabryk", "bankierzy"],
      "robotnicy": ["praca najemna w fabrykach", "strajki i związki zawodowe"]
    },
    explanation: "Burżuazja skupiała kapitał i własność, a robotnicy utrzymywali się z pracy najemnej i zaczęli organizować się w związki zawodowe."
  },
  {
    id: "R01_HARD_11",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Pierwszą publiczną linię kolejową w Wielkiej Brytanii otwarto między __________ a Darlington, a Kanał __________ skrócił szlak z Europy do Azji.",
    options: null,
    answer: ["Stockton", "Sueski"],
    altAnswers: [["Stockton", "Stocktonem"], ["Sueski", "Kanał Sueski", "Sueskiego"]],
    image: "r01_maszyna_parowa_watt.jpg",
    explanation: "Linia Stockton-Darlington była symbolem rozwoju kolei, a Kanał Sueski znacznie skrócił drogę morską z Europy do Azji."
  },
  {
    id: "R01_HARD_12",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz przyczyny klęski powstania listopadowego.",
    options: ["liczebna przewaga armii rosyjskiej", "nieudolność części dowódców i polityków", "brak realnej pomocy Zachodu", "brak pozyskania chłopów przez uwłaszczenie", "zwycięstwo Polski pod Ostrołęką", "pełne poparcie cara dla konstytucji"],
    answer: [0, 1, 2, 3],
    explanation: "Klęskę tłumaczono m.in. przewagą Rosji, błędami dowództwa, brakiem realnej pomocy Zachodu i niepozyskaniem chłopów."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r01",
  number: 1,
  title: "Pierwsza połowa XIX wieku",
  icon: "🏛️",
  sectionOrder: [
    "Ład wiedeński i ruchy polityczne",
    "Królestwo Polskie",
    "Powstanie listopadowe",
    "Emigracja i ziemie polskie po powstaniu",
    "Wiosna Ludów i rewolucja przemysłowa"
  ],
  sectionIcons: {
    "Ład wiedeński i ruchy polityczne": "⚖️",
    "Królestwo Polskie": "🦅",
    "Powstanie listopadowe": "⚔️",
    "Emigracja i ziemie polskie po powstaniu": "🧳",
    "Wiosna Ludów i rewolucja przemysłowa": "🏭"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
