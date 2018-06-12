const express = require('express');

const routes = require('./routes');

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());

app.use(routes);

app.listen(3000, () => {
    console.log('App listening on port 3000');
})
