var express = require('express');
var axios = require('axios')

var router = express.Router();
/* GET. */
router.get('/', function (req, res, next) {
  let lat = 37.8267
  let long = -122.4233
  let url_port = '3001'
  let result_excution_time = []
  let repeat_number = 3
  for (let j = 0; j < repeat_number; ++j) {
    let start = new Date()
    let url = 'http://localhost:' + url_port + '/weather/' + lat + '/' + long
    axios.get(url, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(result => {
        let excution_time = new Date() - start
        console.log('excution time ' + j + ' with port ' + url_port + ': ' + excution_time)
        result_excution_time.push(excution_time)
        if (result_excution_time.length == repeat_number)
          res.send(JSON.stringify({
            'excution_results': result_excution_time,
            'total': summary(result_excution_time),
            'average': summary(result_excution_time)/result_excution_time.length
          }))
      })
      .catch(err => {
        console.log('error')
        console.log(err)
      })
  }
});

const summary = (array) => {
  total = 0
  array.forEach(m => {
    total += m
  })
  return total
}

module.exports = router;
