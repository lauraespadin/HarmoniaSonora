let albuns = document.querySelectorAll(".album");

albuns.forEach(function(album) {
    let disco = album.querySelector(".disco");
    let musica = album.querySelector(".musica");
    let botao = album.querySelector(".play");

    botao.addEventListener("click", function() {

        if (musica.paused) {

            albuns.forEach(function(outroAlbum) {
                let outraMusica = outroAlbum.querySelector(".musica");
                let outroDisco = outroAlbum.querySelector(".disco");
                let outroBotao = outroAlbum.querySelector(".play");

                outraMusica.pause();
                outraMusica.currentTime = 0;

                outroDisco.classList.remove("tocando");
                outroBotao.textContent = "▶ Play";
            });

            musica.play()
                .then(function() {
                    disco.classList.add("tocando");
                    botao.textContent = "⏸ Pausar";
                })
                .catch(function() {
                    alert("Não foi possível tocar a música.");
                });

        } else {
            musica.pause();
            disco.classList.remove("tocando");
            botao.textContent = "▶ Play";
        }
    });

    musica.addEventListener("ended", function() {
        disco.classList.remove("tocando");
        botao.textContent = "▶ Play";
    });
});