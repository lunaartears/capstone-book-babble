const express = require('express')
const authRouter = express.Router()
const User = require('../models/user.js')
const jwt = require('jsonwebtoken')


//signup
authRouter.post("/signup", async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        if (user) {
            res.status(403)
            return next(new Error("That username is taken"))
        } else {
            const newUser = User(req.body)
            const savedUser = await newUser.save()
            const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
            return res.status(201).send({ token, user: savedUser.withoutPassword() })
        }
    } catch (err) {
        res.status(500)
        return next(err)
    }
})




//module.exports = authRouter
export default authRouter;
