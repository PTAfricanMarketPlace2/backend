const router = require('express').Router();

const Products = require('../products/products-model.js');
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

router.post('/', restricted,(req, res) => {
  let product = req.body;

  Products.add(product)
  .then(saved => {
    res.status(201).json({ message: `Congratulations ${product.product-name},has now been added to the database.`});
  })
  .catch(error => {
    res.status(500).json(error);
  });
});




module.exports = router;