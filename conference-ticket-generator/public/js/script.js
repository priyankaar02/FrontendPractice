const formContainer = document.getElementById("formContainer");
const confirmationPage = document.getElementById("confirmationPage");
const submitBtn = document.getElementById("submitBtn");

const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const username = document.getElementById("username");

const fullnameError = document.getElementById("fullnameError");
const emailError = document.getElementById("emailError");
const usernameError = document.getElementById("usernameError");
const avatarError = document.getElementById("avatarError");

const confirmName = document.getElementById("confirmName");
const confirmEmail = document.getElementById("confirmEmail");
const confirmUsername = document.getElementById("confirmUsername");
const confirmHandle = document.getElementById("confirmHandle");
const confirmAvatar = document.getElementById("confirmAvatar");
const displayLocation = document.getElementById("location");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Stop form submission

  let isValid = true;

  // Validate Full Name
  if (fullname.value.trim() === "") {
    fullnameError.classList.remove("hidden");
    isValid = false;
  } else {
    fullnameError.classList.add("hidden");
  }

  // Validate Email
  if (!email.value.includes("@") || email.value.trim() === "") {
    emailError.classList.remove("hidden");
    isValid = false;
  } else {
    emailError.classList.add("hidden");
  }

  // Validate Username
  if (username.value.trim() === "") {
    usernameError.classList.remove("hidden");
    isValid = false;
  } else {
    usernameError.classList.add("hidden");
  }

  // Validate Avatar
  if (!fileInput.files.length) {
    avatarError.classList.remove("hidden");
    isValid = false;
  } else {
    avatarError.classList.add("hidden");
  }

  // If all fields are valid, proceed to confirmation page
  if (isValid) {
    confirmName.innerText = fullname.value;
    confirmEmail.innerText = email.value;
    confirmUsername.innerText = fullname.value;
    confirmHandle.innerText = username.value.toLowerCase();
    confirmAvatar.src = imagePreview.src;

    displayLocation.innerText = Date().toLocaleString("en-US");

    formContainer.classList.add("hidden");
    confirmationPage.classList.remove("hidden");
  }
});
