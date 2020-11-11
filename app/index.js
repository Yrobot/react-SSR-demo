import React from 'react';
import Header from './components/Header';
import './style.css';
import { hydrate } from 'react-dom';

const App = () => (
  <div>
    <Header />
  </div>
);

if (typeof window !== 'undefined') hydrate(<App />, document.getElementById('app'));

export default App();
