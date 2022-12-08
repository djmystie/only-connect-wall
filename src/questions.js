const roundOne= {
    twoReeds: [
        {id:0, title: "Oscar the Grouch's trash can"},
        {id:1, title: "Mary Poppins' carpet bag"},
        {id:2, title: "Snoopy's kennel"},
        {id:4, title: "The TARDIS"},
    ],
    lion: [
        {id:0, title: "Milan"},
        {id:1, title: "Your Party"},
        {id:2, title: "My Shirt"},
        {id:4, title: "This Song"},
    ],
    twistedFlax: [
        {id:0, title: "Seven consonants"},
        {id:1, title: "Two vowels"},
        {id:2, title: "Three syllables"},
        {id:4, title: "Seven letters"},
    ],
    hornedViper: [
        {id:0, title: "Pink Pinky"},
        {id:1, title: "Orange Clyde"},
        {id:2, title: "Red Blinky"},
        {id:4, title: "Cyan Inky"},
    ],
    water: [
        {id:0, title: "Icelandic: Bra Bra"},
        {id:1, title: "Danish: Rap Rap"},
        {id:2, title: "French: Coin Coin"},
        {id:4, title: "Greek: Kouak Kouak"},
    ],
    eyeOfHorus: [
        {id:0, title: "Two no.1 Artists: Manic Street Preachers"},
        {id:1, title: "Two Elements: Platinum"},
        {id:2, title: "Two Greek letters: Upsilon"},
        {id:4, title: "Two Countries: Somalia"},
    ],
    demo: [
        {id:0, title: "Swiss Cheese"},
        {id:2, title: "Potatoes"},
        {id:3, title: "Hurricane"},
        {id:4, title: "Needle"},
    ]
}

