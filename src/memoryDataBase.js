const sequence = {
  _id: 1,
  get id() {
    return this._id++;
  }
}

const products = {
  "1": {
    "name": "Pencil",
    "price": "5.80",
    "id": 1
  },
  "2": {
    "name": "Google Pixel Slate",
    "price": "850.00",
    "id": 2
  },
  "3": {
    "name": "Google Pixel",
    "price": "540.00",
    "id": 3
  }
}

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