const express = require('express');
const router = express.Router();
// const User = require()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("users");
});

// POST users
router.post('/',(req,res,next)=>{

})

module.exports = router;
