const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  getAll, 
  update, 
  remove, 
  findUserProducts
};

function find() {
  return db('users').select('id', 'username');
}

function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

function getAll() {
  return db('users');
}

function update(id, changes) {
  return db('users')
    .where({ id })
    .update(changes, '*');
}

function remove(id) {
  return db('users')
    .where({ id })
    .del();
}

function findUserProducts(userId) {
  return db('products as p')
  .join('users as u', 'p.user_id', 'u.id')
  .select('u.id as UserId','u.username as Merchant','p.id as ProductId','p.productName as Product', 'p.price as Price', 'p.country as Country' )
  .where({user_id:userId})
}


