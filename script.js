document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('letter-button');
    const letter = document.getElementById('letter-content');
    const music = document.getElementById('background-music');

    // Sempre habilitar o botão (sem verificação de data)
    button.disabled = false;
    button.addEventListener('click', function() {
        letter.style.display = 'block';
        // Optionally pause music or adjust
    });

    // Ensure music plays (may need user click in some browsers)
    music.play().catch(e => console.log('Audio autoplay blocked'));
});
