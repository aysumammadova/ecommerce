
const  loginBtn  = document.querySelector(".switch-login")
const registerBtn = document.querySelector(".switch-register")
const registerfile =document.querySelector(".register-form")
const loginfile = document.querySelector(".login-form")

  registerBtn.addEventListener("click",() => {
  registerfile.classList.remove("hidden")
  loginfile.classList.add("hidden")
  console.log("sss")
  })

  loginBtn.addEventListener("click",() => {
      registerfile.classList.add("hidden")
      loginfile.classList.remove("hidden")
  })


const registersubmit = document.querySelector("#register-form");
const registermail = document.querySelector("#register-mail");
const registerpassword = document.querySelector("#register-password").value;
const rmailerror = document.querySelector(".mailerror")
const rpass  = document.querySelector(".parolaerror")
const rpass2 = document.querySelector("#register-password2")
const rpasstruefalse = document.querySelector(".parolaerrortruefalse")

registersubmit.addEventListener("submit", (event) => {
    event.preventDefault();

    if(emailRegex.test(registersubmit.email.value)){
        console.log("duz")
        rmailerror.classList.add("hidden")
    }else{
        rmailerror.classList.remove("hidden")
        console.log("sehv")
    }

    //password -- 
    if(passwordRegex.test(registersubmit.rpassword.value)){
        console.log("duz")
        rpass.classList.add("hidden")
    }else{
        console.log("sehv")
        rpass.classList.remove("hidden")
    }

    // passwordun eyniliyi 
    if(registersubmit.rpassword.value != registersubmit.nrpassword.value){
        console.log("sehvdir")
        rpasstruefalse.classList.remove("hidden")
    }
    else{
        console.log("duz")
        rpasstruefalse.classList.add("hidden")
    }
    
});

document.querySelector("#register-mail").value = "";



const submit = document.querySelector("#login-submit");
const loginmail = document.querySelector("#login-mail");
const loginpassword = document.querySelector("#login-password").value;
const emailRegex =  /^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$/
const passwordRegex =/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
const namee = /^[a-zA-Z0-9]/;
const emailerror=document.querySelector(".emailerror")
const parolerror=document.querySelector(".parolerror")

submit.addEventListener("submit", (event) => {
  event.preventDefault();

  if (emailRegex.test(submit.mail.value)) {
    console.log("duz");
    emailerror.classList.add("hidden")
  } else {
    emailerror.classList.remove("hidden")
    console.log("sehv");

  }
  if (passwordRegex.test(submit.password.value)) {
    parolerror.classList.add("hidden")
  } else {
    console.log("sehv");
    parolerror.classList.remove("hidden")

  }
});

document.querySelector("#login-mail").value = "";
