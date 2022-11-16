import React from 'react';
import MovieList from "./Containers/MovieList/MovieList";
import Jokes from "./Components/Jokes/Jokes";
import './App.css';

function App() {
  return (
    <div className="App">
      <MovieList/>
      <Jokes/>
    </div>
  );
}

export default App;
