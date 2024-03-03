const connectToMongo = require("./db")
const express = require("express")

const notes = require('./models/Notes')

connectToMongo();

const app = express()
const port = 6000

app.use(express.json()) //Middleware to access body of request

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})