import os from "os"

export const argumentosHeroe=(heroe={})=>{
    let {name, ...otros}=heroe  // ...operador rest

    return `Error al cargar el heroe:
Argumentos requeridos:
    - name, type string: se recibió ${name}
Argumentos opcionales:
    - alias type string
    - team type string...
    - otros... completar
Se recibieron: ${JSON.stringify(otros)}

fecha: ${new Date().toLocaleDateString()}
usuario: ${os.userInfo().username}
terminal: ${os.hostname()}
`

}