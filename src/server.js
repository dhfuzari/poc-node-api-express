// port means process - which process will answare the request
const port = 3003;

const express = require('express');
const bodyParsser = require('body-parser');

const app = express();
const memoryDataBase = require('./memoryDataBase');

app.use(bodyParsser.urlencoded({ extended: true }))

app.get('/products', (req, res, next) => {
  res.send(memoryDataBase.getProducts()) // Convert to JSON
});

app.get('/product/:id', (req, res, next) => {
  res.send(memoryDataBase.getProduct(req.params.id))
})

app.post('/products', (req, res, next) => {
  const product = memoryDataBase.saveProduct({
    name: req.body.name,
    price: req.body.price
  });
  res.send(product);
});

app.put('/product/:id', (req, res, next) => {
  const product = memoryDataBase.saveProduct({
    id: req.params.id,
    name: req.body.name,
    price: req.body.price
  });
  res.send(product);
});

app.delete('/product/:id', (req, res, next) => {
  const product = memoryDataBase.deleteProduct(req.params.id);
  res.send(product);
});

app.listen(port, () => {
  console.log(`### Server listening to port 3003 ###`);
});