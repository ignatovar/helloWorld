var express = require('express');
var router = express.Router();

/* GET home page. */

router.get("/", function(req, res, next)
    {
        res.json(
            
            {
                "comics": {
                  "data": [
                    {"author":"Frank Miller",
                    "numPages":4,
                    "description":"This comic is about....",
                    "imageFile":"http://drive.google.comIdsasdassdad"
                }
                  ]
                }
            }
        
        
        
        
        );
    }
);

router.use("/:isbn", function(req, res, next)
    {
        console.log(req);
        console.log("req params are " + req.params.isbn);
        const isbn = req.params.isbn;

        console.log(isbn);
        
        if(isbn == "01"){
            res.json(
                {
                    "title": "Preacher",
                    "author": "Garth Ennis",
                    "ISBN": isbn,
                    "numPages": 88,
                    "description": "This comic is about....",
                    "imageFile": "http://drive.google.comIdsasdassdad"
                }
            );
        } else if (isbn == "02") {
            res.json(
                {

                    "author": "Alan Moore",
                    "ISBN": isbn,
                    "numPages": 4,
                    "description": "This comic is about....",
                    "imageFile": "http://drive.google.comIdsasdassdad"

                }
            );            
        } else {
            res.json(  
                {
                    "comics":  "ISBN " + isbn + " not found"  
                }
            ); 
        }

    }
);


module.exports = router;
