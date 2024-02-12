const mailEl = document.getElementById("mail");
let mailErrorMsg = document.getElementById("mailErrorMsg")

const passwordEl = document.getElementById("password");
let passwordErrorMsg = document.getElementById("passwordErrorMsg")


mailEl.addEventListener("blur", (event) => {
     let inputValue = event.target.value;
     if (inputValue == ''){
         mailErrorMsg.textContent = "Please enter E-mail";
         mailEl.classList.add("kis-input-border-color-active");
     }else{
         mailErrorMsg.textContent = "";
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