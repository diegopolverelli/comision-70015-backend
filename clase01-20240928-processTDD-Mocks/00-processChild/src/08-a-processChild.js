import express from 'express';
import {fork, exec} from "child_process"
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

let contador=0
app.get('/',(req,res)=>{
    contador++

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:contador});
})

app.get("/op1", (req, res)=>{

    console.time("Demora del proceso complejo:")
    let resultado=0
    for(let i=0; i<700_000_000; i++){
        resultado+=Math.random()
    }
    console.timeEnd("Demora del proceso complejo:")

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({resultado});
})

app.get("/op2", (req, res)=>{

    let procesoHijo=fork("./src/08-b-calculo.js")
    procesoHijo.send(`Soy tu padre, el proceso pid ${process.pid}, y necesito que te ejecutes...!!!`)

    procesoHijo.on("message", resultado=>{

        res.setHeader('Content-Type','application/json');
        return res.status(200).json({resultado});
    })

})

app.get("/calc", (req, res)=>{
    exec("calc.exe", error=>{
        if(error){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Error al ejecutar ruta /calc`})
        }

        res.setHeader('Content-Type','application/json');
        return res.status(200).json({payload:"calc corriendo"});

    })
})


app.get("/dir", (req, res)=>{
    exec("dir /s", (error, resultado)=>{
        if(error){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Error al ejecutar ruta /dir`})
        }

        res.setHeader('Content-Type','text/plain');
        return res.status(200).send(resultado);

    })
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT} - pid: ${process.pid}`);
});
