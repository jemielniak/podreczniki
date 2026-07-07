// Rozdział 1: Biologia - nauka o życiu
// Wygenerowany na podstawie załączonego rozdziału i szablonu aplikacji.

const ALL_EXERCISES =
[
  {
    "id": "R01_BN_01",
    "section": "Biologia jako nauka",
    "type": "single_choice",
    "prompt": "Czym zajmuje się biologia?",
    "options": [
      "Badaniem organizmów i ich życia",
      "Tylko badaniem pogody",
      "Tylko budowaniem mikroskopów",
      "Tylko liczeniem planet"
    ],
    "answer": 0,
    "explanation": "Biologia to nauka o organizmach - bada ich budowę, czynności życiowe i zależności ze środowiskiem."
  },
  {
    "id": "R01_BN_02",
    "section": "Biologia jako nauka",
    "type": "true_false",
    "prompt": "Wszystkie organizmy są zbudowane z komórek.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Komórka jest podstawowym elementem budowy organizmów.",
    "image": "/img/r01_cechy_organizmow.jpg"
  },
  {
    "id": "R01_BN_03",
    "section": "Biologia jako nauka",
    "type": "multi_select",
    "prompt": "Zaznacz cechy wspólne wszystkich organizmów.",
    "options": [
      "Budowa komórkowa",
      "Wykonywanie czynności życiowych",
      "Zawsze zielony kolor",
      "Zawsze ten sam rozmiar"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Wszystkie organizmy są zbudowane z komórek i wykonują czynności życiowe. Nie wszystkie są zielone i nie mają tego samego rozmiaru.",
    "image": "/img/r01_cechy_organizmow.jpg"
  },
  {
    "id": "R01_BN_04",
    "section": "Biologia jako nauka",
    "type": "single_choice",
    "prompt": "Co oznacza odżywianie się?",
    "options": [
      "Dostarczanie organizmowi składników pokarmowych",
      "Tylko picie wody",
      "Tylko oddychanie",
      "Tylko wzrost"
    ],
    "answer": 0,
    "explanation": "Odżywianie się to pobieranie składników pokarmowych, które dają energię i służą do budowy ciała.",
    "image": "/img/r01_czynnosci_zyciowe.jpg"
  },
  {
    "id": "R01_BN_05",
    "section": "Biologia jako nauka",
    "type": "single_choice",
    "prompt": "Po co większości organizmów jest potrzebny tlen?",
    "options": [
      "Do oddychania",
      "Do rozmnażania",
      "Do budowy nasion",
      "Do zmiany koloru"
    ],
    "answer": 0,
    "explanation": "U większości organizmów tlen jest potrzebny do oddychania.",
    "image": "/img/r01_czynnosci_zyciowe.jpg"
  },
  {
    "id": "R01_BN_06",
    "section": "Biologia jako nauka",
    "type": "single_choice",
    "prompt": "Co usuwa organizm podczas wydalania?",
    "options": [
      "Zbędne i szkodliwe substancje",
      "Tylko kości",
      "Tylko włosy",
      "Tylko tlen"
    ],
    "answer": 0,
    "explanation": "Wydalanie polega na usuwaniu z organizmu substancji niepotrzebnych lub szkodliwych, na przykład nadmiaru wody albo dwutlenku węgla.",
    "image": "/img/r01_czynnosci_zyciowe.jpg"
  },
  {
    "id": "R01_BN_07",
    "section": "Biologia jako nauka",
    "type": "true_false",
    "prompt": "Rośliny też mogą wykonywać ruchy, na przykład kierować liście w stronę światła.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Ruch u roślin jest zwykle wolny, ale naprawdę występuje."
  },
  {
    "id": "R01_BN_08",
    "section": "Biologia jako nauka",
    "type": "match",
    "prompt": "Połącz czynność życiową z opisem.",
    "options": null,
    "left": [
      "rozmnażanie się",
      "wzrost i rozwój",
      "reakcja na bodźce"
    ],
    "right": [
      "wydawanie potomstwa",
      "zwiększanie rozmiarów i zmiany w życiu organizmu",
      "odpowiedź na światło, dźwięk lub zapach"
    ],
    "answer": {
      "rozmnażanie się": "wydawanie potomstwa",
      "wzrost i rozwój": "zwiększanie rozmiarów i zmiany w życiu organizmu",
      "reakcja na bodźce": "odpowiedź na światło, dźwięk lub zapach"
    },
    "explanation": "Rozmnażanie to wydawanie potomstwa, wzrost i rozwój oznaczają zmiany organizmu, a reakcja na bodźce to odpowiadanie na zmiany w otoczeniu.",
    "image": "/img/r01_czynnosci_zyciowe.jpg"
  },
  {
    "id": "R01_BN_09",
    "section": "Biologia jako nauka",
    "type": "single_choice",
    "prompt": "Która czynność życiowa pomaga pandzie zauważyć zapach albo usłyszeć drapieżnika?",
    "options": [
      "Reakcja na bodźce",
      "Wydalanie",
      "Rozmnażanie się",
      "Wzrost"
    ],
    "answer": 0,
    "explanation": "Zapach i dźwięk to bodźce. Reakcja na bodźce pomaga organizmowi dostosować się do zmian w środowisku."
  },
  {
    "id": "R01_BN_10",
    "section": "Biologia jako nauka",
    "type": "sequence",
    "prompt": "Ułóż poziomy budowy organizmu od najmniejszego do największego.",
    "options": null,
    "items": [
      "układ lub system",
      "organizm",
      "tkanka",
      "komórka",
      "narząd lub organ"
    ],
    "answer": [
      "komórka",
      "tkanka",
      "narząd lub organ",
      "układ lub system",
      "organizm"
    ],
    "explanation": "Najpierw jest komórka, z komórek powstaje tkanka, potem narząd lub organ, dalej układ albo system i na końcu cały organizm.",
    "image": "/img/r01_poziomy_budowy.jpg"
  },
  {
    "id": "R01_BN_11",
    "section": "Biologia jako nauka",
    "type": "single_choice",
    "prompt": "Czym jest tkanka?",
    "options": [
      "Grupą komórek o podobnej budowie i zadaniu",
      "Jedną bardzo dużą komórką",
      "Tylko częścią kwiatu",
      "Nazwą dla wszystkich zwierząt"
    ],
    "answer": 0,
    "explanation": "Tkanka to grupa podobnych komórek, które wykonują określone zadania."
  },
  {
    "id": "R01_BN_12",
    "section": "Biologia jako nauka",
    "type": "single_choice",
    "prompt": "Jak u roślin nazywa się na przykład liść albo łodyga?",
    "options": [
      "Organ",
      "Mikroskop",
      "Bodziec",
      "Hipoteza"
    ],
    "answer": 0,
    "explanation": "U roślin liść, łodyga czy korzeń to organy."
  },
  {
    "id": "R01_BN_13",
    "section": "Biologia jako nauka",
    "type": "match",
    "prompt": "Połącz dziedzinę biologii z tym, co bada.",
    "options": null,
    "left": [
      "zoologia",
      "botanika",
      "mikrobiologia"
    ],
    "right": [
      "zwierzęta",
      "rośliny",
      "mikroorganizmy"
    ],
    "answer": {
      "zoologia": "zwierzęta",
      "botanika": "rośliny",
      "mikrobiologia": "mikroorganizmy"
    },
    "explanation": "Zoologia bada zwierzęta, botanika rośliny, a mikrobiologia mikroorganizmy.",
    "image": "/img/r01_dziedziny_biologii.jpg"
  },
  {
    "id": "R01_BN_14",
    "section": "Biologia jako nauka",
    "type": "single_choice",
    "prompt": "Która dziedzina biologii bada zależności między organizmami a środowiskiem?",
    "options": [
      "Ekologia",
      "Anatomia",
      "Botanika",
      "Mikrobiologia"
    ],
    "answer": 0,
    "explanation": "Ekologia zajmuje się zależnościami między organizmami i ich środowiskiem.",
    "image": "/img/r01_dziedziny_biologii.jpg"
  },
  {
    "id": "R01_BN_15",
    "section": "Biologia jako nauka",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: botanika, zoologia, ekologia, matematyka.",
    "options": null,
    "answer": "matematyka",
    "explanation": "Botanika, zoologia i ekologia to dziedziny biologii. Matematyka nie jest działem biologii."
  },
  {
    "id": "R01_PB_01",
    "section": "Jak poznawać biologię?",
    "type": "single_choice",
    "prompt": "Czym jest obserwacja?",
    "options": [
      "Uważnym przyglądaniem się bez zmieniania warunków",
      "Mieszaniem różnych substancji",
      "Rysowaniem tylko z pamięci",
      "Tylko czytaniem podręcznika"
    ],
    "answer": 0,
    "explanation": "Podczas obserwacji przyglądamy się organizmom lub procesom, ale nie zmieniamy ich przebiegu.",
    "image": "/img/r01_obserwacja_doswiadczenie.jpg"
  },
  {
    "id": "R01_PB_02",
    "section": "Jak poznawać biologię?",
    "type": "true_false",
    "prompt": "Podczas obserwacji nie powinniśmy wpływać na badany obiekt ani proces.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. W obserwacji niczego nie zmieniamy.",
    "image": "/img/r01_obserwacja_doswiadczenie.jpg"
  },
  {
    "id": "R01_PB_03",
    "section": "Jak poznawać biologię?",
    "type": "single_choice",
    "prompt": "Czym różni się doświadczenie od obserwacji?",
    "options": [
      "W doświadczeniu zmieniamy jeden czynnik",
      "W doświadczeniu niczego nie sprawdzamy",
      "W doświadczeniu nie patrzymy na wyniki",
      "Nie ma żadnej różnicy"
    ],
    "answer": 0,
    "explanation": "W doświadczeniu zmieniamy jeden czynnik i sprawdzamy, jaki ma wpływ na badany organizm lub proces.",
    "image": "/img/r01_obserwacja_doswiadczenie.jpg"
  },
  {
    "id": "R01_PB_04",
    "section": "Jak poznawać biologię?",
    "type": "single_choice",
    "prompt": "W doświadczeniu z fasolą badano wpływ czego na wzrost rośliny?",
    "options": [
      "Wilgotności gleby",
      "Koloru doniczki",
      "Długości stołu",
      "Nazwy rośliny"
    ],
    "answer": 0,
    "explanation": "W tym doświadczeniu sprawdzano, czy większa wilgotność gleby wpływa na wzrost fasoli.",
    "image": "/img/r01_proby_doswiadczalne.jpg"
  },
  {
    "id": "R01_PB_05",
    "section": "Jak poznawać biologię?",
    "type": "match",
    "prompt": "Połącz rodzaj próby z opisem.",
    "options": null,
    "left": [
      "próba badawcza",
      "próba kontrolna"
    ],
    "right": [
      "tu zmieniamy wybrany czynnik",
      "tu nie zmieniamy żadnego czynnika"
    ],
    "answer": {
      "próba badawcza": "tu zmieniamy wybrany czynnik",
      "próba kontrolna": "tu nie zmieniamy żadnego czynnika"
    },
    "explanation": "W próbie badawczej zmieniamy czynnik, a próba kontrolna służy do porównania i niczego w niej nie zmieniamy.",
    "image": "/img/r01_proby_doswiadczalne.jpg"
  },
  {
    "id": "R01_PB_06",
    "section": "Jak poznawać biologię?",
    "type": "single_choice",
    "prompt": "Czym jest problem badawczy?",
    "options": [
      "Pytaniem, na które chcemy znaleźć odpowiedź",
      "Gotową odpowiedzią",
      "Nazwą mikroskopu",
      "Spisem ocen"
    ],
    "answer": 0,
    "explanation": "Problem badawczy to pytanie, które stawiamy przed doświadczeniem."
  },
  {
    "id": "R01_PB_07",
    "section": "Jak poznawać biologię?",
    "type": "single_choice",
    "prompt": "Czym jest hipoteza?",
    "options": [
      "Jedną z możliwych odpowiedzi na problem badawczy",
      "Wynikiem doświadczenia",
      "Rodzajem komórki",
      "Szkiełkiem nakrywkowym"
    ],
    "answer": 0,
    "explanation": "Hipoteza to przewidywana odpowiedź, którą potem sprawdzamy w doświadczeniu."
  },
  {
    "id": "R01_PB_08",
    "section": "Jak poznawać biologię?",
    "type": "sequence",
    "prompt": "Ułóż etapy metody naukowej w dobrej kolejności.",
    "options": null,
    "items": [
      "hipoteza",
      "wniosek",
      "obserwacja",
      "doświadczenie",
      "problem badawczy",
      "analiza wyników"
    ],
    "answer": [
      "obserwacja",
      "problem badawczy",
      "hipoteza",
      "doświadczenie",
      "analiza wyników",
      "wniosek"
    ],
    "explanation": "Najpierw coś obserwujemy, potem zadajemy pytanie, stawiamy hipotezę, wykonujemy doświadczenie, analizujemy wyniki i formułujemy wniosek.",
    "image": "/img/r01_metoda_naukowa.jpg"
  },
  {
    "id": "R01_PB_09",
    "section": "Jak poznawać biologię?",
    "type": "multi_select",
    "prompt": "Które z tych rzeczy mogą być źródłem wiedzy biologicznej?",
    "options": [
      "Atlasy i książki",
      "Filmy przyrodnicze",
      "Edukacyjne strony internetowe",
      "Ogród zoologiczny",
      "Przypadkowa plotka"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W biologii korzysta się z książek, atlasów, filmów, stron edukacyjnych i miejsc takich jak ogród zoologiczny czy botaniczny. Plotka nie jest pewnym źródłem wiedzy.",
    "image": "/img/r01_zrodla_wiedzy.jpg"
  },
  {
    "id": "R01_PB_10",
    "section": "Jak poznawać biologię?",
    "type": "single_choice",
    "prompt": "Jak powinien zachować się dobry badacz w terenie?",
    "options": [
      "Nie niszczyć roślin i nie płoszyć zwierząt",
      "Zabierać wszystkie napotkane okazy do domu",
      "Hałasować, żeby szybciej zobaczyć zwierzęta",
      "Wchodzić w każde gniazdo"
    ],
    "answer": 0,
    "explanation": "Dobry badacz okazuje szacunek dla przyrody - nie niszczy roślin i nie płoszy zwierząt.",
    "image": "/img/r01_cechy_badacza.jpg"
  },
  {
    "id": "R01_PB_11",
    "section": "Jak poznawać biologię?",
    "type": "single_choice",
    "prompt": "Która cecha przydaje się szczególnie wtedy, gdy doświadczenie trwa długo?",
    "options": [
      "Cierpliwość",
      "Pośpiech",
      "Nieuwaga",
      "Hałaśliwość"
    ],
    "answer": 0,
    "explanation": "Cierpliwość jest ważna, bo badania czasem trwają długo i wymagają powtórzeń.",
    "image": "/img/r01_cechy_badacza.jpg"
  },
  {
    "id": "R01_PB_12",
    "section": "Jak poznawać biologię?",
    "type": "single_choice",
    "prompt": "Która cecha badacza oznacza regularne zapisywanie wyników?",
    "options": [
      "Systematyczność",
      "Senność",
      "Złość",
      "Nieśmiałość"
    ],
    "answer": 0,
    "explanation": "Systematyczność to regularne zapisywanie wyników i porządek w pracy.",
    "image": "/img/r01_cechy_badacza.jpg"
  },
  {
    "id": "R01_PB_13",
    "section": "Jak poznawać biologię?",
    "type": "true_false",
    "prompt": "W dobrym doświadczeniu próba badawcza i kontrolna różnią się tylko jednym czynnikiem.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Tylko wtedy można sprawdzić, jaki wpływ miał właśnie ten jeden badany czynnik.",
    "image": "/img/r01_proby_doswiadczalne.jpg"
  },
  {
    "id": "R01_PB_14",
    "section": "Jak poznawać biologię?",
    "type": "riddle",
    "prompt": "Jestem zestawem, w którym niczego nie zmieniasz. Jak się nazywam?",
    "options": null,
    "answer": "próba kontrolna",
    "altAnswers": [
      "próba kontrolna",
      "proba kontrolna",
      "kontrolna",
      "próba kontrolną",
      "proba kontrolna"
    ],
    "explanation": "To próba kontrolna. Służy do porównania z próbą badawczą."
  },
  {
    "id": "R01_PB_15",
    "section": "Jak poznawać biologię?",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: atlas, film przyrodniczy, edukacyjna strona internetowa, przypadkowa plotka.",
    "options": null,
    "answer": "przypadkowa plotka",
    "explanation": "Atlas, film przyrodniczy i edukacyjna strona internetowa mogą być źródłem wiedzy biologicznej. Plotka nie jest pewnym źródłem informacji.",
    "image": "/img/r01_zrodla_wiedzy.jpg"
  },
  {
    "id": "R01_OM_01",
    "section": "Obserwacje mikroskopowe",
    "type": "single_choice",
    "prompt": "Do czego służy mikroskop?",
    "options": [
      "Do oglądania bardzo małych obiektów",
      "Do mierzenia temperatury",
      "Do ważenia roślin",
      "Do liczenia nasion"
    ],
    "answer": 0,
    "explanation": "Mikroskop pozwala zobaczyć obiekty niewidoczne gołym okiem lub dostrzec ich szczegóły."
  },
  {
    "id": "R01_OM_02",
    "section": "Obserwacje mikroskopowe",
    "type": "match",
    "prompt": "Połącz część mikroskopu z jej funkcją.",
    "options": null,
    "left": [
      "okular",
      "obiektyw",
      "źródło światła"
    ],
    "right": [
      "przez niego patrzymy",
      "powiększa obraz obiektu",
      "oświetla obiekt"
    ],
    "answer": {
      "okular": "przez niego patrzymy",
      "obiektyw": "powiększa obraz obiektu",
      "źródło światła": "oświetla obiekt"
    },
    "explanation": "Okular służy do patrzenia, obiektyw powiększa obraz, a źródło światła oświetla preparat.",
    "image": "/img/r01_budowa_mikroskopu.jpg"
  },
  {
    "id": "R01_OM_03",
    "section": "Obserwacje mikroskopowe",
    "type": "single_choice",
    "prompt": "Na której części mikroskopu kładziemy preparat?",
    "options": [
      "Na stoliku",
      "Na okularze",
      "Na tubusie",
      "Na rewolwerze"
    ],
    "answer": 0,
    "explanation": "Preparat kładziemy na stoliku mikroskopu.",
    "image": "/img/r01_budowa_mikroskopu.jpg"
  },
  {
    "id": "R01_OM_04",
    "section": "Obserwacje mikroskopowe",
    "type": "single_choice",
    "prompt": "Od jakiego powiększenia zaczynamy obserwację pod mikroskopem?",
    "options": [
      "Od najmniejszego",
      "Od największego",
      "Od dowolnego",
      "Zawsze od średniego"
    ],
    "answer": 0,
    "explanation": "Najpierw ustawiamy najmniejsze powiększenie, bo wtedy łatwiej odnaleźć obiekt.",
    "image": "/img/r01_obserwacja_pod_mikroskopem.jpg"
  },
  {
    "id": "R01_OM_05",
    "section": "Obserwacje mikroskopowe",
    "type": "true_false",
    "prompt": "Obiektyw może dotykać preparatu, kiedy ustawiamy ostrość.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz. Obiektyw nie powinien dotykać preparatu, bo można go uszkodzić."
  },
  {
    "id": "R01_OM_06",
    "section": "Obserwacje mikroskopowe",
    "type": "single_choice",
    "prompt": "Co pomaga ustawić wyraźny obraz pod mikroskopem?",
    "options": [
      "Śruby makrometryczna i mikrometryczna",
      "Tylko linijka",
      "Nożyczki",
      "Waga"
    ],
    "answer": 0,
    "explanation": "Ostrość obrazu ustawiamy śrubami makrometryczną i mikrometryczną.",
    "image": "/img/r01_budowa_mikroskopu.jpg"
  },
  {
    "id": "R01_OM_07",
    "section": "Obserwacje mikroskopowe",
    "type": "fill_in",
    "prompt": "Uzupełnij: powiększenie okularu × powiększenie __________ = powiększenie obrazu.",
    "options": null,
    "answer": [
      "obiektywu"
    ],
    "altAnswers": [
      [
        "obiektywu",
        "obiektyw",
        "obiektywem"
      ]
    ],
    "explanation": "Żeby obliczyć powiększenie obrazu, mnożymy powiększenie okularu przez powiększenie obiektywu.",
    "image": "/img/r01_powiekszenie_wzor.jpg"
  },
  {
    "id": "R01_OM_08",
    "section": "Obserwacje mikroskopowe",
    "type": "single_choice",
    "prompt": "Okular ma powiększenie 10×, a obiektyw 40×. Jakie jest powiększenie obrazu?",
    "options": [
      "50×",
      "400×",
      "4×",
      "140×"
    ],
    "answer": 1,
    "explanation": "10 × 40 = 400. Trzeba pomnożyć powiększenie okularu przez powiększenie obiektywu.",
    "image": "/img/r01_powiekszenie_wzor.jpg"
  },
  {
    "id": "R01_OM_09",
    "section": "Obserwacje mikroskopowe",
    "type": "single_choice",
    "prompt": "Co najpierw nanosimy na szkiełko podstawowe przy robieniu prostego preparatu?",
    "options": [
      "Kroplę wody",
      "Farby",
      "Piasek",
      "Klej"
    ],
    "answer": 0,
    "explanation": "Najpierw zakraplaczem nanosimy kroplę wody na szkiełko podstawowe.",
    "image": "/img/r01_preparat_kroki.jpg"
  },
  {
    "id": "R01_OM_10",
    "section": "Obserwacje mikroskopowe",
    "type": "single_choice",
    "prompt": "Czym przykrywamy obiekt na szkiełku podstawowym?",
    "options": [
      "Szkiełkiem nakrywkowym",
      "Kartką papieru",
      "Lupą",
      "Linijką"
    ],
    "answer": 0,
    "explanation": "Obiekt na preparacie przykrywamy szkiełkiem nakrywkowym.",
    "image": "/img/r01_preparat_kroki.jpg"
  },
  {
    "id": "R01_OM_11",
    "section": "Obserwacje mikroskopowe",
    "type": "multi_select",
    "prompt": "Które narzędzia przydają się przy przygotowaniu preparatu?",
    "options": [
      "Pęseta",
      "Zakraplacz",
      "Igła preparacyjna",
      "Widelec"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Do przygotowania prostych preparatów używamy pęsety, zakraplacza i igły preparacyjnej. Widelec się do tego nie nadaje.",
    "image": "/img/r01_zestaw_preparat.jpg"
  },
  {
    "id": "R01_OM_12",
    "section": "Obserwacje mikroskopowe",
    "type": "sequence",
    "prompt": "Ułóż kroki przygotowania prostego preparatu w dobrej kolejności.",
    "options": null,
    "items": [
      "nakryj obiekt szkiełkiem nakrywkowym",
      "połóż obiekt w kropli wody",
      "umieść preparat na stoliku mikroskopu",
      "nanieś kroplę wody na szkiełko"
    ],
    "answer": [
      "nanieś kroplę wody na szkiełko",
      "połóż obiekt w kropli wody",
      "nakryj obiekt szkiełkiem nakrywkowym",
      "umieść preparat na stoliku mikroskopu"
    ],
    "explanation": "Najpierw dajemy kroplę wody, potem obiekt, potem nakrywamy go szkiełkiem nakrywkowym i na końcu kładziemy preparat na stoliku.",
    "image": "/img/r01_preparat_kroki.jpg"
  },
  {
    "id": "R01_OM_13",
    "section": "Obserwacje mikroskopowe",
    "type": "single_choice",
    "prompt": "Co można zobaczyć w preparacie ze skórki liścia cebuli?",
    "options": [
      "Komórki",
      "Planety",
      "Kości",
      "Chmury"
    ],
    "answer": 0,
    "explanation": "W takim preparacie pod mikroskopem widać komórki cebuli.",
    "image": "/img/r01_komorki_cebuli.jpg"
  },
  {
    "id": "R01_OM_14",
    "section": "Obserwacje mikroskopowe",
    "type": "true_false",
    "prompt": "Pod mikroskopem optycznym można oglądać niektóre obiekty żywe.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Mikroskop optyczny pozwala oglądać zarówno niektóre obiekty żywe, jak i martwe."
  },
  {
    "id": "R01_OM_15",
    "section": "Obserwacje mikroskopowe",
    "type": "single_choice",
    "prompt": "Jakiego mikroskopu używa się do bardzo małych obiektów, takich jak wirusy?",
    "options": [
      "Mikroskopu elektronowego",
      "Lupy",
      "Teleskopu",
      "Kompasu"
    ],
    "answer": 0,
    "explanation": "Do obserwacji bardzo małych obiektów, na przykład wirusów, używa się mikroskopu elektronowego."
  },
  {
    "id": "R01_ST_01",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz wszystkie czynności życiowe organizmów.",
    "options": [
      "odżywianie się",
      "oddychanie",
      "wydalanie",
      "ruch",
      "reakcja na bodźce",
      "rozmnażanie się",
      "wzrost i rozwój",
      "świecenie w ciemności"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "explanation": "Do czynności życiowych należą: odżywianie się, oddychanie, wydalanie, ruch, reakcja na bodźce, rozmnażanie się, wzrost i rozwój. Świecenie w ciemności nie jest wspólną cechą wszystkich organizmów."
  },
  {
    "id": "R01_ST_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Uzupełnij: słowo „biologia” pochodzi od greckich wyrazów bios - __________ i logos - __________.",
    "options": null,
    "answer": [
      "życie",
      "słowo"
    ],
    "altAnswers": [
      [
        "życie",
        "zycie",
        "życia"
      ],
      [
        "słowo",
        "slowo",
        "nauka",
        "wyraz"
      ]
    ],
    "explanation": "W podręczniku podano, że bios znaczy życie, a logos - słowo."
  },
  {
    "id": "R01_ST_03",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Posegreguj przykłady na organizmy i elementy nieożywione.",
    "options": null,
    "items": [
      "panda",
      "drożdże",
      "sekwoja",
      "skała",
      "rower"
    ],
    "categories": [
      "organizmy",
      "nieożywione"
    ],
    "answer": {
      "organizmy": [
        "panda",
        "drożdże",
        "sekwoja"
      ],
      "nieożywione": [
        "skała",
        "rower"
      ]
    },
    "explanation": "Panda, drożdże i sekwoja są organizmami. Skała i rower nie są istotami żywymi."
  },
  {
    "id": "R01_ST_04",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Panda zjada liście i łodygi bambusa. Jaką czynność życiową pokazuje ten przykład?",
    "options": [
      "odżywianie się",
      "wydalanie",
      "wzrost",
      "ruch"
    ],
    "answer": 0,
    "explanation": "Jedzenie bambusa to przykład odżywiania się."
  },
  {
    "id": "R01_ST_05",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Organizm usuwa z ciała mocz i dwutlenek węgla. Co właśnie wykonuje?",
    "options": [
      "wydalanie",
      "rozmnażanie się",
      "oddychanie",
      "wzrost"
    ],
    "answer": 0,
    "explanation": "Usuwanie zbędnych i szkodliwych substancji to wydalanie."
  },
  {
    "id": "R01_ST_06",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz poziom budowy z przykładem.",
    "options": null,
    "left": [
      "komórka",
      "tkanka",
      "narząd lub organ",
      "układ lub system",
      "organizm"
    ],
    "right": [
      "komórka nerwowa",
      "tkanka mięśniowa",
      "serce",
      "układ krwionośny",
      "pies"
    ],
    "answer": {
      "komórka": "komórka nerwowa",
      "tkanka": "tkanka mięśniowa",
      "narząd lub organ": "serce",
      "układ lub system": "układ krwionośny",
      "organizm": "pies"
    },
    "explanation": "To przykłady kolejnych poziomów budowy organizmu wielokomórkowego."
  },
  {
    "id": "R01_ST_07",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które nazwy są dziedzinami biologii wymienionymi w rozdziale?",
    "options": [
      "zoologia",
      "botanika",
      "mikrobiologia",
      "anatomia",
      "fizjologia",
      "ekologia",
      "geometria"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4,
      5
    ],
    "explanation": "W rozdziale wymieniono zoologię, botanikę, mikrobiologię, anatomię, fizjologię i ekologię. Geometria nie jest dziedziną biologii."
  },
  {
    "id": "R01_ST_08",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: zoologia, botanika, mikrobiologia, mikroskop.",
    "options": null,
    "answer": "mikroskop",
    "explanation": "Trzy pierwsze to dziedziny biologii, a mikroskop to przyrząd."
  },
  {
    "id": "R01_ST_09",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do obserwacji albo doświadczenia.",
    "options": null,
    "items": [
      "oglądanie bocianów w gnieździe",
      "sprawdzanie wpływu większej ilości wody na fasolę",
      "przyglądanie się mrówkom",
      "porównanie bananów trzymanych z jabłkami i bez jabłek"
    ],
    "categories": [
      "obserwacja",
      "doświadczenie"
    ],
    "answer": {
      "obserwacja": [
        "oglądanie bocianów w gnieździe",
        "przyglądanie się mrówkom"
      ],
      "doświadczenie": [
        "sprawdzanie wpływu większej ilości wody na fasolę",
        "porównanie bananów trzymanych z jabłkami i bez jabłek"
      ]
    },
    "explanation": "W obserwacji niczego nie zmieniamy. W doświadczeniu zmieniamy jeden czynnik i porównujemy wyniki."
  },
  {
    "id": "R01_ST_10",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż pełny plan metody naukowej.",
    "options": null,
    "items": [
      "wniosek",
      "hipoteza",
      "problem badawczy",
      "analiza wyników",
      "doświadczenie",
      "obserwacja"
    ],
    "answer": [
      "obserwacja",
      "problem badawczy",
      "hipoteza",
      "doświadczenie",
      "analiza wyników",
      "wniosek"
    ],
    "explanation": "Tak przebiega metoda naukowa: od obserwacji aż do wniosku."
  },
  {
    "id": "R01_ST_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które zdanie jest hipotezą w badaniu o bananach i jabłkach?",
    "options": [
      "Czy obecność jabłek przyspiesza dojrzewanie bananów?",
      "Banany szybciej dojrzewają, jeżeli są przechowywane razem z jabłkami.",
      "Banany w misce są żółte.",
      "Potrzebujemy dwóch misek i bananów."
    ],
    "answer": 1,
    "explanation": "Hipoteza to możliwa odpowiedź na problem badawczy. W tym przykładzie brzmi ona: banany szybciej dojrzewają z jabłkami."
  },
  {
    "id": "R01_ST_12",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Uzupełnij: zestaw, w którym zmieniamy wybrany czynnik, to próba __________, a zestaw bez zmian to próba __________.",
    "options": null,
    "answer": [
      "badawcza",
      "kontrolna"
    ],
    "altAnswers": [
      [
        "badawcza",
        "badawczą",
        "badawczej"
      ],
      [
        "kontrolna",
        "kontrolną",
        "kontrolnej"
      ]
    ],
    "explanation": "W próbie badawczej zmieniamy czynnik, a w próbie kontrolnej nic nie zmieniamy."
  },
  {
    "id": "R01_ST_13",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz cechę dobrego badacza z przykładem zachowania.",
    "options": null,
    "left": [
      "szacunek dla przyrody",
      "ostrożność",
      "systematyczność",
      "rzetelność"
    ],
    "right": [
      "nie niszczy roślin i nie płoszy zwierząt",
      "chroni skórę i oczy podczas doświadczeń",
      "regularnie zapisuje wyniki",
      "dokładnie wykonuje i dokumentuje badania"
    ],
    "answer": {
      "szacunek dla przyrody": "nie niszczy roślin i nie płoszy zwierząt",
      "ostrożność": "chroni skórę i oczy podczas doświadczeń",
      "systematyczność": "regularnie zapisuje wyniki",
      "rzetelność": "dokładnie wykonuje i dokumentuje badania"
    },
    "explanation": "Tak właśnie objawiają się te cechy podczas pracy badacza."
  },
  {
    "id": "R01_ST_14",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które miejsca mogą pomóc rozwijać zainteresowania biologiczne?",
    "options": [
      "ogród botaniczny",
      "ogród zoologiczny",
      "muzeum przyrodnicze",
      "parking",
      "łąka podczas zajęć terenowych"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Rozdział wymienia ogród botaniczny, ogród zoologiczny, muzeum przyrodnicze i zajęcia terenowe. Parking sam w sobie nie jest takim miejscem."
  },
  {
    "id": "R01_ST_15",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Ustawiłeś najmniejszy obiektyw i oświetliłeś pole widzenia. Co robisz dalej?",
    "options": [
      "Kładziesz preparat na stoliku",
      "Od razu liczysz powiększenie",
      "Zmieniasz na największy obiektyw",
      "Zamykasz okular"
    ],
    "answer": 0,
    "explanation": "Po ustawieniu najmniejszego obiektywu i oświetleniu pola widzenia umieszczamy preparat na stoliku mikroskopu."
  },
  {
    "id": "R01_ST_16",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż czynności potrzebne do wykonania preparatu ze skórki cebuli.",
    "options": null,
    "items": [
      "nakryj preparat szkiełkiem nakrywkowym",
      "umieść fragment skórki w kropli wody",
      "nanieś kroplę wody na szkiełko podstawowe",
      "wyjmij fragment skórki z liścia cebuli",
      "połóż gotowy preparat na stoliku mikroskopu"
    ],
    "answer": [
      "nanieś kroplę wody na szkiełko podstawowe",
      "wyjmij fragment skórki z liścia cebuli",
      "umieść fragment skórki w kropli wody",
      "nakryj preparat szkiełkiem nakrywkowym",
      "połóż gotowy preparat na stoliku mikroskopu"
    ],
    "explanation": "Tak wygląda poprawna kolejność przygotowania prostego preparatu z cebuli."
  },
  {
    "id": "R01_ST_17",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż kroki obserwacji preparatu pod mikroskopem.",
    "options": null,
    "items": [
      "ustaw ostrość obrazu",
      "obserwuj obiekt",
      "ustaw najmniejszy obiektyw",
      "połóż preparat na stoliku",
      "zwiększ powiększenie"
    ],
    "answer": [
      "ustaw najmniejszy obiektyw",
      "połóż preparat na stoliku",
      "ustaw ostrość obrazu",
      "zwiększ powiększenie",
      "obserwuj obiekt"
    ],
    "explanation": "Najpierw ustawiamy małe powiększenie, potem preparat, ostrość, a dopiero później większe powiększenie i właściwą obserwację."
  },
  {
    "id": "R01_ST_18",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Okular powiększa 15×, a obiektyw 20×. Jakie będzie powiększenie obrazu?",
    "options": [
      "35×",
      "300×",
      "150×",
      "20×"
    ],
    "answer": 1,
    "explanation": "15 × 20 = 300. Powiększenia trzeba pomnożyć."
  },
  {
    "id": "R01_ST_19",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj obiekty do mikroskopu optycznego albo elektronowego zgodnie z rozdziałem.",
    "options": null,
    "items": [
      "komórki cebuli",
      "kropla wody z kałuży",
      "fragment kwiatu",
      "wirusy",
      "bakterie"
    ],
    "categories": [
      "mikroskop optyczny",
      "mikroskop elektronowy"
    ],
    "answer": {
      "mikroskop optyczny": [
        "komórki cebuli",
        "kropla wody z kałuży",
        "fragment kwiatu"
      ],
      "mikroskop elektronowy": [
        "wirusy",
        "bakterie"
      ]
    },
    "explanation": "W rozdziale mikroskop optyczny służy do oglądania komórek i wielu większych obiektów, a elektronowy - do wyjątkowo małych, takich jak wirusy i bakterie."
  },
  {
    "id": "R01_ST_20",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Niektóre mikroskopy elektronowe potrafią dać obraz przestrzenny.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. W rozdziale napisano, że niektóre mikroskopy elektronowe umożliwiają uzyskanie obrazu przestrzennego."
  }
]
;

const KID_PROMPTS =
{
  "R01_BN_10": "Co jest najmniejsze, a co największe w budowie organizmu?",
  "R01_PB_08": "Jak po kolei działa metoda naukowa?",
  "R01_OM_08": "Policz powiększenie: 10 razy 40.",
  "R01_ST_11": "Które zdanie jest przewidywaniem, a nie pytaniem ani wynikiem?",
  "R01_ST_19": "Który mikroskop nadaje się do wirusów?"
}
;

const chapter = {
  "id": "r01",
  "number": 1,
  "title": "Biologia - nauka o życiu",
  "icon": "🔬",
  "sectionOrder": [
    "Biologia jako nauka",
    "Jak poznawać biologię?",
    "Obserwacje mikroskopowe"
  ],
  "sectionIcons": {
    "Biologia jako nauka": "🧬",
    "Jak poznawać biologię?": "🧪",
    "Obserwacje mikroskopowe": "🔍"
  }
,
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
