const router = require('express').Router()
//let Dog = require('../models/Dog')

let dogs = [{ name: "Clifford", age: 45 }]


router.get('', (req, res, next) => {
  console.log('Woof')
  //allows knight/request to continue
  next()
})

router.get('', (req, res, next) => {
  res.send(dogs)
})


//same as export default
module.exports = router