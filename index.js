const express = require("express");
const massive = require('massive');
const ctrl = require('./controller')
require('dotenv').config()

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  }
}).then((db) => {
  app.set('db', db)
  console.log('db connected')
})
.catch(err => console.log(err))

//End of massive, ENDPOINTS GO HERE
app.get('/api/planes', ctrl.getPlanes)
app.post('/api/planes', ctrl.addPlane)


app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
