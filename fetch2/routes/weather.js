const express = require('express')
const axios = require('axios')
const os = require('os')
const API_KEY = 'd9f090d2aa456209bffb3cf827176f42'
const router = express.Router()

router.get('/:lat/:long', (req, res, next)=>{
    let lat = req.params['lat']
    let long = req.params['long']
    let request_url = 'https://api.darksky.net/forecast/' + API_KEY + '/' + lat + ',' + long
    axios.get(request_url)
    .then(data => {
        res.send({
            'id': os.hostname(),
            'ver': 2,
            'data': JSON.stringify(data.data)
        })
        // res.send(req.header)
        next()
    })
    .catch(err => {
        res.send(err)
        next()
    })
})

module.exports = router