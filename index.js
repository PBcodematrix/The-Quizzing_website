setInterval(showWords,2000);
function showWords(){
    for(var i=1;i<3;i++)
    {
        var id="key-word"+i;
        document.getElementById(id).classList.toggle("d-none");
        
    }
    
}