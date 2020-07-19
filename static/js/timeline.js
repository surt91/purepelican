const cat_defaults = {
    work: "true",
    visit: "true",
    graduation: "true",
    conference: "true",
    workshop: "false",
    summerschool: "false",
    teaching: "false",
    prize: "false"
};

document.addEventListener("DOMContentLoaded", init_timeline);

function init_timeline() {
    for (let cat of Object.keys(cat_defaults)) {
        let visibility = localStorage.getItem(cat);
        if (visibility === null) {
            // apparently undefined, take a default value
            localStorage.setItem(cat, cat_defaults[cat]);
            visibility = cat_defaults[cat];
        }

        if (visibility === "true") {
            // remove class hidden
            let checkbox = document.querySelector('[data-category="' + cat + '"]');
            if (!(checkbox === null)) {
                checkbox.checked = true;
            }
            show_timeline(cat);
        } else {
            // append class hidden (also for categories, which are unspecified)
            let checkbox = document.querySelector('[data-category="' + cat + '"]');
            if (!(checkbox === null)) {
                checkbox.checked = false;
            }
            hide_timeline(cat);
        }
    }

    let tl_boxes = document.getElementsByClassName("timeline-checkbox");
    for (let chkbx of tl_boxes) {
        chkbx.addEventListener( 'change', function() {
            if(this.checked) {
                show_timeline(this.dataset.category);
            } else {
                hide_timeline(this.dataset.category);
            }
        });
    }
}

function show_timeline(category) {
    localStorage.setItem(category, "true");
    for (let item of document.getElementsByClassName(category)) {
        item.classList.remove("hidden");
    }
}

function hide_timeline(category) {
    localStorage.setItem(category, "false");
    for (let item of document.getElementsByClassName(category)) {
        item.classList.add("hidden");
    }
}
