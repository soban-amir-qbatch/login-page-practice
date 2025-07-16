document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent actual form submission

  const email = document.getElementById("email").value;
  const name = document.getElementById("password").value;

  // Example validation
  if (name === "" || email === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Display result
  console.log("Email:", email);
  console.log("Password:", name);
  alert("Login successful! Check console for details.");
});

