import React, { useState } from 'react';
import styled from 'styled-components';
import Character from './characters'

const SingleCharacter = styled.li`
    width: 25%;
    max-width: 25%;
    flex: 0 0 25%;
    background: #fff;
    border-radius: 6px;
    margin: 20px;
    border: 1px solid #c4c4c4;
    padding: 10px;
    list-style-type: none;

    p {
        font-size: 18px;

        &:first-child {
            text-align: center;
            font-size: 25px;
            font-weight: bold;
        }
    }
`

const SingleCharacterInfo = (props) => {
    const { name, gender, birthyear, skinColor, eyeColor, mass } = props;
    return (
        <SingleCharacter>
            <p>{name}</p>
            <p>Gender: {gender}</p>
            <p>Birth Year: {birthyear}</p>
            <p>Skin Color: {skinColor}</p>
            <p>Eye Color: {eyeColor}</p>
            <p>Mass: {mass}</p>
        </SingleCharacter>
    )
}

export default SingleCharacterInfo;