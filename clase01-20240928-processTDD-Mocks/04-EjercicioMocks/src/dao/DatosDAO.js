import {modeloDatos} from "./models/datos.model.js"

export class DatosDAO{
    static async insertar(datos){
        return await modeloDatos.insertMany(datos)
    }

}