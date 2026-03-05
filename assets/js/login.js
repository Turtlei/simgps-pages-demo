function togglePassword() {
  const password = document.getElementById("password");
  const toggle = document.querySelector(".toggle");

  if (password.type === "password") {
    password.type = "text";
    toggle.textContent = "Hide";
  } else {
    password.type = "password";
    toggle.textContent = "Show";
  }
}

function handleLogin(event) {
  event.preventDefault();
  window.location.href = "index.html"; // redirect same tab
}

// function handleLogout() {
//   window.location.href = "logout.html";
// }

// function goLogin() {
//   window.location.href = "login.html";
// }
