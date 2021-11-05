import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import './App.css';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [people, setPeople] = useState([]);
  // const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.dev/api/people').then( res => {
      console.log(res.data)
      setPeople(res.data);
  }).catch( res => console.error(res.data));
  }, [])

  console.log(people);
  
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <>
      <Character className="Character" data={people}/>
      </>
    </div>
  );
}

export default App;
