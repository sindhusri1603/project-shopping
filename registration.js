function vfun1(){
    var uname1=document.forms["myform2"]["uname1"].value;
    var email1=document.forms["myform2"]["email1"].value;
    var upswd1=document.forms["myform2"]["upswd1"].value;
    var upswd2=document.forms["myform2"]["upswd2"].value;
    var upswd3=document.forms["myform2"]["upswd3"].value;

if(uname1==null || uname1=="" ){
          document.getElementById("errorBox").innerHTML =
           "enter the user name";
         return false;
}

if(email1==null || email1==""){
          document.getElementById("errorBox").innerHTML =
           "enter the email";
         return false;
}

if(upswd1==null || upswd1=="" ){
          document.getElementById("errorBox").innerHTML =
           "enter the password";
         return false;
}

if(upswd2==null || upswd2==""){
          document.getElementById("errorBox").innerHTML =
           "enter mobile number";
         return false;
        }


if(upswd3==null || upswd3==""){
        document.getElementById("errorBox").innerHTML =
         "enter favourite color";
        return false;
    }
  
if (uname1 != '' && email1 != ''  && upswd1 != '' && upswd2 != ''&&  upswd3!='')
  alert("Registered successfully!!");

}




