const images = ["img/imagen1.png", "img/imagen2.png", "img/imagen3.png", "img/imagen4.png", "img/imagen5.png", "img/imagen6.png", "img/imagen7.png"];
let currentImageIndex = 0;

const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const currentImage = document.getElementById("current-image");

function showImage(index) {
    currentImage.src = images[index];
}

prevButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
});

nextButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
});

// Mostrar la primera imagen al cargar la página
showImage(currentImageIndex);

