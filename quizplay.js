window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
            document.getElementById("blur").classList.add("blur");
        },
    
    )
});
document.querySelector("#bckbtn").addEventListener("click", function(){

    window.location.assign("index.html");
})

document.querySelector("#bttn").addEventListener("click", function(){
   
    document.querySelector(".popup").style.display = "none";
    // document.getElementById("blur").classList.remove("blur");
    document.querySelector(".show-popup").style.display = "block";

    
   
});

document.querySelector("#bttn2").addEventListener("click", function(){
    document.getElementById("show_time").style.display="block";
    document.querySelector(".show-popup").style.display = "none";
    document.getElementById("blur").classList.remove("blur");
    document.getElementById("showqs").style.display="block";
})

