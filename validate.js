// When the user starts to type something inside the password field
function display() {
    var myInput = document.getElementById("password1");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");

// Validate lowercase letters
var lowerCaseLetters = /[a-z]/g;
if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
} 
else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}
    
// Validate capital letters
var upperCaseLetters = /[A-Z]/g;
if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
} 
else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
}
  
// Validate numbers
var numbers = /[0-9]/g;
if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
}
else {
    number.classList.remove("valid");
    number.classList.add("invalid");
}
    
// Validate length
if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
} 
else {
    length.classList.remove("valid");
    length.classList.add("invalid");
}
}

/* Login */
function login() {
    let logUN = document.getElementById('logUN').value;
    let logPW = document.getElementById('logPW').value;

    if(logUN != "" && logPW != "") {
        if(logUN in localStorage) {
            let password = localStorage.getItem(logUN);
            if(logPW === password) {
                alert("Login successful");
                document.getElementById('logUN').value = "";
                document.getElementById('logPW').value = "";
                self.location.href = "Homepage.html";
            }
            else {
                alert("Invalid password!");
            }
        }
        else {
            alert("Invalid account, please sign in first!");
        }
    }
}

/* Register */
function register() {
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let password1 = document.getElementById('password1').value;
    let password2 = document.getElementById('password2').value;
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(email != "" && phone != "" && password1 != "") {
        if(password1.match(lowerCaseLetters) && password1.match(upperCaseLetters) && password1.match(numbers) && password1.length >= 8) {  
            if(password1 != password2) {
                alert("The confirm password is not same with the password, please check again!");
            }
            else if(email in localStorage){
                alert("The email already has existed");
            }
            else if(phone in localStorage) { 
                alert("The phone number already has existed");
            }
            else {
                localStorage.setItem(email, password1);
                localStorage.setItem(phone, password1);
                alert("Sign up successful");
            }
        }
    }
}

/* Find Account */
function search() {
    let contact = document.getElementById('contact').value;
    var findAcc = document.getElementById("findAcc");
    var formone = document.getElementById("formone");

    if(contact != "") {
        if(contact in localStorage) {
            let password = localStorage.getItem(contact);
            alert("Find your account, your password is " + password);
            document.getElementById('contact').value = "";
            findAcc.style.display = "none";
            formone.style.display = "block";
        }
        else {
            alert("Not found! Please enter valid account");
            document.getElementById('contact').value = "";
        }
    }
    else {
        alert("Please enter your email address or phone number inside the box given");
    }
}