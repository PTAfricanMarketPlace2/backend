const router = require('express').Router();

const Products = require('./products-model.js');
const restricted = require('../auth/authenticate-middleware.js');

router.get('/', restricted, (req, res) => {
  Products.getAll()
    .then(products => {
      res.json(products);
    })
    .catch(err =>  {
      res.status(500).json({message:"There was an error getting the products."})
    }
  )  
});

module.exports = router;