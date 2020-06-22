
//sourced from excel file and 
//http://www.convertcsv.com/csv-to-json.htm
const TEXT = 
[
  {
    "gamename": "Avalon",
    "description": "Knight-themed Social Deduction game",
    "minPlayers": 5,
    "maxPlayers": 10,
    "link": "https://netgames.io/games/avalon/",
    "image": "avalon"
  },
  {
    "gamename": "Battleship",
    "description": "The infamous 2-player guessing game",
    "minPlayers": 2,
    "maxPlayers": 2,
    "link": "https://papergames.io/en/battleship/",
    "image": "battleship"
  },
  {
    "gamename": "Jackbox 1: Drawful",
    "description": "Hilarious drawing and deception game",
    "minPlayers": 5,
    "maxPlayers": 8,
    "link": "jackbox",
    "image": "drawful"
  },
  {
    "gamename": "Jackbox 1: Fibbage XL",
    "description": "Aim to decieve friends while finding the truth",
    "minPlayers": 2,
    "maxPlayers": 8,
    "link": "jackbox",
    "image": "fibbageXL"
  },
  {
    "gamename": "Jackbox 1: Lie Swatter",
    "description": "Find the truth from the flies and swat it down",
    "minPlayers": 1,
    "maxPlayers": 100,
    "link": "jackbox",
    "image": "lie-swatter"
  },
  {
    "gamename": "Jackbox 1: Word Spud",
    "description": "Form strange word clouds",
    "minPlayers": 2,
    "maxPlayers": 8,
    "link": "jackbox",
    "image": "word-spud"
  },
  {
    "gamename": "Jackbox 1: You Don't Know Jack",
    "description": "A terribly fun trivia game",
    "minPlayers": 1,
    "maxPlayers": 4,
    "link": "jackbox",
    "image": "you-dont-know-jack"
  },
  {
    "gamename": "Jackbox 2: Bidiots",
    "description": "Draw and bid on \"Works of Art\" made by you and friends",
    "minPlayers": 2,
    "maxPlayers": 8,
    "link": "jackbox",
    "image": "bidiots"
  },
  {
    "gamename": "Jackbox 2: Bomb Corp",
    "description": "Cooperative bomb defusal game",
    "minPlayers": 1,
    "maxPlayers": 4,
    "link": "jackbox",
    "image": "bomb-corp"
  },
  {
    "gamename": "Jackbox 2: Earwax",
    "description": "Create an auditory experience to shock your friends",
    "minPlayers": 3,
    "maxPlayers": 8,
    "link": "jackbox",
    "image": "earwax"
  },
  {
    "gamename": "Jackbox 2: Fibbage 2",
    "description": "Aim to decieve friends while finding the truth�AGAIN",
    "minPlayers": 2,
    "maxPlayers": 8,
    "link": "jackbox",
    "image": "fibbage-2"
  },
  {
    "gamename": "Jackbox 2: Quiplash XL",
    "description": "Make your friends laugh enough to pick your answer",
    "minPlayers": 3,
    "maxPlayers": 8,
    "link": "jackbox",
    "image": "quiplashXL"
  },
  {
    "gamename": "Jackbox 3: Fakin' It",
    "description": "find the faker in your group by using social deduction",
    "minPlayers": 3,
    "maxPlayers": 6,
    "link": "jackbox",
    "image": "fakin-it"
  },
  {
    "gamename": "Jackbox 3: Guesspionage",
    "description": "Guess the percentage of strange facts",
    "minPlayers": 2,
    "maxPlayers": 8,
    "link": "jackbox",
    "image": "guesspionage"
  },
  {
    "gamename": "Jackbox 3: Quiplash 2",
    "description": "Quiplash, but with custom episodes and cartoons",
    "minPlayers": 3,
    "maxPlayers": 8,
    "link": "jackbox",
    "image": "quiplash-2"
  },
  {
    "gamename": "Jackbox 3: Tee K. O.",
    "description": "Create the best custom T-shirts to amuse your friends",
    "minPlayers": 3,
    "maxPlayers": 8,
    "link": "jackbox",
    "image": "tee-k-o"
  },
  {
    "gamename": "Jackbox 3: Trivia Murder Party",
    "description": "A murderously fun trivia game",
    "minPlayers": 1,
    "maxPlayers": 8,
    "link": "jackbox",
    "image": "trivia-murder-party"
  },
  {
    "gamename": "Jackbox 4: Bracketeering",
    "description": "Have dumb arguments about dumber questions",
    "minPlayers": 3,
    "maxPlayers": 16,
    "link": "jackbox",
    "image": "bracketeering"
  },
  {
    "gamename": "Jackbox 4: Civic Doodle",
    "description": "Commit cooperative graffiti with friends and vote on the best",
    "minPlayers": 3,
    "maxPlayers": 8,
    "link": "jackbox",
    "image": "civic-doodle"
  },
  {
    "gamename": "Jackbox 4: Fibbage 3",
    "description": "Fibbage, but with personalized options for close friends",
    "minPlayers": 2,
    "maxPlayers": 8,
    "link": "jackbox",
    "image": "fibbage-3"
  },
  {
    "gamename": "Jackbox 4: Monster Seeking Monster",
    "description": "Multiplayer dating sim where you're all secret monsters",
    "minPlayers": 3,
    "maxPlayers": 7,
    "link": "jackbox",
    "image": "monster-seeking-monster"
  },
  {
    "gamename": "Jackbox 4: Survive the Internet",
    "description": "Try to make your friends tweet strange things",
    "minPlayers": 3,
    "maxPlayers": 8,
    "link": "jackbox",
    "image": "survive-the-internet"
  },
  {
    "gamename": "Jackbox 5: Mad Verse City",
    "description": "Rap battle your friends for glory and bragging rights",
    "minPlayers": 3,
    "maxPlayers": 8,
    "link": "jackbox",
    "image": "mad-verse-city"
  },
  {
    "gamename": "Jackbox 5: Patently Stupid",
    "description": "convince your friends to invest in your genius startup",
    "minPlayers": 3,
    "maxPlayers": 8,
    "link": "jackbox",
    "image": "patently-stupid"
  },
  {
    "gamename": "Jackbox 5: Split the Room",
    "description": "Try to divide your friends opinions with one word",
    "minPlayers": 3,
    "maxPlayers": 8,
    "link": "jackbox",
    "image": "split-the-room"
  },
  {
    "gamename": "Jackbox 5: You Don't Know Jack-Full Stream",
    "description": "Trivia game run by the corporation BinjPipe",
    "minPlayers": 1,
    "maxPlayers": 8,
    "link": "jackbox",
    "image": "you-dont-know-jack-full-stream"
  },
  {
    "gamename": "Jackbox 5: Zeeple Dome",
    "description": "Space-themed platforming fighting game",
    "minPlayers": 1,
    "maxPlayers": 6,
    "link": "jackbox",
    "image": "zeeple-dome"
  },
  {
    "gamename": "Jackbox 6: Dictionarium",
    "description": "Define strange words and give definitions stranger words",
    "minPlayers": 3,
    "maxPlayers": 8,
    "link": "jackbox",
    "image": "dictionarium"
  },
  {
    "gamename": "Jackbox 6: Joke Boat",
    "description": "Strange stand-up to survive on a sinking ship",
    "minPlayers": 3,
    "maxPlayers": 8,
    "link": "jackbox",
    "image": "joke-boat"
  },
  {
    "gamename": "Jackbox 6: Push The Button",
    "description": "Try and find alien infiltrators in your spaceship",
    "minPlayers": 4,
    "maxPlayers": 10,
    "link": "jackbox",
    "image": "push-the-button"
  },
  {
    "gamename": "Jackbox 6: Role Models",
    "description": "Pigeonhole your friends into roles",
    "minPlayers": 3,
    "maxPlayers": 6,
    "link": "jackbox",
    "image": "role-models"
  },
  {
    "gamename": "Jackbox 6: Trivia Murder Party 2",
    "description": "Murderously fun trivia game",
    "minPlayers": 1,
    "maxPlayers": 8,
    "link": "jackbox",
    "image": "trivia-murder-party-2"
  },
  {
    "gamename": "Secret Hitler",
    "description": "A social deduction game where you hunt facists",
    "minPlayers": 5,
    "maxPlayers": 10,
    "link": "https://secret-hitler.com/",
    "image": "secret-hitler"
  }
 ]
    ;