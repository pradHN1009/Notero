const express = require('express')
const User = require('../models/User')
const { body, validationResult } = require('express-validator')

router = express.Router()

router.post('/createUser', body('name', "Enter name greater than 3 chars").isLength({ min: 3 }), body('email', "Enter valid email").isEmail(), body('password', "Enter password greater than 5 chars").isLength({ min: 5 }), async(req, res) => {
    const result = validationResult(req)
    if (result.isEmpty()) {
        console.log(req.body)
        try {
            const user = await User.create(req.body)
            res.json(user)
        } catch (err) {
            console.log(err)
            res.send("Error in creating user")
        }
    } else {
        res.send({ errors: result.array() });
    }
})
module.exports = router