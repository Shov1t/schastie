const fullscreenButton = document.getElementById("fullscreen-button");
const fullscreenDiv = document.getElementById("fullscreen-div");
const fullscreenImage = document.getElementById("fullscreen-image");
const sparklesContainer = document.getElementById("sparkles");
const backgroundMusic = document.getElementById("background-music"); // Получаем элемент audio

fullscreenButton.addEventListener("click", () => {
  if (fullscreenDiv.style.display === "block") {
    fullscreenDiv.style.display = "none";
    fullscreenImage.style.display = "none";
    sparklesContainer.style.display = "none";
    fullscreenButton.style.visibility = "hidden";
    backgroundMusic.pause(); // При скрытии останавливаем музыку
  } else {
    fullscreenDiv.style.display = "block";
    document.documentElement.requestFullscreen();
    fullscreenImage.style.display = "block";
    fullscreenImage.style.animation = "fadeIn 1s ease-in";
    sparklesContainer.style.display = "block";
    createSparkles();
    backgroundMusic.play(); // При отображении начинаем воспроизведение музыки
  }
});

function createSparkles() {
  for (let i = 0; i < 20; i++) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.animationDuration = `${Math.random() * 2 + 1}s`;
    sparklesContainer.appendChild(sparkle);
  }
}
