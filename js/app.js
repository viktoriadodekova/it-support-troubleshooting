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


// =================================
// TROUBLESHOOTING ACCORDION
// =================================

const troubleshootingPanels =
    document.querySelectorAll(".troubleshooting-panel");

troubleshootingPanels.forEach((panel) => {

    panel.setAttribute("tabindex", "0");
    panel.setAttribute("role", "button");
    panel.setAttribute("aria-expanded", "false");

    const togglePanel = () => {

        panel.classList.toggle("is-expanded");

        const isExpanded =
            panel.classList.contains("is-expanded");

        panel.setAttribute(
            "aria-expanded",
            isExpanded
        );

    };

    panel.addEventListener("click", togglePanel);

    panel.addEventListener("keydown", (event) => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {
            event.preventDefault();
            togglePanel();
        }

    });

});

