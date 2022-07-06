// lo que esta entre { Application }  dice que va a importar la interfaz de la aplicación
import express, {Application} from 'express';
import authRoutes from './routes/auth';
import morgan from 'morgan';

const app: Application = express();

// configuraciones
app.set('port', 3009);


// middlewares -> se debe poner la configuració dev de desarrollo
app.use(morgan('dev'));
app.use(express.json());

// rutas -> se pone /api/auth para que las rutas se anteponga ese termino
app.use('/api/auth',authRoutes)

export default app;