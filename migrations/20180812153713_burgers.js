exports.up = (knex, Promise) => {
  return knex.schema.createTable('burgers', table => {
    table.increments('id').primary()
    table.string('meat')
    table.string('topping')
    table.integer('price')
    table.boolean('available')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('burgers')
}
