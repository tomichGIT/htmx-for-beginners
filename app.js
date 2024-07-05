import express from 'express';

// Rutas
import mainRoutes from "./routes/main.routes.js";

// create app
const app = express();
app.use(express.urlencoded({ extended: false }));

// static assets
app.use(express.static('public'));

// Cargo las rutas
app.use("/", mainRoutes);

const PORT = process.env.PORT || 3001;
// listen to port
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT} check it out at http://localhost:${PORT}`);
});