// export const suma=(a, b)=>{
//     if(!a && !b) return null
//     if(typeof a!="number" || typeof b!="number") return "error"

//     return a+b
// }

// export const suma=(...sumandos)=>{
//     if(sumandos.length===0) return null
//     let error=false
//     for(let i=0; i<sumandos.length; i++){
//         if(typeof sumandos[i]!="number"){
//             error=true
//         }
//     }
//     if(error) return "error"

//     let resultado=0
//     for(let i=0; i<sumandos.length; i++){
//         resultado+=sumandos[i]
//     }

//     return resultado

// }

const suma=(...sumandos)=>{
    if(sumandos.length===0) return null
    if(sumandos.some(s=>typeof s!="number")) return "error"
    return sumandos.reduce((acum, valor)=>{
        return acum+=valor
    }, 0)
}

module.exports={suma}