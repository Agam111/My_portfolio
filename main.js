/**Dark Theme */
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});
/* ======= Mixitup filter ======== */
let mixerProjects = mixitup(".projects__container", {
    selectors: {
        target: ".project__item",
    },
    animation: {
        duration: 300,
    },
});

/* Active work */
const linkWork = document.querySelectorAll(".category__btn");

function activeWork() {
    linkWork.forEach((a) => a.classList.remove("active-work"));
    this.classList.add("active-work");
}

linkWork.forEach((a) => a.addEventListener("click", activeWork));

/* ======= Contact Form ======== */

const contactForm = document.getElementById("contact-form"),
    contactName = document.getElementById("contact-name"),
    contactEmail = document.getElementById("contact-email"),
    Message = document.getElementById("message"),
    contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
    e.preventDefault();

    // check if field has a value
    if (
        contactName.value === "" ||
        contactEmail.value === "" ||
        Message.value === ""
    ) {
        // add and remove color
        contactMessage.classList.remove("color-light");
        contactMessage.classList.add("color-dark");

        // show message
        contactMessage.textContent = "Write all the input fields";
    } else {
        // serviceID - templateID - #form - publickey
        emailjs
            .sendForm(
                "service_6ohss0p",
                "template_dughrfa",
                "#contact-form",
                "oEjOrSMJl4_1W_M3N"
            )
            .then(
                () => {
                    // show message and add color
                    contactMessage.classList.add("color-light");
                    contactMessage.textContent = "Message Sent ✔️";

                    //remove message after 5 seconds
                    setTimeout(() => {
                        contactMessage.textContent = "";
                    }, 5000);
                },
                (error) => {
                    alert("OOPs! SOMETHING WENT WRONG...", error);
                }
            );

        // clear input fields
        contactName.value = "";
        contactEmail.value = "";
        Message.value = "";
    }
};

contactForm.addEventListener("submit", sendEmail);
