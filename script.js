document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('letter-button');
    const letter = document.getElementById('letter-content');
    const music = document.getElementById('background-music');

    // Check if today is December 11, 2025
    const today = new Date();
    const targetDate = new Date('2025-12-11');

    if (today.toDateString() === targetDate.toDateString()) {
        button.disabled = false;
        button.addEventListener('click', function() {
            letter.style.display = 'block';
            // Optionally pause music or adjust
        });
    } else {
        button.textContent = 'Ainda não meu amor, volta no nosso dia!';
    }

    // Ensure music plays (may need user click in some browsers)
    music.play().catch(e => console.log('Audio autoplay blocked'));
});
