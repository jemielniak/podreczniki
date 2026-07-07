// Rozdział 1 - format JS (jak w _SZABLON_ROZDZIALU.js).
// Ten sam rozdział można równie dobrze zapisać jako rozdzialXX.json -
// patrz rozdzial02.json obok. Obrazki: GOŁA nazwa pliku w polu image,
// plik leży w img/ tego katalogu.

const ALL_EXERCISES = [
  {
    id: "C7_R01_SUB_01",
    section: "Substancje wokół nas",
    type: "single_choice",
    prompt: "Która z wymienionych substancji jest pierwiastkiem chemicznym?",
    options: ["Woda", "Tlen", "Dwutlenek węgla", "Sól kuchenna"],
    answer: 1,
    explanation: "Tlen (O) to pierwiastek. Woda (H₂O), dwutlenek węgla (CO₂) i sól kuchenna (NaCl) to związki chemiczne - zbudowane z atomów różnych pierwiastków.",
    image: "c7_probowki.png",
  },
  {
    id: "C7_R01_SUB_02",
    section: "Substancje wokół nas",
    type: "true_false",
    prompt: "Woda destylowana jest mieszaniną.",
    options: null,
    answer: false,
    explanation: "Woda destylowana to substancja czysta - związek chemiczny o wzorze H₂O. Mieszaniną jest np. woda morska (woda + sole).",
  },
  {
    id: "C7_R01_SUB_03",
    section: "Stany skupienia",
    type: "fill_in",
    prompt: "Trzy stany skupienia materii to: stały, ciekły i __________.",
    options: null,
    answer: ["gazowy"],
    altAnswers: [["gazowy", "lotny"]],
    explanation: "Materia występuje w stanie stałym, ciekłym i gazowym. Ta sama substancja może zmieniać stan skupienia, np. lód - woda - para wodna.",
  },
  {
    id: "C7_R01_SUB_04",
    section: "Symbole i wzory",
    type: "match",
    prompt: "Dopasuj substancję do jej symbolu lub wzoru chemicznego.",
    options: null,
    left: ["żelazo", "tlen", "woda"],
    right: ["Fe", "O", "H₂O"],
    answer: { "żelazo": "Fe", "tlen": "O", "woda": "H₂O" },
    explanation: "Fe to symbol żelaza (łac. ferrum), O - tlenu (oxygenium), a H₂O to wzór wody: dwa atomy wodoru i jeden atom tlenu.",
  },
  {
    id: "C7_R01_SUB_05",
    section: "Substancje wokół nas",
    type: "sort",
    prompt: "Podziel pierwiastki na metale i niemetale.",
    options: null,
    items: ["żelazo", "miedź", "siarka", "węgiel"],
    categories: ["Metale", "Niemetale"],
    answer: {
      "Metale": ["żelazo", "miedź"],
      "Niemetale": ["siarka", "węgiel"],
    },
    explanation: "Żelazo i miedź to metale: mają połysk, przewodzą prąd i ciepło. Siarka i węgiel to niemetale.",
  },
];

const rozdzial01 = {
  id: "c7r01",
  number: 1,
  title: "Substancje i ich właściwości",
  icon: "🧪",
  sectionOrder: ["Substancje wokół nas", "Stany skupienia", "Symbole i wzory"],
  sectionIcons: {
    "Substancje wokół nas": "🔬",
    "Stany skupienia": "🧊",
    "Symbole i wzory": "🔤",
  },
  exercises: ALL_EXERCISES,
  kidPrompts: {
    C7_R01_SUB_04: "Połącz nazwę z jej skrótem, np. żelazo to Fe.",
  },
};

export default rozdzial01;
