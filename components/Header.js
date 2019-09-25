import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  width: auto;
  height: auto;
`;
const Inline = styled.ul`
  display: flex;
  justify-content: space-evenly;
  background-color: #a099b2;
  list-style: none;

  & li {
    padding: 40px;
    font-size: 40px;
  }
  & li a {
    display: block;
    text-decoration: none;
    color: white;
    font-family: 'Inconsolata', monospace;
  }
  & li a:hover {
    color: white;
  }
`;
const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
`;

//Farbcode für das Logo = #565273

function Header() {
  return (
    <body>
      <header>
        <div>
          <Logo src="/static/logo.jpg" alt="whale" width="400" height="330" />
        </div>
        <div>
          <Inline>
            <li>
              <Link href="/home">
                <a>Home </a>
              </Link>
            </li>
            <li>
              <Link href="/products">
                <a>Products</a>
              </Link>
            </li>
            <li>
              <Link href="/shop">
                <a>Shop</a>
              </Link>
            </li>
          </Inline>
        </div>
      </header>

      <Footer>
        <div>
          <a href="#">Über uns</a>
        </div>
      </Footer>
    </body>
  );
}

export default Header;
