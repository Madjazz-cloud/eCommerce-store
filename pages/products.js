import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Header from '../components/Header';
import allProducts from '../dataproducts';

const ProductLink = styled.ul`
  padding: 50px;

  & a {
    padding: 50px;
  }
`;

function Products() {
  return (
    <body>
      <div>
        <Header />
      </div>
      <main>
        <p>
          Hier kommen nun alle Produkte hin, erst mal 3 zum Anfangen und wenn
          man diese Produkte klickt, muss man auf die Einzelproduktseite kommen
        </p>
        <ProductLink>
          {allProducts.map(product => (
            <Link href={'singleproduct/' + product.name}>
              <a>{product.name}</a>
            </Link>
          ))}
        </ProductLink>
      </main>
    </body>
  );
}

export default Products;
