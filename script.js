document.addEventListener("DOMContentLoaded", () => {
    const emojiContainer = document.querySelector(".emoji-container");
    const emojis = ["💖", "💘", "💝", "💞", "💕", "💓", "💗", "💌", "😍", "🥰", "😘"];

    function createEmoji() {
        const emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * 100 + "vw"; // Posición aleatoria en el ancho
        emoji.style.animationDuration = (Math.random() * 3 + 2) + "s"; // Velocidad aleatoria

        emojiContainer.appendChild(emoji);

        // Eliminar el emoji después de la animación
        setTimeout(() => {
            emoji.remove();
        }, 5000);
    }

    // Generar emojis cada 500 ms
    setInterval(createEmoji, 500);
});