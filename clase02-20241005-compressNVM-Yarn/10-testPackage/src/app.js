import express from 'express';
import {saludo1, saludo2} from "saludo20241005"
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(saludo2(`Server corriendo en puerto ${PORT}`));
});
