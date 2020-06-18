// import state hooks and other useful files
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

// import the data that needs to be displayed

import CharacterContainer from './CharacterContainer.js';

//create a functional component to grab our data from the API and render it

const App = () => {

// initialize a slice of state to keep track of the data.

  const [starWarsCharacterData, setData] = useState([]);
  useEffect (() => {

    // grab the data from the API 
    const getAPI = () => {axios.get('https://swapi.dev/api/people')
    .then( response => {
      console.log(response.data.results);
      setData(response['data']['results']);
    }) // closes then response
    .catch(error => {
      console.log(error);
    })} // closes catch error

    getAPI();
    
  }, []); //closes the useEffect
  
 
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.



  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <CharacterContainer characterData = {starWarsCharacterData}>

    </CharacterContainer> 


  )
  //closes the return
  // 0: {name: "Luke Skywalker", height: "172", mass: "77", hair_color: "blond", skin_color: "fair", …}


} 

export default App;