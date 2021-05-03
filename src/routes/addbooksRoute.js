const express = require ("express");

const addbooksRouter= express.Router();

// function to catch nav which is passed from app.js
function router(nav){
  

addbooksRouter.get('/',function(req,res){ //:i bcoz i is accessed from the URL
   // const i= req.params.i
    res.render("addbooks",{
        nav,
        link:'/books',
    })
});

return addbooksRouter;
}
module.exports= router;