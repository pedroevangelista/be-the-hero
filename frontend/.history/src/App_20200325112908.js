import React from 'react';
import Header from './Header';

function App() {

  const counter = 0;

  function increment() {
    counter++;
  }

  return (
    <div>
      <Header>Contador: {counter}}</Header>
      <button>Incrementar</button>
    </div>
  );
}

export default App;
