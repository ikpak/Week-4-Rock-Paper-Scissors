import React from 'react';
import './App.css';
import Box from './components/Box'

const choices = {
  fire: "https://img.pokemondb.net/artwork/large/flareon.jpg",
  grass: "https://img.pokemondb.net/artwork/large/leafeon.jpg"
}

function App() {
  return (
    <div className="App">
      <Box winner={true} name="Computer" imgUrl={choices.fire} />
      <Box winner={false} name="You" imgUrl={choices.grass}  />
    </div>
  );
}

export default App;
