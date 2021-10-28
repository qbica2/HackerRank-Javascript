let counter = 0
let btnDOM = document.querySelector("#btn")
btnDOM.innerHTML=counter

btnDOM.addEventListener("click",clicked)
function clicked(){

    counter += 1
    btnDOM.innerHTML=counter
}