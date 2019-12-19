const router = require('express').Router();

const Categories = require('../categories/categories-model.js');
const restricted = require('../auth/authenticate-middleware.js');

router.get('/', restricted, (req, res) => {
 Categories.getAll()
    .then(categories => {
      res.json(categories);
    })
    .catch(err =>  {
      res.status(500).json({message:"There was an error getting categories."})
    }
  )  
});

router.post('/', restricted,(req, res) => {
    let category = req.body;
  
    Categories.add(category)
    .then(category => {
      res.status(201).json(category);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });

module.exports = router;
