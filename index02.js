// Select the form
const form = document.querySelector(".submitionForm");

// Create message display area
const message = document.createElement("p");
message.style.textAlign = "center";
message.style.fontWeight = "bold";
message.style.fontSize = "18px";
message.style.marginTop = "10px";
form.appendChild(message);

// Add event listener for form submission
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page reload

    // Get field values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const skills = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(
        (checkbox) => checkbox.value
    );
    const country = document.getElementById("country").value;

    // Email pattern check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Validation
    if (name === "" || email === "" || password === "") {
        showMessage("⚠️ Please fill out all required fields!", "red");
    } else if (!email.match(emailPattern)) {
        showMessage("❌ Invalid email format!", "orange");
    } else if (password.length < 6) {
        showMessage("🔒 Password must be at least 6 characters!", "orange");
    } else if (!gender) {
        showMessage("🚻 Please select your gender!", "red");
    } else if (skills.length === 0) {
        showMessage("🧠 Please select at least one skill!", "red");
    } else if (country === "NONE") {
        showMessage("🌍 Please select a valid country!", "red");
    } else {
        // Everything is valid
        showMessage("✅ Form Submitted Successfully!", "green");

        // Optional: show collected data in console
        console.log({
            name,
            email,
            password,
            gender: gender.value,
            skills,
            country
        });

        // Reset form after 2 seconds
        setTimeout(() => {
            form.reset();
            message.textContent = "";
        }, 2000);
    }
});

// Function to show messages dynamically
function showMessage(text, color) {
    message.textContent = text;
    message.style.color = color;
}

// 🔹 Add focus glow animation to inputs
const inputs = document.querySelectorAll("input, select, textarea");
inputs.forEach((input) => {
    input.addEventListener("focus", () => {
        input.style.border = "2px solid #007bff";
        input.style.boxShadow = "0 0 8px #007bff";
    });
    input.addEventListener("blur", () => {
        input.style.border = "1px solid #ccc";
        input.style.boxShadow = "none";
    });
});
// 🔹 Add hover effect to submit button
const submitButton = document.querySelector('input[type="submit"]');
submitButton.addEventListener("mouseover", () => {
    submitButton.style.backgroundColor = "#0056b3";
    submitButton.style.transform = "scale(1.05)";
});
submitButton.addEventListener("mouseout", () => {
    submitButton.style.backgroundColor = "";
    submitButton.style.transform = "scale(1)";
});