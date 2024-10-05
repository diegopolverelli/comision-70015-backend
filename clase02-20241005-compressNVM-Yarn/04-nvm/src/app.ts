import express from 'express';
const PORT=process.env.PORT || 8080;

const app=express();

let nombre:string="Juan"
console.log(nombre)

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK...!!!');
})

const server=app.listen(PORT,()=>{
    console.log(process.env.MENSAJE, process.env.PORT);
});
