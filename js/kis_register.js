const instituteEl = document.getElementById("institute");
let instituteErrorMsgEl = document.getElementById("instituteErrorMsg")

const mailEl = document.getElementById("mail");
let mailErrorMsgEl = document.getElementById("mailErrorMsg")

const passwordEl = document.getElementById("password");
let passwordErrorMsg = document.getElementById("passwordErrorMsg")

const confirmPasswordEl = document.getElementById("confirmPassword");
let confirmPasswordErrorMsgEl = document.getElementById("confirmPasswordErrorMsg")






instituteEl.addEventListener("blur", (event) => {
     let inputValue = event.target.value;
     if (inputValue == ''){
         instituteErrorMsgEl.textContent = "Please enter institute name";
         instituteEl.classList.add("kis-input-border-color-active");
     }else{
         instituteErrorMsgEl.textContent = "";
         instituteEl.classList.remove("kis-input-border-color-active");
     }
})

mailEl.addEventListener("blur", (event) => {
     let inputValue = event.target.value;
     if (inputValue == ''){
         mailErrorMsgEl.textContent = "Please enter E-mail";
         mailEl.classList.add("kis-input-border-color-active");
     }else{
         mailErrorMsgEl.textContent = "";
         mailEl.classList.remove("kis-input-border-color-active");
     }
})

passwordEl.addEventListener("blur", (event) => {
     let inputValue = event.target.value;
     if (inputValue == ''){
         passwordErrorMsg.textContent = "Please enter password";
         passwordEl.classList.add("kis-input-border-color-active");
     }else{
         passwordErrorMsg.textContent = "";
         passwordEl.classList.remove("kis-input-border-color-active");
     }
})

confirmPasswordEl.addEventListener("blur", (event) => {
     let inputValue = event.target.value;
     if (inputValue == ''){
         confirmPasswordErrorMsgEl.textContent = "Please enter correct password";
         confirmPasswordEl.classList.add("kis-input-border-color-active");
     }else{
         confirmPasswordErrorMsgEl.textContent = "";
         confirmPasswordEl.classList.remove("kis-input-border-color-active");
     }
})