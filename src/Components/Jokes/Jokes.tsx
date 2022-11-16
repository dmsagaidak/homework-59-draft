import React, {useEffect, useState} from 'react';
import {ChuckMeme} from "../../types";

const url ='https://api.chucknorris.io/jokes/random';

const Jokes = () => {
  const [jokes, setJokes] = useState<ChuckMeme[]>([]);

  const getNewJoke = () =>{
    const fetchData = async () =>{
      const response = await fetch(url);

      if(response.ok) {
        const memes: ChuckMeme[] = await response.json();
        const newJokes = memes.map(meme =>({
          ...meme,
          categories: meme.categories,
          created_at: meme.created_at,
          icon_url: meme.icon_url,
          id: meme.id,
          updated_at: meme.updated_at,
          url: meme.url,
          value: meme.value
        }))
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