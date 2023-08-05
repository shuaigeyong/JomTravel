window.onload = foc;

function foc() {
    var Today = new Date();
    document.getElementById("date").value = Today.getDate() + "/" + (Today.getMonth() + 1) + "/" + Today.getFullYear();
    document.getElementById("amount").focus();
}

function disable() {
   var req = document.getElementById("req");
   req.disabled = false;
}

var TacNo = Math.floor((Math.random()*1000000)+1);

function request() {   
    var req = document.getElementById("req");
    TacNo = Math.floor((Math.random()*1000000)+1);
    alert("Do not share your TAC number with anyone. Always keep your TAC number to yourself.\n\nEach TAC Number can only be used once!\n\nTAC : " + TacNo);
    req.disabled = true;
}   

function stop() {
    setTimeout(disable, 10000); 
}

function count() {
    var secLimit = document.querySelector('h2');
    var time = 10;

    secLimit.style.display = "block";

    limitTime(time);

    var countdown = setInterval (()=>{
        time--;
        limitTime(time);
        if (time <= 0) {
            clearInterval(countdown);
            end();
        }
    }, 1000);
   
    function limitTime(second) {
        var sec = Math.floor(second % 60);
        secLimit.innerHTML= `[${sec}s]`;
    } 

    function end() {
        secLimit.style.display = "none";
    }
}

function check() {
    var TAC = document.getElementById("TAC");
    var amount = document.getElementById("amount");
    var acc = document.getElementById("acc");
    var party = document.getElementById("party");
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var date = document.getElementById("date");

    if(amount.value!=""&&acc.value!=""&&party.value!=""&&name.value!=""&&email.value!=""&&date.value!="") {
        if(!name.checkValidity()) {
            alert("");
        }
        else if(!acc.checkValidity()) {
            alert("");
        }
        else if(!email.checkValidity()) {
            alert("");
        }
        else if(!amount.checkValidity()) {
            alert("");
        }
        else if(!party.checkValidity()) {
            alert("");
        }
        else if(!date.checkValidity()) {
            alert("");
        }
        else if(TAC.value != TacNo) {
            alert("Missing or incorrect data! Please fill in the blank and try again!");
            TAC.focus();
            return false;
        }
        else {
            confirm("Do you want to continue you payment?");
            window.location.href = "http://net-informations.com";
            return true;
        }
    }
}

function checkPrice() {
    var price = document.getElementById("price").value;
    var price1 = document.getElementById("price1").value;
    var price2 = document.getElementById("price2").value;
    var amount = document.getElementById("amount").value;
    var adult = document.getElementById("adult").value;
    var child = document.getElementById("child").value;

    if (parseFloat(adult) > 0) {
        price = price1 * adult;
        calculate();
    }

    else {
        price = price1 * 0;
        calculate();
    }

    if (parseFloat(chlid) > 0) {
        price = price2 * child;
        calculate();
    }

    else {
        price = price2 * 0;
        calculate();
    }

    if (parseFloat(amount) < parseFloat(total)) {
        alert("Sorry, you don't have enough money to pay for the package!");
    }

    else if (parseFloat(amount) > parseFloat(total)) {
        prompt("Sorry, you have paid more than the package price!\n\nPlease re-enter:");
    }

    else {
        message("Do you want to confirm your booking?");
    }
}

function calculate() {
    var amount1 = parseFloat(document.getElementById("price1").value);
    var amount2 = parseFloat(document.getElementById("price2").value);
    var total;

    total = amount1 + amount2;     
}