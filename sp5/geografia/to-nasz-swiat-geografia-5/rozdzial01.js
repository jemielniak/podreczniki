// Skróty sekcji (do identyfikatorów ćwiczeń):
//   ZIG  = Ziemia i globus
//   SGP  = Siatka geograficzna i półkule
//   KON  = Kontynenty i oceany
//   ODK  = Odkrycia geograficzne
//   WYP  = Wielkie wyprawy i odkrywcy
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_ZIG_01",
    "section": "Ziemia i globus",
    "type": "single_choice",
    "prompt": "Co jest modelem Ziemi?",
    "options": [
      "globus",
      "kompas",
      "teleskop",
      "ocean",
      "kontynent",
      "drakkar"
    ],
    "answer": 0,
    "image": "r01_globus_ziemi.jpg",
    "explanation": "Modelem Ziemi jest globus. Pokazuje on między innymi lądy, wody, państwa i elementy siatki geograficznej."
  },
  {
    "id": "R01_ZIG_02",
    "section": "Ziemia i globus",
    "type": "true_false",
    "prompt": "Ziemia jest jedną z ośmiu planet Układu Słonecznego i ma kształt zbliżony do kuli.",
    "options": null,
    "answer": true,
    "explanation": "Ziemia należy do ośmiu planet Układu Słonecznego i ma kształt zbliżony do kuli."
  },
  {
    "id": "R01_ZIG_03",
    "section": "Ziemia i globus",
    "type": "fill_in",
    "prompt": "Ziemia należy do Układu __________, a jej modelem jest __________.",
    "options": null,
    "answer": [
      "Słonecznego",
      "globus"
    ],
    "altAnswers": [
      [
        "Słonecznego",
        "slonecznego"
      ],
      [
        "globus",
        "globus"
      ]
    ],
    "explanation": "Ziemia to planeta Układu Słonecznego. Jej modelem jest globus."
  },
  {
    "id": "R01_ZIG_04",
    "section": "Ziemia i globus",
    "type": "riddle",
    "prompt": "Jak nazywa się centralna gwiazda Układu Słonecznego, wokół której krąży Ziemia?",
    "options": null,
    "answer": "Słońce",
    "altAnswers": [
      "Słońce",
      "Slonce"
    ],
    "explanation": "Ziemia, tak jak pozostałe planety, krąży wokół Słońca."
  },
  {
    "id": "R01_ZIG_05",
    "section": "Ziemia i globus",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do rzeczy przedstawianych na globusie: lądy, wody, państwa, ulice miast.",
    "options": null,
    "answer": "ulice miast",
    "explanation": "Na globusie widać lądy, wody i podział świata na państwa. Ulic miast na globusie się nie pokazuje - globus przedstawia całą Ziemię w bardzo małej skali."
  },
  {
    "id": "R01_ZIG_06",
    "section": "Ziemia i globus",
    "type": "match",
    "prompt": "Połącz pojęcie z właściwym opisem.",
    "options": null,
    "left": [
      "Ziemia",
      "globus",
      "Słońce",
      "błękitna planeta"
    ],
    "right": [
      "centralna gwiazda Układu Słonecznego",
      "model Ziemi",
      "jedna z ośmiu planet Układu Słonecznego",
      "nazwa Ziemi widzianej z kosmosu"
    ],
    "answer": {
      "Ziemia": "jedna z ośmiu planet Układu Słonecznego",
      "globus": "model Ziemi",
      "Słońce": "centralna gwiazda Układu Słonecznego",
      "błękitna planeta": "nazwa Ziemi widzianej z kosmosu"
    },
    "explanation": "Ziemia jest planetą, Słońce jest gwiazdą centralną Układu Słonecznego, a globus to model Ziemi."
  },
  {
    "id": "R01_ZIG_07",
    "section": "Ziemia i globus",
    "type": "sort",
    "prompt": "Przyporządkuj informacje do Ziemi albo do globusa.",
    "options": null,
    "items": [
      "jedna z ośmiu planet",
      "ma kształt zbliżony do kuli",
      "model Ziemi",
      "pokazuje lądy i państwa"
    ],
    "categories": [
      "Ziemia",
      "globus"
    ],
    "answer": {
      "Ziemia": [
        "jedna z ośmiu planet",
        "ma kształt zbliżony do kuli"
      ],
      "globus": [
        "model Ziemi",
        "pokazuje lądy i państwa"
      ]
    },
    "image": "r01_uklad_sloneczny.jpg",
    "explanation": "Ziemia jest planetą o kształcie zbliżonym do kuli, a globus jest jej modelem i przedstawia lądy oraz państwa."
  },
  {
    "id": "R01_ZIG_08",
    "section": "Ziemia i globus",
    "type": "scenario",
    "prompt": "Patrzysz na Ziemię z kosmosu i widzisz, że zdecydowanie przeważa kolor niebieski. Dlaczego Ziemia bywa nazywana błękitną planetą?",
    "options": [
      "ponieważ z kosmosu przeważa kolor wody",
      "ponieważ wszystkie lądy są niebieskie",
      "ponieważ nie ma na niej oceanów",
      "ponieważ jest najbliżej Słońca",
      "ponieważ ma pierścienie",
      "ponieważ jest najmniejszą planetą"
    ],
    "answer": 0,
    "explanation": "Ziemia jest często nazywana błękitną planetą, bo gdy patrzy się na nią z kosmosu, zdecydowanie przeważa kolor niebieski."
  },
  {
    "id": "R01_ZIG_09",
    "section": "Ziemia i globus",
    "type": "multi_select",
    "prompt": "Zaznacz elementy, które można przedstawiać na globusie.",
    "options": [
      "lądy",
      "wody",
      "siatkę geograficzną",
      "podział świata na państwa",
      "program telewizyjny",
      "skład załogi statku"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Na globusie przedstawia się między innymi lądy, wody, państwa oraz siatkę geograficzną."
  },
  {
    "id": "R01_ZIG_10",
    "section": "Ziemia i globus",
    "type": "fill_in",
    "prompt": "Ziemia jest trzecią planetą od __________ i istnieje około __________ miliarda lat.",
    "options": null,
    "answer": [
      "Słońca",
      "4,5"
    ],
    "altAnswers": [
      [
        "Słońca",
        "Slonca"
      ],
      [
        "4,5",
        "4.5",
        "cztery i pół"
      ]
    ],
    "explanation": "Ziemia jest trzecią planetą od Słońca i istnieje około 4,5 miliarda lat."
  },
  {
    "id": "R01_SGP_01",
    "section": "Siatka geograficzna i półkule",
    "type": "single_choice",
    "prompt": "Jak nazywają się linie oznaczone liczbami, które na globusie tworzą siatkę geograficzną?",
    "options": [
      "południki i równoleżniki",
      "kontynenty i oceany",
      "lądy i państwa",
      "zwrotniki i statki",
      "bieguny i wyspy",
      "mapy i globusy"
    ],
    "answer": 0,
    "image": "r01_siatka_geograficzna.jpg",
    "explanation": "Siatkę geograficzną tworzą południki i równoleżniki."
  },
  {
    "id": "R01_SGP_02",
    "section": "Siatka geograficzna i półkule",
    "type": "true_false",
    "prompt": "Wszystkie południki są tej samej długości.",
    "options": null,
    "answer": true,
    "explanation": "Południki to półokręgi łączące bieguny. Wszystkie są tej samej długości."
  },
  {
    "id": "R01_SGP_03",
    "section": "Siatka geograficzna i półkule",
    "type": "fill_in",
    "prompt": "Południki to półokręgi łączące __________, a równoleżniki to __________ o różnej długości.",
    "options": null,
    "answer": [
      "bieguny",
      "okręgi"
    ],
    "altAnswers": [
      [
        "bieguny",
        "biegun północny i południowy",
        "biegun północny oraz południowy"
      ],
      [
        "okręgi",
        "okregi"
      ]
    ],
    "explanation": "Południki łączą bieguny, a równoleżniki mają kształt okręgów o różnej długości."
  },
  {
    "id": "R01_SGP_04",
    "section": "Siatka geograficzna i półkule",
    "type": "riddle",
    "prompt": "Jaki jest najdłuższy równoleżnik?",
    "options": null,
    "answer": "równik",
    "altAnswers": [
      "równik",
      "rownik"
    ],
    "explanation": "Najdłuższym równoleżnikiem jest równik. Ma około 40 000 km długości."
  },
  {
    "id": "R01_SGP_05",
    "section": "Siatka geograficzna i półkule",
    "type": "match",
    "prompt": "Połącz element siatki geograficznej z opisem.",
    "options": null,
    "left": [
      "biegun północny",
      "biegun południowy",
      "równik",
      "południki 0° i 180°"
    ],
    "right": [
      "punkt Ziemi najbardziej wysunięty na południe",
      "dzielą Ziemię na półkulę wschodnią i zachodnią",
      "dzieli Ziemię na półkulę północną i południową",
      "punkt Ziemi najbardziej wysunięty na północ"
    ],
    "answer": {
      "biegun północny": "punkt Ziemi najbardziej wysunięty na północ",
      "biegun południowy": "punkt Ziemi najbardziej wysunięty na południe",
      "równik": "dzieli Ziemię na półkulę północną i południową",
      "południki 0° i 180°": "dzielą Ziemię na półkulę wschodnią i zachodnią"
    },
    "explanation": "Równik dzieli Ziemię na półkulę północną i południową, a południki 0° i 180° na półkulę wschodnią i zachodnią."
  },
  {
    "id": "R01_SGP_06",
    "section": "Siatka geograficzna i półkule",
    "type": "scenario",
    "prompt": "Na globusie widzisz okrąg, który biegnie prostopadle względem południków. Im dalej od równika, tym takie okręgi są krótsze. Jak nazywa się ten rodzaj linii?",
    "options": [
      "równoleżnik",
      "południk",
      "biegun",
      "kontynent",
      "ocean",
      "drakkar"
    ],
    "answer": 0,
    "image": "r01_podzial_na_polkule.jpg",
    "explanation": "Równoleżniki to okręgi o różnej długości, biegnące prostopadle względem południków."
  },
  {
    "id": "R01_SGP_07",
    "section": "Siatka geograficzna i półkule",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do nazw wybranych równoleżników: równik, zwrotnik Raka, zwrotnik Koziorożca, południk 0°.",
    "options": null,
    "answer": "południk 0°",
    "explanation": "Równik, zwrotnik Raka i zwrotnik Koziorożca to równoleżniki. Południk 0° należy do południków."
  },
  {
    "id": "R01_SGP_08",
    "section": "Siatka geograficzna i półkule",
    "type": "sort",
    "prompt": "Rozdziel cechy południków i równoleżników.",
    "options": null,
    "items": [
      "łączą bieguny",
      "są tej samej długości",
      "są okręgami o różnej długości",
      "biegną prostopadle względem południków"
    ],
    "categories": [
      "południki",
      "równoleżniki"
    ],
    "answer": {
      "południki": [
        "łączą bieguny",
        "są tej samej długości"
      ],
      "równoleżniki": [
        "są okręgami o różnej długości",
        "biegną prostopadle względem południków"
      ]
    },
    "explanation": "Południki łączą bieguny i są tej samej długości, a równoleżniki są okręgami o różnej długości."
  },
  {
    "id": "R01_SGP_09",
    "section": "Siatka geograficzna i półkule",
    "type": "sequence",
    "prompt": "Ułóż równoleżniki od północy ku południu.",
    "options": null,
    "items": [
      "zwrotnik Koziorożca",
      "koło podbiegunowe północne",
      "koło podbiegunowe południowe",
      "równik",
      "zwrotnik Raka"
    ],
    "answer": [
      "koło podbiegunowe północne",
      "zwrotnik Raka",
      "równik",
      "zwrotnik Koziorożca",
      "koło podbiegunowe południowe"
    ],
    "explanation": "Na mapie świata kolejność od północy jest następująca: koło podbiegunowe północne, zwrotnik Raka, równik, zwrotnik Koziorożca, koło podbiegunowe południowe."
  },
  {
    "id": "R01_SGP_10",
    "section": "Siatka geograficzna i półkule",
    "type": "multi_select",
    "prompt": "Zaznacz nazwy równoleżników.",
    "options": [
      "równik",
      "zwrotnik Raka",
      "zwrotnik Koziorożca",
      "koło podbiegunowe północne",
      "koło podbiegunowe południowe",
      "południk 180°"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Wymieniono równik, zwrotniki Raka i Koziorożca oraz oba koła podbiegunowe."
  },
  {
    "id": "R01_KON_01",
    "section": "Kontynenty i oceany",
    "type": "single_choice",
    "prompt": "Ile kontynentów wyróżnia się zazwyczaj na Ziemi?",
    "options": [
      "siedem",
      "pięć",
      "trzy",
      "osiem",
      "dwa",
      "dziesięć"
    ],
    "answer": 0,
    "image": "r01_mapa_kontynentow.jpg",
    "explanation": "Wymienia się siedem kontynentów: Azję, Afrykę, Amerykę Północną, Amerykę Południową, Antarktydę, Europę i Australię."
  },
  {
    "id": "R01_KON_02",
    "section": "Kontynenty i oceany",
    "type": "single_choice",
    "prompt": "Który kontynent jest największy?",
    "options": [
      "Azja",
      "Australia",
      "Europa",
      "Antarktyda",
      "Ameryka Południowa",
      "Afryka"
    ],
    "answer": 0,
    "explanation": "Największym kontynentem jest Azja, a najmniejszym Australia."
  },
  {
    "id": "R01_KON_03",
    "section": "Kontynenty i oceany",
    "type": "true_false",
    "prompt": "Europa szeroko łączy się z Azją, dlatego często traktuje się je jako jeden kontynent nazywany Eurazją.",
    "options": null,
    "answer": true,
    "explanation": "Europa szeroko łączy się z Azją i dlatego bywa z nią traktowana jako Eurazja."
  },
  {
    "id": "R01_KON_04",
    "section": "Kontynenty i oceany",
    "type": "fill_in",
    "prompt": "Największym kontynentem jest __________, a najmniejszym jest __________.",
    "options": null,
    "answer": [
      "Azja",
      "Australia"
    ],
    "altAnswers": [
      [
        "Azja",
        "Azji"
      ],
      [
        "Australia",
        "Australią"
      ]
    ],
    "explanation": "Największym kontynentem jest Azja, a najmniejszym Australia."
  },
  {
    "id": "R01_KON_05",
    "section": "Kontynenty i oceany",
    "type": "riddle",
    "prompt": "Jak nazywa się gigantyczny zbiornik słonej wody otaczający kontynenty?",
    "options": null,
    "answer": "ocean",
    "altAnswers": [
      "ocean",
      "oceany"
    ],
    "explanation": "Kontynenty są otoczone gigantycznymi zbiornikami słonej wody, czyli oceanami."
  },
  {
    "id": "R01_KON_06",
    "section": "Kontynenty i oceany",
    "type": "match",
    "prompt": "Połącz nazwę lub pojęcie z właściwym określeniem.",
    "options": null,
    "left": [
      "Ocean Spokojny",
      "Ocean Atlantycki",
      "ocean światowy",
      "Eurazja"
    ],
    "right": [
      "wszechocean",
      "Pacyfik",
      "połączenie Europy i Azji",
      "Atlantyk"
    ],
    "answer": {
      "Ocean Spokojny": "Pacyfik",
      "Ocean Atlantycki": "Atlantyk",
      "ocean światowy": "wszechocean",
      "Eurazja": "połączenie Europy i Azji"
    },
    "explanation": "Ocean Spokojny to Pacyfik, Ocean Atlantycki to Atlantyk, a wszystkie oceany razem tworzą ocean światowy, czyli wszechocean."
  },
  {
    "id": "R01_KON_07",
    "section": "Kontynenty i oceany",
    "type": "sort",
    "prompt": "Przyporządkuj nazwy do kontynentów i oceanów.",
    "options": null,
    "items": [
      "Azja",
      "Afryka",
      "Ocean Indyjski",
      "Australia",
      "Ocean Arktyczny",
      "Ocean Południowy"
    ],
    "categories": [
      "kontynenty",
      "oceany"
    ],
    "answer": {
      "kontynenty": [
        "Azja",
        "Afryka",
        "Australia"
      ],
      "oceany": [
        "Ocean Indyjski",
        "Ocean Arktyczny",
        "Ocean Południowy"
      ]
    },
    "explanation": "Azja, Afryka i Australia są kontynentami, a Ocean Indyjski, Arktyczny i Południowy są oceanami."
  },
  {
    "id": "R01_KON_08",
    "section": "Kontynenty i oceany",
    "type": "scenario",
    "prompt": "Na mapie wskazujesz kontynent położony wokół bieguna południowego i otaczany przez wody Oceanu Południowego. Który to kontynent?",
    "options": [
      "Antarktyda",
      "Europa",
      "Azja",
      "Ameryka Północna",
      "Australia",
      "Afryka"
    ],
    "answer": 0,
    "image": "r01_antarktyda_biegun.jpg",
    "explanation": "Antarktyda leży na południu Ziemi, a na mapie działu znajduje się przy biegunie południowym i Oceanie Południowym."
  },
  {
    "id": "R01_KON_09",
    "section": "Kontynenty i oceany",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do nazw kontynentów: Azja, Afryka, Europa, Ocean Indyjski.",
    "options": null,
    "answer": "Ocean Indyjski",
    "explanation": "Azja, Afryka i Europa to kontynenty. Ocean Indyjski jest oceanem."
  },
  {
    "id": "R01_KON_10",
    "section": "Kontynenty i oceany",
    "type": "multi_select",
    "prompt": "Zaznacz kontynenty, które według mapy działu leżą w całości na półkuli południowej.",
    "options": [
      "Australia",
      "Antarktyda",
      "Europa",
      "Azja",
      "Ameryka Północna",
      "Afryka"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Na mapie kontynentami leżącymi w całości na półkuli południowej są Australia i Antarktyda."
  },
  {
    "id": "R01_ODK_01",
    "section": "Odkrycia geograficzne",
    "type": "single_choice",
    "prompt": "Którzy podróżnicy zostali wymienieni jako jedni z pierwszych?",
    "options": [
      "wikingowie",
      "kosmonauci",
      "turyści",
      "kartografowie",
      "Indianie",
      "tubylcy"
    ],
    "answer": 0,
    "image": "r01_lodz_wikingow.jpg",
    "explanation": "Jednymi z pierwszych podróżników byli wikingowie pochodzący ze Skandynawii."
  },
  {
    "id": "R01_ODK_02",
    "section": "Odkrycia geograficzne",
    "type": "true_false",
    "prompt": "Wikingowie dotarli do Ameryki Północnej już na przełomie X i XI wieku.",
    "options": null,
    "answer": true,
    "explanation": "Świetni żeglarze ze Skandynawii dopłynęli do Ameryki Północnej na przełomie X i XI wieku."
  },
  {
    "id": "R01_ODK_03",
    "section": "Odkrycia geograficzne",
    "type": "fill_in",
    "prompt": "Ludzie wyruszali na wyprawy nie tylko z głodu __________, lecz także z chęci zdobycia __________ i nowych ziem.",
    "options": null,
    "answer": [
      "wiedzy",
      "bogactwa"
    ],
    "altAnswers": [
      [
        "wiedzy",
        "poznania"
      ],
      [
        "bogactwa",
        "bogactw"
      ]
    ],
    "explanation": "Wymienia się głód wiedzy oraz chęć zdobycia bogactwa i nowych ziem jako motywy wypraw."
  },
  {
    "id": "R01_ODK_04",
    "section": "Odkrycia geograficzne",
    "type": "riddle",
    "prompt": "Jak nazywały się łodzie wikingów?",
    "options": null,
    "answer": "drakkary",
    "altAnswers": [
      "drakkary",
      "drakkar"
    ],
    "explanation": "Podpisano łodzie wikingów jako drakkary."
  },
  {
    "id": "R01_ODK_05",
    "section": "Odkrycia geograficzne",
    "type": "match",
    "prompt": "Połącz pojęcie z informacją.",
    "options": null,
    "left": [
      "wikingowie",
      "Skandynawia",
      "Ameryka Północna",
      "przełom X i XI wieku"
    ],
    "right": [
      "czas dopłynięcia wikingów do Ameryki Północnej",
      "obszar dzisiejszej Norwegii Szwecji i Danii",
      "kontynent odwiedzony przez wikingów",
      "jedni z pierwszych podróżników"
    ],
    "answer": {
      "wikingowie": "jedni z pierwszych podróżników",
      "Skandynawia": "obszar dzisiejszej Norwegii Szwecji i Danii",
      "Ameryka Północna": "kontynent odwiedzony przez wikingów",
      "przełom X i XI wieku": "czas dopłynięcia wikingów do Ameryki Północnej"
    },
    "explanation": "Wikingowie pochodzili ze Skandynawii i dotarli do Ameryki Północnej na przełomie X i XI wieku."
  },
  {
    "id": "R01_ODK_06",
    "section": "Odkrycia geograficzne",
    "type": "scenario",
    "prompt": "Wyobraź sobie dawne czasy bez telewizji i internetu. Ktoś z daleka opowiada o nieznanych miejscach, a ludzie chcą je zobaczyć oraz zdobyć nowe ziemie. Jak wyjaśnia się takie wyprawy?",
    "options": [
      "wynikały z ciekawości świata oraz chęci zdobycia bogactwa i ziem",
      "były zakazane przez wszystkich władców",
      "służyły wyłącznie zabawie",
      "odbywały się tylko w kosmosie",
      "dotyczyły jedynie sportu",
      "nie miały związku z poznawaniem świata"
    ],
    "answer": 0,
    "explanation": "Ludzi kierowała ciekawość, głód wiedzy, chęć bogactwa oraz zdobywania nowych ziem."
  },
  {
    "id": "R01_ODK_07",
    "section": "Odkrycia geograficzne",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do państw Skandynawii: Norwegia, Szwecja, Dania, Hiszpania.",
    "options": null,
    "answer": "Hiszpania",
    "explanation": "Skandynawia została objaśniona jako tereny dzisiejszej Norwegii, Szwecji i Danii. Hiszpania nie należy do tej listy."
  },
  {
    "id": "R01_ODK_08",
    "section": "Odkrycia geograficzne",
    "type": "multi_select",
    "prompt": "Zaznacz dzisiejsze państwa, które podano jako obszar Skandynawii.",
    "options": [
      "Norwegia",
      "Szwecja",
      "Dania",
      "Hiszpania",
      "Portugalia",
      "Indie"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Skandynawię wyjaśniono jako tereny dzisiejszej Norwegii, Szwecji i Danii."
  },
  {
    "id": "R01_ODK_09",
    "section": "Odkrycia geograficzne",
    "type": "true_false",
    "prompt": "Do XV wieku Europejczycy podróżowali przede wszystkim drogami lądowymi.",
    "options": null,
    "answer": true,
    "explanation": "Do XV wieku Europejczycy podróżowali głównie drogami lądowymi, także między kontynentami."
  },
  {
    "id": "R01_ODK_10",
    "section": "Odkrycia geograficzne",
    "type": "fill_in",
    "prompt": "Do XV wieku dalekie wyprawy morskie były trudne, bo Europejczycy niewiele wiedzieli o oceanach i __________.",
    "options": null,
    "answer": [
      "nawigacji"
    ],
    "altAnswers": [
      [
        "nawigacji",
        "nawigacja"
      ]
    ],
    "explanation": "Wyprawy morskie były trudne z powodu małej wiedzy Europejczyków o oceanach i nawigacji."
  },
  {
    "id": "R01_WYP_01",
    "section": "Wielkie wyprawy i odkrywcy",
    "type": "single_choice",
    "prompt": "Który odkrywca w 1492 roku wypłynął z Hiszpanii przez Ocean Atlantycki i dotarł do Bahamów oraz Kuby?",
    "options": [
      "Krzysztof Kolumb",
      "Vasco da Gama",
      "Ferdynand Magellan",
      "Willem Janszoon",
      "Roald Amundsen",
      "Robert Falcon Scott"
    ],
    "answer": 0,
    "image": "r01_trasa_kolumba.jpg",
    "explanation": "Krzysztof Kolumb wyruszył z Hiszpanii w 1492 roku, przepłynął Ocean Atlantycki i dotarł do wysp u wybrzeży Ameryki Północnej."
  },
  {
    "id": "R01_WYP_02",
    "section": "Wielkie wyprawy i odkrywcy",
    "type": "single_choice",
    "prompt": "Który żeglarz w 1497 roku wypłynął z Portugalii i dotarł drogą morską do Indii?",
    "options": [
      "Vasco da Gama",
      "Krzysztof Kolumb",
      "Ferdynand Magellan",
      "Paweł Edmund Strzelecki",
      "Robert Falcon Scott",
      "Roald Amundsen"
    ],
    "answer": 0,
    "image": "r01_trasa_vasco_da_gamy.jpg",
    "explanation": "Vasco da Gama wypłynął z Portugalii w 1497 roku i po opłynięciu Afryki dotarł do Indii."
  },
  {
    "id": "R01_WYP_03",
    "section": "Wielkie wyprawy i odkrywcy",
    "type": "true_false",
    "prompt": "Ferdynand Magellan sam wrócił do Europy w 1522 roku po zakończeniu pierwszej podróży dookoła świata.",
    "options": null,
    "answer": false,
    "explanation": "Magellan zginął na Filipinach. Do Europy w 1522 roku wróciła pozostała część załogi jego wyprawy."
  },
  {
    "id": "R01_WYP_04",
    "section": "Wielkie wyprawy i odkrywcy",
    "type": "fill_in",
    "prompt": "Wyprawa dowodzona przez Ferdynanda Magellana wyruszyła w __________ roku, a jej celem były Wyspy Korzenne czyli __________.",
    "options": null,
    "answer": [
      "1519",
      "Moluki"
    ],
    "altAnswers": [
      [
        "1519",
        "1519 r."
      ],
      [
        "Moluki",
        "Molukki",
        "Wyspy Korzenne"
      ]
    ],
    "image": "r01_trasa_magellana.jpg",
    "explanation": "Wyprawa Magellana wyruszyła z Hiszpanii w 1519 roku. Jej celem były Wyspy Korzenne, czyli obecne Moluki."
  },
  {
    "id": "R01_WYP_05",
    "section": "Wielkie wyprawy i odkrywcy",
    "type": "match",
    "prompt": "Połącz odkrywcę z osiągnięciem.",
    "options": null,
    "left": [
      "Krzysztof Kolumb",
      "Vasco da Gama",
      "Ferdynand Magellan",
      "Willem Janszoon",
      "Roald Amundsen"
    ],
    "right": [
      "pierwsze zdobycie bieguna południowego",
      "dopłynięcie do wysp u wybrzeży Ameryki Północnej",
      "pierwsza europejska wyprawa do brzegów Australii",
      "wytyczenie drogi morskiej z Europy do Indii",
      "dowodzenie pierwszą wyprawą dookoła świata"
    ],
    "answer": {
      "Krzysztof Kolumb": "dopłynięcie do wysp u wybrzeży Ameryki Północnej",
      "Vasco da Gama": "wytyczenie drogi morskiej z Europy do Indii",
      "Ferdynand Magellan": "dowodzenie pierwszą wyprawą dookoła świata",
      "Willem Janszoon": "pierwsza europejska wyprawa do brzegów Australii",
      "Roald Amundsen": "pierwsze zdobycie bieguna południowego"
    },
    "explanation": "Kolumb dotarł do wysp u Ameryki Północnej, da Gama do Indii, wyprawa Magellana opłynęła świat, Janszoon dopłynął do Australii, a Amundsen zdobył biegun południowy."
  },
  {
    "id": "R01_WYP_06",
    "section": "Wielkie wyprawy i odkrywcy",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "wyprawa Magellana wyrusza z Hiszpanii",
      "Kolumb wyrusza przez Atlantyk",
      "Janszoon dopływa do Australii",
      "Vasco da Gama wyrusza do Indii",
      "załoga rosyjskiego statku obserwuje Antarktydę"
    ],
    "answer": [
      "Kolumb wyrusza przez Atlantyk",
      "Vasco da Gama wyrusza do Indii",
      "wyprawa Magellana wyrusza z Hiszpanii",
      "Janszoon dopływa do Australii",
      "załoga rosyjskiego statku obserwuje Antarktydę"
    ],
    "explanation": "Daty to kolejno 1492, 1497, 1519, 1605 i 1820 rok."
  },
  {
    "id": "R01_WYP_07",
    "section": "Wielkie wyprawy i odkrywcy",
    "type": "scenario",
    "prompt": "Żeglarz wyrusza z Hiszpanii na zachód, przepływa Ocean Atlantycki i jest przekonany, że dotarł do Indii. Kto to był?",
    "options": [
      "Krzysztof Kolumb",
      "Vasco da Gama",
      "Ferdynand Magellan",
      "Willem Janszoon",
      "Paweł Edmund Strzelecki",
      "Roald Amundsen"
    ],
    "answer": 0,
    "explanation": "Krzysztof Kolumb myślał, że dopłynął do Indii, dlatego napotkaną ludność nazwano Indianami."
  },
  {
    "id": "R01_WYP_08",
    "section": "Wielkie wyprawy i odkrywcy",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do trzech słynnych wypraw geograficznych XV i XVI wieku opisanych w lekcji: Krzysztof Kolumb, Vasco da Gama, Ferdynand Magellan, Roald Amundsen.",
    "options": null,
    "answer": "Roald Amundsen",
    "explanation": "Kolumb, da Gama i Magellan są związani z wielkimi wyprawami XV i XVI wieku. Roald Amundsen dotyczy późniejszego zdobycia bieguna południowego."
  },
  {
    "id": "R01_WYP_09",
    "section": "Wielkie wyprawy i odkrywcy",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do wypraw.",
    "options": null,
    "items": [
      "Bahamy i Kuba",
      "Przylądek Dobrej Nadziei",
      "Filipiny",
      "Indie",
      "Ocean Spokojny",
      "wyspy u wybrzeży Ameryki Północnej"
    ],
    "categories": [
      "wyprawa Kolumba",
      "wyprawa Vasco da Gamy",
      "wyprawa Magellana"
    ],
    "answer": {
      "wyprawa Kolumba": [
        "Bahamy i Kuba",
        "wyspy u wybrzeży Ameryki Północnej"
      ],
      "wyprawa Vasco da Gamy": [
        "Przylądek Dobrej Nadziei",
        "Indie"
      ],
      "wyprawa Magellana": [
        "Filipiny",
        "Ocean Spokojny"
      ]
    },
    "explanation": "Kolumb dotarł do Bahamów i Kuby, Vasco da Gama opłynął Afrykę przez Przylądek Dobrej Nadziei i dotarł do Indii, a wyprawa Magellana przepłynęła przez Ocean Spokojny i dotarła do Filipin."
  },
  {
    "id": "R01_WYP_10",
    "section": "Wielkie wyprawy i odkrywcy",
    "type": "riddle",
    "prompt": "Który kontynent był ostatnim odkrytym kontynentem?",
    "options": null,
    "answer": "Antarktyda",
    "altAnswers": [
      "Antarktyda",
      "Antarktydę"
    ],
    "image": "r01_antarktyda_biegun.jpg",
    "explanation": "Ostatnim odkrytym kontynentem była Antarktyda, zaobserwowana po raz pierwszy przez załogę rosyjskiego statku w 1820 roku."
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która para południków leży po przeciwnych stronach kuli ziemskiej i dzieli Ziemię na półkulę wschodnią oraz zachodnią?",
    "options": [
      "południk 0° i południk 180°",
      "równik i zwrotnik Raka",
      "zwrotnik Raka i zwrotnik Koziorożca",
      "koło podbiegunowe północne i południowe",
      "południk 90° i równik",
      "biegun północny i południowy"
    ],
    "answer": 0,
    "explanation": "Południki 0° i 180° leżą po przeciwnych stronach kuli ziemskiej i dzielą Ziemię na półkulę wschodnią oraz zachodnią."
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Równik ma około __________ km długości i przebiega w połowie odległości między __________.",
    "options": null,
    "answer": [
      "40 000",
      "biegunami"
    ],
    "altAnswers": [
      [
        "40 000",
        "40000",
        "40 tysiącami"
      ],
      [
        "biegunami",
        "biegunem północnym i południowym",
        "biegunami północnym i południowym"
      ]
    ],
    "explanation": "Najdłuższym równoleżnikiem jest równik. Ma około 40 000 km i leży w połowie odległości między biegunami."
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz rok z wydarzeniem.",
    "options": null,
    "left": [
      "1492",
      "1497",
      "1519",
      "1605",
      "1820"
    ],
    "right": [
      "pierwsze zaobserwowanie Antarktydy",
      "wyprawa Kolumba z Hiszpanii",
      "wyprawa Vasco da Gamy z Portugalii",
      "wyprawa Magellana z Hiszpanii",
      "dopłynięcie Janszoona do Australii"
    ],
    "answer": {
      "1492": "wyprawa Kolumba z Hiszpanii",
      "1497": "wyprawa Vasco da Gamy z Portugalii",
      "1519": "wyprawa Magellana z Hiszpanii",
      "1605": "dopłynięcie Janszoona do Australii",
      "1820": "pierwsze zaobserwowanie Antarktydy"
    },
    "explanation": "Podaje się te daty przy kolejnych wyprawach i odkryciach: Kolumb 1492, da Gama 1497, Magellan 1519, Janszoon 1605, Antarktyda 1820."
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "pierwsze zaobserwowanie Antarktydy",
      "wyprawa Kolumba przez Atlantyk",
      "wikingowie dopływają do Ameryki Północnej",
      "dopłynięcie Janszoona do Australii",
      "pierwsza wyprawa dookoła świata"
    ],
    "answer": [
      "wikingowie dopływają do Ameryki Północnej",
      "wyprawa Kolumba przez Atlantyk",
      "pierwsza wyprawa dookoła świata",
      "dopłynięcie Janszoona do Australii",
      "pierwsze zaobserwowanie Antarktydy"
    ],
    "explanation": "Wikingowie dotarli do Ameryki Północnej na przełomie X i XI wieku, Kolumb wypłynął w 1492 roku, wyprawa Magellana wyruszyła w 1519 roku, Janszoon dotarł do Australii w 1605 roku, a Antarktydę zaobserwowano w 1820 roku."
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Badacz Australii z XIX wieku był Polakiem. To on nazwał najwyższy szczyt Australii Górą Kościuszki. O kim mowa?",
    "options": [
      "Paweł Edmund Strzelecki",
      "Willem Janszoon",
      "Roald Amundsen",
      "Robert Falcon Scott",
      "Ferdynand Magellan",
      "Vasco da Gama"
    ],
    "answer": 0,
    "image": "r01_australia_i_strzelecki.jpg",
    "explanation": "Wymienia się Pawła Edmunda Strzeleckiego jako polskiego badacza Australii, który nazwał jej najwyższy szczyt Górą Kościuszki."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Pierwsza podróż dookoła świata dowiodła ostatecznie, że Ziemia ma kształt kulisty.",
    "options": null,
    "answer": true,
    "explanation": "Pierwsza podróż dookoła świata zakończona przez załogę Magellana dowiodła ostatecznie kulistego kształtu Ziemi."
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz osoby lub grupy, które wiąże się z Antarktydą albo biegunem południowym.",
    "options": [
      "Roald Amundsen",
      "Robert Falcon Scott",
      "załoga rosyjskiego statku",
      "Willem Janszoon",
      "Krzysztof Kolumb",
      "Paweł Edmund Strzelecki"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Antarktydę po raz pierwszy zaobserwowała załoga rosyjskiego statku, a biegun południowy zdobyli Roald Amundsen i Robert Falcon Scott z członkami wypraw."
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj kontynenty według położenia względem równika na mapie działu.",
    "options": null,
    "items": [
      "Afryka",
      "Ameryka Południowa",
      "Australia",
      "Antarktyda"
    ],
    "categories": [
      "przecina je równik",
      "w całości na półkuli południowej"
    ],
    "answer": {
      "przecina je równik": [
        "Afryka",
        "Ameryka Południowa"
      ],
      "w całości na półkuli południowej": [
        "Australia",
        "Antarktyda"
      ]
    },
    "explanation": "Na mapie równik przecina Afrykę i Amerykę Południową. Australia oraz Antarktyda leżą w całości na półkuli południowej."
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do wypraw XV i XVI wieku: Krzysztof Kolumb, Vasco da Gama, Ferdynand Magellan, Willem Janszoon.",
    "options": null,
    "answer": "Willem Janszoon",
    "explanation": "Kolumb, Vasco da Gama i Magellan są związani z wyprawami XV i XVI wieku. Willem Janszoon dopłynął do brzegów Australii w 1605 roku."
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Przez który ocean płynęła pozostała część załogi Magellana po dotarciu do Wysp Korzennych, zanim znów znalazła się na Atlantyku?",
    "options": null,
    "answer": "Ocean Indyjski",
    "altAnswers": [
      "Ocean Indyjski",
      "Indyjski"
    ],
    "explanation": "Po dotarciu do Wysp Korzennych załoga płynęła przez Ocean Indyjski, a następnie przez Atlantyk wróciła do Europy."
  },
  {
    "id": "R01_HARD_11",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Uczeń mówi: ludność napotkaną przez Kolumba nazwano Indianami, bo Kolumb był przekonany, że dopłynął do pewnego miejsca. Jakiego?",
    "options": [
      "do Indii",
      "do Australii",
      "do Antarktydy",
      "do Skandynawii",
      "do Europy",
      "do Moluków"
    ],
    "answer": 0,
    "explanation": "Kolumb myślał, że dopłynął do Indii, dlatego napotkaną ludność nazwano Indianami."
  },
  {
    "id": "R01_HARD_12",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Antarktydę po raz pierwszy zaobserwowano w __________ roku, Roald Amundsen zdobył biegun południowy w __________ roku, a Robert Falcon Scott w __________ roku.",
    "options": null,
    "answer": [
      "1820",
      "1911",
      "1912"
    ],
    "altAnswers": [
      [
        "1820",
        "1820 r."
      ],
      [
        "1911",
        "1911 r."
      ],
      [
        "1912",
        "1912 r."
      ]
    ],
    "explanation": "Antarktydę zaobserwowano w 1820 roku, Amundsen zdobył biegun południowy w 1911 roku, a Scott w 1912 roku."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r01",
  number: 1,
  title: "Lądy i oceany",
  icon: "🌍",
  sectionOrder: [
    "Ziemia i globus",
    "Siatka geograficzna i półkule",
    "Kontynenty i oceany",
    "Odkrycia geograficzne",
    "Wielkie wyprawy i odkrywcy"
  ],
  sectionIcons: {
    "Ziemia i globus": "🌍",
    "Siatka geograficzna i półkule": "🧭",
    "Kontynenty i oceany": "🗺️",
    "Odkrycia geograficzne": "🚢",
    "Wielkie wyprawy i odkrywcy": "🌊"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
