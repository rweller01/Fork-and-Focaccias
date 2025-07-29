// 5 digit number generator
function numberGenerator() {
    return Math.floor(10000 + Math.random() * 90000);
}

// Function to send email
function nothign() {
    // Parameters
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const message = document.getElementById("message").value.trim();
    const identifier = numberGenerator();

    console.log("Generated ID: " + identifier);

    // Validation Parameters
    const regexName = /^[a-zA-Z\s\-]{1,}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPhoneNumber = /^04\d{8}$/;

    // Confirm inputs not empty & Valid
    // First Name + Valid Test
    if (!firstName) {
        alert("First name is empty, please enter your first name");
        return;
    }
    if (!regexName.test(firstName)) {
        alert("Invalid first name format");
        return;
    }

    // Last Name + Valid Test
    if (!lastName) {
        alert("Last name is empty, please enter your last name");
        return;
    }
    if (!regexName.test(lastName)) {
        alert("Invalid last name format");
        return;
    }

    // Email + Valid Test
    if (!email) {
        alert("Email is empty, please enter your email");
        return;
    }
    if (!regexEmail.test(email)) {
        alert("Invalid email format");
        return;
    }

    // Phone Number + Valid Test
    if (!phoneNumber) {
        alert("Phone number is empty, please enter your phone number");
        return;
    }
    if (!regexPhoneNumber.test(phoneNumber)) {
        alert("Invalid phone number format. Must start with 04 and be 10 digits.");
        return;
    }

    // Message + Valid Test
    if (!message) {
        alert("Message is empty, please enter your message");
        return;
    }


    // Log validated inputs
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
    console.log("Message:", message);


    // Notify form valid
    alert("Form has been filled out correctly!! \nAttempting to send now...");


    // Send email
    var params = {
        identifier,
        firstName,
        lastName,
        email,
        phoneNumber,
        message,
    }

    emailjs.send("service_ahxc0fc", "template_txs1frl", params)
        .then(function (res) {
            alert("Success!");
        })
        .catch(function (err) {
            console.error("EmailJS Error:", err);
            alert("Failed to send email. Error: " + JSON.stringify(err));
        });
}






function sendMail() {
    const params = {
        firstName: "Test",
        lastName: "User",
        email: "test@example.com",
        phoneNumber: "0412345678",
        message: "This is a test message",
        identifier: numberGenerator()
    };

    emailjs.send("service_ahxc0fc", "template_txs1frl", params)
        .then(function (res) {
            console.log("Email sent! Status:", res.status);
            alert("Success! Status: " + res.status);
        })
        .catch(function (err) {
            console.error("EmailJS Error:", err);
            alert("Failed to send email. Error: " + JSON.stringify(err));
        });
    return;
}
