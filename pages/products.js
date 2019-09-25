import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Header from '../components/Header';
import allProducts from '../components/dataproducts';

const ProductLink = styled.ul`
  padding: 20px;

  & a {
    padding: 20px;
  }
`;

function Products() {
  return (
    <body>
      <div>
        <Header />
      </div>
      <main>
        <div></div>
        <p>
          Hier kommen nun alle Produkte hin, erst mal 3 zum Anfangen und wenn
          man diese Produkte klickt, muss man auf die Einzelproduktseite kommen
        </p>
        <ProductLink>
          {allProducts.map((product, key) => (
            <Link href="/singleproduct">
              <a>{product.name}</a>
            </Link>
          ))}
        </ProductLink>
      </main>
    </body>
  );
}

export default Products;
