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

export const signin = async (req: Request, res: Response) => {
    const user = await User.findOne({email: req.body.email})
    if(!user) return res.status(400).json('email o contraseña incorrectos');
    
    const correctPassword: boolean = await user.validatePassword(req.body.password);
    if(!correctPassword) return res.status(400).json('Contraseña no valida')

    // generando token una vez el usuario inicie sesión y también se le agrega un tiempo de expiración
    const token: string = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET || 'tokentest', {
        expiresIn: 60 * 60 *24
    });

    res.header('auth-token', token).json(user)
}

export const profile = (req: Request, res: Response) => {
  
}