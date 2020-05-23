const router = require('express').Router()
const db = require('../db')

const notes = (require('../db/db.json'))

router.get('/notes', (req, res) => {
    res.json(notes)
})

router.use()

module.exports = Index