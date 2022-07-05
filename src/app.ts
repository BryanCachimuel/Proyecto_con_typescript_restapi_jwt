// lo que esta entre { Application }  dice que va a importar la interfaz de la aplicación
import express, {Application} from 'express';

const app: Application = express();

// configuraciones
app.set('port', 3009);

export default app;