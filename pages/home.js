import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Header from '../components/Header';
import Slideshow from '../components/Slideshow';
import getAllProducts from '../dataproducts';

function Home() {
  return (
    <div>
      <Header />
      <main>
        <Slideshow />
        <p>{getAllProducts()[0].name}</p>
      </main>
    </div>
  );
}

export default Home;
