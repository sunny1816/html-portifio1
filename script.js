const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log('Navigation Clicked');
    });
});
const form = document.getElementById("contact-form");
const statusMessage = document.getElementById("status-message");

form.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.sendForm(
        "service_fony9tb",
        "template_f4b5jbc",
        this
    )

    .then(() => {

        statusMessage.innerText = "Message Sent Successfully!";
        statusMessage.style.color = "#2cb67d";

        form.reset();

    })

    .catch(() => {

        statusMessage.innerText = "Failed To Send Message";
        statusMessage.style.color = "red";

    });

});