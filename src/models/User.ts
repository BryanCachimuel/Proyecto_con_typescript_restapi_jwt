import { Schema, model, Document } from 'mongoose'

// creamos una interfaz para dar a conocer que atributos 
// podrán ser utilizados en typescript y se podán autocompletar
// el Document servira para añadir estas propiedades a un documento

export interface IUser extends Document{
    username: string,
    email: string,
    password: string
}

const UserSchema = new Schema({
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

export default model<IUser>('User', UserSchema);