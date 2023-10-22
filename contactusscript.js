// Wait for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function() {
    // Select the form element
    const form = document.querySelector("form");

    // Add event listener to the form for submit event
    form.addEventListener("submit", function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get form input values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        // Simple form validation
        if (name.trim() === "") {
            alert("Please enter your name.");
            return;
        }

        if (email.trim() === "") {
            alert("Please enter your email.");
            return;
        }

        if (phone.trim() === "") {
            alert("Please enter your phone number.");
            return;
        }

        if (message.trim() === "") {
            alert("Please enter your message.");
            return;
        }

        // If all fields are filled, you can proceed with sending the form data to the server or perform other actions.
        // For now, let's show an alert indicating the form submission.
        alert("Form submitted successfully!");
        form.reset();
    });
});
