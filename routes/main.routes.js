import { Router } from "express";

// Vistas
//import { createHomepageTemplate, createListTemplate, createBookTemplate, createEditFormTemplate } from './views/index.js';
import * as Views from '../views/index.js';

// Datos 
import BOOKS_DATA from '../data/data.js';


const router = Router();

// routes
router.get('/', (req, res) => {
    res.send(Views.createHomepageTemplate());
});

router.get('/books', (req, res) => {
    res.send(Views.createListTemplate(BOOKS_DATA));
});

router.post('/books', (req, res) => {
    const { title, author } = req.body;
    const id = Math.random().toString();

    BOOKS_DATA.push({ id, title, author });

    res.redirect('/books/' + id)
});

router.get('/books/:id', (req, res) => {
    const { id } = req.params;
    const book = BOOKS_DATA.find(b => b.id === id);

    res.send(Views.createBookTemplate(book));
});

router.delete('/books/:id', (req, res) => {
    const idx = BOOKS_DATA.findIndex(b => b.id === req.params.id);
    BOOKS_DATA.splice(idx, 1);

    res.send();
});

router.put('/books/:id', (req, res) => {
    const { title, author } = req.body;
    const { id } = req.params;

    const newBook = { title, author, id };

    const idx = BOOKS_DATA.findIndex(b => b.id === id);
    BOOKS_DATA[idx] = newBook

    res.send(Views.createBookTemplate(newBook));
})

router.get('/books/edit/:id', (req, res) => {
    const book = BOOKS_DATA.find(b => b.id === req.params.id);

    res.send(Views.createEditFormTemplate(book));
});

router.post('/books/search', (req, res) => {
    const text = req.body.search.toLowerCase();
    console.log(text);

    res.send(Views.createListTemplate(BOOKS_DATA.filter(b => b.title.toLowerCase().includes(text))));
});



// Funciones
export const index = (req, res) => {
    jsonRes.msg = "Welcome to HTMX Express v1";
    res.status(200).json(jsonRes);
}


// Main Rutas
router.get("/", index);


export default router;