const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const body = document.querySelector("body");
const asideElement = document.querySelector("aside");
const containers = document.querySelectorAll(".container");
const memberLinks = document.querySelectorAll(".memberLink");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🌑")) {
        enableDarkMode();
    } else {
        enableLightMode();
    }
});

function enableDarkMode() {
    main.style.background = "#000";
    main.style.color = "#fff";
    body.style.background = "#000";
    body.style.color = "#fff";
    asideElement.style.background = "#000";
    asideElement.style.color = "#fff";

    containers.forEach(container => {
        container.style.background = "#222";
        container.style.color = "#fff";
    });

    memberLinks.forEach(link => {
        link.style.color = "#fff";
    });

    modeButton.textContent = "🔆";
}

function enableLightMode() {
    main.style.background = "";
    main.style.color = "";
    body.style.background = "";
    body.style.color = "";
    asideElement.style.background = "";
    asideElement.style.color = "";

    containers.forEach(container => {
        container.style.background = "";
        container.style.color = "";
    });

    memberLinks.forEach(link => {
        link.style.color = "";
    });

    modeButton.textContent = "🌑";
}