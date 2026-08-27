// Skróty sekcji (do identyfikatorów ćwiczeń):
//   KRE  = Krew i grupy krwi
//   KRA  = Krążenie krwi i naczynia
//   SER  = Serce i jego praca
//   CHO  = Higiena i choroby układu krwionośnego
//   LIM  = Układ limfatyczny
//   ODP  = Odporność i jej zaburzenia
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_KRE_01",
    "section": "Krew i grupy krwi",
    "type": "single_choice",
    "prompt": "Jakim rodzajem tkanki jest krew?",
    "options": [
      "Tkanką łączną",
      "Tkanką nabłonkową",
      "Tkanką mięśniową",
      "Tkanką nerwową",
      "Tkanką kostną",
      "Tkanką chrzęstną"
    ],
    "answer": 0,
    "explanation": "Krew jest płynną tkanką łączną złożoną z osocza oraz zawieszonych w nim elementów morfotycznych."
  },
  {
    "id": "R04_KRE_02",
    "section": "Krew i grupy krwi",
    "type": "sort",
    "prompt": "Przyporządkuj składniki krwi do osocza albo elementów morfotycznych.",
    "options": null,
    "items": [
      "woda",
      "erytrocyty",
      "leukocyty",
      "płytki krwi",
      "hormony",
      "sole mineralne"
    ],
    "categories": [
      "osocze",
      "elementy morfotyczne"
    ],
    "answer": {
      "osocze": [
        "woda",
        "hormony",
        "sole mineralne"
      ],
      "elementy morfotyczne": [
        "erytrocyty",
        "leukocyty",
        "płytki krwi"
      ]
    },
    "explanation": "Osocze składa się głównie z wody i rozpuszczonych w niej substancji, a elementami morfotycznymi są erytrocyty, leukocyty i płytki krwi.",
    "image": "r04_sklad_krwi.jpg"
  },
  {
    "id": "R04_KRE_03",
    "section": "Krew i grupy krwi",
    "type": "match",
    "prompt": "Połącz składnik krwi z jego główną funkcją.",
    "options": null,
    "left": [
      "erytrocyty",
      "leukocyty",
      "płytki krwi",
      "osocze"
    ],
    "right": [
      "transport tlenu",
      "zwalczanie czynników chorobotwórczych",
      "udział w krzepnięciu",
      "transport m.in. dwutlenku węgla i hormonów"
    ],
    "answer": {
      "erytrocyty": "transport tlenu",
      "leukocyty": "zwalczanie czynników chorobotwórczych",
      "płytki krwi": "udział w krzepnięciu",
      "osocze": "transport m.in. dwutlenku węgla i hormonów"
    },
    "explanation": "Hemoglobina w erytrocytach wiąże tlen, leukocyty uczestniczą w obronie, płytki uruchamiają krzepnięcie, a osocze przenosi wiele rozpuszczonych substancji."
  },
  {
    "id": "R04_KRE_04",
    "section": "Krew i grupy krwi",
    "type": "multi_select",
    "prompt": "Zaznacz cechy erytrocytów.",
    "options": [
      "Nie mają jądra komórkowego",
      "Zawierają hemoglobinę",
      "Powstają w czerwonym szpiku kostnym",
      "Mają zdolność ruchu",
      "Wytwarzają przeciwciała",
      "Żyją około 4 miesięcy"
    ],
    "answer": [
      0,
      1,
      2,
      5
    ],
    "explanation": "Erytrocyty nie mają jądra ani zdolności ruchu, zawierają hemoglobinę, powstają w czerwonym szpiku kostnym i żyją około czterech miesięcy."
  },
  {
    "id": "R04_KRE_05",
    "section": "Krew i grupy krwi",
    "type": "single_choice",
    "prompt": "Które antygeny znajdują się na powierzchni erytrocytów osoby z grupą krwi AB?",
    "options": [
      "Antygeny A i B",
      "Tylko antygen A",
      "Tylko antygen B",
      "Brak antygenów A i B",
      "Tylko czynnik Rh",
      "Przeciwciała anty-A i anty-B"
    ],
    "answer": 0,
    "explanation": "Grupa AB oznacza obecność na erytrocytach obu antygenów układu ABO: A i B."
  },
  {
    "id": "R04_KRE_06",
    "section": "Krew i grupy krwi",
    "type": "match",
    "prompt": "Połącz grupę krwi z przeciwciałami występującymi w osoczu.",
    "options": null,
    "left": [
      "A",
      "B",
      "AB",
      "0"
    ],
    "right": [
      "anty-B",
      "anty-A",
      "brak",
      "anty-A i anty-B"
    ],
    "answer": {
      "A": "anty-B",
      "B": "anty-A",
      "AB": "brak",
      "0": "anty-A i anty-B"
    },
    "explanation": "W osoczu grupy A występują przeciwciała anty-B, grupy B anty-A, grupa AB nie ma przeciwciał anty-A ani anty-B, a grupa 0 ma oba rodzaje."
  },
  {
    "id": "R04_KRE_07",
    "section": "Krew i grupy krwi",
    "type": "sequence",
    "prompt": "Ułóż etapy krzepnięcia krwi w prawidłowej kolejności.",
    "options": null,
    "items": [
      "Fibrynogen zmienia się w fibrynę",
      "Powstaje twardniejący skrzep",
      "Płytki krwi przyklejają się do brzegów rany",
      "Włókna fibryny tworzą sieć zatrzymującą komórki krwi"
    ],
    "answer": [
      "Płytki krwi przyklejają się do brzegów rany",
      "Fibrynogen zmienia się w fibrynę",
      "Włókna fibryny tworzą sieć zatrzymującą komórki krwi",
      "Powstaje twardniejący skrzep"
    ],
    "explanation": "Krzepnięcie rozpoczynają płytki krwi. Następnie fibrynogen przekształca się w fibrynę, której włókna zatrzymują komórki krwi i tworzą skrzep.",
    "image": "r04_krzepniecie.jpg"
  },
  {
    "id": "R04_KRE_08",
    "section": "Krew i grupy krwi",
    "type": "scenario",
    "prompt": "Kobieta ma krew Rh-, a ojciec dziecka Rh+. Dziecko odziedziczyło Rh+ po ojcu. Jaka sytuacja może stanowić zagrożenie zwłaszcza podczas kolejnej ciąży?",
    "options": [
      "Konflikt serologiczny",
      "Miażdżyca",
      "Niedokrwistość",
      "Hemofilia",
      "Nadciśnienie tętnicze",
      "Białaczka"
    ],
    "answer": 0,
    "explanation": "Po kontakcie z krwią Rh+ organizm matki Rh- może wytworzyć przeciwciała, które w kolejnej ciąży mogą atakować krwinki płodu Rh+."
  },
  {
    "id": "R04_KRE_09",
    "section": "Krew i grupy krwi",
    "type": "true_false",
    "prompt": "Od honorowego dawcy pobiera się jednorazowo około 450 ml krwi, czyli około 10% jej całej objętości.",
    "options": null,
    "answer": true,
    "explanation": "Jednorazowo pobiera się około 450 ml krwi, a organizm uzupełnia jej braki w ciągu około 2-3 tygodni."
  },
  {
    "id": "R04_KRA_01",
    "section": "Krążenie krwi i naczynia",
    "type": "sequence",
    "prompt": "Ułóż drogę krwi w krwiobiegu małym od prawej komory do lewego przedsionka.",
    "options": null,
    "items": [
      "żyły płucne",
      "tętnice płucne",
      "lewy przedsionek",
      "naczynia włosowate płuc",
      "prawa komora"
    ],
    "answer": [
      "prawa komora",
      "tętnice płucne",
      "naczynia włosowate płuc",
      "żyły płucne",
      "lewy przedsionek"
    ],
    "explanation": "Krwiobieg mały rozpoczyna się w prawej komorze. Krew płynie tętnicami płucnymi do naczyń włosowatych płuc i wraca żyłami płucnymi do lewego przedsionka.",
    "image": "r04_obieg_plucny.jpg"
  },
  {
    "id": "R04_KRA_02",
    "section": "Krążenie krwi i naczynia",
    "type": "sequence",
    "prompt": "Ułóż drogę krwi w krwiobiegu dużym od lewej komory do prawego przedsionka.",
    "options": null,
    "items": [
      "żyły główne",
      "aorta",
      "prawy przedsionek",
      "naczynia włosowate narządów",
      "lewa komora"
    ],
    "answer": [
      "lewa komora",
      "aorta",
      "naczynia włosowate narządów",
      "żyły główne",
      "prawy przedsionek"
    ],
    "explanation": "Krwiobieg duży zaczyna się w lewej komorze, skąd krew wypływa aortą do narządów, a następnie wraca żyłami głównymi do prawego przedsionka."
  },
  {
    "id": "R04_KRA_03",
    "section": "Krążenie krwi i naczynia",
    "type": "true_false",
    "prompt": "Tętnice płucne prowadzą krew odtlenowaną, a żyły płucne prowadzą krew utlenowaną.",
    "options": null,
    "answer": true,
    "explanation": "W krwiobiegu małym tętnice płucne odprowadzają krew odtlenowaną z prawej komory, a żyły płucne doprowadzają krew utlenowaną do lewego przedsionka."
  },
  {
    "id": "R04_KRA_04",
    "section": "Krążenie krwi i naczynia",
    "type": "match",
    "prompt": "Połącz rodzaj naczynia z opisem jego roli.",
    "options": null,
    "left": [
      "tętnica",
      "żyła",
      "naczynie włosowate"
    ],
    "right": [
      "wyprowadza krew z serca",
      "doprowadza krew do serca",
      "pośredniczy między końcowymi odcinkami tętnic i początkowymi odcinkami żył"
    ],
    "answer": {
      "tętnica": "wyprowadza krew z serca",
      "żyła": "doprowadza krew do serca",
      "naczynie włosowate": "pośredniczy między końcowymi odcinkami tętnic i początkowymi odcinkami żył"
    },
    "explanation": "Tętnice prowadzą krew od serca, żyły do serca, a naczynia włosowate łączą końcowe odcinki układu tętniczego z początkiem układu żylnego."
  },
  {
    "id": "R04_KRA_05",
    "section": "Krążenie krwi i naczynia",
    "type": "single_choice",
    "prompt": "Dlaczego wymiana substancji między krwią a komórkami zachodzi w naczyniach włosowatych?",
    "options": [
      "Ich ściana ma tylko jedną warstwę komórek śródbłonka",
      "Mają najgrubszą warstwę mięśniową",
      "Występują w nich liczne zastawki",
      "Panuje w nich najwyższe ciśnienie",
      "Łączą się bezpośrednio z komorami serca",
      "Ich ściany są zbudowane z trzech grubych warstw"
    ],
    "answer": 0,
    "explanation": "Cienka, jednowarstwowa ściana naczyń włosowatych umożliwia sprawne przenikanie substancji między krwią a tkankami."
  },
  {
    "id": "R04_KRA_06",
    "section": "Krążenie krwi i naczynia",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do odpowiednich naczyń krwionośnych.",
    "options": null,
    "items": [
      "gruba warstwa mięśniowa",
      "zastawki",
      "jedna warstwa śródbłonka",
      "wysokie ciśnienie krwi",
      "niskie ciśnienie krwi",
      "bardzo niskie ciśnienie krwi"
    ],
    "categories": [
      "tętnice",
      "żyły",
      "naczynia włosowate"
    ],
    "answer": {
      "tętnice": [
        "gruba warstwa mięśniowa",
        "wysokie ciśnienie krwi"
      ],
      "żyły": [
        "zastawki",
        "niskie ciśnienie krwi"
      ],
      "naczynia włosowate": [
        "jedna warstwa śródbłonka",
        "bardzo niskie ciśnienie krwi"
      ]
    },
    "explanation": "Tętnice mają grube i elastyczne ściany, żyły cieńsze ściany i zastawki, a naczynia włosowate jednowarstwową ścianę oraz bardzo niskie ciśnienie.",
    "image": "r04_naczynia_krwionosne.jpg"
  },
  {
    "id": "R04_KRA_07",
    "section": "Krążenie krwi i naczynia",
    "type": "odd_one_out",
    "prompt": "Wskaż element niepasujący do pozostałych: tętnica, żyła, naczynie włosowate, przedsionek.",
    "options": null,
    "answer": "przedsionek",
    "explanation": "Tętnica, żyła i naczynie włosowate są rodzajami naczyń krwionośnych, natomiast przedsionek jest częścią serca."
  },
  {
    "id": "R04_KRA_08",
    "section": "Krążenie krwi i naczynia",
    "type": "scenario",
    "prompt": "Krew w żyle kończyny zaczyna cofać się pod wpływem grawitacji. Która struktura powinna zahamować jej cofanie?",
    "options": [
      "Zastawka",
      "Przegroda serca",
      "Pęcherzyk płucny",
      "Fibryna",
      "Osierdzie",
      "Aorta"
    ],
    "answer": 0,
    "explanation": "W wielu żyłach znajdują się zastawki, czyli fałdy wewnętrznej warstwy ściany naczynia, które zapobiegają cofaniu się krwi."
  },
  {
    "id": "R04_KRA_09",
    "section": "Krążenie krwi i naczynia",
    "type": "fill_in",
    "prompt": "Układ krwionośny człowieka jest układem __________, a serce pełni w nim funkcję __________.",
    "options": null,
    "answer": [
      "zamkniętym",
      "pompy"
    ],
    "explanation": "Krew w układzie krwionośnym porusza się wyłącznie w naczyniach, a serce napędza jej przepływ jak pompa."
  },
  {
    "id": "R04_SER_01",
    "section": "Serce i jego praca",
    "type": "single_choice",
    "prompt": "Z ilu przedsionków i ilu komór składa się serce człowieka?",
    "options": [
      "Z dwóch przedsionków i dwóch komór",
      "Z jednego przedsionka i dwóch komór",
      "Z dwóch przedsionków i jednej komory",
      "Z trzech przedsionków i jednej komory",
      "Z jednej jamy",
      "Z czterech przedsionków"
    ],
    "answer": 0,
    "explanation": "Serce człowieka ma cztery jamy: dwa przedsionki i dwie komory."
  },
  {
    "id": "R04_SER_02",
    "section": "Serce i jego praca",
    "type": "match",
    "prompt": "Połącz element serca z jego funkcją.",
    "options": null,
    "left": [
      "przegroda",
      "zastawki",
      "osierdzie",
      "naczynia wieńcowe"
    ],
    "right": [
      "zapobiega mieszaniu krwi utlenowanej i odtlenowanej",
      "zapewniają jednokierunkowy przepływ przez serce",
      "chroni serce przed urazami",
      "dostarczają komórkom serca tlen i substancje odżywcze"
    ],
    "answer": {
      "przegroda": "zapobiega mieszaniu krwi utlenowanej i odtlenowanej",
      "zastawki": "zapewniają jednokierunkowy przepływ przez serce",
      "osierdzie": "chroni serce przed urazami",
      "naczynia wieńcowe": "dostarczają komórkom serca tlen i substancje odżywcze"
    },
    "explanation": "Przegroda rozdziela prawą i lewą część serca, zastawki kierują przepływem, osierdzie chroni narząd, a naczynia wieńcowe zaopatrują mięsień sercowy.",
    "image": "r04_serce_anatomia.jpg"
  },
  {
    "id": "R04_SER_03",
    "section": "Serce i jego praca",
    "type": "sequence",
    "prompt": "Ułóż fazy cyklu pracy serca w prawidłowej kolejności.",
    "options": null,
    "items": [
      "faza rozkurczu",
      "skurcz komór",
      "skurcz przedsionków"
    ],
    "answer": [
      "skurcz przedsionków",
      "skurcz komór",
      "faza rozkurczu"
    ],
    "explanation": "Każdy cykl pracy serca obejmuje kolejno skurcz przedsionków, skurcz komór i fazę rozkurczu."
  },
  {
    "id": "R04_SER_04",
    "section": "Serce i jego praca",
    "type": "true_false",
    "prompt": "Prawa część serca pompuje krew odtlenowaną, a lewa część serca pompuje krew utlenowaną.",
    "options": null,
    "answer": true,
    "explanation": "Funkcjonalnie prawa połowa serca obsługuje krew odtlenowaną kierowaną do płuc, a lewa krew utlenowaną kierowaną do ciała."
  },
  {
    "id": "R04_SER_05",
    "section": "Serce i jego praca",
    "type": "fill_in",
    "prompt": "Rytmiczne rozciąganie ścian tętnic jest wyczuwalne jako __________, a zapis czynności elektrycznej serca to __________.",
    "options": null,
    "answer": [
      "tętno",
      "EKG"
    ],
    "altAnswers": [
      [
        "tętno",
        "puls"
      ],
      [
        "EKG",
        "elektrokardiogram"
      ]
    ],
    "explanation": "Tętno, nazywane też pulsem, wynika z rytmicznych zmian ciśnienia w tętnicach. EKG rejestruje czynność elektryczną serca."
  },
  {
    "id": "R04_SER_06",
    "section": "Serce i jego praca",
    "type": "scenario",
    "prompt": "Uczeń kończy intensywny wysiłek fizyczny. Jaka zmiana tętna jest zgodna z pracą zdrowego organizmu?",
    "options": [
      "Tętno wyraźnie wzrasta",
      "Tętno zawsze spada do zera",
      "Tętno nie może się zmienić",
      "Tętno natychmiast pozostaje stałe na poziomie 60",
      "Serce przestaje tłoczyć krew",
      "Ciśnienie krwi zawsze spada podczas wysiłku"
    ],
    "answer": 0,
    "explanation": "Podczas wysiłku serce bije częściej, aby zwiększyć dopływ krwi bogatej w tlen i substancje odżywcze do pracujących mięśni. Przy intensywnym wysiłku tętno może wzrosnąć nawet do około 200 uderzeń na minutę.",
    "image": "r04_tetno_wysilek.jpg"
  },
  {
    "id": "R04_SER_07",
    "section": "Serce i jego praca",
    "type": "multi_select",
    "prompt": "Zaznacz sytuacje, w których tętno i ciśnienie krwi mogą wzrastać.",
    "options": [
      "Wysiłek fizyczny",
      "Stres",
      "Sen",
      "Relaks",
      "Intensywna praca mięśni",
      "Spokojny odpoczynek"
    ],
    "answer": [
      0,
      1,
      4
    ],
    "explanation": "Wysiłek i stres zwiększają częstość pracy serca oraz wartości ciśnienia. Podczas snu i relaksu parametry te są niższe."
  },
  {
    "id": "R04_SER_08",
    "section": "Serce i jego praca",
    "type": "single_choice",
    "prompt": "Co oznacza pierwsza wartość w zapisie ciśnienia 120/80 mm Hg?",
    "options": [
      "Ciśnienie skurczowe",
      "Ciśnienie rozkurczowe",
      "Liczbę uderzeń serca na minutę",
      "Objętość krwi w sercu",
      "Stężenie hemoglobiny",
      "Szybkość przepływu limfy"
    ],
    "answer": 0,
    "explanation": "Pierwsza wartość to ciśnienie skurczowe, czyli najwyższe ciśnienie w tętnicy podczas skurczu lewej komory."
  },
  {
    "id": "R04_SER_09",
    "section": "Serce i jego praca",
    "type": "riddle",
    "prompt": "Jak nazywa się część komórek mięśnia sercowego, która wytwarza impulsy elektryczne pobudzające serce do skurczu?",
    "options": null,
    "answer": "naturalny rozrusznik",
    "altAnswers": [
      "naturalny rozrusznik",
      "rozrusznik serca"
    ],
    "explanation": "Naturalny rozrusznik tworzą komórki mięśnia sercowego wytwarzające impulsy elektryczne regulujące rytm skurczów."
  },
  {
    "id": "R04_CHO_01",
    "section": "Higiena i choroby układu krwionośnego",
    "type": "multi_select",
    "prompt": "Zaznacz zachowania sprzyjające profilaktyce chorób układu krwionośnego.",
    "options": [
      "Umiarkowany wysiłek fizyczny",
      "Niepalenie papierosów",
      "Ograniczanie tłuszczów zwierzęcych",
      "Regularne badania krwi",
      "Nadmierne spożywanie alkoholu",
      "Dieta z dużą ilością soli"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Profilaktyce sprzyjają ruch, odpowiednia dieta, unikanie używek oraz systematyczne badania. Alkohol i nadmiar soli zwiększają ryzyko zaburzeń układu krwionośnego."
  },
  {
    "id": "R04_CHO_02",
    "section": "Higiena i choroby układu krwionośnego",
    "type": "match",
    "prompt": "Połącz chorobę z charakterystyczną cechą.",
    "options": null,
    "left": [
      "miażdżyca",
      "niedokrwistość",
      "białaczka",
      "nadciśnienie tętnicze"
    ],
    "right": [
      "blaszki utrudniające przepływ krwi",
      "obniżony poziom hemoglobiny i erytrocytów",
      "nadmierne wytwarzanie niedojrzałych krwinek białych",
      "stale podwyższone ciśnienie krwi"
    ],
    "answer": {
      "miażdżyca": "blaszki utrudniające przepływ krwi",
      "niedokrwistość": "obniżony poziom hemoglobiny i erytrocytów",
      "białaczka": "nadmierne wytwarzanie niedojrzałych krwinek białych",
      "nadciśnienie tętnicze": "stale podwyższone ciśnienie krwi"
    },
    "explanation": "Miażdżyca zwęża naczynia blaszkami, niedokrwistość wiąże się z obniżeniem hemoglobiny i erytrocytów, białaczka z nieprawidłowymi leukocytami, a nadciśnienie ze stałym wzrostem ciśnienia."
  },
  {
    "id": "R04_CHO_03",
    "section": "Higiena i choroby układu krwionośnego",
    "type": "sequence",
    "prompt": "Ułóż ciąg zmian prowadzących do ograniczenia przepływu krwi w miażdżycy.",
    "options": null,
    "items": [
      "utrudniony przepływ krwi",
      "uszkodzenie ściany naczynia",
      "powstanie blaszki miażdżycowej",
      "gromadzenie złogów tłuszczowych"
    ],
    "answer": [
      "uszkodzenie ściany naczynia",
      "gromadzenie złogów tłuszczowych",
      "powstanie blaszki miażdżycowej",
      "utrudniony przepływ krwi"
    ],
    "explanation": "W obrębie uszkodzonej ściany naczynia odkładają się głównie związki tłuszczowe. Tworzą blaszkę miażdżycową, która zwęża światło naczynia i utrudnia przepływ krwi.",
    "image": "r04_miazdzyca_tetnicy.jpg"
  },
  {
    "id": "R04_CHO_04",
    "section": "Higiena i choroby układu krwionośnego",
    "type": "scenario",
    "prompt": "Osobie zaczyna mocno krwawić z nosa. Które postępowanie jest właściwe?",
    "options": [
      "Lekko pochylić głowę do przodu i uciskać miękką część nosa",
      "Mocno odchylić głowę do tyłu",
      "Położyć się płasko bez ucisku nosa",
      "Wykonać intensywny wysiłek",
      "Ogrzać grzbiet nosa gorącym okładem",
      "Wypić alkohol, aby rozszerzyć naczynia"
    ],
    "answer": 0,
    "explanation": "Przy krwotoku z nosa należy lekko pochylić głowę do przodu i uciskać miękką część nosa. Pomocny może być też zimny okład."
  },
  {
    "id": "R04_CHO_05",
    "section": "Higiena i choroby układu krwionośnego",
    "type": "true_false",
    "prompt": "U osób chorych na hemofilię we krwi jest za mało białek niezbędnych do krzepnięcia, dlatego nawet niewielki uraz może prowadzić do znacznej utraty krwi.",
    "options": null,
    "answer": true,
    "explanation": "Niedobór białek potrzebnych do krzepnięcia sprawia, że krwawienie u osoby z hemofilią może być trudne do zahamowania."
  },
  {
    "id": "R04_CHO_06",
    "section": "Higiena i choroby układu krwionośnego",
    "type": "single_choice",
    "prompt": "Co ocenia podstawowe badanie krwi nazywane morfologią?",
    "options": [
      "Ilość i wygląd krwinek oraz płytek krwi",
      "Wyłącznie grupę krwi ABO",
      "Tylko ciśnienie tętnicze",
      "Tylko rytm pracy serca",
      "Tylko ilość limfy",
      "Wyłącznie pojemność płuc"
    ],
    "answer": 0,
    "explanation": "Morfologia krwi służy do oceny liczby i wyglądu krwinek oraz płytek krwi.",
    "image": "r04_morfologia_krwi.jpg"
  },
  {
    "id": "R04_CHO_07",
    "section": "Higiena i choroby układu krwionośnego",
    "type": "fill_in",
    "prompt": "W niedokrwistości obserwuje się obniżony poziom __________ oraz zmniejszoną liczbę __________ we krwi.",
    "options": null,
    "answer": [
      "hemoglobiny",
      "erytrocytów"
    ],
    "explanation": "Niedokrwistość może objawiać się obniżonym stężeniem hemoglobiny i zmniejszoną liczbą erytrocytów, czemu towarzyszą osłabienie i szybkie męczenie się."
  },
  {
    "id": "R04_CHO_08",
    "section": "Higiena i choroby układu krwionośnego",
    "type": "odd_one_out",
    "prompt": "Wskaż element niepasujący do czynników zwiększających ryzyko chorób układu krwionośnego: palenie papierosów, otyłość, długotrwały stres, umiarkowany wysiłek fizyczny.",
    "options": null,
    "answer": "umiarkowany wysiłek fizyczny",
    "explanation": "Umiarkowany wysiłek fizyczny działa korzystnie na układ krwionośny, natomiast palenie, otyłość i długotrwały stres zwiększają ryzyko chorób."
  },
  {
    "id": "R04_CHO_09",
    "section": "Higiena i choroby układu krwionośnego",
    "type": "scenario",
    "prompt": "U pacjenta blaszka miażdżycowa zwęża tętnicę zaopatrującą serce w tlen. Do jakiej groźnej choroby może to prowadzić?",
    "options": [
      "Choroby wieńcowej i zawału serca",
      "Alergii pokarmowej",
      "Kataru siennego",
      "Hemofilii",
      "AIDS",
      "Zapalenia migdałków"
    ],
    "answer": 0,
    "explanation": "Miażdżyca tętnic zaopatrujących serce to choroba wieńcowa. Niedostateczny dopływ krwi może spowodować obumarcie części serca, czyli zawał."
  },
  {
    "id": "R04_LIM_01",
    "section": "Układ limfatyczny",
    "type": "single_choice",
    "prompt": "Które stwierdzenie poprawnie opisuje układ limfatyczny?",
    "options": [
      "Jest układem otwartym",
      "Jest układem zamkniętym napędzanym przez serce",
      "Nie zawiera żadnych naczyń",
      "Transportuje wyłącznie tlen",
      "Składa się tylko z tętnic",
      "Nie łączy się z układem krwionośnym"
    ],
    "answer": 0,
    "explanation": "Układ limfatyczny jest otwarty, a jego naczynia zaczynają się w przestrzeniach między komórkami."
  },
  {
    "id": "R04_LIM_02",
    "section": "Układ limfatyczny",
    "type": "multi_select",
    "prompt": "Zaznacz elementy należące do układu limfatycznego.",
    "options": [
      "Węzły limfatyczne",
      "Śledziona",
      "Grasica",
      "Migdałki podniebienne",
      "Aorta",
      "Lewa komora"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do układu limfatycznego należą naczynia limfatyczne oraz narządy takie jak węzły limfatyczne, śledziona, grasica i migdałki podniebienne."
  },
  {
    "id": "R04_LIM_03",
    "section": "Układ limfatyczny",
    "type": "sequence",
    "prompt": "Ułóż drogę limfy od przestrzeni międzykomórkowych do układu krwionośnego.",
    "options": null,
    "items": [
      "duże żyły w pobliżu serca",
      "włosowate naczynia limfatyczne",
      "większe naczynia limfatyczne",
      "płyn tkankowy w przestrzeniach międzykomórkowych",
      "przewód piersiowy lub przewód limfatyczny prawy"
    ],
    "answer": [
      "płyn tkankowy w przestrzeniach międzykomórkowych",
      "włosowate naczynia limfatyczne",
      "większe naczynia limfatyczne",
      "przewód piersiowy lub przewód limfatyczny prawy",
      "duże żyły w pobliżu serca"
    ],
    "explanation": "Limfa powstaje z płynu tkankowego, wpływa do włosowatych naczyń limfatycznych, następnie do większych naczyń i dwóch głównych przewodów, a na końcu do dużych żył.",
    "image": "r04_uklad_limfatyczny.jpg"
  },
  {
    "id": "R04_LIM_04",
    "section": "Układ limfatyczny",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje układu limfatycznego.",
    "options": [
      "Udział w zwalczaniu drobnoustrojów",
      "Transport niektórych substancji, np. tłuszczów",
      "Odprowadzanie nadmiaru wody z tkanek",
      "Dostarczanie przesączonego osocza z powrotem do krwiobiegu",
      "Wytwarzanie impulsów elektrycznych serca",
      "Tłoczenie krwi do aorty"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Układ limfatyczny uczestniczy w obronie, transporcie m.in. tłuszczów i wody oraz zwraca do krwiobiegu płyn przesączony z naczyń włosowatych."
  },
  {
    "id": "R04_LIM_05",
    "section": "Układ limfatyczny",
    "type": "true_false",
    "prompt": "Układ limfatyczny nie ma własnej pompy podobnej do serca, a ruch limfy wspomagają skurcze mięśni sąsiadujących z naczyniami.",
    "options": null,
    "answer": true,
    "explanation": "W układzie limfatycznym nie ma narządu pełniącego funkcję pompy. Limfę przesuwają między innymi skurcze mięśni otaczających naczynia."
  },
  {
    "id": "R04_LIM_06",
    "section": "Układ limfatyczny",
    "type": "riddle",
    "prompt": "Jestem narządem, przez który limfa przepływa przed dotarciem do żył. Działam jak filtr zatrzymujący drobnoustroje. Co to za narząd?",
    "options": null,
    "answer": "węzeł chłonny",
    "altAnswers": [
      "węzeł chłonny",
      "węzeł limfatyczny"
    ],
    "explanation": "Limfa przepływa przynajmniej przez jeden węzeł chłonny, który zatrzymuje drobnoustroje chorobotwórcze."
  },
  {
    "id": "R04_LIM_07",
    "section": "Układ limfatyczny",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do układu krwionośnego albo limfatycznego.",
    "options": null,
    "items": [
      "układ zamknięty",
      "układ otwarty",
      "serce działa jak pompa",
      "brak własnej pompy",
      "płynie krew",
      "płynie limfa"
    ],
    "categories": [
      "układ krwionośny",
      "układ limfatyczny"
    ],
    "answer": {
      "układ krwionośny": [
        "układ zamknięty",
        "serce działa jak pompa",
        "płynie krew"
      ],
      "układ limfatyczny": [
        "układ otwarty",
        "brak własnej pompy",
        "płynie limfa"
      ]
    },
    "explanation": "Układ krwionośny jest zamknięty i napędzany przez serce, natomiast układ limfatyczny jest otwarty i nie ma własnej pompy."
  },
  {
    "id": "R04_LIM_08",
    "section": "Układ limfatyczny",
    "type": "fill_in",
    "prompt": "Dwa główne naczynia limfatyczne to przewód __________ oraz przewód limfatyczny __________.",
    "options": null,
    "answer": [
      "piersiowy",
      "prawy"
    ],
    "explanation": "Drobne naczynia limfatyczne łączą się ostatecznie w przewód piersiowy i przewód limfatyczny prawy, które uchodzą do dużych żył."
  },
  {
    "id": "R04_LIM_09",
    "section": "Układ limfatyczny",
    "type": "scenario",
    "prompt": "Badana limfa pochodzi z jelit i zawiera szczególnie dużo pewnego składnika pokarmowego. Którego?",
    "options": [
      "Tłuszczów",
      "Tlenu",
      "Hemoglobiny",
      "Fibryny",
      "Kwasu solnego",
      "Antygenów Rh"
    ],
    "answer": 0,
    "explanation": "Układ limfatyczny transportuje niektóre substancje, a limfa odprowadzana z jelit zawiera dużo tłuszczów."
  },
  {
    "id": "R04_ODP_01",
    "section": "Odporność i jej zaburzenia",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do odporności wrodzonej albo nabytej.",
    "options": null,
    "items": [
      "skóra",
      "kwas solny w żołądku",
      "makrofagi",
      "limfocyty T",
      "limfocyty B",
      "przeciwciała swoiste dla antygenu"
    ],
    "categories": [
      "odporność wrodzona",
      "odporność nabyta"
    ],
    "answer": {
      "odporność wrodzona": [
        "skóra",
        "kwas solny w żołądku",
        "makrofagi"
      ],
      "odporność nabyta": [
        "limfocyty T",
        "limfocyty B",
        "przeciwciała swoiste dla antygenu"
      ]
    },
    "explanation": "Odporność wrodzona obejmuje bariery i nieswoiste mechanizmy, takie jak skóra, kwas solny i makrofagi. Odporność nabyta opiera się m.in. na limfocytach T, limfocytach B i swoistych przeciwciałach.",
    "image": "r04_makrofag_bakterie.jpg"
  },
  {
    "id": "R04_ODP_02",
    "section": "Odporność i jej zaburzenia",
    "type": "match",
    "prompt": "Połącz element układu odpornościowego z jego funkcją.",
    "options": null,
    "left": [
      "śledziona",
      "grasica",
      "węzły chłonne",
      "limfocyty B"
    ],
    "right": [
      "niszczenie drobnoustrojów i zużytych elementów krwi",
      "dojrzewanie limfocytów",
      "filtrowanie chłonki",
      "wytwarzanie przeciwciał"
    ],
    "answer": {
      "śledziona": "niszczenie drobnoustrojów i zużytych elementów krwi",
      "grasica": "dojrzewanie limfocytów",
      "węzły chłonne": "filtrowanie chłonki",
      "limfocyty B": "wytwarzanie przeciwciał"
    },
    "explanation": "Śledziona usuwa drobnoustroje i stare elementy krwi, w grasicy dojrzewają limfocyty, węzły oczyszczają chłonkę, a limfocyty B produkują przeciwciała."
  },
  {
    "id": "R04_ODP_03",
    "section": "Odporność i jej zaburzenia",
    "type": "single_choice",
    "prompt": "Które komórki zaczynają produkować przeciwciała po rozpoznaniu obcego antygenu?",
    "options": [
      "Limfocyty B",
      "Erytrocyty",
      "Płytki krwi",
      "Komórki mięśnia sercowego",
      "Komórki śródbłonka",
      "Adipocyty"
    ],
    "answer": 0,
    "explanation": "Limfocyty B wytwarzają przeciwciała dopasowane do konkretnych obcych antygenów."
  },
  {
    "id": "R04_ODP_04",
    "section": "Odporność i jej zaburzenia",
    "type": "multi_select",
    "prompt": "Zaznacz elementy pierwszej linii odporności wrodzonej.",
    "options": [
      "Skóra",
      "Błony śluzowe",
      "Substancje bakteriobójcze w ślinie i łzach",
      "Kaszel i kichanie",
      "Limfocyty B",
      "Przeciwciała po szczepieniu"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Pierwszą linię obrony tworzą bariery i reakcje oczyszczające, m.in. skóra, błony śluzowe, substancje bakteriobójcze oraz kaszel i kichanie."
  },
  {
    "id": "R04_ODP_05",
    "section": "Odporność i jej zaburzenia",
    "type": "match",
    "prompt": "Połącz sposób nabycia odporności z jego rodzajem.",
    "options": null,
    "left": [
      "przebycie zakażenia",
      "podanie szczepionki",
      "przeciwciała od matki",
      "podanie surowicy"
    ],
    "right": [
      "czynna naturalna",
      "czynna sztuczna",
      "bierna naturalna",
      "bierna sztuczna"
    ],
    "answer": {
      "przebycie zakażenia": "czynna naturalna",
      "podanie szczepionki": "czynna sztuczna",
      "przeciwciała od matki": "bierna naturalna",
      "podanie surowicy": "bierna sztuczna"
    },
    "explanation": "Odporność czynna powstaje, gdy organizm sam wytwarza przeciwciała, a bierna po otrzymaniu gotowych przeciwciał. Naturalność lub sztuczność zależy od sposobu ich uzyskania."
  },
  {
    "id": "R04_ODP_06",
    "section": "Odporność i jej zaburzenia",
    "type": "scenario",
    "prompt": "Do rany dostała się duża ilość bakterii tężca, a szybka reakcja jest potrzebna natychmiast. Który preparat dostarcza gotowych przeciwciał?",
    "options": [
      "Surowica",
      "Szczepionka",
      "Osocze bez przeciwciał",
      "Roztwór soli",
      "Cholesterol",
      "Fibrynogen"
    ],
    "answer": 0,
    "explanation": "Surowica zawiera gotowe przeciwciała i może szybko neutralizować szkodliwe związki. Szczepionkę stosuje się profilaktycznie, aby pobudzić organizm do wytworzenia własnej odporności.",
    "image": "r04_szczepienie.jpg"
  },
  {
    "id": "R04_ODP_07",
    "section": "Odporność i jej zaburzenia",
    "type": "true_false",
    "prompt": "Odporność nabyta jest bardziej swoista niż wrodzona, ale jej rozwinięcie może trwać od kilku dni do kilku tygodni.",
    "options": null,
    "answer": true,
    "explanation": "Mechanizm odporności nabytej jest precyzyjniejszy i skierowany przeciw konkretnym antygenom, ale rozwija się wolniej niż odporność wrodzona."
  },
  {
    "id": "R04_ODP_08",
    "section": "Odporność i jej zaburzenia",
    "type": "odd_one_out",
    "prompt": "Wskaż element niepasujący do przykładów alergenów: pyłki roślin, sierść zwierząt, orzeszki ziemne, erytrocyty.",
    "options": null,
    "answer": "erytrocyty",
    "explanation": "Pyłki roślin, sierść zwierząt i orzeszki ziemne mogą wywoływać alergie. Erytrocyty są elementem morfotycznym krwi, a nie alergenem."
  },
  {
    "id": "R04_ODP_09",
    "section": "Odporność i jej zaburzenia",
    "type": "scenario",
    "prompt": "Po przeszczepieniu narządu komórki odpornościowe biorcy zaczynają go atakować mimo dużej zgodności tkankowej. Jak nazywa się to zjawisko?",
    "options": [
      "Odrzucenie przeszczepu",
      "Krzepnięcie krwi",
      "Krwotok wewnętrzny",
      "Konflikt serologiczny",
      "Niedokrwistość",
      "Miażdżyca"
    ],
    "answer": 0,
    "explanation": "Jeśli układ odpornościowy rozpozna przeszczepiony narząd jako obcy i go zaatakuje, dochodzi do odrzucenia przeszczepu. Leki po transplantacji ograniczają to ryzyko.",
    "image": "r04_transplantacja.jpg"
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz element morfotyczny z typową liczbą w 1 mm³ krwi.",
    "options": null,
    "left": [
      "erytrocyty",
      "leukocyty",
      "płytki krwi"
    ],
    "right": [
      "4-6,5 mln",
      "4-10 tys.",
      "150-400 tys."
    ],
    "answer": {
      "erytrocyty": "4-6,5 mln",
      "leukocyty": "4-10 tys.",
      "płytki krwi": "150-400 tys."
    },
    "explanation": "Erytrocytów jest najwięcej: 4-6,5 mln/mm³. Leukocytów jest 4-10 tys./mm³, a płytek 150-400 tys./mm³."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Osoba ma grupę krwi 0. Zaznacz poprawne informacje o układzie ABO.",
    "options": [
      "Na erytrocytach nie ma antygenów A ani B",
      "W osoczu są przeciwciała anty-A",
      "W osoczu są przeciwciała anty-B",
      "Na erytrocytach są jednocześnie antygeny A i B",
      "W osoczu nie ma przeciwciał anty-A ani anty-B"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Grupa 0 nie ma na erytrocytach antygenów A ani B, natomiast w osoczu występują przeciwciała anty-A i anty-B."
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która para naczyń stanowi wyjątek od prostego skojarzenia tętnica = krew utlenowana i żyła = krew odtlenowana?",
    "options": [
      "Tętnice płucne i żyły płucne",
      "Aorta i żyły główne",
      "Tętnice kończyn i żyły kończyn",
      "Naczynia wieńcowe i aorta",
      "Tętniczki i żyłki skóry",
      "Naczynia włosowate i żyły główne"
    ],
    "answer": 0,
    "explanation": "Tętnice płucne prowadzą krew odtlenowaną do płuc, a żyły płucne prowadzą krew utlenowaną do lewego przedsionka."
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W spoczynku tętno zdrowego dorosłego wynosi zwykle __________ uderzeń na minutę, a typowe ciśnienie w tętnicy ramiennej to __________ mm Hg.",
    "options": null,
    "answer": [
      "60-80",
      "120/80"
    ],
    "altAnswers": [
      [
        "60-80",
        "60–80"
      ],
      [
        "120/80"
      ]
    ],
    "explanation": "U zdrowego dorosłego tętno wynosi zwykle 60-80 uderzeń na minutę, a ciśnienie w tętnicy ramiennej około 120/80 mm Hg."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się wskaźnik informujący, jaką objętość stanowią elementy morfotyczne w stosunku do objętości całej krwi?",
    "options": null,
    "answer": "hematokryt",
    "explanation": "Hematokryt informuje o objętości elementów morfotycznych w stosunku do objętości całej krwi."
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki, które mogą zwiększać ilość cholesterolu we krwi.",
    "options": [
      "Palenie papierosów",
      "Długotrwały stres",
      "Nadwaga",
      "Brak aktywności fizycznej",
      "Nieodpowiednia dieta",
      "Umiarkowany wysiłek fizyczny"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Do czynników zwiększających ilość cholesterolu zaliczono palenie, długotrwały stres, nadwagę, brak aktywności i nieodpowiednią dietę."
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Odczyn Biernackiego ocenia szybkość opadania krwinek czerwonych, a jego znaczny wzrost towarzyszy głównie procesom zapalnym.",
    "options": null,
    "answer": true,
    "explanation": "OB jest badaniem szybkości opadania erytrocytów w pionowo ustawionej próbce krwi, a jego wyraźny wzrost może towarzyszyć procesom zapalnym."
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która informacja liczbowa dotyczy ilości limfy krążącej w ciele człowieka?",
    "options": [
      "Około 2-4 l",
      "Około 450 ml",
      "Około 5 ml",
      "Około 40 l",
      "Około 120 l",
      "Około 150-400 l"
    ],
    "answer": 0,
    "explanation": "W ciele człowieka krąży około 2-4 litrów limfy."
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W ludzkim organizmie znajduje się około __________ węzłów chłonnych, a grasica zaczyna stopniowo zanikać około __________ roku życia.",
    "options": null,
    "answer": [
      "360-400",
      "20."
    ],
    "altAnswers": [
      [
        "360-400",
        "360–400"
      ],
      [
        "20.",
        "20",
        "dwudziestego"
      ]
    ],
    "explanation": "W organizmie człowieka znajduje się około 360-400 węzłów chłonnych, a grasica zaczyna stopniowo zanikać około 20. roku życia."
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz sytuację z pełną nazwą rodzaju odporności nabytej.",
    "options": null,
    "left": [
      "zachorowanie i samodzielne wytworzenie przeciwciał",
      "szczepienie",
      "przeciwciała przekazane dziecku przez matkę",
      "gotowe przeciwciała w surowicy"
    ],
    "right": [
      "czynna naturalna",
      "czynna sztuczna",
      "bierna naturalna",
      "bierna sztuczna"
    ],
    "answer": {
      "zachorowanie i samodzielne wytworzenie przeciwciał": "czynna naturalna",
      "szczepienie": "czynna sztuczna",
      "przeciwciała przekazane dziecku przez matkę": "bierna naturalna",
      "gotowe przeciwciała w surowicy": "bierna sztuczna"
    },
    "explanation": "Czynna odporność wymaga własnej produkcji przeciwciał, a bierna polega na otrzymaniu gotowych. Naturalna powstaje bez zabiegu medycznego, sztuczna po szczepionce lub surowicy."
  },
  {
    "id": "R04_HARD_11",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Podczas pierwszego kontaktu z nieszkodliwą substancją organizm wytworzył przeciwciała, ale objawy alergii jeszcze się nie pojawiły. Co może zdarzyć się przy kolejnym kontakcie z tą substancją?",
    "options": [
      "Mogą rozwinąć się objawy alergii",
      "Organizm na pewno przestanie wytwarzać przeciwciała",
      "Powstanie konflikt serologiczny",
      "Znikną wszystkie limfocyty T",
      "Krew przestanie krzepnąć",
      "Powstanie blaszka miażdżycowa"
    ],
    "answer": 0,
    "explanation": "Pierwszy kontakt z alergenem prowadzi do wytworzenia skierowanych przeciw niemu przeciwciał. Objawy alergiczne pojawiają się zwykle dopiero po ponownym kontakcie.",
    "image": "r04_test_alergiczny.jpg"
  },
  {
    "id": "R04_HARD_12",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Po jakim czasie od naniesienia alergenów w typowym teście skórnym sprawdza się, czy pojawiło się zaczerwienienie lub bąbel?",
    "options": [
      "Po 15-20 minutach",
      "Po 15-20 sekundach",
      "Po 2-3 godzinach",
      "Po 2-3 dniach",
      "Po tygodniu",
      "Po miesiącu"
    ],
    "answer": 0,
    "explanation": "W skórnym teście alergicznym reakcję ocenia się po około 15-20 minutach."
  },
  {
    "id": "R04_HARD_13",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz narządy lub tkanki należące do najczęściej przeszczepianych.",
    "options": [
      "Nerka",
      "Serce",
      "Płuco",
      "Szpik kostny",
      "Migdałek podniebienny",
      "Aorta"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do najczęściej przeszczepianych narządów lub tkanek należą nerka, serce, płuco i szpik kostny."
  },
  {
    "id": "R04_HARD_14",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "HIV atakuje limfocyty T, a zakażenie może przez około 10 lat nie dawać objawów.",
    "options": null,
    "answer": true,
    "explanation": "HIV atakuje limfocyty T odpowiedzialne za rozpoznawanie antygenów. Przez długi czas, około 10 lat, zakażenie może przebiegać bez objawów."
  }
];

const chapter = {
  id: "r04",
  number: 4,
  title: "Układ krążenia",
  icon: "❤️",
  sectionOrder: [
  "Krew i grupy krwi",
  "Krążenie krwi i naczynia",
  "Serce i jego praca",
  "Higiena i choroby układu krwionośnego",
  "Układ limfatyczny",
  "Odporność i jej zaburzenia"
],
  sectionIcons: {
  "Krew i grupy krwi": "🩸",
  "Krążenie krwi i naczynia": "🔄",
  "Serce i jego praca": "❤️",
  "Higiena i choroby układu krwionośnego": "🩺",
  "Układ limfatyczny": "💧",
  "Odporność i jej zaburzenia": "🛡️"
},
  exercises: ALL_EXERCISES
};

export default chapter;
