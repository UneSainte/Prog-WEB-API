//identifier sur le bouton 
const btn = document.getElementById("btn")

//definir une function 
function handleClick(e){
    e.target.innerhtml = "Bonjour"
    window.location ="https://www.google.com/"
}

//rajouter un click event 
btn.addEventListener("click", handleClick)