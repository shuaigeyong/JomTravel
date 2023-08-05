/*var contact = document.forms['form']['contactBox'];
var password = document.forms['form']['psdBox'];


//var contact_error = document.getElementById('')
//var psd_error = document.getElementById('')

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);

function validated() {
    if (contact.value.length < 11) {
        contact.style.border = "1px solid red";
        message_error.style.display = "block";
        contact.style.boxShadow = "0px 3px 3px red"
        contact.focus();
        return false;
    }

    if (password.value.length < 9) {
        psdBox.style.border = "1px solid red";
        psdBox.focus();
        return false;
    }
}

function email_Verify() {
    if (email.value.length >= 11) {
        email.style.border = "1px solid green"
        return true;
    }
}

function pass_Verify() {
    if (password.value.length >= 8) {
        password.style.border = "1px solid green"
        return true;
    }
}*/

/*var sub = document.getElementById('sub');
sub.onclick = function() {
    var uName = document.getElementById('contactBox').value;
    var psd = document.getElementById('psdBox').value;

    localStorage.setItem('username', uName);
    localStorage.setItem('userpsd', psd);

    alert('Sign in successful');
    location.href = 'Login.html';
}*/

/*function register() {
    if(isNone()) {
        let arr = [];
        if(localStorage.user) {
            arr = eval(localStorage.user);
            for(e in arr) {
                if($('#contactBox').val().trim() == arr[e].loginName) {
                    alert('This account already exist');
                    clear();
                    return;
                }
            }
        }
        const user = {
            'loginName': $("#contactBox").val(),
            'loginPsd': $("#password1").val()
        };
        arr.push(user);
        localStorage.user = JSON.stringify(arr);
        alert('Sign in successful');
        window.location.href = "Login.html";
        clear();
    }
}

function clear() {
    $('#contactBox').val('');
    $('#password1').val('');
    $('#password2').val('');
}

function isNone() {
    if($('#contactBox').val().trim() == "") {
        alert('Username cannot be empty');
        return false;
    }
    else if($('#password1').val().trim() == "") {
        alert('Password cannot be empty');
        return false;
    }
    else if($('#password1').val().trim() != $('#password2').val().trim()) {
        alert('The confirm password is not same with the password, please check!');
        return false;
    }
    return true;
}*/

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

/*const log = document.querySelector("#form1");
const reg = document.querySelector("#form2");

function changeRegister() {
    log.style.display = "none";
    reg.style.display = "block";
}*/

function login() {
    let logUN = document.getElementById('logUN').value;
    let logPW = document.getElementById('logPW').value;

    //if(logUN === "" && logPW === "") {
    //    alert("Dear! Please enter your email address/phone number and password");
    //}

    if(logUN != "" && logPW != "") {
        if(logUN in localStorage) {
            let password = localStorage.getItem(logUN);
            if(logPW === password) {
                alert("Login successful");
                document.getElementById('logUN').value = "";
                document.getElementById('logPW').value = "";
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

function register() {
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let password1 = document.getElementById('password1').value;
    let password2 = document.getElementById('password2').value;
    var pattern1 = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    var pattern2 = "^(([0-9]{3})[-]?)*[0-9]{6,7}$";
    var pattern3 = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";

    if(email === "" && phone === "") {
        //alert("Email and phone number cannot be empty!");
        return false;
    }
    else if(password1 === "") {
        //alert("Password cannot be empty!");
        return false;
    }
    else if(password1 != password2) {
        alert("The confirm password is not same with the password, please check!");
    }
    else if(email.value.match(pattern1) && phone.value.match(pattern2) && password1.value.match(pattern3)) {
        if(email in localStorage) {
            alert("The email already has existed");
            document.getElementById('email').value = "";
            document.getElementById('phone').value = "";
            document.getElementById('password1').value = "";
            document.getElementById('password2').value = "";
        }
        else if(phone in localStorage) { 
            alert("The phone number already has existed");
            document.getElementById('email').value = "";
            document.getElementById('phone').value = "";
            document.getElementById('password1').value = "";
            document.getElementById('password2').value = "";
        }
        else {
            localStorage.setItem(email, password1);
            localStorage.setItem(phone, password1);
            alert("Sign in successful");
        }
    }
}
var create=document.getElementById("create");
var formtwo=document.getElementById("formtwo");
var formone=document.getElementById("formone");
var inlog=document.getElementById("inlog");
create.addEventListener("click",function(){
    formtwo.style.display="block";
    
    formone.style.display="none";
})
inlog.addEventListener("click",function(){
    formtwo.style.display="none";
    
    formone.style.display="block";
})
S