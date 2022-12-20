
function vfun3(){
    var uname1=document.forms["myform3"]["uname1"].value;
    var uname2=document.forms["myform3"]["uname2"].value;
    var pswd1=document.forms["myform3"]["pswd1"].value;
    var pswd2=document.forms["myform3"]["pswd2"].value;

if(uname1==null || uname1=="" ){
          document.getElementById("errorBox").innerHTML =
           "enter the user name";
         return false;
}

if(uname2==null || uname2==""){
          document.getElementById("errorBox").innerHTML =
           "enter your mailid";
         return false;
}

if(pswd1==null || pswd1=="" ){
    document.getElementById("errorBox").innerHTML =
     "enter the password";
   return false;
}

if(pswd2==null || pswd2==""){
    document.getElementById("errorBox").innerHTML =
     "enter the password";
   return false;}

if(pswd1 != pswd2){
    document.getElementById("errorBox").innerHTML =
     "password dont match";
   return false;
}

}