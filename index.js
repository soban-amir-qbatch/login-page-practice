
const jobData = [
  {
    title: "Software Engineer",
    company: "Tech Solutions",
    location: "New York, NY",
  },
  {
    title: "Data Analyst",
    company: "Data Insights",
    location: "San Francisco, CA",
  },
  {
    title: "Web Developer",
    company: "Web Creators",
    location: "Austin, TX",
  },
  {
    title: "Project Manager",
    company: "Project Pros",
    location: "Chicago, IL",
  },
  {
    title: "UX Designer",
    company: "Design Studio",
    location: "Los Angeles, CA",
  },
  {
    title: "Marketing Specialist",
    company: "Marketing Masters",
    location: "Miami, FL",
  },
  {
    title: "System Administrator",
    company: "IT Solutions",
    location: "Seattle, WA",
  }
];

async function checkEmail(email) {
  const url = 'https://validect-email-verification-v1.p.rapidapi.com/v1/verify?email=' + encodeURIComponent(email);
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

// document.getElementById("loginForm").addEventListener("submit", function(event) {
//   event.preventDefault(); // Prevent actual form submission

//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   if (email === "" || password === "") {
//     alert("Please fill in all fields.");
//     return;
//   }

//   // Check if email is valid
//   const status = checkEmail(email);
//   if (status !== "valid") {
//     alert("Please enter a valid email address.");
//     return;
//   }

//   console.log("Email:", email);
//   console.log("Password:", password);
//   alert("Login successful! Check console for details.");
// });


function SignIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log("Email:", email);
  console.log("Password:", password);

  if (email === "" || password === "") {  
    alert("Please fill in all fields.");
    return;
  }

  checkEmail(email).then(status => {
    if (status == "invalid") {
      alert("Please enter a valid email address.");
      return;
    }
    alert("Login successful! Check console for details.");
  });
  
  //redirect to job listings page
  window.location.href = "jobs.html";
}


function SignUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmpassword").value;

  if (email === "" || password === "" || confirmPassword === "") {
    alert("Please fill in all fields.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match."); 
    return;
  }
 checkEmail(email).then(status => {
    if (status == "invalid") {
      alert("Please enter a valid email address.");
      return;
    }
    alert("Sign up successful!");
 });

  //redirect to login page
  window.location.href = "index.html";
}


function toggleMenu() {
  const menu = document.querySelector('.nav-links');
  menu.classList.toggle('active');
}


const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission on Enter key
    }
  });
}

console.log("Job data loaded:", jobData);

const jobList = document.querySelector(".job-list");
if (jobList) {
  jobList.innerHTML = "";
  jobData.forEach(job => {
    const jobCard = document.createElement("div");
    jobCard.className = "job-card";
    jobCard.innerHTML = `
      <h4>${job.title}</h4>
      <p><strong>Company:</strong> ${job.company}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <button class="apply-button">Apply Now</button>
    `;
    jobList.appendChild(jobCard);
  });
}



// document.addEventListener('DOMContentLoaded', function() {
//   const navToggle = document.querySelector('.nav-toggle');
//   const navLinks = document.querySelector('.nav-links');
//   navToggle.addEventListener('click', function() {
//     navLinks.classList.toggle('active');
//   });
// });

