import {fakerES_MX as faker} from "@faker-js/faker"

// console.log(faker.animal.cat())
// console.log(faker.animal.insect())
// console.log(faker.music.genre())
// let nombre=faker.person.firstName("female")
// let apellido=faker.person.lastName()
// console.log(nombre)
// console.log(apellido)
// console.log(faker.internet.email({firstName:nombre, lastName: apellido}))

const generaProducto=()=>{
    let _id=faker.database.mongodbObjectId()
    let title=faker.commerce.productName()
    let price=faker.commerce.price({ min: 100, max: 200, dec: 2, symbol: '$' })
    let description=faker.commerce.productDescription()

    return {
        _id, 
        title, 
        price, 
        description
    }
}

console.log(generaProducto())

console.log(faker.number.float({min:1200, max:9700, multipleOf: 0.25}))