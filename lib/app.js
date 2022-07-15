//faq query
const learn = document.querySelectorAll(".learn-content");
// login-signup 
const container = document.querySelector(".container"),
    pwdShowhide = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password"),
    login = document.querySelector(".login-link"),
    signup = document.querySelector(".signup-link");



// faq query
learn.forEach((learn) => {
    learn.addEventListener("click", () => {
        learn.classList.toggle("active");
    })
})

//login-signup
pwdShowhide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwFields.forEach(pwFields => {
            if (pwFields.type === "password") {
                pwFields.type = "text";

                pwdShowhide.forEach(icon => {
                    icon.classList.replace("fa-eye-slash", "fa-eye")
                })
            } else {
                pwFields.type = "password";
                pwdShowhide.forEach(icon => {
                    icon.classList.replace("fa-eye", "fa-eye-slash")
                })
            }
        })
    })
})

// js code to appear signup and login form

signup.addEventListener("click", ()=>{
    container.classList.add("active");
})


login.addEventListener("click", ()=>{
    container.classList.remove("active");
})