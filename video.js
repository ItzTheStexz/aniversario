document.addEventListener("DOMContentLoaded", () => {
    const videoContainer = document.querySelector(".video-container");
    const loadingScreen = document.querySelector(".loading-screen");
    const skipLoading = document.getElementById("skipLoading");
    const video = document.getElementById("miVideo");
    const playPauseBtn = document.getElementById("playPauseBtn");

    // Evento para quitar la pantalla de carga manualmente
    skipLoading.addEventListener("click", () => {
        loadingScreen.classList.add("hidden"); // Oculta la pantalla de carga
        videoContainer.classList.remove("hidden"); // Muestra el video
    });

    // Controlar la reproducción del video con el botón
    playPauseBtn.addEventListener("click", () => {
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = "⏸";
        } else {
            video.pause();
            playPauseBtn.textContent = "▶";
        }
    });
});