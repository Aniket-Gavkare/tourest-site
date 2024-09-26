import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DestinationList from './components/DestinationList';
import Footer from './components/Footer';
import './assets/css/style.css'; // Your styles

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <DestinationList />
      </main>
      <Footer />
    </div>
  );
}
