const express = require('express')
const blog = require('./routes/blog')
const app = express()
const port = 3000


app.use(express.static('public'))
 app.use('/blog', blog)

app.get('/', (req, res) => {
    res.send('hello express')
})

app.get('/about', (req, res) => {
    res.send('hello blog')
})

app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})