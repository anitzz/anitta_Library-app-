
const express = require ("express");
//const authorsRouter = require("./authorRoutes");

const authorsRouter= express.Router();

function router (nav){

//giving name of author as an array before the booksRouter so as to pass this as response
var authors=[
    {
        name: 'Preeti Shenoy',
        description: 'Preeti Shenoy is an Indian author. She has been consistently nominated for the Forbes List of the 100 most influential celebrities in India since 2013. Preeti received the Indian of the Year award by Brands Academy. She has also received Business excellence award instituted by New Delhi Management Institute.',
        img: "preeti.jpg"
    },
    {
        name: 'Joseph Barbera',
        description: 'Joseph Roland Barbera was an American animator, director, producer, storyboard artist, and cartoon artist, whose film and television cartoon characters entertained millions of fans worldwide for much of the 20th century.',
        img: "joseph.jpg"
    },
    {
        name: 'J.K. Rowling',
        description: 'Joanne Rowling CH, OBE, HonFRSE, FRCPE, FRSL, better known by her pen name J. K. Rowling, is a British author, philanthropist, film producer, television producer, and screenwriter.',
        img: "jk.jpg"
    }
]

authorsRouter.get('/',function(req,res){
    res.render("authors",{
        nav,
        title:'LIBRARY',
        authors
    })
});
authorsRouter.get('/:i',function(req,res){ //:i bcoz i is accessed from the URL
    const i= req.params.i
    res.render("author",{
        nav,
        title:'LIBRARY',
        author:authors[i]
    })
});

return authorsRouter;
}
module.exports= router;