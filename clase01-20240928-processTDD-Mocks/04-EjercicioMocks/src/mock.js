import {fakerES_MX as faker} from "@faker-js/faker"

const generaProducto=(precioMin=100, precioMax=5000, cantMax=12)=>{

    // validaciones por cuenta del alumno... 

    let id=faker.database.mongodbObjectId()
    let producto=faker.commerce.productName()
    // let price=faker.commerce.price({ min: 100, max: 200, dec: 2, symbol: '$' })
    let precio=faker.number.float({min:precioMin, max:precioMax, multipleOf: 0.25})
    let cantidad=faker.number.int({min:1, max:cantMax})

    return {
        id, 
        producto, 
        precio, 
        cantidad
    }
}

// console.log(generaProducto(799, 8500, 10))

const generaCliente=()=>{
    let nombre=faker.person.firstName()
    let apellido=faker.person.lastName()
    let dni=faker.number.int({min:8_000_000, max: 40_000_000})
    let email=faker.internet.email({firstName:nombre, lastName:apellido})

    return {
        nombre,
        apellido, 
        dni, 
        email
    }
}

// console.log(generaCliente())

export const generaTicket=()=>{
    let nroComp=`000${faker.string.numeric(2)}-000${faker.string.numeric(5)}`
    let fecha=faker.date.recent({ days: 15 })
    let cliente=generaCliente()
    let carrito=[]
    for(let i=0; i<faker.number.int({min:1, max:12}); i++){
        carrito.push(generaProducto())
    }

    let total=carrito.reduce((acum, item)=>{
        return acum+=item.precio*item.cantidad
    }, 0)

    return {
        nroComp, 
        fecha, 
        cliente, 
        carrito, 
        total
    }
}

// console.log(generaTicket())