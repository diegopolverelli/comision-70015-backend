import express from 'express';
import { generaTicket } from './mock.js';
import { DatosDAO } from './dao/DatosDAO.js';
import { config } from './config/config.js';
import { connDB } from './ConnDB.js';
const PORT=config.PORT;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get("/ticketmock", async(req, res)=>{

    let {cantidad, db}=req.query
    if(!cantidad) cantidad=1

    let resultado=[]
    for(let i=0; i<cantidad; i++){
        resultado.push(generaTicket())
    }

    if(db){
        resultado=await DatosDAO.insertar(resultado)
    }

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({resultado});
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

connDB()