import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Header from '../../components/Header';
import getAllProducts from '../../dataproducts';
import cookie from 'js-cookie';
import nextCookie from 'next-cookies';

function turnObjectIntoString(obj) {
  return JSON.stringify(obj);
}

//WAS ist PROPS? Es ist ein Object mit Daten
function singleProducts(props) {
  console.log(props.url.query); //gehört einfach zu Next.js und kann man benutzen um auf die Url zu kommen - braucht man um dynamic routing zu machen
  const name = props.url.query.name; //das ist der letzte Teil der Url

  var arr = JSON.parse(props.cookies.productsInCart || '[]'); // || bedeutet das entweder oder passiert
  console.log(arr); // hier sieht man das es sich um eine Array (folge von Values) handelt

  //THIS IS HERE BECAUSE OF THE SCOPE THING! LOOK THAT THIS WORKS DOWN BECAUSE IT IS IN THE RIGHT PLACE OF THE FUNCTIONS WHERE NO PROBLEM IS WITH THE SCOPE BECAUSE ITS THE WHOLE FUNCTION

  const foundProduct = getAllProducts().find(product => {
    if (name === product.name) {
      //geht durch alle Elemente der Objekte bis es eines findet, dass den gleichen Namen hat wie in der Url
      return true;
    }
  });

  const [count, setCount] = useState(1);
  event => {
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
        {product.name}|||||
        {/* {foundProduct.description}||||
        <img src={foundProduct.picture} height="60px" />
        ||||
        {foundProduct.price} €|||| */}
        <form>
          <input
            type="number"
            name="quantity"
            min="1"
            value={count}
            onChange={handleChange}
          ></input>
          <button
            onClick={() => {
              const object = { count: count, name: foundProduct.name };
              arr.push(object);

              cookie.set('productsInCart', turnObjectIntoString(arr));

              location.reload();
            }}
          >
            Add to Cart
          </button>

          <Link href="../products">
            <a>
              <button>Go Back to Products</button>
            </a>
          </Link>
        </form>
        <div>Product-Amount: {count}</div>
        <br />
        myCookie: {props.cookies.productsInCart}
      </div>
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
