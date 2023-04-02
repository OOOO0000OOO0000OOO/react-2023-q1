import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './pages/Main/MainPage';
import AboutPage from './pages/About/AboutPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import CardsFormPage from './pages/CardsForm/CardsFormPage';
import Layout from './components/Layout/Layout';
import './App.css';

function App() {
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

export default App;
