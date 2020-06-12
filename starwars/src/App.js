import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';


const App = () => {

  const [data, getData] = useState([]);
 

  useEffect (() => {
    
    const getAPI = () => {axios.get('(https://swapi.dev/')
    .then( response => {
      console.log(response);
      getData(response['data']['results']);
    })
    .catch(error => {
      console.log(error);
    })}

    getAPI();
    
  }, []);
  
  console.log(data);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">REACT WARS ></h1>


    </div>
  );
}

export default App;
