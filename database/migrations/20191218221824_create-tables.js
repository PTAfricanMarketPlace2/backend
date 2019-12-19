exports.up = function(knex) {
    return knex.schema
    .createTable('users', users => {
      users.increments();
  
      users
        .string('username', 255)
        .notNullable()
        .unique();
      users.string('password', 255).notNullable();
    }) 

    .createTable('products', products=> {
      products.increment();
      products
        .string('productName', 255)
        .notNullable()
        .unique();
      products
        .string('category',255)
        .notNullable();
      products
        .string('sub-category',255)
        .notNullable();
      products
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      products
        .varchar('price')
        .notNullable();
      products
        .string('country',255)
        .notNullable();
    })
  };
  
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('products')
    .dropTableIfExists('users');
  };
  