import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/test', {
})
    .then(db => console.log('Conexión a la Base de Datos exitosa'))
    .catch(err => console.log(err));