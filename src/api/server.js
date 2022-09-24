const express = require('express');
const serverless = require('serverless-http');

class Server{
  constructor() {
  }
  start(){
    const app = express();
    const router = express.Router();

    router.get('/', (req, res) => {
      res.json({ hello: 'world' });
    });

    app.use('/.netlify/functions/server', router);  // path must route to lambda
    app.listen(3000, () => console.log(`Listening on port 3000`));


    module.exports.handler = serverless(app);

  }

}
module.exports = Server;


