// Write your Character component here
// import data
import React from 'react';
import styled from 'styled-components';
const WrapperDiv = 
    styled.div`
    text-align: center;
    `;
const MyListItems = 
    styled.li`
    list-style-type: none;
    `;

 const CharacterList = (props) => {

//what does our character need?


    return (
   
        <WrapperDiv className="character">
            <h2>{props.character.name}</h2>
            <ul>
                <MyListItems>Height: {props.character.height}</MyListItems>
                <MyListItems>Mass: {props.character.mass}</MyListItems>
            </ul>
        </WrapperDiv>
   
    ) //closes the return

 }// closes CharacterList
 export default CharacterList;