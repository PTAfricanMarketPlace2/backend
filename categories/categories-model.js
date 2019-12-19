const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  getAll
};

function find() {
  return db('categories').select('id', 'categoryname');
}

function findBy(filter) {
  return db('categories').where(filter);
}

async function add(category) {
  const [id] = await db('categories').insert(category);

  return findById(id);
}

function findById(id) {
  return db('categories')
    .where({ id })
    .first();
}

function getAll() {
  return db('categories');
}

