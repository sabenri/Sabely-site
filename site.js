const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
    card.addEventListener("click",() => {
        card.classList.toggle("flipped")
    });
});

const projectLinks = document.querySelectorAll(".project-link");

projectLinks.forEach((link) => {
    link.addEventListener("click", (Event) => {
        Event.stopPropagation();

    });
});