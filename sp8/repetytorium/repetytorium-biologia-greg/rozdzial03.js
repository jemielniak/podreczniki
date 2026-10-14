// Skróty sekcji (do identyfikatorów ćwiczeń):
//   SYS  = Systematyka i wirusy
//   BGP  = Bakterie, grzyby i porosty
//   BEZ  = Bezkręgowce
//   STA  = Stawonogi
//   KRG  = Ryby, płazy i gady
//   PTS  = Ptaki i ssaki
//   HARD = Super trudne


const ALL_EXERCISES = [
  {
    "id": "R03_SYS_01",
    "section": "Systematyka i wirusy",
    "type": "single_choice",
    "prompt": "Na czym opiera się naturalny system klasyfikacji organizmów?",
    "options": [
      "Na miejscu występowania organizmów",
      "Na pokrewieństwie i wspólnym pochodzeniu",
      "Wyłącznie na wielkości organizmów",
      "Wyłącznie na barwie organizmów",
      "Na kolejności odkrywania gatunków",
      "Na przydatności organizmów dla człowieka"
    ],
    "answer": 1,
    "explanation": "System naturalny uwzględnia pokrewieństwo organizmów i ich wspólne pochodzenie, a system sztuczny — dowolnie wybrane kryteria.",
    "image": "r03_drzewo_klasyfikacji.jpg"
  },
  {
    "id": "R03_SYS_02",
    "section": "Systematyka i wirusy",
    "type": "true_false",
    "prompt": "Koń i osioł należą do jednego gatunku, ponieważ mogą wydać na świat muła.",
    "options": null,
    "answer": false,
    "explanation": "Muł jest bezpłodny. W kryteriach gatunku ważna jest zdolność wydawania płodnego potomstwa."
  },
  {
    "id": "R03_SYS_03",
    "section": "Systematyka i wirusy",
    "type": "match",
    "prompt": "Połącz jednostkę systematyczną z odpowiednim przykładem.",
    "options": null,
    "left": [
      "Gatunek",
      "Rodzaj",
      "Rodzina",
      "Gromada"
    ],
    "right": [
      "ssaki",
      "kotowate",
      "kot domowy",
      "kot (Felis)"
    ],
    "answer": {
      "Gatunek": "kot domowy",
      "Rodzaj": "kot (Felis)",
      "Rodzina": "kotowate",
      "Gromada": "ssaki"
    },
    "explanation": "Kot domowy jest gatunkiem z rodzaju Felis, należącym do rodziny kotowatych i gromady ssaków.",
    "image": "r03_drzewo_klasyfikacji.jpg"
  },
  {
    "id": "R03_SYS_04",
    "section": "Systematyka i wirusy",
    "type": "sequence",
    "prompt": "Ułóż jednostki systematyczne zwierząt od najniższej do najwyższej.",
    "options": null,
    "items": [
      "gromada",
      "rodzina",
      "typ",
      "gatunek",
      "rząd",
      "rodzaj"
    ],
    "answer": [
      "gatunek",
      "rodzaj",
      "rodzina",
      "rząd",
      "gromada",
      "typ"
    ],
    "explanation": "Podobne gatunki tworzą rodzaje, następnie rodziny, rzędy, gromady i typy; jeszcze wyżej znajduje się królestwo.",
    "image": "r03_drzewo_klasyfikacji.jpg"
  },
  {
    "id": "R03_SYS_05",
    "section": "Systematyka i wirusy",
    "type": "fill_in",
    "prompt": "Podstawową jednostką klasyfikacji organizmów jest __________.",
    "options": null,
    "answer": [
      "gatunek"
    ],
    "altAnswers": [
      [
        "gatunek"
      ]
    ],
    "explanation": "Gatunek to podstawowa jednostka systematyczna, a wyższe jednostki łączą organizmy w coraz liczniejsze grupy."
  },
  {
    "id": "R03_SYS_06",
    "section": "Systematyka i wirusy",
    "type": "multi_select",
    "prompt": "Zaznacz wszystkie królestwa organizmów.",
    "options": [
      "bakterie",
      "protisty",
      "wirusy",
      "grzyby",
      "rośliny",
      "zwierzęta"
    ],
    "answer": [
      0,
      1,
      3,
      4,
      5
    ],
    "explanation": "Wyróżnia się pięć królestw: bakterie, protisty, grzyby, rośliny i zwierzęta. Wirusów nie włącza do tego podziału."
  },
  {
    "id": "R03_SYS_07",
    "section": "Systematyka i wirusy",
    "type": "riddle",
    "prompt": "Jak nazywa się pierwszy człon dwuczłonowej nazwy gatunkowej, np. „Felis” w „Felis catus”?",
    "options": null,
    "answer": "nazwa rodzajowa",
    "altAnswers": [
      "nazwa rodzajowa",
      "rodzaj",
      "nazwa rodzaju"
    ],
    "explanation": "Karol Linneusz wprowadził dwuczłonowe nazwy: nazwa rodzajowa jest pisana wielką literą, a epitet gatunkowy małą."
  },
  {
    "id": "R03_SYS_08",
    "section": "Systematyka i wirusy",
    "type": "odd_one_out",
    "prompt": "Wskaż organizm, który nie należy do królestwa zwierząt: wilk szary, sęp uszaty, pies domowy, drożdże.",
    "options": null,
    "answer": "drożdże",
    "explanation": "Drożdże należą do grzybów; wilk, sęp i pies są zwierzętami."
  },
  {
    "id": "R03_SYS_09",
    "section": "Systematyka i wirusy",
    "type": "scenario",
    "prompt": "Badacz porównuje dwa blisko spokrewnione zwierzęta. Mogą się krzyżować, ale ich potomek nie jest płodny. Jaki wniosek można wyciągnąć na podstawie biologicznego kryterium gatunku?",
    "options": [
      "Potomstwo zawsze należy do nowego królestwa",
      "Oba zwierzęta muszą należeć do jednego gatunku",
      "Zwierzęta są spokrewnione, lecz należą do odrębnych gatunków",
      "Każde z nich musi być organizmem bezpłciowym",
      "Nie można ich w ogóle zaliczyć do zwierząt"
    ],
    "answer": 2,
    "explanation": "Koń i osioł mogą wydać na świat bezpłodnego muła, ale należą do dwóch odrębnych gatunków."
  },
  {
    "id": "R03_SYS_10",
    "section": "Systematyka i wirusy",
    "type": "single_choice",
    "prompt": "Jak nazywa się białkowa otoczka materiału genetycznego wirusa?",
    "options": [
      "nukleoid",
      "ściana komórkowa",
      "plazmid",
      "kapsyd",
      "wakuola",
      "grzybnia"
    ],
    "answer": 3,
    "explanation": "Białkowa otoczka wirusa to kapsyd. Wirusy nie mają budowy komórkowej.",
    "image": "r03_czasteczka_wirusa.jpg"
  },
  {
    "id": "R03_SYS_11",
    "section": "Systematyka i wirusy",
    "type": "true_false",
    "prompt": "HIV może przenosić się przez podanie ręki i wspólne używanie sztućców.",
    "options": null,
    "answer": false,
    "explanation": "HIV może być przenoszony przez zakażoną krew, kontakty seksualne oraz z matki na dziecko, ale nie przez podanie ręki ani korzystanie ze wspólnych sztućców."
  },
  {
    "id": "R03_SYS_12",
    "section": "Systematyka i wirusy",
    "type": "match",
    "prompt": "Połącz chorobę wirusową z jej drogą zakażenia.",
    "options": null,
    "left": [
      "Grypa",
      "HIV",
      "Różyczka",
      "Ospa wietrzna"
    ],
    "right": [
      "kontakt z zakażoną krwią",
      "bezpośredni kontakt z pęcherzykami wysypki",
      "droga kropelkowa",
      "przeniesienie z matki na dziecko w ciąży"
    ],
    "answer": {
      "Grypa": "droga kropelkowa",
      "HIV": "kontakt z zakażoną krwią",
      "Różyczka": "przeniesienie z matki na dziecko w ciąży",
      "Ospa wietrzna": "bezpośredni kontakt z pęcherzykami wysypki"
    },
    "explanation": "Poszczególne wirusy mogą przenosić się różnymi drogami, m.in. kropelkową, pokarmową, płciową lub przez zakażoną krew."
  },
  {
    "id": "R03_BGP_01",
    "section": "Bakterie, grzyby i porosty",
    "type": "single_choice",
    "prompt": "Której struktury nie ma komórka bakteryjna?",
    "options": [
      "cytoplazmy",
      "błony komórkowej",
      "materiału genetycznego",
      "ściany komórkowej",
      "jądra komórkowego",
      "substancji zapasowych"
    ],
    "answer": 4,
    "explanation": "Komórki bakterii nie mają jądra komórkowego; ich materiał genetyczny leży w cytoplazmie jako nukleoid (genofor).",
    "image": "r03_komorka_bakterii.jpg"
  },
  {
    "id": "R03_BGP_02",
    "section": "Bakterie, grzyby i porosty",
    "type": "true_false",
    "prompt": "W wyniku koniugacji bakterii powstają dwa nowe organizmy potomne.",
    "options": null,
    "answer": false,
    "explanation": "Koniugacja jest wymianą fragmentów materiału genetycznego (plazmidów); nie powstaje wtedy nowy osobnik."
  },
  {
    "id": "R03_BGP_03",
    "section": "Bakterie, grzyby i porosty",
    "type": "match",
    "prompt": "Połącz część komórki bakterii z jej zadaniem.",
    "options": null,
    "left": [
      "Nukleoid (genofor)",
      "Błona komórkowa",
      "Ściana komórkowa",
      "Rzęska"
    ],
    "right": [
      "służy do poruszania się",
      "chroni przed uszkodzeniami",
      "przechowuje informację genetyczną",
      "kontroluje przenikanie substancji"
    ],
    "answer": {
      "Nukleoid (genofor)": "przechowuje informację genetyczną",
      "Błona komórkowa": "kontroluje przenikanie substancji",
      "Ściana komórkowa": "chroni przed uszkodzeniami",
      "Rzęska": "służy do poruszania się"
    },
    "explanation": "Nukleoid zawiera DNA, błona komórkowa uczestniczy w transporcie substancji, ściana komórkowa chroni bakterię, a wić umożliwia ruch.",
    "image": "r03_komorka_bakterii.jpg"
  },
  {
    "id": "R03_BGP_04",
    "section": "Bakterie, grzyby i porosty",
    "type": "riddle",
    "prompt": "Jak nazywa się proces wymiany plazmidów między dwiema bakteriami?",
    "options": null,
    "answer": "koniugacja",
    "altAnswers": [
      "koniugacja",
      "koniugacją"
    ],
    "explanation": "W koniugacji bakterie łączą się specjalnymi wypustkami i przekazują fragmenty materiału genetycznego, co może prowadzić np. do oporności na antybiotyki."
  },
  {
    "id": "R03_BGP_05",
    "section": "Bakterie, grzyby i porosty",
    "type": "scenario",
    "prompt": "W zakładzie spożywczym ogrzewa się produkt, aby ograniczyć rozwój niekorzystnych drobnoustrojów i przedłużyć jego trwałość. Jak nazywa się opisany proces?",
    "options": [
      "fermentacja",
      "pasteryzacja",
      "koniugacja",
      "fotosynteza",
      "mikoryza",
      "wylinka"
    ],
    "answer": 1,
    "explanation": "Pasteryzacja polega na ogrzewaniu produktów w celu ograniczenia liczby drobnoustrojów i przedłużenia trwałości żywności."
  },
  {
    "id": "R03_BGP_06",
    "section": "Bakterie, grzyby i porosty",
    "type": "multi_select",
    "prompt": "Wybierz korzystne działania bakterii w przyrodzie i życiu człowieka.",
    "options": [
      "rozkład martwej materii",
      "wywoływanie tężca",
      "wiązanie azotu atmosferycznego",
      "udział w kiszeniu ogórków",
      "wywoływanie gruźlicy",
      "udostępnianie roślinom związków azotu"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Bakterie uczestniczą w rozkładzie materii i obiegu azotu; niektóre wiążą azot atmosferyczny, a inne biorą udział w kiszeniu produktów."
  },
  {
    "id": "R03_BGP_07",
    "section": "Bakterie, grzyby i porosty",
    "type": "fill_in",
    "prompt": "Ściana komórkowa grzybów jest zbudowana z __________, a rozgałęzione strzępki tworzą __________.",
    "options": null,
    "answer": [
      "chityny",
      "grzybnię"
    ],
    "altAnswers": [
      [
        "chityny",
        "chityna"
      ],
      [
        "grzybnię",
        "grzybnia"
      ]
    ],
    "explanation": "Ściana komórkowa grzybów zawiera chitynę, a rozrastające się strzępki tworzą grzybnię."
  },
  {
    "id": "R03_BGP_08",
    "section": "Bakterie, grzyby i porosty",
    "type": "odd_one_out",
    "prompt": "Wskaż chorobę wywoływaną przez inny rodzaj drobnoustrojów niż pozostałe: angina, gruźlica, tężec, grypa.",
    "options": null,
    "answer": "grypa",
    "explanation": "Grypę wywołują wirusy, natomiast pozostałe choroby z zadania mają podłoże bakteryjne."
  },
  {
    "id": "R03_BGP_09",
    "section": "Bakterie, grzyby i porosty",
    "type": "single_choice",
    "prompt": "Do którego królestwa należą drożdże?",
    "options": [
      "bakterii",
      "protistów",
      "grzybów",
      "roślin",
      "zwierząt",
      "wirusów"
    ],
    "answer": 2,
    "explanation": "Drożdże są grzybami wykorzystywanymi do fermentacji w piekarnictwie oraz produkcji napojów."
  },
  {
    "id": "R03_BGP_10",
    "section": "Bakterie, grzyby i porosty",
    "type": "sort",
    "prompt": "Podziel przykłady na korzystne i szkodliwe znaczenie grzybów.",
    "options": null,
    "items": [
      "pasożytnictwo na roślinach",
      "produkcja antybiotyków",
      "grzybica skóry",
      "dojrzewanie serów pleśniowych",
      "wyrastanie ciasta drożdżowego",
      "psucie żywności przez pleśnie"
    ],
    "categories": [
      "korzystne znaczenie grzybów",
      "szkodliwe znaczenie grzybów"
    ],
    "answer": {
      "korzystne znaczenie grzybów": [
        "wyrastanie ciasta drożdżowego",
        "produkcja antybiotyków",
        "dojrzewanie serów pleśniowych"
      ],
      "szkodliwe znaczenie grzybów": [
        "psucie żywności przez pleśnie",
        "grzybica skóry",
        "pasożytnictwo na roślinach"
      ]
    },
    "explanation": "Grzyby są pożyteczne w produkcji żywności i leków, ale mogą też psuć produkty oraz powodować choroby i szkody w uprawach."
  },
  {
    "id": "R03_BGP_11",
    "section": "Bakterie, grzyby i porosty",
    "type": "match",
    "prompt": "Połącz składnik porostu lub rodzaj współżycia z właściwym opisem.",
    "options": null,
    "left": [
      "Grzyb w poroście",
      "Glon w poroście",
      "Mikoryza",
      "Mutualizm"
    ],
    "right": [
      "ścisły związek grzyba i rośliny",
      "współżycie przynoszące wzajemne korzyści",
      "wytwarza związki organiczne w fotosyntezie",
      "pobiera i zatrzymuje wodę oraz sole mineralne"
    ],
    "answer": {
      "Grzyb w poroście": "pobiera i zatrzymuje wodę oraz sole mineralne",
      "Glon w poroście": "wytwarza związki organiczne w fotosyntezie",
      "Mikoryza": "ścisły związek grzyba i rośliny",
      "Mutualizm": "współżycie przynoszące wzajemne korzyści"
    },
    "explanation": "W poroście grzyb i glon wymieniają korzyści; mikoryza jest kolejnym przykładem mutualizmu, ale dotyczy grzyba i rośliny.",
    "image": "r03_przekroj_porostu.jpg"
  },
  {
    "id": "R03_BGP_12",
    "section": "Bakterie, grzyby i porosty",
    "type": "scenario",
    "prompt": "Na korze drzewa rośnie organizm zbudowany ze strzępek grzyba i komórek glonu. Oba składniki odnoszą korzyści ze współżycia. Jak nazywa się ten organizm?",
    "options": [
      "porost",
      "mch",
      "paproć",
      "grzyb kapeluszowy",
      "bakteria",
      "owad"
    ],
    "answer": 0,
    "explanation": "Porost składa się z grzyba i składnika fotosyntetyzującego, które tworzą związek obopólnie korzystny.",
    "image": "r03_przekroj_porostu.jpg"
  },
  {
    "id": "R03_BEZ_01",
    "section": "Bezkręgowce",
    "type": "single_choice",
    "prompt": "Jaki kształt ciała jest charakterystyczny dla płazińców?",
    "options": [
      "kulisty bez żadnej symetrii",
      "spłaszczony grzbietobrzusznie",
      "pokryty piórami",
      "zamknięty w chitynowym pancerzu",
      "złożony z dwóch wapiennych muszli",
      "zbudowany z kości"
    ],
    "answer": 1,
    "explanation": "Płazińce mają ciało spłaszczone grzbietobrzusznie i symetrię dwuboczną."
  },
  {
    "id": "R03_BEZ_02",
    "section": "Bezkręgowce",
    "type": "match",
    "prompt": "Połącz pasożyta lub jego postać z informacją wynikającą z ilustracji cykli życiowych.",
    "options": null,
    "left": [
      "Tasiemiec uzbrojony",
      "Tasiemiec nieuzbrojony",
      "Dorosły tasiemiec",
      "Wągier tasiemca"
    ],
    "right": [
      "jest postacią larwalną",
      "żywicielem pośrednim może być świnia",
      "żyje w ciele żywiciela ostatecznego",
      "żywicielem pośrednim może być krowa"
    ],
    "answer": {
      "Tasiemiec uzbrojony": "żywicielem pośrednim może być świnia",
      "Tasiemiec nieuzbrojony": "żywicielem pośrednim może być krowa",
      "Dorosły tasiemiec": "żyje w ciele żywiciela ostatecznego",
      "Wągier tasiemca": "jest postacią larwalną"
    },
    "explanation": "Tasiemce uzbrojony i nieuzbrojony różnią się żywicielami pośrednimi, a ich cykle życiowe obejmują postać larwalną i dorosłą.",
    "image": "r03_tasiemiec_budowa.jpg"
  },
  {
    "id": "R03_BEZ_03",
    "section": "Bezkręgowce",
    "type": "true_false",
    "prompt": "Tasiemiec ma własny przewód pokarmowy, którym trawi treść jelita gospodarza.",
    "options": null,
    "answer": false,
    "explanation": "Tasiemce nie mają układu pokarmowego i wchłaniają substancje pokarmowe całą powierzchnią ciała."
  },
  {
    "id": "R03_BEZ_04",
    "section": "Bezkręgowce",
    "type": "sort",
    "prompt": "Przyporządkuj bezkręgowce do odpowiednich grup.",
    "options": null,
    "items": [
      "pijawka lekarska",
      "kałamarnica",
      "wypławek biały",
      "glista ludzka",
      "dżdżownica",
      "ślimak winniczek",
      "tasiemiec uzbrojony"
    ],
    "categories": [
      "płazińce",
      "nicienie",
      "pierścienice",
      "mięczaki"
    ],
    "answer": {
      "płazińce": [
        "wypławek biały",
        "tasiemiec uzbrojony"
      ],
      "nicienie": [
        "glista ludzka"
      ],
      "pierścienice": [
        "dżdżownica",
        "pijawka lekarska"
      ],
      "mięczaki": [
        "ślimak winniczek",
        "kałamarnica"
      ]
    },
    "explanation": "Wypławki i tasiemce to płazińce, glista jest nicieniem, dżdżownica i pijawka to pierścienice, a ślimaki i głowonogi to mięczaki."
  },
  {
    "id": "R03_BEZ_05",
    "section": "Bezkręgowce",
    "type": "fill_in",
    "prompt": "Żywiciel, w którym rozwija się larwa pasożyta, jest żywicielem __________, a ten, w którym żyje postać dorosła — żywicielem __________.",
    "options": null,
    "answer": [
      "pośrednim",
      "ostatecznym"
    ],
    "altAnswers": [
      [
        "pośrednim",
        "pośredni"
      ],
      [
        "ostatecznym",
        "ostateczny"
      ]
    ],
    "explanation": "Żywiciel pośredni jest związany ze stadium larwy, a ostateczny ze stadium dorosłym."
  },
  {
    "id": "R03_BEZ_06",
    "section": "Bezkręgowce",
    "type": "odd_one_out",
    "prompt": "Wskaż zwierzę, które nie jest mięczakiem: winniczek, racicznica zmienna, kałamarnica, dżdżownica.",
    "options": null,
    "answer": "dżdżownica",
    "explanation": "Dżdżownica jest pierścienicą; winniczek to ślimak, racicznica — małż, a kałamarnica — głowonóg."
  },
  {
    "id": "R03_BEZ_07",
    "section": "Bezkręgowce",
    "type": "riddle",
    "prompt": "Jak nazywa się substancja wydzielana przez pijawki, która zapobiega krzepnięciu krwi?",
    "options": null,
    "answer": "hirudyna",
    "altAnswers": [
      "hirudyna",
      "hirudynę"
    ],
    "explanation": "Pijawki wytwarzają hirudynę, dlatego bywają wykorzystywane w hirudoterapii."
  },
  {
    "id": "R03_BEZ_08",
    "section": "Bezkręgowce",
    "type": "scenario",
    "prompt": "Ogrodnik widzi w glebie liczne korytarze dżdżownic. Ziemia jest lepiej przemieszana i napowietrzona. Która grupa zwierząt odpowiada za to zjawisko?",
    "options": [
      "płazińce",
      "nicienie",
      "mięczaki",
      "pierścienice",
      "pajęczaki"
    ],
    "answer": 3,
    "explanation": "Dżdżownice to pierścienice. Drążąc korytarze, mieszają i napowietrzają glebę.",
    "image": "r03_dzdzownica_w_glebie.jpg"
  },
  {
    "id": "R03_BEZ_09",
    "section": "Bezkręgowce",
    "type": "single_choice",
    "prompt": "Która cecha odróżnia małże od większości pozostałych mięczaków?",
    "options": [
      "obecność płucotchawek",
      "obecność członowanych odnóży",
      "brak głowy i dwuczęściowa muszla",
      "obecność czterech par odnóży krocznych",
      "obecność skrzydeł",
      "obecność piór"
    ],
    "answer": 2,
    "explanation": "Małże nie mają wyodrębnionej głowy, a ich muszla składa się z dwóch połączonych połówek.",
    "image": "r03_trzy_grupy_mieczakow.jpg"
  },
  {
    "id": "R03_BEZ_10",
    "section": "Bezkręgowce",
    "type": "multi_select",
    "prompt": "Zaznacz charakterystyczne cechy głowonogów.",
    "options": [
      "macki z przyssawkami",
      "odżywianie przez fotosyntezę",
      "dobrze rozwinięte oczy",
      "oddychanie skrzelami",
      "dwa skrzydła pokryte piórami",
      "możliwość wypuszczania ciemnej substancji"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Głowonogi to morskie drapieżniki mające macki z przyssawkami, duże oczy i skrzela; u części występuje wyrzut ciemnej substancji.",
    "image": "r03_trzy_grupy_mieczakow.jpg"
  },
  {
    "id": "R03_BEZ_11",
    "section": "Bezkręgowce",
    "type": "match",
    "prompt": "Połącz grupę mięczaków z typową dla niej cechą.",
    "options": null,
    "left": [
      "Ślimaki",
      "Małże",
      "Głowonogi"
    ],
    "right": [
      "ramiona z przyssawkami",
      "głowa z czułkami i mięsista noga",
      "filtrowanie pokarmu z przepływającej wody"
    ],
    "answer": {
      "Ślimaki": "głowa z czułkami i mięsista noga",
      "Małże": "filtrowanie pokarmu z przepływającej wody",
      "Głowonogi": "ramiona z przyssawkami"
    },
    "explanation": "Ślimaki mają czułki, małże filtrują wodę, a głowonogi chwytają ofiary ramionami.",
    "image": "r03_trzy_grupy_mieczakow.jpg"
  },
  {
    "id": "R03_BEZ_12",
    "section": "Bezkręgowce",
    "type": "sequence",
    "prompt": "Ułóż etapy cyklu tasiemca uzbrojonego, zaczynając od wydalenia jaj przez człowieka.",
    "options": null,
    "items": [
      "Człowiek zjada zakażone mięso świni",
      "Świnia połyka jaja pasożyta",
      "W jelicie człowieka rozwija się dorosły tasiemiec",
      "Jaja tasiemca trafiają wraz z kałem do środowiska",
      "W mięśniach świni rozwijają się wągry"
    ],
    "answer": [
      "Jaja tasiemca trafiają wraz z kałem do środowiska",
      "Świnia połyka jaja pasożyta",
      "W mięśniach świni rozwijają się wągry",
      "Człowiek zjada zakażone mięso świni",
      "W jelicie człowieka rozwija się dorosły tasiemiec"
    ],
    "explanation": "Cykl na ilustracji pokazuje jaja w środowisku, żywiciela pośredniego (świnię), wągry, a następnie zakażenie żywiciela ostatecznego (człowieka).",
    "image": "r03_tasiemiec_budowa.jpg"
  },
  {
    "id": "R03_STA_01",
    "section": "Stawonogi",
    "type": "single_choice",
    "prompt": "Z jakiego materiału zbudowany jest sztywny oskórek stawonogów?",
    "options": [
      "chityny",
      "wapienia",
      "keratyny",
      "celulozy",
      "krzemionki",
      "kolagenu"
    ],
    "answer": 0,
    "explanation": "Chitynowy oskórek jest szkieletem zewnętrznym stawonogów, chroni ich ciało i wymaga okresowego zrzucania podczas wzrostu.",
    "image": "r03_stawonogi_trzy_grupy.jpg"
  },
  {
    "id": "R03_STA_02",
    "section": "Stawonogi",
    "type": "riddle",
    "prompt": "Jak nazywa się zrzucanie starego oskórka przez rosnącego stawonoga?",
    "options": null,
    "answer": "linienie",
    "altAnswers": [
      "linienie",
      "wylinka",
      "zrzucanie wylinki"
    ],
    "explanation": "Linienie to zrzucanie starego oskórka przez stawonoga, a wylinka to zrzucony oskórek."
  },
  {
    "id": "R03_STA_03",
    "section": "Stawonogi",
    "type": "match",
    "prompt": "Połącz gromadę stawonogów z jej przedstawicielem.",
    "options": null,
    "left": [
      "Skorupiaki",
      "Pajęczaki",
      "Owady"
    ],
    "right": [
      "pszczoła",
      "rozwielitka",
      "kleszcz"
    ],
    "answer": {
      "Skorupiaki": "rozwielitka",
      "Pajęczaki": "kleszcz",
      "Owady": "pszczoła"
    },
    "explanation": "Rozwielitka jest skorupiakiem planktonowym, kleszcz należy do pajęczaków, a pszczoła do owadów.",
    "image": "r03_stawonogi_trzy_grupy.jpg"
  },
  {
    "id": "R03_STA_04",
    "section": "Stawonogi",
    "type": "true_false",
    "prompt": "Pajęczaki mają jedną parę czułków, podobnie jak owady.",
    "options": null,
    "answer": false,
    "explanation": "Pajęczaki nie mają czułków, a owady mają jedną parę. Pajęczaki posiadają za to cztery pary odnóży krocznych."
  },
  {
    "id": "R03_STA_05",
    "section": "Stawonogi",
    "type": "fill_in",
    "prompt": "Pajęczaki mają __________ pary odnóży krocznych, a owady __________ pary.",
    "options": null,
    "answer": [
      "cztery",
      "trzy"
    ],
    "altAnswers": [
      [
        "cztery",
        "4"
      ],
      [
        "trzy",
        "3"
      ]
    ],
    "explanation": "Cztery pary odnóży krocznych wyróżniają pajęczaki, a trzy pary to cecha owadów.",
    "image": "r03_stawonogi_trzy_grupy.jpg"
  },
  {
    "id": "R03_STA_06",
    "section": "Stawonogi",
    "type": "odd_one_out",
    "prompt": "Wskaż zwierzę, które nie jest skorupiakiem: rak stawowy, krewetka, homar, pasikonik.",
    "options": null,
    "answer": "pasikonik",
    "explanation": "Pasikonik jest owadem, natomiast rak, krewetka i homar należą do skorupiaków."
  },
  {
    "id": "R03_STA_07",
    "section": "Stawonogi",
    "type": "sort",
    "prompt": "Podziel podane stawonogi na trzy grupy.",
    "options": null,
    "items": [
      "kleszcz",
      "motyl",
      "homar",
      "topik",
      "rak stawowy",
      "pszczoła"
    ],
    "categories": [
      "skorupiaki",
      "pajęczaki",
      "owady"
    ],
    "answer": {
      "skorupiaki": [
        "homar",
        "rak stawowy"
      ],
      "pajęczaki": [
        "topik",
        "kleszcz"
      ],
      "owady": [
        "pszczoła",
        "motyl"
      ]
    },
    "explanation": "Homar i rak to skorupiaki, topik i kleszcz to pajęczaki, a pszczoła i motyl to owady.",
    "image": "r03_stawonogi_trzy_grupy.jpg"
  },
  {
    "id": "R03_STA_08",
    "section": "Stawonogi",
    "type": "sequence",
    "prompt": "Ułóż etapy przeobrażenia zupełnego motyla od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "poczwarka",
      "postać dorosła (motyl)",
      "jajo",
      "larwa (gąsienica)"
    ],
    "answer": [
      "jajo",
      "larwa (gąsienica)",
      "poczwarka",
      "postać dorosła (motyl)"
    ],
    "explanation": "W przeobrażeniu zupełnym między stadium larwy i postacią dorosłą występuje poczwarka.",
    "image": "r03_przeobrazenie_motyla.jpg"
  },
  {
    "id": "R03_STA_09",
    "section": "Stawonogi",
    "type": "scenario",
    "prompt": "Na kwiat przylatuje pszczoła. Zbierając pokarm, przenosi pyłek na inne kwiaty. Jakie znaczenie owadów opisuje ta obserwacja?",
    "options": [
      "pasteryzację",
      "fermentację",
      "hibernację",
      "zapylanie roślin",
      "linienie",
      "koniugację"
    ],
    "answer": 3,
    "explanation": "Pszczoły przyczyniają się do zapylania kwiatów podczas zbierania pokarmu."
  },
  {
    "id": "R03_STA_10",
    "section": "Stawonogi",
    "type": "multi_select",
    "prompt": "Zaznacz wspólne cechy stawonogów.",
    "options": [
      "zewnętrzny oskórek z chityny",
      "wewnętrzny szkielet kostny",
      "członowane odnóża połączone stawami",
      "brak segmentacji ciała",
      "ciało zbudowane z segmentów",
      "ciało zawsze pokryte sierścią"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Stawonogi mają chitynowy oskórek, parzyste odnóża połączone stawami oraz ciało złożone z segmentów."
  },
  {
    "id": "R03_KRG_01",
    "section": "Ryby, płazy i gady",
    "type": "single_choice",
    "prompt": "Który narząd pomaga rybie zmieniać głębokość pływania poprzez zmianę ciężaru właściwego?",
    "options": [
      "płucotchawka",
      "gruczoł kuprowy",
      "pęcherz pławny",
      "wole",
      "owodnia",
      "narząd Jacobsona"
    ],
    "answer": 2,
    "explanation": "Pęcherz pławny jest wypełnionym gazem workiem, który pomaga rybie utrzymać się na różnych głębokościach.",
    "image": "r03_budowa_ryby.jpg"
  },
  {
    "id": "R03_KRG_02",
    "section": "Ryby, płazy i gady",
    "type": "match",
    "prompt": "Połącz płetwę ryby z jej główną funkcją.",
    "options": null,
    "left": [
      "Płetwa ogonowa",
      "Płetwa grzbietowa",
      "Płetwy piersiowe"
    ],
    "right": [
      "nadawanie kierunku pływania",
      "nadawanie prędkości",
      "utrzymywanie równowagi"
    ],
    "answer": {
      "Płetwa ogonowa": "nadawanie prędkości",
      "Płetwa grzbietowa": "utrzymywanie równowagi",
      "Płetwy piersiowe": "nadawanie kierunku pływania"
    },
    "explanation": "Płetwa ogonowa napędza rybę, grzbietowa ją stabilizuje, a piersiowe pomagają sterować.",
    "image": "r03_budowa_ryby.jpg"
  },
  {
    "id": "R03_KRG_03",
    "section": "Ryby, płazy i gady",
    "type": "true_false",
    "prompt": "Ryby są zwierzętami stałocieplnymi o dwóch obiegach krwi.",
    "options": null,
    "answer": false,
    "explanation": "Ryby są zwierzętami zmiennocieplnymi i mają jeden obieg krwi."
  },
  {
    "id": "R03_KRG_04",
    "section": "Ryby, płazy i gady",
    "type": "fill_in",
    "prompt": "Serce ryby zbudowane jest z jednego __________ i jednej __________.",
    "options": null,
    "answer": [
      "przedsionka",
      "komory"
    ],
    "altAnswers": [
      [
        "przedsionka",
        "przedsionek"
      ],
      [
        "komory",
        "komora"
      ]
    ],
    "explanation": "U ryb wyróżnia się jeden przedsionek i jedną komorę serca; krew krąży w jednym obiegu."
  },
  {
    "id": "R03_KRG_05",
    "section": "Ryby, płazy i gady",
    "type": "scenario",
    "prompt": "Ryba dorasta w morzu, ale na tarło wpływa w górę rzeki, często w okolice miejsca urodzenia. Jaki gatunek jest znany z takich wędrówek?",
    "options": [
      "karp",
      "łosoś",
      "żarłacz biały",
      "płaszczka",
      "ciernik",
      "latarnik"
    ],
    "answer": 1,
    "explanation": "Łososie odbywają wędrówki z morza do rzek, aby złożyć ikrę."
  },
  {
    "id": "R03_KRG_06",
    "section": "Ryby, płazy i gady",
    "type": "sort",
    "prompt": "Przyporządkuj wymienione kręgowce do odpowiednich grup.",
    "options": null,
    "items": [
      "żółw błotny",
      "żaba trawna",
      "łosoś",
      "jaszczurka zwinka",
      "żarłacz biały",
      "traszka grzebieniasta"
    ],
    "categories": [
      "ryby",
      "płazy",
      "gady"
    ],
    "answer": {
      "ryby": [
        "łosoś",
        "żarłacz biały"
      ],
      "płazy": [
        "traszka grzebieniasta",
        "żaba trawna"
      ],
      "gady": [
        "żółw błotny",
        "jaszczurka zwinka"
      ]
    },
    "explanation": "Łosoś i żarłacz są rybami; traszka i żaba należą do płazów; żółw i jaszczurka to gady."
  },
  {
    "id": "R03_KRG_07",
    "section": "Ryby, płazy i gady",
    "type": "sequence",
    "prompt": "Ułóż stadia rozwoju żaby w odpowiedniej kolejności.",
    "options": null,
    "items": [
      "kijanka z tylnymi kończynami",
      "dorosła żaba",
      "skrzek (jaja)",
      "kijanka z czterema kończynami",
      "kijanka bez kończyn"
    ],
    "answer": [
      "skrzek (jaja)",
      "kijanka bez kończyn",
      "kijanka z tylnymi kończynami",
      "kijanka z czterema kończynami",
      "dorosła żaba"
    ],
    "explanation": "Rozwój złożony żaby obejmuje stadium kijanki, u której stopniowo pojawiają się kończyny.",
    "image": "r03_rozwoj_zaby.jpg"
  },
  {
    "id": "R03_KRG_08",
    "section": "Ryby, płazy i gady",
    "type": "multi_select",
    "prompt": "Które cechy ułatwiają żabie życie lub poruszanie się w wodzie?",
    "options": [
      "błona pławna między palcami",
      "sucha skóra pokryta rogowymi łuskami",
      "śluz na powierzchni skóry",
      "pióra chroniące przed wodą",
      "cienka skóra umożliwiająca wymianę gazową",
      "sztywna skorupa okrywająca całe ciało"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Błona pławna zwiększa powierzchnię stopy, śluz zmniejsza opór wody, a cienka skóra płazów uczestniczy w wymianie gazowej.",
    "image": "r03_rozwoj_zaby.jpg"
  },
  {
    "id": "R03_KRG_09",
    "section": "Ryby, płazy i gady",
    "type": "single_choice",
    "prompt": "Jaka cecha skóry gadów jest przystosowaniem do życia na lądzie?",
    "options": [
      "sucha skóra pokryta rogowymi łuskami",
      "cienka skóra stale pokryta śluzem",
      "skóra z piórami",
      "skóra z licznymi otworami skrzelowymi",
      "skóra bez żadnych osłon",
      "skóra pokryta chitynowym pancerzem"
    ],
    "answer": 0,
    "explanation": "W przeciwieństwie do płazów gady mają skórę suchą, grubą i pokrytą rogowymi łuskami."
  },
  {
    "id": "R03_KRG_10",
    "section": "Ryby, płazy i gady",
    "type": "odd_one_out",
    "prompt": "Wskaż zwierzę, które nie jest gadem: zaskroniec zwyczajny, jaszczurka zwinka, żółw błotny, traszka grzebieniasta.",
    "options": null,
    "answer": "traszka grzebieniasta",
    "explanation": "Traszka jest płazem; zaskroniec, jaszczurka i żółw należą do gadów."
  },
  {
    "id": "R03_KRG_11",
    "section": "Ryby, płazy i gady",
    "type": "riddle",
    "prompt": "Jak nazywa się błona płodowa, która tworzy worek z płynem i chroni zarodek przed wysychaniem?",
    "options": null,
    "answer": "owodnia",
    "altAnswers": [
      "owodnia",
      "owodnią"
    ],
    "explanation": "Owodnia otacza zarodek workiem wypełnionym płynem i występuje u owodniowców.",
    "image": "r03_jajo_owodniowca.jpg"
  },
  {
    "id": "R03_KRG_12",
    "section": "Ryby, płazy i gady",
    "type": "scenario",
    "prompt": "W stawie pojawia się skrzek, a z jaj wylęgają się kijanki oddychające początkowo skrzelami. Do której grupy zwierząt należą opisane organizmy?",
    "options": [
      "ryby",
      "gady",
      "ptaki",
      "płazy",
      "ssaki"
    ],
    "answer": 3,
    "explanation": "Skrzek, kijanki i przeobrażenie w postać dorosłą to charakterystyczne elementy rozwoju płazów, np. żab."
  },
  {
    "id": "R03_PTS_01",
    "section": "Ptaki i ssaki",
    "type": "single_choice",
    "prompt": "Jaki wytwór skóry jest charakterystyczny dla ptaków?",
    "options": [
      "łuski kostne",
      "pancerz chitynowy",
      "pióra",
      "strzępki",
      "futro",
      "śluzowa plecha"
    ],
    "answer": 2,
    "explanation": "Pióra osłaniają ciało ptaków, izolują termicznie, uczestniczą w locie i mogą odgrywać rolę w zalotach.",
    "image": "r03_piora_ptaka.jpg"
  },
  {
    "id": "R03_PTS_02",
    "section": "Ptaki i ssaki",
    "type": "multi_select",
    "prompt": "Zaznacz przystosowania ptaków do lotu.",
    "options": [
      "kości wypełnione powietrzem",
      "grzebień mostka do przyczepu mięśni",
      "cztery pary odnóży krocznych",
      "lekka czaszka",
      "skóra pokryta śluzem",
      "worki powietrzne połączone z płucami"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "explanation": "Lekki szkielet, pneumatyczne kości, grzebień mostka oraz worki powietrzne i sprawne oddychanie sprzyjają lotowi."
  },
  {
    "id": "R03_PTS_03",
    "section": "Ptaki i ssaki",
    "type": "match",
    "prompt": "Połącz ptaka z właściwym dla niego pokarmem.",
    "options": null,
    "left": [
      "Koliber",
      "Kanarek",
      "Kaczka"
    ],
    "right": [
      "rośliny wodne",
      "nektar kwiatów",
      "ziarno"
    ],
    "answer": {
      "Koliber": "nektar kwiatów",
      "Kanarek": "ziarno",
      "Kaczka": "rośliny wodne"
    },
    "explanation": "Zestawienie kształtów dziobów pokazuje kolibra przy kwiatach, kanarka przy ziarnie i kaczkę przy roślinności wodnej."
  },
  {
    "id": "R03_PTS_04",
    "section": "Ptaki i ssaki",
    "type": "riddle",
    "prompt": "Jak nazywają się połączone z płucami ptaków narządy, które umożliwiają przepływ powietrza przez płuca podczas wdechu i wydechu?",
    "options": null,
    "answer": "worki powietrzne",
    "altAnswers": [
      "worki powietrzne",
      "worek powietrzny"
    ],
    "explanation": "Worki powietrzne współtworzą wydajny układ oddechowy ptaków, istotny zwłaszcza podczas lotu."
  },
  {
    "id": "R03_PTS_05",
    "section": "Ptaki i ssaki",
    "type": "true_false",
    "prompt": "Serce ptaków ma dwie komory i dwa przedsionki.",
    "options": null,
    "answer": true,
    "explanation": "Ptaki mają czterojamowe serce, w którym krew natlenowana nie miesza się z odtlenowaną."
  },
  {
    "id": "R03_PTS_06",
    "section": "Ptaki i ssaki",
    "type": "fill_in",
    "prompt": "Ssaki karmią młode __________, a ciało większości z nich jest pokryte __________.",
    "options": null,
    "answer": [
      "mlekiem",
      "włosami"
    ],
    "altAnswers": [
      [
        "mlekiem",
        "mleko"
      ],
      [
        "włosami",
        "sierścią",
        "sierść"
      ]
    ],
    "explanation": "Karmienie młodych mlekiem oraz występowanie włosów to typowe cechy ssaków."
  },
  {
    "id": "R03_PTS_07",
    "section": "Ptaki i ssaki",
    "type": "scenario",
    "prompt": "Ptak połyka drobne kamienie wraz z twardymi nasionami. Jaki jest główny sens tego zachowania?",
    "options": [
      "zwiększenie wyporności",
      "rozcieranie pokarmu w żołądku",
      "ochrona jaj przed wyschnięciem",
      "rozwój piór",
      "magazynowanie powietrza"
    ],
    "answer": 1,
    "explanation": "Kamienie u ziarnojadów pomagają rozcierać twardy pokarm w umięśnionym żołądku."
  },
  {
    "id": "R03_PTS_08",
    "section": "Ptaki i ssaki",
    "type": "odd_one_out",
    "prompt": "Wskaż zwierzę, które należy do innej gromady niż pozostałe: bocian, jaskółka, koliber, nietoperz.",
    "options": null,
    "answer": "nietoperz",
    "explanation": "Nietoperz jest ssakiem, podczas gdy bocian, jaskółka i koliber są ptakami."
  },
  {
    "id": "R03_PTS_09",
    "section": "Ptaki i ssaki",
    "type": "single_choice",
    "prompt": "Jak nazywa się orientowanie się nietoperza za pomocą wysyłanych dźwięków i odbieranego echa?",
    "options": [
      "fermentacja",
      "mimikra",
      "mutualizm",
      "koniugacja",
      "echolokacja",
      "fotosynteza"
    ],
    "answer": 4,
    "explanation": "Nietoperze wykorzystują echolokację do wykrywania obiektów i przeszkód.",
    "image": "r03_przystosowania_ssakow.jpg"
  },
  {
    "id": "R03_PTS_10",
    "section": "Ptaki i ssaki",
    "type": "sort",
    "prompt": "Przyporządkuj cechy budowy do ptaków albo ssaków.",
    "options": null,
    "items": [
      "gruczoły mlekowe",
      "worki powietrzne",
      "włosy",
      "rogowy dziób bez zębów",
      "pióra",
      "małżowiny uszne"
    ],
    "categories": [
      "ptaki",
      "ssaki"
    ],
    "answer": {
      "ptaki": [
        "pióra",
        "rogowy dziób bez zębów",
        "worki powietrzne"
      ],
      "ssaki": [
        "gruczoły mlekowe",
        "włosy",
        "małżowiny uszne"
      ]
    },
    "explanation": "Ptaki wyróżniają pióra, dziób i worki powietrzne, a ssaki — włosy, gruczoły mlekowe i małżowiny uszne.",
    "image": "r03_przystosowania_ssakow.jpg"
  },
  {
    "id": "R03_HARD_01",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wszystkie podane jednostki systematyczne zwierząt od największej do najmniejszej.",
    "options": null,
    "items": [
      "rodzaj",
      "typ",
      "rodzina",
      "królestwo",
      "gatunek",
      "gromada",
      "rząd"
    ],
    "answer": [
      "królestwo",
      "typ",
      "gromada",
      "rząd",
      "rodzina",
      "rodzaj",
      "gatunek"
    ],
    "explanation": "Jednostki klasyfikacji zwierząt od najwyższej do najniższej to: królestwo, typ, gromada, rząd, rodzina, rodzaj i gatunek.",
    "image": "r03_drzewo_klasyfikacji.jpg"
  },
  {
    "id": "R03_HARD_02",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz typ organizmu z najbardziej charakterystyczną dla niego strukturą.",
    "options": null,
    "left": [
      "Wirus",
      "Bakteria",
      "Grzyb",
      "Ptak"
    ],
    "right": [
      "strzępki grzybni",
      "worki powietrzne",
      "kapsyd",
      "nukleoid"
    ],
    "answer": {
      "Wirus": "kapsyd",
      "Bakteria": "nukleoid",
      "Grzyb": "strzępki grzybni",
      "Ptak": "worki powietrzne"
    },
    "explanation": "Wirusy nie mają komórek, ale mają kapsyd; bakterie mają nukleoid, grzyby strzępki, a ptaki worki powietrzne.",
    "image": "r03_czasteczka_wirusa.jpg"
  },
  {
    "id": "R03_HARD_03",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Na schemacie pasożyta widać główkę z haczykami oraz przyssawkami. W drugim schemacie jego larwy rozwijają się w mięśniach świni. O jaki gatunek pasożyta chodzi?",
    "options": [
      "tasiemiec nieuzbrojony",
      "tasiemiec uzbrojony",
      "wypławek biały",
      "glista ludzka",
      "pijawka lekarska"
    ],
    "answer": 1,
    "explanation": "Tasiemiec uzbrojony ma haczyki i przyssawki, a w jego cyklu życiowym świnia jest żywicielem pośrednim.",
    "image": "r03_tasiemiec_budowa.jpg"
  },
  {
    "id": "R03_HARD_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Wybierz wszystkie drogi zakażenia HIV.",
    "options": [
      "kontakt z zakażoną krwią",
      "uścisk dłoni z osobą zakażoną",
      "kontakt seksualny bez zabezpieczenia z osobą zakażoną",
      "korzystanie ze wspólnych sztućców",
      "przeniesienie wirusa z matki na dziecko",
      "wdychanie powietrza po kichnięciu osoby zakażonej"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Do zakażenia HIV może dojść przez kontakt z zakażoną krwią, kontakty seksualne lub przeniesienie wirusa z matki na dziecko."
  },
  {
    "id": "R03_HARD_05",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Rozdziel przykłady na procesy zmieniające liczbę bakterii i procesy lub formy niezwiększające bezpośrednio liczby komórek.",
    "options": null,
    "items": [
      "tworzenie przetrwalnika przy złych warunkach",
      "ponowny podział komórek potomnych",
      "koniugacja i wymiana plazmidów",
      "bezpłciowy podział jednej bakterii na dwie"
    ],
    "categories": [
      "zwiększanie liczby komórek",
      "bez bezpośredniego zwiększania liczby komórek"
    ],
    "answer": {
      "zwiększanie liczby komórek": [
        "bezpłciowy podział jednej bakterii na dwie",
        "ponowny podział komórek potomnych"
      ],
      "bez bezpośredniego zwiększania liczby komórek": [
        "koniugacja i wymiana plazmidów",
        "tworzenie przetrwalnika przy złych warunkach"
      ]
    },
    "explanation": "Podział tworzy nowe komórki, koniugacja zmienia informację genetyczną, a przetrwalnik pomaga przeżyć niekorzystne warunki.",
    "image": "r03_komorka_bakterii.jpg"
  },
  {
    "id": "R03_HARD_06",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "U tasiemca uzbrojonego żywicielem pośrednim jest __________, natomiast u nieuzbrojonego — __________.",
    "options": null,
    "answer": [
      "świnia",
      "krowa"
    ],
    "altAnswers": [
      [
        "świnia",
        "świnie"
      ],
      [
        "krowa",
        "bydło"
      ]
    ],
    "explanation": "Żywicielem pośrednim tasiemca uzbrojonego jest świnia, a tasiemca nieuzbrojonego – bydło."
  },
  {
    "id": "R03_HARD_07",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż zwierzę, które oddycha za pomocą tchawek zamiast płuc lub skrzeli: łosoś, żaba trawna, winniczek, pasikonik, kaczka.",
    "options": null,
    "answer": "pasikonik",
    "explanation": "Pasikonik jest owadem oddychającym tchawkami. Ryby oddychają skrzelami, a żaba, lądowy ślimak i kaczka mają płuca (żaba oddycha także skórą)."
  },
  {
    "id": "R03_HARD_08",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Dopasuj grupę kręgowców do charakterystycznego elementu budowy lub rozwoju.",
    "options": null,
    "left": [
      "Ryby",
      "Płazy",
      "Gady",
      "Ptaki"
    ],
    "right": [
      "worki powietrzne połączone z płucami",
      "kijanka",
      "pęcherz pławny",
      "zarodek otoczony błonami płodowymi"
    ],
    "answer": {
      "Ryby": "pęcherz pławny",
      "Płazy": "kijanka",
      "Gady": "zarodek otoczony błonami płodowymi",
      "Ptaki": "worki powietrzne połączone z płucami"
    },
    "explanation": "Ryby są przystosowane do życia w wodzie, żaby przechodzą rozwój złożony, gady mają błony płodowe, a ptaki są przystosowane do intensywnej wymiany gazowej.",
    "image": "r03_jajo_owodniowca.jpg"
  },
  {
    "id": "R03_HARD_09",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy przechodzenia od jaj tasiemca nieuzbrojonego do powstania dorosłego pasożyta u człowieka.",
    "options": null,
    "items": [
      "Larwy wędrują do mięśni krowy i tworzą wągry",
      "Dorosły tasiemiec rozwija się w jelicie człowieka",
      "Krowa połyka jaja",
      "Jaja pasożyta trafiają do środowiska",
      "Człowiek spożywa zakażone mięso"
    ],
    "answer": [
      "Jaja pasożyta trafiają do środowiska",
      "Krowa połyka jaja",
      "Larwy wędrują do mięśni krowy i tworzą wągry",
      "Człowiek spożywa zakażone mięso",
      "Dorosły tasiemiec rozwija się w jelicie człowieka"
    ],
    "explanation": "Cykl tasiemca nieuzbrojonego obejmuje zakażenie bydła jajami, powstawanie wągrów oraz zakażenie człowieka przez mięso."
  },
  {
    "id": "R03_HARD_10",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Gady przechodzą rozwój prosty, natomiast rozwój żaby i motyla z przeobrażeniem zupełnym obejmuje stadium larwalne.",
    "options": null,
    "answer": true,
    "explanation": "Gady rozwijają się bez stadium larwy; żaba przechodzi stadium kijanki, a motyl stadium gąsienicy i poczwarki."
  },
  {
    "id": "R03_HARD_11",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Badacz obserwuje na skale plechę tworzoną przez grzyb i glon. Następnie bada grzyb żyjący w ścisłym związku z korzeniami rośliny. Jaki typ zależności jest wspólny obu przypadkom?",
    "options": [
      "pasożytnictwo",
      "drapieżnictwo",
      "konkurencja",
      "mutualizm",
      "fermentacja"
    ],
    "answer": 3,
    "explanation": "Porost i mikoryza różnią się składem partnerów, lecz oba związki są przykładami mutualizmu korzystnego dla obu stron.",
    "image": "r03_przekroj_porostu.jpg"
  },
  {
    "id": "R03_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które z podanych bakterii lub grup bakterii potrafią wiązać azot atmosferyczny?",
    "options": [
      "Azotobacter",
      "Rhizobium",
      "drożdże",
      "Clostridium",
      "tasiemce",
      "sinice"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "explanation": "Do organizmów zdolnych do wiązania azotu atmosferycznego należą m.in. Azotobacter, Rhizobium, Clostridium i niektóre sinice."
  }
];

const KID_PROMPTS = {
  "R03_SYS_01": "Co bierze pod uwagę naturalna klasyfikacja organizmów?",
  "R03_SYS_09": "Dwa zwierzęta mają niepłodne młode. Czy to ten sam gatunek?",
  "R03_SYS_10": "Jak nazywa się białkowa osłona wirusa?",
  "R03_BGP_03": "Połącz części bakterii z tym, do czego służą.",
  "R03_BGP_11": "Połącz części porostu z ich zadaniami.",
  "R03_BEZ_05": "Uzupełnij, gdzie żyje larwa, a gdzie dorosły pasożyt.",
  "R03_BEZ_08": "Dżdżownice robią korytarze w ziemi. Do jakiej grupy zwierząt należą?",
  "R03_STA_05": "Ile par nóg mają pajęczaki, a ile owady?",
  "R03_KRG_02": "Dopasuj płetwy ryby do ich zadań.",
  "R03_KRG_07": "Ułóż od jaja do dorosłej żaby.",
  "R03_PTS_02": "Wybierz cechy, które pomagają ptakom latać.",
  "R03_PTS_10": "Podziel cechy na ptasie i ssacze."
};

const chapter = {
  id: "r03",
  number: 3,
  title: "Różnorodność życia",
  icon: "🌿",
  sectionOrder: [
    "Systematyka i wirusy",
    "Bakterie, grzyby i porosty",
    "Bezkręgowce",
    "Stawonogi",
    "Ryby, płazy i gady",
    "Ptaki i ssaki"
  ],
  sectionIcons: {
    "Systematyka i wirusy": "🔬",
    "Bakterie, grzyby i porosty": "🦠",
    "Bezkręgowce": "🐌",
    "Stawonogi": "🦋",
    "Ryby, płazy i gady": "🐸",
    "Ptaki i ssaki": "🦉"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
