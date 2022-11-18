import React, {useEffect, useState} from 'react';
import {ChuckMeme} from "../../types";

const url ='https://api.chucknorris.io/jokes/random';

const Jokes = () => {
  const [jokes, setJokes] = useState<ChuckMeme[]>([]);

  const getNewJoke = () =>{
    const fetchData = async () =>{
      const response = await fetch(url);
      if(response.ok) {
        const memes = await response.json();
        console.log(memes.length);
        const newJokes = [
          {...memes}
        ]

        setJokes(newJokes);
      }
    };
    fetchData().catch(console.error);
  }

  useEffect(() => {
    getNewJoke();
  }, []);

  return (
    <div>
      {jokes.map(joke =>(
        <div
        key={joke.id}>
          {joke.value}
        </div>
      ))}
      <button onClick={getNewJoke}>New joke</button>
    </div>
  );
};

export default Jokes;