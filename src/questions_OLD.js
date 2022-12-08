
const roundOne= {
    twoReeds: [
        {id:0, title: "Mr. Fusion"},
        {id:1, title: "Dehydrated Pizza"},
        {id:2, title: "Self-tying Shoes"},
        {id:4, title: "Hoverboard"},
    ],
    lion: [
        {id:0, title: "Ladybug: Yellow"},
        {id:1, title: "Cockroach: colorless"},
        {id:2, title: "Spock: green"},
        {id:4, title: "You: red"},
    ],
    twistedFlax: [
        {id:0, title: "Covert"},
        {id:1, title: "creMate"},
        {id:2, title: "fEast"},
        {id:4, title: "fRiend"},
    ],
    hornedViper: [
        {id:0, title: "dye becomes fur"},
        {id:1, title: "rust becomes tidy"},
        {id:2, title: "waxier becomes escort"},
        {id:4, title: "sweet becomes derry"},
    ],
    water: [
        {id:0, title: "Manufacturing gunpowder"},
        {id:1, title: "Roman mouthwash"},
        {id:2, title: "Thickening wool"},
        {id:4, title: "Marking Territory"},
    ],
    eyeOfHorus: [
        {id:0, title: "Email newsletter for San Francisco"},
        {id:1, title: "'Wardrobe malfunction' video not found"},
        {id:2, title: "Selling a broken laser pointer"},
        {id:4, title: "Harvard version of 'Hot or Not'"},
    ],
    demo: [
        {id:0, title: "Photon"},
        {id:2, title: "White Corners"},
        {id:3, title: "Switzerland"},
        {id:4, title: "Gearbox disconnected from transmission"},
    ]
}

