import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
//july right zero
const Logo = styled.img`
  margin-left: -40px;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: auto;
  width: 225px;
  height: 225px;
`;
const Navi = styled.nav`
  display: inline-flex;
  margin: auto;
  text-align: left;
  overflow: hidden;
`;

const Inline = styled.ul`
  display: inline-flex;
  justify-content: space-evenly;
 
  list-style: none;
  text-align: center;
  vertical-align: middle;
  justify-content: flex-start;
  margin-top: -30px;
  }

  & li {
    padding: 40px;
    font-size: 40px;
    margin: auto;
    background-color: #a099b2;
    width: 100%;
    
  }
  & li a {
    display: inline-block;
    text-decoration: none;
    color: white;
    font-family: 'Inconsolata', monospace;
    padding: 40px;
    
  }
  & li a:hover {
    color: black;
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
        <Navi>
          <Inline>
            <Logo src="/static/logo.jpg" alt="whale" />
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
        </Navi>
        <div></div>
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
