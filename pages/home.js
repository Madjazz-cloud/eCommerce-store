import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Header from '../components/Header';
import Slideshow from '../components/Slideshow.js';

function Home() {
  return (
    <div>
      <Header />
      <Slideshow />
    </div>
  );
}

export default Home;
