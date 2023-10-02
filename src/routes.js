const { addBookHandler, getBookHandler, getBookByID, updateBookByID, deleteBookByID } = require("./handler");

const routes = [
    // create books
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },

    // read book
    {
        method: 'GET',
        path: '/books',
        handler: getBookHandler,
    },

    // read book by ID
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBookByID,
    },

    // update book by ID
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: updateBookByID,
    },

    // delete Book by ID
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBookByID,
    }
];

module.exports = routes;