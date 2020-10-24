
//sourced from excel file and 
//http://www.convertcsv.com/csv-to-json.htm
const TEXT = 
[
  {
    "pack": 1,
    "gamename": "Drawful",
    "description": "Hilarious drawing and deception game",
    "min": 5,
    "max": 8,
    "image": "drawful"
  },
  {
    "pack": 1,
    "gamename": "Fibbage XL",
    "description": "Aim to decieve friends while finding the truth",
    "min": 2,
    "max": 8,
    "image": "fibbageXL"
  },
  {
    "pack": 1,
    "gamename": "Lie Swatter",
    "description": "Find the truth from the flies and swat it down",
    "min": 1,
    "max": 100,
    "image": "lie-swatter"
  },
  {
    "pack": 1,
    "gamename": "Word Spud",
    "description": "Form strange word clouds",
    "min": 2,
    "max": 8,
    "image": "word-spud"
  },
  {
    "pack": 1,
    "gamename": "You Don't Know Jack",
    "description": "A terribly fun trivia game",
    "min": 1,
    "max": 4,
    "image": "you-dont-know-jack"
  },
  {
    "pack": 2,
    "gamename": "Bidiots",
    "description": "Draw and bid on \"Works of Art\" made by you and friends",
    "min": 2,
    "max": 6,
    "image": "bidiots"
  },
  {
    "pack": 2,
    "gamename": "Bomb Corp",
    "description": "Cooperative bomb defusal game",
    "min": 1,
    "max": 4,
    "image": "bomb-corp"
  },
  {
    "pack": 2,
    "gamename": "Earwax",
    "description": "Create an auditory experience to shock your friends",
    "min": 3,
    "max": 8,
    "image": "earwax"
  },
  {
    "pack": 2,
    "gamename": "Fibbage 2",
    "description": "Aim to decieve friends while finding the truth�AGAIN",
    "min": 2,
    "max": 8,
    "image": "fibbage-2"
  },
  {
    "pack": 2,
    "gamename": "Quiplash XL",
    "description": "Make your friends laugh enough to pick your answer",
    "min": 3,
    "max": 8,
    "image": "quiplashXL"
  },
  {
    "pack": 3,
    "gamename": "Fakin' It",
    "description": "find the faker in your group by using social deduction",
    "min": 3,
    "max": 6,
    "image": "fakin-it"
  },
  {
    "pack": 3,
    "gamename": "Guesspionage",
    "description": "Guess the percentage of strange facts",
    "min": 2,
    "max": 8,
    "image": "guesspionage"
  },
  {
    "pack": 3,
    "gamename": "Quiplash 2",
    "description": "Quiplash, but with custom episodes and cartoons",
    "min": 3,
    "max": 8,
    "image": "quiplash-2"
  },
  {
    "pack": 3,
    "gamename": "Tee K. O.",
    "description": "Create the best custom T-shirts to amuse your friends",
    "min": 3,
    "max": 8,
    "image": "tee-k-o"
  },
  {
    "pack": 3,
    "gamename": "Trivia Murder Party",
    "description": "A murderously fun trivia game",
    "min": 1,
    "max": 8,
    "image": "trivia-murder-party"
  },
  {
    "pack": 4,
    "gamename": "Bracketeering",
    "description": "Have dumb arguments about dumber questions",
    "min": 3,
    "max": 16,
    "image": "bracketeering"
  },
  {
    "pack": 4,
    "gamename": "Civic Doodle",
    "description": "Commit cooperative graffiti with friends and vote on the best",
    "min": 3,
    "max": 8,
    "image": "civic-doodle"
  },
  {
    "pack": 4,
    "gamename": "Fibbage 3",
    "description": "Fibbage, but with personalized options for close friends",
    "min": 2,
    "max": 8,
    "image": "fibbage-3"
  },
  {
    "pack": 4,
    "gamename": "Monster Seeking Monster",
    "description": "Multiplayer dating sim where you're all secret monsters",
    "min": 3,
    "max": 7,
    "image": "monster-seeking-monster"
  },
  {
    "pack": 4,
    "gamename": "Survive the Internet",
    "description": "Try to make your friends tweet strange things",
    "min": 3,
    "max": 8,
    "image": "survive-the-internet"
  },
  {
    "pack": 5,
    "gamename": "Mad Verse City",
    "description": "Rap battle your friends for glory and bragging rights",
    "min": 3,
    "max": 8,
    "image": "mad-verse-city"
  },
  {
    "pack": 5,
    "gamename": "Patently Stupid",
    "description": "convince your friends to invest in your genius startup",
    "min": 3,
    "max": 8,
    "image": "patently-stupid"
  },
  {
    "pack": 5,
    "gamename": "Split the Room",
    "description": "Try to divide your friends opinions with one word",
    "min": 3,
    "max": 8,
    "image": "split-the-room"
  },
  {
    "pack": 5,
    "gamename": "You Don't Know Jack-Full Stream",
    "description": "Trivia game run by the corporation BinjPipe",
    "min": 1,
    "max": 8,
    "image": "you-dont-know-jack-full-stream"
  },
  {
    "pack": 5,
    "gamename": "Zeeple Dome",
    "description": "Space-themed platforming fighting game",
    "min": 1,
    "max": 6,
    "image": "zeeple-dome"
  },
  {
    "pack": 6,
    "gamename": "Dictionarium",
    "description": "Define strange words and give definitions stranger words",
    "min": 3,
    "max": 8,
    "image": "dictionarium"
  },
  {
    "pack": 6,
    "gamename": "Joke Boat",
    "description": "Strange stand-up to survive on a sinking ship",
    "min": 3,
    "max": 8,
    "image": "joke-boat"
  },
  {
    "pack": 6,
    "gamename": "Push The Button",
    "description": "Try and find alien infiltrators in your spaceship",
    "min": 4,
    "max": 10,
    "image": "push-the-button"
  },
  {
    "pack": 6,
    "gamename": "Role Models",
    "description": "Pigeonhole your friends into roles",
    "min": 3,
    "max": 6,
    "image": "role-models"
  },
  {
    "pack": 6,
    "gamename": "Trivia Murder Party 2",
    "description": "Murderously fun trivia game",
    "min": 1,
    "max": 8,
    "image": "trivia-murder-party-2"
  },
  {
    "pack": 7,
    "gamename": "Blather Round",
    "description": "Describe your word with a very limited vocabulary",
    "min": 2,
    "max": 6,
    "image": "blather-round"
  },
  {
    "pack": 7,
    "gamename": "Champ'd Up",
    "description": "Create champions and force them to face off for strange titles",
    "min": 3,
    "max": 8,
    "image": "champd-up"
  },
  {
    "pack": 7,
    "gamename": "Devil in the Details",
    "description": "Collaborate with your friends to survive devil suburbia",
    "min": 3,
    "max": 8,
    "image": "devil-in-the-details"
  },
  {
    "pack": 7,
    "gamename": "Quiplash 3",
    "description": "It's quiplash for the 3rd time.",
    "min": 3,
    "max": 8,
    "image": "quiplash-3"
  },
  {
    "pack": 7,
    "gamename": "Talking Points",
    "description": "Intrigue your friends with an on-the-cuff presentation",
    "min": 3,
    "max": 8,
    "image": "talking-points"
  }
 ]
 ;