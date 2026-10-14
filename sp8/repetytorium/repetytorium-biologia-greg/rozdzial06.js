// Skróty sekcji (do identyfikatorów ćwiczeń):
//   GEN  = Genetyka, mitoza i mejoza
//   DNA  = DNA i kod genetyczny
//   DZI  = Dziedziczenie cech
//   MUT  = Mutacje i choroby genetyczne
//   EWO  = Dowody i mechanizmy ewolucji
//   CZW  = Ewolucja człowieka
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R06_GEN_01",
    "section": "Genetyka, mitoza i mejoza",
    "type": "single_choice",
    "prompt": "Która z tych cech człowieka jest nabyta, a nie dziedziczna?",
    "options": [
      "Barwa oczu",
      "Opalenizna",
      "Grupa krwi",
      "Barwa włosów",
      "Rysy twarzy",
      "Długość stopy"
    ],
    "image": "r06_cechy_dziedziczne_nabyte.jpg",
    "answer": 1,
    "explanation": "Opalenizna powstaje pod wpływem środowiska i należy do cech nabytych, które nie są przekazywane potomstwu."
  },
  {
    "id": "R06_GEN_02",
    "section": "Genetyka, mitoza i mejoza",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje mitozy.",
    "options": [
      "Regeneracja uszkodzonych tkanek",
      "Zwiększanie liczby komórek podczas wzrostu",
      "Zastępowanie starych komórek nowymi",
      "Powstawanie czterech gamet",
      "Zmniejszanie liczby chromosomów o połowę"
    ],
    "image": "r06_podzial_komorki.jpg",
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Mitoza uczestniczy we wzroście, regeneracji i zastępowaniu komórek. Tworzenie czterech komórek z połową chromosomów jest związane z mejozą."
  },
  {
    "id": "R06_GEN_03",
    "section": "Genetyka, mitoza i mejoza",
    "type": "true_false",
    "prompt": "Komórka somatyczna człowieka zawiera prawidłowo 46 chromosomów.",
    "options": null,
    "answer": true,
    "explanation": "Komórki somatyczne człowieka mają 46 chromosomów (2n), a gamety – 23 (n)."
  },
  {
    "id": "R06_GEN_04",
    "section": "Genetyka, mitoza i mejoza",
    "type": "fill_in",
    "prompt": "Komórki rozrodcze człowieka mają __________ chromosomy, a komórki somatyczne mają __________ chromosomów.",
    "options": null,
    "answer": [
      "23",
      "46"
    ],
    "explanation": "Gamety człowieka mają haploidalną liczbę 23 chromosomów, a komórki somatyczne diploidalną liczbę 46."
  },
  {
    "id": "R06_GEN_05",
    "section": "Genetyka, mitoza i mejoza",
    "type": "riddle",
    "prompt": "Jak nazywa się podział komórkowy, z którego jednej komórki powstają cztery komórki z połową liczby chromosomów?",
    "options": null,
    "altAnswers": [
      "mejoza",
      "mejozę"
    ],
    "answer": "mejoza",
    "explanation": "Mejoza składa się z dwóch podziałów i prowadzi do powstania czterech haploidalnych komórek potomnych."
  },
  {
    "id": "R06_GEN_06",
    "section": "Genetyka, mitoza i mejoza",
    "type": "odd_one_out",
    "prompt": "Wskaż cechę nabytą: barwa oczu, grupa krwi, rysy twarzy, blizna.",
    "options": null,
    "answer": "blizna",
    "explanation": "Blizna powstaje wskutek urazu. Pozostałe wymienione cechy są dziedziczne."
  },
  {
    "id": "R06_GEN_07",
    "section": "Genetyka, mitoza i mejoza",
    "type": "scenario",
    "prompt": "Po skaleczeniu skóry organizm musi wytworzyć nowe komórki, aby zastąpić uszkodzone. Jaki podział komórkowy umożliwia taką regenerację?",
    "options": [
      "Mejoza",
      "Mitoza",
      "Zapłodnienie",
      "Rekombinacja",
      "Mutacja",
      "Specjacja"
    ],
    "answer": 1,
    "explanation": "Mitoza dostarcza komórek potomnych wykorzystywanych do odnowy i regeneracji tkanek."
  },
  {
    "id": "R06_GEN_08",
    "section": "Genetyka, mitoza i mejoza",
    "type": "match",
    "prompt": "Połącz pojęcie z opisem jego znaczenia.",
    "options": null,
    "left": [
      "Mitoza",
      "Mejoza",
      "Cytokineza"
    ],
    "right": [
      "Podział cytoplazmy",
      "Powstanie dwóch komórek z zachowaniem liczby chromosomów",
      "Powstanie czterech komórek z połową liczby chromosomów"
    ],
    "answer": {
      "Mitoza": "Powstanie dwóch komórek z zachowaniem liczby chromosomów",
      "Mejoza": "Powstanie czterech komórek z połową liczby chromosomów",
      "Cytokineza": "Podział cytoplazmy"
    },
    "explanation": "Mitoza zachowuje liczbę chromosomów, mejoza ją redukuje, a cytokineza jest podziałem cytoplazmy."
  },
  {
    "id": "R06_GEN_09",
    "section": "Genetyka, mitoza i mejoza",
    "type": "sort",
    "prompt": "Podziel cechy na dziedziczne i nabyte.",
    "options": null,
    "items": [
      "Opalenizna",
      "Barwa włosów",
      "Tatuaż",
      "Grupa krwi",
      "Blizna po skaleczeniu",
      "Barwa oczu"
    ],
    "categories": [
      "Cechy dziedziczne",
      "Cechy nabyte"
    ],
    "answer": {
      "Cechy dziedziczne": [
        "Barwa włosów",
        "Grupa krwi",
        "Barwa oczu"
      ],
      "Cechy nabyte": [
        "Opalenizna",
        "Tatuaż",
        "Blizna po skaleczeniu"
      ]
    },
    "explanation": "Cechy dziedziczne są przekazywane potomstwu, natomiast cechy nabyte powstają pod wpływem środowiska."
  },
  {
    "id": "R06_GEN_10",
    "section": "Genetyka, mitoza i mejoza",
    "type": "sequence",
    "prompt": "Ułóż zdarzenia związane z mitozą we właściwej kolejności.",
    "options": null,
    "items": [
      "Cytokineza",
      "Podwojenie DNA przed podziałem",
      "Powstanie dwóch komórek potomnych",
      "Podział jądra komórkowego"
    ],
    "answer": [
      "Podwojenie DNA przed podziałem",
      "Podział jądra komórkowego",
      "Cytokineza",
      "Powstanie dwóch komórek potomnych"
    ],
    "explanation": "Przed mitozą zachodzi replikacja DNA. Następnie dzieli się jądro, potem cytoplazma i powstają dwie komórki potomne."
  },
  {
    "id": "R06_DNA_01",
    "section": "DNA i kod genetyczny",
    "type": "single_choice",
    "prompt": "Jak nazywa się podstawowa jednostka budująca cząsteczkę DNA?",
    "options": [
      "Kodon",
      "Gen",
      "Nukleotyd",
      "Chromosom",
      "Chromatyda",
      "Aminokwas"
    ],
    "image": "r06_nukleotyd_dna.jpg",
    "answer": 2,
    "explanation": "DNA składa się z nukleotydów, a każdy z nich zawiera deoksyrybozę, resztę fosforanową i jedną zasadę azotową."
  },
  {
    "id": "R06_DNA_02",
    "section": "DNA i kod genetyczny",
    "type": "multi_select",
    "prompt": "Wybierz składniki pojedynczego nukleotydu DNA.",
    "options": [
      "Deoksyryboza",
      "Reszta kwasu fosforowego",
      "Jedna zasada azotowa",
      "Aminokwas",
      "Białko",
      "Cytoplazma"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Nukleotyd DNA składa się z cukru deoksyrybozy, reszty kwasu fosforowego i zasady azotowej."
  },
  {
    "id": "R06_DNA_03",
    "section": "DNA i kod genetyczny",
    "type": "true_false",
    "prompt": "Zgodnie z zasadą komplementarności w DNA adenina łączy się z cytozyną.",
    "options": null,
    "answer": false,
    "explanation": "Adenina tworzy parę z tyminą, natomiast guanina z cytozyną."
  },
  {
    "id": "R06_DNA_04",
    "section": "DNA i kod genetyczny",
    "type": "fill_in",
    "prompt": "W DNA adenina łączy się z __________, natomiast guanina z __________.",
    "options": null,
    "altAnswers": [
      [
        "tyminą",
        "tymina",
        "T"
      ],
      [
        "cytozyną",
        "cytozyna",
        "C"
      ]
    ],
    "answer": [
      "tyminą",
      "cytozyną"
    ],
    "explanation": "Dwie nici DNA są komplementarne: A łączy się z T, a G z C."
  },
  {
    "id": "R06_DNA_05",
    "section": "DNA i kod genetyczny",
    "type": "riddle",
    "prompt": "Jak nazywa się proces powielania DNA zachodzący przed podziałem komórki?",
    "options": null,
    "altAnswers": [
      "replikacja DNA",
      "replikacja"
    ],
    "image": "r06_replikacja_dna.jpg",
    "answer": "replikacja DNA",
    "explanation": "Replikacja pozwala utworzyć dwie identyczne cząsteczki DNA przed podziałem."
  },
  {
    "id": "R06_DNA_06",
    "section": "DNA i kod genetyczny",
    "type": "odd_one_out",
    "prompt": "Wskaż element niebędący zasadą azotową DNA: adenina, guanina, deoksyryboza, tymina, cytozyna.",
    "options": null,
    "answer": "deoksyryboza",
    "explanation": "Deoksyryboza to cukier, a pozostałe wymienione elementy są zasadami azotowymi DNA."
  },
  {
    "id": "R06_DNA_07",
    "section": "DNA i kod genetyczny",
    "type": "scenario",
    "prompt": "W pracowni przygotowano model cząsteczki złożonej z dwóch komplementarnych nici tworzących skręconą strukturę. O jakiej cząsteczce mówi opis?",
    "options": [
      "DNA",
      "RNA",
      "Białko",
      "Tłuszcz",
      "Skrobia",
      "Celuloza"
    ],
    "image": "r06_podwojna_helisa_dna.jpg",
    "answer": 0,
    "explanation": "DNA jest cząsteczką dwuniciową o strukturze podwójnej helisy."
  },
  {
    "id": "R06_DNA_08",
    "section": "DNA i kod genetyczny",
    "type": "match",
    "prompt": "Dopasuj pojęcia do definicji.",
    "options": null,
    "left": [
      "Nukleotyd",
      "Gen",
      "Kodon",
      "RNA"
    ],
    "right": [
      "Bierze udział w tworzeniu białek",
      "Trzy kolejne nukleotydy kodujące aminokwas",
      "Jednostka budująca DNA",
      "Odcinek DNA z informacją o jednym białku"
    ],
    "answer": {
      "Nukleotyd": "Jednostka budująca DNA",
      "Gen": "Odcinek DNA z informacją o jednym białku",
      "Kodon": "Trzy kolejne nukleotydy kodujące aminokwas",
      "RNA": "Bierze udział w tworzeniu białek"
    },
    "explanation": "Gen zawiera informację o białku, kodon to trójka nukleotydów, a RNA uczestniczy w wytwarzaniu białek."
  },
  {
    "id": "R06_DNA_09",
    "section": "DNA i kod genetyczny",
    "type": "sort",
    "prompt": "Przyporządkuj składniki nukleotydu DNA do dwóch kategorii.",
    "options": null,
    "items": [
      "Adenina",
      "Deoksyryboza",
      "Tymina",
      "Reszta kwasu fosforowego",
      "Cytozyna",
      "Guanina"
    ],
    "categories": [
      "Zasady azotowe",
      "Inne składniki nukleotydu"
    ],
    "answer": {
      "Zasady azotowe": [
        "Adenina",
        "Tymina",
        "Cytozyna",
        "Guanina"
      ],
      "Inne składniki nukleotydu": [
        "Deoksyryboza",
        "Reszta kwasu fosforowego"
      ]
    },
    "explanation": "Zasady DNA to A, T, C i G, a pozostałe części nukleotydu to deoksyryboza i reszta kwasu fosforowego."
  },
  {
    "id": "R06_DNA_10",
    "section": "DNA i kod genetyczny",
    "type": "sequence",
    "prompt": "Ułóż poziomy organizacji materiału genetycznego od składnika najmniejszego do struktury większej.",
    "options": null,
    "items": [
      "Gen",
      "Chromosom",
      "Zasada azotowa",
      "Nukleotyd"
    ],
    "answer": [
      "Zasada azotowa",
      "Nukleotyd",
      "Gen",
      "Chromosom"
    ],
    "explanation": "Zasada azotowa jest częścią nukleotydu, nukleotydy tworzą odcinki DNA będące genami, a DNA buduje chromosomy."
  },
  {
    "id": "R06_DZI_01",
    "section": "Dziedziczenie cech",
    "type": "single_choice",
    "prompt": "Który z podanych genotypów oznacza heterozygotę w odniesieniu do jednego genu?",
    "options": [
      "AA",
      "aa",
      "Bb",
      "CC",
      "dd",
      "EE"
    ],
    "answer": 2,
    "explanation": "Heterozygota ma dwa różne allele danego genu; Bb jest takim genotypem."
  },
  {
    "id": "R06_DZI_02",
    "section": "Dziedziczenie cech",
    "type": "multi_select",
    "prompt": "Wybierz stwierdzenia zgodne z prawem czystości gamet odkrytym przez Mendla.",
    "options": [
      "Każda gameta zawiera jeden allel danego genu",
      "Heterozygota Aa może wytwarzać gamety A oraz a",
      "Homozygota AA daje gamety z allelem A",
      "Każda gameta zawiera dwa allele każdego genu",
      "Homozygota aa tworzy wyłącznie gamety A"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Pierwsze prawo Mendla mówi, że gameta otrzymuje tylko jeden allel genu; dlatego Aa daje dwa rodzaje gamet, a AA tylko A."
  },
  {
    "id": "R06_DZI_03",
    "section": "Dziedziczenie cech",
    "type": "true_false",
    "prompt": "W przypadku pełnej dominacji osobnik o genotypie Aa ujawnia cechę dominującą.",
    "options": null,
    "answer": true,
    "explanation": "W doświadczeniu Mendla potomstwo Aa z krzyżówki AA × aa miało czerwone kwiaty, ponieważ ta barwa była dominująca."
  },
  {
    "id": "R06_DZI_04",
    "section": "Dziedziczenie cech",
    "type": "fill_in",
    "prompt": "Homozygota dominująca ma genotyp __________, natomiast heterozygota ma genotyp __________.",
    "options": null,
    "altAnswers": [
      [
        "AA"
      ],
      [
        "Aa",
        "aA"
      ]
    ],
    "answer": [
      "AA",
      "Aa"
    ],
    "explanation": "Homozygota ma dwa identyczne allele, a heterozygota dwa różne allele jednego genu."
  },
  {
    "id": "R06_DZI_05",
    "section": "Dziedziczenie cech",
    "type": "riddle",
    "prompt": "Jak nazywa się zespół widocznych cech organizmu?",
    "options": null,
    "altAnswers": [
      "fenotyp"
    ],
    "answer": "fenotyp",
    "explanation": "Fenotyp to zespół cech organizmu, na który wpływają jego genotyp oraz środowisko."
  },
  {
    "id": "R06_DZI_06",
    "section": "Dziedziczenie cech",
    "type": "odd_one_out",
    "prompt": "Wskaż heterozygotę: AA, aa, BB, Bb.",
    "options": null,
    "answer": "Bb",
    "explanation": "Genotyp Bb zawiera dwa różne allele; AA, aa i BB są homozygotami."
  },
  {
    "id": "R06_DZI_07",
    "section": "Dziedziczenie cech",
    "type": "scenario",
    "prompt": "Skrzyżowano groszek o czerwonych kwiatach i genotypie AA z osobnikiem o białych kwiatach i genotypie aa. Barwa czerwona jest dominująca. Jakie będzie pierwsze pokolenie potomstwa?",
    "options": [
      "Same białe osobniki aa",
      "Same czerwone osobniki Aa",
      "Połowa AA i połowa aa",
      "Same czerwone osobniki AA",
      "Połowa białych Aa i połowa czerwonych aa",
      "Same białe osobniki AA"
    ],
    "image": "r06_doswiadczenia_mendla.jpg",
    "answer": 1,
    "explanation": "Gamety rodziców mają odpowiednio allele A i a, więc wszystkie zygoty mają Aa i dominującą czerwoną barwę kwiatów."
  },
  {
    "id": "R06_DZI_08",
    "section": "Dziedziczenie cech",
    "type": "match",
    "prompt": "Połącz genotyp z grupą krwi w układzie AB0.",
    "options": null,
    "left": [
      "I^Ai",
      "I^Bi",
      "I^AI^B",
      "ii"
    ],
    "right": [
      "Grupa 0",
      "Grupa AB",
      "Grupa B",
      "Grupa A"
    ],
    "image": "r06_krzyzowka_genetyczna.jpg",
    "answer": {
      "I^Ai": "Grupa A",
      "I^Bi": "Grupa B",
      "I^AI^B": "Grupa AB",
      "ii": "Grupa 0"
    },
    "explanation": "Allele I^A i I^B kodują antygeny A i B; połączenie obu daje grupę AB, a ii oznacza grupę 0."
  },
  {
    "id": "R06_DZI_09",
    "section": "Dziedziczenie cech",
    "type": "sort",
    "prompt": "Rozdziel genotypy na homozygoty i heterozygoty.",
    "options": null,
    "items": [
      "AA",
      "Bb",
      "cc",
      "Dd",
      "EE",
      "ff"
    ],
    "categories": [
      "Homozygoty",
      "Heterozygoty"
    ],
    "answer": {
      "Homozygoty": [
        "AA",
        "cc",
        "EE",
        "ff"
      ],
      "Heterozygoty": [
        "Bb",
        "Dd"
      ]
    },
    "explanation": "Dwa jednakowe allele to homozygota, natomiast dwa różne allele tworzą heterozygotę."
  },
  {
    "id": "R06_DZI_10",
    "section": "Dziedziczenie cech",
    "type": "sequence",
    "prompt": "Ułóż czynności rozwiązywania krzyżówki jednogenowej w logicznej kolejności.",
    "options": null,
    "items": [
      "Ustalenie możliwych genotypów potomstwa",
      "Określenie genotypów rodziców",
      "Odczytanie możliwych cech potomstwa",
      "Wypisanie rodzajów gamet każdego rodzica"
    ],
    "answer": [
      "Określenie genotypów rodziców",
      "Wypisanie rodzajów gamet każdego rodzica",
      "Ustalenie możliwych genotypów potomstwa",
      "Odczytanie możliwych cech potomstwa"
    ],
    "explanation": "W krzyżówkach Mendla najpierw określa się allele rodziców i ich gamet, a potem możliwe genotypy oraz fenotypy potomstwa."
  },
  {
    "id": "R06_MUT_01",
    "section": "Mutacje i choroby genetyczne",
    "type": "single_choice",
    "prompt": "Która z poniższych zmian jest mutacją chromosomową?",
    "options": [
      "Wypadnięcie jednego nukleotydu",
      "Wstawienie jednego nukleotydu",
      "Trisomia chromosomu 21",
      "Zamiana pojedynczego nukleotydu",
      "Zmiana sekwencji jednego genu",
      "Utrata jednej zasady azotowej w genie"
    ],
    "image": "r06_chromosomy_kariotyp.jpg",
    "answer": 2,
    "explanation": "Trisomia chromosomu 21 jest zmianą liczby chromosomów. Zmiany pojedynczych nukleotydów dotyczą mutacji genowych."
  },
  {
    "id": "R06_MUT_02",
    "section": "Mutacje i choroby genetyczne",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki mutagenne.",
    "options": [
      "Promieniowanie UV",
      "Benzopiren z dymu tytoniowego",
      "Promieniowanie rentgenowskie",
      "Azbest",
      "Podział cytoplazmy",
      "Zasada komplementarności DNA"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do mutagenów należą m.in. promieniowanie UV, promieniowanie rentgenowskie, benzopiren i azbest."
  },
  {
    "id": "R06_MUT_03",
    "section": "Mutacje i choroby genetyczne",
    "type": "true_false",
    "prompt": "Mutacje występujące w komórkach somatycznych są przekazywane potomstwu w procesie rozmnażania płciowego.",
    "options": null,
    "answer": false,
    "explanation": "Dziedziczone mogą być mutacje pojawiające się w komórkach rozrodczych, a nie somatycznych."
  },
  {
    "id": "R06_MUT_04",
    "section": "Mutacje i choroby genetyczne",
    "type": "fill_in",
    "prompt": "Zespół Downa jest związany z trisomią chromosomu numer __________.",
    "options": null,
    "answer": [
      "21"
    ],
    "explanation": "Zespół Downa powstaje w wyniku trisomii chromosomu 21, czyli obecności jego dodatkowej kopii."
  },
  {
    "id": "R06_MUT_05",
    "section": "Mutacje i choroby genetyczne",
    "type": "riddle",
    "prompt": "Jak nazywa się czynnik wywołujący mutację lub zwiększający prawdopodobieństwo jej powstania?",
    "options": null,
    "altAnswers": [
      "czynnik mutagenny",
      "mutagen"
    ],
    "answer": "czynnik mutagenny",
    "explanation": "Czynniki mutagenne obejmują niektóre rodzaje promieniowania, związki chemiczne i czynniki biologiczne."
  },
  {
    "id": "R06_MUT_06",
    "section": "Mutacje i choroby genetyczne",
    "type": "odd_one_out",
    "prompt": "Wskaż mutagen należący do czynników biologicznych: promieniowanie UV, promieniowanie rentgenowskie, azbest, niektóre wirusy.",
    "options": null,
    "answer": "niektóre wirusy",
    "explanation": "Niektóre wirusy zaliczono do mutagenów biologicznych. Promieniowanie i azbest nie są czynnikami biologicznymi."
  },
  {
    "id": "R06_MUT_07",
    "section": "Mutacje i choroby genetyczne",
    "type": "scenario",
    "prompt": "Podczas powstawania gamet doszło do zaburzenia rozdziału chromosomów homologicznych. Jedna gameta otrzymała oba chromosomy z pary, a druga żadnego. Do którego rodzaju mutacji może to doprowadzić?",
    "options": [
      "Mutacji chromosomowej",
      "Mutacji genowej polegającej na wstawieniu nukleotydu",
      "Mutacji genowej polegającej na wypadnięciu nukleotydu",
      "Braku zmian materiału genetycznego",
      "Zmiany wyłącznie cechy nabytej",
      "Replikacji prawidłowego DNA"
    ],
    "answer": 0,
    "explanation": "Nieprawidłowe rozdzielenie chromosomów podczas mejozy zmienia ich liczbę w gametach, a więc może prowadzić do mutacji chromosomowej."
  },
  {
    "id": "R06_MUT_08",
    "section": "Mutacje i choroby genetyczne",
    "type": "match",
    "prompt": "Dopasuj chorobę genetyczną do jej charakterystycznej cechy.",
    "options": null,
    "left": [
      "Zespół Downa",
      "Hemofilia",
      "Mukowiscydoza",
      "Fenyloketonuria"
    ],
    "right": [
      "Zaburzenia metabolizmu fenyloalaniny",
      "Gromadzenie się gęstego śluzu i nawracające zakażenia dróg oddechowych",
      "Zaburzenia krzepnięcia krwi",
      "Trisomia chromosomu 21"
    ],
    "answer": {
      "Zespół Downa": "Trisomia chromosomu 21",
      "Hemofilia": "Zaburzenia krzepnięcia krwi",
      "Mukowiscydoza": "Gromadzenie się gęstego śluzu i nawracające zakażenia dróg oddechowych",
      "Fenyloketonuria": "Zaburzenia metabolizmu fenyloalaniny"
    },
    "explanation": "Zespół Downa wynika z trisomii chromosomu 21, hemofilia powoduje zaburzenia krzepnięcia, mukowiscydoza sprzyja gromadzeniu gęstego śluzu, a fenyloketonuria zaburza przemianę fenyloalaniny."
  },
  {
    "id": "R06_MUT_09",
    "section": "Mutacje i choroby genetyczne",
    "type": "sort",
    "prompt": "Przyporządkuj zmiany do mutacji genowych lub chromosomowych.",
    "options": null,
    "items": [
      "Wypadnięcie nukleotydu",
      "Odwrócenie fragmentu chromosomu",
      "Wstawienie nukleotydu",
      "Zmiana liczby chromosomów",
      "Przeniesienie fragmentu chromosomu",
      "Zmiana sekwencji nukleotydów genu"
    ],
    "categories": [
      "Mutacje genowe",
      "Mutacje chromosomowe"
    ],
    "image": "r06_rodzaje_mutacji.jpg",
    "answer": {
      "Mutacje genowe": [
        "Wypadnięcie nukleotydu",
        "Wstawienie nukleotydu",
        "Zmiana sekwencji nukleotydów genu"
      ],
      "Mutacje chromosomowe": [
        "Odwrócenie fragmentu chromosomu",
        "Zmiana liczby chromosomów",
        "Przeniesienie fragmentu chromosomu"
      ]
    },
    "explanation": "Mutacje genowe zmieniają sekwencję nukleotydów, a chromosomowe dotyczą budowy lub liczby chromosomów."
  },
  {
    "id": "R06_MUT_10",
    "section": "Mutacje i choroby genetyczne",
    "type": "sequence",
    "prompt": "Ułóż możliwy przebieg skutków nieusuniętej mutacji genowej.",
    "options": null,
    "items": [
      "Synteza nieprawidłowego białka",
      "Zmiana sekwencji nukleotydów",
      "Brak skutecznej naprawy DNA",
      "Błędny odczyt informacji genetycznej"
    ],
    "answer": [
      "Zmiana sekwencji nukleotydów",
      "Brak skutecznej naprawy DNA",
      "Błędny odczyt informacji genetycznej",
      "Synteza nieprawidłowego białka"
    ],
    "explanation": "Enzymy naprawcze mogą usuwać uszkodzenia DNA. Jeśli zmiana pozostanie, może dojść do błędnego odczytu genu i wytworzenia nieprawidłowego białka."
  },
  {
    "id": "R06_EWO_01",
    "section": "Dowody i mechanizmy ewolucji",
    "type": "single_choice",
    "prompt": "Jak nazywa się proces powstawania nowych, odrębnych gatunków?",
    "options": [
      "Replikacja",
      "Specjacja",
      "Mitoza",
      "Cytokineza",
      "Mutageneza",
      "Rekombinacja"
    ],
    "answer": 1,
    "explanation": "Specjacja to proces prowadzący do wyodrębniania się nowych gatunków."
  },
  {
    "id": "R06_EWO_02",
    "section": "Dowody i mechanizmy ewolucji",
    "type": "multi_select",
    "prompt": "Które przykłady należą do bezpośrednich dowodów ewolucji?",
    "options": [
      "Skamieniałości",
      "Organizmy zachowane w bursztynie",
      "Relikty zwane żywymi skamieniałościami",
      "Ogniwa pośrednie",
      "Narządy szczątkowe",
      "Podobieństwa narządów homologicznych"
    ],
    "image": "r06_skamienialosci.jpg",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Skamieniałości, inkluzje, relikty i formy pośrednie to dowody bezpośrednie; narządy szczątkowe i homologiczne to dowody pośrednie."
  },
  {
    "id": "R06_EWO_03",
    "section": "Dowody i mechanizmy ewolucji",
    "type": "true_false",
    "prompt": "Narządy homologiczne wskazują na wspólne pochodzenie ewolucyjne porównywanych organizmów.",
    "options": null,
    "image": "r06_narzady_homologiczne.jpg",
    "answer": true,
    "explanation": "Homologia oznacza podobieństwo budowy lub przebiegu procesów u organizmów pochodzących od wspólnego przodka."
  },
  {
    "id": "R06_EWO_04",
    "section": "Dowody i mechanizmy ewolucji",
    "type": "fill_in",
    "prompt": "Owad zatopiony w dawnej żywicy może zachować się w __________, a takie zachowane szczątki stanowią __________ dowód ewolucji.",
    "options": null,
    "altAnswers": [
      [
        "bursztynie",
        "bursztyn"
      ],
      [
        "bezpośredni",
        "bezposredni"
      ]
    ],
    "answer": [
      "bursztynie",
      "bezpośredni"
    ],
    "explanation": "Zatopiony w bursztynie owad to inkluzja, zaliczana do bezpośrednich dowodów ewolucji."
  },
  {
    "id": "R06_EWO_05",
    "section": "Dowody i mechanizmy ewolucji",
    "type": "riddle",
    "prompt": "Jaki dziewiętnastowieczny badacz stworzył teorię ewolucji na podstawie obserwacji i porównywania gatunków?",
    "options": null,
    "altAnswers": [
      "Karol Darwin",
      "Darwin",
      "Charles Darwin"
    ],
    "answer": "Karol Darwin",
    "explanation": "Karol Darwin opracował w XIX wieku teorię ewolucji przez dobór naturalny."
  },
  {
    "id": "R06_EWO_06",
    "section": "Dowody i mechanizmy ewolucji",
    "type": "odd_one_out",
    "prompt": "Wskaż przykład doboru sztucznego: hodowca wybiera szybkie konie do rozrodu, przeżywają ciemne owady na ciemnym tle, lepiej ukryte zwierzęta unikają drapieżnika, najlepiej przystosowane osobniki częściej się rozmnażają.",
    "options": null,
    "answer": "hodowca wybiera szybkie konie do rozrodu",
    "explanation": "Dobór sztuczny zależy od wyborów człowieka; w doborze naturalnym selekcjonerem jest środowisko."
  },
  {
    "id": "R06_EWO_07",
    "section": "Dowody i mechanizmy ewolucji",
    "type": "scenario",
    "prompt": "Badacz znajduje szczątki organizmu mającego skrzydła i pióra, ale też szczęki z zębami oraz długi ogon. Jaka to forma pośrednia?",
    "options": [
      "Tiktaalika",
      "Ichtiostegę",
      "Archeopteryksa",
      "Latimerię",
      "Dziobaka",
      "Eohippusa"
    ],
    "answer": 2,
    "explanation": "Archeopteryks łączył cechy ptaków (pióra, skrzydła) i gadów (zęby, długi ogon, pazury)."
  },
  {
    "id": "R06_EWO_08",
    "section": "Dowody i mechanizmy ewolucji",
    "type": "match",
    "prompt": "Połącz pojęcia ewolucyjne z ich znaczeniem.",
    "options": null,
    "left": [
      "Narządy szczątkowe",
      "Homologia",
      "Analogia",
      "Endemit"
    ],
    "right": [
      "Gatunek występujący naturalnie tylko na określonym obszarze",
      "Pozostałość narządu silniej rozwiniętego u przodków",
      "Podobieństwo wynikające ze wspólnego pochodzenia",
      "Podobieństwo u organizmów bez wspólnego bliskiego pochodzenia"
    ],
    "answer": {
      "Narządy szczątkowe": "Pozostałość narządu silniej rozwiniętego u przodków",
      "Homologia": "Podobieństwo wynikające ze wspólnego pochodzenia",
      "Analogia": "Podobieństwo u organizmów bez wspólnego bliskiego pochodzenia",
      "Endemit": "Gatunek występujący naturalnie tylko na określonym obszarze"
    },
    "explanation": "Narządy szczątkowe, narządy analogiczne i homologiczne oraz endemity pomagają badać ewolucję organizmów."
  },
  {
    "id": "R06_EWO_09",
    "section": "Dowody i mechanizmy ewolucji",
    "type": "sort",
    "prompt": "Podziel przykłady na bezpośrednie i pośrednie dowody ewolucji.",
    "options": null,
    "items": [
      "Odcisk paproci w skale",
      "Narządy szczątkowe",
      "Owad zachowany w bursztynie",
      "Narządy homologiczne",
      "Relikty",
      "Jedność planu budowy"
    ],
    "categories": [
      "Dowody bezpośrednie",
      "Dowody pośrednie"
    ],
    "answer": {
      "Dowody bezpośrednie": [
        "Odcisk paproci w skale",
        "Owad zachowany w bursztynie",
        "Relikty"
      ],
      "Dowody pośrednie": [
        "Narządy szczątkowe",
        "Narządy homologiczne",
        "Jedność planu budowy"
      ]
    },
    "explanation": "Do bezpośrednich dowodów ewolucji należą np. skamieniałości, a do pośrednich – podobieństwa w budowie organizmów."
  },
  {
    "id": "R06_EWO_10",
    "section": "Dowody i mechanizmy ewolucji",
    "type": "sequence",
    "prompt": "Ułóż zdarzenia opisujące działanie doboru naturalnego w logicznej kolejności.",
    "options": null,
    "items": [
      "Przeżycie i rozmnażanie lepiej przystosowanych osobników",
      "Konkurencja o ograniczone zasoby",
      "Pojawianie się potomstwa o zróżnicowanych cechach",
      "Przekazywanie korzystnych cech kolejnym pokoleniom"
    ],
    "image": "r06_dobor_naturalny.jpg",
    "answer": [
      "Pojawianie się potomstwa o zróżnicowanych cechach",
      "Konkurencja o ograniczone zasoby",
      "Przeżycie i rozmnażanie lepiej przystosowanych osobników",
      "Przekazywanie korzystnych cech kolejnym pokoleniom"
    ],
    "explanation": "Dobór naturalny sprzyja przeżywaniu i rozmnażaniu się osobników najlepiej dostosowanych do warunków środowiska."
  },
  {
    "id": "R06_CZW_01",
    "section": "Ewolucja człowieka",
    "type": "single_choice",
    "prompt": "Który gatunek człowieka wytwarzał proste narzędzia kamienne i pojawił się około 1,8 mln lat temu?",
    "options": [
      "Homo sapiens",
      "Homo erectus",
      "Homo habilis",
      "Sahelantrop",
      "Neandertalczyk",
      "Australopitek"
    ],
    "answer": 2,
    "explanation": "Człowiek zręczny (Homo habilis) pojawił się w Afryce wschodniej około 1,8 miliona lat temu i wytwarzał narzędzia kamienne."
  },
  {
    "id": "R06_CZW_02",
    "section": "Ewolucja człowieka",
    "type": "multi_select",
    "prompt": "Zaznacz cechy budowy odróżniające człowieka od szympansa.",
    "options": [
      "Krótka i szeroka miednica",
      "Stopa wysklepiona bez przeciwstawnego palucha",
      "Kończyny dolne dłuższe od górnych",
      "Obecna bródka",
      "Stopa płaska z przeciwstawnym paluchem",
      "Pojemność mózgoczaszki około 500 cm³"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W porównaniu z szympansem człowiek ma krótszą i szerszą miednicę, wysklepioną stopę, wyraźniejszą bródkę i proporcjonalnie dłuższe kończyny dolne."
  },
  {
    "id": "R06_CZW_03",
    "section": "Ewolucja człowieka",
    "type": "true_false",
    "prompt": "Homo sapiens pojawił się około 200 tysięcy lat temu w Afryce.",
    "options": null,
    "answer": true,
    "explanation": "W przyjętej w tym zestawie chronologii Homo sapiens pojawił się w Afryce około 200 tysięcy lat temu."
  },
  {
    "id": "R06_CZW_04",
    "section": "Ewolucja człowieka",
    "type": "fill_in",
    "prompt": "Wiek szczątków australopiteka nazwanego Lucy oszacowano na około __________ mln lat, a odkryto je w roku __________.",
    "options": null,
    "altAnswers": [
      [
        "3,2",
        "3.2"
      ],
      [
        "1974"
      ]
    ],
    "answer": [
      "3,2",
      "1974"
    ],
    "explanation": "Lucy odkryto w północnej Etiopii w 1974 roku; na podstawie izotopów określono jej wiek na około 3,2 mln lat."
  },
  {
    "id": "R06_CZW_05",
    "section": "Ewolucja człowieka",
    "type": "riddle",
    "prompt": "Jaką krótką nazwę nadano samicy Australopithecus afarensis odkrytej w Etiopii w 1974 roku?",
    "options": null,
    "altAnswers": [
      "Lucy"
    ],
    "image": "r06_szkielet_lucy.jpg",
    "answer": "Lucy",
    "explanation": "Szczątki Lucy pozwoliły naukowcom odtworzyć znaczną część szkieletu australopiteka."
  },
  {
    "id": "R06_CZW_06",
    "section": "Ewolucja człowieka",
    "type": "odd_one_out",
    "prompt": "Wskaż organizm niebędący jedną z omawianych form człowieka: Homo habilis, Homo erectus, Homo sapiens, latimeria.",
    "options": null,
    "answer": "latimeria",
    "explanation": "Latimeria to relikt ewolucyjny, natomiast pozostałe pozycje należą do gatunków rodzaju Homo."
  },
  {
    "id": "R06_CZW_07",
    "section": "Ewolucja człowieka",
    "type": "scenario",
    "prompt": "W Europie znaleziono szczątki człowieka, który żył mniej więcej od 250 tysięcy do 40 tysięcy lat temu. Która forma ludzka pasuje do tego przedziału?",
    "options": [
      "Sahelantrop",
      "Homo habilis",
      "Australopitek",
      "Neandertalczyk",
      "Homo erectus",
      "Homo sapiens"
    ],
    "answer": 3,
    "explanation": "Neandertalczycy żyli około 250–40 tysięcy lat temu."
  },
  {
    "id": "R06_CZW_08",
    "section": "Ewolucja człowieka",
    "type": "match",
    "prompt": "Połącz formę człowiekowatych z jej charakterystyczną cechą.",
    "options": null,
    "left": [
      "Australopitek",
      "Homo habilis",
      "Homo erectus",
      "Homo sapiens"
    ],
    "right": [
      "Obecnie jedyny gatunek człowieka na Ziemi",
      "Dwunożna forma przystosowana do życia na sawannie",
      "Wytwarzanie narzędzi kamiennych",
      "Wędrówka z Afryki do Eurazji"
    ],
    "image": "r06_formy_przedludzkie.jpg",
    "answer": {
      "Australopitek": "Dwunożna forma przystosowana do życia na sawannie",
      "Homo habilis": "Wytwarzanie narzędzi kamiennych",
      "Homo erectus": "Wędrówka z Afryki do Eurazji",
      "Homo sapiens": "Obecnie jedyny gatunek człowieka na Ziemi"
    },
    "explanation": "Kolejne formy człowiekowatych różniły się środowiskiem życia, zdolnościami i zasięgiem wędrówek."
  },
  {
    "id": "R06_CZW_09",
    "section": "Ewolucja człowieka",
    "type": "sort",
    "prompt": "Przyporządkuj cechy budowy szympansowi albo człowiekowi.",
    "options": null,
    "items": [
      "Brak bródki",
      "Stopa wysklepiona",
      "Miednica długa i wąska",
      "Miednica krótka i szeroka",
      "Przeciwstawny paluch stopy",
      "Obecna bródka"
    ],
    "categories": [
      "Szympans",
      "Człowiek"
    ],
    "image": "r06_czlowiek_szympans.jpg",
    "answer": {
      "Szympans": [
        "Brak bródki",
        "Miednica długa i wąska",
        "Przeciwstawny paluch stopy"
      ],
      "Człowiek": [
        "Stopa wysklepiona",
        "Miednica krótka i szeroka",
        "Obecna bródka"
      ]
    },
    "explanation": "Człowiek i szympans różnią się m.in. budową czaszki, stopy i miednicy."
  },
  {
    "id": "R06_CZW_10",
    "section": "Ewolucja człowieka",
    "type": "sequence",
    "prompt": "Ułóż formy człowiekowatych według czasu ich pojawienia się, od najstarszej do najmłodszej.",
    "options": null,
    "items": [
      "Homo sapiens",
      "Australopiteki",
      "Homo erectus",
      "Sahelantrop",
      "Neandertalczyk",
      "Homo habilis"
    ],
    "answer": [
      "Sahelantrop",
      "Australopiteki",
      "Homo habilis",
      "Homo erectus",
      "Neandertalczyk",
      "Homo sapiens"
    ],
    "explanation": "Jest to kolejność pierwszego pojawienia się poszczególnych form, a nie prosta linia bezpośrednich przodków; część tych form współistniała."
  },
  {
    "id": "R06_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W którym roku James Watson i Francis Crick ogłosili ustalenie budowy przestrzennej DNA?",
    "options": [
      "1935",
      "1947",
      "1953",
      "1961",
      "1974",
      "1980"
    ],
    "answer": 2,
    "explanation": "W 1953 roku James Watson i Francis Crick przedstawili model struktury DNA."
  },
  {
    "id": "R06_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W ludzkiej komórce somatycznej występują __________ pary autosomów oraz __________ para chromosomów płci.",
    "options": null,
    "answer": [
      "22",
      "1"
    ],
    "explanation": "Spośród 23 par chromosomów człowieka 22 pary to autosomy, a jedna para to chromosomy płci."
  },
  {
    "id": "R06_HARD_03",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które określenia są cechami kodu genetycznego?",
    "options": [
      "Trójkowy",
      "Uniwersalny",
      "Wieloznaczny",
      "Zdeterminowany",
      "Dwójkowy",
      "Zmieniający znaczenie kodonów w każdym gatunku"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do cech kodu genetycznego należą trójkowość, uniwersalność, wieloznaczność i zdeterminowanie."
  },
  {
    "id": "R06_HARD_04",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Matka ma grupę krwi A i genotyp I^Ai, a ojciec grupę B i genotyp I^Bi. Jakie jest prawdopodobieństwo, że ich dziecko będzie miało grupę AB?",
    "options": [
      "0%",
      "25%",
      "50%",
      "75%",
      "100%",
      "Nie można ustalić z tych genotypów"
    ],
    "image": "r06_krzyzowka_genetyczna.jpg",
    "answer": 1,
    "explanation": "Gamety matki to I^A lub i, a ojca I^B lub i. Jedna z czterech jednakowo prawdopodobnych kombinacji daje I^AI^B, czyli grupę AB."
  },
  {
    "id": "R06_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Dopasuj genotyp do możliwych alleli zawartych w jego gametach.",
    "options": null,
    "left": [
      "AA",
      "aa",
      "Aa",
      "BB"
    ],
    "right": [
      "Tylko B",
      "Tylko a",
      "A lub a",
      "Tylko A"
    ],
    "answer": {
      "AA": "Tylko A",
      "aa": "Tylko a",
      "Aa": "A lub a",
      "BB": "Tylko B"
    },
    "explanation": "Zgodnie z prawem czystości gamet każda gameta zawiera tylko jeden allel danego genu."
  },
  {
    "id": "R06_HARD_06",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż zdarzenia od przygotowania do mejozy aż do powstania gamet.",
    "options": null,
    "items": [
      "Drugi podział mejotyczny",
      "Replikacja DNA przed podziałami",
      "Powstanie czterech komórek haploidalnych",
      "Pierwszy podział mejotyczny"
    ],
    "answer": [
      "Replikacja DNA przed podziałami",
      "Pierwszy podział mejotyczny",
      "Drugi podział mejotyczny",
      "Powstanie czterech komórek haploidalnych"
    ],
    "explanation": "Przed podziałem materiał genetyczny jest powielany, a mejoza obejmuje dwa kolejne podziały i daje cztery komórki haploidalne."
  },
  {
    "id": "R06_HARD_07",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która gameta jest odpowiedzialna za pojawienie się chromosomu Y w zygocie człowieka?",
    "options": [
      "Komórka jajowa z chromosomem Y",
      "Plemnik z chromosomem Y",
      "Komórka jajowa z chromosomem X",
      "Plemnik z chromosomem X",
      "Każda komórka somatyczna",
      "Żadna z komórek rozrodczych"
    ],
    "answer": 1,
    "explanation": "Komórka jajowa zawsze przekazuje X, a plemnik może przekazać X albo Y; plemnik z Y tworzy układ XY."
  },
  {
    "id": "R06_HARD_08",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż element niebędący narządem szczątkowym człowieka: kość ogonowa, zęby mądrości, mięśnie poruszające małżowiną uszną, przeciwstawny kciuk.",
    "options": null,
    "answer": "przeciwstawny kciuk",
    "explanation": "Przeciwstawny kciuk jest cechą naczelnych, natomiast pozostałe wymienione elementy są narządami szczątkowymi człowieka."
  },
  {
    "id": "R06_HARD_09",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Wybierz organizmy stanowiące przykłady ogniw pośrednich ewolucji.",
    "options": [
      "Tiktaalik",
      "Ichtiostega",
      "Archeopteryks",
      "Latimeria",
      "Dziobak",
      "Eohippus"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Tiktaalik i ichtiostega łączyły cechy ryb i płazów, a archeopteryks – ptaków i gadów; latimeria i dziobak to relikty ewolucyjne."
  },
  {
    "id": "R06_HARD_10",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Eohippus, przodek konia, żył około __________ mln lat temu i mierzył około __________ cm w kłębie.",
    "options": null,
    "altAnswers": [
      [
        "50"
      ],
      [
        "30-40",
        "30–40",
        "30 do 40"
      ]
    ],
    "answer": [
      "50",
      "30-40"
    ],
    "explanation": "Eohippus był niewielkim przodkiem konia, żyjącym około 50 mln lat temu i mierzącym około 30–40 cm w kłębie."
  },
  {
    "id": "R06_HARD_11",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz przykład z kategorią dowodu ewolucji.",
    "options": null,
    "left": [
      "Owad w bursztynie",
      "Zęby mądrości człowieka",
      "Ichtiostega",
      "Podobieństwo kończyny nietoperza i ręki człowieka"
    ],
    "right": [
      "Narządy homologiczne",
      "Ogniwo pośrednie",
      "Inkluzja",
      "Narząd szczątkowy"
    ],
    "answer": {
      "Owad w bursztynie": "Inkluzja",
      "Zęby mądrości człowieka": "Narząd szczątkowy",
      "Ichtiostega": "Ogniwo pośrednie",
      "Podobieństwo kończyny nietoperza i ręki człowieka": "Narządy homologiczne"
    },
    "explanation": "Skamieniałości oraz podobieństwa anatomiczne pozwalają badać pokrewieństwo i historię ewolucji organizmów."
  },
  {
    "id": "R06_HARD_12",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W muzeum pokazano rekonstrukcję zwierzęcia, którego skamieniałość łączy cechy gadów i ptaków. Który zestaw cech najlepiej pasuje do jego opisu?",
    "options": [
      "Pióra i skrzydła oraz szczęki z zębami i długi ogon",
      "Płetwy i łuski oraz palczaste kończyny",
      "Sierść i łożysko oraz pazury",
      "Wysklepiona stopa oraz przeciwstawny kciuk",
      "Zredukowany ogon i chwytne ręce",
      "Długa miednica i szerokie stopy"
    ],
    "answer": 0,
    "explanation": "Archeopteryks wykazywał cechy ptasie (skrzydła, pióra) oraz gadzie (zęby, pazury, długi ogon)."
  },
  {
    "id": "R06_HARD_13",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż fakty historyczne dotyczące rozwoju badań genetycznych w porządku chronologicznym.",
    "options": null,
    "items": [
      "Odkrycie szczątków Lucy w Etiopii (1974)",
      "Prace Mendla nad dziedziczeniem grochu (XIX wiek)",
      "Ogłoszenie modelu budowy DNA (1953)",
      "Początek rozwoju genetyki jako nauki (początek XX wieku)"
    ],
    "answer": [
      "Prace Mendla nad dziedziczeniem grochu (XIX wiek)",
      "Początek rozwoju genetyki jako nauki (początek XX wieku)",
      "Ogłoszenie modelu budowy DNA (1953)",
      "Odkrycie szczątków Lucy w Etiopii (1974)"
    ],
    "explanation": "Do ważnych wydarzeń należą doświadczenia Mendla w XIX wieku, rozwój genetyki na początku XX wieku, opis struktury DNA w 1953 roku i odkrycie szczątków Lucy w 1974 roku."
  },
  {
    "id": "R06_HARD_14",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jak bardzo podobne są genomy człowieka i szympansa?",
    "options": [
      "Około 50%",
      "Około 65%",
      "Około 75%",
      "Około 85%",
      "Około 95%",
      "Około 99%"
    ],
    "answer": 5,
    "explanation": "Podobieństwo genomów człowieka i szympansa wynosi około 99% według wartości przyjętej w zadaniu."
  },
  {
    "id": "R06_HARD_15",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Kobieta jest zdrową nosicielką recesywnej choroby sprzężonej z chromosomem X, a ojciec jest zdrowy. Co można stwierdzić o ich córkach przy takim sposobie dziedziczenia?",
    "options": [
      "Wszystkie córki będą chore",
      "Wszystkie córki będą zdrowe, ale niektóre mogą być nosicielkami",
      "Wszystkie córki będą nosicielkami i chore",
      "Połowa córek będzie chora",
      "Żadna córka nie odziedziczy chromosomu X od ojca",
      "Każda córka odziedziczy chromosom Y od ojca"
    ],
    "answer": 1,
    "explanation": "Zdrowy ojciec przekazuje córce prawidłowy chromosom X; córki nie zachorują w opisanym modelu, ale niektóre mogą otrzymać od matki allel choroby."
  }
];

const KID_PROMPTS = {
  "R06_GEN_01": "Która cecha pojawia się w życiu i nie jest odziedziczona po rodzicach?",
  "R06_GEN_04": "Ile chromosomów ma ludzka komórka rozrodcza, a ile komórka ciała?",
  "R06_DNA_02": "Z czego składa się jeden nukleotyd DNA?",
  "R06_DNA_05": "Jak nazywa się kopiowanie DNA przed podziałem komórki?",
  "R06_DZI_03": "Czy przy genotypie Aa widać cechę dominującą?",
  "R06_DZI_07": "Jakie kwiaty będą miały rośliny powstałe ze skrzyżowania AA i aa, gdy A oznacza czerwień?",
  "R06_MUT_03": "Czy zmiany DNA w komórkach ciała przechodzą na dzieci?",
  "R06_EWO_01": "Jak nazywamy powstawanie nowych gatunków?",
  "R06_CZW_05": "Jak nazwano słynny szkielet australopiteka znaleziony w Etiopii?",
  "R06_CZW_10": "Ułóż formy człowiekowatych od tych, które pojawiły się najwcześniej."
};

const chapter = {
  id: "r06",
  number: 6,
  title: "Genetyka i ewolucja",
  icon: "🧬",
  sectionOrder: [
    "Genetyka, mitoza i mejoza",
    "DNA i kod genetyczny",
    "Dziedziczenie cech",
    "Mutacje i choroby genetyczne",
    "Dowody i mechanizmy ewolucji",
    "Ewolucja człowieka"
  ],
  sectionIcons: {
    "Genetyka, mitoza i mejoza": "🧬",
    "DNA i kod genetyczny": "🔬",
    "Dziedziczenie cech": "🌱",
    "Mutacje i choroby genetyczne": "🩺",
    "Dowody i mechanizmy ewolucji": "🦴",
    "Ewolucja człowieka": "🧑"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
