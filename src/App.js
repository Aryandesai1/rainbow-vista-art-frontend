import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import AboutUs from './components/AboutUs';
import Shows from './components/Shows';
import Artists from './components/Artists';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <AboutUs />
      <Shows />
      <Artists />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
