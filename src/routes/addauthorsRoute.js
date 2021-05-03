const express = require ("express");

const addauthorsRouter= express.Router();

// function to catch nav which is passed from app.js
function router(nav){
  

    addauthorsRouter.get('/',function(req,res){ //:i bcoz i is accessed from the URL
   // const i= req.params.i
    res.render("addauthors",{
        nav,
        link:'/authors',
    })
});

return addauthorsRouter;
}
module.exports= router;