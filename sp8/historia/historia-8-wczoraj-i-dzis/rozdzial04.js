// Skróty sekcji (do identyfikatorów ćwiczeń):
//   POW  = Powojenna Polska
//   WLA  = Przejęcie władzy
//   STA  = Stalinizm w Polsce
//   GOM  = Czasy Gomułki
//   GIE  = Polska w czasach Gierka
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_POW_01",
    "section": "Powojenna Polska",
    "type": "single_choice",
    "prompt": "O ile mniejsze było terytorium Polski po II wojnie światowej w porównaniu z obszarem z 1939 r.?",
    "options": [
      "o 5%",
      "o 10%",
      "o 20%",
      "o 30%",
      "o 40%",
      "o 50%"
    ],
    "answer": 2,
    "explanation": "Po wojnie terytorium Polski zmniejszyło się o 20% w stosunku do obszaru z 1939 r.",
    "image": "r04_mapa_polska_1945.jpg"
  },
  {
    "id": "R04_POW_02",
    "section": "Powojenna Polska",
    "type": "multi_select",
    "prompt": "Zaznacz terytoria przyłączone do Polski po II wojnie światowej.",
    "options": [
      "Śląsk",
      "Pomorze z Gdańskiem",
      "Warmia i Mazury",
      "Wileńszczyzna",
      "Wołyń",
      "Polesie"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Do Polski przyłączono Śląsk, całe Pomorze z Gdańskiem oraz Warmię i Mazury. Wileńszczyzna, Wołyń i Polesie znalazły się w ZSRS.",
    "image": "r04_mapa_polska_1945.jpg"
  },
  {
    "id": "R04_POW_03",
    "section": "Powojenna Polska",
    "type": "true_false",
    "prompt": "Po II wojnie światowej granicę Polski z Niemcami oparto na Odrze i Nysie Łużyckiej.",
    "options": null,
    "answer": true,
    "explanation": "Nowa zachodnia granica Polski przebiegała wzdłuż Odry i Nysy Łużyckiej."
  },
  {
    "id": "R04_POW_04",
    "section": "Powojenna Polska",
    "type": "match",
    "prompt": "Połącz grupę ludności z kierunkiem i skalą powojennego przemieszczenia.",
    "options": null,
    "left": [
      "Niemcy z Ziem Odzyskanych",
      "Ukraińcy Białorusini i Litwini",
      "Polacy z Kresów Wschodnich",
      "Osoby wracające z Zachodu"
    ],
    "right": [
      "ok. 3 mln wysiedlonych do Niemiec",
      "ok. 550 tys. przesiedlonych do ZSRS",
      "ok. 1,5 mln przesiedlonych na Ziemie Odzyskane",
      "ok. 2 mln powracających do Polski"
    ],
    "answer": {
      "Niemcy z Ziem Odzyskanych": "ok. 3 mln wysiedlonych do Niemiec",
      "Ukraińcy Białorusini i Litwini": "ok. 550 tys. przesiedlonych do ZSRS",
      "Polacy z Kresów Wschodnich": "ok. 1,5 mln przesiedlonych na Ziemie Odzyskane",
      "Osoby wracające z Zachodu": "ok. 2 mln powracających do Polski"
    },
    "explanation": "Zmiana granic wywołała masowe przesiedlenia: około 3 mln Niemców wysiedlono do Niemiec, około 550 tys. Ukraińców, Białorusinów i Litwinów do ZSRS, około 1,5 mln Polaków z Kresów na Ziemie Odzyskane, a około 2 mln osób wróciło z Zachodu.",
    "image": "r04_przesiedlency_ziemie_odzyskane.jpg"
  },
  {
    "id": "R04_POW_05",
    "section": "Powojenna Polska",
    "type": "fill_in",
    "prompt": "W czasie II wojny światowej zginęło około __________ mln polskich obywateli, a w 1945 r. Polska liczyła około __________ mln mieszkańców.",
    "options": null,
    "answer": [
      "6",
      "24"
    ],
    "altAnswers": [
      [
        "6",
        "6 mln"
      ],
      [
        "24",
        "24 mln"
      ]
    ],
    "explanation": "Wojna kosztowała życie około 6 mln polskich obywateli. W 1945 r. kraj liczył około 24 mln mieszkańców."
  },
  {
    "id": "R04_POW_06",
    "section": "Powojenna Polska",
    "type": "sort",
    "prompt": "Przyporządkuj ziemie i miasta do kategorii: utracone przez Polskę albo przyłączone do Polski po II wojnie światowej.",
    "options": null,
    "items": [
      "Wileńszczyzna",
      "Wołyń",
      "Lwów",
      "Śląsk",
      "Warmia i Mazury",
      "Gdańsk"
    ],
    "categories": [
      "utracone przez Polskę",
      "przyłączone do Polski"
    ],
    "answer": {
      "utracone przez Polskę": [
        "Wileńszczyzna",
        "Wołyń",
        "Lwów"
      ],
      "przyłączone do Polski": [
        "Śląsk",
        "Warmia i Mazury",
        "Gdańsk"
      ]
    },
    "explanation": "Polska utraciła Kresy Wschodnie, w tym Wileńszczyznę i Wołyń oraz Lwów. Zyskała m.in. Śląsk, Warmię i Mazury oraz Gdańsk."
  },
  {
    "id": "R04_POW_07",
    "section": "Powojenna Polska",
    "type": "scenario",
    "prompt": "Jest 1945 r. Polska rodzina opuszcza Kresy Wschodnie i zostaje skierowana na tereny przejęte od Niemiec. Dokąd najprawdopodobniej trafia?",
    "options": [
      "na Ziemie Odzyskane",
      "na Zaolzie",
      "do ZSRS",
      "na Wileńszczyznę",
      "do Francji",
      "na Wołyń"
    ],
    "answer": 0,
    "explanation": "Około 1,5 mln Polaków z Kresów Wschodnich przesiedlono na Ziemie Odzyskane.",
    "image": "r04_przesiedlency_ziemie_odzyskane.jpg"
  },
  {
    "id": "R04_POW_08",
    "section": "Powojenna Polska",
    "type": "riddle",
    "prompt": "Jak nazywała się przeprowadzona w 1947 r. akcja wysiedlenia ludności ukraińskiej, której celem było pozbawienie UPA zaplecza?",
    "options": null,
    "answer": "akcja Wisła",
    "altAnswers": [
      "akcja Wisła",
      "Wisła",
      "akcja Wisla",
      "Wisla"
    ],
    "explanation": "W 1947 r. w ramach akcji Wisła wysiedlono ludność ukraińską; część trafiła do ZSRS, a część na Ziemie Odzyskane."
  },
  {
    "id": "R04_POW_09",
    "section": "Powojenna Polska",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Warmia, Mazury, Pomorze, Wołyń.",
    "options": null,
    "answer": "Wołyń",
    "explanation": "Warmia, Mazury i Pomorze zostały przyłączone do powojennej Polski, natomiast Wołyń znalazł się w ZSRS."
  },
  {
    "id": "R04_POW_10",
    "section": "Powojenna Polska",
    "type": "single_choice",
    "prompt": "Jak komuniści określali wschodnie obszary Niemiec włączone po wojnie do Polski?",
    "options": [
      "Ziemie Odzyskane",
      "Kresy Wschodnie",
      "Ziemie Zabrane",
      "Kraj Nadwiślański",
      "Generalne Gubernatorstwo",
      "Ziemie Koronne"
    ],
    "answer": 0,
    "explanation": "Władze komunistyczne używały określenia Ziemie Odzyskane, odwołując się do dawnych związków Śląska i Pomorza z państwem Piastów.",
    "image": "r04_plakat_ziemie_odzyskane.jpg"
  },
  {
    "id": "R04_POW_11",
    "section": "Powojenna Polska",
    "type": "true_false",
    "prompt": "Czechosłowacji zwrócono po wojnie Zaolzie, a południowa granica Polski wróciła do stanu z września 1938 r.",
    "options": null,
    "answer": true,
    "explanation": "Po II wojnie światowej Zaolzie zwrócono Czechosłowacji, co przywróciło południową granicę do stanu z września 1938 r."
  },
  {
    "id": "R04_WLA_01",
    "section": "Przejęcie władzy",
    "type": "single_choice",
    "prompt": "Kiedy odbyło się referendum ludowe poprzedzające wybory do sejmu ustawodawczego?",
    "options": [
      "30 czerwca 1946 r.",
      "19 stycznia 1947 r.",
      "22 lipca 1952 r.",
      "15 grudnia 1948 r.",
      "28 czerwca 1956 r.",
      "14 grudnia 1970 r."
    ],
    "answer": 0,
    "explanation": "Referendum ludowe odbyło się 30 czerwca 1946 r. Komuniści zorganizowali je przed wyborami parlamentarnymi."
  },
  {
    "id": "R04_WLA_02",
    "section": "Przejęcie władzy",
    "type": "multi_select",
    "prompt": "Zaznacz kwestie, o które pytano w referendum ludowym w 1946 r.",
    "options": [
      "likwidacja senatu",
      "zatwierdzenie reform społeczno-gospodarczych",
      "uznanie granic Polski na Bałtyku Odrze i Nysie Łużyckiej",
      "przywrócenie monarchii",
      "wystąpienie Polski z ONZ",
      "powrót Kresów Wschodnich do Polski"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Trzy pytania dotyczyły likwidacji senatu, reform społeczno-gospodarczych oraz uznania granic na Bałtyku, Odrze i Nysie Łużyckiej."
  },
  {
    "id": "R04_WLA_03",
    "section": "Przejęcie władzy",
    "type": "true_false",
    "prompt": "Oficjalne wyniki referendum z 1946 r. oraz wyborów do sejmu z 1947 r. zostały sfałszowane przez komunistów.",
    "options": null,
    "answer": true,
    "explanation": "Wyniki obu głosowań zostały sfałszowane, co pomogło komunistom wyeliminować legalną opozycję."
  },
  {
    "id": "R04_WLA_04",
    "section": "Przejęcie władzy",
    "type": "match",
    "prompt": "Połącz postać lub organizację z właściwą rolą w pierwszych latach powojennych.",
    "options": null,
    "left": [
      "Stanisław Mikołajczyk",
      "Polskie Stronnictwo Ludowe",
      "Władysław Gomułka",
      "Bolesław Bierut"
    ],
    "right": [
      "lider legalnej opozycji",
      "partia legalnej opozycji",
      "lider PPR",
      "prezydent wybrany przez sejm w 1947 r."
    ],
    "answer": {
      "Stanisław Mikołajczyk": "lider legalnej opozycji",
      "Polskie Stronnictwo Ludowe": "partia legalnej opozycji",
      "Władysław Gomułka": "lider PPR",
      "Bolesław Bierut": "prezydent wybrany przez sejm w 1947 r."
    },
    "explanation": "Mikołajczyk stał na czele PSL, Gomułka kierował PPR, a po sfałszowanych wyborach sejm wybrał Bieruta na prezydenta.",
    "image": "r04_stanislaw_mikolajczyk.jpg"
  },
  {
    "id": "R04_WLA_05",
    "section": "Przejęcie władzy",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Uchwalenie małej konstytucji",
      "Referendum ludowe",
      "Dekret o reformie rolnej",
      "Wybory do sejmu ustawodawczego"
    ],
    "answer": [
      "Dekret o reformie rolnej",
      "Referendum ludowe",
      "Wybory do sejmu ustawodawczego",
      "Uchwalenie małej konstytucji"
    ],
    "explanation": "Reformę rolną ogłoszono w 1944 r., referendum odbyło się w czerwcu 1946 r., wybory 19 stycznia 1947 r., a małą konstytucję uchwalono 19 lutego 1947 r."
  },
  {
    "id": "R04_WLA_06",
    "section": "Przejęcie władzy",
    "type": "fill_in",
    "prompt": "Policję polityczną nazywano Urzędem __________, a kontrolę treści przed publikacją określano jako cenzurę __________.",
    "options": null,
    "answer": [
      "Bezpieczeństwa",
      "prewencyjną"
    ],
    "altAnswers": [
      [
        "Bezpieczeństwa",
        "Bezpieczenstwa",
        "UB"
      ],
      [
        "prewencyjną",
        "prewencyjna"
      ]
    ],
    "explanation": "Urząd Bezpieczeństwa był policją polityczną, a cenzura prewencyjna pozwalała blokować informacje przed ich publikacją."
  },
  {
    "id": "R04_WLA_07",
    "section": "Przejęcie władzy",
    "type": "scenario",
    "prompt": "Polityk kieruje PSL, wraca w 1945 r. z emigracji, wchodzi do rządu tworzonego z komunistami i liczy na zwycięstwo w demokratycznych wyborach. O kogo chodzi?",
    "options": [
      "Stanisława Mikołajczyka",
      "Bolesława Bieruta",
      "Władysława Gomułkę",
      "Witolda Pileckiego",
      "Zygmunta Szendzielarza",
      "Stefana Wyszyńskiego"
    ],
    "answer": 0,
    "explanation": "Stanisław Mikołajczyk był przywódcą PSL i liderem legalnej opozycji, która liczyła na zwycięstwo wyborcze.",
    "image": "r04_stanislaw_mikolajczyk.jpg"
  },
  {
    "id": "R04_WLA_08",
    "section": "Przejęcie władzy",
    "type": "odd_one_out",
    "prompt": "Wskaż, kto nie pasuje do pozostałych: Łupaszka, Orlik, Zapora, Mikołajczyk.",
    "options": null,
    "answer": "Mikołajczyk",
    "explanation": "Łupaszka, Orlik i Zapora dowodzili oddziałami podziemia antykomunistycznego. Mikołajczyk był liderem legalnej opozycji."
  },
  {
    "id": "R04_WLA_09",
    "section": "Przejęcie władzy",
    "type": "sort",
    "prompt": "Przyporządkuj osoby i organizacje do formy oporu wobec komunistów.",
    "options": null,
    "items": [
      "Stanisław Mikołajczyk",
      "PSL",
      "WiN",
      "Danuta Siedzikówna Inka",
      "Witold Pilecki",
      "Zygmunt Szendzielarz Łupaszka"
    ],
    "categories": [
      "legalna opozycja",
      "podziemie niepodległościowe"
    ],
    "answer": {
      "legalna opozycja": [
        "Stanisław Mikołajczyk",
        "PSL"
      ],
      "podziemie niepodległościowe": [
        "WiN",
        "Danuta Siedzikówna Inka",
        "Witold Pilecki",
        "Zygmunt Szendzielarz Łupaszka"
      ]
    },
    "explanation": "Mikołajczyk i PSL działali legalnie. WiN oraz żołnierze podziemia, w tym Inka, Pilecki i Łupaszka, byli związani z konspiracją niepodległościową.",
    "image": "r04_zolnierze_podziemia.jpg"
  },
  {
    "id": "R04_WLA_10",
    "section": "Przejęcie władzy",
    "type": "single_choice",
    "prompt": "Na czym polegała reforma rolna ogłoszona przez komunistów w 1944 r.?",
    "options": [
      "na odebraniu wielkim właścicielom ziemi i podziale jej między biednych chłopów",
      "na zwrocie majątków ziemianom",
      "na obowiązkowym łączeniu wszystkich gospodarstw w PGR",
      "na przekazaniu ziemi wyłącznie Kościołowi",
      "na sprzedaży ziemi zagranicznym firmom",
      "na zniesieniu własności państwowej"
    ],
    "answer": 0,
    "explanation": "Majątki właścicieli gruntów powyżej 50 ha odbierano i parcelowano, przekazując ziemię biednym chłopom."
  },
  {
    "id": "R04_WLA_11",
    "section": "Przejęcie władzy",
    "type": "multi_select",
    "prompt": "Zaznacz działania władz komunistycznych wymierzone w PSL przed wyborami z 1947 r.",
    "options": [
      "rozbudowa aparatu terroru",
      "uwięzienie dziesiątek tysięcy działaczy PSL",
      "wprowadzenie cenzury prewencyjnej",
      "oszczercza propaganda przeciw PSL i Mikołajczykowi",
      "zniesienie Urzędu Bezpieczeństwa",
      "przekazanie PSL pełnej kontroli nad prasą"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Komuniści rozbudowali aparat terroru, więzili działaczy PSL, stosowali cenzurę i prowadzili propagandę przeciw opozycji."
  },
  {
    "id": "R04_STA_01",
    "section": "Stalinizm w Polsce",
    "type": "single_choice",
    "prompt": "Z połączenia których partii powstała PZPR 15 grudnia 1948 r.?",
    "options": [
      "PPR i PPS",
      "PSL i PPR",
      "PPS i PSL",
      "PPR i WiN",
      "PSL i WiN",
      "PPS i AK"
    ],
    "answer": 0,
    "explanation": "Polska Zjednoczona Partia Robotnicza powstała w wyniku połączenia PPR i PPS."
  },
  {
    "id": "R04_STA_02",
    "section": "Stalinizm w Polsce",
    "type": "fill_in",
    "prompt": "Po powstaniu PZPR sekretarzem generalnym KC partii został __________ __________.",
    "options": null,
    "answer": [
      "Bolesław",
      "Bierut"
    ],
    "altAnswers": [
      [
        "Bolesław",
        "Boleslaw"
      ],
      [
        "Bierut"
      ]
    ],
    "explanation": "Po kongresie zjednoczeniowym na czele PZPR stanął Bolesław Bierut."
  },
  {
    "id": "R04_STA_03",
    "section": "Stalinizm w Polsce",
    "type": "true_false",
    "prompt": "System, w którym władzę sprawuje tylko jedna partia, nazywa się systemem monopartyjnym.",
    "options": null,
    "answer": true,
    "explanation": "Po utworzeniu PZPR komuniści zlikwidowali system wielopartyjny i utrwalili system monopartyjny."
  },
  {
    "id": "R04_STA_04",
    "section": "Stalinizm w Polsce",
    "type": "multi_select",
    "prompt": "Zaznacz cechy centralnego sterowania gospodarką wprowadzanego w Polsce.",
    "options": [
      "centralne ustalanie wielkości produkcji",
      "centralne ustalanie cen",
      "centralne ustalanie zasad podziału dóbr",
      "pełna swoboda cen rynkowych",
      "brak państwowych planów gospodarczych",
      "niezależność zakładów od decyzji władz"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "W gospodarce centralnie sterowanej państwo ustalało produkcję, ceny i zasady podziału dóbr, ograniczając mechanizmy wolnego rynku."
  },
  {
    "id": "R04_STA_05",
    "section": "Stalinizm w Polsce",
    "type": "match",
    "prompt": "Połącz pojęcie z właściwym opisem.",
    "options": null,
    "left": [
      "plan sześcioletni",
      "kolektywizacja",
      "PGR",
      "wyścig pracy",
      "socrealizm"
    ],
    "right": [
      "plan gospodarczy realizowany w latach 1950-1955",
      "łączenie gruntów chłopskich w gospodarstwa zbiorowe",
      "Państwowe Gospodarstwo Rolne",
      "przekraczanie norm wydajności pracy",
      "kierunek sztuki podporządkowany ideologii komunistycznej"
    ],
    "answer": {
      "plan sześcioletni": "plan gospodarczy realizowany w latach 1950-1955",
      "kolektywizacja": "łączenie gruntów chłopskich w gospodarstwa zbiorowe",
      "PGR": "Państwowe Gospodarstwo Rolne",
      "wyścig pracy": "przekraczanie norm wydajności pracy",
      "socrealizm": "kierunek sztuki podporządkowany ideologii komunistycznej"
    },
    "explanation": "Te pojęcia opisują najważniejsze przemiany gospodarcze i kulturowe stalinizmu."
  },
  {
    "id": "R04_STA_06",
    "section": "Stalinizm w Polsce",
    "type": "sort",
    "prompt": "Przyporządkuj skutki planu sześcioletniego do odpowiedniej kategorii.",
    "options": null,
    "items": [
      "industrializacja kraju",
      "migracja ludności ze wsi do miast",
      "aktywizacja zawodowa kobiet",
      "wzrost produkcji żywności tylko o 13%",
      "braki produktów codziennej potrzeby"
    ],
    "categories": [
      "skutki pozytywne",
      "skutki negatywne"
    ],
    "answer": {
      "skutki pozytywne": [
        "industrializacja kraju",
        "migracja ludności ze wsi do miast",
        "aktywizacja zawodowa kobiet"
      ],
      "skutki negatywne": [
        "wzrost produkcji żywności tylko o 13%",
        "braki produktów codziennej potrzeby"
      ]
    },
    "explanation": "Plan przyspieszył industrializację i przemiany społeczne, ale produkcja żywności wzrosła znacznie mniej od założeń, a zaopatrzenie ludności było złe."
  },
  {
    "id": "R04_STA_07",
    "section": "Stalinizm w Polsce",
    "type": "riddle",
    "prompt": "Jak nazywał się obowiązujący w kulturze i sztuce okresu stalinizmu kierunek, który miał propagować kult pracy i wyższość komunizmu?",
    "options": null,
    "answer": "socrealizm",
    "altAnswers": [
      "socrealizm",
      "realizm socjalistyczny"
    ],
    "explanation": "Realizm socjalistyczny, czyli socrealizm, podporządkowywał sztukę celom ideologicznym.",
    "image": "r04_boleslaw_bierut_dzieci.jpg"
  },
  {
    "id": "R04_STA_08",
    "section": "Stalinizm w Polsce",
    "type": "scenario",
    "prompt": "Górnik zostaje przedstawiony przez propagandę jako wzór pracownika, ponieważ przekracza obowiązujące normy produkcji. Z jakim zjawiskiem wiąże się ta sytuacja?",
    "options": [
      "wyścigiem pracy",
      "kolektywizacją",
      "nacjonalizacją handlu",
      "odwilżą październikową",
      "akcją Wisła",
      "małą stabilizacją"
    ],
    "answer": 0,
    "explanation": "Wyścig pracy polegał na przekraczaniu norm wydajności. Pierwszym wykreowanym przez propagandę przodownikiem pracy był górnik Wincenty Pstrowski."
  },
  {
    "id": "R04_STA_09",
    "section": "Stalinizm w Polsce",
    "type": "single_choice",
    "prompt": "Jaką część gruntów ornych udało się skolektywizować mimo nacisków władz?",
    "options": [
      "około 10%",
      "około 25%",
      "około 40%",
      "około 60%",
      "około 75%",
      "prawie 100%"
    ],
    "answer": 0,
    "explanation": "Opór wsi był silny i skolektywizowano zaledwie około 10% gruntów ornych."
  },
  {
    "id": "R04_STA_10",
    "section": "Stalinizm w Polsce",
    "type": "match",
    "prompt": "Połącz zmianę z rozwiązaniem wprowadzonym przez Konstytucję z 1952 r.",
    "options": null,
    "left": [
      "nazwa państwa",
      "parlament",
      "urząd prezydenta"
    ],
    "right": [
      "Polska Rzeczpospolita Ludowa",
      "jednoizbowy sejm bez senatu",
      "zastąpiony przez 15-osobową Radę Państwa"
    ],
    "answer": {
      "nazwa państwa": "Polska Rzeczpospolita Ludowa",
      "parlament": "jednoizbowy sejm bez senatu",
      "urząd prezydenta": "zastąpiony przez 15-osobową Radę Państwa"
    },
    "explanation": "Konstytucja z 22 lipca 1952 r. zmieniła nazwę państwa na PRL, zlikwidowała senat i urząd prezydenta, zastępując go Radą Państwa.",
    "image": "r04_konstytucja_1952.jpg"
  },
  {
    "id": "R04_STA_11",
    "section": "Stalinizm w Polsce",
    "type": "multi_select",
    "prompt": "Zaznacz działania władz komunistycznych wymierzone w Kościół katolicki w okresie stalinizmu.",
    "options": [
      "cenzurowanie wydawnictw kościelnych",
      "utrudnianie pielgrzymek",
      "wpływanie na obsadę stanowisk kościelnych",
      "powoływanie kleryków do służby wojskowej",
      "aresztowanie prymasa Stefana Wyszyńskiego",
      "oddanie Kościołowi pełnej swobody działania"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Władze ograniczały działalność Kościoła, ingerowały w jego sprawy, stosowały cenzurę i represje. W 1953 r. aresztowano prymasa Stefana Wyszyńskiego.",
    "image": "r04_stefan_wyszynski.jpg"
  },
  {
    "id": "R04_GOM_01",
    "section": "Czasy Gomułki",
    "type": "single_choice",
    "prompt": "Kiedy rozpoczął się strajk, który przeszedł do historii jako Poznański Czerwiec?",
    "options": [
      "28 czerwca 1956 r.",
      "22 lipca 1952 r.",
      "8 marca 1968 r.",
      "7 grudnia 1970 r.",
      "14 grudnia 1970 r.",
      "15 grudnia 1948 r."
    ],
    "answer": 0,
    "explanation": "28 czerwca 1956 r. w Poznaniu rozpoczął się strajk i protest robotników domagających się poprawy warunków ekonomicznych.",
    "image": "r04_poznanski_czerwiec.jpg"
  },
  {
    "id": "R04_GOM_02",
    "section": "Czasy Gomułki",
    "type": "true_false",
    "prompt": "W październiku 1956 r. Władysław Gomułka objął stanowisko I sekretarza KC PZPR.",
    "options": null,
    "answer": true,
    "explanation": "Po Poznańskim Czerwcu Gomułka wrócił do partii i w październiku 1956 r. stanął na jej czele."
  },
  {
    "id": "R04_GOM_03",
    "section": "Czasy Gomułki",
    "type": "multi_select",
    "prompt": "Zaznacz działania należące do odwilży politycznej po objęciu władzy przez Gomułkę.",
    "options": [
      "uwalnianie więźniów politycznych",
      "anulowanie wyroków uczestników Poznańskiego Czerwca",
      "zaniechanie kolektywizacji rolnictwa",
      "uwolnienie duchownych z internowania",
      "ponowne zezwolenie na nauczanie religii w szkołach",
      "wprowadzenie masowych procesów pokazowych"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Odwilż oznaczała odejście od części stalinowskich represji: zwalniano więźniów, zaniechano kolektywizacji, uwolniono duchownych i przywrócono religię w szkołach."
  },
  {
    "id": "R04_GOM_04",
    "section": "Czasy Gomułki",
    "type": "riddle",
    "prompt": "Jak nazywa się okres rządów Gomułki kojarzony ze spokojem społecznym, odejściem od stalinowskiego terroru i niewielką poprawą warunków życia?",
    "options": null,
    "answer": "mała stabilizacja",
    "altAnswers": [
      "mała stabilizacja",
      "mala stabilizacja"
    ],
    "explanation": "Rządy Gomułki określa się mianem małej stabilizacji: zniknął strach przed bezpodstawnymi aresztowaniami, a sytuacja materialna nieco się poprawiła."
  },
  {
    "id": "R04_GOM_05",
    "section": "Czasy Gomułki",
    "type": "match",
    "prompt": "Połącz datę z wydarzeniem z okresu rządów Gomułki.",
    "options": null,
    "left": [
      "1956",
      "1965",
      "1966",
      "1968",
      "1970"
    ],
    "right": [
      "Poznański Czerwiec i powrót Gomułki do władzy",
      "list biskupów polskich do biskupów niemieckich",
      "Tysiąclecie Chrztu Polski i Tysiąclecie Państwa Polskiego",
      "protesty studenckie i kampania antysemicka",
      "protesty robotnicze na Wybrzeżu"
    ],
    "answer": {
      "1956": "Poznański Czerwiec i powrót Gomułki do władzy",
      "1965": "list biskupów polskich do biskupów niemieckich",
      "1966": "Tysiąclecie Chrztu Polski i Tysiąclecie Państwa Polskiego",
      "1968": "protesty studenckie i kampania antysemicka",
      "1970": "protesty robotnicze na Wybrzeżu"
    },
    "explanation": "Te daty wyznaczają główne konflikty i kryzysy okresu rządów Gomułki."
  },
  {
    "id": "R04_GOM_06",
    "section": "Czasy Gomułki",
    "type": "scenario",
    "prompt": "W 1966 r. Kościół organizuje uroczystości religijne, a władze państwowe równolegle przygotowują świeckie obchody. Jakie wydarzenia ze sobą konkurowały?",
    "options": [
      "Tysiąclecie Chrztu Polski i Tysiąclecie Państwa Polskiego",
      "referendum ludowe i wybory do sejmu",
      "Poznański Czerwiec i Marzec 1968",
      "plan sześcioletni i reforma rolna",
      "akcja Wisła i kolektywizacja",
      "odbudowa Warszawy i budowa Nowej Huty"
    ],
    "answer": 0,
    "explanation": "W 1966 r. Kościół obchodził Tysiąclecie Chrztu Polski, a władze zorganizowały konkurencyjne Tysiąclecie Państwa Polskiego.",
    "image": "r04_stefan_wyszynski.jpg"
  },
  {
    "id": "R04_GOM_07",
    "section": "Czasy Gomułki",
    "type": "fill_in",
    "prompt": "W 1965 r. biskupi polscy skierowali list do biskupów __________, wzywający do pojednania obu narodów.",
    "options": null,
    "answer": [
      "niemieckich"
    ],
    "altAnswers": [
      [
        "niemieckich",
        "niemieccy"
      ]
    ],
    "explanation": "List biskupów polskich do biskupów niemieckich zawierał wezwanie do wzajemnego wybaczenia i pojednania."
  },
  {
    "id": "R04_GOM_08",
    "section": "Czasy Gomułki",
    "type": "single_choice",
    "prompt": "Co bezpośrednio poprzedziło studenckie protesty Marca 1968 r. w Warszawie?",
    "options": [
      "zakaz dalszego wystawiania Dziadów w Teatrze Narodowym",
      "podwyżka cen żywności w grudniu",
      "aresztowanie prymasa Wyszyńskiego",
      "utworzenie PZPR",
      "uchwalenie Konstytucji PRL",
      "powstanie WiN"
    ],
    "answer": 0,
    "explanation": "Władze zakazały dalszego wystawiania Dziadów Adama Mickiewicza po antysowieckich reakcjach widowni, co doprowadziło do protestów studentów.",
    "image": "r04_marzec_1968_uw.jpg"
  },
  {
    "id": "R04_GOM_09",
    "section": "Czasy Gomułki",
    "type": "multi_select",
    "prompt": "Zaznacz skutki wydarzeń Marca 1968 r.",
    "options": [
      "brutalne rozpędzenie demonstracji studenckiej",
      "aresztowania protestujących",
      "usuwanie zaangażowanych studentów z Uniwersytetu Warszawskiego",
      "kampania antysemicka",
      "przymusowa emigracja kilkunastu tysięcy osób żydowskiego pochodzenia",
      "natychmiastowe wprowadzenie wolnych wyborów"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Władze stłumiły protesty, represjonowały studentów i rozpętały kampanię antysemicką, która doprowadziła do emigracji kilkunastu tysięcy osób żydowskiego pochodzenia."
  },
  {
    "id": "R04_GOM_10",
    "section": "Czasy Gomułki",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "Marzec 1968",
      "Objęcie władzy przez Gomułkę",
      "Śmierć Józefa Stalina",
      "Grudzień 1970",
      "Poznański Czerwiec"
    ],
    "answer": [
      "Śmierć Józefa Stalina",
      "Poznański Czerwiec",
      "Objęcie władzy przez Gomułkę",
      "Marzec 1968",
      "Grudzień 1970"
    ],
    "explanation": "Stalin zmarł w 1953 r., Poznański Czerwiec miał miejsce w czerwcu 1956 r., Gomułka objął władzę jesienią 1956 r., następnie doszło do Marca 1968 i Grudnia 1970."
  },
  {
    "id": "R04_GOM_11",
    "section": "Czasy Gomułki",
    "type": "scenario",
    "prompt": "Po ogłoszeniu podwyżek cen żywności wybuchają strajki w Stoczni Gdańskiej i innych zakładach Wybrzeża. Wojsko strzela do protestujących, a po kryzysie I sekretarz traci władzę. O jakie wydarzenie chodzi?",
    "options": [
      "Grudzień 1970",
      "Poznański Czerwiec",
      "Marzec 1968",
      "referendum ludowe",
      "akcja Wisła",
      "kongres zjednoczeniowy PZPR"
    ],
    "answer": 0,
    "explanation": "Protesty na Wybrzeżu w dniach 14-21 grudnia 1970 r. zostały krwawo stłumione. Zginęło 45 osób, a Gomułka został odsunięty od władzy.",
    "image": "r04_grudzien_1970_gdansk.jpg"
  },
  {
    "id": "R04_GIE_01",
    "section": "Polska w czasach Gierka",
    "type": "single_choice",
    "prompt": "Kto objął stanowisko I sekretarza KC PZPR po odsunięciu Władysława Gomułki w grudniu 1970 r.?",
    "options": [
      "Edward Gierek",
      "Edward Ochab",
      "Bolesław Bierut",
      "Stanisław Mikołajczyk",
      "Stefan Wyszyński",
      "Konstanty Rokossowski"
    ],
    "answer": 0,
    "explanation": "Po kryzysie grudniowym stanowisko I sekretarza KC PZPR objął Edward Gierek."
  },
  {
    "id": "R04_GIE_02",
    "section": "Polska w czasach Gierka",
    "type": "multi_select",
    "prompt": "Zaznacz działania władz podjęte na początku rządów Edwarda Gierka.",
    "options": [
      "złagodzenie cenzury",
      "decyzja o odbudowie Zamku Królewskiego w Warszawie",
      "poprawa stosunków z Kościołem i zgoda na budowę nowych kościołów",
      "ponowne wprowadzenie masowej kolektywizacji",
      "zakaz produkcji samochodów osobowych",
      "likwidacja telewizji"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Gierek złagodził cenzurę, poparł odbudowę Zamku Królewskiego i poprawił relacje z Kościołem, co początkowo zwiększyło jego popularność."
  },
  {
    "id": "R04_GIE_03",
    "section": "Polska w czasach Gierka",
    "type": "true_false",
    "prompt": "Modernizację Polski w latach 70. finansowano w dużej mierze kredytami zaciąganymi na Zachodzie.",
    "options": null,
    "answer": true,
    "explanation": "Gierek uzyskał zgodę na rozwój współpracy gospodarczej z Zachodem i zaciąganie tam kredytów na zakup technologii oraz inwestycje."
  },
  {
    "id": "R04_GIE_04",
    "section": "Polska w czasach Gierka",
    "type": "match",
    "prompt": "Połącz inwestycję epoki Gierka z właściwym miejscem lub określeniem.",
    "options": null,
    "left": [
      "huta Katowice",
      "Port Północny i rafineria",
      "kopalnia węgla brunatnego",
      "Fabryka Samochodów Małolitrażowych",
      "trasa Warszawa-Katowice"
    ],
    "right": [
      "Dąbrowa Górnicza",
      "Gdańsk",
      "Bełchatów",
      "Bielsko-Biała i Tychy",
      "gierkówka"
    ],
    "answer": {
      "huta Katowice": "Dąbrowa Górnicza",
      "Port Północny i rafineria": "Gdańsk",
      "kopalnia węgla brunatnego": "Bełchatów",
      "Fabryka Samochodów Małolitrażowych": "Bielsko-Biała i Tychy",
      "trasa Warszawa-Katowice": "gierkówka"
    },
    "explanation": "Do symboli modernizacji należały wielkie inwestycje przemysłowe i infrastrukturalne, w tym huta Katowice, Port Północny, Bełchatów, FSM oraz gierkówka.",
    "image": "r04_dworzec_centralny_budowa.jpg"
  },
  {
    "id": "R04_GIE_05",
    "section": "Polska w czasach Gierka",
    "type": "fill_in",
    "prompt": "Hasło Gierka brzmiało: Aby Polska rosła w __________, a ludzie żyli __________.",
    "options": null,
    "answer": [
      "siłę",
      "dostatniej"
    ],
    "altAnswers": [
      [
        "siłę",
        "sile"
      ],
      [
        "dostatniej"
      ]
    ],
    "explanation": "Hasło miało podkreślać obietnicę równoczesnej modernizacji państwa i poprawy poziomu życia."
  },
  {
    "id": "R04_GIE_06",
    "section": "Polska w czasach Gierka",
    "type": "single_choice",
    "prompt": "Około ilu lokali mieszkalnych oddano do użytku do 1980 r. dzięki masowemu budownictwu z wielkiej płyty?",
    "options": [
      "0,5 mln",
      "1 mln",
      "1,5 mln",
      "2,5 mln",
      "4 mln",
      "6 mln"
    ],
    "answer": 3,
    "explanation": "Do 1980 r. oddano do użytku około 2,5 mln lokali mieszkalnych, choć jakość wielu budynków była niska."
  },
  {
    "id": "R04_GIE_07",
    "section": "Polska w czasach Gierka",
    "type": "riddle",
    "prompt": "Jak nazywano sklepy, w których za zachodnie waluty można było kupować zagraniczne artykuły?",
    "options": null,
    "answer": "peweksy",
    "altAnswers": [
      "peweksy",
      "Pewex",
      "pewexy",
      "Pewexy"
    ],
    "explanation": "Peweksy sprzedawały zagraniczne towary za zachodnie waluty."
  },
  {
    "id": "R04_GIE_08",
    "section": "Polska w czasach Gierka",
    "type": "sort",
    "prompt": "Przyporządkuj zjawiska do krótkotrwałej poprawy poziomu życia albo do narastających problemów gospodarczych lat 70.",
    "options": null,
    "items": [
      "masowa budowa mieszkań",
      "produkcja Fiata 126p",
      "większa dostępność pralek i lodówek",
      "rosnące zadłużenie zagraniczne",
      "trudności ze sprzedażą polskich towarów na Zachodzie",
      "zaciąganie nowych kredytów na spłatę wcześniejszych"
    ],
    "categories": [
      "poprawa poziomu życia",
      "problemy gospodarcze"
    ],
    "answer": {
      "poprawa poziomu życia": [
        "masowa budowa mieszkań",
        "produkcja Fiata 126p",
        "większa dostępność pralek i lodówek"
      ],
      "problemy gospodarcze": [
        "rosnące zadłużenie zagraniczne",
        "trudności ze sprzedażą polskich towarów na Zachodzie",
        "zaciąganie nowych kredytów na spłatę wcześniejszych"
      ]
    },
    "explanation": "Kredyty pozwoliły szybko zwiększyć konsumpcję i inwestycje, ale nieskuteczny eksport i kolejne pożyczki prowadziły do narastania problemów gospodarczych.",
    "image": "r04_fiat_126p.jpg"
  },
  {
    "id": "R04_GIE_09",
    "section": "Polska w czasach Gierka",
    "type": "single_choice",
    "prompt": "Które medium stało się głównym narzędziem propagandy sukcesu w epoce Gierka?",
    "options": [
      "telewizja",
      "kino nieme",
      "prasa podziemna",
      "radio zagraniczne",
      "teatr szkolny",
      "ulotki opozycyjne"
    ],
    "answer": 0,
    "explanation": "Telewizja, od 1971 r. nadająca w kolorze, stała się głównym medium propagandy sukcesu.",
    "image": "r04_propaganda_sukcesu_telewizja.jpg"
  },
  {
    "id": "R04_GIE_10",
    "section": "Polska w czasach Gierka",
    "type": "multi_select",
    "prompt": "Zaznacz zmiany wprowadzone do Konstytucji PRL w 1976 r.",
    "options": [
      "określenie Polski jako państwa socjalistycznego",
      "uznanie PZPR za przewodnią siłę polityczną",
      "zapis o nierozerwalnej przyjaźni polsko-sowieckiej",
      "przywrócenie senatu",
      "wprowadzenie urzędu prezydenta wybieranego powszechnie",
      "zniesienie kierowniczej roli partii"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Nowelizacja z 1976 r. określała Polskę jako państwo socjalistyczne, wzmacniała pozycję PZPR i zawierała zapis o nierozerwalnej przyjaźni polsko-sowieckiej."
  },
  {
    "id": "R04_GIE_11",
    "section": "Polska w czasach Gierka",
    "type": "match",
    "prompt": "Połącz sportowca lub drużynę z osiągnięciem z lat 70.",
    "options": null,
    "left": [
      "reprezentacja piłkarska Kazimierza Górskiego",
      "Ryszard Szurkowski",
      "reprezentacja siatkarzy Huberta Wagnera"
    ],
    "right": [
      "złoto olimpijskie w 1972 r. i trzecie miejsce na mistrzostwach świata w 1974 r.",
      "cztery zwycięstwa w Wyścigu Pokoju",
      "mistrzostwo świata w 1974 r. i złoto olimpijskie w 1976 r."
    ],
    "answer": {
      "reprezentacja piłkarska Kazimierza Górskiego": "złoto olimpijskie w 1972 r. i trzecie miejsce na mistrzostwach świata w 1974 r.",
      "Ryszard Szurkowski": "cztery zwycięstwa w Wyścigu Pokoju",
      "reprezentacja siatkarzy Huberta Wagnera": "mistrzostwo świata w 1974 r. i złoto olimpijskie w 1976 r."
    },
    "explanation": "Władze chętnie wykorzystywały sukcesy sportowe w propagandzie, przedstawiając je jako dowód powodzenia państwa."
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Uchwalenie Konstytucji PRL",
      "Powstanie PZPR",
      "Referendum ludowe",
      "Poznański Czerwiec",
      "Dekret o reformie rolnej",
      "Wybory do sejmu ustawodawczego"
    ],
    "answer": [
      "Dekret o reformie rolnej",
      "Referendum ludowe",
      "Wybory do sejmu ustawodawczego",
      "Powstanie PZPR",
      "Uchwalenie Konstytucji PRL",
      "Poznański Czerwiec"
    ],
    "explanation": "Kolejność wyznaczają lata: 1944, 1946, 1947, 1948, 1952 i 1956."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Z Ziem Odzyskanych wysiedlono do Niemiec ok. __________ mln Niemców, do ZSRS przesiedlono ok. __________ tys. Ukraińców Białorusinów i Litwinów, z Kresów na Ziemie Odzyskane przesiedlono ok. __________ mln Polaków, a z Zachodu wróciło ok. __________ mln osób.",
    "options": null,
    "answer": [
      "3",
      "550",
      "1,5",
      "2"
    ],
    "altAnswers": [
      [
        "3",
        "3 mln"
      ],
      [
        "550",
        "550 tys.",
        "550 tysięcy"
      ],
      [
        "1,5",
        "1.5",
        "1,5 mln",
        "1.5 mln"
      ],
      [
        "2",
        "2 mln"
      ]
    ],
    "explanation": "Skala migracji była ogromna: około 3 mln Niemców, 550 tys. Ukraińców, Białorusinów i Litwinów, 1,5 mln Polaków z Kresów oraz 2 mln powracających z Zachodu.",
    "image": "r04_przesiedlency_ziemie_odzyskane.jpg"
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz zdania zgodne z danymi dotyczącymi pierwszych lat powojennych.",
    "options": [
      "W 1945 r. Polska liczyła około 24 mln mieszkańców",
      "Zginęło około 6 mln polskich obywateli",
      "Około 3 mln ofiar stanowili obywatele narodowości żydowskiej",
      "Terytorium Polski zmniejszyło się o 20% w stosunku do 1939 r.",
      "Kraj liczył w 1945 r. około 40 mln mieszkańców",
      "Polska zachowała po wojnie całe Kresy Wschodnie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Po wojnie Polska była mniejsza terytorialnie o 20%, liczyła około 24 mln mieszkańców, a straty ludnościowe wyniosły około 6 mln obywateli, w tym około 3 mln narodowości żydowskiej."
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz postać z najbardziej charakterystycznym faktem z jej biografii lub działalności.",
    "options": null,
    "left": [
      "Danuta Siedzikówna Inka",
      "Witold Pilecki",
      "Stanisław Mikołajczyk",
      "Stefan Wyszyński",
      "Edward Gierek"
    ],
    "right": [
      "sanitariuszka skazana na śmierć w 1946 r.",
      "dobrowolny więzień Auschwitz stracony w 1948 r.",
      "lider PSL i legalnej opozycji",
      "prymas internowany w latach 1953-1956",
      "I sekretarz KC PZPR od grudnia 1970 r."
    ],
    "answer": {
      "Danuta Siedzikówna Inka": "sanitariuszka skazana na śmierć w 1946 r.",
      "Witold Pilecki": "dobrowolny więzień Auschwitz stracony w 1948 r.",
      "Stanisław Mikołajczyk": "lider PSL i legalnej opozycji",
      "Stefan Wyszyński": "prymas internowany w latach 1953-1956",
      "Edward Gierek": "I sekretarz KC PZPR od grudnia 1970 r."
    },
    "explanation": "Każda z tych postaci jest związana z innym etapem historii Polski po 1945 r.: opozycją, represjami, Kościołem lub kierownictwem partii."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, kto nie pasuje do pozostałych: Bolesław Bierut, Władysław Gomułka, Edward Gierek, Wincenty Pstrowski.",
    "options": null,
    "answer": "Wincenty Pstrowski",
    "explanation": "Bierut, Gomułka i Gierek stali na czele partii komunistycznej. Pstrowski był górnikiem wykreowanym przez propagandę na przodownika pracy."
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W mieście strajkują robotnicy, do protestu dołącza około 100 tys. osób, władze używają jednostek pancernych, a najmłodszą ofiarą staje się 13-letni Romek Strzałkowski. Jak nazywa się to wydarzenie?",
    "options": [
      "Poznański Czerwiec",
      "Grudzień 1970",
      "Marzec 1968",
      "akcja Wisła",
      "referendum ludowe",
      "kongres zjednoczeniowy"
    ],
    "answer": 0,
    "explanation": "Opis dotyczy Poznańskiego Czerwca 1956 r. W walkach ulicznych zginęło około 70 osób.",
    "image": "r04_poznanski_czerwiec.jpg"
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Konstytucję PRL uchwalono 22 lipca __________ r., a jej nowelizację wzmacniającą pozycję PZPR przyjęto w __________ r.",
    "options": null,
    "answer": [
      "1952",
      "1976"
    ],
    "altAnswers": [
      [
        "1952",
        "1952 r."
      ],
      [
        "1976",
        "1976 r."
      ]
    ],
    "explanation": "Konstytucja stalinowska została uchwalona w 1952 r., a w 1976 r. wpisano m.in. socjalistyczny charakter państwa i przewodnią rolę PZPR.",
    "image": "r04_konstytucja_1952.jpg"
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj wydarzenia lub działania do okresu, z którym są najbardziej bezpośrednio związane.",
    "options": null,
    "items": [
      "referendum ludowe",
      "akcja Wisła",
      "plan sześcioletni",
      "aresztowanie prymasa Wyszyńskiego",
      "Poznański Czerwiec",
      "Marzec 1968",
      "budowa gierkówki",
      "nowelizacja konstytucji z 1976 r."
    ],
    "categories": [
      "pierwsze lata powojenne",
      "stalinizm",
      "rządy Gomułki",
      "rządy Gierka"
    ],
    "answer": {
      "pierwsze lata powojenne": [
        "referendum ludowe",
        "akcja Wisła"
      ],
      "stalinizm": [
        "plan sześcioletni",
        "aresztowanie prymasa Wyszyńskiego"
      ],
      "rządy Gomułki": [
        "Poznański Czerwiec",
        "Marzec 1968"
      ],
      "rządy Gierka": [
        "budowa gierkówki",
        "nowelizacja konstytucji z 1976 r."
      ]
    },
    "explanation": "Referendum i akcja Wisła należą do pierwszych lat powojennych, plan sześcioletni i aresztowanie prymasa do stalinizmu, Poznański Czerwiec i Marzec 1968 do epoki Gomułki, a gierkówka i nowelizacja z 1976 r. do epoki Gierka."
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Podaj nazwisko ostatniego żołnierza podziemia antykomunistycznego uznawanego za żołnierza niezłomnego, zabitego w 1963 r.",
    "options": null,
    "answer": "Józef Franczak",
    "altAnswers": [
      "Józef Franczak",
      "Jozef Franczak",
      "Franczak",
      "Józef Franczak Laluś",
      "Jozef Franczak Lalus"
    ],
    "explanation": "Za ostatniego żołnierza niezłomnego uznaje się sierżanta Józefa Franczaka Laluś, zabitego w 1963 r."
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz dowódców grup partyzanckich walczących z komunistami w ramach podziemia antykomunistycznego.",
    "options": [
      "Zygmunt Szendzielarz Łupaszka",
      "Marian Bernaciak Orlik",
      "Hieronim Dekutowski Zapora",
      "Franciszek Jaskulski Zagończyk",
      "Stanisław Mikołajczyk",
      "Wincenty Pstrowski"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do dowódców podziemia należeli Łupaszka, Orlik, Zapora i Zagończyk.",
    "image": "r04_zolnierze_podziemia.jpg"
  },
  {
    "id": "R04_HARD_11",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz numer pytania referendum ludowego z jego treścią.",
    "options": null,
    "left": [
      "pytanie 1",
      "pytanie 2",
      "pytanie 3"
    ],
    "right": [
      "likwidacja senatu",
      "zatwierdzenie reform społeczno-gospodarczych",
      "uznanie granic Polski na Bałtyku Odrze i Nysie Łużyckiej"
    ],
    "answer": {
      "pytanie 1": "likwidacja senatu",
      "pytanie 2": "zatwierdzenie reform społeczno-gospodarczych",
      "pytanie 3": "uznanie granic Polski na Bałtyku Odrze i Nysie Łużyckiej"
    },
    "explanation": "Pierwsze pytanie dotyczyło senatu, drugie reform, a trzecie zachodnich i północnych granic Polski."
  },
  {
    "id": "R04_HARD_12",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia epoki Gierka w porządku chronologicznym.",
    "options": null,
    "items": [
      "Nowelizacja Konstytucji PRL",
      "Rozpoczęcie produkcji Fiata 126p w Bielsku-Białej",
      "Objęcie funkcji I sekretarza przez Edwarda Gierka",
      "Telewizja zaczyna nadawać w kolorze",
      "Występ zespołu Boney M na festiwalu w Sopocie"
    ],
    "answer": [
      "Objęcie funkcji I sekretarza przez Edwarda Gierka",
      "Telewizja zaczyna nadawać w kolorze",
      "Rozpoczęcie produkcji Fiata 126p w Bielsku-Białej",
      "Nowelizacja Konstytucji PRL",
      "Występ zespołu Boney M na festiwalu w Sopocie"
    ],
    "explanation": "Gierek objął władzę w 1970 r., kolorowa telewizja ruszyła w 1971 r., produkcja Fiata 126p w Bielsku-Białej w 1973 r., konstytucję znowelizowano w 1976 r., a Boney M wystąpił w Sopocie w 1979 r.",
    "image": "r04_fiat_126p.jpg"
  },
  {
    "id": "R04_HARD_13",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, które miasto nie pasuje do pozostałych: Lwów, Wilno, Grodno, Wrocław.",
    "options": null,
    "answer": "Wrocław",
    "explanation": "Lwów, Wilno i Grodno znalazły się po wojnie poza granicami Polski, natomiast Wrocław został włączony do Polski.",
    "image": "r04_mapa_polska_1945.jpg"
  },
  {
    "id": "R04_HARD_14",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Polskim władzom zależy na tym, by Republika Federalna Niemiec uznała granicę na Odrze i Nysie Łużyckiej. 7 grudnia 1970 r. w Warszawie podpisuje się odpowiednie dokumenty. Jakiego procesu dotyczy ta sytuacja?",
    "options": [
      "normalizacji stosunków Polski z RFN",
      "utworzenia PZPR",
      "kolektywizacji rolnictwa",
      "akcji Wisła",
      "odwilży październikowej",
      "nacjonalizacji przemysłu"
    ],
    "answer": 0,
    "explanation": "W okresie rządów Gomułki dążono do normalizacji stosunków z RFN i uznania polskiej granicy zachodniej. Dokumenty podpisano w Warszawie 7 grudnia 1970 r."
  },
  {
    "id": "R04_HARD_15",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz pojęcie z właściwym znaczeniem.",
    "options": null,
    "left": [
      "linia Curzona",
      "Ziemie Odzyskane",
      "kolektywizacja",
      "socrealizm",
      "peweks"
    ],
    "right": [
      "propozycja wschodniej granicy Polski z 1919 r.",
      "powojenne ziemie zachodnie i północne przyłączone do Polski",
      "łączenie gruntów chłopskich w gospodarstwa zbiorowe",
      "realizm socjalistyczny w kulturze i sztuce",
      "sklep z zagranicznymi towarami sprzedawanymi za zachodnie waluty"
    ],
    "answer": {
      "linia Curzona": "propozycja wschodniej granicy Polski z 1919 r.",
      "Ziemie Odzyskane": "powojenne ziemie zachodnie i północne przyłączone do Polski",
      "kolektywizacja": "łączenie gruntów chłopskich w gospodarstwa zbiorowe",
      "socrealizm": "realizm socjalistyczny w kulturze i sztuce",
      "peweks": "sklep z zagranicznymi towarami sprzedawanymi za zachodnie waluty"
    },
    "explanation": "Pojęcia dotyczą granic, gospodarki, kultury oraz życia codziennego w PRL."
  }
];

const KID_PROMPTS = {
  "R04_WLA_06": "Jak nazywała się komunistyczna policja polityczna i kontrola tekstów przed drukiem?",
  "R04_STA_04": "Co państwo ustalało w gospodarce centralnie sterowanej?",
  "R04_STA_06": "Podziel skutki planu sześcioletniego na dobre i złe.",
  "R04_GOM_06": "Jakie dwie rocznice obchodzili osobno Kościół i władze w 1966 r.?",
  "R04_GIE_08": "Podziel zjawiska z lat 70. na poprawę życia i problemy gospodarki.",
  "R04_HARD_08": "Przyporządkuj wydarzenia do okresu, w którym miały miejsce."
};

const chapter = {
  id: "r04",
  number: 4,
  title: "Polska po II wojnie światowej",
  icon: "📘",
  sectionOrder: [
    "Powojenna Polska",
    "Przejęcie władzy",
    "Stalinizm w Polsce",
    "Czasy Gomułki",
    "Polska w czasach Gierka"
  ],
  sectionIcons: {
    "Powojenna Polska": "🌍",
    "Przejęcie władzy": "🗳️",
    "Stalinizm w Polsce": "🏭",
    "Czasy Gomułki": "📺",
    "Polska w czasach Gierka": "🚗"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
