const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('hello express')
})

app.get('/blog', (req, res) => {
    res.send('hello blog')
})

app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})