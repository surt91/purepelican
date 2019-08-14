init_language(document.documentElement.lang);

let lbtns = document.getElementsByClassName("language-button");
for(var i=0; i < lbtns.length; i++) {
    let lang = lbtns[i].dataset.lang;
    lbtns[i].addEventListener('click', x => switch_language(lang));
}

// https://stackoverflow.com/a/16427747/1698412
function lsTest(){
    var test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
}

function init_language(current) {
    // the default language is english, we will only guess an alternative, if
    // we are on the root, i.e., english version
    if(current != "en") {
        return;
    }

    // if local storage is not available, just do nothing
    // otherwise we might end in an infinite loop
    if (lsTest === false) {
        return;
    }

    var lang = localStorage.getItem("language");

    // do we need to change the language?
    if (lang == current) {
        return;
    }

    if (lang == "de") {
        window.location.replace("/de/");
    } else if (lang=="fr") {
        window.location.replace("/fr/");
    } else {
        // nothing known saved, guess language
        var userLang = navigator.language || navigator.userLanguage;
        if (userLang.substring(0, 1).toLowerCase() == "de") {
            switch_language_de();
            window.location.replace("/de/");
        } else if (userLang.substring(0, 1).toLowerCase() == "fr") {
            switch_language_fr();
            window.location.replace("/fr/");
        } else {
            switch_language_en();
            // we are already on the default, english page, so do nothing
        }
    }
}

function switch_language(lang) {
    localStorage.setItem("language", lang);
}
