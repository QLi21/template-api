const fs = require('fs')
const express = require('express')
const router = express.Router()

router.get('/api/template/:id', (req, res) => {
    let path = `./data/${req.params.id}`
    if (!fs.existsSync(path)) {
        res.status(400).send('Template not found')
    }
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Read template failed')
        }
        res.json(JSON.parse(data))
    })
})

router.post('/api/template/:id', (req, res) => {
    let path = `./data/${req.params.id}`
    if (fs.existsSync(path)){
        res.status(400).send('Id exists')
    }
    let data = JSON.stringify(req.body)
    console.log(`POST data = ${data}`)
    fs.writeFile(path, data, (err) => {
        if (err) {
            res.status(500).send(`Write template failed: ${err}`)
        }
        res.sendStatus(200)
    })
})

module.exports = router
