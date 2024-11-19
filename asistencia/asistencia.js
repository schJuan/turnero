let button_fui = document.getElementById("fui")
let button_noFui = document.getElementById("noFui")


button_fui = addEventListener("click",()=>{
    let fechaDia = document.getElementById("fechaDia")
    fechaDia.classList.add (`dia2`)
})
button_noFui = addEventListener("click",()=>{
    let fechaDia = document.getElementById("fechaDia")
    fechaDia.classList.add (`dia3`)
})