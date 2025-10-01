// This file is the central database for all games on TFOOO.

// List of all games with their complete information.
const games = [
    { 
        id: 'crossy-road',
        name: 'Crossy Road', 
        imageUrl: 'https://evanclub.github.io/images/crossyroad.png', 
        iframeUrl: 'https://sciencemathedu.github.io/crossyroad/',
        description: 'Why did the chicken cross the road? Find out in this endless arcade hopper. Play Crossy Road for free online at TFOOO!',
        about: 'Crossy Road is an addictive arcade game with a simple goal: cross an endless series of roads, rivers, and train tracks without getting hit. Collect coins to unlock dozens of fun and quirky characters.',
        controls: 'Use the Arrow Keys on your keyboard (Up, Down, Left, Right) to move. On mobile, simply swipe in the direction you want to go.',
        keywords: 'arcade, endless runner, hopper, pixel game, funny game'
    },
    { 
        id: 'bitlife', 
        name: 'BitLife', 
        imageUrl: 'https://evanclub.github.io/images/bitlife.png', 
        iframeUrl: 'https://sciencemathedu.github.io/bitlife/', 
        description: 'Live your best (or worst) life in BitLife, the ultimate life simulator. Make choices and see where they take you. Play for free on TFOOO.',
        about: 'BitLife is a text-based life simulation game where you control a virtual person\'s life from birth to death. Will you become a model citizen, a rockstar, or a criminal? The choices are yours!',
        controls: 'This game is played using your mouse or by tapping on the screen to make choices and advance through the story.',
        keywords: 'life simulator, text-based, simulation game, choices matter'
    },
    { 
        id: 'among-us', 
        name: 'Among Us', 
        imageUrl: 'https://evanclub.github.io/images/amongus.png', 
        iframeUrl: 'https://sciencemathedu.github.io/among-us/', 
        description: 'Join your crewmates in a multiplayer game of teamwork and betrayal! Find the imposter before they eliminate everyone.',
        about: 'Work together to complete tasks on your spaceship, but beware of the Impostor among you. Their goal is to sabotage your mission and eliminate the crew. Can you figure out who the traitor is?',
        controls: 'Use WASD or Arrow Keys to move. Use the mouse to interact with tasks and vote during meetings.',
        keywords: 'multiplayer, social deduction, imposter, space, teamwork'
    },
    { 
        id: 'fireboy-and-watergirl-1', 
        name: 'Fireboy and Watergirl 1', 
        imageUrl: 'https://evanclub.github.io/images/fireboyandwatergirl.png', 
        iframeUrl: 'https://englishmathsciencereading.github.io/play1/', 
        description: 'Guide Fireboy and Watergirl through the Forest Temple in this co-op puzzle platformer. Solve puzzles and collect all the diamonds.',
        about: 'In the first adventure, Fireboy and Watergirl must work together to navigate the tricky Forest Temple. Control both characters to flip levers, push blocks, and overcome obstacles. Remember: Fireboy can\'t touch water, and Watergirl can\'t touch fire!',
        controls: 'Use WASD for Watergirl. Use Arrow Keys for Fireboy. Teamwork is key!',
        keywords: '2 player, co-op, puzzle, platformer, adventure'
    },
    { 
        id: 'fireboy-and-watergirl-2', 
        name: 'Fireboy and Watergirl 2', 
        imageUrl: 'https://evanclub.github.io/images/fireboyandwatergirl2.png', 
        iframeUrl: 'https://englishmathsciencereading.github.io/play2/', 
        description: 'The duo is back to take on the Light Temple! Use light and reflection to solve new puzzles and escape.',
        about: 'The Light Temple introduces new challenges. Manipulate beams of light, mirrors, and buttons to open doors and activate platforms. Can you guide Fireboy and Watergirl to safety once more?',
        controls: 'Control Watergirl with WASD and Fireboy with the Arrow Keys. A single player can control both, or play with a friend!',
        keywords: '2 player, co-op, puzzle, platformer, light temple'
    },
    { 
        id: 'fireboy-and-watergirl-3', 
        name: 'Fireboy and Watergirl 3', 
        imageUrl: 'https://evanclub.github.io/images/fireboyandwatergirl3.png', 
        iframeUrl: 'https://englishmathsciencereading.github.io/play3/', 
        description: 'Explore the chilly Ice Temple where water freezes and fire melts. A whole new set of puzzles awaits!',
        about: 'In the Ice Temple, Fireboy slides on ice while Watergirl is slowed down. You\'ll need to use both characters\' unique properties to overcome frozen levers and icy slopes. It\'s their coolest adventure yet!',
        controls: 'Use WASD to move Watergirl. Use the Arrow Keys to move Fireboy.',
        keywords: '2 player, co-op, puzzle, platformer, ice temple'
    },
    { 
        id: 'skibidi-toilet', 
        name: 'Skibidi Toilet', 
        imageUrl: 'https://evanclub.github.io/images/skibiditoilet.png', 
        iframeUrl: 'https://sciencemathedu.github.io/skibiditoilet/', 
        description: 'A hilarious and fast-paced action game inspired by the viral meme. Defend the city from the Skibidi Toilets!',
        about: 'Take on the role of the Cameramen and fight back against the invasion of the singing Skibidi Toilets. Use your weapons to clear waves of enemies in this quirky and action-packed shooter.',
        controls: 'Use WASD or Arrow Keys to move. Use the mouse to aim and shoot.',
        keywords: 'action, shooter, meme, funny, arcade'
    },
    { 
        id: 'block-puzzle-blast', 
        name: 'Block Puzzle Blast', 
        imageUrl: 'https://evanclub.github.io/images/blockblast.png', 
        iframeUrl: 'https://www.hoodamath.com/mobile/games/block-blast/game.html?nocheckorient=1', 
        description: 'A classic and addictive block puzzle game. Fit the blocks into the grid and clear lines to score points.',
        about: 'Challenge your brain with Block Puzzle Blast! Simply drag and drop the given blocks to fill rows or columns and watch them disappear. There\'s no time limit, so you can relax and strategize your moves.',
        controls: 'Use your mouse to drag and drop the blocks onto the grid.',
        keywords: 'puzzle, block game, brain teaser, relaxing, strategy'
    },
    { 
        id: 'donkey-kong', 
        name: 'Donkey Kong', 
        imageUrl: 'https://evanclub.github.io/images/donkeykong.png', 
        iframeUrl: 'https://sciencemathlearning.github.io/donkeykong.html', 
        description: 'Play the timeless arcade classic! Help Mario climb the construction site and rescue Pauline from the giant ape, Donkey Kong.',
        about: 'Experience a piece of gaming history. Dodge barrels, climb ladders, and jump over obstacles to reach the top. This pixel-perfect recreation brings the original 1981 arcade hit to your browser.',
        controls: 'Use Arrow Keys to move and Spacebar to jump.',
        keywords: 'classic, retro, arcade, platformer, 8-bit'
    },
    { 
        id: 'sonic', 
        name: 'Sonic the Hedgehog', 
        imageUrl: 'https://evanclub.github.io/images/sonic.png', 
        iframeUrl: 'https://sciencemathlearning.github.io/Sonic.html', 
        description: 'Gotta go fast! Play the original Sonic the Hedgehog online. Speed through iconic zones, collect rings, and defeat Dr. Robotnik.',
        about: 'Relive the classic Sega Genesis adventure that started it all. As Sonic, you\'ll use your incredible speed and spin attack to free your animal friends and stop Dr. Robotnik\'s evil plans.',
        controls: 'Use Arrow Keys to move. Press Spacebar to jump.',
        keywords: 'classic, retro, platformer, sega, speed'
    },
    { 
        id: 'learn-to-fly-2', 
        name: 'Learn to Fly 2', 
        imageUrl: 'https://evanclub.github.io/images/learntofly2.png', 
        iframeUrl: 'https://sciencemathlearning.github.io/learntofly2.html', 
        description: 'The penguin is back for revenge! Help him fly further and faster than ever by upgrading his glider, rocket, and more.',
        about: 'After destroying an iceberg in the first game, our penguin hero must now learn to fly to new heights. Earn cash from each flight to buy powerful upgrades and prove that penguins can indeed fly!',
        controls: 'Use the Left and Right Arrow Keys to control your angle. Press Spacebar to use boosts.',
        keywords: 'upgrade, flying, physics, funny, launcher'
    },
    { 
        id: 'baldis-basics', 
        name: 'Baldi\'s Basics', 
        imageUrl: 'https://evanclub.github.io/images/baldisbasics.png', 
        iframeUrl: 'https://sciencemathlearning.github.io/baldisbasics/', 
        description: 'A unique mix of horror, education, and 90s nostalgia. Collect notebooks and escape the school before Baldi catches you!',
        about: 'Welcome to Baldi\'s schoolhouse! Your goal is to collect seven notebooks scattered throughout the school. But be careful – answer the questions incorrectly, and Baldi will come after you. It\'s a race against time and a very angry teacher.',
        controls: 'Use WASD to move. Use the mouse to look around and interact.',
        keywords: 'horror, funny, indie, retro, survival'
    },
    { 
        id: 'just-fall-lol', 
        name: 'Just Fall LOL', 
        imageUrl: 'https://evanclub.github.io/images/justfalllol.png', 
        iframeUrl: 'https://sciencemathedu.github.io/justfalllol/', 
        description: 'Compete against other penguins in this chaotic multiplayer elimination game. Be the last one standing!',
        about: 'Just Fall LOL (League of Lobsters) is a fun, free-for-all platformer where you must survive on a collapsing hexagonal grid. Run, jump, and slide to outlast your opponents and claim victory.',
        controls: 'Use WASD or Arrow Keys to move your penguin.',
        keywords: 'multiplayer, .io game, platformer, survival, funny'
    },
    { 
        id: 'mini-putt', 
        name: 'Mini Putt', 
        imageUrl: 'https://evanclub.github.io/images/minigolf.png', 
        iframeUrl: 'https://sciencemathedu.github.io/miniputt/', 
        description: 'A relaxing and challenging game of miniature golf. Aim carefully and try to get a hole-in-one on every course.',
        about: 'Test your putting skills across a variety of creative and tricky mini-golf courses. The intuitive controls make it easy to play, but mastering the angles and power will take practice. Perfect for a quick and fun game session.',
        controls: 'Use the mouse to aim your shot. Click and hold to set the power, then release to putt.',
        keywords: 'golf, mini golf, sports, physics, skill'
    }
];

