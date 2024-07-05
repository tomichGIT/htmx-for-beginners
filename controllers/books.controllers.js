
// Datos 
import BOOKS_DATA from '../data/data.js';
import Vistas from '../views/index.js';

export const getAllBooks = (req, res) => {
    res.send(Vistas.createListTemplate(BOOKS_DATA));
};

export const addBook = (req, res) => {
    const { title, author } = req.body;
    const id = Math.random().toString();

    BOOKS_DATA.push({ id, title, author });

    res.redirect('/books/' + id)
};

//router.get('/books/:id', (req, res) => {
export const getBook = (req, res) => {
    const { id } = req.params;
    const book = BOOKS_DATA.find(b => b.id === id);

    res.send(Vistas.createBookTemplate(book));
};

//router.delete('/books/:id', (req, res) => {
export const deleteBook = (req, res) => {
    const idx = BOOKS_DATA.findIndex(b => b.id === req.params.id);
    BOOKS_DATA.splice(idx, 1);

    res.send();
};

//router.put('/books/:id', (req, res) => {
export const editBook = (req, res) => {
    const { title, author } = req.body;
    const { id } = req.params;

    const newBook = { title, author, id };

    const idx = BOOKS_DATA.findIndex(b => b.id === id);
    BOOKS_DATA[idx] = newBook

    res.send(Vistas.createBookTemplate(newBook));
};

//router.get('/books/edit/:id', (req, res) => {
export const getEditBookForm = (req, res) => {
    const book = BOOKS_DATA.find(b => b.id === req.params.id);

    res.send(Vistas.createEditFormTemplate(book));
};

//router.post('/books/search', (req, res) => {
export const searchBook = (req, res) => {
    const text = req.body.search.toLowerCase().trim();
    console.log(text);

    res.send(Vistas.createListTemplate(BOOKS_DATA.filter(b => b.title.toLowerCase().includes(text))));
};