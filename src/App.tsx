import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ThingsWeDo from './components/ThingsWeDo';
import Banners from './components/BannerContainer';
import NewsList from './components/NewsList';

import './styles/index.scss';


function App() {
  return (
    <div className="App">
      <Header />
      <Banners />
      <ThingsWeDo />
      <NewsList />
      <Footer />
    </div>
  );
}

export default App;
