
function vfun(){
    var uname = document.getElementById("uname").value;
    var upswd = document.getElementById("upswd").value;
 
 if(uname=="sindhu@gmail.com" && upswd=="sindhu"){
           window.location.assign("addtocart.html");
           alert("SUCCESSFULLY LOGIN");
 }
 else{
   alert("INVALID INFORMATION");
 }
} 