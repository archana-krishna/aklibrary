const express = require("express");
const booksRouter = express.Router();

function router(nav){

var books=[
    {
        title  :'Tom and Jerry' ,
        aurthor:'Joseph Barber' ,
        genre  :'Cartoon' ,
        img    :'tom.jpg'
    },

    {
        title  :'Harry Potter' ,
        aurthor:'J K Rowling' ,
        genre  :'Fantasy' ,
        img    :'harry.jpg'
    },

    {
        title  :'Fault In Our Star' ,
        aurthor:'John Green' ,
        genre  :'Romance Novel',
        img    :'fault.jpg'
    },

    {
        title  :'Da Vinci Code' ,
        aurthor:'Dan Brown' ,
        genre  : 'Thriller',
        img    :'DVN.jpg'
    },

    {
        title  :'When Breath Becomes Air' ,
        aurthor:'Paul Kalanithi' ,
        genre  : 'Autobiography',
        img    :'paul.jpg'
    }

]

    booksRouter.get('/',function(req,res){
     res.render("books",
     {
        nav,
        title:'Library',
        books
     });
    });

    booksRouter.get('/:i',function(req,res){
         const i =req.params.i
          res.render("book",
        {
            nav,
            title:'Library',
            book:books[i]
        });

        });
        return booksRouter;
    }

module.exports = router;