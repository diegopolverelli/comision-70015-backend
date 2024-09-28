import fs from "fs"

process.on("exit", code=>{
    console.log(`el programa sale, con code ${code}...!!!`)
})

process.on("uncaughtException", error=>{
    console.log(`Ocurrio un error. Detalle: ${error.message}`)
})

setTimeout(() => {
    throw new Error("error de prueba")
}, 2000);

let contador=0
let intervalo=setInterval(() => {
    contador++
    console.log(`op. ${contador}`)

    if(contador==10){
        // clearInterval(intervalo)
        process.exit(-10)
    }
}, 500);