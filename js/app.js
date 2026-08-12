const flipButtons = document.querySelectorAll('[data-action="flip"]');

flipButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const card = button.closest(".incident-card");

        card.classList.toggle("is-flipped");

        const isFlipped =
            card.classList.contains("is-flipped");

        const cardButtons =
            card.querySelectorAll('[data-action="flip"]');

        cardButtons.forEach((cardButton) => {
            cardButton.setAttribute(
                "aria-pressed",
                isFlipped
            );
        });

    });

});
