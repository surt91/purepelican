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
    // if local storage is not available, just do nothing
    // otherwise we will end in an infinite loop
    if (lsTest === false) {
        return;
    }

    var lang = localStorage.getItem("language");

    // do we need to change the language?
    if (lang == current) {
        return;
    }

    if (lang == "de") {
        window.location.replace("/");
    } else if (lang=="en") {
        window.location.replace("/en/");
    } else {
        // nothing known saved, guess language
        var userLang = navigator.language || navigator.userLanguage;
        if (userLang.substring(0, 1).toLowerCase() == "de") {
            window.location.replace("/");
        } else {
            window.location.replace("/en/");
        }
    }
}

function switch_language_de() {
    localStorage.setItem("language", "de");
}

function switch_language_en() {
    localStorage.setItem("language", "en");
}
