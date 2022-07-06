import { Request, Response } from 'express'
import User, { IUser } from '../models/User'

import jwt from 'jsonwebtoken'

export const signup = async (req: Request, res: Response) => {
    const user: IUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    // contraseña del usuario encriptada
    user.password = await user.encryptPassword(user.password)
    const saveUser = await user.save() 
    
    // generando token
    const token: string = jwt.sign({_id:saveUser._id}, process.env.TOKEN_SECRET || 'tokentest');

    // para regresar tanto el token como cabecera como el usuario guardado
    res.header('auth-token', token).json(saveUser);
}

export const signin = (req: Request, res: Response) => {
    res.send('signin')
}

export const profile = (req: Request, res: Response) => {
    res.send('profile')
}