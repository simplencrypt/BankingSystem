document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const feedback = document.getElementById('feedback');

    fetch("https://script.google.com/macros/s/AKfycbyiuQssnEkx3eK9D5sg9tKaKt1vq4LN1gZbbBAbwAXqhPXHQOOWGYGWbZZ2IXeTKvBpLw/exec", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            feedback.innerText = "Login successful. Welcome.";
            feedback.style.color = "green";

            // Store user session
            localStorage.setItem("loggedInUser", username);

            // Temporary redirect
            // window.location.href = "dashboard.html";
        } else {
            feedback.innerText = "Invalid credentials.";
            feedback.style.color = "red";
        }
    })
    .catch(error => {
    feedback.innerText = "ERROR: " + error;
    feedback.style.color = "red";
    console.error("Fetch error:", error);
});

});

