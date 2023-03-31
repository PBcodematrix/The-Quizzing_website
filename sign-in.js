document.getElementById("signinForm").addEventListener("submit",function(event)
{
  event.preventDefault();
})
//                               TO SHOW AND HIDE PASSWORD


function showPass() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
      
    } else {
      x.type = "password";
    }
    document.querySelector(".fa-eye").classList.toggle("eyeSlashp");
    document.querySelector(".fa-eye-slash").classList.toggle("openEye");
  }

  function hidePass() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
      
    } else {
      x.type = "password";
    }
    document.querySelector(".fa-eye").classList.toggle("eyeSlashp");
    document.querySelector(".fa-eye-slash").classList.toggle("openEye");
  }

