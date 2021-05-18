import React from 'react';
import './styles.css';
import cardsArr from '../src/components/data' 
//import card1
import Card from './components/Card'
// import Card2 from './components/Card2'

export default function App() {

const cards = cardsArr.map((ele, index) => { 
  return ( 
  <Card {...ele} key={index} /> 
  ); }) 
console.log('this is cards:', cards);
  return (
    <div className="App">
      <h1>Bootstrap Cards To Component Example</h1>
    <section className="cards">
      {cards}
    </section>
    </div>
  );
}
