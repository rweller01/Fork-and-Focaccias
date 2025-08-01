// 5 digit number generator
function numberGenerator() {
    return Math.floor(10000 + Math.random() * 90000);
}

function sendMail() {
    // Parameters
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.getElementById("email").value.trim();
        const phoneNumber = document.getElementById("phoneNumber").value.trim();
        const message = document.getElementById("message").value;
        const identifier = numberGenerator();
        const categoryID = document.getElementById("categoryID").value


    // Validation Parameters
    const regexName = /^[a-zA-Z\s\-]{1,}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPhoneNumber = /^04\d{8}$/;

    // Confirm inputs not empty & Valid
    // Category + Valid Test + Remove border if valid
    if (categoryID === "--select--") {
        alert("Category is empty, please enter your category");
        document.getElementById("categoryID").classList.add("errorBorder");
        return;
    }
    if (document.getElementById("categoryID").classList.contains("errorBorder")) {
        document.getElementById("categoryID").classList.remove("errorBorder");
    }


    // First Name + Valid Test + Remove border if valid
    if (!firstName) {
        alert("First name is empty, please enter your first name");
        document.getElementById("firstName").classList.add("errorBorder");
        return;
    }
    if (!regexName.test(firstName)) {
        alert("invalid first name");
        document.getElementById("firstName").classList.add("errorBorder");
        return;
    }
    if (document.getElementById("firstName").classList.contains("errorBorder")) {
        document.getElementById("firstName").classList.remove("errorBorder");
    }
    

    // Last Name + Valid Test
    if (!lastName) {
        alert("Last name is empty, please enter your last name");
        document.getElementById("lastName").classList.add("errorBorder");
        return;
    }
    if (!regexName.test(lastName)) {
        alert("Invalid last name format");
        document.getElementById("lastName").classList.add("errorBorder");
        return;
    }
    if (document.getElementById("lastName").classList.contains("errorBorder")) {
        document.getElementById("lastName").classList.remove("errorBorder");
    }

    // Email + Valid Test
    if (!email) {
        alert("Email is empty, please enter your email");
        document.getElementById("email").classList.add("errorBorder");
        return;
    }
    if (!regexEmail.test(email)) {
        alert("Invalid email format");
        document.getElementById("email").classList.add("errorBorder");
        return;
    }
    if (document.getElementById("email").classList.contains("errorBorder")) {
        document.getElementById("email").classList.remove("errorBorder");
    }

    // Phone Number + Valid Test
    if (!phoneNumber) {
        alert("Phone number is empty, please enter your phone number");
        document.getElementById("phoneNumber").classList.add("errorBorder");
        return;
    }
    if (!regexPhoneNumber.test(phoneNumber)) {
        alert("Invalid phone number format. Must start with 04 and be 10 digits.");
        document.getElementById("phoneNumber").classList.add("errorBorder");
        return;
    }
    if (document.getElementById("phoneNumber").classList.contains("errorBorder")) {
        document.getElementById("phoneNumber").classList.remove("errorBorder");
    }

    // Message + Valid Test
    if (!message) {
        alert("Message is empty, please enter your message");
        document.getElementById("message").classList.add("errorBorder");
        return;
    }
    if (document.getElementById("message").classList.contains("errorBorder")) {
        document.getElementById("message").classList.remove("errorBorder");
    }

    
    // Log validated inputs
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
    console.log("Message:", message);


    // // Notify form valid
    // alert("Form has been filled out correctly!! \nAttempting to send now...");

    // Create params object after validation
    const params = {
        firstName,
        lastName,
        email,
        phoneNumber,
        message,
        identifier,
        categoryID,
    };

    // Send Mail to email.js
    emailjs.send("service_ahxc0fc", "template_txs1frl", params)
        .then(function (res) {
            alert("Success " + categoryID + " Sent!");
            document.getElementById('formContactForm').reset()
        })
        .catch(function (err) {
            console.error("EmailJS Error:", err);
            alert("Failed to send email. Error: " + JSON.stringify(err));
        });
}