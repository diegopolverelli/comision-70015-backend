export const errorHandler=(error, req, res, next)=>{

    console.log(`${error.name}: ${error.message}`)
    if(error.code && typeof error.code==="number"){
        console.log(error.cause)
        res.setHeader('Content-Type','application/json');
        return res.status(error.code).json({error:`${error.message}`})
    }else{
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error interno en el server. Reintente en unos minutos`})
    }

}