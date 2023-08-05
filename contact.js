window.onload=function(){
    
}
var captcha=document.getElementById("captcha");
var capnum=document.getElementById("capnum");
var renew=document.getElementById("renew");
var send=document.getElementById("send");
var k;


function ramdomcolor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+","+g+","+b+")";
}

var randomnum=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","s","y","z"];
function renewnum(){
    var a=Math.floor(Math.random()*36);
    var b=Math.floor(Math.random()*36);
    var c=Math.floor(Math.random()*36);
    var d=Math.floor(Math.random()*36);
    var k=randomnum[a]+randomnum[b]+randomnum[c]+randomnum[d];
    return k;
}

k=renewnum();
capnum.innerHTML=k;
capnum.style.color=ramdomcolor();
capnum.style.backgroundColor=ramdomcolor();

renew.addEventListener("click",function(){
    k=renewnum();
    capnum.innerHTML=k;
     capnum.style.color=ramdomcolor();
    capnum.style.backgroundColor=ramdomcolor();    
})
 
var useremail=document.getElementById("useremail");
var userphone=document.getElementById("userphone");
var username=document.getElementById("username");
var usermessage=document.getElementById("usermessage");


// function validateForm(){
//    var x=document.forms["contactform"]["useremail"].value;
//    var atpos=x.indexOf("@");
//     var dotpos=x.lastIndexOf(".");
//     if (atpos<1 || dotpos<1){
//       alert("This email are Invalid");
//        return false;
//     }
// }



send.addEventListener("click",function(){
   if(useremail.value!=""&&userphone.value!=""&&username.value!=""){
        
        if(!useremail.checkValidity()){
            alert("Invalid email");
        }
        else if(!userphone.checkValidity()){
            alert("Invalid phone formal");
        }
        else if(captcha.value!=k && captcha.value!=""){
            alert("Wrong captcha");
            captcha.value="";
        }
        else if(captcha.value==k){
            alert("Successful Submit !");   
        } 
        
        


        
    }
})

