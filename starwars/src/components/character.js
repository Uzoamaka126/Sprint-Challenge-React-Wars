import React, { useState } from 'react';
import styled from 'styled-components';
import Character from './characters'

const SingleCharacter = styled.li`
    width: 25%;
    max-width: 25%;
    flex: 0 0 25%;
    background: #fff;
    border-radius: 6px;
    margin-right: 10px;


`

const SingleCharacterInfo = (props) => {
    const { name, gender, birthyear, skinColor, eyeColor, mass } = props;
    return (
        <SingleCharacter>
            <p>Name: {name}</p>
            <p>Gender: {gender}</p>
            <p>Birth Year: {birthyear}</p>
            <p>Skin Color: {skinColor}</p>
            <p>Eye Color: {eyeColor}</p>
            <p>Mass: {mass}</p>
        </SingleCharacter>
    )
}

export default SingleCharacterInfo;