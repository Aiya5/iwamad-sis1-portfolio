// ---- theme toggle ----
const html = document.documentElement;
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  const isDark = html.dataset.theme === "dark";
  html.dataset.theme = isDark ? "light" : "dark";
  toggle.textContent = isDark ? "🌙" : "☀️";
});

// ---- contact form ----
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  // reset
  status.className = "";
  status.textContent = "";

  // empty check
  if (!name || !email || !message) {
    let missing = [];
    if (!name) missing.push("name");
    if (!email) missing.push("email");
    if (!message) missing.push("message");

    status.classList.add("error");
    status.textContent = "Please fill in: " + missing.join(", ") + ".";
    return;
  }

  // email format check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    status.classList.add("error");
    status.textContent = "That email address doesn't look right.";
    return;
  }

  // success
  status.classList.add("success");
  status.textContent = "Thanks, " + name + "! Your message was sent.";
  form.reset();
});