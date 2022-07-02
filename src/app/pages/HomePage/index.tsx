import Footer from 'app/components/Footer';
import { NavBar } from 'app/components/NavBar';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import ComingBook from './components/ComingBook';
import FeatureBook from './components/FeatureBook';
import MainSlider from './components/MainSlider';

export function HomePage() {
  return (
    <Wrapper>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Books Store application homepage" />
      </Helmet>
      <NavBar />
      <MainSlider />
      <FeatureBook />
      <ComingBook />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
