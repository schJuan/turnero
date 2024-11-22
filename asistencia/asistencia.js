let button_fui = document.getElementById("fui")
let button_noFui = document.getElementById("noFui")

button_noFui = addEventListener("click", () => {

    let fechaDia = document.getElementById("fechaDia")
    fechaDia.classList.add(`dia3`)
    fechaDia.classList.remove(`dia2`)
})
button_fui = addEventListener("click",()=>{
    let fechaDia = document.getElementById("fechaDia")
    fechaDia.classList.add(`dia2`)
    fechaDia.classList.remove (`dia3`)
})

