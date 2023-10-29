let express = require('express')
let app = express()
let http = require('http')
let server = http.createServer(app)
app.set('view engine', 'ejs')
const bcrypt = require('bcrypt') ; 

console.log("Сервер работает!")

app.get('/', function(req, res) {
  res.render('index')
})

app.get('/load-test', function(req, res) {
    res.render('load')
    setTimeout(() => {
        res.render('win')
    }, 10000)
})

app.get('/params-test', function(req, res) {
  console.log(req)
  res.send("Result is in console")
})

app.get("/hash-password", (req, res) => {
  const password = req.query.password

  const hashedPassword = bcrypt.hashSync(password, 8)
  
  res.send(hashedPassword)
})

app.use((req, res, next) => {
  res.send("123")
})

server.listen(5000)
