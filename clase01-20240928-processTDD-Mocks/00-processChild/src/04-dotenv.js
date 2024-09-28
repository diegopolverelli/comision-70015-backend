// process.loadEnvFile("./src/.env")

import express from 'express';
import { config } from "./config/04-config.js";

// console.log(process.env.MONGO_URL)
// console.log(process.env.DB_NAME)
// console.log(config.MONGO_URL)
// console.log(config.DB_NAME)




const PORT=config.PORT;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{


    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"ok"});
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
