var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get("/perritos", function(req, res, next)
    {
        res.json(
            
            {
                "comics": {
                  "data": [
                    {"author":"Juan Daniel 2",
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


module.exports = router;
