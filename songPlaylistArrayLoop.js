function findSong(songs, k, q) {
    let forwardClicks = songFinder(songs, k, q, 'forward');
    let backwardClicks = songFinder(songs, k, q, 'backward');
    return forwardClicks < backwardClicks ? forwardClicks : backwardClicks;
}

function songFinder(songs, k, q, mode) {
    let clicks = 0;
    if (mode === 'forward') {
        while (songs[k] !== q) {
            if (k < songs.length && k !== songs.length) {
                k++;
                clicks++;
            } else if (k >= songs.length) {
                k = 0;
                // clicks++;
            }
        }
    } else if (mode === 'backward') {
        while (songs[k] !== q) {
            if (k >= 0) {
                k--;
                clicks++;
            } else if (k < 0) {
                k = songs.length - 1;
            }
        }
    }
    return clicks;
}

songs = ['hi','bye','guy','stuy']
k = 1;
q = 'guy';

console.log(findSong(songs, k, q))
