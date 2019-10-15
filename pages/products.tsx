import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Header from '../components/Header';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';

const ProductLink = styled.ul`
  padding: 20px;

  & a {
    padding: 50px;
  }
`;
type Props = {
  data: {
    rows: Array<{
      id: Number;
      name: String;
      description: String;
      price: String;
    }>;
  };
};
const WithInitialProps: NextPage<Props> = ({ data }) => {
  const productObject = data.rows.map(product => (
    <ProductLink>
      <li>
        <Link
          href="/singleproduct/[name]"
          as={`/singleproduct/${product.name}`}
        >
          <a>{product.name}</a>
        </Link>
      </li>
    </ProductLink>
  ));

  return (
    <body>
      <Header />
      <a>{productObject}</a>
    </body>
  );
};
WithInitialProps.getInitialProps = async ({ query }) => {
  const response = await fetch(`http://localhost:8000/api`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({})
  });

  const data = await response.json();
  console.log(data);

  return { data };
};

export default WithInitialProps;
