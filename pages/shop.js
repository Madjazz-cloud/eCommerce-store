import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Header from '../components/Header';

function Shop() {
  return (
    <body>
      <div>
        <Header />
      </div>
      <p>
        Hier wird gezahlt, die Menge kann ausgewählt werden, Stückzahl mit COUNT
        machen und auch Preis anzeigen lassen
      </p>
    </body>
  );
}

export default Shop;