const roundTwo= {
    twoReeds: [
        {id:0, title: "November"},
        {id:1, title: "Alpha"},
        {id:2, title: "Tango"},
        {id:4, title: "Oscar"},
    ],
    lion: [
        {id:0, title: "Galactic Center"},
        {id:1, title: "Sun"},
        {id:2, title: "Earth"},
        {id:4, title: "Moon"},
    ],
    twistedFlax: [
        {id:0, title: "Market"},
        {id:1, title: "Home"},
        {id:2, title: "Roast Beef"},
        {id:4, title: "None"},
    ],
    hornedViper: [
        {id:0, title: "3: Connecticut"},
        {id:1, title: "2: Florida"},
        {id:2, title: "1: Maine"},
        {id:4, title: "0: Hawaii"},
    ],
    water: [
        {id:0, title: "Deck of cards"},
        {id:1, title: "Female monarchs of Britian"},
        {id:2, title: "Chess game"},
        {id:4, title: "Beehive"},
    ],
    eyeOfHorus: [
        {id:0, title: "Buenos Aires"},
        {id:1, title: "Montevideo"},
        {id:2, title: "Canberra"},
        {id:4, title: "Wellington"},
    ],
    demo: [
        {id:0, title: "Move MS Word Scrollbar left"},
        {id:1, title: "Bleaching Allowed"},
        {id:2, title: "Play"},
        {id:3, title: "Yield"},
    ]
}
const wallQuestions = {
    lion: [
      { id: 0, group: 1, title: "Stills" },
      { id: 1, group: 1, title: "King" },
      { id: 2, group: 1, title: "Fry" },
      { id: 3, group: 1, title: "Curry" },
      { id: 4, group: 2, title: "Talk" },
      { id: 5, group: 2, title: "Potatoes" },
      { id: 6, group: 2, title: "Pox" },
      { id: 7, group: 2, title: "Scale" },
      { id: 8, group: 3, title: "Roast" },
      { id: 9, group: 3, title: "Grill" },
      { id: 10, group: 3, title: "Bake" },
      { id: 11, group: 3, title: "Boil" },
      { id: 12, group: 4, title: "Steam" },
      { id: 13, group: 4, title: "Life" },
      { id: 14, group: 4, title: "Banana" },
      { id: 15, group: 4, title: "Motor" },
    ],
    water: [
      { id: 0, group: 1, title: "Killer" },
      { id: 1, group: 1, title: "Spelling" },
      { id: 2, group: 1, title: "Queen" },
      { id: 3, group: 1, title: "Busy" },
      { id: 4, group: 2, title: "Nick" },
      { id: 5, group: 2, title: "Lift" },
      { id: 6, group: 2, title: "Jack" },
      { id: 7, group: 2, title: "Pinch" },
      { id: 8, group: 3, title: "Net" },
      { id: 9, group: 3, title: "King" },
      { id: 10, group: 3, title: "Hornet" },
      { id: 11, group: 3, title: "Bull" },
      { id: 12, group: 4, title: "Ace" },
      { id: 13, group: 4, title: "Break" },
      { id: 14, group: 4, title: "Deuce" },
      { id: 15, group: 4, title: "Love" },
    ],
    twoReeds: [
      { id: 0, group: 1, title: "John" },
      { id: 1, group: 1, title: "Throne" },
      { id: 2, group: 1, title: "Pot" },
      { id: 3, group: 1, title: "Can" },
      { id: 4, group: 2, title: "Pixie" },
      { id: 5, group: 2, title: "Bowl" },
      { id: 6, group: 2, title: "Caesar" },
      { id: 7, group: 2, title: "Crew" },
      { id: 8, group: 3, title: "Hillary" },
      { id: 9, group: 3, title: "Condoleeza" },
      { id: 10, group: 3, title: "Colin" },
      { id: 11, group: 3, title: "Rex" },
      { id: 12, group: 4, title: "Woody" },
      { id: 13, group: 4, title: "Sarge" },
      { id: 14, group: 4, title: "Jessie" },
      { id: 15, group: 4, title: "Buzz" },
    ],
    eyeOfHorus: [
      { id: 0, group: 1, title: "Tiana" },
      { id: 1, group: 1, title: "Belle" },
      { id: 2, group: 1, title: "Mulan" },
      { id: 3, group: 1, title: "Jasmine" },
      { id: 4, group: 2, title: "Wild" },
      { id: 5, group: 2, title: "Brown" },
      { id: 6, group: 2, title: "White" },
      { id: 7, group: 2, title: "Basmati" },
      { id: 8, group: 3, title: "Message" },
      { id: 9, group: 3, title: "Skate" },
      { id: 10, group: 3, title: "Circuit" },
      { id: 11, group: 3, title: "Chess" },
      { id: 12, group: 4, title: "Rocketry" },
      { id: 13, group: 4, title: "Popular Vote" },
      { id: 14, group: 4, title: "Rapunzel" },
      { id: 15, group: 4, title: "Discontinue" },
    ],
    twistedFlax: [
      { id: 0, group: 1, title: "Ton" },
      { id: 1, group: 1, title: "Ounce" },
      { id: 2, group: 1, title: "Stone" },
      { id: 3, group: 1, title: "Gram" },
      { id: 4, group: 2, title: "Rand" },
      { id: 5, group: 2, title: "Ruble" },
      { id: 6, group: 2, title: "Pound" },
      { id: 7, group: 2, title: "Krona" },
      { id: 8, group: 3, title: "Electric" },
      { id: 9, group: 3, title: "Buffalo" },
      { id: 10, group: 3, title: "Legislative" },
      { id: 11, group: 3, title: "Dollar" },
      { id: 12, group: 4, title: "Vision" },
      { id: 13, group: 4, title: "Port" },
      { id: 14, group: 4, title: "Marketing" },
      { id: 15, group: 4, title: "Phone" },
    ],
    hornedViper: [
      { id: 0, group: 1, title: "Gabriel" },
      { id: 1, group: 1, title: "Griffin" },
      { id: 2, group: 1, title: "Rabbit" },
      { id: 3, group: 1, title: "Jackson" },
      { id: 4, group: 2, title: "Fast" },
      { id: 5, group: 2, title: "Slaughterhouse" },
      { id: 6, group: 2, title: "High" },
      { id: 7, group: 2, title: "Maroon" },
      { id: 8, group: 3, title: "Crawdad" },
      { id: 9, group: 3, title: "Haunt" },
      { id: 10, group: 3, title: "Cardamom" },
      { id: 11, group: 3, title: "Carbuncle" },
      { id: 12, group: 4, title: "Cerberus" },
      { id: 13, group: 4, title: "Spectre" },
      { id: 14, group: 4, title: "Hydra" },
      { id: 15, group: 4, title: "Cobra" },
    ],
    demo: [
        { id: 0, group: 1, title: "Spanner" },
        { id: 1, group: 1, title: "Dagger" },
        { id: 2, group: 1, title: "Candlestick" },
        { id: 3, group: 1, title: "Revolver" },
        { id: 4, group: 2, title: "Rope" },
        { id: 5, group: 2, title: "Rear Window" },
        { id: 6, group: 2, title: "Vertigo" },
        { id: 7, group: 2, title: "Psycho" },
        { id: 8, group: 3, title: "Bascule" },
        { id: 9, group: 3, title: "Humpback" },
        { id: 10, group: 3, title: "Swing" },
        { id: 11, group: 3, title: "Suspension" },
        { id: 12, group: 4, title: "Killer" },
        { id: 13, group: 4, title: "Sperm" },
        { id: 14, group: 4, title: "Minke" },
        { id: 15, group: 4, title: "Beluga" },
      ],
  };

  const missingVowels = {
      twoReeds: {
          title: "Things people say when breaking up",
          phrases: [
          {question: "TSNT YT SM", answer: "IT'S NOT YOU, IT'S ME"},
          {question: "WSH LDS THRP PL", answer: "WE SHOULD SEE OTHER PEOPLE"},
          {question: "NDS MSPC", answer: "I NEED SOME SPACE"},
          {question: "CNWS TLL DFR NDS", answer: "CAN WE STILL BE FRIENDS?"},
          ]
      },
      lion: {
        title: "Four names for the same thing",
        phrases: [
        {question: "PNT HR", answer: "PANTHER"},
        {question: "C G R", answer: "COUGER"},
        {question: "MNT NLN", answer: "MOUNTAIN LION"},
        {question: "PM", answer: "PUMA"},
        ]
    },
    twistedFlax: {
        title: "Things removed in the game of 'Operation'",
        phrases: [
        {question: "B RKNH RT", answer: "BROKEN HEART"},
        {question: "FN NYB N", answer: "FUNNY BONE"},
        {question: "BTTR FLSN THST MCH", answer: "BUTTERFLIES IN THE STOMACH"},
        {question: "D MS PPL", answer: "ADAM'S APPLE"},
        ]
    },
    hornedViper: {
        title: "British and American foods",
        phrases: [
        {question: "BRG NN DGG PLNT", answer: "AUBERGINE AND EGGPLANT"},
        {question: "CR GTTN DZC CHN", answer: "COURGETTE AND ZUCCHINI"},
        {question: "CRN DRN DCL NTR", answer: "CORIANDER AND CILANTRO"},
        {question: "BS CTN DCK", answer: "BISCUIT AND COOKIE"},
        ]
    },
    water: {
        title: "(reasons it's fun to stay at the) YMCA",
        phrases: [
        {question: "YC NGTY RSLFC LN", answer: "YOU CAN GET YOURSELF CLEAN"},
        {question: "YC ND WH TVR YFL", answer: "YOU CAN DO WHATEVER YOU FEEL"},
        {question: "YC N HVG DML", answer: "YOU CAN HAVE A GOOD MEAL"},
        {question: "YC NH NGTW THLL THB YS", answer: "YOU CAN HANG OUT WITH ALL THE BOYS"},
        ]
    },
    eyeOfHorus: {
        title: "Descriptions of emojis",
        phrases: [
        {question: "FCW THTR SFJY", answer: "FACE WITH TEARS OF JOY"},
        {question: "DSP PNT DBTR LVDFC", answer: "DISAPPOINTED BUT RELIEVED FACE"},
        {question: "RLLN GNTH FLR LGHN G", answer: "ROLLING ON THE FLOOR LAUGHING"},
        {question: "SM RKN GFC", answer: "SMIRKING FACE"},
        ]
    },
    demo: {
        title: "Apple Locations",
        phrases: [
        {question: "HRM SAC RT", answer: "HERMOSA COURT"},
        {question: "PP LP RK", answer: "APPLE PARK"},
        {question: "BB BRD", answer: "BUBB ROAD"},
        {question: "WL FR D", answer: "WOLFE ROAD"},
        ]
    },
  }


export { 
    roundOne,
    roundTwo,
    wallQuestions,
    missingVowels
};
