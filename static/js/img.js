// https://jmperezperez.com/medium-image-progressive-loading-placeholder/

function set_image(ph) {
    let small = ph.querySelector('.img-small');
    let h = ph.querySelector('div');
    h.style.paddingBottom = "300px";

    // 1: load small image and show it
    let img = new Image();
    img.src = small.src;
    img.onload = function () {
        small.classList.add('loaded');
        h.style.paddingBottom = small.clientHeight;
    };

    // 2: load large image
    let imgLarge = new Image();
    imgLarge.src = ph.dataset.large;
    imgLarge.onload = function () {
        imgLarge.classList.add('loaded');
        image.alt = small.alt;
        h.style.paddingBottom = imgLarge.clientHeight;
        h.style.backgroundColor = "";
        small.style.display = "none";
    };

    ph.appendChild(imgLarge);
}

window.onload = function() {
    let placeholder = document.getElementsByClassName("placeholder");
    for(let i = 0; i < placeholder.length; i++) {
        set_image(placeholder[i]);
    }
}
