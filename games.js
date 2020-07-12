
//sourced from excel file and 
//http://www.convertcsv.com/csv-to-json.htm
const TEXT = 
[
  {
    "genre": "BOARD GAMES",
    "gamename": "13 Days: The Cuban Missile Crisis",
    "description": "1v1 history-themed strategy game",
    "min": 2,
    "max": 2,
    "link": "https://chantry-games.com/ ",
    "image": "13-days"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "7 Wonders Duel ",
    "description": "1v1 version of empire-building drafting game 7 Wonders",
    "min": 2,
    "max": 2,
    "link": "https://sevenee.mattle.online/welcome",
    "image": "seven-wonders-duel"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Acquire ",
    "description": "tile placement business strategy game",
    "min": 2,
    "max": 6,
    "link": "https://acquire.tlstyer.com/",
    "image": "acquire"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Advanced Civilization",
    "description": "Mediterranean Empire-building game for history buffs and novices alike",
    "min": 2,
    "max": 8,
    "link": "http://civ.rol-play.com ",
    "image": "advanced-civilization"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Agricola ",
    "description": "Compete to build the best farm",
    "min": 1,
    "max": 5,
    "link": "http://play-agricola.com/",
    "image": "agricola"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Azul ",
    "description": "strategic tile placement game",
    "min": 2,
    "max": 4,
    "link": "https://azee.mattle.online/",
    "image": "azul"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Backgammon ",
    "description": "It's backgammon, the game everyone remembers but doesn't know",
    "min": 2,
    "max": 2,
    "link": "http://dailygammon.com/",
    "image": "backgammon"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Battleship ",
    "description": "The infamous 2-player guessing game",
    "min": 2,
    "max": 2,
    "link": "http://en.battleship-game.org/",
    "image": "battleship"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Blokus ",
    "description": "It's that game",
    "min": 2,
    "max": 4,
    "link": "https://blokee.mattle.online/",
    "image": "blokus"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Board Game Online ",
    "description": "I can't tell what's going on. Fun tho",
    "min": 1,
    "max": 16,
    "link": "https://www.boardgame-online.com/",
    "image": "board-game-online"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Brass ",
    "description": "Industrial Revolution-themed empire builder",
    "min": 2,
    "max": 4,
    "link": "http://brass.orderofthehammer.com/",
    "image": "brass"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Carcassone",
    "description": "tile placement farming simulator",
    "min": 2,
    "max": 5,
    "link": "https://concarneau.herokuapp.com/",
    "image": "carcassone"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Century: Spice Road",
    "description": "Harvest spices for points and power",
    "min": 2,
    "max": 5,
    "link": "https://spicee.mattle.online/",
    "image": "century-spice-road"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Checkers ",
    "description": "1v1 game. You know checkers",
    "min": 2,
    "max": 2,
    "link": "http://playingcards.io/game/checkers",
    "image": "checkers"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Chess ",
    "description": "100% skill",
    "min": 2,
    "max": 2,
    "link": "https://lichess.org/",
    "image": "chess"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Connect 4",
    "description": "tic tac toe 2.0",
    "min": 2,
    "max": 2,
    "link": "https://c4arena.com ",
    "image": "connect-4"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Decrypto ",
    "description": "try to decode your enemies motives in this team-based puzzle game",
    "min": 3,
    "max": 8,
    "link": "https://whoawhoa.github.io/decrypto/",
    "image": "decrypto"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Dice Wars",
    "description": "conquer the world� with dice",
    "min": 2,
    "max": 8,
    "link": "https://qdice.wtf/planeta ",
    "image": "dice-wars"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Diplomacy ",
    "description": "Historical strategy game. Simple to learn, difficult to master",
    "min": 2,
    "max": 7,
    "link": "http://webdiplomacy.net/",
    "image": "diplomacy"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Dominion ",
    "description": "the classic deck-building game",
    "min": 2,
    "max": 4,
    "link": "https://dominion.games/",
    "image": "dominion"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Draughts ",
    "description": "British checkers",
    "min": 2,
    "max": 2,
    "link": "https://www.playok.com/en/draughts/",
    "image": "draughts"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "GO ",
    "description": "Asian strategy game",
    "min": 2,
    "max": 2,
    "link": "https://go.mattle.online/",
    "image": "go"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Go-Moku ",
    "description": "abstract strategy game derived from go",
    "min": 2,
    "max": 2,
    "link": "https://www.playok.com/en/gomoku/",
    "image": "go-moku"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Innovation",
    "description": "civilization-building strategy game",
    "min": 2,
    "max": 4,
    "link": "https://innovation.isotropic.org/",
    "image": "innovation"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Liar's Dice",
    "description": "lie to friends with dice",
    "min": 2,
    "max": 8,
    "link": "https://www.cyberspaces.app/liarsdice",
    "image": "liars-dice"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Ludo ",
    "description": "Race your friends to the finish",
    "min": 2,
    "max": 4,
    "link": "https://www.playok.com/en/ludo/",
    "image": "ludo"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Makruk ",
    "description": "The indian chess relative",
    "min": 2,
    "max": 2,
    "link": "https://www.playok.com/en/makruk/",
    "image": "makruk"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Monopoly ",
    "description": "force your friends to succumb to your capitalistic might",
    "min": 2,
    "max": 4,
    "link": "http://www.webopoly.org/",
    "image": "monopoly"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Muggins ",
    "description": "Crush your enemies. Also do math",
    "min": 2,
    "max": 2,
    "link": "https://www.playok.com/en/dominoes/",
    "image": "muggins"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Neptune's Pride",
    "description": "sci-fi multiplayer strategic game",
    "min": 2,
    "max": 16,
    "link": "https://np.ironhelmet.com/#landing",
    "image": "neptunes-pride"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Pente ",
    "description": "an oklohoman Go variant",
    "min": 2,
    "max": 2,
    "link": "https://pente.org",
    "image": "pente"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Risk ",
    "description": "Conquer the world, except australia",
    "min": 2,
    "max": 6,
    "link": "http://www.wargear.net/",
    "image": "risk"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Reversi ",
    "description": "flip your board and make your opponents flip the table",
    "min": 2,
    "max": 2,
    "link": "https://cardgames.io/reversi/",
    "image": "reversi"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Settlers of Catan",
    "description": "build your small towns into bustling cities",
    "min": 3,
    "max": 4,
    "link": "https://colonist.io/",
    "image": "settlers-of-catan"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Shadow Hunters",
    "description": "fantasy-themed social deduction game",
    "min": 4,
    "max": 8,
    "link": "http://www.shadowhunters.live/",
    "image": "shadow-hunters"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Shogi ",
    "description": "Japanese chess",
    "min": 2,
    "max": 2,
    "link": "https://www.playok.com/en/shogi/\\",
    "image": "shogi"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Skull ",
    "description": "skull-themed bluffing game",
    "min": 3,
    "max": 6,
    "link": "https://skull.games/",
    "image": "skull"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Splendor ",
    "description": "gem-collecting tile game",
    "min": 2,
    "max": 4,
    "link": "https://spendee.mattle.online/",
    "image": "splendor"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Through the Ages ",
    "description": "civilization-building card game",
    "min": 2,
    "max": 4,
    "link": "http://boardgaming-online.com/",
    "image": "through-the-ages"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Xiangqi ",
    "description": "chinese chess",
    "min": 2,
    "max": 2,
    "link": "https://www.playok.com/en/xiangqi/",
    "image": "xiangqi"
  },
  {
    "genre": "BOARD GAMES",
    "gamename": "Yahtzee ",
    "description": "100% Skill",
    "min": 2,
    "max": 10,
    "link": "https://cardgames.io/yahtzee/",
    "image": "yahtzee"
  },
  {
    "genre": "CARD GAMES",
    "gamename": "3-5-8",
    "description": "win some tricks and trick your friends",
    "min": 3,
    "max": 3,
    "link": "https://www.playok.com/en/358/",
    "image": "3-5-8"
  },
  {
    "genre": "CARD GAMES",
    "gamename": "500",
    "description": "card game with tricks",
    "min": 4,
    "max": 4,
    "link": "https://www.trickstercards.com/home/500/",
    "image": "500"
  },
  {
    "genre": "CARD GAMES",
    "gamename": "Android: Netrunner LCG",
    "description": "1v1 Sci-fi strategic card game",
    "min": 2,
    "max": 2,
    "link": "https://www.jinteki.net/",
    "image": "netrunner"
  },
  {
    "genre": "CARD GAMES",
    "gamename": "Barbu ",
    "description": "Trick-taking card game",
    "min": 4,
    "max": 4,
    "link": "https://www.playok.com/en/barbu/",
    "image": "barbu"
  },
  {
    "genre": "CARD GAMES",
    "gamename": "Bridge ",
    "description": "The classic teamwork card game",
    "min": 4,
    "max": 4,
    "link": "https://www.trickstercards.com/home/bridge/",
    "image": "bridge"
  },
  {
    "genre": "CARD GAMES",
    "gamename": "Canasta ",
    "description": "2v2 rummy-based card game",
    "min": 2,
    "max": 6,
    "link": "https://www.playok.com/en/canasta/",
    "image": "canasta"
  },
  {
    "genre": "CARD GAMES",
    "gamename": "Cards Against Humanity ",
    "description": "You know what this is",
    "min": 4,
    "max": 30,
    "link": "http://playingcards.io/game/cards-against-humanity",
    "image": "cards-against-humanity"
  },
  {
    "genre": "CARD GAMES",
    "gamename": "Crazy 8's ",
    "description": "Uno, but made weird, and with a 52-card deck",
    "min": 2,
    "max": 5,
    "link": "http://playingcards.io/game/crazy-eights",
    "image": "crazy-8s"
  },
  {
    "genre": "CARD GAMES",
    "gamename": "Cribbage ",
    "description": "Britain's National card game",
    "min": 2,
    "max": 4,
    "link": "https://www.playok.com/en/cribbage/",
    "image": "cribbage"
  },
  {
    "genre": "CARD GAMES",
    "gamename": "Go Fish",
    "description": "the classic pair-matcher",
    "min": 4,
    "max": 4,
    "link": "http://playingcards.io/game/go-fish",
    "image": "go-fish"
  },
  {
    "genre": "CARD GAMES",
    "gamename": "Hearts ",
    "description": "the traditional trick-taking game",
    "min": 4,
    "max": 4,
    "link": "https://www.trickstercards.com/home/hearts/",
    "image": "hearts"
  },
  {
    "genre": "CARD GAMES",
    "gamename": "Hanabi ",
    "description": "cooperative reading signals card game",
    "min": 2,
    "max": 5,
    "link": "https://hanabi.live/",
    "image": "hanabi"
  },
  {
    "genre": "CARD GAMES",
    "gamename": "Pinochle ",
    "description": "Trick-taking card game",
    "min": 4,
    "max": 4,
    "link": "https://www.playok.com/en/pinochle/",
    "image": "pinochie"
  },
  {
    "genre": "CARD GAMES",
    "gamename": "Pitch ",
    "description": "Trick-taking all-fours variant card game",
    "min": 4,
    "max": 4,
    "link": "https://www.trickstercards.com/home/pitch/",
    "image": "pitch"
  },
  {
    "genre": "CARD GAMES",
    "gamename": "Poker ",
    "description": "Man, it's poker, you know what it is",
    "min": 2,
    "max": 9,
    "link": "https://blockchain.poker/",
    "image": "poker"
  },
  {
    "genre": "CARD GAMES",
    "gamename": "Skat ",
    "description": "The national game of Germany",
    "min": 3,
    "max": 3,
    "link": "https://www.playok.com/en/skat/",
    "image": "skat"
  },
  {
    "genre": "CARD GAMES",
    "gamename": "Spades ",
    "description": "the traditional trick-taking game",
    "min": 2,
    "max": 4,
    "link": "https://www.trickstercards.com/home/spades/",
    "image": "spades"
  },
  {
    "genre": "CARD GAMES",
    "gamename": "Uno ",
    "description": "Throw away your hand faster than the rest",
    "min": 2,
    "max": 10,
    "link": "http://play-uno.com/newgame.php",
    "image": "uno"
  },
  {
    "genre": "CARD GAMES",
    "gamename": "Whist ",
    "description": "The precursor to Bridge",
    "min": 4,
    "max": 4,
    "link": " https://www.trickstercards.com/home/whist/",
    "image": "whist"
  },
  {
    "genre": "SOCIAL",
    "gamename": "Avalon",
    "description": "Knight-themed Social Deduction game",
    "min": 5,
    "max": 10,
    "link": "https://netgames.io/games/avalon/",
    "image": "avalon"
  },
  {
    "genre": "SOCIAL",
    "gamename": "Coup ",
    "description": "social bluffing game",
    "min": 2,
    "max": 6,
    "link": "https://www.chickenkoup.com/",
    "image": "coup"
  },
  {
    "genre": "SOCIAL",
    "gamename": "Deception: Murder in Hong Kong",
    "description": "like werewolf plus pandemic",
    "min": 4,
    "max": 12,
    "link": "http://ninjabunny.github.io/mihk/",
    "image": "deception-hong-kong"
  },
  {
    "genre": "SOCIAL",
    "gamename": "Inhuman Conditions",
    "description": "pretend to be a robot, and fool the turing test itself",
    "min": 2,
    "max": 2,
    "link": "http://interrogation.ftwinston.com/",
    "image": "inhuman-conditions"
  },
  {
    "genre": "SOCIAL",
    "gamename": "Love Letter ",
    "description": "woo the princess with card gaming skill",
    "min": 2,
    "max": 4,
    "link": "https://netgames.io/games/love-letter/",
    "image": "love-letter"
  },
  {
    "genre": "SOCIAL",
    "gamename": "One-Night Werewolf",
    "description": "You have one night to find all the werewolves, before they eat your town alive",
    "min": 4,
    "max": 4,
    "link": "https://netgames.io/games/onu-werewolf/",
    "image": "one-night-werewolf"
  },
  {
    "genre": "SOCIAL",
    "gamename": "Secret Hitler",
    "description": "A social deduction game where you hunt facists",
    "min": 5,
    "max": 10,
    "link": "https://secret-hitler.com/",
    "image": "secret-hitler"
  },
  {
    "genre": "SOCIAL",
    "gamename": "Spyfall ",
    "description": "find your mole before he finds out your location",
    "min": 3,
    "max": 3,
    "link": "https://spyfall.adrianocola.com/",
    "image": "spyfall"
  },
  {
    "genre": "SOCIAL",
    "gamename": "The Resistance ",
    "description": "plot the downfall of the empire, or the revolution",
    "min": 5,
    "max": 10,
    "link": "http://www.theresistanceplus.com/",
    "image": "the-resistance"
  },
  {
    "genre": "SOCIAL",
    "gamename": "Town of Salem",
    "description": "the largest social deduction game, with 20+ roles",
    "min": 4,
    "max": 4,
    "link": "https://www.blankmediagames.com/",
    "image": "town-of-salem"
  },
  {
    "genre": "SOCIAL",
    "gamename": "Traditional Mafia ",
    "description": "the original, which everyone seeks to imitate",
    "min": 4,
    "max": 4,
    "link": "https://mafia.gg",
    "image": "mafia"
  },
  {
    "genre": "SOCIAL",
    "gamename": "Traditional Werewolf ",
    "description": "the original, which everyone seeks to imitate",
    "min": 4,
    "max": 4,
    "link": "https://werewolv.es/",
    "image": "werewolf"
  },
  {
    "genre": "SOCIAL",
    "gamename": "Fishbowl",
    "description": "3-round charades variant",
    "min": 4,
    "max": 16,
    "link": "https://fishbowl-game.com/",
    "image": "fishbowl"
  },
  {
    "genre": "WORD GAMES",
    "gamename": "Boggle ",
    "description": "try to find words on a 4x4 grid",
    "min": 2,
    "max": 99,
    "link": "http://www.wordsplay.net/",
    "image": "boggle"
  },
  {
    "genre": "WORD GAMES",
    "gamename": "Codenames ",
    "description": "try to untangle your sypmasters connections, without finding enemy spies",
    "min": 4,
    "max": 8,
    "link": "http://codewordsgame.com/",
    "image": "codenames"
  },
  {
    "genre": "WORD GAMES",
    "gamename": "Just One ",
    "description": "connect strange clues to find the One Word that fits",
    "min": 3,
    "max": 7,
    "link": "https://runetiera.com/one",
    "image": "one-word"
  },
  {
    "genre": "WORD GAMES",
    "gamename": "Scattergories ",
    "description": "come up with words that fit several themes, as long as they're unique",
    "min": 2,
    "max": 20,
    "link": "https://scattergoriesonline.net/ ",
    "image": "scattergories"
  },
  {
    "genre": "WORD GAMES",
    "gamename": "Scrabble",
    "description": "bro it's scrabble. Play it.",
    "min": 2,
    "max": 4,
    "link": "https://www.pogo.com/games/scrabble",
    "image": "scrabble"
  },
  {
    "genre": "WORD GAMES",
    "gamename": "Taboo",
    "description": "guess your partner's word without using it",
    "min": 6,
    "max": 99,
    "link": "https://playtaboo.com ",
    "image": "taboo"
  },
  {
    "genre": "WORD GAMES",
    "gamename": "Hey Robot",
    "description": "try and manipulate your smart speaker into saying what you want.(unplayable without smart listening device)",
    "min": 1,
    "max": 99,
    "link": "https://playheyrobot.com/",
    "image": "hey-robot"
  },
  {
    "genre": "GAME COLLECTION",
    "gamename": "Board Game Arena",
    "description": "giant hub for board games",
    "min": 1,
    "max": 99,
    "link": "http://boardgamearena.com",
    "image": "board-game-arena"
  },
  {
    "genre": "GAME COLLECTION",
    "gamename": "Cardzmania",
    "description": "hub for card games, solitaire, poker, etc cetera.",
    "min": 1,
    "max": 12,
    "link": "https://www.cardzmania.com/games/",
    "image": "cardzmania"
  },
  {
    "genre": "GAME COLLECTION",
    "gamename": "Online Video Game Console",
    "description": "hub for video games you can play with friends",
    "min": 1,
    "max": 16,
    "link": "https://www.airconsole.com/",
    "image": "air-console"
  },
  {
    "genre": "GAME COLLECTION",
    "gamename": "Orisinal",
    "description": "hub for some strange games",
    "min": 1,
    "max": 1,
    "link": "http://www.ferryhalim.com/orisinal/ ",
    "image": "orisinal"
  },
  {
    "genre": "GAME COLLECTION",
    "gamename": "Tabletopia",
    "description": "giant hub for board games",
    "min": 2,
    "max": 99,
    "link": "https://www.tabletopia.com/",
    "image": "tabletopia"
  },
  {
    "genre": "GAME COLLECTION",
    "gamename": "Yucata",
    "description": "hub for board games",
    "min": 2,
    "max": 8,
    "link": "https://www.yucata.de/en",
    "image": "yucata"
  },
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