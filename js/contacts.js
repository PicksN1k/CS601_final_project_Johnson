// Grab elements
const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");

const successMsg = document.getElementById("success-message");

// Email validation format
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// UNIVERSAL FIELD STYLE UPDATE
function setFieldState(input, errorField, valid, message = "") {
  errorField.textContent = message;
  input.classList.toggle("valid", valid);
  input.classList.toggle("invalid", !valid);
}

// INDIVIDUAL VALIDATION FUNCTIONS
function validateName() {
  if (!nameInput.value.trim()) {
    setFieldState(nameInput, nameError, false, "Please enter your full name.");
    return false;
  }
  setFieldState(nameInput, nameError, true);
  return true;
}

function validateEmail() {
  if (!emailInput.value.trim()) {
    setFieldState(emailInput, emailError, false, "Email is required.");
    return false;
  }
  if (!emailRegex.test(emailInput.value)) {
    setFieldState(emailInput, emailError, false, "Enter a valid email.");
    return false;
  }
  setFieldState(emailInput, emailError, true);
  return true;
}

function validateMessage() {
  if (!messageInput.value.trim()) {
    setFieldState(messageInput, messageError, false, "Please enter a message.");
    return false;
  }
  setFieldState(messageInput, messageError, true);
  return true;
}

// LIVE LISTENERS (REAL-TIME FEEDBACK)
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
messageInput.addEventListener("input", validateMessage);

// FORM SUBMIT
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const validName = validateName();
  const validEmail = validateEmail();
  const validMessage = validateMessage();

  if (validName && validEmail && validMessage) {
    successMsg.textContent = "Message sent successfully!";
    successMsg.style.display = "block";

    form.reset();
    
    // Reset visual state
    [nameInput, emailInput, messageInput].forEach(input => {
      input.classList.remove("valid", "invalid");
    });
  }
});