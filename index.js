document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent actual form submission

  const email = document.getElementById("email").value;
  const name = document.getElementById("password").value;

  if (name === "" || email === "") {
    alert("Please fill in all fields.");
    return;
  }

  console.log("Email:", email);
  console.log("Password:", name);
  alert("Login successful! Check console for details.");
});

// document.addEventListener('DOMContentLoaded', function() {
//   const navToggle = document.querySelector('.nav-toggle');
//   const navLinks = document.querySelector('.nav-links');
//   navToggle.addEventListener('click', function() {
//     navLinks.classList.toggle('active');
//   });
// });

function toggleMenu() {
  const menu = document.querySelector('.nav-links');
  menu.classList.toggle('active');
}
