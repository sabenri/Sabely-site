const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const submitButton = document.querySelector("#submit-button");

const PUBLIC_KEY = "QSVh9WcMIDw_zZ6i6";
const SERVICE_ID = "service_626y4lq";
const TEMPLATE_ID = "template_vv9echf";

emailjs.init({
    PublicKey: PUBLIC_KEY
});

contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()){
        contactForm.reportValidity();
        return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "sending..";

    formStatus.textContent = "";
    formStatus.className = "";

    try{
        await emailjs.sendForm(
            SERVICE_ID,
            TEMPLATE_ID,
            contactForm
        );

        formStatus.textContent = "Your message has been sent!";

        formStatus.className = "success";
        contactForm.requestFullscreen();
    } catch (error) {
        console.error("Email failed to send", error);

        formStatus.textContent = "Something went worng. Please try again.";

        formStatus.className = "error";
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = "send Message";
    }
});
