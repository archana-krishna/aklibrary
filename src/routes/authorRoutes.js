const express = require('express');
const authorsRouter = express.Router();


function authrouter(nav) {
    var authors = [{
            
            aurthor:'Joseph Barber' ,
            title  :'Tom and Jerry' ,
            genre  :'Cartoon' ,
            img    :'barbera.jpg'
        },
    
        {
            
            aurthor:'J K Rowling' ,
            title  :'Harry Potter' ,
            genre  :'Fantasy' ,
            img    :'JK.jpg'
        },
    
        {
           
            aurthor:'John Green' ,
            title  :'Fault In Our Star' ,
            genre  :'Romance Novel',
            img    :'john.jpg'
        },
    
        {
            
            aurthor:'Dan Brown' ,
            title  :'Da Vinci Code' ,
            genre  : 'Thriller',
            img    :'dan.jpg'
        },
    
        {
            
            aurthor:'Paul Kalanithi' ,
            title  :'When Breath Becomes Air' ,
            genre  : 'Autobiography',
            img    :'Kalanithi.jpg'
        }
    ]
    
    
    authorsRouter.get('/', function(req, res) {
        res.render("authors", {
            nav,
            title: 'Library',
            authors
        })
    });
    authorsRouter.get('/:idd', function(req, res) {
        const idd = req.params.idd
        res.render('author', {
            nav,
            title: 'Library',
            author: authors[idd]


        })
    })
    return authorsRouter;
}

module.exports = authrouter;