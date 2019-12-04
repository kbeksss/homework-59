import React from 'react';
import './App.css';
import JokesContainer from "./containers/JokesContainer/JokesContainer";
import MoviesContainer from "./containers/MoviesContainer/MoviesContainer";

function App() {
  return (
    <div className="App">
        <MoviesContainer/>
        <JokesContainer/>
    </div>
  );
}

export default App;
