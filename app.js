const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const trashTalkGenerate = require('./trashtalk_generate')
const app = express()
const port = 3000

app.use(express.static('public'), bodyParser.urlencoded({ extended: true }))
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')



app.post('/', (req, res) => {
  let reqBody = req.body
  let sentence = trashTalkGenerate(reqBody)

  res.render('index', { sentence, reqBody })

})

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`This is listening on localhost:${port}`)
})