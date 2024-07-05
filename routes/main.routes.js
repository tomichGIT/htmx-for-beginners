import { Router } from "express";

import { getAllBooks, addBook, getBook, deleteBook, editBook, getEditBookForm, searchBook } from "../controllers/books.controllers.js";

// Vistas
//import { createHomepageTemplate, createListTemplate, createBookTemplate, createEditFormTemplate } from './views/index.js';
import Vistas from '../views/index.js';

const router = Router();

const jsonRes = { msg: "", status: 200 };

// routes HomePage inicial
router.get('/', (req, res) => {
    res.send(Vistas.createHomepageTemplate());
});

// routes libros
router.get('/books', getAllBooks);
router.post('/books', addBook);
router.get('/books/:id', getBook);
router.delete('/books/:id', deleteBook);
router.put('/books/:id', editBook)
router.get('/books/edit/:id', getEditBookForm);
router.post('/books/search', searchBook);


// Funciones
export const index = (req, res) => {
    jsonRes.msg = "PONG Welcome to HTMX Express v1";
    res.status(200).json(jsonRes);
}


// Main Rutas
router.get("/ping", index);

// ----------------------------
//      Rutas de error
// ----------------------------
router.all("*", (req, res, next) => {
    next({ status: 404, msg: "Ruta no encontrada" });
});
router.use((err, req, res, next) => {
    console.log(err);
    let { status, msg } = err;
    status = status ? status : 500; // 404 o 500
    res.status(status).send({ msg });
});


export default router;