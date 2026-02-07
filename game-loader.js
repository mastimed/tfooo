// This function waits for the main game database to be loaded before running.
// This prevents errors if games.js loads slower than game-loader.js
function initializeGamePage() {
    const params = new URLSearchParams(window.location.search);
    const gameId = params.get('id');
    const game = window.gameDatabase.find(g => g.id === gameId);

    if (game) {
        // --- 1. POPULATE SEO TAGS ---
        
        // Set the page title
        document.title = `Play ${game.name} Online for Free - TFOOO`;

        // Set the meta description
        document.querySelector('meta[name="description"]').setAttribute('content', game.description);

        // Set the canonical URL
        // IMPORTANT: Replace 'your-username.github.io' with your actual GitHub Pages URL
        const canonicalUrl = `https://your-username.github.io/game.html?id=${game.id}`;
        document.querySelector('link[rel="canonical"]').setAttribute('href', canonicalUrl);

        // Create and inject the JSON-LD Schema for rich results
        const schema = {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": game.name,
            "url": canonicalUrl,
            "image": game.imageUrl,
            "description": game.about,
            "gamePlatform": ["PC", "Mobile", "Tablet"],
            "playMode": "SinglePlayer",
            "applicationCategory": "Game",
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
            }
        };
        document.getElementById('game-schema').textContent = JSON.stringify(schema);

        // --- 2. POPULATE PAGE CONTENT ---
        
        document.getElementById('game-title').textContent = game.name;
        document.getElementById('game-about').textContent = game.about;
        document.getElementById('game-controls').textContent = game.controls;
        
        const gameViewportElement = document.getElementById('game-viewport');
        const iframe = document.createElement('iframe');
        iframe.src = game.iframeUrl;
        iframe.frameBorder = "0";
        iframe.allowFullscreen = true;
        iframe.loading = "lazy";
        iframe.title = `${game.name} Game Window`; // SEO: Add a title to the iframe
        gameViewportElement.appendChild(iframe);

        // Fullscreen button logic
        const fullscreenButton = document.querySelector('.fullscreen-button');
        fullscreenButton.addEventListener('click', () => {
            if (gameViewportElement.requestFullscreen) gameViewportElement.requestFullscreen();
            else if (gameViewportElement.webkitRequestFullscreen) gameViewportElement.webkitRequestFullscreen();
        });

        // "You might also like" section logic
        const otherGamesGrid = document.getElementById('other-games-grid');
        if (otherGamesGrid) {
            const otherGames = window.gameDatabase.filter(g => g.id !== gameId).sort(() => 0.5 - Math.random()).slice(0, 6);
            otherGames.forEach(otherGame => {
                const card = document.createElement('a');
                card.href = `game.html?id=${otherGame.id}`;
                card.className = 'other-game-card';
                card.innerHTML = `<img src="${otherGame.imageUrl}" alt="${otherGame.name}" loading="lazy"><div class="other-game-title">${otherGame.name}</div>`;
                otherGamesGrid.appendChild(card);
            });
        }

    } else {
        // Handle case where game is not found
        document.title = "Game Not Found - TFOOO";
        document.getElementById('game-title').textContent = "Game Not Found";
        const gameDetails = document.getElementById('game-details');
        if(gameDetails) gameDetails.innerHTML = "<p>Sorry, the game you are looking for does not exist. Please return to the homepage.</p>";
        const otherGamesSection = document.getElementById('other-games');
        if (otherGamesSection) otherGamesSection.style.display = 'none';
    }
}

// Wait until the DOM is loaded to run the script
document.addEventListener('DOMContentLoaded', initializeGamePage);