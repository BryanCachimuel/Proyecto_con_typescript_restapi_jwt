import { Schema, model } from 'mongoose'

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

export default model('User', UserSchema);