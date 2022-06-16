/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import 'antd/dist/antd.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { GlobalStyle } from '../styles/global-styles';
import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { ProductPage } from './pages/ProductPage/Loadable';
import { SignUpPage } from './pages/SignUpPage/Loadable';
import { ContactPage } from './pages/ContactPage/Loadable';
import { LoginPage } from './pages/LoginPage/Loadable';
import { ProductDetailPage } from './pages/ProductDetailPage/Loadable';
import { AboutPage } from './pages/AboutPage/Loadable';
import { CartPage } from './pages/CartPage/Loadable';
import { ProfilePage } from './pages/ProfilePage/Loadable';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Books Store"
        defaultTitle="Books Store"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A Books Store application" />
      </Helmet>

      <Wrapper>
        <Routes>
          <Route path={process.env.PUBLIC_URL + '/'} element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route element={<NotFoundPage />} />
        </Routes>
      </Wrapper>
      <GlobalStyle />
    </BrowserRouter>
  );
}

const Wrapper = styled.div``;
