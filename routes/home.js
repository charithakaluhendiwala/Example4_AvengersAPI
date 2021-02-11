const express = require("express");
const router = express.Router(); 

router.get("/",(req,res) => {
    res.send('Welcome to avengers API');
});  

module.exports = router;