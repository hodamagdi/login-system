//! decleration
let loginForm = document.getElementById('loginForm');
let signinEmail = document.getElementById('signinEmail');
let signinPassword = document.getElementById('signinPassword');
let incorrect = document.getElementById('incorrect');

var allUsers = [];

//! get allUsers array from localStorage if exist
if (localStorage.getItem('allUsers') != null) {
    allUsers = JSON.parse(localStorage.getItem('allUsers'));
}

// console.log(allUsers);

//! login form submit 
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    login();
})


//! get values from user & comparing it with valuea already exist in localStorage
function login (){
    var userData ={
        email : signinEmail.value,
        password : signinPassword.value
    }
    
    // console.log(userData);
    if(validLogin(userData) == true){
        // console.log('you logged in');
        incorrect.classList.replace('d-block' , 'd-none');
        localStorage.setItem('isLoggedIn', 'true');
       location.assign("../html/home.html")
    }else{
        // console.log('user not found');
        incorrect.classList.replace('d-none' , 'd-block');
    }
}

//! validate values 
function validLogin(userData){
for(let i = 0 ;i<allUsers.length;i++){
    if(allUsers[i].email.toLowerCase() == userData.email.toLowerCase() && allUsers[i].password  == userData.password ){
        // console.log('user found');
        localStorage.setItem('userName',allUsers[i].name)
        return true;
    }
}
}