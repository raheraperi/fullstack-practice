const path = require('path')
const config = require(path.join(__dirname, '../../knexfile')).development
const knex = require('knex')(config)

module.exports = {
  allBurgers,
  getBurger,
  newBurger,
  editBurger,
  deleteBurger
}

function allBurgers () {
  const db = knex
  return db('burger')
    .select()
}

function getBurger (id) {
  const db = knex
  return db('burger')
    .where('id', id)
    .select()
}

function newBurger (burger) {
  const db = knex
  return db('burger')
    .insert(burger)
}

function editBurger (burger) {
  const db = knex
  return db('burger')
    .where('id', burger.id)
    .update(burger)
}

function deleteBurger (id) {
  const db = knex
  return db('burger')
    .where('id', id)
    .del()
}
