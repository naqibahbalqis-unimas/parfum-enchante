document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".perfume-image");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((image, i) => {
            if (i === index) {
                image.classList.add("active");
            } else {
                image.classList.remove("active");
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Initially show the first image
    showImage(currentIndex);

    // Change the image every 20 seconds
    setInterval(nextImage, 20000);
});


window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});