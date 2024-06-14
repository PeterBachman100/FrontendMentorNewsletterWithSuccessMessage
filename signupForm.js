"use strict";

// Elements
const signUpCard = document.getElementById("sign-up-card");
const successCard = document.getElementById("success-card");
const signUpForm = document.getElementById("signup-form");
const emailIn = document.getElementById("email");
const submitBtn = document.getElementById("submit-btn");
const dismissBtn = document.getElementById("dismiss-btn");
const submittedEmail = document.getElementById("submitted-email");

// Event-listeners
submitBtn.addEventListener("click", submitEmail);
dismissBtn.addEventListener("click", toggleCards);

// Functions
// toggle cards
function toggleCards() {
  signUpCard.classList.toggle("hidden");
  successCard.classList.toggle("hidden");
}

// email validation
function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

// submit email form
function submitEmail(e) {
  e.preventDefault();

  // valid email
  if (validateEmail(emailIn.value)) {
    submittedEmail.innerText = emailIn.value;
    toggleCards();
    emailIn.value = "";
    signUpForm.classList.remove("error");
  }
  // invalid email
  else {
    signUpForm.classList.add("error");
  }
}
