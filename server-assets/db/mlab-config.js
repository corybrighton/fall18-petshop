let mongoose = require('mongoose')
//this is the only line that will change from project to project
const connectionString = 'mongodb://student:student1@ds031108.mlab.com:31108/petshop'
//
let connection = mongoose.connection

//establishes connection to database
mongoose.connect(connectionString, {
  useNewUrlParser: true
})

//Console log any errors comming from the database
connection.on('error', err => {
  console.log("DATABASE ERROR: ", err)
})

//confirms connection to database
connection.once('open', () => {
  console.log("Connected to Database")
})