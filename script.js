document.addEventListener("DOMContentLoaded", () => {

    const button = document.querySelector(".watch-button");

    if (!button) return;

    button.addEventListener("click", () => {

        button.style.transform = "scale(0.96)";

        setTimeout(() => {
            button.style.transform = "";
        }, 150);

    });

});
