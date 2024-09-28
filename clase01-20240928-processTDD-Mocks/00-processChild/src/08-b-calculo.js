
process.on("message", mensaje=>{
    console.log(`soy el proceso hijo con id ${process.pid}, y recibí este mensaje:`)
    console.log(`"${mensaje}"`)

    console.time("Demora del proceso complejo:")
    let resultado=0
    for(let i=0; i<700_000_000; i++){
        resultado+=Math.random()
    }
    console.timeEnd("Demora del proceso complejo:")

    process.send(resultado)

})