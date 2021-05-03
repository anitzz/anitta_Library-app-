
const express = require ("express");

const booksRouter= express.Router();

// function to catch nav which is passed from app.js
function router(nav){
  //giving name of books as an array before the booksRouter so as to pass this as response
var books=[
    {
        title: 'The Secret Wish List',
        author: 'Preeti Shenoy',
        genre: 'Fiction and Contemporary Romance',
        img: "wishlist.jpg"
    },
    {
        title: 'Tom And Jerry',
        author: 'Joseph Barbera',
        genre: 'Animation',
        img: "download.jpg"
    },
    {
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        genre: 'Fantasy',
        img: "harryjfif.jpg"
    }
]

booksRouter.get('/',function(req,res){
    res.render("books",{
       nav,
        title:'LIBRARY',
        books
    })
});
booksRouter.get('/:i',function(req,res){ //:i bcoz i is accessed from the URL
    const i= req.params.i
    res.render("book",{
        nav,
        title:'LIBRARY',
        book:books[i]
    })
});

return booksRouter;
}



module.exports= router;