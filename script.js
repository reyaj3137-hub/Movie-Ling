document.addEventListener("DOMContentLoaded", function () {

    const watchButton =
        document.querySelector(".watch-button");

    if (!watchButton) {
        return;
    }


    watchButton.addEventListener(
        "click",
        function () {

            watchButton.classList.add(
                "button-clicked"
            );

            setTimeout(function () {

                watchButton.classList.remove(
                    "button-clicked"
                );

            }, 250);

        }
    );

});
