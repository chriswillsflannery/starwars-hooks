import React, { useState, useEffect } from 'react';
import luke from '../images/luke-skywalker.jpg';
import style from './App.css';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

const App = () => {
  const [character, setCharacter] = useState({});
  const [nemesis, setNemesis] = useState(null);
  const [nemesisimg, setNemesisimg] = useState('');

  useEffect(() => {
    fetch('https://swapi.co/api/people/1')
      .then(data => data.json())
      .then(char => {
        console.log(char)
        setCharacter(char);
      })
      .catch(err => console.log("uh oh. error"));
  }, [])

  const getNemesis = () => {
    let randomNum = Math.ceil(Math.random() * 20);
    if (randomNum === 17) randomNum = 18;
    let url = `https://swapi.co/api/people/${randomNum}`;

    fetch(url)
      .then(data => data.json())
      .then(char => {
        setNemesis(char);
        const { name } = char;
        // Turn Capitalized Name into lowercased-name-with.jpg
        const parsedName = `${name.toLowerCase().replace(/ /gi, '-')}.jpg`;


        const imgPath = images[parsedName];
        console.log("imgPath", imgPath);

        setNemesisimg(imgPath);
      })
      .catch(err => console.log("unable to fetch nemesis"));
  }

  const lukeImg = <img className="lukeImage" src={luke} alt="luke skywalker"></img>
  const nemesisImg = <img className="nemesisImage" src={nemesisimg} alt="nemesis"></img>

  return (
    <>
      <div className="fighters">
        <div className="character">
          {character.name ? lukeImg : 'loading image........'}
          <br />
          {character.name ? `name: ${character.name}` : 'loading name........'}
          <br />
          {character.birth_year ? `birth year: ${character.birth_year}` : 'loading birth year........'}
          <br />
          {character.mass ? `mass: ${character.mass}` : 'loading mass........'}
          <br />
          <br />
        </div>
        <div className="nemesis">
          {nemesis ? nemesisImg : null}
          <br />
          {nemesis ? `nemesis: ${nemesis.name}` : 'nemesis approaching!'}
        </div>
      </div>
      <div className="controls">
        <button onClick={() => getNemesis()}>
          generate nemesis
      </button>
      </div>
    </>
  )
}

export default App;
