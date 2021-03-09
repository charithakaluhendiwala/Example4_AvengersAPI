const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.post("/",async (req, res) => {
     
    let user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
    user = await user.save();
    return res.send({
        username: user.username,
        email: user.email,
    });
});

module.exports = router;