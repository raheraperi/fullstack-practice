exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('burgers').del()
    .then(function () {
      // Inserts seed entries
      return knex('burgers').insert([
        {id: 1, meat: 'beef', topping: 'cheese', price: 12, available: true},
        {id: 2, meat: 'chicken', topping: 'brie', price: 14, available: true},
        {id: 3, meat: 'fish', topping: 'tartare', price: 15, available: true}
      ])
    })
}
