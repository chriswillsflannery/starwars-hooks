import React, { useState, Suspense } from 'react';
// import Luke from './Luke';
// eslint-disable-next-line no-unused-vars
import style from './App.css';
// import luke from '../images/luke-skywalker.jpg';
const Luke = React.lazy(() => import('./Luke'));
const Nemesis = React.lazy(() => import('./Nemesis'));

function importAll(r) {
  let images = {};
  // eslint-disable-next-line array-callback-return
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

const App = () => {
  // const [character, setCharacter] = useState({});
  const [nemesis, setNemesis] = useState(null);
  const [nemesisimg, setNemesisimg] = useState('');

  // useEffect(() => {
  //   fetch('https://swapi.co/api/people/1')
  //     .then(data => data.json())
  //     .then(char => {
  //       console.log(char)
  //       setCharacter(char);
  //     })
  //     .catch(err => console.log("uh oh. error"));
  // }, [])

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

  // const lukeImg = <img className="lukeImage" src={luke} alt="luke skywalker"></img>
  // const nemesisImg = <img className="nemesisImage" src={nemesisimg} alt="nemesis"></img>

  return (
    <>
      <div className="fighters">
        <Suspense fallback={<div><p>....in a galaxy far far away...</p></div>}>
          <Luke />
        </Suspense>
        {/* <div className="nemesis">
          {nemesis ? nemesisImg : null}
          <br />
          {nemesis ? `nemesis: ${nemesis.name}` : 'nemesis approaching!'}
        </div> */}
        <Suspense fallback={<div><p>....in a galaxy far far away...</p></div>}>
          <Nemesis imag={nemesisimg} nemname={nemesis ? nemesis.name : null} />
        </Suspense>
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
