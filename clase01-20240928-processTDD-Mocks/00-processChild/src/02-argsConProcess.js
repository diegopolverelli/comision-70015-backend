// console.log(process.argv)
let [rutaNode, rutaScript, ...argumentos]=process.argv

console.log(argumentos)
let indicePort=argumentos.findIndex(a=>a==="--port")
if(indicePort!==-1){
    console.log(`El servidor ejecutando en puerto ${argumentos[indicePort+1]}`)
}