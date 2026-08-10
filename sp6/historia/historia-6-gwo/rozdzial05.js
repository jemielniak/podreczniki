// Skróty sekcji (do identyfikatorów ćwiczeń):
//   SAS  = Czasy saskie
//   KRO  = Ostatni król Polski
//   STA  = Czasy stanisławowskie
//   SEJM = Sejm Wielki i Konstytucja 3 maja
//   ROZ  = II rozbiór Polski
//   UPA  = Upadek Rzeczpospolitej
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R05_SAS_01",
    "section": "Czasy saskie",
    "type": "single_choice",
    "prompt": "Który władca został koronowany na króla Polski w 1697 r. po przejściu z luteranizmu na katolicyzm?",
    "options": [
      "August II Sas",
      "August III Sas",
      "Stanisław Leszczyński",
      "Jan III Sobieski",
      "Stanisław August Poniatowski",
      "Karol XII"
    ],
    "answer": 0,
    "explanation": "Elektor Saksonii zmienił wyznanie, aby móc objąć polski tron, i w 1697 r. został koronowany jako August II.",
    "image": "r05_august_ii_sas_portret.jpg"
  },
  {
    "id": "R05_SAS_02",
    "section": "Czasy saskie",
    "type": "true_false",
    "prompt": "Czasy saskie to okres, w którym Rzeczpospolita pozostawała w unii personalnej z Saksonią.",
    "options": null,
    "answer": true,
    "explanation": "Od 1697 do 1763 r. królami Polski byli kolejno elektorzy Saksonii August II i August III, a oba państwa łączyła osoba władcy."
  },
  {
    "id": "R05_SAS_03",
    "section": "Czasy saskie",
    "type": "fill_in",
    "prompt": "Sejm niemy odbył się w roku __________ i zatwierdził układ wykluczający unię realną Rzeczpospolitej z __________.",
    "options": null,
    "answer": [
      "1717",
      "Saksonią"
    ],
    "altAnswers": [
      [
        "1717",
        "1717 r."
      ],
      [
        "Saksonią",
        "Saksonia"
      ]
    ],
    "explanation": "W 1717 r. sejm niemy zatwierdził wcześniejszy układ między Augustem II a konfederatami, który wykluczał unię realną z Saksonią.",
    "image": "r05_sejm_niemy.jpg"
  },
  {
    "id": "R05_SAS_04",
    "section": "Czasy saskie",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z czasów trzeciej wojny północnej w porządku chronologicznym.",
    "options": null,
    "items": [
      "Zwycięstwo Rosjan pod Połtawą",
      "Koronacja Stanisława Leszczyńskiego",
      "Bitwa pod Kliszowem",
      "Rozpoczęcie wojny przez Augusta II"
    ],
    "answer": [
      "Rozpoczęcie wojny przez Augusta II",
      "Bitwa pod Kliszowem",
      "Koronacja Stanisława Leszczyńskiego",
      "Zwycięstwo Rosjan pod Połtawą"
    ],
    "explanation": "August II rozpoczął wojnę w 1700 r., bitwa pod Kliszowem odbyła się w 1702 r., Stanisław Leszczyński został koronowany w 1705 r., a Rosjanie zwyciężyli pod Połtawą w 1709 r.",
    "image": "r05_bitwa_pod_poltawa.jpg"
  },
  {
    "id": "R05_SAS_05",
    "section": "Czasy saskie",
    "type": "scenario",
    "prompt": "Jest rok 1709. Armia rosyjska odnosi zwycięstwo, które przesądza o losach trzeciej wojny północnej. Gdzie rozegrała się ta bitwa?",
    "options": [
      "pod Połtawą",
      "pod Kliszowem",
      "pod Wiedniem",
      "pod Racławicami",
      "pod Zieleńcami",
      "pod Szczekocinami"
    ],
    "answer": 0,
    "explanation": "Zwycięstwo Rosjan nad Szwedami pod Połtawą w 1709 r. przesądziło o losach wojny i umożliwiło Augustowi II powrót na tron.",
    "image": "r05_bitwa_pod_poltawa.jpg"
  },
  {
    "id": "R05_SAS_06",
    "section": "Czasy saskie",
    "type": "match",
    "prompt": "Połącz osobę z działaniem lub wydarzeniem z czasów saskich.",
    "options": null,
    "left": [
      "August II",
      "Karol XII",
      "Piotr I",
      "Stanisław Konarski"
    ],
    "right": [
      "doprowadził do zależności Rzeczpospolitej od Rosji",
      "założył Collegium Nobilium",
      "rozpoczął trzecią wojnę północną jako elektor Saksonii",
      "narzucił Stanisława Leszczyńskiego na króla"
    ],
    "answer": {
      "August II": "rozpoczął trzecią wojnę północną jako elektor Saksonii",
      "Karol XII": "narzucił Stanisława Leszczyńskiego na króla",
      "Piotr I": "doprowadził do zależności Rzeczpospolitej od Rosji",
      "Stanisław Konarski": "założył Collegium Nobilium"
    },
    "explanation": "August II rozpoczął wojnę ze Szwecją, Karol XII poparł Leszczyńskiego, Piotr I wykorzystał konflikt króla ze szlachtą, a Konarski założył nowoczesną szkołę dla synów magnaterii.",
    "image": "r05_sejm_niemy.jpg"
  },
  {
    "id": "R05_SAS_07",
    "section": "Czasy saskie",
    "type": "multi_select",
    "prompt": "Zaznacz objawy słabości Rzeczpospolitej w czasach saskich.",
    "options": [
      "zrywanie sejmów",
      "mała armia",
      "własna polityka magnatów",
      "powszechna tolerancja religijna",
      "fałszowanie polskich pieniędzy przez Fryderyka II",
      "silna władza centralna"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Do objawów słabości należały m.in. zrywane sejmy, niewielka armia, samowola magnatów oraz zalew sfałszowanych pieniędzy pruskich."
  },
  {
    "id": "R05_SAS_08",
    "section": "Czasy saskie",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych jako korzystna zmiana czasów saskich: biblioteka Załuskich, Collegium Nobilium, wzrost liczby ludności, liberum veto.",
    "options": null,
    "answer": "liberum veto",
    "explanation": "Biblioteka Załuskich, Collegium Nobilium i wzrost liczby ludności należały do korzystnych zjawisk; liberum veto było jedną z wad ustroju."
  },
  {
    "id": "R05_SAS_09",
    "section": "Czasy saskie",
    "type": "sort",
    "prompt": "Przyporządkuj propozycje reform do Stanisława Leszczyńskiego i Stanisława Konarskiego.",
    "options": null,
    "items": [
      "ograniczenie liberum veto",
      "zamiana pańszczyzny na czynsz",
      "zniesienie liberum veto",
      "przebudowa ustroju na wzór monarchii parlamentarnych"
    ],
    "categories": [
      "Stanisław Leszczyński lub jego współpracownik",
      "Stanisław Konarski"
    ],
    "answer": {
      "Stanisław Leszczyński lub jego współpracownik": [
        "ograniczenie liberum veto",
        "zamiana pańszczyzny na czynsz"
      ],
      "Stanisław Konarski": [
        "zniesienie liberum veto",
        "przebudowa ustroju na wzór monarchii parlamentarnych"
      ]
    },
    "explanation": "Projekt przypisywany Leszczyńskiemu przewidywał ograniczenie, lecz nie zniesienie liberum veto, a Konarski proponował jego likwidację i sprawniejszy ustrój parlamentarny."
  },
  {
    "id": "R05_KRO_01",
    "section": "Ostatni król Polski",
    "type": "single_choice",
    "prompt": "Kto został wybrany na króla podczas ostatniej wolnej elekcji w dziejach Rzeczpospolitej?",
    "options": [
      "Stanisław August Poniatowski",
      "August III Sas",
      "Stanisław Leszczyński",
      "Tadeusz Kościuszko",
      "Hugo Kołłątaj",
      "Kazimierz Pułaski"
    ],
    "answer": 0,
    "explanation": "W 1764 r. szlachta wybrała Stanisława Augusta Poniatowskiego; była to ostatnia wolna elekcja w dziejach Rzeczpospolitej.",
    "image": "r05_stanislaw_august_portret.jpg"
  },
  {
    "id": "R05_KRO_02",
    "section": "Ostatni król Polski",
    "type": "multi_select",
    "prompt": "Zaznacz pierwsze reformy Stanisława Augusta.",
    "options": [
      "utworzenie komisji skarbowej i wojskowej",
      "odnowienie mennicy",
      "założenie Szkoły Rycerskiej",
      "doprowadzenie do powstania Monitora",
      "zniesienie monarchii",
      "likwidacja Komisji Edukacji Narodowej"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Król ograniczył wpływy magnatów przez komisje, odnowił mennicę, założył Szkołę Rycerską i wspierał czasopismo Monitor."
  },
  {
    "id": "R05_KRO_03",
    "section": "Ostatni król Polski",
    "type": "true_false",
    "prompt": "Prawa kardynalne z 1768 r. utrwalały wolną elekcję i liberum veto.",
    "options": null,
    "answer": true,
    "explanation": "Narzucone pod naciskiem ambasadora Repnina prawa kardynalne utrwalały najważniejsze wady ustroju, m.in. wolną elekcję i liberum veto."
  },
  {
    "id": "R05_KRO_04",
    "section": "Ostatni król Polski",
    "type": "fill_in",
    "prompt": "Konfederacja barska została zawiązana w roku __________ w miasteczku __________ na Ukrainie.",
    "options": null,
    "answer": [
      "1768",
      "Bar"
    ],
    "altAnswers": [
      [
        "1768",
        "1768 r."
      ],
      [
        "Bar",
        "Barze"
      ]
    ],
    "explanation": "W lutym 1768 r. grupa katolickiej szlachty zawiązała w Barze konfederację w obronie wiary i wolności.",
    "image": "r05_konfederaci_barscy.jpg"
  },
  {
    "id": "R05_KRO_05",
    "section": "Ostatni król Polski",
    "type": "riddle",
    "prompt": "Jak nazywał się rosyjski ambasador, który kierował obradami sejmu w latach 1767-1768 i wymusił uchwalenie praw kardynalnych?",
    "options": null,
    "answer": "Nikołaj Repnin",
    "altAnswers": [
      "Nikołaj Repnin",
      "Repnin",
      "Nikolaj Repnin"
    ],
    "explanation": "Ambasador Nikołaj Repnin, wspierany przez armię rosyjską, narzucił sejmowi rozwiązania wzmacniające zależność Rzeczpospolitej od Rosji."
  },
  {
    "id": "R05_KRO_06",
    "section": "Ostatni król Polski",
    "type": "scenario",
    "prompt": "Jesteś szlachcicem w 1768 r. i dołączasz do zbrojnego związku żądającego niezależności od Rosji, przywrócenia przywilejów katolicyzmu i detronizacji króla. Do jakiego ruchu dołączasz?",
    "options": [
      "konfederacji barskiej",
      "konfederacji targowickiej",
      "stronnictwa patriotycznego",
      "Rady Nieustającej",
      "Komisji Edukacji Narodowej",
      "Familii"
    ],
    "answer": 0,
    "explanation": "Takie cele stawiała konfederacja barska, zawiązana w Barze w 1768 r.",
    "image": "r05_konfederaci_barscy.jpg"
  },
  {
    "id": "R05_KRO_07",
    "section": "Ostatni król Polski",
    "type": "match",
    "prompt": "Połącz państwo lub grupę z rolą w wydarzeniach poprzedzających I rozbiór Polski.",
    "options": null,
    "left": [
      "Familia",
      "Katarzyna II",
      "konfederaci barscy",
      "Fryderyk II"
    ],
    "right": [
      "zaproponował rozbiór Rzeczpospolitej",
      "dążyła do reform ustroju",
      "dążyli do uniezależnienia państwa od Rosji",
      "chciała podporządkować Rzeczpospolitą Rosji"
    ],
    "answer": {
      "Familia": "dążyła do reform ustroju",
      "Katarzyna II": "chciała podporządkować Rzeczpospolitą Rosji",
      "konfederaci barscy": "dążyli do uniezależnienia państwa od Rosji",
      "Fryderyk II": "zaproponował rozbiór Rzeczpospolitej"
    },
    "explanation": "Czartoryscy chcieli reform, Katarzyna II zależności od Rosji, konfederaci barscy niezależności, a Fryderyk II wysunął pomysł rozbioru."
  },
  {
    "id": "R05_KRO_08",
    "section": "Ostatni król Polski",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do praw kardynalnych: wolna elekcja, liberum veto, prawo wypowiadania posłuszeństwa królowi, dziedziczny tron.",
    "options": null,
    "answer": "dziedziczny tron",
    "explanation": "Prawa kardynalne utrwalały wolną elekcję, liberum veto i prawo wypowiadania posłuszeństwa królowi; nie wprowadzały dziedzicznego tronu."
  },
  {
    "id": "R05_KRO_09",
    "section": "Ostatni król Polski",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "I rozbiór Polski",
      "uchwalenie praw kardynalnych",
      "wybór Stanisława Augusta",
      "zawiązanie konfederacji barskiej"
    ],
    "answer": [
      "wybór Stanisława Augusta",
      "uchwalenie praw kardynalnych",
      "zawiązanie konfederacji barskiej",
      "I rozbiór Polski"
    ],
    "explanation": "Stanisław August został wybrany w 1764 r., prawa kardynalne uchwalono w 1768 r., w tym samym roku zawiązano konfederację barską, a I rozbiór nastąpił w 1772 r."
  },
  {
    "id": "R05_STA_01",
    "section": "Czasy stanisławowskie",
    "type": "single_choice",
    "prompt": "Który poseł próbował w 1773 r. własnym ciałem zatrzymać innych posłów przed zatwierdzeniem I rozbioru?",
    "options": [
      "Tadeusz Rejtan",
      "Ignacy Krasicki",
      "Hugo Kołłątaj",
      "Stanisław Staszic",
      "Kazimierz Pułaski",
      "Józef Poniatowski"
    ],
    "answer": 0,
    "explanation": "Tadeusz Rejtan rzucił się w progu sali sejmowej, próbując powstrzymać posłów przed zatwierdzeniem rozbioru.",
    "image": "r05_rejtan_sejm_rozbiorowy.jpg"
  },
  {
    "id": "R05_STA_02",
    "section": "Czasy stanisławowskie",
    "type": "true_false",
    "prompt": "Rada Nieustająca była rządem Rzeczpospolitej, ale pozostawała pod silnym wpływem ambasadora Rosji.",
    "options": null,
    "answer": true,
    "explanation": "Rada Nieustająca sprawowała władzę wykonawczą i usprawniła część administracji, lecz była powszechnie krytykowana za podległość Rosji."
  },
  {
    "id": "R05_STA_03",
    "section": "Czasy stanisławowskie",
    "type": "multi_select",
    "prompt": "Zaznacz działania Komisji Edukacji Narodowej.",
    "options": [
      "przejęcie majątku i szkół po jezuitach",
      "wprowadzenie nowoczesnych programów i podręczników",
      "nauczanie wielu przedmiotów po polsku",
      "reforma uniwersytetu w Krakowie",
      "wprowadzenie liberum veto",
      "zamknięcie wszystkich szkół zakonnych"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "KEN przejęła szkoły po jezuitach, reformowała programy i podręczniki, zwiększyła rolę języka polskiego oraz wsparła reformę uczelni, m.in. w Krakowie.",
    "image": "r05_komisja_edukacji_narodowej.jpg"
  },
  {
    "id": "R05_STA_04",
    "section": "Czasy stanisławowskie",
    "type": "fill_in",
    "prompt": "Komisję Edukacji Narodowej utworzono w roku __________, a Teatr Narodowy powstał w roku __________.",
    "options": null,
    "answer": [
      "1773",
      "1765"
    ],
    "altAnswers": [
      [
        "1773",
        "1773 r."
      ],
      [
        "1765",
        "1765 r."
      ]
    ],
    "explanation": "Sejm rozbiorowy utworzył KEN w 1773 r., natomiast Stanisław August założył Teatr Narodowy już w 1765 r."
  },
  {
    "id": "R05_STA_05",
    "section": "Czasy stanisławowskie",
    "type": "riddle",
    "prompt": "Jak nazywał się biskup i pisarz oświeceniowy, autor bajek, satyr i poematu Monachomachia?",
    "options": null,
    "answer": "Ignacy Krasicki",
    "altAnswers": [
      "Ignacy Krasicki",
      "Krasicki"
    ],
    "explanation": "Ignacy Krasicki był najwybitniejszym pisarzem polskiego oświecenia i uczestnikiem obiadów czwartkowych."
  },
  {
    "id": "R05_STA_06",
    "section": "Czasy stanisławowskie",
    "type": "scenario",
    "prompt": "Jesteś uczniem szkoły podległej pierwszemu w świecie ministerstwu oświaty. Uczysz się wielu przedmiotów po polsku, korzystasz z nowych podręczników i masz zostać rozumnym obywatelem. Jaka instytucja nadzoruje twoją szkołę?",
    "options": [
      "Komisja Edukacji Narodowej",
      "Rada Nieustająca",
      "Szkoła Rycerska",
      "Sejm Wielki",
      "Straż Praw",
      "konfederacja barska"
    ],
    "answer": 0,
    "explanation": "Takie cele i metody wprowadzała Komisja Edukacji Narodowej, utworzona w 1773 r.",
    "image": "r05_komisja_edukacji_narodowej.jpg"
  },
  {
    "id": "R05_STA_07",
    "section": "Czasy stanisławowskie",
    "type": "match",
    "prompt": "Połącz postać z dziedziną lub dziełem, z którym była związana w czasach stanisławowskich.",
    "options": null,
    "left": [
      "Ignacy Krasicki",
      "Julian Ursyn Niemcewicz",
      "Marcello Bacciarelli",
      "Canaletto"
    ],
    "right": [
      "widoki Warszawy",
      "bajki i satyry",
      "komedia Powrót posła",
      "portrety królów Polski"
    ],
    "answer": {
      "Ignacy Krasicki": "bajki i satyry",
      "Julian Ursyn Niemcewicz": "komedia Powrót posła",
      "Marcello Bacciarelli": "portrety królów Polski",
      "Canaletto": "widoki Warszawy"
    },
    "explanation": "Krasicki tworzył literaturę dydaktyczną, Niemcewicz napisał Powrót posła, Bacciarelli malował portrety królów, a Canaletto widoki Warszawy.",
    "image": "r05_palac_na_wodzie.jpg"
  },
  {
    "id": "R05_STA_08",
    "section": "Czasy stanisławowskie",
    "type": "sort",
    "prompt": "Przyporządkuj zjawiska gospodarcze do korzystnych i niekorzystnych przemian czasów stanisławowskich.",
    "options": null,
    "items": [
      "powstawanie manufaktur",
      "rozwój banków i spółek handlowych",
      "wysokie pruskie cła na polskie zboże",
      "powolne zmiany w rolnictwie",
      "szybki wzrost Warszawy"
    ],
    "categories": [
      "korzystne",
      "niekorzystne lub hamujące rozwój"
    ],
    "answer": {
      "korzystne": [
        "powstawanie manufaktur",
        "rozwój banków i spółek handlowych",
        "szybki wzrost Warszawy"
      ],
      "niekorzystne lub hamujące rozwój": [
        "wysokie pruskie cła na polskie zboże",
        "powolne zmiany w rolnictwie"
      ]
    },
    "explanation": "Gospodarka ożywiała się, szczególnie w Warszawie, ale pruskie cła i wolne tempo zmian na wsi ograniczały rozwój."
  },
  {
    "id": "R05_STA_09",
    "section": "Czasy stanisławowskie",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do kultury czasów stanisławowskich: Teatr Narodowy, obiady czwartkowe, Łazienki Królewskie, sejm niemy.",
    "options": null,
    "answer": "sejm niemy",
    "explanation": "Teatr Narodowy, obiady czwartkowe i Łazienki Królewskie są związane z mecenatem Stanisława Augusta; sejm niemy odbył się w 1717 r."
  },
  {
    "id": "R05_SEJM_01",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "single_choice",
    "prompt": "Dlaczego na Sejmie Wielkim nie obowiązywało liberum veto?",
    "options": [
      "obradował pod węzłem konfederacji",
      "król rozwiązał sejm",
      "Rosja zakazała liberum veto",
      "nie było senatorów",
      "obrady odbywały się poza Warszawą",
      "posłowie głosowali tajnie"
    ],
    "answer": 0,
    "explanation": "Sejm Wielki obradował jako sejm skonfederowany, dlatego decyzje mogły zapadać większością głosów.",
    "image": "r05_sejm_wielki_sala.jpg"
  },
  {
    "id": "R05_SEJM_02",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "multi_select",
    "prompt": "Zaznacz osiągnięcia Sejmu Wielkiego.",
    "options": [
      "uchwalenie podniesienia liczby wojska do 100 tysięcy",
      "wprowadzenie stałego podatku na wojsko",
      "likwidacja Rady Nieustającej",
      "sojusz obronny z Prusami",
      "uchwalenie Konstytucji 3 maja",
      "przywrócenie praw kardynalnych"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Sejm Wielki reformował armię i finanse, zlikwidował Radę Nieustającą, zawarł sojusz z Prusami i uchwalił Konstytucję 3 maja."
  },
  {
    "id": "R05_SEJM_03",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "true_false",
    "prompt": "Konstytucja 3 maja wprowadzała dziedziczny tron i trójpodział władzy.",
    "options": null,
    "answer": true,
    "explanation": "Ustawa rządowa z 1791 r. ustanawiała monarchię konstytucyjną, dziedziczny tron i podział władzy na ustawodawczą, wykonawczą i sądowniczą."
  },
  {
    "id": "R05_SEJM_04",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "fill_in",
    "prompt": "Konstytucję 3 maja uchwalono w roku __________, a Sejm Wielki obradował od 1788 do __________ roku.",
    "options": null,
    "answer": [
      "1791",
      "1792"
    ],
    "altAnswers": [
      [
        "1791",
        "1791 r."
      ],
      [
        "1792",
        "1792 r."
      ]
    ],
    "explanation": "Konstytucję uchwalono 3 maja 1791 r., a obrady Sejmu Wielkiego trwały w latach 1788-1792.",
    "image": "r05_konstytucja_3_maja_uchwalenie.jpg"
  },
  {
    "id": "R05_SEJM_05",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "riddle",
    "prompt": "Jak nazywał się rząd ustanowiony przez Konstytucję 3 maja?",
    "options": null,
    "answer": "Straż Praw",
    "altAnswers": [
      "Straż Praw",
      "Straz Praw"
    ],
    "explanation": "Najwyższą władzę wykonawczą powierzono Straży Praw, na czele której stał król.",
    "image": "r05_konstytucja_3_maja_uchwalenie.jpg"
  },
  {
    "id": "R05_SEJM_06",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "scenario",
    "prompt": "Jest 3 maja 1791 r. W sali sejmowej większość zwolenników reform chce szybko przyjąć Ustawę rządową, zanim przeciwnicy wrócą do Warszawy po przerwie świątecznej. Co ma zostać uchwalone?",
    "options": [
      "Konstytucja 3 maja",
      "prawa kardynalne",
      "akt III rozbioru",
      "Uniwersał połaniecki",
      "konfederacja targowicka",
      "sejm niemy"
    ],
    "answer": 0,
    "explanation": "Zwolennicy reform wykorzystali niepełną obecność przeciwników, aby 3 maja 1791 r. doprowadzić do uchwalenia Ustawy rządowej, czyli Konstytucji 3 maja.",
    "image": "r05_konstytucja_3_maja_uchwalenie.jpg"
  },
  {
    "id": "R05_SEJM_07",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "match",
    "prompt": "Połącz władzę z instytucją wskazaną w ustroju Konstytucji 3 maja.",
    "options": null,
    "left": [
      "władza ustawodawcza",
      "władza wykonawcza",
      "władza sądownicza"
    ],
    "right": [
      "sądy",
      "Sejm",
      "Straż Praw"
    ],
    "answer": {
      "władza ustawodawcza": "Sejm",
      "władza wykonawcza": "Straż Praw",
      "władza sądownicza": "sądy"
    },
    "explanation": "Konstytucja 3 maja opierała ustrój na trójpodziale władzy: ustawodawczej, wykonawczej i sądowniczej."
  },
  {
    "id": "R05_SEJM_08",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "sort",
    "prompt": "Przyporządkuj poglądy do stronnictw działających w okresie Sejmu Wielkiego.",
    "options": null,
    "items": [
      "stopniowe reformy za zgodą Rosji",
      "sprzeciw wobec reform i tajne szukanie poparcia Rosji",
      "sojusz z Prusami jako osłona reform"
    ],
    "categories": [
      "stronnictwo królewskie",
      "stronnictwo magnackie",
      "stronnictwo patriotyczne"
    ],
    "answer": {
      "stronnictwo królewskie": [
        "stopniowe reformy za zgodą Rosji"
      ],
      "stronnictwo magnackie": [
        "sprzeciw wobec reform i tajne szukanie poparcia Rosji"
      ],
      "stronnictwo patriotyczne": [
        "sojusz z Prusami jako osłona reform"
      ]
    },
    "explanation": "Stronnictwa różniły się przede wszystkim stosunkiem do reform i do Rosji oraz Prus."
  },
  {
    "id": "R05_SEJM_09",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "sequence",
    "prompt": "Ułóż działania Sejmu Wielkiego w kolejności chronologicznej.",
    "options": null,
    "items": [
      "uchwalenie Konstytucji 3 maja",
      "zawarcie sojuszu obronnego z Prusami",
      "likwidacja Rady Nieustającej",
      "rozpoczęcie obrad Sejmu Wielkiego"
    ],
    "answer": [
      "rozpoczęcie obrad Sejmu Wielkiego",
      "likwidacja Rady Nieustającej",
      "zawarcie sojuszu obronnego z Prusami",
      "uchwalenie Konstytucji 3 maja"
    ],
    "explanation": "Sejm rozpoczął obrady w 1788 r., Radę Nieustającą zlikwidowano w 1789 r., sojusz z Prusami zawarto w 1790 r., a konstytucję uchwalono w 1791 r."
  },
  {
    "id": "R05_ROZ_01",
    "section": "II rozbiór Polski",
    "type": "single_choice",
    "prompt": "Gdzie przeciwnicy Konstytucji 3 maja przygotowali akt konfederacji targowickiej?",
    "options": [
      "w Petersburgu",
      "w Targowicy",
      "w Warszawie",
      "w Grodnie",
      "w Krakowie",
      "w Barze"
    ],
    "answer": 0,
    "explanation": "Akt konfederacji targowickiej przygotowano w Petersburgu, a następnie ogłoszono go w Targowicy, aby stworzyć pozory krajowej inicjatywy."
  },
  {
    "id": "R05_ROZ_02",
    "section": "II rozbiór Polski",
    "type": "multi_select",
    "prompt": "Zaznacz państwa, które wzięły udział w II rozbiorze Polski w 1793 r.",
    "options": [
      "Rosja",
      "Prusy",
      "Austria",
      "Szwecja",
      "Turcja"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "II rozbiór przeprowadziły Rosja i Prusy; Austria nie wzięła w nim udziału."
  },
  {
    "id": "R05_ROZ_03",
    "section": "II rozbiór Polski",
    "type": "true_false",
    "prompt": "W wojnie w obronie Konstytucji 3 maja Polacy odnieśli zwycięstwo pod Zieleńcami.",
    "options": null,
    "answer": true,
    "explanation": "W czerwcu 1792 r. wojska polskie odniosły zwycięstwo pod Zieleńcami; po tej bitwie ustanowiono Order Virtuti Militari.",
    "image": "r05_bitwa_pod_zielencami.jpg"
  },
  {
    "id": "R05_ROZ_04",
    "section": "II rozbiór Polski",
    "type": "fill_in",
    "prompt": "II rozbiór Polski nastąpił w roku __________, a sejm zatwierdzający go obradował w __________.",
    "options": null,
    "answer": [
      "1793",
      "Grodnie"
    ],
    "altAnswers": [
      [
        "1793",
        "1793 r."
      ],
      [
        "Grodnie",
        "Grodno"
      ]
    ],
    "explanation": "W 1793 r. Rosja i Prusy dokonały II rozbioru, a sejm w Grodnie pod rosyjskim naciskiem zatwierdził rozbiór."
  },
  {
    "id": "R05_ROZ_05",
    "section": "II rozbiór Polski",
    "type": "riddle",
    "prompt": "Jak nazywało się najwyższe polskie odznaczenie wojskowe ustanowione po zwycięstwie pod Zieleńcami?",
    "options": null,
    "answer": "Order Virtuti Militari",
    "altAnswers": [
      "Order Virtuti Militari",
      "Virtuti Militari"
    ],
    "explanation": "Stanisław August ustanowił Order Virtuti Militari po bitwie pod Zieleńcami; odznaczenie istnieje do dziś."
  },
  {
    "id": "R05_ROZ_06",
    "section": "II rozbiór Polski",
    "type": "scenario",
    "prompt": "Dowodzisz oddziałem polskim w 1792 r. i walczysz z armią rosyjską w obronie nowego ustroju. Po zwycięstwie twoi żołnierze zyskują wiarę we własne siły. O jaką bitwę chodzi?",
    "options": [
      "pod Zieleńcami",
      "pod Połtawą",
      "pod Kliszowem",
      "pod Racławicami",
      "pod Maciejowicami",
      "pod Wiedniem"
    ],
    "answer": 0,
    "explanation": "Zwycięstwo pod Zieleńcami miało duże znaczenie moralne, choć nie przesądzało o całej wojnie.",
    "image": "r05_bitwa_pod_zielencami.jpg"
  },
  {
    "id": "R05_ROZ_07",
    "section": "II rozbiór Polski",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do nabytków Prus w II rozbiorze: Gdańsk, Toruń, Wielkopolska, część Ukrainy.",
    "options": null,
    "answer": "część Ukrainy",
    "explanation": "Prusy zajęły m.in. Gdańsk, Toruń i Wielkopolskę, natomiast Rosja zagarnęła część Białorusi i Ukrainy."
  },
  {
    "id": "R05_ROZ_08",
    "section": "II rozbiór Polski",
    "type": "match",
    "prompt": "Połącz wydarzenie z jego skutkiem.",
    "options": null,
    "left": [
      "konfederacja targowicka",
      "wkroczenie wojsk rosyjskich",
      "przystąpienie króla do targowicy",
      "sejm grodzieński"
    ],
    "right": [
      "wstrzymanie walk po stronie polskiej",
      "zatwierdzenie II rozbioru",
      "wojna w obronie Konstytucji 3 maja",
      "wezwanie Rosji przeciw reformom Sejmu Wielkiego"
    ],
    "answer": {
      "konfederacja targowicka": "wezwanie Rosji przeciw reformom Sejmu Wielkiego",
      "wkroczenie wojsk rosyjskich": "wojna w obronie Konstytucji 3 maja",
      "przystąpienie króla do targowicy": "wstrzymanie walk po stronie polskiej",
      "sejm grodzieński": "zatwierdzenie II rozbioru"
    },
    "explanation": "Targowiczanie dali Rosji pretekst do interwencji, wkroczenie wojsk rozpoczęło wojnę, decyzja króla zakończyła opór, a sejm grodzieński zatwierdził rozbiór."
  },
  {
    "id": "R05_ROZ_09",
    "section": "II rozbiór Polski",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia prowadzące do II rozbioru w kolejności.",
    "options": null,
    "items": [
      "II rozbiór Polski",
      "przystąpienie Stanisława Augusta do targowicy",
      "ogłoszenie konfederacji targowickiej",
      "wkroczenie wojsk rosyjskich do Rzeczpospolitej"
    ],
    "answer": [
      "ogłoszenie konfederacji targowickiej",
      "wkroczenie wojsk rosyjskich do Rzeczpospolitej",
      "przystąpienie Stanisława Augusta do targowicy",
      "II rozbiór Polski"
    ],
    "explanation": "W 1792 r. targowiczanie wezwali Rosję, rozpoczęła się wojna, król przystąpił do konfederacji, a w 1793 r. Rosja i Prusy dokonały II rozbioru."
  },
  {
    "id": "R05_UPA_01",
    "section": "Upadek Rzeczpospolitej",
    "type": "single_choice",
    "prompt": "Kto został Naczelnikiem insurekcji rozpoczętej w 1794 r.?",
    "options": [
      "Tadeusz Kościuszko",
      "Antoni Madaliński",
      "Józef Poniatowski",
      "Jan Henryk Dąbrowski",
      "Stanisław August",
      "Kazimierz Pułaski"
    ],
    "answer": 0,
    "explanation": "24 marca 1794 r. w Krakowie Tadeusz Kościuszko objął najwyższą władzę wojskową i cywilną jako Naczelnik powstania."
  },
  {
    "id": "R05_UPA_02",
    "section": "Upadek Rzeczpospolitej",
    "type": "multi_select",
    "prompt": "Zaznacz postanowienia Uniwersału połanieckiego dotyczące chłopów.",
    "options": [
      "przyznanie chłopom wolności osobistej",
      "znaczne obniżenie pańszczyzny",
      "prawo przenoszenia się dokąd chcieli",
      "wprowadzenie wolnej elekcji",
      "całkowite zniesienie pańszczyzny"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Uniwersał połaniecki przyznawał chłopom wolność osobistą, dzięki czemu mogli się przenosić, oraz znacznie obniżał pańszczyznę."
  },
  {
    "id": "R05_UPA_03",
    "section": "Upadek Rzeczpospolitej",
    "type": "true_false",
    "prompt": "Bezpośrednią przyczyną wybuchu insurekcji kościuszkowskiej był bunt generała Antoniego Madalińskiego przeciw redukcji wojska.",
    "options": null,
    "answer": true,
    "explanation": "Madaliński odmówił rozbrojenia swojej brygady i ruszył do Krakowa, co przyspieszyło wybuch powstania."
  },
  {
    "id": "R05_UPA_04",
    "section": "Upadek Rzeczpospolitej",
    "type": "fill_in",
    "prompt": "Kościuszko odniósł zwycięstwo pod __________ 4 kwietnia 1794 r., a dostał się do niewoli po bitwie pod __________.",
    "options": null,
    "answer": [
      "Racławicami",
      "Maciejowicami"
    ],
    "altAnswers": [
      [
        "Racławicami",
        "Racławice"
      ],
      [
        "Maciejowicami",
        "Maciejowice"
      ]
    ],
    "explanation": "Pierwszym głośnym zwycięstwem insurekcji była bitwa pod Racławicami, natomiast po klęsce pod Maciejowicami Kościuszko trafił do rosyjskiej niewoli.",
    "image": "r05_kosciuszko_raclawice.jpg"
  },
  {
    "id": "R05_UPA_05",
    "section": "Upadek Rzeczpospolitej",
    "type": "riddle",
    "prompt": "Jak nazywano chłopskich żołnierzy uzbrojonych w przekute kosy, którzy wsławili się pod Racławicami?",
    "options": null,
    "answer": "kosynierzy",
    "altAnswers": [
      "kosynierzy",
      "kosynier"
    ],
    "explanation": "Kosynierzy przeprowadzili gwałtowny atak na rosyjskie armaty i odegrali ważną rolę w zwycięstwie pod Racławicami.",
    "image": "r05_kosciuszko_raclawice.jpg"
  },
  {
    "id": "R05_UPA_06",
    "section": "Upadek Rzeczpospolitej",
    "type": "scenario",
    "prompt": "Jest 4 kwietnia 1794 r. Chłopscy żołnierze z kosami atakują nieprzyjacielskie armaty, zanim Rosjanie zdążą ich użyć. W jakiej bitwie bierzesz udział?",
    "options": [
      "pod Racławicami",
      "pod Szczekocinami",
      "pod Maciejowicami",
      "pod Zieleńcami",
      "pod Połtawą",
      "pod Kliszowem"
    ],
    "answer": 0,
    "explanation": "Atak kosynierów na rosyjskie armaty przesądził o zwycięstwie Kościuszki pod Racławicami.",
    "image": "r05_kosciuszko_raclawice.jpg"
  },
  {
    "id": "R05_UPA_07",
    "section": "Upadek Rzeczpospolitej",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do wydarzeń insurekcji kościuszkowskiej: Racławice, Szczekociny, Maciejowice, Połtawa.",
    "options": null,
    "answer": "Połtawa",
    "explanation": "Racławice, Szczekociny i Maciejowice to miejsca bitew insurekcji 1794 r.; Połtawa wiąże się z trzecią wojną północną."
  },
  {
    "id": "R05_UPA_08",
    "section": "Upadek Rzeczpospolitej",
    "type": "sort",
    "prompt": "Przyporządkuj wydarzenia do zwycięstw lub klęsk powstania kościuszkowskiego.",
    "options": null,
    "items": [
      "bitwa pod Racławicami",
      "wyparcie Rosjan z Warszawy",
      "bitwa pod Szczekocinami",
      "bitwa pod Maciejowicami",
      "obrona Warszawy latem 1794 r."
    ],
    "categories": [
      "sukces powstańców",
      "klęska powstańców"
    ],
    "answer": {
      "sukces powstańców": [
        "bitwa pod Racławicami",
        "wyparcie Rosjan z Warszawy",
        "obrona Warszawy latem 1794 r."
      ],
      "klęska powstańców": [
        "bitwa pod Szczekocinami",
        "bitwa pod Maciejowicami"
      ]
    },
    "explanation": "Powstańcy zwyciężyli pod Racławicami i w Warszawie oraz odparli letnie oblężenie, ale przegrali pod Szczekocinami i Maciejowicami."
  },
  {
    "id": "R05_UPA_09",
    "section": "Upadek Rzeczpospolitej",
    "type": "sequence",
    "prompt": "Ułóż końcowe wydarzenia insurekcji kościuszkowskiej w porządku chronologicznym.",
    "options": null,
    "items": [
      "rzeź Pragi",
      "klęska pod Maciejowicami",
      "kapitulacja Warszawy",
      "bitwa pod Szczekocinami"
    ],
    "answer": [
      "bitwa pod Szczekocinami",
      "klęska pod Maciejowicami",
      "rzeź Pragi",
      "kapitulacja Warszawy"
    ],
    "explanation": "Po klęsce pod Szczekocinami nastąpiła klęska pod Maciejowicami, 4 listopada Rosjanie zdobyli Pragę i dokonali rzezi, a następnego dnia Warszawa skapitulowała."
  },
  {
    "id": "R05_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ilu żołnierzy mogła utrzymywać Rzeczpospolita dzięki podatkowi uchwalonemu przez sejm niemy?",
    "options": [
      "18 tysięcy",
      "30 tysięcy",
      "50 tysięcy",
      "65 tysięcy",
      "100 tysięcy",
      "15 tysięcy"
    ],
    "answer": 0,
    "explanation": "Stały podatek uchwalony w 1717 r. wystarczał na około 18 tysięcy żołnierzy; dla porównania armia znacznie mniejszej Saksonii liczyła około 30 tysięcy."
  },
  {
    "id": "R05_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który projekt reform przewidywał armię liczącą 50 tysięcy żołnierzy w czasie pokoju i 100 tysięcy w czasie wojny?",
    "options": [
      "Głos wolny wolność ubezpieczający",
      "O skutecznym rad sposobie",
      "Konstytucja 3 maja",
      "Uniwersał połaniecki",
      "prawa kardynalne",
      "akt konfederacji targowickiej"
    ],
    "answer": 0,
    "explanation": "Takie liczebności armii proponowano w projekcie Głos wolny wolność ubezpieczający, przypisywanym Stanisławowi Leszczyńskiemu lub jego współpracownikowi."
  },
  {
    "id": "R05_HARD_03",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile spośród szesnastu sejmów za panowania Augusta III zakończyło się przyjęciem uchwał?",
    "options": [
      "2",
      "4",
      "6",
      "8",
      "12",
      "16"
    ],
    "answer": 0,
    "explanation": "Za Augusta III tylko dwa z szesnastu sejmów zakończyły się przyjęciem uchwał, co dobrze pokazuje słabość państwa."
  },
  {
    "id": "R05_HARD_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz liczby zgodne z informacjami o przemianach demograficznych i edukacyjnych XVIII-wiecznej Rzeczpospolitej.",
    "options": [
      "około 6 milionów mieszkańców w 1720 r.",
      "około 11 milionów mieszkańców w 1763 r.",
      "około 650 uczniów przeszło przez Szkołę Rycerską",
      "ponad 300 tysięcy tomów liczyła biblioteka Załuskich",
      "około 3 milionów mieszkańców Warszawy w 1792 r."
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Podręcznik podaje wzrost ludności z ok. 6 do ok. 11 mln, około 650 kadetów Szkoły Rycerskiej oraz ponad 300 tys. tomów biblioteki Załuskich."
  },
  {
    "id": "R05_HARD_05",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz postanowienia lub zasady związane z Konstytucją 3 maja.",
    "options": [
      "sejm zawsze gotowy",
      "dziedziczny tron",
      "zniesienie konfederacji",
      "pozbawienie praw wyborczych szlachty gołoty",
      "utrzymanie liberum veto",
      "wprowadzenie Rady Nieustającej"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Konstytucja wprowadzała dziedziczny tron i sejm zawsze gotowy, znosiła konfederacje i liberum veto oraz odbierała prawa wyborcze szlachcie gołocie."
  },
  {
    "id": "R05_HARD_06",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Po I rozbiorze Gdańsk i Toruń pozostały w Rzeczpospolitej, lecz Prusy przejęły kontrolę nad dolnym biegiem Wisły.",
    "options": null,
    "answer": true,
    "explanation": "W 1772 r. Gdańsk i Toruń nie zostały jeszcze zabrane, ale Prusy opanowały Pomorze Gdańskie i dolny bieg Wisły, co pozwoliło im kontrolować handel zbożem."
  },
  {
    "id": "R05_HARD_07",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "W II rozbiorze Polski uczestniczyły Rosja, Prusy i Austria.",
    "options": null,
    "answer": false,
    "explanation": "W II rozbiorze w 1793 r. uczestniczyły Rosja i Prusy. Austria nie brała w nim udziału."
  },
  {
    "id": "R05_HARD_08",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Sejm Wielki uchwalił armię liczącą docelowo __________ tysięcy żołnierzy, ale zebrane podatki wystarczyły na około __________ tysięcy.",
    "options": null,
    "answer": [
      "100",
      "65"
    ],
    "altAnswers": [
      [
        "100",
        "100 tysięcy"
      ],
      [
        "65",
        "65 tysięcy"
      ]
    ],
    "explanation": "Posłowie chcieli armii 100-tysięcznej, jednak z powodu zaniżania dochodów przez podatników środków starczyło na około 65 tysięcy żołnierzy."
  },
  {
    "id": "R05_HARD_09",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywał się generał, którego odmowa rozbrojenia 1,5-tysięcznej brygady kawalerii stała się bezpośrednią przyczyną wybuchu insurekcji?",
    "options": null,
    "answer": "Antoni Madaliński",
    "altAnswers": [
      "Antoni Madaliński",
      "Madaliński",
      "Antoni Madalinski",
      "Madalinski"
    ],
    "explanation": "Generał Antoni Madaliński odmówił redukcji swojej brygady i w marcu 1794 r. ruszył do Krakowa."
  },
  {
    "id": "R05_HARD_10",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Jesteś posłem na sejmie grodzieńskim w 1793 r. Rosjanie aresztują opornych, grożą konfiskatą majątków i kierują armaty na zamek. Jaką decyzję chcą wymusić?",
    "options": [
      "zatwierdzenie II rozbioru",
      "uchwalenie Konstytucji 3 maja",
      "utworzenie KEN",
      "ogłoszenie insurekcji",
      "zniesienie wolnej elekcji",
      "zawarcie unii realnej z Saksonią"
    ],
    "answer": 0,
    "explanation": "Sejm grodzieński obradował pod silnym naciskiem Rosji i został zmuszony do zatwierdzenia II rozbioru."
  },
  {
    "id": "R05_HARD_11",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz datę z wydarzeniem.",
    "options": null,
    "left": [
      "1717",
      "1764",
      "1773",
      "1791",
      "1795"
    ],
    "right": [
      "Konstytucja 3 maja",
      "sejm niemy",
      "ostatnia wolna elekcja",
      "utworzenie Komisji Edukacji Narodowej",
      "III rozbiór Polski"
    ],
    "answer": {
      "1717": "sejm niemy",
      "1764": "ostatnia wolna elekcja",
      "1773": "utworzenie Komisji Edukacji Narodowej",
      "1791": "Konstytucja 3 maja",
      "1795": "III rozbiór Polski"
    },
    "explanation": "Daty 1717, 1764, 1773, 1791 i 1795 wyznaczają kluczowe etapy ostatniego stulecia I Rzeczpospolitej."
  },
  {
    "id": "R05_HARD_12",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj wydarzenia do właściwego rozbioru Polski.",
    "options": null,
    "items": [
      "Rosja Prusy i Austria zabierają ziemie po raz pierwszy",
      "Prusy zajmują Gdańsk i Toruń",
      "Rzeczpospolita przestaje istnieć",
      "Austria nie uczestniczy w podziale",
      "Stanisław August podpisuje akt abdykacji"
    ],
    "categories": [
      "I rozbiór 1772",
      "II rozbiór 1793",
      "III rozbiór 1795"
    ],
    "answer": {
      "I rozbiór 1772": [
        "Rosja Prusy i Austria zabierają ziemie po raz pierwszy"
      ],
      "II rozbiór 1793": [
        "Prusy zajmują Gdańsk i Toruń",
        "Austria nie uczestniczy w podziale"
      ],
      "III rozbiór 1795": [
        "Rzeczpospolita przestaje istnieć",
        "Stanisław August podpisuje akt abdykacji"
      ]
    },
    "explanation": "I rozbiór przeprowadziły trzy mocarstwa, II tylko Rosja i Prusy, a po III rozbiorze państwo przestało istnieć i król abdykował."
  },
  {
    "id": "R05_HARD_13",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż kolejne etapy osłabienia i upadku Rzeczpospolitej od czasów saskich do końca państwa.",
    "options": null,
    "items": [
      "III rozbiór Polski",
      "sejm niemy",
      "II rozbiór Polski",
      "I rozbiór Polski",
      "Konstytucja 3 maja"
    ],
    "answer": [
      "sejm niemy",
      "I rozbiór Polski",
      "Konstytucja 3 maja",
      "II rozbiór Polski",
      "III rozbiór Polski"
    ],
    "explanation": "Sejm niemy odbył się w 1717 r., I rozbiór w 1772 r., Konstytucję uchwalono w 1791 r., II rozbiór nastąpił w 1793 r., a III w 1795 r."
  },
  {
    "id": "R05_HARD_14",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia insurekcji kościuszkowskiej od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "klęska pod Maciejowicami",
      "wydanie Uniwersału połanieckiego",
      "bitwa pod Racławicami",
      "wybuch powstania w Warszawie",
      "rzeź Pragi"
    ],
    "answer": [
      "bitwa pod Racławicami",
      "wybuch powstania w Warszawie",
      "wydanie Uniwersału połanieckiego",
      "klęska pod Maciejowicami",
      "rzeź Pragi"
    ],
    "explanation": "Racławice były 4 kwietnia, powstanie w Warszawie rozpoczęło się 17 kwietnia, Uniwersał połaniecki ogłoszono w maju, Maciejowice były w październiku, a rzeź Pragi 4 listopada 1794 r."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r05",
  number: 5,
  title: "Ostatnie stulecie I Rzeczpospolitej",
  icon: "📚",
  sectionOrder: [
    "Czasy saskie",
    "Ostatni król Polski",
    "Czasy stanisławowskie",
    "Sejm Wielki i Konstytucja 3 maja",
    "II rozbiór Polski",
    "Upadek Rzeczpospolitej"
  ],
  sectionIcons: {
    "Czasy saskie": "👑",
    "Ostatni król Polski": "🗳️",
    "Czasy stanisławowskie": "🎭",
    "Sejm Wielki i Konstytucja 3 maja": "📜",
    "II rozbiór Polski": "⚔️",
    "Upadek Rzeczpospolitej": "🦅"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
