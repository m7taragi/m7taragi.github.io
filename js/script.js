// JavaScript (script.js)
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const gender = document.getElementById("gender").value;
    const subscribe = document.getElementById("subscribe").checked;

    // Display the submitted data on the console (you can send it to a server here)
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);
    console.log("Gender: " + gender);
    console.log("Subscribe to newsletter: " + subscribe);

    // You can redirect to the next page or perform other actions here
});
