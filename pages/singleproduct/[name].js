import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Header from '../../components/Header';
import dataproducts from '../../dataproducts';

function singleProducts(props) {
  console.log(props.url.query); //gehört einfach zu Next.js und kann man benutzen um auf die Url zu kommen - braucht man um dynamic routing zu machen
  const name = props.url.query.name; //das ist der letzte Teil der Url

  const foundProduct = dataproducts.find(product => {
    if (name === product.name) {
      //geht durch alle Elemente der Objekte bis es eines findet, dass den gleichen Namen hat wie in der Url
      return true;
    }
  });

  return (
    <div>
      <Header />
      <div>
        Product-Information: {foundProduct.name}
        {foundProduct.description}
        <img src={foundProduct.picture} height="60px" />
      </div>
    </div>
  );
}

singleProducts.getInitialProps = function() {
  return {};
};

export default singleProducts;

// als nächstes musst du schauen wie es funktioniert das jemand ein Produkt anklickt und dann dieses auf der singleProduct Seite anschauen kann!
