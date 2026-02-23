const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// ⭐ แก้ให้ตรงกับโครงสร้างจริง
app.use(
  '/uploads',
  express.static(path.join(__dirname, '../public/uploads'))
)

require('./routes')(app)

require('./userPassport')


const config = require('./config/config')

app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`)
})