// This makes the 'games' array available to other scripts like game-loader.js
window.gameDatabase = games;

// The logic to randomize and display games on the homepage
// (This part should already be in your games.js file from the previous step,
// if not, you can add it here. It will only run on the homepage.)
document.addEventListener('DOMContentLoaded', () => {
    const gameGrid = document.getElementById('game-grid');
    if (!gameGrid) return; // Only run this code on the homepage

    const types = ['normal', 'normal', 'normal', 'normal', 'normal', 'wide', 'tall', 'large'];
    const randomizedGames = games.map(game => ({
        ...game,
        type: types[Math.floor(Math.random() * types.length)]
    }));

    const searchInput = document.getElementById('search-input');

    const displayGames = (gamesToDisplay) => {
        gameGrid.innerHTML = '';
        gamesToDisplay.forEach(game => {
            const card = document.createElement('a');
            card.href = `game.html?id=${game.id}`;
            card.className = `game-card ${game.type}`;
            
            const image = document.createElement('img');
            image.src = game.imageUrl;
            image.alt = game.name;
            image.loading = 'lazy';
            
            const title = document.createElement('div');
            title.className = 'game-card-title';
            title.textContent = game.name;
            
            card.appendChild(image);
            card.appendChild(title);
            gameGrid.appendChild(card);
        });
    };

    if (searchInput) {
        searchInput.addEventListener('input', (event) => {
            const searchTerm = event.target.value.toLowerCase();
            const filteredGames = randomizedGames.filter(game => game.name.toLowerCase().includes(searchTerm));
            displayGames(filteredGames);
        });
    }

    displayGames(randomizedGames);
});