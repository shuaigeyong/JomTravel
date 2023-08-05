// 

var randomnum=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","s","y","z"];
function renewnum(){
    var a=Math.floor(Math.random()*37);
    var b=Math.floor(Math.random()*37);
    var c=Math.floor(Math.random()*37);
    var d=Math.floor(Math.random()*37);
    var k=randomnum[a]+randomnum[b]+randomnum[c]+randomnum[d];
    return k;
}
document.write(renewnum());