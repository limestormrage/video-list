import React from 'react';
import { Footer } from '../../layout/footer/footer';
import { Header } from '../../layout/header/header';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
