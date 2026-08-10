// Skróty sekcji (do identyfikatorów ćwiczeń):
//   WLA  = Napoleon u władzy
//   WOJ  = Wojny napoleońskie
//   LEG  = Legiony i sprawa polska
//   KSW  = Księstwo Warszawskie
//   UPA  = Wyprawa na Rosję i upadek
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R06_WLA_01",
    "section": "Napoleon u władzy",
    "type": "single_choice",
    "prompt": "Gdzie urodził się Napoleon Bonaparte?",
    "options": [
      "Korsyka",
      "Sycylia",
      "Sardynia",
      "Malta",
      "Kreta",
      "Elba"
    ],
    "answer": 0,
    "image": "r06_napoleon_portret.jpg",
    "explanation": "Napoleon urodził się na Korsyce. Podręcznik podkreśla też, że nie był Francuzem z urodzenia."
  },
  {
    "id": "R06_WLA_02",
    "section": "Napoleon u władzy",
    "type": "multi_select",
    "prompt": "Zaznacz działania Napoleona z okresu konsulatu, które pomogły mu zdobyć poparcie Francuzów.",
    "options": [
      "Zwycięstwo nad Austrią i pokój w 1801 r.",
      "Zatrzymanie wzrostu cen",
      "Wspieranie przemysłu i handlu",
      "Konkordat z papieżem",
      "Zniesienie własności prywatnej",
      "Rozwiązanie armii"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W latach 1799-1804 Napoleon zapewnił pokój po zwycięstwie nad Austrią, powstrzymał wzrost cen dzięki ekonomistom, wspierał przemysł i handel oraz zawarł konkordat z papieżem."
  },
  {
    "id": "R06_WLA_03",
    "section": "Napoleon u władzy",
    "type": "true_false",
    "prompt": "Okres rządów Napoleona jako pierwszego konsula, zwany konsulatem, trwał od 1799 do 1804 roku.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik określa lata 1799-1804 jako pięcioletni okres konsulatu Napoleona."
  },
  {
    "id": "R06_WLA_04",
    "section": "Napoleon u władzy",
    "type": "fill_in",
    "prompt": "W 1799 r. Napoleon dokonał __________ i objął władzę jako pierwszy konsul, a w 1804 r. ogłoszono __________.",
    "options": null,
    "answer": [
      "zamachu stanu",
      "Kodeks Napoleona"
    ],
    "explanation": "Zamach stanu z 1799 r. zakończył rządy dyrektoriatu. W 1804 r. ogłoszono Kodeks Napoleona, zbiór prawa cywilnego."
  },
  {
    "id": "R06_WLA_05",
    "section": "Napoleon u władzy",
    "type": "riddle",
    "prompt": "Umowa państwowa zawarta przez Napoleona z papieżem w 1801 r. to...",
    "options": null,
    "answer": "konkordat",
    "altAnswers": [
      "konkordat",
      "Konkordat"
    ],
    "explanation": "Konkordat zapewnił katolikom swobodę odprawiania nabożeństw, a papież pogodził się z utratą dóbr kościelnych odebranych w czasie rewolucji."
  },
  {
    "id": "R06_WLA_06",
    "section": "Napoleon u władzy",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie należał do rozwiązań Kodeksu Napoleona: wolność osobista, równość wobec prawa, ochrona własności prywatnej, przywrócenie poddaństwa chłopów.",
    "options": null,
    "answer": "przywrócenie poddaństwa chłopów",
    "explanation": "Kodeks Napoleona chronił wolność osobistą, równość wobec prawa i własność prywatną. Nie przywracał poddaństwa chłopów."
  },
  {
    "id": "R06_WLA_07",
    "section": "Napoleon u władzy",
    "type": "match",
    "prompt": "Połącz pojęcie z właściwym opisem.",
    "options": null,
    "left": [
      "dyrektoriat",
      "konsulat",
      "konkordat",
      "Kodeks Napoleona"
    ],
    "right": [
      "pięcioosobowa władza wykonawcza",
      "rządy pierwszego konsula w latach 1799-1804",
      "umowa państwowa z papieżem",
      "zbiór przepisów prawa cywilnego"
    ],
    "answer": {
      "dyrektoriat": "pięcioosobowa władza wykonawcza",
      "konsulat": "rządy pierwszego konsula w latach 1799-1804",
      "konkordat": "umowa państwowa z papieżem",
      "Kodeks Napoleona": "zbiór przepisów prawa cywilnego"
    },
    "image": "r06_napoleon_portret.jpg",
    "explanation": "Dyrektoriat był pięcioosobową władzą wykonawczą, konsulat obejmował lata 1799-1804, konkordat był umową z papieżem, a Kodeks Napoleona regulował prawo cywilne."
  },
  {
    "id": "R06_WLA_08",
    "section": "Napoleon u władzy",
    "type": "sort",
    "prompt": "Przyporządkuj postanowienia do konstytucji z 1795 r. albo do Kodeksu Napoleona z 1804 r.",
    "options": null,
    "items": [
      "pięciu dyrektorów",
      "prawo kandydowania dla 30 tysięcy najbogatszych",
      "równość wobec prawa",
      "ochrona własności prywatnej",
      "dopuszczenie rozwodów"
    ],
    "categories": [
      "Konstytucja z 1795 r.",
      "Kodeks Napoleona z 1804 r."
    ],
    "answer": {
      "Konstytucja z 1795 r.": [
        "pięciu dyrektorów",
        "prawo kandydowania dla 30 tysięcy najbogatszych"
      ],
      "Kodeks Napoleona z 1804 r.": [
        "równość wobec prawa",
        "ochrona własności prywatnej",
        "dopuszczenie rozwodów"
      ]
    },
    "explanation": "Konstytucja z 1795 r. ustanowiła dyrektoriat i ograniczyła prawo kandydowania do parlamentu. Kodeks Napoleona wprowadzał m.in. równość wobec prawa, ochronę własności i rozwody."
  },
  {
    "id": "R06_WLA_09",
    "section": "Napoleon u władzy",
    "type": "scenario",
    "prompt": "W czasie uroczystości Napoleon sam wkłada sobie wieniec cesarski, a następnie koronuje Józefinę. W którym roku koronował się na cesarza Francuzów?",
    "options": [
      "1795",
      "1799",
      "1801",
      "1804",
      "1806",
      "1812"
    ],
    "answer": 3,
    "image": "r06_koronacja_napoleona.jpg",
    "explanation": "Napoleon koronował się na cesarza Francuzów w 1804 r. W ceremonii uczestniczył papież, który biernie się jej przyglądał."
  },
  {
    "id": "R06_WLA_10",
    "section": "Napoleon u władzy",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "zamach stanu Napoleona",
      "ogłoszenie Kodeksu Napoleona",
      "początek kampanii włoskiej Napoleona",
      "uchwalenie konstytucji Republiki Francuskiej",
      "zawarcie konkordatu z papieżem"
    ],
    "answer": [
      "uchwalenie konstytucji Republiki Francuskiej",
      "początek kampanii włoskiej Napoleona",
      "zamach stanu Napoleona",
      "zawarcie konkordatu z papieżem",
      "ogłoszenie Kodeksu Napoleona"
    ],
    "explanation": "Najpierw uchwalono konstytucję z 1795 r., potem Napoleon rozpoczął kampanię włoską, w 1799 r. dokonał zamachu stanu, w 1801 r. zawarł konkordat, a w 1804 r. ogłoszono Kodeks Napoleona."
  },
  {
    "id": "R06_WLA_11",
    "section": "Napoleon u władzy",
    "type": "single_choice",
    "prompt": "Jakiego tytułu używał Napoleon po koronacji w 1804 r.?",
    "options": [
      "cesarz Francuzów",
      "cesarz Francji",
      "król Francuzów",
      "król Italii",
      "pierwszy dyrektor",
      "protektor republiki"
    ],
    "answer": 0,
    "image": "r06_koronacja_napoleona.jpg",
    "explanation": "Napoleon przyjął tytuł cesarza Francuzów. Miał on podkreślać, że obywatele wybrali sobie władcę, choć w rzeczywistości Francja stała się cesarstwem."
  },
  {
    "id": "R06_WLA_12",
    "section": "Napoleon u władzy",
    "type": "single_choice",
    "prompt": "Kto przygotował Kodeks Napoleona?",
    "options": [
      "prawnicy kierowani przez Napoleona",
      "wyłącznie generałowie",
      "papież i biskupi",
      "dyrektorzy z 1795 r.",
      "posłowie brytyjscy",
      "rosyjscy urzędnicy"
    ],
    "answer": 0,
    "explanation": "Kodeks przygotowali prawnicy, których pracą Napoleon osobiście kierował."
  },
  {
    "id": "R06_WOJ_01",
    "section": "Wojny napoleońskie",
    "type": "single_choice",
    "prompt": "Która flota zwyciężyła pod Trafalgarem w 1805 r.?",
    "options": [
      "brytyjska",
      "francuska",
      "hiszpańska",
      "rosyjska",
      "austriacka",
      "pruska"
    ],
    "answer": 0,
    "image": "r06_trafalgar.jpg",
    "explanation": "Pod Trafalgarem flota brytyjska rozgromiła połączoną flotę francusko-hiszpańską, co uniemożliwiło Napoleonowi inwazję na Wielką Brytanię."
  },
  {
    "id": "R06_WOJ_02",
    "section": "Wojny napoleońskie",
    "type": "true_false",
    "prompt": "Wojny napoleońskie trwały w latach 1799-1815 i objęły większość Europy.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik podaje lata 1799-1815 i zaznacza, że wojny napoleońskie ogarnęły większość Europy, od Portugalii po Rosję."
  },
  {
    "id": "R06_WOJ_03",
    "section": "Wojny napoleońskie",
    "type": "scenario",
    "prompt": "Grudzień 1805 r. Napoleon rozbija połączone siły dwóch państw pod Austerlitz. Jakie armie walczyły przeciw Francuzom?",
    "options": [
      "Austrii i Rosji",
      "Prus i Anglii",
      "Hiszpanii i Portugalii",
      "Rosji i Turcji",
      "Prus i Saksonii",
      "Austrii i Hiszpanii"
    ],
    "answer": 0,
    "image": "r06_austerlitz.jpg",
    "explanation": "Pod Austerlitz Napoleon pokonał połączone siły Austrii i Rosji."
  },
  {
    "id": "R06_WOJ_04",
    "section": "Wojny napoleońskie",
    "type": "fill_in",
    "prompt": "Blokada kontynentalna z 1806 r. zakazywała państwom Europy handlu z __________, aby zniszczyć jej __________.",
    "options": null,
    "answer": [
      "Wielką Brytanią",
      "gospodarkę"
    ],
    "explanation": "Napoleon próbował uderzyć w Wielką Brytanię gospodarczo, ponieważ jej potężna flota uniemożliwiała mu skuteczną inwazję na wyspy."
  },
  {
    "id": "R06_WOJ_05",
    "section": "Wojny napoleońskie",
    "type": "multi_select",
    "prompt": "Zaznacz postanowienia pokoju w Tylży z 1807 r.",
    "options": [
      "Francja i Rosja zawarły przymierze",
      "Rosja przystąpiła do blokady kontynentalnej",
      "Car zgodził się na propozycje Napoleona w sprawie polskiej",
      "Wielka Brytania przystąpiła do blokady",
      "Prusy otrzymały nowe ziemie od Francji",
      "Napoleon zrzekł się tytułu cesarza"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "W Tylży Francja i Rosja zawarły przymierze, Rosja przystąpiła do blokady kontynentalnej, a car zgodził się na propozycje Napoleona w sprawie polskiej."
  },
  {
    "id": "R06_WOJ_06",
    "section": "Wojny napoleońskie",
    "type": "riddle",
    "prompt": "Bitwa z 1807 r., w której Napoleon pokonał armię rosyjską przed zawarciem pokoju w Tylży, to...",
    "options": null,
    "answer": "Frydland",
    "altAnswers": [
      "Frydland",
      "bitwa pod Frydlandem"
    ],
    "explanation": "Zwycięstwo Napoleona pod Frydlandem zmusiło cara i króla Prus do zawarcia pokoju w Tylży."
  },
  {
    "id": "R06_WOJ_07",
    "section": "Wojny napoleońskie",
    "type": "match",
    "prompt": "Połącz bitwę z właściwym przeciwnikiem Francji.",
    "options": null,
    "left": [
      "Trafalgar",
      "Austerlitz",
      "Jena",
      "Frydland"
    ],
    "right": [
      "flota brytyjska przeciw flocie francusko-hiszpańskiej",
      "Austria i Rosja",
      "Prusy",
      "Rosja"
    ],
    "answer": {
      "Trafalgar": "flota brytyjska przeciw flocie francusko-hiszpańskiej",
      "Austerlitz": "Austria i Rosja",
      "Jena": "Prusy",
      "Frydland": "Rosja"
    },
    "image": "r06_trafalgar.jpg",
    "explanation": "Trafalgar był zwycięstwem floty brytyjskiej nad francusko-hiszpańską, Austerlitz klęską Austrii i Rosji, Jena klęską Prus, a Frydland klęską Rosji."
  },
  {
    "id": "R06_WOJ_08",
    "section": "Wojny napoleońskie",
    "type": "sort",
    "prompt": "Przyporządkuj wydarzenia do sukcesów Napoleona na lądzie albo do niepowodzenia w walce z Wielką Brytanią.",
    "options": null,
    "items": [
      "Austerlitz",
      "Jena",
      "Frydland",
      "Trafalgar"
    ],
    "categories": [
      "sukces Napoleona na lądzie",
      "niepowodzenie wobec Wielkiej Brytanii"
    ],
    "answer": {
      "sukces Napoleona na lądzie": [
        "Austerlitz",
        "Jena",
        "Frydland"
      ],
      "niepowodzenie wobec Wielkiej Brytanii": [
        "Trafalgar"
      ]
    },
    "explanation": "Napoleon odnosił wielkie zwycięstwa lądowe pod Austerlitz, Jeną i Frydlandem, ale brytyjska flota zwyciężyła pod Trafalgarem."
  },
  {
    "id": "R06_WOJ_09",
    "section": "Wojny napoleońskie",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo, którego Napoleon nie zdołał pokonać i które pozostało jego głównym wrogiem: Austria, Prusy, Rosja, Anglia.",
    "options": null,
    "answer": "Anglia",
    "explanation": "Austria, Prusy i Rosja ponosiły klęski w wojnach z Napoleonem. Anglia pozostała niepokonana, a jej flota panowała na morzach."
  },
  {
    "id": "R06_WOJ_10",
    "section": "Wojny napoleońskie",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w kolejności chronologicznej.",
    "options": null,
    "items": [
      "bitwa pod Jeną",
      "pokój w Tylży",
      "bitwa pod Trafalgarem",
      "ogłoszenie blokady kontynentalnej",
      "bitwa pod Austerlitz",
      "bitwa pod Frydlandem"
    ],
    "answer": [
      "bitwa pod Trafalgarem",
      "bitwa pod Austerlitz",
      "bitwa pod Jeną",
      "ogłoszenie blokady kontynentalnej",
      "bitwa pod Frydlandem",
      "pokój w Tylży"
    ],
    "image": "r06_austerlitz.jpg",
    "explanation": "W 1805 r. najpierw doszło do Trafalgaru, potem do Austerlitz. W 1806 r. rozegrała się bitwa pod Jeną i ogłoszono blokadę, a w 1807 r. Napoleon zwyciężył pod Frydlandem i zawarł pokój w Tylży."
  },
  {
    "id": "R06_WOJ_11",
    "section": "Wojny napoleońskie",
    "type": "single_choice",
    "prompt": "Jaki był główny cel blokady kontynentalnej?",
    "options": [
      "zniszczenie gospodarki Wielkiej Brytanii",
      "odbudowa Świętego Cesarstwa Rzymskiego",
      "wzmocnienie handlu brytyjskiego",
      "zakończenie wojny z Austrią",
      "przekazanie Prus Rosji",
      "likwidacja Kodeksu Napoleona"
    ],
    "answer": 0,
    "explanation": "Zakaz handlu z Wielką Brytanią miał zniszczyć jej gospodarkę i w ten sposób osłabić głównego przeciwnika Francji."
  },
  {
    "id": "R06_WOJ_12",
    "section": "Wojny napoleońskie",
    "type": "scenario",
    "prompt": "Po pokonaniu Austrii, Prus i Rosji Napoleon powiększa cesarstwo, tworzy nowe państwa, obsadza ich trony zaufanymi ludźmi i zmusza niemal całą Europę do blokady Wielkiej Brytanii. Co najlepiej opisuje tę sytuację?",
    "options": [
      "Francja u szczytu potęgi",
      "powrót do rządów dyrektoriatu",
      "upadek Francji po Waterloo",
      "odbudowa Rzeczypospolitej",
      "zwycięstwo Anglii na lądzie",
      "koniec wojen napoleońskich"
    ],
    "answer": 0,
    "image": "r06_napoleon_berlin.jpg",
    "explanation": "Po 1807 r. Francja znalazła się u szczytu potęgi, a Napoleon stworzył system zależnych od siebie państw w Europie."
  },
  {
    "id": "R06_LEG_01",
    "section": "Legiony i sprawa polska",
    "type": "single_choice",
    "prompt": "Kto został dowódcą Legionów Polskich we Włoszech?",
    "options": [
      "Jan Henryk Dąbrowski",
      "Józef Poniatowski",
      "Tadeusz Kościuszko",
      "Józef Wybicki",
      "Fryderyk August I",
      "Aleksander I"
    ],
    "answer": 0,
    "image": "r06_legiony_w_rzymie.jpg",
    "explanation": "Legiony Polskie powstały na początku 1797 r., a ich dowódcą został generał Jan Henryk Dąbrowski."
  },
  {
    "id": "R06_LEG_02",
    "section": "Legiony i sprawa polska",
    "type": "true_false",
    "prompt": "Legiony Polskie we Włoszech powstały na początku 1797 r. w służbie Republiki Lombardzkiej.",
    "options": null,
    "answer": true,
    "explanation": "Napoleon zgodził się na utworzenie Legionów w służbie Republiki Lombardzkiej, zależnego od niego włoskiego państewka."
  },
  {
    "id": "R06_LEG_03",
    "section": "Legiony i sprawa polska",
    "type": "multi_select",
    "prompt": "Zaznacz grupy, z których rekrutowali się legioniści.",
    "options": [
      "Polacy z armii austriackiej wzięci do niewoli",
      "ochotnicy z zaborów",
      "ochotnicy z emigracji",
      "brytyjscy marynarze",
      "rosyjscy generałowie",
      "papiescy urzędnicy"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Do Legionów trafiali Polacy wcieleni wcześniej do armii austriackiej i wzięci do niewoli francuskiej, a także ochotnicy z zaborów i emigracji."
  },
  {
    "id": "R06_LEG_04",
    "section": "Legiony i sprawa polska",
    "type": "fill_in",
    "prompt": "W lipcu 1797 r. Józef Wybicki po raz pierwszy zaśpiewał __________, którego słowa wyrażały nadzieję na powrót do __________ z bronią w ręku.",
    "options": null,
    "answer": [
      "Mazurek Dąbrowskiego",
      "ojczyzny"
    ],
    "explanation": "Mazurek Dąbrowskiego powstał na włoskiej ziemi dla legionistów i wyrażał ich nadzieję na powrót do ojczyzny."
  },
  {
    "id": "R06_LEG_05",
    "section": "Legiony i sprawa polska",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do zasad służby w Legionach albo do nadziei politycznych legionistów.",
    "options": null,
    "items": [
      "zniesienie kary chłosty",
      "zakaz pojedynków",
      "awans za wiedzę i zasługi",
      "lekcje czytania i pisania",
      "wyzwolenie Polski",
      "powrót do ojczyzny z bronią w ręku"
    ],
    "categories": [
      "zasady służby w Legionach",
      "nadzieje polityczne legionistów"
    ],
    "answer": {
      "zasady służby w Legionach": [
        "zniesienie kary chłosty",
        "zakaz pojedynków",
        "awans za wiedzę i zasługi",
        "lekcje czytania i pisania"
      ],
      "nadzieje polityczne legionistów": [
        "wyzwolenie Polski",
        "powrót do ojczyzny z bronią w ręku"
      ]
    },
    "image": "r06_legiony_w_rzymie.jpg",
    "explanation": "Dąbrowski wprowadzał w Legionach zasady wolności, równości i braterstwa, a żołnierze liczyli, że walka u boku Francuzów doprowadzi do wyzwolenia Polski."
  },
  {
    "id": "R06_LEG_06",
    "section": "Legiony i sprawa polska",
    "type": "riddle",
    "prompt": "Wyspa, na którą Napoleon wysłał prawie 6 tysięcy legionistów po pokoju z Austrią w 1801 r., to...",
    "options": null,
    "answer": "Santo Domingo",
    "altAnswers": [
      "Santo Domingo",
      "Haiti"
    ],
    "explanation": "Legioniści zostali wysłani na Santo Domingo, czyli dzisiejsze Haiti. Większość zginęła lub zmarła na choroby tropikalne."
  },
  {
    "id": "R06_LEG_07",
    "section": "Legiony i sprawa polska",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który Dąbrowski rozwijał zamiast go zakazywać: kara chłosty, pojedynki, pijaństwo, lekcje czytania i pisania.",
    "options": null,
    "answer": "lekcje czytania i pisania",
    "explanation": "Dąbrowski zniósł karę chłosty oraz zakazał pojedynków i pijaństwa. Oficerowie prowadzili natomiast lekcje czytania i pisania."
  },
  {
    "id": "R06_LEG_08",
    "section": "Legiony i sprawa polska",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z Legionami od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "powstanie Legionów Polskich",
      "wysłanie legionistów na Santo Domingo",
      "III rozbiór Polski",
      "pierwsze wykonanie Mazurka Dąbrowskiego",
      "klęska insurekcji kościuszkowskiej"
    ],
    "answer": [
      "klęska insurekcji kościuszkowskiej",
      "III rozbiór Polski",
      "powstanie Legionów Polskich",
      "pierwsze wykonanie Mazurka Dąbrowskiego",
      "wysłanie legionistów na Santo Domingo"
    ],
    "image": "r06_dabrowski_poznan.jpg",
    "explanation": "Po klęsce insurekcji w 1794 r. nastąpił III rozbiór Polski, w 1797 r. powstały Legiony i Mazurek Dąbrowskiego, a po pokoju z Austrią w 1801 r. legionistów wysłano na Santo Domingo."
  },
  {
    "id": "R06_LEG_09",
    "section": "Legiony i sprawa polska",
    "type": "scenario",
    "prompt": "Jest 1806 r. Polak słyszy, że Napoleon walczył ze wszystkimi trzema zaborcami i jest wybitnym wodzem. Dlaczego może poprzeć cesarza?",
    "options": [
      "liczy na odbudowę Rzeczypospolitej",
      "chce utrwalić rozbiory",
      "oczekuje likwidacji polskiej armii",
      "popiera blokadę Polski",
      "chce oddać ziemie zaborcom",
      "sprzeciwia się walce z Prusami"
    ],
    "answer": 0,
    "image": "r06_napoleon_berlin.jpg",
    "explanation": "Wielu Polaków wierzyło, że walka u boku Francuzów przekona Napoleona do odbudowy Rzeczypospolitej."
  },
  {
    "id": "R06_LEG_10",
    "section": "Legiony i sprawa polska",
    "type": "match",
    "prompt": "Połącz postać z jej rolą w historii Legionów i sprawy polskiej.",
    "options": null,
    "left": [
      "Jan Henryk Dąbrowski",
      "Józef Wybicki",
      "Napoleon Bonaparte",
      "polscy emigranci"
    ],
    "right": [
      "dowódca Legionów Polskich",
      "autor słów Mazurka Dąbrowskiego",
      "zgodził się na utworzenie Legionów",
      "zaproponowali utworzenie polskich oddziałów"
    ],
    "answer": {
      "Jan Henryk Dąbrowski": "dowódca Legionów Polskich",
      "Józef Wybicki": "autor słów Mazurka Dąbrowskiego",
      "Napoleon Bonaparte": "zgodził się na utworzenie Legionów",
      "polscy emigranci": "zaproponowali utworzenie polskich oddziałów"
    },
    "explanation": "Dąbrowski dowodził Legionami, Wybicki napisał słowa Mazurka Dąbrowskiego, Napoleon zgodził się na Legiony, a polscy emigranci zaproponowali stworzenie oddziałów walczących po stronie Francji."
  },
  {
    "id": "R06_LEG_11",
    "section": "Legiony i sprawa polska",
    "type": "single_choice",
    "prompt": "Dlaczego jesienią 1806 r. Napoleon nie zamierzał odbudować Rzeczypospolitej?",
    "options": [
      "utrudniłoby to porozumienie z carem w sprawie blokady",
      "obawiał się polskiej floty",
      "Polacy odmówili żywności wojskom",
      "Austria odbudowała już Polskę",
      "Wielka Brytania zgodziła się na rozbiory",
      "Prusy popierały odbudowę Polski"
    ],
    "answer": 0,
    "image": "r06_dabrowski_poznan.jpg",
    "explanation": "Odbudowa Polski utrudniłaby rozmowy z carem. Napoleon chciał przede wszystkim zmusić Rosję do udziału w blokadzie kontynentalnej przeciw Anglii."
  },
  {
    "id": "R06_LEG_12",
    "section": "Legiony i sprawa polska",
    "type": "scenario",
    "prompt": "Wojska francuskie mają wejść do zaboru pruskiego przed zimą 1806 r. Napoleon liczy na pomoc miejscowej ludności. Czego przede wszystkim potrzebuje od Polaków?",
    "options": [
      "kwater, żywności i sojuszniczej armii",
      "floty oceanicznej i kolonii",
      "nowej dynastii brytyjskiej",
      "likwidacji wszystkich polskich oddziałów",
      "zamknięcia portów francuskich",
      "wsparcia dla Prus"
    ],
    "answer": 0,
    "explanation": "Napoleon potrzebował kwater i żywności dla armii oraz liczył na utworzenie sojuszniczej armii polskiej."
  },
  {
    "id": "R06_KSW_01",
    "section": "Księstwo Warszawskie",
    "type": "single_choice",
    "prompt": "Na mocy jakiego pokoju utworzono Księstwo Warszawskie w 1807 r.?",
    "options": [
      "pokoju w Tylży",
      "pokoju w Wiedniu",
      "pokoju w Paryżu",
      "pokoju w Berlinie",
      "pokoju w Moskwie",
      "pokoju w Lipsku"
    ],
    "answer": 0,
    "image": "r06_tylza_spotkanie.jpg",
    "explanation": "Księstwo Warszawskie powstało po pokoju w Tylży zawartym przez Francję z Rosją i Prusami."
  },
  {
    "id": "R06_KSW_02",
    "section": "Księstwo Warszawskie",
    "type": "multi_select",
    "prompt": "Zaznacz cechy Księstwa Warszawskiego.",
    "options": [
      "monarchia konstytucyjna",
      "zależność od Francji",
      "obowiązywanie Kodeksu Napoleona",
      "zniesienie poddaństwa chłopów",
      "pełna niezależność od Francji",
      "zniesienie pańszczyzny"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Księstwo było monarchią konstytucyjną zależną od Francji. Obowiązywał w nim Kodeks Napoleona, zniesiono poddaństwo chłopów, ale pozostawiono pańszczyznę."
  },
  {
    "id": "R06_KSW_03",
    "section": "Księstwo Warszawskie",
    "type": "true_false",
    "prompt": "Księstwo Warszawskie miało dostęp do morza.",
    "options": null,
    "answer": false,
    "explanation": "Księstwo Warszawskie nie miało dostępu do morza."
  },
  {
    "id": "R06_KSW_04",
    "section": "Księstwo Warszawskie",
    "type": "fill_in",
    "prompt": "W 1807 r. Księstwo Warszawskie miało powierzchnię około __________ tysięcy km² i liczyło około __________ miliona mieszkańców.",
    "options": null,
    "answer": [
      "104",
      "2,5"
    ],
    "explanation": "Początkowo Księstwo miało 104 tysiące km² powierzchni i 2,5 miliona mieszkańców."
  },
  {
    "id": "R06_KSW_05",
    "section": "Księstwo Warszawskie",
    "type": "riddle",
    "prompt": "Król Saksonii, który został dziedzicznym księciem warszawskim, to...",
    "options": null,
    "answer": "Fryderyk August I",
    "altAnswers": [
      "Fryderyk August I",
      "Fryderyk August"
    ],
    "explanation": "Władcą Księstwa Warszawskiego został Fryderyk August I, dotychczasowy król Saksonii."
  },
  {
    "id": "R06_KSW_06",
    "section": "Księstwo Warszawskie",
    "type": "match",
    "prompt": "Połącz osobę lub instytucję z jej rolą w Księstwie Warszawskim.",
    "options": null,
    "left": [
      "Fryderyk August I",
      "francuski rezydent",
      "sejm",
      "Józef Poniatowski"
    ],
    "right": [
      "kierował rządem i prowadził politykę zagraniczną",
      "kontrolował politykę zagraniczną i siły zbrojne",
      "uchwalał projekty rządu",
      "wódz naczelny armii"
    ],
    "answer": {
      "Fryderyk August I": "kierował rządem i prowadził politykę zagraniczną",
      "francuski rezydent": "kontrolował politykę zagraniczną i siły zbrojne",
      "sejm": "uchwalał projekty rządu",
      "Józef Poniatowski": "wódz naczelny armii"
    },
    "image": "r06_poniatowski_portret.jpg",
    "explanation": "Książę warszawski kierował rządem i polityką zagraniczną, francuski rezydent kontrolował politykę zagraniczną i siły zbrojne, sejm uchwalał projekty rządu, a Poniatowski dowodził armią."
  },
  {
    "id": "R06_KSW_07",
    "section": "Księstwo Warszawskie",
    "type": "scenario",
    "prompt": "Polscy szwoleżerowie w ciągu ośmiu minut zdobywają wszystkie armaty w wąskim górskim wąwozie bronionym przez Hiszpanów. Jaki był skutek szarży?",
    "options": [
      "otworzyło Napoleonowi drogę do Madrytu",
      "zakończyło wojnę z Rosją",
      "doprowadziło do pokoju w Tylży",
      "zniszczyło flotę brytyjską",
      "przywróciło Święte Cesarstwo Rzymskie",
      "spowodowało abdykację Napoleona"
    ],
    "answer": 0,
    "image": "r06_somosierra.jpg",
    "explanation": "Zwycięstwo pod Somosierrą otworzyło Napoleonowi drogę do Madrytu."
  },
  {
    "id": "R06_KSW_08",
    "section": "Księstwo Warszawskie",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie opisuje reform Księstwa Warszawskiego: Kodeks Napoleona, zniesienie poddaństwa chłopów, polski język dokumentów, zniesienie pańszczyzny.",
    "options": null,
    "answer": "zniesienie pańszczyzny",
    "explanation": "W Księstwie zniesiono poddaństwo chłopów, ale pańszczyzna pozostała. Wprowadzono Kodeks Napoleona i polski język dokumentów urzędowych."
  },
  {
    "id": "R06_KSW_09",
    "section": "Księstwo Warszawskie",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z Księstwem Warszawskim w kolejności chronologicznej.",
    "options": null,
    "items": [
      "bitwa pod Raszynem",
      "utworzenie Księstwa Warszawskiego",
      "powiększenie Księstwa Warszawskiego",
      "szarża pod Somosierrą",
      "zwycięstwo Napoleona pod Wagram"
    ],
    "answer": [
      "utworzenie Księstwa Warszawskiego",
      "szarża pod Somosierrą",
      "bitwa pod Raszynem",
      "zwycięstwo Napoleona pod Wagram",
      "powiększenie Księstwa Warszawskiego"
    ],
    "image": "r06_tylza_spotkanie.jpg",
    "explanation": "Księstwo utworzono w 1807 r., szarża pod Somosierrą miała miejsce w 1808 r., a w 1809 r. stoczono bitwę pod Raszynem, Napoleon zwyciężył pod Wagram i Księstwo powiększono."
  },
  {
    "id": "R06_KSW_10",
    "section": "Księstwo Warszawskie",
    "type": "sort",
    "prompt": "Przyporządkuj dane do Księstwa Warszawskiego w 1807 r. albo po powiększeniu w 1809 r.",
    "options": null,
    "items": [
      "104 tysiące km²",
      "2,5 miliona mieszkańców",
      "30 tysięcy żołnierzy",
      "142 tysiące km²",
      "4,3 miliona mieszkańców",
      "60 tysięcy żołnierzy"
    ],
    "categories": [
      "Księstwo w 1807 r.",
      "Księstwo po powiększeniu w 1809 r."
    ],
    "answer": {
      "Księstwo w 1807 r.": [
        "104 tysiące km²",
        "2,5 miliona mieszkańców",
        "30 tysięcy żołnierzy"
      ],
      "Księstwo po powiększeniu w 1809 r.": [
        "142 tysiące km²",
        "4,3 miliona mieszkańców",
        "60 tysięcy żołnierzy"
      ]
    },
    "explanation": "W 1807 r. Księstwo miało 104 tysiące km², 2,5 miliona mieszkańców i 30-tysięczną armię. Od 1809 r. miało 142 tysiące km², 4,3 miliona mieszkańców i 60-tysięczną armię."
  },
  {
    "id": "R06_KSW_11",
    "section": "Księstwo Warszawskie",
    "type": "single_choice",
    "prompt": "Jak zakończyła się bitwa pod Raszynem w 1809 r.?",
    "options": [
      "nierozstrzygnięciem",
      "pełnym zwycięstwem Austrii",
      "pełnym zwycięstwem Rosji",
      "kapitulacją Wielkiej Brytanii",
      "pokojem w Tylży",
      "abdykacją Fryderyka Augusta I"
    ],
    "answer": 0,
    "explanation": "Bitwa pod Raszynem była nierozstrzygnięta. Poniatowski wycofał się, a następnie ruszył na południe i zajął znaczną część Galicji."
  },
  {
    "id": "R06_KSW_12",
    "section": "Księstwo Warszawskie",
    "type": "scenario",
    "prompt": "Pod Raszynem 15 tysięcy żołnierzy Poniatowskiego walczy z około 32 tysiącami Austriaków. Dlaczego Austriacy nie mogli w pełni wykorzystać przewagi liczebnej?",
    "options": [
      "walczono na bagnistym terenie dogodnym do obrony",
      "Austriacy nie mieli piechoty",
      "Polacy dysponowali flotą",
      "Austria była sprzymierzona z Księstwem",
      "bitwa odbyła się na morzu",
      "Austriacy walczyli tylko nocą"
    ],
    "answer": 0,
    "explanation": "Polacy zajęli bagnisty, dogodny do obrony teren, który ograniczał możliwości liczniejszej armii austriackiej."
  },
  {
    "id": "R06_UPA_01",
    "section": "Wyprawa na Rosję i upadek",
    "type": "single_choice",
    "prompt": "Dlaczego car Aleksander I w 1811 r. otworzył rosyjskie porty dla brytyjskich towarów?",
    "options": [
      "blokada powodowała ogromne straty finansowe Rosji",
      "Rosja chciała wzmocnić blokadę",
      "Napoleon nakazał otwarcie portów",
      "Prusy zamknęły wszystkie porty rosyjskie",
      "Francja zniosła handel z Europą",
      "car chciał pomóc Francji pod Trafalgarem"
    ],
    "answer": 0,
    "explanation": "Blokada kontynentalna przynosiła Rosji ogromne straty finansowe, a car chciał też uniezależnić się od Napoleona."
  },
  {
    "id": "R06_UPA_02",
    "section": "Wyprawa na Rosję i upadek",
    "type": "multi_select",
    "prompt": "Zaznacz grupy żołnierzy, które wchodziły w skład Wielkiej Armii wyprawiającej się na Rosję w 1812 r.",
    "options": [
      "Francuzi",
      "Polacy",
      "Austriacy",
      "Prusacy",
      "Sasi",
      "Brytyjczycy"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Francuzi stanowili około jednej trzeciej Wielkiej Armii. Walczyli w niej także Polacy oraz zmuszeni do sojuszu z Francją Austriacy, Prusacy, Sasi i inni."
  },
  {
    "id": "R06_UPA_03",
    "section": "Wyprawa na Rosję i upadek",
    "type": "true_false",
    "prompt": "Francuzi stanowili około jednej trzeciej ponad 600-tysięcznej Wielkiej Armii zebranej przeciw Rosji.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik podaje, że Francuzi stanowili jedną trzecią armii, a resztę tworzyli m.in. Polacy oraz sojusznicy z innych państw."
  },
  {
    "id": "R06_UPA_04",
    "section": "Wyprawa na Rosję i upadek",
    "type": "scenario",
    "prompt": "Latem 1812 r. armia rosyjska cofa się w głąb kraju, unika większych starć i niszczy zapasy żywności. Co chce w ten sposób osiągnąć?",
    "options": [
      "osłabić Wielką Armię bez decydującej bitwy",
      "ułatwić Napoleonowi marsz",
      "zaopatrzyć Francuzów w żywność",
      "zachęcić Rosję do blokady",
      "przerzucić flotę na Atlantyk",
      "zdobyć Paryż przed zimą"
    ],
    "answer": 0,
    "image": "r06_odwrot_z_rosji.jpg",
    "explanation": "Rosjanie unikali decydującej bitwy i pozbawiali Wielką Armię zaopatrzenia, przez co siły Napoleona szybko topniały."
  },
  {
    "id": "R06_UPA_05",
    "section": "Wyprawa na Rosję i upadek",
    "type": "fill_in",
    "prompt": "We wrześniu 1812 r. Napoleon odniósł niepełne zwycięstwo pod __________, a tydzień później wkroczył do opuszczonej przez większość mieszkańców __________.",
    "options": null,
    "answer": [
      "Borodino",
      "Moskwy"
    ],
    "explanation": "Pod Borodino Napoleon nie zniszczył armii rosyjskiej. Następnie wkroczył do Moskwy, która została podpalona przez Rosjan."
  },
  {
    "id": "R06_UPA_06",
    "section": "Wyprawa na Rosję i upadek",
    "type": "match",
    "prompt": "Połącz wydarzenie z rokiem.",
    "options": null,
    "left": [
      "otwarcie rosyjskich portów dla brytyjskich towarów",
      "wyprawa Wielkiej Armii na Rosję",
      "bitwa pod Lipskiem",
      "pierwsza abdykacja Napoleona",
      "bitwa pod Waterloo"
    ],
    "right": [
      "1811",
      "1812",
      "1813",
      "1814",
      "1815"
    ],
    "answer": {
      "otwarcie rosyjskich portów dla brytyjskich towarów": "1811",
      "wyprawa Wielkiej Armii na Rosję": "1812",
      "bitwa pod Lipskiem": "1813",
      "pierwsza abdykacja Napoleona": "1814",
      "bitwa pod Waterloo": "1815"
    },
    "explanation": "Rosja otworzyła porty dla brytyjskich towarów w 1811 r., wyprawa na Rosję nastąpiła w 1812 r., Lipsk w 1813 r., abdykacja w 1814 r., a Waterloo w 1815 r."
  },
  {
    "id": "R06_UPA_07",
    "section": "Wyprawa na Rosję i upadek",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia kampanii rosyjskiej 1812 r. w kolejności.",
    "options": null,
    "items": [
      "początek odwrotu z Moskwy",
      "bitwa pod Borodino",
      "przeprawa przez Berezynę",
      "wkroczenie Wielkiej Armii do Rosji",
      "zajęcie Moskwy"
    ],
    "answer": [
      "wkroczenie Wielkiej Armii do Rosji",
      "bitwa pod Borodino",
      "zajęcie Moskwy",
      "początek odwrotu z Moskwy",
      "przeprawa przez Berezynę"
    ],
    "image": "r06_odwrot_z_rosji.jpg",
    "explanation": "Wielka Armia wkroczyła do Rosji w czerwcu, we wrześniu walczyła pod Borodino i zajęła Moskwę, w połowie października rozpoczęła odwrót, a później resztki armii przeprawiały się przez Berezynę."
  },
  {
    "id": "R06_UPA_08",
    "section": "Wyprawa na Rosję i upadek",
    "type": "odd_one_out",
    "prompt": "Wskaż wydarzenie niezwiązane z wyprawą na Rosję w 1812 r.: Borodino, Moskwa, Berezyna, Trafalgar.",
    "options": null,
    "answer": "Trafalgar",
    "explanation": "Borodino, Moskwa i Berezyna należą do kampanii rosyjskiej 1812 r. Trafalgar był bitwą morską z 1805 r."
  },
  {
    "id": "R06_UPA_09",
    "section": "Wyprawa na Rosję i upadek",
    "type": "riddle",
    "prompt": "Książę, wódz armii Księstwa Warszawskiego, który pozostał wierny Napoleonowi i zginął w rzece Elster podczas bitwy pod Lipskiem, to...",
    "options": null,
    "answer": "Józef Poniatowski",
    "altAnswers": [
      "Józef Poniatowski",
      "Poniatowski"
    ],
    "image": "r06_poniatowski_portret.jpg",
    "explanation": "Józef Poniatowski walczył u boku Napoleona do końca. Pod Lipskiem został mianowany marszałkiem Francji i zginął w Elsterze."
  },
  {
    "id": "R06_UPA_10",
    "section": "Wyprawa na Rosję i upadek",
    "type": "scenario",
    "prompt": "Jesienią 1813 r. przez cztery dni walczą żołnierze kilkunastu narodowości, w tym Polacy. Napoleon ponosi klęskę. O jaką bitwę chodzi?",
    "options": [
      "Lipsk",
      "Frydland",
      "Trafalgar",
      "Raszyn",
      "Somosierrę",
      "Borodino"
    ],
    "answer": 0,
    "image": "r06_lipsk_bitwa.jpg",
    "explanation": "Bitwę pod Lipskiem nazwano bitwą narodów ze względu na udział żołnierzy wielu narodowości."
  },
  {
    "id": "R06_UPA_11",
    "section": "Wyprawa na Rosję i upadek",
    "type": "single_choice",
    "prompt": "Jaką wyspę oddano Napoleonowi po jego abdykacji w 1814 r.?",
    "options": [
      "Elbę",
      "Korsykę",
      "Santo Domingo",
      "Sycylię",
      "Maltę",
      "Kretę"
    ],
    "answer": 0,
    "explanation": "Po zajęciu Paryża i abdykacji Napoleona zwycięzcy oddali mu we władanie Elbę, niewielką wyspę na Morzu Śródziemnym."
  },
  {
    "id": "R06_UPA_12",
    "section": "Wyprawa na Rosję i upadek",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia prowadzące do ostatecznego upadku Napoleona.",
    "options": null,
    "items": [
      "klęska pod Waterloo",
      "bitwa pod Lipskiem",
      "abdykacja Napoleona",
      "zajęcie Warszawy przez Rosjan",
      "powrót Napoleona z Elby"
    ],
    "answer": [
      "zajęcie Warszawy przez Rosjan",
      "bitwa pod Lipskiem",
      "abdykacja Napoleona",
      "powrót Napoleona z Elby",
      "klęska pod Waterloo"
    ],
    "image": "r06_lipsk_bitwa.jpg",
    "explanation": "W 1813 r. Rosjanie zajęli Warszawę, potem Napoleon przegrał pod Lipskiem. W 1814 r. abdykował, a w 1815 r. wrócił na sto dni i poniósł ostateczną klęskę pod Waterloo."
  },
  {
    "id": "R06_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Około ilu głosujących sprzeciwiło się koronacji Napoleona w referendum poprzedzającym jego koronację cesarską?",
    "options": [
      "2,5 tysiąca",
      "25 tysięcy",
      "250 tysięcy",
      "1 milion",
      "2 miliony",
      "3,5 miliona"
    ],
    "answer": 0,
    "image": "r06_napoleon_portret.jpg",
    "explanation": "Za koronacją opowiedziało się około 3,5 miliona zapytanych, a przeciw było około 2,5 tysiąca."
  },
  {
    "id": "R06_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Niektóre przepisy Kodeksu Napoleona obowiązywały w Polsce aż do roku __________.",
    "options": null,
    "answer": [
      "1946"
    ],
    "explanation": "Podręcznik podaje, że część przepisów Kodeksu Napoleona obowiązywała w Polsce do 1946 r."
  },
  {
    "id": "R06_HARD_03",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe informacje dotyczące bitwy pod Austerlitz.",
    "options": [
      "armia rosyjsko-austriacka liczyła około 85 tysięcy żołnierzy",
      "armia francuska liczyła około 70 tysięcy żołnierzy",
      "Napoleon ukrył główne siły za niewielkim wzgórzem",
      "Rosjanie i Austriacy stracili łącznie około 36 tysięcy ludzi",
      "Francuzi stracili około 9 tysięcy ludzi",
      "bitwa zakończyła się zwycięstwem rosyjsko-austriackim"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "r06_austerlitz.jpg",
    "explanation": "Armia rosyjsko-austriacka liczyła około 85 tysięcy ludzi, francuska około 70 tysięcy. Napoleon ukrył główne siły, a łączne straty Rosjan i Austriaków wyniosły 36 tysięcy przy 9 tysiącach strat francuskich."
  },
  {
    "id": "R06_HARD_04",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz datę z wydarzeniem z początków kariery i rządów Napoleona.",
    "options": null,
    "left": [
      "1795",
      "1796",
      "1797",
      "1799",
      "1801"
    ],
    "right": [
      "konstytucja Republiki Francuskiej",
      "początek kampanii włoskiej Napoleona",
      "utworzenie Legionów Polskich",
      "zamach stanu Napoleona",
      "konkordat z papieżem"
    ],
    "answer": {
      "1795": "konstytucja Republiki Francuskiej",
      "1796": "początek kampanii włoskiej Napoleona",
      "1797": "utworzenie Legionów Polskich",
      "1799": "zamach stanu Napoleona",
      "1801": "konkordat z papieżem"
    },
    "explanation": "Konstytucję uchwalono w 1795 r., kampania włoska rozpoczęła się w 1796 r., Legiony powstały w 1797 r., zamach stanu nastąpił w 1799 r., a konkordat zawarto w 1801 r."
  },
  {
    "id": "R06_HARD_05",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia polskie od klęski insurekcji kościuszkowskiej do wejścia Francuzów do zaboru pruskiego.",
    "options": null,
    "items": [
      "wysłanie legionistów na Santo Domingo",
      "wkroczenie wojsk francuskich do zaboru pruskiego",
      "powstanie Legionów Polskich",
      "III rozbiór Polski",
      "pierwsze wykonanie Mazurka Dąbrowskiego",
      "klęska insurekcji kościuszkowskiej"
    ],
    "answer": [
      "klęska insurekcji kościuszkowskiej",
      "III rozbiór Polski",
      "powstanie Legionów Polskich",
      "pierwsze wykonanie Mazurka Dąbrowskiego",
      "wysłanie legionistów na Santo Domingo",
      "wkroczenie wojsk francuskich do zaboru pruskiego"
    ],
    "explanation": "Kolejność prowadzi od klęski insurekcji w 1794 r. przez III rozbiór, Legiony i Mazurek, wysłanie legionistów na Santo Domingo po wkroczenie Francuzów do Wielkopolski w 1806 r."
  },
  {
    "id": "R06_HARD_06",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Około ilu polskich szwoleżerów liczył oddział wyznaczony do szarży pod Somosierrą?",
    "options": [
      "125",
      "250",
      "500",
      "1000",
      "2500",
      "8000"
    ],
    "answer": 0,
    "image": "r06_somosierra.jpg",
    "explanation": "Do przełamania obrony wąwozu Napoleon wyznaczył polski oddział lekkiej jazdy liczący około 125 ludzi."
  },
  {
    "id": "R06_HARD_07",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz dane opisujące Księstwo Warszawskie po powiększeniu w 1809 r.",
    "options": [
      "142 tysiące km² powierzchni",
      "4,3 miliona mieszkańców",
      "60 tysięcy żołnierzy",
      "przyłączono 38 tysięcy km²",
      "na przyłączonym obszarze mieszkało 1,8 miliona ludzi",
      "uzyskano dostęp do morza"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Po powiększeniu Księstwo miało 142 tysiące km² i 4,3 miliona mieszkańców, a jego armia liczyła 60 tysięcy żołnierzy. Przyłączone obszary miały 38 tysięcy km² i 1,8 miliona mieszkańców."
  },
  {
    "id": "R06_HARD_08",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Po zwycięstwie Napoleona nad Austrią Księstwo Warszawskie powiększono o __________ tysięcy km², zamieszkanych przez __________ miliona ludzi.",
    "options": null,
    "answer": [
      "38",
      "1,8"
    ],
    "explanation": "Po wojnie 1809 r. do Księstwa włączono 38 tysięcy km² zajętych przez Polaków, na których mieszkało 1,8 miliona ludzi."
  },
  {
    "id": "R06_HARD_09",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz etap wyprawy na Rosję z przybliżoną liczebnością Wielkiej Armii podaną w materiale.",
    "options": null,
    "left": [
      "początek wyprawy",
      "wrzesień 1812 r.",
      "pobyt w Moskwie",
      "liczba poległych i zmarłych w Rosji"
    ],
    "right": [
      "ponad 600 tysięcy",
      "mniej niż 200 tysięcy",
      "mniej niż 100 tysięcy",
      "co najmniej 300 tysięcy"
    ],
    "answer": {
      "początek wyprawy": "ponad 600 tysięcy",
      "wrzesień 1812 r.": "mniej niż 200 tysięcy",
      "pobyt w Moskwie": "mniej niż 100 tysięcy",
      "liczba poległych i zmarłych w Rosji": "co najmniej 300 tysięcy"
    },
    "image": "r06_odwrot_z_rosji.jpg",
    "explanation": "Na początku armia liczyła ponad 600 tysięcy ludzi, we wrześniu mniej niż 200 tysięcy, w Moskwie mniej niż 100 tysięcy, a w całej kampanii w Rosji zginęło co najmniej 300 tysięcy żołnierzy."
  },
  {
    "id": "R06_HARD_10",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo, którego żołnierze nie wchodzili w skład Wielkiej Armii ruszającej na Rosję: Austria, Prusy, Saksonia, Wielka Brytania.",
    "options": null,
    "answer": "Wielka Brytania",
    "explanation": "Wielką Armię tworzyli m.in. Francuzi, Polacy, Austriacy, Prusacy i Sasi. Wielka Brytania była głównym przeciwnikiem Napoleona, a nie częścią jego armii."
  },
  {
    "id": "R06_HARD_11",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Podczas bitwy narodów Napoleon mianuje polskiego księcia marszałkiem Francji. Wkrótce dowódca ginie w nurtach Elstery, omyłkowo zastrzelony przez Francuzów. Kto to był?",
    "options": [
      "Józef Poniatowski",
      "Jan Henryk Dąbrowski",
      "Józef Wybicki",
      "Fryderyk August I",
      "Aleksander I",
      "Ludwik XVIII"
    ],
    "answer": 0,
    "image": "r06_lipsk_bitwa.jpg",
    "explanation": "Chodzi o Józefa Poniatowskiego, wodza naczelnego armii Księstwa Warszawskiego, który zginął podczas bitwy pod Lipskiem."
  },
  {
    "id": "R06_HARD_12",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od zerwania blokady przez Rosję do ostatecznej klęski Napoleona.",
    "options": null,
    "items": [
      "abdykacja Napoleona",
      "otwarcie rosyjskich portów dla brytyjskich towarów",
      "bitwa pod Waterloo",
      "wyprawa na Rosję",
      "bitwa pod Lipskiem",
      "powrót Napoleona z Elby"
    ],
    "answer": [
      "otwarcie rosyjskich portów dla brytyjskich towarów",
      "wyprawa na Rosję",
      "bitwa pod Lipskiem",
      "abdykacja Napoleona",
      "powrót Napoleona z Elby",
      "bitwa pod Waterloo"
    ],
    "explanation": "W 1811 r. Rosja otworzyła porty dla towarów brytyjskich, w 1812 r. Napoleon ruszył na Rosję, w 1813 r. przegrał pod Lipskiem, w 1814 r. abdykował, w marcu 1815 r. wrócił z Elby, a w czerwcu przegrał pod Waterloo."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r06",
  number: 6,
  title: "Okres napoleoński",
  icon: "🎖️",
  sectionOrder: [
    "Napoleon u władzy",
    "Wojny napoleońskie",
    "Legiony i sprawa polska",
    "Księstwo Warszawskie",
    "Wyprawa na Rosję i upadek"
  ],
  sectionIcons: {
    "Napoleon u władzy": "👑",
    "Wojny napoleońskie": "⚔️",
    "Legiony i sprawa polska": "🇵🇱",
    "Księstwo Warszawskie": "🏛️",
    "Wyprawa na Rosję i upadek": "❄️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
