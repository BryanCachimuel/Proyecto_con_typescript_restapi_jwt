// lo que esta entre { Application }  dice que va a importar la interfaz de la aplicación
import express, {Application} from 'express';
import authRoutes from './routes/auth';

const app: Application = express();

// configuraciones
app.set('port', 3009);

// rutas
app.use(authRoutes)

export default app;