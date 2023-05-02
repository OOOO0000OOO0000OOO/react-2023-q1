import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header, Layout } from 'components';
import { MainPage, AboutPage, NotFoundPage, CardsFormPage } from 'pages';
import './App.css';

export function App() {
  return (
    <React.Fragment>
      <Layout>
        <Header />
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="forms" element={<CardsFormPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </React.Fragment>
  );
}
