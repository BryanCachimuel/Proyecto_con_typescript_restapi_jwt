import { Schema, model, Document } from 'mongoose'
import bcryptjs from 'bcryptjs'

// creamos una interfaz para dar a conocer que atributos 
// podrán ser utilizados en typescript y se podán autocompletar
// el Document servira para añadir estas propiedades a un documento

export interface IUser extends Document{
    username: string,
    email: string,
    password: string
}

const userSchema = new Schema({
        username: {
            type: String,
            required: true,
            min: 25,
            lowercase: true
        },
        email: {
            type: String, 
            unique: true,
            required: true,
            lowercase: true
        }, 
        password: {
            type: String,
            required: true
        }
});

//encriptando la contraseña
userSchema.methods.encryptPassword = async ( password: string ): Promise<string> => {
    const salt = await bcryptjs.genSalt(10)
    return bcryptjs.hash(password, salt)
}

// método para validar la contraseña de los usuarios
userSchema.methods.validatePassword = async function (password: string): Promise<boolean>{
    return await bcryptjs.compare(password, this.password)
}   

export default model<IUser>('User', userSchema);