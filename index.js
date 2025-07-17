
async function checkEmail(email) {
  const url = 'https://validect-email-verification-v1.p.rapidapi.com/v1/verify?email=soban.scf%40gmail.com';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'f3b070d96emsh8eb643ea48d3668p106ae0jsnaa80011c2def',
      'x-rapidapi-host': 'validect-email-verification-v1.p.rapidapi.com'
    }
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result.status
  } catch (error) {
    console.error(error);
  }
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent actual form submission

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Check if email is valid
  const status = checkEmail(email);
  if (status !== "valid") {
    alert("Please enter a valid email address.");
    return;
  }

  console.log("Email:", email);
  console.log("Password:", password);
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
