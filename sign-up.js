
document.getElementById("signupForm").addEventListener("submit",function(event)
{
  event.preventDefault();
})





//                               TO SHOW AND HIDE PASSWORD


function showPass() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
      
    } else {
      x.type = "password";
    }
    document.querySelector(".fa-eye").classList.toggle("eyeSlashp");
    document.querySelector(".fa-eye-slash").classList.toggle("openEye");
  }

  function hidePass() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
      
    } else {
      x.type = "password";
    }
    document.querySelector(".fa-eye").classList.toggle("eyeSlashp");
    document.querySelector(".fa-eye-slash").classList.toggle("openEye");
  }


//                         TO SHOW AND HIDE CONFIRM PASSWORD


  function showPassc() {
    var x = document.getElementById("myInputc");
    if (x.type === "password") {
      x.type = "text";
      
    } else {
      x.type = "password";
    }
    document.querySelector(".Eyec").classList.toggle("eyeSlashcp");
    document.querySelector(".Eye-slashc").classList.toggle("openEye");
  }

  function hidePassc() {
    var x = document.getElementById("myInputc");
    if (x.type === "password") {
      x.type = "text";
      
    } else {
      x.type = "password";
    }
    document.querySelector(".Eyec").classList.toggle("eyeSlashcp");
    document.querySelector(".Eye-slashc").classList.toggle("openEye");
  }

  //                           Checking log in information

  function check(){
    if(document.fillForm.Username.value=="")
    {
      document.getElementById("error").innerHTML="Enter Username*";
      return false;
    } else if(document.fillForm.Username.value.length<4)
    {
      document.getElementById("error").innerHTML="Enter atleast four letters*";
      return false;
    } else if(document.fillForm.Email.value=="")
    {
      document.getElementById("error").innerHTML="Enter your Email*";
      return false;
  }  else if(document.fillForm.Password.value=="")
  {
    document.getElementById("error").innerHTML="Enter your Password*";
    return false;
}   else if(document.fillForm.Password.value.length<6)
{
  document.getElementById("error").innerHTML="Password must be 6-digits*";
  return false;
}  else if(document.fillForm.cPassword.value=="")
{
  document.getElementById("error").innerHTML="Enter Confirm Password*";
  return false;
} 
else if(document.fillForm.Password.value!==document.fillForm.cPassword.value)
{
  document.getElementById("error").innerHTML="Password does'nt match*";
  return false;
} else {
  
  document.getElementById("error").innerHTML="";
  document.getElementById("formBox").classList.add("blur");
  document.getElementById("openpopup").classList.add("openPopup");

  
     return true;
  }

 }

 