document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('letter-button');
    const letter = document.getElementById('letter-content');
    const music = document.getElementById('background-music');
    const playMusicButton = document.getElementById('play-music-button');

    // Sempre habilitar o botão (sem verificação de data)
    button.disabled = false;
    button.addEventListener('click', function() {
        letter.style.display = 'block';
        // Optionally pause music or adjust
    });

    // Botão para tocar música manualmente
    playMusicButton.addEventListener('click', function() {
        music.play().then(() => {
            playMusicButton.style.display = 'none'; // Esconde o botão após tocar
        }).catch(e => console.log('Erro ao tocar música:', e));
    });
});
