import getAllProducts, { getProductById } from '../dataproducts';

test('gets a Product by ID', () => {
  expect(getProductById('2')).toEqual(
    getAllProducts().find(product => {
      return product.id === '2';
    })
  );

  expect(getProductById('0')).toMatchSnapshot();
});

test('returns undefind when passed a non-id', () => {
  expect(getProductById('')).toBe(undefined);
});
