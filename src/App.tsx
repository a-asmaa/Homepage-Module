import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ThingsWeDo from './components/ThingsWeDo';
import Banners from './components/Banner/BannerContainer';
import NewsList from './components/News/NewsList';

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
