import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Header from '../components/Header';

function Products() {
  return (
    <body>
      <div>
        <Header />
      </div>
      <main>
        <div>
          <p>PRodukts 12303409013490</p>
        </div>
        <p>
          Hier kommen nun alle Produkte hin, erst mal 3 zum Anfangen und wenn
          man diese Produkte klickt, muss man auf die Einzelproduktseite kommen
        </p>
      </main>
    </body>
  );
}

export default Products;
