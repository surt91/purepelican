// https://jmperezperez.com/medium-image-progressive-loading-placeholder/

function set_image(ph) {
    let small = ph.querySelector('.img-small');

    // 1: load small image and show it
    let img = new Image();
    img.src = small.src;
    img.onload = function () {
        small.classList.add('loaded');
    };

    // 2: load large image
    let imgLarge = new Image();
    imgLarge.style.position = "absolute";
    imgLarge.alt = small.alt;
    imgLarge.src = ph.dataset.large;
    imgLarge.onload = function () {
        imgLarge.classList.add('loaded');
        small.style.opacity = 0;
        ph.style.backgroundColor = "";
    };

    ph.appendChild(imgLarge);
}

window.onload = function() {
    let placeholder = document.getElementsByClassName("placeholder");
    for(let i = 0; i < placeholder.length; i++) {
        set_image(placeholder[i]);
    }
}
