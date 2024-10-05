export class CustomError{
    static createError(name, causa, message, code){
        const error=new Error(message, {cause:causa})
        error.name=name
        error.code=code

        throw error
    }
}

// throw new Error("error al sumar")