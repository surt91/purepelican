// inspired by
// https://jmperezperez.com/medium-image-progressive-loading-placeholder/

function set_image(ph) {
    let small = ph.querySelector('.img-small');

    let imgLarge = new Image();
    imgLarge.alt = small.alt;
    imgLarge.src = ph.dataset.large;
    imgLarge.classList.add("img-large")
    imgLarge.onload = function () {
        imgLarge.classList.add("loaded")
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
