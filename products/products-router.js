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


router.get('/:id', (req, res) => {
  Products.findById(req.params.id)
  .then(product => {
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  })
  .catch(error => {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the product',
    });
  });
})

router.post('/', restricted,(req, res) => {
  let product = req.body;

  Products.add(product)
  .then(product => {
    res.status(201).json(product);
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

router.delete('/:id', (req, res) => {
  Products.remove(req.params.id)
  .then(count => {
    if (count > 0) {
      res.status(200).json({ message: 'The product has been removed' });
    } else {
      res.status(404).json({ message: 'The product could not be found' });
    }
  })
  .catch(error => {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: 'Error removing the product',
    });
  });
});

router.put('/:id', (req, res) => {
  const changes = req.body;
  Products.update(req.params.id, changes)
  .then(product => {
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'The product could not be found' });
    }
  })
  .catch(error => {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: 'Error updating the product.',
    });
  });
});






module.exports = router;