// dependencia para utilizar variables de entorno
import dotenv from 'dotenv';
dotenv.config();

import app from "./app";

// importando el archivo con la conexión a base de datos
import './database';

function main() {
    app.listen(app.get('port'));
    console.log(`Servidor en el puerto http://localhost:${app.get('port')}`)
}

main();

