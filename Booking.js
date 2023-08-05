function checkDestination(opt)
{
   var package = document.getElementById("package"); 
   

   if (opt.selectedIndex != 0)
   {
        package.disabled = false;
   }
   else {
        package.disabled = true;
   }
}

function checkPackage(opt,num)
{
   var price = "price" + num;
   var qty = "qty" + num;
   var amount = "amount" + num;
   
   if (opt.selectedIndex != 0)
   {
        document.getElementById(price).value=opt.value;
        document.getElementById(qty).disabled = false;
        document.getElementById("qty2").disabled = false;
        document.getElementById(qty).value = "0";
        document.getElementById(amount).value = "0.00";
        document.getElementById("qty2").value = "0";
        document.getElementById("amount2").value = "0.00";
        document.getElementById(qty).focus();
        calculate();    
   }
   else {
        document.getElementById(qty).disabled = true;
   }
}

function pack(opt,num) 
{
    var amount = "amount" + num;
    var price = "price" + num;
    var qty = opt.value;

    if (qty > 0) {
        var subtotal = parseFloat(document.getElementById(price).value) * qty;
        document.getElementById(amount).value = subtotal.toFixed(2);       
        calculate();
    }
    else {       
        var subtotal = parseFloat(0);
        document.getElementById(amount).value = subtotal.toFixed(2);        
        calculate();
    }
}

function packing(opt,num) 
{
    var amount = "amount" + num;
    var price = "price" + num;
    var qty2 = opt.value;

    if (qty2 > 0) {
        document.getElementById(price).value=document.getElementById("pac1").value;
        var subtotal = parseFloat(document.getElementById(price).value) * qty2;
        document.getElementById(amount).value = subtotal.toFixed(2);
        calculate();
    }
    else {
        var subtotal = parseFloat(0);
        document.getElementById(amount).value = subtotal.toFixed(2);
        calculate();
    }
}


function calculate() {

var amt1, amt2, total;
amt1 = parseFloat(document.getElementById("amount1").value);
amt2 = parseFloat(document.getElementById("amount2").value);

if(amt1 == 0.00) {
    total = amt2;
}
else if(amt2 == 0.00) {
    total = amt1;
}
else if(amt1 == 0.00 && amt2 == 0.00) {
    total = 0.00;
}
else {
    total = amt1 + amt2;
}

document.getElementById("fee").value=total.toFixed(2);
}

function sum() {
    var total1, total2, total;
    total1 = parseFloat(document.getElementById("amount1").value);
    total2 = parseFloat(document.getElementById("amount2").value);
    total = amt1 + amt2;

    document.getElementById("fee").value = total.value.toFixed(2);
}

function payment() {
    var fee = document.getElementById("fee").value;
    if(fee > 0) {
        window.location.href="Payment.html";
    }
    else {
        alert("Your booking is not successful!");
    }
}

