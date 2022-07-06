import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

/*
 se crea una función para validar un token
*/

export const TokenValidate = (req: Request, res: Response , next: NextFunction) => {
    const token = req.header('auth-token');
    if(!token) return res.status(401).json('Acceso denegado')

    const datosToken = jwt.verify(token, process.env.TOKEN_SECRET || 'tokentest')
    console.log(datosToken)

    next();
}