import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Header from '../../components/Header';
import dataproducts from '../../dataproducts';
import cookie from 'js-cookie';
import nextCookie from 'next-cookies';

function turnObjectIntoString(obj) {
  return JSON.stringify(obj);
}

//WAS ist PROPS? Es ist ein Object mit Daten

function singleProducts(props) {
  console.log(props.url.query); //gehört einfach zu Next.js und kann man benutzen um auf die Url zu kommen - braucht man um dynamic routing zu machen
  const name = props.url.query.name; //das ist der letzte Teil der Url
  var obj = JSON.parse(props.cookies.myCookie);
  //THIS IS HERE BECAUSE OF THE SCOPE THING! LOOK THAT THIS WORKS DOWN BECAUSE IT IS IN THE RIGHT PLACE OF THE FUNCTIONS WHERE NO PROBLEM IS WITH THE SCOPE BECAUSE ITS THE WHOLE FUNCTION
  document.cookie=()

  const foundProduct = dataproducts.find(product => {
    if (name === product.name) {
      //geht durch alle Elemente der Objekte bis es eines findet, dass den gleichen Namen hat wie in der Url
      return true;
    }
  });

  const [count, setCount] = useState(1);
  const handleSubmit = event => {
    event.preventDefault();
    setCount();
  };
  const handleChange = event => {
    setCount(event.target.value);
  };

  return (
    <div>
      <Header />
      <div>
        {foundProduct.name}|||||
        {foundProduct.description}||||
        <img src={foundProduct.picture} height="60px" />
        ||||
        {foundProduct.price}||||
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="quantity"
            min="1"
            value={count}
            onChange={handleChange}
          ></input>
          <button>Add to Cart</button>
          <Link href="../products">
            <a>
              <button>Go Back to Products</button>
            </a>
          </Link>
        </form>
        <button
          onClick={() => {
            // Cookie wird zu einem objekt
            cookie.set(
              'myCookie',
              turnObjectIntoString({
                count: count,
                name: foundProduct.name,
                price: foundProduct.price,
                description: foundProduct.description,
                handleChange: handleChange
              })
            );

            // ladet den Browser neu - kann gebraucht werden muss aber nicht sein
            location.reload();
          }}
        >
          set a cookie
        </button>
        <div>Product-Amount: {count}</div>
        <br />
        myCookie:{props.cookies.myCookie}
      </div>
      <div>Numer of Product for Cart:{obj.count}</div>
    </div>
  );
}

singleProducts.getInitialProps = async ctx => {
  const cookies = nextCookie(ctx);
  console.log('cookie obj', cookies);
  return {
    cookies: cookies
  };
};

export default singleProducts;
