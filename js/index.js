//! decleration
let signUpForm = document.getElementById('registerForm');
//*signup inputs 
let signupName = document.getElementById('signupName');
let signupEmail = document.getElementById('signupEmail');
let signupPassword = document.getElementById('signupPassword');
//* signup alerts
let nameAlert = document.getElementById('nameAlert');
let emailAlert = document.getElementById('emailAlert');
let passwordAlert = document.getElementById('passwordAlert');
let successAlert = document.getElementById('successAlert');
let existAlert = document.getElementById('existAlert');

var allUsers=[];

//! get allUsers array from localStorage if exist
if (localStorage.getItem('allUsers') !=null) {
    allUsers = JSON.parse(localStorage.getItem('allUsers'));
}

//! signUp form submit 
signUpForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (checkValidateInputes()) {
        addUser();
    }

})

//!add new user to array & localStorage
function addUser() {
    var newUser = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value
    }

    if(alreadyExist(newUser)== true){
        // console.log('already exist');
        existAlert.classList.replace('d-none','d-block');
    }else{
        // console.log(newUser);
        allUsers.push(newUser);
        existAlert.classList.replace('d-block','d-none');
        successAlert.classList.replace('d-none','d-block');
        //? location.assign("../html/login.html")
        // console.log(allUsers);
        localStorage.setItem('allUsers', JSON.stringify(allUsers));
    }
}

//! valide inputs before saving it
function validateInputs(Rejex, element, alertEl) {
    let pattern = Rejex;
    if (pattern.test(element.value)) {
        // console.log("valid")
        alertEl.classList.replace('d-block', 'd-none');
        return true;
    } else {
        // console.log("in-valid");
        alertEl.classList.replace('d-none', 'd-block');
        return false;
    }

}

//! check if all inputs are valid 
function checkValidateInputes() {
    if (validateInputs(/^[a-zA-Z0-9$_]{2,}$/, signupName, nameAlert) == true &&
        validateInputs(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, signupEmail, emailAlert) == true &&
        validateInputs(/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/, signupPassword, passwordAlert) == true) {
        // console.log('all inputs are valid');
        return true;
    } else {
        // console.log('sth invalid');
        return false;
    }
}

//! check if email is already exist
function alreadyExist(newUser){
     for(let i =0 ; i<allUsers.length;i++){
        if(allUsers[i].email.toLowerCase() == newUser.email.toLowerCase()){
            // console.log('email already exist');
            return true
        }
     }
}