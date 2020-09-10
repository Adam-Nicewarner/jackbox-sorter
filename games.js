
//sourced from excel file and 
//http://www.convertcsv.com/csv-to-json.htm
const TEXT = 
[
  {
    "genre": "JACKBOX",
    "gamename": "Jackbox 1: Drawful",
    "description": "Hilarious drawing and deception game",
    "min": 5,
    "max": 8,
    "link": "jackbox",
    "image": "drawful"
  },
  {
    "genre": "JACKBOX",
    "gamename": "Jackbox 1: Fibbage XL",
    "description": "Aim to decieve friends while finding the truth",
    "min": 2,
    "max": 8,
    "link": "jackbox",
    "image": "fibbageXL"
  },
  {
    "genre": "JACKBOX",
    "gamename": "Jackbox 1: Lie Swatter",
    "description": "Find the truth from the flies and swat it down",
    "min": 1,
    "max": 100,
    "link": "jackbox",
    "image": "lie-swatter"
  },
  {
    "genre": "JACKBOX",
    "gamename": "Jackbox 1: Word Spud",
    "description": "Form strange word clouds",
    "min": 2,
    "max": 8,
    "link": "jackbox",
    "image": "word-spud"
  },
  {
    "genre": "JACKBOX",
    "gamename": "Jackbox 1: You Don't Know Jack",
    "description": "A terribly fun trivia game",
    "min": 1,
    "max": 4,
    "link": "jackbox",
    "image": "you-dont-know-jack"
  },
  {
    "genre": "JACKBOX",
    "gamename": "Jackbox 2: Bidiots",
    "description": "Draw and bid on \"Works of Art\" made by you and friends",
    "min": 2,
    "max": 8,
    "link": "jackbox",
    "image": "bidiots"
  },
  {
    "genre": "JACKBOX",
    "gamename": "Jackbox 2: Bomb Corp",
    "description": "Cooperative bomb defusal game",
    "min": 1,
    "max": 4,
    "link": "jackbox",
    "image": "bomb-corp"
  },
  {
    "genre": "JACKBOX",
    "gamename": "Jackbox 2: Earwax",
    "description": "Create an auditory experience to shock your friends",
    "min": 3,
    "max": 8,
    "link": "jackbox",
    "image": "earwax"
  },
  {
    "genre": "JACKBOX",
    "gamename": "Jackbox 2: Fibbage 2",
    "description": "Aim to decieve friends while finding the truth�AGAIN",
    "min": 2,
    "max": 8,
    "link": "jackbox",
    "image": "fibbage-2"
  },
  {
    "genre": "JACKBOX",
    "gamename": "Jackbox 2: Quiplash XL",
    "description": "Make your friends laugh enough to pick your answer",
    "min": 3,
    "max": 8,
    "link": "jackbox",
    "image": "quiplashXL"
  },
  {
    "genre": "JACKBOX",
    "gamename": "Jackbox 3: Fakin' It",
    "description": "find the faker in your group by using social deduction",
    "min": 3,
    "max": 6,
    "link": "jackbox",
    "image": "fakin-it"
  },
  {
    "genre": "JACKBOX",
    "gamename": "Jackbox 3: Guesspionage",
    "description": "Guess the percentage of strange facts",
    "min": 2,
    "max": 8,
    "link": "jackbox",
    "image": "guesspionage"
  },
  {
    "genre": "JACKBOX",
    "gamename": "Jackbox 3: Quiplash 2",
    "description": "Quiplash, but with custom episodes and cartoons",
    "min": 3,
    "max": 8,
    "link": "jackbox",
    "image": "quiplash-2"
  },
  {
    "genre": "JACKBOX",
    "gamename": "Jackbox 3: Tee K. O.",
    "description": "Create the best custom T-shirts to amuse your friends",
    "min": 3,
    "max": 8,
    "link": "jackbox",
    "image": "tee-k-o"
  },
  {
    "genre": "JACKBOX",
    "gamename": "Jackbox 3: Trivia Murder Party",
    "description": "A murderously fun trivia game",
    "min": 1,
    "max": 8,
    "link": "jackbox",
    "image": "trivia-murder-party"
  },
  {
    "genre": "JACKBOX",
    "gamename": "Jackbox 4: Bracketeering",
    "description": "Have dumb arguments about dumber questions",
    "min": 3,
    "max": 16,
    "link": "jackbox",
    "image": "bracketeering"
  },
  {
    "genre": "JACKBOX",
    "gamename": "Jackbox 4: Civic Doodle",
    "description": "Commit cooperative graffiti with friends and vote on the best",
    "min": 3,
    "max": 8,
    "link": "jackbox",
    "image": "civic-doodle"
  },
  {
    "genre": "JACKBOX",
    "gamename": "Jackbox 4: Fibbage 3",
    "description": "Fibbage, but with personalized options for close friends",
    "min": 2,
    "max": 8,
    "link": "jackbox",
    "image": "fibbage-3"
  },
  {
    "genre": "JACKBOX",
    "gamename": "Jackbox 4: Monster Seeking Monster",
    "description": "Multiplayer dating sim where you're all secret monsters",
    "min": 3,
    "max": 7,
    "link": "jackbox",
    "image": "monster-seeking-monster"
  },
  {
    "genre": "JACKBOX",
    "gamename": "Jackbox 4: Survive the Internet",
    "description": "Try to make your friends tweet strange things",
    "min": 3,
    "max": 8,
    "link": "jackbox",
    "image": "survive-the-internet"
  },
  {
    "genre": "JACKBOX",
    "gamename": "Jackbox 5: Mad Verse City",
    "description": "Rap battle your friends for glory and bragging rights",
    "min": 3,
    "max": 8,
    "link": "jackbox",
    "image": "mad-verse-city"
  },
  {
    "genre": "JACKBOX",
    "gamename": "Jackbox 5: Patently Stupid",
    "description": "convince your friends to invest in your genius startup",
    "min": 3,
    "max": 8,
    "link": "jackbox",
    "image": "patently-stupid"
  },
  {
    "genre": "JACKBOX",
    "gamename": "Jackbox 5: Split the Room",
    "description": "Try to divide your friends opinions with one word",
    "min": 3,
    "max": 8,
    "link": "jackbox",
    "image": "split-the-room"
  },
  {
    "genre": "JACKBOX",
    "gamename": "Jackbox 5: You Don't Know Jack-Full Stream",
    "description": "Trivia game run by the corporation BinjPipe",
    "min": 1,
    "max": 8,
    "link": "jackbox",
    "image": "you-dont-know-jack-full-stream"
  },
  {
    "genre": "JACKBOX",
    "gamename": "Jackbox 5: Zeeple Dome",
    "description": "Space-themed platforming fighting game",
    "min": 1,
    "max": 6,
    "link": "jackbox",
    "image": "zeeple-dome"
  },
  {
    "genre": "JACKBOX",
    "gamename": "Jackbox 6: Dictionarium",
    "description": "Define strange words and give definitions stranger words",
    "min": 3,
    "max": 8,
    "link": "jackbox",
    "image": "dictionarium"
  },
  {
    "genre": "JACKBOX",
    "gamename": "Jackbox 6: Joke Boat",
    "description": "Strange stand-up to survive on a sinking ship",
    "min": 3,
    "max": 8,
    "link": "jackbox",
    "image": "joke-boat"
  },
  {
    "genre": "JACKBOX",
    "gamename": "Jackbox 6: Push The Button",
    "description": "Try and find alien infiltrators in your spaceship",
    "min": 4,
    "max": 10,
    "link": "jackbox",
    "image": "push-the-button"
  },
  {
    "genre": "JACKBOX",
    "gamename": "Jackbox 6: Role Models",
    "description": "Pigeonhole your friends into roles",
    "min": 3,
    "max": 6,
    "link": "jackbox",
    "image": "role-models"
  },
  {
    "genre": "JACKBOX",
    "gamename": "Jackbox 6: Trivia Murder Party 2",
    "description": "Murderously fun trivia game",
    "min": 1,
    "max": 8,
    "link": "jackbox",
    "image": "trivia-murder-party-2"
  }
 ]
    ;