const express = require('express')
const User = require('../models/User')

router = express.Router()

router.post('/', (req, res) => {
    console.log(req.body)
    const user = User(req.body)
    user.save()
    res.json([])
})

module.exports = router