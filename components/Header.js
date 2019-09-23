import React from 'react';
import styled from 'styled-components';

const Navi = styled.nav`
  display: flex;

  flex-direction: row;
  justify-content: center;
  font-size: 30px;
  font-family: apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;

  & ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    background-color: white;
    justify-content: center;
  }

  li a {
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
    justify-content: center;
  }

  /* Change the link color on hover */
  li a:hover {
    background-color: blue;
    color: white;
  }
`;

const Footer = styled.footer`
  display: flex;

  flex-direction: row;
  justify-content: center;
  font-size: 30px;
  padding: 30px;
  font-family: apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
`;

function Header() {
  return (
    <body>
      <header>
        <Navi>
          <ul>
            <li>
              <a href="#">Startseite</a>
            </li>
            <li>
              <a href="#">Produkte</a>
            </li>
            <li>
              {' '}
              <a href="#">Einkaufswagen</a>
            </li>
          </ul>
        </Navi>
      </header>
      <div>
        <img src="https://cdn.pixabay.com/photo/2018/09/17/09/25/golf-3683328_960_720.jpg" />
      </div>
      <Footer>
        <div>
          <a href="#">Über uns</a>
        </div>
      </Footer>
    </body>
  );
}

export default Header;
