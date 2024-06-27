//! decleration
let userNameEle = document.getElementById('userNameEle')
let logoutBtn = document.getElementById('logoutBtn')
let userName = localStorage.getItem('userName');
let isLoggedIn = localStorage.getItem('isLoggedIn');

//! Redirect to login page if not logged in
if (isLoggedIn !== 'true') {
   location.assign("../html/login.html")
}

userNameEle.innerHTML = userName;

//! logout and remove userName
logoutBtn.addEventListener('click', function(){
    localStorage.removeItem('userName'); 
    localStorage.removeItem('isLoggedIn');
   location.assign("../html/login.html")
})
