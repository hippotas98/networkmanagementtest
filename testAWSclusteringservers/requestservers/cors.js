var corsOption = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  };

var cors = require('cors')

module.exports = (app) => {
    app.use(cors(corsOption))
}
