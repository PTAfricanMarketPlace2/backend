const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    getAll, 
    remove,
    update,
    findByUsername
  
  };
  
  function find() {
    return db('products').select('id', 'name').orderBy('productName');
  }


  
  function findBy(filter) {
    return db('products').where(filter);
  }
  
  async function add(product) {
    const [id] = await db('products').insert(product);
  
    return findById(id);
  }
  
  function findById(id) {
    return db('products')
      .where({ id })
      .first();
  }

  
  function getAll() {
    return db('products');
  }
  
  function remove(id) {
    return db('products')
      .where({ id })
      .del();
  }

  function update(id, changes) {
    return db('products')
      .where({ id })
      .update(changes, '*');
  }

  function findByUsername(username) {
    return db('products')
    .where ({username})
    .first()
  }