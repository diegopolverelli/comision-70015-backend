const {suma}=require("./suma.js")

describe("Prueba funcion suma", ()=>{

    test("Si no recibo args, devuelve null", ()=>{
        expect(suma()).toBe(null)
        expect(suma()).toBeNull()
    })

    test("Si algun arg es no numerico retorna error", ()=>{
        expect(suma("pedro", 10)).toBe("error")
        expect(suma([], 100)).toBe("error")
    })

    test("Si envio 2 numeros, retorna la suma de ambos", ()=>{
        expect(suma(4, 4)).toBe(8)
        expect(suma(-4, -10)).toBe(-14)
        expect(suma(4, 40_000_000)).toBe(40_000_004)
    })

    test("Si recibo n argumentos, retorna la suma de todos ellos", ()=>{
        expect(suma(1, 2, 3, 4, 5)).toBe(15)
    })

})

