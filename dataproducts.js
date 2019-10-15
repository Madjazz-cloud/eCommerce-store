const products = [
  {
    name: 'Apfel',
    id: '0',
    description: 'gelb',
    picture: '/static/logo.jpg',
    price: '5,00'
  },
  {
    name: 'Zwetschke',
    id: '1',
    description: 'lila',
    picture: '/static/logo.jpg',
    price: '10,00'
  },
  {
    name: 'Birne',
    id: '2',
    description: 'gr&uuml;n',
    picture: '/static/logo.jpg',
    price: '15,00'
  }
];

export function getProductById(id) {
  return products.find(product => product.id === id);
}
export default function getAllProducts() {
  return products;
}
