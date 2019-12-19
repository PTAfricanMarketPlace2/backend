const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    getAll, 
    remove
  };
  
  function find() {
    return db('products').select('id', 'name');
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