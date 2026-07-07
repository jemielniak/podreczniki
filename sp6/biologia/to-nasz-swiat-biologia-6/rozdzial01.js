// Skróty sekcji:
//   SWI = Świat zwierząt
//   POD = Podział zwierząt
//   NIM = Tkanka nabłonkowa i mięśniowa
//   LNE = Tkanka łączna i nerwowa
//   MIE = Powtórka mieszana
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_SWI_01",
    "section": "Świat zwierząt",
    "type": "single_choice",
    "prompt": "W jakich środowiskach, według rozdziału, występują zwierzęta?",
    "options": [
      "Tylko w wodzie i na lądzie",
      "W wodzie, na lądzie, w powietrzu i wewnątrz innych organizmów",
      "Tylko na lądzie",
      "Wyłącznie w organizmach żywicieli",
      "Tylko w wodzie słodkiej",
      "Wyłącznie w powietrzu"
    ],
    "answer": 1,
    "explanation": "Zwierzęta występują niemal we wszystkich typach środowisk: w wodzie, na lądzie, w powietrzu oraz wewnątrz innych organizmów."
  },
  {
    "id": "R01_SWI_02",
    "section": "Świat zwierząt",
    "type": "true_false",
    "prompt": "Dorosłe koralowce prowadzą osiadły tryb życia.",
    "options": null,
    "answer": true,
    "explanation": "Osiadły tryb życia oznacza, że dorosłe osobniki spędzają życie w jednym miejscu, przytwierdzone do podłoża; rozdział podaje jako przykład koralowce."
  },
  {
    "id": "R01_SWI_03",
    "section": "Świat zwierząt",
    "type": "fill_in",
    "prompt": "Zwierzęta są __________, ponieważ nie potrafią samodzielnie produkować pokarmu.",
    "options": null,
    "answer": [
      "cudzożywne"
    ],
    "altAnswers": [
      [
        "cudzożywne",
        "cudzozywne"
      ]
    ],
    "explanation": "Cudzożywność oznacza konieczność pobierania pokarmu z otoczenia."
  },
  {
    "id": "R01_SWI_04",
    "section": "Świat zwierząt",
    "type": "multi_select",
    "prompt": "Zaznacz cechy wspólne większości zwierząt.",
    "options": [
      "Są wielokomórkowe",
      "Są zbudowane z komórek zwierzęcych",
      "Są samożywne",
      "Są cudzożywne",
      "Niemal wszystkie oddychają tlenem",
      "Mają chloroplasty"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Większość zwierząt jest wielokomórkowa, zbudowana z komórek zwierzęcych, cudzożywna i oddycha tlenem."
  },
  {
    "id": "R01_SWI_05",
    "section": "Świat zwierząt",
    "type": "single_choice",
    "prompt": "Jaka symetria ciała występuje zwykle u zwierząt aktywnie się poruszających?",
    "options": [
      "Promienista",
      "Dwuboczna",
      "Brak jakiejkolwiek symetrii",
      "Spiralna",
      "Kulista",
      "Siatkowa"
    ],
    "answer": 1,
    "image": "/img/r01_symetria_zwierzat.jpg",
    "explanation": "Zwierzęta aktywnie poruszające się mają zwykle dwuboczną symetrię ciała."
  },
  {
    "id": "R01_SWI_06",
    "section": "Świat zwierząt",
    "type": "match",
    "prompt": "Połącz rodzaj cudzożywności z przykładem z rozdziału.",
    "options": null,
    "left": [
      "padlinożerca",
      "roślinożerca",
      "wszystkożerca",
      "pasożyt",
      "saprobiont"
    ],
    "right": [
      "sęp uszaty",
      "pszczoła miodna",
      "sroka zwyczajna",
      "kleszcz pospolity",
      "dżdżownica"
    ],
    "answer": {
      "padlinożerca": "sęp uszaty",
      "roślinożerca": "pszczoła miodna",
      "wszystkożerca": "sroka zwyczajna",
      "pasożyt": "kleszcz pospolity",
      "saprobiont": "dżdżownica"
    },
    "image": "/img/r01_rodzaje_cudzozywnosci.jpg",
    "explanation": "Rozdział pokazuje m.in. sępa jako padlinożercę, pszczołę miodną jako roślinożercę, srokę jako wszystkożercę, kleszcza jako pasożyta i dżdżownicę jako saprobionta."
  },
  {
    "id": "R01_SWI_07",
    "section": "Świat zwierząt",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady zwierząt do rodzajów cudzożywności.",
    "options": null,
    "items": [
      "sęp uszaty",
      "gepard grzywiasty",
      "pszczoła miodna",
      "koala australijski",
      "sroka zwyczajna",
      "wiewiórka pospolita",
      "kleszcz pospolity"
    ],
    "categories": [
      "mięsożercy",
      "roślinożercy",
      "wszystkożercy",
      "pasożyty"
    ],
    "answer": {
      "mięsożercy": [
        "sęp uszaty",
        "gepard grzywiasty"
      ],
      "roślinożercy": [
        "pszczoła miodna",
        "koala australijski"
      ],
      "wszystkożercy": [
        "sroka zwyczajna",
        "wiewiórka pospolita"
      ],
      "pasożyty": [
        "kleszcz pospolity"
      ]
    },
    "image": "/img/r01_rodzaje_cudzozywnosci.jpg",
    "explanation": "Przykłady odpowiadają zestawieniu rodzajów cudzożywności w rozdziale."
  },
  {
    "id": "R01_SWI_08",
    "section": "Świat zwierząt",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: woda, ląd, powietrze, łuska.",
    "options": null,
    "answer": "łuska",
    "explanation": "Woda, ląd i powietrze to środowiska życia zwierząt, a łuska jest elementem budowy ciała niektórych zwierząt."
  },
  {
    "id": "R01_SWI_09",
    "section": "Świat zwierząt",
    "type": "scenario",
    "prompt": "Podczas obserwacji rafy uczeń zauważa zwierzęta, których dorosłe osobniki są przytwierdzone do podłoża i spędzają życie w jednym miejscu. Jaki tryb życia prowadzą?",
    "options": [
      "osiadły",
      "aktywny",
      "wędrowny",
      "pasożytniczy"
    ],
    "answer": 0,
    "explanation": "Osiadły tryb życia polega na pozostawaniu dorosłego osobnika w jednym miejscu, przytwierdzonego do podłoża."
  },
  {
    "id": "R01_SWI_10",
    "section": "Świat zwierząt",
    "type": "true_false",
    "prompt": "Symetria promienista oznacza, że tylko jedna płaszczyzna dzieli ciało zwierzęcia na jednakowe części.",
    "options": null,
    "answer": false,
    "image": "/img/r01_symetria_zwierzat.jpg",
    "explanation": "W symetrii promienistej ciało można podzielić na jednakowe części kilkoma płaszczyznami; jedna płaszczyzna jest cechą symetrii dwubocznej."
  },
  {
    "id": "R01_SWI_11",
    "section": "Świat zwierząt",
    "type": "riddle",
    "prompt": "Odżywiają się szczątkami martwych organizmów. Jak nazywa się taka grupa cudzożywnych zwierząt?",
    "options": null,
    "answer": "saprobionty",
    "altAnswers": [
      "saprobionty",
      "saprobiont"
    ],
    "explanation": "Saprobionty pobierają pokarm ze szczątków martwych organizmów."
  },
  {
    "id": "R01_SWI_12",
    "section": "Świat zwierząt",
    "type": "sequence",
    "prompt": "Ułóż poziomy hierarchicznej budowy organizmu od najmniejszego do największego.",
    "options": null,
    "items": [
      "narząd",
      "komórka zwierzęca",
      "układ narządów",
      "tkanka",
      "organizm"
    ],
    "answer": [
      "komórka zwierzęca",
      "tkanka",
      "narząd",
      "układ narządów",
      "organizm"
    ],
    "explanation": "Hierarchia pokazana w rozdziale prowadzi od komórki zwierzęcej do całego organizmu."
  },
  {
    "id": "R01_POD_01",
    "section": "Podział zwierząt",
    "type": "single_choice",
    "prompt": "Która grupa zwierząt jako jedyna należy do zwierząt beztkankowych?",
    "options": [
      "gąbki",
      "ryby",
      "płazy",
      "stawonogi",
      "mięczaki",
      "ptaki"
    ],
    "answer": 0,
    "image": "/img/r01_gabka_budowa.jpg",
    "explanation": "Do zwierząt beztkankowych należą tylko gąbki."
  },
  {
    "id": "R01_POD_02",
    "section": "Podział zwierząt",
    "type": "true_false",
    "prompt": "Gąbki mają tkanki, narządy i układy narządów.",
    "options": null,
    "answer": false,
    "image": "/img/r01_gabka_budowa.jpg",
    "explanation": "Gąbki są wielokomórkowe, ale nie mają tkanek, narządów ani układów narządów."
  },
  {
    "id": "R01_POD_03",
    "section": "Podział zwierząt",
    "type": "fill_in",
    "prompt": "Zwierzęta tkankowe dzieli się na __________ i __________.",
    "options": null,
    "answer": [
      "bezkręgowe",
      "kręgowe"
    ],
    "altAnswers": [
      [
        "bezkręgowe",
        "bezkregowe",
        "bezkręgowce",
        "bezkregowce"
      ],
      [
        "kręgowe",
        "kregowe",
        "kręgowce",
        "kregowce"
      ]
    ],
    "explanation": "Zwierzęta tkankowe obejmują dwie duże grupy: bezkręgowe i kręgowe."
  },
  {
    "id": "R01_POD_04",
    "section": "Podział zwierząt",
    "type": "multi_select",
    "prompt": "Zaznacz grupy należące do bezkręgowców.",
    "options": [
      "parzydełkowce",
      "płazińce",
      "ryby",
      "stawonogi",
      "ssaki",
      "mięczaki"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "image": "/img/r01_podzial_krolestwa_zwierzat.jpg",
    "explanation": "Bezkręgowce obejmują m.in. parzydełkowce, płazińce, stawonogi i mięczaki."
  },
  {
    "id": "R01_POD_05",
    "section": "Podział zwierząt",
    "type": "match",
    "prompt": "Połącz grupę z właściwym opisem.",
    "options": null,
    "left": [
      "beztkankowe",
      "tkankowe",
      "bezkręgowe",
      "kręgowe"
    ],
    "right": [
      "nie wykształcają tkanek",
      "mają tkanki",
      "nie mają sztywnego szkieletu wewnętrznego",
      "mają sztywny szkielet wewnętrzny"
    ],
    "answer": {
      "beztkankowe": "nie wykształcają tkanek",
      "tkankowe": "mają tkanki",
      "bezkręgowe": "nie mają sztywnego szkieletu wewnętrznego",
      "kręgowe": "mają sztywny szkielet wewnętrzny"
    },
    "image": "/img/r01_podzial_krolestwa_zwierzat.jpg",
    "explanation": "Opis rozdziału rozróżnia zwierzęta beztkankowe, tkankowe, bezkręgowe i kręgowe."
  },
  {
    "id": "R01_POD_06",
    "section": "Podział zwierząt",
    "type": "sort",
    "prompt": "Przyporządkuj grupy zwierząt tkankowych do bezkręgowców albo kręgowców.",
    "options": null,
    "items": [
      "parzydełkowce",
      "płazińce",
      "nicienie",
      "pierścienice",
      "stawonogi",
      "mięczaki",
      "ryby",
      "płazy",
      "gady",
      "ptaki",
      "ssaki"
    ],
    "categories": [
      "bezkręgowe",
      "kręgowe"
    ],
    "answer": {
      "bezkręgowe": [
        "parzydełkowce",
        "płazińce",
        "nicienie",
        "pierścienice",
        "stawonogi",
        "mięczaki"
      ],
      "kręgowe": [
        "ryby",
        "płazy",
        "gady",
        "ptaki",
        "ssaki"
      ]
    },
    "image": "/img/r01_podzial_krolestwa_zwierzat.jpg",
    "explanation": "W rozdziale bezkręgowce i kręgowce są dwiema głównymi grupami zwierząt tkankowych."
  },
  {
    "id": "R01_POD_07",
    "section": "Podział zwierząt",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: ryby, płazy, gady, mięczaki.",
    "options": null,
    "answer": "mięczaki",
    "explanation": "Ryby, płazy i gady należą do kręgowców, a mięczaki do bezkręgowców."
  },
  {
    "id": "R01_POD_08",
    "section": "Podział zwierząt",
    "type": "scenario",
    "prompt": "Uczeń opisuje zwierzęta, które mają sztywny szkielet wewnętrzny. Do której grupy powinien je zaliczyć?",
    "options": [
      "bezkręgowce",
      "kręgowce",
      "beztkankowe",
      "saprobionty"
    ],
    "answer": 1,
    "image": "/img/r01_podzial_krolestwa_zwierzat.jpg",
    "explanation": "Kręgowce to zwierzęta mające sztywny szkielet wewnętrzny."
  },
  {
    "id": "R01_POD_09",
    "section": "Podział zwierząt",
    "type": "riddle",
    "prompt": "Gąbka występująca w Polsce i w wodach słodkich to...",
    "options": null,
    "answer": "nadecznik stawowy",
    "altAnswers": [
      "nadecznik stawowy",
      "Nadecznik stawowy"
    ],
    "image": "/img/r01_gabka_budowa.jpg",
    "explanation": "Rozdział podaje nadecznika stawowego jako przykład gąbki słodkowodnej występującej w Polsce."
  },
  {
    "id": "R01_POD_10",
    "section": "Podział zwierząt",
    "type": "true_false",
    "prompt": "Do bezkręgowców zalicza się parzydełkowce, płazińce, nicienie, pierścienice, stawonogi i mięczaki.",
    "options": null,
    "answer": true,
    "image": "/img/r01_podzial_krolestwa_zwierzat.jpg",
    "explanation": "Te grupy są w rozdziale wymienione po stronie bezkręgowców."
  },
  {
    "id": "R01_POD_11",
    "section": "Podział zwierząt",
    "type": "single_choice",
    "prompt": "Do której grupy kręgowców należy niedźwiedź brunatny pokazany w rozdziale?",
    "options": [
      "ryby",
      "płazy",
      "gady",
      "ptaki",
      "ssaki",
      "mięczaki"
    ],
    "answer": 4,
    "explanation": "Niedźwiedź brunatny jest ssakiem, a ssaki należą do kręgowców."
  },
  {
    "id": "R01_POD_12",
    "section": "Podział zwierząt",
    "type": "sequence",
    "prompt": "Ułóż elementy od grupy najszerszej do najbardziej szczegółowej.",
    "options": null,
    "items": [
      "kręgowe",
      "zwierzęta",
      "ssaki",
      "tkankowe"
    ],
    "answer": [
      "zwierzęta",
      "tkankowe",
      "kręgowe",
      "ssaki"
    ],
    "explanation": "Schemat podziału prowadzi od całego królestwa zwierząt przez zwierzęta tkankowe i kręgowce do jednej z ich grup."
  },
  {
    "id": "R01_NIM_01",
    "section": "Tkanka nabłonkowa i mięśniowa",
    "type": "single_choice",
    "prompt": "Czym jest tkanka?",
    "options": [
      "Pojedynczą komórką bez określonej funkcji",
      "Grupą komórek o podobnej budowie i tej samej funkcji",
      "Zbiorem różnych organizmów",
      "Substancją produkowaną tylko przez rośliny",
      "Rodzajem środowiska życia",
      "Zewnętrzną częścią szkieletu"
    ],
    "answer": 1,
    "explanation": "Tkanka to grupa komórek o podobnej budowie i pełniących tę samą funkcję w organizmie."
  },
  {
    "id": "R01_NIM_02",
    "section": "Tkanka nabłonkowa i mięśniowa",
    "type": "multi_select",
    "prompt": "Zaznacz cztery podstawowe rodzaje tkanek zwierzęcych.",
    "options": [
      "nabłonkowa",
      "mięśniowa",
      "łączna",
      "nerwowa",
      "korkowa",
      "twórcza"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "U zwierząt kręgowych wyróżnia się tkankę nabłonkową, mięśniową, łączną oraz nerwową."
  },
  {
    "id": "R01_NIM_03",
    "section": "Tkanka nabłonkowa i mięśniowa",
    "type": "fill_in",
    "prompt": "Tkanka nabłonkowa tworzy zewnętrzną warstwę __________ oraz wyścieła większość narządów __________.",
    "options": null,
    "answer": [
      "skóry",
      "wewnętrznych"
    ],
    "altAnswers": [
      [
        "skóry",
        "skory"
      ],
      [
        "wewnętrznych",
        "wewnetrznych"
      ]
    ],
    "explanation": "Nabłonek buduje zewnętrzną warstwę skóry i wyścieła wiele narządów wewnętrznych."
  },
  {
    "id": "R01_NIM_04",
    "section": "Tkanka nabłonkowa i mięśniowa",
    "type": "true_false",
    "prompt": "Komórki tkanki nabłonkowej ściśle do siebie przylegają, tworząc warstwy.",
    "options": null,
    "answer": true,
    "explanation": "Ścisłe przyleganie komórek i tworzenie warstw jest cechą budowy nabłonka."
  },
  {
    "id": "R01_NIM_05",
    "section": "Tkanka nabłonkowa i mięśniowa",
    "type": "single_choice",
    "prompt": "Który rodzaj nabłonka występuje tam, gdzie odbywa się intensywna wymiana substancji?",
    "options": [
      "jednowarstwowy",
      "wielowarstwowy",
      "gładki",
      "kostny",
      "tłuszczowy",
      "nerwowy"
    ],
    "answer": 0,
    "image": "/img/r01_nablonki_rodzaje.jpg",
    "explanation": "Nabłonek jednowarstwowy występuje m.in. tam, gdzie zachodzi intensywna wymiana substancji."
  },
  {
    "id": "R01_NIM_06",
    "section": "Tkanka nabłonkowa i mięśniowa",
    "type": "match",
    "prompt": "Połącz kształt komórek nabłonka z opisem.",
    "options": null,
    "left": [
      "płaski",
      "sześcienny",
      "walcowaty"
    ],
    "right": [
      "płaskie komórki",
      "komórki o kształcie zbliżonym do sześcianu",
      "wydłużone komórki przypominające walec"
    ],
    "answer": {
      "płaski": "płaskie komórki",
      "sześcienny": "komórki o kształcie zbliżonym do sześcianu",
      "walcowaty": "wydłużone komórki przypominające walec"
    },
    "image": "/img/r01_nablonki_rodzaje.jpg",
    "explanation": "W rozdziale wyróżniono nabłonki płaskie, sześcienne i walcowate według kształtu komórek."
  },
  {
    "id": "R01_NIM_07",
    "section": "Tkanka nabłonkowa i mięśniowa",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: płaski, sześcienny, walcowaty, gładki.",
    "options": null,
    "answer": "gładki",
    "image": "/img/r01_nablonki_rodzaje.jpg",
    "explanation": "Płaski, sześcienny i walcowaty opisują kształty komórek nabłonka; gładka to rodzaj tkanki mięśniowej."
  },
  {
    "id": "R01_NIM_08",
    "section": "Tkanka nabłonkowa i mięśniowa",
    "type": "riddle",
    "prompt": "Wypustki na nabłonku kanalików nerkowych, które znacznie zwiększają powierzchnię wchłaniania wody, to...",
    "options": null,
    "answer": "mikrokosmki",
    "altAnswers": [
      "mikrokosmki",
      "mikrokosmek"
    ],
    "explanation": "Mikrokosmki zwiększają powierzchnię wchłaniania wody."
  },
  {
    "id": "R01_NIM_09",
    "section": "Tkanka nabłonkowa i mięśniowa",
    "type": "scenario",
    "prompt": "W drogach oddechowych pewne elementy nabłonka wyłapują i usuwają zanieczyszczenia z wdychanego powietrza. O jakie elementy chodzi?",
    "options": [
      "rzęski",
      "płytki krwi",
      "komórki kostne",
      "naczynia włosowate"
    ],
    "answer": 0,
    "explanation": "Rzęski nabłonka dróg oddechowych pomagają usuwać zanieczyszczenia z wdychanego powietrza."
  },
  {
    "id": "R01_NIM_10",
    "section": "Tkanka nabłonkowa i mięśniowa",
    "type": "single_choice",
    "prompt": "Który rodzaj tkanki mięśniowej tworzy mięśnie szkieletowe i kurczy się zależnie od woli organizmu?",
    "options": [
      "poprzecznie prążkowana szkieletowa",
      "poprzecznie prążkowana serca",
      "gładka",
      "tłuszczowa",
      "chrzęstna",
      "nerwowa"
    ],
    "answer": 0,
    "image": "/img/r01_tkanka_miesniowa_rodzaje.jpg",
    "explanation": "Tkanka mięśniowa poprzecznie prążkowana szkieletowa umożliwia ruch całego ciała lub jego części, a jej skurcze zależą od woli organizmu."
  },
  {
    "id": "R01_NIM_11",
    "section": "Tkanka nabłonkowa i mięśniowa",
    "type": "sort",
    "prompt": "Przyporządkuj rodzaje tkanki mięśniowej do sposobu działania skurczów.",
    "options": null,
    "items": [
      "poprzecznie prążkowana szkieletowa",
      "poprzecznie prążkowana serca",
      "gładka"
    ],
    "categories": [
      "zależnie od woli",
      "niezależnie od woli"
    ],
    "answer": {
      "zależnie od woli": [
        "poprzecznie prążkowana szkieletowa"
      ],
      "niezależnie od woli": [
        "poprzecznie prążkowana serca",
        "gładka"
      ]
    },
    "image": "/img/r01_tkanka_miesniowa_rodzaje.jpg",
    "explanation": "Mięśnie szkieletowe działają zależnie od woli, natomiast mięsień sercowy i tkanka gładka działają niezależnie od woli."
  },
  {
    "id": "R01_NIM_12",
    "section": "Tkanka nabłonkowa i mięśniowa",
    "type": "true_false",
    "prompt": "Tkanka mięśniowa gładka ma widoczne prążkowanie.",
    "options": null,
    "answer": false,
    "image": "/img/r01_tkanka_miesniowa_rodzaje.jpg",
    "explanation": "Tkanka mięśniowa gładka nie ma widocznego prążkowania."
  },
  {
    "id": "R01_LNE_01",
    "section": "Tkanka łączna i nerwowa",
    "type": "single_choice",
    "prompt": "Co jest cechą charakterystyczną tkanki łącznej?",
    "options": [
      "Duża ilość substancji międzykomórkowej",
      "Brak komórek",
      "Wyłącznie jedna warstwa komórek",
      "Zdolność do fotosyntezy",
      "Tylko komórki nerwowe",
      "Widoczne prążkowanie"
    ],
    "answer": 0,
    "image": "/img/r01_tkanka_laczna_rodzaje.jpg",
    "explanation": "Tkanka łączna ma dużo substancji międzykomórkowej, w której są zanurzone komórki."
  },
  {
    "id": "R01_LNE_02",
    "section": "Tkanka łączna i nerwowa",
    "type": "multi_select",
    "prompt": "Zaznacz rodzaje tkanki łącznej wymienione w rozdziale.",
    "options": [
      "chrzęstna",
      "kostna",
      "tłuszczowa",
      "krew",
      "nabłonkowa",
      "nerwowa"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r01_tkanka_laczna_rodzaje.jpg",
    "explanation": "Do tkanek łącznych zalicza się tkankę chrzęstną, kostną, tłuszczową oraz krew."
  },
  {
    "id": "R01_LNE_03",
    "section": "Tkanka łączna i nerwowa",
    "type": "match",
    "prompt": "Połącz rodzaj tkanki łącznej z opisem.",
    "options": null,
    "left": [
      "chrzęstna",
      "kostna",
      "tłuszczowa",
      "krew"
    ],
    "right": [
      "elastyczna i sprężysta",
      "twarda i wytrzymała",
      "magazynuje substancje tłuszczowe",
      "płynna tkanka krążąca w naczyniach"
    ],
    "answer": {
      "chrzęstna": "elastyczna i sprężysta",
      "kostna": "twarda i wytrzymała",
      "tłuszczowa": "magazynuje substancje tłuszczowe",
      "krew": "płynna tkanka krążąca w naczyniach"
    },
    "image": "/img/r01_tkanka_laczna_rodzaje.jpg",
    "explanation": "Rodzaje tkanki łącznej różnią się budową i funkcjami: chrząstka jest sprężysta, kość twarda, tłuszcz magazynuje energię, a krew transportuje substancje."
  },
  {
    "id": "R01_LNE_04",
    "section": "Tkanka łączna i nerwowa",
    "type": "fill_in",
    "prompt": "Krew składa się z krwinek czerwonych, krwinek białych i płytek krwi zanurzonych w __________.",
    "options": null,
    "answer": [
      "osoczu"
    ],
    "altAnswers": [
      [
        "osoczu",
        "osocze"
      ]
    ],
    "explanation": "Osocze jest substancją międzykomórkową krwi."
  },
  {
    "id": "R01_LNE_05",
    "section": "Tkanka łączna i nerwowa",
    "type": "true_false",
    "prompt": "Tkanka tłuszczowa występuje pod skórą oraz wokół narządów wewnętrznych.",
    "options": null,
    "answer": true,
    "explanation": "Tkanka tłuszczowa chroni przed urazami i utratą ciepła, magazynuje tłuszcze i występuje m.in. pod skórą oraz wokół narządów."
  },
  {
    "id": "R01_LNE_06",
    "section": "Tkanka łączna i nerwowa",
    "type": "single_choice",
    "prompt": "Które składniki krwi przyczyniają się do krzepnięcia krwi?",
    "options": [
      "krwinki czerwone",
      "krwinki białe",
      "płytki krwi",
      "osocze",
      "komórki kostne",
      "komórki glejowe"
    ],
    "answer": 2,
    "image": "/img/r01_skladniki_krwi.jpg",
    "explanation": "Płytki krwi uczestniczą w krzepnięciu krwi, co pomaga w gojeniu ran."
  },
  {
    "id": "R01_LNE_07",
    "section": "Tkanka łączna i nerwowa",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: krwinki czerwone, krwinki białe, płytki krwi, mikrokosmki.",
    "options": null,
    "answer": "mikrokosmki",
    "image": "/img/r01_skladniki_krwi.jpg",
    "explanation": "Krwinki czerwone, krwinki białe i płytki krwi są składnikami krwi, a mikrokosmki są wypustkami nabłonka."
  },
  {
    "id": "R01_LNE_08",
    "section": "Tkanka łączna i nerwowa",
    "type": "riddle",
    "prompt": "Komórka nerwowa nazywana jest...",
    "options": null,
    "answer": "neuron",
    "altAnswers": [
      "neuron",
      "komórka nerwowa",
      "komorka nerwowa"
    ],
    "image": "/img/r01_neuron_siec.jpg",
    "explanation": "Neuron to komórka nerwowa tworząca sieć połączeń z innymi komórkami."
  },
  {
    "id": "R01_LNE_09",
    "section": "Tkanka łączna i nerwowa",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje tkanki nerwowej.",
    "options": [
      "Odbiera informacje z otoczenia",
      "Przetwarza informacje",
      "Przekazuje informacje w organizmie",
      "Umożliwia reakcję na zmiany",
      "Transportuje większość tlenu we krwi",
      "Powoduje krzepnięcie krwi"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r01_neuron_siec.jpg",
    "explanation": "Tkanka nerwowa odbiera, przetwarza i przekazuje informacje, co umożliwia szybką reakcję organizmu."
  },
  {
    "id": "R01_LNE_10",
    "section": "Tkanka łączna i nerwowa",
    "type": "scenario",
    "prompt": "W opisie tkanki padają przykłady: małżowina uszna, krtań, przegroda nosowa i stawy. O jaką tkankę łączną chodzi?",
    "options": [
      "chrzęstna",
      "kostna",
      "tłuszczowa",
      "krew"
    ],
    "answer": 0,
    "image": "/img/r01_tkanka_laczna_rodzaje.jpg",
    "explanation": "Tkanka chrzęstna tworzy chrząstki występujące m.in. w małżowinie usznej, krtani, przegrodzie nosowej i stawach."
  },
  {
    "id": "R01_LNE_11",
    "section": "Tkanka łączna i nerwowa",
    "type": "true_false",
    "prompt": "Tkanka nerwowa jest zbudowana z neuronów i komórek glejowych.",
    "options": null,
    "answer": true,
    "image": "/img/r01_neuron_siec.jpg",
    "explanation": "Tkanka nerwowa zawiera komórki nerwowe, czyli neurony, oraz komórki glejowe, które je chronią i odżywiają."
  },
  {
    "id": "R01_LNE_12",
    "section": "Tkanka łączna i nerwowa",
    "type": "sequence",
    "prompt": "Ułóż uproszczoną drogę informacji w tkance nerwowej.",
    "options": null,
    "items": [
      "reakcja organizmu",
      "przesłanie informacji do mózgu",
      "odebranie informacji",
      "przesłanie informacji z mózgu"
    ],
    "answer": [
      "odebranie informacji",
      "przesłanie informacji do mózgu",
      "przesłanie informacji z mózgu",
      "reakcja organizmu"
    ],
    "image": "/img/r01_neuron_siec.jpg",
    "explanation": "Informacje są odbierane ze środowiska lub wnętrza ciała, przesyłane do mózgu i z mózgu, a następnie pozwalają organizmowi zareagować."
  },
  {
    "id": "R01_MIE_01",
    "section": "Powtórka mieszana",
    "type": "single_choice",
    "prompt": "Które zestawienie poprawnie opisuje zwierzęta?",
    "options": [
      "jednokomórkowe i samożywne",
      "wielokomórkowe i cudzożywne",
      "beztlenowe i bezkomórkowe",
      "zbudowane wyłącznie z tkanek roślinnych",
      "niezdolne do pobierania pokarmu",
      "zawsze osiadłe"
    ],
    "answer": 1,
    "explanation": "Zwierzęta są organizmami wielokomórkowymi, cudzożywnymi i zbudowanymi z komórek zwierzęcych."
  },
  {
    "id": "R01_MIE_02",
    "section": "Powtórka mieszana",
    "type": "match",
    "prompt": "Połącz przykład z poziomem budowy organizmu.",
    "options": null,
    "left": [
      "neuron",
      "nabłonek",
      "mózg",
      "układ nerwowy",
      "zwierzę"
    ],
    "right": [
      "komórka",
      "tkanka",
      "narząd",
      "układ narządów",
      "organizm"
    ],
    "answer": {
      "neuron": "komórka",
      "nabłonek": "tkanka",
      "mózg": "narząd",
      "układ nerwowy": "układ narządów",
      "zwierzę": "organizm"
    },
    "explanation": "Hierarchiczna budowa organizmu obejmuje komórki, tkanki, narządy, układy narządów i cały organizm."
  },
  {
    "id": "R01_MIE_03",
    "section": "Powtórka mieszana",
    "type": "sort",
    "prompt": "Przyporządkuj pojęcia do kategorii: tkanki albo grupy zwierząt.",
    "options": null,
    "items": [
      "nabłonkowa",
      "mięśniowa",
      "łączna",
      "nerwowa",
      "ryby",
      "stawonogi",
      "mięczaki",
      "gady"
    ],
    "categories": [
      "tkanki",
      "grupy zwierząt"
    ],
    "answer": {
      "tkanki": [
        "nabłonkowa",
        "mięśniowa",
        "łączna",
        "nerwowa"
      ],
      "grupy zwierząt": [
        "ryby",
        "stawonogi",
        "mięczaki",
        "gady"
      ]
    },
    "explanation": "Nabłonkowa, mięśniowa, łączna i nerwowa to tkanki; ryby, stawonogi, mięczaki i gady to grupy zwierząt."
  },
  {
    "id": "R01_MIE_04",
    "section": "Powtórka mieszana",
    "type": "true_false",
    "prompt": "Większość zwierząt to organizmy tkankowe.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział podkreśla, że większość zwierząt ma tkanki, a wśród nich wyróżnia się bezkręgowce i kręgowce."
  },
  {
    "id": "R01_MIE_05",
    "section": "Powtórka mieszana",
    "type": "fill_in",
    "prompt": "Bezkręgowce nie mają sztywnego szkieletu __________, a kręgowce taki szkielet mają.",
    "options": null,
    "answer": [
      "wewnętrznego"
    ],
    "altAnswers": [
      [
        "wewnętrznego",
        "wewnetrznego"
      ]
    ],
    "explanation": "Podział zwierząt tkankowych na bezkręgowce i kręgowce opiera się na obecności sztywnego szkieletu wewnętrznego."
  },
  {
    "id": "R01_MIE_06",
    "section": "Powtórka mieszana",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: chrzęstna, kostna, tłuszczowa, walcowata.",
    "options": null,
    "answer": "walcowata",
    "explanation": "Chrzęstna, kostna i tłuszczowa to rodzaje tkanki łącznej, a walcowata opisuje kształt komórek nabłonka."
  },
  {
    "id": "R01_MIE_07",
    "section": "Powtórka mieszana",
    "type": "scenario",
    "prompt": "Pod mikroskopem widać tkankę z dużą ilością substancji międzykomórkowej, w której znajdują się komórki. Jaki to typ tkanki?",
    "options": [
      "łączna",
      "nabłonkowa",
      "nerwowa",
      "mięśniowa"
    ],
    "answer": 0,
    "explanation": "Duża ilość substancji międzykomórkowej jest charakterystyczna dla tkanki łącznej."
  },
  {
    "id": "R01_MIE_08",
    "section": "Powtórka mieszana",
    "type": "multi_select",
    "prompt": "Zaznacz zdania prawdziwe.",
    "options": [
      "Tkanka mięśniowa umożliwia ruch.",
      "Gąbki są zwierzętami beztkankowymi.",
      "Tkanka nerwowa buduje układ nerwowy.",
      "Krew jest rodzajem tkanki łącznej.",
      "Bezkręgowce mają sztywny szkielet wewnętrzny.",
      "Nabłonek jest rodzajem tkanki mięśniowej."
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Prawdziwe zdania odpowiadają podstawowym informacjom z podsumowania działu."
  },
  {
    "id": "R01_MIE_09",
    "section": "Powtórka mieszana",
    "type": "riddle",
    "prompt": "Płynna tkanka łączna krążąca w naczyniach krwionośnych to...",
    "options": null,
    "answer": "krew",
    "altAnswers": [
      "krew"
    ],
    "explanation": "Krew jest płynną tkanką łączną, która krąży w naczyniach krwionośnych."
  },
  {
    "id": "R01_MIE_10",
    "section": "Powtórka mieszana",
    "type": "sequence",
    "prompt": "Ułóż elementy od grupy najszerszej do najbardziej szczegółowej.",
    "options": null,
    "items": [
      "ptaki",
      "zwierzęta",
      "kręgowe",
      "tkankowe"
    ],
    "answer": [
      "zwierzęta",
      "tkankowe",
      "kręgowe",
      "ptaki"
    ],
    "explanation": "To przykład przejścia od całego królestwa zwierząt do jednej grupy kręgowców."
  },
  {
    "id": "R01_MIE_11",
    "section": "Powtórka mieszana",
    "type": "single_choice",
    "prompt": "Która tkanka buduje mózg, rdzeń kręgowy i nerwy?",
    "options": [
      "nabłonkowa",
      "mięśniowa",
      "łączna",
      "nerwowa",
      "tłuszczowa",
      "chrzęstna"
    ],
    "answer": 3,
    "explanation": "Mózg, rdzeń kręgowy i nerwy tworzą układ nerwowy, zbudowany z tkanki nerwowej."
  },
  {
    "id": "R01_MIE_12",
    "section": "Powtórka mieszana",
    "type": "scenario",
    "prompt": "Po skaleczeniu krew zaczyna krzepnąć, co pomaga w gojeniu rany. Który składnik krwi bierze w tym udział?",
    "options": [
      "płytki krwi",
      "krwinki czerwone",
      "komórki glejowe",
      "mikrokosmki"
    ],
    "answer": 0,
    "explanation": "Płytki krwi przyczyniają się do krzepnięcia krwi."
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz poprawne połączenia symetrii ciała z trybem życia zwierząt.",
    "options": [
      "Aktywny tryb życia — symetria dwuboczna",
      "Osiadły tryb życia — symetria promienista",
      "Mniej ruchliwy tryb życia — symetria promienista",
      "Aktywny tryb życia — symetria promienista",
      "Osiadły tryb życia — symetria dwuboczna"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "/img/r01_symetria_zwierzat.jpg",
    "explanation": "Aktywne zwierzęta zwykle mają symetrię dwuboczną, a mniej ruchliwe lub osiadłe zwykle promienistą."
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Gdzie, według opisu rodzajów nabłonków, występuje nabłonek sześcienny?",
    "options": [
      "W kanalikach nerkowych i oskrzelach",
      "Wyłącznie w mięśniu sercowym",
      "W kościach długich",
      "Tylko w naskórku",
      "W płytkach krwi",
      "W komórkach glejowych"
    ],
    "answer": 0,
    "image": "/img/r01_nablonki_rodzaje.jpg",
    "explanation": "Nabłonek sześcienny wyścieła narządy wewnętrzne, m.in. kanaliki w nerkach i oskrzela człowieka."
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Prążki w tkance poprzecznie prążkowanej tworzą regularnie ułożone __________.",
    "options": null,
    "answer": [
      "białka kurczliwe"
    ],
    "altAnswers": [
      [
        "białka kurczliwe",
        "bialka kurczliwe",
        "białek kurczliwych",
        "bialek kurczliwych"
      ]
    ],
    "explanation": "W rozdziale prążki opisano jako wynik regularnego ułożenia białek kurczliwych."
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Tkanka mięśniowa serca jest poprzecznie prążkowana, ale jej skurcze nie zależą od woli organizmu.",
    "options": null,
    "answer": true,
    "explanation": "Mięsień sercowy należy do tkanki poprzecznie prążkowanej serca i kurczy się wolniej oraz niezależnie od woli organizmu."
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz składnik krwi z jego funkcją lub opisem.",
    "options": null,
    "left": [
      "krwinki czerwone",
      "krwinki białe",
      "płytki krwi",
      "osocze"
    ],
    "right": [
      "transport większości tlenu i części dwutlenku węgla",
      "funkcja obronna",
      "udział w krzepnięciu krwi",
      "w większości woda z rozpuszczonymi substancjami"
    ],
    "answer": {
      "krwinki czerwone": "transport większości tlenu i części dwutlenku węgla",
      "krwinki białe": "funkcja obronna",
      "płytki krwi": "udział w krzepnięciu krwi",
      "osocze": "w większości woda z rozpuszczonymi substancjami"
    },
    "image": "/img/r01_skladniki_krwi.jpg",
    "explanation": "Krwinki czerwone transportują tlen, białe pełnią funkcję obronną, płytki uczestniczą w krzepnięciu, a osocze jest głównie wodą z rozpuszczonymi substancjami."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: małżowina uszna, krtań, przegroda nosowa, pęcherzyk płucny.",
    "options": null,
    "answer": "pęcherzyk płucny",
    "image": "/img/r01_tkanka_laczna_rodzaje.jpg",
    "explanation": "Małżowina uszna, krtań i przegroda nosowa są miejscami występowania tkanki chrzęstnej, a ściany pęcherzyków płucnych są przykładem nabłonka płaskiego."
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Wielokomórkowe zwierzę o bardzo prostej budowie, bez tkanek, narządów i układów narządów, które wyłapuje drobne organizmy z przepływającej wody, to...",
    "options": null,
    "answer": "gąbka",
    "altAnswers": [
      "gąbka",
      "gabka",
      "gąbki",
      "gabki"
    ],
    "image": "/img/r01_gabka_budowa.jpg",
    "explanation": "Gąbki mają najprostszą budowę wśród zwierząt i należą do beztkankowych."
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Tkanka występuje w jelitach, naczyniach krwionośnych i drogach oddechowych. Kurczy się rytmicznie, powoli i niezależnie od woli, umożliwiając np. przesuwanie pokarmu w jelitach. Jaka to tkanka?",
    "options": [
      "mięśniowa gładka",
      "mięśniowa poprzecznie prążkowana szkieletowa",
      "tkanka kostna",
      "nabłonek wielowarstwowy"
    ],
    "answer": 0,
    "image": "/img/r01_tkanka_miesniowa_rodzaje.jpg",
    "explanation": "Tak opisano tkankę mięśniową gładką."
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do rodzaju tkanki.",
    "options": null,
    "items": [
      "naskórek",
      "ściany pęcherzyków płucnych",
      "mięsień sercowy",
      "mięśnie szkieletowe",
      "krew",
      "kości",
      "mózg",
      "nerwy"
    ],
    "categories": [
      "nabłonkowa",
      "mięśniowa",
      "łączna",
      "nerwowa"
    ],
    "answer": {
      "nabłonkowa": [
        "naskórek",
        "ściany pęcherzyków płucnych"
      ],
      "mięśniowa": [
        "mięsień sercowy",
        "mięśnie szkieletowe"
      ],
      "łączna": [
        "krew",
        "kości"
      ],
      "nerwowa": [
        "mózg",
        "nerwy"
      ]
    },
    "image": "/img/r01_rodzaje_tkanek_schemat.jpg",
    "explanation": "Przykłady miejsc występowania i struktur odpowiadają czterem podstawowym typom tkanek zwierzęcych."
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Komórki glejowe służą głównie do transportu tlenu we krwi.",
    "options": null,
    "answer": false,
    "image": "/img/r01_neuron_siec.jpg",
    "explanation": "Komórki glejowe należą do tkanki nerwowej: chronią i odżywiają neurony oraz usuwają uszkodzone lub martwe komórki nerwowe; transport tlenu jest zadaniem krwinek czerwonych."
  },
  {
    "id": "R01_HARD_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które stwierdzenie najtrafniej odróżnia kręgowce od bezkręgowców?",
    "options": [
      "Kręgowce mają sztywny szkielet wewnętrzny",
      "Kręgowce zawsze prowadzą osiadły tryb życia",
      "Bezkręgowce zawsze są beztkankowe",
      "Bezkręgowce oddychają wyłącznie beztlenowo",
      "Kręgowce nie mają narządów",
      "Bezkręgowce zawsze żyją tylko w wodzie"
    ],
    "answer": 0,
    "explanation": "Kręgowce mają sztywny szkielet wewnętrzny, a bezkręgowce go nie mają."
  },
  {
    "id": "R01_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz pary tkanka — miejsce występowania zgodne z rozdziałem.",
    "options": [
      "nabłonkowa — wierzchnia warstwa skóry",
      "mięśniowa gładka — ściany naczyń krwionośnych i przewodu pokarmowego",
      "nerwowa — układ nerwowy",
      "tłuszczowa — kości",
      "chrzęstna — naskórek",
      "krew — naczynia krwionośne"
    ],
    "answer": [
      0,
      1,
      2,
      5
    ],
    "explanation": "Zgodne pary to nabłonkowa w skórze, mięśniowa gładka w ścianach naczyń i przewodu pokarmowego, nerwowa w układzie nerwowym oraz krew w naczyniach krwionośnych."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r01",
  number: 1,
  title: "Królestwo zwierząt",
  icon: "🐾",
  sectionOrder: [
    "Świat zwierząt",
    "Podział zwierząt",
    "Tkanka nabłonkowa i mięśniowa",
    "Tkanka łączna i nerwowa",
    "Powtórka mieszana",
    "Super trudne"
  ],
  sectionIcons: {
    "Świat zwierząt": "🌍",
    "Podział zwierząt": "🧬",
    "Tkanka nabłonkowa i mięśniowa": "🔬",
    "Tkanka łączna i nerwowa": "🧠",
    "Powtórka mieszana": "🔁",
    "Super trudne": "🔥"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
