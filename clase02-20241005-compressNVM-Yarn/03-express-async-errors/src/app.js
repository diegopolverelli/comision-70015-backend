import express from 'express';
import fs from "fs"
import { router as heroesRouter } from './routes/heroesRouter.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { f1 } from './functions/varios.js';
import "express-async-errors"

const PORT = 3000;

const app = express();

process.on("uncaughtException", error=>console.log(`Error no controlado...!!! ${error.message}`))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/heroes', heroesRouter)


app.get('/', (req, res) => {

    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('OK');
})


app.get('/prueba1', (req, res, next) => {
    fs.readFile('/cualquierCosa.txt', (err, data) => {
        if (err) {
            console.log(err)
            return next(err) // Pass errors to Express.
            // res.send("error")
        } else {
            res.send(data)
        }
    })
})

app.get("/prueba2", async(req, res, next)=>{

    console.log(nanana)
    // try {
    //     console.log(nanana)
    // } catch (error) {
    //     return next(error)
    // }

    // console.log(lalala)

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"ruta prueba2"});
})

app.get("/prueba3", async(req, res, next)=>{
    try {
        await f1()
    } catch (error) {
        return next(error)
    }

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"ruta prueba3"});
})


app.use(errorHandler)

const server = app.listen(PORT, () => {
    console.log(`Server escuchando en puerto ${PORT}`);
});
