
exports.up = function(knex) {
  return knex.schema.createTable('usuarios', function(table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.string('city').notNullable();
        table.string('tel').notNullable();
        table.integer('type').notNullable();
    }
)};

exports.down = function(knex) {
  return knex.schema.dropTable('usuarios');
};
