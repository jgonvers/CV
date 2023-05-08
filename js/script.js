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
