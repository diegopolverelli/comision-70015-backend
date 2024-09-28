import {Command, Option} from "commander"

const programa=new Command()

programa.option("-p, --port <PORT>", "puerto donde escuchará el server", 3000)
programa.option("-d, --debug", "modo de ejecución del script, activa debug...")
programa.option("-c, --colores [COLORES...]", "listado colores... ")
programa.requiredOption("-u, --user <Usuario>", "usuario que ejecuta el script")
programa.addOption(new Option("-m, --mode <MODE>", "modo ejecucion del script").choices(["dev", "test", "prod"]).default("dev"))

programa.allowUnknownOption()
programa.parse()
const opts=programa.opts()


console.log(opts)
console.log(programa.args)
if(opts.debug){
    console.log(`Modo debug activo...!!!`)
}