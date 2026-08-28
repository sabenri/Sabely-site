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

const tagline = document.querySelector(".tagline");

const taglines = [
    "Creative Coding",
    "Interactive Experiencess",
    "Full-Stack Development",
    "AI Experimentation ",
];

let currentTagline = 0;
let currentLetter = 0;
let isDeleting = false;

function typeTagline() {
    const currentText = taglines[currentTagline];

    if (isDeleting) {
        tagline.textContent = currentText.substring(0, currentLetter -1);
        currentLetter--;
    } else {
        tagline.textContent = currentText.substring(0, currentLetter + 1);
        currentLetter++
    }

    let typingspeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && currentLetter === currentText.length) {
        typingspeed = 2000;
        isDeleting = true;
    }

    if (isDeleting && currentLetter === 0) {
        isDeleting = false;
        currentTagline++;

        if (currentTagline === taglines.length) {
            currentTagline = 0;
        }

        typingspeed = 500;
    }

    setTimeout(typeTagline, typingspeed);
}

typeTagline();