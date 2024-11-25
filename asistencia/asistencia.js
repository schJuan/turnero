let button_fui = document.getElementById("fui")
let button_noFui = document.getElementById("noFui")

button_noFui.addEventListener("click", () => {
    let fechaDia = document.getElementById("fechaDia")
    fechaDia.classList.remove(`verde`)
    fechaDia.classList.add(`rojo`)

    
})
button_fui.addEventListener("click",()=>{
    let fechaDia = document.getElementById("fechaDia")

    fechaDia.classList.remove(`rojo`)
    fechaDia.classList.add(`verde`)
    
})

