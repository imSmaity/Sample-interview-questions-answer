const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send("Hello World")
})
app.get('/404', function (req, res) {
  res.status(404).send("page not found");
});
app.get('/401', function (req, res) {
  res.status(401).send("you are not logged in")
})
app.listen(3000,()=>{
  console.log("Server is started");
})