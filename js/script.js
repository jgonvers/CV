function change_language(target) {
    const localized = document.querySelectorAll(".translated");
    const targets = document.querySelectorAll(target);
    for (const elem of localized) {
        elem.classList.add("hide")
    }
    for (const elem of targets) {
        elem.classList.remove("hide")
    }
}

function initial_language() {
    const lang_list = navigator.languages
    for (var lang of lang_list) {
        if (lang.startsWith("en")) { lang = "en"; break; }
        if (lang.startsWith("fr")) { lang = "fr"; break; }
    }
    switch (lang) {
        case "en":
            change_language(".english");
            break;
        case "fr":
            change_language(".french");
            break;
        default:
            change_language(".english");
    }
}
