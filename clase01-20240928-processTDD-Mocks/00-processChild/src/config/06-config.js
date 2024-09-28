import dotenv from "dotenv"
import {Command, Option} from "commander"

const programa=new Command()

programa.addOption(new Option("-m, --mode <MODE>", "modo ejecucion del script").choices(["dev", "prod"]).default("dev"))

programa.allowUnknownOption()
programa.parse()
const opts=programa.opts()
// const mode="dev"
const mode=opts.mode
dotenv.config({
    // path:"./src/.env", override:true
    path:mode==="prod"?"./src/.env.prod":"./src/.env.dev", override:true
})

export const config={
    PORT: process.env.PORT || 3007,
    MONGO_URL: process.env.MONGO_URL, 
    DB_NAME: process.env.DB_NAME
}