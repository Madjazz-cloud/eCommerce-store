import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Header from '../components/Header';
import Slideshow from '../components/Slideshow';
import allProducts from '../components/dataproducts';

function Home() {
  return (
    <div>
      <Header />
      <Slideshow />
      <p>{allProducts[0].name}</p> /* einfach nur als Beispiel gemacht um zu
      sehen, ob dataproducts global auf allen Seiten funktioniert!*/
    </div>
  );
}

export default Home;
