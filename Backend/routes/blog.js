const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })


router.get('/', (req, res) => {
    res.send('Blog home page')
})


router.get('/about', (req, res) => {
    res.send('About blog')
})


// router.get('/blogpost/:slug', (req, res) => {
//     res.send(`fetch the blogpost for ${req.params.slug}`)
// })

module.exports = router