const roundTwo= {
    twoReeds: [
        {id:0, title: "arMs"},
        {id:1, title: "hEart"},
        {id:2, title: "neVus"},
        {id:4, title: "(e.g.) curry Me"},
    ],
    lion: [
        {id:0, title: "Elder daughter improvises music"},
        {id:1, title: "Mother and younger daughter visit supermarket"},
        {id:2, title: "Father leaves power plant"},
        {id:4, title: "Son writes lines at school"},
    ],
    twistedFlax: [
        {id:0, title: "N12"},
        {id:1, title: "E3"},
        {id:2, title: "S6"},
        {id:4, title: "W9"},
    ],
    hornedViper: [
        {id:0, title: "1st: Chelsea"},
        {id:1, title: "1st: Barbara"},
        {id:2, title: "1st: Malia"},
        {id:4, title: "1st: Donald Jr."},
    ],
    water: [
        {id:0, title: "Mastercard"},
        {id:1, title: "Rubik's Magic"},
        {id:2, title: "Audi"},
        {id:4, title: "Olympic Flag"},
    ],
    eyeOfHorus: [
        {id:0, title: "Ageing"},
        {id:1, title: "Aluminium"},
        {id:2, title: "Foetus"},
        {id:4, title: "(e.g.) Colour"},
    ],
    demo: [
        {id:0, title: "A talking ..."},
        {id:1, title: "To rub ..."},
        {id:2, title: "The bee's ..."},
        {id:3, title: "(e.g.) Twinkle ..."},
    ]
}
const wallQuestions = {
    lion: [
      { id: 0, group: 1, title: "Galore" },
      { id: 1, group: 1, title: "Goodnight" },
      { id: 2, group: 1, title: "Ryder" },
      { id: 3, group: 1, title: "Suzuki" },
      { id: 4, group: 2, title: "Triumph" },
      { id: 5, group: 2, title: "Aprilia" },
      { id: 6, group: 2, title: "Ducati" },
      { id: 7, group: 2, title: "Indian" },
      { id: 8, group: 3, title: "Stanley" },
      { id: 9, group: 3, title: "Calcutta" },
      { id: 10, group: 3, title: "Melbourne" },
      { id: 11, group: 3, title: "Fed" },
      { id: 12, group: 4, title: "of Spain" },
      { id: 13, group: 4, title: "Elizabeth" },
      { id: 14, group: 4, title: "Harcourt" },
      { id: 15, group: 4, title: "Talbot" },
    ],
    water: [
      { id: 0, group: 1, title: "Dawn" },
      { id: 1, group: 1, title: "Fount" },
      { id: 2, group: 1, title: "Seed" },
      { id: 3, group: 1, title: "Genesis" },
      { id: 4, group: 2, title: "Question" },
      { id: 5, group: 2, title: "Birth" },
      { id: 6, group: 2, title: "Trade" },
      { id: 7, group: 2, title: "Water" },
      { id: 8, group: 3, title: "Plot" },
      { id: 9, group: 3, title: "Belt" },
      { id: 10, group: 3, title: "Parcel" },
      { id: 11, group: 3, title: "Stretch" },
      { id: 12, group: 4, title: "Tract" },
      { id: 13, group: 4, title: "Fruit" },
      { id: 14, group: 4, title: "Barb" },
      { id: 15, group: 4, title: "Sect" },
    ],
    twoReeds: [
      { id: 0, group: 1, title: "Coup" },
      { id: 1, group: 1, title: "Crumb" },
      { id: 2, group: 1, title: "Autumn" },
      { id: 3, group: 1, title: "Debris" },
      { id: 4, group: 2, title: "Lechon" },
      { id: 5, group: 2, title: "Bacon" },
      { id: 6, group: 2, title: "Prosciutto" },
      { id: 7, group: 2, title: "Spek" },
      { id: 8, group: 3, title: "Gammon" },
      { id: 9, group: 3, title: "Anchor" },
      { id: 10, group: 3, title: "Bear off" },
      { id: 11, group: 3, title: "Pip" },
      { id: 12, group: 4, title: "Morsel" },
      { id: 13, group: 4, title: "Trace" },
      { id: 14, group: 4, title: "Iota" },
      { id: 15, group: 4, title: "Smidgen" },
    ],
    eyeOfHorus: [
      { id: 0, group: 1, title: "DSLR" },
      { id: 1, group: 1, title: "Filter" },
      { id: 2, group: 1, title: "Exposure" },
      { id: 3, group: 1, title: "Focus" },
      { id: 4, group: 2, title: "Wishful" },
      { id: 5, group: 2, title: "Blue sky" },
      { id: 6, group: 2, title: "Lateral" },
      { id: 7, group: 2, title: "Negative" },
      { id: 8, group: 3, title: "Lungo" },
      { id: 9, group: 3, title: "Irish" },
      { id: 10, group: 3, title: "Espresso" },
      { id: 11, group: 3, title: "Flat white" },
      { id: 12, group: 4, title: "Bojangles" },
      { id: 13, group: 4, title: "Vain" },
      { id: 14, group: 4, title: "Brightside" },
      { id: 15, group: 4, title: "Sandman" },
    ],
    twistedFlax: [
      { id: 0, group: 1, title: "Pinot noir" },
      { id: 1, group: 1, title: "Semillon" },
      { id: 2, group: 1, title: "Merlot" },
      { id: 3, group: 1, title: "Syrah" },
      { id: 4, group: 2, title: "Cur" },
      { id: 5, group: 2, title: "Mutt" },
      { id: 6, group: 2, title: "Pooch" },
      { id: 7, group: 2, title: "Hound" },
      { id: 8, group: 3, title: "Muscat" },
      { id: 9, group: 3, title: "Jeddah" },
      { id: 10, group: 3, title: "Dubai" },
      { id: 11, group: 3, title: "Aden" },
      { id: 12, group: 4, title: "Eaten" },
      { id: 13, group: 4, title: "Before" },
      { id: 14, group: 4, title: "Canine" },
      { id: 15, group: 4, title: "Kuwait" },
    ],
    hornedViper: [
      { id: 0, group: 1, title: "Worth" },
      { id: 1, group: 1, title: "Income" },
      { id: 2, group: 1, title: "Flix" },
      { id: 3, group: 1, title: "Profit" },
      { id: 4, group: 2, title: "Panel" },
      { id: 5, group: 2, title: "Gain" },
      { id: 6, group: 2, title: "System" },
      { id: 7, group: 2, title: "Eclipse" },
      { id: 8, group: 3, title: "Bow" },
      { id: 9, group: 3, title: "Mast" },
      { id: 10, group: 3, title: "Accomodation" },
      { id: 11, group: 3, title: "Keel" },
      { id: 12, group: 4, title: "Memorandum" },
      { id: 13, group: 4, title: "Cooperative" },
      { id: 14, group: 4, title: "Teaming" },
      { id: 15, group: 4, title: "Non-Disclosure" },
    ],
    demo: [
        { id: 0, group: 1, title: "Quake" },
        { id: 1, group: 1, title: "Doom" },
        { id: 2, group: 1, title: "Halo" },
        { id: 3, group: 1, title: "Portal" },
        { id: 4, group: 2, title: "Neverland" },
        { id: 5, group: 2, title: "Myst" },
        { id: 6, group: 2, title: "Lilliput" },
        { id: 7, group: 2, title: "Isla Nublar" },
        { id: 8, group: 3, title: "Headband" },
        { id: 9, group: 3, title: "Fez" },
        { id: 10, group: 3, title: "Toupee" },
        { id: 11, group: 3, title: "Turban" },
        { id: 12, group: 4, title: "Integral" },
        { id: 13, group: 4, title: "Triangle" },
        { id: 14, group: 4, title: "Relating" },
        { id: 15, group: 4, title: "Alerting" },
      ],
  };

  const missingVowels = {
      twoReeds: {
          title: "There are 50 ...",
          phrases: [
          {question: "W YSTL VYRL VR", answer: "WAYS TO LEAVE YOUR LOVER"},
          {question: "MR CNS TTS", answer: "AMERICAN STATES"},
          {question: "PN TSF RTHB LLS YNDR TS", answer: "POINTS FOR THE BULLSEYE IN DARTS"},
          {question: "S HD SFG RY", answer: "SHADES OF GREY"},
          ]
      },
      lion: {
        title: "Things people say when shaking hands",
        phrases: [
        {question: "H WD YD", answer: "HOW DO YOU DO?"},
        {question: "PLS DT MT Y", answer: "PLEASED TO MEET YOU"},
        {question: "WL LPL YD", answer: "WELL PLAYED"},
        {question: "C NG RTL TNS", answer: "CONTRATULATIONS"},
        ]
    },
    twistedFlax: {
        title: "Animals and their noises",
        phrases: [
        {question: "BN DB ZZ", answer: "BEE AND BUZZ"},
        {question: "S SPN DB", answer: "SHEEP AND BAA"},
        {question: "CWN DM", answer: "COW AND MOO"},
        {question: "CC KN DC CK", answer: "CUCKOO AND CUCKOO"},
        ]
    },
    hornedViper: {
        title: "Questions a waiter might ask",
        phrases: [
        {question: "W LDY LKT HRT HSP CLS", answer: "WOULD YOU LIKE TO HEAR THE SPECIALS?"},
        {question: "RYR DYT RDR", answer: "ARE YOU READY TO ORDER?"},
        {question: "WL DYL KT STH MN", answer: "WOULD YOU LIKE TO SEE THE MENU?"},
        {question: "DY HVNYL LRGS", answer: "DO YOU HAVE ANY ALLERGIES?"},
        ]
    },
    water: {
        title: "Basic vocabulary in English and French",
        phrases: [
        {question: "HL LN DBNJ R", answer: "HELLO AND BONJOUR"},
        {question: "DGN DC HN", answer: "DOG AND CHIEN"},
        {question: "Y SN D", answer: "YES AND OUI"},
        {question: "NN D NN", answer: "NO AND NON"},
        ]
    },
    eyeOfHorus: {
        title: "Cartoon dogs and their owners",
        phrases: [
        {question: "S NPYN DCH RLB RWN", answer: "SNOOPY AND CHARLIE BROWN"},
        {question: "SC BYD NDS HG GY", answer: "SCOOBY-DOO AND SHAGGY"},
        {question: "D GB RTN DDL BRT", answer: "DOGBERT AND DILBERT"},
        {question: "SN TSL TIL HL PRND THS MPSNS", answer: "SANTA'S LITTLE HELPER AND THE SIMPSONS"},
        ]
    },
    demo: {
        title: "Phrases in clickbait titles",
        phrases: [
        {question: "YW NTB LV", answer: "YOU WON'T BELIEVE"},
        {question: "WL LCH NGY RLF", answer: "WILL CHANGE YOUR LIFE"},
        {question: "SGNSYRCILLY", answer: "SIGNS YOU'RE ACTUALLY"},
        {question: "W THTH SN WR DIR CK", answer: "WITH THIS ONE WEIRD TRICK"},
        ]
    },
  }


export { 
    roundOne,
    roundTwo,
    wallQuestions,
    missingVowels
};
