const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.allBurgers()
    .then(burg => {
      res.json(burg)
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to fetch from database')
    })
})

router.get(':id', (req, res) => {
  const id = req.params.id
  db.getBurger(id)
    .then(burg => {
      res.json(burg)
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to fetch from database')
    })
})

router.post('/', (req, res) => {
  const burger = req.body
  db.newBurger(burger)
    .then(() => {
      res.status(200).end()
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to fetch from database')
    })
})
