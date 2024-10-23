//identifier sur le bouton 
const btn = document.getElementById("btn1")

//definir une function 
function handleClick(e){
    e.target.innerHTML = "Alors ? Convaincu ?"
    window.open("https://store.steampowered.com/app/252330/Slender_The_Arrival/", "_blank")
}

//rajouter un click event 
btn.addEventListener("click", handleClick)