import dotenv from "dotenv"

const mode="dev"
dotenv.config({
    // path:"./src/.env", override:true
    path:mode==="prod"?"./src/.env.prod":"./src/.env.dev", override:true
})

export const config={
    PORT: process.env.PORT || 3007,
    MONGO_URL: process.env.MONGO_URL, 
    DB_NAME: process.env.DB_NAME
}