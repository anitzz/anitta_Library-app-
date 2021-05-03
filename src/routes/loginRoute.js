
const express = require ("express");

const loginRouter= express.Router();

// function to catch nav which is passed from app.js
function router(nav){
  

loginRouter.get('/',function(req,res){ //:i bcoz i is accessed from the URL
   // const i= req.params.i
    res.render("login",{
        nav,
        link:'/books',
    })
});

return loginRouter;
}
module.exports= router;