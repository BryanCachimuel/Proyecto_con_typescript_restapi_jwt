import mongoose from "mongoose";

const bdd = process.env.BDD

mongoose.connect(`mongodb://localhost/${bdd}`, {
})
    .then(db => console.log('Conexión a la Base de Datos exitosa'))
    .catch(err => console.log(err));