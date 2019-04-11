const sequence = {
  _id: 1,
  get id() {
    return this._id++;
  }
}

const products = {};

function saveProduct(prod) {
  if (!prod.id) prod.id = sequence.id;
  products[prod.id] = prod;
  return prod;
}

function getProduct(id) {
  return products[id] || {};
}

function getProducts() {
  return Object.values(products);
}

function deleteProduct(id) {
  const prod = products[id];
  delete products[id];
  return prod;
}

module.exports = { saveProduct, getProduct, getProducts, deleteProduct };