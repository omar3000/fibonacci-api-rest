const express = require('express')
const app = express()

let calculations = require('./src/routes/calculations')

app.use('/calculations', calculations)

app.listen(3000, () => console.log('Server running on port 3000'))
