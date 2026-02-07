document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const feedback = document.getElementById('feedback');

    fetch("https://script.google.com/macros/s/AKfycbz7U_iR3rfV1MYmpyQFQhVI0urefi5pL3ymF-UhbprFtdSNtEtuBqzIQlPrWyUuHZqg3w/exec", {
        method: "POST",
        body: new URLSearchParams({
            username: username,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            feedback.innerText = "Login successful. Welcome.";
            feedback.style.color = "green";
            localStorage.setItem("loggedInUser", username);
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


