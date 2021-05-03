
const express = require ("express");

const signupRouter= express.Router();

// function to catch nav which is passed from app.js
function router(nav){
  //giving name of books as an array before the booksRouter so as to pass this as response

signupRouter.get('/',function(req,res){ //:i bcoz i is accessed from the URL
   // const i= req.params.i
    res.render("signup",{
        nav,
        link:'/books',
    })
});

return signupRouter;
}
module.exports= router;