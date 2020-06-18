import React from 'react';

// components
import Character from './components/Character.js';


const CharacterContainer = (props) => {
    return (
        <div className="characterContainer">
            {props.characterData.map((character, index) => <Character  key={index} character={character} />) }
        </div>
    );
}

export default CharacterContainer;