const colors=require("colors")

const saludo1=(nombre="")=>{
    return `Hola${nombre?` ${nombre}`:``}, bienvenido...!!!`.rainbow
}

const saludo2=(nombre="")=>{
    return `Hola${nombre?` ${nombre}`:``}, bienvenido...!!!`.zebra
}
// console.log(saludo1("Juan Manuel"))

module.exports={saludo1, saludo2}

