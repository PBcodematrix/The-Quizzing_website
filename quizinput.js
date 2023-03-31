
function openPopUp() {
  document.getElementById("pop").classList.add("openPopUp");

  document.getElementById("blur").classList.add("blur");
  

}


document.getElementById("submitTopic").addEventListener('click',(e)=>{
  e.preventDefault();
})

function closePopUp() {
  document.getElementById("pop").classList.remove("openPopUp");

  document.getElementById("blur").classList.remove("blur");
  

}
document.getElementById("saveQuiz").addEventListener('click',function(){

  document.querySelector(".popup").style.display = "block";
  document.getElementById("blur").classList.add("blur");
})
  