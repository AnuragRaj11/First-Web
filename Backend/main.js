const express = require('express')
const blog = require('./routes/blog')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

//app.use(express.static('public'))
app.use('/blog', blog)


app.use((req, res, next) => {
    //console.log(req.headers)
    req.A = "I am AR bhai";
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send("Hacked by Middlware 1")
    next()
})

// Middleware 2
app.use((req, res, next) => {
    console.log('m2')
    req.harry = "I am cool bro";
    next()
})

app.get('/', (req, res) => {
    res.send('hello express')
})

// app.get('/', (req, res) => {
//     let siteName = "Adidas"
//     let searchText = "Search Now"
//     let arr = ["Hey", 54, 65]
//     res.render("index", { siteName: siteName, searchText: searchText, arr })
// })

app.get('/about', (req, res) => {
    res.send('hello mid!'+req.A)
})

app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})