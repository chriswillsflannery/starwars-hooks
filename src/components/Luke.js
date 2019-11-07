import React, { useState, useEffect } from 'react';
import luke from '../images/luke-skywalker.jpg';


const Luke = () => {
  const [character, setCharacter] = useState({}); // luke info

  useEffect(() => {
    fetch('https://swapi.co/api/people/1')
      .then(data => data.json())
      .then(char => {
        setCharacter(char);
      })
      .catch(err => console.log("uh oh. error"));
  }, [])

  return (
    <div>
      <div className="character">
        <img className="lukeImage" src={luke} alt="luke skywalker"></img>
        <br />
        <p>{character.name}</p>
        <p>{character.birth_year}</p>
        <p>{character.mass}</p>
      </div>
    </div>
  )
}

export default Luke;