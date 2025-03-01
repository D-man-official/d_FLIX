
alert("Please search via the correct name of the movie or web series!");

// Ensure all elements are hidden on page load
window.onload = function() {
    document.getElementById('download-form').classList.add('hidden');
    document.getElementById('watch-online-form').classList.add('hidden');
    document.getElementById('download-buttons').classList.add('hidden');
    document.getElementById('watch-online-buttons').classList.add('hidden');
};

document.getElementById('download-btn').addEventListener('click', function() {
    const form = document.getElementById('download-form');
    form.classList.toggle('hidden'); // Toggle form visibility
    document.getElementById('download-buttons').classList.add('hidden'); // Hide buttons if form is closed
});

document.getElementById('watch-online-btn').addEventListener('click', function() {
    const form = document.getElementById('watch-online-form');
    form.classList.toggle('hidden'); // Toggle form visibility
    document.getElementById('watch-online-buttons').classList.add('hidden'); // Ensure buttons are hidden initially
});

document.getElementById('download-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const query = document.getElementById('movie-search').value.trim();
    if (query) {
        showDownloadButtons(query);
    }
});

document.getElementById('watch-online-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const query = document.getElementById('watch-url').value.trim();
    if (query) {
        showWatchOnlineButtons(query);
    }
});

function showDownloadButtons(query) {
    document.getElementById('download-buttons').classList.remove('hidden');
    const downloadSites = [
        { name: 'Vegamovies', url: `https://vegamovies.rs/?s=${encodeURIComponent(query)}` },
        { name: 'Vegamovies Hindi', url: `https://rogmovies.cfd/?s=${encodeURIComponent(query)}` },
        { name: 'Bollyflix', url: `https://bollyflix.phd/search/${encodeURIComponent(query)}` },
        { name: '9xflix', url: `https://9xflix.wine/?s=${encodeURIComponent(query)}` },
        { name: 'Yupmovies', url: `https://yupmovie.shop/?s=${encodeURIComponent(query)}` }
    ];

    document.getElementById('vegamovies-btn').onclick = () => window.open(downloadSites[0].url, '_blank');
    document.getElementById('vegamovies-hindi-btn').onclick = () => window.open(downloadSites[1].url, '_blank');
    document.getElementById('bollyflix-btn').onclick = () => window.open(downloadSites[2].url, '_blank');
    document.getElementById('flix9x-btn').onclick = () => window.open(downloadSites[3].url, '_blank');
    document.getElementById('yupmovie-btn').onclick = () => window.open(downloadSites[4].url, '_blank');
}

function showWatchOnlineButtons(query) {
    document.getElementById('watch-online-buttons').classList.remove('hidden');
    const watchOnlineSites = [
        { name: 'Multimovies', url: `https://multimovies.world/?s=${encodeURIComponent(query)}` }
    ];
    document.getElementById('multimovies-btn').onclick = () => window.open(watchOnlineSites[0].url, '_blank');
}


