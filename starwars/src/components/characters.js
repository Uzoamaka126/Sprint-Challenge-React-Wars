import React from 'react';
import styled from 'styled-components';
import SingleCharacter from './character'

const CharactersListContainer = styled.ul`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 300px;
`

const Characters = props => {
    // const { characters } = props.character;
    console.log(props);
    return (
        <CharactersListContainer>
           {
                props.character.map(
                    (person) => (
                        <SingleCharacter 
                            key={person.name}
                            name={person.name}
                            gender={person.gender}
                            birthyear={person.birth_year}
                            skinColor={person.skin_color}
                            eyeColor={person.eye_color}
                            mass={person.mass}
                        />
                    )
                )
           }
        
        
        
        </CharactersListContainer>
    )

}

export default Characters;