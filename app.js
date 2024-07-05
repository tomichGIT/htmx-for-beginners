import express from 'express';
import cors from 'cors';

// Configuración
import { PORT, DOMAIN } from './config/config.js';

// Indice de Rutas
import mainRoutes from "./routes/main.routes.js";

// create app
const app = express();


// Habilitar CORS para todas las solicitudes
app.use(cors());


app.use(express.urlencoded({ extended: false }));

// static assets
app.use(express.static('public'));

// Cargo las rutas
app.use("/", mainRoutes);

// listen to port
const fulldomain = `${DOMAIN}:${PORT}`;
app.listen(PORT, () => {
  console.log(`Server is running on port ${fulldomain}`)
});