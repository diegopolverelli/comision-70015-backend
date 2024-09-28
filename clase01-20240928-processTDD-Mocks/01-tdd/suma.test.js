import { suma } from "./suma.js";
import colors from "colors"
import {styleText} from "util"

// console.log(styleText(["red", "bold", "bgBlue"], "Hola...!!!"))

// console.log('\x1b[34m\x1b[1mEjemplo\x1b[0m')

let test=0
let ok=0
let descrip=""
let resultado=0
let esperado=0
console.time("Demora en la ejecución del test:")

//
test++
descrip=`Si no recibo argumentos retorna null`
resultado=suma()
esperado=null
console.log(`Prueba ${test}: ${descrip}`)
if(esperado===resultado){
    ok++
    console.log(`${"√".green} - Prueba exitosa`)
}else{
    console.log(`${"X".red} - Prueba fallida`)
}

//
test++
descrip=`Si envío 2 numeros, retorna la suma de ambos`
resultado=suma(5, 5)
esperado=10
console.log(`Prueba ${test}: ${descrip}`)
if(esperado===resultado){
    ok++
    console.log(`${"√".green} - Prueba exitosa`)
}else{
    console.log(`${"X".red} - Prueba fallida`)
}


//
test++
descrip=`Si algun argumento no es numérico, devolver "error"`
resultado=suma(5, "Juan")
esperado="error"
console.log(`Prueba ${test}: ${descrip}`)
if(esperado===resultado){
    ok++
    console.log(`${"√".green} - Prueba exitosa`)
}else{
    console.log(`${"X".red} - Prueba fallida`)
}

//
test++
descrip=`Si envío n numeros como arg. retorna la suma de todos ellos...`
resultado=suma(1,2,3,4,5)
esperado=15
console.log(`Prueba ${test}: ${descrip}`)
if(esperado===resultado){
    ok++
    console.log(`${"√".green} - Prueba exitosa`)
}else{
    console.log(`${"X".red} - Prueba fallida`)
}


console.log(`\n\nResultado tests: `)
console.log(`Pruebas ejecutadas: ${test}`)
console.log(`Pruebas correctas ${String(ok).green} / ${test}; pruebas fallidas ${String(test-ok).red}`)
console.timeEnd("Demora en la ejecución del test:")


