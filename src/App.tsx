import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ThingsWeDo from './components/ThingsWeDo';
import Banners from './components/Banners';
import NewsList from './components/NewsList';

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
