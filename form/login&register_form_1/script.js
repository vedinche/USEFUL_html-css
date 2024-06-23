//for form
let loginText = document.querySelector('.login__form-top .login');
let loginForm = document.querySelector('form.login');
let loginBtn = document.querySelector('label.login');
let signupBtn = document.querySelector('label.signup');
let signupLink = document.querySelector('.login__form-signup-link a');

signupBtn.onclick = () => {
  loginForm.style.marginLeft = '-50%';
  loginText.style.marginLeft = '-50%';
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = '0%';
  loginText.style.marginLeft = '0%';
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};

//for form modal
let openButton = document.querySelector('.open-form');
let closeButton = document.querySelectorAll('.login__form-close');
let formModal = document.querySelector('.form-modal');

// Add a "click" event for the щзут buttons
openButton.addEventListener('click', function () {
  formModal.style.display = 'block';
});

// Add a "click" event for the close buttons
for (let i = 0; i < closeButton.length; i++) {
  closeButton[i].addEventListener('click', function () {
    formModal.style.display = 'none';
  });
}

//Close the modal window when clicking outside it
window.addEventListener('click', function (event) {
  if (event.target === formModal) {
    formModal.style.display = 'none';
  }
});
