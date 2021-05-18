import React from 'react';
import './styles.css';
//import card1
import Card1 from './components/Card1'
import Card2 from './components/Card2'

export default function App() {
  return (
    <div className="App">
      <h1>Bootstrap Cards To Component Example</h1>
    <section class="cards">
      <Card1 />
      <Card2 />
    </section>
    </div>
  );
}
